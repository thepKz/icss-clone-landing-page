/**
 * Crawl https://icss.com.vn (rendered HTML via Playwright) → /crawl/*.md
 * Links trong file được map sang route icss-web.
 *
 * Cần: npm install (playwright) + npx playwright install chromium
 * Chạy: npm run crawl:icss
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CRAWL = join(ROOT, "crawl");
const BASE = "https://icss.com.vn";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function mapHref(href) {
  if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  let u;
  try {
    u = new URL(href, BASE);
  } catch {
    return href;
  }
  const host = u.hostname.replace(/^www\./, "");
  const path = u.pathname.replace(/\/$/, "") || "/";
  const q = u.search || "";

  if (host === "csa.icss.com.vn") return `/products/csa-endpoint${q}`;
  if (host !== "icss.com.vn") return u.href;

  const rules = [
    ["/articles/articles-list", "/articles"],
    ["/products/chatbot", "/products/v-ai-agent"],
    ["/ai-soc", "/products/ai-soc"],
    ["/esg", "/gioi-thieu"],
    ["/products/pentest-services", "/lien-he"],
    ["/doi-tac", "/#doi-tac"],
  ];
  for (const [from, to] of rules) {
    if (path === from) return to + (q && !to.includes("?") ? q : "");
  }
  return path + q + (u.hash || "");
}

function textToMdParagraphs(text) {
  return text
    .split(/\n+/)
    .map((l) => l.trim())
    .filter(Boolean)
    .join("\n\n");
}

async function renderedMarkdown(browser, url) {
  const page = await browser.newPage();
  try {
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 90_000 });
    } catch {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90_000 });
    }
    await page.waitForTimeout(1800);

    const title = (await page.title()) || url;
    let bodyText = "";
    const pick = [
      "main",
      "article",
      '[class*="prose"]',
      '[class*="article"]',
      "#__next > div",
    ];
    for (const sel of pick) {
      const loc = page.locator(sel).first();
      if ((await loc.count()) > 0) {
        const t = (await loc.innerText().catch(() => "")).trim();
        if (t.length > bodyText.length) bodyText = t;
      }
    }
    if (bodyText.length < 120) {
      bodyText = (await page.locator("body").innerText()).trim();
    }

    const links = await page
      .$$eval("a[href]", (as) =>
        as
          .map((a) => ({
            href: a.getAttribute("href"),
            label: (a.textContent || "").trim().slice(0, 120),
          }))
          .filter((x) => x.href && !x.href.startsWith("#")),
      )
      .catch(() => []);

    const internalMd = [];
    const seen = new Set();
    for (const { href, label } of links) {
      const m = mapHref(href);
      if (!m.startsWith("http") && m.startsWith("/")) {
        const line = `- [${label || m}](${m})`;
        if (!seen.has(line)) {
          seen.add(line);
          internalMd.push(line);
        }
      }
    }

    const front = `---
source: ${url}
captured: ${new Date().toISOString().slice(0, 10)}
note: "Nội dung lấy từ trang production sau khi render; link map sang route icss-web."
---

`;
    const core = `# ${title.replace(/\s+/g, " ").trim()}\n\n## Nội dung\n\n${textToMdParagraphs(bodyText).slice(0, 200_000)}`;
    const linkBlock =
      internalMd.length > 0
        ? `\n\n## Liên kết nội bộ (đã chuẩn hóa)\n\n${internalMd.slice(0, 200).join("\n")}\n`
        : "\n";
    return front + core + linkBlock;
  } finally {
    await page.close();
  }
}

async function loadDiscoveredArticleSlugs() {
  try {
    const raw = await readFile(join(CRAWL, "discovered-routes.json"), "utf8");
    const j = JSON.parse(raw);
    if (Array.isArray(j.articleSlugs)) return j.articleSlugs;
  } catch {
    /* chưa chạy discover:routes */
  }
  return [];
}

async function collectArticlePaths(browser) {
  const page = await browser.newPage();
  try {
    await page.goto(`${BASE}/articles/articles-list`, {
      waitUntil: "networkidle",
      timeout: 90_000,
    });
    await page.waitForTimeout(2500);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(800);
    const hrefs = await page.$$eval('a[href^="/articles/"]', (as) =>
      [...new Set(as.map((a) => a.getAttribute("href")))].filter(
        (h) => h && !h.includes("articles-list"),
      ),
    );
    return hrefs;
  } finally {
    await page.close();
  }
}

async function writeMd(relPath, markdown) {
  const file = join(CRAWL, relPath);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, markdown, "utf8");
}

async function writeEsgPlaceholder() {
  const md = `---
source: ${BASE}/esg (404 at crawl time)
captured: ${new Date().toISOString().slice(0, 10)}
mapsTo: /gioi-thieu
note: "Production /esg không tải được; dùng crawl/gioi-thieu.md cho messaging ESG."
---

# ESG (legacy path /esg)

Chuyển sang route \`/gioi-thieu\` trong bản thiết kế mới.
`;
  await writeMd("esg-legacy.md", md);
}

const JOBS = [
  { url: `${BASE}/`, out: "home.md" },
  { url: `${BASE}/gioi-thieu`, out: "gioi-thieu.md" },
  { url: `${BASE}/lien-he`, out: "lien-he.md" },
  { url: `${BASE}/tuyen-dung`, out: "tuyen-dung.md" },
  { url: `${BASE}/articles/articles-list`, out: "articles.md" },
  { url: `${BASE}/nha-may-thong-minh`, out: "nha-may-thong-minh.md" },
  { url: `${BASE}/toa-nha-thong-minh`, out: "toa-nha-thong-minh.md" },
  { url: `${BASE}/products/ai-soc`, out: "products/ai-soc.md" },
  { url: `${BASE}/ai-soc`, out: "products/_legacy-ai-soc-path.md" },
  { url: `${BASE}/products/chatbot`, out: "products/v-ai-agent.md" },
  { url: `${BASE}/products/vietguard`, out: "products/vietguard.md" },
  { url: `${BASE}/products/pentest-services`, out: "products/_legacy-pentest-services.md" },
  { url: `${BASE}/doi-tac`, out: "doi-tac-legacy.md" },
  { url: `${BASE}/hoat-dong-xa-hoi`, out: "hoat-dong-xa-hoi.md" },
  { url: `${BASE}/khach-hang`, out: "khach-hang.md" },
];

async function main() {
  await mkdir(CRAWL, { recursive: true });
  const browser = await chromium.launch({ headless: true });

  try {
    for (const { url, out } of JOBS) {
      try {
        const md = await renderedMarkdown(browser, url);
        await writeMd(out, md);
        console.log("ok", out);
      } catch (e) {
        console.error("fail", url, e.message);
      }
      await sleep(500);
    }

    await writeEsgPlaceholder();

    const fromDiscover = await loadDiscoveredArticleSlugs();
    const discoverPaths = fromDiscover.map((s) => `/articles/${s}`);
    let articlePaths = [...discoverPaths];
    try {
      const fromList = await collectArticlePaths(browser);
      articlePaths = [...new Set([...articlePaths, ...fromList])];
      console.log("articles total", articlePaths.length, `(discover ${discoverPaths.length})`);
    } catch (e) {
      console.error("article list", e.message);
    }

    for (const path of articlePaths) {
      const clean = path.trim();
      const url = clean.startsWith("http") ? clean : `${BASE}${clean}`;
      const slug = clean.replace(/^\/articles\//, "").split("?")[0].trim();
      try {
        const md = await renderedMarkdown(browser, url);
        await writeMd(`articles/${slug}.md`, md);
        console.log("ok", `articles/${slug}.md`);
      } catch (e) {
        console.error("fail", url, e.message);
      }
      await sleep(400);
    }

    try {
      const md = await renderedMarkdown(browser, "https://csa.icss.com.vn/");
      await writeMd("products/csa-endpoint.md", md);
      console.log("ok products/csa-endpoint.md");
    } catch (e) {
      console.error("csa", e.message);
    }
  } finally {
    await browser.close();
  }

  const readme = `# Crawl archive — icss.com.vn

Thư mục này chứa bản trích nội dung **sau khi trình duyệt render** (Playwright), phục vụ thiết kế lại theo hướng growth + taste.

## Redirect / route map (production → icss-web)

| Trước | Sau |
|-------|-----|
| /articles/articles-list | /articles |
| /products/chatbot | /products/v-ai-agent |
| /ai-soc | /products/ai-soc |
| /products/pentest-services | /lien-he |
| /doi-tac | /doi-tac → client redirect \`/#doi-tac\` |
| https://csa.icss.com.vn/ | /products/csa-endpoint |
| /esg | /gioi-thieu (URL cũ có thể 404) |

File \`products/_legacy-*\` và \`esg-legacy.md\` giữ bản ghi từ URL cũ để đối chiếu.

\`\`\`bash
npm run crawl:icss
\`\`\`
`;
  await writeFile(join(CRAWL, "README.md"), readme, "utf8");
  console.log("done README.md");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

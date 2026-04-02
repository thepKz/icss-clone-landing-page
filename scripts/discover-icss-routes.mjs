/**
 * Thu thập path nội bộ từ icss.com.vn (đã render) + phân trang tin tức nếu có.
 * Ghi: crawl/discovered-routes.json
 *
 * Chạy: node scripts/discover-icss-routes.mjs
 */
import { writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const BASE = "https://icss.com.vn";

const SEEDS = [
  "/",
  "/gioi-thieu",
  "/lien-he",
  "/tuyen-dung",
  "/articles/articles-list",
  "/nha-may-thong-minh",
  "/toa-nha-thong-minh",
  "/doi-tac",
  "/products/ai-soc",
  "/products/chatbot",
  "/products/vietguard",
  "/products/pentest-services",
  "/ai-soc",
  "/esg",
];

function normalizePath(href) {
  try {
    const u = new URL(href, BASE);
    if (!/icss\.com\.vn$/i.test(u.hostname.replace(/^www\./, ""))) return null;
    const p = u.pathname.replace(/\/$/, "") || "/";
    return p + (u.search || "");
  } catch {
    return null;
  }
}

async function collectLinksFromPage(page) {
  return page.$$eval("a[href]", (as) =>
    as.map((a) => a.getAttribute("href")).filter(Boolean),
  );
}

async function harvestArticlesList(browser) {
  const page = await browser.newPage();
  const articlePaths = new Set();
  try {
    try {
      await page.goto(`${BASE}/articles/articles-list`, {
        waitUntil: "networkidle",
        timeout: 45_000,
      });
    } catch {
      await page.goto(`${BASE}/articles/articles-list`, {
        waitUntil: "domcontentloaded",
        timeout: 45_000,
      });
    }
    await page.waitForTimeout(1500);

    for (let i = 0; i < 30; i++) {
      const hrefs = await collectLinksFromPage(page);
      for (const h of hrefs) {
        const n = normalizePath(h);
        if (n && n.startsWith("/articles/") && !n.includes("articles-list")) {
          articlePaths.add(n.split("?")[0]);
        }
      }

      const nextSelectors = [
        'a:has-text("Sau")',
        'a:has-text("Next")',
        'button:has-text("Sau")',
        'a[rel="next"]',
        '[aria-label*="next" i]',
        '[aria-label*="Trang sau" i]',
      ];
      let clicked = false;
      for (const sel of nextSelectors) {
        const el = page.locator(sel).first();
        if ((await el.count()) > 0 && (await el.isEnabled().catch(() => false))) {
          try {
            await el.click({ timeout: 3000 });
            clicked = true;
            await page.waitForTimeout(2000);
            await page.waitForLoadState("networkidle", { timeout: 25_000 }).catch(() => {});
            break;
          } catch {
            /* continue */
          }
        }
      }
      if (!clicked) break;
    }
  } catch (e) {
    console.error("harvestArticlesList:", e.message);
  } finally {
    await page.close();
  }
  return [...articlePaths];
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const paths = new Set();
  const errors = [];

  try {
    const articlesFromList = await harvestArticlesList(browser);
    articlesFromList.forEach((p) => paths.add(p));

    for (const seed of SEEDS) {
      const page = await browser.newPage();
      try {
        const url = `${BASE}${seed}`;
        let res;
        try {
          res = await page.goto(url, { waitUntil: "networkidle", timeout: 45_000 });
        } catch {
          res = await page.goto(url, {
            waitUntil: "domcontentloaded",
            timeout: 45_000,
          });
        }
        if (!res || res.status() >= 400) {
          errors.push({ path: seed, status: res?.status() ?? "?" });
        }
        await page.waitForTimeout(800);
        const hrefs = await collectLinksFromPage(page);
        for (const h of hrefs) {
          const n = normalizePath(h);
          if (n) paths.add(n.split("?")[0]);
        }
      } catch (e) {
        errors.push({ path: seed, error: e.message });
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }

  const sorted = [...paths].sort();
  const report = {
    capturedAt: new Date().toISOString(),
    base: BASE,
    pathCount: sorted.length,
    paths: sorted,
    fetchErrors: errors,
    articleSlugs: sorted
      .filter((p) => p.startsWith("/articles/") && p !== "/articles/articles-list")
      .map((p) => p.replace(/^\/articles\//, "")),
  };

  await writeFile(
    join(ROOT, "crawl", "discovered-routes.json"),
    JSON.stringify(report, null, 2),
    "utf8",
  );
  console.log("wrote crawl/discovered-routes.json", sorted.length, "paths");
  if (errors.length) console.log("errors", errors.length, errors);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

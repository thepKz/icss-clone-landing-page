import Image from "next/image";
import Link from "next/link";
import { Package, Buildings } from "@phosphor-icons/react/ssr";
import { articles } from "@/content/articles";
import { home } from "@/content/site";
import { picsum } from "@/lib/picsum";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { ComplianceTicker } from "./compliance-ticker";
import { HomeStatsBento } from "./home-stats-bento";
import { HeroThreatPanel } from "./hero-threat-panel";
import SilkBackground from "@/components/ui/silk-background-animation";

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden
    >
      <path d="M224.5 136.5l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.5-51.5a12 12 0 1 1 17-17l72 72a12 12 0 0 1-.5 17z" />
    </svg>
  );
}

export function HomeHero() {
  return (
    <section className="relative flex min-h-[min(92dvh,860px)] flex-col overflow-x-hidden overflow-y-visible bg-white pt-24 dark:bg-zinc-950 md:pt-28">
      <SilkBackground opacity={0.15} />

      <div className="relative z-1 flex min-h-0 min-w-0 flex-1 flex-col">
        <div className="mx-auto grid w-full max-w-[1400px] flex-1 grid-cols-1 content-center gap-10 px-4 pb-8 md:grid-cols-12 md:items-center md:gap-x-10 md:px-8 md:pb-12 lg:gap-x-14 lg:px-10 lg:pb-14">

          {/* ── Left column: text ── */}
          <div className="order-2 md:order-0 md:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px flex-1 max-w-8 bg-teal-600 dark:bg-teal-500" aria-hidden />
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-700 dark:text-zinc-200">
                  {home.hero.eyebrow}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.04} className="mt-5 md:mt-6">
              <h1 className="text-pretty font-bold tracking-tight text-stone-900 dark:text-white">
                <span className="block text-[2.6rem] leading-[1.06] sm:text-[3.15rem] md:text-[3.5rem] md:leading-[1.04] lg:text-[4rem] lg:leading-[1.02]">
                  {home.hero.titleLead}
                </span>
                <span className="mt-1 block text-[2.6rem] font-bold leading-[1.06] text-teal-700 sm:text-[3.15rem] md:mt-1.5 md:text-[3.5rem] md:leading-[1.04] lg:text-[4rem] lg:leading-[1.02] dark:text-teal-400">
                  {home.hero.titleAccent}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.08} className="mt-4 md:mt-5">
              <p className="max-w-[44ch] text-pretty text-[15px] leading-relaxed text-stone-500 dark:text-zinc-300 md:text-base">
                {home.hero.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-7 flex flex-wrap items-center gap-3 md:mt-8">
              <Link
                href={home.hero.ctaPrimary.href}
                className="inline-flex h-[50px] items-center gap-2.5 rounded-lg bg-teal-600 px-7 text-sm font-semibold text-white transition-all duration-200 hover:bg-teal-700 active:scale-[0.99] dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400"
              >
                {home.hero.ctaPrimary.label}
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link
                href={home.hero.ctaSecondary.href}
                className="inline-flex h-[50px] items-center gap-2.5 rounded-lg border border-stone-300 px-7 text-sm font-semibold text-stone-700 transition-colors duration-200 hover:bg-stone-50 active:scale-[0.99] dark:border-zinc-600 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800/60"
              >
                {home.hero.ctaSecondary.label}
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={0.16} className="mt-8 md:mt-10">
              <ul
                className="flex flex-wrap items-center gap-6 border-t border-stone-200/80 pt-5 dark:border-zinc-800 md:gap-8"
                aria-label="Thông tin cam kết ICS"
              >
                {home.hero.trustChips.map((chip, idx) => (
                  <li
                    key={chip.label}
                    className={
                      idx > 0
                        ? "border-l border-stone-200/80 pl-6 dark:border-zinc-700 md:pl-8"
                        : ""
                    }
                  >
                    <p className="font-mono text-xl font-semibold tabular-nums tracking-tight text-stone-900 dark:text-white">
                      {chip.value}
                    </p>
                    <p className="mt-0.5 text-[13px] text-stone-500 dark:text-zinc-300">
                      {chip.label}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* ── Right column: product visual + threat panel ── */}
          <div className="order-1 md:order-0 md:col-span-7">
            <Reveal x={12} className="w-full">
              <div className="overflow-hidden rounded-xl border border-stone-200/40 ring-1 ring-stone-900/5 shadow-2xl dark:border-zinc-700/30 dark:ring-white/5 dark:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
                <Image
                  src="/images/home/product-ai-soc.jpg"
                  alt="AI SOC Dashboard — Trung tâm điều hành an ninh mạng ICS"
                  width={960}
                  height={540}
                  className="block w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 55vw"
                  priority
                />
              </div>
            </Reveal>

            <Reveal x={12} delay={0.08} className="mt-5 w-full md:mt-6">
              <HeroThreatPanel />
            </Reveal>
          </div>

        </div>
      </div>
      <ComplianceTicker />
    </section>
  );
}

export function HomeStats() {
  return (
    <SectionShell
      id="doi-tac"
      className="scroll-mt-28 border-t border-zinc-200/80 bg-white text-zinc-900 dark:border-white/[0.06] dark:bg-transparent dark:text-zinc-100"
      containerClassName="max-w-[1400px] mx-auto px-4 md:px-8"
    >
      <HomeStatsBento
        eyebrow={home.stats.eyebrow}
        title={home.stats.title}
        subtitle={home.stats.subtitle}
        introSecondary={home.stats.introSecondary}
        introMetaLine={home.stats.introMetaLine}
        items={home.stats.items}
      />
    </SectionShell>
  );
}

function ProductEditorialRow({
  indexLabel,
  eyebrow,
  name,
  desc,
  signal,
  href,
  imageSeed,
  imageSrc,
  imageGrayscale,
  imageSizes,
  imageClassName = "object-cover",
  /** Ảnh dashboard 16:9 — khung `aspect-video` + `object-contain` để không cắt mép. */
  preserveWideDashboard,
  reverse,
}: {
  indexLabel: string;
  eyebrow: string;
  name: string;
  desc: string;
  signal?: string;
  href: string;
  /** Dùng khi có ảnh tĩnh trong `public/` (ưu tiên hơn picsum). */
  imageSrc?: string;
  imageSeed: string;
  imageGrayscale?: boolean;
  imageSizes: string;
  imageClassName?: string;
  preserveWideDashboard?: boolean;
  reverse?: boolean;
}) {
  const imgSrc =
    imageSrc ??
    picsum(imageSeed, 960, 720, {
      grayscale: imageGrayscale,
    });
  const textCol = reverse
    ? "md:col-span-5 md:col-start-8 md:order-2"
    : "md:col-span-5 md:order-1";
  const imgCol = reverse
    ? "md:col-span-7 md:order-1"
    : "md:col-span-7 md:order-2";

  return (
    <article className="grid grid-cols-1 gap-10 border-t border-zinc-200/90 pt-14 dark:border-white/[0.08] md:grid-cols-12 md:items-center md:gap-12 md:pt-16 lg:gap-16">
      <div className={textCol}>
        <Reveal x={reverse ? 8 : -8}>
          <p className="font-mono text-[11px] tabular-nums tracking-wider text-zinc-600">
            {indexLabel}
          </p>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            {eyebrow}
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl md:leading-tight">
            {name}
          </h3>
          <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-zinc-600">{desc}</p>
          {signal ? (
            <p className="mt-5 max-w-[52ch] border-l-2 border-accent/45 bg-accent-muted/70 py-2.5 pl-4 text-sm font-medium leading-relaxed text-zinc-700 dark:border-accent/35 dark:bg-accent-muted/40 dark:text-zinc-200">
              {signal}
            </p>
          ) : null}
          <Link
            href={href}
            className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-zinc-800 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white"
          >
            <span className="border-b border-zinc-400/50 pb-0.5 transition-[border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:border-accent/60 dark:border-white/25 dark:group-hover:border-accent/55">
              Xem chi tiết
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300/80 bg-zinc-100/80 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:border-accent/35 group-hover:bg-accent-muted active:translate-y-px active:scale-[0.98] dark:border-white/10 dark:bg-white/[0.04] dark:group-hover:border-accent/30 dark:group-hover:bg-accent-muted/80">
              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Reveal>
      </div>
      <div className={imgCol}>
        <Reveal x={reverse ? -8 : 8} delay={0.06}>
          <Link
            href={href}
            className="ics-product-visual-link block outline-none ring-offset-4 ring-offset-zinc-100 focus-visible:ring-2 focus-visible:ring-accent/40 dark:ring-offset-zinc-950 dark:focus-visible:ring-accent/45 [&_img]:origin-center [&_img]:transition-transform [&_img]:duration-500 [&_img]:ease-[cubic-bezier(0.33,1,0.32,1)] hover:[&_img]:scale-[1.035] [&>div>div]:transition-colors [&>div>div]:duration-[400ms] [&>div>div]:ease-[cubic-bezier(0.33,1,0.32,1)] hover:[&>div>div]:border-teal-700/22 dark:hover:[&>div>div]:border-cyan-400/28"
            aria-label={`${name}: xem chi tiết`}
          >
            <div className="rounded-[1.65rem] bg-zinc-200/45 p-1.5 ring-1 ring-zinc-200/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] dark:bg-zinc-800/35 dark:ring-white/[0.09] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div
                className={
                  preserveWideDashboard
                    ? "relative aspect-video w-full overflow-hidden rounded-[calc(1.65rem-6px)] border border-zinc-200/90 bg-zinc-100/75 shadow-[inset_0_1px_0_rgba(0,0,0,0.04)] dark:border-white/[0.08] dark:bg-zinc-900/55 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    : "relative aspect-[16/11] w-full overflow-hidden rounded-[calc(1.65rem-6px)] border border-zinc-200/90 bg-zinc-100/60 shadow-[inset_0_1px_0_rgba(0,0,0,0.04)] md:aspect-[5/4] dark:border-white/[0.08] dark:bg-zinc-900/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                }
              >
                <Image
                  src={imgSrc}
                  alt={imageSrc ? `${name} — minh họa` : ""}
                  fill
                  className={`${preserveWideDashboard ? "object-contain object-center" : imageClassName} scale-100`}
                  sizes={imageSizes}
                  priority={!!imageSrc && indexLabel === "01"}
                />
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </article>
  );
}

export function HomeProductsBento() {
  const [agent, soc, endpoint] = home.productsSection.items;
  const ps = home.productsSection;

  return (
    <SectionShell className="bg-white dark:bg-transparent">
      <Reveal>
        <div className="mb-3 flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-800/20 bg-teal-800/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-teal-900 dark:border-teal-400/30 dark:bg-teal-400/15 dark:text-teal-200">
            <Package className="h-3.5 w-3.5" weight="duotone" aria-hidden />
            Sản phẩm
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-600">
            {ps.eyebrow}
          </span>
        </div>
        <h2 className="max-w-[22ch] text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:max-w-3xl md:text-3xl md:leading-tight">
          {ps.title}
        </h2>
        <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-zinc-600">
          {ps.subtitle}
        </p>
      </Reveal>

      <div className="mt-4">
        <ProductEditorialRow
          indexLabel="01"
          eyebrow="Trọng tâm triển khai"
          name={soc.name}
          desc={soc.desc}
          signal={soc.signal}
          href={soc.href}
          imageSrc="/images/home/product-ai-soc.jpg"
          imageSeed="ics-product-ai-soc"
          imageSizes="(max-width: 768px) 100vw, 50vw"
          preserveWideDashboard
          reverse={false}
        />
        <ProductEditorialRow
          indexLabel="02"
          eyebrow="Trải nghiệm ứng dụng"
          name={agent.name}
          desc={agent.desc}
          signal={agent.signal}
          href={agent.href}
          imageSrc="/images/home/v-agent.jpg"
          imageSeed={`ics-product-${agent.slug}`}
          imageSizes="(max-width: 768px) 100vw, 50vw"
          reverse
        />
        <ProductEditorialRow
          indexLabel="03"
          eyebrow="Bảo vệ điểm cuối"
          name={endpoint.name}
          desc={endpoint.desc}
          signal={endpoint.signal}
          href={endpoint.href}
          imageSrc="/images/home/csa.png"
          imageSeed={`ics-product-${endpoint.slug}`}
          imageSizes="(max-width: 768px) 100vw, 50vw"
          preserveWideDashboard
          reverse={false}
        />
      </div>
    </SectionShell>
  );
}

export function HomeSolutionsZigzag() {
  const rows = home.solutionsWide.items;
  return (
    <SectionShell className="border-t border-zinc-200/80 dark:border-white/6">
      <Reveal>
        <div className="mb-3 flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-400/40 bg-zinc-100/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-700 dark:border-zinc-600/50 dark:bg-zinc-800/50 dark:text-zinc-300">
            <Buildings className="h-3.5 w-3.5" weight="duotone" aria-hidden />
            Giải pháp theo ngành
          </span>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
          {home.solutionsWide.title}
        </h2>
        <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-zinc-600">
          {home.solutionsWide.subtitle}
        </p>
      </Reveal>
      <div className="mt-14 space-y-16 md:space-y-24">
        {rows.map((row, idx) => (
          <div
            key={row.name}
            className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
              idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <Reveal x={idx % 2 === 0 ? -12 : 12}>
              <Link
                href={row.href}
                className="ics-sol-visual-link block outline-none ring-offset-4 ring-offset-zinc-100 focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 active:scale-[0.995] dark:ring-offset-zinc-950 dark:focus-visible:ring-accent/45 [&_img]:origin-center [&_img]:transition-transform [&_img]:duration-500 [&_img]:ease-[cubic-bezier(0.33,1,0.32,1)] hover:[&_img]:scale-[1.035] [&>div>div]:transition-colors [&>div>div]:duration-[400ms] [&>div>div]:ease-[cubic-bezier(0.33,1,0.32,1)] hover:[&>div>div]:border-teal-700/22 dark:hover:[&>div>div]:border-cyan-400/28 hover:[&_.ics-sol-vignette]:opacity-[0.62]"
                aria-label={`${row.name}: xem giải pháp`}
              >
                <div className="rounded-[2rem] bg-zinc-200/40 p-1.5 ring-1 ring-zinc-200/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] dark:bg-zinc-800/30 dark:ring-white/[0.08] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(2rem-6px)] border border-zinc-200/90 bg-zinc-100/40 shadow-[inset_0_1px_0_rgba(0,0,0,0.04)] dark:border-white/[0.07] dark:bg-zinc-900/35 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <Image
                      src={
                        row.href === "https://csa.icss.com.vn/"
                          ? "/images/home/csa.png"
                          : row.href === "/nha-may-thong-minh"
                            ? "/images/home/nhamaythongminh.webp"
                          : row.href === "/toa-nha-thong-minh"
                            ? "/images/home/toanhathongminh.jpg"
                          : picsum(`ics-sol-${idx}`, 800, 600, { blur: 1 })
                      }
                      alt={row.name}
                      fill
                      className={
                        row.href === "https://csa.icss.com.vn/"
                          ? "object-contain object-center scale-100"
                          : "object-cover scale-100"
                      }
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                    <div
                      className="ics-sol-vignette pointer-events-none absolute inset-0 bg-linear-to-tr from-zinc-950/55 via-transparent to-transparent opacity-100 transition-opacity duration-400 ease-[cubic-bezier(0.33,1,0.32,1)] dark:from-zinc-950/65"
                      aria-hidden
                    />
                    <div className="ics-sol-bottom pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-zinc-950/85 via-zinc-950/35 to-transparent px-5 pb-4 pt-16 dark:from-zinc-950/90">
                      <p className="ics-sol-label text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90">
                        {row.name}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={0.06} x={idx % 2 === 0 ? 12 : -12}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                {row.name}
              </h3>
              <p className="mt-4 max-w-[55ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                {row.desc}
              </p>
              {row.signal ? (
                <p className="mt-5 max-w-[55ch] border-l-2 border-accent/40 py-1 pl-4 text-sm font-medium leading-relaxed text-zinc-700 dark:border-accent/35 dark:text-zinc-300">
                  {row.signal}
                </p>
              ) : null}
              <Link
                href={row.href}
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-teal-700 dark:hover:text-teal-300"
              >
                Chi tiết giải pháp
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-accent-muted/50 transition-[transform,border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:border-accent/55 dark:bg-accent-muted/35">
                  <ArrowIcon className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function HomeCommitments() {
  const c = home.commitments;
  return (
    <SectionShell className="border-t border-zinc-200/80 bg-white dark:border-white/[0.06] dark:bg-zinc-900/20">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-600">
              {c.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl md:leading-tight">
              {c.title}
            </h2>
            <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-zinc-600 md:text-base">
              {c.subtitle}
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <div className="border-t border-zinc-200/90 dark:border-white/[0.08]">
            {c.items.map((item, idx) => (
              <Reveal
                key={item.title}
                delay={0.05 * idx}
                className="group border-b border-zinc-200/90 py-10 transition-[background-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-zinc-50/90 dark:border-white/[0.08] dark:hover:bg-white/[0.03] md:py-12"
              >
                <article className="grid gap-6 border-l-2 border-transparent pl-5 transition-[border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:border-accent/45 md:grid-cols-12 md:items-start md:gap-8 md:pl-6">
                  <div className="md:col-span-5">
                    <div className="flex items-baseline gap-3 md:block">
                      <span className="font-mono text-[11px] tabular-nums tracking-wider text-zinc-600 transition-colors duration-300 group-hover:text-accent dark:text-zinc-400 dark:group-hover:text-accent">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white md:mt-2 md:text-xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-zinc-600 md:col-span-7">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function HomeNewsTeaser() {
  const top = articles.slice(0, 3);
  const nt = home.newsTeaser;
  return (
    <SectionShell className="border-t border-zinc-200/80 dark:border-white/[0.06]">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
            {nt.title}
          </h2>
          <p className="mt-3 max-w-[55ch] text-base leading-relaxed text-zinc-600">
            {nt.subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <Link
            href={nt.cta.href}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300/80 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent/45 hover:text-zinc-950 dark:border-white/15 dark:text-zinc-200 dark:hover:border-accent/40 dark:hover:text-white"
          >
            {nt.cta.label}
            <ArrowIcon />
          </Link>
        </Reveal>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {top.map((a, idx) => (
          <Reveal
            key={a.slug}
            delay={0.07 * idx}
            className={idx === 0 ? "md:col-span-2" : ""}
          >
            <Link
              href={`/articles/${a.slug}`}
              className={`ics-news-card-link flex h-full overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 shadow-sm transition-shadow duration-300 ease-[cubic-bezier(0.33,1,0.32,1)] hover:shadow-[0_12px_28px_-18px_rgba(24,24,27,0.12)] dark:border-white/[0.07] dark:bg-zinc-900/25 dark:shadow-none dark:hover:shadow-[0_16px_32px_-20px_rgba(0,0,0,0.35)] [&_img]:origin-center [&_img]:transition-transform [&_img]:duration-500 [&_img]:ease-[cubic-bezier(0.33,1,0.32,1)] hover:[&_img]:scale-[1.035] [&_h3]:transition-colors [&_h3]:duration-300 [&_h3]:ease-[cubic-bezier(0.33,1,0.32,1)] hover:[&_h3]:text-accent dark:hover:[&_h3]:text-teal-300 hover:[&_.ics-news-peek]:translate-x-0.5 hover:[&_.ics-news-peek]:opacity-100 ${
                idx === 0
                  ? "min-h-0 flex-col md:min-h-[220px] md:flex-row"
                  : "flex-col"
              }`}
            >
              <div
                className={`relative shrink-0 overflow-hidden ${
                  idx === 0
                    ? "aspect-[16/10] w-full md:aspect-auto md:w-[44%] md:min-h-[220px]"
                    : "aspect-[16/10] w-full"
                }`}
              >
                <Image
                  src={picsum(`ics-news-${a.slug}`, 640, 400)}
                  alt=""
                  fill
                  className="object-cover"
                  sizes={
                    idx === 0
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 100vw, 50vw"
                  }
                />
                {idx === 0 ? (
                  <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/25 bg-zinc-950/55 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    Nổi bật
                  </div>
                ) : null}
              </div>
              <div
                className={`flex flex-1 flex-col justify-center ${
                  idx === 0 ? "p-6 md:p-8" : "p-6"
                }`}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <time className="font-mono text-xs tabular-nums text-zinc-600">
                    {a.date}
                  </time>
                  <span className="font-mono text-[11px] tabular-nums text-zinc-400 dark:text-zinc-400">
                    · {a.readMinutes} phút đọc
                  </span>
                </div>
                <h3
                  className={`mt-2 font-semibold leading-snug text-zinc-900 dark:text-white ${
                    idx === 0
                      ? "text-lg md:text-xl md:leading-snug"
                      : "text-base"
                  }`}
                >
                  {a.title}
                </h3>
                <p
                  className={`mt-2 flex-1 leading-relaxed text-zinc-600 ${
                    idx === 0 ? "line-clamp-3 text-sm md:text-base" : "text-sm"
                  }`}
                >
                  {a.excerpt}
                </p>
                <span className="ics-news-peek mt-4 inline-flex w-fit text-xs font-semibold uppercase tracking-[0.18em] text-accent opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.33,1,0.32,1)]">
                  Đọc bài →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

export function HomeCredentialBand() {
  const { credentialBand } = home;
  return (
    <div
      className="relative z-1 w-full border-y border-zinc-200/80 bg-white/95 dark:border-white/7 dark:bg-zinc-950/95"
      role="region"
      aria-label="Chứng nhận và đối tác ICS"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-4 md:px-8 md:py-3">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0 lg:divide-x lg:divide-zinc-200/70 dark:lg:divide-white/10">
          <div className="shrink-0 lg:flex lg:w-[min(100%,10.5rem)] lg:items-center lg:pr-6">
            <p className="text-[9px] font-semibold uppercase leading-snug tracking-[0.2em] text-zinc-600 dark:text-zinc-300">
              {credentialBand.eyebrow}
            </p>
          </div>
          <ul className="grid min-w-0 flex-1 list-none grid-cols-1 divide-y divide-zinc-200/70 dark:divide-white/10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5 sm:divide-y-0 lg:grid-cols-4 lg:gap-0">
            {credentialBand.items.map((item, idx) => (
              <li
                key={item.label}
                className={`flex min-h-[44px] items-start gap-2.5 py-3.5 sm:min-h-0 sm:py-0 lg:min-h-[48px] lg:items-center lg:px-4 lg:py-2 ${
                  idx > 0
                    ? "lg:border-l lg:border-zinc-200/70 lg:pl-5 dark:lg:border-white/10"
                    : ""
                }`}
              >
                {item.highlight ? (
                  <span className="relative mt-0.5 flex h-2 w-2 shrink-0" aria-hidden>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                  </span>
                ) : (
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" aria-hidden />
                )}
                <div className="min-w-0 flex-1">
                  <span
                    className={`block text-[11px] font-semibold leading-snug tracking-tight ${
                      item.highlight
                        ? "text-teal-800 dark:text-teal-300"
                        : "text-zinc-900 dark:text-zinc-200"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.note ? (
                    <span className="mt-0.5 block text-[10px] leading-snug text-zinc-600 dark:text-zinc-300">
                      {item.note}
                    </span>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export { ComplianceTicker } from "./compliance-ticker";

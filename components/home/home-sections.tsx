import Image from "next/image";
import Link from "next/link";
import { articles } from "@/content/articles";
import { home } from "@/content/site";
import { picsum } from "@/lib/picsum";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { ComplianceTicker } from "./compliance-ticker";
import { HeroMediaRotator } from "./hero-media-rotator";
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
    <section className="relative flex min-h-0 flex-col overflow-hidden bg-[#F0EFEC] pt-24 dark:bg-zinc-950 md:min-h-[100dvh] md:pt-28">
      <SilkBackground opacity={0.12} />
      <div className="relative z-[1] mb-6 w-full shrink-0 sm:mb-7 md:mb-10">
        <ComplianceTicker />
      </div>
      <div className="relative z-[1] mx-auto grid w-full max-w-none flex-1 grid-cols-1 content-center gap-10 px-4 pb-12 sm:px-6 md:grid-cols-12 md:items-stretch md:gap-x-10 md:gap-y-8 md:px-8 lg:px-12 md:pb-16">
        <p
          className="pointer-events-none absolute bottom-[18%] right-[4%] z-0 hidden select-none font-light leading-none tracking-[-0.04em] text-stone-400/15 dark:text-white/5 md:block md:text-[clamp(4rem,12vw,9rem)]"
          aria-hidden
        >
          ICS
        </p>
        <div className="relative z-[2] order-2 min-w-0 md:order-none md:col-span-5 md:border-r md:border-stone-300/90 md:pr-10 dark:md:border-zinc-700/90 lg:pt-2">
          <div className="min-w-0">
          <Reveal>
            <div className="flex flex-wrap items-end gap-x-4 gap-y-2 border-b border-stone-400/55 pb-4 dark:border-zinc-600/80">
              <span className="rounded-sm bg-teal-900/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white dark:bg-teal-600/90 dark:text-teal-950">
                {home.hero.featuredPill}
              </span>
              <span className="hidden h-4 w-px bg-stone-300 sm:block dark:bg-zinc-600" aria-hidden />
              <span className="min-w-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-700 dark:text-zinc-300">
                {home.hero.eyebrow}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05} className="mt-6 md:mt-8">
            <h1 className="max-w-[min(100%,22rem)] text-pretty font-bold tracking-tight text-stone-900 dark:text-white sm:max-w-none">
              <span className="block text-[1.875rem] leading-[1.1] sm:text-[2.25rem] md:text-[2.65rem] md:leading-[1.06] lg:text-[3.05rem] lg:leading-[1.04]">
                {home.hero.titleLead}
              </span>
              <span className="mt-2 block text-[1.5rem] font-semibold leading-[1.12] text-teal-800 sm:text-[1.75rem] md:mt-2.5 md:text-[2rem] lg:text-[2.25rem] dark:text-teal-400">
                {home.hero.titleAccent}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-5 md:mt-6">
            <p className="max-w-[min(52ch,100%)] border-l-[3px] border-teal-800/85 pl-4 text-pretty text-base leading-[1.65] text-stone-700 dark:border-teal-500/70 dark:text-zinc-400 md:text-lg md:leading-relaxed">
              {home.hero.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.14} className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
            <Link
              href={home.hero.ctaPrimary.href}
              className="group inline-flex min-h-[44px] items-center gap-3 rounded-xl bg-teal-900 px-6 py-2.5 text-sm font-semibold tracking-tight text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_28px_-12px_rgba(19,78,74,0.22)] ring-1 ring-teal-950/40 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-teal-950 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_32px_-12px_rgba(19,78,74,0.26)] active:translate-y-px active:scale-[0.99] dark:bg-teal-600 dark:text-teal-950 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_28px_-12px_rgba(45,212,191,0.14)] dark:ring-teal-800/50 dark:hover:bg-teal-400"
            >
              {home.hero.ctaPrimary.label}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 dark:border-teal-950/25 dark:bg-teal-950/15 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <ArrowIcon className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link
              href={home.hero.ctaSecondary.href}
              className="text-sm font-semibold text-stone-800 underline decoration-stone-400/80 decoration-2 underline-offset-[5px] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-teal-900 hover:decoration-teal-800 dark:text-zinc-200 dark:decoration-zinc-600 dark:hover:text-teal-300 dark:hover:decoration-teal-500/80"
            >
              {home.hero.ctaSecondary.label}
            </Link>
          </Reveal>
          <Reveal delay={0.18} className="mt-8 border-t border-stone-300/90 pt-5 dark:border-zinc-700/90">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-zinc-500">
              Cam kết vận hành
            </p>
            <ul
              className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-stone-300/80 dark:sm:divide-zinc-700/90"
              aria-label="Thông tin cam kết ICS"
            >
              {home.hero.trustChips.map((chip, idx) => (
                <li
                  key={chip.label}
                  className="sm:min-w-0 sm:px-4 sm:first:pl-0 sm:last:pr-0"
                >
                  <p className="font-mono text-lg font-semibold tabular-nums tracking-tight text-teal-900 sm:text-xl dark:text-teal-400">
                    {chip.value}
                  </p>
                  <p className="mt-1 max-w-[20ch] text-[13px] leading-snug text-stone-600 dark:text-zinc-400">
                    {chip.label}
                  </p>
                  {idx < home.hero.trustChips.length - 1 ? (
                    <span className="mt-3 block h-px w-full bg-stone-200/90 sm:hidden dark:bg-zinc-700/80" aria-hidden />
                  ) : null}
                </li>
              ))}
            </ul>
          </Reveal>
          </div>
        </div>
        <div className="relative z-[1] order-1 flex min-h-0 min-w-0 md:order-none md:col-span-7 md:col-start-6 md:pt-2">
          <Reveal
            className="relative flex w-full flex-col"
            delay={0.08}
            x={16}
            y={0}
          >
            <div className="border border-stone-400/60 bg-white p-1.5 shadow-[0_24px_56px_-28px_rgba(28,25,23,0.14)] dark:border-zinc-600 dark:bg-zinc-900/50 dark:shadow-[0_28px_64px_-28px_rgba(0,0,0,0.55)]">
              <div className="relative overflow-hidden rounded-sm ring-1 ring-stone-200/90 dark:ring-zinc-700/90">
                <HeroMediaRotator alt="Hạ tầng an ninh và vận hành SOC" />
              </div>
            </div>
            <p className="mt-2 hidden text-right font-mono text-[9px] tracking-[0.2em] text-stone-400 uppercase md:block dark:text-zinc-600">
              Hạ tầng vận hành
            </p>
            <div className="hidden relative z-[3] mt-5 w-full md:block md:mt-6">
              <HeroThreatPanel />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function HomeStats() {
  return (
    <SectionShell
      id="doi-tac"
      className="border-t border-zinc-200/80 bg-zinc-50/90 dark:border-white/[0.06] dark:bg-zinc-950/40"
    >
      <div className="border-b border-zinc-200/90 pb-10 dark:border-white/[0.08] md:pb-12">
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
            {home.stats.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
            {home.stats.title}
          </h2>
          <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-zinc-500">
            {home.stats.subtitle}
          </p>
        </Reveal>
      </div>
      <div className="mt-0 lg:flex lg:items-start lg:justify-between">
        {home.stats.items.map((item, idx) => (
          <Reveal
            key={item.label}
            delay={0.05 * idx}
            className={
              idx > 0
                ? "mt-10 border-t border-zinc-200/90 pt-10 dark:border-white/[0.08] lg:mt-0 lg:w-0 lg:flex-1 lg:border-l lg:border-t-0 lg:border-zinc-200/90 lg:px-10 lg:pt-12 lg:pb-2 dark:lg:border-white/[0.08]"
                : "pt-10 lg:w-0 lg:flex-1 lg:px-0 lg:pr-10 lg:pt-12 lg:pb-2"
            }
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
              {item.label}
            </p>
            <p className="mt-3 text-3xl font-semibold tabular-nums tracking-tight text-foreground md:text-[2.35rem] md:leading-none">
              {item.value}
            </p>
            <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-zinc-500">
              {item.hint}
            </p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function ProductEditorialRow({
  indexLabel,
  eyebrow,
  name,
  desc,
  href,
  imageSeed,
  imageGrayscale,
  imageSizes,
  imageClassName = "object-cover",
  reverse,
}: {
  indexLabel: string;
  eyebrow: string;
  name: string;
  desc: string;
  href: string;
  imageSeed: string;
  imageGrayscale?: boolean;
  imageSizes: string;
  imageClassName?: string;
  reverse?: boolean;
}) {
  const textCol = reverse
    ? "md:col-span-5 md:col-start-8 md:order-2"
    : "md:col-span-5 md:order-1";
  const imgCol = reverse
    ? "md:col-span-7 md:order-1"
    : "md:col-span-7 md:order-2";

  return (
    <article className="grid grid-cols-1 gap-10 border-t border-zinc-200/90 pt-14 dark:border-white/[0.08] md:grid-cols-12 md:items-center md:gap-12 md:pt-16 lg:gap-16">
      <div className={textCol}>
        <Reveal x={reverse ? 12 : -12}>
          <p className="font-mono text-[11px] tabular-nums tracking-wider text-zinc-600">
            {indexLabel}
          </p>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
            {eyebrow}
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl md:leading-tight">
            {name}
          </h3>
          <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-zinc-500">{desc}</p>
          <Link
            href={href}
            className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-zinc-800 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white"
          >
            <span className="border-b border-zinc-400/50 pb-0.5 transition-[border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:border-cyan-700/50 dark:border-white/25 dark:group-hover:border-cyan-400/50">
              Xem chi tiết
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300/80 bg-zinc-100/80 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:border-cyan-600/30 group-hover:bg-cyan-50 active:translate-y-px active:scale-[0.98] dark:border-white/10 dark:bg-white/[0.04] dark:group-hover:border-cyan-400/25 dark:group-hover:bg-cyan-400/[0.06]">
              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Reveal>
      </div>
      <div className={imgCol}>
        <Reveal x={reverse ? -12 : 12} delay={0.06}>
          <Link
            href={href}
            className="group block outline-none ring-offset-4 ring-offset-zinc-100 focus-visible:ring-2 focus-visible:ring-cyan-600/40 dark:ring-offset-zinc-950 dark:focus-visible:ring-cyan-400/40"
            aria-label={`${name}: xem chi tiết`}
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden border border-zinc-200/90 bg-zinc-100/60 shadow-[inset_0_1px_0_rgba(0,0,0,0.04)] md:aspect-[5/4] dark:border-white/[0.08] dark:bg-zinc-900/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <Image
                src={picsum(imageSeed, 960, 720, {
                  grayscale: imageGrayscale,
                })}
                alt=""
                fill
                className={`${imageClassName} transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.02] group-hover:opacity-95`}
                sizes={imageSizes}
              />
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
    <SectionShell className="bg-zinc-50/80 dark:bg-transparent">
      <Reveal>
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
          {ps.eyebrow}
        </p>
        <h2 className="mt-3 max-w-[22ch] text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:max-w-3xl md:text-3xl md:leading-tight">
          {ps.title}
        </h2>
        <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-zinc-500">
          {ps.subtitle}
        </p>
      </Reveal>

      <div className="mt-4">
        <ProductEditorialRow
          indexLabel="01"
          eyebrow="Trọng tâm triển khai"
          name={soc.name}
          desc={soc.desc}
          href={soc.href}
          imageSeed="ics-product-ai-soc"
          imageSizes="(max-width: 768px) 100vw, 50vw"
          reverse={false}
        />
        <ProductEditorialRow
          indexLabel="02"
          eyebrow="Trải nghiệm ứng dụng"
          name={agent.name}
          desc={agent.desc}
          href={agent.href}
          imageSeed={`ics-product-${agent.slug}`}
          imageSizes="(max-width: 768px) 100vw, 50vw"
          reverse
        />
        <ProductEditorialRow
          indexLabel="03"
          eyebrow="Bảo vệ điểm cuối"
          name={endpoint.name}
          desc={endpoint.desc}
          href={endpoint.href}
          imageSeed={`ics-product-${endpoint.slug}`}
          imageGrayscale
          imageSizes="(max-width: 768px) 100vw, 50vw"
          reverse={false}
        />
      </div>
    </SectionShell>
  );
}

export function HomeSolutionsZigzag() {
  const rows = home.solutionsWide.items;
  return (
    <SectionShell className="border-t border-zinc-200/80 dark:border-white/[0.06]">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
          {home.solutionsWide.title}
        </h2>
        <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-zinc-500">
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
            <Reveal x={idx % 2 === 0 ? -20 : 20}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-zinc-200/90 dark:border-white/[0.07]">
                <Image
                  src={picsum(`ics-sol-${idx}`, 800, 600, { blur: 1 })}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/50 to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={0.06} x={idx % 2 === 0 ? 20 : -20}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                {row.name}
              </h3>
              <p className="mt-4 max-w-[55ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {row.desc}
              </p>
              <Link
                href={row.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-800 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-cyan-950 dark:text-cyan-200 dark:hover:text-cyan-100"
              >
                Chi tiết giải pháp
                <ArrowIcon />
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
    <SectionShell className="bg-zinc-200/50 dark:bg-zinc-900/20">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
              {c.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl md:leading-tight">
              {c.title}
            </h2>
            <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-zinc-500 md:text-base">
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
                className="border-b border-zinc-200/90 py-10 dark:border-white/[0.08] md:py-12"
              >
                <article className="grid gap-6 md:grid-cols-12 md:items-start md:gap-8">
                  <div className="md:col-span-5">
                    <div className="flex items-baseline gap-3 md:block">
                      <span className="font-mono text-[11px] tabular-nums tracking-wider text-zinc-600">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white md:mt-2 md:text-xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-zinc-500 md:col-span-7">
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
  return (
    <SectionShell className="border-t border-zinc-200/80 dark:border-white/[0.06]">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
            {home.newsTeaser.title}
          </h2>
          <p className="mt-3 max-w-[55ch] text-base leading-relaxed text-zinc-500">
            {home.newsTeaser.subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <Link
            href={home.newsTeaser.cta.href}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300/80 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-cyan-600/40 hover:text-cyan-900 dark:border-white/15 dark:text-zinc-200 dark:hover:border-cyan-400/35 dark:hover:text-cyan-100"
          >
            {home.newsTeaser.cta.label}
            <ArrowIcon />
          </Link>
        </Reveal>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {top.map((a, idx) => (
          <Reveal key={a.slug} delay={0.07 * idx}>
            <Link
              href={`/articles/${a.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/80 shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 dark:border-white/[0.07] dark:bg-zinc-900/25 dark:shadow-none"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={picsum(`ics-news-${a.slug}`, 640, 400)}
                  alt=""
                  fill
                  className="object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <time className="font-mono text-xs tabular-nums text-zinc-500">
                  {a.date}
                </time>
                <h3 className="mt-2 text-base font-semibold leading-snug text-zinc-900 group-hover:text-cyan-800 dark:text-white dark:group-hover:text-cyan-100">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
                  {a.excerpt}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

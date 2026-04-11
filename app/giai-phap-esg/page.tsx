import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowSquareOut } from "@phosphor-icons/react/ssr";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { SolutionHighlightGrid } from "@/components/solutions/solution-highlight-grid";
import { solutionEsg } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

const esg = solutionEsg;

export const metadata: Metadata = {
  title: esg.title,
  description: esg.seoDescription,
};

export default function EsgSolutionPage() {
  return (
    <>
      <section
        className={`relative min-h-0 overflow-hidden border-b border-zinc-300/90 bg-zinc-100/95 pt-28 pb-14 dark:border-white/[0.06] dark:bg-zinc-950 md:pt-32 md:pb-20`}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-24 left-1/2 h-[min(44rem,85vw)] w-[min(44rem,85vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.14),transparent_68%)] dark:bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1),transparent_65%)]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/4 rounded-full bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.06),transparent_72%)]" />
        </div>
        <p
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden max-w-[100vw] -translate-x-1/2 -translate-y-1/2 select-none text-center font-semibold uppercase leading-none tracking-[0.08em] text-zinc-400/[0.14] dark:text-white/[0.04] md:block md:text-[clamp(2.5rem,8vw,6.5rem)]"
          aria-hidden
        >
          Môi trường · Xã hội · Quản trị
        </p>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.32] [background-image:linear-gradient(rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.06)_1px,transparent_1px)] [background-size:44px_44px] dark:opacity-[0.18] dark:[background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]"
          aria-hidden
        />
        <div className="relative z-[1] mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal slideFromLeft={20}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-900 dark:text-amber-300/90">
                  {esg.heroEyebrow}
                </p>
                <h1 className="mt-4 max-w-[18ch] text-4xl font-semibold tracking-tight text-zinc-950 sm:max-w-none md:text-5xl md:leading-[1.06] dark:text-zinc-50">
                  {esg.title}
                </h1>
                <p className="mt-3 max-w-[52ch] text-base font-medium text-zinc-700 dark:text-zinc-400 md:text-lg">
                  {esg.tagline}
                </p>
                <p className="mt-8 max-w-[58ch] text-lg leading-[1.65] text-zinc-800 md:text-xl md:leading-[1.62] dark:text-zinc-300">
                  {esg.heroIntro}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href={esg.ctaHref}
                    className="inline-flex min-h-11 items-center rounded-full border border-amber-800/45 bg-gradient-to-b from-amber-400/95 to-amber-500/90 px-6 py-3 text-sm font-semibold text-amber-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-amber-700/55 hover:shadow-[0_14px_36px_-12px_rgba(180,83,9,0.35)] active:scale-[0.98] dark:border-amber-400/40 dark:from-amber-500/85 dark:to-amber-600/75 dark:text-amber-950 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                  >
                    {esg.ctaLabel}
                  </Link>
                  <Link
                    href="/lien-he"
                    className={`${ps.ghostOutline} inline-flex min-h-11 items-center active:scale-[0.98]`}
                  >
                    Liên hệ chung
                  </Link>
                </div>
                <p className="mt-8 text-sm text-zinc-600 dark:text-zinc-500">
                  Tham chiếu:{" "}
                  <a
                    href="https://icss.com.vn/giai-phap-esg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-amber-900 underline decoration-amber-900/30 underline-offset-4 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-amber-950 hover:decoration-amber-900/55 dark:text-amber-300 dark:decoration-amber-400/35 dark:hover:text-amber-200"
                  >
                    icss.com.vn/giai-phap-esg
                  </a>
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.08} x={0} className="lg:col-span-5">
              <div
                className={`relative aspect-[4/3] max-w-xl lg:ml-auto lg:max-w-none overflow-hidden rounded-[1.75rem] border border-zinc-300/95 bg-zinc-950 shadow-[0_28px_72px_-32px_rgba(180,83,9,0.25)] ring-2 ring-amber-600/25 dark:border-white/[0.08] dark:ring-amber-400/20`}
              >
                <Image
                  src={picsum("ics-esg-hero", 960, 720)}
                  alt="Báo cáo và chỉ số ESG cho doanh nghiệp"
                  fill
                  className="object-cover opacity-95 dark:opacity-90"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-950/35 via-zinc-950/20 to-transparent dark:from-amber-950/45" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-transparent p-6 pt-16 dark:from-zinc-950/95">
                  <p className="text-lg font-semibold text-white">{esg.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-300">{esg.tagline}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionShell
        className="!py-20 md:!py-28 border-b border-zinc-300/80 bg-white dark:border-white/[0.06] dark:bg-zinc-950"
        aria-labelledby="esg-pillars-heading"
      >
        <Reveal>
          <span className="inline-flex rounded-full border border-amber-800/40 bg-amber-100/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-950 dark:border-amber-400/35 dark:bg-amber-950/40 dark:text-amber-100">
            Ba trụ cột ESG
          </span>
          <h2
            id="esg-pillars-heading"
            className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-zinc-950 md:mt-6 md:text-4xl md:leading-[1.12] lg:text-[2.35rem] dark:text-zinc-50"
          >
            {esg.featuresSectionTitle}
          </h2>
          <p className="mt-6 max-w-[56ch] text-lg leading-[1.65] text-zinc-800 md:mt-7 md:text-xl dark:text-zinc-300">
            {esg.featuresSectionLede}
          </p>
        </Reveal>
        <div className="mt-16 md:mt-20">
          <SolutionHighlightGrid features={esg.features} accent="gold" />
        </div>
      </SectionShell>

      <section
        className="border-y border-zinc-300/90 bg-gradient-to-b from-amber-950/[0.07] via-zinc-50 to-zinc-100/90 py-14 dark:border-white/[0.06] dark:from-amber-950/15 dark:via-transparent dark:to-transparent dark:bg-zinc-900/25"
        aria-label="Chỉ số minh họa"
      >
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="grid grid-cols-1 divide-y divide-zinc-300/90 rounded-2xl border-2 border-amber-800/25 bg-white/95 shadow-[0_20px_50px_-28px_rgba(180,83,9,0.18)] dark:divide-white/[0.06] dark:border-amber-500/20 dark:bg-zinc-950/50 dark:shadow-none md:grid-cols-3 md:divide-x md:divide-y-0">
            {esg.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center px-5 py-9 text-center md:py-8"
              >
                <p className="font-mono text-4xl font-semibold tabular-nums tracking-tight text-amber-900 md:text-[2.85rem] dark:text-amber-200">
                  {s.value}
                </p>
                <p className="mt-4 max-w-[20ch] text-base font-medium leading-snug text-zinc-900 dark:text-zinc-200">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-[72ch] text-center text-sm leading-relaxed text-zinc-700 dark:text-zinc-500">
            {esg.statsDisclaimer}
          </p>
        </div>
      </section>

      <SectionShell
        className="border-b border-zinc-300/80 bg-zinc-50/90 dark:border-white/[0.06] dark:bg-zinc-950"
        aria-labelledby="why-ics-esg"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="lg:col-span-5 lg:top-32 lg:sticky">
            <div className="h-px w-12 rounded-full bg-gradient-to-r from-amber-700/70 to-amber-500/30 dark:from-amber-400/60 dark:to-amber-400/15" aria-hidden />
            <h2
              id="why-ics-esg"
              className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl md:leading-[1.12] dark:text-zinc-50"
            >
              {esg.whyTitle}
            </h2>
            <p className="mt-5 text-lg font-medium text-zinc-800 dark:text-zinc-300">{esg.whyLead}</p>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-7">
            <ul className="space-y-0 rounded-2xl border border-zinc-300/90 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,1)] dark:border-white/10 dark:bg-zinc-900/50 dark:shadow-none">
              {esg.whyPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="border-b border-zinc-200/95 px-6 py-7 last:border-b-0 dark:border-white/8 md:px-8"
                >
                  <p className="flex gap-3 text-base leading-[1.65] text-zinc-900 md:text-lg dark:text-zinc-100">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600 dark:bg-amber-400"
                      aria-hidden
                    />
                    <span>{point}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="bg-white dark:bg-zinc-950" aria-labelledby="esg-related">
        <Reveal>
          <h2
            id="esg-related"
            className="text-xl font-semibold tracking-tight text-zinc-950 md:text-2xl dark:text-zinc-50"
          >
            Tham khảo thêm
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {esg.relatedLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${ps.ghostOutline} inline-flex items-center font-medium text-zinc-900 dark:text-zinc-200 active:scale-[0.98]`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionShell>

      <section
        className={`${ps.bandTopSoft} border-t border-zinc-300/90 py-20 dark:border-white/[0.06] md:py-28`}
        aria-labelledby="esg-finale"
      >
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <h2
              id="esg-finale"
              className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl md:leading-[1.12] dark:text-zinc-50"
            >
              {esg.finaleTitle}
            </h2>
            <p className="mt-8 max-w-[58ch] text-lg leading-[1.65] text-zinc-800 md:mt-9 md:text-xl dark:text-zinc-300">
              {esg.finaleBody}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={esg.ctaHref}
                className="inline-flex min-h-11 items-center rounded-full border border-amber-800/45 bg-gradient-to-b from-amber-400/95 to-amber-500/90 px-6 py-3 text-sm font-semibold text-amber-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_14px_36px_-12px_rgba(180,83,9,0.32)] active:scale-[0.98] dark:border-amber-400/40 dark:from-amber-500/85 dark:to-amber-600/75 dark:text-amber-950"
              >
                {esg.ctaLabel}
              </Link>
              <a
                href="https://icss.com.vn/giai-phap-esg"
                target="_blank"
                rel="noopener noreferrer"
                className={`${ps.ghostOutline} inline-flex min-h-11 items-center gap-2 active:scale-[0.98]`}
              >
                Trang ICS
                <ArrowSquareOut className="h-4 w-4 opacity-80" weight="bold" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

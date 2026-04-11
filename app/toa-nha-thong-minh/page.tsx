import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { SmartBuildingHighlightGrid } from "@/components/solutions/smart-building-highlight-grid";
import { smartBuilding } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

export const metadata: Metadata = {
  title: smartBuilding.title,
  description: smartBuilding.seoDescription,
};

export default function SmartBuildingPage() {
  const sb = smartBuilding;

  return (
    <>
      <section
        className={`relative overflow-hidden ${ps.edgeBottom} pt-28 pb-14 md:pt-32 md:pb-20`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-90 dark:opacity-100"
          aria-hidden
        >
          <div className="absolute -top-32 left-1/2 h-[min(52rem,90vw)] w-[min(52rem,90vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.14),transparent_68%)] dark:bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.12),transparent_65%)]" />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/4 translate-y-1/4 rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.06),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal slideFromLeft={24}>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
                  {sb.heroEyebrow}
                </p>
                <h1 className="mt-4 max-w-[18ch] text-4xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-[1.05]">
                  {sb.title}
                </h1>
                <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-muted md:text-xl md:leading-[1.6]">
                  {sb.heroIntro}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/lien-he"
                    className={`${ps.ctaPillLg} inline-flex min-h-11 items-center active:scale-[0.98]`}
                  >
                    {sb.ctaLabel}
                  </Link>
                  <span className="hidden items-center px-2 text-xs uppercase tracking-[0.18em] text-zinc-400 sm:inline dark:text-zinc-600">
                    Smart Building
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal
              delay={0.08}
              x={0}
              className="lg:col-span-5"
            >
              <div
                className={`relative aspect-[4/3] max-w-xl lg:ml-auto lg:max-w-none ${ps.imageFrame} shadow-[0_32px_80px_-40px_rgba(14,116,144,0.35)] dark:shadow-[0_32px_80px_-40px_rgba(9,9,11,0.55)]`}
              >
                <Image
                  src={picsum("ics-smart-building-hero", 960, 720, { blur: 1 })}
                  alt="Không gian tòa nhà thông minh với hệ thống IoT và giám sát tập trung"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-teal-950/20 via-transparent to-transparent dark:from-zinc-950/40" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden border-t border-zinc-300/80 py-20 md:py-28 dark:border-white/10"
        aria-labelledby="smart-building-features-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-200/95 via-zinc-100 to-teal-50/50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-50 dark:opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(24,24,27,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(24,24,27,0.07) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-32 top-24 h-[22rem] w-[22rem] rounded-full bg-teal-500/20 dark:bg-cyan-500/12 md:h-[26rem] md:w-[26rem]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <span className="inline-flex rounded-full border border-teal-800/35 bg-teal-900/[0.07] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-950 dark:border-cyan-400/30 dark:bg-cyan-400/12 dark:text-cyan-100/95">
              Smart Building
            </span>
            <h2
              id="smart-building-features-heading"
              className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-zinc-950 md:mt-6 md:text-4xl md:leading-[1.12] lg:text-[2.35rem] dark:text-zinc-50"
            >
              {sb.featuresSectionTitle}
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-[1.65] text-zinc-700 md:mt-7 md:text-xl dark:text-zinc-400">
              {sb.featuresSectionLede}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 rounded-2xl border border-teal-800/35 bg-white/95 px-5 py-5 shadow-[0_18px_50px_-34px_rgba(15,118,110,0.35)] md:mt-9 md:rounded-[1.35rem] md:px-7 md:py-6 dark:border-cyan-400/22 dark:bg-zinc-900/95 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <p className="text-base font-semibold leading-snug text-zinc-950 md:text-lg dark:text-zinc-50">
                {sb.featuresValueWedge}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 rounded-[1.75rem] border border-zinc-300/90 bg-white/80 px-4 py-6 shadow-[0_24px_60px_-40px_rgba(24,24,27,0.12)] md:mt-12 md:rounded-[2rem] md:px-8 md:py-8 dark:border-white/12 dark:bg-zinc-950/70 dark:shadow-[0_24px_60px_-40px_rgba(9,9,11,0.5)]">
            <SmartBuildingHighlightGrid features={sb.features} />
          </div>
        </div>
      </section>

      <section
        className={`border-y border-zinc-200/95 py-14 dark:border-white/[0.06] ${ps.band}`}
        aria-label="Chỉ số tác động"
      >
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="grid grid-cols-1 divide-y divide-zinc-200/90 dark:divide-white/[0.06] md:grid-cols-3 md:divide-x md:divide-y-0">
            {sb.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center px-4 py-8 text-center md:py-6"
              >
                <p className="font-mono text-4xl font-medium tabular-nums tracking-tight text-teal-900 dark:text-cyan-200 md:text-[2.75rem]">
                  {s.value}
                </p>
                <p className="mt-3 max-w-[16ch] text-base font-medium leading-snug text-zinc-700 dark:text-zinc-300">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-[62ch] px-2 text-center text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
            {sb.statsContext}
          </p>
        </div>
      </section>

      <SectionShell aria-labelledby="why-ics-smart-building">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <h2
              id="why-ics-smart-building"
              className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl md:leading-[1.12]"
            >
              {sb.whyTitle}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">{sb.whyIntro}</p>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-7">
            <ul className="space-y-0">
              {sb.whyPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="border-b border-zinc-200/90 py-7 first:pt-0 dark:border-white/6"
                >
                  <p className="text-base leading-[1.65] text-zinc-800 dark:text-zinc-200 md:text-lg">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionShell>

      <section
        className={`${ps.bandTopSoft} py-20 md:py-28`}
        aria-labelledby="smart-building-finale"
      >
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <h2
              id="smart-building-finale"
              className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl md:leading-[1.12]"
            >
              {sb.finaleTitle}
            </h2>
            <p className="mt-8 max-w-[58ch] text-lg leading-[1.65] text-muted md:mt-9 md:text-xl">
              {sb.finaleBody}
            </p>
            <Link
              href="/lien-he"
              className={`${ps.ctaPillLg} mt-10 inline-flex min-h-11 items-center active:scale-[0.98]`}
            >
              {sb.ctaLabel}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

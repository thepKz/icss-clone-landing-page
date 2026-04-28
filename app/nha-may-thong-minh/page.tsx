import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowSquareOut } from "@phosphor-icons/react/ssr";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { SolutionHighlightGrid } from "@/components/solutions/solution-highlight-grid";
import { smartFactory } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

const sf = smartFactory;

export const metadata: Metadata = {
  title: sf.title,
  description: sf.seoDescription,
};

export default function SmartFactoryPage() {
  return (
    <>
      <section
        className={`relative overflow-hidden border-b border-zinc-300/90 bg-zinc-100/95 pt-28 pb-14 dark:border-white/[0.06] dark:bg-zinc-950 md:pt-32 md:pb-20`}
      >
        <div className="pointer-events-none absolute inset-0 opacity-100 dark:opacity-100" aria-hidden>
          <div className="absolute -top-28 left-1/2 h-[min(48rem,88vw)] w-[min(48rem,88vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.2),transparent_68%)] dark:bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.12),transparent_65%)]" />
          <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/4 translate-y-1/4 rounded-full bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.12),transparent_72%)] dark:bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.06),transparent_70%)]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.06)_1px,transparent_1px)] [background-size:48px_48px] dark:opacity-[0.2] dark:[background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal slideFromLeft={20}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-900 dark:text-teal-300/90">
                  {sf.heroEyebrow}
                </p>
                <h1 className="mt-4 max-w-[20ch] text-4xl font-semibold tracking-tight text-zinc-950 sm:max-w-none md:text-5xl md:leading-[1.06] dark:text-zinc-50">
                  {sf.title}
                </h1>
                <p className="mt-8 max-w-[58ch] text-lg leading-[1.65] text-zinc-800 md:text-xl md:leading-[1.62] dark:text-zinc-300">
                  {sf.heroIntro}
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/lien-he"
                    className={`${ps.ctaPillLg} inline-flex min-h-11 items-center active:scale-[0.98]`}
                  >
                    {sf.ctaLabel}
                  </Link>
                  <a
                    href="https://smartdashboard.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${ps.ghostOutline} inline-flex min-h-11 items-center gap-2 active:scale-[0.98]`}
                  >
                    Smart Dashboard
                    <ArrowSquareOut className="h-4 w-4 opacity-80" weight="bold" aria-hidden />
                  </a>
                </div>
               
              </Reveal>
            </div>
            <Reveal delay={0.08} x={0} className="lg:col-span-5">
              <div
                className={`relative aspect-[4/3] max-w-xl lg:ml-auto lg:max-w-none ${ps.imageFrame} border-zinc-300/95 shadow-[0_28px_72px_-36px_rgba(15,118,110,0.35)] ring-1 ring-zinc-400/25 dark:border-white/[0.07] dark:shadow-[0_32px_80px_-40px_rgba(9,9,11,0.55)] dark:ring-transparent`}
              >
                <Image
                  src={picsum("ics-factory-hero", 960, 720)}
                  alt="Điều hành tập trung nhà máy thông minh với dashboard và dữ liệu IoT"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-teal-950/25 via-transparent to-transparent dark:from-zinc-950/40" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionShell
        className="!py-20 md:!py-28 border-b border-zinc-300/80 bg-white dark:border-white/[0.06] dark:bg-zinc-950"
        aria-labelledby="smart-factory-features-heading"
      >
        <Reveal>
          <span className="inline-flex rounded-full border border-teal-800/35 bg-teal-800/[0.12] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-950 dark:border-cyan-400/25 dark:bg-cyan-400/10 dark:text-cyan-100/95">
            Smart Factory
          </span>
          <h2
            id="smart-factory-features-heading"
            className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-zinc-950 md:mt-6 md:text-4xl md:leading-[1.12] lg:text-[2.35rem] dark:text-zinc-50"
          >
            {sf.featuresSectionTitle}
          </h2>
          <p className="mt-6 max-w-[56ch] text-lg leading-[1.65] text-zinc-800 md:mt-7 md:text-xl dark:text-zinc-300">
            {sf.featuresSectionLede}
          </p>
        </Reveal>
        <div className="mt-16 md:mt-20">
          <SolutionHighlightGrid features={sf.features} />
        </div>
      </SectionShell>

      <section
        className="border-y border-zinc-300/90 bg-gradient-to-b from-teal-950/[0.06] via-zinc-50 to-zinc-100/90 py-14 dark:border-white/[0.06] dark:from-transparent dark:via-transparent dark:to-transparent dark:bg-zinc-900/30"
        aria-label="Chỉ số tác động minh họa"
      >
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="grid grid-cols-1 divide-y divide-zinc-300/90 rounded-2xl border border-zinc-300/90 bg-white/90 shadow-[0_20px_50px_-28px_rgba(15,118,110,0.15)] dark:divide-white/[0.06] dark:border-white/[0.08] dark:bg-zinc-950/40 dark:shadow-none md:grid-cols-3 md:divide-x md:divide-y-0">
            {sf.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center px-5 py-9 text-center md:py-8"
              >
                <p className="font-mono text-4xl font-semibold tabular-nums tracking-tight text-teal-900 md:text-[2.85rem] dark:text-cyan-200">
                  {s.value}
                </p>
                <p className="mt-4 max-w-[18ch] text-base font-medium leading-snug text-zinc-900 dark:text-zinc-200">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-[72ch] text-center text-sm leading-relaxed text-zinc-700 dark:text-zinc-400">
            {sf.statsDisclaimer}
          </p>
        </div>
      </section>

      <SectionShell
        className="border-b border-zinc-300/80 bg-zinc-50/90 dark:border-white/[0.06] dark:bg-zinc-950"
        aria-labelledby="why-ics-smart-factory"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="lg:col-span-5 lg:top-32 lg:sticky">
            <h2
              id="why-ics-smart-factory"
              className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl md:leading-[1.12] dark:text-zinc-50"
            >
              {sf.whyTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-7">
            <ul className="space-y-0 rounded-2xl border border-zinc-300/90 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,1)] dark:border-white/10 dark:bg-zinc-900/50 dark:shadow-none">
              {sf.whyPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="border-b border-zinc-200/95 px-6 py-8 last:border-b-0 dark:border-white/8 md:px-8"
                >
                  <p className="text-base leading-[1.65] text-zinc-900 md:text-lg dark:text-zinc-100">{point}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="bg-white dark:bg-zinc-950" aria-labelledby="smart-factory-related">
        <Reveal>
          <h2
            id="smart-factory-related"
            className="text-xl font-semibold tracking-tight text-zinc-950 md:text-2xl dark:text-zinc-50"
          >
            Tham khảo thêm
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {sf.relatedLinks.map((item) =>
              item.external ? (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${ps.ghostOutline} inline-flex items-center gap-2 active:scale-[0.98]`}
                  >
                    {item.label}
                    <ArrowSquareOut className="h-4 w-4 opacity-80" weight="bold" aria-hidden />
                  </a>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${ps.ghostOutline} inline-flex items-center font-medium text-zinc-900 dark:text-zinc-200 active:scale-[0.98]`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </SectionShell>

      <section
        className={`${ps.bandTopSoft} border-t border-zinc-300/90 py-20 dark:border-white/[0.06] md:py-28`}
        aria-labelledby="smart-factory-finale"
      >
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <h2
              id="smart-factory-finale"
              className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl md:leading-[1.12] dark:text-zinc-50"
            >
              {sf.finaleTitle}
            </h2>
            <p className="mt-8 max-w-[58ch] text-lg leading-[1.65] text-zinc-800 md:mt-9 md:text-xl dark:text-zinc-300">
              {sf.finaleBody}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/lien-he"
                className={`${ps.ctaPillLg} inline-flex min-h-11 items-center active:scale-[0.98]`}
              >
                {sf.ctaLabel}
              </Link>
              <Link
                href="/toa-nha-thong-minh"
                className={`${ps.ghostOutline} inline-flex min-h-11 items-center active:scale-[0.98]`}
              >
                Giải pháp tòa nhà thông minh
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

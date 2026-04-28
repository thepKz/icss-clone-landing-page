import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { AiSocDashboardZoom } from "@/components/products/ai-soc-dashboard-zoom";
import {
  AiSocCompetitorMatrix,
  AiSocPlatformMatrix,
} from "@/components/products/ai-soc-platform-matrix";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { productAiSoc } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";

const p = productAiSoc;

const primaryHeroCta = p.hero.ctas.find((c) => c.variant === "primary") ?? p.hero.ctas[0];

export const metadata: Metadata = {
  title: "AI SOC | SIEM Chronicle & Gurucul",
  description: p.seoDescription,
  openGraph: {
    title: "AI SOC | SIEM Chronicle & Gurucul",
    description: p.seoDescription,
    url: "/products/ai-soc",
    images: [
      {
        url: p.dashboard.imageSrc,
        width: 1920,
        height: 1080,
        alt: p.dashboard.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SOC | SIEM Chronicle & Gurucul",
    description: p.seoDescription,
    images: [p.dashboard.imageSrc],
  },
};

function HeroCta({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary";
}) {
  const isPrimary = variant === "primary";
  const base =
    "group inline-flex items-center gap-0 rounded-full text-sm font-medium transition-[transform,colors,border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]";
  const shell =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-teal-900/25 bg-teal-900/10 text-teal-900 transition-[transform,colors,border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px dark:border-cyan-400/25 dark:bg-cyan-400/10 dark:text-cyan-100";
  if (isPrimary) {
    return (
      <Link
        href={href}
        className={`${base} ${ps.ctaPillLg} gap-2 pl-6 pr-2.5 py-1.5`}
      >
        <span>{label}</span>
        <span className={shell} aria-hidden>
          <ArrowRight className="h-4 w-4" weight="regular" aria-hidden />
        </span>
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className={`${base} ${ps.ghostOutline} px-6 py-3`}
    >
      {label}
    </Link>
  );
}

export default function AiSocPage() {
  return (
    <>
      {/* Hero: editorial split + double-bezel dashboard (full image, object-contain) */}
      <section className="border-b border-zinc-200/90 bg-zinc-50 text-zinc-950 dark:border-white/[0.06] dark:bg-[#09090b] dark:text-zinc-100">
        <div className="mx-auto max-w-[1400px] px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
            <Reveal slideFromLeft={28} className="max-w-xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Sản phẩm
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
                {p.title}
              </h1>
              <p className="mt-5 text-base font-medium leading-snug text-zinc-800 dark:text-zinc-200">
                {p.hero.tagline}
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                {p.definition}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {p.audience}
              </p>
              <p className="mt-5 rounded-2xl border border-teal-800/20 bg-teal-900/[0.04] px-4 py-3 text-sm font-medium leading-relaxed text-teal-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:border-cyan-400/20 dark:bg-cyan-400/[0.06] dark:text-cyan-100/95 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                {p.hero.positioningLine}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {p.hero.lead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                {p.hero.ctas.map((c) => (
                  <HeroCta
                    key={c.href + c.label}
                    href={c.href}
                    label={c.label}
                    variant={c.variant}
                  />
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.06} x={20} className="min-w-0">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                {p.dashboard.caption}
              </p>
              {/* Outer shell */}
              <div className="rounded-[2rem] border border-zinc-200/90 bg-zinc-200/40 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                {/* Inner core: stabilized plate — chart text stays legible; image never cropped */}
                <div className="overflow-hidden rounded-[calc(2rem-6px)] border border-zinc-300/80 bg-zinc-100/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] dark:border-white/[0.07] dark:bg-zinc-950/75 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <div className="flex min-h-[240px] w-full items-center justify-center p-4 md:min-h-[320px] md:p-6">
                    <AiSocDashboardZoom
                      src={p.dashboard.imageSrc}
                      alt={p.dashboard.imageAlt}
                      width={1920}
                      height={1080}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      imageClassName="h-auto w-full max-h-[min(78vh,840px)] object-contain object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* KPI strip — dense numbers on calm plate */}
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-200/50 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/[0.07] dark:bg-white/[0.06]">
            {p.kpis.map((k) => (
              <div
                key={k.label}
                className="bg-white/95 px-6 py-6 dark:bg-zinc-950/65"
              >
                <p className="font-mono text-2xl font-semibold tabular-nums text-teal-800 dark:text-cyan-300/90">
                  {k.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-zinc-600 dark:text-zinc-300">
                  {k.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 max-w-[70ch] text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            {p.kpiDisclaimer}
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {p.benefits.map((b) => (
              <li
                key={b}
                className="rounded-2xl border border-zinc-200/90 bg-white/95 px-4 py-3.5 text-sm font-medium leading-snug text-zinc-800 ring-1 ring-teal-800/[0.08] dark:border-white/[0.07] dark:bg-zinc-950/50 dark:text-zinc-200 dark:ring-cyan-400/[0.12]"
              >
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-6 border-t border-zinc-200/80 pt-6 dark:border-white/[0.06]">
            {p.liveStats.map((s) => (
              <div key={s.label} className="min-w-[140px]">
                <p className="font-mono text-lg font-semibold tabular-nums text-zinc-900 dark:text-zinc-100">
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionShell>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {p.reveal.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {p.reveal.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{p.reveal.intro}</p>
          </div>
          <h3 className="mt-14 text-center text-lg font-semibold text-foreground">{p.reveal.sectionTitle}</h3>
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-zinc-200/90 border-l-4 border-l-teal-600/50 bg-white/85 p-6 pl-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] dark:border-white/[0.07] dark:border-l-cyan-400/50 dark:bg-zinc-950/45 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:p-8 md:pl-8">
            <h4 className="text-sm font-bold uppercase tracking-wide text-teal-900 dark:text-cyan-200/90">
              {p.reveal.visibility.title}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.reveal.visibility.body}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {p.reveal.pillars.map((pillar, i) => (
              <Reveal key={pillar.id} delay={i * 0.04}>
                <article className="flex h-full flex-col rounded-2xl border border-zinc-200/90 bg-white/90 p-6 ring-1 ring-teal-800/[0.06] dark:border-white/[0.07] dark:bg-zinc-950/40 dark:ring-cyan-400/[0.1]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-800 dark:text-cyan-300/85">
                    Trụ cột {pillar.id}
                  </p>
                  <h4 className="mt-3 text-base font-semibold text-foreground">{pillar.title}</h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{pillar.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className={ps.bandTop}>
        <Reveal>
          <AiSocPlatformMatrix data={p.platformCompare} />
          <AiSocCompetitorMatrix data={p.competitorCompare} />
          <div className="mt-16 flex flex-col items-center gap-4 rounded-[2rem] border border-zinc-200/90 bg-zinc-50/90 px-6 py-10 text-center dark:border-white/[0.07] dark:bg-zinc-950/35">
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Đã xem so sánh — cùng ICS đánh giá mức độ phù hợp với log, tuân thủ và đội vận hành của bạn.
            </p>
            <HeroCta href={primaryHeroCta.href} label={primaryHeroCta.label} variant="primary" />
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-zinc-200/90 bg-gradient-to-b from-white/95 to-zinc-50/90 px-6 py-10 text-center dark:border-white/[0.08] dark:from-zinc-950/60 dark:to-zinc-950/35 md:px-12 md:py-12">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal-800 dark:text-cyan-300/80">
              {p.marketPain.eyebrow}
            </p>
            <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              {p.marketPain.title}
            </h2>
            <p className="mt-4 text-sm text-muted">{p.marketPain.intro}</p>
            <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-snug text-foreground">
              {p.marketPain.introHighlight}
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {p.marketPain.cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.05}>
                <article className="h-full rounded-2xl border border-zinc-200/90 bg-white/90 p-6 ring-1 ring-zinc-200/60 dark:border-white/[0.07] dark:bg-zinc-950/40 dark:ring-white/[0.05]">
                  <p className="font-mono text-2xl font-bold tabular-nums text-teal-800 dark:text-cyan-300/90">
                    {card.stat}
                  </p>
                  <h3 className="mt-3 text-base font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className={ps.bandTop}>
        <Reveal>
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">{p.socVsAi.title}</h2>
          <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-muted">{p.socVsAi.lead}</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch lg:gap-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/90 bg-gradient-to-br from-zinc-100/90 to-zinc-50 p-8 dark:border-white/[0.08] dark:from-zinc-950/80 dark:to-zinc-900/40 lg:p-10">
              <div
                className="pointer-events-none absolute -right-6 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-rose-500/[0.08] dark:bg-rose-500/[0.1]"
                aria-hidden
              />
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                {p.socVsAi.responseTimeHighlight.traditionalCaption}
              </p>
              <p className="mt-4 font-mono text-5xl font-semibold tabular-nums tracking-tight text-zinc-900 dark:text-zinc-100 md:text-6xl">
                {p.socVsAi.responseTimeHighlight.hours}
                <span className="ml-1 text-2xl font-medium text-zinc-500 dark:text-zinc-400 md:text-3xl">
                  {p.socVsAi.responseTimeHighlight.hoursLabel}
                </span>
              </p>
              <p className="mt-4 max-w-[40ch] text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {p.socVsAi.responseTimeHighlight.note}
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-[2rem] border border-teal-800/25 bg-teal-800/[0.06] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] dark:border-cyan-400/25 dark:bg-cyan-400/[0.08] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] lg:p-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal-900 dark:text-cyan-200/80">
                {p.socVsAi.responseTimeHighlight.aiCaption}
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-teal-950 dark:text-cyan-50 md:text-3xl">
                {p.socVsAi.responseTimeHighlight.aiRange}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                Tự động hóa triage, tương quan và playbook — giảm thời gian chết giữa phát hiện và hành động.
              </p>
            </div>
          </div>

          <ul className="mt-12 space-y-6 border-t border-zinc-200/80 pt-10 dark:border-white/[0.06]">
            {p.socVsAi.rows.map((row) => (
              <li key={row.label} className="grid gap-4 md:grid-cols-[200px_minmax(0,1fr)]">
                <span className="text-sm font-semibold text-foreground">{row.label}</span>
                <div className="space-y-2 text-sm leading-relaxed text-muted">
                  <p>{row.traditional}</p>
                  <p className="text-teal-800 dark:text-cyan-200/85">{row.modern}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionShell>

      <SectionShell>
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            {p.gartner.eyebrow}
          </p>
          <h2 className="mt-3 text-xl font-semibold text-foreground md:text-2xl">{p.gartner.title}</h2>
          <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-muted">{p.gartner.body}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.gartner.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-zinc-200/90 bg-white/90 px-5 py-5 dark:border-white/[0.07] dark:bg-zinc-950/40"
              >
                <p className="font-mono text-lg font-semibold text-teal-800 dark:text-cyan-300/90">
                  {s.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <blockquote className="mt-10 border-l-2 border-teal-700/40 pl-6 dark:border-cyan-400/35">
            <p className="text-sm italic leading-relaxed text-zinc-700 dark:text-zinc-300">
              &ldquo;{p.gartner.quote}&rdquo;
            </p>
            <footer className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">{p.gartner.quoteSource}</footer>
          </blockquote>
          <a
            href={p.gartner.linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-8 inline-flex items-center gap-2 ${ps.linkAccent} text-sm font-medium`}
          >
            {p.gartner.linkLabel}
            <ArrowRight className="h-4 w-4" weight="regular" aria-hidden />
          </a>
        </Reveal>
      </SectionShell>

      <SectionShell className={ps.bandTop}>
        <Reveal>
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">Gurucul — điểm mạnh nền tảng</h2>
          <ul className="mt-8 space-y-8">
            {p.guruculHighlights.map((item) => (
              <li key={item.title} className="max-w-[70ch]">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionShell>

      <SectionShell>
        <Reveal>
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">{p.ecosystem.title}</h2>
          <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-muted">{p.ecosystem.lead}</p>
          <p className="mt-6 text-sm font-semibold text-foreground">{p.ecosystem.subtitle}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {p.ecosystem.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-zinc-200/90 bg-white/90 p-6 dark:border-white/[0.07] dark:bg-zinc-950/40"
              >
                <h3 className="text-base font-semibold text-foreground">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{cap.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm font-medium text-teal-800 dark:text-cyan-200/85">{p.ecosystem.foundation}</p>
          <p className="mt-2 max-w-[70ch] text-sm text-muted">{p.ecosystem.proof}</p>
          <p className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2">
            <Link
              href={p.ecosystem.relatedProduct.href}
              className={`inline-flex items-center gap-2 text-sm font-medium ${ps.linkAccent}`}
            >
              {p.ecosystem.relatedProduct.label}
              <ArrowRight className="h-4 w-4" weight="regular" aria-hidden />
            </Link>
            <Link
              href="/articles/thong-tu-77-2025-tt-nhnn-an-toan-ngan-hang"
              className={`inline-flex items-center gap-2 text-sm font-medium ${ps.linkAccent}`}
            >
              Thông tư 77/2025 và lộ trình tuân thủ ngân hàng
              <ArrowRight className="h-4 w-4" weight="regular" aria-hidden />
            </Link>
          </p>
        </Reveal>
      </SectionShell>

      <SectionShell className={ps.bandTop}>
        <Reveal>
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">{p.architecturePillars.title}</h2>
          <p className="mt-3 max-w-[70ch] text-sm text-muted">{p.architecturePillars.intro}</p>
          <div className="mt-12 space-y-12">
            {p.architecturePillars.items.map((item, i) => (
              <Reveal key={item.n} delay={i * 0.05}>
                <div className="grid gap-6 border-t border-zinc-200/80 pt-10 first:border-t-0 first:pt-0 dark:border-white/[0.06] md:grid-cols-[minmax(0,1fr)_180px] md:items-start">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                      {item.n}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-teal-800 dark:text-cyan-200/80">{item.subtitle}</p>
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 text-sm leading-relaxed text-muted"
                        >
                          <span className={ps.accentMark} aria-hidden>
                            —
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:justify-self-end">
                    <Link href={item.cta.href} className={ps.ctaPill}>
                      {item.cta.label}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell>
        <Reveal>
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">{p.process.title}</h2>
          <p className="mt-2 text-sm text-muted">{p.process.subtitle}</p>
          <ol className="relative mt-10 space-y-8 border-l border-zinc-200 pl-8 dark:border-white/10 md:pl-10">
            {p.process.steps.map((step) => (
              <li key={step.n} className="relative">
                <span
                  className={`absolute -left-[39px] top-1 flex h-5 w-5 items-center justify-center rounded-full md:-left-[47px] ${ps.timelineDot}`}
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{step.n}</span>
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  <span className="rounded-full border border-teal-800/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-teal-900 dark:border-cyan-400/30 dark:text-cyan-200/90">
                    {step.badge}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </SectionShell>

      <SectionShell className={ps.bandTop}>
        <Reveal>
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">{p.roi.title}</h2>
          <p className="mt-2 text-sm text-muted">{p.roi.subtitle}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.roi.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-zinc-200/90 bg-white/90 p-5 dark:border-white/[0.07] dark:bg-zinc-950/40"
              >
                <p className="font-mono text-xl font-semibold text-teal-800 dark:text-cyan-300/90">{m.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-foreground">{m.label}</p>
                <p className="mt-2 text-sm text-muted">{m.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Tiết kiệm chi phí</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {p.roi.savings.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className={ps.accentMark} aria-hidden>
                      —
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Hiệu suất vận hành</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {p.roi.performance.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className={ps.accentMark} aria-hidden>
                      —
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Nâng cao năng lực team</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {p.roi.team.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className={ps.accentMark} aria-hidden>
                      —
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell>
        <Reveal>
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">{p.resources.title}</h2>
          <div className="mt-8 rounded-[2rem] border border-zinc-200/90 bg-white/90 p-8 dark:border-white/[0.07] dark:bg-zinc-950/40 md:p-10">
            <h3 className="text-lg font-semibold text-foreground">{p.resources.card.title}</h3>
            <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted">{p.resources.card.body}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {p.resources.card.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-muted">
                  <span className={ps.accentMark} aria-hidden>
                    —
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <HeroCta
                href={p.resources.card.cta.href}
                label={p.resources.card.cta.label}
                variant="primary"
              />
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell>
        <Reveal>
          <h2 id="ai-soc-faq" className="text-xl font-semibold text-foreground md:text-2xl">
            Câu hỏi thường gặp
          </h2>
          <p className="mt-2 max-w-[65ch] text-sm text-muted">
            Giải đáp nhanh các thắc mắc thường gặp khi đánh giá AI SOC — chi tiết triển khai sẽ được làm rõ trong assessment.
          </p>
          <dl className="mt-10 divide-y divide-zinc-200/90 dark:divide-white/[0.08]">
            {p.faq.map((item) => (
              <div key={item.question} className="grid gap-2 py-8 first:pt-0 md:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] md:gap-10 md:py-10">
                <dt className="text-sm font-semibold text-foreground">{item.question}</dt>
                <dd className="text-sm leading-relaxed text-muted">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </SectionShell>

      <SectionShell className={`${ps.bandTop} pb-20 md:pb-28`}>
        <Reveal>
          <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {p.closing.title}
          </h2>
          <p className="mt-4 max-w-[65ch] text-sm leading-relaxed text-muted">{p.closing.lead}</p>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {p.closing.offers.map((o) => (
              <li
                key={o.title}
                className="rounded-2xl border border-zinc-200/90 bg-white/90 p-6 dark:border-white/[0.07] dark:bg-zinc-950/40"
              >
                <h3 className="text-base font-semibold text-foreground">{o.title}</h3>
                <p className="mt-2 text-sm text-muted">{o.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {p.closing.ctas.map((c) => (
              <HeroCta key={c.href + c.label} href={c.href} label={c.label} variant={c.variant} />
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="border-t border-zinc-200/95 dark:border-white/[0.06]">
        <Reveal>
          <h2 className="text-xl font-semibold text-foreground">{p.gurucul.title}</h2>
          <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-muted">{p.gurucul.body}</p>
          <p className="mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">{p.gurucul.disclaimer}</p>
        </Reveal>
      </SectionShell>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChartLineUp,
  ChatsCircle,
  Robot,
  VideoCamera,
} from "@phosphor-icons/react/ssr";
import { AiSocDashboardZoom } from "@/components/products/ai-soc-dashboard-zoom";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { productVAi } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";

const p = productVAi;

const featureIcons = [ChatsCircle, VideoCamera, Robot, ChartLineUp] as const;

/** Glass-UI: stable content plate + hairline accent (light / dark tuned) */
const glassPlate =
  "rounded-2xl border border-zinc-200/95 bg-white/94 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_12px_40px_-28px_rgba(15,118,110,0.18)] ring-1 ring-teal-800/15 dark:border-white/10 dark:bg-zinc-950/88 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_48px_-24px_rgba(34,211,238,0.12)] dark:ring-cyan-400/18";

const glassPlateSoft =
  "rounded-2xl border border-zinc-200/90 bg-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_8px_32px_-20px_rgba(15,118,110,0.12)] ring-1 ring-teal-800/10 dark:border-white/[0.09] dark:bg-zinc-950/78 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_36px_-22px_rgba(34,211,238,0.08)] dark:ring-cyan-400/12";

/** Hero atmosphere: low-frequency radial hotspots (no blur on scrolling text) */
const heroMesh =
  "bg-[radial-gradient(ellipse_88%_62%_at_94%_-6%,rgba(15,118,110,0.22),transparent_54%),radial-gradient(ellipse_58%_50%_at_-10%_108%,rgba(13,148,136,0.16),transparent_50%),rgb(250,250,250)] dark:bg-[radial-gradient(ellipse_82%_56%_at_92%_-2%,rgba(45,212,191,0.2),transparent_54%),radial-gradient(ellipse_52%_42%_at_-6%_102%,rgba(20,184,166,0.12),transparent_48%),#09090b]";

export const metadata: Metadata = {
  title: p.title,
  description: p.seoDescription,
  openGraph: {
    title: `${p.title} | ICS`,
    description: p.seoDescription,
    url: "/products/v-ai-agent",
    images: [
      {
        url: p.dashboard.imageSrc,
        width: 1200,
        height: 900,
        alt: p.dashboard.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${p.title} | ICS`,
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
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-teal-800/35 bg-teal-800/14 text-teal-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition-[transform,colors,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px dark:border-cyan-400/40 dark:bg-cyan-400/16 dark:text-cyan-50 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]";
  if (isPrimary) {
    return (
      <Link
        href={href}
        className={`${base} ${ps.ctaPillLg} gap-2 py-1.5 pl-6 pr-2.5`}
      >
        <span>{label}</span>
        <span className={shell} aria-hidden>
          <ArrowRight className="h-4 w-4" weight="regular" aria-hidden />
        </span>
      </Link>
    );
  }
  return (
    <Link href={href} className={`${base} ${ps.ghostOutline} px-6 py-3`}>
      {label}
    </Link>
  );
}

export default function VAiAgentPage() {
  return (
    <>
      <section
        className={`relative overflow-hidden border-b border-zinc-200/90 text-zinc-950 dark:border-white/6 dark:text-zinc-100 ${heroMesh}`}
      >
        <div className="relative z-[1] mx-auto max-w-[1400px] px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
          <div className="grid min-h-0 gap-12 lg:min-h-[min(88dvh,920px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
            <Reveal slideFromLeft={28} className="max-w-xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal-900/80 dark:text-cyan-300/75">
                Sản phẩm
              </p>
              <div className="mt-4 border-l-[3px] border-teal-700/55 pl-5 dark:border-cyan-400/50">
                <h1 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
                  {p.displayTitle}
                </h1>
                <p className="mt-5 text-base font-medium leading-snug text-zinc-800 dark:text-zinc-200">
                  {p.hero.headline}
                </p>
                <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {p.hero.lead}
                </p>
              </div>
              <p className="mt-5 inline-flex rounded-full border border-teal-800/25 bg-teal-50/95 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-cyan-400/30 dark:bg-cyan-400/[0.12] dark:text-cyan-50 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                {p.hero.eyebrow}
              </p>
              <div
                className={`mt-8 flex flex-wrap items-baseline gap-4 border-l-[3px] border-teal-700/50 pl-5 dark:border-cyan-400/45 ${glassPlate} py-4 pr-4`}
              >
                <p className="font-mono text-3xl font-semibold tabular-nums text-teal-900 dark:text-cyan-200">
                  {p.hero.stat.value}
                </p>
                <p className="max-w-[20ch] text-sm font-medium leading-snug text-zinc-700 dark:text-zinc-300">
                  {p.hero.stat.label}
                </p>
              </div>
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
              <p className="mt-4 max-w-[65ch] text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {p.statsDisclaimer}
              </p>
            </Reveal>

            <Reveal delay={0.06} x={20} className="min-w-0">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                {p.dashboard.caption}
              </p>
              <div className="rounded-[2rem] border border-teal-800/20 bg-zinc-200/55 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] ring-1 ring-teal-800/12 dark:border-cyan-400/20 dark:bg-white/6 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:ring-cyan-400/15">
                <div className="overflow-hidden rounded-[calc(2rem-6px)] border border-zinc-300/85 bg-zinc-50/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.88)] dark:border-white/8 dark:bg-zinc-950/90 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                  <div className="flex min-h-[220px] w-full items-center justify-center p-4 md:min-h-[300px] md:p-6">
                    <AiSocDashboardZoom
                      src={p.dashboard.imageSrc}
                      alt={p.dashboard.imageAlt}
                      width={900}
                      height={675}
                      sizes="(max-width: 1024px) 100vw, 52vw"
                      imageClassName="h-auto w-full max-h-[min(70dvh,640px)] object-contain object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionShell aria-labelledby="vai-pain-title">
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal-900/75 dark:text-cyan-300/70">
            {p.pain.eyebrow}
          </p>
          <h2
            id="vai-pain-title"
            className="mt-3 max-w-[22ch] text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
          >
            {p.pain.title}
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{p.pain.intro}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 md:grid-rows-[auto_auto]">
          <Reveal className="md:col-start-1 md:row-start-1">
            <article className={`h-full ${glassPlateSoft} p-6 md:p-8`}>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-800 dark:text-cyan-300">
                01
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{p.pain.items[0].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.pain.items[0].body}</p>
            </article>
          </Reveal>
          <Reveal delay={0.05} className="md:col-start-1 md:row-start-2">
            <article className={`h-full ${glassPlateSoft} p-6 md:p-8`}>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-800 dark:text-cyan-300">
                02
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{p.pain.items[1].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.pain.items[1].body}</p>
            </article>
          </Reveal>
          <Reveal delay={0.08} className="md:col-start-2 md:row-span-2 md:row-start-1">
            <article
              className={`flex h-full min-h-[280px] flex-col justify-between ${glassPlate} border-teal-800/30 p-6 ring-2 ring-teal-800/15 dark:border-cyan-400/25 dark:ring-cyan-400/20 md:p-8`}
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-teal-800 dark:text-cyan-300/85">
                  03
                </p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{p.pain.items[2].title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.pain.items[2].body}</p>
              </div>
              <p className="mt-8 text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                {p.solution.eyebrow}
              </p>
            </article>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className={ps.bandTopSoft} aria-labelledby="vai-solution-title">
        <Reveal>
          <div className="rounded-[2rem] border border-teal-800/22 bg-gradient-to-br from-teal-50/95 via-white to-zinc-50 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_20px_50px_-28px_rgba(15,118,110,0.14)] ring-1 ring-teal-800/12 dark:border-cyan-400/22 dark:from-cyan-950/35 dark:via-zinc-950/80 dark:to-[#09090b] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_56px_-26px_rgba(34,211,238,0.1)] dark:ring-cyan-400/14 md:p-10">
            <h2 id="vai-solution-title" className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              {p.solution.title}
            </h2>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{p.solution.body}</p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell aria-labelledby="vai-features-title">
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal-900/75 dark:text-cyan-300/70">
            {p.features.eyebrow}
          </p>
          <h2
            id="vai-features-title"
            className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
          >
            {p.features.title}
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{p.features.intro}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-12 md:grid-rows-2">
          {p.features.items.map((item, i) => {
            const Icon = featureIcons[i];
            const isHero = i === 0;
            return (
              <Reveal
                key={item.title}
                delay={i * 0.04}
                className={
                  isHero
                    ? "md:col-span-7 md:row-span-2"
                    : i === 1
                      ? "md:col-span-5 md:row-start-1"
                      : i === 2
                        ? "md:col-span-5 md:row-start-2"
                        : "md:col-span-12"
                }
              >
                <article
                  className={`flex h-full flex-col p-6 md:p-8 ${
                    isHero
                      ? `${glassPlate} min-h-[280px] border-teal-800/28 ring-2 ring-teal-800/12 dark:border-cyan-400/25 dark:ring-cyan-400/18 md:min-h-0`
                      : glassPlateSoft
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-teal-800/35 bg-teal-800/12 text-teal-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] dark:border-cyan-400/35 dark:bg-cyan-400/14 dark:text-cyan-50 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                      <Icon className="h-5 w-5" weight="regular" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className={`mt-1 text-sm font-medium ${ps.subtitleAccent}`}>{item.subtitle}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell className={ps.bandTop} aria-labelledby="vai-auto-title">
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal-900/75 dark:text-cyan-300/70">
            {p.automation.eyebrow}
          </p>
          <h2
            id="vai-auto-title"
            className="mt-3 max-w-[20ch] text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
          >
            {p.automation.title}
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{p.automation.intro}</p>
        </Reveal>
        <ul className="mt-12 grid gap-8 md:grid-cols-2 md:gap-x-14 md:gap-y-10">
          {p.automation.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <li
                className={`grid gap-3 md:grid-cols-[auto_1fr] md:gap-6 ${glassPlateSoft} px-4 py-5 md:px-5`}
              >
                <span className="font-mono text-sm font-semibold tabular-nums text-teal-800 dark:text-cyan-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </SectionShell>

      <SectionShell aria-labelledby="vai-compare-title">
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal-900/75 dark:text-cyan-300/70">
            {p.compare.eyebrow}
          </p>
          <h2 id="vai-compare-title" className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {p.compare.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{p.compare.subtitle}</p>
        </Reveal>
        <div
          className={`mt-10 ${ps.tableWrap} ring-1 ring-teal-800/12 dark:ring-cyan-400/14`}
        >
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead className="border-b border-teal-800/15 bg-teal-50/95 text-xs uppercase tracking-wider text-zinc-700 dark:border-cyan-400/18 dark:bg-teal-950/45 dark:text-zinc-300">
              <tr>
                <th scope="col" className="px-4 py-3.5 font-semibold">
                  Tiêu chí
                </th>
                <th scope="col" className="px-4 py-3.5 font-semibold">
                  Tự xây dựng
                </th>
                <th
                  scope="col"
                  className="bg-teal-100/80 px-4 py-3.5 font-semibold text-teal-950 dark:bg-cyan-400/12 dark:text-cyan-100"
                >
                  V AI — Agent
                </th>
              </tr>
            </thead>
            <tbody className={`${ps.tableBodyDivide} bg-white dark:bg-zinc-950/55`}>
              {p.compare.rows.map((row) => (
                <tr key={row.criterion} className="transition-colors duration-200 hover:bg-teal-50/40 dark:hover:bg-cyan-400/[0.04]">
                  <th scope="row" className="px-4 py-3 font-medium text-foreground">
                    {row.criterion}
                  </th>
                  <td className="px-4 py-3 text-muted">{row.build}</td>
                  <td className="bg-teal-50/25 px-4 py-3 font-medium text-teal-950 dark:bg-cyan-400/[0.06] dark:text-cyan-100">
                    {row.vai}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionShell>

      <SectionShell className={ps.bandTopSoft} aria-labelledby="vai-industries-title">
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal-900/75 dark:text-cyan-300/70">
            {p.industries.eyebrow}
          </p>
          <h2
            id="vai-industries-title"
            className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
          >
            {p.industries.title}
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{p.industries.intro}</p>
        </Reveal>
        <div className="mt-12 flex flex-col gap-6 md:gap-8">
          {p.industries.items.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.04}>
              <article
                className={`grid gap-4 md:grid-cols-[1fr_auto] md:items-end md:gap-8 ${glassPlateSoft} p-5 md:p-6`}
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-800 dark:text-cyan-300 md:text-right">
                  {item.signal}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell aria-labelledby="vai-security-title">
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal-900/75 dark:text-cyan-300/70">
            {p.security.eyebrow}
          </p>
          <h2
            id="vai-security-title"
            className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
          >
            {p.security.title}
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{p.security.intro}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {p.security.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.03}>
              <article className={`${glassPlateSoft} h-full p-5 md:p-6`}>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className={ps.bandTop} aria-labelledby="vai-ui-title">
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal-900/75 dark:text-cyan-300/70">
            {p.productUi.eyebrow}
          </p>
          <h2 id="vai-ui-title" className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            {p.productUi.title}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article
              className={`flex h-full flex-col justify-between ${glassPlate} p-6 md:min-h-[200px] md:p-8`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{p.productUi.items[0].title}</h3>
                  <span className="rounded-full border border-teal-800/30 bg-teal-900/[0.08] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal-900 dark:border-cyan-400/25 dark:bg-cyan-400/10 dark:text-cyan-100">
                    {p.productUi.items[0].badge}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.productUi.items[0].body}</p>
              </div>
            </article>
          </Reveal>
          <div className="grid gap-6 lg:col-span-5">
            {p.productUi.items.slice(1).map((item, i) => (
              <Reveal key={item.title} delay={0.04 + i * 0.04}>
                <article className={`${glassPlateSoft} p-5 md:p-6`}>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell aria-labelledby="vai-steps-title">
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal-900/75 dark:text-cyan-300/70">
            {p.steps.eyebrow}
          </p>
          <h2 id="vai-steps-title" className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {p.steps.title}
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{p.steps.intro}</p>
        </Reveal>
        <ol className="relative mt-12 border-l-[2px] border-teal-800/25 pl-8 dark:border-cyan-400/25 md:pl-10">
          {p.steps.items.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.05}>
              <li className="relative pb-12 last:pb-0">
                <span
                  className="absolute -left-8 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-teal-800/35 bg-white font-mono text-[10px] font-semibold text-teal-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] ring-2 ring-teal-800/15 dark:border-cyan-400/40 dark:bg-zinc-950 dark:text-cyan-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:ring-cyan-400/20 md:-left-10"
                  aria-hidden
                >
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </SectionShell>

      <SectionShell className={ps.bandTopSoft}>
        <Reveal>
          <div className={`${glassPlate} mx-auto max-w-3xl border-teal-800/25 p-8 text-center ring-2 ring-teal-800/10 dark:border-cyan-400/22 dark:ring-cyan-400/15 md:p-10`}>
            <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">{p.midCta.title}</h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-sm leading-relaxed text-muted">{p.midCta.body}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <HeroCta href={p.midCta.primary.href} label={p.midCta.primary.label} variant="primary" />
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell aria-labelledby="vai-faq-title">
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal-900/75 dark:text-cyan-300/70">
            {p.faq.eyebrow}
          </p>
          <h2 id="vai-faq-title" className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {p.faq.title}
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{p.faq.intro}</p>
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {p.faq.items.map((item) => (
            <details
              key={item.q}
              className={`group ${glassPlateSoft} overflow-hidden transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] open:border-teal-800/35 open:shadow-[0_12px_40px_-22px_rgba(15,118,110,0.14)] open:ring-2 open:ring-teal-800/15 dark:open:border-cyan-400/30 dark:open:shadow-[0_14px_44px_-20px_rgba(34,211,238,0.12)] dark:open:ring-cyan-400/18`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left text-sm font-semibold text-foreground outline-none transition-colors duration-200 hover:bg-teal-50/50 focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] md:p-6 dark:hover:bg-cyan-400/[0.05] [&::-webkit-details-marker]:hidden">
                <span className="pr-2">{item.q}</span>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal-800/25 bg-teal-50/80 text-teal-900 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-open:rotate-180 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-100"
                  aria-hidden
                >
                  <ArrowRight className="h-4 w-4 rotate-90" weight="regular" />
                </span>
              </summary>
              <div className="border-t border-teal-800/12 px-5 pb-5 pt-0 text-sm leading-relaxed text-muted dark:border-cyan-400/15 md:px-6 md:pb-6">
                <p className="pt-4">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted">{p.faq.salesLine}</p>
          <div className="mt-4 flex justify-center">
            <Link href={p.faq.salesCta.href} className={`${ps.ctaPill} inline-flex min-h-11 items-center`}>
              {p.faq.salesCta.label}
            </Link>
          </div>
        </Reveal>
      </SectionShell>

      <section
        className={`${ps.bandTop} relative overflow-hidden border-b border-zinc-200/95 py-20 dark:border-white/6 md:py-28`}
        aria-labelledby="vai-closing-title"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_120%,rgba(15,118,110,0.14),transparent_55%)] dark:bg-[radial-gradient(ellipse_65%_48%_at_50%_115%,rgba(45,212,191,0.12),transparent_52%)]"
        />
        <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <p className="text-center font-mono text-xs font-semibold uppercase tracking-[0.14em] text-teal-800 dark:text-cyan-300">
              {p.closing.kicker}
            </p>
            <h2
              id="vai-closing-title"
              className="mx-auto mt-6 max-w-[40ch] text-center text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
            >
              {p.closing.body}
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              {p.closing.ctas.map((c) => (
                <HeroCta key={c.label} href={c.href} label={c.label} variant={c.variant} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

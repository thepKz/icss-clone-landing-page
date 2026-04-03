import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { corporateDoiTac } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

export const metadata: Metadata = {
  title: corporateDoiTac.title,
  description: corporateDoiTac.description,
};

const tierShellOuter =
  "rounded-[1.65rem] bg-stone-200/30 p-1.5 ring-1 ring-stone-300/50 dark:bg-zinc-800/45 dark:ring-white/[0.09]";
const tierShellInner =
  "h-full rounded-[calc(1.65rem-6px)] border border-stone-200/85 bg-white/90 px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-white/[0.08] dark:bg-zinc-900/35 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:px-8 md:py-10";

export default function PartnersPage() {
  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <Reveal slideFromLeft={14}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                {corporateDoiTac.heroEyebrow}
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {corporateDoiTac.heroTitle}
              </h1>
              <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{corporateDoiTac.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href={corporateDoiTac.cta.primary.href} className={`inline-flex justify-center ${ps.ctaPill}`}>
                  {corporateDoiTac.cta.primary.label}
                </Link>
                <Link href="/gioi-thieu" className={`inline-flex justify-center ${ps.ghostOutline}`}>
                  Giới thiệu ICS
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.08} x={16}>
              <div className={`relative aspect-[4/3] ${ps.imageFrame}`}>
                <Image
                  src={picsum("ics-partners-hero", 960, 720)}
                  alt="Hợp tác chiến lược và liên minh công nghệ an ninh mạng"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionShell className={ps.bandSoft}>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {corporateDoiTac.program.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {corporateDoiTac.program.title}
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{corporateDoiTac.program.subtitle}</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {corporateDoiTac.program.tiers.map((tier, idx) => (
            <Reveal key={tier.name} delay={0.06 + idx * 0.05}>
              <div className={tierShellOuter}>
                <div className={tierShellInner}>
                  <p className="font-mono text-[11px] tabular-nums uppercase tracking-wider text-zinc-500">
                    Cấp {idx === 0 ? "01" : "02"}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">{tier.name}</h3>
                  <ul className="mt-6 space-y-3">
                    {tier.highlights.map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${ps.bulletDot}`}
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className={`${ps.bandTopSoft} scroll-mt-28`}>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">{corporateDoiTac.tech.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {corporateDoiTac.tech.title}
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{corporateDoiTac.tech.body}</p>
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {corporateDoiTac.tech.partners.map((p, idx) => (
            <li key={p.name}>
              <Reveal delay={0.04 + idx * 0.03}>
                <article className={`h-full p-6 ${ps.card}`}>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell className={ps.bandSoft}>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {corporateDoiTac.business.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {corporateDoiTac.business.title}
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{corporateDoiTac.business.body}</p>
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {corporateDoiTac.business.partners.map((p, idx) => (
            <li key={p.name}>
              <Reveal delay={0.04 + idx * 0.03}>
                <article className={`h-full p-6 ${ps.cardMuted}`}>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell className={`${ps.bandTop} border-zinc-200/90 dark:border-white/[0.06]`}>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {corporateDoiTac.cta.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{corporateDoiTac.cta.body}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={corporateDoiTac.cta.primary.href}
                className={`inline-flex min-w-[12rem] justify-center ${ps.ctaPillLg}`}
              >
                {corporateDoiTac.cta.primary.label}
              </Link>
              <Link
                href={corporateDoiTac.cta.secondary.href}
                className={`inline-flex min-w-[12rem] justify-center ${ps.ghostOutline}`}
              >
                {corporateDoiTac.cta.secondary.label}
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.08}>
          <div className="mx-auto mt-16 max-w-3xl border-t border-dashed border-zinc-300/90 pt-10 dark:border-zinc-600/80">
            <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              Chứng nhận và đối tác chiến lược
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {corporateDoiTac.certifications.map((label) => (
                <span
                  key={label}
                  className="rounded-md border border-zinc-300/80 bg-white/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-700 dark:border-white/10 dark:bg-zinc-900/50 dark:text-zinc-300"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}

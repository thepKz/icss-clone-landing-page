import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "@phosphor-icons/react/ssr";
import { PartnerTile } from "@/components/doi-tac/partner-tile";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { corporateDoiTac } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

export const metadata: Metadata = {
  title: corporateDoiTac.title,
  description: corporateDoiTac.description,
};

/** Platinum: bạch kim — nền phụ, để Gold là điểm nhấn chính. */
const tierPlatinumOuter =
  "rounded-[1.85rem] bg-gradient-to-br from-zinc-300/90 via-slate-200/80 to-zinc-100/85 p-[10px] shadow-[0_24px_64px_-30px_rgba(24,24,27,0.14),0_0_0_1px_rgba(255,255,255,0.4)_inset] ring-2 ring-zinc-400/35 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:shadow-[0_30px_72px_-28px_rgba(24,24,27,0.18)] hover:ring-zinc-500/45 dark:from-zinc-600/35 dark:via-slate-800/55 dark:to-zinc-950/90 dark:ring-zinc-500/25 dark:shadow-[0_24px_64px_-40px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_30px_76px_-36px_rgba(228,228,231,0.06)] dark:hover:ring-zinc-400/35";
/** Platinum: inner — tấm sáng, viền kim loại mảnh. */
const tierPlatinumInner =
  "h-full rounded-[calc(1.85rem-10px)] border border-zinc-200/95 bg-gradient-to-b from-white to-zinc-50/80 px-7 py-9 shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(24,24,27,0.04)] transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-zinc-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(113,113,122,0.12)] dark:border-white/[0.12] dark:from-zinc-900/98 dark:to-zinc-950/95 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:hover:border-zinc-500/35 md:px-9 md:py-11";

/** Gold: vàng thật (yellow + amber) — khung nổi bật nhất, cùng scale với Platinum. */
const tierGoldOuter =
  "rounded-[1.85rem] bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-300 p-[10px] shadow-[0_28px_72px_-20px_rgba(202,138,4,0.42),0_0_0_1px_rgba(254,249,195,0.65)_inset] ring-2 ring-yellow-600/85 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_40px_88px_-18px_rgba(180,83,9,0.48),0_0_0_1px_rgba(254,252,232,0.55)_inset] hover:ring-yellow-500 dark:from-yellow-500/35 dark:via-amber-600/30 dark:to-zinc-950 dark:ring-yellow-400/70 dark:shadow-[0_28px_72px_-28px_rgba(234,179,8,0.28),0_0_0_1px_rgba(250,204,21,0.12)_inset] dark:hover:shadow-[0_38px_88px_-22px_rgba(250,204,21,0.22)] dark:hover:ring-yellow-300/80";
const tierGoldInner =
  "h-full rounded-[calc(1.85rem-10px)] border-2 border-yellow-500/70 bg-gradient-to-b from-yellow-50 via-white to-amber-50 px-7 py-9 shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_48px_rgba(250,204,21,0.14)] transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-yellow-500 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_56px_rgba(250,204,21,0.2),0_0_0_1px_rgba(202,138,4,0.15)] dark:border-yellow-500/50 dark:from-zinc-900 dark:via-yellow-950/35 dark:to-zinc-950 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_0_40px_rgba(234,179,8,0.08)] dark:hover:border-yellow-400/60 md:px-9 md:py-11";

export default function PartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-zinc-200/90 bg-zinc-50 dark:border-white/[0.06] dark:bg-zinc-950">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_18%_-8%,rgba(19,78,74,0.11),transparent_55%),radial-gradient(ellipse_55%_45%_at_92%_92%,rgba(20,184,166,0.08),transparent_52%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_12%_0%,rgba(45,212,191,0.14),transparent_58%),radial-gradient(ellipse_50%_42%_at_88%_100%,rgba(20,184,166,0.09),transparent_50%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(24,24,27,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.08)_1px,transparent_1px)] [background-size:40px_40px] dark:opacity-[0.05] dark:[background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]"
          aria-hidden
        />
        <div className={`relative mx-auto max-w-[1400px] px-4 pb-14 pt-28 md:px-8 md:pb-20 md:pt-32`}>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <Reveal slideFromLeft={14}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-800 dark:text-teal-300/90">
                {corporateDoiTac.heroEyebrow}
              </p>
              <span className="mt-4 inline-flex rounded-full border border-teal-800/25 bg-teal-900/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                Liên minh công nghệ · Kênh kinh doanh
              </span>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
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
              <div className="rounded-[1.75rem] bg-gradient-to-br from-teal-900/12 via-zinc-200/40 to-zinc-100/80 p-1.5 ring-1 ring-teal-900/15 shadow-[0_24px_60px_-36px_rgba(19,78,74,0.35)] dark:from-teal-400/10 dark:via-zinc-800/50 dark:to-zinc-950/80 dark:ring-teal-400/20 dark:shadow-[0_28px_64px_-36px_rgba(0,0,0,0.55)]">
                <div className={`relative aspect-[4/3] overflow-hidden rounded-[calc(1.75rem-6px)] border border-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] dark:border-white/[0.08] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
                  <Image
                    src={picsum("ics-partners-hero", 960, 720)}
                    alt="Hợp tác chiến lược và liên minh công nghệ an ninh mạng"
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] motion-safe:hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 45vw"
                    priority
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionShell
        id="chuong-trinh-doi-tac"
        className="relative scroll-mt-28 border-y border-zinc-200/90 bg-gradient-to-b from-zinc-100/80 via-white to-zinc-50 py-20 dark:border-white/[0.06] dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900 md:py-28"
        aria-labelledby="program-partners-heading"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200/90 bg-white/95 p-6 shadow-[0_24px_60px_-18px_rgba(24,24,27,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-zinc-900/[0.04] dark:border-white/[0.08] dark:bg-zinc-900/55 dark:shadow-[0_32px_80px_-36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)] dark:ring-white/[0.06] md:p-10">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_0%_0%,rgba(161,161,170,0.12),transparent_55%),radial-gradient(ellipse_62%_52%_at_100%_92%,rgba(250,204,21,0.14),transparent_55%)] dark:bg-[radial-gradient(ellipse_68%_52%_at_8%_0%,rgba(228,228,231,0.07),transparent_58%),radial-gradient(ellipse_52%_48%_at_96%_100%,rgba(250,204,21,0.1),transparent_52%)]"
            aria-hidden
          />
          <div className="relative">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-800 dark:text-teal-300/95">
                {corporateDoiTac.program.eyebrow}
              </p>
              <h2
                id="program-partners-heading"
                className="mt-4 max-w-[20ch] text-3xl font-semibold tracking-tight text-zinc-950 sm:max-w-none md:text-[2.35rem] md:leading-[1.08] dark:text-white"
              >
                {corporateDoiTac.program.title}
              </h2>
              <div className="mt-6 max-w-[72ch] rounded-2xl border border-zinc-200/90 border-l-[3px] border-l-teal-800 bg-zinc-50/90 py-4 pl-5 pr-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] dark:border-white/10 dark:border-l-teal-500/80 dark:bg-zinc-950/40 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="text-base font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">
                  {corporateDoiTac.program.subtitle}
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
              {corporateDoiTac.program.tiers.map((tier, idx) => {
                const isPlatinum = idx === 0;
                return (
                  <Reveal key={tier.name} delay={0.08 + idx * 0.07}>
                    <div className={isPlatinum ? tierPlatinumOuter : tierGoldOuter}>
                      <div className={isPlatinum ? tierPlatinumInner : tierGoldInner}>
                        <div className="flex flex-wrap items-center gap-2">
                          <p
                            className={
                              isPlatinum
                                ? "font-mono text-[11px] font-medium tabular-nums uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
                                : "font-mono text-[11px] font-semibold tabular-nums uppercase tracking-wider text-yellow-800 dark:text-yellow-400/90"
                            }
                          >
                            Cấp {isPlatinum ? "01" : "02"}
                          </p>
                          {isPlatinum ? (
                            <span className="rounded-full border border-white/25 bg-gradient-to-br from-zinc-600 via-slate-500 to-zinc-700 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] dark:from-zinc-500 dark:via-slate-400/90 dark:to-zinc-600 dark:border-white/20">
                              Ưu tiên cao nhất
                            </span>
                          ) : (
                            <span className="rounded-full border border-yellow-800/40 bg-yellow-400 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-yellow-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] dark:border-yellow-400/50 dark:bg-yellow-500/90 dark:text-yellow-950 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
                              Đối tác kênh
                            </span>
                          )}
                        </div>
                        <h3
                          className={
                            isPlatinum
                              ? "mt-5 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-100"
                              : "mt-5 text-2xl font-semibold tracking-tight text-yellow-900 md:text-3xl dark:text-yellow-200"
                          }
                        >
                          {tier.name}
                        </h3>
                        <ul className="mt-6 space-y-3.5">
                          {tier.highlights.map((line) => (
                            <li
                              key={line}
                              className={`flex gap-3 text-sm leading-relaxed ${isPlatinum ? "font-medium text-zinc-800 dark:text-zinc-200" : "font-medium text-yellow-950/95 dark:text-yellow-50/95"}`}
                            >
                              <Check
                                className={
                                  isPlatinum
                                    ? "mt-0.5 h-5 w-5 shrink-0 text-zinc-500 dark:text-zinc-400"
                                    : "mt-0.5 h-5 w-5 shrink-0 text-yellow-600 dark:text-yellow-400"
                                }
                                weight="bold"
                                aria-hidden
                              />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.12} className="mt-10">
              <p className="text-center text-xs leading-relaxed text-zinc-600 dark:text-zinc-500">
                Chi tiết rebate, SLA hỗ trợ và lộ trình đào tạo được chốt trong hợp đồng đối tác —{" "}
                <Link
                  href={corporateDoiTac.cta.primary.href}
                  className="font-semibold text-teal-800 underline decoration-teal-800/30 underline-offset-4 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-teal-950 hover:decoration-teal-800/60 dark:text-teal-300 dark:decoration-teal-400/35 dark:hover:text-teal-200"
                >
                  liên hệ ICS để trao đổi cấp phù hợp
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        className={`${ps.bandTopSoft} scroll-mt-28 border-t border-zinc-200/90 py-20 dark:border-white/[0.06] md:py-28`}
      >
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="lg:col-span-4">
            <div
              className="h-px w-11 rounded-full bg-gradient-to-r from-teal-800/55 to-teal-600/25 dark:from-teal-400/50 dark:to-teal-400/10"
              aria-hidden
            />
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-teal-900 dark:text-teal-300/90">
              {corporateDoiTac.tech.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[20ch] text-2xl font-semibold tracking-tight text-foreground sm:max-w-none md:text-[2rem] md:leading-[1.12]">
              {corporateDoiTac.tech.title}
            </h2>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-muted">{corporateDoiTac.tech.body}</p>
          </Reveal>
          <ul className="grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 lg:col-span-8">
            {corporateDoiTac.tech.partners.map((p, idx) => (
              <PartnerTile
                key={p.name}
                name={p.name}
                body={p.body}
                imageSeed={p.imageSeed}
                tone="tech"
                index={idx}
              />
            ))}
          </ul>
        </div>
      </SectionShell>

      <SectionShell className={`${ps.bandSoft} border-t border-zinc-200/80 py-20 dark:border-white/[0.05] md:py-28`}>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="lg:col-span-4">
            <div className="h-px w-11 rounded-full bg-zinc-300 dark:bg-zinc-600" aria-hidden />
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {corporateDoiTac.business.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[18ch] text-2xl font-semibold tracking-tight text-foreground sm:max-w-none md:text-[2rem] md:leading-[1.12]">
              {corporateDoiTac.business.title}
            </h2>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-muted">{corporateDoiTac.business.body}</p>
          </Reveal>
          <ul className="grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 lg:col-span-8">
            {corporateDoiTac.business.partners.map((p, idx) => (
              <PartnerTile
                key={p.name}
                name={p.name}
                body={p.body}
                imageSeed={p.imageSeed}
                tone="business"
                index={idx}
              />
            ))}
          </ul>
        </div>
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
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {corporateDoiTac.certifications.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-teal-800/25 bg-teal-900/[0.05] px-3.5 py-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-teal-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-px hover:border-teal-700/40 hover:shadow-[0_10px_28px_-16px_rgba(19,78,74,0.25)] dark:border-teal-400/30 dark:bg-teal-400/10 dark:text-teal-50 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:border-teal-300/45 dark:hover:shadow-[0_12px_32px_-16px_rgba(45,212,191,0.18)]"
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

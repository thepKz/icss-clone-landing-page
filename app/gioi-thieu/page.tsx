import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AboutJourneyTimeline } from "@/components/about/about-journey-timeline";
import { AboutVideoScrollStage } from "@/components/about/about-video-scroll-stage";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { about, company } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";
import TeamSection from "@/components/ui/team";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: about.seoDescription.slice(0, 158),
};

function ArrowRight({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor" aria-hidden>
      <path d="M224.5 136.5l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.5-51.5a12 12 0 1 1 17-17l72 72a12 12 0 0 1-.5 17z" />
    </svg>
  );
}

export default function AboutPage() {
  const poster = picsum("ics-about-video-poster", 1920, 1080);
  const legal = about.narrative.legalName;
  const legalBreak = legal.lastIndexOf(" – ");
  const legalLead = legalBreak >= 0 ? legal.slice(0, legalBreak).trim() : legal;
  const legalAccent = legalBreak >= 0 ? legal.slice(legalBreak).trim() : "";
  const leadershipAvatarByName: Record<string, string> = {
    "TS. Võ Trung Âu": "/images/introduction/anhau.jpg",
    "Ths. Trần Hồng Thắng": "/images/introduction/anhthang.jpg",
    "Đỗ Thanh Toàn": "/images/introduction/anhtoan.jpg",
    "Ths. Vũ Tam Hanh": "/images/introduction/anhhanh.jpg",
    "Ths. Vũ Thị Hải Yến": "/images/introduction/chiyen.jpeg",
    "Nguyễn Đức Dương": "/images/introduction/duong.jpg",
  };
  const leadershipMembers = about.leadership.map((person) => ({
    name: person.name,
    role: person.role,
    avatar: leadershipAvatarByName[person.name] ?? picsum(`ics-lead-${person.role}-${person.name}`, 640, 640),
  }));

  return (
    <div className="overflow-x-clip bg-white dark:bg-zinc-950">
      {/* Hero — căn giữa, chữ lớn, light / dark */}
      <section className="relative min-h-[min(100dvh,960px)] border-b border-zinc-200/90 bg-[#f5f2ed] text-zinc-900 dark:border-white/7 dark:bg-zinc-950 dark:text-zinc-100">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-15%,rgba(14,116,144,0.09),transparent_58%),radial-gradient(ellipse_45%_38%_at_92%_88%,rgba(20,184,166,0.06),transparent_52%)] dark:bg-[radial-gradient(ellipse_85%_60%_at_70%_-8%,rgba(45,212,191,0.14),transparent_55%),radial-gradient(ellipse_50%_40%_at_10%_90%,rgba(20,184,166,0.08),transparent_50%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(24,24,27,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.09)_1px,transparent_1px)] [background-size:44px_44px] dark:opacity-[0.055] dark:[background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)]"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(100dvh,960px)] max-w-[1400px] flex-col px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="w-full max-w-[min(100%,52rem)]">
              <Reveal y={18}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-800 dark:text-teal-300/90">
                  {about.hero.eyebrow}
                </p>
              </Reveal>
              <Reveal y={18} delay={0.05} className="mt-6">
                <h1 className="text-pretty font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  <span className="block text-[clamp(1.45rem,4.8vw,2.85rem)] leading-[1.12]">
                    {legalLead}
                  </span>
                  {legalAccent ? (
                    <span className="mt-2 block text-[clamp(1.35rem,4.2vw,2.5rem)] leading-[1.1] text-teal-800 dark:text-teal-300">
                      {legalAccent}
                    </span>
                  ) : null}
                </h1>
              </Reveal>
              <Reveal y={18} delay={0.1} className="mt-8">
                <p className="mx-auto max-w-[68ch] text-pretty text-base leading-relaxed text-zinc-600 md:text-lg md:leading-relaxed dark:text-zinc-300">
                  {about.narrative.body}
                </p>
              </Reveal>
              <Reveal y={18} delay={0.14} className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={about.hero.ctaPrimary.href}
                  className="group inline-flex min-h-12 items-center gap-2.5 whitespace-nowrap rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] ring-1 ring-teal-900/15 transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-teal-600 active:translate-y-px active:scale-[0.99] dark:bg-teal-400 dark:text-zinc-950 dark:ring-teal-200/50 dark:hover:bg-teal-300"
                >
                  {about.hero.ctaPrimary.label}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 dark:bg-zinc-950/10">
                    <ArrowRight />
                  </span>
                </Link>
                <Link
                  href={about.hero.ctaSecondary.href}
                  className="group inline-flex min-h-12 items-center gap-2.5 whitespace-nowrap rounded-full border border-zinc-400/45 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] transition-[transform,border-color,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-teal-800/35 hover:bg-white active:translate-y-px active:scale-[0.99] dark:border-white/20 dark:bg-white/6 dark:text-white dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:border-teal-400/35 dark:hover:bg-white/10"
                >
                  {about.hero.ctaSecondary.label}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-300/70 bg-zinc-100/90 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 dark:border-white/12 dark:bg-white/10">
                    <ArrowRight className="opacity-90 dark:opacity-100" />
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>

          <Reveal y={14} delay={0.18} className="mt-14 w-full md:mt-20">
            <div className="mx-auto max-w-[min(100%,56rem)] border-t border-zinc-300/45 pt-9 dark:border-white/10 md:pt-10">
              <div className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-2 text-[15px] leading-snug text-zinc-600 dark:text-zinc-300">
                {about.stats.map((s, i) => (
                  <span key={s.label} className="inline-flex items-baseline gap-2">
                    {i > 0 ? (
                      <span className="select-none text-zinc-300 dark:text-zinc-500" aria-hidden>
                        ·
                      </span>
                    ) : null}
                    <span className="whitespace-nowrap">
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100">{s.value}</span>
                      <span> {s.label}</span>
                    </span>
                  </span>
                ))}
              </div>

              <div className="mt-10 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-800 dark:text-teal-300/90">
                  {about.teamBand.title}
                </p>
                <div className="mx-auto mt-3 max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:overflow-x-visible [&::-webkit-scrollbar]:hidden">
                  <p className="inline-block whitespace-nowrap px-2 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {about.teamBand.body}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video — editorial + phóng to full width khi scroll (desktop) */}
      <AboutVideoScrollStage
        posterSrc={poster}
        posterAlt="Khung xem video giới thiệu ICS"
        videoSrc={about.video.videoSrc}
        caption="Video giới thiệu sẽ được gắn khi có bản phát hành chính thức."
        title={about.video.title}
        subtitle={about.video.subtitle}
        office={company.office}
        phone={company.phones[0]}
        contactHref="/lien-he"
      />

      {/* Giá trị — bento bất đối xứng: 1 ô lớn + cột phụ + hàng 3 ô (quét nhanh, hierarchy rõ) */}
      <SectionShell className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 lg:items-end">
            <Reveal className="lg:col-span-8">
              <div className="rounded-3xl border border-zinc-200/95 bg-zinc-50/90 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-white/10 dark:bg-zinc-900/55 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:px-7 md:py-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 dark:text-cyan-300/90">
                  {about.valuesSection.eyebrow}
                </p>
                <h2 className="mt-3 max-w-[40ch] text-pretty text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-[1.75rem] lg:leading-snug xl:text-[2rem]">
                  {about.valuesSection.title}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.05} className="hidden lg:flex lg:col-span-4 lg:justify-end lg:pb-3">
              <aside className="flex h-28 w-full max-w-44 flex-col justify-end rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                  Khung vận hành
                </p>
                <p className="mt-2 text-2xl font-semibold tabular-nums tracking-tight text-teal-900 dark:text-cyan-200/95">
                  6
                </p>
                <p className="mt-1 text-xs leading-snug text-zinc-600 dark:text-zinc-300">
                  quy chiếu xuyên suốt tư vấn, triển khai và hỗ trợ
                </p>
              </aside>
            </Reveal>
          </div>

          <ul className="mt-10 grid list-none grid-cols-1 gap-5 md:mt-12 md:grid-cols-12 md:gap-4 lg:gap-5">
            {about.valuesSection.items.map((v, idx) => {
              const featured = idx === 0;
              const spanClass =
                idx === 0
                  ? "md:col-span-7 md:row-span-2"
                  : idx === 1 || idx === 2
                    ? "md:col-span-5"
                    : "md:col-span-4";
              const shellTint = featured
                ? "bg-teal-100/55 ring-teal-800/20 dark:bg-teal-950/35 dark:ring-cyan-400/15"
                : "bg-zinc-200/75 ring-zinc-400/85 dark:bg-zinc-800/70 dark:ring-white/12";
              return (
                <li key={v.title} className={spanClass}>
                  <Reveal delay={0.03 * idx} className="h-full">
                    <div
                      className={`group flex h-full rounded-[1.25rem] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] ring-1 transition-shadow duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:shadow-[0_20px_48px_-40px_rgba(15,118,110,0.16)] dark:hover:shadow-[0_24px_56px_-44px_rgba(34,211,238,0.12)] ${shellTint}`}
                    >
                      <div
                        className={`relative flex h-full w-full flex-col rounded-[calc(1.25rem-6px)] border border-zinc-200/95 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,1)] transition-[border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] dark:border-white/10 dark:bg-zinc-950 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] group-hover:border-teal-700/25 dark:group-hover:border-cyan-400/25 ${featured ? "px-6 py-7 md:px-8 md:py-9" : "px-5 py-5 md:px-6 md:py-6"}`}
                      >
                        <div
                          className="pointer-events-none absolute bottom-4 left-0 top-4 w-px bg-linear-to-b from-teal-600/90 via-teal-500/45 to-transparent dark:from-cyan-400/85 dark:via-cyan-500/35 dark:to-transparent"
                          aria-hidden
                        />
                        <div className="flex min-h-0 flex-1 flex-col pl-4 md:pl-5">
                          <div className="flex flex-wrap items-baseline gap-3">
                            <span
                              className={`inline-flex justify-center rounded-full border border-teal-800/35 bg-teal-800/12 px-2 py-1 font-mono font-semibold tabular-nums text-teal-950 dark:border-cyan-400/35 dark:bg-cyan-400/12 dark:text-cyan-100 ${featured ? "min-w-10 text-xs md:text-sm" : "min-w-9 text-[11px]"}`}
                            >
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <h3
                              className={`font-semibold tracking-tight text-foreground ${featured ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}
                            >
                              {v.title}
                            </h3>
                          </div>
                          <p
                            className={`mt-4 leading-relaxed text-zinc-700 dark:text-zinc-300 ${featured ? "max-w-[52ch] text-base md:text-lg" : "text-base"}`}
                          >
                            {v.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </SectionShell>

      <SectionShell
        id="hanh-trinh-phat-trien"
        className={`${ps.bandTop} py-20 md:py-28`}
        aria-labelledby="about-journey-heading"
      >
        <AboutJourneyTimeline
          eyebrow={about.timelineSection.eyebrow}
          title={about.timelineSection.title}
          items={about.timelineSection.items}
        />
      </SectionShell>

      {/* Lãnh đạo — 2 cột, hàng lệch dọc */}
      <SectionShell className="py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 dark:text-cyan-300/80">
            {about.leadershipSection.eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {about.leadershipSection.title}
          </h2>
        </Reveal>
        <TeamSection members={leadershipMembers} className="mt-14 mx-auto max-w-7xl" />
      </SectionShell>

      {/* Giải pháp — một dòng nổi bật + hai ô */}
      <SectionShell className={`${ps.bandTopSoft} py-20 md:py-28`}>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 dark:text-cyan-300/80">
            {about.solutionsSection.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {about.solutionsSection.title}
          </h2>
        </Reveal>
        <div className="mt-12 space-y-6">
          <Reveal>
            <article className="grid gap-8 rounded-[2rem] border border-zinc-200/90 bg-gradient-to-br from-white via-white to-teal-800/[0.04] p-8 dark:border-white/[0.08] dark:from-zinc-900/40 dark:via-zinc-950/30 dark:to-cyan-400/[0.05] md:grid-cols-12 md:items-center md:gap-10 md:p-10">
              <div className="md:col-span-7">
                <span className="inline-flex rounded-full border border-teal-800/20 bg-teal-800/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-900 dark:border-cyan-400/25 dark:bg-cyan-400/10 dark:text-cyan-100">
                  {about.solutions[0].tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {about.solutions[0].title}
                </h3>
                <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-muted md:text-[15px]">
                  {about.solutions[0].body}
                </p>
                <Link
                  href={about.solutions[0].href}
                  className={`mt-8 inline-flex min-h-11 items-center ${ps.ctaPill}`}
                >
                  {about.solutions[0].cta}
                </Link>
              </div>
              <div className="hidden md:col-span-5 md:block">
                <div className={`relative aspect-[4/3] ${ps.imageFrame}`}>
                  <Image
                    src={picsum("ics-solution-vietguard", 640, 480)}
                    alt="Minh họa giải pháp bảo mật ứng dụng"
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                </div>
              </div>
            </article>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {about.solutions.slice(1).map((sol, idx) => (
              <Reveal key={sol.tag} delay={0.06 * (idx + 1)}>
                <article className="flex h-full flex-col rounded-2xl border border-zinc-200/90 bg-white/90 p-7 dark:border-white/[0.07] dark:bg-zinc-900/30">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-teal-800 dark:text-cyan-300/85">
                    {sol.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{sol.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{sol.body}</p>
                  <Link href={sol.href} className={`mt-6 inline-flex min-h-10 items-center self-start ${ps.ghostOutline}`}>
                    {sol.cta}
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* CTA cuối */}
      <section className="border-t border-zinc-200/90 bg-zinc-950 py-16 text-zinc-100 dark:border-white/[0.06] md:py-24">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <h2 className="max-w-xl text-2xl font-semibold tracking-tight md:text-3xl">{about.closingCta.title}</h2>
            <p className="mt-4 max-w-[54ch] text-sm leading-relaxed text-zinc-300 md:text-base">
              {about.closingCta.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={about.closingCta.primary.href}
                className="inline-flex min-h-11 items-center rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-teal-300 active:scale-[0.99]"
              >
                {about.closingCta.primary.label}
              </Link>
              <Link
                href={about.closingCta.secondary.href}
                className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-[transform,border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-teal-400/40 active:scale-[0.99]"
              >
                {about.closingCta.secondary.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

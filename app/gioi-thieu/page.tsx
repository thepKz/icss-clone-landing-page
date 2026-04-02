import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AboutVideoTeaser } from "@/components/about/about-video-teaser";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { about, company } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

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
  const poster = picsum("ics-about-video-poster", 1280, 720, { blur: 1 });

  return (
    <main className="overflow-x-hidden bg-white dark:bg-zinc-950">
      {/* Hero — nền tối, lưới kỹ thuật, chữ trắng (đối lập phần sau để tạo ấn tượng) */}
      <section className="relative min-h-[min(88dvh,900px)] border-b border-white/[0.07] bg-zinc-950 text-zinc-100">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_70%_-8%,rgba(45,212,191,0.14),transparent_55%),radial-gradient(ellipse_50%_40%_at_10%_90%,rgba(20,184,166,0.08),transparent_50%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:44px_44px]"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(88dvh,900px)] max-w-[1400px] flex-col justify-end px-4 pb-14 pt-28 md:px-8 md:pb-20 md:pt-32">
          <p className="pointer-events-none absolute right-4 top-24 select-none font-mono text-[clamp(3.5rem,14vw,10rem)] font-light leading-none tracking-[-0.06em] text-white/[0.04] md:right-8 md:top-28">
            ICS
          </p>
          <div className="max-w-3xl">
            <Reveal slideFromLeft={36}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-300/90">
                {about.hero.eyebrow}
              </p>
            </Reveal>
            <Reveal slideFromLeft={36} delay={0.06} className="mt-5">
              <h1 className="text-pretty font-semibold tracking-tight">
                <span className="block text-[2rem] leading-[1.08] sm:text-[2.35rem] md:text-[2.75rem] lg:text-[3.15rem]">
                  {about.hero.titleLead}
                </span>
                <span className="mt-1 block text-[2rem] leading-[1.08] text-teal-300 sm:text-[2.35rem] md:text-[2.75rem] lg:text-[3.15rem]">
                  {about.hero.titleAccent}
                </span>
              </h1>
            </Reveal>
            <Reveal slideFromLeft={36} delay={0.12} className="mt-6 max-w-[52ch]">
              <p className="border-l-2 border-teal-400/70 pl-5 text-base leading-relaxed text-zinc-300 md:text-lg">
                {about.hero.subtitle}
              </p>
            </Reveal>
            <Reveal slideFromLeft={36} delay={0.18} className="mt-10 flex flex-wrap gap-3">
              <Link
                href={about.hero.ctaPrimary.href}
                className="group inline-flex min-h-11 items-center gap-2.5 rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] ring-1 ring-teal-200/50 transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-teal-300 active:translate-y-px active:scale-[0.99]"
              >
                {about.hero.ctaPrimary.label}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-950/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                  <ArrowRight />
                </span>
              </Link>
              <Link
                href={about.hero.ctaSecondary.href}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-[transform,border-color,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-teal-400/35 hover:bg-white/[0.1] active:translate-y-px active:scale-[0.99]"
              >
                {about.hero.ctaSecondary.label}
                <ArrowRight className="opacity-80" />
              </Link>
            </Reveal>
          </div>
          <Reveal slideFromLeft={24} delay={0.22} className="mt-14 md:mt-20">
            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4 md:gap-4">
              {about.stats.map((s) => (
                <div key={s.label} className="min-w-0 md:border-l md:border-white/10 md:pl-6 md:first:border-l-0 md:first:pl-0">
                  <p className="font-mono text-xl font-semibold tabular-nums tracking-tight text-teal-300 md:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-snug text-zinc-400">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video + giới thiệu — split không đối xứng */}
      <SectionShell className="border-b border-zinc-200/90 py-20 dark:border-white/[0.06] md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 dark:text-cyan-300/80">
                {company.brand}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {about.video.title}
              </h2>
              <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-muted">{about.video.subtitle}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.08} x={0}>
              <div className="rounded-[2rem] bg-zinc-200/40 p-2 ring-1 ring-zinc-300/60 dark:bg-zinc-800/40 dark:ring-white/[0.08]">
                <div className="overflow-hidden rounded-[calc(2rem-8px)] border border-zinc-200/80 bg-zinc-50 dark:border-white/[0.07] dark:bg-zinc-900/50">
                  <AboutVideoTeaser
                    posterSrc={poster}
                    posterAlt="Khung xem video giới thiệu ICS"
                    videoSrc={about.video.videoSrc}
                    caption="Video giới thiệu sẽ được gắn khi có bản phát hành chính thức."
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      {/* Công ty + ảnh — bento 7/5 */}
      <SectionShell className={`${ps.bandTopSoft} py-20 md:py-28`}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">{about.narrative.legalName}</p>
            <p className="mt-8 text-lg leading-relaxed text-foreground md:text-xl md:leading-relaxed">
              {about.narrative.body}
            </p>
            <div className="mt-10 rounded-2xl border border-teal-800/15 bg-teal-800/[0.06] p-6 dark:border-cyan-400/20 dark:bg-cyan-400/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-900 dark:text-cyan-200/90">
                {about.teamBand.title}
              </p>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {about.teamBand.body}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06} x={0} className="lg:col-span-5">
            <div className={`relative aspect-[4/5] ${ps.imageFrame}`}>
              <Image
                src={picsum("ics-about-hero-office", 800, 1000)}
                alt="Không gian làm việc và đội ngũ ICS"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 38vw"
                priority
              />
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* Giá trị — zigzag, không lưới 3 cột đồng đều */}
      <SectionShell className="py-20 md:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 dark:text-cyan-300/80">
              {about.valuesSection.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {about.valuesSection.title}
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 space-y-0 divide-y divide-zinc-200/90 dark:divide-white/[0.08]">
          {about.valuesSection.items.map((v, idx) => (
            <Reveal key={v.title} delay={0.04 * idx} className="py-10 first:pt-6 md:py-12">
              <div
                className={`grid gap-6 md:grid-cols-12 md:items-start md:gap-10 ${idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="md:col-span-4">
                  <p className="font-mono text-[11px] tabular-nums text-zinc-400">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground md:text-xl">{v.title}</h3>
                </div>
                <p className="md:col-span-8 md:pt-7 md:text-[15px] md:leading-relaxed md:text-zinc-600 dark:md:text-zinc-400">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* Timeline — mốc thời gian rõ */}
      <SectionShell className={`${ps.bandTop} py-20 md:py-28`}>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 dark:text-cyan-300/80">
            {about.timelineSection.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {about.timelineSection.title}
          </h2>
        </Reveal>
        <div className="mt-14 md:mt-16">
          <div className="relative md:pl-4">
            <div
              className="pointer-events-none absolute left-[5.5rem] top-0 hidden h-full w-px bg-gradient-to-b from-teal-600/40 via-zinc-300/60 to-transparent dark:from-cyan-500/30 dark:via-zinc-600/50 md:block"
              aria-hidden
            />
            <ul className="space-y-10 md:space-y-12">
              {about.timelineSection.items.map((item, idx) => (
                <Reveal key={item.period + item.title} delay={0.03 * idx}>
                  <li className="grid gap-4 md:grid-cols-[6.5rem_1fr] md:gap-10">
                    <p className="font-mono text-sm font-semibold tabular-nums text-teal-800 dark:text-cyan-300/90">
                      {item.period}
                    </p>
                    <div className="border-l-2 border-zinc-200/90 pl-5 dark:border-white/[0.1] md:border-l-0 md:pl-0">
                      <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-muted">{item.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
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
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:max-w-5xl">
          {about.leadership.map((person, idx) => (
            <Reveal
              key={person.name + person.role}
              delay={0.07 * idx}
              className={idx % 2 === 1 ? "md:translate-y-10" : ""}
            >
              <article className="group overflow-hidden rounded-[1.75rem] border border-zinc-200/90 bg-white/90 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] dark:border-white/[0.07] dark:bg-zinc-900/35 dark:shadow-[0_28px_70px_-44px_rgba(0,0,0,0.55)] md:hover:-translate-y-1">
                <div className="relative aspect-[4/5] max-h-[420px]">
                  <Image
                    src={picsum(`ics-lead-${person.role}-${person.name}`, 560, 700)}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/25 to-transparent p-5 pt-16">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-300/90">{person.role}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{person.name}</p>
                    <p className="mt-1 text-xs text-zinc-300">{person.note}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
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
            <p className="mt-4 max-w-[54ch] text-sm leading-relaxed text-zinc-400 md:text-base">
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
    </main>
  );
}

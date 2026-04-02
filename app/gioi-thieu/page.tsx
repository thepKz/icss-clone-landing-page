import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { about, company } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: about.intro.slice(0, 160),
};

export default function AboutPage() {
  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-16 md:pt-32 md:pb-20`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Về {company.brand}
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Đơn vị tiên phong an ninh mạng tại Việt Nam và khu vực
            </h1>
          </Reveal>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-base leading-relaxed text-muted">{about.intro}</p>
            <p className="mt-8 text-sm font-medium text-teal-800 dark:text-cyan-200/90">
              {about.statHighlight}
            </p>
          </Reveal>
          <Reveal delay={0.08} x={20}>
            <div className={`relative aspect-[4/3] ${ps.imageFrame}`}>
              <Image
                src={picsum("ics-about-hero", 900, 700)}
                alt="Đội ngũ và văn phòng ICS"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className={ps.bandTopSoft}>
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Giá trị cốt lõi
          </h2>
        </Reveal>
        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {about.values.map((v, idx) => (
            <Reveal
              key={v}
              delay={0.05 * idx}
              className={`${ps.cardMuted} p-6`}
            >
              <p className="font-mono text-xs tabular-nums text-zinc-500">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{v}</p>
            </Reveal>
          ))}
        </ul>
      </SectionShell>

      <SectionShell>
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Lịch sử hình thành
          </h2>
        </Reveal>
        <ol className={`mt-12 space-y-8 ${ps.timelineLine} pl-8`}>
          {about.timeline.map((step, idx) => (
            <Reveal key={step} delay={0.04 * idx} className="relative">
              <span
                className={`absolute -left-[2.125rem] top-1.5 h-2.5 w-2.5 rounded-full ${ps.timelineDot}`}
              />
              <p className="font-mono text-xs text-zinc-500">Mốc {idx + 1}</p>
              <p className="mt-1 max-w-[65ch] text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {step}
              </p>
            </Reveal>
          ))}
        </ol>
      </SectionShell>

      <SectionShell className={ps.edgeTop}>
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Ban lãnh đạo
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {about.leadership.map((person, idx) => (
            <Reveal key={person.role} delay={0.06 * idx}>
              <div className={`overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 dark:border-white/[0.07] dark:bg-zinc-900/30`}>
                <div className="relative aspect-[3/4]">
                  <Image
                    src={picsum(`ics-lead-${person.role}`, 480, 640, {
                      grayscale: person.name === "Đang cập nhật",
                    })}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    {person.role}
                  </p>
                  <p className="mt-1 font-medium text-foreground">{person.name}</p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                    {person.note}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className={ps.bandSoft}>
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Hạng mục sản phẩm bổ sung
          </h2>
          <ul className="mt-8 space-y-3 text-sm text-muted">
            {about.productFootnote.map((line) => (
              <li key={line} className="flex gap-2">
                <span className={ps.accentMark}>/</span>
                {line}
              </li>
            ))}
          </ul>
          <Link
            href="/lien-he"
            className={`mt-10 ${ps.ctaPill}`}
          >
            Liên hệ tư vấn
          </Link>
        </Reveal>
      </SectionShell>
    </>
  );
}

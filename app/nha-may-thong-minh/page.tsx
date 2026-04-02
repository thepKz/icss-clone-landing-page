import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { smartFactory } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

export const metadata: Metadata = {
  title: smartFactory.title,
  description: smartFactory.lede,
};

export default function SmartFactoryPage() {
  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Giải pháp ICS
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {smartFactory.title}
            </h1>
            <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">
              {smartFactory.lede}
            </p>
          </Reveal>
        </div>
      </section>

      <SectionShell>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <ul className="space-y-4">
              {smartFactory.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
                >
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${ps.bulletDot}`}
                  />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
              {smartFactory.closing}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/lien-he" className={`${ps.ctaPill} inline-flex min-h-11 items-center`}>
                Đặt lịch tư vấn
              </Link>
              <a
                href="https://smartdashboard.vn"
                target="_blank"
                rel="noopener noreferrer"
                className={`${ps.ghostOutline} inline-flex min-h-11 items-center`}
              >
                Smart Dashboard
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.06} x={0} className="lg:col-span-5">
            <div className={`relative aspect-[4/3] ${ps.imageFrame}`}>
              <Image
                src={picsum("ics-factory-hero", 960, 720)}
                alt="Giám sát nhà máy thông minh"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { smartBuilding } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

export const metadata: Metadata = {
  title: smartBuilding.title,
  description: smartBuilding.lede,
};

export default function SmartBuildingPage() {
  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Giải pháp ICS
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {smartBuilding.title}
            </h1>
            <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-muted">
              {smartBuilding.lede}
            </p>
          </Reveal>
        </div>
      </section>

      <SectionShell>
        <div className="grid items-start gap-12 md:grid-cols-2 md:[&>div:first-child]:order-2">
          <Reveal x={20}>
            <div className={`relative aspect-[4/3] ${ps.imageFrame}`}>
              <Image
                src={picsum("ics-building-hero", 960, 720, { blur: 1 })}
                alt="Tòa nhà thông minh và IoT"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={0.06} x={-20}>
            <ul className="space-y-4">
              {smartBuilding.bullets.map((b) => (
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
              {smartBuilding.closing}
            </p>
            <Link href="/lien-he" className={`mt-8 ${ps.ctaPill}`}>
              Trao đổi kiến trúc
            </Link>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}

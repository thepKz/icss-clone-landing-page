import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { corporateHoatDongXaHoi } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

export const metadata: Metadata = {
  title: corporateHoatDongXaHoi.title,
  description: corporateHoatDongXaHoi.description,
};

export default function CommunityPage() {
  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">ICS và cộng đồng</p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {corporateHoatDongXaHoi.title}
            </h1>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{corporateHoatDongXaHoi.intro}</p>
          </Reveal>
        </div>
      </section>

      <SectionShell>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ul className="space-y-0">
              {corporateHoatDongXaHoi.initiatives.map((item, idx) => (
                <Reveal key={item.title} delay={0.06 * idx}>
                  <li
                    className={
                      idx > 0
                        ? "border-t border-zinc-200/90 pt-10 dark:border-white/[0.06] mt-10"
                        : ""
                    }
                  >
                    <p className="font-mono text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
                      {String(idx + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground">{item.title}</h2>
                    <p className="mt-3 text-base leading-relaxed text-muted">{item.body}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2}>
              <p className="mt-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {corporateHoatDongXaHoi.note}
              </p>
              <Link href="/lien-he" className={`mt-8 inline-flex ${ps.ctaPill}`}>
                Đề xuất hợp tác hoặc tài trợ chương trình
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.08} x={12} className="lg:col-span-5">
            <div className={`relative aspect-[4/5] ${ps.imageFrame}`}>
              <Image
                src={picsum("ics-community-hero", 800, 1000)}
                alt="Hoạt động chia sẻ tri thức an ninh mạng"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}

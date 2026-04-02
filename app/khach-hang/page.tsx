import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { corporateKhachHang } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

export const metadata: Metadata = {
  title: corporateKhachHang.title,
  description: corporateKhachHang.description,
};

export default function CustomersPage() {
  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Phạm vi phục vụ</p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {corporateKhachHang.title}
            </h1>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{corporateKhachHang.intro}</p>
          </Reveal>
        </div>
      </section>

      <SectionShell>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start md:gap-16">
          <Reveal>
            <ul className="space-y-0">
              {corporateKhachHang.segments.map((item, idx) => (
                <li
                  key={item.title}
                  className={
                    idx > 0
                      ? "mt-10 border-t border-zinc-200/90 pt-10 dark:border-white/[0.06]"
                      : ""
                  }
                >
                  <h2 className="text-lg font-semibold tracking-tight text-foreground">{item.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {corporateKhachHang.proofLine}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/#doi-tac" className={`inline-flex justify-center ${ps.ctaPill}`}>
                Xem tóm tắt trên trang chủ
              </Link>
              <Link href="/gioi-thieu" className={`inline-flex justify-center ${ps.ghostOutline}`}>
                Giới thiệu ICS
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} x={16}>
            <div className={`relative aspect-[4/3] ${ps.imageFrame}`}>
              <Image
                src={picsum("ics-customers-hero", 960, 720)}
                alt="Doanh nghiệp và hạ tầng trọng yếu được ICS đồng hành"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}

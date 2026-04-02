import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { productVietguard } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

export const metadata: Metadata = {
  title: productVietguard.title,
  description: productVietguard.intro,
};

export default function VietguardPage() {
  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Sản phẩm
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {productVietguard.title}
            </h1>
            <p className={`mt-2 ${ps.subtitleAccent}`}>{productVietguard.subtitle}</p>
            <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted">
              {productVietguard.intro}
            </p>
          </Reveal>
          <Reveal delay={0.08} x={20}>
            <div className={`relative aspect-[16/10] ${ps.imageFrame}`}>
              <Image
                src={picsum("ics-vietguard", 1000, 620)}
                alt="Bảo vệ ứng dụng di động"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SectionShell>
        <Reveal>
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Module và năng lực
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {productVietguard.modules.map((m) => (
              <li key={m} className={`${ps.cardSm} px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300`}>
                {m}
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionShell>

      <SectionShell className={ps.bandTopSoft}>
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="text-lg font-semibold text-foreground">Triển khai thực tế</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {productVietguard.caseStudy}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-lg font-semibold text-foreground">Pháp lý và tuân thủ</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {productVietguard.compliance}
            </p>
          </Reveal>
        </div>
        <Link href="/lien-he" className={`mt-10 ${ps.ctaPill}`}>
          Tư vấn VietGuard
        </Link>
      </SectionShell>
    </>
  );
}

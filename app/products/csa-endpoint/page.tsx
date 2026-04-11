import type { Metadata } from "next";
import Link from "next/link";
import { AiSocDashboardZoom } from "@/components/products/ai-soc-dashboard-zoom";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { productCsa } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

export const metadata: Metadata = {
  title: productCsa.title,
  description: productCsa.bullets[0],
};

export default function CsaEndpointPage() {
  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Sản phẩm
                </p>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {productCsa.title}
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.06} x={20}>
                <div className={`relative aspect-[16/9] ${ps.imageFrame}`}>
                  <AiSocDashboardZoom
                    src={picsum("ics-csa-endpoint", 1100, 620)}
                    alt="Bảo mật điểm cuối"
                    width={1100}
                    height={620}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    imageClassName="h-full w-full object-cover"
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SectionShell>
        <Reveal>
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Năng lực chính
          </h2>
          <ul className="mt-8 space-y-4">
            {productCsa.bullets.map((b) => (
              <li
                key={b}
                className={`${ps.card} px-6 py-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300`}
              >
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
        <Link href="/lien-he" className={`mt-12 ${ps.ctaPill}`}>
          Nhận bản tóm tắt kỹ thuật
        </Link>
      </SectionShell>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { productVAi } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

export const metadata: Metadata = {
  title: productVAi.title,
  description: productVAi.body.slice(0, 155),
};

export default function VAiAgentPage() {
  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Sản phẩm
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {productVAi.title}
            </h1>
            <p className={`mt-2 ${ps.subtitleAccent}`}>{productVAi.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="text-base leading-relaxed text-muted">{productVAi.body}</p>
            <ul className="mt-8 space-y-3">
              {productVAi.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className={ps.accentMark}>+</span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} x={0} className="lg:col-span-5">
            <div className={`relative aspect-[4/3] ${ps.imageFrame}`}>
              <Image
                src={picsum("ics-v-ai-agent", 900, 675)}
                alt="Giao tiếp in-app với AI"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </Reveal>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/lien-he" className={`${ps.ctaPill} min-h-11 items-center`}>
            Đăng ký demo
          </Link>
          <Link href="/products/ai-soc" className={`${ps.ghostOutline} inline-flex min-h-11 items-center`}>
            Xem AI SOC
          </Link>
        </div>
      </SectionShell>
    </>
  );
}

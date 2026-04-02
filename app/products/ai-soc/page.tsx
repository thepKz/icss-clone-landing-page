import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { productAiSoc } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

export const metadata: Metadata = {
  title: productAiSoc.title,
  description: productAiSoc.definition,
};

export default function AiSocPage() {
  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Sản phẩm
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {productAiSoc.title}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted">
                {productAiSoc.definition}
              </p>
              <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-500">{productAiSoc.audience}</p>
            </Reveal>
            <Reveal delay={0.08} x={24}>
              <div className={`relative aspect-[16/10] ${ps.imageFrame}`}>
                <Image
                  src={picsum("ics-ai-soc", 1000, 620, { grayscale: true })}
                  alt="Trung tâm vận hành an ninh với AI"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionShell>
        <Reveal>
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Lợi ích cho doanh nghiệp
          </h2>
          <ul className="mt-8 space-y-3">
            {productAiSoc.benefits.map((b) => (
              <li
                key={b}
                className="flex gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
              >
                <span className={ps.accentMark}>—</span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionShell>

      <SectionShell className={ps.bandTop}>
        <Reveal>
          <h2 className="text-xl font-semibold text-foreground">{productAiSoc.gurucul.title}</h2>
          <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-muted">
            {productAiSoc.gurucul.body}
          </p>
          <p className="mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-600">
            {productAiSoc.gurucul.disclaimer}
          </p>
        </Reveal>
        <Link href="/lien-he" className={`mt-10 ${ps.ctaPill}`}>
          Đặt workshop AI SOC
        </Link>
      </SectionShell>
    </>
  );
}

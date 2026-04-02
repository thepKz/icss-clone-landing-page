import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/content/articles";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Cập nhật an ninh mạng, pháp lý và threat landscape từ ICS.",
};

export default function ArticlesIndexPage() {
  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Tin tức và phân tích
            </h1>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted">
              Góc nhìn kỹ thuật và cập nhật pháp lý cho đội CISO và IT doanh nghiệp.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionShell>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {articles.map((a, idx) => (
            <Reveal key={a.slug} delay={0.05 * idx}>
              <article className={ps.articleCard}>
                <Link href={`/articles/${a.slug}`} className="flex h-full flex-col">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={picsum(`ics-article-${a.slug}`, 900, 500)}
                      alt={a.title}
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-95"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <time className="font-mono text-xs tabular-nums text-zinc-500">
                      {a.date} · {a.readMinutes} phút đọc
                    </time>
                    <h2 className="mt-3 text-xl font-semibold leading-snug text-foreground group-hover:text-accent">
                      {a.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {a.excerpt}
                    </p>
                    <span className="mt-6 text-sm font-medium text-accent">
                      Đọc tiếp
                    </span>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}

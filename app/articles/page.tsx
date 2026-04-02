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
  const [featured, ...rest] = articles;

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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-8">
          {featured ? (
            <Reveal className="lg:col-span-7" delay={0}>
              <article className={ps.articleCard}>
                <Link href={`/articles/${featured.slug}`} className="flex h-full flex-col lg:min-h-[320px] lg:flex-row lg:items-stretch">
                  <div className="relative aspect-[16/9] lg:aspect-auto lg:w-[56%] lg:shrink-0 lg:min-h-[280px]">
                    <Image
                      src={picsum(`ics-article-${featured.slug}`, 960, 540)}
                      alt={featured.title}
                      fill
                      className="object-cover transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-95 lg:rounded-l-[2rem]"
                      sizes="(max-width: 1024px) 100vw, 56vw"
                      priority
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <time className="font-mono text-xs tabular-nums text-muted">
                      {featured.date} · {featured.readMinutes} phút đọc
                    </time>
                    <h2 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl md:leading-snug group-hover:text-accent">
                      {featured.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">
                      {featured.excerpt}
                    </p>
                    <span className="mt-6 text-sm font-medium text-accent">Đọc tiếp</span>
                  </div>
                </Link>
              </article>
            </Reveal>
          ) : null}

          <div className="grid grid-cols-1 gap-8 lg:col-span-5">
            {rest.map((a, idx) => (
              <Reveal key={a.slug} delay={Math.min(0.025 * (idx + 1), 0.2)}>
                <article className={ps.articleCard}>
                  <Link href={`/articles/${a.slug}`} className="flex h-full flex-col md:flex-row md:items-stretch">
                    <div className="relative aspect-[16/9] md:aspect-auto md:w-[44%] md:shrink-0 md:min-h-[200px]">
                      <Image
                        src={picsum(`ics-article-${a.slug}`, 720, 400)}
                        alt={a.title}
                        fill
                        className="object-cover transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-95 md:rounded-l-[2rem]"
                        sizes="(max-width: 768px) 100vw, 22vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <time className="font-mono text-xs tabular-nums text-muted">
                        {a.date} · {a.readMinutes} phút đọc
                      </time>
                      <h2 className="mt-3 text-lg font-semibold leading-snug text-foreground group-hover:text-accent">
                        {a.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                      <span className="mt-6 text-sm font-medium text-accent">Đọc tiếp</span>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>
    </>
  );
}

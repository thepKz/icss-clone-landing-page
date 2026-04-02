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
        <div className="flex w-full min-w-0 flex-col gap-10 md:gap-12">
          {featured ? (
            <Reveal className="w-full min-w-0" delay={0}>
              <article className={`${ps.articleCard} w-full min-w-0`}>
                <Link
                  href={`/articles/${featured.slug}`}
                  className="flex h-full min-w-0 flex-col md:min-h-[280px] md:flex-row md:items-stretch"
                >
                  <div className="relative aspect-video min-h-0 w-full shrink-0 md:aspect-auto md:w-[52%] md:max-w-none md:min-h-[240px]">
                    <Image
                      src={picsum(`ics-article-${featured.slug}`, 960, 540)}
                      alt={featured.title}
                      fill
                      className="object-cover transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-95 md:rounded-l-[2rem]"
                      sizes="(max-width: 768px) 100vw, 52vw"
                      priority
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col p-6 md:p-8">
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

          <div className="grid w-full min-w-0 grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 md:gap-x-10">
            {rest.map((a, idx) => (
              <Reveal key={a.slug} className="min-w-0" delay={Math.min(0.025 * (idx + 1), 0.2)}>
                <article className={`${ps.articleCard} h-full min-w-0`}>
                  <Link
                    href={`/articles/${a.slug}`}
                    className="flex h-full min-w-0 flex-col sm:flex-row sm:items-stretch"
                  >
                    <div className="relative aspect-video w-full shrink-0 sm:aspect-auto sm:w-[42%] sm:min-h-[180px]">
                      <Image
                        src={picsum(`ics-article-${a.slug}`, 720, 400)}
                        alt={a.title}
                        fill
                        className="object-cover transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-95 sm:rounded-l-[2rem]"
                        sizes="(max-width: 640px) 100vw, 40vw"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                      <time className="font-mono text-xs tabular-nums text-muted">
                        {a.date} · {a.readMinutes} phút đọc
                      </time>
                      <h2 className="mt-3 text-lg font-semibold leading-snug text-foreground group-hover:text-accent">
                        {a.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                      <span className="mt-5 text-sm font-medium text-accent sm:mt-6">Đọc tiếp</span>
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

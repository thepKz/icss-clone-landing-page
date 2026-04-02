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

function formatListDate(iso: string) {
  return iso.replaceAll("-", ".");
}

export default function ArticlesIndexPage() {
  const [featured, ...rest] = articles;
  const total = articles.length;

  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-14 md:pt-36 md:pb-20`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal slideFromLeft={18} delay={0}>
            <p className="inline-flex rounded-full border border-zinc-200/90 bg-white/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600 dark:border-white/8 dark:bg-zinc-900/40 dark:text-zinc-400">
              Tin ICS
            </p>
            <h1 className="mt-6 max-w-[18ch] text-4xl font-semibold tracking-tighter text-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              Tin tức và phân tích
            </h1>
            <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted md:text-[1.0625rem]">
              Góc nhìn kỹ thuật và cập nhật pháp lý cho đội CISO và IT doanh nghiệp.
            </p>
            <p className="mt-6 font-mono text-xs tabular-nums tracking-wide text-muted">
              {total} bài trong danh mục
            </p>
          </Reveal>
        </div>
      </section>

      <SectionShell className="pt-0 md:pt-2" containerClassName="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex w-full min-w-0 flex-col gap-14 md:gap-16">
          {featured ? (
            <Reveal className="w-full min-w-0" delay={0.02} eager>
              <article
                className={`${ps.articleCard} relative w-full min-w-0 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}
              >
                <Link
                  href={`/articles/${featured.slug}`}
                  className="grid min-h-0 w-full min-w-0 grid-cols-1 lg:grid-cols-2 lg:min-h-[min(360px,52vh)]"
                >
                  <div className="relative aspect-video min-h-[200px] w-full min-w-0 lg:aspect-auto lg:min-h-[280px]">
                    <Image
                      src={picsum(`ics-article-${featured.slug}`, 1200, 675)}
                      alt={featured.title}
                      fill
                      className="object-cover transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] group-hover:opacity-95"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--background)/55 via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-(--background)/35"
                      aria-hidden
                    />
                  </div>
                  <div className="flex min-w-0 flex-col justify-center border-t border-zinc-200/80 p-6 dark:border-white/[0.07] md:p-8 lg:border-l lg:border-t-0 lg:p-10">
                    <time className="font-mono text-xs tabular-nums text-muted">
                      {formatListDate(featured.date)} · {featured.readMinutes} phút đọc
                    </time>
                    <h2 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-[1.65rem] md:leading-tight group-hover:text-accent">
                      {featured.title}
                    </h2>
                    <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-muted md:text-base md:leading-relaxed">
                      {featured.excerpt}
                    </p>
                    <span className="relative mt-8 inline-flex w-fit text-sm font-medium text-accent after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:after:scale-x-100">
                      Đọc tiếp
                    </span>
                  </div>
                </Link>
              </article>
            </Reveal>
          ) : null}

          <div className="w-full min-w-0">
            <Reveal delay={0.04} eager>
              <div className="mb-8 flex min-w-0 items-center gap-4 md:mb-10">
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Mới cập nhật
                </span>
                <div className="h-px min-w-0 flex-1 bg-zinc-200/90 dark:bg-white/8" />
              </div>
            </Reveal>

            <div className="grid w-full min-w-0 grid-cols-1 gap-9 md:grid-cols-2 md:gap-x-10 md:gap-y-10">
              {rest.map((a, idx) => (
                <Reveal
                  key={a.slug}
                  className="min-w-0"
                  delay={Math.min(0.03 * (idx + 1), 0.18)}
                >
                  <article
                    className={`${ps.articleCard} h-full min-w-0 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}
                  >
                    <Link
                      href={`/articles/${a.slug}`}
                      className="grid min-h-0 w-full min-w-0 grid-cols-1 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)] sm:items-stretch md:min-h-[200px]"
                    >
                      <div className="relative aspect-video w-full min-w-0 sm:aspect-auto sm:min-h-[180px]">
                        <Image
                          src={picsum(`ics-article-${a.slug}`, 720, 400)}
                          alt={a.title}
                          fill
                          className="object-cover transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] group-hover:opacity-95"
                          sizes="(max-width: 640px) 100vw, 200px"
                        />
                      </div>
                      <div className="flex min-w-0 flex-col border-t border-zinc-200/80 p-5 dark:border-white/[0.07] sm:border-l sm:border-t-0 sm:p-6">
                        <time className="font-mono text-xs tabular-nums text-muted">
                          {formatListDate(a.date)} · {a.readMinutes} phút đọc
                        </time>
                        <h2 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-foreground group-hover:text-accent md:text-xl md:leading-snug">
                          {a.title}
                        </h2>
                        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                          {a.excerpt}
                        </p>
                        <span className="relative mt-5 inline-flex w-fit text-sm font-medium text-accent after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:after:scale-x-100 sm:mt-6">
                          Đọc tiếp
                        </span>
                      </div>
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}

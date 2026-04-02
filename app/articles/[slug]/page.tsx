import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/content/articles";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

type Props = { params: Promise<{ slug: string }> };

/** Slugs must match `content/articles.ts` only (canonical for build + SEO). */
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Không tìm thấy" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 4);

  return (
    <>
      <article>
        <header className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
          <div className="mx-auto max-w-[1400px] px-4 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 lg:items-end">
              <div className="lg:col-span-8">
                <Reveal>
                  <Link href="/articles" className={`text-sm ${ps.linkAccent}`}>
                    Tin tức
                  </Link>
                  <time className="mt-4 block font-mono text-xs tabular-nums text-muted">
                    {article.date} · {article.readMinutes} phút đọc
                  </time>
                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-[2.15rem] md:leading-tight">
                    {article.title}
                  </h1>
                  <p className="mt-6 text-base leading-relaxed text-muted">{article.excerpt}</p>
                </Reveal>
              </div>
              <div className="lg:col-span-4">
                <Reveal delay={0.06} x={8}>
                  <div className={`${ps.cardMuted} p-5 md:p-6`}>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                      Bước tiếp theo
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                      Cần ánh xạ rủi ro hoặc kịch bản vá khẩn cho môi trường của bạn? Đội ICS phản hồi trong giờ làm việc.
                    </p>
                    <Link href="/lien-he" className={`mt-5 inline-flex w-full justify-center ${ps.ctaPill}`}>
                      Trao đổi với chuyên gia
                    </Link>
                    <Link
                      href="/chinh-sach-bao-mat"
                      className={`mt-3 block text-center text-xs ${ps.linkAccent}`}
                    >
                      Chính sách xử lý dữ liệu liên hệ
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </header>

        <SectionShell className="!py-10">
          <Reveal>
            <div className={`relative mx-auto max-w-[900px] ${ps.imageFrame}`}>
              <Image
                src={picsum(`ics-article-${article.slug}-hero`, 1200, 640)}
                alt={article.title}
                width={1200}
                height={640}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </SectionShell>

        <SectionShell className="!pt-0">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-0 lg:grid-cols-12 lg:gap-16">
            <div className="mx-auto max-w-[65ch] lg:col-span-8 lg:mx-0">
              {article.body.map((para, i) => (
                <Reveal key={i} delay={0.04 * i}>
                  <p className="mb-6 text-base leading-relaxed text-foreground/90">{para}</p>
                </Reveal>
              ))}
              <Reveal delay={0.12}>
                <Link href="/lien-he" className={`mt-4 inline-flex ${ps.ctaPill}`}>
                  Trao đổi với chuyên gia ICS
                </Link>
              </Reveal>
            </div>
            <aside className="lg:col-span-4" aria-label="Bài viết khác">
              <div className="lg:sticky lg:top-28">
                <Reveal delay={0.08}>
                  {related.length > 0 ? (
                    <>
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Đọc thêm
                      </p>
                      <ul className="mt-4 space-y-4">
                        {related.map((r) => (
                          <li key={r.slug}>
                            <Link
                              href={`/articles/${r.slug}`}
                              className={`group block rounded-xl border border-zinc-200/90 bg-white/85 p-4 transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-px hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] active:translate-y-0 dark:border-white/[0.08] dark:bg-zinc-900/45 dark:hover:shadow-[0_12px_28px_-14px_rgba(0,0,0,0.45)]`}
                            >
                              <time className="font-mono text-[10px] tabular-nums text-muted">
                                {r.date}
                              </time>
                              <p className="mt-2 text-sm font-medium leading-snug text-foreground group-hover:text-accent">
                                {r.title}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className="text-sm leading-relaxed text-muted">
                      Xem thêm nội dung tại mục lục tin tức.
                    </p>
                  )}
                  <Link href="/articles" className={`mt-6 inline-block text-sm ${ps.linkAccent}`}>
                    Về mục lục tin
                  </Link>
                </Reveal>
              </div>
            </aside>
          </div>
        </SectionShell>
      </article>
    </>
  );
}

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

  return (
    <>
      <article>
        <header className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
          <div className="mx-auto max-w-[900px] px-4 md:px-8">
            <Reveal>
              <Link href="/articles" className={`text-sm ${ps.linkAccent}`}>
                Tin tức
              </Link>
              <time className="mt-4 block font-mono text-xs tabular-nums text-zinc-500">
                {article.date} · {article.readMinutes} phút đọc
              </time>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-[2rem] md:leading-tight">
                {article.title}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted">
                {article.excerpt}
              </p>
            </Reveal>
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
          <div className="mx-auto max-w-[65ch]">
            {article.body.map((para, i) => (
              <Reveal key={i} delay={0.04 * i}>
                <p className="mb-6 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {para}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.12}>
              <Link href="/lien-he" className={`mt-4 ${ps.ctaPill}`}>
                Trao đổi với chuyên gia ICS
              </Link>
            </Reveal>
          </div>
        </SectionShell>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { corporateKhachHang } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";
import { SITE_CANONICAL_ORIGIN } from "@/lib/site-canonical";
import { picsum } from "@/lib/picsum";

const canonicalPath = "/khach-hang";

export const metadata: Metadata = {
  title: corporateKhachHang.title,
  description: corporateKhachHang.description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: `${corporateKhachHang.title} | ICS`,
    description: corporateKhachHang.description,
    url: `${SITE_CANONICAL_ORIGIN}${canonicalPath}`,
    locale: "vi_VN",
    type: "website",
  },
};

const shellOuter =
  "rounded-[1.35rem] bg-zinc-200/55 p-1.5 ring-1 ring-zinc-400/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:bg-zinc-800/55 dark:ring-white/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]";
const shellInner =
  "rounded-[calc(1.35rem-6px)] border border-zinc-200/95 bg-white px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_12px_36px_-30px_rgba(15,118,110,0.12)] dark:border-white/10 dark:bg-zinc-950 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:px-5 sm:py-5";

const thumbOuter =
  "shrink-0 rounded-xl bg-zinc-200/60 p-1 ring-1 ring-zinc-300/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] dark:bg-zinc-800/60 dark:ring-white/12 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]";
const thumbInner =
  "relative h-[4.75rem] w-[4.75rem] overflow-hidden rounded-lg border border-zinc-200/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] dark:border-white/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:h-[5.25rem] sm:w-[5.25rem]";

function PageBreadcrumb() {
  const sep = (
    <li className="text-zinc-300 dark:text-zinc-600" aria-hidden>
      /
    </li>
  );

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
        <li>
          <Link
            href="/"
            className="transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-teal-800 dark:hover:text-cyan-300"
          >
            Trang chủ
          </Link>
        </li>
        {sep}
        <li>
          <Link
            href="/gioi-thieu"
            className="transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-teal-800 dark:hover:text-cyan-300"
          >
            Giới thiệu
          </Link>
        </li>
        {sep}
        <li className="font-medium text-zinc-800 dark:text-zinc-200">
          <span aria-current="page">Khách hàng của chúng tôi</span>
        </li>
      </ol>
    </nav>
  );
}

export default function CustomersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${SITE_CANONICAL_ORIGIN}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Giới thiệu",
        item: `${SITE_CANONICAL_ORIGIN}/gioi-thieu`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: corporateKhachHang.title,
        item: `${SITE_CANONICAL_ORIGIN}${canonicalPath}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <PageBreadcrumb />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Về ICS
            </p>
            <h1 className="mt-4 max-w-[40ch] text-pretty text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {corporateKhachHang.title}
            </h1>
            <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted md:text-[1.05rem]">
              {corporateKhachHang.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <SectionShell>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <ul className="space-y-5">
                {corporateKhachHang.segments.map((item) => (
                  <li key={item.title}>
                    <div className={shellOuter}>
                      <div className={shellInner}>
                        <div className="flex flex-row items-start gap-4 sm:gap-5">
                          <div className={thumbOuter}>
                            <div className={thumbInner}>
                              <Image
                                src={picsum(item.imageSeed, 240, 240)}
                                alt={item.imageAlt}
                                width={240}
                                height={240}
                                className="h-full w-full object-cover"
                                sizes="(max-width: 640px) 76px, 84px"
                              />
                            </div>
                          </div>
                          <div className="min-w-0 flex-1 border-l-2 border-teal-700/25 pl-4 dark:border-cyan-400/28 sm:pl-5">
                            <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                              {item.title}
                            </h2>
                            <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/lien-he" className={`inline-flex justify-center ${ps.ctaPill}`}>
                  Liên hệ tư vấn
                </Link>
                <Link href="/doi-tac" className={`inline-flex justify-center ${ps.ghostOutline}`}>
                  Đối tác &amp; hợp tác
                </Link>
                <Link href="/gioi-thieu" className={`inline-flex justify-center ${ps.ghostOutline}`}>
                  Giới thiệu ICS
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.08} x={16} className="lg:col-span-5">
            <div className={`relative aspect-[4/3] lg:sticky lg:top-28 ${ps.imageFrame}`}>
              <Image
                src={picsum("ics-customers-hero", 960, 720)}
                alt="Đối tượng phục vụ của ICS: tài chính, khu vực công và hạ tầng số"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 36vw"
              />
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}

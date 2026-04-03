import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CareersOpenRoles } from "@/components/careers/careers-open-roles";
import { CareersOpenRolesIntro } from "@/components/careers/careers-open-roles-intro";
import { CareersReasonsBento } from "@/components/careers/careers-reasons-bento";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { careers, company } from "@/content/site";
import { SITE_CANONICAL_ORIGIN } from "@/lib/site-canonical";
import { pageSurface as ps } from "@/lib/page-surface";
import { picsum } from "@/lib/picsum";

const careersCanonical = `${SITE_CANONICAL_ORIGIN}/tuyen-dung`;

export const metadata: Metadata = {
  title: "Tuyển dụng — SOC, bảo mật & kinh doanh giải pháp · Hà Nội",
  description: careers.pageDescription,
  alternates: { canonical: "/tuyen-dung" },
  openGraph: {
    title: "Tuyển dụng ICS — Việc làm an ninh mạng & triển khai SOC tại Hà Nội",
    description: careers.pageDescription,
    url: careersCanonical,
    locale: "vi_VN",
    type: "website",
  },
};

const jobPostingsJsonLd = {
  "@context": "https://schema.org",
  "@graph": careers.positions.map((p) => ({
    "@type": "JobPosting",
    title: p.title,
    description: `${p.brief} Phòng ban: ${p.dept}. Cấp: ${p.level}. Hình thức: ${p.type}. Mức lương: ${p.salary}.`,
    datePosted: "2026-04-01",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: company.legalName,
      sameAs: company.website,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hà Nội",
        addressCountry: "VN",
      },
    },
  })),
};

const heroBezelOuter =
  "rounded-[2rem] bg-zinc-200/35 p-1.5 ring-1 ring-zinc-300/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] dark:bg-zinc-800/55 dark:ring-white/[0.1] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]";
const heroBezelInner =
  "relative aspect-[4/5] max-h-[min(72vh,38rem)] overflow-hidden rounded-[calc(2rem-6px)] border border-zinc-200/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_24px_56px_-40px_rgba(24,24,27,0.35)] sm:aspect-[3/4] md:rotate-[1.25deg] dark:border-white/[0.08] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_28px_64px_-44px_rgba(0,0,0,0.55)] md:max-md:rotate-0";

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingsJsonLd),
        }}
      />
      <section
        className={`relative overflow-hidden border-b border-zinc-200/90 ${ps.edgeBottom} dark:border-white/[0.06]`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.55] dark:opacity-[0.42]"
          aria-hidden
        >
          <div className="absolute -left-[min(28%,12rem)] top-[8%] h-[min(72vw,28rem)] w-[min(72vw,28rem)] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.12),transparent_68%)] dark:bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.1),transparent_68%)]" />
          <div className="absolute -right-[min(22%,10rem)] bottom-[5%] h-[min(65vw,26rem)] w-[min(65vw,26rem)] rounded-full bg-[radial-gradient(circle_at_center,rgba(113,113,122,0.14),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(161,161,170,0.08),transparent_70%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[min(100dvh,56rem)] max-w-[1400px] flex-col justify-center px-4 py-24 md:px-8 md:py-28">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12 lg:gap-y-16">
            <div className="order-2 lg:order-1 lg:col-span-6 lg:col-start-1">
              <Reveal slideFromLeft={18}>
                <span className="inline-flex rounded-full border border-zinc-300/90 bg-white/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-600 dark:border-white/12 dark:bg-zinc-900/40 dark:text-zinc-400">
                  {careers.heroEyebrow}
                </span>
                <h1 className="mt-6 max-w-[14ch] text-[clamp(2rem,5.2vw,3.35rem)] font-semibold leading-[1.08] tracking-tight text-zinc-900 dark:text-zinc-50">
                  {careers.headline}
                </h1>
                <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-zinc-600 md:text-[1.05rem] dark:text-zinc-400">
                  {careers.heroSub}
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Link
                    href="/lien-he"
                    className={`group inline-flex items-center gap-3 rounded-full border border-teal-800/50 bg-teal-800/[0.14] px-6 py-3 text-sm font-semibold text-teal-950 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-teal-700/60 active:scale-[0.98] dark:border-cyan-400/40 dark:bg-cyan-400/12 dark:text-cyan-50 dark:hover:border-cyan-300/55`}
                  >
                    Gửi CV
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-teal-900/20 bg-white/55 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 dark:border-white/15 dark:bg-white/10">
                      <span className="font-mono text-xs" aria-hidden>
                        →
                      </span>
                    </span>
                  </Link>
                  <Link
                    href="/gioi-thieu"
                    className={`rounded-full px-5 py-3 text-sm font-medium ${ps.ghostOutline}`}
                  >
                    Về ICS
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="order-1 w-full lg:order-2 lg:col-span-5 lg:col-start-8">
              <Reveal delay={0.08} x={20}>
                <div className={`${heroBezelOuter} md:-translate-y-2`}>
                  <div className={heroBezelInner}>
                    <Image
                      src={picsum("ics-careers-atelier", 900, 1120)}
                      alt="Hành lang văn phòng và không gian làm việc nhóm tại ICS"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 36vw"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-zinc-950/10" />
                    <p className="absolute bottom-5 left-5 right-5 font-mono text-[9px] uppercase tracking-[0.24em] text-white/75">
                      Hà Nội · SOC · Kỹ thuật · Go-to-market
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SectionShell className={`${ps.bandSoft} scroll-mt-28`}>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Vì sao là ICS</p>
          <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Ba trụ — công nghệ, nghề nghiệp, con người
          </h2>
          <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-muted md:text-base">
            Bố cục dưới đây không xếp hạng ưu tiên: mỗi ô là một mặt của cùng một môi trường làm việc.
          </p>
        </Reveal>
        <div className="mt-14">
          <CareersReasonsBento reasons={careers.reasons} />
        </div>
      </SectionShell>

      <SectionShell className={`${ps.bandTopSoft} border-zinc-200/90 dark:border-white/[0.06]`}>
        <Reveal>
          <CareersOpenRolesIntro
            count={careers.positions.length}
            title={careers.positionsSectionTitle}
            description={careers.positionsSectionSub}
          />
        </Reveal>
        <div className="mt-12 md:mt-14">
          <CareersOpenRoles positions={careers.positions} />
        </div>

        <Reveal className="mt-16 md:mt-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/90 bg-gradient-to-br from-white/95 via-zinc-50/80 to-teal-50/35 px-8 py-12 md:px-12 md:py-14 dark:border-white/[0.07] dark:from-zinc-900/40 dark:via-zinc-950/30 dark:to-teal-950/25">
            <div
              className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-teal-400/15 dark:bg-cyan-400/10"
              aria-hidden
            />
            <p className="relative max-w-[52ch] text-lg font-medium leading-relaxed text-zinc-800 md:text-xl dark:text-zinc-100">
              {careers.cta}
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <Link href="/lien-he" className={`inline-flex justify-center ${ps.ctaPillLg}`}>
                Liên hệ tuyển dụng
              </Link>
              <Link href="/articles" className={`inline-flex justify-center ${ps.ghostOutline}`}>
                Đọc tin ICS
              </Link>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}

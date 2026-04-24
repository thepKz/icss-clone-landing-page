import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CareersOpenRoles } from "@/components/careers/careers-open-roles";
import { CareersOpenRolesIntro } from "@/components/careers/careers-open-roles-intro";
import { CareersReasonsBento } from "@/components/careers/careers-reasons-bento";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { careers, company, type CareerPosition } from "@/content/site";
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

function jobPostingDescription(p: CareerPosition) {
  const parts = [
    p.brief,
    p.detail.mission,
    ...p.detail.responsibilities.slice(0, 4),
    `Địa điểm: ${p.detail.location}.`,
    `Phòng ban: ${p.dept}. Cấp: ${p.level}. Hình thức: ${p.type}. Mức lương: ${p.salary}.`,
  ];
  return parts.join(" ");
}

const jobPostingsJsonLd = {
  "@context": "https://schema.org",
  "@graph": careers.positions.map((p) => ({
    "@type": "JobPosting",
    title: p.title,
    description: jobPostingDescription(p),
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
  "relative aspect-[3/4] max-h-[22rem] overflow-hidden rounded-[calc(2rem-6px)] border border-zinc-200/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_24px_56px_-40px_rgba(24,24,27,0.35)] sm:max-h-[28rem] sm:aspect-[3/4] md:aspect-[4/5] md:max-h-[38rem] md:rotate-[1.25deg] dark:border-white/[0.08] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_28px_64px_-44px_rgba(0,0,0,0.55)] max-md:rotate-0";

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

        <div className="relative mx-auto flex min-h-0 max-w-[1400px] flex-col justify-center px-4 py-16 sm:min-h-[44rem] sm:py-20 md:px-8 md:py-28 lg:min-h-[52rem]">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12 lg:gap-y-16">
            <div className="order-2 lg:order-1 lg:col-span-6 lg:col-start-1">
              <Reveal slideFromLeft={18}>
                <span className="inline-flex rounded-full border border-zinc-300/90 bg-white/80 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-white/12 dark:bg-zinc-900/55 dark:text-zinc-400 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  {careers.heroEyebrow}
                </span>
                <h1 className="mt-5 max-w-[24rem] text-balance text-[clamp(2.1rem,6.2vw,3.5rem)] font-semibold leading-[1.06] tracking-tight text-zinc-900 sm:max-w-[30rem] dark:text-zinc-50">
                  {careers.headline}
                </h1>
                <p className="mt-5 max-w-[54ch] text-[1.05rem] leading-relaxed text-zinc-600 sm:mt-6 md:text-[1.1rem] dark:text-zinc-400">
                  {careers.heroSub}
                </p>
                <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
                  <Link
                    href="/lien-he"
                    className={`group inline-flex w-full items-center justify-center gap-3 rounded-full border border-teal-800/50 bg-teal-800/[0.14] px-6 py-3.5 text-base font-semibold text-teal-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition-[transform,border-color,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-teal-700/60 active:scale-[0.98] dark:border-cyan-400/40 dark:bg-cyan-400/12 dark:text-cyan-50 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:border-cyan-300/55 sm:w-auto sm:justify-start`}
                  >
                    Gửi CV
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-teal-900/20 bg-white/60 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 dark:border-white/15 dark:bg-white/10">
                      <span className="font-mono text-xs" aria-hidden>
                        →
                      </span>
                    </span>
                  </Link>
                  <Link
                    href="/gioi-thieu"
                    className={`inline-flex w-full justify-center rounded-full px-5 py-3.5 text-base font-medium sm:w-auto ${ps.ghostOutline}`}
                  >
                    Về ICS
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="order-1 w-full max-md:mx-auto max-md:max-w-[min(100%,20.5rem)] lg:order-2 lg:col-span-5 lg:col-start-8 lg:max-w-none">
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
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/50 via-transparent to-zinc-950/10" />
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

      <SectionShell
        className={`${ps.bandSoft} scroll-mt-28`}
        containerClassName="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-8"
      >
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
            Vì sao là ICS
          </p>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:mt-4 sm:text-3xl md:text-4xl">
            Ba trụ — công nghệ, nghề nghiệp, con người
          </h2>
          <p className="mt-3 max-w-[56ch] text-base leading-relaxed text-muted sm:mt-4 md:text-lg">
            Bố cục dưới đây không xếp hạng ưu tiên: mỗi ô là một mặt của cùng một môi trường làm việc.
          </p>
        </Reveal>
        <div className="mt-10 sm:mt-12 md:mt-14">
          <CareersReasonsBento reasons={careers.reasons} />
        </div>
      </SectionShell>

      <SectionShell
        className={`${ps.bandTopSoft} border-zinc-200/90 dark:border-white/[0.06]`}
        containerClassName="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-8"
      >
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

        <Reveal className="mt-12 sm:mt-16 md:mt-20">
          <div className="rounded-[1.75rem] bg-zinc-300/50 p-1 ring-1 ring-zinc-400/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] dark:bg-zinc-800/55 dark:ring-white/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:rounded-[2rem]">
            <div className="relative overflow-hidden rounded-[calc(1.75rem-5px)] border border-zinc-200/95 bg-linear-to-br from-white/98 via-zinc-50/88 to-teal-50/40 px-5 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,1)] sm:px-8 sm:py-12 md:rounded-[calc(2rem-6px)] md:px-12 md:py-14 dark:border-white/[0.08] dark:from-zinc-950/92 dark:via-zinc-950/88 dark:to-teal-950/30 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div
                className="pointer-events-none absolute -right-12 top-0 h-36 w-36 rounded-full bg-teal-500/12 blur-2xl dark:bg-cyan-400/12 dark:blur-3xl sm:-right-16 sm:h-40 sm:w-40"
                aria-hidden
              />
              <p className="relative max-w-[52ch] text-base font-medium leading-relaxed text-zinc-800 sm:text-lg md:text-xl dark:text-zinc-100">
                {careers.cta}
              </p>
              <div className="relative mt-6 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap">
                <Link
                  href="/lien-he"
                  className={`inline-flex w-full justify-center sm:w-auto ${ps.ctaPillLg}`}
                >
                  Liên hệ tuyển dụng
                </Link>
                <Link
                  href="/articles"
                  className={`inline-flex w-full justify-center sm:w-auto ${ps.ghostOutline}`}
                >
                  Đọc tin ICS
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}

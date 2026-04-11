import type { Metadata } from "next";
import {
  ChatCircle,
  Envelope,
  Globe,
  IdentificationCard,
  MapPin,
  Phone,
} from "@phosphor-icons/react/ssr";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { ContactForm } from "@/components/contact-form";
import { company, contactPage } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: contactPage.subtitle,
};

const iconWrap =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-teal-800 dark:bg-white/[0.06] dark:text-cyan-200/90";

type ContactPageProps = {
  searchParams: Promise<{ "vi-tri"?: string; loai?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const sp = await searchParams;
  const roleTitle = sp["vi-tri"]?.trim();
  const loai = sp["loai"]?.trim();
  const demoMeta = loai ? contactPage.demoLabels?.[loai] : undefined;

  const prefilledMessage = roleTitle
    ? `Ứng tuyển vị trí: ${roleTitle}`
    : demoMeta?.prefill ?? "";

  const pageHeading = demoMeta?.heading ?? contactPage.title;
  const pageSubtitle = demoMeta?.subtitle ?? contactPage.subtitle;

  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {company.brand}
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {pageHeading}
            </h1>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted">
              {pageSubtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <SectionShell className={ps.bandTopSoft}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-[2rem] bg-zinc-200/40 p-1.5 ring-1 ring-zinc-300/60 dark:bg-white/[0.04] dark:ring-white/10">
                <div
                  className={`rounded-[calc(2rem-6px)] border border-zinc-200/90 bg-white p-6 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.12)] md:p-8 dark:border-white/[0.08] dark:bg-zinc-900/65 dark:shadow-[0_24px_48px_-32px_rgba(0,0,0,0.45)]`}
                >
                  <h2 className="text-lg font-semibold tracking-tight text-foreground">
                    Thông tin công ty
                  </h2>
                  <p className="mt-2 text-sm font-medium leading-snug text-zinc-800 dark:text-zinc-100">
                    {company.legalName}
                  </p>

                  <div className="mt-6 divide-y divide-zinc-200/90 dark:divide-white/[0.08]">
                    <div className="flex gap-4 pb-5">
                      <div className={iconWrap} aria-hidden>
                        <MapPin className="h-5 w-5" weight="regular" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                          Văn phòng
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-foreground">
                          {company.office}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 py-5">
                      <div className={iconWrap} aria-hidden>
                        <Phone className="h-5 w-5" weight="regular" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                          Hotline
                        </p>
                        <p className="mt-1 text-sm">
                          <a
                            href={`tel:${company.hotline.replace(/\./g, "")}`}
                            className={ps.linkAccent}
                          >
                            {company.hotline}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 py-5">
                      <div className={iconWrap} aria-hidden>
                        <Envelope className="h-5 w-5" weight="regular" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                          Email
                        </p>
                        <p className="mt-1 text-sm break-all">
                          <a
                            href={`mailto:${company.email}`}
                            className={ps.linkAccent}
                          >
                            {company.email}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 py-5">
                      <div className={iconWrap} aria-hidden>
                        <ChatCircle className="h-5 w-5" weight="regular" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                          Zalo
                        </p>
                        <p className="mt-1 text-sm text-foreground">
                          {company.zalo}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 py-5">
                      <div className={iconWrap} aria-hidden>
                        <Globe className="h-5 w-5" weight="regular" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                          Website
                        </p>
                        <p className="mt-1 text-sm break-all">
                          <a
                            href={company.website}
                            className={ps.linkAccent}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {company.website}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-5">
                      <div className={iconWrap} aria-hidden>
                        <IdentificationCard
                          className="h-5 w-5"
                          weight="regular"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                          MST
                        </p>
                        <p className="mt-1 font-mono text-sm tabular-nums text-foreground">
                          {company.mst}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-dashed border-zinc-300/90 bg-zinc-50/80 px-4 py-5 dark:border-white/[0.1] dark:bg-zinc-950/40">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                      Bản đồ
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                      Khối nhúng bản đồ có thể bổ sung khi có API key và tọa độ
                      chính xác.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7" id="lien-he-form">
            <Reveal delay={0.06} x={16}>
              <div className="mb-6 md:mb-8">
                <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                  {demoMeta ? demoMeta.heading : "Gửi yêu cầu"}
                </h2>
                <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-muted">
                  Điền biểu mẫu bên dưới; đội ICS sẽ phản hồi qua email hoặc điện
                  thoại trong giờ làm việc.
                </p>
              </div>
              <ContactForm
                key={(roleTitle ?? loai) ?? "contact-default"}
                initialMessage={prefilledMessage}
                initialLoai={loai}
              />
            </Reveal>
          </div>
        </div>
      </SectionShell>
    </>
  );
}

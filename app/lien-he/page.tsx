import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { ContactForm } from "@/components/contact-form";
import { company, contactPage } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: contactPage.subtitle,
};

export default function ContactPage() {
  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {contactPage.title}
            </h1>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted">
              {contactPage.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-lg font-semibold text-foreground">Thông tin công ty</h2>
              <p className="mt-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {company.legalName}
              </p>
              <dl className="mt-6 space-y-4 text-sm text-muted">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">
                    Văn phòng
                  </dt>
                  <dd className="mt-1">{company.office}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">
                    Hotline
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${company.hotline.replace(/\./g, "")}`}
                      className={ps.linkAccent}
                    >
                      {company.hotline}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${company.email}`}
                      className={ps.linkAccent}
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">
                    Zalo
                  </dt>
                  <dd className="mt-1">{company.zalo}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">
                    Website
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={company.website}
                      className={ps.linkAccent}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {company.website}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">
                    MST
                  </dt>
                  <dd className="mt-1 font-mono tabular-nums">{company.mst}</dd>
                </div>
              </dl>
              <p className="mt-8 text-xs leading-relaxed text-zinc-500 dark:text-zinc-600">
                Bản đồ Google Maps có thể nhúng tại đây khi có API key và tọa độ
                chính xác.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.06} x={16}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </SectionShell>
    </>
  );
}

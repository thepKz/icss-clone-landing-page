import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { company, legalTerms } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";

export const metadata: Metadata = {
  title: legalTerms.title,
  description: legalTerms.description,
};

export default function TermsPage() {
  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-12 md:pt-32 md:pb-16`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Pháp lý và minh bạch
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {legalTerms.title}
            </h1>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">
              {legalTerms.description}
            </p>
            <p className="mt-3 font-mono text-xs tabular-nums text-zinc-500 dark:text-zinc-400">{legalTerms.updated}</p>
          </Reveal>
        </div>
      </section>

      <SectionShell>
        <div className="mx-auto max-w-[65ch]">
          {legalTerms.sections.map((sec, idx) => (
            <Reveal key={sec.heading} delay={0.05 * idx}>
              <section className={idx > 0 ? "mt-12 border-t border-zinc-200/90 pt-12 dark:border-white/[0.06]" : ""}>
                <h2 className="text-xl font-semibold tracking-tight text-foreground">{sec.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {sec.paragraphs.map((p, pi) => (
                    <p key={`${sec.heading}-${pi}`}>{p}</p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
          <Reveal delay={0.08}>
            <div className={`mt-14 rounded-2xl border border-zinc-200/90 bg-white p-6 dark:border-white/[0.07] dark:bg-zinc-900/35 md:p-8`}>
              <p className="text-sm font-medium text-foreground">Cần tư vấn bằng hợp đồng?</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Các cam kết dịch vụ, SLA và phạm vi trách nhiệm được ghi trong văn bản ký kết với {company.brand}.
              </p>
              <Link href="/lien-he" className={`mt-5 inline-flex ${ps.ctaPill}`}>
                Trao đổi với ICS
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 text-sm text-muted">
              Xem{" "}
              <Link href="/chinh-sach-bao-mat" className={ps.linkAccent}>
                Chính sách bảo mật
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}

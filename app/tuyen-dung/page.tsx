import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { careers } from "@/content/site";
import { pageSurface as ps } from "@/lib/page-surface";

export const metadata: Metadata = {
  title: "Tuyển dụng",
  description: careers.headline,
};

export default function CareersPage() {
  return (
    <>
      <section className={`${ps.edgeBottom} pt-28 pb-16 md:pt-32 md:pb-20`}>
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <Reveal>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {careers.headline}
            </h1>
          </Reveal>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-8 md:grid-cols-3">
          {careers.reasons.map((r, idx) => (
            <Reveal
              key={r.title}
              delay={0.07 * idx}
              className={`${ps.card} p-8`}
            >
              <h2 className="text-lg font-semibold text-foreground">{r.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className={ps.edgeTop}>
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Vị trí đang mở
          </h2>
        </Reveal>
        <div className={`mt-10 ${ps.tableWrap}`}>
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className={ps.tableHead}>
              <tr>
                <th className="px-4 py-3 font-medium">Vị trí</th>
                <th className="px-4 py-3 font-medium">Phòng ban</th>
                <th className="px-4 py-3 font-medium">Cấp độ</th>
                <th className="px-4 py-3 font-medium">Hình thức</th>
                <th className="px-4 py-3 font-medium">Mức lương</th>
              </tr>
            </thead>
            <tbody className={ps.tableBodyDivide}>
              {careers.positions.map((p) => (
                <tr key={p.title} className="text-zinc-700 dark:text-zinc-300">
                  <td className="px-4 py-4 align-top font-medium text-foreground">
                    {p.title}
                  </td>
                  <td className="px-4 py-4 align-top">{p.dept}</td>
                  <td className="px-4 py-4 align-top">{p.level}</td>
                  <td className="px-4 py-4 align-top">{p.type}</td>
                  <td className="px-4 py-4 align-top font-mono text-xs tabular-nums text-muted">
                    {p.salary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 space-y-6">
          {careers.positions.map((p, idx) => (
            <Reveal
              key={`${p.title}-brief`}
              delay={0.04 * idx}
              className={`${ps.cardBrief} p-6`}
            >
              <h3 className="font-medium text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.brief}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <p className="max-w-[65ch] text-base leading-relaxed text-muted">
            {careers.cta}
          </p>
          <Link href="/lien-he" className={`mt-6 ${ps.ctaPillLg}`}>
            Gửi CV qua liên hệ
          </Link>
        </Reveal>
      </SectionShell>
    </>
  );
}

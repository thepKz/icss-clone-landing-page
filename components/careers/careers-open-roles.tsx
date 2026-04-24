"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import type { CareerPosition } from "@/content/site";
import { CareersCvModal } from "@/components/careers/careers-cv-modal";

export type { CareerPosition } from "@/content/site";

const spring = { type: "spring" as const, stiffness: 280, damping: 34 };

type DeptFilter = "all" | "Marketing" | "Kinh doanh" | "Kỹ thuật";

function MetaPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-zinc-300/90 bg-zinc-100/85 px-3 py-1.5 text-xs font-semibold text-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] dark:border-white/14 dark:bg-zinc-900/70 dark:text-zinc-200 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      {children}
    </span>
  );
}

function deptAccent(dept: string): { bar: string; hoverBorder: string } {
  if (dept === "Marketing") {
    return {
      bar: "bg-teal-600 dark:bg-cyan-400/85",
      hoverBorder:
        "hover:border-teal-600/40 dark:hover:border-cyan-400/35",
    };
  }
  if (dept === "Kinh doanh") {
    return {
      bar: "bg-zinc-500 dark:bg-zinc-500",
      hoverBorder: "hover:border-zinc-400/55 dark:hover:border-white/14",
    };
  }
  return {
    bar: "bg-teal-800 dark:bg-cyan-500/75",
    hoverBorder: "hover:border-teal-700/45 dark:hover:border-cyan-400/28",
  };
}

/** Stabilized “metric plate” for compensation — accent + readable core (glass-ui). */
function SalaryHighlight({ salary }: { salary: string }) {
  return (
    <aside
      aria-label={`Mức lương: ${salary}`}
      className="w-full md:col-span-1 md:col-start-2 md:row-span-3 md:row-start-1"
    >
      <div className="rounded-[1.15rem] bg-teal-800/20 p-1.5 shadow-[0_12px_40px_-18px_rgba(15,118,110,0.45),inset_0_1px_0_rgba(255,255,255,0.4)] ring-2 ring-teal-700/35 dark:bg-cyan-400/14 dark:shadow-[0_14px_44px_-18px_rgba(34,211,238,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] dark:ring-cyan-400/28 md:rounded-2xl">
        <div className="rounded-[calc(1.15rem-6px)] border border-teal-700/45 bg-linear-to-br from-teal-50 via-white/98 to-teal-100/90 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(15,118,110,0.12)] dark:border-cyan-400/35 dark:from-zinc-950 dark:via-teal-950/40 dark:to-zinc-950 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(34,211,238,0.08)] md:rounded-[calc(1rem-4px)] md:px-5 md:py-4">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex rounded-full border border-teal-700/25 bg-teal-700/[0.12] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-teal-900 dark:border-cyan-400/30 dark:bg-cyan-400/15 dark:text-cyan-100">
              Mức lương
            </span>
          </div>
          <p className="mt-3 rounded-lg bg-teal-800/[0.07] px-3 py-2.5 font-mono text-[1.05rem] font-bold leading-snug tracking-tight text-teal-950 tabular-nums ring-1 ring-teal-800/15 dark:bg-cyan-400/12 dark:text-cyan-50 dark:ring-cyan-400/25 md:text-xl">
            {salary}
          </p>
        </div>
      </div>
    </aside>
  );
}

function DetailList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="space-y-2">
      <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-500">
        {title}
      </h4>
      <ul className="list-inside list-disc space-y-1.5 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
        {items.map((item) => (
          <li key={item} className="pl-0.5 marker:text-teal-700 dark:marker:text-cyan-400/80">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

const FILTER_CHIPS: { id: DeptFilter; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "Marketing", label: "Marketing" },
  { id: "Kinh doanh", label: "Kinh doanh" },
  { id: "Kỹ thuật", label: "Kỹ thuật" },
];

export function CareersOpenRoles({ positions }: { positions: CareerPosition[] }) {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<DeptFilter>("all");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [cvModal, setCvModal] = useState<CareerPosition | null>(null);

  const counts = useMemo((): Record<DeptFilter, number> => {
    const c: Record<DeptFilter, number> = {
      all: positions.length,
      Marketing: 0,
      "Kinh doanh": 0,
      "Kỹ thuật": 0,
    };
    for (const p of positions) {
      if (p.dept === "Marketing") c.Marketing += 1;
      if (p.dept === "Kinh doanh") c["Kinh doanh"] += 1;
      if (p.dept === "Kỹ thuật") c["Kỹ thuật"] += 1;
    }
    return c;
  }, [positions]);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? positions
        : positions.filter((p) => p.dept === filter),
    [positions, filter],
  );

  return (
    <>
      <div
        className="mb-8 flex flex-wrap gap-2.5"
        role="tablist"
        aria-label="Lọc vị trí theo phòng ban"
      >
        {FILTER_CHIPS.map((chip) => {
          const count = counts[chip.id];
          const active = filter === chip.id;
          return (
            <button
              key={chip.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(chip.id)}
              className={`inline-flex min-h-11 items-center gap-1.5 rounded-full border px-4 py-2.5 text-sm font-semibold transition-[transform,border-color,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${
                active
                  ? "border-teal-800/45 bg-teal-800/12 text-teal-950 dark:border-cyan-400/40 dark:bg-cyan-400/12 dark:text-cyan-50"
                  : "border-zinc-300/90 bg-white/70 text-zinc-700 hover:border-zinc-400/95 dark:border-white/12 dark:bg-zinc-900/45 dark:text-zinc-300 dark:hover:border-white/18"
              }`}
            >
              {chip.label}
              <span
                className={`tabular-nums ${active ? "opacity-90" : "opacity-60"}`}
              >
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      <motion.ul
        className="flex flex-col gap-5 sm:gap-4 md:gap-5"
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, margin: "-6% 0px" }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: 0.02 },
          },
        }}
      >
        {filtered.map((p, index) => {
          const { bar, hoverBorder } = deptAccent(p.dept);
          const zebra = index % 2 === 1;
          const isOpen = expanded === p.title;
          const d = p.detail;

          return (
            <motion.li
              key={p.title}
              variants={{
                hidden: { opacity: 0, x: reduce ? 0 : -16 },
                show: { opacity: 1, x: 0, transition: spring },
              }}
            >
              <article
                className={`relative overflow-hidden rounded-[1.2rem] border border-zinc-300/95 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_0_rgba(0,0,0,0.04)] transition-[border-color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:translate-y-px dark:border-white/8 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:rounded-3xl ${hoverBorder} ${
                  zebra
                    ? "bg-white/98 dark:bg-zinc-950/55"
                    : "bg-zinc-50/95 dark:bg-zinc-900/35"
                }`}
              >
                <div className={`pointer-events-none absolute inset-y-3 left-0 w-px ${bar}`} aria-hidden />
                <div className="border-l border-transparent py-6 pl-4 pr-4 sm:py-7 sm:pl-5 sm:pr-5 md:py-8 md:pl-8 md:pr-8">
                  <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-[minmax(0,1fr)_min(17.5rem,36%)] md:gap-x-8 md:gap-y-4 md:items-start">
                    <h3 className="text-[1.2rem] font-semibold leading-snug tracking-tight text-zinc-900 sm:text-xl md:col-start-1 md:row-start-1 md:text-2xl dark:text-zinc-50">
                      {p.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 md:col-start-1 md:row-start-2">
                      <MetaPill>{p.dept}</MetaPill>
                      <MetaPill>{p.level}</MetaPill>
                      <MetaPill>{p.type}</MetaPill>
                    </div>
                    <p className="text-base leading-relaxed text-zinc-600 md:col-start-1 md:row-start-3 dark:text-zinc-400">
                      <span className="font-medium text-zinc-800 dark:text-zinc-200">
                        Địa điểm ·{" "}
                      </span>
                      {d.location}
                    </p>
                    <SalaryHighlight salary={p.salary} />
                    <p className="max-w-[62ch] text-base leading-relaxed text-zinc-600 md:col-start-1 md:row-start-4 md:text-lg dark:text-zinc-400">
                      {p.brief}
                    </p>

                    {isOpen ? (
                      <div className="space-y-5 border-t border-zinc-200/90 pt-5 md:col-span-2 dark:border-white/[0.08]">
                        <section className="space-y-2">
                          <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-500">
                            Sứ mệnh của bạn
                          </h4>
                          <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                            {d.mission}
                          </p>
                        </section>
                        <DetailList title="Mô tả công việc" items={d.responsibilities} />
                        {d.requirements && d.requirements.length > 0 ? (
                          <DetailList title="Yêu cầu ứng viên" items={d.requirements} />
                        ) : null}
                        {d.benefits && d.benefits.length > 0 ? (
                          <DetailList title="Quyền lợi hấp dẫn" items={d.benefits} />
                        ) : null}
                      </div>
                    ) : null}

                    <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:col-start-1">
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded((cur) => (cur === p.title ? null : p.title))
                        }
                        aria-expanded={isOpen}
                        className="inline-flex w-full min-h-11 items-center justify-center rounded-full border border-zinc-300/95 bg-zinc-100/80 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-zinc-400/95 hover:bg-zinc-200/70 active:scale-[0.98] sm:w-auto sm:justify-start dark:border-white/14 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-white/22 dark:hover:bg-zinc-800/55"
                      >
                        {isOpen ? "Thu gọn" : "Xem chi tiết"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setCvModal(p)}
                        className="group relative inline-flex w-full min-h-[3rem] items-center justify-center gap-3 overflow-hidden rounded-full border border-teal-900/20 bg-teal-800 px-6 py-3 text-sm font-bold tracking-tight text-white shadow-[0_12px_36px_-12px_rgba(15,118,110,0.55),inset_0_1px_0_rgba(255,255,255,0.22)] transition-[transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] before:pointer-events-none before:absolute before:inset-0 before:bg-linear-to-t before:from-transparent before:to-white/10 hover:border-teal-800/30 hover:bg-teal-700 hover:shadow-[0_16px_44px_-14px_rgba(15,118,110,0.6),inset_0_1px_0_rgba(255,255,255,0.28)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 sm:w-auto sm:justify-start sm:pl-6 sm:pr-2 sm:py-2.5 dark:border-cyan-300/25 dark:bg-cyan-500 dark:text-teal-950 dark:shadow-[0_14px_40px_-12px_rgba(34,211,238,0.45),inset_0_1px_0_rgba(255,255,255,0.35)] dark:before:to-white/25 dark:hover:bg-cyan-400 dark:hover:shadow-[0_18px_48px_-14px_rgba(34,211,238,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] dark:focus-visible:ring-cyan-400/55 dark:focus-visible:ring-offset-zinc-950"
                      >
                        <span className="relative z-[1] text-white dark:text-teal-950">
                          Ứng tuyển
                        </span>
                        <span
                          className="relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 font-mono text-sm text-white transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:bg-white/30 dark:bg-teal-900/45 dark:text-cyan-50 dark:group-hover:bg-teal-900/55"
                          aria-hidden
                        >
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </motion.li>
          );
        })}
      </motion.ul>

      <CareersCvModal
        open={cvModal !== null}
        onClose={() => setCvModal(null)}
        jobTitle={cvModal?.title ?? ""}
        cvEmail={cvModal?.detail.apply.cvEmail ?? ""}
        subjectLine={cvModal?.detail.apply.subjectLine ?? ""}
        contact={cvModal?.detail.apply.contact}
        documents={cvModal?.detail.documents}
      />
    </>
  );
}

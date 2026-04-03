"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 280, damping: 34 };

export type CareerPosition = {
  title: string;
  dept: string;
  level: string;
  type: string;
  salary: string;
  brief: string;
};

function MetaPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-zinc-300/85 bg-zinc-100/70 px-2.5 py-1 text-[11px] font-medium text-zinc-800 dark:border-white/14 dark:bg-white/[0.07] dark:text-zinc-200">
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

/** Stabilized “metric plate” for compensation — accent reserved for this + CTA (glass-ui discipline). */
function SalaryHighlight({ salary }: { salary: string }) {
  return (
    <aside
      aria-label={`Mức lương: ${salary}`}
      className="w-full md:col-span-1 md:col-start-2 md:row-span-4 md:row-start-1"
    >
      <div className="rounded-2xl bg-teal-800/18 p-1 ring-1 ring-teal-800/40 dark:bg-cyan-400/8 dark:ring-cyan-400/22">
        <div className="rounded-[calc(1rem-4px)] border-2 border-teal-800/35 bg-teal-50/90 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.98),inset_0_-1px_0_rgba(15,118,110,0.12)] dark:border-2 dark:border-cyan-400/15 dark:bg-zinc-950/94 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(34,211,238,0.08)]">
          <div
            className="pointer-events-none mb-3 h-px w-full bg-gradient-to-r from-teal-700 via-teal-600/70 to-teal-600/25 dark:from-cyan-400/50 dark:via-cyan-400/22 dark:to-transparent"
            aria-hidden
          />
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-900 dark:text-cyan-200/85">
            Mức lương
          </p>
          <p className="mt-2 font-mono text-base font-semibold leading-snug tracking-tight text-teal-950 tabular-nums md:text-lg dark:text-cyan-50">
            {salary}
          </p>
        </div>
      </div>
    </aside>
  );
}

export function CareersOpenRoles({ positions }: { positions: CareerPosition[] }) {
  const reduce = useReducedMotion();

  return (
    <motion.ul
      className="flex flex-col gap-4 md:gap-5"
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
      {positions.map((p, index) => {
        const { bar, hoverBorder } = deptAccent(p.dept);
        const zebra = index % 2 === 1;

        return (
          <motion.li
            key={p.title}
            variants={{
              hidden: { opacity: 0, x: reduce ? 0 : -16 },
              show: { opacity: 1, x: 0, transition: spring },
            }}
          >
            <article
              className={`relative overflow-hidden rounded-[1.5rem] border border-zinc-300/95 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_0_rgba(0,0,0,0.04)] transition-[border-color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:translate-y-px dark:border-white/[0.07] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${hoverBorder} ${
                zebra
                  ? "bg-white dark:bg-zinc-900/45"
                  : "bg-zinc-50 dark:bg-zinc-950/25"
              }`}
            >
              <div className={`pointer-events-none absolute inset-y-3 left-0 w-px ${bar}`} aria-hidden />
              <div className="border-l border-transparent py-6 pl-5 pr-5 md:py-8 md:pl-8 md:pr-8">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,1fr)_min(17.5rem,36%)] md:gap-x-8 md:gap-y-4 md:items-start">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-900 md:col-start-1 md:row-start-1 md:text-xl dark:text-zinc-50">
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:col-start-1 md:row-start-2">
                    <MetaPill>{p.dept}</MetaPill>
                    <MetaPill>{p.level}</MetaPill>
                    <MetaPill>{p.type}</MetaPill>
                  </div>
                  <SalaryHighlight salary={p.salary} />
                  <p className="max-w-[62ch] text-sm leading-relaxed text-zinc-600 md:col-start-1 md:row-start-3 md:text-base dark:text-zinc-400">
                    {p.brief}
                  </p>
                  <div className="md:col-start-1 md:row-start-4">
                    <Link
                      href={`/lien-he?vi-tri=${encodeURIComponent(p.title)}#lien-he-form`}
                      className="group inline-flex items-center gap-2.5 rounded-full border border-teal-800/45 bg-teal-800/10 px-5 py-2.5 text-sm font-semibold text-teal-950 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-teal-700/55 hover:bg-teal-800/16 active:scale-[0.98] dark:border-cyan-400/40 dark:bg-cyan-400/10 dark:text-cyan-50 dark:hover:border-cyan-300/50 dark:hover:bg-cyan-400/14"
                    >
                      Ứng tuyển
                      <span
                        className="font-mono text-xs transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5"
                        aria-hidden
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

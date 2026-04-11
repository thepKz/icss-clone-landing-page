"use client";

import type { ReactNode } from "react";
import { Check, Minus } from "@phosphor-icons/react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

type PlatformRow = {
  feature: string;
  gurucul: string;
  otherNgsiem: string;
  legacy: string;
};

export type PlatformData = {
  title: string;
  subtitle: string;
  columns: readonly [string, string, string, string];
  rows: readonly PlatformRow[];
};

type CompetitorRow = {
  criterion: string;
  gurucul: string;
  competitor: string;
};

export type CompetitorData = {
  title: string;
  subtitle: string;
  columns: readonly [string, string, string];
  rows: readonly CompetitorRow[];
};

const easeOut = [0.32, 0.72, 0, 1] as const;

const rowContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0.08 },
  },
};

const rowItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 380, damping: 28 },
  },
};

const rowItemReduced: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, ease: easeOut } },
};

const headerReduced: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25, ease: easeOut } },
};

const headerBlock: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 32, delay: 0.02 },
  },
};

function CompareStatusPill({ value }: { value: string }) {
  const v = value.trim();
  const kind = v === "Có" ? "yes" : v === "Không" ? "no" : "partial";
  const shell =
    kind === "yes"
      ? "border-teal-600/50 bg-teal-600/[0.22] text-teal-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] dark:border-cyan-400/45 dark:bg-cyan-400/[0.22] dark:text-cyan-50 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
      : kind === "no"
        ? "border-rose-600/30 bg-rose-600/[0.08] text-rose-950 dark:border-rose-400/25 dark:bg-rose-400/[0.08] dark:text-rose-100"
        : "border-amber-600/35 bg-amber-600/[0.12] text-amber-950 dark:border-amber-400/28 dark:bg-amber-400/[0.12] dark:text-amber-100";

  return (
    <motion.span
      className={`inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full border px-3.5 py-1.5 text-center text-xs font-semibold leading-tight tracking-wide ${shell}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 500, damping: 26 }}
    >
      {kind === "yes" ? (
        <Check className="h-4 w-4 shrink-0 opacity-90" weight="bold" aria-hidden />
      ) : (
        <Minus className="h-4 w-4 shrink-0 opacity-80" weight="bold" aria-hidden />
      )}
      <span className={kind === "yes" ? "font-bold" : ""}>{v}</span>
    </motion.span>
  );
}

const tableShell =
  "overflow-x-auto rounded-2xl border border-zinc-200/90 bg-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] dark:border-white/8 dark:bg-zinc-950/50 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]";

const thBase =
  "px-4 py-3.5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-400";

const tdFeature =
  "px-4 py-4 align-middle text-sm font-semibold leading-snug text-zinc-900 dark:text-zinc-100";

const tdCell = "px-3 py-3.5 align-middle text-center";

/** Viền + nền cột Gurucul; shimmer chỉ dùng transform. */
function GuruculColumnShell({
  children,
  className,
  reduceMotion,
}: {
  children: ReactNode;
  className?: string;
  reduceMotion: boolean | null;
}) {
  return (
    <td
      className={`${tdCell} relative overflow-hidden border-x-2 border-teal-600/45 bg-gradient-to-b from-teal-600/[0.14] via-teal-600/[0.08] to-teal-600/[0.12] dark:border-cyan-400/50 dark:from-cyan-400/[0.16] dark:via-cyan-400/[0.08] dark:to-cyan-400/[0.14] ${className ?? ""}`}
    >
      {!reduceMotion ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-[55%] w-[55%] skew-x-[-12deg] bg-gradient-to-r from-transparent via-white/35 to-transparent dark:via-cyan-200/18"
          initial={false}
          animate={{ x: ["0%", "320%"] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1.1,
          }}
        />
      ) : null}
      <div className="relative z-10 flex justify-center">{children}</div>
    </td>
  );
}

function GuruculHeaderCell({
  children,
  reduceMotion,
}: {
  children: ReactNode;
  reduceMotion: boolean | null;
}) {
  return (
    <th
      scope="col"
      className={`${thBase} relative overflow-hidden border-x-2 border-teal-600/50 bg-gradient-to-b from-teal-600/[0.2] via-teal-600/[0.12] to-teal-700/[0.16] text-teal-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] dark:border-cyan-400/55 dark:from-cyan-400/[0.22] dark:via-cyan-400/[0.12] dark:to-teal-950/30 dark:text-cyan-50 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`}
    >
      {!reduceMotion ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-[50%] w-1/2 skew-x-[-10deg] bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-cyan-200/22"
          animate={{ x: ["0%", "280%"] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0.9,
          }}
        />
      ) : null}
      {!reduceMotion ? (
        <motion.span
          className="relative z-10 inline-block"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: easeOut }}
        >
          {children}
        </motion.span>
      ) : (
        <span className="relative z-10">{children}</span>
      )}
    </th>
  );
}

export function AiSocPlatformMatrix({ data }: { data: PlatformData }) {
  const reduceMotion = useReducedMotion();
  const [c0, c1, c2, c3] = data.columns;

  return (
    <div>
      <motion.header
        className="mx-auto max-w-3xl text-center"
        variants={reduceMotion ? headerReduced : headerBlock}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {data.title}
        </h2>
        <p className="mt-3 text-sm font-semibold text-teal-800 dark:text-cyan-200/95">
          {data.subtitle}
        </p>
        <p className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-teal-700/30 bg-teal-800/[0.08] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-teal-950 dark:border-cyan-400/35 dark:bg-cyan-400/[0.12] dark:text-cyan-100">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-cyan-300"
            aria-hidden
          />
          Cột nhấn: {c1}
        </p>
      </motion.header>

      <motion.div
        className={`${tableShell} relative mt-10`}
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={
          reduceMotion
            ? { duration: 0.25, ease: easeOut }
            : { type: "spring", stiffness: 220, damping: 30, delay: 0.06 }
        }
      >
        <table className="w-full min-w-[760px] border-collapse text-left">
          <caption className="sr-only">
            {data.title}: {c0}, {c1}, {c2}, {c3}
          </caption>
          <thead>
            <tr className="border-b border-zinc-200/90 bg-zinc-100/90 dark:border-white/8 dark:bg-zinc-900/70">
              <th scope="col" className={`${thBase} w-[32%] text-left text-zinc-700 dark:text-zinc-300`}>
                {c0}
              </th>
              <GuruculHeaderCell reduceMotion={reduceMotion}>{c1}</GuruculHeaderCell>
              <th scope="col" className={`${thBase} bg-amber-600/6 text-amber-950 dark:bg-amber-400/8 dark:text-amber-50`}>
                {c2}
              </th>
              <th scope="col" className={`${thBase} bg-rose-700/6 text-rose-950 dark:bg-rose-400/8 dark:text-rose-50`}>
                {c3}
              </th>
            </tr>
          </thead>
          <motion.tbody
            variants={rowContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-24px" }}
          >
            {data.rows.map((row, i) => (
              <motion.tr
                key={row.feature}
                variants={reduceMotion ? rowItemReduced : rowItem}
                className={
                  i % 2 === 0
                    ? "border-b border-zinc-200/70 bg-white/80 dark:border-white/5 dark:bg-zinc-950/30"
                    : "border-b border-zinc-200/70 bg-zinc-50/80 dark:border-white/5 dark:bg-zinc-900/25"
                }
              >
                <td className={tdFeature}>{row.feature}</td>
                <GuruculColumnShell reduceMotion={reduceMotion}>
                  <CompareStatusPill value={row.gurucul} />
                </GuruculColumnShell>
                <td className={`${tdCell} bg-amber-600/3 dark:bg-amber-400/4`}>
                  <div className="flex justify-center">
                    <CompareStatusPill value={row.otherNgsiem} />
                  </div>
                </td>
                <td className={`${tdCell} bg-rose-700/3 dark:bg-rose-400/4`}>
                  <div className="flex justify-center">
                    <CompareStatusPill value={row.legacy} />
                  </div>
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </motion.div>
    </div>
  );
}

function CompetitorGuruculCell({
  children,
  reduceMotion,
}: {
  children: ReactNode;
  reduceMotion: boolean | null;
}) {
  return (
    <td
      className={`${tdCell} relative overflow-hidden border-x-2 border-teal-600/45 bg-gradient-to-b from-teal-600/[0.12] via-teal-600/[0.06] to-teal-600/[0.1] align-top text-left dark:border-cyan-400/50 dark:from-cyan-400/[0.14] dark:via-cyan-400/[0.07] dark:to-cyan-400/[0.12]`}
    >
      {!reduceMotion ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-[60%] w-[60%] skew-x-[-10deg] bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-cyan-200/14"
          animate={{ x: ["0%", "300%"] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1.3,
          }}
        />
      ) : null}
      <div className="relative z-10 px-1">{children}</div>
    </td>
  );
}

export function AiSocCompetitorMatrix({ data }: { data: CompetitorData }) {
  const reduceMotion = useReducedMotion();
  const [h0, h1, h2] = data.columns;

  return (
    <div className="mt-20 border-t border-zinc-200/80 pt-16 dark:border-white/6">
      <motion.header
        className="mx-auto max-w-3xl text-center"
        variants={reduceMotion ? headerReduced : headerBlock}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">{data.title}</h3>
        <p className="mt-2 text-sm text-muted">{data.subtitle}</p>
        <p className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-teal-700/30 bg-teal-800/[0.08] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-teal-950 dark:border-cyan-400/35 dark:bg-cyan-400/[0.12] dark:text-cyan-100">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-cyan-300" aria-hidden />
          Cột nhấn: {h1}
        </p>
      </motion.header>

      <motion.div
        className={`${tableShell} mt-10`}
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
        whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-32px" }}
        transition={
          reduceMotion
            ? { duration: 0.25, ease: easeOut }
            : { type: "spring", stiffness: 200, damping: 28 }
        }
      >
        <table className="w-full min-w-[640px] border-collapse text-left">
          <caption className="sr-only">
            {data.title}: {h0}, {h1}, {h2}
          </caption>
          <thead>
            <tr className="border-b border-zinc-200/90 bg-zinc-100/90 dark:border-white/8 dark:bg-zinc-900/70">
              <th scope="col" className={`${thBase} w-[34%] text-left text-zinc-700 dark:text-zinc-300`}>
                {h0}
              </th>
              <GuruculHeaderCell reduceMotion={reduceMotion}>{h1}</GuruculHeaderCell>
              <th scope="col" className={`${thBase} text-zinc-700 dark:text-zinc-300`}>
                {h2}
              </th>
            </tr>
          </thead>
          <motion.tbody
            variants={rowContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-24px" }}
          >
            {data.rows.map((row, i) => (
              <motion.tr
                key={row.criterion}
                variants={reduceMotion ? rowItemReduced : rowItem}
                className={
                  i % 2 === 0
                    ? "border-b border-zinc-200/70 bg-white/80 dark:border-white/5 dark:bg-zinc-950/30"
                    : "border-b border-zinc-200/70 bg-zinc-50/80 dark:border-white/5 dark:bg-zinc-900/25"
                }
              >
                <td className={tdFeature}>{row.criterion}</td>
                <CompetitorGuruculCell reduceMotion={reduceMotion}>
                  <p className="mx-auto max-w-[42ch] text-sm font-semibold leading-relaxed text-zinc-900 dark:text-zinc-100">
                    {row.gurucul}
                  </p>
                </CompetitorGuruculCell>
                <td className={`${tdCell} align-top text-left`}>
                  <p className="mx-auto max-w-[42ch] text-sm leading-relaxed text-muted">{row.competitor}</p>
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </motion.div>
    </div>
  );
}

"use client";

import { Cpu, TrendUp, UsersThree } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 260, damping: 32 };

const icons = [Cpu, TrendUp, UsersThree] as const;

type Reason = { title: string; body: string };

type TileTheme = {
  outer: string;
  inner: string;
  orb: string;
  bar: string;
  indexPill: string;
  iconWrap: string;
  iconGlow: string;
};

/**
 * Light: zinc frame + teal accents.
 * Dark: một họ màu (zinc + cyan ICS) — không tím/vàng; nền gần solid để chữ ổn định.
 */
const darkShell =
  "dark:bg-zinc-900/75 dark:ring-1 dark:ring-white/12 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]";
const darkPlate =
  "dark:border-white/10 dark:bg-zinc-950 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]";

const themes: TileTheme[] = [
  {
    outer: `bg-zinc-200/80 ring-1 ring-zinc-400/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] ${darkShell}`,
    inner: `border-zinc-200 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,1),0_14px_40px_-32px_rgba(15,118,110,0.14)] ${darkPlate}`,
    orb: "bg-teal-600/10 opacity-50 dark:bg-cyan-400/12 dark:opacity-[0.28]",
    bar: "bg-gradient-to-b from-teal-600 from-40% via-teal-500/50 to-transparent dark:from-cyan-400/95 dark:via-cyan-500/35 dark:to-transparent",
    indexPill:
      "border-zinc-300 bg-zinc-100 text-zinc-800 dark:border-cyan-400/40 dark:bg-cyan-400/10 dark:text-cyan-100",
    iconWrap:
      "border-teal-700/45 bg-teal-50 text-teal-900 group-hover:border-teal-700 group-hover:bg-teal-100 dark:border-cyan-400/35 dark:bg-cyan-400/[0.12] dark:text-cyan-200 dark:group-hover:border-cyan-300/55 dark:group-hover:bg-cyan-400/[0.16]",
    iconGlow: "bg-teal-500/20 dark:bg-cyan-400/15",
  },
  {
    outer: `bg-zinc-200/80 ring-1 ring-zinc-400/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] ${darkShell}`,
    inner: `border-zinc-200 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,1),0_14px_40px_-32px_rgba(24,24,27,0.1)] ${darkPlate}`,
    orb: "bg-zinc-500/12 opacity-60 dark:bg-white/[0.04] dark:opacity-40",
    bar: "bg-gradient-to-b from-zinc-500 from-35% via-zinc-400/45 to-transparent dark:from-zinc-400/90 dark:via-zinc-500/45 dark:to-transparent",
    indexPill:
      "border-zinc-300 bg-zinc-100 text-zinc-800 dark:border-white/14 dark:bg-white/[0.06] dark:text-zinc-200",
    iconWrap:
      "border-zinc-400 bg-zinc-100 text-zinc-800 group-hover:border-zinc-500 group-hover:bg-zinc-200/80 dark:border-zinc-600 dark:bg-zinc-900/90 dark:text-zinc-200 dark:group-hover:border-zinc-500 dark:group-hover:bg-zinc-800/80",
    iconGlow: "bg-zinc-400/25 dark:bg-white/10",
  },
  {
    outer: `bg-zinc-200/80 ring-1 ring-zinc-400/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] ${darkShell}`,
    inner: `border-zinc-200 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,1),0_14px_40px_-32px_rgba(15,118,110,0.1)] ${darkPlate}`,
    orb: "bg-teal-700/8 opacity-55 dark:bg-cyan-500/8 dark:opacity-30",
    bar: "bg-gradient-to-b from-teal-800 from-35% via-teal-700/45 to-transparent dark:from-cyan-500/80 dark:via-cyan-600/30 dark:to-transparent",
    indexPill:
      "border-zinc-300 bg-zinc-100 text-zinc-800 dark:border-cyan-400/30 dark:bg-white/[0.05] dark:text-zinc-200",
    iconWrap:
      "border-teal-800/40 bg-teal-50 text-teal-950 group-hover:border-teal-800 group-hover:bg-teal-100 dark:border-cyan-400/28 dark:bg-cyan-950/60 dark:text-cyan-200 dark:group-hover:border-cyan-400/45 dark:group-hover:bg-cyan-950/90",
    iconGlow: "bg-teal-600/18 dark:bg-cyan-400/12",
  },
];

type TileLayout = {
  reason: Reason;
  idx: number;
  /** 12-col placement + stacking */
  grid: string;
  /** translate + rotate — md+ only */
  offset: string;
  outerRadius: string;
  innerRadius: string;
};

export function CareersReasonsBento({ reasons }: { reasons: Reason[] }) {
  const reduce = useReducedMotion();
  const [a, b, c] = reasons;
  if (!a || !b || !c) return null;

  const tiles: TileLayout[] = [
    {
      reason: a,
      idx: 0,
      grid: "relative z-10 max-md:min-h-[15rem] md:col-span-7 md:row-span-2 md:row-start-1",
      offset: "md:origin-[12%_88%] md:-translate-y-1 md:-rotate-[0.45deg]",
      outerRadius: "rounded-[2rem]",
      innerRadius: "rounded-[calc(2rem-6px)]",
    },
    {
      reason: b,
      idx: 1,
      grid: "relative z-20 md:col-span-5 md:col-start-8 md:row-start-1",
      offset: "md:origin-top-right md:translate-x-2 md:-translate-y-2 md:rotate-[1deg]",
      outerRadius: "rounded-[1.65rem]",
      innerRadius: "rounded-[calc(1.65rem-6px)]",
    },
    {
      reason: c,
      idx: 2,
      /** Narrower + indented → intentional gap column on row 2 */
      grid: "relative z-20 md:col-span-4 md:col-start-9 md:row-start-2",
      offset: "md:origin-bottom-right md:-translate-x-3 md:translate-y-4 md:-rotate-[0.75deg]",
      outerRadius: "rounded-[1.35rem]",
      innerRadius: "rounded-[calc(1.35rem-6px)]",
    },
  ];

  return (
    <motion.ul
      className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-x-5 md:gap-y-10 md:pb-6"
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.04 },
        },
      }}
    >
      {tiles.map(({ reason, idx, grid, offset, outerRadius, innerRadius }) => {
        const Icon = icons[idx] ?? Cpu;
        const large = idx === 0;
        const th = themes[idx] ?? themes[0];

        return (
          <motion.li
            key={reason.title}
            variants={{
              hidden: { opacity: 0, y: reduce ? 0 : 22 },
              show: {
                opacity: 1,
                y: 0,
                transition: spring,
              },
            }}
            className={`group will-change-transform ${grid} ${offset}`}
          >
            <motion.div
              className={`${outerRadius} p-1.5 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${th.outer} hover:shadow-[0_22px_48px_-36px_rgba(15,118,110,0.2)] dark:hover:shadow-[0_28px_64px_-48px_rgba(34,211,238,0.09)]`}
              whileHover={reduce ? undefined : { scale: 1.012 }}
              transition={spring}
            >
              <div
                className={`relative h-full overflow-hidden border transition-[border-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${innerRadius} ${th.inner} group-hover:border-opacity-90`}
              >
                {/* Ambient orb — large tile gets a bigger glow */}
                <div
                  className={`pointer-events-none absolute rounded-full blur-3xl ${th.orb} ${
                    large
                      ? "-right-24 -top-28 h-[min(72%,22rem)] w-[min(72%,22rem)] opacity-[0.55] md:-right-32 md:-top-36 dark:opacity-40"
                      : "-right-16 -top-20 h-48 w-48 opacity-45 dark:opacity-35"
                  }`}
                  aria-hidden
                />

                {/* Hairline accent rail */}
                <div
                  className={`pointer-events-none absolute bottom-6 left-0 top-6 w-px ${th.bar}`}
                  aria-hidden
                />

                <div
                  className={`relative flex h-full flex-col justify-between border-l border-transparent ${
                    large ? "p-7 pl-6 md:p-10 md:pl-8 lg:p-12 lg:pl-10" : "p-7 pl-6 md:p-8 md:pl-7"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className="relative shrink-0">
                      <div
                        className={`pointer-events-none absolute inset-0 scale-125 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 ${th.iconGlow}`}
                        aria-hidden
                      />
                      <div
                        className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border transition-[transform,border-color,background-color,color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-0.5 group-hover:scale-[1.03] md:h-[3.25rem] md:w-[3.25rem] ${th.iconWrap}`}
                        aria-hidden
                      >
                        <Icon className="h-6 w-6 md:h-7 md:w-7" weight="duotone" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400 ${th.indexPill}`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className={`mt-4 font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 ${
                          large ? "text-xl md:text-2xl lg:text-[1.65rem]" : "text-lg md:text-xl"
                        }`}
                      >
                        {reason.title}
                      </h3>
                    </div>
                  </div>
                  <p
                    className={`relative mt-8 max-w-[52ch] leading-relaxed text-zinc-600 dark:text-zinc-400 ${
                      large ? "text-base md:text-[1.05rem]" : "text-sm md:text-base"
                    }`}
                  >
                    {reason.body}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

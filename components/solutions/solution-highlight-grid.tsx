"use client";

import { motion, useReducedMotion } from "framer-motion";

export type SolutionHighlightFeature = {
  id: string;
  index: string;
  title: string;
  body: string;
  benefit: string;
};

const cardEase = [0.32, 0.72, 0, 1] as const;

export type SolutionHighlightAccent = "teal" | "gold";

type SolutionHighlightGridProps = {
  features: readonly SolutionHighlightFeature[];
  /** Mặc định teal (ICS); `gold` cho trang ESG và highlight vàng. */
  accent?: SolutionHighlightAccent;
};

function accentSkin(accent: SolutionHighlightAccent) {
  if (accent === "gold") {
    return {
      articleHover:
        "hover:shadow-[0_28px_72px_-28px_rgba(180,83,9,0.2)] dark:hover:shadow-[0_36px_90px_-36px_rgba(251,191,36,0.14)]",
      ringIdle:
        "from-zinc-400/50 via-zinc-300/35 to-zinc-200/25 dark:from-white/12 dark:via-white/6 dark:to-transparent",
      ringHover:
        "group-hover:from-amber-600/55 group-hover:via-amber-500/35 group-hover:to-yellow-500/22 dark:group-hover:from-amber-400/40 dark:group-hover:via-amber-400/22 dark:group-hover:to-yellow-500/12",
      ringFocus:
        "group-focus-within:from-amber-600/55 group-focus-within:via-amber-500/35 group-focus-within:to-yellow-500/22 dark:group-focus-within:from-amber-400/40 dark:group-focus-within:via-amber-400/22 dark:group-focus-within:to-yellow-500/12",
      plateHover:
        "group-hover:border-amber-700/45 group-hover:bg-amber-50/75 dark:group-hover:border-amber-400/35 dark:group-hover:bg-zinc-900",
      headBorder:
        "border-zinc-300/90 group-hover:border-amber-800/30 dark:border-white/10 dark:group-hover:border-amber-400/30",
      index: "text-amber-900 dark:text-amber-300",
      dot: "bg-amber-700 dark:bg-amber-400/80 dark:group-hover:bg-amber-300",
      dotHover: "group-hover:bg-amber-800",
      benefitBox:
        "border-zinc-300/90 bg-zinc-100 group-hover:border-amber-700/40 group-hover:bg-amber-50/95 dark:border-white/12 dark:bg-white/[0.055] dark:group-hover:border-amber-400/28 dark:group-hover:bg-amber-950/25",
      benefitLabel: "text-amber-950 dark:text-amber-200",
    };
  }
  return {
    articleHover:
      "hover:shadow-[0_28px_72px_-28px_rgba(15,118,110,0.22)] dark:hover:shadow-[0_36px_90px_-36px_rgba(45,212,191,0.22)]",
    ringIdle:
      "from-zinc-400/50 via-zinc-300/35 to-zinc-200/25 dark:from-white/12 dark:via-white/6 dark:to-transparent",
    ringHover:
      "group-hover:from-teal-700/45 group-hover:via-teal-600/30 group-hover:to-teal-500/20 dark:group-hover:from-cyan-400/45 dark:group-hover:via-teal-400/22 dark:group-hover:to-cyan-500/14",
    ringFocus:
      "group-focus-within:from-teal-700/45 group-focus-within:via-teal-600/30 group-focus-within:to-teal-500/20 dark:group-focus-within:from-cyan-400/45 dark:group-focus-within:via-teal-400/22 dark:group-focus-within:to-cyan-500/14",
    plateHover:
      "group-hover:border-teal-700/40 group-hover:bg-teal-50/65 dark:group-hover:border-cyan-400/28 dark:group-hover:bg-zinc-900",
    headBorder:
      "border-zinc-300/90 group-hover:border-teal-800/25 dark:border-white/10 dark:group-hover:border-cyan-400/25",
    index: "text-teal-900 dark:text-cyan-200",
    dot: "bg-teal-700/70 dark:bg-cyan-400/60",
    dotHover: "group-hover:bg-teal-700 dark:group-hover:bg-cyan-300",
    benefitBox:
      "border-zinc-300/90 bg-zinc-100 group-hover:border-teal-700/35 group-hover:bg-teal-50/90 dark:border-white/12 dark:bg-white/[0.055] dark:group-hover:border-cyan-400/25 dark:group-hover:bg-cyan-400/[0.07]",
    benefitLabel: "text-teal-950 dark:text-cyan-200",
  };
}

/**
 * Grid 2x2 feature + “Lợi ích” — contrast light mode mạnh; `accent="gold"` cho trang ESG.
 */
export function SolutionHighlightGrid({ features, accent = "teal" }: SolutionHighlightGridProps) {
  const reduce = useReducedMotion();
  const skin = accentSkin(accent);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
      {features.map((f, i) => (
        <motion.article
          key={f.id}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            delay: reduce ? 0 : i * 0.06,
            duration: 0.55,
            ease: cardEase,
          }}
          tabIndex={0}
          whileHover={
            reduce
              ? undefined
              : {
                  y: -4,
                  transition: { type: "spring", stiffness: 380, damping: 26 },
                }
          }
          whileTap={reduce ? undefined : { scale: 0.992 }}
          className={`group relative rounded-[2rem] p-px outline-none transition-shadow duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${skin.articleHover}`}
        >
          <div
            className={`rounded-[2rem] bg-gradient-to-br p-px transition-[background] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${skin.ringIdle} ${skin.ringHover} ${skin.ringFocus}`}
          >
            <div
              className={`relative h-full rounded-[calc(2rem-1px)] border border-zinc-300/95 bg-white px-7 py-9 shadow-[inset_0_1px_0_rgba(255,255,255,1)] transition-[border-color,background-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] dark:border-white/12 dark:bg-zinc-900/98 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:px-10 md:py-10 ${skin.plateHover}`}
            >
              <div
                className={`flex items-start justify-between gap-4 border-b pb-6 transition-colors duration-500 ${skin.headBorder}`}
              >
                <p className={`font-mono text-xs font-semibold uppercase tracking-[0.24em] ${skin.index}`}>
                  {f.index}
                </p>
                <span
                  className={`mt-0.5 h-2 w-2 shrink-0 rounded-sm transition-all duration-500 group-hover:scale-110 group-hover:rounded-full ${skin.dot} ${skin.dotHover}`}
                />
              </div>
              <h3 className="mt-6 text-[1.35rem] font-semibold leading-snug tracking-tight text-zinc-950 md:text-2xl md:leading-[1.22] dark:text-zinc-50">
                {f.title}
              </h3>
              <p className="mt-5 max-w-[58ch] text-base leading-[1.65] text-zinc-800 md:text-lg dark:text-zinc-300">
                {f.body}
              </p>
              <div
                className={`mt-8 rounded-2xl border px-5 py-5 transition-[border-color,background-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:mt-9 md:rounded-[1.35rem] md:px-6 md:py-6 ${skin.benefitBox}`}
              >
                <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${skin.benefitLabel}`}>
                  Lợi ích
                </p>
                <p className="mt-3 text-base leading-[1.65] text-zinc-950 md:text-lg dark:text-zinc-100">
                  {f.benefit}
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

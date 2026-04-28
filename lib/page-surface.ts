/**
 * Shared Tailwind fragments for inner/marketing pages so light and dark themes both read clearly.
 */

export const pageSurface = {
  edgeBottom: "border-b border-zinc-200/95 dark:border-white/[0.06]",
  edgeTop: "border-t border-zinc-200/95 dark:border-white/[0.06]",

  band: "bg-white dark:bg-zinc-900/25",
  bandSoft: "bg-white dark:bg-zinc-900/20",
  bandTop: "border-t border-zinc-200/95 dark:border-white/[0.06] bg-white dark:bg-zinc-900/25",
  bandTopSoft: "border-t border-zinc-200/95 dark:border-white/[0.06] bg-white dark:bg-zinc-900/20",

  imageFrame: "overflow-hidden rounded-[2rem] border border-zinc-200/90 dark:border-white/[0.07]",

  card: "rounded-2xl border border-zinc-200/90 bg-white/90 dark:border-white/[0.06] dark:bg-zinc-900/35",
  cardMuted: "rounded-2xl border border-zinc-200/90 bg-white dark:border-white/[0.06] dark:bg-zinc-950/50",
  cardSm: "rounded-xl border border-zinc-200/90 bg-white dark:border-white/[0.06] dark:bg-zinc-900/40",
  cardBrief: "rounded-xl border border-zinc-200/90 bg-white dark:border-white/[0.06] dark:bg-zinc-950/40",

  ctaPill:
    "inline-flex rounded-full border border-teal-800/50 bg-teal-800/[0.12] px-5 py-2.5 text-sm font-medium text-teal-950 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-teal-700/65 dark:border-cyan-400/35 dark:bg-cyan-400/10 dark:text-cyan-100 dark:hover:border-cyan-300/50",
  ctaPillLg:
    "inline-flex rounded-full border border-teal-800/50 bg-teal-800/[0.12] px-6 py-3 text-sm font-medium text-teal-950 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-teal-700/65 dark:border-cyan-400/35 dark:bg-cyan-400/10 dark:text-cyan-100 dark:hover:border-cyan-300/50",

  ghostOutline:
    "rounded-full border border-zinc-300/90 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-teal-700/45 hover:text-teal-900 dark:border-white/15 dark:text-zinc-300 dark:hover:border-cyan-400/30 dark:hover:text-cyan-100",

  linkAccent:
    "text-teal-800 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-teal-950 dark:text-cyan-200 dark:hover:text-cyan-100",

  subtitleAccent: "text-sm text-teal-800 dark:text-cyan-200/80",
  accentMark: "text-teal-700 dark:text-cyan-400/85",
  bulletDot: "bg-teal-600 dark:bg-cyan-400/80",

  tableWrap: "overflow-x-auto rounded-2xl border border-zinc-200/90 dark:border-white/[0.07]",
  tableHead:
    "border-b border-zinc-200/90 bg-white text-xs uppercase tracking-wider text-zinc-600 dark:border-white/10 dark:bg-zinc-900/50 dark:text-zinc-400",
  tableBodyDivide: "divide-y divide-zinc-200/90 dark:divide-white/[0.06]",

  timelineLine: "border-l border-zinc-300 dark:border-white/10",
  timelineDot:
    "bg-teal-600 ring-4 ring-zinc-100 dark:bg-cyan-400/80 dark:ring-zinc-950",

  articleCard:
    "group flex h-full flex-col overflow-hidden rounded-[2rem] border border-zinc-200/90 bg-white/90 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-[var(--ring-focus)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--background)] dark:border-white/[0.07] dark:bg-zinc-900/25",
} as const;

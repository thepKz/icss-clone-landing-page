/**
 * Editorial / glass-structured intro for the open roles section.
 * Light mode: khung zinc rõ, accent teal đậm — tránh “kính” mờ trên nền trắng.
 */
type CareersOpenRolesIntroProps = {
  count: number;
  title: string;
  description: string;
};

export function CareersOpenRolesIntro({
  count,
  title,
  description,
}: CareersOpenRolesIntroProps) {
  const n = String(count).padStart(2, "0");

  return (
    <div className="rounded-[1.65rem] bg-zinc-300/55 p-1.5 ring-1 ring-zinc-400/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] dark:bg-zinc-800/50 dark:ring-white/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:rounded-[2rem]">
      <div className="relative overflow-hidden rounded-[calc(1.65rem-6px)] border border-zinc-300 bg-white px-5 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_16px_48px_-36px_rgba(15,118,110,0.16)] sm:px-7 sm:py-8 md:rounded-[calc(2rem-6px)] md:px-10 md:py-10 dark:border-white/10 dark:bg-zinc-950/94 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_28px_64px_-48px_rgba(0,0,0,0.45)]">
        <div
          className="pointer-events-none absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-teal-600/10 blur-2xl dark:bg-cyan-400/10 sm:h-48 sm:w-48"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-teal-700 via-teal-600/70 to-teal-600/25 dark:w-px dark:from-cyan-400/45 dark:via-cyan-400/18 dark:to-transparent"
          aria-hidden
        />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="min-w-0 max-w-[62ch]">
            <div className="inline-flex items-center gap-3 rounded-full border border-zinc-300 bg-zinc-100 px-1.5 py-1.5 pl-2 pr-3 dark:border-white/12 dark:bg-zinc-900/70">
              <span className="rounded-full bg-teal-800 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white dark:bg-cyan-400/15 dark:text-cyan-100">
                Open roles
              </span>
              <span className="font-mono text-[11px] tabular-nums tracking-[0.14em] text-zinc-600 dark:text-zinc-400">
                <span className="text-zinc-400 dark:text-zinc-500">·</span>
                <span className="ml-2 text-base font-semibold tracking-tight text-teal-800 dark:text-cyan-300">
                  {n}
                </span>
                <span className="ml-1.5 text-[10px] font-medium uppercase text-zinc-500 dark:text-zinc-500">
                  vị trí
                </span>
              </span>
            </div>
            <h2 className="mt-6 text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-zinc-900 dark:text-zinc-50">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-[1.05rem] dark:text-zinc-400">
              {description}
            </p>
          </div>

          <div className="shrink-0 lg:max-w-[12rem] lg:text-right">
            <div className="rounded-2xl border border-teal-800/35 bg-teal-800/10 p-1 ring-1 ring-teal-800/30 dark:border-white/10 dark:bg-zinc-900/55 dark:ring-white/8">
              <div className="rounded-[calc(1rem-3px)] border border-teal-800/25 bg-teal-50 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-white/8 dark:bg-zinc-950/90 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-teal-900 dark:text-zinc-400">
                  Tổng mở
                </p>
                <p className="mt-1 font-mono text-3xl font-semibold tabular-nums tracking-tight text-teal-950 dark:text-cyan-200">
                  {n}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

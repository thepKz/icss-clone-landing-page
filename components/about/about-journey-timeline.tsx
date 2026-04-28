import { Reveal } from "@/components/reveal";

export type JourneyMilestone = {
  period: string;
  title: string;
  body: string;
};

export type AboutJourneyTimelineProps = {
  eyebrow: string;
  title: string;
  items: JourneyMilestone[];
};

/** Chuẩn hóa "M/YYYY" → datetime cho SEO / trợ năng đọc màn hình. */
function periodToDateTime(period: string): string | undefined {
  const m = period.trim().match(/^(\d{1,2})\/(\d{4})$/);
  if (!m) return undefined;
  const month = m[1].padStart(2, "0");
  return `${m[2]}-${month}`;
}

function MilestoneCard({
  item,
  isLatest,
}: {
  item: JourneyMilestone;
  isLatest: boolean;
}) {
  const dt = periodToDateTime(item.period);
  const shellTint = isLatest
    ? "bg-teal-100/50 ring-teal-800/20 dark:bg-teal-950/40 dark:ring-cyan-400/18"
    : "bg-zinc-200/75 ring-zinc-400/85 dark:bg-zinc-800/70 dark:ring-white/12";

  return (
    <div
      className={`group w-full max-w-xl rounded-[1.35rem] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] ring-1 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.99] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:shadow-[0_22px_50px_-38px_rgba(15,118,110,0.18)] dark:hover:shadow-[0_26px_58px_-42px_rgba(34,211,238,0.14)] ${shellTint}`}
    >
      <div className="relative rounded-[calc(1.35rem-6px)] border border-zinc-200/95 bg-white px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,1)] transition-[border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] dark:border-white/10 dark:bg-zinc-950 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] group-hover:border-teal-700/22 dark:group-hover:border-cyan-400/22 md:px-6 md:py-6">
        <div
          className="pointer-events-none absolute bottom-3 left-0 top-3 w-px bg-linear-to-b from-teal-600/85 via-teal-500/35 to-transparent dark:from-cyan-400/80 dark:via-cyan-500/30 dark:to-transparent"
          aria-hidden
        />
        <div className="pl-4">
          <time
            dateTime={dt}
            className="inline-flex rounded-full border border-teal-800/30 bg-teal-800/10 px-2.5 py-1 font-mono text-[11px] font-semibold tabular-nums tracking-wide text-teal-950 dark:border-cyan-400/35 dark:bg-cyan-400/10 dark:text-cyan-100 md:text-xs"
          >
            {item.period}
          </time>
          <h3 className="mt-3 text-base font-semibold tracking-tight text-foreground md:text-lg">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700 md:text-[15px] md:leading-relaxed dark:text-zinc-300">
            {item.body}
          </p>
          {isLatest ? (
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-teal-800 dark:text-cyan-300/85">
              Mốc gần nhất
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function AboutJourneyTimeline({ eyebrow, title, items }: AboutJourneyTimelineProps) {
  const last = items.length - 1;

  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
        <Reveal className="lg:col-span-8">
          <div className="rounded-3xl border border-zinc-200/95 bg-zinc-50/90 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-white/10 dark:bg-zinc-900/50 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:px-7 md:py-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 dark:text-cyan-300/90">
              {eyebrow}
            </p>
            <h2
              id="about-journey-heading"
              className="mt-3 max-w-[48ch] text-pretty text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
            >
              {title}
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.05} className="hidden lg:block lg:col-span-4 lg:pb-2">
          <aside className="ml-auto flex max-w-44 flex-col rounded-2xl border border-zinc-200/80 bg-white/75 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] dark:border-white/10 dark:bg-zinc-950/75 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              Quy mô câu chuyện
            </p>
            <p className="mt-2 text-2xl font-semibold tabular-nums tracking-tight text-teal-900 dark:text-cyan-200/95">
              {items.length}
            </p>
            <p className="mt-1 text-xs leading-snug text-zinc-600 dark:text-zinc-300">
              mốc đã công bố, sắp xếp theo thời gian
            </p>
          </aside>
        </Reveal>
      </div>

      <div className="relative mt-12 md:mt-16 lg:mt-20">
        {/* Trục dọc — desktop: giữa lưới zigzag */}
        <div
          className="pointer-events-none absolute bottom-6 left-[calc(50%-0.5px)] top-2 hidden w-px bg-linear-to-b from-teal-600/55 via-zinc-300/75 to-zinc-300/20 dark:from-cyan-400/45 dark:via-zinc-600/55 dark:to-zinc-700/30 lg:block"
          aria-hidden
        />

        <ol className="relative list-none space-y-10 border-l-2 border-zinc-200/90 pl-9 dark:border-white/10 lg:space-y-0 lg:border-0 lg:pl-0">
          {items.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const isLatest = idx === last;

            return (
              <li key={item.period + item.title} className="relative lg:pb-16 lg:last:pb-0">
                {/* Mobile / tablet: chấm trên trục */}
                <span
                  className="absolute left-[-1.6rem] top-2 h-3 w-3 shrink-0 rounded-full border-2 border-teal-700 bg-zinc-50 shadow-[0_0_0_3px_rgba(255,255,255,1)] dark:border-cyan-400 dark:bg-zinc-950 dark:shadow-[0_0_0_3px_rgba(9,9,11,1)] lg:hidden"
                  aria-hidden
                />

                <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_2.75rem_minmax(0,1fr)] lg:items-start">
                  {isLeft ? (
                    <>
                      <Reveal delay={0.04 * idx} className="flex justify-start lg:justify-end lg:pr-5">
                        <MilestoneCard item={item} isLatest={isLatest} />
                      </Reveal>
                      <div className="relative z-10 hidden lg:flex lg:justify-center lg:pt-3">
                        <span
                          className={`h-3.5 w-3.5 rounded-full border-2 bg-zinc-50 shadow-[0_0_0_4px_rgba(255,255,255,1)] dark:bg-zinc-950 dark:shadow-[0_0_0_4px_rgba(9,9,11,1)] ${isLatest ? "border-teal-600 dark:border-cyan-400" : "border-teal-700 dark:border-cyan-400/90"}`}
                          aria-hidden
                        />
                      </div>
                      <div className="hidden lg:block" aria-hidden />
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block" aria-hidden />
                      <div className="relative z-10 hidden lg:flex lg:justify-center lg:pt-3">
                        <span
                          className={`h-3.5 w-3.5 rounded-full border-2 bg-zinc-50 shadow-[0_0_0_4px_rgba(255,255,255,1)] dark:bg-zinc-950 dark:shadow-[0_0_0_4px_rgba(9,9,11,1)] ${isLatest ? "border-teal-600 dark:border-cyan-400" : "border-teal-700 dark:border-cyan-400/90"}`}
                          aria-hidden
                        />
                      </div>
                      <Reveal delay={0.04 * idx} className="flex justify-start lg:pl-5">
                        <MilestoneCard item={item} isLatest={isLatest} />
                      </Reveal>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

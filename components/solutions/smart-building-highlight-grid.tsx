"use client";

import { motion, useReducedMotion } from "framer-motion";

export type SmartBuildingFeatureRow = {
  id: string;
  index: string;
  title: string;
  bodyBullets: readonly string[];
  benefitBullets: readonly string[];
};

const ease = [0.32, 0.72, 0, 1] as const;

function BulletList({
  items,
  markerClass,
  textClass,
}: {
  items: readonly string[];
  markerClass: string;
  textClass: string;
}) {
  return (
    <ul className="list-none space-y-3.5">
      {items.map((line) => (
        <li key={line.slice(0, 48)} className="flex gap-3.5">
          <span
            className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${markerClass}`}
            aria-hidden
          />
          <span className={`min-w-0 text-base leading-[1.65] md:text-[1.0625rem] md:leading-[1.7] ${textClass}`}>
            {line}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function SmartBuildingHighlightGrid({
  features,
}: {
  features: readonly SmartBuildingFeatureRow[];
}) {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col">
      {features.map((f, i) => (
        <motion.article
          key={f.id}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: reduce ? 0 : i * 0.05, duration: 0.55, ease }}
          tabIndex={0}
          className="group relative border-t border-zinc-300/90 py-10 outline-none transition-colors duration-500 first:border-t-0 first:pt-2 md:py-12 dark:border-white/12"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
            aria-hidden
          >
            <div className="h-px w-full bg-linear-to-r from-transparent via-teal-600/50 to-transparent dark:via-cyan-400/40" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-8">
            <div className="flex flex-row items-start gap-4 lg:col-span-2 lg:flex-col lg:gap-5">
              <div
                className="hidden min-h-20 w-1 shrink-0 rounded-full bg-linear-to-b from-teal-700 via-teal-600 to-teal-500/50 lg:block dark:from-cyan-300 dark:via-cyan-400/90 dark:to-teal-500/40"
                aria-hidden
              />
              <p className="font-mono text-4xl font-semibold tabular-nums leading-none tracking-tight text-teal-900 sm:text-5xl dark:text-cyan-200 lg:text-6xl">
                {f.index}
              </p>
            </div>

            <div className="min-w-0 space-y-8 lg:col-span-10">
              <div>
                <h3 className="text-2xl font-semibold leading-snug tracking-tight text-zinc-950 md:text-[1.65rem] md:leading-tight lg:text-3xl dark:text-zinc-50">
                  {f.title}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">
                  Cách hoạt động
                </p>
                <div className="mt-5 max-w-[68ch]">
                  <BulletList
                    items={f.bodyBullets}
                    markerClass="bg-zinc-400 dark:bg-zinc-500"
                    textClass="text-zinc-800 dark:text-zinc-300"
                  />
                </div>
              </div>

              <div className="max-w-none rounded-2xl border border-zinc-300/95 bg-white px-5 py-6 transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:border-teal-700/40 group-hover:shadow-[0_20px_50px_-34px_rgba(15,118,110,0.2)] md:rounded-[1.35rem] md:px-7 md:py-7 dark:border-white/14 dark:bg-zinc-950/90 dark:group-hover:border-cyan-400/28">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-950 dark:text-cyan-200">
                  Lợi ích
                </p>
                <div className="mt-5 max-w-[68ch]">
                  <BulletList
                    items={f.benefitBullets}
                    markerClass="bg-teal-600 dark:bg-cyan-400/85"
                    textClass="text-zinc-900 dark:text-zinc-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

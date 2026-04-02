"use client";

import {
  Buildings,
  ChartLine,
  Clock,
  Medal,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";

type StatItem = {
  label: string;
  value: string;
  hint: string;
};

type HomeStatsBentoProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: StatItem[];
};

const icons = [Buildings, Clock, ChartLine, Medal] as const;

const springShow = { type: "spring" as const, stiffness: 120, damping: 22 };

export function HomeStatsBento({
  eyebrow,
  title,
  subtitle,
  items,
}: HomeStatsBentoProps) {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.06,
      },
    },
  } as const;

  const cell = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: springShow,
    },
  } as const;

  return (
    <motion.div
      className="relative"
      initial={reduce ? "visible" : "hidden"}
      animate={reduce ? "visible" : undefined}
      whileInView={reduce ? undefined : "visible"}
      viewport={
        reduce ? undefined : { once: true, margin: "-12% 0px", amount: 0.15 }
      }
      variants={container}
    >
      <div
        className="pointer-events-none absolute -left-4 top-1/2 hidden h-[min(70%,420px)] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-teal-700/35 to-transparent dark:via-teal-500/30 lg:block"
        aria-hidden
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:gap-x-5 lg:gap-y-5">
        <motion.header
          variants={cell}
          className="relative flex flex-col justify-center sm:col-span-2 lg:col-span-5 lg:row-span-2 lg:pr-4 lg:pb-4"
        >
          <span className="inline-flex w-fit items-center rounded-full border border-zinc-200/90 bg-zinc-50/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-400 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            {eyebrow}
          </span>
          <h2 className="mt-5 max-w-[16ch] text-pretty text-3xl font-semibold tracking-tight text-zinc-900 sm:max-w-none md:text-[2.15rem] md:leading-[1.12] dark:text-white">
            {title}
          </h2>
          <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
          <div
            className="mt-8 h-px w-full max-w-[12rem] bg-gradient-to-r from-teal-800/50 via-zinc-300/80 to-transparent dark:from-teal-500/40 dark:via-zinc-600/50 sm:max-w-xs"
            aria-hidden
          />
        </motion.header>

        {items.map((item, idx) => {
          const Icon = icons[idx] ?? Buildings;
          const isFirst = idx === 0;
          const isLast = idx === items.length - 1;
          const gridClass =
            idx === 0
              ? "sm:col-span-2 lg:col-span-3 lg:col-start-6 lg:row-start-1"
              : idx === 1
                ? "sm:col-span-1 lg:col-span-4 lg:col-start-9 lg:row-start-1"
                : idx === 2
                  ? "sm:col-span-1 lg:col-span-4 lg:col-start-6 lg:row-start-2"
                  : "sm:col-span-2 lg:col-span-3 lg:col-start-10 lg:row-start-2";

          return (
            <motion.article
              key={item.label}
              variants={cell}
              className={`group relative min-h-0 ${gridClass}`}
            >
              <div
                className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[1.35rem] p-5 shadow-[0_20px_50px_-38px_rgba(24,24,27,0.35)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] sm:min-h-[168px] sm:p-6 md:rounded-[1.5rem] md:p-7 dark:shadow-[0_24px_56px_-40px_rgba(0,0,0,0.65)] ${
                  isFirst
                    ? "bg-gradient-to-br from-teal-50/95 via-white to-zinc-50/90 ring-1 ring-teal-800/15 dark:from-teal-950/35 dark:via-zinc-900/70 dark:to-zinc-950/80 dark:ring-teal-500/20"
                    : isLast
                      ? "bg-zinc-50/95 ring-1 ring-zinc-300/80 sm:flex-row sm:items-end sm:justify-between sm:gap-6 lg:flex-col lg:items-stretch lg:justify-between dark:bg-zinc-900/40 dark:ring-white/[0.09]"
                      : "bg-white/90 ring-1 ring-zinc-200/90 dark:bg-zinc-900/55 dark:ring-white/[0.08]"
                } `}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(120% 80% at 100% 0%, rgba(19,78,74,0.06) 0%, transparent 55%)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" />

                <div className="relative flex items-start justify-between gap-3">
                  <p className="max-w-[20ch] text-[10px] font-semibold uppercase leading-snug tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                    {item.label}
                  </p>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-active:scale-[0.97] ${
                      isFirst
                        ? "border-teal-800/20 bg-teal-900/10 text-teal-900 dark:border-teal-400/25 dark:bg-teal-400/10 dark:text-teal-300"
                        : "border-zinc-200/80 bg-zinc-100/80 text-zinc-600 dark:border-white/10 dark:bg-zinc-800/60 dark:text-zinc-300"
                    }`}
                    aria-hidden
                  >
                    <Icon className="h-4 w-4" weight="regular" />
                  </span>
                </div>

                <div
                  className={`relative mt-5 sm:mt-6 ${isLast ? "sm:mt-0 sm:text-right lg:mt-6 lg:text-left" : ""}`}
                >
                  <p className="font-mono text-[1.85rem] font-semibold leading-none tracking-tight text-teal-900 tabular-nums sm:text-[2.05rem] md:text-[2.25rem] dark:text-teal-400">
                    {item.value}
                  </p>
                  <p
                    className={`mt-3 max-w-[32ch] text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 ${isLast ? "sm:ml-auto sm:max-w-[36ch] lg:ml-0" : ""}`}
                  >
                    {item.hint}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.div>
  );
}

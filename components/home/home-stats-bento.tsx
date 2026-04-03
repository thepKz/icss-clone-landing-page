"use client";

import {
  Buildings,
  ChartLine,
  Clock,
  Medal,
} from "@phosphor-icons/react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type StatItem = {
  label: string;
  value: string;
  hint: string;
};

type HomeStatsBentoProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  introSecondary: string;
  introMetaLine: string;
  items: StatItem[];
};

const icons = [Buildings, Clock, ChartLine, Medal] as const;

const springShow = { type: "spring" as const, stiffness: 120, damping: 22 };
const springHover = { type: "spring" as const, stiffness: 420, damping: 28 };

/** Thu nhỏ cỡ số so với trước; SLA (99,9%) nhẹ hơn một nhịp */
function valueSizeClass(idx: number, compact: boolean): string {
  if (compact) {
    if (idx === 2) return "text-[1.05rem] sm:text-[1.15rem]";
    if (idx === 3) return "text-[1.28rem] sm:text-[1.4rem]";
    return "text-[1.15rem] sm:text-[1.28rem]";
  }
  if (idx === 2) return "text-[1.45rem] sm:text-[1.55rem] md:text-[1.62rem]";
  if (idx === 3) return "text-[1.65rem] sm:text-[1.78rem] md:text-[1.92rem]";
  return "text-[1.55rem] sm:text-[1.68rem] md:text-[1.82rem]";
}

/** Giãn khoảng cách ký tự trong số — đặc biệt “99,9%” */
function valueTrackingClass(idx: number): string {
  if (idx === 2) {
    return "tracking-[0.055em] sm:tracking-[0.07em] md:tracking-[0.08em]";
  }
  return "tracking-[0.028em] sm:tracking-[0.038em]";
}

const fadeChild: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springShow,
  },
};

function tileVariants(stagger: number): Variants {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ...springShow,
        staggerChildren: stagger,
        delayChildren: 0.05,
      },
    },
  };
}

/** Cùng họ với card tin / editorial phía dưới trang chủ */
const cardShell =
  "border border-zinc-200/90 bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] shadow-sm dark:border-white/[0.07] dark:bg-zinc-900/25 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:shadow-none";

const iconShell =
  "flex shrink-0 items-center justify-center rounded-lg border border-zinc-300/80 bg-zinc-100/80 text-zinc-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-400";

const valueColor =
  "font-mono font-semibold leading-none text-zinc-900 tabular-nums dark:text-white";

function StatTile({
  item,
  idx,
  compact,
  gridClass,
  reduceMotion,
}: {
  item: StatItem;
  idx: number;
  compact: boolean;
  gridClass: string;
  reduceMotion: boolean;
}) {
  const Icon = icons[idx] ?? Buildings;
  const vSize = valueSizeClass(idx, compact);
  const track = valueTrackingClass(idx);
  const tileV = tileVariants(compact ? 0.06 : 0.07);

  const hoverProps = reduceMotion
    ? {}
    : {
        whileHover: { y: -3 },
        transition: springHover,
      };

  if (compact) {
    return (
      <motion.article
        variants={tileV}
        className={`group relative min-h-0 ${gridClass}`}
        {...hoverProps}
      >
        <div
          className={`relative flex h-full min-h-[112px] flex-col justify-between overflow-hidden rounded-xl p-3 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] sm:min-h-[120px] sm:rounded-xl sm:p-3.5 ${cardShell} group-hover:shadow-md dark:group-hover:shadow-[0_12px_40px_-24px_rgba(0,0,0,0.5)]`}
        >
          <div
            className="pointer-events-none absolute inset-0 block opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 dark:hidden"
            aria-hidden
            style={{
              background:
                "radial-gradient(100% 70% at 100% 0%, rgba(0,0,0,0.05) 0%, transparent 50%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 dark:block"
            aria-hidden
            style={{
              background:
                "radial-gradient(100% 70% at 100% 0%, rgba(255,255,255,0.06) 0%, transparent 50%)",
            }}
          />
          <motion.div
            variants={fadeChild}
            className="relative flex items-start justify-between gap-2"
          >
            <p className="line-clamp-3 text-[8px] font-semibold uppercase leading-snug tracking-[0.14em] text-zinc-500 sm:text-[8.5px] sm:tracking-[0.15em] dark:text-zinc-400">
              {item.label}
            </p>
            <span
              className={`${iconShell} h-6 w-6 rounded-md sm:h-7 sm:w-7`}
              aria-hidden
            >
              <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" weight="regular" />
            </span>
          </motion.div>
          <motion.div variants={fadeChild} className="relative mt-4">
            <p className={`${valueColor} ${vSize} ${track}`}>{item.value}</p>
            <p className="mt-3 max-w-[40ch] text-[10px] font-medium leading-[1.55] text-zinc-600 sm:text-[11px] sm:leading-relaxed dark:text-zinc-400">
              {item.hint}
            </p>
          </motion.div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      variants={tileV}
      className={`group relative min-h-0 ${gridClass}`}
      {...hoverProps}
    >
      <div
        className={`relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-4 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] sm:min-h-[148px] sm:p-5 md:min-h-[156px] md:rounded-2xl md:p-5 ${cardShell} group-hover:shadow-md dark:group-hover:shadow-[0_16px_48px_-28px_rgba(0,0,0,0.55)]`}
      >
        <div
          className="pointer-events-none absolute inset-0 block opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 dark:hidden"
          aria-hidden
          style={{
            background:
              "radial-gradient(120% 80% at 100% 0%, rgba(0,0,0,0.05) 0%, transparent 55%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 dark:block"
          aria-hidden
          style={{
            background:
              "radial-gradient(120% 80% at 100% 0%, rgba(255,255,255,0.06) 0%, transparent 55%)",
          }}
        />

        <motion.div
          variants={fadeChild}
          className="relative flex items-start justify-between gap-3"
        >
          <p className="max-w-[20ch] text-[9px] font-semibold uppercase leading-snug tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
            {item.label}
          </p>
          <span className={`${iconShell} h-7 w-7`} aria-hidden>
            <Icon className="h-3.5 w-3.5" weight="regular" />
          </span>
        </motion.div>

        <motion.div variants={fadeChild} className="relative mt-5 md:mt-5">
          <p className={`${valueColor} ${vSize} ${track}`}>{item.value}</p>
          <p className="mt-3 max-w-[34ch] text-xs font-medium leading-[1.55] text-zinc-600 md:text-[0.8125rem] md:leading-[1.6] dark:text-zinc-400">
            {item.hint}
          </p>
        </motion.div>
      </div>
    </motion.article>
  );
}

export function HomeStatsBento({
  eyebrow,
  title,
  subtitle,
  introSecondary,
  introMetaLine,
  items,
}: HomeStatsBentoProps) {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  } as const;

  const introContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.06,
      },
    },
  };

  const introChild: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: springShow },
  };

  const reduceMotion = reduce ?? false;

  return (
    <div className="relative">
      <motion.div
        className="lg:hidden grid grid-cols-2 gap-x-2.5 gap-y-2.5 sm:gap-x-3 sm:gap-y-3"
        initial={reduceMotion ? "visible" : "hidden"}
        animate={reduceMotion ? "visible" : undefined}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={
          reduceMotion
            ? undefined
            : { once: true, margin: "-8% 0px", amount: 0.12 }
        }
        variants={container}
      >
        <motion.header
          variants={introContainer}
          className="col-span-2 px-0.5"
        >
          <motion.span
            variants={introChild}
            className="inline-flex w-fit items-center rounded-full border border-accent/40 bg-accent-muted px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent"
          >
            {eyebrow}
          </motion.span>
          <motion.h2
            variants={introChild}
            className="mt-5 max-w-[18ch] text-pretty text-2xl font-semibold tracking-tight text-zinc-900 sm:mt-6 sm:max-w-none sm:text-3xl md:text-[2.05rem] md:leading-tight dark:text-white"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={introChild}
            className="mt-4 max-w-[60ch] text-base leading-relaxed text-zinc-500 sm:mt-5"
          >
            {subtitle}
          </motion.p>
          {introSecondary.trim() ? (
            <motion.p
              variants={introChild}
              className="mt-4 max-w-[58ch] text-sm leading-relaxed text-zinc-500 sm:mt-5"
            >
              {introSecondary}
            </motion.p>
          ) : null}
          <motion.div variants={introChild} className="mt-8 sm:mt-10">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500 sm:text-[11px]">
              {introMetaLine}
            </p>
            <div
              className="mt-4 h-px w-full max-w-xl bg-zinc-200 dark:bg-zinc-800"
              aria-hidden
            />
          </motion.div>
        </motion.header>
        {items.map((item, idx) => (
          <StatTile
            key={item.label}
            item={item}
            idx={idx}
            compact
            gridClass="col-span-1 min-w-0"
            reduceMotion={reduceMotion}
          />
        ))}
      </motion.div>

      <motion.div
        className="relative hidden lg:grid lg:grid-cols-12 lg:grid-rows-2 lg:gap-x-6 lg:gap-y-6"
        initial={reduceMotion ? "visible" : "hidden"}
        animate={reduceMotion ? "visible" : undefined}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={
          reduceMotion
            ? undefined
            : { once: true, margin: "-12% 0px", amount: 0.15 }
        }
        variants={container}
      >
        <div
          className="pointer-events-none absolute -left-4 top-1/2 hidden h-[min(70%,380px)] w-px -translate-y-1/2 bg-linear-to-b from-transparent via-zinc-300/70 to-transparent dark:via-zinc-600/50 lg:block"
          aria-hidden
        />
        <motion.header
          variants={introContainer}
          className="col-span-5 row-span-2 flex flex-col justify-center pr-5 pb-2"
        >
            <motion.span
              variants={introChild}
              className="inline-flex w-fit items-center rounded-full border border-accent/40 bg-accent-muted px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent"
            >
              {eyebrow}
            </motion.span>
            <motion.h2
              variants={introChild}
              className="mt-5 max-w-[18ch] text-pretty text-2xl font-semibold tracking-tight text-zinc-900 sm:mt-6 sm:max-w-none sm:text-3xl md:text-[2.05rem] md:leading-tight dark:text-white"
            >
              {title}
            </motion.h2>
            <motion.p
              variants={introChild}
              className="mt-4 max-w-[60ch] text-base leading-relaxed text-zinc-500 sm:mt-5"
            >
              {subtitle}
            </motion.p>
            {introSecondary.trim() ? (
              <motion.p
                variants={introChild}
                className="mt-4 max-w-[58ch] text-sm leading-relaxed text-zinc-500 sm:mt-5"
              >
                {introSecondary}
              </motion.p>
            ) : null}
            <motion.div variants={introChild} className="mt-8 sm:mt-10">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500 sm:text-[11px]">
                {introMetaLine}
              </p>
              <div
                className="mt-4 h-px w-full max-w-xl bg-zinc-200 dark:bg-zinc-800"
                aria-hidden
              />
            </motion.div>
        </motion.header>
        {items.map((item, idx) => {
          const gridClass =
            idx === 0
              ? "col-span-3 col-start-6 row-start-1"
              : idx === 1
                ? "col-span-4 col-start-9 row-start-1"
                : idx === 2
                  ? "col-span-4 col-start-6 row-start-2"
                  : "col-span-3 col-start-10 row-start-2";
          return (
            <StatTile
              key={item.label}
              item={item}
              idx={idx}
              compact={false}
              gridClass={gridClass}
              reduceMotion={reduceMotion}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

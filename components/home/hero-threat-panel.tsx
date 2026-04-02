"use client";

import Link from "next/link";
import { CaretLeft, CaretRight, Info, Lightning, Scan, ShieldWarning } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { home } from "@/content/site";

const ROTATE_MS = 7000;

const springChevron = { type: "spring" as const, stiffness: 360, damping: 30, mass: 0.72 };
const springSlide = { type: "spring" as const, stiffness: 260, damping: 34, mass: 1.05 };
const springMobileReveal = { type: "spring" as const, stiffness: 320, damping: 36, mass: 0.95 };

const detailStaggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04, delayChildren: 0.04 },
  },
};

const detailStaggerChild = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: springChevron,
  },
};

/** Chỉ mũi tên — tương phản rõ trên cả popup và card tối */
const arrowNavClassName =
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-stone-300/85 bg-white text-stone-800 shadow-[0_1px_0_rgba(255,255,255,0.7)] transition-[transform,background-color,border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-stone-50 hover:border-stone-400/90 active:scale-[0.96] dark:border-zinc-500/80 dark:bg-zinc-800 dark:text-zinc-50 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:hover:border-zinc-400/70 dark:hover:bg-zinc-700";

function defaultAlertIndex(alerts: typeof home.heroSecurityAlerts) {
  const idx = alerts.findIndex((a) => a.source.includes("GitLab"));
  return idx >= 0 ? idx : 0;
}

type AlertSeverity = (typeof home.heroSecurityAlerts)[number]["severity"];

function SeverityBadge({ severity, label }: { severity: AlertSeverity; label: string }) {
  if (severity === "high") {
    return (
      <span
        className="inline-flex max-w-full items-center gap-1 rounded-md border border-red-900/30 bg-red-800/95 px-2 py-0.5 text-[10px] font-bold uppercase leading-none tracking-wide text-white dark:border-red-900/55 dark:bg-red-950 dark:text-red-50"
        title="Mức cao — ưu tiên xử lý"
      >
        <ShieldWarning className="h-3 w-3 shrink-0 text-red-100" weight="fill" aria-hidden />
        <span className="min-w-0 truncate">{label}</span>
      </span>
    );
  }

  return (
    <span
      className="inline-flex max-w-full items-center gap-1 rounded-md border border-orange-900/22 bg-orange-600/95 px-2 py-0.5 text-[10px] font-bold uppercase leading-none tracking-wide text-white dark:border-orange-800/45 dark:bg-orange-700 dark:text-orange-50"
      title="Mức trung bình — theo dõi và lên kế hoạch vá"
    >
      <Info className="h-3 w-3 shrink-0 text-orange-100" weight="bold" aria-hidden />
      <span className="min-w-0 truncate">{label}</span>
    </span>
  );
}

function NewBadge() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-amber-500/14 py-0.5 pl-1 pr-1.5 text-[8px] font-bold uppercase tracking-[0.14em] text-amber-900 ring-1 ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-100 dark:ring-amber-400/28">
      <span className="h-3 w-0.5 shrink-0 rounded-full bg-amber-600 dark:bg-amber-400" aria-hidden />
      Mới
    </span>
  );
}

type Alert = (typeof home.heroSecurityAlerts)[number];

function ThreatDetailBlocks({
  a,
  i,
  reduceMotion,
}: {
  a: Alert;
  i: number;
  reduceMotion: boolean;
}) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={i}
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
        transition={reduceMotion ? { duration: 0.06 } : springSlide}
        className="min-w-0"
      >
        <motion.div
          className="min-w-0 divide-y divide-stone-200/70 dark:divide-zinc-700/50"
          initial="hidden"
          animate="show"
          variants={detailStaggerParent}
        >
          {a.isNew ? (
            <motion.div variants={detailStaggerChild} className="flex flex-wrap items-center gap-2 py-2.5 first:pt-0">
              <span className="h-4 w-0.5 shrink-0 rounded-full bg-red-600 dark:bg-red-400" aria-hidden />
              <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-red-800 dark:text-red-200">Tin mới</span>
              <span className="font-mono text-[9px] tabular-nums text-stone-600 dark:text-zinc-400">{a.date}</span>
            </motion.div>
          ) : null}

          <motion.div variants={detailStaggerChild} className="py-3">
            <p className="break-words text-[9px] font-medium uppercase leading-snug tracking-[0.08em] text-stone-500 dark:text-zinc-400">
              Nguồn
            </p>
            <p className="mt-1 break-words text-[12px] font-medium leading-snug text-stone-800 dark:text-zinc-200">{a.source}</p>
          </motion.div>

          <motion.div variants={detailStaggerChild} className="py-3">
            <p className="break-words text-[12px] font-normal leading-relaxed tracking-tight text-stone-900 dark:text-zinc-100 sm:text-[13px]">
              {a.summary}
            </p>
          </motion.div>

          {"cves" in a && a.cves && a.cves.length > 0 ? (
            <motion.div variants={detailStaggerChild} className="flex flex-wrap gap-1.5 py-3" aria-label="Mã CVE">
              {a.cves.map((id) => (
                <span
                  key={id}
                  className="max-w-full break-all rounded-md bg-teal-50/90 px-1.5 py-0.5 font-mono text-[9px] font-medium text-teal-950 ring-1 ring-teal-800/12 dark:bg-teal-950/30 dark:text-teal-100 dark:ring-teal-500/20"
                >
                  {id}
                </span>
              ))}
            </motion.div>
          ) : null}

          <motion.div variants={detailStaggerChild} className="py-3">
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-stone-500 dark:text-zinc-500">Ảnh hưởng</p>
            <p className="mt-1.5 break-words text-[12px] font-medium leading-relaxed text-stone-900 dark:text-zinc-100">{a.impact}</p>
          </motion.div>

          <motion.div variants={detailStaggerChild} className="border-l-2 border-orange-400/45 py-3 pl-3 dark:border-orange-400/35">
            <div className="flex gap-2.5">
              <Lightning className="mt-0.5 h-4 w-4 shrink-0 text-orange-700 dark:text-orange-300" weight="bold" aria-hidden />
              <div className="min-w-0 flex-1">
                <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-orange-900/90 dark:text-orange-200/95">
                  Khuyến nghị
                </p>
                <p className="mt-1.5 break-words text-[12px] font-medium leading-relaxed text-stone-900 dark:text-zinc-100">
                  {a.remediation}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ThreatNavRows({
  i,
  n,
  prev,
  next,
  articlesLink,
  stopClickBubble,
}: {
  i: number;
  n: number;
  prev: () => void;
  next: () => void;
  articlesLink: ReactNode;
  stopClickBubble?: boolean;
}) {
  const wrap = (e: React.MouseEvent) => {
    if (stopClickBubble) e.stopPropagation();
  };
  return (
    <div className="border-t border-stone-200/75 bg-stone-50/80 dark:border-zinc-700/50 dark:bg-zinc-950/50">
      <div className="flex items-center justify-between gap-3 px-3 py-2.5 sm:px-4">
        <button type="button" onClick={(e) => { wrap(e); prev(); }} aria-label="Tin trước" className={arrowNavClassName}>
          <CaretLeft className="h-4 w-4" weight="bold" aria-hidden />
        </button>
        <span className="min-w-0 truncate text-center font-mono text-[10px] tabular-nums text-stone-700 dark:text-zinc-300">
          {i + 1} / {n}
        </span>
        <button type="button" onClick={(e) => { wrap(e); next(); }} aria-label="Tin sau" className={arrowNavClassName}>
          <CaretRight className="h-4 w-4" weight="bold" aria-hidden />
        </button>
      </div>
      <div className="flex justify-end border-t border-stone-200/60 px-3 py-2 dark:border-zinc-700/45 sm:px-4">
        {articlesLink}
      </div>
    </div>
  );
}

export function HeroThreatPanel() {
  const alerts = home.heroSecurityAlerts;
  const initial = useMemo(() => defaultAlertIndex(alerts), [alerts]);
  const [i, setI] = useState(initial);
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [dockHover, setDockHover] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => setI((x) => (x - 1 + alerts.length) % alerts.length), [alerts.length]);
  const next = useCallback(() => setI((x) => (x + 1) % alerts.length), [alerts.length]);

  const pauseRotate = dockHover || mobileDetailOpen;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (alerts.length <= 1 || pauseRotate || reduceMotion) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % alerts.length), ROTATE_MS);
    return () => window.clearInterval(t);
  }, [alerts.length, pauseRotate, reduceMotion]);

  useEffect(() => {
    if (!mobileDetailOpen) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const t = e.target as Node | null;
      if (!t || !panelRef.current?.contains(t)) setMobileDetailOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileDetailOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileDetailOpen]);

  const a = alerts[i];
  const n = alerts.length;

  const articlesCta = (
    <Link
      href="/articles"
      className="inline-flex shrink-0 rounded-full border border-teal-800/35 bg-teal-800 px-3.5 py-1.5 text-center text-[10px] font-bold text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-teal-900 active:scale-[0.98] dark:border-teal-500/40 dark:bg-teal-600 dark:text-teal-950 dark:hover:bg-teal-400"
    >
      Xem thêm
    </Link>
  );

  const flyoutScroll = (
    <div className="max-h-[min(52dvh,440px)] min-h-0 overflow-y-auto overscroll-contain px-3 py-3 sm:px-4">
      <ThreatDetailBlocks a={a} i={i} reduceMotion={reduceMotion} />
    </div>
  );

  return (
    <div
      ref={panelRef}
      className="group/panel relative z-1 w-full overflow-visible"
      onMouseEnter={() => setDockHover(true)}
      onMouseLeave={() => setDockHover(false)}
    >
      <div className="pointer-events-auto overflow-hidden rounded-2xl border border-stone-200/55 bg-white/95 shadow-[0_12px_40px_-24px_rgba(28,25,23,0.12)] dark:border-zinc-600/40 dark:bg-zinc-900/94 dark:shadow-[0_16px_44px_-28px_rgba(0,0,0,0.42)]">
        <div className="relative px-4 pb-3 pt-4 md:px-5 md:pb-3.5 md:pt-5" role="region" aria-label="Tin cảnh báo bảo mật">
          <div className="flex min-w-0 gap-3">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={i}
                className="min-w-0 flex-1"
                initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -10 }}
                transition={reduceMotion ? { duration: 0.08 } : springSlide}
              >
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 md:gap-x-3">
                  <span className="flex min-w-0 items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-stone-500 dark:text-zinc-400">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400 ring-2 ring-amber-400/35" aria-hidden />
                    <span className="truncate">Cảnh báo bảo mật</span>
                  </span>
                  {a.isNew ? <NewBadge /> : null}
                  <SeverityBadge severity={a.severity} label={a.severityLabel} />
                  <span className="shrink-0 font-mono tabular-nums text-[10px] text-stone-600 dark:text-zinc-300">{a.date}</span>
                </div>
                <h3 className="mt-3 break-words text-[13px] font-semibold leading-snug tracking-tight text-stone-900 dark:text-white sm:text-sm">
                  {a.headline}
                </h3>
                <p className="mt-2 line-clamp-2 break-words text-[11px] leading-relaxed text-stone-600 dark:text-zinc-300 md:line-clamp-2">
                  {a.remediation}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="hidden shrink-0 md:block">
              <span
                className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-stone-200/70 bg-stone-50/90 text-stone-500 dark:border-zinc-600/70 dark:bg-zinc-800/60 dark:text-zinc-400"
                title="Di chuột vào vùng tin để xem phân tích"
              >
                <Scan className="h-4 w-4" weight="bold" aria-hidden />
              </span>
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className={`min-w-0 flex-1 ${mobileDetailOpen ? "hidden md:block" : ""}`}>
              <ThreatNavRows i={i} n={n} prev={prev} next={next} articlesLink={articlesCta} />
            </div>
            <button
              type="button"
              className="flex w-full shrink-0 items-center justify-center gap-1.5 rounded-lg border border-stone-200/80 bg-stone-50/95 py-2 text-[10px] font-semibold text-stone-700 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-stone-100 active:scale-[0.99] dark:border-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-200 dark:hover:bg-zinc-800 sm:w-auto md:hidden"
              aria-expanded={mobileDetailOpen}
              aria-controls="hero-threat-mobile-detail"
              id="hero-threat-mobile-trigger"
              onClick={() => setMobileDetailOpen((v) => !v)}
            >
              <Scan className="h-3.5 w-3.5" weight="bold" aria-hidden />
              {mobileDetailOpen ? "Thu gọn phân tích" : "Xem phân tích"}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {mobileDetailOpen ? (
            <motion.div
              key="mobile-detail"
              id="hero-threat-mobile-detail"
              role="region"
              aria-labelledby="hero-threat-mobile-trigger"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0, transition: { duration: 0.1 } } : { opacity: 0, y: 6 }}
              transition={
                reduceMotion ? { duration: 0.1, ease: [0.32, 0.72, 0, 1] } : springMobileReveal
              }
              className="border-t border-stone-200/75 md:hidden dark:border-zinc-700/55"
            >
              <div className="min-h-0 overflow-hidden">
                {flyoutScroll}
                <ThreatNavRows i={i} n={n} prev={prev} next={next} articlesLink={articlesCta} stopClickBubble />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/*
        Chồng ~8px lên card để không mất hover khi di chuột từ card lên popup.
        Popup chỉ hiển thị nội dung; điều hướng nằm trên card chính.
      */}
      <div
        className="pointer-events-none invisible absolute bottom-[calc(100%-8px)] left-0 right-0 z-20 translate-y-3 opacity-0 transition-[opacity,transform,visibility] duration-[320ms] ease-[cubic-bezier(0.32,0.72,0,1)] max-md:hidden md:pointer-events-none md:group-hover/panel:pointer-events-auto md:group-hover/panel:visible md:group-hover/panel:translate-y-0 md:group-hover/panel:opacity-100 md:group-focus-within/panel:pointer-events-auto md:group-focus-within/panel:visible md:group-focus-within/panel:translate-y-0 md:group-focus-within/panel:opacity-100"
        role="region"
        aria-label="Chi tiết cảnh báo khi di chuột"
      >
        <div className="pointer-events-auto overflow-hidden rounded-2xl border border-stone-200/60 bg-white shadow-[0_20px_50px_-28px_rgba(0,0,0,0.18)] dark:border-zinc-500/50 dark:bg-zinc-900 dark:shadow-[0_24px_56px_-30px_rgba(0,0,0,0.65)]">
          {flyoutScroll}
        </div>
      </div>
    </div>
  );
}

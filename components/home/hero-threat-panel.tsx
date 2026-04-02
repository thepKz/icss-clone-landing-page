"use client";

import Link from "next/link";
import { CaretLeft, CaretRight, Info, Lightning, ShieldWarning } from "@phosphor-icons/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { home } from "@/content/site";

const ROTATE_MS = 7000;

function defaultAlertIndex(alerts: typeof home.heroSecurityAlerts) {
  const idx = alerts.findIndex((a) => a.source.includes("GitLab"));
  return idx >= 0 ? idx : 0;
}

type AlertSeverity = (typeof home.heroSecurityAlerts)[number]["severity"];

function SeverityBadge({ severity, label }: { severity: AlertSeverity; label: string }) {
  if (severity === "high") {
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded-md border border-red-950/35 bg-red-800 px-2.5 py-1 text-[11px] font-bold uppercase leading-none tracking-wide text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] dark:border-red-900/60 dark:bg-red-950 dark:text-red-50"
        title="Mức cao — ưu tiên xử lý"
      >
        <ShieldWarning className="h-3.5 w-3.5 shrink-0 text-red-100" weight="fill" aria-hidden />
        {label}
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-md border border-orange-950/25 bg-orange-600 px-2.5 py-1 text-[11px] font-bold uppercase leading-none tracking-wide text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] dark:border-orange-800/50 dark:bg-orange-700 dark:text-orange-50"
      title="Mức trung bình — theo dõi và lên kế hoạch vá"
    >
      <Info className="h-3.5 w-3.5 shrink-0 text-orange-100" weight="bold" aria-hidden />
      {label}
    </span>
  );
}

function NewBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-red-950/40 bg-red-700 px-2.5 py-1 text-[11px] font-bold uppercase leading-none tracking-wider text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] dark:border-red-900/55 dark:bg-red-800">
      <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-35 motion-safe:animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
      </span>
      Mới
    </span>
  );
}

export function HeroThreatPanel() {
  const alerts = home.heroSecurityAlerts;
  const initial = useMemo(() => defaultAlertIndex(alerts), [alerts]);
  const [i, setI] = useState(initial);
  const [expanded, setExpanded] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const prev = useCallback(() => setI((x) => (x - 1 + alerts.length) % alerts.length), [alerts.length]);
  const next = useCallback(() => setI((x) => (x + 1) % alerts.length), [alerts.length]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (alerts.length <= 1 || expanded || reduceMotion) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % alerts.length), ROTATE_MS);
    return () => window.clearInterval(t);
  }, [alerts.length, expanded, reduceMotion]);

  const a = alerts[i];

  return (
    <div
      className="group pointer-events-auto relative z-1 w-full overflow-hidden rounded-lg border border-stone-300/85 bg-white/92 shadow-[0_10px_32px_-16px_rgba(28,25,23,0.12),inset_0_1px_0_rgba(255,255,255,0.65)] ring-1 ring-stone-200/55 dark:border-zinc-600 dark:bg-zinc-900/92 dark:shadow-[0_14px_40px_-18px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)] dark:ring-zinc-700/45 border-l-[3px] border-l-teal-800 dark:border-l-teal-500"
      role="region"
      aria-label="Tin cảnh báo bảo mật"
      onClick={() => setExpanded((v) => !v)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[-1] rounded-lg opacity-0 translate-y-0 transition-[opacity,transform] duration-900 delay-150 ease-[cubic-bezier(0.32,0.72,0,1)] md:group-hover:opacity-100 md:group-hover:-translate-y-[2px]"
      >
        <div className="absolute inset-0 rounded-lg bg-[radial-gradient(650px_circle_at_18%_0%,rgba(20,184,166,0.26),transparent_60%),radial-gradient(520px_circle_at_80%_110%,rgba(13,148,136,0.16),transparent_56%)] blur-2xl opacity-100 dark:bg-[radial-gradient(650px_circle_at_18%_0%,rgba(45,212,191,0.26),transparent_60%),radial-gradient(520px_circle_at_80%_110%,rgba(20,184,166,0.18),transparent_56%)]" />
      </div>
      <div className="flex flex-col gap-3 border-b border-stone-200/85 px-3 py-2.5 dark:border-zinc-700/85 sm:px-4 md:flex-row md:items-center md:gap-4 md:py-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <span className="rounded-md border border-teal-800/22 bg-teal-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-teal-900 dark:border-teal-500/28 dark:bg-teal-950/55 dark:text-teal-200">
              Tin ATTT
            </span>
            {a.isNew ? <NewBadge /> : null}
            <SeverityBadge severity={a.severity} label={a.severityLabel} />
          </div>
          <h3
            className={`mt-2 text-[13px] font-semibold leading-snug tracking-tight text-stone-900 dark:text-white sm:text-sm ${
              expanded ? "line-clamp-none" : "line-clamp-2 md:line-clamp-1"
            }`}
          >
            {a.headline}
          </h3>
          <div className="mt-1 flex flex-wrap items-center gap-x-1.5 text-[10px] text-stone-600 dark:text-zinc-400">
            <span className="font-mono tabular-nums text-stone-700 dark:text-zinc-300">{a.date}</span>
            <span className="text-stone-400 dark:text-zinc-600" aria-hidden>
              |
            </span>
            <span className="min-w-0 truncate font-medium">{a.source}</span>
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-1 border-t border-stone-200/80 pt-3 dark:border-zinc-700/80 md:border-t-0 md:pt-0 md:border-l md:pl-4 md:border-stone-200/80 dark:md:border-zinc-700/80">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Tin trước"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-stone-300/90 bg-white text-stone-700 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-teal-800/40 hover:bg-stone-50 active:scale-[0.96] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-teal-500/40"
          >
            <CaretLeft className="h-3.5 w-3.5" weight="bold" aria-hidden />
          </button>
          <div className="flex min-w-0 flex-1 justify-center gap-1 sm:flex-initial" role="tablist" aria-label="Chọn cảnh báo">
            {alerts.map((item, idx) => (
              <button
                key={`${item.headline}-${idx}`}
                type="button"
                role="tab"
                aria-selected={idx === i}
                aria-label={`Cảnh báo ${idx + 1}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setI(idx);
                }}
                className={`h-1 rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  idx === i ? "w-4 bg-teal-700 dark:bg-teal-500" : "w-1 bg-stone-300 hover:bg-stone-400 dark:bg-zinc-600"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Tin sau"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-stone-300/90 bg-white text-stone-700 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-teal-800/40 hover:bg-stone-50 active:scale-[0.96] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-teal-500/40"
          >
            <CaretRight className="h-3.5 w-3.5" weight="bold" aria-hidden />
          </button>
          <Link
            href="/articles"
            onClick={(e) => e.stopPropagation()}
            className="ml-0.5 shrink-0 rounded-full border border-teal-800/25 bg-teal-800 px-2.5 py-1 text-center text-[9px] font-bold text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-teal-900/90 active:scale-[0.98] dark:border-teal-500/40 dark:bg-teal-600 dark:text-teal-950 dark:hover:bg-teal-400"
          >
            Xem thêm
          </Link>
        </div>
      </div>

      <div className="px-3 pb-2 pt-2 sm:px-4 md:hidden">
        <button
          type="button"
          className="w-full rounded-md border border-stone-200/90 bg-stone-50/90 py-1.5 text-center text-[10px] font-semibold text-stone-700 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-stone-100 dark:border-zinc-600 dark:bg-zinc-800/80 dark:text-zinc-200 dark:hover:bg-zinc-800"
          aria-expanded={expanded}
          onClick={(e) => {
            e.stopPropagation();
            setExpanded((v) => !v);
          }}
        >
          {expanded ? "Thu gọn" : "Chi tiết"}
        </button>
        {!expanded ? (
          <p className="mt-1 text-center text-[9px] text-stone-400 dark:text-zinc-500">Chạm để xem đầy đủ</p>
        ) : null}
      </div>

      {!expanded ? (
        <p className="hidden px-4 pb-2 text-right text-[9px] text-stone-400 dark:text-zinc-500 md:block">
          Bấm để mở chi tiết.
        </p>
      ) : null}

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-stone-200/90 px-3 py-3 dark:border-zinc-700/90 sm:px-4">
            <div className="rounded-lg border border-stone-200/80 bg-stone-50/90 px-2.5 py-2 dark:border-zinc-600/80 dark:bg-zinc-800/40">
              <p className="text-[11px] leading-relaxed text-stone-700 dark:text-zinc-300">{a.summary}</p>
            </div>

            {"cves" in a && a.cves && a.cves.length > 0 ? (
              <ul className="mt-2.5 flex flex-wrap gap-1.5" aria-label="Mã CVE">
                {a.cves.map((id) => (
                  <li
                    key={id}
                    className="rounded border border-teal-800/20 bg-teal-50/80 px-1.5 py-0.5 font-mono text-[9px] font-medium text-teal-950 dark:border-teal-500/25 dark:bg-teal-950/30 dark:text-teal-100"
                  >
                    {id}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-2.5 rounded-lg border border-stone-200/80 bg-white/60 px-2.5 py-2 dark:border-zinc-600/60 dark:bg-zinc-800/30">
              <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-stone-500 dark:text-zinc-500">Ảnh hưởng</p>
              <p className="mt-1 text-[10px] leading-relaxed text-stone-700 dark:text-zinc-300">{a.impact}</p>
            </div>

            <div className="mt-2.5 flex gap-2 rounded-lg border-l-[3px] border-teal-700/70 bg-teal-50/50 py-2 pl-2.5 pr-2 dark:border-teal-500/60 dark:bg-teal-950/25">
              <Lightning className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-800 dark:text-teal-400" weight="bold" aria-hidden />
              <div className="min-w-0">
                <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-teal-900/90 dark:text-teal-300/90">Khuyến nghị</p>
                <p className="mt-0.5 text-[10px] leading-relaxed text-stone-800 dark:text-zinc-200">{a.remediation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

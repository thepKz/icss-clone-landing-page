"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Globe } from "@phosphor-icons/react";

export const LOCALE_STORAGE_KEY = "ics-locale";

export type AppLocale = "vi" | "en" | "zh" | "ja" | "ko";

const LOCALES: {
  code: AppLocale;
  region: string;
  label: string;
  htmlLang: string;
}[] = [
  { code: "vi", region: "VN", label: "Tiếng Việt", htmlLang: "vi" },
  { code: "en", region: "US", label: "English", htmlLang: "en" },
  { code: "zh", region: "CN", label: "中文", htmlLang: "zh-CN" },
  { code: "ja", region: "JP", label: "日本語", htmlLang: "ja" },
  { code: "ko", region: "KR", label: "한국어", htmlLang: "ko" },
];

function readStoredLocale(): AppLocale {
  if (typeof window === "undefined") return "vi";
  try {
    const s = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (s && LOCALES.some((l) => l.code === s)) return s as AppLocale;
  } catch {
    /* ignore */
  }
  return "vi";
}

export function applyLocaleToDocument(code: AppLocale) {
  const row = LOCALES.find((l) => l.code === code) ?? LOCALES[0];
  document.documentElement.setAttribute("lang", row.htmlLang);
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, code);
  } catch {
    /* ignore */
  }
}

const spring = { type: "spring" as const, stiffness: 380, damping: 32 };

type LanguageSwitcherProps = {
  /** Inline variant for mobile sheet: full width row + list below */
  variant?: "header" | "sheet";
  onPick?: () => void;
};

export function LanguageSwitcher({
  variant = "header",
  onPick,
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState<AppLocale>("vi");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sync = () => {
      const next = readStoredLocale();
      setLocale(next);
      applyLocaleToDocument(next);
    };
    queueMicrotask(sync);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const select = useCallback(
    (code: AppLocale) => {
      setLocale(code);
      applyLocaleToDocument(code);
      setOpen(false);
      onPick?.();
    },
    [onPick]
  );

  const list = (
    <ul
      role="listbox"
      aria-label="Ngôn ngữ hiển thị"
      className={
        variant === "sheet"
          ? "mt-2 overflow-hidden rounded-xl border border-zinc-200/90 bg-white py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:border-teal-500/20 dark:bg-zinc-950 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          : "absolute right-0 top-full z-[60] mt-2 min-w-[228px] overflow-hidden rounded-xl border border-zinc-200/90 bg-white py-1 shadow-[0_16px_48px_-12px_rgba(15,23,42,0.14)] ring-1 ring-zinc-200/70 dark:border-teal-950/40 dark:bg-zinc-950 dark:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.5)] dark:ring-teal-950/30"
      }
    >
      {LOCALES.map((row) => {
        const active = row.code === locale;
        return (
          <li key={row.code} role="presentation">
            <button
              type="button"
              role="option"
              aria-selected={active}
              onClick={() => select(row.code)}
              className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-zinc-100 dark:hover:bg-white/[0.06]"
            >
              <span className="text-zinc-900 dark:text-zinc-100">
                <span className="font-semibold tabular-nums">{row.region}</span>
                <span className="text-zinc-400 dark:text-zinc-400"> </span>
                <span className="font-normal text-zinc-700 dark:text-zinc-300">
                  {row.label}
                </span>
              </span>
              {active ? (
                <Check
                  className="shrink-0 text-teal-700 dark:text-teal-400"
                  size={18}
                  weight="bold"
                  aria-hidden
                />
              ) : (
                <span className="size-[18px] shrink-0" aria-hidden />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );

  if (variant === "sheet") {
    return (
      <div ref={rootRef} className="w-full">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Ngôn ngữ
        </p>
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="mt-3 flex w-full items-center justify-between rounded-xl border border-zinc-200/90 bg-zinc-50/80 px-4 py-3 text-left text-sm text-zinc-800 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-zinc-100 active:scale-[0.99] dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-100 dark:hover:bg-white/[0.07]"
        >
          <span>
            <span className="font-semibold tabular-nums">
              {LOCALES.find((l) => l.code === locale)?.region}
            </span>
            <span className="text-zinc-400 dark:text-zinc-400"> </span>
            <span className="font-normal text-zinc-600 dark:text-zinc-300">
              {LOCALES.find((l) => l.code === locale)?.label}
            </span>
          </span>
          <Globe size={20} weight="regular" className="text-zinc-500 dark:text-zinc-300" aria-hidden />
        </button>
        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={spring}
            >
              {list}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Chọn ngôn ngữ"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-300/80 text-zinc-800 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-zinc-100 active:scale-[0.98] dark:border-white/10 dark:text-zinc-100 dark:hover:bg-white/5"
      >
        <Globe size={22} weight="regular" aria-hidden />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={spring}
            className="absolute right-0 top-full"
          >
            {list}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { ArrowUp } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** Đặt scroll về 0 khi đổi route + tắt khôi phục scroll mặc định của trình duyệt. */
export function ScrollToTopOnRoute() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.history.scrollRestoration = "manual";
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

const SHOW_AFTER = 360;

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-4 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-stone-300/80 bg-white/95 text-stone-800 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.18)] transition-[transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-stone-50 active:scale-[0.96] dark:border-zinc-600 dark:bg-zinc-900/95 dark:text-zinc-100 dark:shadow-[0_14px_36px_-18px_rgba(0,0,0,0.55)] dark:hover:bg-zinc-800 md:bottom-8 md:right-6"
      aria-label="Về đầu trang"
    >
      <ArrowUp className="h-5 w-5" weight="bold" aria-hidden />
    </button>
  );
}

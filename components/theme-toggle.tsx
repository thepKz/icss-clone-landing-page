"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Chuyển giao diện sáng" : "Chuyển giao diện tối"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300/70 bg-white/80 text-zinc-950 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-cyan-500/40 hover:bg-white hover:text-zinc-950 active:translate-y-px active:scale-[0.98] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400/35 dark:hover:bg-white/10 dark:hover:text-white"
    >
      {isDark ? (
        <Sun className="h-5 w-5" weight="bold" aria-hidden />
      ) : (
        <Moon className="h-5 w-5" weight="bold" aria-hidden />
      )}
    </button>
  );
}

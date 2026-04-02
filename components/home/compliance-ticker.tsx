"use client";

import Link from "next/link";
import { SealWarning } from "@phosphor-icons/react";
import { home } from "@/content/site";

export function ComplianceTicker() {
  const { compliance } = home;

  const block = (
    <p className="flex items-center gap-2 whitespace-nowrap text-[10px] font-semibold uppercase leading-snug tracking-wide text-white/95 sm:text-[11px] md:text-xs">
      <SealWarning className="hidden h-3.5 w-3.5 shrink-0 text-amber-200/90 sm:block" weight="duotone" aria-hidden />
      <span>
        <span className="text-white/90">{compliance.line}</span>
        {" — "}
        <span className="font-bold text-amber-100/95">{compliance.highlight}</span>
        {` ${compliance.rest}`}
      </span>
    </p>
  );

  return (
    <div
      className="relative z-[35] border-t border-red-950/20 bg-red-950/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:border-red-950/40 dark:bg-red-950/90 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
      role="region"
      aria-label="Thông báo pháp lý"
    >
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-2 px-4 py-1.5 sm:flex-nowrap sm:gap-2.5 sm:py-2 md:gap-3 md:px-8">
        <span className="hidden shrink-0 items-center gap-1 rounded-full border border-white/15 bg-black/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/95 sm:inline-flex">
          <span className="h-1 w-1 rounded-full bg-amber-300/90" aria-hidden />
          {compliance.badge}
        </span>
        <div className="relative min-h-[2.25rem] min-w-0 flex-1 overflow-hidden py-0.5 sm:min-h-0 sm:py-0">
          <div className="compliance-marquee-track flex w-max items-center">
            <div className="flex shrink-0 items-center pr-10">{block}</div>
            <div className="flex shrink-0 items-center pr-10" aria-hidden="true">
              {block}
            </div>
          </div>
        </div>
        <Link
          href={compliance.cta.href}
          className="shrink-0 rounded-md border border-white/25 bg-white/95 px-2 py-1.5 text-[10px] font-bold text-red-900/90 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-amber-50/95 active:scale-[0.98] dark:border-amber-200/35 dark:bg-amber-50/92 dark:text-red-950 dark:hover:bg-white sm:px-2.5 sm:text-[11px]"
        >
          <span className="sm:hidden">Thêm</span>
          <span className="hidden sm:inline">{compliance.cta.label}</span>
        </Link>
      </div>
    </div>
  );
}

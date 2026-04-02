"use client";

import Link from "next/link";
import { SealWarning } from "@phosphor-icons/react";
import { home } from "@/content/site";

export function ComplianceTicker() {
  const { compliance } = home;

  const block = (
    <p className="flex items-center gap-1.5 whitespace-nowrap text-[9px] font-semibold uppercase leading-snug tracking-wide text-white sm:text-[10px] md:text-[11px]">
      <SealWarning className="hidden h-3 w-3 shrink-0 text-amber-200 sm:block" weight="duotone" aria-hidden />
      <span>
        <span className="text-white">{compliance.line}</span>
        {" — "}
        <span className="font-bold text-amber-100">{compliance.highlight}</span>
        {` ${compliance.rest}`}
      </span>
    </p>
  );

  return (
    <div
      className="relative border-t border-red-800/35 bg-red-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:border-red-800/45 dark:bg-red-900 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
      role="region"
      aria-label="Thông báo pháp lý"
    >
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-1.5 px-4 py-1 sm:flex-nowrap sm:gap-2 sm:py-1.5 md:gap-2.5 md:px-8">
        <span className="hidden shrink-0 items-center gap-1 rounded-full border border-white/35 bg-red-950 px-1.5 py-px text-[8px] font-bold uppercase tracking-wider text-white sm:inline-flex">
          <span className="h-0.5 w-0.5 rounded-full bg-amber-300" aria-hidden />
          {compliance.badge}
        </span>
        <div className="relative min-h-[1.85rem] min-w-0 flex-1 overflow-hidden bg-red-900 py-0.5 sm:min-h-0 sm:py-0">
          <div className="compliance-marquee-track flex w-max items-center bg-red-900">
            <div className="flex shrink-0 items-center bg-red-900 pr-8 sm:pr-10">{block}</div>
            <div className="flex shrink-0 items-center bg-red-900 pr-8 sm:pr-10" aria-hidden="true">
              {block}
            </div>
          </div>
        </div>
        <Link
          href={compliance.cta.href}
          className="inline-flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded border border-white/40 bg-white px-2 py-1.5 text-[9px] font-bold text-red-950 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-amber-50 active:scale-[0.98] dark:border-amber-200/50 dark:bg-amber-50 dark:text-red-950 dark:hover:bg-white sm:min-h-0 sm:min-w-0 sm:px-2 sm:py-1 sm:text-[10px]"
        >
          <span className="sm:hidden">Thêm</span>
          <span className="hidden sm:inline">{compliance.cta.label}</span>
        </Link>
      </div>
    </div>
  );
}

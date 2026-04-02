"use client";

import Link from "next/link";
import { SealWarning } from "@phosphor-icons/react";
import { home } from "@/content/site";

export function ComplianceTicker() {
  const { compliance } = home;

  const block = (
    <p className="flex items-center gap-2 whitespace-nowrap text-[11px] font-semibold uppercase leading-snug tracking-wide text-white sm:text-xs md:text-[13px]">
      <SealWarning className="hidden h-4 w-4 shrink-0 text-amber-300 sm:block" weight="duotone" aria-hidden />
      <span>
        <span className="text-white">{compliance.line}</span>
        {" — "}
        <span className="font-extrabold text-amber-200">{compliance.highlight}</span>
        {` ${compliance.rest}`}
      </span>
    </p>
  );

  return (
    <div
      className="relative z-[35] border-b border-red-900/50 bg-[#b91c1c] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] dark:border-red-950/80 dark:bg-[#7f1d1d] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
      role="region"
      aria-label="Thông báo pháp lý"
    >
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-2 px-4 py-3 sm:flex-nowrap sm:gap-3 sm:py-3.5 md:gap-4 md:px-8">
        <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-white/25 bg-red-950/25 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white sm:inline-flex">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(252,211,77,0.65)]" aria-hidden />
          {compliance.badge}
        </span>
        <div className="relative min-h-[2.75rem] min-w-0 flex-1 overflow-hidden py-1 sm:min-h-0 sm:py-0">
          <div className="compliance-marquee-track flex w-max items-center">
            <div className="flex shrink-0 items-center pr-10">{block}</div>
            <div className="flex shrink-0 items-center pr-10" aria-hidden="true">
              {block}
            </div>
          </div>
        </div>
        <Link
          href={compliance.cta.href}
          className="shrink-0 rounded-lg border border-white/35 bg-white px-2.5 py-2 text-[11px] font-bold text-red-700 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-amber-50 active:scale-[0.98] dark:border-amber-200/40 dark:bg-amber-50 dark:text-red-900 dark:hover:bg-white sm:px-3 sm:text-xs"
        >
          <span className="sm:hidden">Thêm</span>
          <span className="hidden sm:inline">{compliance.cta.label}</span>
        </Link>
      </div>
    </div>
  );
}

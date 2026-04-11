"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

export type CareersCvModalProps = {
  open: boolean;
  onClose: () => void;
  jobTitle: string;
  cvEmail: string;
  subjectLine: string;
  contact?: { name: string; role?: string; phone: string };
  documents?: string[];
};

export function CareersCvModal({
  open,
  onClose,
  jobTitle,
  cvEmail,
  subjectLine,
  contact,
  documents,
}: CareersCvModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [copiedField, setCopiedField] = useState<"email" | "subject" | null>(null);

  useEffect(() => {
    if (!open) return;
    const el = dialogRef.current;
    if (!el) return;
    if (!el.open) el.showModal();
    return () => {
      if (el.open) el.close();
    };
  }, [open]);

  const handleDialogClose = useCallback(() => {
    onClose();
    setCopiedField(null);
  }, [onClose]);

  const copyText = useCallback(async (label: "email" | "subject", text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(label);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  }, []);

  if (!mounted || !open) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={handleDialogClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) dialogRef.current?.close();
      }}
      aria-labelledby="careers-cv-modal-title"
      className="fixed inset-0 z-[85] max-h-none max-w-none border-0 bg-transparent p-4 backdrop:bg-zinc-950/65 backdrop:backdrop-blur-sm open:flex open:items-center open:justify-center md:p-6"
    >
      <div
        className="relative w-full max-w-lg rounded-[1.35rem] bg-linear-to-br from-white/98 via-zinc-50/95 to-teal-50/35 p-1 shadow-[0_32px_80px_-32px_rgba(0,0,0,0.35)] ring-1 ring-zinc-300/90 dark:from-zinc-950/98 dark:via-zinc-950/95 dark:to-teal-950/25 dark:ring-white/10 md:rounded-[1.5rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-[calc(1.35rem-4px)] border border-zinc-200/95 bg-white/95 px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,1)] dark:border-white/[0.08] dark:bg-zinc-950/92 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:rounded-[calc(1.5rem-4px)] md:px-7 md:py-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-800 dark:text-cyan-300/90">
                Ứng tuyển
              </p>
              <h2
                id="careers-cv-modal-title"
                className="mt-2 text-lg font-semibold leading-snug tracking-tight text-zinc-900 dark:text-zinc-50"
              >
                {jobTitle}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="shrink-0 rounded-full border border-zinc-300/90 bg-zinc-100/80 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-zinc-200/90 active:scale-[0.97] dark:border-white/12 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:bg-zinc-800/80"
            >
              Đóng
            </button>
          </div>

          <div className="mt-6 space-y-5">
            <div className="rounded-2xl border border-teal-800/25 bg-teal-50/90 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-cyan-400/22 dark:bg-cyan-400/8 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <p className="text-xs font-semibold text-teal-950 dark:text-cyan-50">
                Địa chỉ nhận CV
              </p>
              <p className="mt-1.5 break-all font-mono text-sm font-medium text-teal-900 dark:text-cyan-100">
                {cvEmail}
              </p>
              <button
                type="button"
                onClick={() => copyText("email", cvEmail)}
                className="mt-3 inline-flex rounded-full border border-teal-800/40 bg-white/90 px-4 py-2 text-xs font-semibold text-teal-950 transition-[transform,border-color] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-teal-700/55 active:scale-[0.98] dark:border-cyan-400/35 dark:bg-zinc-950/80 dark:text-cyan-50 dark:hover:border-cyan-300/45"
              >
                {copiedField === "email" ? "Đã sao chép" : "Sao chép email"}
              </button>
            </div>

            <div>
              <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Tiêu đề email gợi ý
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {subjectLine}
              </p>
              <button
                type="button"
                onClick={() => copyText("subject", subjectLine)}
                className="mt-2 inline-flex rounded-full border border-zinc-300/90 bg-zinc-100/80 px-4 py-2 text-xs font-semibold text-zinc-800 transition-[transform,border-color] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-zinc-400/90 active:scale-[0.98] dark:border-white/12 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:border-white/18"
              >
                {copiedField === "subject" ? "Đã sao chép" : "Sao chép tiêu đề"}
              </button>
            </div>

            {contact ? (
              <div className="rounded-xl border border-zinc-200/95 bg-zinc-50/90 px-4 py-3 dark:border-white/[0.08] dark:bg-zinc-900/50">
                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Liên hệ trực tiếp
                </p>
                <p className="mt-1 text-sm text-zinc-800 dark:text-zinc-200">
                  {contact.name}
                  {contact.role ? ` — ${contact.role}` : ""}
                </p>
                <a
                  href={`tel:${contact.phone.replace(/\D/g, "")}`}
                  className="mt-1 inline-block text-sm font-medium text-teal-800 underline-offset-2 hover:underline dark:text-cyan-300"
                >
                  {contact.phone}
                </a>
              </div>
            ) : null}

            {documents && documents.length > 0 ? (
              <div>
                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Hồ sơ gồm
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {documents.map((d) => (
                    <li key={d} className="pl-0.5">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
              Vui lòng gửi CV qua email theo địa chỉ trên. Trình duyệt sẽ không mở sẵn hộp thư — bạn chủ động dán địa chỉ khi soạn thư.
            </p>

            <Link
              href={`/lien-he?vi-tri=${encodeURIComponent(jobTitle)}#lien-he-form`}
              onClick={() => dialogRef.current?.close()}
              className="block w-full rounded-full border border-zinc-300/90 py-3 text-center text-sm font-medium text-zinc-800 transition-[transform,border-color] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-zinc-400/95 active:scale-[0.99] dark:border-white/14 dark:text-zinc-200 dark:hover:border-white/22"
            >
              Hoặc gửi qua form liên hệ
            </Link>
          </div>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}

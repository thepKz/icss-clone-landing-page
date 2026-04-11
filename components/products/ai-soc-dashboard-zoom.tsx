"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "@phosphor-icons/react";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";

type AiSocDashboardZoomProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  imageClassName?: string;
  priority?: boolean;
};

export function AiSocDashboardZoom({
  src,
  alt,
  width,
  height,
  sizes,
  imageClassName,
  priority = true,
}: AiSocDashboardZoomProps) {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const t = window.requestAnimationFrame(() => {
      closeRef.current?.focus();
    });
    return () => window.cancelAnimationFrame(t);
  }, [open]);

  const overlayTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.22, ease: [0.16, 1, 0.3, 1] as const };

  const lightbox = (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="ai-soc-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={overlayTransition}
          className="fixed inset-0 z-[80]"
        >
          <p id={titleId} className="sr-only">
            {alt}
          </p>
          <div
            role="presentation"
            className="absolute inset-0 bg-zinc-950/92 backdrop-blur-md"
            onClick={close}
          />
          <div className="relative z-10 flex h-full min-h-0 flex-col pointer-events-none">
            <div className="flex shrink-0 justify-end px-3 py-3 md:px-5 md:py-4 pointer-events-auto">
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-[transform,background-color,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/25 hover:bg-white/15 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50"
                aria-label="Đóng ảnh phóng to"
              >
                <X className="h-5 w-5" weight="regular" aria-hidden />
              </button>
            </div>
            <div className="flex min-h-0 flex-1 items-center justify-center px-3 pb-6 pt-0 md:px-8 md:pb-10 pointer-events-none">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                transition={overlayTransition}
                className="relative max-h-[min(90dvh,920px)] w-full max-w-[min(96vw,1600px)] pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="h-auto max-h-[min(90dvh,920px)] w-full object-contain object-center"
                  sizes="96vw"
                  priority={open}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative w-full cursor-zoom-in border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/45 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100 dark:focus-visible:ring-teal-400/40 dark:focus-visible:ring-offset-zinc-950"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`Mở xem chi tiết: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={imageClassName}
          sizes={sizes}
          priority={priority}
        />
      </button>
      {mounted ? createPortal(lightbox, document.body) : null}
    </>
  );
}

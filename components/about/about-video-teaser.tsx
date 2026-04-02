"use client";

import Image from "next/image";
import { Play } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";

type AboutVideoTeaserProps = {
  posterSrc: string;
  posterAlt: string;
  videoSrc: string;
  caption: string;
};

export function AboutVideoTeaser({
  posterSrc,
  posterAlt,
  videoSrc,
  caption,
}: AboutVideoTeaserProps) {
  const reduce = useReducedMotion();

  if (videoSrc) {
    return (
      <div
        className="relative overflow-hidden rounded-[calc(2rem-6px)] border border-zinc-200/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:border-white/[0.08]"
        style={{ aspectRatio: "16/9" }}
      >
        <video
          className="h-full w-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster={posterSrc}
        >
          <source src={videoSrc} />
          {caption}
        </video>
      </div>
    );
  }

  return (
    <motion.div
      className="group relative overflow-hidden rounded-[calc(2rem-6px)] border border-zinc-200/90 bg-zinc-100/80 dark:border-white/[0.08] dark:bg-zinc-900/60"
      style={{ aspectRatio: "16/9" }}
      whileHover={reduce ? undefined : { scale: 1.008 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
    >
      <Image
        src={posterSrc}
        alt={posterAlt}
        fill
        className="object-cover opacity-90 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100"
        sizes="(max-width: 768px) 100vw, 55vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-tr from-zinc-950/55 via-transparent to-teal-950/25 dark:from-zinc-950/65 dark:to-teal-950/35"
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-[2px] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 group-active:scale-[0.98]">
          <Play className="ml-0.5 h-7 w-7 text-white" weight="fill" aria-hidden />
        </span>
        <p className="max-w-[34ch] text-xs font-medium leading-relaxed text-white/90">
          {caption}
        </p>
      </div>
    </motion.div>
  );
}

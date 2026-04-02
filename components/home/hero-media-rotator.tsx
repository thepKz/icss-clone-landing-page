"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HERO_MEDIA_FRAMES, heroMediaFrameUrl } from "@/lib/hero-media-frames";

const INTERVAL_MS = 6500;

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.85, ease: [0.32, 0.72, 0, 1] as const },
};

type HeroMediaRotatorProps = {
  alt: string;
  className?: string;
};

export function HeroMediaRotator({ alt, className = "" }: HeroMediaRotatorProps) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    queueMicrotask(sync);
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setInterval(
      () => setIndex((n) => (n + 1) % HERO_MEDIA_FRAMES.length),
      INTERVAL_MS
    );
    return () => window.clearInterval(t);
  }, [reduceMotion]);

  const active = reduceMotion ? 0 : index;

  if (reduceMotion) {
    return (
      <div className={`relative aspect-[4/3] w-full md:aspect-auto md:min-h-[420px] ${className}`}>
        <Image
          src={heroMediaFrameUrl(0, 1400, 933)}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/28 via-stone-800/10 to-transparent dark:from-teal-950/75 dark:via-zinc-950/25 dark:to-teal-900/10" />
        <div
          className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5"
          aria-hidden
        >
          {HERO_MEDIA_FRAMES.map((f, i) => (
            <span
              key={f.seed}
              className={`h-1 w-1 rounded-full ${i === 0 ? "w-5 bg-teal-400/90" : "bg-white/25"}`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative aspect-[4/3] w-full md:aspect-auto md:min-h-[420px] ${className}`}>
      <AnimatePresence mode="sync">
        <motion.div
          key={HERO_MEDIA_FRAMES[active].seed}
          className="absolute inset-0"
          initial={fade.initial}
          animate={fade.animate}
          exit={fade.exit}
          transition={fade.transition}
        >
          <Image
            src={heroMediaFrameUrl(active, 1400, 933)}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={active === 0}
          />
        </motion.div>
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/28 via-stone-800/10 to-transparent dark:from-teal-950/75 dark:via-zinc-950/25 dark:to-teal-900/10" />
      <div
        className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5"
        aria-hidden
      >
        {HERO_MEDIA_FRAMES.map((f, i) => (
          <span
            key={f.seed}
            className={`h-1 w-1 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              i === active ? "w-5 bg-teal-400/90" : "bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

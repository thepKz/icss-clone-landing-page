"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { picsum } from "@/lib/picsum";

const easeCurve = [0.32, 0.72, 0, 1] as const;

type PartnerTileProps = {
  name: string;
  body: string;
  imageSeed: string;
  /** Công nghệ: viền/teal mạnh hơn; kinh doanh: neutral hơn */
  tone: "tech" | "business";
  index: number;
};

export function PartnerTile({ name, body, imageSeed, tone, index }: PartnerTileProps) {
  const reduce = useReducedMotion();
  const src = picsum(imageSeed, 720, 480);
  const ringIdle =
    tone === "tech"
      ? "ring-teal-900/15 dark:ring-teal-400/20"
      : "ring-zinc-300/70 dark:ring-white/10";
  const ringHover =
    tone === "tech"
      ? "group-hover:ring-teal-700/45 dark:group-hover:ring-teal-400/50"
      : "group-hover:ring-zinc-500/45 dark:group-hover:ring-zinc-400/40";

  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -6% 0px", amount: 0.12 }}
      transition={{
        duration: 0.62,
        ease: easeCurve,
        delay: Math.min(index * 0.055, 0.38),
      }}
      className="min-w-0"
    >
      <article
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.85rem] border border-zinc-200/90 bg-white/95 shadow-[0_22px_48px_-22px_rgba(24,24,27,0.1),inset_0_1px_0_rgba(255,255,255,0.85)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform hover:-translate-y-1 hover:shadow-[0_28px_56px_-20px_rgba(24,24,27,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] active:translate-y-0 active:scale-[0.995] dark:border-white/[0.08] dark:bg-zinc-950/55 dark:shadow-[0_24px_56px_-28px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:shadow-[0_32px_64px_-24px_rgba(0,0,0,0.58),inset_0_1px_0_rgba(255,255,255,0.06)]"
      >
        <div
          className={`relative aspect-[16/10] w-full overflow-hidden ring-1 ring-inset transition-[box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${ringIdle} ${ringHover}`}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.045]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-95 dark:from-zinc-950/60"
            aria-hidden
          />
          <div className="pointer-events-none absolute left-4 top-4">
            <span className="inline-flex rounded-full border border-white/30 bg-zinc-950/65 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              {tone === "tech" ? "Công nghệ" : "Kinh doanh"}
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col border-t border-zinc-200/80 p-6 md:p-7 dark:border-white/[0.07]">
          <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-[1.0625rem]">{name}</h3>
          <p className="mt-3.5 flex-1 text-sm leading-relaxed text-muted">{body}</p>
        </div>
      </article>
    </motion.li>
  );
}

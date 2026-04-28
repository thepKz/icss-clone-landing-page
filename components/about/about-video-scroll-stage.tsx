"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "@phosphor-icons/react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type StageProps = {
  posterSrc: string;
  posterAlt: string;
  videoSrc: string;
  caption: string;
  title: string;
  subtitle: string;
  office: string;
  phone: string;
  contactHref: string;
};

function VideoInner({
  posterSrc,
  posterAlt,
  videoSrc,
  caption,
  borderRadius,
  fillViewport,
  ambientLoop,
}: {
  posterSrc: string;
  posterAlt: string;
  videoSrc: string;
  caption: string;
  borderRadius: number;
  /** Phủ full viewport (hero zoom); mặc định 16:9 cho layout card. */
  fillViewport?: boolean;
  /** Showroom: nền sống động, loop muted (trình duyệt thường yêu cầu muted để autoplay). */
  ambientLoop?: boolean;
}) {
  const reduce = useReducedMotion();
  const boxClass = fillViewport
    ? "relative h-full min-h-[100dvh] w-full overflow-hidden bg-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
    : "relative overflow-hidden bg-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]";

  if (videoSrc) {
    return (
      <div className={boxClass} style={fillViewport ? { borderRadius } : { aspectRatio: "16/9", borderRadius }}>
        <video
          className={fillViewport ? "h-full min-h-[100dvh] w-full object-cover" : "h-full w-full object-cover"}
          controls={!ambientLoop}
          playsInline
          preload="metadata"
          poster={posterSrc}
          autoPlay={ambientLoop}
          muted={ambientLoop}
          loop={ambientLoop}
        >
          <source src={videoSrc} />
        </video>
      </div>
    );
  }

  return (
    <motion.div
      className={`group overflow-hidden ${fillViewport ? "relative h-full min-h-[100dvh] w-full bg-zinc-950" : "relative bg-zinc-950"}`}
      style={
        fillViewport
          ? { borderRadius }
          : {
              aspectRatio: "16/9",
              borderRadius,
            }
      }
      whileHover={reduce || fillViewport ? undefined : { scale: 1.005 }}
      transition={{ type: "spring", stiffness: 400, damping: 35 }}
    >
      <Image
        src={posterSrc}
        alt={posterAlt}
        fill
        className="object-cover"
        sizes={fillViewport ? "100vw" : "(max-width: 768px) 100vw, min(100vw, 1200px)"}
        priority
        quality={fillViewport ? 90 : 75}
      />
      <div
        className="absolute inset-0 bg-gradient-to-tr from-zinc-950/60 via-transparent to-teal-950/20 dark:to-teal-950/30"
        aria-hidden
      />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center ${fillViewport ? "pointer-events-auto" : ""}`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-[2px] transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.32,1)] group-hover:scale-105">
          <Play className="ml-0.5 h-7 w-7 text-white" weight="fill" aria-hidden />
        </span>
        <p className="max-w-[34ch] text-xs font-medium leading-relaxed text-white/90">{caption}</p>
      </div>
    </motion.div>
  );
}

function ContactChip({ contactHref, inverted }: { contactHref: string; inverted?: boolean }) {
  if (inverted) {
    return (
      <Link
        href={contactHref}
        className="pointer-events-auto group inline-flex items-center gap-3 rounded-none border border-white/35 bg-zinc-950/55 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-[2px] transition-[transform,background-color,border-color] duration-300 ease-[cubic-bezier(0.33,1,0.32,1)] hover:border-white/55 hover:bg-zinc-950/70 active:scale-[0.99]"
      >
        Liên hệ
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
          <svg className="h-3.5 w-3.5" viewBox="0 0 256 256" fill="currentColor" aria-hidden>
            <path d="M200 64v104a8 8 0 0 1-16 0V85.66L69.66 200a8 8 0 0 1-11.32-11.32L170.34 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8z" />
          </svg>
        </span>
      </Link>
    );
  }
  return (
    <Link
      href={contactHref}
      className="group inline-flex items-center gap-3 rounded-full border border-zinc-300/90 bg-white/90 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-900 shadow-sm transition-[transform,background-color,border-color] duration-300 ease-[cubic-bezier(0.33,1,0.32,1)] hover:border-teal-700/30 hover:bg-white active:scale-[0.99] dark:border-white/12 dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:border-cyan-400/35"
    >
      Liên hệ
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300/60 bg-zinc-100/80 transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px dark:border-white/10 dark:bg-white/5">
        <svg className="h-3.5 w-3.5" viewBox="0 0 256 256" fill="currentColor" aria-hidden>
          <path d="M200 64v104a8 8 0 0 1-16 0V85.66L69.66 200a8 8 0 0 1-11.32-11.32L170.34 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8z" />
        </svg>
      </span>
    </Link>
  );
}

function AboutVideoScrollStatic({
  posterSrc,
  posterAlt,
  videoSrc,
  caption,
  title,
  subtitle,
  office,
  phone,
  contactHref,
}: StageProps) {
  return (
    <section
      id="video-gioi-thieu"
      className="scroll-mt-28 border-b border-white/10 bg-zinc-950 py-16 text-zinc-100 md:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/85">Khám phá</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
            <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-zinc-300">{subtitle}</p>
          </div>
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-[1.25rem] border border-white/[0.08]">
              <VideoInner
                posterSrc={posterSrc}
                posterAlt={posterAlt}
                videoSrc={videoSrc}
                caption={caption}
                borderRadius={16}
              />
            </div>
          </div>
          <div className="border-t border-white/[0.08] pt-8 lg:col-span-12 lg:border-t-0 lg:pt-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-300">Văn phòng</p>
            <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-zinc-300">{office}</p>
            <p className="mt-2 font-mono text-sm text-zinc-100">{phone}</p>
            <div className="mt-6">
              <ContactChip contactHref={contactHref} inverted />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Chia heading thành 2 dòng (kiểu line-mask / base-heading trên fluid.glass). */
function splitHeadingTwoLines(text: string): [string, string] {
  const t = text.trim();
  const dash = t.indexOf(" — ");
  if (dash > 0) {
    return [t.slice(0, dash).trim(), t.slice(dash + 3).trim()];
  }
  const words = t.split(/\s+/).filter(Boolean);
  if (words.length <= 1) return [t, ""];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

function AboutVideoScrollDesktop(props: StageProps) {
  const {
    posterSrc,
    posterAlt,
    videoSrc,
    caption,
    title,
    subtitle,
    office,
    phone,
    contactHref,
  } = props;

  const leadLine = subtitle.includes("—") ? subtitle.split("—")[0].trim() : subtitle;
  const [headLine1, headLine2] = splitHeadingTwoLines(leadLine);

  /**
   * Track 200vh trong document, viewport chỉ thấy 100dvh (sticky).
   * progress 0→1 trong khoảng cuộn khi block đang “ghim” (đáy track trùng đáy viewport).
   */
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTrackRef,
    offset: ["start start", "end end"],
  });

  const borderScaleX = useTransform(scrollYProgress, [0, 0.14], [0, 1]);
  const colShift = useTransform(scrollYProgress, [0, 1], [0, 56]);
  const colLeftX = colShift;
  const colRightX = useTransform(colShift, (v) => -v);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [0.55, 1]);
  const mediaOpacity = useTransform(scrollYProgress, [0, 0.12, 1], [0.72, 0.88, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const scrimOpacity = useTransform(scrollYProgress, [0, 0.55, 1], [0.88, 0.62, 0.52]);

  const mediaDriftY = useTransform(scrollYProgress, [0, 1], [26, -40]);
  const mediaInnerScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const headParallaxY = useTransform(scrollYProgress, [0, 1], [10, -28]);
  const rightParallaxY = useTransform(scrollYProgress, [0, 1], [-8, 32]);
  const topBarParallaxY = useTransform(scrollYProgress, [0, 1], [6, -14]);

  return (
    <div
      id="video-gioi-thieu"
      ref={scrollTrackRef}
      className="relative flex w-full scroll-mt-28 flex-col bg-zinc-950 text-zinc-100"
      data-showroom-scroll-track=""
    >
      <section
        className="sticky top-0 z-10 h-[100dvh] min-h-[100dvh] max-h-[100dvh] w-full overflow-hidden bg-zinc-950"
        aria-label={`${title} — video giới thiệu`}
      >
        {/** Layer video: bắt đầu nhỏ (scale thấp) → cuộn xuống phóng full; khung = viewport để thấy rõ “thẻ” rồi nở ra. */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-0 h-[100dvh] w-[100vw] max-w-none origin-center bg-zinc-950 will-change-transform pointer-events-auto"
          style={{
            x: "-50%",
            y: "-50%",
            scale: mediaScale,
            opacity: mediaOpacity,
          }}
        >
          <motion.div
            className="h-full w-full overflow-hidden bg-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] will-change-transform"
            style={{
              borderRadius: radius,
              y: mediaDriftY,
              scale: mediaInnerScale,
            }}
          >
            <VideoInner
              posterSrc={posterSrc}
              posterAlt={posterAlt}
              videoSrc={videoSrc}
              caption={caption}
              borderRadius={0}
              fillViewport
              ambientLoop={Boolean(videoSrc)}
            />
          </motion.div>
        </motion.div>

        {/** Lớp phủ đọc chữ — luôn gradient tối + chữ trắng (không phụ thuộc theme trang). */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/78 via-black/40 to-black/65"
          style={{ opacity: scrimOpacity }}
          aria-hidden
        />

        {/** Chữ chồng lên video, căn giữa theo chiều dọc — pointer-events-none để không chặn tương tác video (chỉ CTA bật lại). */}
        <motion.div
          className="pointer-events-none relative z-10 mx-auto flex h-full max-w-[1400px] flex-col px-4 md:px-8"
          style={{ y: topBarParallaxY }}
        >
          <h2 className="shrink-0 pt-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75 md:pt-10">
            {title}
          </h2>
          <motion.div
            className="mt-6 h-px w-full max-w-full origin-left bg-white/35"
            style={{ scaleX: borderScaleX }}
            aria-hidden
          />

          <div className="flex min-h-0 flex-1 flex-col justify-center py-8 min-[900px]:py-10">
            <div className="grid grid-cols-1 items-center gap-10 min-[900px]:grid-cols-12 min-[900px]:gap-6">
              <motion.div
                className="max-w-xl min-[900px]:col-span-5"
                style={{ x: colLeftX, y: headParallaxY }}
              >
                <p
                  className="text-pretty text-2xl font-semibold leading-[1.18] tracking-tight text-white md:text-[1.65rem] lg:text-[1.78rem]"
                  aria-label={leadLine}
                >
                  <span className="block overflow-hidden">
                    <span className="block">{headLine1}</span>
                  </span>
                  {headLine2 ? (
                    <span className="mt-1 block overflow-hidden">
                      <span className="block">{headLine2}</span>
                    </span>
                  ) : null}
                </p>
              </motion.div>

              <div className="hidden min-[900px]:col-span-2 min-[900px]:block" aria-hidden />

              <motion.div
                className="max-w-md min-[900px]:col-span-5 min-[900px]:justify-self-end min-[900px]:text-right"
                style={{ x: colRightX, y: rightParallaxY }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">Văn phòng</p>
                <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-white/90 min-[900px]:ml-auto">{office}</p>
                <p className="mt-3 font-mono text-xs tabular-nums text-white">{phone}</p>
                <div className="mt-8 min-[900px]:flex min-[900px]:justify-end">
                  <ContactChip contactHref={contactHref} inverted />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      {/** Nửa dưới của “đường ray” scroll: cùng dvh với sticky để không lệch vh/dvh + luôn có nền zinc-950 (tránh khe trắng). */}
      <div className="min-h-[100dvh] shrink-0 bg-zinc-950" aria-hidden />
    </div>
  );
}

export function AboutVideoScrollStage(props: StageProps) {
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<"static" | "scroll">("static");

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const apply = () => {
      if (reduce) {
        setMode("static");
        return;
      }
      setMode(mq.matches ? "scroll" : "static");
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [reduce]);

  if (mode === "static") {
    return <AboutVideoScrollStatic {...props} />;
  }

  return <AboutVideoScrollDesktop {...props} />;
}

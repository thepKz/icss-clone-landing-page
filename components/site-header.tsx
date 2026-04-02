"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CaretDown, List, X } from "@phosphor-icons/react";
import {
  company,
  navMegaAbout,
  navMegaConsult,
  navMegaProducts,
  type NavMegaItem,
  type NavItem,
} from "@/content/site";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

const spring = { type: "spring" as const, stiffness: 320, damping: 28 };

const megaPanelEase = [0.32, 0.72, 0, 1] as const;

const megaPanelEnter = {
  duration: 0.2,
  ease: megaPanelEase,
};

const megaPanelExit = {
  duration: 0.14,
  ease: megaPanelEase,
};

function NavLink({
  item,
  solid,
  className = "",
}: {
  item: NavItem;
  solid: boolean;
  className?: string;
}) {
  return (
    <Link
      href={item.href}
      className={`relative z-0 shrink-0 rounded-full px-2 py-1.5 text-[13px] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] lg:px-2.5 xl:px-3 xl:text-sm ${className} ${
        solid
          ? "text-zinc-700 hover:bg-zinc-100/90 dark:text-zinc-200 dark:hover:bg-white/5"
          : "text-zinc-800 hover:bg-zinc-900/6 dark:text-zinc-100/90 dark:hover:bg-white/10"
      }`}
    >
      {item.label}
    </Link>
  );
}

function MegaLink({
  item,
  onPick,
}: {
  item: NavMegaItem;
  onPick: () => void;
}) {
  const body = (
    <>
      <span className="block font-semibold text-zinc-900 dark:text-zinc-50">
        {item.label}
      </span>
      <span className="mt-0.5 block text-[13px] leading-snug text-zinc-500 dark:text-zinc-400">
        {item.description}
      </span>
    </>
  );
  const cls =
    "block rounded-xl px-3 py-2.5 transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-teal-50 hover:text-teal-950 dark:hover:bg-white/[0.06] dark:hover:text-white";
  if (item.external) {
    return (
      <a
        href={item.href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onPick}
      >
        {body}
      </a>
    );
  }
  return (
    <Link href={item.href} className={cls} onClick={onPick}>
      {body}
    </Link>
  );
}

function NavMega({
  id,
  label,
  items,
  menuOpen,
  setMenuOpen,
  solid,
}: {
  id: string;
  label: string;
  items: NavMegaItem[];
  menuOpen: string | null;
  setMenuOpen: Dispatch<SetStateAction<string | null>>;
  solid: boolean;
}) {
  const open = menuOpen === id;
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (!closeTimeoutRef.current) return;
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = null;
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  return (
    <div
      className="relative z-[55] shrink-0"
      onMouseEnter={() => {
        clearCloseTimer();
        setMenuOpen(id);
      }}
      onMouseLeave={() => {
        clearCloseTimer();
        closeTimeoutRef.current = setTimeout(() => {
          setMenuOpen((current) => (current === id ? null : current));
        }, 200);
      }}
    >
      <button
        type="button"
        onClick={() => {
          clearCloseTimer();
          setMenuOpen(open ? null : id);
        }}
        className={`inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-[13px] font-semibold transition-[background-color,box-shadow,color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] lg:px-2.5 xl:px-3 xl:text-sm ${
          open
            ? "bg-zinc-950 text-white shadow-[0_12px_30px_-16px_rgba(0,0,0,0.45)] dark:bg-teal-400 dark:text-teal-950 dark:shadow-[0_14px_34px_-18px_rgba(45,212,191,0.20)]"
            : solid
              ? "text-zinc-700 hover:bg-zinc-100/90 dark:text-zinc-200 dark:hover:bg-white/5"
              : "text-zinc-800 hover:bg-zinc-900/6 dark:text-zinc-100/90 dark:hover:bg-white/10"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={`nav-panel-${id}`}
      >
        {label}
        <CaretDown
          className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            open ? "-rotate-180" : ""
          }`}
          weight="bold"
          aria-hidden
        />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            key={`nav-panel-${id}`}
            id={`nav-panel-${id}`}
            className="absolute left-0 top-full z-[60] w-[min(calc(100vw-2rem),22rem)] pt-2 lg:w-[min(100vw-4rem,26rem)]"
            style={{ transformOrigin: "0 0", willChange: "transform, opacity" }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0, transition: megaPanelEnter }}
            exit={{
              opacity: 0,
              y: 4,
              pointerEvents: "none",
              transition: megaPanelExit,
            }}
            onMouseEnter={() => {
              clearCloseTimer();
              setMenuOpen(id);
            }}
            onMouseLeave={() => {
              clearCloseTimer();
              closeTimeoutRef.current = setTimeout(() => {
                setMenuOpen((current) => (current === id ? null : current));
              }, 200);
            }}
            role="region"
            aria-label={label}
          >
            <div className="rounded-2xl border border-zinc-200/80 bg-white/92 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_20px_50px_-14px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-white/12 dark:bg-zinc-950/90 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_56px_-14px_rgba(0,0,0,0.5)] dark:backdrop-blur-xl">
              <ul className="max-h-[min(70dvh,28rem)] space-y-0.5 overflow-y-auto overscroll-contain py-0.5">
                {items.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <MegaLink item={item} onPick={() => setMenuOpen(null)} />
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

const overlayVariants = {
  closed: { opacity: 0, pointerEvents: "none" as const },
  open: { opacity: 1, pointerEvents: "auto" as const },
};

const panelVariants = {
  closed: { opacity: 0, y: 12, pointerEvents: "none" as const },
  open: {
    opacity: 1,
    y: 0,
    pointerEvents: "auto" as const,
    transition: { type: "spring" as const, stiffness: 240, damping: 36 },
  },
};

const mobileItemVariants = {
  closed: { opacity: 0, y: 12 },
  open: (i?: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 240,
      damping: 34,
      delay: (i ?? 0) * 0.03,
    },
  }),
};

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When the mobile menu is open, prevent scrolling the background page.
  // The menu itself remains scrollable (but without visible scrollbars).
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      // If the original value was an empty string, restore to a sensible default.
      document.body.style.overflow = prevOverflow === "" ? "auto" : prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (headerRef.current?.contains(target)) return;
      setMenuOpen(null);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(null);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const solid = scrolled || open;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 overflow-visible"
      ref={headerRef}
    >
      <div
        className={`mx-auto mt-2 flex max-w-[1400px] items-center justify-between gap-3 overflow-visible rounded-xl border px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-xl transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:px-7 md:py-4 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${
          solid
            ? "border-zinc-200/85 bg-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_14px_36px_-18px_rgba(15,23,42,0.14)] dark:border-white/12 dark:bg-zinc-950/86 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_42px_-22px_rgba(0,0,0,0.48)]"
            : "border-zinc-200/55 bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_10px_36px_-16px_rgba(15,23,42,0.09)] dark:border-white/8 dark:bg-zinc-950/62 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_14px_40px_-20px_rgba(0,0,0,0.42)]"
        }`}
      >
        <Link
          href="/"
          className="group flex shrink-0 items-baseline gap-2 text-left transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
        >
          <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
            {company.brand}
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 xl:inline">
            Security
          </span>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center overflow-visible py-1 lg:flex"
          aria-label="Chính"
        >
          <div className="flex w-max items-center gap-0.5 px-3 py-0.5">
            <NavLink item={{ href: "/", label: "Trang chủ" }} solid={solid} />
            <NavMega
              id="about"
              label="Về chúng tôi"
              items={navMegaAbout}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              solid={solid}
            />
            <Link
              href="/#doi-tac"
              className={`shrink-0 rounded-full px-2 py-1.5 text-[13px] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] lg:px-2.5 xl:px-3 xl:text-sm ${
                solid
                  ? "text-zinc-700 hover:bg-zinc-100/90 dark:text-zinc-200 dark:hover:bg-white/5"
                  : "text-zinc-800 hover:bg-zinc-900/6 dark:text-zinc-100/90 dark:hover:bg-white/10"
              }`}
            >
              Đối tác
            </Link>
            <NavMega
              id="consult"
              label="Tư vấn"
              items={navMegaConsult}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              solid={solid}
            />
            <NavMega
              id="products"
              label="Sản phẩm"
              items={navMegaProducts}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              solid={solid}
            />
            <NavLink item={{ href: "/articles", label: "Tin tức" }} solid={solid} />
            <NavLink item={{ href: "/tuyen-dung", label: "Tuyển dụng" }} solid={solid} />
            <NavLink item={{ href: "/lien-he", label: "Liên hệ" }} solid={solid} />
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/lien-he"
            className="group hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-teal-700 px-3 py-2 pl-4 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(13,148,136,0.28)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-teal-800 active:translate-y-px active:scale-[0.98] dark:bg-teal-500 dark:text-teal-950 dark:shadow-[0_12px_32px_-12px_rgba(45,212,191,0.22)] dark:hover:bg-teal-400 sm:inline-flex"
          >
            Tư vấn
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 dark:bg-teal-950/20">
              <ArrowRight className="h-3.5 w-3.5" weight="bold" aria-hidden />
            </span>
          </Link>
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex rounded-full border border-zinc-300/80 p-2 text-zinc-800 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-zinc-100 dark:border-white/10 dark:text-zinc-100 dark:hover:bg-white/5 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} weight="regular" /> : <List size={22} weight="regular" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-x-0 top-[73px] bottom-0 z-40 lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            transition={spring}
          >
            <button
              type="button"
              aria-label="Đóng menu"
              className="absolute inset-0 bg-zinc-900/25 backdrop-blur-md dark:bg-zinc-950/85 dark:backdrop-blur-2xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              variants={panelVariants}
              className="relative flex h-[calc(100dvh-73px)] w-full flex-col overflow-hidden border border-white/5 bg-white/60 p-0 shadow-[0_24px_56px_-20px_rgba(15,23,42,0.14)] rounded-none dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_28px_64px_-24px_rgba(0,0,0,0.45)]"
            >
              <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain touch-pan-y rounded-none border border-white/10 bg-white/95 p-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden dark:border-white/10 dark:bg-zinc-950/95">
                <motion.div variants={mobileItemVariants}>
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-base font-medium text-zinc-900 dark:text-zinc-100"
                  >
                    Trang chủ
                  </Link>
                </motion.div>

                <div className="mt-6 border-t border-zinc-200/80 pt-6 dark:border-white/10">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Về chúng tôi
                  </p>
                  <ul className="mt-3 space-y-1">
                    {navMegaAbout.map((item, idx) => (
                      <motion.li
                        key={`${item.href}-${item.label}`}
                        custom={idx}
                        variants={mobileItemVariants}
                      >
                        <MegaLink item={item} onPick={() => setOpen(false)} />
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  variants={mobileItemVariants}
                  custom={0}
                  className="mt-6 border-t border-zinc-200/80 pt-6 dark:border-white/10"
                >
                  <Link
                    href="/#doi-tac"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-base text-zinc-800 dark:text-zinc-200"
                  >
                    Đối tác
                  </Link>
                </motion.div>

                <div className="mt-6 border-t border-zinc-200/80 pt-6 dark:border-white/10">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Tư vấn
                  </p>
                  <ul className="mt-3 space-y-1">
                    {navMegaConsult.map((item, idx) => (
                      <motion.li
                        key={`${item.href}-${item.label}`}
                        custom={idx}
                        variants={mobileItemVariants}
                      >
                        <MegaLink item={item} onPick={() => setOpen(false)} />
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-zinc-200/80 pt-6 dark:border-white/10">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Sản phẩm
                  </p>
                  <ul className="mt-3 space-y-1">
                    {navMegaProducts.map((item, idx) => (
                      <motion.li
                        key={`${item.href}-${item.label}`}
                        custom={idx}
                        variants={mobileItemVariants}
                      >
                        <MegaLink item={item} onPick={() => setOpen(false)} />
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 grid gap-1 border-t border-zinc-200/80 pt-6 dark:border-white/10">
                {(
                  [
                    { href: "/articles", label: "Tin tức" },
                    { href: "/tuyen-dung", label: "Tuyển dụng" },
                    { href: "/lien-he", label: "Liên hệ" },
                  ] satisfies NavItem[]
                ).map((item, idx) => (
                  <motion.div
                    key={item.href}
                    variants={mobileItemVariants}
                    custom={idx}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-base text-zinc-800 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-zinc-100 hover:text-teal-800 dark:text-zinc-200 dark:hover:bg-white/5 dark:hover:text-teal-200"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                </div>

                <div className="mt-8 border-t border-zinc-200/80 pt-6 dark:border-white/10">
                  <LanguageSwitcher
                    variant="sheet"
                    onPick={() => setOpen(false)}
                  />
                </div>

                <div className="mt-8 border-t border-zinc-200/80 pt-6 dark:border-white/10">
                  <Link
                    href="/lien-he"
                    onClick={() => setOpen(false)}
                    className="mb-4 flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 py-3 text-base font-semibold text-white shadow-[0_12px_32px_-12px_rgba(13,148,136,0.26)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] dark:bg-teal-500 dark:text-teal-950"
                  >
                    Tư vấn ngay
                    <ArrowRight className="h-5 w-5" weight="bold" aria-hidden />
                  </Link>
                  <a
                    href={company.smartDashboard}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="mt-1 block rounded-xl px-3 py-2.5 text-base text-zinc-800 hover:bg-zinc-100 hover:text-teal-800 dark:text-zinc-200 dark:hover:bg-white/5 dark:hover:text-teal-200"
                  >
                    Smart Dashboard
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Tight spring: quick settle, minimal overshoot on mobile scroll reveals */
const spring = { type: "spring" as const, stiffness: 300, damping: 40 };

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  once?: boolean;
  /** Above-the-fold: skip enter motion to avoid layout shift on first paint */
  eager?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 12,
  x = 0,
  once = true,
  eager = false,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce || eager) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px", amount: 0.2 }}
      transition={{ ...spring, delay }}
    >
      {children}
    </motion.div>
  );
}

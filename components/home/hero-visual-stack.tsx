"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const springHero = { type: "spring" as const, stiffness: 100, damping: 22, mass: 0.92 };

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.085, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: springHero,
  },
};

type HeroVisualStackProps = {
  media: ReactNode;
  metaLine: ReactNode;
  panel: ReactNode;
  className?: string;
};

export function HeroVisualStack({ media, metaLine, panel, className }: HeroVisualStackProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className}>
        {media}
        {metaLine}
        {panel}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants} className="w-full">
        {media}
      </motion.div>
      <motion.div variants={itemVariants} className="w-full">
        {metaLine}
      </motion.div>
      <motion.div variants={itemVariants} className="relative z-[3] w-full overflow-visible">
        {panel}
      </motion.div>
    </motion.div>
  );
}

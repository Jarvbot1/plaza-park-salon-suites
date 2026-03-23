"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

const container = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: {
      staggerChildren: stagger,
    },
  }),
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.165, 0.85, 0.45, 1] as [number, number, number, number],
    },
  },
};

export function StaggerGrid({
  children,
  className = "",
  stagger = 0.1,
}: StaggerGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

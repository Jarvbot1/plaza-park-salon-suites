"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.165, 0.85, 0.45, 1] }}
      className={`bg-white/80 backdrop-blur-xl border border-brand-green/10 rounded-2xl p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}

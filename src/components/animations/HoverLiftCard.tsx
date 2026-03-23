"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HoverLiftCardProps {
  children: ReactNode;
  className?: string;
}

export function HoverLiftCard({ children, className = "" }: HoverLiftCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(120, 140, 93, 0.12)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
      className={`bg-white rounded-2xl p-8 shadow-card border border-[rgba(0,0,0,0.08)] cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
}

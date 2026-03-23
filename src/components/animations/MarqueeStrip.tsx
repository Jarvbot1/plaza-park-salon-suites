"use client";

import { motion } from "framer-motion";

interface MarqueeStripProps {
  items: string[];
  separator?: string;
  speed?: number;
  className?: string;
}

export function MarqueeStrip({
  items,
  separator = "✦",
  speed = 40,
  className = "",
}: MarqueeStripProps) {
  const content = items.join(` ${separator} `) + ` ${separator} `;

  return (
    <div
      className={`bg-brand-green text-white overflow-hidden py-4 ${className}`}
    >
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex shrink-0"
        >
          <span className="font-heading text-lg font-semibold tracking-wide px-2">
            {content}
          </span>
          <span className="font-heading text-lg font-semibold tracking-wide px-2">
            {content}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

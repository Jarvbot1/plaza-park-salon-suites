"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  bgImage?: string;
  overlay?: boolean;
}

export function ParallaxSection({
  children,
  speed = 0.15,
  className = "",
  bgImage,
  overlay = true,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {bgImage && (
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-[-20%] z-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          {overlay && (
            <div className="absolute inset-0 bg-brand-dark/60" />
          )}
        </motion.div>
      )}
      <motion.div style={{ y }} className="relative z-10">
        {children}
      </motion.div>
    </div>
  );
}

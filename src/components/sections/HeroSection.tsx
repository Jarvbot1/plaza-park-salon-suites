"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TextClipReveal from "@/components/animations/TextClipReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Arrow } from "@/components/Arrow";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/suites/suite-natural-light.jpg"
        alt="Private salon suite with natural light at Plaza Park Salon Suites"
        fill
        priority
        className="object-cover"
      />

      {/* Dark green overlay gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26, 46, 26, 0.4) 0%, rgba(26, 46, 26, 0.7) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-32 max-w-[1000px]">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body uppercase text-xs tracking-[0.12em] text-white/70 mb-8"
        >
          PLAZA PARK SALON SUITES — IRVING, TX
        </motion.p>

        <TextClipReveal
          className="font-heading text-white text-[clamp(3rem,7vw,6rem)] tracking-[-0.03em] leading-[1.1] mb-12"
          delay={0.3}
        >
          {"Forty private suites.\nCanal views.\nYour name on the door."}
        </TextClipReveal>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-green text-white rounded-md px-8 py-4 font-body font-medium text-base tracking-wide hover:bg-brand-green-hover active:scale-[0.98] transition-all duration-300"
            >
              Schedule a Tour
              <Arrow />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

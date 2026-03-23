"use client";

import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const stats = [
  { target: 15, suffix: "+", label: "Independent Specialists" },
  { target: 40, suffix: "", label: "Private Suites" },
  { target: 10, suffix: "+", label: "Years Serving Irving" },
  { target: 5, suffix: ".0★", label: "Booksy Rating" },
];

export function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.15}>
              <div className="text-center">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  className="text-5xl sm:text-6xl text-brand-cream block mb-2"
                />
                <p className="font-mono text-xs tracking-[0.1em] uppercase text-brand-green-light">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

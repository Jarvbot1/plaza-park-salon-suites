"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerGrid, staggerItem } from "@/components/animations/StaggerGrid";
import { HoverLiftCard } from "@/components/animations/HoverLiftCard";
import { motion } from "framer-motion";
import { Key, Paintbrush, TreePine, DollarSign, CarFront, Users } from "lucide-react";

const reasons = [
  {
    icon: Key,
    title: "Your Own Private Suite",
    description: "Lockable, customizable, 100% yours. Build the business you envision.",
  },
  {
    icon: Paintbrush,
    title: "Move-In Ready",
    description: "Fully equipped with appliances included. Start earning from day one.",
  },
  {
    icon: TreePine,
    title: "Canal Views",
    description: "Natural lighting with exterior-facing suites overlooking the canal.",
  },
  {
    icon: DollarSign,
    title: "Flexible Terms",
    description: "No long-term contracts required. Month-to-month options available.",
  },
  {
    icon: CarFront,
    title: "Free Parking",
    description: "Convenient lot access for you and your clients. No meters, no hassle.",
  },
  {
    icon: Users,
    title: "Growing Community",
    description: "Join 15+ independent beauty professionals in a collaborative space.",
  },
];

export function WhyLeaseSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-brand-green mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-brand-text tracking-[-0.01em]">
              Why Lease With Us
            </h2>
          </div>
        </ScrollReveal>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={staggerItem}>
              <HoverLiftCard>
                <reason.icon size={28} className="text-brand-green mb-4" />
                <h3 className="font-heading font-semibold text-xl text-brand-text mb-2">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-brand-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </HoverLiftCard>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

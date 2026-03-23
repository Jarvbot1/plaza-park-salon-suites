"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerGrid, staggerItem } from "@/components/animations/StaggerGrid";
import { HoverLiftCard } from "@/components/animations/HoverLiftCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { Scissors, Brush, Sparkles, Eye, Grid3X3, Hand, Heart, Stethoscope, Flower2 } from "lucide-react";

const services = [
  { name: "Hair Care", icon: Scissors, slug: "hair-care" },
  { name: "Barber", icon: Brush, slug: "barber" },
  { name: "Skin Care", icon: Sparkles, slug: "skin-care" },
  { name: "Lash Extensions", icon: Eye, slug: "lash-extensions" },
  { name: "Braiding", icon: Grid3X3, slug: "braiding" },
  { name: "Waxing", icon: Hand, slug: "waxing" },
  { name: "Makeup", icon: Flower2, slug: "makeup" },
  { name: "Chiropractor", icon: Stethoscope, slug: "chiropractor" },
  { name: "Massage", icon: Heart, slug: "massage" },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-brand-green mb-4 block">
              What We Offer
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-brand-text tracking-[-0.01em]">
              Services at Plaza Park
            </h2>
          </div>
        </ScrollReveal>

        <StaggerGrid className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {services.map((service) => (
            <motion.div key={service.slug} variants={staggerItem}>
              <Link href={`/services/${service.slug}`}>
                <HoverLiftCard className="text-center !p-6">
                  <service.icon size={24} className="text-brand-green mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-base text-brand-text">
                    {service.name}
                  </h3>
                </HoverLiftCard>
              </Link>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

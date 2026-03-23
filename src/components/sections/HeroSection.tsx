"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-cream via-brand-surface to-brand-green-muted/30 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #788c5d 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          {/* Overline */}
          <ScrollReveal delay={0.1}>
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-brand-green mb-6 block">
              Premium Salon Suites in Irving, TX
            </span>
          </ScrollReveal>

          {/* Headline */}
          <TextReveal
            text="Your Beauty Business Starts Here"
            as="h1"
            className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-brand-text tracking-[-0.02em] leading-[1.1] mb-8"
            delay={0.3}
          />

          {/* Subtitle */}
          <ScrollReveal delay={0.8}>
            <p className="font-body text-lg sm:text-xl text-brand-text-secondary leading-relaxed max-w-xl mb-6">
              Premium private salon suites in Irving, TX.
              Move-in ready. Appliances included. Canal views.
            </p>
          </ScrollReveal>

          {/* Signing Bonus Badge */}
          <ScrollReveal delay={1.0}>
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full px-5 py-2.5 mb-8">
              <span className="text-xl">🎉</span>
              <span className="font-body font-semibold text-brand-accent text-sm">
                4 Weeks Free Signing Bonus
              </span>
            </div>
          </ScrollReveal>

          {/* Address */}
          <ScrollReveal delay={1.1}>
            <div className="flex items-center gap-2 text-brand-text-secondary mb-10">
              <MapPin size={16} className="text-brand-green shrink-0" />
              <span className="font-body text-sm">
                9425 N MacArthur Blvd, Suite 150, Irving, TX 75063
              </span>
            </div>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={1.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-brand-green text-white rounded-2xl px-8 py-3.5 font-body font-medium hover:bg-brand-green-hover active:scale-[0.98] transition-all duration-300 text-center"
                >
                  Schedule a Tour
                </Link>
              </MagneticButton>
              <a
                href="tel:4699178050"
                className="inline-flex items-center justify-center gap-2 border border-brand-green text-brand-green rounded-2xl px-8 py-3.5 font-body font-medium hover:bg-brand-green/10 transition-all duration-300 text-center"
              >
                <Phone size={16} />
                Call (469) 917-8050
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:block">
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-40 w-48 h-48 bg-brand-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}

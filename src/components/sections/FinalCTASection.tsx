"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function FinalCTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-dark overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #788c5d 1px, transparent 0)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-brand-green-light mb-6 block">
            Start Today
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-cream tracking-[-0.02em] mb-6">
            Your Dream Suite Is Waiting
          </h2>
          <p className="font-body text-lg text-brand-cream/70 max-w-xl mx-auto mb-4">
            4 Weeks Free signing bonus. Suites going fast in Valley Ranch.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-green text-white rounded-2xl px-8 py-3.5 font-body font-medium hover:bg-brand-green-hover active:scale-[0.98] transition-all duration-300"
              >
                Schedule a Tour
              </Link>
            </MagneticButton>
            <a
              href="tel:4699178050"
              className="inline-flex items-center justify-center gap-2 border border-brand-cream/20 text-brand-cream rounded-2xl px-8 py-3.5 font-body font-medium hover:bg-brand-cream/10 transition-all duration-300"
            >
              <Phone size={16} />
              Call (469) 917-8050
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-brand-cream/50 text-sm font-body">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-brand-green-light" />
              9425 N MacArthur Blvd, Suite 150, Irving, TX 75063
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-brand-green-light" />
              valleyranchsuitetours@gmail.com
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

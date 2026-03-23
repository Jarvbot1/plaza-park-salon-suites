"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export function BrandiSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <ScrollReveal direction="left">
            <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 bg-brand-surface-alt rounded-3xl border border-brand-green/10 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto bg-brand-green/10 rounded-full flex items-center justify-center mb-6">
                  <span className="font-heading text-5xl font-bold text-brand-green">
                    BW
                  </span>
                </div>
                <p className="font-body text-sm text-brand-text-muted">
                  Professional headshot coming soon
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-brand-green mb-4 block">
              Your Point of Contact
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-brand-text tracking-[-0.01em] mb-2">
              Meet Your Property Manager
            </h2>
            <h3 className="font-heading font-semibold text-2xl text-brand-green mb-6">
              Brandi Williams
            </h3>
            <p className="font-body text-brand-text-secondary leading-relaxed mb-4">
              Brandi manages Plaza Park Salon Suites and is also a practicing
              beauty professional (Picasso the illestrator, Suite 39). She
              understands what independent professionals need because she IS one.
            </p>
            <p className="font-body text-brand-text-secondary leading-relaxed mb-8">
              Whether you&apos;re looking for your first suite or relocating your
              established business, Brandi will personally walk you through
              available spaces and help you find the perfect fit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:4699178050"
                className="inline-flex items-center gap-2 text-brand-text-secondary hover:text-brand-green transition-colors"
              >
                <Phone size={16} className="text-brand-green" />
                <span className="font-body text-sm">(469) 917-8050</span>
              </a>
              <a
                href="mailto:valleyranchsuitetours@gmail.com"
                className="inline-flex items-center gap-2 text-brand-text-secondary hover:text-brand-green transition-colors"
              >
                <Mail size={16} className="text-brand-green" />
                <span className="font-body text-sm">
                  valleyranchsuitetours@gmail.com
                </span>
              </a>
            </div>

            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-green text-white rounded-2xl px-8 py-3.5 font-body font-medium hover:bg-brand-green-hover active:scale-[0.98] transition-all duration-300"
              >
                Schedule a Tour with Brandi →
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

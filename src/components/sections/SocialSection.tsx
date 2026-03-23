"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Facebook } from "lucide-react";

export function SocialSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-surface-alt">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="font-mono text-xs tracking-[0.15em] uppercase text-brand-green mb-4 block">
            Stay Connected
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-brand-text tracking-[-0.01em] mb-6">
            Follow Us
          </h2>
          <p className="font-body text-brand-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Stay updated with the latest from Plaza Park Salon Suites. See new suite
            openings, community events, and behind-the-scenes moments.
          </p>
        </ScrollReveal>

        {/* Social grid placeholder */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-brand-green/5 rounded-xl border border-brand-green/10 flex items-center justify-center"
              >
                <span className="font-mono text-xs text-brand-text-muted">Photo</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <a
            href="https://www.facebook.com/p/Plaza-Park-Salon-Suites-2-100068373005781/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-green text-white rounded-2xl px-8 py-3.5 font-body font-medium hover:bg-brand-green-hover active:scale-[0.98] transition-all duration-300"
          >
            <Facebook size={18} />
            Follow on Facebook
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

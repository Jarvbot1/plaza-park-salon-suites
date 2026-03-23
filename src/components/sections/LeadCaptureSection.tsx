"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GlassCard } from "@/components/animations/GlassCard";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { useState } from "react";

const professions = [
  "Hair Stylist",
  "Barber",
  "Esthetician",
  "Lash Technician",
  "Nail Technician",
  "Massage Therapist",
  "Makeup Artist",
  "Braider",
  "Chiropractor",
  "Other",
];

export function LeadCaptureSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-brand-green mb-4 block">
              Get Started
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-brand-text tracking-[-0.01em] mb-4">
              Ready to See Your New Suite?
            </h2>
            <p className="font-body text-brand-text-secondary text-lg">
              Schedule a tour with Brandi and explore available suites.
            </p>
          </div>
        </ScrollReveal>

        <GlassCard className="max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center py-8">
              <p className="font-heading text-2xl font-semibold text-brand-green mb-2">
                Thank you!
              </p>
              <p className="font-body text-brand-text-secondary">
                We&apos;ll be in touch within 24 hours to schedule your tour.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brand-green/20 bg-white/60 font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 placeholder:text-brand-text-muted"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brand-green/20 bg-white/60 font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 placeholder:text-brand-text-muted"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border border-brand-green/20 bg-white/60 font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 placeholder:text-brand-text-muted"
                />
                <select
                  className="w-full px-4 py-3 rounded-xl border border-brand-green/20 bg-white/60 font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 text-brand-text-muted"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Your Profession
                  </option>
                  {professions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <MagneticButton className="w-full">
                <button
                  type="submit"
                  className="w-full bg-brand-green text-white rounded-2xl px-8 py-3.5 font-body font-medium hover:bg-brand-green-hover active:scale-[0.98] transition-all duration-300"
                >
                  Get Suite Info →
                </button>
              </MagneticButton>
            </form>
          )}
        </GlassCard>
      </div>
    </section>
  );
}

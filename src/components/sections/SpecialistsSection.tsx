"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverLiftCard } from "@/components/animations/HoverLiftCard";
import Link from "next/link";

const specialists = [
  { name: "Adrianna Moore", business: "Riribydesign", suite: 1, service: "Hair Care", initials: "AM", color: "bg-pink-100 text-pink-700" },
  { name: "Jackie Dinh", business: "Jackie's Hair Studio", suite: "24-26", service: "Hair Care", initials: "JD", color: "bg-purple-100 text-purple-700" },
  { name: "Leonor", business: "Glow Up Studio", suite: 15, service: "Skin Care", initials: "L", color: "bg-green-100 text-green-700" },
  { name: "Sheverrick", business: "Shevythabarber", suite: 42, service: "Barber", initials: "S", color: "bg-blue-100 text-blue-700" },
  { name: "Amanda Kinder", business: "Galaxy Hair Galleries", suite: 16, service: "Hair Care", initials: "AK", color: "bg-amber-100 text-amber-700" },
  { name: "Brandi A. Williams", business: "Picasso the illestrator", suite: 39, service: "Beauty", initials: "BW", color: "bg-emerald-100 text-emerald-700" },
  { name: "Tavion Bryant", business: "Benevolence", suite: 2, service: "Barber", initials: "TB", color: "bg-indigo-100 text-indigo-700" },
  { name: "Morgan", business: "Lash Aesthetics Artistry", suite: 12, service: "Lash Extensions", initials: "M", color: "bg-rose-100 text-rose-700" },
];

export function SpecialistsSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-surface-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-brand-green mb-4 block">
              Our Community
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-brand-text tracking-[-0.01em]">
              Our Professionals
            </h2>
          </div>
        </ScrollReveal>

        {/* Horizontal scrolling cards */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide -mx-6 px-6 snap-x snap-mandatory">
          {specialists.map((spec, i) => (
            <ScrollReveal key={spec.name} delay={i * 0.1} className="shrink-0 w-72 snap-start">
              <HoverLiftCard className="h-full">
                <div className={`w-16 h-16 rounded-full ${spec.color} flex items-center justify-center mb-4`}>
                  <span className="font-heading font-bold text-xl">
                    {spec.initials}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-brand-text mb-1">
                  {spec.name}
                </h3>
                <p className="font-body text-sm text-brand-green font-medium mb-1">
                  {spec.business}
                </p>
                <p className="font-mono text-xs text-brand-text-muted mb-2">
                  Suite {spec.suite}
                </p>
                <span className="inline-block bg-brand-green-muted/50 text-brand-green-hover font-mono text-xs px-3 py-1 rounded-full">
                  {spec.service}
                </span>
              </HoverLiftCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center mt-12">
            <Link
              href="/directory"
              className="inline-flex items-center text-brand-green font-body font-medium hover:underline underline-offset-4 transition-all"
            >
              View All 15+ Professionals →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

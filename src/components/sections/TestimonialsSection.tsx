"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverLiftCard } from "@/components/animations/HoverLiftCard";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "I absolutely love my suite at Plaza Park! The natural lighting and canal views make my clients feel relaxed the moment they walk in. Best decision I ever made for my business.",
    author: "Hair Stylist",
    rating: 5,
  },
  {
    text: "Moving to Plaza Park was seamless. Everything was ready — I just brought my tools and started taking clients. The 4 weeks free bonus really helped me transition without stress.",
    author: "Esthetician",
    rating: 5,
  },
  {
    text: "Brandi is an amazing property manager. She understands the beauty industry because she's in it herself. The community here is supportive and professional.",
    author: "Barber",
    rating: 5,
  },
  {
    text: "24/7 access is a game changer. I can see late clients without worrying about building hours. And the free parking? My clients love it.",
    author: "Lash Technician",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-brand-accent text-brand-accent" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-brand-green mb-4 block">
              Testimonials
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-brand-text tracking-[-0.01em] mb-4">
              What Our Community Says
            </h2>
            <p className="font-body text-brand-text-secondary text-lg">
              Rated <span className="font-semibold text-brand-accent">5.0</span> on Booksy with{" "}
              <span className="font-semibold">209+ reviews</span>
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <HoverLiftCard className="h-full">
                <Stars count={t.rating} />
                <p className="font-body text-brand-text-secondary leading-relaxed mt-4 mb-6 text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="font-mono text-xs text-brand-text-muted uppercase tracking-wider">
                  — {t.author}, Plaza Park Suite Holder
                </p>
              </HoverLiftCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

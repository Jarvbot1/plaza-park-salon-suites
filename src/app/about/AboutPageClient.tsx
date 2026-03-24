"use client";

import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import SmoothAccordion from "@/components/animations/SmoothAccordion";

const faqItems = [
  {
    question: "How much does a suite cost?",
    answer:
      "Lease rates vary by suite size and location within the building. New leases currently include a four-week free signing bonus. Contact Brandi Williams at (469) 917-8050 for current availability and pricing.",
  },
  {
    question: "What\u2019s included in the lease?",
    answer:
      "Every suite comes move-in ready with a styling station, shampoo bowl, and storage. Your lease covers electricity, water, WiFi, parking, and 24/7 building access. Bring your tools and your clients \u2014 everything else is handled.",
  },
  {
    question: "Do I need to sign a long-term lease?",
    answer:
      "No. Plaza Park offers flexible lease terms. We don\u2019t lock you into multi-year commitments. Talk to Brandi about options that work for your situation.",
  },
  {
    question: "Can I see the space before committing?",
    answer:
      "Absolutely. Schedule a tour by calling (469) 917-8050 or emailing valleyranchsuitetours@gmail.com. Brandi will walk you through available suites and answer any questions.",
  },
  {
    question: "What types of professionals lease here?",
    answer:
      "Hair stylists, barbers, estheticians, lash technicians, makeup artists, a chiropractor, waxing specialists, and more. Any licensed beauty or wellness professional can lease a suite.",
  },
  {
    question: "Is there parking?",
    answer:
      "Yes. Free parking is available for both suite holders and their clients. The building is at 9425 N MacArthur Blvd, Suite 150, with easy access from MacArthur Boulevard.",
  },
  {
    question: "Do I have 24/7 access?",
    answer:
      "Yes. Suite holders have 24/7 key access to the building. The posted business hours are for the front desk and general building access, but your suite is available whenever you need it.",
  },
  {
    question: "Where exactly is Plaza Park?",
    answer:
      "9425 N MacArthur Blvd, Suite 150, Irving, TX 75063. We\u2019re in the Valley Ranch area, near Las Colinas. The building sits along the canal with easy access from Highway 114 and MacArthur Boulevard.",
  },
];

export function AboutPageClient() {
  return (
    <div className="bg-cream">
      {/* ---- Hero ---- */}
      <section className="bg-cream-dark py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-display font-heading leading-heading tracking-tighter text-ink">
            An 8,000-square-foot building with forty private suites and canal
            views
          </h1>
          <p className="text-small uppercase tracking-wide text-ink-muted mt-4">
            Valley Ranch, Texas
          </p>
        </div>
      </section>

      {/* ---- The Building ---- */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-6 font-body font-light text-ink-light leading-body">
          <p>
            <span className="font-normal text-ink">
              Plaza Park Salon Suites opened in 2016
            </span>{" "}
            in Valley Ranch, Texas. The building sits
            along the canal &mdash; a detail that sounds small until you spend a
            Tuesday afternoon doing a balayage with natural light pouring through
            floor-to-ceiling windows.{" "}
            <span className="font-normal text-ink">
              That light changes everything.
            </span>
          </p>

          <p>
            The building is{" "}
            <span className="font-normal text-ink">
              8,000 square feet divided into forty private suites.
            </span>{" "}
            Each one is move-in ready: styling station, shampoo bowl,
            storage, electricity, water, WiFi. The lease includes everything
            except your tools and your clients.{" "}
            <span className="font-normal text-ink">
              No hidden fees, no shared stations, no waiting for your turn at
              the bowl.
            </span>
          </p>

          <p>
            Valley Ranch is one of the{" "}
            <span className="font-normal text-ink">
              fastest-growing corridors in the DFW metroplex.
            </span>{" "}
            The Las Colinas urban center is ten minutes south. DFW Airport is
            fifteen minutes west. The neighborhood draws young professionals,
            families, and a growing population of people who want quality beauty
            services close to where they live.
          </p>
        </div>
      </section>

      {/* ---- Brandi Williams ---- */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-cream-dark">
        <h2 className="text-title font-heading leading-heading text-ink">
          Brandi Williams
        </h2>
        <p className="text-small text-ink-muted uppercase tracking-wide mt-1">
          Salon Manager, Suite 39
        </p>

        <div className="mt-8 space-y-6 font-body font-light text-ink-light leading-body">
          <p>
            Brandi Williams manages Plaza Park Salon Suites from Suite 39, where
            she also runs her own beauty business,{" "}
            <span className="font-normal text-ink">
              Picasso the Illestrator.
            </span>{" "}
            She became the salon manager because she was already here &mdash;
            and she understood what independent professionals actually need
            because she is one.
          </p>

          <p>
            Brandi handles tours, leasing, maintenance, and the day-to-day
            operations that keep the building running smoothly. If you&apos;re
            considering a suite, she&apos;s the person to call. If you&apos;ve
            been here for years, she&apos;s still the person to call.
          </p>
        </div>

        <div className="mt-6 space-y-2 text-small font-body">
          <p>
            <a
              href="tel:+14699178050"
              className="text-ink-light hover:text-warm transition-colors link-draw"
            >
              (469) 917-8050
            </a>
          </p>
          <p>
            <a
              href="mailto:valleyranchsuitetours@gmail.com"
              className="text-ink-light hover:text-warm transition-colors link-draw"
            >
              valleyranchsuitetours@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-cream-dark">
        <h2 className="text-title font-heading leading-heading text-ink mb-10">
          Common questions
        </h2>
        <SmoothAccordion
          items={faqItems}
          className="font-body text-body text-ink-light"
        />
      </section>

      {/* ---- CTA ---- */}
      <section className="py-16 text-center px-6">
        <h2 className="text-title font-heading leading-heading text-ink">
          Ready to see the space?
        </h2>
        <p className="mt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-warm link-draw font-body"
          >
            Schedule a tour <Arrow />
          </Link>
        </p>
      </section>
    </div>
  );
}

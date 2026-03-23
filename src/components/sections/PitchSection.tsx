'use client'

import LineDraw from '@/components/animations/LineDraw'
import HorizontalWipe from '@/components/animations/HorizontalWipe'

export function PitchSection() {
  return (
    <section className="bg-cream py-24 md:py-32 px-6">
      <div className="mx-auto max-w-[680px]">
        <LineDraw className="mb-16" />

        <HorizontalWipe>
          <p className="font-body uppercase text-ink-muted text-label tracking-wide mb-8">
            The Space
          </p>

          <h2 className="font-heading text-title text-ink tracking-tight leading-heading mb-10">
            Everything&#8217;s here. Just bring your scissors.
          </h2>

          <div className="space-y-6">
            <p className="font-body font-light text-ink-light text-body leading-body">
              Plaza Park Salon Suites is a 13,000-square-foot building in
              Irving&#8217;s Valley Ranch neighborhood with forty private suites,
              canal views, and the kind of natural light that makes color
              corrections easier and clients happier. Every suite is move-in
              ready — styling station, shampoo bowl, mirrors, storage, the works.
              Your lease includes electricity, water, WiFi, parking, and 24/7
              access. No hidden fees. No long-term commitments.
            </p>

            <p className="font-body font-medium text-warm text-body">
              New leases include a four-week free signing bonus.
            </p>
          </div>
        </HorizontalWipe>
      </div>
    </section>
  )
}

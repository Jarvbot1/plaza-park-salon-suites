'use client'

import CounterRoll from '@/components/animations/CounterRoll'
import ScaleBreathe from '@/components/animations/ScaleBreathe'
import { Arrow } from '@/components/Arrow'

export function SocialProofSection() {
  return (
    <section className="bg-ink py-24 md:py-32 px-6">
      <div className="mx-auto max-w-[680px] text-center">
        <div className="flex justify-center" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: 1 }}>
          <CounterRoll
            value="5.0"
            className="font-heading text-cream tracking-tighter"
          />
        </div>

        <ScaleBreathe className="mt-8">
          <p className="font-body font-light text-cream/80 text-body leading-body mb-8">
            Rated five stars on Booksy across 209 reviews.
          </p>

          <p className="font-heading italic text-cream text-subtitle leading-subheading">
            &#8220;The best salon suite experience in Irving.&#8221;
          </p>
        </ScaleBreathe>

        <div className="mt-12">
          <a
            href="https://booksy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw inline-flex items-center gap-2 font-body font-medium text-warm-light text-body"
          >
            Read reviews on Booksy
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}

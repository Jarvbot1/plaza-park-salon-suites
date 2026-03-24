'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ParallaxFloat from '@/components/animations/ParallaxFloat'
import { Arrow } from '@/components/Arrow'

export function BrandiSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ParallaxFloat>
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/suites/suite-modern-styling.jpg"
                  alt="Salon suite at Plaza Park — styling station with natural light"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ParallaxFloat>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-body text-xs tracking-[0.12em] uppercase text-brand-text-muted mb-4">
              Your Property Manager
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] text-brand-text mb-6">
              Brandi Williams
            </h2>
            <p className="font-body font-light text-brand-text-secondary leading-[1.7] mb-4">
              Brandi runs Plaza Park Salon Suites from Suite 39, where she also operates her own beauty business. She became the property manager because she was already here — and she understood what independent professionals actually need because she is one.
            </p>
            <p className="font-body font-light text-brand-text-secondary leading-[1.7] mb-8">
              Whether you&rsquo;re visiting for the first time or you&rsquo;ve been here for years, Brandi is the person you&rsquo;ll call.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm font-body">
              <a href="tel:4699178050" className="text-brand-text-secondary hover:text-brand-green transition-colors">
                (469) 917-8050
              </a>
              <span className="hidden sm:inline text-brand-text-muted">|</span>
              <a href="mailto:valleyranchsuitetours@gmail.com" className="text-brand-text-secondary hover:text-brand-green transition-colors">
                valleyranchsuitetours@gmail.com
              </a>
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-green text-white rounded-md px-6 py-3 font-body text-sm font-medium hover:bg-brand-green-hover transition-colors">
              Schedule a Tour
              <Arrow />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

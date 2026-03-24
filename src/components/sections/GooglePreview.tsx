'use client'

import { motion } from 'framer-motion'
import { Arrow } from '@/components/Arrow'

export function GooglePreview() {
  return (
    <section className="py-16 lg:py-24 bg-brand-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-brand-text mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Find us on Google
        </motion.h2>

        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="bg-white rounded-lg border border-brand-green/10 p-6">
            <p className="font-heading text-lg text-brand-text mb-1">
              Plaza Park Salon Suites
            </p>
            <p className="font-body text-sm text-brand-text-muted mb-4">
              Salon Suites
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex gap-3">
                <span className="font-body text-xs text-brand-text-muted uppercase tracking-wide w-16 shrink-0">
                  Address
                </span>
                <span className="font-body text-sm text-brand-text-secondary">
                  9425 N MacArthur Blvd, Suite 150, Irving, TX 75063
                </span>
              </div>
              <div className="flex gap-3">
                <span className="font-body text-xs text-brand-text-muted uppercase tracking-wide w-16 shrink-0">
                  Phone
                </span>
                <a href="tel:4699178050" className="font-body text-sm text-brand-text-secondary hover:text-brand-green transition-colors">
                  (469) 917-8050
                </a>
              </div>
              <div className="flex gap-3">
                <span className="font-body text-xs text-brand-text-muted uppercase tracking-wide w-16 shrink-0">
                  Hours
                </span>
                <span className="font-body text-sm text-brand-green font-medium">
                  Open 24 hours
                </span>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Plaza+Park+Salon+Suites/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw text-brand-green font-body text-sm inline-flex items-center gap-2"
            >
              Get directions
              <Arrow />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

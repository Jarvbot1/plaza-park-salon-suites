'use client'

import { motion } from 'framer-motion'
import { Arrow } from '@/components/Arrow'

export function BooksyPreview() {
  return (
    <section className="py-16 lg:py-24 bg-brand-surface-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side -- heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] text-brand-text mb-4">
              5.0 on Booksy
            </h2>
            <p className="font-body text-brand-text-secondary leading-[1.7]">
              209 reviews from real clients.
            </p>
          </motion.div>

          {/* Right side -- preview card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="bg-white rounded-lg border border-brand-green/10 shadow-sm p-6">
              <p className="font-heading text-lg text-brand-text mb-2">
                Plaza Park Salon Suites
              </p>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-body text-sm font-medium text-brand-text">5.0</span>
                <span className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((dot) => (
                    <span
                      key={dot}
                      className="w-2.5 h-2.5 rounded-full bg-brand-green inline-block"
                    />
                  ))}
                </span>
                <span className="font-body text-sm text-brand-text-muted">209 reviews</span>
              </div>
              <p className="font-body text-sm text-brand-text-secondary leading-relaxed mb-4">
                &ldquo;I absolutely love my suite at Plaza Park! The natural lighting and canal views
                make my clients feel relaxed the moment they walk in. Best decision I ever made
                for my business.&rdquo;
              </p>
              <p className="font-body text-xs text-brand-text-muted mb-6">
                — Hair Stylist, Plaza Park Suite Holder
              </p>
              <a
                href="https://booksy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw text-brand-green font-body text-sm inline-flex items-center gap-2"
              >
                See all reviews on Booksy
                <Arrow />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

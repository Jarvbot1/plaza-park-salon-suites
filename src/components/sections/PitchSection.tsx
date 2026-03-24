'use client'

import { motion } from 'framer-motion'
import LineDraw from '@/components/animations/LineDraw'

export function PitchSection() {
  return (
    <section className="bg-brand-cream py-20 lg:py-28">
      <div className="mx-auto max-w-[680px] px-6">
        <LineDraw className="mb-16" color="var(--color-brand-text-muted)" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-body text-xs tracking-[0.08em] uppercase text-brand-text-muted mb-6">
            THE SPACE
          </p>

          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] text-brand-text mb-8">
            Everything&rsquo;s here. Just bring your tools.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-body font-light text-brand-text-secondary leading-[1.65] mb-6">
            Plaza Park Salon Suites is an 8,000-square-foot building in
            Valley Ranch with forty private suites,
            canal views, and the kind of natural light that makes color
            corrections easier and clients happier. Every suite is move-in
            ready — styling station, shampoo bowl, storage, the works.
            Your lease includes electricity, water, WiFi, parking, and 24/7
            access. No hidden fees. No long-term commitments.
          </p>
        </motion.div>

        <motion.p
          className="text-brand-green font-body font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          New leases include a four-week free signing bonus.
        </motion.p>
      </div>
    </section>
  )
}

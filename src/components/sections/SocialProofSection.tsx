'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Arrow } from '@/components/Arrow'

function AnimatedRating() {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <span ref={ref} className="font-heading text-[clamp(3rem,8vw,6rem)] text-white block">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          5.0
        </motion.span>
      ) : (
        <span className="opacity-0">5.0</span>
      )}
    </span>
  )
}

export function SocialProofSection() {
  return (
    <section className="bg-brand-dark text-white py-20 lg:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <AnimatedRating />

          <p className="font-body font-light text-white/70 mt-6 mb-8">
            Rated five stars on Booksy across 209 reviews.
          </p>
        </motion.div>

        <motion.p
          className="font-heading italic text-[clamp(1.25rem,2vw,1.5rem)] text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          &ldquo;The best salon suite experience in Irving.&rdquo;
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a
            href="https://booksy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw text-brand-green-light font-body text-sm inline-flex items-center gap-2"
          >
            Read reviews on Booksy
            <Arrow />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

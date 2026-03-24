'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 15, suffix: '+', label: 'Specialists' },
  { value: 40, suffix: '', label: 'Private Suites' },
  { value: 5, decimal: true, label: 'Booksy Rating' },
  { value: 2016, suffix: '', label: 'Established' },
]

function AnimatedNumber({ value, suffix, decimal }: { value: number; suffix?: string; decimal?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <span ref={ref} className="font-heading text-5xl lg:text-6xl text-white tabular-nums">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          {decimal ? `${value}.0` : value}{suffix}
        </motion.span>
      ) : (
        <span className="opacity-0">{decimal ? `${value}.0` : value}{suffix}</span>
      )}
    </span>
  )
}

export function StatsBar() {
  return (
    <section className="bg-brand-dark py-14 lg:py-18">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
              <p className="font-body text-[11px] tracking-[0.15em] uppercase text-brand-green-light mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

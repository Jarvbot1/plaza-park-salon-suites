'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Arrow } from '@/components/Arrow'

const professions = [
  'Hair Stylist',
  'Barber',
  'Esthetician',
  'Lash Technician',
  'Nail Technician',
  'Massage Therapist',
  'Makeup Artist',
  'Chiropractor',
  'Other',
]

export function SuiteFinderSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-brand-green py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] text-white mb-4">
            Find your suite
          </h2>
          <p className="font-body text-white/80 mb-12 max-w-xl">
            Schedule a tour with Brandi. See the space. Pick your suite.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {submitted ? (
            <p className="font-body text-white text-lg">
              Thank you — we will be in touch shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:border-white/40 transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  required
                  className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:border-white/40 transition-colors"
                />
                <select
                  name="profession"
                  required
                  defaultValue=""
                  className="bg-white/10 border border-white/20 text-white rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:border-white/40 transition-colors appearance-none"
                >
                  <option value="" disabled className="text-brand-dark">
                    Your profession
                  </option>
                  {professions.map((p) => (
                    <option key={p} value={p} className="text-brand-dark">
                      {p}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="bg-white text-brand-green rounded-md px-8 py-3 font-body font-medium inline-flex items-center justify-center gap-2 hover:bg-white/90 active:scale-[0.98] transition-all duration-200"
                >
                  Schedule a Tour
                  <Arrow />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Arrow } from '@/components/Arrow'

const professionals = [
  { name: 'Adrianna Moore', specialty: 'Hair Care', slug: 'adrianna-moore' },
  { name: 'Jackie Dinh', specialty: 'Hair Coloring', slug: 'jackie-dinh' },
  { name: 'Sheverrick', specialty: 'Barber', slug: 'sheverrick' },
  { name: 'Amanda Kinder', specialty: 'Balayage', slug: 'amanda-kinder' },
  { name: 'Dr. Mark Charrette', specialty: 'Chiropractic', slug: 'dr-mark-charrette' },
  { name: 'Tavion Bryant', specialty: 'Barber', slug: 'tavion-bryant' },
  { name: 'Felicia Sims', specialty: 'Waxing & Skin Care', slug: 'felicia-sims' },
  { name: 'Morgan', specialty: 'Lash Extensions', slug: 'morgan' },
  { name: 'Rhonda', specialty: 'Makeup', slug: 'rhonda' },
  { name: 'Loan Tran', specialty: 'Hair Care', slug: 'loan-tran' },
  { name: 'Hitha', specialty: 'Laser & Skin', slug: 'hitha' },
  { name: 'Brandon Hayter', specialty: 'Barber', slug: 'brandon-hayter' },
  { name: 'Tyrone Jenkins', specialty: 'Barber', slug: 'tyrone-jenkins' },
  { name: 'Leonor', specialty: 'Skin Care', slug: 'leonor' },
]

export function ProfessionalsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-brand-text mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Fifteen independents. One address.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mb-14">
          {professionals.map((pro, i) => (
            <motion.div
              key={pro.slug}
              className="py-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.03, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href={`/directory/${pro.slug}`}
                className="link-draw text-brand-text font-body"
              >
                {pro.name}
              </Link>
              <span className="text-brand-text-muted font-body">
                {' '} — {pro.specialty}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Link
            href="/directory"
            className="link-draw text-brand-green font-body text-sm mt-8 inline-flex items-center gap-2"
          >
            View all professionals
            <Arrow />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

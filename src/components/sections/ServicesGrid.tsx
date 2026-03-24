'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Arrow } from '@/components/Arrow'

const services = [
  { name: 'Hair Care', slug: 'hair-care' },
  { name: 'Barber', slug: 'barber' },
  { name: 'Skin Care', slug: 'skin-care' },
  { name: 'Lash Extensions', slug: 'lash-extensions' },
  { name: 'Braiding', slug: 'braiding' },
  { name: 'Waxing', slug: 'waxing' },
  { name: 'Makeup', slug: 'makeup' },
  { name: 'Chiropractor', slug: 'chiropractor' },
  { name: 'Massage', slug: 'massage' },
]

function ServiceBlock({
  service,
  index,
  large,
}: {
  service: (typeof services)[number]
  index: number
  large?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link href={`/services/${service.slug}`} className="group block">
        <div
          className={`bg-brand-surface-alt border border-brand-green/10 rounded-lg hover:border-brand-green/30 transition-colors ${
            large ? 'p-8 lg:p-10' : 'p-6'
          }`}
        >
          <div className="flex items-center justify-between">
            <h3
              className={`font-heading ${
                large ? 'text-xl lg:text-2xl' : 'text-lg'
              } text-brand-text`}
            >
              {service.name}
            </h3>
            <span className="link-draw text-brand-green opacity-0 group-hover:opacity-100 transition-opacity">
              <Arrow />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function ServicesGrid() {
  const featured = services.slice(0, 3)
  const rest = services.slice(3)

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
          What happens here
        </motion.h2>

        {/* Featured row -- larger blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {featured.map((service, i) => (
            <ServiceBlock key={service.slug} service={service} index={i} large />
          ))}
        </div>

        {/* Remaining services -- smaller blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((service, i) => (
            <ServiceBlock
              key={service.slug}
              service={service}
              index={i + 3}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

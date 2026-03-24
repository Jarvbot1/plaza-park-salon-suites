'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Arrow } from '@/components/Arrow'

const suiteImages = [
  { src: '/images/suites/suite-bright-station.jpg', alt: 'Bright styling station with mirror and chair' },
  { src: '/images/suites/suite-gold-decor.jpg', alt: 'Suite with gold accent decor and warm lighting' },
  { src: '/images/suites/suite-minimalist.jpg', alt: 'Minimalist suite with clean lines and natural light' },
  { src: '/images/suites/suite-cream-tiles.jpg', alt: 'Suite with cream tile flooring and modern fixtures' },
]

export function SuitePreview() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10"
        >
          <h2 className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-brand-text mb-4">
            See inside a suite
          </h2>
          <p className="font-body text-brand-text-secondary max-w-2xl">
            Every suite is move-in ready. Styling station, shampoo bowl, mirrors, storage — everything you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {suiteImages.map((img, i) => (
            <motion.div
              key={img.src}
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
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
            href="/gallery"
            className="link-draw text-brand-green font-body text-sm inline-flex items-center gap-2"
          >
            View gallery
            <Arrow />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

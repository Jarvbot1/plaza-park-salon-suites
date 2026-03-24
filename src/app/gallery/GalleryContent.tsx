'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Arrow } from '@/components/Arrow'

const images = [
  { src: '/images/suites/suite-natural-light.jpg', label: 'Suite with natural light' },
  { src: '/images/suites/suite-bright-station.jpg', label: 'Bright styling station' },
  { src: '/images/suites/suite-modern-styling.jpg', label: 'Modern styling suite' },
  { src: '/images/suites/suite-gold-decor.jpg', label: 'Gold decor suite' },
  { src: '/images/suites/suite-minimalist.jpg', label: 'Minimalist suite' },
  { src: '/images/suites/suite-cream-tiles.jpg', label: 'Suite with cream tiles' },
  { src: '/images/suites/suite-mirrors-vanity.jpg', label: 'Mirrors and vanity' },
  { src: '/images/suites/suite-bright-shampoo.jpg', label: 'Shampoo station' },
]

export function GalleryContent() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  useEffect(() => {
    if (lightboxIndex === null) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lightboxIndex, closeLightbox])

  return (
    <section className="bg-brand-surface min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-32 sm:pt-40 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading text-[clamp(2.5rem,5vw,4rem)] text-brand-text"
        >
          The space
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-body text-xs uppercase tracking-[0.12em] text-brand-text-muted mt-3"
        >
          Plaza Park Salon Suites, Valley Ranch, TX
        </motion.p>
      </div>

      {/* Image grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => setLightboxIndex(idx)}
              className="block w-full text-left group cursor-pointer"
              aria-label={`View ${img.label}`}
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden rounded-lg">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-5">
                  <span className="font-body text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.label}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <p className="font-body text-sm text-brand-text-muted">
          Have photos to share? Email them to{' '}
          <a
            href="mailto:valleyranchsuitetours@gmail.com"
            className="text-brand-green link-draw"
          >
            valleyranchsuitetours@gmail.com
          </a>
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full mx-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden rounded-lg">
                <Image
                  src={images[lightboxIndex].src}
                  alt={images[lightboxIndex].label}
                  fill
                  className="object-cover"
                  sizes="90vw"
                />
              </div>
              <p className="font-body text-sm text-white/70 mt-4 text-center">
                {images[lightboxIndex].label}
              </p>
            </motion.div>

            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white hover:text-brand-green-light transition-colors"
              aria-label="Close lightbox"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="2" y1="2" x2="18" y2="18" />
                <line x1="18" y1="2" x2="2" y2="18" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

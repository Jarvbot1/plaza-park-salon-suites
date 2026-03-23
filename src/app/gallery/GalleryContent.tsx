'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ImageReveal from '@/components/animations/ImageReveal'

interface GalleryItem {
  label: string
  aspect: string
}

const images: GalleryItem[] = [
  { label: 'Private suite interior', aspect: 'aspect-[4/3]' },
  { label: 'Canal view from suite', aspect: 'aspect-[4/3]' },
  { label: 'Styling station', aspect: 'aspect-[3/4]' },
  { label: 'Building exterior', aspect: 'aspect-[4/3]' },
  { label: 'Suite with natural light', aspect: 'aspect-[3/4]' },
  { label: 'Common area', aspect: 'aspect-[4/3]' },
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
    <section className="bg-cream min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-12 sm:pb-16">
        <h1 className="text-display font-heading text-ink leading-heading tracking-tighter">
          The space
        </h1>
        <p className="text-small uppercase tracking-wide text-ink-muted font-body mt-3">
          Plaza Park Salon Suites, Valley Ranch, Irving TX
        </p>
      </div>

      {/* Image grid */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="block w-full text-left group cursor-pointer"
              aria-label={`View ${img.label}`}
            >
              <ImageReveal
                color="var(--color-warm, #B8860B)"
                direction="left"
              >
                <div
                  className={`${img.aspect} w-full bg-cream-dark relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-end p-5">
                    <span className="text-small font-body text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {img.label}
                    </span>
                  </div>
                </div>
              </ImageReveal>
            </button>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-24 sm:pb-32">
        <p className="text-small text-ink-muted font-body">
          Have photos to share? Email them to{' '}
          <a
            href="mailto:valleyranchsuitetours@gmail.com"
            className="text-warm link-draw"
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
            className="fixed inset-0 z-50 bg-ink/90 flex items-center justify-center"
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
              {/* Placeholder for real image */}
              <div
                className={`${images[lightboxIndex].aspect} w-full bg-cream-dark`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-body font-body text-ink-muted">
                    {images[lightboxIndex].label}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-cream hover:text-warm transition-colors"
              aria-label="Close lightbox"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
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

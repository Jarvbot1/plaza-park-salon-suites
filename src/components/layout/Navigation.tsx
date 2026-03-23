'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Arrow } from '@/components/Arrow'

const navLinks = [
  { label: 'Lease', href: '/lease' },
  { label: 'Professionals', href: '/directory' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const mobileLinks = [
  { label: 'Lease', href: '/lease' },
  { label: 'Our Professionals', href: '/directory' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  // Continuous morph values driven by scroll position (0–80px range)
  const headerHeight = useTransform(scrollY, [0, 80], [64, 56])
  const headerHeightMobile = useTransform(scrollY, [0, 80], [56, 48])
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.95])
  const backdropBlur = useTransform(scrollY, [0, 80], [0, 8])
  const wordmarkScale = useTransform(scrollY, [0, 80], [1, 0.9])

  return (
    <>
      <motion.header
        style={{
          // @ts-expect-error -- framer-motion MotionValue for CSS custom property
          '--header-h': useTransform(headerHeight, (v) => `${v}px`),
          '--header-h-mobile': useTransform(headerHeightMobile, (v) => `${v}px`),
          backgroundColor: useTransform(bgOpacity, (v) => `rgba(250, 247, 242, ${v})`),
          backdropFilter: useTransform(backdropBlur, (v) => (v > 0 ? `blur(${v}px)` : 'none')),
          WebkitBackdropFilter: useTransform(backdropBlur, (v) => (v > 0 ? `blur(${v}px)` : 'none')),
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
          {/* Wordmark */}
          <motion.div style={{ scale: wordmarkScale }} className="origin-left">
            <Link href="/" className="font-heading text-subtitle tracking-tight text-ink">
              PLAZA PARK
            </Link>
          </motion.div>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-draw font-body text-small tracking-wide text-ink-light"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-subtle bg-warm px-5 py-2 font-body text-small tracking-wide text-cream uppercase transition-colors hover:bg-warm-hover"
            >
              Schedule a Tour
              <Arrow />
            </Link>
          </div>

          {/* Mobile hamburger — two lines */}
          <button
            onClick={() => setMobileOpen(true)}
            className="relative flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Open menu"
          >
            <span className="block h-[1.5px] w-5 bg-ink" />
            <span className="block h-[1.5px] w-5 bg-ink" />
          </button>
        </nav>

        {/* Height binding via inline style for morph */}
        <style>{`
          header nav {
            height: var(--header-h-mobile, 56px);
          }
          @media (min-width: 768px) {
            header nav {
              height: var(--header-h, 64px);
            }
          }
        `}</style>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink px-6 py-6 text-cream"
          >
            {/* Close button */}
            <div className="flex justify-end">
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-8 w-8 items-center justify-center text-cream"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Nav links — staggered */}
            <nav className="mt-12 flex flex-1 flex-col gap-6">
              {mobileLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-title text-cream"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Schedule a Tour */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: mobileLinks.length * 0.05, duration: 0.2 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 rounded-subtle bg-warm px-5 py-3 font-body text-small tracking-wide text-cream uppercase"
                >
                  Schedule a Tour
                  <Arrow />
                </Link>
              </motion.div>
            </nav>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (mobileLinks.length + 1) * 0.05, duration: 0.2 }}
              className="flex flex-col gap-2 border-t border-cream/10 pt-6 font-body text-small text-cream/70"
            >
              <a href="tel:+14699178050" className="link-draw">(469) 917-8050</a>
              <a href="mailto:valleyranchsuitetours@gmail.com" className="link-draw">
                valleyranchsuitetours@gmail.com
              </a>
              <p>9425 N MacArthur Blvd, Suite 150, Irving, TX 75063</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CURVES } from './motion-curves'

interface HorizontalWipeProps {
  children: React.ReactNode
  className?: string
  color?: string
}

export default function HorizontalWipe({
  children,
  className,
  color = 'var(--color-warm, #c9a96e)',
}: HorizontalWipeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <div
      ref={ref}
      className={className}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.01, delay: 0.5 }}
      >
        {children}
      </motion.div>

      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: color,
          transformOrigin: 'left center',
          zIndex: 10,
        }}
        initial={{ scaleX: 0 }}
        animate={
          isInView
            ? {
                scaleX: [0, 1, 1, 0],
                transformOrigin: [
                  'left center',
                  'left center',
                  'right center',
                  'right center',
                ],
              }
            : { scaleX: 0 }
        }
        transition={{
          duration: 1,
          ease: CURVES.dramatic as unknown as [number, number, number, number],
          times: [0, 0.45, 0.55, 1],
        }}
      />
    </div>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CURVES } from './motion-curves'

interface ImageRevealProps {
  children: React.ReactNode
  className?: string
  color?: string
  direction?: 'left' | 'top'
}

export { ImageReveal }
export default function ImageReveal({
  children,
  className,
  color = 'var(--color-sage, #8a9a7b)',
  direction = 'left',
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const isHorizontal = direction === 'left'

  const overlayInitial = {
    scaleX: isHorizontal ? 1 : 1,
    scaleY: isHorizontal ? 1 : 1,
    transformOrigin: isHorizontal ? 'left center' : 'center top',
  }

  const overlayAnimate = isInView
    ? {
        scaleX: isHorizontal ? 0 : 1,
        scaleY: isHorizontal ? 1 : 0,
        transformOrigin: isHorizontal ? 'right center' : 'center bottom',
      }
    : overlayInitial

  return (
    <div
      ref={ref}
      className={className}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {children}

      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: color,
          transformOrigin: isHorizontal ? 'right center' : 'center bottom',
          zIndex: 5,
        }}
        initial={overlayInitial}
        animate={overlayAnimate}
        transition={{
          duration: 0.8,
          ease: CURVES.dramatic as unknown as [number, number, number, number],
          delay: 0.1,
        }}
      />
    </div>
  )
}

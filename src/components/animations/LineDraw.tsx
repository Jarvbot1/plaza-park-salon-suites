'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CURVES } from './motion-curves'

interface LineDrawProps {
  className?: string
  color?: string
  width?: string
}

export default function LineDraw({
  className,
  color = 'var(--color-ink-muted, #999)',
  width = '100%',
}: LineDrawProps) {
  const ref = useRef<SVGSVGElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <svg
      ref={ref}
      className={className}
      width={width}
      height="2"
      viewBox="0 0 1000 2"
      preserveAspectRatio="none"
      fill="none"
      style={{ display: 'block', overflow: 'visible' }}
    >
      <motion.line
        x1="0"
        y1="1"
        x2="1000"
        y2="1"
        stroke={color}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{
          duration: 1,
          ease: CURVES.smooth as unknown as [number, number, number, number],
        }}
      />
    </svg>
  )
}

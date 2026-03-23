'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxFloatProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export default function ParallaxFloat({
  children,
  className,
  speed = 0.85,
}: ParallaxFloatProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const offset = (1 - speed) * 200
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div style={{ y, willChange: 'transform' }}>
        {children}
      </motion.div>
    </div>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface GradientShiftProps {
  children: React.ReactNode
  className?: string
  from?: string
  to?: string
}

export default function GradientShift({
  children,
  className,
  from = 'var(--color-surface, #f5f0eb)',
  to = 'var(--color-warm, #c9a96e)',
}: GradientShiftProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const angle = useTransform(scrollYProgress, [0, 1], [135, 150])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        background: useTransform(
          angle,
          (a) => `linear-gradient(${a}deg, ${from}, ${to})`
        ),
      }}
    >
      {children}
    </motion.div>
  )
}

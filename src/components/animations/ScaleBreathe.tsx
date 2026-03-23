'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CURVES } from './motion-curves'

interface ScaleBreatheProps {
  children: React.ReactNode
  className?: string
}

export default function ScaleBreathe({
  children,
  className,
}: ScaleBreatheProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scale: 0.96, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.96, opacity: 0 }}
      transition={{
        ...CURVES.spring,
        duration: 0.6,
      }}
    >
      {children}
    </motion.div>
  )
}

'use client'

import { useRef, Children, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import { CURVES } from './motion-curves'

interface StackedRevealProps {
  children: React.ReactNode
  className?: string
}

export default function StackedReveal({
  children,
  className,
}: StackedRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const childArray = Children.toArray(children)

  const offsets = useMemo(() => {
    return childArray.map((_, i) => ({
      x: (i % 2 === 0 ? -1 : 1) * (8 + Math.random() * 12),
      y: -i * 20,
      rotate: (Math.random() - 0.5) * 8,
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childArray.length])

  return (
    <div ref={ref} className={className}>
      {childArray.map((child, i) => (
        <motion.div
          key={i}
          initial={{
            x: offsets[i].x,
            y: offsets[i].y,
            rotate: offsets[i].rotate,
            opacity: 0,
          }}
          animate={
            isInView
              ? { x: 0, y: 0, rotate: 0, opacity: 1 }
              : {
                  x: offsets[i].x,
                  y: offsets[i].y,
                  rotate: offsets[i].rotate,
                  opacity: 0,
                }
          }
          transition={{
            ...CURVES.spring,
            delay: i * 0.08,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

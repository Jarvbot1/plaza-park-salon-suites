'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CURVES } from './motion-curves'

interface TextClipRevealProps {
  children: string
  className?: string
  delay?: number
}

export default function TextClipReveal({
  children,
  className,
  delay = 0,
}: TextClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const lines = children.split('\n')

  let wordIndex = 0

  return (
    <div ref={ref} className={className}>
      {lines.map((line, lineIdx) => (
        <div key={lineIdx} style={{ display: 'block' }}>
          {line.split(' ').map((word, wIdx) => {
            const currentWordIndex = wordIndex
            wordIndex++
            return (
              <span
                key={`${lineIdx}-${wIdx}`}
                style={{
                  display: 'inline-block',
                  overflow: 'hidden',
                  verticalAlign: 'top',
                }}
              >
                <motion.span
                  style={{
                    display: 'inline-block',
                    willChange: 'transform',
                  }}
                  initial={{ y: '110%' }}
                  animate={isInView ? { y: '0%' } : { y: '110%' }}
                  transition={{
                    duration: 0.8,
                    ease: CURVES.reveal as unknown as [number, number, number, number],
                    delay: delay + currentWordIndex * 0.04,
                  }}
                >
                  {word}
                </motion.span>
                {wIdx < line.split(' ').length - 1 && (
                  <span style={{ display: 'inline-block', width: '0.3em' }}>
                    &nbsp;
                  </span>
                )}
              </span>
            )
          })}
        </div>
      ))}
    </div>
  )
}

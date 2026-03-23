'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CURVES } from './motion-curves'

interface CounterRollProps {
  value: string
  className?: string
  suffix?: string
}

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function DigitColumn({
  digit,
  delay,
}: {
  digit: string
  delay: number
}) {
  const numericDigit = parseInt(digit, 10)

  if (isNaN(numericDigit)) {
    return (
      <span style={{ display: 'inline-block' }}>{digit}</span>
    )
  }

  return (
    <span
      style={{
        display: 'inline-block',
        height: '1em',
        overflow: 'hidden',
        lineHeight: 1,
        verticalAlign: 'bottom',
      }}
    >
      <motion.span
        style={{
          display: 'flex',
          flexDirection: 'column',
          willChange: 'transform',
        }}
        initial={{ y: 0 }}
        animate={{ y: `${-numericDigit * 10}%` }}
        transition={{
          duration: 1.2,
          ease: CURVES.reveal as unknown as [number, number, number, number],
          delay,
        }}
      >
        {DIGITS.map((d) => (
          <span
            key={d}
            style={{
              display: 'block',
              height: '1em',
              lineHeight: 1,
            }}
            aria-hidden={d !== digit}
          >
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  )
}

export default function CounterRoll({
  value,
  className,
  suffix,
}: CounterRollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const chars = value.split('')

  let digitIndex = 0

  return (
    <div
      ref={ref}
      className={className}
      style={{ display: 'inline-flex', alignItems: 'baseline' }}
      aria-label={`${value}${suffix || ''}`}
    >
      {isInView
        ? chars.map((char, idx) => {
            const isDigit = !isNaN(parseInt(char, 10))
            const currentDigitIndex = isDigit ? digitIndex++ : 0
            return (
              <DigitColumn
                key={idx}
                digit={char}
                delay={isDigit ? currentDigitIndex * 0.1 : 0}
              />
            )
          })
        : chars.map((char, idx) => (
            <span
              key={idx}
              style={{
                display: 'inline-block',
                height: '1em',
                overflow: 'hidden',
                lineHeight: 1,
                verticalAlign: 'bottom',
              }}
            >
              <span style={{ display: 'block', height: '1em', lineHeight: 1 }}>
                0
              </span>
            </span>
          ))}
      {suffix && <span>{suffix}</span>}
    </div>
  )
}

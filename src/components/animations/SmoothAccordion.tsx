'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CURVES } from './motion-curves'

interface AccordionItem {
  question: string
  answer: string
}

interface SmoothAccordionProps {
  items: AccordionItem[]
  className?: string
}

export default function SmoothAccordion({
  items,
  className,
}: SmoothAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            style={{
              borderBottom: '1px solid var(--color-ink-muted, #ccc)',
            }}
          >
            <button
              onClick={() => toggle(index)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '20px 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                font: 'inherit',
                color: 'inherit',
              }}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <motion.span
                style={{
                  display: 'inline-block',
                  fontSize: '1.25em',
                  lineHeight: 1,
                  flexShrink: 0,
                  marginLeft: '16px',
                  willChange: 'transform',
                }}
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{
                  ...CURVES.spring,
                }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{
                    ...CURVES.spring,
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.1,
                    }}
                    style={{ paddingBottom: '20px' }}
                  >
                    {item.answer}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

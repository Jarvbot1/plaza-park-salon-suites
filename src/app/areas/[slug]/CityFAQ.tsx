'use client'

import SmoothAccordion from '@/components/animations/SmoothAccordion'

interface CityFAQProps {
  items: { question: string; answer: string }[]
  className?: string
}

export default function CityFAQ({ items, className }: CityFAQProps) {
  return <SmoothAccordion items={items} className={className} />
}

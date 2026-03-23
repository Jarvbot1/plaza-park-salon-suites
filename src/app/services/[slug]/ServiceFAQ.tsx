'use client'

import SmoothAccordion from '@/components/animations/SmoothAccordion'

interface FAQItem {
  question: string
  answer: string
}

interface ServiceFAQProps {
  faqs: FAQItem[]
  serviceTitle: string
}

export function ServiceFAQ({ faqs, serviceTitle }: ServiceFAQProps) {
  return (
    <section className="mt-12">
      <h2 className="text-title font-heading text-ink">
        Common questions about {serviceTitle.toLowerCase()}
      </h2>
      <SmoothAccordion items={faqs} className="mt-6 font-body text-ink-light" />
    </section>
  )
}

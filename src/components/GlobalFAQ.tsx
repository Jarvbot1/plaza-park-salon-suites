'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: React.ReactNode
}

const faqItems: FAQItem[] = [
  {
    question: 'Where is Plaza Park Salon Suites located?',
    answer: (
      <>
        We&rsquo;re at 9425 N MacArthur Blvd, Suite 150, Irving, TX 75063, in
        the Valley Ranch area. Our building has canal views and sits right off
        SH-161. We serve beauty professionals from across the DFW metroplex,
        including{' '}
        <Link href="/areas/irving" className="text-brand-green link-draw">Irving</Link>,{' '}
        <Link href="/areas/las-colinas" className="text-brand-green link-draw">Las Colinas</Link>,{' '}
        <Link href="/areas/valley-ranch" className="text-brand-green link-draw">Valley Ranch</Link>,{' '}
        <Link href="/areas/coppell" className="text-brand-green link-draw">Coppell</Link>,{' '}
        <Link href="/areas/plano" className="text-brand-green link-draw">Plano</Link>,{' '}
        <Link href="/areas/frisco" className="text-brand-green link-draw">Frisco</Link>,{' '}
        <Link href="/areas/carrollton" className="text-brand-green link-draw">Carrollton</Link>,{' '}
        <Link href="/areas/lewisville" className="text-brand-green link-draw">Lewisville</Link>,{' '}
        <Link href="/areas/dallas" className="text-brand-green link-draw">Dallas</Link>,{' '}
        <Link href="/areas/richardson" className="text-brand-green link-draw">Richardson</Link>,{' '}
        <Link href="/areas/flower-mound" className="text-brand-green link-draw">Flower Mound</Link>,{' '}
        <Link href="/areas/arlington" className="text-brand-green link-draw">Arlington</Link>,{' '}
        <Link href="/areas/grapevine" className="text-brand-green link-draw">Grapevine</Link>,{' '}
        <Link href="/areas/farmers-branch" className="text-brand-green link-draw">Farmers Branch</Link>,{' '}
        <Link href="/areas/fort-worth" className="text-brand-green link-draw">Fort Worth</Link>,{' '}
        <Link href="/areas/euless" className="text-brand-green link-draw">Euless</Link>,{' '}
        <Link href="/areas/bedford" className="text-brand-green link-draw">Bedford</Link>, and{' '}
        <Link href="/areas/hurst" className="text-brand-green link-draw">Hurst</Link>.
      </>
    ),
  },
  {
    question: "What's included in a suite lease?",
    answer:
      'Every suite is move-in ready with a styling station, shampoo bowl, and storage included. Your lease covers electricity, water, WiFi, parking, and 24/7 access. New leases include a four-week free signing bonus. Contact Brandi at (469) 917-8050 to schedule a tour.',
  },
  {
    question: 'How do I schedule a tour?',
    answer: (
      <>
        Call us at (469) 917-8050, email valleyranchsuitetours@gmail.com, or
        fill out the form on our{' '}
        <Link href="/contact" className="text-brand-green link-draw">contact page</Link>.
        Brandi Williams, our salon manager, will personally show you available
        suites.
      </>
    ),
  },
  {
    question: 'What types of professionals lease here?',
    answer: (
      <>
        We have hairstylists, barbers, estheticians, lash technicians, makeup
        artists, and a chiropractor. See our full{' '}
        <Link href="/directory" className="text-brand-green link-draw">specialist directory</Link>{' '}
        or browse by service:{' '}
        <Link href="/services/hair-care" className="text-brand-green link-draw">hair care</Link>,{' '}
        <Link href="/services/barber" className="text-brand-green link-draw">barber</Link>,{' '}
        <Link href="/services/skin-care" className="text-brand-green link-draw">skin care</Link>,{' '}
        <Link href="/services/lash-extensions" className="text-brand-green link-draw">lash extensions</Link>, and{' '}
        <Link href="/directory" className="text-brand-green link-draw">more</Link>.
      </>
    ),
  },
  {
    question: 'Do you have suites available right now?',
    answer: (
      <>
        Availability changes frequently. The best way to find out is to{' '}
        <Link href="/contact" className="text-brand-green link-draw">schedule a tour</Link>{' '}
        &mdash; Brandi will walk you through what&rsquo;s open and help you find
        the right fit. Call (469) 917-8050.
      </>
    ),
  },
]

function ToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-5 h-5 flex-shrink-0">
      <motion.span
        className="absolute top-1/2 left-0 w-5 h-[1.5px] bg-brand-text-muted -translate-y-1/2"
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.25 }}
      />
      <motion.span
        className="absolute top-1/2 left-0 w-5 h-[1.5px] bg-brand-text-muted -translate-y-1/2"
        animate={{ rotate: isOpen ? -45 : 90 }}
        transition={{ duration: 0.25 }}
      />
    </div>
  )
}

function faqJsonLd(items: FAQItem[]) {
  const plainText = [
    "We're at 9425 N MacArthur Blvd, Suite 150, Irving, TX 75063, in the Valley Ranch area. Our building has canal views and sits right off SH-161. We serve beauty professionals from across the DFW metroplex, including Irving, Las Colinas, Valley Ranch, Coppell, Plano, Frisco, Carrollton, Lewisville, Dallas, Richardson, Flower Mound, Arlington, Grapevine, Farmers Branch, Fort Worth, Euless, Bedford, and Hurst.",
    "Every suite is move-in ready with a styling station, shampoo bowl, and storage included. Your lease covers electricity, water, WiFi, parking, and 24/7 access. New leases include a four-week free signing bonus. Contact Brandi at (469) 917-8050 to schedule a tour.",
    "Call us at (469) 917-8050, email valleyranchsuitetours@gmail.com, or fill out the form on our contact page. Brandi Williams, our salon manager, will personally show you available suites.",
    "We have hairstylists, barbers, estheticians, lash technicians, makeup artists, and a chiropractor. See our full specialist directory or browse by service: hair care, barber, skin care, lash extensions, and more.",
    "Availability changes frequently. The best way to find out is to schedule a tour — Brandi will walk you through what's open and help you find the right fit. Call (469) 917-8050.",
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item, i) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: plainText[i],
      },
    })),
  }
}

export function GlobalFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-brand-surface-alt py-16 lg:py-20 w-full">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] text-brand-text mb-8">
          Frequently Asked Questions
        </h2>

        <div>
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-brand-green/10">
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 py-4 text-left font-body font-medium text-brand-text cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <ToggleIcon isOpen={openIndex === index} />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key={`answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-sm text-brand-text-secondary leading-[1.7] pb-4">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqItems)),
        }}
      />
    </section>
  )
}

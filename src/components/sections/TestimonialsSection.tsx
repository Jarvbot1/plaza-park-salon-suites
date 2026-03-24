'use client'

import { motion } from 'framer-motion'
import { Arrow } from '@/components/Arrow'

const testimonials = [
  {
    text: 'I absolutely love my suite at Plaza Park! The natural lighting and canal views make my clients feel relaxed the moment they walk in. Best decision I ever made for my business.',
    author: 'Hair Stylist',
  },
  {
    text: 'Moving to Plaza Park was seamless. Everything was ready — I just brought my tools and started taking clients. The 4 weeks free bonus really helped me transition without stress.',
    author: 'Esthetician',
  },
  {
    text: 'Brandi is an amazing property manager. She understands the beauty industry because she\'s in it herself. The community here is supportive and professional.',
    author: 'Barber',
  },
  {
    text: '24/7 access is a game changer. I can see late clients without worrying about building hours. And the free parking? My clients love it.',
    author: 'Lash Technician',
  },
]

export function TestimonialsSection() {
  const featured = testimonials[0]
  const rest = testimonials.slice(1)

  return (
    <section className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-brand-text mb-4">
            What our community says
          </h2>
          <p className="font-body text-brand-text-secondary">
            Rated <span className="text-brand-green font-medium">5.0</span> on
            Booksy with 209 reviews
          </p>
        </motion.div>

        {/* Featured testimonial -- full width */}
        <motion.div
          className="border-b border-brand-green/10 pb-10 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-body text-brand-text-secondary leading-relaxed text-lg lg:text-xl max-w-3xl">
            &ldquo;{featured.text}&rdquo;
          </p>
          <p className="font-body text-xs text-brand-text-muted mt-4">
            — {featured.author}, Plaza Park Suite Holder
          </p>
        </motion.div>

        {/* Remaining testimonials -- grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {rest.map((t, i) => (
            <motion.div
              key={i}
              className="border-b border-brand-green/10 pb-8 lg:border-b-0 lg:pb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="font-body text-brand-text-secondary leading-relaxed text-sm">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-body text-xs text-brand-text-muted mt-4">
                — {t.author}, Plaza Park Suite Holder
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a
            href="https://booksy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw text-brand-green font-body text-sm inline-flex items-center gap-2"
          >
            Read all 209 reviews on Booksy
            <Arrow />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

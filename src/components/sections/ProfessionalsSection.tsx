'use client'

import Link from 'next/link'
import StackedReveal from '@/components/animations/StackedReveal'
import { Arrow } from '@/components/Arrow'

const professionals = [
  { name: 'Adrianna Moore', specialty: 'Hair Care', slug: 'adrianna-moore' },
  { name: 'Jackie Dinh', specialty: 'Hair Coloring', slug: 'jackie-dinh' },
  { name: 'Sheverrick', specialty: 'Barber', slug: 'sheverrick' },
  { name: 'Amanda Kinder', specialty: 'Balayage', slug: 'amanda-kinder' },
  { name: 'Dr. Mark Charrette', specialty: 'Chiropractic', slug: 'dr-mark-charrette' },
  { name: 'Tavion Bryant', specialty: 'Barber', slug: 'tavion-bryant' },
  { name: 'Felicia Sims', specialty: 'Waxing & Skin Care', slug: 'felicia-sims' },
  { name: 'Morgan', specialty: 'Lash Extensions', slug: 'morgan' },
  { name: 'Rhonda', specialty: 'Makeup', slug: 'rhonda' },
  { name: 'Loan Tran', specialty: 'Hair Care', slug: 'loan-tran' },
  { name: 'Hitha', specialty: 'Laser & Skin', slug: 'hitha' },
  { name: 'Brandon Hayter', specialty: 'Barber', slug: 'brandon-hayter' },
  { name: 'Tyrone Jenkins', specialty: 'Barber', slug: 'tyrone-jenkins' },
  { name: 'Leonor', specialty: 'Skin Care', slug: 'leonor' },
]

export function ProfessionalsSection() {
  return (
    <section className="bg-cream py-24 md:py-32 px-6">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="font-heading text-title text-ink leading-heading tracking-tight mb-14">
          Fifteen independents. One address.
        </h2>

        <StackedReveal className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-14">
          {professionals.map((pro) => (
            <div key={pro.slug} className="py-2">
              <Link
                href={`/directory/${pro.slug}`}
                className="link-draw font-body text-body text-ink font-medium"
              >
                {pro.name}
              </Link>
              <span className="font-body text-body text-ink-muted">
                {' '} — {pro.specialty}
              </span>
            </div>
          ))}
        </StackedReveal>

        <a
          href="/directory"
          className="link-draw inline-flex items-center gap-2 font-body font-medium text-ink text-body"
        >
          View all professionals
          <Arrow />
        </a>
      </div>
    </section>
  )
}

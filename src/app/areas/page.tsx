import type { Metadata } from 'next'
import Link from 'next/link'
import { cities } from '@/lib/cities'
import type { CityData } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Areas We Serve | Plaza Park Salon Suites',
  description:
    'Plaza Park Salon Suites serves independent beauty professionals from across the Dallas-Fort Worth metroplex. Private salon suites in Valley Ranch, Irving TX with easy highway access from 18 cities.',
  alternates: {
    canonical: '/areas',
  },
}

const rings: {
  label: string
  ring: CityData['ring']
}[] = [
  { label: 'Right here', ring: 'primary' },
  { label: 'A short drive', ring: 'inner' },
  { label: 'An easy commute', ring: 'mid' },
  { label: 'Across the metroplex', ring: 'outer' },
]

export default function AreasPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-heading text-[clamp(2rem,4vw,3.5rem)] text-white">
            Areas we serve
          </h1>
          <p className="mt-4 font-body text-lg text-white/70">
            Plaza Park Salon Suites sits in Valley Ranch, Irving, at the
            crossroads of SH-161 and MacArthur Boulevard. That central position
            puts us within easy reach of beauty professionals across the
            Dallas-Fort Worth metroplex. Whether you live five minutes away or
            thirty-five, our forty private suites, included utilities, and
            four-week signing bonus make the drive worthwhile.
          </p>
        </div>
      </section>

      {/* ── City rings ────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        {rings.map((group) => {
          const groupCities = cities.filter((c) => c.ring === group.ring)
          return (
            <div key={group.ring} className="mb-14 last:mb-0">
              <h2 className="font-heading text-[clamp(1.25rem,2.5vw,1.75rem)] text-brand-text">
                {group.label}
              </h2>
              <ul className="mt-5 space-y-3">
                {groupCities.map((city) => (
                  <li key={city.slug} className="flex items-baseline gap-3">
                    <Link
                      href={`/areas/${city.slug}`}
                      className="link-draw font-body text-brand-text-secondary"
                    >
                      {city.name}, TX
                    </Link>
                    <span className="font-body text-sm text-brand-text-muted">
                      {city.driveTime}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="bg-brand-surface-alt py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-body text-brand-text-secondary leading-[1.7]">
            Do not see your city listed? We welcome beauty professionals from
            anywhere in the DFW metroplex. Call Brandi Williams at{' '}
            <a href="tel:4699178050" className="link-draw text-brand-text">
              (469) 917-8050
            </a>{' '}
            to schedule a tour and see the suites in person.
          </p>
        </div>
      </section>
    </>
  )
}

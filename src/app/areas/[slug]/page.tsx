import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cities, getCityBySlug, getNearbyCities } from '@/lib/cities'
import { Arrow } from '@/components/Arrow'
import CityFAQ from './CityFAQ'

// ── Static Params ──────────────────────────────────────────
export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }))
}

// ── Metadata ───────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) return {}

  const title = `Salon Suites Near ${city.name}, TX | ${city.driveTime} from Plaza Park`
  const description = city.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://plazaparksalonsuites.com/areas/${city.slug}`,
      siteName: 'Plaza Park Salon Suites',
      locale: 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `/areas/${city.slug}`,
    },
  }
}

// ── Services list ──────────────────────────────────────────
const serviceLinks = [
  { label: 'Hair Care', slug: 'hair-care' },
  { label: 'Barber', slug: 'barber' },
  { label: 'Skin Care', slug: 'skin-care' },
  { label: 'Lash Extensions', slug: 'lash-extensions' },
  { label: 'Braiding', slug: 'braiding' },
  { label: 'Waxing', slug: 'waxing' },
  { label: 'Makeup', slug: 'makeup' },
  { label: 'Chiropractor', slug: 'chiropractor' },
  { label: 'Massage', slug: 'massage' },
]

// ── Page ───────────────────────────────────────────────────
export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) notFound()

  const nearby = getNearbyCities(slug, 6)

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-heading text-[clamp(2rem,4vw,3.5rem)] text-white">
            Salon Suites Near {city.name}, Texas
          </h1>
          <p className="mt-4 font-body text-lg text-white/70">
            {city.tagline}. Move-in ready. Four weeks free.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-green px-6 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-brand-green-hover"
          >
            Schedule a Tour
            <Arrow className="text-white" />
          </Link>
        </div>
      </section>

      {/* ── Opening paragraph ─────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        <p className="font-body text-brand-text-secondary leading-[1.7]">
          {city.description}
        </p>
        {city.ring !== 'primary' && (
          <p className="mt-6 font-body text-brand-text-secondary leading-[1.7]">
            The route from {city.name} heads {city.direction}, covering
            roughly {city.driveDistance} in {city.driveTime} under normal
            conditions. Once you exit at MacArthur Boulevard and head north,
            the building is visible from the road with the canal running
            alongside it. Free parking sits right outside the front entrance,
            so your clients never circle a lot or feed a meter.
          </p>
        )}
      </section>

      {/* ── Driving directions ────────────────────────────── */}
      <section className="bg-brand-surface-alt py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] text-brand-text">
            Getting here from {city.name}
          </h2>
          <div className="mt-8 space-y-4 font-body text-brand-text-secondary leading-[1.7]">
            <p>
              <span className="font-medium text-brand-text">Key highways:</span>{' '}
              {city.highways.join(', ')}
            </p>
            <p>
              <span className="font-medium text-brand-text">Drive time:</span>{' '}
              {city.driveTime}
            </p>
            <p>
              <span className="font-medium text-brand-text">Distance:</span>{' '}
              {city.driveDistance}
            </p>
            <p>Free parking when you arrive.</p>
            <p className="font-medium text-brand-text">
              9425 N MacArthur Blvd, Suite 150, Irving, TX 75063
            </p>
          </div>
        </div>
      </section>

      {/* ── What you'll find ──────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        <h2 className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] text-brand-text">
          What you will find at Plaza Park
        </h2>
        <div className="mt-8 space-y-6 font-body text-brand-text-secondary leading-[1.7]">
          <p>
            Plaza Park Salon Suites is an 8,000-square-foot building in Valley
            Ranch with forty private suites. Every suite is move-in ready —
            styling station, shampoo bowl, storage included. Your lease covers
            electricity, water, WiFi, parking, and 24/7 access. There is no
            separate utility bill, no shared-space fee, and no upcharge for
            after-hours entry. You get a private, lockable space where you
            control the environment, the music, and the schedule.
          </p>
          <p>
            New tenants start with a four-week signing bonus, giving you time
            to redirect your clients, set up your space, and start earning
            before the first rent payment is due. Brandi Williams, the salon
            manager, is on site to help with everything from lease paperwork to
            maintenance requests. She keeps the building running so you can
            focus on your craft.
          </p>
          <p>
            The community here includes more than 25 independent professionals
            covering hair care, barbering, skin care, lash extensions,
            braiding, waxing, makeup artistry, chiropractic, and massage
            therapy. That range creates natural referral opportunities — a
            client visiting a hairstylist may book a lash appointment down the
            hall, or a massage client may discover a new esthetician. The
            building works for everyone because it attracts a diverse,
            professional tenant base.
          </p>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────── */}
      <section className="bg-brand-surface-alt py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] text-brand-text">
            Services at Plaza Park
          </h2>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {serviceLinks.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="link-draw font-body text-brand-text-secondary"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        <h2 className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] text-brand-text">
          Frequently asked questions
        </h2>
        <CityFAQ items={city.faqs} className="mt-8" />
      </section>

      {/* ── Cross-links ───────────────────────────────────── */}
      <section className="bg-brand-surface-alt py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] text-brand-text">
            We also serve professionals from
          </h2>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {nearby.map((c) => (
              <Link
                key={c.slug}
                href={`/areas/${c.slug}`}
                className="link-draw font-body text-brand-text-secondary"
              >
                {c.name}, TX
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="bg-brand-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] text-white">
            Your suite is waiting.
          </h2>
          <div className="mt-8 space-y-3 font-body text-white/70">
            <p>
              <a href="tel:4699178050" className="link-draw text-white">
                (469) 917-8050
              </a>
            </p>
            <p>
              <a
                href="mailto:valleyranchsuitetours@gmail.com"
                className="link-draw text-white"
              >
                valleyranchsuitetours@gmail.com
              </a>
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-green px-6 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-brand-green-hover"
          >
            Schedule a Tour
            <Arrow className="text-white" />
          </Link>
        </div>
      </section>

      {/* ── JSON-LD ───────────────────────────────────────── */}
      <CityStructuredData city={city} />
    </>
  )
}

// ── Structured Data ────────────────────────────────────────
function CityStructuredData({
  city,
}: {
  city: ReturnType<typeof getCityBySlug> & object
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://plazaparksalonsuites.com/#business',
        name: 'Plaza Park Salon Suites',
        description: `Private salon suites for lease near ${city.name}, Texas. 8,000 sq ft, 40 suites, move-in ready. ${city.driveTime} from ${city.name}.`,
        url: `https://plazaparksalonsuites.com/areas/${city.slug}`,
        telephone: '(469) 917-8050',
        email: 'valleyranchsuitetours@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '9425 N MacArthur Blvd, Suite 150',
          addressLocality: 'Irving',
          addressRegion: 'TX',
          postalCode: '75063',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 32.9174,
          longitude: -96.9527,
        },
        areaServed: {
          '@type': 'City',
          name: city.name,
          containedInPlace: {
            '@type': 'State',
            name: 'Texas',
          },
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '19:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '08:00', closes: '20:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '08:00', closes: '20:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '08:00', closes: '20:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '08:00', closes: '20:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '07:00', closes: '18:00' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: city.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://plazaparksalonsuites.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Areas',
            item: 'https://plazaparksalonsuites.com/areas',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: city.name,
            item: `https://plazaparksalonsuites.com/areas/${city.slug}`,
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

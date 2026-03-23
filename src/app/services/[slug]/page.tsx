import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  services,
  getServiceBySlug,
  getSpecialistsByService,
} from '@/lib/data'
import type { ServiceData } from '@/lib/data'
import { Arrow } from '@/components/Arrow'
import { ServiceFAQ } from './ServiceFAQ'

// ── Static Params ──────────────────────────────────────────
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

// ── Metadata ───────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.description,
    openGraph: {
      title: service.metaTitle,
      description: service.description,
      url: `https://plazaparksalonsuites.com/services/${service.slug}`,
      siteName: 'Plaza Park Salon Suites',
      locale: 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  }
}

// ── Helpers ────────────────────────────────────────────────

/** Split a long description into paragraphs at sentence boundaries. */
function splitIntoParagraphs(text: string): string[] {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text]
  const paragraphs: string[] = []
  let current = ''

  for (const sentence of sentences) {
    current += sentence
    // Roughly 2–3 sentences per paragraph
    const sentenceCount = (current.match(/[.!?]+/g) || []).length
    if (sentenceCount >= 2) {
      paragraphs.push(current.trim())
      current = ''
    }
  }
  if (current.trim()) {
    paragraphs.push(current.trim())
  }
  return paragraphs
}

// ── Page ───────────────────────────────────────────────────
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const specialists = getSpecialistsByService(service.title)

  const relatedServices = service.relatedServices
    .map((rs) => services.find((s) => s.slug === rs))
    .filter(Boolean) as ServiceData[]

  const paragraphs = splitIntoParagraphs(service.longDescription)

  return (
    <>
      <StructuredData service={service} />

      <div className="bg-cream min-h-screen">
        {/* 1. Breadcrumb */}
        <nav className="pt-24 pb-2 max-w-3xl mx-auto px-6">
          <p className="text-small text-ink-muted font-body">
            <Link href="/services" className="link-draw">
              Services
            </Link>
            {' / '}
            <span className="text-ink">{service.title}</span>
          </p>
        </nav>

        {/* 2. Heading */}
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-display font-heading text-ink leading-heading tracking-tighter">
            {service.title}
          </h1>

          {/* 3. Location line */}
          <p className="mt-2 text-small uppercase tracking-wide text-ink-muted font-body">
            Irving, TX — Valley Ranch
          </p>
        </div>

        {/* 4. Main content — prose paragraphs */}
        <div className="max-w-3xl mx-auto px-6 py-12">
          {paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="mb-6 font-body font-light text-ink-light leading-body"
            >
              {paragraph}
            </p>
          ))}

          {/* 5. Specialists section */}
          <section className="mt-12">
            <h2 className="text-title font-heading text-ink">
              Our {service.title.toLowerCase()} specialists
            </h2>

            {specialists.length > 0 ? (
              <ul className="mt-6">
                {specialists.map((specialist) => (
                  <li
                    key={specialist.slug}
                    className="py-4 border-b border-cream-dark"
                  >
                    <Link
                      href={`/directory/${specialist.slug}`}
                      className="link-draw text-ink font-body"
                    >
                      {specialist.name}
                    </Link>
                    <p className="mt-1 text-small text-ink-muted font-body">
                      {specialist.businessName} — Suite {specialist.suite}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 font-body font-light text-ink-light">
                <Link href="/contact" className="link-draw text-ink">
                  Contact us
                </Link>{' '}
                about {service.title.toLowerCase()} availability.
              </p>
            )}
          </section>

          {/* 6. FAQ section */}
          {service.faqs.length > 0 && (
            <ServiceFAQ faqs={service.faqs} serviceTitle={service.title} />
          )}

          {/* 7. CTA */}
          <div className="mt-12 text-center">
            <p className="text-subtitle font-heading text-ink">
              Interested in {service.title.toLowerCase()} at Plaza Park?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-4 link-draw text-warm font-body"
            >
              Schedule a tour <Arrow className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 8. Related services */}
          {relatedServices.length > 0 && (
            <div className="mt-12 border-t border-cream-dark pt-8">
              <p className="text-small uppercase tracking-wide text-ink-muted font-body mb-4">
                You might also be interested in
              </p>
              <ul className="space-y-2">
                {relatedServices.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={`/services/${related.slug}`}
                      className="link-draw text-ink font-body"
                    >
                      {related.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// ── Structured Data (JSON-LD) ──────────────────────────────
function StructuredData({ service }: { service: ServiceData }) {
  const baseUrl = 'https://plazaparksalonsuites.com'

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#business`,
      name: 'Plaza Park Salon Suites',
      telephone: '(469) 917-8050',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9425 N MacArthur Blvd, Suite 150',
        addressLocality: 'Irving',
        addressRegion: 'TX',
        postalCode: '75063',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Irving',
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    },
    url: `${baseUrl}/services/${service.slug}`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${baseUrl}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `${baseUrl}/services/${service.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

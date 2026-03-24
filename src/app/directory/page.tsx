import type { Metadata } from "next";
import Link from "next/link";
import { specialists } from "@/lib/data";
import { Arrow } from "@/components/Arrow";

export const metadata: Metadata = {
  title: "Our Professionals | Plaza Park Salon Suites | Irving TX",
  description:
    "Meet the 25+ independent beauty professionals at Plaza Park Salon Suites in Valley Ranch, TX. Hair, barber, skin, lash, makeup, and wellness specialists.",
  alternates: { canonical: "/directory" },
};

export default function DirectoryPage() {
  const brandi = specialists.find((s) => s.isPropertyManager);
  const others = specialists.filter((s) => !s.isPropertyManager);

  return (
    <>
      <DirectorySchema />

      <div className="bg-cream min-h-screen">
        {/* ── Header ── */}
        <section className="pt-24 pb-16 max-w-5xl mx-auto px-6">
          <h1 className="text-display font-heading text-ink leading-heading tracking-tighter">
            Our Professionals
          </h1>
          <p className="mt-4 text-subtitle font-body font-light text-ink-light leading-subheading">
            25+ independent specialists. One address.
          </p>
        </section>

        {/* ── Featured: Brandi ── */}
        {brandi && (
          <section className="max-w-5xl mx-auto px-6 pb-16">
            <div className="bg-cream-dark py-8 px-8 rounded-[8px]">
              <p className="text-small uppercase tracking-wide text-ink-muted font-body mb-3">
                Salon Manager
              </p>
              <h2 className="text-title font-heading text-ink leading-heading">
                {brandi.name}
              </h2>
              <p className="text-small text-ink-light font-body mt-1">
                {brandi.primaryService} — Suite {brandi.suite}
              </p>
              {brandi.bio && (
                <p className="mt-4 font-body font-light text-ink-light leading-body text-small max-w-2xl">
                  {brandi.bio}
                </p>
              )}
              <Link
                href={`/directory/${brandi.slug}`}
                className="inline-flex items-center gap-2 mt-5 text-small font-body text-ink link-draw"
              >
                View profile <Arrow className="w-3 h-3" />
              </Link>
            </div>
          </section>
        )}

        {/* ── Specialist Grid ── */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {others.map((specialist) => (
              <div
                key={specialist.slug}
                className="py-6 border-b border-cream-dark"
              >
                <h3 className="text-subtitle font-heading text-ink">
                  {specialist.name}
                </h3>
                <p className="text-small text-ink-muted font-body mt-1">
                  {specialist.businessName}
                </p>
                <p className="text-small text-ink-light font-body mt-0.5">
                  {specialist.primaryService} — Suite {specialist.suite}
                </p>
                <Link
                  href={`/directory/${specialist.slug}`}
                  className="inline-flex items-center gap-2 mt-3 text-small font-body text-ink link-draw"
                >
                  View profile <Arrow className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function DirectorySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "Plaza Park Salon Suites Professionals Directory",
        description:
          "Independent beauty and wellness specialists at Plaza Park Salon Suites in Irving, TX.",
        numberOfItems: specialists.length,
        itemListElement: specialists.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Person",
            name: s.name,
            jobTitle: s.primaryService,
            worksFor: {
              "@type": "LocalBusiness",
              name: "Plaza Park Salon Suites",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9425 N MacArthur Blvd, Suite 150",
                addressLocality: "Irving",
                addressRegion: "TX",
                postalCode: "75063",
              },
            },
            url: `https://plazaparksalonsuites.com/directory/${s.slug}`,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://plazaparksalonsuites.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Our Professionals",
            item: "https://plazaparksalonsuites.com/directory",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

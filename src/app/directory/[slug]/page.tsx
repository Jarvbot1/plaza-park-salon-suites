import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { specialists, getSpecialistBySlug } from "@/lib/data";
import { Arrow } from "@/components/Arrow";
import { SpecialistProfileClient } from "./SpecialistProfileClient";

// ── Static Params ──
export function generateStaticParams() {
  return specialists.map((s) => ({ slug: s.slug }));
}

// ── Dynamic Metadata ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const specialist = getSpecialistBySlug(slug);
  if (!specialist) return {};

  const title = `${specialist.name} — ${specialist.businessName} | Suite ${specialist.suite} | Plaza Park Salon Suites`;
  const description = specialist.bio
    ? specialist.bio.slice(0, 155) + "..."
    : `${specialist.name} offers ${specialist.services.join(", ")} services from Suite ${specialist.suite} at Plaza Park Salon Suites in Irving, TX.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/directory/${specialist.slug}`,
    },
  };
}

// ── Page ──
export default async function SpecialistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialist = getSpecialistBySlug(slug);
  if (!specialist) notFound();

  return (
    <>
      <SpecialistSchema specialist={specialist} />
      <div className="bg-cream min-h-screen">
        {/* ── Breadcrumb ── */}
        <nav className="pt-24 pb-8 max-w-3xl mx-auto px-6">
          <p className="text-small text-ink-muted font-body">
            <Link href="/directory" className="link-draw">
              Professionals
            </Link>
            {" / "}
            <span className="text-ink">{specialist.name}</span>
          </p>
        </nav>

        {/* ── Profile Header ── */}
        <section className="max-w-3xl mx-auto px-6 pb-12">
          <h1 className="text-display font-heading text-ink leading-heading tracking-tighter">
            {specialist.name}
          </h1>
          <p className="mt-2 text-subtitle font-body font-light text-ink-light">
            {specialist.businessName}
          </p>
          <p className="mt-1 text-small text-ink-muted font-body">
            Suite {specialist.suite} — {specialist.primaryService}
          </p>
        </section>

        {/* ── Bio / Description ── */}
        <section className="max-w-3xl mx-auto px-6 pb-12">
          {specialist.bio ? (
            <div className="font-body font-light text-ink-light leading-body space-y-4">
              {specialist.bio.split("\n").filter(Boolean).length > 1 ? (
                specialist.bio
                  .split("\n")
                  .filter(Boolean)
                  .map((paragraph, i) => <p key={i}>{paragraph}</p>)
              ) : (
                <p>{specialist.bio}</p>
              )}
            </div>
          ) : (
            <div className="font-body font-light text-ink-light leading-body space-y-4">
              <p>
                {specialist.name} operates {specialist.businessName} from Suite{" "}
                {specialist.suite} at Plaza Park Salon Suites in Irving, TX.
                Specializing in{" "}
                {specialist.services.length > 1
                  ? specialist.services.slice(0, -1).join(", ") +
                    " and " +
                    specialist.services[specialist.services.length - 1]
                  : specialist.services[0]}
                , {specialist.name.split(" ")[0]} brings dedicated expertise and
                a personal touch to every appointment.
              </p>
              <p>
                As an independent professional at Plaza Park, {specialist.name.split(" ")[0]} sets
                their own schedule, selects their own products, and creates a
                private, comfortable experience for every client. Walk-ins and
                appointments are welcome — reach out directly to book your visit.
              </p>
            </div>
          )}
        </section>

        {/* ── Services ── */}
        <section className="max-w-3xl mx-auto px-6 pb-12">
          <h2 className="text-subtitle font-heading text-ink mb-3">
            Services
          </h2>
          <p className="font-body text-small text-ink-light">
            {specialist.services.join(", ")}
          </p>
        </section>

        {/* ── Contact / Book ── */}
        <section className="max-w-3xl mx-auto px-6 pb-12">
          <h2 className="text-subtitle font-heading text-ink mb-4">
            Book with {specialist.name.split(" ")[0]}
          </h2>
          {specialist.bookingUrl && (
            <p className="mb-4">
              <a
                href={specialist.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-small text-ink link-draw"
              >
                Book online <Arrow className="w-3 h-3" />
              </a>
            </p>
          )}
          <p className="font-body text-small text-ink-light mb-6">
            Call{" "}
            <a href="tel:+14699178050" className="link-draw text-ink">
              (469) 917-8050
            </a>{" "}
            or email{" "}
            <a
              href="mailto:valleyranchsuitetours@gmail.com"
              className="link-draw text-ink"
            >
              valleyranchsuitetours@gmail.com
            </a>{" "}
            to schedule an appointment.
          </p>
          <SpecialistProfileClient specialistName={specialist.name} />
        </section>

        {/* ── Back Link ── */}
        <section className="max-w-3xl mx-auto px-6 pb-24">
          <Link
            href="/directory"
            className="inline-flex items-center gap-2 font-body text-small text-ink-muted link-draw"
          >
            <Arrow className="w-3 h-3 rotate-[225deg]" />
            Back to all professionals
          </Link>
        </section>
      </div>
    </>
  );
}

// ── Schema ──
function SpecialistSchema({
  specialist,
}: {
  specialist: NonNullable<ReturnType<typeof getSpecialistBySlug>>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: specialist.name,
        jobTitle: specialist.primaryService,
        worksFor: {
          "@type": "LocalBusiness",
          name: "Plaza Park Salon Suites",
        },
        workLocation: {
          "@type": "Place",
          name: "Plaza Park Salon Suites",
          address: {
            "@type": "PostalAddress",
            streetAddress: `9425 N MacArthur Blvd, Suite ${specialist.suite}`,
            addressLocality: "Irving",
            addressRegion: "TX",
            postalCode: "75063",
            addressCountry: "US",
          },
        },
        url: `https://plazaparksalonsuites.com/directory/${specialist.slug}`,
        description:
          specialist.bio ??
          `${specialist.name} provides ${specialist.services.join(", ")} services at Plaza Park Salon Suites.`,
        knowsAbout: specialist.services,
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
          {
            "@type": "ListItem",
            position: 3,
            name: specialist.name,
            item: `https://plazaparksalonsuites.com/directory/${specialist.slug}`,
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

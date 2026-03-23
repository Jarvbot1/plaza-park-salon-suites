import type { Metadata } from "next";
import { LeasePageClient } from "./LeasePageClient";

export const metadata: Metadata = {
  title: "Lease a Suite | Plaza Park Salon Suites | Irving TX",
  description:
    "Move-in ready private salon suites in Irving, TX. Four weeks free on new leases. Flexible terms, 24/7 access, all utilities included.",
  alternates: { canonical: "/lease" },
};

export default function LeasePage() {
  return (
    <>
      <LeasePageClient />
      <LeaseStructuredData />
    </>
  );
}

function LeaseStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Private Salon Suite Leasing",
        description:
          "Move-in ready private salon suites at Plaza Park Salon Suites in Irving, TX. Flexible lease terms, 24/7 access, all utilities included, four weeks free on new leases.",
        provider: {
          "@id": "https://plazaparksalonsuites.com/#business",
        },
        serviceType: "Salon Suite Leasing",
        areaServed: [
          {
            "@type": "City",
            name: "Irving",
            containedInPlace: { "@type": "State", name: "Texas" },
          },
          { "@type": "Place", name: "Valley Ranch" },
          { "@type": "Place", name: "Las Colinas" },
        ],
        offers: {
          "@type": "Offer",
          description: "Four weeks free signing bonus for new tenants",
          availability: "https://schema.org/InStock",
        },
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
            name: "Lease a Suite",
            item: "https://plazaparksalonsuites.com/lease",
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

import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact | Plaza Park Salon Suites | Irving TX",
  description:
    "Schedule a tour or inquire about leasing a private salon suite. Call (469) 917-8050 or visit 9425 N MacArthur Blvd, Suite 150, Irving TX.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactPageClient />
      <ContactStructuredData />
    </>
  );
}

function ContactStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://plazaparksalonsuites.com/#business",
        name: "Plaza Park Salon Suites",
        telephone: "(469) 917-8050",
        email: "valleyranchsuitetours@gmail.com",
        url: "https://plazaparksalonsuites.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "9425 N MacArthur Blvd, Suite 150",
          addressLocality: "Irving",
          addressRegion: "TX",
          postalCode: "75063",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 32.9174,
          longitude: -96.9527,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Monday",
            opens: "09:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Tuesday",
            opens: "08:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Wednesday",
            opens: "08:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Thursday",
            opens: "08:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Friday",
            opens: "08:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "07:00",
            closes: "18:00",
          },
        ],
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
            name: "Contact",
            item: "https://plazaparksalonsuites.com/contact",
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

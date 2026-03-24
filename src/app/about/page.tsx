import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About | Plaza Park Salon Suites | Irving TX",
  description:
    "An 8,000-square-foot building with forty private salon suites in Valley Ranch, TX. Managed by Brandi Williams from Suite 39.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutPageClient />
      <FAQPageSchema />
      <AboutStructuredData />
    </>
  );
}

function FAQPageSchema() {
  const faqItems = [
    {
      question: "How much does a suite cost?",
      answer:
        "Lease rates vary by suite size and location within the building. New leases currently include a four-week free signing bonus. Contact Brandi Williams at (469) 917-8050 for current availability and pricing.",
    },
    {
      question: "What\u2019s included in the lease?",
      answer:
        "Every suite comes move-in ready with a styling station, shampoo bowl, and storage. Your lease covers electricity, water, WiFi, parking, and 24/7 building access. Bring your tools and your clients \u2014 everything else is handled.",
    },
    {
      question: "Do I need to sign a long-term lease?",
      answer:
        "No. Plaza Park offers flexible lease terms. We don\u2019t lock you into multi-year commitments. Talk to Brandi about options that work for your situation.",
    },
    {
      question: "Can I see the space before committing?",
      answer:
        "Absolutely. Schedule a tour by calling (469) 917-8050 or emailing valleyranchsuitetours@gmail.com. Brandi will walk you through available suites and answer any questions.",
    },
    {
      question: "What types of professionals lease here?",
      answer:
        "Hair stylists, barbers, estheticians, lash technicians, makeup artists, a chiropractor, waxing specialists, and more. Any licensed beauty or wellness professional can lease a suite.",
    },
    {
      question: "Is there parking?",
      answer:
        "Yes. Free parking is available for both suite holders and their clients. The building is at 9425 N MacArthur Blvd, Suite 150, with easy access from MacArthur Boulevard.",
    },
    {
      question: "Do I have 24/7 access?",
      answer:
        "Yes. Suite holders have 24/7 key access to the building. The posted business hours are for the front desk and general building access, but your suite is available whenever you need it.",
    },
    {
      question: "Where exactly is Plaza Park?",
      answer:
        "9425 N MacArthur Blvd, Suite 150, Irving, TX 75063. We\u2019re in the Valley Ranch area, near Las Colinas. The building sits along the canal with easy access from Highway 114 and MacArthur Boulevard.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function AboutStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://plazaparksalonsuites.com/about",
        name: "About Plaza Park Salon Suites",
        description:
          "An 8,000-square-foot building with forty private salon suites in Valley Ranch, TX. Managed by Brandi Williams from Suite 39.",
        url: "https://plazaparksalonsuites.com/about",
        mainEntity: {
          "@id": "https://plazaparksalonsuites.com/#business",
        },
      },
      {
        "@type": "Person",
        "@id": "https://plazaparksalonsuites.com/#brandi-williams",
        name: "Brandi Williams",
        jobTitle: "Salon Manager",
        worksFor: {
          "@id": "https://plazaparksalonsuites.com/#business",
        },
        telephone: "(469) 917-8050",
        email: "valleyranchsuitetours@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "9425 N MacArthur Blvd, Suite 150",
          addressLocality: "Irving",
          addressRegion: "TX",
          postalCode: "75063",
          addressCountry: "US",
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
            name: "About",
            item: "https://plazaparksalonsuites.com/about",
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

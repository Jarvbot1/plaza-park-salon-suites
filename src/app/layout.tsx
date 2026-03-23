import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedNav } from "@/components/layout/AnimatedNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/animations/ScrollProgress";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plaza Park Salon Suites | Private Salon Suites for Lease | Irving TX",
  description:
    "Premium private salon suites starting with a 4-week free signing bonus in Irving, TX. Move-in ready with appliances included, canal views, and 24/7 access. 40 suites, 15+ beauty professionals. 9425 N MacArthur Blvd, Suite 150.",
  keywords: [
    "salon suites Irving TX",
    "Plaza Park Salon Suites",
    "salon suite for rent Irving",
    "private salon suite near me",
    "beauty suite Valley Ranch",
    "salon suites Las Colinas",
  ],
  openGraph: {
    title: "Plaza Park Salon Suites | Private Salon Suites for Lease | Irving TX",
    description:
      "Premium private salon suites with a 4-week free signing bonus in Irving, TX. Move-in ready, canal views, 24/7 access.",
    url: "https://plazaparksalonsuites.com",
    siteName: "Plaza Park Salon Suites",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plaza Park Salon Suites | Irving TX",
    description:
      "Premium private salon suites with a 4-week free signing bonus. Move-in ready, canal views, 24/7 access.",
  },
  metadataBase: new URL("https://plazaparksalonsuites.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lora.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <AnimatedNav />
        <main className="flex-1">{children}</main>
        <Footer />
        <StructuredData />
      </body>
    </html>
  );
}

function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://plazaparksalonsuites.com/#business",
        name: "Plaza Park Salon Suites",
        description:
          "Premium private salon suites for independent beauty professionals in Irving, Texas. 40 suites, canal views, move-in ready with appliances included.",
        url: "https://plazaparksalonsuites.com",
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
        geo: {
          "@type": "GeoCoordinates",
          latitude: 32.9174,
          longitude: -96.9527,
        },
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "19:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "20:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "08:00", closes: "21:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "08:00", closes: "22:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "22:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "07:00", closes: "18:00" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "209",
          bestRating: "5",
        },
        priceRange: "$$",
        image: "https://plazaparksalonsuites.com/images/og-image.jpg",
        sameAs: [
          "https://www.facebook.com/p/Plaza-Park-Salon-Suites-2-100068373005781/",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://plazaparksalonsuites.com/#org",
        name: "Plaza Park Salon Suites",
        url: "https://plazaparksalonsuites.com",
        logo: "https://plazaparksalonsuites.com/images/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "(469) 917-8050",
          contactType: "customer service",
          email: "valleyranchsuitetours@gmail.com",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://plazaparksalonsuites.com/#website",
        url: "https://plazaparksalonsuites.com",
        name: "Plaza Park Salon Suites",
        publisher: { "@id": "https://plazaparksalonsuites.com/#org" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://plazaparksalonsuites.com/directory?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
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

"use client";

import { MarqueeStrip } from "@/components/animations/MarqueeStrip";

const marqueeItems = [
  "4 Weeks Free",
  "Move-In Ready",
  "Appliances Included",
  "Canal Views",
  "24/7 Access",
  "Free Parking",
  "40 Private Suites",
  "5.0★ on Booksy",
];

export function MarqueeSection() {
  return <MarqueeStrip items={marqueeItems} />;
}

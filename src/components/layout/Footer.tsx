import Link from "next/link";

const navLinks = [
  { href: "/lease", label: "Lease" },
  { href: "/directory", label: "Our Professionals" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <p className="font-heading text-[clamp(1.25rem,2vw,1.5rem)] text-brand-green-light mb-6">
              PLAZA PARK SALON SUITES
            </p>
            <div className="space-y-2">
              <p className="font-body text-sm text-[#FAF7F2]/70">
                9425 N MacArthur Blvd, Suite 150
                <br />
                Irving, TX 75063
              </p>
              <a
                href="tel:4699178050"
                className="block font-body text-sm text-[#FAF7F2]/70 hover:text-brand-green-light transition-colors"
              >
                (469) 917-8050
              </a>
              <a
                href="mailto:valleyranchsuitetours@gmail.com"
                className="block font-body text-sm text-[#FAF7F2]/70 hover:text-brand-green-light transition-colors"
              >
                valleyranchsuitetours@gmail.com
              </a>
              <a
                href="https://www.facebook.com/p/Plaza-Park-Salon-Suites-2-100068373005781/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block link-draw font-body text-sm text-[#FAF7F2]/70 hover:text-brand-green-light transition-colors mt-2"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Right column */}
          <div>
            {/* Hours */}
            <div>
              <p className="font-body text-xs tracking-[0.08em] uppercase text-[#FAF7F2]/50 mb-4">
                Hours
              </p>
              <div className="font-body text-sm text-[#FAF7F2]/70 space-y-1">
                <p>Mon 9–7 &middot; Tue 9–8 &middot; Wed 8–9</p>
                <p>Thu–Fri 8–10 &middot; Sat 7–6 &middot; Sun Closed</p>
                <p className="italic mt-2">Suite holders have 24/7 access.</p>
              </div>
            </div>

            {/* Navigate */}
            <div className="mt-8">
              <p className="font-body text-xs tracking-[0.08em] uppercase text-[#FAF7F2]/50 mb-4">
                Navigate
              </p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-draw font-body text-sm text-[#FAF7F2]/70 hover:text-brand-green-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#FAF7F2]/10">
          <p className="font-body text-xs text-[#FAF7F2]/40">
            &copy; 2026 Plaza Park Salon Suites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

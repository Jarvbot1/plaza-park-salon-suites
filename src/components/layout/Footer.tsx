import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";

const quickLinks = [
  { href: "/lease", label: "Lease a Suite" },
  { href: "/directory", label: "Our Professionals" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
];

const services = [
  "Hair Care",
  "Barber",
  "Skin Care",
  "Lash Extensions",
  "Braiding",
  "Waxing",
  "Makeup",
  "Chiropractor",
  "Massage",
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">PP</span>
              </div>
              <div>
                <p className="font-heading font-bold text-xl text-brand-cream leading-tight">
                  Plaza Park
                </p>
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-green-light">
                  Salon Suites
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-brand-cream/70 leading-relaxed mb-6">
              Premium private salon suites for independent beauty professionals
              in the Valley Ranch / Las Colinas corridor of Irving, Texas.
            </p>
            <a
              href="https://www.facebook.com/p/Plaza-Park-Salon-Suites-2-100068373005781/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-green-light hover:text-brand-green transition-colors"
            >
              <Facebook size={18} />
              <span className="text-sm">Follow us on Facebook</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-brand-cream/70 hover:text-brand-green-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="font-body text-sm text-brand-cream/70 hover:text-brand-green-light transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-green-light mt-1 shrink-0" />
                <span className="font-body text-sm text-brand-cream/70">
                  9425 N MacArthur Blvd, Suite 150
                  <br />
                  Irving, TX 75063
                </span>
              </li>
              <li>
                <a
                  href="tel:4699178050"
                  className="flex items-center gap-3 text-brand-cream/70 hover:text-brand-green-light transition-colors"
                >
                  <Phone size={16} className="text-brand-green-light shrink-0" />
                  <span className="font-body text-sm">(469) 917-8050</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:valleyranchsuitetours@gmail.com"
                  className="flex items-center gap-3 text-brand-cream/70 hover:text-brand-green-light transition-colors"
                >
                  <Mail size={16} className="text-brand-green-light shrink-0" />
                  <span className="font-body text-sm break-all">
                    valleyranchsuitetours@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-brand-green-light mt-1 shrink-0" />
                <div className="font-body text-sm text-brand-cream/70">
                  <p>Mon 9–7 · Tue 9–8 · Wed 8–9</p>
                  <p>Thu–Fri 8–10 · Sat 7–6</p>
                </div>
              </li>
            </ul>

            {/* Brandi Contact Card */}
            <div className="mt-6 p-4 bg-brand-green/10 rounded-xl border border-brand-green/20">
              <p className="font-heading font-semibold text-sm text-brand-green-light">
                Property Manager
              </p>
              <p className="font-heading font-bold text-brand-cream">
                Brandi Williams
              </p>
              <a
                href="tel:4699178050"
                className="text-sm text-brand-cream/70 hover:text-brand-green-light transition-colors"
              >
                (469) 917-8050
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-brand-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-brand-cream/50">
            &copy; {new Date().getFullYear()} Plaza Park Salon Suites. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-body text-xs text-brand-cream/50 hover:text-brand-cream/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-body text-xs text-brand-cream/50 hover:text-brand-cream/80 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

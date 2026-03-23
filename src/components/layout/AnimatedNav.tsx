"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { MagneticButton } from "@/components/animations/MagneticButton";

const navLinks = [
  { href: "/lease", label: "Lease a Suite" },
  { href: "/directory", label: "Directory" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function AnimatedNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.15]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85]);

  return (
    <>
      <motion.header
        style={{
          backgroundColor: `rgba(250, 249, 245, ${bgOpacity.get()})`,
        }}
        className="fixed top-[3px] left-0 right-0 z-40"
      >
        <motion.div
          style={{
            backgroundColor: useTransform(bgOpacity, (v) => `rgba(250, 249, 245, ${v})`),
            borderBottomColor: useTransform(
              borderOpacity,
              (v) => `rgba(120, 140, 93, ${v})`
            ),
            backdropFilter: useTransform(bgOpacity, (v) =>
              v > 0.5 ? "blur(12px)" : "none"
            ),
          }}
          className="border-b"
        >
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <motion.div style={{ scale: logoScale }}>
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-lg">PP</span>
                </div>
                <div className="hidden sm:block">
                  <p className="font-heading font-bold text-xl text-brand-text leading-tight">
                    Plaza Park
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-brand-text-secondary">
                    Salon Suites
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-brand-text-secondary hover:text-brand-green transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:4699178050"
                className="flex items-center gap-2 text-sm text-brand-text-secondary hover:text-brand-green transition-colors"
              >
                <Phone size={14} />
                (469) 917-8050
              </a>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="bg-brand-green text-white rounded-2xl px-6 py-2.5 text-sm font-body font-medium hover:bg-brand-green-hover active:scale-[0.98] transition-all duration-300"
                >
                  Schedule Tour
                </Link>
              </MagneticButton>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-brand-text"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-30 bg-brand-cream pt-24"
        >
          <nav className="flex flex-col items-center gap-6 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-3xl font-semibold text-brand-text hover:text-brand-green transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col items-center gap-4">
              <a
                href="tel:4699178050"
                className="flex items-center gap-2 text-lg text-brand-text-secondary"
              >
                <Phone size={18} />
                (469) 917-8050
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-brand-green text-white rounded-2xl px-8 py-3.5 font-body font-medium text-lg hover:bg-brand-green-hover transition-all duration-300"
              >
                Schedule a Tour
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  );
}

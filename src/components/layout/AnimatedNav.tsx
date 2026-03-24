"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Arrow } from "@/components/Arrow";

const navLinks = [
  { href: "/lease", label: "Lease" },
  { href: "/directory", label: "Professionals" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function AnimatedNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { scrollY } = useScroll();

  // On homepage: start transparent with white text, morph on scroll
  // On other pages: always show solid background with dark text
  const bgOpacity = useTransform(scrollY, [0, 80], [isHome ? 0 : 1, 1]);
  const borderOpacity = useTransform(scrollY, [0, 80], [isHome ? 0 : 0.12, 0.12]);
  const logoScale = useTransform(scrollY, [0, 80], [1, 0.92]);
  const blur = useTransform(scrollY, [0, 50], [isHome ? 0 : 8, 8]);

  const textColor = useTransform(
    scrollY,
    [0, 80],
    [isHome ? "#ffffff" : "#1a1f16", "#1a1f16"]
  );
  const textSecondaryColor = useTransform(
    scrollY,
    [0, 80],
    [isHome ? "rgba(255,255,255,0.85)" : "#4a5240", "#4a5240"]
  );
  const hamburgerColor = useTransform(
    scrollY,
    [0, 80],
    [isHome ? "#ffffff" : "#1a1f16", "#1a1f16"]
  );

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        style={{
          backgroundColor: useTransform(
            bgOpacity,
            (v) => `rgba(250, 251, 248, ${v})`
          ),
          borderBottomColor: useTransform(
            borderOpacity,
            (v) => `rgba(26, 46, 26, ${v})`
          ),
          backdropFilter: useTransform(blur, (v) =>
            v > 0 ? `blur(${v}px)` : "none"
          ),
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b"
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.div style={{ scale: logoScale }}>
            <Link href="/" className="font-heading text-xl lg:text-2xl">
              <motion.span style={{ color: textColor }}>
                PLAZA PARK
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-draw font-body text-sm"
              >
                <motion.span style={{ color: textSecondaryColor }}>
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-green text-white rounded-md px-5 py-2 font-body text-sm tracking-wide hover:bg-brand-green-hover active:scale-[0.98] transition-all duration-300"
              >
                Schedule a Tour
                <Arrow />
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger — two lines */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[7px]"
            aria-label="Toggle menu"
          >
            <motion.span
              style={{ backgroundColor: hamburgerColor }}
              className={`block w-5 h-[1.5px] transition-transform duration-200 ${
                mobileOpen ? "translate-y-[4.25px] rotate-45" : ""
              }`}
            />
            <motion.span
              style={{ backgroundColor: hamburgerColor }}
              className={`block w-5 h-[1.5px] transition-transform duration-200 ${
                mobileOpen ? "-translate-y-[4.25px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-brand-dark flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-end px-6 h-16 items-center">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl leading-none"
                aria-label="Close menu"
              >
                x
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-7">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-3xl text-white hover:text-brand-green-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.25 }}
                className="mt-6 flex flex-col items-center gap-4"
              >
                <a
                  href="tel:4699178050"
                  className="font-body text-sm text-white/70 hover:text-brand-green-light transition-colors"
                >
                  (469) 917-8050
                </a>
                <a
                  href="mailto:valleyranchsuitetours@gmail.com"
                  className="font-body text-sm text-white/70 hover:text-brand-green-light transition-colors"
                >
                  valleyranchsuitetours@gmail.com
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 bg-brand-green text-white rounded-md px-6 py-3 font-body text-sm tracking-wide hover:bg-brand-green-hover transition-all duration-300 mt-2"
                >
                  Schedule a Tour
                  <Arrow />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

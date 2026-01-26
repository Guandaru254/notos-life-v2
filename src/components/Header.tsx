"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Keep these aligned with REAL routes that exist in your app.
 * (Don't add new hrefs here unless the pages are actually created.)
 */
const concepts = [
  { name: "Notos Greek", meta: "Muthaiga", href: "/concepts/greek" },
  { name: "Notos Kitchen Bar", meta: "Upper Hill", href: "/concepts/kitchen-bar" },
  { name: "Notos Catering", meta: "Corporate Catering", href: "/concepts/catering" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Desktop dropdown
  const [conceptsOpen, setConceptsOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Mobile dropdown
  const [mobileConceptsOpen, setMobileConceptsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus if user navigates / toggles
  useEffect(() => {
    if (!isOpen) setMobileConceptsOpen(false);
  }, [isOpen]);

  /** Hover-safe open for desktop */
  const openConcepts = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setConceptsOpen(true);
  };

  /** Delayed close for desktop */
  const closeConcepts = () => {
    closeTimeout.current = setTimeout(() => setConceptsOpen(false), 150);
  };

  const desktopLinkClass = isScrolled
    ? "text-gray-900 hover:text-[#d3960c]"
    : "text-white hover:text-[#d3960c]";

  const desktopMutedClass = isScrolled ? "text-gray-600" : "text-white/80";
  const headerClass = isScrolled
    ? "bg-white/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/80"
    : "bg-transparent";

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            href="/"
            className={`text-3xl font-black uppercase tracking-tight transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Notos<span className="text-[#d3960c]">Life</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 font-medium items-center">
          <Link href="/" className={`transition-colors ${desktopLinkClass}`}>
            Home
          </Link>

          {/* Our Concepts — desktop dropdown */}
          <div className="relative" onMouseEnter={openConcepts} onMouseLeave={closeConcepts}>
            <button
              type="button"
              onClick={() => setConceptsOpen((prev) => !prev)}
              className={`flex items-center gap-1 transition-colors ${desktopLinkClass}`}
              aria-haspopup="menu"
              aria-expanded={conceptsOpen}
            >
              Our Concepts
              <ChevronDown
                size={16}
                className={`transition-transform ${conceptsOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {conceptsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.16 }}
                  className="absolute left-0 top-full mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                  role="menu"
                >
                  <div className="py-2">
                    {concepts.map((concept) => (
                      <Link
                        key={concept.name}
                        href={concept.href}
                        className="block px-5 py-4 hover:bg-gray-50 transition-colors"
                        onClick={() => setConceptsOpen(false)}
                        role="menuitem"
                      >
                        <p className="font-semibold text-gray-900">{concept.name}</p>
                        <p className="text-sm text-gray-600">{concept.meta}</p>
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-gray-100">
                    <Link
                      href="/concepts"
                      className="block px-5 py-3 text-sm font-semibold text-[#d3960c] hover:bg-gray-50 transition-colors"
                      onClick={() => setConceptsOpen(false)}
                    >
                      View All Concepts →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className={`transition-colors ${desktopLinkClass}`}>
            About
          </Link>

          <Link href="/contact" className={`transition-colors ${desktopLinkClass}`}>
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-6 py-6 space-y-3">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block text-gray-900 font-semibold"
              >
                Home
              </Link>

              {/* Mobile dropdown for concepts */}
              <div className="rounded-xl border border-gray-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileConceptsOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-900 font-semibold"
                  aria-expanded={mobileConceptsOpen}
                >
                  <span>Our Concepts</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${mobileConceptsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileConceptsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="border-t border-gray-200"
                    >
                      <div className="px-2 py-2">
                        {concepts.map((concept) => (
                          <Link
                            key={concept.name}
                            href={concept.href}
                            onClick={() => setIsOpen(false)}
                            className="block rounded-lg px-3 py-3 hover:bg-gray-50"
                          >
                            <p className="text-gray-900 font-medium">{concept.name}</p>
                            <p className="text-sm text-gray-600">{concept.meta}</p>
                          </Link>
                        ))}

                        <Link
                          href="/concepts"
                          onClick={() => setIsOpen(false)}
                          className="block rounded-lg px-3 py-3 text-sm font-semibold text-[#d3960c] hover:bg-gray-50"
                        >
                          View All Concepts →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Clean separation for About + Contact */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="block text-center rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center rounded-xl border border-gray-200 px-4 py-3 text-gray-900 font-semibold hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>

              {/* Optional: subtle note / brand polish */}
              <p className="pt-2 text-xs text-gray-500">
                NotosLife — curated dining, social, and culinary experiences.
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

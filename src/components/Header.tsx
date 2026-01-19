"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * FINAL concept routing (real pages now exist)
 */
const concepts = [
  {
    name: "Notos Greek",
    meta: "Muthaiga",
    href: "/concepts/greek",
  },
  {
    name: "Notos Kitchen Bar",
    meta: "Upper Hill",
    href: "/concepts/kitchen-bar",
  },
  {
    name: "Notos Catering",
    meta: "Corporate Catering",
    href: "/concepts/catering",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [conceptsOpen, setConceptsOpen] = useState(false);

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Hover-safe open */
  const openConcepts = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setConceptsOpen(true);
  };

  /** Delayed close for stress-free UX */
  const closeConcepts = () => {
    closeTimeout.current = setTimeout(() => {
      setConceptsOpen(false);
    }, 150);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            href="/"
            className="text-3xl font-black uppercase tracking-tight text-gray-900"
          >
            Notos<span className="text-[#d3960c]">Life</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-gray-800 font-medium items-center">
          <Link href="/" className="hover:text-[#d3960c] transition-colors">
            Home
          </Link>

          {/* Our Concepts — STRESS-FREE DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={openConcepts}
            onMouseLeave={closeConcepts}
          >
            <button
              onClick={() => setConceptsOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:text-[#d3960c] transition-colors"
            >
              Our Concepts
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  conceptsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {conceptsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-3 w-72 bg-white rounded-xl shadow-xl border border-gray-100 z-50"
                >
                  {concepts.map((concept) => (
                    <Link
                      key={concept.name}
                      href={concept.href}
                      className="block px-5 py-4 hover:bg-gray-50"
                      onClick={() => setConceptsOpen(false)}
                    >
                      <p className="font-semibold text-gray-900">
                        {concept.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {concept.meta}
                      </p>
                    </Link>
                  ))}

                  <div className="border-t border-gray-100">
                    <Link
                      href="/concepts"
                      className="block px-5 py-3 text-sm font-semibold text-[#d3960c] hover:bg-gray-50"
                      onClick={() => setConceptsOpen(false)}
                    >
                      View All Concepts →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="hover:text-[#d3960c] transition-colors">
            About
          </Link>

          <Link href="/contact" className="hover:text-[#d3960c] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu (unchanged logic, correct links) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg px-6 py-6 space-y-4"
          >
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <div className="space-y-2">
              <p className="font-semibold">Our Concepts</p>
              {concepts.map((concept) => (
                <Link
                  key={concept.name}
                  href={concept.href}
                  onClick={() => setIsOpen(false)}
                  className="block pl-2"
                >
                  {concept.name}
                </Link>
              ))}
            </div>

            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

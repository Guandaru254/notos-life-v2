"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            href="/"
            className="text-3xl font-black uppercase tracking-tight text-gray-900"
          >
            Notos<span className="text-[#d3960c]">Life</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-gray-800 font-medium">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Menu", "/menu"],
            ["Shop", "/shop"],
            ["Contact", "/contact"],
          ].map(([name, path]) => (
            <motion.div whileHover={{ scale: 1.1 }} key={name}>
              <Link href={path} className="hover:text-[#d3960c] transition-colors">
                {name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg flex flex-col items-center py-4 space-y-4"
          >
            {["Home", "About", "Menu", "Shop", "Contact"].map((link) => (
              <Link
                href={`/${link.toLowerCase()}`}
                key={link}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-[#d3960c]"
              >
                {link}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-16 mt-20 overflow-hidden">
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#d3960c]/10 to-transparent blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h2 className="text-2xl font-bold mb-3 text-white tracking-widest">
          Notos<span className="text-[#d3960c]">Life</span>
        </h2>
        <p className="text-gray-400 mb-8 text-sm">
          © 2025 Notos Life | Crafted with passion in Nairobi.
        </p>

        <div className="flex justify-center gap-6">
          {["Instagram", "Facebook", "Contact"].map((link) => (
            <motion.a
              key={link}
              href="#"
              whileHover={{ scale: 1.1, color: "#d3960c" }}
              className="text-gray-400 transition-colors"
            >
              {link}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}

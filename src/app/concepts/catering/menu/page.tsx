"use client";

import { motion } from "framer-motion";

export default function CateringMenuPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6"
        >
          Catering Menus
        </motion.h1>

        <p className="text-lg text-gray-600 max-w-3xl mb-12">
          Our catering menus are designed for consistency, nutrition, and
          operational efficiency — adaptable to corporate, institutional, and
          large-scale requirements.
        </p>

        <ul className="space-y-4 text-gray-700">
          <li>Corporate daily meal programs</li>
          <li>Event & conference catering</li>
          <li>Custom menus based on dietary needs</li>
        </ul>
      </section>
    </main>
  );
}

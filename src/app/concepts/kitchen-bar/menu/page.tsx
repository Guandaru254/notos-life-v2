"use client";

import { motion } from "framer-motion";

export default function KitchenBarMenuPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6"
        >
          Notos Kitchen Bar Menu
        </motion.h1>

        <p className="text-lg text-gray-600 max-w-3xl mb-12">
          A contemporary menu designed for social dining, bold flavors, and a
          lively urban atmosphere in Upper Hill.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Small Plates</h3>
            <ul className="space-y-3 text-gray-700">
              <li>Wood-fired flatbreads</li>
              <li>Seasonal bar snacks</li>
              <li>Chef’s rotating bites</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Signature Dishes</h3>
            <ul className="space-y-3 text-gray-700">
              <li>Grilled meats & seafood</li>
              <li>Urban comfort classics</li>
              <li>Late-night favorites</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";

export default function GreekMenuPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6"
        >
          Notos Greek Menu
        </motion.h1>

        <p className="text-lg text-gray-600 max-w-3xl mb-12">
          Our menu is inspired by classic Mediterranean flavors, prepared with
          modern restraint and seasonal ingredients. Designed for sharing,
          savoring, and unhurried dining.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Starters & Mezze</h3>
            <ul className="space-y-3 text-gray-700">
              <li>Freshly baked pita, olive oil & herbs</li>
              <li>Grilled halloumi with lemon & oregano</li>
              <li>Classic hummus & seasonal dips</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Mains</h3>
            <ul className="space-y-3 text-gray-700">
              <li>Slow-cooked lamb with Mediterranean spices</li>
              <li>Grilled seafood with citrus and olive oil</li>
              <li>Seasonal vegetarian plates</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

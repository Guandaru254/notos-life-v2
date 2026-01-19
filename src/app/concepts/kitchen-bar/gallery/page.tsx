"use client";

import { motion } from "framer-motion";

export default function KitchenBarGalleryPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6"
        >
          Notos Kitchen Bar Gallery
        </motion.h1>

        <p className="text-lg text-gray-600">
          Capturing the energy, atmosphere, and social rhythm of Notos Kitchen
          Bar in Upper Hill.
        </p>
      </section>
    </main>
  );
}

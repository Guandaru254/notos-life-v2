"use client";

import { motion } from "framer-motion";

export default function CateringGalleryPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6"
        >
          Catering Operations Gallery
        </motion.h1>

        <p className="text-lg text-gray-600">
          A behind-the-scenes look at our production facilities, logistics, and
          large-scale catering operations.
        </p>
      </section>
    </main>
  );
}

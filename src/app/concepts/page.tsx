"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FallbackImage from "../../components/FallbackImage";

const concepts = [
  {
    name: "Notos Greek",
    location: "Muthaiga",
    description:
      "Mediterranean fine dining inspired by the Aegean — refined, elegant, and deeply rooted in culinary tradition.",
    image: "/images/snapper.jpg",
    href: "/concepts/greek",
  },
  {
    name: "Notos Kitchen Bar",
    location: "Upper Hill",
    description:
      "A vibrant social dining experience where bold flavors, cocktails, and atmosphere come together after dark.",
    image: "/images/lamb.jpg",
    href: "/concepts/kitchen-bar",
  },
  {
    name: "Notos Catering",
    location: "Corporate",
    description:
      "High-volume, premium catering solutions designed for institutions, events, and large-scale operations.",
    image: "/images/risotto.jpg",
    href: "/concepts/catering",
  },
];

export default function ConceptsPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-black mb-6"
          >
            Our Concepts
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-300 max-w-2xl text-lg"
          >
            Notos Life is a collection of distinct hospitality experiences —
            each crafted with its own identity, atmosphere, and purpose,
            united by one philosophy of refined living.
          </motion.p>
        </div>
      </section>

      {/* ================= CONCEPT CARDS ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <FallbackImage
                  src={concept.image}
                  alt={concept.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Content */}
              <div>
                <p className="text-sm uppercase tracking-widest text-[#d3960c] mb-3">
                  {concept.location}
                </p>

                <h2 className="text-4xl font-extrabold mb-4">
                  {concept.name}
                </h2>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {concept.description}
                </p>

                <Link
                  href={concept.href}
                  className="inline-block border border-white/40 hover:border-[#d3960c] hover:text-[#d3960c] px-8 py-3 rounded-full font-semibold transition"
                >
                  Enter Experience →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

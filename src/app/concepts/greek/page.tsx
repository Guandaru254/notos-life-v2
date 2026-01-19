"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FallbackImage from "../../../components/FallbackImage";

export default function NotosGreekPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <FallbackImage
          src="/images/snapper.jpg"
          alt="Notos Greek Mediterranean dining"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-black text-white mb-4"
            >
              Notos Greek
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-200 text-lg md:text-xl max-w-2xl"
            >
              A refined Mediterranean dining experience inspired by the Aegean,
              thoughtfully brought to life in Muthaiga.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            The Essence of <span className="text-[#d3960c]">Greek Hospitality</span>
          </motion.h2>

          <p className="text-gray-700 text-lg leading-relaxed font-serif max-w-3xl mx-auto">
            At Notos Greek, we celebrate honest Mediterranean cuisine —
            simple, seasonal, and rooted in tradition. Each dish is crafted
            to evoke the warmth of the Aegean, balanced with the rhythm
            and refinement of Nairobi’s dining scene.
          </p>
        </div>
      </section>

      {/* ================= SIGNATURE DISHES ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-center mb-14"
          >
            Signature <span className="text-[#d3960c]">Dishes</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Grilled Red Snapper",
                image: "/images/snapper.jpg",
                desc: "Char-grilled whole snapper with lemon, olive oil, and herbs.",
              },
              {
                name: "Lamb Tagine Royale",
                image: "/images/lamb.jpg",
                desc: "Slow-cooked lamb with apricots, saffron, and warm spices.",
              },
              {
                name: "Zanzibar Coconut Risotto",
                image: "/images/risotto.jpg",
                desc: "Creamy risotto infused with coconut and subtle coastal notes.",
              },
            ].map((dish, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden shadow-lg bg-white"
              >
                <FallbackImage
                  src={dish.image}
                  alt={dish.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{dish.name}</h3>
                  <p className="text-gray-600 mt-2 font-serif">
                    {dish.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/menu"
              className="inline-block bg-[#d3960c] hover:bg-[#a9780a] text-black font-bold px-10 py-3 rounded-full transition"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE DETAILS ================= */}
      <section className="py-20 bg-gray-900 text-white text-center px-6">
        <h2 className="text-4xl font-extrabold mb-4">
          Visit <span className="text-[#d3960c]">Notos Greek</span>
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
          Located in Muthaiga, Notos Greek offers an intimate setting
          ideal for refined dining, celebrations, and meaningful gatherings.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#d3960c] hover:bg-[#a9780a] text-black font-bold px-10 py-3 rounded-full transition"
        >
          Reserve a Table
        </Link>
      </section>
    </main>
  );
}

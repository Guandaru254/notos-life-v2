"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FallbackImage from "../../../components/FallbackImage";

export default function NotosKitchenBarPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <FallbackImage
          src="/images/lamb.jpg"
          alt="Notos Kitchen Bar social dining"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-black mb-4"
            >
              Notos Kitchen Bar
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-300 text-lg md:text-xl max-w-2xl"
            >
              A vibrant social dining experience where bold flavors, crafted
              cocktails, and atmosphere come together in Upper Hill.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ================= CONCEPT ================= */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Where Food Meets <span className="text-[#d3960c]">Nightlife</span>
          </motion.h2>

          <p className="text-gray-300 text-lg leading-relaxed font-serif max-w-3xl mx-auto">
            Notos Kitchen Bar is designed for evenings that stretch into night.
            Our menu blends global comfort flavors with a modern edge, paired
            with expertly crafted cocktails and a soundtrack that sets the tone
            for connection, conversation, and celebration.
          </p>
        </div>
      </section>

      {/* ================= FOOD & DRINK ================= */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-center mb-14"
          >
            Food & <span className="text-[#d3960c]">Cocktails</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Shared Plates",
                image: "/images/snapper.jpg",
                desc: "Designed for the table — bold, social, and indulgent.",
              },
              {
                name: "Signature Mains",
                image: "/images/lamb.jpg",
                desc: "Comfort classics elevated with global inspiration.",
              },
              {
                name: "Craft Cocktails",
                image: "/images/risotto.jpg",
                desc: "Inventive cocktails balanced for long nights.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden shadow-xl bg-black"
              >
                <FallbackImage
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-400 mt-2 font-serif">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/menu"
              className="inline-block border border-white/40 hover:border-[#d3960c] hover:text-[#d3960c] px-10 py-3 rounded-full font-semibold transition"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          The <span className="text-[#d3960c]">Experience</span>
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
          Located in Upper Hill, Notos Kitchen Bar is ideal for after-work drinks,
          celebrations, late dinners, and social nights that blend seamlessly
          from dining into nightlife.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#d3960c] hover:bg-[#a9780a] text-black font-bold px-10 py-3 rounded-full transition"
        >
          Plan Your Night
        </Link>
      </section>
    </main>
  );
}

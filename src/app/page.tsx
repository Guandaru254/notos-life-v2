"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FallbackImage from "../components/FallbackImage";

export default function HomePage() {
  const heroImage = "/images/hero.jpg";

  return (
    <main className="bg-white text-gray-900">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <FallbackImage
          src={heroImage}
          alt="Notos Life hospitality experiences"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-6"
          >
            <h1 className="text-6xl md:text-7xl font-black uppercase text-white mb-6 tracking-tight">
              Experience <span className="text-[#d3960c]">Notos Life</span>
            </h1>

            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              A collection of curated dining, social, and culinary experiences —
              inspired by the Mediterranean and brought to life in Nairobi.
            </p>

            <div className="flex justify-center gap-4">
              <Link
                href="/concepts"
                className="inline-block bg-[#d3960c] hover:bg-[#a9780a] text-black font-bold px-8 py-3 rounded-full transition"
              >
                Explore Our Concepts
              </Link>
              <Link
                href="/about"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-3 rounded-full transition"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
        >
          A Philosophy of <span className="text-[#d3960c]">Refined Hospitality</span>
        </motion.h2>

        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed font-serif">
          Notos Life is built on the belief that great hospitality goes beyond food.
          It is about atmosphere, intention, and connection. Across our concepts,
          we craft spaces where cuisine, culture, and community come together.
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
          <FallbackImage
            src="/images/concepts/kitchen/bar18.jpeg"
            alt="Culinary craftsmanship at Notos Life"
            width={400}
            height={400}
            className="rounded-2xl shadow-xl object-cover"
          />
          <div className="max-w-md text-left">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              The Notos Approach
            </h3>
            <p className="text-gray-600 font-serif leading-relaxed">
              “Every Notos experience is designed with care — from the ingredients
              we source, to the people we serve, to the moments we create. Our goal
              is simple: to leave a lasting impression.”
            </p>
            <p className="mt-4 font-semibold text-[#d3960c] italic">
              — Notos Life
            </p>
          </div>
        </div>
      </section>

      {/* ================= SIGNATURE EXPERIENCES ================= */}
      <section className="py-20 bg-white text-center border-t border-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight"
        >
          Signature <span className="text-[#d3960c]">Notos Experiences</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              name: "Notos Greek",
              image: "/images/concepts/greek/greek.jpeg",
              desc: "Refined Mediterranean dining inspired by the Aegean, reimagined in Nairobi.",
            },
            {
              name: "Notos Kitchen Bar",
              image: "/images/concepts/kitchen/bar29.jpeg",
              desc: "A vibrant social dining experience where food, cocktails, and atmosphere collide.",
            },
            {
              name: "Notos Catering",
              image: "/images/risotto.jpg",
              desc: "High-volume, premium catering solutions trusted by leading corporate partners.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden shadow-xl bg-gray-50 hover:shadow-2xl transition"
            >
              <FallbackImage
                src={item.image}
                alt={item.name}
                width={400}
                height={300}
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                <p className="text-gray-600 mt-2 font-serif">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/concepts"
            className="inline-block bg-[#d3960c] hover:bg-[#a9780a] text-black font-bold px-8 py-3 rounded-full transition"
          >
            View All Concepts
          </Link>
        </div>
      </section>

      {/* ================= LIFESTYLE & CATERING ================= */}
      <section className="py-20 bg-gray-100 border-t border-gray-200 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight"
        >
          Beyond Dining: The <span className="text-[#d3960c]">Notos Lifestyle</span>
        </motion.h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-12 text-lg font-serif">
          From curated catering solutions to lifestyle offerings, Notos Life
          extends its philosophy beyond the table — into homes, offices, and events.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block bg-[#d3960c] hover:bg-[#a9780a] text-black font-bold px-8 py-3 rounded-full transition"
          >
            Work With Us
          </Link>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="py-16 bg-gray-900 text-center text-white border-t border-gray-800">
        <h2 className="text-4xl font-extrabold mb-4">
          Connect With <span className="text-[#d3960c]">Notos Life</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8 text-lg">
          Whether you’re joining us for an experience, planning an event, or
          exploring partnerships — we’d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#d3960c] hover:bg-[#a9780a] text-black font-bold px-8 py-3 rounded-full transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}

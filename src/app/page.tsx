"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const heroImage = "/images/hero.jpg"; // ✅ from public/images folder

  return (
    <main className="bg-white text-gray-900">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={heroImage}
          alt="Notos Life restaurant hero"
          fill
          priority
          className="object-cover"
          onError={(e) => {
            const target = e.target;
            target.onerror = null;
            target.src =
              "https://placehold.co/1920x1080/000000/FFFFFF?text=Notos+Life";
          }}
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
              Mediterranean elegance meets the vibrant energy of Nairobi. Discover
              fine dining inspired by the Aegean and brought to life in Kenya.
            </p>

            <div className="flex justify-center gap-4">
              <Link
                href="/menu"
                className="inline-block bg-[#d3960c] hover:bg-[#a9780a] text-black font-bold px-8 py-3 rounded-full transition"
              >
                Explore Menu
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

      {/* ================= CHEF’S PHILOSOPHY ================= */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
        >
          The Art of <span className="text-[#d3960c]">Refined Simplicity</span>
        </motion.h2>

        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed font-serif">
          At Notos Life, we believe in honest cuisine — simple, seasonal, and
          soulful. Every dish tells a story, from the sunlit shores of the
          Mediterranean to the lively heartbeat of Nairobi.
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
          <Image
            src="/images/chef.jpg"
            alt="Chef preparing meal"
            width={400}
            height={400}
            className="rounded-2xl shadow-xl object-cover"
          />
          <div className="max-w-md text-left">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Chef’s Note</h3>
            <p className="text-gray-600 font-serif leading-relaxed">
              “Cooking is not just about flavor — it’s about emotion. Our goal is
              to make you *feel* the passion of every plate, the warmth of every
              ingredient, and the joy of every shared moment.”
            </p>
            <p className="mt-4 font-semibold text-[#d3960c] italic">
              — Executive Chef, Notos Life
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED MENU HIGHLIGHTS ================= */}
      <section className="py-20 bg-white text-center border-t border-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight"
        >
          Nairobi’s Favorite <span className="text-[#d3960c]">Main Courses</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              name: "Grilled Red Snapper",
              image: "/images/snapper.jpg",
              desc: "Served with lemon butter and a hint of Swahili spice.",
            },
            {
              name: "Lamb Tagine Royale",
              image: "/images/lamb.jpg",
              desc: "Slow-cooked lamb with apricots, almonds, and saffron.",
            },
            {
              name: "Zanzibar Coconut Risotto",
              image: "/images/risotto.jpg",
              desc: "Creamy Arborio rice infused with coconut and lemongrass.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden shadow-xl bg-gray-50 hover:shadow-2xl transition"
            >
              <Image
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
            href="/menu"
            className="inline-block bg-[#d3960c] hover:bg-[#a9780a] text-black font-bold px-8 py-3 rounded-full transition"
          >
            View Full Menu
          </Link>
        </div>
      </section>

      {/* ================= SHOP PREVIEW SECTION ================= */}
      <section className="py-20 bg-gray-100 border-t border-gray-200 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight"
        >
          Explore the <span className="text-[#d3960c]">Notos Shop</span>
        </motion.h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-12 text-lg font-serif">
          From fine olive oils to handmade ceramics — bring the Notos lifestyle
          into your home.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Image
            src="https://placehold.co/300x300/F5F5F5/4B5563?text=Olive+Oil"
            alt="Olive Oil"
            width={300}
            height={300}
            className="rounded-xl shadow-lg object-cover"
          />
          <Image
            src="https://placehold.co/300x300/F5F5F5/4B5563?text=Linen+Apron"
            alt="Apron"
            width={300}
            height={300}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        <div className="mt-10">
          <Link
            href="/shop"
            className="inline-block bg-[#d3960c] hover:bg-[#a9780a] text-black font-bold px-8 py-3 rounded-full transition"
          >
            Visit Our Shop
          </Link>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="py-16 bg-gray-900 text-center text-white border-t border-gray-800">
        <h2 className="text-4xl font-extrabold mb-4">
          Visit Us at{" "}
          <span className="text-[#d3960c]">UAP Old Mutual Tower</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8 text-lg">
          Experience exceptional dining in the heart of Nairobi’s skyline.
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

"use client";

import { motion } from "framer-motion";
import FallbackImage from "../../components/FallbackImage";

const products = [
  {
    name: "Extra Virgin Olive Oil",
    description: "Cold-pressed Greek olive oil — smooth, aromatic, and pure.",
    price: "$22",
    image: "/images/oliveoil.jpg",
  },
  {
    name: "Artisan Sea Salt",
    description: "Hand-harvested Mediterranean salt with herbs and citrus peel.",
    price: "$15",
    image: "/images/salt.jpg",
  },
  {
    name: "Spice Collection",
    description: "Curated spice blend inspired by coastal Mediterranean cuisine.",
    price: "$28",
    image: "/images/spices.jpg",
  },
  {
    name: "Organic Honey",
    description: "Raw forest honey with subtle floral notes and golden clarity.",
    price: "$18",
    image: "/images/honey.jpg",
  },
  {
    name: "Ceramic Tableware Set",
    description: "Locally crafted minimalist plates with matte finish.",
    price: "$95",
    image: "/images/ceramics.jpg",
  },
  {
    name: "Signature Apron",
    description: "Premium cotton apron embroidered with Notos Life insignia.",
    price: "$40",
    image: "/images/apron.jpg",
  },
];

export default function ShopPage() {
  return (
    <section className="bg-black text-white min-h-screen py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[500px] mb-24 overflow-hidden"
      >
        <FallbackImage
          src="/images/shop-hero.jpg"
          alt="Notos Life Boutique"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-black uppercase tracking-tight"
          >
            The <span className="text-[#d3960c]">Boutique</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-lg text-gray-300"
          >
            Discover curated tastes and lifestyle pieces from Nairobi to the Mediterranean.
          </motion.p>
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-[#d3960c]/30 transition-all"
            >
              <div className="relative w-full h-64">
                <FallbackImage
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-[#d3960c]">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">
                    {product.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#d3960c] hover:bg-[#b8820a] text-black font-bold px-5 py-2 rounded-full transition"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-24"
      >
        <p className="text-gray-300 mb-6 text-lg">
          Each piece tells a story of craftsmanship and flavor — straight from Nairobi.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#d3960c] hover:bg-[#a9780a] text-black font-bold px-10 py-4 rounded-full transition"
        >
          Visit Our Store
        </a>
      </motion.div>
    </section>
  );
}

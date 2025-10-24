"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// -------------------- MENU DATA --------------------
const menuItems = [
  {
    category: "Starters",
    name: "Mediterranean Bruschetta",
    description:
      "Grilled sourdough with marinated tomatoes, basil, and olive oil.",
    price: "$12",
    image: "/images/bruschetta.jpg",
  },
  {
    category: "Starters",
    name: "Grilled Halloumi",
    description: "Charred Cypriot cheese served with honey thyme glaze.",
    price: "$14",
    image: "/images/halloumi.jpg",
  },
  {
    category: "Mains",
    name: "Swahili Coconut Curry",
    description:
      "Tender chicken simmered in coconut cream, turmeric, and coastal spices.",
    price: "$22",
    image: "/images/curry.jpg",
  },
  {
    category: "Mains",
    name: "Nairobi Beef Fillet",
    description:
      "Pan-seared local beef medallion with tamarind glaze and rosemary mash.",
    price: "$28",
    image: "/images/beef.jpg",
  },
  {
    category: "Mains",
    name: "Seafood Risotto",
    description: "Creamy arborio rice with prawns, calamari & saffron.",
    price: "$26",
    image: "/images/risotto.jpg",
  },
  {
    category: "Desserts",
    name: "Baklava Cheesecake",
    description: "Honey-soaked filo with pistachios & cheesecake cream.",
    price: "$11",
    image: "/images/baklava.jpg",
  },
  {
    category: "Desserts",
    name: "Chocolate Soufflé",
    description: "Dark chocolate molten cake with vanilla gelato.",
    price: "$13",
    image: "/images/souffle.jpg",
  },
  {
    category: "Drinks",
    name: "Mango Mint Refresher",
    description: "Blended Kenyan mango, mint leaves, and sparkling water.",
    price: "$7",
    image: "/images/mango.jpg",
  },
  {
    category: "Drinks",
    name: "Espresso Martini",
    description: "Classic Italian cocktail with a Kenyan coffee twist.",
    price: "$12",
    image: "/images/espresso.jpg",
  },
];

// -------------------- PAGE COMPONENT --------------------
export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Starters", "Mains", "Desserts", "Drinks"];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-black uppercase tracking-tight mb-16"
      >
        Our <span className="text-[#d3960c]">Menu</span>
      </motion.h1>

      {/* Category Filter Bar */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition ${
              activeCategory === category
                ? "bg-[#d3960c] text-black"
                : "bg-zinc-900 text-gray-300 hover:bg-zinc-800"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="bg-zinc-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-[#d3960c]/30 transition"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target;
                    target.src =
                      "https://placehold.co/600x400/000000/FFFFFF?text=Notos+Dish";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                <p className="text-[#d3960c] font-bold text-lg">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-24"
      >
        <p className="text-gray-300 text-lg mb-6">
          Taste the soul of Nairobi and the Mediterranean in every bite.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#d3960c] hover:bg-[#a9780a] text-black font-bold px-10 py-4 rounded-full transition"
        >
          Reserve a Table
        </a>
      </motion.div>
    </section>
  );
}

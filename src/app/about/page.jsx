"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/images/concepts/kitchen/bar29.jpeg"
          alt="About Notos Life"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-black uppercase text-white tracking-tight"
          >
            The <span className="text-[#d3960c]">Essence</span> of Notos Life
          </motion.h1>
          <p className="text-gray-200 text-lg md:text-xl mt-6 max-w-2xl">
            Where Mediterranean spirit meets African soul.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Our <span className="text-[#d3960c]">Story</span>
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed font-serif">
          Born in the heart of Nairobi, Notos Life is more than a restaurant —
          it’s a celebration of connection, artistry, and the timeless beauty of
          Mediterranean living. From fresh ingredients to handcrafted interiors,
          every detail reflects our passion for authenticity and refinement.
        </p>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="py-20 px-6 md:px-12 bg-white flex flex-col md:flex-row items-center gap-10">
        <Image
          src="/images/concepts/kitchen/bar20.jpeg"
          alt="Our Philosophy"
          width={500}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
        <div className="max-w-lg">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Our Philosophy
          </h3>
          <p className="text-gray-600 font-serif leading-relaxed">
            Every plate we serve tells a story of balance — simplicity meeting
            sophistication, local roots meeting Mediterranean flair. We source
            locally, cook seasonally, and serve with heart.
          </p>
          <p className="mt-4 text-[#d3960c] font-semibold italic">
            “It’s not just a meal. It’s a memory in the making.”
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-gray-100 border-t border-gray-200 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight"
        >
          The <span className="text-[#d3960c]">Team</span> Behind Notos
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            {
              name: "...",
              role: "",
              img: "/images/chef-elena.jpg",
            },
            {
              name: "...",
              role: "",
              img: "/images/director.jpg",
            },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden w-72"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={300}
                height={300}
                className="object-cover w-full h-72"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FallbackImage from "../../../components/FallbackImage";

export default function NotosCateringPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <FallbackImage
          src="/images/risotto.jpg"
          alt="Notos Catering corporate food solutions"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-black text-white mb-4"
            >
              Notos Catering
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-200 text-lg md:text-xl max-w-2xl"
            >
              High-volume, premium catering solutions designed for institutions,
              corporates, and large-scale operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ================= VALUE PROPOSITION ================= */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Catering Built for <span className="text-[#d3960c]">Scale</span>
          </motion.h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Notos Catering delivers consistent, high-quality meals at scale —
            without compromising on taste, nutrition, or reliability. We partner
            with organizations that require dependable food solutions day after
            day.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-center mb-16"
          >
            Our <span className="text-[#d3960c]">Services</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Corporate Meal Programs",
                desc: "Daily staff meals designed for consistency, nutrition, and operational efficiency.",
              },
              {
                title: "Large-Scale Event Catering",
                desc: "Seamless catering solutions for conferences, launches, and institutional events.",
              },
              {
                title: "Custom Food Solutions",
                desc: "Tailored menus built around operational needs, dietary requirements, and budgets.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition bg-white"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OPERATIONAL STRENGTH ================= */}
      <section className="py-24 bg-gray-900 text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Proven <span className="text-[#d3960c]">Operational Excellence</span>
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-10">
            Notos Catering operates at scale, delivering reliable, high-quality
            meals for corporate and institutional partners with precision and
            consistency.
          </p>

          {/* TRUST PROOF */}
          <div className="bg-gray-800 rounded-2xl px-8 py-8 mb-14 max-w-4xl mx-auto">
            <p className="text-lg text-gray-200 leading-relaxed">
              Currently serving{" "}
              <span className="font-semibold text-white">Equity Group</span>,
              providing approximately{" "}
              <span className="font-semibold text-[#d3960c]">
                3,000 meals per day
              </span>{" "}
              as part of an ongoing corporate catering engagement.
            </p>
          </div>

          {/* METRICS */}
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div>
              <h4 className="text-3xl font-black text-[#d3960c] mb-2">
                3,000+
              </h4>
              <p className="text-gray-300">
                Meals prepared and delivered daily
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-black text-[#d3960c] mb-2">
                Enterprise
              </h4>
              <p className="text-gray-300">Corporate & institutional clients</p>
            </div>

            <div>
              <h4 className="text-3xl font-black text-[#d3960c] mb-2">
                Operational
              </h4>
              <p className="text-gray-300">
                Reliability built for long-term partnerships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center px-6">
        <h2 className="text-4xl font-extrabold mb-4">
          Partner with <span className="text-[#d3960c]">Notos Catering</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Let’s discuss how we can support your organization with dependable,
          high-quality catering solutions.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#d3960c] hover:bg-[#a9780a] text-black font-bold px-12 py-4 rounded-full transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}

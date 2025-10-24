"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Notos Life"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-7xl font-black text-white tracking-tight">
            Reserve Your <span className="text-[#d3960c]">Experience</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mt-6 max-w-2xl">
            Let us host your unforgettable moments — from elegant dinners to
            private celebrations.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-20 px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-8"
        >
          Get in <span className="text-[#d3960c]">Touch</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed font-serif space-y-4">
          <p>📍 UAP Old Mutual Tower, Nairobi CBD</p>
          <p>📞 +254 700 123 456</p>
          <p>✉️ reservations@notoslife.com</p>
        </div>

        <div className="mt-10">
          <Link
            href="/reservation"
            className="inline-block bg-[#d3960c] hover:bg-[#a9780a] text-black font-bold px-8 py-3 rounded-full transition"
          >
            Book a Table
          </Link>
        </div>
      </section>

      {/* MAP / LOCATION */}
      <section className="h-[400px] w-full bg-gray-200 relative overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8572572287135!2d36.81848631532574!3d-1.2833389990656207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f9b7e16a3f%3A0x409b5d3a7b2f00d4!2sUAP%20Old%20Mutual%20Tower!5e0!3m2!1sen!2ske!4v1699999999999!5m2!1sen!2ske"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}

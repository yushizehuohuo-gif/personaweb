"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-16 pt-24 pb-16 overflow-hidden">
      {/* ── Fullscreen Background Art ── */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/personaweb/images/firsttry.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-base/95 via-bg-base/70 to-bg-base/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base/60 via-transparent to-transparent" />
      </div>

      {/* ── Left: Typography ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl"
      >
        <motion.p
          variants={item}
          className="text-text-secondary text-sm sm:text-base tracking-[0.2em] uppercase mb-6"
        >
          Creative Technologist &amp; Visual Artist
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9] text-text-primary"
        >
          CREATIVE
          <br />
          <span className="text-cherry">TECHNOLO</span>
          <br />
          GIST
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 sm:mt-10 text-text-secondary text-lg sm:text-xl max-w-md leading-relaxed"
        >
          Exploring the space between game design, AI art, and digital culture.
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <Link
            href="/portfolio"
            className="
              group inline-flex items-center gap-3
              bg-cherry hover:bg-cherry/90
              text-text-primary font-semibold
              px-8 py-4
              text-sm sm:text-base tracking-wide
              transition-all duration-300
            "
          >
            EXPLORE WORKS
            <span className="text-orange group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Right: subtle decorative overlay from the art's red tones ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="
          absolute right-[5%] bottom-[15%]
          hidden lg:block
        "
      >
        <Image
          src="/personaweb/images/firsttry.jpg"
          alt=""
          width={300}
          height={400}
          className="object-cover opacity-0"
        />
      </motion.div>
    </section>
  );
}

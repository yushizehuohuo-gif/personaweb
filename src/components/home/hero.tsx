"use client";

import Link from "next/link";
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
      {/* ── Retro decorative blocks ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="
          absolute right-0 top-1/2 -translate-y-1/2
          hidden lg:block
          w-[45vw] h-[70vh] max-w-[800px]
        "
      >
        {/* Imperial Red block */}
        <div className="absolute right-[10%] top-[5%] w-[55%] aspect-[3/4] bg-imperial-red" />

        {/* Orange Web bar */}
        <div className="absolute right-[5%] top-[15%] w-[8%] h-[30%] bg-orange-web" />

        {/* Keppel stripe */}
        <div className="absolute right-[68%] bottom-[10%] w-[15%] h-[6%] bg-keppel" />

        {/* Giants Orange circle */}
        <div className="absolute right-[30%] top-[60%] w-[12%] aspect-square rounded-full bg-giants-orange" />

        {/* Delft Blue outline shape */}
        <div className="absolute right-[20%] top-[20%] w-[40%] aspect-square border-2 border-delft-blue/30" />
      </motion.div>

      {/* ── Mobile accent ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="lg:hidden absolute right-6 top-1/3 flex flex-col gap-3"
      >
        <div className="w-16 h-16 bg-imperial-red" />
        <div className="w-8 h-8 bg-orange-web rounded-full ml-8" />
        <div className="w-12 h-2 bg-keppel ml-4" />
      </motion.div>

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
          <span className="text-imperial-red">TECHNOLO</span>
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
              bg-imperial-red hover:bg-imperial-red/90
              text-white font-semibold
              px-8 py-4
              text-sm sm:text-base tracking-wide
              transition-all duration-300
            "
          >
            EXPLORE WORKS
            <span className="text-orange-web group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

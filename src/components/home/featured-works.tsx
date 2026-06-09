"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const works = [
  {
    title: "DOTA 2\nChibi Collection",
    category: "AI Art",
    description: "Q版 character series reimagining Dota 2 heroes through chibi aesthetics and AI generation.",
    accent: "cherry" as const,
    aspect: "aspect-[3/4]",
    span: "lg:col-span-1 lg:row-span-2",
  },
  {
    title: "Neo Tokyo\nVisual Study",
    category: "Concept Art",
    description: "A series exploring future pop aesthetics — editorial compositions at the intersection of anime and fashion.",
    accent: "pink" as const,
    aspect: "aspect-[4/5]",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Deadlock\nStyle Exploration",
    category: "Concept Art",
    description: "Visual identity experiments reimagining Deadlock's aesthetic through a fashion-editorial lens.",
    accent: "mint" as const,
    aspect: "aspect-[16/9]",
    span: "lg:col-span-2 lg:row-span-1",
  },
];

const accentMap = {
  cherry: "bg-cherry",
  pink: "bg-pink",
  mint: "bg-mint",
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

export default function FeaturedWorks() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
      {/* Section header — editorial style */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-4">
          Selected Works
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          RECENT
          <br />
          <span className="text-cherry">PROJECTS</span>
        </h2>
      </motion.div>

      {/* Asymmetrical grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {works.map((work, i) => (
          <motion.div
            key={work.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className={`
              group relative ${work.span} ${work.aspect}
              overflow-hidden
              bg-bg-card
              cursor-pointer
            `}
          >
            {/* Placeholder image area — abstract color blocks */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-1/2 h-1/2 ${accentMap[work.accent]} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
              />
              <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 border border-border group-hover:border-mint/50 transition-colors duration-500" />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Text overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span
                className={`
                  inline-block text-xs font-semibold tracking-wider uppercase
                  px-3 py-1 mb-4
                  ${work.accent === "cherry" ? "bg-cherry text-text-primary" : ""}
                  ${work.accent === "pink" ? "bg-pink text-bg-base" : ""}
                  ${work.accent === "mint" ? "bg-mint text-bg-base" : ""}
                `}
              >
                {work.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight whitespace-pre-line text-text-primary group-hover:text-text-primary">
                {work.title}
              </h3>
              <p className="mt-3 text-sm text-text-secondary max-w-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {work.description}
              </p>
            </div>

            {/* Hover border accent */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-mint/60 transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      {/* View all link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-right"
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm tracking-wider uppercase transition-colors duration-200 group"
        >
          View All Works
          <span className="text-cherry group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </motion.div>
    </section>
  );
}

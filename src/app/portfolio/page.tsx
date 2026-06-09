"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems, categories, type PortfolioItem } from "@/data/portfolio";

const accentMap: Record<PortfolioItem["accent"], string> = {
  "imperial-red": "bg-imperial-red",
  "orange-web": "bg-orange-web",
  keppel: "bg-keppel",
  "giants-orange": "bg-giants-orange",
  "delft-blue": "bg-delft-blue",
};

const colSpanMap: Record<PortfolioItem["span"], string> = {
  "1x1": "lg:col-span-1 lg:row-span-1",
  "1x2": "lg:col-span-1 lg:row-span-2",
  "2x1": "lg:col-span-2 lg:row-span-1",
  "2x2": "lg:col-span-2 lg:row-span-2",
};

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-10 lg:px-16">
      {/* Page header — editorial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-4">
          Portfolio
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
          SELECTED
          <br />
          <span className="text-cherry">WORKS</span>
        </h1>
      </motion.div>

      {/* Category filter — pill buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-wrap gap-3 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`
              px-5 py-2 text-sm font-semibold tracking-wider uppercase
              transition-all duration-200
              ${
                activeCategory === cat.id
                  ? "bg-cherry text-text-primary"
                  : "bg-transparent text-text-secondary hover:text-text-primary border border-border hover:border-text-secondary"
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Magazine grid */}
      <motion.div
        layout
        className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`
                group relative ${colSpanMap[item.span]} ${item.aspect}
                overflow-hidden bg-bg-card cursor-pointer
              `}
            >
              {/* Abstract color block placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-1/2 h-1/2 ${accentMap[item.accent]} opacity-15 group-hover:opacity-25 transition-opacity duration-500`}
                />
                <div className="absolute top-1/3 right-1/3 w-1/4 h-1/4 border border-border group-hover:border-mint/40 transition-colors duration-500" />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span
                  className={`
                    inline-block text-xs font-semibold tracking-wider uppercase
                    px-3 py-1 mb-3 text-white
                    ${accentMap[item.accent]}
                  `}
                >
                  {item.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight whitespace-pre-line text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary max-w-md leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-mint/60 transition-all duration-500" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-text-muted text-center py-24 text-lg"
        >
          No works in this category yet.
        </motion.p>
      )}
    </div>
  );
}

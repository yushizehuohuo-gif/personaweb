"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "/portfolio", label: "Works" },
  { href: "/blog", label: "Writing" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-0 inset-x-0 z-50
        px-6 sm:px-10 lg:px-16
        py-5
        flex items-center justify-between
        transition-colors duration-300
        ${scrolled ? "bg-bg-base/80 backdrop-blur-xl border-b border-border" : "bg-transparent"}
      `}
    >
      {/* Masthead */}
      <Link
        href="/"
        className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary hover:text-cherry transition-colors duration-200"
      >
        SHIZE YU
      </Link>

      {/* Nav Links */}
      <nav className="flex items-center gap-1 sm:gap-2">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative px-3 sm:px-4 py-2
                text-sm sm:text-base font-medium tracking-wide
                transition-colors duration-200
                ${isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"}
              `}
            >
              {link.label}
              {isActive && (
                <motion.span
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-3 right-3 h-[2px] bg-cherry"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
}

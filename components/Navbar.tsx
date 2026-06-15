"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Story", href: "#about" },
  { label: "Stats", href: "#stats" },
  { label: "Championships", href: "#championships" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled
          ? "rgba(6,6,6,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(220,0,0,0.15)" : "none",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease, border 0.4s ease",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          <div
            className="w-10 h-10 flex items-center justify-center text-white text-xl font-bold rounded-sm"
            style={{
              background: "var(--red)",
              letterSpacing: "0.05em",
            }}
          >
            44
          </div>
          <span
            className="text-white text-2xl tracking-[0.15em] group-hover:text-[var(--gold)] transition-colors duration-300"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "1.6rem" }}
          >
            HAMILTON
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-white transition-colors duration-300 text-sm tracking-[0.15em] uppercase relative group"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: "var(--red)" }}
              />
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-white text-sm tracking-[0.12em] uppercase transition-all duration-300"
            style={{
              border: "1px solid var(--gold)",
              color: "var(--gold)",
              fontFamily: "var(--font-inter)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--gold)";
              (e.currentTarget as HTMLElement).style.color = "#000";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--gold)";
            }}
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-white transition-all"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-white"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(6,6,6,0.97)", borderTop: "1px solid rgba(220,0,0,0.2)" }}
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-white/70 hover:text-white text-lg tracking-[0.15em] uppercase transition-colors"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

"use client";
import { motion } from "framer-motion";

const socials = [
  { label: "Instagram", href: "#", icon: "IG" },
  { label: "Twitter / X", href: "#", icon: "X" },
  { label: "YouTube", href: "#", icon: "YT" },
  { label: "Facebook", href: "#", icon: "FB" },
];

const links = [
  { label: "Story", href: "#about" },
  { label: "Stats", href: "#stats" },
  { label: "Championships", href: "#championships" },
  { label: "Gallery", href: "#gallery" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "#030303", borderTop: "1px solid rgba(220,0,0,0.12)" }}
    >
      {/* Top content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 flex items-center justify-center text-white text-xl rounded-sm"
                style={{
                  background: "var(--red)",
                  fontFamily: "var(--font-bebas)",
                }}
              >
                44
              </div>
              <span
                className="text-white text-2xl tracking-[0.15em]"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                HAMILTON
              </span>
            </div>
            <p
              className="text-white/40 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Lewis Hamilton. Seven-time Formula 1 World Champion. Knight of the Realm. Advocate. Legend.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 flex items-center justify-center text-xs text-white/50 hover:text-white transition-all duration-300"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontFamily: "var(--font-inter)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--red)";
                    (e.currentTarget as HTMLElement).style.color = "var(--red)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                  }}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <span
              className="text-xs tracking-[0.3em] uppercase mb-2"
              style={{ color: "var(--gold)", fontFamily: "var(--font-inter)" }}
            >
              Navigate
            </span>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/50 hover:text-white transition-colors duration-300 text-sm tracking-wide flex items-center gap-2 group"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span
                  className="w-4 h-px transition-all duration-300 group-hover:w-6"
                  style={{ background: "var(--red)" }}
                />
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span
              className="text-xs tracking-[0.3em] uppercase mb-2"
              style={{ color: "var(--gold)", fontFamily: "var(--font-inter)" }}
            >
              Get in Touch
            </span>
            <p
              className="text-white/40 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              For media and press enquiries, sponsorship opportunities, or fan mail, use the form below.
            </p>
            <div className="flex gap-0 mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white/70 placeholder-white/20 outline-none"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRight: "none",
                  fontFamily: "var(--font-inter)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(220,0,0,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
              <button
                className="px-5 py-2.5 text-sm text-white tracking-wider transition-all duration-300"
                style={{
                  background: "var(--red)",
                  fontFamily: "var(--font-inter)",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--red-bright)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--red)")}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Big background name */}
      <div className="overflow-hidden pointer-events-none select-none">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center leading-none"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(4rem, 18vw, 16rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(220,0,0,0.07)",
            letterSpacing: "0.04em",
            lineHeight: 0.85,
            paddingBottom: "0.1em",
          }}
        >
          HAMILTON
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 md:px-16 lg:px-24 py-4 flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ borderColor: "rgba(255,255,255,0.04)" }}
      >
        <span
          className="text-white/20 text-xs tracking-wider"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          © {new Date().getFullYear()} Lewis Hamilton. All rights reserved.
        </span>
        <span
          className="text-white/20 text-xs tracking-wider"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Built with passion for the greatest.
        </span>
      </div>
    </footer>
  );
}

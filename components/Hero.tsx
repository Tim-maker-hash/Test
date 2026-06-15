"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, -120]);
  const imageY = useTransform(scrollY, [0, 600], [0, -60]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0.5, y: 0.5 });
    setIsHovering(false);
  };

  const rotateX = (mousePos.y - 0.5) * -12;
  const rotateY = (mousePos.x - 0.5) * 14;
  const tiltStyle = {
    transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovering ? 1.03 : 1})`,
    transition: isHovering
      ? "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      : "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  const spotlightX = mousePos.x * 100;
  const spotlightY = mousePos.y * 100;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "700px", background: "#060606" }}
    >
      {/* Racing lines background */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px"
              style={{
                top: `${15 + i * 14}%`,
                left: 0,
                right: 0,
                background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? "rgba(220,0,0,0.12)" : "rgba(201,168,76,0.08)"}, transparent)`,
              }}
              animate={{ scaleX: [0.3, 1.2, 0.3], opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 4 + i * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6,
              }}
            />
          ))}
        </div>
      )}

      {/* Large background number */}
      <motion.div
        style={{ y: textY, opacity }}
        className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none select-none"
      >
        <span
          className="text-[40vw] font-bold leading-none"
          style={{
            fontFamily: "var(--font-bebas)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(220,0,0,0.06)",
            letterSpacing: "-0.04em",
          }}
        >
          44
        </span>
      </motion.div>

      {/* Hero image with 3D tilt */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 flex items-end justify-center md:justify-end"
      >
        <div
          ref={imageWrapRef}
          style={tiltStyle}
          className="relative h-full"
        >
          {/* Spotlight overlay that follows cursor */}
          <div
            className="absolute inset-0 z-10 pointer-events-none rounded-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(ellipse 40% 50% at ${spotlightX}% ${spotlightY}%, rgba(220,0,0,0.18) 0%, transparent 70%)`,
              opacity: isHovering ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />
          {/* Bottom gradient */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/3 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #060606 0%, transparent 100%)",
            }}
          />
          {/* Left gradient */}
          <div
            className="absolute top-0 left-0 bottom-0 w-1/3 z-10 pointer-events-none hidden md:block"
            style={{
              background: "linear-gradient(to right, #060606 0%, transparent 100%)",
            }}
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg/800px-Lewis_Hamilton_2016_Malaysia_2.jpg"
            alt="Lewis Hamilton"
            className="h-full w-auto object-cover object-top max-w-none"
            style={{
              filter: "contrast(1.05) saturate(0.9)",
              maxHeight: "100svh",
            }}
            draggable={false}
          />
        </div>
      </motion.div>

      {/* Text content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="absolute inset-0 flex flex-col justify-end md:justify-center px-6 md:px-16 lg:px-24 pb-16 md:pb-0 z-20 pointer-events-none"
      >
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px" style={{ background: "var(--red)" }} />
            <span
              className="text-xs tracking-[0.35em] uppercase"
              style={{ color: "var(--gold)", fontFamily: "var(--font-inter)" }}
            >
              Seven Time World Champion
            </span>
          </motion.div>

          {/* Main title */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(4rem, 14vw, 12rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                color: "white",
              }}
            >
              LEWIS
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(4rem, 14vw, 12rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.7)",
              }}
            >
              HAMILTON
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-6 text-white/50 text-sm md:text-base tracking-[0.12em] uppercase max-w-sm"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            103 Wins · 104 Poles · 7 Titles · The Greatest
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-4 mt-8 pointer-events-auto"
          >
            <a
              href="#about"
              className="group flex items-center gap-3 px-8 py-3.5 text-sm tracking-[0.15em] uppercase transition-all duration-300"
              style={{
                background: "var(--red)",
                color: "white",
                fontFamily: "var(--font-inter)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--red-bright)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--red)";
              }}
            >
              Discover the Legend
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#stats"
              className="text-sm tracking-[0.15em] uppercase transition-all duration-300 flex items-center gap-2"
              style={{ color: "var(--gold)", fontFamily: "var(--font-inter)" }}
            >
              <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
              His Records
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase text-white/30"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, var(--red), transparent)" }}
        />
      </motion.div>
    </section>
  );
}

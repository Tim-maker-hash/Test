"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 103, suffix: "+", label: "Race Wins", sub: "All-time record" },
  { value: 104, suffix: "+", label: "Pole Positions", sub: "All-time record" },
  { value: 7, suffix: "×", label: "World Titles", sub: "Joint all-time record" },
  { value: 197, suffix: "+", label: "Podium Finishes", sub: "All-time record" },
];

function AnimatedNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = target / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="stats" ref={ref} className="relative py-32 overflow-hidden" style={{ background: "#060606" }}>
      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(8rem, 25vw, 22rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(220,0,0,0.04)",
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
          }}
        >
          RECORDS
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px" style={{ background: "var(--red)" }} />
            <span
              className="text-xs tracking-[0.35em] uppercase"
              style={{ color: "var(--gold)", fontFamily: "var(--font-inter)" }}
            >
              By the Numbers
            </span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 80 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem, 7vw, 6rem)",
                lineHeight: 1,
                color: "white",
                letterSpacing: "0.02em",
              }}
            >
              REWRITING HISTORY
            </motion.h2>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.04)" }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="group relative flex flex-col gap-3 p-8 md:p-12 overflow-hidden"
              style={{ background: "#060606" }}
            >
              {/* Hover red accent */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(220,0,0,0.06) 0%, transparent 60%)" }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "var(--red)" }}
              />

              <span
                className="text-[10px] tracking-[0.3em] uppercase"
                style={{ color: "var(--red)", fontFamily: "var(--font-inter)" }}
              >
                {stat.label}
              </span>
              <span
                className="leading-none transition-colors duration-300 group-hover:text-[var(--red)]"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(3.5rem, 8vw, 6rem)",
                  color: "white",
                }}
              >
                <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={inView} />
              </span>
              <span
                className="text-white/30 text-xs tracking-wider"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Additional info bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col md:flex-row gap-6 md:items-center justify-between p-6 md:p-8"
          style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)" }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: "rgba(220,0,0,0.15)", border: "1px solid var(--red)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="var(--red)" />
              </svg>
            </div>
            <div>
              <p className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-inter)" }}>
                Most Decorated Driver in F1 History
              </p>
              <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>
                Every major record in Formula 1 belongs to Lewis Hamilton
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] tracking-[0.25em] uppercase"
              style={{ color: "var(--gold)", fontFamily: "var(--font-inter)" }}
            >
              Active Career
            </span>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--gold)" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

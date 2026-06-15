"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const titles = [
  { year: 2008, team: "McLaren", car: "MP4-23", wins: 5, detail: "Won on the final corner of the final lap in Brazil" },
  { year: 2014, team: "Mercedes", car: "W05 Hybrid", wins: 11, detail: "Dominant season, 11 victories with the Silver Arrows" },
  { year: 2015, team: "Mercedes", car: "W06 Hybrid", wins: 10, detail: "Sealed title with three races to spare" },
  { year: 2017, team: "Mercedes", car: "W08 EQ Power+", wins: 9, detail: "Fierce battle with Sebastian Vettel" },
  { year: 2018, team: "Mercedes", car: "W09 EQ Power+", wins: 11, detail: "Fifth title equalling Fangio's record" },
  { year: 2019, team: "Mercedes", car: "W10 EQ Power+", wins: 11, detail: "Sixth title — a new all-time record at the time" },
  { year: 2020, team: "Mercedes", car: "W11 EQ Performance", wins: 11, detail: "Equalled Schumacher's record of 7 world titles" },
];

export default function Championships() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="championships" ref={ref} className="relative py-32 overflow-hidden" style={{ background: "#080808" }}>
      {/* Decorative top line */}
      <div className="red-line absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
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
                World Championships
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
                }}
              >
                SEVEN TIMES
                <br />
                <span style={{ color: "var(--red)" }}>WORLD CHAMPION</span>
              </motion.h2>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span
              className="shimmer-text"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(5rem, 14vw, 10rem)",
                lineHeight: 1,
              }}
            >
              ×7
            </span>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 top-0 bottom-0 w-px origin-top hidden md:block"
            style={{ background: "linear-gradient(to bottom, var(--red), rgba(220,0,0,0.1))" }}
          />

          <div className="flex flex-col gap-0">
            {titles.map((title, i) => (
              <motion.div
                key={title.year}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
                className="group relative md:pl-12 py-6 border-b"
                style={{ borderColor: "rgba(255,255,255,0.04)" }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 hidden md:block transition-colors duration-300 group-hover:bg-red-600"
                  style={{
                    background: "#060606",
                    borderColor: "var(--red)",
                    transform: "translate(-50%, -50%)",
                  }}
                />

                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-4 md:gap-8 items-center">
                  {/* Year */}
                  <span
                    className="transition-colors duration-300 group-hover:text-[var(--red)]"
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "3rem",
                      color: "rgba(255,255,255,0.15)",
                      lineHeight: 1,
                    }}
                  >
                    {title.year}
                  </span>

                  {/* Details */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className="text-white font-medium text-sm"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {title.team}
                      </span>
                      <span
                        className="text-[10px] tracking-[0.2em] px-2 py-0.5"
                        style={{
                          color: "var(--gold)",
                          border: "1px solid rgba(201,168,76,0.3)",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {title.car}
                      </span>
                    </div>
                    <p className="text-white/40 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                      {title.detail}
                    </p>
                  </div>

                  {/* Win count */}
                  <div className="flex items-center gap-2">
                    <span
                      className="transition-colors duration-300 group-hover:text-[var(--red)]"
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "2rem",
                        color: "rgba(255,255,255,0.2)",
                        lineHeight: 1,
                      }}
                    >
                      {title.wins}
                    </span>
                    <span
                      className="text-xs text-white/20 tracking-wider"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      wins
                    </span>
                  </div>
                </div>

                {/* Hover highlight */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, rgba(220,0,0,0.04) 0%, transparent 70%)",
                    borderLeft: "2px solid var(--red)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

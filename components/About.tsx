"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const facts = [
  { label: "Born", value: "January 7, 1985", sub: "Stevenage, England" },
  { label: "Nationality", value: "British", sub: "Knight of the Realm" },
  { label: "Debut", value: "2007", sub: "Australian Grand Prix" },
  { label: "Teams", value: "McLaren · Mercedes · Ferrari", sub: "2007 – Present" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden" style={{ background: "#080808" }}>
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 w-1/2 h-1 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--red), transparent)" }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — image block */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Lewis_Hamilton_2013_United_States_GP.jpg/640px-Lewis_Hamilton_2013_United_States_GP.jpg"
                alt="Lewis Hamilton racing"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(20%) contrast(1.1)" }}
              />
              {/* Red overlay strip */}
              <div
                className="absolute top-0 right-0 w-1 h-full"
                style={{ background: "var(--red)" }}
              />
              {/* Gold frame corner */}
              <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2" style={{ borderColor: "var(--gold)" }} />
              <div className="absolute top-4 right-5 w-16 h-16 border-r-2 border-t-2" style={{ borderColor: "var(--red)" }} />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 md:-right-10 flex flex-col items-center justify-center"
              style={{
                width: 120,
                height: 120,
                background: "var(--red)",
                borderRadius: "50%",
                border: "3px solid rgba(201,168,76,0.4)",
              }}
            >
              <span
                className="text-white text-4xl leading-none"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                44
              </span>
              <span
                className="text-white/60 text-[9px] tracking-[0.2em] mt-0.5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                RACING NO.
              </span>
            </motion.div>
          </motion.div>

          {/* Right — text content */}
          <div className="flex flex-col gap-8">
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-px" style={{ background: "var(--red)" }} />
              <span
                className="text-xs tracking-[0.35em] uppercase"
                style={{ color: "var(--gold)", fontFamily: "var(--font-inter)" }}
              >
                The Story
              </span>
            </motion.div>

            {/* Heading */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 80 }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                  color: "white",
                }}
              >
                FROM STEVENAGE
                <br />
                <span style={{ color: "var(--red)" }}>TO LEGEND</span>
              </motion.h2>
            </div>

            {/* Body text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <p className="text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem" }}>
                Born in Stevenage, England, Lewis Hamilton began karting at the age of eight. Spotted by McLaren&apos;s Ron Dennis at the age of ten, he was signed to their young driver development programme — beginning one of the most extraordinary journeys in motorsport history.
              </p>
              <p className="text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem" }}>
                In 2007, Hamilton burst onto the Formula 1 stage with McLaren, narrowly missing the title in his debut season. A year later, he secured his first World Championship in dramatic fashion on the final corner of the final race. It was only the beginning.
              </p>
              <p className="text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem" }}>
                After joining Mercedes in 2013, Hamilton dominated the sport like no one before him — rewriting every record in the book. Seven World Championships. One hundred and three race victories. A legacy that transcends the sport.
              </p>
            </motion.div>

            {/* Fact grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mt-2"
            >
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1 p-4"
                  style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
                >
                  <span
                    className="text-[10px] tracking-[0.25em] uppercase"
                    style={{ color: "var(--red)", fontFamily: "var(--font-inter)" }}
                  >
                    {fact.label}
                  </span>
                  <span
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {fact.value}
                  </span>
                  <span className="text-white/40 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
                    {fact.sub}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="gold-line mt-24 mx-16 md:mx-24" />
    </section>
  );
}

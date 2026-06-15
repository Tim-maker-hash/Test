"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Quote() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "#0a0000" }}
    >
      {/* Scrolling background text */}
      <motion.div
        style={{ x }}
        className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden"
      >
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(6rem, 20vw, 18rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(220,0,0,0.05)",
            whiteSpace: "nowrap",
            letterSpacing: "0.1em",
          }}
        >
          STILL I RISE · STILL I RISE ·
        </span>
      </motion.div>

      {/* Red accent line top */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--red), transparent)" }}
      />

      <div className="max-w-[1000px] mx-auto px-6 md:px-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "4rem",
            color: "var(--red)",
            lineHeight: 1,
          }}
        >
          &ldquo;
        </motion.div>

        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 60 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.15,
              color: "white",
              letterSpacing: "0.03em",
            }}
          >
            I DON&apos;T HAVE A{" "}
            <span style={{ color: "var(--red)" }}>LIMIT.</span> THERE IS{" "}
            <span style={{ color: "var(--gold)" }}>ALWAYS MORE</span> I CAN DO.
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 text-white/30 text-sm tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          — Lewis Hamilton
        </motion.p>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-1/4 right-1/4 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
      />
    </section>
  );
}

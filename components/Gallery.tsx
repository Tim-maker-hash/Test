"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const images = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg/800px-Lewis_Hamilton_2016_Malaysia_2.jpg",
    label: "Malaysia GP 2016",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Lewis_Hamilton_2013_United_States_GP.jpg/640px-Lewis_Hamilton_2013_United_States_GP.jpg",
    label: "United States GP 2013",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Lewis_Hamilton_2016_United_States_Grand_Prix.jpg/640px-Lewis_Hamilton_2016_United_States_Grand_Prix.jpg",
    label: "US GP 2016",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Lewis_Hamilton_2014_Bahrain_GP.jpg/640px-Lewis_Hamilton_2014_Bahrain_GP.jpg",
    label: "Bahrain GP 2014",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Hamilton_2016_Malaysia_GP.jpg/640px-Hamilton_2016_Malaysia_GP.jpg",
    label: "Malaysia 2016",
    span: "col-span-1 row-span-1",
  },
];

const fallbackImages = [
  { label: "Silverstone Victory", color: "#1a0000" },
  { label: "Monaco Triumph", color: "#0d0000" },
  { label: "Championship Moment", color: "#200000" },
  { label: "Podium Celebration", color: "#150000" },
  { label: "Qualifying Lap", color: "#1c0000" },
];

function GalleryCard({
  index,
  label,
  src,
  delay,
  inView,
}: {
  index: number;
  label: string;
  src?: string;
  delay: number;
  inView: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay }}
      className="relative overflow-hidden group"
      style={{
        aspectRatio: index === 0 ? "3/4" : "4/3",
        background: fallbackImages[index % fallbackImages.length].color,
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {src && !errored && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{
            transform: hovering ? "scale(1.08)" : "scale(1)",
            opacity: loaded ? 1 : 0,
            filter: "contrast(1.05) saturate(0.85)",
          }}
          draggable={false}
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)",
          opacity: hovering ? 1 : 0.6,
        }}
      />

      {/* Red top accent on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 transition-transform duration-300 origin-left"
        style={{
          background: "var(--red)",
          transform: hovering ? "scaleX(1)" : "scaleX(0)",
        }}
      />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span
          className="text-white text-sm tracking-wider"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {label}
        </span>
      </div>

      {/* Index number */}
      <div
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "1.2rem",
          color: "var(--gold)",
        }}
      >
        0{index + 1}
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="gallery" ref={ref} className="relative py-32 overflow-hidden" style={{ background: "#060606" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
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
                Gallery
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
                MOMENTS OF
                <br />
                <span style={{ color: "var(--red)" }}>GREATNESS</span>
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/40 text-sm max-w-xs leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            A visual journey through the career of Formula 1&apos;s greatest driver.
          </motion.p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {fallbackImages.map((item, i) => (
            <GalleryCard
              key={i}
              index={i}
              label={item.label}
              src={images[i]?.src}
              delay={0.1 + i * 0.08}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

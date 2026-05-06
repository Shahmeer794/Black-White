"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const images = [
  { src: "/images/473569220_1136751281498596_4169320267146507040_n.jpg",  alt: "Pink strawberry cone in shop", category: "Cones" },
  { src: "/images/570247505_1473388791453931_783020428514592786_n.jpg",   alt: "Dark chocolate black cone",    category: "Cones" },
  { src: "/images/492209356_1300737548719057_2864055363945113638_n.jpg",  alt: "Two-scoop cone",               category: "Cones" },
  { src: "/images/473368662_1136889838151407_7349354299537001835_n.jpg",  alt: "Blue velvet in branded cup",   category: "Cups" },
  { src: "/images/473229646_1136889748151416_7222598132496027930_n.jpg",  alt: "Chocolate in branded cup",     category: "Cups" },
  { src: "/images/124100673_142956564211411_6878156377720542027_n.jpg",   alt: "Cookies & cream in black cup", category: "Cups" },
  { src: "/images/596963348_1514122307380579_4184674621993084385_n.jpg",  alt: "Banana pudding cream pies",    category: "Pies" },
  { src: "/images/588379455_1502969381829205_7298971316022951832_n.jpg",  alt: "Classic cream pie",            category: "Pies" },
  { src: "/images/587714844_1498384658954344_8942536259378986225_n.jpg",  alt: "Chef presenting a cream pie",  category: "Pies" },
  { src: "/images/493406476_1303909578401854_5805577515556471217_n.jpg",  alt: "Brownie sundae",               category: "Specials" },
  { src: "/images/119143767_113045803869154_1989129372501701255_n.jpg",   alt: "Oreo and cream base",          category: "Specials" },
];

const categories = ["All", "Cones", "Cups", "Pies", "Specials"];

export default function GalleryPage() {
  const [active, setActive]   = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <>
      {/* ── Header ──────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-end bg-bw-black overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/124100673_142956564211411_6878156377720542027_n.jpg"
          alt="Black+White branded cup"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, #080808 0%, rgba(8,8,8,0.55) 40%, rgba(8,8,8,0.45) 60%, #080808 100%)"
        }} />
        {/* Text */}
        <FadeIn className="relative z-10 container-xl px-6 md:px-14 lg:px-24 pt-48 pb-24">
          <p className="eyebrow mb-6">Gallery</p>
          <h1 className="h1 text-bw-white max-w-2xl">
            Every scoop,<br />
            <span className="italic font-light">a moment.</span>
          </h1>
        </FadeIn>
      </section>

      {/* ── Filter strip ────────────────────────────────── */}
      <div className="sticky top-[76px] md:top-[88px] z-30 bg-bw-black border-b border-bw-dim/50">
        <div className="container-xl px-6 md:px-14 lg:px-24 flex gap-10 overflow-x-auto py-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-sans font-light text-[0.6rem] tracking-[0.32em] uppercase whitespace-nowrap transition-colors duration-500 pb-[3px] border-b ${
                active === cat
                  ? "text-bw-white border-bw-white"
                  : "text-bw-muted border-transparent hover:text-bw-subtle"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ────────────────────────────────────────── */}
      <section className="section-pad bg-bw-black">
        <div className="container-xl">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => {
                const isFeature = i % 7 === 0;
                return (
                  <motion.div
                    key={img.src}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.03 }}
                    className={`group relative overflow-hidden cursor-pointer ${
                      isFeature ? "col-span-2 md:col-span-2" : ""
                    }`}
                    style={{ aspectRatio: isFeature ? "16/9" : "1/1" }}
                    onClick={() => setLightbox(img.src)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover img-hover"
                    />
                    {/* hover scrim */}
                    <div className="absolute inset-0 bg-bw-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-600 flex items-end p-5">
                      <span className="font-sans font-light text-[0.58rem] tracking-[0.32em] uppercase text-bw-white/70">
                        {img.category}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Lightbox ────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-bw-black/97 flex items-center justify-center p-8"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-3xl"
              style={{ aspectRatio: "4/3" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Gallery enlarged"
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>

            <button
              onClick={() => setLightbox(null)}
              className="absolute top-7 right-7 text-bw-muted hover:text-bw-white transition-colors duration-500"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

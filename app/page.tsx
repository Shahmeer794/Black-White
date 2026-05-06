"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const featured = [
  {
    name: "Ice Cream",
    desc: "Inventive flavors served in our signature hand-pressed dark waffle cone — each scoop a study in contrast.",
    img: "/images/570247505_1473388791453931_783020428514592786_n.jpg",
    no: "01",
  },
  {
    name: "Cream Pies",
    desc: "Silky custard, a buttered graham crust, and rosettes of fresh cream. Simple. Perfected.",
    img: "/images/596963348_1514122307380579_4184674621993084385_n.jpg",
    no: "02",
  },
  {
    name: "Sundae Specials",
    desc: "Warm brownie, a generous scoop, house caramel. The kind of thing you come back for.",
    img: "/images/493406476_1303909578401854_5805577515556471217_n.jpg",
    no: "03",
  },
];

const testimonials = [
  {
    quote: "The best ice cream in San Antonio — and it isn't close. The black cone alone is worth the trip.",
    author: "Maria G.",
  },
  {
    quote: "Stunning space, even better desserts. The cream pie is unlike anything I've had.",
    author: "James T.",
  },
  {
    quote: "Every visit feels like a proper experience. This place has set a new standard.",
    author: "Sophia R.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bw-black">
        <div className="absolute inset-0">
          <Image
            src="/images/473569220_1136751281498596_4169320267146507040_n.jpg"
            alt="Black+White Creamery interior"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.18]"
          />
          {/* multi-stop gradient: dark top, lighter center, dark bottom */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, #080808 0%, rgba(8,8,8,0.55) 35%, rgba(8,8,8,0.55) 65%, #080808 100%)"
          }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center mb-12"
          >
            <div className="relative w-14 h-14 opacity-70">
              <Image src="/images/Logo.jpg" alt="Logo" fill className="object-contain" sizes="56px" />
            </div>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="eyebrow mb-8"
          >
            San Antonio, Texas
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="display text-bw-white"
          >
            Black<span className="italic font-light text-bw-muted">+</span>White
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="font-sans font-light text-[0.58rem] tracking-[0.5em] uppercase text-bw-muted mt-4 mb-12"
          >
            Modern Creamery
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="font-serif font-light italic text-[1.25rem] md:text-[1.5rem] text-bw-subtle/70 max-w-md mx-auto mb-14 leading-[1.6]"
          >
            Where luxury meets flavor.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/menu" className="btn-solid">Explore the Menu</Link>
            <a href="tel:+12102331811" className="btn-ghost">Call Now</a>
          </motion.div>
        </div>

        {/* Scroll line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-14 bg-gradient-to-b from-bw-dim to-transparent origin-top"
          />
        </motion.div>
      </section>

      {/* ── Signatures ───────────────────────────────────── */}
      <section className="section-pad bg-bw-black">
        <div className="container-xl">
          <FadeIn className="mb-20">
            <p className="eyebrow mb-5">The Collection</p>
            <h2 className="h2 text-bw-white max-w-lg">What we&apos;re known for</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bw-gray-mid">
            {featured.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.12}>
                <div className="group bg-bw-black flex flex-col h-full">
                  {/* image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover img-hover"
                    />
                    {/* dark vignette bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bw-black/70 via-transparent to-transparent" />
                  </div>
                  {/* text */}
                  <div className="flex flex-col gap-4 p-8 flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="h3 text-bw-white">{item.name}</h3>
                      <span className="font-sans font-light text-[0.6rem] tracking-[0.3em] text-bw-muted/50 mt-1">{item.no}</span>
                    </div>
                    <p className="body-sm leading-[1.8]">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-14" delay={0.2}>
            <Link href="/menu" className="btn-ghost">Full Menu</Link>
          </FadeIn>
        </div>
      </section>

      {/* ── About preview ─────────────────────────────────── */}
      <section className="section-pad bg-bw-gray">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <FadeIn direction="right">
            <div className="relative">
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/124100673_142956564211411_6878156377720542027_n.jpg"
                  alt="Signature Black+White cup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* offset decorative frame */}
              <div className="absolute -bottom-5 -right-5 w-full h-full border border-bw-dim pointer-events-none" />
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <div className="flex flex-col gap-8">
              <p className="eyebrow">Our Story</p>
              <h2 className="h2 text-bw-white leading-[1.06]">
                A different kind<br />of creamery.
              </h2>
              <div className="rule" />
              <p className="body-lg">
                Black+White was born from a belief that ice cream can be an art
                form. We pair premium ingredients with a minimalist ethos — the
                result is something you won&apos;t find anywhere else in San Antonio.
              </p>
              <p className="body-lg">
                Every detail is intentional. The space, the cup, the cone, the
                flavor — each one considered, refined, and made with care.
              </p>
              <Link href="/about" className="btn-ghost self-start mt-2">Our Story</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Gallery strip ─────────────────────────────────── */}
      <section className="section-pad bg-bw-black">
        <div className="container-xl">
          <FadeIn className="mb-20">
            <p className="eyebrow mb-5">Gallery</p>
            <h2 className="h2 text-bw-white max-w-sm">Every scoop, a moment.</h2>
          </FadeIn>

          {/* Asymmetric 3-column layout */}
          <div className="grid grid-cols-12 grid-rows-2 gap-2 h-[60vw] max-h-[640px]">
            <FadeIn className="col-span-7 row-span-2">
              <div className="group relative w-full h-full overflow-hidden">
                <Image
                  src="/images/473569220_1136751281498596_4169320267146507040_n.jpg"
                  alt="Pink cone in shop"
                  fill sizes="58vw"
                  className="object-cover img-hover"
                />
              </div>
            </FadeIn>
            <FadeIn className="col-span-5" delay={0.1}>
              <div className="group relative w-full h-full overflow-hidden">
                <Image
                  src="/images/588379455_1502969381829205_7298971316022951832_n.jpg"
                  alt="Cream pie"
                  fill sizes="42vw"
                  className="object-cover img-hover"
                />
              </div>
            </FadeIn>
            <FadeIn className="col-span-5" delay={0.2}>
              <div className="group relative w-full h-full overflow-hidden">
                <Image
                  src="/images/124100673_142956564211411_6878156377720542027_n.jpg"
                  alt="Branded cup"
                  fill sizes="42vw"
                  className="object-cover img-hover"
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-12" delay={0.2}>
            <Link href="/gallery" className="btn-ghost">View Gallery</Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section className="section-pad bg-bw-gray">
        <div className="container-xl">
          <FadeIn className="mb-20">
            <p className="eyebrow mb-5">Guest Voices</p>
            <h2 className="h2 text-bw-white max-w-sm">What people say.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex flex-col gap-7 pt-8 border-t border-bw-dim h-full">
                  <p className="font-serif font-light italic text-[1.2rem] text-bw-white leading-[1.65] flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-px bg-bw-dim" />
                    <p className="font-sans font-light text-[0.6rem] tracking-[0.3em] uppercase text-bw-muted">
                      {t.author}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ───────────────────────────────────── */}
      <section className="section-pad bg-bw-black">
        <FadeIn className="container-xl max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center gap-8">
            <p className="eyebrow">Visit Us</p>
            <h2 className="h2 text-bw-white">
              Ready for<br />
              <span className="italic font-light">something extraordinary?</span>
            </h2>
            <div className="fade-line w-32" />
            <p className="body-lg max-w-sm mt-2">
              Come find us in San Antonio, or give us a call. We&apos;d love to
              craft your next favorite moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a href="tel:+12102331811" className="btn-solid">+1 210-233-1811</a>
              <Link href="/contact" className="btn-ghost">Get Directions</Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const values = [
  {
    no: "I",
    title: "Premium Ingredients",
    desc: "From locally sourced dairy to imported chocolates — every component earns its place.",
  },
  {
    no: "II",
    title: "Artisan Process",
    desc: "Every recipe is developed in-house and made fresh daily. No shortcuts, no compromises.",
  },
  {
    no: "III",
    title: "Bold Restraint",
    desc: "We push flavor boundaries while keeping the aesthetic minimal. Less noise, more presence.",
  },
  {
    no: "IV",
    title: "San Antonio First",
    desc: "Built here, for here. We are part of the fabric of this city and proud of it.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Header ──────────────────────────────────────── */}
      <section className="relative pt-48 pb-0 bg-bw-black overflow-hidden">
        <FadeIn className="container-xl px-6 md:px-14 lg:px-24 pb-24">
          <p className="eyebrow mb-6">About Us</p>
          <h1 className="h1 text-bw-white max-w-3xl">
            A different kind<br />
            <span className="italic font-light">of creamery.</span>
          </h1>
        </FadeIn>

        {/* Full-bleed image */}
        <div className="relative w-full overflow-hidden" style={{ height: "clamp(300px, 55vh, 680px)" }}>
          <Image
            src="/images/473569220_1136751281498596_4169320267146507040_n.jpg"
            alt="Black+White Creamery interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, #080808 0%, transparent 20%, transparent 70%, #080808 100%)"
          }} />
        </div>
      </section>

      {/* ── Story ───────────────────────────────────────── */}
      <section className="section-pad bg-bw-black">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <FadeIn direction="right">
            <div className="flex flex-col gap-8">
              <p className="eyebrow">Origin</p>
              <h2 className="h2 text-bw-white">
                Born from a<br />
                <span className="italic font-light">love of craft.</span>
              </h2>
              <div className="rule ml-0" />
              <p className="body-lg">
                Black+White opened in San Antonio with one purpose: to redefine
                what a creamery could be. We saw an opportunity to bring the
                precision of fine dining to the pleasure of an ice cream shop —
                and we took it.
              </p>
              <p className="body-lg">
                Our recipes were years in the making. The menu honors classics
                while boldly reimagining them. The result surprises, delights,
                and earns your return.
              </p>
              <p className="body-lg">
                The black-and-white aesthetic isn&apos;t just a look. It&apos;s a
                philosophy: contrast, balance, simplicity.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <div className="relative">
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/587714844_1498384658954344_8942536259378986225_n.jpg"
                  alt="Presenting a cream pie"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border border-bw-dim pointer-events-none" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────── */}
      <section className="section-pad bg-bw-gray">
        <div className="container-xl">
          <FadeIn className="mb-20">
            <p className="eyebrow mb-5">Principles</p>
            <h2 className="h2 text-bw-white max-w-sm">What we stand for.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bw-dim">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="bg-bw-gray p-10 flex flex-col gap-5 h-full">
                  <span className="font-serif font-light italic text-[2.5rem] text-bw-dim leading-none">
                    {v.no}
                  </span>
                  <h3 className="h3 text-bw-white">{v.title}</h3>
                  <p className="body-sm leading-[1.85]">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image strip ─────────────────────────────────── */}
      <section className="section-pad bg-bw-black">
        <div className="container-xl">
          <FadeIn className="mb-20">
            <p className="eyebrow mb-5">The Work</p>
            <h2 className="h2 text-bw-white max-w-sm">Behind every scoop.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {[
              { src: "/images/119143767_113045803869154_1989129372501701255_n.jpg", ratio: "4/3" },
              { src: "/images/473229646_1136889748151416_7222598132496027930_n.jpg", ratio: "4/3" },
              { src: "/images/492209356_1300737548719057_2864055363945113638_n.jpg", ratio: "4/3" },
            ].map((img, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="group relative overflow-hidden w-full" style={{ aspectRatio: img.ratio }}>
                  <Image
                    src={img.src}
                    alt={`Behind the scenes ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover img-hover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="section-pad bg-bw-gray border-t border-bw-dim/40">
        <FadeIn className="container-xl max-w-xl">
          <p className="eyebrow mb-6">Come In</p>
          <h2 className="h2 text-bw-white mb-10">
            Taste what<br />
            <span className="italic font-light">Black+White is about.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/menu" className="btn-solid">View Menu</Link>
            <Link href="/contact" className="btn-ghost">Find Us</Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  return (
    <>
      {/* ── Header ──────────────────────────────────────── */}
      <section className="pt-48 pb-24 bg-bw-black">
        <FadeIn className="container-xl px-6 md:px-14 lg:px-24">
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="h1 text-bw-white max-w-2xl">
            Come find<br />
            <span className="italic font-light">us.</span>
          </h1>
        </FadeIn>
      </section>

      {/* ── Main content ────────────────────────────────── */}
      <section className="section-pad bg-bw-black border-t border-bw-dim/40">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          {/* Left — info */}
          <FadeIn direction="right">
            <div className="flex flex-col gap-14">

              {/* Phone */}
              <div className="flex flex-col gap-4">
                <p className="eyebrow">Call</p>
                <a
                  href="tel:+12102331811"
                  className="font-serif font-light text-[clamp(2rem,5vw,3.5rem)] text-bw-white hover:text-bw-subtle transition-colors duration-600 leading-none"
                >
                  +1 210-233-1811
                </a>
                <p className="body-sm mt-1">
                  Hours vary seasonally — call ahead for availability.
                </p>
              </div>

              <div className="fade-line" />

              {/* Location */}
              <div className="flex flex-col gap-4">
                <p className="eyebrow">Location</p>
                <p className="font-serif font-light text-2xl text-bw-white">
                  San Antonio, Texas
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Black%2BWhite%20Modern%20Creamery&query_place_id=ChIJIWlamAj1XIYRDA2YtWhoLRc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 body-sm hover:text-bw-subtle transition-colors duration-600 group w-fit"
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="underline underline-offset-4 decoration-bw-dim group-hover:decoration-bw-muted transition-colors duration-600">
                    Open in Google Maps
                  </span>
                </a>
              </div>

              <div className="fade-line" />

              {/* Social */}
              <div className="flex flex-col gap-5">
                <p className="eyebrow">Follow</p>
                <a
                  href="https://www.facebook.com/BlackWhiteCreamery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 group w-fit"
                >
                  <span className="w-9 h-9 border border-bw-dim flex items-center justify-center group-hover:border-bw-muted transition-colors duration-600">
                    <svg className="w-[15px] h-[15px] text-bw-muted group-hover:text-bw-subtle transition-colors duration-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </span>
                  <span className="font-sans font-light text-sm text-bw-muted group-hover:text-bw-subtle transition-colors duration-600">
                    Black+White Modern Creamery
                  </span>
                </a>
              </div>

              <div className="fade-line" />

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+12102331811" className="btn-solid">Call Now</a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Black%2BWhite%20Modern%20Creamery&query_place_id=ChIJIWlamAj1XIYRDA2YtWhoLRc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right — map */}
          <FadeIn direction="left" delay={0.15}>
            <div className="flex flex-col gap-4">
              <div
                className="w-full overflow-hidden border border-bw-dim/60"
                style={{ height: "clamp(340px, 55vh, 600px)" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=Black+White+Modern+Creamery+San+Antonio+TX&zoom=15"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "grayscale(100%) brightness(0.35) contrast(1.2)",
                    display: "block",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Black+White Modern Creamery location"
                />
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Black%2BWhite%20Modern%20Creamery&query_place_id=ChIJIWlamAj1XIYRDA2YtWhoLRc"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-light text-[0.62rem] tracking-[0.24em] uppercase text-bw-muted hover:text-bw-subtle transition-colors duration-600 self-end"
              >
                Open in Google Maps →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Hours note ──────────────────────────────────── */}
      <section className="section-pad bg-bw-gray border-t border-bw-dim/40">
        <FadeIn className="container-xl max-w-lg">
          <p className="eyebrow mb-6">Hours</p>
          <h2 className="h2 text-bw-white mb-8">
            When to<br />
            <span className="italic font-light">find us.</span>
          </h2>
          <div className="rule ml-0 mb-8" />
          <p className="body-lg mb-6">
            Hours vary — please call or check our Facebook page for current
            hours and any special closures.
          </p>
          <a
            href="https://www.facebook.com/BlackWhiteCreamery"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-light text-[0.62rem] tracking-[0.28em] uppercase text-bw-muted hover:text-bw-subtle transition-colors duration-600 underline underline-offset-4 decoration-bw-dim"
          >
            Check Facebook for latest updates
          </a>
        </FadeIn>
      </section>
    </>
  );
}

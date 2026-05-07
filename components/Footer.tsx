import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/",        label: "Home" },
  { href: "/menu",    label: "Menu" },
  { href: "/about",   label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];
// Footer component with brand, navigation, contact info, and social links
export default function Footer() {
  return (
    <footer className="bg-bw-gray border-t border-bw-gray-mid/50">
      <div className="section-pad">
        <div className="container-xl grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">

          {/* Brand block — 5 cols */}
          <div className="md:col-span-5 flex flex-col gap-7">
            <Link href="/" className="flex items-center gap-4 group w-fit">
              <div className="relative w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity duration-600">
                <Image
                  src="/images/Logo.jpg"
                  alt="Black+White Modern Creamery"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <div className="flex flex-col gap-[3px]">
                <span className="font-serif font-light text-[0.9rem] tracking-[0.18em] uppercase text-bw-white leading-none">
                  Black<span className="text-bw-muted mx-0.5">+</span>White
                </span>
                <span className="font-sans font-light text-[0.54rem] tracking-[0.36em] uppercase text-bw-subtle leading-none">
                  Modern Creamery
                </span>
              </div>
            </Link>

            <p className="body-sm max-w-[280px] leading-[1.9]">
              Artisan ice cream and premium desserts, crafted for those who
              appreciate the finer details.
            </p>

            {/* Social */}
            <a
              href="https://www.facebook.com/BlackWhiteCreamery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group w-fit"
              aria-label="Facebook"
            >
              <span className="w-8 h-8 border border-bw-dim flex items-center justify-center group-hover:border-bw-muted transition-colors duration-600">
                <svg className="w-[14px] h-[14px] text-bw-muted group-hover:text-bw-subtle transition-colors duration-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </span>
              <span className="font-sans font-light text-[0.62rem] tracking-[0.28em] uppercase text-bw-muted group-hover:text-bw-subtle transition-colors duration-600">
                Follow Us
              </span>
            </a>
          </div>

          {/* Navigation — 3 cols */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow mb-7">Navigate</p>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans font-light text-sm text-bw-muted hover:text-bw-subtle transition-colors duration-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 4 cols */}
          <div className="md:col-span-4 md:col-start-10">
            <p className="eyebrow mb-7">Reach Us</p>
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  href="tel:+12102331811"
                  className="font-serif font-light text-2xl text-bw-white hover:text-bw-subtle transition-colors duration-600"
                >
                  +1 210-233-1811
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Black%2BWhite%20Modern%20Creamery&query_place_id=ChIJIWlamAj1XIYRDA2YtWhoLRc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-sm hover:text-bw-subtle transition-colors duration-600"
                >
                  San Antonio, Texas
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="container-xl mt-20 pt-7 border-t border-bw-gray-mid/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans font-light text-[0.6rem] tracking-[0.22em] uppercase text-bw-muted/60">
            © {new Date().getFullYear()} Black+White Modern Creamery
          </p>
          <p className="font-sans font-light text-[0.6rem] tracking-[0.22em] uppercase text-bw-muted/40">
            San Antonio, TX
          </p>
        </div>
      </div>
    </footer>
  );
}

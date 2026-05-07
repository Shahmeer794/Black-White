"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/",       label: "Home" },
  { href: "/menu",   label: "Menu" },
  { href: "/about",  label: "About" },
  { href: "/gallery",label: "Gallery" },
  { href: "/contact",label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  /* prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-bw-black/96 backdrop-blur-md border-b border-bw-gray-mid/60"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-14 lg:px-24 h-[76px] md:h-[88px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group" aria-label="Home">
            <div className="relative w-9 h-9 opacity-90 group-hover:opacity-100 transition-opacity duration-600">
              <Image
                src="/images/Logo.jpg"
                alt="Black+White Modern Creamery"
                fill
                className="object-contain"
                sizes="36px"
              />
            </div>
            <div className="hidden sm:flex flex-col gap-[3px]">
              <span className="font-serif font-medium text-[0.95rem] tracking-[0.18em] uppercase text-bw-white leading-none">
                Black<span className="text-bw-muted mx-0.5">+</span>White
              </span>
              <span className="font-sans font-medium text-[0.55rem] tracking-[0.38em] uppercase text-bw-subtle leading-none">
                Modern Creamery
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12" aria-label="Primary navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans font-light text-[0.62rem] tracking-[0.32em] uppercase transition-colors duration-600 relative group ${
                  pathname === link.href
                    ? "text-bw-white"
                    : "text-bw-subtle hover:text-bw-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-[3px] left-0 h-px bg-bw-white/50 transition-all duration-600 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <a href="tel:+12102331811" className="btn-ghost text-[0.6rem] py-[10px] px-7">
              Call Now
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[6px] p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-[22px] h-px bg-bw-subtle transition-all duration-500 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-[22px] h-px bg-bw-subtle transition-all duration-500 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-[22px] h-px bg-bw-subtle transition-all duration-500 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-bw-black flex flex-col items-center justify-center gap-11 md:hidden"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className={`font-serif font-light text-[2.2rem] tracking-wide ${
                    pathname === link.href ? "text-bw-white" : "text-bw-muted hover:text-bw-white"
                  } transition-colors duration-500`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="tel:+12102331811"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.5 }}
              className="btn-solid mt-6"
            >
              +1 210-233-1811
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

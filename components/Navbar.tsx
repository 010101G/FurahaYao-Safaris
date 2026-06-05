"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import TopBar from "@/components/layout/TopBar";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/safaris", label: "Safaris" },
  { href: "/trekking", label: "Trekking" },
  {
    href: "/destinations",
    label: "Destinations",
    children: [
      { href: "/destinations#destinations", label: "Top Destinations" },
      { href: "/destinations#other-destinations", label: "Other Destinations" },
    ],
  },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolledHome, setScrolledHome] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    closeMenu();
  }, [pathname]);

  // Only the homepage hero needs the transparent → solid transition.
  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolledHome(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = !isHome || scrolledHome || menuOpen;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  return (
    <header id="top">
      <motion.div
        initial={{ y: -110 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-[100]"
      >
        <TopBar collapsed={scrolledHome || menuOpen} />
        <nav
          className={`w-full h-[72px] transition-colors duration-300 box-border ${solid
              ? "bg-safari-cream/90 backdrop-blur-xl shadow-[0_1px_0_rgba(26,22,19,0.06)] text-safari-black"
              : "bg-transparent text-white"
            }`}
        >
          <div className="max-w-[1260px] mx-auto h-full px-4 md:px-2 flex items-center gap-4">
            {/* Logo */}
            <Link href="/" aria-label="FurahaYao Safaris home" className="flex items-center gap-3 flex-1">
              <span
                className={`grid place-items-center rounded-full p-1.5 transition-all duration-300 ${solid ? "bg-safari-black/5" : "bg-white/90 shadow-soft"
                  }`}
              >
                <Image
                  src="/images/furahayao-logo.png"
                  alt="FurahaYao Safaris"
                  width={44}
                  height={44}
                  unoptimized
                  className="rounded-lg object-contain"
                />
              </span>
              <span className={`hidden sm:block font-extrabold tracking-tight text-lg leading-none ${solid ? "text-safari-black" : "text-white"}`}>
                FurahaYao
                <span className={`block text-[10px] font-semibold tracking-[0.3em] uppercase ${solid ? "text-safari-terracotta" : "text-safari-gold"}`}>
                  Safaris
                </span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((l) =>
                l.children ? (
                  <div
                    key={l.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(l.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={l.href}
                      className={`relative px-3 py-2 text-sm font-semibold rounded-full transition-colors flex items-center gap-1 ${isActive(l.href) ? (solid ? "text-safari-terracotta" : "text-safari-gold") : "hover:opacity-70"
                        }`}
                    >
                      {l.label}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={`transition-transform ${openDropdown === l.href ? "rotate-180" : ""}`}>
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </Link>
                    <AnimatePresence>
                      {openDropdown === l.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-0 top-full pt-2 w-56"
                        >
                          <div className="rounded-2xl bg-white shadow-lift overflow-hidden border border-safari-black/5">
                            {l.children.map((c) => (
                              <Link
                                key={c.href}
                                href={c.href}
                                className="block px-4 py-3 text-sm font-medium text-safari-black hover:bg-safari-cream hover:text-safari-terracotta transition-colors"
                              >
                                {c.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`relative px-3 py-2 text-sm font-semibold rounded-full transition-colors ${isActive(l.href) ? (solid ? "text-safari-terracotta" : "text-safari-gold") : "hover:opacity-70"
                      }`}
                  >
                    {l.label}
                    {isActive(l.href) && (
                      <motion.span
                        layoutId="nav-underline"
                        className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full ${solid ? "bg-safari-terracotta" : "bg-safari-gold"}`}
                      />
                    )}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTA + language */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher tone={solid ? "dark" : "light"} />
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-safari-terracotta text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-safari-brown hover:-translate-y-0.5 transition-all duration-300 shadow-soft"
              >
                Plan My Trip
              </Link>
            </div>

            {/* Mobile language switcher */}
            <div className="lg:hidden ml-auto flex items-center">
              <LanguageSwitcher tone={solid ? "dark" : "light"} />
            </div>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((p) => !p)}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block w-7 h-0.5 rounded-full transition-all duration-300 origin-center ${solid ? "bg-safari-black" : "bg-white"
                    } ${menuOpen ? (i === 0 ? "rotate-45 translate-y-2" : i === 1 ? "opacity-0" : "-rotate-45 -translate-y-2") : ""}`}
                />
              ))}
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-[72px] z-[99] bg-ink overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-8 gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-white text-2xl font-bold py-3 border-b border-white/10"
                  >
                    {l.label}
                  </Link>
                  {l.children && (
                    <div className="flex flex-col pl-4 py-2 gap-1">
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setMenuOpen(false)}
                          className="text-white/70 text-base py-1.5"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-safari-terracotta text-white px-6 py-4 rounded-full font-bold text-lg"
                >
                  Plan My Trip
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

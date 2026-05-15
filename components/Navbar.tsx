"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/safaris", label: "Our Safaris" },
  { href: "/trekking", label: "Trekking Package" },
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

function smoothScroll(id: string) {
  if (typeof window !== "undefined") {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHomePage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Immediately set scrolled state based on current page when pathname changes
    setScrolled(!isHomePage);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // On non-homepage, always show scrolled state
    if (!isHomePage) {
      setScrolled(true);
      return;
    }
    // On homepage, update based on scroll position
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = prev ? "" : "hidden";
      }
      return !prev;
    });
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      // Use Next.js router for client-side navigation
      router.push(href);
    } else {
      // Smooth scroll for anchor links
      smoothScroll(href);
    }
    setMenuOpen(false);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  return (
    <header id="top">
      <nav
        className={`fixed top-0 left-0 w-full h-[88px] z-[100] transition-all duration-300 box-border ${
          scrolled
            ? "bg-white shadow-sm text-safari-black"
            : "bg-transparent text-white"
        }`}
        suppressHydrationWarning
      >
        <div className="max-w-325 mx-auto h-full px-4 md:px-6 flex items-center">
        {/* Left: Logo + Brand */}
        <Link
          href="/"
          aria-label="Go to top"
          className="flex items-center gap-3 flex-1"
        >
          <div className={`rounded-full p-2 transition-all duration-300 ${
            scrolled ? "" : "bg-white"
          }`} suppressHydrationWarning>
            <Image
              src="/images/furahayao-logo.png"
              alt="FurahaYao Safaris Logo"
              width={48}
              height={48}
              unoptimized
              className="rounded-lg object-contain"
            />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 mr-6">
          {links.map((l) =>
            l.children ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(l.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(l.href)}
                  className={`font-medium text-sm hover:opacity-70 transition-all duration-300 cursor-pointer bg-transparent border-none ${
                    scrolled ? "text-safari-brown" : "text-white"
                  }`}
                >
                  {l.label}
                </button>
                <div className={`absolute left-0 top-full w-max rounded-xl shadow-lg overflow-hidden ${
                  scrolled ? "bg-white" : "bg-safari-brown"
                } ${openDropdown === l.href ? "flex" : "hidden"} flex-col z-50`}>
                  {l.children.map((child) => (
                    <button
                      key={child.href}
                      onClick={() => handleNavClick(child.href)}
                      className={`text-left px-4 py-2 text-sm font-medium transition-all duration-300 border-b border-white/10 ${
                        scrolled
                          ? "text-safari-brown bg-white hover:bg-safari-yellow hover:text-white"
                          : "text-white bg-safari-brown hover:bg-safari-yellow/90 hover:text-white"
                      }`}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={l.href}
                onClick={() => handleNavClick(l.href)}
                className={`font-medium text-sm hover:opacity-70 transition-all duration-300 cursor-pointer bg-transparent border-none ${
                  scrolled ? "text-safari-brown" : "text-white"
                }`}
              >
                {l.label}
              </button>
            )
          )}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => smoothScroll("#contact")}
            className="bg-safari-brown text-white px-5 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity cursor-pointer"
          >
            Plan My Trip
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-1.5 ml-auto mr-2 p-2 z-101 bg-transparent border-none cursor-pointer"
          aria-label="Open menu"
          onClick={toggleMenu}
          suppressHydrationWarning
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-7 h-0.75 rounded-sm transition-all duration-300 origin-center ${
                scrolled ? "bg-safari-brown" : "bg-white"
              } ${
                menuOpen
                  ? i === 0
                    ? "rotate-45 translate-y-2.25"
                    : i === 1
                    ? "opacity-0"
                    : "-rotate-45 -translate-y-2.25"
                  : ""
              }`}
              suppressHydrationWarning
            />
          ))}
        </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed top-22 left-0 w-full h-[calc(100vh-88px)] bg-safari-brown z-9999 flex flex-col pt-6 sm:pt-8 px-4 sm:px-8 transition-transform duration-300 overflow-y-auto ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
          {links.map((l) => (
            <div key={l.href} className="flex flex-col gap-2">
              <button
                onClick={() => handleNavClick(l.href)}
                className="text-white text-lg sm:text-xl font-semibold text-left bg-transparent border-none cursor-pointer py-2 hover:opacity-70 transition-opacity"
              >
                {l.label}
              </button>
              {l.children && (
                <div className="flex flex-col pl-4 gap-2">
                  {l.children.map((child) => (
                    <button
                      key={child.href}
                      onClick={() => handleNavClick(child.href)}
                      className="text-white/80 text-base text-left bg-transparent border-none cursor-pointer py-1 hover:text-white transition-opacity"
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="flex flex-col gap-3 sm:gap-4">
          <button
            onClick={() => handleNavClick("#contact")}
            className="bg-safari-brown text-white px-5 sm:px-6 py-3 rounded-full font-bold text-base cursor-pointer hover:opacity-90 transition-opacity w-full"
          >
            Plan My Trip
          </button>
          <button
            onClick={() => handleNavClick("#safaris")}
            className="bg-safari-black text-white px-5 sm:px-6 py-3 rounded-full font-bold text-base cursor-pointer hover:opacity-90 transition-opacity w-full"
          >
            Explore Safaris
          </button>
        </div>
      </div>
    </header>
  );
}

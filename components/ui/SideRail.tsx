"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/lib/data";

/* Left-edge stack: a vertical GET A QUOTE tab, with a round
   WhatsApp icon button centred directly below it. The WhatsApp
   label slides out horizontally to the right on hover. */
export default function SideRail() {
  return (
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-[-2px] top-1/2 -translate-y-1/2 z-[85] flex flex-col items-center gap-3 print:hidden"
    >
      <Link
        href="/contact"
        aria-label="Get a quote"
        className="group flex items-center justify-center gap-2 w-11 py-4 px-4 bg-safari-terracotta text-white font-bold tracking-[0.18em] uppercase text-xs rounded-l-xl shadow-lift hover:bg-safari-brown transition-colors duration-300 [writing-mode:vertical-rl] rotate-180"
      >
        <svg className="rotate-90 transition-transform group-hover:scale-110" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
        Get a Quote
      </Link>

      <a
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative ml-1 grid place-items-center w-11 h-11 rounded-full bg-[#25D366] text-white shadow-lift hover:scale-110 transition-transform duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <FaWhatsapp size={22} className="relative" />
        {/* Hover label, slides out to the right */}
        <span className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-safari-black text-sm font-semibold px-3 py-1.5 rounded-full shadow-lift opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Chat with us
        </span>
      </a>
    </motion.div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";
import { CONTACT, popularDestinations } from "@/lib/data";

const explore = [
  { href: "/about", label: "About Us" },
  { href: "/safaris", label: "Our Safaris" },
  { href: "/trekking", label: "Trekking" },
  { href: "/destinations", label: "Destinations" },
  { href: "/faq", label: "FAQ" },
];

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="grid place-items-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-safari-terracotta transition-colors"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-[1260px] mx-auto px-4 md:px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <Link href="/" aria-label="Go to top" className="flex items-center gap-3">
              <Image src="/images/furahayao-logo.png" alt="FurahaYao Safaris" width={64} height={64} unoptimized className="rounded-xl object-contain bg-white/90 p-1" />
              <span className="font-extrabold text-xl leading-tight">
                FurahaYao
                <span className="block text-[11px] font-semibold tracking-[0.3em] uppercase text-safari-gold">Safaris</span>
              </span>
            </Link>
            <p className="text-white/60 max-w-sm leading-relaxed">
              A licensed Tanzanian tour operator crafting tailor-made safaris,
              Kilimanjaro treks and Zanzibar escapes, guided by people who call
              this land home.
            </p>
            <div className="flex items-center gap-1 text-safari-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 .9-5 4.8 1.3 7-6.3-3.4L5.7 21l1.3-7-5-4.8 7-.9L12 2z" /></svg>
              ))}
              <span className="ml-2 text-white/60 text-sm">Loved by travellers worldwide</span>
            </div>
            <div className="flex gap-3">
              <Social href={CONTACT.instagram} label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a4.162 4.162 0 100 8.324 4.162 4.162 0 000-8.324zm0 6.864a2.702 2.702 0 110-5.404 2.702 2.702 0 010 5.404zm5.301-7.69a.973.973 0 100 1.946.973.973 0 000-1.946z" /></svg>
              </Social>
              <Social href={CONTACT.facebook} label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </Social>
              <Social href={`https://wa.me/${CONTACT.whatsapp}`} label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.115z" /></svg>
              </Social>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-safari-gold mb-4">Explore</h4>
            <ul className="flex flex-col gap-3">
              {explore.map((l) => (
                <li key={l.label}><Link href={l.href} className="text-white/70 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Popular destinations */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-safari-gold mb-4">Popular destinations</h4>
            <ul className="flex flex-col gap-3">
              {popularDestinations.map((l) => (
                <li key={l.label}><Link href={l.href} className="text-white/70 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-safari-gold mb-4">Need help?</h4>
            <ul className="flex flex-col gap-3 text-white/70">
              <li className="font-semibold text-white">Main Office</li>
              <li>{CONTACT.office}</li>
              <li><a href={`tel:${CONTACT.whatsapp}`} className="hover:text-white transition-colors">Tel: {CONTACT.phoneDisplay}</a></li>
              <li><a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp: {CONTACT.whatsappDisplay}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">{CONTACT.email}</a></li>
            </ul>
            <div className="mt-5">
              <p className="text-xs font-semibold tracking-wider uppercase text-white/40 mb-2">We accept payment with</p>
              <div className="flex items-center gap-2.5 text-4xl bg-white rounded-xl px-3 py-2 w-fit">
                <FaCcVisa aria-label="Visa" style={{ color: "#1A1F71" }} />
                <FaCcMastercard aria-label="Mastercard" style={{ color: "#EB001B" }} />
                <FaCcAmex aria-label="American Express" style={{ color: "#2E77BC" }} />
                <FaCcPaypal aria-label="PayPal" style={{ color: "#003087" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="rule-gold opacity-40 mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs sm:text-sm text-white/50">
          <span>&copy; {new Date().getFullYear()} FurahaYao Safaris. All rights reserved.</span>
          <span>
            Designed by{" "}
            <a href="https://blewagency.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-safari-gold transition-colors">Blew Agency</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

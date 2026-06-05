"use client";

import { CONTACT } from "@/lib/data";

export default function TopBar({ collapsed }: { collapsed: boolean }) {
  return (
    <div
      className={`bg-safari-charcoal text-white/85 overflow-hidden transition-all duration-300 ${
        collapsed ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
      }`}
    >
      <div className="max-w-[1260px] mx-auto px-4 md:px-6 h-9 flex items-center justify-between gap-4 text-xs">
        {/* Left: contact */}
        <div className="flex items-center gap-4 min-w-0">
          <a href={`tel:${CONTACT.whatsapp}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.24 1l-2.23 2.3z" /></svg>
            <span className="font-semibold">{CONTACT.phoneDisplay}</span>
          </a>
          <a href={`mailto:${CONTACT.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm0 2v.4l9 5.6 9-5.6V7H3z" /></svg>
            <span className="font-semibold truncate">{CONTACT.email}</span>
          </a>
        </div>

        {/* Right: socials + country */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.64.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.66-4.77 4.92-4.92C8.42 2.17 8.8 2.16 12 2.16zm0 5.84a4 4 0 100 8 4 4 0 000-8zm0 6.6a2.6 2.6 0 110-5.2 2.6 2.6 0 010 5.2zm5.3-7.7a.96.96 0 100 1.92.96.96 0 000-1.92z" /></svg>
            </a>
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6 4.39 10.97 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.04 24 18.07 24 12.07z" /></svg>
            </a>
            <span className="w-px h-3.5 bg-white/20" />
          </div>
          {/* Country (static — language is selected in the navbar) */}
          <span className="flex items-center gap-1.5 font-semibold notranslate" translate="no">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/stock/flags/tz.png" alt="Tanzania flag" width={22} height={16} className="rounded-[2px] object-cover" />
            Tanzania
          </span>
        </div>
      </div>
    </div>
  );
}

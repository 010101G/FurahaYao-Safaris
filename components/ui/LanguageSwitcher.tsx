"use client";

import { useEffect, useRef, useState } from "react";

/* Visible language dropdown. Drives the hidden <select.goog-te-combo>
   created by <GoogleTranslate /> (loaded once in the root layout).
   Safe to render multiple times (navbar, top bar, mobile menu). */

type Lang = { code: string; label: string; cc: string };

const LANGS: Lang[] = [
  { code: "en", label: "English", cc: "us" },
  { code: "nl", label: "Nederlands", cc: "nl" },
  { code: "fr", label: "Français", cc: "fr" },
  { code: "de", label: "Deutsch", cc: "de" },
  { code: "it", label: "Italiano", cc: "it" },
  { code: "pt", label: "Português", cc: "pt" },
  { code: "ru", label: "Русский", cc: "ru" },
  { code: "es", label: "Español", cc: "es" },
];

function Flag({ cc, label }: { cc: string; label: string }) {
  // flag images render reliably on Windows (emoji flags do not)
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/stock/flags/${cc}.png`}
      alt={`${label} flag`}
      width={22}
      height={16}
      className="rounded-[2px] object-cover shrink-0"
      loading="lazy"
    />
  );
}

function readCookieLang(): string {
  if (typeof document === "undefined") return "en";
  const m = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/);
  return m ? decodeURIComponent(m[1]) : "en";
}

/* Module-scope so cookie/DOM writes happen outside React render.
   Most reliable Google Translate mechanism: set the `googtrans`
   cookie and reload — the widget reads it on load and translates
   the whole page (no dependency on the hidden <select>). */
function setCookie(name: string, value: string, host: string) {
  document.cookie = `${name}=${value};path=/`;
  // also set on the registrable domain for prod subdomains (ignored on localhost)
  if (host && host.indexOf(".") !== -1) {
    document.cookie = `${name}=${value};path=/;domain=.${host}`;
  }
}

function applyTranslation(code: string) {
  const host = window.location.hostname;
  if (code === "en") {
    const expired = `;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    document.cookie = `googtrans=${expired};path=/`;
    document.cookie = `googtrans=${expired};path=/;domain=.${host}`;
  } else {
    setCookie("googtrans", `/en/${code}`, host);
  }
  window.location.reload();
}

export default function LanguageSwitcher({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sync = () => setCurrent(readCookieLang());
    sync();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const choose = (code: string) => {
    setOpen(false);
    setCurrent(code);
    applyTranslation(code);
  };

  const active = LANGS.find((l) => l.code === current) ?? LANGS[0];
  const isDark = tone === "dark";

  return (
    <div ref={ref} className={`relative notranslate ${className}`} translate="no">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Select language"
        aria-expanded={open}
        className={`flex items-center gap-1.5 text-sm font-semibold px-2.5 py-1.5 rounded-full border transition-colors cursor-pointer ${
          isDark
            ? "text-safari-black border-safari-black/15 hover:bg-safari-black/5"
            : "text-white border-white/25 hover:bg-white/10"
        }`}
      >
        <Flag cc={active.cc} label={active.label} />
        <span className="uppercase tracking-wide">{active.code}</span>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={`transition-transform ${open ? "rotate-180" : ""}`}><path d="M6 9l6 6 6-6" /></svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 rounded-2xl bg-white shadow-lift border border-safari-black/5 overflow-hidden z-[130]">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => choose(l.code)}
              className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm text-left transition-colors ${
                l.code === current ? "bg-safari-cream text-safari-terracotta font-bold" : "text-safari-black hover:bg-safari-cream"
              }`}
            >
              <Flag cc={l.cc} label={l.label} />
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect } from "react";

/* Loads the Google Website Translator once for the whole app and
   provides the hidden mount point. Rendered a single time in the
   root layout; the visible LanguageSwitcher dropdowns just drive
   the hidden <select.goog-te-combo> it creates. */

const INCLUDED = "en,nl,fr,de,it,pt,ru,es";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: { translate?: { TranslateElement?: new (opts: object, el: string) => void } };
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      const T = window.google?.translate?.TranslateElement;
      if (T) {
        new T(
          { pageLanguage: "en", includedLanguages: INCLUDED, autoDisplay: false },
          "google_translate_element"
        );
      }
    };

    const s = document.createElement("script");
    s.id = "google-translate-script";
    s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return <div id="google_translate_element" aria-hidden className="fixed -left-[9999px] top-0" />;
}

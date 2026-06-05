"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { FAQ } from "@/lib/data";

function Item({ faq, open, onToggle }: { faq: FAQ; open: boolean; onToggle: () => void }) {
  return (
    <div className="border border-safari-black/8 rounded-2xl bg-white overflow-hidden transition-colors hover:border-safari-terracotta/30">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5 cursor-pointer"
      >
        <span className="font-bold text-safari-black text-[15px] sm:text-base">{faq.q}</span>
        <span className={`shrink-0 grid place-items-center w-8 h-8 rounded-full transition-colors ${open ? "bg-safari-terracotta text-white" : "bg-safari-cream text-safari-terracotta"}`}>
          <motion.svg animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></motion.svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-5 sm:px-6 pb-6 text-safari-black/65 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-3 max-w-3xl mx-auto">
      {items.map((faq, i) => (
        <Item key={faq.q} faq={faq} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
      ))}
    </div>
  );
}

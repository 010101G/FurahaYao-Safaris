"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal, { ModalClose } from "@/components/ui/Modal";
import CTAButton from "@/components/ui/CTAButton";
import { staggerContainer, staggerItem } from "@/components/ui/Reveal";
import type { Safari } from "@/lib/data";

function CategoryBadge({ category }: { category: Safari["category"] }) {
  const cls = category === "Luxury"
    ? "bg-safari-gold/90 text-safari-black"
    : "bg-safari-olive/90 text-white";
  return <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${cls}`}>{category}</span>;
}

export default function SafarisExplorer({ items, cols = 3 }: { items: Safari[]; cols?: 3 | 4 }) {
  const [active, setActive] = useState<Safari | null>(null);
  const gridCols = cols === 4 ? "lg:grid-cols-3 xl:grid-cols-4" : "xl:grid-cols-3";

  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-6`}
      >
        {items.map((s) => (
          <motion.article
            key={s.id}
            variants={staggerItem}
            className="group flex flex-col rounded-3xl overflow-hidden bg-white shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300"
          >
            <button
              type="button"
              onClick={() => setActive(s)}
              className="relative block w-full aspect-[16/11] text-left cursor-pointer overflow-hidden"
              aria-label={`View details for ${s.title}`}
            >
              <Image src={s.image} alt={s.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-safari-black/75 via-safari-black/10 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <CategoryBadge category={s.category} />
                <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-safari-black">{s.days}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-xl font-extrabold leading-tight">{s.title}</h3>
              </div>
            </button>
            <div className="p-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-safari-black/40">From / person</p>
                <p className="text-xl font-extrabold text-safari-terracotta">{s.priceFrom}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(s)}
                className="inline-flex items-center gap-1.5 rounded-full bg-safari-cream px-4 py-2.5 text-sm font-bold text-safari-black hover:bg-safari-terracotta hover:text-white transition-colors cursor-pointer"
              >
                View details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <Modal open={!!active} onClose={() => setActive(null)} labelledBy="safari-modal-title">
        {active && (
          <div>
            <div className="relative h-60 sm:h-72">
              <Image src={active.image} alt={active.title} fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-safari-black/85 to-transparent" />
              <ModalClose onClose={() => setActive(null)} />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex gap-2 mb-2"><CategoryBadge category={active.category} /></div>
                <h3 id="safari-modal-title" className="text-white text-2xl font-extrabold leading-tight">{active.title}</h3>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="rounded-full bg-safari-cream px-4 py-1.5 text-sm font-semibold text-safari-brown">⏱ {active.days}</span>
                <span className="rounded-full bg-safari-terracotta/10 px-4 py-1.5 text-sm font-bold text-safari-terracotta">From {active.priceFrom} per person</span>
              </div>
              <p className="text-safari-black/70 leading-relaxed">{active.description}</p>
              <h4 className="mt-6 mb-3 font-bold text-safari-black">Parks &amp; highlights</h4>
              <div className="flex flex-wrap gap-2">
                {active.parks.map((p) => (
                  <span key={p} className="rounded-full bg-safari-cream px-3 py-1.5 text-sm font-semibold text-safari-black/80">{p}</span>
                ))}
              </div>
              <div className="mt-7">
                <CTAButton href="/contact" variant="primary">Enquire about this safari</CTAButton>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

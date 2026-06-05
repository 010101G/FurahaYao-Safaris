"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal, { ModalClose } from "@/components/ui/Modal";
import CTAButton from "@/components/ui/CTAButton";
import { staggerContainer, staggerItem } from "@/components/ui/Reveal";
import { trekkingImage, type TrekkingOffer } from "@/lib/data";

const diffColor: Record<TrekkingOffer["difficulty"], string> = {
  Moderate: "bg-safari-olive/15 text-safari-olive",
  Challenging: "bg-safari-gold/20 text-safari-brown",
  Tough: "bg-safari-terracotta/15 text-safari-terracotta",
};

export default function TrekkingExplorer({ items }: { items: TrekkingOffer[] }) {
  const [active, setActive] = useState<TrekkingOffer | null>(null);

  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
      >
        {items.map((o) => (
          <motion.article
            key={o.id}
            variants={staggerItem}
            className="group flex flex-col rounded-3xl overflow-hidden border border-safari-black/8 bg-white shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src={trekkingImage(o.id)} alt={o.title} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-safari-black/60 to-transparent" />
              <span className={`absolute top-3 right-3 rounded-full px-2.5 py-1 text-[11px] font-bold ${diffColor[o.difficulty]}`}>{o.difficulty}</span>
              <span className="absolute bottom-3 left-3 text-[11px] font-bold tracking-[0.18em] uppercase text-safari-gold">{o.duration}</span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-extrabold text-safari-black leading-tight">{o.title}</h3>
              <p className="mt-2 text-sm text-safari-black/55 leading-relaxed flex-1">{o.subtitle}</p>
              <div className="mt-5 flex items-center justify-between">
                {o.price ? (
                  <span className="text-safari-black font-extrabold">From {o.price}</span>
                ) : (
                  <span className="text-safari-black/50 text-sm font-semibold">On request</span>
                )}
                <button
                  type="button"
                  onClick={() => setActive(o)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-safari-terracotta hover:gap-2.5 transition-all cursor-pointer"
                >
                  Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <Modal open={!!active} onClose={() => setActive(null)} labelledBy="trek-modal-title">
        {active && (
          <div>
            <div className="relative h-56 sm:h-64">
              <Image src={trekkingImage(active.id)} alt={active.title} fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-safari-black/85 to-transparent" />
              <ModalClose onClose={() => setActive(null)} />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-safari-gold text-xs font-bold tracking-[0.18em] uppercase">{active.duration}</span>
                <h3 id="trek-modal-title" className="text-white text-2xl font-extrabold leading-tight">{active.title}</h3>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${diffColor[active.difficulty]}`}>{active.difficulty}</span>
                {active.price && <span className="rounded-full bg-safari-cream px-3 py-1 text-xs font-bold text-safari-brown">From {active.price}</span>}
              </div>
              <p className="mt-4 text-safari-black/70 leading-relaxed">{active.description}</p>
              <h4 className="mt-6 mb-3 font-bold text-safari-black">Route highlights</h4>
              <ul className="space-y-2">
                {active.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-safari-black/80">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-safari-terracotta shrink-0" />{h}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <CTAButton href="/contact" variant="primary">Book this trek</CTAButton>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

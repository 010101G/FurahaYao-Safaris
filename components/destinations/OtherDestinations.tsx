"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal, { ModalClose } from "@/components/ui/Modal";
import CTAButton from "@/components/ui/CTAButton";
import { staggerContainer, staggerItem } from "@/components/ui/Reveal";
import { destinationImage, type LocationHighlight } from "@/lib/data";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-safari-cream px-3 py-1 text-xs font-semibold text-safari-brown">{children}</span>
  );
}

export default function OtherDestinations({ items }: { items: LocationHighlight[] }) {
  const [active, setActive] = useState<LocationHighlight | null>(null);

  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        {items.map((l) => (
          <motion.button
            key={l.id}
            variants={staggerItem}
            type="button"
            onClick={() => setActive(l)}
            className="group text-left rounded-3xl overflow-hidden bg-white border border-safari-black/8 shadow-soft hover:shadow-lift hover:border-safari-terracotta/30 hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={destinationImage(l.id)}
                alt={l.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-safari-black/55 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-semibold tracking-wide">{l.location}</span>
              <span className="absolute top-3 right-3 grid place-items-center w-8 h-8 rounded-full bg-white/90 text-safari-terracotta opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7M9 7h8v8" /></svg>
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-extrabold text-safari-black leading-tight">{l.title}</h3>
              <p className="mt-2 text-sm text-safari-black/55 leading-relaxed line-clamp-2 flex-1">{l.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {l.animals.slice(0, 3).map((a) => <Tag key={a}>{a}</Tag>)}
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <Modal open={!!active} onClose={() => setActive(null)} labelledBy="dest-modal-title">
        {active && (
          <div>
            <div className="relative h-56 sm:h-64">
              <Image src={destinationImage(active.id)} alt={active.title} fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-safari-black/85 to-transparent" />
              <ModalClose onClose={() => setActive(null)} />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-safari-gold text-xs font-bold tracking-[0.18em] uppercase">{active.location}</span>
                <h3 id="dest-modal-title" className="text-white text-2xl font-extrabold leading-tight">{active.title}</h3>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              {active.park && <p className="text-sm font-semibold text-safari-black/50">{active.park}</p>}
              <p className="mt-3 text-safari-black/70 leading-relaxed">{active.description}</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-safari-black mb-2">Things to do</h4>
                  <ul className="space-y-1.5">
                    {active.activities.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-safari-black/75">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-safari-olive shrink-0" />{a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-safari-black mb-2">Wildlife</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {active.animals.length ? active.animals.map((a) => <Tag key={a}>{a}</Tag>) : <Tag>Varies by season</Tag>}
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <CTAButton href="/contact" variant="primary">Add this to my itinerary</CTAButton>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

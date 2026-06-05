"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-safari-gold">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 .9-5 4.8 1.3 7-6.3-3.4L5.7 21l1.3-7-5-4.8 7-.9L12 2z" /></svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-dune py-20 md:py-28">
      <div className="max-w-[1260px] mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Guest stories"
          title="Loved by travellers from around the world"
          subtitle="Real words from guests who explored Tanzania with us."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              className="relative rounded-3xl bg-white p-7 shadow-soft flex flex-col"
            >
              <span className="absolute -top-4 left-7 text-6xl leading-none text-safari-terracotta/20 font-serif select-none">&ldquo;</span>
              <Stars n={t.rating} />
              <blockquote className="mt-4 text-safari-black/80 leading-relaxed flex-1">{t.quote}</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-safari-black/8">
                <p className="font-bold text-safari-black">{t.name}</p>
                <p className="text-sm text-safari-terracotta font-semibold">{t.trip}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

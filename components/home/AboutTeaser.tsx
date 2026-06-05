"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";

const points = [
  "Born-and-raised expert guides",
  "100% tailor-made itineraries",
  "Transparent, all-inclusive pricing",
  "Guaranteed departures",
];

export default function AboutTeaser() {
  return (
    <section className="bg-dune py-20 md:py-28">
      <div className="max-w-[1260px] mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Media */}
        <Reveal direction="right" className="relative">
          <div className="relative aspect-[4/5] sm:aspect-[5/4] rounded-[2rem] overflow-hidden shadow-lift">
            <Image
              src="/images/On_the_Car_zinteo.jpg"
              alt="On safari with FurahaYao"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="absolute -bottom-6 -left-4 sm:left-6 bg-white rounded-2xl shadow-lift px-5 py-4 flex items-center gap-4"
          >
            <span className="text-4xl">🦁</span>
            <div>
              <p className="text-2xl font-extrabold text-safari-black leading-none">2+ years</p>
              <p className="text-xs text-safari-black/50 font-semibold">guiding the wild</p>
            </div>
          </motion.div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] uppercase text-safari-terracotta">
              <span className="w-6 h-px bg-current opacity-60" />
              Who we are
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-safari-black leading-[1.1] text-balance">
              A trusted Tanzanian operator, crafting journeys that feel personal
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-safari-black/65 leading-relaxed text-lg">
              FurahaYao Safaris is a licensed Tanzania safari and tour operator
              delivering safe, seamless and unforgettable adventures, from the
              plains of the Serengeti to the summit of Kilimanjaro and the shores
              of Zanzibar.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-7 grid sm:grid-cols-2 gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-safari-black/80 font-medium">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-safari-olive/15 text-safari-olive shrink-0">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l4 4L19 7" /></svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-4">
              <CTAButton href="/about" variant="primary">Our story</CTAButton>
              <CTAButton href="/contact" variant="ghost" arrow={false}>Plan my trip</CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

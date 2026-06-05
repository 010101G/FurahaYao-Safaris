"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";
import { HERO_POSTER } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('${HERO_POSTER}')` }} />
      <div className="absolute inset-0 bg-safari-black/70" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.08] text-balance"
        >
          Ready to write your own Tanzania story?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-white/80 text-lg leading-relaxed"
        >
          Tell us your dream trip and we&apos;ll craft a tailor-made itinerary, 
          no obligation, no generic packages. Just your perfect safari.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-9 flex flex-wrap gap-4 justify-center"
        >
          <CTAButton href="/contact" variant="primary" size="lg">Start planning</CTAButton>
          <CTAButton href="/destinations" variant="light" size="lg" arrow={false}>Browse destinations</CTAButton>
        </motion.div>
      </div>
    </section>
  );
}

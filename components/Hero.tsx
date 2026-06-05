"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";
import { HERO_POSTER } from "@/lib/data";

const phrases = ["the Serengeti's endless plains", "the roof of Africa", "Zanzibar's turquoise shores", "the Great Migration"];

function useTypewriter() {
  const [idx, setIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [char, setChar] = useState(0);

  const phrase = phrases[idx];
  const text = phrase.slice(0, char);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (typing) {
      if (char < phrase.length) {
        t = setTimeout(() => setChar((c) => c + 1), 55);
      } else {
        t = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (char > 0) {
        t = setTimeout(() => setChar((c) => c - 1), 28);
      } else {
        t = setTimeout(() => {
          setIdx((p) => (p + 1) % phrases.length);
          setTyping(true);
        }, 350);
      }
    }
    return () => clearTimeout(t);
  }, [char, typing, phrase.length]);

  return text;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const word = useTypewriter();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Parallax media */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${HERO_POSTER}')` }} />
        <video
          className="hero-fadein-video absolute inset-0 w-full h-full object-cover"
          src="/videos/IMG_1813_b0atce.mov"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-safari-black/60 via-safari-black/35 to-safari-black/80" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-[1260px] mx-auto w-full px-4 md:px-6 pt-28 pb-20">
        <div className="max-w-3xl hero-content-animate">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-white">
            <span className="w-2 h-2 rounded-full bg-safari-gold animate-pulse" />
            Tailor-made Tanzania safaris
          </span>

          <h1 className="mt-6 text-white text-[clamp(1.9rem,5vw,3.75rem)] font-extrabold leading-[1.06] text-balance">
            <span className="whitespace-nowrap">Your adventure into</span>
            <br />
            <span className="text-safari-gold">wild Tanzania</span>
          </h1>

          <p className="mt-5 text-white/85 text-[clamp(1.05rem,2.2vw,1.4rem)] font-medium min-h-[1.8em]">
            Witness <span className="text-safari-gold typewriter-text">{word}</span>
          </p>

          <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
            Expert local guides, ethical wildlife encounters and itineraries
            designed entirely around you, from the savannah to the summit to the sea.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <CTAButton href="/contact" variant="primary" size="lg">Plan My Trip</CTAButton>
            <CTAButton href="/safaris" variant="light" size="lg" arrow={false}>Explore Safaris</CTAButton>
          </div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
        <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="relative w-6 h-10 rounded-full border-2 border-white/30 grid justify-center pt-2">
          <span className="w-1 h-1 rounded-full bg-white" style={{ animation: "scroll-hint 1.8s ease-in-out infinite" }} />
        </span>
      </div>
    </section>
  );
}

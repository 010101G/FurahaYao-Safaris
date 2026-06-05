"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Media } from "@/lib/data";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  media,
  poster,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  media?: Media;
  poster?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        {media?.type === "video" ? (
          <video
            src={media.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={poster}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url('${media?.src ?? poster}')` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-safari-black/90 via-safari-black/45 to-safari-black/55" />
      </div>

      <div className="relative z-10 max-w-[1260px] mx-auto w-full px-4 md:px-6 pt-32 pb-14">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] uppercase text-safari-gold"
        >
          <span className="w-6 h-px bg-safari-gold/70" />
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-white text-[clamp(2.2rem,6vw,4.2rem)] font-extrabold leading-[1.04] text-balance max-w-4xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-5 text-white/80 text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed max-w-2xl text-pretty"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

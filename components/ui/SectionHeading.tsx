"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      className={`flex flex-col gap-4 max-w-2xl ${alignCls}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] uppercase ${
            isLight ? "text-safari-gold" : "text-safari-terracotta"
          }`}
        >
          <span className="w-6 h-px bg-current opacity-60" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.08] text-balance ${
          isLight ? "text-white" : "text-safari-black"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-[clamp(1rem,1.5vw,1.15rem)] leading-relaxed text-pretty ${
            isLight ? "text-white/70" : "text-safari-black/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

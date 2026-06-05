"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/ui/Reveal";
import type { Destination } from "@/lib/data";

function DestinationCard({ d, featured }: { d: Destination; featured?: boolean }) {
  const isArray = Array.isArray(d.media.src);
  const slides = isArray ? (d.media.src as string[]) : [d.media.src as string];
  const [i, setI] = useState(0);

  useEffect(() => {
    if (d.media.type !== "image" || slides.length < 2) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [d.media.type, slides.length]);

  return (
    <motion.article
      variants={staggerItem}
      className={`group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-lift transition-shadow duration-300 ${
        featured ? "md:col-span-2 md:row-span-2 min-h-[320px] md:min-h-[520px]" : "min-h-[300px] md:min-h-[250px]"
      }`}
    >
      {d.media.type === "video" ? (
        <video
          src={slides[0]}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
        />
      ) : (
        slides.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt={d.name}
            fill
            sizes={featured ? "(max-width:768px) 100vw, 66vw" : "(max-width:768px) 100vw, 33vw"}
            className="object-cover transition-all duration-[1.4s] ease-out group-hover:scale-110"
            style={{ opacity: idx === i ? 1 : 0 }}
          />
        ))
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-safari-black/85 via-safari-black/15 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
        <span className="text-safari-gold text-xs font-bold tracking-[0.2em] uppercase">{d.highlight}</span>
        <h3 className={`mt-1 text-white font-extrabold leading-tight ${featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>
          {d.name}
        </h3>
        <p className="mt-2 text-white/75 text-sm leading-relaxed max-w-md max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          {d.blurb}
        </p>
      </div>
    </motion.article>
  );
}

export default function TopDestinations({ items, featureFirst = false }: { items: Destination[]; featureFirst?: boolean }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-5"
    >
      {items.map((d, idx) => (
        <DestinationCard key={d.name} d={d} featured={featureFirst && idx === 0} />
      ))}
    </motion.div>
  );
}

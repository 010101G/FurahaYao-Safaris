"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Gallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, prev, next]);

  if (!images.length) return null;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1260px] mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the wild"
          subtitle="Real scenes from our safaris and treks across Tanzania. Tap any photo to view it full size."
        />

        {/* Masonry-style columns */}
        <div className="mt-14 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {images.map((src, i) => (
            <motion.button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl shadow-soft cursor-pointer break-inside-avoid"
              aria-label="View photo full size"
            >
              <Image
                src={src}
                alt={`FurahaYao safari gallery photo ${i + 1}`}
                width={600}
                height={800}
                sizes="(max-width:768px) 50vw, 25vw"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-safari-black/0 group-hover:bg-safari-black/25 transition-colors duration-300 grid place-items-center">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-white/90 text-safari-black opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3M11 8v6M8 11h6" /></svg>
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && index !== null && (
          <motion.div
            className="fixed inset-0 z-[200] grid place-items-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-safari-black/90 backdrop-blur-sm" onClick={close} aria-hidden />

            <button onClick={close} aria-label="Close" className="absolute top-5 right-5 z-10 grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>

            <button onClick={prev} aria-label="Previous" className="absolute left-3 sm:left-6 z-10 grid place-items-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 text-white hover:bg-safari-terracotta transition-colors cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button onClick={next} aria-label="Next" className="absolute right-3 sm:right-6 z-10 grid place-items-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 text-white hover:bg-safari-terracotta transition-colors cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>

            <motion.div
              key={images[index]}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative z-[5] w-full max-w-5xl h-[78vh]"
            >
              <Image src={images[index]} alt={`Gallery photo ${index + 1}`} fill sizes="100vw" className="object-contain" priority />
            </motion.div>

            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-white/70 text-sm font-semibold">
              {index + 1} / {images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

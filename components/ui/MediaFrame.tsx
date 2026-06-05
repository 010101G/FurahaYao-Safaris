"use client";

import Image from "next/image";
import type { Media } from "@/lib/data";

/* Renders a single image or autoplaying muted video that gently
   zooms on hover (parent must add the `group` class). */
export default function MediaFrame({
  media,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
}: {
  media: Media;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {media.type === "video" ? (
        <video
          src={media.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
      ) : (
        <Image
          src={media.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
      )}
    </div>
  );
}

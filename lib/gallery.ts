import fs from "node:fs";
import path from "node:path";

/* Reads /public/gallery at build/request time so the client never
   needs a hardcoded list, drop images in the folder and they appear.
   Server-only (uses fs); call from a Server Component and pass down. */
export function getGalleryImages(): string[] {
  const dir = path.join(process.cwd(), "public", "gallery");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return files
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
    .filter((f) => !/\(\d+\)/.test(f)) // skip "name (1).jpeg" duplicates
    .sort()
    .map((f) => `/gallery/${encodeURIComponent(f)}`);
}

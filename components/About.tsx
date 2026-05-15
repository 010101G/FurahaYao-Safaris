"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVideo((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-12 pb-3 bg-white" aria-label="About FurahaYao Safaris">
      <div className="max-w-325 mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-safari-black">
            About FurahaYao Safaris
          </h2>
          <p className="text-[clamp(1rem,2vw,1.2rem)] text-safari-black leading-relaxed">
            We are a trusted Tanzania safari tour operator committed to delivering safe,
            seamless, and unforgettable safari experiences.
          </p>

          <div>
            <h3 className="font-bold text-safari-brown text-lg block mb-2">
              Why choose us?
            </h3>
            <ul className="list-disc ml-5 text-safari-brown font-medium space-y-2">
              <li>Expert local safari guides with deep wildlife knowledge</li>
              <li>Customized Tanzania safari itineraries</li>
              <li>Competitive pricing with no hidden costs</li>
              <li>Guaranteed departures – no cancellations</li>
              <li>24/7 support from planning to travel</li>
            </ul>
          </div>

          <div className="flex gap-4 mt-2">
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-safari-brown text-white px-7 py-3 rounded-full font-bold text-base hover:opacity-90 transition-opacity cursor-pointer"
            >
              Plan My Trip
            </button>
            <a
              href="/about"
              className="bg-white text-safari-brown border border-safari-brown px-7 py-3 rounded-full font-bold text-base hover:bg-safari-brown hover:text-white transition-all cursor-pointer"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right: media */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
            <Image
              src="/images/On the Car.HEIC"
              alt="On the Car"
              fill
              sizes="100vw"
              className={`object-cover transition-opacity duration-1200 ${
                showVideo ? "opacity-0" : "opacity-100"
              }`}
            />
            <video
              src="/videos/IMG_1813_b0atce.mov"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1200 ${
                showVideo ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

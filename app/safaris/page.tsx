"use client";

import Image from "next/image";

type SafariCard = {
  title: string;
  description: string;
  media: { type: "video" | "image"; src: string };
};

const safaris: SafariCard[] = [
  {
    title: "Wildlife Safaris",
    description: "Experience Tanzania's iconic parks and see the Big Five up close.",
    media: {
      type: "video",
      src: "/videos/Wildlife Safaris.mov",
    },
  },
  {
    title: "Cultural Tours",
    description: "Connect with local communities and traditions for a deeper journey.",
    media: {
      type: "video",
      src: "/videos/Cultural Tours.mov",
    },
  },
  {
    title: "Zanzibar Getaways",
    description: "Relax on pristine beaches and explore the spice island's culture.",
    media: {
      type: "image",
      src: "/images/zenj.webp",
    },
  },
  {
    title: "Custom/Private Safaris",
    description: "Design your own adventure with private guides and flexible itineraries.",
    media: {
      type: "video",
      src: "/videos/Custom:Private Safaris.mov",
    },
  },
];

function EnquireButton() {
  return (
    <a
      href="/contact"
      className="bg-safari-brown text-safari-black px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity inline-block text-center"
    >
      Enquire Now
    </a>
  );
}

export default function SafarisPage() {
  return (
    <main className="min-h-screen bg-safari-brown pt-22">
      <div className="max-w-325 mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Our Safaris & Services</h1>
        <p className="text-xl text-white text-center mb-12 leading-relaxed">
          Discover the best ways to explore Tanzania, tailored to your interests.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8" role="list">
          {safaris.map((s) => (
            <div
              key={s.title}
              className="bg-safari-white rounded-2xl shadow-sm p-6 flex flex-col items-center gap-4"
            >
              {s.media.type === "video" ? (
                <video
                  src={s.media.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full aspect-4/3 object-cover rounded-xl"
                />
              ) : (
                <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
                  <Image
                    src={s.media.src}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="text-safari-brown font-bold text-lg text-center m-0">
                {s.title}
              </h3>
              <p className="text-safari-black text-center text-sm leading-relaxed">
                {s.description}
              </p>
              <EnquireButton />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block bg-white text-safari-brown px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Plan Your Safari
          </a>
        </div>
      </div>
    </main>
  );
}
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Destination = {
  name: string;
  highlight: string;
  media: { type: "video" | "image"; src: string | string[] };
};

type LocationHighlight = {
  id: string;
  title: string;
  location: string;
  park?: string;
  description: string;
  activities: string[];
  animals: string[];
};

const destinations: Destination[] = [
  {
    name: "Serengeti",
    highlight: "Great Migration",
    media: {
      type: "video",
      src: "/videos/Serengeti.mov",
    },
  },
  {
    name: "Ngorongoro",
    highlight: "Crater views",
    media: {
      type: "image",
      src: [
        "/images/Ngorongoro.png",
        "/images/Ngorongoro Crater views.jpg",
        "/images/Ngorongoro Crater views.jpeg",
      ],
    },
  },
  {
    name: "Tarangire",
    highlight: "Elephant herds",
    media: {
      type: "video",
      src: "/videos/Tarangire Elephants.mov",
    },
  },
  {
    name: "Zanzibar",
    highlight: "Beach paradise",
    media: {
      type: "image",
      src: [
        "/images/zenj.webp",
        "/images/Discover-Zanzibar-banner_.jpg",
        "/images/Zanzibar Getaways.jpg",
      ],
    },
  },
];

const highlights: LocationHighlight[] = [
  {
    id: "amboni-caves",
    title: "Amboni Caves",
    location: "Pangani Town",
    description:
      "Amboni Caves are one of East Africa's largest limestone cave systems, offering dramatic passages and fascinating rock formations near the coast.",
    activities: ["Cave exploration", "Guided geology tours"],
    animals: ["Bats", "Birds"],
  },
  {
    id: "walking-safari-arusha",
    title: "Walking Safari Arusha Park",
    location: "Arusha, Tanzania",
    park: "Arusha National Park",
    description:
      "Explore Arusha National Park on foot for a close encounter with wildlife and scenic landscapes ranging from lakes to forested trails.",
    activities: ["Walking safari", "Bird watching"],
    animals: ["Buffalo", "Giraffe", "Zebra"],
  },
  {
    id: "gombe-national-park",
    title: "Gombe National Park",
    location: "Kigoma, Tanzania",
    park: "Gombe Stream National Park",
    description:
      "Famous for chimpanzee tracking and lush forests on the shores of Lake Tanganyika, Gombe is a wildlife and primate research paradise.",
    activities: ["Chimpanzee trekking", "Nature walks"],
    animals: ["Chimpanzee", "Bushbuck", "Sitatunga"],
  },
  {
    id: "katavi-national-park",
    title: "Katavi National Park",
    location: "Katavi Region",
    park: "Katavi National Park",
    description:
      "Katavi is one of Tanzania's most remote parks, known for its large herds of hippos, buffalo, and dramatic seasonal floodplains.",
    activities: ["Game drives", "Photography safaris"],
    animals: ["Hippo", "Elephant", "Lion"],
  },
  {
    id: "kilimanjaro-trek",
    title: "Kilimanjaro Trek",
    location: "Moshi, Tanzania",
    park: "Kilimanjaro National Park",
    description:
      "Climb Africa's highest peak through lush montane forest and alpine desert, finishing at the iconic snow-capped summit.",
    activities: ["Mountain trekking", "Summit attempts"],
    animals: ["Blue monkey", "Colobus monkey"],
  },
  {
    id: "kondoa-irangi",
    title: "Kondoa Irangi",
    location: "Dodoma, Tanzania",
    park: "Kondoa Irangi",
    description:
      "Kondoa Irangi is known for its ancient rock paintings and scenic landscapes, perfect for cultural discovery and wilderness exploration.",
    activities: ["Rock art tours", "Guided hikes"],
    animals: ["Antelope", "Birdlife"],
  },
  {
    id: "manyara-lodge",
    title: "Manyara Lodge",
    location: "Manyara, Tanzania",
    park: "Lake Manyara National Park",
    description:
      "Stay near the shores of Lake Manyara, where forest, flamingos, and tree-climbing lions create an unforgettable safari experience.",
    activities: ["Game drives", "Bird watching"],
    animals: ["Flamingo", "Buffalo", "Lion"],
  },
  {
    id: "mahale-mountain",
    title: "Mahale Mountains National Park",
    location: "Mahale Mountains, Tanzania",
    park: "Mahale National Park",
    description:
      "Mahale Mountains offers remote forested slopes, chimpanzee tracking, and pristine beaches along Lake Tanganyika.",
    activities: ["Chimpanzee trekking", "Lake activities"],
    animals: ["Chimpanzee", "Colobus monkey", "Birds"],
  },
  {
    id: "meserani-snake-park",
    title: "Meserani Snake Park",
    location: "Arusha, Tanzania",
    park: "Snake Park Arusha",
    description:
      "Meserani Snake Park is a unique attraction showcasing a variety of reptiles and offering educational snake handling experiences.",
    activities: ["Reptile encounters", "Cultural tours"],
    animals: ["Snakes", "Crocodiles"],
  },
  {
    id: "mikumi-national-park",
    title: "Mikumi National Park",
    location: "Morogoro, Tanzania",
    park: "Mikumi National Park",
    description:
      "Mikumi is a classic savannah park with easy access from Dar es Salaam and excellent opportunities to see lions, elephants, and giraffes.",
    activities: ["Game drives", "Nature walks"],
    animals: ["Lion", "Elephant", "Giraffe"],
  },
  {
    id: "mkomazi-national-park",
    title: "Mkomazi National Park",
    location: "Tanzania",
    park: "Mkomazi National Park",
    description:
      "Mkomazi is a dryland park known for its rare species and community-based conservation programs.",
    activities: ["Conservation safaris", "Game drives"],
    animals: ["Wild dog", "Elephant", "Giraffe"],
  },
  {
    id: "ngorongoro-conservation-area",
    title: "Ngorongoro Conservation Area",
    location: "Ngorongoro, Tanzania",
    park: "Ngorongoro Conservation Area Authority",
    description:
      "Home to the world-famous Ngorongoro Crater, this area blends spectacular scenery with exceptional wildlife viewing.",
    activities: ["Crater tours", "Game drives"],
    animals: ["Lion", "Elephant", "Leopard", "Heron", "Ostrich", "Guineafowl"],
  },
  {
    id: "ruaha-national-park",
    title: "Ruaha National Park",
    location: "Iringa, Tanzania",
    park: "Ruaha National Park",
    description:
      "Ruaha is Tanzania's largest park, famous for wild landscapes and healthy populations of large predators and elelphants.",
    activities: ["Game drives", "Walking safaris"],
    animals: ["Lion", "Elephant", "Leopard"],
  },
  {
    id: "saadani-national-park",
    title: "Saadani National Park",
    location: "Pangani Region, Tanzania",
    park: "Saadani National Park",
    description:
      "Saadani is Tanzania's only wildlife park bordering the ocean, combining beach relaxation with wildlife watching.",
    activities: ["Beach safaris", "Game drives"],
    animals: ["Elephant", "Buffalo", "Wild dog"],
  },
  {
    id: "saanane-national-park",
    title: "Saanane National Park",
    location: "Mwanza, Tanzania",
    park: "Saanane National Park",
    description:
      "Saanane is an island park on Lake Victoria, ideal for short wildlife trips close to Mwanza city.",
    activities: ["Nature walks", "Bird watching"],
    animals: ["Monkey", "Antelope", "Birds"],
  },
  {
    id: "selous-game-reserve",
    title: "Selous Game Reserve",
    location: "Morogoro, Tanzania",
    park: "Selous Game Reserve",
    description:
      "Serengeti's southern neighbor, Selous offers river safaris, remote wilderness and abundant wildlife away from crowds.",
    activities: ["Boat safaris", "Walking safaris"],
    animals: ["Hippo", "Crocodile", "Lion"],
  },
  {
    id: "serengeti-national-park",
    title: "Serengeti National Park",
    location: "Tanzania",
    park: "Serengeti National Park",
    description:
      "The Serengeti is famed for its great migration and offers some of Africa's best big-cat and plains game viewing.",
    activities: ["Game drives", "Hot air balloon safaris"],
    animals: ["Lion", "Elephant", "Leopard"],
  },
  {
    id: "tarangire-national-park",
    title: "Tarangire National Park",
    location: "Tanzania",
    park: "Tarangire National Park",
    description:
      "Tarangire features large elephant herds, ancient baobabs and excellent predator sightings in a beautiful riverine terrain.",
    activities: ["Game drives", "Night safaris"],
    animals: ["Elephant", "Leopard", "Buffalo"],
  },
  {
    id: "udzungwa-mountains-national-park",
    title: "Udzungwa Mountains National Park",
    location: "Morogoro, Tanzania",
    park: "Udzungwa Mountains National Park",
    description:
      "The Udzungwa Mountains are a biodiversity hotspot of rainforest, rare primates and dramatic waterfalls.",
    activities: ["Hiking", "Waterfall walks"],
    animals: ["Colobus monkey", "Chameleons", "Birds"],
  },
];

export default function DestinationsPage() {
  const [indexes, setIndexes] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    destinations.forEach((d) => (init[d.name] = 0));
    return init;
  });

  const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    destinations.forEach((d) => (init[d.name] = true));
    return init;
  });

  const [prevDisplayMap, setPrevDisplayMap] = useState<Record<string, string | null>>(() => {
    const init: Record<string, string | null> = {};
    destinations.forEach((d) => (init[d.name] = null));
    return init;
  });

  const prevIndexesRef = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    destinations.forEach((d) => (init[d.name] = 0));
    return init;
  })[0];

  const [active, setActive] = useState<LocationHighlight | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) => {
        const next = { ...prev };
        destinations.forEach((d) => {
          const src = d.media.src;
          if (Array.isArray(src) && src.length > 0) {
            next[d.name] = (prev[d.name] + 1) % src.length;
          }
        });
        return next;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Track previous display src per destination so we can show it as a background
  useEffect(() => {
    // detect changes between prevIndexesRef and indexes
    const prev = { ...prevIndexesRef };
    destinations.forEach((d) => {
      const src = d.media.src;
      if (!Array.isArray(src)) return;
      const prevIdx = prev[d.name] ?? 0;
      const newIdx = indexes[d.name] ?? 0;
      if (prevIdx === newIdx) return;
      const prevSrc = src[prevIdx];
      setPrevDisplayMap((p) => ({ ...p, [d.name]: prevSrc }));
      setLoadedMap((l) => ({ ...l, [d.name]: false }));
      // clear prev after transition
      setTimeout(() => setPrevDisplayMap((p) => ({ ...p, [d.name]: null })), 700);
    });
    // update ref
    Object.keys(indexes).forEach((k) => (prevIndexesRef[k] = indexes[k]));
  }, [indexes]);

  return (
    <main className="min-h-screen bg-white pt-22">
      <div className="max-w-325 mx-auto px-4 py-16">
        {/* Top Destinations */}
        <section id="destinations" className="mb-16">
          <h1 className="text-4xl font-bold text-safari-brown mb-4 text-center">Top Destinations</h1>
          <p className="text-xl text-gray-700 text-center mb-12">
            Explore Tanzania's most breathtaking places and unique experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((d) => {
              const srcVal = d.media.src;
              const displaySrc = Array.isArray(srcVal)
                ? srcVal[indexes[d.name] ?? 0]
                : (srcVal as string);

              const prevBg = prevDisplayMap[d.name];
              const loaded = loadedMap[d.name];

              return (
                <div
                  key={d.name}
                  className="relative rounded-2xl overflow-hidden shadow-sm group"
                >
                  {d.media.type === "video" ? (
                    <video
                      src={displaySrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full aspect-video object-cover block"
                    />
                  ) : (
                    <div
                      className="relative w-full aspect-video bg-center bg-cover"
                      style={prevBg ? { backgroundImage: `url(${prevBg})` } : undefined}
                    >
                      <Image
                        src={displaySrc}
                        alt={d.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-opacity duration-700"
                        style={{ opacity: loaded ? 1 : 0 }}
                        onLoad={() => {
                            setLoadedMap((l) => ({ ...l, [d.name]: true }));
                          }}
                      />
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                  {/* Labels */}
                  <div className="absolute bottom-0 left-0 p-4 flex flex-col gap-1">
                    <span className="text-white text-xl font-bold">{d.name}</span>
                    <span className="text-safari-brown font-medium text-base">
                      {d.highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Other Destinations */}
        <section id="other-destinations">
          <div className="flex flex-col gap-4 md:gap-6">
            <div>
              <h2 className="text-3xl font-bold text-safari-black mb-4">Other Destinations</h2>
              <p className="text-lg text-gray-700">
                Discover more of Tanzania's hidden gems, from iconic parks to remote wilderness areas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {highlights.map((location) => (
                <div
                  key={location.id}
                  className="rounded-3xl border border-safari-black/10 bg-white shadow-sm p-5 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold text-safari-black">{location.title}</h3>
                    <p className="mt-2 text-sm text-safari-brown">{location.location}</p>
                    {location.park ? (
                      <p className="mt-2 text-sm text-safari-black">{location.park}</p>
                    ) : null}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActive(location)}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-safari-brown px-4 py-2 text-sm font-bold text-white hover:bg-safari-black transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block bg-safari-brown text-white px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Plan Your Safari
          </a>
        </div>
      </div>

      {active ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">
          <div className="max-w-xl w-full rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-safari-black">{active.title}</h3>
                <p className="mt-1 text-sm text-safari-brown">{active.location}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="text-safari-brown hover:text-safari-black"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>
            <div className="mt-5 space-y-4 text-safari-black">
              <p>{active.description}</p>
              {active.park ? (
                <p className="font-semibold">Park: {active.park}</p>
              ) : null}
              <div>
                <h4 className="font-semibold">Activities</h4>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
                  {active.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Animals</h4>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
                  {active.animals.length > 0 ? (
                    active.animals.map((animal) => <li key={animal}>{animal}</li>)
                  ) : (
                    <li>Wildlife varies by season and location.</li>
                  )}
                </ul>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setActive(null)}
                className="rounded-full bg-safari-brown px-5 py-2 text-sm font-bold text-white hover:bg-safari-black transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
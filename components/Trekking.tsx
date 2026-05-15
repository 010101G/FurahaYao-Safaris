"use client";

import { useState } from "react";

type TrekkingOffer = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  price?: string;
  description: string;
  highlights: string[];
};

const offers: TrekkingOffer[] = [
  {
    id: "umbrewe-route",
    title: "7 Days Umbwe Route",
    subtitle:
      "Umbwe is one of the steeper and shorter routes than the Machame.",
    duration: "7 Days Umbwe",
    price: "$1,661",
    description:
      "Umbwe is one of the steeper and shorter routes than the Machame route. It is mainly for those with hiking experience, though anyone who is fit can attempt it.",
    highlights: [
      "Steep and direct route",
      "Great acclimatization with scenic wilderness",
      "Suitable for stronger trekkers",
    ],
  },
  {
    id: "lemosho-route",
    title: "7 Days Lemosho Route",
    subtitle:
      "One of the best routes for acclimatization, with stunning views to Shira Plateau.",
    duration: "7 Days Lemosho",
    price: "$1,690",
    description:
      "Lemosho Route is one of the best routes for acclimatization on Kilimanjaro. It is less used and offers a stunning way up to the Shira Plateau.",
    highlights: [
      "Excellent acclimatization profile",
      "Quiet trail with scenic vistas",
      "High summit success rate",
    ],
  },
  {
    id: "rongai-route",
    title: "6 Days Rongai Route",
    subtitle:
      "Rongai is one of the easiest routes with the highest success rate.",
    duration: "6 Days Rongai",
    price: "$1,476",
    description:
      "Rongai Route is one of the easiest routes with a high success rate. The route starts on the north side of Kilimanjaro, just south of the Kenyan border.",
    highlights: [
      "Gentler gradients",
      "Less crowded trail",
      "Great for first-time climbers",
    ],
  },
  {
    id: "machame-route",
    title: "6 Days Machame Route",
    subtitle:
      "The Machame route is also known as the Whiskey route, and it is tough but beautiful.",
    duration: "6 Days Machame Climbing",
    price: "$1,452",
    description:
      "Machame route is also known as the Whiskey Route. It is a tough climb compared to Marangu, with dramatic scenery and a rewarding summit.",
    highlights: [
      "Popular scenic route",
      "Better acclimatization than shorter routes",
      "High summit potential",
    ],
  },
  {
    id: "marangu-6",
    title: "6 Days Marangu Route",
    subtitle:
      "The least expensive route and the only one with sleeping huts at every campsite.",
    duration: "6 Days Marangu Route",
    price: "$1,397",
    description:
      "Marangu climbing is the least expensive route on Kilimanjaro. It is the only route with comfortable sleeping huts at every campsite.",
    highlights: [
      "Huts instead of tents",
      "Well-established trail",
      "Comfort-focused itinerary",
    ],
  },
  {
    id: "marangu-5",
    title: "5 Days Marangu Route",
    subtitle:
      "A quicker Marangu ascent with comfortable huts and shorter itinerary.",
    duration: "5 Days Marangu Route",
    price: "$1,220",
    description:
      "This is the only route with the comforts of sleeping huts at every campsite, making it the least expensive and most comfortable Kilimanjaro climb.",
    highlights: [
      "Shorter itinerary",
      "Huts and facilities",
      "Classic Kilimanjaro experience",
    ],
  },
  {
    id: "mount-meru-4",
    title: "4 Days Mount Meru Climbing",
    subtitle:
      "Mount Meru is a dormant stratovolcano 70km west of Kilimanjaro.",
    duration: "4 Days Mount Meru Climbing",
    description:
      "Mount Meru trek in 4 days is a fantastic mountain adventure offering panoramic views and an introductory high-altitude climb.",
    highlights: [
      "Scenic summit",
      "Great acclimatization",
      "Less crowded than Kilimanjaro",
    ],
  },
  {
    id: "mount-meru-3",
    title: "3 Days Mount Meru Climbing",
    subtitle:
      "A more intense 3-day Mount Meru trek to the base camp of East Africa's peak.",
    duration: "3 Days Mount Meru Climbing",
    description:
      "Experience one of the world's most exciting and challenging treks in a 3-day Mount Meru itinerary that leads to the base camp of East Africa's peak.",
    highlights: [
      "Challenging ascent",
      "Compact itinerary",
      "Great views and wilderness",
    ],
  },
];

export default function Trekking() {
  const [activeOffer, setActiveOffer] =
    useState<TrekkingOffer | null>(null);

  return (
    <section id="trekking" className="bg-white py-12">
      <div className="mx-auto max-w-325 px-4 md:px-6">
        <div className="mb-10">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-safari-black">
            Climb Kilimanjaro
          </h2>

          <p className="mt-4 text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-safari-black">
            Climb Kilimanjaro Mountain is a challenging yet rewarding
            adventure, offering stunning landscapes and a sense of
            accomplishment as you reach Africa’s highest peak. The journey
            takes you through diverse ecosystems, from lush rainforests to
            alpine deserts, before standing atop Uhuru Peak with panoramic
            views stretching far and wide.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="rounded-3xl border border-safari-black border-opacity-10 bg-safari-light p-6 shadow-sm"
            >
              <div className="flex h-full flex-col gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-safari-brown">
                    {offer.duration}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-safari-black">
                    {offer.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-safari-brown">
                    {offer.subtitle}
                  </p>
                </div>

                {offer.price ? (
                  <div className="text-lg font-bold text-safari-black">
                    From {offer.price}
                  </div>
                ) : null}

                <button
                  type="button"
                  onClick={() => setActiveOffer(offer)}
                  className="mt-auto inline-flex items-center justify-center rounded-full bg-safari-brown px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-safari-black"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-safari-black border-opacity-10 bg-safari-yellow p-6">
          <h3 className="text-xl font-bold text-safari-black">
            Kilimanjaro Climbing Includes
          </h3>

          <ul className="mt-4 grid list-inside list-disc gap-2 text-sm text-safari-black">
            <li>
              All transfers to the mountain and back to your Moshi hotel
            </li>
            <li>Airport pick up and drop off</li>
            <li>2 nights accommodation before and after trek</li>
            <li>Professional, experienced mountain guides</li>
            <li>All park fees, rescue fees</li>
            <li>All meals while on the mountain</li>
            <li>Guides, porters, cook salaries and park fees</li>
            <li>Quality mess tents with tables and chairs</li>
            <li>
              Large portions of fresh, healthy, nutritious food
            </li>
            <li>Clean, purified drinking water</li>
          </ul>
        </div>

        <div className="mt-8 rounded-3xl border border-safari-black/10 bg-safari-black p-6 text-white">
          <h3 className="text-xl font-bold">
            Climb Kilimanjaro Excludes
          </h3>

          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-safari-light">
            <li>
              Tanzania visa cost (USD 50 for most nationalities, USD 100 for
              U.S. citizens)
            </li>
            <li>Personal expenses</li>
            <li>Meals not listed above</li>
            <li>Optional tours</li>
            <li>Tips</li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-safari-black">
            Frequently Asked Questions About Climbing Mount Kilimanjaro
          </h3>

          <div className="mt-6 space-y-6">
            <div>
              <h4 className="font-semibold text-safari-brown">
                How Much Time Do I Need to Climb Mount Kilimanjaro?
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-safari-black">
                Climbing Mount Kilimanjaro typically takes between 5 to 9 days,
                depending on the route chosen and acclimatization. Shorter
                routes like Marangu or Umbwe (5-6 days) increase the risk of
                altitude sickness due to limited acclimatization. Longer routes
                such as Lemosho or Northern Circuit (7-9 days) provide better
                acclimatization and higher success rates. Factors like fitness
                level, travel time, and weather conditions should be considered
                when planning your climb.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-safari-brown">
                How Far Do I Hike Each Day?
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-safari-black">
                Daily hiking distances vary based on the trail, terrain, and
                fitness level. On average, trekkers cover 8 to 15 kilometers
                per day, requiring 4 to 6 hours of hiking. Difficult terrain
                may shorten daily distances, while smoother paths allow longer
                hikes. Guided hikes set a steady pace to balance progress and
                safety.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-safari-brown">
                What Is the Best Time of Year to Climb Mount Kilimanjaro?
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-safari-black">
                The best time to climb Kilimanjaro is during the dry seasons:
                January to mid-March for warmer conditions and fewer climbers,
                and June to October for cooler weather and clear skies. Rainy
                seasons (mid-March to May and November) make trails slippery
                and more challenging.
              </p>
            </div>
          </div>
        </div>
      </div>

      {activeOffer ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-safari-black">
                  {activeOffer.title}
                </h3>

                <p className="mt-1 text-sm text-safari-brown">
                  {activeOffer.duration}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveOffer(null)}
                className="text-xl text-safari-brown transition-colors hover:text-safari-black"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-4 text-safari-black">
              <p>{activeOffer.description}</p>

              {activeOffer.price ? (
                <p className="font-semibold">
                  Starting from {activeOffer.price}
                </p>
              ) : null}

              <div>
                <h4 className="font-semibold">Highlights</h4>

                <ul className="ml-5 mt-2 list-disc space-y-1 text-sm">
                  {activeOffer.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveOffer(null)}
                className="rounded-full bg-safari-brown px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-safari-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";
import TrekkingExplorer from "@/components/trekking/TrekkingExplorer";
import FaqAccordion from "@/components/faq/FaqAccordion";
import Footer from "@/components/Footer";
import { trekkingOffers, trekkingIncludes, trekkingExcludes, type FAQ } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kilimanjaro & Meru Trekking | FurahaYao Safaris",
  description:
    "Climb Mount Kilimanjaro and Mount Meru with FurahaYao Safaris. Lemosho, Machame, Rongai, Marangu and Umbwe routes with expert guides and high summit success.",
  alternates: { canonical: "https://furahayaosafaris.com/trekking" },
};

const trekFaqs: FAQ[] = [
  { q: "How many days do I need to climb Kilimanjaro?", a: "Typically 5 to 9 days depending on the route and acclimatization. Shorter routes like Marangu or Umbwe (5-6 days) carry a higher altitude-sickness risk, while longer routes such as Lemosho (7-9 days) give better acclimatization and higher success rates." },
  { q: "How far do I hike each day?", a: "On average trekkers cover 8 to 15 km per day, requiring 4 to 6 hours of hiking. Difficult terrain may shorten daily distances, while smoother paths allow longer hikes. Guides set a steady pace to balance progress and safety." },
  { q: "What is the best time of year to climb?", a: "The dry seasons are best: January to mid-March for warmer conditions and fewer climbers, and June to October for cooler weather and clear skies. The rainy seasons (mid-March to May and November) make trails slippery." },
  { q: "Is Kilimanjaro a technical climb?", a: "No. Kilimanjaro requires good fitness and acclimatization but no ropes or mountaineering skills. Proper preparation and weather awareness are essential." },
  { q: "What kind of food and water is provided?", a: "Meals are high-energy and easily digestible, porridge, eggs, soups, rice, pasta, vegetables, meat, energy bars and hot drinks. Water is purified by boiling, tablets or filtration and supplied in plenty." },
  { q: "What happens if someone needs to descend?", a: "Guides continuously monitor everyone's health and will safely escort any climber to a lower altitude if needed. Travel insurance with emergency evacuation cover is strongly recommended." },
];

export default function TrekkingPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Trekking"
          title="Stand on the roof of Africa"
          subtitle="Climb Kilimanjaro and Mount Meru through rainforest, moorland and alpine desert to a sunrise summit you'll never forget."
          poster="https://res.cloudinary.com/dtvuqa0i2/image/upload/v1768550116/Safari_6_dekouj.jpg"
        />

        {/* Routes */}
        <section className="bg-dune py-20 md:py-28">
          <div className="max-w-[1260px] mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="Choose your route"
              title="Kilimanjaro & Mount Meru routes"
              subtitle="Every route has its own character. Tap any to see the highlights, we'll help you pick the right one for your fitness and timeline."
            />
            <div className="mt-12">
              <TrekkingExplorer items={trekkingOffers} />
            </div>
          </div>
        </section>

        {/* Includes / Excludes */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-[1260px] mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="The fine print"
              title="What's included on every climb"
            />
            <div className="mt-12 grid lg:grid-cols-2 gap-6">
              <Reveal direction="right">
                <div className="rounded-3xl bg-safari-cream/50 border border-safari-olive/15 p-7 h-full">
                  <h3 className="flex items-center gap-2 text-lg font-extrabold text-safari-black">
                    <span className="grid place-items-center w-7 h-7 rounded-full bg-safari-olive text-white"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l4 4L19 7" /></svg></span>
                    Included
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {trekkingIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-safari-black/75">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-safari-olive shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal direction="left">
                <div className="rounded-3xl bg-safari-charcoal text-white p-7 h-full">
                  <h3 className="flex items-center gap-2 text-lg font-extrabold">
                    <span className="grid place-items-center w-7 h-7 rounded-full bg-white/10 text-white"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></span>
                    Not included
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {trekkingExcludes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-safari-gold shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-dune py-20 md:py-28">
          <div className="max-w-[1260px] mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="Good to know"
              title="Climbing questions, answered"
            />
            <div className="mt-12">
              <FaqAccordion items={trekFaqs} />
            </div>
            <Reveal>
              <div className="mt-14 text-center">
                <CTAButton href="/contact" variant="primary" size="lg">Book your trek</CTAButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

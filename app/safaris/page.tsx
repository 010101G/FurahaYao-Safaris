import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";
import SafarisExplorer from "@/components/safaris/SafarisExplorer";
import Footer from "@/components/Footer";
import { luxurySafaris, budgetSafaris } from "@/lib/data";

export const metadata: Metadata = {
  title: "Luxury & Budget Safaris | FurahaYao Safaris",
  description:
    "Tanzania safari packages for every traveller, from exclusive luxury lodge safaris to affordable budget camping adventures. Expert guides, all-inclusive, transparent pricing.",
  alternates: { canonical: "https://furahayaosafaris.com/safaris" },
};

const included = [
  "Private 4x4 safari vehicle with pop-up roof",
  "Professional English-speaking guide",
  "Park & conservation fees",
  "Hand-picked lodges or camps",
  "All meals as per itinerary",
  "Airport transfers & bottled water",
];

export default function SafarisPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Our Safaris"
          title="Luxury & budget safari packages"
          subtitle="Whatever your style or budget, we have a Tanzanian adventure designed for you. Tap any package to see the route, parks and price."
          media={{ type: "image", src: "/images/stock/lux-7day-exclusive.jpg" }}
        />

        {/* Luxury */}
        <section className="bg-dune py-20 md:py-28">
          <div className="max-w-[1260px] mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="Premium experiences"
              title="Luxury safaris"
              subtitle="Exclusive lodges, the finest camps and unhurried days in the heart of the wild."
            />
            <div className="mt-12">
              <SafarisExplorer items={luxurySafaris} />
            </div>
          </div>
        </section>

        {/* Budget */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-[1260px] mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="Great value"
              title="Budget safaris"
              subtitle="Authentic camping adventures and cultural visits that don't compromise on the wildlife."
            />
            <div className="mt-12">
              <SafarisExplorer items={budgetSafaris} />
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-dune py-20 md:py-28">
          <div className="max-w-[1260px] mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Always included"
                title="Everything sorted, nothing hidden"
                subtitle="Every FurahaYao safari is all-inclusive and transparently priced. Prices are indicative 'from' rates per person, request a quote for your exact dates and group size."
              />
              <Reveal delay={0.1}>
                <div className="mt-8">
                  <CTAButton href="/contact" variant="primary" size="lg">Build my safari</CTAButton>
                </div>
              </Reveal>
            </div>
            <Reveal direction="left">
              <ul className="grid sm:grid-cols-2 gap-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-safari-black/80 font-medium shadow-soft">
                    <span className="grid place-items-center w-6 h-6 rounded-full bg-safari-olive/15 text-safari-olive shrink-0">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l4 4L19 7" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

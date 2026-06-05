import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import TopDestinations from "@/components/destinations/TopDestinations";
import OtherDestinations from "@/components/destinations/OtherDestinations";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import Footer from "@/components/Footer";
import { destinations, highlights } from "@/lib/data";

export const metadata: Metadata = {
  title: "Destinations | FurahaYao Safaris",
  description:
    "Explore Tanzania's most breathtaking destinations, Serengeti, Ngorongoro, Tarangire, Zanzibar and a wealth of hidden gems and remote wilderness areas.",
  alternates: { canonical: "https://furahayaosafaris.com/destinations" },
};

export default function DestinationsPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Destinations"
          title="Where the wild things are"
          subtitle="From world-famous parks to remote, untouched wilderness, explore the places that make Tanzania unforgettable."
          media={{ type: "video", src: "/videos/Serengeti.mov" }}
        />

        {/* Top destinations */}
        <section id="destinations" className="bg-dune py-20 md:py-28 scroll-mt-24">
          <div className="max-w-[1260px] mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="The icons"
              title="Top destinations"
              subtitle="The headline acts of any Tanzanian safari."
            />
            <div className="mt-12">
              <TopDestinations items={destinations} featureFirst />
            </div>
          </div>
        </section>

        {/* Other destinations */}
        <section id="other-destinations" className="bg-white py-20 md:py-28 scroll-mt-24">
          <div className="max-w-[1260px] mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="Hidden gems"
              title="Other destinations"
              subtitle="Tap any place to discover its wildlife, activities and what makes it special."
            />
            <div className="mt-12">
              <OtherDestinations items={highlights} />
            </div>
            <Reveal>
              <div className="mt-14 text-center">
                <CTAButton href="/contact" variant="primary" size="lg">Plan a multi-park journey</CTAButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

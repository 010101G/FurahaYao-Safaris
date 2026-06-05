import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";
import FaqAccordion from "@/components/faq/FaqAccordion";
import Footer from "@/components/Footer";
import { faqs, HERO_POSTER } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ | FurahaYao Safaris",
  description:
    "Answers to common questions about travelling to Tanzania, visas, vaccinations, the best safari seasons, customising itineraries and our cancellation policy.",
  alternates: { canonical: "https://furahayaosafaris.com/faq" },
};

export default function FAQPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Help centre"
          title="Frequently asked questions"
          subtitle="Everything you need to know before your Tanzanian adventure."
          poster={HERO_POSTER}
        />

        <section className="bg-dune py-20 md:py-28">
          <div className="max-w-[1260px] mx-auto px-4 md:px-6">
            <FaqAccordion items={faqs} />

            <Reveal>
              <div className="mt-16 max-w-2xl mx-auto text-center rounded-3xl bg-white shadow-soft p-8 md:p-10">
                <SectionHeading
                  eyebrow="Still curious?"
                  title="We're happy to help"
                  subtitle="Can't find your answer? Our team usually replies within a few hours."
                />
                <div className="mt-7 flex flex-wrap gap-3 justify-center">
                  <CTAButton href="/contact" variant="primary">Ask us anything</CTAButton>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

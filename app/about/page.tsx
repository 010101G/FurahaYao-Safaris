import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";
import WhyUs from "@/components/home/WhyUs";
import Footer from "@/components/Footer";
import { HERO_POSTER } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | FurahaYao Safaris",
  description:
    "Meet FurahaYao Safaris, a licensed Tanzanian tour operator with expert local guides, crafting tailor-made safaris, Kilimanjaro treks and Zanzibar escapes.",
  alternates: { canonical: "https://furahayaosafaris.com/about" },
};

const journey = [
  { step: "01", title: "We listen", body: "Share your dream trip, your pace and your budget. Every plan starts with you." },
  { step: "02", title: "We design", body: "Our local experts craft a tailor-made itinerary with hand-picked lodges and guides." },
  { step: "03", title: "You refine", body: "We tweak every detail together until the journey feels exactly right." },
  { step: "04", title: "You travel", body: "Relax and explore, we handle the logistics and stay with you 24/7." },
];

export default function AboutPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="About FurahaYao"
          title="Tanzania, shown to you by the people who call it home"
          subtitle="A licensed adventure safari agency and tour operator, recommended by travellers and guides alike."
          poster={HERO_POSTER}
        />

        {/* Story */}
        <section className="bg-dune py-20 md:py-28">
          <div className="max-w-[1260px] mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal direction="right">
              <div className="relative aspect-[5/4] rounded-[2rem] overflow-hidden shadow-lift">
                <Image src="/images/On_the_Car_zinteo.jpg" alt="FurahaYao guides on safari" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our story"
                title="Decades of experience, a lifetime of local knowledge"
              />
              <div className="mt-6 space-y-4 text-safari-black/65 leading-relaxed text-lg">
                <Reveal delay={0.05}><p>FurahaYao Safaris is one of the best licensed Tanzania adventure safari agencies and tour operators, offering safari packages recommended by travel experts, from lifetime safaris and the wildebeest migration to Zanzibar holidays, Kilimanjaro climbs and Mount Meru treks.</p></Reveal>
                <Reveal delay={0.1}><p>With decades of experience planning tours across Tanzania, our local team of expert planners and guides brings on-the-ground insight into the national parks, guiding you to the best spots for epic wildlife sightings.</p></Reveal>
                <Reveal delay={0.15}><p>Our guides are professional, personable and safety-first. Let us plan your next journey, the legendary Serengeti, the natural wonder of Ngorongoro Crater, the summit of Kilimanjaro, and beyond.</p></Reveal>
              </div>
              <Reveal delay={0.2}>
                <div className="mt-8">
                  <CTAButton href="/contact" variant="primary">Plan your adventure</CTAButton>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-[1260px] mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="How it works"
              title="From first message to the trip of a lifetime"
              subtitle="A simple, personal process, no call centres, no generic packages."
            />
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {journey.map((j, i) => (
                <Reveal key={j.step} delay={i * 0.08}>
                  <div className="relative rounded-3xl border border-safari-black/8 bg-safari-cream/40 p-7 h-full">
                    <span className="text-5xl font-extrabold text-safari-terracotta/20">{j.step}</span>
                    <h3 className="mt-3 text-lg font-extrabold text-safari-black">{j.title}</h3>
                    <p className="mt-2 text-sm text-safari-black/60 leading-relaxed">{j.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <WhyUs />
      </main>
      <Footer />
    </>
  );
}

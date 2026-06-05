import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SafariPlanner from "@/components/contact/SafariPlanner";
import Footer from "@/components/Footer";
import { CONTACT, HERO_POSTER } from "@/lib/data";

export const metadata: Metadata = {
  title: "Plan My Trip | FurahaYao Safaris",
  description:
    "Tell us about your dream Tanzanian safari and we'll craft a tailor-made itinerary, no obligation. Reach FurahaYao Safaris by WhatsApp or email.",
  alternates: { canonical: "https://furahayaosafaris.com/contact" },
};

const channels = [
  {
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: `https://wa.me/${CONTACT.whatsapp}`,
    icon: <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.115z" />,
  },
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: <path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm0 2v.4l9 5.6 9-5.6V7H3z" />,
  },
  {
    label: "Location",
    value: "Arusha, Tanzania",
    href: undefined,
    icon: <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />,
  },
];

export default function ContactPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Plan my trip"
          title="Let's design your perfect safari"
          subtitle="We want to understand you properly, so we can craft a journey that fits you, never a generic package."
          poster={HERO_POSTER}
        />

        {/* Channels */}
        <section className="bg-dune pt-16 md:pt-20">
          <div className="max-w-[1260px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {channels.map((c, i) => {
                const inner = (
                  <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft hover:shadow-lift transition-shadow h-full">
                    <span className="grid place-items-center w-12 h-12 rounded-xl bg-safari-terracotta/10 text-safari-terracotta shrink-0">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">{c.icon}</svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold tracking-wider uppercase text-safari-black/40">{c.label}</p>
                      <p className="font-bold text-safari-black truncate">{c.value}</p>
                    </div>
                  </div>
                );
                return (
                  <Reveal key={c.label} delay={i * 0.08}>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="block h-full">{inner}</a>
                    ) : inner}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Planner form */}
        <section className="bg-dune py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="The planner"
              title="Tell us about your dream trip"
              subtitle="Eight quick steps, about two minutes. The more you share, the better we tailor it."
            />
            <div className="mt-12">
              <SafariPlanner />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

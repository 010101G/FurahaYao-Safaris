import Hero from "@/components/Hero";
import AboutTeaser from "@/components/home/AboutTeaser";
import WhyUs from "@/components/home/WhyUs";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import SafarisExplorer from "@/components/safaris/SafarisExplorer";
import TopDestinations from "@/components/destinations/TopDestinations";
import { featuredSafaris, destinations } from "@/lib/data";
import { getGalleryImages } from "@/lib/gallery";

export default function Home() {
  const galleryImages = getGalleryImages();
  return <HomeContent galleryImages={galleryImages} />;
}

function HomeContent({ galleryImages }: { galleryImages: string[] }) {
  return (
    <>
      <main suppressHydrationWarning>
        <Hero />

        <AboutTeaser />

        {/* Featured safaris */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-[1260px] mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <SectionHeading
                align="left"
                eyebrow="What we do"
                title="Safaris crafted around your dream"
                subtitle="From budget camping adventures to exclusive luxury lodges, handcrafted itineraries for every traveller."
              />
              <div className="hidden md:block shrink-0">
                <CTAButton href="/safaris" variant="ghost" arrow>View all safaris</CTAButton>
              </div>
            </div>
            <div className="mt-12">
              <SafarisExplorer items={featuredSafaris} cols={4} />
            </div>
            <div className="md:hidden mt-10 flex justify-center">
              <CTAButton href="/safaris" variant="ghost" arrow>View all safaris</CTAButton>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="bg-dune py-20 md:py-28">
          <div className="max-w-[1260px] mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <SectionHeading
                align="left"
                eyebrow="Where you'll go"
                title="Iconic Tanzanian destinations"
                subtitle="From the endless Serengeti to the spice island of Zanzibar."
              />
              <div className="hidden md:block shrink-0">
                <CTAButton href="/destinations" variant="ghost" arrow>All destinations</CTAButton>
              </div>
            </div>
            <div className="mt-12">
              <TopDestinations items={destinations} featureFirst />
            </div>
            <div className="md:hidden mt-10 flex justify-center">
              <CTAButton href="/destinations" variant="ghost" arrow>All destinations</CTAButton>
            </div>
          </div>
        </section>

        <WhyUs />
        <Gallery images={galleryImages} />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

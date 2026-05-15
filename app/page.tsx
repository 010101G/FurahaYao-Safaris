import Hero from "@/components/Hero";
import About from "@/components/About";
import Safaris from "@/components/Safaris";
import Destinations from "@/components/Destinations";
// import Trekking from "@/components/Trekking";
import LocationHighlights from "@/components/LocationHighlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Safaris />
        {/* <Trekking /> */}
        <Destinations />
        <LocationHighlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SideRail from "@/components/ui/SideRail";
import GoogleTranslate from "@/components/ui/GoogleTranslate";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FurahaYao Safaris - Tanzania Safari Tours & Experiences",
  description:
    "Discover Tanzania's wonders with FurahaYao Safaris. Personalized safari itineraries, expert local guides, ethical wildlife encounters, and luxury experiences in Serengeti, Ngorongoro, Zanzibar.",
  keywords: [
    "Tanzania safari",
    "safari tours",
    "wildlife safari",
    "Serengeti safari",
    "Ngorongoro crater",
    "Zanzibar tours",
    "Tanzania wildlife",
    "ethical wildlife",
    "safari guide",
    "Tanzania travel",
  ],
  authors: [{ name: "FurahaYao Safaris" }],
  creator: "FurahaYao Safaris",
  publisher: "FurahaYao Safaris",
  icons: {
    icon: "/images/furahayao-logo.png",
  },
  metadataBase: new URL("https://furahayaosafaris.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://furahayaosafaris.com",
    title: "FurahaYao Safaris - Tanzania Safari Tours & Experiences",
    description:
      "Discover Tanzania's wonders with FurahaYao Safaris. Personalized safari itineraries, expert local guides, ethical wildlife encounters.",
    images: [
      {
        url: "/images/furahayao-logo.png",
        width: 1200,
        height: 630,
        alt: "FurahaYao Safaris Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FurahaYao Safaris - Tanzania Safari Tours & Experiences",
    description:
      "Discover Tanzania's wonders with FurahaYao Safaris. Personalized safari itineraries, expert local guides, ethical wildlife encounters.",
    images: ["/images/furahayao-logo.png"],
  },
  alternates: {
    canonical: "https://furahayaosafaris.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "FurahaYao Safaris",
    description:
      "Experience Tanzania's wonders with FurahaYao Safaris, personalized itineraries, expert local guides, and ethical wildlife encounters.",
    url: "https://furahayaosafaris.com",
    telephone: "+255755392290",
    email: "info@furahayaosafaris.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TZ",
      addressRegion: "Tanzania",
    },
    sameAs: [
      "https://www.instagram.com/furahayao_safaris/",
      "https://www.facebook.com/furahayao_safaris",
    ],
    areaServed: [
      "Serengeti",
      "Ngorongoro",
      "Tarangire",
      "Zanzibar",
      "Tanzania",
    ],
    priceRange: "$$",
    image: "/images/furahayao-logo.png",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased`} suppressHydrationWarning>
        <Navbar />
        {children}
        <SideRail />
        <GoogleTranslate />
      </body>
    </html>
  );
}

/* ────────────────────────────────────────────────────────────
   Central content source for FurahaYao Safaris.
   Both the homepage teasers and the dedicated pages read from here,
   so copy + media stay consistent across the site.
   Only assets that actually exist in /public are referenced.
   ──────────────────────────────────────────────────────────── */

export type Media = { type: "video" | "image"; src: string };

/* ── Safari packages (Luxury & Budget tiers) ────────────
   Images downloaded from the inspiration site. Prices are
   indicative "from" prices per person, already including the
   +10% fuel adjustment, easy to edit in one place. */
export type SafariCategory = "Luxury" | "Budget";

export type Safari = {
  id: string;
  title: string;
  category: SafariCategory;
  days: string;
  priceFrom: string;
  description: string;
  parks: string[];
  image: string;
};

const img = (id: string) => `/images/stock/${id}.jpg`;

export const luxurySafaris: Safari[] = [
  {
    id: "lux-3day-serengeti-ngorongoro",
    title: "3-Day Luxury Serengeti & Ngorongoro",
    category: "Luxury",
    days: "3 days",
    priceFrom: "$4,620",
    description:
      "A quick yet indulgent escape into two of Tanzania's crown jewels, game drives across the Serengeti plains and a descent into the wildlife-rich Ngorongoro Crater, with nights in premium lodges.",
    parks: ["Serengeti", "Ngorongoro Crater"],
    image: img("lux-3day-serengeti-ngorongoro"),
  },
  {
    id: "lux-4day-tarangire-serengeti-ngorongoro",
    title: "4-Day Luxury Tarangire, Serengeti & Ngorongoro",
    category: "Luxury",
    days: "4 days",
    priceFrom: "$6,160",
    description:
      "A comprehensive northern-circuit journey through Tarangire's elephant herds, the endless Serengeti and the Ngorongoro Crater, staying in hand-picked luxury lodges throughout.",
    parks: ["Tarangire", "Serengeti", "Ngorongoro Crater"],
    image: img("lux-4day-tarangire-serengeti-ngorongoro"),
  },
  {
    id: "lux-7day-exclusive",
    title: "7-Day Exclusive Luxury Safari",
    category: "Luxury",
    days: "7 days",
    priceFrom: "$10,887",
    description:
      "Begin among Tarangire's giant baobabs and elephant herds, continue to the UNESCO-listed Ngorongoro Crater, and finish deep in the Serengeti, an exclusive, unhurried journey through Tanzania's finest.",
    parks: ["Tarangire", "Ngorongoro Crater", "Serengeti"],
    image: img("lux-7day-exclusive"),
  },
  {
    id: "lux-7day-tanzania",
    title: "7-Day Tanzania Luxury Safari",
    category: "Luxury",
    days: "7 days",
    priceFrom: "$10,450",
    description:
      "Explore the Serengeti, Ngorongoro and Tarangire at a relaxed pace, staying in exclusive lodges and enjoying diverse wildlife encounters across the northern circuit.",
    parks: ["Serengeti", "Ngorongoro Crater", "Tarangire"],
    image: img("lux-7day-tanzania"),
  },
  {
    id: "lux-8day-tanzania",
    title: "8-Day Tanzania Luxury Safari",
    category: "Luxury",
    days: "8 days",
    priceFrom: "$13,640",
    description:
      "Eight unforgettable days across Tanzania's iconic parks, Serengeti, Ngorongoro Crater and Tarangire, with unforgettable wildlife encounters and the very best luxury camps and lodges.",
    parks: ["Serengeti", "Ngorongoro Crater", "Tarangire"],
    image: img("lux-8day-tanzania"),
  },
  {
    id: "lux-9day-bespoke",
    title: "9-Day Bespoke Luxury Safari",
    category: "Luxury",
    days: "9 days",
    priceFrom: "$16,085",
    description:
      "Our most exclusive itinerary, unparalleled experiences from Tarangire's elephant herds to the breathtaking Ngorongoro landscape and the wildlife-packed Serengeti, tailored entirely around you.",
    parks: ["Tarangire", "Ngorongoro Crater", "Serengeti"],
    image: img("lux-9day-bespoke"),
  },
];

export const budgetSafaris: Safari[] = [
  {
    id: "bud-2day-tarangire-ngorongoro",
    title: "2-Day Budget Tarangire & Ngorongoro",
    category: "Budget",
    days: "2 days",
    priceFrom: "$575",
    description:
      "A short, affordable taste of the northern circuit, two major wildlife destinations, Tarangire National Park and the Ngorongoro Crater, in a value-packed two-day getaway.",
    parks: ["Tarangire", "Ngorongoro Crater"],
    image: img("bud-2day-tarangire-ngorongoro"),
  },
  {
    id: "bud-4day-camping",
    title: "4-Day Tanzania Camping Safari",
    category: "Budget",
    days: "4 days",
    priceFrom: "$1,150",
    description:
      "Classic camping adventure visiting the home of Tanzania's densest elephant population and beyond, Tarangire, Serengeti and the Ngorongoro Crater, under canvas and the African sky.",
    parks: ["Tarangire", "Serengeti", "Ngorongoro Crater"],
    image: img("bud-4day-camping"),
  },
  {
    id: "bud-4day-lake-eyasi",
    title: "4-Day Safari & Lake Eyasi Culture",
    category: "Budget",
    days: "4 days",
    priceFrom: "$1,150",
    description:
      "Combine wildlife with a genuine cultural immersion, game drives plus a visit to the Hadzabe hunter-gatherer community on the shores of Lake Eyasi.",
    parks: ["Lake Eyasi", "Ngorongoro Crater", "Hadzabe community"],
    image: img("bud-4day-lake-eyasi"),
  },
  {
    id: "bud-4day-maasai",
    title: "4-Day Safari & Maasai Village",
    category: "Budget",
    days: "4 days",
    priceFrom: "$1,150",
    description:
      "A parks tour paired with a warm cultural welcome at the Monduli Juu Maasai village, wildlife and living traditions in one affordable journey.",
    parks: ["Tarangire", "Ngorongoro Crater", "Maasai village"],
    image: img("bud-4day-maasai"),
  },
  {
    id: "bud-6day-camping",
    title: "6-Day Budget Camping Safari",
    category: "Budget",
    days: "6 days",
    priceFrom: "$1,720",
    description:
      "Six days of unforgettable camping across Tarangire, the Serengeti and the Ngorongoro Crater, the full northern-circuit experience at a budget-friendly price.",
    parks: ["Tarangire", "Serengeti", "Ngorongoro Crater"],
    image: img("bud-6day-camping"),
  },
  {
    id: "bud-6day-maasai",
    title: "6-Day Budget Safari & Maasai Tour",
    category: "Budget",
    days: "6 days",
    priceFrom: "$1,720",
    description:
      "A multi-park camping safari through the Serengeti and Ngorongoro Crater, rounded off with a memorable cultural visit to the Monduli Juu Maasai village.",
    parks: ["Serengeti", "Ngorongoro Crater", "Maasai village"],
    image: img("bud-6day-maasai"),
  },
];

export const safaris: Safari[] = [...luxurySafaris, ...budgetSafaris];

/* A curated mix for the homepage featured section */
export const featuredSafaris: Safari[] = [
  luxurySafaris[2], // 7-Day Exclusive Luxury
  luxurySafaris[0], // 3-Day Luxury
  budgetSafaris[1], // 4-Day Camping
  budgetSafaris[0], // 2-Day Budget
];

/* ── Featured / top destinations ────────────────────── */
export type Destination = {
  name: string;
  highlight: string;
  blurb: string;
  media: { type: "video" | "image"; src: string | string[] };
};

export const destinations: Destination[] = [
  {
    name: "Serengeti",
    highlight: "The Great Migration",
    blurb:
      "Endless plains where over a million wildebeest thunder across the savannah in the greatest wildlife show on earth.",
    media: { type: "video", src: "/videos/Serengeti.mov" },
  },
  {
    name: "Ngorongoro",
    highlight: "The world's largest caldera",
    blurb:
      "A collapsed volcano cradling one of the densest concentrations of wildlife anywhere in Africa.",
    media: {
      type: "image",
      src: [
        "/images/Ngorongoro.png",
        "/images/Ngorongoro Crater views.jpg",
        "/images/Ngorongoro Crater views.jpeg",
      ],
    },
  },
  {
    name: "Tarangire",
    highlight: "Giants among baobabs",
    blurb:
      "Vast elephant herds drift beneath ancient baobab trees along the life-giving Tarangire River.",
    media: { type: "video", src: "/videos/Tarangire Elephants.mov" },
  },
  {
    name: "Zanzibar",
    highlight: "Beach paradise",
    blurb:
      "Turquoise water, spice-scented air and centuries of Swahili history on Tanzania's idyllic island.",
    media: {
      type: "image",
      src: [
        "/images/zenj.webp",
        "/images/Discover-Zanzibar-banner_.jpg",
        "/images/Zanzibar Getaways.jpg",
      ],
    },
  },
];

/* ── Other destinations (modal detail cards) ────────── */
export type LocationHighlight = {
  id: string;
  title: string;
  location: string;
  park?: string;
  description: string;
  activities: string[];
  animals: string[];
};

export const highlights: LocationHighlight[] = [
  { id: "amboni-caves", title: "Amboni Caves", location: "Pangani Town", description: "Amboni Caves are one of East Africa's largest limestone cave systems, offering dramatic passages and fascinating rock formations near the coast.", activities: ["Cave exploration", "Guided geology tours"], animals: ["Bats", "Birds"] },
  { id: "walking-safari-arusha", title: "Walking Safari Arusha Park", location: "Arusha, Tanzania", park: "Arusha National Park", description: "Explore Arusha National Park on foot for a close encounter with wildlife and scenic landscapes ranging from lakes to forested trails.", activities: ["Walking safari", "Bird watching"], animals: ["Buffalo", "Giraffe", "Zebra"] },
  { id: "gombe-national-park", title: "Gombe National Park", location: "Kigoma, Tanzania", park: "Gombe Stream National Park", description: "Famous for chimpanzee tracking and lush forests on the shores of Lake Tanganyika, Gombe is a wildlife and primate research paradise.", activities: ["Chimpanzee trekking", "Nature walks"], animals: ["Chimpanzee", "Bushbuck", "Sitatunga"] },
  { id: "katavi-national-park", title: "Katavi National Park", location: "Katavi Region", park: "Katavi National Park", description: "Katavi is one of Tanzania's most remote parks, known for its large herds of hippos, buffalo, and dramatic seasonal floodplains.", activities: ["Game drives", "Photography safaris"], animals: ["Hippo", "Elephant", "Lion"] },
  { id: "kilimanjaro-trek", title: "Kilimanjaro Trek", location: "Moshi, Tanzania", park: "Kilimanjaro National Park", description: "Climb Africa's highest peak through lush montane forest and alpine desert, finishing at the iconic snow-capped summit.", activities: ["Mountain trekking", "Summit attempts"], animals: ["Blue monkey", "Colobus monkey"] },
  { id: "kondoa-irangi", title: "Kondoa Irangi", location: "Dodoma, Tanzania", park: "Kondoa Irangi", description: "Kondoa Irangi is known for its ancient rock paintings and scenic landscapes, perfect for cultural discovery and wilderness exploration.", activities: ["Rock art tours", "Guided hikes"], animals: ["Antelope", "Birdlife"] },
  { id: "manyara-lodge", title: "Lake Manyara", location: "Manyara, Tanzania", park: "Lake Manyara National Park", description: "Stay near the shores of Lake Manyara, where forest, flamingos, and tree-climbing lions create an unforgettable safari experience.", activities: ["Game drives", "Bird watching"], animals: ["Flamingo", "Buffalo", "Lion"] },
  { id: "mahale-mountain", title: "Mahale Mountains", location: "Mahale Mountains, Tanzania", park: "Mahale National Park", description: "Mahale Mountains offers remote forested slopes, chimpanzee tracking, and pristine beaches along Lake Tanganyika.", activities: ["Chimpanzee trekking", "Lake activities"], animals: ["Chimpanzee", "Colobus monkey", "Birds"] },
  { id: "meserani-snake-park", title: "Meserani Snake Park", location: "Arusha, Tanzania", park: "Snake Park Arusha", description: "Meserani Snake Park is a unique attraction showcasing a variety of reptiles and offering educational snake handling experiences.", activities: ["Reptile encounters", "Cultural tours"], animals: ["Snakes", "Crocodiles"] },
  { id: "mikumi-national-park", title: "Mikumi National Park", location: "Morogoro, Tanzania", park: "Mikumi National Park", description: "Mikumi is a classic savannah park with easy access from Dar es Salaam and excellent opportunities to see lions, elephants, and giraffes.", activities: ["Game drives", "Nature walks"], animals: ["Lion", "Elephant", "Giraffe"] },
  { id: "mkomazi-national-park", title: "Mkomazi National Park", location: "Tanzania", park: "Mkomazi National Park", description: "Mkomazi is a dryland park known for its rare species and community-based conservation programs.", activities: ["Conservation safaris", "Game drives"], animals: ["Wild dog", "Elephant", "Giraffe"] },
  { id: "ngorongoro-conservation-area", title: "Ngorongoro Conservation Area", location: "Ngorongoro, Tanzania", park: "Ngorongoro Conservation Area", description: "Home to the world-famous Ngorongoro Crater, this area blends spectacular scenery with exceptional wildlife viewing.", activities: ["Crater tours", "Game drives"], animals: ["Lion", "Elephant", "Leopard", "Ostrich"] },
  { id: "ruaha-national-park", title: "Ruaha National Park", location: "Iringa, Tanzania", park: "Ruaha National Park", description: "Ruaha is Tanzania's largest park, famous for wild landscapes and healthy populations of large predators and elephants.", activities: ["Game drives", "Walking safaris"], animals: ["Lion", "Elephant", "Leopard"] },
  { id: "saadani-national-park", title: "Saadani National Park", location: "Pangani Region, Tanzania", park: "Saadani National Park", description: "Saadani is Tanzania's only wildlife park bordering the ocean, combining beach relaxation with wildlife watching.", activities: ["Beach safaris", "Game drives"], animals: ["Elephant", "Buffalo", "Wild dog"] },
  { id: "saanane-national-park", title: "Saanane National Park", location: "Mwanza, Tanzania", park: "Saanane National Park", description: "Saanane is an island park on Lake Victoria, ideal for short wildlife trips close to Mwanza city.", activities: ["Nature walks", "Bird watching"], animals: ["Monkey", "Antelope", "Birds"] },
  { id: "selous-game-reserve", title: "Nyerere (Selous)", location: "Morogoro, Tanzania", park: "Nyerere National Park", description: "Serengeti's southern neighbour, Nyerere offers river safaris, remote wilderness and abundant wildlife away from the crowds.", activities: ["Boat safaris", "Walking safaris"], animals: ["Hippo", "Crocodile", "Lion"] },
  { id: "serengeti-national-park", title: "Serengeti National Park", location: "Tanzania", park: "Serengeti National Park", description: "The Serengeti is famed for its great migration and offers some of Africa's best big-cat and plains game viewing.", activities: ["Game drives", "Hot air balloon safaris"], animals: ["Lion", "Elephant", "Leopard"] },
  { id: "tarangire-national-park", title: "Tarangire National Park", location: "Tanzania", park: "Tarangire National Park", description: "Tarangire features large elephant herds, ancient baobabs and excellent predator sightings in a beautiful riverine terrain.", activities: ["Game drives", "Night safaris"], animals: ["Elephant", "Leopard", "Buffalo"] },
  { id: "udzungwa-mountains", title: "Udzungwa Mountains", location: "Morogoro, Tanzania", park: "Udzungwa Mountains National Park", description: "The Udzungwa Mountains are a biodiversity hotspot of rainforest, rare primates and dramatic waterfalls.", activities: ["Hiking", "Waterfall walks"], animals: ["Colobus monkey", "Chameleons", "Birds"] },
];

/* ── Kilimanjaro & Meru trekking offers ─────────────── */
export type TrekkingOffer = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  price?: string;
  difficulty: "Moderate" | "Challenging" | "Tough";
  description: string;
  highlights: string[];
};

export const trekkingOffers: TrekkingOffer[] = [
  { id: "lemosho-route", title: "7 Days Lemosho Route", subtitle: "Best acclimatization, stunning Shira Plateau views.", duration: "7 Days · Kilimanjaro", price: "$1,690", difficulty: "Challenging", description: "Lemosho Route is one of the best routes for acclimatization on Kilimanjaro. It is less used and offers a stunning way up to the Shira Plateau.", highlights: ["Excellent acclimatization profile", "Quiet trail with scenic vistas", "High summit success rate"] },
  { id: "machame-route", title: "6 Days Machame Route", subtitle: "The 'Whiskey Route', tough but spectacularly beautiful.", duration: "6 Days · Kilimanjaro", price: "$1,452", difficulty: "Challenging", description: "Machame route is also known as the Whiskey Route. It is a tough climb compared to Marangu, with dramatic scenery and a rewarding summit.", highlights: ["Popular scenic route", "Better acclimatization than shorter routes", "High summit potential"] },
  { id: "rongai-route", title: "6 Days Rongai Route", subtitle: "One of the easiest routes with the highest success rate.", duration: "6 Days · Kilimanjaro", price: "$1,476", difficulty: "Moderate", description: "Rongai Route is one of the easiest routes with a high success rate. The route starts on the north side of Kilimanjaro, just south of the Kenyan border.", highlights: ["Gentler gradients", "Less crowded trail", "Great for first-time climbers"] },
  { id: "umbwe-route", title: "7 Days Umbwe Route", subtitle: "Steeper and more direct, for experienced trekkers.", duration: "7 Days · Kilimanjaro", price: "$1,661", difficulty: "Tough", description: "Umbwe is one of the steeper and shorter routes than the Machame route. It is mainly for those with hiking experience, though anyone who is fit can attempt it.", highlights: ["Steep and direct route", "Scenic wilderness", "Suitable for stronger trekkers"] },
  { id: "marangu-6", title: "6 Days Marangu Route", subtitle: "The only route with sleeping huts at every campsite.", duration: "6 Days · Kilimanjaro", price: "$1,397", difficulty: "Moderate", description: "Marangu climbing is the least expensive route on Kilimanjaro. It is the only route with comfortable sleeping huts at every campsite.", highlights: ["Huts instead of tents", "Well-established trail", "Comfort-focused itinerary"] },
  { id: "marangu-5", title: "5 Days Marangu Route", subtitle: "A quicker Marangu ascent with comfortable huts.", duration: "5 Days · Kilimanjaro", price: "$1,220", difficulty: "Moderate", description: "This is the only route with the comforts of sleeping huts at every campsite, making it the least expensive and most comfortable Kilimanjaro climb.", highlights: ["Shorter itinerary", "Huts and facilities", "Classic Kilimanjaro experience"] },
  { id: "mount-meru-4", title: "4 Days Mount Meru", subtitle: "A panoramic warm-up to Kilimanjaro.", duration: "4 Days · Mount Meru", difficulty: "Moderate", description: "Mount Meru trek in 4 days is a fantastic mountain adventure offering panoramic views and an introductory high-altitude climb.", highlights: ["Scenic summit", "Great acclimatization", "Less crowded than Kilimanjaro"] },
  { id: "mount-meru-3", title: "3 Days Mount Meru", subtitle: "A more intense 3-day trek to East Africa's fifth-highest peak.", duration: "3 Days · Mount Meru", difficulty: "Challenging", description: "Experience one of the world's most exciting and challenging treks in a 3-day Mount Meru itinerary that leads to the base camp of East Africa's peak.", highlights: ["Challenging ascent", "Compact itinerary", "Great views and wilderness"] },
];

export const trekkingIncludes = [
  "All transfers to the mountain and back to your Moshi hotel",
  "Airport pick up and drop off",
  "2 nights accommodation before and after the trek",
  "Professional, experienced mountain guides",
  "All park fees and rescue fees",
  "All meals while on the mountain",
  "Guides, porters and cook salaries",
  "Quality mess tents with tables and chairs",
  "Large portions of fresh, healthy, nutritious food",
  "Clean, purified drinking water",
];

export const trekkingExcludes = [
  "Tanzania visa cost (USD 50 for most nationalities, USD 100 for U.S. citizens)",
  "Personal expenses",
  "Meals not listed above",
  "Optional tours",
  "Tips for the mountain crew",
];

/* ── Trust signals ──────────────────────────────────── */
export type Stat = { value: number; suffix?: string; prefix?: string; label: string };

export const stats: Stat[] = [
  { value: 2, suffix: "+", label: "Years guiding Tanzania" },
  { value: 2000, suffix: "+", label: "Happy travellers" },
  { value: 18, suffix: "", label: "Parks & reserves" },
  { value: 98, suffix: "%", label: "Summit success rate" },
];

export type Value = { title: string; body: string; icon: string };

export const whyUs: Value[] = [
  { title: "Expert local guides", body: "Born-and-raised guides with deep wildlife knowledge and a sixth sense for the perfect sighting.", icon: "compass" },
  { title: "Tailor-made itineraries", body: "Every journey is designed around you, your pace, your interests, your budget. Never off-the-shelf.", icon: "map" },
  { title: "Transparent pricing", body: "Clear, competitive quotes with no hidden costs and guaranteed departures, we never cancel on you.", icon: "shield" },
  { title: "24/7 support", body: "From your first message to your flight home, a real person is with you every step of the way.", icon: "headset" },
];

/* ── Testimonials ───────────────────────────────────── */
export type Testimonial = { quote: string; name: string; trip: string; rating: number };

export const testimonials: Testimonial[] = [
  { quote: "The most seamless trip we've ever taken. Our guide found a leopard within an hour of entering the Serengeti, pure magic.", name: "Amara & James", trip: "8-day Northern Circuit", rating: 5 },
  { quote: "FurahaYao planned every detail flawlessly. Summiting Kilimanjaro at sunrise is something I'll never forget.", name: "Daniel R.", trip: "Lemosho Route", rating: 5 },
  { quote: "From the Ngorongoro Crater to the beaches of Zanzibar, it was the honeymoon of our dreams. Worth every penny.", name: "Sofia M.", trip: "Safari & Zanzibar", rating: 5 },
];

/* ── FAQ ────────────────────────────────────────────── */
export type FAQ = { q: string; a: string };

export const faqs: FAQ[] = [
  { q: "What documents are needed to travel to Tanzania?", a: "Travellers must generally present a valid passport, and a visa is required. When obtaining your visa, be sure to apply on the official website: https://visa.immigration.go.tz." },
  { q: "What vaccines are recommended before travelling to Tanzania?", a: "Vaccinations such as yellow fever and malaria prophylaxis are generally recommended. It is strongly advised to contact your healthcare professional for personalised advice at least one month before departure." },
  { q: "What is the best time to go on safari in Tanzania?", a: "Tanzania has four distinct seasons. Dry season (June-October) brings sunny days and wildlife near waterholes. The short rains (November-December) green the landscape and bring newborn animals. The hot season (December-February) offers unique wildlife and lush scenery. The main rains (March-May) are the least suited to safaris." },
  { q: "Can I customise an itinerary or combine a safari with Zanzibar?", a: "Yes, every itinerary is customised. We offer everything from luxury to standard safaris, and Zanzibar beach extensions are one of our most popular add-ons. Contact us to design the perfect trip." },
  { q: "What means of transport are used for safaris?", a: "Safaris can be done by 4x4, on foot, or even by hot air balloon. The choice depends on the type of experience you are looking for." },
  { q: "What is the cancellation policy?", a: "Once a reservation is confirmed by deposit: more than 60 days before departure, 40% of the total is due; 60-30 days before, 60% is due; less than 30 days before, 100% is due. Cancellations must be notified by email, and the email date is used for the request." },
  { q: "What cultural aspects should I consider in Tanzania?", a: "Tanzania has a rich and diverse culture. Respect local customs, dress modestly when appropriate, and stay open to learning from the communities you meet." },
  { q: "Any precautions to take before and during the safari?", a: "Dress appropriately for the season, avoid noisy behaviour around wildlife, and always follow your guide's safety guidance for a safe and unforgettable experience." },
];

/* Known remote hero image (Cloudinary is allowed in next.config) */
export const HERO_POSTER =
  "https://res.cloudinary.com/dtvuqa0i2/image/upload/v1768550116/Safari_6_dekouj.jpg";

/* Live site URL + absolute logo URL (emails need absolute image URLs) */
export const SITE_URL = "https://furahayaosafaris.com";
export const LOGO_URL = `${SITE_URL}/images/furahayao-logo.png`;

export const CONTACT = {
  whatsapp: "255755392290",
  whatsappDisplay: "+255 755 392 290",
  phoneDisplay: "+255 755 392 290",
  email: "info@furahayaosafaris.com",
  office: "Arusha, Tanzania",
  instagram: "https://www.instagram.com/furahayao_safaris/",
  facebook: "https://www.facebook.com/furahayao_safaris",
};

/* Popular destinations shown in the footer */
export const popularDestinations = [
  { label: "Serengeti National Park", href: "/destinations#destinations" },
  { label: "Ngorongoro Crater", href: "/destinations#destinations" },
  { label: "Tarangire National Park", href: "/destinations#destinations" },
  { label: "Lake Manyara", href: "/destinations#other-destinations" },
  { label: "Kilimanjaro Trek", href: "/trekking" },
  { label: "Zanzibar Getaways", href: "/safaris" },
];

/* Image used as a destination card/modal photo (sourced to /public/images/stock) */
export const destinationImage = (id: string) => `/images/stock/${id}.webp`;

/* Trekking route image (Kilimanjaro vs Meru) */
export const trekkingImage = (id: string) =>
  id.startsWith("mount-meru")
    ? "/images/stock/walking-safari-arusha.webp"
    : id.includes("lemosho") || id.includes("rongai")
      ? "/images/stock/kilimanjaro.jpg"
      : "/images/stock/kilimanjaro-trek.webp";

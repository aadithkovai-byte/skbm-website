export const SITE_NAME = "Sri Kovai Bhairavaa Motocrafts";
export const SITE_SHORT = "SKBM";
export const SITE_TAGLINE = "Ride Excellence. Service Excellence.";
export const SITE_EST = "2022";
export const SITE_DESCRIPTION =
  "Authorized Vespa and Aprilia dealership in Coimbatore for premium sales, service, genuine parts, and test rides.";
export const SITE_URL = "https://www.skbm.in";

export const PHONE_PRIMARY = "9626647799";
export const PHONE_SECONDARY = "9092437799";
export const WHATSAPP_NUMBER = "919626647799";

// Primary address = Sungam Junction flagship (main showroom, since 2022)
export const ADDRESS = {
  line1: "Sungam Junction",
  line2: "Ramanathapuram, Coimbatore",
  city: "Coimbatore",
  state: "Tamil Nadu",
  full: "Sungam Junction, Ramanathapuram, Coimbatore, Tamil Nadu",
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/sri_kovai_bhairavaa_motocrafts/",
  facebook:
    "https://www.facebook.com/people/Srikovaibhairavaamotocrafts/61584549082263/",
};

// Map links — share links open directions when clicked
export const MAPS_SUNGAM = "https://maps.app.goo.gl/zSC7pSQcgkDiXEss5";
export const MAPS_SULUR = "https://maps.app.goo.gl/VBs7vrPwruht3faQ6";

// Embeds resolve the business by name + location
export const GOOGLE_MAPS_EMBED_SUNGAM =
  "https://www.google.com/maps?q=Sri+Kovai+Bhairavaa+Motocrafts+Sungam+Junction+Ramanathapuram+Coimbatore&output=embed";
export const GOOGLE_MAPS_EMBED_SULUR =
  "https://www.google.com/maps?q=Sri+Kovai+Bhairavaa+Motocrafts+Sulur+Coimbatore&output=embed";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Vespa", href: "/vespa" },
  { label: "Aprilia", href: "/aprilia" },
  { label: "Service", href: "/service" },
  { label: "Contact", href: "/contact" },
];

// Sungam = main flagship (since 2022). Sulur = newly opened second.
export const SHOWROOMS = [
  {
    name: "Sungam Junction",
    type: "Flagship showroom · since 2022",
    address: "Sungam Junction, Ramanathapuram, Coimbatore",
    phone: PHONE_PRIMARY,
    maps: MAPS_SUNGAM,
    embed: GOOGLE_MAPS_EMBED_SUNGAM,
    main: true,
  },
  {
    name: "Sulur",
    type: "Newly opened showroom",
    address: "Next to Aadhi Nexa, Trichy Road, Sulur, Coimbatore",
    phone: PHONE_SECONDARY,
    maps: MAPS_SULUR,
    embed: GOOGLE_MAPS_EMBED_SULUR,
    main: false,
  },
];

export const HOME_PROOF_STRIP = [
  {
    title: "Authorized Piaggio dealer",
    description: "Official Vespa and Aprilia sales, service, and manufacturer-backed support.",
  },
  {
    title: "Two Coimbatore showrooms",
    description:
      "Sungam Junction flagship since 2022 and our newly opened Sulur showroom — serving riders across Tamil Nadu.",
  },
  {
    title: "Genuine parts & service",
    description: "Factory-trained technicians and certified Piaggio components, every time.",
  },
  {
    title: "WhatsApp-first assistance",
    description: "Fast enquiry handling for test rides, availability, finance, and service.",
  },
];

export const TRUST_PILLARS = [
  {
    title: "Authority you can verify",
    description:
      "Every purchase and service is anchored in official Piaggio authorization, warranty support, and genuine certification.",
  },
  {
    title: "Friction-free decisions",
    description:
      "Clear navigation, honest information, and direct contact details — from first click to showroom visit.",
  },
  {
    title: "Luxury with local relevance",
    description:
      "Italian aspiration balanced with what Coimbatore riders actually need: location, test rides, and real support.",
  },
  {
    title: "Confidence after the sale",
    description:
      "Service, parts, and trained technicians are here long after delivery — so ownership stays effortless.",
  },
];

export const SERVICE_STEPS = [
  {
    title: "Choose your ride",
    description:
      "Compare Vespa style and Aprilia performance without getting lost in clutter.",
  },
  {
    title: "Visit or test ride",
    description:
      "Walk into either showroom and move from interest to lived experience the same day.",
  },
  {
    title: "Own with confidence",
    description:
      "Stay supported through service, genuine parts, and direct WhatsApp assistance.",
  },
];

// Model poster images are shown WHOLE (no cropping) — width/height are the
// files' intrinsic dimensions so cards render each poster at its natural shape.
export const VESPA_MODELS = [
  {
    name: "Vespa ZX",
    tagline: "The icon, ready for every day.",
    description:
      "Classic Vespa proportions with polished city comfort and effortless everyday elegance.",
    image: "/images/poster-vespa-zx.webp",
    width: 1447,
    height: 1087,
  },
  {
    name: "Vespa",
    tagline: "The original. Unmistakable.",
    description:
      "The silhouette that started it all — pure Italian design, unchanged in spirit since 1946.",
    image: "/images/poster-vespa-base.webp",
    width: 1400,
    height: 934,
  },
  {
    name: "Vespa S",
    tagline: "Bold city icon.",
    description:
      "A sportier stance, blacked-out details, and a little more attitude for the daily ride.",
    image: "/images/poster-vespa-s.webp",
    width: 1122,
    height: 1402,
  },
  {
    name: "Vespa Tech / Qala",
    tagline: "Crafted with character.",
    description:
      "The most expressive Vespa — artisan detailing and modern tech in one head-turning machine.",
    image: "/images/poster-vespa-tech.webp",
    width: 1122,
    height: 1402,
  },
];

export const APRILIA_MODELS = [
  {
    name: "Aprilia Storm 125",
    tagline: "Built for bolder streets.",
    description:
      "A rugged, youthful Aprilia for riders who want a more aggressive design language from the start.",
    image: "/images/poster-aprilia-storm.webp",
    width: 802,
    height: 1086,
  },
  {
    name: "Aprilia SR 175",
    tagline: "Pure street energy.",
    description:
      "A sharp, race-inspired scooter tuned for responsive handling and unmistakable Aprilia character.",
    image: "/images/poster-aprilia-sr175.webp",
    width: 1400,
    height: 1048,
  },
  {
    name: "Aprilia SR 175 Tribute",
    tagline: "Racing colours, road legal.",
    description:
      "The SR 175 dressed in Aprilia's racing livery — for riders who want the paddock look every day.",
    image: "/images/poster-aprilia-tribute.webp",
    width: 1535,
    height: 1024,
  },
];

// Heritage timeline (restored from the v2 design at the user's request; 2022 = real founding year)
export const HERITAGE_TIMELINE = [
  {
    year: "1946",
    title: "The Vespa is born",
    description:
      "Enrico Piaggio unveils the Vespa in post-war Italy — a revolution on two wheels that would change urban mobility forever.",
  },
  {
    year: "1962",
    title: "The Audrey Hepburn effect",
    description:
      "Roman Holiday makes Vespa the icon of freedom and style. Hollywood meets Italian design.",
  },
  {
    year: "1992",
    title: "Aprilia joins Piaggio",
    description:
      "Racing heritage merges with Italian craftsmanship. Aprilia's 54 world titles become part of the family.",
  },
  {
    year: "2012",
    title: "Vespa reaches India",
    description:
      "Piaggio brings the Vespa to Indian roads — premium scootering arrives in a new market.",
  },
  {
    year: "2022",
    title: "SKBM opens in Coimbatore",
    description:
      "Sri Kovai Bhairavaa Motocrafts opens at Sungam Junction — Coimbatore's authorized destination for Vespa & Aprilia.",
  },
];

// Real Google reviews (fetched from the public listing on 2026-07-06; quotes verbatim)
export const GOOGLE_RATING = "4.4";
export const GOOGLE_REVIEW_COUNT = "318";
export const GOOGLE_REVIEWS = [
  {
    name: "Bena Yasmine",
    context: "New Vespa owner",
    quote:
      "Harish made the whole buying process smooth, transparent, and stress-free. His professionalism and customer-friendly attitude truly stand out.",
  },
  {
    name: "Shanmugam",
    context: "Vespa delivery day",
    quote:
      "The delivery experience was exceptional — the scooter was beautifully prepared, neatly presented, and handed over on time.",
  },
  {
    name: "Feroz Khan",
    context: "Aprilia service",
    quote:
      "The pick-up and drop-off service was seamless. Thanks to Mr. Vijay and the service team for their support and valuable assistance.",
  },
];

// Pre-filled WhatsApp enquiry for a model's on-road price
export function whatsappPriceLink(model: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi SKBM! I'd like the on-road price of the ${model}.`
  )}`;
}

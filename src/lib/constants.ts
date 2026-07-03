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
    description: "Sungam Junction flagship since 2022, with our newly opened Sulur showroom.",
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

export const VESPA_MODELS = [
  {
    name: "Vespa ZX",
    tagline: "The icon, ready for every day.",
    description:
      "Classic Vespa proportions with polished city comfort and effortless everyday elegance.",
    image: "/images/model-vespa-zx.webp",
  },
  {
    name: "Vespa",
    tagline: "The original. Unmistakable.",
    description:
      "The silhouette that started it all — pure Italian design, unchanged in spirit since 1946.",
    image: "/images/model-vespa-base.webp",
  },
  {
    name: "Vespa S",
    tagline: "Bold city icon.",
    description:
      "A sportier stance, blacked-out details, and a little more attitude for the daily ride.",
    image: "/images/model-vespa-s.webp",
  },
  {
    name: "Vespa Tech / Qala",
    tagline: "Crafted with character.",
    description:
      "The most expressive Vespa — artisan detailing and modern tech in one head-turning machine.",
    image: "/images/model-vespa-tech.webp",
  },
];

export const APRILIA_MODELS = [
  {
    name: "Aprilia Storm 125",
    tagline: "Built for bolder streets.",
    description:
      "A rugged, youthful Aprilia for riders who want a more aggressive design language from the start.",
    image: "/images/model-aprilia-storm125.webp",
  },
  {
    name: "Aprilia SR 175",
    tagline: "Pure street energy.",
    description:
      "A sharp, race-inspired scooter tuned for responsive handling and unmistakable Aprilia character.",
    image: "/images/model-aprilia-sr175.webp",
  },
  {
    name: "Aprilia SR 175 Tribute",
    tagline: "Racing colours, road legal.",
    description:
      "The SR 175 dressed in Aprilia's racing livery — for riders who want the paddock look every day.",
    image: "/images/model-aprilia-sr175-tribute.webp",
  },
];

// Pre-filled WhatsApp enquiry for a model's on-road price
export function whatsappPriceLink(model: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi SKBM! I'd like the on-road price of the ${model}.`
  )}`;
}

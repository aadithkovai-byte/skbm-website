export const SITE_NAME = "Sri Kovai Bhairavaa Motocrafts";
export const SITE_SHORT = "SKBM";
export const SITE_TAGLINE = "Ride Excellence. Service Excellence.";
export const SITE_EST = "2022";
export const SITE_DESCRIPTION =
  "Authorized Vespa and Aprilia dealership in Coimbatore for premium sales, service, genuine parts, and test rides.";

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
  facebook: "https://facebook.com/skbmotocrafts",
  youtube: "https://youtube.com/@skbmotocrafts",
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
    name: "Vespa VXL",
    tagline: "The icon, refined.",
    description:
      "Classic Vespa proportions with polished city comfort, signature detailing, and effortless everyday elegance.",
  },
  {
    name: "Vespa SXL",
    tagline: "Sharper lines, same soul.",
    description:
      "A sportier Vespa silhouette for riders who want the heritage with a little more edge.",
  },
  {
    name: "Vespa ZX",
    tagline: "Easy style for daily motion.",
    description:
      "A practical city-ready Vespa that still carries the unmistakable personality the brand is known for.",
  },
];

export const APRILIA_MODELS = [
  {
    name: "Aprilia SXR 160",
    tagline: "Race spirit, premium comfort.",
    description:
      "A maxi-scooter stance with Aprilia attitude for riders who want performance presence in daily use.",
  },
  {
    name: "Aprilia Storm 125",
    tagline: "Built for bolder streets.",
    description:
      "A rugged, youthful Aprilia for riders who want a more aggressive design language from the start.",
  },
  {
    name: "Aprilia SR 125",
    tagline: "Pure street energy.",
    description:
      "A sharp, race-inspired commuter tuned for responsive handling and unmistakable Aprilia character.",
  },
];

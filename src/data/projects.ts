export interface Project {
  slug: string;
  name: string;
  tag: string;
  description: string;
  url: string;
  repo: string;
  pw: string;
  accent: string;
  shape: string;
  image: string;
  features: string[];
}

export const projects: Project[] = [
  {
    slug: "otap",
    name: "OTAP",
    tag: "Anime figure shop",
    description: "Custom Shopify 2.0 theme for an anime figure e-commerce store. Features product filtering, wishlist functionality, and a clean checkout flow optimized for collectors.",
    url: "https://otap-2.myshopify.com/",
    repo: "https://github.com/ArnavAsif/Otap",
    pw: "1",
    accent: "bg-accent",
    shape: "△",
    image: "https://i.ibb.co/yLyMVYz/hero.png",
    features: ["Custom product grid", "Quick view modal", "Mobile-first design", "SEO optimization"],
  },
  {
    slug: "brqcom",
    name: "BRQCOM",
    tag: "Bro & Compagnie — pet shop",
    description: "Pet supplies e-commerce store with playful design. Includes breed-specific product recommendations, subscription boxes, and a loyalty program integration.",
    url: "https://brqcom.myshopify.com/",
    repo: "https://github.com/ArnavAsif/Bro-Compagnie",
    pw: "1",
    accent: "bg-secondary",
    shape: "●",
    image: "https://i.ibb.co/nsTfKqNL/hero-desktop.png",
    features: ["Breed filter system", "Subscription management", "Loyalty rewards", "Social proof widgets"],
  },
  {
    slug: "mangamint",
    name: "MangaMint",
    tag: "Anime manga shop",
    description: "Manga and anime merchandise store with series-based navigation. Custom reading list feature and pre-order management system.",
    url: "https://mangamint-2.myshopify.com/",
    repo: "https://github.com/ArnavAsif/Manga-Mint",
    pw: "1",
    accent: "bg-tertiary",
    shape: "✦",
    image: "https://i.ibb.co/fzJ6zTHf/hero-desktop.png",
    features: ["Series navigation", "Pre-order system", "Reading lists", "Restock alerts"],
  },
  {
    slug: "cybernexus",
    name: "CyberNexus",
    tag: "Gaming gear shop",
    description: "Gaming peripherals and accessories store. Features spec comparisons, RGB lighting previews, and compatibility checkers for PC builders.",
    url: "https://cybernexus-8959.myshopify.com/",
    repo: "https://github.com/ArnavAsif/CyberNexus",
    pw: "1",
    accent: "bg-quaternary",
    shape: "◆",
    image: "https://i.ibb.co/vxVrwp1B/hero-desktop.png",
    features: ["Spec comparison tool", "Build configurator", "RGB preview", "Warranty tracker"],
  },
  {
    slug: "vantique",
    name: "Vantique",
    tag: "Vintage lifestyle",
    description: "Curated vintage and retro lifestyle products. Hand-picked items with detailed condition notes and provenance stories.",
    url: "https://vantique-2780.myshopify.com/",
    repo: "https://github.com/ArnavAsif/Vantique",
    pw: "1",
    accent: "bg-secondary",
    shape: "✿",
    image: "https://i.ibb.co/wZj3YFS9/Main-img.png",
    features: ["Condition grading", "Provenance stories", "Curated collections", "Auction features"],
  },
  {
    slug: "fast-clean",
    name: "Fast Clean",
    tag: "Cleaning services",
    description: "Service-based website for a cleaning company. Online booking system, service area checker, and customer review integration.",
    url: "https://fast-clean-9098.myshopify.com/",
    repo: "https://github.com/ArnavAsif/fast-and-clean",
    pw: "1",
    accent: "bg-accent",
    shape: "▲",
    image: "https://i.ibb.co/kVhp2j3M/hero-desktop.png",
    features: ["Online booking", "Service area map", "Price calculator", "Review system"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

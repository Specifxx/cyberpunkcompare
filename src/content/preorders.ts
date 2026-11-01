import type { PreorderCopy } from "@/lib/site-types";

// Copy for /preorders and /preorders/<set slug>. Facts: WeirdCo's release
// schedule (19 June 2026 update), MSRPs announced at GAMA Expo 2026, checked
// 2026-11-01. A fact we can't source is left out; a set without copy here
// still gets a page from its data.
export const PREORDER_COPY: PreorderCopy = {
  intro:
    "Every upcoming Cyberpunk TCG release, each with its own page comparing every store's booster box, starter deck and sealed pre-order price, cheapest first in your currency. Sets stay listed for six weeks after release, when the most people shop for a box.",
  faq: [
    { q: "When do Cyberpunk TCG pre-orders open?", a: "Stores list a release as soon as their distributor confirms an allocation. Each release page adds a store as soon as its listing appears, and refreshes every store daily." },
    { q: "Will Cyberpunk TCG be reprinted?", a: "WeirdCo's supply policy (August 2026) says it will not reprint the same set or configuration again, so each print run is all there will be of that product." },
    { q: "Do the prices include shipping?", a: "No. Every price is the store's item price before shipping, in the store's own currency, so compare the stores in your market." },
  ],
  sets: {
    "welcome-to-night-city-retail": {
      intro:
        "Every store selling <b>Welcome to Night City</b>, the first Cyberpunk TCG set at retail, compared cheapest first in your currency. Retail booster boxes hold 24 packs; the Kickstarter Beta boxes held 36 and are a separate product.",
      facts: [
        { label: "Retail release", value: "6 November 2026" },
        { label: "Booster box", value: "24 packs · US$119.90 MSRP" },
        { label: "Starter decks", value: "The Heist, Embracing Power · US$29.99" },
        { label: "Pre-release", value: "Weekend of 30 October 2026" },
      ],
      faq: [
        { q: "When does Cyberpunk TCG release?", a: "Welcome to Night City releases at retail on 6 November 2026, after pre-release events on the weekend of 30 October." },
        { q: "What is the difference between the Beta and Retail booster box?", a: "Both hold the same 12-card packs of Welcome to Night City. The Beta box (36 packs, US$180 MSRP) went to Kickstarter backers and registered stores and has Iconic card numbers the Retail box lacks; the Retail box has 24 packs at US$119.90." },
      ],
    },
  },
};

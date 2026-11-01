import type { Post } from "./types";

// Facts: WeirdCo's release schedule (19 June 2026 dev-blog update), the
// Kickstarter campaign page totals, GAMA Expo 2026 MSRPs, TCGplayer seller blog
// (31 Aug 2026), Cardmarket's announcement. Checked 2026-11-01.
export const post: Post = {
  slug: "cyberpunk-tcg-release-date-where-to-buy",
  title: "Cyberpunk TCG release date, products and where to buy",
  description: "When Cyberpunk TCG's Welcome to Night City releases, what's in each product and its MSRP, and where to buy booster boxes and starter decks for the best price.",
  date: "2026-11-01",
  keywords: ["cyberpunk tcg release date", "where to buy cyberpunk tcg", "cyberpunk tcg starter deck", "welcome to night city release date", "cyberpunk tcg msrp"],
  html: `
<p>Cyberpunk TCG is the trading card game set in CD PROJEKT RED's Night City, made by WeirdCo under licence. Its Kickstarter raised over US$28 million from more than 50,000 backers, the most for any tabletop game. The first set, <b>Welcome to Night City</b>, reaches stores this month.</p>

<h2>Release timeline</h2>
<ul>
<li><b>September 2026:</b> Kickstarter backers receive the Beta print; in-store Beta events.</li>
<li><b>Weekend of 30 October 2026:</b> pre-release events.</li>
<li><b>6 November 2026:</b> retail release.</li>
</ul>
<p>The second set will bring in Cyberpunk: Edgerunners; no name or date has been announced.</p>

<h2>Products and MSRP</h2>
<ul>
<li><b>Retail booster box</b> (24 packs): US$119.90</li>
<li><b>Starter decks</b>, The Heist and Embracing Power: US$29.99 each</li>
<li><b>Beta booster box</b> (36 packs, Kickstarter print): US$180</li>
<li>Pre-release kits and booster cases are sold too. See <a href="/blog/cyberpunk-tcg-beta-vs-retail-booster-box">Beta vs Retail</a> for how the two boxes differ.</li>
</ul>

<h2>Where to buy</h2>
<p>Hundreds of game stores carry it in the US, Canada, the UK, Europe, Australia and New Zealand. TCGplayer has listed Cyberpunk TCG since 31 August 2026, and Cardmarket supports it in Europe. Prices differ a lot from store to store, especially in release week, so check before you buy: the <a href="/sealed">sealed price list</a> compares every store we track, TCGplayer and the cheapest eBay listing, cheapest first in your currency, and the <a href="/stores">stores page</a> lists them all.</p>

<h2>Tips</h2>
<ol>
<li>Count postage: one order from one store often beats the cheapest box plus shipping elsewhere.</li>
<li>Check whether a box listing is Beta or Retail before you pay.</li>
<li>Singles are often cheapest a few weeks after release, once boxes are opened.</li>
</ol>
`,
  faq: [
    { q: "When does Cyberpunk TCG come out?", a: "Welcome to Night City releases at retail on 6 November 2026, after pre-release events on the weekend of 30 October. Kickstarter backers received the Beta print in September." },
    { q: "How much is a Cyberpunk TCG booster box?", a: "The Retail booster box's MSRP is US$119.90 for 24 packs. Store prices vary, so compare them on the sealed price list." },
  ],
};

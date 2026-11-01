import type { Post } from "./types";

// Facts: WeirdCo (supply policy 7 Aug 2026, release schedule 19 Jun 2026),
// GAMA Expo 2026 MSRPs, TCGplayer's catalogue (category 92) on 2026-11-01.
export const post: Post = {
  slug: "cyberpunk-tcg-beta-vs-retail-booster-box",
  title: "Cyberpunk TCG Beta vs Retail booster box: what's the difference?",
  description: "Beta or Retail? How the two Welcome to Night City booster boxes differ in packs, price and Iconic cards, and how to check what each sells for at every store today.",
  date: "2026-11-01",
  keywords: ["cyberpunk tcg beta vs retail", "cyberpunk tcg beta booster box", "welcome to night city retail booster box", "cyberpunk tcg booster box price", "cyberpunk tcg beta box worth it"],
  html: `
<p>Welcome to Night City, Cyberpunk TCG's first set, comes in two booster boxes that share a name and most of their cards but not their price. Stores and sellers don't always say which one they mean, so here is how to tell them apart.</p>

<h2>The short version</h2>
<ul>
<li><b>Beta booster box:</b> 36 packs, US$180 MSRP. Sold to Kickstarter backers and registered stores from September 2026.</li>
<li><b>Retail booster box:</b> 24 packs, US$119.90 MSRP. On shelves from 6 November 2026.</li>
<li>Both use the same 12-card packs of the same set. The Beta print carries Iconic card numbers that the Retail print does not, and the Iconic cards the two share have different artwork.</li>
</ul>

<h2>Why the Beta box costs more</h2>
<p>WeirdCo's supply policy says it will not reprint the same set or configuration again. The Beta run was sized for backers and launch stores, so what exists is all there will be, and it trades well above its MSRP. The Retail box is the one most stores will restock through launch.</p>

<h2>How to tell which one a listing is</h2>
<ol>
<li>Look for the word <b>Beta</b>, a pack count of <b>36</b>, or "Kickstarter". Any of those is the Beta box.</li>
<li>A listing that says <b>24 packs</b> or "Retail", or just "Booster Box" from a store taking release-week orders, is the Retail box.</li>
<li>When a listing doesn't say, ask the seller before you pay a Beta price.</li>
</ol>
<p>On this site the two are separate products with separate prices, and a store listing only counts toward one of them when its title says which: Beta (or 36 packs, or Kickstarter) for the Beta box, otherwise Retail.</p>

<h2>Compare them now</h2>
<p>The <a href="/sealed/booster-box">booster box price list</a> shows both boxes with every store's price, TCGplayer's market price and the cheapest eBay listing, cheapest first in your currency. Release-week prices are on the <a href="/preorders">pre-order page</a>.</p>
`,
  faq: [
    { q: "How many packs are in a Cyberpunk TCG booster box?", a: "The Retail box has 24 packs and the Beta box had 36. Both use the same 12-card packs." },
    { q: "Is the Beta booster box going to be reprinted?", a: "WeirdCo says it will not reprint the same set or configuration again." },
  ],
};

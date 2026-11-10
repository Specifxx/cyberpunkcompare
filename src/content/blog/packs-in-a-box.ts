import type { Post } from "./types";

// Facts: pack counts and the Retail MSRP from WeirdCo (GAMA Expo 2026; the same figures as the launch-week and Beta vs Retail
// posts), prices from this site's import and TCGplayer market prices on 10 November 2026. No pull rates: WeirdCo has not
// published them, so none are claimed.
export const post: Post = {
  slug: "how-many-packs-in-a-cyberpunk-tcg-booster-box",
  title: "How many packs are in a Cyberpunk TCG booster box, and what does a pack cost?",
  description: "A Retail Welcome to Night City box has 24 packs and a Beta box 36. What each pack works out to at today's box prices, and when a loose pack is the better buy.",
  date: "2026-11-10",
  keywords: ["how many packs in a cyberpunk booster box", "cyberpunk tcg booster box packs", "cyberpunk tcg pack price", "cyberpunk tcg retail booster box", "cyberpunk tcg beta booster box packs"],
  html: `
<p>Short answer: a <b>Retail</b> Welcome to Night City booster box has <b>24 packs</b> (MSRP US$119.90), and a <b>Beta</b> box, the first printing sold to Kickstarter backers and launch stores, has <b>36 packs</b>. Here is what that means per pack at today's prices.</p>

<h2>Price per pack, 10 November 2026</h2>
<table>
<thead><tr><th></th><th>Retail</th><th>Beta</th></tr></thead>
<tbody>
<tr><td>Packs in a box</td><td>24</td><td>36</td></tr>
<tr><td>Box, TCGplayer market</td><td>US$110.35</td><td>US$305.39</td></tr>
<tr><td>Per pack, bought as a box</td><td>US$4.60</td><td>US$8.48</td></tr>
<tr><td>One loose pack, TCGplayer market</td><td>US$7.05</td><td>US$13.03</td></tr>
</tbody>
</table>
<p>Bought as a box, a Retail pack costs about two thirds of a loose pack. Loose packs only make sense if you want a few to open, not a set to build.</p>

<h2>Retail or Beta?</h2>
<p>Both boxes hold the same 172 cards; Beta cards carry a B before the number and sell for more as the first printing. A listing that says Beta, 36 packs or Kickstarter is the Beta box. The full comparison is in <a href="/blog/cyberpunk-tcg-beta-vs-retail-booster-box">Beta vs Retail booster box</a>.</p>

<h2>What is in the packs</h2>
<p>WeirdCo has not published pull rates, so we don't guess them. What we can show is what the cards are worth: commons and uncommons sell for cents, while the 18 Iconic Legends start around US$45 and the four Iconic Secrets at US$600. The <a href="/blog/cyberpunk-tcg-card-list-prices">card list with prices</a> breaks the set down by rarity.</p>

<h2>Today's price</h2>
<p>These numbers move every day. The <a href="/card/welcome-to-night-city-retail-booster-box">Retail box</a>, <a href="/card/welcome-to-night-city-beta-booster-box">Beta box</a> and <a href="/card/welcome-to-night-city-retail-booster-pack">Retail pack</a> pages compare every store in your currency, cheapest in stock first. Add postage before you decide: the cheapest box is not always the cheapest delivered.</p>
`,
  faq: [
    { q: "How many packs are in a Cyberpunk TCG booster box?", a: "24 packs in a Retail Welcome to Night City box and 36 in a Beta box." },
    { q: "How much is a Cyberpunk TCG pack?", a: "On 10 November 2026 a loose Retail pack was US$7.05 at TCGplayer's market price; bought as a box (US$110.35), each pack works out to US$4.60." },
  ],
};

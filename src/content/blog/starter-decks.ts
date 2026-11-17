import type { Post } from "./types";

// Facts: MSRP (US$29.99) and the two deck names from WeirdCo (GAMA Expo 2026, as in the pre-order copy); colours and the three
// Legends per deck from this site's TCGplayer catalogue; prices are TCGplayer's market price on 17 November 2026. No win rates
// or "best deck" verdict: nobody has published tournament data, so none is claimed.
export const post: Post = {
  slug: "cyberpunk-tcg-starter-decks-the-heist-vs-embracing-power",
  title: "Cyberpunk TCG starter decks: The Heist vs Embracing Power, and what each costs",
  description: "Both Retail starter decks have an MSRP of US$29.99. Their colours, their three Legends and what each sells for today, so you can pick before you buy.",
  date: "2026-11-17",
  keywords: ["cyberpunk tcg starter deck", "cyberpunk tcg the heist starter deck", "cyberpunk tcg embracing power starter deck", "best cyberpunk tcg starter deck", "cyberpunk tcg starter deck price"],
  html: `
<p>Welcome to Night City has two Retail starter decks, <b>The Heist</b> and <b>Embracing Power</b>, both with an MSRP of <b>US$29.99</b>. They play different colours, so the choice is mostly about which characters you want to run. Here is how they compare, with today's prices.</p>

<h2>Side by side, 17 November 2026</h2>
<table>
<thead><tr><th></th><th>The Heist</th><th>Embracing Power</th></tr></thead>
<tbody>
<tr><td>Colours</td><td>Blue and Yellow</td><td>Red and Green</td></tr>
<tr><td>Legends</td><td>Viktor Vektor, Jackie Welles, V</td><td>Yorinobu Arasaka, Goro Takemura, Saburo Arasaka</td></tr>
<tr><td>MSRP</td><td>US$29.99</td><td>US$29.99</td></tr>
<tr><td>TCGplayer market price</td><td>US$25.64</td><td>US$21.83</td></tr>
</tbody>
</table>
<p>Both sell below MSRP at TCGplayer's market price, and Embracing Power is about US$3.80 cheaper than The Heist today. Compare every store on the <a href="/card/starter-deck-the-heist-retail">The Heist page</a> and the <a href="/card/starter-deck-embracing-power-retail">Embracing Power page</a>, cheapest in stock first, in your currency.</p>

<h2>Which one to buy</h2>
<ul>
<li><b>Pick The Heist</b> if you want Jackie Welles, V and Viktor Vektor. Its most valuable single, MT0D12 Flathead, sells for around US$9 on its own.</li>
<li><b>Pick Embracing Power</b> if you want the Arasaka side: Yorinobu, Saburo and Takemura. Goro Takemura (Losing His Way) and Minotaur are its priciest singles, each at roughly US$9.</li>
<li><b>Buying both</b> gives you four colours to build from, and either deck is a cheaper way into the game than a US$110 booster box.</li>
</ul>
<p>We don't call either deck stronger: WeirdCo's launch is days old and there is no tournament data to rank them yet, so we'd rather say nothing than guess.</p>

<h2>Display boxes</h2>
<p>If you are buying for a store or a group, each deck also comes as a display. See the <a href="/card/starter-deck-display-the-heist-retail">The Heist display</a> and <a href="/card/starter-deck-display-embracing-power-retail">Embracing Power display</a> pages for current store prices; far fewer stores list these.</p>

<h2>Before you pay</h2>
<p>Every price here is the store's item price before shipping. Check the store is in your market and add postage: a US$19.99 deck with US$8 shipping is no bargain next to a US$22 deck with free delivery. Pages show the Retail print; the Beta decks from the Kickstarter are separate products with their own prices.</p>
`,
  faq: [
    { q: "How much is a Cyberpunk TCG starter deck?", a: "The MSRP of both Retail starter decks is US$29.99. On 17 November 2026 TCGplayer's market price was US$25.64 for The Heist and US$21.83 for Embracing Power." },
    { q: "What colours are the Cyberpunk TCG starter decks?", a: "The Heist is Blue and Yellow; Embracing Power is Red and Green." },
    { q: "Which Cyberpunk TCG starter deck is better?", a: "There is no tournament data yet to rank them. Choose by colours and Legends: The Heist has Viktor Vektor, Jackie Welles and V; Embracing Power has Yorinobu Arasaka, Goro Takemura and Saburo Arasaka." },
  ],
};

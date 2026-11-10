import type { Post } from "./types";

// Facts: this site's catalogue and TCGplayer market prices (Foil printing) on 10 November 2026. Card counts are the cards
// TCGplayer lists in the Welcome to Night City Retail set; the rarity names are the game's own.
export const post: Post = {
  slug: "cyberpunk-tcg-card-list-prices",
  title: "Cyberpunk TCG card list: every Welcome to Night City card and what it costs",
  description: "How many cards are in Welcome to Night City, how they split by rarity, and what each rarity sells for today, from US$0.10 commons to US$875 Iconic Secrets.",
  date: "2026-11-10",
  keywords: ["cyberpunk tcg card list", "cyberpunk tcg cards", "all cyberpunk tcg cards", "cyberpunk tcg card prices", "cyberpunk tcg price guide", "welcome to night city card list"],
  html: `
<p>Welcome to Night City is Cyberpunk TCG's first set. The Retail printing that reached stores on 6 November 2026 has <b>172 cards</b>, and the Beta printing sold to Kickstarter backers has the same cards with a B in front of the number. Here is how the set splits, and what each kind of card sells for today.</p>

<h2>The set by rarity, with today's prices</h2>
<p>TCGplayer market prices for the Retail printing on 10 November 2026, cheapest, middle and dearest card of each rarity:</p>
<table>
<thead><tr><th>Rarity</th><th>Cards</th><th>Cheapest</th><th>Middle</th><th>Dearest</th></tr></thead>
<tbody>
<tr><td>Common</td><td>60</td><td>US$0.10</td><td>US$0.12</td><td>US$0.96</td></tr>
<tr><td>Uncommon</td><td>32</td><td>US$0.10</td><td>US$0.13</td><td>US$0.90</td></tr>
<tr><td>Rare</td><td>33</td><td>US$0.12</td><td>US$0.57</td><td>US$2.25</td></tr>
<tr><td>Epic</td><td>12</td><td>US$0.28</td><td>US$3.07</td><td>US$12.12</td></tr>
<tr><td>Secret</td><td>4</td><td>US$8.22</td><td>US$9.45</td><td>US$14.76</td></tr>
<tr><td>Iconic</td><td>9</td><td>US$11.99</td><td>US$23.48</td><td>US$54.99</td></tr>
<tr><td>Iconic Legend</td><td>18</td><td>US$44.94</td><td>US$75.57</td><td>US$183.33</td></tr>
<tr><td>Iconic Secret</td><td>4</td><td>US$600.00</td><td>US$694.75</td><td>US$875.00</td></tr>
</tbody>
</table>
<p>So almost all of a box's value sits in the last three rows. A common or uncommon is worth cents; an Iconic Legend is worth more than a third of a Retail box, and an Iconic Secret several boxes.</p>

<h2>The most valuable cards</h2>
<ol>
<li><a href="/card/panam-palmer-strength-through-family-isecret">Panam Palmer - Strength Through Family (Iconic Secret)</a>: US$875.00</li>
<li><a href="/card/sasha-yakovleva-wont-let-you-down-isecret">Sasha Yakovleva - Won't Let You Down (Iconic Secret)</a>: US$694.75</li>
<li><a href="/card/johnny-silverhand-rocking-renegade-isecret">Johnny Silverhand - Rocking Renegade (Iconic Secret)</a>: US$662.42</li>
<li><a href="/card/judy-alvarez-nothing-to-doubt-isecret">Judy Alvarez - Nothing to Doubt (Iconic Secret)</a>: US$600.00</li>
<li><a href="/card/judy-alvarez-braindance-maestro-ilegend">Judy Alvarez - Braindance Maestro (Iconic Legend)</a>: US$183.33</li>
</ol>
<p>The Beta printings of the same cards sell for more: the Beta Johnny Silverhand Iconic Secret was US$1,191.56 and the Beta Sasha Yakovleva US$1,145.94 the same day. See <a href="/blog/most-expensive-cyberpunk-tcg-cards">the most expensive Cyberpunk TCG cards</a> for the full list.</p>

<h2>Beyond the main set</h2>
<ul>
<li><b>Starter decks.</b> <a href="/sets/the-heist-retail-starter-deck">The Heist</a> and <a href="/sets/embracing-power-retail-starter-deck">Embracing Power</a> each have their own card list (20 different cards each), led by three Legends.</li>
<li><b>Box toppers.</b> Six Nova Rare Legends: <a href="/sets/box-toppers-retail">Box Toppers - Retail</a>.</li>
<li><b>Promos and events.</b> Pre-release, Set 1 promos, Judge promos and the Edgerunner Open and Night City Brawl season prizes are listed under <a href="/sets">sets</a>.</li>
</ul>

<h2>Look up any card</h2>
<p>The <a href="/cards">card list</a> has every card sorted by price, with a rarity filter, and each card page compares the stores that sell it in your currency, with TCGplayer's price beside them. Prices move every day; <a href="/movers">price movers</a> shows what changed this week.</p>
`,
  faq: [
    { q: "How many cards are in Cyberpunk TCG Welcome to Night City?", a: "172 cards in the Retail printing: 60 commons, 32 uncommons, 33 rares, 12 epics, 4 secrets, 9 iconics, 18 Iconic Legends and 4 Iconic Secrets." },
    { q: "What is the most expensive Cyberpunk TCG card?", a: "On 10 November 2026 the Retail Panam Palmer - Strength Through Family Iconic Secret was US$875.00 at TCGplayer's market price. Beta printings of the Iconic Secrets sold for over US$1,100." },
  ],
};

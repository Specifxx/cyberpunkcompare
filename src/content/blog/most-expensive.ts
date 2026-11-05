import type { Post } from "./types";

export const post: Post = {
  slug: "most-expensive-cyberpunk-tcg-cards",
  title: "The most expensive Cyberpunk TCG cards (updated daily)",
  description:
    "The 30 most valuable Cyberpunk TCG cards today by TCGplayer market price, with the top Iconic Secrets, Iconics and Nova Rares, why they cost what they do, and the cheapest store for each.",
  date: "2026-11-05",
  keywords: ["most expensive cyberpunk tcg cards", "cyberpunk tcg card prices", "cyberpunk tcg chase cards", "cyberpunk tcg iconic secret", "cyberpunk tcg nova rare price", "most valuable cyberpunk cards"],
  image: { src: "/blog/most-expensive-cyberpunk-tcg-cards.jpg", alt: "The most expensive Cyberpunk TCG cards, updated daily" },
  html: `
<p>This list is rebuilt every morning from TCGplayer's market price for every Cyberpunk TCG card we track: Welcome to Night City in both its Beta and Retail printings, the two starter decks, the box toppers, the promos and the event cards. Open any card to compare every store listing and the eBay listings for that exact printing.</p>

<h2>Top 30 most expensive Cyberpunk TCG cards today</h2>
{{topall:30}}

<h2>The chase rarities, one by one</h2>
<p>The game's top end is three rarities deep. Our <a href="/blog/cyberpunk-tcg-rarities-explained">rarities guide</a> explains how each is pulled; here is what each is worth today.</p>

<h3>Iconic Secret</h3>
<p>Iconics are alternate-art versions of cards that exist at a lower rarity, numbered after the set's base cards; the Iconic Secrets are the alternate arts of the Secret cards, the fewest in number, and they sit at the top of the table above most days.</p>
{{rarity:Iconic Secret:8}}

<h3>Iconic</h3>
{{rarity:Iconic:10}}

<h3>Iconic Legend</h3>
{{rarity:Iconic Legend:10}}

<h3>Nova Rare</h3>
<p>Nova Rares are not pulled from packs at all: they are the promos, box toppers and event prizes, so what each is worth depends on how it was given out. Prize cards from the Edgerunner Open and Night City Brawl seasons are scarcer than the box toppers.</p>
{{rarity:Nova Rare:10}}

<h2>Why the Beta printing matters</h2>
<p>Welcome to Night City was printed twice: the Kickstarter Beta run, sized for backers and launch stores and never to be reprinted under WeirdCo's supply policy, and the Retail run that stores restock. Beta and Retail copies of the same card are separate printings on this site, the Beta print has more Iconic numbers, and the Iconics the two share have different artwork, so they are different cards with different prices. <a href="/blog/cyberpunk-tcg-beta-vs-retail-booster-box">Beta vs Retail</a> covers the differences, and <a href="/blog/cyberpunk-tcg-beta-prices-before-retail-release">eight weeks of Beta prices</a> shows how the two have moved against each other.</p>

<h2>What moves these prices</h2>
<ul>
<li><b>Supply.</b> A young game has a small supply of every card, so one large sale shifts a market price. Expect the table to be more volatile than an established game's for the first year.</li>
<li><b>Play.</b> Legends that anchor a winning deck climb when results are posted and fall after errata. The <a href="/tools/rising">Rising Cards</a> tool shows the cards climbing this week while stock thins.</li>
<li><b>Character.</b> Cyberpunk 2077's characters pull collectors who never play, which keeps V and Johnny above cards that are stronger on the table.</li>
</ul>

<h2>Buying a chase card for less</h2>
<p>Every card page lists each store we track by item price with TCGplayer's market beside it, and the <a href="/tools/deal-finder">Deal Finder</a> lists every in-stock card currently under market. For a whole want list, <a href="/tools/best-basket">Best Basket</a> prices it across every store and tells you which one can fill most of it.</p>
`,
  faq: [
    { q: "What is the most expensive Cyberpunk TCG card?", a: "It changes as prices move; the first row of the table above is today's answer, from TCGplayer's market price." },
    { q: "Is the Beta or the Retail printing worth more?", a: "Usually the Beta printing, because fewer Beta boxes were opened. Each printing has its own page and its own price on this site." },
    { q: "How often is this list updated?", a: "Every morning, when the day's prices are imported. The 7d column shows each card's move over the last week." },
  ],
};

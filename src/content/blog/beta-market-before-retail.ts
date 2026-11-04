import type { Post } from "./types";

// A market-trend post (owner, 2026-11-04). Dated figures are TCGplayer market
// prices in the 4 November 2026 public export (data/public), two days before
// the Retail release; the live tokens reprice daily. No price is a forecast.
export const post: Post = {
  slug: "cyberpunk-tcg-beta-prices-before-retail-release",
  title: "Cyberpunk TCG two days before Retail: what eight weeks of Beta prices show, and what happens next",
  description:
    "A Beta booster box is US$342 and a Retail box US$137. Four Iconic Secrets are over US$780 and the Retail Johnny Silverhand is US$24. Eight weeks of data on a first print run, and what other games say happens when the second one lands.",
  date: "2026-11-04",
  keywords: ["cyberpunk tcg beta prices", "cyberpunk tcg retail release", "welcome to night city beta booster box", "iconic secret cyberpunk tcg", "cyberpunk tcg market", "johnny silverhand iconic secret"],
  image: {
    src: "/blog/cyberpunk-tcg-beta-prices-before-retail-release.jpg",
    alt: "A bar chart comparing Cyberpunk TCG Beta and Retail prices at TCGplayer market: Beta booster box US$342 against Retail US$137, and the Beta Johnny Silverhand Iconic Secret US$1,169 against the Retail Secret US$24, on Cyberpunk Compare's yellow-on-black branding",
  },
  html: `
<p>The Cyberpunk Trading Card Game is about to have its second birth. <b>Welcome to Night City - Beta</b>, the 36-pack Kickstarter print run, reached backers and the first stores on 10 September 2026. <b>Welcome to Night City - Retail</b>, the open print run, is dated <b>6 November 2026</b>, with pre-release events already run. That makes this week the one time we can look at a complete first print run's prices before a second one arrives, and the pattern in those eight weeks says a lot about the next eight.</p>

<p>Every live figure below reprices each morning. The dated figures are TCGplayer market prices from 4 November 2026, so the before-and-after stays honest once Retail lands.</p>

<h2>Where Beta prices sit after eight weeks</h2>
<p>Beta is a 175-card set in our catalogue and, on 4 November, one of each card added up to <b>US$6,307</b> at TCGplayer market. That is a lot for a two-month-old game, and nearly all of it is in two rarities:</p>
<ul>
<li><b>Iconic Secret</b> (four cards): median US$981. {{card:714330}} at {{price:714330}}, {{card:714331}} at {{price:714331}}, {{card:714332}} at {{price:714332}} and {{card:714333}} at {{price:714333}}. Together they are more than half the set's value.</li>
<li><b>Iconic Legend</b> (eighteen cards): median US$85, led by {{card:714319}} at {{price:714319}}.</li>
<li><b>Iconic</b> (nine): median US$16. <b>Secret</b> (four): median US$12. <b>Epic</b> (twelve): US$2.42.</li>
<li>Everything else, 142 of the 175 cards, has a median under 35 cents.</li>
</ul>
<p>Twenty-three Beta cards are worth US$50 or more. A Beta booster box is {{price:714346}} and a case {{price:714493}}; the Alpha Kit, the pre-Beta demo product, lists at {{price:717414}}. The six Beta box toppers, Nova Rares of the starter-deck leaders, are US$10 to 35 each, led by {{card:715170}}.</p>
<p>The shape is familiar from every chase-driven game: a set is worth its top twenty cards, and the cards you play with are nearly free. What is unusual is how high the top is for a game eight weeks old. That is the Beta label doing the work.</p>

<h2>Retail is already priced, and it is priced like a different game</h2>
<p>Retail product has been on pre-order for weeks, so TCGplayer already shows a market price for most of the Retail set. Side by side on 4 November:</p>
<ul>
<li><b>Booster box:</b> Beta {{price:714346}} against Retail {{price:714495}}. The Beta box is two and a half times the Retail box for the same 36 packs.</li>
<li><b>Johnny Silverhand - Rocking Renegade:</b> the Beta Iconic Secret at {{price:714330}} against the Retail Secret ({{card:715055}}) at {{price:715055}}.</li>
<li><b>Adam Smasher - Ender of Legends:</b> Beta Iconic Legend at {{price:714303}} against the Retail Epic ({{card:715007}}) at {{price:715007}}.</li>
<li>The Retail starter decks, The Heist and Embracing Power, are a third to a half of their Beta prices.</li>
</ul>
<p>Part of the gap is that Retail cards are pre-order listings with few sales behind them, and part is that the Retail set uses a different chase structure (Secrets and Epics rather than the Beta's Iconic tiers, which our <a href="/blog/cyberpunk-tcg-rarities-explained">rarities guide</a> explains). But most of it is the market deciding, in advance, that the Beta printing is the collectible and the Retail printing is the game. Our <a href="/blog/cyberpunk-tcg-beta-vs-retail-booster-box">Beta vs Retail booster box</a> guide covers what is physically different; this post is about what the prices say.</p>

<h2>What other games did when the second printing landed</h2>
<p>Cyberpunk is not the first game to launch with a limited first run and an open one a few weeks later, and the precedents are consistent:</p>
<ul>
<li><b>The first run's chase cards hold a premium that never closes.</b> In every comparable case, the first-print versions of the top cards stayed well above the open-print versions for the life of the game, because the supply is fixed and the open print does not add to it.</li>
<li><b>The first run's ordinary cards fall to the open print's price.</b> A Beta common or uncommon with no collector interest is the same card as a Retail one to the player buying a playset, and the player buys whichever is cheaper. Beta commons at 11 cents have very little left to lose, but Beta Rares and Epics at a few dollars do.</li>
<li><b>Sealed first-run boxes hold better than the singles inside them.</b> A sealed Beta box is a fixed-supply collectible in a way that an opened Beta Rare is not, which is why the Beta box premium (two and a half times) is already wider than the premium on most Beta singles below the Iconic tier.</li>
<li><b>The open print's launch week is its most expensive week.</b> Retail chase cards list high during pre-orders and settle as product is opened. Retail Secrets at US$24 today are pre-order prices.</li>
</ul>

<h2>What to expect from 6 November, as a pattern</h2>
<ol>
<li><b>Beta Iconic Secrets and Legends: little change.</b> Retail does not print them, so the four-figure Johnny and Sasha have no new supply coming. Their price moves with the game's popularity, not with the Retail release.</li>
<li><b>Beta Rares, Epics and Secrets: down toward Retail.</b> These are the Beta cards whose Retail twin is the same card for play. Expect the Beta versions to keep a modest first-print premium and give up the rest.</li>
<li><b>Retail chase cards: down from pre-order prices through November,</b> as the open print is opened in volume. The Retail Secrets are the cards to watch for a launch-month low.</li>
<li><b>Beta boxes: hold or rise.</b> Sealed Beta is the one thing Retail makes scarcer by comparison, not more plentiful.</li>
</ol>
<p>What would break the pattern: a second Beta-style print, or Retail chase cards that turn out rarer per box than Beta's. Neither has been announced. We will update this post with the same figures at Retail's day 30.</p>

<h2>Beta's most valuable cards today</h2>
{{toplist:24845:12}}
<p>Every Retail product on pre-order is on the <a href="/blog/cyberpunk-tcg-release-date-where-to-buy">release date and where to buy</a> page, with every store we compare.</p>

<p><i>Data: TCGplayer market prices in Cyberpunk Compare's public export of 4 November 2026. A description of how prices have behaved and how comparable launches went, not investment advice.</i></p>
`,
  faq: [
    { q: "How much is a Cyberpunk TCG Beta booster box worth?", a: "US$342 at TCGplayer market on 4 November 2026, against US$137 for a Retail booster box of the same 36 packs on pre-order. The live price is on the box's page." },
    { q: "What is the most expensive Cyberpunk TCG card?", a: "Johnny Silverhand - Rocking Renegade (Iconic Secret) from the Beta printing, at US$1,169 on 4 November 2026, followed by the other three Beta Iconic Secrets: Sasha Yakovleva, Panam Palmer and Judy Alvarez." },
    { q: "Will Beta prices fall when the Retail set releases?", a: "On the evidence of other games with a limited first print, the first-run chase cards keep their premium because the open print does not reprint them, while first-run ordinary cards fall toward the open print's price. Sealed first-run boxes have held better than the singles inside them." },
    { q: "When does Cyberpunk TCG Retail release?", a: "Welcome to Night City - Retail is dated 6 November 2026." },
  ],
};

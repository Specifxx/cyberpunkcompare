import type { Post } from "./types";

// Facts: Cyberpunk TCG Comprehensive Rules 3.16 (seven rarities), TCGplayer's
// rarity codes in category 92 on 2026-11-01 (C, UC, R, E, S, IL, IO, IS, NR).
export const post: Post = {
  slug: "cyberpunk-tcg-rarities-explained",
  title: "Cyberpunk TCG rarities explained: Common to Iconic and Nova Rare",
  description: "Every Cyberpunk TCG rarity, what its symbol looks like, where Iconic and Nova Rare cards come from, and how to see what each card sells for.",
  date: "2026-11-01",
  keywords: ["cyberpunk tcg rarities", "cyberpunk tcg iconic rare", "cyberpunk tcg secret rare", "cyberpunk tcg nova rare", "cyberpunk tcg rarity symbols"],
  html: `
<p>Cyberpunk TCG has seven rarities. The symbol sits on each card; TCGplayer's catalogue abbreviates them, and this site spells them out.</p>

<h2>The seven rarities</h2>
<ul>
<li><b>Common</b> (C): a downward chevron.</li>
<li><b>Uncommon</b> (UC): an upward chevron.</li>
<li><b>Rare</b> (R): an upward chevron over a downward one.</li>
<li><b>Epic</b> (E): a split diamond with a solid diamond inside.</li>
<li><b>Secret</b> (S): the Epic diamond inside angled brackets.</li>
<li><b>Iconic</b>: alternate-art versions of cards that exist at a lower rarity, numbered after the set's base cards. TCGplayer splits them into Iconic Legend, Iconic Secret and other Iconic cards.</li>
<li><b>Nova Rare</b> (NR): a striped square. Only on promos, box toppers and event prizes.</li>
</ul>

<h2>Beta and Retail Iconics</h2>
<p>The Kickstarter Beta print has more Iconic numbers than the Retail print, and the Iconic cards the two share have different artwork, so a Beta Iconic and a Retail Iconic of the same character are separate cards with separate prices. Every card page here says which set it is from.</p>

<h2>See the prices</h2>
<p>The <a href="/cards">card list</a> sorts every card by price and filters by rarity; <a href="/movers">price movers</a> shows what is climbing this week.</p>
`,
};

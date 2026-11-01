// The forum's topics for this game (src/lib/forum/site.ts reads them). An empty
// topic shows its blurb and prompts, never an invented post.
import type { ForumCategory } from "@/lib/forum/core";

export const FORUM_INTRO = "Talk Cyberpunk TCG prices, deals, decks and pulls with other players in Night City.";

export const FORUM_CATEGORIES: ForumCategory[] = [
  { key: "new-sets", name: "New set prices", blurb: "Release week, pre-orders and how a set's cards are settling.", prompts: ["Retail or Beta box: which are you opening?", "Which Iconic cards are holding their price?"] },
  { key: "deals", name: "Deals & where to buy", blurb: "Good prices you spotted, store experiences and shipping tips.", prompts: ["Best booster box price you've seen this week", "Which store shipped fastest for you?"] },
  { key: "collection", name: "Collection talk", blurb: "Pulls, binders, Iconic and Secret cards and what you're chasing.", prompts: ["Your best pull so far (describe it!)", "Are you keeping your Beta box sealed?"] },
  { key: "decks", name: "Decks & meta", blurb: "Budget builds, staples worth buying and the meta.", prompts: ["Cheapest competitive deck right now?", "Which Legends are worth buying as singles?"] },
  { key: "site", name: "Site feedback", blurb: "Ideas, bugs or a store we should add.", prompts: ["A feature you'd like to see"] },
];

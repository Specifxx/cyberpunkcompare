// The ONE game-specific configuration file. Cyberpunk Compare, YGO Compare,
// Lorcana Compare and Gundam Compare run the same engine (the Rift Compare
// playbook, rebuilt lean); everything that differs between them — names,
// colours, data sources, stores, copy — lives here or in src/content/. Keep
// engine code free of game names.
import type { SiteConfig } from "@/lib/site-types";
import { STORES } from "@/content/stores";

export const SITE: SiteConfig = {
  key: "cyberpunk",
  name: "Cyberpunk Compare",
  shortName: "CyberpunkCompare",
  wordmark: ["CYBERPUNK", "COMPARE"],
  game: "Cyberpunk TCG",
  gameShort: "Cyberpunk TCG",
  domain: "cyberpunkcompare.com",
  // The bare domain is the address (owner, 2026-11-01: cyberpunkcompare.com).
  apexHost: true,
  tagline: "Compare Cyberpunk TCG prices across every store",
  description:
    "Free Cyberpunk TCG price comparison: live prices for Welcome to Night City booster boxes, starter decks and singles, Beta and Retail, across TCGplayer, eBay and game stores in the US, UK, Canada, Australia and Europe.",
  keywords: [
    "cyberpunk tcg prices",
    "cyberpunk tcg booster box",
    "welcome to night city booster box",
    "cyberpunk tcg beta booster box price",
    "cyberpunk tcg card prices",
    "where to buy cyberpunk tcg",
  ],
  adminEmails: ["bill.jyang101@gmail.com"],
  supportEmail: "compareempire@gmail.com",
  ownerEmail: "bill.jyang101@gmail.com",

  priceAlerts: true,
  tcgcsvCategoryId: 92,
  tcgplayerSlug: "cyberpunk-tcg",
  ebay: {
    // Card names ("V - Corporate Exile", "Minotaur") are not unique to the
    // game, so every search names it.
    query: "cyberpunk tcg",
    singlesCategoryId: "183454",
    sealedCategoryId: "183456",
    minPriceUsd: 10,
    // Its OWN eBay app (owner, 2026-11-01: a new keyset, not the one Gundam,
    // Lorcana and YGO share). Half its 5,000 a day, so the keyset can take a
    // second site; the catalogue needs far less. Raise only with the owner.
    dailyBudget: 2500,
    runHourUtc: 0,
  },

  // TCGplayer numbers a card "012" in the Retail print and "B012" in the Beta
  // one (no set code, no total); stores write the same ("Detonate (B031)").
  numberStyle: "plain",
  // The first set exists twice under the same names: "Welcome to Night City -
  // Beta" (Kickstarter, 36-pack boxes) and "- Retail" (24-pack boxes, 6 Nov
  // 2026), at very different prices. Stores call the retail box plain
  // "Booster Box"; Beta is always named, or a 36-pack / Kickstarter box.
  setEditions: [
    // "B031" is how the Beta print numbers its cards.
    { word: "beta", implied: /\b36[- ]?(packs?|ct|count)\b|kickstarter|\bbackers?\b|\bB\d{3}\b/i },
    { word: "retail", default: true },
  ],
  rarityMustAgree: true,
  rarityNames: {
    C: "Common",
    UC: "Uncommon",
    R: "Rare",
    E: "Epic",
    S: "Secret",
    IL: "Iconic Legend",
    IO: "Iconic",
    IS: "Iconic Secret",
    NR: "Nova Rare",
  },
  rarityAliases: {
    "Iconic Legend": ["ILegend", "Iconic Legend Rare"],
    "Iconic Secret": ["ISecret", "Iconic Secret Rare"],
    "Secret": ["Secret Rare"],
    "Epic": ["Epic Rare"],
    "Nova Rare": ["Nova"],
  },
  extraAttrs: ["Color", "CardType", "Tags", "Cost", "Power", "RAM", "Eddies"],
  sealedTypes: [
    [/\b(sleeves?|playmat|deck box|binder|dice|tokens?)\b/i, "Insert"],
    [/\bcase\b/i, "Case"],
    // TCGplayer names a display "Starter Deck Display: The Heist - Beta"; stores
    // use "Starter Deck Display" for ONE deck (Irresistible Force AU$44.99,
    // Ultra Rare Cards £27.69, 2026-11-01), so a store's title without the
    // colon is a type no product has and never matches.
    [/starter deck display:/i, "Starter Deck Display"],
    [/starter deck display/i, "Starter Deck Display (store)"],
    [/starter deck/i, "Starter Deck"],
    [/pre-?release|event kit/i, "Prerelease"],
    [/booster (box|display)/i, "Booster Box"],
    [/booster pack|\bpack\b/i, "Booster Pack"],
    [/alpha kit/i, "Collection"],
  ],
  // Every rarity TCGplayer used on 2026-11-01, rarest first.
  rarityOrder: ["Iconic Secret", "Iconic Legend", "Iconic", "Secret", "Nova Rare", "Epic", "Rare", "Uncommon", "Common"],
  chaseRarities: ["Iconic Secret", "Iconic Legend", "Iconic", "Secret"],
  cardHubs: [
    { facet: "color", attr: "Color", noun: ["colour", "colours"], titleCase: true, title: "{v} {game} cards", blurb: "Every Cyberpunk TCG card is one of five colours, each a way of playing Night City." },
    { facet: "type", attr: "CardType", noun: ["card type", "card types"], titleCase: true, title: "{game} {v} cards", blurb: "Legends lead your crew; Units, Gear and Programs do the work." },
  ],

  theme: {
    brand: "#f3e600",
    brandLight: "#fff45c",
    brandDark: "#b8ad00",
    accent: "#00e5ff",
    pageDark: "#08080b",
    inkDark: ["#050507", "#0d0d12", "#14141b", "#1c1c26", "#2d2d3b", "#474759"],
    wordmarkGradient: "linear-gradient(180deg, #fffbb0 0%, #f3e600 55%, #b8ad00 100%)",
    displayFont: "Tomorrow",
  },
  halloween: {
    headline: "Night City after dark",
    blurb: "Find the cheapest Cyberpunk TCG boxes and chase cards before midnight.",
  },
  christmas: {
    headline: "Holiday run in Night City",
    blurb: "booster boxes and starter decks to gift, cheapest store first",
  },

  stores: STORES,
  // The whole Compare Empire family, card games first (DECISIONS.md "Every
  // site links the whole family"). `anchor` is the link text.
  sisterSites: [
    { name: "Rift Compare", url: "https://riftcompare.com", game: "Riftbound", anchor: "Riftbound card prices", search: "https://riftcompare.com/browse?q={q}" },
    { name: "OP Compare", url: "https://opcompare.app", game: "One Piece", anchor: "One Piece card prices", search: "https://opcompare.app/browse?q={q}" },
    { name: "DexCompare", url: "https://dexcompare.app", game: "Pokémon", anchor: "Pokémon sealed prices", search: "https://dexcompare.app/us/sealed?q={q}" },
    { name: "MTG Compare", url: "https://mtgcompare.app", game: "Magic", anchor: "Magic: The Gathering sealed prices", search: "https://mtgcompare.app/us/sealed?q={q}" },
    { name: "Gundam Compare", url: "https://gundamcompare.com", game: "Gundam", anchor: "Gundam Card Game prices", search: "https://gundamcompare.com/cards?q={q}" },
    { name: "Lorcana Compare", url: "https://lorcanacompare.com", game: "Disney Lorcana", anchor: "Disney Lorcana card prices", search: "https://lorcanacompare.com/cards?q={q}" },
    { name: "YGO Compare", url: "https://ygocompare.com", game: "Yu-Gi-Oh!", anchor: "Yu-Gi-Oh! card prices", search: "https://ygocompare.com/cards?q={q}" },
    { name: "WargameCompare", url: "https://wargamecompare.com", game: "Wargames", anchor: "Miniature wargame prices" },
    { name: "FigureCompare", url: "https://figurecompare.com", game: "Anime figures", anchor: "Anime figure prices" },
    { name: "CamCompare", url: "https://www.camcompare.app", game: "Cameras", anchor: "Camera and lens prices" },
    { name: "Compare Empire", url: "https://compareempire.com", game: "Tech", anchor: "Tech and appliance prices" },
  ],
  family: { id: "cyberpunk" },
  social: {},
};

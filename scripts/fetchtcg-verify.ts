// temporary
import { readFileSync } from "node:fs";
const f = JSON.parse(readFileSync("data/fetch-live/au.json", "utf8")) as { cards: { s: string; no: string; n: string; f: string; p: number }[] };
const bySet: Record<string, typeof f.cards> = {}; for (const c of f.cards) (bySet[c.s] ||= []).push(c);
for (const [s, cs] of Object.entries(bySet)) console.log("FETCH", s, cs.length, cs.slice(0, 3).map((c) => `${c.no}|${c.n}|${c.f}`).join(" ;; "));
const cat = JSON.parse(readFileSync("data/public/catalog.json", "utf8")) as { sets: { id: number; name: string }[]; products: { name: string; number: string | null; setId: number; kind: string; rarity: string | null }[] };
const sets = new Map(cat.sets.map((s) => [s.id, s.name]));
const by: Record<string, string[]> = {}; for (const p of cat.products) if (p.kind === "card") (by[sets.get(p.setId) ?? "?"] ||= []).push(`${p.number}|${p.name}|${p.rarity}`);
for (const [s, cs] of Object.entries(by)) console.log("OURS", s, cs.length, cs.slice(0, 3).join(" ;; "));

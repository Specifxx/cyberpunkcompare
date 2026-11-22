import type { SetInfo, SetPageCopy } from "@/lib/site-types";

// Copy for /sets/<slug>: facts and questions of a set's own, from a dated
// source only. None written yet; the page answers its questions (most valuable
// card, cheapest box) from today's data.
export function setCopy(_s: Pick<SetInfo, "slug" | "code" | "name">): SetPageCopy | null {
  return null;
}

// Every store here was found and verified by scripts/probe-stores.ts
// (.github/workflows/probe-stores.yml, 2026-11-01, over the 392 stores of the
// sister sites' 1,240 whose Shopify search listed Cyberpunk TCG): its Shopify
// collection products.json returned English Cyberpunk TCG product, and
// /meta.json gave the market's currency. Add a store only after the same
// check: a wrong collection handle fails silently. The import also re-checks
// each store's currency every run. Never add a store on the family ban list
// (TCG Synergy).
import type { StoreConfig } from "@/lib/site-types";

export const STORES: StoreConfig[] = [
];

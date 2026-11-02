# Decisions

Newest at the bottom. The engine's own history (the lean Rift Compare
playbook, eBay planning, matching rules, caching, forum, reports, seasons) is
in the sister repos' DECISIONS.md (`Specifxx/GundamCompare`,
`Specifxx/lorcanacompare`, `Specifxx/ygocompare`); code comments that cite a
DECISIONS heading mean theirs unless it is below.

## Why a Cyberpunk TCG site — 2026-11-01

Owner asked whether Cyberpunk TCG was worth a site after affiliate sales of
Cyberpunk cards showed up (most likely RiftCompare visitors buying on eBay
within the 24-hour cookie). Research the same day: WeirdCo's Kickstarter
raised US$28.35M from 50,773 backers (the most-funded tabletop campaign);
Beta print shipped September 2026, retail release 6 November 2026; WeirdCo
will not reprint a set or configuration; the Beta box (US$180 MSRP) sold
around US$315 on TCGplayer in October with 223 eBay sales in 90 days.
TCGplayer lists it (category 92, since 31 August), Cardmarket supports it in
Europe. Of the 1,240 stores the sister sites track, 1,136 answered and 392
listed Cyberpunk TCG (243 with three or more products). No site compared store
prices for it (CHOOMDEX shows eBay and TCGplayer only). Owner: build it,
domain cyberpunkcompare.com.

Risks taken knowingly: a brand-new game with no track record and no date for
set 2; "Cyberpunk" in the domain is CD PROJEKT's trademark (owner's call).

## Beta and Retail are separate products, told apart by the title — 2026-11-01

TCGplayer lists Welcome to Night City twice, "- Beta" and "- Retail", with
identical card and sealed names, and the Beta box costs about twice the Retail
one. A Beta price on the Retail box's page (or the reverse) is the worst kind
of wrong match, and the 0.25×–4× plausibility guard cannot catch a 2× error.

Engine option `SITE.setEditions` (off for the other games): the edition word
is removed from set and sealed names for matching, and a title's edition must
equal the product's. A title is Beta when it says "Beta", "36 packs" or
"Kickstarter"/"backer"; otherwise it is Retail (the default edition) because
stores selling the release-week box call it plain "Booster Box"; a title that
points at both matches neither. The eBay pass applies the same rule, and its
searches name the edition only for Beta. Pinned by `tests/set-editions.test.ts`.

## Rarity codes spelled out — 2026-11-01

TCGplayer stores Cyberpunk TCG rarities as codes (C, UC, R, E, S, IL, IO, IS,
NR). Engine option `SITE.rarityNames` maps them at import, so pages, filters
and rarity matching read "Iconic Legend", not "IL". IO is "Iconic" (TCGplayer's
"other" Iconic cards); NR is Nova Rare (promos, box toppers, event prizes).

## Its own eBay app — 2026-11-01

Owner: Cyberpunk Compare gets a new eBay keyset; Gundam, Lorcana and YGO keep
their shared app and budgets unchanged. `dailyBudget` 2,500 (half a keyset, so
it can take a second site), cards from US$10, every sealed product. Runs at
00:17 UTC. A no-op until the secrets exist.

## 2026-11-02 — Self-updating price report

The owner wants growth that runs without him ("a more passive, working in the background solution"): no daily Reddit
posts. Links are the passive lever, and outreach needs a page worth linking to. `/price-report` is that page: one URL
for good, rebuilt from the committed data every release (`src/lib/market-report.ts`, pure, tested), so nobody writes
it. It says how often a US store undercuts TCGplayer's market price on cards from $5 and sealed from $10 (USD against
USD, never converted), lists the most valuable sealed products a US store has in stock (cases left out: almost none
are stocked), counts products in stock per market, shows the 30-day movers (7-day until a month of history exists) and
ends with a citation line. `revalidate = 86400`, in the sitemap and footer. The daily outreach task offers it to
writers and creators.

## 2026-11-02 — Black Friday page

`/black-friday` lists today's in-stock US store prices 8–60% under TCGplayer's market price (the same
`deals()` as the homepage and Deal Finder, stores only: eBay and Amazon rows are left out), sealed first, then cards, one row per product. One URL kept
every year so links and rankings carry over; it must be indexed weeks before the day (27 November 2026),
so it ships now. The homepage links it from 1 November to a week after Cyber Monday; the footer and
sitemap always do. Never a "was" price, a countdown, "ends soon" or an invented sale: we only know what a
store asked when we last read it. Dates and the split are pure (`src/lib/black-friday.ts`, tests in
`tests/black-friday.test.ts`). Part of the passive-growth plan (owner, 2026-11-02: no daily Reddit posts).

## 2026-11-02 — Free price widgets

`/embed/card/<slug>` is a live price badge any blog, deck guide or store can put in an `<iframe>`: the cheapest in-stock
store price in the chosen market (`?market=`, US by default; never TCGplayer, eBay, Amazon or a pre-order), else
TCGplayer's market price labelled as such. `/embed` lists the snippet (the iframe plus one plain text link, the only
part search engines credit) and a plain-HTML badge for the stores we compare. The daily outreach offers the widget
instead of asking for a link (owner, 2026-11-02: growth must be passive). The badge is a route handler reading only
`src/lib/data.ts`, noindex, cached a day by its CDN header; a missing slug answers 404 with a 5-minute cache.
RiftCompare has had the same widgets since 2026-09.

## Share buttons and shared lists (2026-11-02)

The owner wants word of mouth to drive growth. Every card and sealed page and
the quick view get a Share button (`components/ShareButton.tsx`): the phone's
own share sheet, else the link copied, no pop-up, no reward, no account. The
message names the real price gap in the visitor's market (`priceGap` in
`lib/share.ts`: cheapest and dearest in-stock item price from two different
sellers, never converted). The card page's share image
(`card/[slug]/opengraph-image.tsx`) draws the same gap for the US, the page's
baseline market; it is drawn on first request and kept a day (empty
`generateStaticParams`), so only cards someone shares cost a render.

Best Basket results get "Share this list": `/list?i=<id>*<qty>.<id>…` carries
the list in the URL (nothing stored), and `/list` is one static, noindex shell
that prices it in the visitor's market through `/api/basket`.

Every shared link carries `utm_source=share&utm_medium=<card|sealed|list>`.
The button sends a Vercel `share` event and `ShareArrival` one `share_visit`
event per tab when a shared link brings someone; RiftCompare's growth report
counts both per site. robots.txt allows `/*utm_source=share` (it blocks other
query strings) because X's and Reddit's preview fetchers obey robots.txt.

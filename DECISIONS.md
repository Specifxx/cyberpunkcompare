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

## 2026-11-02 — The monitor reports to Empire HQ; only red mails

The owner asked for one Monday email instead of a mail per site (the control tower, approved 2026-11-02). The ops
monitor now writes every result to `ops-status.json`, and its workflow force-pushes it as `status.json`, one orphan
commit, to this repo's public `ops-status` branch (never deployed, `vercel.json`). RiftCompare's ops monitor reads it
every three hours for Empire HQ (riftcompare.com/admin/hq) and the one Monday report, and mails the owner itself if
the file goes quiet for a day (a stopped monitor cannot mail). Only a FAILED check fails the run, which is GitHub's
email to the owner; warnings wait for HQ and Monday. The file carries status and the monitor's own sentences only,
the same as the public Actions log.


## 2026-11-02 — An announced set with written copy gets its pre-order page before any store lists it

`/preorders/<slug>` already built itself for every upcoming set with a sealed product. The gap was the months between
an announcement and the first store listing, when "<set> pre-order" is already searched: Gundam's GD07 Blazing Fist
had copy in `src/content/preorders.ts` but no page. `preorderSets` now takes a `curated` test, and `preorderSetList`
passes "has an entry in `PREORDER_COPY.sets`": such a set has its page while upcoming even with nothing sealed, saying
plainly that no store lists it yet. Promo groups and placeholders have no copy, so they still need a sealed product.
The header strip ("pre-orders are open") still waits for a real listing. Engine change, the same in all four repos.

## 2026-11-02 — Seasonal sale pages

`/boxing-day`, `/january-sales` and `/lunar-new-year` (owner-approved growth plan, 2026-11-02): one URL
each, kept every year like `/black-friday`, built weeks ahead so Google has indexed them before the day.
Dates, the year a page is about (it rolls over a week after the event) and the homepage window are pure
in `src/lib/sale-seasons.ts` (tests in `tests/sale-seasons.test.ts`); Lunar New Year is a published-date
table to 2040 (6 February 2027). The site covers several countries, so no page reads as one country's:
the opening sentence names every market we have stores in, and the page has one section per market,
in that market's own currency, never converted. Each section lists `storeDealsIn(market)`: the cheapest
in-stock store at least 10% (and at most 45%: past that it is likelier a wrong match than a sale) under
the median of three or more stores there, stores only; the US section also keeps the Black Friday
page's under-TCGplayer `deals()`. Never a "was" price, a countdown or an invented sale. The footer and
sitemap always link them; the homepage only from a few weeks before each event to two days after.

## 2026-11-02 — Price alerts through RiftCompare's shared service

The owner chose "Yes, one shared service" for email price alerts on the sister sites. This reverses part of
"No accounts, no database, no email" (2026-10-25): the site still has no accounts, no database and no mail key, but
the card page now has an "Email me when the price drops" form.

- **The form** (`components/PriceAlertForm.tsx`, the same file on every sister site; `PriceAlert.tsx` picks the
  visitor's market) posts `{site, productId, region, email, targetCents}` straight to
  `https://riftcompare.com/api/sister-alerts`. RiftCompare keeps the address (its own Neon project, private tables),
  sends one confirmation email (double opt-in), then checks daily. This site stores nothing and holds no key.
- **The prices** come from this site's own static `/alert-feed.json` (`lib/alert-feed.ts`), built with each deploy
  from the same files the pages read: per product, the lowest in-stock store or TCGplayer offer in each market, in
  that market's currency, never eBay, never converted; plus up to five of the site's own deals (store price under
  TCGplayer market) that another card site's alert email may end with. Served from the CDN (`revalidate` 86400),
  so it costs no function call.
- **Behind `SITE.priceAlerts`** (on for Gundam, Lorcana, YGO and Cyberpunk); the site's `key` must be registered in
  RiftCompare's `lib/sister-alerts/sites.ts`. The privacy page says what the form sends and links to RiftCompare's.
- RiftCompare's `sister-alerts.yml` fails (and its ops monitor reports it) when a site with alerts serves no fresh
  feed, so a broken feed here shows up there.

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

## Sites that grow each other: the family feed, cluster blocks and short footers (2026-11-02)

Owner, 2026-11-02: "We need each site to help each other grow as a team effort", and the
footer family lists were "a bit convoluted … I'm wondering if it actually helps". Plan:
"Sites that grow each other" in the consolidation doc (https://claude.ai/artifact/QjrWGrfBqH4sKctwdjwptK).

- **Three clusters** (`src/lib/family-network.ts`, the same file in every repo): card games
  (Rift, OP, Dex, MTG, Gundam, Lorcana, YGO, Cyberpunk), hobby (Wargame, Figure, Gunpla on
  Gundam Compare) and tech (Compare Empire, CamCompare). KaeYoung stays out.
- **The family feed.** Each site's own daily data job writes `family-feed.json` (its best real
  deals and pre-orders today, per region) beside the data it already commits, and copies its
  cluster sisters' feeds from raw.githubusercontent.com into `family-cluster.json`. Pages read
  the committed file: no database of another site, no request-time fetch, no new function. A
  feed older than four days, from the wrong site, with a link off its own host or a saving that
  isn't the arithmetic of its two prices is dropped (`validFeed`), so a block shows less, never a guess.
- **One block per page**, on the deals, Black Friday and pre-order pages: one tile per sister with
  its best item in the visitor's region, else the US price in its own currency. Labels never name
  a country. Plain followed links inside a cluster.
- **Footers: one short line.** The sites of our own cluster by name, then one "A Compare Empire
  site" link to https://compareempire.com/network, which lists every site. Why: nothing counts
  footer clicks, footer links get few, and Google gives little weight to sitewide links between
  one owner's look-alike sites (12 sites all cross-linked in every footer is the pattern it can
  read as a link scheme). Cross-traffic should come from the price blocks, which people have a
  reason to click.

## 2026-11-02 — Amazon Associates: following the Operating Agreement's Dos and Don'ts

The owner sent Amazon's own "Operating Agreement: Top Dos and Don'ts" page (2026-11-02: "make sure you
are following these instructions for all amazon affiliates"), and every site was audited against it.
The rules we keep, on every Compare Empire site:

- **Disclosure beside every Amazon link** ("Ad" / "Paid link"), and Amazon's statement "As an Amazon
  Associate I (we) earn from qualifying purchases." in the footer of every page.
- **Amazon's trademark notice** in the footer of every page: "Amazon and the Amazon logo are trademarks
  of Amazon.com, Inc. or its affiliates." No Amazon logo, screenshot, review or Amazon's own colours
  (its orange): the page "Don't use style or color of Amazon site which may cause confusion".
- **Links lead to a specific product** (an ASIN, or a search for that exact product's name), never a
  category or generic search: "All the links or buttons on your site should take customers to specific
  products on Amazon."
- **No Amazon link in a pop-up or layer**: the quick views show none; product pages carry the row.
- **Never Amazon prices in price tracking or alerts** ("Don't track prices or set price alerts"), and no
  Amazon link or trademark in any email, SMS or printed material.
- Every link tagged, rel="sponsored nofollow"; no incentive (cashback, discount) for buying through it.
- Engine: the footer carries the exact statement and trademark line; the quick view API sends no Amazon
  search; the Amazon row's button says "Check price" (not "View deal"); /go answers `no-store`.

## 2026-11-02 — Affiliates: the family's shared EPN campaign and TCGplayer link

Owner, 2026-11-02: Cyberpunk Compare uses the affiliate campaigns we already
have. eBay links carry EPN campaign 5339155912 (every Compare site's, from
RiftCompare's account) and TCGplayer links go through RiftCompare's Impact link
(`src/lib/affiliate.ts`, engine); the `cyberpunk-` prefix in `customid` /
`subId1` splits the earnings. The Impact site-verification meta copied from
YGO Compare is removed (it was YGO's), and the Chrome setup prompt has no
affiliate step. The eBay API keyset stays Cyberpunk's own (2026-11-01); the
affiliate campaign is not an API key.

## 2026-11-02 — Region switcher in the hero, with drawn flags

Owner: "the region switcher must be more prevalent on all sites, on the main home page hero, and have the
flags as well". The homepage hero now has a "Prices for" row of every region (flag + name, code on phones;
`MarketChooser`), the header menu shows the flag and code of the region in use (a native select laid
invisibly over them, so it stays keyboard- and screen-reader-friendly), and the price table's region pills
carry flags.

- **Flags are inline SVG (`src/components/Flag.tsx`), not emoji and not image files.** Windows draws a flag
  emoji as two letters ("US"), and image files would be new requests and hosting. No ids or clip paths, so
  a flag works inside a closed menu and many times on a page. The same file is in every Compare Empire
  repo that has a region switcher; keep the copies identical.
- Wording stays region-neutral: "Prices for", "Choose your region", never one country's spelling or name.

## 2026-11-02 — At most one production build every 12 hours, and no branch but production deploys

**Why.** The owner capped Vercel spend at $5–6 a day across every site. 1 November cost $11.82 (normally
$2–4), and Build CPU was the largest line ($4.26), followed by CDN requests and ISR writes, which every
build multiplies (a deploy empties the page cache, so the next crawl re-renders and re-writes every page).
The `[deploy]` gate itself held; its premise did not: sessions landed 7–14 `[deploy]` commits a day per site
(manual "release now" runs and `[deploy]` in merge subjects), RiftCompare, OP, MTG and DexCompare alike.
Compare Empire's site built on every push to its production branch (84 commits that day) and CamCompare on
every three-hourly price commit, because neither had the gate.

**What.**
- `scripts/vercel-ignore-build.sh` skips a production `[deploy]` commit when the last production
  deployment (`VERCEL_GIT_PREVIOUS_SHA`, set by Vercel in that step) is under 12 hours old; the commit
  rides the next release. `[urgent]` in the SUBJECT overrides it, and only when the owner says a release
  cannot wait. An unset or unreadable last deployment builds (fail open). `tests/deploy-gap.test.ts` pins it,
  and the file is the same in every Compare Empire repo.
- `vercel.json` `git.deploymentEnabled` starts with `"**": false` and enables only the production branch
  (Vercel: when a branch matches several rules, any `true` wins). No preview is built for any branch or pull
  request, `[preview]` included; the older per-branch `false` entries stay for orphan commits' own copies.
- So "push to prod" means land on the production branch; the release reaches visitors within a day.

## 2026-11-02 — 69 stores from the official Cyberpunk TCG store locator

Owner, 2026-11-02: "we need way more stores … 25+ per region, 200+ total". The
official locator (cyberpunktcg.com/stores, 4,392 signed-up stores; its public
`api.netdeck.gg/api/cyberpunk/retailers/stores` search, read from a runner with
our own user agent) gave 2,269 store websites in our markets. `probe-stores.ts`
(now skipping stores already listed) found 113 with a readable Shopify
Cyberpunk collection; every one shows a contact page and a refund policy, none
is on the banned list, and being in the official locator is the "known to
other buyers" sign (TCGEmpire docs/store-vetting.md). A trial import kept only
the 69 whose listings our matcher actually matched; the other 44 held only
Cyberpunk RED RPG, Combat Zone miniatures or merch. Singapore stays at one
store: of the locator's 24 Singapore stores, one has an online shop we can read
and it has no Cyberpunk collection.

## 2026-11-03 — Footers link only card sites to card sites; every other site lists no sisters

The owner asked whether linking every Compare Empire site together helps or is a risk for search and for how the
sites look. Verdict: a sitewide footer link between sites one person owns carries little ranking value (Google
discounts it), and a mesh of unrelated sites (camera, appliance and figure sites in a card site's footer) can read
as a link network and looks odd to a reader. The owner said do it.

- `footerSisters()` in `lib/family-network.ts` (same file in every repo) now returns the other card sites for a card
  site and nothing for any other site. Gundam's Gunpla side no longer pulls WargameCompare and FigureCompare into its
  footer; the engine footer's heading is "Other card games".
- WargameCompare, FigureCompare, CamCompare and Compare Empire show no sister list in their footers, only one
  "A Compare Empire site" link to compareempire.com/network (Compare Empire: its own /network), the one page that
  lists every site. KaeYoung still links none.
- Anchors stay the brand name only, and links stay plain followed links: they are honest links between sites with
  one owner, not paid, so no `sponsored`/`nofollow`.
- Kept: the "Other card games" / hobby / tech price blocks on deals, Black Friday and pre-order pages
  (`clusterSisters`). They sit on a few pages, show real prices a reader of that page may want, and are not sitewide.
## 2026-11-03 — The daily Price Duel: a sharing loop, not another push

**Why.** Every growth lever so far (outreach, posts, hubs, widgets, Bluesky) adds a fixed number of
visitors, so traffic grows in a straight line. The share buttons shipped on 2026-11-02 were tapped 14 times
in their first week across all sites and brought 0 visits: nobody shares a price comparison. People share a
score. A daily puzzle that is the same for everyone (the Wordle loop) gives players something to paste into
Discord, group chats and Reddit every day, and each paste is the invitation for the next player.

**What.**
- `/daily`: ten pairs of cards, tap the one worth more at TCGplayer's US market price (`refCents`, never
  converted, never a store price). Puzzle #1 is 2026-11-03 (`DAILY_EPOCH`, never changed: shared results
  carry the number); a new one at midnight UTC.
- No function, no database, no extra build: the page is ISR (a day, like every tool page) and carries the
  next seven days' puzzles; the client picks today's by UTC date. Cards are chosen by a hash of (day, id), so
  a build that adds or drops a card leaves a day's pairs almost unchanged, and a pair's prices are 1.25 to 8
  times apart, so a day's price moves don't flip an answer. Cards under US$1 or over US$2,000 and token sets
  are left out (`src/lib/daily.ts`, `tests/daily.test.ts`).
- The share text is the number, the score, the emoji grid, the streak and the link with
  `utm_source=share&utm_medium=daily`; it names no price, so it spoils nothing. Progress and the streak live
  in localStorage only. Events: `daily_done { score }` and `share { medium: daily }`, read by RiftCompare's
  growth report like every other share.
- Measure: share taps and share visits with medium `daily` in the weekly growth report. Drop it if it brings
  nothing in four weeks.

## 2026-11-03 — The Price Duel as a widget

**Why.** The growth plan's fourth loop: a widget on a creator's or club's page shows our name to their audience,
so it grows with their traffic. Creators want something that changes daily more than a static price badge.

**What.** `/embed/daily` is a script-free HTML widget: today's puzzle number and first pair (art and names,
prices hidden) and one link to `/daily?utm_source=embed&utm_medium=daily`. A route handler reading the date, so
its only cache is the CDN header, held until midnight UTC (`secondsToUtcMidnight`). It reads the same pool as
`/daily` (`src/lib/daily-data.ts`). The snippet is on `/embed` with the iframe and one plain text link.

## 2026-11-03 — The quick view shows the product's own link

**Why.** Owner: "quickview popup should have a link change as well for all sites, instead of using the same link". The
pop-up kept the list page's URL, so a copied or bookmarked link lost the product, and Back left the page instead of
closing the pop-up.

**What.** Opening a quick view pushes the product page's own existing URL (/card/<slug>) with `history.pushState`
(`src/lib/quick-view-url.ts`, the same file on every site). Back closes it and restores the list's URL, Forward reopens it,
closing it (×, Escape, the backdrop) steps back, so the history never fills with pop-ups. "See price history and details"
only hides the pop-up and navigates to the URL already shown, which Next turns into a replace: Back from the product page
goes to the list. The entry copies Next's own history state (`__NA` and the router tree), so the app router passes the
push through and the page under the pop-up never re-renders.

**SEO.** No new URL exists: the link is the canonical product page, which a reload, a share or a crawler gets in full
server HTML. Never a `?view=` or `#` variant (duplicate URLs, extra CDN copies). Pinned by `tests/quick-view-url.test.ts`.
## 2026-11-03 SEO audit: alt text, homepage title brand, ItemLists (engine)

Bill's network SEO audit (homepages only) found empty `alt` on product photos on every engine site and no brand in
Cyberpunk's title ("Cyberpunk TCG Card Prices — Compare 160 Stores": the long game name pushed " | Cyberpunk Compare" past
60 characters, and `fitTitle` then took the bare title). Every product photo, search thumbnail, ad tile and the logo now
has descriptive `alt` (the name). The homepage title ladder tries every candidate WITH the brand before any without, so
Cyberpunk reads "Cyberpunk TCG Card Prices — 160 Stores | Cyberpunk Compare". The homepage lists its shelf and chase cards
as an ItemList and sealed hubs got one like set pages'. Already in place and kept: Product + AggregateOffer on card,
sealed and kit pages, BreadcrumbList on every deep page, Organization/WebSite/FAQPage on the homepage, llms.txt.
hreflang is deliberately absent: the market is picked in the browser on ONE URL per page, so there are no regional
alternates to declare. `tests/seo-audit.test.ts` pins it.

## 2026-11-03 Sealed hero on the homepage (engine option `homeSealedHero`)

Bill: "if sealed products are driving most of our sales on some of our websites then for those websites we must make it
a big part of the home page and attention grab". The growth report for the week to 2026-11-02 says which: YGO Compare
earned A$39.93, A$38.40 of it from `preorders_pinned` eBay (sealed pre-orders); DexCompare and MTG Compare are
sealed-only and already open on sealed; OP Compare's money came from the card quick view and RiftCompare's from cards
and pre-orders together, so neither changes. On YGO the homepage opened with card ad strips and showed sealed fourth.

`SITE.homeSealedHero` (off by default) puts `components/SealedHero.tsx` straight under a shortened title block (on a
phone the header already has search and market, so the hero's paragraph, market chips, search box and button row are
hidden there): the newest booster box as a spotlight with its photo, cheapest store price, a Buy button through `/go`
(`home_sealed_hero`, `home_sealed_preorder`) and a labelled "Ad" eBay line (`home_sealed_hero_ebay`), then six more
boxes and each set on pre-order with its boxes. It replaces the plain sealed shelf. Built by `lib/sealed-hero.ts` from
the same committed data (a few set shards, no new read on any other page), every market's prices sent and the
visitor's picked in the browser like every price island. Store prices only in their own currency; eBay, Amazon and
TCGplayer are never "the cheapest store". A saving is shown only when real: the cheapest store against the middle
in-stock store of that market (3+ stores, 5–45%), or in the US against TCGplayer's market price (3–45%).
`tests/sealed-hero.test.ts` pins it. On for YGO and Cyberpunk (a sealed-first launch); Gundam and Lorcana have no
affiliate sales yet to say either way, so they keep the shelf. Judge it by `home_sealed_*` tags in the growth report.

## Rate us and "What people say", run by RiftCompare (2026-11-03)

Engine change, in all four repos. The owner wanted RiftCompare's rating pop-up on every site, each site's reviews public, and
every written review approved in RiftCompare's admin; star ratings count at once. The site stores nothing: the corner card
(`components/site-reviews/RateCard.tsx`, in the root layout) posts cross-origin to `https://riftcompare.com/api/site-reviews`
(keyed by `SITE.key`, which must be on RiftCompare's list), and the homepage's "What people say" reads the score and approved
reviews from `https://riftcompare.com/api/site-reviews/<key>` in the browser (public JSON, CDN six hours): no function, no data
read, no build step. The card copies RiftCompare's corner card, not its rating drive: never on arrival, after 4 pages and 3
minutes or on return from a store tab, at most three times 14 days apart, always closable; "Rate us" in the footer opens it.
While no ad script is on the page it says "We don't run banner ads, so if this helped, please leave us a review." (owner, same
day). No email asked for, never review markup. RiftCompare's DECISIONS.md, "Every site's reviews, approved in one queue".

## Amazon is the third pinned row (2026-11-03)

Engine change, in all four repos. The owner wants Amazon on every site "up there with eBay and TCGplayer", as "the third
row out of the three". The sealed product table's Amazon row (a tagged search of the visitor's own Amazon, no price) used to
sit right under the first eBay row, so on a product where eBay led it came before TCGplayer. `PriceTable` now puts it after
the last pinned row (eBay and TCGplayer, the cheaper first), or first when neither is shown. Still sealed only (a single
card's Amazon search finds the wrong thing), still product pages only (no Amazon in the quick view), never ranked, never
the cheapest.
## 2026-11-03 — Engine: several games on one site (`SITE.lines`), "series" numbers, BandaiCompare joins

BandaiCompare (`Specifxx/bandaicompare`, bandaicompare.com) runs this engine for three games at once: Union Arena,
Dragon Ball Super Fusion World and the Digimon Card Game. The engine gained, all off by default: `SITE.lines`
(several TCGplayer categories in one catalogue, each set tagged with its game, a hub per game at `/games/<slug>`,
per-game eBay words and TCGplayer links, ad strips that stay inside a game), `NumberStyle` "series" (Union Arena's
"REZ-1-053" beside the "code" numbers) and `SITE.disclaimer` (a not-affiliated sentence in the footer, /about and
/terms). This site sets none of them, so its pages, slugs and matching are unchanged. BandaiCompare is in the
family registry and in `sisterSites`; the sister-sites test now allows eleven or more. BandaiCompare's
DECISIONS.md has the reasons.

## The engine looks like RiftCompare: left rail, one concise homepage, one small ad pair (2026-11-03)

Engine change, in all four repos and BandaiCompare. The owner: "I kind of don't like the card engine … way too square …
too many ads … the homepage could be sorted much better … way too convoluted, make it much more concise", with
RiftCompare's homepage as the gold standard (minus accounts and Pro). What changed, and why each way:

- **A left navigation rail** (`components/SideNav.tsx`, `lib/nav.ts`) from 1024px up, like RiftCompare's, Dex's and OP's:
  the logo, a feature filter, and every section in three groups (Prices, Free tools, Guides & news). The header keeps the
  search, region and theme and, below lg, the logo and a scrolling row of the main sections. The page keeps
  `--sidenav-w` (15rem) of room (`globals.css`, `tests/sidenav.test.ts`). Every link is server HTML.
- **Rounder** (`tailwind.config.ts`): md 8, lg 12, xl 16, 2xl 20px; pill buttons and chips; cards rounded-2xl. Nothing
  else about the colours changed, so each site's own `src/content/site.css` still rules its look.
- **The homepage in RiftCompare's order**: a centred hero (logo, "<game> Card Prices", the promise, the search, region
  pills, six trending chips, one stat line), then Today's top deals, sealed, the newest set's chase cards, What people say,
  Guides, the FAQ. Gone from the page: the ad strips under the hero, the AdSense slot, the creators card, the Free tools
  grid, pre-orders, movers and set grids (all one click away in the rail). Every URL, title, description, H1 phrase,
  JSON-LD block and FAQ stayed, so nothing indexed moves.
- **Ads only where a visitor is already looking at a product** (owner: "get rid of the ads under the hero … have them
  show up on every card page and quick view open … a smaller section"): the small eBay + TCGplayer pair
  (`CompactCardAds`) under a card page's price and inside the quick view (`/api/quick` now carries six tiles each); the
  full-size strips, the homepage pair, the set-page pair and the site-wide footer pair are deleted. This overrides the
  2026-10-28 plan to measure the strips on 11-10. `/go` tags keep the `-mini` names, so the Monday digest still adds up.
  Never Amazon in the quick view (Amazon's agreement forbids it in a pop-up); nothing here changes that.
- **A living hero** (`components/HeroSparks.tsx`): drifting motes in the site's own colours that part around the pointer,
  a soft light under it, and a burst of sparks on a click or tap. One canvas, aria-hidden, under the content; it stops
  for reduced motion and while the hero is off screen. Sections ease up as they scroll in (`.sd`, `.sd-stagger`):
  scroll-driven CSS view timelines, transform only, never opacity, so no content is hidden from a crawler or a browser
  without them.
- **The creators bubble** (`components/creators/CreatorsBubble.tsx`): a small pill in the hero's corner into `/creators`
  (RiftCompare's), on sites with creators; the big homepage card is gone.

## A card's headline price is what it sells for; empty tools stay off the rail (2026-11-03)

Engine change from BandaiCompare (its DECISIONS.md, same date): `referenceCents` is TCGplayer's market
price only, never its mid or low (a product nobody has sold has only one seller's ask, and a $28,000
ask topped every "most valuable" list there). A product without a market price has no headline price
and ranks nowhere. Deals come from stores only, never an eBay row. Movers, Rising Cards and the monthly
report leave the rail, phone row, footer and tools hub until a week of history exists (`historyOn()`).
`tests/reference-price.test.ts`.

## Zero-data card pages are noindex; a schema price is good until tomorrow (2026-11-04)

From the owner's Gemini SEO research (the 20-action plan, 2026-11-04): a programmatic page with nothing of its
own is what Google's scaled-content and soft-404 rules describe. A card page with no TCGplayer market price AND
no store or eBay listing now carries `noindex, follow` (`src/lib/indexing.ts` `cardIndexable`, used by
`/card/[slug]`): still reachable and still passing links, out of the index. Cards of an upcoming set are kept
(no price because the set is not out; reveal-week searches are theirs), pack inserts stay out as before, and
nothing is deleted or moved (owner, 2026-11-03: narrow, never delete). The sitemap rule (`sitemapMinCardCents`)
is unchanged and stricter, so no sitemap URL is noindex. The card page's `AggregateOffer` also carries
`priceValidUntil` = tomorrow, as RiftCompare's does: prices refresh with the daily import. The rest of the
plan was already in place (Product + AggregateOffer, set hubs with set value, `/methodology`, tiered sitemaps
with lastmod, "Prices checked" times, llms.txt, no sister footers) or declined: EV calculators (no verified
pull rates, and we never invent a number), graded-tier pages (no graded data), footprint "isolation" (one
engine on purpose), /de and /ja editions (not yet). `tests/seo-audit.test.ts`.

## 2026-11-04 — No Product markup without an offer

Search Console (owner, 4 Nov) showed gundamcompare.com with 20 invalid Product
snippets, all "Either offers, review, or aggregateRating should be specified":
cards with a TCGplayer reference price (so indexed) but no in-stock US store
listing, for which the card page emitted a Product with `offers` undefined.
Google treats that as an error, not a thin item. The card page now renders the
Product block only when at least one in-stock US offer backs it (engine change,
synced from Gundam Compare); a card with only a reference price has no Product
markup rather than an invalid one. `tests/seo-audit.test.ts` pins it.

## 2026-11-04 — HBT Collectables is removed and banned: they asked not to be linked

HBT Collectables (hbtcollectables.com, AU) answered the store outreach email by sending it to their lawyers as
"unauthorised linking" under their site's terms. The owner's call: take them off every site, apologise, send them
no more visitors. Here the store leaves `src/content/stores.ts` (so `decodeOffer` drops any row of theirs an older
data commit still holds) and its rows leave `data/public/` (prices, summary counts, meta) and the research
files. Both hosts are on RiftCompare's `data/store-vetting/banned.json`, so the weekly vetting goes red if any
site lists them again. Not a judgement on the store: it does not want the traffic, so we don't send it. The
change rides the next daily data release.

## 2026-11-04 — List your store: stores come to us

The owner stopped cold email outreach ("not really doing anything") and set the aim: be popular enough that stores
ask us, and encourage the ones that do. Every Compare Empire site now has `/list-your-store` (shared
`ListYourStore.tsx` + the `ListStore` form in `ReportForms.tsx`), linked from the footer, `/contact` and the stores
page: what a store gets (free, no contract, never pays to rank), what we need (a readable shop, own currency,
established), and what happens next (checked within a few days, reply through the store's own contact details).
The request is filed as a `suggest-store` report with `issue: "owner"`; RiftCompare's daily reports triage puts
those first and asks for a reply within two days. No email is asked for (the reports branch is public); no pop-up,
no cold email. RiftCompare and OP Compare keep their `/stores/suggest` page (now the owner pitch) and redirect
`/list-your-store` to it.

## 2026-11-05: Amazon's own price on the sealed pages' Amazon row, from the Creators API

The owner's US Associates account was approved today and he asked for Amazon's API prices as price rows on every site.
In this engine (sealed products only; singles keep no Amazon row), two script-side steps and one reader:

- `scripts/amazon-asins.ts` runs in the daily refresh after the import (`refresh-prices.yml`), in every market with its
  own Amazon and our tag (US, UK, CA, AU, DE for the eurozone; Singapore has none). It searches Amazon for each sealed
  product with an in-stock store offer (most stores first, `AMAZON_SEARCH_BUDGET` a market a day) and keeps a result ONLY
  when the store matcher (`lib/import/match.ts` `matchSealed`) lands on that product: the rule that matches the stores
  matches Amazon, a wrong merge being worse than a missing price. ASINs and misses go in `data/amazon/asins-<MARKET>.json`
  (keyed by product id; ASINs may be stored; a miss is retried after 30 days) and ride the data commit;
  `status-<MARKET>.json` says what the last run did, and the ops monitor reads it ("Amazon ASIN finder": informational
  until access, a warning once a market's finder stops running).
- `scripts/fetch-amazon-prices.ts` runs first in every Vercel build, fetches today's prices for those ASINs (`getItems`,
  ten a call, one a second, `AMAZON_BUILD_CALLS` a market, 30 by default) into the git-ignored `data/amazon-live/`, and
  drops a price under 60% or over 160% of the product's in-stock store median. Prices are never committed: Amazon's
  licence lets a price be kept 24 hours and shown with its time.
- `lib/amazon-live.ts` `amazonCells` upgrades the card page's per-market Amazon searches to the item's own tagged page
  and, while under 24 hours old, its price; `PriceTable` shows it in the Amazon row (still third, under eBay and
  TCGplayer) with "as of <time> <market clock>" and the licence's disclaimer, and the browser hides the price after 24
  hours (`AmazonPrice.tsx`) because the page sits in the CDN for hours. The row stays an ad outside the store order:
  never ranked, never the cheapest, never in deals, movers, alerts, history, the feed, metadata or the quick view
  (`tests/amazon-api.test.ts` pins the reader to the card page and the client to the scripts). Both files are traced into
  the functions (`next.config.js`).

One credential serves every store: `AMAZON_CREATORS_AU_CLIENT_ID` / `_CLIENT_SECRET` / `_VERSION` as GitHub secrets and
Vercel Production variables (the same values on every site; `AMAZON_CREATORS_<MARKET>_*` would override for one store).
Access is per marketplace and opens by itself once that store's account has qualifying sales (about 10 in 30 days); a
refused store is skipped, so the feature costs nothing until then and switches on without a code change. Engine code, landed from
Lorcana Compare the same day.

## 2026-11-06 — Awin: a store that accepts the family pays from the next build, with no step by hand (engine)

**Decision (owner: "check if we are making the most of Awin, and if it's not there, just do it"):** the family's Awin
account (Compare Empire, publisher 3144410) is read each morning by Compare Empire's `scripts/awin-sync.ts`, which
publishes the programmes that accepted us, with their tracked domains, in its public `data/awin/programmes.json`. Each
engine site copies it in its build (`scripts/fetch-awin.ts` → `src/lib/awin-programmes.json`; the committed copy is an
empty list). The `/go` redirect's `tagged()` sends a link to a joined advertiser's own domain through its Awin deep link
(`clickref=<site>-<sub>`); every other store keeps its utm-tagged link. Order and prices never change.

## 2026-11-06 — Store thumbs up and down, one tally shared by every site

**Decision (owner: "a little mini area where you can rate a shop … thumbs up a store or thumbs down a store … across all
the sites you can now see that these stores are trusted"):** every store row carries two tiny thumbs beside the store's
name (`src/components/StoreVote.tsx`, the same file on every Compare Empire site), with counts once a store has votes and
a green "Trusted" mark from 3 thumbs up and 80% of the votes. RiftCompare keeps the votes and serves one public tally
(`riftcompare.com/api/store-votes`, CDN six hours), keyed by the store's host without "www.", so a shop listed on several
sites shares its thumbs; this site stores nothing and fetches the tally in the browser only (no function, no build
step). One vote per browser per store, a few per network, marketplaces (eBay, Amazon, TCGplayer…) get none. Votes never
order prices, hide a store or decide the cheapest. RiftCompare's DECISIONS.md, 2026-11-06, has the rules; change the
component there first and copy it.
## 2026-11-06 — Side rails: eBay left, TCGplayer right, the column a little thinner from 1280px (engine)

**Decision (owner: "I really like what the Dex Compare and MTG Compare engine have, where the actual site is a little
thinner and then you have the two ad banners, one for eBay, one for TCGplayer, on the sides … make sure that everything
else fits and is aligned"):** from 1280px (every regular 16:9 and 16:10 screen) the page column (`max-w-7xl`: the
header's contents, the pre-order strip, `main` and the footer) narrows to `min(80rem, 100% - 320px)` (`globals.css`, "The
side rails"), and `components/SideAds.tsx` fixes a 136px rail 12px outside each side of it, under the header to the
window's foot: real cards and sealed with today's eBay Buy It Now price in the visitor's market down the left (beside the
navigation rail; eBay US where a market has under four tiles), TCGplayer's market price down the right. Ten tiles each,
newest sets' leading products first (`cardAds({ limit: 10 })`, the card ad pair's own selection), scrolling inside the
rail. As the card ad pair, this overrides the 2026-11-03 "only the small pair" ad rule for wide screens only.

- Browser only. The rails mount after hydration, only while the window is 1280px+ and tall enough for one whole tile,
  and only then ask `/api/rails` (CDN-held six hours). Nothing is in the server HTML: no SEO change; CLS 0 because the
  room is CSS and a fixed element takes none. URLs, titles, metadata, h1/h2 and text are unchanged.
- Realigned for the thinner column: the homepage hero band fills the column (rounded) instead of bleeding to the window,
  so nothing runs under a rail; product and kit tile grids show five across from 1280px and six again from 1440px
  (`.tile-grid`). Below 1280px nothing changes.
- Every link is sponsored, through `/go` with its own tag (`side-ebay-rail`, `side-tcg-rail`, `-all`), labelled "Ad".
  `tests/side-ads.test.ts`.

## 2026-11-06 — Buy links open the store's checkout

**Decision (owner: "for all the sites that we can, send them directly to the checkout page, with the item in the
basket"):** an in-stock Shopify store row opens that store's checkout with the priced item in the cart, through
Shopify's cart permalink (`/cart/<variant id>:1`), as RiftCompare (#340) and OP Compare (#99) do. The engine's Shopify
reader has always stored `?variant=<id>` on every offer URL, so no import change is needed: `goHref` adds `c=1` to an
in-stock store row's `/go` link whose URL names a variant, and `/go` → `tagged(…, { checkout: true })` returns the cart
link with the usual referral tags plus `utm_content=checkout`. Awin stores keep their tracked product link (Awin is
asked first); eBay, TCGplayer, Amazon, sold-out rows and non-Shopify stores keep product pages. `buy_click` carries
`link_type`. `lib/checkout-link.ts`, `tests/checkout-link.test.ts`. Engine change: same in all three repos. Revert by
dropping the `c` flag in `goHref`.

## 2026-11-06 — The phone dock: the side rails' ads on screens too narrow for them

Owner: "how can we have those [eBay and TCGplayer side rail ads] on mobile phone … like I have a Z Fold 7 … but also iPhones.
How do we get those ads to show on phones in the best way that doesn't interrupt user experience, but will also potentially
get a couple of clicks."

**Pattern:** below the rails' width, one bar along the foot of the screen (`AdDock.tsx`, fed by the rails' own tiles in
`SideAds.tsx`), the phone buy bar's size and rules: 64px plus the safe area, slides on transform only (CLS 0), never on the
first screen (only after 60% of a screen is scrolled), hidden while any other ad unit, the footer, a dialog, the menu or the
keyboard is in view, never on a page with the buy bar (product pages keep their own units), ✕ for the visit. On a phone it
shows one tile at a time with a View button, eBay and TCGplayer taking turns: the next tile peeks at the edge and swipes, and
each time the dock comes back it shows the next one (nothing animates on its own). From 640px (tablets) both sides at once.
Nothing is in the server HTML and nothing is requested until the visitor scrolls a third of a screen: no SEO change.
Placements `listings-dock` / `tcgplayer-strip-dock` (or the site's equivalents) so its clicks can be read on their own.

**Why this pattern (viewport simulation, Playwright, a local build):** Galaxy Z Fold cover screen (411×960, ~21:9), iPhone SE,
iPhone 16 (393×852), iPhone 16 Pro Max (440×956), iPad (820×1180); home, browse, a guide and a product page, stopping every
half screen. Without the dock an ad unit was in view at 8–20% of stops; with it 75–90% on the home page and guides, ~70% on
browse, 0% on product pages (by design). Never two units in a phone screen because of the dock, layout shift unchanged, the
bar is 7% of the Fold cover screen and 10% of an iPhone SE (Better Ads' "large sticky ad" line is 30%). Rejected: an extra
in-flow strip (the pages already have one unit per screen at most and in-flow ads are what the visitor already scrolls past),
a corner chip that opens a sheet (an overlay, and a tap before any product shows), a ticker under the header (covers the top
of the page, where searchers land). Split halves (eBay | TCGplayer) were tried on phones first: at 375px each title was cut to
a word, so phones show one at a time.

**Measure:** the dock's placements against the strips' in the ~11-10 / ~11-17 checks. If pages per visit drop on phones,
raise DOCK_ARM or drop the dock from that site first.

## 2026-11-06 — A cart list on every site

**Decision (owner: "I really like the cart feature … all of our websites"; built on RiftCompare first, TCGEmpire
#346):** every store price row gets an "Add to cart" button, and the header a cart with its count on every width.
`/cart` (static, noindexed, out of the sitemap) groups the lines by store with ONE "Check out at <store>" button per
store: Shopify's cart permalink `/cart/<variant>:<qty>,…`, which fills that store's cart and opens its checkout. The
list lives in the visitor's browser only (`localStorage` `ce_cart_v1`): no account, no database, no function. The page
re-checks each line's price and stock from the store's own `/products/<handle>.js` in the browser (Shopify serves it
with CORS open) and leaves a sold-out line out. A line is cartable only when the row's own buy link already is a cart
permalink (the single-click checkout links), so Awin and partner stores, and rows whose variant we don't know, stay
"manual" lines on their own tracked links; eBay, Amazon, TCGplayer and Cardmarket are never lines. Shared files, the
same in every site (port fixes by hand): `src/lib/cart-list.ts`, `src/components/cart/*` (`cart-config.ts` is the
one per-site file; styles imported once from the root layout), `tests/cart-list.test.ts`.

## 2026-11-06 — eBay and Amazon rows are full price rows, on top, outlined

**Decision (owner: "eBay prices and Amazon prices should function exactly like a normal store price row. So you can also
add to cart … if it's in stock … it just sits on the very top. And it has a different colored outline"):** the eBay row
is always the first row, with a green outline, and Amazon the second, with an amber one. Both carry everything a store
row has: the stock line, the store thumbs (one tally per eBay / Amazon domain, `ebay.com.au`, `amazon.com`…) and the
cart button. They are "manual" cart lines on their own tagged links (`src/lib/cart-list.ts`), never a Shopify checkout;
an Amazon line's price is dropped from the visitor's list after 24 hours (Amazon's licence), and the cart then says to
see today's price on Amazon. With no Amazon price the row reads "Also check on Amazon", a tagged link. Unchanged: neither
is counted as a store, "Best price", a deal, an alert price or the reference price; TCGplayer and Cardmarket stay
references (no thumbs, no cart line); no Amazon link in a pop-up.
On this engine (Lorcana, Cyberpunk, Bandai) TCGplayer, when pinned, now sits under Amazon: `pinnedOrder` no longer puts
a cheaper TCGplayer row above eBay (it did from 2026-10-27).


## 2026-11-06: one price story on a product page (shopper review)

A shopper review of Cyberpunk Compare found a box page that disagreed with itself. Engine fixes, in all three sites:
the card page's summary sentence names the cheapest in-stock **US** listing (it sorted every currency by its number
and printed "£93.99" on a US page); a lone in-stock listing is tagged "Only listing", never "Best price" (one $1,200
TCGplayer row on an $800 card); a list tile's price is labelled "market" (it is TCGplayer's market price, per the
reference-price rule, while the homepage shelf shows the cheapest store); and the homepage sealed shelf says
"Pre-order at <store>" when its cheapest store is a pre-order of a product already out ($107.95 at Flipside on the
home page, absent from the box page's in-stock table).

## 2026-11-06: The quick view carries the tagged Amazon link (owner)

Since 2026-11-02 the quick view showed no Amazon link (or, on KaeYoung and ScentCompare, an "Amazon" row that opened our
own product page), read as Amazon's ban on links in pop-ups. The owner noticed the quick view sends nobody to Amazon and
chose (2026-11-06) to put the product page's own tagged Amazon link there. Amazon's Participation Requirements, item
(o): "You will not post or serve any Special Links … within any pop-up or pop-under windows, transitional page ads, or
layer ads, except for pop-up windows in conjunction with your Site promoting Products closely associated with the
materials on your Site." A quick view the visitor opens for one product, showing that same product, fits the exception;
the owner accepted the remaining risk. The quick view shows the link only (the item's own page where the ASIN is known,
else the tagged search), never Amazon's price: that stays on the product page under the 24-hour licence. Uninvited
overlays (a phone ad dock, a corner card, an exit pop-up) still never carry Amazon, and an Amazon page is never framed
(item (n)).

## 2026-11-07 — The low-traction cull: cheap cards leave the catalogue, culled URLs 301 to their set

Owner, 2026-11-07: apply Compare Empire's focus cull ("less is more") to every site; cut products with no
traction to lower costs and keep only what people want. Search Console (56 days, exported daily to this
repo's `demand` branch by RiftCompare's sister-demand job) shows card pages under $1 get almost no
impressions and no clicks: nobody compares store prices for a bulk common, and thousands of near-empty
pages are what keep a new domain "Discovered – not indexed".

- `SITE.catalogMinCardCents` (the floor that already existed for BandaiCompare) is now set on every engine
  site: Lorcana $1 (≈3,990 → 1,840 products), Cyberpunk $1 (nothing yet: every set is under 120 days old),
  BandaiCompare $5, up from $1 (≈9,990 → 6,370). Sealed always stays; sets released in the last 120 days
  or upcoming stay whole.
- A card page with a click or 10+ impressions in Search Console stays whatever its price
  (`lib/import/demand.ts`, read from the `demand` branch at import; no branch means the floor alone).
- The import writes `data/public/culled.json` (card slug → set slug); `/card/<culled slug>` 301s to the set
  (`lib/culled.ts`). A card that climbs back over the floor gets its page back at the same URL.
- Price history keeps every card, so a returning card keeps its chart.

(item (n)).

## 2026-11-07 — Meta descriptions fit 120–160 characters

The owner's Search Console and Bing audit (2026-11-07) flagged Lorcana Compare's (the shared engine's) meta descriptions as too short. Every
page's description now passes through `fitDescription` (`src/lib/seo-title.ts`): a description under 120 characters
gains true site-wide sentences it does not already say (store count with TCGplayer and eBay, daily prices in your
currency, cheapest in stock first, free with no account, the site's name), and one over 160 ends at its last full
sentence inside 160, else at a word with an ellipsis. It never adds a fact about the page itself. Titles, URLs and
headings are unchanged. `tests/meta-description.test.ts` pins the window and fails a page whose metadata sets a
description without it. Engine change, so Cyberpunk Compare and BandaiCompare get it byte for byte.
## 2026-11-07 — Black Friday strip and Cyber Monday page (owner: "capture all of the Black Friday SEO")

Black Friday is 27 November 2026 and Cyber Monday 30 November. Three additions, every Compare site:

- **`/cyber-monday`**, its own URL for its own searches ("<game> cyber monday deals"), kept every year like
  `/black-friday`, listing the same real store deals. In the sitemap and footer; the two pages link each other.
- **The holiday strip**: one line under the header on every page, in the server HTML, linking `/black-friday`
  from 1 November to the Saturday after it, then `/cyber-monday` to the day after Cyber Monday, then nothing
  (`saleStrip` in `lib/black-friday.ts`, tested). The same link leads the nav while it shows. A link, never a
  pop-up (pop-up policy: no uninvited interruption on a visit's first page), never a countdown or "ends soon".
- **More on both pages, nothing taken away**: the URL, title and h1 of `/black-friday` are unchanged; below the
  existing rows come each other market's own store deals (its currency, never converted) and four visible
  questions (the dates, whether stores have sales, shipping, how often it updates). No FAQ rich-result markup:
  Google shows those only for government and health sites since 2023, so the text is what ranks.

## 2026-11-07: A case listing must be the case (engine)

An eBay seller wrote to MTG Compare that a 120-pack sleeved case was a six-box case's "best price, 26% below the median"
(mtgcompare #94). The engine audit found the same shape here: an acrylic case for one box, a "Sealed W/ Case" box, a
"Half Case (6 boxes)", an "Open case of 4 … Illumineers Trove" and 48 sleeved packs, each filed as a Booster Box Case.
`wrongCase` (`lib/import/ebay.ts`, inside `listingMatches`, so the next import also purges stored offers without a call)
refuses on any case product: an item in or with a case, a half or open case, sleeved packs unless the product is
sleeved, a case of another product type, and, where `SITE.caseUnits` / `SITE.casePacks` give the count (Lorcana 4 boxes
/ 96 packs, Cyberpunk 6, Bandai Union Arena 16, Fusion World and Digimon 12: the counts sellers and stores state), a
title whose stated counts are none of it. Only stated counts are read; no count configured means no opinion. The
eBay price never sets a deal or the headline price here (TCGplayer market does), so no outlier guard was needed.

## Black Friday indexing push (2026-11-07)

Owner: get every Black Friday page indexed. The sale pages (`/black-friday`, `/cyber-monday` and the other seasonal
pages) were in the sitemap but not in the daily IndexNow list, which sends only the hubs it names: they are named now.
A blog post, `<game>-black-friday-2026`, lists the newest sets' sealed product with today's prices (`{{sealed:SETID}}`
tokens, so the "prices to beat" stay live) and five checks for a real deal, and links to both pages; the pages link
back to every post whose title or keywords say Black Friday or Cyber Monday (`postsAbout`). No FAQ schema, no
countdown, no "was" price.

## 2026-11-08 — One Our sites page instead of footer cross-links

From the owner's Search Console audit of DexCompare: its only links from other sites were ~9,000 site-wide footer
links from our own sites, all to its home page, with the brand or a keyword as the anchor. They pass no authority,
and a network of same-owner sites linking each other from every page is the pattern Google's link-spam policy warns
about. CamCompare indexes well with more of them, so they are not what holds a site back, but they buy nothing.
DexCompare's footer went first (CompareEmpire #153); every other site now does the same: the footer links one
internal page, `/our-sites`, and that page links each other family site once, by its plain name, from
`FAMILY_SITES` (`lib/family-network.ts`, unchanged; `footerSisters` stays for the shared test). Every other footer
link, page URL and title is unchanged. Cross-traffic still comes from the price blocks on the deals and pre-order pages.

## 2026-11-08 — Engine: the store focus option (off here)

BandaiCompare's cull (bandaicompare DECISIONS.md, same date) added `SITE.catalogFocus` (`lib/import/focus.ts`): after
the store pass, keep products the stores sell, chase cards, new sealed and search demand. It is off on this site (no
`catalogFocus` in `site.config.ts`), so nothing here changes; the synced set page now 301s a released set with no
products to its game hub or `/sets` (none today).

## 2026-11-08 — Christmas is one quiet line, not a costume

Owner: "some of the christmas themes on our websites are a bit too much - the theme must match the domain". The
2026-11-01 Christmas look (falling snow, a strand of lights, trees, presents, candy canes, stockings, a Santa hat on the
logo, candy-cane stripes and seasonal palette swaps) is gone, with its art in `public/xmas/`. The season keeps at most ONE
touch, drawn in the site's own colours: the gifts line in the hero (`ChristmasGifts`, `.xmas-pill`), a plain pill that inherits the hero's text colour, with no gift icon or red glow. (wording still `SITE.christmas`). It still starts and ends by itself (`lib/season.ts`, 1 November to
Boxing Day), and the tests pin that nothing else comes back. Black Friday and Cyber Monday (strip, pages, nav) are
unchanged. The same rule went to every sister site: the site's own identity first.

## 2026-11-08 — The card share image is text only (Vercel cost cap)

Vercel's billing (owner's team, 2026-11-08) showed ISR writes as the biggest line on the team after Compare Empire's
CPU, and Observability put ~90% of this engine family's ISR write units on one route: `/card/[slug]/opengraph-image`.
Each image carried the card's art and came out at ~580 KB, and Vercel bills every cached copy by the 8 KB write unit
(~72 units per image, written again each day and after every deploy as crawlers fetch `og:image`). The image keeps
everything that makes it worth sharing (name, set and number, the US price gap or TCGplayer market) and drops the art:
flat colour and text render at ~49 KB, about a twelfth. `tests/share.test.ts` fails if `<img>` or `imageAt` comes back.
The page itself still shows the art; only the link thumbnail lost it.

## 2026-11-08 — The alert form asks, unticked, for a weekly price drops email

Owner, on the 2026-11-08 competitor scan: "implement all of this" (gap #5, a weekly email of the biggest price drops).
The shared `PriceAlertForm.tsx` (byte-identical on every sister site) gains one UNTICKED box, "Also email me this site's
biggest price drops once a week", sent as `weekly` beside the alert. RiftCompare's alert service does the rest
(TCGEmpire DECISIONS.md, "A weekly biggest-drops email for the sister sites"): it rides the same double opt-in, builds
one edition a week from this site's own `/alert-feed.json`, links only to this site's pages (no eBay or Amazon), and
every email has a one-click stop. This site still stores no address and holds no mail key, and nothing new pops up.

## 2026-11-08 — Store badges, free price data and My collection (competitor scan)

The owner approved the competitor scan's ideas (Collectr and PriceCharting keep people coming back with "what is my
collection worth"; Scryfall grew on free data credited with a link; price sites earn links from the stores they list).
- **Store badge.** `/list-your-store` ends with "Already listed? Add our badge": the site's plain-HTML "prices compared on"
  badge (an ordinary link: no iframe, script, image or tracking) and its code to copy. `ListYourStore.tsx` takes it as the
  optional `badge` prop and stays the same file in every site. Stores see it when they come to us; nobody is emailed about it
  (cold outreach stays stopped).
- **Free price data.** `/prices.json` (`lib/price-api.ts`): every product's cheapest in-stock price per market, in that
  market's currency, with an absolute link to its comparison; never eBay, never converted. Free for any use with a visible
  link back (the licence and an attribution snippet are in the file and on the widgets page). Built from the same numbers as
  `/alert-feed.json` and served as a static file: no function runs for it and only a release changes it. Open CORS.
- **My collection.** "I own this" on the card page (`VaultOwn`, in the visitor's market like the rest of the page) (`components/vault`, `lib/vault.ts`, the same files in every site)
  keeps a list in the browser only (`ce_vault_v1`: no account, no database, nothing sent to us). `/collection` (a static,
  noindex shell) values it from `/prices.json` in the market each item was added in, one total per market (never converted):
  worth today, the change since the items were added, the change since the last look (one total per market and day in
  `ce_vault_days_v1`), and a share line with the real totals (`utm_medium=collection`). Values are the price to buy it again
  at a store, and the page says so. Linked from the footer.

## 2026-11-08 — "Is this a good price?": paste a store link

Owner, 2026-11-08 (the competitor scan's gap #7, "implement all of this"), ported from MTG Compare (mtgcompare #106): a visitor
pastes a store's product link at `/tools/is-this-a-good-price` (`components/LinkChecker.tsx`, `lib/link-check.ts`)
and sees whether it is a good price.

- The browser asks `/api/check/<host>` for that store's listings: our own stored rows, only for a store in `SITE.stores`
  (anything else is a 404), force-dynamic and kept by the CDN for a day, never ISR, built from the committed price files (every shard read once per instance). It never fetches the pasted
  page. Each listed product comes with its cheapest and median in-stock STORE price in the store's market (eBay and TCGplayer never count).
- A link is keyed by host and path (`linkPath`: a Shopify product is `/products/<handle>` from any collection or market prefix); two
  products under one path need the `?variant=` to tell them apart, or there is no answer (a wrong product is worse than none).
- Verdict (`priceVerdict`): within 1% of the cheapest in stock is the best price; under the median fair; within 3% of it typical;
  above it "you can pay less", with the saving. A listing that was out of stock says so instead. eBay, Amazon, marketplaces, stores
  we don't read and unmatched pages fall back to a search from the link's words, each linking to its price table.
- Pasting a link into the header search opens the checker (`#link=` in the fragment, so the CDN keeps one copy of the page).


## 2026-11-08 — Foreign products found by their handle, and a title naming another set's code

Gundam Compare had a store's Japanese Stardust Trails box ("...-gd06-jpn", S$70) on the English box's page:
`isForeign` knew "jp" and "japanese" but not "JPN", and many stores say the language only in the URL handle. The same
matcher runs here, so the fix is ported (Gundam Compare DECISIONS.md, 2026-11-08).

- `isForeign` (`lib/import/match.ts`) also refuses JPN, JAP, CHN, KOR, Thai, Indonesian, "(kr)" and Japanese, Chinese or
  Korean script; the importer checks the listing's URL handle for the same words (`handleOf`). The handle is read for the
  language only, never the set: stores duplicate a listing and retitle it, leaving the old set in the handle.
- A sealed title that names a release code (letters + two digits the catalogue knows: "[GD05]", "FB-10", "MP23") must
  name the product's own set, or a set whose name the product's set carries. A store's typo loses a row rather than a
  guess putting it on the wrong page.
- Replaying the stored rows: one Chinese listing ("...-副本") stops matching on Cyberpunk Compare; nothing changes on Lorcana Compare.

## 2026-11-09 — TokyoToys (UK) added; read through its `all-tcg` collection

Bill asked for TokyoToys (tokyotoys.com, Shopify, GBP, Birmingham head office, UK mainland delivery only, Royal Mail / DPD).
Vetted by hand: not on the family ban list; "TokyoToys UK Ltd" with four physical shops, phone, address, refund policy
(trading card sales are final, which is its right). It lists two Cyberpunk TCG products, the Welcome to Night City Retail
Booster Box (24, £120) and Booster Pack (£5), no starter decks.

- It has no Cyberpunk collection and the tag URL 404s, so the store is read through `all-tcg`. That collection's
  products.json returns only its newest 100 products and no second page, so the two items can fall out of it when the store
  adds a hundred newer TCG products; the price then disappears rather than going stale. Recheck if the row vanishes.
- Stock is real: the variants carry `inventory_management: shopify`, the page says "30 in stock" and `og:availability` is
  `instock`; the importer's `available` flag is what shows. Titles carry a "RELEASE 30th OCT 2026:" prefix and still match
  the Retail products (`tests/set-editions.test.ts`).
- No store logos exist on this site (stores are shown by name), so none was added.
- Not a fit for BandaiCompare: its Digimon, Dragon Ball and Union Arena searches return no sealed product. It does carry
  Gundam, Riftbound, MTG, Yu-Gi-Oh!, Lorcana and One Piece sealed, so those sites are candidates.
- Awin / Impact: nothing found that lists it; if it is an Awin programme we have joined, `awin.ts` tags it automatically.


## 2026-11-09 — Navigation by the game's own dimensions (owner: "navigation is very, very important")

Same engine change as Lorcana Compare (see its DECISIONS.md, 2026-11-09): one list from the hubs that exist (`lib/shop-nav.ts`)
feeds the header dropdowns, the rail's "Shop by colour / card type" groups and a phone menu. Cyberpunk's own dimensions come from
`SITE.cardHubs` (colour, card type) plus rarity, sets (Beta and Retail sets are separate entries) and sealed type. No new page.

## 2026-11-10: Three posts for the questions Search Console shows we nearly answer (CYB-1)

The blog brings 17 of 21 Google clicks. The 90-day query report (TCGEmpire `gsc-queries`, which now lists every question and "vs"
query) showed three clusters without a post of their own: the card list and card prices ("cyberpunk tcg cards list", "all
cards", "price guide"), the Legends ("all legends", "johnny silverhand card price") and pack counts ("how many packs in a
cyberpunk booster box", "pull rates"). One post each: `card-list.ts`, `legends.ts`, `packs-in-a-box.ts`. Every number is this
site's catalogue or TCGplayer's market price on 10 November 2026, dated in the copy; pack counts and MSRP are WeirdCo's (GAMA
Expo 2026, as the earlier posts). No pull rates and no box-topper ratio: WeirdCo has not published them. Content only, so no
engine sync.
## 2026-11-10: catalogue pages are one CDN copy per URL, never ISR (site review X5)

The site review (`/mnt/project-files/strategy/site-review-2026-11-10.html`) asked for hosting under A$3 a week. Card, kit,
set, sealed-type, rarity, facet, game, grade and pre-order release pages were ISR (`revalidate` + an empty
`generateStaticParams`): every first visit after a release was a render AND an ISR write, and ISR writes were OP Compare's
largest bill line until it moved to its CDN pattern (2026-10-17).

- Those ten routes are `export const dynamic = "force-dynamic"` and listed in `next.config.js` `CDN_PAGES`, which sends
  `Vercel-CDN-Cache-Control: public, s-maxage=86400, stale-while-revalidate=86400`: one cached copy per URL at the edge, no
  ISR write. Nothing in them reads a cookie, header or the session, so the copy is the same for every visitor.
- The hub pages keep their `revalidate` (prerendered, few URLs). `tests/vercel-cost.test.ts` pins the list and that no page
  revalidates under six hours.
- Engine change: identical in Lorcana and Cyberpunk Compare (only the changed files were copied, because Cyberpunk's
  `tests/set-editions.test.ts` already carried a TokyoToys case Lorcana lacks).

## 2026-11-10: eBay budget 2,500 to 600; the keyset now carries MotorCompare too (owner)

The eBay review (`/mnt/project-files/strategy/ebay-api-distribution-2026-11-10.html`) measured this keyset at 1,124 of its
5,000 calls a day: this site 360 (393 product and market pairs in all), BandaiCompare 764 since it went sealed only. eBay's
own counter showed 4,240 calls left 38 minutes before the daily reset. MotorCompare, held at 600 on Compare Empire's full
keyset with 10,957 of 12,141 products never searched, moves here. The owner approved the split: MotorCompare 3,300,
BandaiCompare 1,000, Cyberpunk Compare 600 (4,900, 100 spare). `SITE.ebay.dailyBudget` is site config, not engine, so there
is nothing to sync. Raise it again only with the owner, and only by taking the same amount from one of the other two.

## 2026-11-10: Canada becomes an eBay market (`SITE.ebay.marketShares`)

**Why.** The 30 days to 11 Nov (`/mnt/project-files/strategy/ebay-site-region-split-2026-11-10.html`): 86 Canadian
visitors and no Canadian eBay search, so a Canadian visitor's eBay row was empty. The catalogue has about 120 eligible
products and each of the US, UK and Australia searched all 120 a day (360 calls). Bill approved the recommended region
split the same day. Also needed for the new 600 cap (2026-11-10): with the old fixed shares, 0.125 of 600 is 75, which
would have stopped the UK and Australia covering every product.

**What.** The engine option `SITE.ebay.marketShares` (Lorcana Compare's entry of the same day has the mechanism; the
code is identical). Cyberpunk sets US 0.4, UK, AU and CA 0.2 each: 240 US slots for its 120 products and 120 for each
other market. A dry run on today's catalogue and state plans US 120 / UK 120 / AU 120 / CA 120 = 480 of 600 for the next
two runs (on a 300-call day: US 120, then 60 each). The site cap, and the keyset shared with BandaiCompare (1,000) and
MotorCompare (3,300), are unchanged. Canada uses `EBAY_CA`: Canadian sellers, CAD, stated postage.

## 2026-11-11: Fetch TCG marketplace row on card pages, Australia only

**Why.** Fetch TCG (an Australian marketplace) sent a partner feed (Bill, 2026-11-11). Its terms: show its prices with a
link back; never resell or pass the feed on; never use it to train or build a pricing model.

**What.** `scripts/fetch-fetchtcg.ts` runs in the build (after the other fetch steps, failure ignored) and writes this game's
slim rows to the git-ignored `data/fetch-live/au.json`; the feed is never committed (`data/` is public). `src/lib/fetchtcg.ts`
matches a card only on set, collector number and character name, exactly one set hit or nothing. The Australian card page
shows a labelled "Fetch TCG · Marketplace" row (violet outline) after eBay and Amazon, with Fetch's own link as sent. It is
never a store, never "cheapest", a deal, an alert, history or JSON-LD. `FETCH_TCG_API_KEY` is a GitHub secret and Vercel
Production variable only. The ops monitor warns (never fails) if the row is missing.

## 2026-11-12: the front page features the pricier items (owner)

**Ask.** Bill: promote the more expensive items, so a sale earns more commission; the cheap ones should not be advertised on the
front page. For the TCG sites that means sealed: booster boxes and the like.

**What.** `SITE.featureMinCents` = 4000 ($40). The home page's sealed shelf (`featuredSealed`), today's top deals (`deals()`: the
reference price must clear it, not just 500), the pre-order boxes in the shelf's tabs carry only products at or
above it (TCGplayer market; `worthFeaturing` in `lib/data.ts`). Cheaper products keep their page, their set and hub listings, search,
alerts and the sitemap; only the front page's selection changed, so URLs, titles, metadata and JSON-LD structure are as before.
Starter Deck Display joins the shelf's fill types. A pre-order with no TCGplayer price yet is still shown. Store rows within a
product are still sorted by price, never by commission; the reference price is TCGplayer's market and eBay is never a deal.


**Why this floor.** From the day's data (TCGplayer market, sealed): booster boxes $104 and $311; starter decks about $27; packs $7 to $13. The floor keeps the real
earners and drops packs and the cheapest decks. Revisit with the click-to-sale numbers (which placements earn) in the Monday report.


## 2026-11-12: a tasteful festive layer on the Christmas season (owner)

Bill asked on 2026-11-08 to strip the over-the-top Christmas theme ("the theme must match the domain"), and on 2026-11-12 asked for it to be
more festive again. We chose tasteful accents, not a return of the costume.

**What.** Behind the existing season window (`data-season="christmas"`, 1 November to Boxing Day, the visitor's date, `?season=` preview) and
ONE off switch, `CHRISTMAS_FESTIVE_LAYER` in `src/lib/season.ts` (it sets `data-festive` on `<html>` and gates the card's markup): (1) a one-line
"Christmas gift guide" card on the home page, an inline SVG gift in `currentColor`, linking the existing `/black-friday` page (the site has no gift guide), in the site's own surface and
text colours with a cranberry 3px left border and a pine icon; it is a link in the server HTML, not a heading, so every title, meta, h1 and h2 is
unchanged; (2) a 3px two-tone hairline (cranberry then pine, flat, no stripes) at the very top of the page, drawn by `body::before` from CSS
alone, with lighter tones in the dark theme for contrast; (3) the same two colour tokens (`--xmas-red`, `--xmas-pine`) on the gifts pill's border and the
Black Friday strip's bottom border, no new elements. No new page was made.

**Still gone, and pinned.** No snow, lights, Santa hats, candy-cane stripes, palette swap, sparkles, animation, image, webfont, extra request,
pop-up, floating rail or layout shift; no client JavaScript. The test pins both the new pieces and the absence of `@keyframes`, snow, flake,
canvas and repeating gradients in the Christmas CSS.

**Taking it off.** Set `CHRISTMAS_FESTIVE_LAYER = false` after New Year, or let the window end on 26 December: the card, the hairline and the
accents all go together. Without the layer the quiet gifts pill of 8 November  is what remains.

## 2026-11-12 — Amazon strip beside eBay and TCGplayer on the product page (owner)

The owner said most of his own spending is on Amazon and asked for Amazon links as visible as eBay's and TCGplayer's. The pinned Amazon price-table
row already existed (2026-11-06); what eBay and TCGplayer had and Amazon lacked was the photo strip. `CompactCardAds` now draws a third row, "amazon",
on the product page only, for US visitors, from products with a real ASIN in `data/amazon/asins-US.json` (`cardAds({ amazon: true })`), at least three
tiles. Tiles carry NO price ("View"): Amazon's licence. The link is the item's own tagged `/dp/` page, rel sponsored, through /go (`source=amazon`),
with the disclosure and Associate line. Plain text word, no Amazon logo or orange. Never in the quick view or the rails or the dock (the quick view
and rails call `cardAds` without the flag; `tests/card-ads.test.ts` pins it). Markets other than the US have no ASIN data yet, so they see no strip.

**Right side rail (owner, 2026-11-12: "just go ahead").** On a wide screen the right-hand rail shows the same Amazon tiles (no price, "View", tagged
/dp/ links, "Ad · Amazon Associate", plain "amazon" word) to US visitors when at least two products have an ASIN; every other visitor, and a site
without ASINs, keeps the TCGplayer rail. The phone dock never carries Amazon. The "All" link goes to the first tile's own page, never a category search.

## 2026-11-12 — Amazon only where Amazon carries the product (owner)

The owner: no Amazon links where Amazon doesn't sell the item (RiftCompare first). `amazonCarries` (lib/amazon-live.ts) gates the sealed page's and the quick
view's Amazon row: a real amazon.com ASIN, or else a mainstream retail type (booster box and pack, sleeved pack, starter, structure or other deck, tin,
collection, Illumineer's Trove). Cases, prerelease kits, displays, inserts and "Other" get no Amazon row.

## 2026-11-12 — A calmer price table (owner left the design to us; DexCompare's rule)

The owner found DexCompare's quick view too busy ("all the colored rows … a bit much") and left the redesign to us (CompareEmpire #196). The same
rows are here, so the same rule: a price table has ONE filled button, the best price's. The pinned rows' outlines of 2026-11-06 and 11-07 (eBay
green, Amazon amber, Fetch violet, the cheapest sky blue) are gone (`PIN_OUTLINE` keeps its keys and draws nothing); eBay's blue, Amazon's and
Fetch's filled buttons are the other rows' neutral button; the quick view's "See price history and details" is a ghost button. The cheapest row
keeps its tint and "Best price" badge. Rows keep their order, "Ad" / "Marketplace" tags and links; no URL, title, heading or text changed.
Measure outbound clicks per placement on 19 Nov against the week before.

## 2026-11-12: Only eBay and TCGplayer are paid placements

Owner: "we just want eBay and TCGplayer as the paid links at the top. That is why our revenue is declining." The Amazon row now
draws only with a real Creators API price (no "Also check on Amazon" search row), the Amazon side rail and photo strip added earlier
today are removed (the right rail is TCGplayer again), Fetch TCG (AU) is an ordinary store row ranked by price (no pin, no Ad or
Marketplace tag), and the pinned eBay and TCGplayer buttons are filled so they stand out. `tests/paid-rows.test.ts` pins it.

## 2026-11-13: urgent release

Owner asked for every site to be released now: the unpriced-Amazon fix, Fetch as an ordinary store row and the blue TCGplayer button had been merged without a deploy marker. One build, via this commit's subject.

## 2026-11-13: the side rails are off; the ads are the strips inside the page

Owner: visitors looked down, the side banners "don't look as good" and spoil the site's look, so the eBay and TCGplayer (or Amazon) rails come off every site and the page column gets the side space back. The ads that stay are the horizontal strips inside the page and, on small screens, the phone dock (after a scroll, never on a product page). The rail code stays behind one constant (`SIDE_RAILS = false` in the rail component, or `SITE.sideRails` on MotorCompare): nothing is rendered or fetched while it is false, and the CSS that narrowed the column for them is gone. Measured before the change (Vercel Web Analytics, unique visitors, Oct 30 to Nov 5 against Nov 6 to Nov 12, the rails having shipped Nov 6): DexCompare 4,200 to 4,972 with bounce 57% to 43%; RiftCompare 3,399 to 3,179 (its fall was Oct 29, a week before the rails); OP Compare 1,123 to 1,016. The measure to watch next is clicks per placement for the strips, not visitors. Never re-add rails, a floating banner or a gutter ad without the owner.
## 2026-11-13: Bots get the shop link untagged

A crawler that ignores robots.txt opened about 10,000 TCGplayer buy links on YGO, Gundam, Lorcana and Cyberpunk
Compare over 11–13 Nov (one or two per product, 8,183 sub-IDs, no sales), tripling the clicks Impact counted for us.
That costs no commission, but a flood of clicks that never buy is what gets a partner account reviewed. `/go` now
asks `looksLikeBot` (`src/lib/bot-click.ts`): no User-Agent, a crawler's or script's User-Agent, no Accept-Language
or no Sec-Fetch-Mode (every current browser sends it on a navigation) means a bot. A bot is still redirected to the
shop, just without our tracking, so no person is ever refused a link; at worst a very old browser goes untagged.
The rules may only mark more obvious bots, each with a test in `tests/bot-click.test.ts`.

## 2026-11-13: one native horizontal ad block in the page, in place of the side rails and the small strips

Owner, after the rails came off: "replace them with ONE bigger, subtler horizontal ad block inside the page content that looks native to the
site". `components/InlineAds.tsx` is that block: a full-column-width card in the site's own surface and border, a small muted "Ad" label with the
commission note, then one sideways-scrolling row of larger tiles (150px pictures, a two-line title, the price): up to six eBay Buy It Now tiles
in the visitor's market first (eBay US where a market is thin), then up to six TCGplayer market-price tiles, each group headed by its logo word
and an "All on ..." link. Never Amazon, never a store row, best price, deal, alert or counted as a store. Every link is rel sponsored through
`goHref` with the placements `<page>-inline-ebay` / `-inline-tcg` (and `-all`). It is browser-only like the rails were: the server HTML holds an
empty aria-hidden box of the block's exact height (`BLOCK_H`, so CLS stays 0), the tiles come from `/api/rails` (the rails' payload, CDN-held six
hours, now without the Amazon column) once the box nears the viewport, and with no tiles the box closes. One per page, below the main content:
the home page after the newest set's chase cards, a card page below its price table (never beside a buy button or above a price), a set page
after the card and sealed grids, `/cards`, `/sealed` and each `/sealed/<type>` after the grids. It replaces the card page's and the quick view's
small strips (`CardAds.tsx` is gone, and the quick view has no ad: its payload no longer carries tiles). The rail code is deleted
(`SideAds.tsx`, its CSS and tests); the phone dock stays (`PhoneDock.tsx`, `PhoneDockAds`), still after a scroll on screens under 1280px, never
on a card page, and it yields to the block ([data-ad]). Measure clicks per placement (`*-inline-ebay`, `*-inline-tcg`) against the strips' week.

import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { cents, pickCondition } from "../src/lib/fetchtcg";

test("Fetch's price is dollars; we keep cents", () => {
  assert.equal(cents(1.2), 120);
  assert.equal(cents(0.29), 29);
});

test("Near Mint wins, graded and damaged copies never", () => {
  assert.deepEqual(pickCondition([{ condition: "Light Play", price: 1 }, { condition: "Near Mint", price: 2 }, { condition: "PSA 10", price: 0.5 }]), { condition: "Near Mint", price: 2 });
  assert.equal(pickCondition([{ condition: "PSA 10", price: 10 }, { condition: "Damaged", price: 1 }]), null);
});

test("a card matches only on collector number, set and name; a stale or missing file shows nothing", async () => {
  const dir = mkdtempSync(path.join(tmpdir(), "fetchtcg-"));
  mkdirSync(path.join(dir, "data", "fetch-live"), { recursive: true });
  const c = (o: object) => ({ s: "Welcome to Night City - Beta", no: "b001", n: "Adam Smasher", f: "Normal", c: "Near Mint", p: 40, u: "https://www.fetchtcg.com/cards/x?utm_source=a", ...o });
  writeFileSync(
    path.join(dir, "data", "fetch-live", "au.json"),
    JSON.stringify({ fetchedAt: new Date().toISOString(), cards: [c({}), c({ f: "Foil", p: 400 }), c({ no: "b002", n: "Twin" }), c({ no: "b002", n: "Other name" })] }),
  );
  const cwd = process.cwd();
  process.chdir(dir);
  try {
    const { fetchRowsFor } = await import("../src/lib/fetchtcg");
    const r = fetchRowsFor({ name: "Adam Smasher - Ender of Legends (Epic)", number: "B001", setName: "Welcome to Night City - Beta" });
    assert.deepEqual(r?.rows.map((x) => [x.finish, x.priceCents]), [["Normal", 40], ["Foil", 400]]);
    assert.equal(fetchRowsFor({ name: "Adam Smasher", number: "b001", setName: "welcome to night city - beta" })?.rows.length, 2, "case does not matter");
    assert.equal(fetchRowsFor({ name: "Adam Smasher", number: "B001", setName: "Welcome to Night City - Retail" }), null, "Retail is not Beta");
    assert.equal(fetchRowsFor({ name: "Twin", number: "B002", setName: "Welcome to Night City - Beta" }), null, "two names on one number is ambiguous");
    assert.equal(fetchRowsFor({ name: "Adam Smasher", number: null, setName: "Welcome to Night City - Beta" }), null);
  } finally {
    process.chdir(cwd);
  }
});

test("the feed is never committed and the build reads it", () => {
  assert.match(readFileSync(".gitignore", "utf8"), /^\/data\/fetch-live\/$/m);
  assert.match(readFileSync("package.json", "utf8"), /fetch-fetchtcg\.ts/);
});

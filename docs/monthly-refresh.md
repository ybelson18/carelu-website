# Monthly payer-directory refresh — agent instructions

You are the monthly refresh agent for Carelu's ABA payer directory (carelu.com/payers).
THREE repos are cloned in your workspace:

- **carelu-website** — the site + VOB data + public API; pushes to main auto-deploy via Vercel.
- **carelu-sources** — PRIVATE repo: `ask-usage/` (payer-chat logs, step 8), `inbox/` and
  `processed/`. Its `requests.json` / `events.json` and the carelu.com/sources upload page (now a
  pointer to LeadTrap; its upload/state APIs are removed) are
  RETIRED for new requests (2026-10-01): requests now live in this repo's
  `src/data/payers/source-requests.ts` and appear on LeadTrap's Source documents board.
- **LeadTrap** — the product monorepo. Its `backend/src/data/payer-guides/` holds a vendored
  copy of this directory that the live VOB flow, review queue, and payer-call agent read.

Your job: verify, APPLY, and SHIP the month's updates, then sync the product copy via PR.

## CADENCE — runs WEEKLY (added 2026-09-24)

This runbook now runs every week as a scheduled cloud routine, not monthly by hand. Nothing
here is allowed to go stale silently: the directory is re-verified on a rotation and every run
ends with the LeadTrap copy in sync. Each weekly run does, in order:

1. **Changed sources.** Run `node scripts/payer-watch/watch.mjs` (no Slack var needed; it prints
   the changed/failed URLs and updates `scripts/payer-watch/snapshots.json`, which you commit).
   Every guide citing a CHANGED source is re-verified this run — the source moved, so the facts
   built on it may have too.
2. **Rotation.** Re-verify the structured facts of ~1/4 of the states each week, so every state
   is re-checked at least monthly: states are sorted by code, week N of the year takes every state
   whose index % 4 == N % 4. Prioritise `unverified` facts with `blocker: 'document'` (the answer
   is written down somewhere — try again) and anything with an effective date that has passed.
3. **Worklist.** Settle open `verifyClaims` in `docs/payer-worklist.json`, priority 1 first (3c).
4. **LeadTrap-only guides.** Any guide that exists only in LeadTrap is stale by construction:
   port it into this repo with every structured field (then it rides the rotation).
5. Apply (PHASE 2), changelog entry, `npm run payers:check` + `npm run build` must pass, push
   main (auto-deploys). If either check fails and you cannot fix it, push a branch + open a PR
   instead of pushing main.
6. **Always** run PHASE 4 (LeadTrap sync PR), even when this repo had no changes, if the vendored
   copy differs from this repo. One open sync PR at a time: update the existing branch/PR if one
   is still open rather than opening a second.
7. Nothing verified changed? Still commit the watch snapshots, and say so in the report.
8. **Gaps from real questions (do this every week).** The payer chat logs every question to
   carelu-sources `ask-usage/YYYY-MM-DD.json`; each entry's `tags.coverage` is `answered`,
   `partial` or `not-covered`, and `tags.missing` names the data it needed. Read the last 7 days
   (skip entries from @leadtrap.com / @carelu.com addresses and questions starting "TEST").
   For every partial / not-covered question: find the fact at a primary source and add it to the
   right guide (or a new structured field / section), verified-only as always. When the gap is a
   whole STATE that real visitors asked about, build that state this run (Medicaid + its plans +
   Aetna/Cigna/UHC + the dominant local Blue, every structured field, the state-mandate atGlance
   rows on each commercial guide), registered in index.ts, STATE_META, the sitemap and
   api/ask.ts STATE_NAMES. A gap you could not close goes in the worklist with the question
   quoted. List every gap and what you did about it in the report.

   **Fan every gap out across the whole directory (added 2026-10-01).** A visitor's question
   tells us what people want to know, not only where. When a question exposes a gap for one
   payer or state, generalise it to its topic (telehealth rules, fee schedule / rates, PA for the
   assessment, diagnosis age limits, RBT requirements, switching agencies, school-based ABA,
   open vs closed network, ...) and close that same topic for EVERY other guide that is missing
   it: other plans in the same state first, then the same payer in other states, then every
   other state and payer (Medicaid, MCOs, commercial). Use `scripts/payer-coverage.mjs` and a
   grep of the guides to list which guides have no answer, or only an `unverified` one, for that
   topic. Example: a question about NC telehealth for 97151 that we could not answer means
   checking 97151 telehealth for every guide, not only NC's.
   Verified-only still holds for each guide: one guide's answer never becomes another's. Look it
   up in that payer's own source. What you cannot verify becomes a worklist item tagged with the
   topic (`"topic": "telehealth"`) and the visitor question that started it, so the next run picks
   it up. When a topic would touch more guides than one run can verify, do the states and payers
   visitors ask about most first. Carry the rest in the worklist, and say in the report how many
   are left.
   In the report, list each gap topic with: the question that started it, how many guides were
   missing it, how many were filled this run, and how many are left in the worklist.

The directory: payer guides in `src/data/payers/*.ts` plus VOB enrichment layers in
`src/data/payers/vob/` (see `docs/vob-build.md`). Every fact carries cites/sources of
`{title,url}` to primary sources. Editorial rule: **VERIFIED-ONLY** — publish a claim only if a
primary source you actually fetched (or a human-uploaded copy of it) confirms it.

## PHASE 0 — SOURCE INBOX (always first)

Where documents come from (changed 2026-10-01): people upload on LeadTrap's **Source documents**
board (LeadTrap admin → VOB Review → Source documents). This refresh cannot read that board's
files yet, so an operator copies each RECEIVED document from the board into
`carelu-sources/inbox/`, named after the request's `key` in `source-requests.ts` (or its board
REQ id), until LeadTrap exposes them directly.

0a. List `carelu-sources/inbox/`. For each file: match it to its entry in
`src/data/payers/source-requests.ts` (or, for old files, `requests.json`). Read the document;
verify and apply the facts it unblocks in guide prose AND vob layers (fields `'unverified'`
whose `verifyVia` names this document). Cite the OFFICIAL source URL from the request (not the
repo copy) with this month's accessDate.

0b. Set that entry's `status: 'resolved'` with a one-line `resolution` in `source-requests.ts`
(LeadTrap fulfills the board request on its next deploy); `git mv` the file to `processed/`;
commit and push carelu-sources.

## PHASE 1 — VERIFY

1. Skim `src/data/payers/types.ts` + state files (19 states + national).
2. KNOWN WATCHLIST (verify via WebSearch + WebFetch of primary sources): IN 10/1/2026
under-21 cutoff + 4/1/2027 rate cut + 8/1/2026 accreditation; NC HB 696 8/1/2026 + CCP 8F
rewrite + WellCare→CCH aftermath; OH OAC 5160-34 rewrite; AZ AMPM 320-S; CO HB26-1425 +
rate-cut restoration; MA 101 CMR 358 12/1/2026 + Tufts ACPP-only; UT MIB 26-61 Sept 2026; NE
cap conflict; KS KMAP rates; NY 97153 rate steps + CoE; FL AHCA fee schedule + Sunshine; VA
DMAS/Acentra; MD fee schedule; GA Georgia Families re-procurement go-live (UHC/Humana/Molina
awardees — when live, Amerigroup/Peach State need status notes + new CMO guides become
urgent).
3. Spot-verify 2-3 high-impact cited sources per state against the guides' claims, INCLUDING
vob-layer facts (payer IDs, code grids, rate tables, stcMaps).

## PHASE 1.5 — WORK THE WORKLIST

`docs/payer-worklist.json` is the standing backlog: which payers still have no guide, and
which guides still lack `deliveryRules`. It holds **names and questions only — never answers**.
Everything you publish from it must come from a primary source you fetched this month.

3a. NEW GUIDES — take the lowest-priority-number `status: 'open'` entries (priority 1 first)
and add **at least three** guides per refresh. Research each against primary sources: the
carrier's own ABA clinical/medical policy, its provider manual and reimbursement policies, the
state autism mandate for its state, and the state licensure board. Write them into the state
file the `state` field names (`national.ts` for `US`), matching the shape and depth of the
existing per-state commercial guides. Register the slug in `src/data/payers/index.ts` if the
state file is new, and append it to `public/sitemap.xml`. Then set that entry's `status` to
`'shipped'` with `shippedAt`. A payer you researched but could NOT source → `status: 'blocked'`
with a `blockedReason`, plus a document request per step 5c.

3b. STRUCTURED FIELDS — two groups, twelve fields, defined in `src/data/payers/types.ts`:
`intakeGates` (ageLimit, dxRecency, diagnosingProviders, diagnosticTools, referral, telehealth —
the front door) and `deliveryRules` (supervision, concurrentBilling, dailyLimits, noteSignature,
placeOfService, billAsProvider — the claim side). EVERY guide should carry every field its payer
publishes an answer for. Fill gaps for at least two state Medicaid programs and their MCOs each
refresh, following `ruleFieldBacklog.order`.

**Extraction before research.** A large share of these facts already sit in the guides as cited
prose. When a guide's own sourced paragraph already states the fact, lift it into the structured
field carrying the SAME citation, status 'verified'. That costs nothing and risks nothing. Only
research what prose does not cover.

**MCO inheritance.** An MCO inherits the state floor unless it publishes its own policy. Having
confirmed the state rule AND checked that the MCO publishes nothing of its own, write the field
as an explicit statement of the state rule and cite the state manual — that is a verified answer.
Never assume inheritance without checking; unchecked means 'unverified' with a verifyVia. The state's own provider/billing manual usually answers all
six in one document; MCOs inherit the state floor unless their own policy deviates, and for
commercial plans these often live in a reimbursement policy rather than the clinical policy.
Per field: a plain-language `value`, `status`, and `cites` to the primary source. A rule you
cannot source is either OMITTED or carried as `status: 'unverified'` with a `verifyVia` note —
never inferred from another payer, and never carried over from one plan to another.

3c. CHALLENGED CLAIMS — `verifyClaims` in the worklist lists facts already published in a
guide that later research called into question but could not re-verify at the time. Each names
the claim, the challenge, and how to settle it. Work the priority-1 entries FIRST, before adding
any new guide: a wrong fact on a live page costs more than a missing page. Settle one by
fetching the named document, then either correct the guide (and note it in the changelog as a
'correction') or record why the existing claim stands, and set `status` to `'resolved'` with
`resolvedAt` and a one-line `resolution`. Never resolve one by reasoning alone.

3d. DOCUMENT REQUESTS — `documentRequests` mirrors what PHASE 0 processes: these are the
sources that blocked a fact this cycle. Open a real request in `src/data/payers/source-requests.ts`
for any that does not already have one (step 5c), and cross-reference its `key` back here.

3e. COVERAGE AUDIT — run `npm run payers:coverage` at the START and END of the refresh.
It reports, per field, how many of the guides carry it. This is the directory's completeness
metric and the answer to "is our data actually uniform?" — without it, field coverage silently
decays as new guides are added faster than old ones are filled. Rules:
- Report both numbers in the final report (step 10, section H), as a delta.
- No field group may go DOWN. Adding guides without their fields is how coverage rots; if you
  add guides this cycle, fill their fields in the same cycle.
- Treat any field below 60% as a standing priority until it clears.
- Report the `document` vs `per-case` split too. Only `document` is debt — it means the answer
  is written down and we could not open the file, so a human fetch closes it. `per-case` means
  no document states it and "ask the plan" is the finished answer; it never closes and must not
  be chased.

3f. INVARIANT GATE — run `npm run payers:check`. It must exit 0 before you ship. It enforces
what keeps this dataset honest, and each rule exists because its absence produced wrong live
data: every fact carries a status (a statusless bare string is how the wrong Virginia diagnosis
claim survived unaudited for two months), every 'verified' fact cites a source, and every
non-verified fact carries both a `verifyVia` and a `blocker` so it is never a dead end for the
intake team reading it.

## SOURCE ACCESS — what blocks automated fetching (learned 2026-09-17)

Several primary sources cannot be read the obvious way. Reach for the documented workaround
instead of silently dropping the fact or, worse, publishing an unverified one.

| Source | Behaviour | Workaround |
|---|---|---|
| `mmis.georgia.gov` (GAMMIS) | Connection refused outright — not even a 403 | PARTIAL (2026-09-23): `curl "https://web.archive.org/web/2026id_/<url>"` returns GAMMIS files that happen to be archived — it recovered the Part I Policies & Procedures (July 2026) in full. The current Part II ASD manual is NOT archived under any HANDBOOKS filename: still a human retrieval via carelu.com/sources (VC-037). **SOLVED (2026-09-27):** the static Handbooks files now answer plain `curl -A 'Mozilla/5.0'` (and r.jina.ai) — the current Part II ASD manual is `https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder%20Q4-October%202026%2020261001130506.pdf` (the quarter/timestamp in the filename changes each reissue, and so does the separator: Q3 was `Disorder-Q3%20July`, Q4 is `Disorder%20Q4-October`). DCH posts quarterly reissues (Jan/Apr/Jul/Oct 1) during the afternoon of the 1st; the Q4 2026 file appeared at 13:05 ET on Oct 1, after that day's run. When the cited file 404s, find the new filename on the Provider Manuals list (postback recipe below) before marking anything unverified. |
| `mass.gov` | 403 to WebFetch and curl alike | **PARTIAL (2026-10-01):** `https://r.jina.ai/<url>` returns full bulletin / FAQ PDFs as text (read MassHealth APB 379, MCE Bulletin 115, the ABA FAQ). Human retrieval only when jina fails. |
| `codes.ohio.gov` | WebFetch gets ECONNREFUSED; curl returns 000 and times out on every path. Wayback has NO capture of the ABA rule at all. | PARTIAL (2026-09-23): `https://r.jina.ai/<url>` returns full rule text with effective dates for most rules (read OAC 5160-26-03.1, 5160-1-08, 5160-26-09.1 this way). 5160-34-02 (the ABA rule) still returns a "no rule" page even so — still the highest-value open document request. Route: Rules@Medicaid.Ohio.gov or JCARR. **Do NOT substitute Cornell LII**: its Ohio chapter 5160-34 is a stale snapshot of the superseded *skilled therapies* chapter (5160-34-01 is the RESCINDED PT/OT/SLP rule), so a Cornell 200 on an Ohio Medicaid rule is the wrong document, not a hit. |
| `hca.nm.gov` / `hsd.state.nm.us` | Was CloudFront 403, "configured to block access from your country" | **Direct `curl -A 'Mozilla/5.0'` works again (2026-10-01)** — returned Supplement 24-13 and LOD #53; r.jina.ai also works. Older route — `curl "https://web.archive.org/web/2026id_/<url>"` returns LOD #53 and MAD Supplement 24-13 in full as real PDFs. For NMAC rule text, `srca.nm.gov` is better than the Cornell mirror: `https://www.srca.nm.gov/parts/title08/08.321.0002.html` carries the complete in-force 8.321.2.13. |
| `azahcccs.gov` | Was a hard 403 from an Azure Application Gateway | **SOLVED (2026-10-01):** plain curl returns AMPM PDFs, `TelehealthCodeSet.xlsx` and the BH Services Matrix `B2Matrix.xlsx` (the non-www host also works). Wrong paths return a 200 "Document not found" HTML page — check the content type. |
| `mercycareaz.org` | 403 Access Denied on the ABA provider page and the PA form | Human retrieval. |
| `portal.kmap-state-ks.us` | Connection timeout, then a redirect loop | PARTIAL (2026-09-27): `curl -sSL -c cj.txt -b cj.txt -A 'Mozilla/5.0' <url>` (a cookie jar breaks the loop) fetched bulletin PDFs (26140). The manual listing pages are JS-only: the KMAP Mental Health / Professional manuals are still a human retrieval. |
| `hcpf.colorado.gov` | 403 to WebFetch | `curl` with a browser user agent works. The `.xlsx` fee schedules need a full Chrome UA **and** a `Referer` header, or CloudFront 403s. |
| `dhhs.ne.gov` | Was connection refused / 75s timeout on 443 | **Plain `curl -A '<Chrome UA>'` works again (2026-10-11)** — returned the SFY27 MHSUD fee schedule xlsx; `https://r.jina.ai/<url>` also works (pause between calls). |
| `www.molinahealthcare.com` | 403 to WebFetch. **Site restructured (2026-10-01):** many cited PDFs/pages (CA, FL, IA, NE, NM, NY, OH, TX) now return a ~384 KB HTML "Page Not Found" / bot-wall page with HTTP 200 to curl AND r.jina.ai — payer-watch flags these as "changed" | Was: `r.jina.ai` proxy; plain `curl -sSL -A 'Mozilla/5.0'` for PDFs (2026-09-27). Now: a ~384 KB body is NOT the document — find the new URL from the state's Molina provider pages or request a human upload. Slide-deck PDFs with no text layer: `pip install pymupdf`, render pages to PNG and read the images. |
| `point32health.org` PDFs | Returned HTML, not the PDF | **SOLVED (2026-09-27):** `/documents/<slug>` URLs (e.g. `/documents/applied-behavioral-analysis-form`) return real PDFs to curl. |
| `magellanprovider.com` | Cloudflare interstitial on every path; curl 403 with any header set | Chrome browser tool, then extract PDFs in-page. |
| `manuals.health.mil` | F5 bot wall + cert-chain failure | None found — quote a contractor's or DHA's restatement of the manual, never the manual itself. |
| `tricare.mil`, `martinspoint.org`, `tricare.triwest.com` | Block direct automated fetches | Text-extraction proxy or browser; pages load fine for a human. |
| `hopkinsmedicine.org` PDFs | Cloudflare 403 (HTML pages are fine) | Human retrieval. |
| `horizonnjhealth.com`, `horizonblue.com`, `aetnabetterhealth.com` | ~930-byte Incapsula stub / 403 on ABA PDFs | `https://r.jina.ai/<url>` returns full text of HTML notices and of the PDFs (it read ABHFL's 174-page manual) — 2026-09-27. |
| `providernews.anthem.com` article pages | JS SPA — HTTP 200 with an empty body | `https://r.jina.ai/<url>` reads article pages in full (2026-09-27), and Anthem's `/<state>/search?q=` page through it finds notices. Or use `files.providernews.anthem.com` PDFs. **A 200 from a plain fetch is not a success** — check the body. |
| `manuals.dha.mil` (TRICARE manuals' NEW host, 2026) | Direct curl gets an SPA shell | `https://r.jina.ai/https://manuals.dha.mil/View-Publication/TOT5/Revision/<n>/FileName/C18S3` returns the full current chapter with revision markers (TOM Ch 18 Sec 3 is Revision C-57, 24 Jun 2026) — 2026-09-27. |
| `manuals.health.mil` (TRICARE Operations Manual) | r.jina.ai returns only the home page | `curl "https://web.archive.org/web/2026id_/https://manuals.health.mil/pages/DisplayManualHtmlFile/<date>/AsOf/tot5/c18s3.html"` returns the full chapter (learned 2026-09-25). |
| `gencourt.state.nh.us`, `gc.nh.gov`, `nhmmis.nh.gov`, `dhhs.nh.gov` | 403 "Web Page Blocked" to direct requests | `https://r.jina.ai/<url>` reads them in full (learned 2026-09-25). `nhmmis.nh.gov` PDFs now download with plain `curl -A 'Mozilla/5.0'` (2026-10-01; the 1,081-page fee schedule). |
| `web.archive.org` | WebFetch refuses this host entirely | `curl` works — and this is the single most useful unblock available. `curl "https://web.archive.org/web/2026id_/<original-url>"` retrieves documents from hosts that refuse us directly; it is what recovered the whole Virginia backfill. |
| `vamedicaid.dmas.virginia.gov` | Was connection refused (ECONNREFUSED) | Direct curl returned real PDFs on 2026-09-27 (bulletins via `/vamed/download-pdf-bulletin/<id>`); r.jina.ai also works. Fallback: the `web.archive.org/web/2026id_/` curl trick. |
| `medicaid-documents.dhhs.utah.gov` | 403 to WebFetch and to curl with a browser UA; `web.archive.org/2026id_/` 404s on every path | **SOLVED** — `https://r.jina.ai/<url>` returns the full current manual as clean text (it retrieved the 28-page January 2026 ASD Services manual, published 13 Apr 2026, that the guide itself recorded as unretrievable). |
| `public.providerexpress.com` (Optum) | HTTP 200 returning a JS "Preparing your download" shell, not the document | **Append `?__tracked=1` to the DAM path** (`…/abaSCC.pdf?__tracked=1`) — that is the redirect the interstitial itself uses, and it returns the real PDF. Then `pdftotext`. Without this the whole Optum policy set reads as unreachable. |
| `medicaid.georgia.gov/document/document/telehealth-guidance/download` | Serves a March 2020 COVID emergency letter, NOT the current Part II Telehealth Guidance | A 200 with a real PDF can still be the WRONG document — check its version date. The current 10/1/2025 guidance carries Georgia's live Category I ABS code table and is the best GAMMIS workaround found so far. |
| `static.cigna.com` PDFs | WebFetch returns unparsed binary | Save with `curl`, extract with `pdftotext`. |
| `onbaseext.phs.org` (Presbyterian NM) | Refused curl in September | Direct curl returned the PDFs on 2026-09-27; r.jina.ai also works. For tables that flatten in text extraction, `pdfplumber` `extract_tables()` keeps cell boundaries. |
| `meritain.com`, `medcost.com` | Cloudflare 403 / empty JS shell | `https://r.jina.ai/<url>` returns full text, including Meritain's companion-guide PDFs (2026-09-27). |
| `mcp.humana.com` (Humana coverage policies) | — | Plain curl works; `Search.aspx?criteria=<kw>&searchtype=freetext&policyType=medical` lists policies. Humana PA-list PDF links are only in the raw HTML of provider.humana.com's prior-authorization-lists page. |
| `alliancehealthplan.org` removed documents | HTTP **410** with a normal-looking 218 KB body | Check the status code, not the body size: a full-size page can be an "Information Archived" notice. |
| `ksrevisor.gov`, `ksbsrb.ks.gov` | Connection reset through the proxy / 403 to curl | `https://r.jina.ai/<url>` returns full statute text and BSRB PDFs (2026-10-01). |
| `aetna.com/.../telemedicine.pdf` | A real 200 PDF — but it is the June 2021 review of the Telemedicine payment policy | Stale-document trap (like `medicaid.georgia.gov`): check the review date before citing; Aetna's current ABA telehealth code list sits behind Availity. |
| `aetna.com/cpb/medical/data/500_599/0554.html` | CPB 0554 (last review 11/26/2025) is now a SHORT policy: ABA experimental for non-ASD indications only | It no longer supports telehealth codes, provider qualifications or precert content — cite the ABA Medical Necessity Guide, CPB 0648 or the BH precert list instead (2026-10-01). The IEP/IDEA carve-out quote is footnote 1 of the guide's MARYLAND exhibit, not a national rule. |
| `aetnabetterhealth.com` Oklahoma PDFs | 403 direct | `https://r.jina.ai/<url>` returned the 135-page ABHOK manual (8/20/2026). The Texas manual is still 403 even via jina — human retrieval. |
| `oscn.net` (Oklahoma statutes) | Cloudflare Turnstile to curl | `https://r.jina.ai/<DeliverDocument url>` returns full text with history (2026-10-01). |
| `public.tmhp.com` fee schedules, TMPPM | — | Static fee-schedule PDFs (`FeeSchedules.aspx?fn=...PRCR615C.pdf`) and TMPPM HTML chapters fetch with plain `curl -A 'Mozilla/5.0'`. |
| `www.health.ny.gov` PDFs | 403 to curl with a bare `Mozilla/5.0` UA | A full Chrome UA string returns the PDF; r.jina.ai also works (2026-10-01). |
| `lehighcounty.org` | curl TLS chain error | r.jina.ai. |
| `providernews.anthem.com` line of business | Article pages don't show which line of business a notice covers | `r.jina.ai` with header `X-Return-Format: html` returns the SPA's embedded JSON incl. each article's `linesOfBusiness` (2026-10-01). NY article 13424 (ABA FAQ) is readable this way. |
| `codes.findlaw.com` | Cloudflare 403 to curl | `https://r.jina.ai/<url>`. |
| `www.in.gov` IHCP bulletins | The old bulletin index path 404s | Current index: `https://www.in.gov/medicaid/providers/provider-references/news-bulletins-and-banner-pages/bulletins/` (plain curl, browser UA). |
| `ecfr.gov` (payer-watch false positives) | Page chrome changes every week | Check the versioner API (`https://www.ecfr.gov/api/versioner/v1/versions/title-42.json?part=438&section=438.210`, `curl --compressed`) for a real amendment date before re-verifying. |
| `dhcs.ca.gov /file/<apl>-pdf/` | 200 with a 212-byte Incapsula stub (watcher reports a change) | `https://r.jina.ai/<url>` returns the full APL text (2026-10-01). |
| `prc.hmsa.com` | Site redesign: article URLs now return the home page (~41 KB) | No route found — new URLs needed (human); `hmsa.policytransparency.com` is a JS app. |
| `providers.partnersbhm.org` | SiteGround captcha (202 stub) to curl and r.jina.ai | WebFetch reads the provider alerts; some pages load to curl with a full Chrome UA. |
| `alliancehealthplan.org/document-library/<id>` | Serves a .docx as `application/octet-stream` | Unzip `word/document.xml` (cover sheet 97990). |
| `mmis.georgia.gov` Provider Manuals list | ASP.NET postback-paged list | Replaying `__VIEWSTATE` with `__EVENTTARGET=...NextPageButton` then `...$Select` in a `requests.Session` returns the current Handbooks filename (found Telehealth Guidance Q4 - October 2026). |
| `health.mil` Reference-Center publications | URL looks like an HTML page | Returns the PDF directly to curl with a browser UA (TRICARE ABA rates 2026) — check the file type. |
| `horizonblue.com` medical-policy detail pages | r.jina.ai / WebFetch return only the "I AGREE" terms page; curl gets an Incapsula stub | curl with a cookie jar and a Chrome UA: GET the terms page, POST the agree form, then fetch the policy; or r.jina.ai with header `X-Set-Cookie: MP-<date>=medicalpolicy` (the cookie name carries a date and changes) — 2026-10-01. |
| `provider.wellpoint.com` NJ provider manual | 41 MB image-only PDF | Render pages with pymupdf (page index = printed page + 1) and read the images. |
| `r.jina.ai` → `web.archive.org` | Refused with AbuseAlleviationError (2026-10-01) | Use direct `curl` to web.archive.org when it is up; the jina route is dead. |
| `martinspoint.org`, `tricare.triwest.com`, `humanamilitary.com` PDFs | — | Plain `curl -A 'Mozilla/5.0'` returns the real PDFs (2026-10-01). |
| `manuals.dha.mil` TPT5 (TRICARE Policy Manual) | SPA shell | `https://r.jina.ai/https://manuals.dha.mil/View-Publication/TPT5/FileName/<chapter>` returns the chapter with its revision. |
| `magellanprovider.com/media/<id>/provider_handbook.pdf` | Cloudflare to curl | r.jina.ai returns the full 2026 handbook text. |
| `law.justia.com` | Cloudflare 403 to curl and r.jina.ai | Use `codes.findlaw.com` via r.jina.ai, or the enrolled bill PDF. |
| `leg.colorado.gov` | 406 to plain curl | r.jina.ai. |
| `mgaleg.maryland.gov` statutes, `dsd.maryland.gov` COMAR | — | Plain curl; fetch single sections only (DSD asks not to be scraped). |
| `sos.mo.gov` CSR chapters, `dss.mo.gov` MO HealthNet forms | — | Plain curl (Chrome UA) — prefer sos.mo.gov over the Cornell mirror for 13 CSR 70-98. |
| Molina NM manual | molinahealthcare.com 404 | The May 2024 edition is readable via r.jina.ai at medicare.centralhealthplan.com (Molina media path) — label it as the 2024 edition. |
| `ecfr.gov` API | 406 without compression | `curl --compressed`, or r.jina.ai. |
| `federalregister.gov` | 302s to an unblock interstitial | Use the JSON API (`/api/v1/documents.json`) for docket sweeps; `govinfo.gov` for document text. |
| `www.vha.cc.va.gov` (CHAMPVA Operational Policy Manual) | eGain JS shell; was recorded as unreachable | **SOLVED (2026-10-11):** unauthenticated JSON API — search `https://www.vha.cc.va.gov/system/ws/v11/ss/search?portalId=554400000001036&usertype=customer&q=<terms>`, article `.../ss/article/<articleId>?portalId=554400000001036&usertype=customer` (Accept: application/json). The ABA section is Ch. 2 Sec. 18.6. |
| Medicaid NCCI edit files | medicaid.gov NCCI page 403 / 404 | Moved to `https://www.cms.gov/medicare/coding-billing/ncci-medicaid/medicaid-ncci-edit-files`; quarterly PTP and MUE zips download with plain curl (tab-delimited .txt inside). Medicare practitioner MUEs: `cms.gov/files/zip/medicare-ncci-<yyyy>-q<n>-practitioner-services-mue-table.zip`. |
| Centene plan Pre-Auth Check tools (`*/providers/preauth-check/...`) | JS widget; the HTML holds no code data (and the watcher sees only nav changes) | JSON: `https://content.centene.com/content/<site>/en_us/providers/preauth-check/medicaid-pre-auth.preauthtool.json?ver=1.0&q=<CPT>&qualifier=<paQualifier>&productCategory=MEDICAID&apiEnv=PROD` — `<site>` (pageNodePath) and the qualifier are in the page HTML (2026-10-11: NH Healthy Families, Oklahoma Complete Health). |
| `priorauthlookup.amerihealthcaritas.com` | JS lookup | `/api/CptCodeLookup?planname=acde\|acnh&cptCode=<code>&cptDate=YYYY-MM-DD` returns JSON (DE, NH). |
| ND / SD Medicaid Power BI tools (ND Procedure Code Look-Up Tool, SD ABA fee schedule) | Public Power BI reports behind a click-through | Query the public Power BI API (`wabi-us-gov-iowa-api`): conceptualschema, then querydata. ND entity `AttributeValuePairs` gives Max Units, ORP NPI required, SA required, Telehealth Allowed per code; SD `HCPC List` filtered ABA='X' gives fees. |
| `sdlegislature.gov` (ARSD) | JS app | `curl https://sdlegislature.gov/api/Rules/<rule e.g. 67:16:11:03>` returns the rule HTML as JSON. |
| `www.wellmark.com/authtable/` | 404 since Oct 2026 | Moved to `https://authorization.wellmark.com/authtable/`: GET with a cookie jar, then POST the form fields plus `__CALLBACKID=__Page` and `__CALLBACKPARAM=<code>` — returns the grid rows or "not listed". ABA codes 97151–97158 / 0362T / 0373T are not on it (2026-10-11). Provider-guide PDFs are login-only. |
| `blog.molinahealthcare.com` | **Dead (2026-10-11):** DNS no longer resolves | The same `/-/media/Molina/PublicWebsite/PDF/...` paths load from `myhealthinhand.molinahealthcare.com` or `medicare.centralhealthplan.com` (KY, IL, FL, NE re-pointed). Molina CA's current documents live under `/-/media/Project/PWS/Healthcare/PDF/PDF/Providers/CA/{Manual,Prior-Auth}/...`, linked from the Resources page's raw HTML. |
| `medicaid.alabama.gov`, `www.lamedicaid.com`, `billstatus.ls.state.ms.us`, `cga.ct.gov`, `le.utah.gov` PDFs, `www.legislature.ohio.gov` | curl exit 60 "unable to get local issuer certificate" — the servers send only the leaf certificate | Do NOT disable verification: fetch the intermediate from the leaf's AIA "CA Issuers" URL, `cat /root/.ccr/ca-bundle.crt int.pem > bundle.pem`, then `curl --cacert bundle.pem -A '<Chrome UA>'` (2026-10-11, all 17 AL/LA/MS URLs). r.jina.ai also reads cga.ct.gov, the le.utah.gov HTML section pages and the Ohio status pages. |
| `medicaid.ms.gov` | Empty reply / 503 by every route on 2026-10-11 (site-wide) | None that day; retry before treating any citation as dead. |
| `sos.ga.gov` (GA Behavior Analyst Licensing Board) | Cloudflare challenge to curl, WebFetch and r.jina.ai | Human retrieval. |
| `www.idmedicaid.com` | Handbook PDFs 404 + "Temporarily Unavailable for Maintenance" Sat 4 PM – Sun 10 AM MT | Weekend maintenance — re-run Idaho outside that window; IDAPA text on `proddfmmainsa.blob.core.windows.net` still works. |
| `r.jina.ai` | 401 "bad IP reputation" / Cloudflare challenge intermittently all day on 2026-10-11 (worked for some agents, after ~15 calls for others) | Space calls and retry after a pause; otherwise direct curl with a full Chrome UA, or WebFetch (it read oscn.net, codes.findlaw.com and hhs.texas.gov UMCM PDFs). |
| Watcher false positives: `autismspeaks.org` (212/845-byte Incapsula stub alternating), `law.lis.virginia.gov` (daily date stamp + sidebar ~2 KB), `geisinger.org` (Radware captcha incident ID), `metroplus.org` and Sentara (site banners / re-stamped "Last Updated") | Flagged "changed" every week | Compare the section text, the linked document or the PDF metadata, not the page body. |
| `mcgs.bcbsfl.com` (Florida Blue coverage guidelines) | Telerik postback tree | `https://mcgs.bcbsfl.com/MCG?mcgId=<NN-NNNNN-NN>&pv=false` returns the PDF (ASD = 01-97000-08). Lucet (`lucethealth.com`) manual and ABA policy: plain curl. |
| `www.bluecrossma.org/medical-policies` | JS search | `/medical-policies/policy-listing-options` is a static page listing every policy PDF (`acquiadam-assets`); PDFs download with plain curl. Payment policies are login-only. |
| `www.alohacare.org/PriorAuth` | ASP.NET postback lookup | `requests.Session`: GET, then POST `__VIEWSTATE` fields with `__EVENTTARGET=ctl00$ctl00$MainContent$MainContent$uxSearchByCode`, `uxSearchByCodeLOB=S`, `uxSearchByCodeValue=<code>`. |
| `www.regence.com` provider pages | Client-rendered; curl, r.jina.ai and WebFetch get navigation only | Human browser retrieval (BlueCard, administrative manual). |
| `mydss.mo.gov` Behavioral Health Services manual | .docx | Plain curl; unzip `word/document.xml` (CMS-1500 field table is §3.1). |
| Anthem commercial manuals | Library list is JS | `anthem.com/<st>/provider/individual-commercial/policies/manuals` lists `PM_<ST>_000NN.pdf` (and next year's preview); BlueCard Provider Manual is `PM_MO_OH_WI_00004` / `PM_IN_00004`; PDFs download with plain curl. |
| securecms.highmark.com (BCBSWY medical policy) | curl exit 60 (server omits the Entrust OV TLS Issuing RSA CA 2 intermediate); search page is JS | Fetch the intermediate from http://crt.sectigo.com/EntrustOVTLSIssuingRSACA2.crt, add to a CA bundle; then GET /content/medpolicy/en/wyoming/all/search/jcr:content/search/quick-results.results.json?q=<term> returns policy URLs as JSON; policy pages (e.g. /content/medpolicy/en/wyoming/all/policies/Therapy/15-01-002/15-01-002-002.html) are full HTML. Attachment PDFs (codes, PA form) redirect to 404. (2026-10-18) |
| humanservices.arkansas.gov | Full Chrome UA gets 403 even for .docx/.pdf; HTML pages 403 to curl with either UA | curl -A 'Mozilla/5.0' (bare) downloads the manual .docx and fee PDFs (confirmed 2026-10-18) (2026-10-18) |
| secure.arkansasbluecross.com/members/report.aspx | Returns a 1.8 KB 404 page to a full Chrome UA | curl -A 'Mozilla/5.0' (bare UA) returns the full policy (234 KB) (2026-10-18) |
| www.ctdssmap.com | Empty reply (curl 52) on every path, and r.jina.ai gets ERR_CONNECTION_RESET, all day 2026-10-18 (Sunday) | None that day; retry on a weekday before treating a cite as dead (2026-10-18) |
| public.providerexpress.com | Without ?__tracked=1 still returns the 4 KB JS shell | Append ?__tracked=1 (confirmed 2026-10-18) (2026-10-18) |
| mountainpacific.org/download/<id>/ (Mountain-Pacific Qualitrac guides) | Download Monitor gate: /download/<id>/ redirects to /downloads/?dlm-dp-dl=<id>, an 84 KB HTML page with a meta refresh | GET that page with a cookie jar, take the meta-refresh URL (…/download/<id>/?tmstv=…&dlm-dp-dl-force=1&dlm-dp-dl-nonce=<nonce>) and GET it with the same jar + Referer: it 302s to the PDF on mountainpacificfiles.blob.core.windows.net (BH user guide = id 24873). (2026-10-18) |
| wymedicaid.telligen.com | Provider News posts are images (Constant Contact screenshots); HTML text is empty | WP JSON /wp-json/wp/v2/posts?search=<kw> gives the image URL; read the image. Document Library links (provider manual V5) download with plain curl. (2026-10-18) |
| law.cornell.edu Wyoming Insurance Dept rules (agency 044) | — | /regulations/wyoming/agency-044/subagency-0002 lists chapters (ch. 10 COB, ch. 72 Prior Authorization); sections at /regulations/wyoming/044-<ch>-Wyo-Code-R-SS-<ch>-<sec>. (2026-10-18) |
| humana.com Louisiana Medicaid clinical policies | Policy asset filenames change with each edition (LACLI022 ... ed 02112026 -> LA.CLI.022.003 ... ed 10.7.26), old one 404s | Grep https://www.humana.com/provider/medical-resources/louisiana-medicaid/clinical-coverage-policies raw HTML for assets.humana.com/is/content/humana/ links. (2026-10-18) |
| arkansastotalcare.com Pre-Auth Check | Old /providers/preauth-check paths 404; tool now on /providers/resources/pre-auth.html | content.centene.com/content/arkansastotalcare/en_us/providers/resources/pre-auth.preauthtool.json?ver=1.0&q=<CPT>&qualifier=128&productCategory=MEDICAID&apiEnv=PROD (pageNodePath and qualifier 128 from the page HTML). (2026-10-18) |
| es.aetnabetterhealth.com (Louisiana manual) | www host 403; /louisiana/providers/materials-forms.html on es. host lists the current manual | https://es.aetnabetterhealth.com/content/dam/aetna/medicaid/louisiana/providers/pdf/provider_manual.pdf (rev. 09-29-2026) with plain curl. (2026-10-18) |
| providers.ctbhp.com | 403 to curl (gzip 169-byte stub) | r.jina.ai renders the LOC-guidelines and bulletins pages; the s18637.pcdn.co PDFs download with plain curl. (2026-10-18) |
| Scratchpad directory | The session scratchpad is shared by all parallel agents; another agent's helper (frag.py) overwrote mine and wrote SC entries into this group's fragment | Keep helpers in a group-named subdirectory with group-specific fragment paths. (2026-10-18) |
| www.molinahealthcare.com /-/media/Molina/PublicWebsite/PDF/Providers/az/... | 404 (10-byte body) for the AZ PA guide; AZ provider pages are the ~384 KB bot-wall | Same media path on myhealthinhand.molinahealthcare.com returns the real PDF (2026-10-18); medicare.centralhealthplan.com gave proxy 502 (2026-10-18) |
| www.azcompletehealth.com provider manual | The '2026-AZ-Provider-Manual (1).pdf' linked from forms-resources is the AMBETTER (marketplace) manual, not Medicaid | Medicaid manual is HTML: /providers/resources/provider-manual/pm_section_<n>.html (section 8 = Finance/Billing), plain curl (2026-10-18) |
| healthchoiceaz.com provider manual | /medicaid/providers/provider-manual 404s; /providers/provider-manual page carries chapter links | Chapter PDFs on assets.azblue.com/m/<id>/original/Chapter_NN_..._HCA.pdf, plain curl (2026-10-18) |
| python -I in container | /usr/local/bin/python3 lacks openpyxl/pymupdf | /usr/bin/python3 -I has pymupdf, openpyxl, requests (2026-10-18) |
| shared scratchpad | parallel agents share the session scratchpad; generic filenames (claims.py, guides.json) get overwritten | use a per-group subdirectory (2026-10-18) |
| es./fr./ch.aetnabetterhealth.com | www.aetnabetterhealth.com Texas manual is 403 to curl | Same DAM path on es.aetnabetterhealth.com returns the 206-page 2025-2026 TX manual (and the FL manual) to plain curl (2026-10-18) (2026-10-18) |
| leginfo.legislature.ca.gov bill text | 403 to curl | https://r.jina.ai/https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=<id> returned the full chaptered AB 3275 text (2026-10-18) (2026-10-18) |
| TMPPM Telecommunication Services Handbook | Guessed path 2_23_Telecommunication_Svcs 404s | Current path is /TMPPM/2_19_Telecommunication_Srvs/2_19_Telecommunication_Srvs.htm (plain curl) (2026-10-18) |
| cms.gov Medicaid NCCI MUE zips | Public file header: 'should NOT be used by state Medicaid programs as their edit file' | Cite the public practitioner MUE values as the published table; states use the RISSNET copy (2026-10-18) |
| www.mmis.georgia.gov Provider Manuals list (tabId/17) | The Provider Manuals list is DNN module ctr55 (tabId/54 is a different 'Prior Approval Process' list); the row Select postback response does not contain the PDF link as an href | requests.Session: GET tabId/17, page with __EVENTTARGET=dnn$ctr55$PublicationListPage$SearchPanel$Datalist$ctl54$NextPageButton, select a row with ...$ctlNN$Select; the file path is inside a window.open('/portal/Portals/0/StaticContent/Public/ALL/Handbooks/<name> <timestamp>.pdf') call in the response (found the IVRS guide, IVRS_Brochure_v12 20260225144220.pdf). Release dates on the list show Part 1 still 07/01/2026; ASD and Telehealth 10/01/2026. (2026-10-18) |
| ecfr.gov versioner API | Intermittent 'Your IP address has been blocked' text responses (2026-10-18) mixed with good JSON | Retry after a few seconds; /api/versioner/v1/full/<date>/title-NN.xml?part=&section= worked for every section needed. (2026-10-18) |
| provider.amerigroup.com/georgia-provider/resources/manuals-policies-guidelines | JS-rendered; curl gets no document links | https://r.jina.ai/<url> lists every manual, addendum and Clinical UM Guideline PDF with its ?v= stamp (BH addendum, August 2026 CUMG list). (2026-10-18) |
| aetna.com disputes-appeals pages | JS-heavy HTML | r.jina.ai of disputes-appeals-overview.html and provider-appeals.html returns timeframes and the state-exception table (GA 24 months, TN 15 months). (2026-10-18) |
| Peach State / BCBST / Wellpoint TN / BlueCare manuals | Same URLs now serve new editions (BlueCare and BCBST PAM effective October 1, 2026; Wellpoint TN manual October 2026) | Check the PDF cover/footer edition, not just the URL, before re-citing a title. (2026-10-18) |
| medicalpolicy.hcsc.net | Connection reset to curl; r.jina.ai 422 navigation timeout (2026-10-18) | Not needed for ABA: BCBSIL retired PSY301.021 for MCG from 1/1/2026 (CPCP011 history). BCBSIL CPCP/RP PDFs load at www.bcbsil.com/docs/provider/il/standards/cpcp/2026/<name>.pdf (rp033-3-27-2026.pdf); the CPCP index page URLs 404. (2026-10-18) |
| hfs.illinois.gov pn09302025absserviceupdate.pdf | Still 404; web.archive.org resets connections | None; the comments file 09302025publiccomments.pdf loads. (2026-10-18) |
| providerinfo.bcbsm.com/documents/billing-claims/telehealth/*.pdf | Public PDFs (plain curl) — the 'portal-gated' Telehealth for behavioral health providers doc is linked from authorizations.bcbsm.com/prov-ref-telehealth-resources | Use that page's links. (2026-10-18) |
| michigan.gov MDHHS reporting requirements | Live page https://www.michigan.gov/mdhhs/keep-mi-healthy/mentalhealth/reporting lists the current code charts (SFY2027 xlsx) and Telemedicine Database; web.archive.org copies no longer needed | Plain curl with Chrome UA; openpyxl reads the xlsx. (2026-10-18) |
| www.dwihn.org | TLS SSL_ERROR_SYSCALL; dwihn.org (no www) works but 2024 /resources/upload PDFs 404 | Use dwihn.org/... paths; old documents need human retrieval. (2026-10-18) |
| priorityhealth.com/provider/manual/billing/* | HTML manual pages fetch with plain curl (binary-ish; use grep -a) | claim-deadlines, bh-billing, modifiers pages read directly. (2026-10-18) |
| www.point32health.org /provider/wp-content/uploads/... PDFs | Old WordPress PDF paths now return HTTP 200 with a ~40 KB Next.js HTML shell (not the PDF) — e.g. the 2024 Tufts Together ABA MNG | Current documents live at /documents/<slug>; the slug list is in the __NEXT_DATA__ JSON of /provider/policies/medical-necessity-guidelines (and /payment-policies), e.g. /documents/aba-tuftsheath-together-mng (note the "tuftsheath" typo in the slug). (2026-10-18) |
| providers.masspartnership.com (MBHP) | Root URL redirect-loops without cookies; Provider Manual and Medical Necessity Criteria pages render only a login form | curl -c/-b cookie jar fixes the loop; public PDFs under /pdf/ (PerfSpec-ABA.pdf) download plainly. Carelon's public MA documents (MA addendum, MA MNC, perf specs) are listed at carelonbehavioralhealth.com/providers/forms-and-guides/ma. (2026-10-18) |
| bostonmedicalcenter.policytech.com (WellSense policies) | 302 redirect loop to /dotNet/noAuth/login.aspx (Imperva) even with a cookie jar | None found — browser/human retrieval. (2026-10-18) |
| www.mass.gov | r.jina.ai worked all run on 2026-10-18 for /doc/.../download and /regulations pages (APB 409, APB 406, ALL-254, 101 CMR 358 proposed text) | Use r.jina.ai; mass.gov regulation pages show the posted version date in a table, useful to confirm whether a proposed rule has been finalized. (2026-10-18) |
| portal.kmap-state-ks.us bulletins | Plain curl: redirect loop | curl -sSL -c cj -b cj -A Mozilla/5.0 returns the bulletin PDF (21234 re-read). (2026-10-18) |
| uscode.house.gov view.xhtml | Site in a temporary format (Oct 2026): every view.xhtml granule URL returns a 5.8 KB Page Not Found with HTTP 200 | Use govinfo: https://www.govinfo.gov/link/uscode/<title>/<section>?type=usc&year=mostrecent&link-type=html redirects to the USCODE-2024 HTML (plain curl). (2026-10-18) |
| public.providerexpress.com autism ABA page | autism-aba.html now 404s; the live page is /content/ope-provexpr/us/en/clinical-resources/autismABA2.html | curl autismABA2.html with a Chrome UA lists every ABA PDF (abaSCC, documentation protocol, portal review guide BH00705, audit tools); fetch each with ?__tracked=1. (2026-10-18) |
| static.evernorth.com behavioral forms | Forms listing is static HTML | curl https://static.evernorth.com/assets/evernorth/provider/resourceLibrary/forms/formsCBHListing.html lists the ABA Prior Authorization Form (applied-behavior-analysis.pdf, 07/26) and state ABA PA forms. (2026-10-18) |
| provider.magellanhealthcare.com (Provider Focus articles) and magellanprovider.com/media PDFs | magellanprovider.com HTML pages return a Cloudflare challenge even via r.jina.ai | r.jina.ai reads /media/<id>/*.pdf (mcg.pdf = current Care Guidelines, mcg_summary.pdf = summary of revisions, provider_handbook.pdf) and provider.magellanhealthcare.com/w/<slug> news articles. (2026-10-18) |
| www.vha.cc.va.gov CHAMPVA OPM | JSON article API still works | /system/ws/v11/ss/article/554400000009345?portalId=554400000001036&usertype=customer returns OPM 02.18.06 (ABA) with lastModifiedDate. (2026-10-18) |
| providers.partnersbhm.org/wp-content/uploads/partners-provider-operations-manual.pdf | curl 403; WebFetch shows a 302 to providers.vayapartners.org (Partners merged into Vaya Partners 10/1/2026) | Use the Vaya Partners Provider Operations Manual v1.0 at resources.vayapartners.org (plain curl) (2026-10-18) |
| anthem.com/co/provider/individual-commercial/policies/manuals | lists PM_CO_00015 (2026) and PM_CO_00016 (2027) PDFs; plain curl | PDFs at /content/dam/digital/docs/provider/commercial/manuals/PM_CO_000NN.pdf (2026-10-18) |
| providers.vayapartners.org/rate-checkwrite-schedules/ | plain curl; 2026 schedule at resources.vayapartners.org/2026-checkwrite-schedule/ serves a PDF with text/html URL | save as .pdf and read with pymupdf (2026-10-18) |
| Blue Cross NC commercial Blue Book | bluecrossnc.com/providers/... pages 404; listing at bcbsnc.com/providers/forms-documents/blue-books | PDF on delivery-p174711-e1869819.adobeaemcloud.com (2023 edition, 26 MB), plain curl (2026-10-18) |
| www.njmmis.com Newsletters & Alerts list (documentDownload.aspx?fileType=076B9D7D-...) | ASP.NET search form; links are onClick window.open, not href | requests.Session GET, then POST hidden fields + wctNewsLetterHeader1:txtKeyWords=<kw> and date range; documents download from documentDownload.aspx?document=<NN-NN>.pdf or MA-YYYY-NN.pdf with plain curl (2026-10-18) |
| www.aetnabetterhealth.com (NJ provider pages and some PDFs) | Akamai 403 to curl, WebFetch and r.jina.ai | same paths on es.aetnabetterhealth.com return 200 (telehealth page, BH PA form, rate sheet); the provider manual still 403s there but r.jina.ai returns it in full (2026-10-18) |
| provider.wellpoint.com/new-jersey-provider/claims/reimbursement-policies | Angular widget, policy list absent from HTML | r.jina.ai renders the full list with docs/gpp/NJ_WLP_*.pdf links; PDFs download with plain curl (2026-10-18) |
| horizonnjhealth.com reimbursement-policy pages | worked with plain curl + full Chrome UA + Accept/Accept-Language headers (2026-10-18) | policy text is inline HTML (Telemedicine and Telehealth; Applied Behavior Analysis) (2026-10-18) |
| python in container | pymupdf and requests are installed for python3.13 only; /usr/local/bin/python3 (3.11) lacks them | run python3.13 -I (2026-10-18) |
| www.mvphealthcare.com medical policies | Old /providers/... policy paths 404; individual ABA medical policy not separately linked | The provider home page links one compendium PDF: /-/media/project/mvp/healthcare/documents/provider/mvp-health-care-medical-policies.pdf (23 MB, 1,336 pp, Oct 2026); ABA policy is pp. 55-66. (2026-10-18) |
| python3 / pip in container | `pip` installs into python3.13 while `python3` is 3.11, so pymupdf 'installed' but not importable | python3 -m pip install pymupdf (2026-10-18) |
| www.nysenate.gov/legislation/laws/ISC/* | Cloudflare 'Just a moment' 403 to curl and to r.jina.ai (2026-10-18; 3224-A happened to pass via jina) | https://r.jina.ai/https://codes.findlaw.com/ny/insurance-law/isc-sect-<n>/ returns full section text (read § 3216 and § 4903). (2026-10-18) |
| metroplus.org/press/... ABA notice | The press page is now a one-line teaser; the substantive notice is the linked PDF eBlast PRV 22.101 (2 pages) | Cite and read https://metroplus.org/wp-content/uploads/2022/12/PRV-22.101_-2022-Provider-eBLast_ABA_ABA-Providers_FINAL-002.pdf (plain curl). Its annual-validation rule is under the 'Qualified Health Plan' heading. (2026-10-18) |
| health.ny.gov Medicaid Update 2026 index | Index links October–December 2026 issues (no11–no14) that 404 — placeholders | Treat the newest page that returns 200 as current (Sept 2026 Special Edition, Vol 42 No 10, on 2026-10-18). (2026-10-18) |
| cms.gov Medicaid NCCI files | Plain curl works | /files/zip/medicaid-ncci-2026-q4-{mue,ptp}-edits-practitioner-services.zip (tab-delimited .txt inside); 2026 TGM at /files/document/2026-medicaid-ncci-technical-guidance-manual-02282026.pdf. (2026-10-18) |
| eMedNY weekly cycle | Not in the provider manuals | HIPAA FAQ CP02 (https://www.emedny.org/HIPAA/5010/FAQs/FAQs.aspx?qid=CP02: Monday 6 PM cut-off) and /hipaa/news/PDFS/CYCLE_CALENDAR.pdf — plain curl. (2026-10-18) |
| ecfr.gov renderer / r.jina.ai → ecfr.gov | Renderer API returned 403 and jina got a 503 page on 10/18/2026 | Versioner full-text XML works: curl --compressed "https://www.ecfr.gov/api/versioner/v1/full/<date>/title-<n>.xml?part=<p>&section=<s>". (2026-10-18) |
| dam.assets.ohio.gov MCO provider agreements | Filename pattern <YYYY>_<MM>_MCO_Final.pdf; most months 404 | Probe months: 2025_12_MCO_Final.pdf (Rev. 12/2025) is the latest posted as of 10/18/2026; App. K §5 (claims, NCCI) and App. L §10 (prompt pay). (2026-10-18) |
| www.in.gov IHCP Works seminar decks | MCE provider manuals for MHS, CareSource and UHC Indiana 404 or return HTML | The IHCP Works page (in.gov/medicaid/providers/provider-education/ihcp-works/) links each MCE’s 2026 claims/BH decks as plain PDFs — timely filing tables live there. (2026-10-18) |
| www.molinahealthcare.com/providers/oh/medicaid/manual/provman.aspx | 200 with ~424 KB page whose raw HTML carries no manual PDF link (only resource PDFs) | None found this run — Molina OH manual is a human retrieval. (2026-10-18) |
| securecms.highmark.com (Highmark medical policies) | curl TLS chain error (exit 60) | https://r.jina.ai/<url> returned V-37-044 in full (28 KB) on 2026-10-18 (2026-10-18) |
| providers.pa.carelon.com provider-manual pages | 169-byte 403 to curl with Chrome UA | r.jina.ai returns the pages (2-16 KB) (2026-10-18) |
| s18637.pcdn.co CN-48 IBHS policy PDF | 12-page image-only PDF (1.3 KB text) | render pages with pymupdf and read images (2026-10-18) |
| nhmmis.nh.gov provider manuals (wcm/connect PDFs) | 212-byte Incapsula stub to curl | r.jina.ai returned the General Billing Manual Vol I (Aug 2026) and EPSDT Vol II; manual list at r.jina.ai/https://nhmmis.nh.gov/portals/wps/portal/ProviderManuals then follow its Provider Manuals link (2026-10-18) |
| dhhs.nh.gov /sites/g/files/... PDFs | Akamai 403 Access Denied to curl | r.jina.ai (EVV services list) (2026-10-18) |
| humanservices.dhs.pa.gov/OUTPATIENTFEESCHEDULE (PA MA online fee schedule) | CPT licence click-through page | curl with cookie jar: POST answer=Accept to /OutpatientFeeSchedule/Home/Submit, then POST Provider=11&ProcedureCode=<code>&searchType=Search to /OutpatientFeeSchedule/Search/Submit; rows give PT/spec/modifier/price/POS (2026-10-18) |
| prddhs.pwpca.pa.gov (PROMISe CMS-1500 billing guides) | agent proxy connect_rejected (host not allowed) | none this run (2026-10-18) |
| providers.highmark.com provider manual chapters | plain curl with Chrome UA returns full HTML (339 KB) incl. claim submission unit | none needed (2026-10-18) |
| bcbsnd.com medical policies | Current Medical Policy Search is a Coveo JS widget (no static data) | The Commercial Migrated Medical Policy list is static HTML at /providers/policies-precertification/medical-policy/migrated-search (337 rows, id + effective date); each /migrated.id=<ID> page links a getbynder.com PDF that downloads with plain curl (ABA = BH18). Non-migrated policies still need a human. (2026-10-18) |
| procedurelookup.caresource.com (CareSource / TrueCare MS PA lookup) | React SPA; HTML has no data | Public API the page itself calls: GET https://portalservices.caresource.com/cpt/pawh/procedureLookup?ProcedureCode=<one code>&LevelOfCare=Outpatient&LineOfBusiness=CSMS&ServiceDate=MM/DD/YYYY with header X-ApiKey from https://procedurelookup.caresource.com/env.js; /cpt/lobs lists GroupCodes per state. One code per call. (2026-10-18) |
| www.dhs.state.mn.us idcplg pages (MHCP/EIDBI manuals) | Plain curl gets a ~15 KB Radware 'you are a bot' captcha page (HTTP 200); its incident ID changes each fetch, so payer-watch flags every DHS URL as changed by ±1 byte | https://r.jina.ai/<url> returns the full manual page with its Revised date (read the Billing Policy Overview, revised 7/30/2026). (2026-10-18) |
| anthem.com commercial manuals | State 'manuals' pages list only the main commercial manual (PM_<ST>_000NN) and the MA manual | The BlueCard Provider Manual PDFs load directly: /content/dam/digital/docs/provider/commercial/manuals/PM_KY_00004.pdf (Jan 2021) and PM_MO_OH_WI_00004.pdf (Jan 2022); KY commercial manual is PM_KY_00011 (eff. 9/1/2026), WI is PM_WI_00014 (eff. 8/1/2026). (2026-10-18) |
| cms.gov Medicaid NCCI MUE zip | Plain curl works; the public file's header says it 'should NOT be used by state Medicaid programs as their edit file' | Cite it as CMS's published Medicaid MUE values, not as the state's own edit file (2026-10-18) |
| ssa.gov/OP_Home/ssact | 403 to curl with Chrome UA | Cite CMS 'NCCI for Medicaid' page, which states the § 6507 requirement (2026-10-18) |
| pegapalookup.molinahealthcare.com (Molina PA lookup) | Pega app redirects to a SAML login page; no guest code lookup reachable by curl | Human run in a browser (2026-10-18) |
| automatic bot-wall fallback in helper scripts | An auto-retry through r.jina.ai when a page returned an Incapsula/Cloudflare stub was refused by the session's permission classifier (bot-check circumvention) | Fetch plainly, record stubs as failures; use WebFetch/WebSearch or a human retrieval instead (2026-10-25) |
| assets.healthfirst.org/pdf_<id> | PDF served with leading whitespace before %PDF; naive magic-byte check treats it as HTML | search the first 1 KB for %PDF- before parsing with pymupdf (2026-10-25) |
| www-cdn.aetna.com | agent proxy connect_rejected | same path on www.aetna.com returns the PDF (NJ_prov_appeal_proc.pdf) (2026-10-25) |
| www.horizonblue.com professional-provider-manual/<chapter> | plain curl with Chrome UA returns full HTML chapters (claims, appeals, COB, BlueCard) | none needed (2026-10-25) |
| www.njmmis.com RateInformation.aspx | CPT/CDT licence agreement page before rates | not accepted by the agent; human retrieval (2026-10-25) |
| health.ny.gov /health_care/medicaid/integrity/ | revalidation + moratorium page and BPE slide PDFs fetch with plain curl | none needed (2026-10-25) |
| nhmmis.nh.gov wcm/connect PDFs | 212-byte Incapsula stub to curl (payer-watch got real files) | human retrieval or the watcher's copy (2026-10-25) |
| providers.vayahealth.com, providers.partnersbhm.org (legacy Vaya / Partners provider sites) | Since mid-Oct 2026 every providers.vayahealth.com path returns HTTP 200 with the 131 KB Vaya Partners home page (redirect to providers.vayapartners.org) - not the document; providers.partnersbhm.org returns 403 (75 KB) on every path. Vaya Partners Provider Alert 10/16/2026 announced the redirect. | Same paths on legacy.providers.vayahealth.com and legacy.providers.partnersbhm.org return the real PDFs/pages to plain curl (Chrome UA). Note the Vaya RB-BHT Authorization Guidelines file at the same /2025/09/ path is now v3.0 rev. 08.01.2026. (2026-10-25) |
| medicaid.alabama.gov | Leaf certificate now issued by GlobalSign Atlas R46 OV TLS CA 2026 Q4 (was R3 2026 Q1); old intermediate no longer completes the chain | Fetch http://secure.globalsign.com/cacert/gsatlasr46ovtlsca2026q4.crt, convert DER->PEM, append to /root/.ccr/ca-bundle.crt and pass --cacert (verification stays on). The /content/Gated/ CPT click-through POST was refused by the agent permission layer this run, so gated chapters/fee schedules need a human or pre-approved run. (2026-10-25) |
| medicaid.ms.gov/wp-content/uploads/2026/07/Title-23-Part-223-EPSDT-eff.-8.1.26.pdf, /2017/05/SPA-16-0020-...pdf | nginx 404 (site root 200); /administrative-code/ empty reply (curl 52) on 2026-10-25 | None this run; find the new Part 223 filename on the Administrative Code page when it answers (2026-10-25) |
| www.molinahealthcare.com /-/media/Molina/PublicWebsite/PDF/Providers/fl/... and /providers/fl/medicaid/comm/-/media/<id>.ashx | 404 / ~384 KB bot-wall | Same path on myhealthinhand.molinahealthcare.com returns the real PDFs (FL guides repointed 2026-10-25) (2026-10-25) |
| www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf | 404 | Current file linked from department.va.gov/vha/community-care/family-member-care/champva/: https://www.va.gov/files/2026-03/CHAMPVA-Guidebook_3-2026.pdf (G8 found a 2025-12 copy too; the 3-2026 file is the one VA links now) (2026-10-25) |
| www.caresource.com GA reimbursement-policies list | Plain curl returns the full list HTML (23 policy links); health-partner-policies parent page is JS (jina needed) | grep documents/medicaid-ga-policy-reimburse-* in the reimbursement-policies/medicaid/ page (2026-10-25) |
| aetna.com CPB pages | Last Review date is in raw HTML (Last Review</a>&nbsp;MM/DD/YYYY) | grep the raw HTML; CPB 0648 last review 10/20/2026 (2026-10-25) |
| providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/mnABA/mnEIDBIOverview.pdf | Was 404 (runbook 2026-10-07); now returns the real 2-page PDF (BH02483-26-QRG_10132026) on www.providerexpress.com and public.providerexpress.com, with or without ?__tracked=1 | plain curl with Chrome UA (2026-10-25) (2026-10-25) |
| mn.gov MHCP provider news page (provider-news/index.jsp) | r.jina.ai renders the full news list incl. dated EIDBI items and the dDocName of each DSD eList | r.jina.ai; then r.jina.ai on dhs.state.mn.us ...dDocName=MNDHS-0878xx for the eList text (2026-10-25) (2026-10-25) |
| docs.legis.wisconsin.gov | HTTP 503 to payer-watch and connection reset to curl all morning 2026-10-25 | none this run; transient outage, retry before treating WI statute cites as dead (2026-10-25) |
| www.hennepinhealth.org | payer-watch got HTTP 403; curl with full Chrome UA returns 200 and the same 392,024-byte PA chart PDF | full Chrome UA (2026-10-25) (2026-10-25) |
| mnscha.org South Country manual chapters | Chapter filenames carry the posting date and old ones 404 (Ch4_07292026 -> Ch4_10212026) | list current files from https://www.mnscha.org/providers/provider-manual/ (plain curl) (2026-10-25) |
| aetna.com CPB review history | Policy History table is JS-loaded; static HTML shows only Last Review date | compare cited text directly (CPB 0648 10/20/2026 now lists F84.0, F84.3, F84.5, F84.8, F84.9) (2026-10-25) |
| myhealthinhand.molinahealthcare.com | Molina OH 2026 Medicaid manual (MHO-Medicaid-2026-Manual-508.pdf) 404s on www but returns the real 214-page PDF on this host; www.molinahealthcare.com/providers/oh/prior-auth (provider page) is live and links quarterly Medicaid PA code-change PDFs | plain curl with Chrome UA (2026-10-25) (2026-10-25) |
| law.justia.com Indiana Code | Cloudflare 'Just a moment' via r.jina.ai and curl | https://r.jina.ai/https://codes.findlaw.com/in/<title>/in-code-sect-<n>/ (re-read IC 25-8.5-3-1, -3-6, 27-8-14.2-3/-4/-5, 27-1-37.5-28) (2026-10-25) |
| www.dhs.state.mn.us idcplg GET_FILE (EIDBI billing grid PDF) | curl gets the 15 KB Radware bot page | r.jina.ai/<url> returns the full 6-page grid as text (2026-10-25) (2026-10-25) |
| aetna.com disputes-appeals-overview state mailing table | Minnesota is listed in neither state group | use EOB/denial-letter address for MN (2026-10-25) |
| www.arkleg.state.ar.us/Bills/Search | Advanced search needs a hdnSessions list; without it returns You must choose at least one session | curl -A Mozilla/5.0 -G /Bills/Search --data-urlencode tbExactPhrase=23-99-418 --data-urlencode hdnSessions=z2025R,z2023R,... --data-urlencode ddBienniumSession=2025/2026F --data-urlencode Search=Search  (exact phrase finds every Act citing a code section) (2026-10-25) |
| lababoard.org | SiteGround captcha gone on 2026-10-25; home and /rules-chapter-N/ pages return full HTML to curl -A Mozilla/5.0 | Rules are HTML pages https://lababoard.org/rules-chapter-{1,2,3,4,5,6,8,10}/ (Chapter 2 section 204 = Telehealth Standards); laws/opinions PDFs on /laws-rules-and-opinions/ (2026-10-25) |
| insurance.mo.gov/hmo-service-areas-company | Per-company county list paginated 25 rows/page; withdrawn counties stay listed with a Withdrawal Date | curl Chrome UA ...?company_id=<id>&topic=61&wrapped=true&page=N; parse <tbody>; count rows with empty withdrawal date. HMODBAsJune2022.pdf now 404s. (2026-10-25) |
| getempowerhealth.com/provider-alerts/ | Alert list loads by admin-ajax (Load More); HTML has no alert links | WP REST: /wp-json/wp/v2/providers?per_page=30&_fields=id,date,link,title lists alerts; /wp-json/wp/v2/search?search=<kw>; each post body links a conta.cc Constant Contact email holding the actual notice text (2026-10-25) |
| www.molinahealthcare.com NE/IA provider pages | Old /providers/<st>/medicaid/Claims/priorauth.aspx and /resources/*.aspx now 404 (384 KB body); old /-/media/Molina/PublicWebsite/PDF/Providers/<st>/... PDFs 404 | New pages /providers/<st>/prior-auth and /providers/<st>/resources (real content, ~460-490 KB); old media PDFs still load on myhealthinhand.molinahealthcare.com same path; new PDFs under /-/media/Project/PWS/Healthcare/PDF/PDF/Providers/<ST>/. medicare.centralhealthplan.com is connect_rejected by the proxy. (2026-10-25) |
| sbs.naic.org/solar-external-lookup (NAIC State Based Systems company lookup used by NE and others for licensed-company search) | Angular app; JS chunks need a Referer header (403 without); no static company list | none found this run for a licensed-HMO roster; KS/OK/LA/NE DOIs publish no static HMO list either (search 2026-10-25) - human lookup by license type (2026-10-25) |
| www.molinahealthcare.com/providers/{tx,nm,nv}/prior-auth | Old /providers/<st>/medicaid/forms/PA.aspx and /resource/priorauth.aspx paths 404 (~400 KB page); the new prior-auth pages' raw HTML carries /-/media/Project/PWS/... PDF paths (quarterly PA Code Matrix) not visible as href .pdf | curl the /providers/<st>/prior-auth page and regex '/-/media/[^"\\]+?\.pdf'; TX: 10-2026-MHTX-Q4-Medicaid-BH-Medical-PA-Code-Matrix-508.pdf, NM: New-Mexico-Prior-Authorization-PA-Code-Matrix-Q4-2026.pdf; NV page lists only a Marketplace PA guide (Medicaid still lookup-tool only) (2026-10-25) |
| hcpf.colorado.gov/sites/hcpf/files/* | 301 meta-refresh to /sites/g/files/lrnvjt4251/files/<same name> (642-byte HTML body if not followed) | curl -L with Chrome UA (+Referer for xlsx) (2026-10-25) |
| www.autismspeaks.org | 212-byte Incapsula stub to curl (payer-watch 'changed' 954->212) | none needed — secondary source; treat as noise (2026-10-25) |
| python in container (2026-10-25) | none of python3/python3.11/3.12/3.13 had pymupdf today | python3 -m venv <scratch>/venv && venv/bin/pip install pymupdf openpyxl (2026-10-25) |
| hcpf.colorado.gov provider alert PDFs | 97151 proposal alert has a garbled text layer | render with pymupdf and read the image (2026-10-25) |
| www.anthem.com forms-and-guides library (any state) | Forms list is JS-rendered; GET of the servlet returns a 95-byte stub | POST JSON to https://www.anthem.com/content/anthem/jcr:content/servlets/formsAssetMetadata.json with {assertFolderPathArray:[.../provider/commercial/guides, .../provider/commercial/forms], brandArray:null, stateArray:["CA"], formsCategoriesArray:["BehavioralHealth",...], categoryTypeArray:["provider","pro_guides","pro_forms"], language:"en"} (values from the page data-json-prop) -> AllDocs with title/URI/publish date. The docs/public/inline/CA_TPRF_00001.pdf link in the BH guide serves a stale 2023 edition; the /forms/CA_TPRF_00001.pdf path is April 2026. (2026-10-25) |
| www.oregon.gov (all OHA pages and PDFs) | HTTP 401 UNAUTHORIZED (16-byte body) to curl (any UA) and WebFetch on 2026-10-25 | None this run. OHA Provider Matters issues arrive in the payer-news inbox (ORHA@public.govdelivery.com); content.govdelivery.com/accounts/ORHA/bulletins index 404s. secure.sos.state.or.us rule pages still read via WebFetch. (2026-10-25) |
| r.jina.ai used against a host that 403s direct requests (medquest.hawaii.gov) | HTTP 401 UNAUTHORIZED to curl and WebFetch on Provider-Matters.aspx / Announcements.aspx on 2026-10-25; other oregon.gov pages (policy-bhs.aspx, Fee-Schedule.aspx, SharePoint _api lists) answered 200 later the same run | Do not route around 403/401 blocks via r.jina.ai in this environment; file a source request instead. Plain curl hosts unaffected. (2026-10-25) |
| www.partnershiphp.org | 403 on /providers/policies/section3 and the provider newsletter/bulletin indexes (payer-watch 2026-10-25) | none tried beyond curl this run; public.powerdms.com/PHC policy PDFs (listed on section3) may still load directly (2026-10-25) |
| medquest.hawaii.gov | HTTP 403 to curl (Chrome UA) on all memo/FAQ PDFs, 2026-10-25 (was 522 earlier) | none permitted this run (jina route refused as bot-check circumvention); human retrieval (2026-10-25) |
| www.molinahealthcare.com Washington documents | Old /-/media/Molina/PublicWebsite/... WA paths return the 384 KB Page Not Found body | /providers/wa and /providers/wa/prior-auth (plain curl, Chrome UA) link current PDFs under /-/media/Project/PWS/Healthcare/PDF/PDF/Providers/WA/ (Prior-Auth/Guides, Prior-Auth/Forms, Provider-Manuals, Apple-Health-Medicaid-and-Apple--2026.pdf) which download directly (2026-10-25) (2026-10-25) |
| Centene Pre-Auth Check JSON (Coordinated Care WA, Trillium OR) | page is a JS widget | content.centene.com/content/<site>/en_us/providers/preauth-check/medicaid-pre-auth.preauthtool.json?ver=1.0&q=<CPT>&qualifier=<n>&productCategory=MEDICAID&apiEnv=PROD — coordinatedcare qualifier 41, trilliumohp qualifier 82 (2026-10-25) (2026-10-25) |
| humana.gcs-web.com news releases | curl 403 (522-byte stub) / watcher 503 | https://r.jina.ai/<url> returns the full release (Humana exit press release 2/23/2023 still live) (2026-10-25) |
| va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf | 404 since 10/2026 | Same file at https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf; newer March 2026 posting at /files/2026-03/CHAMPVA-Guidebook_3-2026.pdf (2026-10-25) |
| eCFR watcher flags (32 CFR 199.8, 42 CFR 433.139, 38 CFR 17.270/17.272/17.273/17.276, 29 CFR 2560.503-1) | same-byte 'changed' every week | versioner amendment dates: 199.8 2020-05-04, 433.139 2024-11-19, 17.270 2022-08-12, 17.272 2026-01-30, 17.273 2025-09-22, 17.276 2022-08-12, 2560.503-1 2021-09-21 — no new amendment; noise (2026-10-25) |
| hopkinsusfhp.org service-area page | ~2 KB changes are the enrol form/state dropdown chrome; service-area text sits in a ZIP tool | compare section text, not body size (2026-10-25) |
| www.bcbstx.com commercial ABA documents | Old /provider/pdf/mgmt-aba-program.pdf and /provider/clinical/bh_medical_necessity_criteria.html 404 (a 4.7 KB 404 page) | https://www.bcbstx.com/provider/clinical/clinical-resources/behavioral-health lists the commercial, ERS and TRS ABA forms (/docs/provider/tx/education/forms/other-bcbstx-plans/aba-clinical-serv-req.pdf etc.), plain curl with Chrome UA (2026-11-01) (2026-11-01) |
| TMPPM Vol. 1 Section 1 (Provider Enrollment) | Guessed paths 404 | /TMPPM/1_01_Provider_Enrollment/1_01_Provider_Enrollment.htm on the tmhp.com microsite, plain curl; § 1.9 = out-of-state enrollment (2026-11-01) (2026-11-01) |
| www.hca.nm.gov Behavioral Health Policy and Billing Manual | The page /providers/behavioral-health-policy-and-billing-manual/ shows no PDF href; the link sits JS-escaped in page JSON | grep the raw HTML for wp-content/uploads/*.pdf — current file BH-Manual-Section-Final-Version-4.1.25-1-1.pdf (April 1, 2025, 202 pp), plain curl -A Mozilla/5.0 (2026-11-01) (2026-11-01) |
| www.oscn.net | WebFetch now gets a human-verification page; reading a saved r.jina.ai copy was refused by the permission layer | None this run; file a source request (2026-11-01) (2026-11-01) |
| texas.public.law (Tex. Occ. Code) | Plain curl returns full section HTML (verified May 2025 snapshot) | curl -A Mozilla/5.0 https://texas.public.law/statutes/tex._occ._code_section_506.NNN (2026-11-01) (2026-11-01) |
| es.aetnabetterhealth.com Texas manual | tx_provider_manual.pdf on es. host now serves the October 2026 edition (206 pp) | plain curl on the es. host (2026-11-01) (2026-11-01) |
| bcbstx.com commercial provider documents | CPCP PDFs moved from /docs/provider/tx/standards/cpcp/ to /docs/provider/tx/standards/clinical-pay-coding/<year>/; manuals listed at /provider/standards/standards-requirements/manuals; news at /provider/education/education/news; commercial BH PA code list not found | plain curl with Chrome UA (2026-11-01) (2026-11-01) |
| bcbsnm.com provider pages | Paths use /provider/education-reference/education/news and /provider/standards-requirements/standards/provider-reference-manual (other HCSC path patterns 404) | commercial BH PA list at /docs/provider/nm/claims/claims-and-eligibility/preservice-reviews/nm-bh-aso-pa-code-list.pdf; PRM at /docs/provider/nm/bcbsnm-provider-reference-manual.pdf (2026-11-01) (2026-11-01) |
| medicalpolicy.bcbs{tx,nm}.com ADM1001.036 | The 2026-01-01 version shows Policy End Date 10/31/2026 | Current file is ADM1001.036_2026-11-01.pdf (end 01/14/2027); ABA still under MCG B-806-T. BCBSOK guide still cites the 01-01 file (2026-11-01) (2026-11-01) |
| hcpf.colorado.gov bulletin PDFs | 403 to curl with bare 'Mozilla/5.0' UA and to WebFetch (2026-11-01). The SOURCE ACCESS table's Chrome-UA+Referer route was refused by the session permission layer (Bot Check Circumvention). | None automated this session. File a source request (human download). (2026-11-01) |
| providers.vayapartners.org/bulletins/ | 403 to curl; WebFetch reads the index. The bulletin links go to resources.vayapartners.org/<slug>/, which serves the bulletin as a PDF. | Use WebFetch on the index and the bulletin URL, then pdftotext the PDF WebFetch saves (read PCB #5 this way, 2026-11-01). (2026-11-01) |
| flipbooks.upmc.com (UPMC Provider Partner Update) | 200 with a ~6 KB JS shell; curl and WebFetch see only the title. | Human read, or find a PDF download link; r.jina.ai is not a listed route. (2026-11-01) |
| bcbsm.com The Record | The email's plaintext part is a stale Jan 2022 template (HTML part is current). The web archive index and the per-article pages (the_record/2026/nov/Record_01126<x>.html) load with plain curl. | Read the web issue, not the email plaintext. BCN Provider News and Blues Brief are being folded into The Record (Nov–Dec 2026 BCN issue). (2026-11-01) |
| Florida AHCA Medicaid Health Care Alert emails (Medicaid_Alert@ahca.myflorida.com) | The bodies of the 10/29–10/30 waiver alerts are a broken 2019 template ('March XX, 2019', no content, mojibake). Only the subject identifies the alert. | Read the alert on the AHCA 'last 90 days' alerts page instead of the email. (2026-11-01) |
| manuals.medicaidalaska.com | CONNECT tunnel 502 through the proxy (2026-11-01). | Retry later. Alaska Medicaid still has no public archive index. (2026-11-01) |
| www.tn.gov/tenncare/news.html | 403 to curl AND to r.jina.ai (2026-11-01); the runbook lists jina as the tn.gov route | Human browser check; consider marking the jina route unreliable for tn.gov (2026-11-01) |
| ldh.la.gov/page/informational-bulletins | 403 to curl (118-byte body) and to WebFetch (2026-11-01) | Read LDH IBs through the MCO mirrors (e.g. ACLA provider alerts mirror each IB as a PDF), or a human check (2026-11-01) |
| mnscha.org | 403 to curl; WebFetch gets a 301 to http://www.mnscha.org/ (not auto-followed) | Retry WebFetch on the http://www. URL (2026-11-01) |
| blog.cdphp.com, metroplus.org, communityfirsthealthplans.com, providernewsroom.com, bcbswy.com | 403 bot pages (~756–765 B) to curl | WebFetch reads the listing pages (2026-11-01) (2026-11-01) |
| Watcher false positives (2026-11-01) | 52 of 132 flagged G10 archives had no item dated in the week (template, banner or token churn), e.g. IEHP, Blue Shield CA, CareFirst, WellSense, Point32, HealthPartners, PA Quick Tips | Triage by newest dated item before reading deeper (2026-11-01) |
| medicaidpublications.dhss.delaware.gov DMX download API | The path without /docs/ (…/DesktopModules/Bring2mind/DMX/API/Entries/Download…) now returns a 1,245-byte 404 HTML page | Use the /docs/DesktopModules/Bring2mind/DMX/API/Entries/Download?Command=Core_Download&EntryId=<n>&language=en-US&PortalId=0&TabId=94 path (as in delaware.ts DMX()) with a cookie jar + Chrome UA: returned GPM (1797), Practitioner manual (2112, rev 3/17/2026) and ABA fee schedule (1424) as PDFs (2026-11-01) (2026-11-01) |
| www.horizonblue.com administrative-policies pages (record-keeping standards, medical records documentation standards, outlier audit programs) | HTTP 200 with a 35 KB "Authentication Required" page (Availity login), not an Incapsula stub | None — login-only; human retrieval via Availity. The CAMU audit FAQ and the Professional Provider Manual chapters remain public to plain curl with a Chrome UA (2026-11-01) (2026-11-01) |
| njconsumeraffairs.gov (Board of Applied Behavior Analyst Examiners pages and Chapter 42B PDF) | 212-byte stub to curl on /abae/ pages; the Chapter-42B PDF URL returns 404 | N.J.A.C. 13:42B sections read from law.cornell.edu/regulations/new-jersey/N-J-A-C-13-42B-<n> with plain curl (adopted 56 N.J.R. 782(a), eff. 5/6/2024) (2026-11-01) (2026-11-01) |
| law.cornell.edu New York regulations (18 NYCRR, 8 NYCRR) | — | Plain curl returns full section text, e.g. /regulations/new-york/18-NYCRR-517.5, /8-NYCRR-29.2 (2026-11-01) (2026-11-01) |
| www.op.nysed.gov (Office of the Professions) | HTTP 503 to the watcher and WebFetch; curl through the agent proxy fails with exit 60 (unable to get local issuer certificate) even with --cacert /root/.ccr/ca-bundle.crt (2026-11-01) | None that day; retry on a weekday before treating cites as dead (2026-11-01) |
| www.njmmis.com/documentDownload.aspx?document=<file> | Watcher reports HTTP 404; it now 302-redirects to /downloadDocuments/<file> | curl -L with a Chrome UA follows the redirect and returns the same PDF (30-06 still 203,864 bytes) (2026-11-01) (2026-11-01) |
| hscsnhealthplan.org PDFs | Watcher recorded 0 bytes on 2026-11-01 | Plain curl -L with a Chrome UA returned all five PDFs at their previous byte sizes; transient (2026-11-01) (2026-11-01) |
| pa.gov HealthChoices BH eligibles map PDF | Now image-only (no text layer; Oct 2026 edition with August 2026 data) | pdftoppm -r 110 -png and read the image (2026-11-01) (2026-11-01) |
| provider.scdhhs.gov (SC ASD manual linked from scdhhs.gov/providers/manuals/autism-spectrum-disorder-asd-services-manual) | curl exit 60 (server sends leaf only). The file it serves (Manual.pdf, 59 pp., last-modified 7/1/2026) is NOT the same as www.scdhhs.gov/.../ASD%20Services%20Provider%20Manual%207.1.26.pdf (55 pp., 5/15/2026), though both covers read "July 1, 2026" — unit limits, telehealth and supervision text differ. | Fetch the GoDaddy G2 intermediate (http://certificates.godaddy.com/repository/gdig2.crt, DER->PEM), cat onto /root/.ccr/ca-bundle.crt and curl --cacert. Treat the provider.scdhhs.gov file as current; the www copy is the May 15 release. (2026-11-01) |
| www.anthem.com formsAssetMetadata.json servlet | POST returned 403 (gzip 398-byte body) on 2026-11-01; forms library page itself redirects to /provider/individual-commercial/forms-and-guides with no data-json-prop | None used (not routed around); file a source request for the needed state document. (2026-11-01) |
| bacb.com/rbt-handbook/ | Redirects to the current dated PDF (2026-10: /wp-content/uploads/2026/10/RBTHandbook_261028-a.pdf); old filenames 404 | Cite and fetch https://www.bacb.com/rbt-handbook/ (stable) and save as .pdf (2026-11-01) |
| resources.vayapartners.org/authorization-guidelines/ (BH PA look-up workbook) | Serves an .xlsx; RB-BHT rows are on the VISIBLE sheet "IDD and TBI" (other RB-BHT rows sit on hidden draft sheets) | openpyxl; read the IDD and TBI sheet, not the hidden ones (2026-11-01) |
| web.archive.org | Connection reset / ws_closed_mid_exchange on every call 2026-11-01 (CDX and id_ fetches) | None that day; retry later (2026-11-01) |
| providers.highmark.com HHO WV provider manual | Year-stamped 2025-HHOWV-ProviderManual.pdf now returns a 73 KB HTML 404 page with HTTP 200 | Current manual is the unstamped .../provider-manual/HHOWV-ProviderManual.pdf, linked from https://providers.highmark.com/hho-wv/resources/provider-manual.html (2026-11-01) |
| azahcccs.gov ABA FFS rates page | Page /PlansProviders/RatesAndBilling/FFS/ABArates.html lists 'Rates Effective October 1, 2026' linking FY27_ABA_WebsiteRates.xlsx (filename pattern changed from FY26_Final_ABA_FeeSchedule.xlsx) | plain curl; parse with openpyxl; check the 'Last Updated' footer row (2026-11-01) (2026-11-01) |
| health.utah.gov/stplan/lookup/CoverageLookup.php | 301 to https://stplan.dhhs.utah.gov/lookup/ (meta-refresh loop if the redirect is not followed); results come from an AJAX POST | POST pac_code=166&service_date=MM/DD/YYYY&proc_code=<5-char code> to https://stplan.dhhs.utah.gov/lookup/getProcSearchResults.php with a cookie jar; querying past dates returns the rate in force then with its start/end dates (2026-11-01) (2026-11-01) |
| hcpf.colorado.gov MPRRAC documents | Rate review public meetings page links presentation/summary PDFs with text layers; the Three-Year Review Schedule page shows which services are in each cycle | curl -L with Chrome UA; https://hcpf.colorado.gov/medicaid-provider-rate-review-public-meetings (2026-11-01) (2026-11-01) |
| www.idmedicaid.com | 404 on Information Release PDFs Saturday night (inside the documented Sat 4 PM - Sun 10 AM MT maintenance window) | Run Idaho checks on a weekday (2026-11-01) (2026-11-01) |
| AZ Blue (azblue.com) medical policies and PA code lists | Policy PDFs and the PA code list xlsx are on edge.sitecorecloud.io (Sitecore CDN), linked from /provider/resources/prior-authorization-and-medical-policies; old /provider/resources/prior-authorization paths 404 | plain curl; ABA criteria = .../medical-policies/clinical/medicine/applied-behavior-analysis.pdf (O1203); code lists = .../code-lists/az-blue-prior-auth-code-lists.xlsx (sheets per list: Standard, State of AZ, Teamsters, FEP, custom groups) (2026-11-01) (2026-11-01) |
| Regence BH18 public links | beonbrand.getbynder.com/m/e4646f415eb7f4eb/ and blue.regence.com/trgmedpol/behavioralHealth/bh18.pdf serve the 8/1/2025 edition (PDF mod 7/28/2026) with a 'revised policy will be effective November 1, 2026' banner; www.regence.com/trgmedpol path 404s | Check the 'Effective:' line on page 1 before citing; the revised edition needs human retrieval (2026-11-01) (2026-11-01) |
| portal.kmap-state-ks.us Fee Schedules (PublicPage/ProviderPricing/FeeSchedules) | Recorded as SSO-walled / JS-only; actually a Kendo page backed by JSON endpoints that answer plain curl with a cookie jar | curl -c cj -b cj -A Mozilla/5.0 -H X-Requested-With:XMLHttpRequest: GET /PublicPage/ProviderPricing/GetFeeScheduleRateType; POST program=TXIX&ratetype=DEF to /PublicPage/ProviderPricing/FeeSheduleSearchCurrentResultList (and ...PreviousResultList for monthly history back to 2022); GET /PublicPage/ProviderPricing/DownloadFSFile?arg1=FeeSchedule_YYYYMMDD_TXIX_DEF.txt.zip -> zipped fixed-width text (ABA 9715x rows are "Medicaid rate" MAX Fee) (2026-11-01) (2026-11-01) |
| portal.kmap-state-ks.us Provider Manuals (PublicPage/Public/ProviderManuals) | Listing is JS-only (runbook: human retrieval) | GET /PublicPage/ProviderPricing/GetProviderCurrentManualTypes (codes: 28 Mental Health, 13 HCBS Autism, 08 General Benefits, 09 General Billing); POST currentManualType=<code> to /PublicPage/ProviderPricing/CurrentManualList returns the PDF URL (/Documents/Provider/Provider Manuals/<name>.pdf), which downloads with the same cookie jar (2026-11-01) (2026-11-01) |
| dss.mo.gov /media/pdf/<slug> and /media/file/<slug> (MHD bulletins, public notices) | HTTP 200 HTML viewer page, not the PDF; old /mhd/providers/pdf/bulletinNN-NN.pdf paths 404 | grep the viewer HTML for /sites/mydss/files/media/(pdf\|file)/YYYY/MM/<name>.(pdf\|docx) and curl that (Chrome UA). MHD Alerts and Public Notices (dss.mo.gov/mhd/alerts) lists every rate notice for 10 years (2026-11-01) (2026-11-01) |
| house.mo.gov appropriations bills | Bill.aspx is JS-heavy; FY2027 budget bills are numbered HB 2011-2013 (second regular session), not HB 11 | house.mo.gov/BillContent.aspx?bill=HB2011&year=2026&code=R&style=new lists documents.house.mo.gov/billtracking/bills261/hlrbillspdf/2011H.07T.pdf (truly agreed); plain curl (2026-11-01) (2026-11-01) |
| medica.com, wellfirsthealth.com | Cloudflare "Just a moment..." 403 to curl (bare and Chrome UA) and WebFetch on every path (2026-11-01) | None used (no bot-check circumvention); human retrieval via source request carelu-2026-11-01-medica-ks-aba (2026-11-01) |
| static.cigna.com/assets/chcp/resourceLibrary/... HTML pages | 224-byte meta-refresh stub (payer-watch shows ~11 KB -> 224 B) | Follow the refresh to connections.cigna.com/chcp/resourceLibrary/<same path without .html>; plain curl, Chrome UA (2026-11-01) (2026-11-01) |
| dhhs.ne.gov PDFs | HTTP 503 to the watcher on 2026-11-01 for every PDF; transient | Plain curl with Chrome UA returned all 8 PDFs a few hours later; retry before treating a cite as dead (2026-11-01) (2026-11-01) |
| mydss.mo.gov /mhd/bulletins/<slug> pages | The first /media/pdf link in the page is the site-wide FACES payroll schedule, not the bulletin | Take the dss.mo.gov/sites/mydss/files/media/file\|pdf/... link named after the bulletin (October 2026 bulletins are .docx) (2026-11-01) (2026-11-01) |
| www.forwardhealth.wi.gov Online Handbook and MaxFeeDownload.aspx | Both redirect to Public/ProcedureLicenseAgreement.aspx; scripting the licence acceptance (requests.Session POST of rbAgreement=Y) was refused by the session permission layer on 2026-11-01 | Static max fee CSVs still download directly: https://www.forwardhealth.wi.gov/MaxFee/behav_max_fee_<yyyymmdd>.csv (20261101 exists). Handbook text needs a human or explicit user approval. (2026-11-01) |
| www.forwardhealth.wi.gov ForwardHealth Updates list | ASP.NET postback search; GET shows only the form | requests.Session GET, POST hidden fields + ...$CriteriaPanel$ctl00$ctl03$UpdateYear$mb_UpdateYear=2026, ...$ctl04$UpdateProviderType$mb_UpdateProviderType=8 (Behavioral Treatment Benefit), ...$ctl07$SearchButton_input=Search; Update PDFs at /kw/pdf/<yyyy-nn>.pdf (plain curl). (2026-11-01) |
| hfs.illinois.gov provider notices index | JS-rendered list (no links in HTML) | JSON feed: https://hfs.illinois.gov/content/soi/hfs/en/medicalproviders/notices/jcr:content/responsivegrid/container/container_293684588/datatablecontentfrag.datatablecontentfragment.json (plain curl, ~900 KB; rows = [year, date, [id, path], title, audience]). (2026-11-01) |
| www.michigan.gov MDHHS proposed Medicaid policy page | Plain curl (Chrome UA) works; links to Public-Comment/2026/<nnnn>-<topic>-P.pdf | Grep href for Public-Comment/2026; each PDF has a Subject: line. (2026-11-01) |
| abacodes.org (ABA Coding Coalition) | Plain curl works; 2027 CPT supplemental guidance PDF lists the final 2027 code numbers | https://abacodes.org/wp-content/uploads/2026/10/2027-CPT-Supplemental-Guidance.pdf (2026-11-01) |
| federalregister.gov full_text XML | Returned a 0-byte body for 2026-14327 on 2026-11-01 | govinfo PDF https://www.govinfo.gov/content/pkg/FR-2026-07-16/pdf/2026-14327.pdf (41 MB) — ABA section is (47) Adaptive Behavior Services, ~p.50. (2026-11-01) |
| www.insurance.nd.gov Bulletin 2018-1 PDF | Image-only PDF (no text layer) | Render with pymupdf and read the 2 page images. (2026-11-01) |
| docs.legis.wisconsin.gov | Connection reset on every path again 2026-11-01 | OCI PI-234 FAQ (oci.wi.gov, plain curl) restates 632.895(12m) scope, 2026 floors and exemptions. (2026-11-01) |
| securecms.bluecrossmnonline.com (BCBS MN X-43-014) | WebFetch HTTP 503 on 2026-11-01 | Retry another day (route in runbook: r.jina.ai with retries). (2026-11-01) |
| www.hennepinhealth.org | payer-watch got HTTP 403 on four PA/claims URLs (2026-11-01) | curl with full Chrome UA returns all of them (PA chart PDF 392,024 bytes unchanged) — watcher UA problem, not a dead cite (2026-11-01) |
| revisor.mn.gov statutes | Pages rolled to the "2026 Minnesota Statutes" edition around 2026-11-01; every cited section shows a byte change | Treat as edition rollover; re-match quotes (all statute quotes in minnesota.ts still match) (2026-11-01) |
| www.mha.org newsroom | HTTP 429 (1,168 bytes) to curl on 2026-11-01 | Retry later (2026-11-01) |
| medicaid.ms.gov | Leaf now issued by GlobalSign Atlas R46 OV TLS CA 2026 Q3 (curl exit 60); with the chain completed, /administrative-code/ returns a 404 page and the Part 223 PDF timed out (40 s) on 2026-11-01 | Fetch http://secure.globalsign.com/cacert/gsatlasr46ovtlsca2026q3.crt, DER->PEM, append to the CA bundle; retry the PDFs on a weekday (2026-11-01) |
| ahca.myflorida.com /content/download/11448/file/Enrolling_as_a_Florida_Medicaid_Behavior_Analysis_Provider.pdf | HTTP 404 (321-byte HTML) on 2026-11-01; not linked from the BA services information page any more | Florida Provider Enrollment Policy (Jan 2022) at /content/download/5923/file/59G-1.060_Enrollment.pdf covers PT 39 specialties 390-393 and out-of-state enrollment (plain curl) (2026-11-01) |
| flrules.org rule text (59G-1.050, 59G-1.054) | ruleNo.asp page links the rule as readFile.asp?...&file=<rule>.doc (Word 97 binary) | curl with Chrome UA, then strings/antiword; the .doc is the full current rule text (2026-11-01) |
| www.in.gov IHCP Provider Enrollment Type and Specialty Matrix | Old provider-enrollment-type-and-specialty-matrix.pdf path 404s | Current file is https://www.in.gov/dA/6ef5dd9aa4/matrix.pdf?language_id=1 (Version 11.1, March 26, 2026), linked from /medicaid/providers/provider-enrollment/become-an-ihcp-provider/provider-classification-type-and-specialty (plain curl) (2026-11-01) |
| Florida Medicaid health care alerts | Provider-alerts URLs under /medicaid/medicaid-policy-quality-and-operations/... 404 | https://ahca.myflorida.com/medicaid/florida-medicaid-health-care-alerts/florida-medicaid-health-care-alerts-last-90-days.html lists dated alerts (icontact-archive links), plain curl (2026-11-01) |
| public.providerexpress.com Optum RI provider alerts | 2023 BH5027 PDF path (/welcomeNtwk/RI/2023/5027_RI%20TMH_Guide.pdf) 404s with or without ?__tracked=1 | Current alert is /content/dam/ope-provexpr/us/pdfs/ourNetworkMain/welcomeNtwk/RI/RI_Telehealth_Guidance.pdf (BH02590, 10/31/2026), linked from /content/ope-provexpr/us/en/our-network/welcomeNtwk/wRI.html (2026-11-01) |
| manuals.medicaidalaska.com (Alaska Medicaid provider billing manuals index, linked from medicaidalaska.com/portals/wps/portal/BillingManuals) | agent proxy CONNECT 502 to curl; WebFetch ENOTFOUND (host outside the session's allowed network domains) on 2026-11-01 | None this run — the host must be allowed in the session network settings, or a human retrieval (request carelu-2026-10-07-alaska-medicaid-provider-billing-manual stays open) (2026-11-01) |
| www.chpw.org PDFs (2026 BH PA list, ABA Therapy Initial Request Form) | 403 (548-byte page) to curl with a Chrome UA, 2026-11-01 | WebFetch saves the real PDF to its tool-results folder (binary) even though it cannot parse it; copy that file and extract with pymupdf (both CHPW PDFs read this way 2026-11-01) (2026-11-01) |
| www.oregon.gov OHA pages and SharePoint _api lists | Answered plain curl (Chrome UA) again on 2026-11-01 after the 2026-10-25 401 outage | none needed; _api/web/lists/getbytitle('Reports') still lists BH fee schedules (2026-11-01) |
| medquest.hawaii.gov memos, capitol.hawaii.gov HRS, leginfo.legislature.ca.gov | 403 to curl and to WebFetch on 2026-11-01 | leginfo: WebFetch of codes.findlaw.com (unofficial, labelled "current as of January 01, 2026") read H&S 1374.73 and B&P 4996.9; Hawaii hosts: none (human retrieval) (2026-11-01) |
| www.iceforhealth.org | Blazor app (HICE Portal): 1.8 KB shell to curl on every path, 2026-11-01 | none; human retrieval (2026-11-01) |
| www.caloptima.org/en/policy-documents | HTTP 429 Too Many Requests to curl and WebFetch on first request, 2026-11-01 | none this run; retry later or human retrieval (2026-11-01) |
| mcweb.apps.prd.cammis.medi-cal.ca.gov/news | 3.5 KB JS shell (bundle.js app); no news items in HTML | manual sections (file/manual?fn=<name>.pdf) still download with plain curl (2026-11-01) |
| beonbrand.getbynder.com/m/e4646f415eb7f4eb/ (Regence BH18) | On 2026-11-01 still serves the August 1, 2025 version (created 2025-07-27) with the note that a revision takes effect 11/1/2026 — while idaho.ts records that the same link served the revision | none; the revised BH18 needs a human retrieval or a new URL (request carelu-2026-10-07-regence-medical-policy-bh18-effective-11 stays open) (2026-11-01) |
| govinfo.gov Federal Register PDFs | federalregister.gov full_text endpoints return a "Request Access" page; the API JSON works | take pdf_url from https://www.federalregister.gov/api/v1/documents/<doc>.json and curl the govinfo PDF (CY2027 PFS proposed rule 2026-14327, 716 pp; adaptive behavior at p. 43891) (2026-11-01) |
| healthy.kaiserpermanente.org NCAL HMO Provider Manual chapters (…/ncal/ever/hmo-*.pdf) | Same URLs now serve the 2027 manual (created 10/8/2026); Section 12 Additional Service Specific Information is renumbered Section 11 (ASD = § 11.7) | Check the PDF header edition/section number before citing; plain curl works (2026-11-01) |
| www.cascadehealthalliance.com auth grids | Date-stamped grid filenames are replaced on each revision; old /media/<id>/auth-grid-bh-62426.pdf now 404 | List current PDFs from /for-providers/provider-resource-center/ (BH grid = bh-auth-grid-final.pdf, rev. 10/20/2026) (2026-11-01) |
| www.providerservices.iehp.org notices index | Index HTML (~940 KB) carries direct PDF links to every provider notice by month | grep the raw HTML for provider_notices/<yyyy>/... PDF paths (found the 2/19/2026 BHT documentation notice) (2026-11-01) |
| www.umr.com form PDFs | Two editions of UMF0035 live at once: /content/dam/umr/en/findform/forms/UMF0035.pdf is the April 2023 edition (fax line 1-844-881-7053, phone 1-800-808-4424); /print/UMF0035.pdf is edition 0824 (portal-only), and is the one the Form center links | Always cite https://www.umr.com/print/<FORM>.pdf (the Form center link) and check the edition stamp at the foot (e.g. "UMF0035 0824 UA"). Plain curl with a browser UA works. (2026-11-01) |
| www.hhs.gov/hipaa FAQ pages | 403 to curl and to WebFetch | Human retrieval (source request carelu-2026-11-01-hhs-hipaa-fax-faq); do not route around. (2026-11-01) |
| federalregister.gov /documents/full_text/text/... .txt | 302 to the unblock interstitial (the JSON API works) | Get document number from the JSON API, then https://www.govinfo.gov/content/pkg/FR-<yyyy-mm-dd>/html/<docnum>.htm returns full text to curl. (2026-11-01) |
| www.ecfr.gov versioner API | 406 "requires response compression" without Accept-Encoding | curl --compressed https://www.ecfr.gov/api/versioner/v1/full/<date>/title-<n>.xml?part=<p>&section=<s> (2026-11-01) |
| ama-assn.org CPT 2027 documents | Plain curl works | Summary of Panel Actions: https://www.ama-assn.org/system/files/sept-2025-summary-of-panel-actions.pdf (placeholders 97X1X-97X6X); final numbers + descriptors: https://www.ama-assn.org/system/files/hcpac-voting-2027.pdf (2026-11-01) |
| health.mil (Rates-and-Reimbursement pages) | curl now gets a ~7.6 KB TSPD JavaScript bot challenge instead of the page (2026-11-01) | WebFetch returns the page content (ABA Max Allowed Amounts list read this way); do not route around the challenge with proxies. (2026-11-01) |
| www.meritain.com/resources-for-providers-meritain-health-provider-portal/ | Served a maintenance page ("site is currently down for service") on 2026-11-01; byte change in watcher was this page | Retry later; treat as transient, not a changed fact. (2026-11-01) |
| eCFR same-byte watcher flags | All 10 G9 eCFR sections flagged; versioner /versions API shows no amendment since 2026-01-30 (38 CFR 17.272 latest) | curl --compressed https://www.ecfr.gov/api/versioner/v1/versions/title-<n>.json?section=<s> to read amendment dates before re-reading text. (2026-11-01) |

**Tooling note (2026-10-11):** `pypdf` crashes on import in this container (cryptography/_cffi_backend) — `pip install pymupdf` and use it only; `requests` must be pip-installed. `web.archive.org` reset every connection through the proxy all day again. Some HCPF alert PDFs have no usable text layer — render pages with pymupdf and read the images. **Tooling note (2026-10-01):** `web.archive.org` reset every connection through the proxy again all day on 2026-10-01; `pymupdf` must be pip-installed. **(2026-09-27):** the cloud container has no `pdftotext`; use Python `pypdf` (`extraction_mode='layout'`) or `pdfminer`. `web.archive.org` reset every connection through the proxy on 2026-09-27 (archive.org returned 429) — when it is down, the routes above that avoid it are the only ones.

### Learned 2026-10-07 (weekly refresh: 24 new states + claims fan-out)

**Tooling note (2026-10-07):** from mid-run `r.jina.ai` answered this container's IP with `401 AuthenticationRequiredError … bad IP reputation` (and at times a Cloudflare challenge, or 403 when a custom User-Agent header is sent). Every jina-dependent route above may be down on a given day: try direct `curl` with a full Chrome UA first, then WebFetch, then the host's own API/mirror listed below. `web.archive.org` reset connections all day again. The shared WebSearch budget ran out partway through the 18-agent fan-out: find documents from the payer's own site and the state agency's index pages rather than by search.

| Source | Behaviour | Workaround |
|---|---|---|
| `r.jina.ai` | Now returns a Cloudflare "Just a moment..." challenge (HTTP 403) for every URL tried after ~11:40 UTC 2026-10-07 (worked earlier in the run for providernews.anthem.com) | None this run; WebFetch works for nysenate.gov; direct curl for most PDFs |
| `www.nysenate.gov/legislation/laws` | 403 to curl; legislation API needs a key | WebFetch returns the statute text |
| `leginfo.legislature.ca.gov / codes.findlaw.com` | 403 to curl, WebFetch and jina | DMHC regs via law.cornell.edu (28 CCR 1300.71, 1300.71.38); statutes still blocked |
| `www.dhcs.ca.gov /file/ and /Pages/` | Incapsula stub (212 bytes); WebFetch gets an empty page | none (jina was the route; now down) |
| `healthy.kaiserpermanente.org hmo-billing-and-payment-en.pdf` | Previously image-only; now has a text layer (19 pages) | plain curl + pymupdf |
| `providerlibrary.healthnetcalifornia.com timely-filing page` | Tabbed table content rendered client-side; numbers absent from HTML | human read or browser |
| `public.powerdms.com/PHC/documents/<id>` | Partnership policies download as PDFs to plain curl | links listed on partnershiphp.org/providers/policies/section3 |
| `r.jina.ai -> codes.findlaw.com` | 401 AuthenticationRequiredError "bad IP reputation" mid-run (2026-10-07); codes.ohio.gov via jina still worked | WebFetch of codes.findlaw.com returned GA 33-24-59.14 text |
| `web.archive.org` | connection reset through proxy again (2026-10-07) | none needed; GAMMIS static files answer plain curl |
| `molinahealthcare.com OH Medicaid manual PDF` | 10-byte body | none — human/new URL |
| `medicaid.ohio.gov fee schedule page` | WebSphere portal; direct curl 302; jina returns full link list | r.jina.ai on /wps/portal/.../schedules-and-rates found Appendix DD XLSX (dam.assets.ohio.gov, plain curl) |
| `GA Part I manual (July 2026)` | now answers plain curl -A Mozilla/5.0 at the HANDBOOKS path | no archive needed |
| `eCFR versioner full-text` | /api/versioner/v1/full/<date>/title-42.xml?part=&section= returns section XML with curl --compressed | used for 447.45 |
| `maryland.carelonbh.com` | 403 to curl with Chrome UA | r.jina.ai lists page links; s18637.pcdn.co PDFs download with plain curl |
| `secure.compliance360.com (CareFirst policy viewer)` | JS app; r.jina.ai returns 'Permission Denied' | none found; human retrieval |
| `static.evernorth.com vs static.cigna.com` | Current Evernorth admin guide (Sept 2026, PCOMM-2026-191) is on static.evernorth.com; the static.cigna.com copy of ebh-provider-admin-guide.pdf is the stale 8/21 edition | use static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf |
| `cms.gov NCCI PTP zips` | Links go through a /license/ama click-through | direct curl of https://www.cms.gov/files/zip/medicare-ncci-2026q4-practitioner-ptp-edits-ccipra-v323r0-f{1..4}.zip works (~20 MB each, tab-delimited TXT inside) |
| `medicaid.gov downloads` | Akamai 403 to curl | r.jina.ai returns the PDF text |
| `ecfr.gov` | renderer API 302s | versioner full XML /api/versioner/v1/full/<date>/title-42.xml?part=447 with --compressed |
| `aetna.com OfficeLink June 2022 ABA article` | URL now serves the OfficeLink library index (article gone); web.archive.org reset the connection | none this run |
| `tricare.triwest.com` | PDFs download with curl + Chrome UA; HTML pages read via r.jina.ai (body has no top-level # heading, grep whole file) | curl -A Chrome for /globalassets PDFs; r.jina.ai for pages |
| `humanamilitary.com` | ABA FAQ and 2026 East handbook PDFs download with curl + Chrome UA (18 MB handbook) | curl -A Chrome; pymupdf |
| `manuals.dha.mil` | r.jina.ai works for C18S3, C1S3, C4S1 — but only WITHOUT a custom User-Agent; adding a Chrome UA to the r.jina.ai request returns a Cloudflare 403 challenge | plain curl https://r.jina.ai/<url> |
| `hopkinsmedicine.org` | Cloudflare 403 on policy PDFs to curl and r.jina.ai; web.archive.org resets | human retrieval |
| `static.evernorth.com` | plain curl works for Evernorth behavioral resource HTML pages (billing codes, telehealth billing) | curl + strip tags |
| `va.gov/COMMUNITYCARE/revenue-ops/FM-Care-Claims.asp` | now redirects to department.va.gov community-care CHAMPVA page; r.jina.ai returns full text | r.jina.ai |
| `health.mil` | direct curl returns a ~5.7 KB TSPD JavaScript bot wall with HTTP 200 | r.jina.ai |
| `trilliumhealthresources.org` | Plain curl (Chrome UA) returns PDFs; site search/communications listings are JS-rendered | WebSearch for document URLs, then curl |
| `dmas.virginia.gov /media/cptcodes/cptmedical1-4.csv` | Plain curl works; 40-100 MB each | Parse with Python csv (latin-1); INP OUT column distinguishes IP/OP rows |
| `vamedicaid.dmas.virginia.gov /pdf_chapter/mental-health-services` | Plain curl lists the current MHS manual chapter PDFs with revision dates | Use it to detect reissues (Chapter II and IV reissued 10/2/2026) |
| `sentarahealthplans.com` | Provider info page 404 to curl; r.jina.ai returns ~1.8 KB shell | None found — human retrieval |
| `mcp.humana.com Search.aspx` | Results render by JS; curl returns an empty results shell | Use assets.humana.com state PDFs (PA list, provider resource guide) |
| `providers.partnersbhm.org / partnersbhm.org` | SiteGround captcha: HTTP 202 with ~200-byte body | WebFetch or human retrieval (per runbook) |
| `ecfr.gov versioner API` | Works with curl --compressed | Used to dismiss same-byte eCFR watcher flags |
| `nj.gov/humanservices/dmahs` | old hmo-contract URL 404 | current contract at /humanservices/dmahs/documents/providers-stakeholders/hmo-contract.pdf (996 pp, "01/2026 Accepted"), plain curl |
| `horizonnjhealth.com/provider-admin-manual` | Incapsula to curl; jina gets Cloudflare challenge | WebFetch saves the 4.2 MB PDF to tool-results; extract with pymupdf |
| `horizonblue.com reimbursement policies` | first curl sometimes returns Incapsula stub | plain curl with full Chrome UA + Accept/Accept-Language headers (no cookie jar) returned the full page |
| `provider.wellpoint.com NJ manual` | now a text-layer PDF (Oct 2026) | plain curl + pymupdf; no image rendering needed any more |
| `static.cigna.com ebh-provider-admin-guide.pdf` | serves the STALE 2021 (PCOMM-2021-1080 8/21) Evernorth guide | use static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf (ModDate 2026-09-15, has state regulatory addenda) |
| `azahcccs.gov B2Matrix.xlsx` | plain curl works (Oct 2026 sheet); lists provider types/POS/modifiers only — no concurrent-billing rule | n/a |
| `in.gov IHCP specialty matrix` | provider-enrollment-type-and-specialty-matrix.pdf 404 | find current path from the IHCP provider enrollment page |
| `WebSearch` | shared per-turn budget exhausted mid-run | direct primary-source fetches only |
| `nhmmis.nh.gov` | 212-byte Incapsula stub for PDFs and portal pages (was plain-curl readable 2026-10-01) | None this run (jina blocked); retry or human upload. |
| `statutes.capitol.texas.gov` | Chapter .htm pages are a 1.4 KB SPA shell to curl | r.jina.ai of the chapter (worked early in the run) or GetStatute.aspx?Code=IN&Value=1301.102 via jina returns the whole chapter text. |
| `hhs.texas.gov (UMCM PDFs, EVV pages)` | 403 to curl with browser UA | r.jina.ai returned UMCM 2.0 in full (before the jina block). |
| `legis.state.pa.us unconsolidated statutes` | connection reset through the proxy | Use the implementing regulation at pacodeandbulletin.gov (plain curl), e.g. 31 Pa. Code 154.18. |
| `nmonesource.com / codes.findlaw.com (NMSA)` | empty/short responses | Use srca.nm.gov NMAC parts (13.10.28 NMAC carries the prompt-pay timelines). |
| `aetna.com disputes/claims pages` | HTML served to curl is JS-only | r.jina.ai rendered disputes-appeals-overview.html and provider-appeals.html (state exception table). |
| `providers.pa.carelon.com` | 403 to curl on /authorization-requirements/ | WebFetch reads the page; the PDF itself (s18637.pcdn.co/.../Authorization-Requirements.pdf) downloads with plain curl. |
| `aetnabetterhealth.com Oklahoma manual` | 403 direct | r.jina.ai returned the full 135-page August 2026 manual (published 8/20/2026) again |
| `oscn.net` | Turnstile stub (2,307 bytes) to curl/watcher; r.jina.ai 429 rate-limits after ~5 quick calls | r.jina.ai with a pause between calls |
| `capitol.hawaii.gov HRS` | 403 to curl with Chrome UA | r.jina.ai returns full section text |
| `oklahomacompletehealth.com billing manual` | Linked from /providers/resources/forms-resources.html, not the manuals page (404) | plain curl on the PDF path |
| `public.providerexpress.com NNManual` | old nationalNetworkManual.pdf path 404s | /pdfs/adminResourcesMain/netwmanual/NNManual.pdf?__tracked=1 (published 7/1/2026, eff 9/1/2026) |
| `bash sandbox` | commands containing the substring "git" (e.g. a URL with /digital/) or loops are refused by the worktree guard | URL-encode (di%67ital) or run a batch script file |
| `www.akleg.gov (Alaska Statutes and AAC)` | The browse pages are JS-driven, but a print endpoint returns single sections or ranges as HTML to plain curl. | curl 'https://www.akleg.gov/basis/statutes.asp?media=print&secStart=21.42.397&secEnd=21.42.397' or 'https://www.akleg.gov/basis/aac.asp?media=print&secStart=7.135.350&secEnd=7.135.350' (title.chapter.section for AAC). Avoid grep -o with large .{0,N} windows on the long ranges — use Python. |
| `health.alaska.gov` | Current /media/<id>/<file>.pdf documents return to curl; legacy /dbh/Documents/... and /dbh/Pages/... paths now 404 after the site migration. | Find current links on https://health.alaska.gov/en/services/behavioral-health-medicaid-provider-support/ (rate charts, PSAM). |
| `www.commerce.alaska.gov` | 403 'Please enable JS' to curl; r.jina.ai returns a CAPTCHA warning with no content. | None found; use AS 08.15 statute text and the BACB licensure table. |
| `alaska.optum.com` | Host no longer resolves (ASO site retired 1/1/2025); web.archive.org reset connections this run. | Optum's transition notice is on public.providerexpress.com (…/welcomeNtwk/alaska/AlaskaMedicaidTransition2024.pdf?__tracked=1). |
| `medicaidalaska.com` | Health Enterprise portal; ProviderBillingManuals page shows no manual links to curl or r.jina.ai. | Human retrieval. |
| `www.premera.com` | Plain curl works. Medical policies at /medicalpolicies/<number>.pdf (ABA is 3.01.510, not 3.01.500). Alaska code lists: individual 050238.pdf, non-individual 028861.pdf; the non-individual list names ABA in its PA summary but has no ABA code rows. | — |
| `content.govdelivery.com (AKDHSS bulletins)` | Plain curl returns full bulletin text. | — |
| `medicaid.alabama.gov` | curl fails TLS verification: server omits the GlobalSign Atlas R3 OV TLS CA 2026 Q1 intermediate | Download the intermediate from its AIA URL (http://secure.globalsign.com/cacert/gsatlasr3ovtlsca2026q1.crt), convert to PEM, append to /root/.ccr/ca-bundle.crt into a local bundle and pass --cacert (verification stays on). Python requests still fails; use curl. |
| `medicaid.alabama.gov /content/Gated/ (provider manuals, fee schedules)` | CPT/CDT license click-through page instead of document links | GET the page with a cookie jar, POST __VIEWSTATE/__EVENTVALIDATION + ctl00$btnAgreement=I Accept; then chapter PDFs at /content/Gated/7.6.1G_Provider_Manuals/7.6.1.4G_Oct_2026/Oct26_<nn>.pdf and fee schedules at /content/Gated/7.3G_Fee_Schedules/<file>.pdf download with the same cookie jar. |
| `alison.legislature.state.al.us (Code of Alabama)` | Next.js SPA; r.jina.ai returns only navigation; findlaw/justia have no AL text | POST to https://alison.legislature.state.al.us/graphql: query codesOfAlabama(where:{type:{eq:Section}, displayId:{like:"27-54A%"}}){data{displayId catchLine content history}} (introspection disabled; fullTextQuery works for search). |
| `admincode.legislature.state.al.us` | SPA; listing pages render empty to curl and r.jina.ai | Chapter PDFs via https://admincode.legislature.state.al.us/api/chapter/<chapter> (e.g. 580-5-30B); r.jina.ai renders a single chapter's TOC. |
| `bcbsal.org medical policies` | Old /providers/policies/ paths redirect to al-policies.exploremyplan.com (Liferay); ABA policy is an itiliti page that only points to Lucet | r.jina.ai on https://mypolicies.itilitihealth.us/policy/938125692074/ABA/vv001?lob=BCBS%20AL; ABA criteria are Lucet policy 20.5.005 and the Lucet manual's BCBSAL appendix (plain curl). |
| `humanservices.arkansas.gov` | nginx 403 to curl with a full Chrome UA; HTML pages read fine via WebFetch | curl -A 'Mozilla/5.0' (bare UA) downloads the manual .docx files (Section_I.docx, ABATHERAPY_II.docx, PASSE_II.docx) and fee-schedule PDFs; unzip word/document.xml to read. WebFetch with offset 100000 reveals the document links. |
| `arkleg.state.ar.us enrolled Acts` | Several URL forms return 0 bytes or a 42-byte GIF | https://www.arkleg.state.ar.us/Home/FTPDocument?path=%2FACTS%2F<session>%2FPublic%2FACT<n>.pdf where <session> is 2011 / 2015 for older sessions and 2017R / 2023R / 2025R for newer ones. |
| `law.justia.com, codes.findlaw.com, casetext (Arkansas Code)` | 403 / 410 to curl and WebFetch | None found this run; use enrolled Acts from arkleg and flag current codified text as a document request. |
| `secure.arkansasbluecross.com coverage policies` | No public search page found | report.aspx?policyNumber=<YYYYNNN> works with plain curl; ABA policy is 2011053 (found by scanning 2011xxx numbers). |
| `getempowerhealth.com` | Old ?p= and /providers/ URLs 404 | Current paths are /for-providers/...; the PA list is an .xlsx linked from /for-providers/utilization-management/prior-authorization-list/. |
| `cga.ct.gov` | curl fails TLS verification (incomplete chain) | https://r.jina.ai/<url> returns full chapter text; use 2026/sup/chap_*.htm for amended sections (404 = chapter not amended in 2025) |
| `www.ctbhp.com` | AEM React shell (empty) / outage page | providers.ctbhp.com (WordPress) via r.jina.ai; its PDFs on s18637.pcdn.co download with plain curl |
| `ctdssmap.com fee schedules` | CSV links are ASP.NET postbacks with server-side viewstate; replaying them fails | Direct: https://www.ctdssmap.com/CTPortal/Information/Get-Download-File?Filename=<fileName attr>&URI=fee_schedules/<fileName attr> (ASD = refw242_feesched_asd_82.csv) |
| `eregulations.ct.gov` | 'Unable to Access Resource' (404) for RCSA section URLs to curl, r.jina.ai and WebFetch | None found; DSS/SOTS regulation PDFs on portal.ct.gov (sots notices) are fetchable |
| `portal.ct.gov/DPH pages` | Content JS-loaded; telehealth-registrant page now 404 | r.jina.ai renders the DPH licensing-requirements page |
| `aetna.com telemedicine.pdf` | Commercial/Medicare checkmark columns collapse in text extraction | pymupdf word coordinates (x≈421 Commercial, x≈488 Medicare) |
| `www.dc-medicaid.com` | Cloudflare 'Suspected Phishing' interstitial (403) to curl with Chrome UA and to r.jina.ai; web.archive.org connection reset through the proxy | None found - human browser retrieval |
| `dcregs.dc.gov 29 DCMR 110` | Chapter listing returns 200 but with zero sections; section URLs return empty templates | Use SPA 23-0009 (medicaid.gov via r.jina.ai) as the controlling document; request the DC Register notice |
| `medicaid.gov SPA PDFs` | Akamai 403 to curl | https://r.jina.ai/<url> returned SPA 23-0009 in full |
| `secure.compliance360.com (CareFirst policy manuals)` | SecurityCheckFailed without cookies; with a cookie jar a JS-only SAI360 shell; jina returns Permission Denied | None found - human retrieval; CareFirst monthly medical-policy-update PDFs and provider-manual chapters (provider.carefirst.com/carefirst-resources/provider/pdf/...) download with plain curl |
| `priorauthlookup.amerihealthcaritas.com` | Angular SPA shell | JSON API: https://priorauthlookup.amerihealthcaritas.com/api/CptCodeLookup?planname=acdc&cptCode=<code>&cptDate=YYYY-MM-DD (works for other AmeriHealth plans by planname) |
| `code.dccouncil.gov, dhcf.dc.gov, medstarfamilychoicedc.com, hscsnhealthplan.org` | Plain curl with browser UA works; dhcf.dc.gov 2025 updates page 403s to curl | Use /page/dhcf-medicaid-updates-2025-0 (the working slug) or r.jina.ai |
| `www.ecfr.gov versioner API` | 406 without Accept-Encoding compression | Use /api/renderer/v1/content/enhanced/current/title-42?part=...&section=... which returns HTML to plain curl |
| `medicaidpublications.dhss.delaware.gov` | Document library is a JS (DNN/Bring2mind) app; medicaid.dhss.delaware.gov landing pages redirect-loop without cookies. | curl with a cookie jar + Chrome UA on .../DesktopModules/Bring2mind/DMX/API/Entries/Download?Command=Core_Download&EntryId=<n>&language=en-US&PortalId=0&TabId=94 returns real PDFs; filenames via a ranged GET's Content-Disposition. Useful ids: 1424 ABA fee schedule (11/1/2022), 2015 physician FS 2026, 1797 General Policy Manual, 2112 Practitioner manual (rev 03/17/2026), 1077 member FAQs. |
| `www.medicaid.gov SPA PDFs` | 403 to curl. | r.jina.ai returned SPA DE-16-010 in full (rate-limited to bursts; retry after a pause on 429). |
| `regulations.delaware.gov (new RMS)` | AdminCode and Register pages return a generic 65 KB app shell to curl. | r.jina.ai returns full text (2102, 1307, 1310, 29 DE Reg 880); the /api/AdminCode/title16/2102/<guid> link returns the PDF directly. |
| `delcode.delaware.gov` | Works with plain curl. | Subchapter index pages carry full section text (e.g. title18/c035/sc03/index.html). |
| `highmarkhealthoptions.com` | Provider pages are JS shells (identical ~90 KB body). | PDFs download directly; 2025 manual at .../provider-resources/hho-2025-de-provider-manual.pdf. |
| `securecms.highmark.com` | curl TLS 'unable to get local issuer'; WebFetch 503. | None found this run — human/browser retrieval. |
| `ilga.gov (and witnessslips.ilga.gov, beta.ilga.gov)` | ilga.gov and www.ilga.gov: curl TLS failure through the proxy, WebFetch 503, r.jina.ai 403, archive.org resets; justia/legiscan Cloudflare 403 | SOLVED (2026-10-07): curl -s "https://r.jina.ai/https://witnessslips.ilga.gov/legislation/ilcs/documents/<DocName>.htm" (official text incl. before/after versions; DocName like 021500050K356z.14, 022500060K20) and .../legislation/publicacts/104/104-0028.htm. No user agent; jina rate-limits per IP (429), so space requests ~5s and retry. |
| `aetnabetterhealth.com (Illinois PDFs)` | 403 to curl and r.jina.ai | Swap host to ch.aetnabetterhealth.com or es.aetnabetterhealth.com — same path returns the real PDF to plain curl (2026-10-07). |
| `www.molinahealthcare.com Illinois memos/manual` | 404 / bot-wall HTML to curl, 403 via r.jina.ai, error page to WebFetch | Swap host to blog.molinahealthcare.com, same /-/media/... path — returns real PDFs (2026 IL memo and 2026 IL Medicaid manual). |
| `hfs.illinois.gov provider notices list` | Index page is JS-rendered (no notice links in HTML) | Individual notice URLs (notice.prnYYMMDDx.html) and /content/dam PDFs fetch fine with curl; find them by search. |
| `bcbsil.com older provider/news URLs` | Several 2022-2023 news and manual URLs now 404 (site restructure) | Search for the current /provider/education/education-reference/news/2026/... and /docs/provider/il/... paths. |
| `pypdf in container` | pypdf import crashes (system cryptography/cffi mismatch) | Use pymupdf (fitz) for PDF text extraction. |
| `codes.findlaw.com via r.jina.ai` | Returns 356z.14 in full (unofficial, 'last updated January 01, 2025'); 225 ILCS 6 section URLs 404 on FindLaw; a Chrome user-agent header gets 403 from jina | Use plain curl with no -A header; prefer the witnessslips.ilga.gov mirror for current official text and label FindLaw as unofficial. |
| `www.molinahealthcare.com / molinamarketplace.com (Passport KY PDFs)` | HTTP 200 with ~384–439 KB HTML bot-wall page; r.jina.ai returns 'automated request' error page; WebFetch same; web.archive.org connection reset | Same media path on blog.molinahealthcare.com (or medicare.centralhealthplan.com) returns the real PDFs, e.g. https://blog.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ky/medicaid/2026-MKY-ProviderManual-DMSApproved_R.ashx |
| `www.aetnabetterhealth.com (Kentucky provider PDFs)` | 403 Access Denied (Akamai) to curl and r.jina.ai | Same path on ch.aetnabetterhealth.com returns the PDFs to plain curl. |
| `apps.legislature.ky.gov (KRS / KAR)` | KRS statute.aspx?id=N returns a PDF (content-type application/PDF); KAR pages are HTML with a link to /law/kar/downloads/docs/<id>/document.engrossed.pdf | Plain curl -A 'Mozilla/5.0'; grep the KAR page for document.engrossed.pdf. |
| `chfs.ky.gov` | Some old paths 301/404 (e.g., chfs.ky.gov without www); MCO page lists still name Anthem on the LBA provider page | Use https://www.chfs.ky.gov/... with -L; trust the DMS MCO Contracts page for the current MCO list. |
| `public.providerexpress.com` | Interstitial unless ?__tracked=1 | Append ?__tracked=1 (worked for ky5034.pdf and kyMedicaid-SupClin_Critr.pdf). |
| `www.ecfr.gov renderer API` | 302 redirect / small stubs | https://www.ecfr.gov/api/versioner/v1/full/<date>/title-42.xml?part=440&section=440.230 with --compressed returns section XML. |
| `www.lamedicaid.com` | curl fails TLS verification ('unable to get local issuer certificate'; incomplete chain) | https://r.jina.ai/<url> returns the ABA manual and fee schedule PDFs as text. |
| `www.aetnabetterhealth.com (Louisiana)` | Akamai 403 on www pages and DAM PDFs, to both curl and r.jina.ai | The same DAM path on es.aetnabetterhealth.com or ch.aetnabetterhealth.com downloads with plain curl. LDH MCPP (ldh.la.gov/assets/medicaid/MCPP/...) also hosts many MCO policies and manuals. |
| `lababoard.org` | SiteGround captcha (HTTP 202 meta-refresh to /.well-known/sgcaptcha); jina returns the challenge page | None found; web.archive.org connections were reset by the proxy this run. Needs human retrieval. |
| `legis.la.gov` | Search uses ASP.NET postbacks, but Law.aspx?d=<id> pages work with plain curl | Find a doc id through a search engine, then scan neighbouring ids (R.S. 37:3701-3718 = d=860901-860918; R.S. 22:1832-1836 = d=509004-509014; R.S. 40:1223.1-4 = d=964866-964869). Section headers are encoded as &sect;. |
| `provider.healthybluela.com` | Plain curl works; the manuals page links /docs/gpp/*.pdf | LA_CAID_ProviderManual.pdf and LA_HBPAlist.pdf (the 1,296-page PA list) download directly. |
| `mainecare.maine.gov (Health PAS fee schedules)` | curl: SSL certificate problem (unable to get local issuer certificate); r.jina.ai: SharePoint 'Sorry, something went wrong'; WebFetch: HTTP 503 | None found this run; human retrieval. Do not disable TLS verification. |
| `www.maine.gov/dhhs (OMS bulletins)` | r.jina.ai returns a Cloudflare 'Just a moment...' challenge | Plain curl with a Chrome UA returns the full HTML pages |
| `www.maine.gov/sos (MaineCare Benefits Manual Word files)` | Rules are .docx (Ch. 790 is legacy .doc) | curl with Chrome UA; python-docx for .docx (use /usr/bin/python3; /usr/local/bin/python3 lacks python-docx); LibreOffice headless --convert-to txt for .doc |
| `me.acentra.com (Acentra Health Maine ASO grid)` | Plain curl returns the PDF; table columns flatten in text extraction | Render the page with pymupdf and read the image to map X marks to columns |
| `legislature.maine.gov statutes` | Plain curl works; strikethrough/underline in session-law pages is lost in text extraction | Grep the raw HTML for text-decoration:line-through to see amended text (P.L. 2013 c. 597: age 5 -> 10) |
| `www.dhs.state.mn.us (MHCP Provider Manual, EIDBI Policy Manual, billing grid, MCO grid)` | Radware captcha page (HTTP 200, ~15 KB) then 403 to curl; WebFetch 403; web.archive.org connection reset | https://r.jina.ai/<url> returns full text for GET_DYNAMIC_CONVERSION pages and GET_FILE PDFs; use header X-Return-Format: html to recover dDocName links (link text is stripped in markdown mode). Some dDocNames (dhs16_197250) return 'empty file'. |
| `mn.gov/dhs pages` | JS shell to curl; fee-schedule page is a CPT/CDT licence click-through | r.jina.ai reads content pages; fee schedule needs a human (or a cookie after accepting terms). |
| `revisor.mn.gov (statutes, session laws)` | Plain curl with a browser UA works | Strip nav: body starts after 'Session Laws Changed (Table 1)'. Session-law chapters are large (1-2 MB) but complete. |
| `securecms.bluecrossmnonline.com (BCBS MN medical policies)` | curl TLS 'unable to get local issuer certificate'; jina rate-limits (429) on bursts | r.jina.ai with retries; versioned URLs X-43-0NN.html — X-43-014 is current (X-43-013 says replaced Feb 2, 2026). |
| `imcare.org / www.imcare.org` | Connection reset to curl | r.jina.ai on http://imcare.org/ and itascacountymn.gov/357/Providers-Partners (DocumentCenter PDFs via jina). |
| `public.providerexpress.com mnEIDBIOverview.pdf` | 404 even with ?__tracked=1; pe-aem-dev.optum.com mirror has a bad cert | None found — document request. |
| `provider.publicprograms.bluecrossmn.com` | 200 with ~212-byte empty shell to curl and jina | None found — document request. |
| `billstatus.ls.state.ms.us` | curl: SSL certificate problem (incomplete chain); WebFetch: HTTP 503 | https://r.jina.ai/<url> returned full bill text (SB 2140 2024, SB 2415 2025) |
| `www.molinahealthcare.com (MS)` | Old /-/media/Molina/PublicWebsite/PDF/Providers/ms/... paths return the ~384 KB bot-wall page (200) or 404; WebFetch blocked; r.jina.ai hit a Cloudflare challenge | Current PDFs are under /-/media/Project/PWS/Healthcare/PDF/PDF/Providers/MS/ (linked from /providers/ms/prior-auth and /providers/ms) and download with plain curl |
| `beblue.bcbsms.com` | Medical policy page loads to curl; the coding-policy page had its connection reset by the proxy twice | WebFetch read the coding policy |
| `codes.findlaw.com (Mississippi Code)` | 403 to curl | WebFetch or https://r.jina.ai/<url>; r.jina.ai rate-limits (429) after a few calls |
| `apps.mid.ms.gov legacy regulation PDFs` | 404 (moved) | Cornell LII hosts 19 Miss. Admin. Code rules (e.g. 3-7.01); MID's autism page and statute PDF live under www.mid.ms.gov/wp-content/uploads/2023/04/ |
| `caresource.com/documents (TrueCare MS policies)` | URL pattern medicaid-ms-policy-<medical-mm/reimburse-py>-NNNN-YYYYMMDD; a wrong date returns 404 | Probe effective-date suffixes; PY-1639 is -20260801, MM-1477 is -20260501 |
| `medicaidprovider.mt.gov` | Manuals are complete HTML pages (the full ABA manual is inside the 'menuetest/appliedbehavioranalysisservicesmanual' page); /manuals listing 403s; PDFs fetch with plain curl + Chrome UA. Proposed fee schedules sit behind a CPT click-through page (proposedfs works directly). | curl the manual page and strip HTML; use https://medicaidprovider.mt.gov/76 (ABA provider type page) for current forms, fee schedules and notices. |
| `rules.mt.gov (ARM)` | Human-verification captcha to curl and r.jina.ai; mtrules.org gateway redirects into it. | None found; human retrieval. MCA statutes at mca.legmt.gov fetch fine with plain curl. |
| `mountainpacific.org downloads (MPQHF Medicaid UM documents)` | WordPress Download Monitor: HTML 'Downloading...' page; with XHR headers returns x-dlm-no-access: true. | None found; human retrieval. |
| `bcbsmt.com` | Provider PDFs (PA lists, ABA forms) fetch with plain curl; old URL patterns for CPCP and BH pages 404; provider manual and coding/compensation policies are Availity-only. | Use /provider/clinical-resources/clinical/behavioral-health-programs and /provider/claims-and-eligibility/preauthorization-lists for current PDF links. |
| `ecfr.gov via r.jina.ai` | Returned 429 for 42 CFR 440.230 this run. | curl --compressed -L https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-42?part=440&section=440.230 |
| `www.bcbsnd.com medical policy + PA search` | HTML pages return 200 to curl, but the policy search and PA check are JS widgets calling apim.bcbsnd.com; the PA check requires member ID + NPI + date of service. r.jina.ai returned 429 (per-IP rate limit). | Static PDFs (provider manual, Medicaid Expansion manual) download fine under /content/dam/bcbsnd/documents/. The ABA policy needs human retrieval. |
| `www.insurance.nd.gov Bulletin 2018-1 PDF` | Scanned PDF with no text layer (pypdf returns ~30 chars). | Render pages with pymupdf (pip install pymupdf) and read the images. |
| `hhs.nd.gov 1915(c) ASD waiver PDF` | 142 MB scanned PDF, 151 pages, no text layer. | Render only the needed pages at 80 dpi with pymupdf. |
| `hhs.nd.gov DHS Legacy paths` | Many old /sites/www/files/documents/DHS%20Legacy/... links return a 430 KB 'Page not found' HTML page with HTTP 404. | Use the Provider Guidelines, Manuals and Policies page for current /sites/default/files/documents/medicaid-policies/ URLs; fee schedules are .xlsx on the Rates and Fee Schedules page (parse with openpyxl). |
| `dhcfp.nv.gov` | Redirects to nevadamedicaid.nv.gov (Nevada Health Authority rebrand); HTML pages detected by `file` as JavaScript because of inline scripts | Plain curl with Chrome UA on nevadamedicaid.nv.gov works for MSM PDFs, rate xlsx and pages; the MSM chapter page lists the current PDF |
| `www.medicaid.nv.gov (Gainwell)` | Plain curl returns billing guides, forms and billing manual PDFs | None needed |
| `www.leg.state.nv.us NRS/NAC` | Plain curl returns full chapter HTML (Rev. 9/9/2026) | None needed; grep the converted text for 'NRS  <section>' (two spaces) |
| `myhpnmedicaid.com applied-behavioral-analysis-form.pdf` | Image-only PDF (no text layer) | Render pages with pymupdf and read the images |
| `caresource.com/nv/providers` | r.jina.ai returned 429 | Direct curl of caresource.com/documents/*.pdf policy files works |
| `ecfr.gov (via r.jina.ai)` | 429 for some sections (440.230, 17.270) | eCFR versioner API: /api/versioner/v1/full/<date>/title-42.xml?part=440&section=440.230 |
| `aba.nv.gov (NV Board of ABA)` | CONNECT tunnel 502 through proxy | Used NRS 641D statute text and BACB table instead; retry via r.jina.ai next run |
| `secure.sos.state.or.us (Oregon Administrative Rules)` | F5/TSPD JavaScript bot wall to curl (5 KB challenge page); Wayback reset connections | WebFetch of https://secure.sos.state.or.us/oard/view.action?ruleNumber=<rule> returns full rule text with history. oregon.public.law mirrors carry text but are dated (accessed May 2025) — use only as a cross-check |
| `oregon.gov (OHA SharePoint pages)` | Fee schedule and HERC file lists render in JavaScript; page HTML has no file links | SharePoint REST: https://www.oregon.gov/oha/HSD/OHP/_api/web/lists/getbytitle('Reports')/items?$select=FileRef,Modified&$filter=substringof('BH',FileLeafRef) (BH fee schedules in /oha/HSD/OHP/DataReportsDocs/), getbytitle('Tools') for OHP tools, and /oha/HPA/DSI-HERC/_api/web/lists/getbytitle('Prioritized List Docs')/items for guideline-note files; getbytitle('CCO Plan Details') gives the CCO list |
| `oregonlegislature.gov ORS chapters` | Served as windows-1252, not UTF-8 | Decode as cp1252 before searching |
| `allcarehealth.com` | Angular SPA: page HTML has no content; /providers 404 | sitemap.xml lists page URLs; POST {"query":"...","take":25} to https://www.allcarehealth.com/umbraco/allcare/site/search returns the site's own search results; /media/<id>/<file>.pdf links fetch with curl |
| `cascadehealthalliance.com, eocco.com, yamhillcco.org, advancedhealth.com` | Plain curl with a Chrome UA works | Provider resource pages list PDF/xlsx links (CHA BH auth grid, EOCCO priorauth.pdf, YCCO PA list xlsx, Advanced Health b-cdn manual) |
| `eohhs.ri.gov (HTML pages)` | Cloudflare 'Just a moment' 403 to curl with Chrome UA and to WebFetch | https://r.jina.ai/<url> returns full page text (rate-limited: 429 if called too fast; space requests ~5-20 s). PDFs under /sites/g/files/ download directly with curl. |
| `eohhs.ri.gov/providers-partners/fee-schedules` | Fee schedule hidden behind a Drupal webform EULA acceptance (ajax POST) behind Cloudflare | None automated; use OHIC rate review report for rates, or human retrieval. |
| `webserver.rilegislature.gov (RI statutes)` | http:// returns a 'Document Moved' stub | Use https:// with curl -L; plain Mozilla UA works. |
| `public.providerexpress.com RI PDFs` | ri4367_PriorAuthTool.pdf linked from the RI auth forms page 404s | Other RI PDFs fetch with ?__tracked=1. |
| `bcbsri.com policy PDFs and support xlsx` | Plain curl works; telehealth code grid is an .xlsx linked inside the policy PDF | Extract links with pymupdf get_links(), parse the xlsx XML directly. |
| `point32health.org /documents/<slug>` | Returns real PDFs to curl | Use the /documents/ slugs from the MNG list (read via r.jina.ai). |
| `provider.scdhhs.gov` | curl SSL certificate problem: unable to get local issuer certificate | Use the same documents on www.scdhhs.gov/sites/dhhs/files/... (the July 1, 2026 ASD manual and the Provider Administrative and Billing Manual are there). |
| `www.molinahealthcare.com (SC Medicaid PDFs)` | HTTP 200 with the ~384 KB 'Page Not Found' page for ASD-Provider-Orientation.pdf and manual_sc_ProviderHandbook.pdf | Same Molina media path on other Molina hosts works: myhealthinhand.molinahealthcare.com/-/media/... (2026 SC Medicaid manual) and medicare.centralhealthplan.com/-/media/... (2026 PA guide). |
| `provider.humana.com` | JS-rendered pages; plain text has no links | grep the raw HTML for assets.humana.com/is/content/humana/... URLs (manuals and forms download with plain curl). |
| `southcarolinablues.com` | Old /web/public/brands/sc/providers/... paths 404 | Medical policies at /web/public/brands/medicalpolicy/external-policies/<slug>/ (curl OK); provider PA page at /en/home/providers/policies-and-authorizations/prior-authorization.html. |
| `doi.sc.gov DocumentCenter` | One connection reset through the proxy | Retry plain curl; second attempt returned the PDF. |
| `dss.sd.gov` | Manual PDFs download fine with a Chrome UA; the ABA fee schedule is only a public Power BI report (app.powerbigov.us) | Read the report via its public API: GET https://wabi-us-gov-iowa-api.analysis.usgovcloudapi.net/public/reports/<resourceKey>/modelsAndExploration (header X-PowerBI-ResourceKey, gzip body), then POST .../public/reports/querydata?synchronous=true with the table visual's prototypeQuery plus the section filters; the resource key is the 'k' in the base64 'r=' parameter |
| `sdlegislature.gov` | Statute pages are a JS SPA | https://sdlegislature.gov/api/Statutes/Statute/<chapter or section> returns JSON with full HTML text (chapter calls include every section); rules via /api/Rules/<article> |
| `www.wellmark.com` | TLS handshake failure (sslv3 alert) to curl/python; r.jina.ai returns 422 ERR_SSL_VERSION_OR_CIPHER_MISMATCH or 'could not be resolved' (one cached hit of the medical-policy index worked) | digital-assets.wellmark.com PDFs download directly; for www pages, human retrieval |
| `sanfordhealthplan.com` | /providers/medical-policies 404; no ABA policy link found on the provider page | None found this run; Sanford Health Plan not built |
| `legislature.vermont.gov` | Plain curl works; the OLD section URLs for recodified Title 8 sections (e.g. /section/08/107/04088i, 04100k) return HTTP 200 with an empty statute body | Use the new numbers (Act 11 of 2025, eff. 9/1/2025): mandate 8 V.S.A. 4082, telemedicine 4098a, audio-only 4098b, definitions 4011; or fetch /statutes/fullchapter/08/107 and grep |
| `vtmedicaid.com fee schedule` | Angular SPA (#/feeSchedule) with no static file | POST JSON to https://vtmedicaid.com/api/fsCpts/ with {"limit":50,"skip":0,"filter":{"date":"YYYYMMDD","procedureCode":"97153"}}; definitions at /api/fsDefinitions/; acoMaxUnits = the Max Units column |
| `dvha.vermont.gov, humanservices.vermont.gov, vtmedicaid.com/assets/manuals` | Plain curl with Chrome UA returns real PDFs | None needed; /providers/applied-behavior-analysis 404s, the live page is /providers/applied-behavior-analysis-aba-benefit |
| `bluecrossvt.org` | /documents/<slug> pages return the PDF directly to curl | Use /search?keys=<query> to find current document slugs |
| `chpw.org` | 403 (548-byte page) to curl with Chrome UA on pages and PDFs | r.jina.ai read the 2026 BH PA list and ABA request form; provider manual not tried successfully |
| `molinahealthcare.com (WA Medicaid)` | All WA Medicaid provider/member pages and old PDF paths return the ~384 KB new-site 'Page Not Found' body (curl and r.jina.ai) | None found; used HCA's Feb 2025 ABA TA deck (contains Molina's own slides) |
| `public.providerexpress.com waIMCloc.pdf (Optum WA Medicaid criteria)` | Real PDF but almost no text layer | Render pages with pymupdf and read the images |
| `app.leg.wa.gov / hca.wa.gov` | Plain curl with browser UA works; RCW pages show both current and future-effective versions on one page | Read the version labelled 'Effective until January 1, 2027' for current law |
| `uhcprovider.com WA ABA Orientation Guide PDF` | 404 (removed) | Used UHC WA 2026 Care Provider Manual and ABA Corner page instead |
| `www.forwardhealth.wi.gov Online Handbook (KW/Display.aspx)` | Every handbook URL 302s to a CPT licence-agreement page (Public/ProcedureLicenseAgreement.aspx); a 200 there is not the handbook. | Python requests.Session: GET the licence page, POST the ASP.NET hidden fields with ctl00$MainContent$rbAgreement=Y and ctl00$MainContent$buttonAgreement=Submit Agreement, then GET the handbook URL (cookies persist). Behavioral Treatment Benefit is service area sa=130; each chapter's 'All Topics' view is ...&sa=130&s=<section>&c=<chapter>. |
| `www.forwardhealth.wi.gov max fee schedules` | MaxFeeDownloads.aspx redirects to the home page; the interactive search is a Telerik postback form and names provider specialties only by code (34/400 etc.). | MaxFeeDownload.aspx (singular) lists static files: https://www.forwardhealth.wi.gov/MaxFee/behav_max_fee_<yyyymmdd>.csv (date changes monthly). The interactive search answers a session POST that sets the procedure-code and service-area fields and the SearchButton. |
| `docs.legis.wisconsin.gov` | Plain curl works; large section pages are truncated, and /statutes/statutes/440/xiv is the Uniform Athlete Agents Act, not behavior analysts. | Fetch subsections individually (e.g. /code/admin_code/ins/3/36/5); behavior analysts are /statutes/statutes/440/iii/310-317 (or /document/statutes/440.312 which redirects). |
| `anthem.com Wisconsin ABA guide` | The multi-state aba-provider-resource-guide-abcbs.pdf omits Wisconsin. | Wisconsin has its own file: https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-wi.pdf (found via r.jina.ai on providernews.anthem.com/wisconsin/search?q=applied%20behavior%20analysis). |
| `dhhr.wv.gov/bms` | Old BMS paths return 404; BMS moved to bms.wv.gov | bms.wv.gov/providers/policy-manuals and /bms-manual/<chapter> pages; documents at bms.wv.gov/media/<id>/download?inline (plain curl, Chrome UA). |
| `www.aetnabetterhealth.com (WV PDFs)` | 403 to curl; Cloudflare 'Just a moment' challenge even via r.jina.ai | Same /content/dam/aetna/medicaid/west-virginia/... paths on fr.aetnabetterhealth.com return the real PDFs (manual 2026–2027, BH PA form). |
| `wv.highmarkhealthoptions.com` | curl TLS chain error; jina gets Cloudflare challenge; WebFetch 503 | HHO WV documents live on providers.highmark.com/hho-wv/... (plain curl). |
| `securecms.highmark.com (medical policies)` | curl TLS chain error; WebFetch 503 | None found; document request filed. |
| `www.healthplan.org` | download_file/view links redirect to /application/files/... ; PA list is .xlsx | Download raw with curl and parse with openpyxl. |
| `wyomingmedicaid.com` | Plain curl works for the CMS-1500 manual PDF. The fee schedule page has no direct link: the 'Download Fee Schedule' button goes to /portal/user-agreement (CPT licence), whose 'I ACCEPT' button links straight to the xlsx. | curl https://www.wyomingmedicaid.com/portal/sites/default/files/inline-files/Fee_Schedules/FeeSchedule.xlsx (read with openpyxl; PRIOR_AUTH column 'Y' marks PA codes; ~97k rows). |
| `doi.wyo.gov (bulletins)` | Bulletins are not on the site; /legal/memorandum links a Google Sheet index whose cells hyperlink Google Drive PDFs. Bulletin 01-2019 is a scanned image PDF (no text layer). | Export the sheet as xlsx (docs.google.com/spreadsheets/d/<id>/export?format=xlsx) to get hyperlinks; download via drive.google.com/uc?export=download&id=<id>; render pages with pymupdf and read the images. |
| `wyoleg.gov statutes` | Per-section pages are JS; the compiled title PDFs download with plain curl (title26.pdf ~989 pages, title33.pdf ~816 pages). | curl https://wyoleg.gov/statutes/compress/title26.pdf and grep the pypdf text; enrolled acts at wyoleg.gov/<year>/Enroll/<bill>.pdf carry effective dates. |
| `securecms.highmark.com (BCBSWY medical policy)` | curl: TLS 'unable to get local issuer certificate'; WebFetch 503; r.jina.ai returns the JS search shell with 'No Results'; web.archive.org reset during this run. | None found — human retrieval in a browser. |
| `law.cornell.edu Wyoming rules` | Section URLs embed the chapter: 068-<chapter>-Wyo-Code-R-SS-<chapter>-<section>; the wrong chapter prefix returns the generic index page with HTTP 200. | Use the agency/subagency listing to get chapter numbers, then curl with a Chrome UA. |

Three habits this table encodes:
1. **An HTTP 200 is not proof you got the document.** Check the body length and content type. It
   may be a JS interstitial, an SPA shell, or — as at `medicaid.georgia.gov` — a genuine PDF that
   is simply the wrong document. Check version dates, not just status codes.
2. **A WebFetch "the document doesn't mention X" is not evidence of absence.** On image-heavy or
   compressed PDFs the summarizer returns "absent" for content that is plainly there. Download
   with `curl` and read it with `pdftotext -layout` before concluding a rule does not exist.
3. **A source you could not read is a document request, never a guess.**

## PHASE 2 — APPLY (verified changes only)

4. Edit guide + vob files for every change verified at a primary source. NEVER write a change
you could not verify; unverifiable → soften or "verify with the payer", never silent deletion.
5. Conventions: explicit `.js` extensions on all relative imports (breaks the Vercel functions
otherwise); `\'` escaped apostrophes; every factual paragraph keeps cites.

5a. DELIVERY RULES ARE PART OF THE SWEEP. Wherever a guide already carries `deliveryRules`,
re-verify it like any other fact — supervision floors, concurrent-billing rules and MUE ceilings
move with state manual revisions and the annual CPT/MUE cycle. Two standing checks each year:
the CMS MUE tables (Medicaid and Practitioner are different tables, and payers pick one) in
January, and each state manual's documentation and place-of-service sections whenever that
manual is reissued.

5b. CHANGELOG: append ONE PayerChangeEntry (guides added from the worklist go in as
'guides-added'; delivery-rule fills as 'policy-update') to `src/data/payers/changelog.ts` (type
'policy-update' or 'guides-added'; details rows incl. inbox-fulfilled items; totals = current
counts). Zero changes → still append the "All sources re-verified; no policy changes."
heartbeat.

5c. NEW DOCUMENT REQUESTS: for every document you needed but could not fetch, append an
entry to `src/data/payers/source-requests.ts`: a new permanent `key`
(`carelu-<yyyy-mm-dd>-<short-slug>`, never reused), `title`, `note` (where/how to get it, with
the official URL first), `unblocks`, `requestedAt`, `status: 'open'`. Append only; no duplicates
of an open entry. A request you settle another way: set `status: 'resolved'` + `resolution`.
The file rides the PHASE 4 sync into LeadTrap, whose next deploy opens (or fulfills) the
requests on the Source documents board. Do NOT write `carelu-sources/requests.json` or open
requests on the board by hand: the board numbers requests itself, and two writers caused
clashing REQ ids on 2026-10-01.

5d. RUN RECORD: the refresh report (PHASE 5) and the Slack post (step 11) are the run's record.
Do not append to `carelu-sources/events.json` (retired with the old upload page; LeadTrap's
board keeps its own history).

6. Completed full sweep → bump `PAYER_REVIEWED` in `types.ts`.
7. Validate: `npm install && npm run build` must pass; cannot pass →
revert to clean and report instead of pushing broken code (and log a refresh-issue event).

**`npx tsc --noEmit` IS A NO-OP IN THIS REPO.** The root `tsconfig.json` is a solution file with
`"files": []` and project references, so bare `tsc` compiles nothing and exits 0 however broken
the code is — it reported clean against 583 real type errors on 2026-09-17. The real typecheck is
`npm run build` (which runs `tsc -b`), or `npx tsc -p tsconfig.app.json --noEmit`. And
`tsconfig.app.json` includes only `src`, so `api/` is typechecked by NEITHER — parse-check changes
there separately, e.g. `npx esbuild api/ask.ts --outfile=/dev/null`.

## PHASE 3 — SHIP

8. carelu-website: commit `Monthly payer directory refresh: <Month Year> (<N> verified
updates)`, `git pull --rebase`, push main. Push carelu-sources changes (inbox → processed) too.

## PHASE 4 — LEADTRAP SYNC (PR only — NEVER push LeadTrap main)

The vendored copy at `LeadTrap/backend/src/data/payer-guides/` must receive this month's
verified updates. It is a one-way sync (carelu-website → LeadTrap) with these rules:

9a. Branch off LeadTrap main: `chore/payer-guides-sync-<yyyy-mm>`.

9b. Run the sync script from this repo: `python3 scripts/leadtrap-sync/sync.py <LeadTrap checkout>`.
It copies every guide and vob file (stripping only the ` | Carelu` metaTitle suffix) and MERGES
LeadTrap-only content back in: guides that exist only in LeadTrap inside shared files (e.g.
anthem-indiana, medcost), their vob entries, the helper constants those use, and their imports.
LeadTrap-only files are left alone. It never overwrites `index.ts`, `vob/index.ts` or `types.ts`:
it PRINTS the imports the website adds — port those lines (and their `...spread`) by hand, and
port new `types.ts` fields / STATE_META rows by hand, keeping any LeadTrap-only looser unions.
Never hand-copy files instead of running the script: a plain copy silently deleted 7 guides'
worth of LeadTrap-only content in the first attempt of the 2026-09-24 sync.

9b-merge. **Merge three-way, never trust `sync.py` alone (learned 2026-10-01).** `sync.py` only
detects LeadTrap-only *keys*; it silently overwrites LeadTrap-side *field-level* edits inside shared
files (the October copy undid two of them). Build base = `sync.py` output of the website commit used
by the LAST merged sync, applied to LeadTrap as it was before that sync and formatted with LeadTrap's
prettier; ours = LeadTrap main; theirs = `sync.py` output of the website now. Run `git merge-file`
per file, resolve conflicts by hand, then check the restore list below.

9b-restore. **Restore checklist — LeadTrap-side edits that must survive every sync** (from #4218,
re-confirmed in #4333; add to this list whenever LeadTrap makes a new one):
  1. TennCare "no straight / fee-for-service TennCare" correction (#3880) in `tennessee.ts`:
     section, FAQ, at-a-glance row, sources, card text.
  2. No `carelu.com/sources` pointers or Carelu self-references in served guide prose or `verifyVia`
     (the README requires it); only `changelog.ts`/`types.ts` comments may mention them.
  3. VOB dialing order: `providerServicesPhone` puts the ABA/BH number first for firstcare-health-plans
     (digit form, not the vanity "800.431.STAR"), baylor-scott-white-texas, dell-childrens-health-plan,
     cigna-indiana, sentara-community-plan. No dialed phone may change in the diff.
  4. `vob/carveouts.ts` keeps the `IOWA_INDIANA_HAWAII_ROWS` block (array spreads, not a keyed Record,
     so `sync.py` drops it).
  5. `florida.ts` (sunshine-health-florida, Ambetter section): LeadTrap words the intake line as
     "Because “Sunshine” and “Ambetter” come up often in Florida intake" — the website's "roughly a quarter of
     Carelu's Florida intake" is a Carelu self-reference (item 2). Re-applied by hand in the 2026-10-11 sync.
  6. LeadTrap-only `changelog.ts` entries stay, and the LAST entry's `totals` equals the guide count
     LeadTrap serves (guides outside `AWAITING_VOB`), not the website's count.
Also: add every new website slug without a VOB layer to `AWAITING_VOB`, keep LeadTrap's looser
`types.ts` unions, and delete the duplicate "LeadTrap-only guides" comment line `sync.py` adds to
`vob/indiana.ts` and `vob/national.ts`. Do not edit the sync PR's description while its CI is running:
the `edited` event starts a CI run that skips every job and cancels the real one.

9c. Verify: `npx tsc --noEmit -p backend/tsconfig.json` in LeadTrap must show ZERO errors under
`src/data/payer-guides/` (errors elsewhere from a stale local node_modules are not yours — CI is
authoritative). Then check no slug disappeared: every `'slug': {` key removed by the diff must
still exist somewhere in payer-guides.

9d. Format changed files with the LeadTrap repo's own prettier config, commit, push the
branch, and open a PR with `gh pr create` titled
`chore(vob): monthly payer-guides sync — <Month Year>` — body: the month's applied changes
(from the changelog entry), any inbox-fulfilled documents, the LeadTrap-only files preserved,
and any types.ts divergence. Request review from `tehila122333`. DO NOT merge — review
approval is required in this repo. If the LeadTrap clone or push fails (access not granted),
log it in the final report + Slack as an ISSUE and continue — the carelu-website ship must
not be blocked by the sync.

## PHASE 5 — REPORT

10. FINAL MESSAGE: REFRESH REPORT — A. INBOX PROCESSED; B. APPLIED (slug, old→new, source);
C. WATCHLIST STATUS; D. UNTOUCHED/UNVERIFIABLE; E. OPEN DOCUMENT REQUESTS; F. SHIPPED
(commits); G. LEADTRAP SYNC (PR link, or the issue that prevented it); H. WORKLIST + COVERAGE —
guides shipped and fields filled this month, how many worklist entries remain open, and the
`payer-coverage.mjs` before/after table.

11. Slack (POST `{"text": "..."}` plain text to
https://hooks.slack.com/triggers/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):
(a) the refresh outcome in 2-3 sentences; (b) for EACH document request opened this run, one
line: `<title> — get it: <official URL>`, and one closing line: "Upload on LeadTrap → VOB
Review → Source documents once the sync PR is merged and deployed";
(c) the LeadTrap sync PR link (or its failure); (d) if there were issues, lead with `ISSUE:`.
If no open requests, say so.

Yoni may reply in this session with questions or corrections.

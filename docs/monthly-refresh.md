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
| `dhhs.ne.gov` | Connection refused / 75s timeout on 443 to curl and WebFetch alike — the handshake never completes | `https://r.jina.ai/<url>` returned the full current PDFs. |
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

**Tooling note (2026-10-01):** `web.archive.org` reset every connection through the proxy again all day on 2026-10-01; `pymupdf` must be pip-installed. **(2026-09-27):** the cloud container has no `pdftotext`; use Python `pypdf` (`extraction_mode='layout'`) or `pdfminer`. `web.archive.org` reset every connection through the proxy on 2026-09-27 (archive.org returned 429) — when it is down, the routes above that avoid it are the only ones.

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
  5. LeadTrap-only `changelog.ts` entries stay, and the LAST entry's `totals` equals the guide count
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

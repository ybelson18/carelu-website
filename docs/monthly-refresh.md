# Monthly payer-directory refresh — agent instructions

You are the monthly refresh agent for Carelu's ABA payer directory (carelu.com/payers).
THREE repos are cloned in your workspace:

- **carelu-website** — the site + VOB data + public API; pushes to main auto-deploy via Vercel.
- **carelu-sources** — PRIVATE document pipeline: `requests.json`, `events.json`, `inbox/`,
  `processed/` — fronted by the team app at https://www.carelu.com/sources.
- **LeadTrap** — the product monorepo. Its `backend/src/data/payer-guides/` holds a vendored
  copy of this directory that the live VOB flow, review queue, and payer-call agent read.

Your job: verify, APPLY, and SHIP the month's updates, then sync the product copy via PR.

The directory: payer guides in `src/data/payers/*.ts` plus VOB enrichment layers in
`src/data/payers/vob/` (see `docs/vob-build.md`). Every fact carries cites/sources of
`{title,url}` to primary sources. Editorial rule: **VERIFIED-ONLY** — publish a claim only if a
primary source you actually fetched (or a human-uploaded copy of it) confirms it.

## PHASE 0 — SOURCE INBOX (always first)

0a. List `carelu-sources/inbox/`. For each uploaded file: match it to its request in
`requests.json` (REQ-number filename). Read the document; verify and apply the facts it
unblocks in guide prose AND vob layers (fields `'unverified'` whose `verifyVia` names this
document). Cite the OFFICIAL source URL from the request (not the repo copy) with this
month's accessDate.

0b. In `requests.json` set that request's status `fulfilled` + `fulfilledAt`; `git mv` the file to
`processed/`; append an `events.json` entry
`{ts, type:'request-fulfilled', summary:'<title> processed — <N> fields verified', refId:'REQ-xxx'}`.
Commit and push carelu-sources.

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
sources that blocked a fact this cycle. Open a real request in `carelu-sources/requests.json`
for any that does not already have one (step 5c), and cross-reference the REQ id back here.

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
| `mmis.georgia.gov` (GAMMIS) | Connection refused outright — not even a 403 | PARTIAL (2026-09-23): `curl "https://web.archive.org/web/2026id_/<url>"` returns GAMMIS files that happen to be archived — it recovered the Part I Policies & Procedures (July 2026) in full. The current Part II ASD manual is NOT archived under any HANDBOOKS filename: still a human retrieval via carelu.com/sources (VC-037). |
| `mass.gov` | 403 to WebFetch and curl alike | Human retrieval. |
| `codes.ohio.gov` | WebFetch gets ECONNREFUSED; curl returns 000 and times out on every path. Wayback has NO capture of the ABA rule at all. | PARTIAL (2026-09-23): `https://r.jina.ai/<url>` returns full rule text with effective dates for most rules (read OAC 5160-26-03.1, 5160-1-08, 5160-26-09.1 this way). 5160-34-02 (the ABA rule) still returns a "no rule" page even so — still the highest-value open document request. Route: Rules@Medicaid.Ohio.gov or JCARR. **Do NOT substitute Cornell LII**: its Ohio chapter 5160-34 is a stale snapshot of the superseded *skilled therapies* chapter (5160-34-01 is the RESCINDED PT/OT/SLP rule), so a Cornell 200 on an Ohio Medicaid rule is the wrong document, not a hit. |
| `hca.nm.gov` / `hsd.state.nm.us` | CloudFront 403, "configured to block access from your country" | **SOLVED** — `curl "https://web.archive.org/web/2026id_/<url>"` returns LOD #53 and MAD Supplement 24-13 in full as real PDFs. For NMAC rule text, `srca.nm.gov` is better than the Cornell mirror: `https://www.srca.nm.gov/parts/title08/08.321.0002.html` carries the complete in-force 8.321.2.13. |
| `azahcccs.gov` | Hard 403 from an Azure Application Gateway to every client and header combination | The `web.archive.org/web/2026id_/` curl route, when the Archive is up. Gates the AHCCCS BH Billing Matrix and telehealth code set. |
| `mercycareaz.org` | 403 Access Denied on the ABA provider page and the PA form | Human retrieval. |
| `portal.kmap-state-ks.us` | Connection timeout — no response at all | Human retrieval. Gates the KMAP Mental Health and Professional FFS provider manuals. |
| `hcpf.colorado.gov` | 403 to WebFetch | `curl` with a browser user agent works. |
| `dhhs.ne.gov` | Connection refused / 75s timeout on 443 to curl and WebFetch alike — the handshake never completes | `https://r.jina.ai/<url>` returned the full current PDFs. |
| `www.molinahealthcare.com` | 403 to WebFetch | `r.jina.ai` proxy. |
| `point32health.org` PDFs | Returns HTML, not the PDF | None found. Gates Tufts Health Together's ABA medical-necessity guideline. |
| `magellanprovider.com` | Cloudflare interstitial on every path; curl 403 with any header set | Chrome browser tool, then extract PDFs in-page. |
| `manuals.health.mil` | F5 bot wall + cert-chain failure | None found — quote a contractor's or DHA's restatement of the manual, never the manual itself. |
| `tricare.mil`, `martinspoint.org`, `tricare.triwest.com` | Block direct automated fetches | Text-extraction proxy or browser; pages load fine for a human. |
| `hopkinsmedicine.org` PDFs | Cloudflare 403 (HTML pages are fine) | Human retrieval. |
| `horizonnjhealth.com`, `aetnabetterhealth.com` | ~930-byte stub / 403 on ABA PDFs | Human retrieval. |
| `providernews.anthem.com` article pages | JS SPA — HTTP 200 with an empty body | Use `files.providernews.anthem.com` PDFs instead. **A 200 here is not a success** — check the body. |
| `web.archive.org` | WebFetch refuses this host entirely | `curl` works — and this is the single most useful unblock available. `curl "https://web.archive.org/web/2026id_/<original-url>"` retrieves documents from hosts that refuse us directly; it is what recovered the whole Virginia backfill. |
| `vamedicaid.dmas.virginia.gov` | Connection refused (ECONNREFUSED) to every client | The `web.archive.org/web/2026id_/` curl trick above. |
| `medicaid-documents.dhhs.utah.gov` | 403 to WebFetch and to curl with a browser UA; `web.archive.org/2026id_/` 404s on every path | **SOLVED** — `https://r.jina.ai/<url>` returns the full current manual as clean text (it retrieved the 28-page January 2026 ASD Services manual, published 13 Apr 2026, that the guide itself recorded as unretrievable). |
| `public.providerexpress.com` (Optum) | HTTP 200 returning a JS "Preparing your download" shell, not the document | **Append `?__tracked=1` to the DAM path** (`…/abaSCC.pdf?__tracked=1`) — that is the redirect the interstitial itself uses, and it returns the real PDF. Then `pdftotext`. Without this the whole Optum policy set reads as unreachable. |
| `medicaid.georgia.gov/document/document/telehealth-guidance/download` | Serves a March 2020 COVID emergency letter, NOT the current Part II Telehealth Guidance | A 200 with a real PDF can still be the WRONG document — check its version date. The current 10/1/2025 guidance carries Georgia's live Category I ABS code table and is the best GAMMIS workaround found so far. |
| `static.cigna.com` PDFs | WebFetch returns unparsed binary | Save with `curl`, extract with `pdftotext`. |
| `federalregister.gov` | 302s to an unblock interstitial | Use the JSON API (`/api/v1/documents.json`) for docket sweeps; `govinfo.gov` for document text. |

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
entry to `carelu-sources/requests.json` (next REQ id, title, officialUrl_note with the URL,
unblocks, status 'open', requestedAt) + an `events.json` `{type:'request-opened'}` entry. No
duplicates of existing open requests.

5d. EVENTS: append ONE `events.json` entry `{type:'refresh-completed', summary:'<Month>
refresh: N changes applied, M sources checked, K unreachable'}` — the app's heartbeat depends
on this. If the refresh FAILED or was partial, append `{type:'refresh-issue', summary:'<what
went wrong>'}` instead — never skip both.

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
updates)`, `git pull --rebase`, push main. Push carelu-sources changes too.

## PHASE 4 — LEADTRAP SYNC (PR only — NEVER push LeadTrap main)

The vendored copy at `LeadTrap/backend/src/data/payer-guides/` must receive this month's
verified updates. It is a one-way sync (carelu-website → LeadTrap) with these rules:

9a. Branch off LeadTrap main: `chore/payer-guides-sync-<yyyy-mm>`.

9b. For every state/national/changelog file in carelu-website `src/data/payers/` and
`src/data/payers/vob/` that ALSO exists in `backend/src/data/payer-guides/`: copy it over,
then strip the ` | Carelu` suffix from every `metaTitle` string (the only intentional
transform — verify with a diff that nothing else systematic differs). For a state file that is
NEW in carelu-website: copy it in and register it in the LeadTrap `index.ts` merges.

9c. PRESERVE LeadTrap-only content — guides/states that exist ONLY in LeadTrap (e.g.
iowa/oklahoma/hawaii, added directly in the product repo) must survive untouched, including
their `index.ts` entries. Never delete or overwrite a file that has no carelu-website
counterpart. If `types.ts` differs beyond the known ` | Carelu` delta, do NOT overwrite it —
describe the difference in the PR body instead. ONE-TIME (first sync after 2026-09-17): the
`deliveryRules` types — `RuleStatus`, `PayerRuleFact`, `PayerDeliveryRules` and the
`deliveryRules?` field on `PayerConfig` — are NEW in carelu-website and must be ported into
LeadTrap's `types.ts`, or every guide carrying the field will fail LeadTrap's typecheck. Ideally port LeadTrap-only guides BACK into
carelu-website in a later phase — for now just note them in the PR body.

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
(a) the refresh outcome in 2-3 sentences; (b) for EACH open document request, one line:
`<title> — get it: <official URL> — upload it: https://www.carelu.com/sources#REQ-xxx`;
(c) the LeadTrap sync PR link (or its failure); (d) if there were issues, lead with `ISSUE:`.
If no open requests, say so.

Yoni may reply in this session with questions or corrections.

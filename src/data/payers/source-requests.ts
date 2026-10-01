/* ================================================================
   SOURCE-DOCUMENT REQUESTS — what the payer refresh needs a human to fetch.
   The source of truth for document requests opened by this repo's refresh
   (docs/monthly-refresh.md, step 5c). It is vendored into LeadTrap with the
   rest of src/data/payers by scripts/leadtrap-sync/sync.py, and LeadTrap
   imports every entry onto its Source documents board (VOB Review → Source
   documents) after each deploy — that board is where people upload. The
   old carelu.com/sources board and carelu-sources/requests.json are retired
   for new requests.

   Rules:
   - `key` is permanent and unique: LeadTrap dedupes on it, so never reuse
     or rename one. New keys: 'carelu-<yyyy-mm-dd>-<short-slug>'.
   - Append only. To close a request the refresh settled another way, set
     `status: 'resolved'` with a one-line `resolution`; LeadTrap marks the
     board request fulfilled on the next deploy.
   - Put the official URL (where a person gets the document) in `note`;
     the board links the first URL it finds there.
   ================================================================ */

export interface WebsiteSourceRequest {
  key: string;
  title: string; // <= 300 chars
  note: string | null; // where / how to get it, with the official URL
  unblocks: string | null; // which guide fields it settles
  requestedAt: string; // YYYY-MM-DD
  status: 'open' | 'resolved';
  resolution?: string; // required when status is 'resolved'
}

export const websiteSourceRequests: WebsiteSourceRequest[] = [
  {
    key: 'carelu-REQ-016',
    title: 'KMAP (Kansas) current interactive ABA/BCBA fee schedule export (97151/97152/97153/97155/97156 rates)',
    note: 'https://portal.kmap-state-ks.us (requires an OAM/SSO-authenticated provider or state login — bot-blocked to automated fetch every cycle since the guide was built). A screenshot or CSV/PDF export of the current fee table is enough. Re-confirmed still SSO-walled as of 2026-10-01 (direct fetch and r.jina.ai both return the generic disclaimer page).',
    unblocks: 'Confirms (or refutes) unsourced rate figures for 97151/97152/97154/97155/97156/97158 (97153 is now VERIFIED at $16.25/15-min unit, $65/hour, eff. 7/1/2024, per KMAP General Bulletin 24125 — applied 2026-10-01; acuity.news\'s unverified $43.75 figure for 97151 remains unconfirmed by any primary source).',
    requestedAt: '2026-09-01',
    status: 'open',
  },
  {
    key: 'carelu-REQ-017',
    title: 'Ohio Administrative Code 5160-34 (ABA) - current in-force rules or the filed rewrite',
    note: 'https://codes.ohio.gov/ohio-administrative-code/chapter-5160-34 (codes.ohio.gov reports \'no rule\' for 5160-34-01/-02/-03; draft rewrite memo ERF188422B is marked NOT YET FILED). Route: Rules@Medicaid.Ohio.gov or JCARR RuleWatch. Re-confirmed 2026-10-01: codes.ohio.gov now loads cleanly and explicitly returns "No Ohio Administrative Code rule number corresponds to \'5160-34\'" (a cleaner confirmation than the prior connection-refused state, not a content change); draft rewrite memo ERF188422B still stamped "DRAFT — NOT FOR FILING"; ODM\'s 7/30/2026 stakeholder deck confirms the rewrite remains paused.',
    unblocks: 'Ohio Medicaid dxRequired / assessmentPA on every Ohio guide (worklist VC-048: Ohio guides citing 5160-34-02).',
    requestedAt: '2026-09-27',
    status: 'open',
  },
  {
    key: 'carelu-REQ-018',
    title: 'KMAP Mental Health and Professional provider manual pages updated for Bulletin 26140 (pp. 8-47/8-48 and 8-11/8-12)',
    note: 'https://portal.kmap-state-ks.us/PublicPage/ProviderPricing/ProviderManuals (JS-only listing; bulletin PDFs fetch with a cookie jar, manuals do not). Re-confirmed still blocked 2026-10-01 (portal.kmap-state-ks.us bulletin/manual PDF links return the generic site-disclaimer page via both direct fetch and r.jina.ai).',
    unblocks: 'Kansas diagnosis/recency fields in manual form (VC-013 follow-up).',
    requestedAt: '2026-09-27',
    status: 'open',
  },
  {
    key: 'carelu-REQ-019',
    title: 'CareFirst PAL prior-auth lookup for 97151-97158 + current PP CO 020.01 and PP CO 200.02',
    note: 'https://provider.carefirst.com (PAL, login) and https://secure.compliance360.com/ext/ORDk_gTtX8t5b1OTEIi7Nw== (JS app). Re-checked 2026-10-01: CareFirst\'s monthly Medical Policy Update PDFs through the latest posted issue (April 2026; no May-Sept 2026 issues exist yet) mention nothing on ABA/autism/RBT; provider.carefirst.com and the compliance360 JS portal remain login-gated.',
    unblocks: 'carefirst-maryland assessmentPA, telehealth codes, technician credential (VC-043).',
    requestedAt: '2026-09-27',
    status: 'open',
  },
  {
    key: 'carelu-REQ-020',
    title: 'MedCost ABA / autism medical policy',
    note: 'https://www.medcost.com/medical-policies (member/employer portal only).',
    unblocks: 'medcost dxRequired, dxRecency, diagnosingProviders, diagnosticTools, supervision, concurrentBilling, noteSignature, billAsProvider.',
    requestedAt: '2026-09-27',
    status: 'open',
  },
  {
    key: 'carelu-REQ-022',
    title: 'Indiana FSSA/OMPP written answer: IC 27-1-37.5-26(b) one-year authorization vs the 6-month ABA PA period for MCEs',
    note: 'https://www.in.gov/medicaid/providers/ (ask OMPP; bulletin BT2026136 still says six months). Re-checked 2026-10-01 against IHCP bulletins through BT2026164 and Indiana Code directly — no FSSA/OMPP reconciliation published yet.',
    unblocks: 'treatmentPA on the five Indiana MCO guides (VC-032).',
    requestedAt: '2026-09-27',
    status: 'open',
  },
  {
    key: 'carelu-REQ-027',
    title: 'CareSource Georgia reimbursement policy PY-1634 + 2026 ABA rate-amendment notice',
    note: 'https://www.caresource.com/providers/tools-resources/health-partner-policies/ (PY-1634 not public; rate notice went to providers individually). Re-searched 2026-10-01 — PY-1634 still not publicly posted.',
    unblocks: 'caresource-georgia rate facts (80% claim now labelled as reported).',
    requestedAt: '2026-09-27',
    status: 'open',
  },
  {
    key: 'carelu-REQ-029',
    title: 'Idaho Medicaid ABA/telehealth handbook sections',
    note: 'https://www.idmedicaid.com/Provider%20Guidelines/ (404 during the weekly maintenance window Sat 4pm-Sun 10am MT; fetch on a weekday).',
    unblocks: 'idaho-medicaid intakeGates.telehealth.',
    requestedAt: '2026-09-27',
    status: 'open',
  },
  {
    key: 'carelu-REQ-030',
    title: 'IHCP BT2026142 — Acentra InterQual (IQ) criteria integration into FFS ABA PA workflow',
    note: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026142.pdf — only known second-hand via a mention inside BT2026161; not yet independently fetched.',
    unblocks: 'Full verification of the indiana-medicaid authTurnaround claim about InterQual criteria integration, currently flagged in-text as \'not independently re-verified\'.',
    requestedAt: '2026-10-01',
    status: 'open',
  },
  {
    key: 'carelu-REQ-031',
    title: 'DMAS Mental Health Services manual — ABA 20-hr/week cap & ASD-diagnosis-requirement implementing update',
    note: 'https://www.dmas.virginia.gov/media/unifn0g3/spa-26-018_autism-spectrum-disorder-service-updates.pdf states this is pending CMS approval and \'the effective date...will be announced in a subsequent notice\' — not yet published as of 10/1/2026.',
    unblocks: 'Upgrading virginia-medicaid\'s new Watch items (dxRequired caveat, deliveryRules.dailyLimits caveat — the pending 2026 Appropriation Act Item 291.WW.2 cap/diagnosis requirement) from caveated-verified to a hard effective date once DMAS publishes the implementing manual update.',
    requestedAt: '2026-10-01',
    status: 'open',
  },
  {
    key: 'carelu-REQ-032',
    title: 'Optum/Change Healthcare eligibility payer ID for Anthem GA: 10032 vs. GABLS',
    note: 'Optum\'s current RTE payer list carries two live, unresolved rows for the same plan — 10032 (\'BCBS of Georgia (Anthem)\') and GABLS (\'Georgia Anthem BCBS,\' NPI-in-loop-2100B flagged). A screenshot or export clarifying which row Optum intends as primary for eligibility (270/271) traffic would resolve it.',
    unblocks: 'Narrows GA Layer 1 payerId.changeHealthcare to a single confirmed value instead of two candidates (successor to the now-resolved REQ-014).',
    requestedAt: '2026-10-01',
    status: 'open',
  },
  {
    key: 'carelu-REQ-033',
    title: 'Aetna Better Health of Texas provider manual (current)',
    note: 'https://www.aetnabetterhealth.com/texas/providers/ (tx_provider_manual.pdf) — 403 to curl and r.jina.ai',
    unblocks: 'Aetna Better Health TX ABA telehealth, network, switching and decision-time fields (fan-out worklist).',
    requestedAt: '2026-10-01',
    status: 'open',
  },
  {
    key: 'carelu-REQ-034',
    title: 'Molina Healthcare of Texas — current STAR/STAR+PLUS/CHIP provider manual and prior-authorization guide (new URLs after site restructure)',
    note: 'https://www.molinahealthcare.com/providers/tx/medicaid/ — the cited manual, PA.aspx and MHT PA guide now return \'Page Not Found\'',
    unblocks: 'Re-verifies Molina TX decision times and COB (texas.ts) and MOLINA_TX_PA_PAGE in vob/texas.ts.',
    requestedAt: '2026-10-01',
    status: 'open',
  },
  {
    key: 'carelu-REQ-035',
    title: 'Molina Healthcare of Florida — Medicaid Provider Handbook (3-18-26), Comprehensive BA QRG (08-07-26), CMS Transition FAQs (09-25-26)',
    note: 'https://www.molinahealthcare.com/providers/fl/medicaid/ — PDFs now bot-walled to every automated route',
    unblocks: 'Re-verifies Molina FL / CMS Health Plan facts; settles VC-061, VC-062, VC-063.',
    requestedAt: '2026-10-01',
    status: 'open',
  },
  {
    key: 'carelu-REQ-036',
    title: 'Molina Healthcare of California — Medi-Cal provider manual 2026 + PA code matrix / exceptions',
    note: 'https://www.molinahealthcare.com/providers/ca/medicaid/ — old PDFs now redirect to a Resources page',
    unblocks: 'Re-verifies Molina CA PA and ABA fields.',
    requestedAt: '2026-10-01',
    status: 'open',
  },
  {
    key: 'carelu-REQ-037',
    title: 'Molina Healthcare of New Mexico — Turquoise Care provider manual (current)',
    note: 'https://www.molinahealthcare.com/providers/nm/medicaid/ — cited PDF returns 404',
    unblocks: 'Re-verifies Molina NM ABA fields.',
    requestedAt: '2026-10-01',
    status: 'open',
  },
  {
    key: 'carelu-REQ-038',
    title: 'Molina Healthcare of New York — ABA provider bulletins (MCP 482 bulletin + FAQ, weekly billing notice, PA update notice)',
    note: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/bulletin.aspx — URLs now return \'Page Not Found\'',
    unblocks: 'Re-verifies Molina NY MCP 482 / weekly-unit facts; VC-064.',
    requestedAt: '2026-10-01',
    status: 'open',
  },
  {
    key: 'carelu-REQ-039',
    title: 'HMSA — QUEST Integration and commercial precertification lists + ABA medical policy (new locations)',
    note: 'https://prc.hmsa.com (article URLs now return the home page; hmsa.policytransparency.com is a JS app)',
    unblocks: 'Re-verifies HMSA PA and ABA policy facts (hawaii.ts).',
    requestedAt: '2026-10-01',
    status: 'open',
  },
  {
    key: 'carelu-REQ-040',
    title: 'Iowa Medicaid Informational Letter 1976 (ABA)',
    note: 'Iowa HHS Medicaid informational letters — https://hhs.iowa.gov/medicaid/provider-resources/informational-letters',
    unblocks: 'Iowa Medicaid school-based ABA, switching providers, POS and network fields.',
    requestedAt: '2026-10-01',
    status: 'open',
  },
  {
    key: 'carelu-REQ-041',
    title: 'Pennsylvania HealthChoices Behavioral Health Program Standards & Requirements (current 2024/2026 edition)',
    note: 'https://www.pa.gov (DHS HealthChoices BH page redirects to search; only the 2012 edition found)',
    unblocks: 'Anchors the five PA BH-MCO network and switching statements to the state contract.',
    requestedAt: '2026-10-01',
    status: 'open',
  },
  {
    key: 'carelu-REQ-042',
    title: 'Aetna commercial ABA telehealth code list (current) via Availity',
    note: 'Availity provider portal / Aetna BH precert 1-888-632-3862 — the public telemedicine.pdf is a June 2021 review',
    unblocks: 'Aetna telehealth fields on every aetna-* guide (currently re-cited to the 2021 policy).',
    requestedAt: '2026-10-01',
    status: 'open',
  },
  {
    key: 'carelu-REQ-043',
    title: 'BlueCross BlueShield of Tennessee Provider Administration Manual (July 1, 2026 edition)',
    note: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf (now serves the 10/1/2026 edition; July edition needed for the ABA-organization credentialing entry)',
    unblocks: 'Confirms bluecross-blueshield-of-tennessee billAsProvider (ABA organization credentialing) and VC-072.',
    requestedAt: '2026-10-01',
    status: 'open',
  },
];

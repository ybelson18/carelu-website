/* ================================================================
   PAYER GUIDE CONFIGS (/payers/:slug) — shared types.
   ABA coverage & prior-auth guides per payer, distilled from primary
   sources (payer clinical policies, state manuals) compiled June–July
   2026. Framed as verification guidance: every page carries a
   "policies change — verify" disclaimer and links its sources.
   Data lives in one file per state (+ national.ts); index.ts merges.
   ================================================================ */

export interface PayerFact { label: string; value: string }
export interface PayerSource { title: string; url: string }
export interface PayerSection {
  h2: string;
  body?: string[];
  list?: { title: string; desc: string }[];
  cites?: PayerSource[];   // sources for THIS section, rendered inline under it
}
export interface PayerFaq { q: string; a: string }

/* ---------------------------------------------------------------
   DELIVERY & BILLING RULES — the operational layer beneath coverage.
   Coverage answers "will they pay"; these answer "how must the
   service be delivered, staffed, documented and billed for the claim
   to survive". Every field is optional and VERIFIED-ONLY: publish a
   value only when a fetched primary source confirms it, otherwise
   omit the field or carry status 'unverified' with a verifyVia note.
   Filled progressively by the monthly refresh from docs/payer-worklist.json.
   --------------------------------------------------------------- */
export type RuleStatus = 'verified' | 'plan-dependent' | 'unverified';
export interface PayerRuleFact {
  value: string;              // the rule in plain language, or a short 'unverified' note
  status: RuleStatus;
  cites?: PayerSource[];      // primary sources for THIS rule
  verifyVia?: string;         // where to confirm when status isn't 'verified'
  /* Why this isn't verified — the two cases are genuinely different work:
     'document'  the answer IS written down, we just could not open the file
                 (portal-gated, bot-walled, 403). Closeable: a human fetches it
                 via carelu.com/sources and the next refresh reads it. This is
                 real debt and the queue should shrink.
     'per-case'  no document states it, because it varies by plan, contract or
                 member. "Ask the plan" is the FINISHED answer, not a placeholder
                 — the field's job is to be the script for that call. Never closes,
                 and should not be counted as debt.
     'licensed'  the answer sits in proprietary licensed criteria (MCG, InterQual,
                 a payer's internal UM guideline) that we can neither fetch nor
                 lawfully republish. Also never closes — but for a different reason
                 than 'per-case', and it is worth saying so plainly on the page
                 rather than implying the payer is being evasive. Do NOT file these
                 as document requests; no human retrieval will ever satisfy them. */
  blocker?: 'document' | 'per-case' | 'licensed';
}
export interface PayerDeliveryRules {
  supervision?: PayerRuleFact;       // supervision ratios/floors the payer imposes on techs
  concurrentBilling?: PayerRuleFact; // may 97153 and 97155 be billed for the same clock time?
  dailyLimits?: PayerRuleFact;       // MUE / per-day unit ceilings this payer enforces
  noteSignature?: PayerRuleFact;     // who must sign session notes, and when
  placeOfService?: PayerRuleFact;    // school / community / group home / home — where ABA is payable
  billAsProvider?: PayerRuleFact;    // whose NPI the claim goes out under (rendering vs supervising)
}
/* ---------------------------------------------------------------
   INTAKE GATES — the questions that decide whether a family can
   START, and what they must bring. Where deliveryRules govern the
   claim, these govern the front door: they map directly onto intake
   form questions and document requests. Same verified-only contract
   as deliveryRules; most of this already exists as cited prose in
   the guides, so filling a field is usually extraction from a
   sourced paragraph rather than fresh research.
   --------------------------------------------------------------- */
export interface PayerIntakeGates {
  ageLimit?: PayerRuleFact;            // upper (and any lower) age bound on the ABA benefit
  dxRecency?: PayerRuleFact;           // how recent the diagnostic evaluation must be
  diagnosingProviders?: PayerRuleFact; // who is allowed to make the ASD diagnosis
  diagnosticTools?: PayerRuleFact;     // instruments the payer requires behind the diagnosis
  referral?: PayerRuleFact;            // is a referral/order required, from whom, how current
  telehealth?: PayerRuleFact;          // which ABA codes may be delivered remotely, and where
  authTurnaround?: PayerRuleFact;      // how long the payer has to decide a PA: standard / expedited, and any reauth lead time
  coordinationOfBenefits?: PayerRuleFact; // who pays first when the child has other coverage (commercial + Medicaid, two parents' plans, TRICARE/CHAMPVA order)
}

export type PayerKind = 'state-medicaid' | 'medicaid-mco' | 'commercial';
export interface PayerConfig {
  slug: string;
  payer: string;
  pill: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  atGlance: PayerFact[];
  sections: PayerSection[];
  collect: { title: string; desc: string }[]; // what intake should gather from the family
  sources: PayerSource[];
  faq: PayerFaq[];
  // Taxonomy for the state-organized directory.
  state?: string;          // 'GA', 'NC', ... or 'US' for national commercial policy
  kind?: PayerKind;        // state medicaid program, a Medicaid MCO, or commercial
  parent?: string;         // for MCOs: the state Medicaid program they administer
  family?: string;         // carrier family ('aetna', 'anthem', 'unitedhealthcare', …) to cross-link commercial ↔ Medicaid plans
  cardDesc?: string;       // one-line description for directory cards
  /* Funnel-critical facts surfaced prominently (assessment PA is asked constantly).
     These were bare strings until 2026-09-17, which is exactly how a wrong claim
     survived on six Virginia guides for two months: there was no slot to record
     what a value was sourced from, so "source-verified" lived in a commit message
     instead of in the data, and nobody could audit it afterwards. They are
     PayerRuleFact now — a value cannot exist without a status. */
  assessmentPA?: PayerRuleFact;   // does the ASSESSMENT (not just treatment) need prior auth?
  treatmentPA?: PayerRuleFact;    // does treatment need prior auth?
  dxRequired?: PayerRuleFact;     // is an autism diagnosis required (and how strict)?
  // Operational layer: how the service must be staffed, documented and billed.
  deliveryRules?: PayerDeliveryRules;
  // Front-door layer: what decides whether a family can start, and what they must bring.
  intakeGates?: PayerIntakeGates;
}

export const PAYER_REVIEWED = 'September 2026';

// State metadata for the directory + per-state breakdowns on commercial guides.
export interface StateMeta { code: string; name: string; mandate: string; medicaidSlug: string }
export const STATE_META: StateMeta[] = [
  { code: 'GA', name: 'Georgia', mandate: 'Ava\u2019s Law (O.C.G.A. \u00a7 33-24-59.10)', medicaidSlug: 'georgia-medicaid' },
  { code: 'NC', name: 'North Carolina', mandate: 'N.C.G.S. \u00a7 58-3-192 (autism coverage)', medicaidSlug: 'north-carolina-medicaid' },
  { code: 'IN', name: 'Indiana', mandate: 'Indiana autism insurance mandate (IC 27-8-14.2)', medicaidSlug: 'indiana-medicaid' },
  { code: 'VA', name: 'Virginia', mandate: 'Virginia autism insurance mandate (\u00a7 38.2-3418.17)', medicaidSlug: 'virginia-medicaid' },
  { code: 'TN', name: 'Tennessee', mandate: 'Tenn. Code Ann. \u00a7 56-7-2367 (neurological parity)', medicaidSlug: 'tenncare-tennessee-medicaid' },
  { code: 'OH', name: 'Ohio', mandate: 'Ohio autism insurance mandate (R.C. 3923.84)', medicaidSlug: 'ohio-medicaid' },
  { code: 'NJ', name: 'New Jersey', mandate: 'P.L. 2009, c.115 (N.J.S.A. 17:48-6ii et al.)', medicaidSlug: 'new-jersey-medicaid' },
  { code: 'MD', name: 'Maryland', mandate: 'Habilitative services mandate (Md. Ins. \u00a7 15-835 + COMAR 31.10.39.03)', medicaidSlug: 'maryland-medicaid' },
  { code: 'CO', name: 'Colorado', mandate: 'Colorado autism insurance mandate (C.R.S. \u00a7 10-16-104(1.4))', medicaidSlug: 'colorado-medicaid' },
  { code: 'UT', name: 'Utah', mandate: 'Utah autism insurance mandate (Utah Code \u00a7 31A-22-642; caps removed 2020)', medicaidSlug: 'utah-medicaid' },
  { code: 'AZ', name: 'Arizona', mandate: 'Steven\u2019s Law (A.R.S. \u00a7 20-826.04; dollar caps repealed by SB 1590, 2025)', medicaidSlug: 'arizona-ahcccs' },
  { code: 'NY', name: 'New York', mandate: 'NY autism mandate (Ins. Law \u00a7\u00a7 3216(i)(25), 3221(l)(17), 4303(ee))', medicaidSlug: 'new-york-medicaid' },
  { code: 'NM', name: 'New Mexico', mandate: 'New Mexico autism insurance mandate (NMSA 1978 \u00a7 59A-22-49)', medicaidSlug: 'new-mexico-medicaid' },
  { code: 'MO', name: 'Missouri', mandate: 'Missouri autism insurance mandate (RSMo \u00a7 376.1224)', medicaidSlug: 'missouri-medicaid' },
  { code: 'TX', name: 'Texas', mandate: 'Texas autism mandate (Tex. Ins. Code \u00a7 1355.015)', medicaidSlug: 'texas-medicaid' },
  { code: 'MA', name: 'Massachusetts', mandate: 'ARICA \u2014 Ch. 207, Acts of 2010 (M.G.L. c. 175 \u00a7 47AA et al.)', medicaidSlug: 'masshealth-massachusetts-medicaid' },
  { code: 'FL', name: 'Florida', mandate: 'Steven A. Geller Autism Coverage Act (\u00a7 627.6686, Fla. Stat.)', medicaidSlug: 'florida-medicaid' },
  { code: 'KS', name: 'Kansas', mandate: 'Kansas autism insurance mandate (K.S.A. 40-2,194)', medicaidSlug: 'kansas-medicaid' },
  { code: 'NE', name: 'Nebraska', mandate: 'Neb. Rev. Stat. \u00a7 44-7,106 (autism coverage, 25 hr/wk cap)', medicaidSlug: 'nebraska-medicaid' },
];

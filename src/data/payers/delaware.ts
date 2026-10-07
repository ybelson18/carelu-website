import type { PayerConfig, PayerSource } from './types.js';

/* Delaware — researched October 2026 from primary sources only.
   Notes for the next refresh:
   - The Delaware autism mandate is 18 Del. C. § 3366 (individual) and § 3570A (group). § 3361 is a
     repealed pre-existing-condition section and § 3570 is supplemental child coverage; do not cite them.
   - Delaware does not license behavior analysts. 24 Del. C. ch. 30 (Board of Mental Health and Chemical
     Dependency Professionals) has no behavior-analyst subchapter; 24 Del. C. ch. 35 is the psychology act.
   - medicaidpublications.dhss.delaware.gov's document library is a JS app, but its Bring2mind DMX
     download API answers plain curl: …/DMX/API/Entries/Download?Command=Core_Download&EntryId=<n>&…
     (cookie jar + Chrome UA). Entry ids found by enumerating Content-Disposition filenames.
   - www.medicaid.gov SPA PDFs 403 to curl; r.jina.ai returned SPA 16-010 in full.
   - highmarkhealthoptions.com provider pages are JS shells; the 2025 provider manual PDF and medical
     policy PDFs download directly. securecms.highmark.com (Highmark DE medical policies) refused us. */

const DMX = (id: number) =>
  `https://medicaidpublications.dhss.delaware.gov/docs/DesktopModules/Bring2mind/DMX/API/Entries/Download?Command=Core_Download&EntryId=${id}&language=en-US&PortalId=0&TabId=94`;

const S: Record<string, PayerSource> = {
  spa: { title: 'Delaware State Plan Amendment 16-010 — Behavioral Services to Treat Autism Spectrum Disorder pursuant to EPSDT (approved Jan. 12, 2017; eff. Oct. 1, 2016)', url: 'https://www.medicaid.gov/State-resource-center/Medicaid-State-Plan-Amendments/Downloads/DE/DE-16-010.pdf' },
  abaFS: { title: 'DMAP — ABA Fee Schedule Effective November 1, 2022 (with HN/HO/HP modifier rates)', url: DMX(1424) },
  pfs2026: { title: 'DMAP — Physician Fee Schedule Effective January 1, 2026', url: DMX(2015) },
  gpm: { title: 'DMAP — General Policy Manual (claims timeliness 1.19; coordination of benefits / TPL 4.0)', url: DMX(1797) },
  pract: { title: 'DMAP — Practitioner Provider Specific Policy Manual (rev. 03/17/2026; section 16.0 Telehealth)', url: DMX(2112) },
  memFaq: { title: 'DMAP — Member FAQs (Rev. 08/2024): copay exemptions', url: DMX(1077) },
  dshp: { title: 'Delaware DHSS / DMMA — Diamond State Health Plan (three contracted MCOs)', url: 'https://dhss.delaware.gov/dmma/home/medicaid/diamond-state-health-plan/' },
  acdePM: { title: 'AmeriHealth Caritas Delaware — Provider Manual 2026', url: 'https://www.amerihealthcaritasde.com/content/dam/amerihealth-caritas/acde/pdf/provider/provider-manual.pdf.coredownload.inline.pdf' },
  acdeBHprov: { title: 'AmeriHealth Caritas Delaware — Provider: Behavioral Health (30-unit limit; ABA after 30 units via DDDS)', url: 'https://www.amerihealthcaritasde.com/provider/behavioral-health/index.aspx' },
  acdeBHmem: { title: 'AmeriHealth Caritas Delaware — Member: Behavioral health benefits (autism services; first 30 outpatient hours, then DSCYF)', url: 'https://www.amerihealthcaritasde.com/member/eng/benefits/behavioral.aspx' },
  acdeBHPA: { title: 'AmeriHealth Caritas Delaware — Behavioral Health Prior Authorization Request Form (NaviNet or fax 877-234-4273)', url: 'https://www.amerihealthcaritasde.com/content/dam/amerihealth-caritas/acde/pdf/provider/provider-behavioral-health-prior-authorization-request-form.pdf.coredownload.inline.pdf' },
  acdePAG: { title: 'AmeriHealth Caritas Delaware — Provider Prior Authorization Guide (physical and behavioral health)', url: 'https://www.amerihealthcaritasde.com/content/dam/amerihealth-caritas/acde/pdf/provider/prior-auth-guide.pdf.coredownload.inline.pdf' },
  hhoPM: { title: 'Highmark Health Options — 2025 Provider Manual (Delaware Medicaid)', url: 'https://www.highmarkhealthoptions.com/content/dam/digital-marketing/en/highmark/highmarkhealthoptions/providers/provider-resources/hho-2025-de-provider-manual.pdf' },
  hhoMP: { title: 'Highmark Health Options Medical Policy HHO-DE-MP-1045 — Autism Spectrum Disorders (last revised 10/26/2022)', url: 'https://www.highmarkhealthoptions.com/content/dam/digital-marketing/en/highmark/highmarkhealthoptions/providers/medical-payment-policies/medical-policies/hho-de-mp-1045-autismspectrumdisorder-10262022.pdf' },
  dfhPM: { title: 'Delaware First Health — 2025 Provider Manual (v11.2, 08/30/2026)', url: 'https://www.delawarefirsthealth.com/content/dam/centene/delaware/provider-manuals/2025%20DE%20First%20Health%20Provider%20Manual%20v11.2_08302026_FINAL.pdf' },
  dfhBM: { title: 'Delaware First Health — 2025 Provider Billing Manual', url: 'https://www.delawarefirsthealth.com/content/dam/centene/delaware/provider-manuals/2025%20DE%20First%20Health%20Billing%20Manual_R.pdf' },
  dfhPA: { title: 'Delaware First Health — Medicaid/CHIP Prior Authorization Requirements, CMS-0057-F (eff. 12/31/2025)', url: 'https://www.delawarefirsthealth.com/content/dam/centene/medicaid/pdfs/provider/prior-authorization-requirements-metrics/DE_DEFirstHealth_DE_Medicaid_PriorAuthReq__CHP.pdf' },
  dfhBen: { title: 'Delaware First Health — Medicaid Benefits List (DSHP and DHCP tables)', url: 'https://www.delawarefirsthealth.com/members/medicaid/benefits-services/benefits-overview/benefits-list.html' },
  m3366: { title: '18 Del. C. § 3366 — Autism spectrum disorders coverage (individual health benefit plans)', url: 'https://delcode.delaware.gov/title18/c033/sc01/index.html' },
  m3570A: { title: '18 Del. C. § 3570A — Autism spectrum disorders coverage (group and blanket plans); also § 3571R telehealth and § 3571V claim-submission time', url: 'https://delcode.delaware.gov/title18/c035/sc03/index.html' },
  pa35: { title: '18 Del. C. ch. 35, subch. V (§§ 3581–3587) — Pre-Authorization Transparency (as amended by 85 Del. Laws c. 176)', url: 'https://delcode.delaware.gov/title18/c035/sc05/index.html' },
  cap2026: { title: 'Delaware Department of Insurance — Autism Spectrum Disorders Coverage notice, 29 DE Reg. 880 (Apr. 1, 2026): 2026 ABA maximum benefit', url: 'https://regulations.delaware.gov/register/april2026/general/29%20DE%20Reg%20880%2004-01-26' },
  reg2102: { title: '16 Del. Admin. Code 2102 — Autism Service Providers (DHSS certification standards; 16 DE Reg. 1170, 05/01/13)', url: 'https://regulations.delaware.gov/AdminCode/title16/2102' },
  reg1307: { title: '18 Del. Admin. Code 1307 — Group Coordination of Benefits (5.2 birthday rule; 5.3 separated parents)', url: 'https://regulations.delaware.gov/AdminCode/title18/1300/1307' },
  reg1310: { title: '18 Del. Admin. Code 1310 — Standards for Prompt, Fair and Equitable Settlement of Claims for Health Care Services', url: 'https://regulations.delaware.gov/AdminCode/title18/1300/1310' },
  psych1: { title: '24 Del. C. ch. 35, subch. I — Psychology: § 3502 definitions ("practice of psychology" includes behavior analysis)', url: 'https://delcode.delaware.gov/title24/c035/sc01/index.html' },
  psych3: { title: '24 Del. C. ch. 35, subch. III — Psychology: § 3531 exemptions', url: 'https://delcode.delaware.gov/title24/c035/sc03/index.html' },
  ch30: { title: '24 Del. C. ch. 30 — Mental Health and Chemical Dependency Professionals (subchapters: counselors, chemical dependency, MFT, art therapists)', url: 'https://delcode.delaware.gov/title24/c030/index.html' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Delaware not listed)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (Network Participation Criteria, 8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026), incl. Delaware Regulatory Addendum', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (annual review 04/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABA, eff. July 2026; Delaware not listed)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumNNM: { title: 'Optum National Network Manual (BH02330, effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  hmAuth: { title: 'Highmark — List of Procedures/DME Requiring Authorization (eff. 10/01/2026; for PA, WV, DE & NY members)', url: 'https://providers.highmark.com/content/dam/highmark/en/providerresourcecenter/pdfs/procedurecode/commercial/Proc-Requiring-Auth-list.pdf' },
  hmBHPA: { title: 'Highmark — Behavioral Health: Upcoming Prior Authorization Changes (published Nov 24, 2025; eff. March 1, 2026)', url: 'https://providers.highmark.com/communications-hub/news-and-updates/behavioral-health-upcoming-prior-authorization-changes.html' },
  hm97153: { title: 'Highmark — Reimbursement Update: CPT 97153 for ABA Therapy in DE, PA and WV (published Aug 17, 2026; eff. Oct 16, 2026)', url: 'https://providers.highmark.com/communications-hub/news-and-updates/reimbursement-update-cpt-code-97153-for-aba-therapy-in-de-pa-wv.html' },
  hmRP046: { title: 'Highmark Reimbursement Policy RP-046 — Telemedicine and Telehealth Services (version 2026.09.01; PA, WV, DE, NY)', url: 'https://providers.highmark.com/content/dam/highmark/en/providerresourcecenter/pdfs/claims/reimbursement-policies/rp-046.pdf' },
};

/* ---- Shared Delaware commercial layer (same facts on every commercial guide) ---- */
const DE_MANDATE_BODY =
  'Delaware’s autism mandate is two parallel sections: 18 Del. C. § 3366 for individual plans and § 3570A for group and blanket plans. Each requires coverage "for the screening and diagnosis of autism spectrum disorders and the treatment of autism spectrum disorders in individuals less than 21 years of age," for plans delivered, issued or renewed in Delaware after December 11, 2012, and says coverage "shall not be denied on the basis that the treatment is habilitative or nonrestorative in nature." ABA is subject to "a maximum benefit of $36,000 per 12-month period per person," adjusted each April 1 by CPI-U, "but shall not be subject to any limits on the number of visits an individual may make to an autism services provider … regardless of the locations in which services are provided." The Insurance Commissioner’s 2026 notice sets that maximum at $38,601.65 per person from April 1, 2026 to March 31, 2027; payments for non-ABA autism treatment do not count toward it. Treatment must be "prescribed or ordered" by "a licensed physician or licensed psychologist who determines the care to be medically necessary." Except for inpatient care, the insurer may review ongoing treatment "not more than once every 12 months" unless it and the physician or psychologist agree to more, at the insurer’s cost. Payment is only required to autism services providers who meet DHSS’s certification standards, and a BCBA is deemed to meet them. The mandate does not change school or early-intervention obligations under an IEP, IFSP or 504 plan. It reaches fully insured plans; self-funded employer plans answer to ERISA and federal parity instead.';

const DE_LICENSURE_BODY =
  'Delaware does not license behavior analysts: the BACB’s state licensure table (2026) lists no Delaware law or board. The Board of Mental Health and Chemical Dependency Professionals (24 Del. C. ch. 30) licenses counselors, chemical dependency professionals, marriage and family therapists and art therapists, with no behavior-analyst subchapter. The credential rules that do exist come from the insurance mandate. Under 16 Del. Admin. Code 2102, a provider "currently certified as a BCBA or BCBA-D" is deemed qualified to provide ABA, and "Only people certified as a BCBA or BCBA-D or behavioral technicians who work under the supervision of a BCBA or BCBA-D" qualify. A BCaBA works under supervision. Technicians need a high school diploma or GED, background and abuse-registry checks, annual CPR, an ASD course, an ABA-principles course, competency-based training verified by the supervising BCBA (a current BCaBA meets this), and at least 10 hours of observed training before working one-on-one. BCBA supervision "shall not be less than 1.5:10 per week," with at least 1 hour a week when fewer than 10 hours of ABA are delivered. One open question: Delaware’s psychology act defines the practice of psychology to include "behavior analysis and therapy" (24 Del. C. § 3502), and § 3531(b) exempts "a qualified member of other recognized professions" who does not use a psychologist title. The statute does not name BCBAs, so ask the Division of Professional Regulation if this matters to you. On rates: commercial ABA rates are negotiated and mostly unpublished. The public benchmark is Delaware Medicaid’s ABA schedule (97153 $15.68 per 15 minutes base, $21.34–$31.82 with a modifier).';

const DE_TELEHEALTH_TAIL =
  ' For a fully insured Delaware plan, 18 Del. C. § 3571R requires coverage for services delivered by telemedicine, bars excluding a service "solely because the service is provided through telemedicine," and requires reimbursement "on the same basis and at least at the rate" paid in person. The originating site is the patient’s Delaware location, and insurers and providers "may agree to alternative siting arrangements." Self-funded employer plans are outside the statute.';

const DE_AUTH_BODY =
  'Depends on how the plan is funded. Delaware’s pre-authorization statute (18 Del. C. §§ 3581–3587, as amended by 85 Del. Laws c. 176) applies to state-regulated plans. A utilization review entity must decide a clean health-care-service request within 5 business days, or 3 business days if submitted electronically, and an urgent one within 48 hours (24 hours electronically). An approval "shall be valid for a period of time that is reasonable and customary for the specific service, but no less than 90 days," and a carrier "may not require more than 1 pre-authorization for an episode of care." It may not revoke an approval on medical-necessity grounds after the provider receives it. Members get at least 30 days to appeal, and the appeal is decided within 15 days. Read with the autism mandate, ongoing ABA may be reviewed "not more than once every 12 months" unless the insurer and the physician or psychologist agree otherwise. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours.';

const DE_COB_BODY =
  'For a child on two group plans, Delaware follows the birthday rule: "The benefits of the plan of the parent whose birthday falls earlier in a year are determined before those of the plan of the parent whose birthday falls later" (18 Del. Admin. Code 1307, 5.2.1); "birthday" means month and day only, and a tie goes to the plan that covered the parent longer. For separated or divorced parents, a court decree that makes one parent responsible controls; otherwise the custodial parent’s plan pays first, then the custodial parent’s spouse’s plan, then the non-custodial parent’s plan. That rule binds state-regulated group plans; a self-funded plan sets its own order. If the child also has Delaware Medicaid, this plan pays first: Medicaid is payer of last resort and pays "the lesser of patient responsibility or DMAP allowed amount minus TPL paid amount." TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).';

const DE_CLAIMS_BODY =
  'Two Delaware rules govern commercial claims. 18 Del. C. § 3571V says a carrier "shall permit a provider a minimum of 180 days from the date a covered service is rendered to submit a claim," whether or not the provider is in network (a contract may allow longer). Under 18 Del. Admin. Code 1310, "No more than 30 days after receipt of a clean claim" the carrier must pay it, pay part and explain the rest, deny it in writing, or make one written request for specific information; once that information arrives it has 15 days to act. The Commissioner can order interest on late payments. Both reach state-regulated plans and their administrators, not self-funded ERISA plans.';

const MANDATE_AGE_TAIL =
  ' For fully insured Delaware plans, 18 Del. C. §§ 3366 and 3570A require autism coverage "in individuals less than 21 years of age," and ABA may be capped at a CPI-adjusted maximum ($38,601.65 per person from April 1, 2026), with no visit limits. Self-funded ERISA plans are outside the statute.';

const MANDATE_REFERRAL_TAIL =
  ' For a fully insured Delaware plan, the mandate covers treatment "prescribed or ordered" by a licensed physician or licensed psychologist who determines it is medically necessary, so keep that order on file. Self-funded ERISA plans sit outside the statute.';

const DE_COMMERCIAL_GLANCE = [
  { label: 'State mandate', value: '18 Del. C. § 3366 (individual) and § 3570A (group), from SB 22 (2012)' },
  { label: 'Mandate age', value: 'Under 21 ("individuals less than 21 years of age")' },
  { label: 'Mandate caps', value: 'ABA maximum $36,000 per 12 months, CPI-adjusted: $38,601.65 per person from April 1, 2026 to March 31, 2027; no visit limits' },
  { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
  { label: 'Licensure', value: 'None: Delaware does not license behavior analysts; DHSS’s 16 Del. Admin. Code 2102 deems BCBAs qualified and sets technician and supervision standards' },
];

export const delawarePayers: Record<string, PayerConfig> = {
  'delaware-medicaid': {
    slug: 'delaware-medicaid',
    cardDesc: 'ABA is an EPSDT benefit under 21 (SPA 16-010), delivered almost entirely through three MCOs; DMAP pays ABA by degree-level modifier.',
    assessmentPA: {
      value: 'Depends on the plan. The state plan names no prior authorization for the assessment; it requires a medical/physical evaluation first. Nearly every member is in an MCO: Delaware First Health lists 97151 and 97152 as PA-required, and Highmark Health Options precertifies all outpatient behavioral health',
      status: 'plan-dependent',
      cites: [S.spa, S.dshp, S.dfhPA, S.hhoPM],
      verifyVia: 'The member’s MCO (AmeriHealth Caritas Delaware, Delaware First Health or Highmark Health Options); for a fee-for-service member, DMAP Provider Services through the Delaware Medical Assistance Portal.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'The state plan requires prior authorization when a treatment plan recommends more than 40 hours a week. Each MCO adds its own rules: Delaware First Health lists 97151–97158 as PA-required, Highmark Health Options precertifies all outpatient behavioral health, and AmeriHealth Caritas Delaware uses a behavioral health PA form',
      status: 'plan-dependent',
      cites: [S.spa, S.dfhPA, S.hhoPM, S.acdeBHPA],
      verifyVia: 'The member’s MCO utilization management line; for fee-for-service, DMAP Provider Services.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes. SPA 16-010 covers "treatment services for Medicaid recipients up to twenty-one (21) years of age who have a diagnosis of Autism Spectrum Disorder," and a medical/physical evaluation must show the services are medically necessary first',
      status: 'verified',
      cites: [S.spa],
    },
    payer: 'Delaware Medicaid (DMAP / Diamond State Health Plan)',
    state: 'DE', kind: 'state-medicaid',
    pill: 'Payer Guide · Delaware Medicaid',
    h1: 'Delaware Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Delaware Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Delaware Medicaid covers ABA: an EPSDT benefit for children under 21 under SPA 16-010, delivered through three Diamond State Health Plan MCOs (AmeriHealth Caritas Delaware, Delaware First Health, Highmark Health Options), DMAP’s modifier-tiered ABA rates, telehealth rules, and no state behavior-analyst license.',
    intro: [
      'Delaware Medicaid covers applied behavior analysis as an EPSDT benefit for members under 21. State Plan Amendment 16-010, approved by CMS on January 12, 2017 and effective October 1, 2016, added "Behavioral Services to Treat Autism Spectrum Disorder" to the plan, and says "All medically necessary services for children under the age of 21 will be furnished without limitation." Prior authorization is written into the state plan only for treatment plans over 40 hours a week.',
      'In practice the managed care plan on the card decides how ABA is authorized and paid. DHSS says Medicaid benefits come "mainly through a managed care organization," and Delaware contracts with three: AmeriHealth Caritas Delaware, Delaware First Health and Highmark Health Options. All three cover ABA. Their documents differ on how ABA relates to the 30-unit cap on children’s outpatient behavioral health, which is the first thing to confirm with the plan.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, through EPSDT for members under 21 (SPA 16-010)' },
      { label: 'Structure', value: 'Managed care: AmeriHealth Caritas Delaware, Delaware First Health, Highmark Health Options; fee-for-service for the few members outside an MCO' },
      { label: 'State-plan prior auth', value: 'Required for treatment plans over 40 hours a week; MCOs set their own PA rules below that' },
      { label: 'DMAP rates (per 15 min)', value: '97151/97152 $43.76 · 97153 $15.68 base ($21.34 HN, $31.25 HO, $31.82 HP) · 97155 $17.66 base ($26.31/$35.19/$36.55) · 97156 $31.25' },
      { label: 'Who may deliver', value: 'BCBA (independently); BCaBA under a BCBA; RBT under a BCaBA or BCBA; licensed LCSW, LPCMH, APN, MD/DO, PA, psychiatrist, psychologist' },
      { label: 'Licensure', value: 'None: Delaware does not license behavior analysts; the state plan relies on BACB certification' },
      { label: 'Other insurance', value: 'Medicaid pays last; bill the commercial plan first' },
    ],
    sections: [
      {
        h2: 'Where ABA sits: EPSDT under SPA 16-010',
        body: [
          'SPA 16-010 covers "Behavioral assessments and services to treat Autism Spectrum Disorder (ASD) pursuant to EPSDT … only to Medicaid beneficiaries under age twenty-one," as preventive services "recommended by a physician or other licensed practitioner of the healing arts." Before an ASD assessment or treatment, "the child must receive a medical / physical evaluation that indicates that ASD Assessment or ASD Treatment services are medically necessary." The behavioral assessment must use a validated instrument and be reviewed "no less frequently than every six months." The Behavioral Plan of Care must set measurable goals, the "amount, type, frequency, setting and duration" of treatment, and the caregiver’s role, though caregiver participation "is encouraged but not required." Services are "designed to be delivered primarily in the home or in other community settings." Aversive interventions, seclusion and restraints are prohibited. Total treatment "may only be the amount medically necessary," and "Plans that recommend more than 40 hours per week require prior authorization." Behavioral interventions for ASD carry no cost-sharing.',
        ],
        cites: [S.spa, S.memFaq],
      },
      {
        h2: 'Managed care: three MCOs, and the 30-unit question',
        body: [
          'DHSS contracts with AmeriHealth Caritas Delaware, Delaware First Health and Highmark Health Options, and "The Medicaid MCO provides almost all of the care for Medicaid members who join their plan." Each MCO limits outpatient behavioral health for members under 18 to 30 units or visits a year, with the Department of Services for Children, Youth and Their Families (DSCYF) responsible above that. How ABA fits that cap is described differently:',
        ],
        list: [
          { title: 'Highmark Health Options', desc: 'Its 2025 provider manual lists "Applied behavioral analysis (ABA)" among services it covers when medically necessary and "will not count … against the 30 units."' },
          { title: 'Delaware First Health', desc: 'Its benefits list says behavioral services to treat ASD for members under 21 "are not subjected to the 30-visit limit." Its CHIP (Delaware Healthy Children Program) table lists ASD services for members under 18 with a 30-unit limit.' },
          { title: 'AmeriHealth Caritas Delaware', desc: 'Its provider page says that after 30 units in a year, providers "should obtain a prior authorization and payment for future applied behavioral analysis (ABA) services from the Delaware Division of Developmental Disabilities Services (DDDS)." Its member page says it covers "the first 30 outpatient hours per year" of autism services, with hours above 30 through DSCYF.' },
        ],
        cites: [S.dshp, S.hhoPM, S.dfhBen, S.acdeBHprov, S.acdeBHmem],
      },
      {
        h2: 'What does Delaware Medicaid pay for ABA?',
        body: [
          'DMAP’s ABA Fee Schedule (effective November 1, 2022) prices ABA by modifier tier, per 15-minute unit. 97151 and 97152 pay $43.76 at HN, HO and HP alike. 97153 pays $15.68 without a modifier, $21.34 with HN, $31.25 with HO and $31.82 with HP. 97155 pays $17.66 without a modifier, $26.31 HN, $35.19 HO and $36.55 HP. 97156 pays $31.25 at every tier. 97154, 97157, 97158, 0362T and 0373T do not appear. The January 1, 2026 Physician Fee Schedule carries the same unmodified rates (97153 $15.68, 97155 $17.66, 97156 $31.25), so the 2022 rates are still current. The schedule does not say which credential bills which modifier; ask DMAP or the MCO before you bill. The state plan sets these rates from RBRVS where an RVU exists, and otherwise from comparable states’ Medicaid fees. MCOs pay contracted rates.',
        ],
        cites: [S.abaFS, S.pfs2026, S.spa],
      },
      {
        h2: 'Staffing, licensure and out-of-state BCBAs',
        body: [
          'SPA 16-010 lists who may deliver ASD services. Licensed LCSWs, LPCMHs, advanced practice nurses, MDs and DOs, physician assistants, psychiatrists and psychologists need no other certification. A BCBA "is not required to work under the supervision of a licensed practitioner." A BCaBA "can only provide ASD services under the supervision of a BCBA," and a Registered Behavior Technician "under the supervision of a BCaBA® or BCBA®," with supervision requirements "specified by the Behavioral Analyst Certification Board." Everyone except the RBT may do the assessment and plan of care, and the plan author should normally be the clinician who did the assessment. Delaware has no behavior-analyst license (the BACB table lists none), so certification is the credential. A BCBA based in another state still has to enroll: DMAP’s telehealth rules require providers at both ends to be enrolled with DMAP, to "Act within their scope of practice," to have an NPI and taxonomy, and to be located in the continental United States. MCO members also need the plan’s credentialing.',
        ],
        cites: [S.spa, S.bacbLic, S.pract],
      },
      {
        h2: 'Claims operations: filing limits, telehealth billing, appeals',
        body: [
          'Fee-for-service claims must reach DMAP "no later than twelve months from the date of service"; a claim already sent on time to Medicare or another primary carrier gets six months from that carrier’s decision. The MCOs are stricter: all three require first-time claims within 120 days of the date of service. AmeriHealth Caritas Delaware pays or denies 90% of clean claims within 30 days, and Delaware First Health 90% within 14 days. On telehealth, DMAP says "The same procedure codes and rates apply as for services delivered in person" and "Practitioners should use 02 Modifier as Place of Service for all telehealth charges"; MCO-credentialed providers follow the MCO’s billing rules. MCO members and providers have 60 days from a Notice of Adverse Benefit Determination to appeal (Delaware First Health and Highmark Health Options state this). No Delaware Medicaid document read says whether Electronic Visit Verification applies to ABA, or whose NPI goes on a technician’s claim.',
        ],
        cites: [S.gpm, S.acdePM, S.dfhBM, S.hhoPM, S.pract, S.dfhPM],
      },
    ],
    collect: [
      { title: 'Which Medicaid plan', desc: 'AmeriHealth Caritas Delaware, Delaware First Health, Highmark Health Options, or fee-for-service. The MCO runs authorization, credentialing and payment.' },
      { title: 'ASD diagnosis', desc: 'SPA 16-010 covers children under 21 with an ASD diagnosis.' },
      { title: 'Medical/physical evaluation', desc: 'Required before an ASD assessment or treatment, showing the services are medically necessary.' },
      { title: 'Planned weekly hours', desc: 'More than 40 hours a week needs prior authorization under the state plan; MCOs authorize below that too.' },
      { title: 'Other insurance', desc: 'Commercial coverage is billed first; Medicaid pays only what is left.' },
    ],
    sources: [S.spa, S.dshp, S.abaFS, S.pfs2026, S.gpm, S.pract, S.memFaq, S.hhoPM, S.dfhBen, S.dfhPA, S.dfhPM, S.dfhBM, S.acdePM, S.acdeBHprov, S.acdeBHmem, S.acdeBHPA, S.bacbLic, S.cfr438, S.cfr440, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'SPA 16-010: a BCBA may work without a licensed supervisor; a BCaBA "can only provide ASD services under the supervision of a BCBA®"; an RBT "can only provide ASD services under the supervision of a BCaBA® or BCBA®," with supervision requirements "specified by the Behavioral Analyst Certification Board." Unlicensed practitioners may work under a licensed practitioner who "regularly reviews the work performed," documented in writing. The state plan sets no numeric ratio.',
        status: 'verified',
        cites: [S.spa],
      },
      concurrentBilling: {
        value: 'Not addressed in any Delaware Medicaid source read. The ABA fee schedule lists 97153 and 97155 as separate lines but says nothing about billing them for the same clock time.',
        status: 'unverified',
        cites: [S.abaFS],
        verifyVia: 'DMAP Provider Services (Delaware Medical Assistance Portal) or the member’s MCO.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No unit cap. The state plan covers "the amount medically necessary for each child," says medically necessary services under 21 "will be furnished without limitation," and requires prior authorization for plans that recommend more than 40 hours a week.',
        status: 'verified',
        cites: [S.spa],
      },
      noteSignature: {
        value: 'The state plan requires a treatment plan that names "the individual providers responsible for delivering the services" and how often progress is reported, and DMAP’s telehealth rules require evaluations and progress notes "the same as if the documentation had originated during an in-person visit," including the mode. No source read says who signs each ABA session note or by when.',
        status: 'unverified',
        cites: [S.spa, S.pract],
        verifyVia: 'DMAP General Policy Manual (record-keeping) and Provider Services, or the member’s MCO.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'ASD treatment is "designed to be delivered primarily in the home or in other community settings." By telehealth, the member’s residence is an approved originating site (no originating-site fee), billed with "02 Modifier as Place of Service."',
        status: 'verified',
        cites: [S.spa, S.pract],
      },
      billAsProvider: {
        value: 'DMAP prices 97151–97156 by HN, HO and HP modifier, and its telehealth rules require enrolled providers with an NPI and taxonomy. No source read says whether a technician’s 97153 goes out under the technician’s or the supervising BCBA’s NPI, or which credential takes which modifier.',
        status: 'unverified',
        cites: [S.abaFS, S.pract],
        verifyVia: 'DMAP Provider Services or the member’s MCO: ask whose NPI renders 97153 and which modifier each credential bills.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. ASD services under SPA 16-010 "are provided only to Medicaid beneficiaries under age twenty-one."',
        status: 'verified',
        cites: [S.spa],
      },
      dxRecency: {
        value: 'No diagnosis-recency rule appears in the state plan. The dated requirements are a medical/physical evaluation before services start, and a behavioral assessment reviewed "no less frequently than every six months."',
        status: 'verified',
        cites: [S.spa],
      },
      diagnosingProviders: {
        value: 'The state plan does not name who may make the ASD diagnosis. It says services are "recommended by a physician or other licensed practitioner of the healing arts within his or her scope of practice."',
        status: 'unverified',
        cites: [S.spa],
        verifyVia: 'DMAP Provider Services or the member’s MCO utilization management line.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'No diagnostic instrument is named. The state plan requires the behavioral assessment (not the diagnosis) to use "a validated assessment instrument" and behavioral outcome tools.',
        status: 'unverified',
        cites: [S.spa],
        verifyVia: 'The member’s MCO: ask which diagnostic documentation it expects with the first request.',
        blocker: 'document',
      },
      referral: {
        value: 'Yes. Services must be "recommended by a physician or other licensed practitioner of the healing arts," and before an assessment or treatment "the child must receive a medical / physical evaluation that indicates that ASD Assessment or ASD Treatment services are medically necessary."',
        status: 'verified',
        cites: [S.spa],
      },
      telehealth: {
        value: 'DMAP covers telehealth for any covered State Plan service "that would typically be provided … in an in-person setting by an enrolled practitioner," and "Telehealth is not limited based on the diagnosed medical condition." The member’s place of residence is an approved originating site but gets no originating-site fee. "The same procedure codes and rates apply as for services delivered in person," billed with "02 Modifier as Place of Service." Telehealth needs no separate prior authorization beyond what the service already needs. Providers at both ends must be enrolled with DMAP, and the distant practitioner must be in the continental United States. MCO-credentialed providers follow the MCO’s billing procedures. The manual does not list ABA codes specifically.',
        status: 'verified',
        cites: [S.pract],
      },
      authTurnaround: {
        value: 'The state publishes no ABA decision timeframe. For fee-for-service, the federal floor applies: a standard request decided "in no case later than 7 calendar days after receiving the request," an expedited one within 72 hours. MCO members follow their plan’s clock: 42 CFR 438.210(d) caps standard decisions at 7 calendar days for rating periods starting on or after January 1, 2026.',
        status: 'verified',
        cites: [S.cfr440, S.cfr438],
      },
      coordinationOfBenefits: {
        value: 'Medicaid pays last: DMAP "can only pay after all other available insurance coverage has been billed first," and pays "the lesser of patient responsibility or DMAP allowed amount minus TPL paid amount." A claim sent on time to the primary carrier gets six months from that carrier’s decision even past the 12-month limit. The MCOs restate it: AmeriHealth Caritas Delaware wants the primary’s EOB within 60 days, and Highmark Health Options wants COB claims within 60 days of the primary’s adjudication.',
        status: 'verified',
        cites: [S.gpm, S.cfr433, S.acdePM, S.hhoPM],
      },
    },
    faq: [
      { q: 'Does Delaware Medicaid cover ABA therapy?', a: 'Yes, for members under 21 with an ASD diagnosis, as an EPSDT benefit under State Plan Amendment 16-010. Most children get it through their MCO: AmeriHealth Caritas Delaware, Delaware First Health or Highmark Health Options.' },
      { q: 'Does the 30-visit children’s behavioral health limit apply to ABA?', a: 'The plans describe it differently. Highmark Health Options says ABA is not counted against the 30 units, and Delaware First Health says ASD services under 21 are not subject to the 30-visit limit. AmeriHealth Caritas Delaware’s provider page says ABA after 30 units is authorized and paid by DDDS. Confirm with the plan before planning hours.' },
      { q: 'What does Delaware Medicaid pay for ABA?', a: 'Per 15 minutes: 97151 and 97152 $43.76; 97153 $15.68 without a modifier, $21.34 HN, $31.25 HO, $31.82 HP; 97155 $17.66, $26.31, $35.19 or $36.55; 97156 $31.25. These rates date from November 1, 2022 and appear unchanged on the January 2026 physician schedule. MCOs pay contracted rates.' },
      { q: 'Does a BCBA need a Delaware license?', a: 'No. Delaware does not license behavior analysts. Medicaid recognizes BACB-certified BCBAs, BCaBAs and RBTs. You still need DMAP enrollment and, for MCO members, the plan’s credentialing.' },
      { q: 'Can a BCBA in another state treat a Delaware Medicaid child by telehealth?', a: 'Delaware issues no BCBA license, so there is none to get. DMAP telehealth requires providers at both ends to be enrolled with DMAP, to act within their scope of practice, to have an NPI and taxonomy, and to be in the continental United States. MCO members also need the plan’s network credentialing. Bill with the in-person code and POS 02.' },
      { q: 'What is the timely filing limit for Delaware Medicaid ABA claims?', a: 'Twelve months from the date of service for fee-for-service DMAP. All three MCOs require claims within 120 days of the date of service.' },
    ],
  },

  'amerihealth-caritas-delaware': {
    slug: 'amerihealth-caritas-delaware',
    family: 'amerihealth',
    cardDesc: 'DSHP MCO that lists ABA among autism services; its pages disagree on the under-18 30-unit cap (DDDS vs DSCYF).',
    assessmentPA: {
      value: 'Not stated. The prior authorization guide does not name ABA and points to the online list; behavioral health requests use the plan’s BH Prior Authorization Request Form',
      status: 'unverified',
      cites: [S.acdePAG, S.acdeBHPA, S.acdePM],
      verifyVia: 'AmeriHealth Caritas Delaware behavioral health UM (BH PA form via NaviNet or fax 877-234-4273) or Provider Services, 1-855-707-5818: check 97151 and 97152.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Not stated for ABA codes in the provider manual or PA guide. The provider behavioral health page says ABA beyond 30 units for members under 18 needs prior authorization from DDDS',
      status: 'unverified',
      cites: [S.acdePAG, S.acdeBHPA, S.acdeBHprov],
      verifyVia: 'AmeriHealth Caritas Delaware behavioral health UM (fax 877-234-4273) or Provider Services, 1-855-707-5818: check 97153–97158, 0362T and 0373T.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes. The plan lists ABA among services "if you have autism spectrum disorder," and the state plan covers ASD services for members with an ASD diagnosis',
      status: 'verified',
      cites: [S.acdeBHmem, S.spa],
    },
    payer: 'AmeriHealth Caritas Delaware',
    state: 'DE', kind: 'medicaid-mco', parent: 'Delaware Medicaid (Diamond State Health Plan)',
    pill: 'Payer Guide · AmeriHealth Caritas · Delaware',
    h1: 'AmeriHealth Caritas Delaware ABA coverage: the intake guide.',
    metaTitle: 'AmeriHealth Caritas Delaware ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How AmeriHealth Caritas Delaware covers ABA for Delaware Medicaid members: autism services under EPSDT, the conflicting 30-unit and DDDS/DSCYF language, the behavioral health PA form, 120-day filing, and what intake should collect.',
    intro: [
      'AmeriHealth Caritas Delaware is one of the three Diamond State Health Plan MCOs. Its member benefits page lists "Applied behavior analysis" among autism services, alongside family counseling, parent training and speech, occupational and physical therapy. Its 2026 provider manual says nothing ABA-specific, and two of its web pages describe the yearly behavioral health cap for children under 18 differently.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, listed among autism services; state plan covers ASD services under 21' },
      { label: 'Under-18 cap', value: 'Provider page: 30 units/year, then ABA via DDDS. Member page: first 30 outpatient hours/year, then DSCYF' },
      { label: 'Prior auth', value: 'Not listed for ABA in the manual; BH PA form via NaviNet or fax 877-234-4273' },
      { label: 'Decision clock', value: 'Manual prints 10 calendar days; federal limit is 7 for rating periods from 1/1/2026' },
      { label: 'Timely filing', value: '120 days from date of service; primary EOB within 60 days' },
      { label: 'Licensure', value: 'None in Delaware; BACB certification governs' },
    ],
    sections: [
      {
        h2: 'Coverage and the 30-unit question',
        body: [
          'The member page lists ABA under "Autism services" and says AmeriHealth Caritas Delaware "covers the first 30 outpatient hours per year. Hours above 30 are provided through DSCYF." The provider behavioral health page says instead that the benefit for members under 18 "is limited to thirty (30) units per calendar year," after which "providers should obtain a prior authorization and payment for future applied behavioral analysis (ABA) services from the Delaware Division of Developmental Disabilities Services (DDDS)." The 2026 provider manual’s benefit table gives children "30 outpatient visits per year; visits above 30 are provided through" DSCYF and does not mention ABA. The pages differ on the unit (units, hours or visits) and on which agency picks up. The other two MCOs say ABA is outside the cap. Before planning a child’s hours, get the plan’s answer in writing.',
        ],
        cites: [S.acdeBHmem, S.acdeBHprov, S.acdePM],
      },
      {
        h2: 'Authorization, claims and appeals',
        body: [
          'Behavioral health authorization requests go on the plan’s Behavioral Health Prior Authorization Request Form, "via our NantHealth/Navinet provider portal system or fax … at 877-234-4273," with the treatment plan and progress notes. The provider manual says standard decisions come "no later than 10 calendar days after AmeriHealth Caritas Delaware receives the request" (plus up to 14 more), and expedited ones within three business days. In-network claims are due "within 120 days from the date of service," and claims with a primary insurer’s EOB "within 60 days of the date on the primary insurer’s EOB." The plan says it pays or denies 90% of clean claims within 30 calendar days and 99% within 90. A provider claim complaint may be filed up to 12 months from the date of service or 60 calendar days after the payment, denial or recoupment, whichever is later.',
        ],
        cites: [S.acdeBHPA, S.acdePM],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm AmeriHealth Caritas Delaware (DSHP) on the date of service.' },
      { title: 'ASD diagnosis + medical evaluation', desc: 'The state plan requires a medical/physical evaluation showing medical necessity before assessment or treatment.' },
      { title: 'Hours already used this year', desc: 'For children under 18, ask how many behavioral health units or hours are used, and who pays after 30.' },
      { title: 'Other insurance', desc: 'The plan pays last; bill the primary and send its EOB within 60 days.' },
    ],
    sources: [S.acdePM, S.acdeBHprov, S.acdeBHmem, S.acdeBHPA, S.acdePAG, S.spa, S.pract, S.dshp, S.cfr438, S.cfr433, S.bacbLic],
    deliveryRules: {
      supervision: {
        value: 'The plan publishes no ABA supervision rule of its own. The state plan applies: a BCBA may work independently, a BCaBA only under a BCBA, and an RBT only under a BCaBA or BCBA, with supervision requirements set by the BACB and no numeric ratio.',
        status: 'verified',
        cites: [S.acdePM, S.spa],
      },
      concurrentBilling: {
        value: 'Not addressed in the provider manual, and the state publishes no rule either.',
        status: 'unverified',
        cites: [S.acdePM],
        verifyVia: 'AmeriHealth Caritas Delaware Provider Services, 1-855-707-5818, or your provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No daily unit limit is published. The yearly cap for members under 18 is described inconsistently (30 units then DDDS for ABA on the provider page; first 30 outpatient hours then DSCYF on the member page). Under the state plan, more than 40 hours a week needs prior authorization.',
        status: 'plan-dependent',
        cites: [S.acdeBHprov, S.acdeBHmem, S.spa],
        verifyVia: 'AmeriHealth Caritas Delaware behavioral health UM: ask whether ABA counts toward the 30-unit limit and who authorizes ABA beyond it.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'The manual publishes no ABA session-note signature rule.',
        status: 'unverified',
        cites: [S.acdePM],
        verifyVia: 'AmeriHealth Caritas Delaware Provider Services, 1-855-707-5818, or the documentation standards in your provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'The plan publishes no ABA setting rule. Under the state plan, ASD treatment is "designed to be delivered primarily in the home or in other community settings."',
        status: 'verified',
        cites: [S.acdePM, S.spa],
      },
      billAsProvider: {
        value: 'The manual publishes no ABA-specific rendering or supervising-provider rule.',
        status: 'unverified',
        cites: [S.acdePM],
        verifyVia: 'Your AmeriHealth Caritas Delaware Provider Account Executive: ask whether RBT services are billed under the supervising BCBA’s NPI and which HN/HO/HP modifier applies.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21 under the state plan (ASD services "only to Medicaid beneficiaries under age twenty-one"); the plan publishes no different age rule.',
        status: 'verified',
        cites: [S.spa, S.acdeBHmem],
      },
      dxRecency: {
        value: 'Not stated by the plan or the state.',
        status: 'unverified',
        cites: [S.acdePM],
        verifyVia: 'AmeriHealth Caritas Delaware behavioral health UM: ask how recent the diagnostic evaluation must be.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Not stated by the plan; the state plan does not name who may diagnose.',
        status: 'unverified',
        cites: [S.acdePM, S.spa],
        verifyVia: 'AmeriHealth Caritas Delaware behavioral health UM.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'Not stated by the plan or the state.',
        status: 'unverified',
        cites: [S.acdePM],
        verifyVia: 'AmeriHealth Caritas Delaware behavioral health UM: ask which instruments it expects with the first request.',
        blocker: 'per-case',
      },
      referral: {
        value: 'The plan publishes nothing different from the state plan, which requires a recommendation from a physician or other licensed practitioner and a medical/physical evaluation showing medical necessity before assessment or treatment.',
        status: 'verified',
        cites: [S.acdePM, S.spa],
      },
      telehealth: {
        value: 'The manual lists telehealth among basic covered services and publishes no ABA telehealth rule, so the state rule applies: DMAP covers covered services by telehealth with "The same procedure codes and rates," POS 02, the member’s home as an approved originating site (no originating-site fee), and enrolled providers at both ends. MCO-credentialed providers follow the plan’s billing procedures.',
        status: 'verified',
        cites: [S.acdePM, S.pract],
      },
      authTurnaround: {
        value: 'The 2026 manual says standard decisions are due "no later than 10 calendar days" after receipt (extendable up to 14 more days), expedited ones within three business days. Federal law sets a lower ceiling for rating periods starting on or after January 1, 2026: standard decisions "may not exceed 7 calendar days."',
        status: 'plan-dependent',
        cites: [S.acdePM, S.cfr438],
        verifyVia: 'AmeriHealth Caritas Delaware UM: confirm whether the 7-day federal standard applies to your request.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: '"Medicaid HMOs, such as AmeriHealth Caritas Delaware, are always the payer of last resort." Bill the primary insurer first, then submit the claim with the primary’s EOB "within 60 days of the date on the primary insurer’s EOB."',
        status: 'verified',
        cites: [S.acdePM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does AmeriHealth Caritas Delaware cover ABA?', a: 'Yes. Its member benefits page lists applied behavior analysis among autism services. The state plan covers ASD services for members under 21.' },
      { q: 'What happens after 30 units for a child under 18?', a: 'The plan’s pages disagree. The provider page says to get prior authorization and payment for further ABA from DDDS after 30 units. The member page says the plan covers the first 30 outpatient hours and DSCYF covers the rest. Ask the plan in writing before planning hours.' },
      { q: 'How do I request ABA authorization from AmeriHealth Caritas Delaware?', a: 'Use the Behavioral Health Prior Authorization Request Form through NaviNet or fax 877-234-4273, with the treatment plan and progress notes.' },
      { q: 'What is AmeriHealth Caritas Delaware’s timely filing limit?', a: '120 days from the date of service for in-network claims. Claims with a primary insurer’s EOB are due within 60 days of the EOB date.' },
    ],
  },

  'highmark-health-options-delaware': {
    slug: 'highmark-health-options-delaware',
    family: 'bcbs',
    cardDesc: 'Highmark BCBSD’s Medicaid MCO: ABA needs precertification, is covered outside the under-18 30-unit cap, and follows Medical Policy MP-1045.',
    assessmentPA: {
      value: 'Yes. Highmark Health Options "requires precertification for all inpatient and outpatient BH services," and Medical Policy MP-1045 says for ABA "A prior authorization is required for members under the age of 18"',
      status: 'verified',
      cites: [S.hhoPM, S.hhoMP],
    },
    treatmentPA: {
      value: 'Yes: precertification for all outpatient behavioral health, faxed on the Request for Authorization form or called in to the BH team; MP-1045 requires PA for ABA for members under 18',
      status: 'verified',
      cites: [S.hhoPM, S.hhoMP],
    },
    dxRequired: {
      value: 'Yes. MP-1045 lists covered diagnoses F84.0, F84.3, F84.5, F84.8 and F84.9, and covers ASD treatment "prescribed or ordered for an individual diagnosed with" ASD by a licensed physician or licensed psychologist',
      status: 'verified',
      cites: [S.hhoMP],
    },
    payer: 'Highmark Health Options',
    state: 'DE', kind: 'medicaid-mco', parent: 'Delaware Medicaid (Diamond State Health Plan)',
    pill: 'Payer Guide · Highmark Health Options · Delaware',
    h1: 'Highmark Health Options ABA coverage in Delaware: the intake guide.',
    metaTitle: 'Highmark Health Options ABA Coverage & Prior Auth Guide (Delaware) | Carelu',
    metaDescription:
      'How Highmark Health Options covers ABA for Delaware Medicaid members: Medical Policy MP-1045, precertification for all outpatient behavioral health, ABA outside the under-18 30-unit cap, DHSS provider standards, 120-day filing, and what intake should collect.',
    intro: [
      'Highmark Health Options is the Medicaid MCO affiliated with Highmark Blue Cross Blue Shield Delaware, and one of the three Diamond State Health Plan plans. Its Medical Policy MP-1045 covers behavioral health treatment for ASD "pursuant to EPSDT," and its 2025 provider manual takes ABA out of the 30-unit yearly cap on outpatient behavioral health for members under 18.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under MP-1045 and EPSDT; not counted against the under-18 30-unit BH cap' },
      { label: 'Prior auth', value: 'Precertification for all outpatient BH; MP-1045: PA required for ABA under 18' },
      { label: 'Providers', value: 'BCBA or BCBA-D; behavioral technicians under them meeting DHSS standards' },
      { label: 'Treatment plan review', value: 'Plan may review once every 12 months' },
      { label: 'Timely filing', value: '120 calendar days from date of service; COB claims 60 days from primary adjudication' },
      { label: 'Licensure', value: 'None in Delaware; BACB certification governs' },
    ],
    sections: [
      {
        h2: 'Medical Policy MP-1045: what Highmark Health Options requires',
        body: [
          'MP-1045 (last revised October 26, 2022) says "HHO covers behavioral health services to treat autism spectrum disorders, pursuant to EPSDT," and for ABA "A prior authorization is required for members under the age of 18." It restates the Delaware mandate’s coverage to age 21 and its ban on "any limitations on number or location of visits by ABA providers." Treatment must be "prescribed or ordered for an individual diagnosed with" ASD "by a licensed physician or licensed psychologist who determines the care to be medically necessary." Providers must meet the DHSS certification regulation: "ABA providers must obtain national certification as a Board-Certified Behavior Analyst (BCBA) or Board-Certified Behavior Analyst – D (BCBA-D)," and behavioral technicians working under them must meet its criteria. The treatment plan must include ABA where applicable, and the plan "reserves the right to review the treatment plan once every 12 months." Codes 97151–97153, 97155 and 97156 are listed. Covered diagnoses are F84.0, F84.3, F84.5, F84.8 and F84.9. Payment follows the provider’s contract.',
        ],
        cites: [S.hhoMP, S.reg2102],
      },
      {
        h2: 'ABA and the 30-unit cap; authorization and claims',
        body: [
          'The 2025 provider manual limits outpatient behavioral health for members 17 and younger to "30 units (a unit is defined as one hour of service) per calendar year," with the Division of Prevention and Behavioral Health Services managing care beyond that. It then lists services covered when medically necessary that it "will not count … against the 30 units," including "Applied behavioral analysis (ABA)." Highmark Health Options "requires precertification for all inpatient and outpatient BH services"; fax the Request for Authorization form or call the BH team, with the treatment plan. Initial claims are due within "120 calendar days from the date of service." Corrected claims or review requests are due within 180 days of the initial remittance, and COB claims within 60 days of the primary carrier’s adjudication. Providers have 60 calendar days from a Notice of Adverse Benefit Determination to appeal a denied authorization, and 180 days from a post-service claim denial.',
        ],
        cites: [S.hhoPM],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Highmark Health Options (DSHP or DHCP) on the date of service.' },
      { title: 'Diagnosis + physician/psychologist order', desc: 'MP-1045 covers F84.0/F84.3/F84.5/F84.8/F84.9, with treatment ordered by a licensed physician or psychologist.' },
      { title: 'Treatment plan', desc: 'Needed for precertification; the plan may review it once every 12 months.' },
      { title: 'Staff credentials', desc: 'BCBA/BCBA-D, and technician records meeting the DHSS standards (training, background checks, CPR).' },
      { title: 'Other insurance', desc: 'The plan pays last; COB claims are due within 60 days of the primary’s adjudication.' },
    ],
    sources: [S.hhoMP, S.hhoPM, S.reg2102, S.spa, S.pract, S.dshp, S.cfr438, S.cfr433, S.bacbLic],
    deliveryRules: {
      supervision: {
        value: 'MP-1045 adopts the DHSS provider regulation: ABA by a BCBA or BCBA-D, with behavioral technicians working under their supervision who meet its criteria. That regulation (16 Del. Admin. Code 2102) sets BCBA supervision at "not … less than 1.5:10 per week," and at least 1 hour a week when fewer than 10 hours of ABA are delivered.',
        status: 'verified',
        cites: [S.hhoMP, S.reg2102],
      },
      concurrentBilling: {
        value: 'Not addressed in MP-1045 or the provider manual.',
        status: 'unverified',
        cites: [S.hhoMP, S.hhoPM],
        verifyVia: 'Highmark Health Options Provider Services or your provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No daily unit cap. MP-1045 restates the Delaware law’s ban on "any limitations on number or location of visits by ABA providers," and the 2025 manual keeps ABA outside the under-18 30-unit cap. Hours are set by precertification.',
        status: 'verified',
        cites: [S.hhoMP, S.hhoPM],
      },
      noteSignature: {
        value: 'MP-1045 requires the medical record to document the medical necessity criteria, subject to audit, but sets no session-note signature rule.',
        status: 'unverified',
        cites: [S.hhoMP],
        verifyVia: 'Highmark Health Options Provider Services or the documentation terms of your provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'MP-1045: ASD treatment "is typically an outpatient procedure," eligible as inpatient only in special circumstances such as a comorbid condition needing monitoring. The policy also notes the Delaware law bars limits on the location of ABA visits.',
        status: 'verified',
        cites: [S.hhoMP],
      },
      billAsProvider: {
        value: 'Neither MP-1045 nor the manual says whose NPI renders technician services.',
        status: 'unverified',
        cites: [S.hhoMP, S.hhoPM],
        verifyVia: 'Highmark Health Options Provider Services: ask whether RBT services bill under the supervising BCBA and which modifier applies.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21: MP-1045 says "The Delaware law mandates coverage to age 21," and the state plan covers ASD services under 21. The policy states the PA requirement for members under 18.',
        status: 'verified',
        cites: [S.hhoMP, S.spa],
      },
      dxRecency: {
        value: 'Not stated by the plan or the state.',
        status: 'unverified',
        cites: [S.hhoMP],
        verifyVia: 'Highmark Health Options behavioral health UM: ask how recent the diagnostic evaluation must be.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'MP-1045 requires treatment prescribed or ordered by a licensed physician or licensed psychologist; it does not separately name who may make the diagnosis.',
        status: 'unverified',
        cites: [S.hhoMP],
        verifyVia: 'Highmark Health Options behavioral health UM.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'No diagnostic instrument is named in MP-1045.',
        status: 'unverified',
        cites: [S.hhoMP],
        verifyVia: 'Highmark Health Options behavioral health UM: ask which documentation it expects with the first request.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Yes. Treatment must be "prescribed or ordered" by a licensed physician or licensed psychologist who determines it is medically necessary (MP-1045), on top of the state plan’s prior medical/physical evaluation.',
        status: 'verified',
        cites: [S.hhoMP, S.spa],
      },
      telehealth: {
        value: 'Highmark Health Options publishes no ABA telehealth rule, so the state rule applies: DMAP covers covered services by telehealth with "The same procedure codes and rates," POS 02, the member’s home as an approved originating site (no originating-site fee), and enrolled providers at both ends. MCO-credentialed providers follow the plan’s billing procedures.',
        status: 'verified',
        cites: [S.pract, S.hhoPM],
      },
      authTurnaround: {
        value: 'The 2025 manual publishes no standard decision timeframe for behavioral health precertification. The federal ceiling applies: for rating periods starting on or after January 1, 2026, standard decisions "may not exceed 7 calendar days," expedited ones 72 hours.',
        status: 'plan-dependent',
        cites: [S.hhoPM, S.cfr438],
        verifyVia: 'Highmark Health Options behavioral health team: ask its current turnaround for ABA precertification and reauthorization lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Highmark Health Options, "like Delaware’s DMMA, is the payer of last resort." Bill the primary carrier first; "All COB claims must be received within 60 calendar days from primary carrier’s adjudication date."',
        status: 'verified',
        cites: [S.hhoPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Highmark Health Options cover ABA?', a: 'Yes. Medical Policy MP-1045 covers behavioral health treatment for ASD under EPSDT, including ABA, and the Delaware coverage runs to age 21.' },
      { q: 'Does ABA count against the 30-unit behavioral health limit for children?', a: 'No. The 2025 provider manual lists ABA among services it will not count against the 30 units.' },
      { q: 'Does Highmark Health Options require prior authorization for ABA?', a: 'Yes. It precertifies all inpatient and outpatient behavioral health, and MP-1045 requires PA for ABA for members under 18.' },
      { q: 'What is the timely filing limit?', a: '120 calendar days from the date of service for initial claims; COB claims within 60 days of the primary carrier’s adjudication.' },
    ],
  },

  'delaware-first-health': {
    slug: 'delaware-first-health',
    family: 'centene',
    cardDesc: 'Centene’s DSHP plan: all ABA codes PA-required, ASD services under 21 outside the 30-visit limit, 7-day standard decisions.',
    assessmentPA: {
      value: 'Yes. Delaware First Health’s CMS-0057-F prior authorization list (eff. 12/31/2025) lists 97151 and 97152 under Applied Behavioral Analysis as requiring PA',
      status: 'verified',
      cites: [S.dfhPA],
    },
    treatmentPA: {
      value: 'Yes. The same list includes 97153, 97154, 97155, 97156, 97157 and 97158; 0362T and 0373T appear under behavioral health. Requests go through the Medicaid Pre-Auth tool, portal, fax or phone',
      status: 'verified',
      cites: [S.dfhPA, S.dfhPM],
    },
    dxRequired: {
      value: 'Yes. The plan covers "Behavioral services to treat autism spectrum disorder (ASD) pursuant to EPSDT" for members under 21',
      status: 'verified',
      cites: [S.dfhPM, S.spa],
    },
    payer: 'Delaware First Health',
    state: 'DE', kind: 'medicaid-mco', parent: 'Delaware Medicaid (Diamond State Health Plan)',
    pill: 'Payer Guide · Delaware First Health · Delaware',
    h1: 'Delaware First Health ABA coverage: the intake guide.',
    metaTitle: 'Delaware First Health ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Delaware First Health (Centene) covers ABA for Delaware Medicaid members: ASD services under EPSDT for members under 21, prior authorization on every ABA code, 7-day decisions, 120-day filing, telehealth, and what intake should collect.',
    intro: [
      'Delaware First Health, a Centene plan, is one of Delaware’s three Diamond State Health Plan MCOs. Its provider manual covers "Behavioral services to treat autism spectrum disorder (ASD) pursuant to EPSDT" for members under 21. Its benefits list says those services are not subject to the 30-visit limit on children’s outpatient behavioral health, and every ABA CPT code is on its prior authorization list.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, ASD services under EPSDT for members under 21' },
      { label: '30-visit limit', value: 'Not applied to ASD services under 21 (DSHP); the CHIP (DHCP) table shows a 30-unit limit under 18' },
      { label: 'Prior auth', value: 'Required: 97151–97158 (ABA) and 0362T/0373T (behavioral health)' },
      { label: 'Decision clock', value: 'Standard within 7 calendar days; expedited 72 hours' },
      { label: 'Timely filing', value: '120 calendar days from date of service' },
      { label: 'Licensure', value: 'None in Delaware; BACB certification governs' },
    ],
    sections: [
      {
        h2: 'Coverage and prior authorization',
        body: [
          'The 2025 provider manual (v11.2, August 2026) covers ASD behavioral services "pursuant to EPSDT" for members under 21, and lists "Autism Spectrum Disorders and Habilitative Services - diagnosis and treatment" among services that typically need prior authorization. The plan’s Medicaid benefits list says "Behavioral services to treat autism spectrum disorder (ASD) for members under age 21 are not subjected to the 30-visit limit" that applies to other outpatient behavioral health for children 17 and under. The Delaware Healthy Children Program (CHIP) table lists ASD services for members under 18 with "30 units outpatient behavioral health benefits," so check which program the child is in. The CMS-0057-F prior authorization list (effective 12/31/2025) lists 97151–97158 under Applied Behavioral Analysis, and 0362T and 0373T under behavioral health. Submit standard requests at least five business days before services start, through the Medicaid Pre-Auth tool, portal, fax or phone.',
        ],
        cites: [S.dfhPM, S.dfhBen, S.dfhPA],
      },
      {
        h2: 'Decisions, claims and credentialing',
        body: [
          'Standard pre-service decisions come "Within 7 calendar days," expedited ones within 72 hours, and concurrent reviews within 72 hours. Providers may appeal an adverse benefit determination in writing "within 60 days from the date of the Notice of Adverse Benefit Determination letter." First-time claims are due "no more than one hundred twenty (120) calendar days from the Date of Service." The plan adjudicates 90% of clean non-pharmacy claims within 14 calendar days and 99% within 60. Credentialing is "completely processed within 45 calendar days" of a complete file.',
        ],
        cites: [S.dfhPM, S.dfhBM],
      },
    ],
    collect: [
      { title: 'Member ID + program', desc: 'Confirm Delaware First Health and whether the child is in DSHP or the Delaware Healthy Children Program (CHIP), which lists a 30-unit limit.' },
      { title: 'ASD diagnosis + medical evaluation', desc: 'The state plan requires a medical/physical evaluation showing medical necessity first.' },
      { title: 'Treatment plan for PA', desc: 'Every ABA code needs prior authorization; submit at least five business days before services start.' },
      { title: 'Other insurance', desc: 'The plan pays last; send the primary’s EOB with the claim.' },
    ],
    sources: [S.dfhPM, S.dfhBM, S.dfhPA, S.dfhBen, S.spa, S.pract, S.dshp, S.cfr438, S.cfr433, S.bacbLic],
    deliveryRules: {
      supervision: {
        value: 'The plan publishes no ABA supervision rule of its own. The state plan applies: a BCBA may work independently, a BCaBA only under a BCBA, and an RBT only under a BCaBA or BCBA, with supervision requirements set by the BACB and no numeric ratio.',
        status: 'verified',
        cites: [S.dfhPM, S.spa],
      },
      concurrentBilling: {
        value: 'Not addressed in the provider or billing manual.',
        status: 'unverified',
        cites: [S.dfhPM, S.dfhBM],
        verifyVia: 'Delaware First Health Provider Services, 1-877-236-1341, or your provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No daily unit cap is published. ASD services for DSHP members under 21 are not subject to the 30-visit limit; hours are set by prior authorization, and the state plan requires PA above 40 hours a week.',
        status: 'verified',
        cites: [S.dfhBen, S.dfhPA, S.spa],
      },
      noteSignature: {
        value: 'The manuals publish no ABA session-note signature rule.',
        status: 'unverified',
        cites: [S.dfhPM, S.dfhBM],
        verifyVia: 'Delaware First Health Provider Services, 1-877-236-1341.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'The plan publishes no ABA setting rule. Under the state plan, ASD treatment is "designed to be delivered primarily in the home or in other community settings." For telehealth from the home, the plan does not pay the originating-site fee.',
        status: 'verified',
        cites: [S.dfhPM, S.spa],
      },
      billAsProvider: {
        value: 'The billing manual gives general rendering-provider claim fields but no ABA-specific rule on whose NPI renders technician services.',
        status: 'unverified',
        cites: [S.dfhBM],
        verifyVia: 'Delaware First Health Provider Services, 1-877-236-1341: ask whether RBT services bill under the supervising BCBA and which modifier applies.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21: the plan covers ASD services "pursuant to EPSDT" for members under age 21.',
        status: 'verified',
        cites: [S.dfhPM, S.spa],
      },
      dxRecency: {
        value: 'Not stated by the plan or the state.',
        status: 'unverified',
        cites: [S.dfhPM],
        verifyVia: 'Delaware First Health utilization management: ask how recent the diagnostic evaluation must be.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Not stated by the plan; the state plan does not name who may diagnose.',
        status: 'unverified',
        cites: [S.dfhPM, S.spa],
        verifyVia: 'Delaware First Health utilization management.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'Not stated by the plan or the state.',
        status: 'unverified',
        cites: [S.dfhPM],
        verifyVia: 'Delaware First Health utilization management: ask which instruments it expects with the first request.',
        blocker: 'per-case',
      },
      referral: {
        value: 'The plan publishes nothing different from the state plan, which requires a recommendation from a physician or other licensed practitioner and a medical/physical evaluation showing medical necessity before assessment or treatment.',
        status: 'verified',
        cites: [S.dfhPM, S.spa],
      },
      telehealth: {
        value: 'Delaware First Health "treats telehealth services with in-network providers in the same way as face-to-face visits," and "If the originating site is the member’s home, the originating site fee will not be paid." For the rest it refers providers to the Delaware Medicaid manual: same codes and rates as in person, POS 02, enrolled providers at both ends.',
        status: 'verified',
        cites: [S.dfhPM, S.pract],
      },
      authTurnaround: {
        value: 'Standard pre-service decisions "Within 7 calendar days," expedited within 72 hours (extendable up to 14 days in limited cases), concurrent review within 72 hours. Untimely decisions count as adverse benefit determinations.',
        status: 'verified',
        cites: [S.dfhPM, S.cfr438],
      },
      coordinationOfBenefits: {
        value: '"Delaware First Health, like all Medicaid programs, is always the payer of last resort." Bill the primary insurer first and send its EOB, EOP or rejection with the claim, or it pends or denies. When Medicaid would be the third payer, the claim must go on paper.',
        status: 'verified',
        cites: [S.dfhBM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Delaware First Health cover ABA?', a: 'Yes. It covers behavioral services to treat ASD under EPSDT for members under 21, and its benefits list says those services are not subject to the 30-visit children’s limit.' },
      { q: 'Does Delaware First Health require prior authorization for the ABA assessment?', a: 'Yes. Its prior authorization list includes 97151 and 97152 along with every ABA treatment code.' },
      { q: 'How long does Delaware First Health take to decide an ABA request?', a: 'Standard requests within 7 calendar days, expedited within 72 hours.' },
      { q: 'What is Delaware First Health’s timely filing limit?', a: '120 calendar days from the date of service for first-time claims.' },
    ],
  },

  'highmark-bcbs-delaware': {
    slug: 'highmark-bcbs-delaware',
    family: 'bcbs',
    cardDesc: 'Delaware’s Blue plan: every ABA code on Highmark’s auth list (Highmark Behavioral Health), 97153 PPO rate $15.73 from 10/16/2026.',
    assessmentPA: {
      value: 'Yes: 97151, 97152 and 0362T are on Highmark’s authorization list (effective 10/01/2026, "For PA, WV, DE & NY Members") under UM program Highmark Behavioral Health; Highmark notes "Some authorization requirements vary by member plan"',
      status: 'verified',
      cites: [S.hmAuth, S.hmBHPA],
    },
    treatmentPA: {
      value: 'Yes: 97153–97158 and 0373T (plus H0032 and H2019 under the same ABA category) are on the list, managed by Highmark Behavioral Health',
      status: 'verified',
      cites: [S.hmAuth],
    },
    dxRequired: {
      value: 'Yes for the mandate (autism spectrum disorder is the covered condition under 18 Del. C. §§ 3366/3570A). Highmark’s Delaware ABA medical policy could not be retrieved',
      status: 'plan-dependent',
      cites: [S.m3570A, S.hmAuth],
      verifyVia: 'Highmark Medical Policy Search (Delaware, commercial: V-37 Autism Spectrum Disorders) or the behavioral health number on the member’s card.',
      blocker: 'document',
    },
    payer: 'Highmark Blue Cross Blue Shield Delaware',
    state: 'DE', kind: 'commercial',
    pill: 'Payer Guide · Highmark BCBS · Delaware',
    h1: 'Highmark BCBS Delaware ABA coverage: the intake guide.',
    metaTitle: 'Highmark BCBS Delaware ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Highmark Blue Cross Blue Shield Delaware covers ABA: every ABA code on the authorization list since March 2026, the October 2026 97153 rate, telehealth at parity, Delaware’s under-21 autism mandate and CPI-adjusted cap, and what intake should verify.',
    intro: [
      'Highmark Blue Cross Blue Shield Delaware is the state’s Blue plan, and its Medicaid affiliate is Highmark Health Options. For commercial members, Highmark added all ten ABA codes to its prior authorization list on March 1, 2026. They are reviewed in-house by Highmark Behavioral Health, and the list applies to Delaware members.',
      'Under that sits Delaware’s autism mandate for fully insured plans: coverage under 21, a CPI-adjusted ABA maximum, and no visit limits. Establish funding type on every benefits check, because self-funded employer plans administered by Highmark follow their own plan documents.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, on fully insured plans under the Delaware mandate; self-funded plans per plan document' },
      { label: 'Who reviews ABA', value: 'Highmark Behavioral Health (in-house), via Availity' },
      ...DE_COMMERCIAL_GLANCE,
      { label: 'Fee schedule', value: 'Mostly in your contract; Highmark published 97153 for DE PPO at $15.73 (office and non-office) effective Oct 16, 2026' },
    ],
    sections: [
      {
        h2: 'Prior authorization in Delaware',
        body: [
          'Highmark announced in November 2025 that it would add 19 behavioral health codes to its prior authorization list on March 1, 2026, ABA among them. The list effective 10/01/2026, headed "For PA, WV, DE & NY Members," carries 0362T, 0373T, 97151, 97152, 97153, 97154, 97155, 97156, 97157 and 97158, plus H0032 and H2019, under "Applied Behavioral Analysis," with UM program "Highmark Behavioral Health." None is marked Gold Card Eligible. The list adds: "Some authorization requirements vary by member plan." Check the number on the card, Availity eligibility and benefits, or BlueExchange for out-of-area members.',
        ],
        cites: [S.hmBHPA, S.hmAuth],
      },
      {
        h2: 'What is Highmark’s fee schedule for ABA in Delaware?',
        body: [
          'Highmark’s commercial ABA rates are negotiated, with one published exception. On August 17, 2026 Highmark announced new reimbursement for CPT 97153 "across applicable Commercial products in Delaware (DE), Pennsylvania (PA), and West Virginia (WV)," effective October 16, 2026. For DE PPO the rate is $15.73 per 15-minute unit in and out of the office. Highmark says the update does not change eligibility, medical necessity criteria, authorization requirements, coverage policies or documentation expectations. Rates for other codes and other products are in your agreement. For comparison, Delaware Medicaid pays 97153 at $15.68 without a modifier.',
        ],
        cites: [S.hm97153, S.abaFS],
      },
      {
        h2: 'The Delaware mandate: what it guarantees',
        body: [DE_MANDATE_BODY],
        cites: [S.m3366, S.m3570A, S.cap2026],
      },
      {
        h2: 'Credentialing, licensure and out-of-state BCBAs',
        body: [DE_LICENSURE_BODY],
        cites: [S.bacbLic, S.ch30, S.reg2102, S.psych1, S.psych3, S.abaFS],
      },
      {
        h2: 'Claims: filing limit, payment clock, appeals',
        body: [DE_CLAIMS_BODY],
        cites: [S.m3570A, S.reg1310],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Delaware mandate applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Child’s age', desc: 'The mandate covers individuals under 21.' },
      { title: 'Physician or psychologist order', desc: 'The mandate covers treatment prescribed or ordered by a licensed physician or licensed psychologist.' },
      { title: 'ABA dollars used this plan year', desc: 'Fully insured plans may cap ABA at $38,601.65 per person (April 2026–March 2027).' },
      { title: 'Other coverage', desc: 'Second parent’s plan (birthday rule), Medicaid, TRICARE or CHAMPVA.' },
    ],
    sources: [S.hmAuth, S.hmBHPA, S.hm97153, S.hmRP046, S.m3366, S.m3570A, S.cap2026, S.pa35, S.reg2102, S.reg1307, S.reg1310, S.bacbLic, S.ch30, S.psych1, S.psych3, S.erisa, S.abaFS, S.gpm, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'Highmark’s Delaware ABA policy could not be retrieved. For fully insured plans, the mandate’s DHSS standards apply: BCBA supervision of behavioral technicians "shall not be less than 1.5:10 per week," with at least 1 hour a week when fewer than 10 hours of ABA are delivered (16 Del. Admin. Code 2102).',
        status: 'plan-dependent',
        cites: [S.reg2102, S.m3570A],
        verifyVia: 'Highmark Medical Policy Search (Delaware commercial V-37) or Highmark Behavioral Health; self-funded plans per plan document.',
        blocker: 'document',
      },
      concurrentBilling: {
        value: 'Not addressed in any Highmark Delaware source read.',
        status: 'unverified',
        cites: [S.hmAuth],
        verifyVia: 'Highmark Medical Policy Search (Delaware commercial V-37) or Highmark Provider Services.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No daily cap is published. On fully insured plans the mandate bars visit limits "regardless of the locations in which services are provided," but allows the ABA dollar maximum ($38,601.65 per person from April 1, 2026). Hours are set by authorization.',
        status: 'plan-dependent',
        cites: [S.m3570A, S.cap2026, S.hmAuth],
        verifyVia: 'Availity benefits check: confirm funding type and any ABA dollar maximum used to date.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not addressed in any Highmark Delaware source read.',
        status: 'unverified',
        cites: [S.hmAuth],
        verifyVia: 'Highmark Provider Manual (documentation standards) or your provider agreement.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'On fully insured plans the mandate covers ABA without visit limits "regardless of the locations in which services are provided," and does not affect school obligations under an IEP or 504 plan. Highmark pays telehealth with POS 02 or 10 under RP-046.',
        status: 'plan-dependent',
        cites: [S.m3570A, S.hmRP046],
        verifyVia: 'Highmark Behavioral Health or Availity: confirm the member’s plan covers ABA in the home, clinic, school or community setting.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Not addressed in any Highmark Delaware source read.',
        status: 'unverified',
        cites: [S.hmAuth],
        verifyVia: 'Highmark Provider Services: ask whose NPI renders technician 97153 and whether the BCBA goes in box 24J or 31.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Highmark’s Delaware ABA policy could not be retrieved.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.m3366, S.m3570A, S.cap2026],
        verifyVia: 'Availity benefits check: establish fully insured vs. self-funded, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not published in any Highmark Delaware source read.',
        status: 'unverified',
        cites: [S.hmAuth],
        verifyVia: 'Highmark Behavioral Health: ask what diagnostic documentation and dates it expects with the first request.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'Not published in any Highmark Delaware source read. The mandate covers treatment prescribed or ordered by a licensed physician or licensed psychologist.',
        status: 'unverified',
        cites: [S.m3570A, S.hmAuth],
        verifyVia: 'Highmark Medical Policy Search (Delaware commercial V-37) or Highmark Behavioral Health.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'Not published in any Highmark Delaware source read.',
        status: 'unverified',
        cites: [S.hmAuth],
        verifyVia: 'Highmark Medical Policy Search (Delaware commercial V-37) or Highmark Behavioral Health.',
        blocker: 'document',
      },
      referral: {
        value: 'Highmark requires prior authorization of every ABA code through Highmark Behavioral Health, not a referral.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.hmAuth, S.m3570A],
      },
      telehealth: {
        value: 'Highmark’s Telemedicine and Telehealth policy RP-046 (version 2026.09.01) covers Delaware commercial plans. It pays "All medically appropriate telehealth services rendered by network providers … at parity with comparable in-person services, subject to the member’s benefit plan," applies Delaware’s telemedicine mandate, and pays no originating-site access fee for a non-medical site such as the member’s home. It does not list ABA codes specifically.' + DE_TELEHEALTH_TAIL,
        status: 'plan-dependent',
        cites: [S.hmRP046, S.m3570A],
        verifyVia: 'Availity benefits check: confirm the plan covers ABA by telehealth and which POS (02 or 10) and modifier Highmark expects.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: DE_AUTH_BODY + ' Highmark said in November 2025 that it had cut average turnaround for urgent and non-urgent requests "from approximately five days to one day."',
        status: 'plan-dependent',
        cites: [S.pa35, S.m3570A, S.erisa, S.hmBHPA],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Delaware-regulated) or self-funded (ERISA), and whether you are submitting electronically.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: DE_COB_BODY,
        status: 'plan-dependent',
        cites: [S.reg1307, S.gpm, S.tricare, S.champva],
        verifyVia: 'Ask Highmark at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule).',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Highmark require prior authorization for ABA in Delaware?', a: 'Yes. Since March 1, 2026 all ABA codes, 97151 through 97158 plus 0362T and 0373T, are on Highmark’s authorization list for Delaware members, reviewed by Highmark Behavioral Health. Requirements can vary by plan.' },
      { q: 'What does Highmark pay for 97153 in Delaware?', a: 'For Delaware PPO, $15.73 per 15 minutes in or out of the office, effective October 16, 2026. Other rates are in your contract.' },
      { q: 'Does Delaware cap ABA benefits?', a: 'Fully insured plans may cap ABA at a CPI-adjusted maximum, $38,601.65 per person from April 1, 2026 to March 31, 2027, with no visit limits. The mandate covers individuals under 21. Self-funded plans follow their own documents.' },
      { q: 'Does a BCBA need a Delaware license to bill Highmark?', a: 'Delaware issues no behavior-analyst license. The mandate’s DHSS standard deems a BCBA qualified to provide ABA. Highmark still credentials you itself.' },
      { q: 'How long do I have to file a Highmark claim in Delaware?', a: 'Delaware law guarantees at least 180 days from the date of service on state-regulated plans, and a clean claim must be acted on within 30 days.' },
    ],
  },

  'aetna-delaware': {
    slug: 'aetna-delaware',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA guide + BH precert list + Delaware’s under-21 mandate with its CPI-adjusted ABA cap.',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: precertification through Availity or the number on the card; progress is re-evaluated every six months',
      status: 'verified',
      cites: [S.aetnaPrecert, S.aetnaGuide],
    },
    dxRequired: {
      value: 'Yes: a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) by an appropriate provider',
      status: 'verified',
      cites: [S.aetnaGuide],
    },
    payer: 'Aetna in Delaware',
    state: 'DE', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Delaware',
    h1: 'Aetna ABA coverage in Delaware: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Delaware: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Delaware families: the national ABA medical necessity guide, precertification, Delaware’s under-21 autism mandate and $38,601.65 ABA cap, credentialing without a state license, and what intake should verify.',
    intro: [
      'For an intake team in Delaware, an Aetna card means three layers. First is Aetna’s national ABA medical necessity guide. Second is Delaware’s autism mandate in 18 Del. C. §§ 3366 and 3570A. Third is the plan’s funding type, which decides whether the mandate applies at all. Aetna runs no Delaware Medicaid plan; DHSS’s three MCOs are AmeriHealth Caritas, Delaware First Health and Highmark Health Options.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per the national Aetna guide' },
      ...DE_COMMERCIAL_GLANCE,
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Delaware',
        body: [
          'Aetna’s ABA medical necessity guide (©2026) requires a DSM-5 ASD diagnosis "obtained by an appropriate provider," functional impairment "on a standardized scale of functioning in the past 12 months" at least one standard deviation below the mean (or a significant risk of harm), and a treatment plan with measurable targets. It lets the impairment level set the hours, with QHP direction at "1 to 2 hours per 10 hours of treatment by protocol," and re-evaluates progress every six months. Its only state exhibit is Maryland, so Delaware members get the national criteria plus the Delaware mandate. All ten ABA codes are on Aetna’s behavioral health precertification list.',
        ],
        cites: [S.aetnaGuide, S.aetnaPrecert, S.dshp],
      },
      {
        h2: 'The Delaware mandate: what it guarantees',
        body: [DE_MANDATE_BODY],
        cites: [S.m3366, S.m3570A, S.cap2026],
      },
      {
        h2: 'Credentialing, licensure and out-of-state BCBAs',
        body: [DE_LICENSURE_BODY],
        cites: [S.bacbLic, S.ch30, S.reg2102, S.psych1, S.psych3, S.abaFS],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA?',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) treats payment as a contract term: the "rates and compensation under your agreement are subject to the Aetna coding/claim edit policies," and with both an intermediary contract and a direct agreement, "your direct Aetna rates will apply unless we specifically notify you otherwise." A member whose benefits are exhausted cannot be charged "more than the contracted rate." For a public benchmark, Delaware Medicaid pays 97153 at $15.68 per 15 minutes without a modifier.',
        ],
        cites: [S.aetnaOM, S.abaFS],
      },
      {
        h2: 'Claims: filing limit, payment clock, appeals',
        body: [DE_CLAIMS_BODY],
        cites: [S.m3570A, S.reg1310],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Delaware mandate applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and evaluation date.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3).' },
      { title: 'Physician or psychologist order', desc: 'The Delaware mandate covers treatment prescribed or ordered by a licensed physician or psychologist.' },
      { title: 'Child’s age and ABA dollars used', desc: 'Mandate coverage runs under 21, with a $38,601.65 ABA maximum (April 2026–March 2027) on fully insured plans.' },
    ],
    sources: [S.aetnaGuide, S.aetnaCPB648, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.m3366, S.m3570A, S.cap2026, S.pa35, S.reg2102, S.reg1307, S.reg1310, S.bacbLic, S.ch30, S.psych1, S.psych3, S.erisa, S.abaFS, S.gpm, S.dshp, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s Network Participation Criteria (5/26) require ABA to be "provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board," with "A minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional "for each 10 hours of applied behavior analysis," and the supervisor "onsite with the child at least one hour a month." All staff "must meet state requirements." For fully insured Delaware plans the DHSS standard is higher: at least 1.5 hours of BCBA supervision per 10 hours a week (16 Del. Admin. Code 2102).',
        status: 'verified',
        cites: [S.aetnaNPC, S.reg2102],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA criteria.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day cap. Hours follow the guide’s severity table, with typical intensities of 10–25 hours a week for comprehensive and 1–20 for focused programs (typical, not caps). Fully insured Delaware plans may apply the mandate’s ABA dollar maximum ($38,601.65 per person from April 1, 2026) but no visit limits.',
        status: 'verified',
        cites: [S.aetnaGuide, S.m3570A, S.cap2026],
      },
      noteSignature: {
        value: 'Not addressed. Aetna sets treatment-plan content, not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'The participating-provider agreement and Aetna Behavioral Health documentation standards.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-neutral in Aetna’s guide; inpatient, residential or partial-hospitalization settings use that level of care’s criteria, and the guide expects coordination with the school. Delaware’s mandate bars visit limits "regardless of the locations in which services are provided" and leaves IEP obligations untouched.',
        status: 'verified',
        cites: [S.aetnaGuide, S.m3570A],
      },
      billAsProvider: {
        value: 'Services must be "provided directly or billed by" a licensed behavior analyst (in licensing states), a BCBA, or a licensed psychologist where in scope, unless mandates, plan documents or contracts say otherwise. Delaware has no behavior-analyst license, so the BCBA is the billing credential.',
        status: 'verified',
        cites: [S.aetnaGuide, S.bacbLic],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s guide sets no age cap; its age ranges are typical, not limiting.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.m3366, S.m3570A, S.cap2026],
        verifyVia: 'Live benefits verification: establish fully insured vs. self-funded ERISA, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis itself, but medical necessity requires functional impairment on a standardized scale administered in the past 12 months (at least one standard deviation below the mean) or a significant risk of harm.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'A DSM-5 ASD diagnosis by "an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)."',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosticTools: {
        value: 'The guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples). CPB 0648 covers the ASD diagnostic evaluation.',
        status: 'verified',
        cites: [S.aetnaGuide, S.aetnaCPB648],
      },
      referral: {
        value: 'Aetna’s guide requires no physician referral; it requires precertification of all ten ABA codes.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.m3570A],
      },
      telehealth: {
        value: 'Aetna’s provider manual (6/26) says Aetna Behavioral Health "offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out," and providers must "ensure that they have the proper licensure based on state requirements." Aetna’s current ABA telehealth code list is not public.' + DE_TELEHEALTH_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaOM, S.m3570A],
        verifyVia: 'Availity or the precertification line: ask whether the plan is fully insured in Delaware or a self-funded plan that opted out, and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: DE_AUTH_BODY + ' Aetna publishes no Delaware-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.pa35, S.m3570A, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Delaware-regulated) or self-funded (ERISA), and whether you are submitting electronically.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: DE_COB_BODY,
        status: 'plan-dependent',
        cites: [S.reg1307, S.gpm, S.tricare, S.champva],
        verifyVia: 'Ask Aetna at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule).',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Delaware?', a: 'Yes, under its national ABA guide for ASD, with Delaware’s mandate layered on for fully insured plans. Self-funded employer plans follow their own documents.' },
      { q: 'Is there an age or dollar limit on ABA in Delaware?', a: 'Delaware’s mandate covers individuals under 21 and lets fully insured plans cap ABA at a CPI-adjusted maximum: $38,601.65 per person from April 1, 2026 to March 31, 2027. Visits cannot be limited.' },
      { q: 'What does Aetna pay for ABA in Delaware?', a: 'Aetna publishes no ABA rates; payment follows your participation agreement. Delaware Medicaid’s 97153 base rate ($15.68 per 15 minutes) is the public benchmark.' },
      { q: 'Can a BCBA licensed in another state treat an Aetna member in Delaware?', a: 'Delaware issues no behavior-analyst license, so BACB certification is the credential, and DHSS’s standard deems a BCBA qualified. Aetna still requires its own credentialing and says telehealth providers must hold the licensure their state requires.' },
      { q: 'What is the timely filing limit for Aetna claims in Delaware?', a: 'Delaware law guarantees at least 180 days from the date of service on state-regulated plans; your Aetna agreement may allow longer.' },
    ],
  },

  'cigna-delaware': {
    slug: 'cigna-delaware',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + Delaware’s under-21 mandate; no PA on assessment codes; Evernorth’s DE addendum sets 180-day filing.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: completed assessment and treatment plan with the ABA Prior Authorization Form',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD under DSM-5-TR criteria; provisional or rule-out diagnoses do not count',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Delaware',
    state: 'DE', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Delaware',
    h1: 'Cigna / Evernorth ABA coverage in Delaware: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Delaware: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Delaware families: policy EN0499, no PA on assessments, Evernorth’s Delaware addendum (180-day filing, arbitration), Delaware’s under-21 mandate and ABA cap, and what intake should verify.',
    intro: [
      'For an intake team in Delaware, a Cigna card means three layers. First is Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide. Second is Delaware’s autism mandate. Third is the plan’s funding type, which decides whether the mandate applies. Evernorth also attaches a Delaware Regulatory Addendum to its provider agreements, setting a claim deadline and a state arbitration route.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      ...DE_COMMERCIAL_GLANCE,
      { label: 'Fee schedule', value: 'Not public — your ABA fee schedule is Exhibit A of your Evernorth Provider Agreement; Provider Services 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Delaware',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). Per the autism resource guide, "Prior authorization is no longer required for assessment … codes 97151, 97152, or 0362T with a diagnosis of autism, as long as the provider is independently licensed or a Board Certified Behavior Analyst" and the plan covers ABA. Treatment needs the completed assessment and treatment plan on the ABA Prior Authorization Form. "All ABA CPT codes are covered telehealth services." Neither document mentions Delaware, so the national criteria apply, with the state mandate on top for fully insured plans.',
        ],
        cites: [S.en0499, S.cignaARG],
      },
      {
        h2: 'Evernorth’s Delaware Regulatory Addendum',
        body: [
          'Evernorth’s Administrative Guidelines (September 2026) attach a Delaware addendum to provider agreements, which does not apply to self-funded plans. It requires claims "within one hundred eighty (180) days of the date the Covered Service was rendered." When Evernorth’s final reimbursement decision does not pay a claim in full, the provider may petition the Delaware Department of Insurance for arbitration "no later than sixty (60) days after the date of mailing" of that decision, after trying to resolve it informally first. The fee is $50 for claims of $1,000 or less and $100 otherwise. Evernorth must respond within 20 days, and the arbitrator decides within 45 days of the petition.',
        ],
        cites: [S.ebhAdmin],
      },
      {
        h2: 'The Delaware mandate: what it guarantees',
        body: [DE_MANDATE_BODY],
        cites: [S.m3366, S.m3570A, S.cap2026],
      },
      {
        h2: 'Credentialing, licensure and out-of-state BCBAs',
        body: [DE_LICENSURE_BODY],
        cites: [S.bacbLic, S.ch30, S.reg2102, S.psych1, S.psych3, S.abaFS],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth’s Administrative Guidelines say the Provider Agreement’s terms "include the reimbursement rates applicable to covered services," and refer ABA providers to "Exhibit A in your Provider Agreement" for the fee schedule and the list of reimbursable autism services. Virtual services carry modifier 95, which Evernorth says "will not change the reimbursement." Fee questions go to Provider Services, 800.926.2273. For a public benchmark, Delaware Medicaid pays 97153 at $15.68 per 15 minutes without a modifier.',
        ],
        cites: [S.ebhAdmin, S.abaFS],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Delaware mandate applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure, plus the date of the most recent diagnosis. Provisional or rule-out diagnoses do not count.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Physician or psychologist order', desc: 'The Delaware mandate covers treatment prescribed or ordered by a licensed physician or psychologist.' },
      { title: 'Child’s age and ABA dollars used', desc: 'Mandate coverage runs under 21, with a $38,601.65 ABA maximum (April 2026–March 2027) on fully insured plans.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.m3366, S.m3570A, S.cap2026, S.pa35, S.reg2102, S.reg1307, S.reg1310, S.bacbLic, S.ch30, S.psych1, S.psych3, S.erisa, S.abaFS, S.gpm, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'EN0499: case supervision by a BCBA, Licensed Behavior Analyst or independently licensed clinician with ABA training, at one to two hours of direct plus indirect supervision per ten hours of direct treatment; at 10 hours a week or less, at least one to two hours a week. For fully insured Delaware plans the DHSS floor also applies: not less than 1.5 hours of BCBA supervision per 10 hours a week (16 Del. Admin. Code 2102).',
        status: 'verified',
        cites: [S.en0499, S.reg2102],
      },
      concurrentBilling: {
        value: 'Only one provider may bill a unit of time, except 97153, 97154 and 97155 during direct supervision, when the BCBA or QHP directs the technician and both are face-to-face with the patient.',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap. All ABA bills in 15-minute units on 97151–97158, 0362T and 0373T only. Fully insured Delaware plans may apply the mandate’s ABA dollar maximum ($38,601.65 per person from April 1, 2026) but no visit limits.',
        status: 'verified',
        cites: [S.cignaARG, S.m3570A, S.cap2026],
      },
      noteSignature: {
        value: 'Each service needs its own record with start and end time, location, focus, intervention, who was present, service type, and the name, credential and signature of the provider who rendered it.',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'EN0499 has goals and data reported per setting (home, clinic, school, community); primarily educational or vocational services are not covered. Delaware’s mandate bars visit limits "regardless of the locations in which services are provided."',
        status: 'verified',
        cites: [S.en0499, S.m3570A],
      },
      billAsProvider: {
        value: 'Non-credentialed staff are billed under the supervising provider. On a CMS-1500 the rendering provider prints their name in box 31 and only a BCBA or other licensed provider goes in box 33; electronic claims use payer ID 62308.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap and says focused intervention "should not be restricted by age."' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.m3366, S.m3570A, S.cap2026],
        verifyVia: 'Live benefits verification: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs the date it was most recently made. The clocks run on data: the standardized instrument and baseline data within 60 days before treatment, and current data within 60 days of a continued-treatment request.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional licensed to practice independently whose board considers diagnosis within scope, applying DSM-5-TR criteria.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated, but it must be standardized and valid, completed in full, and the current edition ("must be the Vineland-3 vs. Vineland-II").',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral. Assessments need no PA with an autism diagnosis from an independently licensed provider or BCBA; treatment needs the PA form.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.m3570A],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services," and EN0499 allows in-person, telehealth or hybrid delivery chosen on clinical factors; the line-of-sight requirement does not apply to telehealth. Bill modifier 95.' + DE_TELEHEALTH_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ebhAdmin, S.m3570A],
      },
      authTurnaround: {
        value: DE_AUTH_BODY + ' Cigna/Evernorth publishes no Delaware-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.pa35, S.m3570A, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Delaware-regulated) or self-funded (ERISA).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: DE_COB_BODY,
        status: 'plan-dependent',
        cites: [S.reg1307, S.gpm, S.tricare, S.champva],
        verifyVia: 'Ask Cigna/Evernorth at benefits verification for the coordination-of-benefits order (and whether a self-funded plan uses the birthday rule).',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Delaware?', a: 'Yes, under EN0499 for ASD, with Delaware’s mandate layered on for fully insured plans. Self-funded employer plans follow their own documents.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in Delaware?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'What is Cigna’s timely filing limit in Delaware?', a: 'Evernorth’s Delaware addendum requires claims within 180 days of the date of service (it does not apply to self-funded plans).' },
      { q: 'How do I dispute an Evernorth payment decision in Delaware?', a: 'After trying to resolve it informally, petition the Delaware Department of Insurance for arbitration within 60 days of Evernorth’s final reimbursement decision. The fee is $50 for claims of $1,000 or less, $100 otherwise, and the decision comes within 45 days.' },
      { q: 'What does Cigna pay for ABA in Delaware?', a: 'Cigna publishes no ABA rates; your fee schedule is Exhibit A of your Evernorth Provider Agreement (Provider Services 800.926.2273). Delaware Medicaid’s 97153 base rate ($15.68 per 15 minutes) is the public benchmark.' },
    ],
  },

  'unitedhealthcare-delaware': {
    slug: 'unitedhealthcare-delaware',
    family: 'unitedhealthcare',
    cardDesc: 'Optum ABA criteria + Delaware’s under-21 mandate; no Delaware state supplement, no Delaware Medicaid plan.',
    assessmentPA: {
      value: 'Required: Optum’s ABA criteria require prior authorization for ABA "unless otherwise specified or mandated by contract or law"',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required; continued-service review looks at use below 80% of authorized hours',
      status: 'verified',
      cites: [S.optumSCC],
    },
    dxRequired: {
      value: 'Yes: DSM-5-TR ASD confirmed with at least one clinically validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Delaware',
    state: 'DE', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Delaware',
    h1: 'UnitedHealthcare / Optum ABA coverage in Delaware: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Delaware: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Delaware families: Optum’s ABA criteria, the three-code telehealth list, credential modifiers, Delaware’s under-21 autism mandate and ABA cap, and what intake should verify.',
    intro: [
      'For an intake team in Delaware, a UnitedHealthcare card means three layers. First is Optum Behavioral Health’s national ABA criteria. Second is Delaware’s autism mandate. Third is the plan’s funding type, which decides whether the mandate applies. UnitedHealthcare is not one of Delaware’s three Medicaid MCOs, so a UHC card here is commercial (or Medicare).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      ...DE_COMMERCIAL_GLANCE,
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Delaware',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (annual review 04/2026). Prior authorization is required, and continued-service review asks why use fell below 80% of authorized hours. Optum’s ABA State Mandates supplement (July 2026) has entries for Arizona, California, Connecticut, Florida, Kentucky, Maryland, Massachusetts, New Jersey, New York, Ohio, Pennsylvania and Virginia (some for Medicaid only). Delaware is not there, so no Delaware-specific criteria modify the commercial policy beyond the statute itself. DHSS’s Medicaid MCOs are AmeriHealth Caritas, Delaware First Health and Highmark Health Options.',
        ],
        cites: [S.optumSCC, S.optumSM, S.dshp],
      },
      {
        h2: 'The Delaware mandate: what it guarantees',
        body: [DE_MANDATE_BODY],
        cites: [S.m3366, S.m3570A, S.cap2026],
      },
      {
        h2: 'Credentialing, licensure and out-of-state BCBAs',
        body: [DE_LICENSURE_BODY],
        cites: [S.bacbLic, S.ch30, S.reg2102, S.psych1, S.psych3, S.abaFS],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA?',
        body: [
          'UnitedHealthcare publishes no ABA rate table; Optum pays from the contract. Optum’s National Network Manual defines the "Fee Maximum" as "The maximum amount a participating provider may be paid for a specific health care service provided to a member," and says "Reimbursement to clinicians is based upon licensure rather than degree." Optum’s commercial ABA Reimbursement Policy (2022RP501A) puts the credential on every line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or clinician, and HP for a doctoral-level provider. It notes state requirements "may supplement, modify or supersede" it. For a public benchmark, Delaware Medicaid pays 97153 at $15.68 per 15 minutes without a modifier.',
        ],
        cites: [S.optumNNM, S.optumReimb, S.abaFS],
      },
      {
        h2: 'Claims: filing limit, payment clock, appeals',
        body: [DE_CLAIMS_BODY],
        cites: [S.m3570A, S.reg1310],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Delaware mandate applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2 and others).' },
      { title: 'Physician or psychologist order', desc: 'The Delaware mandate covers treatment prescribed or ordered by a licensed physician or psychologist.' },
      { title: 'Child’s age and ABA dollars used', desc: 'Mandate coverage runs under 21, with a $38,601.65 ABA maximum (April 2026–March 2027) on fully insured plans.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumNNM, S.optumReimb, S.dshp, S.m3366, S.m3570A, S.cap2026, S.pa35, S.reg2102, S.reg1307, S.reg1310, S.bacbLic, S.ch30, S.psych1, S.psych3, S.erisa, S.abaFS, S.gpm, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'Optum’s criteria require direct case supervision of 1–2 hours for every 10 hours of direct treatment a week; technicians work under a BCBA or licensed clinician and should be RBTs or otherwise certified, and Optum does not recommend parents as RBTs for their own child. For fully insured Delaware plans the DHSS floor applies: not less than 1.5 hours of BCBA supervision per 10 hours a week (16 Del. Admin. Code 2102).',
        status: 'verified',
        cites: [S.optumSCC, S.reg2102],
      },
      concurrentBilling: {
        value: 'Not addressed. The criteria define direct case supervision as happening during direct treatment but do not state the billing consequence.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual and the participating-provider agreement, or a written coding determination from Optum.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap; hours must be justified by documented need, and use below 80% of authorized hours must be explained at review. Fully insured Delaware plans may apply the mandate’s ABA dollar maximum ($38,601.65 per person from April 1, 2026) but no visit limits.',
        status: 'verified',
        cites: [S.optumSCC, S.m3570A, S.cap2026],
      },
      noteSignature: {
        value: 'Not addressed. The criteria set what must be documented for coverage, not who signs a session note or when.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual (documentation standards) and the participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'ABA is provided at the least restrictive appropriate level. Not covered: services that are not ABA, "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA; school coordination is covered.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      billAsProvider: {
        value: 'Every line carries the rendering credential: HM (RBT), HN (BCaBA), HO (master’s-level BCBA or licensed clinician), HP (doctoral level), under Optum’s commercial ABA Reimbursement Policy.',
        status: 'verified',
        cites: [S.optumReimb],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Optum’s criteria carry no age criterion; the benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.m3366, S.m3570A, S.cap2026],
        verifyVia: 'Provider Express benefits check: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with validated tools. Progress is reassessed over 6-month periods, and use below 80% of authorized hours triggers review.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'A state-licensed physician, psychologist or other licensed clinician qualified to diagnose under DSM-5-TR.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool, such as ADI-R or ADOS/ADOS-2 (the criteria list screening and diagnostic instruments, non-exhaustively).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral; the criteria require prior authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.m3570A],
      },
      telehealth: {
        value: 'Optum’s telehealth guide (updated September 2025) allows only three ABA codes by telehealth: 97155, 97156 and 97157, "the virtual supervision of ABA Behavior Technicians and Family Training and Guidance." Bill POS 10 (home) or 02 (elsewhere). So 97151 and 97153 are not on Optum’s list.' + DE_TELEHEALTH_TAIL + ' Ask Optum how it applies the three-code list to a fully insured Delaware plan.',
        status: 'plan-dependent',
        cites: [S.optumTele, S.m3570A],
        verifyVia: 'Optum Provider Express: confirm funding type and whether a fully insured Delaware plan pays ABA codes beyond 97155–97157 by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: DE_AUTH_BODY + ' UnitedHealthcare/Optum publishes no Delaware-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.pa35, S.m3570A, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Delaware-regulated) or self-funded (ERISA).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: DE_COB_BODY,
        status: 'plan-dependent',
        cites: [S.reg1307, S.gpm, S.tricare, S.champva],
        verifyVia: 'Ask UnitedHealthcare/Optum at benefits verification for the coordination-of-benefits order (and whether a self-funded plan uses the birthday rule).',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Delaware?', a: 'Yes, under Optum’s ABA criteria for ASD, with Delaware’s mandate layered on for fully insured plans. Self-funded employer plans follow their own documents.' },
      { q: 'Does Optum have Delaware-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement (July 2026) does not list Delaware.' },
      { q: 'Is UnitedHealthcare a Delaware Medicaid plan?', a: 'No. Delaware’s Medicaid MCOs are AmeriHealth Caritas Delaware, Delaware First Health and Highmark Health Options.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in Delaware?', a: 'Optum’s guide allows only 97155, 97156 and 97157 by telehealth, billed POS 10 or 02. Fully insured Delaware plans are also subject to 18 Del. C. § 3571R, which bars excluding a service solely because it is delivered by telemedicine, so ask Optum how it applies the list to your plan.' },
      { q: 'What does UnitedHealthcare pay for ABA in Delaware?', a: 'UnitedHealthcare/Optum publishes no ABA rates. You are paid up to the Fee Maximum in your Optum agreement, with a credential modifier on each line (HM RBT, HN BCaBA, HO BCBA, HP doctoral). Delaware Medicaid’s 97153 base rate ($15.68 per 15 minutes) is the public benchmark.' },
    ],
  },
};

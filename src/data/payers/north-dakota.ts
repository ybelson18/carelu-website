import type { PayerConfig, PayerSource } from './types.js';

/* North Dakota — researched October 2026 from primary sources only.
   hhs.nd.gov, ndlegis.gov, insurance.nd.gov and bcbsnd.com all answered plain curl with a
   browser user agent. Two things the brief assumed turned out differently, and the guides
   say so plainly:
   - N.D.C.C. § 26.1-36-09.15 is the TELEHEALTH coverage section, not an autism mandate.
     North Dakota has no autism insurance statute (a full read of ch. 26.1-36 finds none);
     what binds insured plans is Insurance Department Bulletin 2018-1 (July 10, 2018).
   - Behavior analysts are licensed under N.D.C.C. ch. 43-64 by the State Board of
     Integrative Health Care (license required from January 1, 2020), not under ch. 43-32;
     ch. 43-32 (psychologists) only supplies the grandfather route.
   ND Medicaid covers ABA through age 20 only, and Medicaid Expansion members aged 19–20 are
   enrolled in traditional Medicaid, so the Expansion MCO (Blue Cross Blue Shield of North
   Dakota, adults 21+) carries no ABA benefit: no MCO guide is built. */

const S: Record<string, PayerSource> = {
  abaPol: { title: 'ND Medicaid Policy and Procedures for the Autism Applied Behavior Analysis Service (revision February 2025; supersedes September 2017, June 1, 2018, July 2023)', url: 'https://www.hhs.nd.gov/sites/www/files/documents/autism-aba-service-policy-and-procedures.pdf' },
  cfsPage: { title: 'ND Health and Human Services — Children’s Waiver Services (Medicaid ABA service; Autism Spectrum Disorder Birth through Age 20 Waiver)', url: 'https://www.hhs.nd.gov/cfs/autism-services' },
  profFee: { title: 'ND Medicaid Professional Services Fee Schedule (data updated as of August 1, 2026; Autism category lines)', url: 'https://www.hhs.nd.gov/sites/default/files/documents/rate-2026-august-professional-fee-schedule.xlsx' },
  aut2025: { title: 'ND Medicaid Autism Services Fee Schedule as of 7/1/2025 (archived)', url: 'https://www.hhs.nd.gov/sites/default/files/documents/website-archive/medical-services/rate-autism-2025-fee-schedule-archive.pdf' },
  feePage: { title: 'ND HHS — Rates and Fee Schedules', url: 'https://www.hhs.nd.gov/healthcare/medicaid/provider/fee-schedules' },
  manuals: { title: 'ND HHS — Provider Guidelines, Manuals and Policies (ND Medicaid Billing and Policy Manual chapters)', url: 'https://www.hhs.nd.gov/healthcare/medicaid/provider/manuals-and-guidelines' },
  tele: { title: 'ND Medicaid Billing and Policy Manual — Telehealth (updated October 2025)', url: 'https://www.hhs.nd.gov/sites/default/files/documents/medicaid-policies/telehealth.pdf' },
  tf: { title: 'ND Medicaid Billing and Policy Manual — Timely Filing (updated October 2025)', url: 'https://www.hhs.nd.gov/sites/default/files/documents/medicaid-policies/timely-filing-policy.pdf' },
  tpl: { title: 'ND Medicaid Billing and Policy Manual — Third Party Liability (updated January 2026)', url: 'https://www.hhs.nd.gov/sites/default/files/documents/medicaid-policies/third-party-liability-tpl.pdf' },
  claims: { title: 'ND Medicaid Billing and Policy Manual — Claims Guidance (updated July 2026)', url: 'https://www.hhs.nd.gov/sites/default/files/documents/medicaid-policies/claims-guidance.pdf' },
  sa: { title: 'ND Medicaid Billing and Policy Manual — Service Authorizations (updated January 2026)', url: 'https://www.hhs.nd.gov/sites/www/files/documents/medicaid-policies/service-authorizations.pdf' },
  evv: { title: 'ND Medicaid Billing and Policy Manual — Electronic Visit Verification (updated October 2025)', url: 'https://www.hhs.nd.gov/sites/default/files/documents/medicaid-policies/electronic-visit-verification.pdf' },
  elig: { title: 'ND Medicaid Billing and Policy Manual — Member Eligibility (updated July 2026)', url: 'https://www.hhs.nd.gov/sites/default/files/documents/medicaid-policies/member-eligibility.pdf' },
  school: { title: 'ND Medicaid Billing and Policy Manual — School-Based Services (updated July 2026)', url: 'https://www.hhs.nd.gov/sites/www/files/documents/medicaid-policies/school-based-medicaid.pdf' },
  penroll: { title: 'ND Medicaid Billing and Policy Manual — Provider Enrollment', url: 'https://www.hhs.nd.gov/sites/default/files/documents/medicaid-policies/provider-enrollment.pdf' },
  provreq: { title: 'ND Medicaid Billing and Policy Manual — Provider Requirements (updated October 2025)', url: 'https://www.hhs.nd.gov/sites/default/files/documents/medicaid-policies/provider-requirements.pdf' },
  bhrehab: { title: 'ND Medicaid Billing and Policy Manual — Behavioral Health Rehabilitative Services (updated March 2026)', url: 'https://www.hhs.nd.gov/sites/default/files/documents/medicaid-policies/behavioral-health-rehabilitative-services.pdf' },
  covsvc: { title: 'ND Medicaid Billing and Policy Manual — Medicaid Covered Services (updated October 2025)', url: 'https://www.hhs.nd.gov/sites/default/files/documents/medicaid-policies/medicaid-covered-services.pdf' },
  oos: { title: 'ND Medicaid Billing and Policy Manual — Out-of-State Services (updated January 2026)', url: 'https://www.hhs.nd.gov/sites/www/files/documents/medicaid-policies/out-of-state-services.pdf' },
  asdWaiver: { title: 'Application for 1915(c) HCBS Waiver ND.0842.R03.01 — Autism Spectrum Disorder (ASD) Birth through Twenty (approved effective 11/01/2025)', url: 'https://www.hhs.nd.gov/sites/default/files/documents/autism-spectrum-disorder-waiver-exclusion.pdf' },
  c4364: { title: 'N.D.C.C. ch. 43-64 — Behavior Analysts (license required from January 1, 2020; State Board of Integrative Health Care)', url: 'https://ndlegis.gov/cencode/t43c64.pdf' },
  c4357: { title: 'N.D.C.C. ch. 43-57 — State Board of Integrative Health Care', url: 'https://ndlegis.gov/cencode/t43c57.pdf' },
  ndac112: { title: 'N.D. Admin. Code ch. 112-05-01 — Behavior Analysts (licensure, endorsement, exemptions; effective January 1, 2021)', url: 'https://ndlegis.gov/api/acdata/pdf/112-05-01.pdf' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (North Dakota: 2011, ND Board of Integrative Health Care)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  bull2018: { title: 'ND Insurance Department Bulletin 2018-1 — Coverage of Treatments for Autism Spectrum Disorder (July 10, 2018)', url: 'https://www.insurance.nd.gov/sites/www/files/documents/Bulletins/2018/20180711%20Bulletin%202018-1.pdf' },
  doiNews: { title: 'ND Insurance Department — Insurance Commissioner Issues Bulletin Supporting Treatments for Autism Spectrum Disorder (July 11, 2018)', url: 'https://www.insurance.nd.gov/news/insurance-commissioner-issues-bulletin-supporting-treatments-autism-spectrum-disorder' },
  c2636: { title: 'N.D.C.C. ch. 26.1-36 — Accident and Health Insurance (26.1-36-09.15 telehealth; 26.1-36-10 coordination of benefits; 26.1-36-37.1 claim payment time limits)', url: 'https://ndlegis.gov/cencode/t26-1c36.pdf' },
  pa3612: { title: 'N.D.C.C. ch. 26.1-36.12 — Prior Authorization for Health Insurance', url: 'https://ndlegis.gov/cencode/t26-1c36-12.pdf' },
  cob: { title: 'N.D. Admin. Code ch. 45-08-01.2 — Coordination of Benefits Regulation', url: 'https://ndlegis.gov/api/acdata/pdf/45-08-01.2.pdf' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  aetnaCPB: { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; Exhibit A covers Maryland only)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (Network Participation Criteria, 8100606-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  aetnaTele: { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026; HealthPartners network arrangement and North Dakota regulatory addendum)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA; North Dakota not listed)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, history through June 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumNNM: { title: 'Optum National Network Manual (BH02330, effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  bcPM: { title: 'Blue Cross Blue Shield of North Dakota — Provider Manual (BND-22-0074565, 8-26)', url: 'https://www.bcbsnd.com/content/dam/bcbsnd/documents/manuals/provider-manual-full.pdf' },
  bcPA: { title: 'BCBSND — Prior Authorization (Provider): code search tool, Availity, migrated vs non-migrated members', url: 'https://www.bcbsnd.com/providers/policies-precertification/prior-authorization' },
  bcMigPA: { title: 'BCBSND — Commercial Migrated Member Prior Authorization List (members migrated from Jan. 1, 2027)', url: 'https://www.bcbsnd.com/providers/policies-precertification/commercial-prior-authorization-list' },
  bcTele: { title: 'BCBSND — Provider Guide to Telehealth Services', url: 'https://www.bcbsnd.com/providers/eligibility-claims/provider-guide-to-telehealth-services' },
  bcMEPM: { title: 'BCBSND — Medicaid Expansion Provider Manual (BND-21-0027967, 6-26)', url: 'https://www.bcbsnd.com/content/dam/bcbsnd/documents/manuals/Medicaid-Expansion-Provider-Manual.pdf' },
};

/* ---- Shared North Dakota commercial layer (same facts on every commercial guide) ---- */
const ND_COVERAGE_BODY =
  'North Dakota has no autism insurance statute: chapter 26.1-36 of the Century Code, the accident and health insurance chapter, contains no autism or ABA section (§ 26.1-36-09.15, sometimes cited as the autism mandate, is the telehealth coverage section). The rule that binds insured plans is Insurance Department Bulletin 2018-1, issued July 10, 2018 to "all health insurance carriers choosing to cover Autism Spectrum Disorder," which says "treatments for Autism Spectrum Disorder cannot be excluded from an insurance policy." It rests on federal mental health parity: if a carrier covers autism and "seeks to place QTLs or NQTLs on autism spectrum disorder benefits or treatments, it must show that a similar limitation exists regarding substantially all benefits and treatments on the medical/surgical portion of their insurance coverage," and autism benefits "may not be subject to any separate cost-sharing requirements or treatment limitations that only apply to mental health/substance use disorder benefits." On ABA specifically: "exclusion of Applied Behavior Analysis (ABA) therapy to treat children with autism spectrum disorder on the basis that ABA therapy is experimental or investigative treatment will not be allowed by the Department." Carriers may still review medical necessity and periodically review continuing treatment, "as long as the standards for such reviews are comparable to and not more stringent than reviews conducted for substantially all medical/surgical services in the same classification." The bulletin defines treatment as care "prescribed or ordered for an individual diagnosed with an autism spectrum disorder by a licensed physician or a licensed psychologist who determines the care to be medically necessary," including behavioral health treatment. It applied to grandfathered and transitional individual, small-group and large-group policies from October 1, 2018, and to non-grandfathered policies and Department-regulated self-funded multiple employer welfare arrangements from January 1, 2019. It sets no age or dollar cap of its own. Ordinary self-funded employer plans are not regulated by the Department and answer to ERISA and federal parity instead.';

const ND_LICENSURE_BODY =
  'North Dakota licenses behavior analysts. Under N.D.C.C. 43-64-02, "Effective January 1, 2020, an individual may not practice applied behavior analysis without a current license issued by the board," the State Board of Integrative Health Care. There are two licenses: licensed behavior analyst (a master’s or doctorate from an ABAI-accredited or BACB-approved program, the BCBA examination, current BACB certification, and the North Dakota professional responsibility examination "once developed and approved by the board") and licensed assistant behavior analyst (bachelor’s, the BCaBA examination, and proof of supervision by a licensed behavior analyst). Anyone who held a license or registration from the Board of Psychologist Examiners under chapter 43-32 on December 31, 2019 was grandfathered. The board’s exemptions include behavior technicians who "deliver applied behavior analysis services under the extended authority and direction of a licensed behavior analyst or a licensed assistant behavior analyst" (titles such as "registered behavior technician"), licensed psychologists practicing within competence, and people providing ABA in a public school setting. A BCBA licensed in another state can apply for license by endorsement: the board grants it when the applicant holds "a verified current valid license in good standing to practice as a behavior analyst professional in another state," passed the BACB examination, and the other state’s requirements are "substantially similar." We read chapter 43-64, chapter 43-57 and the full rule chapter 112-05-01 and found no exemption for an out-of-state behavior analyst treating a North Dakota child, in person or by telehealth, so plan on a North Dakota license before serving North Dakota members and confirm telehealth questions with the board. On rates: commercial ABA rates are negotiated and unpublished. The public benchmark is ND Medicaid’s professional fee schedule (August 1, 2026): 97153 $10.81 and 97155 $31.76 per unit.';

const ND_TELEHEALTH_TAIL =
  ' For an insured North Dakota policy, N.D.C.C. 26.1-36-09.15 requires coverage "for health services delivered by means of telehealth which is the same as the coverage for health services delivered by in-person means," lets payment be negotiated "in the same manner" as in-person rates, and does not require a provider at the originating site. Its definition of "health care provider" lists licensees under named chapters, including psychologists (43-32), but not behavior analysts (43-64), so whether a behavior analyst’s telehealth falls inside the statute is not settled by its text. Self-funded employer plans are outside the statute.';

const ND_REFERRAL_TAIL =
  ' North Dakota has no autism statute requiring a referral. Bulletin 2018-1 treats autism treatment as care "prescribed or ordered" by a licensed physician or licensed psychologist who determines it is medically necessary, so expect insured plans to ask for that order.';

const ND_AGE_TAIL =
  ' North Dakota has no autism statute, and Bulletin 2018-1 sets no age or dollar limit: for insured plans it bars autism-only limits that are more restrictive than those on medical/surgical benefits, and bars excluding ABA as experimental (its ABA paragraph speaks of "children with autism spectrum disorder"). Self-funded ERISA plans are outside the bulletin, so plan funding type decides whether it binds.';

const ndAuthTurnaround = (carrier: string): string =>
  'Depends on how the plan is funded. Insured North Dakota plans fall under N.D.C.C. ch. 26.1-36.12: a non-urgent decision is due "within seven calendar days of obtaining all necessary information," an urgent one within 72 hours, and if the provider or family does not supply requested information within 14 calendar days of a written request the carrier "may make an adverse determination." A prior authorization is valid for at least six months (12 months for "a chronic or long-term care condition"), cannot be revoked "if care is provided within forty-five business days" of approval, and a new carrier must honor a prior plan’s authorization for the first 60 days of coverage. If the carrier misses a deadline, "any health care services subject to review automatically are deemed authorized." Requirement changes need 60 days’ written notice to contracted providers. The chapter does not reach Medicaid or the state employees’ PERS plan. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours. ' + carrier + ' publishes no North Dakota-specific ABA turnaround or reauthorization lead time.';

const ndAuthVerify = (carrier: string): string =>
  'At benefits verification ask whether the plan is insured in North Dakota (ch. 26.1-36.12 applies) or self-funded (ERISA), and what reauthorization lead time ' + carrier + ' expects.';

const ndCob = (carrier: string): string =>
  'For a child on two group plans, North Dakota follows the birthday rule: for parents who are married or living together, "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (N.D. Admin. Code 45-08-01.2); a court decree controls for separated parents, and otherwise the custodial parent’s plan pays first. That rule binds plans regulated by the state; a self-funded plan sets its own order. If the child also has ND Medicaid, ' + carrier + ' pays first: ND Medicaid is "generally the payer of last resort," pays only the member responsibility up to its allowed amount, and expects providers "to follow TPL payer policy and procedures for payment," so be in the commercial network and get its authorization. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).';

const ndCobVerify = (carrier: string): string =>
  'Ask ' + carrier + ' at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has.';

const ND_CLAIMS_BODY =
  'North Dakota’s claim-payment statute, N.D.C.C. 26.1-36-37.1, gives an insurer 15 business days after receiving a proof of loss to "pay the claim or that portion of the claim that is not contested, deny the claim, or make an initial request for additional information," and another 15 business days after receiving the information to pay or deny; a contested claim must be explained in writing. That binds insured policies, not self-funded ERISA plans. Prior authorization for insured plans runs under chapter 26.1-36.12 (seven calendar days after complete information, 72 hours if urgent, missed deadlines deemed approved; see the turnaround field below). Timely-filing limits and the rendering-versus-supervising NPI rule are set by each carrier’s contract, not by state law.';

export const northDakotaPayers: Record<string, PayerConfig> = {
  'north-dakota-medicaid': {
    slug: 'north-dakota-medicaid',
    cardDesc: 'ABA is a fee-for-service state plan benefit through age 20: a prior approval letter, then web service authorizations twice a year; rates published.',
    assessmentPA: {
      value: 'Yes. The child first needs ND Medicaid’s annual prior approval letter, and the August 2026 fee schedule flags 97151 and 97152 "Service Authorization Required: Yes"',
      status: 'verified',
      cites: [S.abaPol, S.profFee],
    },
    treatmentPA: {
      value: 'Yes. The agency submits a web-based service authorization twice a year (annual and 180-day update) with the care plan and the yearly approval letter attached; every covered ABA code (97151–97156, 0373T) is flagged SA "Yes"',
      status: 'verified',
      cites: [S.abaPol, S.profFee, S.sa],
    },
    dxRequired: {
      value: 'Yes. An autism spectrum disorder diagnosis "from their primary care provider (PCP) or licensed medical care provider qualified to diagnose autism spectrum disorder," plus an annual Health Tracks (EPSDT) screening recommending ABA',
      status: 'verified',
      cites: [S.abaPol],
    },
    payer: 'North Dakota Medicaid',
    state: 'ND', kind: 'state-medicaid',
    pill: 'Payer Guide · North Dakota Medicaid',
    h1: 'North Dakota Medicaid ABA coverage: the intake guide.',
    metaTitle: 'North Dakota Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How North Dakota Medicaid covers ABA: a fee-for-service benefit for members under 21 with autism, the prior approval letter and twice-yearly service authorizations, the 2026 rates, telehealth, timely filing, the Autism waiver, and behavior-analyst licensure.',
    intro: [
      'North Dakota Medicaid covers applied behavior analysis for members under 21 with an autism spectrum disorder diagnosis. It is a fee-for-service benefit run by the Medical Services Division: there is no managed care plan between the family and the state for ABA. Medicaid Expansion is administered by Blue Cross Blue Shield of North Dakota, but Expansion members aged 19 and 20 are enrolled in traditional Medicaid, and the ABA codes are "Covered through age 20 only," so the Expansion plan never carries an ABA benefit.',
      'The front door is unusual. Before any provider is involved, the family sends the department a Health Tracks (EPSDT) screening that lists the autism diagnosis and recommends ABA; the department answers with a prior approval letter the family takes to the provider of its choice. The provider then requests a service authorization twice a year with the care plan. Behavior analysts must hold a North Dakota license, and every enrolled clinician, technicians included, bills under their own NPI.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for members under 21 with an autism spectrum disorder diagnosis' },
      { label: 'Structure', value: 'Fee-for-service only; the Medicaid Expansion MCO (BCBSND) serves adults 21+ and carries no ABA' },
      { label: 'Front door', value: 'Annual Health Tracks screening recommending ABA → department prior approval letter' },
      { label: 'Prior auth', value: 'Web-based service authorization at the annual and 180-day update; all ABA codes SA "Yes"' },
      { label: 'Rates (Aug. 2026, per unit)', value: '97151/97155 $31.76 · 97152 $23.51 · 97153 $10.81 · 97154 $2.72 · 97156 $29.48 · 0373T $12.99' },
      { label: 'Not covered', value: '97157, 97158 and 0362T' },
      { label: 'Licensure', value: 'Yes: licensed behavior analyst / assistant under N.D.C.C. ch. 43-64 (Board of Integrative Health Care)' },
      { label: 'Timely filing', value: '180 days from date of service (365 for claims with other insurance)' },
    ],
    sections: [
      {
        h2: 'Where ABA sits: a fee-for-service benefit through age 20',
        body: [
          'ND Medicaid’s ABA policy describes the service as "assistance provided to a qualifying individual with an autism spectrum disorder (ASD) diagnosis," made up of service oversight (comprehensive assessment, care plan development, referral, monitoring and follow-up) and skills training for the child and caregivers, delivered "within the home, community, or a provider’s facility." The child must be under 21, Medicaid eligible on the dates of service, have an ASD diagnosis, and have a current Health Tracks screening. The Medicaid Covered Services chapter lists the Autism Spectrum Disorder ABA Service with a service authorization "annually, and a 180-day update" and an age limit: "must be under 21 years of age." The professional fee schedule marks each ABA code "Covered through age 20 only" and "only billable by providers that are enrolled to provide ABA services to children diagnosed with Autism Spectrum Disorder."',
          'There is no MCO to route through. The member eligibility chapter (July 2026) says Medicaid Expansion covers adults 19 to 64 through Blue Cross Blue Shield of North Dakota, but "Enrollees 19-20 years old are eligible for Medicaid Expansion based on income but are enrolled in traditional Medicaid." Since ABA stops at age 20, every ND Medicaid ABA claim goes to the state. The BCBSND Medicaid Expansion provider manual mentions ABA only in a form title marked "FEP only."',
        ],
        cites: [S.abaPol, S.covsvc, S.profFee, S.elig, S.bcMEPM],
      },
      {
        h2: 'The front door: Health Tracks screening and the prior approval letter',
        body: [
          'The family, not the provider, opens the case. The child needs "an annual North Dakota Health Tracks (EPSDT) screening completed at a public health unit or by a PCP," current "within six months of the date considered eligible for the service," and "Comments in the recommendation portion of that screening must support and recommend Autism ABA services." Children who meet the criteria "will receive a letter of approval from ND Medicaid to take to their provider." Approval runs for "a twelve-month period; annual review of medical necessity is required," and the screening for the renewal "can be completed within 6 months prior to due date." HHS’s Children’s Waiver Services page describes the same steps in plain language (a Medicaid wellness visit within six months documenting the diagnosis and a recommendation for ABA). HHS’s page lists dhsautism@nd.gov for questions; the Service Authorizations chapter lists dhsserviceauth@nd.gov for general service authorization questions and (701) 328-7068 for behavioral health authorizations.',
        ],
        cites: [S.abaPol, S.cfsPage, S.sa],
      },
      {
        h2: 'Service authorization, the care plan and the 180-day update',
        body: [
          'Once the family has the letter, the "Agency/ School will submit a web-based Service Authorization request twice per year (annual and 180-day update)," with "The care plan and yearly letter of approval" attached. The February 2025 policy requires an evidence-based functional assessment with indirect and direct measures "(VB-MAPP or ABLLS-R)," target behaviors that "should not be vocational or educational in purpose," baseline data and graphs, measurable goals that can be met in the authorization period, caregiver training goals, the location, and the "Number of hours of Autism ABA service per week / per service code" with "justification of units requested" and the "Majority requested provided by an RBT." Reassessment at 180 days updates the targets, goals and hours. Punishment procedures "will in most cases be denied." The policy expects data reviewed often enough that changes are made "in a timely manner" (defined as "4-6 weeks no improvement") and monthly meetings between the skills trainer and the caregiver. Services paid without a required authorization "are subject to recoupment"; a retroactive request may be considered "up to 90 days after the initial date of service with good cause."',
        ],
        cites: [S.abaPol, S.sa],
      },
      {
        h2: 'Who may deliver ABA, and how they enroll',
        body: [
          'Service oversight must be done by "a licensed board-certified behavior analyst (BCBA)," a licensed BCBA-D, a "registered behavior analyst," or a "licensed clinical psychologist." Skills trainers may be an RBT, a board certified autism technician (BCAT), a registered behavior analyst, a BCaBA, BCBA or BCBA-D, or a licensed social worker (LBSW, LMSW, LCSW), LPCC, LMFT, speech-language pathologist, occupational therapist or physical therapist. People with a bachelor’s or master’s in a listed field (social work, psychology, special education, applied behavioral sciences and others) "may enroll to provide skills training; however, they must become a registered behavior technician or board certified autism technician within six months of enrollment." Skills training "must be supervised by a practitioner qualified to provide Service Oversight, operating within North Dakota scope of practice laws." Public schools may enroll to provide ABA through the IEP, but school services "must still have a care plan written by Board Certified Behavior Analyst (BCBA)."',
          'Enrollment is per person. "All eligible providers must enroll and bill with their own NPI. Providers eligible to enroll may not bill for services under a supervising or peer provider’s NPI," and the servicing provider’s NPI must be enrolled on the date of service. ABA claims go on a CMS 1500 or 837P ("Applied Behavioral Analyst" is a listed professional provider type), and the fee schedule shows no ordering/referring/prescribing (ORP) NPI requirement on the ABA codes. The Behavioral Health Rehabilitative Services chapter lists "Behavior Analyst" with licensure through the Board of Integrative Health Care and lets behavior analysts bill ABA codes for youth with autism in addition to the rehab codes.',
        ],
        cites: [S.abaPol, S.penroll, S.claims, S.profFee, S.bhrehab],
      },
      {
        h2: 'What does North Dakota Medicaid pay for ABA?',
        body: [
          'ABA rates now sit in the Autism category of the professional fee schedule (data updated August 1, 2026), per unit: 97151 $31.76, 97152 $23.51, 97153 $10.81, 97154 $2.72, 97155 $31.76, 97156 $29.48 and 0373T $12.99. 97157, 97158 and 0362T are listed as not covered. Each covered ABA line is marked telehealth allowed, service authorization required, no ORP NPI required, and EVV "No." For comparison, the archived Autism Services Fee Schedule as of 7/1/2025 paid 97151 and 97155 $31.14, 97152 $23.05, 97153 $10.60, 97154 $2.67, 97156 $28.90 and 0373T $12.74, so the 2026 lines are about 2% higher. The schedule itself warns that inclusion "does not imply Medicaid coverage," so read it with the ABA policy.',
        ],
        cites: [S.profFee, S.aut2025, S.feePage],
      },
      {
        h2: 'Claims operations: timely filing, telehealth, EVV and appeals',
        body: [
          'Timely filing: "ND Medicaid must receive an original Medicaid primary claim within one hundred eighty (180) days from the date of service." A claim with third-party payment has 365 days from the date of service, as do replacements, resubmissions and voids of a timely original. Retroactive member eligibility gives 180 days from the eligibility determination. A provider may ask for review of a payment denial "within thirty (30) days of the date of the department’s denial of payment."',
          'Telehealth: the fee schedule marks every covered ABA code telehealth-allowed. The telehealth chapter (October 2025) requires the same standard of care as in person on a HIPAA-compliant platform, POS 02 (not the home) or POS 10 (the patient’s home), modifier 93 when audio-only, and audio-only only for codes the Procedure Code Look-up Tool allows. Both sites must document where the member and provider were. EVV: the EVV chapter applies to personal care, home health, 1915(i) and waiver respite and in-home supports (including the Autism waiver), and the fee schedule lists EVV "No" for the ABA codes.',
          'Service authorization denials: the member may ask for reconsideration through the provider "Within 30 days of a denied service authorization," or request a hearing from the Legal Advisory Unit within 30 days of the denial. Providers may resubmit with new records at any time.',
        ],
        cites: [S.tf, S.profFee, S.tele, S.evv, S.sa],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [
          'North Dakota licenses behavior analysts under N.D.C.C. chapter 43-64: since January 1, 2020 "an individual may not practice applied behavior analysis without a current license issued by the board," the State Board of Integrative Health Care, which the BACB’s licensure table also lists. Medicaid enrollment requires "a valid license, certification, accreditation, or registration according to the state laws and regulations of the state in which services are rendered." A BCBA licensed elsewhere can seek a North Dakota license by endorsement; we found no exemption in the statute or rules for an out-of-state analyst treating a North Dakota child by telehealth. Separately, ND Medicaid treats providers more than 50 miles from the border as out-of-state: "Out-of-state services require a service authorization except when services provided are in response to an emergency," and out-of-state providers file an Out of State/Out of Network Enrollment Clarification Form (SFN 509).',
        ],
        cites: [S.c4364, S.ndac112, S.bacbLic, S.penroll, S.oos],
      },
      {
        h2: 'The Autism Spectrum Disorder waiver is not ABA',
        body: [
          'North Dakota also runs a 1915(c) Autism Spectrum Disorder waiver (ND.0842). Its November 1, 2025 amendment raised the age limit to "Through the age of 20," allowing participants "to remain on the waiver until their 21st birthday," and changed maximum enrollment "to 400 per year with 345 active." HHS lists its services as assistive technology, community connector, remote monitoring, service management and respite care; ABA is not one of them. The waiver runs alongside the state plan ABA benefit, and its respite and in-home support providers are subject to EVV. Two ND Medicaid chapters (member eligibility, July 2026; EVV) still call it the "Birth through age 17" or "Birth through Seventeen" waiver, so expect older wording on forms.',
        ],
        cites: [S.asdWaiver, S.cfsPage, S.evv, S.elig],
      },
    ],
    collect: [
      { title: 'Prior approval letter', desc: 'The family gets it from ND Medicaid after sending a Health Tracks screening that lists the autism diagnosis and recommends ABA. It must be attached to every service authorization.' },
      { title: 'Health Tracks screening date', desc: 'Must be within six months of eligibility and renewed every year; the renewal screening may be done up to six months before the due date.' },
      { title: 'Diagnosis', desc: 'ASD diagnosis from the PCP or a licensed medical care provider qualified to diagnose it.' },
      { title: 'Age', desc: 'ABA codes are covered through age 20 only.' },
      { title: 'Other insurance', desc: 'ND Medicaid is generally the payer of last resort; bill the commercial plan first and follow its rules (secondary claims have 365 days).' },
      { title: 'Member ID card type', desc: 'A white BCBSND Medicaid Expansion card means an adult 21+; ABA is billed to ND Medicaid fee-for-service under the green ND Medicaid card.' },
    ],
    sources: [S.abaPol, S.cfsPage, S.covsvc, S.profFee, S.aut2025, S.feePage, S.manuals, S.sa, S.penroll, S.claims, S.bhrehab, S.provreq, S.school, S.tele, S.tf, S.tpl, S.evv, S.elig, S.oos, S.asdWaiver, S.c4364, S.ndac112, S.bacbLic, S.cfr440, S.cfr433, S.bcMEPM],
    deliveryRules: {
      supervision: {
        value: 'No numeric ratio is published. Skills training "must be supervised by a practitioner qualified to provide Service Oversight" (a licensed BCBA or BCBA-D, a registered behavior analyst, or a licensed clinical psychologist) "operating within North Dakota scope of practice laws." Skills training must include "meeting with the Service Oversight practitioner and the caregiver at least monthly" to review progress and the care plan, and the care plan must show the "Majority requested provided by an RBT." Degreed skills trainers must become an RBT or BCAT within six months of enrollment.',
        status: 'verified',
        cites: [S.abaPol],
      },
      concurrentBilling: {
        value: 'Not addressed in the ABA policy, the fee schedule or the claims chapter read. The only same-day rule in the February 2025 policy is that if one agency provides both speech services and ABA to a child, "only one service may be billed per day."',
        status: 'unverified',
        cites: [S.abaPol, S.profFee],
        verifyVia: 'ND Medicaid Medical Services (dhsautism@nd.gov; service authorization questions dhsserviceauth@nd.gov): ask whether 97153 and 97155 may be billed for the same clock time; or check the Procedure Code Look-up Tool.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'The ABA policy and the August 2026 fee schedule publish no per-day or per-week unit cap; hours are requested per week and per code on the care plan "With justification of units requested." Code-level limits, if any, would sit in the Procedure Code Look-up Tool, which we could not query.',
        status: 'unverified',
        cites: [S.abaPol, S.profFee],
        verifyVia: 'ND Medicaid Procedure Code Look-up Tool (from the Provider Guidelines page) or Medical Services, dhsautism@nd.gov.',
        blocker: 'document',
      },
      noteSignature: {
        value: 'Records must be "signed by the ND Medicaid-enrolled provider rendering the service. Claims that do not have signed records are considered non-covered," with start and stop times "required for all time-based codes" and records kept at least seven years. The ABA care plan must carry the "Signature of the BCBA, and date of signature," and skills-training documentation must include "who with, time, where occurred, event, data of goal."',
        status: 'verified',
        cites: [S.provreq, S.abaPol],
      },
      placeOfService: {
        value: 'Home, community or a provider’s facility ("Services can occur within the home, community, or a provider’s facility"); HHS also lists school. School-based ABA through the IEP is billable by enrolled schools, needs a BCBA-written care plan, and "Service authorization must be received and approved prior to services being rendered." Services that are "solely educational, vocational, recreational or social" are not paid.',
        status: 'verified',
        cites: [S.abaPol, S.cfsPage, S.school],
      },
      billAsProvider: {
        value: 'The rendering clinician’s own NPI. "All eligible providers must enroll and bill with their own NPI. Providers eligible to enroll may not bill for services under a supervising or peer provider’s NPI," and the servicing NPI must be enrolled on the date of service. Skills trainers (RBTs, BCATs and the other listed types) are enrolled provider types, so a technician’s session goes out under the technician’s NPI, not the supervising BCBA’s. No ORP (ordering/referring) NPI is required on the ABA codes.',
        status: 'verified',
        cites: [S.penroll, S.abaPol, S.profFee],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. The child must "Be under 21 years of age," and the fee schedule marks each ABA code "Covered through age 20 only."',
        status: 'verified',
        cites: [S.abaPol, S.profFee, S.covsvc],
      },
      dxRecency: {
        value: 'No recency rule on the diagnosis itself. The dated requirement is the Health Tracks (EPSDT) screening: current "within six months of the date considered eligible," repeated every 12 months for a new approval letter (the renewal screening may be done up to six months early).',
        status: 'verified',
        cites: [S.abaPol, S.cfsPage],
      },
      diagnosingProviders: {
        value: 'The child’s "primary care provider (PCP) or licensed medical care provider qualified to diagnose autism spectrum disorder."',
        status: 'verified',
        cites: [S.abaPol],
      },
      diagnosticTools: {
        value: 'No diagnostic instrument is named. For the ABA assessment, the February 2025 policy requires an evidence-based functional assessment with indirect and direct measures "(VB-MAPP or ABLLS-R)" and baseline data with graphs.',
        status: 'verified',
        cites: [S.abaPol],
      },
      referral: {
        value: 'Yes, in effect. The Health Tracks screening must carry a recommendation that "support and recommend Autism ABA services," and the department issues a prior approval letter that the family takes "to the provider of their choice." The letter must be attached to each service authorization.',
        status: 'verified',
        cites: [S.abaPol, S.cfsPage],
      },
      telehealth: {
        value: 'Yes. The August 2026 fee schedule marks 97151, 97152, 97153, 97154, 97155, 97156 and 0373T "Telehealth Allowed: Yes." The telehealth chapter requires the same standard of care as in person on a HIPAA-compliant platform, POS 10 when the child is home and POS 02 elsewhere, modifier 93 for audio-only, and audio-only only when the Procedure Code Look-up Tool allows it for the code. Both sites document the member’s and provider’s physical locations. The clinician must be enrolled and licensed where the service is rendered.',
        status: 'verified',
        cites: [S.profFee, S.tele, S.penroll],
      },
      authTurnaround: {
        value: 'ND Medicaid publishes no ABA decision clock. The federal fee-for-service floor applies: since January 1, 2026 the state agency must decide a standard request "in no case later than 7 calendar days after receiving the request" and an expedited one "in no case later than 72 hours." Incomplete submissions "will be returned or denied," and retroactive requests are possible "up to 90 days after the initial date of service with good cause."',
        status: 'verified',
        cites: [S.cfr440, S.sa],
      },
      coordinationOfBenefits: {
        value: '"North Dakota Medicaid is generally the payer of last resort." Providers must identify other coverage before billing, follow the other payer’s rules, and send its EOB with the claim; Medicaid pays "the amount designated as the member responsibility up to the Medicaid allowed amount," or $0 if the other payer paid more. The TPL chapter lists exceptions where a provider "may submit claims directly to ND Medicaid even if there is a liable third party," including "Services provided for Early and Periodic Screening, Diagnostic, and Treatment (EPSDT)"; the Autism waiver exception expressly "does not include applied behavioral analysis services," and the chapter does not say whether ABA counts as an EPSDT service for this purpose. Secondary claims have 365 days from the date of service.',
        status: 'verified',
        cites: [S.tpl, S.tf, S.cfr433],
      },
    },
    faq: [
      { q: 'Does North Dakota Medicaid cover ABA therapy?', a: 'Yes, for members under 21 with an autism spectrum disorder diagnosis. It is a fee-for-service benefit: the family sends a Health Tracks screening recommending ABA, gets a prior approval letter, and the provider requests service authorizations twice a year.' },
      { q: 'Does a North Dakota Medicaid MCO cover ABA?', a: 'No. Medicaid Expansion is run by Blue Cross Blue Shield of North Dakota, but Expansion members aged 19–20 are enrolled in traditional Medicaid and ABA stops at age 20, so all ABA goes through ND Medicaid fee-for-service.' },
      { q: 'What does North Dakota Medicaid pay for ABA?', a: 'Per unit, on the August 1, 2026 professional fee schedule: 97151 and 97155 $31.76, 97152 $23.51, 97153 $10.81, 97154 $2.72, 97156 $29.48, 0373T $12.99. 97157, 97158 and 0362T are not covered.' },
      { q: 'Can a BCBA licensed in another state treat a North Dakota Medicaid member, including by telehealth?', a: 'Not without a North Dakota license. N.D.C.C. 43-64-02 requires a license from the Board of Integrative Health Care to practice ABA, and ND Medicaid enrolls only providers licensed under the law of the state where services are rendered. The board offers license by endorsement to analysts licensed in a substantially similar state. Providers more than 50 miles from the border also need an out-of-state service authorization.' },
      { q: 'What is the timely filing limit for ND Medicaid ABA claims?', a: '180 days from the date of service for an original claim; 365 days when another payer paid first or for a replacement of a timely claim. Payment denials can be reviewed if requested within 30 days.' },
      { q: 'Does EVV apply to ABA in North Dakota?', a: 'No. The fee schedule lists EVV "No" for the ABA codes; EVV covers personal care, home health, 1915(i) and waiver respite and in-home supports, including the Autism waiver’s.' },
      { q: 'Whose NPI goes on a North Dakota Medicaid ABA claim?', a: 'The rendering provider’s. ND Medicaid requires every eligible provider to enroll and bill with their own NPI and bars billing under a supervisor’s NPI; RBTs and other skills trainers are enrolled provider types.' },
    ],
  },

  'blue-cross-blue-shield-north-dakota': {
    slug: 'blue-cross-blue-shield-north-dakota',
    family: 'bcbs',
    cardDesc: 'The dominant ND carrier: ABA rules sit behind a member-specific PA tool; Bulletin 2018-1 bars excluding ABA as experimental; 12-month filing.',
    assessmentPA: {
      value: 'Not published. BCBSND’s prior-authorization search needs the member ID, provider NPI and date of service, and its page says "If you see no results for the code or search term entered, prior authorization is not required." The ABA request form it posts is marked "For FEP use only"',
      status: 'unverified',
      cites: [S.bcPA],
      verifyVia: 'BCBSND in-network prior authorization search or Availity Essentials (enter 97151 and 97152 with the member’s ID), or Provider Service, 800-368-2312.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Not published for current members; check each code in the member-specific PA search. The Commercial Migrated Member Prior Authorization List for members moved to BCBSND’s new system from January 1, 2027 lists no ABA code',
      status: 'unverified',
      cites: [S.bcPA, S.bcMigPA],
      verifyVia: 'BCBSND in-network prior authorization search or Availity Essentials (97153–97158, 0362T, 0373T), or Provider Service, 800-368-2312; ask whether the member is migrated or non-migrated.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'BCBSND’s ABA medical policy sits behind a JavaScript-only policy search we could not read. For insured plans, Bulletin 2018-1 frames covered autism treatment as care for "an individual diagnosed with an autism spectrum disorder"',
      status: 'unverified',
      cites: [S.bcPA, S.bull2018],
      verifyVia: 'BCBSND Medical Policy Search (bcbsnd.com → Providers → Policies & Prior Authorization) or Provider Service, 800-368-2312.',
      blocker: 'document',
    },
    payer: 'Blue Cross Blue Shield of North Dakota',
    state: 'ND', kind: 'commercial',
    pill: 'Payer Guide · Blue Cross Blue Shield · North Dakota',
    h1: 'Blue Cross Blue Shield of North Dakota ABA coverage: the intake guide.',
    metaTitle: 'Blue Cross Blue Shield of North Dakota ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Blue Cross Blue Shield of North Dakota handles ABA: where the prior-authorization answer lives, the 2027 system migration, Bulletin 2018-1 (no autism statute), North Dakota behavior-analyst licensure, filing and appeal limits, and what intake should verify.',
    intro: [
      'Blue Cross Blue Shield of North Dakota is the state’s dominant carrier and also runs the Medicaid Expansion plan for adults. For an ABA intake team the commercial card is the one that matters, and three layers decide the answer: the member’s own BCBSND contract, North Dakota’s Bulletin 2018-1 (there is no autism statute), and whether the employer plan is insured or self-funded.',
      'BCBSND does not publish its ABA prior-authorization rules in a document we could read: its PA search needs the member ID and the provider’s NPI, and its medical policy library is a JavaScript-only search. This guide gives the parts that are written down (filing and appeal limits, telehealth claim routing, the 2027 migration, state law) and the questions to ask for the rest.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Plan-dependent; insured plans that cover autism may not exclude ABA as experimental (Bulletin 2018-1)' },
      { label: 'State mandate', value: 'No autism statute; ND Insurance Department Bulletin 2018-1 (July 10, 2018), applying federal parity' },
      { label: 'Mandate age', value: 'None set; the bulletin carries no age limit (its ABA paragraph refers to children)' },
      { label: 'Mandate caps', value: 'None set; autism benefits may not carry limits stricter than medical/surgical benefits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (not regulated by the Insurance Department)' },
      { label: 'Licensure', value: 'Yes: licensed behavior analyst / assistant under N.D.C.C. ch. 43-64 (Board of Integrative Health Care)' },
      { label: 'Fee schedule', value: 'Not public — rates are in your BCBSND provider agreement; Provider Service 800-368-2312' },
      { label: 'Claims', value: 'File within 12 months of the date of service (or the benefit plan’s limit); appeals within 180 days' },
    ],
    sections: [
      {
        h2: 'Where BCBSND’s ABA rules live',
        body: [
          'BCBSND says "The ordering provider is typically responsible for obtaining prior authorization" and sends providers to a search tool: "Use the search tool below to verify whether the service requires prior authorization," and "If you see no results for the code or search term entered, prior authorization is not required." The tool asks for the member’s ID, the provider’s NPI and the date of service, so the answer is member-specific. Requests go through Availity Essentials. The only ABA form BCBSND posts, the "ABA Form," is marked "For FEP use only," meaning Federal Employee Program members. The medical policy library ("Medical Policy Search") opens behind a disclaimer into a JavaScript search we could not read, so BCBSND’s ABA medical-necessity criteria are not quoted here.',
          'BCBSND is changing systems. Its provider manual (8-26) says it "is migrating members to new systems, policies and processes in phases through the end of 2027," and from January 1, 2027 "providers may see both migrated and non-migrated members." Migrated members use the Commercial Migrated Member Prior Authorization List; we read it in full and it names no ABA code (97151–97158, 0362T, 0373T), while its behavioral health section points to LOCUS, CALOCUS-CASII and to Regence’s behavioral health medical policies for criteria. Non-migrated members keep the current search tool. Ask which group the member is in before every new request.',
        ],
        cites: [S.bcPA, S.bcMigPA, S.bcPM],
      },
      {
        h2: 'The North Dakota coverage rule: Bulletin 2018-1',
        body: [ND_COVERAGE_BODY],
        cites: [S.bull2018, S.doiNews, S.c2636],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [ND_LICENSURE_BODY],
        cites: [S.c4364, S.ndac112, S.c4357, S.bacbLic, S.profFee],
      },
      {
        h2: 'Claims operations with BCBSND',
        body: [
          'Timely filing: "BCBSND claims must be filed within 12 months, or length of time stated in the member’s benefit plan, of the date of service," and late claims are denied with the member and BCBSND held harmless; self-insured plans and other Blues may differ, so call Provider Services (800-368-2312). Claim corrections are allowed "for 180 days from the last processed claims processing date." Appeals: a pre-service appeal may be filed "within 180 calendar days from the notice of Adverse Benefit Determination," and "Any appeals received after 180 days will be returned to the provider without review." Supervised billing: BCBSND lets only listed "professionals in training" (for example post-doctoral psychology residents and master’s-level psychologists) bill under a supervising provider’s NPI, under direct supervision; behavior technicians are not on that list, so ask how BCBSND wants technician time billed.',
          ND_CLAIMS_BODY,
        ],
        cites: [S.bcPM, S.c2636, S.pa3612],
      },
      {
        h2: 'Telehealth claims and out-of-area providers',
        body: [
          'BCBSND’s telehealth guide says local providers "have the option to use telehealth as a modality when treating their patients" and file claims to their local plan through BlueCard. For a clinician physically outside North Dakota but employed by a brick-and-mortar group in North Dakota, claims for a BCBSND member in the service area "are filed to BCBSND," and the claim "should include address of where the clinician is employed." Contracting questions go to providercontracting@bcbsnd.com. That is claim routing, not licensure: the clinician still needs a North Dakota behavior-analyst license to practice ABA on a North Dakota child.',
        ],
        cites: [S.bcTele, S.c4364],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Insured (Bulletin 2018-1 and ch. 26.1-36.12 apply) vs. self-funded ERISA (the plan document governs).' },
      { title: 'Member ID + card photo', desc: 'BCBSND’s PA search and Availity need the current ID; ask the family for the card at every visit.' },
      { title: 'Migrated or non-migrated', desc: 'From January 1, 2027 PA lists and workflows differ by migration status.' },
      { title: 'Diagnosis and order', desc: 'ASD diagnosis and an order from a licensed physician or psychologist (Bulletin 2018-1’s definition of treatment).' },
      { title: 'Other coverage', desc: 'Second parent’s plan (birthday rule), ND Medicaid (pays last), TRICARE.' },
    ],
    sources: [S.bcPA, S.bcMigPA, S.bcPM, S.bcTele, S.bcMEPM, S.bull2018, S.doiNews, S.c2636, S.pa3612, S.cob, S.c4364, S.ndac112, S.c4357, S.bacbLic, S.erisa, S.tpl, S.tricare, S.champva, S.profFee],
    deliveryRules: {
      supervision: {
        value: 'Not published in a BCBSND document we could read. North Dakota law requires ABA to be practiced by a licensed behavior analyst, with technicians exempt only when working "under the extended authority and direction of" a licensed behavior analyst or licensed assistant behavior analyst.',
        status: 'unverified',
        cites: [S.bcPM, S.ndac112],
        verifyVia: 'BCBSND Medical Policy Search (ABA policy) or Provider Service, 800-368-2312.',
        blocker: 'document',
      },
      concurrentBilling: {
        value: 'Not published in a BCBSND document we could read.',
        status: 'unverified',
        cites: [S.bcPM],
        verifyVia: 'BCBSND Coding & Reimbursement policies or Provider Service, 800-368-2312: ask whether 97153 and 97155 may be billed for the same time.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Not published in a BCBSND document we could read. Bulletin 2018-1 bars autism-only treatment limits stricter than those on medical/surgical benefits in insured plans.',
        status: 'unverified',
        cites: [S.bcPM, S.bull2018],
        verifyVia: 'BCBSND Medical Policy Search or the member’s benefit summary in Availity.',
        blocker: 'document',
      },
      noteSignature: {
        value: 'The provider manual sets no ABA session-note signature rule.',
        status: 'unverified',
        cites: [S.bcPM],
        verifyVia: 'BCBSND Provider Service, 800-368-2312, or the documentation terms of your provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Not published in a BCBSND document we could read.',
        status: 'unverified',
        cites: [S.bcPM],
        verifyVia: 'BCBSND Medical Policy Search (ABA policy) or Provider Service, 800-368-2312: ask which settings (home, clinic, school, community) and POS codes it pays.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'BCBSND’s manual lets only listed professionals in training (for example post-doctoral psychology residents, master’s-level psychologists, LAMFTs) bill under a supervising provider’s NPI, with the supervisor "present in the office suite and/or on a virtual care visit and immediately available." Behavior technicians are not listed, and no ABA-specific billing rule was found.',
        status: 'unverified',
        cites: [S.bcPM],
        verifyVia: 'BCBSND provider contracting (providercontracting@bcbsnd.com) or Provider Service, 800-368-2312: ask whether RBT time is billed under the supervising licensed behavior analyst’s NPI.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'BCBSND publishes no ABA age limit we could read; the member’s contract governs.' + ND_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.bcPA, S.bull2018],
        verifyVia: 'Availity benefits check or Provider Service, 800-368-2312: establish insured vs. self-funded first, then the plan’s ABA terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not published in a BCBSND document we could read.',
        status: 'unverified',
        cites: [S.bcPA],
        verifyVia: 'BCBSND Medical Policy Search (ABA policy) or Provider Service, 800-368-2312.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'Not published in a BCBSND document we could read. Bulletin 2018-1 defines insured-plan autism treatment as care prescribed or ordered "by a licensed physician or a licensed psychologist."',
        status: 'unverified',
        cites: [S.bcPA, S.bull2018],
        verifyVia: 'BCBSND Medical Policy Search (ABA policy) or Provider Service, 800-368-2312.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'Not published in a BCBSND document we could read.',
        status: 'unverified',
        cites: [S.bcPA],
        verifyVia: 'BCBSND Medical Policy Search (ABA policy) or Provider Service, 800-368-2312.',
        blocker: 'document',
      },
      referral: {
        value: 'BCBSND says the ordering provider is "typically responsible for obtaining prior authorization"; no ABA referral rule was found.' + ND_REFERRAL_TAIL,
        status: 'plan-dependent',
        cites: [S.bcPA, S.bull2018],
        verifyVia: 'Availity or Provider Service, 800-368-2312: ask whether the plan needs a physician or psychologist order for ABA.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'BCBSND’s telehealth guide lets local providers use telehealth "as a modality" and sets claim routing (in-area members’ claims to BCBSND; a clinician outside the state employed by a North Dakota group files to BCBSND with the employer’s address), but names no ABA telehealth code list or POS.' + ND_TELEHEALTH_TAIL,
        status: 'plan-dependent',
        cites: [S.bcTele, S.c2636],
        verifyVia: 'BCBSND Telehealth medical policy (Medical Policy Search) or Provider Service, 800-368-2312: ask which ABA codes, POS and modifier it pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: ndAuthTurnaround('BCBSND'),
        status: 'plan-dependent',
        cites: [S.pa3612, S.erisa],
        verifyVia: ndAuthVerify('BCBSND'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: ndCob('BCBSND'),
        status: 'plan-dependent',
        cites: [S.cob, S.tpl, S.tricare, S.champva],
        verifyVia: ndCobVerify('BCBSND'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Blue Cross Blue Shield of North Dakota cover ABA?', a: 'It depends on the member’s plan. For insured plans that cover autism, Bulletin 2018-1 bars excluding ABA as experimental and bars autism-only limits stricter than medical limits. Self-funded employer plans follow their own documents. Check benefits in Availity.' },
      { q: 'Does BCBSND require prior authorization for ABA?', a: 'BCBSND does not publish a general answer: its PA search is member-specific (member ID, NPI, date of service) and says no result means no PA is required. Members migrated to its new system from January 1, 2027 use a published list that names no ABA code. Check every code before starting.' },
      { q: 'What is BCBSND’s timely filing limit?', a: '12 months from the date of service, or the limit in the member’s benefit plan; self-insured plans may differ. Appeals must be filed within 180 days.' },
      { q: 'Is there a North Dakota autism insurance mandate?', a: 'No statute. North Dakota relies on Insurance Department Bulletin 2018-1, which applies federal parity to insured plans and forbids excluding ABA as experimental.' },
      { q: 'Can a BCBA licensed in another state bill BCBSND for a North Dakota child?', a: 'Only with a North Dakota license: N.D.C.C. 43-64-02 requires one to practice ABA in the state, and the Board of Integrative Health Care offers license by endorsement. BCBSND’s telehealth guide covers claim routing for out-of-state clinicians employed by North Dakota groups, not licensure.' },
    ],
  },

  'aetna-north-dakota': {
    slug: 'aetna-north-dakota',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA guide and precert list + North Dakota’s Bulletin 2018-1 (no autism statute) and behavior-analyst licensure.',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: precertification of all ABA codes; progress is re-evaluated every six months, and the reauthorization interval is set by the plan',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (benefits line on the card) or Availity: ask whether the group carries ABA precertification and what reauthorization interval it uses.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5 diagnosis of autism spectrum disorder (ICD-10 F84.0, F84.3–F84.9) "obtained by an appropriate provider"',
      status: 'verified',
      cites: [S.aetnaGuide],
    },
    payer: 'Aetna in North Dakota',
    state: 'ND', kind: 'commercial',
    pill: 'Payer Guide · Aetna · North Dakota',
    h1: 'Aetna ABA coverage in North Dakota: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in North Dakota: Prior Auth & Coverage Rules | Carelu',
    metaDescription:
      'How Aetna covers ABA for North Dakota families: the national ABA medical necessity guide, precertification, North Dakota’s Bulletin 2018-1 (no autism statute), behavior-analyst licensure under ch. 43-64, prompt-pay and prior-authorization law, and what intake should verify.',
    intro: [
      'For an intake team in North Dakota, an Aetna card means three layers: Aetna’s national ABA medical necessity guide and precertification list, North Dakota’s Bulletin 2018-1 (the state has no autism statute), and the plan’s funding type, which decides whether state rules apply at all.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s ABA medical necessity guide' },
      { label: 'State mandate', value: 'No autism statute; ND Insurance Department Bulletin 2018-1 (July 10, 2018), applying federal parity' },
      { label: 'Mandate age', value: 'None set; the bulletin carries no age limit (its ABA paragraph refers to children)' },
      { label: 'Mandate caps', value: 'None set; autism benefits may not carry limits stricter than medical/surgical benefits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (not regulated by the Insurance Department)' },
      { label: 'Licensure', value: 'Yes: licensed behavior analyst / assistant under N.D.C.C. ch. 43-64 (Board of Integrative Health Care)' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in North Dakota',
        body: [
          'Aetna’s ABA medical necessity guide (©2026) requires a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) from an appropriate provider, services "provided directly or billed by the appropriately licensed provider," functional impairment on a standardized scale "in the past 12 months" at least one standard deviation below the mean (or a significant risk of harm), and a treatment plan with measurable targets, generalization and discharge planning. Hours follow a severity table, with "QHP protocol modification and direction at 1 to 2 hours per 10 hours of treatment by protocol" and caregiver training authorized on top, and progress "evaluated every six months." The guide’s only state exhibit is Maryland, so the national criteria apply unchanged in North Dakota. Aetna’s behavioral health precertification list names all ten ABA codes, 97151 through 97158, 0362T and 0373T.',
        ],
        cites: [S.aetnaGuide, S.aetnaPrecert, S.aetnaCPB, S.aetnaCPB648],
      },
      {
        h2: 'The North Dakota coverage rule: Bulletin 2018-1',
        body: [ND_COVERAGE_BODY],
        cites: [S.bull2018, S.doiNews, S.c2636],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [ND_LICENSURE_BODY],
        cites: [S.c4364, S.ndac112, S.c4357, S.bacbLic, S.profFee],
      },
      {
        h2: 'Claims operations in North Dakota',
        body: [ND_CLAIMS_BODY],
        cites: [S.c2636, S.pa3612],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA?',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) treats payment as a contract term: where a provider has both an intermediary contract and a direct agreement, "your direct Aetna rates will apply unless we specifically notify you otherwise," and Aetna "requires that you use your own TIN when billing for services." Get the rates from your Aetna agreement or Aetna provider services. For a public benchmark, ND Medicaid’s August 2026 professional fee schedule pays 97153 at $10.81 per unit; commercial contracts are negotiated separately.',
        ],
        cites: [S.aetnaOM, S.profFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Insured in North Dakota (Bulletin 2018-1 and ch. 26.1-36.12 apply) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification and precertification in Availity.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date. Aetna’s guide is ASD-only.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3, ABAS, VB-MAPP or ABLLS).' },
      { title: 'North Dakota license numbers', desc: 'The supervising analyst’s ND license under ch. 43-64; Aetna requires staff to meet state requirements.' },
    ],
    sources: [S.aetnaGuide, S.aetnaPrecert, S.aetnaCPB, S.aetnaCPB648, S.aetnaNPC, S.aetnaOM, S.aetnaTele, S.bull2018, S.doiNews, S.c2636, S.pa3612, S.cob, S.c4364, S.ndac112, S.c4357, S.bacbLic, S.erisa, S.tpl, S.tricare, S.champva, S.profFee],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s Network Participation Criteria require ABA services to be "provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board," with supervised staff a BCaBA "or a paraprofessional," "A minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional "for each 10 hours of applied behavior analysis," and the supervisor "onsite with the child at least one hour a month." "All BCBAs, BCaBAs and paraprofessionals must meet state requirements." In North Dakota that means a licensed behavior analyst (or licensed assistant under one) under ch. 43-64, with technicians exempt only while working under a licensee’s "extended authority and direction."',
        status: 'verified',
        cites: [S.aetnaNPC, S.aetnaGuide, S.ndac112],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA documents (the medical necessity guide, CPB 0554, CPB 0648, the precertification list).',
        status: 'unverified',
        cites: [S.aetnaGuide, S.aetnaCPB],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap is published. Hours come from the guide’s severity table, with typical intensities of 10–25 hours a week for comprehensive and 1–20 for focused programs (typical, not caps), plus 1–2 hours of QHP direction per 10 hours of technician treatment. Progress is re-evaluated every six months.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      noteSignature: {
        value: 'Not addressed. Aetna sets treatment-plan content requirements but not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'The participating-provider agreement and the Aetna Behavioral Health provider manual section on documentation.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-neutral in Aetna’s guide; inpatient, residential or partial hospitalization settings use that level of care’s criteria instead of a separate ABA authorization. The guide expects coordination with existing providers "and/or the school district."',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      billAsProvider: {
        value: 'Services "must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope of practice," unless mandates, plan documents or contracts say otherwise. North Dakota has a licensure law, so the billing credential is a North Dakota licensed behavior analyst (or licensed psychologist within competence). Aetna requires billing under your own TIN.',
        status: 'verified',
        cites: [S.aetnaGuide, S.c4364, S.aetnaOM],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s guide sets no age cap; it describes typical, not limiting, age ranges (comprehensive 0–7 years, focused all ages).' + ND_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.bull2018],
        verifyVia: 'Live benefits verification on the member ID: establish insured vs. self-funded ERISA, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the ASD diagnosis, but medical necessity requires functional impairment on a standardized scale "in the past 12 months" (at least one standard deviation below the mean) or a significant risk of harm.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'An appropriate provider: "licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice."',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale as diagnostic tools used with clinical assessment. The ABA guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s national ABA documents require no physician referral; what they require is precertification of all ten ABA codes.' + ND_REFERRAL_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.bull2018],
        verifyVia: 'Availity or the precertification line on the card: ask whether the plan requires a physician or psychologist order with the ABA request.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Aetna’s Telemedicine and Direct Patient Contact Payment Policy lists ABA codes payable by telehealth by line of business; 97151, 97153, 97155, 97156 and 97157 carry marks in both the Commercial and Medicare columns, billed with modifier GT, 95 or FR, while 97152, 97154 and 97158 carry a single mark that, like the Medicare-only G0071 line, reads as Medicare Advantage only. The posted policy shows a last review of June 2021, so treat the list as perishable. Aetna’s provider manual (6/26) says Aetna Behavioral Health "offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out," and providers "must act within the scope of their license and ensure that they have the proper licensure based on state requirements."' + ND_TELEHEALTH_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaTele, S.aetnaOM, S.c2636],
        verifyVia: 'Availity or the precertification line on the card: ask whether the plan is insured in North Dakota or self-funded (and opted out of telehealth), and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: ndAuthTurnaround('Aetna'),
        status: 'plan-dependent',
        cites: [S.pa3612, S.erisa],
        verifyVia: ndAuthVerify('Aetna'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: ndCob('Aetna'),
        status: 'plan-dependent',
        cites: [S.cob, S.tpl, S.tricare, S.champva],
        verifyVia: ndCobVerify('Aetna'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in North Dakota?', a: 'Yes, for autism under its national ABA medical necessity guide. For insured North Dakota plans, Bulletin 2018-1 also bars excluding ABA as experimental; self-funded employer plans follow their own documents.' },
      { q: 'Does the Aetna ABA assessment need precertification?', a: 'Yes. Aetna’s behavioral health precertification list includes all ten ABA codes, 97151 and 97152 among them.' },
      { q: 'Does North Dakota have an autism insurance mandate?', a: 'Not a statute. North Dakota relies on Insurance Department Bulletin 2018-1, which applies federal parity to insured plans that cover autism and forbids excluding ABA as experimental or investigational.' },
      { q: 'What does Aetna pay for ABA in North Dakota?', a: 'Aetna publishes no ABA rates; they are in your participation agreement. The only public benchmark is ND Medicaid’s fee schedule (97153 $10.81 per unit in August 2026).' },
      { q: 'How long does Aetna have to pay a clean claim in North Dakota?', a: 'For insured plans, N.D.C.C. 26.1-36-37.1 gives 15 business days to pay, deny or request more information, and 15 business days after receiving the information. Self-funded plans follow their own terms.' },
    ],
  },

  'cigna-north-dakota': {
    slug: 'cigna-north-dakota',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide; in North Dakota Cigna’s behavioral network is contracted through HealthPartners; Bulletin 2018-1 layer.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the policy covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: the completed assessment and treatment plan go with the ABA prior authorization request; EN0499 sets the medical-necessity criteria',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD (F84.0–F84.9 except F84.2 Rett syndrome) under DSM-5-TR criteria, from an independently licensed professional; provisional or rule-out diagnoses do not count',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in North Dakota',
    state: 'ND', kind: 'commercial',
    pill: 'Payer Guide · Cigna · North Dakota',
    h1: 'Cigna / Evernorth ABA coverage in North Dakota: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in North Dakota: Prior Auth & Coverage Rules | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for North Dakota families: national policy EN0499, no PA on assessments, the HealthPartners network contract in North Dakota, Bulletin 2018-1 (no autism statute), behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in North Dakota, a Cigna card means four layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, the HealthPartners network arrangement that governs who is in network in North Dakota, North Dakota’s Bulletin 2018-1 (the state has no autism statute), and the plan’s funding type. Many Cigna members are on self-funded employer plans, so check funding first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'Network in ND', value: 'Providers must be contracted through HealthPartners to be in network for Cigna members (Evernorth guidelines)' },
      { label: 'State mandate', value: 'No autism statute; ND Insurance Department Bulletin 2018-1 (July 10, 2018), applying federal parity' },
      { label: 'Mandate age', value: 'None set; the bulletin carries no age limit (its ABA paragraph refers to children)' },
      { label: 'Mandate caps', value: 'None set; autism benefits may not carry limits stricter than medical/surgical benefits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (not regulated by the Insurance Department)' },
      { label: 'Licensure', value: 'Yes: licensed behavior analyst / assistant under N.D.C.C. ch. 43-64 (Board of Integrative Health Care)' },
      { label: 'Fee schedule', value: 'Not public — Exhibit A of your provider agreement; in ND, the HealthPartners contract' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in North Dakota',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). Per the autism resource guide, "Prior authorization is no longer required for assessment CPT codes 97151, 97152, or 0362T with a diagnosis of autism, as long as the provider is independently licensed or a Board Certified Behavior Analyst® (BCBA®) and the patient’s policy covers ABA services." Treatment needs prior authorization with the assessment and plan. A full-text check of EN0499 and the resource guide found no mention of North Dakota, so the national criteria apply.',
          'The network is the North Dakota twist. Evernorth’s Administrative Guidelines (September 2026) list a HealthPartners arrangement for "Minnesota, North Dakota, and Western Wisconsin": "Providers in Minnesota, North Dakota, and Western Wisconsin must be contracted through HealthPartners® to be considered in network for patients with Cigna Healthcare coverage or a HealthPartners ID card," with a note that "Some exceptions exist where the Provider Agreement supersedes the HealthPartners agreement." So a North Dakota ABA agency usually reaches Cigna members through a HealthPartners contract, not a direct Evernorth one. The guidelines also carry a North Dakota Regulatory Addendum (60 days’ notice before termination without cause, insolvency continuation of care) that does not apply to self-funded plans.',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin],
      },
      {
        h2: 'The North Dakota coverage rule: Bulletin 2018-1',
        body: [ND_COVERAGE_BODY],
        cites: [S.bull2018, S.doiNews, S.c2636],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [ND_LICENSURE_BODY],
        cites: [S.c4364, S.ndac112, S.c4357, S.bacbLic, S.profFee],
      },
      {
        h2: 'Claims operations in North Dakota',
        body: [
          ND_CLAIMS_BODY,
          'Cigna’s own claim rules for ABA: electronic claims use Evernorth payer ID 62308; on a paper CMS-1500, "List only a BCBA or other licensed provider in box 33"; and "Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." Confirm with HealthPartners whether its contract changes where North Dakota claims go.',
        ],
        cites: [S.c2636, S.pa3612, S.cignaARG, S.ebhAdmin],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth’s Administrative Guidelines say the Provider Agreement’s terms "include the reimbursement rates applicable to covered services," and tell ABA providers to see "Exhibit A in your Provider Agreement" for the fee schedule and the list of reimbursable autism services; fee questions go to Evernorth Provider Services at 800.926.2273. Virtual services carry modifier 95, which Evernorth says "will not change the reimbursement." In North Dakota, where the network contract usually runs through HealthPartners, the applicable rates are in that contract. For a public benchmark, ND Medicaid’s August 2026 fee schedule pays 97153 at $10.81 per unit.',
        ],
        cites: [S.ebhAdmin, S.profFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Insured in North Dakota (Bulletin 2018-1 applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Network contract', desc: 'Confirm the agency is in network through HealthPartners (or a direct Evernorth agreement that supersedes it).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, plus the date of the most recent diagnosis. Provisional or rule-out diagnoses don’t count.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.bull2018, S.doiNews, S.c2636, S.pa3612, S.cob, S.c4364, S.ndac112, S.c4357, S.bacbLic, S.erisa, S.tpl, S.tricare, S.champva, S.profFee],
    deliveryRules: {
      supervision: {
        value: 'Case supervision by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health clinician with documented ABA training, at "one to two hours per ten hours of direct treatment"; when direct treatment is 10 hours a week or less, a minimum of one to two hours per week. In North Dakota the supervising analyst must also hold a ch. 43-64 license.',
        status: 'verified',
        cites: [S.en0499, S.c4364],
      },
      concurrentBilling: {
        value: '"Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)."',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap is published. All ABA codes are 15-minute units and "All ABA services must be billed with CPT codes 97151–97158, 0362T, and 0373T ONLY"; intensity must reflect severity, goals and response to treatment.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499],
      },
      noteSignature: {
        value: 'Each service record must include, among other items, the "Name, credential (if applicable), and signature of ABA provider who rendered the service," with dates, times, location and who was present.',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'When treatment is delivered across settings ("home, clinic, school, community setting, etc."), quantitative data must be "clearly identified separately by location/setting." "Services that are considered primarily educational or vocational in nature" are not covered.',
        status: 'verified',
        cites: [S.en0499],
      },
      billAsProvider: {
        value: '"Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." On a CMS-1500, "List only a BCBA or other licensed provider in box 33"; electronic claims use payer ID 62308.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; it says access to focused intervention "should not be restricted by age, cognitive level, diagnosis, or co-occurring conditions."' + ND_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.bull2018],
        verifyVia: 'Live benefits verification (or HealthPartners for North Dakota network members): establish insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs "The date on which the diagnosis was most recently made," and "provisional," "rule out" and similar labels do not count. The clocks run on data: the assessment instrument completed "within 60 days prior to the start of treatment" and baseline data collected within 60 days before treatment.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional "licensed to practice independently and whose licensure board considers diagnostics" within scope, applying DSM-5-TR criteria.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated, but assessments must use current editions of standardized tools (the policy’s example: "must be the Vineland-3 vs. Vineland-II"), with results reported.',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral or prescription. Assessments 97151, 97152 and 0362T need no PA with an autism diagnosis when the provider is independently licensed or a BCBA.' + ND_REFERRAL_TAIL,
        status: 'plan-dependent',
        cites: [S.cignaARG, S.en0499, S.bull2018],
        verifyVia: 'Evernorth or HealthPartners at benefits verification: ask whether the plan requires a physician or psychologist order.',
        blocker: 'per-case',
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" (autism resource guide), and EN0499 allows "traditional in-person service delivery, telehealth, or a hybrid," chosen on clinical factors; the line-of-sight documentation requirement "does not apply to telehealth services." Evernorth bills virtual services with modifier 95. The clinician still needs a North Dakota license to treat a North Dakota child.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ebhAdmin, S.c4364],
      },
      authTurnaround: {
        value: ndAuthTurnaround('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.pa3612, S.erisa],
        verifyVia: ndAuthVerify('Cigna/Evernorth'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: ndCob('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.cob, S.tpl, S.tricare, S.champva],
        verifyVia: ndCobVerify('Cigna/Evernorth'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in North Dakota?', a: 'Yes, under national policy EN0499 for autism. For insured North Dakota plans, Bulletin 2018-1 also bars excluding ABA as experimental. Self-funded employer plans follow their own documents.' },
      { q: 'How do I get in network with Cigna for ABA in North Dakota?', a: 'Evernorth’s guidelines say providers in North Dakota must be contracted through HealthPartners to be in network for Cigna members, with some exceptions where a direct Evernorth agreement supersedes it.' },
      { q: 'Does the Cigna ABA assessment need prior authorization?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the policy covers ABA. PA starts at treatment.' },
      { q: 'Can ABA for Cigna members be done by telehealth?', a: 'Yes. Cigna says all ABA CPT codes are covered telehealth services, billed with modifier 95. The clinician must be licensed in North Dakota.' },
    ],
  },

  'unitedhealthcare-north-dakota': {
    slug: 'unitedhealthcare-north-dakota',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) and two-step authorization; no North Dakota state supplement; Bulletin 2018-1 and ND licensure layer.',
    assessmentPA: {
      value: 'Required: Optum’s ABA Supplemental Clinical Criteria say "Prior authorization is required for ABA" unless "otherwise specified or mandated by contract or law"',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required: treatment is authorized after the assessment; the review interval is set per authorization',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express or the behavioral health number on the card: ask what review interval will be set on this member’s ABA treatment authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5-TR ASD diagnosis confirmed with clinically validated tools',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in North Dakota',
    state: 'ND', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · North Dakota',
    h1: 'UnitedHealthcare / Optum ABA coverage in North Dakota: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in North Dakota: Prior Auth & Coverage Rules | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for North Dakota families: Optum’s ABA criteria and authorization, telehealth limits, credential modifiers, North Dakota’s Bulletin 2018-1 (no autism statute), behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in North Dakota, a UnitedHealthcare card means three layers: Optum Behavioral Health’s national ABA criteria, North Dakota’s Bulletin 2018-1 (the state has no autism statute), and the plan’s funding type. UnitedHealthcare is not a North Dakota Medicaid plan: children’s Medicaid ABA is fee-for-service.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'No autism statute; ND Insurance Department Bulletin 2018-1 (July 10, 2018), applying federal parity' },
      { label: 'Mandate age', value: 'None set; the bulletin carries no age limit (its ABA paragraph refers to children)' },
      { label: 'Mandate caps', value: 'None set; autism benefits may not carry limits stricter than medical/surgical benefits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (not regulated by the Insurance Department)' },
      { label: 'Licensure', value: 'Yes: licensed behavior analyst / assistant under N.D.C.C. ch. 43-64 (Board of Integrative Health Care)' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in North Dakota',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; annual review August 2025, interim review April 2026): prior authorization for ABA, direct case supervision of "1–2 hours for every 10 hours of direct" treatment consistent with CASP standards, and continued-service review that looks at use of authorized hours below 80%. Optum’s ABA State Mandates supplement carries state-specific entries (among them Arizona, California, Connecticut, Florida, Kentucky, Maryland, New Jersey, Ohio, Pennsylvania and Virginia, some for Medicaid only); North Dakota is not among them, so no North Dakota-specific criteria modify the commercial policy.',
        ],
        cites: [S.optumSCC, S.optumSM],
      },
      {
        h2: 'The North Dakota coverage rule: Bulletin 2018-1',
        body: [ND_COVERAGE_BODY],
        cites: [S.bull2018, S.doiNews, S.c2636],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [ND_LICENSURE_BODY],
        cites: [S.c4364, S.ndac112, S.c4357, S.bacbLic, S.profFee],
      },
      {
        h2: 'Claims operations in North Dakota',
        body: [ND_CLAIMS_BODY],
        cites: [S.c2636, S.pa3612],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA?',
        body: [
          'UnitedHealthcare publishes no ABA rate table; Optum pays from the contract. Optum’s National Network Manual (effective Sept. 1, 2026) defines the "Fee Maximum" as the maximum amount a participating provider may be paid for a service, adding that "Reimbursement to clinicians is based upon licensure rather than degree." Optum’s commercial ABA Reimbursement Policy (2022RP501A; history through June 2026) puts the credential level on each line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a doctoral-level provider, and says "There is no CPT code for reporting indirect services separately." Ask Optum network management for your rate sheet. For a public benchmark, ND Medicaid’s August 2026 fee schedule pays 97153 at $10.81 per unit.',
        ],
        cites: [S.optumNNM, S.optumReimb, S.profFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Insured in North Dakota (Bulletin 2018-1 applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification on Provider Express.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2 and others). Optum asks for the instrument.' },
      { title: 'Credential level of each clinician', desc: 'Each claim line carries HM, HN, HO or HP; technicians should be RBTs.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumReimb, S.optumNNM, S.elig, S.bull2018, S.doiNews, S.c2636, S.pa3612, S.cob, S.c4364, S.ndac112, S.c4357, S.bacbLic, S.erisa, S.tpl, S.tricare, S.champva, S.profFee],
    deliveryRules: {
      supervision: {
        value: 'Consistent with CASP standards, direct case supervision is required at 1–2 hours for every 10 hours of direct treatment. Technicians work under a BCBA or licensed behavioral health clinician; Optum does not recommend parents serving as their own child’s RBT. In North Dakota the supervisor must hold a ch. 43-64 license (or be a licensed psychologist practicing within competence).',
        status: 'verified',
        cites: [S.optumSCC, S.ndac112],
      },
      concurrentBilling: {
        value: 'Not addressed. The SCC describe direct case supervision during direct treatment but do not state the billing consequence.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual and the participating-provider agreement, or a written coding determination from Optum.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap in the SCC. Hours must be justified by clinical need at the least restrictive appropriate level, and use of authorized hours below 80% triggers review at continued-service requests.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      noteSignature: {
        value: 'Not addressed. The SCC set what must be documented for coverage, not who signs a session note or when.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual (documentation standards) and the participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'ABA is provided at "the least restrictive and most clinically appropriate level." Not covered: services that are not ABA, "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA; school coordination is allowed.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      billAsProvider: {
        value: 'Each claim line carries the rendering credential: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a doctoral-level provider; the policy notes state requirements "may supplement, modify or supersede" it. Optum reimburses "based upon licensure rather than degree," so in North Dakota the ch. 43-64 license is the credential that matters.',
        status: 'verified',
        cites: [S.optumReimb, S.optumNNM, S.c4364],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion; the member’s benefit plan governs.' + ND_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.bull2018],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with validated tools, and treatment intensity is set from a current baseline measure.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'The diagnosis "must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis" under DSM-5-TR criteria.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool from a non-exhaustive list: second-level screens (CARS/CARS-2, RITA-T, STAT) and formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral in the SCC; ABA requires prior authorization through Optum.' + ND_REFERRAL_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.bull2018],
        verifyVia: 'Optum Provider Express or the behavioral health number on the card: ask whether the plan requires a physician or psychologist order.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Three codes. Optum’s Telehealth Billing guide (updated September 2025) says for commercial plans: "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157." So the 97151 assessment and technician 97153 are not on Optum’s telehealth list. Telehealth claims must use POS 02 or POS 10, reflecting where the member is.' + ND_TELEHEALTH_TAIL,
        status: 'verified',
        cites: [S.optumTele, S.c2636],
      },
      authTurnaround: {
        value: ndAuthTurnaround('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.pa3612, S.erisa],
        verifyVia: ndAuthVerify('UnitedHealthcare/Optum'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: ndCob('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.cob, S.tpl, S.tricare, S.champva],
        verifyVia: ndCobVerify('UnitedHealthcare/Optum'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in North Dakota?', a: 'Yes, under Optum’s national ABA criteria for autism. For insured North Dakota plans, Bulletin 2018-1 also bars excluding ABA as experimental. Self-funded employer plans follow their own documents.' },
      { q: 'Does Optum have North Dakota-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement does not list North Dakota, so the national criteria apply.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in North Dakota?', a: 'Optum’s commercial telehealth guide allows only 97155, 97156 and 97157 by telehealth, billed POS 02 or 10. The 97151 assessment and 97153 are not on that list.' },
      { q: 'What does UnitedHealthcare pay for ABA in North Dakota?', a: 'Optum publishes no ABA rates. You are paid up to the Fee Maximum in your agreement, and each line carries a credential modifier (HM RBT, HN BCaBA, HO BCBA, HP doctoral). ND Medicaid’s 97153 rate ($10.81 per unit) is the only public benchmark.' },
      { q: 'Does UnitedHealthcare require RBT certification for ABA technicians?', a: 'For commercial plans, Optum’s reimbursement policy defines the HM technician line as "a Registered Behavior Technician (RBT)," and notes state requirements may supplement it. North Dakota exempts technicians from licensure only while they work under a licensed behavior analyst’s direction.' },
    ],
  },
};

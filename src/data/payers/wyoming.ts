import type { PayerConfig, PayerSource } from './types.js';

/* Wyoming — researched October 2026 from primary sources only.
   wyomingmedicaid.com serves the CMS-1500 provider manual (v20.0, effective 10/01/2026) and the
   downloadable fee schedule (FeeSchedule.xlsx, run date 10/01/2026, linked from the CPT-licence
   "I ACCEPT" button on /portal/user-agreement) to plain curl. wyoleg.gov serves the compiled
   Title 26 and Title 33 PDFs. The Insurance Department's Bulletin 01-2019 is a scanned PDF on
   Google Drive linked from doi.wyo.gov/legal/memorandum (read as page images).
   BCBSWY's medical policies live on Highmark's medpolicy site (securecms.highmark.com), whose
   search is JavaScript-only and which returned a TLS-chain error / 503 to every fetch: the BCBSWY
   ABA medical policy was NOT read, and every BCBSWY clinical fact below is unverified for that reason.
   Wyoming Medicaid has no medical managed care organizations; the only managed care entity is the
   Care Management Entity (a single PAHP run by Magellan) for high-fidelity wraparound, which does
   not cover ABA — so this state has one Medicaid guide and no MCO guides. */

const S: Record<string, PayerSource> = {
  cms1500: { title: 'Wyoming Medicaid — CMS-1500 Provider Manual (Acentra Health, v20.0, effective 10/01/2026; ch. 6, 7, 9, 12.7 ABA)', url: 'https://wyomingmedicaid.com/portal/References/latestproviderfiles/BMS_Acentra%20Health_CMS-1500%20Provider%20Manual_N_2026.10.01_v20.0.pdf' },
  fee: { title: 'Wyoming Medicaid — Downloadable Fee Schedule (FeeSchedule.xlsx, run date 10/01/2026)', url: 'https://www.wyomingmedicaid.com/portal/sites/default/files/inline-files/Fee_Schedules/FeeSchedule.xlsx' },
  feePage: { title: 'Wyoming Medicaid — Fee Schedules (CPT licence agreement, then download)', url: 'https://www.wyomingmedicaid.com/portal/fee-schedules' },
  spa: { title: 'Wyoming State Plan Amendment TN 24-0005 — ABA moved to EPSDT / Preventive Services (approved 10/31/2024, eff. 7/1/2024)', url: 'https://www.medicaid.gov/medicaid/spa/downloads/WY-24-0005.pdf' },
  spaNotice: { title: 'Wyoming Department of Health — Public and Tribal Notice, Applied Behavioral Analysis (ABA) Services (April 26, 2024)', url: 'https://health.wyo.gov/wp-content/uploads/2024/04/Public-and-Tribal-Notice-Applied-Behavorial-Analysis.pdf' },
  w1915b: { title: 'Wyoming 1915(b) Waiver renewal (Wyoming Youth Initiative / Care Management Entity), public-notice draft, March 2024', url: 'https://health.wyo.gov/wp-content/uploads/2024/03/1915_b-Waiver.2024.3.26_FINAL-DRAFT-for-Public-Notice.pdf' },
  cmeDeck: { title: 'Wyoming Department of Health / Magellan — Children’s Mental Health Waiver and High Fidelity Wraparound overview (posted May 2026)', url: 'https://health.wyo.gov/wp-content/uploads/2026/05/Childrens-Mental-Health-Waiver.pdf' },
  title33: { title: 'Wyoming Statutes Title 33, ch. 27 — W.S. 33-27-113 (definitions), 33-27-119 (practice without license), 33-27-124 (behavior analyst licensure), 33-27-125 (exemptions)', url: 'https://wyoleg.gov/statutes/compress/title33.pdf' },
  hb110: { title: 'Wyoming HB0110, Enrolled Act No. 18 (2022) — created behavior analyst licensure under the State Board of Psychology', url: 'https://www.wyoleg.gov/2022/Enroll/HB0110.pdf' },
  psy14: { title: 'Wyo. Board of Psychology Rules ch. 14, § 14-5 — Supervision, BCaBA (eff. 1/30/2023)', url: 'https://www.law.cornell.edu/regulations/wyoming/068-14-Wyo-Code-R-SS-14-5' },
  psy4: { title: 'Wyo. Board of Psychology Rules ch. 4, § 4-3 — Behavior Analyst License Application Requirements (BACB the sole certifying entity)', url: 'https://www.law.cornell.edu/regulations/wyoming/068-4-Wyo-Code-R-SS-4-3' },
  psy3: { title: 'Wyo. Board of Psychology Rules ch. 3, § 3-1 — License Types (temporary license is for psychologists only)', url: 'https://www.law.cornell.edu/regulations/wyoming/068-3-Wyo-Code-R-SS-3-1' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Wyoming: 2022, WY Board of Psychology)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  doiBull: { title: 'Wyoming Insurance Department Bulletin No. 01-2019 — Coverage of Treatments for Autism Spectrum Disorder (April 19, 2019)', url: 'https://drive.google.com/open?id=1lO3Ix_H6YEDE-Ac60d9KadGEixbDjZ_u' },
  doiMemos: { title: 'Wyoming Insurance Department — Memoranda and Bulletins index (Bulletin 01-2019 listed)', url: 'https://doi.wyo.gov/legal/memorandum' },
  title26: { title: 'Wyoming Statutes Title 26 (Insurance Code) — 26-15-124 claim payment, 26-20-701 mental health parity, 26-34-133 HMO COB, 26-55 prior authorization, 26-56 credentialing', url: 'https://wyoleg.gov/statutes/compress/title26.pdf' },
  hb14: { title: 'Wyoming HB0014, Enrolled Act No. 14 (2024) — Ensuring Transparency in Prior Authorization Act (eff. 7/1/2024; 26-55-112 eff. 1/1/2026)', url: 'https://wyoleg.gov/2024/Enroll/HB0014.pdf' },
  cfr447: { title: '42 CFR 447.45 — Medicaid timely claims payment (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-447/subpart-A/section-447.45' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr440130: { title: '42 CFR 440.130(c) — Medicaid “preventive services” definition (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-A/section-440.130' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  aetnaCPB: { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025; experimental for non-ASD indications)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (Network Participation Criteria, 8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  aetnaTele: { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table: Commercial vs. Medicare columns; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026; incl. Wyoming Regulatory Addendum)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA STM, annual review 7/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumNNM: { title: 'Optum National Network Manual (BH02330, effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  bcbsPM: { title: 'Blue Cross Blue Shield of Wyoming — Provider Policies and Procedures Manual (revised May 28, 2026; posted as effective 6/16/26)', url: 'https://www.bcbswy.com/wp-content/uploads/BCBSWY-Provider-Manual-Effective-061626.pdf' },
  bcbsPA: { title: 'Blue Cross Blue Shield of Wyoming — Prior Authorization Service Request / CPT Authorization Codes page', url: 'https://www.bcbswy.com/providers/preadmin/precert/' },
  bcbsPolicy: { title: 'Blue Cross Blue Shield of Wyoming — Medical Policy (hosted on Highmark’s Wyoming policy search; not retrievable this run)', url: 'https://www.bcbswy.com/providers/policy/' },
  bcbsCred: { title: 'Blue Cross Blue Shield of Wyoming — Credentialing Guidelines (updated 5/2024)', url: 'https://www.bcbswy.com/providers/credentialing/credentialing-guidelines/' },
};

/* ---- Shared Wyoming commercial layer (same facts on every commercial guide) ---- */
const WY_MANDATE_BODY =
  'Wyoming has no autism insurance statute, and intake should say so plainly. The state’s autism coverage comes from mental-health parity. W.S. 26-20-701 (the Mental Health and Substance Use Disorder Insurance Parity Act, House Enrolled Act 89, signed February 27, 2019) requires individual and group health insurance policies, nonprofit service contracts and HMO contracts to meet the federal Mental Health Parity and Addiction Equity Act. On April 19, 2019 the Insurance Department issued Bulletin No. 01-2019 applying it to autism: "treatments for Autism Spectrum Disorder cannot be excluded from the mental health services in an insurance policy," for "all individual and group health insurance policies that offer mental health benefits and are under the jurisdiction of the Department," effective "no later than July 1, 2019." Three lines matter most for ABA. "Exclusion of Applied Behavior Analysis (ABA) therapy to treat children with autism spectrum disorder on the basis that ABA therapy is experimental or investigational treatment will not be allowed." Autism benefits "may not be subject to any separate cost-sharing requirements or treatment limitation that only apply to mental health/substance use disorder benefits," and any quantitative or non-quantitative limit (including preauthorization and medical-necessity rules) must match what applies to medical/surgical benefits in the same classification. And carriers may still review medical necessity, including periodic review of continuing treatment, if the review is no more stringent than for medical/surgical care. The bulletin defines treatment as "evidence-based care and related equipment prescribed or ordered for an individual diagnosed with an autism spectrum disorder by a licensed physician or a licensed psychologist who determines the care to be medically necessary, including but not limited to behavioral health treatment." It sets no age limit and no dollar cap. Its limits: a bulletin is weaker than a statute; it reaches only policies that include mental health coverage; and self-funded employer plans regulated by ERISA are outside the Department’s jurisdiction.';

const WY_LICENSURE_BODY =
  'Wyoming licenses behavior analysts. Since 2022 (HB0110, Enrolled Act 18) the State Board of Psychology "shall issue a license as a behavior analyst or an assistant behavior analyst" to an applicant who "holds a current certification as a board certified behavior analyst" (or BCaBA) verified with the certifying entity (W.S. 33-27-124(a)); the Board’s rules name "The BACB" as "the sole certifying entity recognized by the Board" and require BACB verification, license verification from every other state, proof of lawful presence and fingerprint cards (Rules ch. 4, § 4-3). A licensed assistant behavior analyst practices "only under the supervision of a licensed behavior analyst or licensed psychologist" (33-27-124(c)); the Board’s rule requires that supervision to be "at least two percent (2%) of the total behavior-analytic service hours provided per month," with at least one meeting a month (Board Rules ch. 14, § 14-5). Behavior technicians are not licensed: 33-27-125(a)(viii) exempts a technician "under the supervision of a licensed behavior analyst or licensed assistant behavior analyst," who may not design assessment or intervention plans, and (ix) exempts a caregiver working under that analyst’s direction. Representing yourself as a behavior analyst and practicing without a license or an exemption is a misdemeanor (33-27-119(b)). For a BCBA licensed in another state there is no shortcut written down for behavior analysts: 33-27-124(b) lets the Board license someone "currently licensed as a behavior analyst … in good standing in another jurisdiction that has licensure requirements comparable to" Wyoming’s, but that is still a Wyoming license, and the Board’s temporary 30-day license (Rules ch. 3, § 3-1) is written only for psychologists. Payers add their own floor: Wyoming Medicaid says a telehealth provider "must be licensed by, or otherwise under the jurisdiction of, the appropriate State of Wyoming licensing board," and BCBSWY says telemedicine providers "must be licensed in Wyoming." Plan on a Wyoming license for any BCBA treating a Wyoming child, including by telehealth. Credentialing has a state clock: under W.S. 26-56-102 a carrier must acknowledge an application within 7 calendar days, flag an incomplete one within 30, and "conclude the process of credentialing … within sixty (60) calendar days," and once you are credentialed with a contract in effect it must pay covered services "beginning with the date the health carrier received a completed credentialing application." Commercial ABA rates are negotiated and unpublished; the only public benchmark is the Wyoming Medicaid fee schedule (97153 $12.30 and 97155 $24.60 per 15-minute unit from July 1, 2026).';

const WY_CLAIMS_BODY =
  'Wyoming’s insurance code sets three clocks that apply to fully insured plans. Claims: "Claims for benefits under a life, accident or health insurance policy shall be rejected or accepted and paid by the insurer … within forty-five (45) days after receipt of the proofs of loss and supporting evidence" (W.S. 26-15-124(a)); a court can add attorney’s fees and 10% interest when a refusal to pay is unreasonable. Prior authorization: the Ensuring Transparency in Prior Authorization Act (W.S. 26-55, effective July 1, 2024) requires a decision on a non-urgent request "within five (5) calendar days of obtaining all necessary information" and on an urgent one within 72 hours, after which an urgent request "shall be considered authorized"; it defines urgent services to "include mental and behavioral health care services." Outpatient authorizations must be valid for "not less than one (1) year," an approval cannot be revoked if the service is delivered within 45 business days, a new plan must honor a prior plan’s authorization for at least 90 days, a peer-to-peer must be offered within 5 business days of a denial, and since January 1, 2026 a provider whose requests for a service were at least 90% approved (minimum five requests) in the past 12 months is exempt from PA for that service for a year (26-55-112). Telehealth: a policy covering mental health may not deny coverage for a service "delivered using remote audio or audio-visual delivery systems" if it would cover it in person, may not charge higher cost-sharing, and may not pay the provider less than in person (W.S. 26-20-701(b)). Autism treatment counts as mental health under the Department’s Bulletin 01-2019. Whether a given ABA code is "covered in person" is still the plan’s call, and self-funded ERISA plans sit outside all three statutes.';

const MANDATE_REFERRAL_TAIL =
  ' Wyoming’s Bulletin 01-2019 defines covered autism treatment as care "prescribed or ordered for an individual diagnosed with an autism spectrum disorder by a licensed physician or a licensed psychologist," so keep that prescription or order on file for a fully insured plan. Self-funded ERISA plans sit outside the bulletin.';

const MANDATE_AGE_TAIL =
  ' For fully insured Wyoming plans that include mental health coverage, Bulletin 01-2019 sets no age limit and no dollar cap, and bars autism-only limits that do not apply to medical/surgical benefits. Self-funded ERISA plans are outside it, so plan funding type decides whether that binds.';

const WY_TAT_VALUE = (carrier: string) =>
  'Depends on how the plan is funded. Fully insured plans fall under W.S. 26-55: a non-urgent prior-authorization decision is due "within five (5) calendar days of obtaining all necessary information to complete the review," and an urgent one within 72 hours, after which it "shall be considered authorized." The Act defines urgent health care services to "include mental and behavioral health care services," which read literally puts behavioral health requests, ABA included, on the 72-hour clock; ask the carrier how it applies that. An outpatient authorization must be valid for "not less than one (1) year" (one year for a chronic condition), and a peer-to-peer must be offered within 5 business days of an adverse determination. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours. ' + carrier + ' publishes no Wyoming-specific ABA turnaround or reauthorization lead time.';

const WY_TAT_VERIFY = (carrier: string) =>
  'At benefits verification ask whether the plan is fully insured (Wyoming-regulated) or self-funded (ERISA), whether ' + carrier + ' treats ABA as an urgent behavioral health service under W.S. 26-55-102(a)(x), and what authorization length and reauthorization lead time it will use.';

const WY_COB_VALUE = (carrier: string) =>
  'No Wyoming coordination-of-benefits rule for insurers was read this run (W.S. 26-34-133 only says an HMO’s COB provisions must be "consistent with the coordination of benefits provisions that are in general use in the state"), so the order for a child on two parents’ plans comes from the plans themselves; most use the birthday rule (BCBSWY’s provider manual does). If the child also has Wyoming Medicaid, ' + carrier + ' pays first: Medicaid "is the payer of last resort" and pays no more than the remaining patient responsibility (42 CFR 433.139; Wyoming Medicaid CMS-1500 manual ch. 7). TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).';

const WY_COB_VERIFY = (carrier: string) =>
  'Ask ' + carrier + ' at benefits verification for the member’s coordination-of-benefits order (and whether the plan uses the birthday rule), and record every other coverage the child has.';

export const wyomingPayers: Record<string, PayerConfig> = {
  'wyoming-medicaid': {
    slug: 'wyoming-medicaid',
    cardDesc: 'Fee-for-service only (no MCOs). ABA under EPSDT for ages 0–20; no up-front PA, but PA via Telligen after 30 behavioral-health visit dates a year.',
    assessmentPA: {
      value: 'No up-front prior authorization: the 10/01/2026 fee schedule’s PRIOR_AUTH column is blank for 97151 and every other ABA code. But 97151–97158 count toward Wyoming Medicaid’s behavioral-health service threshold (30 dates of service per calendar year, all codes on one date counting as one visit), and PA from Telligen is required past it',
      status: 'verified',
      cites: [S.fee, S.cms1500],
    },
    treatmentPA: {
      value: 'Not up front, but in practice yes: 97151–97158 are inside the 30-visit-per-year behavioral-health threshold, and "for Medicaid Members with dates of service in excess of thirty (30) per calendar year, a prior authorization is required" from Telligen. 0362T and 0373T are not in the threshold code list',
      status: 'verified',
      cites: [S.cms1500, S.fee],
    },
    dxRequired: {
      value: 'Yes. "Applied Behavior Analysis (ABA) treatments are allowable to children between the ages of zero (0) to 20 years of age with a diagnosis of Autism Spectrum Disorder" (provider manual 12.7; state plan TN 24-0005)',
      status: 'verified',
      cites: [S.cms1500, S.spa],
    },
    payer: 'Wyoming Medicaid',
    state: 'WY', kind: 'state-medicaid',
    pill: 'Payer Guide · Wyoming Medicaid',
    h1: 'Wyoming Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Wyoming Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Wyoming Medicaid covers ABA: an EPSDT benefit for ages 0–20 paid fee-for-service (no managed care plans), the 30-visit behavioral-health threshold that triggers Telligen prior authorization, the July 2026 rates, Wyoming behavior-analyst licensure, and what intake should collect.',
    intro: [
      'Wyoming Medicaid covers applied behavior analysis for children with autism through EPSDT. The state plan, as amended by TN 24-0005 (approved October 31, 2024, effective July 1, 2024), moved ABA out of rehabilitative mental health services and into Preventive Services, cross-referenced from expanded EPSDT: "Applied Behavior Analysis (ABA) treatments are allowable to children between the ages of 0-20 years of age with a diagnosis of Autism Spectrum Disorder." The operating rules are in chapter 12.7 of the CMS-1500 provider manual (version 20.0, effective October 1, 2026).',
      'Wyoming is simpler than most states in one respect: there are no Medicaid health plans to contract with. Every Wyoming Medicaid ABA claim goes to the state’s fee-for-service system. The only managed care entity in Wyoming Medicaid is the Care Management Entity run by Magellan for high-fidelity wraparound, which does not authorize or pay for ABA. The harder parts are a visit threshold that turns into prior authorization within weeks for a full-time ABA case, low rates, and a state behavior-analyst license that every BCBA needs.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, through EPSDT, for ages 0–20 with an ASD diagnosis' },
      { label: 'Structure', value: 'Fee-for-service only: no Medicaid MCOs; Magellan’s CME handles youth wraparound, not ABA' },
      { label: 'Prior auth', value: 'None up front; Telligen PA once a child passes 30 behavioral-health visit dates in a calendar year' },
      { label: 'Rates (per 15 min, from 7/1/2026)', value: '97151/97155/97156 $24.60 · 97152/97153/0362T/0373T $12.30 · 97154 $4.04 · 97157 $8.20 · 97158 $9.31' },
      { label: 'Who may deliver', value: 'BCBA-D or BCBA; BCaBA and RBT enrolled under a BCBA group, supervised 1–2 hours per 10 technician hours' },
      { label: 'Licensure', value: 'Yes: Wyoming Board of Psychology licenses behavior analysts and assistants (W.S. 33-27-124, 2022)' },
      { label: 'Timely filing', value: '12 months (365 days) from the date of service for a clean claim' },
      { label: 'Other insurance', value: 'Medicaid pays last; bill the commercial plan first' },
    ],
    sections: [
      {
        h2: 'Where ABA sits: EPSDT, paid fee-for-service',
        body: [
          'The state plan lists ABA among the expanded EPSDT services "available to treat conditions detected in children and young adults under the age of 21," and says of all of them: "A prior authorization process will determine the medical necessity and most cost effective setting for the service," and limits "are not applicable to EPSDT recipients if the service is determined to be medically necessary as a result of an EPSDT referral and is prior authorized." The ABA page itself names the covered services (behavior identification assessment, supporting assessment, adaptive behavior treatment, family treatment guidance) and the practitioners: BCBA-D and BCBA, with BCaBAs and RBTs covered "when they are supervised by" one of them.',
          'There is no managed care layer to navigate. The provider manual routes ABA claims to Wyoming Medicaid directly, and its prior-authorization table lists Magellan Healthcare only for "Care Management Entity (CME) services," namely family care coordination, family and youth peer support, youth and family training and support, and respite. The state’s 1915(b) waiver describes the CME as a single prepaid ambulatory health plan for high-fidelity wraparound serving Medicaid youth with complex behavioral health needs (Magellan’s materials put eligibility at ages 4 to 20). A child can be in wraparound and receive ABA at the same time, but the ABA is billed to Wyoming Medicaid, not Magellan.',
        ],
        cites: [S.spa, S.spaNotice, S.cms1500, S.w1915b, S.cmeDeck],
      },
      {
        h2: 'Prior authorization: the 30-visit threshold',
        body: [
          'Wyoming Medicaid does not require prior authorization before ABA starts. The downloadable fee schedule (run date October 1, 2026) carries a PRIOR_AUTH flag on about 1,450 code lines; none of 97151–97158, 0362T or 0373T is flagged. The catch is the behavioral-health service threshold in manual section 6.7. Codes 97151–97158 sit in the threshold code list alongside psychotherapy and therapy codes, "all modalities on same date of service count as 1 visit," and from 2021 dates of service the threshold "applies to all Members," under-21s included. Section 12.8.1: "For Medicaid Members with dates of service in excess of thirty (30) per calendar year, a prior authorization is required, which can be obtained through Telligen." A child in ABA four or five days a week reaches 30 dates in six to eight weeks, so request the Telligen authorization before then. Visits with different treating providers on the same day count separately.',
          'Telligen (833-610-1057) wants a clinical assessment, the most recent treatment plan ("must be reviewed every 90 days"), and progress notes showing movement toward the plan’s goals. Requests should arrive before the dates of service; "Any requests to Telligen that are for dates of service which are past timely filing will not be reviewed." An administrative denial can be reconsidered if new information arrives "within thirty (30) days of the denial"; after a reconsideration upholds a denial, the provider appeals to the state by email to the Utilization Management Coordinator, citing the Telligen reference number. One wrinkle: the threshold section’s template language describes services as "rehabilitative in nature," written for adult behavioral health; ABA has been an EPSDT preventive service since July 2024, so frame requests around EPSDT medical necessity.',
        ],
        cites: [S.cms1500, S.fee, S.spa],
      },
      {
        h2: 'What does Wyoming Medicaid pay for ABA?',
        body: [
          'Rates rose on July 1, 2026. A provider bulletin (deployed August 7, 2026, reprinted in the manual’s notifications log) gives 97153 by an RBT moving from $10.25 to $12.30 and 97155 by a BCBA from $20.50 to $24.60 per 15-minute unit, and the October 1, 2026 fee schedule shows the full set: 97151 $24.60; 97152 $12.30; 97153 $12.30; 97154 $4.04; 97155 $24.60; 97156 $24.60; 97157 $8.20; 97158 $9.31; 0362T $12.30; 0373T $12.30. The schedule also carries price rows for ages 21 and over and separate, higher rows for 97151–97153 under the four developmental-disability waiver benefit plans ($32.27, $20.56 and $19.23); the state plan and manual limit the EPSDT ABA benefit itself to ages 0–20.',
          'The same bulletin settles a billing question that drives the revenue model: "The appropriate CPT code is determined by the service being performed, not solely by the credentials of the rendering provider." A BCBA delivering routine treatment from an established protocol bills 97153; 97155 "should be billed only when a BCBA or other qualified healthcare professional is actively assessing, modifying, or adapting the treatment protocol during a face-to-face session." The manual adds that indirect work (goal writing, data analysis, care coordination, staff training without the patient) is bundled, and "The only code that can be billed for indirect services is 97151."',
        ],
        cites: [S.fee, S.feePage, S.cms1500],
      },
      {
        h2: 'Staffing, enrollment and licensure',
        body: [
          'The manual’s ABA provider table requires BACB credentials at every tier: BCBA-D or BCBA (taxonomy 103K00000X), BCaBA (106E00000X) and RBT (106S00000X). BCBAs enroll "as an individual or in" a Board Certified Behavior Analyst group; BCaBAs and RBTs enroll only in a BCBA group. Since October 1, 2026 the assessment code 97151 is BCBA or BCBA-D only, and supervision "by a QHP/BCBA is required (approximately 1-2 hours per 10 hours of direct care by the technician)," raised from one hour per ten in this version of the manual. The supervision is bundled into the technician codes; when the BCBA is face-to-face directing the technician and modifying the protocol, that time is billed as 97155.',
          'Wyoming is a licensure state. ' + WY_LICENSURE_BODY,
        ],
        cites: [S.cms1500, S.title33, S.hb110, S.psy14, S.psy4, S.psy3, S.bacbLic],
      },
      {
        h2: 'Claims operations: filing, payment, NPIs, telehealth, appeals',
        body: [
          'Timely filing is 12 months: "The Provider must submit a clean claim to Medicaid within 12 months (365 days) of the date of service," with six months from a retroactive-eligibility determination, and timely filing "will not be waived when a claim is denied due to Provider billing errors or involving third party liability." Wyoming publishes no shorter payment promise of its own; federal rule requires the state to pay 90% of clean practitioner claims within 30 days of receipt and 99% within 90 days. Span billing is not allowed for behavioral health: each date of service goes on its own line.',
          'Every enrolled clinician is a rendering provider. "Those Provider types able to enroll with Wyoming Medicaid, even if working under the supervision of another practitioner, must enroll and be noted on the claim as the rendering Provider," with the individual NPI and taxonomy in box 24J, so an RBT’s 97153 line carries the RBT’s own NPI under the BCBA group. Telehealth uses the same codes and rates with modifier GT or 95, real-time audio and video only. The manual does not mention electronic visit verification anywhere. Claim appeals go to Provider Services, (888) 996-6223, on the First Level Appeal and Grievance Request Form, and a second-level form exists for disputing that decision.',
        ],
        cites: [S.cms1500, S.cfr447],
      },
    ],
    collect: [
      { title: 'Medicaid ID and eligibility', desc: 'Wyoming Medicaid only; no health plan card to check. Verify eligibility on the date of service.' },
      { title: 'ASD diagnosis', desc: 'The benefit is for ages 0–20 "with a diagnosis of Autism Spectrum Disorder."' },
      { title: 'Visit count this year', desc: 'Ask whether the child has other behavioral-health visits this calendar year: they count toward the 30-visit threshold that triggers Telligen PA.' },
      { title: 'Recommendation for ABA', desc: 'A physician’s or licensed practitioner’s recommendation, since ABA is a preventive service under the state plan.' },
      { title: 'Other insurance', desc: 'Commercial coverage is billed first; Medicaid pays only the remaining patient responsibility.' },
      { title: 'Wraparound status', desc: 'If the family is in Magellan’s high-fidelity wraparound, get the care coordinator’s contact for the plan of care.' },
    ],
    sources: [S.cms1500, S.fee, S.feePage, S.spa, S.spaNotice, S.w1915b, S.cmeDeck, S.title33, S.hb110, S.psy14, S.psy4, S.psy3, S.bacbLic, S.cfr447, S.cfr440, S.cfr440130, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'Supervision "by a QHP/BCBA is required (approximately 1-2 hours per 10 hours of direct care by the technician)" (manual 12.7.3, raised from 1 hour per 10 on 10/01/2026). It is bundled into the technician codes; face-to-face direction with protocol modification is billed as 97155. BCaBAs and RBTs are covered when supervised by a BCBA-D or BCBA (state plan). Wyoming Board rules separately require BCaBA supervision of at least 2% of monthly service hours.',
        status: 'verified',
        cites: [S.cms1500, S.spa, S.psy14],
      },
      concurrentBilling: {
        value: 'Allowed for 97153 with 97155 only. Behavioral health documentation must show "No overlapping behavioral health services, except for codes 97153 and 97155" (manual 12.9.2); any other overlapping behavioral health services for the same member and time cannot be billed.',
        status: 'verified',
        cites: [S.cms1500],
      },
      dailyLimits: {
        value: 'The manual’s ABA code table sets daily maximums: 97151, 32 units (per NCCI MUE); 97153, 32; 97154, 32; 97155, 16; 97156, 4; 97157, 4; 97158, 32. No daily maximum is printed for 97152, 0362T or 0373T. Separately, 97151–97158 count toward the 30-visit-per-calendar-year behavioral-health threshold, beyond which Telligen PA is required.',
        status: 'verified',
        cites: [S.cms1500],
      },
      noteSignature: {
        value: 'Entries "shall be signed and dated by the qualified staff member providing service," with "Full signature, including licensure or certification of the treating Provider"; providers "shall not sign for a service prior to the service being completed." Progress notes are required "for every contact billed to Medicaid" with start and end times, and all documentation and signatures must be complete "before or at the time the Provider submits a claim"; documentation completed afterwards is "insufficient to substantiate the claim."',
        status: 'verified',
        cites: [S.cms1500],
      },
      placeOfService: {
        value: 'Not covered: "Diagnosis or treatment in a school-based setting by a Provider employed by the school district" (manual 12.8). No other ABA setting restriction appears in the manual; the state plan allows services "in a facility, a home or other setting." Telehealth to the home is allowed with the member’s consent.',
        status: 'verified',
        cites: [S.cms1500, S.spa],
      },
      billAsProvider: {
        value: 'The rendering clinician’s own NPI. Provider types that can enroll "must enroll and be noted on the claim as the rendering Provider" even when supervised (manual 9.2), with the individual NPI and taxonomy in box 24J. BCBAs enroll individually or in a BCBA group; BCaBAs (106E00000X) and RBTs (106S00000X) enroll in a BCBA group, so the group is pay-to and the RBT or BCaBA is rendering on technician lines.',
        status: 'verified',
        cites: [S.cms1500],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Ages 0 through 20: ABA is "allowable to children between the ages of zero (0) to 20 years of age with a diagnosis of Autism Spectrum Disorder" (manual 12.7; state plan TN 24-0005). The fee schedule carries 21+ price rows, but the ABA benefit as written stops at 20.',
        status: 'verified',
        cites: [S.cms1500, S.spa, S.fee],
      },
      dxRecency: {
        value: 'No diagnosis recency rule appears in the manual’s ABA chapter or the state plan. The dated requirement is the treatment plan, which Telligen expects "reviewed every 90 days" once the threshold is passed.',
        status: 'unverified',
        cites: [S.cms1500, S.spa],
        verifyVia: 'Telligen utilization management, (833) 610-1057, or Wyoming Medicaid Provider Services, (888) 996-6223: ask whether an initial or threshold ABA request needs a diagnostic evaluation of a certain age.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'Neither the manual nor the state plan names who may make the ASD diagnosis. Note that Wyoming’s licensure statute excludes "the diagnosis of psychological disorders" from the practice of behavior analysis (W.S. 33-27-113(a)(xiii)), so a BCBA’s assessment is not the diagnosis.',
        status: 'unverified',
        cites: [S.cms1500, S.spa, S.title33],
        verifyVia: 'Wyoming Medicaid Provider Services, (888) 996-6223, or Telligen, (833) 610-1057.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'No named diagnostic instrument appears in the manual or the state plan.',
        status: 'unverified',
        cites: [S.cms1500, S.spa],
        verifyVia: 'Telligen, (833) 610-1057: ask which instruments it expects with a threshold ABA request.',
        blocker: 'document',
      },
      referral: {
        value: 'The manual’s ABA chapter names no referral or order requirement. ABA sits in the state plan’s Preventive Services section (TN 24-0005), and federal rule defines preventive services as services "recommended by a physician or other licensed practitioner of the healing arts," so keep a written recommendation on file.',
        status: 'verified',
        cites: [S.cms1500, S.spa, S.cfr440130],
      },
      telehealth: {
        value: 'Allowed for enrolled BCBAs, who are on the manual’s list of distant-site practitioners. Telehealth must be "real time interactive audio and video"; telephone-only does not count. "The same procedure codes and rates apply as for services delivered in person," billed with modifier GT or 95. The child’s home can be the originating site with consent (verbal, email or text, documented), but no originating-site fee is paid when the family uses its own device. The provider "must be licensed by, or otherwise under the jurisdiction of, the appropriate State of Wyoming licensing board." No ABA-specific telehealth code list is published.',
        status: 'verified',
        cites: [S.cms1500],
      },
      authTurnaround: {
        value: 'Wyoming publishes no decision timeframe for Telligen’s behavioral-health threshold reviews. The federal fee-for-service floor applies: since January 1, 2026 a standard request must be decided "in no case later than 7 calendar days after receiving the request" and an expedited one "in no case later than 72 hours." An administrative denial can be reconsidered with information sent within 30 days of the denial; after that it becomes a new request.',
        status: 'verified',
        cites: [S.cfr440, S.cms1500],
      },
      coordinationOfBenefits: {
        value: '"Medicaid is the payer of last resort. It is a secondary payer to all other payment sources and programs and should be billed only after payment or denial has been received from such carriers." Wyoming Medicaid pays "the lesser of the patient liability (deductible, coinsurance, and copayment) and the Medicaid allowed amount minus the other insurance payment amount," and CMS-1500 claims apply other insurance at the line level with adjustment reason codes. Timely filing is not waived for claims involving third-party liability.',
        status: 'verified',
        cites: [S.cms1500, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Wyoming Medicaid cover ABA therapy?', a: 'Yes, for children ages 0 through 20 with an autism spectrum disorder diagnosis, as an EPSDT benefit under the state plan (TN 24-0005, effective July 1, 2024).' },
      { q: 'Does Wyoming Medicaid have managed care plans for ABA?', a: 'No. Wyoming Medicaid pays ABA fee-for-service. The only managed care entity is Magellan’s Care Management Entity, which runs high-fidelity wraparound (care coordination, peer support, respite) and does not cover ABA.' },
      { q: 'Does Wyoming Medicaid require prior authorization for ABA?', a: 'Not up front: no ABA code is flagged for PA on the fee schedule. But ABA codes 97151–97158 count toward a 30-visit-per-calendar-year behavioral-health threshold, and beyond 30 dates of service a prior authorization from Telligen is required. A full-time ABA case hits that within weeks, so plan the Telligen request early.' },
      { q: 'What does Wyoming Medicaid pay for ABA?', a: 'From July 1, 2026, per 15-minute unit: 97151, 97155 and 97156 $24.60; 97152, 97153, 0362T and 0373T $12.30; 97154 $4.04; 97157 $8.20; 97158 $9.31.' },
      { q: 'Can a BCBA licensed in another state treat a Wyoming Medicaid child, including by telehealth?', a: 'Not without a Wyoming license. Wyoming licenses behavior analysts (W.S. 33-27-124), and Wyoming Medicaid requires telehealth providers to be licensed by or under the jurisdiction of the appropriate Wyoming board, as well as enrolled with Wyoming Medicaid. The Board can license someone already licensed in a comparable state, but there is no temporary behavior-analyst permit in its rules.' },
      { q: 'Can 97153 and 97155 be billed at the same time?', a: 'Yes. Wyoming Medicaid bars overlapping behavioral health services "except for codes 97153 and 97155," so a BCBA directing a technician with protocol modification can bill 97155 while the RBT bills 97153.' },
    ],
  },

  'blue-cross-blue-shield-of-wyoming': {
    slug: 'blue-cross-blue-shield-of-wyoming',
    family: 'bcbs',
    cardDesc: 'Wyoming’s dominant carrier. PA via Availity pre-check; its ABA medical policy sits on a Highmark-hosted site we could not open. Bulletin 01-2019 parity layer applies.',
    assessmentPA: {
      value: 'Not published in a readable source. BCBSWY publishes no code list: it says to use the Availity Authorization Pre-Check tool, which gives "a yes or no answer," and its medical policies (where any ABA criteria would be) could not be retrieved',
      status: 'unverified',
      cites: [S.bcbsPA, S.bcbsPM, S.bcbsPolicy],
      verifyVia: 'Availity Authorization Pre-Check for 97151 and 97152 on the member’s ID, or BCBSWY Provider Support, 888-359-6592.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Not published in a readable source; run each treatment code through the Availity Authorization Pre-Check. Federal Employee Program members are different: FEP lists Applied Behavioral Analysis among services needing authorization from FEP case management (1-800-210-7257)',
      status: 'unverified',
      cites: [S.bcbsPA, S.bcbsPM],
      verifyVia: 'Availity Authorization Pre-Check for 97153–97158, 0362T and 0373T, or BCBSWY Provider Support, 888-359-6592.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'BCBSWY’s own ABA criteria were not readable. For fully insured plans with mental health coverage, Wyoming’s Bulletin 01-2019 covers autism treatment "prescribed or ordered for an individual diagnosed with an autism spectrum disorder by a licensed physician or a licensed psychologist"',
      status: 'unverified',
      cites: [S.doiBull, S.bcbsPolicy],
      verifyVia: 'BCBSWY medical policy search (bcbswy.com → Providers → Medical Policy), or BCBSWY Provider Support, 888-359-6592: ask for the ABA policy number and its diagnosis criteria.',
      blocker: 'document',
    },
    payer: 'Blue Cross Blue Shield of Wyoming',
    state: 'WY', kind: 'commercial',
    pill: 'Payer Guide · Blue Cross Blue Shield of Wyoming',
    h1: 'Blue Cross Blue Shield of Wyoming ABA coverage: the intake guide.',
    metaTitle: 'Blue Cross Blue Shield of Wyoming ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Blue Cross Blue Shield of Wyoming handles ABA: Availity prior-authorization checks, 5-day and 72-hour decision clocks, telemedicine rules, Wyoming’s Bulletin 01-2019 autism parity layer (no autism statute), behavior-analyst licensure, and what intake should verify.',
    intro: [
      'Blue Cross Blue Shield of Wyoming is the state’s home Blue and the card intake teams see most. For ABA, three layers stack: BCBSWY’s own medical policy and authorization rules, Wyoming’s parity-based autism coverage (Bulletin 01-2019, since Wyoming has no autism statute), and the plan’s funding type, which decides whether the bulletin applies at all.',
      'One gap to know up front: BCBSWY publishes its medical policies through a Highmark-hosted search that we could not open this run, so its ABA clinical criteria are not summarized here. Everything below comes from BCBSWY’s provider manual and website and from Wyoming law.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Plan-dependent; Bulletin 01-2019 bars excluding ABA as experimental on fully insured plans with mental health coverage' },
      { label: 'Prior auth', value: 'Check each code with Availity’s Authorization Pre-Check; FEP ABA goes to FEP case management' },
      { label: 'Decision clock', value: 'Non-urgent 5 calendar days, urgent 72 hours (provider manual; W.S. 26-55)' },
      { label: 'State mandate', value: 'None by statute: Insurance Department Bulletin 01-2019 under W.S. 26-20-701 (mental health parity), effective 7/1/2019' },
      { label: 'Mandate age', value: 'None stated in the bulletin' },
      { label: 'Mandate caps', value: 'No separate cost-sharing or treatment limits that apply only to autism/mental health benefits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans, and policies with no mental health coverage' },
      { label: 'Licensure', value: 'Yes: Wyoming licenses behavior analysts and assistants (W.S. 33-27-124); technicians exempt under supervision' },
      { label: 'Fee schedule', value: 'Not public — BCBSWY pays the lesser of billed charges or its Maximum Allowable Amount under your contract' },
    ],
    sections: [
      {
        h2: 'Prior authorization and turnaround at BCBSWY',
        body: [
          'BCBSWY does not publish a list of ABA codes needing authorization. Its prior-authorization page says to check requirements in Availity: "The Authorization Pre-Check tool allows you to determine if a prior authorization is required for a member upfront … you will get a yes or no answer." Requests go through Availity’s Authorization Tool (under Patient Registration) or on the prior authorization request form by fax to 307-432-2917, with medical records attached. BCBSWY reviews against its medical policies and decides "Non-urgent prior authorization requests … within 5 calendar days from date of receipt" and urgent ones "within 72 hours from date of receipt"; ask Provider Support (888-359-6592) if no decision arrives in that time. BCBSWY only treats a request as urgent when delay would threaten life or limb or leave severe pain unmanaged; note that Wyoming’s prior-authorization statute defines urgent services to "include mental and behavioral health care services."',
          'Federal Employee Program members follow a separate path: the manual lists "Applied Behavioral Analysis" among the services authorized by FEP case management at 1-800-210-7257, and FEP does not permit retroactive authorizations. Denied authorizations can be appealed in writing "up to 180 days from the date of the denial notice," with no required form. When BCBSWY is the secondary payer, secondary authorization is required for most member prefixes; check the manual’s prefix table.',
        ],
        cites: [S.bcbsPA, S.bcbsPM, S.title26],
      },
      {
        h2: 'The Wyoming autism coverage rule: Bulletin 01-2019',
        body: [WY_MANDATE_BODY],
        cites: [S.doiBull, S.doiMemos, S.title26],
      },
      {
        h2: 'Licensure, credentialing and out-of-state BCBAs',
        body: [
          WY_LICENSURE_BODY,
          'BCBSWY’s own credentialing page requires "a valid, active license … in the State of Wyoming, as applicable," credentials through CAQH, and re-credentials every three years. Its list of practitioner types to be credentialed does not name behavior analysts but says it is "not limited to" those listed. BCBSWY also states that "Participation with BCBSWY cannot be dated prior to approval of the credentialing application"; W.S. 26-56-102(c) separately requires back-payment to the date of a completed application once you are credentialed with a contract in effect, so keep the date you submitted.',
        ],
        cites: [S.title33, S.hb110, S.psy14, S.psy4, S.psy3, S.bacbLic, S.cms1500, S.bcbsPM, S.bcbsCred, S.title26, S.fee],
      },
      {
        h2: 'Claims operations in Wyoming',
        body: [
          WY_CLAIMS_BODY,
          'BCBSWY’s clean-claim policy requires the "Rendering Provider’s (type 1/individual) National Provider Identifier (NPI)" on the claim, with the rendering NPI in box 24j. Telemedicine is billed with modifier 95 or GT and place of service 02. Participating providers accept "the lesser of provider’s charges or the Maximum Allowable Amount, minus any Cost Sharing Amounts." BCBSWY’s manual does not print a timely-filing limit in the sections read; your contract sets it.',
        ],
        cites: [S.title26, S.hb14, S.doiBull, S.bcbsPM],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Bulletin 01-2019 and W.S. 26-55 apply) vs. self-funded ERISA (plan document governs). FEP members follow FEP rules.' },
      { title: 'Member ID + prefix', desc: 'The prefix decides FEP handling and whether secondary authorization applies.' },
      { title: 'Diagnosis and order', desc: 'ASD diagnosis and the prescription or order from a licensed physician or psychologist (the bulletin’s definition of covered treatment).' },
      { title: 'Availity pre-check result', desc: 'Run each ABA code through the Authorization Pre-Check and save the result.' },
      { title: 'Other coverage', desc: 'Both parents’ plans and any Medicaid; BCBSWY uses the birthday rule for children.' },
    ],
    sources: [S.bcbsPM, S.bcbsPA, S.bcbsPolicy, S.bcbsCred, S.doiBull, S.doiMemos, S.title26, S.hb14, S.title33, S.hb110, S.psy14, S.psy4, S.psy3, S.bacbLic, S.cms1500, S.fee, S.erisa, S.cfr433, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'BCBSWY’s ABA supervision rules sit in its medical policy, which could not be read. Wyoming law sets the floor: technicians practice "under the supervision of a licensed behavior analyst or licensed assistant behavior analyst" (W.S. 33-27-125(a)(viii)), and BCaBA supervision must be at least 2% of monthly service hours (Board Rules § 14-5).',
        status: 'unverified',
        cites: [S.bcbsPolicy, S.title33, S.psy14],
        verifyVia: 'BCBSWY medical policy for ABA (bcbswy.com → Providers → Medical Policy) or Provider Support, 888-359-6592.',
        blocker: 'document',
      },
      concurrentBilling: {
        value: 'Not addressed in the BCBSWY provider manual; its ABA medical policy could not be read.',
        status: 'unverified',
        cites: [S.bcbsPM, S.bcbsPolicy],
        verifyVia: 'BCBSWY Provider Support, 888-359-6592: ask whether 97153 and 97155 may be billed for the same clock time.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No ABA unit limit appears in the provider manual; any limits would be in the unread medical policy. Bulletin 01-2019 bars autism-only treatment limits that do not apply to medical/surgical benefits on fully insured plans.',
        status: 'unverified',
        cites: [S.bcbsPM, S.bcbsPolicy, S.doiBull],
        verifyVia: 'BCBSWY medical policy for ABA, or the Availity authorization response for the member.',
        blocker: 'document',
      },
      noteSignature: {
        value: 'The provider manual sets no ABA session-note signature rule.',
        status: 'unverified',
        cites: [S.bcbsPM],
        verifyVia: 'Your BCBSWY provider agreement and BCBSWY Provider Support, 888-359-6592.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'No ABA setting rule appears in the provider manual. Telemedicine "can be used directly to an established patient’s home," billed with POS 02.',
        status: 'unverified',
        cites: [S.bcbsPM, S.bcbsPolicy],
        verifyVia: 'BCBSWY medical policy for ABA, or Provider Support, 888-359-6592: ask which places of service it pays for ABA, including school.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'A clean BCBSWY claim requires the "Rendering Provider’s (type 1/individual) National Provider Identifier (NPI)" (box 24j). Whether a technician’s 97153 is billed with the technician or the supervising BCBA as rendering provider is not stated in the manual.',
        status: 'unverified',
        cites: [S.bcbsPM],
        verifyVia: 'BCBSWY Provider Support, 888-359-6592, or your provider agreement: ask whose NPI goes in 24j on RBT lines.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'BCBSWY’s ABA policy could not be read, so any age term is unconfirmed.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.bcbsPolicy, S.doiBull],
        verifyVia: 'Availity benefits check on the member ID: establish fully insured vs. self-funded ERISA, then the plan’s ABA age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not stated in any BCBSWY source read.',
        status: 'unverified',
        cites: [S.bcbsPM, S.bcbsPolicy],
        verifyVia: 'BCBSWY medical policy for ABA, or Provider Support, 888-359-6592.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'Not stated in any BCBSWY source read. For fully insured plans, Bulletin 01-2019 defines covered treatment as care prescribed or ordered for an individual "diagnosed with an autism spectrum disorder by a licensed physician or a licensed psychologist."',
        status: 'unverified',
        cites: [S.bcbsPolicy, S.doiBull],
        verifyVia: 'BCBSWY medical policy for ABA, or Provider Support, 888-359-6592.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'Not stated in any BCBSWY source read.',
        status: 'unverified',
        cites: [S.bcbsPM, S.bcbsPolicy],
        verifyVia: 'BCBSWY medical policy for ABA, or Provider Support, 888-359-6592.',
        blocker: 'document',
      },
      referral: {
        value: 'BCBSWY publishes no ABA referral rule in the sources read; its PA requirement is checked per member in Availity.' + MANDATE_REFERRAL_TAIL,
        status: 'unverified',
        cites: [S.bcbsPA, S.doiBull],
        verifyVia: 'Availity Authorization Pre-Check and BCBSWY Provider Support, 888-359-6592.',
        blocker: 'document',
      },
      telehealth: {
        value: 'BCBSWY pays "real-time interactive face-to-face" telemedicine for services reimbursable in person and "within the provider’s scope of practice"; "Eligible providers must be licensed in Wyoming." It "can be used directly to an established patient’s home," with the member’s consent documented, billed with modifier 95 or GT and POS 02. Under BlueCard, a telemedicine provider bills the Blue plan where the provider is physically located. For fully insured plans, W.S. 26-20-701(b) bars denying a covered mental health service because it is delivered by remote audio or audio-visual means, charging more cost-sharing, or paying less. No ABA-specific telehealth code list was found.',
        status: 'verified',
        cites: [S.bcbsPM, S.title26],
      },
      authTurnaround: {
        value: 'BCBSWY processes non-urgent prior-authorization requests "within 5 calendar days from date of receipt" and urgent ones "within 72 hours." That matches W.S. 26-55-107/108 for fully insured plans (5 calendar days after all necessary information; urgent within 72 hours or the request "shall be considered authorized"), and the Act defines urgent services to "include mental and behavioral health care services." Outpatient authorizations must be valid for "not less than one (1) year." Self-funded ERISA plans follow 29 CFR 2560.503-1 (15 days pre-service). Appeals of denials: within 180 days of the denial notice.',
        status: 'plan-dependent',
        cites: [S.bcbsPM, S.bcbsPA, S.title26, S.hb14, S.erisa],
        verifyVia: WY_TAT_VERIFY('BCBSWY'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'BCBSWY’s manual: the plan covering the person as an employee or subscriber is primary over one covering them as a dependent, and for a child on two parents’ plans "The primary Plan is the Plan of the parent whose birthday is earlier in the year" when the parents are married or not separated or share joint custody without a coverage order; with the same birthday, the plan covering a parent longer is primary. BCBSWY requires its own authorization when it is secondary for most member prefixes. If the child also has Wyoming Medicaid, BCBSWY pays first (Medicaid is payer of last resort, 42 CFR 433.139). TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'verified',
        cites: [S.bcbsPM, S.cfr433, S.cms1500, S.tricare, S.champva],
      },
    },
    faq: [
      { q: 'Does Blue Cross Blue Shield of Wyoming cover ABA therapy?', a: 'It depends on the plan. For fully insured plans that include mental health coverage, Wyoming’s Bulletin 01-2019 bars excluding autism treatment and bars denying ABA as experimental. Self-funded employer plans follow their own documents. Confirm in Availity.' },
      { q: 'Does BCBSWY require prior authorization for ABA?', a: 'BCBSWY does not publish an ABA code list; use Availity’s Authorization Pre-Check for each code. FEP members need authorization from FEP case management (1-800-210-7257).' },
      { q: 'How fast does BCBSWY decide a prior authorization?', a: 'Within 5 calendar days for non-urgent requests and 72 hours for urgent ones, per its provider manual, which matches Wyoming’s prior-authorization statute for fully insured plans.' },
      { q: 'Can an out-of-state BCBA see a BCBSWY member by telehealth?', a: 'BCBSWY says telemedicine providers "must be licensed in Wyoming," and Wyoming licenses behavior analysts, so get a Wyoming license first. Under BlueCard, a distant provider bills the Blue plan where the provider is located.' },
      { q: 'Does Wyoming have an autism insurance mandate?', a: 'Not a statute. Wyoming relies on Insurance Department Bulletin 01-2019 (April 2019), which applies the state’s mental health parity law (W.S. 26-20-701) to autism: no autism exclusions, no ABA-is-experimental denials, and no autism-only limits, on fully insured plans with mental health coverage.' },
    ],
  },

  'aetna-wyoming': {
    slug: 'aetna-wyoming',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA guide + precert list + Wyoming’s Bulletin 01-2019 parity layer (no autism statute); Wyoming licenses BCBAs.',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024); requests go through Availity',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: 97153–97158 and 0373T are on the precertification list; the reauthorization interval is set by the plan, and progress is evaluated every six months',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): ask whether the group carries ABA precertification and what reauthorization interval it uses.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) by an appropriate provider; CPB 0554 calls ABA experimental for non-ASD indications',
      status: 'verified',
      cites: [S.aetnaGuide, S.aetnaCPB],
    },
    payer: 'Aetna in Wyoming',
    state: 'WY', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Wyoming',
    h1: 'Aetna ABA coverage in Wyoming: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Wyoming: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Wyoming families: the national medical necessity guide, precertification of all ABA codes, Wyoming’s Bulletin 01-2019 autism parity layer (no autism statute), Wyoming behavior-analyst licensure, claim and PA clocks, and what intake should verify.',
    intro: [
      'For an intake team in Wyoming, an Aetna card means three layers: Aetna’s national ABA policy, Wyoming’s parity-based autism coverage (Insurance Department Bulletin 01-2019, since Wyoming has no autism statute), and the plan’s funding type, which decides whether the bulletin applies at all. Wyoming Medicaid has no managed care plans, so an Aetna card here is commercial or Medicare.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s national ABA medical necessity guide' },
      { label: 'State mandate', value: 'None by statute: Insurance Department Bulletin 01-2019 under W.S. 26-20-701 (mental health parity), effective 7/1/2019' },
      { label: 'Mandate age', value: 'None stated in the bulletin' },
      { label: 'Mandate caps', value: 'No separate cost-sharing or treatment limits that apply only to autism/mental health benefits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans, and policies with no mental health coverage' },
      { label: 'Licensure', value: 'Yes: Wyoming licenses behavior analysts and assistants (W.S. 33-27-124); technicians exempt under supervision' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Wyoming',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its ABA medical necessity guide and CPB 0648, and CPB 0554 (last reviewed November 26, 2025) calls ABA "experimental, investigational, or unproven" for non-ASD indications. The behavioral health precertification list (effective August 1, 2024) names all ten ABA codes, 97151 through 97158, 0362T and 0373T, submitted through Availity. The guide’s only state exhibit is Maryland’s; Wyoming has none, so the national criteria apply unchanged. Note that Wyoming’s Bulletin 01-2019 forbids denying ABA for a child with autism "on the basis that ABA therapy is experimental or investigational," which Aetna’s ASD criteria do not do.',
          'Aetna’s guide requires services "provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws)," BCBAs, or psychologists in scope. Wyoming is a licensure state, so the BCBA billing Aetna for a Wyoming child should hold the Wyoming license.',
        ],
        cites: [S.aetnaGuide, S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert, S.doiBull],
      },
      {
        h2: 'The Wyoming autism coverage rule: Bulletin 01-2019',
        body: [WY_MANDATE_BODY],
        cites: [S.doiBull, S.doiMemos, S.title26],
      },
      {
        h2: 'Licensure, credentialing and out-of-state BCBAs',
        body: [WY_LICENSURE_BODY],
        cites: [S.title33, S.hb110, S.psy14, S.psy4, S.psy3, S.bacbLic, S.cms1500, S.bcbsPM, S.title26, S.fee],
      },
      {
        h2: 'Claims operations in Wyoming',
        body: [WY_CLAIMS_BODY],
        cites: [S.title26, S.hb14, S.doiBull],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA?',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) treats payment as a contract term: "The rates and compensation under your agreement are subject to the Aetna coding/claim edit policies," and where a provider has both an intermediary contract and a direct agreement, "your direct Aetna rates will apply unless we specifically notify you otherwise." When a member’s benefits run out, the provider "cannot charge them more than the contracted rate." Get the rates from your Aetna agreement. For a public benchmark, Wyoming Medicaid pays 97153 at $12.30 and 97155 at $24.60 per 15 minutes from July 1, 2026; commercial contracts are negotiated separately.',
        ],
        cites: [S.aetnaOM, S.fee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Bulletin 01-2019 and W.S. 26-55 apply) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification in Availity.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date. Aetna’s policy is ASD-only.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3) showing impairment at least one standard deviation below the mean.' },
      { title: 'Physician or psychologist order', desc: 'The bulletin defines covered treatment as care prescribed or ordered by a licensed physician or psychologist.' },
    ],
    sources: [S.aetnaGuide, S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.aetnaTele, S.doiBull, S.doiMemos, S.title26, S.hb14, S.title33, S.hb110, S.psy14, S.bacbLic, S.erisa, S.cfr433, S.tricare, S.champva, S.fee],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s guide: where others deliver services, there must be supervision "in line with practice standards," and it may authorize QHP protocol modification and direction "at 1 to 2 hours per 10 hours of treatment by protocol." Aetna’s Network Participation Criteria (5/26) require "A minimum of one hour of face-to-face supervision" of a paraprofessional "for each 10 hours of applied behavior analysis," plus the supervisor "onsite with the child at least one hour a month," and "All BCBAs, BCaBAs and paraprofessionals must meet state requirements." In Wyoming that means technicians work under a licensed behavior analyst or licensed assistant (W.S. 33-27-125(a)(viii)).',
        status: 'verified',
        cites: [S.aetnaGuide, S.aetnaNPC, S.title33],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA policies (CPB 0554, CPB 0648, the medical necessity guide).',
        status: 'unverified',
        cites: [S.aetnaCPB, S.aetnaGuide],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap is published. Hours follow the guide’s severity table, with typical intensities of 10–25 hours a week for comprehensive and 1–20 for focused programs (typical, not caps), and progress is evaluated every six months. On fully insured Wyoming plans, Bulletin 01-2019 bars autism-only limits that do not apply to medical/surgical benefits.',
        status: 'verified',
        cites: [S.aetnaGuide, S.doiBull],
      },
      noteSignature: {
        value: 'Not addressed. Aetna sets treatment-plan content requirements but not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide, S.aetnaOM],
        verifyVia: 'The participating-provider agreement and the documentation section of Aetna’s provider manual.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Aetna’s guide is setting-neutral for outpatient ABA and expects "collaboration and coordination with existing providers and/or the school district." Its only school carve-out language (no obligation to provide services under an IEP or IDEA) appears in the Maryland exhibit, not as a national rule. No Wyoming rule restricts ABA settings for commercial plans.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      billAsProvider: {
        value: 'Services "must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope," unless mandates, plan documents or contracts say otherwise. Wyoming licenses behavior analysts (W.S. 33-27-124), so the billing BCBA should hold the Wyoming license.',
        status: 'verified',
        cites: [S.aetnaGuide, S.title33],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national ABA guide sets no age cap; its age ranges are typical, not limiting.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.doiBull],
        verifyVia: 'Live benefits verification on the member ID: establish fully insured vs. self-funded ERISA, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the ASD diagnosis itself, but medical necessity requires "functional impairment on a standardized scale of functioning in the past 12 months," at least one standard deviation below the mean, or a significant risk of harm.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'A DSM-5 ASD diagnosis "obtained by an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)." Wyoming’s bulletin defines covered treatment as care for a child diagnosed "by a licensed physician or a licensed psychologist."',
        status: 'verified',
        cites: [S.aetnaGuide, S.doiBull],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale as tools used with clinical assessment. The ABA guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s national ABA policies require no physician referral; what they require is precertification of all ten ABA codes through Availity.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.doiBull],
      },
      telehealth: {
        value: 'Aetna’s Telemedicine and Direct Patient Contact Payment Policy lists the ABA codes it pays by telehealth: on commercial plans 97151, 97153, 97155, 97156 and 97157, billed with modifier GT, 95 or FR; 97152, 97154 and 97158 are checked for Medicare Advantage only. The posted policy shows a last review of June 2021, so treat the list as perishable. Aetna’s provider manual (6/26) says Aetna Behavioral Health "offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out," and providers must "ensure that they have the proper licensure based on state requirements," which in Wyoming means a Wyoming behavior-analyst license. For fully insured Wyoming plans, W.S. 26-20-701(b) bars denying a covered mental health service because it is delivered by remote audio or audio-visual means.',
        status: 'plan-dependent',
        cites: [S.aetnaTele, S.aetnaOM, S.title26, S.title33],
        verifyVia: 'Availity or the precertification line on the card: ask whether the plan is fully insured in Wyoming or self-funded (and opted out of telehealth), and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: WY_TAT_VALUE('Aetna'),
        status: 'plan-dependent',
        cites: [S.title26, S.hb14, S.erisa],
        verifyVia: WY_TAT_VERIFY('Aetna'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: WY_COB_VALUE('Aetna'),
        status: 'plan-dependent',
        cites: [S.title26, S.bcbsPM, S.cfr433, S.cms1500, S.tricare, S.champva],
        verifyVia: WY_COB_VERIFY('Aetna'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Wyoming?', a: 'Yes, under its national policy for ASD. Fully insured Wyoming plans with mental health coverage are also bound by Bulletin 01-2019, which bars autism exclusions and ABA-is-experimental denials. Self-funded employer plans follow their own documents.' },
      { q: 'Does Aetna require prior authorization for the ABA assessment in Wyoming?', a: 'Yes. All ten ABA codes, including the 97151 assessment, are on Aetna’s behavioral health precertification list.' },
      { q: 'Does a BCBA need a Wyoming license to bill Aetna?', a: 'Plan on it. Wyoming licenses behavior analysts (W.S. 33-27-124), and Aetna’s guide requires services to be provided or billed by licensed behavior analysts in licensure states and expects telehealth providers to hold the licensure their state requires.' },
      { q: 'What does Aetna pay for ABA in Wyoming?', a: 'Aetna publishes no ABA rates; payment follows your Aetna participation agreement. The only public benchmark is Wyoming Medicaid (97153 $12.30 and 97155 $24.60 per 15 minutes from July 1, 2026).' },
      { q: 'Does Aetna require RBT certification for ABA technicians?', a: 'Aetna’s network criteria do not require the RBT credential by name: technicians may be paraprofessionals supervised by a BCBA or licensed provider, with at least 1 hour of face-to-face supervision per 10 hours of ABA and the supervisor onsite at least 1 hour a month. Technicians must meet state requirements; Wyoming exempts technicians from licensure when supervised by a licensed behavior analyst or assistant.' },
    ],
  },

  'cigna-wyoming': {
    slug: 'cigna-wyoming',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + Wyoming’s Bulletin 01-2019 parity layer; no PA on assessment codes; Evernorth carries a Wyoming addendum.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the plan covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: completed assessment and treatment plan on the Applied Behavior Analysis Prior Authorization Form; request up to 30 days before or two weeks after the start date',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD (F84.0–F84.9 except F84.2 Rett) under DSM-5-TR criteria',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Wyoming',
    state: 'WY', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Wyoming',
    h1: 'Cigna / Evernorth ABA coverage in Wyoming: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Wyoming: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Wyoming families: national policy EN0499, no PA on assessments, Wyoming’s Bulletin 01-2019 autism parity layer (no autism statute), Wyoming behavior-analyst licensure, claim and PA clocks, and what intake should verify.',
    intro: [
      'For an intake team in Wyoming, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, Wyoming’s parity-based autism coverage (Bulletin 01-2019, since Wyoming has no autism statute), and the plan’s funding type. Many Cigna members are on self-funded employer plans, so check funding first; Evernorth’s own Wyoming addendum says its provisions "do not apply with regard to Covered Services rendered to Participants covered under self-funded plans."',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'State mandate', value: 'None by statute: Insurance Department Bulletin 01-2019 under W.S. 26-20-701 (mental health parity), effective 7/1/2019' },
      { label: 'Mandate age', value: 'None stated in the bulletin' },
      { label: 'Mandate caps', value: 'No separate cost-sharing or treatment limits that apply only to autism/mental health benefits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans, and policies with no mental health coverage' },
      { label: 'Licensure', value: 'Yes: Wyoming licenses behavior analysts and assistants (W.S. 33-27-124); technicians exempt under supervision' },
      { label: 'Fee schedule', value: 'Not public — your ABA fee schedule is Exhibit A of your Evernorth Provider Agreement; fee questions to Evernorth Provider Services, 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Wyoming',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). Per the autism resource guide, prior authorization is no longer required for assessment codes 97151, 97152 and 0362T with an autism diagnosis, as long as the provider is independently licensed or a BCBA and the plan covers ABA; treatment needs the completed assessment and treatment plan on the ABA Prior Authorization Form. Neither EN0499 nor the resource guide mentions Wyoming, so the national criteria apply. EN0499 names a "Licensed Behavior Analyst (LBA)" alongside the BCBA as a case supervisor, which fits Wyoming’s licensure system.',
          'Evernorth’s Administrative Guidelines (September 2026) attach a Wyoming Regulatory Addendum to its provider agreements. It commits Evernorth to W.S. 26-15-124 "regarding payment of claims" (the 45-day rule) and bars refusing to re-contract with or pay a provider for discussing plan terms with a patient (W.S. 26-22-504). Its provisions "do not apply with regard to Covered Services rendered to Participants covered under self-funded plans."',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin],
      },
      {
        h2: 'The Wyoming autism coverage rule: Bulletin 01-2019',
        body: [WY_MANDATE_BODY],
        cites: [S.doiBull, S.doiMemos, S.title26],
      },
      {
        h2: 'Licensure, credentialing and out-of-state BCBAs',
        body: [WY_LICENSURE_BODY],
        cites: [S.title33, S.hb110, S.psy14, S.psy4, S.psy3, S.bacbLic, S.cms1500, S.bcbsPM, S.title26, S.fee],
      },
      {
        h2: 'Claims operations in Wyoming',
        body: [
          WY_CLAIMS_BODY,
          'Evernorth’s own claims rules: file "within 90 days of the date of service or as otherwise defined in your Provider Agreement," unless "Applicable state law provides for a longer timely filing limit," with the COB clock running from the primary payer’s processing date. Electronic claims use payer ID 62308; on paper, only a BCBA or other licensed provider goes in box 33. Virtual services carry modifier 95, which "will not change the reimbursement." Appeals of contract-rate decisions are due within 180 days of the initial denial.',
        ],
        cites: [S.title26, S.hb14, S.doiBull, S.ebhAdmin, S.cignaARG],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth’s Administrative Guidelines (September 2026) say the Provider Agreement terms "include the reimbursement rates applicable to covered services," and tell ABA providers: "For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement." Fee and contract questions go to Provider Services at 800.926.2273. Non-credentialed technicians are paid only through the supervising provider’s claim. For a public benchmark, Wyoming Medicaid pays 97153 at $12.30 per 15 minutes from July 1, 2026; commercial contracts are negotiated separately.',
        ],
        cites: [S.ebhAdmin, S.cignaARG, S.fee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Bulletin 01-2019, W.S. 26-55 and Evernorth’s Wyoming addendum apply) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, plus the date of the most recent diagnosis. Provisional or rule-out diagnoses don’t count.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Physician or psychologist order', desc: 'The bulletin defines covered treatment as care prescribed or ordered by a licensed physician or psychologist.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.doiBull, S.doiMemos, S.title26, S.hb14, S.title33, S.hb110, S.psy14, S.bacbLic, S.erisa, S.cfr433, S.tricare, S.champva, S.fee],
    deliveryRules: {
      supervision: {
        value: 'Case supervision is by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health professional with ABA training. Direct plus indirect case supervision runs at "one to two hours per ten hours of direct treatment"; at 10 hours a week or less, at least one to two hours a week of direct case supervision. The supervisor’s name and credentials must be documented.',
        status: 'verified',
        cites: [S.en0499],
      },
      concurrentBilling: {
        value: '"Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)."',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap is published. All ABA codes bill in 15-minute units and "with CPT codes 97151–97158, 0362T, and 0373T ONLY"; intensity must reflect severity, goals and response to treatment.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499],
      },
      noteSignature: {
        value: 'Each service needs its own record including start and end date and time, location, the intervention, who was present, and the "Name, credential (if applicable), and signature of ABA provider who rendered the service."',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'EN0499 expects data and goals across the settings where treatment occurs (home, clinic, school, community). Primarily educational or vocational services are not covered, and services in academic or vocational settings must still meet the direct-treatment definition.',
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
        value: 'EN0499 sets no age cap; it says access to focused intervention "should not be restricted by age." Age terms come from the benefit plan.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.doiBull],
        verifyVia: 'Live benefits verification, or the Evernorth Autism Care Coordinator team on 877.279.7603: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs the date it was most recently made, and a provisional or rule-out diagnosis doesn’t count. The clocks run on data: the standardized instrument within 60 days before treatment and baseline data within 60 days before treatment starts.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional licensed to practice independently "whose licensure board considers diagnostics" within scope, applying DSM-5-TR criteria. Wyoming excludes diagnosis from the practice of behavior analysis (W.S. 33-27-113(a)(xiii)).',
        status: 'verified',
        cites: [S.en0499, S.title33],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated, but it must be standardized and the current edition ("must be the Vineland-3 vs. Vineland-II"), administered within 60 days before treatment starts.',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral. Assessments 97151, 97152 and 0362T need no PA with an autism diagnosis when the provider is independently licensed or a BCBA; treatment needs the assessment and plan on the ABA PA form.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.doiBull],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" per the autism resource guide, and EN0499 allows "traditional in-person service delivery, telehealth, or a hybrid." Virtual services carry modifier 95, and providers "must meet all state requirements to provide virtual behavioral services, including any licenses," which in Wyoming means the behavior-analyst license. Fully insured Wyoming plans are also bound by W.S. 26-20-701(b) (no denial, extra cost-sharing or lower pay for remote delivery of covered mental health services).',
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ebhAdmin, S.title26],
      },
      authTurnaround: {
        value: WY_TAT_VALUE('Cigna/Evernorth') + ' Evernorth encourages ABA requests "up to 30 days in advance of or two weeks after the start date of service"; later requests may go to retrospective review, which can take up to 30 days.',
        status: 'plan-dependent',
        cites: [S.title26, S.hb14, S.erisa, S.cignaARG],
        verifyVia: WY_TAT_VERIFY('Cigna/Evernorth'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: WY_COB_VALUE('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.title26, S.bcbsPM, S.cfr433, S.cms1500, S.tricare, S.champva],
        verifyVia: WY_COB_VERIFY('Cigna/Evernorth'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Wyoming?', a: 'Yes, under national policy EN0499 for ASD. Fully insured Wyoming plans with mental health coverage are also bound by Bulletin 01-2019. Self-funded employer plans follow their own documents.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in Wyoming?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'Does a BCBA need a Wyoming license to bill Cigna?', a: 'Plan on it. Wyoming licenses behavior analysts, and Evernorth requires providers to meet all state licensing requirements, including for virtual services.' },
      { q: 'What is Evernorth’s timely filing limit?', a: '90 days from the date of service unless your Provider Agreement or state law sets a longer limit.' },
      { q: 'What does Cigna pay for ABA in Wyoming?', a: 'Cigna publishes no ABA rates. Your fee schedule is Exhibit A of your Evernorth Provider Agreement; call Provider Services (800.926.2273) with fee questions. Wyoming Medicaid’s 97153 rate ($12.30 per 15 minutes) is the only public benchmark.' },
    ],
  },

  'unitedhealthcare-wyoming': {
    slug: 'unitedhealthcare-wyoming',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + Wyoming’s Bulletin 01-2019 parity layer; no Wyoming state supplement; only three ABA codes by telehealth.',
    assessmentPA: {
      value: 'Required: the ABA Supplemental Clinical Criteria say "Prior authorization is required for ABA" unless "otherwise specified or mandated by contract or law"; Optum runs it as a two-step flow, assessment first',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required: second step (treatment authorization); the review interval is set per authorization',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express support at (866) 209-9320: ask what review interval will be set on this member’s ABA treatment authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a valid ASD diagnosis "issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis," confirmed with a validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Wyoming',
    state: 'WY', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Wyoming',
    h1: 'UnitedHealthcare / Optum ABA coverage in Wyoming: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Wyoming: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Wyoming families: Optum’s ABA criteria and two-step authorization, Wyoming’s Bulletin 01-2019 autism parity layer (no autism statute), Wyoming behavior-analyst licensure, telehealth limits, and what intake should verify.',
    intro: [
      'For an intake team in Wyoming, a UnitedHealthcare card means three layers: Optum Behavioral Health’s national ABA criteria, Wyoming’s parity-based autism coverage (Bulletin 01-2019, since Wyoming has no autism statute), and the plan’s funding type, which decides whether the bulletin applies. Wyoming Medicaid has no managed care plans, so a UHC card here is commercial or Medicare.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'None by statute: Insurance Department Bulletin 01-2019 under W.S. 26-20-701 (mental health parity), effective 7/1/2019' },
      { label: 'Mandate age', value: 'None stated in the bulletin' },
      { label: 'Mandate caps', value: 'No separate cost-sharing or treatment limits that apply only to autism/mental health benefits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans, and policies with no mental health coverage' },
      { label: 'Licensure', value: 'Yes: Wyoming licenses behavior analysts and assistants (W.S. 33-27-124); technicians exempt under supervision' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Wyoming',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026): prior authorization for ABA, assessment first and treatment second, with continued-service review looking hard at use below 80% of authorized hours. Optum’s ABA State Mandates supplement (annual review July 2026) covers Arizona, California, Connecticut, Florida, Indiana, Kansas, Kentucky, Maryland, Massachusetts, New Jersey, New York, Ohio, Pennsylvania and Virginia; Wyoming is not there, so no Wyoming-specific criteria modify the commercial policy. Optum’s National Network Manual points to separate "Wyoming Regulatory Requirements" for contract terms.',
          'The criteria want the diagnosis from "a state licensed physician, psychologist, or other state licensed clinician," and the credentialed ABA provider to be a BCBA or licensed behavioral health clinician, with technicians who "should be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate." In Wyoming the BCBA also needs the state behavior-analyst license.',
        ],
        cites: [S.optumSCC, S.optumSM, S.optumNNM, S.title33],
      },
      {
        h2: 'The Wyoming autism coverage rule: Bulletin 01-2019',
        body: [WY_MANDATE_BODY],
        cites: [S.doiBull, S.doiMemos, S.title26],
      },
      {
        h2: 'Licensure, credentialing and out-of-state BCBAs',
        body: [WY_LICENSURE_BODY],
        cites: [S.title33, S.hb110, S.psy14, S.psy4, S.psy3, S.bacbLic, S.cms1500, S.bcbsPM, S.title26, S.fee],
      },
      {
        h2: 'Claims operations in Wyoming',
        body: [
          WY_CLAIMS_BODY,
          'Optum’s commercial ABA reimbursement policy (updated June 2026) adds the coding rules: every line carries a credential modifier (HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA, HP for a BCBA-D), "There is no CPT code for reporting indirect services separately," and Optum "allows 32 units per day for CPT code 97153."',
        ],
        cites: [S.title26, S.hb14, S.doiBull, S.optumReimb],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA?',
        body: [
          'UnitedHealthcare publishes no ABA rate table; Optum pays from the contract. Optum’s National Network Manual (effective Sept. 1, 2026) defines the "Fee Maximum" as "The maximum amount a participating provider may be paid for a specific health care service provided to a member," adding that "Reimbursement to clinicians is based upon licensure rather than degree." The ABA reimbursement policy makes the credential level part of every claim line through the HM/HN/HO/HP modifiers. Ask Optum network management for your rate sheet. For a public benchmark, Wyoming Medicaid pays 97153 at $12.30 per 15 minutes from July 1, 2026; commercial contracts are negotiated separately.',
        ],
        cites: [S.optumNNM, S.optumReimb, S.fee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Bulletin 01-2019 and W.S. 26-55 apply) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification on Provider Express.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD and severity level, confirmed with a validated tool (ADI-R, ADOS-2 and others). Optum asks for the instrument.' },
      { title: 'Physician or psychologist order', desc: 'The bulletin defines covered treatment as care prescribed or ordered by a licensed physician or psychologist.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumReimb, S.optumTele, S.optumNNM, S.doiBull, S.doiMemos, S.title26, S.hb14, S.title33, S.hb110, S.psy14, S.bacbLic, S.erisa, S.cfr433, S.tricare, S.champva, S.fee],
    deliveryRules: {
      supervision: {
        value: '"Consistent with CASP standards of care, direct case supervision is required 1 – 2 hours for every 10 hours of direct treatment per week." Technicians work under a BCBA or licensed behavioral health clinician and should be RBTs or otherwise certified "as allowable by state mandate"; Optum does not recommend parents serving as their own child’s RBT.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      concurrentBilling: {
        value: 'Yes, for different people: Optum’s reimbursement policy answers "Can I report 97153 or 97154 with 97155 concurrently?" with "Yes, as long as the criteria in the descriptors of both codes are met. A single QHP may not report 97153 or 97154 with 97155 concurrently." 97155 and 97156 on the same day must be separate, distinct and at different times.',
        status: 'verified',
        cites: [S.optumReimb],
      },
      dailyLimits: {
        value: 'CMS medically unlikely edits apply to commercial ABA, and "Optum allows 32 units per day for CPT code 97153"; billing more "may be subject to non-reimbursement or recovery." Clinically, requested hours must be justified, and use below 80% of authorized hours triggers explanation at continued-service review.',
        status: 'verified',
        cites: [S.optumReimb, S.optumSCC],
      },
      noteSignature: {
        value: 'Not addressed. The SCC set what must be documented for coverage, not who signs a session note or when.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum Provider Express National Network Manual (documentation standards) and the participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'ABA is provided at the least restrictive, most clinically appropriate level. Not covered: services that are not ABA, "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA; school coordination is allowed.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      billAsProvider: {
        value: 'The credentialed ABA provider is a BCBA or licensed behavioral health clinician; BCaBAs and technicians work under that provider. Each claim line carries the rendering credential modifier: HM (RBT), HN (BCaBA), HO (master’s-level BCBA or licensed clinician), HP (BCBA-D or doctoral licensed provider).',
        status: 'verified',
        cites: [S.optumSCC, S.optumReimb],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion; the member’s benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.doiBull],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with severity level using validated tools. Use below 80% of authorized hours triggers review.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: '"A state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis."',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool from Optum’s non-exhaustive list, which includes formal diagnostic tools such as the ADI, ADOS/ADOS-2 and DISCO.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral in the SCC; prior authorization is required, run as a two-step Optum flow on Provider Express.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.doiBull],
      },
      telehealth: {
        value: 'Three codes. Optum’s Telehealth Billing guide (updated September 2025), commercial: "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157," billed with POS 02 or 10. So the 97151 assessment and technician 97153 are not on Optum’s telehealth list. For a fully insured Wyoming plan, W.S. 26-20-701(b) says a policy covering mental health may not "deny coverage for mental health or substance use services delivered using remote audio or audio-visual delivery systems … if coverage would be provided for the same services when delivered in person." Ask Optum how it applies the three-code list to a fully insured Wyoming plan.',
        status: 'plan-dependent',
        cites: [S.optumTele, S.title26],
        verifyVia: 'Optum Provider Express support, (866) 209-9320: ask whether the plan is fully insured in Wyoming and which ABA codes it will pay by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: WY_TAT_VALUE('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.title26, S.hb14, S.erisa],
        verifyVia: WY_TAT_VERIFY('UnitedHealthcare/Optum'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: WY_COB_VALUE('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.title26, S.bcbsPM, S.cfr433, S.cms1500, S.tricare, S.champva],
        verifyVia: WY_COB_VERIFY('UnitedHealthcare/Optum'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Wyoming?', a: 'Yes, under Optum’s national ABA criteria for ASD. Fully insured Wyoming plans with mental health coverage are also bound by Bulletin 01-2019. Self-funded employer plans follow their own documents.' },
      { q: 'Does Optum have Wyoming-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement does not list Wyoming, so the national criteria and two-step authorization apply.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in Wyoming?', a: 'Optum’s commercial telehealth guide allows only 97155, 97156 and 97157 by telehealth, billed POS 02 or 10. Fully insured Wyoming plans are also subject to W.S. 26-20-701(b), which bars denying a covered mental health service only because it is delivered remotely, so ask Optum how it applies the list to your plan.' },
      { q: 'Can 97153 and 97155 be billed at the same time with UHC?', a: 'Yes, when a technician and a different QHP each meet their code’s descriptor; a single QHP cannot report both concurrently.' },
      { q: 'What does UnitedHealthcare pay for ABA in Wyoming?', a: 'UHC/Optum publishes no ABA rates. You are paid up to the Fee Maximum in your Optum agreement, with a credential modifier on each line (HM RBT, HN BCaBA, HO BCBA, HP BCBA-D). Wyoming Medicaid’s 97153 rate ($12.30 per 15 minutes) is the only public benchmark.' },
    ],
  },
};

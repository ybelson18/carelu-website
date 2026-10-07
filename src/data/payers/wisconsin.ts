import type { PayerConfig, PayerSource } from './types.js';

/* Wisconsin — researched October 2026 from primary sources only.
   The ForwardHealth Online Handbook (Behavioral Treatment Benefit service area, sa=130) sits
   behind a CPT licence-agreement interstitial: a plain GET 302s to ProcedureLicenseAgreement.aspx.
   A requests.Session that GETs that page, POSTs rbAgreement=Y with the ASP.NET hidden fields, and
   then re-requests the handbook URL returns every chapter in full; each chapter's "All Topics" view
   was read that way. The max fee schedule was read from the downloadable CSV and checked against the
   interactive Max Fee search (postback form). docs.legis.wisconsin.gov and oci.wi.gov answer plain curl.

   Structure finding: behavioral treatment is carved OUT of every Wisconsin Medicaid managed care
   plan (BadgerCare Plus and Medicaid SSI HMOs and the special managed care programs) and is
   administered fee-for-service by ForwardHealth. There is therefore no Medicaid HMO guide for
   Wisconsin: the HMOs do not authorize or pay for ABA.

   Citation note: behavior analyst licensure is Wis. Stat. ss. 440.310–440.317, which the statute
   site files as subchapter III of chapter 440. Subchapter XIV of chapter 440 is the Uniform
   Athlete Agents Act. */

const FH_KW = 'https://www.forwardhealth.wi.gov/WIPortal/Subsystem/KW/Display.aspx?ia=1&p=1&sa=130';

const S: Record<string, PayerSource> = {
  fhCovered: { title: 'ForwardHealth Online Handbook — Behavioral Treatment Benefit: Covered Services and Requirements (topics 18978, 18997, 19017, 24004, 18980, 18979, 18999, 22657, 24023)', url: `${FH_KW}&s=2&c=61` },
  fhCodes: { title: 'ForwardHealth Online Handbook — Behavioral Treatment: Codes (modifiers, place of service, procedure codes; topics 18957–18959)', url: `${FH_KW}&s=2&c=10` },
  fhNoncov: { title: 'ForwardHealth Online Handbook — Behavioral Treatment: Noncovered Services (topic 19020)', url: `${FH_KW}&s=2&c=8` },
  fhTele: { title: 'ForwardHealth Online Handbook — Behavioral Treatment: Telehealth (topics 510, 22737, 22739, 22757, 22837)', url: `${FH_KW}&s=2&c=676` },
  fhMC: { title: 'ForwardHealth Online Handbook — Managed Care: Covered and Noncovered Services (topic 391, HMO carve-outs; topic 16197, Care4Kids)', url: `${FH_KW}&s=9&c=50` },
  fhPAcrit: { title: 'ForwardHealth Online Handbook — Behavioral Treatment PA: Approval Criteria (topics 19038–19041, 22658)', url: `${FH_KW}&s=3&c=646` },
  fhPAreq: { title: 'ForwardHealth Online Handbook — Behavioral Treatment PA: Services Requiring Prior Authorization (topics 19059, 19060, 19657, 20477)', url: `${FH_KW}&s=3&c=11` },
  fhPAforms: { title: 'ForwardHealth Online Handbook — PA: Forms and Attachments (PA/RF, PA/BTA; topics 19042, 19044, 448)', url: `${FH_KW}&s=3&c=12` },
  fhPAdec: { title: 'ForwardHealth Online Handbook — PA: Decisions (topic 4724, 20 working days; topic 4737, 30-day response)', url: `${FH_KW}&s=3&c=15` },
  fhPAdates: { title: 'ForwardHealth Online Handbook — PA: Grant and Expiration Dates (backdating, topics 439, 19057, 19058)', url: `${FH_KW}&s=3&c=81` },
  fhPAgen: { title: 'ForwardHealth Online Handbook — PA: General Information (topic 438, reimbursement not guaranteed; other insurance)', url: `${FH_KW}&s=3&c=55` },
  fhEnroll: { title: 'ForwardHealth Online Handbook — Behavioral Treatment: Provider Enrollment (topic 19061, specialties and billing status)', url: `${FH_KW}&s=1&c=1` },
  fhClaims: { title: 'ForwardHealth Online Handbook — Behavioral Treatment: Claims Submission (topics 19637, 18938, 18937, 22797)', url: `${FH_KW}&s=4&c=13` },
  fhResp: { title: 'ForwardHealth Online Handbook — Claims: Responsibilities (topic 547, 365-day submission deadline)', url: `${FH_KW}&s=4&c=20` },
  fhPLR: { title: 'ForwardHealth Online Handbook — Reimbursement: Payer of Last Resort (topics 242, 251, 253, 255)', url: `${FH_KW}&s=5&c=29` },
  fhCOB: { title: 'ForwardHealth Online Handbook — Coordination of Benefits: Commercial Health Insurance (topics 19617, 18977)', url: `${FH_KW}&s=7&c=41` },
  fhContact: { title: 'ForwardHealth Online Handbook — Resources: Contact Information (Provider Services 800-947-9627)', url: `${FH_KW}&s=8&c=483` },
  fhMaxFee: { title: 'ForwardHealth — Behavioral Treatment maximum allowable fee schedule (download dated 10/03/2026)', url: 'https://www.forwardhealth.wi.gov/MaxFee/behav_max_fee_20261003.csv' },
  fhMaxFeeSearch: { title: 'ForwardHealth — Interactive Max Fee Search (Behavioral Treatment service area)', url: 'https://www.forwardhealth.wi.gov/WIPortal/Subsystem/Publications/MaxFeeDynamicSearch.aspx' },
  fhCriteria: { title: 'ForwardHealth — Provider Enrollment Criteria: Behavioral Treatment specialties', url: 'https://www.forwardhealth.wi.gov/WIPortal/Subsystem/Certification/EnrollmentCriteria.aspx?topic=2' },
  fhMod52: { title: 'ForwardHealth — Behavioral Treatment Claim Details for Focused Treatment Services (modifier 52 guidance, 2026)', url: 'https://www.forwardhealth.wi.gov/WIPortal/cms/page/message/bt-claim-details-for-fts' },
  dhsEVV: { title: 'Wisconsin DHS — Electronic Visit Verification (EVV): services that require EVV', url: 'https://www.dhs.wisconsin.gov/evv/index.htm' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  s632895: { title: 'Wis. Stat. § 632.895(12m) — Treatment for autism spectrum disorders', url: 'https://docs.legis.wisconsin.gov/statutes/statutes/632/vi/895/12m' },
  ins336: { title: 'Wis. Admin. Code § Ins 3.36 — Coverage of autism spectrum disorders', url: 'https://docs.legis.wisconsin.gov/code/admin_code/ins/3/36' },
  ociFaq: { title: 'Wisconsin OCI — Frequently Asked Questions on Mandated Coverage for Autism Services (PI-234, last updated March 6, 2026)', url: 'https://oci.wi.gov/Pages/Consumers/PI-234.aspx' },
  s440: { title: 'Wis. Stat. §§ 440.310–440.317 — Behavior analysts (ch. 440, subch. III): title, licensure, renewal, rules', url: 'https://docs.legis.wisconsin.gov/statutes/statutes/440/iii/312' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Wisconsin: 2010, Department of Safety and Professional Services)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  s628: { title: 'Wis. Stat. § 628.46 — Timely payment of claims', url: 'https://docs.legis.wisconsin.gov/statutes/statutes/628/iii/46' },
  s632835: { title: 'Wis. Stat. § 632.835 — Independent review of coverage denial determinations', url: 'https://docs.legis.wisconsin.gov/statutes/statutes/632/vi/835' },
  ins340: { title: 'Wis. Admin. Code § Ins 3.40 — Coordination of benefits in group policies (birthday rule, Ins 3.40(11)(b)3.)', url: 'https://docs.legis.wisconsin.gov/code/admin_code/ins/3/40' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; exhibit covers Maryland only)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (Network Participation Criteria)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  aetnaTele: { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026; HealthPartners network and Wisconsin Regulatory Addendum)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumNNM: { title: 'Optum National Network Manual (effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  anthemPA: { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
  anthemANA: { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' },
  anthemRGwi: { title: 'Anthem BCBS Wisconsin — Applied Behavior Analysis Provider Resource Guide (WIBCBS-CM-086637-25, June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-wi.pdf' },
  anthemWeekly: { title: 'Anthem Wisconsin provider news — Streamlined ABA claim process starts January 1, 2026 (weekly approved units)', url: 'https://providernews.anthem.com/wisconsin/articles/streamlined-aba-claim-process-starts-january-1-2026-27884' },
};

/* ---- Shared Wisconsin commercial layer (same facts on every commercial guide) ---- */
const WI_MANDATE_BODY =
  'Wisconsin’s autism mandate is Wis. Stat. § 632.895(12m). Every disability insurance policy, and every self-insured health plan of the state or a county, city, town, village or school district, "shall provide coverage for an insured of treatment for the mental health condition of autism spectrum disorder if the treatment is prescribed by a physician" and delivered by a listed provider: a psychiatrist, a person who practices psychology, a social worker licensed or certified to practice psychotherapy, "a behavior analyst who is licensed under s. 440.312," a paraprofessional working under one of those, a professional supervised by a certified outpatient mental health clinic, or a speech-language pathologist or occupational therapist. The statute splits treatment into "intensive-level services" (evidence-based behavioral therapy) and "nonintensive-level services," and sets dollar floors, not ceilings: "at least $50,000 for intensive-level services per insured per year, with a minimum of 30 to 35 hours of care per week for a minimum duration of 4 years, and at least $25,000 for nonintensive-level services," adjusted each year by the medical CPI. For 2026 the Office of the Commissioner of Insurance (OCI) puts those floors at $74,240 and $37,119. The coverage may carry the plan’s usual deductibles, coinsurance and copays but "may not be subject to limitations or exclusions, including limitations on the number of treatment visits." The OCI rule, Ins 3.36, sets the age gate: intensive-level therapy must be "commenced after an insured is two years of age and before the insured is nine years of age," runs up to 48 cumulative months (prior intensive therapy from any payer counts), needs a treatment plan of at least 20 hours a week over six months, and requires direct observation by the qualified provider at least once every two months. Nonintensive-level services have no age limit. OCI adds that once a child moves to nonintensive-level services they cannot go back to intensive. Exempt: specified-disease policies, limited service health organizations and preferred provider plans that are not defined network plans, long-term care and Medicare supplement or replacement policies, and, per OCI, self-funded private employer plans under federal jurisdiction and out-of-state group plans unless at least 25% of covered employees live in Wisconsin.';

const WI_LICENSURE_BODY =
  'Wisconsin licenses behavior analysts, and has since 2010 (BACB licensure table; the regulator is the Department of Safety and Professional Services). The law, Wis. Stat. §§ 440.310–440.317, defines a behavior analyst as someone "certified by the Behavior Analyst Certification Board, Inc., as a board-certified behavior analyst" who "has been granted a license under this subchapter." Licensure is issued on BACB certification plus an application and fee (§ 440.312), and each renewal needs proof of current BACB certification (§ 440.313). It is mainly a title law: § 440.311 bars anyone without the license from using the title "behavior analyst," but does not restrict other licensed professionals practicing behavior analysis within their own scope. For insurance, though, the license matters. The mandate names "a behavior analyst who is licensed under s. 440.312," and Ins 3.36 defines a qualified intensive-level provider as someone "acting within the scope of a currently valid state-issued license." So a BCBA licensed in another state is not a qualified provider under the mandate until they hold a Wisconsin license, and that holds for telehealth too. Ins 3.36 also requires insurers to verify the license, certification and training of supervising and intensive-level providers, and requires agencies to verify paraprofessionals’ credentials and check for felony and child-maltreatment convictions. A qualified paraprofessional is 18 or older, has a high school diploma, has passed a criminal background check, has at least 20 hours of autism training plus 10 hours of hands-on behavioral training, and is regularly overseen by a qualified supervising provider. Claims: an insurer must pay a clean claim within 30 days of written notice of the loss, and overdue payments carry 7.5% simple annual interest (Wis. Stat. § 628.46). Rates: commercial ABA rates are negotiated and not published. The public benchmark is the Wisconsin Medicaid (ForwardHealth) fee schedule, which pays 97153 at $11.91 per 15 minutes for comprehensive treatment.';

const WI_PA_NOTE =
  'OCI says prior authorization is "generally" not required for mandated autism services, "but it may be beneficial," and that "if your plan requires prior authorization for similar outpatient services, then you may be required to have autism services prior authorized, too."';

const MANDATE_REFERRAL_TAIL =
  ' For a policy subject to Wis. Stat. § 632.895(12m), the treatment must be "prescribed by a physician," so get a physician’s prescription on file. Self-funded private employer plans are outside the statute.';

const MANDATE_AGE_TAIL =
  ' For plans subject to the Wisconsin mandate, Ins 3.36(4)(a)5. requires intensive-level therapy to begin after age 2 and before age 9 (up to 48 cumulative months), while nonintensive-level services have no age limit (OCI). Self-funded private employer plans are outside the statute, so plan funding type decides whether that binds.';

const COMMERCIAL_TURNAROUND = (carrier: string) =>
  `Wisconsin’s autism rule sets no decision clock for authorizations, and we found no Wisconsin-specific ABA turnaround from ${carrier}. For private employer group health plans, insured or self-funded, the federal ERISA claims rule applies: the plan must decide a pre-service claim "not later than 15 days after receipt of the claim," with one extension of up to 15 days, and an urgent-care claim within 72 hours. If a mandated autism claim is denied, Ins 3.36(9) treats the insurer’s decision on diagnosis and level of service as an adverse determination, so the family can file a grievance and then ask for independent review under Wis. Stat. § 632.835.`;

const COMMERCIAL_COB = (carrier: string) =>
  `For a child on two group plans, Wisconsin’s coordination-of-benefits rule is the birthday rule: "the benefits of the Plan of the parent whose birthday falls earlier in a year are determined before those of the Plan of the parent whose birthday falls later in that year" (Ins 3.40(11)(b)3.; "birthday" means month and day, not year). That rule binds group policies regulated by the state; a self-funded plan sets its own order. If the child also has Wisconsin Medicaid, ${carrier} pays first: Medicaid is payer of last resort (42 CFR 433.139). ForwardHealth pays a balance only after a correct claim to the commercial plan, and "will not reimburse claims denied by commercial health insurance due to billing errors or when the provider was out of the commercial insurer’s network." Bill the commercial plan with its own codes and modifiers, and get ForwardHealth prior authorization too, because ForwardHealth needs an approved PA for the dates of service. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).`;

const COB_CITES = [S.ins340, S.cfr433, S.fhCOB, S.tricare, S.champva];

const MANDATE_ROWS = {
  mandate: { label: 'State mandate', value: 'Wis. Stat. § 632.895(12m) + Wis. Admin. Code § Ins 3.36 (prescribed by a physician)' },
  age: { label: 'Mandate age', value: 'Intensive-level therapy must start after age 2 and before age 9 (up to 48 months); nonintensive-level services have no age limit' },
  caps: { label: 'Mandate caps', value: 'Minimum floors, not caps: at least $74,240/yr intensive and $37,119/yr nonintensive for 2026 (CPI-adjusted); no visit limits allowed' },
  exempt: { label: 'Exempt from mandate', value: 'Self-funded private employer plans; non-network PPO/limited-service plans; out-of-state group plans unless 25%+ of employees live in WI' },
  licensure: { label: 'Licensure', value: 'Yes: Wisconsin licenses behavior analysts (DSPS, Wis. Stat. § 440.312, on BACB certification); the mandate requires the Wisconsin license' },
};

export const wisconsinPayers: Record<string, PayerConfig> = {
  'wisconsin-medicaid': {
    slug: 'wisconsin-medicaid',
    cardDesc: 'ForwardHealth’s Behavioral Treatment Benefit: carved out of every HMO, run fee-for-service with PA through the Portal.',
    assessmentPA: {
      value: 'No, up to a limit: ForwardHealth covers "up to 96 units/24 hours of behavior identification assessment services within a calendar year without PA" (97151, licensed supervisor only); more needs a PA amendment. 97152 is limited to two hours per day of service',
      status: 'verified',
      cites: [S.fhCovered, S.fhCodes],
    },
    treatmentPA: {
      value: 'Yes. "Comprehensive behavioral treatment, focused behavioral treatment, behavioral treatment with protocol modification, family treatment guidance, and team meetings all require PA," plus group treatment. Submit a PA/RF, the PA/BTA attachment and a prescription on the ForwardHealth Portal; only a licensed supervisor may be the billing or rendering provider on the request',
      status: 'verified',
      cites: [S.fhPAreq, S.fhPAforms],
    },
    dxRequired: {
      value: 'Not autism-only. Treatment "may be authorized for members with autism or other diagnoses or conditions associated with deficient adaptive or maladaptive behaviors." A diagnostic report is required with the PA request (for comprehensive treatment, dated within one year); under age 6 a provider attestation of an ASD diagnosis can stand in',
      status: 'verified',
      cites: [S.fhCovered, S.fhPAcrit, S.fhPAreq],
    },
    payer: 'Wisconsin Medicaid (ForwardHealth)',
    state: 'WI', kind: 'state-medicaid',
    pill: 'Payer Guide · Wisconsin Medicaid (ForwardHealth)',
    h1: 'Wisconsin Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Wisconsin Medicaid (ForwardHealth) ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Wisconsin Medicaid covers ABA through ForwardHealth’s Behavioral Treatment Benefit: comprehensive and focused treatment, carved out of BadgerCare Plus HMOs and paid fee-for-service, PA requirements, supervision ratios, the 2026 max fee schedule, telehealth, and provider enrollment.',
    intro: [
      'Wisconsin Medicaid covers ABA through ForwardHealth’s Behavioral Treatment Benefit, which covers "services designed specifically for adaptive behavior assessment and treatment." It comes in two levels: comprehensive behavioral treatment, the high-intensity early-intervention model, and focused behavioral treatment, a time-limited, lower-intensity program aimed at specific behaviors or skills. The benefit is not limited to autism.',
      'The single most important fact for intake: the benefit is "administered fee-for-service for all Medicaid-enrolled members" and is "carved out of MCOs," including BadgerCare Plus and Medicaid SSI HMOs, Children Come First, Wraparound Milwaukee, Care4Kids, Family Care, PACE and Family Care Partnership. Whatever HMO is on the child’s card, the PA request and the claims go to ForwardHealth, not the HMO.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes: the Behavioral Treatment Benefit (comprehensive and focused behavioral treatment)' },
      { label: 'Structure', value: 'Fee-for-service for everyone; carved out of BadgerCare Plus and SSI HMOs and special managed care plans' },
      { label: 'Assessment PA', value: 'None for up to 96 units (24 hours) of 97151 per calendar year' },
      { label: 'Treatment PA', value: 'Required: PA/RF + PA/BTA + prescription via the ForwardHealth Portal (process type 142)' },
      { label: 'Age', value: 'Comprehensive treatment under 21 (EPSDT); focused treatment has no stated age cap' },
      { label: 'Rates (per 15 min)', value: '97151 $25.90 · 97152 $22.93 · 97153 $11.91 (comprehensive) · 97155 $22.93 · 97156 $28.03' },
      { label: 'Licensure', value: 'Licensed supervisors need a Wisconsin DSPS license (behavior analyst, or another listed license plus ESDM certification)' },
      { label: 'Other insurance', value: 'ForwardHealth pays last; bill the commercial plan in-network first' },
    ],
    sections: [
      {
        h2: 'Where ABA sits: fee-for-service, not the HMO',
        body: [
          'ForwardHealth’s handbook is explicit: "The behavioral treatment benefit is carved out of MCOs, which include BadgerCare Plus and Medicaid SSI HMOs and special managed care plans," with "PA requests and claims processed by ForwardHealth instead of the member’s HMO." The managed care chapter lists "Behavioral treatment services (for example, autism services)" first among services that "are not covered by BadgerCare Plus HMOs or Medicaid SSI HMOs but are provided to members on a fee-for-service basis," and tells providers to "submit PA requests and claims directly to ForwardHealth." Care4Kids, the plan for children in out-of-home care, carves it out too. So this guide has no HMO companion pages: no Wisconsin Medicaid HMO authorizes or pays for ABA.',
          'The benefit covers behavior identification assessment and plan-of-care development, comprehensive treatment, focused treatment, treatment with protocol modification, family adaptive behavior treatment guidance (family treatment guidance and team meetings) and group treatment. It does not include diagnosis: "A comprehensive diagnosis precedes a referral for behavioral treatment services," and diagnostic and psychological testing is billed under the physician or outpatient mental health benefits. Comprehensive treatment is paid "under federal EPSDT authority," so "PA requests and claim submissions for comprehensive behavioral treatment for members 21 years of age or older will be denied." It is authorized at "no fewer than 20 hours per week at the outset," and for autism ForwardHealth names ABA and the Early Start Denver Model (ESDM) as evidence-based comprehensive models.',
        ],
        cites: [S.fhCovered, S.fhMC, S.fhPAreq],
      },
      {
        h2: 'Prior authorization: what goes in the packet',
        body: [
          'An initial request covers "no more than six months of treatment." Amendments can extend it to 12 months under the same PA number, and subsequent requests cover up to 12 months. The packet is the PA/RF, the PA/BTA attachment, documentation for the approval criteria, and a prescription. The prescription can come from "any qualified medical provider" enrolled in Wisconsin Medicaid. It must state the hours per week and duration, and covered hours may vary "not exceeding a total of 45 treatment hours per week." The initial request must include the diagnostic report, the provider’s initial assessment, previous treatment history, age-normed testing (developmental, communication and adaptive measures for comprehensive treatment; standardized measures or an FBA for focused), the treatment team, the plan of care with discharge criteria, a care-collaboration plan, a grid-style weekly schedule of treatment and school hours, and the most recent IEP. All direct treatment (97153 and 97155) is requested "as a single lump sum using CPT code 97153." Family guidance, team meetings and group treatment are requested on separate lines.',
          'Children under 6 get a faster path. Requests must be submitted before the sixth birthday. ForwardHealth "will authorize up to 30 hours per week of direct treatment (CPT code 97153) through the member’s third birthday and up to 40 hours per week thereafter," for up to 12 months. The PA/BTA is not required, and a diagnostic evaluation can be replaced by "the provider’s attestation that the member has been diagnosed with an autism spectrum disorder by a qualified professional." A medical evaluation from the past 12 months and a prescription are still required. Requests can be backdated only if received within 14 calendar days of the requested start date. Amendment requests to continue treatment must arrive before the current PA expires. The start date can never precede the medical exam, diagnostic evaluation or prescription.',
        ],
        cites: [S.fhPAcrit, S.fhPAreq, S.fhPAforms, S.fhPAdates],
      },
      {
        h2: 'Rates: the 2026 max fee schedule',
        body: [
          'ForwardHealth’s Behavioral Treatment max fee file (downloaded October 2026, dated 10/03/2026) pays per 15-minute unit: 97151 $25.90; 97152 $22.93; 97153 with TG (comprehensive) $11.91; 97153 with TF (focused) $41.44 for provider specialties 34/400 and 34/403 and $20.84 for 34/401 and 34/404; 97153 TF-52 (focused, rendered by a technician, specialty 34/402) $11.91; 97155 $22.93; 97156 $28.03; and the group codes 97154 and 97158 at $12.71 or $6.39 by specialty, with 97154 at $3.65 for a technician as assisting provider. Most rates have been effective since February 1, 2023 (the group codes since December 1, 2022). The two $41.44 specialty codes are also the only ones allowed to bill 97151, which the handbook reserves for licensed supervisors. 97157, 0362T and 0373T are not on the schedule. The interactive search flags 97153 TG with "Age < 21."',
          'Billing basics: claims go on the 837P or the 1500 form. Every line needs the TG or TF modifier, AM for team meetings, and TF-52 when a technician renders focused treatment. Since the modifier-52 guidance in 2026, providers who used 52 on focused claims not rendered by a technician must correct them. Claims must arrive within 365 days of the date of service. Claims picked for payment-integrity review need supporting documentation attached within seven days. EVV does not apply: Wisconsin’s EVV list covers personal care, supportive home care and home health codes, not the ABA codes.',
        ],
        cites: [S.fhMaxFee, S.fhMaxFeeSearch, S.fhCodes, S.fhMod52, S.fhClaims, S.fhResp, S.dhsEVV],
      },
      {
        h2: 'Provider enrollment and licensure',
        body: [
          'Every clinician who delivers behavioral treatment must be enrolled in one of five specialties. Behavioral treatment licensed supervisors and focused treatment licensed supervisors can bill and render. Behavioral treatment therapists, behavioral treatment technicians and focused treatment therapists render only. A behavioral treatment licensed supervisor needs either "a license as a behavior analyst issued by the Wisconsin Department of Safety and Professional Services (DSPS)" plus "at least 4,000 hours of documented experience as a supervisor," or a DSPS license as a psychiatrist, psychologist, clinical social worker, professional counselor or marriage and family therapist with the same 4,000 hours and a UC Davis ESDM certificate. A focused treatment licensed supervisor needs one of those DSPS licenses plus 2,000 hours of supervised experience in a focused model. Therapists qualify as a BCaBA, or with a master’s degree and 400 hours, or a bachelor’s degree and 2,000 hours (focused therapists can also qualify as an RBT with 2,000 hours). A technician needs RBT certification, or a high school diploma or GED plus 40 hours of training on the standard core curriculum. Therapist and technician applications must name an already-enrolled licensed supervisor.',
          'For out-of-state BCBAs: every specialty is eligible for border-status and telehealth-only border-status enrollment. But telehealth-only border status is open only to providers "licensed in Wisconsin under applicable Wisconsin statute and administrative code," and a supervisor’s eligibility rests on the Wisconsin DSPS license. Out-of-state providers without border status must get prior authorization before providing telehealth services. In practice a BCBA licensed elsewhere needs a Wisconsin behavior analyst license before they can supervise or bill Wisconsin Medicaid behavioral treatment, whether in person or by telehealth.',
        ],
        cites: [S.fhEnroll, S.fhCriteria, S.fhTele, S.s440],
      },
    ],
    collect: [
      { title: 'ForwardHealth ID', desc: 'Medicaid, BadgerCare Plus or another ForwardHealth program. The HMO on the card does not matter: ABA goes to ForwardHealth fee-for-service.' },
      { title: 'Diagnostic report', desc: 'From a Medicaid-enrolled physician or psychologist, using a validated tool (ADOS-2, ADI-R or CARS-2 for autism). For comprehensive treatment it must be dated within one year.' },
      { title: 'Prescription', desc: 'From a Medicaid-enrolled medical provider: hours per week and duration, the prescriber’s NPI and signature. The PA start date cannot come before it.' },
      { title: 'Medical evaluation (under 6)', desc: 'The simplified under-6 path needs a medical evaluation from the past 12 months.' },
      { title: 'Schedule and IEP', desc: 'A grid-style weekly schedule of treatment and school hours, and the most recent IEP.' },
      { title: 'Other insurance', desc: 'Commercial coverage is billed first and in-network. Keep any administrative denial letter if the plan excludes ABA.' },
    ],
    sources: [S.fhCovered, S.fhCodes, S.fhNoncov, S.fhTele, S.fhMC, S.fhPAcrit, S.fhPAreq, S.fhPAforms, S.fhPAdec, S.fhPAdates, S.fhPAgen, S.fhEnroll, S.fhClaims, S.fhResp, S.fhPLR, S.fhCOB, S.fhContact, S.fhMaxFee, S.fhMaxFeeSearch, S.fhCriteria, S.fhMod52, S.dhsEVV, S.cfr440, S.cfr433, S.s440],
    deliveryRules: {
      supervision: {
        value: 'Treatment supervisors (licensed supervisors or treatment therapists) must observe, demonstrate and provide simultaneous direction "for a minimum of one hour and a maximum of two hours for every 10 hours of direct treatment provided, averaged over a calendar month." More than two hours needs documented exceptional circumstances. The licensed supervisor must directly observe the member "for at least one hour every 60 to 75 days." If more than 75 days pass, ForwardHealth "may recoup all payments made for services delivered after day 75." Each treatment therapist gets weekly face-to-face or indirect contact plus monthly face-to-face supervision from a licensed supervisor, and each technician gets face-to-face supervision at least monthly. Protocol modification (97155) may generally be requested at up to one hour per five hours of direct treatment.',
        status: 'verified',
        cites: [S.fhPAcrit, S.fhCovered],
      },
      concurrentBilling: {
        value: '"ForwardHealth does not permit concurrent billing of adaptive behavior treatment by protocol (CPT procedure code 97153) and adaptive behavior treatment with protocol modification (CPT procedure code 97155)." When two or more providers are present, "each minute of service provided to the member is claimed only once." The code table adds "do not bill separately for 97153 during simultaneous direction of technician." Co-treatment with a therapist, outpatient mental health or PDN provider can be paid for the same time only if approved on the PA.',
        status: 'verified',
        cites: [S.fhCovered, S.fhCodes],
      },
      dailyLimits: {
        value: 'Handbook limits: 97151, 96 units (24 hours) per calendar year without PA; 97152, two hours per day of service; 97154 and 97158, 8 units (2 hours) per member per day; 97156 family treatment guidance, 8 units per day; 97156-AM team meetings, 4 units (1 hour) per week. Treatment units per week are set by the PA, and covered hours may vary up to 45 treatment hours per week. ForwardHealth follows the CMS NCCI standards.',
        status: 'verified',
        cites: [S.fhCodes, S.fhCovered, S.fhPAcrit],
      },
      noteSignature: {
        value: 'Every session note must carry the "Renderer’s signature and signature date," along with the date of service, time in and out, mode of delivery (in person or telehealth), staff present, goals addressed, techniques and data. "Documentation should be completed no later than 48 hours after the DOS as evidenced by the renderer’s signature and signature date on the record." The plan of care "must be signed and dated by the supervising provider prior to provision of care." Time spent documenting after the service is not reimbursable.',
        status: 'verified',
        cites: [S.fhCovered, S.fhPAcrit],
      },
      placeOfService: {
        value: 'Treatment "may occur in the member’s home, the provider’s office, or in the community." Allowed POS codes are 02, 03 (school), 04–08, 10, 11, 12, 13, 14, 16, 19, 27, 49, 50, 71 and 72. For parks, libraries or stores, bill POS 12. ForwardHealth "will not authorize a plan of care or reimburse behavioral treatment providers for providing educational instruction" to members 6 and older. Treatment during school hours must explain why a behavioral provider is needed and plan to hand the work over to school supports.',
        status: 'verified',
        cites: [S.fhCodes, S.fhCovered, S.fhPAcrit],
      },
      billAsProvider: {
        value: '"Only licensed supervisors can submit and be reimbursed for claims." The licensed supervisor overseeing the member’s plan of care is the billing provider, and the licensed supervisor, treatment therapist or technician who rendered the service is the rendering provider. "Each detail line on the claim requires a rendering provider number." Therapists and technicians are enrolled as rendering-only providers. Family treatment guidance (97156) must show the licensed supervisor as rendering provider.',
        status: 'verified',
        cites: [S.fhClaims, S.fhEnroll, S.fhCovered],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Comprehensive treatment is covered only under 21: it is paid "under federal EPSDT authority," and requests and claims for members 21 or older are denied. The max fee schedule flags 97153 TG with "Age < 21." Focused treatment carries no age limit in the handbook, which addresses members 18 and older (they must have input on goals and sign the plan if they make their own medical decisions). The simplified PA path is only for children who have not reached age 6.',
        status: 'verified',
        cites: [S.fhCovered, S.fhMaxFeeSearch, S.fhPAcrit, S.fhPAreq],
      },
      dxRecency: {
        value: 'For comprehensive treatment, the diagnostic report "must be dated within one year of the PA request" (or within one year of the start of the current course for members continuously in treatment). For focused treatment, older reports are accepted with an updated clinical impression in the initial assessment. Under 6, a medical evaluation within the past 12 months is required, and an ASD attestation may stand in for the diagnostic report.',
        status: 'verified',
        cites: [S.fhPAcrit, S.fhPAreq],
      },
      diagnosingProviders: {
        value: 'The diagnostic evaluation is covered under the mental health benefit "when performed by a Medicaid-enrolled licensed physician or psychologist," and the report is submitted with the PA. Under 6, the provider may instead attest that the member "has been diagnosed with an autism spectrum disorder by a qualified professional." ForwardHealth may ask for an independent diagnostic evaluation when comorbid conditions are not clarified.',
        status: 'verified',
        cites: [S.fhPAcrit, S.fhPAreq],
      },
      diagnosticTools: {
        value: 'The diagnostic report must use "a diagnostic tool that is validated in peer-reviewed clinical literature," administered according to protocol. For ASD, "the ADOS-2, ADI-R, and CARS-2 are examples." It must also include a developmental and history interview, direct observation, direct probing of skills, record review and a differential diagnosis. For treatment, comprehensive requests need age-normed testing (cognitive, communication, adaptive). Comprehensive ASD plans use a validated curriculum such as VB-MAPP, ABLLS or the ESDM Curriculum Checklist.',
        status: 'verified',
        cites: [S.fhPAcrit],
      },
      referral: {
        value: 'Yes: a prescription is required. "Any qualified medical provider can write the prescription for behavioral treatment," and that provider must be enrolled with Wisconsin Medicaid. The prescription must give the date, member ID, service, hours per week and duration, and the prescriber’s NPI and signature. All authorized dates must fall within the prescription’s range. Claims for prescribed services must carry the prescriber’s Type 1 NPI.',
        status: 'verified',
        cites: [S.fhPAcrit, S.fhPAdates, S.fhClaims],
      },
      telehealth: {
        value: 'Allowed. The max fee schedule lists POS 02 and 10 for 97151 through 97158, which is how ForwardHealth marks a code as allowed under its permanent telehealth policy. Bill the same code with modifier GT or 95 (audio-video), 93 or FQ (audio-only) or GQ (asynchronous), plus POS 02 or 10, at the same rate as in person. Comprehensive and focused treatment must be "face-to-face," and ForwardHealth counts real-time audio-video as face-to-face but "does not consider a face-to-face requirement to be met by audio-only." Use modifier FR when the supervisor joins by video while the technician and member are together in person. Both member and provider must agree to telehealth, and consent should be documented at least annually. Out-of-state providers without border status need PA before any telehealth service.',
        status: 'verified',
        cites: [S.fhTele, S.fhMaxFee, S.fhCovered],
      },
      authTurnaround: {
        value: 'The handbook says "ForwardHealth will make a decision regarding a provider’s PA request within 20 working days from the receipt of all the necessary information." The federal rule for state Medicaid agencies is shorter: beginning January 1, 2026, standard decisions are due "in no case later than 7 calendar days after receiving the request," and expedited ones within 72 hours. The handbook had not been updated to match when we read it. If ForwardHealth returns a request for more information, the provider has 30 calendar days to respond (the original receipt date is kept), or the request goes inactive. Mark urgent requests with the Portal’s Urgent checkbox.',
        status: 'verified',
        cites: [S.fhPAdec, S.cfr440, S.fhPAforms],
      },
      coordinationOfBenefits: {
        value: 'ForwardHealth is payer of last resort and pays "only that portion of the allowed cost remaining after a member’s other health insurance sources have been exhausted." For behavioral treatment, bill the commercial plan first, using its codes, modifiers and units (no TG/TF unless it requires them), and then bill ForwardHealth for the balance with the same codes. ForwardHealth "will only coordinate benefits when members use a provider in their commercial insurer’s network," and will not pay claims denied for billing errors. When ABA is excluded by the commercial plan or its annual maximum is reached, bill ForwardHealth with the matching claim adjustment reason code and keep the carrier’s Administrative Denial Letter on file. An approved ForwardHealth PA is required for those dates. ForwardHealth is not payer of last resort to programs such as Birth to 3, the CLTS waiver, IDEA or Indian Health Service.',
        status: 'verified',
        cites: [S.fhPLR, S.fhCOB, S.fhPAgen, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Wisconsin Medicaid cover ABA therapy?', a: 'Yes, through ForwardHealth’s Behavioral Treatment Benefit: comprehensive treatment (high-intensity early intervention, under 21) and focused treatment (time-limited, for specific behaviors or skills). It is not limited to autism.' },
      { q: 'Do BadgerCare Plus HMOs authorize ABA?', a: 'No. Behavioral treatment is carved out of BadgerCare Plus and Medicaid SSI HMOs and the special managed care plans. PA requests and claims go to ForwardHealth fee-for-service, whatever HMO is on the card.' },
      { q: 'Does the ABA assessment need prior authorization in Wisconsin Medicaid?', a: 'Not at first. ForwardHealth covers up to 96 units (24 hours) of 97151 per calendar year without PA. More than that needs a PA amendment. All treatment needs PA.' },
      { q: 'What does Wisconsin Medicaid pay for ABA?', a: 'Per 15-minute unit on the October 2026 max fee schedule: 97151 $25.90, 97152 $22.93, 97153 $11.91 for comprehensive treatment (focused treatment pays $41.44 or $20.84 by provider level, $11.91 for a technician), 97155 $22.93, 97156 $28.03.' },
      { q: 'Can a BCBA licensed in another state treat Wisconsin Medicaid members by telehealth?', a: 'Not without a Wisconsin license. A licensed supervisor needs a Wisconsin DSPS behavior analyst license, and ForwardHealth’s telehealth-only border-status enrollment is open only to providers licensed in Wisconsin. Out-of-state providers without border status also need PA before telehealth.' },
      { q: 'What is the timely filing limit for Wisconsin Medicaid ABA claims?', a: '365 days from the date of service for claims, corrected claims and adjustments. Claims must be billed by the licensed supervisor on the plan of care, with the rendering provider on every line.' },
    ],
  },

  'aetna-wisconsin': {
    slug: 'aetna-wisconsin',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA guide + precert on all ABA codes, layered on Wisconsin’s § 632.895(12m) mandate and licensed-BCBA rule.',
    assessmentPA: {
      value: 'Required on Aetna’s side: all ten ABA codes, 97151 included, are on its behavioral health precertification list (eff. 8/1/2024). For mandated policies, OCI notes prior authorization is generally not required unless the plan requires it for similar outpatient services',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.ociFaq],
      verifyVia: 'Availity or the precertification number on the member’s card: confirm whether this Wisconsin plan applies ABA precertification to 97151.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Required: ABA treatment codes are on Aetna’s behavioral health precertification list; submit most requests through Availity. The reauthorization interval is set by the plan, with progress evaluated every six months',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (behavioral health number on the card): ask whether the group carries ABA precertification and what reauthorization interval it uses.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5 autism spectrum disorder (F84.0, F84.3–F84.9) from an appropriate provider. Wisconsin’s mandate also covers only autism spectrum disorder, and Ins 3.36 requires a "primary verified diagnosis"',
      status: 'verified',
      cites: [S.aetnaGuide, S.s632895, S.ins336],
    },
    payer: 'Aetna in Wisconsin',
    state: 'WI', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Wisconsin',
    h1: 'Aetna ABA coverage in Wisconsin: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Wisconsin: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Wisconsin families: the national ABA medical necessity guide, precertification, Wisconsin’s § 632.895(12m) autism mandate (2026 floors $74,240 intensive / $37,119 nonintensive, intensive start ages 2–9), the Wisconsin behavior analyst license, and what intake should verify.',
    intro: [
      'For an intake team in Wisconsin, an Aetna card means three layers: Aetna’s national ABA medical necessity guide, Wisconsin’s autism mandate in Wis. Stat. § 632.895(12m) and OCI rule Ins 3.36, and the plan’s funding type, which decides whether the mandate applies at all. Wisconsin’s mandate is unusual: it sets minimum dollar floors and an intensive-therapy window that must start between ages 2 and 9. This guide stacks the layers in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s national ABA medical necessity guide' },
      MANDATE_ROWS.mandate,
      MANDATE_ROWS.age,
      MANDATE_ROWS.caps,
      MANDATE_ROWS.exempt,
      MANDATE_ROWS.licensure,
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Wisconsin',
        body: [
          'Aetna reviews ABA under its applied behavior analysis medical necessity guide: a DSM-5 ASD diagnosis, services "provided directly or billed by the appropriately licensed provider," functional impairment on a standardized scale from the past 12 months, a measurable treatment plan, and hours matched to severity. Typical intensities are 10–25 hours a week for comprehensive and 1–20 for focused programs, and progress is "evaluated every six months." The guide’s only state exhibit covers Maryland, so no Wisconsin-specific Aetna criteria apply, but the guide itself says state law may mandate coverage. Aetna’s behavioral health precertification list names 97151 through 97158, 0362T and 0373T. In Wisconsin the guide’s own rule matters: services must be provided or billed by "licensed behavior analysts (in states with behavior analyst licensure laws)," and Wisconsin is one of those states.',
        ],
        cites: [S.aetnaGuide, S.aetnaPrecert, S.bacbLic],
      },
      {
        h2: 'The Wisconsin mandate: what it guarantees',
        body: [WI_MANDATE_BODY, WI_PA_NOTE],
        cites: [S.s632895, S.ins336, S.ociFaq],
      },
      {
        h2: 'Licensure, credentialing and claims',
        body: [WI_LICENSURE_BODY],
        cites: [S.bacbLic, S.s440, S.s632895, S.ins336, S.s628, S.fhMaxFee],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA?',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) says members cannot be charged "more than the contracted rate," and payment follows your participation agreement and Aetna’s coding and claim-edit policies. Get the rates from your Aetna agreement or Aetna provider services. For a public benchmark, Wisconsin Medicaid’s fee schedule pays 97153 at $11.91 per 15 minutes for comprehensive treatment; commercial contracts are negotiated separately. Wisconsin’s mandate does not set rates. It requires the insurer to provide at least the 2026 floors ($74,240 intensive, $37,119 nonintensive), and OCI notes "the insurer is not required to pay more than the amount mandated by the statute, although a policy may provide more coverage."',
        ],
        cites: [S.aetnaOM, S.fhMaxFee, S.ociFaq],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured Wisconsin policy (§ 632.895(12m) applies) vs. self-funded private employer plan (plan document governs). Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date. Ins 3.36 lets the insurer ask for validated tools.' },
      { title: 'Physician’s prescription', desc: 'The mandate covers treatment "prescribed by a physician."' },
      { title: 'Prior intensive ABA history', desc: 'Intensive therapy must start before age 9 and is capped at 48 cumulative months; earlier intensive therapy from any payer counts.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3).' },
    ],
    sources: [S.aetnaGuide, S.aetnaCPB648, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.aetnaTele, S.s632895, S.ins336, S.ociFaq, S.s440, S.bacbLic, S.s628, S.s632835, S.ins340, S.erisa, S.fhMaxFee, S.fhCOB],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s guide requires supervision of unlicensed or non-certified staff "in line with practice standards." Its Network Participation Criteria require "a minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional "for each 10 hours of applied behavior analysis," with the supervisor onsite with the child at least one hour a month. BCBAs, BCaBAs and paraprofessionals must meet state requirements. In Wisconsin, Ins 3.36 adds that a qualified paraprofessional works under "the active supervision of a qualified supervising provider" with "regular, scheduled oversight," and intensive-level services need direct observation by the qualified provider at least once every two months.',
        status: 'verified',
        cites: [S.aetnaGuide, S.aetnaNPC, S.ins336],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA documents read (the medical necessity guide, CPB 0648, the precertification list).',
        status: 'unverified',
        cites: [S.aetnaGuide, S.aetnaPrecert],
        verifyVia: 'Aetna provider services, your participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap is published. Hours follow the guide’s severity assessment (typical 10–25 hours a week comprehensive, 1–20 focused; not caps), and the guide allows protocol modification and direction at 1 to 2 hours per 10 hours of treatment. Wisconsin’s mandate bars "limitations on the number of treatment visits."',
        status: 'verified',
        cites: [S.aetnaGuide, S.s632895],
      },
      noteSignature: {
        value: 'Not addressed. Aetna’s guide sets treatment-plan content but not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Your participating-provider agreement and the Aetna Behavioral Health Provider Manual section on documentation.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Aetna’s guide is setting-neutral for outpatient ABA; inpatient, residential or partial hospitalization use that level of care’s criteria. For mandated Wisconsin policies, Ins 3.36(11) requires coverage "in locations including the provider’s office, clinic or in a setting conducive to the acquisition of the target skill," including schools "when they are related to the goals of the treatment plan and do not duplicate services provided by a school." It does not require coverage while the child lives in a residential, inpatient or day treatment facility.',
        status: 'verified',
        cites: [S.aetnaGuide, S.ins336],
      },
      billAsProvider: {
        value: 'Services must be "provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists" where in scope, unless mandates, plan documents or contracts say otherwise. Wisconsin licenses behavior analysts, so the Wisconsin-licensed BCBA (or another qualified licensed provider under § 632.895(12m)) is the billing credential.',
        status: 'verified',
        cites: [S.aetnaGuide, S.s440, S.s632895],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national guide sets no age cap; its typical age ranges are descriptive.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.ins336, S.ociFaq],
        verifyVia: 'Live benefits verification on the member ID: establish fully insured Wisconsin policy vs. self-funded, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the ASD diagnosis itself, but medical necessity needs functional impairment on a standardized scale administered in the past 12 months (at least one standard deviation below the mean) or a significant risk of harm.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'A DSM-5 ASD diagnosis "obtained by an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)." For mandated policies, Ins 3.36(3) requires the diagnosis to be "made by a diagnostician skilled in testing and in the use of empirically-validated tools specific for autism spectrum disorders," and the insurer may require a second opinion at its own cost.',
        status: 'verified',
        cites: [S.aetnaGuide, S.ins336],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale. The ABA guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples). Under Ins 3.36(3)(b), an insurer may require confirmation through validated tools in each of: intelligence, parent report, language skills, adaptive behavior, and direct observation of the child.',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide, S.ins336],
      },
      referral: {
        value: 'Aetna’s national guide requires no referral; what it requires is precertification of the ABA codes through Availity or the number on the card.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.s632895],
      },
      telehealth: {
        value: 'Aetna’s Telemedicine and Direct Patient Contact Payment Policy lists the ABA codes it pays by telehealth, by line of business. On commercial plans the eligible codes are 97151, 97153, 97155, 97156 and 97157, billed with modifier GT, 95 or FR; 97152, 97154 and 97158 are checked for Medicare Advantage only. The posted policy shows a last review of June 2021, so treat the list as perishable. Aetna’s provider manual (6/26) says Aetna Behavioral Health "offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out," and providers "must act within the scope of their license and ensure that they have the proper licensure based on state requirements." For a Wisconsin child, that means a Wisconsin behavior analyst license.',
        status: 'plan-dependent',
        cites: [S.aetnaTele, S.aetnaOM, S.s440],
        verifyVia: 'Availity or the precertification line on the card: ask whether the self-insured sponsor opted out of telehealth, and which ABA codes, POS and modifier Aetna currently pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: COMMERCIAL_TURNAROUND('Aetna'),
        status: 'plan-dependent',
        cites: [S.erisa, S.ins336, S.s632835],
        verifyVia: 'At benefits verification ask whether the plan is a Wisconsin fully insured policy or self-funded, and what turnaround and reauthorization lead time Aetna expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMMERCIAL_COB('Aetna'),
        status: 'plan-dependent',
        cites: COB_CITES,
        verifyVia: 'Ask Aetna at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Wisconsin?', a: 'Yes, under its national ABA guide for ASD, with Wisconsin’s § 632.895(12m) mandate layered on for policies the state regulates. Self-funded private employer plans follow their own documents.' },
      { q: 'What does the Wisconsin autism mandate require?', a: 'Coverage of physician-prescribed autism treatment by qualified providers, with at least $74,240 a year for intensive-level services (which must start between ages 2 and 9, for up to four years) and at least $37,119 for nonintensive-level services in 2026, and no visit limits.' },
      { q: 'Does a BCBA need a Wisconsin license to treat Aetna members in Wisconsin?', a: 'For mandated coverage, yes. The mandate names behavior analysts "licensed under s. 440.312," and Aetna’s guide requires licensed behavior analysts in states with licensure laws. A BCBA licensed elsewhere should get the Wisconsin license from DSPS before treating, including by telehealth.' },
      { q: 'What does Aetna pay for ABA in Wisconsin?', a: 'Aetna publishes no ABA rates; payment follows your participation agreement. Wisconsin Medicaid’s 97153 rate ($11.91 per 15 minutes for comprehensive treatment) is the only public benchmark.' },
    ],
  },

  'cigna-wisconsin': {
    slug: 'cigna-wisconsin',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + Wisconsin’s § 632.895(12m) mandate; no PA on assessment codes; HealthPartners network in western WI.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the policy covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: after the assessment, submit the treatment plan on the Applied Behavior Analysis Prior Authorization Form; Evernorth encourages requests up to 30 days before or two weeks after the start date',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD (F84.0–F84.9 except F84.2 Rett) under DSM-5-TR; provisional or rule-out diagnoses do not count. Wisconsin’s mandate also covers only autism spectrum disorder',
      status: 'verified',
      cites: [S.en0499, S.s632895],
    },
    payer: 'Cigna / Evernorth in Wisconsin',
    state: 'WI', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Wisconsin',
    h1: 'Cigna / Evernorth ABA coverage in Wisconsin: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Wisconsin: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Wisconsin families: national policy EN0499, no PA on assessments, the HealthPartners network in western Wisconsin, Wisconsin’s § 632.895(12m) autism mandate (2026 floors, intensive start ages 2–9), the Wisconsin behavior analyst license, and what intake should verify.',
    intro: [
      'For an intake team in Wisconsin, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, Wisconsin’s autism mandate in § 632.895(12m) and Ins 3.36, and the plan’s funding type. Many Cigna members are on self-funded employer plans, which sit outside the mandate, so check funding first. In western Wisconsin there is a network wrinkle: Evernorth’s guidelines say providers there "must be contracted through HealthPartners" to be in network for Cigna members.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      MANDATE_ROWS.mandate,
      MANDATE_ROWS.age,
      MANDATE_ROWS.caps,
      MANDATE_ROWS.exempt,
      MANDATE_ROWS.licensure,
      { label: 'Fee schedule', value: 'Not public — your ABA fee schedule is Exhibit A of your Evernorth Provider Agreement; fee questions to Evernorth Provider Services, 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Wisconsin',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). Per the autism resource guide, prior authorization "is no longer required for assessment" codes 97151, 97152 and 0362T with an autism diagnosis, as long as the provider is independently licensed or a BCBA and the policy covers ABA. Treatment needs the assessment and plan on the ABA Prior Authorization Form. A full-text check of EN0499 and the resource guide found no mention of Wisconsin, so the national criteria apply, alongside the state mandate on plans it reaches.',
          'Two Wisconsin-specific contract facts sit in Evernorth’s Administrative Guidelines (September 2026). First, HealthPartners serves "Minnesota, North Dakota, and Western Wisconsin," and providers there "must be contracted through HealthPartners to be considered in network for patients with Cigna Healthcare coverage or a HealthPartners ID card." Second, the Wisconsin Regulatory Addendum (which does not apply to self-funded plans) requires a terminating provider to keep treating a member in a course of treatment for the rest of the course or 90 days, whichever is shorter, paid at the contract rate for those 90 days.',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin],
      },
      {
        h2: 'The Wisconsin mandate: what it guarantees',
        body: [WI_MANDATE_BODY, WI_PA_NOTE],
        cites: [S.s632895, S.ins336, S.ociFaq],
      },
      {
        h2: 'Licensure, credentialing and claims',
        body: [WI_LICENSURE_BODY],
        cites: [S.bacbLic, S.s440, S.s632895, S.ins336, S.s628, S.fhMaxFee],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth tells ABA providers: "For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement." Fee and contract questions go to Provider Services at 800.926.2273. Bill telehealth with modifier 95 and POS 02. Non-credentialed staff are paid only through the supervising provider’s claim. For a public benchmark, Wisconsin Medicaid pays 97153 at $11.91 per 15 minutes for comprehensive treatment; commercial contracts are negotiated separately.',
        ],
        cites: [S.ebhAdmin, S.cignaARG, S.fhMaxFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured Wisconsin policy (§ 632.895(12m) applies) vs. self-funded employer plan (plan document governs).' },
      { title: 'Network (western Wisconsin)', desc: 'In western Wisconsin, Cigna members need a HealthPartners-contracted provider to be in network.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, plus the date of the most recent diagnosis. Provisional or rule-out diagnoses don’t count.' },
      { title: 'Physician’s prescription', desc: 'The mandate covers treatment "prescribed by a physician."' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.s632895, S.ins336, S.ociFaq, S.s440, S.bacbLic, S.s628, S.s632835, S.ins340, S.erisa, S.fhMaxFee, S.fhCOB],
    deliveryRules: {
      supervision: {
        value: 'Case supervision is by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health professional with ABA training. Direct plus indirect case supervision runs at one to two hours per ten hours of direct treatment; at 10 hours a week or less, at least one to two hours a week. The supervisor’s name and credentials must be documented. For mandated Wisconsin policies, Ins 3.36 also requires "regular, scheduled oversight" of paraprofessionals and direct observation by the qualified intensive-level provider at least every two months.',
        status: 'verified',
        cites: [S.en0499, S.ins336],
      },
      concurrentBilling: {
        value: '"Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155," when the BCBA or QHP directs the technician and both are face-to-face with the patient at the same time. ABA delivered at the same time as another treatment (such as speech or occupational therapy) is not reimbursable.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499],
      },
      dailyLimits: {
        value: 'No per-day cap is published. All ABA codes bill in 15-minute units and only with 97151–97158, 0362T and 0373T. Intensity must reflect severity, goals and response to treatment. Wisconsin’s mandate bars "limitations on the number of treatment visits."',
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.s632895],
      },
      noteSignature: {
        value: 'Each service needs its own record with start and end date and time, location, focus, a description of the intervention, who was present, the service type, and the name, credential and signature of the provider who rendered it.',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'Goals and data are reported separately for each setting (home, clinic, school, community). Primarily educational or vocational services are not covered. For mandated Wisconsin policies, Ins 3.36(11) requires coverage in the office, clinic or "a setting conducive to the acquisition of the target skill," and in schools when tied to treatment-plan goals and not duplicating school services.',
        status: 'verified',
        cites: [S.en0499, S.ins336],
      },
      billAsProvider: {
        value: 'Evernorth does not credential non-licensed or non-certified staff; their services are billed under the supervising provider. On a CMS-1500 only a BCBA or other licensed provider goes in box 33; electronic claims use payer ID 62308. For Wisconsin mandate coverage, the BCBA must hold the Wisconsin license (§ 440.312).',
        status: 'verified',
        cites: [S.cignaARG, S.s632895],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; it says access to focused intervention "should not be restricted by age." Age terms come from the benefit plan and any controlling mandate.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.ins336, S.ociFaq],
        verifyVia: 'Live benefits verification, or the Evernorth Autism Care Coordinator team: establish fully insured vs. self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs the date it was most recently made, and a provisional or rule-out diagnosis doesn’t count. The clocks run on data: the standardized instrument within 60 days before treatment, baseline data within 60 days, and current data within 60 days of the request.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional licensed to practice independently whose board considers diagnosis within scope, applying DSM-5-TR criteria (EN0499). For mandated Wisconsin policies, Ins 3.36(3) requires "a diagnostician skilled in testing and in the use of empirically-validated tools specific for autism spectrum disorders."',
        status: 'verified',
        cites: [S.en0499, S.ins336],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated by EN0499, but it must be standardized, measure both DSM-5-TR domains, and be the current edition (Vineland-3, not Vineland-II). Ins 3.36(3)(b) lets the insurer require validated tools in intelligence, parent report, language, adaptive behavior and direct observation.',
        status: 'verified',
        cites: [S.en0499, S.ins336],
      },
      referral: {
        value: 'EN0499 requires no referral. Assessments 97151, 97152 and 0362T need no PA with an autism diagnosis when the provider is independently licensed or a BCBA; treatment needs the assessment and plan on the ABA PA form.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.s632895],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" per the autism resource guide, and EN0499 allows in-person, telehealth or hybrid delivery chosen on clinical factors. Evernorth bills telehealth with modifier 95 and POS 02. The clinician still needs the credential the plan requires, which under the Wisconsin mandate means a Wisconsin behavior analyst license.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ebhAdmin],
      },
      authTurnaround: {
        value: COMMERCIAL_TURNAROUND('Cigna/Evernorth') + ' Evernorth notes a late request "may result in a retrospective review and could delay the determination for up to 30 days."',
        status: 'plan-dependent',
        cites: [S.erisa, S.ins336, S.s632835, S.cignaARG],
        verifyVia: 'At benefits verification ask whether the plan is a Wisconsin fully insured policy or self-funded, and what reauthorization lead time Evernorth expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMMERCIAL_COB('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: COB_CITES,
        verifyVia: 'Ask Cigna/Evernorth at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Wisconsin?', a: 'Yes, under national policy EN0499 for ASD, with Wisconsin’s § 632.895(12m) mandate layered on for policies the state regulates. Self-funded employer plans follow their own documents.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in Wisconsin?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'Is my western Wisconsin clinic in network for Cigna?', a: 'Only if it is contracted through HealthPartners. Evernorth says providers in western Wisconsin must contract through HealthPartners to be in network for Cigna members.' },
      { q: 'What does Cigna pay for ABA in Wisconsin?', a: 'Cigna publishes no ABA rates. Your fee schedule is Exhibit A of your Evernorth Provider Agreement (Provider Services 800.926.2273). Wisconsin Medicaid’s 97153 rate ($11.91 per 15 minutes, comprehensive) is the only public benchmark.' },
    ],
  },

  'unitedhealthcare-wisconsin': {
    slug: 'unitedhealthcare-wisconsin',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + Wisconsin’s § 632.895(12m) mandate; no Wisconsin state supplement; Medicaid ABA bypasses the HMO.',
    assessmentPA: {
      value: 'Required by Optum: "Prior authorization is required for ABA (unless otherwise specified or mandated by contract or law)." For mandated Wisconsin policies, OCI notes PA is generally not required unless the plan requires it for similar outpatient services',
      status: 'plan-dependent',
      cites: [S.optumSCC, S.ociFaq],
      verifyVia: 'Optum Provider Express or the behavioral health number on the card: confirm whether this Wisconsin plan requires authorization of the assessment.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Required under the ABA Supplemental Clinical Criteria; continued-service review looks at use below 80% of authorized hours. The review interval is set per authorization',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express: ask what review interval will be set on this member’s ABA treatment authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5-TR ASD diagnosis (or other diagnosis required by governing law) confirmed by the diagnosing clinician with at least one validated tool. Wisconsin’s mandate covers autism spectrum disorder',
      status: 'verified',
      cites: [S.optumSCC, S.s632895],
    },
    payer: 'UnitedHealthcare / Optum in Wisconsin',
    state: 'WI', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Wisconsin',
    h1: 'UnitedHealthcare / Optum ABA coverage in Wisconsin: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Wisconsin: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Wisconsin families: Optum’s ABA criteria, Wisconsin’s § 632.895(12m) autism mandate (2026 floors, intensive start ages 2–9), the Wisconsin behavior analyst license, telehealth limits, and why BadgerCare Plus ABA never goes through the HMO.',
    intro: [
      'For an intake team in Wisconsin, a UnitedHealthcare commercial card means three layers: Optum Behavioral Health’s national ABA criteria, Wisconsin’s autism mandate in § 632.895(12m) and Ins 3.36, and the plan’s funding type. If the child’s card is a BadgerCare Plus or Medicaid SSI HMO card instead, ABA does not go through the health plan at all: Wisconsin carves behavioral treatment out of every Medicaid HMO, and ForwardHealth authorizes and pays for it fee-for-service.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      MANDATE_ROWS.mandate,
      MANDATE_ROWS.age,
      MANDATE_ROWS.caps,
      MANDATE_ROWS.exempt,
      MANDATE_ROWS.licensure,
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Wisconsin',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026). Prior authorization is required "unless otherwise specified or mandated by contract or law," and continued-service review looks hard at use below 80% of authorized hours. The criteria list the states whose mandated criteria apply alongside them (California, Connecticut, Florida, Indiana, Kentucky, Maryland, Massachusetts, New Jersey, New York, Ohio, Pennsylvania, Virginia and some Medicaid programs). Wisconsin is not on that list, and the ABA State Mandates supplement does not mention it, so Optum applies its standard criteria. Wisconsin law still controls on plans the mandate reaches.',
          'Medicaid is a separate question. ForwardHealth’s handbook says behavioral treatment is "carved out of MCOs, which include BadgerCare Plus and Medicaid SSI HMOs," with PA requests and claims "processed by ForwardHealth instead of the member’s HMO." So for any Wisconsin Medicaid HMO member, including one enrolled with a UnitedHealthcare plan, send the ABA request to ForwardHealth.',
        ],
        cites: [S.optumSCC, S.optumSM, S.fhCovered, S.fhMC],
      },
      {
        h2: 'The Wisconsin mandate: what it guarantees',
        body: [WI_MANDATE_BODY, WI_PA_NOTE],
        cites: [S.s632895, S.ins336, S.ociFaq],
      },
      {
        h2: 'Licensure, credentialing and claims',
        body: [WI_LICENSURE_BODY],
        cites: [S.bacbLic, S.s440, S.s632895, S.ins336, S.s628, S.fhMaxFee],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA?',
        body: [
          'UnitedHealthcare publishes no ABA rate table; its behavioral health network, Optum, pays from the contract. Optum’s National Network Manual (effective Sept. 1, 2026) defines the "Fee Maximum" as the most a participating provider may be paid for a service, adding that "Reimbursement to clinicians is based upon licensure rather than degree." Optum’s commercial ABA Reimbursement Policy (2022RP501A) makes the credential level part of every claim line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a doctoral-level provider. Indirect work has no separate code and is bundled into direct-service codes. The policy notes state requirements "may supplement, modify or supersede" it. Ask Optum network management for your rate sheet. For a public benchmark, Wisconsin Medicaid pays 97153 at $11.91 per 15 minutes for comprehensive treatment.',
        ],
        cites: [S.optumNNM, S.optumReimb, S.fhMaxFee],
      },
    ],
    collect: [
      { title: 'Which card', desc: 'UnitedHealthcare commercial vs. a BadgerCare Plus or SSI HMO card. Medicaid ABA goes to ForwardHealth, not the HMO.' },
      { title: 'Plan funding type', desc: 'Fully insured Wisconsin policy (§ 632.895(12m) applies) vs. self-funded employer plan (plan document governs).' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD and severity level, confirmed with a validated tool (ADI-R, ADOS-2 and others).' },
      { title: 'Physician’s prescription', desc: 'The mandate covers treatment "prescribed by a physician."' },
      { title: 'Prior intensive ABA history', desc: 'Intensive therapy must start before age 9 and is capped at 48 cumulative months under Ins 3.36.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumReimb, S.optumNNM, S.fhCovered, S.fhMC, S.s632895, S.ins336, S.ociFaq, S.s440, S.bacbLic, S.s628, S.s632835, S.ins340, S.erisa, S.fhMaxFee, S.fhCOB],
    deliveryRules: {
      supervision: {
        value: 'Consistent with CASP standards, "direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week." Optum does not recommend parents serving as their own child’s RBT. For mandated Wisconsin policies, Ins 3.36 requires direct observation by the qualified intensive-level provider at least every two months, and does not require insurers to pay parents for treating their own children.',
        status: 'verified',
        cites: [S.optumSCC, S.ins336],
      },
      concurrentBilling: {
        value: 'Not addressed. The SCC define direct case supervision as happening during direct treatment but do not state the billing consequence.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum Provider Express National Network Manual and your participating-provider agreement, or a written coding determination from Optum.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap. Requested hours must be justified by documented clinical need, and use below 80% of authorized hours triggers review at continued service. Wisconsin’s mandate bars "limitations on the number of treatment visits."',
        status: 'verified',
        cites: [S.optumSCC, S.s632895],
      },
      noteSignature: {
        value: 'Not addressed. The SCC set what must be documented for coverage, not who signs a session note or when.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual (documentation standards) and your participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'ABA is provided at the least restrictive appropriate level. Optum excludes services that are not ABA, such as 1:1 aides during classroom instruction, and services covered under IDEA, but covers school coordination. For mandated Wisconsin policies, Ins 3.36(11) covers office, clinic, a setting conducive to the target skill, and schools when tied to plan goals and not duplicating school services.',
        status: 'verified',
        cites: [S.optumSCC, S.ins336],
      },
      billAsProvider: {
        value: 'Optum’s commercial reimbursement policy ties each line to the rendering credential: HM (RBT), HN (BCaBA), HO (master’s-level BCBA or licensed clinician), HP (doctoral). A credentialed ABA provider is a BCBA or licensed clinician; a BCaBA or non-licensed staff member works under that provider’s supervision. Under the Wisconsin mandate the BCBA must hold the Wisconsin license.',
        status: 'verified',
        cites: [S.optumReimb, S.optumSCC, S.s632895],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion; the member’s benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.ins336, S.ociFaq],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish fully insured vs. self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with severity level using a validated tool. Progress is reassessed over authorization periods, and use below 80% of authorized hours triggers review.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'A state-licensed physician, psychologist, or other state-licensed clinician qualified to diagnose under DSM-5-TR (SCC). For mandated Wisconsin policies, Ins 3.36(3) requires a diagnostician skilled with empirically validated autism tools, and lets the insurer require a second opinion at its cost.',
        status: 'verified',
        cites: [S.optumSCC, S.ins336],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool, from a non-exhaustive three-tier list: screens (M-CHAT and others), second-level screens (CARS/CARS-2, RITA-T, STAT), and formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO). Ins 3.36(3)(b) lets a Wisconsin insurer require tools in intelligence, parent report, language, adaptive behavior and direct observation.',
        status: 'verified',
        cites: [S.optumSCC, S.ins336],
      },
      referral: {
        value: 'Optum requires no separate physician referral, only prior authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.s632895],
      },
      telehealth: {
        value: 'Three codes. Optum’s Telehealth Billing guide (updated September 2025) says for commercial plans: "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157," which cover virtual supervision of technicians and family training. So the 97151 assessment and technician 97153 are not on Optum’s telehealth list. The SCC add that telehealth is "not intended to supplant" in-person service. The clinician must also hold the credential the plan requires, which under the Wisconsin mandate means a Wisconsin behavior analyst license.',
        status: 'verified',
        cites: [S.optumTele, S.optumSCC, S.s632895],
      },
      authTurnaround: {
        value: COMMERCIAL_TURNAROUND('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.erisa, S.ins336, S.s632835],
        verifyVia: 'At benefits verification ask whether the plan is a Wisconsin fully insured policy or self-funded, and what reauthorization lead time Optum expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMMERCIAL_COB('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: COB_CITES,
        verifyVia: 'Ask Optum at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Wisconsin?', a: 'Yes, under Optum’s national ABA criteria for ASD, with Wisconsin’s § 632.895(12m) mandate layered on for policies the state regulates.' },
      { q: 'Does Optum have Wisconsin-specific ABA criteria?', a: 'No. Wisconsin is not among the states whose mandated criteria Optum applies alongside its SCC, so the standard criteria apply, subject to Wisconsin law.' },
      { q: 'My client has UnitedHealthcare through BadgerCare Plus. Who authorizes ABA?', a: 'ForwardHealth, not the health plan. Wisconsin carves behavioral treatment out of all BadgerCare Plus and Medicaid SSI HMOs, and PA requests and claims go to ForwardHealth fee-for-service.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in Wisconsin?', a: 'Optum’s commercial telehealth guide allows only 97155, 97156 and 97157 by telehealth. The 97151 assessment and 97153 are not on that list.' },
    ],
  },

  'anthem-bcbs-wisconsin': {
    slug: 'anthem-bcbs-wisconsin',
    family: 'anthem',
    cardDesc: 'Wisconsin’s Blue plan: a Wisconsin-specific ABA resource guide, weekly-unit billing since 1/1/2026, and the autism-treatment row on the precert list.',
    assessmentPA: {
      value: 'Plan-dependent. Anthem’s IN/KY/MO/OH/WI precertification list (updated 1/1/2026) carries a "Treatment for autism spectrum disorder — Anthem" row, and ABA for CDHP products, but its "WI Blues products" behavioral health bullet does not name ABA. Anthem’s 2026 weekly-unit notice lists 97151 among codes billed against prior-approved weekly units',
      status: 'plan-dependent',
      cites: [S.anthemPA, S.anthemWeekly],
      verifyVia: 'The preapproval number on the back of the member’s card or Availity: ask whether this Wisconsin product requires preapproval for 97151/97152.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Yes in practice: Anthem’s Wisconsin notice says ABA claims are paid "up to the weekly medically necessary limit as approved by prior approval," and the precertification list carries a row for autism spectrum disorder treatment with Anthem as the reviewer; National Accounts groups may opt out',
      status: 'plan-dependent',
      cites: [S.anthemWeekly, S.anthemPA, S.anthemANA],
      verifyVia: 'Anthem preapproval number on the member’s card: confirm the product’s ABA preapproval rule (National Accounts groups may opt out of clinical review).',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes for the mandate (autism spectrum disorder is the covered condition under § 632.895(12m), with a "primary verified diagnosis" under Ins 3.36); Anthem’s own clinical criteria are not published in the Wisconsin documents read',
      status: 'plan-dependent',
      cites: [S.s632895, S.ins336, S.anthemRGwi],
      verifyVia: 'Anthem Behavioral Health via the number on the card: ask which clinical guideline applies and what diagnostic documentation it requires.',
      blocker: 'licensed',
    },
    payer: 'Anthem Blue Cross and Blue Shield Wisconsin',
    state: 'WI', kind: 'commercial',
    pill: 'Payer Guide · Anthem BCBS · Wisconsin',
    h1: 'Anthem BCBS Wisconsin ABA coverage: the intake guide.',
    metaTitle: 'Anthem BCBS Wisconsin ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Anthem Blue Cross and Blue Shield covers ABA in Wisconsin: the Wisconsin ABA provider resource guide, weekly approved units since January 2026, the precertification list, Wisconsin’s § 632.895(12m) autism mandate (2026 floors, intensive start ages 2–9), and the Wisconsin behavior analyst license.',
    intro: [
      'In Wisconsin, Anthem Blue Cross and Blue Shield is the trade name of Blue Cross Blue Shield of Wisconsin (PPO and indemnity), Compcare Health Services Insurance Corporation (HMO and POS) and Wisconsin Collaborative Insurance Company (Well Priority HMO and POS). Unlike most states, Anthem publishes a Wisconsin-only ABA Provider Resource Guide, which ties provider qualifications to Wisconsin’s mandate and Ins 3.36. Since January 1, 2026, Anthem pays ABA against weekly approved units.',
      'Under both sits Wisconsin’s autism mandate for state-regulated policies. Establish funding type on every benefits check: self-funded private employer plans that Anthem administers answer to their plan documents and ERISA, not § 632.895(12m).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, on state-regulated policies under the Wisconsin mandate; self-funded plans per plan document' },
      { label: 'Billing unit', value: 'Weekly approved units since 1/1/2026; units over the weekly limit are adjusted off' },
      MANDATE_ROWS.mandate,
      MANDATE_ROWS.age,
      MANDATE_ROWS.caps,
      MANDATE_ROWS.exempt,
      MANDATE_ROWS.licensure,
      { label: 'Fee schedule', value: 'Not public — rates are in your Anthem provider contract' },
    ],
    sections: [
      {
        h2: 'Preapproval and weekly units',
        body: [
          'Anthem’s commercial precertification list for Indiana, Kentucky, Missouri, Ohio and Wisconsin (updated January 1, 2026) handles behavioral health by state. The "WI Blues products" bullet lists inpatient admissions, intensive outpatient, partial hospitalization, residential care, TMS and intensive in-home behavioral health services. Unlike the Ohio, Indiana and Kentucky bullet, it does not name applied behavior analysis. The same list carries a general row, "Treatment for autism spectrum disorder — Anthem," and lists ABA under CDHP products. National Accounts groups follow a separate standard list, where ABA precertification "is recommended and applies unless the group specifically opts out of clinical review for this benefit."',
          'Anthem told Wisconsin providers that from January 1, 2026, "reimbursement for Applied Behavioral Analysis (ABA) services will be based on weekly approved units rather than total authorized units." Claims "should reflect the units rendered within each week, up to the weekly medically necessary limit as approved by prior approval," and units over the weekly limit "will be considered ineligible for reimbursement." The notice lists 97151, 97152, 0362T, 97153–97158 and 0373T. Plan schedules around the weekly number, not the authorization total.',
        ],
        cites: [S.anthemPA, S.anthemANA, S.anthemWeekly],
      },
      {
        h2: 'The Wisconsin ABA resource guide',
        body: [
          'Anthem’s Wisconsin ABA Provider Resource Guide (June 2025) lists approved providers as psychiatrists, physicians, social workers licensed or certified to practice psychotherapy, licensed behavior analysts, speech-language pathologists, occupational therapists, professionals under a certified outpatient mental health clinic, and paraprofessionals supervised by a qualified provider. It adds that providers "must also meet applicable training requirements, as specified in Section 3.36 of the Wisconsin Administrative Code." It allows 97153 alongside 97155 only "if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician." Technician services must show the supervising BCBA or QHP in box 31. It lists credential modifiers HM, HN and HO, requires start and stop times and a signature within 30 days, and expects the treatment plan to be reviewed at least every six months.',
        ],
        cites: [S.anthemRGwi],
      },
      {
        h2: 'The Wisconsin mandate: what it guarantees',
        body: [WI_MANDATE_BODY, WI_PA_NOTE],
        cites: [S.s632895, S.ins336, S.ociFaq],
      },
      {
        h2: 'Licensure, credentialing and claims',
        body: [WI_LICENSURE_BODY],
        cites: [S.bacbLic, S.s440, S.s632895, S.ins336, S.s628, S.fhMaxFee],
      },
    ],
    collect: [
      { title: 'Plan funding type and entity', desc: 'BCBSWI PPO, Compcare HMO/POS or WCIC Well Priority, and fully insured (§ 632.895(12m) applies) vs. self-funded or National Accounts.' },
      { title: 'Weekly approved units', desc: 'Anthem pays against weekly units from the approval; schedule to the weekly number.' },
      { title: 'Diagnosis report', desc: 'ASD diagnosis, diagnosing clinician and date; Ins 3.36 lets the insurer ask for validated tools and a second opinion.' },
      { title: 'Physician’s prescription', desc: 'The mandate covers treatment "prescribed by a physician."' },
      { title: 'Other coverage', desc: 'Second parent’s plan (birthday rule), Wisconsin Medicaid, TRICARE or CHAMPVA.' },
    ],
    sources: [S.anthemPA, S.anthemANA, S.anthemRGwi, S.anthemWeekly, S.s632895, S.ins336, S.ociFaq, S.s440, S.bacbLic, S.s628, S.s632835, S.ins340, S.erisa, S.fhMaxFee, S.fhCOB],
    deliveryRules: {
      supervision: {
        value: 'Anthem’s Wisconsin guide publishes no numeric ratio. It recognizes "paraprofessionals practicing under the direction and supervision of a qualified provider," and allows 97153 alongside 97155 only when both are face-to-face and the QHP is directing the technician. Under Ins 3.36, which the guide incorporates, a qualified paraprofessional receives "regular, scheduled oversight by a qualified supervising provider" (a supervisor with at least 4,160 hours of supervisory experience), and intensive-level services need direct observation by the qualified provider at least once every two months.',
        status: 'verified',
        cites: [S.anthemRGwi, S.ins336],
      },
      concurrentBilling: {
        value: '"A physician or other QHP billing for 97155 can only add code 97153 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician." Supervised services billed with a QHP procedure fall under Anthem’s Incident To reimbursement policy.',
        status: 'verified',
        cites: [S.anthemRGwi],
      },
      dailyLimits: {
        value: 'No Anthem daily cap is published, but since January 1, 2026 claims are limited to "the weekly medically necessary limit as approved by prior approval"; units over it are ineligible. "ABA codes may have associated MUE limits," and Anthem applies NCCI edits. Wisconsin’s mandate bars limits on the number of treatment visits.',
        status: 'verified',
        cites: [S.anthemWeekly, S.anthemRGwi, S.s632895],
      },
      noteSignature: {
        value: 'Each entry must identify its author (handwritten signature, unique electronic identifier or initials, with credentials). Entries are expected "at the time of service, or shortly thereafter and should not exceed 30 days," with a "Signature date within 30 days of the date of service." Start and stop times are required for timed codes.',
        status: 'verified',
        cites: [S.anthemRGwi],
      },
      placeOfService: {
        value: 'POS codes Anthem lists for ABA in Wisconsin: 12 home, 11 office/clinic, 99 community, 03 school, 10 telehealth in the home, 02 telehealth elsewhere, all "Subject to member’s coverage and reviews by the plan." Ins 3.36(11) requires mandated policies to cover schools when services relate to treatment goals and do not duplicate school services.',
        status: 'verified',
        cites: [S.anthemRGwi, S.ins336],
      },
      billAsProvider: {
        value: '"ABA therapy performed by therapy assistants/behavioral technicians/paraprofessionals must show the supervising BCBA or other QHP in box 31 of the CMS claim form." The guide lists credential modifiers HM (less than bachelor’s), HN (bachelor’s) and HO (master’s).',
        status: 'verified',
        cites: [S.anthemRGwi],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Anthem publishes no ABA age limit in its Wisconsin documents.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.anthemRGwi, S.ins336, S.ociFaq],
        verifyVia: 'Live benefits verification on the member ID: establish fully insured vs. self-funded, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not published in Anthem’s Wisconsin documents; Anthem’s clinical review criteria are not public.',
        status: 'unverified',
        cites: [S.anthemRGwi, S.anthemPA],
        verifyVia: 'Anthem Behavioral Health via the number on the card: ask what diagnostic documentation and dates its review expects.',
        blocker: 'licensed',
      },
      diagnosingProviders: {
        value: 'Anthem’s Wisconsin documents do not name diagnosing providers. For mandated policies, Ins 3.36(3) requires the diagnosis to come from "a diagnostician skilled in testing and in the use of empirically-validated tools specific for autism spectrum disorders," and the insurer may require a second opinion at its own cost.',
        status: 'plan-dependent',
        cites: [S.anthemRGwi, S.ins336],
        verifyVia: 'Anthem Behavioral Health via the number on the card, after confirming whether the plan is subject to the Wisconsin mandate.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'The guide stresses "standardized assessments and current clinical information" for tracking progress but names no diagnostic instrument. For mandated policies, Ins 3.36(3)(b) lets the insurer require validated tools in intelligence, parent report, language skills, adaptive behavior and direct observation.',
        status: 'plan-dependent',
        cites: [S.anthemRGwi, S.ins336],
        verifyVia: 'Anthem Behavioral Health via the number on the card.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Anthem’s Wisconsin documents require prior approval for the weekly units, not a physician referral.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.anthemWeekly, S.s632895],
      },
      telehealth: {
        value: 'Anthem lists POS 10 (telehealth in the member’s home) and 02 (elsewhere) for ABA, subject to coverage, and refers to its Virtual Visits reimbursement policy, where "Allowed codes may vary." The clinician must hold the credential the plan requires, which under the Wisconsin mandate means a Wisconsin behavior analyst license.',
        status: 'plan-dependent',
        cites: [S.anthemRGwi, S.s632895],
        verifyVia: 'Anthem’s Virtual Visits reimbursement policy and the member’s benefits: confirm which ABA codes are allowed by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: COMMERCIAL_TURNAROUND('Anthem'),
        status: 'plan-dependent',
        cites: [S.erisa, S.ins336, S.s632835],
        verifyVia: 'At benefits verification ask whether the plan is a Wisconsin fully insured policy or self-funded, and what reauthorization lead time Anthem expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMMERCIAL_COB('Anthem'),
        status: 'plan-dependent',
        cites: COB_CITES,
        verifyVia: 'Ask Anthem at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Anthem require prior authorization for ABA in Wisconsin?', a: 'Plan by plan. Anthem pays ABA against weekly units "as approved by prior approval," and its precertification list carries an autism treatment row, but the Wisconsin behavioral health bullet does not name ABA and National Accounts groups can opt out. Call the preapproval number on the card.' },
      { q: 'What changed for Anthem ABA claims in Wisconsin in 2026?', a: 'From January 1, 2026, Anthem pays ABA against weekly approved units rather than the total authorization. Units over the weekly limit are ineligible for payment.' },
      { q: 'Can a BCBA and RBT both bill for the same time with Anthem in Wisconsin?', a: 'Yes, 97155 with 97153, but only when both are face-to-face with the patient and the BCBA is directing the technician.' },
      { q: 'Does Wisconsin cap ABA benefits?', a: 'No. Wisconsin sets minimum floors: for 2026, at least $74,240 a year for intensive-level services and $37,119 for nonintensive-level services. The insurer need not pay more than that unless the policy does.' },
    ],
  },
};

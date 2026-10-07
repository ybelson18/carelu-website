import type { PayerConfig, PayerSource } from './types.js';

/* South Dakota — researched October 2026 from primary sources only.
   dss.sd.gov manuals download as real PDFs with a browser user agent. The SD Medicaid
   ABA fee schedule is a public Power BI report (no PDF); the rates below were read from
   that report’s own public query endpoint. Statutes were read through sdlegislature.gov’s
   statute API (same text as the /Statutes pages cited). www.wellmark.com fails the TLS
   handshake to curl and to the r.jina.ai proxy; only its medical-policy index page was
   readable (via r.jina.ai), so Wellmark’s authorization table and provider guide are
   recorded as document requests rather than guessed. */

const S: Record<string, PayerSource> = {
  abaManual: { title: 'South Dakota Medicaid Billing and Policy Manual — Applied Behavior Analysis (updated December 2025)', url: 'https://dss.sd.gov/docs/medicaid/providers/billingmanuals/Professional/Applied_Behavioral_Analysis.pdf' },
  paManual: { title: 'South Dakota Medicaid Billing and Policy Manual — Prior Authorization Requests (updated June 2026)', url: 'https://dss.sd.gov/docs/medicaid/providers/billingmanuals/General/Prior_Authorizations.pdf' },
  teleManual: { title: 'South Dakota Medicaid Billing and Policy Manual — Telemedicine Services (updated February 2026)', url: 'https://dss.sd.gov/docs/medicaid/providers/billingmanuals/Professional/Telemedicine.pdf' },
  claimManual: { title: 'South Dakota Medicaid Billing and Policy Manual — General Claim Guidance (updated July 2026)', url: 'https://dss.sd.gov/docs/medicaid/providers/billingmanuals/General/General_Claim_Guidance.pdf' },
  docManual: { title: 'South Dakota Medicaid Billing and Policy Manual — Documentation and Record Keeping (updated November 2023)', url: 'https://dss.sd.gov/docs/medicaid/providers/billingmanuals/General/Documentation_and_Records.pdf' },
  evvManual: { title: 'South Dakota Medicaid Billing and Policy Manual — Electronic Visit Verification (updated February 2024)', url: 'https://dss.sd.gov/docs/medicaid/providers/billingmanuals/General/Electronic_Visit_Verification.pdf' },
  oosManual: { title: 'South Dakota Medicaid Billing and Policy Manual — Out-of-State Providers (updated January 2024)', url: 'https://dss.sd.gov/docs/medicaid/providers/billingmanuals/General/Out-of-State_Providers.pdf' },
  referralManual: { title: 'South Dakota Medicaid Billing and Policy Manual — Referrals (updated June 2026)', url: 'https://dss.sd.gov/docs/medicaid/providers/billingmanuals/General/Referrals.pdf' },
  pcpManual: { title: 'South Dakota Medicaid Billing and Policy Manual — Primary Care Provider Program (updated April 2025)', url: 'https://dss.sd.gov/docs/medicaid/providers/billingmanuals/Care_Management/Primary_Care_Provider_Program.pdf' },
  reconManual: { title: 'South Dakota Medicaid Billing and Policy Manual — Reconsideration Reviews, Coverage Requests, and Fair Hearings (updated February 2025)', url: 'https://dss.sd.gov/docs/medicaid/providers/billingmanuals/Provider_Basics/Reconsideration_Reviews.pdf' },
  feeABA: { title: 'South Dakota Medicaid — Applied Behavior Analysis Fee Schedule, Current SFY (Power BI report; rates updated 7/1/2026)', url: 'https://app.powerbigov.us/view?r=eyJrIjoiZTAyMjdhZWItZmQzMi00Nzk3LTk0MTktMGFhMmVkYWU1YWM4IiwidCI6IjcwYWY1NDdjLTY5YWItNDE2ZC1iNGE2LTU0M2I1Y2U1MmI5OSJ9' },
  feePage: { title: 'South Dakota Medicaid — DSS fee schedules (index; ABA listed as a Power BI report)', url: 'https://dss.sd.gov/medicaid/providers/feeschedules/dss/' },
  sdclAba: { title: 'SDCL 58-17-154 to 58-17-162 — Coverage for applied behavior analysis for autism spectrum disorders (SL 2015, ch 250)', url: 'https://sdlegislature.gov/Statutes/58-17' },
  sdclTele: { title: 'SDCL 58-17-167 to 58-17-170 — Coverage for health care services provided through telehealth (SL 2019, ch 211)', url: 'https://sdlegislature.gov/Statutes/58-17-168' },
  sdclCred: { title: 'SDCL 58-17-149 to 58-17-152 — Credentialing timelines and retrospective payment of clean claims (SL 2014, ch 236)', url: 'https://sdlegislature.gov/Statutes/58-17-150' },
  sdclPrompt: { title: 'SDCL 58-12-19 to 58-12-21 — Clean claims: 30 days electronic, 45 days paper', url: 'https://sdlegislature.gov/Statutes/58-12-20' },
  sdcl17H: { title: 'SDCL 58-17H — Utilization Review and Benefit Determinations (58-17H-28, -29, -30.1, -43, -46)', url: 'https://sdlegislature.gov/Statutes/58-17H' },
  sdcl17I: { title: 'SDCL 58-17I — Health carrier grievance procedures (58-17I-7, -9)', url: 'https://sdlegislature.gov/Statutes/58-17I' },
  sdcl18A: { title: 'SDCL 58-18A-70 — Coordination of benefits: plan covering a dependent child (birthday rule)', url: 'https://sdlegislature.gov/Statutes/58-18A-70' },
  sdcl3638: { title: 'SDCL 36-38 — Behavior Analysts (licensure by the Board of Social Work Examiners, SL 2016, ch 199)', url: 'https://sdlegislature.gov/Statutes/36-38' },
  sdcl3452: { title: 'SDCL 34-52 — Telehealth utilization by health care professionals (34-52-2 licensure)', url: 'https://sdlegislature.gov/Statutes/34-52' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (South Dakota, 2016)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  aetnaCPB: { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; state exhibit: Maryland only)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (Network Participation Criteria, 8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  aetnaTele: { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table: Commercial vs. Medicare columns; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026; incl. South Dakota Regulatory Addendum)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA; South Dakota not listed)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumNNM: { title: 'Optum National Network Manual (BH02330, effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  wmMP: { title: 'Wellmark — Medical policies for providers (A–Z index, page published Sept. 30, 2026; no ABA or autism policy listed)', url: 'https://www.wellmark.com/provider/medical-policies-authorizations/medical-policies' },
  wmAuth: { title: 'Wellmark — Authorization Table (code-level pre-service review lookup)', url: 'https://www.wellmark.com/authtable/' },
  wmGuide: { title: 'Wellmark — Provider guide (Behavioral Health section)', url: 'https://www.wellmark.com/provider/resources/wellmark-provider-guide' },
};

/* ---- Shared South Dakota commercial layer (same facts on every commercial guide) ---- */
const SD_MANDATE_BODY =
  'South Dakota’s autism mandate is SDCL 58-17-154 to 58-17-162 (SL 2015, ch 250), in force for plan years beginning on or after January 1, 2016. Every policy it reaches "shall provide coverage for applied behavior analysis for the treatment of autism spectrum disorders" (58-17-157). "Treatment" means evidence-based care "prescribed or ordered for a person diagnosed with an autism spectrum disorder by a licensed physician or psychologist" (58-17-154(4)). The carrier may use "pre-authorization, prior approval, and other care management requirements," visit limits, deductibles, copayments and coinsurance that apply to other medical services, and it may cap the benefit, but the annual maximum "may not be less than" $36,000 through age 6, $25,000 from age 7 through 13, and $12,500 from age 14 through 18 (58-17-158). The statute sets no benefit floor for anyone 19 or older. Anyone who performs or supervises ABA must be a physician or psychologist licensed in South Dakota with documented ABA training, or a licensed behavior analyst (58-17-159). The carrier may review the treatment "not more than once every three months" unless the insurer and the treating physician or psychologist agree to more frequent review, and the carrier pays for that review (58-17-160). School IEP and family-service-plan obligations are untouched (58-17-161). The reach is narrower than in most states. The mandate covers individual and group policies from health carriers and self-funded non-federal governmental plans, but it does not apply to the State of South Dakota employee plan (58-17-156), to self-funded ERISA plans, or to "nongrandfathered plans in the individual and small group markets that are required to include essential health benefits" under the ACA (58-17-155). In practice it binds fully insured large-group and grandfathered plans and local-government self-funded plans. For an ACA individual or small-group plan, check the plan’s own benefit documents.';

const SD_LICENSURE_BODY =
  'South Dakota licenses behavior analysts. Under SDCL 36-38 (SL 2016, ch 199) the license is issued by the Board of Social Work Examiners (36-38-1(3)), advised by a three-member Applied Behavior Analyst Advisory Committee. An applicant needs a master’s or doctoral degree and current BCBA certification (36-38-7). No one may "engage in the practice of, or attempt to practice applied behavior analysis" without the license or an exemption (36-38-6), and practicing without one is a Class 2 misdemeanor (36-38-19). BCaBAs and technicians are exempt if they work "under the extended authority and direction of a behavior analyst" and are supervised under BACB requirements, but each must pass a fingerprint background check, which the supervising analyst pays for (36-38-5(6), 36-38-25). Credentialing is on a state clock. A carrier must send an application within 10 business days of a request (58-17-151). It must flag an incomplete application within 30 days and decide a complete one within 90 days, longer only for a "special review." It must then pay clean claims for covered services delivered during the credentialing period, and its timely-filing clock starts only when you are notified that you are credentialed (58-17-150). Do not submit claims during that period (58-17-150(3)). The rule does not apply to Medicaid (58-17-152). Commercial ABA rates are negotiated and unpublished. The public benchmark is the South Dakota Medicaid ABA fee schedule (97153 $21.73 and 97155 $39.00 per 15-minute unit, effective July 1, 2026).';

const SD_OUT_OF_STATE_BODY =
  'Can a BCBA licensed in another state treat a South Dakota child? Generally not without a South Dakota license. SDCL 36-38-6 requires the state license to practice ABA here. The only exemption for out-of-state analysts is narrow: a provider "who is not a resident of this state, and who has established an office in this state," authorized in their home state, may practice for no more than an aggregate of 20 days a year, and must report to the board once past 20 consecutive days (36-38-5(2)). Telehealth does not get around this. SDCL 34-52-2 says any health care professional "treating a patient in the state through telehealth" must be "fully licensed to practice in the state" or employed by one of the listed facility types (a licensed health care facility, accredited prevention or treatment facility, community support provider, nonprofit mental health center, or licensed child welfare agency). The carriers say the same thing: Aetna tells providers to "ensure that they have the proper licensure based on state requirements," and Aetna’s ABA guide requires billing by "licensed behavior analysts (in states with behavior analyst licensure laws)." For a remote BCBA, plan on a South Dakota license before the first session.';

const MANDATE_REFERRAL_TAIL =
  ' For a plan subject to the South Dakota mandate, treatment is care "prescribed or ordered" for a child diagnosed with autism "by a licensed physician or psychologist" (SDCL 58-17-154(4)), so keep that order on file. Self-funded ERISA and ACA individual or small-group plans sit outside the statute.';

const MANDATE_AGE_TAIL =
  ' For plans subject to the South Dakota mandate, the coverage duty in SDCL 58-17-157 names no age limit, but the minimum annual benefits in 58-17-158 run only through age 18: $36,000 through age 6, $25,000 from 7 to 13, and $12,500 from 14 to 18. Self-funded ERISA plans, the State employee plan and ACA individual or small-group plans are outside the statute, so the plan type decides whether those floors apply.';

const SD_AUTH_TURNAROUND =
  'Depends on how the plan is funded. Insured South Dakota plans fall under SDCL 58-17H. A prospective (pre-service) decision is due "within a reasonable period of time appropriate to the covered person’s medical condition, but in no event later than fifteen days after the date the health carrier receives the request," with one 15-day extension for matters beyond the carrier’s control. If the extension is for missing information, the family gets "at least forty-five days" to supply it, and the clock stops in the meantime (58-17H-28, -31). An urgent request is decided within 24 hours of receipt (58-17H-43). A request to extend an ongoing course, made at least 24 hours before it ends, is also decided within 24 hours (58-17H-46). Cutting or ending an authorized course early counts as an adverse determination, and the service continues until the internal review is decided (58-17H-29). An appeal (first-level grievance) may be filed within 180 days of the denial notice (58-17I-7) and is decided within 30 days for a pre-service request (58-17I-9). Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," with one 15-day extension.';

const SD_COB =
  'For a child on two group plans, South Dakota uses the birthday rule. When the parents are married or living together, "the plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (SDCL 58-18A-70); a court decree controls for separated parents. That binds plans regulated by the state; a self-funded plan sets its own order. If the child also has South Dakota Medicaid, the commercial plan pays first, because Medicaid is generally the payer of last resort (42 CFR 433.139). South Dakota Medicaid also processes the claim "even if the commercial payer denies the claim (i.e., out of network)." A claim filed with the primary insurer’s EOB is timely if it reaches Medicaid within 6 months of the primary’s payment or denial. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)), and CHAMPVA is the last payer (38 CFR 17.270).';

const SD_TELE_STATUTE =
  ' For an insured South Dakota plan, SDCL 58-17-168 says no health insurer "may exclude a service for coverage solely because the service is provided through telehealth," and 58-17-169 bars discrimination between in-person and telehealth coverage for services "appropriate to be provided through telehealth" (policies issued or renewed from January 1, 2020). South Dakota’s insurance definition of telehealth is "HIPAA-compliant interactive audio-video" and excludes audio-only (58-17-167(4)). The insurer may still set criteria for a service it does not already pay others to deliver by telehealth, as long as they are not "unduly burdensome or unreasonable." Separately, the clinician must hold a South Dakota license (SDCL 34-52-2).';

export const southDakotaPayers: Record<string, PayerConfig> = {
  'south-dakota-medicaid': {
    slug: 'south-dakota-medicaid',
    cardDesc: 'ABA is an EPSDT benefit (20 and under), run by DSS itself with no MCOs: 6-month prior auth, a 12-month diagnosis rule, and published rates.',
    assessmentPA: {
      value: 'Yes. "Services must be prior authorized by South Dakota Medicaid prior to being provided," and the covered services include the Behavior Identification Assessment (97151, 97152); a functional assessment needs extra medical-necessity information with the request',
      status: 'verified',
      cites: [S.abaManual, S.paManual],
    },
    treatmentPA: {
      value: 'Yes. Prior authorization from South Dakota Medicaid (DSSMedicaidPA@state.sd.us or fax 605-773-5246) on the ABA Prior Authorization Request Form; approvals last 6 months and must be renewed',
      status: 'verified',
      cites: [S.abaManual, S.paManual],
    },
    dxRequired: {
      value: 'Yes. An autism spectrum disorder diagnosis "from a physician or psychologist" made "within 12 months prior to the start of services," with the name and a copy of the evidence-based diagnostic instrument',
      status: 'verified',
      cites: [S.abaManual],
    },
    payer: 'South Dakota Medicaid',
    state: 'SD', kind: 'state-medicaid',
    pill: 'Payer Guide · South Dakota Medicaid',
    h1: 'South Dakota Medicaid ABA coverage: the intake guide.',
    metaTitle: 'South Dakota Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How South Dakota Medicaid covers ABA: an EPSDT benefit for children 20 and under, run directly by DSS with no managed care plans, a 12-month diagnosis rule, 6-month prior authorizations, the 2026 ABA fee schedule, telemedicine rules and state behavior-analyst licensure.',
    intro: [
      'South Dakota Medicaid covers applied behavior analysis under EPSDT "for children 20 years old or younger with an Autism Spectrum Disorder (ASD) diagnosis from a physician or psychologist." Unlike most states, no managed care plan sits between the agency and the family. The Department of Social Services approves ABA itself, pays the claims, and publishes its own ABA manual and fee schedule. Most recipients are in a care-management program (Primary Care Provider or Health Home), but that program is primary care case management, not a health plan. Its practical effect on ABA is that the child’s assigned primary care provider must write the order.',
      'For an agency entering the South Dakota Medicaid market, four facts matter up front. Every billing and servicing behavior analyst must be enrolled with South Dakota Medicaid and licensed by the state. BCaBAs and RBTs cannot enroll and bill only under their supervisor. The diagnosis must be less than 12 months old when services start. Treatment authorizations run 6 months at a time.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, through EPSDT for children 20 years old or younger with an ASD diagnosis' },
      { label: 'Structure', value: 'Fee-for-service, run by DSS; no Medicaid MCOs. PCP/Health Home care management (PCCM) decides who orders' },
      { label: 'Prior auth', value: 'Required before services; ABA PA form to DSSMedicaidPA@state.sd.us; authorizations last 6 months' },
      { label: 'Rates (per 15 min, SFY 2027)', value: '97151 $35.63 · 97152 $21.73 · 97153 $21.73 · 97154 $5.44 · 97155 $39.00 · 97156 $22.44 · 97157 $13.01 · 97158 $13.01' },
      { label: 'Who may bill', value: 'Enrolled, licensed physicians, psychologists and behavior analysts; BCaBA/RBT services billed under the supervising analyst (97152–97154 only)' },
      { label: 'Licensure', value: 'Yes: behavior analysts are licensed by the SD Board of Social Work Examiners (SDCL 36-38)' },
      { label: 'Timely filing', value: '6 months following the month of service' },
      { label: 'Other insurance', value: 'Medicaid is generally the payer of last resort; bill the commercial plan first' },
    ],
    sections: [
      {
        h2: 'Where ABA sits: EPSDT, run by the state itself',
        body: [
          'The ABA chapter of the South Dakota Medicaid Billing and Policy Manual (updated December 2025) places ABA under EPSDT. It is covered for full-coverage Medicaid and CHIP recipients 20 or younger with an ASD diagnosis from a physician or psychologist. Services "must be ordered by a physician, nurse practitioner, or physician assistant." If the child is in a care-management program, "the ordering provider must be their Care Management provider." The diagnosis "must be within 12 months prior to the start of services." Services must be prior authorized by South Dakota Medicaid before they start. Authorizations "are for a period of 6 months," and a reauthorization is needed after that. The covered services are the assessment (97151, 97152), adaptive behavior treatment by protocol (97153, group 97154), treatment with protocol modification (97155), family guidance (97156, multiple-family 97157) and social-skills groups (97158).',
          'There is no Medicaid MCO to contract with. DSS decides prior authorizations, pays claims and handles reconsiderations through its own Medicaid Portal. The care-management layer is the Primary Care Provider Program, "based on the primary care case management (PCCM) model," which about 80% of recipients must join, alongside the Health Home program. A PCP is paid a monthly case-management fee and must authorize most specialty care. Check the portal’s Primary Care Provider/Health Home section before intake so you know whose order to get.',
        ],
        cites: [S.abaManual, S.paManual, S.pcpManual, S.referralManual, S.reconManual],
      },
      {
        h2: 'Prior authorization: what goes in the packet',
        body: [
          'Requests go to South Dakota Medicaid by secure email (DSSMedicaidPA@state.sd.us), or by mail or fax (605-773-5246) to the Division of Medical Services in Pierre. The initial assessment and each reassessment must include: the ABA Services Prior Authorization Form; medical records showing an ASD diagnosis within the previous 12 months by a physician or psychologist, naming the evidence-based diagnostic instrument (the manual’s examples are the Gilliam Autism Rating Scale, third edition, ADOS-2 and the Adaptive Behavior Assessment System) with a copy of it; the criteria and frequency for measuring progress; the recommended weekly amount of each service code; the expected duration; a discharge plan if treatment should end within six months of the reauthorization; and, at reassessment, a certification that continued ABA is medically necessary. The behavior treatment plan must be person-centered, with behaviorally defined long-, intermediate- and short-term goals, the schedule and the individual providers responsible, care coordination with school and family, and parent or caregiver training.',
          'Timing: the PA manual says the agency "has 30 days to make a prior authorization determination," though most take "around 2 weeks." Federal rules have tightened this. Since January 1, 2026 a state Medicaid agency must decide a standard request "in no case later than 7 calendar days" (extendable by 14) and an expedited one within 72 hours. Denial letters give the family 30 days to appeal, and the provider can always resubmit with new records.',
        ],
        cites: [S.abaManual, S.paManual, S.cfr440],
      },
      {
        h2: 'What does South Dakota Medicaid pay for ABA?',
        body: [
          'South Dakota publishes its ABA rates as a Power BI report rather than a PDF. The current state-fiscal-year schedule lists, per 15-minute unit: 97151 $35.63, 97152 $21.73, 97153 $21.73, 97154 $5.44, 97155 $39.00, 97156 $22.44, 97157 $13.01 and 97158 $13.01. Every rate shows an update date of 7/1/2026 except 97156 (7/1/2025). 0362T and 0373T are not on the schedule. Claims are billed at your usual and customary charge, and payment is "the lesser of the provider’s usual and customary charge or the fee contained on South Dakota Medicaid’s Applied Behavior Analysis fee schedule."',
        ],
        cites: [S.feeABA, S.feePage, S.abaManual],
      },
      {
        h2: 'Claims operations: timely filing, appeals, EVV and whose NPI',
        body: [
          'Timely filing: South Dakota Medicaid "must receive a provider’s completed claim form within 6 months following the month the services were provided" (ARSD 67:16:35:04). A claim for May services is due by the end of November. Exceptions include claims filed within 3 months of a denial and claims filed with the primary insurer’s EOB within 6 months of its payment or denial. Claims go on a CMS-1500 or 837P. The ordering provider goes in block 17 with the NPI in 17b, and the prior authorization number goes in block 23. Services by a BCaBA or RBT "must be billed under the supervising, licensed, and enrolled behavior analyst" and only with the technician codes 97152–97154. Every servicing and billing NPI must be enrolled.',
          'Appeals: claim reconsiderations go through the Medicaid Portal, generally within 6 months of the date of service or 3 months of the denial remittance, and DSS answers "within 30 days of receipt." A provider can then request a fair hearing from the Office of Administrative Hearings within 30 days of the decision, and corporations must be represented by an attorney. EVV: South Dakota’s EVV manual applies EVV to personal care, home health, private duty nursing and certain waiver codes only. No ABA code is on its lists. The state publishes no clean-claim payment deadline for Medicaid; remittance advices post on the Medicaid Portal.',
        ],
        cites: [S.claimManual, S.abaManual, S.reconManual, S.evvManual],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and telemedicine',
        body: [
          'ABA may be billed only by licensed and enrolled physicians, psychologists and behavior analysts. South Dakota licenses behavior analysts through the Board of Social Work Examiners (SDCL 36-38), so a BCBA billing South Dakota Medicaid needs the state license as well as Medicaid enrollment. BCaBAs and RBTs "are not eligible to enroll"; they deliver services under a licensed, enrolled behavior analyst. ABA may be delivered by real-time telemedicine, but the BCBA "must have an in-person face-to-face visit within the first 30 days and every 90 days thereafter." The distant-site practitioner "must be licensed to provide the service in both the state of the originating site and state of the distant site," and the distant site must be listed on the provider’s enrollment record. Out-of-state providers otherwise need prior authorization for most services. That out-of-state PA does not apply to telemedicine when the child is in South Dakota, but the ABA PA still does.',
          SD_OUT_OF_STATE_BODY,
        ],
        cites: [S.abaManual, S.teleManual, S.oosManual, S.sdcl3638, S.sdcl3452, S.aetnaOM, S.aetnaGuide],
      },
    ],
    collect: [
      { title: 'Medicaid ID + care-management status', desc: 'Check the Medicaid Portal for the child’s PCP or Health Home. If there is one, that provider must order ABA.' },
      { title: 'Diagnosis under 12 months old', desc: 'ASD diagnosis by a physician or psychologist within 12 months of the start date, with the instrument named and a copy attached (e.g. ADOS-2, GARS-3, ABAS).' },
      { title: 'Order', desc: 'Signed order from a physician, NP or PA (the care-management provider if the child has one).' },
      { title: 'Other insurance', desc: 'Commercial coverage is billed first; record it, plus any EOBs, for the Medicaid claim.' },
      { title: 'Age', desc: 'EPSDT covers children 20 years old or younger.' },
    ],
    sources: [S.abaManual, S.paManual, S.feeABA, S.feePage, S.teleManual, S.claimManual, S.docManual, S.evvManual, S.oosManual, S.referralManual, S.pcpManual, S.reconManual, S.sdcl3638, S.sdcl3452, S.bacbLic, S.cfr440, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'Technician services may be provided by a BCaBA or an RBT certified by the BACB "when supervised by a licensed and enrolled behavior analyst." 97155 may be used to bill "case supervision." No numeric supervision ratio is published. For telemedicine, the BCBA must see the child in person within the first 30 days and every 90 days after that. State law also requires each supervised BCaBA or technician to pass a fingerprint background check paid for by the supervising analyst (SDCL 36-38-25).',
        status: 'verified',
        cites: [S.abaManual, S.teleManual, S.sdcl3638],
      },
      concurrentBilling: {
        value: 'Not addressed. The manual says 97155 "May include simultaneous direction of technician," but it does not say whether the technician’s 97153 may be billed for the same minutes.',
        status: 'unverified',
        cites: [S.abaManual],
        verifyVia: 'South Dakota Medicaid Claims Advice and Processing Specialists, 1-800-452-7691, or the Procedure Code Look-Up Tool on dss.sd.gov: ask whether 97153 and 97155 may be billed for the same clock time.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'The ABA manual sets no unit cap. Hours are set per authorization from the "clinical recommendation of the amount of weekly services necessary by service code." DSS applies NCCI-MUE edits and runs a separate NCCI-MUE reconsideration review for denials.',
        status: 'verified',
        cites: [S.abaManual, S.reconManual],
      },
      noteSignature: {
        value: '"Each entry in the record must be signed and dated by the individual providing the care including a notation of their credentials or licensure type." When care is given by someone working under the supervision of a participating provider, "the supervising individual must countersign each entry." Time-based codes need start and end times, and services must be documented "at the time they are rendered." Records are kept at least 6 years.',
        status: 'verified',
        cites: [S.docManual, S.abaManual],
      },
      placeOfService: {
        value: '"ABA services may not be provided by school district providers. However, an eligible ABA provider may provide services in a school district setting." Not covered: services in "non-conventional" settings such as resorts, spas and camps, provider travel time, transportation, and services that are educational, vocational or recreational. Telemedicine is billed with POS 02 (not the home) or 10 (the home).',
        status: 'verified',
        cites: [S.abaManual, S.teleManual],
      },
      billAsProvider: {
        value: 'Billing providers are licensed, enrolled physicians, psychologists and behavior analysts. BCaBA and RBT services "must be billed under the supervising, licensed, and enrolled behavior analyst" and only with 97152–97154. All servicing and billing NPIs must be enrolled. The ordering provider goes in block 17/17b and the PA number in block 23.',
        status: 'verified',
        cites: [S.abaManual],
      },
    },
    intakeGates: {
      ageLimit: {
        value: '20 years old or younger (EPSDT).',
        status: 'verified',
        cites: [S.abaManual],
      },
      dxRecency: {
        value: 'The diagnosis "must be within 12 months prior to the start of services," and each PA request needs medical records showing an ASD diagnosis "within the previous 12 months."',
        status: 'verified',
        cites: [S.abaManual],
      },
      diagnosingProviders: {
        value: 'A physician or a psychologist.',
        status: 'verified',
        cites: [S.abaManual],
      },
      diagnosticTools: {
        value: 'The request must name "the evidence-based diagnosis evaluation instrument" and attach a copy of it. The manual’s examples are the Gilliam Autism Rating Scale (third edition), the Autism Diagnostic Observation Schedule (second edition) and the Adaptive Behavior Assessment System.',
        status: 'verified',
        cites: [S.abaManual],
      },
      referral: {
        value: 'Yes. ABA "must be ordered by a physician, nurse practitioner, or physician assistant," and for a child in the PCP or Health Home program "the ordering provider must be their Care Management provider." The ordering provider’s NPI goes on the claim (block 17b).',
        status: 'verified',
        cites: [S.abaManual, S.referralManual],
      },
      telehealth: {
        value: 'Yes. ABA "may be provided via telemedicine" by "real-time" interactive telecommunications, with an in-person BCBA visit within the first 30 days and every 90 days after. Behavior analysts and BCaBAs are on the list of distant-site providers. The child’s home is an eligible originating site. The practitioner must be licensed in both the child’s and the provider’s state, the distant site must be on the provider’s enrollment record, and claims carry modifier GT in the first position with POS 02 or 10. Which ABA codes are allowable by telemedicine is flagged in DSS’s Procedure Code Look-Up Tool. Audio-only ABA is not among the covered audio-only services.',
        status: 'verified',
        cites: [S.abaManual, S.teleManual],
      },
      authTurnaround: {
        value: 'The PA manual says DSS "has 30 days to make a prior authorization determination," usually "around 2 weeks." Federal law is stricter for decisions from January 1, 2026: a standard request "in no case later than 7 calendar days" (extendable by up to 14 days) and an expedited one within 72 hours. Treatment authorizations last 6 months, so request reauthorization ahead of the end date.',
        status: 'verified',
        cites: [S.paManual, S.cfr440, S.abaManual],
      },
      coordinationOfBenefits: {
        value: 'South Dakota Medicaid "is generally the payer of last resort." Providers must pursue other coverage first and attach the third-party EOB. Two details matter for ABA. First, the claim manual exempts "services for early and periodic screening, diagnosis, and treatment provided under ARSD § 67:16:11" from billing the other payer first, but the ABA manual itself tells providers to pursue third-party payment, so ask DSS which applies to ABA. Second, if the child’s commercial plan denies because you are out of its network, "Medicaid will still process the claim according to the state plan and reimburse the service if it is covered." A claim filed with the primary’s EOB is timely if it reaches DSS within 6 months of the primary’s payment or denial.',
        status: 'verified',
        cites: [S.claimManual, S.abaManual, S.cfr433],
      },
    },
    faq: [
      { q: 'Does South Dakota Medicaid cover ABA therapy?', a: 'Yes, for children 20 years old or younger with an ASD diagnosis from a physician or psychologist, under EPSDT. It must be ordered by a physician, NP or PA and prior authorized by South Dakota Medicaid.' },
      { q: 'Does South Dakota Medicaid use managed care plans for ABA?', a: 'No. DSS authorizes and pays ABA itself. The PCP and Health Home programs are primary care case management, not health plans, but the child’s assigned PCP or Health Home must write the ABA order.' },
      { q: 'How old can the autism diagnosis be?', a: 'No more than 12 months old at the start of services. The PA request must name the diagnostic instrument (for example ADOS-2 or GARS-3) and include a copy.' },
      { q: 'What does South Dakota Medicaid pay for ABA?', a: 'Per 15-minute unit (current state fiscal year): 97151 $35.63, 97152 $21.73, 97153 $21.73, 97154 $5.44, 97155 $39.00, 97156 $22.44, 97157 and 97158 $13.01. Payment is the lesser of your charge or the fee schedule.' },
      { q: 'What is the timely filing limit for South Dakota Medicaid?', a: 'The claim must be received within 6 months following the month of service (for example, May services by the end of November). Denied claims can be resubmitted within 3 months of the denial.' },
      { q: 'Does EVV apply to ABA in South Dakota?', a: 'No. South Dakota’s EVV manual covers personal care, home health, private duty nursing and certain waiver services; no ABA code is listed.' },
      { q: 'Can a BCBA licensed in another state provide ABA by telehealth to a South Dakota Medicaid child?', a: 'Only with a South Dakota license as well. The Medicaid telemedicine manual requires the practitioner to be licensed in both the child’s state and their own, state law (SDCL 34-52-2) requires full South Dakota licensure to treat a patient in the state by telehealth, and the BCBA must still see the child in person within 30 days and every 90 days.' },
    ],
  },

  'wellmark-blue-cross-blue-shield-south-dakota': {
    slug: 'wellmark-blue-cross-blue-shield-south-dakota',
    family: 'bcbs',
    cardDesc: 'South Dakota’s Blue plan: no public ABA medical policy, an auth table we could not open, so the SDCL 58-17 mandate is the public floor.',
    assessmentPA: {
      value: 'Not confirmed. Wellmark lists pre-service review by code in its Authorization Table, which could not be opened this run. The South Dakota mandate allows "pre-authorization, prior approval, and other care management requirements" for ABA',
      status: 'unverified',
      cites: [S.wmAuth, S.sdclAba],
      verifyVia: 'Wellmark Authorization Table (wellmark.com/authtable): search 97151 and 97152; or Wellmark Provider Services at the number on the member’s card.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Not confirmed. Check 97153–97158, 0362T and 0373T in the Wellmark Authorization Table; the mandate permits pre-authorization',
      status: 'unverified',
      cites: [S.wmAuth, S.sdclAba],
      verifyVia: 'Wellmark Authorization Table (wellmark.com/authtable) for each treatment code, and the Behavioral Health section of the Wellmark Provider Guide (provider site).',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes for plans under the South Dakota mandate: ABA is covered "for the treatment of autism spectrum disorders," and treatment is care prescribed or ordered for a person diagnosed with ASD "by a licensed physician or psychologist." Wellmark publishes no ABA medical policy of its own',
      status: 'plan-dependent',
      cites: [S.sdclAba, S.wmMP],
      verifyVia: 'Wellmark Provider Services (number on the card): confirm the plan is subject to SDCL 58-17-154 et seq. and what diagnostic documentation Wellmark requires.',
      blocker: 'per-case',
    },
    payer: 'Wellmark Blue Cross and Blue Shield of South Dakota',
    state: 'SD', kind: 'commercial',
    pill: 'Payer Guide · Wellmark · South Dakota',
    h1: 'Wellmark Blue Cross and Blue Shield of South Dakota ABA coverage: the intake guide.',
    metaTitle: 'Wellmark BCBS South Dakota ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Wellmark Blue Cross and Blue Shield of South Dakota handles ABA: no public ABA medical policy, the Authorization Table to check, South Dakota’s SDCL 58-17-154 autism mandate (annual floors through age 18, ACA individual and small-group plans exempt), licensure and credentialing rules.',
    intro: [
      'Wellmark Blue Cross and Blue Shield of South Dakota is the state’s Blue plan, an independent licensee of the Blue Cross and Blue Shield Association alongside Wellmark’s Iowa companies. For ABA, the public record is thin. Wellmark’s A–Z medical-policy index, as posted September 30, 2026, has no applied behavior analysis or autism policy, and its code-level Authorization Table could not be opened this run. That leaves South Dakota’s autism mandate as the documented floor for the plans it reaches.',
      'Establish plan type on every benefits check. The mandate binds insured large-group and grandfathered plans and local-government self-funded plans. It does not bind self-funded ERISA employer plans that Wellmark administers, the State of South Dakota employee plan, or ACA individual and small-group plans.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes on plans subject to the SD mandate; other plans per the benefit document' },
      { label: 'ABA medical policy', value: 'None in Wellmark’s public A–Z index (Sept. 2026)' },
      { label: 'State mandate', value: 'SDCL 58-17-154 to 58-17-162 (SL 2015, ch 250; plan years from 1/1/2016)' },
      { label: 'Mandate age', value: 'Coverage duty names no age limit; minimum annual benefits run through age 18 only' },
      { label: 'Mandate caps', value: 'Plans may cap ABA, but not below $36,000/yr through age 6, $25,000 ages 7–13, $12,500 ages 14–18' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; ACA individual and small-group (EHB) plans; the State of South Dakota employee plan' },
      { label: 'Licensure', value: 'Yes: SDCL 36-38, behavior analysts licensed by the SD Board of Social Work Examiners' },
      { label: 'Fee schedule', value: 'Not public — Wellmark pays your contracted rate; SD Medicaid’s 97153 rate ($21.73/15 min) is the public benchmark' },
    ],
    sections: [
      {
        h2: 'What Wellmark publishes about ABA',
        body: [
          'Wellmark’s provider medical-policy page lists its policies alphabetically, from ablative nerve procedures to Zevaskyn. No policy on applied behavior analysis, intensive behavioral intervention or autism appears. The same page says Wellmark uses InterQual criteria "to evaluate whether a medical procedure or equipment is medically necessary." It does not say whether ABA is reviewed on InterQual or on an internal guideline, and InterQual is licensed and not public. Code-level pre-service review requirements sit in the Wellmark Authorization Table, and the behavioral health rules in the Wellmark Provider Guide. Neither could be retrieved this run, so this guide does not state Wellmark’s ABA prior-authorization rules. Check them for each code before the first session.',
        ],
        cites: [S.wmMP, S.wmAuth, S.wmGuide],
      },
      {
        h2: 'The South Dakota mandate: what it guarantees',
        body: [SD_MANDATE_BODY],
        cites: [S.sdclAba],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [SD_LICENSURE_BODY],
        cites: [S.sdcl3638, S.bacbLic, S.sdclCred, S.feeABA],
      },
      {
        h2: 'Can an out-of-state BCBA treat a Wellmark member in South Dakota?',
        body: [SD_OUT_OF_STATE_BODY],
        cites: [S.sdcl3638, S.sdcl3452, S.aetnaOM, S.aetnaGuide],
      },
      {
        h2: 'Claims: prompt pay, recoupment and appeals',
        body: [
          'South Dakota’s prompt-pay law covers insured plans. A clean claim must be paid, denied or settled "within thirty calendar days after receipt by the carrier if submitted electronically and within forty-five calendar days" on paper. If the carrier needs more information, it must ask within 30 days, and the provider then has 30 days to supply it (SDCL 58-12-20). A paid claim can be recouped only within 18 months of payment, with written notice of the reason. That limit does not apply to self-funded ERISA plans or to fraud (58-17H-30.1). An appeal of a denied authorization (first-level grievance) may be filed within 180 days of the denial notice (58-17I-7). Wellmark’s own timely-filing limit is in your provider agreement and the Wellmark Provider Guide.',
        ],
        cites: [S.sdclPrompt, S.sdcl17H, S.sdcl17I, S.wmGuide],
      },
    ],
    collect: [
      { title: 'Plan type', desc: 'Insured large-group or grandfathered (mandate applies), ACA individual or small-group (plan document), self-funded ERISA (plan document), or the State employee plan (exempt).' },
      { title: 'Member ID + card photo', desc: 'Wellmark South Dakota vs. Wellmark Iowa vs. an out-of-state Blue (BlueCard) changes whose rules apply.' },
      { title: 'Diagnosis + order', desc: 'ASD diagnosis and an order from a licensed physician or psychologist, the mandate’s definition of treatment.' },
      { title: 'Child’s age', desc: 'The mandate’s minimum annual benefit falls at ages 7 and 14, and no floor applies at 19+.' },
      { title: 'Other coverage', desc: 'Second parent’s plan (birthday rule), Medicaid, TRICARE or CHAMPVA.' },
    ],
    sources: [S.wmMP, S.wmAuth, S.wmGuide, S.sdclAba, S.sdcl3638, S.sdcl3452, S.sdclCred, S.sdclTele, S.sdclPrompt, S.sdcl17H, S.sdcl17I, S.sdcl18A, S.bacbLic, S.erisa, S.feeABA, S.claimManual],
    deliveryRules: {
      supervision: {
        value: 'Wellmark publishes no ABA supervision rule. For plans under the mandate, anyone who "performs or supervises applied behavior analysis" must be a South Dakota-licensed physician or psychologist with documented ABA training, or a licensed behavior analyst (SDCL 58-17-159). State licensure law lets BCaBAs and technicians work under a behavior analyst if they are supervised under BACB requirements (36-38-5(6)).',
        status: 'plan-dependent',
        cites: [S.sdclAba, S.sdcl3638, S.wmMP],
        verifyVia: 'Wellmark Provider Guide, Behavioral Health section, or Wellmark Provider Services: ask for Wellmark’s ABA supervision and technician-credential requirements.',
        blocker: 'document',
      },
      concurrentBilling: {
        value: 'Not published by Wellmark.',
        status: 'unverified',
        cites: [S.wmMP],
        verifyVia: 'Wellmark Provider Services or your Wellmark provider agreement: ask whether 97153 and 97155 may be billed for the same minutes.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Wellmark publishes no ABA unit limit. The mandate allows "limits on the number of individual visits" under the plan’s general care-management provisions, subject to the annual benefit floors in SDCL 58-17-158.',
        status: 'plan-dependent',
        cites: [S.sdclAba, S.wmMP],
        verifyVia: 'Benefits verification on the member ID: ask for any ABA visit, hour or dollar limit and the amount already used this year.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not published by Wellmark.',
        status: 'unverified',
        cites: [S.wmMP],
        verifyVia: 'Wellmark Provider Guide (documentation standards) or your provider agreement.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Wellmark publishes no ABA setting rule. The mandate does not change any obligation to serve a child under an IEP, IFSP or individualized service plan (SDCL 58-17-161).',
        status: 'plan-dependent',
        cites: [S.sdclAba, S.wmMP],
        verifyVia: 'Wellmark Provider Services: ask which places of service (home, clinic, school, community) Wellmark pays for ABA.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'Not published by Wellmark. Under state law the analyst must hold a South Dakota behavior-analyst license (SDCL 36-38-6), and technicians cannot hold one, so expect the licensed analyst to be the rendering or supervising provider on the claim.',
        status: 'unverified',
        cites: [S.sdcl3638, S.wmMP],
        verifyVia: 'Wellmark Provider Services: ask whether technician services are billed under the supervising analyst’s NPI and which modifiers Wellmark requires.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Wellmark publishes no ABA age limit.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.sdclAba, S.wmMP],
        verifyVia: 'Live benefits verification: establish the plan type first, then the plan’s own ABA age and dollar terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not published by Wellmark or the mandate.',
        status: 'unverified',
        cites: [S.wmMP, S.sdclAba],
        verifyVia: 'Wellmark Provider Services: ask how recent the diagnostic evaluation must be for an initial ABA request.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'For plans under the mandate, treatment is care ordered for a person diagnosed with ASD "by a licensed physician or psychologist" (SDCL 58-17-154(4)). Wellmark publishes no rule of its own.',
        status: 'plan-dependent',
        cites: [S.sdclAba, S.wmMP],
        verifyVia: 'Wellmark Provider Services: confirm which diagnosing credentials Wellmark accepts.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'Not published by Wellmark.',
        status: 'unverified',
        cites: [S.wmMP],
        verifyVia: 'Wellmark Provider Services: ask which instruments and functional measures Wellmark expects with the initial request.',
        blocker: 'document',
      },
      referral: {
        value: 'Wellmark publishes no ABA referral rule.' + MANDATE_REFERRAL_TAIL,
        status: 'plan-dependent',
        cites: [S.sdclAba, S.wmMP],
        verifyVia: 'Benefits verification: ask whether the plan (HMO or PPO) needs a PCP referral or physician order on file for ABA.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Wellmark publishes no ABA telehealth rule.' + SD_TELE_STATUTE,
        status: 'plan-dependent',
        cites: [S.sdclTele, S.sdcl3452, S.wmMP],
        verifyVia: 'Wellmark Provider Services: ask which ABA codes, POS and modifier Wellmark pays by telehealth on this plan.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: SD_AUTH_TURNAROUND + ' Wellmark publishes no ABA-specific turnaround.',
        status: 'plan-dependent',
        cites: [S.sdcl17H, S.sdcl17I, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is insured (South Dakota-regulated) or self-funded (ERISA), and what reauthorization lead time Wellmark expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: SD_COB,
        status: 'plan-dependent',
        cites: [S.sdcl18A, S.cfr433, S.claimManual, S.tricare, S.champva],
        verifyVia: 'Ask Wellmark at benefits verification for the coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Wellmark cover ABA therapy in South Dakota?', a: 'On plans subject to South Dakota’s mandate (insured large-group, grandfathered and local-government self-funded plans), yes: ABA for autism must be covered with annual benefits of at least $36,000 through age 6, $25,000 for ages 7–13 and $12,500 for ages 14–18. Self-funded ERISA, ACA individual and small-group plans and the State employee plan follow their own documents.' },
      { q: 'Does Wellmark require prior authorization for ABA?', a: 'Wellmark lists pre-service review by code in its Authorization Table; check 97151–97158 there or call Provider Services. The South Dakota mandate allows carriers to require pre-authorization for ABA.' },
      { q: 'Does Wellmark have an ABA medical policy?', a: 'Not a public one: its A–Z medical-policy index (September 2026) lists no ABA or autism policy. Ask Wellmark which criteria it uses for ABA review.' },
      { q: 'Does a BCBA need a South Dakota license to bill Wellmark?', a: 'Yes. South Dakota licenses behavior analysts (SDCL 36-38, Board of Social Work Examiners), practicing without a license is a misdemeanor, and the mandate requires ABA to be performed or supervised by a licensed physician, psychologist or behavior analyst.' },
      { q: 'How fast must Wellmark pay a clean claim?', a: 'For insured plans, South Dakota law requires payment, denial or settlement within 30 calendar days of an electronic clean claim and 45 days of a paper one (SDCL 58-12-20).' },
    ],
  },

  'aetna-south-dakota': {
    slug: 'aetna-south-dakota',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA guide + precert list + South Dakota’s SDCL 58-17 mandate (floors through age 18) and state licensure.',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: precertification through Availity or the number on the card; the reauthorization interval is set by the plan (Aetna re-evaluates progress every six months)',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (behavioral health number on the card): ask what reauthorization interval it uses for ABA.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) by an appropriate provider; CPB 0554 treats ABA as experimental for conditions without ASD (such as Down syndrome alone)',
      status: 'verified',
      cites: [S.aetnaGuide, S.aetnaCPB],
    },
    payer: 'Aetna in South Dakota',
    state: 'SD', kind: 'commercial',
    pill: 'Payer Guide · Aetna · South Dakota',
    h1: 'Aetna ABA coverage in South Dakota: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in South Dakota: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for South Dakota families: the national medical necessity guide, precertification of all ABA codes, South Dakota’s SDCL 58-17-154 autism mandate (floors through age 18, ACA individual and small-group exempt), state licensure and what intake should verify.',
    intro: [
      'For an intake team in South Dakota, an Aetna card means three layers: Aetna’s national ABA policy, South Dakota’s autism mandate in SDCL 58-17-154 to 58-17-162, and the plan’s type, which decides whether the mandate applies. South Dakota’s mandate also exempts ACA individual and small-group plans, so funding is not the only question. Aetna runs no South Dakota Medicaid plan; South Dakota Medicaid has no managed care plans.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s national ABA medical necessity guide' },
      { label: 'State mandate', value: 'SDCL 58-17-154 to 58-17-162 (SL 2015, ch 250; plan years from 1/1/2016)' },
      { label: 'Mandate age', value: 'Coverage duty names no age limit; minimum annual benefits run through age 18 only' },
      { label: 'Mandate caps', value: 'Plans may cap ABA, but not below $36,000/yr through age 6, $25,000 ages 7–13, $12,500 ages 14–18' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; ACA individual and small-group (EHB) plans; the State of South Dakota employee plan' },
      { label: 'Licensure', value: 'Yes: SDCL 36-38, behavior analysts licensed by the SD Board of Social Work Examiners' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in South Dakota',
        body: [
          'Aetna’s ABA medical necessity guide (©2026) requires a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) "obtained by an appropriate provider," services "provided directly or billed by the appropriately licensed provider," functional impairment on a standardized scale "in the past 12 months" at least one standard deviation below the mean (or a significant risk of harm), and a treatment plan with defined targets, generalization strategies and discharge criteria. Hours follow the guide’s severity table, with QHP protocol modification authorized at 1 to 2 hours per 10 hours of treatment, and progress reviewed every six months. The guide’s only state exhibit is Maryland, so the national criteria apply in South Dakota. Aetna’s behavioral health precertification list (eff. 8/1/2024) names all ten ABA codes, 97151–97158, 0362T and 0373T, and requests go through Availity.',
        ],
        cites: [S.aetnaGuide, S.aetnaPrecert, S.aetnaCPB, S.aetnaCPB648],
      },
      {
        h2: 'The South Dakota mandate: what it guarantees',
        body: [SD_MANDATE_BODY],
        cites: [S.sdclAba],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [SD_LICENSURE_BODY],
        cites: [S.sdcl3638, S.bacbLic, S.sdclCred, S.feeABA],
      },
      {
        h2: 'Can an out-of-state BCBA treat an Aetna member in South Dakota?',
        body: [SD_OUT_OF_STATE_BODY],
        cites: [S.sdcl3638, S.sdcl3452, S.aetnaOM, S.aetnaGuide],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA, and how fast must it pay?',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) treats payment as a contract term: "The rates and compensation under your agreement are subject to the Aetna coding/claim edit policies," and with both an intermediary contract and a direct agreement, "your direct Aetna rates will apply unless we specifically notify you otherwise." A member whose benefits are exhausted cannot be charged "more than the contracted rate." For insured South Dakota plans, a clean claim must be paid, denied or settled within 30 calendar days if electronic and 45 if on paper (SDCL 58-12-20), and recoupment is limited to 18 months after payment except for ERISA plans and fraud (58-17H-30.1). For a public benchmark, South Dakota Medicaid pays 97153 at $21.73 per 15 minutes.',
        ],
        cites: [S.aetnaOM, S.sdclPrompt, S.sdcl17H, S.feeABA],
      },
    ],
    collect: [
      { title: 'Plan type', desc: 'Insured large-group or grandfathered (mandate applies) vs. ACA individual or small-group, self-funded ERISA or the State employee plan (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification in Availity.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date. Aetna’s policy is ASD-only.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3, ABAS, VB-MAPP or ABLLS).' },
      { title: 'Physician or psychologist order', desc: 'Under the SD mandate, treatment is care ordered by a licensed physician or psychologist.' },
    ],
    sources: [S.aetnaGuide, S.aetnaPrecert, S.aetnaCPB, S.aetnaCPB648, S.aetnaNPC, S.aetnaOM, S.aetnaTele, S.sdclAba, S.sdcl3638, S.sdcl3452, S.sdclCred, S.sdclTele, S.sdclPrompt, S.sdcl17H, S.sdcl17I, S.sdcl18A, S.bacbLic, S.erisa, S.feeABA, S.claimManual],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s Network Participation Criteria (5/26): ABA "must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board," supervised staff may be a BCaBA "or a paraprofessional," and "A minimum of one hour of face-to-face supervision is required of the unlicensed or noncertified paraprofessional" for "each 10 hours of applied behavior analysis," with the supervisor "onsite with the child at least one hour a month." "All BCBAs, BCaBAs and paraprofessionals must meet state requirements." In South Dakota that means a licensed behavior analyst (SDCL 36-38-6), and supervised technicians must pass a fingerprint background check (36-38-25).',
        status: 'verified',
        cites: [S.aetnaNPC, S.sdcl3638],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA policies (CPB 0554, CPB 0648, the medical necessity guide).',
        status: 'unverified',
        cites: [S.aetnaCPB, S.aetnaGuide],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap is published. Hours come from the guide’s severity assessment (typical intensities: 10–25 hours a week comprehensive, 1–20 focused; typical, not caps), with QHP protocol modification at 1–2 hours per 10 hours of treatment. Progress is re-evaluated every six months.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      noteSignature: {
        value: 'Not addressed. Aetna sets treatment-plan content requirements but not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'The participating-provider agreement and the Aetna Behavioral Health Provider Manual section on documentation.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-neutral in Aetna’s guide; in inpatient, residential or partial hospitalization settings that level of care’s criteria apply and no separate ABA authorization is needed. The guide expects collaboration with the school district. SDCL 58-17-161 leaves IEP and IFSP obligations untouched.',
        status: 'verified',
        cites: [S.aetnaGuide, S.sdclAba],
      },
      billAsProvider: {
        value: 'Services "must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope," unless mandates, plan documents or contracts say otherwise. South Dakota licenses behavior analysts, so the billing credential is the South Dakota license.',
        status: 'verified',
        cites: [S.aetnaGuide, S.sdcl3638],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national ABA guide sets no age cap; it describes typical, not limiting, age ranges.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.sdclAba],
        verifyVia: 'Live benefits verification on the member ID: establish plan type, then the plan’s own age and dollar terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the ASD diagnosis itself, but medical necessity requires functional impairment on a standardized scale "in the past 12 months" (at least one standard deviation below the mean) or a significant risk of harm.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'A DSM-5 ASD diagnosis by "an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)."',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale. The ABA guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s national ABA policies require no physician referral; they require precertification of all ten ABA codes through Availity.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.sdclAba],
      },
      telehealth: {
        value: 'Aetna’s Telemedicine and Direct Patient Contact Payment Policy lists the ABA codes it pays by telehealth, by line of business. On commercial plans the eligible codes are 97151, 97153, 97155, 97156 and 97157, billed with modifier GT, 95 or FR; 97152, 97154 and 97158 are checked for Medicare only. The posted policy shows a last review of June 2021, so treat the list as perishable. Aetna’s provider manual (6/26) says Aetna Behavioral Health offers telehealth to all commercial fully insured members and to self-insured plan sponsors "unless those self-insured plan sponsors opt out," and providers "must act within the scope of their license and ensure that they have the proper licensure based on state requirements."' + SD_TELE_STATUTE,
        status: 'plan-dependent',
        cites: [S.aetnaTele, S.aetnaOM, S.sdclTele, S.sdcl3452],
        verifyVia: 'Availity or the behavioral health number on the card: ask whether the plan is insured in South Dakota or self-funded (and opted out of telehealth), and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: SD_AUTH_TURNAROUND + ' Aetna publishes no South Dakota-specific ABA turnaround or reauthorization lead time.',
        status: 'plan-dependent',
        cites: [S.sdcl17H, S.sdcl17I, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is insured (South Dakota-regulated) or self-funded (ERISA), and what reauthorization lead time Aetna expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: SD_COB,
        status: 'plan-dependent',
        cites: [S.sdcl18A, S.cfr433, S.claimManual, S.tricare, S.champva],
        verifyVia: 'Ask Aetna at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in South Dakota?', a: 'Yes, under its national ABA guide for ASD, with South Dakota’s mandate layered on for the plans it reaches (insured large-group, grandfathered and local-government plans). Self-funded ERISA plans and ACA individual and small-group plans follow their own documents.' },
      { q: 'What does the South Dakota autism mandate require?', a: 'Coverage of ABA for autism, prescribed by a licensed physician or psychologist and performed or supervised by a licensed physician, psychologist or behavior analyst. Plans may use prior authorization and cost sharing and may cap the benefit, but not below $36,000 a year through age 6, $25,000 for ages 7–13 and $12,500 for ages 14–18.' },
      { q: 'Does the Aetna ABA assessment need precertification in South Dakota?', a: 'Yes. 97151 and 97152 are on Aetna’s behavioral health precertification list with the other ABA codes.' },
      { q: 'Does Aetna require RBT certification for ABA technicians?', a: 'Aetna’s network criteria do not require the RBT credential by name: technicians may be paraprofessionals supervised by a BCBA or licensed provider, with at least 1 hour of face-to-face supervision per 10 hours of ABA and the supervisor onsite with the child at least 1 hour a month. In South Dakota every supervised technician must also pass a state fingerprint background check.' },
      { q: 'What does Aetna pay for ABA in South Dakota?', a: 'Aetna publishes no ABA rates; payment follows the rates in your Aetna agreement. The public benchmark is South Dakota Medicaid’s 97153 rate of $21.73 per 15 minutes.' },
    ],
  },

  'cigna-south-dakota': {
    slug: 'cigna-south-dakota',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + Evernorth’s South Dakota addendum + the SDCL 58-17 mandate; no PA on assessment codes.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the policy covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: completed assessment and treatment plan attached to the ABA Prior Authorization Form',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD (F84.0–F84.9 except F84.2 Rett syndrome) under DSM-5-TR criteria; provisional or rule-out diagnoses do not count',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in South Dakota',
    state: 'SD', kind: 'commercial',
    pill: 'Payer Guide · Cigna · South Dakota',
    h1: 'Cigna / Evernorth ABA coverage in South Dakota: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in South Dakota: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for South Dakota families: national policy EN0499, no PA on assessments, Evernorth’s South Dakota regulatory addendum, the SDCL 58-17-154 autism mandate (floors through age 18), state licensure and what intake should verify.',
    intro: [
      'For an intake team in South Dakota, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, South Dakota’s autism mandate, and the plan type, which decides whether the mandate applies. Many Cigna members are on self-funded employer plans, which sit outside both the mandate and Evernorth’s South Dakota regulatory addendum, so check funding first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'State mandate', value: 'SDCL 58-17-154 to 58-17-162 (SL 2015, ch 250; plan years from 1/1/2016)' },
      { label: 'Mandate age', value: 'Coverage duty names no age limit; minimum annual benefits run through age 18 only' },
      { label: 'Mandate caps', value: 'Plans may cap ABA, but not below $36,000/yr through age 6, $25,000 ages 7–13, $12,500 ages 14–18' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; ACA individual and small-group (EHB) plans; the State of South Dakota employee plan' },
      { label: 'Licensure', value: 'Yes: SDCL 36-38, behavior analysts licensed by the SD Board of Social Work Examiners' },
      { label: 'Fee schedule', value: 'Not public — your ABA fee schedule is Exhibit A of your Evernorth Provider Agreement; fee questions to Evernorth Provider Services, 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in South Dakota',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). Per the autism resource guide, prior authorization is no longer required for 97151, 97152 and 0362T with an autism diagnosis, as long as the provider is independently licensed or a BCBA and the policy covers ABA. Treatment needs the completed assessment and treatment plan on the ABA Prior Authorization Form. EN0499 does not mention South Dakota, so the national criteria apply. Evernorth’s Administrative Guidelines (September 2026) add a South Dakota Regulatory Addendum for insured business. It does not apply to self-funded plans. It lets a patient continue an ongoing course of treatment for 90 days with a provider who leaves the network or is terminated without cause, on request and if the provider agrees, and it limits recoupment of a paid claim to 18 months with written notice. Patients with Cigna Healthcare coverage have access to the Evernorth network in South Dakota.',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin],
      },
      {
        h2: 'The South Dakota mandate: what it guarantees',
        body: [SD_MANDATE_BODY],
        cites: [S.sdclAba],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [SD_LICENSURE_BODY, 'Evernorth adds its own timeline: after a clinic contract is signed, "each certified or licensed autism provider must become credentialed with Evernorth," which "can take an additional 60 to 90 days," and providers "must be fully credentialed to render in-network services."'],
        cites: [S.sdcl3638, S.bacbLic, S.sdclCred, S.feeABA, S.cignaARG],
      },
      {
        h2: 'Can an out-of-state BCBA treat a Cigna member in South Dakota?',
        body: [SD_OUT_OF_STATE_BODY],
        cites: [S.sdcl3638, S.sdcl3452, S.aetnaOM, S.aetnaGuide],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA, and what are the claim deadlines?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth’s Administrative Guidelines (September 2026) tell ABA providers: "For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement." Fee questions go to Provider Services at 800.926.2273. Evernorth considers claims "submitted within 90 days of the date of service or as otherwise defined in your Provider Agreement," and a longer state limit applies where one exists. Telehealth claims carry modifier 95 with POS 02. Payment appeals must be started in writing within 180 calendar days of the payment or denial. Electronic claims use payer ID 62308. For insured South Dakota plans, the prompt-pay law requires a clean claim to be paid within 30 days electronic or 45 days paper (SDCL 58-12-20). For a public benchmark, South Dakota Medicaid pays 97153 at $21.73 per 15 minutes.',
        ],
        cites: [S.ebhAdmin, S.cignaARG, S.sdclPrompt, S.feeABA],
      },
    ],
    collect: [
      { title: 'Plan type', desc: 'Insured large-group or grandfathered (mandate applies) vs. ACA individual or small-group, self-funded ERISA or the State employee plan.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, plus the date of the most recent diagnosis. Provisional or rule-out diagnoses don’t count.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Physician or psychologist order', desc: 'Under the SD mandate, treatment is care ordered by a licensed physician or psychologist.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.sdclAba, S.sdcl3638, S.sdcl3452, S.sdclCred, S.sdclTele, S.sdclPrompt, S.sdcl17H, S.sdcl17I, S.sdcl18A, S.bacbLic, S.erisa, S.feeABA, S.claimManual],
    deliveryRules: {
      supervision: {
        value: 'Case supervision is by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health professional with ABA training, at one to two hours per ten hours of direct treatment, and at least one to two hours a week when direct treatment is 10 hours a week or less. In South Dakota the supervising analyst must hold the state license (SDCL 36-38-6), and supervised technicians must pass a fingerprint background check (36-38-25).',
        status: 'verified',
        cites: [S.en0499, S.sdcl3638],
      },
      concurrentBilling: {
        value: 'Only one provider may bill for a unit of time, except 97153, 97154 and 97155 during direct supervision, when the BCBA or QHP directs the technician and both are face-to-face with the patient at the same time.',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap is published. All ABA codes bill in 15-minute units and only with 97151–97158, 0362T and 0373T; intensity must reflect severity, goals and response to treatment.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499],
      },
      noteSignature: {
        value: 'Each service needs its own record including the name, credential (if applicable) and signature of the ABA provider who rendered it, along with the date and time, who was present, and what was done.',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'EN0499 expects goals and data reported by setting and excludes primarily educational or vocational services; SDCL 58-17-161 leaves IEP and IFSP obligations untouched.',
        status: 'verified',
        cites: [S.en0499, S.sdclAba],
      },
      billAsProvider: {
        value: 'Evernorth "does not credential nonlicensed/noncertified staff"; their services "must be billed under the supervising provider." On a CMS-1500, list only a BCBA or other licensed provider in box 33; electronic claims use payer ID 62308.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; it says access to focused intervention "should not be restricted by age." Age terms come from the benefit plan and any controlling mandate.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.sdclAba],
        verifyVia: 'Live benefits verification: establish plan type first, then the plan’s own ABA terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but provisional or rule-out diagnoses do not count, and the clocks run on data: the standardized instrument and baseline data within 60 days before treatment starts, and current data within 60 days of a continued-treatment request.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional licensed to practice independently whose licensure board considers diagnosis within scope, applying DSM-5-TR criteria. The ABA assessment is by a BCBA, a Licensed Behavior Analyst, or an independently licensed clinician with documented ABA training.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated, but it must be standardized, valid and the current edition (the policy’s example: Vineland-3, not Vineland-II), administered within 60 days before treatment starts.',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral. Assessments 97151, 97152 and 0362T need no PA with an autism diagnosis when the provider is independently licensed or a BCBA; treatment needs the assessment and plan on the ABA PA form.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.sdclAba],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" per the autism resource guide, and EN0499 allows in-person, telehealth or hybrid delivery. Evernorth bills telehealth with modifier 95 and POS 02.' + SD_TELE_STATUTE,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ebhAdmin, S.sdclTele, S.sdcl3452],
      },
      authTurnaround: {
        value: SD_AUTH_TURNAROUND + ' Cigna/Evernorth publishes no South Dakota-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.sdcl17H, S.sdcl17I, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is insured (South Dakota-regulated) or self-funded (ERISA), and what reauthorization lead time Evernorth expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: SD_COB,
        status: 'plan-dependent',
        cites: [S.sdcl18A, S.cfr433, S.claimManual, S.tricare, S.champva],
        verifyVia: 'Ask Cigna/Evernorth at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in South Dakota?', a: 'Yes, under national policy EN0499 for ASD, with South Dakota’s mandate layered on for the plans it reaches. Self-funded employer plans and ACA individual and small-group plans follow their own documents.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in South Dakota?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'Does a BCBA need a South Dakota license to bill Cigna?', a: 'Yes. South Dakota requires a behavior-analyst license to practice ABA in the state (SDCL 36-38-6), including by telehealth (SDCL 34-52-2).' },
      { q: 'What is Cigna’s timely filing limit?', a: 'Evernorth considers claims submitted within 90 days of the date of service, unless your Provider Agreement or a longer state limit says otherwise. Payment appeals are due within 180 days.' },
      { q: 'What does Cigna pay for ABA in South Dakota?', a: 'Cigna publishes no ABA rates; the fee schedule is Exhibit A of your Evernorth Provider Agreement (Provider Services 800.926.2273). South Dakota Medicaid’s 97153 rate ($21.73 per 15 minutes) is the public benchmark.' },
    ],
  },

  'unitedhealthcare-south-dakota': {
    slug: 'unitedhealthcare-south-dakota',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + South Dakota’s SDCL 58-17 mandate; no SD state supplement, no SD Medicaid plan.',
    assessmentPA: {
      value: 'Required: Optum’s ABA Supplemental Clinical Criteria say "Prior authorization is required for ABA" unless otherwise specified or mandated by contract or law',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required; the review interval is set per authorization, and use below 80% of authorized hours draws review',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express support: ask what review interval will be set on this member’s ABA treatment authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5-TR ASD confirmed by the diagnosing clinician with at least one validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in South Dakota',
    state: 'SD', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · South Dakota',
    h1: 'UnitedHealthcare / Optum ABA coverage in South Dakota: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in South Dakota: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for South Dakota families: Optum’s ABA criteria and prior authorization, the three-code commercial telehealth list, South Dakota’s SDCL 58-17-154 autism mandate (floors through age 18), state licensure and what intake should verify.',
    intro: [
      'For an intake team in South Dakota, a UnitedHealthcare card means three layers: Optum Behavioral Health’s national ABA criteria, South Dakota’s autism mandate, and the plan type, which decides whether the mandate applies. South Dakota Medicaid has no managed care plans, so a UHC card here is commercial (or Medicare).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'SDCL 58-17-154 to 58-17-162 (SL 2015, ch 250; plan years from 1/1/2016)' },
      { label: 'Mandate age', value: 'Coverage duty names no age limit; minimum annual benefits run through age 18 only' },
      { label: 'Mandate caps', value: 'Plans may cap ABA, but not below $36,000/yr through age 6, $25,000 ages 7–13, $12,500 ages 14–18' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; ACA individual and small-group (EHB) plans; the State of South Dakota employee plan' },
      { label: 'Licensure', value: 'Yes: SDCL 36-38, behavior analysts licensed by the SD Board of Social Work Examiners' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in South Dakota',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026). Prior authorization is required, continued-service review looks hard at use below 80% of authorized hours, and direct case supervision runs 1–2 hours for every 10 hours of direct treatment, consistent with CASP standards. Optum’s ABA State Mandates supplement lists Arizona, California, Connecticut, Florida, Massachusetts, New Jersey, New York, Ohio, Pennsylvania and Virginia. South Dakota is not there, so no South Dakota-specific criteria modify the commercial policy.',
        ],
        cites: [S.optumSCC, S.optumSM],
      },
      {
        h2: 'The South Dakota mandate: what it guarantees',
        body: [SD_MANDATE_BODY],
        cites: [S.sdclAba],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [SD_LICENSURE_BODY],
        cites: [S.sdcl3638, S.bacbLic, S.sdclCred, S.feeABA],
      },
      {
        h2: 'Can an out-of-state BCBA treat a UnitedHealthcare member in South Dakota?',
        body: [SD_OUT_OF_STATE_BODY],
        cites: [S.sdcl3638, S.sdcl3452, S.aetnaOM, S.aetnaGuide],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA, and what are the claim deadlines?',
        body: [
          'UnitedHealthcare publishes no ABA rate table; Optum pays from the contract. Optum’s National Network Manual (effective Sept. 1, 2026) defines the "Fee Maximum" as the most a participating provider may be paid for a service, adding that "Reimbursement to clinicians is based upon licensure rather than degree." Optum’s commercial ABA Reimbursement Policy (2022RP501A) puts the credential level on each line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a doctoral-level provider. It also says "There is no CPT code for reporting indirect services separately," so indirect work is bundled into the direct codes. Claims information "must be received by Optum no more than 90 calendar days from the date of service, or as allowed by state or federal law or the member’s specific benefit plan." For insured South Dakota plans, the prompt-pay law requires a clean claim to be paid within 30 days electronic or 45 days paper (SDCL 58-12-20). For a public benchmark, South Dakota Medicaid pays 97153 at $21.73 per 15 minutes.',
        ],
        cites: [S.optumNNM, S.optumReimb, S.sdclPrompt, S.feeABA],
      },
    ],
    collect: [
      { title: 'Plan type', desc: 'Insured large-group or grandfathered (mandate applies) vs. ACA individual or small-group, self-funded ERISA or the State employee plan.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification on Provider Express.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD and severity level, confirmed with a validated tool (ADI-R, ADOS-2 and others). Optum asks for the instrument.' },
      { title: 'Physician or psychologist order', desc: 'Under the SD mandate, treatment is care ordered by a licensed physician or psychologist.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumReimb, S.optumNNM, S.sdclAba, S.sdcl3638, S.sdcl3452, S.sdclCred, S.sdclTele, S.sdclPrompt, S.sdcl17H, S.sdcl17I, S.sdcl18A, S.bacbLic, S.erisa, S.feeABA, S.claimManual],
    deliveryRules: {
      supervision: {
        value: 'Consistent with CASP standards, "direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week." Optum does not recommend parents serving as their own child’s RBT. In South Dakota the supervising analyst must hold the state license (SDCL 36-38-6), and supervised technicians must pass a fingerprint background check (36-38-25).',
        status: 'verified',
        cites: [S.optumSCC, S.sdcl3638],
      },
      concurrentBilling: {
        value: 'Not addressed. The SCC define direct case supervision but do not state whether 97153 and 97155 may be billed for the same time.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum Provider Express National Network Manual and the participating-provider agreement, or a written coding determination from Optum.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap. Requested hours must be justified by documented clinical need; at continued-service review, use of authorized hours below 80% must be explained.',
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
        value: 'Not covered: services that are not ABA, "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA; coordination with the school and IEP is allowed. SDCL 58-17-161 leaves IEP and IFSP obligations untouched.',
        status: 'verified',
        cites: [S.optumSCC, S.sdclAba],
      },
      billAsProvider: {
        value: 'Each claim line carries the rendering credential: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a doctoral-level provider. State regulatory requirements "may supplement, modify or supersede" the policy, and South Dakota requires the behavior-analyst license.',
        status: 'verified',
        cites: [S.optumReimb, S.sdcl3638],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion; the member’s benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.sdclAba],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish plan type first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with severity level using validated tools. Use below 80% of authorized hours triggers review.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'A state-licensed physician, psychologist, or other state-licensed clinician qualified to diagnose under DSM-5-TR.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool from Optum’s non-exhaustive list, which includes formal diagnostic tools such as ADI-R and ADOS/ADOS-2.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral; the SCC require prior authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.sdclAba],
      },
      telehealth: {
        value: 'Three codes. Optum’s Telehealth Billing guide (updated September 2025) says for commercial plans: "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157." The 97151 assessment and technician 97153 are not on that list. Bill POS 02 or 10. The SCC add that telehealth options "are not intended to supplant" in-person service.' + SD_TELE_STATUTE + ' Ask Optum how it applies the three-code list to an insured South Dakota plan.',
        status: 'verified',
        cites: [S.optumTele, S.optumSCC, S.sdclTele, S.sdcl3452],
      },
      authTurnaround: {
        value: SD_AUTH_TURNAROUND + ' UnitedHealthcare/Optum publishes no South Dakota-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.sdcl17H, S.sdcl17I, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is insured (South Dakota-regulated) or self-funded (ERISA), and what reauthorization lead time Optum expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: SD_COB,
        status: 'plan-dependent',
        cites: [S.sdcl18A, S.cfr433, S.claimManual, S.tricare, S.champva],
        verifyVia: 'Ask UnitedHealthcare/Optum at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in South Dakota?', a: 'Yes, under Optum’s national ABA criteria for ASD, with South Dakota’s mandate layered on for the plans it reaches. Self-funded employer plans and ACA individual and small-group plans follow their own documents.' },
      { q: 'Does Optum have South Dakota-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement does not list South Dakota, so the national criteria apply.' },
      { q: 'Is UnitedHealthcare a South Dakota Medicaid plan?', a: 'No. South Dakota Medicaid has no managed care plans; DSS authorizes and pays ABA directly.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in South Dakota?', a: 'Optum’s commercial telehealth guide allows only 97155, 97156 and 97157 by telehealth, billed POS 02 or 10. Insured South Dakota plans are also subject to SDCL 58-17-168, which bars excluding a service solely because it is delivered by telehealth, so ask Optum how it applies the list.' },
      { q: 'What is Optum’s timely filing limit?', a: '90 calendar days from the date of service, unless state or federal law or the member’s plan allows longer.' },
    ],
  },
};

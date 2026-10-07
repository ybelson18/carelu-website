import type { PayerConfig, PayerSource } from './types.js';

/* South Carolina — researched October 2026 from primary sources only.
   scdhhs.gov, scstatehouse.gov, doi.sc.gov, absolutetotalcare.com, selecthealthofsc.com,
   healthybluesc.com, assets.humana.com and southcarolinablues.com all answered plain
   curl with a browser user agent. provider.scdhhs.gov (the old manual host) fails TLS
   verification, so the July 1, 2026 ASD manual is cited at its scdhhs.gov address.
   molinahealthcare.com returns its ~384 KB "Page Not Found" wall for the South Carolina
   PDFs; the Molina documents below were read in full from Molina’s own media paths on
   its other hosts (myhealthinhand.molinahealthcare.com, medicare.centralhealthplan.com).
   South Carolina does NOT license behavior analysts: Title 40, Chapter 75 (the LLR
   counseling board) contains no behavior-analyst article, the 2021 licensure bill
   (H. 3731) died in committee, and the BACB licensure table does not list the state. */

const S: Record<string, PayerSource> = {
  asdManual: { title: 'SCDHHS — Autism Spectrum Disorder (ASD) Services Provider Manual (July 1, 2026)', url: 'https://www.scdhhs.gov/sites/dhhs/files/documents/ASD%20Services%20Provider%20Manual%207.1.26.pdf' },
  asdTraining: { title: 'SCDHHS — ASD Services Provider Manual Policy Updates, provider training (July 9, 2026)', url: 'https://scdhhs.gov/sites/dhhs/files/ASD%20provider%20training%20_%20July%202026%20Update.pdf' },
  asdBulletin: { title: 'SCDHHS Medicaid Bulletin MB# 26-015 — Updates to ASD Services Provider Manual (May 15, 2026; effective July 1, 2026)', url: 'https://www.scdhhs.gov/communications/updates-asd-services-provider-manual' },
  asdFee: { title: 'SCDHHS — ASD Services Fee Schedule (file dated 7-1-2026; page header "Effective: 8/13/2026")', url: 'https://www.scdhhs.gov/sites/dhhs/files/ASD%20Services%20FEE%20SCHEDULE%20%207-1-2026.pdf' },
  pabm: { title: 'SCDHHS — Provider Administrative and Billing Manual (July 1, 2026)', url: 'https://www.scdhhs.gov/sites/dhhs/files/Provider%20Administrative%20and%20Billing%20Guide.pdf' },
  mcoList: { title: 'SCDHHS — Managed Care Organizations (the five Healthy Connections MCOs)', url: 'https://www.scdhhs.gov/providers/managed-care/managed-care' },
  carveIn: { title: 'SCDHHS — Managed Care Carve-in (Jan. 1, 2026; MCO prior-authorization and provider help lines)', url: 'https://scdhhs.gov/partners/managed-care/managed-care-carve' },
  sc280: { title: 'S.C. Code § 38-71-280 — Autism spectrum disorder; coverage; eligibility for benefits (2007 Act No. 65, "Ryan’s Law")', url: 'https://www.scstatehouse.gov/code/t38c071.php' },
  doiBull: { title: 'S.C. Department of Insurance Bulletin 2025-09 — § 38-71-280 maximum benefit for behavioral therapy ($73,400 for 2026)', url: 'https://doi.sc.gov/DocumentCenter/View/15114/Autism-Bulletin-2025-09-for-2026-effective' },
  sc3859: { title: 'S.C. Code §§ 38-59-200 to -270 — Health Care Financial Recovery and Protection Act (clean claims, prompt pay, overpayment recovery)', url: 'https://www.scstatehouse.gov/code/t38c059.php' },
  sc3870: { title: 'S.C. Code Title 38, Chapter 70 — Utilization review', url: 'https://www.scstatehouse.gov/code/t38c070.php' },
  reg6943: { title: 'S.C. Code of Regulations Chapter 69 (Reg. 69-43, Group Health Insurance Coordination of Benefits, § 5 order of benefits)', url: 'https://www.scstatehouse.gov/coderegs/Chapter%2069.pdf' },
  t40c75: { title: 'S.C. Code Title 40, Chapter 75 — Professional counselors, MFTs, addiction counselors and psycho-educational specialists (no behavior-analyst article)', url: 'https://www.scstatehouse.gov/code/t40c075.php' },
  llrCou: { title: 'S.C. LLR — Board of Examiners for Licensure of Professional Counselors, Marriage and Family Therapists, Addiction Counselors and Psycho-Educational Specialists', url: 'https://llr.sc.gov/cou/' },
  h3731: { title: 'H. 3731 (2021–2022) — behavior-analyst licensure bill; died in House Medical, Military, Public and Municipal Affairs Committee', url: 'https://www.scstatehouse.gov/sess124_2021-2022/bills/3731.htm' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (South Carolina not listed)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  cfr147: { title: '45 CFR 147.136 — Internal claims and appeals for insured group and individual coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-147/section-147.136' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer in double coverage', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  atcPA: { title: 'Absolute Total Care — Medicaid Prior Authorization Requirements (list effective 12/31/2025; approved 03/05/2026)', url: 'https://www.absolutetotalcare.com/content/dam/centene/absolute-total-care/2026-assets/SC_AbsTotalCare_11_Medicaid_PriorAuthReq_FINAL_R.pdf' },
  atcPM: { title: 'Absolute Total Care — Medicaid Provider Manual (published January 2026)', url: 'https://www.absolutetotalcare.com/content/dam/centene/absolute-total-care/2026-assets/2026-provider-docs/ATC%20SC%20Medicaid%20Provider%20Manual%20JAN%202026_FINAL.pdf' },
  atcASD: { title: 'Absolute Total Care — Autism Spectrum Disorder (ASD) Authorization Form (2023 edition)', url: 'https://www.absolutetotalcare.com/content/dam/centene/absolute-total-care/test/Medicaid-Provider-ASDAuthForm-2023.pdf' },
  atcPreAuth: { title: 'Absolute Total Care — Medicaid Pre-Auth Check (code lookup)', url: 'https://www.absolutetotalcare.com/providers/preauth-check/medicaid-pre-auth.html' },
  hbPOM: { title: 'Healthy Blue (BlueChoice HealthPlan) — Provider Administrative Office Manual (effective Jan. 1, 2026; updated April 2026)', url: 'https://www.healthybluesc.com/sites/default/files/BCMC_221867_25_Healthy%20Blue%20Provider%20Administrative%20Office%20Manual.pdf' },
  molPA: { title: 'Molina Healthcare South Carolina Medicaid — Pre-Service Review Guide (effective 02/01/2026; Molina media path)', url: 'https://medicare.centralhealthplan.com/-/media/Molina/PublicWebsite/PDF/Providers/sc/medicaid/prior-authorization-pre-service-review-guide.pdf' },
  molPM: { title: 'Molina Healthcare of South Carolina — Medicaid Provider Manual 2026 (Molina media path)', url: 'https://myhealthinhand.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/sc/medicaid/manual_sc_ProviderHandbook.pdf' },
  shPM: { title: 'Select Health of South Carolina (First Choice) — Health Care Professional and Provider Manual (updated August 2026)', url: 'https://www.selecthealthofsc.com/content/dam/first-choice/selecthealthofsc/pdf/provider/provider-manual.pdf.coredownload.inline.pdf' },
  shPA: { title: 'Select Health of South Carolina — 2026 Prior Authorization Information (revised January 2026)', url: 'https://www.selecthealthofsc.com/pdf/provider/resources/prior-authorization-grid.pdf' },
  shChk: { title: 'Select Health of South Carolina — ASD Provider Checklist for Treatment Authorization Requests', url: 'https://www.selecthealthofsc.com/content/dam/first-choice/selecthealthofsc/pdf/provider/forms/autism-spectrum-disorder-provider-checklist.pdf.coredownload.inline.pdf' },
  shReq: { title: 'Select Health of South Carolina — ASD Treatment Request Form', url: 'https://www.selecthealthofsc.com/content/dam/first-choice/selecthealthofsc/pdf/provider/forms/autism-spectrum-disorder-treatment-request-form.pdf.coredownload.inline.pdf' },
  shClaim: { title: 'Select Health of South Carolina — Claim Filing Instructions (March 2026)', url: 'https://www.selecthealthofsc.com/content/dam/first-choice/selecthealthofsc/pdf/provider/claim-filing-manual.pdf.coredownload.inline.pdf' },
  humPM: { title: 'Humana Healthy Horizons in South Carolina — 2026 Provider Manual (effective July 1, 2026)', url: 'https://assets.humana.com/is/content/humana/2026_SC_Provider_Manual_July2026pdf' },
  humPMnov: { title: 'Humana Healthy Horizons in South Carolina — 2026 Provider Manual (effective November 1, 2026)', url: 'https://assets.humana.com/is/content/humana/ProviderManual_2026pdf' },
  humABA: { title: 'Humana Healthy Horizons in South Carolina — ABA Behavioral Health Authorization Request Form', url: 'https://assets.humana.com/is/content/humana/SC_ABA_Behavioral_Health_Authorizationpdf' },
  humPApage: { title: 'Humana — South Carolina Medicaid prior authorization information and forms', url: 'https://provider.humana.com/medicaid/south-carolina-medicaid/prior-authorization' },
  humBill: { title: 'Humana Healthy Horizons in South Carolina — Provider Billing and Claims Guide', url: 'https://assets.humana.com/is/content/humana/SC_PROV_Billing_Guide_SCHM43JENpdf' },
  humBH: { title: 'Humana Healthy Horizons in South Carolina — Behavioral Health Quick Reference Guide', url: 'https://assets.humana.com/is/content/humana/SC_PROV_Medicaid_Provider_Behavioral_Health_Guidancepdf' },
  aetnaCPB: { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; Exhibit A covers Maryland only)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / office manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  aetnaTele: { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (PCOMM-2025-225, March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026; incl. South Carolina Regulatory Addendum)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (annual review 7/2026; South Carolina not listed)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumNNM: { title: 'Optum National Network Manual (effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  bcCAM: { title: 'BlueCross BlueShield of South Carolina — Medical Policy CAM 387, Applied Behavioral Analysis Services (interim review 08/07/2026)', url: 'https://www.southcarolinablues.com/web/public/brands/medicalpolicy/external-policies/applied-behavioral-analysis-services/' },
  bcPAList: { title: 'BlueCross BlueShield of South Carolina — Services That Require Prior Authorization, standard list (effective October 2025)', url: 'https://www.southcarolinablues.com/content/dam/commercial-web-public/sc/blues/en/providers/pdfs/prior-authorization/Prior%20Authorization%20List%20SC_October%202025.pdf' },
  bcPApage: { title: 'BlueCross BlueShield of South Carolina — Prior Authorization (autism PA requests go to CBA)', url: 'https://www.southcarolinablues.com/en/home/providers/policies-and-authorizations/prior-authorization.html' },
  cbaPre: { title: 'Companion Benefit Alternatives (CBA) — Request Preauthorization', url: 'https://www.companionbenefitalternatives.com/providers/request-preauthorization' },
  cbaJoin: { title: 'Companion Benefit Alternatives (CBA) — Join the Network', url: 'https://www.companionbenefitalternatives.com/providers/join-network' },
  cbaClaims: { title: 'Companion Benefit Alternatives (CBA) — Claims 101', url: 'https://www.companionbenefitalternatives.com/providers/claims-101' },
};

/* ---- Shared South Carolina Medicaid rules (from the July 1, 2026 ASD manual) ---- */
const SC_MCO_RESPONSIBLE =
  'SCDHHS says in its July 2026 manual bulletin that the "Medicaid managed care organizations (MCOs) are responsible for the authorizations, coverage and reimbursement" of ASD services "for members enrolled in an MCO," and the ASD manual itself says that for MCO members "providers must follow the member’s MCO’s policies and requirements."';

const SC_TELEHEALTH_STATE =
  'Under the SCDHHS ASD manual (July 1, 2026), only two ABA codes may be delivered by telehealth: 97156 (family guidance), with the GT modifier and no extra authorization, and 97155 (protocol modification), only when the QIO approves it during prior authorization, for up to 25% of authorized and rendered 97155 units, for a member receiving in-home ABA in a rural location with limited access. Telehealth must be synchronous audio and video, GT goes in the secondary modifier position, and POS is 02 or 10. "The BIA can not be completed by telehealth," and 97152, 97153, 97154, 97157, 97158, 0362T and 0373T are not deliverable by telehealth. An ASD diagnosis made by telehealth is not valid.';

const SC_SUPERVISION_STATE =
  'BACB supervision applies: "each RBT must be supervised for a minimum of 5% of the hours spent providing ABA services per month," with at least two face-to-face, real-time contacts a month, one of which observes the RBT with the member; that professional supervision is not billable. Caseload caps: a BCBA may carry 12 cases (16 with a BCaBA), a BCaBA 12, where 30–40 hours a week is one case, 10–25 hours half a case and under 10 hours a quarter case. A behavior technician gets one 90-day grace period to earn the RBT credential, and may work only in a clinic with a BCBA on site during it.';

const SC_DX_PROVIDERS_STATE =
  'The comprehensive diagnostic assessment must be administered directly by a licensed physician (MD/DO), licensed psychologist (PhD/PsyD) or licensed psycho-educational specialist (LPES). A medical-care-home physician may confirm a prior diagnosis, or make an initial diagnosis for a medically uncomplicated child aged 18–36 months. SCDHHS "does NOT accept autism evaluations completed by any other provider type," naming nurse practitioners, physician assistants, LISWs, ABA providers and ST/OT/PT; a school IDEA designation of ASD or a BHDD-OIDD autism eligibility determination counts once a physician confirms it. Diagnoses made by telehealth are not valid.';

/* ---- Shared South Carolina commercial layer ---- */
const SC_MANDATE_BODY =
  'South Carolina’s autism mandate, S.C. Code § 38-71-280 (2007 Act No. 65, known as Ryan’s Law), requires a "health insurance plan" to "provide coverage for the treatment of autism spectrum disorder." The definition is narrow in three ways. It reaches group policies and group benefit plans plus the State Health Plan, and it expressly excludes the individual market, individually underwritten plans and plans sold to small employers; self-funded employer plans answer to ERISA instead. It defines autism spectrum disorder by three older DSM labels (autistic disorder, Asperger’s syndrome, PDD-NOS). And the child must be "diagnosed with autistic spectrum disorder at age eight or younger," with benefits provided to "any eligible person under sixteen years of age." Coverage "is limited to treatment that is prescribed by the insured’s treating medical doctor in accordance with a treatment plan," which must state the diagnosis, treatment by type, frequency and duration, goals, the update schedule and the doctor’s signature; the plan "may only request an updated treatment plan once every six months." Dollar limits, deductibles and coinsurance may not be less favorable than for physical illness, but "Coverage for behavioral therapy is subject to a fifty thousand dollar maximum benefit per year," adjusted each January 1 by CPI. The Department of Insurance set that cap at $73,400 for calendar year 2026 (Bulletin 2025-09). The statute lets plans keep coordination of benefits, participating-provider rules, utilization review and "restrictions on services provided by family or household members."';

const SC_LICENSURE_BODY =
  'South Carolina does not license behavior analysts. Title 40, Chapter 75 of the Code (the LLR board for counselors, marriage and family therapists, addiction counselors and psycho-educational specialists) has no behavior-analyst article, the 2021 licensure bill (H. 3731) never left committee, and the BACB’s licensure table does not list the state. Practically, BACB certification is the credential every payer checks. Two payer-level location rules matter more than any license. SC Medicaid requires ASD providers, including those working by telehealth, to be located within the South Carolina Medical Service Area (SCMSA; SCDHHS describes it as within 25 miles of the state border). BlueCross BlueShield of South Carolina’s ABA policy says the BCBA completing the assessment "must be located in the same state as the member or in a contiguous county." On claims, the state prompt-pay law (S.C. Code § 38-59-230) makes insurers pay a clean claim within 20 business days if filed electronically and 40 business days on paper, with interest after that; a "clean claim" must be received "within one hundred twenty business days" of the service. Overpayment recovery may not start more than 18 months after payment, except for fraud, self-insured plans or government programs. Commercial ABA rates are negotiated and unpublished; the public benchmark is the SC Medicaid ASD fee schedule (97153 $14.88 per 15-minute unit).';

const MANDATE_AGE_TAIL =
  ' For a South Carolina group plan subject to S.C. Code § 38-71-280, coverage runs to "any eligible person under sixteen years of age" who was diagnosed at age eight or younger, with behavioral therapy capped at $73,400 for 2026 (DOI Bulletin 2025-09). Individual, small-employer and self-funded plans are outside the statute.';

const MANDATE_REFERRAL_TAIL =
  ' For a group plan subject to S.C. Code § 38-71-280, covered treatment must be "prescribed by the insured’s treating medical doctor in accordance with a treatment plan" signed by that doctor; the plan may ask for an updated plan only once every six months. Individual, small-employer and self-funded plans are outside the statute.';

const COMMERCIAL_TURNAROUND =
  'No South Carolina statute read sets a prior-authorization decision deadline for commercial plans. Title 38, Chapter 70 (utilization review) sets minimum standards for review programs, including notice of an adverse decision "within five business days" and a reconsideration or appeal procedure, but no clock for deciding a request. Federal claims rules therefore set the outer limit: ERISA plans must decide a pre-service claim "not later than 15 days after receipt of the claim" (one 15-day extension; urgent care within 72 hours), and insured group coverage must follow the same rule under 45 CFR 147.136.';

const COMMERCIAL_COB =
  'For a child on two group plans, South Carolina Regulation 69-43 sets the birthday rule: when parents are not separated or divorced, "the benefits of the plan of the parent whose birthday falls earlier in a year are determined before those of the plan of the parent whose birthday falls later" (month and day only); for separated or divorced parents the custodial parent’s plan pays first unless a court decree assigns health costs to the other parent. The regulation binds insured group plans; a self-funded plan sets its own order. If the child also has SC Medicaid, the commercial plan pays first: Medicaid is payer of last resort (42 CFR 433.139), and SCDHHS asks for its own ASD authorization only "if Medicare or the primary carrier denied the service or the service is considered not covered." TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).';

export const southCarolinaPayers: Record<string, PayerConfig> = {
  'south-carolina-medicaid': {
    slug: 'south-carolina-medicaid',
    cardDesc: 'Healthy Connections covers ABA under 21 through the ASD Services manual; five MCOs run it for most children, Acentra (QIO) authorizes FFS, and the July 2026 manual narrowed telehealth.',
    assessmentPA: {
      value: 'Fee-for-service: no. "97151 does not require prior authorization," but SCDHHS reviews and can recoup it if the member cannot start 97153 within one month or the BIA was done by telehealth. 97152 does need prior authorization. MCO members follow their plan',
      status: 'verified',
      cites: [S.asdManual, S.asdTraining],
    },
    treatmentPA: {
      value: 'Fee-for-service: yes. "All ASD services must be determined medically necessary and have a prior authorization by the QIO" (Acentra), reviewed against InterQual’s ABA criteria; authorizations last six months',
      status: 'verified',
      cites: [S.asdManual],
    },
    dxRequired: {
      value: 'Yes, or a recognized equivalent: a DSM diagnosis of ASD, an IDEA school designation of ASD or a BHDD-OIDD autism eligibility determination confirmed by a physician; children 18–36 months at risk can be presumptively eligible until age 6',
      status: 'verified',
      cites: [S.asdManual],
    },
    payer: 'South Carolina Healthy Connections Medicaid',
    state: 'SC', kind: 'state-medicaid',
    pill: 'Payer Guide · South Carolina Medicaid',
    h1: 'South Carolina Medicaid ABA coverage: the intake guide.',
    metaTitle: 'South Carolina Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How South Carolina Healthy Connections Medicaid covers ABA: the July 2026 ASD Services manual, who may diagnose, QIO prior authorization, the narrowed telehealth rules, the published fee schedule, the five MCOs, and the in-state (SCMSA) provider rule.',
    intro: [
      'South Carolina Healthy Connections Medicaid covers applied behavior analysis for members through age 20 under its Autism Spectrum Disorder (ASD) Services Provider Manual. A new edition took effect July 1, 2026: it tightened who may diagnose, cut back ABA telehealth, added required assessment instruments, and treats parent training (97156) as a required part of every ABA authorization.',
      'Most children are enrolled in one of five managed care plans: Absolute Total Care, Healthy Blue by BlueChoice, Humana Healthy Horizons, Molina Healthcare and First Choice by Select Health. The plan then authorizes and pays for ABA. Fee-for-service members go through SCDHHS’s quality improvement organization, Acentra. In both cases the state manual is the baseline, and three of the five plans say they follow it.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, ages 0–20 (through the last day of the month of the 21st birthday)' },
      { label: 'Structure', value: 'Five MCOs authorize and pay for enrolled members; FFS members use the QIO (Acentra)' },
      { label: 'FFS prior auth', value: 'All ABA treatment via Acentra, InterQual criteria, six-month authorizations; 97151 has no PA' },
      { label: 'FFS rates (per 15 min)', value: '97151 $23.51 · 97152 $20.50 · 97153 $14.88 · 97154 $9.10 · 97155/97156 $21.25 · 97157 $13.31 · 97158 $13.00 · 0362T $27.95 · 0373T $30.00' },
      { label: 'Who may diagnose', value: 'MD/DO, PhD/PsyD psychologist or LPES, in person; not NPs, PAs, LISWs or ABA providers' },
      { label: 'Telehealth', value: '97156 (GT) allowed; 97155 only with QIO approval, up to 25%; the 97151 assessment never' },
      { label: 'Licensure', value: 'None: SC does not license behavior analysts; BACB certification governs' },
      { label: 'Where providers must be', value: 'Inside the SC Medical Service Area, telehealth included' },
    ],
    sections: [
      {
        h2: 'Who is covered, and who must make the diagnosis',
        body: [
          'The manual covers "eligible Medicaid members age 0 through 20 years (up to the last day of the month of the member’s 21st birthday)" who have one of three things: a DSM diagnosis of ASD at the time of the initial assessment, an IDEA designation meeting the SC Department of Education standard for autism "confirmed by a physician involved with the member’s care," or an autism eligibility determination from the Department of Behavioral Health and Developmental Disabilities’ Office of Intellectual and Developmental Disabilities (BHDD OIDD), also physician-confirmed. Under EPSDT, a child aged 18–36 months whose risk of ASD is documented by IDEA Part C (BabyNet) or by a physician using RITA-T or STAT can be presumptively eligible for ABA, but that eligibility "will lapse" without a DSM diagnosis before the child’s 6th birthday.',
          SC_DX_PROVIDERS_STATE + ' The comprehensive diagnostic assessment must include a DSM checklist with severity levels and an in-person ADI-R, ADOS or CARS ("Autism measures administered via Telehealth are not considered valid"), plus a cognitive or developmental measure. An out-of-state or private evaluation must meet the same standard. New for treatment requests from July 1, 2026: ABA is not reimbursable when the ABA provider is affiliated with the clinic or group that made the diagnosis.',
        ],
        cites: [S.asdManual, S.asdTraining],
      },
      {
        h2: 'Prior authorization: the QIO, InterQual, and what the packet needs',
        body: [
          'For fee-for-service members, "All ASD services must be determined medically necessary and have a prior authorization by the QIO." The QIO is Acentra (scdhhs.acentra.com; phone (855) 326-5219; fax (855) 300-0082), which "will use InterQual’s Applied Behavior Analysis Treatment Criteria," and "All prior authorizations will be valid for a period of six months." The exception is the assessment: "97151 does not require prior authorization," though SCDHHS reviews and can recoup it if the member cannot start 97153 within one month of the assessment, if the assessment was done by telehealth, or if the provider has no capacity to deliver the treatment it recommends. 97152 requires prior authorization.',
          'An initial request needs the diagnostic documentation, the behavior identification assessment (BIA), a functional behavior assessment whenever maladaptive behavior is targeted, more than 15 hours a week of 97153 is requested, or services are planned at school, current ST/OT/PT treatment plans, and the individualized plan of care (IPOC). The BIA must include a Vineland interview (all domains), the Behavioral Health Index, a QABF or FAST administered to the caregiver, and at least one skills assessment (PEAK, VB-MAPP with barriers and transitions, ABLLS-R, SRS, AFLS, EFL, ESDM or PAS-BOS). Every request must show 97153, 97155 and 97156 together: SCDHHS will not authorize ABA "without routine and consistent delivery of 97156," and requires at least one hour of 97156 in each month of 97153. Continued requests go in 30 to 10 days before the authorization ends.',
        ],
        cites: [S.asdManual, S.asdTraining],
      },
      {
        h2: 'Managed care: the five plans own authorization and payment',
        body: [
          SC_MCO_RESPONSIBLE + ' SCDHHS lists five MCOs: Absolute Total Care, BlueChoice (Healthy Blue), Humana Healthy Horizons, Molina and Select Health (First Choice). Its carve-in page gives each plan’s prior-authorization and provider help line: Absolute Total Care (866) 433-6041, Healthy Blue (866) 757-8286, Molina (855) 237-6178, First Choice (888) 559-1010 and Humana (866) 432-0001. Healthy Blue, First Choice and Humana say in their own manuals that they follow the SCDHHS ASD manual; Absolute Total Care and First Choice require authorization even for the 97151 assessment, which fee-for-service does not.',
        ],
        cites: [S.asdBulletin, S.asdManual, S.mcoList, S.carveIn],
      },
      {
        h2: 'What does South Carolina Medicaid pay for ABA?',
        body: [
          'The ASD Services Fee Schedule (file dated 7-1-2026; each page reads "Effective: 8/13/2026") pays, per 15-minute unit and at the same rate for BCBA, BCBA-D or BCaBA: 97151 $23.51, 97152 $20.50, 0362T $27.95, 97153 $14.88, 97154 $9.10, 97155 $21.25 (GT telehealth "Only with Prior Authorization," priced the same), 0373T $30.00, 97156 $21.25 (GT priced the same), 97157 $13.31 and 97158 $13.00. Non-ABA ASD treatment by a licensed independent practitioner (H2019) pays $14.55. RBTs do not bill on their own: "RBT must bill under a BCBA-D, BCBA, or BCaBA." The MCOs pay contracted rates, which are not published.',
        ],
        cites: [S.asdFee, S.asdManual],
      },
      {
        h2: 'Can an out-of-state BCBA treat a South Carolina Medicaid member, including by telehealth?',
        body: [
          'Not from outside the region. South Carolina does not license behavior analysts, so there is no state license to obtain, but the Medicaid rule is about location: "Except as required by 42 CFR 431.52, providers of ASD services must be located within the South Carolina Medical Service Area (SCMSA)," and ABA providers must also be BACB-certified and Medicaid-enrolled. SCDHHS’s July 2026 training adds that "Providers delivering ABA services via telehealth must also be within the SCMSA (within 25 miles of South Carolina border)," and that services billed by providers outside it are subject to recoupment. Telehealth itself is limited to 97156 and, with QIO approval, part of 97155.',
        ],
        cites: [S.asdManual, S.asdTraining, S.bacbLic, S.t40c75],
      },
      {
        h2: 'Claims: timely filing, NPIs, modifiers and appeals',
        body: [
          'SCDHHS pays only clean claims "received and entered into the claims processing system within one year from the date of service"; retroactive-eligibility claims get six months from the eligibility add date (three years outside). Enrolled providers may not bill under their NPI for a non-enrolled provider’s services, except for services delivered under their supervision, and RBT services bill under the supervising BCBA-D, BCBA or BCaBA. Every clinical service note must be signed by the enrolled BCBA, BCaBA or LIP under whose NPI the service was billed, and by the BT or RBT who rendered it; SCDHHS does not let a group name a general "authorized signee." Telehealth lines carry GT in the second modifier position. Units follow the Medicare eight-minute rule. A provider appeal must be filed within 30 days of the notice of adverse action or of the remittance advice showing a reconsideration denial, whichever is later. The ASD manual and the billing manual do not mention electronic visit verification for ABA.',
        ],
        cites: [S.pabm, S.asdManual, S.asdTraining],
      },
    ],
    collect: [
      { title: 'Which Medicaid card', desc: 'Absolute Total Care, Healthy Blue, Humana, Molina, First Choice, or fee-for-service. The plan owns authorization and payment.' },
      { title: 'Diagnostic report from an accepted clinician', desc: 'MD/DO, PhD/PsyD or LPES, in person, with ADI-R/ADOS/CARS and a DSM checklist; or a physician-confirmed IDEA or BHDD-OIDD autism determination.' },
      { title: 'Who made the diagnosis', desc: 'ABA is not reimbursable from a provider affiliated with the group that diagnosed the child (new requests from July 1, 2026).' },
      { title: 'School and therapy records', desc: 'Current IEP, FBA and BIP if school-based ABA is planned, plus ST/OT/PT treatment plans for the request.' },
      { title: 'Other insurance', desc: 'Commercial coverage goes first; the Medicaid authorization is needed only if the primary denies or does not cover ABA.' },
      { title: 'Caregiver availability', desc: 'In-home ABA requires an adult caregiver present the whole session, and 97156 parent training is required every month.' },
    ],
    sources: [S.asdManual, S.asdTraining, S.asdBulletin, S.asdFee, S.pabm, S.mcoList, S.carveIn, S.bacbLic, S.t40c75, S.cfr440, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: SC_SUPERVISION_STATE + ' BCaBAs must be supervised by a BCBA-D or BCBA and must disclose that supervision to the family in the consent form.',
        status: 'verified',
        cites: [S.asdManual, S.asdTraining],
      },
      concurrentBilling: {
        value: 'Limited. The manual excludes "Concurrent billing of 97153 with any other service" except as detailed in section 8, and "Two enrolled ABA providers billing at the same time under one CPT code." The July 2026 training spells out the exceptions: 97155 may be billed with 97153 when the notes show two providers each delivering a direct service to the member at the same time (not while teaching an RBT the initial protocol), and 97153 may run alongside 97156 when the RBT works with the child in a separate space from the BCBA training the caregiver. 0373T may not be billed with 97155, and 97152 may not be billed with any treatment code.',
        status: 'verified',
        cites: [S.asdManual, S.asdTraining],
      },
      dailyLimits: {
        value: 'Section 8 limits: 97151, 32 units a year and 12 a day; 97152, 21 units a day; 0362T, 16 a day; 97153, 160 units a week; 97154 and 97158, groups of 2–6 for up to 6 hours a day; 97155, up to 10% of rendered 97153 and no more than 64 units a month; 0373T, 32 a day; 97156, 96 units (24 hours) a year; 97157, 16 a day.',
        status: 'verified',
        cites: [S.asdManual],
      },
      noteSignature: {
        value: 'Each discrete service needs its own clinical service note, signed, titled and dated "by both the enrolled BCBA, BCaBA, or LIP as applicable, as well as the BT/RBT rendering the service," and records must be signed before the claim is filed. A BT also writes the date their 90-day grace period began. SCDHHS does not allow a group to designate a general "authorized signee," and notes may not be copied forward.',
        status: 'verified',
        cites: [S.asdManual, S.asdTraining],
      },
      placeOfService: {
        value: 'Home (POS 12), office/clinic (11), school (03, including daycare and preschool, only with prior authorization tied to a current IEP, FBA and BIP), telehealth (02/10, limited codes) and other community settings (99) only when the QIO approves them. In the home an adult caregiver must be present for the entire session and the technician must be a credentialed RBT or higher; uncredentialed BTs may work only in a clinic. Sporting events, camps and services during other medical appointments are excluded.',
        status: 'verified',
        cites: [S.asdManual, S.asdTraining],
      },
      billAsProvider: {
        value: 'The enrolled BCBA-D, BCBA or BCaBA (or LIP) is the billing provider: "RBT must bill under a BCBA-D, BCBA, or BCaBA," 0362T and 0373T are billed "by the qualified primary provider," and an enrolled provider may not use its NPI for a non-enrolled provider’s services except those delivered under its supervision. The QIO approval letter names the ASD provider’s NPI.',
        status: 'verified',
        cites: [S.asdManual],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Ages 0 through 20, "up to the last day of the month of the member’s 21st birthday." Presumptive eligibility (for at-risk children assessed at 18–36 months) lasts only until the 6th birthday unless a DSM diagnosis is documented.',
        status: 'verified',
        cites: [S.asdManual],
      },
      dxRecency: {
        value: 'No expiry on the diagnosis itself: it must meet DSM criteria "at the time of the initial assessment," and SCDHHS does not require re-diagnosis or repeat psychological testing. Prior school (DOE) and BHDD-OIDD determinations stay valid; other prior evaluations must meet the full diagnostic-assessment standard. The BIA instruments must be updated with every initial or continuing request.',
        status: 'verified',
        cites: [S.asdManual, S.asdTraining],
      },
      diagnosingProviders: {
        value: SC_DX_PROVIDERS_STATE,
        status: 'verified',
        cites: [S.asdManual, S.asdTraining],
      },
      diagnosticTools: {
        value: 'Comprehensive diagnostic assessment: one of ADI-R, ADOS or CARS administered in person by the diagnosing clinician, a DSM checklist with severity levels, and a standardized cognitive or developmental measure. Medical-care-home diagnosis (18–36 months): a developmental screen (e.g., ASQ), an at-risk primary autism screen (e.g., M-CHAT) and RITA-T of 18 or more or STAT of 3.0 or more. Presumptive eligibility: RITA-T of 12 or more or STAT of 2.00 or more.',
        status: 'verified',
        cites: [S.asdManual],
      },
      referral: {
        value: 'ASD services "must be recommended by a physician or other licensed practitioner of the healing arts." A member with an established diagnosis may also self-refer to an ABA provider, and a referral form belongs in the record.',
        status: 'verified',
        cites: [S.asdManual],
      },
      telehealth: {
        value: SC_TELEHEALTH_STATE + ' The member must be at a referring site inside the SCMSA, and the ABA provider must also be located in the SCMSA.',
        status: 'verified',
        cites: [S.asdManual, S.asdTraining, S.asdBulletin, S.asdFee],
      },
      authTurnaround: {
        value: 'The ASD manual sets no decision clock for the QIO. The federal fee-for-service floor applies: since January 1, 2026 the state agency must decide a standard request "in no case later than 7 calendar days after receiving the request" (extendable by up to 14 days) and an expedited one within 72 hours. Continued and annual requests go in 30 to 10 days before the authorization expires. MCO members follow their plan’s clock (42 CFR 438.210(d): 7 calendar days for rating periods starting on or after January 1, 2026).',
        status: 'verified',
        cites: [S.asdManual, S.cfr440, S.cfr438],
      },
      coordinationOfBenefits: {
        value: 'Medicaid is payer of last resort: providers "shall consider Medicaid the payer of last resort and bill any liable third-party insurance plan prior to billing Medicaid." For ASD services, members with Medicare or another payer "are only required to obtain a prior authorization if Medicare or the primary carrier denied the service or the service is considered not covered." EPSDT claims are exempt from up-front cost avoidance: if a provider chooses not to bill a liable third party, SCDHHS pays and recovers from that party itself. The one-year filing limit is not extended because of third-party billing.',
        status: 'verified',
        cites: [S.pabm, S.asdManual, S.cfr433],
      },
    },
    faq: [
      { q: 'Does South Carolina Medicaid cover ABA therapy?', a: 'Yes, for Healthy Connections members through age 20 under the ASD Services manual. Most children are in one of five managed care plans, which authorize and pay; fee-for-service members get authorization from the QIO, Acentra.' },
      { q: 'Who can diagnose autism for South Carolina Medicaid ABA?', a: 'A licensed physician (MD/DO), licensed psychologist (PhD/PsyD) or licensed psycho-educational specialist, in person, with ADI-R, ADOS or CARS. A primary care physician may confirm a prior diagnosis or diagnose a medically uncomplicated child aged 18–36 months. Evaluations by NPs, PAs, LISWs or ABA providers, and any telehealth diagnosis, are not accepted.' },
      { q: 'Does the ABA assessment need prior authorization?', a: 'Not for fee-for-service: 97151 has no prior authorization, but it is reviewed after payment, and the child must start treatment within a month. Absolute Total Care and First Choice do require authorization for the assessment, so check the member’s plan.' },
      { q: 'What does South Carolina Medicaid pay for ABA?', a: 'Per 15-minute unit on the 2026 ASD fee schedule: 97151 $23.51, 97152 $20.50, 97153 $14.88, 97154 $9.10, 97155 and 97156 $21.25, 97157 $13.31, 97158 $13.00, 0362T $27.95, 0373T $30.00. MCO rates are contracted.' },
      { q: 'Can ABA be done by telehealth in South Carolina Medicaid?', a: 'Only partly, since July 1, 2026. 97156 parent training may be delivered by telehealth with the GT modifier. 97155 may be, for up to 25% of units, only if the QIO approves it for a rural in-home case. The assessment and technician services must be in person.' },
      { q: 'Can a BCBA outside South Carolina serve Medicaid members by telehealth?', a: 'Generally no. South Carolina has no behavior-analyst license, but SCDHHS requires ASD providers, including telehealth providers, to be located within the South Carolina Medical Service Area (within about 25 miles of the border), Medicaid-enrolled and BACB-certified.' },
      { q: 'What is the timely filing limit for SC Medicaid ABA claims?', a: 'One year from the date of service for fee-for-service claims, with longer limits only for retroactive eligibility. The MCOs each publish their own limit, which is also 365 days or one year for all five.' },
    ],
  },

  'absolute-total-care-south-carolina': {
    slug: 'absolute-total-care-south-carolina',
    family: 'centene',
    cardDesc: 'Centene’s SC Medicaid plan: PA on every ABA code including 97151, a 7-day decision clock, and an ASD form that wants the supervising provider named.',
    assessmentPA: {
      value: 'Yes. Absolute Total Care’s prior-authorization list names "Applied Behavioral Analysis (ABA)" with 97151 through 97158, so the assessment needs authorization, unlike SC fee-for-service',
      status: 'verified',
      cites: [S.atcPA],
    },
    treatmentPA: {
      value: 'Yes: all ABA codes 97151–97158 are on the list, and the provider manual marks ASD services "Prior Authorization Required"',
      status: 'verified',
      cites: [S.atcPA, S.atcPM],
    },
    dxRequired: {
      value: 'Yes. The manual covers services "to treat ASD" for members ages 0 to 21, recommended by a licensed psychologist, developmental pediatrician or LPES, and the ASD form requires a primary diagnosis and the standardized tools used',
      status: 'verified',
      cites: [S.atcPM, S.atcASD],
    },
    payer: 'Absolute Total Care',
    state: 'SC', kind: 'medicaid-mco', parent: 'South Carolina Healthy Connections Medicaid',
    pill: 'Payer Guide · Absolute Total Care · South Carolina',
    h1: 'Absolute Total Care ABA coverage: the intake guide.',
    metaTitle: 'Absolute Total Care ABA Coverage & Prior Auth Guide (SC Medicaid) | Carelu',
    metaDescription:
      'How Absolute Total Care, Centene’s South Carolina Medicaid plan, covers ABA: prior authorization on every ABA code including the 97151 assessment, the ASD authorization form, decision timeframes, claims limits, and what intake should collect.',
    intro: [
      'Absolute Total Care is Centene’s Healthy Connections Medicaid plan in South Carolina and one of the five MCOs SCDHHS lists. Its January 2026 provider manual covers Autism Spectrum Disorder (ASD) services for members ages 0 to 21 with prior authorization required, and its 2026 prior-authorization list puts every ABA code, including the 97151 assessment, behind authorization. That is stricter than South Carolina fee-for-service, where 97151 needs none.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, ASD services for members ages 0 to 21' },
      { label: 'Prior auth', value: 'Required on 97151–97158 (list effective 12/31/2025)' },
      { label: 'Submit via', value: 'Secure Provider Portal or outpatient BH authorization fax 1-833-493-3350; PA/provider line (866) 433-6041' },
      { label: 'Decision clock', value: '7 calendar days standard (+14 extension); 72 hours expedited' },
      { label: 'Timely filing', value: '365 days from the date of service; disputes 60 days from the EOP' },
      { label: 'Licensure', value: 'None in SC; BACB certification governs' },
    ],
    sections: [
      {
        h2: 'Coverage and prior authorization',
        body: [
          'The manual lists "Autism Spectrum Disorder (ASD) Services — Prior Authorization Required" for "eligible Medicaid beneficiaries ages 0 to 21," services that "must be recommended by a Licensed Psychologist, Developmental Pediatrician, or a Licensed Psycho-Educational Specialist (LPES)" and that may be provided in the home, a clinical setting or other settings authorized in the SCDHHS manual. Behavioral health services, ASD included, "are authorized and provided by behavioral health clinicians." The 2026 prior-authorization list (effective 12/31/2025) names "Applied Behavioral Analysis (ABA) 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158"; the full code list is in the online Pre-Auth Check tool. Non-contracted providers need authorization for all non-emergent services.',
          'The plan’s ASD authorization form (2023 edition) asks for the billing and the supervising provider, the primary diagnosis, the "Standardized Tools Used for Diagnosis" and diagnosis date, IEP/504 and early-intervention status, and other therapies. For an initial assessment it wants "Comprehensive diagnostic information, including standardized measures and referral from diagnosing provider"; treatment plans need objective testing, coordination with school and therapists, a schedule naming the provider type, measurable goals and a parent-training plan. "Retrospective dates will not be processed." The manual says the plan generally uses InterQual criteria for utilization review.',
        ],
        cites: [S.atcPM, S.atcPA, S.atcASD, S.atcPreAuth],
      },
      {
        h2: 'Claims, disputes and timelines',
        body: [
          'Claims are due within 365 days of the date of service, as are corrected claims and reconsiderations; a formal provider dispute must be filed within 60 calendar days of the notice of adverse action. Absolute Total Care says it adjudicates 90% of clean claims within 30 days and 99% within 90 days. Standard prior-authorization decisions are made within 7 calendar days, expedited ones within 72 hours. South Carolina does not license behavior analysts, so credentialing rests on BACB certification and Medicaid enrollment.',
        ],
        cites: [S.atcPM, S.bacbLic],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Absolute Total Care (not FFS or another plan) on the date of service.' },
      { title: 'Diagnostic report + tools used', desc: 'The ASD form asks for the standardized tools behind the diagnosis and the diagnosis date.' },
      { title: 'Referral from the diagnosing provider', desc: 'Required with the initial assessment request, with estimated duration of care.' },
      { title: 'IEP / 504 / IFSP', desc: 'Attach a copy if the child has one.' },
      { title: 'Other insurance', desc: 'Medicaid is payer of last resort; bill the primary first.' },
    ],
    sources: [S.atcPM, S.atcPA, S.atcASD, S.atcPreAuth, S.asdManual, S.asdBulletin, S.carveIn, S.cfr438, S.cfr433, S.bacbLic],
    deliveryRules: {
      supervision: {
        value: 'Absolute Total Care publishes no ABA supervision ratio of its own; its ASD form only requires the supervising provider to attest to "actively participating in the treatment plan." The SCDHHS ASD manual sets the state baseline, which the plan may apply: ' + SC_SUPERVISION_STATE,
        status: 'plan-dependent',
        cites: [S.atcASD, S.asdManual],
        verifyVia: 'Absolute Total Care behavioral health UM, 1-866-534-5976: ask whether it applies the SCDHHS ASD manual’s supervision and caseload rules.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value: 'Not addressed in the provider manual or the ASD form.',
        status: 'unverified',
        cites: [S.atcPM, S.atcASD],
        verifyVia: 'Absolute Total Care Provider Services, (866) 433-6041, or your provider agreement: ask whether it follows the SCDHHS manual’s 97153/97155 and 97153/97156 concurrent-billing rules.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'The plan publishes no ABA unit limits; units are requested per code on the ASD form.',
        status: 'unverified',
        cites: [S.atcASD, S.atcPM],
        verifyVia: 'Absolute Total Care behavioral health UM, 1-866-534-5976: ask whether the SCDHHS section 8 frequency limits (e.g., 97153 160 units a week) apply.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'The plan publishes no ABA session-note signature rule.',
        status: 'unverified',
        cites: [S.atcPM],
        verifyVia: 'Absolute Total Care Provider Services, (866) 433-6041, or your provider agreement’s documentation standards.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'ASD services may be provided "in the Member’s home, clinical setting, or other settings as authorized in the applicable section of the SCDHHS Services Provider Manual."',
        status: 'verified',
        cites: [S.atcPM],
      },
      billAsProvider: {
        value: 'The ASD authorization form lists a billing provider (NPI, Tax ID) and a separate supervising provider; the billing provider attests that "all professionals and paraprofessionals rendering service … have the appropriate training and education." The plan does not say whose NPI goes in the rendering field.',
        status: 'plan-dependent',
        cites: [S.atcASD],
        verifyVia: 'Absolute Total Care Provider Services, (866) 433-6041: ask whether RBT services bill under the supervising BCBA’s NPI as in SC fee-for-service.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Ages 0 to 21, per the manual’s ASD services entry.',
        status: 'verified',
        cites: [S.atcPM],
      },
      dxRecency: {
        value: 'Not stated. The ASD form asks for the diagnosis date and the date of the most recent reassessment but sets no limit.',
        status: 'unverified',
        cites: [S.atcASD],
        verifyVia: 'Absolute Total Care behavioral health UM, 1-866-534-5976: ask how recent the diagnostic evaluation must be.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'The manual says ASD services must be "recommended by a Licensed Psychologist, Developmental Pediatrician, or a Licensed Psycho-Educational Specialist (LPES)." It does not separately say who may diagnose; the SCDHHS manual limits that to MD/DO, PhD/PsyD or LPES.',
        status: 'plan-dependent',
        cites: [S.atcPM, S.asdManual],
        verifyVia: 'Absolute Total Care behavioral health UM, 1-866-534-5976.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'The form requires the "Standardized Tools Used for Diagnosis" and "standardized measures" with the initial assessment request, without naming instruments.',
        status: 'plan-dependent',
        cites: [S.atcASD],
        verifyVia: 'Absolute Total Care behavioral health UM: ask whether it requires the SCDHHS list (in-person ADI-R, ADOS or CARS).',
        blocker: 'per-case',
      },
      referral: {
        value: 'Yes. Services must be recommended by a licensed psychologist, developmental pediatrician or LPES, and the initial assessment request needs a "referral from diagnosing provider for Applied Behavioral Analysis services to include estimated duration of care."',
        status: 'verified',
        cites: [S.atcPM, S.atcASD],
      },
      telehealth: {
        value: 'Absolute Total Care publishes no ABA telehealth rule. The state baseline: ' + SC_TELEHEALTH_STATE,
        status: 'plan-dependent',
        cites: [S.atcPM, S.asdManual],
        verifyVia: 'Absolute Total Care behavioral health UM, 1-866-534-5976: ask which ABA codes it pays by telehealth and with what modifier and POS.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Standard decisions "within 7 calendar days of receipt of the request" (submit at least 10 days ahead), extendable by 14 days; expedited within 72 hours; retrospective review within 30 days. Federal managed-care rules cap standard decisions at 7 calendar days for rating periods from January 1, 2026.',
        status: 'verified',
        cites: [S.atcPM, S.cfr438],
      },
      coordinationOfBenefits: {
        value: 'Providers "should submit the claim to that insurance as Medicaid is the payer of last resort"; for Medicare-covered services, follow Medicare’s authorization rules and no Absolute Total Care authorization is needed. COB claims are due within 365 days.',
        status: 'verified',
        cites: [S.atcPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Absolute Total Care cover ABA therapy?', a: 'Yes, as ASD services for South Carolina Medicaid members ages 0 to 21, with prior authorization.' },
      { q: 'Does the ABA assessment need prior authorization with Absolute Total Care?', a: 'Yes. 97151 is on its prior-authorization list with the other ABA codes, unlike SC fee-for-service.' },
      { q: 'How fast does Absolute Total Care decide an ABA request?', a: 'Within 7 calendar days for standard requests (it asks for submission at least 10 days ahead) and 72 hours for expedited ones, with possible 14-day extensions.' },
      { q: 'What is Absolute Total Care’s timely filing limit?', a: '365 days from the date of service for initial and corrected claims; provider disputes within 60 days of the notice.' },
    ],
  },

  'healthy-blue-south-carolina': {
    slug: 'healthy-blue-south-carolina',
    family: 'bcbs',
    cardDesc: 'BlueChoice HealthPlan’s SC Medicaid plan: PA on all ASD services except diagnostics, the SCDHHS ASD manual as its criteria, and a 14-day PA clock in its manual.',
    assessmentPA: {
      value: 'Unclear: the manual requires prior authorization for "all covered services … excluding diagnostic services," and does not say whether it treats the 97151 behavior assessment as diagnostic',
      status: 'unverified',
      cites: [S.hbPOM],
      verifyVia: 'Healthy Blue Provider Services, 866-757-8286: ask whether 97151 needs prior authorization.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Yes: "Prior authorization for all covered services is required, excluding diagnostic services"',
      status: 'verified',
      cites: [S.hbPOM],
    },
    dxRequired: {
      value: 'Yes: the benefit covers "Members under the age of 21 who have been diagnosed with autism spectrum disorder"',
      status: 'verified',
      cites: [S.hbPOM],
    },
    payer: 'Healthy Blue by BlueChoice HealthPlan',
    state: 'SC', kind: 'medicaid-mco', parent: 'South Carolina Healthy Connections Medicaid',
    pill: 'Payer Guide · Healthy Blue · South Carolina',
    h1: 'Healthy Blue (South Carolina) ABA coverage: the intake guide.',
    metaTitle: 'Healthy Blue South Carolina ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Healthy Blue, BlueChoice HealthPlan’s South Carolina Medicaid plan, covers ABA: prior authorization on all ASD services except diagnostics, the SCDHHS ASD manual as its medical-necessity criteria, decision times, claims limits and what intake should collect.',
    intro: [
      'Healthy Blue in South Carolina is offered by BlueChoice HealthPlan, a BlueCross BlueShield of South Carolina company, not by Anthem as in other states. It is one of the five Healthy Connections MCOs. Its provider manual (effective January 1, 2026) covers autism spectrum disorder services for members under 21, requires prior authorization for all of them except diagnostic services, and names the SCDHHS Autism Provider Manual as the criteria it uses for autism services.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for members under 21 diagnosed with ASD' },
      { label: 'Prior auth', value: 'All covered ASD services except diagnostic services' },
      { label: 'Criteria', value: 'SCDHHS Autism Provider Manual (named in the manual’s criteria table)' },
      { label: 'Decision clock', value: 'Manual: up to 14 calendar days standard, 72 hours urgent' },
      { label: 'Timely filing', value: '365 days from the date of service; disputes 90 days from the remittance' },
      { label: 'Provider services', value: '866-757-8286' },
    ],
    sections: [
      {
        h2: 'Coverage and prior authorization',
        body: [
          'The benefit table lists autism spectrum disorder for "Members under the age of 21 who have been diagnosed with autism spectrum disorder," with the limitation that "Prior authorization for all covered services is required, excluding diagnostic services," and that services "must be recommended by a licensed psychologist, developmental pediatrician or licensed psycho-educational specialist (LPES)." Services may be provided in the home, a clinical setting or other settings. Healthy Blue covers behavioral health through its own "Healthy Blue Autism Services Network," and its criteria table names the "SCDHHS Autism Provider Manual" as the criteria for autism services (it uses MCG for most other behavioral health levels of care). In practice that makes the state manual’s documentation, assessment and code rules the yardstick for a Healthy Blue ABA request.',
        ],
        cites: [S.hbPOM, S.asdManual],
      },
      {
        h2: 'Claims, disputes and decision times',
        body: [
          'Healthy Blue "accepts claims from all providers up to 365 days after the date of service," and corrected claims are due within 365 days of the date of service. Claims disputes filed more than 90 calendar days after the remittance are not accepted; the plan answers disputes within 30 calendar days. Its manual still describes routine prior-authorization review "not to exceed 14 calendar days from receipt of the request," and urgent review within 72 hours; federal managed-care rules cut the standard limit to 7 calendar days for rating periods starting on or after January 1, 2026.',
        ],
        cites: [S.hbPOM, S.cfr438],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Healthy Blue (BlueChoice) Medicaid, not a BlueChoice commercial card.' },
      { title: 'Diagnostic report', desc: 'Healthy Blue applies the SCDHHS manual, which accepts MD/DO, PhD/PsyD or LPES evaluations in person.' },
      { title: 'Recommendation for services', desc: 'From a licensed psychologist, developmental pediatrician or LPES.' },
      { title: 'Other insurance', desc: 'Medicaid pays last; bill the primary plan first.' },
    ],
    sources: [S.hbPOM, S.asdManual, S.asdTraining, S.asdBulletin, S.carveIn, S.cfr438, S.cfr433, S.bacbLic],
    deliveryRules: {
      supervision: {
        value: 'Healthy Blue uses the SCDHHS Autism Provider Manual as its autism criteria, so the state rules apply: ' + SC_SUPERVISION_STATE,
        status: 'verified',
        cites: [S.hbPOM, S.asdManual],
      },
      concurrentBilling: {
        value: 'Healthy Blue publishes no rule of its own. Under the SCDHHS manual it applies, 97153 may not be billed concurrently except as section 8 allows (97155 with 97153 when both providers deliver a direct service; 97153 with 97156 in separate spaces), and two providers may not bill the same code at the same time.',
        status: 'plan-dependent',
        cites: [S.hbPOM, S.asdManual, S.asdTraining],
        verifyVia: 'Healthy Blue Provider Services, 866-757-8286: confirm it pays concurrent 97153/97155 claims under the state rule.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Healthy Blue publishes no ABA unit limits of its own; the SCDHHS section 8 limits it uses as criteria are 97153 160 units a week, 97155 up to 10% of rendered 97153 and 64 units a month, 97156 96 units a year, and 97151 32 units a year.',
        status: 'plan-dependent',
        cites: [S.hbPOM, S.asdManual],
        verifyVia: 'Healthy Blue Provider Services, 866-757-8286.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'The manual publishes no ABA note rule; the SCDHHS manual requires each note signed by the enrolled BCBA/BCaBA and the rendering BT/RBT before the claim is filed.',
        status: 'plan-dependent',
        cites: [S.hbPOM, S.asdManual],
        verifyVia: 'Healthy Blue Provider Services, 866-757-8286, or the documentation standards in your Healthy Blue agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Services "may be provided in the member’s home, clinical setting or other settings." The SCDHHS manual it applies limits school-based ABA to cases with a current IEP, FBA and BIP and requires an adult caregiver at home.',
        status: 'verified',
        cites: [S.hbPOM, S.asdManual],
      },
      billAsProvider: {
        value: 'Not stated in the manual. Under the SCDHHS rule RBT services bill under a BCBA-D, BCBA or BCaBA.',
        status: 'plan-dependent',
        cites: [S.hbPOM, S.asdManual],
        verifyVia: 'Healthy Blue Provider Services, 866-757-8286: ask which NPI goes in the rendering field for RBT services.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21, per the manual’s autism benefit entry.',
        status: 'verified',
        cites: [S.hbPOM],
      },
      dxRecency: {
        value: 'Healthy Blue states no rule; the SCDHHS manual it applies sets no expiry on the diagnosis and does not require re-diagnosis.',
        status: 'verified',
        cites: [S.hbPOM, S.asdManual, S.asdTraining],
      },
      diagnosingProviders: {
        value: 'Services must be recommended by a licensed psychologist, developmental pediatrician or LPES. Under the SCDHHS manual Healthy Blue uses as criteria: ' + SC_DX_PROVIDERS_STATE,
        status: 'verified',
        cites: [S.hbPOM, S.asdManual],
      },
      diagnosticTools: {
        value: 'Healthy Blue names no instruments; under the SCDHHS manual it applies, the diagnostic assessment needs an in-person ADI-R, ADOS or CARS, a DSM checklist with severity levels and a cognitive or developmental measure.',
        status: 'verified',
        cites: [S.hbPOM, S.asdManual],
      },
      referral: {
        value: 'Yes: services "must be recommended by a licensed psychologist, developmental pediatrician or licensed psycho-educational specialist (LPES)."',
        status: 'verified',
        cites: [S.hbPOM],
      },
      telehealth: {
        value: 'Healthy Blue publishes no ABA telehealth rule and uses the SCDHHS Autism Provider Manual as its criteria. The state rule: ' + SC_TELEHEALTH_STATE,
        status: 'plan-dependent',
        cites: [S.hbPOM, S.asdManual],
        verifyVia: 'Healthy Blue Provider Services, 866-757-8286: confirm it has adopted the July 1, 2026 telehealth limits.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'The manual says routine requests are decided within 14 calendar days and urgent ones within 72 hours. Federal rules cap standard managed-care decisions at 7 calendar days for rating periods starting on or after January 1, 2026.',
        status: 'plan-dependent',
        cites: [S.hbPOM, S.cfr438],
        verifyVia: 'Healthy Blue Provider Services, 866-757-8286: confirm which clock applies to your request.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Healthy Blue’s manual does not restate a payer-of-last-resort rule in its ABA sections; federal law makes Medicaid, and its managed care plans, pay after other coverage (42 CFR 433.139), and SCDHHS requires the ASD authorization only when the primary denies or does not cover the service.',
        status: 'plan-dependent',
        cites: [S.cfr433, S.asdManual, S.hbPOM],
        verifyVia: 'Healthy Blue Provider Services, 866-757-8286: ask how to submit secondary ABA claims and whether it needs its own authorization when a commercial plan is primary.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Is Healthy Blue in South Carolina an Anthem plan?', a: 'No. In South Carolina Healthy Blue is offered by BlueChoice HealthPlan, an independent Blue licensee affiliated with BlueCross BlueShield of South Carolina.' },
      { q: 'Does Healthy Blue South Carolina require prior authorization for ABA?', a: 'Yes, for all covered autism services except diagnostic services. Ask the plan whether it treats the 97151 assessment as diagnostic.' },
      { q: 'What criteria does Healthy Blue use for ABA?', a: 'Its manual names the SCDHHS Autism Provider Manual as the criteria for autism services.' },
      { q: 'What is Healthy Blue’s timely filing limit?', a: '365 days from the date of service; claims disputes within 90 days of the remittance.' },
    ],
  },

  'molina-healthcare-south-carolina': {
    slug: 'molina-healthcare-south-carolina',
    family: 'molina',
    cardDesc: 'Molina’s SC Medicaid plan: ABA on its 2026 pre-service review list, a 7-day decision clock, 365-day filing; code-level rules live in its lookup tool.',
    assessmentPA: {
      value: 'Not stated by code: the 2026 guide lists "Applied Behavioral Analysis (ABA) – for treatment of Autism Spectrum Disorder (ASD)" and sends providers to the online look-up tool "for specific codes"',
      status: 'unverified',
      cites: [S.molPA],
      verifyVia: 'Molina Prior Authorization Look-Up Tool or Molina SC prior authorizations, (855) 237-6178: check 97151 and 97152.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes: ABA for treatment of ASD is on Molina’s South Carolina Medicaid pre-service review (prior authorization) list effective 02/01/2026',
      status: 'verified',
      cites: [S.molPA],
    },
    dxRequired: {
      value: 'Yes: the list covers ABA "for treatment of Autism Spectrum Disorder (ASD)," and the manual covers ASD services',
      status: 'verified',
      cites: [S.molPA, S.molPM],
    },
    payer: 'Molina Healthcare of South Carolina',
    state: 'SC', kind: 'medicaid-mco', parent: 'South Carolina Healthy Connections Medicaid',
    pill: 'Payer Guide · Molina Healthcare · South Carolina',
    h1: 'Molina Healthcare of South Carolina ABA coverage: the intake guide.',
    metaTitle: 'Molina Healthcare of South Carolina ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Molina Healthcare of South Carolina covers ABA for Healthy Connections Medicaid members: the 2026 pre-service review list, decision timeframes, appointment standards for autism therapy, claims limits and what intake should verify.',
    intro: [
      'Molina Healthcare of South Carolina is one of the five Healthy Connections Medicaid MCOs. Its 2026 provider manual lists autism spectrum disorder services as covered (behavior identification assessment, treatment by protocol, protocol modification and family guidance), and its pre-service review guide effective February 1, 2026 puts ABA for autism behind prior authorization. Molina publishes no South Carolina ABA policy of its own, so expect the SCDHHS ASD manual to be the reference point and confirm details with the plan.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes: BIA, adaptive behavior treatment, protocol modification, family guidance' },
      { label: 'Prior auth', value: 'ABA for ASD is on the 2026 pre-service review list; codes in the look-up tool' },
      { label: 'Phone', value: 'Prior authorizations incl. behavioral health: (855) 237-6178' },
      { label: 'Decision clock', value: '7 calendar days standard; 72 hours urgent' },
      { label: 'Timely filing', value: '365 days from the date of service' },
      { label: 'Licensure', value: 'None in SC; BACB certification governs' },
    ],
    sections: [
      {
        h2: 'Coverage and prior authorization',
        body: [
          'The manual’s covered-services table lists "Autism Spectrum Disorder — Covered": behavior identification assessment, adaptive behavior treatment by protocol, adaptive behavior treatment with protocol modification and family adaptive behavior treatment guidance. The pre-service review guide (effective 02/01/2026) lists "Applied Behavioral Analysis (ABA) – for treatment of Autism Spectrum Disorder (ASD)" under behavioral health services requiring review and tells providers to "Refer to Molina’s Provider Website or Prior Authorization Look-Up Tool for specific codes." Prior authorizations, including behavioral health, go to (855) 237-6178. Molina sets an appointment standard for autism therapy services: routine visits within 15 business days, urgent within 48 hours.',
          'Molina says it will process "any non-urgent Prior Authorization requests no later than 7 calendar days following receipt of the request," and urgent requests within 72 hours, each extendable by up to 14 days. Claims are timely within "365 calendar days after the discharge for inpatient services or the Date of Service for outpatient services."',
        ],
        cites: [S.molPM, S.molPA],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Molina Healthcare of South Carolina Medicaid (Molina also sells Marketplace plans).' },
      { title: 'Diagnostic report', desc: 'Have the full evaluation ready; Molina publishes no SC-specific diagnosis rule, so plan to the SCDHHS standard.' },
      { title: 'Other insurance', desc: 'Medicaid is payer of last resort; bill the primary and send its EOB.' },
    ],
    sources: [S.molPM, S.molPA, S.asdManual, S.asdBulletin, S.carveIn, S.cfr438, S.cfr433, S.bacbLic],
    deliveryRules: {
      supervision: {
        value: 'Molina publishes no ABA supervision rule for South Carolina. The state baseline in the SCDHHS ASD manual: ' + SC_SUPERVISION_STATE,
        status: 'plan-dependent',
        cites: [S.molPM, S.asdManual],
        verifyVia: 'Molina SC Provider Services, (855) 237-6178: ask whether the SCDHHS supervision and caseload rules apply to its network.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value: 'Not addressed in the manual or the pre-service review guide.',
        status: 'unverified',
        cites: [S.molPM, S.molPA],
        verifyVia: 'Molina SC Provider Services, (855) 237-6178, or your provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Molina publishes no ABA unit limits for South Carolina.',
        status: 'unverified',
        cites: [S.molPM],
        verifyVia: 'Molina SC prior authorizations, (855) 237-6178: ask whether the SCDHHS section 8 limits apply.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Molina publishes no ABA session-note signature rule for South Carolina.',
        status: 'unverified',
        cites: [S.molPM],
        verifyVia: 'Molina SC Provider Services, (855) 237-6178, or the documentation standards in your agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Molina publishes no ABA setting rule for South Carolina; the SCDHHS manual allows home, clinic and, with authorization, school and community settings.',
        status: 'plan-dependent',
        cites: [S.molPM, S.asdManual],
        verifyVia: 'Molina SC Provider Services, (855) 237-6178: ask which POS codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Molina publishes no ABA rendering-provider rule for South Carolina.',
        status: 'unverified',
        cites: [S.molPM],
        verifyVia: 'Molina SC Provider Services, (855) 237-6178: ask whether RBT services bill under the supervising BCBA’s NPI.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Molina’s manual does not state an age for ABA. The SCDHHS ASD benefit, which the MCOs administer for their members, covers ages 0 through 20.',
        status: 'plan-dependent',
        cites: [S.molPM, S.asdManual],
        verifyVia: 'Molina SC Provider Services, (855) 237-6178.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not stated by Molina.',
        status: 'unverified',
        cites: [S.molPM, S.molPA],
        verifyVia: 'Molina SC prior authorizations, (855) 237-6178: ask how recent the diagnostic evaluation must be.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Not stated by Molina. The SCDHHS manual limits ASD diagnosis to MD/DO, PhD/PsyD or LPES, in person.',
        status: 'plan-dependent',
        cites: [S.molPM, S.asdManual],
        verifyVia: 'Molina SC prior authorizations, (855) 237-6178.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'Not stated by Molina.',
        status: 'unverified',
        cites: [S.molPM],
        verifyVia: 'Molina SC prior authorizations, (855) 237-6178: ask which instruments it expects.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Not stated by Molina for ABA. The guide says referrals to network specialists need no prior authorization; ABA itself does.',
        status: 'unverified',
        cites: [S.molPA],
        verifyVia: 'Molina SC Provider Services, (855) 237-6178.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Molina publishes no ABA telehealth rule for South Carolina. The state baseline: ' + SC_TELEHEALTH_STATE,
        status: 'plan-dependent',
        cites: [S.molPM, S.asdManual],
        verifyVia: 'Molina SC Provider Services, (855) 237-6178: ask which ABA codes it pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Non-urgent requests "no later than 7 calendar days following receipt," urgent within 72 hours; either may be extended by up to 14 calendar days.',
        status: 'verified',
        cites: [S.molPM, S.cfr438],
      },
      coordinationOfBenefits: {
        value: '"Medicaid is always the payer of last resort." If third-party liability exists, bill the primary payer and submit its EOB to Molina for secondary processing.',
        status: 'verified',
        cites: [S.molPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Molina Healthcare of South Carolina cover ABA?', a: 'Yes. Its 2026 manual lists autism spectrum disorder services as covered, and ABA for autism needs prior authorization.' },
      { q: 'How do I find which ABA codes Molina SC requires authorization for?', a: 'The pre-service review guide lists ABA and points to Molina’s Prior Authorization Look-Up Tool for specific codes; call (855) 237-6178 if in doubt.' },
      { q: 'How long does Molina SC take to decide?', a: 'Up to 7 calendar days for standard requests and 72 hours for urgent ones, with possible 14-day extensions.' },
    ],
  },

  'first-choice-select-health-south-carolina': {
    slug: 'first-choice-select-health-south-carolina',
    family: 'amerihealth',
    cardDesc: 'AmeriHealth Caritas’ SC Medicaid plan: PA on all ASD services incl. assessments, InterQual + the SCDHHS manual, and a diagnostic report from the last year.',
    assessmentPA: {
      value: 'Yes: "Prior authorization is required for all ASD services, including assessments and treatments"',
      status: 'verified',
      cites: [S.shPM, S.shClaim],
    },
    treatmentPA: {
      value: 'Yes, through NaviNet or the ASD Treatment Request form faxed to Behavioral Health UM (1-888-796-5521)',
      status: 'verified',
      cites: [S.shPM, S.shReq, S.shPA],
    },
    dxRequired: {
      value: 'Yes: the initial request needs a diagnostic evaluation/report completed by a qualified LPHA "within the last year," signed and meeting the SCDHHS ASD manual’s content requirements',
      status: 'verified',
      cites: [S.shChk, S.shPM],
    },
    payer: 'First Choice by Select Health of South Carolina',
    state: 'SC', kind: 'medicaid-mco', parent: 'South Carolina Healthy Connections Medicaid',
    pill: 'Payer Guide · First Choice by Select Health · South Carolina',
    h1: 'First Choice by Select Health ABA coverage: the intake guide.',
    metaTitle: 'First Choice by Select Health (SC) ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How First Choice by Select Health of South Carolina covers ABA: prior authorization for all ASD services including assessments, InterQual plus the SCDHHS ASD manual, the one-year diagnostic report rule, decision times and claims limits.',
    intro: [
      'First Choice is the Medicaid plan of Select Health of South Carolina, a wholly owned subsidiary of AmeriHealth Caritas, and one of the five Healthy Connections MCOs. Its August 2026 provider manual covers ASD services for members under 21, requires prior authorization for every ASD service including the assessment, and says it will "adhere to InterQual criteria and medical necessity requirements as outlined for each service in the SCDHHS Autism Spectrum Disorder Services Manual." Its treatment checklist adds a rule the state manual does not have: the diagnostic report must be from within the last year.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, ASD services for members under 21' },
      { label: 'Prior auth', value: 'All ASD services, including assessments' },
      { label: 'Submit via', value: 'NaviNet, or ASD Treatment Request form to BH UM fax 1-888-796-5521 (phone 1-866-341-8765)' },
      { label: 'Diagnosis', value: 'Report by a qualified LPHA within the last year' },
      { label: 'Decision clock', value: 'Manual: 14 calendar days nonurgent, 3 days urgent' },
      { label: 'Timely filing', value: '365 days; claims after a primary’s EOB within 60 days of it' },
    ],
    sections: [
      {
        h2: 'Coverage, criteria and prior authorization',
        body: [
          'Select Health covers ASD services "for members under 21 years of age," delivered by BCBAs, BCaBAs and RBTs, and by licensed independent practitioners for non-ABA treatment. Services "must be recommended by a licensed psychologist (PhD, PsyD) developmental pediatrician, or an LPES," and individual ASD providers must be located within the SCMSA. "Prior authorization is required for all ASD services, including assessments and treatments," and the plan "will adhere to InterQual criteria and medical necessity requirements as outlined for each service in the SCDHHS Autism Spectrum Disorder Services Manual." Requests go through NaviNet (preferred) or the ASD Treatment Request form, faxed to Behavioral Health Utilization Management at 1-888-796-5521 (questions 1-866-341-8765).',
          'The plan’s checklist for an initial request: the completed treatment request form; a "Diagnostic evaluation/report" completed by a qualified Licensed Practitioner of the Healing Arts "within the last year, signed by the LPHA," meeting the SCDHHS content requirements; and, if the child was already in treatment with you, the behavior plan, progress summary with cumulative graphs, a sample schedule, caregiver goals and a summary of contact with other providers and the school. The form makes care-coordination documentation mandatory. One caution: Select Health’s March 2026 claim filing instructions still list the retired Category III codes (0359T, 0364T, 0368T and so on) in their ASD section; bill the current CPT codes the SCDHHS manual and the request form use.',
        ],
        cites: [S.shPM, S.shChk, S.shReq, S.shPA, S.shClaim],
      },
      {
        h2: 'Claims and decision times',
        body: [
          'Claims are due "within 365 calendar days from the date services were rendered," and resubmissions within 365 days; when a primary insurer delays the claim, submit within 60 days of the primary’s EOB. First Choice is "the payer of last resort." The manual says nonurgent preservice decisions are made within 14 calendar days and urgent ones within three calendar days; federal rules cap standard managed-care decisions at 7 calendar days for rating periods starting on or after January 1, 2026, so ask which clock applies.',
        ],
        cites: [S.shPM, S.cfr438],
      },
    ],
    collect: [
      { title: 'Diagnostic report from the last year', desc: 'Signed by a qualified LPHA and meeting the SCDHHS content rules; an older report will not satisfy the checklist.' },
      { title: 'School and therapy coordination', desc: 'Hours and targets of school, early intervention and other therapies; the form makes this section required.' },
      { title: 'Prior ABA records', desc: 'If the child was already in treatment: progress summary with graphs, sample schedule and caregiver goals.' },
      { title: 'Other insurance', desc: 'First Choice pays last; secondary claims go in within 60 days of the primary’s EOB.' },
    ],
    sources: [S.shPM, S.shChk, S.shReq, S.shPA, S.shClaim, S.asdManual, S.asdBulletin, S.carveIn, S.cfr438, S.cfr433, S.bacbLic],
    deliveryRules: {
      supervision: {
        value: 'Select Health applies the medical-necessity requirements "outlined for each service in the SCDHHS Autism Spectrum Disorder Services Manual," which sets: ' + SC_SUPERVISION_STATE,
        status: 'verified',
        cites: [S.shPM, S.asdManual],
      },
      concurrentBilling: {
        value: 'Select Health publishes no rule of its own; the SCDHHS manual it follows bars concurrent 97153 billing except as section 8 allows (97155 with 97153 when both deliver a direct service; 97153 with 97156 in separate spaces).',
        status: 'plan-dependent',
        cites: [S.shPM, S.asdManual, S.asdTraining],
        verifyVia: 'Select Health Behavioral Health UM, 1-866-341-8765: confirm it pays concurrent 97153/97155 claims under the state rule.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'The ASD Treatment Request form prints "limitation reminders" matching the SCDHHS limits, e.g. 97151 32 units a year, 97152 21 units a day, 97153 160 units a week, 97154 24 units a day.',
        status: 'verified',
        cites: [S.shReq, S.asdManual],
      },
      noteSignature: {
        value: 'Select Health publishes no ABA note rule of its own; under the SCDHHS manual each note is signed by the enrolled BCBA/BCaBA and the rendering BT/RBT before the claim is filed.',
        status: 'plan-dependent',
        cites: [S.shPM, S.asdManual],
        verifyVia: 'Select Health Behavioral Health UM, 1-866-341-8765, or the plan’s medical-record guidelines.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Services "may be provided in the member’s home, clinical setting, or other settings authorized by SCDHHS," and individual ASD providers must be located within the SCMSA.',
        status: 'verified',
        cites: [S.shPM],
      },
      billAsProvider: {
        value: 'Not stated for ABA. The treatment request form lists each provider’s credential (BCBA, BCaBA, RBT); the SCDHHS manual has RBT services bill under a BCBA-D, BCBA or BCaBA.',
        status: 'plan-dependent',
        cites: [S.shReq, S.asdManual],
        verifyVia: 'Select Health Claims, 1-800-575-0418: ask which NPI goes in box 24J for RBT services.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21 ("members under 21 years of age"; elsewhere "ages 0 to 21").',
        status: 'verified',
        cites: [S.shPM],
      },
      dxRecency: {
        value: 'Within the last year: the checklist requires a diagnostic evaluation/report "completed by a qualified Licensed Practitioner of the Healing Arts (LPHA) within the last year." This is stricter than the SCDHHS manual, which sets no expiry.',
        status: 'verified',
        cites: [S.shChk],
      },
      diagnosingProviders: {
        value: 'A "qualified" LPHA whose report meets "the content requirements outlined in the ASD Services Provider Manual," which limits the diagnosis to MD/DO, PhD/PsyD or LPES, in person. Services must be recommended by a licensed psychologist, developmental pediatrician or LPES.',
        status: 'verified',
        cites: [S.shChk, S.shPM, S.asdManual],
      },
      diagnosticTools: {
        value: 'Through the SCDHHS content requirements it adopts: an in-person ADI-R, ADOS or CARS, a DSM checklist with severity levels and a cognitive or developmental measure.',
        status: 'verified',
        cites: [S.shChk, S.asdManual],
      },
      referral: {
        value: 'Yes: services "must be recommended by a licensed psychologist (PhD, PsyD) developmental pediatrician, or an LPES."',
        status: 'verified',
        cites: [S.shPM],
      },
      telehealth: {
        value: 'Select Health publishes no ABA telehealth rule but follows the SCDHHS ASD manual’s medical-necessity requirements per service. The state rule: ' + SC_TELEHEALTH_STATE,
        status: 'plan-dependent',
        cites: [S.shPM, S.asdManual],
        verifyVia: 'Select Health Behavioral Health UM, 1-866-341-8765: confirm the July 2026 telehealth limits and its modifier rules.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'The manual says nonurgent preservice decisions "within 14 calendar days" and urgent "no later than three calendar days." Federal rules cap standard managed-care decisions at 7 calendar days for rating periods starting on or after January 1, 2026.',
        status: 'plan-dependent',
        cites: [S.shPM, S.cfr438],
        verifyVia: 'Select Health Behavioral Health UM, 1-866-341-8765.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: '"Medicaid is always the payer of last resort," and First Choice considers the primary’s payment when calculating what it owes. Note that "Prior authorization requirements are applicable to secondary claims." Claims with a primary EOB go in within 60 days of that EOB.',
        status: 'verified',
        cites: [S.shPM, S.shPA, S.cfr433],
      },
    },
    faq: [
      { q: 'Does First Choice by Select Health need prior authorization for the ABA assessment?', a: 'Yes. Select Health requires prior authorization for all ASD services, assessments included.' },
      { q: 'How recent must the autism evaluation be for First Choice?', a: 'Within the last year, signed by a qualified LPHA and meeting the SCDHHS ASD manual’s content requirements.' },
      { q: 'Do I need First Choice authorization if the child’s commercial plan is primary?', a: 'Select Health says its prior-authorization requirements apply to secondary claims, so get its authorization too.' },
      { q: 'What is First Choice’s timely filing limit?', a: '365 calendar days from the date of service; claims delayed by a primary insurer within 60 days of the primary’s EOB.' },
    ],
  },

  'humana-healthy-horizons-south-carolina': {
    slug: 'humana-healthy-horizons-south-carolina',
    family: 'humana',
    cardDesc: 'Humana’s SC Medicaid plan: follows the SCDHHS ASD manual, an ABA authorization form for 97153/97155/97156, a 7-day clock and one-year filing.',
    assessmentPA: {
      value: 'Not stated: the ABA authorization form requests 97153, 97155 and 97156 only, and the manual names no ABA code list',
      status: 'unverified',
      cites: [S.humABA, S.humPM],
      verifyVia: 'Humana Healthy Horizons in South Carolina, 866-432-0001 (or the prior-authorization search on Availity): check 97151 and 97152.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes: Humana lists an Applied Behavioral Analysis Authorization Form among its South Carolina behavioral health prior-authorization forms, requesting 97153, 97155 and 97156 units',
      status: 'verified',
      cites: [S.humPApage, S.humABA],
    },
    dxRequired: {
      value: 'Yes: Humana covers ASD services and "adheres to guidelines as outlined in the SCDHHS Autism Spectrum Disorder (ASD) Services Provider Manual"; the form asks for the diagnosing provider and the standardized tool used',
      status: 'verified',
      cites: [S.humPM, S.humABA],
    },
    payer: 'Humana Healthy Horizons in South Carolina',
    state: 'SC', kind: 'medicaid-mco', parent: 'South Carolina Healthy Connections Medicaid',
    pill: 'Payer Guide · Humana Healthy Horizons · South Carolina',
    h1: 'Humana Healthy Horizons in South Carolina ABA coverage: the intake guide.',
    metaTitle: 'Humana Healthy Horizons South Carolina ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Humana Healthy Horizons in South Carolina covers ABA for Medicaid members: ASD coverage under 21 following the SCDHHS manual, the ABA authorization form, decision timeframes, claims and retro-review limits, and what intake should collect.',
    intro: [
      'Humana Healthy Horizons in South Carolina is one of the five Healthy Connections Medicaid MCOs. Its 2026 provider manual covers autism spectrum disorder services for members younger than 21 and says it "adheres to guidelines as outlined in the SCDHHS Autism Spectrum Disorder (ASD) Services Provider Manual." One wrinkle: the manual’s link points to the September 2025 edition of that state manual, while SCDHHS replaced it on July 1, 2026, so confirm Humana has moved to the new telehealth and diagnosis rules.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, ASD services for members younger than 21' },
      { label: 'Criteria', value: 'SCDHHS ASD Services Provider Manual (manual links the 9/1/2025 edition)' },
      { label: 'Prior auth', value: 'ABA authorization form (97153/97155/97156): email CorporateMedicaidCIT@humana.com or fax 833-441-0950' },
      { label: 'Decision clock', value: '7 calendar days standard; 72 hours expedited' },
      { label: 'Timely filing', value: 'One year from the date of service' },
      { label: 'Provider line', value: '866-432-0001' },
    ],
    sections: [
      {
        h2: 'Coverage and prior authorization',
        body: [
          'Humana "provides autism spectrum disorder (ASD) coverage for members younger than 21 years," delivered by BCBAs, BCaBAs and RBTs and by approved licensed independent practitioners, and it "adheres to guidelines as outlined in the SCDHHS Autism Spectrum Disorder (ASD) Services Provider Manual." Its behavioral health quick reference adds that 97154 and 97158 are limited to six hours a day. Humana lists an "Applied Behavioral Analysis Authorization Form" among its South Carolina behavioral health prior-authorization forms. The form requests units of 97153, 97155 and 97156, names the supervising BCBA and certification number, asks whether services were "ordered by a board-certified psychiatrist, psychologist, or pediatrician qualified to provide ABA oversight" (attach the order), and wants the diagnosing provider, the standardized tool used, current IQ, IEP/504 status, a treatment plan with baseline data, and transition and discharge plans.',
          'Standard prior-authorization notice comes "no later than 7 calendar days following receipt of the request," expedited within 72 hours. If you fail to get a required authorization, you have 180 calendar days from the date of service (or from the primary carrier’s EOP) to ask for retrospective review. Claims are due within one year of the date of service.',
        ],
        cites: [S.humPM, S.humBH, S.humPApage, S.humABA],
      },
    ],
    collect: [
      { title: 'Physician or psychologist order', desc: 'The form asks for an order from a board-certified psychiatrist, psychologist or pediatrician; attach it.' },
      { title: 'Diagnosis details', desc: 'Diagnosing provider, diagnosis date, standardized tool used, current IQ level.' },
      { title: 'Supervising BCBA', desc: 'Name and BACB certification number.' },
      { title: 'Other insurance', desc: 'The form asks for the other insurer’s card; Humana pays after it.' },
    ],
    sources: [S.humPM, S.humPMnov, S.humBill, S.humABA, S.humPApage, S.humBH, S.asdManual, S.asdBulletin, S.carveIn, S.cfr438, S.cfr433, S.bacbLic],
    deliveryRules: {
      supervision: {
        value: 'Humana adheres to the SCDHHS ASD manual, which sets: ' + SC_SUPERVISION_STATE + ' The ABA form asks for the supervising BCBA’s name and certification number.',
        status: 'verified',
        cites: [S.humPM, S.humABA, S.asdManual],
      },
      concurrentBilling: {
        value: 'Humana publishes no rule of its own; the SCDHHS manual it follows bars concurrent 97153 billing except as section 8 allows.',
        status: 'plan-dependent',
        cites: [S.humPM, S.asdManual, S.asdTraining],
        verifyVia: 'Humana Healthy Horizons in South Carolina, 866-432-0001.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: '97154 and 97158 are limited to six hours a day (Humana’s quick reference); otherwise Humana follows the SCDHHS section 8 limits (97153 160 units a week; 97155 up to 10% of 97153 and 64 units a month).',
        status: 'verified',
        cites: [S.humBH, S.humPM, S.asdManual],
      },
      noteSignature: {
        value: 'Humana publishes no ABA note rule of its own; the SCDHHS manual requires notes signed by the enrolled BCBA/BCaBA and the rendering BT/RBT before billing.',
        status: 'plan-dependent',
        cites: [S.humPM, S.asdManual],
        verifyVia: 'Humana Healthy Horizons in South Carolina, 866-432-0001.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Through the SCDHHS manual it follows: home, clinic, and school or community settings only with authorization; an adult caregiver must be present for in-home ABA.',
        status: 'verified',
        cites: [S.humPM, S.asdManual],
      },
      billAsProvider: {
        value: 'The ABA form separates the requesting/billing provider, the servicing provider and the supervising BCBA. Humana’s billing guide requires rendering NPIs and taxonomy on the claim and on the SCDHHS provider list; it does not say how RBT time is billed.',
        status: 'plan-dependent',
        cites: [S.humABA, S.humBill],
        verifyVia: 'Humana Healthy Horizons in South Carolina, 866-432-0001: ask whether RBT services bill under the supervising BCBA’s NPI.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Younger than 21 ("members younger than 21 years").',
        status: 'verified',
        cites: [S.humPM],
      },
      dxRecency: {
        value: 'Humana states no rule; the SCDHHS manual it follows sets no expiry on the diagnosis. The ABA form asks for the diagnosis date and the date of the most recent assessment.',
        status: 'verified',
        cites: [S.humPM, S.humABA, S.asdManual],
      },
      diagnosingProviders: {
        value: 'Through the SCDHHS manual it follows: ' + SC_DX_PROVIDERS_STATE + ' The form separately asks whether services were ordered by a board-certified psychiatrist, psychologist or pediatrician.',
        status: 'plan-dependent',
        cites: [S.humPM, S.humABA, S.asdManual],
        verifyVia: 'Humana Healthy Horizons in South Carolina, 866-432-0001: Humana’s manual links the September 2025 SCDHHS edition, so confirm it applies the July 2026 diagnosis rules.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'The form asks for the "Standardized Tool Used for Diagnosis"; the SCDHHS manual Humana follows requires an in-person ADI-R, ADOS or CARS.',
        status: 'verified',
        cites: [S.humABA, S.asdManual],
      },
      referral: {
        value: 'The form asks whether services have been "ordered by a board-certified psychiatrist, psychologist, or pediatrician qualified to provide ABA oversight" and to include a copy of the order.',
        status: 'verified',
        cites: [S.humABA],
      },
      telehealth: {
        value: 'Humana publishes no ABA telehealth rule and follows the SCDHHS manual, but cites the September 2025 edition. The current state rule: ' + SC_TELEHEALTH_STATE,
        status: 'plan-dependent',
        cites: [S.humPM, S.asdManual],
        verifyVia: 'Humana Healthy Horizons in South Carolina, 866-432-0001: confirm it applies the July 1, 2026 telehealth limits.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Standard decisions "no later than 7 calendar days following receipt of the request," expedited within 72 hours; either may be extended by 14 calendar days. Retrospective review may be requested within 180 days of the date of service.',
        status: 'verified',
        cites: [S.humPM, S.cfr438],
      },
      coordinationOfBenefits: {
        value: 'Humana collects COB information so that "Medicaid programs [are] the payer of last resort." Secondary claims need the primary’s remittance, within 2 years of the date of service or 6 months of the primary’s EOB.',
        status: 'verified',
        cites: [S.humPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Humana Healthy Horizons in South Carolina cover ABA?', a: 'Yes, for members younger than 21, following the SCDHHS ASD Services Provider Manual.' },
      { q: 'How do I request ABA authorization from Humana in South Carolina?', a: 'With its ABA Behavioral Health Authorization Request Form, by email to CorporateMedicaidCIT@humana.com or fax to 833-441-0950.' },
      { q: 'What if I started ABA before getting Humana’s authorization?', a: 'You can request a retrospective medical-necessity review within 180 calendar days of the date of service; later requests are denied and cannot be appealed.' },
    ],
  },

  'aetna-south-carolina': {
    slug: 'aetna-south-carolina',
    family: 'aetna',
    cardDesc: 'Aetna’s ABA guide + CPB 0648 + precert on all ten ABA codes, layered on Ryan’s Law (dx by 8, under 16, $73,400 cap for 2026).',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: precertification through Availity (or your EMR’s electronic route); the reauthorization interval is set by the plan, with progress evaluated every six months',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): ask whether the group carries ABA precertification and what authorization period it uses.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) by an appropriate provider; Aetna considers ABA experimental for non-ASD indications',
      status: 'verified',
      cites: [S.aetnaGuide, S.aetnaCPB],
    },
    payer: 'Aetna in South Carolina',
    state: 'SC', kind: 'commercial',
    pill: 'Payer Guide · Aetna · South Carolina',
    h1: 'Aetna ABA coverage in South Carolina: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in South Carolina: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for South Carolina families: the national ABA medical necessity guide, precertification on all ABA codes, South Carolina’s Ryan’s Law mandate (diagnosis by age 8, coverage under 16, $73,400 behavioral-therapy cap for 2026), no state license, and what intake should verify.',
    intro: [
      'For an intake team in South Carolina, an Aetna card means three layers: Aetna’s national ABA criteria, South Carolina’s autism mandate in S.C. Code § 38-71-280, and the plan’s funding and size, which decide whether the mandate applies at all. South Carolina’s mandate is narrower than most: group plans only, and it carries an age ceiling and a dollar cap.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s national ABA medical necessity guide' },
      { label: 'State mandate', value: 'S.C. Code § 38-71-280 (Ryan’s Law, 2007 Act No. 65)' },
      { label: 'Mandate age', value: 'Diagnosed at age 8 or younger; coverage under age 16' },
      { label: 'Mandate caps', value: 'Behavioral therapy capped at $73,400 for 2026 ($50,000 indexed to CPI; DOI Bulletin 2025-09)' },
      { label: 'Exempt from mandate', value: 'Individual-market, individually underwritten and small-employer plans (by statute); self-funded ERISA plans' },
      { label: 'Licensure', value: 'None: SC does not license behavior analysts; BACB certification governs' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in South Carolina',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its ABA medical necessity guide (©2026), with CPB 0648 for the ASD workup; CPB 0554 (last review 11/26/2025) considers ABA "experimental, investigational, or unproven" for non-ASD indications. Medical necessity requires a DSM-5 ASD diagnosis by an appropriate provider, a standardized functional measure from the past 12 months showing impairment at least one standard deviation below the mean (or a significant risk of harm), and a treatment plan with measurable targets, generalization and discharge planning; progress is evaluated every six months. Aetna’s behavioral health precertification list (eff. 8/1/2024) names all ten ABA codes, 97151 through 97158, 0362T and 0373T; most requests go through Availity. The guide’s only state exhibit is Maryland’s, so no South Carolina-specific criteria apply. Aetna is not one of South Carolina’s five Medicaid plans.',
        ],
        cites: [S.aetnaGuide, S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert, S.mcoList],
      },
      {
        h2: 'The South Carolina mandate: what it guarantees',
        body: [SC_MANDATE_BODY],
        cites: [S.sc280, S.doiBull],
      },
      {
        h2: 'Licensure, location and prompt pay',
        body: [SC_LICENSURE_BODY],
        cites: [S.t40c75, S.h3731, S.bacbLic, S.asdManual, S.asdTraining, S.bcCAM, S.sc3859, S.asdFee],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA?',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) treats payment as a contract term: "The rates and compensation under your agreement are subject to the Aetna coding/claim edit policies," and where a provider has both an intermediary contract and a direct agreement, "your direct Aetna rates will apply unless we specifically notify you otherwise." Get rates from your Aetna agreement. For a public benchmark, SC Medicaid’s ASD fee schedule pays 97153 at $14.88 per 15 minutes; commercial contracts are negotiated separately. South Carolina law lets a participating physician request a contracted fee schedule for up to 100 codes (S.C. Code § 38-59-220), but that right is written for physicians, not BCBAs.',
        ],
        cites: [S.aetnaOM, S.asdFee, S.sc3859],
      },
    ],
    collect: [
      { title: 'Plan type and size', desc: 'Large-group insured or State Health Plan (mandate applies) vs. individual, small-group or self-funded (plan document governs).' },
      { title: 'Child’s age and diagnosis age', desc: 'The mandate covers children under 16 who were diagnosed at 8 or younger.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD, diagnosing provider and credentials, evaluation date.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3, ABAS, VB-MAPP or ABLLS).' },
      { title: 'Treatment plan signed by the treating doctor', desc: 'For a mandated plan, coverage follows a treatment plan prescribed and signed by the child’s treating medical doctor.' },
    ],
    sources: [S.aetnaGuide, S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.aetnaTele, S.sc280, S.doiBull, S.sc3859, S.sc3870, S.reg6943, S.t40c75, S.bacbLic, S.erisa, S.cfr147, S.asdFee],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s Network Participation Criteria (5/26): ABA services "must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board," supervised staff may be a BCaBA "or a paraprofessional," and Aetna requires "A minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional "for each 10 hours of applied behavior analysis," plus the supervisor "onsite with the child at least one hour a month." South Carolina has no state license, so BACB certification is the qualifying credential.',
        status: 'verified',
        cites: [S.aetnaNPC, S.aetnaGuide, S.t40c75],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA policies (the medical necessity guide, CPB 0554, CPB 0648).',
        status: 'unverified',
        cites: [S.aetnaGuide, S.aetnaCPB],
        verifyVia: 'Aetna provider services, your participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap is published; hours follow the guide’s severity assessment, with typical intensities of 10–25 hours a week for comprehensive and 1–20 for focused programs (typical, not caps). A mandated South Carolina group plan may still apply the $73,400 annual behavioral-therapy cap for 2026.',
        status: 'verified',
        cites: [S.aetnaGuide, S.sc280, S.doiBull],
      },
      noteSignature: {
        value: 'Not addressed. Aetna sets treatment-plan content requirements but not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Your Aetna participating-provider agreement and the Aetna Behavioral Health documentation standards.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-neutral in Aetna’s guide, which expects coordination with the school district. Aetna publishes no South Carolina-specific setting rule.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      billAsProvider: {
        value: 'Services "must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope," unless mandates, plan documents or contracts say otherwise. South Carolina has no behavior-analyst license, so the BCBA is the billing credential.',
        status: 'verified',
        cites: [S.aetnaGuide, S.bacbLic],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national ABA guide sets no age cap.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.sc280, S.doiBull],
        verifyVia: 'Live benefits verification: establish group size and funding (mandated insured group vs. individual, small-group or self-funded), then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but medical necessity requires functional impairment on a standardized scale administered in the past 12 months. For a mandated plan, the child must have been diagnosed at age eight or younger.',
        status: 'verified',
        cites: [S.aetnaGuide, S.sc280],
      },
      diagnosingProviders: {
        value: 'A DSM-5 ASD diagnosis by "an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care" professional qualified to diagnose). CPB 0648 describes the professionals involved in an ASD evaluation.',
        status: 'verified',
        cites: [S.aetnaGuide, S.aetnaCPB648],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale as tools used with clinical assessment. The ABA guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s national ABA policies require no physician referral; they require precertification of all ten ABA codes.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.sc280],
      },
      telehealth: {
        value: 'Aetna’s provider manual (6/26) says Aetna Behavioral Health "offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out." Its Telemedicine and Direct Patient Contact Payment Policy lists 97151–97158 among eligible two-way synchronous codes billed with GT, 95 or FR, split by line of business, but the posted policy shows a last review of June 2021, so treat the list as perishable.',
        status: 'plan-dependent',
        cites: [S.aetnaOM, S.aetnaTele],
        verifyVia: 'Availity or the precertification line on the card: ask whether a self-funded plan opted out of telehealth, and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: COMMERCIAL_TURNAROUND + ' Aetna publishes no South Carolina-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.sc3870, S.erisa, S.cfr147],
        verifyVia: 'At benefits verification ask whether the plan is insured or self-funded and what decision and reauthorization lead times Aetna applies.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMMERCIAL_COB,
        status: 'plan-dependent',
        cites: [S.reg6943, S.cfr433, S.asdManual, S.tricare, S.champva],
        verifyVia: 'Ask Aetna at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in South Carolina?', a: 'Yes, under its national ABA criteria for ASD. For insured large-group plans and the State Health Plan, South Carolina’s Ryan’s Law also applies; individual, small-group and self-funded plans follow their own documents.' },
      { q: 'What does South Carolina’s autism mandate require?', a: 'Group plans must cover autism treatment prescribed by the child’s treating medical doctor under a treatment plan, for children under 16 who were diagnosed by age 8, with behavioral therapy capped at $73,400 for 2026.' },
      { q: 'Does Aetna’s ABA assessment need precertification in South Carolina?', a: 'Yes. 97151 and the other nine ABA codes are on Aetna’s behavioral health precertification list.' },
      { q: 'Does a BCBA need a South Carolina license to bill Aetna?', a: 'No. South Carolina does not license behavior analysts; Aetna accepts a board-certified behavior analyst as the billing credential where there is no state license.' },
      { q: 'How fast must Aetna pay a clean ABA claim in South Carolina?', a: 'For insured plans subject to state law, within 20 business days of an electronic clean claim or 40 business days on paper (S.C. Code § 38-59-230), with interest after that. Self-funded plans are outside the statute.' },
    ],
  },

  'cigna-south-carolina': {
    slug: 'cigna-south-carolina',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide (no PA on assessments) layered on Ryan’s Law (dx by 8, under 16, $73,400 cap for 2026).',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the policy covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: the completed assessment and treatment plan go with the Applied Behavior Analysis Prior Authorization form',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD (F84.0–F84.9 except F84.2 Rett syndrome) under DSM-5-TR criteria',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in South Carolina',
    state: 'SC', kind: 'commercial',
    pill: 'Payer Guide · Cigna · South Carolina',
    h1: 'Cigna / Evernorth ABA coverage in South Carolina: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in South Carolina: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for South Carolina families: national policy EN0499, no PA on assessment codes, South Carolina’s Ryan’s Law mandate (diagnosis by age 8, coverage under 16, $73,400 cap for 2026), no state license, and what intake should verify.',
    intro: [
      'For an intake team in South Carolina, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, South Carolina’s autism mandate in S.C. Code § 38-71-280, and the plan’s funding and size. Many Cigna members are on self-funded employer plans, which the state mandate does not reach, so check funding first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'State mandate', value: 'S.C. Code § 38-71-280 (Ryan’s Law, 2007 Act No. 65)' },
      { label: 'Mandate age', value: 'Diagnosed at age 8 or younger; coverage under age 16' },
      { label: 'Mandate caps', value: 'Behavioral therapy capped at $73,400 for 2026 ($50,000 indexed to CPI; DOI Bulletin 2025-09)' },
      { label: 'Exempt from mandate', value: 'Individual-market, individually underwritten and small-employer plans (by statute); self-funded ERISA plans' },
      { label: 'Licensure', value: 'None: SC does not license behavior analysts; BACB certification governs' },
      { label: 'Fee schedule', value: 'Not public — your ABA fee schedule is Exhibit A of your Evernorth Provider Agreement; Provider Services 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in South Carolina',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). The autism resource guide says prior authorization "is no longer required for assessment … codes 97151, 97152, or 0362T with a diagnosis of autism, as long as the provider is independently licensed or a Board Certified Behavior Analyst" and the policy covers ABA; treatment needs the completed assessment and plan on the ABA Prior Authorization form. EN0499 and the resource guide contain no South Carolina provisions. Evernorth’s Administrative Guidelines carry a South Carolina Regulatory Addendum for insured business: it limits overpayment recovery to 18 months and requires 90 days of continued care after a contract ends when the treating physician attests to serious jeopardy (S.C. Code § 38-71-243); it does not apply to self-funded plans. Cigna is not a South Carolina Medicaid plan.',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin, S.mcoList],
      },
      {
        h2: 'The South Carolina mandate: what it guarantees',
        body: [SC_MANDATE_BODY],
        cites: [S.sc280, S.doiBull],
      },
      {
        h2: 'Licensure, location and prompt pay',
        body: [SC_LICENSURE_BODY],
        cites: [S.t40c75, S.h3731, S.bacbLic, S.asdManual, S.asdTraining, S.bcCAM, S.sc3859, S.asdFee],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth’s Administrative Guidelines (September 2026) say the Provider Agreement terms "include the reimbursement rates applicable to covered services," and tell ABA providers: "For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement." Fee questions go to Provider Services at 800.926.2273. Non-credentialed technicians are paid only through the supervising provider’s claim. For a public benchmark, SC Medicaid pays 97153 at $14.88 per 15 minutes; commercial contracts are negotiated separately.',
        ],
        cites: [S.ebhAdmin, S.cignaARG, S.asdFee],
      },
    ],
    collect: [
      { title: 'Plan type and size', desc: 'Insured large group or State Health Plan (mandate applies) vs. individual, small-group or self-funded.' },
      { title: 'Child’s age and diagnosis age', desc: 'The mandate covers children under 16 who were diagnosed at 8 or younger.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, plus the date of the most recent diagnosis.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Treatment plan signed by the treating doctor', desc: 'For a mandated plan, coverage follows a treatment plan prescribed by the child’s treating medical doctor.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.sc280, S.doiBull, S.sc3859, S.sc3870, S.reg6943, S.t40c75, S.bacbLic, S.erisa, S.cfr147, S.asdFee],
    deliveryRules: {
      supervision: {
        value: 'Case supervision by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health professional with ABA training, at one to two hours per ten hours of direct treatment; at 10 hours a week or less, at least one to two hours a week. The supervisor’s name and credentials must be documented.',
        status: 'verified',
        cites: [S.en0499],
      },
      concurrentBilling: {
        value: '"Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)."',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap is published; "All ABA services must be billed with CPT codes 97151–97158, 0362T, and 0373T ONLY," and intensity must reflect severity and response. A mandated South Carolina group plan may still apply the $73,400 annual behavioral-therapy cap for 2026.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.sc280, S.doiBull],
      },
      noteSignature: {
        value: 'Each service record needs the "Name, credential (if applicable), and signature of ABA provider who rendered the service," with date, times, location and who was present.',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'Services delivered in academic, vocational or telehealth settings must still meet the direct-treatment definition, and services "primarily educational or vocational in nature" are not covered.',
        status: 'verified',
        cites: [S.en0499],
      },
      billAsProvider: {
        value: '"Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." On paper claims list "only a BCBA or other licensed provider in box 33"; electronic claims use payer ID 62308.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; access to focused intervention "should not be restricted by age."' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.sc280, S.doiBull],
        verifyVia: 'Live benefits verification, or Evernorth Provider Services 800.926.2273: establish group size and funding first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs "The date on which the diagnosis was most recently made," and the standardized assessment must be administered within 60 days before treatment starts. For a mandated plan, the child must have been diagnosed at age eight or younger.',
        status: 'verified',
        cites: [S.en0499, S.sc280],
      },
      diagnosingProviders: {
        value: 'A "healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice," applying DSM-5-TR, with name, credentials and licensure type documented.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated; the assessment must use reliable, valid, standardized, current-edition instruments completed in full and administered within 60 days before treatment.',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral; assessments need no PA with an autism diagnosis when the provider is independently licensed or a BCBA, and treatment needs the ABA PA form.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.sc280],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" (autism resource guide), and EN0499 says the line-of-sight requirement "does not apply to telehealth services." Evernorth bills telehealth with modifier 95.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ebhAdmin],
      },
      authTurnaround: {
        value: COMMERCIAL_TURNAROUND + ' Cigna asks providers to request ABA authorization up to 30 days before, or within two weeks after, the start of service; later requests may go to retrospective review, which can take up to 30 days.',
        status: 'plan-dependent',
        cites: [S.sc3870, S.erisa, S.cfr147, S.cignaARG],
        verifyVia: 'At benefits verification ask whether the plan is insured or self-funded and what decision timeframe Evernorth applies.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMMERCIAL_COB,
        status: 'plan-dependent',
        cites: [S.reg6943, S.cfr433, S.asdManual, S.tricare, S.champva],
        verifyVia: 'Ask Cigna/Evernorth at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in South Carolina?', a: 'Yes, under national policy EN0499 for ASD, with Ryan’s Law added for insured large-group plans. Self-funded employer plans follow their own documents.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in South Carolina?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. Prior authorization starts at treatment.' },
      { q: 'Can ABA be delivered by telehealth with Cigna?', a: 'Yes. Cigna’s autism resource guide says all ABA CPT codes are covered telehealth services; bill with modifier 95.' },
      { q: 'Does a BCBA need a South Carolina license to bill Cigna?', a: 'South Carolina issues no behavior-analyst license, and Cigna accepts a BCBA as the billing credential for ABA.' },
    ],
  },

  'unitedhealthcare-south-carolina': {
    slug: 'unitedhealthcare-south-carolina',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + Ryan’s Law; no SC state supplement, three-code telehealth rule, no SC Medicaid plan.',
    assessmentPA: {
      value: 'Required: the ABA Supplemental Clinical Criteria say "Prior authorization is required for ABA (unless otherwise specified or mandated by contract or law)"',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required; the review interval is set per authorization, and continued-service review examines use below 80% of authorized hours',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express or the behavioral health number on the card: ask what review interval applies to this member’s ABA authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a valid ASD diagnosis issued by a state-licensed physician, psychologist or other qualified clinician under DSM-5-TR, with validated tools',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in South Carolina',
    state: 'SC', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · South Carolina',
    h1: 'UnitedHealthcare / Optum ABA coverage in South Carolina: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in South Carolina: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for South Carolina families: Optum’s ABA criteria and prior authorization, the three-code telehealth rule, South Carolina’s Ryan’s Law mandate (diagnosis by age 8, coverage under 16, $73,400 cap for 2026), and what intake should verify.',
    intro: [
      'For an intake team in South Carolina, a UnitedHealthcare card means three layers: Optum Behavioral Health’s national ABA criteria, South Carolina’s autism mandate in S.C. Code § 38-71-280, and the plan’s funding and size. UnitedHealthcare is not one of South Carolina’s five Medicaid plans, so a UHC card here is commercial (or Medicare).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'S.C. Code § 38-71-280 (Ryan’s Law, 2007 Act No. 65)' },
      { label: 'Mandate age', value: 'Diagnosed at age 8 or younger; coverage under age 16' },
      { label: 'Mandate caps', value: 'Behavioral therapy capped at $73,400 for 2026 ($50,000 indexed to CPI; DOI Bulletin 2025-09)' },
      { label: 'Exempt from mandate', value: 'Individual-market, individually underwritten and small-employer plans (by statute); self-funded ERISA plans' },
      { label: 'Licensure', value: 'None: SC does not license behavior analysts; BACB certification governs' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in South Carolina',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; annual review August 2025, interim review April 2026): prior authorization for ABA unless a contract or law says otherwise, with continued-service review looking at use below 80% of authorized hours over a two-week period. Optum’s ABA State Mandates supplement (annual review July 2026) has entries for Arizona, California, Connecticut, Florida, Massachusetts, New Jersey, New York, Ohio and Pennsylvania; South Carolina is not among them, so no South Carolina-specific criteria modify the commercial policy. SCDHHS’s list of Medicaid MCOs does not include UnitedHealthcare.',
        ],
        cites: [S.optumSCC, S.optumSM, S.mcoList],
      },
      {
        h2: 'The South Carolina mandate: what it guarantees',
        body: [SC_MANDATE_BODY],
        cites: [S.sc280, S.doiBull],
      },
      {
        h2: 'Licensure, location and prompt pay',
        body: [SC_LICENSURE_BODY],
        cites: [S.t40c75, S.h3731, S.bacbLic, S.asdManual, S.asdTraining, S.bcCAM, S.sc3859, S.asdFee],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA?',
        body: [
          'UnitedHealthcare publishes no ABA rate table; Optum pays from the contract. Optum’s National Network Manual (effective Sept. 1, 2026) defines the "Fee Maximum" as the most a participating provider may be paid for a service, adding that "Reimbursement to clinicians is based upon licensure rather than degree." Optum’s commercial ABA Reimbursement Policy (2022RP501A) makes the credential level part of each claim line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA, HP for a doctoral-level provider. Ask Optum network management for your rate sheet. For a public benchmark, SC Medicaid pays 97153 at $14.88 per 15 minutes.',
        ],
        cites: [S.optumNNM, S.optumReimb, S.asdFee],
      },
    ],
    collect: [
      { title: 'Plan type and size', desc: 'Insured large group or State Health Plan (mandate applies) vs. individual, small-group or self-funded.' },
      { title: 'Child’s age and diagnosis age', desc: 'The mandate covers children under 16 who were diagnosed at 8 or younger.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD with severity, confirmed with a validated tool (ADI-R, ADOS-2 and others).' },
      { title: 'Treatment plan signed by the treating doctor', desc: 'For a mandated plan, coverage follows a treatment plan prescribed by the child’s treating medical doctor.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumNNM, S.optumReimb, S.mcoList, S.sc280, S.doiBull, S.sc3859, S.sc3870, S.reg6943, S.t40c75, S.bacbLic, S.erisa, S.cfr147, S.asdFee],
    deliveryRules: {
      supervision: {
        value: 'Direct case supervision is required at 1–2 hours for every 10 hours of direct treatment. Technicians work under a BCBA or licensed clinician, and Optum does not recommend parents serving as their own child’s RBT.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      concurrentBilling: {
        value: 'Not addressed in the SCC, which define direct case supervision as happening during treatment without stating the billing consequence.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual and your participating-provider agreement, or a written coding determination from Optum.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap; requested hours must be justified by documented need at the least restrictive level, and use below 80% of authorized hours over two weeks must be explained at review. A mandated South Carolina group plan may still apply the $73,400 annual behavioral-therapy cap for 2026.',
        status: 'verified',
        cites: [S.optumSCC, S.sc280, S.doiBull],
      },
      noteSignature: {
        value: 'Not addressed. The SCC set what must be documented for coverage, not who signs a session note or when.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual (documentation standards) and your participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Not covered: services that are not ABA, "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA; school coordination is allowed.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      billAsProvider: {
        value: 'Each claim line carries a credential modifier under Optum’s commercial ABA reimbursement policy: HM (RBT), HN (BCaBA), HO (master’s-level BCBA or licensed clinician), HP (doctoral). The policy notes that state requirements "may supplement, modify or supersede" it.',
        status: 'verified',
        cites: [S.optumReimb],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion; the member’s benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.sc280, S.doiBull],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish group size and funding first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis in the SCC; it must be confirmed with validated tools. For a mandated plan, the child must have been diagnosed at age eight or younger.',
        status: 'verified',
        cites: [S.optumSCC, S.sc280],
      },
      diagnosingProviders: {
        value: 'A diagnosis "issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis."',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool from a non-exhaustive list running from screens (M-CHAT, CARS, STAT) to formal diagnostic tools (ADI-R, ADOS/ADOS-2).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate referral in the SCC; ABA needs prior authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.sc280],
      },
      telehealth: {
        value: 'Optum’s Telehealth Billing guide (updated September 2025), commercial plans: "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157." Bill POS 10 (home) or 02. The 97151 assessment and technician 97153 are not on the list, and the SCC say telehealth is meant to supplement, not supplant, in-person care.',
        status: 'verified',
        cites: [S.optumTele, S.optumSCC],
      },
      authTurnaround: {
        value: COMMERCIAL_TURNAROUND + ' UnitedHealthcare/Optum publishes no South Carolina-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.sc3870, S.erisa, S.cfr147],
        verifyVia: 'At benefits verification ask whether the plan is insured or self-funded and what decision and reauthorization lead times Optum applies.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMMERCIAL_COB,
        status: 'plan-dependent',
        cites: [S.reg6943, S.cfr433, S.asdManual, S.tricare, S.champva],
        verifyVia: 'Ask UnitedHealthcare/Optum at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in South Carolina?', a: 'Yes, under Optum’s national ABA criteria for ASD, with Ryan’s Law added for insured large-group plans. Self-funded employer plans follow their own documents.' },
      { q: 'Is UnitedHealthcare a South Carolina Medicaid plan?', a: 'No. SC’s Medicaid MCOs are Absolute Total Care, Healthy Blue, Humana Healthy Horizons, Molina and First Choice by Select Health.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in South Carolina?', a: 'Optum’s commercial guide allows only 97155, 97156 and 97157 by telehealth, billed POS 10 or 02.' },
      { q: 'Does UnitedHealthcare require RBT certification for technicians?', a: 'Optum’s commercial reimbursement policy names a Registered Behavior Technician as the rendering provider for the HM modifier, so plan on RBT-certified technicians.' },
    ],
  },

  'bluecross-blueshield-of-south-carolina': {
    slug: 'bluecross-blueshield-of-south-carolina',
    family: 'bcbs',
    cardDesc: 'SC’s dominant Blue: CAM 387 (rewritten Aug. 2026), PA on all ABA codes via Companion Benefit Alternatives, in-state assessment rule, Ryan’s Law layer.',
    assessmentPA: {
      value: 'Required: BCBSSC’s standard prior-authorization list includes "ABA for Autism" with 97151 through 97158, 0362T and 0373T',
      status: 'verified',
      cites: [S.bcPAList],
    },
    treatmentPA: {
      value: 'Required: autism PA requests go to Companion Benefit Alternatives (CBA) at autismsupport@companiongroup.com, with a signed ABA Service Provider Request form and an assessment dated within 45 days',
      status: 'verified',
      cites: [S.bcPApage, S.bcPAList, S.bcCAM],
    },
    dxRequired: {
      value: 'Yes: a confirmed ASD diagnosis (DSM-5-TR with severity) from a psychiatrist, psychologist, neurologist, developmental pediatrician or other licensed physician experienced in autism',
      status: 'verified',
      cites: [S.bcCAM],
    },
    payer: 'BlueCross BlueShield of South Carolina',
    state: 'SC', kind: 'commercial',
    pill: 'Payer Guide · BlueCross BlueShield of South Carolina',
    h1: 'BlueCross BlueShield of South Carolina ABA coverage: the intake guide.',
    metaTitle: 'BlueCross BlueShield of South Carolina ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How BlueCross BlueShield of South Carolina covers ABA: medical policy CAM 387 (substantially rewritten August 2026), prior authorization through Companion Benefit Alternatives, testing and assessment requirements, the in-state assessment rule, Ryan’s Law, and what intake should collect.',
    intro: [
      'BlueCross BlueShield of South Carolina is the state’s dominant commercial carrier. Its behavioral health benefits, autism included, are administered by its subsidiary Companion Benefit Alternatives (CBA). ABA criteria live in medical policy CAM 387, which had an interim review with "substantial updates to entire policy" on August 7, 2026. The rewrite borrows heavily from South Carolina Medicaid’s ASD manual: a required 97153/97155/97156 mix, home and school restrictions, and the BT grace period.',
      'Layered on top is South Carolina’s autism mandate for group plans (S.C. Code § 38-71-280); CAM 387 itself reminds plans to check their contract language on autism services against the policy. BlueChoice HealthPlan, a BlueCross company, also runs Healthy Blue, one of the state’s Medicaid MCOs; that is a separate guide.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, under medical policy CAM 387' },
      { label: 'Prior auth', value: 'All ABA codes incl. 97151; requests to CBA (autismsupport@companiongroup.com)' },
      { label: 'State mandate', value: 'S.C. Code § 38-71-280 (Ryan’s Law, 2007 Act No. 65)' },
      { label: 'Mandate age', value: 'Diagnosed at age 8 or younger; coverage under age 16' },
      { label: 'Mandate caps', value: 'Behavioral therapy capped at $73,400 for 2026 ($50,000 indexed to CPI; DOI Bulletin 2025-09)' },
      { label: 'Exempt from mandate', value: 'Individual-market, individually underwritten and small-employer plans (by statute); self-funded ERISA plans' },
      { label: 'Licensure', value: 'None: SC does not license behavior analysts; BACB certification governs' },
      { label: 'Fee schedule', value: 'Not public — contracted rates; SC Medicaid’s ASD schedule (97153 $14.88) is the only public benchmark' },
    ],
    sections: [
      {
        h2: 'CAM 387: what BlueCross requires to start ABA',
        body: [
          'CAM 387 calls ABA medically necessary when the child has a confirmed ASD diagnosis "from a psychiatrist, psychologist, neurologist, developmental pediatrician, or other licensed physician experienced in the diagnosis and treatment of autism," and treatment targets ASD’s core deficits without duplicating therapies or school services. To start care, BlueCross wants: DSM-5-TR criteria with severity; completed psychological testing by a licensed clinical psychologist, LPES, psychiatrist, pediatric neurologist or developmental pediatrician (school-psychologist testing counts once one of them reviews it); at least one autism-specific instrument (ADOS-2, ADI-R, DISCO, CARS-2 or CARS-2-HF) plus one more evidence-based measure (MIGDAS-2, SRS-2, SCQ, ASRS, GARS-3 or similar); impairment at least one standard deviation below the mean, or skills needed to participate, or a risk of harm; and a BCBA assessment (VB-MAPP, ESDM checklist, ABLLS-R or AFLS) with graphs, goals and caregiver commitment, submitted on a signed ABA Service Provider Request form. "Assessment and observation are dated within 45 days prior to service request."',
          'Continued care needs six months of graphed data for behavior reduction, skills and parent training, progress statements and a fading plan. CAM 387 also adopts several Medicaid-style exclusions: no ABA "without routine delivery of 97156," no 97153 without 97155 and 97156, no 97155 without 97153, no two providers billing at once, nothing delivered by the child’s own family, and no ABA from a clinic related to the entity that made the diagnosis.',
        ],
        cites: [S.bcCAM],
      },
      {
        h2: 'Prior authorization and claims: Companion Benefit Alternatives',
        body: [
          'BlueCross’s standard prior-authorization list includes "ABA for Autism" with 97151–97158, 0362T and 0373T (it notes PT/OT/ST with an autism diagnosis is covered under the medical plan). Most medical and behavioral requests now route through My Insurance Manager to Cohere Health, but "Autism services are excluded from this process. Continue to submit CBA autism PA requests to autismsupport@companiongroup.com." CBA also takes requests through its Form Resource Center, by fax (803-714-6456) or phone (800-868-1032), and says a member’s benefits decide whether preauthorization is needed. On claims, CBA asks that behavioral health claims "always include the rendering provider’s NPI in the rendering field." CBA’s general network page lists only independently licensed clinicians, so ask CBA how BCBAs, who hold no South Carolina license, are contracted.',
        ],
        cites: [S.bcPAList, S.bcPApage, S.cbaPre, S.cbaClaims, S.cbaJoin],
      },
      {
        h2: 'The South Carolina mandate: what it guarantees',
        body: [SC_MANDATE_BODY],
        cites: [S.sc280, S.doiBull],
      },
      {
        h2: 'Can an out-of-state BCBA treat a BlueCross member, including by telehealth?',
        body: [
          'South Carolina has no behavior-analyst license to obtain, so the limits come from the payer. CAM 387 says "The BCBA-D, BCBA, or BCaBA completing the assessment must be located in the same state as the member or in a contiguous county," "No more than 50% of the assessment units can be conducted via telehealth," and assessments "must be completed by the same ABA provider who will be administering the ABA treatment." A BCBA in another state can therefore assess only from a county bordering the child’s state. ' + SC_LICENSURE_BODY,
        ],
        cites: [S.bcCAM, S.t40c75, S.h3731, S.bacbLic, S.asdManual, S.asdTraining, S.sc3859, S.asdFee],
      },
    ],
    collect: [
      { title: 'Plan type and size', desc: 'Insured large group, State Health Plan, individual, small group or self-funded (BlueCross administers many self-funded plans); the mandate applies only to insured group plans and the State Health Plan.' },
      { title: 'Psychological testing + two autism instruments', desc: 'ADOS-2, ADI-R, DISCO or CARS-2, plus one more measure such as SRS-2 or SCQ, by an accepted clinician.' },
      { title: 'Recent BCBA assessment', desc: 'Dated within 45 days of the request, by the same provider who will treat, from in state or a contiguous county.' },
      { title: 'Caregiver commitment', desc: 'CAM 387 requires parent participation and routine 97156; in-home sessions need an adult caregiver present.' },
      { title: 'Treatment plan signed by the treating doctor', desc: 'For a mandated plan, coverage follows a treatment plan prescribed by the child’s treating medical doctor.' },
    ],
    sources: [S.bcCAM, S.bcPAList, S.bcPApage, S.cbaPre, S.cbaClaims, S.cbaJoin, S.sc280, S.doiBull, S.sc3859, S.sc3870, S.reg6943, S.t40c75, S.bacbLic, S.erisa, S.cfr147, S.asdFee],
    deliveryRules: {
      supervision: {
        value: 'CAM 387 requires delivery "by qualified providers who possess appropriate education, training, and supervision" and defines the tiers: BCaBAs practice under a BCBA, RBTs "under the close, ongoing supervision of a BCBA-D, BCBA or BCaBA," and an uncredentialed behavior technician gets one 90-day grace period, during which they may work only in a practice-based location with a BCaBA/BCBA/BCBA-D physically on site. It sets no numeric supervision ratio, and BACB supervision hours are not billable treatment.',
        status: 'verified',
        cites: [S.bcCAM],
      },
      concurrentBilling: {
        value: '"Two ABA providers billing at the same time" is not medically necessary under CAM 387. The policy does not carve out an exception for 97155 with 97153.',
        status: 'plan-dependent',
        cites: [S.bcCAM],
        verifyVia: 'Companion Benefit Alternatives, 800-868-1032: ask whether 97155 and 97153 may be billed for the same clock time.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'CAM 387 publishes no unit caps; hours are requested on the ABA Service Provider Request form and must match medical necessity. A mandated South Carolina group plan may apply the $73,400 annual behavioral-therapy cap for 2026.',
        status: 'verified',
        cites: [S.bcCAM, S.sc280, S.doiBull],
      },
      noteSignature: {
        value: 'CAM 387 requires the assessment and program plan to carry the "Signature, title, and date by the multidisciplinary team members including the parent and/or caregiver," but sets no session-note signature rule.',
        status: 'unverified',
        cites: [S.bcCAM],
        verifyVia: 'Companion Benefit Alternatives provider portal FAQ or 800-868-1032: ask who must sign each session note.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Home, clinic, office or school only: services "outside of the physical space of the home, clinic, office, or school" (sporting events, camps) are excluded unless approved. School ABA needs a current IEP, FBA and BIP and a school-based goal; in-home ABA requires an adult caregiver physically present, and both must be delivered by an RBT, BCaBA, BCBA or BCBA-D.',
        status: 'verified',
        cites: [S.bcCAM],
      },
      billAsProvider: {
        value: 'CBA asks that behavioral health claims "always include the rendering provider’s NPI in the rendering field." Neither CBA nor CAM 387 says whether RBT time bills under the supervising BCBA.',
        status: 'plan-dependent',
        cites: [S.cbaClaims, S.bcCAM],
        verifyVia: 'Companion Benefit Alternatives, 800-868-1032: ask which NPI goes in the rendering field for RBT services.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'CAM 387 sets no age limit.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.bcCAM, S.sc280, S.doiBull],
        verifyVia: 'My Insurance Manager benefits check or CBA, 800-868-1032: establish plan type (insured group, State Health Plan, individual, small group or self-funded) and its autism terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the BCBA assessment and observation must be "dated within 45 days prior to service request," for initial and continued care. For a mandated plan, the child must have been diagnosed at age eight or younger.',
        status: 'verified',
        cites: [S.bcCAM, S.sc280],
      },
      diagnosingProviders: {
        value: 'Diagnosis by "a psychiatrist, psychologist, neurologist, developmental pediatrician, or other licensed physician experienced in the diagnosis and treatment of autism"; testing by a licensed clinical psychologist, LPES, psychiatrist, pediatric neurologist or developmental pediatrician.',
        status: 'verified',
        cites: [S.bcCAM],
      },
      diagnosticTools: {
        value: 'At least one autism-specific instrument (ADOS-2, ADI-R, DISCO, CARS-2 or CARS-2-HF) plus one more evidence-based measure (MIGDAS-2, SRS-2, SCQ, ASRS, GARS-3 or similar); the BCBA assessment uses VB-MAPP, ESDM checklist, ABLLS-R or AFLS.',
        status: 'verified',
        cites: [S.bcCAM],
      },
      referral: {
        value: 'CAM 387 requires no separate referral; it requires prior authorization with the signed ABA Service Provider Request form.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.bcCAM, S.bcPApage, S.sc280],
      },
      telehealth: {
        value: 'For the assessment, "No more than 50% of the assessment units can be conducted via telehealth," and the assessing BCBA must be in the member’s state or a contiguous county. CAM 387 sets no telehealth rule for treatment codes.',
        status: 'plan-dependent',
        cites: [S.bcCAM],
        verifyVia: 'Companion Benefit Alternatives, 800-868-1032: ask which ABA treatment codes the member’s plan pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: COMMERCIAL_TURNAROUND + ' BlueCross and CBA publish no ABA-specific turnaround.',
        status: 'plan-dependent',
        cites: [S.sc3870, S.erisa, S.cfr147, S.cbaPre],
        verifyVia: 'Companion Benefit Alternatives, 800-868-1032: ask the expected turnaround for initial and continued ABA requests.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMMERCIAL_COB,
        status: 'plan-dependent',
        cites: [S.reg6943, S.cfr433, S.asdManual, S.tricare, S.champva],
        verifyVia: 'Ask BlueCross (My Insurance Manager) for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does BlueCross BlueShield of South Carolina cover ABA?', a: 'Yes, for ASD under medical policy CAM 387, with prior authorization through Companion Benefit Alternatives. Insured large-group plans and the State Health Plan also carry Ryan’s Law.' },
      { q: 'Does the ABA assessment need prior authorization with BlueCross South Carolina?', a: 'Yes. 97151 is on BlueCross’s standard prior-authorization list with the other ABA codes.' },
      { q: 'Where do I send BlueCross South Carolina autism authorization requests?', a: 'To Companion Benefit Alternatives at autismsupport@companiongroup.com; autism requests are excluded from the Cohere Health route other behavioral requests use.' },
      { q: 'What testing does BlueCross South Carolina want before ABA?', a: 'Psychological testing with at least one autism-specific instrument (ADOS-2, ADI-R, DISCO or CARS-2) and one more measure such as SRS-2 or SCQ, plus a BCBA assessment dated within 45 days of the request.' },
      { q: 'Can an out-of-state BCBA serve a BlueCross South Carolina member?', a: 'Only partly: the BCBA completing the assessment must be in the member’s state or a contiguous county, and at most half the assessment units may be done by telehealth. South Carolina itself issues no behavior-analyst license.' },
    ],
  },
};

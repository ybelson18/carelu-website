import type { PayerConfig, PayerSource } from './types.js';

/* Washington — researched October 2026 from primary sources only.
   app.leg.wa.gov (RCW/WAC) and hca.wa.gov answer plain curl with a browser UA. chpw.org
   returns a 403 to curl; its PA list and ABA form were read in full through r.jina.ai, but its
   provider manual was not readable. molinahealthcare.com’s Washington Medicaid pages now serve the
   new-site "Page Not Found" body (also via r.jina.ai) and web.archive.org reset every connection,
   so Molina’s own documents could not be read this run. The Optum Washington Medicaid criteria PDF
   has almost no text layer; it was read by rendering the pages to images. */

const S: Record<string, PayerSource> = {
  wac531a: { title: 'Chapter 182-531A WAC — Applied behavior analysis (Apple Health ABA rules: COE evaluation, stages, provider requirements, PA)', url: 'https://app.leg.wa.gov/wac/default.aspx?cite=182-531A&full=true' },
  abaBG: { title: 'HCA — Washington Apple Health Applied Behavior Analysis (ABA) Program Billing Guide (January 1, 2026)', url: 'https://www.hca.wa.gov/assets/billers-and-providers/aba-services-bg-20260101.pdf' },
  abaFee: { title: 'HCA — ABA Treatment Fee Schedule (effective July 1, 2026; last updated July 29, 2026)', url: 'https://www.hca.wa.gov/assets/billers-and-providers/aba-20260701.xlsx' },
  coeList: { title: 'HCA — Index of ABA Centers of Excellence (COE list)', url: 'https://www.hca.wa.gov/assets/billers-and-providers/index-coe-applied-behavioral-analysis.pdf' },
  hcaTA: { title: 'HCA — ABA Provider Technical Assistance webinar slides, with DOH and all five Apple Health MCOs (February 27, 2025)', url: 'https://www.hca.wa.gov/assets/billers-and-providers/aba-provider-technical-assistance-february-27-2025.pdf' },
  hcaMC: { title: 'HCA — Apple Health managed care (plan list and phone numbers)', url: 'https://www.hca.wa.gov/free-or-low-cost-health-care/i-need-medical-dental-or-vision-care/apple-health-managed-care' },
  teleBG: { title: 'HCA — Washington Apple Health Telemedicine Policy and Billing Guide (January 1, 2026)', url: 'https://www.hca.wa.gov/assets/billers-and-providers/telemedicine-policy-and-billing-bg-20260101.pdf' },
  wac0165: { title: 'WAC 182-501-0165 — Medical necessity determination process (agency decision timeframes)', url: 'https://app.leg.wa.gov/WAC/default.aspx?cite=182-501-0165' },
  wac0200: { title: 'WAC 182-501-0200 — Third-party resources', url: 'https://app.leg.wa.gov/WAC/default.aspx?cite=182-501-0200' },
  wac0150: { title: 'WAC 182-502-0150 — Time limits for providers to bill the agency', url: 'https://app.leg.wa.gov/WAC/default.aspx?cite=182-502-0150' },
  wac526: { title: 'WAC 182-526-0200 — Enrollee appeals of a managed care organization action (hearing deadlines)', url: 'https://app.leg.wa.gov/WAC/default.aspx?cite=182-526-0200' },
  rcw18380: { title: 'Chapter 18.380 RCW — Applied behavior analysis (licensure of behavior analysts, assistant behavior analysts and certified behavior technicians)', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=18.380&full=true' },
  wac246805: { title: 'Chapter 246-805 WAC — Applied behavior analysis (DOH rules: supervision, reciprocity, temporary license)', url: 'https://app.leg.wa.gov/WAC/default.aspx?cite=246-805&full=true' },
  rcw18134: { title: 'Chapter 18.134 RCW — Uniform Telehealth Act (out-of-state practitioners, RCW 18.134.050)', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=18.134&full=true' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Washington: 2015, WA State Department of Health)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  rcw44341: { title: 'RCW 48.44.341 — Mental health services, health care service contractors (effective until January 1, 2027)', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=48.44.341' },
  rcw46291: { title: 'RCW 48.46.291 — Mental health services, HMOs (effective until January 1, 2027)', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=48.46.291' },
  rcw21241: { title: 'RCW 48.21.241 — Mental health services, group disability plans (effective until January 1, 2027)', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=48.21.241' },
  rcw43766: { title: 'RCW 48.43.766 — Mental health and substance use disorder services, coverage and utilization review (effective January 1, 2027)', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=48.43.766' },
  hb1432: { title: 'E2SHB 1432, Chapter 227, Laws of 2025 — updates Washington’s mental health parity law; repeals RCW 48.20.580, 48.21.241, 48.44.341, 48.46.291 from January 1, 2027', url: 'https://lawfilesext.leg.wa.gov/biennium/2025-26/Pdf/Bills/Session%20Laws/House/1432-S2.SL.pdf' },
  wac5642: { title: 'WAC 284-43-5642 — Essential health benefit categories (mental health incl. "behavioral treatment for a DSM category diagnosis"; eff. 1/19/2026)', url: 'https://app.leg.wa.gov/WAC/default.aspx?cite=284-43-5642' },
  rcw43830: { title: 'RCW 48.43.830 — Prior authorization standards and decision timeframes (effective until January 1, 2027)', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=48.43.830' },
  rcw43735: { title: 'RCW 48.43.735 — Reimbursement of health care services provided through telemedicine', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=48.43.735' },
  wac431: { title: 'WAC 284-170-431 — Provider contracts, terms and conditions of payment (prompt pay)', url: 'https://app.leg.wa.gov/WAC/default.aspx?cite=284-170-431' },
  wac51205: { title: 'WAC 284-51-205 — Coordination of benefits, order of benefit determination rules', url: 'https://app.leg.wa.gov/WAC/default.aspx?cite=284-51-205' },
  rcw43535: { title: 'RCW 48.43.535 — Independent review of health care disputes', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=48.43.535' },
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  // Medicaid MCOs
  chpwPA: { title: 'Community Health Plan of Washington — 2026 Prior Authorization List and Utilization Guidelines, Behavioral Services (eff. January 1, 2026)', url: 'https://www.chpw.org/wp-content/uploads/content/provider-center/prior-authorization/2026/Prior-Authorization-List-and-Utilization-Guidelines-Behavioral-Services.pdf' },
  chpwForm: { title: 'Community Health Plan of Washington — ABA Therapy Initial Request Form (fax 206-613-8873)', url: 'https://www.chpw.org/wp-content/uploads/content/provider-center/prior-authorization/ABA-Therapy-Request-Form.pdf' },
  chpwBHPA: { title: 'Community Health Plan of Washington — Behavioral health prior authorization (forms page)', url: 'https://www.chpw.org/provider-center/prior-authorization/behavioral-prior-authorization/' },
  ccBH104: { title: 'Coordinated Care of Washington — Clinical Policy WA.CP.BH.104, Applied Behavior Analysis (last revised 01/26, effective 03/01/26)', url: 'https://www.coordinatedcarehealth.com/content/dam/centene/Coordinated%20Care/policies/clinical-policies/WA.CP.BH.104.pdf' },
  wlpPM: { title: 'Wellpoint Washington — Apple Health Provider Manual (WA-WP-CD-PM-014310-26, July 1, 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/WA_WLP_CAID_ProviderManual.pdf' },
  uhcPM: { title: 'UnitedHealthcare Community Plan — 2026 Care Provider Manual, Washington Apple Health (PMI 05282026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/WA-Care-Provider-Manual.pdf' },
  uhcBH: { title: 'UnitedHealthcare Community Plan of Washington — Behavioral Health page (ABA Corner: online ABA Treatment Request Form, roster template)', url: 'https://www.uhcprovider.com/en/health-plans-by-state/washington-health-plans/wa-comm-plan-home/wa-cp-bh.html' },
  optumWA: { title: 'Optum / UnitedHealthcare Community Plan — Washington Medicaid Supplemental Clinical Criteria, BH803WA112025 (effective November 2025; ABA section)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/walocg/waIMCloc.pdf' },
  // Commercial
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; Exhibit A covers Maryland only)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (Network Participation Criteria)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  aetnaTele: { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates (BH 803ABA STM72026, July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumNNM: { title: 'Optum National Network Manual (effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  premPolicy: { title: 'Premera Blue Cross Medical Policy 3.01.510 — Applied Behavior Analysis (ABA) (effective May 1, 2026; last revised Apr. 27, 2026)', url: 'https://www.premera.com/medicalpolicies/3.01.510.pdf' },
  premABA: { title: 'Premera — Applied Behavior Analysis (ABA) Resources for providers', url: 'https://www.premera.com/wa/provider/applied-behavior-analysis-resources/' },
  premCodeInd: { title: 'Premera — Code List, Individual Plans Only (050237, 10-01-2026)', url: 'https://www.premera.com/documents/050237.pdf' },
  premCodeGrp: { title: 'Premera — Code List, Non-Individual Plans Only (027236, 10-01-2026)', url: 'https://www.premera.com/documents/027236.pdf' },
  premPAPage: { title: 'Premera — About prior authorization (submission sites by plan type)', url: 'https://www.premera.com/wa/provider/utilization-review/about-prior-authorization/' },
  regBH18: { title: 'Regence Medical Policy BH18 — Applied Behavior Analysis for the Treatment of Autism Spectrum Disorder (version effective 8/1/2025, carrying a notice that a revision takes effect 11/1/2026)', url: 'https://beonbrand.getbynder.com/m/e4646f415eb7f4eb/' },
  regBH33: { title: 'Regence Medical Policy BH33 — ABA Initial Assessment for the Treatment of Autism Spectrum Disorder (eff. 8/1/2025)', url: 'https://beonbrand.getbynder.com/m/8360cc45444cab46/' },
};

/* ---- Shared Washington commercial layer (same facts on every commercial guide) ---- */
const WA_MANDATE_BODY =
  'Washington has no stand-alone autism insurance statute. ABA reaches state-regulated plans through the mental health parity laws instead. Until January 1, 2027, RCW 48.44.341 (health care service contractors), RCW 48.46.291 (HMOs) and RCW 48.21.241 (group disability insurers) require a plan that covers medical and surgical services to cover "mental health services," defined for plans issued or renewed on or after January 1, 2021 as "medically necessary outpatient and inpatient services provided to treat mental health and substance use disorders covered by the diagnostic categories listed in" the DSM. Autism spectrum disorder is a DSM diagnosis. Cost sharing for mental health services may be no more than for medical and surgical services, and "Treatment limitations or any other financial requirements on coverage for mental health services are only allowed if the same limitations or requirements are imposed on coverage for medical and surgical services." The statutes name no ABA-specific age, hour or dollar limit. For individual and small-group plans, the Insurance Commissioner’s essential health benefit rule (WAC 284-43-5642, effective January 19, 2026) lists "Behavioral treatment for a DSM category diagnosis" among the mental health services every plan must include, and says that when habilitative services treat a DSM diagnosis, "the mental health parity requirements apply." The law changes on January 1, 2027: Chapter 227, Laws of 2025 (E2SHB 1432) repeals those parity sections and replaces them with RCW 48.43.766, which covers DSM diagnoses plus the mental, behavioral and neurodevelopmental chapters of ICD and DC:0-5, and bars utilization review and clinical review criteria that "deviate from generally accepted standards of mental health and substance use disorder care." Regence’s own ABA policy names "Washington’s Mental Health Parity Act (RCW 48.44)" as the Washington basis for its coverage. None of this reaches self-funded employer plans, which answer to ERISA and federal parity law.';

const WA_LICENSURE_BODY =
  'Washington licenses ABA practitioners at three levels under chapter 18.380 RCW, administered by the Department of Health: licensed behavior analyst (LBA), licensed assistant behavior analyst (LABA) and certified behavior technician (CBT). The BACB’s licensure table lists Washington (2015, WA State Department of Health). "No person may engage in the practice of applied behavior analysis unless he or she holds a license or a temporary license under this chapter," and no one may practice as a technician without DOH certification (RCW 18.380.020). The exemptions in RCW 18.380.030 cover holders of another Washington credential practicing within their own scope (psychologists, for example), federal employees, school employees working only for their school, supervised students and trainees, and supervised family members; none of them exempts a BCBA licensed in another state. DOH may accept national certification in lieu of the education and exam requirements (RCW 18.380.050(3); WAC 246-805-100 accepts current certification from an approved credentialing entity). An out-of-state LBA has two quicker routes: reciprocity where the other state’s standards are "substantially equivalent" (WAC 246-805-510), and a 180-day temporary license for applicants who do not live in Washington and hold an active, unrestricted behavior analyst license elsewhere, which "will not be renewed, reissued, or extended" (WAC 246-805-520). Telehealth does not get around this. Washington’s Uniform Telehealth Act lets an out-of-state practitioner treat a patient located in Washington only with a Washington license, or for a consultation with the treating practitioner, a specialty assessment or recommendation "This does not include the provision of treatment," or follow-up for an established patient temporarily in the state (RCW 18.134.050). Supervision rules come from DOH: a CBT works "under close, ongoing supervision," with at least two face-to-face contacts a month (in person or by video) and direct supervision and observation of at least five percent of the CBT’s hours each month, including seeing the CBT with each client at least once every three months (WAC 246-805-330).';

const WA_CLAIMS_BODY =
  'Washington sets the claim-side floor for state-regulated plans. Prompt pay: participating-provider contracts must require the carrier to pay 95 percent of the monthly volume of clean claims within 30 days of receipt and to pay or deny 95 percent of all claims within 60 days; clean claims more than 61 days old earn interest at one percent a month (WAC 284-170-431). A denial must give "the specific reason," and a medical necessity denial must, on request, disclose how the claim failed the guidelines. Prior authorization: for health plans issued or renewed on or after January 1, 2024, a carrier must decide an electronic standard request within three calendar days (excluding holidays) and an electronic expedited request within one calendar day; non-electronic requests get five and two calendar days. A request for missing information must come within one calendar day of an electronic submission (five days for a non-electronic standard one), only a licensed physician or licensed health professional may deny on medical necessity, and since 2026 artificial intelligence "shall not be the sole means used to deny, delay, or modify health care services" (RCW 48.43.830). Members can take an adverse decision to a certified independent review organization (RCW 48.43.535). Timely filing limits and appeal windows for providers are set by each carrier’s contract; get them from your agreement.';

const WA_FEE_BENCHMARK =
  'For a public benchmark, Washington Apple Health’s fee-for-service ABA schedule (effective July 1, 2026) pays 97153 at $12.40 and 97155 at $14.09 per 15-minute unit; commercial contracts are negotiated separately.';

const MANDATE_REFERRAL_TAIL =
  ' Washington’s parity statutes add no referral requirement of their own; they allow a plan to require medical necessity and to manage mental health services only where it applies "a comparable requirement" to medical and surgical services (RCW 48.44.341(3)–(4)). Self-funded ERISA plans sit outside the statute.';

const MANDATE_AGE_TAIL =
  ' For fully insured Washington plans, the parity statutes allow treatment limitations on mental health services "only if the same limitations or requirements are imposed on coverage for medical and surgical services," and they name no ABA-specific age or dollar limit. Self-funded ERISA plans are outside the statute, so plan funding type decides whether that binds.';

const waAuth = (carrier: string): string =>
  'Depends on how the plan is funded. Fully insured Washington plans issued or renewed on or after January 1, 2024 fall under RCW 48.43.830: an electronic standard prior-authorization request must be decided "within three calendar days, excluding holidays," an electronic expedited request within one calendar day, a non-electronic standard request within five calendar days and a non-electronic expedited one within two. If information is missing, the carrier must ask within one calendar day of an electronic request (five days for a non-electronic standard request). Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," with one 15-day extension. ' + carrier + ' publishes no Washington-specific ABA turnaround.';

const waAuthVia = (carrier: string): string =>
  'At benefits verification ask whether the plan is fully insured in Washington or self-funded (ERISA), whether you are submitting through ' + carrier + '’s electronic prior-authorization process, and what reauthorization lead time it expects.';

const waCob = (carrier: string): string =>
  'For a child on two plans, Washington’s coordination-of-benefits rule is the birthday rule: unless a court decree says otherwise, "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (if both parents share a birthday, the plan that has covered a parent longer); a court decree assigning health coverage controls, and with no decree the custodial parent’s plan pays first (WAC 284-51-205). That binds state-regulated plans; a self-funded plan sets its own order. If the child also has Apple Health, ' + carrier + ' pays first: Apple Health requires providers to bill known third parties and does not pay when third-party benefits are available (WAC 182-501-0200; 42 CFR 433.139). TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).';

const waCobVia = (carrier: string): string =>
  'Ask ' + carrier + ' at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has.';

/* ---- Shared Apple Health layer (state rules the MCO guides restate where the plan publishes nothing different) ---- */
const AH_TELEHEALTH =
  'HCA’s ABA billing guide (January 1, 2026) lists the ABA codes allowed by telemedicine. Allowed: 97155, 97156 and 97157, plus team conferences 99366 and 99368. Allowed with limits: 97151, but only for indirect work (caregiver interviews and rating scales, treatment plan development, record review, scoring); direct observation and direct assessment of the child may not be done remotely. In the day treatment program (H2020), direct ABA must be in person in the clinic, and CBT supervision may be by audio-visual telemedicine only while an LBAT stays on site. Not allowed by telemedicine: 0362T, 0373T, 97153, 97154 and 97158. For telemedicine the originating site is where the client is (where the caregiver is, for caregiver training). Bill POS 02, or POS 10 when the client is at home, and add modifier 95 when the distant site is a nonfacility; to bill for a client located in Washington the practitioner must be licensed in Washington or hold a compact license Washington recognizes, and no behavior analyst compact is on HCA’s list.';

const AH_SUPERVISION =
  'The lead behavior analysis therapist (LBAT) must "Supervise a minimum of five percent of the total direct care per week provided by the CBT (e.g., one hour of supervision per twenty hours of care)," and a CBT must be "supervised directly by an LBAT for at least five percent of total direct care per week" (WAC 182-531A-0700) and review the client’s progress with the LBAT at least every two weeks. When a LABA fills the LBAT role, the LABA and the supervising LBA or licensed psychologist share those duties. DOH’s licensing rule layers on top: at least two face-to-face contacts a month with each CBT and direct supervision and observation of at least five percent of the CBT’s monthly hours, seeing the CBT with each client at least once every three months (WAC 246-805-330).';

const AH_BILLING =
  'Every LBA, LABA and CBT must hold a DOH credential, an NPI and an Apple Health enrollment as a servicing provider under a group’s core provider agreement, be on the roster the group sends each MCO, and have their own NPI in the servicing provider box on claims for dates of service on and after July 1, 2025 (HCA technical assistance, February 2025). HCA’s system "will deny/reject the claim if the servicing provider NPI has not been approved for enrollment." The only taxonomy for ABA is 103K00000X, entered in both the billing and servicing taxonomy fields. Claims must carry the authorization number, and dates, codes, modifiers and units must match the authorization.';

const AH_DX =
  'Yes, from an HCA-recognized Center of Excellence (COE). The client must have a "qualifying diagnosis": autism spectrum disorder as defined by DSM or DC:0-5, "or other intellectual or developmental disability for which there is evidence ABA is effective," confirmed by a COE together with functional impairment and a reasonable expectation of measurable improvement (WAC 182-531A-0200, -0400). HCA applies the COE requirement "whether the client is fee-for-service or enrolled in a managed care organization."';

const AH_AGE =
  'No upper age limit. Chapter 182-531A WAC sets no age bound for ABA, and EPSDT (age 20 and younger) lets published limits be exceeded on medical necessity review. For a client first diagnosed at 21 or older, the COE who evaluates and orders ABA must be a psychiatric mental health nurse practitioner or a general practitioner designated by HCA as a COE, or a neurologist, psychiatrist or psychologist; ARNPs, physicians, PAs and naturopaths need additional COE training to prescribe ABA for adults.';

const AH_DIAGNOSERS =
  'A Center of Excellence: an individual provider, not a facility. Licensed under Title 18 RCW and experienced in diagnosing and treating ASD, a developmental pediatrician, neurologist, pediatric neurologist, pediatric psychiatrist, psychiatrist or psychologist qualifies whether or not they are on HCA’s COE list. ARNPs (including psychiatric mental health nurse practitioners), physicians, physician assistants and naturopaths qualify only after HCA’s COE training and designation, on a signed COE Attestation form HCA 13-0009 (WAC 182-531A-0800). HCA may, at its discretion, accept a non-COE evaluation, for example a recent evaluation paid by the child’s primary insurance. A COE serving an MCO member must also be contracted with that MCO.';

const AH_TOOLS =
  'The COE documents "Results of formal diagnostic procedures performed by a provider, including name of measure, dates, and results, as available," or the clinical findings and observations used to confirm the diagnosis (WAC 182-531A-0500). The rule’s examples of ASD diagnostic tools are the ADI and the ADOS. If the COE has them, the evaluation must also include the ASD screening tool and date, a formal cognitive or developmental assessment with verbal, nonverbal and full-scale scores (examples: Mullen, Bayley, Wechsler) and a formal adaptive behavior assessment with domain scores (Vineland, ABAS), plus vision and hearing results.';

const AH_REFERRAL =
  'Yes: a COE prescription. "Any person may refer a client" to a COE for an evaluation, including the PCP, a school or early intervention professional, the family or the MCO, though many COEs require a PCP referral and an MCO may require prior authorization for the COE evaluation. If the COE concludes ABA is appropriate it writes "a prescription for ABA services" and sends the evaluation and prescription to the chosen ABA provider or the family (WAC 182-531A-0500). The COE evaluation and order go in with the first PA request.';

const AH_PLACE =
  'Home, center, community (a school, daycare, inpatient unit or playground, for example) or an HCA-approved day treatment program, or a mix. Services in community settings such as a school or restaurant "must be included in the ABA therapy treatment plan" (WAC 182-531A-0600). Not covered unless prior authorized: "School-based health care services or early intervention program-based services" (WAC 182-531A-1000). Inpatient ABA is limited to short-term, focused treatment of severe harmful behavior that is preventing discharge, ordered by a COE. The day treatment program (H2020) is typically authorized once in a lifetime for 48 service days.';

export const washingtonPayers: Record<string, PayerConfig> = {
  'washington-medicaid': {
    slug: 'washington-medicaid',
    cardDesc: 'Apple Health (HCA) covers ABA for any age under WAC 182-531A: COE evaluation and prescription first, then PA for 97153 and group codes; five MCOs run it for most members.',
    assessmentPA: {
      value: 'No for fee-for-service: 97151 and 0362T carry no PA on HCA’s fee schedule and billing guide (97151 is limited to 28 units per assessment, 2 per year). MCO members follow their plan',
      status: 'verified',
      cites: [S.abaFee, S.abaBG],
    },
    treatmentPA: {
      value: 'Yes for 97153, 0373T, 97154, 97158 and the H2020 day program; 97155, 97156 and 97157 need no PA. HCA grants 3- to 6-month authorizations; the request must reach HCA within 60 days of the LBAT’s assessment and plan',
      status: 'verified',
      cites: [S.abaFee, S.abaBG, S.wac531a],
    },
    dxRequired: {
      value: AH_DX,
      status: 'verified',
      cites: [S.wac531a, S.abaBG],
    },
    payer: 'Washington Apple Health (Medicaid)',
    state: 'WA', kind: 'state-medicaid',
    pill: 'Payer Guide · Washington Apple Health',
    h1: 'Washington Apple Health ABA coverage: the intake guide.',
    metaTitle: 'Washington Apple Health (Medicaid) ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Washington Apple Health covers ABA under WAC 182-531A: the Center of Excellence evaluation, the three-stage pathway, which codes need prior authorization, the 2026 fee schedule, telemedicine rules, and the five managed care plans that run ABA for most members.',
    intro: [
      'Washington Apple Health, the state’s Medicaid program run by the Health Care Authority (HCA), covers applied behavior analysis under its own rule, chapter 182-531A WAC, and an ABA billing guide that took effect January 1, 2026. The program is built as a three-stage pathway: a Center of Excellence (COE) evaluates the client and prescribes ABA, a lead behavior analysis therapist (LBAT) assesses the client and writes the treatment plan, and only after prior authorization do services start. The rule sets no age limit.',
      'Most Apple Health clients are in one of five managed care plans: Community Health Plan of Washington, Coordinated Care, Molina Healthcare of Washington, UnitedHealthcare Community Plan and Wellpoint Washington. The plan authorizes and pays for ABA, using the same WAC criteria. HCA authorizes and pays fee-for-service clients directly, including clients enrolled in a Behavioral Health Services Only plan.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under WAC 182-531A, for ASD or another developmental/intellectual disability for which ABA is effective; no age limit' },
      { label: 'Structure', value: 'Five MCOs (CHPW, Coordinated Care, Molina, UnitedHealthcare, Wellpoint) for most members; HCA fee-for-service for the rest, incl. BHSO enrollees' },
      { label: 'Gatekeeper', value: 'Center of Excellence (COE) evaluation and ABA prescription, required for FFS and MCO members alike' },
      { label: 'FFS prior auth', value: 'PA on 97153, 0373T, 97154, 97158, H2020; none on 97151, 0362T, 97155, 97156, 97157' },
      { label: 'FFS rates (per 15 min, 7/1/2026)', value: '97151 $18.79 · 97153 $12.40 · 97155 $14.09 · 97156 $18.32 · 0362T $58.80 · 0373T $24.11 · H2020 $571.30/day' },
      { label: 'Who may deliver', value: 'DOH-licensed LBA or LABA as LBAT (or a licensed MHC, LMFT, LICSW, LASW or psychologist with BCBA/BCaBA attestation); DOH-certified CBT' },
      { label: 'Licensure', value: 'Yes: chapter 18.380 RCW (LBA, LABA, CBT); every clinician enrolls as an Apple Health servicing provider' },
      { label: 'Timely filing (FFS)', value: '365 calendar days from date of service; adjustments within 24 months' },
    ],
    sections: [
      {
        h2: 'The pathway: COE evaluation, LBAT assessment, then prior authorization',
        body: [
          'Stage one is the Center of Excellence. A COE is an individual provider, not a clinic, who performs a comprehensive diagnostic evaluation and, if ABA is appropriate, writes a prescription. The evaluation must show how the diagnosis was made or confirmed (formal diagnostic measures with names, dates and results, or the clinical findings), that the client’s behaviors or skill deficits keep them from participating in home, school or community activities or make them a safety risk, that less intrusive interventions were tried or no equally effective alternative exists, and that the COE reasonably expects measurable improvement (WAC 182-531A-0400, -0500). Developmental pediatricians, neurologists, pediatric neurologists, pediatric psychiatrists, psychiatrists and psychologists experienced with autism qualify automatically; ARNPs, physicians, PAs and naturopaths must complete HCA’s COE training and be designated. HCA publishes the COE list.',
          'Stage two is the LBAT. The family picks the provider and setting ("Neither HCA nor the MCO chooses the client’s ABA provider"), and the LBAT completes an assessment and treatment plan on HCA’s Assessment and Behavior Change Plan form, HCA 13-400, or an equivalent. The plan covers the next six months, must correlate with the COE’s current evaluation, and must coordinate with school, early intervention and other therapies. The PA request "must be received by HCA within 60 days from the date of the assessment and ABA therapy treatment plan," with the COE evaluation and order, the LBAT assessment and plan, and the ABA Level of Support Requirement form, HCA 12-411. Fee-for-service requests go by direct data entry in ProviderOne or by fax to (866) 668-1214 behind form HCA 13-835, at least 15 days before services are to begin. HCA does not authorize ABA retroactively except for delayed eligibility certification, though during recertification the WAC lets HCA retroactively authorize dates of service.',
          'Stage three is treatment. HCA grants authorization "in three to six-month increments, or longer at HCA’s discretion." Recertification needs a new request, an updated HCA 12-411, and a reevaluation and revised plan showing measurable change, with a projection of outcome, assessment instruments, developmental markers of readiness and evidence of coordination; the WAC says to request it 15 calendar days before the authorization expires, and the billing guide asks for three weeks. HCA may ask the COE to review progress before renewing, and services continue pending recertification. Caregiver training after a client has been approved for ABA needs no separate preauthorization: "All plans have agreed" on that.',
        ],
        cites: [S.wac531a, S.abaBG, S.coeList],
      },
      {
        h2: 'Which codes need prior authorization, and what Apple Health pays',
        body: [
          'HCA’s ABA fee schedule (effective July 1, 2026, updated July 29, 2026) pays, per 15-minute unit: 97151 behavior identification assessment $18.79 (LBAT only; 28 units per assessment, 2 assessments a year; no PA); 0362T $58.80 (LBAT on site with two or more CBTs; 2-hour assessments, 3 a year per provider; no PA); 97153 $12.40 (PA); 0373T $24.11 (PA; "do not bill simultaneously with 97155 or 97153"); 97155 $14.09 (no PA); 97156 $18.32 (no PA). Group codes are paid per client and step down with group size: 97154 and 97158 from $12.40 (2 clients, modifier UN) to $8.88 (6 or more, US), both with PA; 97157 from $10.34 to $7.41, no PA. Team conferences pay $28.78 (99366, with the client) and $20.87 (99368). The early childhood intensive behavioral intervention day treatment program bills H2020 at $571.30 per diem with PA. 97152 is not on the schedule.',
          'The WAC itself allows one initial ABA assessment and plan a year plus up to four more assessments and revisions, one lifetime authorization of day treatment, and supervision of the technician; requests beyond those limits go through a limitation extension, and for clients 20 and younger EPSDT allows published limits to be exceeded on medical necessity review. HCA does not pay for ABA that duplicates services in another setting, is provided by a family member, or is paid for by another state agency. Not covered: autism camps, dolphin and equine therapy, primarily educational services, recreational therapy, respite, safety monitoring, vocational rehabilitation, life coaching, and school-based or early intervention program services unless prior authorized.',
        ],
        cites: [S.abaFee, S.abaBG, S.wac531a],
      },
      {
        h2: 'Licensure, enrollment and out-of-state BCBAs',
        body: [
          'Washington licenses behavior analysts. Apple Health ABA is delivered by DOH-credentialed licensed behavior analysts (LBA), licensed assistant behavior analysts (LABA) and certified behavior technicians (CBT). The LBAT must be a DOH-licensed LBA, a LABA supervised by an LBA or licensed psychologist, or a licensed mental health counselor, marriage and family therapist, independent clinical or advanced social worker, or psychologist with a BCBA or BCaBA attestation (form HCA 13-0008) on file; the LBAT enrolls as a servicing provider authorized to supervise ancillary providers (WAC 182-531A-0800). A BCBA licensed in another state cannot treat an Apple Health client from out of state on that license alone: chapter 18.380 RCW requires a Washington license or temporary license to practice ABA, and HCA pays telemedicine to a client in Washington only when the practitioner is licensed in Washington or holds a compact license Washington recognizes. DOH offers reciprocity for substantially equivalent state licenses and a non-renewable 180-day temporary license for nonresidents licensed elsewhere.',
          AH_BILLING,
        ],
        cites: [S.wac531a, S.abaBG, S.rcw18380, S.wac246805, S.teleBG, S.hcaTA, S.bacbLic],
      },
      {
        h2: 'Claims operations: timely filing, EVV, telehealth billing and appeals',
        body: [
          'Fee-for-service claims must be submitted with a transaction control number assigned "within three hundred sixty-five calendar days" of the date of service, and a claim may be resubmitted or adjusted within 24 months of the service date (WAC 182-502-0150). Bill all units of a code for one date of service on a single line: two lines of the same code for the same day deny as duplicates. Known third parties must be billed first and their timely filing limits met as well. HCA’s January 2026 ABA billing guide does not mention electronic visit verification. For telemedicine, use POS 02 or 10 and modifier 95 for a nonfacility distant site (Telemedicine Policy and Billing Guide, January 2026). An MCO member who disagrees with the plan’s appeal decision may request a state hearing "within one hundred twenty calendar days" of the plan’s appeal resolution, and must ask within ten days to keep a reduced or terminated service going during the hearing (WAC 182-526-0200).',
        ],
        cites: [S.wac0150, S.abaBG, S.teleBG, S.wac526],
      },
    ],
    collect: [
      { title: 'Which Apple Health card', desc: 'CHPW, Coordinated Care (incl. Apple Health Core Connections foster care), Molina, UnitedHealthcare, Wellpoint, or fee-for-service/BHSO. Enrollment can change monthly.' },
      { title: 'COE evaluation and ABA prescription', desc: 'From an HCA-recognized Center of Excellence: diagnosis, functional impairment, tried-and-failed or no-alternative statement, and the prescription.' },
      { title: 'COE extras if available', desc: 'ASD screening tool, cognitive/developmental and adaptive behavior scores, vision and hearing results.' },
      { title: 'Other insurance', desc: 'If private coverage has an ABA benefit that is not exhausted, HCA PA is not required; bill the private plan first.' },
      { title: 'Forms', desc: 'HCA 13-400 assessment and plan (or equivalent) and HCA 12-411 Level of Support; HCA 13-835 cover sheet for faxed FFS requests.' },
    ],
    sources: [S.wac531a, S.abaBG, S.abaFee, S.coeList, S.hcaMC, S.hcaTA, S.teleBG, S.wac0165, S.wac0200, S.wac0150, S.wac526, S.rcw18380, S.wac246805, S.bacbLic, S.cfr440, S.cfr433],
    deliveryRules: {
      supervision: {
        value: AH_SUPERVISION,
        status: 'verified',
        cites: [S.abaBG, S.wac531a, S.wac246805],
      },
      concurrentBilling: {
        value: 'Partly addressed. 0373T may not be billed "simultaneously with 97155 or 97153," 97153 may not be billed at the same time as H2020, and HCA does not authorize day treatment at the same time as 97153. The fee schedule describes 97155 as "requires LBAT involvement" (the billing guide: "LBAT and possible CBT"), but neither document says whether 97153 and 97155 may be billed for the same minutes.',
        status: 'unverified',
        cites: [S.abaFee, S.abaBG],
        verifyVia: 'HCA ABA program, ABA@hca.wa.gov: ask whether a CBT’s 97153 and the LBAT’s 97155 may be billed for overlapping time.',
        blocker: 'document',
      },
      dailyLimits: {
        value: '97151: 28 units per assessment, 2 assessments per calendar year. 0362T: 2-hour assessments, 3 per calendar year per client per provider. Inpatient 97153 and 0373T: 780 units per calendar year. Day treatment (H2020): at least half of the 3-hour day for 12 hours a week, up to 15 hours a week (3 hours a day, 5 days), normally 48 service days. Other treatment units are set by the authorization; extra units go through a limitation extension.',
        status: 'verified',
        cites: [S.abaFee, S.abaBG, S.wac531a],
      },
      noteSignature: {
        value: 'The LBAT must sign the treatment plan and get the family’s signed approval. A CBT must document each visit (target behavior, interventions, response, technique changes, plan for next visit, graphed data) and "Maintain signed and dated documentation of family’s confirmation that a visit occurred." Daily documentation must include the client’s name, date, time in the program, clinicians, goals and strategies, format, data, and "The signature, title and credentials of the person completing the daily documentation"; supervision notes and a service log (dates, times, type and location of service) must be kept.',
        status: 'verified',
        cites: [S.abaBG, S.wac531a],
      },
      placeOfService: {
        value: AH_PLACE,
        status: 'verified',
        cites: [S.wac531a, S.abaBG],
      },
      billAsProvider: {
        value: 'The rendering clinician. ' + AH_BILLING,
        status: 'verified',
        cites: [S.abaBG, S.hcaTA],
      },
    },
    intakeGates: {
      ageLimit: {
        value: AH_AGE,
        status: 'verified',
        cites: [S.wac531a, S.abaBG],
      },
      dxRecency: {
        value: 'No fixed expiry is written for the COE evaluation. The clocks are on the treatment side: the LBAT’s plan must "correlate with the COE provider’s current diagnostic evaluation," and the PA request must reach HCA within 60 days of the LBAT’s assessment and plan.',
        status: 'verified',
        cites: [S.wac531a, S.abaBG],
      },
      diagnosingProviders: {
        value: AH_DIAGNOSERS,
        status: 'verified',
        cites: [S.wac531a, S.abaBG],
      },
      diagnosticTools: {
        value: AH_TOOLS,
        status: 'verified',
        cites: [S.wac531a, S.abaBG],
      },
      referral: {
        value: AH_REFERRAL,
        status: 'verified',
        cites: [S.wac531a, S.abaBG],
      },
      telehealth: {
        value: AH_TELEHEALTH,
        status: 'verified',
        cites: [S.abaBG, S.teleBG],
      },
      authTurnaround: {
        value: 'HCA’s medical necessity rule gives the agency 15 days from receiving a request to approve, deny or ask for more information; the provider then has 30 days to send it, and HCA decides within five business days of receiving it (WAC 182-501-0165). The federal floor for state agencies, in force since January 1, 2026, is "in no case later than 7 calendar days" for a standard request "unless a shorter minimum timeframe is established under State law" (42 CFR 440.230(e)). Submit at least 15 days before services start or the current authorization ends. MCO members follow their plan’s clock (42 CFR 438.210(d): 7 calendar days for rating periods starting on or after January 1, 2026).',
        status: 'verified',
        cites: [S.wac0165, S.cfr440, S.abaBG, S.cfr438],
      },
      coordinationOfBenefits: {
        value: 'Apple Health pays after other coverage. Providers must bill known third parties and meet their timely filing limits (WAC 182-502-0150; WAC 182-501-0200). For ABA specifically: if a private policy has an ABA benefit that has not been exhausted, HCA PA is not required; PA is required when the private benefit is exhausted, when the private plan has no ABA benefit, or when the client has Medicare. If Apple Health becomes primary, the client must go through HCA’s ABA PA review, so HCA suggests choosing a provider enrolled with both the private insurer and Apple Health. Responsible third parties may not deny an HCA claim solely for lack of their own prior authorization (WAC 182-501-0200(4)).',
        status: 'verified',
        cites: [S.abaBG, S.wac0200, S.wac0150, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Washington Apple Health cover ABA therapy?', a: 'Yes, under chapter 182-531A WAC, for autism spectrum disorder or another intellectual or developmental disability for which ABA is effective, with no age limit. A Center of Excellence must evaluate the client and prescribe ABA first.' },
      { q: 'What is a Center of Excellence (COE) in Washington?', a: 'An individual provider, not a facility, who completes the comprehensive diagnostic evaluation and writes the ABA prescription. Developmental pediatricians, neurologists, pediatric neurologists, pediatric psychiatrists, psychiatrists and psychologists experienced with autism qualify; ARNPs, physicians, PAs and naturopaths qualify after HCA’s COE training and designation.' },
      { q: 'Does the ABA assessment need prior authorization?', a: 'Not for fee-for-service clients: 97151 and 0362T carry no PA on HCA’s fee schedule. Treatment does: 97153, 0373T, 97154, 97158 and the H2020 day program. MCO members follow their plan’s rules, and some MCOs require PA for the COE evaluation itself.' },
      { q: 'What does Apple Health pay for ABA?', a: 'Per 15 minutes from July 1, 2026: 97151 $18.79, 97153 $12.40, 97155 $14.09, 97156 $18.32, 0362T $58.80, 0373T $24.11; group codes are paid per client on a sliding scale; the H2020 day program pays $571.30 a day. MCOs pay contracted rates.' },
      { q: 'Can a BCBA licensed in another state treat an Apple Health client in Washington, including by telehealth?', a: 'Not on the out-of-state license alone. Washington requires a DOH license (or a 180-day temporary license for nonresidents licensed elsewhere) to practice ABA, and HCA pays telemedicine to a client located in Washington only if the practitioner is licensed in Washington or holds a recognized compact license. There is no behavior analyst compact on HCA’s list.' },
      { q: 'Which ABA codes can be billed by telehealth to Apple Health?', a: '97155, 97156, 97157, 99366 and 99368; 97151 for indirect activities only. 97153, 97154, 97158, 0362T and 0373T may not be delivered by telemedicine. Bill POS 02 or 10 with modifier 95 for a nonfacility distant site.' },
      { q: 'What is the timely filing limit for Apple Health ABA claims?', a: 'Fee-for-service: 365 calendar days from the date of service, with adjustments allowed within 24 months (WAC 182-502-0150). Each MCO sets its own limit in its contract; CHPW, for example, uses 12 months from the date of service.' },
    ],
  },

  'community-health-plan-of-washington': {
    slug: 'community-health-plan-of-washington',
    family: 'chpw',
    cardDesc: 'Apple Health MCO: ABA needs PA on its 2026 BH list; fax the ABA Initial Request Form with the COE evaluation; 12-month timely filing.',
    assessmentPA: {
      value: 'Not stated for 97151 separately: the 2026 behavioral PA list puts "Applied Behavior Analysis (ABA) for Autism Spectrum Disorder" under prior authorization required without breaking out codes, and HCA notes an MCO may require PA for the COE evaluation',
      status: 'unverified',
      cites: [S.chpwPA, S.abaBG],
      verifyVia: 'CHPW customer service, (800) 440-1561, or CHPW’s Procedure Code Lookup Tool: check 97151 and 97152 for an initial assessment.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes. ABA is on CHPW’s 2026 "Prior Authorization Required" behavioral list; submit the ABA Therapy Initial Request Form by fax to 206-613-8873 (or the JIVA portal), and recertification requests at least 3 weeks before the current authorization expires',
      status: 'verified',
      cites: [S.chpwPA, S.chpwForm, S.hcaTA],
    },
    dxRequired: {
      value: 'Yes. The initial request requires an "Autism Center of Excellence evaluation with diagnosis of autism spectrum disorder" and the COE’s recommendation for ABA; the state rule allows ASD or another developmental/intellectual disability for which ABA is effective (WAC 182-531A-0400)',
      status: 'verified',
      cites: [S.chpwForm, S.wac531a],
    },
    payer: 'Community Health Plan of Washington',
    state: 'WA', kind: 'medicaid-mco', parent: 'Washington Apple Health (HCA)',
    pill: 'Payer Guide · Community Health Plan of Washington',
    h1: 'Community Health Plan of Washington ABA coverage: the intake guide.',
    metaTitle: 'Community Health Plan of Washington (CHPW) ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Community Health Plan of Washington covers ABA for Apple Health members: prior authorization on the 2026 behavioral list, the ABA Initial Request Form and COE documents, credentialing for LBAs vs. CBTs and LABAs, timely filing, and what intake should collect.',
    intro: [
      'Community Health Plan of Washington (CHPW) is one of the five Apple Health managed care plans HCA lists. It runs ABA under the state’s chapter 182-531A WAC pathway: a Center of Excellence evaluation and prescription, an LBAT assessment and plan, then CHPW prior authorization. Its 2026 behavioral prior-authorization list names ABA, and its ABA Initial Request Form lists exactly which documents to send.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for Apple Health members, under WAC 182-531A' },
      { label: 'Prior auth', value: 'Required (2026 BH PA list); ABA Therapy Initial Request Form, fax 206-613-8873, or JIVA portal' },
      { label: 'Initial request needs', value: 'COE evaluation with ASD diagnosis, COE recommendation, ABA functional and skill assessment/FBA, treatment plan' },
      { label: 'Recertification', value: 'At least 3 weeks before the current authorization expires' },
      { label: 'Credentialing', value: 'LBAs credentialed (CAQH); CBTs and LABAs rostered, not individually credentialed' },
      { label: 'Claims', value: 'Availity payer ID CHPWA; taxonomy 103K00000X in billing and servicing fields' },
      { label: 'Timely filing', value: '12 months from date of service; corrected claims 24 months' },
    ],
    sections: [
      {
        h2: 'Prior authorization and the documents CHPW wants',
        body: [
          'CHPW’s 2026 Prior Authorization List and Utilization Guidelines for behavioral services (effective January 1, 2026) put "Applied Behavior Analysis (ABA) for Autism Spectrum Disorder" and "Treatment provided to members diagnosed with Autism Spectrum Disorder and other Developmental Disorders" under "PRIOR AUTHORIZATION REQUIRED." Requests go on the ABA Therapy Initial Request Form by fax to 206-613-8873; CHPW told providers at HCA’s February 2025 ABA session that its JIVA portal is "the preferred method." The form says the multidisciplinary plan is implemented "for a six-month period," and that providers in the authorization are limited to "State-approved ABA Center of Excellence teams and/or CHPW-credentialed ABA providers."',
          'Initial authorization requires the Center of Excellence evaluation with the ASD diagnosis, the COE’s recommendation for ABA, the ABA provider’s functional assessment, skill assessment or functional behavioral analysis, and the treatment plan. Recertification is "Submitted at least 3 weeks prior to expiration of current authorization" with a revised plan, measurable changes in the frequency, intensity and duration of targeted behaviors, the projected outcome, assessment instruments, developmental markers of readiness, evidence of coordination and of compliance with the plan; improvements must be confirmed with data, documented in charts or graphs, durable and generalized outside the treatment setting.',
        ],
        cites: [S.chpwPA, S.chpwForm, S.chpwBHPA, S.hcaTA],
      },
      {
        h2: 'Network entry, credentialing and claims',
        body: [
          'CHPW requires a signed Apple Health core provider agreement and NPIs registered with HCA for every clinician. Licensed behavior analysts are credentialed (through CAQH or a Washington Practitioner Application to Provider.Credentialing@chpw.org); certified behavior technicians and licensed assistant behavior analysts are not individually credentialed but must be on the group’s roster, where they are loaded as "cred omitted." Re-credentialing is every three years. Claims go to Availity payer ID CHPWA (paper to CHPW Claims, PO Box 269002, Plano, TX 75026-9002) with taxonomy 103K00000X in both the billing and servicing fields. Timely filing: 12 months from the date of service as primary, 12 months from the primary payer’s remittance date as secondary, and 24 months for corrected claims; as secondary, CHPW "follows the primary payors denial/processing policies." Members can reach CHPW’s ABA line at 1-844-225-8624.',
          'CHPW’s provider manual could not be read this run (chpw.org returns a 403 to automated requests), so the state rules below are stated as Apple Health rules with "confirm with CHPW."',
        ],
        cites: [S.hcaTA, S.abaBG],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm CHPW Apple Health (not Cascade Select or Medicare) on the date of service; enrollment can change monthly.' },
      { title: 'COE evaluation + recommendation', desc: 'The ASD diagnosis and the COE’s written recommendation for ABA are required for the initial request.' },
      { title: 'Assessment package', desc: 'Functional assessment, skill assessment or FBA, and the treatment plan for the six-month period.' },
      { title: 'Other insurance', desc: 'CHPW is secondary to commercial coverage; it follows the primary payer’s processing decisions.' },
    ],
    sources: [S.chpwPA, S.chpwForm, S.chpwBHPA, S.hcaTA, S.hcaMC, S.wac531a, S.abaBG, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'CHPW publishes no ABA supervision ratio in the documents read; its provider manual could not be opened. The state rule: ' + AH_SUPERVISION,
        status: 'unverified',
        cites: [S.chpwForm, S.abaBG, S.wac531a],
        verifyVia: 'CHPW Provider Relations or customer service, (800) 440-1561: confirm CHPW applies the Apple Health 5 percent LBAT supervision floor.',
        blocker: 'document',
      },
      concurrentBilling: {
        value: 'Not addressed in CHPW’s ABA documents read, and the state guide does not settle 97153/97155 overlap either.',
        status: 'unverified',
        cites: [S.chpwForm, S.abaBG],
        verifyVia: 'CHPW customer service, (800) 440-1561, or your CHPW provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'CHPW publishes no ABA unit limits in the documents read; units are set per six-month authorization.',
        status: 'unverified',
        cites: [S.chpwForm],
        verifyVia: 'CHPW utilization management via JIVA or (800) 440-1561: ask whether HCA’s fee-schedule limits (97151 28 units per assessment, 2 a year) apply.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not stated in CHPW’s ABA documents read.',
        status: 'unverified',
        cites: [S.chpwForm],
        verifyVia: 'CHPW provider manual (chpw.org Provider Center) or Provider Relations.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Not stated by CHPW in the documents read. The state rule: ' + AH_PLACE,
        status: 'unverified',
        cites: [S.chpwForm, S.wac531a],
        verifyVia: 'CHPW customer service, (800) 440-1561: confirm which settings and POS codes CHPW pays for ABA.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'The rendering clinician’s NPI. CHPW requires taxonomy 103K00000X "in both the billing and the servicing taxonomy fields," every clinician’s NPI registered with HCA, and all ABA staff on the roster; HCA requires the LBA, LABA or CBT who performed the service in the servicing provider box for dates of service from July 1, 2025.',
        status: 'verified',
        cites: [S.hcaTA, S.abaBG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'CHPW’s 2026 documents read state no age limit. The state rule sets none (' + AH_AGE + ')',
        status: 'unverified',
        cites: [S.chpwPA, S.wac531a],
        verifyVia: 'CHPW customer service, (800) 440-1561: confirm CHPW applies no age limit to ABA for Apple Health members.',
        blocker: 'document',
      },
      dxRecency: {
        value: 'Not stated by CHPW. The state rule: the plan must correlate with the COE’s current evaluation, and requests are due within 60 days of the LBAT assessment.',
        status: 'unverified',
        cites: [S.chpwForm, S.wac531a],
        verifyVia: 'CHPW utilization management: ask how old a COE evaluation may be for an initial request.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'A state-approved ABA Center of Excellence; the form limits providers in the authorization to "State-approved ABA Center of Excellence teams and/or CHPW-credentialed ABA providers." ' + AH_DIAGNOSERS,
        status: 'verified',
        cites: [S.chpwForm, S.wac531a],
      },
      diagnosticTools: {
        value: 'CHPW names no instrument. The state COE documentation rule applies: ' + AH_TOOLS,
        status: 'verified',
        cites: [S.chpwForm, S.wac531a],
      },
      referral: {
        value: 'Yes: the COE’s "recommendation for ABA therapy" is a required initial document. ' + AH_REFERRAL,
        status: 'verified',
        cites: [S.chpwForm, S.wac531a, S.abaBG],
      },
      telehealth: {
        value: 'CHPW publishes no ABA telehealth rule in the documents read; its manual could not be opened. The state rule: ' + AH_TELEHEALTH,
        status: 'unverified',
        cites: [S.abaBG, S.teleBG],
        verifyVia: 'CHPW customer service, (800) 440-1561: confirm CHPW follows HCA’s ABA telemedicine code list.',
        blocker: 'document',
      },
      authTurnaround: {
        value: 'CHPW publishes no ABA decision timeframe in the documents read. Federal managed care rules apply: for rating periods starting on or after January 1, 2026, standard authorization decisions "may not exceed 7 calendar days after receiving the request for service" (42 CFR 438.210(d)).',
        status: 'plan-dependent',
        cites: [S.cfr438, S.chpwForm],
        verifyVia: 'CHPW utilization management via JIVA or (800) 440-1561.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'CHPW is secondary to other coverage: a secondary claim is due within 12 months of the primary payer’s remittance date, and as secondary "CHPW follows the primary payors denial/processing policies." Medicaid is payer of last resort (42 CFR 433.139).',
        status: 'verified',
        cites: [S.hcaTA, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Community Health Plan of Washington require prior authorization for ABA?', a: 'Yes. ABA is on CHPW’s 2026 behavioral prior-authorization list. Fax the ABA Therapy Initial Request Form to 206-613-8873 or use the JIVA portal, with the COE evaluation, the COE recommendation, the assessment and the treatment plan.' },
      { q: 'Do CBTs and LABAs need to be credentialed with CHPW?', a: 'No. CHPW credentials licensed behavior analysts; CBTs and LABAs go on the group roster and are loaded as "cred omitted." All of them need an NPI registered with HCA.' },
      { q: 'What is CHPW’s timely filing limit?', a: '12 months from the date of service when CHPW is primary, 12 months from the primary payer’s remittance date when secondary, and 24 months for corrected claims.' },
    ],
  },

  'coordinated-care-washington': {
    slug: 'coordinated-care-washington',
    family: 'centene',
    cardDesc: 'Centene’s Apple Health plan (also Apple Health Core Connections foster care): WA.CP.BH.104 mirrors WAC 182-531A — COE evaluation, HCA 13-400 and 12-411, six-month reviews.',
    assessmentPA: {
      value: 'Not stated for 97151 in WA.CP.BH.104; Coordinated Care’s Pre-Auth tool decides by code, and HCA notes MCOs may require PA for the COE evaluation',
      status: 'unverified',
      cites: [S.ccBH104, S.abaBG],
      verifyVia: 'Coordinated Care Pre-Auth tool (coordinatedcarehealth.com) or Provider Services, 1-877-644-4613: check 97151.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes. ABA uses Coordinated Care’s required Applied Behavioral Analysis Prior Authorization form; medical necessity is judged under WA.CP.BH.104 (effective 3/1/2026), which requires the COE evaluation, HCA form 13-400 and HCA form 12-411',
      status: 'verified',
      cites: [S.hcaTA, S.ccBH104],
    },
    dxRequired: {
      value: 'Yes: "A confirmed autism spectrum disorder (ASD) diagnosis or other intellectual/developmental disability for which there is evidence ABA is effective," in a comprehensive diagnostic evaluation completed by an HCA-recognized ABA Center of Excellence (WA.CP.BH.104)',
      status: 'verified',
      cites: [S.ccBH104],
    },
    payer: 'Coordinated Care of Washington',
    state: 'WA', kind: 'medicaid-mco', parent: 'Washington Apple Health (HCA)',
    pill: 'Payer Guide · Coordinated Care · Washington',
    h1: 'Coordinated Care of Washington ABA coverage: the intake guide.',
    metaTitle: 'Coordinated Care of Washington ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Coordinated Care of Washington (Centene) covers ABA for Apple Health and Apple Health Core Connections foster care members: clinical policy WA.CP.BH.104, the COE evaluation and HCA forms, six-month continuation reviews, supervision and what intake should collect.',
    intro: [
      'Coordinated Care of Washington is Centene’s Apple Health plan and one of the five managed care plans HCA lists. It also administers Apple Health Core Connections, the single statewide plan for children and young adults in foster care, adoption support and foster care alumni, who get both medical and behavioral health services, ABA included, through Coordinated Care. Its Washington ABA policy, WA.CP.BH.104 (last revised January 2026, effective March 1, 2026), was rewritten to align with chapter 182-531A WAC and HCA’s January 2026 billing guide.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for Apple Health managed care and Apple Health Core Connections (foster care) members' },
      { label: 'Policy', value: 'WA.CP.BH.104, effective 3/1/2026, aligned with WAC 182-531A and the HCA ABA Billing Guide' },
      { label: 'Initial request needs', value: 'COE comprehensive evaluation and treatment plan; HCA 13-400 assessment by an LBAT; HCA 12-411 Level of Support' },
      { label: 'Continuation', value: 'Updated assessment and treatment plan every six months; documented progress or a plan to address limited progress' },
      { label: 'Supervision', value: 'LBAT supervision of CBTs at least 5% of direct care per week' },
      { label: 'Contact', value: 'Provider Services 1-877-644-4613; Core Connections 1-844-354-9876' },
    ],
    sections: [
      {
        h2: 'WA.CP.BH.104: what Coordinated Care requires',
        body: [
          'Initial ABA is medically necessary when the member has "a comprehensive diagnostic evaluation and multidisciplinary clinical treatment plan completed by a Health Care Authority (HCA) recognized ABA Center of Excellence (COE)" that establishes functional impairment, an adverse effect on participation or safety, a confirmed ASD or other qualifying developmental/intellectual disability, a reasonable expectation of measurable improvement, and either failed less-intensive interventions or no equally effective, less costly alternative. The member also needs an ABA Assessment and Behavior Change Plan (HCA 13-400) completed by a lead behavioral analysis therapist, applicable to the next six months and correlated with the COE evaluation, and an ABA Level of Support Requirement form (HCA 12-411).',
          'Continuation requires an updated behavior assessment and an updated treatment plan "every six months (or less, as clinically appropriate)," documented coordination with school and other providers, data from multiple settings and informants, transition and discharge planning, and either documented progress or, where progress is limited, a revised plan that re-evaluates each goal, increases intensity or caregiver training, and considers other services or settings. The policy also covers the Early Childhood Intensive Behavioral Intervention Day Treatment Program when ordered by the COE, inpatient ABA when severe harmful behavior prevents discharge, and lists the same non-covered services as the WAC (camps, respite, primarily educational services, school-based or early intervention program services and others). For Medicaid members, "when state Medicaid coverage provisions conflict with the coverage provisions in this clinical policy, state Medicaid coverage provisions take precedence."',
        ],
        cites: [S.ccBH104],
      },
      {
        h2: 'Network entry, rosters and contacts',
        body: [
          'At HCA’s February 2025 ABA session, Coordinated Care pointed providers to its "Become a Provider" page (JoinOurNetwork@coordinatedcarehealth.com), asked for updated rosters at WAProviderUpdates@coordinatedcarehealth.com, and named its Pre-Auth tool and required ABA Prior Authorization form. Provider and member services are at 1-877-644-4613; Apple Health Core Connections (foster care) members call 1-844-354-9876. As for every Apple Health plan, each LBA, LABA and CBT must be enrolled with HCA as a servicing provider and appear on the group’s roster before claims.',
        ],
        cites: [S.hcaTA, S.hcaMC, S.abaBG],
      },
    ],
    collect: [
      { title: 'Which product', desc: 'Apple Health managed care, or Apple Health Core Connections for foster care, adoption support and alumni (ProviderOne shows "Coordinated Care Healthy Options Foster Care").' },
      { title: 'COE evaluation and plan', desc: 'The comprehensive diagnostic evaluation and multidisciplinary treatment plan from an HCA-recognized COE.' },
      { title: 'HCA 13-400 and 12-411', desc: 'LBAT assessment and behavior change plan, and the Level of Support form.' },
      { title: 'Other services', desc: 'School, speech, OT and other providers, so the plan can show coordination and no duplication.' },
    ],
    sources: [S.ccBH104, S.hcaTA, S.hcaMC, S.wac531a, S.abaBG, S.teleBG, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'WA.CP.BH.104: "Supervision by a Lead Behavioral Analysis Therapist of care provided by a Certified Behavioral Therapist (CBT) should occur at a minimum of five percent of the total direct care per week (e.g., one hour of supervision per twenty hours of care)," and treatment must be "delivered or supervised by an ABA-credentialed professional."',
        status: 'verified',
        cites: [S.ccBH104],
      },
      concurrentBilling: {
        value: 'Not addressed in WA.CP.BH.104, which defers to the HCA billing guide; that guide bars 0373T simultaneously with 97153 or 97155 but does not settle 97153/97155 overlap.',
        status: 'unverified',
        cites: [S.ccBH104, S.abaFee],
        verifyVia: 'Coordinated Care Provider Services, 1-877-644-4613, or your Provider Engagement Administrator.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No unit cap in WA.CP.BH.104. Its background describes comprehensive ABA intensity as ranging "from 30-40 hours of treatment per week," individualized; hours are set per authorization.',
        status: 'verified',
        cites: [S.ccBH104],
      },
      noteSignature: {
        value: 'WA.CP.BH.104 requires the treatment plan on HCA 13-400 by an LBAT but sets no session-note signature rule.',
        status: 'unverified',
        cites: [S.ccBH104],
        verifyVia: 'Coordinated Care provider manual (documentation standards) or Provider Services, 1-877-644-4613.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'WA.CP.BH.104 notes services may be provided in home, clinic, school and community settings and by telehealth, and excludes "School-based health care services or early intervention program-based services under WAC 182-531A-0600"; services "in lieu of school, respite care, or other community-based settings of care" are a ground for discontinuation.',
        status: 'verified',
        cites: [S.ccBH104],
      },
      billAsProvider: {
        value: 'Not stated in WA.CP.BH.104. The HCA rule binds all MCOs: ' + AH_BILLING,
        status: 'verified',
        cites: [S.hcaTA, S.abaBG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'WA.CP.BH.104 sets no age limit (its focused-ABA description is "not restricted by age"), consistent with the state rule. ' + AH_AGE,
        status: 'verified',
        cites: [S.ccBH104, S.wac531a],
      },
      dxRecency: {
        value: 'No expiry on the COE evaluation is stated; the LBAT plan must "correlate with the COE’s diagnostic evaluation," and the assessment and plan are updated every six months.',
        status: 'verified',
        cites: [S.ccBH104],
      },
      diagnosingProviders: {
        value: 'An HCA-recognized ABA Center of Excellence (WA.CP.BH.104). ' + AH_DIAGNOSERS,
        status: 'verified',
        cites: [S.ccBH104, S.wac531a],
      },
      diagnosticTools: {
        value: 'WA.CP.BH.104 names no instrument beyond the COE evaluation and the HCA 13-400 baseline measures (curriculum-based measures, single-case studies or other accepted tools). The state COE rule: ' + AH_TOOLS,
        status: 'verified',
        cites: [S.ccBH104, S.wac531a],
      },
      referral: {
        value: 'Yes: the COE’s evaluation and plan are required, and the day treatment program must be "ordered by the COE." ' + AH_REFERRAL,
        status: 'verified',
        cites: [S.ccBH104, S.wac531a],
      },
      telehealth: {
        value: 'WA.CP.BH.104 says telehealth is "not intended to replace in person service" and tells providers to "refer to respective state allowances for telehealth services." The state allowances: ' + AH_TELEHEALTH,
        status: 'verified',
        cites: [S.ccBH104, S.abaBG, S.teleBG],
      },
      authTurnaround: {
        value: 'Coordinated Care publishes no ABA decision timeframe in WA.CP.BH.104. Federal managed care rules apply: for rating periods starting on or after January 1, 2026, standard decisions "may not exceed 7 calendar days after receiving the request for service" (42 CFR 438.210(d)).',
        status: 'plan-dependent',
        cites: [S.cfr438, S.ccBH104],
        verifyVia: 'Coordinated Care Provider Services, 1-877-644-4613.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Not stated in WA.CP.BH.104. Medicaid is payer of last resort (42 CFR 433.139), and HCA’s ABA guide makes Apple Health PA unnecessary while an unexhausted private ABA benefit is paying.',
        status: 'unverified',
        cites: [S.cfr433, S.abaBG],
        verifyVia: 'Coordinated Care provider manual (coordination of benefits section) or Provider Services, 1-877-644-4613.',
        blocker: 'document',
      },
    },
    faq: [
      { q: 'Does Coordinated Care of Washington cover ABA?', a: 'Yes, for Apple Health managed care members and for Apple Health Core Connections foster care members, under clinical policy WA.CP.BH.104 (effective March 1, 2026).' },
      { q: 'What does Coordinated Care need for an initial ABA request?', a: 'The COE’s comprehensive diagnostic evaluation and treatment plan, the LBAT’s HCA 13-400 assessment and behavior change plan, and the HCA 12-411 Level of Support form, on Coordinated Care’s ABA prior authorization form.' },
      { q: 'How often does Coordinated Care re-review ABA?', a: 'Continuation needs an updated assessment and treatment plan every six months, or sooner if clinically appropriate, with progress data from multiple settings.' },
    ],
  },

  'molina-healthcare-washington': {
    slug: 'molina-healthcare-washington',
    family: 'molina',
    cardDesc: 'Apple Health MCO: PA "typically required" for ABA (check the lookup tool), granted at the group level; BCBAs credentialed individually, CBTs and LABAs rostered.',
    assessmentPA: {
      value: 'Not confirmed: Molina told HCA’s February 2025 ABA session that PA "is typically required for ABA services" and to use its Prior Auth Look-up Tool; its current Washington Medicaid PA guide could not be opened',
      status: 'unverified',
      cites: [S.hcaTA],
      verifyVia: 'Molina Prior Auth Look-up Tool (Availity) or Molina behavioral health UM; general ABA questions to aba@molinahealthcare.com: check 97151.',
      blocker: 'document',
    },
    treatmentPA: {
      value: '"Prior Authorization (PA) is typically required for ABA services," and "PA is generally granted at the Group level, so anyone affiliated under the group can render the service" (Molina, HCA ABA session, February 2025). Confirm each code in Molina’s lookup tool',
      status: 'plan-dependent',
      cites: [S.hcaTA, S.wac531a],
      verifyVia: 'Molina Prior Auth Look-up Tool or Provider Services, (855) 322-4082.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes. The Apple Health rule binds every MCO: a COE-confirmed ASD or other developmental/intellectual disability for which ABA is effective (WAC 182-531A-0400), and HCA applies the COE requirement "whether the client is fee-for-service or enrolled in a managed care organization." Molina’s own ABA criteria could not be read this run',
      status: 'verified',
      cites: [S.wac531a, S.abaBG],
    },
    payer: 'Molina Healthcare of Washington',
    state: 'WA', kind: 'medicaid-mco', parent: 'Washington Apple Health (HCA)',
    pill: 'Payer Guide · Molina Healthcare · Washington',
    h1: 'Molina Healthcare of Washington ABA coverage: the intake guide.',
    metaTitle: 'Molina Healthcare of Washington ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Molina Healthcare of Washington covers ABA for Apple Health members: the state COE pathway, prior authorization through Molina’s lookup tool, group-level authorizations, credentialing for BCBAs vs. CBTs and LABAs, contacts and what intake should collect.',
    intro: [
      'Molina Healthcare of Washington is one of the five Apple Health managed care plans HCA lists. It covers ABA under the state’s chapter 182-531A WAC pathway. What we could confirm about Molina’s own process comes from its slides in HCA’s February 2025 ABA technical assistance session; Molina’s Washington Medicaid provider pages and documents now return the company’s new-site "Page Not Found" page, so anything Molina-specific beyond that is marked "confirm with Molina."',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for Apple Health members, under WAC 182-531A (COE evaluation required)' },
      { label: 'Prior auth', value: '"Typically required"; check codes in Molina’s Prior Auth Look-up Tool' },
      { label: 'Authorization level', value: 'Generally granted to the group, so any affiliated clinician can render' },
      { label: 'Credentialing', value: 'BCBAs individually credentialed; CBTs and LABAs added to the group by roster or mini-application' },
      { label: 'Contacts', value: 'ABA questions aba@molinahealthcare.com; member ABA line 509-321-1365; Provider Services (855) 322-4082' },
    ],
    sections: [
      {
        h2: 'What Molina told providers about ABA',
        body: [
          'At HCA’s February 27, 2025 ABA technical assistance session, Molina said: "Prior Authorization (PA) is typically required for ABA services. Please utilize Molina’s Prior Auth Look-up Tool to determine if PA is needed. PA is generally granted at the Group level, so anyone affiliated under the group can render the service." "BCBAs must be individually credentialed with Molina of Washington," while "CBTs and LABAs DO NOT need to be individually credentialed" and are added to the group by a mini-application or a roster sent to mhwproviderinfo@molinahealthcare.com. Contracting requests go to MHWProviderContracting@MolinaHealthcare.com with a W-9; claims go through Availity or a clearinghouse, and claim disputes through Availity. Molina’s autism case management team (four BCBA case managers) takes referrals at MHWCMReferrals@molinahealthcare.com, and general ABA questions go to aba@molinahealthcare.com or 1-800-869-7175.',
          'The rest of the pathway is the state’s: a Center of Excellence evaluation and prescription, an LBAT assessment and treatment plan, and prior authorization before treatment (WAC 182-531A-0500 to -0700). For MCO members the WAC says to "follow the managed care organization (MCO) process," and HCA requires every LBA, LABA and CBT to be enrolled as a servicing provider and listed on the group’s roster with each MCO.',
        ],
        cites: [S.hcaTA, S.wac531a, S.abaBG],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Molina Apple Health (not Molina Marketplace or Medicare) on the date of service.' },
      { title: 'COE evaluation and prescription', desc: 'Required by the state rule for every Apple Health ABA request.' },
      { title: 'Group affiliation', desc: 'Molina authorizes at the group level: confirm the rendering clinicians are on the group’s Molina roster.' },
      { title: 'Other insurance', desc: 'Medicaid pays last; bill the commercial plan first.' },
    ],
    sources: [S.hcaTA, S.hcaMC, S.wac531a, S.abaBG, S.abaFee, S.teleBG, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'Molina’s own ABA policy could not be read. The state rule: ' + AH_SUPERVISION,
        status: 'unverified',
        cites: [S.abaBG, S.wac531a],
        verifyVia: 'Molina behavioral health UM or aba@molinahealthcare.com: confirm Molina applies the Apple Health 5 percent LBAT supervision floor.',
        blocker: 'document',
      },
      concurrentBilling: {
        value: 'Not addressed in any Molina source read; the state guide does not settle 97153/97155 overlap.',
        status: 'unverified',
        cites: [S.hcaTA, S.abaFee],
        verifyVia: 'Molina Provider Services, (855) 322-4082, or your Molina provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No Molina unit limit could be read; units are set per authorization.',
        status: 'unverified',
        cites: [S.hcaTA],
        verifyVia: 'Molina behavioral health UM: ask whether HCA’s fee-schedule unit limits apply.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'No Molina documentation rule could be read.',
        status: 'unverified',
        cites: [S.hcaTA],
        verifyVia: 'Molina Washington Apple Health provider manual (request from Provider Relations).',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Molina’s setting rules could not be read. The state rule: ' + AH_PLACE,
        status: 'unverified',
        cites: [S.wac531a, S.abaBG],
        verifyVia: 'Molina behavioral health UM: confirm which settings and POS codes Molina pays for ABA.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'The rendering clinician. Molina authorizes at the group level, but HCA requires each LBA, LABA and CBT to be enrolled with HCA, on the group roster sent to the MCO, and in the servicing provider box on claims for dates of service from July 1, 2025, with taxonomy 103K00000X in both taxonomy fields.',
        status: 'verified',
        cites: [S.hcaTA, S.abaBG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'No Molina age rule could be read. The state rule sets none: ' + AH_AGE,
        status: 'unverified',
        cites: [S.wac531a],
        verifyVia: 'Molina behavioral health UM or aba@molinahealthcare.com.',
        blocker: 'document',
      },
      dxRecency: {
        value: 'Not confirmed for Molina. The state rule has no fixed expiry on the COE evaluation; the PA request is due within 60 days of the LBAT assessment.',
        status: 'unverified',
        cites: [S.wac531a, S.abaBG],
        verifyVia: 'Molina behavioral health UM: ask how recent the COE evaluation must be.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'A Center of Excellence, by state rule for all Apple Health members (WAC 182-531A-0800); a COE serving Molina members must also be contracted with Molina. ' + AH_DIAGNOSERS,
        status: 'verified',
        cites: [S.wac531a, S.abaBG],
      },
      diagnosticTools: {
        value: 'By state rule: ' + AH_TOOLS,
        status: 'verified',
        cites: [S.wac531a, S.abaBG],
      },
      referral: {
        value: 'By state rule, a COE prescription is required for every Apple Health member. ' + AH_REFERRAL,
        status: 'verified',
        cites: [S.wac531a, S.abaBG],
      },
      telehealth: {
        value: 'No Molina telehealth rule could be read. The state rule: ' + AH_TELEHEALTH,
        status: 'unverified',
        cites: [S.abaBG, S.teleBG],
        verifyVia: 'Molina Provider Services, (855) 322-4082: confirm Molina follows HCA’s ABA telemedicine code list.',
        blocker: 'document',
      },
      authTurnaround: {
        value: 'No Molina ABA timeframe could be read. Federal managed care rules apply: standard decisions "may not exceed 7 calendar days after receiving the request for service" for rating periods starting on or after January 1, 2026 (42 CFR 438.210(d)).',
        status: 'plan-dependent',
        cites: [S.cfr438],
        verifyVia: 'Molina behavioral health UM.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'No Molina COB rule could be read. Medicaid is payer of last resort (42 CFR 433.139); HCA’s ABA guide makes Apple Health PA unnecessary while an unexhausted private ABA benefit is paying.',
        status: 'unverified',
        cites: [S.cfr433, S.abaBG],
        verifyVia: 'Molina Provider Services, (855) 322-4082.',
        blocker: 'document',
      },
    },
    faq: [
      { q: 'Does Molina Healthcare of Washington require prior authorization for ABA?', a: 'Molina says PA is typically required and to check each code in its Prior Auth Look-up Tool. Authorizations are generally issued to the group, so any clinician affiliated with the group can render the service.' },
      { q: 'Do CBTs and LABAs need to be credentialed with Molina?', a: 'No. Molina credentials BCBAs individually; CBTs and LABAs are added to the group by roster or mini-application. All must still be enrolled with HCA.' },
    ],
  },

  'unitedhealthcare-community-plan-washington': {
    slug: 'unitedhealthcare-community-plan-washington',
    family: 'unitedhealthcare',
    cardDesc: 'UHC’s Apple Health plan: Optum Washington Medicaid criteria (Nov 2025) copy WAC 182-531A — COE evaluation, no age limit, 3-month recertification; online ABA request form.',
    assessmentPA: {
      value: 'Not stated for 97151 in the Washington criteria or the manual; the criteria require PA "prior to implementing the ABA therapy treatment plan"',
      status: 'unverified',
      cites: [S.optumWA, S.uhcPM],
      verifyVia: 'UnitedHealthcare Community Plan ABA line, 1-866-456-5376, or the number on the member’s card: ask whether 97151 needs an authorization.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes. The Washington Medicaid Supplemental Clinical Criteria (BH803WA112025) require prior authorization before the treatment plan is implemented, requested "no more than 60 days from the date of the assessment and ABA therapy treatment plan," with recertification in three-month increments; submit the online ABA Treatment Request Form or fax 877-217-6068',
      status: 'verified',
      cites: [S.optumWA, S.uhcBH, S.hcaTA],
    },
    dxRequired: {
      value: 'Yes: "A diagnosis of an ASD, as defined by the DSM, or other developmental disability for which there is evidence ABA is effective," made or confirmed by an HCA-approved COE (Optum Washington Medicaid criteria)',
      status: 'verified',
      cites: [S.optumWA],
    },
    payer: 'UnitedHealthcare Community Plan of Washington',
    state: 'WA', kind: 'medicaid-mco', parent: 'Washington Apple Health (HCA)',
    pill: 'Payer Guide · UnitedHealthcare Community Plan · Washington',
    h1: 'UnitedHealthcare Community Plan of Washington ABA coverage: the intake guide.',
    metaTitle: 'UnitedHealthcare Community Plan of Washington ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan of Washington covers ABA for Apple Health members: Optum’s Washington Medicaid criteria (COE evaluation, no age limit, three-month recertification), the online ABA request form, rosters, 365-day timely filing and pay-and-chase for ABA codes.',
    intro: [
      'UnitedHealthcare Community Plan is one of the five Apple Health managed care plans HCA lists, and its behavioral health benefits are managed by Optum. For ABA, Optum uses a Washington-specific set of criteria, the Washington Medicaid Supplemental Clinical Criteria (policy BH803WA112025, effective November 2025), whose ABA section restates chapter 182-531A WAC almost word for word. UnitedHealthcare’s 2026 Washington provider manual lists the covered services: the COE evaluation and prescription, the LBAT functional assessment and treatment plan, and ABA delivered by an LBAT or a certified behavior technician working with one.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for Apple Health members; "There is no age requirement to be eligible for ABA services"' },
      { label: 'Criteria', value: 'Optum Washington Medicaid Supplemental Clinical Criteria, BH803WA112025 (Nov 2025), mirroring WAC 182-531A' },
      { label: 'Prior auth', value: 'Before the treatment plan starts, within 60 days of the assessment; online ABA Treatment Request Form or fax 877-217-6068' },
      { label: 'Recertification', value: 'Three-month increments; request 15 calendar days before expiration' },
      { label: 'Rosters', value: 'Rendering clinicians loaded under the group before claims; updates to waabacaid@uhc.com' },
      { label: 'Timely filing', value: '365 days from the date of service' },
      { label: 'Other insurance', value: 'ABA procedure codes follow UHC’s Pay & Chase policy' },
    ],
    sections: [
      {
        h2: 'Optum’s Washington criteria: the WAC pathway, restated',
        body: [
          'The ABA section of Optum’s Washington Medicaid Supplemental Clinical Criteria (effective November 2025) sets eligibility as "A diagnosis of an ASD, as defined by the DSM, or other developmental disability for which there is evidence ABA is effective" and says plainly: "There is no age requirement to be eligible for ABA services." It then follows the state’s three stages: a Center of Excellence evaluation and prescription (developmental pediatrician, neurologist, pediatric neurologist, pediatric psychiatrist, psychiatrist or psychologist, or an HCA-designated ARNP, physician, PA or naturopath); an LBAT assessment and treatment plan on HCA’s template, signed by the LBAT and applicable to the next six months; and prior authorization before the plan is implemented, received "no more than 60 days from the date of the assessment and ABA therapy treatment plan." Recertification is "granted in three-month increments, or longer at the agency’s discretion," requested 15 calendar days before expiration with a reevaluation showing measurable change. Covered and non-covered services, provider qualifications and inpatient criteria match the WAC.',
          'UnitedHealthcare’s ABA Corner offers an online ABA Treatment Request Form and a roster template for loading non-licensed clinicians; HCA’s February 2025 session added fax 877-217-6068 and said approvals follow the policy posted on Provider Express. The plan’s ABA support line for members and care coordination is 1-866-456-5376.',
        ],
        cites: [S.optumWA, S.uhcPM, S.uhcBH, S.hcaTA],
      },
      {
        h2: 'Rosters, claims and appeals',
        body: [
          'UnitedHealthcare told providers that the "Rendering provider is required to be loaded under group record prior to submitting claims," with monthly roster updates to waabacaid@uhc.com. Its 2026 manual says "Washington requires claims be filed within 365 days from the date of service," and that claims with ABA procedure codes "follow our Pay & Chase policy" when other coverage exists. Members may file standard and expedited appeals within 60 calendar days; UnitedHealthcare decides expedited appeals within 72 hours and standard appeals within 14 calendar days (up to 28 with an extension). After the plan’s appeal, a member has 120 calendar days to request a state hearing (WAC 182-526-0200).',
        ],
        cites: [S.hcaTA, S.uhcPM, S.wac526],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm UnitedHealthcare Community Plan Apple Health (not commercial UHC) and ABA eligibility by calling the number on the card.' },
      { title: 'COE evaluation and prescription', desc: 'Required before the LBAT assessment; send copies with the first request.' },
      { title: 'LBAT assessment and plan', desc: 'On HCA’s template, signed by the LBAT; the request must go in within 60 days of it.' },
      { title: 'Other insurance', desc: 'UHC pays ABA claims and pursues the other payer (Pay & Chase), but tell it about every coverage.' },
    ],
    sources: [S.optumWA, S.uhcPM, S.uhcBH, S.hcaTA, S.hcaMC, S.wac531a, S.abaBG, S.teleBG, S.wac526, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'Optum’s Washington criteria: a CBT must "Be supervised directly by an LBAT for at least five percent of total direct care per week" and review the client’s progress with the supervisor at least every two weeks; when a LABA is the LBAT, the LABA and the supervising LBA or licensed psychologist share the duties.',
        status: 'verified',
        cites: [S.optumWA],
      },
      concurrentBilling: {
        value: 'Not addressed in the Washington criteria or the 2026 manual.',
        status: 'unverified',
        cites: [S.optumWA, S.uhcPM],
        verifyVia: 'UnitedHealthcare Community Plan Provider Services, 1-877-542-9231.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'The criteria repeat the WAC limits: one initial ABA assessment and plan a year, up to four additional assessments and revisions a year, one lifetime day-treatment authorization; requests beyond them are evaluated as limitation extensions (WAC 182-501-0169). Treatment units are set per authorization.',
        status: 'verified',
        cites: [S.optumWA],
      },
      noteSignature: {
        value: 'The treatment plan must "Be signed by the LBAT responsible for the plan development and oversight"; a CBT must document each visit (targeted behavior, interventions, response, technique changes, plan for next visit, graphed data). No rule on who signs each session note is stated.',
        status: 'verified',
        cites: [S.optumWA],
      },
      placeOfService: {
        value: 'Per the criteria: a day services program, or a community-based program in the home, office, clinic or community (park, restaurant, child care, school, workplace) as required by the plan; community settings "must be included in the ABA therapy treatment plan." School-based health care or early intervention program-based services are not covered unless prior authorized.',
        status: 'verified',
        cites: [S.optumWA],
      },
      billAsProvider: {
        value: 'The rendering clinician, loaded under the group: "Rendering provider is required to be loaded under group record prior to submitting claims." HCA requires each LBA, LABA and CBT in the servicing provider box for dates of service from July 1, 2025, with taxonomy 103K00000X.',
        status: 'verified',
        cites: [S.hcaTA, S.abaBG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: '"There is no age requirement to be eligible for ABA services" (Optum Washington Medicaid criteria). COEs need additional training to diagnose and prescribe ABA for adults 21 and over.',
        status: 'verified',
        cites: [S.optumWA],
      },
      dxRecency: {
        value: 'No expiry on the COE evaluation is stated; the LBAT plan must correlate with the COE’s current diagnostic evaluation, and the PA request is due within 60 days of the assessment and plan.',
        status: 'verified',
        cites: [S.optumWA],
      },
      diagnosingProviders: {
        value: 'A COE: a Title 18 RCW licensee experienced with ASD who is a developmental pediatrician, neurologist, pediatric neurologist, pediatric psychiatrist, psychiatrist or psychologist, or an ARNP, physician, PA or naturopath designated by HCA after COE training (Optum Washington criteria). COEs serving these members must be contracted with the MCO.',
        status: 'verified',
        cites: [S.optumWA],
      },
      diagnosticTools: {
        value: 'The COE documents formal diagnostic procedures (name, dates, results) or the clinical findings used to confirm the diagnosis, plus, if available, the ASD screening tool, a cognitive or developmental assessment and an adaptive behavior assessment with standardized scores (Optum Washington criteria).',
        status: 'verified',
        cites: [S.optumWA],
      },
      referral: {
        value: 'Yes: a COE prescription. "Any person may refer a client" to a COE, which must provide "A prescription for ABA services" (Optum Washington criteria).',
        status: 'verified',
        cites: [S.optumWA],
      },
      telehealth: {
        value: 'The Washington criteria and the manual publish no ABA telehealth rule of their own. The state rule applies to Apple Health: ' + AH_TELEHEALTH,
        status: 'verified',
        cites: [S.optumWA, S.uhcPM, S.abaBG, S.teleBG],
      },
      authTurnaround: {
        value: 'No ABA decision timeframe is published in the criteria or the manual read. Federal managed care rules apply: for rating periods starting on or after January 1, 2026, standard decisions "may not exceed 7 calendar days after receiving the request for service" (42 CFR 438.210(d)).',
        status: 'plan-dependent',
        cites: [S.cfr438, S.uhcPM],
        verifyVia: 'UnitedHealthcare Community Plan ABA line, 1-866-456-5376.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Claims with "ABA procedure codes follow our Pay & Chase policy": UnitedHealthcare pays and pursues the other payer. Where a primary paid, UHC pays the patient responsibility up to its allowable rate, or nothing if the primary paid in full with no patient responsibility; COB adjustments may be made within 30 months of the initial process date (2026 manual).',
        status: 'verified',
        cites: [S.uhcPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of Washington cover ABA for adults?', a: 'Yes. Optum’s Washington Medicaid criteria say "There is no age requirement to be eligible for ABA services." Adults need a COE evaluation from a provider qualified to diagnose and prescribe for adults.' },
      { q: 'How do I request ABA authorization from UnitedHealthcare Community Plan in Washington?', a: 'Use the online ABA Treatment Request Form in the ABA Corner on UHCprovider.com, or fax 877-217-6068, within 60 days of the LBAT assessment, with the COE evaluation and prescription.' },
      { q: 'What is the timely filing limit?', a: 'UnitedHealthcare’s 2026 Washington manual says claims must be filed within 365 days from the date of service.' },
    ],
  },

  'wellpoint-washington': {
    slug: 'wellpoint-washington',
    family: 'anthem',
    cardDesc: 'Elevance’s Apple Health plan (formerly Amerigroup): ABA requests need the COE script, an updated plan and the Level of Support form; 3-day electronic decisions.',
    assessmentPA: {
      value: 'Not stated for 97151 in the July 2026 manual; Wellpoint’s PLUTO lookup tool decides by code',
      status: 'unverified',
      cites: [S.wlpPM, S.hcaTA],
      verifyVia: 'Wellpoint Prior Authorization Lookup Tool (PLUTO) at provider.wellpoint.com/washington-provider, or PA line 833-731-2274: check 97151.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes. Wellpoint’s manual lists what to include "When requesting authorization for Applied Behavioral Analysis service": a recent referral or script from an ABA Center of Excellence, an updated treatment plan, and the ABA Level of Support document. Request by Availity, phone 833-731-2274 or BH outpatient fax 1-844-442-8012',
      status: 'verified',
      cites: [S.wlpPM, S.hcaTA],
    },
    dxRequired: {
      value: 'Yes. Wellpoint requires "Center of Excellence Treatment Provider Recommendation" with ABA requests, and the state rule requires a COE-confirmed ASD or other developmental/intellectual disability for which ABA is effective (WAC 182-531A-0400)',
      status: 'verified',
      cites: [S.hcaTA, S.wlpPM, S.wac531a],
    },
    payer: 'Wellpoint Washington',
    state: 'WA', kind: 'medicaid-mco', parent: 'Washington Apple Health (HCA)',
    pill: 'Payer Guide · Wellpoint · Washington',
    h1: 'Wellpoint Washington ABA coverage: the intake guide.',
    metaTitle: 'Wellpoint Washington (formerly Amerigroup) ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Wellpoint Washington, formerly Amerigroup, covers ABA for Apple Health members: the COE referral, treatment plan and Level of Support form for prior authorization, decision timeframes, claims rules and what intake should collect.',
    intro: [
      'Wellpoint Washington, previously Amerigroup Washington, is one of the five Apple Health managed care plans HCA lists. Its July 1, 2026 Apple Health provider manual lists applied behavior analysis among the behavioral health services covered in integrated managed care and Behavioral Health Services Only, runs an ABA line for members (833-324-2088), and sets out what to send with an ABA authorization request.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, in Integrated Managed Care and BHSO (July 2026 manual)' },
      { label: 'Prior auth', value: 'Send a recent COE referral/script, an updated treatment plan and the ABA Level of Support document' },
      { label: 'Decision clock', value: 'Standard: 3 calendar days via Availity, 5 by phone or fax; urgent: 1 and 2 days' },
      { label: 'Submit via', value: 'Availity; PA phone 833-731-2274; BH outpatient fax 1-844-442-8012' },
      { label: 'Claims', value: 'Availity payer ID WLPNT; clean claims adjudicated within 30 calendar days' },
      { label: 'Member ABA line', value: '833-324-2088' },
    ],
    sections: [
      {
        h2: 'Prior authorization and what to include',
        body: [
          'Wellpoint’s July 2026 manual: "When requesting authorization for Applied Behavioral Analysis service, please include the following: Recent referral/script from Applied Behavior Analysis Center of Excellence (COE) provider for ABA services; An Updated Treatment Plan; ABA Level of Support Document." At HCA’s February 2025 session Wellpoint added that requests "require treatment recommendations for a qualified Center of Excellence Provider," the HCA Level of Support form, a treatment plan with dosage, frequency and duration, progress notes, current medications and prior treatment records, and pointed to its prior-authorization lookup tool (PLUTO). Decisions: urgent requests within one calendar day through Availity and two days by phone or fax; standard requests within three calendar days through Availity and five days by phone or fax. Nonparticipating providers need prior authorization for all services.',
        ],
        cites: [S.wlpPM, S.hcaTA],
      },
      {
        h2: 'Network, claims and appeals',
        body: [
          'Wellpoint lists behavior analysts, "including ABA, LABA, and CBT," among the provider types submitted as specialty care providers, and takes rosters through Availity’s Provider Data Management tool using the standard Washington all-MCO roster template. Claims go through Availity (payer ID WLPNT) or by mail to Wellpoint Washington Claims, PO Box 61010, Virginia Beach, VA 23466-1010. Wellpoint says it will "adjudicate clean claims to a paid or denied status within 30 calendar days of receipt" and pays interest when it does not pay within 61 days. Timely filing for most providers is set in the provider contract. Members may appeal within 60 calendar days of the notice; expedited appeals are decided within 72 hours. After the plan’s appeal, a member has 120 calendar days to request a state hearing (WAC 182-526-0200).',
        ],
        cites: [S.wlpPM, S.hcaTA, S.wac526],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Wellpoint Apple Health (IMC or BHSO) on the date of service.' },
      { title: 'COE referral or script', desc: 'Recent, from an ABA Center of Excellence.' },
      { title: 'Treatment plan and Level of Support form', desc: 'Updated plan with dosage, frequency and duration, plus HCA’s ABA Level of Support form.' },
      { title: 'Other insurance', desc: 'Wellpoint resolves primacy with the other plan within 30 days; if the primary has not adjudicated within 60 days, Wellpoint pays as primary.' },
    ],
    sources: [S.wlpPM, S.hcaTA, S.hcaMC, S.wac531a, S.abaBG, S.teleBG, S.wac526, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'Wellpoint’s manual publishes no ABA supervision rule of its own, so the state rule applies: ' + AH_SUPERVISION,
        status: 'verified',
        cites: [S.wlpPM, S.abaBG, S.wac531a],
      },
      concurrentBilling: {
        value: 'Not addressed in Wellpoint’s manual, and the state guide does not settle 97153/97155 overlap.',
        status: 'unverified',
        cites: [S.wlpPM, S.abaFee],
        verifyVia: 'Wellpoint Provider Services, 833-731-2274, or your Provider Relations representative.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Wellpoint’s manual publishes no ABA unit limits; units are set per authorization.',
        status: 'unverified',
        cites: [S.wlpPM],
        verifyVia: 'Wellpoint UM, 833-731-2274: ask whether HCA’s fee-schedule limits apply.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Wellpoint’s manual publishes no ABA session-note rule.',
        status: 'unverified',
        cites: [S.wlpPM],
        verifyVia: 'Wellpoint Provider Services, 833-731-2274, or your provider agreement’s documentation standards.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Wellpoint’s manual publishes no ABA setting rule of its own, so the state rule applies: ' + AH_PLACE,
        status: 'verified',
        cites: [S.wlpPM, S.wac531a, S.abaBG],
      },
      billAsProvider: {
        value: 'The rendering clinician. Wellpoint adds no ABA-specific rule; HCA requires each LBA, LABA and CBT to be enrolled, on the roster sent to the MCO, and in the servicing provider box for dates of service from July 1, 2025, with taxonomy 103K00000X; Wellpoint’s clean-claim definition includes "Appropriate taxonomy code is present."',
        status: 'verified',
        cites: [S.hcaTA, S.abaBG, S.wlpPM],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Wellpoint’s manual sets no ABA age limit, so the state rule applies: ' + AH_AGE,
        status: 'verified',
        cites: [S.wlpPM, S.wac531a],
      },
      dxRecency: {
        value: 'Wellpoint asks for a "Recent referral/script" from the COE but does not define recent.',
        status: 'unverified',
        cites: [S.wlpPM],
        verifyVia: 'Wellpoint UM, 833-731-2274: ask how recent the COE referral must be.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'A qualified Center of Excellence provider (Wellpoint, HCA session February 2025). ' + AH_DIAGNOSERS,
        status: 'verified',
        cites: [S.hcaTA, S.wac531a],
      },
      diagnosticTools: {
        value: 'Wellpoint names no instrument, so the state COE rule applies: ' + AH_TOOLS,
        status: 'verified',
        cites: [S.wlpPM, S.wac531a],
      },
      referral: {
        value: 'Yes: a "Recent referral/script from Applied Behavior Analysis Center of Excellence (COE) provider for ABA services" goes with the request. ' + AH_REFERRAL,
        status: 'verified',
        cites: [S.wlpPM, S.wac531a],
      },
      telehealth: {
        value: 'Wellpoint’s manual publishes no ABA telehealth rule, so the state rule applies: ' + AH_TELEHEALTH,
        status: 'verified',
        cites: [S.wlpPM, S.abaBG, S.teleBG],
      },
      authTurnaround: {
        value: 'Per Wellpoint’s July 2026 manual: urgent requests within one calendar day through Availity and two calendar days by phone or fax; standard requests within three calendar days through Availity and five calendar days by phone or fax. If documentation is incomplete, Wellpoint asks for more. Peer-to-peer before a final outpatient denial: two business days (one business day for behavioral health).',
        status: 'verified',
        cites: [S.wlpPM],
      },
      coordinationOfBenefits: {
        value: 'Wellpoint follows Washington COB rules: it resolves which plan is primary within 30 days; as secondary it notifies the provider within 30 days if payment details are missing; and "If the primary plan has not adjudicated the claim within 60 days," the provider may submit to Wellpoint, which "must pay as the primary within 30 days." Pay-and-chase applies to preventive pediatric care including EPSDT; the manual does not say whether ABA counts.',
        status: 'verified',
        cites: [S.wlpPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Is Wellpoint Washington the same as Amerigroup?', a: 'Yes. HCA lists the plan as "Wellpoint Washington (previously Amerigroup)." It is one of the five Apple Health managed care plans.' },
      { q: 'What does Wellpoint need for an ABA authorization?', a: 'A recent referral or script from an ABA Center of Excellence, an updated treatment plan, and HCA’s ABA Level of Support form, submitted through Availity, by phone at 833-731-2274 or by fax to 1-844-442-8012.' },
      { q: 'How fast does Wellpoint decide?', a: 'Standard requests within three calendar days through Availity (five by phone or fax); urgent requests within one calendar day through Availity (two by phone or fax).' },
    ],
  },

  'aetna-washington': {
    slug: 'aetna-washington',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA guide (no Washington exhibit) + precertification on all ten ABA codes + Washington parity law and DOH licensure.',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: precertification through Availity or the number on the card; the reauthorization interval is set by the plan, with progress evaluated every six months',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): ask whether the group carries ABA precertification and what authorization period it uses.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5 autism spectrum disorder diagnosis (ICD-10 F84.0, F84.3–F84.9) "obtained by an appropriate provider"',
      status: 'verified',
      cites: [S.aetnaGuide],
    },
    payer: 'Aetna in Washington',
    state: 'WA', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Washington',
    h1: 'Aetna ABA coverage in Washington: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Washington: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Washington families: the national medical necessity guide, precertification on all ten ABA codes, Washington’s mental health parity law (no autism statute, no ABA caps), DOH licensure for behavior analysts, and Washington’s prompt-pay and prior-authorization clocks.',
    intro: [
      'For an intake team in Washington, an Aetna card means three layers: Aetna’s national ABA policy, Washington’s mental health parity law, which is how ABA reaches state-regulated plans here, and the plan’s funding type, which decides whether state law applies at all. Washington also licenses behavior analysts, so the clinician’s DOH license matters for billing.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s ABA medical necessity guide' },
      { label: 'State mandate', value: 'No stand-alone autism statute: mental health parity (RCW 48.44.341, 48.46.291, 48.21.241 until 1/1/2027; RCW 48.43.766 from 1/1/2027) plus the EHB rule WAC 284-43-5642' },
      { label: 'Mandate age', value: 'No ABA-specific age limit in the statutes; treatment limits on mental health services are allowed only if the same limits apply to medical and surgical care' },
      { label: 'Mandate caps', value: 'No ABA-specific hour or dollar cap in the statutes (same parity test)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'Yes: DOH licenses LBAs and LABAs and certifies CBTs (chapter 18.380 RCW); out-of-state BCBAs need a WA license, reciprocity or a 180-day temporary license' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Washington',
        body: [
          'Aetna’s ABA medical necessity guide requires a DSM-5 ASD diagnosis by an appropriate provider, services "provided directly or billed by the appropriately licensed provider," functional impairment on a standardized scale in the past 12 months (at least one standard deviation below the mean) or a significant risk of harm, and a time-limited treatment plan with measurable targets; progress is evaluated every six months. Typical intensity is 10–25 hours a week for comprehensive programs (typical age 0–7) and 1–20 hours for focused programs, as guidance rather than caps. Its only state exhibit covers Maryland, so the national criteria apply in Washington. All ten ABA codes, 97151 through 97158, 0362T and 0373T, are on Aetna’s behavioral health precertification list, submitted through Availity. Aetna is not an Apple Health managed care plan in Washington.',
        ],
        cites: [S.aetnaGuide, S.aetnaPrecert, S.hcaMC],
      },
      {
        h2: 'The Washington mandate: parity, not an autism statute',
        body: [WA_MANDATE_BODY],
        cites: [S.rcw44341, S.rcw46291, S.rcw21241, S.wac5642, S.hb1432, S.rcw43766, S.regBH18],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [WA_LICENSURE_BODY, 'For Aetna this matters directly: its guide requires services to be "provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws)," and Washington is such a state.'],
        cites: [S.rcw18380, S.wac246805, S.rcw18134, S.bacbLic, S.aetnaGuide],
      },
      {
        h2: 'Claims operations in Washington: prompt pay, prior-authorization clocks, appeals',
        body: [WA_CLAIMS_BODY],
        cites: [S.wac431, S.rcw43830, S.rcw43535],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA?',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) treats payment as a contract term: where a provider has both an intermediary contract and a direct agreement, "your direct Aetna rates will apply unless we specifically notify you otherwise," and a member who has exhausted benefits cannot be charged "more than the contracted rate." Get rates from your Aetna agreement or Aetna provider services. ' + WA_FEE_BENCHMARK,
        ],
        cites: [S.aetnaOM, S.abaFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured Washington plan (state parity law applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3, ABAS, VB-MAPP or ABLLS).' },
      { title: 'Clinician licenses', desc: 'Washington DOH license numbers for the LBA (and LABA/CBT credentials) delivering and billing services.' },
    ],
    sources: [S.aetnaGuide, S.aetnaPrecert, S.aetnaCPB648, S.aetnaNPC, S.aetnaOM, S.aetnaTele, S.rcw44341, S.rcw46291, S.rcw21241, S.wac5642, S.hb1432, S.rcw43766, S.rcw18380, S.wac246805, S.rcw18134, S.bacbLic, S.wac431, S.rcw43830, S.rcw43735, S.rcw43535, S.wac51205, S.erisa, S.abaFee],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s Network Participation Criteria: services "must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board"; supervised staff may be a BCaBA or a paraprofessional, with "A minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional "for each 10 hours of applied behavior analysis," and the supervisor "onsite with the child at least one hour a month." "All BCBAs, BCaBAs and paraprofessionals must meet state requirements." In Washington that means DOH’s rule too: two face-to-face contacts a month with each CBT and direct supervision of at least 5 percent of the CBT’s monthly hours (WAC 246-805-330).',
        status: 'verified',
        cites: [S.aetnaNPC, S.wac246805],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA documents (the medical necessity guide, the precertification list).',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap is published. Typical intensities are 10–25 hours a week (comprehensive) and 1–20 (focused), typical rather than limits; progress is re-evaluated every six months.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      noteSignature: {
        value: 'Not addressed. Aetna sets treatment plan content requirements but not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'The participating-provider agreement and the Aetna Behavioral Health provider manual’s documentation section.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-neutral in Aetna’s guide; inpatient, residential or partial hospitalization settings use that level of care’s criteria, and ABA does not need separate authorization there. Aetna expects coordination with existing providers and the school district.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      billAsProvider: {
        value: 'Services "must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope," unless mandates, plan documents or contracts say otherwise. Washington licenses behavior analysts, so the billing credential is the DOH license (LBA), or a licensed psychologist.',
        status: 'verified',
        cites: [S.aetnaGuide, S.rcw18380],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s guide sets no age cap; its age ranges (0–7 for comprehensive, all ages for focused) are typical, not limiting.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.rcw44341],
        verifyVia: 'Live benefits verification on the member ID: establish fully insured vs. self-funded ERISA, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the ASD diagnosis, but medical necessity requires functional impairment on a standardized scale administered in the past 12 months (at least one standard deviation below the mean) or a significant risk of harm.',
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
        value: 'Aetna’s ABA guide requires no physician referral or prescription; what it requires is precertification of all ten ABA codes.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.rcw44341],
      },
      telehealth: {
        value: 'Aetna’s Telemedicine and Direct Patient Contact Payment Policy lists, for commercial plans, 97151, 97153, 97155, 97156 and 97157 as eligible by telehealth with modifier GT, 95 or FR; 97152, 97154 and 97158 are checked for Medicare Advantage only. The posted policy shows a last review of June 2021, so treat the list as perishable. Aetna’s manual says providers "must act within the scope of their license and ensure that they have the proper licensure based on state requirements." For a fully insured Washington plan, RCW 48.43.735 requires reimbursement of a covered, medically necessary service delivered by telemedicine "the same amount" as in person (groups of 11 or more providers may negotiate otherwise), counts the home as an originating site, and lets the carrier apply its usual prior authorization. Self-funded plans are outside the statute.',
        status: 'plan-dependent',
        cites: [S.aetnaTele, S.aetnaOM, S.rcw43735],
        verifyVia: 'Availity or the precertification line on the card: ask whether the plan is fully insured in Washington or self-funded, and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: waAuth('Aetna'),
        status: 'plan-dependent',
        cites: [S.rcw43830, S.erisa],
        verifyVia: waAuthVia('Aetna'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: waCob('Aetna'),
        status: 'plan-dependent',
        cites: [S.wac51205, S.wac0200, S.cfr433, S.tricare, S.champva],
        verifyVia: waCobVia('Aetna'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Washington?', a: 'Yes, under its national ABA guide for ASD. For fully insured Washington plans, the state’s mental health parity law requires coverage of medically necessary treatment for DSM conditions on par with medical care; self-funded employer plans follow their own documents.' },
      { q: 'Does Washington have an autism insurance mandate?', a: 'Not a stand-alone one. ABA is required through Washington’s mental health parity statutes and, for individual and small-group plans, the essential health benefit rule that lists behavioral treatment for a DSM diagnosis. A new parity statute, RCW 48.43.766, takes over on January 1, 2027.' },
      { q: 'Can a BCBA licensed in another state treat an Aetna member in Washington?', a: 'Only with Washington authorization. Washington requires a DOH license (or a 180-day temporary license for nonresidents licensed elsewhere, or reciprocity) to practice ABA, and its telehealth act lets an out-of-state practitioner treat a patient in Washington only with a Washington license, apart from consultations, assessments without treatment, and short continuity-of-care follow-up.' },
      { q: 'How fast must Aetna pay a clean claim in Washington?', a: 'For fully insured plans, Washington requires carriers to pay 95 percent of clean claims within 30 days and pay or deny 95 percent of all claims within 60 days, with 1 percent monthly interest on clean claims older than 61 days (WAC 284-170-431).' },
      { q: 'What does Aetna pay for ABA in Washington?', a: 'Aetna publishes no ABA rates; payment follows your participation agreement. The public benchmark is Apple Health’s fee-for-service schedule (97153 $12.40 per 15 minutes from July 1, 2026).' },
    ],
  },

  'cigna-washington': {
    slug: 'cigna-washington',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide (no PA on assessment codes) + Washington parity law and DOH licensure.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: completed assessment and treatment plan attached to the ABA Prior Authorization Form',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: autism spectrum disorder under DSM-5-TR criteria, made by an independently licensed professional whose scope includes diagnosis (EN0499)',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Washington',
    state: 'WA', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Washington',
    h1: 'Cigna / Evernorth ABA coverage in Washington: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Washington: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Washington families: national policy EN0499, no PA on assessments, all ABA codes by telehealth, Washington’s mental health parity law (no autism statute, no ABA caps), DOH licensure and Washington’s claim and prior-authorization clocks.',
    intro: [
      'For an intake team in Washington, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, Washington’s mental health parity law, and the plan’s funding type, which decides whether state law applies. Many Cigna members are on self-funded employer plans, so check funding first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'State mandate', value: 'No stand-alone autism statute: mental health parity (RCW 48.44.341, 48.46.291, 48.21.241 until 1/1/2027; RCW 48.43.766 from 1/1/2027) plus the EHB rule WAC 284-43-5642' },
      { label: 'Mandate age', value: 'No ABA-specific age limit in the statutes; treatment limits on mental health services are allowed only if the same limits apply to medical and surgical care' },
      { label: 'Mandate caps', value: 'No ABA-specific hour or dollar cap in the statutes (same parity test)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'Yes: DOH licenses LBAs and LABAs and certifies CBTs (chapter 18.380 RCW); out-of-state BCBAs need a WA license, reciprocity or a 180-day temporary license' },
      { label: 'Fee schedule', value: 'Not public — your ABA fee schedule is Exhibit A of your Evernorth Provider Agreement; fee questions to Evernorth Provider Services, 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Washington',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). Per the autism resource guide (March 2025), prior authorization is no longer required for assessment codes 97151, 97152 and 0362T with an autism diagnosis, as long as the provider is independently licensed or a BCBA and the plan covers ABA; treatment needs the completed assessment and treatment plan on the ABA Prior Authorization Form. "All ABA CPT codes are covered telehealth services." Electronic claims use Evernorth payer ID 62308. A full-text check of EN0499 and the resource guide found no Washington-specific provision, so the national criteria apply. Cigna is not an Apple Health managed care plan.',
        ],
        cites: [S.en0499, S.cignaARG, S.hcaMC],
      },
      {
        h2: 'The Washington mandate: parity, not an autism statute',
        body: [WA_MANDATE_BODY],
        cites: [S.rcw44341, S.rcw46291, S.rcw21241, S.wac5642, S.hb1432, S.rcw43766, S.regBH18],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [WA_LICENSURE_BODY],
        cites: [S.rcw18380, S.wac246805, S.rcw18134, S.bacbLic],
      },
      {
        h2: 'Claims operations in Washington: prompt pay, prior-authorization clocks, appeals',
        body: [WA_CLAIMS_BODY],
        cites: [S.wac431, S.rcw43830, S.rcw43535],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth’s Administrative Guidelines (September 2026) say the Provider Agreement terms "include the reimbursement rates applicable to covered services," and point ABA providers to "Exhibit A in your Provider Agreement" for the fee schedule and the list of reimbursable autism services. Fee questions go to Provider Services at 800.926.2273. Virtual services are billed with modifier 95, which "will not change the reimbursement." ' + WA_FEE_BENCHMARK,
        ],
        cites: [S.ebhAdmin, S.abaFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured Washington plan (state parity law applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and license type, plus the date of the most recent diagnosis. Provisional or rule-out diagnoses don’t count.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Clinician licenses', desc: 'Washington DOH license for the LBA billing the services.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.rcw44341, S.rcw46291, S.rcw21241, S.wac5642, S.hb1432, S.rcw43766, S.rcw18380, S.wac246805, S.rcw18134, S.bacbLic, S.wac431, S.rcw43830, S.rcw43535, S.wac51205, S.erisa, S.abaFee],
    deliveryRules: {
      supervision: {
        value: 'Case supervision is by a BCBA, a licensed behavior analyst, or an independently licensed mental health professional with ABA training, at one to two hours of direct plus indirect supervision per ten hours of direct treatment; at 10 hours a week or less, at least one to two hours a week (EN0499). Washington’s DOH rule adds two face-to-face contacts a month with each CBT and direct supervision of at least 5 percent of the CBT’s monthly hours (WAC 246-805-330).',
        status: 'verified',
        cites: [S.en0499, S.wac246805],
      },
      concurrentBilling: {
        value: 'Only one provider may bill for a unit of time, except 97153, 97154 and 97155 during direct supervision, when the BCBA or QHP directs the technician and both are face-to-face with the patient at the same time.',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap is published. ABA codes bill in 15-minute units, and intensity must reflect severity, goals and response to treatment.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499],
      },
      noteSignature: {
        value: 'Each service needs its own record with start and end date and time, location, focus, the intervention, who was present, the service type, and the name, credential and signature of the provider who rendered it (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'Goals and data are reported separately for each setting (home, clinic, school, community). Primarily educational or vocational services are not covered (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      billAsProvider: {
        value: 'Evernorth does not credential non-licensed or non-certified staff; their services are billed under the supervising provider. On a CMS-1500 the rendering provider prints their name in box 31 and only a BCBA or other licensed provider goes in box 33; electronic claims use payer ID 62308 (autism resource guide). In Washington the supervising behavior analyst must hold a DOH license.',
        status: 'verified',
        cites: [S.cignaARG, S.rcw18380],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; it says focused intervention "should not be restricted by age." Age terms come from the benefit plan.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.rcw44341],
        verifyVia: 'Live benefits verification: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs the date it was most recently made. The data clocks: standardized instrument within 60 days before treatment starts, baseline data within 60 days, and current data within 60 days of a continued-treatment request (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional licensed to practice independently whose board considers diagnosis within scope, applying DSM-5-TR criteria (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated, but it must be reliable, valid and standardized, completed in full, and the current edition (EN0499’s example: Vineland-3, not Vineland-II).',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral or prescription. Assessments 97151, 97152 and 0362T need no PA with an autism diagnosis when the provider is independently licensed or a BCBA; treatment needs the assessment and plan on the ABA PA form.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.rcw44341],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" (autism resource guide), billed with modifier 95, which "will not change the reimbursement" (Evernorth Administrative Guidelines). For fully insured Washington plans, RCW 48.43.735 also requires same-amount reimbursement for covered telemedicine services, with the home as an originating site. The clinician still needs Washington licensure to treat a child located in Washington (RCW 18.134.050).',
        status: 'verified',
        cites: [S.cignaARG, S.ebhAdmin, S.rcw43735, S.rcw18134],
      },
      authTurnaround: {
        value: waAuth('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.rcw43830, S.erisa],
        verifyVia: waAuthVia('Cigna/Evernorth'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: waCob('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.wac51205, S.wac0200, S.cfr433, S.tricare, S.champva],
        verifyVia: waCobVia('Cigna/Evernorth'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Washington?', a: 'Yes, under national policy EN0499 for ASD. Fully insured Washington plans are also bound by the state’s mental health parity law; self-funded employer plans follow their own documents.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in Washington?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'Does a BCBA need a Washington license to bill Cigna?', a: 'Yes, to practice in Washington. Chapter 18.380 RCW requires a DOH license (or temporary license) to practice ABA in the state, whatever the payer.' },
      { q: 'What does Cigna pay for ABA in Washington?', a: 'Cigna publishes no ABA rates; your fee schedule is Exhibit A of your Evernorth Provider Agreement (questions: 800.926.2273). Apple Health’s 97153 rate ($12.40 per 15 minutes) is the public benchmark.' },
    ],
  },

  'unitedhealthcare-washington': {
    slug: 'unitedhealthcare-washington',
    family: 'unitedhealthcare',
    cardDesc: 'Optum ABA criteria (BH803ABASCC) + Washington parity law; Washington is not in Optum’s ABA State Mandates document; telehealth limited to 97155–97157.',
    assessmentPA: {
      value: 'Required: Optum’s ABA Supplemental Clinical Criteria say "Prior authorization is required for ABA" unless otherwise specified or mandated by contract or law',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required; the review interval is set per authorization, and use below 80% of authorized hours triggers review',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express or the behavioral health number on the card: ask what review interval will be set on this member’s ABA authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5-TR ASD diagnosed by a state-licensed physician, psychologist or other qualified licensed clinician and confirmed with at least one clinically validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Washington',
    state: 'WA', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Washington',
    h1: 'UnitedHealthcare / Optum ABA coverage in Washington: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Washington: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Washington families with commercial plans: Optum’s ABA criteria and prior authorization, the three-code telehealth list, credential modifiers, Washington’s mental health parity law, DOH licensure, and how this differs from UHC’s Apple Health plan.',
    intro: [
      'For an intake team in Washington, a UnitedHealthcare card can mean two very different things. UnitedHealthcare Community Plan is an Apple Health managed care plan with its own Washington Medicaid criteria (see that guide). This guide covers commercial UnitedHealthcare, where Optum Behavioral Health applies its national ABA criteria, Washington’s mental health parity law applies to fully insured plans, and plan funding decides whether state law binds at all.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'No stand-alone autism statute: mental health parity (RCW 48.44.341, 48.46.291, 48.21.241 until 1/1/2027; RCW 48.43.766 from 1/1/2027) plus the EHB rule WAC 284-43-5642' },
      { label: 'Mandate age', value: 'No ABA-specific age limit in the statutes; treatment limits on mental health services are allowed only if the same limits apply to medical and surgical care' },
      { label: 'Mandate caps', value: 'No ABA-specific hour or dollar cap in the statutes (same parity test)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'Yes: DOH licenses LBAs and LABAs and certifies CBTs (chapter 18.380 RCW); out-of-state BCBAs need a WA license, reciprocity or a 180-day temporary license' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Washington',
        body: [
          'UnitedHealthcare administers commercial ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026): "Prior authorization is required for ABA (unless otherwise specified or mandated by contract or law)," with continued-service review looking hard at use below 80 percent of authorized hours over a two-week period. The criteria point to a separate ABA State Mandates document for listed states; its July 2026 edition lists Arizona, California, Connecticut, Florida, Indiana, Kansas Medicaid, Kentucky, Maryland, Massachusetts, New Jersey Medicaid, New York Medicaid, Ohio, Pennsylvania and Virginia, and Washington is not among them, so no Washington-specific criteria modify the commercial policy. (Optum’s Washington criteria apply only to UnitedHealthcare Community Plan’s Apple Health members.)',
        ],
        cites: [S.optumSCC, S.optumSM, S.optumWA],
      },
      {
        h2: 'The Washington mandate: parity, not an autism statute',
        body: [WA_MANDATE_BODY],
        cites: [S.rcw44341, S.rcw46291, S.rcw21241, S.wac5642, S.hb1432, S.rcw43766, S.regBH18],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [WA_LICENSURE_BODY],
        cites: [S.rcw18380, S.wac246805, S.rcw18134, S.bacbLic],
      },
      {
        h2: 'Claims operations in Washington: prompt pay, prior-authorization clocks, appeals',
        body: [WA_CLAIMS_BODY],
        cites: [S.wac431, S.rcw43830, S.rcw43535],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA?',
        body: [
          'UnitedHealthcare publishes no ABA rate table; Optum pays from the contract. Optum’s National Network Manual (effective Sept. 1, 2026) defines the “Fee Maximum” as “The maximum amount a participating provider may be paid for a specific health care service provided to a member,” and says “Reimbursement to clinicians is based upon licensure rather than degree.” Optum’s commercial ABA Reimbursement Policy (2022RP501A) puts the credential level on every line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA, HP for a doctoral-level provider; the policy notes state requirements "may supplement, modify or supersede" it. ' + WA_FEE_BENCHMARK,
        ],
        cites: [S.optumNNM, S.optumReimb, S.abaFee],
      },
    ],
    collect: [
      { title: 'Which UnitedHealthcare product', desc: 'Commercial (this guide) vs. UnitedHealthcare Community Plan Apple Health (COE pathway and Washington Medicaid criteria).' },
      { title: 'Plan funding type', desc: 'Fully insured Washington plan (state parity law applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD and severity level, confirmed with a validated tool (ADI-R, ADOS-2 and others).' },
      { title: 'Clinician licenses', desc: 'Washington DOH license for the LBA; technician credential (CBT; Optum’s HM line names the RBT).' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumWA, S.optumTele, S.optumReimb, S.optumNNM, S.rcw44341, S.rcw46291, S.rcw21241, S.wac5642, S.hb1432, S.rcw43766, S.rcw18380, S.wac246805, S.rcw18134, S.bacbLic, S.wac431, S.rcw43830, S.rcw43735, S.rcw43535, S.wac51205, S.erisa, S.abaFee],
    deliveryRules: {
      supervision: {
        value: 'Consistent with CASP standards, direct case supervision is required at 1–2 hours for every 10 hours of direct treatment. Technicians work under a BCBA or licensed behavioral health clinician and "should be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate" (Optum SCC). In Washington the state credential is the DOH CBT, supervised under WAC 246-805-330 (two face-to-face contacts a month; 5 percent direct supervision monthly).',
        status: 'verified',
        cites: [S.optumSCC, S.wac246805],
      },
      concurrentBilling: {
        value: 'Not addressed. The SCC define direct case supervision as happening during direct treatment but do not state the billing consequence.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual and the participating-provider agreement, or a written coding determination from Optum.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap. Hours must be justified by documented clinical need at the least restrictive appropriate level; use below 80 percent of authorized hours over two weeks must be explained at review.',
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
        value: 'ABA is provided at the least restrictive, most clinically appropriate level. Not covered: services that are not ABA, "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA; school coordination is allowed.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      billAsProvider: {
        value: 'Every line carries the rendering credential: HM (RBT), HN (BCaBA), HO (master’s-level BCBA or licensed clinician), HP (doctoral level), per Optum’s commercial ABA reimbursement policy; "Reimbursement to clinicians is based upon licensure rather than degree." In Washington the behavior analyst must hold a DOH license.',
        status: 'verified',
        cites: [S.optumReimb, S.optumNNM, S.rcw18380],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion; the member’s benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.rcw44341],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with severity level using validated tools, and use below 80 percent of authorized hours triggers review.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'A state-licensed physician, psychologist, or other state-licensed clinician qualified to diagnose under DSM-5-TR.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool, from a non-exhaustive list of first-level screens (M-CHAT and others), second-level screens (CARS/CARS-2 and others) and formal diagnostic tools (ADI-R, ADOS-2 and others).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral; the SCC require prior authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.rcw44341],
      },
      telehealth: {
        value: 'Optum’s Telehealth Billing guide (updated September 2025), commercial plans: "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157." The 97151 assessment and technician 97153 are not on the list. Bill POS 02 or 10. For fully insured Washington plans, RCW 48.43.735 requires reimbursement of a covered, medically necessary service delivered by telemedicine "the same amount" as in person when it can be safely and effectively provided that way; ask Optum how it applies the three-code list to a fully insured Washington plan. Self-funded plans are outside the statute.',
        status: 'verified',
        cites: [S.optumTele, S.rcw43735],
      },
      authTurnaround: {
        value: waAuth('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.rcw43830, S.erisa],
        verifyVia: waAuthVia('UnitedHealthcare/Optum'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: waCob('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.wac51205, S.wac0200, S.cfr433, S.tricare, S.champva],
        verifyVia: waCobVia('UnitedHealthcare/Optum'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Washington?', a: 'Yes, under Optum’s national ABA criteria for ASD on commercial plans. Fully insured Washington plans are also bound by the state’s mental health parity law. UnitedHealthcare Community Plan, the Apple Health plan, uses separate Washington Medicaid criteria.' },
      { q: 'Does Optum have Washington-specific ABA criteria for commercial plans?', a: 'No. Washington is not in Optum’s July 2026 ABA State Mandates document. Optum’s Washington criteria apply to Apple Health members of UnitedHealthcare Community Plan.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare commercial in Washington?', a: 'Optum’s commercial telehealth guide allows only 97155, 97156 and 97157 by telehealth, billed POS 02 or 10. Fully insured Washington plans are also subject to RCW 48.43.735, so ask Optum how it applies the list to your member’s plan.' },
      { q: 'What does UnitedHealthcare pay for ABA in Washington?', a: 'UnitedHealthcare/Optum publishes no ABA rates: you are paid up to the Fee Maximum in your Optum agreement, with a credential modifier on each line. Apple Health’s 97153 rate ($12.40 per 15 minutes) is the public benchmark.' },
    ],
  },

  'premera-blue-cross-washington': {
    slug: 'premera-blue-cross-washington',
    family: 'bcbs',
    cardDesc: 'Washington’s largest Blue: policy 3.01.510 (May 2026), PA on ABA codes incl. 97151, in-person or video delivery, 2 hrs supervision per 10 hrs, LABAs billed under the LBA.',
    assessmentPA: {
      value: 'Yes: Premera’s October 2026 code lists put ABA among behavioral health services requiring prior authorization, and the individual-plan list marks 97151, 0362T and H0031 "Prior Authorization Required"',
      status: 'verified',
      cites: [S.premCodeInd, S.premCodeGrp],
    },
    treatmentPA: {
      value: 'Yes: 97153, 97154, 97155, 97156, 97158 and 0373T are "Prior Authorization Required" on the individual-plan code list (10/1/2026), and the non-individual list names ABA as requiring PA; submit through Availity',
      status: 'verified',
      cites: [S.premCodeInd, S.premCodeGrp, S.premPAPage],
    },
    dxRequired: {
      value: 'Yes: autism spectrum disorder (DSM-5/DSM-5-TR) or autistic disorder, Asperger’s syndrome or PDD-unspecified (ICD-10), diagnosed by a professional whose scope includes diagnosing psychiatric or neurodevelopmental disorders; "ABA is considered not medically necessary for any other diagnoses or conditions" (policy 3.01.510)',
      status: 'verified',
      cites: [S.premPolicy],
    },
    payer: 'Premera Blue Cross',
    state: 'WA', kind: 'commercial',
    pill: 'Payer Guide · Premera Blue Cross · Washington',
    h1: 'Premera Blue Cross ABA coverage in Washington: the intake guide.',
    metaTitle: 'Premera Blue Cross ABA Coverage in Washington: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Premera Blue Cross covers ABA in Washington: medical policy 3.01.510, prior authorization on ABA codes, who may deliver and supervise, school and telehealth rules, Washington’s mental health parity law, DOH licensure and what intake should collect.',
    intro: [
      'Premera Blue Cross is the Blue Cross Blue Shield licensee most Washington families with a Blue card will see (Regence BlueShield is the other Blue in the state, with its own guide). Premera publishes a full ABA medical policy, 3.01.510 (effective May 1, 2026), a provider ABA resources page, and monthly code lists that show which ABA codes need prior authorization. Washington’s mental health parity law and DOH licensure sit on top for fully insured plans.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD (incl. autistic disorder, Asperger’s, PDD-NOS), per medical policy 3.01.510' },
      { label: 'Prior auth', value: 'Yes: ABA on the BH PA list; 97151, 97153–97156, 97158, 0362T, 0373T PA required (individual list, 10/1/2026)' },
      { label: 'State mandate', value: 'No stand-alone autism statute: mental health parity (RCW 48.44.341, 48.46.291, 48.21.241 until 1/1/2027; RCW 48.43.766 from 1/1/2027) plus the EHB rule WAC 284-43-5642' },
      { label: 'Mandate age', value: 'No ABA-specific age limit in the statutes; treatment limits on mental health services are allowed only if the same limits apply to medical and surgical care' },
      { label: 'Mandate caps', value: 'No ABA-specific hour or dollar cap in the statutes (same parity test)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'Yes: DOH licenses LBAs and LABAs and certifies CBTs (chapter 18.380 RCW); out-of-state BCBAs need a WA license, reciprocity or a 180-day temporary license' },
      { label: 'Fee schedule', value: 'Not public — rates are in your Premera agreement (Availity shows fee schedules); Microsoft and Amazon groups use the same fee schedule rates' },
    ],
    sections: [
      {
        h2: 'Policy 3.01.510: who, what and where',
        body: [
          'Premera’s ABA policy (effective May 1, 2026; last revised April 27, 2026) covers ABA for autism spectrum disorder diagnosed by "a healthcare professional whose legally permitted scope of licensure includes diagnosis of psychiatric disorders or neurodevelopmental disorders." Covered services include initial and periodic functional behavioral analysis, individual and group treatment, and parent or caregiver training, plus non-treatment components (case review, data analysis, coordination with other providers or school staff, supervision, treatment plan development and revision, team conferences). Program managers or lead behavioral therapists direct the care: in states that license behavior analysts, that means a state-licensed behavior analyst (Washington’s LBA), or a licensed psychiatrist, developmental pediatrician, pediatric neurologist, psychiatric ARNP, independently licensed psychologist or mental health clinician, among others. Direct treatment may also be given by supervised behavioral technicians (state-certified where the state requires it, as Washington does), BCaBAs or LaBAs and, in Washington, by "any agency that is licensed by the state Department of Health as a Behavioral Health Agency" whose license includes ABA.',
          'Services "may be provided in-person or via secure real-time video and audio telehealth/virtual modalities, or via a combination," most often at home or in a clinic, with community settings as needed. Some direct treatment may happen at school when autism-related difficulties show up there, but it "must consist entirely of bona-fide ABA treatment activities"; acting as a classroom aide or 1:1 teacher, or providing IEP services, is not covered, and some plans exclude school settings altogether. Premera treats as unnecessary duplication more than one lead therapist or more than one agency at a time (with a narrow exception for a short, highly specialized second program), more than one clinician giving direct treatment at once, and ABA delivered in the same session as speech or occupational therapy.',
        ],
        cites: [S.premPolicy, S.premABA],
      },
      {
        h2: 'Prior authorization, credentialing and billing',
        body: [
          'Premera’s code lists (dated October 1, 2026) put "Applied behavioral analysis (ABA)" first among behavioral health services requiring prior authorization for both individual and non-individual plans. The individual-plan list marks 97151, 97153, 97154, 97155, 97156, 97158, 0362T, 0373T, H0031 and H0032 "Prior Authorization Required" and asks for the history and physical, documentation of medical necessity and the procedure report. Non-individual (group) requests and code checks go through Availity; individual-plan requests use the separate site shown on the ID card.',
          'Agencies join by sending an organization credentialing application and W-9 to provider.relations@premera.com; credentialing "may take 30-45 days," and re-credentialing is every three years. "Licensed assistant behavior analysts (LABAs) do not need to get credentialed through Premera. Their services are billed under the credentialed, supervising licensed behavior analyst’s (LBA’s) name." Treatment plans should be updated every six months and kept on file rather than sent unless requested. Customer service for providers: 877-342-5258, option 2.',
        ],
        cites: [S.premCodeInd, S.premCodeGrp, S.premPAPage, S.premABA],
      },
      {
        h2: 'The Washington mandate: parity, not an autism statute',
        body: [WA_MANDATE_BODY],
        cites: [S.rcw44341, S.rcw46291, S.rcw21241, S.wac5642, S.hb1432, S.rcw43766, S.regBH18],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [WA_LICENSURE_BODY, 'Premera’s policy follows the same line: behavior analysts "must be state licensed, or state certified in states that require state licensure or state certification," and BCBA certification alone qualifies only in states that do not license.'],
        cites: [S.rcw18380, S.wac246805, S.rcw18134, S.bacbLic, S.premPolicy],
      },
      {
        h2: 'Claims operations in Washington: prompt pay, prior-authorization clocks, appeals',
        body: [WA_CLAIMS_BODY],
        cites: [S.wac431, S.rcw43830, S.rcw43535],
      },
    ],
    collect: [
      { title: 'Plan type', desc: 'Individual plan (separate PA site, per the ID card) vs. group; fully insured vs. self-funded (Microsoft and Amazon, for example, are large employer groups).' },
      { title: 'Diagnosis report', desc: 'ASD diagnosis from a professional licensed to diagnose psychiatric or neurodevelopmental disorders.' },
      { title: 'History, physical and medical necessity', desc: 'Premera’s code list asks for these with the PA request.' },
      { title: 'Treatment plan', desc: 'Updated every six months; kept on file.' },
      { title: 'Other providers', desc: 'Speech, OT and school services, so sessions are not scheduled at the same time as ABA.' },
    ],
    sources: [S.premPolicy, S.premABA, S.premCodeInd, S.premCodeGrp, S.premPAPage, S.rcw44341, S.rcw46291, S.rcw21241, S.wac5642, S.hb1432, S.rcw43766, S.rcw18380, S.wac246805, S.rcw18134, S.bacbLic, S.wac431, S.rcw43830, S.rcw43735, S.rcw43535, S.wac51205, S.erisa, S.abaFee],
    deliveryRules: {
      supervision: {
        value: 'Premera’s ABA resources page: technicians "should receive weekly clinical supervision from the program manager/lead behavioral therapist as follows for each patient: Generally, 2 hours for every 10 hours of direct service provision, with a minimum of 2 hours weekly when direct service provision is 10 hours per week or less." Policy 3.01.510 adds that some supervisory time should be direct observation, and supervision may be in person or by real-time video. DOH’s CBT supervision rule (WAC 246-805-330) also applies in Washington.',
        status: 'verified',
        cites: [S.premABA, S.premPolicy, S.wac246805],
      },
      concurrentBilling: {
        value: 'Yes, during supervision of direct treatment: "When the program manager/lead behavioral therapist is supervising the behavioral technician … while the latter is providing covered direct treatment services, then for only the time during which that is taking place, both the supervision … and the direct treatment services … are covered services" (3.01.510); both the LBA and the technician write separate chart notes. Otherwise, more than one clinician giving direct ABA to the same member at once is not medically necessary, and group sessions are covered for one clinician only.',
        status: 'verified',
        cites: [S.premPolicy, S.premABA],
      },
      dailyLimits: {
        value: 'Policy 3.01.510 sets no numeric hour cap; it points to CASP guidance on treatment intensity. Prep time, charting and provider travel are not separately covered.',
        status: 'verified',
        cites: [S.premPolicy],
      },
      noteSignature: {
        value: 'Premera says that during supervision of direct treatment "both the LBA and the RBT need to create separate chart notes," and for supervision outside direct treatment only the LBA’s note is needed. It sets no signature timing rule.',
        status: 'verified',
        cites: [S.premABA],
      },
      placeOfService: {
        value: 'Home or clinic most often, community settings as needed, in person or by real-time video. School: some direct treatment may occur there when autism-related difficulties are evident, but only bona-fide ABA; classroom aide, 1:1 teacher, tutoring and IEP services are not covered, and some plans exclude school settings. Camps and specialized schools are not covered.',
        status: 'verified',
        cites: [S.premPolicy, S.premABA],
      },
      billAsProvider: {
        value: 'Program development, plan development, supervision and coordination are covered "only for program managers/lead behavioral therapists." LABAs are not credentialed separately: "Their services are billed under the credentialed, supervising licensed behavior analyst’s (LBA’s) name." In-network providers must use the codes listed in the policy (CPT 97151–97158, 0362T, 0373T, or the listed HCPCS codes) to be reimbursed.',
        status: 'verified',
        cites: [S.premPolicy, S.premABA],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Policy 3.01.510 sets no age limit.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.premPolicy, S.rcw44341],
        verifyVia: 'Availity eligibility and benefits, or Premera customer service, 877-342-5258 option 2: check the member’s benefit booklet for ABA terms and whether the plan is fully insured.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Policy 3.01.510 states no recency rule for the diagnosis.',
        status: 'unverified',
        cites: [S.premPolicy],
        verifyVia: 'Premera behavioral health utilization review via Availity: ask whether an older diagnostic evaluation is accepted for an initial request.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'A healthcare professional "whose legally permitted scope of licensure includes diagnosis of psychiatric disorders or neurodevelopmental disorders."',
        status: 'verified',
        cites: [S.premPolicy],
      },
      diagnosticTools: {
        value: 'Policy 3.01.510 names no required diagnostic instrument.',
        status: 'unverified',
        cites: [S.premPolicy],
        verifyVia: 'Premera behavioral health utilization review via Availity.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Premera requires no physician referral in policy 3.01.510; what it requires is prior authorization with history and physical and medical necessity documentation.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.premPolicy, S.premCodeInd, S.rcw44341],
      },
      telehealth: {
        value: 'ABA "may be provided in-person or via secure real-time video and audio telehealth/virtual modalities, or via a combination," and supervision may be by telehealth too (3.01.510; Premera ABA resources page). Premera names no code exclusions. For fully insured Washington plans, RCW 48.43.735 requires same-amount reimbursement for covered telemedicine services.',
        status: 'verified',
        cites: [S.premPolicy, S.premABA, S.rcw43735],
      },
      authTurnaround: {
        value: waAuth('Premera'),
        status: 'plan-dependent',
        cites: [S.rcw43830, S.erisa],
        verifyVia: waAuthVia('Premera'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: waCob('Premera'),
        status: 'plan-dependent',
        cites: [S.wac51205, S.wac0200, S.cfr433, S.tricare, S.champva],
        verifyVia: waCobVia('Premera'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Premera Blue Cross cover ABA therapy?', a: 'Yes, for autism spectrum disorder under medical policy 3.01.510, subject to prior authorization. Fully insured Washington plans are also bound by the state’s mental health parity law.' },
      { q: 'Does Premera require prior authorization for the ABA assessment?', a: 'Yes. Premera’s October 2026 code lists put ABA among services needing prior authorization, and the individual-plan list marks 97151 (and 0362T) as PA required.' },
      { q: 'Do LABAs need to be credentialed with Premera?', a: 'No. LABA services are billed under the credentialed, supervising LBA’s name.' },
      { q: 'Can ABA be done at school with Premera?', a: 'Some direct treatment may take place at school when autism-related difficulties are evident there, but it must be entirely ABA treatment; acting as a classroom aide or providing IEP services is not covered, and some plans exclude school settings.' },
      { q: 'Can a BCBA licensed in another state treat a Premera member in Washington?', a: 'Only with Washington authorization: a DOH license, reciprocity, or a 180-day temporary license for nonresidents licensed elsewhere. Premera’s own policy requires state licensure where the state licenses behavior analysts.' },
    ],
  },

  'regence-blueshield-washington': {
    slug: 'regence-blueshield-washington',
    family: 'bcbs',
    cardDesc: 'Regence BH18/BH33, which name Washington’s parity act as their legal basis: PA only where the contract requires it, one standardized assessment, continuation requests 5–30 days before the end date.',
    assessmentPA: {
      value: 'Only where the member’s contract requires preauthorization of the initial assessment: BH33 "only applies to member contracts that are subject to preauthorization for the initial assessment"',
      status: 'plan-dependent',
      cites: [S.regBH33],
      verifyVia: 'Regence’s preauthorization list for the member contract (via Availity): check 97151 and 97152.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Where the contract requires it: BH18 "only applies to member contracts that are subject to preauthorization" for ABA; continuation documentation is due within five business days before the authorization ends and no more than 30 days before',
      status: 'plan-dependent',
      cites: [S.regBH18],
      verifyVia: 'Regence’s preauthorization list for the member contract (via Availity).',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: autism spectrum disorder diagnosed by a qualified treating health care professional "as defined by state law" (BH33 examples: pediatrician, pediatric neurologist, developmental pediatrician, psychologist)',
      status: 'verified',
      cites: [S.regBH18, S.regBH33],
    },
    payer: 'Regence BlueShield (Washington)',
    state: 'WA', kind: 'commercial',
    pill: 'Payer Guide · Regence BlueShield · Washington',
    h1: 'Regence BlueShield ABA coverage in Washington: the intake guide.',
    metaTitle: 'Regence BlueShield ABA Coverage in Washington: Prior Auth Guide | Carelu',
    metaDescription:
      'How Regence BlueShield covers ABA in Washington: medical policies BH18 and BH33 (which cite Washington’s Mental Health Parity Act), contract-dependent preauthorization, the standardized-assessment and documentation rules, LBAT requirement, and what intake should collect.',
    intro: [
      'Regence BlueShield is Washington’s second Blue plan, alongside Premera. Its ABA rules are two medical policies shared across its states: BH18 for treatment and BH33 for the initial assessment. Both list "Washington’s Mental Health Parity Act (RCW 48.44)" as the Washington basis for the benefit, and both define the Washington treating provider as a qualified lead behavior analysis therapist (LBAT). The version we read is effective August 1, 2025 and carries a notice that a revised BH18 takes effect November 1, 2026.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, under BH18 (treatment) and BH33 (initial assessment)' },
      { label: 'Prior auth', value: 'Only for contracts subject to ABA preauthorization; check the member’s contract' },
      { label: 'Treatment plan needs', value: 'Objective measures and at least one standardized assessment for each targeted behavior; hours and units with clinical justification' },
      { label: 'Continuation', value: 'Submit within 5 business days before the authorization ends, and no more than 30 days before' },
      { label: 'State mandate', value: 'No stand-alone autism statute: mental health parity (RCW 48.44.341, 48.46.291, 48.21.241 until 1/1/2027; RCW 48.43.766 from 1/1/2027) plus the EHB rule WAC 284-43-5642' },
      { label: 'Mandate age', value: 'No ABA-specific age limit in the statutes; treatment limits on mental health services are allowed only if the same limits apply to medical and surgical care' },
      { label: 'Mandate caps', value: 'No ABA-specific hour or dollar cap in the statutes (same parity test)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'Yes: DOH licenses LBAs and LABAs and certifies CBTs (chapter 18.380 RCW); out-of-state BCBAs need a WA license, reciprocity or a 180-day temporary license' },
      { label: 'Fee schedule', value: 'Not public — Regence pays the rates in your provider agreement' },
    ],
    sections: [
      {
        h2: 'BH18 and BH33, applied in Washington',
        body: [
          'BH33 covers the initial ABA assessment when the member has an ASD diagnosis from a qualified treating professional, symptoms that make the member a safety risk or unable to take part in age-appropriate activities, and a recommendation or prescription for ABA from a qualified professional experienced with autism. BH18 covers starting treatment when an individualized treatment plan, prepared by a provider certified to provide ABA (in Washington, a qualified LBAT), describes each targeted behavior with "objective measurements and at least one standardized assessment," the evidence-based interventions, caregiver training, clinical justification for days per week, hours per day and supervision hours, the CPT codes and units requested for a date range, and measurable discharge goals. Initial requests also need the most recent date of service with any previous ABA provider and the reason for discharge.',
          'Continuation requires functional, measurable progress: data from sessions and assessments, gains maintained outside the treatment setting, the same measurement tool used for baseline and current progress, objective measures at least every six months and standardized assessments annually, and a showing that the behaviors still need this intensity. Documentation "should be submitted within five business days prior to the end of a current authorization (and no more than 30 days prior to the end of the authorization period)." ABA for educational, vocational or custodial purposes is not medically necessary. Both policies apply "only … to member contracts that are subject to preauthorization," so check the member’s contract first.',
        ],
        cites: [S.regBH18, S.regBH33],
      },
      {
        h2: 'The Washington mandate: parity, not an autism statute',
        body: [WA_MANDATE_BODY],
        cites: [S.rcw44341, S.rcw46291, S.rcw21241, S.wac5642, S.hb1432, S.rcw43766, S.regBH18],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [WA_LICENSURE_BODY],
        cites: [S.rcw18380, S.wac246805, S.rcw18134, S.bacbLic],
      },
      {
        h2: 'Claims operations in Washington: prompt pay, prior-authorization clocks, appeals',
        body: [WA_CLAIMS_BODY],
        cites: [S.wac431, S.rcw43830, S.rcw43535],
      },
    ],
    collect: [
      { title: 'Contract preauthorization status', desc: 'Whether the member’s Regence contract requires preauthorization for the ABA assessment and treatment.' },
      { title: 'Diagnosis and prescription', desc: 'ASD diagnosis from a qualified professional and a written recommendation, order or prescription for ABA.' },
      { title: 'Standardized assessment', desc: 'At least one standardized assessment (SRS-2, Vineland-3, ABAS-3 and similar); curriculum-based tools alone do not meet it.' },
      { title: 'Prior ABA history', desc: 'Most recent date of service with any previous ABA provider and the reason for discharge.' },
      { title: 'Plan funding type', desc: 'Fully insured Washington plan (state parity law applies) vs. self-funded ERISA.' },
    ],
    sources: [S.regBH18, S.regBH33, S.rcw44341, S.rcw46291, S.rcw21241, S.wac5642, S.hb1432, S.rcw43766, S.rcw18380, S.wac246805, S.rcw18134, S.bacbLic, S.wac431, S.rcw43830, S.rcw43735, S.rcw43535, S.wac51205, S.erisa, S.abaFee],
    deliveryRules: {
      supervision: {
        value: 'BH18 sets no numeric ratio. BCaBAs work under a BCBA or BCBA-D; behavior technicians and RBTs "must be under the ongoing supervision of a BCBA, BCBA-D, or qualified supervisor," and "All supervision must be conducted in accordance with" the BACB’s ethics code and supervision standards; the plan must justify the hours per week of direct face-to-face supervision requested. In Washington, DOH’s CBT rule also applies: two face-to-face contacts a month and direct supervision of at least 5 percent of monthly hours (WAC 246-805-330).',
        status: 'verified',
        cites: [S.regBH18, S.wac246805],
      },
      concurrentBilling: {
        value: 'Not addressed in the BH18 version read (effective 8/1/2025).',
        status: 'unverified',
        cites: [S.regBH18],
        verifyVia: 'Regence behavioral health UM via Availity, or the revised BH18 effective 11/1/2026: ask whether 97153 and 97155 may be billed for the same time.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap. Each request must give the units or hours per period with "Clinical justification for the number of days per week and hours per day," and excessive hours of supervision, assessment, social skills or parent training need extra justification; dosage "must not be based solely on diagnosis, caregiver availability, or scheduling preferences."',
        status: 'verified',
        cites: [S.regBH18],
      },
      noteSignature: {
        value: 'BH18 requires the treatment plan to be documented in the medical record but sets no session-note signature rule.',
        status: 'unverified',
        cites: [S.regBH18],
        verifyVia: 'Regence provider manual and participating agreement (documentation standards).',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'BH18 requires justification for supervision and "observation of the child in their natural setting" and excludes ABA used for educational, vocational or custodial purposes; it sets no other setting rule.',
        status: 'verified',
        cites: [S.regBH18],
      },
      billAsProvider: {
        value: 'BH18 defines the Washington treating provider certified to provide ABA as a qualified Lead Behavior Analysis Therapist (LBAT); it adds a BACB-certified provider as a qualifying alternative only for Idaho. It does not say whose NPI goes on the claim for technician time.',
        status: 'unverified',
        cites: [S.regBH18],
        verifyVia: 'Regence provider services or your Regence agreement: ask whether CBT services are billed under the supervising LBA’s NPI.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'BH18 and BH33 set no age limit.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.regBH18, S.rcw44341],
        verifyVia: 'Availity benefits check: establish fully insured vs. self-funded and the contract’s ABA terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis is stated. The data clocks: objective measurements of treatment goals at least every six months and standardized assessments annually for continuation.',
        status: 'verified',
        cites: [S.regBH18],
      },
      diagnosingProviders: {
        value: 'A qualified treating health care professional "as defined by state law"; BH33 gives as examples a pediatrician, pediatric neurologist, developmental pediatrician or psychologist.',
        status: 'verified',
        cites: [S.regBH33, S.regBH18],
      },
      diagnosticTools: {
        value: 'No diagnostic instrument is named. For the treatment plan, each targeted behavior needs "at least one standardized assessment" (examples: SRS-2, Vineland-3, ABAS-3, SSIS, BRIEF-2, PDDBI); curriculum-based tools such as VB-MAPP, PEAK, ABLLS-R and AFLS guide planning but are not standardized.',
        status: 'verified',
        cites: [S.regBH18],
      },
      referral: {
        value: 'Yes: "ABA therapy must be recommended or prescribed by a qualified treating health care professional experienced in the diagnosis and treatment of ASD," and the request needs the "Written recommendation, clinical order, or prescription for ABA services."',
        status: 'verified',
        cites: [S.regBH18, S.regBH33],
      },
      telehealth: {
        value: 'BH18 and BH33 do not address telehealth. For fully insured Washington plans, RCW 48.43.735 requires same-amount reimbursement for covered, medically necessary services delivered by telemedicine that can be safely provided that way, with the home as an originating site.',
        status: 'unverified',
        cites: [S.regBH18, S.rcw43735],
        verifyVia: 'Regence behavioral health UM via Availity: ask which ABA codes are payable by telehealth for this contract and with which POS and modifier.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: waAuth('Regence') + ' For continuations, Regence wants documentation "within five business days prior to the end of a current authorization (and no more than 30 days prior to the end of the authorization period)."',
        status: 'plan-dependent',
        cites: [S.rcw43830, S.erisa, S.regBH18],
        verifyVia: waAuthVia('Regence'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: waCob('Regence'),
        status: 'plan-dependent',
        cites: [S.wac51205, S.wac0200, S.cfr433, S.tricare, S.champva],
        verifyVia: waCobVia('Regence'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Regence BlueShield cover ABA in Washington?', a: 'Yes, under medical policies BH18 and BH33, which name Washington’s Mental Health Parity Act as the Washington basis for the benefit.' },
      { q: 'Does Regence require prior authorization for ABA in Washington?', a: 'It depends on the member’s contract. BH18 and BH33 apply only to contracts subject to ABA preauthorization; check the member’s preauthorization requirements in Availity.' },
      { q: 'Who can deliver ABA for Regence in Washington?', a: 'BH18 names a qualified Lead Behavior Analysis Therapist (LBAT) as the Washington treating provider, with BCaBAs and technicians under supervision. Washington also requires DOH licensure or certification.' },
      { q: 'When should I send a Regence continuation request?', a: 'Within five business days before the current authorization ends, and no more than 30 days before, with the updated treatment plan and progress data.' },
    ],
  },
};

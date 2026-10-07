import type { PayerConfig, PayerSource } from './types.js';

/* Vermont — researched October 2026 from primary sources only.
   Statutes were read on legislature.vermont.gov (plain curl). Title 8, chapter 107 was
   recodified by Act 11 of 2025, effective September 1, 2025: the autism mandate cited
   everywhere as 8 V.S.A. § 4088i is now 8 V.S.A. § 4082, and telemedicine moved from
   § 4100k to § 4098a. The old section URLs return an empty statute page.
   The Vermont Medicaid fee schedule is an Angular app at vtmedicaid.com/#/feeSchedule;
   its rates were read from the same JSON endpoint the page calls (POST /api/fsCpts/),
   data "updated" 2026-10-02. Vermont has no Medicaid MCOs: DVHA authorizes and pays ABA. */

const S: Record<string, PayerSource> = {
  hcar4229: { title: 'Vermont HCAR 4.229 — Applied Behavior Analysis Services (eff. 8/1/2021, GCR 21-016)', url: 'https://humanservices.vermont.gov/sites/ahsnew/files/documents/MedicaidPolicy/HCARAdopted/4.229-HCAR-Applied-Behavior-Analysis-adopted-rule.pdf' },
  hcar4106: { title: 'Vermont HCAR 4.106 — Early and Periodic Screening, Diagnostic and Treatment (EPSDT) Services (eff. 7/1/2020)', url: 'https://humanservices.vermont.gov/sites/ahsnew/files/documents/MedicaidPolicy/HCARAdopted/Adopted%20Clean%20EPSDT%20HCAR%204.106.pdf' },
  hcar4103: { title: 'Vermont HCAR 4.103 — Prior Authorization (eff. 1/1/2026, GCR 24-105)', url: 'https://humanservices.vermont.gov/sites/ahsnew/files/documents/4.103%20Prior%20Authorization%20Adopted%20Rule.pdf' },
  hcar3101: { title: 'Vermont HCAR 3.101 — Telehealth (eff. 5/1/2023, GCR 22-099)', url: 'https://humanservices.vermont.gov/sites/ahsnew/files/doc_library/3.101%20Telehealth%20Adopted%20Rule.pdf' },
  abaSupp: { title: 'Vermont Medicaid Applied Behavior Analysis Supplement (08-04-2026)', url: 'https://vtmedicaid.com/assets/manuals/ABASupplement.pdf' },
  abaFaq: { title: 'DVHA — ABA Frequently Asked Questions (FAQ), August 2026', url: 'https://dvha.vermont.gov/sites/dvha/files/documents/ABA-FAQ-August-2026.pdf' },
  abaPage: { title: 'DVHA — Applied Behavior Analysis (ABA) Benefit (provider page)', url: 'https://dvha.vermont.gov/providers/applied-behavior-analysis-aba-benefit' },
  coding: { title: 'DVHA — VT Medicaid ABA Coding Updates for dates of service from 1/1/2026 (presentation, 11/10/2025)', url: 'https://dvha.vermont.gov/sites/dvha/files/documents/VT_Medicaid_ABA_Coding_Updates_20251110.pdf' },
  faq1208: { title: 'DVHA — Applied Behavior Analysis January 1, 2026 Billing Changes FAQ (12/8/2025)', url: 'https://dvha.vermont.gov/sites/dvha/files/documents/2025-12-08-AppliedBehaviorAnalysisFAQ.pdf' },
  gcr26058: { title: 'Global Commitment Register GCR 26-058 (Final) — ABA Transition to Fee for Service Payment (eff. 7/1/2026)', url: 'https://humanservices.vermont.gov/sites/ahsnew/files/documents/26-058-F-GCR-ABA-Transition-to-FFS.pdf' },
  groves: { title: 'DVHA testimony to House Health Care — Applied Behavior Analysis (ABA) Changes (Feb. 5, 2026)', url: 'https://legislature.vermont.gov/Documents/2026/Workgroups/House%20Health%20Care/Miscellaneous/W~DaShawn%20Groves~ABA%20Presentation~2-5-2026.pdf' },
  fee: { title: 'Vermont Medicaid Portal — Fee Schedule, CPT codes (online schedule, data updated Oct. 2, 2026)', url: 'https://vtmedicaid.com/#/feeSchedule' },
  gpm: { title: 'Vermont Medicaid General Provider Manual (2026-08-20)', url: 'https://vtmedicaid.com/assets/manuals/GeneralProviderManual.pdf' },
  gbfm: { title: 'Vermont Medicaid General Billing and Forms Manual (2026-10-01)', url: 'https://www.vtmedicaid.com/assets/manuals/GeneralBillingFormsManual.pdf' },
  mandate: { title: '8 V.S.A. § 4082 — Early childhood development disorders (recodified from § 4088i by Act 11 of 2025, eff. 9/1/2025)', url: 'https://legislature.vermont.gov/statutes/section/08/107/04082' },
  defs4011: { title: '8 V.S.A. § 4011 — Health insurance definitions (chapter 107)', url: 'https://legislature.vermont.gov/statutes/section/08/107/04011' },
  tele4098a: { title: '8 V.S.A. § 4098a — Coverage of health care services delivered through telemedicine (formerly § 4100k)', url: 'https://legislature.vermont.gov/statutes/section/08/107/04098a' },
  audio4098b: { title: '8 V.S.A. § 4098b — Coverage of health care services delivered by audio-only telephone', url: 'https://legislature.vermont.gov/statutes/section/08/107/04098b' },
  cob4024: { title: '8 V.S.A. § 4024 — Coordination of insurance coverage with Medicaid', url: 'https://legislature.vermont.gov/statutes/section/08/107/04024' },
  ext4063: { title: '8 V.S.A. § 4063 — Independent external review of health care service decisions', url: 'https://legislature.vermont.gov/statutes/section/08/107/04063' },
  pay9418: { title: '18 V.S.A. § 9418 — Payment for health care services (prompt pay)', url: 'https://legislature.vermont.gov/statutes/section/18/221/09418' },
  pa9418b: { title: '18 V.S.A. § 9418b — Prior authorization (timeframes, deemed approval, duration)', url: 'https://legislature.vermont.gov/statutes/section/18/221/09418b' },
  ch95: { title: '26 V.S.A. chapter 95 — Applied Behavior Analysis (licensure by the Office of Professional Regulation)', url: 'https://legislature.vermont.gov/statutes/fullchapter/26/095' },
  ch56: { title: '26 V.S.A. chapter 56 — Out-of-State Telehealth Licensure & Registration (§§ 3051–3061)', url: 'https://legislature.vermont.gov/statutes/fullchapter/26/056' },
  opr: { title: 'Vermont Office of Professional Regulation — Applied Behavior Analysis', url: 'https://sos.vermont.gov/applied-behavior-analysis/' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Vermont: 2015, VT Office of Professional Regulation)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  gmcb: { title: 'Green Mountain Care Board — Decision and Order, MVP 2025 individual and small group rate filings (Aug. 12, 2024)', url: 'https://ratereview.vermont.gov/sites/dfr/files/documents/2024.08.12%20Decision%20and%20Order%20Docket%20Nos.%20GMCB-005-24rr%20and%20GMCB-006-24rr.pdf' },
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability, payment of claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer in double coverage', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  bcvtPolicy: { title: 'Blue Cross VT Corporate Medical Policy 3.01.VT201 — Applied Behavior Analysis (ABA) (eff. 08/01/2025)', url: 'https://www.bluecrossvt.org/documents/applied-behavior-analysis-aug2025' },
  bcvtBlog: { title: 'Blue Cross VT — Improving Access to Mental Health Services (ABA prior authorization ends July 1, 2025)', url: 'https://www.bluecrossvt.org/health-community/blog/listing/improving-access-mental-health-services' },
  bcvtNehp: { title: 'Blue Cross VT — NEHP/ABNE provider notice: ABA requires prior approval from 9/1/2023 (June 29, 2023)', url: 'https://www.bluecrossvt.org/sites/default/files/2023-06/NEHP%20ABNE%20changes%20for%20MD%20Rx%20and%20ABA%20effective%20September%201%2C%202023%20-%20FINAL%20-%20Publication%206.28.23.pdf' },
  bcvtTele: { title: 'Blue Cross VT Payment Policy CPP_03 — Telemedicine (eff. 01/01/2026)', url: 'https://www.bluecrossvt.org/documents/cpp03-telemedicine-january-2026' },
  bcvtTF: { title: 'Blue Cross VT — Timely Filing Reminder (Sept. 1, 2026; full enforcement from Nov. 1, 2026)', url: 'https://www.bluecrossvt.org/documents/timely-filing-reminder-november-2026' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  aetnaTele: { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA rows by Commercial/Medicare column; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines incl. Vermont Regulatory Addendum (PCOMM-2026-191, September 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA; Vermont not listed)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumNNM: { title: 'Optum National Network Manual (BH02330, effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
};

/* ---- Shared Vermont commercial layer (same facts on every commercial guide) ---- */
const VT_MANDATE_BODY =
  'Vermont’s autism mandate is 8 V.S.A. § 4082, "Early childhood development disorders." It is the old § 4088i under a new number: Act 11 of 2025 recodified Title 8’s health insurance chapter effective September 1, 2025, so plan documents and carrier policies that still cite § 4088i are pointing at the same law. The statute says a health insurance plan "shall provide coverage for the evidence-based diagnosis and treatment of early childhood developmental disorders, including applied behavior analysis supervised by a nationally board-certified behavior analyst, for children, beginning at birth and continuing until the child reaches 21 years of age." The disorders covered are broader than autism: any childhood impairment with functional limits and a DSM or ICD diagnosis, "but does not include a learning disability." The statute sets no dollar or hour cap. Instead, "the amount, frequency, and duration of treatment … shall be based on medical necessity and may be subject to a prior authorization requirement." Cost sharing may not be higher than for any other physical or mental condition. ABA must be covered when "provided or supervised by a licensed health care professional … or who is a nationally board-certified behavior analyst," including in the "natural environment" (a home or child care setting). Plans may review the treatment plan "based on the needs of the covered individual," but for children under eight "not more frequently than once every six months." Two limits matter. A major medical plan does not have to provide benefits beyond the ACA essential health benefits. And the statute leaves IEP and early-intervention obligations in place: a plan "shall not reimburse services provided under 16 V.S.A. § 2959a." On who is bound: chapter 107 defines a health insurer to include an HMO, a nonprofit hospital or medical service corporation and, "to the extent permitted under federal law, any administrator of an insured, self-insured, or publicly funded health care benefit plan." The State of Vermont employee plans are expressly included. Self-funded private employer plans follow ERISA, so check how the plan is funded first.';

const VT_LICENSURE_BODY =
  'Vermont licenses behavior analysts. Under 26 V.S.A. chapter 95, administered by the Office of Professional Regulation, a person may not practice "as an applied behavior analyst or an assistant behavior analyst unless currently licensed." A BCBA can get a license by endorsement on the strength of BACB certification alone (§ 4923). Three rules shape the work. A licensee may practice only "upon, and within the scope of, a referral from a licensed health professional or school official." Diagnosis is outside the scope: behavior analysis "shall not include … diagnosis of mental health or developmental conditions" (§ 4928). And a licensed assistant behavior analyst needs at least "five hours per month of off-site case supervision" by a licensed behavior analyst (§ 4929). Technicians are not licensed. The chapter does exempt school-employed paraprofessionals working "under the close direction" of a licensed supervisor, and people employed by or under contract with the Agency of Human Services. For BCBAs outside Vermont, 26 V.S.A. chapter 56 lists applied behavior analysis among the professions eligible for out-of-state telehealth credentials. A telehealth license covers up to 20 unique Vermont clients over a two-year term. A telehealth registration covers up to 10 clients over 120 days and cannot be renewed. Either one allows telehealth only, never in-person care. Both require a credential "in good standing in any other U.S. jurisdiction." BACB certification is not issued by a jurisdiction, so read literally, a BCBA from a state that does not license behavior analysts needs the full Vermont license by endorsement. Treating a Vermont client by telehealth without one of these credentials is unauthorized practice.';

const VT_CLAIMS_BODY =
  'Vermont’s claims and prior-authorization rules bind health plans, defined to include insurers, HMOs and, "to the extent permitted under federal law, any administrator of an insured or self-insured plan." Under the prompt-pay statute (18 V.S.A. § 9418), a plan must pay a claim, or notify you in writing that it is contested or denied, within 30 days of receipt. It must acknowledge an electronic claim within 24 hours after the start of the next business day. Unpaid uncontested claims accrue interest at 12 percent a year. The prior-authorization statute (18 V.S.A. § 9418b, as amended through 2025) sets the timeline. A completed non-urgent request must be decided "within two business days following receipt," and receipt acknowledged within 24 hours. Urgent requests are decided within 24 hours. A missed deadline means the request "shall be deemed to have been granted." An approval lasts "for the duration of the prescribed or ordered treatment … or one year, whichever is longer," and for ongoing treatment a plan may not require renewal more often than every five years. The mandate separately lets plans review an ABA treatment plan (every six months at most for children under eight), so ask how the carrier squares the two. Plans may not require prior authorization for services ordered by an in-network primary care provider (out-of-network services excepted). Plans must also post their current prior-authorization list publicly. A self-funded ERISA plan follows 29 CFR 2560.503-1 instead: pre-service decisions within 15 days (one 15-day extension), urgent ones within 72 hours, and at least 180 days to appeal a denial. After internal appeals, Vermont’s external review (8 V.S.A. § 4063) is open for medical-necessity and experimental denials involving at least $100, for a $25 fee.';

const VT_TELE_TAIL =
  ' For a fully insured Vermont plan, 8 V.S.A. § 4098a requires coverage of services delivered by telemedicine (live audio-video) "to the same extent" as in person, from any originating site including "the patient’s home," at the same rate for equivalent codes and modifiers (subject to the provider contract). A plan may still limit coverage to services that are "medically necessary and are clinically appropriate for delivery through telemedicine." Self-funded plans are outside the statute.';

const MANDATE_AGE_TAIL =
  ' For fully insured Vermont plans, 8 V.S.A. § 4082 requires ABA coverage from birth until the child reaches 21, with no dollar or hour cap in the statute. Self-funded ERISA plans are outside it, so plan funding type decides whether that binds.';

const MANDATE_REFERRAL_TAIL =
  ' Vermont’s licensure law adds its own gate: a Vermont-licensed behavior analyst may practice only "upon, and within the scope of, a referral from a licensed health professional or school official" (26 V.S.A. § 4928), so keep that referral on file whatever the plan requires.';

const VT_COB_VALUE = (carrier: string) =>
  `No Vermont rule fixing the order of benefits between two parents’ group plans was confirmed this run, so take the order from ${carrier} at benefits verification. A self-funded plan sets its own order. If the child also has Vermont Medicaid, ${carrier} pays first. A Vermont insurer may not consider Medicaid eligibility when paying claims (8 V.S.A. § 4024), and Medicaid is the payer of last resort (42 CFR 433.139). Vermont Medicaid will cover what the primary plan denies only after you have used every level of the primary plan’s appeals and, where the service costs more than $100, a Department of Financial Regulation review. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).`;

export const vermontPayers: Record<string, PayerConfig> = {
  'vermont-medicaid': {
    slug: 'vermont-medicaid',
    cardDesc: 'DVHA authorizes and pays ABA itself (no MCOs), under 21; fee-for-service since 7/1/2026; assessments need no PA; Vermont license required.',
    assessmentPA: {
      value: 'No. The ABA Supplement’s code table and the online fee schedule list 97151, 97152 and 0362T with no prior authorization, each limited to 4 hours every 6 months. GCR 26-058 says loosely that "all ABA services will continue to require prior authorization"; the code-level documents control',
      status: 'verified',
      cites: [S.abaSupp, S.fee, S.gcr26058],
    },
    treatmentPA: {
      value: 'Yes. 97153–97158 and 0373T need DVHA prior authorization on the State of Vermont ABA Prior Authorization Request form, renewed at least every six months with the Comprehensive ABA Assessment and treatment plan',
      status: 'verified',
      cites: [S.abaSupp, S.fee, S.abaFaq],
    },
    dxRequired: {
      value: 'Yes. HCAR 4.229.3 requires a DSM (latest edition) diagnosis of "Autism Spectrum Disorder, early childhood developmental disorder, or any successor diagnosis," plus a prescription for ABA from a listed specialist',
      status: 'verified',
      cites: [S.hcar4229],
    },
    payer: 'Vermont Medicaid (Green Mountain Care / DVHA)',
    state: 'VT', kind: 'state-medicaid',
    pill: 'Payer Guide · Vermont Medicaid',
    h1: 'Vermont Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Vermont Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Vermont Medicaid (Green Mountain Care) covers ABA: DVHA authorizes and pays directly, under 21, fee-for-service since July 2026, published rates, no PA on assessments, the prescription and Comprehensive Assessment rules, three telehealth codes, and Vermont licensure.',
    intro: [
      'Vermont Medicaid covers applied behavior analysis for members under 21. Its rule, HCAR 4.229, lists functional assessment, treatment plan development, direct treatment, program supervision and parent or caregiver training as covered services. The Department of Vermont Health Access (DVHA) runs the benefit directly. Vermont has no Medicaid health plans to contract with. The only managed care entity in Vermont Medicaid is PC Plus, a primary care case management program that DVHA itself administers. ABA prior authorization, enrollment and payment all go through DVHA and its fiscal agent, Gainwell.',
      'For an agency, 2026 changed nearly everything. From January 1, DVHA banned billing 97153 and 97155 for the same time, removed telehealth from all but three codes, and dropped the team-conference codes. From July 1, a fee-for-service schedule replaced the tiered monthly case rate. From October 1, every authorization has needed a new standardized Comprehensive ABA Assessment. Vermont also licenses behavior analysts, and Medicaid pays only Vermont-licensed, Medicaid-enrolled BCBAs and BCaBAs.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, from birth to 21 (HCAR 4.229; 8 V.S.A. § 4082(b)(2) applies the mandate to Medicaid)' },
      { label: 'Structure', value: 'No MCOs: DVHA authorizes and pays fee-for-service. The tiered case rate ended July 1, 2026 (GCR 26-058)' },
      { label: 'Prior auth', value: 'None on 97151, 97152, 0362T (4 hrs per 6 months each); required on 97153–97158 and 0373T, renewed every 6 months' },
      { label: 'FFS rates (per unit)', value: '97151 $65.80 · 97152 $30.00 · 97153 $15.00 · 97154 $7.50 · 97155 $49.35 · 97156/97157 $21.39 · 97158 $16.45 · 0362T $52.00 · 0373T $26.00' },
      { label: 'Who may deliver', value: 'Vermont-licensed, Medicaid-enrolled BCBA (any code) or BCaBA (97152–97154 only); behavior technicians with 40 hrs of training under supervision' },
      { label: 'Licensure', value: 'Yes: OPR licenses applied behavior analysts and assistant behavior analysts (26 V.S.A. ch. 95)' },
      { label: 'Telehealth', value: '97155, 97156, 97157 only, with modifier 95 (since 1/1/2026)' },
      { label: 'Other insurance', value: 'Medicaid pays last; appeal the primary’s denial fully (plus DFR review if over $100) before asking DVHA' },
    ],
    sections: [
      {
        h2: 'Where ABA sits: one state program, no health plans',
        body: [
          'HCAR 4.229 makes a member eligible for ABA if they are actively enrolled in Medicaid, under 21, carry a DSM diagnosis of autism spectrum disorder, early childhood developmental disorder or a successor diagnosis, have a prescription for ABA from a listed specialist, and are medically stable without 24-hour hospital-level monitoring. EPSDT stands behind it: HCAR 4.106 covers all medically necessary services for members under 21 "without regard to service limitations" elsewhere in the rules, with medical necessity decided case by case. The legislature has also applied the commercial mandate to Medicaid: 8 V.S.A. § 4082 "shall apply to Medicaid and any other public health care assistance program."',
          'Vermont has no Medicaid managed care plans to contract with. The General Provider Manual names one managed care entity, PC Plus, a primary care case management program that "DVHA administers." The ABA Supplement sends every ABA authorization and claim to DVHA and Gainwell. None of the DVHA ABA documents read (the Supplement, HCAR 4.229, the 2025 and 2026 FAQs, the coding presentation and GCR 26-058) gives an accountable care organization any role in authorizing or paying ABA. So the intake question is not "which plan" but "is Medicaid primary, or is there other insurance?"',
        ],
        cites: [S.hcar4229, S.hcar4106, S.mandate, S.gpm, S.abaSupp, S.abaPage],
      },
      {
        h2: 'Prior authorization: the prescription, the Comprehensive Assessment, and the six-month cycle',
        body: [
          'Assessment codes need no authorization. 97151, 97152 and 0362T are each limited to 4 hours every 6 months. Every other ABA code needs DVHA approval on the State of Vermont ABA Prior Authorization Request form, "updated and resubmitted at least every six months." Since October 1, 2026 the packet for a new member, and for each current member’s first authorization on or after 10/1/26, is: the PA form, the prescription for ABA, the current diagnostic assessment, DVHA’s standardized Comprehensive ABA Assessment form, and an ABA treatment plan. Later requests need the treatment plan, the PA form and the updated Comprehensive Assessment. The Comprehensive Assessment must be completed in full, with no references to outside documents. Sections E (developmental domains), G (current services) and H (treatment recommendations) must be updated every time. Either the prescriber or the diagnosing clinician signs it, attesting that the child would benefit from the recommended intensity. DVHA says that clinician "does not independently evaluate the child."',
          'One assessment tool is required at least every six months: PEAK, VB-MAPP or the Early Start Denver Model. Other tools can be added but not substituted. The treatment plan must have measurable goals, at least one family or caregiver goal, the list of staff and their credentials, and at least one progress note a month that reflects session duration. Prescriptions must be dated before services start. A new prescription is needed after any change in diagnosis, and for children who started before age 6, again within six months after the 6th birthday. On who may prescribe, HCAR 4.229 lists board-certified or board-eligible psychiatrists, pediatricians and neurologists, doctorate-level licensed psychologists, and developmental-behavioral or neurodevelopmental disabilities pediatricians. The Supplement’s shorter list leaves out general pediatricians, and DVHA has said that is an error it will correct to match the rule. DVHA decides medical necessity with its Medical Necessity Determination Tool, the Comprehensive Assessment score, InterQual and its own guidelines. Under HCAR 4.103 (effective January 1, 2026) it must decide a standard request within seven days and an expedited one within 72 hours, with up to 14 more days if justified.',
        ],
        cites: [S.abaSupp, S.abaFaq, S.hcar4229, S.hcar4103, S.fee],
      },
      {
        h2: 'What does Vermont Medicaid pay for ABA, and how is it billed?',
        body: [
          'Since July 1, 2026, DVHA pays ABA fee-for-service. GCR 26-058 ended the "tiered case rate payment methodology for members with Medicaid as their primary insurance." Until then, Medicaid-only members were paid by a monthly tier keyed to hours (for 2026, from $219 for 2–5.99 hours up to $13,667 for 170 or more), and only members with other insurance were billed per unit. The current online fee schedule pays, per 15-minute unit: 97151 $65.80, 97152 $30.00, 97153 $15.00, 97154 $7.50, 97155 $49.35, 97156 and 97157 $21.39, 97158 $16.45, 0362T $52.00 and 0373T $26.00. It flags prior authorization on every code except 97151, 97152 and 0362T. DVHA told the legislature in February 2026 that it would run an ABA rate study under Act 14 before July 2026, and that "if access issues arise, rates are the appropriate remedy."',
          'Billing rules changed on January 1, 2026. 97153 and 97155 may not be billed for the same child at the same time; DVHA applies the AMA rule that the child’s face-to-face time is what is reported. Team-conference codes 99366 and 99368 were removed from the benefit. The HO, HN, 59, 76, 77 and group-size modifiers were retired. Modifier 95 is now used on the three telehealth codes. BCBAs (provider type T46, specialty S50) are paid the full rate on every ABA code. BCaBAs (T46/S51) may bill only 97152, 97153 and 97154, since 97151, 97155–97158, 0362T and 0373T require a qualified health professional. For 2:1 work (0362T, 0373T) the BCBA must be on site, the time counts as one member hour, and BCaBAs may not bill it. DVHA also found that ABA does not fall under the state’s supervised-billing rules.',
        ],
        cites: [S.gcr26058, S.coding, S.fee, S.faq1208, S.groves, S.abaSupp],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [
          'Vermont Medicaid pays only Vermont-licensed clinicians. HCAR 4.229.4 says BCBAs and BCaBAs "must be licensed in Vermont, working within the scope of their practice, and enrolled in Vermont Medicaid." The Supplement adds a background check for every BCBA, BCaBA and technician: a Vermont criminal record check (or an FBI check for anyone resident under five years) plus the child and adult abuse registries. Technicians need 40 hours of ABA training (at least 3 on ASD and 3 on ethics), first aid, CPR, universal precautions, HIPAA and mandated-reporter training before their first session. Unlicensed master’s-level clinicians still collecting supervised hours are treated as behavior technicians until they are licensed.',
          'Licensure itself comes from the Office of Professional Regulation under 26 V.S.A. chapter 95. A BCBA qualifies for licensure by endorsement on BACB certification. A BCBA licensed in another state who wants to treat a Vermont child only by telehealth may use the chapter 56 telehealth license (up to 20 Vermont clients over two years) or telehealth registration (up to 10 clients over 120 days). Those routes require a license from another U.S. jurisdiction, though. DVHA’s telehealth rule also requires the provider to be "enrolled in Vermont Medicaid," and Medicaid telehealth covers only 97155–97157. In practice, an out-of-state BCBA serving Medicaid members needs a Vermont license and a Vermont Medicaid enrollment.',
        ],
        cites: [S.hcar4229, S.abaSupp, S.faq1208, S.ch95, S.ch56, S.hcar3101, S.coding],
      },
      {
        h2: 'Claims operations: filing limits, appeals, EVV',
        body: [
          'The General Billing and Forms Manual (October 2026) sets the timely filing limits. Medicaid-primary claims must be received within 180 days of the date of service. Claims where other insurance (not Medicare) is primary get 365 days. Waiting for a prior authorization "is not an acceptable reason for late filing." Telemedicine on a CMS-1500 is billed with POS 02, not modifier GT. The ABA coding update adds modifier 95 on 97155, 97156 and 97157. Vermont’s prompt-pay statute (18 V.S.A. § 9418) does not reach DVHA, which it excludes from the definition of a payer. We found no published DVHA clean-claim payment deadline for ABA. Electronic visit verification is not mentioned in the ABA Supplement or the billing manual.',
          'A denied or reduced authorization can be appealed internally within 60 calendar days. The appeal is decided within 30 days, or within 72 hours if it is expedited. To keep services during the appeal, the family must ask within 11 days. After the internal appeal, or if DVHA takes more than 30 days, the family can request a state fair hearing. For services to members 21 or older, a "not covered" denial can be met with an exception request.',
        ],
        cites: [S.gbfm, S.coding, S.pay9418, S.abaSupp],
      },
    ],
    collect: [
      { title: 'Medicaid ID and any other insurance', desc: 'Other coverage is billed first and appealed fully (with a DFR review if over $100) before DVHA will consider it.' },
      { title: 'ABA prescription', desc: 'From a listed specialist (psychiatrist, pediatrician, neurologist, doctorate-level psychologist, or developmental-behavioral pediatrician), dated before services start.' },
      { title: 'Diagnostic assessment', desc: 'Completed before ABA starts by a clinician experienced in diagnosing autism; the diagnosis must be ASD, an early childhood developmental disorder, or a successor diagnosis.' },
      { title: 'Age and birthday', desc: 'Under 21. Children who started before 6 need a new prescription within six months after turning 6.' },
      { title: 'Signer for the Comprehensive Assessment', desc: 'The prescriber or diagnosing clinician must sign DVHA’s Comprehensive ABA Assessment form at every authorization.' },
    ],
    sources: [S.hcar4229, S.hcar4106, S.hcar4103, S.hcar3101, S.abaSupp, S.abaFaq, S.abaPage, S.coding, S.faq1208, S.gcr26058, S.groves, S.fee, S.gpm, S.gbfm, S.mandate, S.ch95, S.ch56, S.bacbLic, S.pay9418, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'DVHA sets no billable supervision ratio. HCAR 4.229.1 defines a BCaBA as "directly supervised by a BCBA" and a behavior technician as practicing "under close, ongoing supervision of a BCBA or BCaBA supervisor." Vermont’s licensure law requires a licensed assistant behavior analyst to have at least five hours a month of off-site case supervision (26 V.S.A. § 4929). Asked how to document supervision now that concurrent billing is barred, DVHA said that "best clinical practice and the national standard are to have 2 hours for every 10 hours of service," but that "standards and best clinical practice are different than billing."',
        status: 'verified',
        cites: [S.hcar4229, S.ch95, S.faq1208],
      },
      concurrentBilling: {
        value: 'Prohibited since January 1, 2026. "97153 and 97155 are prohibited from being billed concurrently, meaning on the same day at the same time," and the rule applies to all billing including fee-for-service. Services "provided simultaneously by more than one ABA provider" are not covered unless medically necessary, prior authorized and in the approved plan. DVHA pays 2:1 (0362T/0373T) only on those terms.',
        status: 'verified',
        cites: [S.coding, S.faq1208, S.abaSupp, S.abaFaq],
      },
      dailyLimits: {
        value: 'The fee schedule’s maximum-units column lists: 97151, 97152, 97156, 97157, 97158 and 0362T, 16; 97153 and 0373T, 32; 97154, 18; 97155, 24. The Supplement caps 97151, 97152 and 0362T at 4 hours every 6 months, and refers the other codes to the MUE. Total authorized units are set per six-month authorization.',
        status: 'verified',
        cites: [S.fee, S.abaSupp, S.abaFaq],
      },
      noteSignature: {
        value: 'Every Vermont Medicaid service must be documented on the day of the encounter or within one week, with two patient identifiers, the rendering provider, and the provider’s signature, printed name and date (General Provider Manual). The ABA treatment plan must include progress notes, at least one a month, "containing detailed clinical information that reflects session duration." Claims must "reflect member time and not provider time."',
        status: 'verified',
        cites: [S.gpm, S.abaSupp],
      },
      placeOfService: {
        value: 'Community settings. ABA under an IEP belongs to the School-Based Services program, billed through the local education agency: "Community services are never provided in schools." HCAR 4.229.6 excludes IDEA school services paid by the Agency of Education, respite, and members in long-term out-of-home placement outside a community setting. Services must be in the least restrictive, most integrated setting.',
        status: 'verified',
        cites: [S.abaFaq, S.hcar4229, S.abaSupp],
      },
      billAsProvider: {
        value: 'Only Vermont-licensed BCBAs and BCaBAs enroll (provider type T46, specialties S50 and S51). BCBAs are paid 100% of the rate on every ABA code; BCaBAs may bill only 97152, 97153 and 97154. DVHA ruled that ABA "doesn’t fall under supervised billing," because technician codes "inherently require supervision." The documents read do not say whose NPI goes in the rendering field for a technician’s 97153 line, so confirm that with your Gainwell provider representative.',
        status: 'verified',
        cites: [S.hcar4229, S.coding, S.fee, S.abaSupp],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. HCAR 4.229.3 requires the member to "be under the age of 21"; DVHA describes the benefit as running "from birth until the age of 21 years."',
        status: 'verified',
        cites: [S.hcar4229, S.abaSupp],
      },
      dxRecency: {
        value: 'No fixed expiry. The diagnostic assessment must be completed before ABA starts, and DVHA "may request a reassessment" when more services are requested. The prescription must predate services and be renewed after any change in diagnosis and within six months after the 6th birthday for children who started earlier. The Comprehensive Assessment and a PEAK, VB-MAPP or ESDM assessment are redone at least every six months.',
        status: 'verified',
        cites: [S.abaSupp, S.abaFaq],
      },
      diagnosingProviders: {
        value: 'The diagnostic assessment must be done "by a clinician experienced in the diagnosis and treatment of autism and working within their scope of practice." The prescription must come from a board-certified or board-eligible psychiatrist, pediatrician or neurologist, a doctorate-level licensed psychologist, or a developmental-behavioral or neurodevelopmental disabilities pediatrician (HCAR 4.229.3). Vermont law keeps diagnosis outside a behavior analyst’s scope (26 V.S.A. § 4928).',
        status: 'verified',
        cites: [S.abaSupp, S.hcar4229, S.abaFaq, S.ch95],
      },
      diagnosticTools: {
        value: 'No diagnostic instrument is named. What DVHA names is the ongoing assessment tool: PEAK, VB-MAPP or the Early Start Denver Model at least every six months (others may be added, not substituted), plus the developmental-domain scoring in Section E of the Comprehensive Assessment.',
        status: 'verified',
        cites: [S.abaSupp, S.abaFaq],
      },
      referral: {
        value: 'Yes: a written prescription for ABA from a listed specialist, dated before services begin (HCAR 4.229.3(d); ABA Supplement). Vermont’s licensure law also lets a licensed behavior analyst practice only on a referral from a licensed health professional or school official (26 V.S.A. § 4928).',
        status: 'verified',
        cites: [S.hcar4229, S.abaSupp, S.ch95],
      },
      telehealth: {
        value: 'Three codes. Since January 1, 2026, telehealth is authorized only for 97155, 97156 and 97157, with modifier 95. 0362T, 0373T, 97151, 97152, 97153, 97154 and 97158 must be delivered in person. A BCBA may supervise by telehealth only while the technician is physically with the child; direct treatment and protocol modification by the BCBA personally must be on site. The billing manual requires POS 02 on telemedicine claims.',
        status: 'verified',
        cites: [S.coding, S.abaSupp, S.faq1208, S.gbfm, S.hcar3101],
      },
      authTurnaround: {
        value: 'HCAR 4.103 (effective January 1, 2026): a standard decision "not more than seven days" from receipt, an expedited one "no later than 72 hours," each extendable by up to 14 days at the provider’s request or when DVHA justifies needing more information (maximum 21 and 17 days). Renewals are due at least every six months. From October 2026, DVHA staggers them to each child’s assessment and treatment-plan schedule.',
        status: 'verified',
        cites: [S.hcar4103, S.abaSupp, S.abaFaq],
      },
      coordinationOfBenefits: {
        value: 'Medicaid pays last. Providers must "pursue and apply all third-party payment resources" first. When the primary plan denies ABA, the provider or family must exhaust every level of the primary plan’s reconsideration and appeal, then seek Department of Financial Regulation review if the service costs over $100. Only then does the request go to DVHA, with the original documentation and every denial. A denial for a non-covered service or exhausted benefit can go to DVHA without appealing. Claims with other insurance primary have 365 days for timely filing.',
        status: 'verified',
        cites: [S.abaSupp, S.gbfm, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Vermont Medicaid cover ABA therapy?', a: 'Yes, for members from birth to 21 with autism spectrum disorder, an early childhood developmental disorder, or a successor diagnosis, and a prescription from a listed specialist (HCAR 4.229). DVHA authorizes and pays it directly.' },
      { q: 'Does Vermont Medicaid use managed care plans for ABA?', a: 'No. Vermont has no Medicaid MCOs. Its only managed care entity is PC Plus, a primary care case management program DVHA runs. ABA prior authorization and payment go to DVHA and its fiscal agent, Gainwell, and no DVHA ABA document gives an ACO a role.' },
      { q: 'What does Vermont Medicaid pay for ABA in 2026?', a: 'Fee-for-service since July 1, 2026, per 15-minute unit: 97151 $65.80, 97152 $30.00, 97153 $15.00, 97154 $7.50, 97155 $49.35, 97156 and 97157 $21.39, 97158 $16.45, 0362T $52.00, 0373T $26.00. The tiered monthly case rate for Medicaid-only members ended June 30, 2026.' },
      { q: 'Does the ABA assessment need prior authorization in Vermont Medicaid?', a: 'No. 97151, 97152 and 0362T need no prior authorization, but each is limited to 4 hours every 6 months. Treatment codes need DVHA approval, renewed at least every six months.' },
      { q: 'Can a BCBA licensed in another state treat a Vermont Medicaid member?', a: 'Only with a Vermont credential and a Vermont Medicaid enrollment. HCAR 4.229 requires BCBAs and BCaBAs to be licensed in Vermont and enrolled. Vermont’s out-of-state telehealth license or registration allows telehealth only, and Medicaid pays telehealth only on 97155–97157, so a full Vermont license (available by endorsement on BCBA certification) is the practical route.' },
      { q: 'Can Vermont Medicaid ABA be done by telehealth?', a: 'Only 97155, 97156 and 97157, with modifier 95, since January 1, 2026. Assessments and technician treatment must be in person. A BCBA can supervise remotely only while the technician is physically with the child.' },
      { q: 'Can 97153 and 97155 be billed at the same time?', a: 'No. Since January 1, 2026, DVHA prohibits billing 97153 and 97155 for the same child at the same time, under every payment method.' },
    ],
  },

  'blue-cross-blue-shield-vermont': {
    slug: 'blue-cross-blue-shield-vermont',
    family: 'bcbs',
    cardDesc: 'Vermont’s home Blue plan: no ABA prior authorization since 2025, annual unit caps per code, telemedicine on all ABA codes with -95.',
    assessmentPA: {
      value: 'No. Policy 3.01.VT201 (eff. 08/01/2025) marks 97151, 97152 and 0362T "Prior Approval NOT Required"',
      status: 'verified',
      cites: [S.bcvtPolicy],
    },
    treatmentPA: {
      value: 'No for Blue Cross VT’s own members since 2025: prior approval was removed from all ABA codes ("Prior approval is not required"). NEHP/ABNE (New England Health Plan / Access Blue New England) members may have different benefits; a 2023 notice made ABA prior approval required for them, so check those cards',
      status: 'verified',
      cites: [S.bcvtPolicy, S.bcvtBlog, S.bcvtNehp],
    },
    dxRequired: {
      value: 'Yes: autism spectrum disorder and/or moderate or severe intellectual disability (F84.0, F84.2, F84.3, F84.5, F84.8, F84.9, F71, F72). Mild intellectual disability without ASD is not covered',
      status: 'verified',
      cites: [S.bcvtPolicy],
    },
    payer: 'Blue Cross and Blue Shield of Vermont',
    state: 'VT', kind: 'commercial',
    pill: 'Payer Guide · Blue Cross VT · Vermont',
    h1: 'Blue Cross and Blue Shield of Vermont ABA coverage: the intake guide.',
    metaTitle: 'Blue Cross VT ABA Coverage: Prior Auth, Unit Caps & Mandate Guide | Carelu',
    metaDescription:
      'How Blue Cross and Blue Shield of Vermont covers ABA: no prior authorization since 2025, annual unit maximums per code, ASD or moderate/severe intellectual disability, telemedicine on every ABA code, Vermont’s 8 V.S.A. § 4082 mandate to age 21, and licensure.',
    intro: [
      'Blue Cross and Blue Shield of Vermont is one of only two carriers selling individual and small-group coverage in Vermont (MVP is the other), and its policy also covers self-funded (ASO) employer groups it administers. Its ABA rules are unusual. It stopped requiring prior authorization for ABA in 2025. Instead, its medical policy caps each ABA code at a number of hours per plan year and treats hours beyond the cap as investigational.',
      'Three layers apply: Blue Cross VT’s Corporate Medical Policy 3.01.VT201, Vermont’s mandate in 8 V.S.A. § 4082, and the plan’s funding type. Blue Cross VT says plainly that "not all groups are required to follow the Vermont legislative mandates," and that self-funded (ASO) employer plans and Federal Employee Program members may have different benefits.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD and moderate or severe intellectual disability (policy 3.01.VT201, eff. 08/01/2025)' },
      { label: 'Prior auth', value: 'None on any ABA code since 2025 (NEHP/ABNE members may differ)' },
      { label: 'State mandate', value: '8 V.S.A. § 4082 (formerly § 4088i; recodified by Act 11 of 2025, eff. 9/1/2025)' },
      { label: 'Mandate age', value: 'Birth until age 21 (the policy itself removed its age-21 limit in 2025)' },
      { label: 'Mandate caps', value: 'No dollar or hour cap in the statute, but the policy sets plan-year maximums per code (e.g. 97153 1,560 hrs, 97155 312 hrs)' },
      { label: 'Exempt from mandate', value: 'Self-funded (ASO) employer plans; FEP members follow the FEP brochure' },
      { label: 'Licensure', value: 'Yes: OPR licenses applied behavior analysts and assistant behavior analysts (26 V.S.A. ch. 95)' },
      { label: 'Fee schedule', value: 'Not published in the ABA or telemedicine policies; ask Blue Cross VT Provider Relations, (888) 449-0443 option 1' },
    ],
    sections: [
      {
        h2: 'The Blue Cross VT ABA policy: no prior approval, but annual caps',
        body: [
          'Blue Cross VT announced that "beginning July 1, 2025, we are eliminating prior authorization requirements for applied behavior analysis." The current Corporate Medical Policy 3.01.VT201 (effective August 1, 2025) puts it in the coding table: every ABA code is "Prior Approval NOT Required." In place of authorization, the policy sets plan-year maximums: 97152 and 0362T, 60 hours (240 units) each; 97153, 1,560 hours (6,240 units); 97155, 312 hours (1,248 units); 0373T, 156 hours (624 units); 97156 and 97157, 52 hours (208 units) each; 97154 and 97158 combined, 72 hours (288 units). 97151 has no stated maximum. "ABA treatment services beyond the maximum/allowable units as outlined within this policy are considered investigational." The policy’s 2025 revision also removed its age-21 limit.',
          'No prior approval does not mean no review. Claims must meet the medical-necessity criteria, and Blue Cross VT "reserves the right to conduct audits" and "recoup all non-compliant payments." To qualify for an assessment, you need a documented attempt to get prior evaluation records. You also need documentation from the primary care provider, psychiatrist or psychologist of the ASD diagnosis using a tool such as CARS, ADOS, ADI-R or GARS (or a psychologist’s report with standardized IQ testing for intellectual disability), a DSM-5 severity rating, and a note of current school supports. Continued treatment is expected to show progress against baseline on graphed targets and a VB-MAPP Transition Scoring Form or an alternative such as AFLS or Essential for Living: at least 20% improvement at five to six months, 40% at eleven to twelve, and 75% from seventeen to eighteen months on. NEHP/ABNE members whose care Blue Cross VT manages were put under ABA prior approval in 2023, and the current policy warns that they "may have different benefits," so check those cards separately.',
        ],
        cites: [S.bcvtBlog, S.bcvtPolicy, S.bcvtNehp],
      },
      {
        h2: 'The Vermont mandate: what it guarantees',
        body: [VT_MANDATE_BODY],
        cites: [S.mandate, S.defs4011],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [VT_LICENSURE_BODY],
        cites: [S.ch95, S.ch56, S.opr, S.bacbLic],
      },
      {
        h2: 'Claims operations: timely filing, payment and telemedicine',
        body: [
          'Blue Cross VT enforces a 180-day filing limit "regardless of date of service" from November 1, 2026. New claims must be accepted into its system within 180 calendar days of the date of service for professional claims, or within 180 days of the primary carrier’s processing when another payer is primary. Late claims "cannot be appealed or billed/collected from the member." Phone calls and emails are no longer proof of timely filing. Payment policy CPP_03 (effective January 1, 2026) lists every ABA code, 97151 through 97158, 0362T and 0373T, as eligible for telemedicine with modifier -95, billed POS 02 or POS 10 (home). Blue Cross VT can contract only with providers "physically located in Vermont or a county contiguous to Vermont." A provider outside that area treating by telemedicine bills the local Blue plan where they are located.',
          VT_CLAIMS_BODY,
        ],
        cites: [S.bcvtTF, S.bcvtTele, S.pay9418, S.pa9418b, S.mandate, S.erisa, S.ext4063],
      },
    ],
    collect: [
      { title: 'Plan type and funding', desc: 'Blue Cross VT fully insured (mandate applies) vs. self-funded ASO, FEP, or NEHP/ABNE, which may have different ABA benefits.' },
      { title: 'Member ID + card photo', desc: 'The prefix tells you whether this is a Blue Cross VT member or an out-of-area Blue (BlueCard) member.' },
      { title: 'Diagnosis documentation', desc: 'ASD with a standardized tool (CARS, ADOS, ADI-R or GARS) and DSM-5 severity, from the PCP, psychiatrist or psychologist; or a psychologist’s report of moderate/severe intellectual disability with IQ testing.' },
      { title: 'Prior records and school supports', desc: 'Records of prior ASD evaluations or treatment (or the attempt to get them) and the child’s current school supports, such as a 1:1 aide.' },
      { title: 'Referral', desc: 'Vermont-licensed behavior analysts practice only on a referral from a licensed health professional or school official.' },
    ],
    sources: [S.bcvtPolicy, S.bcvtBlog, S.bcvtNehp, S.bcvtTele, S.bcvtTF, S.mandate, S.defs4011, S.tele4098a, S.ch95, S.ch56, S.bacbLic, S.pay9418, S.pa9418b, S.ext4063, S.cob4024, S.abaSupp, S.erisa, S.gmcb],
    deliveryRules: {
      supervision: {
        value: 'ABA is "provided by, or … performed under the supervision of" a program manager or lead behavioral therapist who is a BCBA, another state-licensed or certified behavior instructor, or a provider whose legal scope includes behavior analysis. A BCaBA or licensed assistant behavior analyst "may not function as a program manager or lead behavioral therapist and may not provide ABA services without supervision." No numeric ratio is published. Vermont law requires at least five hours a month of off-site case supervision for a licensed assistant behavior analyst.',
        status: 'verified',
        cites: [S.bcvtPolicy, S.ch95],
      },
      concurrentBilling: {
        value: 'Not medically necessary, per policy 3.01.VT201. That covers more than one clinician (program manager and technician, for example) "providing direct (ABA) treatment services to the same member at the same time," ABA delivered at the same time as another therapy such as speech, more than one program manager or agency at a time, and direct treatment to more than one member in a session (social-skills groups excepted).',
        status: 'verified',
        cites: [S.bcvtPolicy],
      },
      dailyLimits: {
        value: 'No daily cap; plan-year maximums per code: 97153, 1,560 hours; 97155, 312; 0373T, 156; 97152 and 0362T, 60 each; 97156 and 97157, 52 each; 97154 and 97158 combined, 72. Units beyond these are treated as investigational.',
        status: 'verified',
        cites: [S.bcvtPolicy],
      },
      noteSignature: {
        value: 'Policy 3.01.VT201 requires treatment protocols, data collected for each goal and documented progress, but does not say who signs a session note or by when.',
        status: 'unverified',
        cites: [S.bcvtPolicy],
        verifyVia: 'Blue Cross VT Provider Relations, (888) 449-0443 option 1, or providerrelations@bcbsvt.com: ask for the documentation standard in the provider agreement or provider manual.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Home or office. Policy hours "will be for time of treatment outside of the school setting (i.e., home or office setting)," with the school responsible for ABA by an aide during the school day. Services that belong in an IEP are excluded. Telemedicine is billed POS 02 or POS 10.',
        status: 'verified',
        cites: [S.bcvtPolicy, S.bcvtTele],
      },
      billAsProvider: {
        value: 'The policy’s eligible providers are "qualified healthcare professionals practicing within the scope of their license(s)." Assessment components may be done by a BCaBA but "must be reviewed by" a BCBA. Blue Cross VT contracts only with providers physically located in Vermont or a contiguous county; others bill their local Blue plan. Whose NPI goes on a technician’s line is not stated.',
        status: 'verified',
        cites: [S.bcvtPolicy, S.bcvtTele],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Policy 3.01.VT201 removed its age-21 limit in its 2025 revision, so the policy sets no age cap. Self-funded and FEP plans follow their own documents.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.bcvtPolicy, S.mandate],
        verifyVia: 'Blue Cross VT customer service on the card: confirm the group is fully insured (not ASO or FEP) and that the plan has no age term of its own.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis. Continued coverage is tied to measured progress against baseline (20%, 40% and 75% improvement at roughly 6, 12 and 18 months) on graphed targets and a VB-MAPP Transition Scoring Form or an alternative.',
        status: 'verified',
        cites: [S.bcvtPolicy],
      },
      diagnosingProviders: {
        value: 'Documentation from "the primary care provider, psychiatrist, or psychologist" of the ASD diagnosis. Intellectual disability needs an official psychologist’s report with standardized intelligence testing.',
        status: 'verified',
        cites: [S.bcvtPolicy],
      },
      diagnosticTools: {
        value: 'ASD documented with a tool such as the Childhood Autism Rating Scale, the Autism Diagnostic Observation Schedule, the Autism Diagnostic Interview-Revised and/or the Gilliam Autism Rating Scale, with DSM-5 severity. Progress tracked with a VB-MAPP Transition Scoring Form or an alternative such as AFLS or Essential for Living.',
        status: 'verified',
        cites: [S.bcvtPolicy],
      },
      referral: {
        value: 'Blue Cross VT requires no prior approval and the policy names no separate referral, but the assessment criteria need diagnosis documentation from the PCP, psychiatrist or psychologist.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.bcvtPolicy, S.ch95],
      },
      telehealth: {
        value: 'All ABA codes. CPP_03 (eff. 01/01/2026) lists 97151–97158, 0362T and 0373T as telemedicine-eligible with modifier -95, billed POS 02 (not at home) or POS 10 (home), for providers located in Vermont or a contiguous county (or temporarily out of state for up to six months).' + VT_TELE_TAIL,
        status: 'verified',
        cites: [S.bcvtTele, S.tele4098a],
      },
      authTurnaround: {
        value: 'Not applicable for Blue Cross VT’s own members: ABA needs no prior approval. Where a plan does require it (NEHP/ABNE, for example), 18 V.S.A. § 9418b requires a decision on a complete non-urgent request within two business days and an urgent one within 24 hours, or the request is deemed granted. Self-funded ERISA plans follow 29 CFR 2560.503-1 (15 days, urgent 72 hours).',
        status: 'plan-dependent',
        cites: [S.bcvtPolicy, S.bcvtNehp, S.pa9418b, S.erisa],
        verifyVia: 'Blue Cross VT customer service: confirm whether the member’s plan (NEHP/ABNE, ASO or FEP) adds an ABA authorization step.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: VT_COB_VALUE('Blue Cross VT'),
        status: 'plan-dependent',
        cites: [S.cob4024, S.cfr433, S.abaSupp, S.tricare, S.champva],
        verifyVia: 'Ask Blue Cross VT for the coordination-of-benefits order and send its Coordination of Benefits Questionnaire when other coverage exists; record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Blue Cross VT require prior authorization for ABA?', a: 'No. Blue Cross VT removed ABA prior authorization in 2025; policy 3.01.VT201 (eff. 08/01/2025) marks every ABA code "Prior Approval NOT Required." NEHP/ABNE, FEP and self-funded groups may have different rules.' },
      { q: 'Is there a cap on ABA hours with Blue Cross VT?', a: 'Yes, per plan year by code: for example 1,560 hours of 97153 and 312 hours of 97155. Hours beyond the policy maximum are treated as investigational. The Vermont mandate itself sets no hour or dollar cap; amounts are to follow medical necessity.' },
      { q: 'Does Blue Cross VT cover ABA by telehealth?', a: 'Yes. Its telemedicine policy CPP_03 lists every ABA code, including 97151 and 97153, with modifier -95, billed POS 02 or POS 10. The provider must be located in Vermont or a contiguous county to bill Blue Cross VT directly.' },
      { q: 'Does Blue Cross VT cover ABA for intellectual disability without autism?', a: 'For moderate or severe intellectual disability, yes (F71, F72), documented by a psychologist’s report with standardized IQ testing. Mild intellectual disability without ASD is not covered.' },
      { q: 'What is Blue Cross VT’s timely filing limit?', a: '180 calendar days from the date of service for professional claims (or from the primary carrier’s processing date when another plan is primary), fully enforced from November 1, 2026. Late claims cannot be billed to the member.' },
      { q: 'Does a BCBA need a Vermont license?', a: 'Yes, to practice ABA in Vermont, including by telehealth. A BCBA can be licensed by endorsement on BACB certification, and clinicians licensed in another state can use Vermont’s telehealth license or registration for limited caseloads.' },
    ],
  },

  'aetna-vermont': {
    slug: 'aetna-vermont',
    family: 'aetna',
    cardDesc: 'Aetna ABA guide + CPB 0648 + Vermont’s § 4082 mandate; Aetna sells no Vermont individual or small-group plan, so check funding.',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: precertification through Availity or the number on the card; the reauthorization interval is set by the plan (the guide re-evaluates progress every six months)',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): ask whether the group carries ABA precertification and what reauthorization interval it uses.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM ASD diagnosis (ICD-10 F84.0, F84.3–F84.9) by an appropriate provider',
      status: 'verified',
      cites: [S.aetnaGuide],
    },
    payer: 'Aetna in Vermont',
    state: 'VT', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Vermont',
    h1: 'Aetna ABA coverage in Vermont: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Vermont: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Vermont families: national medical necessity criteria, precertification on every ABA code, Vermont’s 8 V.S.A. § 4082 mandate (birth to 21, no dollar cap), Vermont licensure, prompt-pay and PA timelines, and what intake should verify.',
    intro: [
      'Aetna is not one of Vermont’s individual or small-group carriers: the Green Mountain Care Board describes MVP as "one of two carriers offering individual and small group health insurance coverage in Vermont," alongside Blue Cross VT. So an Aetna card in Vermont is almost always a larger employer’s plan, which is often self-funded. That makes the funding question decisive: Vermont’s mandate binds a fully insured plan, while a self-funded plan follows its own document.',
      'This guide stacks the layers: Aetna’s national ABA criteria (which carry no Vermont exhibit), Vermont’s mandate in 8 V.S.A. § 4082, and Vermont’s claims, prior-authorization and licensure laws.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s ABA medical necessity guide' },
      { label: 'State mandate', value: '8 V.S.A. § 4082 (formerly § 4088i; recodified by Act 11 of 2025, eff. 9/1/2025)' },
      { label: 'Mandate age', value: 'Birth until age 21' },
      { label: 'Mandate caps', value: 'No dollar or hour cap; amount, frequency and duration by medical necessity, PA allowed; need not exceed ACA essential health benefits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (the statute reaches self-insured administrators only "to the extent permitted under federal law")' },
      { label: 'Licensure', value: 'Yes: OPR licenses applied behavior analysts and assistant behavior analysts (26 V.S.A. ch. 95)' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Vermont',
        body: [
          'Aetna’s ABA medical necessity guide (©2026) requires a DSM ASD diagnosis (F84.0, F84.3–F84.9) from an appropriate provider. It also requires functional impairment on a standardized scale from the past 12 months, at least one standard deviation below the mean or a significant risk of harm, plus a time-limited treatment plan with measurable targets and titration and discharge planning. Its only state exhibit is Maryland, so the national criteria apply unchanged in Vermont. The behavioral health precertification list names all ten ABA codes, 97151 through 97158, 0362T and 0373T, and most requests go through Availity. CPB 0648 governs the autism evaluation itself.',
        ],
        cites: [S.aetnaGuide, S.aetnaPrecert, S.aetnaCPB648, S.gmcb],
      },
      {
        h2: 'The Vermont mandate: what it guarantees',
        body: [VT_MANDATE_BODY],
        cites: [S.mandate, S.defs4011],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [VT_LICENSURE_BODY],
        cites: [S.ch95, S.ch56, S.opr, S.bacbLic],
      },
      {
        h2: 'Claims operations: prompt pay, prior-authorization clocks, appeals',
        body: [VT_CLAIMS_BODY],
        cites: [S.pay9418, S.pa9418b, S.mandate, S.erisa, S.ext4063],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA?',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) treats rates as a contract matter. Where a provider has both an intermediary contract and a direct agreement, "your direct Aetna rates will apply unless we specifically notify you otherwise." When a member’s benefits are exhausted, a provider "cannot charge them more than the contracted rate." Get rates from your Aetna agreement or Aetna provider services. For a public benchmark, Vermont Medicaid’s fee-for-service schedule pays 97153 at $15.00 and 97155 at $49.35 per 15 minutes; commercial contracts are negotiated separately.',
        ],
        cites: [S.aetnaOM, S.fee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (8 V.S.A. § 4082 applies) vs. self-funded ERISA (plan document governs). Most Aetna cards in Vermont are employer plans, so ask.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'DSM ASD diagnosis, diagnosing provider and credentials, evaluation date. Aetna’s policy is ASD-only.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3, ABAS, VB-MAPP or ABLLS).' },
      { title: 'Referral', desc: 'Vermont-licensed behavior analysts practice only on a referral from a licensed health professional or school official.' },
    ],
    sources: [S.aetnaGuide, S.aetnaCPB648, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.aetnaTele, S.mandate, S.defs4011, S.tele4098a, S.ch95, S.ch56, S.bacbLic, S.pay9418, S.pa9418b, S.ext4063, S.cob4024, S.erisa, S.gmcb, S.fee],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s network participation criteria (5/26) require ABA to be provided directly or supervised by state-licensed or BACB-certified BCBAs. A paraprofessional needs at least "one hour of face-to-face supervision" by a BCBA or licensed psychologist "for each 10 hours of applied behavior analysis," and the supervisor must be "onsite with the child at least one hour a month." "All BCBAs, BCaBAs and paraprofessionals must meet state requirements." In Vermont that means a Vermont license for the behavior analyst and five hours a month of off-site case supervision for a licensed assistant (26 V.S.A. § 4929).',
        status: 'verified',
        cites: [S.aetnaNPC, S.aetnaGuide, S.ch95],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA documents (the medical necessity guide, CPB 0648, the precertification list).',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap is published. Hours follow the guide’s severity assessment, with typical intensities of 10–25 hours a week for comprehensive and 1–20 for focused programs (typical, not caps), plus 1–2 hours of protocol modification per 10 hours of treatment. Progress is re-evaluated every six months.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      noteSignature: {
        value: 'Not addressed. Aetna’s guide sets treatment-plan content requirements but not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'The participating-provider agreement and Aetna Behavioral Health documentation standards, via Aetna provider services.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Aetna’s guide is setting-neutral for outpatient ABA and asks for coordination with existing providers and the school district. Vermont’s mandate requires coverage in the "natural environment" (home or child care) and leaves IEP obligations with the schools.',
        status: 'verified',
        cites: [S.aetnaGuide, S.mandate],
      },
      billAsProvider: {
        value: 'Services "must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists" where in scope, unless mandates, plan documents or contracts say otherwise. Vermont licenses behavior analysts, so the Vermont-licensed behavior analyst is the billing credential.',
        status: 'verified',
        cites: [S.aetnaGuide, S.ch95],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s guide sets no age cap; it gives typical ages (0–7 for comprehensive programs, all ages for focused).' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.mandate],
        verifyVia: 'Live benefits verification on the member ID: establish fully insured vs. self-funded ERISA, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the ASD diagnosis itself, but medical necessity requires functional impairment on a standardized scale administered in the past 12 months (at least one standard deviation below the mean) or a significant risk of harm.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'An "appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)." In Vermont a behavior analyst cannot diagnose (26 V.S.A. § 4928).',
        status: 'verified',
        cites: [S.aetnaGuide, S.ch95],
      },
      diagnosticTools: {
        value: 'CPB 0648 names the ADI-R, ADOS-2, CARS-2 and Asperger Syndrome Diagnostic Scale. The ABA guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s ABA documents require no physician referral; they require precertification of all ten ABA codes.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.ch95],
      },
      telehealth: {
        value: 'Aetna’s Telemedicine and Direct Patient Contact Payment Policy checks these ABA codes in its Commercial column: 97151, 97153, 97155, 97156 and 97157, with modifier GT, 95 or FR. 97152, 97154, 97158, 0362T and 0373T are checked for Medicare only. The posted policy shows a last review of June 2021, so treat the list as perishable. Aetna’s provider manual (6/26) says Aetna Behavioral Health offers telehealth to all commercial fully insured members and to self-insured sponsors "unless those self-insured plan sponsors opt out," and providers must hold "the proper licensure based on state requirements."' + VT_TELE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaTele, S.aetnaOM, S.tele4098a],
        verifyVia: 'Availity or the precertification line on the card: ask whether the plan is fully insured in Vermont or self-funded (and opted out of telehealth), and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Depends on funding. A plan subject to 18 V.S.A. § 9418b must decide a completed non-urgent request within two business days (acknowledging receipt within 24 hours) and an urgent one within 24 hours, or the request is deemed granted; approvals last for the treatment or one year, whichever is longer. Self-funded ERISA plans follow 29 CFR 2560.503-1: pre-service decisions within 15 days (one 15-day extension), urgent within 72 hours. Aetna publishes no Vermont-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.pa9418b, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured in Vermont or self-funded (ERISA), and what reauthorization lead time Aetna expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: VT_COB_VALUE('Aetna'),
        status: 'plan-dependent',
        cites: [S.cob4024, S.cfr433, S.abaSupp, S.tricare, S.champva],
        verifyVia: 'Ask Aetna at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Vermont?', a: 'Yes, under its national criteria for ASD. Fully insured plans must also meet Vermont’s 8 V.S.A. § 4082 mandate (birth to 21, no dollar cap). Self-funded employer plans follow their own documents.' },
      { q: 'Does Aetna sell health plans in Vermont?', a: 'Not in the individual or small-group market: Vermont regulators describe Blue Cross VT and MVP as the two carriers offering that coverage. Aetna cards in Vermont come from larger employer plans, so confirm whether the plan is fully insured or self-funded.' },
      { q: 'Does the Aetna ABA assessment need prior authorization in Vermont?', a: 'Yes. 97151 and the other nine ABA codes are on Aetna’s behavioral health precertification list.' },
      { q: 'What does Aetna pay for ABA in Vermont?', a: 'Aetna publishes no ABA rates; payment follows your participation agreement. The public benchmark is Vermont Medicaid’s fee schedule (97153 $15.00 and 97155 $49.35 per 15 minutes).' },
      { q: 'Does Aetna require RBT certification for technicians?', a: 'Aetna’s network criteria do not require the RBT credential by name. Technicians may be paraprofessionals supervised by a BCBA or licensed provider, at least 1 hour of face-to-face supervision per 10 hours of ABA, with the supervisor onsite at least 1 hour a month, and they must meet state requirements.' },
    ],
  },

  'cigna-vermont': {
    slug: 'cigna-vermont',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + Vermont’s § 4082 mandate; no PA on assessment codes; Evernorth has a Vermont regulatory addendum.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the plan covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: treatment is authorized on EN0499 criteria with the completed assessment and treatment plan',
      status: 'verified',
      cites: [S.en0499, S.cignaARG],
    },
    dxRequired: {
      value: 'Yes: ASD under DSM-5-TR criteria, made by an independently licensed professional; provisional, rule-out or school-only identifications do not count',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Vermont',
    state: 'VT', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Vermont',
    h1: 'Cigna / Evernorth ABA coverage in Vermont: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Vermont: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Vermont families: national policy EN0499, no PA on assessments, Vermont’s 8 V.S.A. § 4082 mandate (birth to 21, no dollar cap), Vermont licensure, Evernorth’s Vermont addendum, and what intake should verify.',
    intro: [
      'Cigna is not one of Vermont’s individual or small-group carriers (regulators name Blue Cross VT and MVP), so a Cigna card in Vermont is an employer plan, and many Cigna employer plans are self-funded. Check funding first: Vermont’s mandate binds fully insured plans, and Evernorth’s own Vermont Regulatory Addendum says its provisions "do not apply with regard to Covered Services rendered to Participants covered under self-funded plans."',
      'The layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, Vermont’s mandate in 8 V.S.A. § 4082, and Vermont’s claims and licensure laws.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499 (eff. 5/15/2026)' },
      { label: 'State mandate', value: '8 V.S.A. § 4082 (formerly § 4088i; recodified by Act 11 of 2025, eff. 9/1/2025)' },
      { label: 'Mandate age', value: 'Birth until age 21' },
      { label: 'Mandate caps', value: 'No dollar or hour cap; amount, frequency and duration by medical necessity, PA allowed; need not exceed ACA essential health benefits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (the statute reaches self-insured administrators only "to the extent permitted under federal law")' },
      { label: 'Licensure', value: 'Yes: OPR licenses applied behavior analysts and assistant behavior analysts (26 V.S.A. ch. 95)' },
      { label: 'Fee schedule', value: 'Not public — your ABA fee schedule is Exhibit A of your Evernorth Provider Agreement; fee questions to Evernorth Provider Services, 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Vermont',
        body: [
          'Cigna covers ABA through Evernorth Behavioral Health under EN0499 (effective May 15, 2026). Per the autism resource guide, prior authorization is no longer required for assessment codes 97151, 97152 and 0362T with an autism diagnosis, as long as the provider is independently licensed or a BCBA and the plan covers ABA. Treatment is authorized against EN0499 with the assessment and treatment plan. A full-text check of EN0499 and the resource guide found no mention of Vermont, so the national criteria apply. The Vermont-specific material is contractual. Evernorth’s Administrative Guidelines carry a Vermont Regulatory Addendum, which limits retrospective denials of paid claims to 12 months (with exceptions, after 30 days’ written notice) and recognizes Vermont’s web-based prior-approval rule. It also notes that MVP members in Vermont do not use the Evernorth network.',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin, S.gmcb],
      },
      {
        h2: 'The Vermont mandate: what it guarantees',
        body: [VT_MANDATE_BODY],
        cites: [S.mandate, S.defs4011],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [VT_LICENSURE_BODY],
        cites: [S.ch95, S.ch56, S.opr, S.bacbLic],
      },
      {
        h2: 'Claims operations: prompt pay, prior-authorization clocks, appeals',
        body: [VT_CLAIMS_BODY],
        cites: [S.pay9418, S.pa9418b, S.mandate, S.erisa, S.ext4063],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth’s Administrative Guidelines (September 2026) say the Provider Agreement terms "include the reimbursement rates applicable to covered services." They also tell ABA providers: "For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement." Virtual behavioral services carry modifier 95, which Evernorth says "will not change the reimbursement." Non-credentialed technicians are paid only through the supervising provider’s claim. For a public benchmark, Vermont Medicaid’s fee-for-service schedule pays 97153 at $15.00 and 97155 at $49.35 per 15 minutes.',
        ],
        cites: [S.ebhAdmin, S.cignaARG, S.fee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (8 V.S.A. § 4082 applies) vs. self-funded ERISA (plan document governs). Most Cigna cards in Vermont are employer plans.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, plus the date of the most recent diagnosis. Provisional or rule-out diagnoses don’t count.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Referral', desc: 'Vermont-licensed behavior analysts practice only on a referral from a licensed health professional or school official.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.mandate, S.defs4011, S.tele4098a, S.ch95, S.ch56, S.bacbLic, S.pay9418, S.pa9418b, S.ext4063, S.cob4024, S.erisa, S.gmcb, S.fee],
    deliveryRules: {
      supervision: {
        value: 'Case supervision by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health professional with ABA training, at one to two hours per ten hours of direct treatment, and at least one to two hours a week when direct treatment is 10 hours a week or less. Vermont law adds five hours a month of off-site case supervision for a licensed assistant behavior analyst.',
        status: 'verified',
        cites: [S.en0499, S.ch95],
      },
      concurrentBilling: {
        value: 'Only one provider can bill for a unit of time, except 97153, 97154 and 97155 during direct supervision, when the BCBA or QHP directs the technician and both are face-to-face with the patient at the same time.',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap is published. All ABA codes bill in 15-minute units and only with 97151–97158, 0362T and 0373T; intensity must reflect severity, goals and response to treatment.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499],
      },
      noteSignature: {
        value: 'Each service needs its own record including the "name, credential (if applicable), and signature of ABA provider who rendered the service," along with dates, times, location, the intervention and who was present.',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'EN0499 has goals and data reported by setting (home, clinic, school, community). Primarily educational or vocational services are not covered. Vermont’s mandate requires coverage in the natural environment (home or child care) and leaves IEP obligations with the schools.',
        status: 'verified',
        cites: [S.en0499, S.mandate],
      },
      billAsProvider: {
        value: 'Evernorth "does not credential nonlicensed/noncertified staff"; their services are billed under the supervising provider. On a CMS-1500, list "only a BCBA or other licensed provider in box 33." Electronic claims use payer ID 62308.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; it says access to focused intervention "should not be restricted by age."' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.mandate],
        verifyVia: 'Live benefits verification, or Evernorth Provider Services at 800.926.2273: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs the date it was most recently made. The clocks run on data: the standardized instrument within 60 days before treatment, baseline data within 60 days, and current data within 60 days of a continued-treatment request.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional "licensed to practice independently and whose licensure board considers diagnostics" within scope, applying DSM-5-TR criteria. In Vermont a behavior analyst cannot diagnose (26 V.S.A. § 4928).',
        status: 'verified',
        cites: [S.en0499, S.ch95],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated, but it must be reliable, valid and standardized, completed in full, and the current edition (the policy’s example: Vineland-3, not Vineland-II), with dates and standardized scores reported.',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'Cigna’s ABA documents require no referral or prescription; assessments need no PA with an autism diagnosis when the provider is independently licensed or a BCBA.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ch95],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" per the autism resource guide, billed with modifier 95, which "will not change the reimbursement."' + VT_TELE_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.ebhAdmin, S.tele4098a],
      },
      authTurnaround: {
        value: 'Depends on funding. A plan subject to 18 V.S.A. § 9418b must decide a completed non-urgent request within two business days and an urgent one within 24 hours, or the request is deemed granted. Self-funded ERISA plans follow 29 CFR 2560.503-1 (15 days, one 15-day extension; urgent 72 hours). Evernorth publishes no Vermont-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.pa9418b, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured in Vermont or self-funded (ERISA), and what reauthorization lead time Evernorth expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: VT_COB_VALUE('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.cob4024, S.cfr433, S.abaSupp, S.tricare, S.champva],
        verifyVia: 'Ask Cigna/Evernorth at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Vermont?', a: 'Yes, under national policy EN0499 for ASD. Fully insured plans must also meet Vermont’s 8 V.S.A. § 4082 mandate (birth to 21, no dollar cap). Self-funded employer plans follow their own documents.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in Vermont?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'Can ABA be delivered by telehealth with Cigna in Vermont?', a: 'Yes. Cigna’s autism resource guide says all ABA CPT codes are covered telehealth services; bill modifier 95. The clinician still needs a Vermont license, telehealth license or telehealth registration.' },
      { q: 'What does Cigna pay for ABA in Vermont?', a: 'Cigna publishes no ABA rates. Evernorth puts your fee schedule in Exhibit A of your Provider Agreement; call Evernorth Provider Services (800.926.2273) with fee questions. Vermont Medicaid’s schedule (97153 $15.00 per 15 minutes) is the public benchmark.' },
    ],
  },

  'unitedhealthcare-vermont': {
    slug: 'unitedhealthcare-vermont',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + Vermont’s § 4082 mandate; no Vermont state supplement; Vermont has no Medicaid MCOs.',
    assessmentPA: {
      value: 'Required: the ABA Supplemental Clinical Criteria say prior authorization is required for ABA "unless otherwise specified or mandated by contract or law"',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required: treatment authorization under the same criteria; the review interval is set per authorization',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express or the behavioral health number on the card: ask what review interval will be set on this member’s ABA treatment authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5-TR ASD (or another diagnosis required by governing law) from a state-licensed clinician, confirmed with at least one clinically validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Vermont',
    state: 'VT', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Vermont',
    h1: 'UnitedHealthcare / Optum ABA coverage in Vermont: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Vermont: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Vermont families: Optum’s ABA criteria and prior authorization, telehealth limits, Vermont’s 8 V.S.A. § 4082 mandate (birth to 21, no dollar cap), Vermont licensure, and what intake should verify.',
    intro: [
      'UnitedHealthcare is not one of Vermont’s individual or small-group carriers (regulators name Blue Cross VT and MVP), and Vermont has no Medicaid health plans at all. So a UnitedHealthcare card in Vermont is an employer plan (often national and self-funded) or Medicare. Funding decides whether Vermont’s mandate applies.',
      'The layers: Optum Behavioral Health’s national ABA criteria, Vermont’s mandate in 8 V.S.A. § 4082, and Vermont’s claims and licensure laws.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: '8 V.S.A. § 4082 (formerly § 4088i; recodified by Act 11 of 2025, eff. 9/1/2025)' },
      { label: 'Mandate age', value: 'Birth until age 21' },
      { label: 'Mandate caps', value: 'No dollar or hour cap; amount, frequency and duration by medical necessity, PA allowed; need not exceed ACA essential health benefits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (the statute reaches self-insured administrators only "to the extent permitted under federal law")' },
      { label: 'Licensure', value: 'Yes: OPR licenses applied behavior analysts and assistant behavior analysts (26 V.S.A. ch. 95)' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Vermont',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026). Prior authorization is required "unless otherwise specified or mandated by contract or law." The diagnosis must come from a state-licensed clinician using at least one validated tool. Direct case supervision runs 1–2 hours per 10 hours of treatment. Optum’s ABA State Mandates supplement lists states such as Arizona, California, Connecticut, Florida, Massachusetts, New Jersey, New York, Ohio, Pennsylvania and Virginia, but not Vermont, so no Vermont-specific criteria modify the commercial policy. Optum’s National Network Manual (effective Sept. 1, 2026) carries a set of Vermont Regulatory Requirements for network providers.',
        ],
        cites: [S.optumSCC, S.optumSM, S.optumNNM, S.gmcb],
      },
      {
        h2: 'The Vermont mandate: what it guarantees',
        body: [VT_MANDATE_BODY],
        cites: [S.mandate, S.defs4011],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [VT_LICENSURE_BODY],
        cites: [S.ch95, S.ch56, S.opr, S.bacbLic],
      },
      {
        h2: 'Claims operations: prompt pay, prior-authorization clocks, appeals',
        body: [VT_CLAIMS_BODY],
        cites: [S.pay9418, S.pa9418b, S.mandate, S.erisa, S.ext4063],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA?',
        body: [
          'UnitedHealthcare publishes no ABA rate table; Optum pays from the contract. Its National Network Manual defines the "Fee Maximum" as "the maximum amount a participating provider may be paid for a specific health care service provided to a member," and says "Reimbursement to clinicians is based upon licensure rather than degree." Optum’s commercial ABA Reimbursement Policy (2022RP501A, updated June 2026) puts the credential on every line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a doctoral-level provider. It notes that state requirements "may supplement, modify or supersede" the policy. Ask Optum network management for your rate sheet. For a public benchmark, Vermont Medicaid’s fee-for-service schedule pays 97153 at $15.00 and 97155 at $49.35 per 15 minutes.',
        ],
        cites: [S.optumNNM, S.optumReimb, S.fee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (8 V.S.A. § 4082 applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification on Provider Express.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD and severity level, confirmed with a validated tool (ADI-R, ADOS-2 and others).' },
      { title: 'Referral', desc: 'Vermont-licensed behavior analysts practice only on a referral from a licensed health professional or school official.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumNNM, S.optumTele, S.optumReimb, S.mandate, S.defs4011, S.tele4098a, S.ch95, S.ch56, S.bacbLic, S.pay9418, S.pa9418b, S.ext4063, S.cob4024, S.erisa, S.gmcb, S.fee],
    deliveryRules: {
      supervision: {
        value: '"Consistent with CASP standards of care, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week." Technicians work under a BCBA or licensed behavioral health clinician and "should be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate"; Optum does not recommend parents serving as their own child’s RBT. Vermont law adds five hours a month of off-site case supervision for a licensed assistant behavior analyst.',
        status: 'verified',
        cites: [S.optumSCC, S.ch95],
      },
      concurrentBilling: {
        value: 'Not addressed. The SCC define direct case supervision as happening during direct treatment but do not state the billing consequence.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum Provider Express National Network Manual and the participating-provider agreement, or a written coding determination from Optum.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap. Hours must be justified by documented clinical need. At continued-service review, use of authorized hours below 80% over a two-week period must be explained with barriers and a plan.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      noteSignature: {
        value: 'Not addressed. The SCC set what must be documented for coverage, not who signs a session note or when.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum Provider Express National Network Manual (documentation standards) and the participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Not covered: services that are not ABA, "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA; school coordination is allowed. Vermont’s mandate requires coverage in the natural environment (home or child care).',
        status: 'verified',
        cites: [S.optumSCC, S.mandate],
      },
      billAsProvider: {
        value: 'A credentialed ABA provider is a master’s- or doctoral-level BCBA or a licensed behavioral health clinician credentialed for ABA; a BCaBA or non-licensed staff member works under that provider’s direct supervision. Optum’s commercial reimbursement policy adds the credential modifier (HM RBT, HN BCaBA, HO, HP) to each line. In Vermont the behavior analyst must also hold a Vermont license.',
        status: 'verified',
        cites: [S.optumSCC, S.optumReimb, S.ch95],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion; the member’s benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.mandate],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with severity level using a validated tool. Progress is reviewed against baseline, and use below 80% of authorized hours triggers review.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'A "state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis" under DSM-5-TR. In Vermont a behavior analyst cannot diagnose (26 V.S.A. § 4928).',
        status: 'verified',
        cites: [S.optumSCC, S.ch95],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool from a non-exhaustive list: first-level screens (M-CHAT and others), second-level screens (CARS/CARS-2, RITA-T, STAT) and formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral in the SCC; ABA requires prior authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.ch95],
      },
      telehealth: {
        value: 'Three codes on commercial plans. Optum’s Telehealth Billing guide (updated September 2025): "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157." Claims must carry POS 02 or POS 10; a telehealth modifier alone is not paid. The SCC say telehealth is "not intended to supplant in-person service."' + VT_TELE_TAIL + ' Ask Optum how it applies the three-code list to a fully insured Vermont plan.',
        status: 'plan-dependent',
        cites: [S.optumTele, S.optumSCC, S.tele4098a],
        verifyVia: 'Optum Provider Express support or the behavioral health number on the card: confirm funding (fully insured in Vermont vs. self-funded) and which ABA codes Optum pays by telehealth for this member.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Depends on funding. A plan subject to 18 V.S.A. § 9418b must decide a completed non-urgent request within two business days and an urgent one within 24 hours, or the request is deemed granted. Self-funded ERISA plans follow 29 CFR 2560.503-1 (15 days, one 15-day extension; urgent 72 hours). Optum publishes no Vermont-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.pa9418b, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured in Vermont or self-funded (ERISA), and what reauthorization lead time Optum expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: VT_COB_VALUE('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.cob4024, S.cfr433, S.abaSupp, S.tricare, S.champva],
        verifyVia: 'Ask UnitedHealthcare/Optum at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Vermont?', a: 'Yes, under Optum’s national ABA criteria for ASD. Fully insured plans must also meet Vermont’s 8 V.S.A. § 4082 mandate (birth to 21, no dollar cap). Self-funded employer plans follow their own documents.' },
      { q: 'Does Optum have Vermont-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement does not list Vermont, so the national criteria apply.' },
      { q: 'Is UnitedHealthcare a Vermont Medicaid plan?', a: 'No. Vermont Medicaid has no managed care plans; DVHA authorizes and pays ABA directly.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in Vermont?', a: 'Optum’s commercial telehealth guide allows only 97155, 97156 and 97157, billed POS 02 or 10. Fully insured Vermont plans are also subject to 8 V.S.A. § 4098a, which requires telemedicine coverage to the same extent as in person where clinically appropriate, so ask Optum how it applies the list to your plan.' },
      { q: 'What does UnitedHealthcare pay for ABA in Vermont?', a: 'UnitedHealthcare/Optum publishes no ABA rates. You are paid up to the Fee Maximum in your Optum agreement, with a credential modifier on each line (HM RBT, HN BCaBA, HO BCBA, HP BCBA-D). Vermont Medicaid’s schedule (97153 $15.00 per 15 minutes) is the public benchmark.' },
    ],
  },
};

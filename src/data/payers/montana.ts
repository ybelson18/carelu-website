import type { PayerConfig, PayerSource } from './types.js';

/* Montana — researched October 2026 from primary sources only.
   Montana Medicaid has no managed care plans for ABA: DPHHS (Developmental Disabilities
   Program, Behavioral Health and Developmental Disabilities Division) administers the ABA
   benefit itself, Mountain-Pacific Quality Health reviews requests for additional units in
   its Qualitrac portal, and claims go to the state fiscal agent. The ABA manual is an HTML
   page on medicaidprovider.mt.gov (read in full, updated 09/18/2025); forms and the fee
   schedule are PDFs there (plain curl, Chrome UA). mca.legmt.gov statutes fetch with plain
   curl. rules.mt.gov (ARM) serves a captcha to curl and r.jina.ai, so no ARM text is cited
   as read. Mountain-Pacific's Behavioral Health Provider User Guide (the review timelines)
   sits behind a download gate that returned "no access". */

const S: Record<string, PayerSource> = {
  abaManual: { title: 'Montana Medicaid Applied Behavior Analysis Services Manual (updated 09/18/2025)', url: 'https://medicaidprovider.mt.gov/menuetest/appliedbehavioranalysisservicesmanual' },
  abaPage: { title: 'Montana Healthcare Programs — Applied Behavior Analysis Services provider page (manual, fee schedules, forms, notices)', url: 'https://medicaidprovider.mt.gov/76' },
  dphhsAba: { title: 'DPHHS — Applied Behavior Analysis Services (BHDD, Developmental Disabilities Program)', url: 'https://dphhs.mt.gov/BHDD/DisabilityServices/developmentaldisabilities/ABAS/index' },
  fee2025: { title: 'Montana Medicaid Applied Behavior Analysis Services Fee Schedule, effective July 1, 2025', url: 'https://medicaidprovider.mt.gov/docs/feeschedules/2025/FinalABAFeeScheduleEffJuly2025.pdf' },
  itt: { title: 'Montana Medicaid — ABA Services Intent to Initiate Treatment form (updated 01.01.2026)', url: 'https://medicaidprovider.mt.gov/docs/ABA/ABAServicesIntenttoInitiateTreatment11302022.pdf' },
  addl: { title: 'Montana Medicaid — ABA Services Additional Units of Service Request form (updated 01.01.2026)', url: 'https://medicaidprovider.mt.gov/docs/forms/ABAServicesAdditionalUnitsofServiceRequestUpdated.pdf' },
  checklist: { title: 'Montana Medicaid — ABA Services Required Document Components Checklist (updated 01.01.2026)', url: 'https://medicaidprovider.mt.gov/docs/ABA/ABAServicesRequiredDocumentComponentsChecklist11302022.pdf' },
  transfer: { title: 'Montana Medicaid — ABA Services Provider Transfer Request form (updated 10.27.2025)', url: 'https://medicaidprovider.mt.gov/docs/forms/ABAServicesProviderTransferRequestUpdated.pdf' },
  teleForm: { title: 'Montana Medicaid — ABA Telehealth Exception Request form (updated 01.01.2026)', url: 'https://medicaidprovider.mt.gov/docs/ABA/ABATelehealthExceptionRequest09222022.pdf' },
  train2023: { title: 'Montana Medicaid — ABA Training: Recent Changes to Forms, Billing Process, and Common Billing Issues (March 2023)', url: 'https://medicaidprovider.mt.gov/docs/ABA/ABATrainingljnADA.pdf' },
  giManual: { title: 'Montana Healthcare Programs — General Information for Providers Manual (timely filing, TPL, administrative reviews)', url: 'https://medicaidprovider.mt.gov/manuals/generalinformationforprovidersmanual' },
  pnTele: { title: 'Montana Healthcare Programs Notice — Coverage and Reimbursement Policy for Telemedicine/Telehealth Services (March 21, 2023)', url: 'https://medicaidprovider.mt.gov/docs/providernotices/2023/provnoticeCoverageandReimbursementPolicyforTelemedicineTelehealth.pdf' },
  pnSfy27: { title: 'Montana Healthcare Programs Notice — State Fiscal Year 2027 Provider Rate Update (May 29, 2026)', url: 'https://medicaidprovider.mt.gov/docs/providernotices/2026/ProviderNoticeStateFiscalYear2027ProviderRateUpdate.pdf' },
  pnJuly26: { title: 'Montana Healthcare Programs Notice — July 1, 2026 Fee Schedule Updates (June 30, 2026; lists ABA Services)', url: 'https://medicaidprovider.mt.gov/docs/providernotices/2026/SFY27RateAdjustmentImplementationProviderNotice.pdf' },
  pnRef: { title: 'Montana Healthcare Programs Notice — Referrals, Medical Orders, and Prior Authorization Requirements Beginning July 1, 2026 (Aug. 21, 2026)', url: 'https://medicaidprovider.mt.gov/docs/providernotices/2026/ReferralsMedicalOrdersandPriorAuthorizationRequirementsBeginningJuly12026ProviderNotice.pdf' },
  pnCob: { title: 'Montana Healthcare Programs Notice — CMS-1500 Coordination of Benefits Processing: Medicare vs. TPL (May 7, 2026)', url: 'https://medicaidprovider.mt.gov/docs/providernotices/2026/InformationalProviderNoticeCMS1500CoordinationofBenefitsProcessing-MedicarevsTPL.pdf' },
  mpqhf: { title: 'Mountain-Pacific Quality Health — Medicaid Utilization Review Portal document library (Qualitrac; Behavioral Health Provider User Guide)', url: 'https://mpqhf.org/medicaid-provider-portal/document-library/' },
  evv: { title: 'DPHHS — Electronic Visit Verification (EVV)', url: 'https://dphhs.mt.gov/SLTC/evv' },
  mca33_22_515: { title: 'MCA 33-22-515 — Coverage of autism spectrum disorders (En. Ch. 359, L. 2009)', url: 'https://mca.legmt.gov/bills/mca/title_0330/chapter_0220/part_0050/section_0150/0330-0220-0050-0150.html' },
  mca33_30_102: { title: 'MCA 33-30-102 — Health service corporations: application of Title 33, chapter 22', url: 'https://mca.legmt.gov/bills/mca/title_0330/chapter_0300/part_0010/section_0020/0330-0300-0010-0020.html' },
  mca33_31_111: { title: 'MCA 33-31-111 — Health maintenance organizations: provisions that apply (incl. 33-22-515)', url: 'https://mca.legmt.gov/bills/mca/title_0330/chapter_0310/part_0010/section_0110/0330-0310-0010-0110.html' },
  mca33_22_138: { title: 'MCA 33-22-138 — Coverage for telehealth services', url: 'https://mca.legmt.gov/bills/mca/title_0330/chapter_0220/part_0010/section_0380/0330-0220-0010-0380.html' },
  mca33_18_232: { title: 'MCA 33-18-232 — Time for payment of claims', url: 'https://mca.legmt.gov/bills/mca/title_0330/chapter_0180/part_0020/section_0320/0330-0180-0020-0320.html' },
  mca33_32_107: { title: 'MCA 33-32-107 — Length of prior authorization', url: 'https://mca.legmt.gov/bills/mca/title_0330/chapter_0320/part_0010/section_0070/0330-0320-0010-0070.html' },
  mca33_32_211: { title: 'MCA 33-32-211 — Procedures for standard utilization review and benefit determinations', url: 'https://mca.legmt.gov/bills/mca/title_0330/chapter_0320/part_0020/section_0110/0330-0320-0020-0110.html' },
  mca33_32_212: { title: 'MCA 33-32-212 — Procedures for expedited utilization review and benefit determinations', url: 'https://mca.legmt.gov/bills/mca/title_0330/chapter_0320/part_0020/section_0120/0330-0320-0020-0120.html' },
  mca37_17_402: { title: 'MCA 37-17-402 — Behavior analysis: definitions (Board of Psychologists)', url: 'https://mca.legmt.gov/bills/mca/title_0370/chapter_0170/part_0040/section_0020/0370-0170-0040-0020.html' },
  mca37_17_403: { title: 'MCA 37-17-403 — Behavior analyst license required; qualifications', url: 'https://mca.legmt.gov/bills/mca/title_0370/chapter_0170/part_0040/section_0030/0370-0170-0040-0030.html' },
  mca37_17_404: { title: 'MCA 37-17-404 — Behavior analysis licensure exemptions (incl. supervised behavior technicians)', url: 'https://mca.legmt.gov/bills/mca/title_0370/chapter_0170/part_0040/section_0040/0370-0170-0040-0040.html' },
  mca37_17_405: { title: 'MCA 37-17-405 — Behavior analyst autonomy; supervision authority', url: 'https://mca.legmt.gov/bills/mca/title_0370/chapter_0170/part_0040/section_0050/0370-0170-0040-0050.html' },
  mca37_2_305: { title: 'MCA 37-2-305 — Telehealth services by persons licensed under Title 37', url: 'https://mca.legmt.gov/bills/mca/title_0370/chapter_0020/part_0030/section_0050/0370-0020-0030-0050.html' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Montana: 2017, MT Board of Psychologists)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  psyBoard: { title: 'Montana Board of Psychologists — licensing of psychologists, behavior analysts and assistant behavior analysts', url: 'https://boards.bsd.dli.mt.gov/psychologists/' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  aetnaCPB: { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  aetnaTele: { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026; incl. Montana Regulatory Addendum)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM, effective July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, history through June 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumNNM: { title: 'Optum National Network Manual (effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  bcbsmtMgmt: { title: 'BCBSMT — Management of Applied Behavior Analysis (ABA) (provider sheet 359657.1222)', url: 'https://www.bcbsmt.com/docs/provider/mt/clinical/bhp/mt-management-aba.pdf' },
  bcbsmtPA: { title: 'BCBSMT — 2026 Commercial Prior Authorization Requirements Summary (eff. 01/01/2026)', url: 'https://ccpa.bcbsmt.com/docs/provider/mt/claims/priorauthorization-lists/mt-current-pa-requirements-2026.pdf' },
  bcbsmtCodes: { title: 'BCBSMT — 2026 Commercial Outpatient Behavioral Health Prior Authorization Code List (updated July 2026)', url: 'https://www.bcbsmt.com/docs/provider/mt/claims/priorauthorization-lists/mt-bh-pacode-2026.pdf' },
  bcbsmtITR: { title: 'BCBSMT — ABA Initial Assessment Request form', url: 'https://www.bcbsmt.com/docs/forms/provider/mt/aba-itr-form.pdf' },
  bcbsmtCSR: { title: 'BCBSMT — Applied Behavior Analysis Clinical Service Request Form (360781.1125)', url: 'https://www.bcbsmt.com/docs/forms/provider/mt/aba-clinical-service-request-form-mt1.pdf' },
  bcbsmtTele: { title: 'BCBSMT — ABA Supervision via Telehealth Request & Attestation form', url: 'https://www.bcbsmt.com/docs/forms/provider/mt/aba_telehealth_request_attestation_form.pdf' },
  bcbsmtBH: { title: 'BCBSMT — Behavioral Health Programs (outpatient management incl. ABA; ABA forms)', url: 'https://www.bcbsmt.com/provider/clinical-resources/clinical/behavioral-health-programs' },
  bcbsmtMNC: { title: 'BCBSMT — Behavioral Health Medical Necessity Criteria (MCG care guidelines)', url: 'https://www.bcbsmt.com/provider/clinical-resources/clinical/behavioral-health-programs/medical-necessity-criteria' },
  bcbsmtTelePage: { title: 'BCBSMT — Telehealth Services (provider page)', url: 'https://www.bcbsmt.com/provider/clinical-resources/clinical/telemedicine-services' },
  bcbsmtManuals: { title: 'BCBSMT — Provider Manuals (available only in Availity Payer Spaces)', url: 'https://www.bcbsmt.com/provider/standards-and-requirements/standards/provider-manuals' },
};

/* ---- Shared Montana commercial layer (same facts on every commercial guide) ---- */
const MT_MANDATE_BODY =
  'Montana’s autism mandate is MCA 33-22-515, enacted in 2009. It reaches "each group disability policy, certificate of insurance, or membership contract" delivered, issued, renewed, extended or modified in Montana, and requires "coverage for diagnosis and treatment of autism spectrum disorders for a covered child 18 years of age or younger." Health service corporations (MCA 33-30-102 applies chapter 22 to them) and HMOs (MCA 33-31-111 lists 33-22-515 among the provisions that bind them) are covered too. The covered diagnoses are written in older DSM terms: autistic disorder, Asperger’s disorder, or pervasive developmental disorder not otherwise specified, "as defined by the most recent edition" of the DSM. Habilitative and rehabilitative care "includes medically necessary interactive therapies derived from evidence-based research, including applied behavior analysis," and it must be "prescribed, provided, or ordered by a licensed physician or licensed psychologist." ABA under the statute "must be provided by an individual who is licensed by the behavior analyst certification board or is certified by the department of public health and human services as a family support specialist with an autism endorsement." The statute lets a plan cap the benefit: coverage "may be limited to a maximum benefit of" $50,000 a year for a child 8 or younger and $20,000 a year from 9 through 18. Ordinary deductibles, coinsurance and copays may apply, but special cost sharing for autism care may not. When treatment is ongoing, the insurer "may request that the treating physician provide a treatment plan" (diagnosis, treatment by type and frequency, anticipated duration and outcomes, and why it is medically necessary) and may ask for an update "every 6 months." The section also binds the state and university employee plans, local-government employee plans and non-ERISA self-funded MEWAs. Two gaps matter at intake: the text speaks only of group coverage, and ERISA self-funded employer plans sit outside state insurance law altogether.';

const MT_LICENSURE_BODY =
  'Montana licenses behavior analysts. Since 2017 (Ch. 425, L. 2017), MCA Title 37, chapter 17, part 4 has the Board of Psychologists license behavior analysts and assistant behavior analysts; the BACB’s licensure table lists Montana (2017, MT Board of Psychologists). "An individual may not represent to the public that the individual is an assistant behavior analyst or a behavior analyst without a license," and a license requires current BACB certification at the matching level (BCBA or BCaBA), a fingerprint background check and the Board’s coursework rules (MCA 37-17-403). A behavior technician supervised by a licensed behavior analyst does not need a license, and neither do school district staff, licensed psychologists and those acting under their authority, licensed clinical professional counselors, licensed social workers and family support specialists with an autism endorsement (MCA 37-17-404). A BCaBA or technician must be supervised by a licensed behavior analyst or by a licensed psychologist board-certified by ABPP in behavioral and cognitive psychology (MCA 37-17-405). For telehealth, MCA 37-2-305 lets "a person licensed under this title" treat by telehealth when it is appropriate and meets the standard of care; it creates no registration for providers licensed only in another state. So a BCBA licensed elsewhere should plan on a Montana license before treating a child located in Montana, including by video. Commercial ABA rates are negotiated and unpublished; the public benchmark is the Montana Medicaid ABA fee schedule (July 1, 2025: 97153 $11.36 and 97155 $20.46 per 15-minute unit).';

const MT_PROMPT_PAY_BODY =
  'Montana’s prompt-pay statute, MCA 33-18-232, says an insurer "shall pay or deny a claim within 30 days after receipt of a proof of loss" unless it makes a reasonable request for more information, and then within 60 days. A late insurer owes the claim "plus 10% annual interest" from the date it was due (interest under $5 is not payable). The statute governs insurers; a self-funded ERISA plan follows its own plan document and federal claims rules. Timely filing limits are set by each carrier’s contract, not by Montana statute.';

const MANDATE_REFERRAL_TAIL =
  ' For a fully insured Montana group plan, MCA 33-22-515 covers ABA "prescribed, provided, or ordered by a licensed physician or licensed psychologist," and lets the insurer ask the treating physician for a treatment plan, updated every 6 months. Self-funded ERISA plans sit outside the statute.';

const MANDATE_AGE_TAIL =
  ' For fully insured Montana group plans, MCA 33-22-515 requires coverage "for a covered child 18 years of age or younger" and lets the plan cap the autism benefit at $50,000 a year through age 8 and $20,000 a year from 9 through 18. Self-funded ERISA plans and individual policies are outside the statute’s text, so funding type and plan type decide whether that binds.';

const MT_UR_TURNAROUND =
  'Depends on how the plan is funded. Fully insured Montana plans fall under MCA 33-32-211: for a prospective (prior-authorization) review the insurer must decide and notify "not later than 7 business days after the date the health insurance issuer receives the request" or after it receives all necessary information, with one extension of up to 7 business days for matters beyond its control; a request that fails the filing procedure must be flagged within 3 days. Urgent care requests are decided within 48 hours (MCA 33-32-212). A reduction or termination of an approved course of treatment before it ends is an adverse determination that must be noticed in advance, and the service continues pending the internal review. Once approved, a certification "is valid for at least 6 months," and 12 months for treatment of a chronic condition (MCA 33-32-107). Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," with one 15-day extension.';

const MT_COB_COMMERCIAL =
  'If the child also has Montana Medicaid, the commercial plan pays first: Montana Healthcare Programs requires providers to "bill other insurance carriers before billing Montana Healthcare Programs" in most cases, and Medicaid is the payer of last resort under 42 CFR 433.139. If the other insurer has not responded in 90 days, Medicaid can be billed with proof the claim was sent. When a child is on two commercial plans, the order of benefits comes from Montana’s coordination-of-benefits rules for state-regulated plans and from the plan document for self-funded plans; we could not open the Montana rule text this run (rules.mt.gov returned a captcha), so get the order from the carrier.';

export const montanaPayers: Record<string, PayerConfig> = {
  'montana-medicaid': {
    slug: 'montana-medicaid',
    cardDesc: 'No MCOs: DPHHS runs ABA directly. Up to 20 for ASD; first 180 days/1,260 units start on an Intent to Initiate form, then PA through Mountain-Pacific.',
    assessmentPA: {
      value: 'No prior authorization for the initial span. The BCBA submits the Intent to Initiate Treatment form with the referring clinician’s prescription, and DPHHS replies with a billing span in which "No PA will be required." 97151 is one of the codes inside the initial 1,260-unit package',
      status: 'verified',
      cites: [S.itt, S.train2023, S.abaManual],
    },
    treatmentPA: {
      value: 'Not for the first 180 calendar days or 1,260 units, whichever comes first. After that every additional span needs prior authorization: the Additional Units of Service Request and documents go to Mountain-Pacific’s Qualitrac portal at least 14 calendar days before the new span starts, and approvals run 180 days or 1,260 units',
      status: 'verified',
      cites: [S.abaManual, S.addl, S.checklist, S.itt],
    },
    dxRequired: {
      value: 'Yes, but a provisional diagnosis is enough to start: ASD (up to age 20), a listed serious emotional disturbance (SED), or DD eligibility, plus the manual’s functional impairment criteria. Continuing past the first span requires the diagnosis to be confirmed by a diagnostic evaluation from a listed qualified professional',
      status: 'verified',
      cites: [S.abaManual, S.itt, S.addl],
    },
    payer: 'Montana Medicaid',
    state: 'MT', kind: 'state-medicaid',
    pill: 'Payer Guide · Montana Medicaid',
    h1: 'Montana Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Montana Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Montana Medicaid covers ABA: run by DPHHS directly with no managed care plans, for ASD and DD-eligible members up to age 20 (and some SED diagnoses), a 180-day/1,260-unit start without PA, Mountain-Pacific reviews after that, published fee-for-service rates and state licensure of behavior analysts.',
    intro: [
      'Montana Medicaid pays for applied behavior analysis itself. There are no Medicaid managed care plans standing between the family and the state for ABA: the ABA manual describes services "administered by the Department," the Developmental Disabilities Program (part of DPHHS’s Behavioral Health and Developmental Disabilities Division) takes the start-of-care paperwork, Mountain-Pacific Quality Health reviews requests for more units in its Qualitrac portal, and the BCBA bills the state on a CMS-1500. So there is one rulebook to learn, the Montana Medicaid Applied Behavior Analysis Services Manual (updated September 2025).',
      'The benefit is unusual in two ways. It is not limited to autism: members up to 20 with a provisional ASD diagnosis, members found eligible for state developmental disabilities services, and children with a listed serious emotional disturbance can all qualify if they meet functional impairment criteria. And the first 180 days (or 1,260 units) need no prior authorization at all, only an Intent to Initiate form and a prescription; prior authorization starts with the second span.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes: ASD or DD-eligible members up to age 20; SED members up to 17 (or 20 if in secondary school)' },
      { label: 'Structure', value: 'Fee-for-service, run by DPHHS (Developmental Disabilities Program); no MCOs. Mountain-Pacific (Qualitrac) reviews additional units' },
      { label: 'Start of care', value: 'Intent to Initiate form + prescription; first 180 days or 1,260 units with no PA' },
      { label: 'Prior auth', value: 'Every span after the first: Additional Units request via Qualitrac, 14+ days ahead; 180 days / 1,260 units per approval' },
      { label: 'Rates (per 15 min, July 2025)', value: '97151 $40.41 · 97153 $11.36 · 97155 $20.46 · 97156 $20.46 · 97152 $11.36 · 97154 $3.78 · 97157/97158 $6.84 (TC modifier for BCaBA: 97151 $29.91, 97155 $15.17)' },
      { label: 'Billing NPI', value: 'All services billed under the BCBA’s NPI' },
      { label: 'Licensure', value: 'Behavior analysts licensed by the Montana Board of Psychologists (MCA 37-17-4, since 2017)' },
    ],
    sections: [
      {
        h2: 'Who runs ABA: DPHHS, not a health plan',
        body: [
          'The ABA manual describes "Montana Medicaid Applied Behavior Analysis (ABA) services administered by the Department," and every step of the process it lays out runs through the state. The Intent to Initiate form and the Provider Transfer Request go to the Developmental Disabilities Program at DDPServiceRequest@mt.gov through the state’s secure file transfer service; requests for additional units are uploaded to "the Medicaid Utilization Review Portal" run by Mountain-Pacific Quality Health (Qualitrac); and BCBAs bill the Department "electronically" or "on a CMS-1500 claim form." DPHHS lists an ABA Program Officer at (406) 444-3878 and sends prior-authorization and continued-stay questions to Mountain-Pacific at 1-800-219-7035. None of the ABA sources we read mentions a managed care plan, and the forms carry no plan field, so the first intake question is simply whether the child has active Montana Medicaid.',
          'Mountain-Pacific is a utilization review contractor, not a payer: the manual sends Additional Units of Service requests "to the Department or other designated reviewer," Mountain-Pacific’s Qualitrac portal, while DPHHS pays the claims. That is why this directory has one Montana Medicaid guide and no separate plan guides.',
        ],
        cites: [S.abaManual, S.dphhsAba, S.itt, S.addl, S.transfer, S.mpqhf],
      },
      {
        h2: 'Who qualifies: ASD, DD eligibility, or SED, plus functional impairment',
        body: [
          'Initial eligibility has three doors: a provisional qualifying diagnosis of ASD and "no older than 20 years of age"; DD eligibility (found eligible for state developmental disabilities services under ARM 37.34.201) and no older than 20; or a provisional SED diagnosis at 17 or younger, or up to 20 if enrolled in an accredited secondary school. The SED list is long (it includes major depressive disorder, generalized anxiety disorder, PTSD, OCD, oppositional defiant disorder and others; ADHD only alongside another SED diagnosis). Every category must also meet the Functional Impairment Criteria: impairment "for at least 180 calendar days or that is reasonably predicted to last at least 180 calendar days," shown by two or more of six listed problems, from failing to maintain peer relationships to behavior that disrupts the family’s ability to keep work.',
          'A physician, licensed mental health professional, nurse practitioner or psychologist must deem ABA medically necessary and write a prescription "stating the diagnosis for which the member is being referred and that the referral is for ABA services." Members receiving ABA are exempt from cost sharing.',
        ],
        cites: [S.abaManual, S.dphhsAba, S.itt],
      },
      {
        h2: 'The first 180 days, then prior authorization every 180 days',
        body: [
          'The BCBA starts care by sending the Intent to Initiate Treatment form and the prescription; the first date of service "may pre-date the Date of Submission." DPHHS emails back the billing span, and "No PA will be required during this billing span." The initial package is 1,260 units over 180 calendar days for all codes combined, used "as the BCBA provider sees fit," and unused units expire at day 180. Within 30 calendar days of starting, the provider must complete a behavior identification assessment and an individualized treatment plan.',
          'To continue, the BCBA submits the Additional Units of Service Request "at least 14 calendar days prior to the intended onset of continued service delivery," uploaded to Qualitrac, and "the Department may not give providers reimbursement retroactively for failure to submit timely, complete, and required documentation." The first such request needs the diagnostic evaluation that confirms the diagnosis, the initial BIA and the current treatment plan; later ones need a current BIA (within one year), a current treatment plan (within six months), proof of continuing functional impairment and, for SED, an annual clinical reassessment. Approvals run 180 calendar days and may not exceed 1,260 units. Requests missing information are pended, and a late response becomes a technical denial. Members can request an administrative review of a denial.',
        ],
        cites: [S.abaManual, S.itt, S.addl, S.checklist, S.train2023],
      },
      {
        h2: 'What Montana Medicaid pays for ABA',
        body: [
          'The July 1, 2025 ABA fee schedule is the latest one DPHHS posts for ABA, per 15-minute unit: 97151 $40.41 (BCBA) or $29.91 with the TC modifier (BCaBA); 97152 $11.36; 97153 $11.36; 97154 $3.78; 97155 $20.46 (BCBA) or $15.17 with TC (BCaBA); 97156 $20.46; 97157 and 97158 $6.84. 0362T and 0373T are not on the schedule. ABA is paid from the Department’s RBRVS system, "Applied Behavior Analysis Services do not require co-pay," and "All services are billed under the BCBA’s provider NPI." For state fiscal year 2027 DPHHS announced no legislatively authorized rate increases but did implement the 2026 RBRVS relative values, with pricing elements adjusted to stay budget neutral, and its July 1, 2026 fee-schedule notice lists ABA among the affected provider types; check the current RBRVS schedule before quoting a rate.',
        ],
        cites: [S.fee2025, S.abaManual, S.abaPage, S.pnSfy27, S.pnJuly26],
      },
      {
        h2: 'Claims: timely filing, other insurance, telehealth and EVV',
        body: [
          'Clean claims must reach Montana Healthcare Programs within twelve months of the date of service (or of a retroactive eligibility determination), or within six months of a Medicare EOB or a third-party adjustment notice when those come later. Bill other insurance first; if 90 days pass with no response from the other carrier, Medicaid can be billed with proof the claim was sent. Commercial payers are processed as third-party liability at the claim level on the CMS-1500. Telehealth ABA needs approval in advance on the ABA Telehealth Exception Request, which asks why video delivery is medically necessary, which goals are unsuitable and how the home setting is assessed for safety. Neither the ABA manual nor its forms mention electronic visit verification; DPHHS describes its EVV system as covering personal care, home health and other home and community-based services.',
          'Providers who disagree with a Department decision can request an administrative review in writing within 30 days of the date the decision was mailed, and a fair hearing within 30 days of the review decision.',
        ],
        cites: [S.giManual, S.pnCob, S.teleForm, S.evv, S.abaManual],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [
          'Montana licenses behavior analysts through the Board of Psychologists (MCA 37-17-403), and Montana Medicaid’s forms are built around that license: the Intent to Initiate and Additional Units forms ask for the provider’s license number and have the "licensed Board Certified Behavior Analyst (BCBA)" attest to the service requirements, and the telehealth request asks for "BCBA NPI and License Number." State law lets "a person licensed under this title" deliver services by telehealth (MCA 37-2-305) and offers no registration for clinicians licensed only elsewhere. A BCBA outside Montana who wants to serve Montana Medicaid members, including by telehealth, should get a Montana behavior analyst license and Montana Medicaid enrollment first.',
        ],
        cites: [S.mca37_17_403, S.mca37_2_305, S.itt, S.addl, S.teleForm, S.bacbLic],
      },
    ],
    collect: [
      { title: 'Montana Medicaid ID', desc: 'Active Montana Medicaid on the date of service; there is no health plan to identify.' },
      { title: 'Prescription for ABA', desc: 'From a physician, licensed mental health professional, NP or psychologist, naming the diagnosis and saying the referral is for ABA. It goes with the Intent to Initiate form.' },
      { title: 'Qualifying category', desc: 'Provisional ASD, DD eligibility letter, or a listed SED diagnosis, plus documentation of two or more functional impairment criteria.' },
      { title: 'Diagnostic evaluation', desc: 'Needed with the first Additional Units request, due 14 days before the first span ends: from one of the 12 listed professional types, confirming the diagnosis and stating ABA is medically necessary.' },
      { title: 'Parent commitment', desc: 'The forms require the parent or guardian’s written commitment to participate in the treatment plan goals.' },
      { title: 'Other insurance', desc: 'Commercial coverage is billed first; Medicaid pays after.' },
    ],
    sources: [S.abaManual, S.abaPage, S.dphhsAba, S.fee2025, S.itt, S.addl, S.checklist, S.transfer, S.teleForm, S.train2023, S.giManual, S.pnTele, S.pnSfy27, S.pnJuly26, S.pnRef, S.pnCob, S.mpqhf, S.evv, S.mca37_17_403, S.mca37_17_405, S.mca37_2_305, S.bacbLic, S.cfr440, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'Services "must be directed by a BCBA or a BCBA-D," and an RBT practices "under the direction and close supervision of a BCBA," who "is responsible for all work RBTs perform" and "assumes full professional responsibility for all services provided by a BCaBA or RBT." No numeric supervision ratio is published. State licensure law adds that a BCaBA or behavior technician must be supervised by a licensed behavior analyst or an ABPP-certified behavioral psychologist (MCA 37-17-405).',
        status: 'verified',
        cites: [S.abaManual, S.fee2025, S.mca37_17_405],
      },
      concurrentBilling: {
        value: 'Not addressed. The manual’s "Concurrent Services" section is about other children’s mental health programs (ABA must be billed outside their authorized hours), not about billing 97153 and 97155 for the same clock time.',
        status: 'unverified',
        cites: [S.abaManual],
        verifyVia: 'DPHHS ABA Program Officer, (406) 444-3878, or Montana Provider Relations, (800) 624-3958: ask for written guidance on billing 97155 during a 97153 session.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Each span is a package of 1,260 units over 180 calendar days for all ABA codes combined, used as the BCBA sees fit; unused units expire at the end of the span. DPHHS training lists "Billing more units per date of service than allowed" as a common denial, but neither the manual nor the fee schedule publishes a per-day unit limit.',
        status: 'verified',
        cites: [S.abaManual, S.fee2025, S.train2023],
      },
      noteSignature: {
        value: 'Not addressed in the ABA manual. It requires providers to document direct treatment, supervision, parent training and progress "in a manner consistent with practice guidelines," and the general record-keeping rule is ARM 37.85.414, which we could not open.',
        status: 'unverified',
        cites: [S.abaManual, S.pnTele],
        verifyVia: 'ARM 37.85.414 (rules.mt.gov) or DPHHS ABA Program Officer, (406) 444-3878.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'The manual sets no home, clinic or school restriction. ABA can run alongside PHP, day treatment, CSCT, therapeutic group home, home support services, therapeutic foster care, extraordinary needs aide and SED case management if billed outside those programs’ authorized hours with documented coordination, but not alongside CBPRS, PRTF, acute inpatient or IOP. Telehealth delivery needs an approved Telehealth Exception Request.',
        status: 'verified',
        cites: [S.abaManual, S.teleForm],
      },
      billAsProvider: {
        value: '"All services are billed under the BCBA’s National Provider Identifier (NPI)." The Additional Units and Transfer forms ask for both a group NPI and the rendering NPI, and rendering providers must be affiliated to the billing NPI in the portal.',
        status: 'verified',
        cites: [S.abaManual, S.fee2025, S.addl, S.transfer, S.train2023],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'ASD or DD-eligible: "no older than 20 years of age." SED: 17 or younger, or up to 20 if enrolled in an accredited secondary school.',
        status: 'verified',
        cites: [S.abaManual, S.dphhsAba],
      },
      dxRecency: {
        value: 'A provisional diagnosis is enough to start. The confirming diagnostic evaluation is required only with the first Additional Units request; after that the clocks run on the BIA (within one year) and treatment plan (within six months). SED requires a reassessment within 12 months of the last determination, and DD eligibility proof must be dated within 365 days.',
        status: 'verified',
        cites: [S.abaManual, S.addl, S.checklist],
      },
      diagnosingProviders: {
        value: 'To continue past the first span, the diagnosis must be established by one of: child and adolescent psychiatrist; general psychiatrist; psychiatric mental health NP; developmental pediatrician; neurologist; neuropsychologist or psychologist; pediatrician; family physician; family or pediatric NP; physician assistant; clinical professional counselor; or clinical social worker. The form adds child and adolescent experience for general psychiatrists and psychiatric NPs.',
        status: 'verified',
        cites: [S.abaManual, S.addl],
      },
      diagnosticTools: {
        value: 'No instrument is named. The diagnostic evaluation must establish the diagnosis "through interview, observation, and formal assessment tools appropriate to the condition." For treatment progress, DPHHS asks for one tool across the whole span and prefers VB-MAPP, ABLLS-R, AFLS or ABAS.',
        status: 'verified',
        cites: [S.abaManual, S.checklist],
      },
      referral: {
        value: 'Yes. A physician, licensed mental health professional, nurse practitioner or psychologist must document medical necessity in a prescription "stating the diagnosis for which the member is being referred and that the referral is for ABA services," submitted with the Intent to Initiate form.',
        status: 'verified',
        cites: [S.abaManual, S.itt],
      },
      telehealth: {
        value: 'Only with prior approval. The BCBA must file the ABA Telehealth Exception Request, which is "for prior authorization of services to be delivered via telehealth," explaining why telehealth is medically necessary, which treatment goals are unsuitable for it, how effectiveness will be monitored and how the home is checked for safety; DPHHS accepts or declines. DPHHS’s telehealth policy pays telehealth at the in-person rate when the service is medically necessary, clinically appropriate and allowed by the provider manual, and requires the appropriate CPT code, place of service and modifier. No ABA-specific telehealth code list, POS or modifier is published.',
        status: 'verified',
        cites: [S.teleForm, S.pnTele, S.abaManual],
      },
      authTurnaround: {
        value: 'The ABA manual says Mountain-Pacific decides "within the timelines established by the Department or designated reviewer" and points to its Behavioral Health Provider User Guide (August 2024), which we could not open. Submit at least 14 calendar days before the new span. The federal floor for state fee-for-service prior authorization since January 1, 2026 is a standard decision "in no case later than 7 calendar days" (extendable up to 14) and an expedited one within 72 hours.',
        status: 'unverified',
        cites: [S.abaManual, S.cfr440],
        verifyVia: 'Mountain-Pacific Quality Health, 1-800-219-7035, or its Behavioral Health Provider User Guide on the Medicaid Utilization Review Portal document library.',
        blocker: 'document',
      },
      coordinationOfBenefits: {
        value: 'Medicaid pays after other insurance: "In most cases, providers must bill other insurance carriers before billing Montana Healthcare Programs," and payment from all sources may not exceed the Medicaid fee. If another insurer has not responded in 90 days, bill Medicaid with proof the claim was sent. Commercial coverage and Medicare Advantage are processed as third-party liability at the claim level, with the primary EOB attached. Federal rule: 42 CFR 433.139.',
        status: 'verified',
        cites: [S.giManual, S.pnCob, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Montana Medicaid cover ABA therapy?', a: 'Yes, for members up to age 20 with ASD or DD eligibility, and for children with certain serious emotional disturbances (up to 17, or 20 if in secondary school), when they meet the functional impairment criteria. DPHHS runs the benefit directly.' },
      { q: 'Does Montana have Medicaid managed care plans for ABA?', a: 'No. DPHHS administers ABA itself: the Developmental Disabilities Program receives the start paperwork, Mountain-Pacific Quality Health reviews additional units, and the BCBA bills the state.' },
      { q: 'Does the ABA assessment need prior authorization in Montana Medicaid?', a: 'No. The first 180 days or 1,260 units, assessment included, start on an Intent to Initiate form and a prescription with no PA. Prior authorization applies to every span after that.' },
      { q: 'What does Montana Medicaid pay for ABA?', a: 'Per 15 minutes on the July 2025 schedule: 97151 $40.41, 97153 $11.36, 97155 and 97156 $20.46, 97152 $11.36, 97154 $3.78, 97157/97158 $6.84; BCaBA lines with the TC modifier pay less. Everything is billed under the BCBA’s NPI.' },
      { q: 'Can a BCBA licensed in another state treat a Montana Medicaid member by telehealth?', a: 'Plan on a Montana license first. Montana licenses behavior analysts, Medicaid’s forms ask for the license number, Montana’s telehealth statute covers people licensed under Montana law, and ABA telehealth also needs an approved Telehealth Exception Request.' },
      { q: 'What is the timely filing limit for Montana Medicaid ABA claims?', a: 'Twelve months from the date of service, or six months from a Medicare EOB or third-party adjustment notice when that is later.' },
    ],
  },

  'aetna-montana': {
    slug: 'aetna-montana',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA guide + precert of all ten codes, layered on Montana’s group mandate (through 18, caps allowed) and BA licensure.',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: ABA treatment codes are on the same precertification list, submitted mostly through Availity; the reauthorization interval is set per plan',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (benefits line on the card) or Availity: ask whether the group carries ABA precertification and what reauthorization interval it uses.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5 ASD (F84.0, F84.3–F84.9) from an appropriate provider; Aetna considers ABA experimental for other diagnoses',
      status: 'verified',
      cites: [S.aetnaGuide, S.aetnaCPB],
    },
    payer: 'Aetna in Montana',
    state: 'MT', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Montana',
    h1: 'Aetna ABA coverage in Montana: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Montana: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Montana families: the national medical necessity guide, precertification of every ABA code, Montana’s MCA 33-22-515 group mandate (through age 18, caps allowed), behavior analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Montana, an Aetna card means three layers: Aetna’s national ABA criteria, Montana’s autism mandate in MCA 33-22-515, and the plan’s funding type, which decides whether the mandate applies at all. Montana’s mandate is narrower than most (group coverage, through age 18, with dollar caps allowed), so the plan document matters more here than in many states.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s ABA medical necessity guide' },
      { label: 'State mandate', value: 'MCA 33-22-515 (Ch. 359, L. 2009); also binds health service corporations and HMOs' },
      { label: 'Mandate age', value: '18 and younger' },
      { label: 'Mandate caps', value: 'Plans may cap at $50,000/yr through age 8 and $20,000/yr ages 9–18' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans; individual policies are outside the statute’s group-coverage text' },
      { label: 'Licensure', value: 'Behavior analysts and assistant behavior analysts licensed by the MT Board of Psychologists (MCA 37-17-4); supervised technicians exempt' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Montana',
        body: [
          'Aetna’s ABA medical necessity guide requires a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) "obtained by an appropriate provider," functional impairment on a standardized scale from the past 12 months at least one standard deviation below the mean (or a significant risk of harm), and services "provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists." CPB 0554 (last review 11/26/2025) now only says ABA is experimental for non-ASD indications. Aetna’s behavioral health precertification list names all ten ABA codes, 97151 through 97158, 0362T and 0373T. The guide’s only state exhibit is Maryland’s; it notes that "Other state laws and regulations may apply in other states," and nothing in it addresses Montana.',
        ],
        cites: [S.aetnaGuide, S.aetnaCPB, S.aetnaPrecert],
      },
      {
        h2: 'The Montana mandate: what it guarantees',
        body: [MT_MANDATE_BODY],
        cites: [S.mca33_22_515, S.mca33_30_102, S.mca33_31_111],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [MT_LICENSURE_BODY],
        cites: [S.mca37_17_402, S.mca37_17_403, S.mca37_17_404, S.mca37_17_405, S.mca37_2_305, S.bacbLic, S.psyBoard, S.fee2025],
      },
      {
        h2: 'Claims: payment clock and Aetna’s rates',
        body: [
          MT_PROMPT_PAY_BODY,
          'Aetna publishes no ABA rate table. Its provider manual (6/26) says "The rates and compensation under your agreement are subject to the Aetna coding/claim edit policies," and when a member’s benefits run out the provider "cannot charge them more than the contracted rate." Get the rates and the filing limit from your Aetna agreement or Aetna provider services. The only public Montana benchmark is Montana Medicaid’s ABA fee schedule (97153 $11.36 per 15 minutes, July 2025).',
        ],
        cites: [S.mca33_18_232, S.aetnaOM, S.fee2025],
      },
    ],
    collect: [
      { title: 'Plan funding and type', desc: 'Fully insured group (MCA 33-22-515 applies) vs. self-funded ERISA or an individual policy (plan document governs).' },
      { title: 'Child’s age', desc: 'The mandate covers children 18 and younger, and lets plans cap ABA at $50,000/yr through 8 and $20,000/yr from 9 to 18. Ask how much of the cap is used.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date. Aetna’s policy is ASD-only.' },
      { title: 'Standardized functional measure', desc: 'One from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS).' },
      { title: 'Physician or psychologist order', desc: 'The mandate covers ABA "prescribed, provided, or ordered by a licensed physician or licensed psychologist."' },
    ],
    sources: [S.aetnaGuide, S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.aetnaTele, S.mca33_22_515, S.mca33_30_102, S.mca33_31_111, S.mca33_22_138, S.mca33_18_232, S.mca33_32_107, S.mca33_32_211, S.mca33_32_212, S.mca37_17_403, S.mca37_17_404, S.mca37_17_405, S.mca37_2_305, S.bacbLic, S.erisa, S.giManual, S.cfr433, S.fee2025],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s Network Participation Criteria (5/26): ABA services "must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board"; supervised staff may be a BCaBA "or a paraprofessional"; "A minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional is required "for each 10 hours of applied behavior analysis," plus the supervisor "onsite with the child at least one hour a month"; and all staff "must meet state requirements." In Montana that means a licensed behavior analyst (or ABPP-certified behavioral psychologist) supervises BCaBAs and technicians (MCA 37-17-405).',
        status: 'verified',
        cites: [S.aetnaNPC, S.aetnaGuide, S.mca37_17_405],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA policies (the medical necessity guide, CPB 0554, CPB 0648).',
        status: 'unverified',
        cites: [S.aetnaGuide, S.aetnaCPB],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap is published. The guide gives typical intensities of 10–25 hours a week for comprehensive and 1–20 for focused programs, with hours justified by the severity assessment; progress is evaluated every six months. Separately, a Montana group plan may impose the mandate’s annual dollar caps.',
        status: 'verified',
        cites: [S.aetnaGuide, S.mca33_22_515],
      },
      noteSignature: {
        value: 'Not addressed. Aetna sets treatment-plan content, not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'The participating-provider agreement and Aetna’s behavioral health documentation standards.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-neutral in Aetna’s guide; in inpatient, residential or partial hospitalization settings that level of care’s criteria apply and no separate ABA authorization is needed. The guide expects coordination with existing providers and the school district.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      billAsProvider: {
        value: 'Services must be "provided directly or billed by" a licensed behavior analyst (in states that license them), a BCBA, or a licensed psychologist where in scope. Montana licenses behavior analysts, so the Montana-licensed BCBA (or psychologist) is the billing credential.',
        status: 'verified',
        cites: [S.aetnaGuide, S.mca37_17_403],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national ABA guide sets no age cap; its age ranges are typical, not limiting.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.mca33_22_515],
        verifyVia: 'Live benefits verification on the member ID: establish fully insured group vs. self-funded or individual, then the plan’s own age and dollar terms.',
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
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale as tools used with clinical assessment. The ABA guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s national ABA policies require no referral; they require precertification of all ten ABA codes.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.mca33_22_515],
      },
      telehealth: {
        value: 'Aetna’s Telemedicine and Direct Patient Contact Payment Policy lists 97151, 97153, 97155, 97156 and 97157 as telehealth-eligible on commercial plans with modifier GT, 95 or FR (97152, 97154 and 97158 carry a single check, which reads as Medicare Advantage only); the posted policy shows a last review of June 2021, so treat the list as perishable. Aetna’s provider manual says Aetna Behavioral Health "offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out," and that providers must "ensure that they have the proper licensure based on state requirements." For state-regulated plans, MCA 33-22-138 requires coverage of otherwise-covered services delivered by telehealth, "equivalent to the coverage for services that are provided in person," with no restriction on where the patient or provider is; its provider list includes Title 37, chapter 17 licensees (psychologists and behavior analysts).',
        status: 'plan-dependent',
        cites: [S.aetnaTele, S.aetnaOM, S.mca33_22_138],
        verifyVia: 'Availity or the precertification line on the card: ask whether the plan is fully insured in Montana or self-funded (and opted out of telehealth), and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: MT_UR_TURNAROUND + ' Aetna publishes no Montana-specific ABA turnaround or reauthorization lead time.',
        status: 'plan-dependent',
        cites: [S.mca33_32_211, S.mca33_32_212, S.mca33_32_107, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Montana-regulated) or self-funded (ERISA), and what reauthorization lead time Aetna expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: MT_COB_COMMERCIAL,
        status: 'plan-dependent',
        cites: [S.giManual, S.cfr433],
        verifyVia: 'Ask Aetna at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Montana?', a: 'Yes, under its national ABA guide for ASD. Fully insured Montana group plans must also meet MCA 33-22-515 for children 18 and under; self-funded employer plans follow their own documents.' },
      { q: 'Does Montana’s autism mandate cap ABA?', a: 'It allows caps: a group plan may limit autism treatment to $50,000 a year through age 8 and $20,000 a year from 9 through 18. Ask the plan whether it uses them.' },
      { q: 'Does the Aetna ABA assessment need prior authorization in Montana?', a: 'Yes. 97151 and 97152 are on Aetna’s behavioral health precertification list with the treatment codes.' },
      { q: 'Does a BCBA need a Montana license to bill Aetna?', a: 'Montana licenses behavior analysts, and Aetna’s guide looks to the licensed behavior analyst in licensure states. Treating a child in Montana, including by telehealth, should be done under a Montana license.' },
    ],
  },

  'cigna-montana': {
    slug: 'cigna-montana',
    family: 'cigna',
    cardDesc: 'Evernorth EN0499 + autism resource guide (no PA on assessment codes), layered on Montana’s group mandate and BA licensure.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the policy covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: the completed assessment and treatment plan go with the Applied Behavior Analysis Prior Authorization Form',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD (F84.0–F84.9 except F84.2 Rett) under DSM-5-TR criteria; provisional or rule-out diagnoses do not count',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Montana',
    state: 'MT', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Montana',
    h1: 'Cigna / Evernorth ABA coverage in Montana: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Montana: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Montana families: policy EN0499, no PA on assessment codes, Montana’s MCA 33-22-515 group mandate (through age 18, caps allowed), behavior analyst licensure, claims timing, and what intake should verify.',
    intro: [
      'For an intake team in Montana, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, Montana’s autism mandate in MCA 33-22-515, and the plan’s funding type. Many Cigna members are on self-funded employer plans, which the Montana mandate does not reach, so check funding first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'State mandate', value: 'MCA 33-22-515 (Ch. 359, L. 2009); also binds health service corporations and HMOs' },
      { label: 'Mandate age', value: '18 and younger' },
      { label: 'Mandate caps', value: 'Plans may cap at $50,000/yr through age 8 and $20,000/yr ages 9–18' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans; individual policies are outside the statute’s group-coverage text' },
      { label: 'Licensure', value: 'Behavior analysts and assistant behavior analysts licensed by the MT Board of Psychologists (MCA 37-17-4); supervised technicians exempt' },
      { label: 'Fee schedule', value: 'Not public — Exhibit A of your Evernorth Provider Agreement; Provider Services 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Montana',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). The autism resource guide says prior authorization "is no longer required for assessment" codes 97151, 97152 and 0362T with an autism diagnosis, "as long as the provider is independently licensed or a Board Certified Behavior Analyst" and the policy covers ABA; treatment needs the completed assessment and treatment plan on the ABA Prior Authorization Form. Evernorth’s Administrative Guidelines carry a Montana Regulatory Addendum to its provider agreements, which "do not apply" to self-funded plans; the ABA criteria themselves contain nothing Montana-specific.',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin],
      },
      {
        h2: 'The Montana mandate: what it guarantees',
        body: [MT_MANDATE_BODY],
        cites: [S.mca33_22_515, S.mca33_30_102, S.mca33_31_111],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [MT_LICENSURE_BODY],
        cites: [S.mca37_17_402, S.mca37_17_403, S.mca37_17_404, S.mca37_17_405, S.mca37_2_305, S.bacbLic, S.psyBoard, S.fee2025],
      },
      {
        h2: 'Claims: filing limit, payment clock, appeals and Cigna’s rates',
        body: [
          MT_PROMPT_PAY_BODY,
          'Evernorth "will only consider claims submitted within 90 days of the date of service or as otherwise defined in your Provider Agreement," unless state law allows longer; for coordination of benefits the 90 days run from the primary payer’s EOB, and Medicaid claims get three years. Contract-related appeals "must be submitted within 180 days of the initial denial." Evernorth’s guidelines put the fee schedule in the contract: "For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement." Virtual services carry modifier 95, which "will not change the reimbursement." For a public benchmark, Montana Medicaid pays 97153 at $11.36 per 15 minutes (July 2025).',
        ],
        cites: [S.mca33_18_232, S.ebhAdmin, S.fee2025],
      },
    ],
    collect: [
      { title: 'Plan funding and type', desc: 'Fully insured group (MCA 33-22-515 applies) vs. self-funded ERISA or an individual policy (plan document governs).' },
      { title: 'Child’s age', desc: 'The mandate covers 18 and younger and allows annual caps; ask what the plan uses.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, plus the date of the most recent diagnosis. Provisional or rule-out diagnoses don’t count.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Physician or psychologist order', desc: 'The mandate covers ABA "prescribed, provided, or ordered by a licensed physician or licensed psychologist."' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.mca33_22_515, S.mca33_30_102, S.mca33_31_111, S.mca33_22_138, S.mca33_18_232, S.mca33_32_107, S.mca33_32_211, S.mca33_32_212, S.mca37_17_403, S.mca37_17_404, S.mca37_17_405, S.mca37_2_305, S.bacbLic, S.erisa, S.giManual, S.cfr433, S.fee2025],
    deliveryRules: {
      supervision: {
        value: 'EN0499: case supervision by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health clinician with ABA training, at one to two hours per ten hours of direct treatment, and at least one to two hours a week when direct treatment is 10 hours a week or less. Montana law adds that BCaBAs and technicians must be supervised by a licensed behavior analyst or ABPP-certified behavioral psychologist (MCA 37-17-405).',
        status: 'verified',
        cites: [S.en0499, S.mca37_17_405],
      },
      concurrentBilling: {
        value: '"Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)."',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap is published. All ABA codes bill in 15-minute units and only as 97151–97158, 0362T and 0373T; intensity must reflect severity, goals and response to treatment. A Montana group plan may also apply the mandate’s annual dollar caps.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.mca33_22_515],
      },
      noteSignature: {
        value: 'Each service record needs the date and time, location, a description of the service, who was present, and the "Name, credential (if applicable), and signature of ABA provider who rendered the service."',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'Data must be reported separately by setting (home, clinic, school, community). Services "primarily educational or vocational in nature" are not covered, nor are services that are the responsibility of the setting (such as a classroom aide).',
        status: 'verified',
        cites: [S.en0499],
      },
      billAsProvider: {
        value: '"Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." On a CMS-1500 the rendering provider prints their name in box 31 and only a BCBA or other licensed provider goes in box 33; electronic claims use payer ID 62308.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; it says access to intervention "should not be restricted by age." Age terms come from the benefit plan and any controlling mandate.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.mca33_22_515],
        verifyVia: 'Live benefits verification, or the Evernorth Autism Care Coordinator team at 877.279.7603: establish fully insured group vs. self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs the date it was most recently made, and provisional or rule-out diagnoses don’t count. The clocks run on data: a standardized instrument and baseline data within 60 days before treatment, and current data within 60 days of a continued-treatment request.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A professional "licensed to practice independently and whose licensure board considers diagnostics" within scope, applying DSM-5-TR criteria; the request must give the diagnostician’s name, credentials and type of licensure.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated; assessments must be standardized and the current edition (the policy’s example: Vineland-3, not Vineland-II).',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral. Assessments 97151, 97152 and 0362T need no PA with an autism diagnosis when the provider is independently licensed or a BCBA; treatment needs the assessment and plan on the ABA PA form.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.mca33_22_515],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" (autism resource guide), and EN0499 allows in-person, telehealth or hybrid delivery. Bill modifier 95; Evernorth says providers "must meet all state requirements to provide virtual behavioral services, including any licenses." For state-regulated plans, MCA 33-22-138 requires telehealth coverage equivalent to in-person care with no site restriction, and its provider list includes behavior analysts licensed under Title 37, chapter 17.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ebhAdmin, S.mca33_22_138],
      },
      authTurnaround: {
        value: MT_UR_TURNAROUND + ' Evernorth encourages ABA authorization requests "up to 30 days in advance of or two weeks after the start date of service."',
        status: 'plan-dependent',
        cites: [S.mca33_32_211, S.mca33_32_212, S.mca33_32_107, S.erisa, S.cignaARG],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Montana-regulated) or self-funded (ERISA), and what reauthorization lead time Evernorth expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: MT_COB_COMMERCIAL,
        status: 'plan-dependent',
        cites: [S.giManual, S.cfr433],
        verifyVia: 'Ask Cigna/Evernorth at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Montana?', a: 'Yes, under national policy EN0499 for ASD. Fully insured Montana group plans must also meet MCA 33-22-515 for children 18 and under; self-funded employer plans follow their own documents.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in Montana?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'What is Cigna’s timely filing limit for ABA claims?', a: 'Evernorth considers claims submitted within 90 days of the date of service unless your agreement or state law allows longer.' },
      { q: 'Can a BCBA licensed in another state treat a Cigna member in Montana by telehealth?', a: 'Evernorth requires providers to meet all state licensing requirements for virtual services, and Montana licenses behavior analysts, so get a Montana license first.' },
    ],
  },

  'unitedhealthcare-montana': {
    slug: 'unitedhealthcare-montana',
    family: 'unitedhealthcare',
    cardDesc: 'Optum ABA criteria (no Montana state supplement), PA on ABA, three telehealth codes, layered on Montana’s group mandate and BA licensure.',
    assessmentPA: {
      value: 'Required: Optum’s ABA Supplemental Clinical Criteria say "Prior authorization is required for ABA" unless otherwise specified or mandated by contract or law',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required; the review interval is set per authorization',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express or the behavioral health number on the card: ask what review interval will be set on this member’s ABA authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5-TR ASD confirmed by the diagnosing clinician with at least one validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Montana',
    state: 'MT', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Montana',
    h1: 'UnitedHealthcare / Optum ABA coverage in Montana: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Montana: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Montana families: Optum’s ABA criteria and prior authorization, the three-code telehealth rule, Montana’s MCA 33-22-515 group mandate (through age 18, caps allowed), behavior analyst licensure, and claims timing.',
    intro: [
      'For an intake team in Montana, a UnitedHealthcare card means three layers: Optum Behavioral Health’s national ABA criteria, Montana’s autism mandate in MCA 33-22-515, and the plan’s funding type. Montana Medicaid has no managed care plans, so a UHC card here is commercial (or Medicare).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'MCA 33-22-515 (Ch. 359, L. 2009); also binds health service corporations and HMOs' },
      { label: 'Mandate age', value: '18 and younger' },
      { label: 'Mandate caps', value: 'Plans may cap at $50,000/yr through age 8 and $20,000/yr ages 9–18' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans; individual policies are outside the statute’s group-coverage text' },
      { label: 'Licensure', value: 'Behavior analysts and assistant behavior analysts licensed by the MT Board of Psychologists (MCA 37-17-4); supervised technicians exempt' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Montana',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026), which require prior authorization for ABA and look hard at use below 80% of authorized hours. Optum’s ABA State Mandates supplement (effective July 2026) covers Arizona, California, Connecticut, Florida, Indiana, Kansas Medicaid, Kentucky, Massachusetts Medicaid, New Jersey, New York Medicaid, Ohio and Pennsylvania; Montana is not on it, so no Montana-specific criteria modify the commercial policy. Optum’s National Network Manual (effective Sept. 1, 2026) does list Montana regulatory requirements for provider agreements.',
        ],
        cites: [S.optumSCC, S.optumSM, S.optumNNM],
      },
      {
        h2: 'The Montana mandate: what it guarantees',
        body: [MT_MANDATE_BODY],
        cites: [S.mca33_22_515, S.mca33_30_102, S.mca33_31_111],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [MT_LICENSURE_BODY],
        cites: [S.mca37_17_402, S.mca37_17_403, S.mca37_17_404, S.mca37_17_405, S.mca37_2_305, S.bacbLic, S.psyBoard, S.fee2025],
      },
      {
        h2: 'Claims: filing limit, payment clock, appeals and Optum’s rates',
        body: [
          MT_PROMPT_PAY_BODY,
          'Optum’s National Network Manual says "All information necessary to process claims must be received by Optum no more than 90 calendar days from the date of service, or as allowed by state or federal law or the member’s specific benefit plan," and a provider may not bill the member for a late claim. Payment is capped at the "Fee Maximum," and "Reimbursement to clinicians is based upon licensure rather than degree." Optum’s commercial ABA reimbursement policy (2022RP501A) makes the credential part of every line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a doctoral-level provider; indirect work has no separate code. For a public benchmark, Montana Medicaid pays 97153 at $11.36 per 15 minutes (July 2025).',
        ],
        cites: [S.mca33_18_232, S.optumNNM, S.optumReimb, S.fee2025],
      },
    ],
    collect: [
      { title: 'Plan funding and type', desc: 'Fully insured group (MCA 33-22-515 applies) vs. self-funded ERISA or an individual policy (plan document governs).' },
      { title: 'Child’s age', desc: 'The mandate covers 18 and younger and allows annual caps; ask what the plan uses.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD and severity, confirmed with a validated tool (ADI-R, ADOS-2 and others).' },
      { title: 'Physician or psychologist order', desc: 'The mandate covers ABA "prescribed, provided, or ordered by a licensed physician or licensed psychologist."' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumReimb, S.optumNNM, S.mca33_22_515, S.mca33_30_102, S.mca33_31_111, S.mca33_22_138, S.mca33_18_232, S.mca33_32_107, S.mca33_32_211, S.mca33_32_212, S.mca37_17_403, S.mca37_17_404, S.mca37_17_405, S.mca37_2_305, S.bacbLic, S.erisa, S.giManual, S.cfr433, S.fee2025],
    deliveryRules: {
      supervision: {
        value: 'Optum’s criteria require direct case supervision of 1–2 hours for every 10 hours of direct treatment, consistent with practice standards; technicians work under a BCBA or licensed behavioral health clinician and "should be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate." Optum does not recommend parents serving as their own child’s RBT. Montana law: a licensed behavior analyst or ABPP-certified behavioral psychologist supervises (MCA 37-17-405).',
        status: 'verified',
        cites: [S.optumSCC, S.mca37_17_405],
      },
      concurrentBilling: {
        value: 'Allowed for different people. Optum’s commercial ABA reimbursement policy: 97153 or 97154 may be reported with 97155 concurrently "as long as the criteria in the descriptors of both codes are met," but "A single QHP may not report 97153 or 97154 with 97155 concurrently." 97155 and 97156 on the same day must be at different times.',
        status: 'verified',
        cites: [S.optumReimb],
      },
      dailyLimits: {
        value: 'Optum’s commercial maximum units per day: 97151 32; 97152 16; 97153 32; 97154 18; 97155 24; 97156, 97157, 97158 and 0362T 16; 0373T 32. Billing beyond them risks non-payment or recovery. A Montana group plan may also apply the mandate’s annual dollar caps.',
        status: 'verified',
        cites: [S.optumReimb, S.mca33_22_515],
      },
      noteSignature: {
        value: 'Not addressed. The criteria set what must be documented for coverage, not who signs a session note or when.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual documentation standards and the participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'ABA is provided at the least restrictive, most clinically appropriate level. Not covered: services that are not ABA "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA; school coordination is allowed.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      billAsProvider: {
        value: 'A credentialed ABA provider is a master’s- or doctoral-level BCBA or a licensed behavioral health clinician credentialed for ABA; BCaBAs and technicians work under that provider. Each line carries the rendering credential modifier (HM RBT, HN BCaBA, HO master’s-level, HP doctoral).',
        status: 'verified',
        cites: [S.optumSCC, S.optumReimb],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Optum’s criteria carry no age criterion; the member’s benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.mca33_22_515],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish fully insured group vs. self-funded first.',
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
        value: 'At least one validated tool from a non-exhaustive list: first-level screens (M-CHAT and others), second-level screens (CARS/CARS-2, RITA-T, STAT) and formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate referral in Optum’s criteria; ABA needs prior authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.mca33_22_515],
      },
      telehealth: {
        value: 'Three codes. Optum’s Telehealth Billing guide (updated September 2025), commercial: "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157." So the 97151 assessment and technician 97153 are not on the list. Bill POS 10 (patient at home) or 02 (elsewhere); POS 11 is not a telehealth POS. For state-regulated plans, MCA 33-22-138 requires telehealth coverage of otherwise-covered services "equivalent to the coverage for services that are provided in person," and its provider list includes Title 37, chapter 17 licensees; ask Optum how it applies the three-code list to a fully insured Montana plan.',
        status: 'verified',
        cites: [S.optumTele, S.optumSCC, S.mca33_22_138],
      },
      authTurnaround: {
        value: MT_UR_TURNAROUND + ' Optum publishes no Montana-specific ABA turnaround or reauthorization lead time.',
        status: 'plan-dependent',
        cites: [S.mca33_32_211, S.mca33_32_212, S.mca33_32_107, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Montana-regulated) or self-funded (ERISA), and what reauthorization lead time Optum expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: MT_COB_COMMERCIAL,
        status: 'plan-dependent',
        cites: [S.giManual, S.cfr433],
        verifyVia: 'Ask UnitedHealthcare/Optum at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Montana?', a: 'Yes, under Optum’s national ABA criteria for ASD. Fully insured Montana group plans must also meet MCA 33-22-515 for children 18 and under; self-funded plans follow their own documents.' },
      { q: 'Does Optum have Montana-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement (July 2026) does not list Montana.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in Montana?', a: 'Optum’s commercial telehealth guide allows only 97155, 97156 and 97157 by telehealth, billed POS 10 or 02. Fully insured Montana plans are also subject to MCA 33-22-138’s telehealth parity rule, so ask Optum how it applies.' },
      { q: 'Can the BCBA and RBT both bill for the same time with UnitedHealthcare?', a: 'Yes, if they are different people: Optum allows 97153 or 97154 with 97155 concurrently when both code descriptors are met, but one QHP cannot bill both.' },
      { q: 'What is UnitedHealthcare’s timely filing limit in Montana?', a: 'Optum’s manual says 90 calendar days from the date of service unless state or federal law or the member’s plan allows longer.' },
    ],
  },

  'blue-cross-blue-shield-montana': {
    slug: 'blue-cross-blue-shield-montana',
    family: 'bcbs',
    cardDesc: 'HCSC Blue plan: ABA PA on treatment codes, MCG criteria, 36-month diagnosis window, no age/dollar/visit limits since 2021.',
    assessmentPA: {
      value: '97151 and 97152 are not on BCBSMT’s 2026 behavioral health PA code list (updated July 2026), but its ABA process asks for an ABA Initial Assessment Request two weeks before the assessment, and that form must arrive within 30 days of the assessment start or the claim goes through a separate process',
      status: 'plan-dependent',
      cites: [S.bcbsmtCodes, S.bcbsmtITR, S.bcbsmtMgmt],
      verifyVia: 'BCBSMT Behavioral Health Call Center, 1-855-313-8909 (FEP 1-877-885-3751), or Availity: confirm whether this member’s plan needs the Initial Assessment Request before 97151/97152.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Required: 97153–97158, 0362T and 0373T are on BCBSMT’s 2026 behavioral health PA code list, requested on the ABA Clinical Service Request Form (fax 855-649-9681) up to 60 days before the start date',
      status: 'verified',
      cites: [S.bcbsmtCodes, S.bcbsmtCSR, S.bcbsmtPA],
    },
    dxRequired: {
      value: 'Yes: ABA is "covered only for Autism Spectrum Disorder (ASD) diagnoses," confirmed by an appropriate diagnostician; the request forms require a diagnosis "not older than 36 months"',
      status: 'verified',
      cites: [S.bcbsmtMgmt, S.bcbsmtCSR, S.bcbsmtITR],
    },
    payer: 'Blue Cross and Blue Shield of Montana',
    state: 'MT', kind: 'commercial',
    pill: 'Payer Guide · Blue Cross and Blue Shield of Montana',
    h1: 'Blue Cross and Blue Shield of Montana ABA coverage: the intake guide.',
    metaTitle: 'Blue Cross and Blue Shield of Montana ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Blue Cross and Blue Shield of Montana (HCSC) covers ABA: no age, dollar or visit limits since 2021, prior authorization on treatment codes, MCG criteria, a 36-month diagnosis window, staff and supervision rules, telehealth supervision attestation, and Montana’s mandate and licensure.',
    intro: [
      'Blue Cross and Blue Shield of Montana (BCBSMT) is Montana’s Blue plan and a division of Health Care Service Corporation. Its ABA program is more generous than Montana’s mandate: since January 1, 2021 BCBSMT says ABA for autism "is now covered as standard claims administration subject to copays, coinsurance and deductible without age, dollar or visit limits," on fully insured plans, the Federal Employee Program and ASO plans, though ASO (self-funded) groups "may request to ‘opt out’ of ABA coverage."',
      'The mechanics run through BCBSMT’s own Behavioral Health team: an ABA Initial Assessment Request, then the ABA Clinical Service Request Form for treatment and each concurrent review, with medical necessity judged on MCG care guidelines. The forms carry the details that most often trip up intake: a diagnosis no older than 36 months, an assessment within the last 30 days, and an active license in the state where the child is treated.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD only; no age, dollar or visit limits since 1/1/2021 (ASO groups may opt out)' },
      { label: 'Prior auth', value: 'Treatment codes 97153–97158, 0362T, 0373T; Initial Assessment Request for 97151/97152' },
      { label: 'Criteria', value: 'MCG care guidelines plus BCBSMT medical policy' },
      { label: 'State mandate', value: 'MCA 33-22-515 (Ch. 359, L. 2009); also binds health service corporations and HMOs' },
      { label: 'Mandate age', value: '18 and younger (BCBSMT’s own ABA benefit has no age limit)' },
      { label: 'Mandate caps', value: 'Plans may cap at $50,000/yr through age 8 and $20,000/yr ages 9–18; BCBSMT says it removed dollar limits in 2021' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans; individual policies are outside the statute’s group-coverage text' },
      { label: 'Licensure', value: 'Behavior analysts licensed by the MT Board of Psychologists (MCA 37-17-4); BCBSMT requires the supervisor’s active license in the treatment state' },
      { label: 'Fee schedule', value: 'Not public — contracted rates; coding and compensation policies sit in Availity' },
    ],
    sections: [
      {
        h2: 'Prior authorization: assessment request, then the Clinical Service Request',
        body: [
          'BCBSMT asks providers to "notify" it of every ABA request. The initial process confirms that the member "has a confirmed autism diagnosis by an appropriate diagnostician," that the provider is qualified, that the member has ABA benefits, and that "the initial treatment plan meets medical necessity," using the ABA Clinical Service Request Form and the ABA Initial Assessment Request. The 2026 behavioral health PA code list (updated July 2026) names 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T; 97151 and 97152 are not on it, but the Initial Assessment Request asks for them and should be sent "at least two weeks before requested start date" and "received within 30 days of the start date of your assessment."',
          'For treatment, the Clinical Service Request goes in "at least two weeks before requested start date" and "can be submitted up to 60 days prior"; a form submitted after the start date sends the claim through BCBSMT’s normal process with instructions to follow. An initial request needs the diagnostic evaluation report, baseline and skills assessment results and a comprehensive treatment plan; a concurrent request needs a skills reassessment and updated plan. A reassessment package "will be authorized every 6 months." A claim submitted without the initial or concurrent authorization is denied and may need a retroactive review. Medical necessity is judged on MCG care guidelines and BCBSMT medical policies, which are licensed and not public.',
        ],
        cites: [S.bcbsmtMgmt, S.bcbsmtCodes, S.bcbsmtITR, S.bcbsmtCSR, S.bcbsmtMNC, S.bcbsmtPA],
      },
      {
        h2: 'Staff, supervision and telehealth supervision',
        body: [
          'BCBSMT’s Clinical Service Request sets line-staff rules for 1:1 therapy: 18 or older, a high school diploma or GED, a criminal background check before working, 40 hours of training in ASD and evidence-based behavioral techniques, and "on-going supervisory oversight by the BCBA or ABA treatment supervisor for a minimum of 5% of hours directly worked with members." The supervisor attests to following BACB supervision guidelines and to having "an active license in the state where this member’s services are rendered." Training time is not billable.',
          'Supervision by telehealth needs its own approval: the ABA Supervision via Telehealth Request & Attestation asks whether the member is in a rural Health Professional Shortage Area or otherwise meets BCBSMT’s telehealth supervision standards, requires written member consent, and commits the provider to make "the functional assessment every six months to be ‘face to face.’"',
        ],
        cites: [S.bcbsmtCSR, S.bcbsmtTele],
      },
      {
        h2: 'The Montana mandate: what it guarantees',
        body: [MT_MANDATE_BODY],
        cites: [S.mca33_22_515, S.mca33_30_102, S.mca33_31_111],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [MT_LICENSURE_BODY],
        cites: [S.mca37_17_402, S.mca37_17_403, S.mca37_17_404, S.mca37_17_405, S.mca37_2_305, S.bacbLic, S.psyBoard, S.fee2025],
      },
      {
        h2: 'Claims: payment clock, filing and rates',
        body: [
          MT_PROMPT_PAY_BODY,
          'BCBSMT’s professional claims go on the CMS-1500 or electronically through Availity. Its Medical Provider Manual, which "explains the process to submit claims" and the payment process, and its Coding and Compensation Policies are published only inside Availity’s Payer Spaces, so the timely filing limit and ABA coding rules have to be read there. Rates are contracted and unpublished; the public Montana benchmark is Montana Medicaid’s ABA schedule (97153 $11.36 per 15 minutes, July 2025).',
        ],
        cites: [S.mca33_18_232, S.bcbsmtManuals, S.fee2025],
      },
    ],
    collect: [
      { title: 'Plan funding and type', desc: 'Fully insured, FEP or ASO. ASO groups may opt out of ABA, so check benefits on every self-funded member.' },
      { title: 'Diagnosis report', desc: 'ASD diagnosis no older than 36 months, with the diagnostician’s type (PCP or specialist) and NPI, initial and most recent evaluation dates.' },
      { title: 'Current assessment', desc: 'Skills assessment within the last 30 days on one instrument used for the whole episode (VB-MAPP, ABLLS, AFLS, ABAS or Vineland).' },
      { title: 'School and therapy schedule', desc: 'The request form asks for the ABA schedule by location, the school and other-therapy schedule, and whether an IEP or 504 plan is in place.' },
      { title: 'Supervisor license', desc: 'The supervising BCBA must hold an active license in the state where the child is treated.' },
    ],
    sources: [S.bcbsmtMgmt, S.bcbsmtPA, S.bcbsmtCodes, S.bcbsmtITR, S.bcbsmtCSR, S.bcbsmtTele, S.bcbsmtBH, S.bcbsmtMNC, S.bcbsmtTelePage, S.bcbsmtManuals, S.mca33_22_515, S.mca33_30_102, S.mca33_31_111, S.mca33_22_138, S.mca33_18_232, S.mca33_32_107, S.mca33_32_211, S.mca33_32_212, S.mca37_17_403, S.mca37_17_404, S.mca37_17_405, S.mca37_2_305, S.bacbLic, S.erisa, S.giManual, S.cfr433, S.fee2025],
    deliveryRules: {
      supervision: {
        value: 'Line staff need "on-going supervisory oversight by the BCBA or ABA treatment supervisor for a minimum of 5% of hours directly worked with members," and the supervisor attests to following BACB supervision guidelines with an active license in the state of service. Montana law: a licensed behavior analyst or ABPP-certified behavioral psychologist supervises BCaBAs and technicians (MCA 37-17-405).',
        status: 'verified',
        cites: [S.bcbsmtCSR, S.mca37_17_405],
      },
      concurrentBilling: {
        value: 'Not stated in BCBSMT’s public ABA documents; its coding and compensation policies are published only in Availity.',
        status: 'unverified',
        cites: [S.bcbsmtMgmt, S.bcbsmtManuals],
        verifyVia: 'BCBSMT Coding and Compensation Policies in Availity Payer Spaces (Plan Documents Viewer), or the BH Call Center, 1-855-313-8909.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'BCBSMT says ABA has been covered "without age, dollar or visit limits" since 1/1/2021; hours are requested per week (focused or comprehensive) and set by authorization. No per-day unit limit is published outside Availity.',
        status: 'verified',
        cites: [S.bcbsmtMgmt, S.bcbsmtCSR],
      },
      noteSignature: {
        value: 'Not stated in BCBSMT’s public ABA documents.',
        status: 'unverified',
        cites: [S.bcbsmtCSR],
        verifyVia: 'BCBSMT Medical Provider Manual in Availity Payer Spaces, or Network Management.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'The request form schedules ABA by location (office/clinic, home, community/daycare, school, other) and asks for clinical justification for "services rendered at a location other than office or home." Telehealth supervision needs a separate approved attestation.',
        status: 'verified',
        cites: [S.bcbsmtCSR, S.bcbsmtTele],
      },
      billAsProvider: {
        value: 'The forms name a "Rendering Qualified Healthcare Provider (QHP)," a master’s or PhD-level clinician or state-recognized credential with a license or certification number, and the QHP certifies that the line therapists "for whom I, or an outpatient mental health agency or clinic, will bill" meet BCBSMT’s staff requirements. Whether technician time is billed under the QHP’s NPI is not stated publicly.',
        status: 'plan-dependent',
        cites: [S.bcbsmtCSR, S.bcbsmtITR],
        verifyVia: 'BCBSMT Network Management or the Coding and Compensation Policies in Availity: confirm the rendering NPI for technician-delivered 97153.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'None in BCBSMT’s ABA benefit since 1/1/2021 ("without age, dollar or visit limits"), though ASO groups may opt out of ABA altogether.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.bcbsmtMgmt, S.mca33_22_515],
        verifyVia: 'BCBSMT BH Call Center, 1-855-313-8909 (FEP 1-877-885-3751), or Availity: confirm ABA benefits, especially on ASO plans.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: '"Current diagnostic required not older than 36 months," and the current skills assessment "must be within the last 30 days."',
        status: 'verified',
        cites: [S.bcbsmtCSR, S.bcbsmtITR],
      },
      diagnosingProviders: {
        value: 'An "appropriate diagnostician." The forms accept a PCP (family practice, internal medicine, pediatrics) or a specialized ASD-diagnosing provider (developmental-behavioral or neurodevelopmental pediatrics, child neurology, adult or child psychiatry, licensed clinical psychology, or other specified).',
        status: 'verified',
        cites: [S.bcbsmtMgmt, S.bcbsmtCSR],
      },
      diagnosticTools: {
        value: 'No diagnostic instrument is named. For treatment, choose one recognized instrument for the whole episode "such as the VB MAPP, ABLLS, AFLS, ABAS or the Vineland."',
        status: 'verified',
        cites: [S.bcbsmtCSR],
      },
      referral: {
        value: 'No separate referral is required, but the Clinical Service Request has the diagnostic practitioner (or the ABA supervisor after confirming with the diagnostician) certify that they are "recommending ABA services."' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.bcbsmtCSR, S.mca33_22_515],
      },
      telehealth: {
        value: 'ABA supervision by telehealth needs BCBSMT’s Supervision via Telehealth Request & Attestation (rural HPSA or BCBSMT’s telehealth supervision standards, written consent, face-to-face functional assessment every six months). BCBSMT’s Telemedicine Coding and Compensation Policy and covered-code list are in Availity. For state-regulated plans, MCA 33-22-138 requires telehealth coverage equivalent to in-person care; self-funded groups set their own rules.',
        status: 'plan-dependent',
        cites: [S.bcbsmtTele, S.bcbsmtTelePage, S.mca33_22_138],
        verifyVia: 'BCBSMT Telemedicine Coding and Compensation Policy in Availity, or the BH Call Center, 1-855-313-8909: ask which ABA codes BCBSMT pays by telehealth beyond supervision.',
        blocker: 'document',
      },
      authTurnaround: {
        value: MT_UR_TURNAROUND + ' BCBSMT asks for ABA forms at least two weeks before the requested start date and mails a prior-authorization letter to the member and provider.',
        status: 'plan-dependent',
        cites: [S.mca33_32_211, S.mca33_32_212, S.mca33_32_107, S.erisa, S.bcbsmtMgmt, S.bcbsmtCSR],
        verifyVia: 'BCBSMT BH Call Center, 1-855-313-8909: confirm whether the plan is fully insured or ASO and the expected decision time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: MT_COB_COMMERCIAL,
        status: 'plan-dependent',
        cites: [S.giManual, S.cfr433],
        verifyVia: 'Ask BCBSMT at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Blue Cross and Blue Shield of Montana cover ABA?', a: 'Yes, for autism spectrum disorder. BCBSMT says it has covered ABA without age, dollar or visit limits since January 1, 2021 on fully insured, FEP and ASO plans, though ASO groups can opt out.' },
      { q: 'Does BCBSMT require prior authorization for the ABA assessment?', a: '97151 and 97152 are not on its 2026 PA code list, but BCBSMT asks for an ABA Initial Assessment Request two weeks before the assessment. Treatment codes need prior authorization on the Clinical Service Request Form.' },
      { q: 'How recent must the autism diagnosis be for BCBSMT?', a: 'Not older than 36 months, and the skills assessment must be within the last 30 days.' },
      { q: 'What supervision does BCBSMT require for ABA technicians?', a: 'At least 5% of the hours a line therapist works directly with members, by the BCBA or ABA treatment supervisor, who must hold an active license in the state where services are delivered.' },
      { q: 'Can a BCBA licensed in another state serve BCBSMT members in Montana?', a: 'BCBSMT requires the supervisor’s active license in the state where services are rendered, and Montana licenses behavior analysts, so a Montana license is needed.' },
    ],
  },
};

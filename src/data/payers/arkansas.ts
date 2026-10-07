import type { PayerConfig, PayerSource } from './types.js';

/* Arkansas — researched October 2026 from primary sources only.
   humanservices.arkansas.gov answers a full Chrome user agent with an nginx 403, but serves its
   manual .docx files and fee-schedule PDFs to a bare `curl -A 'Mozilla/5.0'`; the HTML pages read
   through WebFetch. Statutes come from the enrolled Acts on arkleg.state.ar.us
   (/Home/FTPDocument?path=/ACTS/<year>/Public/ACT<n>.pdf); the codified Arkansas Code is hosted
   on a Lexis JS site and law.justia.com / codes.findlaw.com returned 403, so current codified text
   is NOT quoted anywhere below. r.jina.ai refused this run (IP reputation block).

   Structure, as the manuals state it: ABA is an EPSDT benefit (18 months to 21). Children who are
   not in a PASSE are fee-for-service Medicaid with a ConnectCare PCP, and Acentra Health reviews
   their ABA prior authorizations. Children assessed Tier II/III for behavioral-health or
   developmental-disability needs are assigned to one of four PASSEs (Arkansas Total Care, CareSource
   PASSE, Empower Healthcare Solutions, Summit Community Care), which must cover every Section II
   service, ABA included, and authorize it themselves. */

const S: Record<string, PayerSource> = {
  abaII: { title: 'Arkansas Medicaid — Applied Behavior Analysis Therapy Provider Manual, Section II (transmittal ABATHERAPY-NEW-23, effective 1-1-25)', url: 'https://humanservices.arkansas.gov/wp-content/uploads/ABATHERAPY_II.docx' },
  abaFee: { title: 'Arkansas Medicaid — Applied Behavior Analysis (ABA) Therapy Fee Schedule, Provider Type 90 (run date 1/1/25)', url: 'https://humanservices.arkansas.gov/wp-content/uploads/ABATHERAPY-fees.pdf' },
  abaPage: { title: 'Arkansas DHS — Applied Behavior Analysis (ABA) Therapy provider manual page (Sections I–V, update log)', url: 'https://humanservices.arkansas.gov/divisions-shared-services/medical-services/helpful-information-for-providers/billing-manuals-rate-sheets/abatherapy-prov/' },
  secI: { title: 'Arkansas Medicaid Provider Manual, Section I — General Policy (sections updated through 7-1-26)', url: 'https://humanservices.arkansas.gov/wp-content/uploads/Section_I.docx' },
  secIII: { title: 'Arkansas Medicaid Provider Manual, Section III — Billing Procedures', url: 'https://humanservices.arkansas.gov/wp-content/uploads/Section_III.docx' },
  passeII: { title: 'Arkansas Medicaid — PASSE Program Provider Manual, Section II (latest transmittal PASSE-1-25, 7-1-26)', url: 'https://humanservices.arkansas.gov/wp-content/uploads/PASSE_II.docx' },
  passeList: { title: 'Arkansas DHS — Help choosing a PASSE (the four PASSEs, phone numbers and websites)', url: 'https://humanservices.arkansas.gov/divisions-shared-services/medical-services/healthcare-programs/passe/help-choosing-medical-plan/' },
  acentra: { title: 'Acentra Health (Arkansas DHS QIO-like reviewer) — EPSDT: Applied Behavior Analysis (ABA)', url: 'https://ar.acentra.com/applied-behavioral-analysis-aba' },
  acentraPPT: { title: 'Acentra Health — Applied Behavior Analysis provider training deck (updated November 2025, posted 1/2026)', url: 'https://ar.acentra.com/wp-content/uploads/sites/12/2026/01/Acentra-ABA-PPT-1.2.26.pdf' },
  csMM: { title: 'CareSource PASSE Medical Policy AR PASSE-MM-1227 — Applied Behavior Analysis for Autism Spectrum Disorder (effective 05/01/2026)', url: 'https://www.caresource.com/documents/passe-ar-policy-medical-mm-1227-20260501.pdf' },
  csPY: { title: 'CareSource PASSE Reimbursement Policy AR PASSE-PY-1616 — Applied Behavior Analysis for Autism Spectrum Disorder (effective 05/01/2026)', url: 'https://www.caresource.com/documents/passe-ar-policy-reimburse-py-1616-20260501.pdf' },
  csPM: { title: 'CareSource PASSE — Provider Manual 2025–2026', url: 'https://www.caresource.com/documents/ar-pas-p-305805-arkansas-passe-provider-manual_final.pdf' },
  csAdd: { title: 'CareSource PASSE — Provider Manual Addendum 2026 (provider reconsiderations: 65 calendar days)', url: 'https://www.caresource.com/documents/ar-pas-p-5470348-provider-manual-addendum-2026.pdf' },
  atcPolicy: { title: 'Arkansas Total Care Clinical Policy AR.CP.BH.104 — Applied Behavior Analysis (last revised 07/26)', url: 'https://www.arkansastotalcare.com/content/dam/centene/artotalcare/policies/clinical-policies/AR.CP.BH.104.pdf' },
  atcDoc: { title: 'Arkansas Total Care Clinical Policy AR.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements (last revised 07/26)', url: 'https://www.arkansastotalcare.com/content/dam/centene/artotalcare/policies/clinical-policies/AR.CP.BH.105.pdf' },
  atcPM: { title: 'Arkansas Total Care — 2026 Provider and Billing Manual', url: 'https://www.arkansastotalcare.com/content/dam/centene/artotalcare/pdfs/508_ARTC25-H-287_2026-ARTC-Provider-Manual.pdf' },
  atcPolicies: { title: 'Arkansas Total Care — Clinical and payment policies (index; the Pre-Auth Check tool is linked from the provider pages)', url: 'https://www.arkansastotalcare.com/providers/resources/clinical-payment-policies.html' },
  empPA: { title: 'Empower Healthcare Solutions — Prior Authorization List page (BH/IDD PA form, fax 800-886-6839)', url: 'https://getempowerhealth.com/for-providers/utilization-management/prior-authorization-list/' },
  empPAList: { title: 'Empower Healthcare Solutions — Full PA code list (PA-List-4.24.26): 97151, 97153, 97155, 97156 “AUTISM-EPSDT”, PA required', url: 'https://getempowerhealth.com/wp-content/uploads/2026/04/PA-List-4.24.26-2.xlsx' },
  empHB: { title: 'Empower Healthcare Solutions — Provider Handbook (Version 9.08.2026)', url: 'https://getempowerhealth.com/wp-content/uploads/2026/09/Empowerproviderhandbook9926.pdf' },
  sccPM: { title: 'Summit Community Care — Provider Manual (AR-SMT-CD-PM-010787-26, July 1, 2026)', url: 'https://provider.summitcommunitycare.com/docs/gpp/ARAR_CAID_ProviderManual.pdf' },
  sccPA: { title: 'Summit Community Care — List of items and services that require prior authorization (updated 2/11/2026)', url: 'https://www.summitcommunitycare.com/arkansas-passe/ar_medicaid_priorauthservices.pdf' },
  act196: { title: 'Act 196 of 2011 (HB 1315) — created Ark. Code § 23-99-418, autism spectrum disorder coverage (enrolled text)', url: 'https://www.arkleg.state.ar.us/Home/FTPDocument?path=%2FACTS%2F2011%2FPublic%2FACT196.pdf' },
  act432: { title: 'Act 432 of 2025 (HB 1245) — Arkansas Behavior Analyst Registration Act, Ark. Code § 17-97-601 et seq. (enrolled text, approved 4/3/25)', url: 'https://www.arkleg.state.ar.us/Home/FTPDocument?path=%2FACTS%2F2025R%2FPublic%2FACT432.pdf' },
  act1106: { title: 'Act 1106 of 2015 (SB 318) — Prior Authorization Transparency Act (enrolled text; now Ark. Code § 23-99-1101 et seq.)', url: 'https://www.arkleg.state.ar.us/Home/FTPDocument?path=%2FACTS%2F2015%2FPublic%2FACT1106.pdf' },
  act575: { title: 'Act 575 of 2023 (HB 1271) — amends the Prior Authorization Transparency Act; prior-authorization exemptions (“gold card”)', url: 'https://www.arkleg.state.ar.us/Home/FTPDocument?path=%2FACTS%2F2023R%2FPublic%2FACT575.pdf' },
  abcbs: { title: 'Arkansas Blue Cross and Blue Shield Coverage Policy 2011053 — Autism Spectrum Disorder Adaptive Behavioral Analysis (last review November 2025; coverage statement effective March 1, 2026)', url: 'https://secure.arkansasbluecross.com/members/report.aspx?policyNumber=2011053' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Arkansas: 2025, AR Psychology Board)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  cfr438: { title: '42 CFR 438.210 — Medicaid managed care coverage and authorization of services (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA general provisions (CHAMPVA is the last payer)', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (effective August 1, 2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / office manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  en0499: { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (effective 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Evernorth — Autism resource guide for behavioral health providers (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026; includes the Arkansas Regulatory Addendum)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplement (BH803ABASTM, effective July 2026; Arkansas not listed)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated June 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumNNM: { title: 'Optum National Network Manual (BH02330, effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
};

/* ---------------- Shared Arkansas Medicaid facts (state floor) ---------------- */
const AR_MEDICAID_SUPERVISION =
  'The state manual sets the floor. A BCaBA or RBT must be supervised by an Arkansas Medicaid-enrolled BCBA, who must directly observe in person at least “Five percent (5%) of the total ABA therapy treatment hours performed by the BCaBA or RBT” and at least “One (1) hour of ABA therapy treatment delivery performed by BCaBA or RBT every thirty (30) days.” Between observations the BCBA must be “on-call and immediately available” (telecommunication is enough), must review and approve the technician’s data and progress notes before any claim is submitted, and is capped at the lesser of “twelve (12) BCaBAs and RBTs at any given time” or a caseload needing no more than 25 billable hours of 97155 a week. RBTs must hold BACB certification; a trainee may be treated as an RBT for up to six months.';

const AR_MEDICAID_TELEHEALTH =
  'Only two ABA services may be delivered by telemedicine: adaptive behavior treatment with protocol modification (97155) and family adaptive behavior treatment (97156). “All other covered applied behavior analysis (ABA) therapy services must be conducted in-person,” so the 97151 assessment and technician 97153 are in-person only. Telemedicine must be synchronous, needs parent or guardian consent first, follows the Arkansas Telemedicine Act (Ark. Code Ann. § 17-80-401 to -407) and Section I § 105.190, and is paid the same as in person. Acentra’s training deck adds the billing detail: “no modifier required. Use telehealth place of service on claim.” Section I § 105.190 also says a provider treating Arkansas clients by telemedicine “shall be fully licensed or certified to practice in Arkansas.”';

const AR_MEDICAID_DX =
  'An autism spectrum disorder diagnosis “established in accordance with Ark. Code Ann. § 20-77-124,” shown by a delineation of DSM criteria or by the results of one or more formalized ASD evaluation instruments administered by qualified professionals. A diagnosis alone does not establish medical necessity: a BCBA’s comprehensive evaluation must also show it.';

/* ---------------- Shared Arkansas commercial layer ---------------- */
const AR_MANDATE_BODY =
  'Arkansas’s autism mandate is Ark. Code § 23-99-418, created by Act 196 of 2011 (HB 1315) for health benefit plans delivered, issued or renewed on or after October 1, 2011. As enacted, it reaches group and blanket plans, HMOs and hospital and medical service corporations, and the state and public school employee plans, but not individual major medical plans. Mandated “treatment” is care “prescribed, provided, or ordered for a specfic individual diagnosed with an autism spectrum disorder by a licensed physician or a licensed psychologist who determines the care to be medically necessary and evidence-based,” including “Applied behavior analysis when provided by or supervised by a Board Certified Behavior Analyst,” plus pharmacy, psychiatric, psychological and speech, occupational and physical therapy care. The enacted text says ABA services “shall: (1) Have an annual limitation of fifty thousand dollars ($50,000); and (2) Be limited to children under eighteen (18) years of age.” Coverage may not carry visit limits or less favorable dollar limits, deductibles or coinsurance than physical illness, “shall not be denied on the basis that the treatment is habilitative in nature,” and an insurer may not review the medical necessity of ongoing autism treatment “to a greater extent than it does for other illnesses.” It does not displace IEP or IFSP obligations, and from 2014 exchange plans are excused from benefits beyond the essential health benefits. Those age and dollar terms have since moved in practice: Arkansas Blue Cross’s current ABA policy applies the $50,000 cap only to “Grandfathered” plans and quotes the Arkansas Insurance Department that it “will not allow age limits for any service for the treatment of autism.” We could not open the current codified text of § 23-99-418, so confirm the plan’s own terms. Self-funded ERISA plans sit outside the statute.';

const AR_LICENSURE_BODY =
  'Arkansas regulates behavior analysts by registration, not licensure, and only since 2025. Act 432 of 2025 (the Arkansas Behavior Analyst Registration Act, Ark. Code § 17-97-601 et seq.) has the Arkansas Psychology Board register a “registered behavior analyst” on proof of BCBA or BCBA-D certification and a criminal background check, for two years at a time. The Act protects the title: unless registered, a person may not hold themselves out as a registered behavior analyst. It does not make practice itself unlawful without registration. It also offers temporary registration to a behavior analyst licensed elsewhere, or BACB-certified, who practices in Arkansas “on a short-term basis,” and reciprocity for analysts licensed in comparable states. The BACB’s licensure table lists Arkansas (2025, AR Psychology Board). Payers credential on BACB certification: the mandate itself keys ABA to a Board Certified Behavior Analyst. Commercial ABA rates are negotiated and unpublished; the public benchmark is the Arkansas Medicaid fee schedule (97151 $20.00, 97153 $15.00, 97155 $22.50, 97156 $20.00 per 15-minute unit).';

const AR_PA_LAW =
  'Fully insured Arkansas plans, plus risk-based provider organizations and nonfederal self-funded governmental plans (Act 575 of 2023), fall under the Prior Authorization Transparency Act. As enacted in Act 1106 of 2015, a nonurgent prior-authorization decision is due “within two (2) business days of obtaining all necessary information,” and an urgent one “no later than one (1) business day after receiving all information needed.” Act 575 adds that an adverse determination must be made by a physician with an unrestricted Arkansas license, that the provider may discuss the denial with that physician within one business day (urgent) or two business days (nonurgent) of receiving it, and that an insurer that approved at least 90% of a provider’s requests for a service in a six-month evaluation period may not require prior authorization of that provider for that service. Self-funded ERISA plans follow 29 CFR 2560.503-1 instead: pre-service decisions “not later than 15 days after receipt of the claim,” one 15-day extension, urgent care within 72 hours.';

const AR_COMMERCIAL_COB_TAIL =
  ' If the child also has Arkansas Medicaid (fee-for-service or a PASSE), this plan pays first: Medicaid pays only the difference up to its maximum and “will not make any payment if the amount received from the third party insurance is equal to or greater than the Medicaid allowable rate” (Section I § 131.000; 42 CFR 433.139). TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270). We did not verify Arkansas’s rule for ordering two parents’ group plans, so get the order from the plan.';

const MANDATE_AGE_TAIL =
  ' For fully insured Arkansas plans, § 23-99-418 as enacted in 2011 limited mandated ABA to children under 18 with a $50,000 annual cap; Arkansas Blue Cross’s current policy says the Arkansas Insurance Department “will not allow age limits for any service for the treatment of autism” and applies the $50,000 cap only to grandfathered plans. Self-funded ERISA plans are outside the statute.';

const MANDATE_REFERRAL_TAIL =
  ' For a fully insured Arkansas plan, § 23-99-418 (as enacted) defines mandated treatment as care “prescribed, provided, or ordered” by a licensed physician or licensed psychologist who finds it medically necessary and evidence-based, so keep that prescription on file.';

const AR_MANDATE_ATGLANCE_COMMON = [
  { label: 'State mandate', value: 'Ark. Code § 23-99-418 (Act 196 of 2011, HB 1315), group and blanket plans from 10/1/2011' },
  { label: 'Mandate age', value: 'Under 18 in the 2011 text; the Arkansas Insurance Department “will not allow age limits” (as quoted in Arkansas Blue Cross policy 2011053)' },
  { label: 'Mandate caps', value: '$50,000/yr in the 2011 text; Arkansas Blue Cross applies it only to grandfathered plans. No visit limits allowed' },
  { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; individual major medical plans (as enacted); exchange benefits beyond EHB' },
  { label: 'Licensure', value: 'Registration, not licensure: Act 432 of 2025 (Ark. Code § 17-97-601 et seq.), Arkansas Psychology Board; title protection only' },
];

export const arkansasPayers: Record<string, PayerConfig> = {
  'arkansas-medicaid': {
    slug: 'arkansas-medicaid',
    cardDesc: 'EPSDT ABA for ages 18 months–21: Acentra prior-authorizes fee-for-service; PASSE members go through their PASSE. Rates $15–$22.50.',
    assessmentPA: {
      value: 'Yes. “All behavior identification assessment services must be prior authorized” (Section II § 222.100); fee-for-service requests go to Acentra Health with form DMS-641 ER and two-prong ASD documentation. PASSE members request ABA through their PASSE care coordinator',
      status: 'verified',
      cites: [S.abaII, S.acentra, S.acentraPPT],
    },
    treatmentPA: {
      value: 'Yes, for every ABA service (97153, 97155, 97156): “Prior authorization is required for an applied behavior analysis (ABA) therapy provider to be reimbursed” (§ 231.000). Acentra reviews the initial treatment plan and each renewal with form DMS-641 TP, after the assessment PA is approved',
      status: 'verified',
      cites: [S.abaII, S.acentraPPT],
    },
    dxRequired: {
      value: 'Yes. ' + AR_MEDICAID_DX,
      status: 'verified',
      cites: [S.abaII, S.acentraPPT],
    },
    payer: 'Arkansas Medicaid',
    state: 'AR', kind: 'state-medicaid',
    pill: 'Payer Guide · Arkansas Medicaid',
    h1: 'Arkansas Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Arkansas Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Arkansas Medicaid covers ABA: an EPSDT benefit for ages 18 months to 21 under the January 2025 ABA manual, Acentra prior authorization for fee-for-service, PASSE authorization for PASSE members, PCP forms DMS-641 ER and TP, telehealth for 97155/97156 only, and published rates.',
    intro: [
      'Arkansas Medicaid covers applied behavior analysis as an EPSDT benefit under its own ABA Therapy provider manual, effective January 1, 2025. The beneficiary must be enrolled in Child Health Services (EPSDT) and “between eighteen (18) months and twenty-one (21) years of age,” have an autism spectrum disorder diagnosis, a PCP referral and prescription on the state’s DMS-641 forms, and a BCBA’s comprehensive evaluation showing medical necessity. Children in the Autism Waiver cannot also receive ABA therapy.',
      'Who authorizes and pays depends on the card. Most Medicaid children are fee-for-service with a ConnectCare primary care physician, and Acentra Health, DHS’s QIO-like reviewer, handles their ABA prior authorizations. Children assessed as needing behavioral-health or developmental-disability services at Tier II or III are assigned to a PASSE (Arkansas Total Care, CareSource PASSE, Empower Healthcare Solutions or Summit Community Care), which must cover all Section II services, ABA included. Acentra says it plainly: “Beneficiaries enrolled in a PASSE must request ABA services through their assigned PASSE care coordinator.”',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, EPSDT, ages 18 months to 21 (not ARKids First-B extended benefits; not Autism Waiver enrollees)' },
      { label: 'Structure', value: 'Fee-for-service (Acentra reviews PA) or one of four PASSEs (the PASSE authorizes)' },
      { label: 'PCP paperwork', value: 'DMS-641 ER evaluation referral (initial only) + DMS-641 TP treatment prescription (6 or 12 months)' },
      { label: 'FFS rates (per 15 min)', value: '97151 $20.00 · 97153 $15.00 · 97155 $22.50 · 97156 $20.00 (EP modifier; fee schedule run 1/1/25)' },
      { label: 'Not payable', value: 'Group 97154 and 97158; 97152, 97157, 0362T, 0373T are not on the fee schedule' },
      { label: 'Telehealth', value: '97155 and 97156 only; telehealth POS, no modifier' },
      { label: 'Licensure', value: 'Behavior analyst registration (Act 432 of 2025); Medicaid requires BACB certification for BCBA, BCaBA and RBT' },
      { label: 'Timely filing', value: '12 months from date of service' },
    ],
    sections: [
      {
        h2: 'Who is eligible, and who authorizes',
        body: [
          'The ABA manual limits the benefit to beneficiaries enrolled in the Child Health Services (EPSDT) program and aged 18 months to 21, with an ASD diagnosis established under Ark. Code Ann. § 20-77-124 (DSM criteria or a formalized ASD instrument given by a qualified professional). Acentra notes that “Minors on ARKids First-B are not entitled to all the extended EPSDT benefits” and that Autism Waiver enrollees “are not eligible for ABA therapy services because they receive their autism services through the waiver.” All of a child’s ABA must come from one provider: “Transitioning, alternating, or coordinating ABA therapy services concurrently among multiple ABA therapy service providers is prohibited,” though the family may still change providers.',
          'Fee-for-service children are reviewed by Acentra Health through its Atrezzo portal: an initial assessment request (DMS-641 ER plus the two-prong diagnosis), then a separate initial treatment request (DMS-641 TP plus the comprehensive treatment plan), then renewals. “Each PA must not be submitted until the previous PA has been approved.” PASSE members are different: the PASSE manual requires each PASSE to provide every service in the program manuals’ Section II, including EPSDT treatment, and Acentra sends PASSE families to their PASSE care coordinator.',
        ],
        cites: [S.abaII, S.acentra, S.acentraPPT, S.passeII],
      },
      {
        h2: 'The PCP forms and the BCBA evaluation',
        body: [
          'Two DHS forms carry the PCP’s part. The DMS-641 ER evaluation referral, signed by the child’s assigned Arkansas Medicaid PCP (or a substitute or same-group physician), is needed only for the initial comprehensive evaluation; a provider who takes over a child with an active prescription does not need one. The DMS-641 TP treatment prescription must be signed by the assigned PCP the first time and is valid for up to six months for children 18 months to 8 years and up to 12 months for ages 8 to 21. Acentra’s deck adds that the DMS-641 TP is valid “for a maximum of 12 months from the signature date, unless otherwise noted by the PCP.”',
          'Medical necessity rests on a BCBA’s comprehensive evaluation, repeated at least every six months (ages 18 months to 8) or twelve months (8 to 21). It must include history, a caregiver interview, the results of one skills-based instrument from DHS’s accepted list, a functional behavior assessment when there is interfering behavior, a domain-by-domain analysis, recommended hours with the reasoning, a recommended treatment plan and setting, and a parent home program. By signing, the BCBA certifies that ASD is the primary cause of the deficits, that only a BCBA can safely deliver or supervise the services, and that the child can learn and generalize skills.',
        ],
        cites: [S.abaII, S.acentraPPT],
      },
      {
        h2: 'Fee schedule, billing rules and claims',
        body: [
          'The Arkansas Medicaid ABA fee schedule (provider type 90, run date 1/1/25) lists four payable codes, each with the EP modifier: 97151 $20.00, 97153 $15.00, 97155 $22.50 and 97156 $20.00, per 15-minute unit. The schedule says it “reflects only procedure codes that are currently payable,” and Acentra adds that “Group services 97154 and 97158 are not reimbursable.” Medicaid pays the lower of billed charges or the maximum, and the maximum is the same for every ABA provider.',
          'The manual’s billing rules: a full unit must be rendered to bill it, partial units are not rounded up, separate periods in one day may be added together, and set-up, breaks and documentation alone are not billable. “Unless otherwise specifically provided for in this Arkansas Medicaid manual, concurrent billing is not allowed.” A group must “identify the certified practitioner as the performing provider on the claim.” Claims must reach the fiscal agent “within twelve (12) months from the date of service.” EVV does not apply: Section I lists the codes subject to electronic visit verification (personal care, attendant care, respite, home health), and no ABA code is among them.',
        ],
        cites: [S.abaFee, S.abaII, S.acentraPPT, S.secI],
      },
      {
        h2: 'Out-of-state providers, licensure and telehealth',
        body: [
          'Providers based in Arkansas, or within 50 miles of the state line in Louisiana, Mississippi, Missouri, Oklahoma, Tennessee or Texas, may enroll as ABA providers in the usual way. A provider 50 or more miles away, or in a non-bordering state, may serve an Arkansas Medicaid child only as a limited provider under “a separate single case agreement for each Arkansas Medicaid eligible beneficiary served.” Every individual clinician, technicians included, must enroll with Arkansas Medicaid and pass the background checks in Ark. Code Ann. § 20-48-812.',
          'Arkansas has registered behavior analysts only since Act 432 of 2025, which protects the title “registered behavior analyst” through the Arkansas Psychology Board and allows temporary registration for short-term out-of-state practice. Medicaid’s own credential is BACB certification (BCBA, BCaBA, RBT). For telehealth, the ABA manual allows only 97155 and 97156, and Section I says a provider treating Arkansas clients by telemedicine “shall be fully licensed or certified to practice in Arkansas,” with an exception only for episodic consultation. A BCBA located in another state should confirm with Arkansas Medicaid Provider Enrollment how that rule applies to them before billing 97155 or 97156 remotely.',
        ],
        cites: [S.abaII, S.act432, S.bacbLic, S.secI],
      },
      {
        h2: 'Reconsiderations and appeals',
        body: [
          'Acentra decides ABA requests within seven calendar days and reconsiderations within 30. A provider has 65 calendar days after an adverse decision to ask the reviewing agent for reconsideration, and 65 days to appeal to the Office of Medicaid Provider Appeals after the notice or the reconsideration decision; each clock “begins to run five (5) days after the date of the written notice.” A beneficiary appeal to the DHS Office of Appeals and Hearings must arrive within 30 days. Acentra issues a 65-day “Continuation of Service” approval while a family decides whether to appeal, extended if an appeal is filed.',
        ],
        cites: [S.acentraPPT, S.secI, S.abaII],
      },
    ],
    collect: [
      { title: 'Which Medicaid card', desc: 'Fee-for-service (Acentra) or a PASSE (Arkansas Total Care, CareSource PASSE, Empower, Summit). PASSE members request ABA through their care coordinator.' },
      { title: 'Assigned PCP', desc: 'The child’s Arkansas Medicaid assigned PCP signs the DMS-641 ER referral and the first DMS-641 TP prescription.' },
      { title: 'Diagnosis report', desc: 'An ASD evaluation (for example CARS or ADOS) by a licensed psychologist, physician or SLP, plus the PCP’s written agreement with the diagnosis.' },
      { title: 'Age and program', desc: 'Ages 18 months to 21 only. Ask whether the child is in the Autism Waiver (no ABA therapy) or ARKids First-B (limited EPSDT).' },
      { title: 'Other insurance', desc: 'Bill the commercial plan first; Medicaid pays only up to its maximum after the primary pays.' },
    ],
    sources: [S.abaII, S.abaFee, S.abaPage, S.secI, S.secIII, S.passeII, S.passeList, S.acentra, S.acentraPPT, S.act432, S.bacbLic, S.cfr440, S.cfr433],
    deliveryRules: {
      supervision: {
        value: AR_MEDICAID_SUPERVISION,
        status: 'verified',
        cites: [S.abaII],
      },
      concurrentBilling: {
        value: 'Not settled in writing for 97153 + 97155. The manual says “Unless otherwise specifically provided for in this Arkansas Medicaid manual, concurrent billing is not allowed,” defining it as multiple practitioners billing for the same beneficiary in the same time increment. It also defines 97155 as the BCBA’s in-person observation of a BCaBA’s or RBT’s treatment session, with units counting “time spent supervising, observing and interacting in-person with the beneficiary and BCaBA or RBT … during an ABA therapy treatment session.” It never says in words whether the technician’s 97153 for those same minutes is also billable.',
        status: 'unverified',
        cites: [S.abaII],
        verifyVia: 'Arkansas Medicaid Provider Assistance Center or DMS (the ABA manual’s policy office), or Acentra Health Provider Relations (arkansaspr@acentra.com, 888-660-3831 option 3): ask in writing whether 97153 and 97155 may be billed for the same minutes.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Weekly, not daily. Treatment “performed during a week cannot exceed the prescribed or authorized number of units per week,” missed units “do not carryforward and cannot be made up,” and a week runs Monday through Sunday. “A single clinician cannot perform more than fifty (50) billable hours of ABA therapy treatment services per week.” A supervising BCBA may carry no more than 25 billable hours of 97155 a week across their caseload.',
        status: 'verified',
        cites: [S.abaII],
      },
      noteSignature: {
        value: 'Each 97153 session note needs the names, credentials and signatures of the staff who delivered it, plus “Weekly (or more frequent) progress notes signed or initialed by the supervising board-certified behavior analyst.” The supervising BCBA “must review and approve the data collection and progress notes” of each BCaBA or RBT “prior to submitting a claim.” 97155 and 97156 notes carry the BCBA’s name and signature. Electronic signatures are accepted under Ark. Code § 25-31-103.',
        status: 'verified',
        cites: [S.abaII],
      },
      placeOfService: {
        value: 'The manual sets no list of allowed settings. The evaluation and treatment plan must state the recommended setting and “how and why” it suits the child, and goals must move skills progressively from a clinic or controlled setting into the child’s natural environments. Only 97155 and 97156 may be delivered by telemedicine (telehealth POS, no modifier). School-based services by school employees are excluded from the PASSE benefit.',
        status: 'verified',
        cites: [S.abaII, S.acentraPPT, S.passeII],
      },
      billAsProvider: {
        value: 'A group “must identify the certified practitioner as the performing provider on the claim.” Every individual delivering ABA for a group, RBTs included, must enroll individually with Arkansas Medicaid, and 97151, 97155 and 97156 must be performed by an enrolled BCBA.',
        status: 'verified',
        cites: [S.abaII],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Ages 18 months to 21: the beneficiary must be enrolled in Child Health Services (EPSDT) and “between eighteen (18) months and twenty-one (21) years of age.”',
        status: 'verified',
        cites: [S.abaII, S.acentra],
      },
      dxRecency: {
        value: 'No expiry is set on the diagnosis itself. The dated clocks are the BCBA’s comprehensive reevaluation (at least every 6 months for ages 18 months to 8, every 12 months for ages 8 to 21) and the DMS-641 TP prescription (valid up to 6 or 12 months by the same age bands). A reevaluation is covered when the active prescription expires within 60 days.',
        status: 'verified',
        cites: [S.abaII],
      },
      diagnosingProviders: {
        value: 'Qualified professionals under Ark. Code Ann. § 20-77-124. Acentra lists them as a licensed psychologist (PhD, PsyD, LP, LPE, LPE-I), a licensed physician (MD, DO) or a speech-language pathologist, and also requires an MD or DO to confirm the diagnosis, either in well-child or PCP notes “documenting Autism diagnosis and how it was diagnosed” or in a letter agreeing with the evaluation.',
        status: 'verified',
        cites: [S.acentraPPT, S.abaII],
      },
      diagnosticTools: {
        value: 'Either a delineation of DSM criteria or the results of one or more formalized ASD instruments (Acentra’s examples: CARS, ADOS). The BCBA’s evaluation must also report one skills-based instrument from DHS’s accepted list; other instruments may supplement but not replace it.',
        status: 'verified',
        cites: [S.abaII, S.acentraPPT],
      },
      referral: {
        value: 'Yes, two forms. DMS-641 ER evaluation referral from the assigned Arkansas Medicaid PCP (initial evaluation only), and a DMS-641 TP treatment prescription signed by the assigned PCP for the first course (renewals may be signed by a substitute or same-group physician). A new DMS-641 TP is not needed when the child changes PCPs; a new ER and evaluation are needed if the child loses eligibility and restarts.',
        status: 'verified',
        cites: [S.abaII, S.acentraPPT],
      },
      telehealth: {
        value: AR_MEDICAID_TELEHEALTH,
        status: 'verified',
        cites: [S.abaII, S.acentraPPT, S.secI],
      },
      authTurnaround: {
        value: 'Acentra decides initial assessment, initial treatment and continued treatment requests in “Seven (7) calendar days” and reconsiderations in 30 calendar days. That matches the federal fee-for-service limit in force since January 1, 2026 (standard decisions no later than 7 calendar days, extendable by 14). Submit the assessment PA, wait for approval, then submit the treatment PA. PASSE members follow their PASSE’s clock (two business days after all information, per Section I § 192.003).',
        status: 'verified',
        cites: [S.acentraPPT, S.cfr440, S.secI],
      },
      coordinationOfBenefits: {
        value: 'Medicaid pays last. Providers must bill other insurance first and record third-party payments on every claim; a $0.00 TPL entry needs the date of the primary’s denial or deductible EOB. Medicaid pays the difference between the private payment and its maximum and “will not make any payment if the amount received from the third party insurance is equal to or greater than the Medicaid allowable rate,” and the family owes no insurance cost share for a Medicaid-covered service from a Medicaid provider (Section I § 131.000; Section III; 42 CFR 433.139).',
        status: 'verified',
        cites: [S.secI, S.secIII, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Arkansas Medicaid cover ABA therapy?', a: 'Yes, as an EPSDT benefit for children aged 18 months to 21 with an autism spectrum disorder diagnosis, under the ABA Therapy manual effective January 1, 2025. Children in the Autism Waiver get autism services through the waiver instead.' },
      { q: 'Is ABA run by the PASSEs or fee-for-service in Arkansas?', a: 'Both, depending on the child. Fee-for-service children are prior-authorized by Acentra Health. Children in a PASSE (Arkansas Total Care, CareSource PASSE, Empower, Summit Community Care) get ABA through the PASSE, which authorizes and pays it.' },
      { q: 'What does Arkansas Medicaid pay for ABA?', a: 'Per 15-minute unit: 97151 $20.00, 97153 $15.00, 97155 $22.50, 97156 $20.00 (EP modifier). Group codes 97154 and 97158 are not reimbursable, and 97152, 97157, 0362T and 0373T are not on the fee schedule.' },
      { q: 'Can Arkansas Medicaid ABA be done by telehealth?', a: 'Only 97155 (BCBA protocol modification) and 97156 (family training), live video, with parent consent, billed with the telehealth place of service and no modifier. The assessment and technician sessions must be in person.' },
      { q: 'Can a BCBA licensed in another state treat an Arkansas Medicaid child?', a: 'Providers within 50 miles of the Arkansas line in a bordering state can enroll normally; others need a single case agreement per child. For telehealth, Section I requires providers treating Arkansas clients to be “fully licensed or certified to practice in Arkansas,” so confirm with Provider Enrollment first. Arkansas’s 2025 registration law offers temporary registration for short-term practice.' },
      { q: 'What is the timely filing limit and is EVV required?', a: 'Claims must reach the fiscal agent within 12 months of the date of service. EVV does not apply to ABA: Section I’s EVV code list covers personal care, attendant care, respite and home health only.' },
    ],
  },

  'arkansas-total-care': {
    slug: 'arkansas-total-care',
    family: 'centene',
    cardDesc: 'Centene PASSE with its own Arkansas ABA policy (AR.CP.BH.104): PCP prescription, 6 hrs/day–30 hrs/week ceiling without extra justification, 2-business-day decisions.',
    assessmentPA: {
      value: 'Not stated in the plan’s published ABA documents; its policy lists “Behavioral assessment” among the requests it reviews, but the code-level PA list sits in the online Pre-Auth Check tool',
      status: 'unverified',
      cites: [S.atcPolicy, S.atcPolicies],
      verifyVia: 'Arkansas Total Care Pre-Auth Check (arkansastotalcare.com → Providers) or Provider Services, 1-866-282-6280: check 97151.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Not stated per code in a document we could read. AR.CP.BH.104 sets the medical-necessity criteria for initial and continued ABA treatment, and AR.CP.BH.105 requires that “Prior authorization approval for ABA services has been obtained, if required”',
      status: 'unverified',
      cites: [S.atcPolicy, S.atcDoc],
      verifyVia: 'Arkansas Total Care Pre-Auth Check or Provider Services, 1-866-282-6280: check 97153, 97155 and 97156.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes: a confirmed ASD diagnosis under current DSM criteria, with severity level and specifiers, “established by a licensed physician, psychologist, or other licensed professional with specialized training in diagnosis and treatment of ASD, or a provider otherwise authorized under state law to diagnose autism” (AR.CP.BH.104)',
      status: 'verified',
      cites: [S.atcPolicy],
    },
    payer: 'Arkansas Total Care',
    state: 'AR', kind: 'medicaid-mco', parent: 'Arkansas Medicaid (PASSE program)',
    pill: 'Payer Guide · Arkansas Total Care · Arkansas',
    h1: 'Arkansas Total Care ABA coverage: the intake guide.',
    metaTitle: 'Arkansas Total Care ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Arkansas Total Care, a PASSE, covers ABA for Arkansas Medicaid members: its own policy AR.CP.BH.104 (revised 07/26), PCP prescription, diagnostic evaluation within 12 months, hour ceilings, documentation rules, two-business-day decisions and 365-day timely filing.',
    intro: [
      'Arkansas Total Care is one of the four PASSEs DHS lists. PASSE members get all non-excluded Medicaid services through their PASSE, ABA included, and Acentra sends PASSE families to their PASSE care coordinator. Unlike some PASSEs, Arkansas Total Care publishes its own Arkansas ABA criteria: clinical policy AR.CP.BH.104 (revised 07/26) and a documentation policy, AR.CP.BH.105.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, ages 18 months to 21, when medically necessary under AR.CP.BH.104' },
      { label: 'Prescription', value: 'Signed and dated by the member’s PCP or a provider in the PCP’s group; up to 12 months' },
      { label: 'Hours', value: 'Up to 6 hours/day and 30 hours/week without extra justification; under 20/week if in school full time' },
      { label: 'Decision clock', value: 'Lesser of 2 business days after all information or 14 calendar days; urgent 1 business day or 3 days' },
      { label: 'Timely filing', value: '365 calendar days from date of service (or from the primary EOP)' },
      { label: 'Provider Services', value: '1-866-282-6280' },
    ],
    sections: [
      {
        h2: 'Arkansas Total Care’s ABA criteria',
        body: [
          'AR.CP.BH.104 covers ABA when the member is between 18 months and 21; the services, “including the initial evaluation,” are prescribed, signed and dated by the member’s PCP or an affiliated provider in the PCP’s group, for no more than 12 months; and ASD is confirmed under current DSM criteria. A comprehensive diagnostic evaluation or re-evaluation must be from the last 12 months and must use at least one primary clinician tool (ABLLS, AFLS, EFL, VB-MAPP or Vineland-3, with ADOS-2, ADI-R, CARS-2 and others as optional supplements). The behavioral assessment behind an initial treatment request must be completed by a BCBA no more than 60 days before the authorization starts.',
          'The treatment plan must meet the Arkansas Medicaid manual’s billing requirements and justify hours by impairment and response, considering school (“less than 20 hours per week if attending school full-time”). Hours above six a day or 30 a week need documented clinical justification. Protocol modification (97155) should run “at least two hours per week or 5% of the direct service hours provided, whichever is greater” (one to two hours is acceptable under 10 hours a week), and caregiver training should ideally total at least two hours a month. If attendance falls below 80% of authorized hours, continued authorization needs supporting documentation.',
        ],
        cites: [S.atcPolicy],
      },
      {
        h2: 'Documentation, claims and decisions',
        body: [
          'AR.CP.BH.105 requires session notes completed “prior to claim submission,” with exact start and end times and any pauses, location, service code, the rendering provider’s signature, and the signature and printed name of the supervising practitioner where applicable. Notes for 97155 must list the protocol modifications made or explain why none were needed, and a supervisor must deliver protocol modification one-on-one with the member at least monthly, not by telehealth “unless allowed by state guidelines.” Units not supported by documentation may be denied or recouped.',
          'The 2026 Provider and Billing Manual sets Medicaid authorization decisions at the lesser of two business days after obtaining all necessary information or 14 calendar days (urgent: one business day or three calendar days; retrospective: 30 days). Claims must be submitted within 365 calendar days of the date of service, or of the primary payer’s EOP when Arkansas Total Care is secondary; corrected claims, reconsiderations and disputes within 180 days.',
        ],
        cites: [S.atcDoc, S.atcPM],
      },
    ],
    collect: [
      { title: 'PCP prescription', desc: 'Signed and dated by the member’s PCP or a provider in the PCP’s group, covering the initial evaluation too; no more than 12 months.' },
      { title: 'Diagnostic evaluation', desc: 'From the last 12 months, with severity level and at least one primary clinician tool (VB-MAPP, Vineland-3, ABLLS, AFLS or EFL).' },
      { title: 'School schedule', desc: 'Full-time school usually means under 20 hours a week of ABA in the plan’s criteria.' },
      { title: 'Other insurance', desc: 'Bill the primary first; Arkansas Total Care must receive the secondary claim within 365 days of the primary EOP.' },
    ],
    sources: [S.atcPolicy, S.atcDoc, S.atcPM, S.atcPolicies, S.passeII, S.passeList, S.abaII, S.acentra, S.secI],
    deliveryRules: {
      supervision: {
        value: 'Arkansas Total Care’s criteria require 97155 (protocol modification) for “at least two hours per week or 5% of the direct service hours provided, whichever is greater” (one to two hours a week is acceptable below 10 hours of treatment), and treatment “delivered or supervised by an ABA-credentialed professional.” The state floor in the ABA manual also applies to PASSE members: a Medicaid-enrolled BCBA observes at least 5% of each technician’s hours and one hour every 30 days, and supervises no more than 12 BCaBAs and RBTs.',
        status: 'verified',
        cites: [S.atcPolicy, S.abaII, S.passeII],
      },
      concurrentBilling: {
        value: 'Not addressed in the plan’s ABA policies or provider manual. The state manual bars concurrent billing “unless otherwise specifically provided for” and does not say in words whether 97153 and 97155 may share minutes.',
        status: 'unverified',
        cites: [S.atcPolicy, S.atcPM, S.abaII],
        verifyVia: 'Arkansas Total Care Provider Services, 1-866-282-6280, or your provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Treatment hours should not exceed six hours a day or 30 hours a week unless clinical documentation justifies more (persistent severe behavior, escalating behavior, severe stereotypy, limited functional communication), and fewer than 20 hours a week when the child attends school full time. The plan may authorize less than requested if lower intensity is sufficient.',
        status: 'verified',
        cites: [S.atcPolicy],
      },
      noteSignature: {
        value: 'Notes must be completed before the claim is submitted and carry the signature and printed name of the rendering clinician or technician and of the supervising practitioner where applicable; a note created on a later date must say why. Addenda must reference the original note and carry the author’s name, signature and credentials.',
        status: 'verified',
        cites: [S.atcDoc],
      },
      placeOfService: {
        value: 'The treatment plan must name the treatment setting with a rationale. Services covered under IDEA are not medically necessary, though ABA “can occur in coordination with school services.” Services delivered in lieu of school, respite or other community settings may be discontinued.',
        status: 'verified',
        cites: [S.atcPolicy],
      },
      billAsProvider: {
        value: 'Not stated in the plan’s ABA policies. The state manual requires a group to name the certified practitioner as the performing provider and every individual, RBTs included, to enroll with Arkansas Medicaid; ask the plan how it applies that on its claims.',
        status: 'unverified',
        cites: [S.atcPolicy, S.abaII],
        verifyVia: 'Arkansas Total Care Provider Services, 1-866-282-6280: ask whose NPI goes in the rendering field for RBT-delivered 97153.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Ages 18 months to 21 (“The member is between the age of 18 months and 21 years of age”).',
        status: 'verified',
        cites: [S.atcPolicy],
      },
      dxRecency: {
        value: 'The comprehensive initial diagnostic evaluation or re-evaluation must have been conducted “within the last 12 months,” for initiation and continuation alike, and the BCBA behavioral assessment no more than 60 days before the initial treatment authorization starts.',
        status: 'verified',
        cites: [S.atcPolicy],
      },
      diagnosingProviders: {
        value: 'A licensed physician, psychologist, or other licensed professional with specialized training in diagnosing and treating ASD, or a provider otherwise authorized under state law to diagnose autism.',
        status: 'verified',
        cites: [S.atcPolicy],
      },
      diagnosticTools: {
        value: 'At least one primary clinician tool: ABLLS-R, AFLS, EFL, VB-MAPP or Vineland-3 (or later editions), with optional supplements such as STAT, ADI-R, CARS-2, ASRS, ADOS-2, EarliPoint, RITA-T and CSBS DP-ITC. A parent or caregiver tool (M-CHAT-R/F, SCQ, SRS-2 and others) is optional. Medical causes must be ruled out.',
        status: 'verified',
        cites: [S.atcPolicy],
      },
      referral: {
        value: 'Yes. Services, including the initial evaluation, “must be prescribed by, with date and signature of the member’s primary care provider (PCP) or affiliated provider within the same group,” for no more than 12 months at a time.',
        status: 'verified',
        cites: [S.atcPolicy],
      },
      telehealth: {
        value: 'Arkansas Total Care tells providers to “refer to respective state allowances for telehealth services,” and its documentation policy bars the required monthly one-on-one protocol-modification visit by telehealth “unless allowed by state guidelines.” The state rule is that only 97155 and 97156 may be delivered by synchronous telemedicine, with parent consent; all other ABA services are in person.',
        status: 'verified',
        cites: [S.atcPolicy, S.atcDoc, S.abaII],
      },
      authTurnaround: {
        value: 'Medicaid standard requests: the lesser of two business days after obtaining all necessary information or 14 calendar days from receipt; expedited or concurrent: the lesser of one business day or three calendar days; retrospective: 30 calendar days. Section I § 192.003 sets the same two-business-day standard for PASSEs.',
        status: 'verified',
        cites: [S.atcPM, S.secI],
      },
      coordinationOfBenefits: {
        value: 'When Arkansas Total Care is secondary, the claim must be received within 365 calendar days of the primary payer’s EOP, and the plan may not deny for timeliness when the delay came from reasonable efforts to determine liability. Under the PASSE manual, the PASSE handles coordination of benefits and must pay a previously denied claim if the primary later refused it for timely filing or missing prior authorization because the member did not disclose the other coverage; the provider has 90 days to resubmit with the primary’s documentation.',
        status: 'verified',
        cites: [S.atcPM, S.passeII],
      },
    },
    faq: [
      { q: 'Does Arkansas Total Care cover ABA?', a: 'Yes, for PASSE members aged 18 months to 21 who meet its ABA policy AR.CP.BH.104: a PCP prescription, a confirmed ASD diagnosis, an evaluation from the last 12 months and a BCBA assessment.' },
      { q: 'How many ABA hours will Arkansas Total Care approve?', a: 'Up to six hours a day and 30 a week without extra justification, and usually under 20 a week for a child in full-time school. More needs documented clinical need.' },
      { q: 'How fast does Arkansas Total Care decide an ABA request?', a: 'Within two business days of having all necessary information, or 14 calendar days from receipt if sooner; urgent requests within one business day or three calendar days.' },
      { q: 'Can Arkansas Total Care ABA be delivered by telehealth?', a: 'The plan follows the state rule: only 97155 and 97156 by live telemedicine with parent consent; assessments and technician sessions are in person.' },
    ],
  },

  'caresource-passe-arkansas': {
    slug: 'caresource-passe-arkansas',
    family: 'caresource',
    cardDesc: 'CareSource PASSE: ABA policy MM-1227 + payment policy PY-1616 follow the state manual; review before every ABA service; 2-business-day decisions.',
    assessmentPA: {
      value: 'Yes: “All covered services must be reviewed for medical necessity prior to the service,” and the covered services start with Behavior Identification Assessment Services (MM-1227 § III.A)',
      status: 'verified',
      cites: [S.csMM],
    },
    treatmentPA: {
      value: 'Yes: “A review of medical necessity is required prior to any ABA service provision” (PY-1616); breaks in service are submitted as continuations, not new initial requests',
      status: 'verified',
      cites: [S.csPY, S.csMM],
    },
    dxRequired: {
      value: 'Yes: a qualifying diagnosis under section 212.200 of the state ABA manual and Ark. Code Ann. § 20-77-124 (MM-1227 § II.A)',
      status: 'verified',
      cites: [S.csMM, S.abaII],
    },
    payer: 'CareSource PASSE',
    state: 'AR', kind: 'medicaid-mco', parent: 'Arkansas Medicaid (PASSE program)',
    pill: 'Payer Guide · CareSource PASSE · Arkansas',
    h1: 'CareSource PASSE ABA coverage in Arkansas: the intake guide.',
    metaTitle: 'CareSource PASSE Arkansas ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How CareSource PASSE covers ABA for Arkansas Medicaid members: medical policy MM-1227 and payment policy PY-1616 (May 2026), the state manual’s documents, review before every service, telehealth rules, two-business-day decisions and claims deadlines.',
    intro: [
      'CareSource PASSE is one of the four PASSEs DHS lists. Its Arkansas ABA medical policy (AR PASSE-MM-1227) and reimbursement policy (AR PASSE-PY-1616), both effective May 1, 2026, defer to the state: CareSource “follows Arkansas law and Arkansas Dept of Health and Human Services (DHS) guidelines in the provision of ABA services. Any information from those sources supersedes information in this policy.” In practice that means the state ABA manual’s forms and rules, reviewed by CareSource before each service.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, EPSDT members aged 18 months to 21' },
      { label: 'Prior review', value: 'Medical-necessity review before any ABA service, assessment included' },
      { label: 'Documents', value: 'State manual §§ 212.200–212.500 and 224.000: diagnosis, DMS-641 referral and prescription, BCBA assessment, signed ITP' },
      { label: 'Decision clock', value: '2 business days after the request (standard); 1 business day (urgent)' },
      { label: 'Timely filing', value: '365 calendar days; corrected claims 180 days; reconsiderations 65 days' },
      { label: 'Provider Services', value: '1-833-230-2100' },
    ],
    sections: [
      {
        h2: 'What CareSource reviews',
        body: [
          'Members must be enrolled in Arkansas Medicaid’s Child Health Services (EPSDT) program and be 18 months to 21. For each review CareSource must receive, “based on sections in the AR DHS ABA Provider Manual, Section II,” a qualifying diagnosis (§ 212.200 and Ark. Code Ann. § 20-77-124), a referral to evaluate (§ 212.300), a treatment prescription (§ 212.400), a comprehensive assessment (§ 212.500), and an individualized treatment plan “signed by the BCBA and parent or guardian” (§ 224.000), plus any guardianship papers. Documentation should describe the child’s own symptoms, not restate DSM language. A service that paused (summer break, a custody visit) is resubmitted as a continuation, not an initial request.',
          'Covered services are the state’s four: behavior identification assessment, ABA treatment, protocol modification and family treatment. Exclusions include rehabilitative services billed as ABA, education services under IDEA, ABA for Autism Waiver members, services by family or household members, “shadowing, para-professional, or companion services in any setting,” and programs in nonconventional settings such as wilderness camps. Treatment stops being medically necessary under the state discharge criteria or when caregivers do not follow through to the point that progress is compromised.',
        ],
        cites: [S.csMM, S.csPY, S.abaII],
      },
      {
        h2: 'Payment rules and claims',
        body: [
          'PY-1616 repeats the state rules: fee-schedule payment at the lower of billed charges or the Arkansas Medicaid maximum, full units only, no rounding, separate periods in a day may be combined, and “Unless otherwise specifically stated in the ABA Provider Manual, concurrent billing is not allowed.” RBTs work under an independent practitioner enrolled in Medicaid and affiliated with the RBT’s organization, and RBT supervisors must hold BCBA or BCaBA certification. Supervision records must be kept at least seven years.',
          'The provider manual requires claims “within 365 calendar days of the date of service or discharge,” corrected claims within 180 days, and makes Medicaid the payer of last resort. The 2026 addendum gives providers 65 calendar days from an adverse notice to request reconsideration in writing.',
        ],
        cites: [S.csPY, S.csPM, S.csAdd],
      },
    ],
    collect: [
      { title: 'State ABA packet', desc: 'Diagnosis, DMS-641 ER referral, DMS-641 TP prescription, BCBA comprehensive assessment and an ITP signed by the BCBA and parent.' },
      { title: 'Guardianship papers', desc: 'CareSource asks for them with the review packet when they apply.' },
      { title: 'Other insurance', desc: 'Medicaid pays last; CareSource needs the primary payer’s determination and pays no more than the Medicaid rate.' },
      { title: 'Autism Waiver status', desc: 'Members in the Autism Waiver are excluded from ABA therapy.' },
    ],
    sources: [S.csMM, S.csPY, S.csPM, S.csAdd, S.passeII, S.passeList, S.abaII, S.acentra, S.secI],
    deliveryRules: {
      supervision: {
        value: 'CareSource says supervision requirements “are published by the State of Arkansas and the BACB” and adds that “RBT supervisors must hold BCBA or BCaBA certification.” The state floor: a Medicaid-enrolled BCBA observes at least 5% of each technician’s treatment hours and one hour every 30 days, stays on call, approves notes before billing, and supervises no more than 12 BCaBAs and RBTs.',
        status: 'verified',
        cites: [S.csPY, S.abaII],
      },
      concurrentBilling: {
        value: '“Unless otherwise specifically stated in the ABA Provider Manual, concurrent billing is not allowed,” defined as multiple practitioners billing for the same member in the same time increment. Neither CareSource nor the state manual says in words whether 97153 and 97155 may share minutes.',
        status: 'unverified',
        cites: [S.csPY, S.abaII],
        verifyVia: 'CareSource PASSE Provider Services, 1-833-230-2100: ask in writing whether 97153 and 97155 may be billed for the same minutes.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'CareSource publishes no unit cap of its own and follows the state manual: weekly units may not exceed the authorized number, missed units do not carry forward (week = Monday to Sunday), and one clinician may bill no more than 50 hours of ABA treatment a week.',
        status: 'verified',
        cites: [S.csPY, S.abaII],
      },
      noteSignature: {
        value: 'CareSource points to the state documentation rules (section 140.000 and section 203.200 of the ABA manual) and keeps the right to request therapy or supervision documentation, “particularly related to telehealth services.” The state rule: session notes carry the names, credentials and signatures of the staff, weekly progress notes are signed or initialed by the supervising BCBA, and the BCBA approves technician notes before the claim.',
        status: 'verified',
        cites: [S.csPY, S.abaII],
      },
      placeOfService: {
        value: 'No setting list. Excluded: programs in nonconventional settings (“wilderness camp, ranch programs”), shadowing, para-professional or companion services “in any setting,” and education services under IDEA. Telemedicine follows state section 223.000 and should not be the primary method of treatment.',
        status: 'verified',
        cites: [S.csMM, S.csPY],
      },
      billAsProvider: {
        value: 'RBTs “may provide ABA under the supervision of an independent practitioner enrolled in the Medicaid program and affiliated with the organization under which the RBT is employed or contracted”; if that practitioner leaves, the RBT may not continue under them. The state manual requires the certified practitioner as the performing provider on group claims.',
        status: 'verified',
        cites: [S.csPY, S.abaII],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Ages 18 months to 21, enrolled in Arkansas Medicaid’s EPSDT program (MM-1227 § I.B).',
        status: 'verified',
        cites: [S.csMM],
      },
      dxRecency: {
        value: 'CareSource sets no diagnosis expiry and uses the state manual’s comprehensive assessment (§ 212.500), which must be repeated every 6 months for ages 18 months to 8 and every 12 months for ages 8 to 21.',
        status: 'verified',
        cites: [S.csMM, S.abaII],
      },
      diagnosingProviders: {
        value: 'A “Qualified Professional,” which the policy defines as “A licensed physician, licensed psychologist, or licensed speech-language pathologist,” consistent with Ark. Code Ann. § 20-77-124.',
        status: 'verified',
        cites: [S.csMM],
      },
      diagnosticTools: {
        value: 'The policy defines standardized diagnostic tools as direct, evidence-based assessment tools and otherwise defers to the state: DSM criteria or one or more formalized ASD instruments, and a skills-based instrument from DHS’s accepted list in the BCBA’s assessment.',
        status: 'verified',
        cites: [S.csMM, S.abaII],
      },
      referral: {
        value: 'Yes: “a referral to evaluate in accordance with section 212.300” (DMS-641 ER from the assigned PCP) and “a treatment prescription according to section 212.400” (DMS-641 TP).',
        status: 'verified',
        cites: [S.csMM, S.abaII],
      },
      telehealth: {
        value: '“Telemedicine Services are covered services and outlined by the State in section 223.000. Services must be appropriate for the individual member and not used as the primary method of treatment.” Under section 223.000 only 97155 and 97156 may be delivered by synchronous telemedicine, with parent consent.',
        status: 'verified',
        cites: [S.csMM, S.abaII],
      },
      authTurnaround: {
        value: 'Standard prior authorization decisions “no later than two business days after receipt of the request for service”; urgent decisions “within one business day of receipt of information needed to complete the review.”',
        status: 'verified',
        cites: [S.csPM, S.secI],
      },
      coordinationOfBenefits: {
        value: '“When a member has other insurance, Medicaid is always the payer of last resort. CareSource will not pay more than the Medicaid rate totals for services. Primary payer must provide evidence of determinations for consideration of Medicaid coverage.”',
        status: 'verified',
        cites: [S.csPY, S.csPM],
      },
    },
    faq: [
      { q: 'Does CareSource PASSE cover ABA?', a: 'Yes, for PASSE members aged 18 months to 21 with ASD, under medical policy MM-1227, which follows the Arkansas Medicaid ABA manual.' },
      { q: 'Does the ABA assessment need prior authorization with CareSource PASSE?', a: 'Yes. Every covered ABA service, starting with the behavior identification assessment, must be reviewed for medical necessity before it is delivered.' },
      { q: 'What is CareSource PASSE’s timely filing limit?', a: '365 calendar days from the date of service; corrected claims within 180 days; reconsiderations within 65 calendar days of the adverse notice.' },
    ],
  },

  'empower-healthcare-solutions-arkansas': {
    slug: 'empower-healthcare-solutions-arkansas',
    family: 'empower',
    cardDesc: 'Empower PASSE: PA required on 97151, 97153, 97155 and 97156 (BH/IDD form or portal); otherwise the state ABA manual applies.',
    assessmentPA: {
      value: 'Yes: 97151 is on Empower’s PA list (service category “AUTISM-EPSDT,” PA required; list dated 4.24.26)',
      status: 'verified',
      cites: [S.empPAList, S.empPA],
    },
    treatmentPA: {
      value: 'Yes: 97153, 97155 and 97156 are on the PA list (PA required); submit through the provider portal or the BH/IDD PA form (fax 800-886-6839)',
      status: 'verified',
      cites: [S.empPAList, S.empPA],
    },
    dxRequired: {
      value: 'Yes. Empower lists ABA as a state plan service and publishes no ABA criteria of its own, so the state rule applies: ' + AR_MEDICAID_DX,
      status: 'verified',
      cites: [S.empHB, S.abaII],
    },
    payer: 'Empower Healthcare Solutions',
    state: 'AR', kind: 'medicaid-mco', parent: 'Arkansas Medicaid (PASSE program)',
    pill: 'Payer Guide · Empower Healthcare Solutions · Arkansas',
    h1: 'Empower Healthcare Solutions ABA coverage: the intake guide.',
    metaTitle: 'Empower Healthcare Solutions ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Empower Healthcare Solutions, an Arkansas PASSE, covers ABA: prior authorization on 97151, 97153, 97155 and 97156, the BH/IDD PA form, two-business-day decisions, 365-day timely filing, and the state ABA manual rules it follows.',
    intro: [
      'Empower Healthcare Solutions is one of the four PASSEs DHS lists. Its Provider Handbook (Version 9.08.2026) lists Applied Behavioral Analysis among the state plan services it covers, and its prior-authorization list puts every payable ABA code behind PA. Empower publishes no ABA clinical policy of its own, so the Arkansas Medicaid ABA manual supplies the rules: eligibility, PCP forms, supervision and telehealth.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, a state plan service for PASSE members (ages 18 months to 21 under the state manual)' },
      { label: 'Prior auth', value: 'Required on 97151, 97153, 97155, 97156 (PA list 4.24.26)' },
      { label: 'Submit via', value: 'Provider portal, or BH/IDD PA form by fax 800-886-6839' },
      { label: 'Decision clock', value: '2 business days after all clinical information; urgent 1 business day' },
      { label: 'Timely filing', value: '365 days from date of service; resubmissions 180 days from payment/denial notice' },
      { label: 'Provider Services', value: '855-429-1028' },
    ],
    sections: [
      {
        h2: 'Prior authorization and the rules that apply',
        body: [
          'Empower’s full PA code list (dated 4.24.26) carries four ABA codes, all in the “AUTISM-EPSDT” category and all marked PA required: 97151, 97153, 97155 and 97156. Those are the same four codes the Arkansas Medicaid fee schedule pays. Requests go through the provider portal or on the BH/IDD PA form, by email or fax to 800-886-6839. Empower’s handbook and UM pages publish no ABA-specific criteria, so the state ABA manual governs: EPSDT ages 18 months to 21, the DMS-641 ER referral and DMS-641 TP prescription, a BCBA comprehensive evaluation, BCBA supervision of RBTs, and telemedicine for 97155 and 97156 only.',
        ],
        cites: [S.empPAList, S.empPA, S.empHB, S.abaII, S.abaFee],
      },
      {
        h2: 'Decisions, claims and reconsiderations',
        body: [
          'Empower decides standard authorizations within two business days of receiving all necessary clinical information and urgent ones within one business day, may extend up to two business days for missing documentation, and reviews retrospective requests (for a newly attributed member, for example) within 30 calendar days. Clean claims are due within 365 days of the date of service, and corrections or adjustment requests within 180 days of the payment or denial notice. Empower is the payer of last resort and pays nothing when the other insurer paid at or above its Medicaid allowable. A provider reconsideration is due within 30 calendar days of the adverse notice and is optional before an Arkansas Department of Health provider appeal.',
        ],
        cites: [S.empHB],
      },
    ],
    collect: [
      { title: 'State ABA packet', desc: 'DMS-641 ER referral, DMS-641 TP prescription, diagnosis documentation and the BCBA’s comprehensive evaluation.' },
      { title: 'Empower member ID', desc: 'Confirm PASSE attribution on the date of service; retrospective review is available for newly attributed members.' },
      { title: 'Other insurance', desc: 'Empower is the payer of last resort; bill the primary first.' },
    ],
    sources: [S.empPA, S.empPAList, S.empHB, S.passeII, S.passeList, S.abaII, S.abaFee, S.acentra, S.secI],
    deliveryRules: {
      supervision: {
        value: 'Empower publishes no ABA supervision rule of its own, so the state rule applies. ' + AR_MEDICAID_SUPERVISION,
        status: 'verified',
        cites: [S.empHB, S.abaII],
      },
      concurrentBilling: {
        value: 'Not addressed by Empower. The state manual bars concurrent billing “unless otherwise specifically provided for” and does not say in words whether 97153 and 97155 may share minutes.',
        status: 'unverified',
        cites: [S.empHB, S.abaII],
        verifyVia: 'Empower Provider Services, 855-429-1028, or ProviderRelations@empowerarkansas.com.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Empower publishes no ABA unit limit, so the state rule applies: weekly units may not exceed the authorization, missed units do not carry forward (week = Monday to Sunday), and one clinician may bill no more than 50 hours of ABA treatment a week.',
        status: 'verified',
        cites: [S.empHB, S.abaII],
      },
      noteSignature: {
        value: 'Empower publishes no ABA note rule, so the state rule applies: names, credentials and signatures of the staff on each session note, weekly BCBA-signed progress notes, and BCBA approval of technician notes before the claim.',
        status: 'verified',
        cites: [S.empHB, S.abaII],
      },
      placeOfService: {
        value: 'Empower publishes no ABA setting rule. Under the state manual, the plan of care must justify the setting, and only 97155 and 97156 may be delivered by telemedicine; PASSE benefits exclude school-based services by school employees.',
        status: 'unverified',
        cites: [S.empHB, S.abaII, S.passeII],
        verifyVia: 'Empower Provider Services, 855-429-1028: ask which place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Claims must carry the “NPI of billing provider and rendering provider when applicable” and the Medicaid ID of both when the provider is atypical, aligned with the state’s Master Provider Registry. The state manual requires a group to name the certified practitioner as the performing provider.',
        status: 'verified',
        cites: [S.empHB, S.abaII],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Empower publishes no ABA age rule, so the state rule applies: EPSDT enrollees “between eighteen (18) months and twenty-one (21) years of age.”',
        status: 'verified',
        cites: [S.empHB, S.abaII],
      },
      dxRecency: {
        value: 'No diagnosis expiry; the state manual’s BCBA reevaluation runs every 6 months (ages 18 months to 8) or 12 months (8 to 21), and the DMS-641 TP prescription expires on the same schedule.',
        status: 'verified',
        cites: [S.empHB, S.abaII],
      },
      diagnosingProviders: {
        value: 'Not stated by Empower. Under the state rule, qualified professionals under Ark. Code Ann. § 20-77-124 diagnose; Acentra’s list for fee-for-service is a licensed psychologist, licensed physician or SLP, with MD or DO confirmation. Ask Empower whether it applies the same list.',
        status: 'unverified',
        cites: [S.empHB, S.acentraPPT],
        verifyVia: 'Empower Utilization Management via Provider Services, 855-429-1028.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'Not stated by Empower. The state manual accepts DSM criteria or formalized ASD instruments and requires a skills-based instrument from DHS’s accepted list in the BCBA evaluation.',
        status: 'unverified',
        cites: [S.empHB, S.abaII],
        verifyVia: 'Empower Utilization Management via Provider Services, 855-429-1028.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Empower publishes nothing different, so the state rule applies: a DMS-641 ER evaluation referral and a DMS-641 TP treatment prescription from the member’s assigned PCP.',
        status: 'verified',
        cites: [S.empHB, S.abaII],
      },
      telehealth: {
        value: 'Empower publishes no ABA telehealth rule, so the state rule applies. ' + AR_MEDICAID_TELEHEALTH,
        status: 'verified',
        cites: [S.empHB, S.abaII, S.acentraPPT, S.secI],
      },
      authTurnaround: {
        value: 'Standard authorizations “Within two (2) business days of Empower’s receipt of all clinical information necessary,” urgent within one business day, retrospective reviews within 30 calendar days; an extension of up to two business days may be granted to obtain missing documentation.',
        status: 'verified',
        cites: [S.empHB],
      },
      coordinationOfBenefits: {
        value: '“Empower is a payer of last resort when any commercial or Medicare plan covers the member,” and it “will not make any payment if the amount received from the third-party insurance is equal to or greater than Empower’s Medicaid allowable amount.”',
        status: 'verified',
        cites: [S.empHB],
      },
    },
    faq: [
      { q: 'Does Empower Healthcare Solutions cover ABA?', a: 'Yes. Its handbook lists Applied Behavioral Analysis as a state plan service, and the Arkansas Medicaid ABA manual sets the rules for PASSE members aged 18 months to 21.' },
      { q: 'Which ABA codes need prior authorization with Empower?', a: '97151, 97153, 97155 and 97156 are all marked PA required on Empower’s April 2026 list. Submit through the portal or the BH/IDD PA form.' },
      { q: 'What is Empower’s timely filing limit?', a: '365 days from the date of service for the original clean claim; corrections within 180 days of the payment or denial notice.' },
    ],
  },

  'summit-community-care-arkansas': {
    slug: 'summit-community-care-arkansas',
    family: 'summit-community-care',
    cardDesc: 'Summit Community Care PASSE: PA on 97151–97156 and 97158 (list updated 2/11/2026); otherwise the state ABA manual applies.',
    assessmentPA: {
      value: 'Yes: 97151 and 97152 are on Summit’s list of services requiring prior authorization (updated 2/11/2026)',
      status: 'verified',
      cites: [S.sccPA],
    },
    treatmentPA: {
      value: 'Yes: 97153, 97154, 97155, 97156 and 97158 are on the PA list (only 97153, 97155 and 97156 are payable under the state fee schedule)',
      status: 'verified',
      cites: [S.sccPA, S.abaFee],
    },
    dxRequired: {
      value: 'Yes. Summit’s provider manual publishes no ABA criteria of its own, so the state rule applies: ' + AR_MEDICAID_DX,
      status: 'verified',
      cites: [S.sccPM, S.abaII],
    },
    payer: 'Summit Community Care',
    state: 'AR', kind: 'medicaid-mco', parent: 'Arkansas Medicaid (PASSE program)',
    pill: 'Payer Guide · Summit Community Care · Arkansas',
    h1: 'Summit Community Care ABA coverage: the intake guide.',
    metaTitle: 'Summit Community Care ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Summit Community Care, an Arkansas PASSE, covers ABA: prior authorization on the ABA codes, two-business-day decisions capped at seven days, 365-day timely filing, telehealth rules, and the state ABA manual it follows.',
    intro: [
      'Summit Community Care is one of the four PASSEs DHS lists. Its prior-authorization list (updated February 11, 2026) includes the ABA codes, and its July 2026 provider manual sets the decision clock and claims rules. Summit publishes no ABA clinical policy of its own, so the Arkansas Medicaid ABA manual supplies eligibility, forms, supervision and telehealth rules for its members.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for PASSE members under the state ABA manual (ages 18 months to 21)' },
      { label: 'Prior auth', value: 'Required on 97151, 97152, 97153, 97154, 97155, 97156, 97158' },
      { label: 'Decision clock', value: '2 business days after all information, max 7 calendar days; urgent 1 business day, max 72 hours' },
      { label: 'Timely filing', value: '365 calendar days; secondary claims 180 days from the primary payment' },
      { label: 'Provider Services', value: '844-462-0022' },
    ],
    sections: [
      {
        h2: 'Prior authorization and the rules that apply',
        body: [
          'Summit’s PA list names 97151, 97152, 97153, 97154, 97155, 97156 and 97158 for Arkansas Medicaid. Only four ABA codes are payable under the state fee schedule (97151, 97153, 97155, 97156), and the state does not reimburse group codes 97154 and 97158, so plan around those four. Summit’s manual decides standard requests within two business days of receiving all necessary information, “not to exceed 7 calendar days from the date of the request,” and urgent ones within one business day, not to exceed 72 hours. With no Summit ABA policy published, the state ABA manual governs eligibility (EPSDT, ages 18 months to 21), the DMS-641 ER and TP forms, BCBA supervision and documentation.',
        ],
        cites: [S.sccPA, S.sccPM, S.abaFee, S.acentraPPT, S.abaII],
      },
      {
        h2: 'Telehealth and claims',
        body: [
          'Summit’s manual repeats Section I: a provider treating Arkansas patients by telehealth “shall be fully licensed or certified to practice in Arkansas,” and the distant-site provider must be enrolled in Arkansas Medicaid. Virtual services may be delivered in the member’s home or a community setting with documented consent; audio-only, fax, text and email are not reportable encounters. For ABA specifically, the state manual allows only 97155 and 97156 by telemedicine. Paper and electronic claims must be filed within 365 calendar days of the date of service, and secondary claims within 180 days of the primary payer’s payment date.',
        ],
        cites: [S.sccPM, S.abaII, S.secI],
      },
    ],
    collect: [
      { title: 'State ABA packet', desc: 'DMS-641 ER referral, DMS-641 TP prescription, diagnosis documentation and the BCBA’s comprehensive evaluation.' },
      { title: 'Summit member ID', desc: 'Confirm PASSE attribution on the date of service.' },
      { title: 'Other insurance', desc: 'Bill the primary first; the Summit secondary claim is due within 180 days of the primary payment.' },
    ],
    sources: [S.sccPA, S.sccPM, S.passeII, S.passeList, S.abaII, S.abaFee, S.acentra, S.acentraPPT, S.secI],
    deliveryRules: {
      supervision: {
        value: 'Summit publishes no ABA supervision rule of its own, so the state rule applies. ' + AR_MEDICAID_SUPERVISION,
        status: 'verified',
        cites: [S.sccPM, S.abaII],
      },
      concurrentBilling: {
        value: 'Not addressed by Summit. The state manual bars concurrent billing “unless otherwise specifically provided for” and does not say in words whether 97153 and 97155 may share minutes.',
        status: 'unverified',
        cites: [S.sccPM, S.abaII],
        verifyVia: 'Summit Community Care Provider Services, 844-462-0022.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Summit publishes no ABA unit limit, so the state rule applies: weekly units may not exceed the authorization, missed units do not carry forward, and one clinician may bill no more than 50 hours of ABA treatment a week.',
        status: 'verified',
        cites: [S.sccPM, S.abaII],
      },
      noteSignature: {
        value: 'Summit publishes no ABA note rule, so the state rule applies: names, credentials and signatures of the staff on each session note, weekly BCBA-signed progress notes, and BCBA approval of technician notes before the claim.',
        status: 'verified',
        cites: [S.sccPM, S.abaII],
      },
      placeOfService: {
        value: 'Summit’s manual allows virtual services in the member’s home or a community setting with documented consent. It sets no ABA-specific setting rule; the state manual requires the plan of care to justify the setting and limits ABA telemedicine to 97155 and 97156.',
        status: 'verified',
        cites: [S.sccPM, S.abaII],
      },
      billAsProvider: {
        value: 'Summit publishes no ABA rendering-provider rule. The state manual requires a group to name the certified practitioner as the performing provider and every individual, RBTs included, to enroll with Arkansas Medicaid.',
        status: 'unverified',
        cites: [S.sccPM, S.abaII],
        verifyVia: 'Summit Community Care Provider Services, 844-462-0022: ask whose NPI goes in the rendering field for RBT-delivered 97153.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Summit publishes no ABA age rule, so the state rule applies: EPSDT enrollees “between eighteen (18) months and twenty-one (21) years of age.”',
        status: 'verified',
        cites: [S.sccPM, S.abaII],
      },
      dxRecency: {
        value: 'No diagnosis expiry; the state manual’s BCBA reevaluation runs every 6 months (ages 18 months to 8) or 12 months (8 to 21).',
        status: 'verified',
        cites: [S.sccPM, S.abaII],
      },
      diagnosingProviders: {
        value: 'Not stated by Summit. Under the state rule, qualified professionals under Ark. Code Ann. § 20-77-124 diagnose (Acentra’s fee-for-service list: licensed psychologist, licensed physician or SLP, with MD or DO confirmation).',
        status: 'unverified',
        cites: [S.sccPM, S.acentraPPT],
        verifyVia: 'Summit Community Care Utilization Management via Provider Services, 844-462-0022.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'Not stated by Summit. The state manual accepts DSM criteria or formalized ASD instruments and requires a skills-based instrument from DHS’s accepted list.',
        status: 'unverified',
        cites: [S.sccPM, S.abaII],
        verifyVia: 'Summit Community Care Utilization Management via Provider Services, 844-462-0022.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Summit publishes nothing different, so the state rule applies: a DMS-641 ER evaluation referral and a DMS-641 TP treatment prescription from the member’s assigned PCP.',
        status: 'verified',
        cites: [S.sccPM, S.abaII],
      },
      telehealth: {
        value: 'Summit requires telehealth providers to be “fully licensed or certified to practice in Arkansas” and enrolled in Arkansas Medicaid, and allows virtual care in the home with documented consent. For ABA the state rule applies: only 97155 and 97156 by synchronous telemedicine; all other ABA in person.',
        status: 'verified',
        cites: [S.sccPM, S.abaII],
      },
      authTurnaround: {
        value: 'Standard: within two business days of receiving all necessary information, “not to exceed 7 calendar days from the date of the request.” Urgent: within one business day, not to exceed 72 hours.',
        status: 'verified',
        cites: [S.sccPM],
      },
      coordinationOfBenefits: {
        value: 'Secondary and tertiary claims “must be submitted within 180 days from the payment date from Medicare or the third-party payer.” Under the PASSE manual, the PASSE handles coordination of benefits as Medicaid’s delegate and pays a previously denied claim if the primary later refused it for timely filing or missing prior authorization because the member did not disclose the other coverage (90 days to resubmit).',
        status: 'verified',
        cites: [S.sccPM, S.passeII],
      },
    },
    faq: [
      { q: 'Does Summit Community Care cover ABA?', a: 'Yes, for PASSE members under the Arkansas Medicaid ABA manual (EPSDT, ages 18 months to 21), with prior authorization on the ABA codes.' },
      { q: 'How fast does Summit decide an ABA authorization?', a: 'Within two business days of receiving all necessary information, and never more than seven calendar days from the request; urgent requests within one business day, no more than 72 hours.' },
    ],
  },

  'arkansas-blue-cross-blue-shield': {
    slug: 'arkansas-blue-cross-blue-shield',
    family: 'bcbs',
    cardDesc: 'Policy 2011053 (Lucet manages ABA): no PA for metallic, group, individual or governmental plans; PA for ERISA self-insured and FEP; $50K cap only on grandfathered plans.',
    assessmentPA: {
      value: 'Depends on the contract. Policy 2011053 says metallic, commercial group and individual, and state/local government/church self-insured contracts “have no requirement for PA”; federally chartered contracts (FEP and ERISA self-insured) need Prior Approval through Lucet when the plan uses Lucet, starting with a pre-treatment assessment request',
      status: 'plan-dependent',
      cites: [S.abcbs],
      verifyVia: 'Arkansas Blue Cross benefits verification on the member ID: ask whether the contract is ERISA self-insured or FEP (Prior Approval through Lucet) or fully insured/metallic/governmental (no PA).',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Same split: no PA for metallic, commercial group and individual, and governmental or church self-insured contracts; Prior Approval and concurrent review by Lucet for FEP and ERISA self-insured contracts whose plans contract with Lucet',
      status: 'plan-dependent',
      cites: [S.abcbs],
      verifyVia: 'Arkansas Blue Cross benefits verification: confirm the contract type and whether Lucet manages the plan’s ABA.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a confirmed ASD diagnosis and a signed prescription for ABA from a licensed physician or licensed psychologist; ABA for any other diagnosis is not covered (policy 2011053)',
      status: 'verified',
      cites: [S.abcbs],
    },
    payer: 'Arkansas Blue Cross and Blue Shield',
    state: 'AR', kind: 'commercial',
    pill: 'Payer Guide · Arkansas Blue Cross and Blue Shield',
    h1: 'Arkansas Blue Cross and Blue Shield ABA coverage: the intake guide.',
    metaTitle: 'Arkansas Blue Cross ABA Coverage: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Arkansas Blue Cross and Blue Shield covers ABA: coverage policy 2011053, Lucet management, no prior approval for most fully insured contracts, the multidisciplinary diagnosis requirement, telehealth limits, and Arkansas’s § 23-99-418 mandate.',
    intro: [
      'Arkansas Blue Cross and Blue Shield writes its ABA rules in coverage policy 2011053, “Autism Spectrum Disorder Adaptive Behavioral Analysis” (last reviewed November 2025; current coverage statement effective March 1, 2026). Lucet Behavioral Health Services and Solutions manages ABA for plans that contract with it. The single most useful intake fact is the contract type: the policy removes prior approval for most fully insured and governmental contracts, keeps it for ERISA self-insured and FEP contracts, and applies the old $50,000 cap only to grandfathered plans.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for confirmed ASD with a physician or psychologist prescription' },
      ...AR_MANDATE_ATGLANCE_COMMON,
      { label: 'Prior approval', value: 'None for metallic, group, individual, governmental/church self-insured; required (Lucet) for FEP and ERISA self-insured' },
      { label: 'Fee schedule', value: 'Not public — contracted rates; Medicaid’s 97153 rate ($15.00/15 min) is the only public benchmark' },
    ],
    sections: [
      {
        h2: 'Policy 2011053: who needs prior approval',
        body: [
          'For fully insured, metallic and ASE/PSE (state and public school employee) contracts, the policy quotes § 23-99-418(d)(1)(A) that autism coverage “is not subject to any limits on the number of visits an individual may make to an autism services provider,” and the Arkansas Insurance Department that ABA “should have no limits on the number of visits” and that AID “will not allow age limits for any service for the treatment of autism.” On prior approval it says: “Requests for coverage of ABA treatment will require Prior Approval (PA) for those contracts not subject to Arkansas Act 575 (e.g., Gold Card Law). Only federally chartered contracts (e.g., FEP and ERISA self-insured contracts) are exempt from this law. All metallic contracts, commercial group and individual contracts, and state/local government/church self-insured groups have no requirement for PA.” Where PA applies, Lucet runs Prior Approval and concurrent review.',
          'Coverage requires ABA “provided or supervised by a therapist certified by the nationally accredited Behavior Analyst Certification Board.” Grandfathered plans keep an annual $50,000 ABA limit; non-grandfathered plans follow the policy’s criteria. The policy describes comprehensive treatment as 25 to 40 hours a week, aimed mainly at children 3 to 7, and focused treatment as 10 to 25 hours; comprehensive and focused treatment “cannot be provided concurrently,” and requests outside those ranges need a specific rationale.',
        ],
        cites: [S.abcbs, S.act575],
      },
      {
        h2: 'The diagnosis Arkansas Blue Cross expects',
        body: [
          'Arkansas Blue Cross asks more of the diagnosis than most payers. It “will require a multidisciplinary evaluation” including formal testing by a developmental pediatrician, pediatric neurologist or child psychiatrist (or a pediatrician with advanced developmental training), a licensed speech therapist with developmental-pediatrics experience, and a licensed child psychologist with developmental-pediatrics experience, none employed by the child’s school. Suggested testing includes autism-specific instruments (ADOS, ADI-R, CARS), hearing, speech-language, developmental or cognitive, adaptive behavior (VABS, ABAS) and sensorimotor evaluations. For an initial treatment authorization, baseline developmental, autism-specific and neurological data may be up to five years old, but the adaptive behavior assessment must be within six months of the treatment start. “Results of autism screening measures are not an autism diagnosis.”',
        ],
        cites: [S.abcbs],
      },
      {
        h2: 'The Arkansas mandate: what it guarantees',
        body: [AR_MANDATE_BODY],
        cites: [S.act196, S.abcbs],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [AR_LICENSURE_BODY],
        cites: [S.act432, S.bacbLic, S.act196, S.abaFee],
      },
    ],
    collect: [
      { title: 'Contract type', desc: 'Metallic, group, individual or governmental (no PA) vs. ERISA self-insured or FEP (Prior Approval via Lucet). Also ask whether the plan is grandfathered ($50,000 cap).' },
      { title: 'Multidisciplinary evaluation', desc: 'Physician specialist, speech therapist and child psychologist, not school-employed, with ADOS/ADI-R/CARS and adaptive testing.' },
      { title: 'Adaptive behavior assessment', desc: 'Within six months of the treatment start date.' },
      { title: 'Prescription', desc: 'Signed ABA prescription from a licensed physician or licensed psychologist.' },
    ],
    sources: [S.abcbs, S.act196, S.act575, S.act1106, S.act432, S.bacbLic, S.abaFee, S.erisa, S.secI, S.cfr433, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'ABA must be “provided or supervised by a therapist certified by the nationally accredited Behavior Analyst Certification Board.” Absent a state law, line therapy is delivered by an RBT, BCaBA, or master’s- or doctoral-level BCBA, consistent with the Lucet provider manual and the BACB ethics code. No numeric supervision ratio is published in the policy.',
        status: 'verified',
        cites: [S.abcbs],
      },
      concurrentBilling: {
        value: '“Concurrent billing of 97153 and 97155 is not allowed (unless 97155 is a separate, distinct service from 97153).” Comprehensive and focused treatment cannot run concurrently.',
        status: 'verified',
        cites: [S.abcbs],
      },
      dailyLimits: {
        value: 'No per-day cap. Comprehensive treatment ranges 25–40 direct hours a week and focused 10–25; Lucet approves hours case by case, and requests outside the ranges need a specific clinical rationale. Grandfathered plans carry a $50,000 annual ABA limit.',
        status: 'verified',
        cites: [S.abcbs],
      },
      noteSignature: {
        value: 'The policy points to the “Guidelines for Treatment Record Documentation” section of the Lucet provider manual, which we did not read; it states no signature rule itself.',
        status: 'unverified',
        cites: [S.abcbs],
        verifyVia: 'Lucet Behavioral Health provider manual (treatment record documentation section) or Arkansas Blue Cross provider network services.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Treatment is provided “in the setting and intensity that is appropriate,” determined by where target behaviors occur. ABA may not duplicate academic goals in an IEP/ISP, including “shadow, para-professional, interpersonal, or companion services in any setting.” Direct ABA by telehealth is not covered.',
        status: 'verified',
        cites: [S.abcbs],
      },
      billAsProvider: {
        value: 'Not stated in the policy beyond requiring ABA provided or supervised by a BACB-certified therapist. Out-of-state Blue providers may bill local-plan equivalent codes when approved.',
        status: 'unverified',
        cites: [S.abcbs],
        verifyVia: 'Arkansas Blue Cross provider network services or Lucet: ask whether RBT services bill under the supervising BCBA’s NPI.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The policy sets no age cap of its own: the member must be within the age range in the plan or state law, and for fully insured, metallic and ASE/PSE contracts it quotes AID that it “will not allow age limits for any service for the treatment of autism.”' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.abcbs, S.act196],
        verifyVia: 'Benefits verification: confirm the contract type (fully insured, grandfathered, ERISA self-insured or FEP) and the plan’s age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'For an initial treatment authorization, baseline developmental/cognitive, autism-specific and neurological data must be no older than five years (or scheduled within 90 days of the pre-treatment assessment), and the adaptive behavior assessment within six months of the treatment start.',
        status: 'verified',
        cites: [S.abcbs],
      },
      diagnosingProviders: {
        value: 'A multidisciplinary team not employed by the child’s school: a developmental pediatrician, pediatric neurologist or child psychiatrist (or pediatrician with advanced developmental training), a licensed speech therapist and a licensed child psychologist, each with developmental-pediatrics experience. Lucet’s criteria add that the diagnosing clinician must be licensed and qualified to diagnose ASD.',
        status: 'verified',
        cites: [S.abcbs],
      },
      diagnosticTools: {
        value: 'Autism-specific testing (ADOS, ADI-R, CARS), hearing evaluation, speech-language testing (PPVT, EVT), developmental or cognitive testing (Bayley, WPPSI), adaptive behavior evaluation (VABS, ABAS), sensorimotor evaluation and labs as indicated. The diagnosis must include an ASD-specific standardized assessment; screening results do not count.',
        status: 'verified',
        cites: [S.abcbs],
      },
      referral: {
        value: 'Yes: “a signed prescription from a licensed physician or licensed psychologist for ABA treatment.”' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.abcbs, S.act196],
      },
      telehealth: {
        value: '“The delivery of direct ABA services by telehealth/Telemedicine (e.g., 97152, 97153, 97154, 0372T, 0373T) are not covered. Telehealth/telemedicine for parent education (e.g., 97156 and 97157), direct supervision activities (e.g., 97155, 97158), and some assessment activities (97151) may be covered if allowed as an eligible telehealth/telemedicine service under the member benefit plan. These may account for only 50% of services (by code) unless extenuating circumstances are prior approved.”',
        status: 'plan-dependent',
        cites: [S.abcbs],
        verifyVia: 'Benefits verification: ask whether the member’s plan lists ABA supervision, parent training or assessment as eligible telehealth services.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Most fully insured and governmental contracts need no ABA prior approval under the policy. Where review applies: ' + AR_PA_LAW + ' Arkansas Blue Cross publishes no ABA-specific turnaround.',
        status: 'plan-dependent',
        cites: [S.abcbs, S.act1106, S.act575, S.erisa],
        verifyVia: 'Benefits verification: confirm whether the contract requires Prior Approval and, if so, Lucet’s expected turnaround and reauthorization lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Policy 2011053 notes that mandated ABA coverage may be subject to the plan’s coordination-of-benefits provisions.' + AR_COMMERCIAL_COB_TAIL,
        status: 'plan-dependent',
        cites: [S.abcbs, S.secI, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Arkansas Blue Cross at benefits verification for the member’s coordination-of-benefits order and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Arkansas Blue Cross require prior authorization for ABA?', a: 'Not for most fully insured contracts. Policy 2011053 says metallic, commercial group and individual, and governmental or church self-insured contracts have no PA requirement; FEP and ERISA self-insured contracts need Prior Approval through Lucet.' },
      { q: 'Does Arkansas Blue Cross still cap ABA at $50,000 a year?', a: 'Only for grandfathered plans, per policy 2011053. Non-grandfathered plans follow the policy’s criteria, and the Arkansas Insurance Department does not allow age limits on autism treatment for fully insured plans.' },
      { q: 'Can ABA be delivered by telehealth with Arkansas Blue Cross?', a: 'Direct technician ABA (97153 and similar) is not covered by telehealth. Parent training, supervision and some assessment may be, if the plan allows, up to 50% of services by code.' },
      { q: 'What diagnosis does Arkansas Blue Cross need?', a: 'A multidisciplinary evaluation by a physician specialist, a speech therapist and a child psychologist who are not school employees, including autism-specific testing such as ADOS, ADI-R or CARS.' },
    ],
  },

  'aetna-arkansas': {
    slug: 'aetna-arkansas',
    family: 'aetna',
    cardDesc: 'Aetna ABA medical necessity guide + precertification of all ten ABA codes + Arkansas’s § 23-99-418 mandate layer.',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024). Arkansas’s Act 575 gold-card exemption can lift PA for a provider with 90%+ approvals on a fully insured plan',
      status: 'verified',
      cites: [S.aetnaPrecert, S.act575],
    },
    treatmentPA: {
      value: 'Required: precertification of 97153–97158, 0362T and 0373T; progress is re-evaluated every six months; the reauthorization interval is set by the plan',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (behavioral health number on the card): confirm precertification and the reauthorization interval.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) “obtained by an appropriate provider”',
      status: 'verified',
      cites: [S.aetnaGuide],
    },
    payer: 'Aetna in Arkansas',
    state: 'AR', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Arkansas',
    h1: 'Aetna ABA coverage in Arkansas: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Arkansas: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Arkansas families: the national medical necessity guide, precertification of all ABA codes, Arkansas’s § 23-99-418 autism mandate and its age and dollar terms, the Prior Authorization Transparency Act, and behavior-analyst registration.',
    intro: [
      'For an intake team in Arkansas, an Aetna card means three layers: Aetna’s national ABA medical necessity guide and precertification list, Arkansas’s autism mandate in § 23-99-418 with the Prior Authorization Transparency Act, and the plan’s funding type, which decides whether either state law applies. Aetna is not one of Arkansas’s PASSEs.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s ABA medical necessity guide' },
      ...AR_MANDATE_ATGLANCE_COMMON,
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Arkansas',
        body: [
          'Aetna’s ABA medical necessity guide (©2026) requires a DSM-5 ASD diagnosis from an appropriate provider, functional impairment on a standardized scale from the past 12 months (at least one standard deviation below the mean, or a significant risk of harm), and a measurable treatment plan; progress is evaluated every six months. Its only state exhibit is Maryland’s, so the national criteria apply in Arkansas. Aetna’s behavioral health precertification list (effective August 1, 2024) names all ten ABA codes, 97151 through 97158, 0362T and 0373T.',
          'Aetna’s Network Participation Criteria (5/26) set the technician tier: services “must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board,” with at least one hour of face-to-face supervision per 10 hours of paraprofessional ABA and the supervisor onsite with the child at least one hour a month.',
        ],
        cites: [S.aetnaGuide, S.aetnaPrecert, S.aetnaNPC],
      },
      {
        h2: 'The Arkansas mandate: what it guarantees',
        body: [AR_MANDATE_BODY],
        cites: [S.act196, S.abcbs],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [AR_LICENSURE_BODY],
        cites: [S.act432, S.bacbLic, S.act196, S.abaFee],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA?',
        body: [
          'Aetna publishes no ABA rate table. Its office manual (6/26) treats rates as a contract term: where a provider has both an intermediary contract and a direct agreement, “your direct Aetna rates will apply unless we specifically notify you otherwise,” and a member whose benefits are exhausted cannot be charged “more than the contracted rate.” Get the rates from your Aetna agreement. For a public benchmark, Arkansas Medicaid pays 97153 at $15.00 per 15 minutes.',
        ],
        cites: [S.aetnaOM, S.abaFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Arkansas mandate and PA law apply) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3, ABAS, VB-MAPP).' },
      { title: 'Prescription', desc: 'Arkansas’s mandate defines treatment as care prescribed or ordered by a licensed physician or psychologist.' },
    ],
    sources: [S.aetnaGuide, S.aetnaPrecert, S.aetnaCPB648, S.aetnaNPC, S.aetnaOM, S.act196, S.act1106, S.act575, S.act432, S.bacbLic, S.abcbs, S.abaFee, S.erisa, S.secI, S.cfr433, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'Services “must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board”; supervised staff may be a BCaBA or a paraprofessional, with “A minimum of one hour of face-to-face supervision” per 10 hours of ABA by the supervised provider and the supervisor “onsite with the child at least one hour a month.” Arkansas’s mandate requires ABA “provided by or supervised by a Board Certified Behavior Analyst.”',
        status: 'verified',
        cites: [S.aetnaNPC, S.act196],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA guide or participation criteria.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap is published. The guide gives typical intensities of 10–25 hours a week for comprehensive and 1–20 for focused programs (typical, not caps), with progress re-evaluated every six months.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      noteSignature: {
        value: 'Not addressed. Aetna sets treatment-plan content requirements but not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'The participating-provider agreement and Aetna Behavioral Health documentation standards.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-neutral in the guide; inpatient, residential or partial hospitalization settings use that level of care’s criteria. Arkansas’s mandate does not displace IEP or IFSP obligations.',
        status: 'verified',
        cites: [S.aetnaGuide, S.act196],
      },
      billAsProvider: {
        value: 'Services “must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists” where in scope, unless mandates, plan documents or contracts say otherwise. Arkansas registers rather than licenses behavior analysts, so the BCBA is the billing credential.',
        status: 'verified',
        cites: [S.aetnaGuide, S.act432],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s guide sets no age cap; its age ranges are typical, not limiting.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.act196, S.abcbs],
        verifyVia: 'Live benefits verification: establish fully insured vs. self-funded ERISA, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the ASD diagnosis, but medical necessity requires functional impairment on a standardized scale administered in the past 12 months.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'An appropriate provider: a licensed psychologist or psychiatrist, a physician, or another professional qualified to diagnose mental health conditions within scope.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale for diagnosis. The ABA guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s national ABA policy requires no physician referral; it requires precertification of all ten ABA codes.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.act196],
      },
      telehealth: {
        value: 'Aetna’s office manual (6/26) says Aetna Behavioral Health “offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out,” and providers “must act within the scope of their license and ensure that they have the proper licensure based on state requirements.” We did not find a current Aetna ABA telehealth code list.',
        status: 'plan-dependent',
        cites: [S.aetnaOM],
        verifyVia: 'Availity or the precertification line on the card: ask which ABA codes, POS and modifier Aetna pays by telehealth for this plan.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: AR_PA_LAW + ' Aetna publishes no Arkansas-specific ABA turnaround or reauthorization lead time.',
        status: 'plan-dependent',
        cites: [S.act1106, S.act575, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Arkansas-regulated) or self-funded ERISA, and what reauthorization lead time Aetna expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Aetna publishes no Arkansas-specific ABA coordination rule.' + AR_COMMERCIAL_COB_TAIL,
        status: 'plan-dependent',
        cites: [S.secI, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Aetna at benefits verification for the member’s coordination-of-benefits order and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Arkansas?', a: 'Yes, under its national ABA medical necessity guide for ASD, with Arkansas’s § 23-99-418 mandate layered on for fully insured group plans. Self-funded employer plans follow their own documents.' },
      { q: 'Does the Aetna ABA assessment need precertification in Arkansas?', a: 'Yes. 97151 and the other nine ABA codes are on Aetna’s behavioral health precertification list. A provider with an Arkansas gold-card exemption under Act 575 may be exempt on a fully insured plan.' },
      { q: 'What does Aetna pay for ABA in Arkansas?', a: 'Aetna publishes no ABA rates; they are in your participation agreement. Arkansas Medicaid’s 97153 rate ($15.00 per 15 minutes) is the only public benchmark.' },
    ],
  },

  'cigna-arkansas': {
    slug: 'cigna-arkansas',
    family: 'cigna',
    cardDesc: 'Evernorth EN0499 + autism resource guide + Arkansas’s § 23-99-418 mandate; no PA on assessment codes; Arkansas regulatory addendum on recoupment.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the policy covers ABA (Evernorth autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: complete the assessment and treatment plan, then the Applied Behavior Analysis Prior Authorization Form',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD under DSM-5-TR criteria; provisional, rule-out or school-only identifications do not count (EN0499)',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Arkansas',
    state: 'AR', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Arkansas',
    h1: 'Cigna / Evernorth ABA coverage in Arkansas: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Arkansas: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Arkansas families: policy EN0499, no PA on assessments, Arkansas’s § 23-99-418 autism mandate, the Prior Authorization Transparency Act, Evernorth’s Arkansas regulatory addendum, and behavior-analyst registration.',
    intro: [
      'For an intake team in Arkansas, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the autism resource guide, Arkansas’s autism mandate and prior-authorization law, and the plan’s funding type. Many Cigna members are on self-funded employer plans, so check funding first. Cigna is not an Arkansas PASSE.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Evernorth policy EN0499 (eff. 5/15/2026)' },
      ...AR_MANDATE_ATGLANCE_COMMON,
      { label: 'Fee schedule', value: 'Not public — Exhibit A of your Evernorth Provider Agreement; Provider Services 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Arkansas',
        body: [
          'Evernorth covers ABA under EN0499 (effective May 15, 2026). Per the autism resource guide, prior authorization “is no longer required for assessment” codes 97151, 97152 and 0362T with an autism diagnosis, when the provider is independently licensed or a BCBA and the policy covers ABA. Treatment needs the completed assessment and treatment plan on the ABA Prior Authorization Form. Neither document mentions Arkansas, so the national criteria apply.',
          'Evernorth’s Administrative Guidelines carry an Arkansas Regulatory Addendum for fully insured business. Citing A.C.A. § 23-63-1801 et seq., it limits recoupment to 18 months after payment (except fraud), lets the provider submit a corrected claim up to six months after a recoupment, bars retroactive eligibility denials after 120 days when eligibility was verified, and requires 90 days’ notice of a material contract amendment. The addendum does not apply to self-funded plans.',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin],
      },
      {
        h2: 'The Arkansas mandate: what it guarantees',
        body: [AR_MANDATE_BODY],
        cites: [S.act196, S.abcbs],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [AR_LICENSURE_BODY],
        cites: [S.act432, S.bacbLic, S.act196, S.abaFee],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth tells ABA providers: “For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement.” Virtual services carry modifier 95, which Evernorth says “will not change the reimbursement.” Non-credentialed technicians are paid only through the supervising provider’s claim. For a public benchmark, Arkansas Medicaid pays 97153 at $15.00 per 15 minutes.',
        ],
        cites: [S.ebhAdmin, S.cignaARG, S.abaFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Arkansas mandate, PA law and Evernorth’s Arkansas addendum apply) vs. self-funded ERISA.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure, and the date of the most recent diagnosis.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.act196, S.act1106, S.act575, S.act432, S.bacbLic, S.abcbs, S.abaFee, S.erisa, S.secI, S.cfr433, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'Case supervision by a BCBA, a Licensed Behavior Analyst, or an independently licensed clinician with ABA training, at one to two hours per ten hours of direct treatment; at 10 hours a week or less, at least one to two hours a week.',
        status: 'verified',
        cites: [S.en0499],
      },
      concurrentBilling: {
        value: '“Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time).”',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap. All ABA codes bill in 15-minute units, and only 97151–97158, 0362T and 0373T may be used.',
        status: 'verified',
        cites: [S.cignaARG],
      },
      noteSignature: {
        value: 'Each service record needs dates and times, location, the intervention, who was present, and the “Name, credential (if applicable), and signature of ABA provider who rendered the service.”',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'Goals and data are reported for each setting; primarily educational or vocational services are not covered, and ABA in academic settings must still meet the direct-treatment definition. The line-of-sight requirement does not apply to telehealth.',
        status: 'verified',
        cites: [S.en0499],
      },
      billAsProvider: {
        value: '“Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider.” On a CMS-1500, list only a BCBA or other licensed provider in box 33; electronic claims use payer ID 62308.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; focused intervention “should not be restricted by age.”' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.act196, S.abcbs],
        verifyVia: 'Live benefits verification or the Evernorth Autism Care Coordinator team, 877.279.7603: establish fully insured vs. self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the standardized instrument and baseline data must be from within 60 days before treatment, and current data within 60 days of a continued-treatment request.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional licensed to practice independently whose scope includes diagnosis, applying DSM-5-TR criteria.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated; it must be standardized, valid, complete and the current edition (for example Vineland-3, not Vineland-II).',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral; assessments need no PA, treatment needs the ABA PA form.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.act196],
      },
      telehealth: {
        value: '“All ABA CPT codes are covered telehealth services,” and EN0499 allows in-person, telehealth or hybrid delivery chosen on clinical factors. Bill modifier 95; providers “must meet all state requirements to provide virtual behavioral services.”',
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ebhAdmin],
      },
      authTurnaround: {
        value: AR_PA_LAW + ' Evernorth publishes no Arkansas-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.act1106, S.act575, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Arkansas-regulated) or self-funded ERISA, and what reauthorization lead time Evernorth expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Evernorth publishes no Arkansas-specific ABA coordination rule.' + AR_COMMERCIAL_COB_TAIL,
        status: 'plan-dependent',
        cites: [S.secI, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Cigna/Evernorth at benefits verification for the member’s coordination-of-benefits order and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Arkansas?', a: 'Yes, under Evernorth policy EN0499 for ASD, with Arkansas’s § 23-99-418 mandate for fully insured group plans.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in Arkansas?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'Can Cigna recoup an ABA claim years later in Arkansas?', a: 'For fully insured plans, Evernorth’s Arkansas addendum limits recoupment to 18 months after payment (except fraud) and allows a corrected claim within six months after a recoupment.' },
    ],
  },

  'unitedhealthcare-arkansas': {
    slug: 'unitedhealthcare-arkansas',
    family: 'unitedhealthcare',
    cardDesc: 'Optum ABA criteria (BH803ABASCC) + Arkansas’s § 23-99-418 mandate; no Arkansas state supplement; telehealth limited to 97155–97157.',
    assessmentPA: {
      value: 'Required: “Prior authorization is required for ABA *(unless otherwise specified or mandated by contract or law)” (Optum ABA Supplemental Clinical Criteria)',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required under the same criteria; the review interval is set per authorization',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express or the behavioral health number on the card: ask what review interval will be set.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5-TR ASD confirmed by the diagnosing clinician with at least one validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Arkansas',
    state: 'AR', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Arkansas',
    h1: 'UnitedHealthcare / Optum ABA coverage in Arkansas: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Arkansas: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Arkansas families: Optum’s ABA criteria, credential modifiers, the telehealth code list, Arkansas’s § 23-99-418 autism mandate, the Prior Authorization Transparency Act and behavior-analyst registration.',
    intro: [
      'For an intake team in Arkansas, a UnitedHealthcare card means three layers: Optum Behavioral Health’s national ABA criteria, Arkansas’s autism mandate and prior-authorization law, and the plan’s funding type. Optum’s ABA State Mandates supplement (July 2026) does not list Arkansas, so no Arkansas-specific Optum criteria apply. UnitedHealthcare is not an Arkansas PASSE.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      ...AR_MANDATE_ATGLANCE_COMMON,
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential modifier (HM/HN/HO/HP)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Arkansas',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026), which require prior authorization “unless otherwise specified or mandated by contract or law,” direct case supervision of 1–2 hours per 10 hours of treatment, and an explanation when use falls below 80% of authorized hours. Optum’s State Mandates supplement lists Arizona, California, Connecticut, Florida, Massachusetts, New Jersey and others, not Arkansas. Arkansas’s Act 575 gold-card exemption can still remove prior authorization for a provider on a fully insured plan.',
        ],
        cites: [S.optumSCC, S.optumSM, S.act575],
      },
      {
        h2: 'The Arkansas mandate: what it guarantees',
        body: [AR_MANDATE_BODY],
        cites: [S.act196, S.abcbs],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [AR_LICENSURE_BODY],
        cites: [S.act432, S.bacbLic, S.act196, S.abaFee],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA?',
        body: [
          'UnitedHealthcare publishes no ABA rate table; Optum pays from the contract. Its National Network Manual (effective Sept. 1, 2026) defines the “Fee Maximum” as the most a participating provider may be paid for a service and says “Reimbursement to clinicians is based upon licensure rather than degree.” Optum’s commercial ABA Reimbursement Policy (2022RP501A, updated June 2026) puts a credential modifier on every line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA, HP for a doctoral-level provider; indirect work is bundled into direct codes. For a public benchmark, Arkansas Medicaid pays 97153 at $15.00 per 15 minutes.',
        ],
        cites: [S.optumNNM, S.optumReimb, S.abaFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Arkansas mandate and PA law apply) vs. self-funded ERISA.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification on Provider Express.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD and severity level, confirmed with a validated tool (ADI-R, ADOS-2 and others).' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumReimb, S.optumNNM, S.act196, S.act1106, S.act575, S.act432, S.bacbLic, S.abcbs, S.abaFee, S.erisa, S.secI, S.cfr433, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'Consistent with CASP standards, “direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week.” Technicians should be RBTs or otherwise appropriately certified; Optum does not recommend parents serving as their own child’s RBT.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      concurrentBilling: {
        value: 'Yes, with limits: 97153 or 97154 may be reported with 97155 concurrently “as long as the criteria in the descriptors of both codes are met,” but “A single QHP may not report 97153 or 97154 with 97155 concurrently.”',
        status: 'verified',
        cites: [S.optumReimb],
      },
      dailyLimits: {
        value: 'No numeric cap in the criteria. Requested hours must be justified at the least restrictive appropriate level, and use below 80% of authorized hours must be explained at continued-service review. The reimbursement policy carries MUE and MFD charts.',
        status: 'verified',
        cites: [S.optumSCC, S.optumReimb],
      },
      noteSignature: {
        value: 'Not addressed. The criteria set what must be documented for coverage, not who signs a session note or when.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual (documentation standards) and the participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'ABA is provided at the least restrictive, most clinically appropriate level. Not covered: services that are not ABA, “such as 1:1 aid delivered simultaneously during classroom instruction,” or services covered under IDEA; school coordination is allowed.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      billAsProvider: {
        value: 'Every line carries the rendering credential: HM (RBT), HN (BCaBA), HO (master’s-level BCBA or licensed clinician), HP (doctoral level). The policy notes that state regulatory requirements “may supplement, modify or supersede” it.',
        status: 'verified',
        cites: [S.optumReimb],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The criteria carry no age limit; the member’s benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.act196, S.abcbs],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish fully insured vs. self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with severity level using validated tools, and use below 80% of authorized hours triggers review.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'A state-licensed physician, psychologist or other state-licensed clinician qualified to diagnose under DSM-5-TR.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one validated tool from a non-exhaustive list: screens (M-CHAT, CARS/CARS-2, RITA-T, STAT) and formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral; the criteria require prior authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.act196],
      },
      telehealth: {
        value: 'Optum’s Telehealth Billing guide (updated September 2025) says for commercial plans: “For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157.” Claims must use POS 02 or POS 10; telehealth modifiers alone are not paid. The criteria add that telehealth is “not intended to supplant” in-person service.',
        status: 'verified',
        cites: [S.optumTele, S.optumSCC],
      },
      authTurnaround: {
        value: AR_PA_LAW + ' Optum publishes no Arkansas-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.act1106, S.act575, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Arkansas-regulated) or self-funded ERISA, and what reauthorization lead time Optum expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Optum publishes no Arkansas-specific ABA coordination rule.' + AR_COMMERCIAL_COB_TAIL,
        status: 'plan-dependent',
        cites: [S.secI, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask UnitedHealthcare/Optum at benefits verification for the member’s coordination-of-benefits order and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Arkansas?', a: 'Yes, under Optum’s national ABA criteria for ASD, with Arkansas’s § 23-99-418 mandate for fully insured group plans.' },
      { q: 'Does Optum have Arkansas-specific ABA criteria?', a: 'No. Optum’s July 2026 ABA State Mandates supplement does not list Arkansas.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in Arkansas?', a: 'Only 97155, 97156 and 97157 on commercial plans, billed POS 02 or 10. The 97151 assessment and 97153 are not on Optum’s list.' },
      { q: 'Does UnitedHealthcare require RBT certification for ABA technicians?', a: 'The HM modifier’s approved rendering provider is a Registered Behavior Technician, and the criteria expect technicians to be RBTs or otherwise appropriately certified.' },
    ],
  },
};

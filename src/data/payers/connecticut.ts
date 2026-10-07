import type { PayerConfig, PayerSource } from './types.js';

/* Connecticut — researched October 2026 from primary sources only.
   cga.ct.gov serves an incomplete TLS chain to curl; every statute below was read in full
   through the https://r.jina.ai/<url> text proxy (current = General Statutes revised to
   Jan. 1, 2025; 2026/sup = 2026 Supplement, revised to Jan. 1, 2026). providers.ctbhp.com
   (Carelon BH CT) is a WordPress site readable through r.jina.ai; its PDFs (s18637.pcdn.co)
   and the ctdssmap.com bulletins download with plain curl. The ASD fee schedule CSV is a
   postback link on ctdssmap.com, but the file itself downloads directly from
   Get-Download-File?Filename=<file>&URI=fee_schedules/<file>. eregulations.ct.gov returned
   "Unable to Access Resource" for RCSA 17b-262-1051 to -1065, so the ASD regulation is cited
   from the DSS final wording posted with the May 2015 notice of decision. */

const S: Record<string, PayerSource> = {
  ch382a: { title: 'Conn. Gen. Stat. ch. 382a, §§ 20-185i to 20-185m — Behavior Analysts (licensure, exceptions, endorsement)', url: 'https://www.cga.ct.gov/current/pub/chap_382a.htm' },
  dphBA: { title: 'CT Department of Public Health — Behavior Analyst Licensing Requirements', url: 'https://portal.ct.gov/DPH/Practitioner-Licensing--Investigations/Behavioral-Analyst/Licensing-Requirements' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Connecticut: 2017, CT State Department of Public Health)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  s19a906: { title: 'Conn. Gen. Stat. § 19a-906 — Telehealth services (2026 Supplement)', url: 'https://www.cga.ct.gov/2026/sup/chap_368ll.htm#sec_19a-906' },
  s38a514b: { title: 'Conn. Gen. Stat. § 38a-514b — Coverage for autism spectrum disorder, group policies (2026 Supplement, incl. the Jan. 1, 2027 amendment)', url: 'https://www.cga.ct.gov/2026/sup/chap_700c.htm#sec_38a-514b' },
  s38a488b: { title: 'Conn. Gen. Stat. § 38a-488b — Coverage for autism spectrum disorder therapies, individual policies (2026 Supplement)', url: 'https://www.cga.ct.gov/2026/sup/chap_700c.htm#sec_38a-488b' },
  s38a526a: { title: 'Conn. Gen. Stat. § 38a-526a — Coverage for telehealth services, group policies (§ 38a-499a for individual policies)', url: 'https://www.cga.ct.gov/current/pub/chap_700c.htm#sec_38a-526a' },
  s38a591d: { title: 'Conn. Gen. Stat. § 38a-591d — Utilization review and benefit determinations (timeframes)', url: 'https://www.cga.ct.gov/current/pub/chap_700c.htm#sec_38a-591d' },
  s38a816: { title: 'Conn. Gen. Stat. § 38a-816(15) — Unfair claim settlement practices: health claim payment deadlines and 15% interest', url: 'https://www.cga.ct.gov/current/pub/chap_704.htm#sec_38a-816' },
  regs: { title: 'DSS Regulation 14-07, Requirements for Payment of Autism Spectrum Disorder Services (RCSA §§ 17b-262-1051 to 17b-262-1065) — final wording posted with the notice of decision, 5/21/2015', url: 'https://portal.ct.gov/-/media/sots/regulations/notices_of_intent/nod2015052101finalwordingpdf.pdf?la=en' },
  pb2530: { title: 'CMAP Provider Bulletin 2025-30 — Updates to Autism Spectrum Disorder Services (eff. 7/1/2025)', url: 'https://www.ctdssmap.com/CTPortal/Information/Get-Download-File?Filename=pb2025_30.pdf&URI=Bulletins/pb2025_30.pdf' },
  pb2557: { title: 'CMAP Provider Bulletin 2025-57 — October 2025 Updates to ASD Services (HUSKY B, eff. 10/1/2025)', url: 'https://www.ctdssmap.com/CTPortal/Information/Get-Download-File?Filename=PB25_57.pdf&URI=Bulletins/PB25_57.pdf' },
  asdIM: { title: 'CMAP Important Message — Addition of ASD services for the HUSKY B population (11/21/2025)', url: 'https://www.ctdssmap.com/CTPortal/Information/Get-Download-File?Filename=ASD_IM+_+11212025.pdf&URI=Important_Message%2fASD_IM+_+11212025.pdf' },
  pb2606: { title: 'CMAP Provider Bulletin 2026-06 — Updates to Fee Schedules and Rate Increases for Select Behavioral Health Services (eff. 1/1/2026)', url: 'https://www.ctdssmap.com/CTPortal/Information/Get-Download-File?Filename=pb26_06.pdf&URI=Bulletins/pb26_06.pdf' },
  asdFee: { title: 'CMAP Autism Spectrum Disorder fee schedule (CSV, "Autism Spectrum Disorder 1/1/2026")', url: 'https://www.ctdssmap.com/CTPortal/Information/Get-Download-File?Filename=refw242_feesched_asd_82.csv&URI=fee_schedules/refw242_feesched_asd_82.csv' },
  feeInstr: { title: 'CMAP Fee Schedule Instructions (last updated 9/4/2026; rate types ASD and ASK)', url: 'https://www.ctdssmap.com/CTPortal/Portals/0/StaticContent/Publications/Fee_Schedule_Instructions.pdf' },
  pb2338: { title: 'CMAP Provider Bulletin 2023-38 — Revised Guidance for Services Rendered via Telehealth (eff. 5/12/2023)', url: 'https://www.ctdssmap.com/CTPortal/Information/Get-Download-File?Filename=pb23_38.pdf&URI=Bulletins/pb23_38.pdf' },
  teleTable: { title: 'CMAP Telehealth Table (12-26-25)', url: 'https://www.ctdssmap.com/CTPortal/Portals/0/StaticContent/Publications/Telehealth_Table.xlsx' },
  handbook: { title: 'HUSKY Health Behavioral Health Provider Handbook, CT BHP / Carelon BH CT (revised 6/2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/76/Provider-Handbook-2026-final.pdf' },
  locIndex: { title: 'CT BHP — Level of Care Guidelines (Autism Spectrum Disorder Services)', url: 'https://providers.ctbhp.com/providers/level-of-care-guidelines-2/' },
  loc1: { title: 'CT BHP Level of Care Guideline — Comprehensive Diagnostic Evaluation, ASD', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/76/1.-Comprehensive-Diagnostic-Evaluation-ASD.pdf' },
  loc2: { title: 'CT BHP Level of Care Guideline — Behavior Assessment, ASD', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/76/2.-Behavior-Assessment-ASD.pdf' },
  loc5: { title: 'CT BHP Level of Care Guideline — Treatment Services, ASD', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/76/5.-Treatment-Services-ASD.pdf' },
  loc7: { title: 'CT BHP Level of Care Guideline — Observation and Direction, ASD', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/76/7.-Observation-and-Direction-ASD.pdf' },
  grid: { title: 'CT HUSKY Health ASD Services Grid (codes, authorization units, who may deliver; 8/13/2025)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/76/CT-HUSKY-Health-ASD-Services-Grid-8.13.25.pdf' },
  paRBT: { title: 'CT BHP Provider Alert PA-2025-13 — ASD Behavior Technician Requirements (9/17/2025, eff. 7/1/2025)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/76/PA-2025-13.pdf' },
  paRoles: { title: 'CT BHP Provider Alert PA-2026-06 — HUSKY Health Medicaid ASD Provider Enrollment vs. Carelon Qualification (7/10/2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/76/CT-BHP-PA-2026-6-ASD-roles.pdf' },
  paADE: { title: 'CT BHP Provider Alert PA-2026-02 — ASD Diagnostic Evaluation Requirements (2/17/2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/76/CT-BHP-PA-2-2026-ADE.pdf' },
  paHuskyB: { title: 'CT BHP Provider Alert PA-2026-01 — Expansion of HUSKY B Coverage for ASD Services (2/6/2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/76/CT-BHP-PA-2026-01-HUSKY-B-SERVICES-FOR-ASD.pdf' },
  bhpBulletins: { title: 'CT BHP — Provider Bulletins and Alerts', url: 'https://providers.ctbhp.com/providers/bulletins/' },
  bhpOverview: { title: 'Connecticut Behavioral Health Partnership (CT BHP) 101 — Carelon BH CT presentation to the BHP Oversight Council (March 2026)', url: 'https://prdext3.cga.ct.gov/ph/BHPOC/related%5C20260101_2026%5C20260311/CT%20BHP-Carelon%20Overview%202026.pdf' },
  dssOverview: { title: 'CT DSS — Overview of HUSKY Health: Quality and Cost Trends (December 2020)', url: 'https://portal.ct.gov/-/media/departments-and-agencies/dss/communications/husky-health-overview-of-quality-and-cost-trends-presentation-121020.pdf' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; only state exhibit: Maryland)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaOM: { title: 'Aetna provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  aetnaTele: { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table, Commercial vs. Medicare columns; last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines incl. Connecticut Regulatory Addendum (PCOMM-2026-191, September 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates (BH 803ABA STM72026, eff. July 2026; Connecticut entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated June 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumNNM: { title: 'Optum National Network Manual (BH02330, effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  anthemCTPA: { title: 'Anthem BCBS — Connecticut Precertification/Prior Authorization List, Commercial (September 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/CT_PA_List.pdf' },
  anthemRG: { title: 'Anthem BCBS — Commercial Applied Behavior Analysis Provider Resource Guide (multi-state incl. Connecticut, June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
  ccMolina: { title: 'ConnectiCare — 2026 ConnectiCare Integration with Molina Healthcare (last updated 5/12/2026)', url: 'https://www.connecticare.com/providers/molina' },
  ccComPA: { title: 'ConnectiCare — Preauthorization Requirements, Commercial (effective 1/1/2026; review date 6/26/2026)', url: 'https://www.connecticare.com/-/media/Project/PWS/Microsites/ConnectiCare/PDFs/Providers/Provider-Resources/preauthorization-list-commercial-connecticare.pdf' },
  ccMktPA: { title: 'ConnectiCare — Prior Authorization Requirements, Marketplace 2026', url: 'https://www.connecticare.com/-/media/Project/PWS/Microsites/ConnectiCare/PDFs/Providers/Provider-Resources/PA-Lists/provider-pa-list-marketplace-2026-connecticare.pdf' },
  ccPolicies: { title: 'ConnectiCare — Medical Coverage Criteria (links Optum Behavioral Health clinical resources)', url: 'https://www.connecticare.com/providers/our-policies/medical' },
};

/* ---- Shared Connecticut commercial layer (same facts on every commercial guide) ---- */
const CT_MANDATE_BODY =
  'Connecticut’s autism mandate is two parallel statutes: § 38a-514b for group policies and § 38a-488b for individual policies. Each requires coverage “for the diagnosis and treatment of autism spectrum disorder,” which the law treats as an illness. Covered treatments must be medically necessary and “identified and ordered by a licensed physician, licensed psychologist or licensed clinical social worker,” following a treatment plan written by a licensed behavior analyst, physician, psychologist or licensed clinical social worker after a comprehensive evaluation or reevaluation. “Behavioral therapy,” which expressly includes applied behavior analysis, is covered when it is “Provided to children less than twenty-one years of age” and “provided or supervised by (i) a licensed behavior analyst, (ii) a licensed physician, or (iii) a licensed psychologist.” Supervision is defined as “at least one hour of face-to-face supervision” for every ten hours of behavioral therapy. From January 1, 2027, the age limit rises: Public Act 25-3 of the November 2025 special session changes the text to individuals “under twenty-six years of age.” The statute bans visit limits “on any basis other than a lack of medical necessity” and cost-sharing heavier than for other medical conditions. The 2015 amendment (June Sp. Sess. P.A. 15-5) deleted the old coverage limit, so no dollar cap remains. Two utilization-review protections help intake: outside inpatient care, the carrier may review the treatment plan “not more than once every six months” unless the treating clinician agrees or changes the plan, and “the results of a diagnosis shall be valid for a period of not less than twelve months.” Coverage can still carry the policy’s ordinary terms (coordination of benefits, network rules, limits on services by family or household members). Nothing in the statute requires a plan to pay for special education under an IEP. The mandate binds fully insured policies issued in Connecticut. Self-funded employer plans fall under ERISA instead.';

const CT_LICENSURE_BODY =
  'Yes. Connecticut licenses behavior analysts, and the license is required to practice. Conn. Gen. Stat. § 20-185j(a) says: “No person may practice behavior analysis unless licensed pursuant to section 20-185k or 20-185l.” Licensure began July 1, 2018 and is run by the Department of Public Health. The route is simple for a current BCBA. Under § 20-185k, DPH “shall grant a license as a behavior analyst to any applicant who furnishes evidence satisfactory to the commissioner that such applicant is certified as a behavior analyst by the Behavior Analyst Certification Board.” The application is online only and costs $350. DPH verifies the BCBA online and requires verification of every other state license you hold or have held. The license renews every year for $180, with current BACB certification and a one-time two hours of training on PTSD, suicide-risk, depression and grief screening and suicide prevention, then repeated every six years. Section 20-185l adds licensure by endorsement for people licensed in a state with substantially similar or higher requirements. Several people do not need the license (§ 20-185j(c)): a BCaBA “working under the supervision of a behavior analyst” under BACB standards; anyone who “implements an intervention based on behavior analysis under the supervision of a behavior analyst” (RBTs and technicians); students in an accredited program under direct supervision; course instructors; family members carrying out a plan; and other licensees acting within their own scope who do not call themselves behavior analysts. The license matters for payment too. The commercial mandate covers behavioral therapy only when it is provided or supervised by a licensed behavior analyst, physician or psychologist, so a BCBA without a Connecticut license cannot be the supervising clinician on a fully insured Connecticut plan.';

const CT_TELEHEALTH_LICENSE =
  'Telehealth from another state does not get around the license. Under § 19a-906(a)(12)(A), a “telehealth provider” means a provider “licensed pursuant to title 20,” the title that contains the behavior analyst chapter. A separate route let behavior analysts licensed in another state treat Connecticut patients by telehealth after registering with DPH and applying for a Connecticut license. In the 2026 Supplement that route applies only “on or before June 30, 2025.” Section 19a-906(j) lets a telehealth provider serve a patient “from any location to a patient in any location,” but only “subject to compliance with … state licensing standards.” A Connecticut agency that contracts with an out-of-state telehealth provider who has no DPH license must check that provider’s DPH registration (§ 19a-906(k)). Our reading, as of the 2026 Supplement: a BCBA must hold a Connecticut license to treat a member located in Connecticut, in person or by telehealth. We did not review 2026-session public acts. Confirm with DPH (dph.counselorsteam@ct.gov) before relying on any exception.';

const CT_TELE_INSURANCE =
  ' For a fully insured Connecticut plan, § 38a-526a (group; § 38a-499a for individual policies) requires coverage of care “provided through telehealth, to the extent coverage is provided for such advice, diagnosis, care or treatment when provided through in-person consultation between the insured and a health care provider licensed in the state.” A plan may not exclude a service “solely because such service is provided only through telehealth … provided telehealth is appropriate for the provision of such service,” and any utilization review must use the same criteria as for in-person care. The section’s own list of “telehealth provider” professions does not name behavior analysts (chapter 382a), so ask the carrier how it treats ABA under it. Self-funded employer plans are outside the statute.';

const CT_PROMPT_PAY =
  'Connecticut’s prompt-pay rule is in its unfair claim settlement statute, § 38a-816(15). An insurer must pay a claim within 60 days of receipt if filed on paper and within 20 days if filed electronically. If information is missing, it must list every deficiency within 30 days (paper) or 10 days (electronic), then pay within 30 or 10 days of receiving what it asked for. A late claim carries interest “at the rate of fifteen per cent per annum.” The statute defines “health care provider” to include anyone licensed under chapters 375 to 383c, a range that takes in licensed behavior analysts (chapter 382a). It applies to insured policies. Self-funded ERISA plans follow federal claim rules instead.';

const CT_FEE_BENCH =
  ' For a public benchmark, Connecticut Medicaid’s ASD fee schedule (rates effective January 1, 2026) pays 97153 at $14.00 per 15 minutes. Commercial contracts are negotiated separately.';

const MANDATE_REFERRAL_TAIL =
  ' For a fully insured Connecticut plan, §§ 38a-514b(c) and 38a-488b(c) cover ABA only when it is “identified and ordered by a licensed physician, licensed psychologist or licensed clinical social worker” and follows a treatment plan by a licensed behavior analyst, physician, psychologist or LCSW. Get that order before the first request. Self-funded ERISA plans are outside the statute.';

const MANDATE_AGE_TAIL =
  ' For fully insured Connecticut plans, the mandate covers behavioral therapy for children under 21 today and for individuals under 26 from January 1, 2027 (Nov. Sp. Sess. P.A. 25-3). It has no dollar cap. Self-funded ERISA plans are outside the statute, so the plan’s funding type decides whether this applies.';

const turnaround = (carrier: string): string =>
  `Depends on how the plan is funded. Fully insured Connecticut plans fall under § 38a-591d. For a non-urgent prospective or concurrent request, the carrier must decide “not later than seven calendar days after the date the health carrier receives such request.” It may extend once by up to five calendar days for circumstances beyond its control, or by up to fifteen if the clinician says the service will not start for at least three months. Retrospective requests get 30 days. Urgent requests are decided within 24 hours. A concurrent urgent request to extend a course of treatment counts only if made at least 24 hours before the current authorization ends. After a medical-necessity denial, the carrier must offer your clinician a conference with a clinical peer, who has authority to reverse the denial. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions “not later than 15 days after receipt of the claim,” one 15-day extension, urgent care within 72 hours. ${carrier} publishes no Connecticut-specific ABA turnaround.`;

const turnaroundVia = (carrier: string): string =>
  `At benefits verification ask whether the plan is fully insured (Connecticut-regulated) or self-funded (ERISA), and what reauthorization lead time ${carrier} expects.`;

const cob = (carrier: string): string =>
  `${carrier} is primary to Connecticut Medicaid. HUSKY Health is “the payer of last resort,” and if a member has third-party coverage “the benefits of these policies must be fully exhausted prior to claim submission” to Medicaid (42 CFR 433.139). So be in the commercial network and get its authorization as well as the Carelon BH CT authorization. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)). CHAMPVA is “the last payer” (38 CFR 17.270). Connecticut’s autism statutes let insured coverage carry the policy’s ordinary coordination-of-benefits terms (§ 38a-514b(f)). We did not read Connecticut’s coordination-of-benefits regulation, so get the order between two parents’ plans from the carriers.`;

const cobVia = (carrier: string): string =>
  `Ask ${carrier} at benefits verification for the member’s coordination-of-benefits order between both parents’ plans, and record every other coverage the child has (HUSKY, TRICARE, CHAMPVA).`;

const COMMERCIAL_GLANCE = [
  { label: 'State mandate', value: 'Conn. Gen. Stat. § 38a-514b (group) and § 38a-488b (individual)' },
  { label: 'Mandate age', value: 'Behavioral therapy for children under 21; under 26 from January 1, 2027 (Nov. Sp. Sess. P.A. 25-3)' },
  { label: 'Mandate caps', value: 'No dollar cap and no visit limits except for medical necessity (the old coverage limit was deleted in 2015)' },
  { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
  { label: 'Licensure', value: 'Required: DPH license for behavior analysts (§ 20-185j); a current BCBA qualifies (§ 20-185k)' },
];

const CT_LIC_FAQ = {
  q: 'Do Connecticut licensure laws stop a BCBA without a Connecticut license from practicing there, including by telehealth?',
  a: 'Yes. Conn. Gen. Stat. § 20-185j says “No person may practice behavior analysis unless licensed.” A current BCBA gets the license from DPH by showing BACB certification ($350, renewed yearly), and § 20-185l offers licensure by endorsement. RBTs, technicians and BCaBAs working under a licensed behavior analyst’s supervision do not need their own license. Telehealth into Connecticut also requires the Connecticut license: the telehealth statute (§ 19a-906) defines a telehealth provider as someone licensed under title 20, and its temporary route for out-of-state behavior analysts applied only on or before June 30, 2025 (2026 Supplement text). On a fully insured plan, the autism mandate covers behavioral therapy only when it is provided or supervised by a licensed behavior analyst, physician or psychologist.',
};

const CLAIMS_SECTION_H2 = 'Claims: how fast a Connecticut insurer must pay';

export const connecticutPayers: Record<string, PayerConfig> = {
  'connecticut-medicaid': {
    slug: 'connecticut-medicaid',
    cardDesc: 'HUSKY Health has no MCOs: ABA (ASD services) is fee-for-service, authorized by Carelon BH CT, with published rates.',
    assessmentPA: {
      value: 'Yes. The behavior assessment (H0031) needs prior authorization from Carelon BH CT: up to 10 hours in a 6-month initial authorization, and up to 6 hours for a reassessment (PB 2025-30; the fee schedule flags H0031 PA “Y”). The comprehensive diagnostic evaluation (90791-U5) is registered for up to 3 encounters, and more need prior authorization',
      status: 'verified',
      cites: [S.pb2530, S.asdFee, S.loc2, S.loc1],
    },
    treatmentPA: {
      value: 'Yes. “All ASD services require prior authorization from Carelon Behavioral Health of Connecticut” (CMAP Important Message, 11/21/2025). The first treatment authorization runs up to 90 days, and later ones up to 6 months',
      status: 'verified',
      cites: [S.asdIM, S.grid, S.loc5],
    },
    dxRequired: {
      value: 'Yes. Treatment may be authorized “only if the comprehensive diagnostic evaluation diagnoses the member with ASD” (PB 2025-30). The evaluation must come from an independently licensed practitioner, and an evaluation by a BCBA does not qualify',
      status: 'verified',
      cites: [S.pb2530, S.paADE],
    },
    payer: 'Connecticut Medicaid (HUSKY Health)',
    state: 'CT', kind: 'state-medicaid',
    pill: 'Payer Guide · Connecticut Medicaid (HUSKY Health)',
    h1: 'Connecticut Medicaid (HUSKY Health) ABA coverage: the intake guide.',
    metaTitle: 'Connecticut Medicaid (HUSKY) ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How HUSKY Health covers ABA in Connecticut: ASD services for members under 21 on HUSKY A, B, C and D, paid fee-for-service (no managed care plans), authorized by Carelon Behavioral Health of Connecticut, with published H0031/97153/H2014 rates, technician rules, and Connecticut’s behavior analyst license.',
    intro: [
      'Connecticut is one of the few states with no Medicaid managed care plans. HUSKY Health is a self-insured, managed fee-for-service program. The state pays claims through its fiscal agent, Gainwell Technologies, and contracts with administrative services organizations to run utilization management. For behavioral health, including autism services, that organization is Carelon Behavioral Health of Connecticut, acting for the Connecticut Behavioral Health Partnership of DSS, DCF and DMHAS. There is no plan to pick from the card. Every HUSKY child with ASD goes through the same rules, the same authorization portal and the same fee schedule.',
      'Connecticut calls the benefit “Autism Spectrum Disorder (ASD) services”: a comprehensive diagnostic evaluation, a behavior assessment, a behavioral plan of care, and treatment. ABA is the main treatment. The services cover members under 21 on HUSKY A, C and D, and since October 1, 2025 HUSKY B too. Connecticut bills ABA with a mix of HCPCS and CPT codes (H0031, H0032, 97153, H2014, H0046, 97156, 97158, T1016), not the full 97151–97158 set, so build your billing setup around the state’s grid.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as ASD services for members under 21 (HUSKY A, B, C and D; HUSKY B from 10/1/2025)' },
      { label: 'Structure', value: 'No MCOs: self-insured, managed fee-for-service; Carelon BH CT is the behavioral health ASO, Gainwell pays claims' },
      { label: 'Prior auth', value: 'Every ASD service, from Carelon BH CT via ProviderConnect; the diagnostic evaluation is registered for up to 3 encounters' },
      { label: 'Rates (eff. 1/1/2026)', value: '97153 $14.00/15 min · H2014 $15.24/15 min · H0031 $87.98 · H0032 $87.98 · H0032-TS $60.70 · H0046 $22.00 · 97156 $21.20 · 97158 $3.08 · T1016 $11.33' },
      { label: 'Supervision', value: 'Observation and direction at least 10% of technician hours, one-on-one, billed as H0046' },
      { label: 'Licensure', value: 'DPH behavior analyst license required (§ 20-185j); out-of-state telehealth practitioners must also hold an active CT license (PB 2023-38)' },
      { label: 'Other insurance', value: 'Medicaid is the payer of last resort; exhaust commercial benefits first' },
    ],
    sections: [
      {
        h2: 'No MCOs: how HUSKY Health runs ABA',
        body: [
          'DSS describes HUSKY Health as “a self-insured, managed fee-for-service approach,” unlike the capitated managed care most states use. Carelon’s March 2026 briefing to the legislature’s oversight council puts it the same way: “CT Medicaid is a fee-for-service model.” DCF, DMHAS and DSS “jointly contract with and manage Carelon Behavioral Health as the Administrative Services Organization (ASO),” which it has been since 2006. The provider handbook (revised 6/2026) says the partnership covers “adults, children and families enrolled in HUSKY A, B, C, D, and DCF Limited Benefit programs, including those with other insurance.” In practice the work is split. DSS and Gainwell handle enrollment and claims. Carelon BH CT qualifies ASD providers, authorizes services through ProviderConnect, and runs ASD care coordination for families. Claims go to Gainwell, not to Carelon.',
          'HUSKY B (Connecticut’s CHIP) was added on October 1, 2025: “all ASD services covered under HUSKY A, C, and D are now also covered under HUSKY B.” Carelon could take HUSKY B requests from February 2026 and accepted retroactive requests back to October 1, 2025. The parent-training and case-management codes added for HUSKY B “are not subject to HUSKY B cost sharing.”',
        ],
        cites: [S.dssOverview, S.bhpOverview, S.handbook, S.asdIM, S.paHuskyB, S.pb2557],
      },
      {
        h2: 'Codes, authorization limits and the published rates',
        body: [
          'Carelon’s ASD Services Grid (8/13/2025) lists the Connecticut codes. 90791-U5 is the comprehensive diagnostic evaluation (with -52 and -22 for shorter and longer encounters). H0031 is the behavior assessment (1 unit = 1 hour, up to 10 units over 6 months initially and up to 6 for reassessment). H0032 is treatment plan development (1 untimed unit per 6 months), and H0032-TS is program book development (3 untimed units per 6 months). 97153 is service delivery by a BCaBA or behavior technician, and H2014 is service delivery by a BCBA or clinician, both in 15-minute units, with hours set by medical necessity. H0046 is observation and direction. 97158 is group treatment. 97156 is parent training without the child, and 97156-U2 with the child, 4 units a week. T1016 is case management, such as attending PPT meetings: 96 units a year without prior authorization, then authorization from unit 97. Treatment authorizations run up to 90 days initially and up to 6 months after that.',
          'The ASD fee schedule lists these rates effective January 1, 2026, after the rate increase in PB 2026-06: 97153 $14.00 (was $12.17); H2014 $15.24; H0031 $87.98; H0032 $87.98; H0032-TS $60.70; H0046 $22.00; 97158 $3.08. Rate type ASK, used for members 20 and under, adds 97156 at $21.20 (from 7/1/2025) and T1016 at $11.33. Every code except T1016 is flagged PA “Y.” DSS pays the lowest of the fee schedule, the Medicare rate, the billed amount, your usual and customary charge, or your lowest price to anyone else, so bill your usual and customary charge.',
        ],
        cites: [S.grid, S.pb2530, S.pb2557, S.asdFee, S.feeInstr, S.pb2606, S.regs],
      },
      {
        h2: 'Who can deliver ASD services, and how providers qualify',
        body: [
          'Performing providers (BCBAs, physicians, APRNs, PAs, psychologists, LCSWs, LPCs and LMFTs) must enroll in Medicaid and supervise and take “full professional responsibility for all ASD treatment services.” Only the billing provider is paid: “No BCaBA or technician may bill or receive payment from the department for ASD services.” Enrollment alone is not enough. DSS says Carelon BH CT must qualify every ASD provider first: “holding a behavioral health license in the state of Connecticut does not, by itself, qualify a clinician to provide services for individuals with ASD.” Qualification takes a DCF background-check release, a letter of intent, a CV showing years of direct ASD experience, a diploma, the current license (and BCBA certificate if applicable), two sample behavior support plans with functional assessments, and liability insurance of at least $500,000 per occurrence and $1.5 million aggregate if an agency policy does not cover you. BCBAs requalify every two years. Gainwell’s enrollment then takes 4–8 weeks. An out-of-state provider counts as a border provider only if their home residence is within 45 minutes of the Connecticut line.',
          'Technicians hired from July 1, 2025 need one of: BCaBA plus 6 months of full-time-equivalent ASD experience; RBT plus 6 months; a bachelor’s in a related field plus 6 months; an associate’s in a related field plus 6 months; or a high school diploma plus the RBT. Anyone without the experience or a related degree must finish the 40-hour RBT training within 180 days of hire and pass the RBT competency assessment within a year. Every technician needs 6 hours of ASD training a year, documented in the employee record.',
        ],
        cites: [S.regs, S.asdIM, S.paRoles, S.handbook, S.paRBT],
      },
      {
        h2: 'Does a BCBA need a Connecticut license? (out-of-state and telehealth)',
        body: [CT_LICENSURE_BODY, CT_TELEHEALTH_LICENSE + ' For HUSKY specifically, DSS is explicit. An in-state Medicaid provider that contracts with out-of-state practitioners for telehealth must be able to provide in-person care when needed, and “the out-of-state practitioner must hold an active CT license.” Out-of-state practitioners not contracted with an in-state Medicaid provider cannot enroll to bill telehealth, except under 42 CFR 431.52.'],
        cites: [S.ch382a, S.dphBA, S.bacbLic, S.s19a906, S.pb2338, S.paRoles],
      },
    ],
    collect: [
      { title: 'HUSKY ID and program', desc: 'HUSKY A, B, C or D: all four cover ASD services under 21. Check eligibility in AEVS before each session.' },
      { title: 'Comprehensive diagnostic evaluation', desc: 'By an independently licensed practitioner, using validated tools (ADOS, CARS or GARS). If older than 12 months, add a letter confirming the diagnosis from a current licensed provider, dated within 12 months.' },
      { title: 'Medical evaluation', desc: 'A physical or medical evaluation from the past 12 months, which the diagnostic evaluation must review.' },
      { title: 'Other insurance', desc: 'Medicaid pays last. Commercial benefits must be used up first.' },
      { title: 'Birth to Three (under 3)', desc: 'For a child under 3, document that Birth to Three services were explored and exhausted.' },
      { title: 'Caregiver availability', desc: 'An adult caregiver (18 or older) must be present at all times during home and community sessions.' },
    ],
    sources: [S.dssOverview, S.bhpOverview, S.handbook, S.regs, S.pb2530, S.pb2557, S.asdIM, S.pb2606, S.asdFee, S.feeInstr, S.grid, S.loc1, S.loc2, S.loc5, S.loc7, S.paRBT, S.paRoles, S.paADE, S.paHuskyB, S.pb2338, S.teleTable, S.ch382a, S.dphBA, S.s19a906, S.cfr433, S.cfr440],
    deliveryRules: {
      supervision: {
        value: 'The performing provider must observe and direct each BCaBA or technician one-on-one, “at a frequency and duration equal to or greater than ten percent of the number of hours” of treatment they deliver, with regular direct observation of the technician working with the child. Carelon’s PA-2025-13 requires evidence of direct observation at least 10% of the time direct services occur, documented “in a separate observation and direction contact note that corresponds with the submitted claim.” Requests for more than 10% need documented extenuating circumstances.',
        status: 'verified',
        cites: [S.loc7, S.paRBT, S.regs],
      },
      concurrentBilling: {
        value: 'Yes, for observation and direction. The performing provider bills H0046 for observing and directing a technician only when “the performing provider is in the same location as the BCaBA or technician and the individual,” or does it by synchronous video telehealth as policy allows, and the work is for the child’s benefit. Its units are authorized together with treatment. No source read addresses billing H2014 and 97153 for the same time.',
        status: 'verified',
        cites: [S.loc7, S.regs, S.grid],
      },
      dailyLimits: {
        value: 'No per-day cap is published. Limits are set through authorization: behavior assessment H0031 up to 10 hours per 6 months initially and up to 6 for reassessment; H0032 1 unit and H0032-TS 3 units per 6 months; parent training 97156 4 units a week, plus 4 more with documented extenuating circumstances; T1016 96 units a year before prior authorization. Treatment hours per week are requested by the provider and set by medical necessity. The fee schedule CSV has a QTY column, but DSS’s instructions say QTY “Applies only to MEDS fee schedules.”',
        status: 'verified',
        cites: [S.grid, S.pb2530, S.feeInstr, S.asdFee],
      },
      noteSignature: {
        value: 'Every treatment session needs a clinical progress note. “The technician shall sign all clinical progress notes,” and the performing provider also signs every note for a session they observed or supervised. Notes record the services, date and time, length, location and type of setting, who took part, and who was present. Caregiver participation goes in the notes with the caregiver’s name, relationship, date, time, extent and type. Keep records for at least five years.',
        status: 'verified',
        cites: [S.regs, S.loc5],
      },
      placeOfService: {
        value: 'Treatment “can occur in any number of settings, including but not limited to the member’s home, agencies, hospitals, and the community,” and is “generally designed to be delivered in the member’s home or other appropriate community settings.” In the home and community, an adult caregiver (18 or older) “must be present at all times.” DSS does not pay for services that are “solely educational, vocational, recreational, or social,” or for respite or child care.',
        status: 'verified',
        cites: [S.loc5, S.regs],
      },
      billAsProvider: {
        value: 'Only the enrolled billing provider is paid. Performing providers enroll separately and either bill for themselves (individual practitioner) or render under a group, clinic or outpatient hospital that bills. “No BCaBA or technician may bill or receive payment” for ASD services. Technician time goes out as 97153 under the billing provider, and the supervising clinician’s time as H2014 or H0046.',
        status: 'verified',
        cites: [S.regs, S.paRoles, S.grid],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. ASD services are for “Medicaid enrolled members (HUSKY A, B, C, or D) under the age of 21.” ASD care coordination, which helps families find services, is open to HUSKY members of any age.',
        status: 'verified',
        cites: [S.loc5, S.regs, S.handbook],
      },
      dxRecency: {
        value: 'The treatment request must include a comprehensive diagnostic evaluation from the past 12 months. If it is older, a letter confirming the ASD diagnosis from a current treating licensed provider, dated within 12 months, is required. The other documents have their own windows: medical evaluation within 12 months, behavior assessment within 6 months, behavioral plan of care within 120 days of the request. The 2015 regulation allowed a 36-month window for the diagnostic evaluation, but Carelon’s current guideline and 2026 alerts apply 12.',
        status: 'verified',
        cites: [S.loc5, S.loc1, S.paHuskyB, S.regs],
      },
      diagnosingProviders: {
        value: 'Independently licensed practitioners only: psychiatrists, neurologists, pediatricians, psychologists, APRNs, LCSWs, LPCs or LMFTs working within their scope with ASD evaluation experience (Carelon’s grid also lists PAs). “Evaluations completed by provisionally licensed clinicians (LMSW, LPCA, LMFTA), Board Certified Behavior Analysts (BCBAs), or other unlicensed professionals do not meet requirements, even if co-signed by a licensed professional.”',
        status: 'verified',
        cites: [S.paADE, S.grid, S.loc1],
      },
      diagnosticTools: {
        value: 'The comprehensive diagnostic evaluation must be a full neurodevelopmental review of cognitive, behavioral, emotional, adaptive and social functioning using “Validated assessment tools, such as the ADOS, CARS, or GARS,” with a summary of findings and DSM-5-TR alignment. It must also review a medical evaluation from the past 12 months. The behavior assessment must measure current functioning with a validated instrument.',
        status: 'verified',
        cites: [S.paADE, S.loc1, S.loc2],
      },
      referral: {
        value: 'Yes, in substance. A licensed diagnostic practitioner must recommend the services: the behavior assessment “must be recommended by an independently licensed diagnostic practitioner,” and requests must document that recommendation, which a signed diagnostic evaluation recommending the services satisfies. The medical evaluation must come from a physician, APRN or PA within 12 months. EPSDT special-services requests need a prescription from a licensed diagnostic practitioner.',
        status: 'verified',
        cites: [S.loc2, S.regs],
      },
      telehealth: {
        value: 'Limited, and in person is the expectation. ASD services may be delivered by synchronous audio-video telehealth “only for procedure codes permitted in the CMAP Telehealth Table.” That table (12-26-25) lists 90791, H0031, H0046, H2014 and 97153 as telemedicine codes and T1016 as telemedicine or telephone. “Parent training (with or without the member present) is not permitted via telehealth and must be conducted in person.” Observation and direction may be done by synchronous video “as permitted under current telehealth policy.” Bill modifier GT or 95, with the place of service where the visit would have happened in person. Out-of-state telehealth practitioners need an active Connecticut license.',
        status: 'verified',
        cites: [S.paRoles, S.teleTable, S.loc7, S.pb2338],
      },
      authTurnaround: {
        value: 'Carelon decides non-urgent prospective and concurrent requests, including ASD services, “Within seven (7) calendar days,” and retrospective requests within 30 calendar days. ASD requests should be submitted “prior to or on the date of service/next date of service,” and initial ASD requests only once treatment staff are identified. This matches the federal fee-for-service limit of 7 calendar days for standard requests, effective January 1, 2026 (42 CFR 440.230(e)). Providers have 10 calendar days to start a Level I clinical appeal and 14 days for Level II.',
        status: 'verified',
        cites: [S.handbook, S.cfr440],
      },
      coordinationOfBenefits: {
        value: '“Medicaid is the payer of last resort. If a HUSKY Health member has applicable third-party coverage, the benefits of these policies must be fully exhausted prior to claim submission.” The eligibility check (AEVS) shows any third-party payer. The partnership expressly serves members “including those with other insurance,” so a child with commercial ABA coverage still needs the Carelon authorization for the Medicaid secondary claim.',
        status: 'verified',
        cites: [S.handbook, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Connecticut Medicaid cover ABA therapy?', a: 'Yes. HUSKY Health covers ASD services, including ABA, for members under 21 on HUSKY A, C and D, and on HUSKY B since October 1, 2025. Every service needs prior authorization from Carelon Behavioral Health of Connecticut.' },
      { q: 'Which managed care plan handles ABA for HUSKY members?', a: 'None. Connecticut has no Medicaid MCOs. HUSKY Health is self-insured fee-for-service: Carelon BH CT authorizes behavioral health services, including ASD services, as the state’s administrative services organization, and Gainwell pays the claims.' },
      { q: 'What does Connecticut Medicaid pay for ABA?', a: 'From January 1, 2026: 97153 (technician) $14.00 per 15 minutes, H2014 (BCBA or clinician) $15.24 per 15 minutes, H0031 behavior assessment $87.98, H0032 plan of care $87.98, H0032-TS program book $60.70, H0046 observation and direction $22.00, 97156 parent training $21.20, 97158 group $3.08 and T1016 case management $11.33.' },
      { q: 'Can a BCBA do the autism diagnostic evaluation for HUSKY?', a: 'No. Evaluations by BCBAs, provisionally licensed clinicians or other unlicensed professionals “do not meet requirements, even if co-signed by a licensed professional.” Use an independently licensed physician, psychologist, APRN, LCSW, LPC or LMFT experienced in ASD evaluation.' },
      { q: 'Can HUSKY ABA be delivered by telehealth?', a: 'Only for the codes on the CMAP Telehealth Table: 90791, H0031, H0046, H2014 and 97153 by video, and T1016 by video or phone. Parent training must be in person. Carelon expects in-person delivery as far as clinically appropriate.' },
      CT_LIC_FAQ,
    ],
  },

  'carelon-behavioral-health-connecticut': {
    slug: 'carelon-behavioral-health-connecticut',
    family: 'carelon',
    cardDesc: 'Not an MCO: the HUSKY behavioral health ASO that qualifies ASD providers and authorizes every ASD service; Gainwell pays.',
    assessmentPA: {
      value: 'Yes. Carelon authorizes the behavior assessment (H0031): up to 10 hours in a 6-month initial period, about 6 for a reassessment. Register the comprehensive diagnostic evaluation for up to 3 encounters in ProviderConnect, and request prior authorization for more',
      status: 'verified',
      cites: [S.loc2, S.loc1, S.grid],
    },
    treatmentPA: {
      value: 'Yes, through ProviderConnect: initial treatment authorizations up to 90 days, then up to 6 months, with baseline and progress data, the plan of care (within 120 days) and the behavior assessment (within 6 months)',
      status: 'verified',
      cites: [S.loc5, S.grid, S.handbook],
    },
    dxRequired: {
      value: 'Yes. An ASD diagnosis confirmed by a comprehensive diagnostic evaluation from an independently licensed practitioner. Carelon says evaluations by BCBAs or provisionally licensed clinicians do not qualify even if co-signed',
      status: 'verified',
      cites: [S.paADE, S.loc5],
    },
    payer: 'Carelon Behavioral Health of Connecticut (CT BHP)',
    state: 'CT', kind: 'medicaid-mco', parent: 'Connecticut Medicaid (HUSKY Health)',
    pill: 'Payer Guide · Carelon BH CT · Connecticut',
    h1: 'Carelon Behavioral Health of Connecticut (HUSKY ASD services): the intake guide.',
    metaTitle: 'Carelon Behavioral Health of Connecticut ABA Authorization Guide (HUSKY) | Carelu',
    metaDescription:
      'How Carelon Behavioral Health of Connecticut handles ABA for HUSKY Health: an administrative services organization, not a managed care plan. Provider qualification, ProviderConnect authorizations, level-of-care guidelines, technician and supervision rules, decision clocks and appeals.',
    intro: [
      'Carelon Behavioral Health of Connecticut is not a Medicaid health plan. Connecticut has no Medicaid MCOs. Carelon is the administrative services organization the Connecticut Behavioral Health Partnership (DSS, DCF and DMHAS) hires to manage HUSKY behavioral health care, and it has held that role since 2006. It does not pay claims or carry insurance risk: claims go to Gainwell Technologies, and DSS controls enrollment. What Carelon controls is the front door for ABA. It qualifies every ASD provider, reviews every authorization against its level-of-care guidelines, and coordinates care for families looking for a diagnosis or a provider.',
      'This guide covers working with Carelon itself. The benefit rules, codes and rates are on the Connecticut Medicaid guide. Contact: 877-552-8247, ctbhp@carelon.com.',
    ],
    atGlance: [
      { label: 'What it is', value: 'Behavioral health ASO for HUSKY A, B, C and D, not an MCO; claims are paid by Gainwell' },
      { label: 'Provider qualification', value: 'Required before Medicaid enrollment; BCBAs requalify every 2 years' },
      { label: 'Authorizations', value: 'ProviderConnect; ASD requests on or before the date of service' },
      { label: 'Decision clock', value: '7 calendar days non-urgent; 30 days retrospective' },
      { label: 'Provider appeals', value: 'Level I within 10 calendar days; Level II within 14 days of the Level I decision' },
      { label: 'Licensure', value: 'DPH behavior analyst license required in Connecticut (§ 20-185j)' },
    ],
    sections: [
      {
        h2: 'Carelon’s role: qualification and authorization, not enrollment or claims',
        body: [
          'Carelon’s July 2026 alert PA-2026-06 sets out the split. DSS and Gainwell handle “Enrollment and claims only,” and enrollment approval “is solely at the discretion of DSS.” Carelon BH CT’s role is “Qualification only”: reviewing clinical and experience documents to confirm a provider can deliver ASD services. Carelon “cannot provide enrollment status updates, expedite processing, activate enrollment, or address claims issues.” Enrollment questions go to the Gainwell Provider Assistance Center (800-842-8440) with your Application Tracking Number. Carelon’s qualification approval letter is one of the follow-on documents Gainwell needs before enrollment is complete.',
          'To qualify, send the DCF background-check release (with SSN and date of birth), a letter of intent, a CV showing years of direct ASD experience, your diploma, your current license and BCBA certificate, two redacted sample behavior support plans with functional assessments (or two diagnostic evaluations if you will only diagnose), and proof of liability insurance ($500,000 per occurrence and $1.5 million aggregate) if you are not covered by an agency. Applicants with less than two years of full-time experience may be interviewed. BCBAs requalify every two years and other clinicians every five, with a new DCF check each time.',
        ],
        cites: [S.paRoles, S.handbook],
      },
      {
        h2: 'Level-of-care guidelines and what a treatment request needs',
        body: [
          'Carelon reviews ASD requests against its level-of-care guidelines, one for each service. Each guideline adds that a request outside the criteria “must be individually reviewed and may not be denied unless the request does not meet the Department’s definition of medical necessity and, for anyone under 21, does not meet the EPSDT criteria.” A treatment request must include the requested interventions, intensity, setting and duration with the medical-necessity reasons; the behavioral plan of care (within 120 days); the behavior assessment (within 6 months); severity, skills and adaptive scores; the medical evaluation (within 12 months); the comprehensive diagnostic evaluation (within 12 months); and any IEP or IFSP. Baseline data are due at the start of treatment. After a year, every continued-stay review needs a full review of goals met, progress data, an updated plan of care and the latest IEP. Clinical eligibility requires a “challenging behavior” that is a health or safety risk, seriously interferes with home or community activities, or comes from a skill deficit that prevents age-appropriate activities. Parent or caregiver participation must be in the plan. For a child under 3, Birth to Three must have been “explored and exhausted.”',
          'Carelon also enforces the technician standards that took effect July 1, 2025 (BCaBA, RBT, or a related degree plus 6 months of ASD experience, or a high school diploma plus the RBT) and the observation-and-direction rule: at least 10% of technician hours, documented in a separate contact note that matches the claim.',
        ],
        cites: [S.loc5, S.loc7, S.locIndex, S.paRBT],
      },
      {
        h2: 'Does a BCBA need a Connecticut license? (out-of-state and telehealth)',
        body: [CT_LICENSURE_BODY, CT_TELEHEALTH_LICENSE + ' Carelon’s qualification packet asks for a “current professional clinical license” plus the BCBA certificate. DSS requires an active Connecticut license for out-of-state practitioners delivering HUSKY telehealth, and it treats an out-of-state provider as a border provider only if their home is within 45 minutes of the state line.'],
        cites: [S.ch382a, S.dphBA, S.s19a906, S.paRoles, S.pb2338],
      },
    ],
    collect: [
      { title: 'HUSKY ID', desc: 'Any HUSKY program (A, B, C or D) for a member under 21. Verify eligibility in AEVS, which also flags other insurance.' },
      { title: 'Diagnostic evaluation', desc: 'From an independently licensed practitioner, within 12 months or with a confirming letter dated within 12 months.' },
      { title: 'Medical evaluation', desc: 'Completed within the last 12 months.' },
      { title: 'IEP / IFSP', desc: 'Include it with the request if the child has one. It is required at continued-stay reviews after a year of service.' },
      { title: 'Need help finding care?', desc: 'Carelon’s ASD care coordination team helps families get a diagnosis and find providers, at any age.' },
    ],
    sources: [S.paRoles, S.handbook, S.loc1, S.loc2, S.loc5, S.loc7, S.locIndex, S.grid, S.paRBT, S.paADE, S.paHuskyB, S.bhpOverview, S.bhpBulletins, S.teleTable, S.pb2338, S.ch382a, S.dphBA, S.s19a906, S.cfr433, S.cfr440],
    deliveryRules: {
      supervision: {
        value: 'Carelon’s guideline: observation and direction “must be done one-to-one and documented in the medical record on a weekly basis,” equal to “at least 10 percent of the number of hours that each individual is receiving ASD treatment services,” including direct observation of each technician or BCaBA with the child. Evidence goes in a separate observation-and-direction contact note matching the claim (PA-2025-13).',
        status: 'verified',
        cites: [S.loc5, S.loc7, S.paRBT],
      },
      concurrentBilling: {
        value: 'Observation and direction (H0046) is billed for the time the performing provider is with the technician and child in the same location, or on synchronous video where telehealth policy allows. It is authorized together with treatment, and more than 10% needs documented extenuating circumstances. Carelon publishes no rule on H2014 overlapping 97153.',
        status: 'verified',
        cites: [S.loc7, S.grid],
      },
      dailyLimits: {
        value: 'No daily cap. Authorization limits: H0031 up to 10 hours initially and about 6 for a reassessment per 6 months; H0032 1 unit and H0032-TS 3 units per 6 months; parent training 4 units a week; T1016 96 units a year before authorization. Treatment hours are requested per week by medical necessity, for up to 90 days initially and up to 6 months after.',
        status: 'verified',
        cites: [S.grid, S.loc2],
      },
      noteSignature: {
        value: 'Carelon’s guideline requires caregiver participation to be documented in treatment notes (name, relationship, date, time, extent, type), and observation and direction to be documented with time, location, format and topics. The state rule applies to signatures: the technician signs every progress note, and the performing provider co-signs notes for sessions they observed or supervised.',
        status: 'verified',
        cites: [S.loc5, S.loc7, S.regs],
      },
      placeOfService: {
        value: 'Treatment “can occur in any number of settings, including but not limited to the member’s home, agencies, hospitals, and the community.” A caregiver at least 18 years old “must be present at all times while services are being rendered in the home or community.” Treatment whose purpose is solely educational, vocational or legal is excluded.',
        status: 'verified',
        cites: [S.loc5],
      },
      billAsProvider: {
        value: 'Carelon does not pay claims. They go to Gainwell under the enrolled billing provider (an individual practitioner, or the group or clinic the performing provider renders under). Carelon’s qualification letter is required for that enrollment. BCaBAs and technicians cannot bill.',
        status: 'verified',
        cites: [S.paRoles, S.handbook, S.regs],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21 for ASD services (HUSKY A, B, C or D). Carelon’s autism care coordination is open to HUSKY members regardless of age.',
        status: 'verified',
        cites: [S.loc5, S.handbook],
      },
      dxRecency: {
        value: 'Comprehensive diagnostic evaluation within 12 months of the treatment request, or a confirming letter from a current licensed provider dated within 12 months. Medical evaluation within 12 months, behavior assessment within 6 months, plan of care within 120 days.',
        status: 'verified',
        cites: [S.loc5, S.paHuskyB],
      },
      diagnosingProviders: {
        value: 'Independently licensed practitioners (psychiatrist, neurologist, pediatrician, psychologist, APRN, LCSW, LPC, LMFT) with ASD evaluation experience. Not BCBAs or provisionally licensed clinicians, even with a co-signature. An unlicensed collaborator is acceptable only if the report shows the licensed professional personally assessed the child.',
        status: 'verified',
        cites: [S.paADE],
      },
      diagnosticTools: {
        value: 'Validated tools “such as the ADOS, CARS, or GARS,” with a summary of findings, a full neurodevelopmental review, and review of a medical evaluation from the past 12 months.',
        status: 'verified',
        cites: [S.paADE, S.loc1],
      },
      referral: {
        value: 'The behavior assessment “must be recommended by an independently licensed diagnostic practitioner … who is qualified and experienced in providing ASD evaluation services.” In practice, the diagnostic evaluation report recommending ABA serves as the referral.',
        status: 'verified',
        cites: [S.loc2],
      },
      telehealth: {
        value: 'Carelon: telehealth “may be permitted for limited ASD-related activities,” providers “should deliver ASD services in person to the fullest extent that is clinically appropriate,” and only codes on the CMAP Telehealth Table qualify (90791, H0031, H0046, H2014, 97153, and T1016). Parent training must be in person.',
        status: 'verified',
        cites: [S.paRoles, S.teleTable],
      },
      authTurnaround: {
        value: 'Non-urgent prospective and concurrent decisions (ASD is a non-urgent level of care) “Within seven (7) calendar days,” and retrospective decisions within 30 days. ASD requests are due on or before the date of service. Only a peer advisor can deny or reduce a request, and you can ask for a peer-to-peer. Provider Level I appeals within 10 calendar days of the denial (peer review arranged within 1 business day), Level II within 14 days. Member appeals within 60 days.',
        status: 'verified',
        cites: [S.handbook],
      },
      coordinationOfBenefits: {
        value: 'HUSKY is the payer of last resort, and other coverage must be fully used first. Carelon serves members “including those with other insurance,” so request the Carelon authorization even when commercial insurance is primary.',
        status: 'verified',
        cites: [S.handbook, S.cfr433],
      },
    },
    faq: [
      { q: 'Is Carelon a Medicaid health plan in Connecticut?', a: 'No. Connecticut has no Medicaid MCOs. Carelon BH CT is the administrative services organization for the Connecticut Behavioral Health Partnership. It qualifies providers and authorizes services, while Gainwell pays claims and DSS controls enrollment.' },
      { q: 'How do I become a HUSKY ASD provider?', a: 'Qualify with Carelon BH CT first (background check, CV, license, BCBA certificate, two redacted work samples, insurance), then enroll with DSS through Gainwell, attaching Carelon’s qualification letter. Enrollment takes about 4–8 weeks.' },
      { q: 'How long does Carelon take to decide an ABA request?', a: 'Within 7 calendar days for non-urgent requests, which includes ASD services, and 30 days for retrospective ones. Submit ASD requests on or before the start date, once staff are identified.' },
      CT_LIC_FAQ,
    ],
  },

  'anthem-bcbs-connecticut': {
    slug: 'anthem-bcbs-connecticut',
    family: 'anthem',
    cardDesc: 'Connecticut’s Blue plan: ABA is on Anthem’s CT precertification list (BH 800-934-0331) under the § 38a-514b mandate.',
    assessmentPA: {
      value: 'Anthem’s Connecticut list puts “Applied behavior analysis (ABA)” under precertification by Anthem but names no codes, so whether the assessment alone needs approval is not stated',
      status: 'plan-dependent',
      cites: [S.anthemCTPA],
      verifyVia: 'Anthem Behavioral Health, 800-934-0331: ask whether 97151 and 97152 need precertification on this member’s product.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Yes. ABA is on the Connecticut Precertification/Prior Authorization List (September 2026), responsible party Anthem: “Contact Behavioral Health at 800-934-0331”',
      status: 'verified',
      cites: [S.anthemCTPA],
    },
    dxRequired: {
      value: 'Yes for the mandate: Connecticut requires coverage for diagnosed ASD (§ 38a-514b). Anthem’s CT documents do not publish its own diagnostic documentation criteria',
      status: 'plan-dependent',
      cites: [S.s38a514b, S.anthemRG],
      verifyVia: 'Anthem Behavioral Health, 800-934-0331: ask which medical-necessity criteria apply to ABA and what diagnostic documentation they require.',
      blocker: 'document',
    },
    payer: 'Anthem Blue Cross and Blue Shield (Connecticut)',
    state: 'CT', kind: 'commercial',
    pill: 'Payer Guide · Anthem BCBS · Connecticut',
    h1: 'Anthem BCBS Connecticut ABA coverage: the intake guide.',
    metaTitle: 'Anthem BCBS Connecticut ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Anthem Blue Cross and Blue Shield covers ABA in Connecticut: precertification through Anthem Behavioral Health, billing and documentation rules from Anthem’s multi-state ABA guide, Connecticut’s § 38a-514b autism mandate (under 21, rising to 26 in 2027, no dollar cap), and the state behavior analyst license.',
    intro: [
      'In Connecticut, Anthem Blue Cross and Blue Shield is the trade name of Anthem Health Plans, Inc. Two Anthem documents govern ABA here. The Connecticut precertification list puts ABA under Anthem’s own behavioral health review. The multi-state ABA Provider Resource Guide names Connecticut among its states and sets the coding, supervision and documentation rules.',
      'Under both sits Connecticut’s autism mandate for fully insured plans. Check funding type on every benefits verification: self-funded employer plans administered by Anthem follow their plan documents and ERISA, not § 38a-514b. National Account members follow the number on the card.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, on fully insured plans under the CT mandate; self-funded plans per plan document' },
      { label: 'Who reviews ABA', value: 'Anthem Behavioral Health, 800-934-0331 (CT precertification list, September 2026)' },
      ...COMMERCIAL_GLANCE,
      { label: 'Fee schedule', value: 'Not public. Contracted rates; CT Medicaid’s 97153 rate ($14.00/15 min) is the only public benchmark' },
    ],
    sections: [
      {
        h2: 'Precertification in Connecticut',
        body: [
          'Anthem’s Connecticut Precertification/Prior Authorization List (Commercial, September 2026) applies to “Anthem products issued and delivered by Anthem in Connecticut.” Its behavioral health row lists “Applied behavior analysis (ABA)” with partial hospital, IOP, intensive in-home services and other levels of care. The responsible party is “Anthem,” and the instruction is “Contact Behavioral Health at 800-934-0331.” The list names no CPT codes and no criteria set for ABA. For National Accounts, Anthem says to call the number on the member’s card.',
        ],
        cites: [S.anthemCTPA],
      },
      {
        h2: 'Billing and documentation rules from the ABA resource guide',
        body: [
          'Anthem’s commercial ABA Provider Resource Guide (June 2025) lists Connecticut among its states. Approved providers include psychiatrists, psychologists, LCSWs, LPCs and LMFTs with ABA training, BCBAs and BCBA-Ds, “providers practicing under the direction and supervision of the BCBA,” and other mental health providers “licensed or authorized by the state in which they practice.” A QHP billing 97155 “can only add code 97153 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician.” Technician services “must show the supervising BCBA or other QHP in box 31.” Record start and stop times, sign within 30 days of the service date, and update the treatment plan at least every 6 months. Anthem applies NCCI medically unlikely edits to ABA codes and lists POS 12 (home), 11 (office), 99 (community), 03 (school), and 10 and 02 (telehealth).',
        ],
        cites: [S.anthemRG],
      },
      {
        h2: 'The Connecticut mandate: what it guarantees',
        body: [CT_MANDATE_BODY],
        cites: [S.s38a514b, S.s38a488b],
      },
      {
        h2: 'Does a BCBA need a Connecticut license? (out-of-state and telehealth)',
        body: [CT_LICENSURE_BODY, CT_TELEHEALTH_LICENSE],
        cites: [S.ch382a, S.dphBA, S.bacbLic, S.s19a906, S.s38a514b],
      },
      {
        h2: CLAIMS_SECTION_H2,
        body: [CT_PROMPT_PAY + ' Anthem publishes no ABA rate table.' + CT_FEE_BENCH],
        cites: [S.s38a816, S.asdFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (§ 38a-514b applies) or self-funded ERISA (plan document governs). Ask for the employer and check the card.' },
      { title: 'Order from a licensed clinician', desc: 'The mandate covers ABA ordered by a licensed physician, psychologist or LCSW, under a plan by a licensed behavior analyst, physician, psychologist or LCSW.' },
      { title: 'Diagnosis report', desc: 'ASD diagnosis, diagnosing clinician and date. Under the statute the diagnosis stays valid at least 12 months.' },
      { title: 'Supervising BCBA’s CT license', desc: 'Behavioral therapy must be provided or supervised by a licensed behavior analyst, physician or psychologist.' },
      { title: 'Other coverage', desc: 'Second parent’s plan, HUSKY, TRICARE or CHAMPVA.' },
    ],
    sources: [S.anthemCTPA, S.anthemRG, S.s38a514b, S.s38a488b, S.s38a526a, S.s38a591d, S.s38a816, S.ch382a, S.dphBA, S.bacbLic, S.s19a906, S.erisa, S.handbook, S.cfr433, S.tricare, S.champva, S.asdFee],
    deliveryRules: {
      supervision: {
        value: 'Anthem recognizes “providers practicing under the direction and supervision of the BCBA” and publishes no ratio of its own. For fully insured Connecticut plans, the mandate defines supervised behavioral therapy as “at least one hour of face-to-face supervision … for each ten hours of behavioral therapy,” by a licensed behavior analyst, physician or psychologist.',
        status: 'verified',
        cites: [S.anthemRG, S.s38a514b],
      },
      concurrentBilling: {
        value: '“A physician or other QHP billing for 97155 can only add code 97153 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician.”',
        status: 'verified',
        cites: [S.anthemRG],
      },
      dailyLimits: {
        value: 'No Anthem-specific daily cap. “ABA codes may have associated MUE limits,” and Anthem applies NCCI edits as CMS updates them. Authorized hours are set per precertification. The mandate bars visit limits other than for lack of medical necessity on insured plans.',
        status: 'verified',
        cites: [S.anthemRG, S.s38a514b],
      },
      noteSignature: {
        value: 'Each entry identifies its author (signature, electronic identifier or initials, with credentials). Documentation is due “at the time of service, or shortly thereafter and should not exceed 30 days,” with a “Signature date within 30 days of the date of service.” Start and stop times are required.',
        status: 'verified',
        cites: [S.anthemRG],
      },
      placeOfService: {
        value: 'POS codes Anthem lists for ABA: 12 home, 11 office or clinic, 99 community, 03 school, 10 telehealth at home, 02 telehealth elsewhere, all “Subject to the member’s coverage and reviews by the plan.” The Connecticut mandate does not make insured plans pay for special education under an IEP.',
        status: 'verified',
        cites: [S.anthemRG, S.s38a514b],
      },
      billAsProvider: {
        value: '“ABA therapy performed by therapy assistants/behavioral technicians/paraprofessionals must show the supervising BCBA or other QHP in box 31 of the CMS claim form.”',
        status: 'verified',
        cites: [S.anthemRG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Anthem’s Connecticut documents publish no ABA age limit.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.anthemCTPA, S.s38a514b, S.s38a488b],
        verifyVia: 'Live benefits verification: establish fully insured vs. self-funded, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Anthem publishes no recency rule. For insured plans, the statute says diagnosis results “shall be valid for a period of not less than twelve months” unless the treating clinician sets a shorter period.',
        status: 'plan-dependent',
        cites: [S.s38a514b, S.anthemCTPA],
        verifyVia: 'Anthem Behavioral Health, 800-934-0331: ask what diagnostic documentation and dates the review expects.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Anthem publishes no rule. On insured plans, the statute defines diagnosis as assessment “performed by a licensed physician, licensed psychologist or licensed clinical social worker.”',
        status: 'plan-dependent',
        cites: [S.s38a514b],
        verifyVia: 'Anthem Behavioral Health, 800-934-0331.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'The resource guide stresses “standardized assessments and current clinical information” to track progress but names no diagnostic instrument.',
        status: 'unverified',
        cites: [S.anthemRG],
        verifyVia: 'Anthem Behavioral Health, 800-934-0331.',
        blocker: 'document',
      },
      referral: {
        value: 'Anthem’s Connecticut list requires precertification through Anthem Behavioral Health, not a physician referral.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.anthemCTPA, S.s38a514b],
      },
      telehealth: {
        value: 'Anthem lists POS 10 (telehealth at home) and 02 (telehealth elsewhere) for ABA, subject to coverage, and points to its virtual-services reimbursement policy for eligible codes.' + CT_TELE_INSURANCE,
        status: 'plan-dependent',
        cites: [S.anthemRG, S.s38a526a],
        verifyVia: 'Anthem Behavioral Health, 800-934-0331: confirm which ABA codes it pays by telehealth on this member’s plan.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: turnaround('Anthem'),
        status: 'plan-dependent',
        cites: [S.s38a591d, S.erisa],
        verifyVia: turnaroundVia('Anthem'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: cob('Anthem'),
        status: 'plan-dependent',
        cites: [S.handbook, S.cfr433, S.tricare, S.champva, S.s38a514b],
        verifyVia: cobVia('Anthem'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Anthem require prior authorization for ABA in Connecticut?', a: 'Yes. ABA is on Anthem’s Connecticut precertification list, reviewed by Anthem Behavioral Health at 800-934-0331. The list names no codes, so ask whether the assessment itself needs approval.' },
      { q: 'Does Connecticut cap ABA benefits?', a: 'No dollar cap. Insured plans cover behavioral therapy for children under 21, rising to under 26 on January 1, 2027, with no visit limits other than for medical necessity. Self-funded plans follow their own documents.' },
      { q: 'Can a BCBA and RBT both bill for the same time with Anthem?', a: 'Yes, 97155 with 97153, but only when both are face-to-face with the patient at the same time and the BCBA is directing the technician.' },
      CT_LIC_FAQ,
    ],
  },

  'aetna-connecticut': {
    slug: 'aetna-connecticut',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA guide and precertification list + Connecticut’s § 38a-514b mandate (licensed supervision, under 21).',
    assessmentPA: {
      value: 'Required: all ten ABA codes, including 97151, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: 97153–97158, 0362T and 0373T are on the same list. Submit through Availity; the reauthorization interval is set by the plan',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): ask what reauthorization interval applies.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) from an appropriate provider',
      status: 'verified',
      cites: [S.aetnaGuide],
    },
    payer: 'Aetna in Connecticut',
    state: 'CT', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Connecticut',
    h1: 'Aetna ABA coverage in Connecticut: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Connecticut: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Connecticut families: the national medical necessity guide, precertification of all ABA codes, Connecticut’s § 38a-514b autism mandate (licensed supervision, under 21, under 26 from 2027), the behavior analyst license, prompt-pay rules, and what intake should verify.',
    intro: [
      'For an intake team in Connecticut, an Aetna card means three layers: Aetna’s national ABA policy, Connecticut’s autism mandate, and the plan’s funding type, which decides whether the mandate applies. Aetna’s ABA medical necessity guide has one state exhibit, for Maryland, and none for Connecticut, so the national criteria apply here, with the state statute on top for insured plans.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s national ABA medical necessity guide' },
      ...COMMERCIAL_GLANCE,
      { label: 'Fee schedule', value: 'Not public. Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Connecticut',
        body: [
          'Aetna’s ABA medical necessity guide (©2026) requires a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) “obtained by an appropriate provider,” functional impairment on a standardized scale within the past 12 months (at least one standard deviation below the mean, or significant risk of harm), and services “provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists” unless mandates or contracts say otherwise. Connecticut is a licensure state, so the licensed behavior analyst is the credential that applies here. The guide’s only state exhibit is for Maryland. The behavioral health precertification list (effective August 1, 2024) names all ten ABA codes: 97151 through 97158, 0362T and 0373T. Requests go through Availity.',
        ],
        cites: [S.aetnaGuide, S.aetnaPrecert],
      },
      {
        h2: 'The Connecticut mandate: what it guarantees',
        body: [CT_MANDATE_BODY],
        cites: [S.s38a514b, S.s38a488b],
      },
      {
        h2: 'Does a BCBA need a Connecticut license? (out-of-state and telehealth)',
        body: [CT_LICENSURE_BODY, CT_TELEHEALTH_LICENSE + ' Aetna’s own manual says the same: providers “must act within the scope of their license and ensure that they have the proper licensure based on state requirements.”'],
        cites: [S.ch382a, S.dphBA, S.bacbLic, S.s19a906, S.aetnaOM],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA?',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) treats payment as a contract term: “The rates and compensation under your agreement are subject to the Aetna coding/claim edit policies,” and if you have both an intermediary contract and a direct agreement, “your direct Aetna rates will apply unless we specifically notify you otherwise.” When a member’s benefits run out, you “cannot charge them more than the contracted rate.” ' + CT_PROMPT_PAY + CT_FEE_BENCH,
        ],
        cites: [S.aetnaOM, S.s38a816, S.asdFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (§ 38a-514b applies) or self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, the diagnosing provider and credentials, and the evaluation date.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3, ABAS, VB-MAPP or ABLLS).' },
      { title: 'Order from a licensed clinician', desc: 'The mandate covers ABA ordered by a licensed physician, psychologist or LCSW.' },
    ],
    sources: [S.aetnaGuide, S.aetnaPrecert, S.aetnaNPC, S.aetnaCPB648, S.aetnaOM, S.aetnaTele, S.s38a514b, S.s38a488b, S.s38a526a, S.s38a591d, S.s38a816, S.ch382a, S.dphBA, S.bacbLic, S.s19a906, S.erisa, S.handbook, S.cfr433, S.tricare, S.champva, S.asdFee],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s participation criteria (5/26): ABA must be “provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board”; “A minimum of one hour of face-to-face supervision” of an unlicensed or noncertified paraprofessional “for each 10 hours of applied behavior analysis,” plus the supervisor “onsite with the child at least one hour a month.” “All BCBAs, BCaBAs and paraprofessionals must meet state requirements.” For insured Connecticut plans, the statute sets the same 1-in-10 face-to-face standard and requires the supervisor to be a licensed behavior analyst, physician or psychologist.',
        status: 'verified',
        cites: [S.aetnaNPC, S.s38a514b],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA documents (the medical necessity guide, precertification list and participation criteria).',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Aetna provider services, your participation agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap. The guide gives typical intensities of 10–25 hours a week for comprehensive and 1–20 for focused programs, and reviews progress every six months. Insured Connecticut plans may not limit visits except for lack of medical necessity.',
        status: 'verified',
        cites: [S.aetnaGuide, S.s38a514b],
      },
      noteSignature: {
        value: 'Not addressed. Aetna’s guide sets treatment-plan contents, not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Your Aetna participation agreement and the Aetna Behavioral Health provider manual documentation section.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Aetna’s guide sets no setting restriction for outpatient ABA. The Connecticut mandate does not require insured plans to pay for special education and related services under an IEP.',
        status: 'verified',
        cites: [S.aetnaGuide, S.s38a514b],
      },
      billAsProvider: {
        value: 'Services must be “provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists.” In Connecticut the billing clinician should hold the DPH behavior analyst license.',
        status: 'verified',
        cites: [S.aetnaGuide, S.ch382a],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s guide sets no age cap; its age ranges are typical, not limits.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.s38a514b, S.s38a488b],
        verifyVia: 'Live benefits verification: fully insured vs. self-funded ERISA, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but medical necessity requires functional impairment on a standardized scale “in the past 12 months.” Insured Connecticut plans must also treat a diagnosis as valid for at least 12 months.',
        status: 'verified',
        cites: [S.aetnaGuide, S.s38a514b],
      },
      diagnosingProviders: {
        value: '“licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice.” On insured Connecticut plans, the statute defines diagnosis as done by a licensed physician, psychologist or LCSW.',
        status: 'verified',
        cites: [S.aetnaGuide, S.s38a514b],
      },
      diagnosticTools: {
        value: 'CPB 0648 names the ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale. The ABA guide requires a standardized functional measure from the past 12 months (VABS-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s national ABA documents require precertification of all ten ABA codes, not a physician referral.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.s38a514b],
      },
      telehealth: {
        value: 'Aetna’s Telemedicine and Direct Patient Contact Payment Policy marks 97151, 97153, 97155, 97156 and 97157 as eligible by telehealth for commercial plans, with modifier GT, 95 or FR. 97152, 97154 and 97158 are marked for Medicare Advantage only. The posted policy shows a last review of June 2021, so treat the list as perishable. Aetna’s manual (6/26) says Aetna Behavioral Health “offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out.”' + CT_TELE_INSURANCE,
        status: 'plan-dependent',
        cites: [S.aetnaTele, S.aetnaOM, S.s38a526a],
        verifyVia: 'Availity or the precertification line on the card: ask whether the plan is fully insured in Connecticut or self-funded (and opted out of telehealth), and which ABA codes Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: turnaround('Aetna'),
        status: 'plan-dependent',
        cites: [S.s38a591d, S.erisa],
        verifyVia: turnaroundVia('Aetna'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: cob('Aetna'),
        status: 'plan-dependent',
        cites: [S.handbook, S.cfr433, S.tricare, S.champva, S.s38a514b],
        verifyVia: cobVia('Aetna'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Connecticut?', a: 'Yes, under its national ABA guide for ASD, with Connecticut’s § 38a-514b / § 38a-488b mandate added for fully insured plans. Self-funded employer plans follow their own documents.' },
      { q: 'Does the Aetna ABA assessment need precertification in Connecticut?', a: 'Yes. 97151 and 97152 are on Aetna’s behavioral health precertification list along with every ABA treatment code.' },
      { q: 'What does Aetna pay for ABA in Connecticut?', a: 'Aetna publishes no ABA rates; payment follows the rates in your agreement. Insured claims must be paid within 20 days electronic or 60 days paper under § 38a-816(15). Connecticut Medicaid’s 97153 rate ($14.00 per 15 minutes) is the only public benchmark.' },
      CT_LIC_FAQ,
    ],
  },

  'cigna-connecticut': {
    slug: 'cigna-connecticut',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide (no PA on assessments) + Connecticut’s § 38a-514b mandate and Evernorth’s CT addendum.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the policy covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: request treatment authorization up to 30 days before or two weeks after the start date; a later request may go to retrospective review (up to 30 days)',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD (F84.0–F84.9 except F84.2 Rett) under DSM-5-TR criteria, made by an independently licensed professional',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Connecticut',
    state: 'CT', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Connecticut',
    h1: 'Cigna / Evernorth ABA coverage in Connecticut: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Connecticut: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Connecticut families: national policy EN0499, no PA on assessments, Evernorth’s Connecticut regulatory addendum, Connecticut’s § 38a-514b autism mandate (under 21, under 26 from 2027), the behavior analyst license, and what intake should verify.',
    intro: [
      'For an intake team in Connecticut, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, Connecticut’s autism mandate, and the plan’s funding type. Evernorth’s Administrative Guidelines also include a Connecticut Regulatory Addendum for providers, which it says does not apply to self-funded plans. Many Cigna members are on self-funded employer plans, so check funding first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499 (eff. 5/15/2026)' },
      ...COMMERCIAL_GLANCE,
      { label: 'Fee schedule', value: 'Not public: Exhibit A of your Evernorth Provider Agreement; Provider Services 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Connecticut',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). According to the autism resource guide, “Prior authorization is no longer required for assessment … codes 97151, 97152, or 0362T with a diagnosis of autism, as long as the provider is independently licensed or a Board Certified Behavior Analyst® and the patient’s policy covers ABA services.” For treatment, Evernorth encourages requests “up to 30 days in advance of or two weeks after the start date of service,” and warns that later requests may go to retrospective review and take up to 30 days. Neither document mentions Connecticut, so the national criteria apply. Electronic claims use payer ID 62308.',
          'Evernorth’s Connecticut Regulatory Addendum (September 2026 Administrative Guidelines) applies Connecticut law to participating providers, except for self-funded plans. It handles continuity of care under § 38a-472f, bars billing members beyond cost-sharing, and allows material fee-schedule changes for non-hospital providers once a year on at least 90 days’ notice. After such notice the provider may accept or end the agreement on 60 days’ notice.',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin],
      },
      {
        h2: 'The Connecticut mandate: what it guarantees',
        body: [CT_MANDATE_BODY],
        cites: [S.s38a514b, S.s38a488b],
      },
      {
        h2: 'Does a BCBA need a Connecticut license? (out-of-state and telehealth)',
        body: [CT_LICENSURE_BODY, CT_TELEHEALTH_LICENSE],
        cites: [S.ch382a, S.dphBA, S.bacbLic, S.s19a906, S.s38a514b],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth’s Administrative Guidelines tell ABA providers: “For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement,” and payment is “the lesser of the billed charge or the applicable fee under Exhibit A.” Fee questions go to Provider Services at 800.926.2273. Virtual services carry modifier 95, which Evernorth says “will not change the reimbursement.” ' + CT_PROMPT_PAY + CT_FEE_BENCH,
        ],
        cites: [S.ebhAdmin, S.s38a816, S.asdFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (§ 38a-514b and Evernorth’s CT addendum apply) or self-funded ERISA (plan document governs).' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, plus the date the diagnosis was most recently made.' },
      { title: 'Standardized assessment timing', desc: 'Instrument given within 60 days before treatment starts, and baseline data collected within 60 days.' },
      { title: 'Order from a licensed clinician', desc: 'The mandate covers ABA ordered by a licensed physician, psychologist or LCSW.' },
      { title: 'Supervisor’s CT license', desc: 'Insured plans cover behavioral therapy provided or supervised by a licensed behavior analyst, physician or psychologist.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.s38a514b, S.s38a488b, S.s38a526a, S.s38a591d, S.s38a816, S.ch382a, S.dphBA, S.bacbLic, S.s19a906, S.erisa, S.handbook, S.cfr433, S.tricare, S.champva, S.asdFee],
    deliveryRules: {
      supervision: {
        value: 'Case supervision by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health professional with ABA training. Direct plus indirect case supervision “consistent with the general accepted standard of care of one to two hours per ten hours of direct treatment,” and at 10 hours a week or less, at least one to two hours a week of direct case supervision. Insured Connecticut plans also require a licensed supervisor with at least 1 hour face-to-face per 10 hours.',
        status: 'verified',
        cites: [S.en0499, S.s38a514b],
      },
      concurrentBilling: {
        value: '“Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time).”',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap. ABA codes bill in 15-minute units, using only 97151–97158, 0362T and 0373T. Intensity must reflect severity, goals and response to treatment.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499],
      },
      noteSignature: {
        value: 'A note for each CPT code billed with start and end date and time, location, focus, a detailed description of the intervention, who was present and who rendered the service, with “Signatures and time stamps of when the note was completed.”',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'Services “primarily educational or vocational in nature” are not covered. Services in academic or vocational settings, or by telehealth, must still meet the direct-treatment definition. Insured Connecticut plans need not pay for special education under an IEP.',
        status: 'verified',
        cites: [S.en0499, S.s38a514b],
      },
      billAsProvider: {
        value: '“Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider.” On a CMS-1500, “List only a BCBA or other licensed provider in box 33.” Electronic claims use payer ID 62308.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap and says access to focused intervention “should not be restricted by age.”' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.s38a514b, S.s38a488b],
        verifyVia: 'Live benefits verification: fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs “The date on which the diagnosis was most recently made.” The data clocks run 60 days: instrument within 60 days before treatment, and baseline data within 60 days. Insured Connecticut plans must treat a diagnosis as valid for at least 12 months.',
        status: 'verified',
        cites: [S.en0499, S.s38a514b],
      },
      diagnosingProviders: {
        value: 'A professional “licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice,” applying DSM-5-TR. The ABA assessment itself is done by a BCBA, LBA, or a licensed mental health clinician with ABA training.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated. It must be reliable, valid and standardized, cover the DSM-5-TR ASD domains, and be the current edition (“must be the Vineland-3 vs. Vineland-II”), with the date, respondent and form type reported.',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral. The assessment codes need no PA for independently licensed providers or BCBAs; treatment needs authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.s38a514b],
      },
      telehealth: {
        value: '“All ABA CPT codes are covered telehealth services” (autism resource guide), and the line-of-sight requirement “does not apply to telehealth services.”' + CT_TELE_INSURANCE,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.s38a526a],
      },
      authTurnaround: {
        value: turnaround('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.s38a591d, S.erisa],
        verifyVia: turnaroundVia('Cigna/Evernorth'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: cob('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.handbook, S.cfr433, S.tricare, S.champva, S.s38a514b],
        verifyVia: cobVia('Cigna/Evernorth'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Connecticut?', a: 'Yes, under national policy EN0499 for ASD, with Connecticut’s mandate added for fully insured plans. Self-funded employer plans follow their own documents.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in Connecticut?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'What does Cigna pay for ABA in Connecticut?', a: 'Cigna publishes no ABA rates. Your fee schedule is Exhibit A of your Evernorth Provider Agreement; call 800.926.2273 with questions. Connecticut Medicaid’s 97153 rate ($14.00 per 15 minutes) is the only public benchmark.' },
      CT_LIC_FAQ,
    ],
  },

  'unitedhealthcare-connecticut': {
    slug: 'unitedhealthcare-connecticut',
    family: 'unitedhealthcare',
    cardDesc: 'Optum ABA criteria + Optum’s Connecticut state-mandate entry (1 hr face-to-face per 10) + § 38a-514b; telehealth limited to 3 codes.',
    assessmentPA: {
      value: 'Required: Optum’s ABA Supplemental Clinical Criteria say “Prior authorization is required for ABA *(unless otherwise specified or mandated by contract or law)”',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required; the review interval is set per authorization, and use below 80% of authorized hours over two weeks is examined at continued-service review',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express or the behavioral health number on the card: ask what review interval applies to this member’s ABA authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5-TR ASD diagnosis and severity level confirmed by the diagnosing clinician with at least one clinically validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Connecticut',
    state: 'CT', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Connecticut',
    h1: 'UnitedHealthcare / Optum ABA coverage in Connecticut: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Connecticut: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Connecticut families: Optum’s ABA criteria and its Connecticut state-mandate entry, the 3-code telehealth rule, credential modifiers, Connecticut’s § 38a-514b mandate, the behavior analyst license, and what intake should verify.',
    intro: [
      'For an intake team in Connecticut, a UnitedHealthcare card means three layers: Optum Behavioral Health’s national ABA criteria, Optum’s own Connecticut state-mandate entry, and Connecticut’s autism statute for fully insured plans. UnitedHealthcare is not a HUSKY Health plan, because Connecticut Medicaid has no managed care plans. A UHC card here is commercial or Medicare.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria (interim review 4/2026)' },
      { label: 'Optum CT entry', value: 'Optum’s State Mandates document applies Connecticut’s 1-hour-per-10 face-to-face supervision definition' },
      ...COMMERCIAL_GLANCE,
      { label: 'Fee schedule', value: 'Not public. Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Connecticut',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026). These require prior authorization, a DSM-5-TR diagnosis confirmed with a validated tool, and continued-service review that looks closely at use below 80% of authorized hours. The criteria list “Connecticut Commercial” among the states whose mandated criteria apply on top, and say that where they conflict, “the state-mandated criteria controls.” Optum’s ABA State Mandates document (effective July 2026) has this Connecticut entry: “Behavioral therapy is ‘supervised by’ such licensed behavior analyst, licensed physician or licensed psychologist when such supervision entails at least one hour of face-to-face supervision of the autism spectrum disorder services provider … for each ten hours of behavioral therapy provided by the supervised provider.” That is the statute’s own definition.',
        ],
        cites: [S.optumSCC, S.optumSM],
      },
      {
        h2: 'The Connecticut mandate: what it guarantees',
        body: [CT_MANDATE_BODY],
        cites: [S.s38a514b, S.s38a488b],
      },
      {
        h2: 'Does a BCBA need a Connecticut license? (out-of-state and telehealth)',
        body: [CT_LICENSURE_BODY, CT_TELEHEALTH_LICENSE],
        cites: [S.ch382a, S.dphBA, S.bacbLic, S.s19a906, S.s38a514b],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA?',
        body: [
          'UnitedHealthcare publishes no ABA rate table. Optum pays from the contract. Its National Network Manual (effective Sept. 1, 2026) defines the “Fee Maximum” as “The maximum amount a participating provider may be paid for a specific health care service provided to a member,” and adds that “Reimbursement to clinicians is based upon licensure rather than degree.” Optum’s commercial ABA Reimbursement Policy (2022RP501A, updated June 2026) requires a credential modifier on every line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a doctoral-level provider. Only one modifier is allowed per line. ' + CT_PROMPT_PAY + CT_FEE_BENCH,
        ],
        cites: [S.optumNNM, S.optumReimb, S.s38a816, S.asdFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (§ 38a-514b applies) or self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification on Provider Express.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD and severity level, confirmed with a validated tool (ADI-R, ADOS-2, CARS-2 and others).' },
      { title: 'Order from a licensed clinician', desc: 'The mandate covers ABA ordered by a licensed physician, psychologist or LCSW.' },
      { title: 'Credential of each rendering staff member', desc: 'Every claim line needs the right HM/HN/HO/HP modifier.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumReimb, S.optumNNM, S.s38a514b, S.s38a488b, S.s38a526a, S.s38a591d, S.s38a816, S.ch382a, S.dphBA, S.bacbLic, S.s19a906, S.erisa, S.handbook, S.cfr433, S.tricare, S.champva, S.asdFee],
    deliveryRules: {
      supervision: {
        value: '“Consistent with CASP standards of care, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week.” Technicians work under a BCBA or licensed behavioral health clinician and “should be registered behavior technicians (RBT) or another appropriately certified behavior technician.” For Connecticut, Optum’s state-mandate entry applies at least one hour of face-to-face supervision per ten hours by a licensed behavior analyst, physician or psychologist.',
        status: 'verified',
        cites: [S.optumSCC, S.optumSM],
      },
      concurrentBilling: {
        value: 'Optum’s commercial reimbursement policy allows 97153 or 97154 with 97155 concurrently “as long as the criteria in the descriptors of both codes are met,” but “A single QHP may not report 97153 or 97154 with 97155 concurrently.” 97155 and 97156 on the same day must be separate, distinct and at different times.',
        status: 'verified',
        cites: [S.optumReimb],
      },
      dailyLimits: {
        value: 'Commercial ABA follows CMS MUEs, and “Optum allows 32 units per day for CPT code 97153.” Billing more risks non-payment or recovery. Requested hours must be justified at the least restrictive appropriate level.',
        status: 'verified',
        cites: [S.optumReimb, S.optumSCC],
      },
      noteSignature: {
        value: 'Not addressed in the ABA criteria or reimbursement policy, which set what must be documented, not who signs a session note or when.',
        status: 'unverified',
        cites: [S.optumSCC, S.optumReimb],
        verifyVia: 'Optum National Network Manual (treatment record documentation section) and your participation agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'ABA is provided at the least restrictive, most clinically appropriate level. It is not covered for “1:1 aid delivered simultaneously during classroom instruction, or services covered under” IDEA. School coordination (teacher training, meetings, observations) is covered.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      billAsProvider: {
        value: 'Each line carries the rendering provider’s credential modifier: HM for an RBT (“State regulatory requirements may supplement, modify or supersede this policy”), HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a doctoral-level provider. Indirect work has no separate code and is bundled into the direct codes.',
        status: 'verified',
        cites: [S.optumReimb],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The criteria carry no age limit; the member’s benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.s38a514b, S.s38a488b],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: fully insured vs. self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, which must be confirmed with severity level using a validated tool. Insured Connecticut plans must treat a diagnosis as valid for at least 12 months.',
        status: 'verified',
        cites: [S.optumSCC, S.s38a514b],
      },
      diagnosingProviders: {
        value: '“a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis” under DSM-5-TR.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool, from a list that is not exhaustive: first-level screens (M-CHAT and others), second-level screens (CARS/CARS-2, RITA-T, STAT), and formal tools (ADI-R, ADOS/ADOS-2, DISCO).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral in Optum’s criteria, which require prior authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.s38a514b],
      },
      telehealth: {
        value: 'Optum’s commercial telehealth guide (September 2025): “For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157.” The 97151 assessment and technician 97153 are not on the list. Claims must carry POS 02 or 10. Optum’s criteria add that telehealth is meant to “supplement,” not “supplant,” in-person service.' + CT_TELE_INSURANCE + ' Ask Optum how it applies the three-code list to a fully insured Connecticut plan.',
        status: 'verified',
        cites: [S.optumTele, S.optumSCC, S.s38a526a],
      },
      authTurnaround: {
        value: turnaround('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.s38a591d, S.erisa],
        verifyVia: turnaroundVia('UnitedHealthcare/Optum'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: cob('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.handbook, S.cfr433, S.tricare, S.champva, S.s38a514b],
        verifyVia: cobVia('UnitedHealthcare/Optum'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Connecticut?', a: 'Yes, under Optum’s ABA criteria for ASD, with Connecticut’s mandate added for fully insured plans. Optum’s State Mandates document has a Connecticut entry.' },
      { q: 'Is UnitedHealthcare a HUSKY (Connecticut Medicaid) plan?', a: 'No. Connecticut Medicaid has no managed care plans. HUSKY ABA is authorized by Carelon BH CT and paid fee-for-service.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in Connecticut?', a: 'Optum’s commercial guide allows only 97155, 97156 and 97157 by telehealth, billed POS 02 or 10. Fully insured Connecticut plans also fall under § 38a-526a, which bars excluding a service solely because it is delivered by telehealth when telehealth is appropriate, so ask Optum how it applies the list.' },
      { q: 'What does UnitedHealthcare pay for ABA in Connecticut?', a: 'Optum publishes no rates. You are paid up to the Fee Maximum in your agreement, with a credential modifier on each line (HM RBT, HN BCaBA, HO BCBA, HP doctoral). Connecticut Medicaid’s 97153 rate ($14.00 per 15 minutes) is the only public benchmark.' },
      CT_LIC_FAQ,
    ],
  },

  'connecticare-connecticut': {
    slug: 'connecticare-connecticut',
    cardDesc: 'Connecticut’s local carrier, now owned by Molina: Optum Behavioral Health manages ABA; 2026 PA lists put ABA codes through Optum.',
    assessmentPA: {
      value: '97151 is on neither 2026 ConnectiCare list. 97152 appears among the ABA codes on the commercial preauthorization list but not on the Marketplace list. Optum’s criteria require PA for ABA unless otherwise specified',
      status: 'plan-dependent',
      cites: [S.ccComPA, S.ccMktPA, S.optumSCC],
      verifyVia: 'Optum (OptumHealth Behavioral Solutions) for ConnectiCare, 1-800-349-5365 (commercial) or 888-946-4658: ask whether 97151/97152 need authorization on this member’s plan.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Yes. Commercial: the behavioral health section (“Preauthorization is obtained through OptumHealth Behavioral Solutions (OHBS)”) lists 97153–97158, 0362T and 0373T. Marketplace 2026: 97153–97158 and 0373T are marked PA “Y,” through OHBS',
      status: 'verified',
      cites: [S.ccComPA, S.ccMktPA],
    },
    dxRequired: {
      value: 'Yes for the mandate (diagnosed ASD, § 38a-514b); Optum, which manages ConnectiCare behavioral health, requires a DSM-5-TR diagnosis confirmed with a validated tool',
      status: 'plan-dependent',
      cites: [S.s38a514b, S.optumSCC, S.ccMolina],
      verifyVia: 'Optum for ConnectiCare, 1-800-349-5365: confirm which ABA criteria apply to this member’s plan.',
      blocker: 'per-case',
    },
    payer: 'ConnectiCare (Connecticut)',
    state: 'CT', kind: 'commercial',
    pill: 'Payer Guide · ConnectiCare · Connecticut',
    h1: 'ConnectiCare ABA coverage in Connecticut: the intake guide.',
    metaTitle: 'ConnectiCare ABA Coverage in Connecticut: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How ConnectiCare covers ABA in Connecticut: commercial vs. Marketplace (Molina) lines in 2026, Optum Behavioral Health authorization of ABA codes, payer IDs, Connecticut’s § 38a-514b autism mandate, and the behavior analyst license.',
    intro: [
      'ConnectiCare is Connecticut’s home-grown carrier and, in 2026, “a wholly owned subsidiary of Molina Healthcare, Inc.” It now runs three lines that work differently. Commercial members have IDs starting with “K” and stay on ConnectiCare’s existing policies, portal and payer ID 06105 through the end of 2026. Marketplace (exchange) and Medicare members follow Molina-based processes, with payer ID MLNCT for 2026 dates of service. For ABA, one thing holds across all three: “Optum Behavioral Health will continue to coordinate and manage behavioral health and substance abuse services for all our members.”',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, on insured plans under the CT mandate; ABA codes are on both 2026 preauthorization lists' },
      { label: 'Who authorizes ABA', value: 'Optum (OptumHealth Behavioral Solutions): 1-800-349-5365 (commercial list); 888-946-4658 / providerexpress.com (vendor contacts)' },
      { label: 'Claims', value: 'Commercial (“K” IDs): payer ID 06105; Marketplace and Medicare 2026 DOS: payer ID MLNCT' },
      ...COMMERCIAL_GLANCE,
      { label: 'Fee schedule', value: 'Not public; CT Medicaid’s 97153 rate ($14.00/15 min) is the only public benchmark' },
    ],
    sections: [
      {
        h2: 'Two ConnectiCare lines, one behavioral health manager',
        body: [
          'ConnectiCare’s integration notice (updated 5/12/2026) splits members by ID. For commercial members (“K” IDs), “providers should continue to follow ConnectiCare’s existing policies and processes … through the end of 2026,” and 2026 commercial claims use payer ID “06105.” Marketplace and Medicare members follow Molina-based operations from January 1, 2026: prior authorization through Availity and claims to payer ID “MLNCT.” Behavioral health is a vendor service for every line, managed by Optum (888-946-4658, providerexpress.com). ConnectiCare’s medical coverage criteria page points to Optum Behavioral Health’s clinical resources for behavioral health criteria.',
          'Both 2026 preauthorization lists send ABA to Optum. The commercial list (effective 1/1/2026, reviewed 6/26/2026) says “Preauthorization is obtained through OptumHealth Behavioral Solutions (OHBS) if services are provided by a Behavioral Health Provider. Call 1-800-349-5365,” and lists 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T under “ABA Therapy codes.” The Marketplace 2026 list marks 97153–97158 and 0373T PA “Y,” with the note “For services rendered by a Behavioral Health Provider, contact OptumHealth Behavioral Solutions (OHBS).” Neither list includes 97151.',
        ],
        cites: [S.ccMolina, S.ccPolicies, S.ccComPA, S.ccMktPA],
      },
      {
        h2: 'The Connecticut mandate: what it guarantees',
        body: [CT_MANDATE_BODY],
        cites: [S.s38a514b, S.s38a488b],
      },
      {
        h2: 'Does a BCBA need a Connecticut license? (out-of-state and telehealth)',
        body: [CT_LICENSURE_BODY, CT_TELEHEALTH_LICENSE],
        cites: [S.ch382a, S.dphBA, S.bacbLic, S.s19a906, S.s38a514b],
      },
      {
        h2: CLAIMS_SECTION_H2,
        body: [CT_PROMPT_PAY + ' ConnectiCare publishes no ABA rate table.' + CT_FEE_BENCH],
        cites: [S.s38a816, S.asdFee],
      },
    ],
    collect: [
      { title: 'Member ID format', desc: '“K” IDs are commercial (existing ConnectiCare rules, payer ID 06105). All-numeric IDs are Marketplace or Medicare (Molina rules, payer ID MLNCT).' },
      { title: 'Plan funding type', desc: 'Fully insured (§ 38a-514b applies) or self-funded employer plan (plan document governs).' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD diagnosis and severity, for Optum’s review.' },
      { title: 'Order from a licensed clinician', desc: 'The mandate covers ABA ordered by a licensed physician, psychologist or LCSW.' },
      { title: 'Other coverage', desc: 'Second parent’s plan, HUSKY, TRICARE or CHAMPVA.' },
    ],
    sources: [S.ccMolina, S.ccPolicies, S.ccComPA, S.ccMktPA, S.optumSCC, S.s38a514b, S.s38a488b, S.s38a526a, S.s38a591d, S.s38a816, S.ch382a, S.dphBA, S.bacbLic, S.s19a906, S.erisa, S.handbook, S.cfr433, S.tricare, S.champva, S.asdFee],
    deliveryRules: {
      supervision: {
        value: 'ConnectiCare publishes no ABA supervision rule of its own. On insured Connecticut plans, the mandate requires behavioral therapy to be provided or supervised by a licensed behavior analyst, physician or psychologist, with at least one hour of face-to-face supervision per ten hours.',
        status: 'verified',
        cites: [S.s38a514b, S.ccComPA],
      },
      concurrentBilling: {
        value: 'Not addressed in ConnectiCare’s published documents.',
        status: 'unverified',
        cites: [S.ccComPA],
        verifyVia: 'Optum for ConnectiCare, 1-800-349-5365, or your Optum/ConnectiCare agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No ConnectiCare ABA unit cap is published. Insured Connecticut plans may not limit visits except for lack of medical necessity.',
        status: 'unverified',
        cites: [S.ccComPA, S.s38a514b],
        verifyVia: 'Optum for ConnectiCare, 1-800-349-5365: ask how units are authorized and which unit edits apply.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not addressed in ConnectiCare’s published ABA documents.',
        status: 'unverified',
        cites: [S.ccComPA],
        verifyVia: 'ConnectiCare commercial provider manual (medical record review standards) or Optum for ConnectiCare.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Not addressed by ConnectiCare. Insured Connecticut plans need not pay for special education and related services under an IEP.',
        status: 'unverified',
        cites: [S.s38a514b],
        verifyVia: 'Optum for ConnectiCare, 1-800-349-5365: ask which place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'ConnectiCare publishes no rule on whose NPI a technician’s ABA service is billed under. Commercial 2026 claims use payer ID 06105; Marketplace and Medicare use MLNCT.',
        status: 'unverified',
        cites: [S.ccMolina],
        verifyVia: 'Optum for ConnectiCare: ask whether technician services bill under the supervising BCBA and which modifiers apply.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'ConnectiCare publishes no ABA age limit.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.s38a514b, S.s38a488b],
        verifyVia: 'Live benefits verification: insured vs. self-funded, then the plan’s own terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'ConnectiCare publishes no rule. Insured Connecticut plans must treat a diagnosis as valid for at least 12 months unless the treating clinician sets a shorter period.',
        status: 'plan-dependent',
        cites: [S.s38a514b],
        verifyVia: 'Optum for ConnectiCare, 1-800-349-5365.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'ConnectiCare publishes no rule. The statute defines diagnosis as assessment by a licensed physician, psychologist or LCSW.',
        status: 'plan-dependent',
        cites: [S.s38a514b],
        verifyVia: 'Optum for ConnectiCare, 1-800-349-5365.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'ConnectiCare publishes none of its own. Optum’s ABA criteria ask for at least one validated tool (for example ADOS-2, ADI-R or CARS-2), but whether ConnectiCare plans use those criteria unchanged is not stated.',
        status: 'plan-dependent',
        cites: [S.optumSCC, S.ccPolicies],
        verifyVia: 'Optum for ConnectiCare, 1-800-349-5365.',
        blocker: 'per-case',
      },
      referral: {
        value: 'ConnectiCare requires preauthorization through Optum, not a physician referral, for ABA treatment codes.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.ccComPA, S.s38a514b],
      },
      telehealth: {
        value: 'ConnectiCare publishes no ABA telehealth rule.' + CT_TELE_INSURANCE,
        status: 'plan-dependent',
        cites: [S.s38a526a],
        verifyVia: 'Optum for ConnectiCare: ask which ABA codes it pays by telehealth and with which POS/modifier.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: turnaround('ConnectiCare/Optum'),
        status: 'plan-dependent',
        cites: [S.s38a591d, S.erisa],
        verifyVia: turnaroundVia('ConnectiCare/Optum'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: cob('ConnectiCare'),
        status: 'plan-dependent',
        cites: [S.handbook, S.cfr433, S.tricare, S.champva, S.s38a514b],
        verifyVia: cobVia('ConnectiCare'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Who authorizes ABA for ConnectiCare members?', a: 'Optum Behavioral Health, which manages behavioral health for all ConnectiCare members. The 2026 commercial list gives 1-800-349-5365 for preauthorization; the vendor contact is 888-946-4658 / providerexpress.com.' },
      { q: 'Does ConnectiCare follow Molina’s rules now?', a: 'Marketplace and Medicare members do, from January 1, 2026 (Availity, payer ID MLNCT). Commercial members with “K” IDs stay on ConnectiCare’s existing policies and payer ID 06105 through the end of 2026.' },
      { q: 'Does the ConnectiCare ABA assessment need authorization?', a: '97151 is on neither 2026 list, but 97152 appears among the ABA codes on the commercial list and Optum’s criteria require PA for ABA unless otherwise specified, so ask Optum before the assessment.' },
      CT_LIC_FAQ,
    ],
  },
};

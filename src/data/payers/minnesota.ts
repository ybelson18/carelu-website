import type { PayerConfig, PayerSource } from './types.js';

/* Minnesota — researched October 2026 from primary sources only.
   Minnesota Medical Assistance does not run a stand-alone "ABA benefit": ABA is one of the
   treatment modalities of the EIDBI benefit (Early Intensive Developmental and Behavioral
   Intervention, Minn. Stat. § 256B.0949). www.dhs.state.mn.us answers direct requests with a
   Radware captcha (HTTP 200 bot page, then 403); every DHS manual page, the EIDBI billing grid and
   the MCO contact grid below were read in full through the https://r.jina.ai/<url> text proxy.
   mn.gov/dhs pages are JS shells to curl; jina reads them too. revisor.mn.gov (statutes, session
   laws) answers plain curl. The MHCP fee schedule sits behind a CPT licence click-through, so the
   EIDBI rates below come from the CMS-approved state plan page (SPA MN-24-0010) and the billing grid. */

const S: Record<string, PayerSource> = {
  // Statutes and session laws (revisor.mn.gov)
  stat0949: { title: 'Minn. Stat. § 256B.0949 — Early Intensive Developmental and Behavioral Intervention (EIDBI) benefit', url: 'https://www.revisor.mn.gov/statutes/cite/256B.0949' },
  sl95: { title: 'Laws 2026, ch. 95, art. 4, secs. 23–26 — EIDBI definitions, QSP observation and direction, new documentation subdivision 19', url: 'https://www.revisor.mn.gov/laws/2026/0/Session+Law/Chapter/95/' },
  sl121: { title: 'Laws 2026, ch. 121, art. 9, sec. 20 — EIDBI billing limits (new § 256B.0949, subd. 20) and art. 3 (§ 256B.69 managed care contracts)', url: 'https://www.revisor.mn.gov/laws/2026/0/Session+Law/Chapter/121/' },
  stat69: { title: 'Minn. Stat. § 256B.69 — Prepaid health plans (subd. 5a managed care contracts, six-month timely filing standard)', url: 'https://www.revisor.mn.gov/statutes/cite/256B.69' },
  stat3094: { title: 'Minn. Stat. § 62A.3094 — Coverage for autism spectrum disorders (large-employer plans, children under 18)', url: 'https://www.revisor.mn.gov/statutes/cite/62A.3094' },
  stat62Q18: { title: 'Minn. Stat. § 62Q.18, subd. 1 — "Large employer" means more than 50 current employees', url: 'https://www.revisor.mn.gov/statutes/cite/62Q.18' },
  stat62Q47: { title: 'Minn. Stat. § 62Q.47 — Mental health and substance use parity (all health plans)', url: 'https://www.revisor.mn.gov/statutes/cite/62Q.47' },
  stat62Q75: { title: 'Minn. Stat. § 62Q.75 — Prompt payment: clean claims in 30 days, 1.5% monthly interest, six-month claim filing', url: 'https://www.revisor.mn.gov/statutes/cite/62Q.75' },
  stat62M01: { title: 'Minn. Stat. § 62M.01 — Utilization Review Act scope (applies to MA managed care and, for listed sections, MA fee-for-service from Jan. 1, 2026)', url: 'https://www.revisor.mn.gov/statutes/cite/62M.01' },
  stat62M05: { title: 'Minn. Stat. § 62M.05 — Review determinations: standard 5 business days, expedited 48 hours', url: 'https://www.revisor.mn.gov/statutes/cite/62M.05' },
  stat62M07: { title: 'Minn. Stat. § 62M.07 — Prior authorization (subd. 2 prohibited PA, subd. 3 no retroactive revocation, subd. 5 chronic conditions)', url: 'https://www.revisor.mn.gov/statutes/cite/62M.07' },
  stat62A673: { title: 'Minn. Stat. § 62A.673 — Minnesota Telehealth Act (commercial telehealth coverage and payment parity)', url: 'https://www.revisor.mn.gov/statutes/cite/62A.673' },
  lic9981: { title: 'Minn. Stat. § 148.9981 — Behavior analyst licensure: definitions (Board of Psychology; practice of ABA)', url: 'https://www.revisor.mn.gov/statutes/cite/148.9981' },
  lic9983: { title: 'Minn. Stat. § 148.9983 — Requirements for behavior analyst licensure', url: 'https://www.revisor.mn.gov/statutes/cite/148.9983' },
  lic9986: { title: 'Minn. Stat. § 148.9986 — Prohibited practice or use of titles (license required from Jan. 1, 2025)', url: 'https://www.revisor.mn.gov/statutes/cite/148.9986' },
  lic9987: { title: 'Minn. Stat. § 148.9987 — Exceptions to the behavior analyst license requirement', url: 'https://www.revisor.mn.gov/statutes/cite/148.9987' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Minnesota: 2024 law, MN Board of Psychology)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  // DHS manuals (www.dhs.state.mn.us, read via r.jina.ai)
  mhcpEidbi: { title: 'MHCP Provider Manual — Early Intensive Developmental and Behavioral Intervention (EIDBI) Benefit (revised Sept. 14, 2026)', url: 'https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=DHS16_195658' },
  grid: { title: 'DHS — EIDBI billing grid (August 2026)', url: 'https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_FILE&RevisionSelectionMethod=LatestReleased&Rendition=Primary&allowInterrupt=1&noSaveAs=1&dDocName=DHS16_195657' },
  mcoGrid: { title: 'DHS — EIDBI Managed Care Organization (MCO) Contact Information Grid (October 2026)', url: 'https://www.dhs.state.mn.us/main/groups/manuals/documents/pub/DHS-312255.pdf' },
  services: { title: 'EIDBI Benefit Policy Manual — EIDBI services (updated 1/6/26)', url: 'https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=dhs16_195211' },
  elig: { title: 'EIDBI Benefit Policy Manual — Eligibility for EIDBI services', url: 'https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=dhs16_195213' },
  mednec: { title: 'EIDBI Benefit Policy Manual — Medical necessity criteria', url: 'https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=dhs16_195405' },
  cmde: { title: 'EIDBI Benefit Policy Manual — Comprehensive multi-disciplinary evaluation (CMDE) (updated 11/7/25)', url: 'https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=dhs16_195210' },
  tele: { title: 'EIDBI Benefit Policy Manual — Telehealth services (updated 9/10/26)', url: 'https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=DHS-292812' },
  clinsup: { title: 'EIDBI Benefit Policy Manual — Clinical supervision (updated 9/15/26)', url: 'https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=dhs16_195399' },
  overview: { title: 'EIDBI Benefit Policy Manual — Overview of the EIDBI benefit (updated 4/28/26: provisional licensure, advanced certification)', url: 'https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=DHS-292846' },
  updates: { title: 'EIDBI Benefit Policy Manual — Updates to the policy manual (change log through 9/16/26)', url: 'https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=DHS-292873' },
  mhcpTele: { title: 'MHCP Provider Manual — Telehealth Services (POS 02/10, modifier 93)', url: 'https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=DHS-335178' },
  billPol: { title: 'MHCP Provider Manual — Billing Policy Overview (timely billing: 12 months from date of service)', url: 'https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=ID_008924' },
  mcoSec: { title: 'MHCP Provider Manual — Managed Care Organizations (carve-outs, MCO and state appeal rights)', url: 'https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=id_008923' },
  spa2410: { title: 'CMS-approved Minnesota SPA MN-24-0010, Attachment 4.19-B — EIDBI rates (effective Jan. 1, 2024)', url: 'https://www.medicaid.gov/medicaid/spa/downloads/MN-24-0010.pdf' },
  ucareBull: { title: 'DHS MHCP provider bulletin — Medica acquiring UCare clarifications (Dec. 18, 2025)', url: 'https://content.govdelivery.com/accounts/MNDHS/bulletins/400969b' },
  ucareFaq: { title: 'UCare — Plan closure FAQ (UCare Medical Assistance plans now Medica One Health Plan, Oct. 1, 2026)', url: 'https://www.ucare.org/about-us/plan-closure-faq' },
  // Federal
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability, incl. pay-and-recover for EPSDT (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  // Managed care plans
  bcP55: { title: 'Blue Cross and Blue Shield of Minnesota / Blue Plus Provider Bulletin P55R1-21 — EIDBI service authorization and claims (Nov. 1, 2021)', url: 'https://bluecrossmn.com/sites/default/files/DAM/2021-11/Final%20Revision%20EIDBI%20Service%20Auth%20Claim%20Update%20for%20MHCP%20Bulletin%20P55R1-21.pdf' },
  bcP69: { title: 'Blue Cross / Blue Plus Provider Bulletin P69-20 — EIDBI authorization process (ITP with initial, 6-month and annual requests; fax 1-800-505-1193)', url: 'https://bluecrossmn.com/sites/default/files/DAM/2022-09/Final%20EIDBI%20Authorization%20Process%20Bulletin%20P69-20.pdf' },
  bcX43: { title: 'Blue Cross and Blue Shield of Minnesota Medical Policy X-43-014 — Autism Spectrum Disorder: Assessment and Early Intensive Behavioral Intervention (version in force from Feb. 2, 2026)', url: 'https://securecms.bluecrossmnonline.com/content/medpolicy/en/minnesota/core/all/policies/Behavioral_Health/X-43/X-43-014.html' },
  hpPage: { title: 'HealthPartners — EIDBI provider FAQ (authorization, billing)', url: 'https://www.healthpartners.com/provider-public/eidbi/' },
  hpPolicy: { title: 'HealthPartners coverage policy — Early intensive developmental and behavioral intervention (EIDBI), Minnesota Health Care Programs (revised 10/06/2026)', url: 'https://www.healthpartners.com/public/coverage-criteria/policy.html?contentid=ENTRY_266466' },
  hpTips: { title: 'HealthPartners — Helpful tips for billing HealthPartners for EIDBI services', url: 'https://www.healthpartners.com/content/dam/plan/providers/reference/helpful-tips-for-billing-healthpartners-for-eidbi-services.pdf' },
  hhPA: { title: 'Hennepin Health — Prior authorization (decision timeframes, fax numbers)', url: 'https://www.hennepinhealth.org/providers/prior-authorization' },
  hhChart: { title: 'Hennepin Health — Prior Authorization Requirements for Medical and Behavioral Health Services (July 2026)', url: 'https://www.hennepinhealth.org/-/media/hh/providers/prior-authorization-chart.pdf' },
  hhClaims: { title: 'Hennepin Health — Claims/billing (180-day filing)', url: 'https://www.hennepinhealth.org/providers/claims-billing' },
  hhChronic: { title: 'Hennepin Health — Chronic Condition: No Prior Authorization Expiration (effective 01/01/2026)', url: 'https://www.hennepinhealth.org/-/media/hh/providers/medical-necessity-criteria/Chronic-Condition---No-Prior-Authorization-Expiration.pdf' },
  imcAppeal: { title: 'IMCare (Itasca Medical Care) — Provider Appeal and Grievance Information', url: 'https://www.itascacountymn.gov/DocumentCenter/View/4581/Provider-Appeal-and-Grievance-Information-PDF' },
  imcUM: { title: 'IMCare — 2025 Utilization Management Medical-Necessity Criteria', url: 'https://www.itascacountymn.gov/DocumentCenter/View/11795/2025-Utilization-Management-Criteria-PDF' },
  imcHome: { title: 'IMCare (Itasca Medical Care) home page — "your local County health plan"', url: 'http://imcare.org/' },
  imcProv: { title: 'IMCare — Providers & Partners (forms, provider portal)', url: 'https://www.itascacountymn.gov/357/Providers-Partners' },
  opMN: { title: 'Optum Provider Express — Welcome Minnesota Providers (Medica behavioral health; Medicaid EIDBI forms)', url: 'https://www.providerexpress.com/content/ope-provexpr/us/en/our-network/welcomeNtwk/wMN.html' },
  opMedQRG: { title: 'Optum — Information and resources for working with Medica Behavioral Health (BH5236, 10/2023)', url: 'https://www.providerexpress.com/content/dam/ope-provexpr/us/pdfs/ourNetworkMain/medica/5236MedicaQRG.pdf' },
  pwEidbi: { title: 'PrimeWest Health Provider Manual — Early Intensive Development and Behavioral Intervention (EIDBI) (updated 09/04/2026)', url: 'https://www.primewest.org/eidbi' },
  pwBill: { title: 'PrimeWest Health Provider Manual — Billing Requirements (180-day timely filing)', url: 'https://www.primewest.org/billing-requirements' },
  scBhPa: { title: 'South Country Health Alliance — Behavioral Health Prior Authorization and Notification List (form 7212, updated 3/5/2025)', url: 'https://mnscha.org/wp-content/uploads/7212.pdf' },
  scCh6: { title: 'South Country Provider Manual Ch. 6 — Service Authorizations & Notification Standards (Feb. 2026)', url: 'https://mnscha.org/wp-content/uploads/Ch6_02272026.pdf' },
  scCh4: { title: 'South Country Provider Manual Ch. 4 — Provider Billing (July 2026)', url: 'https://mnscha.org/wp-content/uploads/Ch4_07292026.pdf' },
  scCh14: { title: 'South Country Provider Manual Ch. 14 — Member Grievances and Appeals, Minnesota Health Care Programs (May 2026)', url: 'https://mnscha.org/wp-content/uploads/Ch14_05042026.pdf' },
  scCh33: { title: 'South Country Provider Manual Ch. 33 — Telehealth (Feb. 2026)', url: 'https://mnscha.org/wp-content/uploads/Ch33_02272026.pdf' },
  // National commercial policies (fetched this run)
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; state exhibit: Maryland only)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026; incl. Minnesota Regulatory Addendum)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates (BH803ABASTM, effective July 2026; Minnesota not listed)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated February 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumNNM: { title: 'Optum National Network Manual (BH02330, July 1, 2026 edition; lists Minnesota regulatory requirements)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
};

/* ---------------- Shared Minnesota Medicaid (EIDBI) facts ---------------- */
const MN_MCO_PARENT = 'Minnesota Medical Assistance (EIDBI benefit, managed care)';

const EIDBI_SUPERVISION =
  'Set by statute for every Medical Assistance member, fee-for-service or managed care. An EIDBI agency must "provide clinical supervision for a minimum of one hour for every 16 hours of direct treatment per person, unless otherwise authorized in the person’s individual treatment plan," and must provide "the required EIDBI intervention observation and direction by a QSP at least once per month" (Minn. Stat. § 256B.0949, subd. 16(a)(15)–(16), as amended by Laws 2026, ch. 95). The QSP may do that monthly observation and direction by telehealth for no more than two consecutive months; the third month must be in person. DHS’s clinical supervision page (updated 9/15/26) adds that each person gets one primary QSP (who signs the ITP), a backup QSP must be available, and a different ratio needs an exception documented in the ITP and approved through service authorization. Every intervention must be "provided by a qualified EIDBI provider and supervised by a QSP" (subd. 13(a)).';

const EIDBI_NOTES =
  'Statutory since 2026. New subdivision 19 of § 256B.0949 (Laws 2026, ch. 95, art. 4, sec. 26) requires all CMDE and EIDBI documentation to be "signed and dated by the provider completing the documentation with the provider’s full name, title, and credentials," to "be entered within 72 hours of service and contain a record and explanation of any delays in entry," and to "include a record of supervision and oversight for staff providing services requiring supervision." "Each EIDBI service occurrence must be documented in a progress note." DHS-7108 (CMDE) must be signed by the CMDE provider and the caregiver or guardian, and DHS-7109 (ITP) by the QSP and the caregiver or guardian; those signatures are the family’s consent to start or continue services.';

const EIDBI_AGE =
  'Under 21. The statute defines the covered "person" as "an individual under 21 years of age" (§ 256B.0949, subd. 2(q)), and DHS lists "Younger than age 21" among the eligibility criteria.';

const EIDBI_DIAGNOSERS =
  'Set by statute: the diagnosis of ASD or a related condition must be "completed by either (i) a licensed physician, advanced practice registered nurse, or physician assistant, or (ii) a mental health professional," be based on current DSM criteria with direct observation and caregiver information, and meet the standard diagnostic assessment rules of § 245I.10, subd. 6 (§ 256B.0949, subd. 4). DHS’s eligibility page says assessors use the DC:0-5 for children five and younger and the DSM from age six. The CMDE provider (physician, APRN, PA, mental health professional, or qualified clinical trainee with 2,000 hours of ASD experience or equivalent coursework) then confirms medical necessity.';

const EIDBI_TOOLS =
  'No instrument is mandated for EIDBI itself: DHS "strongly encourages providers to use standardized assessment tools" but "does not require specific assessment tools." The exception is a CMDE submitted for other disability or benefit decisions (waiver enrollment, SSI): there DHS requires "A direct observational assessment (e.g., ADOS-2)" and "A structured caregiver interview (e.g., ADI-R)," and says developmental history or non-autism-specific screens alone are "insufficient."';

const EIDBI_RECENCY =
  'No expiry on the diagnosis itself; the clock is the CMDE. DHS says the CMDE "must be completed to initiate services and updated at least once every three years" (or sooner when the condition, diagnosis, family, placement or setting changes), the CMDE provider must complete the direct observation within 60 days of the CMDE date, and to restart services after termination "If the person’s CMDE is more than 36 months old … the person must receive a new CMDE." The annual CMDE for reauthorization is due 30 to 60 days before the current service authorization ends.';

const EIDBI_TELE =
  'Yes, for most EIDBI services. The statute says Medical Assistance "covers medically necessary EIDBI services and consultations delivered via telehealth … in the same manner as if the service or consultation was delivered in person" (§ 256B.0949, subd. 13(l)). DHS lists the CMDE (97151), coordinated care conference, family/caregiver training (97156/97157), ITP development and progress monitoring (H0032), individual and group intervention (97153/97154) and observation and direction (97155) as telehealth-eligible; higher-intensity intervention (0373T) "cannot occur via telehealth." Same thresholds, authorization and rates as in person; QSP observation and direction may be remote for at most two consecutive months. Bill POS 02 (not at home) or POS 10 (at home), modifier 93 for audio-only, and never use telehealth POS or modifiers for non-client-facing services. Providers enroll for telehealth on the Telehealth Provider Assurance Statement (DHS-6806).';

const EIDBI_COB =
  'Medical Assistance is still the payer of last resort, but EIDBI is "pay and chase." DHS: "EIDBI providers are not required to bill a member’s commercial insurance before billing Medicaid. MHCP or the MCO will seek reimbursement from third parties … This ‘pay and chase’ process applies to both fee-for-service and managed care members," though a payment received from another source must still be reported. That matches the federal rule letting states pay EPSDT claims and recover later (42 CFR 433.139(b)(3)(i)). For authorization, DHS tells providers with privately insured members to "follow the primary insurance’s authorization procedures."';

/* ---------------- Shared Minnesota commercial layer ---------------- */
const MN_MANDATE_BODY =
  'Minnesota’s autism mandate, Minn. Stat. § 62A.3094, is narrower than most states’. It binds "A health plan issued to a large employer, as defined in section 62Q.18," which § 62Q.18 defines as an employer with "more than 50 current employees." Those plans "must provide coverage for the diagnosis, evaluation, multidisciplinary assessment, and medically necessary care of children under 18 with autism spectrum disorders," expressly including "early intensive behavioral and developmental therapy … including, but not limited to, all types of applied behavior analysis, intensive early intervention behavior therapy, and intensive behavior intervention," plus speech, occupational and physical therapy and medications. Treatment follows "an individualized treatment plan prescribed by the enrollee’s treating physician or mental health professional"; the carrier "may request an updated treatment plan only once every six months" unless both sides agree more is needed; and "An independent progress evaluation conducted by a mental health professional with expertise and training in autism spectrum disorder and child development must be completed." Medical necessity must be "consistent with generally accepted practice parameters as determined by physicians and licensed psychologists who typically manage patients who have autism spectrum disorders." The section sets no dollar or visit cap. It does not reach small-group or individual policies, or self-funded employer plans (ERISA); those fall back on the plan document plus parity law, and Minnesota’s parity statute (§ 62Q.47) applies to "All health plans … that provide coverage for … mental health" services.';

const MN_LICENSURE_BODY =
  'Minnesota now licenses behavior analysts. Laws 2024, ch. 127, art. 19 created a license under the Board of Psychology (Minn. Stat. §§ 148.9981–148.9995; the BACB’s licensure table lists Minnesota, 2024, MN Board of Psychology). Since January 1, 2025, "an individual must not engage in the practice of applied behavior analysis unless the individual is licensed … as a behavior analyst or is exempt"; licensed psychologists are exempt, and so are "unlicensed supervisee[s] or trainee[s]" working "under the authority and direction of a licensed behavior analyst," family members acting under that direction, school-district employees, and supervised students. The license requires "a current and active national certification as a board-certified behavior analyst" (or the equivalent requirements) plus a background check, and renews every two years. The exceptions list has no out-of-state or telehealth carve-out, so a BCBA licensed in another state should get a Minnesota license (or confirm an exemption with the Board of Psychology) before treating a Minnesota child, including remotely. For rates: commercial ABA rates are negotiated and unpublished; the public benchmark is Minnesota Medical Assistance’s EIDBI rate, $20.178 per 15-minute unit of intervention when delivered by a QSP or Level I provider (SPA MN-24-0010, effective January 1, 2024).';

const MANDATE_AGE_TAIL =
  ' For a Minnesota large-employer plan (more than 50 employees, fully insured), § 62A.3094 requires autism coverage "of children under 18"; it sets no dollar cap. Small-group, individual and self-funded plans sit outside that section, so the plan document governs.';

const MANDATE_REFERRAL_TAIL =
  ' For a Minnesota large-employer plan, § 62A.3094 ties covered treatment to "an individualized treatment plan prescribed by the enrollee’s treating physician or mental health professional," lets the carrier request an updated plan "only once every six months," and requires an independent progress evaluation by a mental health professional.';

const MN_UR_VALUE = (carrier: string) =>
  `Depends on how the plan is funded. Fully insured Minnesota plans fall under the Minnesota Utilization Review Act: a standard prior-authorization decision must be communicated "within five business days after receiving the request, regardless of how the request was received," once the reviewer has the information it reasonably needs (§ 62M.05, subd. 3a), and an expedited one "no later than 48 hours and must include at least one business day" (subd. 3b). An approved authorization may not be revoked or limited later except for fraud, misinformation or a conflict with law (§ 62M.07, subd. 3). For plans issued or renewed on or after January 1, 2026, "An authorization for treatment of a chronic health condition does not expire unless the standard of treatment for that health condition changes" (subd. 5), and no carrier may require prior authorization of "outpatient mental health treatment" (subd. 2(2)); the statute does not say whether it treats ABA as outpatient mental health treatment, so ask. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours. ${carrier} publishes no Minnesota-specific ABA turnaround.`;

const MN_COB_VALUE = (carrier: string) =>
  `If the child also has Minnesota Medical Assistance, ${carrier} pays first: Medicaid is payer of last resort (42 CFR 433.139). For EIDBI, though, DHS runs "pay and chase": the EIDBI provider is "not required to bill a member’s commercial insurance before billing Medicaid," and MHCP or the MCO recovers from the commercial plan afterwards, so a Medicaid-enrolled EIDBI agency may see the commercial carrier come back for the money. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270). We did not read Minnesota’s group coordination-of-benefits rule, so confirm the order between two parents’ plans (birthday rule or otherwise) with the carrier.`;

const MN_PROMPT_PAY =
  'Minnesota’s prompt-pay statute (§ 62Q.75) makes "All health plan companies and third-party administrators … pay or deny claims that are clean claims within 30 calendar days" of receipt, with interest at "1.5 percent per month," and, "Unless otherwise provided by contract," providers must submit charges "within six months from the date of service."';

export const minnesotaPayers: Record<string, PayerConfig> = {
  'minnesota-medicaid': {
    slug: 'minnesota-medicaid',
    cardDesc: 'ABA is a modality of the EIDBI benefit (under 21): CMDE first, then an ITP authorized by Acentra Health (FFS) or the member’s MCO.',
    assessmentPA: {
      value: 'No for the first CMDE each calendar year. The CMDE (97151 UB) is allowed "One CMDE … per calendar year without a service agreement (maximum of 80 units per calendar year)"; ITP development (H0032) and coordinated care conferences (T1024) need no authorization either. More than one CMDE in a year needs form DHS-3806',
      status: 'verified',
      cites: [S.grid, S.mhcpEidbi],
    },
    treatmentPA: {
      value: 'Yes. Intervention (97153, 97154, 0373T), observation and direction (97155), family/caregiver training (97156, 97157) and travel time (H0046) require service authorization before delivery; FFS requests go to Acentra Health in the Atrezzo portal, each spanning no more than 180 days',
      status: 'verified',
      cites: [S.mhcpEidbi, S.grid],
    },
    dxRequired: {
      value: 'Yes: ASD or a "related condition" (severe, chronic, with ASD-like impairments in social interaction, communication and restrictive or repetitive behaviors), diagnosed under current DSM criteria by a licensed physician, APRN, PA or mental health professional (§ 256B.0949, subds. 2(d) and 4). DHS adds that a child under five may meet medical necessity without a final diagnosis',
      status: 'verified',
      cites: [S.stat0949, S.elig, S.mednec],
    },
    payer: 'Minnesota Medical Assistance (EIDBI)',
    state: 'MN', kind: 'state-medicaid',
    pill: 'Payer Guide · Minnesota Medical Assistance',
    h1: 'Minnesota Medical Assistance ABA (EIDBI) coverage: the intake guide.',
    metaTitle: 'Minnesota Medicaid ABA (EIDBI) Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Minnesota Medical Assistance covers ABA through the EIDBI benefit: under 21, CMDE then ITP, service authorization by Acentra Health or the member’s MCO, provider levels and QSP supervision, telehealth rules, published rates, and the 2025–2026 licensure and billing changes.',
    intro: [
      'Minnesota Medical Assistance pays for applied behavior analysis through a benefit with a different name: EIDBI, Early Intensive Developmental and Behavioral Intervention (Minn. Stat. § 256B.0949). ABA is one of the approved EIDBI modalities, alongside DIR/Floortime, the Early Start Denver Model and RDI. The benefit covers people under 21 with autism spectrum disorder or a related condition who are enrolled in Medical Assistance, MinnesotaCare, TEFRA or another qualifying program, once a comprehensive multi-disciplinary evaluation (CMDE) establishes medical need.',
      'For an agency, the program works in a fixed order. A CMDE provider evaluates the child and files the CMDE Medical Necessity Summary (DHS-7108); the agency’s qualified supervising professional (QSP) writes the Individual Treatment Plan (DHS-7109); then the plan is authorized, by Acentra Health for fee-for-service members or by the member’s managed care plan for everyone else. Most members are in one of eight health plans. Minnesota is also in the middle of a program-integrity overhaul: provisional EIDBI agency licensure (applications closed May 31, 2026), a statutory 1:16 supervision ratio, a 72-hour documentation rule enacted in 2026, and billing limits that start July 1, 2027 or on federal approval.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as an EIDBI modality, for members under 21 with ASD or a related condition' },
      { label: 'Structure', value: 'Carved in to managed care (8 MCOs per DHS’s October 2026 grid); fee-for-service members authorized by Acentra Health' },
      { label: 'Gatekeeping', value: 'CMDE (DHS-7108) establishes medical necessity; ITP (DHS-7109) by a QSP; both signed by the family' },
      { label: 'Prior auth', value: 'Required for 97153/97154/0373T/97155/97156/97157/H0046; not for the annual CMDE, ITP (H0032) or care conferences' },
      { label: 'Rates (per 15 min)', value: 'Intervention $20.178 (QSP/Level I), 80% Level II, 50% Level III; two-provider intervention $24.192; CMDE $50.112 (SPA MN-24-0010)' },
      { label: 'Supervision', value: '1 hour per 16 hours of direct treatment; QSP observation and direction at least monthly' },
      { label: 'Licensure', value: 'Behavior analysts licensed by the Board of Psychology since 2024 law (license required from Jan. 1, 2025)' },
      { label: 'Other insurance', value: 'EIDBI is pay-and-chase: no need to bill the commercial plan first' },
    ],
    sections: [
      {
        h2: 'Where ABA sits: EIDBI, a CMDE, and the member’s plan',
        body: [
          'The statute authorizes EIDBI "to provide early intensive intervention to a person with an autism spectrum disorder or a related condition," covering "a comprehensive, multidisciplinary evaluation, ongoing progress monitoring, and medically necessary early intensive treatment." ABA is listed first among the modalities treatment must follow (§ 256B.0949, subd. 13(b)); DHS also requires every agency to employ a QSP or Level I provider with advanced certification in its modality, which for ABA means a BCBA, BCBA-D or BCaBA. Covered services are the CMDE, ITP development and progress monitoring, coordinated care conferences, individual, group and higher-intensity intervention, observation and direction, family/caregiver training and counseling, and travel time.',
          'Medical necessity follows DHS’s criteria page: symptoms present in the early developmental period (or masked until later), behaviors that persist across environments and either pose a health or safety risk or significantly disrupt home or community life, and a CMDE showing the person needs "10 or more hours per week of EIDBI services (unless there is a clinical rationale for an exception)." Recommendations should not exceed 20 hours a week for a person older than seven unless an exception applies (crisis, risk of out-of-home placement, a short intensive boost, late access, or a documented CMDE or QSP rationale). Reauthorization needs documented progress and a parent signature on the ITP; DHS may terminate when there is no measurable progress within 12 months of the initial ITP.',
          'EIDBI is not carved out of managed care. DHS’s MHCP manual sends providers to the plan: "If the person is enrolled in a prepaid health plan (PPHP), contact the appropriate managed care organization for authorization requirements," and Acentra Health "will reject requests submitted for members enrolled in an MCO." DHS’s October 2026 EIDBI MCO contact grid lists eight plans: Blue Cross and Blue Shield of Minnesota (Blue Plus), HealthPartners, Hennepin Health, IMCare, Medica, PrimeWest Health, South Country Health Alliance, and Medica One Health Plan (the former UCare Medical Assistance plans, which moved to Medica on October 1, 2026).',
        ],
        cites: [S.stat0949, S.overview, S.services, S.mednec, S.mhcpEidbi, S.mcoGrid, S.ucareFaq],
      },
      {
        h2: 'Fee-for-service authorization: Acentra Health, Atrezzo, 180 days',
        body: [
          'For fee-for-service members, "MHCP’s current medical review agent is Acentra Health." The CMDE provider uploads DHS-7108 with its signature page to the Atrezzo portal; the QSP must have medical-necessity approval before submitting the ITP and must upload DHS-7109 "at least 30 days before the start date requested or the end date of the current service authorization period." Acentra does not take faxes or mail. Each authorization "cannot exceed a 180-day span"; the annual CMDE is due "at least 30 days, but no more than 60 calendar days, before the end date of the current service authorization period"; and Acentra "may retroactively approve up to 180 days," provided the ITP and CMDE were signed before services started.',
          'Acentra has seven calendar days from receipt of a CMDE, and seven from receipt of an ITP, to check completeness, pend for missing information, and decide. A pended provider has 10 calendar days to upload everything requested in one response, after which Acentra has three business days to decide; if the information does not arrive in time, the request is denied. Since January 1, 2026 the Minnesota Utilization Review Act also applies to Medical Assistance: § 62M.01, subd. 3(c) extends §§ 62M.05 (standard decisions within five business days) and 62M.07 to fee-for-service. Policy or clinical questions on an authorization go to ASD.DHS@state.mn.us; the Acentra provider call center is 866-433-3658.',
        ],
        cites: [S.mhcpEidbi, S.stat62M01, S.stat62M05],
      },
      {
        h2: 'Provider levels, supervision and the 2025–2026 integrity changes',
        body: [
          'EIDBI has five provider types, set out in § 256B.0949, subd. 15. A QSP must be an agency employee who is "either a licensed mental health professional or a licensed behavior analyst" (or a developmental or behavioral pediatrician) with 2,000 hours of ASD experience or equivalent graduate coursework; DHS removed physicians and APRNs from its QSP page on 9/16/26. A BCBA (or QABA-credentialed qualified behavior analyst) qualifies as a Level I provider; an RBT or BCaBA qualifies as Level II with a bachelor’s degree; Level III staff need the DHS Level III training, be 18 or older, and have a diploma or one of the listed alternatives. Clinical supervision is at least one hour per 16 hours of direct treatment, with QSP observation and direction at least monthly, no more than two consecutive months by telehealth.',
          'Three changes matter for anyone entering the market now. All EIDBI agencies had to apply for a provisional license by May 31, 2026; DHS is to propose permanent licensing standards to the Legislature by January 1, 2027. Laws 2026, ch. 95 added § 256B.0949, subd. 19: documentation must be signed with full name, title and credentials, entered within 72 hours of service, and include a record of supervision; agencies that fail it can have payments withheld (subd. 18). Laws 2026, ch. 121 added subd. 20: effective July 1, 2027 or on federal approval, whichever is later, billing limits of 40 hours a week of intensive services, two hours a day of travel, 20 hours a week of observation and direction, and 300 units a year of individual treatment planning, with exceptions for medical necessity that are "final and not subject to appeal." Agencies must also keep an office in Minnesota or a border state (subd. 16(a)(7)).',
        ],
        cites: [S.stat0949, S.updates, S.overview, S.clinsup, S.sl95, S.sl121],
      },
      {
        h2: 'What does Minnesota Medicaid pay for ABA (EIDBI)?',
        body: [
          'The CMS-approved state plan page (SPA MN-24-0010, Attachment 4.19-B, effective January 1, 2024) sets EIDBI payment at the lower of the submitted charge or these agency rates: CMDE by a CMDE provider $50.112 per 15-minute unit; coordinated care conference $112.678 per provider per session; intervention with two providers (0373T) $24.192 per unit; and, for services by a QSP or Level I provider, ITP development $94.280 per session, individual intervention $20.178, group intervention $6.72, observation and direction $20.178, family/caregiver training $20.178 and group family training $6.72 per unit. Those rates are "reduced 20% when provided by a Level II provider" and "reduced by 50% when provided by a Level III provider," which puts a Level II RBT at about $16.14 and a Level III technician at about $10.09 per unit of 97153. Travel time is the lower of charge or 52 cents a minute.',
          'DHS’s August 2026 billing grid restates the percentages (100% QSP and Level I, 80% Level II, 50% Level III on 97153 and 97154; 0373T at 100% for every level) and prints the H0032 rate as "$94.80/unit" and H0046 as "$0.52 per unit"; the H0032 figure differs from the SPA’s $94.280, so check the MHCP fee schedule (behind a CPT licence click-through on mn.gov/dhs) for the current number. Managed care plans pay contracted rates. Units bill only past the midpoint (eight minutes of a 15-minute unit), and DHS’s 2026 manual rules bar billing for provider breaks, idle time or note-writing.',
        ],
        cites: [S.spa2410, S.grid, S.mhcpEidbi],
      },
      {
        h2: 'Claims: timely filing, NPIs, telehealth and appeals',
        body: [
          'Fee-for-service claims go on the 837P through MN–ITS or a batch system, and "MHCP receives them no later than 12 months from the date of service"; replacement claims are due within six months of the incorrect payment or 12 months from service, whichever is later. Every EIDBI line carries the UB modifier. The claim must name the pay-to provider, the rendering provider’s UMPI or NPI, and "The supervising provider for any services that require the supervision of a QSP"; the grid adds that "The QSP must be on all other EIDBI claims as the supervising professional" (the CMDE needs none), and Level III claims always need the rendering provider. Bill each day on its own line, POS 12 for home and community and POS 11 for office or non-direct work, and never mix authorized and unauthorized services on one claim. Telehealth uses POS 02 or 10, with modifier 93 for audio-only.',
          'For managed care, the statute directs DHS to require plans to "use a six-month timely filing standard," and the plans we checked print 180 days. Members (or providers with written consent; none is needed to appeal a prior authorization or payment denial) must appeal to the MCO within 60 days of the notice and may then request a state appeal within 120 days of the MCO’s decision. None of the EIDBI manual pages, the MHCP EIDBI section or the billing grid mentions electronic visit verification.',
        ],
        cites: [S.billPol, S.mhcpEidbi, S.grid, S.mhcpTele, S.stat69, S.mcoSec],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [MN_LICENSURE_BODY, 'EIDBI adds its own constraints. A QSP must be a licensed mental health professional or "a licensed behavior analyst," defined as "an individual licensed under sections 148.9981 to 148.9995" (§ 256B.0949, subd. 2(e)), so a BCBA licensed only in another state cannot be the QSP. Every qualified provider must be an employee of an enrolled agency with an office in Minnesota or a border state, and DHS’s telehealth page limits telehealth to providers "licensed or registered by the state." In practice an out-of-state BCBA serving a Minnesota EIDBI member needs a Minnesota license and an employing Minnesota-enrolled agency, whether the work is in person or remote.'],
        cites: [S.lic9981, S.lic9983, S.lic9986, S.lic9987, S.bacbLic, S.stat0949, S.tele, S.spa2410],
      },
    ],
    collect: [
      { title: 'Which Medical Assistance card', desc: 'Fee-for-service (Acentra Health) or one of the eight MCOs. Check MN–ITS eligibility before submitting anything; Acentra rejects MCO members.' },
      { title: 'Diagnostic assessment', desc: 'ASD or related condition by a physician, APRN, PA or mental health professional meeting § 245I.10 standards (DC:0-5 under age six).' },
      { title: 'CMDE (DHS-7108)', desc: 'Signed by the CMDE provider and a legal decision-maker; observation within 60 days; updated at least every three years.' },
      { title: 'Other insurance', desc: 'Record it, but EIDBI does not require billing the commercial plan first (pay and chase).' },
      { title: 'School schedule', desc: 'Direct intervention must not replace instruction; since Jan. 1, 2026 no 97153/97154/0373T during homeschool or virtual-school instruction.' },
    ],
    sources: [S.stat0949, S.sl95, S.sl121, S.mhcpEidbi, S.grid, S.mcoGrid, S.services, S.elig, S.mednec, S.cmde, S.tele, S.clinsup, S.overview, S.updates, S.mhcpTele, S.billPol, S.mcoSec, S.spa2410, S.stat69, S.stat62M01, S.stat62M05, S.stat62M07, S.lic9981, S.lic9983, S.lic9986, S.lic9987, S.bacbLic, S.cfr433, S.ucareFaq],
    deliveryRules: {
      supervision: {
        value: EIDBI_SUPERVISION,
        status: 'verified',
        cites: [S.stat0949, S.sl95, S.clinsup],
      },
      concurrentBilling: {
        value: 'Allowed in defined cases. DHS: "Multiple providers may deliver and bill for" the CMDE, ITP development and progress monitoring, coordinated care conference, observation and direction, and family/caregiver training "at the same time," and "Multiple providers may deliver a combination of EIDBI services at the same time (e.g., one provider delivers individual intervention, and another provider delivers observation and direction) as medically necessary." So 97153 and 97155 may be billed for the same clock time by two providers. 0373T is billed once per period no matter how many staff are present. DHS also tells providers to check the Medicaid NCCI edits before billing simultaneous codes.',
        status: 'verified',
        cites: [S.services, S.grid],
      },
      dailyLimits: {
        value: 'From the August 2026 billing grid: 97151 8 hours a day and 80 units a calendar year; 97153 and 0373T 8 hours a day; 97154 4.5 hours a day (up to 8 people); 97155 6 hours a day and "approximately 20% of the total authorized intervention time" unless the ITP justifies otherwise; 97156 and 97157 4 hours a day; H0032 and T1024 as clinically necessary. Medical-necessity guidance is at least 10 hours a week and no more than 20 for a person over seven without an exception. Statutory weekly limits (40 hours intensive, 20 hours observation and direction, 2 hours travel a day, 300 ITP units a year) take effect July 1, 2027 or on federal approval.',
        status: 'verified',
        cites: [S.grid, S.mednec, S.sl121],
      },
      noteSignature: {
        value: EIDBI_NOTES,
        status: 'verified',
        cites: [S.sl95, S.services],
      },
      placeOfService: {
        value: 'Center, clinic, office, or home or community (including school). Bill POS 12 for home and community services in the ITP, POS 11 for office-based and non-direct work, POS 02/10 for telehealth. EIDBI may run during school hours when the ITP documents why, but must not replace IEP services or instruction, and since January 1, 2026 97153, 97154 and 0373T may not be delivered during homeschool or virtual-school instruction (97156 with a participating parent may). Travel time (H0046) is payable to and from home, school or community settings with POS 12 or 99.',
        status: 'verified',
        cites: [S.services, S.mhcpEidbi, S.grid, S.stat0949],
      },
      billAsProvider: {
        value: 'Both. The claim carries "The Unique Minnesota Provider Identifier (UMPI) or National Provider Identifier (NPI) of the rendering provider who delivered the service" and "The supervising provider for any services that require the supervision of a QSP"; the grid: "The QSP must be on all other EIDBI claims as the supervising professional," except CMDEs. Level III services always need the rendering provider’s number. Every individual provider enrolls with MHCP under provider type EI.',
        status: 'verified',
        cites: [S.mhcpEidbi, S.grid],
      },
    },
    intakeGates: {
      ageLimit: {
        value: EIDBI_AGE,
        status: 'verified',
        cites: [S.stat0949, S.elig],
      },
      dxRecency: {
        value: EIDBI_RECENCY,
        status: 'verified',
        cites: [S.cmde, S.mednec, S.mhcpEidbi],
      },
      diagnosingProviders: {
        value: EIDBI_DIAGNOSERS,
        status: 'verified',
        cites: [S.stat0949, S.elig],
      },
      diagnosticTools: {
        value: EIDBI_TOOLS,
        status: 'verified',
        cites: [S.elig, S.cmde],
      },
      referral: {
        value: 'No physician referral or order; the gate is the CMDE, which must "include medical or assessment information from the person’s physician, advanced practice registered nurse, or physician assistant" (§ 256B.0949, subd. 5(c)). Families may request a CMDE at any time and choose the CMDE provider; DHS publishes an EIDBI referral form (DHS-6751S) for families looking for providers.',
        status: 'verified',
        cites: [S.stat0949, S.cmde, S.elig],
      },
      telehealth: {
        value: EIDBI_TELE,
        status: 'verified',
        cites: [S.stat0949, S.tele, S.mhcpEidbi, S.mhcpTele],
      },
      authTurnaround: {
        value: 'Acentra Health decides within seven calendar days of receiving a CMDE or ITP; a pended request gives the provider 10 calendar days to respond, then Acentra has three business days. DHS-3806 requests (services above grid thresholds) and DHS-7109A changes are also decided within seven calendar days. Since January 1, 2026, § 62M.05, subd. 3a (standard determinations within five business days) applies to fee-for-service under § 62M.01, subd. 3(c). Authorizations span up to 180 days and may be approved retroactively for up to 180 days. Submit at least 30 days before the start date.',
        status: 'verified',
        cites: [S.mhcpEidbi, S.stat62M01, S.stat62M05],
      },
      coordinationOfBenefits: {
        value: EIDBI_COB,
        status: 'verified',
        cites: [S.mhcpEidbi, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Minnesota Medicaid cover ABA therapy?', a: 'Yes, through the EIDBI benefit for members under 21 with autism spectrum disorder or a related condition. ABA is one of four approved EIDBI modalities. A CMDE establishes medical need, a QSP writes the ITP, and the plan (Acentra Health for fee-for-service, otherwise the member’s MCO) authorizes treatment.' },
      { q: 'Does the ABA assessment need prior authorization in Minnesota Medicaid?', a: 'Not the first CMDE (97151 UB) in a calendar year, up to 80 units; ITP development (H0032) needs none either. A second CMDE in the same year needs form DHS-3806. Treatment codes (97153–97157, 0373T, H0046) need service authorization.' },
      { q: 'What does Minnesota Medicaid pay for ABA?', a: 'Under SPA MN-24-0010 (effective Jan. 1, 2024), $20.178 per 15-minute unit for individual intervention, observation and direction, and family training by a QSP or Level I provider; 80% of that for Level II and 50% for Level III; $24.192 for two-provider intervention; $50.112 per unit for the CMDE. MCOs pay contracted rates.' },
      { q: 'Does a BCBA need a Minnesota license?', a: 'Yes, since January 1, 2025, to practice ABA in Minnesota, unless exempt (licensed psychologists; supervisees working under a licensed behavior analyst; school-district employees; supervised students). The statute has no out-of-state or telehealth exception, and an EIDBI QSP must hold a Minnesota license as a behavior analyst or mental health professional.' },
      { q: 'Can EIDBI be delivered by telehealth?', a: 'Yes for the CMDE, ITP work, care conferences, family training, individual and group intervention, and observation and direction, at the same rates and with the same authorization; not for higher-intensity 0373T. QSP observation and direction can be remote only two months in a row. Bill POS 02 or 10.' },
      { q: 'Do I bill the family’s commercial insurance first?', a: 'Not for EIDBI. DHS says providers "are not required to bill a member’s commercial insurance before billing Medicaid"; MHCP or the MCO recovers from the commercial plan ("pay and chase"), for fee-for-service and managed care members alike.' },
    ],
  },

  'blue-plus-minnesota': {
    slug: 'blue-plus-minnesota',
    family: 'bcbs',
    cardDesc: 'Blue Cross’s Medical Assistance HMO: EIDBI follows DHS rules, PA via Availity or fax with CMDE, ITP and the Blue Cross EIDBI request form.',
    assessmentPA: {
      value: 'Not stated by Blue Plus. Its bulletins require the ITP with "the initial, 6-month, and annual authorization requests" and say EIDBI codes requiring PA are on its precertification list; DHS’s fee-for-service rule exempts the first CMDE each year, but we could not read the Blue Plus list',
      status: 'unverified',
      cites: [S.bcP55, S.bcP69, S.mcoGrid],
      verifyVia: 'Blue Cross MHCP Provider Services, 1-866-518-8448, or the Blue Cross precertification list on provider.publicprograms.bluecrossmn.com: ask whether 97151 UB needs authorization.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes. "EIDBI services continue to require prior authorization as outlined in the Blue Cross Precertification/Preauthorization/Notification List"; DHS’s October 2026 grid lists individual/group intervention, family/caregiver training and observation and direction as needing authorization, and "All services require authorization" for non-contracted providers',
      status: 'verified',
      cites: [S.bcP55, S.mcoGrid],
    },
    dxRequired: {
      value: 'Yes. Blue Plus follows DHS’s EIDBI guidelines ("All requests for EIDBI services and any associated claims should continue to match the guidelines outlined by DHS"), so the statutory rule applies: ASD or a related condition diagnosed by a physician, APRN, PA or mental health professional (§ 256B.0949, subd. 4)',
      status: 'verified',
      cites: [S.bcP55, S.stat0949],
    },
    payer: 'Blue Plus (Blue Cross and Blue Shield of Minnesota) — Medical Assistance',
    state: 'MN', kind: 'medicaid-mco', parent: MN_MCO_PARENT,
    pill: 'Payer Guide · Blue Plus · Minnesota',
    h1: 'Blue Plus (Blue Cross MN) Medical Assistance ABA / EIDBI coverage: the intake guide.',
    metaTitle: 'Blue Plus Minnesota Medicaid ABA (EIDBI) Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Blue Plus, Blue Cross and Blue Shield of Minnesota’s Medical Assistance plan, handles ABA under the EIDBI benefit: prior authorization with the CMDE and ITP, 180-day authorizations, UB modifier claims through Availity, and what intake should collect.',
    intro: [
      'Blue Plus is the HMO through which Blue Cross and Blue Shield of Minnesota serves Minnesota Health Care Programs members (Families and Children Medical Assistance and MinnesotaCare). For ABA it runs the state’s EIDBI benefit rather than its own autism policy: Blue Cross’s medical policy X-43 says Medicaid products "may provide different coverage" and points to the MHCP manual. Authorization, claims and contracting run through Blue Cross’s public-programs provider services.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as EIDBI for members under 21' },
      { label: 'Prior auth', value: 'Required for EIDBI treatment codes; all services for non-contracted providers' },
      { label: 'Submit via', value: 'Availity (Interactive Care Reviewer attachment) or fax 1-800-505-1193 with the CMDE, ITP and EIDBI request form' },
      { label: 'Auth span', value: '180 days, aligned with DHS since April 1, 2021' },
      { label: 'Claims', value: 'Electronic only, through Availity; UB modifier on every EIDBI code' },
      { label: 'Contact', value: 'Provider Services 1-866-518-8448; no referral needed' },
    ],
    sections: [
      {
        h2: 'Authorization and claims at Blue Plus',
        body: [
          'Blue Cross’s EIDBI bulletins (2020–2021, still the current notices on its site) set the process: the completed ITP is required "as part of the initial, 6-month, and annual authorization requests"; the ITP, CMDE and a completed Blue Cross EIDBI Request Form go by fax to 1-800-505-1193 or as an attachment in Availity’s Interactive Care Reviewer; and since April 1, 2021 Blue Cross uses "a 180-day time span for EIDBI service authorization requests. Requests that exceed 180 days will be reduced." Since December 1, 2021 every EIDBI code (0373T, 97151, 97153–97157, H0032, H0046, T1024) must carry the UB modifier, matching DHS’s billing grid. DHS’s October 2026 MCO grid confirms "No referral is required for the service. Services do require authorization," that non-contracted providers need authorization for everything, and that "All claims must be submitted electronically using Availity."',
        ],
        cites: [S.bcP69, S.bcP55, S.mcoGrid, S.bcX43],
      },
      {
        h2: 'What the state rules add',
        body: [
          'Because EIDBI is a statutory Medical Assistance benefit, the rules in § 256B.0949 bind Blue Plus members as well: under 21, CMDE before treatment, a QSP-supervised ITP, at least one hour of clinical supervision per 16 hours of direct treatment, monthly QSP observation and direction, and (from 2026) documentation signed with credentials and entered within 72 hours. Since January 1, 2026 the Minnesota Utilization Review Act applies to Medical Assistance managed care (§ 62M.01, subd. 3(b)), so standard authorization decisions are due within five business days of a complete request. DHS’s MHCP manual also tells MCOs to identify and credential all Level I, II, III and QSP providers from DHS’s enrollment data and to decide within 45 days of a clean application.',
        ],
        cites: [S.stat0949, S.sl95, S.stat62M01, S.stat62M05, S.mhcpEidbi],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Blue Plus Medical Assistance or MinnesotaCare (not Blue Cross commercial) on the date of service.' },
      { title: 'CMDE and ITP', desc: 'Both go with the request, plus the Blue Cross EIDBI Request Form; the ITP is needed at the initial, 6-month and annual requests.' },
      { title: 'Diagnosis', desc: 'ASD or related condition from a physician, APRN, PA or mental health professional.' },
      { title: 'Other insurance', desc: 'Record it; DHS’s pay-and-chase rule means the commercial plan need not be billed first for EIDBI.' },
    ],
    sources: [S.bcP55, S.bcP69, S.bcX43, S.mcoGrid, S.stat0949, S.sl95, S.mhcpEidbi, S.grid, S.stat62M01, S.stat62M05, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'Blue Plus publishes no EIDBI supervision rule of its own. ' + EIDBI_SUPERVISION,
        status: 'verified',
        cites: [S.stat0949, S.sl95, S.clinsup, S.bcP55],
      },
      concurrentBilling: {
        value: 'Blue Plus says EIDBI claims "should continue to match the guidelines outlined by DHS," but publishes no simultaneous-billing rule of its own. Under DHS policy two providers may bill 97153 and 97155 for the same time when medically necessary.',
        status: 'unverified',
        cites: [S.bcP55, S.services],
        verifyVia: 'Blue Cross MHCP Provider Services, 1-866-518-8448: ask whether Blue Plus applies DHS’s simultaneous-services rule to 97153 with 97155.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Blue Plus aligns with DHS’s billing grid ("Blue Cross is aligning with the DHS Claims guidelines published in the EIDBI Billing Grid"), so the grid’s daily limits apply: 97153 and 0373T 8 hours, 97154 4.5 hours, 97155 6 hours, 97156/97157 4 hours, 97151 8 hours a day and 80 units a year.',
        status: 'verified',
        cites: [S.bcP55, S.grid],
      },
      noteSignature: {
        value: 'Blue Plus publishes no EIDBI note rule of its own. ' + EIDBI_NOTES,
        status: 'verified',
        cites: [S.sl95, S.services],
      },
      placeOfService: {
        value: 'Blue Plus publishes no EIDBI setting rule. Under DHS policy EIDBI may be delivered in a center, clinic, office, or home or community (POS 12 community, POS 11 office), not in place of school instruction.',
        status: 'unverified',
        cites: [S.services, S.mhcpEidbi],
        verifyVia: 'Blue Cross MHCP Provider Services, 1-866-518-8448: confirm accepted POS codes for EIDBI.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Not stated by Blue Plus beyond the UB-modifier rule. DHS requires the rendering provider and the supervising QSP on EIDBI claims; ask whether Blue Plus enforces the same loops.',
        status: 'unverified',
        cites: [S.bcP55, S.mhcpEidbi],
        verifyVia: 'Blue Cross MHCP Provider Services, 1-866-518-8448, or Availity claim guidance for EIDBI.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: { value: EIDBI_AGE, status: 'verified', cites: [S.stat0949, S.elig] },
      dxRecency: {
        value: 'Blue Plus requires the ITP at the initial, 6-month and annual requests. The CMDE clock is DHS’s: updated at least every three years, and the annual CMDE is part of the reauthorization cycle.',
        status: 'verified',
        cites: [S.bcP69, S.cmde],
      },
      diagnosingProviders: { value: EIDBI_DIAGNOSERS, status: 'verified', cites: [S.stat0949, S.elig] },
      diagnosticTools: { value: EIDBI_TOOLS, status: 'verified', cites: [S.elig, S.cmde] },
      referral: {
        value: 'No. DHS’s October 2026 grid, for Blue Cross and Blue Shield of Minnesota: "No referral is required for the service. Services do require authorization."',
        status: 'verified',
        cites: [S.mcoGrid],
      },
      telehealth: {
        value: 'Blue Plus publishes no EIDBI telehealth rule of its own. ' + EIDBI_TELE,
        status: 'verified',
        cites: [S.stat0949, S.tele, S.mhcpTele],
      },
      authTurnaround: {
        value: 'Blue Plus publishes no EIDBI decision clock. State and federal law apply: since January 1, 2026 standard determinations are due within five business days of a complete request and expedited ones within 48 hours including a business day (§§ 62M.01, subd. 3(b), 62M.05), inside the federal 7-calendar-day ceiling for rating periods from January 1, 2026 (42 CFR 438.210(d)). Authorizations span up to 180 days.',
        status: 'verified',
        cites: [S.stat62M01, S.stat62M05, S.cfr438, S.bcP55],
      },
      coordinationOfBenefits: { value: EIDBI_COB, status: 'verified', cites: [S.mhcpEidbi, S.cfr433] },
    },
    faq: [
      { q: 'Does Blue Plus cover ABA for Medical Assistance members?', a: 'Yes, through the state EIDBI benefit for members under 21. Blue Plus follows DHS’s EIDBI guidelines and requires prior authorization of treatment.' },
      { q: 'How do I submit an EIDBI authorization to Blue Plus?', a: 'Attach the CMDE, ITP and Blue Cross EIDBI Request Form in Availity’s Interactive Care Reviewer, or fax them to 1-800-505-1193. Authorizations span up to 180 days.' },
      { q: 'Is Blue Plus the same as Blue Cross commercial?', a: 'No. Blue Plus is Blue Cross’s public-programs HMO; Blue Cross commercial members follow medical policy X-43 and their benefit plan.' },
    ],
  },

  'healthpartners-minnesota': {
    slug: 'healthpartners-minnesota',
    family: 'healthpartners',
    cardDesc: 'HealthPartners MHCP: EIDBI policy mirrors DHS criteria; PA by fax with the CMDE; claims need rendering and QSP loops.',
    assessmentPA: {
      value: 'No for 97151 per HealthPartners’ EIDBI policy, whose prior-authorization code list covers 0373T and 97153–97157 only; the FAQ asks for the CMDE as the document for authorization review',
      status: 'verified',
      cites: [S.hpPolicy, S.hpPage],
    },
    treatmentPA: {
      value: 'Yes: "Prior authorization is required" for 0373T, 97153, 97154, 97155, 97156 and 97157, reviewed by the Behavioral Health Utilization Management team; fax clinical information to 952-853-8830',
      status: 'verified',
      cites: [S.hpPolicy, S.hpPage],
    },
    dxRequired: {
      value: 'Yes: "Has autism spectrum disorder or a related condition," with a CMDE establishing medical need; a child under five "may not have an ASD or related condition diagnosis but may still meet medical necessity criteria"',
      status: 'verified',
      cites: [S.hpPolicy],
    },
    payer: 'HealthPartners — Minnesota Health Care Programs',
    state: 'MN', kind: 'medicaid-mco', parent: MN_MCO_PARENT,
    pill: 'Payer Guide · HealthPartners · Minnesota',
    h1: 'HealthPartners Medical Assistance ABA / EIDBI coverage: the intake guide.',
    metaTitle: 'HealthPartners Minnesota Medicaid ABA (EIDBI) Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How HealthPartners covers ABA for Minnesota Health Care Programs members under the EIDBI benefit: its EIDBI coverage policy, which codes need prior authorization, the claim loops it requires, and what intake should collect.',
    intro: [
      'HealthPartners publishes a dedicated EIDBI coverage policy for its Minnesota Health Care Programs members (revised October 6, 2026). It restates DHS’s eligibility, medical-necessity, reauthorization and termination criteria nearly word for word and lists the codes that need prior authorization. Its provider FAQ covers contracting, credentialing and billing.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as EIDBI for members under 21' },
      { label: 'Prior auth', value: '0373T, 97153–97157; fax 952-853-8830 (BH UM 952-883-7501)' },
      { label: 'Decision clock', value: 'FAQ says 14 days; Minnesota law since 1/1/2026 says 5 business days' },
      { label: 'Hours framework', value: 'DHS impact-score table: 10–40 hours to age 7, 10–20 hours from 7 to 21' },
      { label: 'Claims', value: 'Electronic only; rendering (2310B/2420A) and QSP supervising (2310D/2420D) loops required' },
      { label: 'Other insurance', value: 'Bill HealthPartners directly; it pays EIDBI without a primary EOB' },
    ],
    sections: [
      {
        h2: 'Coverage and prior authorization',
        body: [
          'HealthPartners’ policy covers EIDBI when the member has ASD or a related condition, has had a CMDE establishing medical need, is under 21, and meets DHS’s medical-necessity criteria (including "10 or more hours per week of EIDBI services (unless there is a clinical rationale for an exception)"). It reprints DHS’s treatment framework by age and impact score: 10 to 40 hours a week through age seven, 10 to 20 hours from seven to 21, with DHS’s exceptions for fewer than 10 or more than 20 hours. "Prior authorization is required" for 0373T, 97153, 97154, 97155, 97156 and 97157. Requests go by fax to 952-853-8830; the FAQ lists the CMDE as the required document and says "HealthPartners has 14 days to make a decision about a request." That figure predates Minnesota’s 2026 change: § 62M.05 now gives utilization reviewers five business days for a standard decision and applies to Medical Assistance managed care from January 1, 2026.',
          'Non-covered services track DHS’s list: services by a parent or legal guardian, by someone without the qualifications, without the required supervision, while the child sleeps, that replace IEP academic goals, or that are not delivered to a person present in person or by interactive video (with exceptions for care conferences, family training, and CMDE or ITP work).',
        ],
        cites: [S.hpPolicy, S.hpPage, S.stat62M05, S.stat62M01],
      },
      {
        h2: 'Billing HealthPartners for EIDBI',
        body: [
          'HealthPartners requires electronic claims and tells providers to bill "following the guidelines in DHS’s EIDBI billing grid." Its billing tips add that claims "must include both the rendering provider and Qualified Supervising Professional (QSP) on all claims for services where a QSP is required": rendering provider in loop 2310B, supervising provider in 2310D, and the line-level 2420A and 2420D loops when several staff bill on one claim. The UB modifier is required, units follow the midpoint rule, and date ranges must not include days with no service. For members with other coverage, "HealthPartners will process and pay their EIDBI Medicaid claims without you having to submit it to the primary insurer first"; if a claim denies for coordination of benefits, call claims customer service to have it reprocessed. Before credentialing, individual practitioners must be enrolled with DHS and the agency must hold or be offered a HealthPartners contract.',
        ],
        cites: [S.hpPage, S.hpTips],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm HealthPartners Minnesota Health Care Programs coverage with the guest eligibility tool.' },
      { title: 'CMDE', desc: 'HealthPartners lists the CMDE as the required document for authorization review.' },
      { title: 'Supervising QSP', desc: 'The QSP’s NPI goes on every claim line that needs supervision.' },
      { title: 'Other insurance', desc: 'Record it; HealthPartners pays EIDBI without a primary EOB.' },
    ],
    sources: [S.hpPolicy, S.hpPage, S.hpTips, S.mcoGrid, S.stat0949, S.sl95, S.grid, S.stat62M01, S.stat62M05, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'HealthPartners excludes services "Provided without the required supervision" and requires the QSP on supervised claims; the supervision floor is the statute’s. ' + EIDBI_SUPERVISION,
        status: 'verified',
        cites: [S.hpPolicy, S.hpTips, S.stat0949, S.sl95],
      },
      concurrentBilling: {
        value: 'HealthPartners tells providers to follow DHS’s billing grid and to identify each line’s rendering and supervising provider, but states no rule on billing 97153 and 97155 for the same time. DHS allows it when medically necessary.',
        status: 'unverified',
        cites: [S.hpTips, S.services],
        verifyVia: 'HealthPartners BH UM, 952-883-7501 or 866-669-3856: ask whether simultaneous 97153 and 97155 lines by different providers are paid.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'HealthPartners points to the grid’s limits: "Claims that do not adhere to these standards cannot be paid." Grid daily limits: 97153 and 0373T 8 hours, 97154 4.5 hours, 97155 6 hours, 97156/97157 4 hours; 97151 80 units a calendar year. Hours framework: up to 40 a week through age seven and up to 20 from seven, absent an exception.',
        status: 'verified',
        cites: [S.hpTips, S.grid, S.hpPolicy],
      },
      noteSignature: {
        value: 'HealthPartners excludes services "Not documented in the person’s health service record or ITP." ' + EIDBI_NOTES,
        status: 'verified',
        cites: [S.hpPolicy, S.sl95],
      },
      placeOfService: {
        value: 'HealthPartners publishes no setting list; it excludes services that replace IEP or IFSP academic goals and those not delivered to a person who is present in person or by interactive video. DHS settings (center, clinic, office, home or community) apply through the grid.',
        status: 'unverified',
        cites: [S.hpPolicy, S.services],
        verifyVia: 'HealthPartners provider services or BH UM, 952-883-7501: confirm accepted POS codes for EIDBI.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Both providers on the claim: rendering provider in loop 2310B (line 2420A when it differs) and the QSP as supervising provider in 2310D (line 2420D), "on all claims for services where a QSP is required."',
        status: 'verified',
        cites: [S.hpTips],
      },
    },
    intakeGates: {
      ageLimit: { value: '"Is under age 21," per HealthPartners’ EIDBI policy.', status: 'verified', cites: [S.hpPolicy] },
      dxRecency: {
        value: 'HealthPartners’ policy: to restart services "If the person’s CMDE is more than 36 months old (i.e., three years), the person must receive a new CMDE." Reauthorization requires continued medical necessity documented in the CMDE and ITP progress monitoring.',
        status: 'verified',
        cites: [S.hpPolicy],
      },
      diagnosingProviders: {
        value: 'HealthPartners’ policy does not name diagnosers; it adopts DHS criteria. ' + EIDBI_DIAGNOSERS,
        status: 'verified',
        cites: [S.hpPolicy, S.stat0949],
      },
      diagnosticTools: { value: 'HealthPartners names no instrument. ' + EIDBI_TOOLS, status: 'verified', cites: [S.hpPolicy, S.elig, S.cmde] },
      referral: {
        value: 'No referral is mentioned; HealthPartners requires prior authorization of treatment codes, and out-of-network providers need authorization for all services (DHS grid).',
        status: 'verified',
        cites: [S.hpPolicy, S.mcoGrid],
      },
      telehealth: {
        value: 'HealthPartners covers services delivered to a person present "either physically or via interactive video" and publishes no separate EIDBI telehealth rule. ' + EIDBI_TELE,
        status: 'verified',
        cites: [S.hpPolicy, S.stat0949, S.tele],
      },
      authTurnaround: {
        value: 'HealthPartners’ FAQ: "HealthPartners has 14 days to make a decision about a request." Minnesota law since January 1, 2026 requires standard determinations within five business days of a complete request and expedited ones within 48 hours (§§ 62M.01, subd. 3(b), 62M.05), and federal rules cap standard decisions at 7 calendar days for rating periods from January 1, 2026 (42 CFR 438.210(d)).',
        status: 'plan-dependent',
        cites: [S.hpPage, S.stat62M01, S.stat62M05, S.cfr438],
        verifyVia: 'HealthPartners BH UM, 952-883-7501: ask which clock it applies to EIDBI requests in 2026.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'For EIDBI, "HealthPartners will process and pay their EIDBI Medicaid claims without you having to submit it to the primary insurer first"; a COB denial is reprocessed through claims customer service. This follows DHS’s pay-and-chase rule for managed care members.',
        status: 'verified',
        cites: [S.hpTips, S.mhcpEidbi],
      },
    },
    faq: [
      { q: 'Does HealthPartners require prior authorization for EIDBI?', a: 'Yes for 0373T and 97153–97157. Fax the clinical information, including the CMDE, to 952-853-8830.' },
      { q: 'Whose NPI goes on a HealthPartners EIDBI claim?', a: 'Both: the rendering provider (loop 2310B/2420A) and the QSP as supervising provider (2310D/2420D) on every service that needs QSP supervision.' },
      { q: 'Do I need the primary insurance EOB first?', a: 'No. HealthPartners pays EIDBI claims without billing the primary insurer first, following DHS’s pay-and-chase policy.' },
    ],
  },

  'hennepin-health-minnesota': {
    slug: 'hennepin-health-minnesota',
    family: 'hennepin-health',
    cardDesc: 'Medical Assistance plan: EIDBI PA by fax, 1:16 supervision, and QSP notes due every three months since July 2026.',
    assessmentPA: {
      value: 'Not on Hennepin Health’s EIDBI prior-authorization list, which names 97153, 97154, 0373T, 97155, 97156, 97157 and H0046 but not 97151',
      status: 'verified',
      cites: [S.hhChart, S.mcoGrid],
    },
    treatmentPA: {
      value: 'Yes: 97153UB, 97154UB, 0373T, 97155UB, 97156UB, 97157UB and H0046UB need prior authorization; fax requests to 612-677-6222 using the current DHS-7109',
      status: 'verified',
      cites: [S.hhChart, S.hhPA, S.mcoGrid],
    },
    dxRequired: {
      value: 'Yes. Hennepin Health publishes no EIDBI diagnosis rule of its own beyond requiring DHS forms, so the statute applies: ASD or a related condition diagnosed by a physician, APRN, PA or mental health professional (§ 256B.0949, subd. 4)',
      status: 'verified',
      cites: [S.hhChart, S.stat0949],
    },
    payer: 'Hennepin Health',
    state: 'MN', kind: 'medicaid-mco', parent: MN_MCO_PARENT,
    pill: 'Payer Guide · Hennepin Health · Minnesota',
    h1: 'Hennepin Health ABA / EIDBI coverage: the intake guide.',
    metaTitle: 'Hennepin Health Minnesota Medicaid ABA (EIDBI) Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Hennepin Health covers ABA for Medical Assistance members under the EIDBI benefit: prior-authorization codes, the July 2026 QSP-notes requirement, 5-business-day decisions, 180-day claim filing, and what intake should collect.',
    intro: [
      'Hennepin Health is one of the eight Medical Assistance plans on DHS’s October 2026 EIDBI grid. Its July 2026 prior-authorization chart has a dedicated EIDBI row with two requirements that go beyond the state’s paperwork: the 1:16 supervision ratio restated as a plan rule, and a new obligation to send QSP notes every three months.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as EIDBI for members under 21' },
      { label: 'Prior auth', value: '97153, 97154, 0373T, 97155, 97156, 97157, H0046 (all UB); fax 612-677-6222' },
      { label: 'New in July 2026', value: 'QSP notes or supporting documentation every three months for all authorized services' },
      { label: 'Decision clock', value: '5 business days standard; 48 hours urgent; 30 days for services already ended' },
      { label: 'Claim filing', value: '180 days from service; electronic only' },
      { label: 'Referral', value: 'None required (DHS grid)' },
    ],
    sections: [
      {
        h2: 'Prior authorization and the QSP-notes rule',
        body: [
          'Hennepin Health’s "Prior Authorization Requirements for Medical and Behavioral Health Services: July 2026" lists EIDBI as requiring prior authorization for "Intervention – Individual: Adaptive Behavior (97153UB)," group intervention (97154UB), higher intensity (0373T), observation and direction (97155UB), individual and group family/caregiver training (97156UB, 97157UB) and travel time (H0046UB). It adds: "Providers must deliver one hour of clinical supervision by a Qualified Supervising Professional for every 16 hours of direct treatment unless an exception is authorized in ITP," and, marked as a new requirement effective July 1, 2026, "Providers must submit qualifying supervising professional (QSP) notes or supporting documentation to Hennepin Health every three months for all authorized services. Failure to comply may result in delays or disruptions in payment." Requests use the most current DHS-7109 and go by secure fax to 612-677-6222. Standard pre-service requests are completed "within 5 business days of receipt," urgent ones within 48 hours including one business day.',
          'Hennepin Health has also adopted a "Chronic Condition – No Prior Authorization Expiration" policy (effective January 1, 2026) that can issue an authorization with no end date when a provider asks and the criteria are met (a condition expected to last over a year, among others). The policy is written around medications, equipment and services generally and excludes out-of-network providers; it does not mention EIDBI, whose authorizations the state caps at 180 days, so ask before relying on it.',
        ],
        cites: [S.hhChart, S.hhPA, S.hhChronic, S.mcoGrid],
      },
      {
        h2: 'Claims and network',
        body: [
          'Hennepin Health takes electronic claims only and denies claims "not submitted within 180 days from the date of service" by a contracted provider; adjustment requests are due 180 days from the paid or denied date. Its general claims page says to "Bill the member’s primary insurance first," but DHS’s EIDBI manual says pay-and-chase "applies to both fee-for-service and managed care members," so ask Hennepin Health how it applies the general rule to EIDBI. Out-of-network providers may get continuity-of-care authorizations for up to 120 days from a member’s eligibility date. Contracting starts online at hennepinhealth.org; Provider Services is 612-596-1036 or 800-647-0550, option 2.',
        ],
        cites: [S.hhClaims, S.hhPA, S.mhcpEidbi, S.mcoGrid],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Hennepin Health eligibility before requesting authorization.' },
      { title: 'Current DHS-7109', desc: 'Hennepin Health requires the most recent version of the ITP form.' },
      { title: 'QSP notes calendar', desc: 'Plan to send QSP notes every three months for every authorized member.' },
      { title: 'Other insurance', desc: 'Record it and ask how Hennepin Health applies its primary-first rule to EIDBI.' },
    ],
    sources: [S.hhChart, S.hhPA, S.hhClaims, S.hhChronic, S.mcoGrid, S.stat0949, S.sl95, S.mhcpEidbi, S.stat62M01, S.stat62M05, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'Hennepin Health: "one hour of clinical supervision by a Qualified Supervising Professional for every 16 hours of direct treatment unless an exception is authorized in ITP," plus QSP notes every three months (from July 1, 2026). The statute adds monthly QSP observation and direction, no more than two consecutive months by telehealth (§ 256B.0949, subd. 16(a)(15)–(16)).',
        status: 'verified',
        cites: [S.hhChart, S.stat0949, S.sl95],
      },
      concurrentBilling: {
        value: 'Not addressed by Hennepin Health.',
        status: 'unverified',
        cites: [S.hhChart],
        verifyVia: 'Hennepin Health Provider Services, 800-647-0550 option 2: ask whether 97153 and 97155 by different staff may be billed for the same time, as DHS allows.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Hennepin Health publishes no EIDBI unit limits of its own.',
        status: 'unverified',
        cites: [S.hhChart],
        verifyVia: 'Hennepin Health Provider Services, 800-647-0550 option 2: ask whether DHS’s EIDBI billing-grid daily limits apply.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Hennepin Health requires QSP notes or supporting documentation every three months. ' + EIDBI_NOTES,
        status: 'verified',
        cites: [S.hhChart, S.sl95],
      },
      placeOfService: {
        value: 'Hennepin Health publishes no EIDBI setting rule.',
        status: 'unverified',
        cites: [S.hhChart],
        verifyVia: 'Hennepin Health Provider Services: confirm accepted POS codes (DHS uses POS 11 and 12, POS 02/10 for telehealth).',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Hennepin Health’s claims page requires the ordering or referring provider’s NPI or UMPI "if applicable" but states no EIDBI rendering/supervising rule.',
        status: 'unverified',
        cites: [S.hhClaims],
        verifyVia: 'Hennepin Health Provider Services: ask whether the rendering provider and supervising QSP must both appear on EIDBI claims, as DHS requires.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: { value: EIDBI_AGE, status: 'verified', cites: [S.stat0949, S.elig] },
      dxRecency: { value: 'Hennepin Health publishes no rule of its own. ' + EIDBI_RECENCY, status: 'verified', cites: [S.cmde, S.mednec] },
      diagnosingProviders: { value: EIDBI_DIAGNOSERS, status: 'verified', cites: [S.stat0949, S.elig] },
      diagnosticTools: { value: EIDBI_TOOLS, status: 'verified', cites: [S.elig, S.cmde] },
      referral: { value: 'No. DHS’s October 2026 grid, for Hennepin Health: "No referral requirements."', status: 'verified', cites: [S.mcoGrid] },
      telehealth: { value: 'Hennepin Health publishes no EIDBI telehealth rule of its own. ' + EIDBI_TELE, status: 'verified', cites: [S.stat0949, S.tele, S.mhcpTele] },
      authTurnaround: {
        value: '"Standard service requests submitted on a pre-service or concurrent basis are reviewed and completed within 5 business days of receipt"; requests for services that have ended take 30 calendar days; urgent requests "within 48 hours including one business day."',
        status: 'verified',
        cites: [S.hhPA],
      },
      coordinationOfBenefits: {
        value: 'Conflicting sources. Hennepin Health’s claims page says to "Bill the member’s primary insurance first"; DHS’s EIDBI manual says providers need not bill commercial insurance first and that pay-and-chase "applies to both fee-for-service and managed care members."',
        status: 'plan-dependent',
        cites: [S.hhClaims, S.mhcpEidbi],
        verifyVia: 'Hennepin Health Provider Services, 800-647-0550 option 2: ask whether EIDBI claims need a primary EOB.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Hennepin Health require prior authorization for ABA (EIDBI)?', a: 'Yes for 97153, 97154, 0373T, 97155, 97156, 97157 and H0046 (UB modifier). Fax the request with the current DHS-7109 to 612-677-6222.' },
      { q: 'What changed at Hennepin Health in July 2026?', a: 'Providers must send QSP notes or supporting documentation every three months for all authorized EIDBI services; missing them can delay payment.' },
      { q: 'How long does Hennepin Health take to decide?', a: 'Five business days for standard pre-service requests, 48 hours for urgent ones.' },
    ],
  },

  'imcare-minnesota': {
    slug: 'imcare-minnesota',
    family: 'imcare',
    cardDesc: 'Itasca County’s local county health plan: EIDBI authorized by fax or secure email; most plan-specific EIDBI rules are unpublished.',
    assessmentPA: {
      value: 'Not stated. DHS’s grid says only that "Select services require authorization" at IMCare (and all services for noncontracted providers); IMCare publishes no EIDBI code list',
      status: 'unverified',
      cites: [S.mcoGrid, S.imcProv],
      verifyVia: 'IMCare Member/Provider Services, 218-327-6188 or 800-843-9536: ask whether 97151 UB (CMDE) needs authorization.',
      blocker: 'document',
    },
    treatmentPA: {
      value: '"Select services require authorization" for contracted providers and "All services require prior authorization for noncontracted providers" (DHS grid); IMCare publishes no EIDBI code list',
      status: 'unverified',
      cites: [S.mcoGrid],
      verifyVia: 'IMCare, 218-327-6188 or 800-843-9536 (fax 218-327-5545, IMCareAuths@co.itasca.mn.us): ask which EIDBI codes need authorization.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes: the statutory EIDBI rule binds every Medical Assistance plan: ASD or a related condition diagnosed by a physician, APRN, PA or mental health professional (§ 256B.0949, subd. 4). IMCare publishes nothing different',
      status: 'verified',
      cites: [S.stat0949, S.imcProv],
    },
    payer: 'IMCare (Itasca Medical Care)',
    state: 'MN', kind: 'medicaid-mco', parent: MN_MCO_PARENT,
    pill: 'Payer Guide · IMCare · Minnesota',
    h1: 'IMCare (Itasca Medical Care) ABA / EIDBI coverage: the intake guide.',
    metaTitle: 'IMCare (Itasca Medical Care) Medicaid ABA (EIDBI) Coverage Guide | Carelu',
    metaDescription:
      'How IMCare, Itasca County’s Medical Assistance plan, handles ABA under the EIDBI benefit: authorization contacts, what the state rules guarantee, appeal deadlines, and the plan-specific facts to confirm by phone.',
    intro: [
      'IMCare (Itasca Medical Care) describes itself as "your local County health plan" for Itasca County residents on Minnesota Health Care Programs. It is one of the eight plans on DHS’s October 2026 EIDBI MCO grid. IMCare publishes forms and a utilization-management criteria summary but no EIDBI-specific policy, so most plan-level details on this page are things to confirm by phone; the statutory EIDBI rules apply regardless.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as EIDBI for members under 21' },
      { label: 'Prior auth', value: 'Select services (contracted); all services (noncontracted)' },
      { label: 'Submit via', value: 'Fax 218-327-5545 or secure email IMCareAuths@co.itasca.mn.us' },
      { label: 'Referral', value: 'None required (DHS grid)' },
      { label: 'Claims', value: 'Electronic only; free MN E-connect or Office Ally submission' },
      { label: 'Appeals', value: '60 days to appeal; state fair hearing within 120 days of IMCare’s decision' },
    ],
    sections: [
      {
        h2: 'What IMCare publishes',
        body: [
          'DHS’s October 2026 EIDBI MCO grid is the most specific public source for IMCare: member services 218-327-6188 or 800-843-9536; authorizations by fax to 218-327-5545 or secure email to IMCareAuths@co.itasca.mn.us; "No referral requirements"; "Select services require authorization" for contracted providers and "All services require prior authorization for noncontracted providers"; and claims "must be submitted electronically," with two free direct-entry options (MN E-connect from Infotech Global, and Office Ally). The grid also lists an IMCare "EIDBI billing and policy FAQ," which we could not locate on IMCare’s site. IMCare’s utilization-management summary says it relies on DHS criteria, InterQual and its own policies, and allows 90-day transitions for most services when a member arrives from other coverage.',
        ],
        cites: [S.mcoGrid, S.imcUM, S.imcProv, S.imcHome],
      },
      {
        h2: 'Appeals',
        body: [
          'IMCare’s provider appeal sheet: "Enrollees and/or providers must Appeal within 60 days after the date we send a Notice of Action"; IMCare acknowledges within 10 days and decides within 30 days, with up to 14 more if it needs information; the enrollee "may request a State Fair Hearing within 120 days from an IMCare appeal decision."',
        ],
        cites: [S.imcAppeal],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm IMCare enrollment (Itasca County service area) on the date of service.' },
      { title: 'CMDE and ITP', desc: 'Have both ready; ask IMCare which codes it authorizes.' },
      { title: 'Network status', desc: 'Noncontracted providers need authorization for every service.' },
    ],
    sources: [S.mcoGrid, S.imcHome, S.imcProv, S.imcUM, S.imcAppeal, S.stat0949, S.sl95, S.mhcpEidbi, S.stat62M01, S.stat62M05, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: { value: 'IMCare publishes no EIDBI supervision rule of its own. ' + EIDBI_SUPERVISION, status: 'verified', cites: [S.stat0949, S.sl95, S.clinsup] },
      concurrentBilling: {
        value: 'Not published by IMCare.',
        status: 'unverified',
        cites: [S.mcoGrid],
        verifyVia: 'IMCare, 218-327-6188: ask whether it follows DHS’s simultaneous-services rule for 97153 with 97155.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Not published by IMCare.',
        status: 'unverified',
        cites: [S.mcoGrid],
        verifyVia: 'IMCare, 218-327-6188: ask whether DHS’s EIDBI billing-grid limits apply (the EIDBI billing and policy FAQ listed on DHS’s grid may answer this).',
        blocker: 'document',
      },
      noteSignature: { value: 'IMCare publishes no EIDBI note rule of its own. ' + EIDBI_NOTES, status: 'verified', cites: [S.sl95, S.services] },
      placeOfService: {
        value: 'Not published by IMCare.',
        status: 'unverified',
        cites: [S.mcoGrid],
        verifyVia: 'IMCare, 218-327-6188: confirm POS codes for EIDBI (DHS uses 11, 12, and 02/10 for telehealth).',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'Not published by IMCare.',
        status: 'unverified',
        cites: [S.mcoGrid],
        verifyVia: 'IMCare, 218-327-6188: ask whether the rendering provider and supervising QSP must both be on the claim, as DHS requires.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: { value: EIDBI_AGE, status: 'verified', cites: [S.stat0949, S.elig] },
      dxRecency: { value: 'IMCare publishes no rule of its own. ' + EIDBI_RECENCY, status: 'verified', cites: [S.cmde, S.mednec] },
      diagnosingProviders: { value: EIDBI_DIAGNOSERS, status: 'verified', cites: [S.stat0949, S.elig] },
      diagnosticTools: { value: EIDBI_TOOLS, status: 'verified', cites: [S.elig, S.cmde] },
      referral: { value: 'No. DHS’s October 2026 grid, for IMCare: "No referral requirements."', status: 'verified', cites: [S.mcoGrid] },
      telehealth: { value: 'IMCare publishes no EIDBI telehealth rule of its own. ' + EIDBI_TELE, status: 'verified', cites: [S.stat0949, S.tele, S.mhcpTele] },
      authTurnaround: {
        value: 'IMCare publishes no EIDBI decision clock. State and federal law apply: since January 1, 2026 standard determinations are due within five business days of a complete request and expedited ones within 48 hours including a business day (§§ 62M.01, subd. 3(b), 62M.05), inside the federal 7-calendar-day ceiling (42 CFR 438.210(d)).',
        status: 'verified',
        cites: [S.stat62M01, S.stat62M05, S.cfr438],
      },
      coordinationOfBenefits: { value: EIDBI_COB, status: 'verified', cites: [S.mhcpEidbi, S.cfr433] },
    },
    faq: [
      { q: 'Does IMCare cover ABA?', a: 'Yes, through the EIDBI benefit for Medical Assistance members under 21 in its service area.' },
      { q: 'How do I send an EIDBI authorization to IMCare?', a: 'Fax 218-327-5545 or secure email IMCareAuths@co.itasca.mn.us. Noncontracted providers need authorization for every service.' },
    ],
  },

  'medica-minnesota': {
    slug: 'medica-minnesota',
    family: 'medica',
    cardDesc: 'Medica’s Medical Assistance plans: behavioral health and EIDBI run through Optum; fax the CMDE and ITP to 855-454-8155.',
    assessmentPA: {
      value: 'Not stated. DHS’s grid says "Select services require authorization" at Medica and asks for the ITP and CMDE by fax; Medica publishes no EIDBI code list',
      status: 'unverified',
      cites: [S.mcoGrid, S.opMN],
      verifyVia: 'Medica Behavioral Health (Optum) Provider Services, 800-848-8327: ask whether 97151 UB needs authorization.',
      blocker: 'document',
    },
    treatmentPA: {
      value: '"Select services require authorization. Fax ITP and CMDE requests to: 855-454-8155" (contracted); for noncontracted providers "All services require prior authorization" (DHS grid)',
      status: 'verified',
      cites: [S.mcoGrid],
    },
    dxRequired: {
      value: 'Yes: the statutory rule applies (ASD or a related condition diagnosed by a physician, APRN, PA or mental health professional, § 256B.0949, subd. 4); Medica’s Optum resources point only to the DHS CMDE and ITP forms',
      status: 'verified',
      cites: [S.stat0949, S.opMN],
    },
    payer: 'Medica — Minnesota Health Care Programs',
    state: 'MN', kind: 'medicaid-mco', parent: MN_MCO_PARENT,
    pill: 'Payer Guide · Medica · Minnesota',
    h1: 'Medica Medical Assistance ABA / EIDBI coverage: the intake guide.',
    metaTitle: 'Medica Minnesota Medicaid ABA (EIDBI) Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Medica’s Minnesota Health Care Programs plans handle ABA under the EIDBI benefit: Optum-administered behavioral health, the fax for CMDE and ITP requests, claims through Provider Express, and what intake should confirm.',
    intro: [
      'Medica’s Minnesota Health Care Programs products administer behavioral health, including EIDBI, through Optum: DHS’s grid sends Medica network questions to Optum Provider Services and providerexpress.com, and Optum’s Minnesota page carries the DHS CMDE and ITP forms under "Medicaid Early Intensive Developmental and Behavioral Intervention (EIDBI)." Since October 1, 2026 Medica also runs the former UCare Medical Assistance plans as Medica One Health Plan, which has its own guide.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as EIDBI for members under 21' },
      { label: 'Administered by', value: 'Optum (Medica Behavioral Health); providerexpress.com' },
      { label: 'Prior auth', value: 'Select services; fax ITP and CMDE to 855-454-8155' },
      { label: 'Provider Services', value: '800-848-8327 (also after hours for BH)' },
      { label: 'EDI payer ID', value: '87726 (Medica Behavioral Health)' },
      { label: 'Referral', value: 'None required (DHS grid)' },
    ],
    sections: [
      {
        h2: 'Authorization, network and claims',
        body: [
          'Per DHS’s October 2026 grid, Medica requires no referral ("No referral required. Some services require authorization"), takes EIDBI authorization requests by fax to Medica Behavioral Health at 855-454-8155 ("Fax ITP and CMDE requests"), requires authorization of all services for noncontracted providers, and handles network participation through Optum Provider Services (877-614-0484, providerexpress.com). Optum’s quick reference guide for Medica Behavioral Health lists Provider Services at 800-848-8327 for benefits, claims, billing and prior authorization, and EDI payer ID 87726. Medica publishes no EIDBI medical policy of its own that we could find; Optum’s commercial ABA criteria do not govern Medical Assistance, where the EIDBI statute and DHS manual set the benefit.',
        ],
        cites: [S.mcoGrid, S.opMedQRG, S.opMN],
      },
      {
        h2: 'What the state rules add',
        body: [
          'Every Medical Assistance plan must deliver EIDBI as § 256B.0949 defines it: under 21, CMDE first, an ITP supervised by a QSP, at least one hour of clinical supervision per 16 hours of direct treatment, monthly QSP observation and direction, and documentation entered within 72 hours. DHS’s manual requires MCOs to credential Level I, II, III and QSP providers from DHS enrollment data within 45 days of a clean application. Since January 1, 2026 the Minnesota Utilization Review Act’s five-business-day standard applies to Medical Assistance managed care.',
        ],
        cites: [S.stat0949, S.sl95, S.mhcpEidbi, S.stat62M01, S.stat62M05],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Medica Minnesota Health Care Programs (or Medica One Health Plan) on the date of service.' },
      { title: 'CMDE and ITP', desc: 'Fax both to Medica Behavioral Health, 855-454-8155.' },
      { title: 'Optum enrollment', desc: 'Network participation is through Optum Provider Services, 877-614-0484.' },
    ],
    sources: [S.mcoGrid, S.opMN, S.opMedQRG, S.stat0949, S.sl95, S.mhcpEidbi, S.stat62M01, S.stat62M05, S.cfr438, S.cfr433, S.ucareFaq],
    deliveryRules: {
      supervision: { value: 'Medica publishes no EIDBI supervision rule of its own. ' + EIDBI_SUPERVISION, status: 'verified', cites: [S.stat0949, S.sl95, S.clinsup] },
      concurrentBilling: {
        value: 'Not published by Medica or Optum for EIDBI.',
        status: 'unverified',
        cites: [S.opMN],
        verifyVia: 'Medica Behavioral Health Provider Services, 800-848-8327: ask whether 97153 and 97155 by different staff may be billed for the same time.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Not published by Medica or Optum for EIDBI.',
        status: 'unverified',
        cites: [S.opMN],
        verifyVia: 'Medica Behavioral Health Provider Services, 800-848-8327: ask whether DHS’s billing-grid limits apply.',
        blocker: 'per-case',
      },
      noteSignature: { value: 'Medica publishes no EIDBI note rule of its own. ' + EIDBI_NOTES, status: 'verified', cites: [S.sl95, S.services] },
      placeOfService: {
        value: 'Not published by Medica or Optum for EIDBI.',
        status: 'unverified',
        cites: [S.opMN],
        verifyVia: 'Medica Behavioral Health Provider Services, 800-848-8327: confirm EIDBI POS codes.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Not published by Medica or Optum for EIDBI.',
        status: 'unverified',
        cites: [S.opMN],
        verifyVia: 'Medica Behavioral Health Provider Services, 800-848-8327: ask whether the rendering provider and supervising QSP must both be on the claim.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: { value: EIDBI_AGE, status: 'verified', cites: [S.stat0949, S.elig] },
      dxRecency: { value: 'Medica publishes no rule of its own. ' + EIDBI_RECENCY, status: 'verified', cites: [S.cmde, S.mednec] },
      diagnosingProviders: { value: EIDBI_DIAGNOSERS, status: 'verified', cites: [S.stat0949, S.elig] },
      diagnosticTools: { value: EIDBI_TOOLS, status: 'verified', cites: [S.elig, S.cmde] },
      referral: { value: 'No. DHS’s October 2026 grid, for Medica: "No referral required. Some services require authorization."', status: 'verified', cites: [S.mcoGrid] },
      telehealth: { value: 'Medica publishes no EIDBI telehealth rule of its own. ' + EIDBI_TELE, status: 'verified', cites: [S.stat0949, S.tele, S.mhcpTele] },
      authTurnaround: {
        value: 'Medica publishes no EIDBI decision clock. State and federal law apply: since January 1, 2026 standard determinations are due within five business days of a complete request and expedited ones within 48 hours (§§ 62M.01, subd. 3(b), 62M.05), inside the federal 7-calendar-day ceiling (42 CFR 438.210(d)).',
        status: 'verified',
        cites: [S.stat62M01, S.stat62M05, S.cfr438],
      },
      coordinationOfBenefits: { value: EIDBI_COB, status: 'verified', cites: [S.mhcpEidbi, S.cfr433] },
    },
    faq: [
      { q: 'Who handles EIDBI for Medica Medical Assistance members?', a: 'Optum, as Medica Behavioral Health. Fax the CMDE and ITP to 855-454-8155; Provider Services is 800-848-8327.' },
      { q: 'Is Medica One Health Plan the same as Medica?', a: 'Both are Medica. Medica One Health Plan is the former UCare Medical Assistance business, which moved to Medica on October 1, 2026; DHS’s grid lists it separately with the same Optum contacts.' },
    ],
  },

  'medica-one-health-plan-minnesota': {
    slug: 'medica-one-health-plan-minnesota',
    family: 'medica',
    cardDesc: 'The former UCare Medical Assistance plans, under Medica since Oct. 1, 2026; EIDBI through Optum with the same fax as Medica.',
    assessmentPA: {
      value: 'Not stated. DHS’s grid says "Select services require authorization" and asks for the ITP and CMDE by fax; no plan EIDBI code list is published',
      status: 'unverified',
      cites: [S.mcoGrid],
      verifyVia: 'Medica One Health Plan Member or Provider Services, 800-850-6141: ask whether 97151 UB needs authorization.',
      blocker: 'document',
    },
    treatmentPA: {
      value: '"Select services require authorization. Fax ITP and CMDE requests to: 855-454-8155"; noncontracted providers need prior authorization for all services (DHS grid)',
      status: 'verified',
      cites: [S.mcoGrid],
    },
    dxRequired: {
      value: 'Yes: the statutory rule binds every Medical Assistance plan (ASD or a related condition diagnosed by a physician, APRN, PA or mental health professional, § 256B.0949, subd. 4)',
      status: 'verified',
      cites: [S.stat0949, S.mcoGrid],
    },
    payer: 'Medica One Health Plan (formerly UCare Medical Assistance)',
    state: 'MN', kind: 'medicaid-mco', parent: MN_MCO_PARENT,
    pill: 'Payer Guide · Medica One Health Plan · Minnesota',
    h1: 'Medica One Health Plan (formerly UCare) ABA / EIDBI coverage: the intake guide.',
    metaTitle: 'Medica One Health Plan (ex-UCare) Minnesota ABA (EIDBI) Guide | Carelu',
    metaDescription:
      'How Medica One Health Plan, the former UCare Medical Assistance plans now run by Medica, handles ABA under the EIDBI benefit: the October 2026 transition, Optum contacts, authorization by fax, and what intake should confirm.',
    intro: [
      'UCare was placed into court-supervised rehabilitation in December 2025, and Medica acquired its Medical Assistance contracts. DHS said UCare’s PMAP, MinnesotaCare, MSC+ and SNBC products would continue under the UCare name from January 1, 2026; UCare’s closure FAQ now says "UCare Medical Assistance (Medicaid) plans are now known as Medica One Health Plan. These plans transitioned to Medica on Oct. 1, 2026." DHS’s October 2026 EIDBI grid lists Medica One Health Plan as its own column, administered through Optum like Medica.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as EIDBI for members under 21' },
      { label: 'Plan history', value: 'UCare Medical Assistance until Sept. 30, 2026; Medica One Health Plan from Oct. 1, 2026' },
      { label: 'Prior auth', value: 'Select services; fax ITP and CMDE to 855-454-8155' },
      { label: 'Contact', value: 'Member or Provider Services 800-850-6141' },
      { label: 'Network', value: 'Optum Provider Services 877-614-0484; providerexpress.com' },
      { label: 'Referral', value: 'None required (DHS grid)' },
    ],
    sections: [
      {
        h2: 'The UCare transition and what it means for authorizations',
        body: [
          'DHS’s December 18, 2025 bulletin said Medica was acquiring certain UCare contracts, that UCare’s PMAP, MinnesotaCare, MSC+ and SNBC products "are not impacted" and would continue under the UCare name from January 1, 2026, and that "Medica commits to providing advance notice of any future changes." UCare’s FAQ records the next step: the Medical Assistance plans became Medica One Health Plan on October 1, 2026, and UCare remains in court-supervised rehabilitation, whose plan changed some claim-filing and appeal deadlines for older UCare claims ("2026 claims are not impacted"). DHS’s rules on changing MCOs also say a new plan "Must provide members medically necessary covered services that another MCO or MHCP FFS had authorized before enrollment," which protects existing EIDBI authorizations through a plan change.',
          'For EIDBI the October 2026 DHS grid gives Medica One Health Plan the same behavioral-health fax as Medica (855-454-8155, "Fax ITP and CMDE requests"), "No referral requirements," authorization of all services for noncontracted providers, Member or Provider Services at 800-850-6141, and network contracting through Optum Provider Services (877-614-0484). No EIDBI policy specific to Medica One Health Plan is published.',
        ],
        cites: [S.ucareBull, S.ucareFaq, S.mcoSec, S.mcoGrid],
      },
    ],
    collect: [
      { title: 'Member ID card', desc: 'Former UCare members carry Medica One Health Plan cards from Oct. 1, 2026; confirm the plan in MN–ITS.' },
      { title: 'Existing authorization', desc: 'Capture any UCare EIDBI authorization; a new plan must honor prior authorizations.' },
      { title: 'CMDE and ITP', desc: 'Fax both to 855-454-8155.' },
    ],
    sources: [S.ucareBull, S.ucareFaq, S.mcoGrid, S.mcoSec, S.stat0949, S.sl95, S.mhcpEidbi, S.stat62M01, S.stat62M05, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: { value: 'No plan-specific EIDBI supervision rule is published. ' + EIDBI_SUPERVISION, status: 'verified', cites: [S.stat0949, S.sl95, S.clinsup] },
      concurrentBilling: {
        value: 'Not published by Medica One Health Plan.',
        status: 'unverified',
        cites: [S.mcoGrid],
        verifyVia: 'Medica One Health Plan Provider Services, 800-850-6141.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Not published by Medica One Health Plan.',
        status: 'unverified',
        cites: [S.mcoGrid],
        verifyVia: 'Medica One Health Plan Provider Services, 800-850-6141: ask whether DHS’s billing-grid limits apply.',
        blocker: 'document',
      },
      noteSignature: { value: 'No plan-specific note rule is published. ' + EIDBI_NOTES, status: 'verified', cites: [S.sl95, S.services] },
      placeOfService: {
        value: 'Not published by Medica One Health Plan.',
        status: 'unverified',
        cites: [S.mcoGrid],
        verifyVia: 'Medica One Health Plan Provider Services, 800-850-6141: confirm EIDBI POS codes.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'Not published by Medica One Health Plan.',
        status: 'unverified',
        cites: [S.mcoGrid],
        verifyVia: 'Medica One Health Plan Provider Services, 800-850-6141: ask whether rendering provider and supervising QSP must both be on the claim.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: { value: EIDBI_AGE, status: 'verified', cites: [S.stat0949, S.elig] },
      dxRecency: { value: 'No plan-specific rule is published. ' + EIDBI_RECENCY, status: 'verified', cites: [S.cmde, S.mednec] },
      diagnosingProviders: { value: EIDBI_DIAGNOSERS, status: 'verified', cites: [S.stat0949, S.elig] },
      diagnosticTools: { value: EIDBI_TOOLS, status: 'verified', cites: [S.elig, S.cmde] },
      referral: { value: 'No. DHS’s October 2026 grid, for Medica One Health Plan: "No referral requirements."', status: 'verified', cites: [S.mcoGrid] },
      telehealth: { value: 'No plan-specific EIDBI telehealth rule is published. ' + EIDBI_TELE, status: 'verified', cites: [S.stat0949, S.tele, S.mhcpTele] },
      authTurnaround: {
        value: 'No plan-specific clock is published. State and federal law apply: since January 1, 2026 standard determinations are due within five business days of a complete request and expedited ones within 48 hours (§§ 62M.01, subd. 3(b), 62M.05), inside the federal 7-calendar-day ceiling (42 CFR 438.210(d)).',
        status: 'verified',
        cites: [S.stat62M01, S.stat62M05, S.cfr438],
      },
      coordinationOfBenefits: { value: EIDBI_COB, status: 'verified', cites: [S.mhcpEidbi, S.cfr433] },
    },
    faq: [
      { q: 'What happened to UCare Medical Assistance?', a: 'UCare’s Medical Assistance plans moved to Medica and became Medica One Health Plan on October 1, 2026. UCare itself is in court-supervised rehabilitation.' },
      { q: 'Does an existing UCare EIDBI authorization carry over?', a: 'DHS requires a plan to provide medically necessary services that a previous MCO or fee-for-service had authorized before enrollment. Send the new plan the current authorization, CMDE and ITP and confirm.' },
    ],
  },

  'primewest-health-minnesota': {
    slug: 'primewest-health-minnesota',
    family: 'primewest',
    cardDesc: 'Medical Assistance plan with a full EIDBI manual chapter: portal authorization, no retro auths, O&D near 20%, POS 02 telehealth.',
    assessmentPA: {
      value: 'No: "The annual CMDE" is on PrimeWest’s list of services that "do not require authorization prior to service delivery" (also ITP development, care conferences and travel time)',
      status: 'verified',
      cites: [S.pwEidbi],
    },
    treatmentPA: {
      value: 'Yes: individual, group and higher-intensity intervention, family/caregiver training and observation and direction require authorization, submitted with the CMDE and ITP through the PrimeWest provider web portal; maximum span 180 days; no retroactive EIDBI authorizations except an additional CMDE',
      status: 'verified',
      cites: [S.pwEidbi],
    },
    dxRequired: {
      value: 'Yes: "Have a diagnosis of ASD or a related condition," be under 21 and medically stable, then a CMDE stating medical necessity',
      status: 'verified',
      cites: [S.pwEidbi],
    },
    payer: 'PrimeWest Health',
    state: 'MN', kind: 'medicaid-mco', parent: MN_MCO_PARENT,
    pill: 'Payer Guide · PrimeWest Health · Minnesota',
    h1: 'PrimeWest Health ABA / EIDBI coverage: the intake guide.',
    metaTitle: 'PrimeWest Health Minnesota Medicaid ABA (EIDBI) Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How PrimeWest Health covers ABA under the EIDBI benefit: which services need authorization, its 20% observation-and-direction rule, no retroactive authorizations, claim and telehealth rules, 180-day filing, and what intake should collect.',
    intro: [
      'PrimeWest Health is one of the eight Medical Assistance plans on DHS’s October 2026 EIDBI grid. Its provider manual has a complete EIDBI chapter (updated September 4, 2026) that tracks DHS policy closely but departs from it in a few places that matter for billing: no retroactive authorizations, travel time without authorization, a 9-hour daily cap on intervention, and an exclusion for simultaneous services by multiple providers.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as EIDBI for members under 21' },
      { label: 'Prior auth', value: 'Intervention, family training, observation and direction; not CMDE, ITP, care conferences or travel' },
      { label: 'Submit via', value: 'PrimeWest provider web portal (fax 866-431-0804 or pwserviceauth@primewest.org as backup)' },
      { label: 'Observation & direction', value: 'Individual justification since Jan. 1, 2026; ~20% of direct treatment' },
      { label: 'Decision clock', value: 'CMDE and ITP reviewed within 5 business days' },
      { label: 'Claim filing', value: '180 days from date of service' },
    ],
    sections: [
      {
        h2: 'Authorization at PrimeWest',
        body: [
          'PrimeWest requires authorization before "EIDBI intervention – individual, group, and higher intensity," family and caregiver training, and intervention observation and direction, with a maximum span of 180 days. The annual CMDE, ITP development and monitoring, coordinated care conferences and travel time need none. Providers submit the CMDE summary and signature page and the ITP summary and signature page through the provider web portal; they need not arrive together, but both must be in before the authorization is completed, and the ITP may not be signed before the CMDE. PrimeWest checks the CMDE for completeness "within five business days," and within five business days of the ITP completes its integrated review, determines medical necessity and generates a notice. It "will not accept retroactive authorization requests for EIDBI services, with the exception of an additional CMDE within the calendar year." The updated DHS-7109 has been required for new ITPs since March 1, 2026 and for all ITPs since September 1, 2026.',
          'Since January 1, 2026 PrimeWest requires observation and direction requests to "include individual clinical justification," to be "in proportion to direct treatment," and aligned with national guidance of "20 percent of the person’s direct treatment hours"; above that, "PrimeWest Health may request unit reductions or additional documentation."',
        ],
        cites: [S.pwEidbi, S.mcoGrid],
      },
      {
        h2: 'Billing PrimeWest for EIDBI',
        body: [
          'PrimeWest’s claim rules: the professional claim; only services already provided and approved on the authorization; never mix authorized and unauthorized services on one claim; "Do not exceed 9 hours a day for any individual or group intervention units"; include the pay-to provider, the rendering provider’s UMPI or NPI and "The supervising provider for any services that require the supervision of a QSP"; Level III claims always need the rendering provider’s UMPI; POS 12 for community, POS 11 for office and non-direct work. Its non-covered list includes "Two or more services provided by the same person at the same time" and "Simultaneous services by multiple providers at the same time," a stricter line than DHS’s. Telehealth bills "with place of service 02," modifier 93 for audio-only. "EIDBI providers are not required to bill a member’s commercial insurance before billing Medical Assistance." Claims are due "no later than 180 days from the date of service."',
        ],
        cites: [S.pwEidbi, S.pwBill],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm PrimeWest Health enrollment on the date of service; no retro authorizations.' },
      { title: 'CMDE and ITP (current DHS-7109)', desc: 'Summary and signature pages for both, uploaded in the portal.' },
      { title: 'O&D justification', desc: 'Individual clinical rationale for 97155, around 20% of direct hours.' },
      { title: 'Medical stability', desc: 'PrimeWest requires the child not need 24-hour medical monitoring.' },
    ],
    sources: [S.pwEidbi, S.pwBill, S.mcoGrid, S.stat0949, S.sl95, S.grid, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'PrimeWest: "EIDBI treatment services must be delivered under the clinical supervision of a QSP," providers must "meet supervision requirements in MN Stat. sec. 256B.0949, subds., 15 – 16," and services "provided in the absence of required supervision" are not paid. Statute: at least one hour of clinical supervision per 16 hours of direct treatment and monthly QSP observation and direction.',
        status: 'verified',
        cites: [S.pwEidbi, S.stat0949],
      },
      concurrentBilling: {
        value: 'Stricter than DHS. PrimeWest does not reimburse "Two or more services provided by the same person at the same time," "Simultaneous services by multiple providers at the same time," or "Observation and direction of two or more staff members at the same time." DHS’s policy manual allows two providers to deliver, for example, 97153 and 97155 at once; at PrimeWest, confirm before billing overlapping lines.',
        status: 'verified',
        cites: [S.pwEidbi, S.services],
      },
      dailyLimits: {
        value: '"Do not exceed 9 hours a day for any individual or group intervention units." Otherwise PrimeWest refers to DHS’s billing grid for service limits, and caps observation and direction at about 20% of direct treatment hours without extra justification.',
        status: 'verified',
        cites: [S.pwEidbi, S.grid],
      },
      noteSignature: {
        value: 'PrimeWest does not pay for services "not documented in the member’s health service record or in the manner required by this manual or by Minnesota Rules, part 9505.2175." ' + EIDBI_NOTES,
        status: 'verified',
        cites: [S.pwEidbi, S.sl95],
      },
      placeOfService: {
        value: 'POS 12 for "EIDBI services provided in a community setting, as outlined in the person’s Individual Treatment Plan," POS 11 for office-based and non-direct services (including a home office), POS 02 for telehealth. No direct intervention during homeschool or online-school instruction since January 1, 2026; family training may continue with the parent present.',
        status: 'verified',
        cites: [S.pwEidbi],
      },
      billAsProvider: {
        value: 'Both: the claim must include "The UMPI or NPI of the rendering provider who delivered the service" and "The supervising provider for any services that require the supervision of a QSP"; Level III services always need the rendering provider’s UMPI.',
        status: 'verified',
        cites: [S.pwEidbi],
      },
    },
    intakeGates: {
      ageLimit: { value: 'Under 21: a child must "Be under age 21" (and be a PrimeWest member, medically stable, with ASD or a related condition).', status: 'verified', cites: [S.pwEidbi] },
      dxRecency: {
        value: 'PrimeWest: a CMDE "is not required every year, but it must be performed at least once every three years or as clinically necessary."',
        status: 'verified',
        cites: [S.pwEidbi],
      },
      diagnosingProviders: {
        value: 'PrimeWest says the child must "receive a Comprehensive Multi-Disciplinary Evaluation … by a licensed mental health professional"; the diagnosis itself follows the statute. ' + EIDBI_DIAGNOSERS,
        status: 'verified',
        cites: [S.pwEidbi, S.stat0949],
      },
      diagnosticTools: { value: 'PrimeWest names no instrument. ' + EIDBI_TOOLS, status: 'verified', cites: [S.pwEidbi, S.elig, S.cmde] },
      referral: {
        value: 'No referral; the gate is a CMDE "stating a medical necessity for EIDBI services," then authorization.',
        status: 'verified',
        cites: [S.pwEidbi],
      },
      telehealth: {
        value: '"Certain EIDBI services are eligible to be provided via telehealth," with the same thresholds, rates and authorization as in person; bill "with place of service 02," modifier 93 for audio-only; no connection or site fees. PrimeWest points to DHS’s EIDBI telehealth page for which services qualify (not 0373T).',
        status: 'verified',
        cites: [S.pwEidbi, S.tele],
      },
      authTurnaround: {
        value: 'PrimeWest completes its CMDE completeness check "within five business days of receiving the CMDE" and, within five business days of receiving the ITP, determines medical necessity and generates the notice. No retroactive EIDBI authorizations.',
        status: 'verified',
        cites: [S.pwEidbi],
      },
      coordinationOfBenefits: {
        value: '"EIDBI providers are not required to bill a member’s commercial insurance before billing Medical Assistance. PrimeWest Health will seek reimbursement from third parties."',
        status: 'verified',
        cites: [S.pwEidbi],
      },
    },
    faq: [
      { q: 'Does PrimeWest Health require authorization for the CMDE?', a: 'No. The annual CMDE, ITP development, care conferences and travel time need no authorization; intervention, family training and observation and direction do.' },
      { q: 'Can I get a retroactive EIDBI authorization from PrimeWest?', a: 'No, except an additional CMDE within the calendar year. Submit before services start.' },
      { q: 'Can two PrimeWest providers bill at the same time?', a: 'PrimeWest’s manual excludes simultaneous services by multiple providers and observation and direction of two staff at once, which is stricter than DHS. Confirm before billing overlapping 97153 and 97155.' },
    ],
  },

  'south-country-health-alliance-minnesota': {
    slug: 'south-country-health-alliance-minnesota',
    family: 'south-country',
    cardDesc: 'Medical Assistance plan: EIDBI on its BH prior-auth list with form #4894, the CMDE and ITP; 5-business-day decisions; 180-day filing.',
    assessmentPA: {
      value: '97151 UB appears on South Country’s EIDBI prior-authorization row with the DHS threshold "80 units per calendar year (1 CMDE allowed annually)"; the row reads "Thresholds vary, see DHS Billing Grid," so authorization applies above the grid’s free annual CMDE',
      status: 'plan-dependent',
      cites: [S.scBhPa, S.grid],
      verifyVia: 'South Country Provider Services, 888-633-4055: confirm the first annual CMDE needs no authorization.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Yes: "Authorization Required - authorization cannot exceed 180 day time span" for 97153, 97154, 97155, 97156, 97157 (UB), H0046 and 0373T, on the EIDBI Authorization form (#4894) with the CMDE and ITP',
      status: 'verified',
      cites: [S.scBhPa],
    },
    dxRequired: {
      value: 'Yes: South Country’s list labels EIDBI "[ages 21 & under]" and points to the MHCP manual; the statutory rule applies (ASD or a related condition diagnosed by a physician, APRN, PA or mental health professional)',
      status: 'verified',
      cites: [S.scBhPa, S.stat0949],
    },
    payer: 'South Country Health Alliance',
    state: 'MN', kind: 'medicaid-mco', parent: MN_MCO_PARENT,
    pill: 'Payer Guide · South Country Health Alliance · Minnesota',
    h1: 'South Country Health Alliance ABA / EIDBI coverage: the intake guide.',
    metaTitle: 'South Country Health Alliance Minnesota ABA (EIDBI) Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How South Country Health Alliance covers ABA under the EIDBI benefit: its prior-authorization list and form #4894, 180-day authorizations, 5-business-day decisions, 180-day claim filing, telehealth billing, and appeal deadlines.',
    intro: [
      'South Country Health Alliance is one of the eight Medical Assistance plans on DHS’s October 2026 EIDBI grid. EIDBI sits on its Behavioral Health Prior Authorization and Notification List for PMAP and MinnesotaCare, and its provider manual sets the general authorization clock, filing limits and telehealth billing rules.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as EIDBI (list says "ages 21 & under"; statute: under 21)' },
      { label: 'Prior auth', value: '97153–97157, H0046, 0373T; 97151 above the DHS threshold' },
      { label: 'Form', value: 'EIDBI Authorization (#4894) plus the CMDE and ITP' },
      { label: 'Decision clock', value: '5 business days standard; 48 hours expedited' },
      { label: 'Claim filing', value: '180 days from date of service' },
      { label: 'Appeals', value: '60 days from the notice' },
    ],
    sections: [
      {
        h2: 'Authorization at South Country',
        body: [
          'South Country’s list (updated 3/5/2025) puts "Behavioral Health EIDBI [ages 21 & under]" on PMAP and MinnesotaCare, lists 97151, 97153, 97154, 97155, 97156 and 97157 (UB), H0046 and 0373T, notes for 97151 "80 units per calendar year (1 CMDE allowed annually), limit of 8 hours per day," says "Thresholds vary, see DHS Billing Grid," and requires authorization that "cannot exceed 180 day time span" on the "Early Intensive Developmental and Behavior Interventions (EIDBI) Authorization (Form #4894), the CMDE and ITP." Its authorization chapter sets a standard decision "within 5 business days from the date the request was received" and an expedited Medicaid decision within "48 hours including a business day." Unlike most services, EIDBI requests do not need proof of a good-faith attempt with Medicare or other insurance first: "Except for home care and EIDBI authorization requests, South Country will not consider a request … for a member with Medicare or TPL unless the provider has made a good faith effort" with the primary payer.',
        ],
        cites: [S.scBhPa, S.scCh6],
      },
      {
        h2: 'Claims, telehealth and appeals',
        body: [
          'Since January 1, 2024, claims "must be received by South Country no later than 180 days from the date of service"; corrected claims within 180 days of the remittance advice; Medicare and TPL claims within six months of the primary’s payment or denial, or 180 days from service if later. Claims use the NPI or UMPI. Telehealth claims "require Place of Service 02 or 10," with modifier 93 for audio-only. Members must file appeals "within 60 days of the date of the" notice of action.',
        ],
        cites: [S.scCh4, S.scCh33, S.scCh14],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm South Country PMAP or MinnesotaCare enrollment.' },
      { title: 'Form #4894 + CMDE + ITP', desc: 'All three go with the authorization request.' },
      { title: 'Other insurance', desc: 'Record it; EIDBI requests do not need a primary-payer attempt first.' },
    ],
    sources: [S.scBhPa, S.scCh6, S.scCh4, S.scCh33, S.scCh14, S.mcoGrid, S.stat0949, S.sl95, S.grid, S.mhcpEidbi, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: { value: 'South Country publishes no EIDBI supervision rule of its own; it points to the MHCP manual. ' + EIDBI_SUPERVISION, status: 'verified', cites: [S.scBhPa, S.stat0949, S.sl95, S.clinsup] },
      concurrentBilling: {
        value: 'Not addressed for EIDBI in the South Country documents read.',
        status: 'unverified',
        cites: [S.scBhPa],
        verifyVia: 'South Country Provider Services, 888-633-4055: ask whether 97153 and 97155 by different staff may be billed for the same time.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'South Country’s list: "Thresholds vary, see DHS Billing Grid," and for 97151 "80 units per calendar year (1 CMDE allowed annually), limit of 8 hours per day." Grid daily limits: 97153 and 0373T 8 hours, 97154 4.5 hours, 97155 6 hours, 97156/97157 4 hours.',
        status: 'verified',
        cites: [S.scBhPa, S.grid],
      },
      noteSignature: { value: 'South Country publishes no EIDBI note rule of its own. ' + EIDBI_NOTES, status: 'verified', cites: [S.sl95, S.services] },
      placeOfService: {
        value: 'Not addressed for EIDBI beyond telehealth (POS 02 or 10).',
        status: 'unverified',
        cites: [S.scCh33],
        verifyVia: 'South Country Provider Services, 888-633-4055: confirm in-person EIDBI POS codes (DHS uses 11 and 12).',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'South Country requires the NPI or UMPI on claims but publishes no EIDBI rendering/supervising rule.',
        status: 'unverified',
        cites: [S.scCh4],
        verifyVia: 'South Country Provider Services, 888-633-4055: ask whether the supervising QSP must be on the claim, as DHS requires.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'South Country labels EIDBI "[ages 21 & under]"; the statute and DHS limit it to people "under 21 years of age," so expect coverage to end at the 21st birthday.',
        status: 'verified',
        cites: [S.scBhPa, S.stat0949],
      },
      dxRecency: { value: 'South Country publishes no rule of its own. ' + EIDBI_RECENCY, status: 'verified', cites: [S.cmde, S.mednec] },
      diagnosingProviders: { value: EIDBI_DIAGNOSERS, status: 'verified', cites: [S.stat0949, S.elig] },
      diagnosticTools: { value: EIDBI_TOOLS, status: 'verified', cites: [S.elig, S.cmde] },
      referral: { value: 'No. DHS’s October 2026 grid, for South Country: "No referral required for in or out of network providers."', status: 'verified', cites: [S.mcoGrid] },
      telehealth: {
        value: 'South Country telehealth claims "require Place of Service 02 or 10," modifier 93 for audio-only. Which EIDBI services qualify follows the statute and DHS. ' + EIDBI_TELE,
        status: 'verified',
        cites: [S.scCh33, S.stat0949, S.tele],
      },
      authTurnaround: {
        value: '"Standard review timeframe for an authorization decision is within 5 business days from the date the request was received"; expedited Medicaid requests "48 hours including a business day."',
        status: 'verified',
        cites: [S.scCh6],
      },
      coordinationOfBenefits: {
        value: 'EIDBI authorization requests are exempt from South Country’s rule requiring a good-faith attempt with Medicare or other insurance first; DHS’s pay-and-chase policy means the commercial plan need not be billed first. South Country’s billing chapter still asks for primary-payer information on claims when it exists.',
        status: 'verified',
        cites: [S.scCh6, S.scCh4, S.mhcpEidbi],
      },
    },
    faq: [
      { q: 'What form does South Country use for EIDBI?', a: 'The EIDBI Authorization form (#4894), with the CMDE and ITP. Authorizations cannot exceed 180 days.' },
      { q: 'How long do I have to file a South Country claim?', a: '180 days from the date of service (since January 1, 2024).' },
    ],
  },

  'aetna-minnesota': {
    slug: 'aetna-minnesota',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA guide + precert list, under Minnesota’s large-employer mandate (§ 62A.3094, under 18) and BA licensure.',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required on the same list; whether a Minnesota plan may still require it for ABA after Minnesota barred prior authorization of "outpatient mental health treatment" (plans issued or renewed from 1/1/2026) is not settled in any source read',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.stat62M07],
      verifyVia: 'Aetna precertification line on the member card: confirm whether the plan is Minnesota fully insured and whether ABA precertification still applies.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5 diagnosis of autism spectrum disorder (F84.0, F84.3–F84.9) by an appropriate provider',
      status: 'verified',
      cites: [S.aetnaGuide],
    },
    payer: 'Aetna in Minnesota',
    state: 'MN', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Minnesota',
    h1: 'Aetna ABA coverage in Minnesota: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Minnesota: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Minnesota families: the national ABA medical necessity guide and precertification, Minnesota’s large-employer autism mandate (children under 18), behavior analyst licensure since 2025, utilization-review and prompt-pay rules, and what intake should verify.',
    intro: [
      'For a Minnesota intake team, an Aetna card means four layers: Aetna’s national ABA medical necessity guide, Minnesota’s autism mandate (which reaches only large-employer plans and children under 18), Minnesota’s behavior analyst license, and the plan’s funding type. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s national ABA medical necessity guide' },
      { label: 'State mandate', value: 'Minn. Stat. § 62A.3094 (Laws 2013, ch. 108)' },
      { label: 'Mandate age', value: 'Children under 18' },
      { label: 'Mandate caps', value: 'No dollar or visit cap in the statute; treatment-plan updates limited to once every six months' },
      { label: 'Exempt from mandate', value: 'Small-group and individual plans (mandate binds large employers, 51+ employees) and self-funded ERISA plans' },
      { label: 'Licensure', value: 'Licensed behavior analyst required since Jan. 1, 2025 (Board of Psychology), unless exempt' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Minnesota',
        body: [
          'Aetna’s ABA medical necessity guide (©2026) requires a DSM-5 ASD diagnosis "obtained by an appropriate provider," services "provided directly or billed by the appropriately licensed provider," "functional impairment on a standardized scale of functioning in the past 12 months" at least one standard deviation below the mean (or significant risk of harm), and a treatment plan with measurable targets; progress is evaluated every six months. Its only state exhibit is Maryland, so the national criteria apply in Minnesota. Its behavioral health precertification list (effective 8/1/2024) names all ten ABA codes, 97151 through 97158, 0362T and 0373T. In a state with a behavior analyst license, Aetna’s guide expects services "provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists"; Minnesota became such a state on January 1, 2025.',
        ],
        cites: [S.aetnaGuide, S.aetnaPrecert, S.lic9986],
      },
      {
        h2: 'The Minnesota mandate: what it guarantees',
        body: [MN_MANDATE_BODY],
        cites: [S.stat3094, S.stat62Q18, S.stat62Q47],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [MN_LICENSURE_BODY],
        cites: [S.lic9981, S.lic9983, S.lic9986, S.lic9987, S.bacbLic, S.spa2410],
      },
      {
        h2: 'Claims operations in Minnesota',
        body: [
          MN_PROMPT_PAY + ' Aetna’s provider manual (6/26) treats payment as a contract term: "The rates and compensation under your agreement are subject to the Aetna coding/claim edit policies," and with a direct agreement "your direct Aetna rates will apply." For fully insured plans the Minnesota Utilization Review Act sets authorization clocks (five business days standard), and the Minnesota Telehealth Act requires telehealth to be covered and paid "on the same basis and at the same rate" as in person.',
        ],
        cites: [S.stat62Q75, S.aetnaOM, S.stat62M05, S.stat62A673],
      },
    ],
    collect: [
      { title: 'Plan funding and group size', desc: 'Fully insured large-employer (§ 62A.3094 applies), small group/individual, or self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3).' },
      { title: 'Treatment plan from the physician or mental health professional', desc: '§ 62A.3094 ties covered treatment to it; updates at most every six months.' },
    ],
    sources: [S.aetnaGuide, S.aetnaPrecert, S.aetnaCPB648, S.aetnaNPC, S.aetnaOM, S.stat3094, S.stat62Q18, S.stat62Q47, S.stat62Q75, S.stat62M05, S.stat62M07, S.stat62A673, S.lic9981, S.lic9983, S.lic9986, S.lic9987, S.bacbLic, S.erisa, S.cfr433, S.mhcpEidbi, S.tricare, S.champva, S.spa2410],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s Network Participation Criteria (5/26): services "must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board"; "A minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional "for each 10 hours of applied behavior analysis," plus the supervisor "onsite with the child at least one hour a month"; and "All BCBAs, BCaBAs and paraprofessionals must meet state requirements." In Minnesota that means the supervisor must be a licensed behavior analyst or licensed psychologist (Minn. Stat. § 148.9986), and unlicensed staff work under a licensed behavior analyst’s direction (§ 148.9987(a)(6)).',
        status: 'verified',
        cites: [S.aetnaNPC, S.lic9986, S.lic9987],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA documents read.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Aetna provider services or the participating-provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day cap. Typical intensities in Aetna’s guide: 10–25 hours a week for comprehensive programs (ages 0–7) and 1–20 for focused programs (typical, not caps); progress re-evaluated every six months.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      noteSignature: {
        value: 'Not addressed in Aetna’s ABA guide.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'The participating-provider agreement and Aetna Behavioral Health documentation standards.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Aetna’s guide expects collaboration "with existing providers and/or the school district" and is not written around a setting; ABA is not to be custodial. Ask about school-day services.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      billAsProvider: {
        value: '"Services must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists," unless mandates, plan documents or contracts say otherwise. Minnesota licenses behavior analysts, so plan on the licensed behavior analyst (or licensed psychologist) as the billing provider.',
        status: 'verified',
        cites: [S.aetnaGuide, S.lic9986],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s guide sets no age cap; its age ranges are typical, not limiting.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.stat3094, S.stat62Q18],
        verifyVia: 'Live benefits verification: establish group size, fully insured vs. self-funded, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but medical necessity requires impairment on a standardized scale administered in the past 12 months (at least one standard deviation below the mean) or a significant risk of harm.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'An appropriate provider: "licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice."',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale; the ABA guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s ABA documents require no physician referral; they require precertification of all ten ABA codes.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.stat3094],
      },
      telehealth: {
        value: 'Aetna’s provider manual (6/26): Aetna Behavioral Health "offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out," and providers "must ensure that they have the proper licensure based on state requirements." For fully insured Minnesota plans the Minnesota Telehealth Act requires carriers to cover telehealth "in the same manner as any other benefits," allows prior authorization only where the in-person service needs it, and requires payment "on the same basis and at the same rate" (§ 62A.673). Aetna’s ABA telehealth code list is not public in a current version.',
        status: 'plan-dependent',
        cites: [S.aetnaOM, S.stat62A673],
        verifyVia: 'Availity or the precertification line: confirm fully insured vs. self-funded (and opt-out), and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: MN_UR_VALUE('Aetna'),
        status: 'plan-dependent',
        cites: [S.stat62M05, S.stat62M07, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured in Minnesota or self-funded, and what reauthorization lead time Aetna expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: MN_COB_VALUE('Aetna'),
        status: 'plan-dependent',
        cites: [S.cfr433, S.mhcpEidbi, S.tricare, S.champva],
        verifyVia: 'Ask Aetna for the member’s coordination-of-benefits order and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Minnesota?', a: 'Yes, under its national ABA guide for ASD. Minnesota’s mandate adds a floor only for large-employer (51+) fully insured plans and children under 18; other plans follow their documents.' },
      { q: 'Does Minnesota’s autism mandate cover adults or small employers?', a: 'No. § 62A.3094 applies to health plans issued to large employers and to children under 18. Parity law (§ 62Q.47) still applies to all health plans that cover mental health.' },
      { q: 'Does a BCBA need a Minnesota license to bill Aetna?', a: 'Minnesota has required a behavior analyst license to practice ABA since January 1, 2025, and Aetna expects billing by licensed behavior analysts in licensure states. Get the Minnesota license (or bill through a licensed psychologist where in scope).' },
      { q: 'What does Aetna pay for ABA in Minnesota?', a: 'Aetna publishes no ABA rates; payment follows your participation agreement. The public benchmark is Minnesota Medical Assistance’s EIDBI rate of $20.178 per 15-minute intervention unit (QSP or Level I).' },
    ],
  },

  'cigna-minnesota': {
    slug: 'cigna-minnesota',
    family: 'cigna',
    cardDesc: 'Evernorth EN0499 + autism resource guide (no PA on assessments) + Minnesota’s large-employer mandate and BA licensure.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: complete the assessment and treatment plan and attach them to the Applied Behavior Analysis Prior Authorization Form; note Minnesota’s 2026 bar on prior authorization of "outpatient mental health treatment" for fully insured plans, whose reach to ABA is unsettled',
      status: 'plan-dependent',
      cites: [S.cignaARG, S.stat62M07],
      verifyVia: 'Evernorth Provider Services, 800.926.2273: confirm whether the plan is Minnesota fully insured and whether ABA prior authorization still applies.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: autism spectrum disorder under DSM-5-TR criteria (EN0499)',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Minnesota',
    state: 'MN', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Minnesota',
    h1: 'Cigna / Evernorth ABA coverage in Minnesota: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Minnesota: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Minnesota families: national policy EN0499, no PA on assessments, Minnesota’s large-employer autism mandate (children under 18), behavior analyst licensure, prompt-pay and utilization-review rules, and what intake should verify.',
    intro: [
      'For a Minnesota intake team, a Cigna card means Evernorth’s national ABA policy EN0499 and the Cigna autism resource guide, Minnesota’s large-employer autism mandate, Minnesota’s behavior analyst license, and the plan’s funding type. Many Cigna members are on self-funded employer plans, so check funding first. Evernorth Behavioral Health is headquartered in Bloomington, Minnesota, and its administrative guidelines carry a Minnesota regulatory addendum for fully insured business.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'State mandate', value: 'Minn. Stat. § 62A.3094 (Laws 2013, ch. 108)' },
      { label: 'Mandate age', value: 'Children under 18' },
      { label: 'Mandate caps', value: 'No dollar or visit cap in the statute; treatment-plan updates limited to once every six months' },
      { label: 'Exempt from mandate', value: 'Small-group and individual plans (mandate binds large employers, 51+ employees) and self-funded ERISA plans' },
      { label: 'Licensure', value: 'Licensed behavior analyst required since Jan. 1, 2025 (Board of Psychology), unless exempt' },
      { label: 'Fee schedule', value: 'Not public — your ABA fee schedule is Exhibit A of your Evernorth Provider Agreement; Provider Services 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Minnesota',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). Per the autism resource guide, prior authorization is no longer required for assessment codes 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA; treatment needs the completed assessment and treatment plan on the ABA Prior Authorization Form. Only one provider may bill a unit of time except 97153, 97154 and 97155 during direct supervision, non-credentialed staff bill under the supervising provider, and all ABA CPT codes are covered telehealth services. EN0499 and the resource guide contain no Minnesota-specific criteria. Evernorth’s Minnesota Regulatory Addendum (September 2026 guidelines) governs contract mechanics such as 45 days’ notice of fee-schedule changes, and "do[es] not apply with regard to Covered Services rendered to Participants covered under self-funded plans."',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin],
      },
      {
        h2: 'The Minnesota mandate: what it guarantees',
        body: [MN_MANDATE_BODY],
        cites: [S.stat3094, S.stat62Q18, S.stat62Q47],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [MN_LICENSURE_BODY],
        cites: [S.lic9981, S.lic9983, S.lic9986, S.lic9987, S.bacbLic, S.spa2410],
      },
      {
        h2: 'Claims operations in Minnesota',
        body: [
          'Evernorth "will only consider claims submitted within 90 days of the date of service or as otherwise defined in your Provider Agreement," unless "Applicable state law provides for a longer timely filing limit." ' + MN_PROMPT_PAY + ' Telehealth claims carry "Modifier 95 in Field 24-D" and "02 for Place of Service." Fee-schedule and contract questions go to Provider Services, 800.926.2273.',
        ],
        cites: [S.ebhAdmin, S.stat62Q75],
      },
    ],
    collect: [
      { title: 'Plan funding and group size', desc: 'Fully insured large-employer (§ 62A.3094 applies), small group/individual, or self-funded ERISA.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, and the date of the most recent diagnosis.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Treatment plan from the physician or mental health professional', desc: '§ 62A.3094 ties covered treatment to it; updates at most every six months.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.stat3094, S.stat62Q18, S.stat62Q47, S.stat62Q75, S.stat62M05, S.stat62M07, S.stat62A673, S.lic9981, S.lic9983, S.lic9986, S.lic9987, S.bacbLic, S.erisa, S.cfr433, S.mhcpEidbi, S.tricare, S.champva, S.spa2410],
    deliveryRules: {
      supervision: {
        value: 'Case supervision by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health professional with ABA training; direct plus indirect case supervision of one to two hours per ten hours of direct treatment (at least one to two hours a week at 10 hours or less); supervisor’s name and credentials documented (EN0499). In Minnesota the supervisor must also hold a Minnesota behavior analyst license or be a licensed psychologist (§ 148.9986).',
        status: 'verified',
        cites: [S.en0499, S.lic9986],
      },
      concurrentBilling: {
        value: '"Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155" during direct supervision, when the BCBA or QHP directs the technician face-to-face with the patient. ABA at the same time as another treatment is not reimbursable.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499],
      },
      dailyLimits: {
        value: 'No per-day cap is published; all ABA codes bill in 15-minute units and intensity must reflect severity, goals and response.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499],
      },
      noteSignature: {
        value: 'Each service needs its own record with date and time, location, focus, intervention, who was present, service type, and the name, credential and signature of the rendering provider (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'Goals and data reported separately for each setting (home, clinic, school, community); primarily educational or vocational services are not covered (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      billAsProvider: {
        value: '"Evernorth does not credential nonlicensed/noncertified staff"; their services are billed under the supervising provider. On a CMS-1500 list "only a BCBA or other licensed provider in box 33"; payer ID 62308. In Minnesota the billing BCBA should hold the Minnesota license.',
        status: 'verified',
        cites: [S.cignaARG, S.lic9986],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.stat3094, S.stat62Q18],
        verifyVia: 'Live benefits verification: establish group size and fully insured vs. self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request must give "The date on which the diagnosis was most recently made"; the standardized assessment instrument must be administered "within 60 days prior to the start of treatment," with quantitative baseline data from the same 60-day window (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional licensed to practice independently whose board considers diagnosis within scope, applying DSM-5-TR criteria (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated; it must be reliable, valid, standardized, current edition, and measure both DSM-5-TR ASD domains (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral; assessments need no PA with an autism diagnosis when the provider is independently licensed or a BCBA.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.stat3094],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" (autism resource guide); bill modifier 95 with POS 02. For fully insured Minnesota plans the Minnesota Telehealth Act also requires parity in coverage and payment (§ 62A.673). Telehealth providers must hold the Minnesota license.',
        status: 'verified',
        cites: [S.cignaARG, S.ebhAdmin, S.stat62A673],
      },
      authTurnaround: {
        value: MN_UR_VALUE('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.stat62M05, S.stat62M07, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured in Minnesota or self-funded.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: MN_COB_VALUE('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.cfr433, S.mhcpEidbi, S.tricare, S.champva],
        verifyVia: 'Ask Evernorth for the member’s coordination-of-benefits order and record every other coverage.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Minnesota?', a: 'Yes, under EN0499 for ASD. Minnesota’s mandate adds a floor for fully insured large-employer plans and children under 18.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in Minnesota?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA.' },
      { q: 'What is Cigna’s timely filing limit in Minnesota?', a: 'Evernorth’s default is 90 days from service unless the provider agreement or a longer state limit applies; Minnesota’s statute sets six months unless a contract provides otherwise. Check your agreement.' },
    ],
  },

  'unitedhealthcare-minnesota': {
    slug: 'unitedhealthcare-minnesota',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + Minnesota’s large-employer mandate; no Minnesota entry in Optum’s ABA state mandates.',
    assessmentPA: {
      value: 'Required: "Prior authorization is required for ABA *(unless otherwise specified or mandated by contract or law)," run as a two-step Optum flow, assessment first',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required (second step); Minnesota’s 2026 bar on prior authorization of "outpatient mental health treatment" for fully insured plans may be the "law" Optum’s exception refers to, but no source read applies it to ABA',
      status: 'plan-dependent',
      cites: [S.optumSCC, S.stat62M07],
      verifyVia: 'Optum Provider Express support, (866) 209-9320: confirm whether a Minnesota fully insured plan still requires ABA authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5-TR ASD confirmed by a state-licensed diagnosing clinician with at least one validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Minnesota',
    state: 'MN', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Minnesota',
    h1: 'UnitedHealthcare / Optum ABA coverage in Minnesota: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Minnesota: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Minnesota families: Optum’s ABA criteria and two-step authorization, Minnesota’s large-employer autism mandate (children under 18), behavior analyst licensure, telehealth limits, and what intake should verify.',
    intro: [
      'For a Minnesota intake team, a UnitedHealthcare card means Optum Behavioral Health’s national ABA criteria, Minnesota’s large-employer autism mandate, Minnesota’s behavior analyst license, and the plan’s funding type. UnitedHealthcare is not one of the eight Minnesota Medical Assistance plans on DHS’s EIDBI grid, so a UHC card here is commercial (or Medicare).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'Minn. Stat. § 62A.3094 (Laws 2013, ch. 108)' },
      { label: 'Mandate age', value: 'Children under 18' },
      { label: 'Mandate caps', value: 'No dollar or visit cap in the statute; treatment-plan updates limited to once every six months' },
      { label: 'Exempt from mandate', value: 'Small-group and individual plans (mandate binds large employers, 51+ employees) and self-funded ERISA plans' },
      { label: 'Licensure', value: 'Licensed behavior analyst required since Jan. 1, 2025 (Board of Psychology), unless exempt' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Minnesota',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026): prior authorization for ABA "unless otherwise specified or mandated by contract or law," diagnosis by a "state licensed physician, psychologist, or other state licensed clinician," direct case supervision "1 – 2 hours for every 10 hours of direct treatment per week," and review of use below 80% of authorized hours. Optum’s ABA State Mandates supplement (effective July 2026) lists Arizona, California, Connecticut, Florida, Indiana, Massachusetts, Ohio (Medicaid) and Pennsylvania; Minnesota is not there, so no Minnesota-specific criteria modify the policy. Optum’s National Network Manual (July 2026) does carry Minnesota regulatory requirements for the network contract.',
        ],
        cites: [S.optumSCC, S.optumSM, S.optumNNM, S.mcoGrid],
      },
      {
        h2: 'The Minnesota mandate: what it guarantees',
        body: [MN_MANDATE_BODY],
        cites: [S.stat3094, S.stat62Q18, S.stat62Q47],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [MN_LICENSURE_BODY],
        cites: [S.lic9981, S.lic9983, S.lic9986, S.lic9987, S.bacbLic, S.spa2410],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA?',
        body: [
          'UnitedHealthcare publishes no ABA rate table. Optum’s National Network Manual defines the "Fee Maximum" as the most a participating provider may be paid for a service and says "Reimbursement to clinicians is based upon licensure rather than degree." Optum’s commercial ABA Reimbursement Policy (2022RP501A, updated February 2026) puts a credential modifier on every line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed mental health provider, HP for a BCBA-D; indirect work has no separate code. ' + MN_PROMPT_PAY,
        ],
        cites: [S.optumNNM, S.optumReimb, S.stat62Q75],
      },
    ],
    collect: [
      { title: 'Plan funding and group size', desc: 'Fully insured large-employer (§ 62A.3094 applies), small group/individual, or self-funded ERISA.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a benefits check on Provider Express.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD with severity, confirmed with a validated tool (ADI-R, ADOS-2 and others).' },
      { title: 'Treatment plan from the physician or mental health professional', desc: '§ 62A.3094 ties covered treatment to it; updates at most every six months.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumReimb, S.optumNNM, S.mcoGrid, S.stat3094, S.stat62Q18, S.stat62Q47, S.stat62Q75, S.stat62M05, S.stat62M07, S.stat62A673, S.lic9981, S.lic9983, S.lic9986, S.lic9987, S.bacbLic, S.erisa, S.cfr433, S.mhcpEidbi, S.tricare, S.champva, S.spa2410],
    deliveryRules: {
      supervision: {
        value: 'Direct case supervision "1 – 2 hours for every 10 hours of direct treatment per week," consistent with CASP; technicians work under a BCBA or licensed clinician and should be RBTs or otherwise certified; Optum does not recommend parents as their own child’s RBT. In Minnesota the supervisor must hold the Minnesota license (§ 148.9986).',
        status: 'verified',
        cites: [S.optumSCC, S.lic9986],
      },
      concurrentBilling: {
        value: 'Not addressed in the SCC.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual, the participating agreement, or Optum provider services.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap; hours must be justified by documented need, and use below 80% of authorized hours triggers review.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      noteSignature: {
        value: 'Not addressed in the SCC.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual documentation standards and the participating agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Least restrictive appropriate level; services covered under IDEA, or 1:1 aide work during classroom instruction, are not covered; school coordination is (SCC).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      billAsProvider: {
        value: 'Credential modifiers on every line (HM RBT, HN BCaBA, HO BCBA or licensed mental health provider, HP BCBA-D); "Reimbursement to clinicians is based upon licensure rather than degree."',
        status: 'verified',
        cites: [S.optumReimb, S.optumNNM],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.stat3094, S.stat62Q18],
        verifyVia: 'Provider Express benefits check: establish group size and funding first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with severity using validated tools, and progress is reassessed over six-month periods.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'A "state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis."',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one validated tool; formal diagnostic tools listed include ADI-R, ADOS/ADOS-2 and DISCO, with screens such as CARS-2 and STAT (non-exhaustive).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate referral; the SCC require prior authorization, two steps on Provider Express.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.stat3094],
      },
      telehealth: {
        value: 'Optum’s telehealth billing guide (September 2025): "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157," billed with POS 02 or 10. For fully insured Minnesota plans the Minnesota Telehealth Act bars denying a covered service "solely" because it is delivered by telehealth and requires same-rate payment (§ 62A.673), so ask how Optum applies its three-code list to those plans.',
        status: 'plan-dependent',
        cites: [S.optumTele, S.stat62A673],
        verifyVia: 'Optum Provider Express support, (866) 209-9320: ask whether 97151 or 97153 by telehealth are paid on a Minnesota fully insured plan.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: MN_UR_VALUE('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.stat62M05, S.stat62M07, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured in Minnesota or self-funded.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: MN_COB_VALUE('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.cfr433, S.mhcpEidbi, S.tricare, S.champva],
        verifyVia: 'Ask UnitedHealthcare/Optum for the member’s coordination-of-benefits order and record every other coverage.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Minnesota?', a: 'Yes, under Optum’s national ABA criteria for ASD, with Minnesota’s mandate layered on for fully insured large-employer plans and children under 18.' },
      { q: 'Does Optum have Minnesota-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement does not list Minnesota.' },
      { q: 'Is UnitedHealthcare a Minnesota Medicaid plan?', a: 'Not for EIDBI: DHS’s October 2026 grid lists Blue Plus, HealthPartners, Hennepin Health, IMCare, Medica, PrimeWest Health, South Country Health Alliance and Medica One Health Plan.' },
    ],
  },

  'blue-cross-blue-shield-minnesota': {
    slug: 'blue-cross-blue-shield-minnesota',
    family: 'bcbs',
    cardDesc: 'Medical policy X-43 (2 hours supervision per 10, diagnosis within 24 months) + Minnesota’s large-employer mandate and BA licensure.',
    assessmentPA: {
      value: 'Not stated in medical policy X-43, which applies its criteria to "Initial assessment and initiation of care" and says documentation goes with the prior authorization "when prior authorization is required"; Blue Cross’s commercial precertification list was not read',
      status: 'unverified',
      cites: [S.bcX43],
      verifyVia: 'Blue Cross and Blue Shield of Minnesota provider services or the precertification list at bluecrossmn.com/providers: ask whether 97151 needs precertification for the member’s plan.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'X-43 links an EIBI pre-authorization request form and says documentation "must be included in the prior authorization, when prior authorization is required"; whether a given plan requires it (and how Minnesota’s 2026 outpatient-mental-health PA bar applies) is plan-specific',
      status: 'plan-dependent',
      cites: [S.bcX43, S.stat62M07],
      verifyVia: 'Blue Cross provider services (number on the member card) or Availity: confirm ABA precertification for the plan.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: X-43 requires a DSM diagnosis of ASD made "Within the past 24 months … using validated assessment tools (e.g. … ADOS … ADI-R)" by a qualified licensed psychologist or physician, after an initial diagnostic assessment by a licensed mental health professional',
      status: 'verified',
      cites: [S.bcX43],
    },
    payer: 'Blue Cross and Blue Shield of Minnesota',
    state: 'MN', kind: 'commercial',
    pill: 'Payer Guide · Blue Cross and Blue Shield of Minnesota',
    h1: 'Blue Cross and Blue Shield of Minnesota ABA coverage: the intake guide.',
    metaTitle: 'Blue Cross Blue Shield of Minnesota ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Blue Cross and Blue Shield of Minnesota covers ABA: medical policy X-43 (24-month diagnosis, 12-month adaptive assessment, 2 hours supervision per 10), Minnesota’s large-employer autism mandate, behavior analyst licensure, and what intake should verify.',
    intro: [
      'Blue Cross and Blue Shield of Minnesota is the state’s dominant commercial Blue. Its ABA criteria live in medical policy X-43, "Autism Spectrum Disorder: Assessment and Early Intensive Behavioral Intervention"; version X-43-014 has been in force since X-43-013 was replaced on February 2, 2026. The policy applies "generally to all Blue Cross and Blue Plus plans and products," but Medicaid members follow the state EIDBI benefit instead (see the Blue Plus guide).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per medical policy X-43 and the member’s benefit plan' },
      { label: 'State mandate', value: 'Minn. Stat. § 62A.3094 (Laws 2013, ch. 108)' },
      { label: 'Mandate age', value: 'Children under 18' },
      { label: 'Mandate caps', value: 'No dollar or visit cap in the statute; treatment-plan updates limited to once every six months (X-43 repeats this)' },
      { label: 'Exempt from mandate', value: 'Small-group and individual plans (mandate binds large employers, 51+ employees) and self-funded ERISA plans' },
      { label: 'Licensure', value: 'Licensed behavior analyst required since Jan. 1, 2025 (Board of Psychology), unless exempt' },
      { label: 'Fee schedule', value: 'Not public — Blue Cross pays the contracted rate in your provider agreement' },
    ],
    sections: [
      {
        h2: 'Medical policy X-43: what Blue Cross requires',
        body: [
          'To start ABA, X-43-014 requires all of the following: an initial diagnostic assessment by a licensed mental health professional (meeting DHS’s definitions in §§ 245.4871, subd. 27 and 245.462, subd. 18; out-of-state providers "appropriately licensed according to applicable state law"); a comprehensive ASD evaluation by a qualified licensed psychologist or physician with a DSM diagnosis made within the past 24 months using validated tools (ADOS, ADI-R) and an adaptive assessment within the past 12 months; a medical evaluation including a neurologic examination; a functional behavioral assessment within the past 12 months by a BCBA, licensed psychologist or physician; target behaviors that pose a significant threat of harm or significantly impede adaptive functioning; a treatment plan from the supervising mental health professional with hours justified per target; supervision of unlicensed staff by a BCBA, licensed psychologist or physician with "A minimum of 2 hours supervision … for every 10 hours direct treatment"; caregiver commitment with "substantive weekly caregiver support and training"; and medical stability.',
          'Continued care needs measured improvement every 6 months for comprehensive programs (12 months for focused), continued caregiver participation, and the same supervision ratio; Blue Cross "may request an updated treatment plan only once every six months," mirroring the mandate. Resumption after discharge requires at least 12 months since the end of treatment and the initial criteria again. Not medically necessary: non-specific goals, supportive care, academic or IEP services, "high-level social discourse," and social skills training.',
        ],
        cites: [S.bcX43, S.stat3094],
      },
      {
        h2: 'The Minnesota mandate: what it guarantees',
        body: [MN_MANDATE_BODY],
        cites: [S.stat3094, S.stat62Q18, S.stat62Q47],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [MN_LICENSURE_BODY, MN_PROMPT_PAY],
        cites: [S.lic9981, S.lic9983, S.lic9986, S.lic9987, S.bacbLic, S.spa2410, S.stat62Q75],
      },
    ],
    collect: [
      { title: 'Plan funding and group size', desc: 'Fully insured large-employer (§ 62A.3094 applies), small group/individual, or self-funded ERISA.' },
      { title: 'Diagnosis within 24 months', desc: 'By a licensed psychologist or physician, with ADOS/ADI-R or similar validated tools.' },
      { title: 'Adaptive assessment and FBA within 12 months', desc: 'X-43 requires both, plus a medical evaluation with a neurologic exam.' },
      { title: 'Treatment plan', desc: 'From the supervising mental health professional, with hours justified for each target.' },
      { title: 'Caregiver commitment', desc: 'Weekly caregiver support and training must be in the plan.' },
    ],
    sources: [S.bcX43, S.stat3094, S.stat62Q18, S.stat62Q47, S.stat62Q75, S.stat62M05, S.stat62M07, S.stat62A673, S.lic9981, S.lic9983, S.lic9986, S.lic9987, S.bacbLic, S.erisa, S.cfr433, S.mhcpEidbi, S.tricare, S.champva, S.spa2410],
    deliveryRules: {
      supervision: {
        value: 'X-43-014: "Unlicensed staff are supervised by a BCBA, licensed psychologist, or licensed physician with demonstrated knowledge, skills, and expertise in ASD treatment," and "A minimum of 2 hours supervision is provided for every 10 hours direct treatment" (initial and continued care). Minnesota law adds that the supervising BCBA must hold a Minnesota behavior analyst license unless exempt (§ 148.9986).',
        status: 'verified',
        cites: [S.bcX43, S.lic9986],
      },
      concurrentBilling: {
        value: 'Not addressed in X-43.',
        status: 'unverified',
        cites: [S.bcX43],
        verifyVia: 'Blue Cross provider services or the provider agreement and reimbursement policies.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'X-43 sets no hour cap; requested hours must reflect "the number of behavioral targets, services, and key functional skills," with a clinical summary justifying hours per target, at the least restrictive level.',
        status: 'verified',
        cites: [S.bcX43],
      },
      noteSignature: {
        value: 'Not addressed in X-43 beyond documentation submitted with prior authorization.',
        status: 'unverified',
        cites: [S.bcX43],
        verifyVia: 'Blue Cross provider manual or provider agreement documentation standards.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'ABA "may be applied in various settings (e.g., clinics, schools, homes and communities)," but services that are part of an IEP, tutoring or acting as a school aide are not medically necessary (except when significant behavioral difficulties during schoolwork are documented).',
        status: 'verified',
        cites: [S.bcX43],
      },
      billAsProvider: {
        value: 'Not addressed in X-43.',
        status: 'unverified',
        cites: [S.bcX43],
        verifyVia: 'Blue Cross provider services: ask whether RBT services bill under the supervising licensed behavior analyst’s NPI and which credentials are contracted.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'X-43 sets no age cap (its evidence review addresses adults too).' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.bcX43, S.stat3094, S.stat62Q18],
        verifyVia: 'Benefits verification: establish group size and funding, then the plan’s age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Diagnosis "Within the past 24 months"; adaptive behavioral assessment and functional behavioral assessment "within the past 12 months."',
        status: 'verified',
        cites: [S.bcX43],
      },
      diagnosingProviders: {
        value: 'Initial diagnostic assessment by a licensed mental health professional (per DHS definitions), and the comprehensive ASD evaluation by "A qualified licensed psychologist or licensed physician."',
        status: 'verified',
        cites: [S.bcX43],
      },
      diagnosticTools: {
        value: 'Validated tools "(e.g. Autism Diagnostic Observation Schedule [ADOS], Autism Diagnostic Interview [ADI-R])" for the diagnosis, plus a validated adaptive assessment and an FBA with baseline data.',
        status: 'verified',
        cites: [S.bcX43],
      },
      referral: {
        value: 'X-43 requires no referral, but it requires a medical evaluation including a neurologic examination and a treatment plan from the supervising mental health professional.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.bcX43, S.stat3094],
      },
      telehealth: {
        value: 'X-43 does not address telehealth. For fully insured Minnesota plans the Minnesota Telehealth Act requires coverage "in the same manner as any other benefits," prior authorization only where the in-person service needs it, and payment "on the same basis and at the same rate" (§ 62A.673).',
        status: 'plan-dependent',
        cites: [S.bcX43, S.stat62A673],
        verifyVia: 'Blue Cross provider services: confirm which ABA codes, POS and modifiers it pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: MN_UR_VALUE('Blue Cross and Blue Shield of Minnesota'),
        status: 'plan-dependent',
        cites: [S.stat62M05, S.stat62M07, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured in Minnesota or self-funded.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: MN_COB_VALUE('Blue Cross and Blue Shield of Minnesota'),
        status: 'plan-dependent',
        cites: [S.cfr433, S.mhcpEidbi, S.tricare, S.champva],
        verifyVia: 'Ask Blue Cross for the member’s coordination-of-benefits order and record every other coverage.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Blue Cross and Blue Shield of Minnesota cover ABA?', a: 'Yes, under medical policy X-43 and the member’s plan, with Minnesota’s mandate for fully insured large-employer plans and children under 18. Blue Plus Medical Assistance members use EIDBI instead.' },
      { q: 'How recent must the autism diagnosis be for Blue Cross MN?', a: 'Within the past 24 months, using validated tools, with an adaptive assessment and an FBA from the past 12 months.' },
      { q: 'What supervision ratio does Blue Cross MN require?', a: 'At least 2 hours of supervision for every 10 hours of direct treatment, by a BCBA, licensed psychologist or physician (and in Minnesota the BCBA needs the state license).' },
    ],
  },
};

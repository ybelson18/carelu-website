import type { PayerConfig, PayerSource } from './types.js';

/* Mississippi — researched October 2026 from primary sources only.
   medicaid.ms.gov, the MississippiCAN contracts, Magnolia, TrueCare/CareSource, Telligen,
   the Mississippi Autism Board and the Mississippi Insurance Department PDFs all download with
   plain curl and a browser user agent. molinahealthcare.com serves a bot wall to old paths; the
   current MS PDFs live under /-/media/Project/PWS/Healthcare/PDF/PDF/Providers/MS/. The
   Legislature’s billstatus.ls.state.ms.us has a broken TLS chain to curl and returns 503 to
   WebFetch, so SB 2140 (2024) and SB 2415 (2025) were read through https://r.jina.ai/<url>.
   Miss. Code §§ 83-9-5, 83-9-351 and 73-75-x were read on codes.findlaw.com (WebFetch / r.jina.ai);
   § 83-9-26 from the Insurance Department’s posted copy. BCBSMS policy pages were read with curl
   (medical policy) and WebFetch (coding policy; curl was reset by the proxy).
   Note on the brief: Title 23 Part 223 of the Medicaid Administrative Code is the EPSDT part and
   has NO ABA chapter. Mississippi Medicaid’s ABA ("Autism Spectrum Disorder (ASD) services")
   is written down in State Plan Attachment 3.1-A Exhibit 4b (SPA 16-0020), the 4.19-B rate page
   (SPA 23-0002), the ASD fee schedule and the procedure-code PA list; telehealth is Part 225. */

const S: Record<string, PayerSource> = {
  spa1620: { title: 'Mississippi State Plan, Attachment 3.1-A Exhibit 4b p.6 + Attachment 4.19-B p.4b(2) — Autism Spectrum Disorder (ASD) Services (SPA 16-0020, eff. 1/1/2017)', url: 'https://medicaid.ms.gov/wp-content/uploads/2017/05/SPA-16-0020-ASD-Services-Approved-Pages.pdf' },
  spa2302: { title: 'Mississippi State Plan, Attachment 4.19-B p.4b(2) — ASD service rate methodology (SPA 23-0002, eff. 1/1/2023, approved 4/13/2023)', url: 'https://medicaid.ms.gov/wp-content/uploads/2023/04/Pages-from-MS-23-0002-APPROVED-Pages.pdf' },
  asdFee: { title: 'Mississippi Division of Medicaid — Autism Spectrum Disorder Services Fee Schedule, July 2026 (.xlsx)', url: 'https://medicaid.ms.gov/wp-content/uploads/2026/07/ASD-FEE_SHEDULE-JULY-2026-fnl.xlsx' },
  feePage: { title: 'Mississippi Division of Medicaid — Fee Schedules and Rates', url: 'https://medicaid.ms.gov/providers/fee-schedules-and-rates/' },
  paList: { title: 'Mississippi Division of Medicaid — MESA Procedure Code Prior Authorization Required (August 2026)', url: 'https://medicaid.ms.gov/wp-content/uploads/2026/08/DOM-MESA-Procedure-Code-Prior-Authorization-Required-AUGUST-2026-FNL-.pdf' },
  p200: { title: 'Miss. Admin. Code Title 23, Part 200 — General Provider Information (eff. 8/1/2026): Rules 1.3 records, 1.6 timely filing, 1.7 claims processing, 1.8 administrative review, 1.13 rounding of timed codes, 1.14 EVV', url: 'https://medicaid.ms.gov/wp-content/uploads/2026/07/Title-23-Part-200-General-Provider-Information-eff-08.01.26.pdf' },
  p223: { title: 'Miss. Admin. Code Title 23, Part 223 — EPSDT Services (eff. 8/1/2026)', url: 'https://medicaid.ms.gov/wp-content/uploads/2026/07/Title-23-Part-223-EPSDT-eff.-8.1.26.pdf' },
  p225: { title: 'Miss. Admin. Code Title 23, Part 225 — Telemedicine (eff. 8/1/2026)', url: 'https://medicaid.ms.gov/wp-content/uploads/2026/07/Title-23-Part-225-Telemedicine-eff-8.1.26.pdf' },
  p300: { title: 'Miss. Admin. Code Title 23, Part 300 — Appeals (eff. 7/1/2025)', url: 'https://medicaid.ms.gov/wp-content/uploads/2025/07/Title-23-Part-300-Appeals-eff.-7.1.2025.pdf' },
  p306: { title: 'Miss. Admin. Code Title 23, Part 306 — Third Party Recovery (eff. 9/1/2023)', url: 'https://medicaid.ms.gov/wp-content/uploads/2023/09/Title-23-Part-306-Third-Party-Recovery-eff.-9.1.23.pdf' },
  adminCode: { title: 'Mississippi Division of Medicaid — Administrative Code (all Parts, eff. 8/1/2026)', url: 'https://medicaid.ms.gov/administrative-code/' },
  telPA: { title: 'Telligen (Mississippi Medicaid UM/QIO) — Prior Authorization Form and instructions (Qualitrac portal; fax 800-524-5710)', url: 'https://www.msmedicaid.telligen.com/wp-content/uploads/2026/08/Prior-Authorization-form-Final.pdf' },
  vendors: { title: 'Mississippi Division of Medicaid — Managed Care Contacts for MSCAN & CHIP (2025 vendor list)', url: 'https://medicaid.ms.gov/wp-content/uploads/2025/06/DOM-MSCAN-Vendor-List-2025.pdf' },
  mcPage: { title: 'Mississippi Division of Medicaid — Managed Care (MississippiCAN and CHIP; three CCOs)', url: 'https://medicaid.ms.gov/programs/managed-care/' },
  sep: { title: 'Mississippi Division of Medicaid — Special enrollment period (UnitedHealthcare Community Plan exits MSCAN/CHIP after 6/30/2025; TrueCare joins 7/1/2025)', url: 'https://medicaid.ms.gov/special-enrollment-period-underway-for-managed-care-members/' },
  mcContacts: { title: 'Mississippi Division of Medicaid — MississippiCAN Contacts', url: 'https://medicaid.ms.gov/mississippican-contacts/' },
  ccoMag: { title: 'Mississippi Coordinated Care Contract — Magnolia Health Plan, Inc. (Aug. 12, 2024 – Aug. 11, 2028)', url: 'https://medicaid.ms.gov/wp-content/uploads/2024/08/Magnolia-Health-Plan-Coordinated-Care-Services-Contract_20240812.pdf' },
  ccoMagA4: { title: 'Mississippi Coordinated Care Contract — Magnolia Health Plan, Amendment No. 4 (restated contract, 2026)', url: 'https://medicaid.ms.gov/wp-content/uploads/2026/06/Magnolia-Health-Plan-Inc._Coordinated-Care-Servcies_20240812_Amend4_FULLY-EXECUTED.pdf' },
  ccoMol: { title: 'Mississippi Coordinated Care Contract — Molina Healthcare of Mississippi (Aug. 12, 2024 – Aug. 11, 2028)', url: 'https://medicaid.ms.gov/wp-content/uploads/2024/08/Molina-Healthcare-Coordinated-Care-Services-Contract_20240812.pdf' },
  ccoTC: { title: 'Mississippi Coordinated Care Contract — Mississippi True d/b/a TrueCare (Aug. 12, 2024 – Aug. 11, 2028)', url: 'https://medicaid.ms.gov/wp-content/uploads/2024/08/Mississippi-True-dba-TrueCare-Coordinated-Care-Services-Contract_20240812.pdf' },
  magPM: { title: 'Magnolia Health — 2026 MSCAN Provider Manual', url: 'https://www.magnoliahealthplan.com/content/dam/centene/Magnolia/medicaid/pdfs/2026%20Magnolia%20Health%20MississippiCAN%20Provider%20Manual.pdf' },
  magPAReq: { title: 'Magnolia Health Plan — CMS Final Rule 0057-F Prior Authorization Requirements (list effective 12/31/2025)', url: 'https://www.magnoliahealthplan.com/content/dam/centene/medicaid/pdfs/provider/prior-authorization-requirements-metrics/MS_MagnoliaHP_Medicaid_32_PriorAuthReq_FINAL_R.pdf' },
  magPAList: { title: 'Magnolia Health — Medicaid Services Requiring Prior Authorization (annual review 12/1/2023)', url: 'https://www.magnoliahealthplan.com/content/dam/centene/Magnolia/medicaid/pdfs/PriorAuthorizListMSCAN-Rev.pdf' },
  magASD: { title: 'Magnolia Health — Autism Spectrum Disorders Treatment Form (UM fax 1-866-694-3649)', url: 'https://www.magnoliahealthplan.com/content/dam/centene/Magnolia/medicaid/pdfs/AutsmSpectrmDisordrTretmnt%20-508.pdf' },
  magBH: { title: 'Magnolia Health — Behavioral Health provider resources (ABA tip sheets, forms)', url: 'https://www.magnoliahealthplan.com/providers/resources/behavioral-health.html' },
  mag104: { title: 'Magnolia Health — Clinical Policy CP.BH.104, Applied Behavior Analysis (last revised 02/26)', url: 'https://www.magnoliahealthplan.com/content/dam/centene/Magnolia/policies/clinical-policies/CP.BH.104.pdf' },
  mag105: { title: 'Magnolia Health — Clinical Policy CP.BH.105, Applied Behavioral Analysis Documentation Requirements (last revised 02/26)', url: 'https://www.magnoliahealthplan.com/content/dam/centene/Magnolia/policies/clinical-policies/CP.BH.105.pdf' },
  molPM: { title: 'Molina Healthcare of Mississippi — 2026 MSCAN and CHIP Provider Manual (clean version, 6/25/2026)', url: 'https://www.molinahealthcare.com/-/media/Project/PWS/Healthcare/PDF/PDF/Providers/MS/Manuals/PRMANMDMSEN0326-2026-MSCAN-and-CHIP-Provider-Manual-Clean-Version-final_remediated-6-25-26.pdf' },
  molPA: { title: 'Molina Healthcare Medicaid (Mississippi) — Pre-Service Review Guide, effective 01/01/2026', url: 'https://www.molinahealthcare.com/-/media/Project/PWS/Healthcare/PDF/PDF/Providers/MS/Prior-Auth/English/MHMS-PA-Guide-Request-Form-MSCAN-CHIP-2026.pdf' },
  molPAPage: { title: 'Molina Healthcare of Mississippi — Prior authorization (provider page)', url: 'https://www.molinahealthcare.com/providers/ms/prior-auth' },
  mcp482: { title: 'Molina Clinical Policy MCP-482 — Applied Behavioral Analysis for Autism Spectrum Disorder (last approval 06/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
  tc1477: { title: 'TrueCare Medical Policy MM-1477 — Applied Behavior Analysis for Autism Spectrum Disorders (eff. 05/01/2026; DOM approved)', url: 'https://www.caresource.com/documents/medicaid-ms-policy-medical-mm-1477-20260501' },
  tc1639: { title: 'TrueCare Reimbursement Policy PY-1639 — Applied Behavior Analysis for Autism Spectrum Disorder (eff. 08/01/2026)', url: 'https://www.caresource.com/documents/medicaid-ms-policy-reimburse-py-1639-20260801' },
  tcPM: { title: 'Mississippi TrueCare — Provider Manual, MississippiCAN and CHIP (Dec. 2025 posting)', url: 'https://www.mstruecare.com/wp-content/uploads/2025/12/MS-MED-P-1902951a-Mississippi-Provider-Manual_WEB.pdf' },
  tcPAList: { title: 'TrueCare — 2026 Mississippi Medicaid Prior Authorization List (Sept. 2026 posting)', url: 'https://www.mstruecare.com/wp-content/uploads/2026/09/MS-MED-M-4855859_2026-MS-MCD-TrueCare-PA-List.pdf' },
  tcPAPage: { title: 'TrueCare — Prior authorization (MSCAN provider page)', url: 'https://www.mstruecare.com/ms/providers/provider-portal/prior-authorization/mscan/' },
  mandate: { title: 'Miss. Code Ann. § 83-9-26 — Screening, Diagnosis, and Treatment of Autism Spectrum Disorder (Mississippi Insurance Department copy)', url: 'https://www.mid.ms.gov/wp-content/uploads/2023/04/MissCodeAnn83-9-26.pdf' },
  midAutism: { title: 'Mississippi Insurance Department — Autism (FAQ on the § 83-9-26 mandate; carriers that voluntarily removed ABA age limits)', url: 'https://www.mid.ms.gov/mississippi-insurance-department/healthcare/autism/' },
  sb2140: { title: 'Mississippi SB 2140 (2024), "Mississippi Prior Authorization Reform Act" — as sent to the Governor (eff. July 1, 2024)', url: 'https://billstatus.ls.state.ms.us/documents/2024/pdf/SB/2100-2199/SB2140SG.pdf' },
  tele351: { title: 'Miss. Code Ann. § 83-9-351 — Telemedicine coverage (FindLaw, current as of Jan. 1, 2025)', url: 'https://codes.findlaw.com/ms/title-83-insurance/ms-code-sect-83-9-351/' },
  sb2415: { title: 'Mississippi SB 2415 (2025) — extends the § 83-9-351 telemedicine repealer to July 1, 2028 (as sent to the Governor)', url: 'https://billstatus.ls.state.ms.us/documents/2025/dt/SB/2400-2499/SB2415SG.pdf' },
  promptPay: { title: 'Miss. Code Ann. § 83-9-5(1)(h) — payment of clean claims (FindLaw, current as of Jan. 1, 2025)', url: 'https://codes.findlaw.com/ms/title-83-insurance/ms-code-sect-83-9-5/' },
  cobReg: { title: '19 Miss. Admin. Code Pt. 3, R. 7.01 — (88-102) Coordinating or Integrating Accident and Health Insurance Benefits (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/mississippi/19-Miss-Code-R-SS-3-7-1' },
  lic5: { title: 'Miss. Code Ann. § 73-75-5 — exemptions from the behavior analyst licensure chapter (FindLaw)', url: 'https://codes.findlaw.com/ms/title-73-professions-and-vocations/ms-code-sect-73-75-5/' },
  lic13: { title: 'Miss. Code Ann. § 73-75-13 — eligibility for licensure as a behavior analyst or assistant behavior analyst (FindLaw)', url: 'https://codes.findlaw.com/ms/title-73-professions-and-vocations/ms-code-sect-73-75-13/' },
  mabRules: { title: 'Mississippi Autism Board — Title 30 Part 3301, Licensure of Behavior Analysts and Assistant Behavior Analysts (rules final 3/13/2024)', url: 'https://www.msautismboard.ms.gov/sites/autism/files/UploadedDocuments/2024/MAB%20R&R%20(Final)%203.13.2024.pdf' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Mississippi: 2015, MS Autism Board)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; Maryland is the only state exhibit)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaCPB: { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / office manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (annual review 7/2026; Mississippi not listed)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumNNM: { title: 'Optum National Network Manual (effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  bcbsASD: { title: 'Blue Cross & Blue Shield of Mississippi — Medical Policy L.8.01.403, Treatment of Autism Spectrum Disorder (ASD) (last updated 03/24/2026)', url: 'https://beblue.bcbsms.com/policy-search/medical/policy-detail/treatment-of-autism-spectrum-disorder-asd' },
  bcbsCode: { title: 'Blue Cross & Blue Shield of Mississippi — Applied Behavioral Analysis (ABA) Coding Policy', url: 'https://beblue.bcbsms.com/policy-search/coding/policy-detail/applied-behavioral-analysis-aba-coding-policy' },
};

/* ---- Shared Mississippi layer ---- */
const MS_FFS_RATES =
  'July 2026 Mississippi Medicaid ASD fee schedule, per 15-minute unit: 97151 $34.18 (no PA), 97152 $41.74, 97153 $15.08, 97154 $9.42, 97155 and 97156 $24.35, 97157 and 97158 $12.17, 0362T $56.64, 0373T $41.49, ages 0–20';

const MS_MANDATE_BODY =
  'Mississippi’s autism mandate is Miss. Code Ann. § 83-9-26, enacted as HB 885 in 2015. A health insurance policy "shall provide coverage for the screening, diagnosis, and treatment of autism spectrum disorder" for policies delivered, issued or renewed in the state (or outside it if insuring Mississippi residents) on or after January 1, 2016. Treatment means evidence-based care "prescribed or ordered" by a licensed physician or licensed psychologist who finds it medically necessary, and it includes "behavioral health treatment" (behavior modification and counseling programs "including applied behavior analysis"), pharmacy, psychiatric, psychological and therapeutic care. Behavioral health treatment must be "provided or supervised by a licensed behavior mental health professional," and a diagnosis of ASD means assessments "performed by a licensed psychologist or licensed physician." The limits sit in subsection (5): ABA coverage "shall be limited to twenty-five (25) hours per week, and shall not be required beyond the age of eight (8) years," and "no more than ten (10) hours per week shall be for the services of a licensed behavior analyst," with all services "under the supervision or direction of a licensed behavior analyst or licensed psychologist." Those limits can be exceeded under an ongoing treatment plan "if medical necessity for the extension is determined to exist," and otherwise the policy’s appeal rights govern. Dollar limits, deductibles and coinsurance may not be less favorable than for medical and surgical benefits. Except for inpatient care, the insurer may review the treatment plan every six months, at its own cost. Schools’ IEP, IFSP and IDEA obligations are not shifted to insurers. Subsection (8) exempts non-grandfathered individual and small-group plans that carry ACA essential health benefits, and subsection (9) requires small employers with 100 or fewer eligible employees only to offer the coverage (they may charge for it). Self-funded ERISA plans are outside state law. The Insurance Department’s autism page lists Blue Cross & Blue Shield of Mississippi, UnitedHealthcare and Ambetter of Magnolia as having "voluntarily removed all age restrictions" for ABA, and tells families to confirm with their plan.';

const MS_LICENSURE_BODY =
  'Mississippi licenses behavior analysts. The BACB’s licensure table lists Mississippi (2015) with the Mississippi Autism Board, which licenses Licensed Behavior Analysts and Licensed Assistant Behavior Analysts under Miss. Code Ann. § 73-75. To be licensed as a behavior analyst a person needs at least a master’s degree, "current and active certification" as a BCBA or BCBA-D, a fingerprint-based state and FBI background check, and the Board’s other requirements, which include an oral examination the Board gives at least quarterly (Rule 3.2); licenses run three years but never past the BACB certification. Assistant behavior analysts need a bachelor’s degree, BCaBA certification and proof of supervision by a licensed behavior analyst. Technicians are not licensed: the supervising licensee registers each Registered Behavior Technician with the Board, the technician "works solely under the license of the behavior analyst," and supervision follows the BACB’s policy (Rule 9). For a BCBA licensed in another state, the statute’s exemption list (§ 73-75-5: licensed psychologists, other licensed professionals within scope, supervised technicians, family members, trainees, school employees) does not include behavior analysts licensed elsewhere, and the Board’s rules contain no telehealth provision, so plan on a Mississippi license before treating a Mississippi patient in person or by telehealth. The route is licensure by reciprocity (Rule 3.4), which still requires meeting the Rule 3.1 and 3.2 requirements; a temporary license exists only for applicants awaiting exam scores or the next oral exam, restricts practice to Mississippi and requires supervision. The autism mandate ties into this: a "licensed behavior analyst" in § 83-9-26 is one licensed under § 73-75-13.';

const MS_TELE_COMMERCIAL =
  'For state-regulated plans, Miss. Code Ann. § 83-9-351 says "All health insurance and employee benefit plans in this state must provide coverage for telemedicine services to the same extent that the services would be covered if they were provided through in-person consultation," with cost sharing no higher than in person. Telemedicine other than remote monitoring and store-and-forward "must be \'real-time\' audio visual capable," and the claim carries the procedure code "with the appropriate modifier indicating interactive communication was used." The section was set to lapse on July 1, 2025; SB 2415 (2025), as sent to the Governor, moves the repeal date to July 1, 2028. Self-funded employer plans are covered only to the extent federal law permits.';

const MS_PA_LAW =
  'Fully insured plans fall under the Mississippi Prior Authorization Reform Act (SB 2140, effective July 1, 2024). It applies to health insurance issuers, health benefit plans and private review agents, "with the exception of employee or employer self-insured health benefit plans" under ERISA. A non-urgent decision is due "no later than seven (7) calendar days after obtaining all necessary information," an urgent one "no later than forty-eight (48) hours after receiving all information needed." A missed deadline means the services are "automatically deemed authorized." An approval stays valid for the lesser of six months, the length of treatment set by the clinician, or the plan’s renewal (12 months for chronic-condition treatment). Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours, and at least 180 days to appeal a denial.';

const MS_COB =
  'Mississippi’s coordination-of-benefits regulation (19 Miss. Admin. Code Pt. 3, R. 7.01) lets insurers file coordination provisions but sets no order-of-benefits rule of its own, so the order for a child on two parents’ plans comes from the plan documents (ask about the birthday rule at verification). The same regulation says "other health plans" for coordination "shall not include … Medicaid," and Medicaid is payer of last resort (42 CFR 433.139), so this plan pays before Mississippi Medicaid or a MississippiCAN plan. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).';

const MS_PROMPT_PAY =
  'Mississippi’s prompt-pay law, Miss. Code Ann. § 83-9-5(1)(h), requires clean claims to be paid within 25 days of receipt of due written proof for electronic claims and 35 days for paper, with interest of 3% a month after that; a clean claim "requires no further information, adjustment or alteration by the provider."';

const MANDATE_AGE_TAIL =
  ' For fully insured Mississippi plans, § 83-9-26(5) lets ABA coverage stop at age 8 and 25 hours a week unless medical necessity for an extension is shown under an ongoing treatment plan; non-grandfathered individual and small-group plans and self-funded ERISA plans are outside the mandate.';

const MANDATE_REFERRAL_TAIL =
  ' Under § 83-9-26 the mandated treatment is care "prescribed or ordered" by a licensed physician or licensed psychologist, so keep that order on file for a fully insured Mississippi plan; the insurer may review the treatment plan every six months.';

export const mississippiPayers: Record<string, PayerConfig> = {
  'mississippi-medicaid': {
    slug: 'mississippi-medicaid',
    cardDesc: 'ASD services under EPSDT (under 21), mostly through three CCOs; FFS PA via Telligen; 97151 needs no PA; published ASD fee schedule.',
    assessmentPA: {
      value: 'Fee-for-service: no for 97151 (the PA column is blank on the July 2026 ASD fee schedule and 97151 is not on DOM’s procedure-code PA list); 97152 and 0362T require PA. MississippiCAN members: ask the CCO',
      status: 'verified',
      cites: [S.asdFee, S.paList],
    },
    treatmentPA: {
      value: 'Fee-for-service: yes. 97153–97158 and 0373T are flagged PA "Y" on the ASD fee schedule and DOM’s procedure-code PA list; requests go to the UM/QIO, Telligen (Qualitrac portal or fax 800-524-5710). CCO members go to their plan',
      status: 'verified',
      cites: [S.asdFee, S.paList, S.telPA, S.vendors],
    },
    dxRequired: {
      value: 'Yes. The State Plan covers "Autism Spectrum Disorder (ASD) services"; no document read names the diagnosing provider or tools for the FFS benefit',
      status: 'verified',
      cites: [S.spa1620],
    },
    payer: 'Mississippi Medicaid',
    state: 'MS', kind: 'state-medicaid',
    pill: 'Payer Guide · Mississippi Medicaid',
    h1: 'Mississippi Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Mississippi Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Mississippi Medicaid covers ABA: State Plan "ASD services" for EPSDT members under 21, delivered mostly through MississippiCAN (Magnolia, Molina, TrueCare), FFS prior auth through Telligen, the July 2026 ASD fee schedule, and Mississippi’s behavior-analyst license.',
    intro: [
      'Mississippi Medicaid covers applied behavior analysis as "Autism Spectrum Disorder (ASD) services" under its State Plan, for members eligible for EPSDT (under 21). The Medicaid Administrative Code has no ABA chapter: Part 223 is the EPSDT part and does not mention ABA. What sets the rules is the State Plan page added by SPA 16-0020 (who may deliver ASD services), the rate page (SPA 23-0002), the ASD fee schedule and the Division’s procedure-code prior-authorization list, with Part 225 governing telehealth.',
      'Most children are enrolled in MississippiCAN with one of three coordinated care organizations (CCOs): Magnolia Health, Molina Healthcare or TrueCare. UnitedHealthcare Community Plan left MississippiCAN and CHIP after June 30, 2025. The CCO handles authorization and payment for its members; fee-for-service members go through the Division’s UM/QIO, Telligen. For an agency, two facts come first: the BCBA needs a Mississippi Autism Board license, and every provider joins MississippiCAN through the Division’s centralized credentialing, not plan by plan.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as State Plan "ASD services" for EPSDT-eligible members (under 21)' },
      { label: 'Structure', value: 'Mostly MississippiCAN: Magnolia Health, Molina Healthcare, TrueCare (UHC Community Plan exited 6/30/2025); FFS for non-enrolled members' },
      { label: 'FFS prior auth', value: 'Telligen (UM/QIO): PA on 97152–97158, 0362T, 0373T; none on 97151' },
      { label: 'FFS rates (per 15 min)', value: '97151 $34.18 · 97153 $15.08 · 97155/97156 $24.35 · 97154 $9.42 · 0373T $41.49 (July 2026)' },
      { label: 'Who may deliver', value: 'BCBA (plus physicians, psychologists, MH NPs, LCSWs, LPCs in scope); BCaBA and RBT under supervision; licensed practitioner bills' },
      { label: 'Licensure', value: 'Mississippi Autism Board license (LBA/LABA); RBTs registered by their supervisor' },
      { label: 'Timely filing', value: '365 days from date of service (FFS); CCOs 180 days' },
      { label: 'Other insurance', value: 'Medicaid pays last, but EPSDT claims are paid on the usual schedule (pay and chase)' },
    ],
    sections: [
      {
        h2: 'Where ABA sits: the State Plan, EPSDT and the CCOs',
        body: [
          'Mississippi’s State Plan covers ASD services "pursuant to 42 C.F.R. § 440.60 Other Licensed Practitioners." Licensed physicians, licensed psychologists, mental health nurse practitioners, LCSWs, LPCs and Board Certified Behavior Analysts may provide them within scope; a BCaBA "licensed by the Mississippi Board of Autism to practice under the supervision of a MS licensed BCBA" and an RBT "under the direct supervision and direction of a BCBA or BCaBA" may provide them under supervision. The State assures that "licensed practitioners bill for the services provided by the unlicensed practitioners." The ASD fee schedule limits every code to ages 0 through 20, matching EPSDT, which Part 223 describes as all medically necessary services for "a Medicaid eligible child or youth under age twenty-one (21) years." We read the whole Administrative Code (August 2026 edition): BCBAs appear only in Part 225 as telehealth providers, and no Part sets ABA medical-necessity criteria.',
          'The Division contracts with three CCOs for MississippiCAN and CHIP: Magnolia Health, Molina Healthcare and TrueCare (licensed as Mississippi True). UnitedHealthcare Community Plan stopped covering MississippiCAN and CHIP after June 30, 2025, and its members were reassigned across the three plans. All three CCO contracts carry an "Autism Spectrum Disorder (ASD) directed payment arrangement" for MississippiCAN members under 21 with an ASD diagnosis, adopted because few members were "receiving ASD services at a low Medicaid rate," so CCO rates are set by a CMS-approved preprint fee schedule rather than freely negotiated. MississippiCAN providers must exhaust a CCO’s appeal process before asking the Division for a hearing.',
        ],
        cites: [S.spa1620, S.asdFee, S.p223, S.adminCode, S.p225, S.mcPage, S.sep, S.ccoMag, S.p300],
      },
      {
        h2: 'Fee-for-service: Telligen, the PA list and the published rates',
        body: [
          'Fee-for-service ASD services are authorized by the Division’s UM/QIO, Telligen. Telligen prefers its Qualitrac portal and accepts its standardized Prior Authorization Form by fax at 800-524-5710 with the clinical documentation attached; "Failure to complete all fields of the form or to submit the required clinical documentation may/will result in a technical denial." The form asks for both a treating provider NPI and an ordering provider NPI. The Division’s procedure-code PA list (August 2026) requires PA on 97152–97158 under the mental health, outpatient hospital and (for 97155 and 97156) clinic service areas, and on 0362T and 0373T with the HW or HA modifier; 97151 is not on the list.',
          'Rates come from the ASD fee schedule, which the State Plan sets at the lesser of the provider’s usual charge or a statewide uniform fee, the greater of an actuarial rate or the January 1, 2022 rate. The July 2026 schedule pays, per 15-minute unit: 97151 $34.18 (PA blank), 97152 $41.74, 97153 $15.08, 97154 $9.42, 97155 $24.35, 97156 $24.35, 97157 $12.17, 97158 $12.17, 0362T $56.64 and 0373T $41.49, all with PA except 97151, all for ages 0–20, and every "Max Units" cell reads "MUE": "All services and maximums allowed quantities are subject to NCCI procedure-to-procedure or medically unlikely editing even if prior authorized."',
        ],
        cites: [S.telPA, S.vendors, S.paList, S.asdFee, S.spa2302, S.feePage],
      },
      {
        h2: 'Claims operations: filing limits, rounding, EVV and appeals',
        body: [
          'Fee-for-service claims are due "no later than three hundred sixty-five (365) calendar days from the date of service"; a claim a CCO recoups because the member moved to FFS can be filed within 365 days of service or 90 days of the recoupment. The Division defines a clean claim as one processed "without obtaining additional information," and claims under medical-necessity review are not clean. Timed codes follow Part 200 Rule 1.13: the first 15-minute unit needs at least 8 minutes of direct contact, additional units need a full 15 minutes plus at least 8 minutes of the next block, and mixed remainder minutes cannot be combined across codes. Electronic visit verification applies to the waiver, personal care, private duty nursing and home health services listed in Rule 1.14; ABA is not on that list.',
          'A family can appeal a denial, reduction or termination by requesting a hearing "within thirty (30) days of the notice of adverse action," and an ongoing course of treatment continues at the prior level during the appeal. Providers may request an administrative review within 90 days in the situations Rule 1.8 lists (retroactive eligibility, late adjustments, crossovers).',
        ],
        cites: [S.p200, S.p300],
      },
      {
        h2: 'Licensure and network entry',
        body: [MS_LICENSURE_BODY, 'For Medicaid network entry, the CCO provider manuals describe the Division’s centralized process: since July 1, 2022 providers who want to join MississippiCAN "are now required to be enrolled, credentialed, and screened by DOM" through its Credentials Verification Organization, selecting each CCO on the Gainwell application (Magnolia’s 2026 manual). Fee-for-service billing needs Mississippi Medicaid enrollment through the MESA portal.'],
        cites: [S.bacbLic, S.lic13, S.lic5, S.mabRules, S.spa1620, S.magPM],
      },
    ],
    collect: [
      { title: 'Which card', desc: 'Magnolia, Molina, TrueCare (MississippiCAN/CHIP) or fee-for-service Medicaid. The CCO owns authorization and payment for its members.' },
      { title: 'Age', desc: 'The ASD fee schedule covers ages 0–20 (EPSDT). No adult ABA benefit was found.' },
      { title: 'Diagnosis report', desc: 'ASD diagnosis with the evaluator’s credentials and tools; the FFS rules do not name them, so match the CCO’s policy.' },
      { title: 'Ordering provider', desc: 'Telligen’s PA form asks for an ordering provider name and NPI as well as the treating provider.' },
      { title: 'Other insurance', desc: 'Medicaid pays last; capture every other coverage and the primary’s EOBs.' },
    ],
    sources: [S.spa1620, S.spa2302, S.asdFee, S.feePage, S.paList, S.telPA, S.vendors, S.p200, S.p223, S.p225, S.p300, S.p306, S.adminCode, S.mcPage, S.sep, S.ccoMag, S.bacbLic, S.lic13, S.lic5, S.mabRules, S.magPM, S.cfr440, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'The State Plan lets a Mississippi-licensed BCaBA deliver ASD services under the supervision of a Mississippi-licensed BCBA, and an RBT "under the direct supervision and direction of a BCBA or BCaBA"; licensed practitioners "assume professional responsibility" for unlicensed staff. No numeric supervision ratio is published. The Autism Board requires supervisors to follow the BACB supervision policy.',
        status: 'verified',
        cites: [S.spa1620, S.mabRules],
      },
      concurrentBilling: {
        value: 'Not addressed in any Mississippi Medicaid ABA source read. The fee schedule says all codes are subject to NCCI procedure-to-procedure and MUE edits "even if prior authorized," but no rule says whether 97153 and 97155 may be billed for the same clock time.',
        status: 'unverified',
        cites: [S.asdFee],
        verifyVia: 'Telligen (1-855-625-7709) or Division of Medicaid provider services (800-421-2408): ask whether 97155 may overlap 97153 for FFS ASD services.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Every ASD code’s "Max Units" on the July 2026 fee schedule is "MUE": the Medicaid NCCI medically unlikely edit sets the daily ceiling, and authorized units are set per PA. Part 200 Rule 1.13 sets the 8-minute rule for 15-minute units.',
        status: 'verified',
        cites: [S.asdFee, S.p200],
      },
      noteSignature: {
        value: 'Part 200 Rule 1.3 requires records that "fully disclose the extent of services," in permanent form, with corrections lined through, dated and initialed; telehealth records add signed telehealth consent and the reason telehealth was used (Part 225 Rule 1.6). No Mississippi Medicaid source read says who signs an ABA session note or by when.',
        status: 'unverified',
        cites: [S.p200, S.p225],
        verifyVia: 'Division of Medicaid Office of Mental Health or provider services (800-421-2408), or the CCO’s ABA documentation policy for MississippiCAN members.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'The PA list carries ABA codes under mental health services, outpatient hospital and (97155, 97156) clinic service areas, but no Mississippi Medicaid source read restricts home, clinic, school or community ABA settings.',
        status: 'unverified',
        cites: [S.paList, S.spa1620],
        verifyVia: 'Telligen (1-855-625-7709) or the Division’s provider services: ask which place-of-service codes FFS pays for ASD services.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'The licensed practitioner bills: the State Plan assures that "licensed practitioners bill for the services provided by the unlicensed practitioners" (BCaBAs and RBTs). Telligen’s PA form records both the treating provider NPI and the ordering provider NPI.',
        status: 'verified',
        cites: [S.spa1620, S.telPA],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. Every ASD code on the July 2026 fee schedule carries minimum age 0 and maximum age 20, and the PA list’s HA-modifier lines carry member age 000-020.',
        status: 'verified',
        cites: [S.asdFee, S.paList],
      },
      dxRecency: {
        value: 'No diagnosis recency rule appears in the State Plan, fee schedule, PA list or Administrative Code.',
        status: 'unverified',
        cites: [S.spa1620, S.adminCode],
        verifyVia: 'Telligen (1-855-625-7709): ask what diagnostic documentation and dates it expects with an initial ASD request.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'No Mississippi Medicaid source read names who may make the ASD diagnosis for the FFS benefit.',
        status: 'unverified',
        cites: [S.spa1620],
        verifyVia: 'Telligen (1-855-625-7709) or the Division of Medicaid Office of Mental Health.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'No named diagnostic instrument appears in any Mississippi Medicaid source read.',
        status: 'unverified',
        cites: [S.spa1620, S.adminCode],
        verifyVia: 'Telligen (1-855-625-7709).',
        blocker: 'document',
      },
      referral: {
        value: 'No written referral rule was found. Telligen’s PA form asks for an "Ordering Provider Name" and NPI alongside the treating provider, so capture the ordering clinician.',
        status: 'unverified',
        cites: [S.telPA, S.spa1620],
        verifyVia: 'Telligen (1-855-625-7709): ask whether an order or referral must accompany an ASD services request.',
        blocker: 'document',
      },
      telehealth: {
        value: 'Part 225 lists "Board Certified Behavior Analysts (BCBAs) or Board Certified Behavior Analyst-Doctorals (BCBA-Ds)" among the distant-site providers and the "Beneficiary’s home" among originating sites, with no telepresenter needed at home. Telehealth must be live, interactive and audiovisual, is paid at the FFS rate with "the appropriate modifier," and is not covered when the same service is not covered in person; telephone calls are not telehealth outside a declared emergency. Records need signed telehealth consent and the reason telehealth was used. Part 225 publishes no ABA code list or POS.',
        status: 'verified',
        cites: [S.p225],
      },
      authTurnaround: {
        value: 'The Division publishes no ASD decision clock for Telligen. The federal floor for the state agency applies since January 1, 2026: a standard decision "in no case later than 7 calendar days after receiving the request" (extendable 14 days) and an expedited one within 72 hours. MississippiCAN plans are held to a faster contract clock: three calendar days or two business days, 24 hours expedited.',
        status: 'verified',
        cites: [S.cfr440, S.ccoMag, S.ccoMagA4],
      },
      coordinationOfBenefits: {
        value: '"The Division of Medicaid must be billed as the payor of last resort," and providers must file with the other payer first, except that preventive pediatric claims "including EPSDT services" are "paid in accordance with the usual payment schedule" (Part 306 Rule 1.5). Collect the other coverage and bill it; the Division recovers from it later.',
        status: 'verified',
        cites: [S.p306, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Mississippi Medicaid cover ABA therapy?', a: 'Yes, as "ASD services" for EPSDT-eligible members under 21. Most children get it through their MississippiCAN plan (Magnolia, Molina or TrueCare); fee-for-service members go through Telligen for prior authorization.' },
      { q: 'Is there an ABA chapter in the Mississippi Medicaid Administrative Code?', a: 'No. Part 223 is the EPSDT part and does not mention ABA. The rules are in the State Plan (SPA 16-0020 and 23-0002), the ASD fee schedule, the procedure-code PA list and, for telehealth, Part 225.' },
      { q: 'What does Mississippi Medicaid pay for ABA?', a: 'The July 2026 ASD fee schedule pays, per 15-minute unit: 97151 $34.18, 97152 $41.74, 97153 $15.08, 97154 $9.42, 97155 and 97156 $24.35, 97157 and 97158 $12.17, 0362T $56.64 and 0373T $41.49.' },
      { q: 'Does the ABA assessment need prior authorization?', a: 'Not for 97151 under fee-for-service: its PA column is blank and it is not on the PA list. 97152, 0362T and all treatment codes need PA. MississippiCAN members follow their plan’s rules.' },
      { q: 'Is UnitedHealthcare still a Mississippi Medicaid plan?', a: 'No. UnitedHealthcare Community Plan stopped covering MississippiCAN and CHIP after June 30, 2025. The plans are Magnolia Health, Molina Healthcare and TrueCare.' },
      { q: 'Does EVV apply to ABA in Mississippi Medicaid?', a: 'No. Part 200 Rule 1.14 lists the services that need electronic visit verification (waiver personal care and respite, private duty nursing, personal care, home health); ABA is not among them.' },
      { q: 'Can a BCBA licensed in another state treat a Mississippi Medicaid child by telehealth?', a: 'Part 225 allows BCBAs to deliver telehealth into the home, but Mississippi’s licensure law has no exemption for behavior analysts licensed elsewhere and the State Plan expects Mississippi-licensed BCBAs, so plan on a Mississippi Autism Board license (and Medicaid enrollment) first.' },
    ],
  },

  'magnolia-health-mississippi': {
    slug: 'magnolia-health-mississippi',
    family: 'centene',
    cardDesc: 'Centene’s MississippiCAN/CHIP plan: PA on 97152–97158, 0362T, 0373T (not 97151); CP.BH.104 criteria with 6-hour/30-hour day/week screen.',
    assessmentPA: {
      value: 'Not for 97151: Magnolia’s CMS 0057-F PA list names 0362T, 0373T and 97152–97158 under Applied Behavioral Analysis and leaves 97151 off. 97152 and 0362T need PA',
      status: 'verified',
      cites: [S.magPAReq],
    },
    treatmentPA: {
      value: 'Required for 97153–97158 and 0373T; submit the Autism Spectrum Disorders Treatment Form (fax 1-866-694-3649) with the treatment plan; updated assessment and plan at least every six months',
      status: 'verified',
      cites: [S.magPAReq, S.magASD, S.mag104],
    },
    dxRequired: {
      value: 'Yes: a confirmed DSM ASD diagnosis by a licensed physician, psychologist or other licensed professional trained in ASD, with severity level, from a comprehensive diagnostic evaluation (CP.BH.104)',
      status: 'verified',
      cites: [S.mag104],
    },
    payer: 'Magnolia Health (MississippiCAN / CHIP)',
    state: 'MS', kind: 'medicaid-mco', parent: 'Mississippi Medicaid (MississippiCAN)',
    pill: 'Payer Guide · Magnolia Health · Mississippi',
    h1: 'Magnolia Health ABA coverage in Mississippi: the intake guide.',
    metaTitle: 'Magnolia Health Mississippi ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Magnolia Health covers ABA for MississippiCAN members: which codes need prior authorization, the CP.BH.104 criteria (diagnostic evaluation age, tools, hours), CP.BH.105 documentation rules, the 3-day decision clock, timely filing and appeals.',
    intro: [
      'Magnolia Health is Centene’s MississippiCAN and CHIP plan and one of the three coordinated care organizations the Division of Medicaid contracts with. For its members Magnolia, not the state, authorizes and pays for ABA, using Centene’s clinical policies CP.BH.104 (medical necessity) and CP.BH.105 (documentation), both last revised February 2026, and its own Autism Spectrum Disorders Treatment Form.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, State Plan ASD services for members under 21' },
      { label: 'Prior auth', value: '97152–97158, 0362T, 0373T; not 97151' },
      { label: 'Submit', value: 'Autism Spectrum Disorders Treatment Form to UM, phone 1-866-912-6285, fax 1-866-694-3649' },
      { label: 'Decision clock', value: '3 calendar days or 2 business days; 24 hours expedited' },
      { label: 'Timely filing', value: '180 days from DOS; 365 days from primary EOP when secondary' },
      { label: 'Licensure', value: 'Mississippi Autism Board license; DOM centralized credentialing' },
    ],
    sections: [
      {
        h2: 'Prior authorization and the CP.BH.104 criteria',
        body: [
          'Magnolia’s prior-authorization list (CMS Final Rule 0057-F, effective 12/31/2025) lists "Applied Behavioral Analysis 0362T, 0373T, 97152, 97153, 97154, 97155, 97156, 97157, 97158"; 97151 is not on it. Requests go to Utilization Management on the Autism Spectrum Disorders Treatment Form with the treatment plan and SMART goals, the comprehensive diagnostic report (initial requests only), other services the child receives, a sample schedule and documentation of parent involvement; "Information older than 30 days will not be accepted for concurrent review."',
          'CP.BH.104 requires a confirmed DSM diagnosis by "a licensed physician, psychologist, or other licensed professional with specialized training in diagnosis and treatment of ASD," with severity level, and a comprehensive diagnostic evaluation (CDE). To start treatment the CDE must be from the past three years, or, if it is three to five years old, a diagnostic interview within 12 months must update it; to continue, the CDE must be within five years. The CDE must use at least one clinician tool (for example ADOS-2, ADI-R, CARS-2, STAT) and one parent tool (for example M-CHAT-R/F, SCQ, SRS-2). Treatment plans need the signature of the responsible BCBA and the parent. Hours must "not exceed six hours per day up to a total of 30 hours per week" unless documentation justifies more, and the policy expects less than 20 hours a week for a child attending school full time. Protocol modification (97155) should be at least two hours a week or 10% of direct hours, and no more than 20%; caregiver training ideally at least two hours a month. Updated behavior assessments and treatment plans are due at least every six months, and attendance below 80% of authorized hours triggers review.',
        ],
        cites: [S.magPAReq, S.magASD, S.mag104],
      },
      {
        h2: 'Decision clock, claims and appeals',
        body: [
          'Magnolia’s 2026 manual repeats the MississippiCAN contract: standard outpatient decisions "within three (3) calendar days and/or two (2) business days following receipt of the request," with the same window for the provider to send missing information, extendable up to 14 days; expedited decisions within 24 hours. Claims are due within 180 days of service; secondary claims within 365 days of the primary payer’s EOP; reconsiderations and corrected claims within 90 days of the EOP. Claim appeals go on the Claim Appeal Form within 30 calendar days of the adverse determination. The contract requires CCOs to pay 90% of clean claims within 30 days and 99% within 90 days.',
          'Network entry runs through the Division: since July 1, 2022, providers "are now required to be enrolled, credentialed, and screened by DOM," selecting Magnolia on the Gainwell application. ABA rates follow the MississippiCAN ASD directed payment fee schedule written into the CCO contract.',
        ],
        cites: [S.magPM, S.ccoMag, S.ccoMagA4],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [MS_LICENSURE_BODY],
        cites: [S.bacbLic, S.lic13, S.lic5, S.mabRules],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Magnolia MississippiCAN or CHIP on the date of service.' },
      { title: 'Comprehensive diagnostic evaluation', desc: 'Within 3 years to start (or a 12-month update if 3–5 years old), with one clinician tool and one parent tool and the evaluator’s signature and credentials.' },
      { title: 'Signed treatment plan', desc: 'Signed by the responsible BCBA and the parent; SMART goals, crisis plan, school plan if applicable.' },
      { title: 'School schedule', desc: 'CP.BH.104 expects fewer than 20 hours a week for a child in school full time.' },
      { title: 'Other insurance', desc: 'Bill the primary first; Magnolia’s secondary deadline is 365 days from the primary EOP.' },
    ],
    sources: [S.magPAReq, S.magPAList, S.magASD, S.magBH, S.mag104, S.mag105, S.magPM, S.ccoMag, S.ccoMagA4, S.spa1620, S.asdFee, S.p225, S.p306, S.bacbLic, S.lic13, S.lic5, S.mabRules, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'CP.BH.104 requires treatment to be "delivered or supervised by an ABA-credentialed professional," and protocol modification (97155) "for at least two hours per week or 10% of the direct service hours provided (whichever is greater), and no more than 20%." CP.BH.105 adds at least monthly one-on-one protocol work by the ABA supervisor, not by telehealth unless state guidelines allow. The State Plan requires RBTs to work "under the direct supervision and direction of a BCBA or BCaBA."',
        status: 'verified',
        cites: [S.mag104, S.mag105, S.spa1620],
      },
      concurrentBilling: {
        value: 'CP.BH.105 allows 97155 "to demonstrate new or modified protocol to a technician with the member/enrollee present," but says technician supervision alone and team meetings "do not constitute protocol modification." It does not state whether 97153 and 97155 may be billed for the same minutes.',
        status: 'unverified',
        cites: [S.mag105],
        verifyVia: 'Magnolia Provider Services, 1-877-236-0751: ask whether 97153 is payable for the same time as 97155 with the technician present.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'CP.BH.104 screens at six hours a day and 30 hours a week, with more allowed when documentation shows clinical need; under 20 hours a week is expected for a child in school full time. 97153/97154 units not backed by the 10% protocol-modification standard over the six-month authorization are "subject to denial of payment or recoupment" (CP.BH.105).',
        status: 'verified',
        cites: [S.mag104, S.mag105],
      },
      noteSignature: {
        value: 'Session notes must be "completed prior to claim submission" and include the provider organization and rendering provider at the top, exact start and end times, pauses, location, service code, the "Signature of qualified rendering provider/technician," and, for 0373T/97155/97158, the protocol modifications made; caregiver signature is recommended on caregiver-training notes. Treatment-plan documents carry the signatures of the member or guardian, rendering clinician and supervising practitioner.',
        status: 'verified',
        cites: [S.mag105],
      },
      placeOfService: {
        value: 'CP.BH.104 says services "may be provided in various settings (e.g., home, clinic, school, community) and modalities (e.g., in-person, telehealth)," with a detailed school-based plan when ABA is delivered at school, and lists services "in lieu of school, respite care" as a reason to discontinue.',
        status: 'verified',
        cites: [S.mag104],
      },
      billAsProvider: {
        value: 'Magnolia’s documents do not say whose NPI goes on an ABA claim. The State Plan rule applies: "licensed practitioners bill for the services provided by the unlicensed practitioners." Magnolia’s manual requires the rendering provider’s NPI in box 24J with rendering and group taxonomy codes.',
        status: 'verified',
        cites: [S.spa1620, S.magPM],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21: MississippiCAN ASD services follow the State Plan EPSDT benefit (ASD fee schedule ages 0–20), and the CCO contract’s ASD payment arrangement targets members "up to age 21."',
        status: 'verified',
        cites: [S.asdFee, S.ccoMag],
      },
      dxRecency: {
        value: 'To start: CDE within the past three years, or a CDE three to five years old plus a diagnostic interview within 12 months of the request. To continue: CDE within five years (sooner for a provisional diagnosis or other listed reasons).',
        status: 'verified',
        cites: [S.mag104],
      },
      diagnosingProviders: {
        value: 'A licensed physician, psychologist, or other licensed professional with specialized training in diagnosing and treating ASD, or a provider otherwise authorized by state law to diagnose autism.',
        status: 'verified',
        cites: [S.mag104],
      },
      diagnosticTools: {
        value: 'At least one primary clinician tool (STAT, ADI-R, CARS-2, ASRS, ADOS-2, EarliPoint, RITA-T, CSBS DP-ITC or other evidence-based tool) and one parent/caregiver tool (M-CHAT-R/F, SCQ, ASSQ, CAST, SRS-2, SWYC POSI, CSBS DP ITC). A Vineland used as the skills assessment needs an additional direct skills assessment (VB-MAPP, ABLLS-R, AFLS, PEAK, EFL and others).',
        status: 'verified',
        cites: [S.mag104],
      },
      referral: {
        value: 'The recommendation for ABA must come from a licensed physician, psychologist or other licensed professional trained in ASD (it may be in the CDE), and is required whenever an initial or updated CDE is required.',
        status: 'verified',
        cites: [S.mag104],
      },
      telehealth: {
        value: 'CP.BH.104 allows telehealth as a modality; CP.BH.105 requires a HIPAA-compliant platform with the rendering provider’s camera and audio on, and says the monthly one-on-one protocol work is not by telehealth "unless allowed by state guidelines." The state rule (Part 225) lists BCBAs as telehealth providers and the home as an originating site, live audiovisual only, billed with a telehealth modifier.',
        status: 'verified',
        cites: [S.mag104, S.mag105, S.p225],
      },
      authTurnaround: {
        value: 'Standard outpatient decisions within three calendar days and/or two business days of receipt, extendable up to 14 days; expedited within 24 hours (Magnolia 2026 manual; CCO contract § 4.3.3). Request outpatient services at least five calendar days ahead; concurrent requests need information less than 30 days old.',
        status: 'verified',
        cites: [S.magPM, S.ccoMag, S.magASD],
      },
      coordinationOfBenefits: {
        value: 'Magnolia accepts secondary claims within 365 days of the primary payer’s EOP and asks for the primary EOP with the claim. Medicaid pays last (Part 306 Rule 1.5), except that EPSDT claims are paid on the usual schedule.',
        status: 'verified',
        cites: [S.magPM, S.p306, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Magnolia Health cover ABA in Mississippi?', a: 'Yes, for MississippiCAN members under 21, with prior authorization under clinical policy CP.BH.104.' },
      { q: 'Does Magnolia require PA for the ABA assessment?', a: 'Not for 97151, which is not on Magnolia’s PA list. 97152, 0362T and the treatment codes require PA.' },
      { q: 'How old can the diagnostic evaluation be?', a: 'Up to three years to start ABA, or three to five years with a diagnostic interview done within 12 months. For continued treatment the evaluation must be within five years.' },
      { q: 'How fast does Magnolia decide an ABA request?', a: 'Within three calendar days or two business days of receiving it, and 24 hours for an expedited request, with possible 14-day extensions.' },
      { q: 'How many hours will Magnolia approve?', a: 'CP.BH.104 screens at six hours a day and 30 hours a week, and fewer than 20 hours a week for a child in school full time; more is possible with documented clinical need.' },
    ],
  },

  'molina-healthcare-mississippi': {
    slug: 'molina-healthcare-mississippi',
    family: 'molina',
    cardDesc: 'Molina’s MississippiCAN/CHIP plan: ABA requires PA (2026 Pre-Service Review Guide); MCP-482 criteria; BH auth 1-844-826-4335.',
    assessmentPA: {
      value: 'Not stated by code: Molina’s 2026 Pre-Service Review Guide lists "Applied Behavioral Analysis (ABA)" as requiring PA without separating 97151; check the code in Molina’s PA look-up tool',
      status: 'unverified',
      cites: [S.molPA, S.molPAPage],
      verifyVia: 'Molina Prior Authorization Look-Up Tool (Availity) or Healthcare Services, 1-844-826-4335: check 97151, 97152 and 0362T.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required: "Applied Behavioral Analysis (ABA) – for treatment of Autism Spectrum Disorder (ASD)" is on Molina’s Medicaid Pre-Service Review Guide (eff. 1/1/2026); behavioral health non-inpatient fax 1-844-206-4006',
      status: 'verified',
      cites: [S.molPA],
    },
    dxRequired: {
      value: 'Yes: a DSM-5/DSM-5-TR ASD diagnosis by a qualified provider or multidisciplinary team using at least one validated tool (Molina Clinical Policy MCP-482)',
      status: 'verified',
      cites: [S.mcp482, S.molPM],
    },
    payer: 'Molina Healthcare of Mississippi (MississippiCAN / CHIP)',
    state: 'MS', kind: 'medicaid-mco', parent: 'Mississippi Medicaid (MississippiCAN)',
    pill: 'Payer Guide · Molina Healthcare · Mississippi',
    h1: 'Molina Healthcare of Mississippi ABA coverage: the intake guide.',
    metaTitle: 'Molina Healthcare Mississippi ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Molina Healthcare of Mississippi covers ABA for MississippiCAN members: ABA prior authorization, Molina’s MCP-482 criteria, the 3-day contract decision clock, timely filing, telehealth and appeals.',
    intro: [
      'Molina Healthcare of Mississippi is one of the three MississippiCAN and CHIP coordinated care organizations. Its 2026 provider manual says nothing specific about ABA beyond listing autism among its clinical practice guidelines; what it does say is that Molina "follows state-specific criteria, if available, before applying Molina-specific criteria." Mississippi publishes no ABA medical-necessity criteria, so Molina’s national clinical policy MCP-482 (approved June 10, 2026) is the policy to prepare for.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, State Plan ASD services for members under 21' },
      { label: 'Prior auth', value: 'ABA requires PA (2026 Pre-Service Review Guide); code detail in the look-up tool' },
      { label: 'BH authorization', value: 'Phone 1-844-826-4335; non-inpatient fax 1-844-206-4006' },
      { label: 'Decision clock', value: 'Contract: 3 calendar days or 2 business days; manual: expedited within 24 hours' },
      { label: 'Timely filing', value: '180 days from DOS; 90 days to correct a denial' },
      { label: 'Licensure', value: 'Mississippi Autism Board license; DOM centralized credentialing' },
    ],
    sections: [
      {
        h2: 'Prior authorization and Molina’s criteria',
        body: [
          'Molina’s Medicaid Pre-Service Review Guide (effective 01/01/2026) lists "Applied Behavioral Analysis (ABA) – for treatment of Autism Spectrum Disorder (ASD)" under behavioral health services requiring prior authorization and refers providers to the look-up tool for specific codes. Behavioral health authorizations are by phone at 1-844-826-4335 or fax at 1-844-206-4006 for non-inpatient requests; denials are communicated "within one business day of making the denial decision," and a Molina medical director is available for peer-to-peer review, which can be requested within five business days of an adverse determination.',
          'MCP-482 requires a diagnosis "in accordance with DSM-5 or DSM-5-TR criteria," made by "a multidisciplinary team with expertise in diagnosing ASD utilizing at least ONE clinically validated tool (e.g. ADI-R, ADOS-2, CARS-2, or DISCO)," an ASD initiation age of 18 months or older, documentation from the primary care physician of initial developmental concerns, and adaptive or functional assessments (Vineland, ABAS) for a baseline. If the standardized diagnostic assessment is more than 24 months old, updated documentation must describe current symptoms. The treatment plan is developed by a BCBA or BCBA-D, who "provides direct and consistent supervision" to BCaBAs or RBTs; reassessments occur at least every six months; plans above 25 direct hours a week need added justification.',
        ],
        cites: [S.molPA, S.molPM, S.mcp482],
      },
      {
        h2: 'Decision clock, claims and appeals',
        body: [
          'The MississippiCAN contract Molina signed requires standard authorization decisions "within three (3) calendar days and/or two (2) business days," and the manual commits to expedited decisions "no later than 24 hours" after the request. Claims are due within 180 calendar days of service; denied claims may be corrected and resubmitted within 90 days of the denial; as secondary payer, within 180 days of the primary’s final determination. Claim disputes go on the Claims Request for Reconsideration Form within 90 calendar days of the remittance advice, decided within 30 days. Provider appeals are due within 30 calendar days of the adverse determination; after exhausting them, a provider may request a Division of Medicaid administrative hearing within 30 calendar days of Molina’s final decision.',
        ],
        cites: [S.ccoMol, S.molPM],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [MS_LICENSURE_BODY],
        cites: [S.bacbLic, S.lic13, S.lic5, S.mabRules],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Molina MississippiCAN or CHIP on the date of service.' },
      { title: 'Diagnostic report', desc: 'DSM-5/5-TR ASD diagnosis with at least one validated tool (ADOS-2, ADI-R, CARS-2, DISCO); updated symptom documentation if older than 24 months.' },
      { title: 'PCP documentation', desc: 'MCP-482 asks for the primary care physician’s notes on initial developmental concerns, screenings and referrals.' },
      { title: 'Adaptive baseline', desc: 'Vineland or ABAS results.' },
      { title: 'Other insurance', desc: 'Molina pays EPSDT claims and then seeks third-party reimbursement; still record every other coverage.' },
    ],
    sources: [S.molPA, S.molPAPage, S.molPM, S.mcp482, S.ccoMol, S.spa1620, S.asdFee, S.p225, S.p306, S.bacbLic, S.lic13, S.lic5, S.mabRules, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'MCP-482: the BCBA or BCBA-D who develops the plan "provides direct and consistent supervision to Board-Certified Assistant Behavior Analyst (BCaBA) or Registered Behavior Technicians (RBTs)," with no numeric ratio. The State Plan requires RBTs to work "under the direct supervision and direction of a BCBA or BCaBA."',
        status: 'verified',
        cites: [S.mcp482, S.spa1620],
      },
      concurrentBilling: {
        value: 'Neither Molina’s Mississippi manual nor MCP-482 addresses billing 97153 and 97155 for the same time, and the state publishes no rule.',
        status: 'unverified',
        cites: [S.molPM, S.mcp482],
        verifyVia: 'Molina Mississippi Provider Services, 1-844-826-4335, or your Molina provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'MCP-482 sets no daily cap; plans above 25 direct hours a week must meet added high-intensity criteria and be reassessed at least every six months. Daily units are also subject to the Medicaid MUE edits on the state fee schedule.',
        status: 'verified',
        cites: [S.mcp482, S.asdFee],
      },
      noteSignature: {
        value: 'Molina’s manual expects legible signatures and credentials of the provider and staff on paper records, but publishes no ABA-specific session-note rule.',
        status: 'unverified',
        cites: [S.molPM],
        verifyVia: 'Molina Mississippi Provider Services, 1-844-826-4335: ask for its ABA documentation standards.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Molina’s Mississippi documents publish no ABA setting rule.',
        status: 'unverified',
        cites: [S.molPM, S.mcp482],
        verifyVia: 'Molina Mississippi Provider Services, 1-844-826-4335: ask which POS codes it pays for ABA (home, clinic, school, community).',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Molina publishes no ABA rendering-provider rule. The State Plan rule applies: "licensed practitioners bill for the services provided by the unlicensed practitioners."',
        status: 'verified',
        cites: [S.spa1620, S.molPM],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21 under the State Plan EPSDT benefit (ASD fee schedule ages 0–20); MCP-482 adds an ASD initiation age of 18 months or older.',
        status: 'verified',
        cites: [S.asdFee, S.mcp482],
      },
      dxRecency: {
        value: 'If the standardized diagnostic assessment is more than 24 months old, "updated documentation must describe current ASD symptoms and functional impact" (MCP-482).',
        status: 'verified',
        cites: [S.mcp482],
      },
      diagnosingProviders: {
        value: 'A qualified provider or multidisciplinary team with ASD expertise, "e.g., clinical psychologists, developmental pediatrician, pediatric neurologist, psychiatrist, or other licensed clinicians permitted under applicable state law to diagnose ASD."',
        status: 'verified',
        cites: [S.mcp482],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool (ADI-R, ADOS-2, CARS-2 or DISCO, as examples); screening instruments "do not independently establish" the diagnosis; adaptive measures (Vineland, ABAS) for baseline.',
        status: 'verified',
        cites: [S.mcp482],
      },
      referral: {
        value: 'MCP-482 requires documentation from the member’s primary care physician "noting initial developmental concerns, screenings, referrals, and treatments provided."',
        status: 'verified',
        cites: [S.mcp482],
      },
      telehealth: {
        value: 'MCP-482 limits telehealth to "caregiver training, coaching and supervision, or other indirect service components," used with in-person ABA in a documented hybrid model. Molina’s manual says telehealth must come from a participating provider and points to Administrative Code Part 225, which lists BCBAs as telehealth providers with the home as an originating site.',
        status: 'verified',
        cites: [S.mcp482, S.molPM, S.p225],
      },
      authTurnaround: {
        value: 'Standard decisions within three calendar days and/or two business days (MississippiCAN contract § 4.3.3), extendable up to 14 days; expedited "no later than 24 hours" (Molina manual).',
        status: 'verified',
        cites: [S.ccoMol, S.molPM],
      },
      coordinationOfBenefits: {
        value: '"Medicaid is always the payer of last resort": bill the primary and send its EOB. Molina "will pay claims for prenatal care and preventive pediatric care (EPSDT) and then seek reimbursement from third parties." Secondary claims are due within 180 days of the primary’s final determination.',
        status: 'verified',
        cites: [S.molPM, S.p306],
      },
    },
    faq: [
      { q: 'Does Molina Healthcare of Mississippi cover ABA?', a: 'Yes, for MississippiCAN members under 21, with prior authorization; its 2026 Pre-Service Review Guide lists ABA for ASD.' },
      { q: 'Which ABA criteria does Molina use in Mississippi?', a: 'Molina applies state-specific criteria first; Mississippi publishes none for ABA, so its national clinical policy MCP-482 applies.' },
      { q: 'Can ABA be done by telehealth with Molina?', a: 'MCP-482 allows telehealth for caregiver training, coaching, supervision and other indirect parts of ABA, alongside in-person treatment.' },
      { q: 'What is Molina’s timely filing limit in Mississippi?', a: '180 calendar days from the date of service; corrected denied claims within 90 days of the denial.' },
    ],
  },

  'truecare-mississippi': {
    slug: 'truecare-mississippi',
    family: 'caresource',
    cardDesc: 'CareSource’s MississippiCAN/CHIP plan since 7/1/2025: MM-1477 ABA criteria, 6-month reviews, PY-1639 billing rules; LBA required.',
    assessmentPA: {
      value: 'TrueCare’s 2026 PA list says "No prior authorization required for assessments/evaluations" under behavioral health; MM-1477 limits behavioral assessments to 8 hours every 6 months without added justification',
      status: 'verified',
      cites: [S.tcPAList, S.tc1477],
    },
    treatmentPA: {
      value: 'Conflicting documents: MM-1477 and PY-1639 require medical-necessity review before ABA starts and every 6 months, while the 2026 PA list names ABA PA only "in Outpatient Hospital setting (POS 19, 22)"',
      status: 'plan-dependent',
      cites: [S.tc1477, S.tc1639, S.tcPAList],
      verifyVia: 'TrueCare Utilization Management, 1-833-230-2174 (or the Procedure Code Lookup Tool): ask whether ABA in home or clinic needs prior authorization and how the 6-month review is submitted.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a definitive primary ASD diagnosis by a child and adolescent psychiatrist, psychologist, child neurologist or developmental pediatrician, independent of the ABA provider, with a standardized tool (MM-1477)',
      status: 'verified',
      cites: [S.tc1477],
    },
    payer: 'TrueCare (MississippiCAN / CHIP)',
    state: 'MS', kind: 'medicaid-mco', parent: 'Mississippi Medicaid (MississippiCAN)',
    pill: 'Payer Guide · TrueCare · Mississippi',
    h1: 'TrueCare ABA coverage in Mississippi: the intake guide.',
    metaTitle: 'TrueCare Mississippi ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How TrueCare (Mississippi True, a CareSource plan) covers ABA for MississippiCAN members: MM-1477 criteria, who may diagnose, PY-1639 billing and RBT rules, the 3-day decision clock, timely filing and appeals.',
    intro: [
      'TrueCare, licensed as Mississippi True and run with CareSource, joined MississippiCAN and CHIP on July 1, 2025. It is the only Mississippi plan with a Mississippi-specific ABA medical policy (MM-1477, effective May 1, 2026, marked DOM approved) and a Mississippi-specific ABA reimbursement policy (PY-1639, effective August 1, 2026). Both say state sources supersede them.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for members under 21 (MM-1477)' },
      { label: 'Review', value: 'Medical-necessity review before ABA starts and every 6 months; PA list names ABA PA in outpatient hospital (POS 19, 22)' },
      { label: 'Assessment', value: 'No PA for BH assessments/evaluations; 8 hours per 6 months (MM-1477), 6–10 hours (PY-1639)' },
      { label: 'Decision clock', value: '3 calendar days or 2 business days, whichever is less; urgent 24 hours' },
      { label: 'Timely filing', value: '180 days from DOS' },
      { label: 'Practitioners', value: 'Mississippi LBA, LABA under LBA; RBTs listed with the Board' },
    ],
    sections: [
      {
        h2: 'Medical policy MM-1477: who diagnoses, what to send, how often',
        body: [
          'MM-1477 says "Medical necessity review is required for all ABA services initially with a baseline and then, again, every 6 months," and that "ABA services will be provided for members under the age of 21." The diagnosis must be "definitive, primary" and made "upon evaluation independent of the ABA provider and with a relationship with the member" by a child and adolescent psychiatrist, psychologist, child neurologist or developmental pediatrician, using standardized tools (ADOS, ADI-R, CARS-2); if the evaluation is more than 24 months old, a provider letter describing symptoms within the past year is required. A licensed practitioner performs the behavioral assessment, "generally not to exceed 8 hours every 6 months," and the initial plan must be signed by the parent and BCBA and include school placement and hours (IEP/504 information "must be provided to TrueCare"), prior ABA history, coordination with other therapies, a skills assessment (VB-MAPP, ABLLS-R), hours per week and a discharge plan. Continuation requests come every 6 months with updated scores and utilization of approved hours.',
          'The 2026 PA list conflicts in part: it says "No prior authorization required for assessments/evaluations" and lists "Applied Behavior Analysis Treatment (ABA): PA required in Outpatient Hospital setting (POS 19, 22)." Ask TrueCare which applies to home and clinic ABA before starting.',
        ],
        cites: [S.tc1477, S.tcPAList],
      },
      {
        h2: 'Reimbursement policy PY-1639: billing, RBTs and telemedicine',
        body: [
          'PY-1639 requires the treatment record (plans of care, treatment plans, behavior plans, functional assessments) to be submitted to TrueCare "prior to claim submission. Claims will not be accepted without accompanying treatment documentation." Behavior identification assessments must be performed by a BCBA and are "generally, not to exceed 6-10 hours every 6 months." Protocol modification counts only face-to-face time "supervising, observing and interacting in-person" with the member and technician. An RBT may provide ABA only under the supervision of an independent practitioner enrolled in Medicaid and affiliated with the RBT’s organization; if either leaves, the RBT may not continue under that supervisor. Concurrent billing (for example with OT, PT or speech), preparation, cleaning and break time are not billable unless state rules say otherwise. Telemedicine is "reimbursed in the same manner and subject to the same limits as in-person." Units follow 15-minute increments, "attained when the mid-point is passed," with each claim line limited to one date of service and CMS MUEs applied.',
          'TrueCare’s manual sets standard prior-authorization decisions at "no later than three calendar days or two business days, whichever is less," and urgent decisions within 24 hours. Claims are due within 180 days of service; provider appeals within 30 calendar days of the EOP or dispute letter, resolved within 30 days. Requests go through the provider portal, by phone at 1-833-230-2174, by fax at 937-396-3677 (toll-free 844-794-1584) or by email to UMMississippi@MSTrueCare.com.',
        ],
        cites: [S.tc1639, S.tcPM],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: ['MM-1477 requires that "All ABA services must be provided by providers licensed in Mississippi as a Licensed Behavior Analyst (LBA) or Licensed Assistant Behavior Analyst (LABA) under the supervision of an LBA," and that technicians be RBTs "listed with the respective State Licensure Board under a supervising LBA." ' + MS_LICENSURE_BODY],
        cites: [S.tc1477, S.bacbLic, S.lic13, S.lic5, S.mabRules],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm TrueCare MississippiCAN or CHIP on the date of service.' },
      { title: 'Independent diagnosis', desc: 'From a child psychiatrist, psychologist, child neurologist or developmental pediatrician not tied to the ABA provider, with ADOS, ADI-R or CARS-2.' },
      { title: 'Recent symptom letter', desc: 'Needed if the diagnostic evaluation is more than 24 months old.' },
      { title: 'IEP / 504 plan and school hours', desc: 'MM-1477 says IEP/504 information must be provided to TrueCare.' },
      { title: 'Treatment documentation before billing', desc: 'PY-1639: claims are not accepted without the treatment record.' },
    ],
    sources: [S.tc1477, S.tc1639, S.tcPM, S.tcPAList, S.tcPAPage, S.ccoTC, S.spa1620, S.asdFee, S.p225, S.p306, S.bacbLic, S.lic13, S.lic5, S.mabRules, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'ABA must be provided by a Mississippi LBA, or an LABA "under the supervision of an LBA"; RBTs must be listed with the Board under a supervising LBA (MM-1477). PY-1639 points to Mississippi and BACB supervision standards, requires supervision records kept at least 5 years, and lets an RBT work only under an enrolled independent practitioner affiliated with the same organization. No numeric ratio is published.',
        status: 'verified',
        cites: [S.tc1477, S.tc1639],
      },
      concurrentBilling: {
        value: 'PY-1639: "Unless specifically stated in State rules, laws or other sources, concurrent billing (eg, occupational therapy, physical therapy, speech therapy)" is not billable, and protocol modification counts face-to-face time with the member and the BCaBA or RBT during a session. It does not say in so many words whether 97153 and 97155 may both be billed for the same minutes.',
        status: 'unverified',
        cites: [S.tc1639],
        verifyVia: 'TrueCare Provider Services, 1-833-230-2174: ask whether the RBT’s 97153 is payable for minutes billed as 97155.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'TrueCare applies the CMS MUE table and bills one date of service per claim line in 15-minute units attained at the midpoint (PY-1639). Assessments are generally capped at 8 hours (MM-1477) or 6–10 hours (PY-1639) every 6 months. No weekly hour cap is published.',
        status: 'verified',
        cites: [S.tc1639, S.tc1477],
      },
      noteSignature: {
        value: 'PY-1639 says the Department of Mental Health sets documentation requirements and that the treatment record must be completed and submitted before the claim. MM-1477 requires the initial treatment plan "signed by the parent/caregiver and BCBA." Neither says who signs each session note or by when.',
        status: 'unverified',
        cites: [S.tc1639, S.tc1477],
        verifyVia: 'TrueCare Provider Services, 1-833-230-2174, and the DMH Record Guide cited in MM-1477.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'The PA list requires ABA PA "in Outpatient Hospital setting (POS 19, 22)." MM-1477 excludes education-related services under IDEA, services duplicating an IEP, shadowing or para-professional services "in any setting," and recreational settings. PY-1639 says to bill place-of-service codes "as applicable."',
        status: 'verified',
        cites: [S.tcPAList, S.tc1477, S.tc1639],
      },
      billAsProvider: {
        value: 'PY-1639: providers bill "only those services rendered by a qualified provider or by a provider under direct supervision," "at the appropriate practitioner level (ie, modifiers)," and may never bill for services rendered by another practitioner who is enrolled or eligible to enroll. The State Plan has licensed practitioners bill for BCaBAs and RBTs.',
        status: 'verified',
        cites: [S.tc1639, S.spa1620],
      },
    },
    intakeGates: {
      ageLimit: {
        value: '"ABA services will be provided for members under the age of 21" (MM-1477).',
        status: 'verified',
        cites: [S.tc1477],
      },
      dxRecency: {
        value: 'If the diagnostic evaluation was completed more than 24 months before the request, a provider letter describing clinical symptoms within the past year is required (MM-1477).',
        status: 'verified',
        cites: [S.tc1477],
      },
      diagnosingProviders: {
        value: 'A child and adolescent psychiatrist, psychologist, child neurologist or developmental pediatrician, evaluating "independent of the ABA provider and with a relationship with the member."',
        status: 'verified',
        cites: [S.tc1477],
      },
      diagnosticTools: {
        value: 'Standardized diagnostic tools as part of the referral, for example ADOS, ADI-R or CARS-2; goals built on a skills assessment such as VB-MAPP or ABLLS-R.',
        status: 'verified',
        cites: [S.tc1477],
      },
      referral: {
        value: 'The diagnosis and standardized tools come "as part of a referral for services" from the independent diagnosing clinician (MM-1477); no separate PCP referral is named.',
        status: 'verified',
        cites: [S.tc1477],
      },
      telehealth: {
        value: 'MM-1477: ABA "may be provided via telehealth in instances deemed medically necessary with supporting documentation that provides a plan for the provision of service delivery," but must "not [be] used as the primary method of treatment." PY-1639 reimburses telemedicine like in-person service. Part 225 lists BCBAs as telehealth providers and the home as an originating site.',
        status: 'verified',
        cites: [S.tc1477, S.tc1639, S.p225],
      },
      authTurnaround: {
        value: 'Standard decisions "no later than three calendar days or two business days, whichever is less," extendable up to 14 days; urgent within 24 hours; retrospective within 20 business days (TrueCare manual; CCO contract § 4.3.3).',
        status: 'verified',
        cites: [S.tcPM, S.ccoTC],
      },
      coordinationOfBenefits: {
        value: '"When a member has other insurance, Medicaid is always the payer of last resort. TrueCare will not pay more than the Medicaid rate totals," and the primary payer’s determination must accompany the claim (PY-1639). Original claims with a primary EOB are due within 180 days of service or 90 days of the primary EOB (manual).',
        status: 'verified',
        cites: [S.tc1639, S.tcPM],
      },
    },
    faq: [
      { q: 'Does TrueCare cover ABA in Mississippi?', a: 'Yes, for MississippiCAN members under 21, under its Mississippi medical policy MM-1477.' },
      { q: 'Who can diagnose autism for TrueCare ABA?', a: 'A child and adolescent psychiatrist, psychologist, child neurologist or developmental pediatrician, evaluating independently of the ABA provider, with a standardized tool such as the ADOS, ADI-R or CARS-2.' },
      { q: 'Does TrueCare require prior authorization for ABA?', a: 'Its policies require a medical-necessity review before ABA starts and every 6 months, while its 2026 PA list names ABA PA only in outpatient hospital settings. Confirm with TrueCare UM (1-833-230-2174) before starting.' },
      { q: 'Can RBTs bill TrueCare directly?', a: 'No. RBTs work under the supervision of an enrolled independent practitioner in the same organization, and the supervising practitioner bills at the appropriate practitioner level.' },
      { q: 'Does TrueCare pay for ABA by telehealth?', a: 'Yes when medically necessary and documented, but not as the primary method of treatment; telemedicine is paid the same as in person.' },
    ],
  },

  'aetna-mississippi': {
    slug: 'aetna-mississippi',
    family: 'aetna',
    cardDesc: 'Aetna ABA guide + precert list, layered on Mississippi’s § 83-9-26 mandate (age 8 / 25 hr) and LBA licensure.',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: ABA codes are on the precertification list; progress is evaluated every six months; the plan sets the reauthorization interval',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): confirm precertification and the reauthorization interval.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM ASD (F84.0, F84.3–F84.9) from an appropriate provider; ABA for other diagnoses is experimental',
      status: 'verified',
      cites: [S.aetnaGuide, S.aetnaCPB],
    },
    payer: 'Aetna in Mississippi',
    state: 'MS', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Mississippi',
    h1: 'Aetna ABA coverage in Mississippi: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Mississippi: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Mississippi families: the national medical necessity guide and precertification, Mississippi’s § 83-9-26 autism mandate (age 8 and 25 hours a week unless extended), the Prior Authorization Reform Act, telehealth parity and LBA licensure.',
    intro: [
      'For a Mississippi intake team an Aetna card means three layers: Aetna’s national ABA medical necessity guide and precertification list, Mississippi’s autism mandate in § 83-9-26, and the plan’s funding and market, which decide whether the mandate applies. Aetna runs no MississippiCAN plan.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s national ABA guide' },
      { label: 'State mandate', value: 'Miss. Code Ann. § 83-9-26 (HB 885, 2015; policies issued or renewed from 1/1/2016)' },
      { label: 'Mandate age', value: 'ABA not required beyond age 8, unless medical necessity for an extension is shown' },
      { label: 'Mandate caps', value: '25 hours/week of ABA, no more than 10 hours/week of licensed behavior analyst time; extendable on medical necessity; no less favorable dollar limits than medical' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; non-grandfathered individual and small-group ACA plans; small employers (≤100) must only offer it' },
      { label: 'Licensure', value: 'Mississippi Autism Board license (LBA/LABA); RBTs registered under the supervisor' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Mississippi',
        body: [
          'Aetna covers ABA for autism spectrum disorder (ICD-10 F84.0, F84.3–F84.9) under its ABA medical necessity guide, with CPB 0554 treating ABA for other indications as experimental and CPB 0648 covering ASD evaluation. The behavioral health precertification list (effective August 1, 2024) names 97151 through 97158, 0362T and 0373T. Medical necessity needs functional impairment "on a standardized scale of functioning in the past 12 months" at least one standard deviation below the mean, or significant risk of harm, with hours set by a severity grid and protocol modification authorized at 1 to 2 hours per 10 hours of treatment. Progress is evaluated every six months. The guide’s only state exhibit is Maryland; "Other state laws and regulations may apply in other states," which in Mississippi means § 83-9-26.',
        ],
        cites: [S.aetnaGuide, S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert],
      },
      {
        h2: 'The Mississippi mandate: what it guarantees',
        body: [MS_MANDATE_BODY],
        cites: [S.mandate, S.midAutism],
      },
      {
        h2: 'Licensure, telehealth and out-of-state BCBAs',
        body: [MS_LICENSURE_BODY, MS_TELE_COMMERCIAL],
        cites: [S.bacbLic, S.lic13, S.lic5, S.mabRules, S.tele351, S.sb2415],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA, and how fast must it pay?',
        body: [
          'Aetna publishes no ABA rate table; its office manual (6/26) treats rates as a contract term ("your direct Aetna rates will apply unless we specifically notify you otherwise") and says members cannot be charged more than the contracted rate. ' + MS_PROMPT_PAY + ' The public benchmark is Mississippi Medicaid’s fee schedule (' + MS_FFS_RATES + ').',
        ],
        cites: [S.aetnaOM, S.promptPay, S.asdFee],
      },
    ],
    collect: [
      { title: 'Plan funding and market', desc: 'Fully insured large group (mandate applies), small group or individual ACA plan (exempt), or self-funded ERISA (plan document governs).' },
      { title: 'Child’s age', desc: 'The mandate lets ABA stop at age 8 unless an extension is medically necessary; check the plan’s own terms.' },
      { title: 'Diagnosis report', desc: 'DSM ASD diagnosis by a licensed psychologist, psychiatrist or physician, with the evaluation date.' },
      { title: 'Standardized functional measure', desc: 'Within the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS).' },
      { title: 'Physician or psychologist order', desc: 'The mandate covers treatment prescribed or ordered by a licensed physician or psychologist.' },
    ],
    sources: [S.aetnaGuide, S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.mandate, S.midAutism, S.bacbLic, S.lic13, S.lic5, S.mabRules, S.tele351, S.sb2415, S.sb2140, S.promptPay, S.cobReg, S.erisa, S.cfr433, S.tricare, S.champva, S.asdFee],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s Network Participation Criteria (5/26) require "A minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional by a BCBA or licensed psychologist "for each 10 hours of applied behavior analysis," plus the supervisor "onsite with the child at least one hour a month," and "All BCBAs, BCaBAs and paraprofessionals must meet state requirements." In Mississippi that means a licensed behavior analyst and Board-registered RBTs; § 83-9-26 requires services "under the supervision or direction of a licensed behavior analyst or licensed psychologist."',
        status: 'verified',
        cites: [S.aetnaNPC, S.mabRules, S.mandate],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s ABA medical necessity guide, CPB 0554 or the precertification list.',
        status: 'unverified',
        cites: [S.aetnaGuide, S.aetnaCPB],
        verifyVia: 'Aetna provider services or your participation agreement: ask whether 97153 and 97155 may be billed for the same time.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Aetna publishes no daily cap; typical intensities are 10–25 hours a week (comprehensive) and 1–20 (focused), not limits. For fully insured Mississippi plans the mandate allows a 25-hour weekly ABA limit and 10 hours of licensed behavior analyst time, extendable on medical necessity.',
        status: 'verified',
        cites: [S.aetnaGuide, S.mandate],
      },
      noteSignature: {
        value: 'Aetna’s guide sets treatment-plan content, not who signs session notes or when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Your Aetna participation agreement and the Aetna Behavioral Health documentation standards.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Aetna’s guide is setting-neutral for outpatient ABA and expects coordination with the school; § 83-9-26(7) does not require insurers to cover services schools must provide under an IEP, IFSP or IDEA.',
        status: 'verified',
        cites: [S.aetnaGuide, S.mandate],
      },
      billAsProvider: {
        value: 'Services "must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists" where in scope. Mississippi licenses behavior analysts, so the billing clinician is a Mississippi LBA (or licensed psychologist).',
        status: 'verified',
        cites: [S.aetnaGuide, S.lic13],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s ABA policies set no age cap; the guide’s age ranges are typical, not limiting.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.mandate],
        verifyVia: 'Live benefits verification: establish fully insured vs. self-funded and the market segment, then the plan’s ABA age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but functional impairment must be shown on a standardized scale administered in the past 12 months.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'An appropriate provider: "licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice." For fully insured Mississippi plans, § 83-9-26 defines diagnosis as performed "by a licensed psychologist or licensed physician."',
        status: 'verified',
        cites: [S.aetnaGuide, S.mandate],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale; the ABA guide requires a standardized functional measure from the past 12 months (VABS-3, ABAS, VB-MAPP or ABLLS).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s ABA policies require precertification, not a physician referral.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.mandate],
      },
      telehealth: {
        value: 'Aetna’s office manual (6/26) says Aetna Behavioral Health "offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out," and providers must hold "the proper licensure based on state requirements." ' + MS_TELE_COMMERCIAL + ' Aetna’s ABA telehealth code list was not available in a current document.',
        status: 'plan-dependent',
        cites: [S.aetnaOM, S.tele351, S.sb2415],
        verifyVia: 'Availity or the precertification line on the card: ask which ABA codes, POS and modifier Aetna pays by telehealth on this plan.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: MS_PA_LAW + ' Aetna publishes no Mississippi-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.sb2140, S.erisa],
        verifyVia: 'At verification ask whether the plan is fully insured (Mississippi-regulated) or self-funded (ERISA).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: MS_COB,
        status: 'plan-dependent',
        cites: [S.cobReg, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Aetna at verification for the member’s coordination-of-benefits order and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Mississippi?', a: 'Yes, for ASD under its national medical necessity guide, with Mississippi’s § 83-9-26 mandate layered on fully insured large-group and grandfathered plans.' },
      { q: 'Does Mississippi’s autism law cap ABA by age?', a: 'Yes: § 83-9-26 lets fully insured plans stop ABA after age 8 and limit it to 25 hours a week, but coverage may be extended when medical necessity is shown under an ongoing treatment plan.' },
      { q: 'Does the Aetna ABA assessment need precertification?', a: 'Yes. 97151 is on Aetna’s behavioral health precertification list with the other ABA codes.' },
      { q: 'Does a BCBA need a Mississippi license to bill Aetna?', a: 'Yes in practice: Mississippi licenses behavior analysts, and Aetna requires state requirements to be met and ABA billed by a licensed behavior analyst where the state licenses them.' },
      { q: 'How fast must Aetna decide an ABA request in Mississippi?', a: 'For fully insured plans, the Prior Authorization Reform Act sets 7 calendar days after all necessary information (48 hours if urgent), or the request is deemed authorized. Self-funded plans follow ERISA’s 15-day rule.' },
    ],
  },

  'cigna-mississippi': {
    slug: 'cigna-mississippi',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide (no PA on assessment codes) + Mississippi’s § 83-9-26 mandate and LBA licensure.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the policy covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: after the assessment, submit the Applied Behavior Analysis Prior Authorization Form with the treatment plan',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD under DSM-5-TR criteria, diagnosed by an independently licensed professional whose board allows diagnosis; provisional or educational identification does not count',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Mississippi',
    state: 'MS', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Mississippi',
    h1: 'Cigna / Evernorth ABA coverage in Mississippi: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Mississippi: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Mississippi families: EN0499, no PA on assessment codes, Mississippi’s § 83-9-26 autism mandate (age 8 and 25 hours unless extended), telehealth, the Prior Authorization Reform Act and LBA licensure.',
    intro: [
      'For a Mississippi intake team a Cigna card means Evernorth’s national ABA policy EN0499 and the Cigna autism resource guide, Mississippi’s autism mandate in § 83-9-26, and the plan’s funding type. Many Cigna members are on self-funded employer plans, which sit outside the state mandate, so check funding first. Cigna runs no MississippiCAN plan.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'State mandate', value: 'Miss. Code Ann. § 83-9-26 (HB 885, 2015; policies issued or renewed from 1/1/2016)' },
      { label: 'Mandate age', value: 'ABA not required beyond age 8, unless medical necessity for an extension is shown' },
      { label: 'Mandate caps', value: '25 hours/week of ABA, no more than 10 hours/week of licensed behavior analyst time; extendable on medical necessity; no less favorable dollar limits than medical' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; non-grandfathered individual and small-group ACA plans; small employers (≤100) must only offer it' },
      { label: 'Licensure', value: 'Mississippi Autism Board license (LBA/LABA); RBTs registered under the supervisor' },
      { label: 'Fee schedule', value: 'Not public — Exhibit A of your Evernorth Provider Agreement; Evernorth Provider Services 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Mississippi',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). The autism resource guide says "Prior authorization is no longer required for assessment … codes 97151, 97152, or 0362T with a diagnosis of autism, as long as the provider is independently licensed or a Board Certified Behavior Analyst® and the patient’s policy covers ABA services"; treatment needs the completed assessment and treatment plan on the ABA Prior Authorization Form, ideally requested up to 30 days before or two weeks after the start date. A full-text check of EN0499 and the guide found no mention of Mississippi, so the national criteria apply.',
        ],
        cites: [S.en0499, S.cignaARG],
      },
      {
        h2: 'The Mississippi mandate: what it guarantees',
        body: [MS_MANDATE_BODY],
        cites: [S.mandate, S.midAutism],
      },
      {
        h2: 'Licensure, telehealth and out-of-state BCBAs',
        body: [MS_LICENSURE_BODY, MS_TELE_COMMERCIAL, 'Evernorth adds that providers "must meet all state requirements to provide virtual behavioral services, including any licenses and certifications."'],
        cites: [S.bacbLic, S.lic13, S.lic5, S.mabRules, S.tele351, S.sb2415, S.ebhAdmin],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA, and how fast must it pay?',
        body: [
          'Cigna publishes no ABA rates. Evernorth’s Administrative Guidelines (September 2026) say the Provider Agreement terms "include the reimbursement rates applicable to covered services" and tell ABA providers: "For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement." Virtual services carry modifier 95, which "will not change the reimbursement." ' + MS_PROMPT_PAY + ' The public benchmark is Mississippi Medicaid’s fee schedule (' + MS_FFS_RATES + ').',
        ],
        cites: [S.ebhAdmin, S.promptPay, S.asdFee],
      },
    ],
    collect: [
      { title: 'Plan funding and market', desc: 'Fully insured large group (mandate applies), small group or individual ACA plan (exempt), or self-funded ERISA (plan document governs).' },
      { title: 'Child’s age', desc: 'The mandate lets ABA stop at age 8 unless an extension is medically necessary; EN0499 itself sets no age cap.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and license type, and the date of the most recent diagnosis.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Physician or psychologist order', desc: 'The mandate covers treatment prescribed or ordered by a licensed physician or psychologist.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.mandate, S.midAutism, S.bacbLic, S.lic13, S.lic5, S.mabRules, S.tele351, S.sb2415, S.sb2140, S.promptPay, S.cobReg, S.erisa, S.cfr433, S.tricare, S.champva, S.asdFee],
    deliveryRules: {
      supervision: {
        value: 'Case supervision by a BCBA, Licensed Behavior Analyst or independently licensed clinician with ABA training, at "one to two hours per ten hours of direct treatment"; at 10 hours a week or less, at least one to two hours a week of direct case supervision (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      concurrentBilling: {
        value: '"Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)."',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap; ABA codes bill in 15-minute units only with 97151–97158, 0362T and 0373T. For fully insured Mississippi plans the mandate permits a 25-hour weekly ABA limit, extendable on medical necessity.',
        status: 'verified',
        cites: [S.cignaARG, S.mandate],
      },
      noteSignature: {
        value: 'Each service record needs the date and time, location, intervention, who was present, and the "Name, credential (if applicable), and signature of ABA provider who rendered the service" (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'EN0499 excludes services "primarily educational or vocational in nature" and requires services in academic or vocational settings to meet the direct-treatment definition; § 83-9-26(7) leaves school IEP/IDEA services with the schools.',
        status: 'verified',
        cites: [S.en0499, S.mandate],
      },
      billAsProvider: {
        value: '"Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." On a CMS-1500, list "only a BCBA or other licensed provider in box 33"; electronic claims use payer ID 62308.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 says access to focused intervention "should not be restricted by age"; age terms come from the benefit plan and any controlling mandate.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.mandate],
        verifyVia: 'Live benefits verification: establish fully insured vs. self-funded and the market segment, then the plan’s ABA age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs the date it was most recently made; standardized instruments and baseline data must be within 60 days before treatment, current data within 60 days of a request (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional licensed to practice independently whose licensure board considers diagnostics within scope (EN0499). For fully insured Mississippi plans, § 83-9-26 defines diagnosis as performed by a licensed psychologist or licensed physician.',
        status: 'verified',
        cites: [S.en0499, S.mandate],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated; it must be reliable, valid, standardized, measure both DSM-5-TR domains and be the current edition (Vineland-3, not Vineland-II).',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral; assessments need no PA with an autism diagnosis when the provider is independently licensed or a BCBA.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.mandate],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" (autism resource guide), and EN0499 allows in-person, telehealth or hybrid delivery. Evernorth bills virtual services with modifier 95 and requires the provider to meet the state’s licensure rules, which in Mississippi means a Mississippi license.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ebhAdmin],
      },
      authTurnaround: {
        value: MS_PA_LAW + ' Cigna/Evernorth publishes no Mississippi-specific ABA turnaround; its resource guide warns a late request "could delay the determination for up to 30 days."',
        status: 'plan-dependent',
        cites: [S.sb2140, S.erisa, S.cignaARG],
        verifyVia: 'At verification ask whether the plan is fully insured (Mississippi-regulated) or self-funded (ERISA).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: MS_COB,
        status: 'plan-dependent',
        cites: [S.cobReg, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Cigna/Evernorth at verification for the member’s coordination-of-benefits order and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Mississippi?', a: 'Yes, under EN0499 for ASD, with Mississippi’s § 83-9-26 mandate layered on fully insured large-group and grandfathered plans.' },
      { q: 'Does the Cigna ABA assessment need prior authorization?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'Can a BCBA licensed in another state treat a Mississippi Cigna member by telehealth?', a: 'Cigna covers all ABA codes by telehealth, but Evernorth requires providers to meet the state’s licensure rules and Mississippi’s law has no exemption for behavior analysts licensed elsewhere, so get a Mississippi Autism Board license first.' },
      { q: 'What does Cigna pay for ABA in Mississippi?', a: 'Cigna publishes no ABA rates; your fee schedule is Exhibit A of your Evernorth Provider Agreement. Mississippi Medicaid’s 97153 rate ($15.08 per 15 minutes) is the only public benchmark.' },
    ],
  },

  'unitedhealthcare-mississippi': {
    slug: 'unitedhealthcare-mississippi',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + Mississippi’s § 83-9-26 mandate; no Mississippi state supplement; UHC left MississippiCAN 6/30/2025.',
    assessmentPA: {
      value: 'Required: Optum’s ABA Supplemental Clinical Criteria require prior authorization for ABA "unless otherwise specified or mandated by contract or law"',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required: treatment is authorized after the assessment; the review interval is set per authorization',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express support: ask what review interval will be set on this member’s ABA authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5-TR ASD confirmed by the diagnosing clinician with at least one validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Mississippi',
    state: 'MS', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Mississippi',
    h1: 'UnitedHealthcare / Optum ABA coverage in Mississippi: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Mississippi: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Mississippi families: Optum’s ABA criteria and prior authorization, Mississippi’s § 83-9-26 autism mandate, telehealth limits, the Prior Authorization Reform Act, LBA licensure, and UHC’s exit from MississippiCAN.',
    intro: [
      'For a Mississippi intake team a UnitedHealthcare card means Optum Behavioral Health’s national ABA criteria, Mississippi’s autism mandate in § 83-9-26, and the plan’s funding type. Since July 1, 2025 UnitedHealthcare Community Plan is no longer a MississippiCAN or CHIP plan, so a UHC card on a Mississippi child is commercial (or Medicare); a family still holding a UHC Community Plan Medicaid card needs to check which CCO they were moved to.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'Miss. Code Ann. § 83-9-26 (HB 885, 2015; policies issued or renewed from 1/1/2016)' },
      { label: 'Mandate age', value: 'ABA not required beyond age 8, unless medical necessity for an extension is shown' },
      { label: 'Mandate caps', value: '25 hours/week of ABA, no more than 10 hours/week of licensed behavior analyst time; extendable on medical necessity; no less favorable dollar limits than medical' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; non-grandfathered individual and small-group ACA plans; small employers (≤100) must only offer it' },
      { label: 'Licensure', value: 'Mississippi Autism Board license (LBA/LABA); RBTs registered under the supervisor' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Mississippi',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026): "Prior authorization is required for ABA *(unless otherwise specified or mandated by contract or law)," and continued-service reviews look hard at use below 80% of authorized hours. Optum’s ABA State Mandates supplement (annual review July 2026) lists Arizona, California, Connecticut, Florida, Massachusetts, New Jersey, New York, Ohio and Pennsylvania; Mississippi is not there, so no Mississippi-specific criteria modify the commercial policy. UnitedHealthcare Community Plan stopped covering MississippiCAN and CHIP after June 30, 2025.',
        ],
        cites: [S.optumSCC, S.optumSM, S.sep],
      },
      {
        h2: 'The Mississippi mandate: what it guarantees',
        body: [MS_MANDATE_BODY],
        cites: [S.mandate, S.midAutism],
      },
      {
        h2: 'Licensure, telehealth and out-of-state BCBAs',
        body: [MS_LICENSURE_BODY, MS_TELE_COMMERCIAL],
        cites: [S.bacbLic, S.lic13, S.lic5, S.mabRules, S.tele351, S.sb2415],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA, and how fast must it pay?',
        body: [
          'Optum pays from the contract. Its National Network Manual (effective Sept. 1, 2026) defines the "Fee Maximum" as the most a participating provider may be paid and says "Reimbursement to clinicians is based upon licensure rather than degree." The commercial ABA Reimbursement Policy (2022RP501A, updated 06/2026) puts the credential on every line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a doctoral-level provider, and "There is no CPT code for reporting indirect services separately." ' + MS_PROMPT_PAY + ' The public benchmark is Mississippi Medicaid’s fee schedule (' + MS_FFS_RATES + ').',
        ],
        cites: [S.optumNNM, S.optumReimb, S.promptPay, S.asdFee],
      },
    ],
    collect: [
      { title: 'Plan funding and market', desc: 'Fully insured large group (mandate applies), small group or individual ACA plan (exempt), or self-funded ERISA (plan document governs).' },
      { title: 'Medicaid or commercial?', desc: 'UHC Community Plan left MississippiCAN on 6/30/2025; a Medicaid child now belongs to Magnolia, Molina or TrueCare.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD with severity, confirmed with a validated tool (ADI-R, ADOS-2 and others).' },
      { title: 'Physician or psychologist order', desc: 'The mandate covers treatment prescribed or ordered by a licensed physician or psychologist.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumNNM, S.optumReimb, S.sep, S.mandate, S.midAutism, S.bacbLic, S.lic13, S.lic5, S.mabRules, S.tele351, S.sb2415, S.sb2140, S.promptPay, S.cobReg, S.erisa, S.cfr433, S.tricare, S.champva, S.asdFee],
    deliveryRules: {
      supervision: {
        value: 'Optum’s criteria require direct case supervision of 1–2 hours for every 10 hours of direct treatment, by a BCBA or licensed behavioral health clinician; technicians should be RBTs or otherwise certified "as allowable by state mandate," and parents should not serve as their own child’s RBT. In Mississippi the supervisor must be licensed by the Autism Board and RBTs registered under them.',
        status: 'verified',
        cites: [S.optumSCC, S.mabRules],
      },
      concurrentBilling: {
        value: 'Not addressed: the criteria define direct case supervision as occurring during direct treatment but do not state the billing consequence.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual and your participating-provider agreement, or a written coding determination from Optum.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap in Optum’s criteria; requested hours must be justified, and use below 80% of authorized hours must be explained at review. For fully insured Mississippi plans the mandate permits a 25-hour weekly ABA limit, extendable on medical necessity.',
        status: 'verified',
        cites: [S.optumSCC, S.mandate],
      },
      noteSignature: {
        value: 'Not addressed in Optum’s ABA criteria, which set what must be documented for coverage, not who signs session notes.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual (documentation standards) and your participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Not covered: services that are not ABA, "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA; school coordination is covered. § 83-9-26(7) leaves IEP services with the schools.',
        status: 'verified',
        cites: [S.optumSCC, S.mandate],
      },
      billAsProvider: {
        value: 'Every line carries the rendering credential modifier: HM (RBT), HN (BCaBA), HO (master’s-level BCBA or licensed clinician), HP (doctoral level); the RBT definition notes that "State regulatory requirements may supplement, modify or supersede this policy."',
        status: 'verified',
        cites: [S.optumReimb],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Optum’s criteria carry no age criterion; the benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.mandate],
        verifyVia: 'Provider Express benefits check: establish fully insured vs. self-funded and the market segment, then the plan’s ABA age terms. The Insurance Department lists UHC as having voluntarily removed ABA age limits; confirm on this plan.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with severity using validated tools, and progress is reassessed over 6-month periods.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'A state-licensed physician, psychologist or other state-licensed clinician qualified to diagnose under DSM-5-TR. For fully insured Mississippi plans, § 83-9-26 defines diagnosis as performed by a licensed psychologist or licensed physician.',
        status: 'verified',
        cites: [S.optumSCC, S.mandate],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool from Optum’s non-exhaustive list (screens such as M-CHAT, CARS-2, STAT; diagnostic tools such as ADI-R, ADOS-2, DISCO); baseline measures such as VB-MAPP, ABLLS-R, Vineland or SRS.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral in Optum’s criteria; prior authorization is required.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.mandate],
      },
      telehealth: {
        value: 'Optum’s telehealth billing guide (updated September 2025): "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157," billed POS 02 or POS 10 (POS 11 is not a telehealth POS). The 97151 assessment and 97153 are not on the list, and the criteria say telehealth is "not intended to supplant in" person care. ' + MS_TELE_COMMERCIAL + ' Ask Optum how it applies the three-code list to a fully insured Mississippi plan.',
        status: 'verified',
        cites: [S.optumTele, S.optumSCC, S.tele351, S.sb2415],
      },
      authTurnaround: {
        value: MS_PA_LAW + ' UnitedHealthcare/Optum publishes no Mississippi-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.sb2140, S.erisa],
        verifyVia: 'At verification ask whether the plan is fully insured (Mississippi-regulated) or self-funded (ERISA).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: MS_COB,
        status: 'plan-dependent',
        cites: [S.cobReg, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask UnitedHealthcare/Optum at verification for the member’s coordination-of-benefits order and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Mississippi?', a: 'Yes, under Optum’s national ABA criteria for ASD, with Mississippi’s § 83-9-26 mandate layered on fully insured large-group and grandfathered plans.' },
      { q: 'Is UnitedHealthcare still a Mississippi Medicaid plan?', a: 'No. UnitedHealthcare Community Plan stopped covering MississippiCAN and CHIP after June 30, 2025; the Medicaid plans are Magnolia, Molina and TrueCare.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in Mississippi?', a: 'Optum’s commercial guide allows telehealth only for 97155, 97156 and 97157 (POS 02 or 10). Mississippi’s § 83-9-351 requires state-regulated plans to cover telemedicine to the same extent as in person, so ask Optum how it applies the list on a fully insured plan.' },
      { q: 'Does Optum have Mississippi-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement does not list Mississippi.' },
      { q: 'What does UnitedHealthcare pay for ABA in Mississippi?', a: 'Optum pays up to the Fee Maximum in your agreement with a credential modifier on each line (HM RBT, HN BCaBA, HO BCBA, HP doctoral). Mississippi Medicaid’s 97153 rate ($15.08 per 15 minutes) is the only public benchmark.' },
    ],
  },

  'blue-cross-blue-shield-mississippi': {
    slug: 'blue-cross-blue-shield-mississippi',
    family: 'bcbs',
    cardDesc: 'BCBSMS medical policy L.8.01.403: no age limit, no hour cap (from 10/15/2025), no treatment-plan PA (from 8/1/2024); 97151 once per 6 months.',
    assessmentPA: {
      value: 'No prior authorization since 8/1/2024 for fully insured, self-funded group and State Health Plan members; the policy still requires a physician or psychologist referral for the ABA assessment, and 97151 is medically necessary once every six months. FEP members remain subject to PA',
      status: 'verified',
      cites: [S.bcbsASD],
    },
    treatmentPA: {
      value: 'No: "submission of the individualized ABA treatment plan for approval by the Company is no longer required" for fully insured and self-funded group members (eff. 8/1/2024); FEP members remain subject to prior authorization',
      status: 'verified',
      cites: [S.bcbsASD],
    },
    dxRequired: {
      value: 'Yes: a licensed physician (M.D./D.O.) or licensed psychologist must diagnose ASD meeting all DSM-5 criteria',
      status: 'verified',
      cites: [S.bcbsASD],
    },
    payer: 'Blue Cross & Blue Shield of Mississippi',
    state: 'MS', kind: 'commercial',
    pill: 'Payer Guide · Blue Cross & Blue Shield of Mississippi',
    h1: 'Blue Cross & Blue Shield of Mississippi ABA coverage: the intake guide.',
    metaTitle: 'Blue Cross & Blue Shield of Mississippi ABA Coverage Guide | Carelu',
    metaDescription:
      'How Blue Cross & Blue Shield of Mississippi covers ABA: medical policy L.8.01.403 with no age limit and no weekly hour cap, no treatment-plan prior authorization since 8/1/2024, the coding policy unit limits, Mississippi’s § 83-9-26 mandate and LBA licensure.',
    intro: [
      'Blue Cross & Blue Shield of Mississippi (BCBSMS) is the state’s Blue Cross plan; its ABA policy names fully insured members, self-funded groups, State Health Plan (state and school employee) participants and FEP members. Its ABA rules sit in medical policy L.8.01.403 (Treatment of Autism Spectrum Disorder) and its ABA coding policy. Since 2018 it has applied no age limit, since August 1, 2024 it no longer requires treatment-plan approval for most members, and since October 15, 2025 it has had no weekly hour maximum: treatment is "medically necessary according to the Member’s individualized specific treatment plan."',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, under medical policy L.8.01.403' },
      { label: 'State mandate', value: 'Miss. Code Ann. § 83-9-26 (HB 885, 2015; policies issued or renewed from 1/1/2016)' },
      { label: 'Mandate age', value: 'Statute lets ABA stop at age 8; BCBSMS removed its age limit on 1/15/2018' },
      { label: 'Mandate caps', value: 'Statute allows 25 hours/week; BCBSMS removed its 25-hour maximum on 10/15/2025' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; non-grandfathered individual and small-group ACA plans; small employers (≤100) must only offer it' },
      { label: 'Licensure', value: 'Mississippi Autism Board license (LBA/LABA); RBTs registered under the supervisor' },
      { label: 'Fee schedule', value: 'Not public — contracted BCBSMS rates; Mississippi Medicaid 97153 is $15.08 per 15 min as a benchmark' },
    ],
    sections: [
      {
        h2: 'Medical policy L.8.01.403: diagnosis, referral, assessment and treatment',
        body: [
          'ABA is medically necessary when "A licensed physician (M.D./D.O.) or licensed psychologist has diagnosed the Member with ASD having met all of the following DSM-5 criteria," and "A referral for authorization of ABA assessment must be submitted by a licensed physician (M.D./D.O.) or a licensed psychologist." The behavioral identification assessment (97151) "is considered medically necessary once every six months"; the initial assessment "must be performed within four to six hours and completed within three days," and it must be provided by a BCBA or BCBA-D. Follow-up assessments 97152 and 0362T are each medically necessary up to three hours every six months. The BCBA writes the treatment plan with measurable goals based on standardized autism-specific testing (ABLLS, VB-MAPP or comparable) done within two months of starting, and shares it with the PCP and referring provider.',
          'Treatment (97153, 97154, 97156, 97157, 97158) "is considered medically necessary according to the Member’s individualized specific treatment plan," delivered by a BCBA, BCBA-D, a BCaBA supervised by a BCBA, or "A Licensed Board Certified RBT who is supervised by a BCBA or BCBA-D." Protocol modification (97155) is two hours per 10 hours of therapy; 0373T three hours every two months. Continuation needs an interim reassessment (97151) at least every six months, an order to continue from the physician or psychologist, an updated plan, and standardized testing once a year by a developmental pediatrician, child psychiatrist or child psychologist. The policy history records the age-8 limit and three-year limit removed effective January 15, 2018, the network-provider requirement for diagnosis and referral removed September 10, 2025, and the 25-hour weekly maximum removed October 15, 2025. Effective August 1, 2024, treatment-plan approval "is no longer required" for fully insured, self-funded group and State Health Plan members; FEP members keep PA, no age or visit limits, and a 200-hour annual limit on Blue Focus.',
        ],
        cites: [S.bcbsASD],
      },
      {
        h2: 'Coding policy: who bills and the unit limits',
        body: [
          'BCBSMS’s ABA coding policy says "claims can only be filed by the BCBA or BCBA-D provider"; BCaBA and RBT time is "considered practice expense and is not reported separately." It sets 97151 at no more than once every six months, 97152 and 0362T at a combined six hours every six months, treatment codes at "the medically necessary hours per week (7 days) according to the Member\'s individualized specific treatment plan," 97155 at two hours per ten hours of therapy and 0373T at three hours every two months. "97155 may be reported concurrently with technician delivered services 97153 when the patient is present" and the BCBA is directing the technician, but when both are present time is counted on a single technician’s face-to-face time. "If any of the reporting criteria is not met or the hours outlined above are exceeded, the services will be denied."',
        ],
        cites: [S.bcbsCode],
      },
      {
        h2: 'The Mississippi mandate: what it guarantees',
        body: [MS_MANDATE_BODY],
        cites: [S.mandate, S.midAutism],
      },
      {
        h2: 'Licensure, telehealth and out-of-state BCBAs',
        body: [MS_LICENSURE_BODY, MS_TELE_COMMERCIAL],
        cites: [S.bacbLic, S.lic13, S.lic5, S.mabRules, S.tele351, S.sb2415],
      },
      {
        h2: 'Payment speed and rates',
        body: ['BCBSMS publishes no ABA rate table. ' + MS_PROMPT_PAY + ' The public benchmark is Mississippi Medicaid’s fee schedule (' + MS_FFS_RATES + ').'],
        cites: [S.promptPay, S.asdFee],
      },
    ],
    collect: [
      { title: 'Group type', desc: 'Fully insured, self-funded group, State Health Plan or FEP: FEP members still need prior authorization.' },
      { title: 'Diagnosis by a physician or psychologist', desc: 'BCBSMS requires a licensed M.D./D.O. or licensed psychologist to diagnose ASD under DSM-5.' },
      { title: 'Referral / order', desc: 'A physician or psychologist referral for the ABA assessment, and an order to continue at each six-month review.' },
      { title: 'Standardized autism-specific testing', desc: 'ABLLS, VB-MAPP or comparable, within two months of starting treatment and yearly after.' },
      { title: 'Other insurance', desc: 'Record every other coverage; Medicaid pays after BCBSMS.' },
    ],
    sources: [S.bcbsASD, S.bcbsCode, S.mandate, S.midAutism, S.bacbLic, S.lic13, S.lic5, S.mabRules, S.tele351, S.sb2415, S.sb2140, S.promptPay, S.cobReg, S.erisa, S.cfr433, S.tricare, S.champva, S.asdFee],
    deliveryRules: {
      supervision: {
        value: 'BCaBAs and RBTs must be "supervised by a BCBA or BCBA-D"; 97155 protocol modification is medically necessary at two hours per 10 hours of therapy; 0362T and 0373T need documented onsite BCBA supervision. The Autism Board requires a Mississippi-licensed supervisor following BACB supervision policy.',
        status: 'verified',
        cites: [S.bcbsASD, S.bcbsCode, S.mabRules],
      },
      concurrentBilling: {
        value: '"97155 may be reported concurrently with technician delivered services 97153 when the patient is present, one or more protocols have been identified" and the BCBA is directing the technician; when the BCBA and BCaBA or RBT are both present, time is "based on a single technician\'s face to face time."',
        status: 'verified',
        cites: [S.bcbsCode],
      },
      dailyLimits: {
        value: 'No daily or weekly hour cap on treatment since 10/15/2025 (hours per the individualized plan, counted per 7-day week). 97151 once per six months; 97152 and 0362T a combined six hours per six months; 97155 two hours per ten hours of therapy; 0373T three hours every two months. Exceeding these limits means denial.',
        status: 'verified',
        cites: [S.bcbsASD, S.bcbsCode],
      },
      noteSignature: {
        value: 'BCBSMS’s ABA policies require documented onsite supervision for 0362T and 0373T and specific treatment-plan content, but do not say who signs session notes or when.',
        status: 'unverified',
        cites: [S.bcbsASD, S.bcbsCode],
        verifyVia: 'BCBSMS Provider Services (number on the member card) or your BCBSMS provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'BCBSMS removed its exclusion for home-based care and school settings in 2019, while excluding services "primarily academic or educational in nature regardless of setting," respite, shadow and paraprofessional services, and programs public schools must provide (IEP, special education, IDEA, autism classrooms).',
        status: 'verified',
        cites: [S.bcbsASD],
      },
      billAsProvider: {
        value: '"claims can only be filed by the BCBA or BCBA-D provider"; BCaBA and RBT time "is considered practice expense and is not reported separately."',
        status: 'verified',
        cites: [S.bcbsCode],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'None in BCBSMS policy: the age-8 limit and three-year treatment limit were removed effective 01/15/2018; FEP has no age restriction. The statute’s age-8 floor matters only if a plan document still carries it.',
        status: 'verified',
        cites: [S.bcbsASD, S.mandate],
      },
      dxRecency: {
        value: 'No diagnosis expiry; continuation requires an interim reassessment at least every six months and standardized autism-specific testing once a year.',
        status: 'verified',
        cites: [S.bcbsASD],
      },
      diagnosingProviders: {
        value: 'A licensed physician (M.D./D.O.) or licensed psychologist; the network-provider requirement for the diagnosis was removed 9/10/2025.',
        status: 'verified',
        cites: [S.bcbsASD],
      },
      diagnosticTools: {
        value: 'DSM-5 criteria for the diagnosis; treatment goals and progress must use standardized autism-specific testing (ABLLS, VB-MAPP or comparable, CPT 96112/96113) with age norms, within two months of starting and yearly.',
        status: 'verified',
        cites: [S.bcbsASD],
      },
      referral: {
        value: 'Yes: "A referral for authorization of ABA assessment must be submitted by a licensed physician (M.D./D.O.) or a licensed psychologist," and continuation needs "an order for continuation of ABA treatment" from that physician or psychologist.',
        status: 'verified',
        cites: [S.bcbsASD],
      },
      telehealth: {
        value: 'BCBSMS’s ABA medical and coding policies do not address telehealth. ' + MS_TELE_COMMERCIAL,
        status: 'plan-dependent',
        cites: [S.bcbsASD, S.bcbsCode, S.tele351, S.sb2415],
        verifyVia: 'BCBSMS Provider Services: ask which ABA codes, POS and modifier it pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Treatment-plan approval is no longer required for fully insured, self-funded group and State Health Plan members (from 8/1/2024). Where a BCBSMS plan does require PA (FEP), fully insured rules follow the Mississippi Prior Authorization Reform Act. ' + MS_PA_LAW,
        status: 'plan-dependent',
        cites: [S.bcbsASD, S.sb2140, S.erisa],
        verifyVia: 'BCBSMS Provider Services: confirm whether this member’s group requires any ABA authorization.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: MS_COB,
        status: 'plan-dependent',
        cites: [S.cobReg, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask BCBSMS at verification for the member’s coordination-of-benefits order and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Blue Cross & Blue Shield of Mississippi cover ABA?', a: 'Yes, for ASD under medical policy L.8.01.403, with no age limit since 2018 and no weekly hour maximum since October 15, 2025.' },
      { q: 'Does BCBSMS require prior authorization for ABA?', a: 'Not for fully insured, self-funded group or State Health Plan members since August 1, 2024. FEP members still need prior authorization. A physician or psychologist referral is still required for the assessment.' },
      { q: 'Can RBTs bill BCBSMS?', a: 'No. Only the BCBA or BCBA-D files claims; BCaBA and RBT time is practice expense, not billed separately.' },
      { q: 'Can 97155 and 97153 be billed at the same time with BCBSMS?', a: 'Yes, when the patient is present and the BCBA is directing the technician on an identified protocol.' },
      { q: 'Does a BCBA need a Mississippi license?', a: 'Yes. Mississippi licenses behavior analysts through the Mississippi Autism Board, and its law has no exemption for behavior analysts licensed in other states.' },
    ],
  },
};

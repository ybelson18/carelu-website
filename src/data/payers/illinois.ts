import type { PayerConfig, PayerSource } from './types.js';

/* Illinois — researched October 2026 from primary sources only.
   hfs.illinois.gov, bcbsil.com, ilmeridian.com / ilyouthcare.com, countycare.com and the
   Molina IL memo host blog.molinahealthcare.com answer plain curl with a browser UA.
   aetnabetterhealth.com 403s and r.jina.ai is refused for it; the ch./es. mirror hosts
   (ch.aetnabetterhealth.com, es.aetnabetterhealth.com) returned the real PDFs.
   ilga.gov itself fails directly (TLS failure through the proxy, 503 to WebFetch, 403 to
   r.jina.ai). Its mirror host witnessslips.ilga.gov IS readable through r.jina.ai
   (plain curl, no user agent; it rate-limits, so space requests): 215 ILCS 5/356z.14 and
   370c, 225 ILCS 6/10, 6/20, 6/150, 225 ILCS 150/10 and Public Act 104-0028 were read that
   way and are cited at their witnessslips URLs. codes.findlaw.com via r.jina.ai also
   returned 356z.14 (an unofficial mirror, labelled as such). JCAR rules (89 Ill. Adm.
   Code 140) were not read; HFS’s quotations of them are attributed to HFS. */

const S: Record<string, PayerSource> = {
  hfs201030: { title: 'HFS Provider Notice (10/30/2020) — Coverage for ABA Services for Children 0 through 20 Years: Provider Enrollment', url: 'https://hfs.illinois.gov/medicalproviders/notices/notice.prn201030c.html' },
  hfs210119: { title: 'HFS Provider Notice (01/19/2021) — Coverage for ABA Services for Children 0 through 20 Years: Prior Approval', url: 'https://hfs.illinois.gov/medicalproviders/notices/notice.prn210119a.html' },
  hfs210930: { title: 'HFS Provider Notice (09/30/2021) — Update to Coverage of Adaptive Behavior Support Services for Children with ASD (eff. 10/1/2021)', url: 'https://hfs.illinois.gov/medicalproviders/notices/notice.prn210930b.html' },
  hfs220126: { title: 'HFS Provider Notice (01/26/2022) — ABS Service Rate Update Effective January 15, 2022', url: 'https://hfs.illinois.gov/medicalproviders/notices/notice.prn220126b.html' },
  hfs220427: { title: 'HFS Provider Notice (04/27/2022) — Resource Available to Providers of ABS Services (WCA template)', url: 'https://hfs.illinois.gov/medicalproviders/notices/notice.prn220427a.html' },
  hfs230824: { title: 'HFS Provider Notice (08/24/2023) — Updates to ABS Service Provider Qualifications per Public Act 103-0102', url: 'https://hfs.illinois.gov/medicalproviders/notices/notice.prn230824a.html' },
  hfsFee: { title: 'HFS — Adaptive Behavior Support (ABS) Services Fee Schedule, effective 01/15/2022, updated 05/14/2026', url: 'https://hfs.illinois.gov/content/dam/soi/en/web/hfs/medicalproviders/medicaidreimbursement/adaptive/UpdatedABSFeeSchedule51426.pdf' },
  hfsFeePage: { title: 'HFS — Adaptive Behavior Support fee schedule page (Medicaid Reimbursement)', url: 'https://hfs.illinois.gov/medicalproviders/medicaidreimbursement/adaptivebehaviorsupport.html' },
  hfsPAForm: { title: 'HFS — Prior Authorization for ABS Services form (fee-for-service; submit to HFS.ABS@illinois.gov)', url: 'https://hfs.illinois.gov/content/dam/soi/en/web/hfs/sitecollectiondocuments/abspriorapprovalformomifillable.pdf' },
  hfsCh100: { title: 'HFS Chapter 100 General Handbook (Handbook for Providers of Medical Services: General Policy and Procedures)', url: 'https://hfs.illinois.gov/content/dam/soi/en/web/hfs/medicalproviders/handbooks/Chapter100GeneralHandbook.pdf' },
  hfsMap: { title: 'HFS — Medicaid Managed Care Program Map (January 1, 2026)', url: 'https://hfs.illinois.gov/content/dam/soi/en/web/hfs/medicalproviders/cc/documents/managedcaremap.pdf' },
  hfsMC: { title: 'HFS — Illinois’ Managed Care Programs (HealthChoice Illinois, YouthCare)', url: 'https://hfs.illinois.gov/medicalclients/managedcare.html' },
  hfsEVV: { title: 'HFS — Illinois’ Electronic Visit Verification (EVV): services in scope', url: 'https://hfs.illinois.gov/medicalproviders/electronicvisitverification.html' },
  idfpr: { title: 'IDFPR — Behavior Analysts (Licensed Behavior Analyst, Licensed Assistant Behavior Analyst; 225 ILCS 6/150 notice)', url: 'https://idfpr.illinois.gov/profs/behavior-analysts.html' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Illinois, 2022)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  idoiCB2417: { title: 'Illinois Department of Insurance Company Bulletin 2024-17 — Autism Spectrum Disorder Coverage: Compliance with PA 102-0322 (Dec. 4, 2024)', url: 'https://idoi.illinois.gov/content/dam/soi/en/web/insurance/companies/companybulletins/CB2024-17.pdf' },
  ilga356: { title: '215 ILCS 5/356z.14 — Autism spectrum disorders (official ILCS text, General Assembly; read via its witnessslips.ilga.gov mirror, showing the text before and after P.A. 104-561)', url: 'https://witnessslips.ilga.gov/legislation/ilcs/documents/021500050K356z.14.htm' },
  fl356: { title: 'FindLaw (unofficial mirror, “last updated January 01, 2025”) — 215 ILCS 5/356z.14, read through r.jina.ai; matches the official text', url: 'https://codes.findlaw.com/il/chapter-215-insurance/il-st-sect-215-5-356z-14/' },
  ilga370c: { title: '215 ILCS 5/370c — Mental and emotional disorders (official ILCS text incl. subsection (w), eff. 1/1/2026; read via witnessslips.ilga.gov mirror)', url: 'https://witnessslips.ilga.gov/legislation/ilcs/documents/021500050K370c.htm' },
  pa10428: { title: 'Public Act 104-0028 (HB 3019), eff. Jan. 1, 2026 — official text (read via witnessslips.ilga.gov mirror)', url: 'https://witnessslips.ilga.gov/legislation/publicacts/104/104-0028.htm' },
  ilga6_20: { title: '225 ILCS 6/20 — Behavior Analyst Licensing Act: License required; exemptions (official text, source note through P.A. 104-618, eff. 7-24-26; read via witnessslips.ilga.gov mirror)', url: 'https://witnessslips.ilga.gov/legislation/ilcs/documents/022500060K20.htm' },
  ilga6_10: { title: '225 ILCS 6/10 — Behavior Analyst Licensing Act: Definitions (official text via witnessslips.ilga.gov mirror)', url: 'https://witnessslips.ilga.gov/legislation/ilcs/documents/022500060K10.htm' },
  ilga6_150: { title: '225 ILCS 6/150 — Behavior Analyst Licensing Act: License restrictions and limitations (official text via witnessslips.ilga.gov mirror)', url: 'https://witnessslips.ilga.gov/legislation/ilcs/documents/022500060K150.htm' },
  ilgaTele: { title: '225 ILCS 150/10 — Telehealth Act: Practice authority (official text via witnessslips.ilga.gov mirror)', url: 'https://witnessslips.ilga.gov/legislation/ilcs/documents/022501500K10.htm' },
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  // Aetna Better Health of Illinois
  abhilUM: { title: 'Aetna Better Health of Illinois — Utilization Management changes to align with new legislation (Public Act 104-0028), Feb. 20, 2026', url: 'https://es.aetnabetterhealth.com/content/dam/aetna/medicaid/illinois/providers/pdf/ABHIL_UM%20updates_02.20.2026.pdf' },
  abhilPM: { title: 'Aetna Better Health of Illinois — Provider Manual (titled “2025 Provider Manual”, posted at the 2026 manual URL)', url: 'https://ch.aetnabetterhealth.com/content/dam/aetna/medicaid/illinois/providers/pdf/Aetna%20Better%20Health%20of%20Illinois%20Provider%20Manual%202026.pdf' },
  // Blue Cross Community Health Plans
  bcchpPM: { title: 'Blue Cross Community Health Plans — Provider Manual (January 2026)', url: 'https://www.bcbsil.com/docs/provider/il/standards/manual/bcchp/bcchp-provider-manual.pdf' },
  bcchpSum: { title: 'BCBSIL — Medicaid Service Authorization Program Details and Notification Requirements (eff. Jan. 1, 2026, updated March 2026)', url: 'https://www.bcbsil.com/docs/provider/il/claims/um/bcchp-pa-summary.pdf' },
  bcchpCodes: { title: 'BCBSIL — Medicaid (BCCHP) Prior Authorization Code List (10/1/2026; behavioral health page updated August 2026)', url: 'https://www.bcbsil.com/docs/provider/il/claims/um/bcchp-pa-code-list-10-1-2026.pdf' },
  bcbsilABSBill: { title: 'BCBSIL — Review Medicaid Billing Reminders and Requirements for ABS Providers (May 8, 2026)', url: 'https://www.bcbsil.com/provider/education/education-reference/news/2026/5-8-2026-review-medicaid-billing-reminders-and-requirements' },
  bcbsilUM: { title: 'BCBSIL — Behavioral Health Utilization Management Program Changes (Jan. 12, 2026)', url: 'https://www.bcbsil.com/provider/education/education-reference/news/2026/1-12-2026-behavioral-health-utilization-management-program-changes' },
  bcbsilPA104: { title: 'BCBSIL — IL House Bill 3019/Public Act 104-0028: Behavioral Health Prior Authorization Changes (Nov. 19, 2025)', url: 'https://www.bcbsil.com/producer/news/11-19-25-il-house-bill-3019-public-act-104-0028-behavioral-health-prior-autorization-changes' },
  // CountyCare
  ccNotice: { title: 'CountyCare — Removal of Authorization Requirements for ABA Assessments, eff. January 1, 2026 (notice, February 2026)', url: 'https://countycare.com/wp-content/uploads/CCHHS_Provider_Notice_ABA_Feb2026.pdf' },
  ccPM: { title: 'CountyCare — Provider Manual (January 2025)', url: 'https://countycare.com/wp-content/uploads/2025-Provider-Manual-011425-2.pdf' },
  // Meridian / YouthCare (Centene)
  merPM: { title: 'Meridian (Illinois) — Provider Manual (06.24.26)', url: 'https://www.ilmeridian.com/content/dam/centene/meridian/il/pdf/Meridian_ProviderManual_06.24.26.pdf' },
  merNotif: { title: 'Meridian — Notification requirements for ABA assessments (02/26/26; eff. May 1, 2026)', url: 'https://www.ilmeridian.com/newsroom/notification-requirements-for-applied-behavior-analysis--aba--as.html' },
  merBH104: { title: 'Meridian / YouthCare — Clinical Policy CP.BH.104, Applied Behavior Analysis (last revision 09/25; posted 02.2026)', url: 'https://www.ilmeridian.com/content/dam/centene/meridian/il/policies/CP.BH.104_Applied_Behavior_Analysis_02.2026.pdf' },
  merBH105: { title: 'Meridian / YouthCare — Clinical Policy CP.BH.105, ABA Documentation Requirements (last revision 12/24)', url: 'https://www.ilmeridian.com/content/dam/centene/meridian/il/policies/CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements.pdf' },
  ycPM: { title: 'YouthCare — Provider Manual (September 2026)', url: 'https://www.ilyouthcare.com/content/dam/centene/meridian/il/pdf/YouthCare_ProviderManual_09.28.26.pdf' },
  ycPolicies: { title: 'YouthCare — Clinical and Payment Policies (lists CP.BH.104 and CP.BH.105)', url: 'https://www.ilyouthcare.com/providers/provider-resources/clinical-payment-policies.html' },
  // Molina
  molMemo: { title: 'Molina Healthcare of Illinois — Provider Memo: Prior Auth Change for Applied Behavioral Analysis (Jan. 22, 2026)', url: 'https://blog.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/il/2026-Provider-Memos/MHIL_Provider_Memo_Applied_Behavioral_Analysis_Initial_PA_Final508.pdf' },
  molPM: { title: 'Molina Healthcare of Illinois — Medicaid Provider Manual 2026 (last updated 09/2026)', url: 'https://blog.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/il/Provider-Manuals/2026_MHIL_Medicaid_Provider_Manual_V1_Final508.pdf' },
  molABS22: { title: 'Molina Healthcare of Illinois — Provider Memo: Adaptive Behavioral Support (ABS) Is a Covered Service (updated Nov. 28, 2022)', url: 'https://blog.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/il/2022-Provider-Memos/Provider_Memo_ABS_Services_Covered_11-2022_Final508.pdf' },
  // BCBSIL commercial
  bcbsilCodes: { title: 'BCBSIL — 2026 Commercial Outpatient Behavioral Health Prior Authorization Codes (eff. 1/1/2026, updated August 2026)', url: 'https://www.bcbsil.com/docs/provider/il/claims/um/2026-commercial-bh-pa-code-list.pdf' },
  bcbsilCPCP: { title: 'BCBSIL Clinical Payment and Coding Policy CPCP011 — Applied Behavior Analysis (v1.0, plan effective March 20, 2026)', url: 'https://www.bcbsil.com/docs/provider/il/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
  bcbsilPhone: { title: 'BCBSIL — Call for Preservice Requests for Applied Behavior Analysis for Commercial Members (Jan. 15, 2026; eff. April 2026)', url: 'https://www.bcbsil.com/provider/education/education-reference/news/2026/1-15-2026-call-for-preservice-requests-for-applied-behavior-analysis' },
  // National carrier policies (fetched this run)
  aetnaCPB: { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (PCOMM-2025-225, March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026; incl. Illinois Regulatory Addendum)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates (BH 803ABA STM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumNNM: { title: 'Optum National Network Manual (BH02330, published July 1, 2026, effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
};

/* ---- Shared Illinois Medicaid layer ---- */
const IL_FFS_TELE =
  'HFS’s ABS fee schedule (updated 05/14/2026) marks four codes for remote delivery: 97151 (assessment), 97155 (protocol modification), 97156 (family guidance) and 97157 (multiple-family group). The footnote reads: “Only use the GT or 93 modifier when providing allowable service remotely as a distant site telehealth service along with Place of Service (POS) 02 or 10, as applicable, on the specific service line of the claim.” 97152, 97153, 97154, 97158, 0362T and 0373T carry no telehealth modifier, so technician-delivered treatment is billed as in-person.';

const IL_MCO_PA104 =
  'Illinois Public Act 104-0028 (HB 3019) changed behavioral health utilization management from January 1, 2026, and each HealthChoice Illinois plan has read it differently for ABA. Molina says ABA “services are no longer eligible for prior authorization and require concurrent review only” (no authorization for the initial assessment or the first 48 units of therapy a calendar year). Aetna Better Health approves 97151/97152 without medical-necessity review if notified within one business day, then runs concurrent review. Blue Cross Community Health Plans and YouthCare ask for notification within 24 hours of starting ABA services or the initial assessment. Meridian requires notice within 24 hours of 97151/97152 from May 1, 2026 and keeps prior authorization on treatment. CountyCare removed PA from 97151/97152 only. The Act itself added subsection (w) to 215 ILCS 5/370c: from January 1, 2026 “No policy shall require prior authorization for outpatient or partial hospitalization services for treatment of mental, emotional, or nervous disorders or conditions,” such coverage “may be subject to concurrent and retrospective review,” and “A Medicaid managed care organization may set a deadline of 24 hours after the initiation of treatment” for notification (one more business day if it cannot accept the notice). It also lets HFS “adopt rules to implement the applicable provisions” for managed care organizations “and the medical assistance fee-for-service program” (new 305 ILCS 5/5-5.28). The statute does not name ABA, which is why the plans differ; this guide reports each plan’s own written rule.';

const IL_LICENSURE_BODY =
  'Illinois licenses behavior analysts. IDFPR lists two professions under the Behavior Analyst Licensing Act (225 ILCS 6), the Licensed Behavior Analyst and the Licensed Assistant Behavior Analyst, and says the Department “commenced licensing behavior analysts and assistant behavior analysts on January 15, 2025.” It gave applicants a grace period: IDFPR “will not begin enforcement actions for unlicensed practices provided by Behavior Analysts and Assistant Behavior Analysts until Monday, April 21, 2025,” so that date has passed and a BCBA practicing in Illinois now needs the Illinois license. A second deadline is still ahead. IDFPR quotes Section 150 of the Act: beginning 24 months after licensing began, no business may offer behavior analysis services “unless every member, partner, shareholder, director, officer, holder of any other ownership interest, agent, and employee who renders applied behavior analysis services holds a currently valid license,” and it reads that as: “By or before January 15, 2027 anyone who is not licensed as a behavior analyst or assistant behavior analyst … and who currently owns a business providing applied behavior analysis services must divest from the business.” The statute is blunter than IDFPR’s notice: Section 150 covers “every member, partner, shareholder, director, officer, holder of any other ownership interest, agent, and employee who renders applied behavior analysis services,” “Notwithstanding” the Section 20 exclusion for people implementing a plan under a licensed behavior analyst’s supervision, so ask IDFPR how it applies to RBT employees after January 15, 2027. The BACB’s licensure table lists Illinois (law enacted 2022) with IDFPR as the board. Out-of-state BCBAs and telehealth: no. Section 20 of the Act says an individual “shall not engage in the practice of applied behavior analysis unless licensed under this Act or covered by an exemption,” and its exemption list (family caregivers, staff implementing a plan under a licensed behavior analyst, listed licensed professions such as clinical psychologists, LCSWs, LCPCs, SLPs and OTs acting within their training, students and fellows, school-endorsed staff, QIDPs, DHS-designated providers, and people practicing on Medicaid when the Act took effect while working toward licensure) contains nothing for a behavior analyst licensed in another state. The Telehealth Act closes the remote route: “A health care professional treating a patient located in this State through telehealth services must be licensed or authorized to practice in Illinois” (225 ILCS 150/10). So a BCBA licensed elsewhere needs the Illinois license to treat or supervise a client located in Illinois, in person or by telehealth.';

/* ---- Shared Illinois commercial layer ---- */
const IL_MANDATE_BODY =
  'Illinois’s autism mandate is Section 356z.14 of the Illinois Insurance Code (215 ILCS 5/356z.14). Group and individual policies and managed care plans issued or renewed after December 12, 2008 “must provide individuals under 21 years of age coverage for the diagnosis of autism spectrum disorders and for the treatment of autism spectrum disorders.” Coverage “shall be subject to a maximum benefit of $36,000 per year but shall not be subject to any limits on the number of visits to a service provider,” and “The Director of Insurance shall, on an annual basis, adjust the maximum benefit for inflation” using the medical care CPI; we did not find the Department’s current adjusted figure, so get it from the plan. Cost sharing may apply only as it does to other medical services, and benefits “may not be subject to dollar limits, deductibles, copayments, or coinsurance provisions that are less favorable to the insured” than for physical illness. Treatment explicitly includes “applied behavior analysis,” prescribed, provided or ordered by a physician “or (B) a certified, registered, or licensed health care professional with expertise in treating effects of autism spectrum disorders when the care is determined to be medically necessary and ordered by a physician licensed to practice medicine in all its branches.” The diagnosis must be prescribed, performed or ordered by a physician licensed in all branches or “a licensed clinical psychologist with expertise in diagnosing autism spectrum disorders”; P.A. 104-561 adds a licensed speech-language pathologist with that expertise for children under 3, effective January 1, 2028. The insurer may ask for records showing medical necessity and progress, and a treatment plan (diagnosis, treatment by type, frequency, duration, goals, update schedule), but subsection (f) adds: “Nothing in this subsection supersedes the prohibition on prior authorization for mental health treatment under subsection (w) of Section 370c.” Medical-necessity decisions must be made the same way as for other illnesses, and an appeal challenge is reasonable only if the review includes a physician with current ASD treatment expertise. Subsection (e-5) bars denial “solely because of the location wherein the clinically appropriate services are provided.” The Department of Insurance has enforced that last point: Company Bulletin 2024-17 (December 4, 2024) reminds every company writing accident and health insurance and managed care plans that Public Act 102-0322, in effect since January 1, 2022, bars an insurer from denying “otherwise covered services … solely because of the location wherein the clinically appropriate services are provided,” and that for autism services “such as applied behavior analysis” sites “include non-school, non-home, or non-provider locations,” private or public. It adds that “An issuer cannot apply medical necessity criteria that contradict a statutory requirement,” that criteria for mental health conditions “including autism spectrum disorder, must be consistent with generally accepted standards of care, including with respect to setting or site of care” (215 ILCS 5/370c(h)-(i), (k)), and that members denied for medical necessity keep appeal rights under the Managed Care Reform and Patient Rights Act and the Health Carrier External Review Act. Separately, 370c(w), added by Public Act 104-0028 from January 1, 2026, says “No policy shall require prior authorization for outpatient or partial hospitalization services for treatment of mental, emotional, or nervous disorders or conditions” by licensed, certified or legally authorized providers; concurrent and retrospective review remain allowed, and a commercial insurer may require notice within “2 business days after the initiation of the covered person’s treatment,” with no concurrent review of services before that deadline. 370c(w) does not name ABA, and carriers still list ABA codes for authorization, so whether a fully insured plan may prior-authorize ABA in 2026 is a question to put to the plan and, if needed, the Department of Insurance. Like every state mandate, it reaches fully insured plans; self-funded employer plans answer to ERISA, and Evernorth’s Illinois addendum, for example, says it does “not apply with regard to Covered Services rendered to Participants covered under self-funded plans.”';

const IL_COMMERCIAL_LIC_BODY = IL_LICENSURE_BODY + ' For commercial credentialing this means the carrier will expect the Illinois license number as well as BACB certification.';

const MANDATE_AGE_TAIL =
  ' For fully insured Illinois plans, 215 ILCS 5/356z.14 mandates autism coverage for “individuals under 21 years of age,” subject to a $36,000-a-year maximum that the Director of Insurance adjusts annually for medical inflation, with no visit limits; the plan may cover older members, and the current adjusted dollar figure should be confirmed with the plan. Self-funded ERISA plans are outside the statute.';

const MANDATE_REFERRAL_TAIL =
  ' For fully insured Illinois plans, 215 ILCS 5/356z.14 covers ABA as treatment “ordered by a physician licensed to practice medicine in all its branches” when delivered by a certified, registered or licensed professional, so keep a physician order on file; the Department of Insurance has also told carriers they may not deny covered ABA “solely because of the location” of care (Company Bulletin 2024-17). Self-funded ERISA plans sit outside state insurance law.';

const MANDATE_DX_TAIL =
  ' For fully insured Illinois plans, 356z.14 defines the diagnosis as tests or evaluations “prescribed, performed, or ordered by (A) a physician licensed to practice medicine in all its branches or (B) a licensed clinical psychologist with expertise in diagnosing autism spectrum disorders” (a licensed speech-language pathologist with that expertise for children under 3 is added from January 1, 2028 by P.A. 104-561).';

const IL_370CW_PA =
  ' Illinois law since January 1, 2026: for fully insured policies, 215 ILCS 5/370c(w)(1) says “No policy shall require prior authorization for outpatient or partial hospitalization services for treatment of mental, emotional, or nervous disorders or conditions,” allowing concurrent review after a notification deadline of up to 2 business days, and 356z.14(f) says its treatment-plan rule does not supersede that prohibition. The statute does not name ABA; self-funded plans are outside it.';

const COMM_AUTH_VALUE = (carrier: string) =>
  'Depends on how the plan is funded. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1: pre-service decisions “not later than 15 days after receipt of the claim,” one 15-day extension, urgent care within 72 hours. For fully insured Illinois plans, 215 ILCS 5/370c(w) (Public Act 104-0028, from January 1, 2026) bars prior authorization of outpatient mental health treatment and lets the insurer set a notification deadline of up to 2 business days after treatment starts, with no concurrent review of services before that deadline; Illinois’s general prior-authorization decision deadlines were not read this run. ' + carrier + ' publishes no Illinois-specific ABA turnaround or reauthorization lead time in the documents read.';

const COMM_COB_VALUE = (carrier: string) =>
  'Illinois’s group coordination-of-benefits rule could not be retrieved this run, so the order between two parents’ plans is not stated here; ask the plan. What is certain is the order against public coverage: if the child also has Illinois Medicaid, ' + carrier + ' pays first. HFS is “by federal and State Law, the payer of last resort,” and claims must be adjudicated by all liable third parties before HFS considers them (42 CFR 433.139). TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).';

export const illinoisPayers: Record<string, PayerConfig> = {
  'illinois-medicaid': {
    slug: 'illinois-medicaid',
    cardDesc: 'ABA is "Adaptive Behavior Support" for under-21s with ASD; FFS PA via HFS.ABS email; published rates ($13.00 RBT, $20.39 BCBA per 15 min).',
    assessmentPA: {
      value: 'Fee-for-service: only beyond 6 hours. HFS requires PA for “BATP services exceeding six hours (24 units) per a 180-day period,” and the 05/14/2026 fee schedule marks 97151, 97152 and 0362T “Yes if >6 hours.” Managed care members: each plan sets its own rule',
      status: 'verified',
      cites: [S.hfs210930, S.hfsFee],
    },
    treatmentPA: {
      value: 'Fee-for-service: yes. “All BAI services require prior authorization” on the HFS ABS form emailed to HFS.ABS@illinois.gov; the fee schedule marks 97153–97158 and 0373T “Yes.” HealthChoice Illinois plans changed their own rules on January 1, 2026 (see the plan guides)',
      status: 'verified',
      cites: [S.hfs210930, S.hfsFee, S.hfsPAForm],
    },
    dxRequired: {
      value: 'Yes. ABS covers children 0 through 20 “with Autism Spectrum Disorder,” documented by a Comprehensive Diagnostic Evaluation by a physician or clinical psychologist that results in an ADOS, GARS, ADI or CARS',
      status: 'verified',
      cites: [S.hfs210930, S.hfsPAForm],
    },
    payer: 'Illinois Medicaid (HFS)',
    state: 'IL', kind: 'state-medicaid',
    pill: 'Payer Guide · Illinois Medicaid',
    h1: 'Illinois Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Illinois Medicaid ABA (ABS) Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Illinois Medicaid (HFS) covers ABA as Adaptive Behavior Support for children under 21 with autism: who can enroll and bill, the fee-for-service prior authorization packet, the published ABS rates, telehealth codes, the six HealthChoice Illinois plans, and Illinois behavior analyst licensure.',
    intro: [
      'Illinois Medicaid has covered applied behavior analysis since November 1, 2020, for “children age 0 through 20 years diagnosed with an autism spectrum disorder under both Medicaid fee-for-service and Medicaid managed care plans.” Since October 1, 2021 HFS calls the benefit Adaptive Behavior Support (ABS): ABA is the core of it, alongside developmental models delivered by certified clinicians. The benefit has two halves, Behavioral Assessment and Treatment Planning (BATP) and Behavior Analytic Intervention (BAI), billed with the standard 97151–97158, 0362T and 0373T codes.',
      'Most children are in one of the HealthChoice Illinois health plans, and each plan runs its own authorization; HFS’s own prior authorization only governs fee-for-service members. The first intake question is therefore which plan is on the card. The second is staffing: every person who renders ABS, including RBTs, must be enrolled in IMPACT, and since 2025 Illinois also licenses behavior analysts through IDFPR.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as Adaptive Behavior Support (ABS), ages 0–20 with ASD' },
      { label: 'Structure', value: 'Carved in to managed care: Aetna Better Health, Blue Cross Community Health Plans, Meridian, Molina, YouthCare (DCFS youth) statewide; CountyCare in Cook County. FFS for non-enrolled members' },
      { label: 'FFS prior auth', value: 'HFS ABS form to HFS.ABS@illinois.gov: all BAI; BATP only beyond 6 hours per 180 days' },
      { label: 'FFS rates (per 15 min)', value: '97151/97155/97156 $20.39 · 97152/97153 $13.00 · 97154 $5.72 · 97157/97158 $9.00 · 0362T/0373T $46.39 (fee schedule updated 05/14/2026)' },
      { label: 'Who may deliver', value: 'ABS Clinicians (BCBA, or a licensed clinician with an approved developmental certification) and ABS Technicians (RBT or Profectum developmental technician), all enrolled in IMPACT' },
      { label: 'Licensure', value: 'Yes: IDFPR licenses Behavior Analysts and Assistant Behavior Analysts (licensing began Jan. 15, 2025)' },
      { label: 'Telehealth', value: '97151, 97155, 97156, 97157 with GT or 93 and POS 02/10' },
      { label: 'Other insurance', value: 'HFS pays last; bill commercial coverage first' },
    ],
    sections: [
      {
        h2: 'What Illinois Medicaid covers: ABS, BATP and BAI',
        body: [
          'HFS announced ABA coverage “for dates of service on or after November 1, 2020” for children 0 through 20 with ASD “subject to prior authorization,” citing Public Act 101-10, under which ABA is covered “when ordered by a physician licensed to practice medicine in all its branches and rendered by a licensed or certified health care professional with expertise in applied behavior analysis.” On October 1, 2021 HFS broadened this into Adaptive Behavior Support, “inclusive of but not limited to the clinical treatment modality of ABA,” and that notice superseded the earlier ones.',
          'ABS has two services. The Behavioral Assessment and Treatment Plan (BATP) must be “Completed, reviewed, and updated as needed, minimally once every 180 days,” signed by the BCBA who developed it, and signed by and given to the family. Behavior Analytic Intervention (BAI) is the treatment, individual or group, in two modes: Comprehensive BAI “intended for individuals under the age of seven” with ASD and adaptive skill deficits, and Focused BAI “intended for individuals age seven through 20” whose behavior “significantly interferes with home or community activities” and which works “in tandem with other behavioral health … and therapeutic” services.',
        ],
        cites: [S.hfs201030, S.hfs210930],
      },
      {
        h2: 'Who can render and bill ABS (and the IMPACT enrollment every person needs)',
        body: [
          'HFS’s August 24, 2023 notice, issued under Public Act 103-0102, rewrote the provider rules. It “Removes the requirement for unlicensed ABS Clinicians and ABS Technicians to receive clinical supervision from a licensed practitioner of the healing arts,” “Eliminates all requirements for written collaborative agreements,” and makes ABS reimbursable “to enrolled Behavioral Health Clinics (BHCs) and independently enrolled ABS Clinicians.” An independently enrolled ABS Clinician “may bill only for services the ABS Clinician personally provides or that are provided, under the ABS Clinician’s supervision, by an ABS Technician with whom the ABS Clinician has an established employment, contractual, or similar relationship.” And: “All individuals rendering covered ABS services to Illinois Medical Assistance Program customers must be enrolled in the IMPACT system,” including BHC employees.',
          'ABS Clinicians are BCBAs “certified and in good standing” with the BACB (a BCBA who also holds a state practice license enrolls under that license with a BCBA subspecialty), or an ABS Developmental Clinician: a licensed clinical psychologist, LCSW, LCPC, LMFT, occupational therapist or speech-language pathologist with an approved certification (DIRFloortime Advanced or Expert, ESDM Certified Therapist or Parent Coach, Profectum Level 2, PLAY Project dual certification, or RDI Certified Consultant). ABS Technicians are RBTs, who “must receive supervision from a BCBA,” or ABS Developmental Technicians (18 or older, high school diploma or GED, Profectum Registered Developmental Technician), supervised by a Developmental Clinician. The written collaborative agreement template HFS published in 2022 is history: the 2023 notice eliminated the requirement.',
        ],
        cites: [S.hfs230824, S.hfs220427],
      },
      {
        h2: 'Fee-for-service prior authorization: the packet HFS wants',
        body: [
          'For fee-for-service members, “BATP services exceeding six hours (24 units) per a 180-day period and all BAI services require prior authorization,” on the HFS Prior Authorization for ABS Services form, emailed to HFS.ABS@illinois.gov. The packet: a physician order “required with the first submission … and is valid for one year,” showing the physician’s NPI, the child’s name and date of birth, primary diagnosis, treatment recommendation, and signature and date; the Comprehensive Diagnostic Evaluation by “a physician or a clinical psychologist,” with direct assessment resulting in an ADOS, GARS, ADI or CARS, developmental history, current verbal and nonverbal functioning, and a caregiver interview; current documentation of functional impairment if the CDE is more than 24 months old; a clinical narrative if BATP will exceed six hours; and, for BAI, the BATP “completed within 30 days prior to the request date.” The form itself asks for the BCBA-to-RBT ratio and the percentage of BCBA and RBT time requested.',
          'HFS cites 89 Ill. Adm. Code 140 Table E, Item 26: “prior authorization determinations shall be made within 30 days of submission,” and “If the notice of disposition is not sent within the applicable time limit, prior approval will be granted automatically.” Missing information stops the clock and must be remedied “within 2 business days,” after which a new 30-day window starts. Approvals are “not transferable, as they are specific to an individual, provider, and service allotment.” Federal rules have since tightened the state-agency standard: from January 1, 2026, a standard decision is due “in no case later than 7 calendar days” (72 hours expedited), so expect HFS to move faster than its notice says.',
        ],
        cites: [S.hfs210930, S.hfsPAForm, S.cfr440],
      },
      {
        h2: 'What Illinois Medicaid pays for ABA: the ABS fee schedule',
        body: [
          'HFS publishes one statewide ABS fee schedule (effective 01/15/2022, updated 05/14/2026) whose rates “do not vary by population group or geographical region,” and the same notice that raised the RBT base rate to $13.00 per quarter hour applied it “under both Medicaid fee-for-service (FFS) and the HealthChoice Illinois managed care plans.” Per 15-minute unit, with the daily maximum: 97151 $20.39 (Level 1, 8 units); 97152 $13.00 (Level 2, 8); 0362T $46.39 (team, 8); 97153 $13.00 (Level 2, 32); 97154 $5.72 (Level 2, 12); 97155 $20.39 (Level 1, 24); 97156 $20.39 (Level 1, 16); 97157 $9.00 (Level 1, 16); 97158 $9.00 (Level 1, 16); 0373T $46.39 (team, 24). Level 1 is an enrolled BCBA or ABS Developmental Clinician; Level 2 an enrolled RBT or Developmental Technician; team services need at least “1 BCBA + 2 RBTs” (or a Developmental Clinician and two DTs) and the HT modifier.',
          '“National Correct Coding Institute (NCCI) procedure-to-procedure and medically unlikely edits apply.” HFS also tells providers to roll multiple units of the same code on the same date into one claim line to avoid the duplicate edit, and that the daily maximum “is the maximum number of units reimbursable for an individual on a single date of service.”',
        ],
        cites: [S.hfsFee, S.hfsFeePage, S.hfs220126, S.hfs210930],
      },
      {
        h2: 'Claims operations: NPIs, timely filing, EVV',
        body: [
          'HFS’s 2021 ABS notice requires the billing provider to report the BCBA’s or RBT’s “name and NPI … in the Rendering/Servicing segment of the claim,” and “Claims that identify an RBT as the Rendering/Servicing Provider must also include the Supervising BCBA’s name and NPI in the Loop 2310D, segment NM1, Supervising Provider field.” Fee-for-service claims must be received “no later than 180 days from the date on which the services or items were provided”; when another payer is primary, the claim is due within 180 days after the primary payer’s final adjudication. Electronic Visit Verification does not reach ABS: HFS’s EVV page lists personal care services under the HCBS waivers and home health care services as the services in scope.',
        ],
        cites: [S.hfs210930, S.hfsCh100, S.hfsEVV],
      },
      {
        h2: 'The HealthChoice Illinois plans, and the 2026 authorization changes',
        body: [
          'HFS’s January 1, 2026 managed care map lists five statewide HealthChoice Illinois plans (Aetna Better Health, Blue Cross Community Health Plans, Meridian, Molina HealthCare and YouthCare) and one Cook County plan, CountyCare. YouthCare, run by Meridian, serves “Illinois Department of Children & Family Services (DCFS) Youth In Care (YIC) and Former Youth In Care (FYIC) Enrollees only.” HFS’s ABS notices send every managed care question to the plan: “Questions regarding ABS service coverage, prior authorization, and billing requirements for managed care enrolled customers should be directed to the appropriate HealthChoice Illinois MCO.”',
          IL_MCO_PA104,
        ],
        cites: [S.pa10428, S.ilga370c, S.hfsMap, S.hfsMC, S.hfs210930, S.molMemo, S.abhilUM, S.bcchpSum, S.merNotif, S.ccNotice, S.ycPM],
      },
      {
        h2: 'Licensure: does a BCBA need an Illinois license?',
        body: [IL_LICENSURE_BODY + ' HFS’s enrollment notices still key ABS Clinicians to BACB certification, so plan on both: the IDFPR license for the right to practice, and BCBA status plus IMPACT enrollment for Medicaid billing.'],
        cites: [S.idfpr, S.ilga6_20, S.ilga6_150, S.ilgaTele, S.bacbLic, S.hfs230824],
      },
    ],
    collect: [
      { title: 'Which Medicaid card', desc: 'Aetna Better Health, Blue Cross Community Health Plans, CountyCare, Meridian, Molina, YouthCare, or fee-for-service. The plan owns authorization; HFS handles only FFS.' },
      { title: 'Comprehensive Diagnostic Evaluation', desc: 'By a physician or clinical psychologist, with an ADOS, GARS, ADI or CARS. If it is over 24 months old, add a current functional-impairment note.' },
      { title: 'Physician order', desc: 'With the physician’s NPI, child’s name and DOB, primary diagnosis, recommendation, signature and date. Valid one year.' },
      { title: 'Primary care physician', desc: 'The HFS form asks for the PCP, the provider ordering ABS and the date of the most recent visit.' },
      { title: 'Other insurance', desc: 'Commercial coverage is billed first; HFS is the payer of last resort.' },
      { title: 'Age', desc: 'ABS covers ages 0 through 20. Comprehensive BAI is intended for under-7s, Focused BAI for ages 7–20.' },
    ],
    sources: [S.hfs201030, S.hfs210119, S.hfs210930, S.hfs230824, S.hfs220126, S.hfsFee, S.hfsFeePage, S.hfsPAForm, S.hfsCh100, S.hfsMap, S.hfsMC, S.hfsEVV, S.idfpr, S.ilga6_20, S.ilga6_150, S.ilgaTele, S.bacbLic, S.pa10428, S.ilga370c, S.cfr440, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'RBTs “must receive supervision from a BCBA” (2023). The 2021 notice set the floor still in HFS’s ABS guidance: RBTs “are expected to receive Case Leadership for 5%, or more, of all direct services,” with “at a minimum, two face-to-face, real-time contacts per month” of observation, modeling, problem-solving guidance and documentation review, the BCBA “present with the RBT.” The 2023 notice removed LPHA clinical supervision and written collaborative agreements but did not restate the 5% figure, so confirm it with HFS if your program relies on a lower rate.',
        status: 'verified',
        cites: [S.hfs230824, S.hfs210930],
      },
      concurrentBilling: {
        value: 'Not addressed in any HFS ABS notice or the fee schedule, beyond “National Correct Coding Institute (NCCI) procedure-to-procedure and medically unlikely edits apply.”',
        status: 'unverified',
        cites: [S.hfsFee, S.hfs210930],
        verifyVia: 'HFS Bureau of Professional and Ancillary Services billing consultants, 877-782-5565, or ABS policy questions to omi.support@uillinois.edu: ask whether 97153 and 97155 may be billed for the same clock time.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'The fee schedule’s Daily Max Quantity per date of service: 97151, 97152, 0362T 8 units each; 97153 32; 97154 12; 97155 24; 97156, 97157, 97158 16 each; 0373T 24. HFS: the daily maximum “is the maximum number of units reimbursable for an individual on a single date of service,” and same-code units must be rolled into one claim line.',
        status: 'verified',
        cites: [S.hfsFee, S.hfs210930],
      },
      noteSignature: {
        value: 'The BATP must be “Reviewed, approved, and signed by the developing BCBA” and signed by the individual or parent or guardian, with a copy given to them. No HFS notice read says who signs each session note or by when.',
        status: 'unverified',
        cites: [S.hfs210930],
        verifyVia: 'omi.support@uillinois.edu (ABS policy) or HFS Bureau of Professional and Ancillary Services, 877-782-5565.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'HFS’s 2021 notice describes BAI by mode (individual or group; comprehensive or focused) and sets no setting restriction; the superseded January 2021 notice had allowed BAI “At all service locations and settings deemed appropriate for reimbursement, consistent with Department policy.” Remote delivery is limited to the four telehealth-eligible codes with POS 02 or 10.',
        status: 'verified',
        cites: [S.hfs210930, S.hfs210119, S.hfsFee],
      },
      billAsProvider: {
        value: 'The billing provider is an enrolled BHC or an independently enrolled ABS Clinician. The rendering BCBA or RBT goes in the Rendering/Servicing segment by name and NPI, and when an RBT renders, “the Supervising BCBA’s name and NPI” goes in Loop 2310D, NM1. Every rendering individual must be enrolled in IMPACT.',
        status: 'verified',
        cites: [S.hfs210930, S.hfs230824],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Ages 0 through 20. Comprehensive BAI is “intended for individuals under the age of seven,” Focused BAI for “individuals age seven through 20.”',
        status: 'verified',
        cites: [S.hfs201030, S.hfs210930],
      },
      dxRecency: {
        value: 'No expiry on the CDE itself, but “If the individual’s CDE was completed more than 24 months prior to the date of request for prior authorization, current individualized documentation of functional impairment by a physician or a clinical psychologist is required.” The BATP must be completed within 30 days before a BAI request.',
        status: 'verified',
        cites: [S.hfs210930],
      },
      diagnosingProviders: {
        value: 'The Comprehensive Diagnostic Evaluation is “performed by a physician or a clinical psychologist.”',
        status: 'verified',
        cites: [S.hfs210930],
      },
      diagnosticTools: {
        value: 'The CDE must result in one of: Autism Diagnostic Observation Schedule (ADOS), Gilliam Autism Rating Scale (GARS), Autism Diagnostic Interview (ADI) or Childhood Autism Rating Scale (CARS). The HFS PA form has checkboxes for exactly those four.',
        status: 'verified',
        cites: [S.hfs210930, S.hfsPAForm],
      },
      referral: {
        value: 'Yes. A physician order and referral is required with the first PA submission and “is valid for one year” (physician NPI, child’s name and DOB, primary diagnosis, recommendation, signature and date). Public Act 101-10, as HFS quotes it, covers ABA “when ordered by a physician licensed to practice medicine in all its branches.”',
        status: 'verified',
        cites: [S.hfs210930, S.hfs201030],
      },
      telehealth: {
        value: IL_FFS_TELE,
        status: 'verified',
        cites: [S.hfsFee],
      },
      authTurnaround: {
        value: 'HFS’s ABS notice: determinations “within 30 days of submission” (89 Ill. Adm. Code 140 Table E, Item 26), automatically granted if no notice is sent in time; missing information must be supplied within 2 business days and restarts the 30 days. The federal floor is now faster: since January 1, 2026 a state agency must decide a standard request “in no case later than 7 calendar days” and an expedited one within 72 hours. Managed care members follow their plan’s clock (42 CFR 438.210(d): 7 calendar days for rating periods from January 1, 2026).',
        status: 'verified',
        cites: [S.hfs210930, S.cfr440, S.cfr438],
      },
      coordinationOfBenefits: {
        value: 'HFS is “by federal and State Law, the payer of last resort,” and “where identifiable third party resources exist, claims must be submitted to and adjudicated by all liable third party payers before the Department will consider a claim.” HFS pays nothing when the third-party payment exceeds its rate. The TPL claim is due within 180 days after the primary payer’s final adjudication.',
        status: 'verified',
        cites: [S.hfsCh100, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Illinois Medicaid cover ABA therapy?', a: 'Yes. Since November 1, 2020 HFS covers ABA, now called Adaptive Behavior Support (ABS), for children 0 through 20 with autism, in fee-for-service and in every HealthChoice Illinois plan.' },
      { q: 'What does Illinois Medicaid pay for ABA?', a: 'The ABS fee schedule (updated 05/14/2026) pays per 15 minutes: 97153 and 97152 $13.00; 97151, 97155 and 97156 $20.39; 97154 $5.72; 97157 and 97158 $9.00; 0362T and 0373T $46.39. HFS applied the RBT rate to the managed care plans too.' },
      { q: 'Does the ABA assessment need prior authorization in Illinois Medicaid?', a: 'Fee-for-service: only if BATP exceeds six hours (24 units) in 180 days. Each managed care plan has its own rule, and most loosened assessment authorization on January 1, 2026.' },
      { q: 'Can ABA be delivered by telehealth under Illinois Medicaid?', a: 'Yes for 97151, 97155, 97156 and 97157, billed with modifier GT or 93 and POS 02 (not home) or 10 (home). Technician codes such as 97153 are not marked for telehealth.' },
      { q: 'Does an RBT have to enroll with Illinois Medicaid?', a: 'Yes. HFS requires every individual rendering ABS, including RBTs employed by a clinic, to be enrolled in IMPACT, and claims for RBT services must name the supervising BCBA in Loop 2310D.' },
      { q: 'Does EVV apply to ABA in Illinois?', a: 'No. HFS’s EVV page limits EVV to personal care services under the HCBS waivers and home health care services; ABS is not listed.' },
      { q: 'Can a BCBA licensed in another state treat an Illinois Medicaid child by telehealth?', a: 'No, not without an Illinois license. The Behavior Analyst Licensing Act bars practicing ABA in Illinois unless licensed or exempt, and its exemptions include nothing for out-of-state licensees (225 ILCS 6/20); the Telehealth Act requires a professional treating a patient located in Illinois by telehealth to be “licensed or authorized to practice in Illinois” (225 ILCS 150/10). For Medicaid the clinician also needs IMPACT enrollment.' },
    ],
  },

  'aetna-better-health-illinois': {
    slug: 'aetna-better-health-illinois',
    family: 'aetna',
    cardDesc: 'HealthChoice Illinois plan: 97151/97152 approved without review if notified within 1 business day (2026); concurrent review after.',
    assessmentPA: {
      value: 'Notification instead of PA since January 1, 2026: for 97151 and 97152, “if Aetna Better Health of Illinois receives notification within one (1) business day of the start of the assessment, the service will be approved without medical necessity review”; late notice means standard review may apply',
      status: 'verified',
      cites: [S.abhilUM],
    },
    treatmentPA: {
      value: 'Concurrent review: “Concurrent utilization review will follow for ABA services requested after the initial assessment,” and the plan says “Authorization is still required for claims payment purposes.” Which treatment codes need an authorization on file before day one is not spelled out',
      status: 'plan-dependent',
      cites: [S.abhilUM],
      verifyVia: 'Aetna Better Health of Illinois behavioral health UM, 1-866-329-4701 (fax 1-844-528-3453), or your Provider Experience representative: ask how to request the first treatment authorization after the assessment.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes. The plan’s manual publishes no ABA criteria of its own, so the HFS rule applies: ABS covers children 0–20 with ASD documented by a Comprehensive Diagnostic Evaluation (physician or clinical psychologist; ADOS, GARS, ADI or CARS)',
      status: 'verified',
      cites: [S.abhilPM, S.hfs210930],
    },
    payer: 'Aetna Better Health of Illinois',
    state: 'IL', kind: 'medicaid-mco', parent: 'Illinois Medicaid (HealthChoice Illinois)',
    pill: 'Payer Guide · Aetna Better Health · Illinois',
    h1: 'Aetna Better Health of Illinois ABA coverage: the intake guide.',
    metaTitle: 'Aetna Better Health of Illinois ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Aetna Better Health of Illinois handles ABA (Adaptive Behavior Support) for HealthChoice Illinois members: one-business-day notification for assessments, concurrent review for treatment, claims and appeal deadlines, and what intake should collect.',
    intro: [
      'Aetna Better Health of Illinois is one of the five statewide HealthChoice Illinois plans. It covers ABA under HFS’s Adaptive Behavior Support benefit for members under 21, and in February 2026 it rewrote its behavioral health utilization management for Public Act 104-0028: ABA assessments are approved on notice, and treatment moves to concurrent review.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under HFS’s ABS benefit (ages 0–20, ASD)' },
      { label: 'Assessment', value: '97151/97152 approved without medical-necessity review if notified within 1 business day' },
      { label: 'Treatment', value: 'Concurrent utilization review; “Authorization is still required for claims payment purposes”' },
      { label: 'Notify via', value: 'Provider Portal, 1-866-329-4701, or BH fax 1-844-528-3453' },
      { label: 'Timely filing', value: '180 days from date of service; 90 days from primary EOB for COB claims' },
      { label: 'Rates', value: 'HFS ABS fee schedule is the public benchmark (97153 $13.00 per 15 min)' },
    ],
    sections: [
      {
        h2: 'Authorization after Public Act 104-0028',
        body: [
          'Aetna Better Health’s February 20, 2026 notice says Public Act 104-0028 “establishes new requirements regarding utilization management and notification of behavioral health treatment,” effective January 1, 2026. For ABA: “For ABA assessments (97151, 97152), if Aetna Better Health of Illinois receives notification within one (1) business day of the start of the assessment, the service will be approved without medical necessity review. If notification is not received within one (1) business day, standard utilization review processes may apply. Concurrent utilization review will follow for ABA services requested after the initial assessment.” The same notice is explicit that “Authorization is still required for claims payment purposes.” Notify through the Provider Portal, by phone at 1-866-329-4701 (TTY 711), or by fax to 1-844-528-3453 for behavioral health.',
          IL_MCO_PA104,
        ],
        cites: [S.pa10428, S.ilga370c, S.abhilUM, S.molMemo, S.bcchpSum, S.merNotif, S.ccNotice],
      },
      {
        h2: 'Claims, decision clocks and appeals',
        body: [
          'The plan’s provider manual (titled the 2025 manual, posted at the 2026 address) sets the operational deadlines. New and corrected claims are due “within 180 days from the date of services”; claims with other insurance “within 90 days from primary insurer’s EOB date.” Clean claims are adjudicated 90 percent within 30 days and 99 percent within 90 days of receipt. Its UM table decides non-urgent pre-service requests “Within 96 hours of receipt of the request,” urgent pre-service within 48 hours, and concurrent reviews within 3 calendar days. Members (or a provider for them) may appeal “within sixty (60) calendar days” of the adverse benefit determination; standard appeals are answered within 15 business days. The manual lists the BACB as the credential it verifies for an “Applied Behavior Analyst.”',
        ],
        cites: [S.abhilPM],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Aetna Better Health of Illinois (not another HealthChoice plan or FFS) on the date of service.' },
      { title: 'Assessment start date', desc: 'Notify the plan within one business day of starting 97151/97152 to skip medical-necessity review.' },
      { title: 'Comprehensive Diagnostic Evaluation', desc: 'HFS standard: physician or clinical psychologist, with ADOS, GARS, ADI or CARS.' },
      { title: 'Physician order', desc: 'HFS requires a physician order for ABS, valid one year.' },
      { title: 'Other insurance', desc: 'Aetna is payer of last resort; file with the primary first and submit within 90 days of its EOB.' },
    ],
    sources: [S.abhilUM, S.abhilPM, S.hfs210930, S.hfs230824, S.hfsFee, S.hfsMap, S.cfr438, S.cfr433, S.idfpr],
    deliveryRules: {
      supervision: {
        value: 'The plan publishes no ABA supervision rule. HFS’s rule applies: RBTs “must receive supervision from a BCBA,” and HFS’s ABS guidance sets Case Leadership at “5%, or more, of all direct services” with at least two face-to-face contacts a month.',
        status: 'verified',
        cites: [S.abhilPM, S.hfs230824, S.hfs210930],
      },
      concurrentBilling: {
        value: 'Not addressed by the plan, and HFS publishes no rule beyond NCCI edits.',
        status: 'unverified',
        cites: [S.abhilPM, S.hfsFee],
        verifyVia: 'Aetna Better Health of Illinois Provider Services, 1-866-329-4701, or your provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'The plan publishes no ABA unit limit of its own. Claims adjudicate against the HFS ABS fee schedule, whose daily maximums are 97153 32 units, 97155 24, 0373T 24, 97156–97158 16, 97154 12, and 97151/97152/0362T 8.',
        status: 'plan-dependent',
        cites: [S.abhilPM, S.hfsFee],
        verifyVia: 'Aetna Better Health of Illinois UM, 1-866-329-4701: ask whether the plan applies the HFS daily maximums.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'The manual publishes no ABA session-note rule. HFS requires the BATP to be signed by the developing BCBA and by the family.',
        status: 'unverified',
        cites: [S.abhilPM, S.hfs210930],
        verifyVia: 'Aetna Better Health of Illinois Provider Experience representative or the documentation terms of your agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'The plan publishes no ABA setting rule. HFS limits remote ABS to 97151, 97155, 97156 and 97157 with GT/93 and POS 02 or 10.',
        status: 'unverified',
        cites: [S.abhilPM, S.hfsFee],
        verifyVia: 'Aetna Better Health of Illinois Provider Services, 1-866-329-4701: ask which POS codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'The plan publishes no ABA-specific rule, so HFS’s applies: the rendering BCBA or RBT is reported by name and NPI, and when an RBT renders, the supervising BCBA’s name and NPI go in Loop 2310D, NM1. Every renderer must be enrolled in IMPACT.',
        status: 'verified',
        cites: [S.abhilPM, S.hfs210930, S.hfs230824],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21: HFS covers ABS for children 0 through 20, and the plan publishes no different limit.',
        status: 'verified',
        cites: [S.hfs201030, S.abhilPM],
      },
      dxRecency: {
        value: 'The plan publishes nothing of its own. HFS: a CDE more than 24 months old needs current documentation of functional impairment by a physician or clinical psychologist.',
        status: 'verified',
        cites: [S.abhilPM, S.hfs210930],
      },
      diagnosingProviders: {
        value: 'The plan publishes nothing of its own. HFS: the CDE is “performed by a physician or a clinical psychologist.”',
        status: 'verified',
        cites: [S.abhilPM, S.hfs210930],
      },
      diagnosticTools: {
        value: 'The plan publishes nothing of its own. HFS: the CDE results in an ADOS, GARS, ADI or CARS.',
        status: 'verified',
        cites: [S.abhilPM, S.hfs210930],
      },
      referral: {
        value: 'The plan publishes nothing of its own. HFS requires a physician order and referral, valid one year.',
        status: 'verified',
        cites: [S.abhilPM, S.hfs210930],
      },
      telehealth: {
        value: 'The plan publishes no ABA telehealth rule, so HFS’s applies. ' + IL_FFS_TELE,
        status: 'verified',
        cites: [S.abhilPM, S.hfsFee],
      },
      authTurnaround: {
        value: 'The manual’s UM table: non-urgent pre-service decisions “Within 96 hours of receipt of the request,” urgent pre-service within 48 hours, urgent and elective concurrent reviews within 3 calendar days, post-service within 30 calendar days. Assessments notified within one business day are approved without review.',
        status: 'verified',
        cites: [S.abhilPM, S.abhilUM],
      },
      coordinationOfBenefits: {
        value: '“Aetna is the payer of last resort.” If other insurance is primary, “prior authorization of a service is not required unless it is known that the service provided is not covered by the primary payer”; then the plan’s PA rules apply. COB claims are due within 90 days of the primary insurer’s EOB, and the plan pays third-party copays, coinsurance or deductibles other than Medicare’s.',
        status: 'verified',
        cites: [S.abhilPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Aetna Better Health of Illinois require prior authorization for the ABA assessment?', a: 'Not if you notify it within one business day of starting 97151 or 97152: the assessment is then approved without medical-necessity review (effective January 1, 2026). Late notice can trigger standard review.' },
      { q: 'What happens after the assessment?', a: 'Treatment goes to concurrent utilization review, and the plan says an authorization is still required for claims payment. Ask UM at 1-866-329-4701 how it wants the first treatment request submitted.' },
      { q: 'What is the timely filing limit?', a: '180 days from the date of service for new and corrected claims; 90 days from the primary insurer’s EOB when another plan pays first.' },
      { q: 'Can ABA be done by telehealth for Aetna Better Health of Illinois members?', a: 'The plan publishes no ABA-specific rule, so HFS’s fee schedule governs: 97151, 97155, 97156 and 97157 with modifier GT or 93 and POS 02 or 10.' },
    ],
  },

  'blue-cross-community-health-plans-illinois': {
    slug: 'blue-cross-community-health-plans-illinois',
    family: 'bcbs',
    cardDesc: 'BCBSIL’s HealthChoice plan: all ABA codes on its PA list (MCG B-806-T) but notify within 24 hours of starting ABS (2026).',
    assessmentPA: {
      value: '97151 and 97152 are on the BCCHP prior authorization code list (ABA Initial Assessment Request form; effective/change 1/1/2026). Since January 1, 2026, providers “should notify us within 24 hours of initiation of services” for adaptive behavioral support, and “Utilization review may begin after the 24-hour notification period”',
      status: 'verified',
      cites: [S.bcchpCodes, S.bcchpSum],
    },
    treatmentPA: {
      value: 'Yes beyond the notification window: 97153–97158, 0362T and 0373T are on the code list (ABA Clinical Service Request form), and “All services will be reviewed for medical necessity and require authorization for utilization beyond the notification period”',
      status: 'verified',
      cites: [S.bcchpCodes, S.bcchpSum],
    },
    dxRequired: {
      value: 'Yes. The code list files ABA under “Applied Behavior Analysis (ABA) for Autism Spectrum Disorder (ASD) Diagnosis” with MCG B-806-T criteria; HFS’s ABS benefit requires ASD documented by a Comprehensive Diagnostic Evaluation',
      status: 'verified',
      cites: [S.bcchpCodes, S.hfs210930],
    },
    payer: 'Blue Cross Community Health Plans (BCBSIL Medicaid)',
    state: 'IL', kind: 'medicaid-mco', parent: 'Illinois Medicaid (HealthChoice Illinois)',
    pill: 'Payer Guide · Blue Cross Community Health Plans · Illinois',
    h1: 'Blue Cross Community Health Plans ABA coverage: the intake guide.',
    metaTitle: 'Blue Cross Community Health Plans (Illinois Medicaid) ABA Guide | Carelu',
    metaDescription:
      'How Blue Cross Community Health Plans (BCCHP), BCBSIL’s HealthChoice Illinois plan, handles ABA: 24-hour notification since 2026, the PA code list and forms, MCG criteria, rendering and supervising NPIs on the claim, and timelines.',
    intro: [
      'Blue Cross Community Health Plans (BCCHP) is Blue Cross and Blue Shield of Illinois’s HealthChoice Illinois plan, statewide. It lists every ABA code on its prior authorization code list, reviews them against MCG B-806-T, and since January 1, 2026 asks for notification within 24 hours of starting adaptive behavioral support, with review after that.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under HFS’s ABS benefit (ages 0–20, ASD)' },
      { label: 'Notification', value: 'Within 24 hours of initiating ABS services (eff. 1/1/2026)' },
      { label: 'PA code list', value: '97151–97158, 0362T, 0373T; ABA Initial Assessment / Clinical Service Request forms' },
      { label: 'Criteria', value: 'MCG B-806-T (licensed criteria, not public)' },
      { label: 'Decision clock', value: 'Standard 5 calendar days (+5 extension); urgent 48 hours' },
      { label: 'Claims', value: 'Rendering NPI in 24J/2310B; supervising BCBA in box 17/2310D when an RBT renders' },
      { label: 'Timely filing', value: '180 days from date of service' },
    ],
    sections: [
      {
        h2: 'Notification, the code list and the forms',
        body: [
          'BCBSIL’s Medicaid authorization summary (effective January 1, 2026, updated March 2026) says: “For outpatient behavioral health care, including partial hospitalization, intensive outpatient treatment and adaptive behavioral support services providers should notify us within 24 hours of initiation of services. Utilization review may begin after the 24-hour notification period. All services will be reviewed for medical necessity and require authorization for utilization beyond the notification period.” Notification goes through “your current method of requesting authorization.” BCBSIL’s January 2026 provider notice says the same for BCCHP and names applied behavior analysis expressly.',
          'The BCCHP prior authorization code list (10/1/2026) carries all ten ABA codes with a January 1, 2026 effective or change date: 97151 and 97152 with the ABA Initial Assessment Request form, 97153 through 97158 with the ABA Clinical Service Request form, and 0362T and 0373T with documentation of medical necessity. The criteria are MCG B-806-T, licensed criteria BCBSIL does not publish. Out-of-network providers need prior authorization for everything, and every provider must be registered in IMPACT.',
          IL_MCO_PA104,
        ],
        cites: [S.pa10428, S.ilga370c, S.bcchpSum, S.bcbsilUM, S.bcchpCodes, S.molMemo, S.abhilUM, S.merNotif, S.ccNotice],
      },
      {
        h2: 'Claims: whose NPI goes where',
        body: [
          'BCBSIL’s May 2026 billing reminder for ABS providers: report “the attested provider rendering the services” as the rendering provider (CMS-1500 box 24J; 837P loop 2310B, NM1), and “the attested supervising ABS clinician as the supervising provider on claims that identify a registered behavior technician as the rendering or servicing provider” (box 17; loop 2310D, NM1). “Claims received with a rendering provider who differs from the authorization or medical record documentation may be denied for noncompliance.” BCCHP’s first-file timely filing limit is 180 days from the date of service (from the last date when the claim spans a range), and corrected claims are also due within 180 days.',
        ],
        cites: [S.bcbsilABSBill, S.bcchpPM],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm BCCHP (Medicaid), not a BCBSIL commercial card: the rules differ.' },
      { title: 'Start date of services', desc: 'Notify BCBSIL within 24 hours of starting ABA; review can begin after that.' },
      { title: 'Comprehensive Diagnostic Evaluation', desc: 'HFS standard: physician or clinical psychologist, with ADOS, GARS, ADI or CARS.' },
      { title: 'Rendering and supervising clinicians', desc: 'The rendering provider on the claim must match the authorization; RBT claims name the supervising clinician.' },
      { title: 'Other insurance', desc: 'Medicaid pays last; bill the primary first.' },
    ],
    sources: [S.bcchpSum, S.bcchpCodes, S.bcchpPM, S.bcbsilABSBill, S.bcbsilUM, S.bcbsilPA104, S.hfs210930, S.hfs230824, S.hfsFee, S.hfsMap, S.cfr433, S.idfpr],
    deliveryRules: {
      supervision: {
        value: 'BCCHP publishes no ABA supervision ratio in the documents read. HFS’s rule applies: RBTs “must receive supervision from a BCBA,” with Case Leadership of 5% or more of direct services and two face-to-face contacts a month in HFS’s ABS guidance. MCG B-806-T may add requirements but is licensed and not public.',
        status: 'verified',
        cites: [S.bcchpCodes, S.hfs230824, S.hfs210930],
      },
      concurrentBilling: {
        value: 'Not addressed in the BCCHP manual, summary or code list.',
        status: 'unverified',
        cites: [S.bcchpPM, S.bcchpCodes],
        verifyVia: 'BCBSIL Medicaid Utilization Management, 877-860-2837, or your BCCHP agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No ABA unit limits appear in the BCCHP documents read; hours are set at review against MCG B-806-T, which is licensed. HFS’s fee schedule daily maximums (97153 32 units, 97155 24) are the state benchmark.',
        status: 'unverified',
        cites: [S.bcchpCodes, S.hfsFee],
        verifyVia: 'BCBSIL Medicaid UM, 877-860-2837: ask how ABA hours are authorized after the 24-hour notification window.',
        blocker: 'licensed',
      },
      noteSignature: {
        value: 'Not addressed in the BCCHP documents read. BCBSIL warns that a rendering provider who differs from the authorization or the medical record can lead to denial, so sign notes as the clinician billed.',
        status: 'unverified',
        cites: [S.bcbsilABSBill, S.bcchpPM],
        verifyVia: 'BCBSIL Medicaid provider services (number on the member card) or your BCCHP agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'No BCCHP ABA setting rule was found. HFS limits remote ABS to 97151, 97155, 97156 and 97157 with GT/93 and POS 02 or 10.',
        status: 'unverified',
        cites: [S.bcchpPM, S.hfsFee],
        verifyVia: 'BCBSIL Medicaid provider services: ask which POS codes BCCHP pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Rendering provider in CMS-1500 box 24J / 837P loop 2310B; when an RBT renders, the supervising ABS clinician in box 17 / loop 2310D. A rendering provider that differs from the authorization or record “may be denied for noncompliance.”',
        status: 'verified',
        cites: [S.bcbsilABSBill, S.hfs210930],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21: HFS covers ABS for children 0 through 20; BCCHP publishes no different limit.',
        status: 'verified',
        cites: [S.hfs201030, S.bcchpCodes],
      },
      dxRecency: {
        value: 'BCCHP publishes nothing beyond MCG B-806-T, which is licensed. HFS’s rule: a CDE older than 24 months needs current functional-impairment documentation.',
        status: 'plan-dependent',
        cites: [S.bcchpCodes, S.hfs210930],
        verifyVia: 'BCBSIL Medicaid UM, 877-860-2837: ask what the ABA Initial Assessment Request form requires on diagnosis date.',
        blocker: 'licensed',
      },
      diagnosingProviders: {
        value: 'Not stated by BCCHP. HFS: the CDE is performed by a physician or clinical psychologist.',
        status: 'plan-dependent',
        cites: [S.bcchpCodes, S.hfs210930],
        verifyVia: 'BCBSIL Medicaid UM, 877-860-2837.',
        blocker: 'licensed',
      },
      diagnosticTools: {
        value: 'Not stated by BCCHP. HFS: ADOS, GARS, ADI or CARS.',
        status: 'plan-dependent',
        cites: [S.bcchpCodes, S.hfs210930],
        verifyVia: 'BCBSIL Medicaid UM, 877-860-2837.',
        blocker: 'licensed',
      },
      referral: {
        value: 'BCCHP needs no referral to in-network specialists, but HFS’s ABS benefit requires a physician order, valid one year, and BCCHP’s ABA forms ask for documentation of medical necessity.',
        status: 'verified',
        cites: [S.bcchpPM, S.hfs210930, S.bcchpCodes],
      },
      telehealth: {
        value: 'BCCHP publishes no ABA telehealth rule, so HFS’s applies. ' + IL_FFS_TELE,
        status: 'verified',
        cites: [S.bcchpPM, S.hfsFee],
      },
      authTurnaround: {
        value: 'BCCHP manual (January 2026): routine decisions “no later than 5 calendar days from receipt of request” (5 more with an extension); urgent decisions and notice within 48 hours. ABS services are notified within 24 hours of initiation, with review after.',
        status: 'verified',
        cites: [S.bcchpPM, S.bcchpSum],
      },
      coordinationOfBenefits: {
        value: 'The BCCHP manual read has no ABA-specific COB rule. Medicaid is payer of last resort (42 CFR 433.139; HFS Chapter 100), so bill the primary first.',
        status: 'plan-dependent',
        cites: [S.cfr433, S.hfsCh100],
        verifyVia: 'BCBSIL Medicaid provider services (number on the card): ask how BCCHP wants secondary ABA claims and whether it requires its own authorization when commercial coverage is primary.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Blue Cross Community Health Plans require prior authorization for ABA?', a: 'All ABA codes are on BCCHP’s PA code list, but since January 1, 2026 you notify BCBSIL within 24 hours of starting adaptive behavioral support and review can begin after that. Services beyond the notification period need authorization.' },
      { q: 'Which forms does BCCHP use for ABA?', a: 'The ABA Initial Assessment Request form for 97151/97152 and the ABA Clinical Service Request form for 97153–97158, per the BCCHP code list.' },
      { q: 'Whose NPI goes on a BCCHP ABA claim?', a: 'The rendering provider in box 24J (loop 2310B). When an RBT renders, the supervising ABS clinician goes in box 17 (loop 2310D).' },
      { q: 'Is BCCHP the same as a BCBSIL commercial plan?', a: 'No. BCCHP is BCBSIL’s Medicaid plan and follows HFS’s ABS benefit and the 24-hour notification rule; commercial BCBSIL plans have their own ABA PA list and phone-based preservice process.' },
    ],
  },

  'countycare-illinois': {
    slug: 'countycare-illinois',
    family: 'countycare',
    cardDesc: 'Cook County Health’s HealthChoice plan: no PA for 97151/97152 from 1/1/2026; ABA treatment still needs PA (4-day routine decisions).',
    assessmentPA: {
      value: 'No. “Effective January 1st, 2026, there are no prior authorization requirements for ABA/ABS Behavior Identification Assessment and Supporting Assessments” (97151, 97152)',
      status: 'verified',
      cites: [S.ccNotice],
    },
    treatmentPA: {
      value: 'Yes. “Additional services for ABA/ABS treatment and support will require prior authorization for outpatient behavioral health services”; the manual’s PA table lists “IOP, PHP, ABA: Required”',
      status: 'verified',
      cites: [S.ccNotice, S.ccPM],
    },
    dxRequired: {
      value: 'Yes. CountyCare publishes no ABA criteria of its own in the documents read, so HFS’s rule applies: ASD documented by a Comprehensive Diagnostic Evaluation (physician or clinical psychologist; ADOS, GARS, ADI or CARS)',
      status: 'verified',
      cites: [S.ccPM, S.hfs210930],
    },
    payer: 'CountyCare Health Plan (Cook County)',
    state: 'IL', kind: 'medicaid-mco', parent: 'Illinois Medicaid (HealthChoice Illinois)',
    pill: 'Payer Guide · CountyCare · Illinois',
    h1: 'CountyCare ABA coverage: the intake guide.',
    metaTitle: 'CountyCare (Cook County Medicaid) ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How CountyCare Health Plan, Cook County’s HealthChoice Illinois plan, covers ABA: no PA on assessments since 2026, PA on treatment, decision and claims deadlines, continuity of care, and what intake should collect.',
    intro: [
      'CountyCare is the HealthChoice Illinois plan run by Cook County Health and serves Cook County only. It covers ABA under HFS’s ABS benefit. In 2026 it removed prior authorization from the two assessment codes but kept it on treatment, which makes it the most conservative of the Illinois plans on the treatment side.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under HFS’s ABS benefit (ages 0–20, ASD); Cook County residents only' },
      { label: 'Assessment', value: 'No PA for 97151/97152 from 1/1/2026' },
      { label: 'Treatment', value: 'Prior authorization required (check the Authorization Look-Up Tool)' },
      { label: 'Decision clock', value: 'Routine PA 4 calendar days; urgent 48 hours' },
      { label: 'Timely filing', value: '180 calendar days from date of service; payer ID 06541' },
      { label: 'Continuity', value: 'Members treated in the past 90 days get 90 days to move to an in-network ABA provider' },
    ],
    sections: [
      {
        h2: 'Authorization: assessments free, treatment authorized',
        body: [
          'CountyCare’s February 2026 notice: “Effective January 1st, 2026, there are no prior authorization requirements for ABA/ABS Behavior Identification Assessment and Supporting Assessments. Providers are directed to submit claims for these services rendered.” It lists 97151 and 97152, and adds: “additional services for ABA/ABS treatment and support will require prior authorization for outpatient behavioral health services,” with the code-level rules in the Authorization Look-Up Tool. The provider manual (January 2025) lists ABA among behavioral health services that require PA, takes PA requests by phone (312-864-8200 or 855-444-1661), portal or behavioral health fax 800-498-8217, and “renders decisions on routine prior authorization requests within four (4) calendar days following receipt of the request” and urgent requests within 48 hours.',
          IL_MCO_PA104,
        ],
        cites: [S.pa10428, S.ilga370c, S.ccNotice, S.ccPM, S.molMemo, S.abhilUM, S.bcchpSum, S.merNotif],
      },
      {
        h2: 'Claims, disputes and continuity of care',
        body: [
          'Clean claims are due “within one hundred eighty (180) calendar days from the date of service”; 90 percent of clean claims are processed within 30 days and 99 percent within 90 days. Provider disputes are due within 60 calendar days of the Explanation of Payment. Electronic claims use payer ID 06541. For members joining CountyCare mid-treatment, behavioral health outpatient services including ABA get continuity of care when the member was treated in the previous 90 days for an existing condition; “Members have ninety (90) days to transition to an in-network provider.” CountyCare, “like all Medicaid programs and plans, is always the payer of last resort.”',
        ],
        cites: [S.ccPM],
      },
    ],
    collect: [
      { title: 'Member ID and county', desc: 'CountyCare serves Cook County only; confirm enrollment on the date of service.' },
      { title: 'Comprehensive Diagnostic Evaluation', desc: 'HFS standard: physician or clinical psychologist, with ADOS, GARS, ADI or CARS.' },
      { title: 'Physician order', desc: 'HFS requires a physician order for ABS, valid one year.' },
      { title: 'Prior treatment', desc: 'Members treated in the last 90 days can keep their provider for 90 days while they transition.' },
      { title: 'Other insurance', desc: 'CountyCare pays last; bill the primary first.' },
    ],
    sources: [S.ccNotice, S.ccPM, S.hfs210930, S.hfs230824, S.hfsFee, S.hfsMap, S.cfr433, S.cfr438, S.idfpr],
    deliveryRules: {
      supervision: {
        value: 'CountyCare publishes no ABA supervision rule in the documents read. HFS’s rule applies: RBTs “must receive supervision from a BCBA,” with Case Leadership of 5% or more of direct services and two face-to-face contacts a month in HFS’s ABS guidance.',
        status: 'verified',
        cites: [S.ccPM, S.hfs230824, S.hfs210930],
      },
      concurrentBilling: {
        value: 'Not addressed by CountyCare; HFS publishes no rule beyond NCCI edits.',
        status: 'unverified',
        cites: [S.ccPM, S.hfsFee],
        verifyVia: 'CountyCare Provider Services, 312-864-8200, or your Provider Relations representative.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'CountyCare publishes no ABA unit limits; authorized units come from PA. HFS’s fee schedule daily maximums (97153 32 units, 97155 24) are the state benchmark.',
        status: 'unverified',
        cites: [S.ccPM, S.hfsFee],
        verifyVia: 'CountyCare Medical Management, 312-864-8200: ask how ABA units are authorized.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not addressed in the CountyCare documents read.',
        status: 'unverified',
        cites: [S.ccPM],
        verifyVia: 'CountyCare Provider Relations (countycareproviderservices@cookcountyhhs.org).',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'No CountyCare ABA setting rule was found. HFS limits remote ABS to 97151, 97155, 97156 and 97157 with GT/93 and POS 02 or 10.',
        status: 'unverified',
        cites: [S.ccPM, S.hfsFee],
        verifyVia: 'CountyCare Provider Services, 312-864-8200.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'CountyCare publishes no ABA-specific rule, so HFS’s applies: rendering BCBA or RBT by name and NPI; for RBT services the supervising BCBA’s name and NPI in Loop 2310D, NM1; all renderers enrolled in IMPACT.',
        status: 'verified',
        cites: [S.ccPM, S.hfs210930, S.hfs230824],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21: HFS covers ABS for children 0 through 20; CountyCare publishes no different limit.',
        status: 'verified',
        cites: [S.hfs201030, S.ccPM],
      },
      dxRecency: {
        value: 'CountyCare publishes nothing of its own. HFS: a CDE more than 24 months old needs current functional-impairment documentation.',
        status: 'verified',
        cites: [S.ccPM, S.hfs210930],
      },
      diagnosingProviders: {
        value: 'CountyCare publishes nothing of its own. HFS: physician or clinical psychologist.',
        status: 'verified',
        cites: [S.ccPM, S.hfs210930],
      },
      diagnosticTools: {
        value: 'CountyCare publishes nothing of its own. HFS: ADOS, GARS, ADI or CARS.',
        status: 'verified',
        cites: [S.ccPM, S.hfs210930],
      },
      referral: {
        value: 'CountyCare publishes nothing of its own. HFS requires a physician order and referral, valid one year.',
        status: 'verified',
        cites: [S.ccPM, S.hfs210930],
      },
      telehealth: {
        value: 'CountyCare’s manual describes telehealth only generally and points to the IAMHP billing guide; it has no ABA rule, so HFS’s applies. ' + IL_FFS_TELE,
        status: 'verified',
        cites: [S.ccPM, S.hfsFee],
      },
      authTurnaround: {
        value: 'Routine PA decisions “within four (4) calendar days following receipt of the request”; urgent within 48 hours; retrospective reviews (requested within 90 days of service) within 30 calendar days of complete information.',
        status: 'verified',
        cites: [S.ccPM],
      },
      coordinationOfBenefits: {
        value: 'CountyCare “is always the payer of last resort.” Bill the primary payer first and include its payment information with the claim.',
        status: 'verified',
        cites: [S.ccPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does CountyCare require prior authorization for ABA?', a: 'Not for the assessment: 97151 and 97152 have needed no PA since January 1, 2026. ABA treatment still requires prior authorization.' },
      { q: 'How fast does CountyCare decide an ABA request?', a: 'Routine requests within 4 calendar days, urgent within 48 hours, per its provider manual.' },
      { q: 'What is CountyCare’s timely filing limit?', a: '180 calendar days from the date of service; disputes within 60 days of the EOP.' },
      { q: 'Who can enroll in CountyCare?', a: 'CountyCare is the HealthChoice Illinois plan for Cook County only, per HFS’s managed care map.' },
    ],
  },

  'meridian-illinois': {
    slug: 'meridian-illinois',
    family: 'centene',
    cardDesc: 'Centene’s HealthChoice plan: notify within 24 hours of 97151/97152 (from 5/1/2026); treatment needs PA under CP.BH.104.',
    assessmentPA: {
      value: 'Notification, not PA: “Effective May 1, 2026, providers must notify Meridian within 24 hours of conducting ABA assessments (CPT codes 97151 and 97152).” “Failure to notify the plan within the 24-hour timeframe will result in a denial of coverage”',
      status: 'verified',
      cites: [S.merNotif, S.merPM],
    },
    treatmentPA: {
      value: 'Yes. The manual lists Adaptive Behavior Treatment under “Prior authorization required,” and Meridian says “All other ABA-related services and treatment plans are subject to prior authorization and/or concurrent review”',
      status: 'verified',
      cites: [S.merPM, S.merNotif],
    },
    dxRequired: {
      value: 'Yes. CP.BH.104 requires a confirmed DSM ASD diagnosis “established by a licensed physician, psychologist, or other licensed professional with specialized training in diagnosis and treatment of ASD,” with severity level, plus a comprehensive diagnostic evaluation',
      status: 'verified',
      cites: [S.merBH104],
    },
    payer: 'Meridian (Meridian Health Plan of Illinois)',
    state: 'IL', kind: 'medicaid-mco', parent: 'Illinois Medicaid (HealthChoice Illinois)',
    pill: 'Payer Guide · Meridian · Illinois',
    h1: 'Meridian Illinois ABA coverage: the intake guide.',
    metaTitle: 'Meridian Illinois Medicaid ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Meridian, Centene’s HealthChoice Illinois plan, covers ABA: 24-hour notification for assessments, prior authorization for treatment, Centene policy CP.BH.104 (diagnosis recency, tools, hours, supervision), documentation rules, and claims deadlines.',
    intro: [
      'Meridian Health Plan of Illinois, a Centene company, is a statewide HealthChoice Illinois plan, and its manual lists “Applied behavior analysis (ABA) services” as a covered Medicaid service. It reviews ABA against Centene’s national clinical policy CP.BH.104, which is more prescriptive than HFS’s notices, and from May 1, 2026 it requires notice within 24 hours of an ABA assessment. Meridian also operates YouthCare, the plan for DCFS youth, which has its own guide.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, listed as a covered Medicaid service (HFS ABS benefit, ages 0–20)' },
      { label: 'Assessment', value: 'Notify within 24 hours of 97151/97152 (eff. 5/1/2026); late notice is denied' },
      { label: 'Treatment', value: 'Prior authorization and/or concurrent review' },
      { label: 'Criteria', value: 'Centene CP.BH.104 (rev. 09/25) + CP.BH.105 documentation' },
      { label: 'Hours', value: 'Up to 6/day and 30/week unless justified; under 20/week if in school full-time' },
      { label: 'Timely filing', value: '180 days from date of service' },
    ],
    sections: [
      {
        h2: 'Notification and prior authorization',
        body: [
          'Meridian’s February 26, 2026 notice, issued “in accordance with Illinois Public Act 104-0028”: “Effective May 1, 2026, providers must notify Meridian within 24 hours of conducting ABA assessments (CPT codes 97151 and 97152). Utilization review may begin after the 24-hour notification period. Failure to notify the plan within the 24-hour timeframe will result in a denial of coverage due to lack of timely notification.” Notification “appl[ies] only to ABA initial assessments”; everything else stays under prior authorization or concurrent review. Notify through the secure provider portal, using the same steps as a PA request, or Provider Services at 866-606-3700. The June 2026 manual’s behavioral health table matches: Adaptive Behavior Treatment initial assessment under “Notification required within 24 hours,” and Adaptive Behavior Treatment under “Prior authorization required.”',
          IL_MCO_PA104,
        ],
        cites: [S.pa10428, S.ilga370c, S.merNotif, S.merPM, S.molMemo, S.abhilUM, S.bcchpSum, S.ccNotice],
      },
      {
        h2: 'What CP.BH.104 asks for',
        body: [
          'Centene’s ABA policy (last revision 09/25, posted by Meridian in February 2026) requires, to start treatment, a CDE “conducted in the past three years,” or, if it is three to five years old, a diagnostic interview within 12 months of the request; continuation needs a CDE within the past five years. The CDE must use “A minimum of two of the following assessment tools, including at least one primary clinician tool” (STAT, ADI-R, CARS/CARS-2, GARS-3, ADOS/ADOS-2). Hours must be justified by impairment and consider school (“less than 20 hours per week if attending school full-time”), and should “not exceed six hours per day up to a total of 30 hours per week” unless documentation justifies more. Protocol modification (97155) must occur “for at least two hours per week or 10% of the direct service hours provided, whichever is greater” (one to two hours a week is acceptable under 10 hours). Assessments and treatment plans are updated at least every six months, and services may be delivered at home, clinic, school or community, in person or by telehealth.',
        ],
        cites: [S.merBH104],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Meridian (not YouthCare or another plan) on the date of service.' },
      { title: 'Assessment date', desc: 'Notify Meridian within 24 hours of 97151/97152, or the assessment is denied.' },
      { title: 'CDE within 3 years', desc: 'CP.BH.104: CDE in the last 3 years, or an interview within 12 months if it is 3–5 years old.' },
      { title: 'Two diagnostic tools', desc: 'At least one primary clinician tool (ADOS-2, ADI-R, CARS-2, GARS-3 or STAT).' },
      { title: 'School schedule', desc: 'Full-time school caps requested hours below 20 a week under CP.BH.104.' },
      { title: 'Other insurance', desc: 'Meridian is billed as secondary and pays up to the Medicaid allowable.' },
    ],
    sources: [S.merNotif, S.merPM, S.merBH104, S.merBH105, S.hfs210930, S.hfs230824, S.hfsFee, S.hfsMap, S.cfr438, S.cfr433, S.idfpr],
    deliveryRules: {
      supervision: {
        value: 'CP.BH.104: Adaptive Behavior Treatment with Protocol Modification “occurs for at least two hours per week or 10% of the direct service hours provided, whichever is greater” (one to two hours a week is acceptable below 10 hours a week), and treatment must be “delivered or supervised by an ABA-credentialed professional.” HFS adds that RBTs “must receive supervision from a BCBA.”',
        status: 'verified',
        cites: [S.merBH104, S.hfs230824],
      },
      concurrentBilling: {
        value: 'Not addressed in CP.BH.104, CP.BH.105 or the manual; HFS publishes no rule beyond NCCI edits.',
        status: 'unverified',
        cites: [S.merBH104, S.merBH105],
        verifyVia: 'Meridian Provider Services, 866-606-3700, or the Meridian claims manual.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'CP.BH.104: treatment hours “Do not exceed six hours per day up to a total of 30 hours per week” unless clinical documentation justifies more, and should be under 20 hours a week for a child in school full-time. HFS’s fee schedule daily unit maximums also apply to claims.',
        status: 'verified',
        cites: [S.merBH104, S.hfsFee],
      },
      noteSignature: {
        value: 'CP.BH.105 requires every session note to carry the “Rendering clinician/technician’s name, credentials, and dated signature,” the start and end time, any pauses, location, service code, participants and a session summary; treatment plans record the “Signature, credential, and role of each person who reviewed and signed the plan.”',
        status: 'verified',
        cites: [S.merBH105],
      },
      placeOfService: {
        value: 'CP.BH.104: “Services may be provided in various settings (e.g., home, clinic, school, community) and modalities (e.g., in-person, telehealth),” and a school-based plan has its own documentation requirements. HFS limits remote billing to 97151, 97155, 97156 and 97157.',
        status: 'verified',
        cites: [S.merBH104, S.hfsFee],
      },
      billAsProvider: {
        value: 'The manual requires claims with the “appropriate NPI, taxonomy, and provider TIN for services registered in IMPACT and rendered on the submitted claim.” HFS’s ABS rule: rendering BCBA or RBT by NPI, with the supervising BCBA in Loop 2310D when an RBT renders.',
        status: 'verified',
        cites: [S.merPM, S.hfs210930],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21: HFS covers ABS for children 0 through 20; Meridian publishes no different limit.',
        status: 'verified',
        cites: [S.hfs201030, S.merPM],
      },
      dxRecency: {
        value: 'CP.BH.104: for treatment initiation the CDE must be from the past three years, or, if three to five years old, supplemented by a diagnostic interview within 12 months of the request; continuation needs a CDE within five years.',
        status: 'verified',
        cites: [S.merBH104],
      },
      diagnosingProviders: {
        value: 'CP.BH.104: “a licensed physician, psychologist, or other licensed professional with specialized training in diagnosis and treatment of ASD, or a provider otherwise authorized under state law to diagnose autism.” HFS’s ABS standard is a physician or clinical psychologist.',
        status: 'verified',
        cites: [S.merBH104, S.hfs210930],
      },
      diagnosticTools: {
        value: 'CP.BH.104: at least two tools, including at least one primary clinician tool: STAT, ADI-R, CARS/CARS-2, GARS-3 or ADOS/ADOS-2.',
        status: 'verified',
        cites: [S.merBH104],
      },
      referral: {
        value: 'Meridian publishes no separate referral rule; HFS’s ABS benefit requires a physician order and referral, valid one year.',
        status: 'verified',
        cites: [S.merPM, S.hfs210930],
      },
      telehealth: {
        value: 'CP.BH.104 allows telehealth as a modality; for billing, HFS’s fee schedule governs. ' + IL_FFS_TELE,
        status: 'verified',
        cites: [S.merBH104, S.hfsFee],
      },
      authTurnaround: {
        value: 'The Meridian manual read does not print a standard PA decision time for ABA. The federal managed care limit is 7 calendar days for rating periods starting on or after January 1, 2026 (72 hours expedited).',
        status: 'plan-dependent',
        cites: [S.merPM, S.cfr438],
        verifyVia: 'Meridian Provider Services, 866-606-3700: ask the standard and expedited ABA decision times.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: '“If Meridian is not the only insurance coverage for the member, Meridian should be billed as the secondary payer for all services rendered and is responsible only for the difference between what the primary insurance pays and the allowable Medicaid fee schedule.”',
        status: 'verified',
        cites: [S.merPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Meridian require prior authorization for the ABA assessment?', a: 'No PA, but notification: from May 1, 2026 you must notify Meridian within 24 hours of 97151 or 97152, or coverage is denied for late notice.' },
      { q: 'Does ABA treatment need prior authorization with Meridian?', a: 'Yes. Adaptive Behavior Treatment is on Meridian’s prior authorization list and is reviewed against Centene policy CP.BH.104.' },
      { q: 'How recent must the diagnosis be for Meridian?', a: 'CP.BH.104 wants a CDE from the last three years to start treatment, or a new diagnostic interview within 12 months if the CDE is three to five years old.' },
      { q: 'How many ABA hours will Meridian authorize?', a: 'Up to 6 hours a day and 30 a week unless documentation justifies more, and under 20 hours a week for a child in school full-time (CP.BH.104).' },
      { q: 'What is Meridian’s timely filing limit?', a: '180 days from the date of service.' },
    ],
  },

  'molina-healthcare-illinois': {
    slug: 'molina-healthcare-illinois',
    family: 'molina',
    cardDesc: 'HealthChoice plan: no auth for the ABA assessment or the first 48 therapy units a year; concurrent review from unit 49 (2026).',
    assessmentPA: {
      value: 'No. “Authorization is not required for an Applied Behavioral Analysis (ABA) initial assessment, evaluation, or the first 48 units per calendar year for ABA therapy” (memo, Jan. 22, 2026)',
      status: 'verified',
      cites: [S.molMemo],
    },
    treatmentPA: {
      value: 'Concurrent review only: “ABA services are no longer eligible for prior authorization and require concurrent review only effective January 1, 2026.” Submit concurrent clinical “no later than 24 hours after the initiation of the 49th unit” (units counted across 0373T, 97153–97158)',
      status: 'verified',
      cites: [S.molMemo],
    },
    dxRequired: {
      value: 'Yes. Molina’s ABS memo: services for individuals under 21 “diagnosed with an Autism Spectrum Disorder (ASD) as indicated by a Comprehensive Diagnostic Evaluation,” referred by a physician, with ongoing services recommended by a BCBA on a BATP',
      status: 'verified',
      cites: [S.molABS22, S.hfs210930],
    },
    payer: 'Molina Healthcare of Illinois',
    state: 'IL', kind: 'medicaid-mco', parent: 'Illinois Medicaid (HealthChoice Illinois)',
    pill: 'Payer Guide · Molina Healthcare · Illinois',
    h1: 'Molina Healthcare of Illinois ABA coverage: the intake guide.',
    metaTitle: 'Molina Healthcare of Illinois ABA Coverage & Concurrent Review Guide | Carelu',
    metaDescription:
      'How Molina Healthcare of Illinois covers ABA (ABS) for HealthChoice Illinois members: no authorization for the assessment or the first 48 units a year, concurrent review from the 49th unit, Availity-only submission, claims and appeal deadlines.',
    intro: [
      'Molina Healthcare of Illinois is a statewide HealthChoice Illinois plan and has covered ABS since November 1, 2020. Of the Illinois plans, it went furthest in reading Public Act 104-0028: from January 1, 2026 ABA has no prior authorization at all, only concurrent review that starts once a child passes 48 therapy units in the calendar year.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as ABS for members under 21 with ASD' },
      { label: 'Assessment', value: 'No authorization for the initial assessment or evaluation' },
      { label: 'Treatment', value: 'First 48 units per calendar year without authorization; concurrent review clinical due within 24 hours of the 49th unit' },
      { label: 'Submit via', value: 'Availity Essentials only' },
      { label: 'Decision clock', value: 'Standard 5 calendar days; expedited 48 hours' },
      { label: 'Timely filing', value: '180 days (Medicaid)' },
    ],
    sections: [
      {
        h2: 'Authorization: 48 free units, then concurrent review',
        body: [
          'Molina’s January 22, 2026 memo: “authorization is not required for an Applied Behavioral Analysis (ABA) initial assessment, evaluation, or the first 48 units per calendar year for ABA therapy (cumulative of 0373T, 97153, 97154, 97155, 97156, 97157, 97158). Due to Illinois Public Act 104-0028, ABA services are no longer eligible for prior authorization and require concurrent review only effective January 1, 2026. Note: Providers must submit concurrent clinical no later than 24 hours after the initiation of the 49th unit for concurrent review.” Forty-eight units is 12 hours, so for a typical intensive program the clock starts in the first week. “Availity Essentials is the exclusive provider portal for Molina Healthcare—and the only way to submit authorization requests,” and clinical documents must accompany every request.',
          IL_MCO_PA104,
        ],
        cites: [S.pa10428, S.ilga370c, S.molMemo, S.abhilUM, S.bcchpSum, S.merNotif, S.ccNotice],
      },
      {
        h2: 'Claims, decisions and appeals',
        body: [
          'Molina’s 2026 Medicaid provider manual (updated 09/2026): “Standard timely filing is 180 days for Medicaid.” Standard authorization decisions and notice come “within five (5) calendar days,” expedited within 48 hours. Members may appeal within 60 calendar days of the adverse benefit determination. Molina is the payer of last resort. Molina’s ABS memo tells providers to “refer to the HFS fee schedules for correct codes and rates” and that RBT services are submitted by the supervising provider with the RBT as rendering provider in Loop 2310B; HFS’s current rule adds the supervising BCBA in Loop 2310D.',
        ],
        cites: [S.molPM, S.molABS22, S.hfs210930],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Molina HealthChoice Illinois on the date of service.' },
      { title: 'Units used this year', desc: 'The 48 unit-free allowance is per calendar year; ask the family about any other ABA provider this year.' },
      { title: 'Comprehensive Diagnostic Evaluation', desc: 'HFS standard: physician or clinical psychologist, with ADOS, GARS, ADI or CARS.' },
      { title: 'Physician referral', desc: 'Molina’s memo requires referral by a physician; HFS’s order is valid one year.' },
      { title: 'Other insurance', desc: 'Molina is payer of last resort.' },
    ],
    sources: [S.molMemo, S.molPM, S.molABS22, S.hfs210930, S.hfs230824, S.hfsFee, S.hfsMap, S.cfr433, S.idfpr],
    deliveryRules: {
      supervision: {
        value: 'Molina publishes no ABA ratio of its own in the documents read (its 2022 memo’s collaborative-agreement language predates HFS’s 2023 change). HFS’s rule applies: RBTs “must receive supervision from a BCBA,” with Case Leadership of 5% or more of direct services in HFS’s ABS guidance.',
        status: 'verified',
        cites: [S.molABS22, S.hfs230824, S.hfs210930],
      },
      concurrentBilling: {
        value: 'Not addressed in Molina’s memo or manual; HFS publishes no rule beyond NCCI edits.',
        status: 'unverified',
        cites: [S.molMemo, S.molPM],
        verifyVia: 'Molina Provider Relations (MHILProviderNetworkManagement@MolinaHealthcare.com).',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'The only Molina unit rule is the 48-unit annual threshold before concurrent review. Molina points to the HFS fee schedule for codes and rates, whose daily maximums are 97153 32 units, 97155 24, 0373T 24.',
        status: 'verified',
        cites: [S.molMemo, S.molABS22, S.hfsFee],
      },
      noteSignature: {
        value: 'Not addressed in the Molina documents read.',
        status: 'unverified',
        cites: [S.molPM],
        verifyVia: 'Molina Provider Relations or the documentation standards in your Molina agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'No Molina ABA setting rule was found. HFS limits remote ABS to 97151, 97155, 97156 and 97157 with GT/93 and POS 02 or 10.',
        status: 'unverified',
        cites: [S.molPM, S.hfsFee],
        verifyVia: 'Molina Provider Relations: ask which POS codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Molina’s memo: RBT services are “submitted by the collaborating BCBA (supervising Provider) with the RBT identified as the Rendering Provider in Loop 2310B of the 837P.” HFS’s ABS rule also requires the supervising BCBA’s name and NPI in Loop 2310D when an RBT renders.',
        status: 'verified',
        cites: [S.molABS22, S.hfs210930],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21: “ABS services are available to individuals under the age of 21.”',
        status: 'verified',
        cites: [S.molABS22, S.hfs201030],
      },
      dxRecency: {
        value: 'Molina publishes nothing of its own. HFS: a CDE more than 24 months old needs current functional-impairment documentation.',
        status: 'verified',
        cites: [S.molABS22, S.hfs210930],
      },
      diagnosingProviders: {
        value: 'Molina requires ASD “as indicated by a Comprehensive Diagnostic Evaluation”; HFS: the CDE is performed by a physician or clinical psychologist.',
        status: 'verified',
        cites: [S.molABS22, S.hfs210930],
      },
      diagnosticTools: {
        value: 'Molina publishes nothing of its own. HFS: ADOS, GARS, ADI or CARS.',
        status: 'verified',
        cites: [S.molABS22, S.hfs210930],
      },
      referral: {
        value: 'Yes: services for members “who have been referred for ABS services by a physician,” with ongoing services recommended by a BCBA on a BATP. HFS’s physician order is valid one year.',
        status: 'verified',
        cites: [S.molABS22, S.hfs210930],
      },
      telehealth: {
        value: 'Molina’s manual follows CMS and state telehealth requirements and has no ABA-specific rule, so HFS’s applies. ' + IL_FFS_TELE,
        status: 'verified',
        cites: [S.molPM, S.hfsFee],
      },
      authTurnaround: {
        value: 'Standard authorization: determination and notice “within five (5) calendar days”; expedited within 48 hours. For ABA, concurrent clinical is due within 24 hours after the 49th unit starts.',
        status: 'verified',
        cites: [S.molPM, S.molMemo],
      },
      coordinationOfBenefits: {
        value: '“Medicaid is always the payer of last resort”; bill other coverage first.',
        status: 'verified',
        cites: [S.molPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Molina Illinois require prior authorization for ABA?', a: 'No. Since January 1, 2026 ABA has concurrent review only: no authorization for the initial assessment or the first 48 units of therapy per calendar year.' },
      { q: 'When does Molina’s concurrent review start?', a: 'Submit concurrent clinical no later than 24 hours after starting the 49th unit of the year, counted across 0373T and 97153–97158.' },
      { q: 'How do I submit to Molina Illinois?', a: 'Through Availity Essentials, which Molina calls the only way to submit authorization requests, with clinical documents attached.' },
      { q: 'What does Molina Illinois pay for ABA?', a: 'Molina directs providers to the HFS ABS fee schedule (97153 $13.00, 97155 $20.39 per 15 minutes); contracted rates are in your agreement.' },
    ],
  },

  'youthcare-illinois': {
    slug: 'youthcare-illinois',
    family: 'centene',
    cardDesc: 'Meridian-run HealthChoice plan for DCFS youth: notify within 24 hours of an ABA assessment; treatment needs PA (CP.BH.104).',
    assessmentPA: {
      value: 'Notification: the September 2026 manual lists “Adaptive Behavior Treatment – initial assessment” under “Notification required within 24 hours” (“Concurrent review may begin after the 24-hour notification period”)',
      status: 'verified',
      cites: [S.ycPM],
    },
    treatmentPA: {
      value: 'Yes: “Adaptive Behavior Treatment (initial assessment requires notification within 24 hours)” is under “Prior authorization required”; request PA at least 14 calendar days before services start',
      status: 'verified',
      cites: [S.ycPM],
    },
    dxRequired: {
      value: 'Yes. YouthCare lists Centene policy CP.BH.104, which requires a confirmed DSM ASD diagnosis by a licensed physician, psychologist or other licensed professional trained in ASD, with severity level and a comprehensive diagnostic evaluation',
      status: 'verified',
      cites: [S.ycPolicies, S.merBH104],
    },
    payer: 'YouthCare (HealthChoice Illinois for DCFS youth)',
    state: 'IL', kind: 'medicaid-mco', parent: 'Illinois Medicaid (HealthChoice Illinois)',
    pill: 'Payer Guide · YouthCare · Illinois',
    h1: 'YouthCare (Illinois) ABA coverage: the intake guide.',
    metaTitle: 'YouthCare Illinois ABA Coverage & Prior Auth Guide (DCFS Youth) | Carelu',
    metaDescription:
      'How YouthCare, the HealthChoice Illinois plan for DCFS youth in care and former youth in care, covers ABA: 24-hour notification for the assessment, prior authorization for treatment, Centene policy CP.BH.104, and claims timelines.',
    intro: [
      'YouthCare is the statewide HealthChoice Illinois plan for youth in the care of the Illinois Department of Children and Family Services and for former youth in care (adopted, in kinship care, or returned home). HFS says it is operated by Meridian. It covers ABA: its September 2026 provider manual lists Adaptive Behavior Treatment in its behavioral health authorization table, and its policy page lists the same Centene ABA policies Meridian uses.',
    ],
    atGlance: [
      { label: 'Who is enrolled', value: 'DCFS Youth in Care and Former Youth in Care only' },
      { label: 'Covers ABA?', value: 'Yes (HFS ABS benefit, ages 0–20)' },
      { label: 'Assessment', value: 'Notify within 24 hours of the initial assessment' },
      { label: 'Treatment', value: 'Prior authorization required; request 14 calendar days ahead' },
      { label: 'Decision clock', value: 'Standard 5 days; urgent 48 hours' },
      { label: 'Timely filing', value: '180 days from date of service' },
    ],
    sections: [
      {
        h2: 'Authorization and who YouthCare serves',
        body: [
          'HFS’s January 2026 map lists YouthCare as a statewide plan serving “Illinois Department of Children & Family Services (DCFS) Youth In Care (YIC) and Former Youth In Care (FYIC) Enrollees only,” and HFS describes it as “operated by Meridian Health.” Its September 2026 manual mirrors Meridian’s behavioral health table: “Adaptive Behavior Treatment – initial assessment” sits under “Notification required within 24 hours (Effective 1/1/26, notification is required within 24 hours of initiation of services. Concurrent review may begin after the 24-hour notification period),” and “Adaptive Behavior Treatment” under “Prior authorization required.” PA “should be requested at least 14 calendar days before the requested service delivery date”; standard decisions are made “within five (5) days,” urgent within 48 hours of complete information, and provider and member are notified within one business day of the decision.',
          IL_MCO_PA104,
        ],
        cites: [S.pa10428, S.ilga370c, S.hfsMap, S.hfsMC, S.ycPM, S.molMemo, S.abhilUM, S.bcchpSum, S.merNotif, S.ccNotice],
      },
      {
        h2: 'Clinical criteria: CP.BH.104',
        body: [
          'YouthCare’s clinical and payment policy page lists Centene’s CP.BH.104 (Applied Behavior Analysis) and CP.BH.105 (ABA Documentation Requirements). CP.BH.104 wants a CDE from the past three years to start treatment (or a diagnostic interview within 12 months if it is three to five years old), at least two diagnostic tools including one primary clinician tool (STAT, ADI-R, CARS/CARS-2, GARS-3, ADOS/ADOS-2), hours up to six a day and 30 a week unless justified and under 20 a week for a child in school full-time, and protocol modification of at least two hours a week or 10% of direct hours. For a child in foster care, collect who holds consent and who participates in caregiver training early: CP.BH.104 expects documented caregiver involvement and a plan for barriers to family engagement.',
        ],
        cites: [S.ycPolicies, S.merBH104],
      },
    ],
    collect: [
      { title: 'DCFS status', desc: 'Youth in care or former youth in care; YouthCare enrolls only these children.' },
      { title: 'Consent and caregiver', desc: 'Who can sign for the child, and which caregiver will join parent training (CP.BH.104 expects caregiver involvement).' },
      { title: 'CDE within 3 years', desc: 'With two tools including a primary clinician tool (ADOS-2, ADI-R, CARS-2, GARS-3 or STAT).' },
      { title: 'Physician order', desc: 'HFS requires a physician order for ABS, valid one year.' },
      { title: 'Start date', desc: 'Notify within 24 hours of the initial assessment; request treatment PA 14 days ahead.' },
    ],
    sources: [S.ycPM, S.ycPolicies, S.merBH104, S.merBH105, S.hfsMap, S.hfsMC, S.hfs210930, S.hfs230824, S.hfsFee, S.cfr433, S.idfpr],
    deliveryRules: {
      supervision: {
        value: 'CP.BH.104 (listed on YouthCare’s policy page): protocol modification “for at least two hours per week or 10% of the direct service hours provided, whichever is greater” (one to two hours a week acceptable under 10 hours). HFS: RBTs “must receive supervision from a BCBA.”',
        status: 'verified',
        cites: [S.ycPolicies, S.merBH104, S.hfs230824],
      },
      concurrentBilling: {
        value: 'Not addressed in CP.BH.104, CP.BH.105 or the YouthCare manual.',
        status: 'unverified',
        cites: [S.merBH104, S.ycPM],
        verifyVia: 'YouthCare provider services, 844-289-2264.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'CP.BH.104: up to six hours a day and 30 a week unless documentation justifies more; under 20 a week for full-time students. HFS fee schedule daily maximums also apply.',
        status: 'verified',
        cites: [S.merBH104, S.hfsFee],
      },
      noteSignature: {
        value: 'CP.BH.105 (listed on YouthCare’s policy page): each note carries the “Rendering clinician/technician’s name, credentials, and dated signature,” start and end times, pauses, location, code, participants and a summary.',
        status: 'verified',
        cites: [S.ycPolicies, S.merBH105],
      },
      placeOfService: {
        value: 'CP.BH.104: home, clinic, school or community, in person or by telehealth. HFS limits remote billing to 97151, 97155, 97156 and 97157.',
        status: 'verified',
        cites: [S.merBH104, S.hfsFee],
      },
      billAsProvider: {
        value: 'YouthCare’s manual requires claims with the “appropriate NPI, taxonomy, and provider TIN” for services registered in IMPACT and rendered. HFS: rendering BCBA or RBT by NPI, supervising BCBA in Loop 2310D when an RBT renders.',
        status: 'verified',
        cites: [S.ycPM, S.hfs210930],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. HFS covers ABS for children 0 through 20, and YouthCare’s manual describes the plan as serving “current and former youth in care aged birth through 21”; it publishes no different ABA age limit.',
        status: 'verified',
        cites: [S.hfs201030, S.ycPM],
      },
      dxRecency: {
        value: 'CP.BH.104: CDE in the past three years to start (or an interview within 12 months if three to five years old); within five years to continue.',
        status: 'verified',
        cites: [S.merBH104, S.ycPolicies],
      },
      diagnosingProviders: {
        value: 'CP.BH.104: a licensed physician, psychologist, or other licensed professional with specialized ASD training, or a provider authorized under state law to diagnose autism.',
        status: 'verified',
        cites: [S.merBH104, S.ycPolicies],
      },
      diagnosticTools: {
        value: 'CP.BH.104: at least two tools, one a primary clinician tool (STAT, ADI-R, CARS/CARS-2, GARS-3, ADOS/ADOS-2).',
        status: 'verified',
        cites: [S.merBH104, S.ycPolicies],
      },
      referral: {
        value: 'YouthCare publishes no separate referral rule; HFS’s ABS benefit requires a physician order and referral, valid one year.',
        status: 'verified',
        cites: [S.ycPM, S.hfs210930],
      },
      telehealth: {
        value: 'CP.BH.104 allows telehealth as a modality; for billing, HFS’s fee schedule governs. ' + IL_FFS_TELE,
        status: 'verified',
        cites: [S.merBH104, S.hfsFee],
      },
      authTurnaround: {
        value: 'Standard requests decided “within five (5) days”; urgent within 48 hours of complete information; notice within one business day of the decision. Request PA at least 14 calendar days before services.',
        status: 'verified',
        cites: [S.ycPM],
      },
      coordinationOfBenefits: {
        value: 'When other coverage exists, YouthCare (Meridian) “should be billed as the secondary payer for all services rendered and is responsible only for the difference between what the primary insurance pays and the allowable Medicaid fee schedule.”',
        status: 'verified',
        cites: [S.ycPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does YouthCare cover ABA?', a: 'Yes. Its September 2026 manual lists Adaptive Behavior Treatment in its behavioral health authorization rules, under HFS’s ABS benefit for children under 21.' },
      { q: 'Who is in YouthCare?', a: 'Only DCFS youth in care and former youth in care, statewide, per HFS’s managed care map.' },
      { q: 'Does the ABA assessment need PA with YouthCare?', a: 'No PA, but notify YouthCare within 24 hours of the initial assessment. Treatment needs prior authorization.' },
      { q: 'Is YouthCare the same as Meridian?', a: 'Meridian operates YouthCare and the two share Centene’s ABA policies, but YouthCare is a separate plan with its own manual and member ID.' },
    ],
  },

  'aetna-illinois': {
    slug: 'aetna-illinois',
    family: 'aetna',
    cardDesc: 'Aetna ABA guide + CPB 0554/0648 + Illinois’s 356z.14 mandate and IDFPR licensure; Aetna Better Health is its IL Medicaid plan.',
    assessmentPA: {
      value: 'Aetna’s national rule: all ten ABA codes, 97151 included, are on its behavioral health precertification list (eff. 8/1/2024).' + IL_370CW_PA,
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.ilga370c, S.ilga356],
      verifyVia: 'Availity or the precertification line on the card: ask whether this Illinois plan is fully insured and, if so, whether Aetna requires precertification or only notification for ABA since January 1, 2026.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Aetna’s national rule: precertification via Availity or the number on the card; the reauthorization interval is set by the plan (progress is evaluated every six months under the guide).' + IL_370CW_PA,
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide, S.ilga370c],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): ask whether the group carries ABA precertification and what reauthorization interval it uses.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) by an appropriate provider; CPB 0554 calls ABA experimental for non-ASD indications',
      status: 'verified',
      cites: [S.aetnaGuide, S.aetnaCPB],
    },
    payer: 'Aetna in Illinois',
    state: 'IL', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Illinois',
    h1: 'Aetna ABA coverage in Illinois: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Illinois: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Illinois families: the national medical necessity guide, precertification of all ABA codes, Illinois’s autism mandate (215 ILCS 5/356z.14) and site-of-care bulletin, IDFPR behavior analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Illinois, an Aetna commercial card means three layers: Aetna’s national ABA policy, Illinois’s autism mandate in the Insurance Code, and the plan’s funding type, which decides whether the mandate applies. A child on Illinois Medicaid with Aetna is a different product, Aetna Better Health of Illinois, with its own guide.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s national ABA guide' },
      { label: 'State mandate', value: '215 ILCS 5/356z.14 (Illinois Insurance Code; P.A. 95-1005, plans issued or renewed after Dec. 12, 2008)' },
      { label: 'Mandate age', value: 'Under 21 (“individuals under 21 years of age”)' },
      { label: 'Mandate caps', value: '$36,000 a year, adjusted annually for medical inflation by the Director of Insurance (current figure: ask the plan); no visit limits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'Yes: IDFPR licenses Behavior Analysts and Assistant Behavior Analysts (licensing began Jan. 15, 2025)' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Illinois',
        body: [
          'Aetna covers ABA for autism spectrum disorder and considers it “experimental, investigational, or unproven for all other non-ASD indications” (CPB 0554). Its behavioral health precertification list (effective August 1, 2024) names all ten ABA codes, 97151 through 97158, 0362T and 0373T, and most requests go through Availity. The medical necessity guide requires a DSM-5 ASD diagnosis, functional impairment “on a standardized scale of functioning in the past 12 months” at least one standard deviation below the mean (or significant risk of harm), and authorizes protocol modification “at 1 to 2 hours per 10 hours of treatment by protocol.” Its only state exhibit is Maryland’s, so the national criteria apply unchanged in Illinois. Aetna’s Illinois Medicaid plan is Aetna Better Health of Illinois.',
        ],
        cites: [S.aetnaCPB, S.aetnaPrecert, S.aetnaGuide, S.hfsMap],
      },
      {
        h2: 'The Illinois mandate: what we could verify',
        body: [IL_MANDATE_BODY],
        cites: [S.ilga356, S.fl356, S.ilga370c, S.pa10428, S.idoiCB2417, S.ebhAdmin],
      },
      {
        h2: 'Licensure: does the BCBA need an Illinois license?',
        body: [IL_COMMERCIAL_LIC_BODY + ' Aetna’s network criteria say “All BCBAs, BCaBAs and paraprofessionals must meet state requirements,” and its provider manual tells telehealth providers to “ensure that they have the proper licensure based on state requirements.”'],
        cites: [S.idfpr, S.ilga6_20, S.ilga6_150, S.ilgaTele, S.bacbLic, S.aetnaNPC, S.aetnaOM],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA?',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) treats payment as a contract term: where a provider has both an intermediary contract and a direct agreement, “your direct Aetna rates will apply,” and a member whose benefits run out cannot be charged “more than the contracted rate.” Get the rates from your Aetna agreement. For a public benchmark, Illinois Medicaid’s ABS fee schedule (updated 05/14/2026) pays 97153 at $13.00 and 97155 at $20.39 per 15 minutes; commercial contracts are negotiated separately.',
        ],
        cites: [S.aetnaOM, S.hfsFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Illinois mandate applies) vs. self-funded ERISA (plan document governs). Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification and precertification on Availity.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date. Aetna’s policy is ASD-only.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3, ABAS, VB-MAPP or ABLLS).' },
      { title: 'Illinois license numbers', desc: 'IDFPR license for each BCBA/BCaBA as well as BACB certification.' },
    ],
    sources: [S.aetnaCPB, S.aetnaCPB648, S.aetnaGuide, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.ilga356, S.fl356, S.ilga370c, S.pa10428, S.idoiCB2417, S.idfpr, S.ilga6_20, S.ilgaTele, S.bacbLic, S.erisa, S.hfsFee, S.hfsCh100, S.cfr433, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s Network Participation Criteria (5/26): services “must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board,” supervised staff may be a BCaBA “or a paraprofessional,” and “A minimum of one hour of face-to-face supervision is required of the unlicensed or noncertified paraprofessional by a BCBA or licensed psychologist (or behavioral health professional) for each 10 hours of applied behavior analysis,” plus the supervisor “onsite with the child at least one hour a month.” “All BCBAs, BCaBAs and paraprofessionals must meet state requirements” — in Illinois that includes IDFPR licensure.',
        status: 'verified',
        cites: [S.aetnaNPC, S.aetnaGuide, S.idfpr],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA policies (CPB 0554, the medical necessity guide).',
        status: 'unverified',
        cites: [S.aetnaCPB, S.aetnaGuide],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap. The guide lists typical intensities of 10–25 hours a week for comprehensive and 1–20 for focused programs (typical, not caps) and ties authorized hours to documented severity; progress is evaluated every six months.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      noteSignature: {
        value: 'Not addressed. Aetna sets treatment-plan content requirements but not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'The participating-provider agreement and the Aetna Behavioral Health provider manual section on documentation.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Aetna’s guide applies the ABA criteria to outpatient care in any setting, and inpatient, residential or partial hospitalization use that level of care’s criteria. For fully insured Illinois plans, the Department of Insurance has told carriers they may not deny covered ABA “solely because of the location” of care and that ABA sites “include non-school, non-home, or non-provider locations” (Company Bulletin 2024-17).',
        status: 'verified',
        cites: [S.aetnaGuide, S.idoiCB2417],
      },
      billAsProvider: {
        value: 'Services “must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists” where in scope, unless mandates, plan documents or contracts say otherwise. Illinois licenses behavior analysts, so the IDFPR-licensed behavior analyst is the billing credential.',
        status: 'verified',
        cites: [S.aetnaGuide, S.idfpr],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national ABA guide sets no age cap; its age ranges are typical, not limiting.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.ilga356],
        verifyVia: 'Live benefits verification on the member ID: establish fully insured vs. self-funded ERISA, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the ASD diagnosis itself, but medical necessity requires functional impairment on a standardized scale administered in the past 12 months (at least one standard deviation below the mean) or a significant risk of harm.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'A DSM-5 ASD diagnosis “obtained by an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice).”' + MANDATE_DX_TAIL,
        status: 'verified',
        cites: [S.ilga356, S.aetnaGuide],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2 and CARS-2 among the tools for establishing the diagnosis. The ABA guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s national ABA policies require no physician referral; what they require is precertification of all ten ABA codes.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.idoiCB2417],
      },
      telehealth: {
        value: 'Aetna’s provider manual (6/26): Aetna Behavioral Health “offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out,” and providers “must act within the scope of their license and ensure that they have the proper licensure based on state requirements.” No current Aetna ABA telehealth code list was read this run, and Illinois’s commercial telehealth statute could not be retrieved.',
        status: 'plan-dependent',
        cites: [S.aetnaOM],
        verifyVia: 'Availity or the precertification line on the card: ask whether the plan is self-funded and opted out of telehealth, and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: COMM_AUTH_VALUE('Aetna'),
        status: 'plan-dependent',
        cites: [S.erisa, S.pa10428, S.ilga370c],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Illinois-regulated) or self-funded (ERISA), and what precertification turnaround and reauthorization lead time Aetna expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMM_COB_VALUE('Aetna'),
        status: 'plan-dependent',
        cites: [S.hfsCh100, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Aetna at benefits verification for the member’s coordination-of-benefits order between two parents’ plans, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Illinois?', a: 'Yes, under its national ABA guide for ASD, with Illinois’s autism mandate (215 ILCS 5/356z.14) layered on for fully insured plans. Self-funded employer plans follow their own documents.' },
      { q: 'Does Aetna require prior authorization for the ABA assessment in Illinois?', a: 'Aetna’s national precertification list includes 97151 and every other ABA code. But for fully insured Illinois policies, 215 ILCS 5/370c(w) has barred prior authorization of outpatient mental health treatment since January 1, 2026 (notification plus concurrent review is allowed), and the statute does not name ABA, so ask Aetna how it handles ABA on this plan. Self-funded plans follow their own rules.' },
      { q: 'Does a BCBA need an Illinois license to bill Aetna?', a: 'Illinois has licensed behavior analysts since January 15, 2025 (enforcement from April 21, 2025), and Aetna requires staff to meet state requirements, so yes: plan on the IDFPR license as well as BACB certification.' },
      { q: 'Can my ABA clinic run sessions in the community for an Aetna member in Illinois?', a: 'For fully insured Illinois plans, the Department of Insurance has told carriers they may not deny covered ABA solely because of where it is delivered, including non-school, non-home and non-provider settings (Company Bulletin 2024-17). Self-funded plans follow their own terms.' },
    ],
  },

  'cigna-illinois': {
    slug: 'cigna-illinois',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + Evernorth’s Illinois addendum + Illinois’s 356z.14 mandate; no PA on assessment codes.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the policy covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Evernorth’s national rule: completed assessment and treatment plan submitted for authorization under EN0499.' + IL_370CW_PA,
      status: 'plan-dependent',
      cites: [S.cignaARG, S.en0499, S.ilga370c, S.ilga356],
      verifyVia: 'Evernorth Provider Services, 800.926.2273: ask whether this Illinois plan is fully insured and, if so, whether Evernorth requires authorization or only notification for ABA treatment since January 1, 2026.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: ASD under DSM-5-TR criteria by an independently licensed professional; provisional or rule-out diagnoses do not count',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Illinois',
    state: 'IL', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Illinois',
    h1: 'Cigna / Evernorth ABA coverage in Illinois: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Illinois: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Illinois families: national policy EN0499, no PA on assessments, Evernorth’s Illinois regulatory addendum, Illinois’s autism mandate and site-of-care bulletin, IDFPR licensure, and what intake should verify.',
    intro: [
      'For an intake team in Illinois, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, Illinois’s autism mandate, and the plan’s funding type. Many Cigna members are on self-funded employer plans, and Evernorth’s own Illinois addendum says it does not apply to them, so check funding first. Cigna runs no Illinois Medicaid plan.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'State mandate', value: '215 ILCS 5/356z.14 (Illinois Insurance Code; P.A. 95-1005, plans issued or renewed after Dec. 12, 2008)' },
      { label: 'Mandate age', value: 'Under 21 (“individuals under 21 years of age”)' },
      { label: 'Mandate caps', value: '$36,000 a year, adjusted annually for medical inflation by the Director of Insurance (current figure: ask the plan); no visit limits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans; Evernorth’s Illinois addendum also excludes self-funded plans' },
      { label: 'Licensure', value: 'Yes: IDFPR licenses Behavior Analysts and Assistant Behavior Analysts (licensing began Jan. 15, 2025)' },
      { label: 'Fee schedule', value: 'Not public — your ABA fee schedule is Exhibit A of your Evernorth Provider Agreement; Provider Services 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Illinois',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). The autism resource guide says prior authorization “is no longer required for assessment CPT codes 97151, 97152, or 0362T with a diagnosis of autism, as long as the provider is independently licensed or a Board Certified Behavior Analyst® (BCBA®) and the patient’s policy covers ABA services.” Treatment needs the completed assessment and plan. “All ABA CPT codes are covered telehealth services,” electronic claims use payer ID 62308, and “Evernorth does not credential nonlicensed/noncertified staff,” so their services are billed under the supervising provider. EN0499 and the guide carry no Illinois-specific criteria.',
          'Evernorth’s Administrative Guidelines (September 2026) include an Illinois Regulatory Addendum for providers treating in Illinois. It applies only to fully insured business (“do not apply with regard to Covered Services rendered to Participants covered under self-funded plans”), asks that outpatient behavioral health participants be seen for initial appointments “within ten business days” and follow-ups within 20 days, and bars Evernorth from recouping a payment “twelve (12) months or more after the original payment was made” except in listed cases.',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin],
      },
      {
        h2: 'The Illinois mandate: what we could verify',
        body: [IL_MANDATE_BODY],
        cites: [S.ilga356, S.fl356, S.ilga370c, S.pa10428, S.idoiCB2417, S.ebhAdmin],
      },
      {
        h2: 'Licensure: does the BCBA need an Illinois license?',
        body: [IL_COMMERCIAL_LIC_BODY],
        cites: [S.idfpr, S.ilga6_20, S.ilga6_150, S.ilgaTele, S.bacbLic],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth’s Administrative Guidelines say the Provider Agreement terms “include the reimbursement rates applicable to covered services” and tell ABA providers: “For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement.” Virtual services carry modifier 95, which Evernorth says “will not change the reimbursement.” Fee questions go to Provider Services at 800.926.2273. For a public benchmark, Illinois Medicaid’s ABS fee schedule pays 97153 at $13.00 per 15 minutes; commercial contracts are negotiated separately.',
        ],
        cites: [S.ebhAdmin, S.hfsFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Illinois mandate and Evernorth’s Illinois addendum apply) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and license type, and the date of the most recent diagnosis. Provisional or rule-out diagnoses don’t count.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Illinois license numbers', desc: 'IDFPR license for each behavior analyst as well as BACB certification.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.ilga356, S.fl356, S.ilga370c, S.pa10428, S.idoiCB2417, S.idfpr, S.ilga6_20, S.ilgaTele, S.bacbLic, S.erisa, S.hfsFee, S.hfsCh100, S.cfr433, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'EN0499: case supervision by a BCBA, Licensed Behavior Analyst, or independently licensed mental health clinician with ABA training, at “one to two hours per ten hours of direct treatment”; when direct treatment is 10 hours a week or less, at least one to two hours a week. In Illinois the supervising behavior analyst also needs the IDFPR license.',
        status: 'verified',
        cites: [S.en0499, S.idfpr],
      },
      concurrentBilling: {
        value: '“Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time).”',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap is published. All ABA codes bill in 15-minute units and only with 97151–97158, 0362T and 0373T; intensity must reflect severity, goals and response to treatment.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499],
      },
      noteSignature: {
        value: 'Each service needs its own record including the “Name, credential (if applicable), and signature of ABA provider who rendered the service,” with date and time, location, the intervention and who was present.',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'EN0499 excludes services “primarily educational or vocational in nature” and asks for goals and data by setting. For fully insured Illinois plans, the Department of Insurance has told carriers they may not deny covered ABA “solely because of the location” of care (Company Bulletin 2024-17).',
        status: 'verified',
        cites: [S.en0499, S.idoiCB2417],
      },
      billAsProvider: {
        value: 'Evernorth does not credential nonlicensed or noncertified staff; their services are billed under the supervising provider. On a CMS-1500, print your name in box 31 and “List only a BCBA or other licensed provider in box 33”; electronic claims use payer ID 62308.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; access to intervention “should not be restricted by age.”' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.ilga356],
        verifyVia: 'Live benefits verification: establish fully insured vs. self-funded ERISA first, then the plan’s age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but a provisional or rule-out diagnosis does not count, and the data clocks run at 60 days: assessment instrument within 60 days before treatment starts, baseline data within 60 days, and current data within 60 days of a continued-treatment request.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional “licensed to practice independently and whose licensure board considers diagnostics” within scope, using DSM-5-TR criteria.' + MANDATE_DX_TAIL,
        status: 'verified',
        cites: [S.ilga356, S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated, but it must be standardized, valid, completed in full and the current edition (“must be the Vineland-3 vs. Vineland-II”).',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral. Assessments 97151, 97152 and 0362T need no PA with an autism diagnosis when the provider is independently licensed or a BCBA; treatment needs authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.idoiCB2417],
      },
      telehealth: {
        value: '“All ABA CPT codes are covered telehealth services” (autism resource guide), and EN0499 allows “traditional in-person service delivery, telehealth, or a hybrid.” Evernorth bills virtual services with modifier 95 at the same rate.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ebhAdmin],
      },
      authTurnaround: {
        value: COMM_AUTH_VALUE('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.erisa, S.pa10428, S.ilga370c],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Illinois-regulated) or self-funded (ERISA), and what turnaround and reauthorization lead time Evernorth expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMM_COB_VALUE('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.hfsCh100, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Cigna/Evernorth at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Illinois?', a: 'Yes, under national policy EN0499 for ASD, with Illinois’s autism mandate layered on for fully insured plans. Self-funded employer plans follow their own documents.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in Illinois?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'Can Cigna ABA be delivered by telehealth in Illinois?', a: 'Yes. Cigna’s autism resource guide covers all ABA CPT codes by telehealth, billed with modifier 95. The clinician still needs an Illinois license for a client in Illinois.' },
      { q: 'What does Cigna pay for ABA in Illinois?', a: 'Cigna publishes no ABA rates. Evernorth puts your fee schedule in Exhibit A of your Provider Agreement; call 800.926.2273. Illinois Medicaid’s 97153 rate ($13.00 per 15 minutes) is the public benchmark.' },
    ],
  },

  'unitedhealthcare-illinois': {
    slug: 'unitedhealthcare-illinois',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + Illinois’s 356z.14 mandate; Illinois is not in Optum’s state-mandate supplement; no UHC IL Medicaid plan.',
    assessmentPA: {
      value: 'Optum’s national rule: the ABA Supplemental Clinical Criteria require prior authorization for ABA “unless otherwise specified or mandated by contract or law.”' + IL_370CW_PA,
      status: 'plan-dependent',
      cites: [S.optumSCC, S.ilga370c, S.ilga356],
      verifyVia: 'Optum Provider Express support: ask whether this Illinois plan is fully insured and, if so, whether Optum requires prior authorization or only notification for ABA since January 1, 2026.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Optum’s national rule: required, with continued-service review; the review interval is set per authorization.' + IL_370CW_PA,
      status: 'plan-dependent',
      cites: [S.optumSCC, S.ilga370c],
      verifyVia: 'Optum Provider Express support: ask whether a fully insured Illinois plan needs prior authorization or notification plus concurrent review, and what review interval will be set.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5-TR ASD confirmed by the diagnosing clinician with at least one clinically validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Illinois',
    state: 'IL', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Illinois',
    h1: 'UnitedHealthcare / Optum ABA coverage in Illinois: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Illinois: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Illinois families: Optum’s ABA criteria and authorization, three-code telehealth list, credential modifiers, Illinois’s autism mandate and site-of-care bulletin, IDFPR licensure, and what intake should verify.',
    intro: [
      'For an intake team in Illinois, a UnitedHealthcare card means three layers: Optum Behavioral Health’s national ABA criteria, Illinois’s autism mandate, and the plan’s funding type. UnitedHealthcare is not one of the HealthChoice Illinois Medicaid plans on HFS’s 2026 map, so a UHC card here is commercial (or Medicare).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: '215 ILCS 5/356z.14 (Illinois Insurance Code; P.A. 95-1005, plans issued or renewed after Dec. 12, 2008)' },
      { label: 'Mandate age', value: 'Under 21 (“individuals under 21 years of age”)' },
      { label: 'Mandate caps', value: '$36,000 a year, adjusted annually for medical inflation by the Director of Insurance (current figure: ask the plan); no visit limits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'Yes: IDFPR licenses Behavior Analysts and Assistant Behavior Analysts (licensing began Jan. 15, 2025)' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Illinois',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; annual review August 2025, interim review April 2026): prior authorization for ABA, direct case supervision of 1–2 hours per 10 hours of direct treatment, and continued-service review that looks hard at use below 80% of authorized hours over two weeks. Optum’s ABA State Mandates supplement (July 2026) has entries for Arizona, California, Connecticut, Florida, Indiana, Kansas (Medicaid), Kentucky, Maryland, Massachusetts, New Jersey (Medicaid), New York (Medicaid), Ohio, Pennsylvania and Virginia; Illinois is not among them, so no Illinois-specific criteria modify the commercial policy. HFS’s 2026 managed care map lists no UnitedHealthcare plan in HealthChoice Illinois.',
        ],
        cites: [S.optumSCC, S.optumSM, S.hfsMap],
      },
      {
        h2: 'The Illinois mandate: what we could verify',
        body: [IL_MANDATE_BODY],
        cites: [S.ilga356, S.fl356, S.ilga370c, S.pa10428, S.idoiCB2417, S.ebhAdmin],
      },
      {
        h2: 'Licensure: does the BCBA need an Illinois license?',
        body: [IL_COMMERCIAL_LIC_BODY + ' Optum’s ABA reimbursement policy notes that state regulatory requirements “may supplement, modify or supersede” its technician rules.'],
        cites: [S.idfpr, S.ilga6_20, S.ilga6_150, S.ilgaTele, S.bacbLic, S.optumReimb],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA?',
        body: [
          'UnitedHealthcare publishes no ABA rate table; Optum pays from the contract. Optum’s National Network Manual (effective Sept. 1, 2026) defines the “Fee Maximum” as the most a participating provider may be paid for a service. Optum’s commercial ABA Reimbursement Policy (2022RP501A) makes the credential level part of the claim line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA, HP for a doctoral-level BCBA-D. Ask Optum network management for your rate sheet. For a public benchmark, Illinois Medicaid’s ABS fee schedule pays 97153 at $13.00 per 15 minutes; commercial contracts are negotiated separately.',
        ],
        cites: [S.optumNNM, S.optumReimb, S.hfsFee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Illinois mandate applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification on Provider Express.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD and severity level, confirmed with a validated tool (ADI-R, ADOS-2 and others).' },
      { title: 'Technician credentials', desc: 'Optum’s HM line is billed for an RBT; bring RBT numbers for every technician.' },
      { title: 'Illinois license numbers', desc: 'IDFPR license for each behavior analyst as well as BACB certification.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumReimb, S.optumNNM, S.hfsMap, S.ilga356, S.fl356, S.ilga370c, S.pa10428, S.idoiCB2417, S.idfpr, S.ilga6_20, S.ilgaTele, S.bacbLic, S.erisa, S.hfsFee, S.hfsCh100, S.cfr433, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: '“Consistent with CASP standards of care, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week.” Optum does not recommend parents serving as their own child’s RBT. In Illinois the supervising behavior analyst also needs the IDFPR license.',
        status: 'verified',
        cites: [S.optumSCC, S.idfpr],
      },
      concurrentBilling: {
        value: 'Not addressed. The SCC define direct case supervision as happening during direct treatment but do not state the billing consequence.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum Provider Express National Network Manual and the participating-provider agreement, or a written coding determination from Optum.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap. Requested hours must be justified by documented clinical need; at continued-service review, use of authorized hours below 80% over a two-week period must be explained.',
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
        value: 'Not covered: “Services that are not ABA therapy, such as 1:1 aid delivered simultaneously during classroom instruction, or services covered under the Individuals with Disabilities Education Act (IDEA)”; school coordination is allowed. For fully insured Illinois plans, the Department of Insurance has told carriers they may not deny covered ABA “solely because of the location” of care (Company Bulletin 2024-17).',
        status: 'verified',
        cites: [S.optumSCC, S.idoiCB2417],
      },
      billAsProvider: {
        value: 'Every line carries the rendering credential: HM (RBT), HN (BCaBA), HO (master’s-level BCBA or licensed clinician), HP (doctoral-level), under Optum’s commercial ABA Reimbursement Policy.',
        status: 'verified',
        cites: [S.optumReimb],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion; the member’s benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.ilga356],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with severity level using validated tools, and progress is measured from baseline with validated, norm-referenced tools at each review.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'A diagnosis “issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis” under DSM-5-TR, with diagnosis and severity confirmed by the diagnosing clinician using at least one clinically validated tool.' + MANDATE_DX_TAIL,
        status: 'verified',
        cites: [S.ilga356, S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool from a non-exhaustive list that includes ADI-R and ADOS-2; treatment intensity is set from baseline measures such as VB-MAPP, ABLLS-R or Vineland.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral; the SCC require prior authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.idoiCB2417],
      },
      telehealth: {
        value: 'Optum’s Telehealth Billing guide (September 2025), commercial only: “For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157.” Bill POS 02 or 10; Optum “will not reimburse for services billed with only telehealth modifiers” and no POS. The 97151 assessment and technician 97153 are not on the list. Illinois’s commercial telehealth statute could not be retrieved this run.',
        status: 'verified',
        cites: [S.optumTele],
      },
      authTurnaround: {
        value: COMM_AUTH_VALUE('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.erisa, S.pa10428, S.ilga370c],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Illinois-regulated) or self-funded (ERISA), and what turnaround Optum expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMM_COB_VALUE('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.hfsCh100, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask UnitedHealthcare/Optum at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Illinois?', a: 'Yes, under Optum’s national ABA criteria for ASD, with Illinois’s autism mandate layered on for fully insured plans.' },
      { q: 'Does Optum have Illinois-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement (July 2026) does not list Illinois.' },
      { q: 'Is UnitedHealthcare an Illinois Medicaid plan?', a: 'No. HFS’s 2026 map lists Aetna Better Health, Blue Cross Community Health Plans, CountyCare, Meridian, Molina and YouthCare.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in Illinois?', a: 'Optum’s commercial telehealth guide allows only 97155, 97156 and 97157, billed POS 02 or 10. The 97151 assessment and 97153 are not on that list.' },
    ],
  },

  'bcbs-illinois': {
    slug: 'bcbs-illinois',
    family: 'bcbs',
    cardDesc: 'BCBSIL (HCSC), the dominant Illinois carrier: PA on 97153–97158/0362T/0373T, preservice by phone since April 2026, CPCP011 billing rules.',
    assessmentPA: {
      value: 'Not on BCBSIL’s 2026 commercial outpatient behavioral health PA code list: the list names 97153–97158, 0362T and 0373T but not 97151 or 97152 (applies to some commercial non-HMO members, e.g. PPO); HMO and other products may differ',
      status: 'plan-dependent',
      cites: [S.bcbsilCodes],
      verifyVia: 'Check eligibility and benefits on Availity Essentials, or call the number on the member’s BCBSIL card: ask whether 97151/97152 need preservice review on this plan.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Yes for the non-HMO plans the list covers: 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T, managed by BCBSIL (eff. 1/1/2026; the list covers codes “for which prior authorization may be required”). Since April 2026 preservice requests start by phone at the number on the member’s card.' + IL_370CW_PA,
      status: 'plan-dependent',
      cites: [S.bcbsilCodes, S.bcbsilPhone, S.ilga370c, S.ilga356],
      verifyVia: 'Availity eligibility and benefits, then the number on the member’s card: ask whether this plan is fully insured and whether BCBSIL requires preservice review or only notification for ABA since January 1, 2026.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: the PA list defines ABA as therapy for members “who have a diagnosis within the Pervasive and specific developmental disorders category of ICD-10”',
      status: 'verified',
      cites: [S.bcbsilCodes],
    },
    payer: 'Blue Cross and Blue Shield of Illinois (HCSC)',
    state: 'IL', kind: 'commercial',
    pill: 'Payer Guide · Blue Cross Blue Shield · Illinois',
    h1: 'Blue Cross and Blue Shield of Illinois ABA coverage: the intake guide.',
    metaTitle: 'BCBS of Illinois ABA Coverage: Prior Auth, CPCP011 & Mandate Guide | Carelu',
    metaDescription:
      'How Blue Cross and Blue Shield of Illinois (HCSC) covers ABA for commercial members: the 2026 PA code list, phone preservice requests, CPCP011 billing and documentation rules, Illinois’s autism mandate, IDFPR licensure, and what intake should verify.',
    intro: [
      'Blue Cross and Blue Shield of Illinois, a division of Health Care Service Corporation, is the dominant commercial carrier in Illinois. For ABA its rules sit in three places: a commercial behavioral health PA code list, a clinical payment and coding policy (CPCP011, effective March 20, 2026) that reads like an audit checklist, and a January 2026 change that moved preservice requests to the phone. BCBSIL’s Medicaid plan, Blue Cross Community Health Plans, has its own guide.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, when the member’s benefit covers ABA; diagnosis within ICD-10 pervasive/specific developmental disorders' },
      { label: 'Prior auth', value: '97153–97158, 0362T, 0373T on the 2026 commercial PA list (non-HMO plans such as PPO); 97151/97152 not listed' },
      { label: 'How to request', value: 'Phone the number on the member’s card (eff. April 2026); clinician follows up for telephonic review' },
      { label: 'State mandate', value: '215 ILCS 5/356z.14 (Illinois Insurance Code; P.A. 95-1005, plans issued or renewed after Dec. 12, 2008)' },
      { label: 'Mandate age', value: 'Under 21 (“individuals under 21 years of age”)' },
      { label: 'Mandate caps', value: '$36,000 a year, adjusted annually for medical inflation by the Director of Insurance (current figure: ask the plan); no visit limits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'Yes: IDFPR licenses Behavior Analysts and Assistant Behavior Analysts (licensing began Jan. 15, 2025)' },
      { label: 'Fee schedule', value: 'Not public — contracted; CPCP011 requires HM/HN/HO modifiers on 97153' },
    ],
    sections: [
      {
        h2: 'Prior authorization and the phone-first preservice process',
        body: [
          'BCBSIL’s 2026 Commercial Outpatient Behavioral Health Prior Authorization Codes (effective January 1, 2026, updated August 2026) cover “some of our commercial non-HMO members, such as” PPO, Blue Choice Preferred PPO, Blue Choice PPO, Blue Options/Blue Choice Options and Blue High Performance Network. The ABA lines are 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T, all “Managed By BCBSIL”; 97151 and 97152 are not on it. ABA is defined as therapy “to improve or change specific behaviors of members who have a diagnosis within the Pervasive and specific developmental disorders category of ICD-10.” From April 2026, “to initiate a preservice request for behavioral health applied behavior analysis, you must call our customer service number on the member’s ID card. Forms will no longer be the primary method,” and “A clinician will follow up with you for telephonic clinical review.” BCBSIL still tells providers to check eligibility and benefits on Availity first.',
          'How Public Act 104-0028 applies to commercial ABA is unsettled. BCBSIL’s January 2026 notice lists the commercial “no review” windows (72 hours for inpatient and residential, 48 hours for IOP and partial hospitalization, two business days for TMS and psychological testing); ABA is not on that list, and only for its Medicaid plan did BCBSIL add a 24-hour notification rule for applied behavior analysis. The statute is broader: 215 ILCS 5/370c(w)(1) says “No policy shall require prior authorization for outpatient or partial hospitalization services for treatment of mental, emotional, or nervous disorders or conditions” by any “licensed, certified, or legally authorized provider,” permits concurrent and retrospective review after a notification deadline of up to 2 business days, and the autism mandate’s treatment-plan clause (356z.14(f)) says it does not supersede that prohibition. The statute does not name ABA. For a fully insured member, ask BCBSIL in writing whether the ABA preservice review is still required; self-funded plans are outside the statute.',
        ],
        cites: [S.bcbsilCodes, S.bcbsilPhone, S.bcbsilUM, S.bcbsilPA104, S.ilga370c, S.ilga356, S.pa10428],
      },
      {
        h2: 'CPCP011: the billing and documentation rules BCBSIL audits',
        body: [
          'CPCP011 (version 1.0, plan effective March 20, 2026) says ABA is not reimbursable unless provided by a professional “certified by the Behavior Analyst Certification Board as a Behavior Analyst and/or licensed in their state as a Licensed Behavior Analyst or Licensed Psychologist”; not reimbursable for “more than one Board Certified Behavior Analyst (BCBA) or qualified healthcare professional providing same/similar services on the same dates of service” (technicians excepted); and not for “educational, vocational, respite or custodial purposes.” Services outside POS 10, 11 and 12 need documented rationale. Assessments over eight hours (32 units of 97151) may not be reimbursed. Parent education is authorized at one hour a week (26 hours per typical 26-week period). Billable supervision “must be face to face and involves only one technician,” indirect supervision is bundled, and direct supervision may be authorized “at a minimum of 1 hour per week when less than 10 hours of direct services are authorized.” Groups (97154/97158) need 2 to 8 members, and 97153 carries a single HM, HN or HO modifier. The 8-minute rule applies to every timed unit.',
          'Documentation must include “a parent or caregiver’s signature for each rendered service that also includes the service/code provided, rendering provider’s name/signature, certification and credentials, place of service, the date of service, and the beginning/end times of the service,” a note, and data that “may be required immediately after the service occurred and for the purposes of audit.” And on whose NPI: “The provider who renders treatment week to week to the member is considered the ‘rendering provider’ and should bill for the services provided,” and “An unlicensed, non-network-credentialed, or otherwise non-qualified provider cannot provide services and bill through another person’s NPI number.”',
        ],
        cites: [S.bcbsilCPCP],
      },
      {
        h2: 'The Illinois mandate: what we could verify',
        body: [IL_MANDATE_BODY],
        cites: [S.ilga356, S.fl356, S.ilga370c, S.pa10428, S.idoiCB2417, S.ebhAdmin],
      },
      {
        h2: 'Licensure: does the BCBA need an Illinois license?',
        body: [IL_COMMERCIAL_LIC_BODY + ' CPCP011 itself accepts BACB certification “and/or” a state Licensed Behavior Analyst credential, but that does not excuse Illinois licensure for practice in Illinois.'],
        cites: [S.idfpr, S.ilga6_20, S.ilga6_150, S.ilgaTele, S.bacbLic, S.bcbsilCPCP],
      },
    ],
    collect: [
      { title: 'Plan type and funding', desc: 'PPO/Blue Options vs. HMO vs. self-funded ASO: the PA list names non-HMO products, and the mandate reaches only fully insured plans.' },
      { title: 'Member ID + card photo', desc: 'The preservice request starts by calling the number on this card.' },
      { title: 'Diagnosis report', desc: 'A diagnosis in the ICD-10 pervasive and specific developmental disorders category.' },
      { title: 'Session sign-off process', desc: 'CPCP011 wants a parent or caregiver signature on every session record, with times and the rendering clinician’s credentials.' },
      { title: 'Illinois license numbers', desc: 'IDFPR license for each behavior analyst as well as BACB certification.' },
    ],
    sources: [S.bcbsilCodes, S.bcbsilPhone, S.bcbsilCPCP, S.bcbsilUM, S.bcbsilPA104, S.ilga356, S.fl356, S.ilga370c, S.pa10428, S.idoiCB2417, S.idfpr, S.ilga6_20, S.ilgaTele, S.bacbLic, S.erisa, S.hfsFee, S.hfsCh100, S.cfr433, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'CPCP011: billable supervision is face to face with one technician; indirect supervision is bundled and not separately paid; CASP’s 10–20% of direct hours for case supervision is cited, and direct supervision “may be authorized … at a minimum of 1 hour per week when less than 10 hours of direct services are authorized.”',
        status: 'verified',
        cites: [S.bcbsilCPCP],
      },
      concurrentBilling: {
        value: 'CPCP011: ABA “not reimbursable for more than one Board Certified Behavior Analyst (BCBA) or qualified healthcare professional providing same/similar services on the same dates of service. This does not refer to the technician(s) or direct service provider simultaneously rendering service with the BCBA.” A QHP directing a technician during 97154 bills 97155.',
        status: 'verified',
        cites: [S.bcbsilCPCP],
      },
      dailyLimits: {
        value: 'CPCP011 points to the CMS MUE table for maximum units per day and notes MUEs “indicate that direct services are typically requested for up to 40 hours per week”; assessment over 32 units of 97151 may not be reimbursed; parent education typically one hour a week. Units above coding guidelines must be justified.',
        status: 'verified',
        cites: [S.bcbsilCPCP],
      },
      noteSignature: {
        value: 'CPCP011: “a parent or caregiver’s signature for each rendered service” that includes the code, the rendering provider’s name, signature and credentials, POS, date and start/end times, plus a note and data points, which may be required immediately after the service.',
        status: 'verified',
        cites: [S.bcbsilCPCP],
      },
      placeOfService: {
        value: 'CPCP011: services in “anything other than Place of Service/POS codes 10, 11, and 12” need supporting documentation and a rationale on file. For fully insured Illinois plans, the Department of Insurance bars denial “solely because of the location” of care (Company Bulletin 2024-17).',
        status: 'verified',
        cites: [S.bcbsilCPCP, S.idoiCB2417],
      },
      billAsProvider: {
        value: 'CPCP011: the provider who renders week to week is the rendering provider and bills; a non-credentialed or non-qualified provider “cannot provide services and bill through another person’s NPI number”; services “performed by a supervisee and billed through a supervisor should follow any applicable state laws, Board requirements, and/or CMS conventions,” with direct personal supervision in the immediate vicinity.',
        status: 'verified',
        cites: [S.bcbsilCPCP],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'BCBSIL’s ABA documents read set no age limit; the member’s benefit booklet governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.bcbsilCodes, S.ilga356],
        verifyVia: 'Availity eligibility and benefits, or the number on the card: confirm ABA benefit age terms and whether the plan is fully insured.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not stated in the BCBSIL documents read; BCBSIL’s ABA medical policy could not be retrieved this run.',
        status: 'unverified',
        cites: [S.bcbsilCodes, S.bcbsilCPCP],
        verifyVia: 'The BCBSIL clinician on the preservice phone review, or BCBSIL’s ABA medical policy on the provider site.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'Not stated in the BCBSIL documents read.' + MANDATE_DX_TAIL,
        status: 'unverified',
        cites: [S.ilga356, S.bcbsilCodes],
        verifyVia: 'BCBSIL’s ABA medical policy, or ask during the telephonic preservice review.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'Not stated in the BCBSIL documents read.',
        status: 'unverified',
        cites: [S.bcbsilCodes],
        verifyVia: 'BCBSIL’s ABA medical policy, or ask during the telephonic preservice review.',
        blocker: 'document',
      },
      referral: {
        value: 'No referral rule appears in the commercial PA list or CPCP011; what is required is preservice review of the listed treatment codes, started by phone.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.bcbsilCodes, S.bcbsilPhone, S.idoiCB2417],
      },
      telehealth: {
        value: 'Not addressed in CPCP011 or the PA list; CPCP011 treats POS 10, 11 and 12 as conventional and wants rationale for other POS codes. Illinois’s commercial telehealth statute could not be retrieved this run.',
        status: 'unverified',
        cites: [S.bcbsilCPCP],
        verifyVia: 'BCBSIL provider services (number on the card): ask which ABA codes may be billed by telehealth and with which POS and modifier.',
        blocker: 'document',
      },
      authTurnaround: {
        value: COMM_AUTH_VALUE('BCBSIL'),
        status: 'plan-dependent',
        cites: [S.erisa, S.pa10428, S.ilga370c, S.bcbsilUM],
        verifyVia: 'Ask during the preservice call how long the telephonic clinical review takes and what reauthorization lead time BCBSIL expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMM_COB_VALUE('BCBSIL'),
        status: 'plan-dependent',
        cites: [S.hfsCh100, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask BCBSIL at benefits verification for the coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Blue Cross Blue Shield of Illinois require prior authorization for ABA?', a: 'For the non-HMO commercial plans on its 2026 list (PPO, Blue Options and others), yes for 97153–97158, 0362T and 0373T. The assessment codes 97151 and 97152 are not on that list; check Availity for the member’s plan.' },
      { q: 'How do I submit an ABA preservice request to BCBSIL?', a: 'Since April 2026, call the customer service number on the member’s ID card; a BCBSIL clinician follows up with a telephonic clinical review. Forms are no longer the primary method.' },
      { q: 'Does BCBSIL require a parent signature on ABA session notes?', a: 'Yes. CPCP011 asks for a parent or caregiver signature for each rendered service, with the code, the rendering provider’s name, signature and credentials, POS, date and start/end times.' },
      { q: 'Did Illinois’s 2026 behavioral health law remove BCBSIL’s ABA prior authorization?', a: 'BCBSIL still lists ABA codes for preservice review, and its commercial “no review” list under Public Act 104-0028 does not mention ABA. But the law it implements, 215 ILCS 5/370c(w), bars prior authorization of outpatient mental health treatment under fully insured policies (concurrent review after a notice of up to 2 business days is allowed), and the autism mandate cross-references that ban. The statute does not name ABA, so for a fully insured member ask BCBSIL in writing. Its Medicaid plan uses a 24-hour ABA notification rule.' },
    ],
  },
};

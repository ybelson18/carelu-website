import type { PayerConfig, PayerSource } from './types.js';

/* West Virginia — researched October 2026 from primary sources only.
   bms.wv.gov (the new Bureau for Medical Services site; the old dhhr.wv.gov/bms paths 404) and
   code.wvlegislature.gov answer plain curl with a browser user agent. aetnabetterhealth.com and
   wv.highmarkhealthoptions.com sit behind Cloudflare challenges (r.jina.ai was challenged too on
   2026-10-07); the Aetna Better Health of West Virginia manual and BH prior-authorization form were
   read from the same file paths on the fr.aetnabetterhealth.com host, and Highmark Health Options'
   documents from providers.highmark.com. eCFR text was read through the eCFR versioner API. */

const S: Record<string, PayerSource> = {
  aba519: { title: 'BMS Provider Manual Chapter 519, Policy 519.23 — Applied Behavior Analysis (effective April 1, 2020; current posting)', url: 'https://bms.wv.gov/media/40119/download?inline' },
  ch519: { title: 'BMS Provider Manual — Chapter 519 Practitioner Services (policy index)', url: 'https://bms.wv.gov/providers/policy-manuals/chapter-519-practitioner-services' },
  tele519: { title: 'BMS Provider Manual Policy 519.17 — Telehealth Services (effective 1/1/2022)', url: 'https://bms.wv.gov/media/40772/download?inline' },
  teleA: { title: 'BMS Policy 519.17 Appendix A — Medicaid Telehealth Standard Codes (effective 1/1/2025)', url: 'https://bms.wv.gov/media/22096/download?inline' },
  abaFee: { title: 'BMS — Applied Behavior Analysis Fee Schedule ("Contracts & Codes for: ABA - Medicaid")', url: 'https://bms.wv.gov/media/39954/download?inline' },
  feePage: { title: 'BMS — West Virginia Medicaid Fee Schedules', url: 'https://bms.wv.gov/providers/west-virginia-medicaid-fee-schedules' },
  ch100: { title: 'BMS Provider Manual Chapter 100 — General Information (100.15 timely filing, 100.16 TPL, 100.17 appeals)', url: 'https://bms.wv.gov/media/39982/download?inline' },
  ch300: { title: 'BMS Provider Manual Chapter 300 — Provider Participation Requirements', url: 'https://bms.wv.gov/media/41119/download?inline' },
  ch527: { title: 'BMS Provider Manual Chapter 527 — Mountain Health Trust (Managed Care)', url: 'https://bms.wv.gov/media/40937/download?inline' },
  mht: { title: 'BMS — Mountain Health Trust (Managed Care): the four MCOs', url: 'https://bms.wv.gov/members/mountain-health-trust-managed-care' },
  mhp: { title: 'BMS — Mountain Health Promise (foster, kinship and adoptive care; Aetna Better Health of WV)', url: 'https://bms.wv.gov/members/mountain-health-promise' },
  mhpContract: { title: 'BMS — SFY 2026 Model Purchase of Service Provider Agreement for Mountain Health Promise (Aetna Better Health of WV)', url: 'https://bms.wv.gov/media/40865/download?inline' },
  bmsPA: { title: 'BMS — Prior Authorizations (UM vendor, Gold Card program, MCO links)', url: 'https://bms.wv.gov/members/prior-authorizations' },
  c9532: { title: 'W. Va. Code § 9-5-32 — Prior authorization (Bureau for Medical Services)', url: 'https://code.wvlegislature.gov/9-5-32/' },
  chipAut: { title: 'WVCHIP — Autism Disorders: ABA therapy coverage (effective February 1, 2023)', url: 'https://chip.wv.gov/page/autism-disorders' },
  c3316v: { title: 'W. Va. Code § 33-16-3v — Required coverage for treatment of autism spectrum disorders (group accident and sickness insurers)', url: 'https://code.wvlegislature.gov/33-16-3V/' },
  c3324k: { title: 'W. Va. Code § 33-24-7k — Coverage for diagnosis and treatment of autism spectrum disorders (hospital, medical and health service corporations)', url: 'https://code.wvlegislature.gov/33-24-7K/' },
  c3325Aj: { title: 'W. Va. Code § 33-25A-8j — Coverage for diagnosis and treatment of autism spectrum disorders (HMOs)', url: 'https://code.wvlegislature.gov/33-25A-8J/' },
  c5167: { title: 'W. Va. Code § 5-16-7 — PEIA plans; mandated benefits (autism coverage at (8))', url: 'https://code.wvlegislature.gov/5-16-7/' },
  c516B: { title: 'W. Va. Code § 5-16B-6e — WVCHIP autism coverage [Repealed, HB 4649 (2022)]', url: 'https://code.wvlegislature.gov/5-16B-6E/' },
  c3324s: { title: 'W. Va. Code § 33-24-7s — Prior authorization (parallel §§ 33-16-3dd, 33-25A-8s)', url: 'https://code.wvlegislature.gov/33-24-7S/' },
  c3316dd: { title: 'W. Va. Code § 33-16-3dd — Prior authorization (group accident and sickness)', url: 'https://code.wvlegislature.gov/33-16-3DD/' },
  c3325As: { title: 'W. Va. Code § 33-25A-8s — Prior authorization (HMOs)', url: 'https://code.wvlegislature.gov/33-25A-8S/' },
  c3345: { title: 'W. Va. Code § 33-45-2 — Prompt payment of provider claims', url: 'https://code.wvlegislature.gov/33-45-2/' },
  c3357: { title: 'W. Va. Code § 33-57-1 — Coverage of telehealth services', url: 'https://code.wvlegislature.gov/33-57-1/' },
  c30: { title: 'W. Va. Code Chapter 30 — Professions and Occupations (article list: no behavior-analyst article)', url: 'https://code.wvlegislature.gov/30/' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (West Virginia not listed)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  abhPM: { title: 'Aetna Better Health of West Virginia — Provider Manual 2026–2027 (MHT, MHP, WVCHIP)', url: 'https://fr.aetnabetterhealth.com/content/dam/aetna/medicaid/west-virginia/provider/pdf/abhwv_provider_manual.pdf' },
  abhForm: { title: 'Aetna Better Health of West Virginia — Behavioral Health Prior Authorization Request (Section 6: ABA; WV-24-01-02)', url: 'https://fr.aetnabetterhealth.com/content/dam/aetna/medicaid/west-virginia/provider/pdf/abhwv_bh_pa_form.pdf' },
  thpMHT: { title: 'The Health Plan — Provider Manual Chapter 6, Mountain Health Trust (as of July 1, 2026)', url: 'https://www.healthplan.org/application/files/2017/8483/4174/Chapter_6_-_Mountain_Health_Trust_MHT.pdf' },
  thpClaims: { title: 'The Health Plan — Provider Manual Chapter 3, Claims (as of July 1, 2026)', url: 'https://www.healthplan.org/application/files/2117/8291/6899/Chapter_3_-_Claims_-_2026_Provider_Manual.pdf' },
  thpClinical: { title: 'The Health Plan — Provider Manual Chapter 9, Clinical (PA response timelines)', url: 'https://www.healthplan.org/application/files/3017/8291/6898/Chapter_9_-_Clinical_-_2026_Provider_Manual.pdf' },
  thpPAL: { title: 'The Health Plan — Medical and Behavioral Health Prior Authorization Requirements (effective August 1, 2026, .xlsx)', url: 'https://www.healthplan.org/download_file/view/bc3a45db-ad5c-4d6f-a8d0-3e0d6213c1e4/841' },
  hhoPM: { title: 'Highmark Health Options West Virginia — 2025 Medicaid Provider Manual (updated 11/4/25)', url: 'https://providers.highmark.com/content/dam/highmark/en/providerresourcecenter/highmark-health-options/hho-wv/documents/pdfs/resources/provider-manual-and-newsletters/provider-manual/2025-HHOWV-ProviderManual.pdf' },
  hhoForm: { title: 'Highmark Health Options — Outpatient Behavioral Health Prior Authorization Request Form (ABA Therapy section)', url: 'https://providers.highmark.com/content/dam/highmark/en/providerresourcecenter/highmark-health-options/hho-wv/documents/pdfs/resources/forms-and-reference-material/OutpatientBehavioralHealthPrior%20Authorization%20Request%20Form_10112022.pdf' },
  hhoLookup: { title: 'Highmark Health Options West Virginia — Prior Authorization Code Lookup', url: 'https://providers.highmark.com/hho-wv/resources/prior-authorization-code-lookup.html' },
  wpPM: { title: 'Wellpoint West Virginia — Mountain Health Trust Provider Manual (August 1, 2026)', url: 'https://www.wellpoint.com/content/dam/digital/wellpoint/documents/provider/west-virginia/other/WVWP-CD-PM-082374-25-2025-Annual-PM-Review_Final-with-Cover.pdf' },
  wpABA: { title: 'UniCare Health Plan of West Virginia (now Wellpoint) — Provider Bulletin: Applied behavior analysis services (May 2023)', url: 'https://www.wellpoint.com/content/dam/digital/wellpoint/documents/provider/west-virginia/archives/WV_CAID_ABAServiceChanges.pdf' },
  wpCUMG: { title: 'Wellpoint West Virginia — Clinical Utilization Management Guidelines adopted (August 2026 list)', url: 'https://www.wellpoint.com/content/dam/digital/wellpoint/documents/provider/west-virginia/other/wvwp-caid-cumg-feb26.pdf' },
  wpPAReq: { title: 'Wellpoint West Virginia — Prior authorization requirements (lookup tool)', url: 'https://www.wellpoint.com/wv/provider/state-federal/resources/prior-authorization-requirements' },
  hmPAL: { title: 'Highmark — List of Procedures/DME Requiring Authorization, for PA, WV, DE & NY members (effective 10/01/2026)', url: 'https://providers.highmark.com/content/dam/highmark/en/providerresourcecenter/pdfs/procedurecode/commercial/Proc-Requiring-Auth-list.pdf' },
  hmNews: { title: 'Highmark — Behavioral Health: Upcoming Prior Authorization Changes (published Nov 24, 2025; effective March 1, 2026)', url: 'https://providers.highmark.com/communications-hub/news-and-updates/behavioral-health-upcoming-prior-authorization-changes.html' },
  hmPM: { title: 'Highmark Provider Manual (PA, WV, DE, NY; generated 10/7/2026)', url: 'https://providers.highmark.com/content/dam/highmark/en/providerresourcecenter/pdfs/education-resources/highmark-provider-manual/current/Provider_Manual.pdf' },
  aetnaCPB: { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; Exhibit A covers Maryland only)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (Network Participation Criteria, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  aetnaTele: { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026; incl. West Virginia Regulatory Addendum)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM, July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumNNM: { title: 'Optum National Network Manual (2026; lists West Virginia Regulatory Requirements)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
};

/* ---- Shared West Virginia Medicaid rule text (BMS Policy 519.23 and friends) ---- */
const WV_MCD_AGE =
  'Ages 18 months through 20. Policy 519.23.1 makes ABA available to "Medicaid members ages 18 months through age 20 with a primary diagnosis of Autism Spectrum Disorder (ASD) prior to their eighth birthday" who are referred for diagnostic and treatment services identified during an EPSDT encounter.';

const WV_MCD_SUPERVISION =
  'BMS sets no numeric supervision ratio. Policy 519.23.4 recognizes a BCBA (master’s or BCBA-D), a BCaBA "working under the supervision of a BCBA or who meets Behavior Analyst Certification Board supervisor requirements," and an RBT "working under the supervision of a BCBA or BCaBA who meets the Behavior Analyst Certification Board supervisor requirements," each only while BACB certification is "current and in good standing." The glossary adds that BCaBA "Competency and supervision must be verified annually and submitted to supervisor," and that BMS follows the BACB ethics code. Group skills training is limited to "four members to each staff person."';

const WV_MCD_LIMITS =
  'Policy 519.23 caps 97151, 97152, 97153, 97154, 97155, 97156 and 97158 in combination at "a maximum of 40 hours per week and/or eight hours within a 24-hour period," with the service week running Sunday 12:00 am through Saturday 11:59 pm. The H0031 assessment is limited to "one per year per member." Group codes 97154 and 97158 may not exceed eight members.';

const WV_MCD_TELE =
  'BMS lists every ABA code it pays except 97157 on its telehealth code list: Appendix A to Policy 519.17 (effective 1/1/2025) carries 97151, 97152, 97153, 97154, 97155, 97156 and 97158 with "provisional" status, meaning "temporarily approved for telehealth" and "subject to review." Policy 519.23 says telehealth "must align with" Policy 519.17, which requires real-time audio and video, POS 02 (or POS 10 when the member is at home, since January 1, 2022), written member consent, notes that record the telehealth mode, and HIPAA-compliant platforms. Two cautions: Policy 519.17’s list of distant-site practitioners does not name behavior analysts, and it requires interstate telehealth practitioners to register "with the appropriate board in West Virginia," a board that does not exist for BCBAs. Confirm with BMS or the MCO before building a remote program.';

const WV_MCD_DX_PROVIDERS =
  'Policy 519.23.2 names the "qualified diagnostic provider": a licensed physician "such as a neurologist, pediatric neurologist, developmental pediatrician, psychiatrist, supervising psychologist, or a licensed psychologist, licensed independent social worker, licensed independent counselor." The glossary’s narrower definition of "Diagnostic Assessment" lists only physicians (neurologist, pediatric neurologist, developmental pediatrician, psychiatrist) and licensed psychologists, so a psychologist or physician diagnosis is the safe choice.';

const WV_MCD_REFERRAL =
  'Yes. Members must be "referred for necessary diagnostic and treatment services identified during an Early and Periodic Screening, Diagnostic, and Treatment (EPSDT) encounter" (519.23.1), and every PA request must include "The annual physician’s order for ABA Services" (519.23.6).';

const WV_MCD_DX_RECENCY =
  'Within 24 months. The PA request must include "the qualifying diagnostic assessment establishing the ASD diagnosis prior to age eight and completed within the previous 24 months" and "A comprehensive diagnostic assessment completed by a qualifying provider within the previous 24 months" (519.23.6). The first request must also document that the primary diagnosis "was rendered prior to the child’s eighth year of age" (519.23.2).';

/* ---- Shared West Virginia commercial layer (same facts on every commercial guide) ---- */
const WV_MANDATE_BODY =
  'West Virginia’s autism mandate is written into each insurance article separately, with matching text: W. Va. Code § 33-16-3v (group accident and sickness insurers), § 33-24-7k (hospital, medical and health service corporations) and § 33-25A-8j (HMOs), all from HB 2693 (2011) as amended by HB 4260 (2012), plus a parallel paragraph for PEIA in § 5-16-7. Each applies to a "policy of group accident and sickness insurance" issued or renewed on or after January 1, 2012, and requires "coverage for diagnosis, evaluation and treatment of autism spectrum disorder in individuals ages eighteen months to eighteen years." Three gates follow. The child "must be diagnosed with autism spectrum disorder at age eight or younger." Treatment must be "medically necessary and ordered or prescribed by a licensed physician or licensed psychologist and in accordance with a treatment plan developed from a comprehensive evaluation by a certified behavior analyst." And ABA "shall be provided or supervised by a certified behavior analyst," defined as someone "certified by the Behavior Analyst Certification Board or certified by a similar nationally recognized organization." The insurer statutes let ABA be capped: "not to exceed $30,000 per individual, for three consecutive years from the date treatment commences," then "not to exceed $2,000 per month, until the individual reaches eighteen years of age." The PEIA paragraph carries the same age, diagnosis and supervision terms but no dollar cap. To keep treatment going, the analyst must "file progress reports … semiannually," and the plan must receive objective evidence or "a clinically supportable statement of expectation" that the child is improving, has not reached maximum improvement, and can reach the anticipated improvement in a reasonable time. Exemptions: "small employers" (25 or fewer eligible employees), cost-containment once the mandate raises total costs by 1% for a plan year, and any part that exceeds the ACA essential health benefits. The mandate does not reach self-funded ERISA plans, and nothing in it requires payment for services by public school personnel or replaces IDEA obligations. The WVCHIP autism section (§ 5-16B-6e) was repealed in 2022; WVCHIP now covers ABA on Medicaid’s terms.';

const WV_LICENSURE_BODY =
  'West Virginia does not license behavior analysts. The BACB’s state licensure table (2026) lists no West Virginia law or board, and the articles of Chapter 30 of the West Virginia Code (Professions and Occupations) include none for behavior analysts; the psychologists’ article (30-21) does not mention them. The working credential is therefore BACB certification, which both the commercial mandate ("certified behavior analyst") and Medicaid Policy 519.23 ("certification by the Behavior Analyst Certification Board is current and in good standing") require. For an out-of-state BCBA, that means there is no West Virginia license to obtain, but each payer still credentials and enrolls you: Medicaid requires enrollment through the BMS fiscal agent (Chapter 300), and BMS’s telehealth policy expects interstate practitioners to register "with the appropriate board in West Virginia" and enroll "as an Interstate Provider," a step that has no obvious board for a BCBA, so get BMS’s answer in writing. On commercial telehealth, § 33-57-1 defines the covered "health care practitioner" as someone licensed under Chapter 30, which an unlicensed BCBA is not, so the carrier’s own telehealth policy decides. On rates: commercial ABA rates are negotiated and unpublished. The public benchmark is the West Virginia Medicaid ABA fee schedule, which is very low (97153 $9.90 and 97155 $29.14 per 15-minute unit).';

const WV_PA_LAW =
  'Depends on how the plan is funded. West Virginia-regulated plans fall under W. Va. Code § 33-24-7s and its twins (§ 33-16-3dd for insurers, § 33-25A-8s for HMOs), for plans beginning on or after January 1, 2024. Requests go through the carrier’s electronic portal, and once "all of the information as required is provided," the carrier "shall respond … within five business days," or "within two business days" for urgent care. If a request is incomplete, the carrier must identify every deficiency and return it within two business days; you then have three business days to supply the information, and the carrier decides within two business days after that (miss the three days and the request is denied and must be resubmitted). A peer-to-peer must finish within five business days of being requested, and a PA appeal within ten business days. An approved PA "is carried over to all other managed care organizations, health insurers, and the Public Employees Insurance Agency for three months if the services are provided within the state," and a practitioner with a 90% approval rate over six months (and at least 30 procedures a year) earns a six-month gold-card exemption. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours.';

const WV_COB =
  'West Virginia regulates coordination of benefits by insurance rule (114 CSR 28), which we could not open this run, so we do not restate its birthday rule here; get the member’s order of benefits from both plans. When the child also has West Virginia Medicaid, the commercial plan pays first: Medicaid is "always the payer of last resort," and "All requirements of the third-party insurance plan must be met before Medicaid will reimburse including use of in-network providers" (BMS Chapter 100), consistent with 42 CFR 433.139. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).';

const WV_TELE_TAIL =
  ' For a West Virginia-regulated policy, W. Va. Code § 33-57-1 requires coverage of "health care services provided through telehealth services if those same services are covered through face-to-face consultation," bars excluding a service "solely because the service is provided through telehealth services," and counts the patient’s home as an originating site. The statute defines the practitioner as someone licensed under Chapter 30, and West Virginia does not license behavior analysts, so it is unclear whether it reaches BCBA-delivered ABA. Self-funded employer plans are outside it.';

const MANDATE_REFERRAL_TAIL =
  ' For a fully insured West Virginia group plan, the mandate requires treatment "ordered or prescribed by a licensed physician or licensed psychologist" and "in accordance with a treatment plan developed from a comprehensive evaluation by a certified behavior analyst," with semiannual progress reports from the analyst. Self-funded ERISA plans sit outside the statute.';

const MANDATE_AGE_TAIL =
  ' For fully insured West Virginia group plans, the mandate covers ages 18 months to 18 years, requires an ASD diagnosis "at age eight or younger," and lets the insurer cap ABA at $30,000 a year for three consecutive years from the start of treatment and $2,000 a month after that until age 18 (W. Va. Code §§ 33-16-3v, 33-24-7k, 33-25A-8j). Employers with 25 or fewer eligible employees are exempt, and self-funded ERISA plans are outside the statute, so plan funding and size decide whether that binds.';

const WV_PROMPT_PAY =
  'West Virginia’s prompt-pay law, W. Va. Code § 33-45-2, requires an insurer to "either pay or deny a clean claim within 40 days of receipt of the claim if submitted manually and within 30 days of receipt of the claim if submitted electronically," to ask for any missing information within 30 days of receipt, and to pay interest at 10 percent a year on claims paid after the 40-day period.';

const MCD_FEE_LINE =
  'BMS’s ABA fee schedule ("Contracts & Codes for: ABA - Medicaid") pays per 15-minute unit: 97151 $29.14, 97152 $9.90, 97153 $9.90, 97154 $4.50, 97155 $29.14, 97156 $17.43, 97158 $11.79, and H0031 (the annual functional assessment) $120.00 per event. Legacy lines remain for H0032 and H2012 ($29.14), H2014 ($11.79; U4 $5.50, U5 $2.50) and H2019 ($29.14). 97157, 0362T and 0373T are not on the schedule.';

export const westVirginiaPayers: Record<string, PayerConfig> = {
  'west-virginia-medicaid': {
    slug: 'west-virginia-medicaid',
    cardDesc: 'BMS Policy 519.23: ages 18 months–20, ASD diagnosed before age 8, PA on every code, 40 hr/week cap; four MCOs carry it.',
    assessmentPA: {
      value: 'Yes. Policy 519.23 marks both assessment codes, H0031 (the annual functional assessment) and 97151 (behavior identification assessment), "Prior Authorization: Required," and says PA "for all ABA services requests must be made prior to any service being rendered"',
      status: 'verified',
      cites: [S.aba519],
    },
    treatmentPA: {
      value: 'Yes for every ABA code (97152–97156, 97158). No backdating: "retrospective review requests" will be denied, and a provider who skips PA cannot bill the family. MCO members follow their plan’s PA process',
      status: 'verified',
      cites: [S.aba519, S.ch527],
    },
    dxRequired: {
      value: 'Yes: a primary ASD diagnosis made before the child’s eighth birthday, documented with DSM criteria, severity level and specifiers, from a diagnostic assessment completed within the previous 24 months',
      status: 'verified',
      cites: [S.aba519],
    },
    payer: 'West Virginia Medicaid (BMS)',
    state: 'WV', kind: 'state-medicaid',
    pill: 'Payer Guide · West Virginia Medicaid',
    h1: 'West Virginia Medicaid ABA coverage: the intake guide.',
    metaTitle: 'West Virginia Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How West Virginia Medicaid covers ABA under BMS Policy 519.23: ages 18 months through 20, ASD diagnosed before age 8, prior authorization on every code, a 40-hour weekly cap, published rates, four Mountain Health Trust MCOs, and no state behavior-analyst license.',
    intro: [
      'West Virginia Medicaid covers applied behavior analysis under its own provider-manual chapter, Policy 519.23 in Chapter 519 (Practitioner Services), administered by the Bureau for Medical Services (BMS). The rules are tighter than in most states: the child must be between 18 months and 20 years old, the autism diagnosis must have been made before the eighth birthday, the diagnostic assessment behind the request must be less than 24 months old, and every ABA code needs prior authorization before the first unit.',
      'Most children never touch fee-for-service. BMS says Mountain Health Trust, its managed care program, covers about 87% of members through four MCOs (Aetna Better Health of West Virginia, The Health Plan, Highmark Health Options and Wellpoint), and children in foster, kinship and adoptive care are in Mountain Health Promise, run by Aetna Better Health. Policy 519.23 is the floor each plan works from, but the plan on the card decides who reviews the authorization and pays the claim.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes: ages 18 months through 20, primary ASD diagnosis before age 8 (Policy 519.23)' },
      { label: 'Structure', value: 'Carved in to Mountain Health Trust (4 MCOs) and Mountain Health Promise (Aetna); FFS for the rest' },
      { label: 'Prior auth', value: 'Required on every ABA code, before services; no retro authorizations' },
      { label: 'Hour cap', value: '40 hours/week and/or 8 hours per 24 hours across 97151–97156, 97158' },
      { label: 'FFS rates (per 15 min)', value: '97151/97155 $29.14 · 97156 $17.43 · 97158 $11.79 · 97152/97153 $9.90 · 97154 $4.50 · H0031 $120/assessment' },
      { label: 'Who may deliver', value: 'BCBA/BCBA-D; BCaBA and RBT under supervision, all with current BACB certification' },
      { label: 'Licensure', value: 'None: WV does not license behavior analysts; BACB certification governs' },
      { label: 'Timely filing', value: '12 months from date of service (FFS); MCOs set their own' },
    ],
    sections: [
      {
        h2: 'Who qualifies: the age, diagnosis-age and recency gates',
        body: [
          'Policy 519.23.1 limits ABA to "Medicaid members ages 18 months through age 20 with a primary diagnosis of Autism Spectrum Disorder (ASD) prior to their eighth birthday," referred for treatment identified during an EPSDT encounter. The diagnosis-before-eight rule is unusual and decisive: the first PA request must include "documentation indicating that the primary diagnosis was rendered prior to the child’s eighth year of age." A child first diagnosed at nine does not meet the written policy, even though EPSDT generally covers medically necessary care to 21, so a family in that position should ask BMS or the MCO in writing.',
          'The second gate is recency. The diagnostic assessment must have been "conducted within the previous 24 months by a qualified diagnostic provider," and must document the current ICD/DSM ASD diagnosis, the severity level for communication and restricted repetitive behaviors, and the diagnostic specifiers (with or without intellectual impairment, associated conditions). The request also needs service intensity matched to the assessed level of functioning, baseline data on adaptive and maladaptive behaviors, and a description of natural supports, including what the IEP already provides. "Services that are educational in nature cannot be authorized."',
        ],
        cites: [S.aba519],
      },
      {
        h2: 'Prior authorization and the codes BMS pays',
        body: [
          'Every ABA code needs prior authorization "prior to any service being rendered." The request must include the qualifying diagnostic assessment, a comprehensive diagnostic assessment from the past 24 months, "The annual physician’s order for ABA Services," a Consent to Release Information and Bill Medicaid form or Statement of Assurances (the reviewer may also ask for the IEP, or for a homeschooled child the parent and Department of Education agreement letter), and an annual functional assessment of adaptive skills. Four things are not allowed: balance billing the family when PA was skipped or denied, backdated authorizations, requests submitted by parents, and ABA delivered by family members or any non-credentialed person. For fee-for-service members, BMS routes prior authorization to its utilization management vendor, which its prior-authorization page identifies as Acentra; MCO members go to their plan.',
          'The codes, with their staff credentials: H0031 functional assessment (BCBA or BCaBA, one per year), 97151 behavior identification assessment (BCBA or BCaBA), 97152 supporting assessment and 97153 treatment by protocol (RBT under supervision; "The BCBA or BCaBA may bill for this service"), 97154 group treatment by an RBT, 97155 protocol modification and 97156 family guidance (BCBA or BCaBA; the member must be present for 97155), and 97158 group skills training by a BCBA or BCaBA. 97157, 0362T and 0373T are not covered codes in the policy.',
          'Rates come from BMS’s ABA fee schedule. ' + MCD_FEE_LINE + ' These are the only published ABA rates in the state and well below commercial levels; the MCOs pay contracted rates.',
        ],
        cites: [S.aba519, S.bmsPA, S.abaFee, S.feePage],
      },
      {
        h2: 'Delivery rules: hours, staffing, documentation',
        body: [
          WV_MCD_LIMITS + ' ' + WV_MCD_SUPERVISION,
          'Documentation is audited hard. Policy 519.23.5.1 says "Copied or boilerplate language in documentation will not be reviewed and will cause disallowment," illegible records "will result in dis-allowment," records must be produced "within one business day of the request," and documentation "must demonstrate only one staff person’s time is billed for any specific activity provided to the member." Discharge reports are filed at case closure, and the policy lists four discharge criteria, from goals met to no measurable progress with no reasonable expectation of it. Policy 519.23 does not mention electronic visit verification.',
        ],
        cites: [S.aba519],
      },
      {
        h2: 'Managed care: four MCOs and Mountain Health Promise',
        body: [
          'Enrollment in an MCO "is mandatory" for children and most other members (Chapter 527). The MCO "is responsible for providing most services covered under this policy manual"; the managed-care exclusions are residential services, certain waiver services, school-administered services under Chapter 538, most pharmacy and early intervention, and ABA is not among them. "The BMS Medicaid Provider Manual is the source of authority for defining minimum state plan covered services," but "Providers must obtain all necessary service authorizations as specified by the MCO," and each MCO credentials its own network. Every MCO network provider must also be enrolled with West Virginia Medicaid. BMS lists the four Mountain Health Trust plans as Aetna Better Health of West Virginia, The Health Plan of West Virginia, Highmark Health Options of West Virginia and Wellpoint of West Virginia; Aetna Better Health is also "the single managed care organization" for Mountain Health Promise. WVCHIP members are inside Mountain Health Trust, and WVCHIP has covered ABA for children with a primary ASD diagnosis since February 1, 2023.',
        ],
        cites: [S.ch527, S.mht, S.mhp, S.chipAut],
      },
      {
        h2: 'Claims operations: filing limits, appeals, other insurance',
        body: [
          'Fee-for-service claims must reach Medicaid "within 12 months from date of service"; denied claims can be corrected or paid claims replaced up to 24 months from the date of service. TPL claims carry the same 12-month limit, and claims for members with backdated Medicaid cards have 12 months from the card’s issuance. A medical-necessity denial can be taken to the utilization management contractor for reconsideration, which "must receive the written request and supporting documentation within 60 days of the notification of denial"; anything delivered after a denial is "at risk." MCOs set their own filing limits (Aetna Better Health 365 days; The Health Plan and Wellpoint 180 days; Highmark Health Options 12 months), and the MHP contract requires MCOs to pay clean claims within 30 calendar days with 18% annual interest after that.',
          'Medicaid is "always the payer of last resort." Bill the commercial plan first and meet its rules, "including use of in-network providers"; if it denies, send the paper claim with the EOB showing the denial reason.',
        ],
        cites: [S.ch100, S.mhpContract, S.abhPM, S.thpClaims, S.wpPM, S.hhoPM],
      },
    ],
    collect: [
      { title: 'Which Medicaid plan', desc: 'Aetna Better Health (MHT or Mountain Health Promise), The Health Plan, Highmark Health Options, Wellpoint, or fee-for-service.' },
      { title: 'Age at diagnosis', desc: 'The ASD diagnosis must have been made before the eighth birthday; get the original report.' },
      { title: 'Diagnostic assessment under 24 months old', desc: 'From a qualified diagnostic provider, with DSM criteria, severity levels and specifiers.' },
      { title: 'Annual physician’s order + EPSDT referral', desc: 'Every PA request carries the annual physician’s order for ABA.' },
      { title: 'IEP or homeschool letter', desc: 'The reviewer may ask for it to rule out duplication; educational services are not authorized.' },
      { title: 'Other insurance', desc: 'Commercial coverage is billed first, in network, with its PA; Medicaid pays last.' },
    ],
    sources: [S.aba519, S.ch519, S.tele519, S.teleA, S.abaFee, S.feePage, S.ch100, S.ch300, S.ch527, S.mht, S.mhp, S.bmsPA, S.c9532, S.chipAut, S.bacbLic, S.c30, S.cfr440, S.cfr433],
    deliveryRules: {
      supervision: { value: WV_MCD_SUPERVISION, status: 'verified', cites: [S.aba519] },
      concurrentBilling: {
        value: 'Not allowed for the same activity. Policy 519.23.5.1 requires documentation to "demonstrate only one staff person’s time is billed for any specific activity provided to the member." 97155 may include coaching a technician "at the same time," but the policy gives no exception that lets 97153 and 97155 both be billed for that time.',
        status: 'verified',
        cites: [S.aba519],
      },
      dailyLimits: { value: WV_MCD_LIMITS, status: 'verified', cites: [S.aba519] },
      noteSignature: {
        value: 'Policy 519.23 requires legible, organized records with no copied or boilerplate language and discharge reports at closure, and Policy 519.17 requires telehealth notes to record the telehealth mode. No BMS source read says who must sign each session note or by when.',
        status: 'unverified',
        cites: [S.aba519, S.tele519],
        verifyVia: 'BMS Chapter 100/300 record-keeping sections, or Gainwell provider services (the BMS fiscal agent): ask the ABA session-note signature and timing standard used in retrospective review.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Therapeutic activities "may be provided to a member in his/her natural environment through a structured program." Services must not "supplant or duplicate those provided by educational authorities," "Services that are educational in nature cannot be authorized," and school-administered services (Chapter 538) are carved out of managed care. Telehealth uses POS 02, or POS 10 in the member’s home.',
        status: 'verified',
        cites: [S.aba519, S.ch527, S.tele519],
      },
      billAsProvider: {
        value: 'For 97152, 97153 and 97154, direct contact is made by the RBT, and "The BCBA or BCaBA may bill for this service." The BCBA, BCaBA and RBT must all have "met participation enrollment requirements," and every rendering practitioner who directly bills must be enrolled with West Virginia Medicaid (Chapter 300).',
        status: 'verified',
        cites: [S.aba519, S.ch300],
      },
    },
    intakeGates: {
      ageLimit: { value: WV_MCD_AGE, status: 'verified', cites: [S.aba519] },
      dxRecency: { value: WV_MCD_DX_RECENCY, status: 'verified', cites: [S.aba519] },
      diagnosingProviders: { value: WV_MCD_DX_PROVIDERS, status: 'verified', cites: [S.aba519] },
      diagnosticTools: {
        value: 'No named diagnostic instrument. The diagnostic assessment must document DSM criteria, severity level and specifiers; the request needs baseline data on adaptive and maladaptive behaviors and, annually, "a functional assessment of adaptive skills." The glossary defines objective evidence as "Results of standardized member assessment instruments."',
        status: 'verified',
        cites: [S.aba519],
      },
      referral: { value: WV_MCD_REFERRAL, status: 'verified', cites: [S.aba519] },
      telehealth: { value: WV_MCD_TELE, status: 'verified', cites: [S.teleA, S.tele519, S.aba519] },
      authTurnaround: {
        value: 'W. Va. Code § 9-5-32 requires electronic PA submission and a response "within five business days from the day on the electronic receipt" once complete, or "within two business days" for urgent care. An incomplete request is returned within two business days; the practitioner has three business days to complete it, and BMS decides within two business days after that. Peer-to-peer appeals take no longer than five business days and PA appeals no longer than ten. A BMS-approved PA "is carried over to all other managed care organizations and health insurers for three months" for in-state services. The federal fee-for-service ceiling is 7 calendar days for a standard decision and 72 hours for an expedited one (42 CFR 440.230).',
        status: 'verified',
        cites: [S.c9532, S.cfr440],
      },
      coordinationOfBenefits: {
        value: 'Medicaid pays last. "Prior to submitting a claim to Medicaid, the provider must secure information regarding possible third-party coverage," bill that payer, and meet "All requirements of the third-party insurance plan … including use of in-network providers." After a denial, submit a paper claim with the EOB showing the reason. Members owe no third-party coinsurance or deductibles. TPL claims have the same 12-month filing limit.',
        status: 'verified',
        cites: [S.ch100, S.cfr433],
      },
    },
    faq: [
      { q: 'Does West Virginia Medicaid cover ABA therapy?', a: 'Yes, under BMS Policy 519.23, for members ages 18 months through 20 whose primary ASD diagnosis was made before their eighth birthday. Most children get it through one of the four Mountain Health Trust MCOs or Mountain Health Promise.' },
      { q: 'What if my child was diagnosed with autism after age 8?', a: 'Policy 519.23 requires the primary ASD diagnosis "prior to their eighth birthday" and documentation of it on the first request. A later diagnosis does not meet the written policy; ask BMS or the MCO in writing whether EPSDT medical necessity can override it.' },
      { q: 'What does West Virginia Medicaid pay for ABA?', a: 'Per 15-minute unit on the BMS ABA fee schedule: 97151 and 97155 $29.14, 97156 $17.43, 97158 $11.79, 97152 and 97153 $9.90, 97154 $4.50, plus $120 per H0031 assessment. MCOs pay contracted rates, which are not published.' },
      { q: 'Does a BCBA need a West Virginia license?', a: 'No. West Virginia does not license behavior analysts. Medicaid requires current BACB certification (BCBA, BCaBA or RBT) plus enrollment with West Virginia Medicaid and credentialing with each MCO.' },
      { q: 'Can West Virginia Medicaid ABA be delivered by telehealth?', a: 'BMS’s telehealth code list includes 97151–97156 and 97158 as "provisional" telehealth codes, billed with POS 02 or 10 and with written member consent. Policy 519.17 does not list behavior analysts as distant-site practitioners, so confirm with BMS or the MCO first.' },
      { q: 'What is the timely filing limit for West Virginia Medicaid?', a: '12 months from the date of service for fee-for-service claims, with corrections allowed up to 24 months. MCOs differ: Aetna Better Health 365 days, Highmark Health Options 12 months, The Health Plan and Wellpoint 180 days.' },
    ],
  },

  'aetna-better-health-west-virginia': {
    slug: 'aetna-better-health-west-virginia',
    family: 'aetna',
    cardDesc: 'MHT MCO and the only Mountain Health Promise (foster care) plan; ABA has its own section on the BH PA form; 365-day filing.',
    assessmentPA: {
      value: 'Not stated code by code. The plan’s BH prior-authorization form has an ABA section (initial and concurrent requests) and points to its ProPAT tool to check whether a code needs PA; BMS policy requires PA for 97151 and H0031',
      status: 'unverified',
      cites: [S.abhForm, S.aba519],
      verifyVia: 'Aetna Better Health of WV ProPAT search tool (medicaidportal.aetna.com/propat) or Utilization Management, 1-844-835-4930: check H0031, 97151 and 97152.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes. ABA requests go on Section 6 of the Behavioral Health Prior Authorization Request (initial or concurrent, with the treatment plan attached), through Availity or the form; standard decisions within 5 business days',
      status: 'verified',
      cites: [S.abhForm, S.abhPM],
    },
    dxRequired: {
      value: 'Yes. The plan publishes no ABA criteria of its own, so the state rule applies: a primary ASD diagnosis made before age 8, with a diagnostic assessment from the past 24 months (Policy 519.23)',
      status: 'verified',
      cites: [S.abhPM, S.aba519],
    },
    payer: 'Aetna Better Health of West Virginia',
    state: 'WV', kind: 'medicaid-mco', parent: 'West Virginia Medicaid (Mountain Health Trust / Mountain Health Promise)',
    pill: 'Payer Guide · Aetna Better Health · West Virginia',
    h1: 'Aetna Better Health of West Virginia ABA coverage: the intake guide.',
    metaTitle: 'Aetna Better Health of West Virginia ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Aetna Better Health of West Virginia handles ABA for Mountain Health Trust and Mountain Health Promise (foster care) members: the BH prior-authorization form’s ABA section, 5-business-day decisions, BMS Policy 519.23 eligibility rules, 365-day filing, and what intake should collect.',
    intro: [
      'Aetna Better Health of West Virginia is one of the four Mountain Health Trust MCOs and, by BMS designation, "the single managed care organization" for Mountain Health Promise, the specialized program for children in foster, kinship and adoptive care (about 23,574 children, per BMS). Members eligible for the Children with Serious Emotional Disorder Waiver are automatically enrolled with it too. So a foster child’s ABA almost always runs through this plan.',
      'The plan’s 2026–2027 provider manual does not name ABA, but its Behavioral Health Prior Authorization Request has a dedicated ABA section, and BMS Policy 519.23 sets the eligibility floor the plan works from.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as a Medicaid state-plan service for ages 18 months–20 (BMS Policy 519.23)' },
      { label: 'Programs', value: 'Mountain Health Trust, Mountain Health Promise (sole MCO), WVCHIP' },
      { label: 'Prior auth', value: 'BH PA form Section 6 (ABA) via Availity; check codes in ProPAT' },
      { label: 'Decision clock', value: '5 business days standard; 2 calendar days urgent' },
      { label: 'Timely filing', value: '365 days from date of service; COB 365 days from the primary RA' },
      { label: 'Licensure', value: 'None in WV; BACB certification governs' },
    ],
    sections: [
      {
        h2: 'Prior authorization: the ABA section of the BH form',
        body: [
          'Aetna Better Health’s Behavioral Health Prior Authorization Request lists "APPLIED BEHAVIOR ANALYSIS (ABA)" as Section 6. It asks whether the request is initial or concurrent (and how long services have run), the treatment setting, clinical symptoms or social barriers, and a discharge plan, and for ABA it wants the treatment plan attached along with clinical data, progress on target behaviors, and compliance with treatment. "For initial ABA requests, include progress or lack-of, with any previous treatment interventions." Every request needs the signed attestation; incomplete forms "may lead to delays in processing or lack of authorization." The form tells providers to check its ProPAT search tool to see whether a service needs PA and recommends Availity for submission and status checks. UM is reachable at 1-844-835-4930.',
          'For medical necessity the manual lists, in order, "Criteria required by applicable state or federal regulatory agency," then Aetna Medicaid guidelines, MCG, LOCUS/CALOCUS, ASAM, Aetna Clinical Policy Bulletins and other criteria. For ABA the state regulatory criteria are BMS Policy 519.23: ages 18 months through 20, ASD diagnosed before age 8, a diagnostic assessment from the past 24 months, an annual physician’s order, and the 40-hour weekly cap. A peer-to-peer request "must be received within 5 business days of the date the denial of coverage determination was sent" (medical directors at 1-833-459-1998).',
        ],
        cites: [S.abhForm, S.abhPM, S.aba519],
      },
      {
        h2: 'Mountain Health Promise: foster, kinship and adoptive care',
        body: [
          'BMS runs Mountain Health Promise under a 1915(b) waiver effective March 1, 2021, and names Aetna Better Health of West Virginia as its only MCO. The SFY 2026 Mountain Health Promise contract holds the plan to the same authorization clock as the rest of Medicaid managed care: standard decisions "no later than five (5) business days of receiving the request" (extendable by up to 14 calendar days), expedited decisions within two business days, peer-to-peer appeals within five business days and PA appeals within ten (W. Va. Code § 9-5-32). Clean claims must be paid "within thirty (30) calendar days of receipt," with interest at 18% a year after that. BMS Policy 519.23 also says members in foster care "should receive assessment as quickly as possible." The plan’s manual adds that Mountain Health Promise members "are not able to opt out" of its case management unless they are adopted care members or youth who aged out of foster care while enrolled in WV Medicaid, so expect a case manager in the loop alongside the caseworker.',
        ],
        cites: [S.mhp, S.mhpContract, S.aba519, S.abhPM],
      },
      {
        h2: 'Claims and rates',
        body: [
          'New claims must be filed "within 365 days from the date services were performed"; coordination-of-benefits claims have 365 days from the primary remittance advice, and resubmissions 120 days from the original remittance. Provider appeals "must be received 90 days from original denial." Clean claims are paid within 30 days of receipt. The EDI payer ID is 128WV. The plan pays contracted rates, which are not published; the public benchmark is the BMS ABA fee schedule (97153 $9.90 and 97155 $29.14 per 15 minutes).',
        ],
        cites: [S.abhPM, S.abaFee],
      },
    ],
    collect: [
      { title: 'Program on the card', desc: 'Mountain Health Trust, Mountain Health Promise (foster/kinship/adoptive) or WVCHIP. Confirm eligibility on the date of service.' },
      { title: 'Age at diagnosis + recent assessment', desc: 'ASD diagnosed before age 8; diagnostic assessment from the past 24 months (BMS Policy 519.23).' },
      { title: 'Annual physician’s order', desc: 'Required on every ABA PA request under the state policy.' },
      { title: 'Treatment plan', desc: 'The ABA section of the PA form requires it attached.' },
      { title: 'Caseworker contact (MHP)', desc: 'For foster children, who can consent and sign releases.' },
      { title: 'Other insurance', desc: 'The plan is payer of last resort; bill the primary and send its RA within 365 days.' },
    ],
    sources: [S.abhPM, S.abhForm, S.mht, S.mhp, S.mhpContract, S.aba519, S.tele519, S.teleA, S.abaFee, S.ch527, S.c9532, S.cfr438, S.cfr433, S.bacbLic],
    deliveryRules: {
      supervision: {
        value: 'The plan publishes no ABA supervision rule of its own, so the state rule applies. ' + WV_MCD_SUPERVISION,
        status: 'verified',
        cites: [S.abhPM, S.aba519],
      },
      concurrentBilling: {
        value: 'The plan publishes no ABA concurrent-billing rule. BMS Policy 519.23 requires documentation showing "only one staff person’s time is billed for any specific activity," which the plan has not said it departs from.',
        status: 'plan-dependent',
        cites: [S.abhPM, S.aba519],
        verifyVia: 'Aetna Better Health of WV Provider Relations, 1-888-348-2922: ask whether 97153 and 97155 may be billed for the same minutes.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'The plan publishes no ABA unit cap of its own; BMS Policy 519.23’s limit is 40 hours a week and/or 8 hours in 24 hours across 97151–97156 and 97158, with H0031 once a year. Authorized units are set per request.',
        status: 'verified',
        cites: [S.abhPM, S.aba519],
      },
      noteSignature: {
        value: 'Not addressed in the provider manual or the PA form beyond the request attestation.',
        status: 'unverified',
        cites: [S.abhPM, S.abhForm],
        verifyVia: 'Aetna Better Health of WV Provider Relations, 1-888-348-2922, or your provider agreement’s documentation standards.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'The PA form asks for the "TREATMENT SETTING" on every ABA request; the manual sets no ABA setting rule. Under state policy, services may be delivered in the member’s natural environment, educational services cannot be authorized, and school-administered services are outside managed care.',
        status: 'verified',
        cites: [S.abhForm, S.aba519, S.ch527],
      },
      billAsProvider: {
        value: 'The plan publishes no ABA-specific billing rule. Under BMS Policy 519.23, the BCBA or BCaBA "may bill" the RBT-delivered codes (97152, 97153, 97154), and every MCO network provider must also be enrolled with West Virginia Medicaid (Chapter 527).',
        status: 'plan-dependent',
        cites: [S.abhPM, S.aba519, S.ch527],
        verifyVia: 'Aetna Better Health of WV Provider Relations, 1-888-348-2922: confirm the rendering NPI expected on RBT lines.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: { value: 'The plan publishes no ABA age rule, so the state rule applies. ' + WV_MCD_AGE, status: 'verified', cites: [S.abhPM, S.aba519] },
      dxRecency: { value: 'The plan publishes no rule of its own. ' + WV_MCD_DX_RECENCY, status: 'verified', cites: [S.abhPM, S.aba519] },
      diagnosingProviders: { value: 'The plan publishes no list of its own. ' + WV_MCD_DX_PROVIDERS, status: 'verified', cites: [S.abhPM, S.aba519] },
      diagnosticTools: {
        value: 'Neither the plan nor BMS names a diagnostic instrument. The plan wants clinical data, target behaviors and progress with the request; BMS wants severity levels, baseline data and an annual functional assessment of adaptive skills.',
        status: 'unverified',
        cites: [S.abhForm, S.aba519],
        verifyVia: 'Aetna Better Health of WV UM, 1-844-835-4930: ask which standardized instruments it expects with an initial ABA request.',
        blocker: 'per-case',
      },
      referral: { value: 'The plan publishes nothing different from the state. ' + WV_MCD_REFERRAL, status: 'verified', cites: [S.abhPM, S.aba519] },
      telehealth: { value: 'The plan publishes no ABA telehealth rule of its own, so the state rule applies. ' + WV_MCD_TELE, status: 'verified', cites: [S.teleA, S.tele519, S.abhPM] },
      authTurnaround: {
        value: 'Standard (non-urgent) pre-service decisions within 5 business days of receipt, extendable by up to 14 calendar days; urgent requests "processed within 2 calendar days." The Mountain Health Promise contract and W. Va. Code § 9-5-32 set the same five-business-day standard, with incomplete requests returned within two business days and decided within two business days of the missing information.',
        status: 'verified',
        cites: [S.abhPM, S.abhForm, S.mhpContract, S.c9532],
      },
      coordinationOfBenefits: {
        value: '"Aetna Better Health shall be used as a source of payment for covered services only after all other sources of payment have been exhausted." COB claims must arrive "within 365 days from the member’s primary carrier remittance advice date" with the primary RA, and providers must follow Aetna Better Health’s authorization rules "even when Aetna is not the primary payer."',
        status: 'verified',
        cites: [S.abhPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Aetna Better Health of West Virginia cover ABA?', a: 'Yes. ABA is a West Virginia Medicaid state-plan service under BMS Policy 519.23, and the plan’s Behavioral Health Prior Authorization Request has a dedicated ABA section.' },
      { q: 'Is ABA covered for children in foster care in West Virginia?', a: 'Yes. Foster, kinship and adoptive-care children are in Mountain Health Promise, and Aetna Better Health of West Virginia is its only MCO. The same BMS ABA rules apply, and BMS says foster children "should receive assessment as quickly as possible."' },
      { q: 'How fast does Aetna Better Health of WV decide an ABA request?', a: 'Within 5 business days for standard requests (extendable up to 14 calendar days) and 2 calendar days for urgent ones.' },
      { q: 'What is the timely filing limit?', a: '365 days from the date of service for new claims, 365 days from the primary remittance for COB claims, and 120 days from the original remittance for resubmissions. Provider appeals are due within 90 days of the denial.' },
    ],
  },

  'the-health-plan-west-virginia': {
    slug: 'the-health-plan-west-virginia',
    cardDesc: 'Wheeling-based MHT MCO in all 55 counties; its PA list names no ABA code, which clashes with BMS policy, so confirm in the portal.',
    assessmentPA: {
      value: 'Unclear. THP’s Medical and Behavioral Health PA list (effective 8/1/2026) does not list H0031 or any ABA CPT code, and says unlisted codes need no PA, yet BMS Policy 519.23 requires PA for every ABA code and THP says it covers behavioral health "as required by BMS"',
      status: 'unverified',
      cites: [S.thpPAL, S.thpMHT, S.aba519],
      verifyVia: 'The Health Plan secure provider portal (myplan.healthplan.org) or Provider Services: ask in writing whether 97151 and H0031 need prior authorization for Mountain Health Trust members.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Unclear for the same reason: no ABA code (97152–97158) appears on THP’s 8/1/2026 PA list, while the BMS policy THP follows requires PA on all of them. Submit through the THP portal until THP confirms otherwise',
      status: 'unverified',
      cites: [S.thpPAL, S.thpMHT, S.aba519],
      verifyVia: 'The Health Plan provider portal or Provider Services: ask whether ABA treatment codes require PA for Mountain Health Trust and WVCHIP members.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes. THP provides behavioral health services "as outlined in" the BMS provider manual and publishes no ABA criteria of its own, so BMS Policy 519.23 applies: a primary ASD diagnosis made before age 8, assessed within the past 24 months',
      status: 'verified',
      cites: [S.thpMHT, S.aba519],
    },
    payer: 'The Health Plan of West Virginia (Mountain Health Trust)',
    state: 'WV', kind: 'medicaid-mco', parent: 'West Virginia Medicaid (Mountain Health Trust)',
    pill: 'Payer Guide · The Health Plan · West Virginia',
    h1: 'The Health Plan of West Virginia ABA coverage: the intake guide.',
    metaTitle: 'The Health Plan West Virginia Medicaid ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How The Health Plan (THP) handles ABA for West Virginia Mountain Health Trust and WVCHIP members: BMS Policy 519.23 rules, a PA list that names no ABA code, portal-only prior authorization, 5-business-day decisions, 180-day timely filing.',
    intro: [
      'The Health Plan (THP) has served West Virginia Medicaid members since September 1, 1996 and WVCHIP members since January 1, 2021, and now serves Mountain Health Trust members in all 55 counties. Its 2026 provider manual says THP "provides behavioral health services as outlined in the Bureau for Medical Services (BMS) practitioner manual," lists Chapter 519 (where the ABA policy sits) among them, and names Applied Behavior Analysis as part of the WVCHIP behavioral health benefit.',
      'The catch is authorization. THP warns that "THP and BMS may have differing prior authorization requirements," and THP’s current PA list does not name a single ABA code. Get THP’s answer in writing before you start.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, per BMS Policy 519.23 (Medicaid) and named in THP’s WVCHIP benefit' },
      { label: 'Prior auth', value: 'No ABA code on THP’s 8/1/2026 PA list; BMS requires PA on all; confirm' },
      { label: 'Submit via', value: 'THP secure provider portal only (no fax/phone since July 1, 2024)' },
      { label: 'Decision clock', value: '5 business days standard; 2 business days urgent' },
      { label: 'Timely filing', value: '180 days from date of service' },
      { label: 'Licensure', value: 'None in WV; THP credentials all practitioners before they serve members' },
    ],
    sections: [
      {
        h2: 'Coverage and the prior-authorization gap',
        body: [
          'THP’s Mountain Health Trust chapter says it covers behavioral health services as outlined in the BMS manual chapters, including Chapter 519, and that for WVCHIP members the benefit includes "Applied Behavior Analysis. All practitioners must be fully licensed and credentialed by THP before providing services." It also says THP and BMS "may have differing prior authorization requirements" and sends providers to THP’s PA list.',
          'That list, the Medical and Behavioral Health Prior Authorization Requirements effective August 1, 2026, has a Mountain Health Trust column, but none of 97151 through 97158, 0362T, 0373T or H0031 appears on it. The list’s rule for missing codes is "If your valid and active CPT code is not on this list with prior authorization requirements, prior authorization is not required," with an exception for any Mountain Health Trust code "not found on the BMS Fee Schedule" (the ABA codes are on BMS’s ABA fee schedule). BMS Policy 519.23 requires PA on every ABA code, and Chapter 527 says providers must obtain the authorizations "as specified by the MCO." Until THP confirms, treat ABA as requiring a portal authorization; a denied claim cannot be billed to the family under BMS rules.',
        ],
        cites: [S.thpMHT, S.thpPAL, S.aba519, S.ch527, S.abaFee],
      },
      {
        h2: 'Portal submission and decision timelines',
        body: [
          'To comply with Senate Bill 267, THP requires prior authorizations for Mountain Health Trust, West Virginia commercial and PEIA members through its secure provider portal; "Effective July 1, 2024, fax and phone prior authorization requests will not be accepted." THP answers complete requests within 5 business days (2 business days urgent) for Mountain Health Trust. For incomplete requests, THP notifies the practitioner of deficiencies within 2 business days, the practitioner has 3 business days to respond, and THP then decides within 2 business days; a peer review is completed within 5 business days and a formal PA appeal decided within 10 business days.',
        ],
        cites: [S.thpClinical, S.c9532],
      },
      {
        h2: 'Claims and rates',
        body: [
          'For Mountain Health Trust, "Initial, original claims must be submitted within 180 days from the date of service"; corrected claims within 180 days of the original denial or of the service date, whichever is later; and COB claims within 180 days of service or 90 days from the primary carrier’s EOB, whichever is later. THP adjudicates clean claims within 30 days and pays participating practitioners 18% a year interest on Mountain Health Trust claims unpaid after 30 days. EPSDT claims "are paid without any coordination of benefits (COB)" and need the EP modifier, but THP does not say whether it treats ABA as an EPSDT claim. Rates are contracted and unpublished; the BMS ABA fee schedule (97153 $9.90 per 15 minutes) is the public benchmark.',
        ],
        cites: [S.thpClaims, S.thpMHT, S.abaFee],
      },
    ],
    collect: [
      { title: 'Member ID with the "H" and 01 suffix', desc: 'THP claims need the plan ID with the H and suffix, plus the WV Medicaid ID.' },
      { title: 'Age at diagnosis + recent assessment', desc: 'ASD diagnosed before age 8; diagnostic assessment from the past 24 months (BMS Policy 519.23).' },
      { title: 'Annual physician’s order', desc: 'Required with ABA PA requests under the state policy.' },
      { title: 'THP’s written PA answer', desc: 'Its PA list names no ABA code; keep THP’s confirmation in the chart.' },
      { title: 'Other insurance', desc: 'COB claims are due within 180 days of service or 90 days from the primary EOB.' },
    ],
    sources: [S.thpMHT, S.thpPAL, S.thpClinical, S.thpClaims, S.aba519, S.tele519, S.teleA, S.abaFee, S.ch527, S.mht, S.c9532, S.cfr438, S.cfr433, S.bacbLic],
    deliveryRules: {
      supervision: { value: 'THP publishes no ABA supervision rule of its own, so the state rule applies. ' + WV_MCD_SUPERVISION, status: 'verified', cites: [S.thpMHT, S.aba519] },
      concurrentBilling: {
        value: 'THP publishes no ABA concurrent-billing rule; BMS Policy 519.23 requires that "only one staff person’s time is billed for any specific activity."',
        status: 'plan-dependent',
        cites: [S.thpMHT, S.aba519],
        verifyVia: 'THP Provider Services or THP payment policies (healthplan.org → Providers → Payment Policies): ask whether 97153 and 97155 may be billed for the same minutes.',
        blocker: 'per-case',
      },
      dailyLimits: { value: 'THP publishes no ABA unit cap of its own; ' + WV_MCD_LIMITS, status: 'verified', cites: [S.thpMHT, S.aba519] },
      noteSignature: {
        value: 'Not addressed in the THP manual chapters read.',
        status: 'unverified',
        cites: [S.thpMHT],
        verifyVia: 'THP Provider Manual Chapter 4 (Medical Records) or THP Provider Services.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'THP excludes "School-based services" from its behavioral health benefit (they stay fee-for-service), and BMS says educational services cannot be authorized. THP publishes no other ABA setting rule.',
        status: 'verified',
        cites: [S.thpMHT, S.aba519],
      },
      billAsProvider: {
        value: 'THP "requires credentialing of all licensed behavioral health practitioners operating within a practitioner’s practice," and says unlicensed personnel may not bill behavioral health services except approved supervised psychologists and certain OBMAT exceptions. It does not say how RBT services billed under a BCBA are handled, and BCBAs hold no West Virginia license.',
        status: 'unverified',
        cites: [S.thpMHT, S.aba519],
        verifyVia: 'THP Provider Services and credentialing: ask how BCBAs and RBTs are credentialed and which NPI goes on RBT-delivered lines.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: { value: 'THP publishes no ABA age rule, so the state rule applies. ' + WV_MCD_AGE, status: 'verified', cites: [S.thpMHT, S.aba519] },
      dxRecency: { value: 'THP publishes no rule of its own. ' + WV_MCD_DX_RECENCY, status: 'verified', cites: [S.thpMHT, S.aba519] },
      diagnosingProviders: { value: 'THP publishes no list of its own. ' + WV_MCD_DX_PROVIDERS, status: 'verified', cites: [S.thpMHT, S.aba519] },
      diagnosticTools: {
        value: 'Neither THP nor BMS names a diagnostic instrument.',
        status: 'unverified',
        cites: [S.thpMHT, S.aba519],
        verifyVia: 'THP Provider Services: ask which instruments it expects with an initial ABA request.',
        blocker: 'per-case',
      },
      referral: { value: 'THP publishes nothing different from the state. ' + WV_MCD_REFERRAL, status: 'verified', cites: [S.thpMHT, S.aba519] },
      telehealth: { value: 'THP publishes no ABA telehealth rule of its own, so the state rule applies. ' + WV_MCD_TELE, status: 'verified', cites: [S.teleA, S.tele519, S.thpMHT] },
      authTurnaround: {
        value: 'Complete Mountain Health Trust requests: 5 business days standard, 2 business days urgent. Incomplete: THP flags deficiencies within 2 business days, the practitioner has 3 business days, THP decides within 2 business days of the response. Peer review within 5 business days; PA appeals within 10 business days.',
        status: 'verified',
        cites: [S.thpClinical, S.c9532],
      },
      coordinationOfBenefits: {
        value: 'Bill the other carrier first: COB claims are due within 180 days of service or 90 days from the primary EOB, whichever is later. THP says EPSDT claims are paid without COB but does not say whether ABA counts as EPSDT, and BMS treats Medicaid as payer of last resort.',
        status: 'plan-dependent',
        cites: [S.thpClaims, S.thpMHT, S.ch100],
        verifyVia: 'THP Provider Services: ask whether ABA claims for a member with commercial coverage must carry the primary EOB.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does The Health Plan cover ABA for West Virginia Medicaid members?', a: 'Yes. THP covers behavioral health services as outlined in the BMS manual, including Chapter 519, where Policy 519.23 covers ABA, and its manual names ABA in the WVCHIP behavioral health benefit.' },
      { q: 'Does The Health Plan require prior authorization for ABA?', a: 'Its August 1, 2026 PA list names no ABA code, but BMS policy requires PA on every ABA code and THP warns that THP and BMS rules can differ. Ask THP in writing and keep the answer.' },
      { q: 'What is The Health Plan’s timely filing limit?', a: '180 days from the date of service for original Mountain Health Trust claims; COB claims 180 days from service or 90 days from the primary EOB, whichever is later.' },
    ],
  },

  'highmark-health-options-west-virginia': {
    slug: 'highmark-health-options-west-virginia',
    family: 'bcbs',
    cardDesc: 'Highmark’s Medicaid MCO: ABA requested on its outpatient BH PA form (fax 1-855-412-7997); InterQual review; 12-month filing.',
    assessmentPA: {
      value: 'Not stated code by code. HHO WV’s code lookup is a site search, and its manual does not list ABA codes; BMS Policy 519.23 requires PA for 97151 and H0031',
      status: 'unverified',
      cites: [S.hhoLookup, S.hhoPM, S.aba519],
      verifyVia: 'Highmark Health Options WV Prior Authorization Code Lookup (search 97151 and H0031) or Utilization Management, 1-844-325-6251.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes. HHO’s Outpatient Behavioral Health Prior Authorization Request Form has an "ABA Therapy" line (sessions and frequency); "Authorization is based on medical necessity"',
      status: 'verified',
      cites: [S.hhoForm],
    },
    dxRequired: {
      value: 'Yes. HHO publishes no ABA criteria of its own and applies "the Bureau for Medical Services definition of medical necessity," so BMS Policy 519.23 applies: primary ASD diagnosis before age 8, assessed within 24 months',
      status: 'verified',
      cites: [S.hhoPM, S.aba519],
    },
    payer: 'Highmark Health Options West Virginia (Mountain Health Trust)',
    state: 'WV', kind: 'medicaid-mco', parent: 'West Virginia Medicaid (Mountain Health Trust)',
    pill: 'Payer Guide · Highmark Health Options · West Virginia',
    h1: 'Highmark Health Options West Virginia ABA coverage: the intake guide.',
    metaTitle: 'Highmark Health Options West Virginia ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Highmark Health Options West Virginia handles ABA for Mountain Health Trust members: the outpatient BH PA form, InterQual and BMS medical necessity, BMS Policy 519.23 eligibility, 60-day credentialing, 12-month filing.',
    intro: [
      'Highmark Health Options West Virginia (HHO WV) is Highmark’s Mountain Health Trust MCO and an independent Blue Cross Blue Shield licensee, separate from Highmark Blue Cross Blue Shield West Virginia’s commercial business. Its 2025 provider manual (updated 11/4/25) does not discuss ABA directly, but its Outpatient Behavioral Health Prior Authorization Request Form includes ABA therapy, and BMS Policy 519.23 sets the eligibility rules.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as a Medicaid state-plan service (BMS Policy 519.23)' },
      { label: 'Prior auth', value: 'Outpatient BH PA form, "ABA Therapy" line; fax 1-855-412-7997; UM 1-844-325-6251' },
      { label: 'Criteria', value: 'InterQual, medical policy, and the BMS definition of medical necessity' },
      { label: 'Credentialing', value: 'Written decision within 60 days of committee approval' },
      { label: 'Timely filing', value: '12 months from date of service' },
      { label: 'Licensure', value: 'None in WV; BACB certification governs' },
    ],
    sections: [
      {
        h2: 'Prior authorization and criteria',
        body: [
          'HHO WV’s Outpatient Behavioral Health Prior Authorization Request Form asks for the member, diagnosis (ICD-10), facility and provider NPIs, and under Mental Health Services an "ABA Therapy" request by number of sessions and frequency. The form says to fax it with supporting documentation to 1-855-412-7997 and that "Authorization is based on medical necessity"; questions go to Utilization Management at 1-844-325-6251. West Virginia law (W. Va. Code § 9-5-32) expects PA requests to go through an electronic portal, so ask whether HHO wants ABA submitted in its provider portal instead. HHO’s code lookup is now a search box on its provider site; the manual does not list ABA codes.',
          'HHO assesses medical necessity with ASAM criteria, InterQual criteria, and medical policy criteria together with "the Bureau for Medical Services definition of medical necessity." For ABA that means BMS Policy 519.23: ages 18 months through 20, ASD diagnosed before age 8, a diagnostic assessment from the past 24 months, an annual physician’s order, and no more than 40 hours a week.',
        ],
        cites: [S.hhoForm, S.hhoPM, S.hhoLookup, S.c9532, S.aba519],
      },
      {
        h2: 'Credentialing, claims and rates',
        body: [
          'Providers apply through CAQH, and after approval by the Highmark Quality and Credentialing committee or medical director "will receive written notification regarding their credentialing decision within 60 days." Original claims must be filed "within 12 months from the date of service"; corrected claims and requests for review within 120 days of the original remittance. HHO WV is payer of last resort when commercial or Medicare coverage exists, and clean claims are paid within 30 days of receipt, with 18% annual interest for in-network providers after that. Rates are contracted and unpublished; the BMS ABA fee schedule (97153 $9.90 per 15 minutes) is the public benchmark.',
        ],
        cites: [S.hhoPM, S.abaFee],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm HHO WV (Medicaid), not Highmark BCBS WV commercial.' },
      { title: 'Age at diagnosis + recent assessment', desc: 'ASD diagnosed before age 8; diagnostic assessment from the past 24 months (BMS Policy 519.23).' },
      { title: 'Annual physician’s order', desc: 'Required with ABA PA requests under the state policy.' },
      { title: 'Sessions and frequency requested', desc: 'The HHO form asks for ABA by sessions and frequency.' },
      { title: 'Other insurance', desc: 'Bill the primary first; HHO needs the EOB within 12 months of service.' },
    ],
    sources: [S.hhoPM, S.hhoForm, S.hhoLookup, S.aba519, S.tele519, S.teleA, S.abaFee, S.ch527, S.mht, S.c9532, S.cfr438, S.cfr433, S.bacbLic],
    deliveryRules: {
      supervision: { value: 'HHO publishes no ABA supervision rule of its own, so the state rule applies. ' + WV_MCD_SUPERVISION, status: 'verified', cites: [S.hhoPM, S.aba519] },
      concurrentBilling: {
        value: 'HHO publishes no ABA concurrent-billing rule; BMS Policy 519.23 requires that "only one staff person’s time is billed for any specific activity."',
        status: 'plan-dependent',
        cites: [S.hhoPM, S.aba519],
        verifyVia: 'HHO WV Provider Services, 1-833-957-0020: ask whether 97153 and 97155 may be billed for the same minutes.',
        blocker: 'per-case',
      },
      dailyLimits: { value: 'HHO publishes no ABA unit cap of its own; ' + WV_MCD_LIMITS, status: 'verified', cites: [S.hhoPM, S.aba519] },
      noteSignature: {
        value: 'Not addressed in the HHO WV provider manual for ABA.',
        status: 'unverified',
        cites: [S.hhoPM],
        verifyVia: 'HHO WV Provider Services, 1-833-957-0020, or your provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'HHO publishes no ABA setting rule. Under state policy, services may be delivered in the member’s natural environment, educational services cannot be authorized, and school-administered services are outside managed care.',
        status: 'plan-dependent',
        cites: [S.hhoPM, S.aba519, S.ch527],
        verifyVia: 'HHO WV UM, 1-844-325-6251: ask which POS codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'The PA form asks for both the servicing facility NPI and the servicing provider NPI; HHO publishes no rule on how RBT services are billed. BMS lets the BCBA or BCaBA bill RBT-delivered codes.',
        status: 'plan-dependent',
        cites: [S.hhoForm, S.aba519],
        verifyVia: 'HHO WV Provider Services, 1-833-957-0020: confirm the rendering NPI on RBT lines.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: { value: 'HHO publishes no ABA age rule, so the state rule applies. ' + WV_MCD_AGE, status: 'verified', cites: [S.hhoPM, S.aba519] },
      dxRecency: { value: 'HHO publishes no rule of its own. ' + WV_MCD_DX_RECENCY, status: 'verified', cites: [S.hhoPM, S.aba519] },
      diagnosingProviders: { value: 'HHO publishes no list of its own. ' + WV_MCD_DX_PROVIDERS, status: 'verified', cites: [S.hhoPM, S.aba519] },
      diagnosticTools: {
        value: 'HHO reviews on InterQual, which is licensed and not public; neither HHO nor BMS names a diagnostic instrument.',
        status: 'unverified',
        cites: [S.hhoPM, S.aba519],
        verifyVia: 'HHO WV UM, 1-844-325-6251: ask what diagnostic documentation InterQual review expects.',
        blocker: 'licensed',
      },
      referral: { value: 'HHO publishes nothing different from the state. ' + WV_MCD_REFERRAL, status: 'verified', cites: [S.hhoPM, S.aba519] },
      telehealth: { value: 'HHO publishes no ABA telehealth rule of its own, so the state rule applies. ' + WV_MCD_TELE, status: 'verified', cites: [S.teleA, S.tele519, S.hhoPM] },
      authTurnaround: {
        value: 'HHO’s manual does not publish an ABA decision clock. As a Medicaid MCO it is held to W. Va. Code § 9-5-32 (5 business days once a complete electronic request is received, 2 business days urgent) and to the federal managed-care ceiling of 7 calendar days for rating periods starting on or after January 1, 2026 (42 CFR 438.210(d)).',
        status: 'plan-dependent',
        cites: [S.hhoPM, S.c9532, S.cfr438],
        verifyVia: 'HHO WV UM, 1-844-325-6251: ask its standard and urgent turnaround for ABA requests.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: '"HHO WV is the payer of last resort on claims for services provided to patients when any commercial or Medicare plan covers the patient." Bill the primary first and send HHO the original claim with the EOB within 12 months of the date of service (12 months from the Medicare remittance if Medicare is primary).',
        status: 'verified',
        cites: [S.hhoPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Highmark Health Options West Virginia cover ABA?', a: 'Yes. ABA is a West Virginia Medicaid state-plan service under BMS Policy 519.23, and HHO’s outpatient behavioral health PA form includes ABA therapy.' },
      { q: 'Is Highmark Health Options the same as Highmark Blue Cross Blue Shield West Virginia?', a: 'No. HHO WV is Highmark’s Medicaid MCO; Highmark BCBS West Virginia is the commercial plan, with its own prior-authorization list and the state autism mandate.' },
      { q: 'What is HHO WV’s timely filing limit?', a: '12 months from the date of service for original claims; corrected claims and review requests within 120 days of the original remittance.' },
    ],
  },

  'wellpoint-west-virginia': {
    slug: 'wellpoint-west-virginia',
    family: 'anthem',
    cardDesc: 'Formerly UniCare: MHT MCO (Elevance); ABA follows BMS Policy 519.23; PA rules in the lookup tool; 180-day filing.',
    assessmentPA: {
      value: 'Not stated in Wellpoint’s manual; code-level PA rules sit in its online lookup tool. BMS Policy 519.23 requires PA for 97151 and H0031',
      status: 'unverified',
      cites: [S.wpPM, S.wpPAReq, S.aba519],
      verifyVia: 'Wellpoint WV Prior Authorization Lookup Tool (wellpoint.com/wv → Provider → Prior Authorization Requirements) or UM, 866-655-7423: check 97151 and H0031.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Not stated in the manual; Wellpoint’s 2023 ABA bulletin sent providers to the provider manual and site for PA rules. Check each code in the lookup tool; BMS requires PA on all ABA codes',
      status: 'unverified',
      cites: [S.wpABA, S.wpPAReq, S.aba519],
      verifyVia: 'Wellpoint WV Prior Authorization Lookup Tool or UM, 866-655-7423: check 97152–97156 and 97158; submit through the Interactive Care Reviewer in Availity.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes. Wellpoint (then UniCare) told providers its ABA policy mirrors BMS Policy 519.23, which requires a primary ASD diagnosis made before age 8 and assessed within 24 months',
      status: 'verified',
      cites: [S.wpABA, S.aba519],
    },
    payer: 'Wellpoint West Virginia (Mountain Health Trust)',
    state: 'WV', kind: 'medicaid-mco', parent: 'West Virginia Medicaid (Mountain Health Trust)',
    pill: 'Payer Guide · Wellpoint · West Virginia',
    h1: 'Wellpoint West Virginia ABA coverage: the intake guide.',
    metaTitle: 'Wellpoint West Virginia Medicaid ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Wellpoint West Virginia (formerly UniCare) handles ABA for Mountain Health Trust and WVCHIP members: BMS Policy 519.23, electronic PA through Availity, no dollar limits for WVCHIP ABA, 180-day timely filing.',
    intro: [
      'Wellpoint West Virginia, Inc. is the Mountain Health Trust MCO formerly branded UniCare Health Plan of West Virginia (BMS’s prior-authorization page still links it as "Unicare"). Its August 2026 provider manual does not discuss ABA, but a May 2023 UniCare bulletin, still posted in Wellpoint’s West Virginia archive, told providers that WVCHIP ABA policy "was changed to mirror the Medicaid policy effective February 1, 2023," pointed to BMS Policy 519.23, and noted "there are no longer dollar limits associated with ABA services."',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, per BMS Policy 519.23 (Medicaid and WVCHIP)' },
      { label: 'Prior auth', value: 'Lookup tool; electronic submission via Interactive Care Reviewer (Availity)' },
      { label: 'Criteria', value: 'Wellpoint medical policies/CUMGs, else MCG; state contract supersedes' },
      { label: 'Timely filing', value: '180 days from date of service (or the other payer’s RA date)' },
      { label: 'Payer ID', value: 'WLPNT' },
      { label: 'Licensure', value: 'None in WV; BACB certification governs' },
    ],
    sections: [
      {
        h2: 'Coverage and prior authorization',
        body: [
          'The 2023 bulletin is the plan’s only ABA-specific document we found: WVCHIP ABA mirrors Medicaid Policy 519.23 from February 1, 2023, with no dollar limits, and PA requirements are in the provider manual. The August 2026 manual says all PA requests "must be submitted electronically" through the Interactive Care Reviewer, "In accordance with W.Va. Code §9-5-32 and W.Va. Code §33-25A-8s." Wellpoint’s August 2026 list of adopted Clinical UM Guidelines has no ABA guideline (its autism entry, CG-BEH-15, covers activity therapy), and the list says MCG Care Guidelines apply to outpatient services without a Wellpoint policy, while "Medicaid state contracts, regulatory guidance, CMS requirements" supersede MCG. In practice that makes BMS Policy 519.23 the working criteria.',
          'For electronic routine requests, Wellpoint checks completeness within two business days, sends a request for information if needed (due back in three business days), and decides within two business days of receiving it. Urgent pre-service reviews are completed within the shorter of two business days or three calendar days. Peer-to-peer requests must come from the treating practitioner within two business days of the denial and happen within five business days. Wellpoint does not backdate authorizations beyond three business days, which matters because BMS rejects retro ABA authorizations outright.',
        ],
        cites: [S.wpABA, S.wpPM, S.wpCUMG, S.c9532, S.aba519],
      },
      {
        h2: 'Claims and rates',
        body: [
          '"Claims must be submitted within 180 days of the service date to be considered for payment"; when Wellpoint is secondary, the clock runs from the other payer’s remittance date. COB claims need the other payer’s remittance advice, explanation of payment or denial letter. Payment disputes start with a Claim Payment Reconsideration, decided within 45 business days, and a Claim Payment Appeal may follow within 60 calendar days of that outcome. The payer ID is WLPNT. Rates are contracted and unpublished; the BMS ABA fee schedule (97153 $9.90 per 15 minutes) is the public benchmark.',
        ],
        cites: [S.wpPM, S.abaFee],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Wellpoint WV (Mountain Health Trust or WVCHIP); older cards may still say UniCare.' },
      { title: 'Age at diagnosis + recent assessment', desc: 'ASD diagnosed before age 8; diagnostic assessment from the past 24 months (BMS Policy 519.23).' },
      { title: 'Annual physician’s order', desc: 'Required with ABA PA requests under the state policy.' },
      { title: 'Other insurance', desc: 'Wellpoint defers UM to the primary insurer; bring the primary’s decision or notice of noncoverage.' },
    ],
    sources: [S.wpPM, S.wpABA, S.wpCUMG, S.wpPAReq, S.aba519, S.tele519, S.teleA, S.abaFee, S.ch527, S.mht, S.bmsPA, S.c9532, S.cfr438, S.cfr433, S.bacbLic],
    deliveryRules: {
      supervision: { value: 'Wellpoint publishes no ABA supervision rule of its own, so the state rule applies. ' + WV_MCD_SUPERVISION, status: 'verified', cites: [S.wpPM, S.aba519] },
      concurrentBilling: {
        value: 'Wellpoint publishes no ABA concurrent-billing rule; BMS Policy 519.23 requires that "only one staff person’s time is billed for any specific activity."',
        status: 'plan-dependent',
        cites: [S.wpPM, S.aba519],
        verifyVia: 'Wellpoint WV reimbursement policies or Customer Care, 800-782-0095: ask whether 97153 and 97155 may be billed for the same minutes.',
        blocker: 'per-case',
      },
      dailyLimits: { value: 'Wellpoint publishes no ABA unit cap of its own; ' + WV_MCD_LIMITS, status: 'verified', cites: [S.wpPM, S.aba519] },
      noteSignature: {
        value: 'Not addressed for ABA in the Wellpoint manual.',
        status: 'unverified',
        cites: [S.wpPM],
        verifyVia: 'Wellpoint WV Customer Care, 800-782-0095, or the medical-records standards in your provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Wellpoint publishes no ABA setting rule. Under state policy, services may be delivered in the member’s natural environment, educational services cannot be authorized, and school-administered services are outside managed care.',
        status: 'plan-dependent',
        cites: [S.wpPM, S.aba519, S.ch527],
        verifyVia: 'Wellpoint WV UM, 866-655-7423: ask which POS codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Wellpoint publishes no ABA-specific rendering rule. BMS lets the BCBA or BCaBA bill RBT-delivered codes.',
        status: 'plan-dependent',
        cites: [S.wpPM, S.aba519],
        verifyVia: 'Wellpoint WV Customer Care, 800-782-0095: confirm the rendering NPI on RBT lines.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: { value: 'Wellpoint follows BMS Policy 519.23 for ABA. ' + WV_MCD_AGE, status: 'verified', cites: [S.wpABA, S.aba519] },
      dxRecency: { value: 'Wellpoint publishes no rule of its own. ' + WV_MCD_DX_RECENCY, status: 'verified', cites: [S.wpABA, S.aba519] },
      diagnosingProviders: { value: 'Wellpoint publishes no list of its own. ' + WV_MCD_DX_PROVIDERS, status: 'verified', cites: [S.wpABA, S.aba519] },
      diagnosticTools: {
        value: 'Neither Wellpoint nor BMS names a diagnostic instrument; where Wellpoint has no policy it uses MCG, which is licensed.',
        status: 'unverified',
        cites: [S.wpCUMG, S.aba519],
        verifyVia: 'Wellpoint WV UM, 866-655-7423: ask what diagnostic documentation it expects with an initial ABA request.',
        blocker: 'licensed',
      },
      referral: { value: 'Wellpoint publishes nothing different from the state. ' + WV_MCD_REFERRAL, status: 'verified', cites: [S.wpABA, S.aba519] },
      telehealth: { value: 'Wellpoint’s manual defers to BMS Policy 519.17 for telehealth, so the state rule applies. ' + WV_MCD_TELE, status: 'verified', cites: [S.wpPM, S.teleA, S.tele519] },
      authTurnaround: {
        value: 'Electronic routine requests: completeness check within 2 business days, information due back within 3 business days, decision within 2 business days of receipt. Urgent pre-service: the shorter of 2 business days or 3 calendar days. Peer-to-peer within 5 business days of the request.',
        status: 'verified',
        cites: [S.wpPM, S.c9532],
      },
      coordinationOfBenefits: {
        value: '"If a member has other health insurance, Wellpoint defers all UM decisions to the primary insurer"; if the primary does not cover the service, submit its notice of noncoverage with the request. COB claims need the other payer’s RA, EOP or denial letter, and the 180-day limit runs from the other payer’s RA date.',
        status: 'verified',
        cites: [S.wpPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Wellpoint West Virginia cover ABA?', a: 'Yes. ABA is a West Virginia Medicaid state-plan service under BMS Policy 519.23, and Wellpoint (then UniCare) told providers its WVCHIP ABA policy mirrors Medicaid’s, with no dollar limits, from February 1, 2023.' },
      { q: 'Is UniCare the same as Wellpoint in West Virginia?', a: 'Yes. UniCare Health Plan of West Virginia rebranded as Wellpoint West Virginia; BMS’s prior-authorization page still lists it as Unicare.' },
      { q: 'What is Wellpoint West Virginia’s timely filing limit?', a: '180 days from the service date, or from the other payer’s remittance date when Wellpoint is secondary.' },
    ],
  },

  'aetna-west-virginia': {
    slug: 'aetna-west-virginia',
    family: 'aetna',
    cardDesc: 'Aetna national ABA criteria (CPB 0554, MNG) + West Virginia’s group-plan mandate (18 months–18, dx by age 8, $30K/yr cap).',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: precertification through Availity or the number on the card; the reauthorization interval is set by the plan, with progress evaluated every six months',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): ask what reauthorization interval it uses for ABA.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: ASD (CPB 0554 covers F84.0–F84.9 when criteria are met); ABA for other diagnoses is experimental',
      status: 'verified',
      cites: [S.aetnaCPB, S.aetnaGuide],
    },
    payer: 'Aetna in West Virginia',
    state: 'WV', kind: 'commercial',
    pill: 'Payer Guide · Aetna · West Virginia',
    h1: 'Aetna ABA coverage in West Virginia: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in West Virginia: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for West Virginia families: national clinical policy, precertification on all ABA codes, West Virginia’s group-plan autism mandate (ages 18 months to 18, diagnosis by 8, $30,000 cap), no state license, and what intake should verify.',
    intro: [
      'For an intake team in West Virginia, an Aetna commercial card means three layers: Aetna’s national ABA policy, West Virginia’s autism mandate for fully insured group plans, and the plan’s funding and size, which decide whether the mandate applies. Aetna also runs Aetna Better Health of West Virginia, a separate Medicaid MCO with its own guide.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'W. Va. Code §§ 33-16-3v, 33-24-7k, 33-25A-8j (HB 2693, 2011; HB 4260, 2012); PEIA § 5-16-7' },
      { label: 'Mandate age', value: '18 months to 18 years; ASD diagnosed at age 8 or younger' },
      { label: 'Mandate caps', value: 'ABA may be capped at $30,000/yr for 3 years from start, then $2,000/month to age 18' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; small employers (25 or fewer eligible employees)' },
      { label: 'Licensure', value: 'None: WV does not license behavior analysts; the mandate requires BACB (or similar) certification' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in West Virginia',
        body: [
          'Aetna covers ABA for autism spectrum disorder under CPB 0554 and its ABA medical necessity guide, with CPB 0648 for ASD, and considers ABA experimental for other diagnoses. Its behavioral health precertification list names all ten ABA codes, 97151 through 97158, 0362T and 0373T, submitted through Availity or the number on the card. The medical necessity guide’s only state exhibit is Maryland, so the national criteria apply unchanged in West Virginia: a standardized functional measure from the past 12 months, typical intensities of 10–25 hours a week for comprehensive and 1–20 for focused programs, and progress evaluated every six months.',
        ],
        cites: [S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert, S.aetnaGuide],
      },
      {
        h2: 'The West Virginia mandate: what it guarantees',
        body: [WV_MANDATE_BODY],
        cites: [S.c3316v, S.c3324k, S.c3325Aj, S.c5167, S.c516B, S.chipAut],
      },
      {
        h2: 'Credentialing, licensure and out-of-state BCBAs',
        body: [WV_LICENSURE_BODY],
        cites: [S.bacbLic, S.c30, S.aba519, S.tele519, S.c3357, S.abaFee],
      },
      {
        h2: 'Claims operations in West Virginia',
        body: [
          WV_PROMPT_PAY + ' Aetna’s own rule is that payment follows your contract: “The rates and compensation under your agreement are subject to the Aetna coding/claim edit policies,” and a member who has used up benefits cannot be charged “more than the contracted rate.” Aetna’s network criteria make supervision a billing condition: services “must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board.” For a public rate benchmark, West Virginia Medicaid pays 97153 at $9.90 per 15 minutes; commercial contracts are negotiated separately.',
        ],
        cites: [S.c3345, S.aetnaOM, S.aetnaNPC, S.abaFee],
      },
    ],
    collect: [
      { title: 'Plan funding type and employer size', desc: 'Fully insured group (mandate applies) vs. self-funded ERISA or a small employer of 25 or fewer (exempt).' },
      { title: 'Age at diagnosis', desc: 'The mandate requires an ASD diagnosis at age 8 or younger, and covers to age 18.' },
      { title: 'Physician or psychologist order', desc: 'The mandate requires treatment ordered or prescribed by a licensed physician or psychologist.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3).' },
      { title: 'Benefit year spend', desc: 'Mandated plans may cap ABA at $30,000 a year for three years from the start of treatment, then $2,000 a month.' },
    ],
    sources: [S.aetnaCPB, S.aetnaCPB648, S.aetnaGuide, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.aetnaTele, S.c3316v, S.c3324k, S.c3325Aj, S.c5167, S.c3324s, S.c3345, S.c3357, S.bacbLic, S.c30, S.erisa, S.abaFee, S.ch100, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s Network Participation Criteria (5/26): services "must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board," supervised staff may be a BCaBA "or a paraprofessional," and Aetna requires "A minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional "for each 10 hours of applied behavior analysis," with the supervisor "onsite with the child at least one hour a month." "If state requirements are not defined, all BCBAs, BCaBAs and paraprofessionals must meet Aetna standards." West Virginia’s mandate requires ABA "provided or supervised by a certified behavior analyst."',
        status: 'verified',
        cites: [S.aetnaNPC, S.c3316v],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA policies (CPB 0554, CPB 0648, the medical necessity guide).',
        status: 'unverified',
        cites: [S.aetnaCPB, S.aetnaGuide],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap is published. Typical intensities in the guide are 10–25 hours a week (comprehensive) and 1–20 (focused), typical rather than limits. On mandated West Virginia plans, the dollar cap ($30,000 a year for three years, then $2,000 a month) is the binding limit.',
        status: 'verified',
        cites: [S.aetnaGuide, S.c3316v],
      },
      noteSignature: {
        value: 'Not addressed in Aetna’s ABA policies.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'The participating-provider agreement and the Aetna Behavioral Health Provider Manual documentation section.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-neutral in Aetna’s guide; inpatient, residential or partial hospitalization settings use that level of care’s criteria, and the guide expects coordination with the school. West Virginia’s mandate does not require payment for services by public school personnel or replace IDEA obligations.',
        status: 'verified',
        cites: [S.aetnaGuide, S.c3316v],
      },
      billAsProvider: {
        value: 'Services must be provided directly or billed by a licensed behavior analyst (where a state licenses them), a BCBA, or a licensed psychologist where in scope, unless mandates, plan documents or contracts say otherwise. West Virginia has no behavior-analyst license, so the BCBA is the billing credential.',
        status: 'verified',
        cites: [S.aetnaGuide, S.bacbLic],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national ABA policies set no age cap.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.c3316v, S.c3324k, S.c3325Aj],
        verifyVia: 'Live benefits verification: establish fully insured vs. self-funded, employer size, and the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis itself, but medical necessity needs functional impairment on a standardized scale administered in the past 12 months. The West Virginia mandate separately requires the diagnosis to have been made at age 8 or younger.',
        status: 'verified',
        cites: [S.aetnaGuide, S.c3316v],
      },
      diagnosingProviders: {
        value: 'A DSM-5 ASD diagnosis by an appropriate provider: a licensed psychologist or psychiatrist, a physician, or another professional qualified to diagnose within scope.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale; the ABA guide requires a standardized functional measure from the past 12 months (Vineland-3 is its example).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s national policies require precertification of all ten ABA codes, not a physician referral.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.c3316v],
      },
      telehealth: {
        value: 'Aetna’s Telemedicine and Direct Patient Contact Payment Policy lists ABA codes payable by telehealth with modifier GT, 95 or FR; on commercial plans 97151, 97153, 97155, 97156 and 97157 are checked. The posted policy shows a last review of June 2021, so treat the list as perishable. Aetna’s provider manual (6/26) says Aetna Behavioral Health offers telehealth "to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out."' + WV_TELE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaTele, S.aetnaOM, S.c3357],
        verifyVia: 'Availity or the precertification line: ask which ABA codes, POS and modifier Aetna pays by telehealth on this plan.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: WV_PA_LAW + ' Aetna publishes no West Virginia-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.c3324s, S.c3316dd, S.c3325As, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (West Virginia-regulated) or self-funded (ERISA).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: WV_COB,
        status: 'plan-dependent',
        cites: [S.ch100, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Aetna and any other carrier for the member’s order of benefits, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in West Virginia?', a: 'Yes, under its national ASD policy, with West Virginia’s autism mandate layered on for fully insured group plans with more than 25 eligible employees. Self-funded employer plans follow their own documents.' },
      { q: 'Does West Virginia cap ABA benefits?', a: 'Mandated insured plans may cap ABA at $30,000 a year for three consecutive years from the start of treatment, then $2,000 a month until age 18. Coverage runs from 18 months to 18 years, and the child must have been diagnosed at 8 or younger.' },
      { q: 'Does a BCBA need a West Virginia license to treat Aetna members?', a: 'No. West Virginia does not license behavior analysts; the mandate requires BACB (or similar) certification, and Aetna requires credentialing.' },
      { q: 'How fast must Aetna pay a clean claim in West Virginia?', a: 'Under W. Va. Code § 33-45-2, within 30 days for electronic claims and 40 days for paper claims, with 10% annual interest after 40 days. Self-funded plans follow their own terms.' },
    ],
  },

  'cigna-west-virginia': {
    slug: 'cigna-west-virginia',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + West Virginia’s group-plan mandate; no PA on assessment codes; Evernorth WV addendum.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: the completed assessment and treatment plan go with the ABA Prior Authorization Form',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD under DSM-5-TR criteria; provisional or rule-out diagnoses do not count',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in West Virginia',
    state: 'WV', kind: 'commercial',
    pill: 'Payer Guide · Cigna · West Virginia',
    h1: 'Cigna / Evernorth ABA coverage in West Virginia: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in West Virginia: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for West Virginia families: national policy EN0499, no PA on assessments, West Virginia’s group-plan autism mandate (ages 18 months to 18, diagnosis by 8, $30,000 cap), no state license, and what intake should verify.',
    intro: [
      'For an intake team in West Virginia, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, West Virginia’s autism mandate for fully insured group plans, and the plan’s funding type. Many Cigna members are on self-funded employer plans, so check funding first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'State mandate', value: 'W. Va. Code §§ 33-16-3v, 33-24-7k, 33-25A-8j (HB 2693, 2011; HB 4260, 2012); PEIA § 5-16-7' },
      { label: 'Mandate age', value: '18 months to 18 years; ASD diagnosed at age 8 or younger' },
      { label: 'Mandate caps', value: 'ABA may be capped at $30,000/yr for 3 years from start, then $2,000/month to age 18' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; small employers (25 or fewer eligible employees)' },
      { label: 'Licensure', value: 'None: WV does not license behavior analysts; the mandate requires BACB (or similar) certification' },
      { label: 'Fee schedule', value: 'Not public — Exhibit A of your Evernorth Provider Agreement; Provider Services 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in West Virginia',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). Per the autism resource guide, prior authorization is no longer required for assessment codes 97151, 97152 and 0362T with an autism diagnosis, when the provider is independently licensed or a BCBA. Treatment needs the completed assessment and treatment plan on the ABA Prior Authorization Form. EN0499 does not mention West Virginia, so the national criteria apply. Evernorth’s Administrative Guidelines carry a West Virginia Regulatory Addendum for contracted providers, which binds Cigna to West Virginia claims law "including but not limited to, W. Va. Code § 33-45-2" and requires 20 business days’ notice of contract amendments.',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin],
      },
      {
        h2: 'The West Virginia mandate: what it guarantees',
        body: [WV_MANDATE_BODY],
        cites: [S.c3316v, S.c3324k, S.c3325Aj, S.c5167, S.c516B, S.chipAut],
      },
      {
        h2: 'Credentialing, licensure and out-of-state BCBAs',
        body: [WV_LICENSURE_BODY],
        cites: [S.bacbLic, S.c30, S.aba519, S.tele519, S.c3357, S.abaFee],
      },
      {
        h2: 'Claims operations in West Virginia',
        body: [
          WV_PROMPT_PAY + ' Evernorth’s ABA billing rules: electronic claims use payer ID 62308; on a CMS-1500 the rendering provider prints their name in box 31 and only a BCBA or other licensed provider goes in box 33; your fee schedule and the list of reimbursable autism services are in "Exhibit A in your Provider Agreement." Virtual services carry modifier 95, which "will not change the reimbursement." For a public benchmark, West Virginia Medicaid pays 97153 at $9.90 per 15 minutes.',
        ],
        cites: [S.c3345, S.cignaARG, S.ebhAdmin, S.abaFee],
      },
    ],
    collect: [
      { title: 'Plan funding type and employer size', desc: 'Fully insured group (mandate applies) vs. self-funded ERISA or a small employer of 25 or fewer (exempt).' },
      { title: 'Age at diagnosis', desc: 'The mandate requires an ASD diagnosis at age 8 or younger.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and license type, and the date of the most recent diagnosis.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Physician or psychologist order', desc: 'Required by the West Virginia mandate on insured group plans.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.c3316v, S.c3324k, S.c3325Aj, S.c5167, S.c3324s, S.c3345, S.c3357, S.bacbLic, S.c30, S.erisa, S.abaFee, S.ch100, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'Direct plus indirect case supervision runs at one to two hours per ten hours of direct treatment; at 10 hours a week or less, at least one to two hours a week. Supervision is by a BCBA, a Licensed Behavior Analyst, or an independently licensed clinician with documented ABA training. West Virginia’s mandate requires ABA "provided or supervised by a certified behavior analyst."',
        status: 'verified',
        cites: [S.en0499, S.c3316v],
      },
      concurrentBilling: {
        value: '"Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155" during direct supervision, when the BCBA or QHP and the technician are both with the patient at the same time.',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap is published. All ABA codes bill in 15-minute units and only as 97151–97158, 0362T and 0373T. On mandated West Virginia plans, the dollar cap ($30,000 a year for three years, then $2,000 a month) is the binding limit.',
        status: 'verified',
        cites: [S.cignaARG, S.c3316v],
      },
      noteSignature: {
        value: 'Each service needs its own record with start and end date and time, location, a description of the intervention, who was present, and the name, credential and signature of the rendering provider.',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'Services "primarily educational or vocational in nature" are not covered; goals and data are reported per setting. The West Virginia mandate does not require payment for services by public school personnel.',
        status: 'verified',
        cites: [S.en0499, S.c3316v],
      },
      billAsProvider: {
        value: 'Evernorth bills non-credentialed staff under the supervising provider; only a BCBA or other licensed provider goes in box 33, and 97152, 97153 and 97154 may be provided by a BCaBA or technician but billed only by a BCBA-D, BCBA or licensed mental health provider. Payer ID 62308.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 says access to focused intervention "should not be restricted by age."' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.c3316v, S.c3324k, S.c3325Aj],
        verifyVia: 'Live benefits verification, or the Evernorth Autism Care Coordinator team at 877.279.7603: establish funding type, employer size and age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but provisional or rule-out diagnoses don’t count, and the clocks run on data: standardized instrument and baseline data within 60 days before treatment. The West Virginia mandate separately requires diagnosis at age 8 or younger.',
        status: 'verified',
        cites: [S.en0499, S.c3316v],
      },
      diagnosingProviders: {
        value: 'A healthcare professional licensed to practice independently whose board considers diagnosis within scope, applying DSM-5-TR criteria.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated, but it must be reliable, valid and standardized, and the current edition (EN0499’s example: Vineland-3, not Vineland-II).',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral; assessments need no PA with an autism diagnosis, and treatment needs the ABA PA form.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.c3316v],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" per the autism resource guide, billed with modifier 95.' + WV_TELE_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.ebhAdmin, S.c3357],
      },
      authTurnaround: {
        value: WV_PA_LAW + ' Cigna/Evernorth publishes no West Virginia-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.c3324s, S.c3316dd, S.c3325As, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (West Virginia-regulated) or self-funded (ERISA).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: WV_COB,
        status: 'plan-dependent',
        cites: [S.ch100, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Cigna/Evernorth and any other carrier for the member’s order of benefits.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in West Virginia?', a: 'Yes, under national policy EN0499 for ASD, with West Virginia’s autism mandate layered on for fully insured group plans. Self-funded employer plans follow their own documents.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in West Virginia?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'Can a BCBA and RBT both bill Cigna for the same time?', a: 'Only for 97153, 97154 and 97155 during direct supervision, with both present with the patient at the same time.' },
      { q: 'What does Cigna pay for ABA in West Virginia?', a: 'Cigna publishes no rates; Evernorth says your fee schedule is Exhibit A of your Provider Agreement (Provider Services 800.926.2273). West Virginia Medicaid’s 97153 rate ($9.90 per 15 minutes) is the only public benchmark.' },
    ],
  },

  'unitedhealthcare-west-virginia': {
    slug: 'unitedhealthcare-west-virginia',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + West Virginia’s group-plan mandate; WV not in Optum’s ABA state-mandate supplement.',
    assessmentPA: {
      value: 'Required: the ABA Supplemental Clinical Criteria require prior authorization for ABA "unless otherwise specified or mandated by contract or law"',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required; the review interval is set per authorization, with use below 80% of authorized hours triggering review',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express support: ask what review interval will be set on this member’s ABA authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5 ASD with severity level, confirmed by the diagnosing clinician with at least one clinically validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in West Virginia',
    state: 'WV', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · West Virginia',
    h1: 'UnitedHealthcare / Optum ABA coverage in West Virginia: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in West Virginia: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for West Virginia families: Optum’s ABA criteria, three telehealth codes, West Virginia’s group-plan autism mandate (ages 18 months to 18, diagnosis by 8, $30,000 cap), no state license, and what intake should verify.',
    intro: [
      'For an intake team in West Virginia, a UnitedHealthcare card means three layers: Optum Behavioral Health’s national ABA criteria, West Virginia’s autism mandate for fully insured group plans, and the plan’s funding type. UnitedHealthcare is not one of West Virginia’s four Medicaid MCOs, so a UHC card here is commercial (or Medicare).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'W. Va. Code §§ 33-16-3v, 33-24-7k, 33-25A-8j (HB 2693, 2011; HB 4260, 2012); PEIA § 5-16-7' },
      { label: 'Mandate age', value: '18 months to 18 years; ASD diagnosed at age 8 or younger' },
      { label: 'Mandate caps', value: 'ABA may be capped at $30,000/yr for 3 years from start, then $2,000/month to age 18' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; small employers (25 or fewer eligible employees)' },
      { label: 'Licensure', value: 'None: WV does not license behavior analysts; the mandate requires BACB (or similar) certification' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential (HM/HN/HO/HP)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in West Virginia',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026): prior authorization for ABA, continued-service review that looks hard at use below 80% of authorized hours, and 1–2 hours of direct case supervision for every 10 hours of direct treatment. Optum’s ABA State Mandates supplement (July 2026) lists states such as Arizona, California, Connecticut, Florida, Kentucky, Maryland, New Jersey, New York, Ohio, Pennsylvania and Virginia; West Virginia is not among them, so no West Virginia-specific criteria modify the commercial policy. Optum’s National Network Manual does carry West Virginia Regulatory Requirements for contracted providers. BMS lists the four Medicaid MCOs, and UnitedHealthcare is not one.',
        ],
        cites: [S.optumSCC, S.optumSM, S.optumNNM, S.mht],
      },
      {
        h2: 'The West Virginia mandate: what it guarantees',
        body: [WV_MANDATE_BODY],
        cites: [S.c3316v, S.c3324k, S.c3325Aj, S.c5167, S.c516B, S.chipAut],
      },
      {
        h2: 'Credentialing, licensure and out-of-state BCBAs',
        body: [WV_LICENSURE_BODY],
        cites: [S.bacbLic, S.c30, S.aba519, S.tele519, S.c3357, S.abaFee],
      },
      {
        h2: 'Claims operations in West Virginia',
        body: [
          WV_PROMPT_PAY + ' Optum’s National Network Manual defines the “Fee Maximum” as the most a participating provider may be paid for a service, and says “Reimbursement to clinicians is based upon licensure rather than degree.” Its commercial ABA Reimbursement Policy (updated 06/2026) puts the credential on every line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA, HP for a doctoral-level provider; indirect services have no separate code. For a public benchmark, West Virginia Medicaid pays 97153 at $9.90 per 15 minutes.',
        ],
        cites: [S.c3345, S.optumNNM, S.optumReimb, S.abaFee],
      },
    ],
    collect: [
      { title: 'Plan funding type and employer size', desc: 'Fully insured group (mandate applies) vs. self-funded ERISA or a small employer of 25 or fewer (exempt).' },
      { title: 'Age at diagnosis', desc: 'The mandate requires an ASD diagnosis at age 8 or younger.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5 ASD and severity level, confirmed with a validated tool (ADI-R, ADOS-2 and others).' },
      { title: 'Physician or psychologist order', desc: 'Required by the West Virginia mandate on insured group plans.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumReimb, S.optumNNM, S.mht, S.c3316v, S.c3324k, S.c3325Aj, S.c5167, S.c3324s, S.c3345, S.c3357, S.bacbLic, S.c30, S.erisa, S.abaFee, S.ch100, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'Consistent with CASP standards, direct case supervision of 1–2 hours for every 10 hours of direct treatment. Optum does not recommend parents serving as their own child’s RBT. West Virginia’s mandate requires ABA "provided or supervised by a certified behavior analyst."',
        status: 'verified',
        cites: [S.optumSCC, S.c3316v],
      },
      concurrentBilling: {
        value: 'Not addressed. The SCC describe direct case supervision during treatment but do not state the billing consequence.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual and your participating-provider agreement, or a written coding determination from Optum.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap; hours must be justified by documented need, and use below 80% of authorized hours must be explained at review. On mandated West Virginia plans, the dollar cap ($30,000 a year for three years, then $2,000 a month) is the binding limit.',
        status: 'verified',
        cites: [S.optumSCC, S.c3316v],
      },
      noteSignature: {
        value: 'Not addressed in the SCC.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual documentation standards and your agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'ABA is provided at the least restrictive, most clinically appropriate level; services that are not ABA, "such as 1:1 aid delivered simultaneously during classroom instruction," are not covered.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      billAsProvider: {
        value: 'Each line carries a credential modifier: HM (RBT), HN (BCaBA), HO (master’s-level BCBA or licensed clinician), HP (doctoral level). The policy notes state requirements "may supplement, modify or supersede" it.',
        status: 'verified',
        cites: [S.optumReimb],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion; the member’s benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.c3316v, S.c3324k, S.c3325Aj],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish funding type, employer size and age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis in the SCC; it must be confirmed with severity level using validated tools. The West Virginia mandate separately requires diagnosis at age 8 or younger.',
        status: 'verified',
        cites: [S.optumSCC, S.c3316v],
      },
      diagnosingProviders: {
        value: 'The SCC require the diagnosis and severity level to be confirmed and documented "by the diagnosing clinician"; they do not name provider types beyond that.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool from a non-exhaustive list: first-level screens (M-CHAT and others), second-level screens (CARS/CARS-2, RITA-T, STAT), and formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral in the SCC; prior authorization is required.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.c3316v],
      },
      telehealth: {
        value: 'Optum’s commercial telehealth guide: "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157," billed with POS 02 or POS 10. The SCC add that telehealth options are "not intended to supplant" in-person service.' + WV_TELE_TAIL,
        status: 'verified',
        cites: [S.optumTele, S.optumSCC, S.c3357],
      },
      authTurnaround: {
        value: WV_PA_LAW + ' UnitedHealthcare/Optum publishes no West Virginia-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.c3324s, S.c3316dd, S.c3325As, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (West Virginia-regulated) or self-funded (ERISA).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: WV_COB,
        status: 'plan-dependent',
        cites: [S.ch100, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask UnitedHealthcare and any other carrier for the member’s order of benefits.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in West Virginia?', a: 'Yes, under Optum’s national ABA criteria for ASD, with West Virginia’s autism mandate layered on for fully insured group plans. Self-funded employer plans follow their own documents.' },
      { q: 'Does Optum have West Virginia-specific ABA criteria?', a: 'No. West Virginia is not in Optum’s ABA State Mandates supplement, so the national criteria apply.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in West Virginia?', a: 'Optum’s commercial guide allows only 97155, 97156 and 97157 by telehealth, billed POS 02 or 10; the 97151 assessment and 97153 are not on the list.' },
      { q: 'Is UnitedHealthcare a West Virginia Medicaid plan?', a: 'No. The Mountain Health Trust MCOs are Aetna Better Health of West Virginia, The Health Plan, Highmark Health Options and Wellpoint.' },
    ],
  },

  'highmark-bcbs-west-virginia': {
    slug: 'highmark-bcbs-west-virginia',
    family: 'bcbs',
    cardDesc: 'West Virginia’s Blue: every ABA code on Highmark’s PA list since March 1, 2026, reviewed by Highmark Behavioral Health; 365-day filing.',
    assessmentPA: {
      value: 'Yes: 97151, 97152 and 0362T are on Highmark’s List of Procedures Requiring Authorization (effective 10/01/2026, "For PA, WV, DE & NY Members"), UM program Highmark Behavioral Health; requirements "vary by member plan"',
      status: 'verified',
      cites: [S.hmPAL, S.hmNews],
    },
    treatmentPA: {
      value: 'Yes: 97153–97158 and 0373T are on the same list; outpatient ABA requires prior authorization for most Highmark products, and routine behavioral health decisions come within two business days',
      status: 'verified',
      cites: [S.hmPAL, S.hmPM],
    },
    dxRequired: {
      value: 'Yes for the mandate (autism is the covered condition on insured group plans); Highmark’s West Virginia ABA medical policy could not be retrieved this run',
      status: 'plan-dependent',
      cites: [S.c3316v, S.hmPAL],
      verifyVia: 'Highmark Behavioral Health, 800-258-9808, or Highmark’s West Virginia medical policy for autism spectrum disorders (V-37 series) via the Availity provider portal.',
      blocker: 'document',
    },
    payer: 'Highmark Blue Cross Blue Shield West Virginia',
    state: 'WV', kind: 'commercial',
    pill: 'Payer Guide · Highmark BCBS · West Virginia',
    h1: 'Highmark BCBS West Virginia ABA coverage: the intake guide.',
    metaTitle: 'Highmark BCBS West Virginia ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Highmark Blue Cross Blue Shield West Virginia covers ABA: all ABA codes on the prior-authorization list since March 1, 2026, Highmark Behavioral Health review, 365-day filing, West Virginia’s group-plan autism mandate, and credentialing without a state license.',
    intro: [
      'Highmark West Virginia Inc., doing business as Highmark Blue Cross Blue Shield, "serves the entire state of West Virginia" and runs on the multi-state Highmark Provider Manual shared with Pennsylvania, Delaware and New York. Since March 1, 2026, every ABA code has been on Highmark’s prior-authorization list, reviewed in-house by Highmark Behavioral Health.',
      'Under that sits West Virginia’s autism mandate for fully insured group plans. Establish funding type and employer size on every benefits check: self-funded employer plans administered by Highmark answer to their own plan documents and ERISA, and small employers are exempt from the mandate. Highmark Health Options, Highmark’s Medicaid MCO, has its own guide.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, on fully insured group plans under the WV mandate; self-funded plans per plan document' },
      { label: 'Prior auth', value: 'All ABA codes (97151–97158, 0362T, 0373T), Highmark Behavioral Health, via Availity' },
      { label: 'State mandate', value: 'W. Va. Code §§ 33-16-3v, 33-24-7k, 33-25A-8j (HB 2693, 2011; HB 4260, 2012); PEIA § 5-16-7' },
      { label: 'Mandate age', value: '18 months to 18 years; ASD diagnosed at age 8 or younger' },
      { label: 'Mandate caps', value: 'ABA may be capped at $30,000/yr for 3 years from start, then $2,000/month to age 18' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; small employers (25 or fewer eligible employees)' },
      { label: 'Licensure', value: 'None: WV does not license behavior analysts; the mandate requires BACB (or similar) certification' },
      { label: 'Fee schedule', value: 'Not public — contracted rates' },
    ],
    sections: [
      {
        h2: 'Prior authorization since March 1, 2026',
        body: [
          'Highmark announced on November 24, 2025 that "Effective March 1, 2026, 19 behavioral health codes will be added to the prior authorization list," including applied behavior analysis (97151 through 97158 among them). The current List of Procedures/DME Requiring Authorization (effective 10/01/2026), which applies "For PA, WV, DE & NY Members," lists 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T under the UM program "Highmark Behavioral Health," with the caveat that "Some authorization requirements vary by member plan." The provider manual names "Applied Behavioral Analysis (ABA) for Autism" among the outpatient services that require prior authorization for most Highmark products, notes the March 1 requirements "do not currently apply to the Federal Employee Program (FEP) and Medicare," and says Highmark Behavioral Health renders a routine decision "within two business days from the receipt of the request." Peer-to-peer requests go to 866-634-6468.',
        ],
        cites: [S.hmNews, S.hmPAL, S.hmPM],
      },
      {
        h2: 'The West Virginia mandate: what it guarantees',
        body: [WV_MANDATE_BODY],
        cites: [S.c3316v, S.c3324k, S.c3325Aj, S.c5167, S.c516B, S.chipAut],
      },
      {
        h2: 'Credentialing, licensure and out-of-state BCBAs',
        body: [WV_LICENSURE_BODY],
        cites: [S.bacbLic, S.c30, S.aba519, S.tele519, S.c3357, S.abaFee],
      },
      {
        h2: 'Claims operations in West Virginia',
        body: [
          'Unless your contract sets a different limit, "claims must be received within 365 days of the last date of service in Delaware, Pennsylvania, and West Virginia." When Highmark is secondary, the same limit runs from the primary payer’s finalized date, with the EOB attached, and corrected claims must arrive within 15 months (455 days) of the original claim’s finalization (effective September 1, 2026). ' + WV_PROMPT_PAY,
        ],
        cites: [S.hmPM, S.c3345],
      },
    ],
    collect: [
      { title: 'Plan funding type and employer size', desc: 'Fully insured group (mandate applies) vs. self-funded ERISA or a small employer of 25 or fewer (exempt).' },
      { title: 'Product', desc: 'FEP and Medicare products are outside the March 2026 ABA authorization rule; check the member’s plan in Availity.' },
      { title: 'Age at diagnosis', desc: 'The mandate requires an ASD diagnosis at age 8 or younger, and covers to age 18.' },
      { title: 'Physician or psychologist order + BCBA treatment plan', desc: 'Required by the West Virginia mandate on insured group plans.' },
      { title: 'Other coverage', desc: 'Second parent’s plan, Medicaid, TRICARE or CHAMPVA.' },
    ],
    sources: [S.hmPAL, S.hmNews, S.hmPM, S.c3316v, S.c3324k, S.c3325Aj, S.c5167, S.c3324s, S.c3345, S.c3357, S.bacbLic, S.c30, S.erisa, S.abaFee, S.ch100, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'Highmark’s West Virginia ABA medical policy, where supervision rules would sit, was not retrievable this run. The West Virginia mandate requires ABA "provided or supervised by a certified behavior analyst."',
        status: 'unverified',
        cites: [S.c3316v],
        verifyVia: 'Highmark’s West Virginia autism/ABA medical policy (V-37 series) via Availity, or Highmark Behavioral Health, 800-258-9808.',
        blocker: 'document',
      },
      concurrentBilling: {
        value: 'Not found in the Highmark sources read.',
        status: 'unverified',
        cites: [S.hmPM],
        verifyVia: 'Highmark’s ABA medical/reimbursement policy via Availity, or Provider Services.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Highmark publishes no ABA hour cap in the sources read; authorized units are set per request. On mandated West Virginia plans, the dollar cap ($30,000 a year for three years, then $2,000 a month) is the binding statutory limit.',
        status: 'plan-dependent',
        cites: [S.hmPAL, S.c3316v],
        verifyVia: 'Highmark Behavioral Health, 800-258-9808, and the member’s benefit summary.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not found in the Highmark sources read.',
        status: 'unverified',
        cites: [S.hmPM],
        verifyVia: 'Highmark Provider Manual medical-records section (Availity) or Provider Services.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Not found in the Highmark sources read for West Virginia. The mandate does not require payment for services by public school personnel or replace IDEA obligations.',
        status: 'unverified',
        cites: [S.c3316v, S.hmPM],
        verifyVia: 'Highmark’s West Virginia ABA medical policy via Availity.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'Not found in the Highmark sources read; West Virginia has no behavior-analyst license, so ask how Highmark credentials BCBAs and bills RBT services.',
        status: 'unverified',
        cites: [S.hmPM, S.bacbLic],
        verifyVia: 'Highmark Provider Services or credentialing: ask whose NPI goes on RBT-delivered lines.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Highmark’s West Virginia ABA policy was not retrievable.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.c3316v, S.c3324k, S.c3325Aj],
        verifyVia: 'Live benefits verification in Availity: establish funding type, employer size and the plan’s age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not stated in the Highmark sources read. The West Virginia mandate requires the diagnosis at age 8 or younger.',
        status: 'unverified',
        cites: [S.c3316v],
        verifyVia: 'Highmark Behavioral Health, 800-258-9808.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'Not stated in the Highmark sources read. The mandate requires treatment ordered or prescribed by a licensed physician or licensed psychologist.',
        status: 'unverified',
        cites: [S.c3316v],
        verifyVia: 'Highmark Behavioral Health, 800-258-9808.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'Not stated in the Highmark sources read.',
        status: 'unverified',
        cites: [S.hmPM],
        verifyVia: 'Highmark Behavioral Health, 800-258-9808, or the West Virginia ABA medical policy.',
        blocker: 'document',
      },
      referral: {
        value: 'Highmark requires prior authorization, not a referral, for ABA.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.hmPAL, S.c3316v],
      },
      telehealth: {
        value: 'Highmark lets participating behavioral health providers deliver "virtual" visits when the service falls within the provider’s scope and follows Highmark’s service and security guidelines; it publishes no ABA telehealth code list in the sources read.' + WV_TELE_TAIL,
        status: 'plan-dependent',
        cites: [S.hmPM, S.c3357],
        verifyVia: 'Highmark Provider Manual Chapter 2, Unit 5 (Telemedicine Services) via Availity, or Highmark Behavioral Health.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Highmark Behavioral Health renders a routine decision "within two business days from the receipt of the request." ' + WV_PA_LAW,
        status: 'plan-dependent',
        cites: [S.hmPM, S.c3324s, S.c3316dd, S.c3325As, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (West Virginia-regulated) or self-funded (ERISA).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'When Highmark is secondary, claims need the primary EOB and are due within the same timely-filing window counted from the primary’s finalized date. ' + WV_COB,
        status: 'plan-dependent',
        cites: [S.hmPM, S.ch100, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Highmark and any other carrier for the member’s order of benefits.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Highmark BCBS West Virginia require prior authorization for ABA?', a: 'Yes. Since March 1, 2026, all ABA codes (97151–97158, 0362T, 0373T) are on Highmark’s prior-authorization list for West Virginia members, reviewed by Highmark Behavioral Health; requirements can vary by plan, and FEP and Medicare are excluded.' },
      { q: 'What is Highmark’s timely filing limit in West Virginia?', a: '365 days from the last date of service unless your contract says otherwise; corrected claims within 15 months of the original claim’s finalization.' },
      { q: 'Does West Virginia’s autism mandate apply to my Highmark plan?', a: 'Only if it is a fully insured group plan from an employer with more than 25 eligible employees. It covers ages 18 months to 18 when diagnosed by age 8, and lets ABA be capped at $30,000 a year for three years, then $2,000 a month.' },
    ],
  },
};

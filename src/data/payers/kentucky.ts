import type { PayerConfig, PayerSource } from './types.js';

/* Kentucky — researched October 2026 from primary sources only.
   apps.legislature.ky.gov (KRS + KAR) and chfs.ky.gov answer plain curl with a browser UA.
   Anthem left Kentucky Medicaid managed care on January 1, 2025 (DMS MCO contracts page), so
   Kentucky has FIVE Medicaid MCOs, not six; Anthem appears here only as the commercial Blue.
   molinahealthcare.com bot-walls Passport documents (HTTP 200 + ~384 KB error page); the same
   media paths load as real PDFs from blog.molinahealthcare.com, which is what was read.
   aetnabetterhealth.com 403s the Kentucky ABA notice; ch.aetnabetterhealth.com serves it. */

const S: Record<string, PayerSource> = {
  kar15005: { title: '907 KAR 15:005 — Definitions for 907 KAR Chapter 15 (approved behavioral health practitioner incl. licensed behavior analyst; registered behavior technician)', url: 'https://apps.legislature.ky.gov/law/kar/titles/907/015/005/' },
  kar15010: { title: '907 KAR 15:010 — Coverage of behavioral health services by individual practitioners, provider groups and multi-specialty groups (Section 3(3)(r) applied behavior analysis; eff. 1-3-2020)', url: 'https://apps.legislature.ky.gov/law/kar/titles/907/015/010/' },
  kar15015: { title: '907 KAR 15:015 — Reimbursement for behavioral health services by individual practitioners and groups (LBA at 60%, LABA at 52.5% of the KY Medicare fee schedule)', url: 'https://apps.legislature.ky.gov/law/kar/titles/907/015/015/' },
  kar3170: { title: '907 KAR 3:170 — Telehealth service coverage and reimbursement (eff. 6-2-2022)', url: 'https://apps.legislature.ky.gov/law/kar/titles/907/003/170/' },
  bhFee: { title: 'KY Medicaid Fee-for-Service Behavioral Health Fee Schedule — effective April 1, 2026, revised July 15, 2026 (xlsx)', url: 'https://www.chfs.ky.gov/agencies/dms/DMSFeeRateSchedules/2026%20Behavioral%20Health%20Fee%20Schedule%20REVISED%207.15.26.xlsx' },
  feesPage: { title: 'Kentucky DMS — Fee and Rate Schedules', url: 'https://www.chfs.ky.gov/agencies/dms/Pages/feesrates.aspx' },
  lbaPage: { title: 'Kentucky DMS — Licensed Behavioral Analyst, Provider Type 63 / 639 (enrollment, PA, timely filing, claims)', url: 'https://www.chfs.ky.gov/agencies/dms/provider/Pages/lba.aspx' },
  pt63: { title: 'Kentucky DMS — Applied Behavior Analyst Provider Type 63 summary (revised Dec 2020)', url: 'https://www.chfs.ky.gov/agencies/dms/DMSProviderSummaries/AppliedBehaviorAnalystPT63.pdf' },
  mcoOptions: { title: 'Kentucky DMS — Managed Care Organizations (five MCO options)', url: 'https://www.chfs.ky.gov/agencies/dms/dhpo/Pages/mco-options.aspx' },
  mcoContracts: { title: 'Kentucky DMS — MCO Contracts (Anthem no longer a Medicaid MCO effective Jan. 1, 2025)', url: 'https://www.chfs.ky.gov/agencies/dms/dhpo/Pages/mco-contracts.aspx' },
  mcoContract: { title: 'Kentucky Medicaid Managed Care Contract, Attachment C (Aetna/SKY version 5, record date 12/22/2025, term to 12/31/2026) — §§ 14.2, 16.3, 18.6, 25.10, 27.1–27.2', url: 'https://www.chfs.ky.gov/agencies/dms/dhpo/Documents/CY2026Aetna.pdf' },
  mcoPaChart: { title: 'Kentucky DMS — Managed Care Plans Prior Authorization Requirements and Billing Limits by Behavioral Health Service (revised August 2025)', url: 'https://www.chfs.ky.gov/agencies/dms/Documents/Kentucky%20Managed%20Care%20Plans%20Prior%20Authorization%20by%20Behavioral%20Health%20Service%20%28Revised%208.2025%29.pdf' },
  dmsPaLetter: { title: 'Kentucky DMS Provider Letter (April 8, 2025) — rescinds March 14, 2025 letter; HB 695 § 20 reinstates all BH prior authorization in place on Jan. 1, 2020 (eff. June 25, 2025)', url: 'https://www.chfs.ky.gov/agencies/dms/ProviderLetters/Behavioral%20Health%20Prior%20Authorization.pdf' },
  abaConcurrent: { title: 'Kentucky DMS Provider Letter (December 3, 2025) — Concurrent billing of ABA codes 97153 and 97155 (eff. Dec. 2, 2025)', url: 'https://www.chfs.ky.gov/agencies/dms/ProviderLetters/ABAConcurrentBilling.pdf' },
  krs319c010: { title: 'KRS 319C.010 — Definitions (practice of applied behavior analysis excludes diagnosis)', url: 'https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=31292' },
  krs319c020: { title: 'KRS 319C.020 — License required to practice ABA; exemptions (public school setting, family member, supervisee, other licensees, Medicaid waiver services)', url: 'https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=31293' },
  krs319c080: { title: 'KRS 319C.080 — Licensed behavior analyst / licensed assistant behavior analyst requirements (active BCBA / BCaBA)', url: 'https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=31299' },
  krs319c090: { title: 'KRS 319C.090 — Persons credentialed in other jurisdictions', url: 'https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=31300' },
  kar43100: { title: '201 KAR 43:100 — Telehealth and telepractice (Kentucky Applied Behavior Analysis Licensing Board; eff. 10-4-2022)', url: 'https://apps.legislature.ky.gov/law/kar/titles/201/043/100/' },
  kar43050: { title: '201 KAR 43:050 — Requirements for supervision (Kentucky Applied Behavior Analysis Licensing Board)', url: 'https://apps.legislature.ky.gov/law/kar/titles/201/043/050/' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Kentucky: 2010, KY Applied Behavior Analysis Licensing Board)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  krs142: { title: 'KRS 304.17A-142 — Coverage for autism spectrum disorders (plans issued or renewed on or after Jan. 1, 2019)', url: 'https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=48409' },
  krs144: { title: 'KRS 304.17A-144 — Liaison for autism spectrum disorders treatment benefits', url: 'https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=45233' },
  krs138: { title: 'KRS 304.17A-138 — Telehealth coverage and reimbursement (health benefit plans)', url: 'https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=52666' },
  krs607: { title: 'KRS 304.17A-607 — Utilization review duties and decision timeframes (eff. July 15, 2026)', url: 'https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=57342' },
  krs702: { title: 'KRS 304.17A-702 — Claims payment time frames (30 calendar days for a clean claim)', url: 'https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=29329' },
  krs730: { title: 'KRS 304.17A-730 — Interest on late clean claims (12% / 18% / 21%)', url: 'https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=29344' },
  kar18030: { title: '806 KAR 18:030 — Coordination of benefits (group contracts; birthday rule; eff. 5-31-2022)', url: 'https://apps.legislature.ky.gov/law/kar/titles/806/018/030/' },
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  // Aetna Better Health of Kentucky
  abhAba: { title: 'Aetna Better Health of Kentucky — Network Notice Aetna-2069: ABA medical necessity criteria (MCG) and ASD-diagnosis claims edit eff. 1/1/2025 (Dec. 17, 2024)', url: 'https://ch.aetnabetterhealth.com/content/dam/aetna/medicaid/kentucky/providers/pdfs/Applied%20Behavior%20Analysis%20Medical%20Necessity%20Criteria%20and%20Claims%20Edit.pdf' },
  abhPaBh: { title: 'Aetna Better Health of Kentucky — Prior Authorization Changes, Behavioral Health (May 23, 2025; eff. June 25, 2025)', url: 'https://ch.aetnabetterhealth.com/content/dam/aetna/medicaid/kentucky/providers/pdfs/Upcoming%20Changes%20to%20Behavioral%20Health%20Prior%20Authorization.pdf' },
  abhOtr: { title: 'Aetna Better Health of Kentucky — Applied Behavioral Analysis (ABA) Outpatient Treatment Request Form (KY-15-06-85)', url: 'https://ch.aetnabetterhealth.com/content/dam/aetna/medicaid/kentucky/providers/pdfs/Applied%20Behavioral%20Analysis%20(ABA)%20OTR%20Form.pdf' },
  abhPM: { title: 'Aetna Better Health of Kentucky — Provider Manual (Aetna/2350, 2026 edition)', url: 'https://ch.aetnabetterhealth.com/content/dam/aetna/medicaid/kentucky/providers/pdfs/ABHKY%20Provider%20Manual.pdf' },
  // Humana Healthy Horizons in Kentucky
  humPAL: { title: 'Humana Healthy Horizons in Kentucky — Prior Authorization and Notification List (eff. Jan. 1, 2026; rev. Feb. 16, 2026)', url: 'https://assets.humana.com/is/content/humana/KY%20MCD%20PAL%20Dpdf' },
  humBhPa: { title: 'Humana Healthy Horizons in Kentucky — Behavioral health authorization reinstatement (notice May 30, 2025; eff. July 1, 2025)', url: 'https://assets.humana.com/is/content/humana/Behavioral%20health%20authorization%20reinstatementpdf' },
  humAba: { title: 'Humana Healthy Horizons in Kentucky — Applied Behavior Analysis Reminder (June 5, 2025): ABA claims need an autism-range diagnosis code', url: 'https://assets.humana.com/is/content/humana/ABA%20Services%20Reminder%2006.05.25pdf' },
  humPM: { title: 'Humana Healthy Horizons in Kentucky — Provider Manual 2025 (the edition posted on the documents page in October 2026)', url: 'https://assets.humana.com/is/content/humana/2025_KY_Provider_Manualpdf' },
  // Passport by Molina Healthcare
  molPM: { title: 'Passport by Molina Healthcare — Medicaid Provider Manual 2026 (last updated 06/22/2026)', url: 'https://blog.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ky/medicaid/2026-MKY-ProviderManual-DMSApproved_R.ashx' },
  molEnews: { title: 'Passport by Molina Healthcare — eNews: New Prior Authorization Guidance on July 1, 2025 (May 1, 2025)', url: 'https://blog.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ky/medicaid/MHKY-New-Prior-Auth-Guidance-eNews-508.pdf' },
  molDeck: { title: 'Passport by Molina Healthcare — Behavioral Health Authorization training deck (DMS-approved, MHKY 2583)', url: 'https://blog.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ky/medicaid/BHAuthTrainingDeck-2583-DMSapproved.pdf' },
  // UnitedHealthcare Community Plan of Kentucky
  uhcKyPM: { title: 'UnitedHealthcare Community Plan of Kentucky — 2026 Care Provider Manual (PMI 05202026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/KY-Care-Provider-Manual.pdf' },
  optKyPA: { title: 'Optum — Prior Authorization Code List, UnitedHealthcare Community Plan of Kentucky (eff. July 15, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/state-prior-auth-lists/ky5034.pdf' },
  optKySCC: { title: 'Optum — Kentucky Medicaid Supplemental Clinical Criteria (BH803KY062026, eff. June 2026; no ABA section)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ky_scc/kyMedicaid-SupClin_Critr.pdf' },
  // WellCare of Kentucky
  wcPM: { title: 'WellCare of Kentucky — 2025–2026 Kentucky Medicaid Provider Manual (state approved 10/10/2025)', url: 'https://www.wellcareky.com/content/dam/centene/wellcare/ky/pdfs/provider/KY_Medicaid_Provider_Manual_2026_R.pdf' },
  wcPAL: { title: 'WellCare of Kentucky — Kentucky Medicaid Prior Authorization List, Q3 2026', url: 'https://www.wellcareky.com/content/dam/centene/wellcare/ky/pdfs/provider/KY_Caid_Prior_Authorization_List_Q3_2026_R.pdf' },
  // Commercial national policies (fetched this run)
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; Maryland is the only state exhibit)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna — Provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026) incl. Kentucky Regulatory Addendum', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates (BH803ABA STM72026; Kentucky commercial section added 11/2025, revised 12/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumNNM: { title: 'Optum National Network Manual (BH02330, 07/01/2026 edition)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  anthemPA: { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
  anthemRG: { title: 'Anthem BCBS — Commercial Applied Behavior Analysis Provider Resource Guide (multi-state incl. Kentucky, June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
};

/* ---- Shared Kentucky Medicaid facts (state rule, cited to the regulation) ---- */
const KY_MCD_SUPERVISION =
  '907 KAR 15:010, Section 3(3)(r)4 says ABA "shall be provided by" a licensed behavior analyst, a licensed assistant behavior analyst, or an approved behavioral health practitioner (or one under supervision) "with documented training in applied behavior analysis," and that "a registered behavior technician under the supervision of an appropriate practitioner" may provide "support services." No numeric supervision ratio is set. The documentation rules carry the supervision: notes by a practitioner working under supervision must be co-signed and dated by the supervising professional within 30 days, with a monthly supervisory note on the case. 907 KAR 15:005 defines the RBT by BACB training, competency assessment and exam, within six months of hire.';

const KY_MCD_NOTES =
  'Under 907 KAR 15:010, Section 6, service notes must be made within 48 hours of each visit, say whether the service was face-to-face or telehealth, state a start and end time, and be "recorded and signed by the rendering behavioral health practitioner" with the practitioner’s professional title; "initials, typed signatures, or stamped signatures shall not be accepted" (compliant electronic signatures are allowed under Section 9). Notes by a practitioner under supervision are co-signed by the supervisor within 30 days, and the plan of care is reviewed at least every six months.';

const KY_MCD_TELEHEALTH =
  '907 KAR 3:170 makes its telehealth policies "supersede any in-person requirement established within KAR Title 907" (unless a law, licensing board, professional criteria or the billing code itself requires in-person), applies them to fee-for-service and to MCO coverage alike, and defines place of service as wherever the patient is, "including … the patient’s home or office, or a clinic, school, or workplace." A service is reimbursable by telehealth when it is appropriate and safe for the technology, not prohibited by the provider’s licensing board, and delivered by an enrolled provider; reimbursement is at least 100 percent of the in-person rate (an MCO may negotiate otherwise), telehealth must be denoted "by place of service or other means," and referral rules are the same as in person. Neither DMS nor any Kentucky MCO document read publishes an ABA-specific telehealth code list or modifier. The licensing board requires a Kentucky license for anyone delivering ABA by telehealth to a client located in Kentucky (201 KAR 43:100, Section 2).';

const KY_MCD_AUTH_CONTRACT =
  'Kentucky’s MCO contract (§ 18.6) is stricter than the federal floor: a standard prior authorization is decided "no later than five (5) Days after receiving the necessary information" (contract "Day" means calendar day; "necessary information" is as defined in KRS 304.17A-607), extendable up to 14 days at the provider’s or enrollee’s request; expedited decisions within 24 hours of all necessary information; and "an untimely service authorization constitutes a Denial" that can be appealed. Federal law caps standard MCO decisions at 7 calendar days from the request for rating periods starting on or after January 1, 2026.';

const KY_MCD_COB =
  'Medicaid pays last. The MCO contract (§ 14.2) says Medicaid "shall be used as a source of payment for Covered Services only after all other sources of payment have been exhausted," and when another resource is known the plan "shall avoid payment by ‘cost avoiding’ (denying) the Claim and redirecting the provider to bill the other Third Party Resource as a primary payer" (42 CFR 433.139). So bill the commercial plan first and follow its ABA prior authorization.';

/* ---- Shared Kentucky commercial layer (same facts on every commercial guide) ---- */
const KY_MANDATE_BODY =
  'Kentucky’s autism mandate is KRS 304.17A-142. Every health benefit plan "issued or renewed on or after January 1, 2019, shall provide coverage for the diagnosis and treatment of autism spectrum disorders," and treatment expressly includes "applied behavior analysis prescribed or ordered by a licensed health or allied health professional" and habilitative or rehabilitative care "including applied behavior analysis." The 2018 amendment removed the old age bands and dollar caps: coverage "shall not be subject to any maximum annual benefit limit, including any limits on the number of visits an individual may make to an autism services provider," and cost-sharing may be no less favorable than for other medical services. For ongoing outpatient treatment the insurer may request a utilization review "not more than once every twelve (12) months" unless the insurer and the treating physician or psychologist agree to more, may ask for records showing medical necessity and improved clinical status, and may request a treatment plan with diagnosis, type, frequency, anticipated duration, goals and update frequency; goals must be "clearly defined, directly observed, and continually measured." Plans need not pay for services in an IEP, IFSP or other publicly funded program, for services by a relative who would not otherwise charge, or for "services provided by persons who are not licensed as required by law." KRS 304.17A-144 also requires each insurer to give members an autism liaison who explains the ABA benefit, the prior-authorization process and documentation, ABA claim coding, and appeal rights. The mandate reaches fully insured plans; self-funded employer plans answer to ERISA instead.';

const KY_LICENSURE_BODY =
  'Kentucky licenses behavior analysts under KRS Chapter 319C through the Kentucky Applied Behavior Analysis Licensing Board (BACB lists Kentucky licensure since 2010). No one may practice or "render services designated as applied behavior analysis" in Kentucky without a license, except people delivering ABA in a public school setting, implementing ABA for an immediate family member or as a supervisee, other licensed health professionals within their own scope, and people providing Medicaid waiver services (KRS 319C.020). A licensed behavior analyst must hold and keep an active BCBA; a licensed assistant behavior analyst an active BCaBA, supervised by a certified behavior analyst (KRS 319C.080). The practice of ABA "shall not include diagnosis" (KRS 319C.010(8)), so the autism diagnosis must come from another licensed clinician. A BCBA licensed in another state can get a Kentucky license through KRS 319C.090 (valid license elsewhere, KRS 319C.080 requirements met, no pending discipline), but cannot simply treat a Kentucky child remotely: the board’s telehealth rule says "a person providing applied behavior analytic services via telehealth to a person physically located in Kentucky while services are provided shall be required to be licensed by the board" (201 KAR 43:100). For commercial telehealth, KRS 304.17A-138 likewise lets a plan require the telehealth provider to be licensed in Kentucky or under a recognized interstate compact. On rates, commercial ABA rates are negotiated and unpublished; the public benchmark is the Kentucky Medicaid fee-for-service schedule (2026: 97153 $12.18 per 15 minutes for an RBT; 97155 $21.99 for a licensed behavior analyst).';

const KY_PROMPT_PAY =
  'Kentucky’s prompt-pay law requires an insurer to pay a clean claim, or send notice denying or contesting it, "within thirty (30) calendar days from the date that the claim is received" (KRS 304.17A-702), with interest added automatically on late clean claims at 12 percent a year for the first 30 days late, 18 percent for days 31–60, and 21 percent after that (KRS 304.17A-730). Self-funded ERISA plans are outside the state statute.';

const MANDATE_REFERRAL_TAIL =
  ' For a fully insured Kentucky plan, KRS 304.17A-142 defines covered ABA as ABA "prescribed or ordered by a licensed health or allied health professional," so keep a signed order or prescription on file; the insurer may also request a treatment plan for continuing services. Self-funded ERISA plans sit outside the statute.';

const MANDATE_AGE_TAIL =
  ' For fully insured Kentucky plans issued or renewed on or after January 1, 2019, KRS 304.17A-142 carries no age limit and bars any maximum annual benefit or visit limit on autism treatment. Self-funded ERISA plans are outside the statute, so plan funding type decides whether that binds.';

const KY_COMM_AUTH =
  'Depends on how the plan is funded. Fully insured Kentucky plans fall under KRS 304.17A-607: a utilization review decision on urgent care is due "no later than twenty-four (24) hours after obtaining all necessary information," and on non-urgent care "within five (5) days of obtaining all necessary information" (limited to face-to-face evaluation results, any required second opinion, and information the Department of Insurance designates). A missed deadline "shall be deemed to be a prior authorization for the health care services." For ongoing autism treatment, KRS 304.17A-142 limits utilization review to once every 12 months unless the insurer and the treating physician or psychologist agree otherwise. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1: pre-service decisions "not later than 15 days after receipt of the claim," with one 15-day extension.';

const KY_COMM_COB =
  'For a child on two group plans, Kentucky follows the birthday rule: when the parents are married, are not separated, or share joint custody without a decree assigning coverage, the plan of the parent "whose birthday is earlier in the year" is primary; same birthday, the plan that has covered a parent longer; a court decree naming the responsible parent controls (806 KAR 18:030). If the plans cannot agree within 30 calendar days of having everything needed, they pay in equal shares and settle afterwards. That rule binds state-regulated group plans; a self-funded plan sets its own order. If the child also has Kentucky Medicaid, the commercial plan pays first: Medicaid MCOs "cost avoid" claims when other coverage is known (42 CFR 433.139).';

export const kentuckyPayers: Record<string, PayerConfig> = {
  'kentucky-medicaid': {
    slug: 'kentucky-medicaid',
    cardDesc: 'ABA is a 907 KAR 15:010 behavioral health service; five MCOs (Anthem exited 1/1/2025), PA reinstated mid-2025, licensed behavior analysts, published FFS rates.',
    assessmentPA: {
      value: 'Fee-for-service: not published — DMS sends FFS members who need prior authorization to CareWise. Managed care (most members): DMS’s August 2025 chart shows Aetna, Humana, UnitedHealthcare and WellCare requiring PA on 97151–97158, and Passport requiring it except for 97151 and 97152',
      status: 'unverified',
      cites: [S.lbaPage, S.mcoPaChart],
      verifyVia: 'CareWise (Kentucky Medicaid FFS utilization review) or DMS behavioral health inquiries, (502) 564-6890, for an FFS member; for an MCO member, the plan on the card.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Fee-for-service: not published (CareWise handles FFS PA). Managed care: yes — HB 695 (2025) made DMS reinstate every behavioral health PA in place on January 1, 2020, effective June 25, 2025, and all five MCOs require ABA treatment authorization (Passport only after 48 units a calendar year)',
      status: 'unverified',
      cites: [S.lbaPage, S.dmsPaLetter, S.mcoPaChart],
      verifyVia: 'CareWise or DMS behavioral health inquiries, (502) 564-6890, for an FFS member; for an MCO member, the plan on the card.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Not by regulation: 907 KAR 15:010 covers ABA as a medically necessary behavioral health service without naming a diagnosis, and a diagnosis must be documented within three visits (assessments excepted). In practice the MCOs require autism: Aetna Better Health denies ABA claims without an ASD diagnosis and Humana requires an F84/F88/F89 code',
      status: 'verified',
      cites: [S.kar15010, S.abhAba, S.humAba],
    },
    payer: 'Kentucky Medicaid',
    state: 'KY', kind: 'state-medicaid',
    pill: 'Payer Guide · Kentucky Medicaid',
    h1: 'Kentucky Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Kentucky Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Kentucky Medicaid covers ABA: a 907 KAR 15:010 behavioral health service delivered through five managed care plans (Aetna Better Health, Humana Healthy Horizons, Passport by Molina, UnitedHealthcare, WellCare), prior authorization reinstated in 2025, licensed behavior analysts, and the 2026 fee-for-service rates.',
    intro: [
      'Kentucky Medicaid covers applied behavior analysis as one of the behavioral health services in 907 KAR 15:010, the regulation for independently enrolled practitioners, behavioral health provider groups and multi-specialty groups. Licensed behavior analysts enroll as their own provider type (63, or 639 for a group), and the department pays ABA from its behavioral health fee schedule. Unlike many states, the regulation itself does not limit ABA to autism or to children; the managed care plans close that gap through their medical necessity criteria and claim edits.',
      'Most members are in managed care, and the plan on the card decides authorization, criteria and payment. Kentucky has five Medicaid MCOs: Aetna Better Health of Kentucky, Humana Healthy Horizons in Kentucky, Passport by Molina Healthcare, UnitedHealthcare Community Plan, and WellCare of Kentucky. Anthem stopped being a Kentucky Medicaid MCO on January 1, 2025, so an Anthem card in Kentucky is commercial (or Medicare).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — 907 KAR 15:010, Section 3(3)(r); no age limit or diagnosis named in the regulation' },
      { label: 'Structure', value: 'Five MCOs (Aetna Better Health, Humana Healthy Horizons, Passport by Molina, UnitedHealthcare Community Plan, WellCare); FFS for members not in managed care' },
      { label: 'Prior auth', value: 'Reinstated June 25, 2025 (HB 695): required by all five MCOs (Passport after 48 units/year, not on 97151/97152); FFS via CareWise' },
      { label: 'FFS rates (per 15 min, 2026)', value: 'LBA: 97151/97155 $21.99 · 97156 $17.09 · 97157/97158 $8.65; LABA: 97151/97155 $19.25; RBT: 97152/97153/97154 $12.18' },
      { label: 'Who may deliver', value: 'Licensed behavior analyst, licensed assistant behavior analyst, or ABA-trained approved practitioner; RBTs provide support services under supervision' },
      { label: 'Licensure', value: 'Required: KRS 319C (Kentucky Applied Behavior Analysis Licensing Board)' },
      { label: '97153 + 97155 together', value: 'Allowed since Dec. 2, 2025 when the patient is present and the QHP is directing the technician (DMS letter)' },
    ],
    sections: [
      {
        h2: 'Where ABA sits: 907 KAR 15:010 and the five MCOs',
        body: [
          'The coverage rule is 907 KAR 15:010, Section 3(3)(r). ABA "shall produce socially significant improvement in human behavior" through environmental modifications, behavioral stimuli and consequences, and direct observation, measurement and functional analysis, and may include designing, implementing and modifying treatment programs for the recipient and for the people and groups around the recipient. Every service must be medically necessary, stated in and delivered under a written plan of care, and billed by the practitioner who provided it or under whose supervision it was rendered, or by the group. The plan of care must list services and frequency, measurable goals with target dates, functional abilities and limitations or a DSM diagnosis, each assigned staff member, family involvement, termination criteria and the review date. The regulation names no age limit and no diagnosis for ABA; it does require a diagnosis to be documented in the record within three visits (assessments, screenings and crisis services excepted).',
          'DMS lists five managed care plans, and members can change plans at any time, effective the first of the following month. Anthem is not one of them: "Effective Jan. 1, 2025, Anthem is no longer a Medicaid Managed Care Organization, or MCO, in Kentucky." The plans must cover the same standard Medicaid benefits, but each runs its own ABA authorization and medical necessity criteria (Aetna Better Health and Passport use MCG; UnitedHealthcare and WellCare cite InterQual), so the first intake question is which plan is on the card.',
        ],
        cites: [S.kar15010, S.mcoOptions, S.mcoContracts, S.abhAba, S.molPM, S.uhcKyPM, S.wcPM],
      },
      {
        h2: 'Prior authorization came back in 2025',
        body: [
          'Behavioral health prior authorization was suspended for years after the COVID-19 emergency. In 2025 the General Assembly ended that: House Bill 695, Section 20, directed DMS "to, within 90 days after the effective date of this Act, reinstate all prior authorization requirements for behavioral health services in the Medicaid program that were in place and required for behavioral health services on January 1, 2020," effective June 25, 2025. DMS rescinded its own narrower March 2025 plan and told each MCO to give providers 30 days’ notice of its requirements. The plans did so: Aetna Better Health from June 25, 2025, Humana and Passport from July 1, 2025.',
          'DMS’s August 2025 chart of MCO behavioral health PA rules lists ABA (97151–97158) as requiring prior authorization at Aetna, Humana, UnitedHealthcare and WellCare, and at Passport "Yes, except for 97151 and 97152," with PA "required after 48 units (12 hrs.) per member, per Calendar Year." Since then WellCare’s own Q3 2026 list has released 97157 from authorization. For fee-for-service members, DMS says those who "require prior authorization for additional services deemed medically necessary" should contact CareWise; no FFS ABA code list was found.',
        ],
        cites: [S.dmsPaLetter, S.mcoPaChart, S.abhPaBh, S.humBhPa, S.molEnews, S.wcPAL, S.lbaPage],
      },
      {
        h2: 'Fee-for-service ABA rates (2026)',
        body: [
          'The 2026 behavioral health fee schedule (effective April 1, 2026, revised July 15, 2026) prices ABA by who delivers it, per 15 minutes. 97151 and 97155: physician $27.50, APRN/psychologist/PA $23.37, licensed behavior analyst (modifier HO) $21.99, licensed assistant behavior analyst (modifier U4) $19.25. 97156: $21.35 / $18.13 / $17.09 / $14.94. 97157 and 97158: $10.81 / $9.18 / $8.65 / $7.57. 97152, 97153 and 97154 are "RBT Only" at $12.18 with modifier UC. 0362T and 0373T are not on the schedule. The schedule’s note limits these codes to a "Physician, LBA, LABA, Technician, or other qualified healthcare professional," and adds that a listed code and rate "is not an indication of coverage." The rates follow 907 KAR 15:015, which pays a licensed behavior analyst 60 percent and a licensed assistant behavior analyst 52.5 percent of the Kentucky Medicare physician fee schedule; MCOs are not bound to these rates and pay their contracted amounts.',
        ],
        cites: [S.bhFee, S.feesPage, S.kar15015],
      },
      {
        h2: 'Claims operations: filing limits, prompt pay, NPI, EVV and appeals',
        body: [
          'Fee-for-service claims go to DXC on a CMS-1500 and "must be received within 12 months of the date of service or six months from the Medicare pay date whichever is longer"; DMS applies NCCI edits. The MCO contract requires plans to allow the same filing period as FFS and to treat filing within 365 days of service as timely, to pay or deny 90 percent of clean claims within 30 days and 99 percent within 90 days, and to comply with Kentucky’s prompt-pay statute (KRS 304.17A-700 to 730); a provider can demand an in-person meeting on a clean claim unpaid for 45 days or more above $2,500. The billing provider is the practitioner "who provided the service or under whose supervision the service was rendered," or the group (907 KAR 15:010); the fee schedule puts the rendering credential on the line through the modifier (HO licensed behavior analyst, U4 licensed assistant, UC registered behavior technician). Electronic visit verification in the MCO contract covers "personal care services (PCS) and home health services," not ABA. A provider can appeal a denied MCO claim internally, then request external independent third-party review, then an administrative hearing.',
        ],
        cites: [S.lbaPage, S.mcoContract, S.kar15010, S.bhFee],
      },
    ],
    collect: [
      { title: 'Which Medicaid card', desc: 'Aetna Better Health, Humana Healthy Horizons, Passport by Molina, UnitedHealthcare Community Plan, WellCare, or fee-for-service. An Anthem card is no longer Medicaid in Kentucky.' },
      { title: 'Autism diagnosis report', desc: 'The regulation names no diagnosis, but Aetna Better Health and Humana deny ABA claims without an autism-range diagnosis code. The diagnosis must come from a clinician other than the behavior analyst.' },
      { title: 'Plan of care', desc: 'Services and frequency, measurable goals with target dates, staff assigned, family involvement and termination criteria, reviewed at least every six months (907 KAR 15:010).' },
      { title: 'Other insurance', desc: 'Commercial coverage is billed first and its ABA authorization followed; the MCOs cost-avoid claims when other coverage is known.' },
    ],
    sources: [S.kar15005, S.kar15010, S.kar15015, S.kar3170, S.bhFee, S.feesPage, S.lbaPage, S.pt63, S.mcoOptions, S.mcoContracts, S.mcoContract, S.mcoPaChart, S.dmsPaLetter, S.abaConcurrent, S.krs319c010, S.krs319c020, S.kar43100, S.bacbLic, S.cfr440, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: { value: KY_MCD_SUPERVISION, status: 'verified', cites: [S.kar15010, S.kar15005] },
      concurrentBilling: {
        value: 'Allowed for 97155 with 97153. DMS’s December 3, 2025 letter says that "effective December 2, 2025, procedure code 97155 may be billed concurrently with procedure code 97153 when the patient is present, and the qualified health professional is directing the technician who is implementing a modified treatment protocol," and treatment must still be medically necessary and in the plan of care. Separately, 907 KAR 15:010 bars paying more than one provider for a service to the same recipient during the same time period.',
        status: 'verified',
        cites: [S.abaConcurrent, S.kar15010],
      },
      dailyLimits: {
        value: 'No ABA hour or unit cap appears in 907 KAR 15:010 or on the 2026 fee schedule (which has no maximum-units column). DMS applies National Correct Coding Initiative edits to FFS claims. Passport by Molina’s 48-units-a-year threshold is a PA trigger, not a cap.',
        status: 'verified',
        cites: [S.kar15010, S.bhFee, S.lbaPage, S.mcoPaChart],
      },
      noteSignature: { value: KY_MCD_NOTES, status: 'verified', cites: [S.kar15010] },
      placeOfService: {
        value: '907 KAR 15:010 sets no setting restriction for ABA, and 907 KAR 3:170 defines telehealth place of service as wherever the patient is, including home, clinic or school. Kentucky’s licensure law exempts people "providing applied behavior analysis services to an individual in a public school setting" (KRS 319C.020), and the regulation excludes services to residents of nursing facilities and ICFs/IID.',
        status: 'verified',
        cites: [S.kar15010, S.kar3170, S.krs319c020],
      },
      billAsProvider: {
        value: 'Billed by the individual approved practitioner "who provided the service or under whose supervision the service was rendered," or by the behavioral health provider group or multi-specialty group on whose behalf it was rendered; DMS will not pay a service billed by an entity that is not a billing provider (907 KAR 15:015). The fee schedule identifies the rendering level by modifier: HO for a licensed behavior analyst, U4 (required) for a licensed assistant behavior analyst, UC (required) for an RBT on 97152–97154.',
        status: 'verified',
        cites: [S.kar15010, S.kar15015, S.bhFee],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'None in the regulation: 907 KAR 15:010’s ABA paragraph has no age limit (unlike collateral therapy, which stops at 21). Members under 21 are also protected by EPSDT, which the MCO contract requires plans to deliver.',
        status: 'verified',
        cites: [S.kar15010, S.mcoContract],
      },
      dxRecency: {
        value: 'No diagnosis recency rule is published by DMS. The regulation requires the diagnosis to be documented within three visits and the plan of care reviewed at least every six months.',
        status: 'unverified',
        cites: [S.kar15010],
        verifyVia: 'The member’s MCO utilization management line (or CareWise for FFS): ask how recent the diagnostic evaluation must be for an initial ABA request.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Not named by DMS for ABA. Kentucky law excludes diagnosis from the practice of ABA (KRS 319C.010(8)), so a physician, psychologist or other licensed clinician whose scope includes diagnosis must make it.',
        status: 'unverified',
        cites: [S.kar15010, S.krs319c010],
        verifyVia: 'The member’s MCO utilization management line, or CareWise for FFS.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'No diagnostic instrument is named in any DMS source read.',
        status: 'unverified',
        cites: [S.kar15010],
        verifyVia: 'The member’s MCO utilization management line: ask which instruments it expects with the initial ABA request.',
        blocker: 'per-case',
      },
      referral: {
        value: 'No physician order or referral for ABA is required by 907 KAR 15:010; the requirement is a written plan of care. Telehealth services carry "the same referral requirements as an in-person service" (907 KAR 3:170).',
        status: 'verified',
        cites: [S.kar15010, S.kar3170],
      },
      telehealth: { value: KY_MCD_TELEHEALTH, status: 'verified', cites: [S.kar3170, S.kar43100, S.kar15010] },
      authTurnaround: {
        value: 'FFS: the federal floor applies — since January 1, 2026 the state agency decides a standard request "in no case later than 7 calendar days after receiving the request" (extendable 14 days) and an expedited one within 72 hours. MCOs: ' + KY_MCD_AUTH_CONTRACT,
        status: 'verified',
        cites: [S.cfr440, S.mcoContract, S.cfr438],
      },
      coordinationOfBenefits: { value: KY_MCD_COB, status: 'verified', cites: [S.mcoContract, S.cfr433, S.kar15010] },
    },
    faq: [
      { q: 'Does Kentucky Medicaid cover ABA therapy?', a: 'Yes. ABA is a covered behavioral health service under 907 KAR 15:010, delivered by licensed behavior analysts, licensed assistant behavior analysts and trained practitioners, with RBTs providing support services. Most members get it through one of five MCOs.' },
      { q: 'Is Anthem still a Kentucky Medicaid plan?', a: 'No. DMS says Anthem stopped being a Kentucky Medicaid MCO on January 1, 2025. The five plans are Aetna Better Health of Kentucky, Humana Healthy Horizons in Kentucky, Passport by Molina Healthcare, UnitedHealthcare Community Plan and WellCare of Kentucky.' },
      { q: 'What does Kentucky Medicaid pay for ABA?', a: 'The 2026 FFS schedule pays per 15 minutes: 97153 (RBT) $12.18; 97151 and 97155 $21.99 for a licensed behavior analyst and $19.25 for a licensed assistant; 97156 $17.09 for a licensed behavior analyst. MCOs pay contracted rates.' },
      { q: 'Can 97153 and 97155 be billed at the same time?', a: 'Yes, since December 2, 2025, when the patient is present and the qualified professional is directing the technician through a modified protocol (DMS letter of December 3, 2025).' },
      { q: 'Can a BCBA licensed in another state treat a Kentucky Medicaid child by telehealth?', a: 'Not without a Kentucky license. The Applied Behavior Analysis Licensing Board requires anyone delivering ABA by telehealth to a client located in Kentucky to be licensed by the board (201 KAR 43:100), and KRS 319C.090 provides the route for someone licensed elsewhere. Medicaid telehealth also requires an enrolled provider.' },
      { q: 'What is the timely filing limit for Kentucky Medicaid ABA claims?', a: 'FFS: 12 months from the date of service (or six months from the Medicare payment, if longer). The MCO contract treats claims within 365 days of service as timely, and each plan’s manual states the same 12-month/365-day limit.' },
    ],
  },

  'aetna-better-health-kentucky': {
    slug: 'aetna-better-health-kentucky',
    family: 'aetna',
    cardDesc: 'Kentucky Medicaid MCO (also runs SKY foster care): PA on all ABA codes since 6/25/2025, MCG criteria, ASD diagnosis required on claims.',
    assessmentPA: {
      value: 'Yes. Aetna Better Health’s behavioral health PA notice lists 97151 and 97152 with the treatment codes: "Prior authorization is required for dates of service 6/25/2025 and forward," with clinical record, assessment confirming autism and treatment plan',
      status: 'verified',
      cites: [S.abhPaBh, S.mcoPaChart],
    },
    treatmentPA: {
      value: 'Yes, for 97153–97158 from 6/25/2025. Use the ABA Outpatient Treatment Request form (fax 1-855-301-1564; SKY 1-833-689-1424) or Availity; requests must arrive within 2 business days of the start date and may cover at most 6 months',
      status: 'verified',
      cites: [S.abhPaBh, S.abhOtr],
    },
    dxRequired: {
      value: 'Yes. Under MCG’s ABA guideline, "ABA is appropriate in the treatment of Autism Spectrum Disorder"; since January 1, 2025 "Claims submitted for ABA services without the required ASD diagnosis will be denied"',
      status: 'verified',
      cites: [S.abhAba],
    },
    payer: 'Aetna Better Health of Kentucky',
    state: 'KY', kind: 'medicaid-mco', parent: 'Kentucky Medicaid (managed care)',
    pill: 'Payer Guide · Aetna Better Health · Kentucky',
    h1: 'Aetna Better Health of Kentucky ABA coverage: the intake guide.',
    metaTitle: 'Aetna Better Health of Kentucky ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Aetna Better Health of Kentucky covers ABA for Kentucky Medicaid and SKY members: prior authorization on all ABA codes since June 2025, MCG criteria, the ASD-diagnosis claim edit, the OTR form, filing limits and appeals.',
    intro: [
      'Aetna Better Health of Kentucky is one of the five Kentucky Medicaid MCOs and the plan that runs SKY (Supporting Kentucky Youth) for children in foster care. Its ABA rules are spread across three documents: a December 2024 notice that adopted MCG criteria and an autism-diagnosis claim edit, a May 2025 notice that reinstated prior authorization for every ABA code, and the 2026 provider manual for claims and appeals.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for autism spectrum disorder (MCG); ABA for non-ASD indications is treated as experimental' },
      { label: 'Prior auth', value: 'All codes 97151–97158 from 6/25/2025, adults and children, incl. SKY members' },
      { label: 'Submit via', value: 'Availity or the ABA OTR form (fax 1-855-301-1564; SKY 1-833-689-1424); max 6 months per request' },
      { label: 'Criteria', value: 'MCG Behavioral Health Care Guideline for ABA (licensed)' },
      { label: 'Timely filing', value: '365 calendar days from the date of service' },
      { label: 'Licensure', value: 'Kentucky license required (KRS 319C)' },
    ],
    sections: [
      {
        h2: 'Criteria and the autism-diagnosis claim edit',
        body: [
          'Aetna Better Health of Kentucky "adopted Milliman Clinical Guidelines (MCG) as the primary criteria for medical necessity for all services except for substance use treatment services." Its December 17, 2024 network notice explains the consequence for ABA: under the MCG Behavioral Healthcare Guideline, ABA is appropriate for autism spectrum disorder, and "ABA is considered experimental, investigational, or unproven for all other non-ASD indications." From January 1, 2025, ABA claims must carry the ASD diagnosis; claims without it "will be denied," with the standard appeal process available. MCG is licensed criteria the plan does not publish.',
        ],
        cites: [S.abhAba, S.abhPM],
      },
      {
        h2: 'Prior authorization since June 25, 2025',
        body: [
          'After House Bill 695, Aetna Better Health resumed behavioral health prior authorization "for all members – adults, adolescents, and children," including SKY members, for new and ongoing treatment. Its table lists ABA codes 97151 through 97158 with "Clinical Record, copy of assessment(s) confirming Autism diagnosis and Treatment Plan" required, for dates of service from June 25, 2025. The ABA Outpatient Treatment Request form asks for diagnosis, setting, weekly intensity, units by code, a functional impairment rating, clinical data, progress and discharge planning, and says requests "MUST be received within (2) buisness days of the requested start date" and "The maximum timeframe that may be requested is (6) months." The treatment plan must be attached. Out-of-network providers need authorization for everything except emergent or urgent care.',
        ],
        cites: [S.abhPaBh, S.abhOtr],
      },
      {
        h2: 'Claims and appeals',
        body: [
          'The 2026 manual sets timely filing at "365 calendar days from the date of service" for professional claims, 365 days from the primary payer’s remittance for coordination-of-benefits claims, and 24 months from the first remittance for corrections. Claims need an active Kentucky Medicaid ID and an NPI and taxonomy matching the state provider file. Provider appeals of a denied claim go to KY Appeals & Grievances and "We must receive your appeal within one (1) year of the incident, remit date or date of notice"; Aetna answers in writing within 30 calendar days. An appeal on a member’s behalf (with written consent) follows the member process: file within 60 days of the adverse benefit determination.',
        ],
        cites: [S.abhPM],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Aetna Better Health of Kentucky (and whether the child is a SKY member, which uses separate fax lines).' },
      { title: 'Autism assessment', desc: 'A copy of the assessment confirming the ASD diagnosis goes with the PA; claims without the ASD diagnosis are denied.' },
      { title: 'Treatment plan + OTR form', desc: 'Units by code, weekly intensity and setting, for no more than 6 months, submitted at least 2 business days before the start date.' },
      { title: 'Other insurance', desc: 'Medicaid is the payer of last resort; bill the primary and send its EOB within 365 days of its remittance.' },
    ],
    sources: [S.abhAba, S.abhPaBh, S.abhOtr, S.abhPM, S.mcoPaChart, S.mcoContract, S.kar15010, S.kar3170, S.abaConcurrent, S.bhFee, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: { value: 'Aetna Better Health’s manual and ABA notices publish no supervision rule of their own, so the state rule applies. ' + KY_MCD_SUPERVISION, status: 'verified', cites: [S.abhPM, S.kar15010, S.kar15005] },
      concurrentBilling: {
        value: 'The plan publishes no ABA concurrent-billing rule. The state’s rule: DMS allows 97155 to be billed concurrently with 97153 from December 2, 2025 "when the patient is present, and the qualified health professional is directing the technician." DMS’s letter is addressed to providers, not specifically to MCOs.',
        status: 'plan-dependent',
        cites: [S.abaConcurrent, S.abhPM],
        verifyVia: 'Aetna Better Health of Kentucky Network Relations, 1-855-300-5528: confirm it pays 97153 and 97155 for the same time under the DMS letter.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No ABA unit cap is published; the OTR form asks for units by code and caps the authorization period at 6 months.',
        status: 'verified',
        cites: [S.abhOtr, S.abhPaBh],
      },
      noteSignature: { value: 'The plan publishes no ABA-specific note rule; the state rule applies. ' + KY_MCD_NOTES, status: 'verified', cites: [S.abhPM, S.kar15010] },
      placeOfService: {
        value: 'The plan publishes no ABA setting rule beyond the "Treatment setting" field on its OTR form; the state regulation sets no ABA setting restriction, and 907 KAR 3:170 counts the home, clinic or school as the telehealth place of service.',
        status: 'unverified',
        cites: [S.abhOtr, S.kar15010, S.kar3170],
        verifyVia: 'Aetna Better Health of Kentucky Network Relations, 1-855-300-5528: ask which place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'The manual requires an active Kentucky Medicaid ID and an NPI and taxonomy that match the Commonwealth’s provider file for the date of service, or the claim denies. It publishes no ABA-specific rendering rule; the state rule bills the practitioner who provided the service or under whose supervision it was rendered, or the group (907 KAR 15:010).',
        status: 'verified',
        cites: [S.abhPM, S.kar15010],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'No age limit: the PA notice applies to "all members – adults, adolescents, and children," and the state regulation sets none.',
        status: 'verified',
        cites: [S.abhPaBh, S.kar15010],
      },
      dxRecency: {
        value: 'Not stated by the plan; MCG criteria are licensed and unpublished.',
        status: 'unverified',
        cites: [S.abhAba],
        verifyVia: 'Aetna Better Health of Kentucky behavioral health UM, 1-855-300-5528.',
        blocker: 'licensed',
      },
      diagnosingProviders: {
        value: 'Not stated by the plan. Kentucky law excludes diagnosis from the practice of ABA (KRS 319C.010(8)).',
        status: 'unverified',
        cites: [S.abhAba, S.krs319c010],
        verifyVia: 'Aetna Better Health of Kentucky behavioral health UM, 1-855-300-5528.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'The plan asks for "assessment(s) confirming Autism diagnosis" but names no instrument; MCG is licensed.',
        status: 'unverified',
        cites: [S.abhPaBh],
        verifyVia: 'Aetna Better Health of Kentucky behavioral health UM, 1-855-300-5528.',
        blocker: 'licensed',
      },
      referral: {
        value: 'No referral is required by the plan’s ABA documents or the state regulation; what is required is prior authorization with the clinical record, autism assessment and treatment plan.',
        status: 'verified',
        cites: [S.abhPaBh, S.kar15010],
      },
      telehealth: { value: 'Aetna Better Health’s manual says telehealth follows "Commonwealth regulations" and publishes no ABA telehealth rule, so the state rule applies. ' + KY_MCD_TELEHEALTH, status: 'verified', cites: [S.abhPM, S.kar3170, S.kar43100] },
      authTurnaround: { value: KY_MCD_AUTH_CONTRACT, status: 'verified', cites: [S.mcoContract, S.cfr438] },
      coordinationOfBenefits: {
        value: 'Aetna Better Health is the payer of last resort; bill the primary and send its EOB, and COB claims must arrive within 365 days of the primary carrier’s remittance. A commercial bypass list lets some codes go straight to the plan without an EOB. ' + KY_MCD_COB,
        status: 'verified',
        cites: [S.abhPM, S.mcoContract, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Aetna Better Health of Kentucky require prior authorization for ABA?', a: 'Yes, for all ABA codes (97151–97158) for dates of service from June 25, 2025, for adults and children, including SKY members.' },
      { q: 'Does Aetna Better Health of Kentucky cover ABA without an autism diagnosis?', a: 'No. It uses MCG criteria, which support ABA for ASD only, and since January 1, 2025 it denies ABA claims that lack the ASD diagnosis.' },
      { q: 'How far ahead must I submit an Aetna Better Health ABA request?', a: 'The OTR form says requests must be received within 2 business days of the requested start date, and a request can cover at most 6 months.' },
      { q: 'What is Aetna Better Health of Kentucky’s timely filing limit?', a: '365 calendar days from the date of service; corrected claims within 24 months of the first remittance.' },
    ],
  },

  'humana-healthy-horizons-kentucky': {
    slug: 'humana-healthy-horizons-kentucky',
    family: 'humana',
    cardDesc: 'Kentucky Medicaid MCO: all eight ABA codes on the PA list since 7/1/2025; claims need an F84/F88/F89 diagnosis.',
    assessmentPA: {
      value: 'Yes. Humana’s Kentucky Medicaid Prior Authorization and Notification List (eff. 1/1/2026) names 97151 and 97152 with the treatment codes under "Applied behavioral analysis (ABA)"',
      status: 'verified',
      cites: [S.humPAL, S.humBhPa],
    },
    treatmentPA: {
      value: 'Yes, 97153–97158, reinstated July 1, 2025; submit through Availity Essentials, fax or phone with all pertinent clinical information',
      status: 'verified',
      cites: [S.humPAL, S.humBhPa],
    },
    dxRequired: {
      value: 'Yes. "ABA services are considered medically necessary when delivered to an individual with autism"; claims need F84.0, F84.2, F84.3, F84.5, F84.8, F84.9, F88 or F89 or they deny',
      status: 'verified',
      cites: [S.humAba],
    },
    payer: 'Humana Healthy Horizons in Kentucky',
    state: 'KY', kind: 'medicaid-mco', parent: 'Kentucky Medicaid (managed care)',
    pill: 'Payer Guide · Humana Healthy Horizons · Kentucky',
    h1: 'Humana Healthy Horizons in Kentucky ABA coverage: the intake guide.',
    metaTitle: 'Humana Healthy Horizons in Kentucky ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Humana Healthy Horizons in Kentucky covers ABA for Kentucky Medicaid members: prior authorization on all eight ABA codes, the diagnosis codes claims must carry, decision clocks, filing limits and appeals.',
    intro: [
      'Humana Healthy Horizons in Kentucky is a Kentucky Medicaid MCO (a Medicaid product of Humana Health Plan, Inc.). It reinstated behavioral health prior authorization on July 1, 2025 and lists every ABA code on its 2026 prior authorization list. Its June 2025 billing reminder is the clearest statement in Kentucky of which diagnosis codes an ABA claim must carry.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, when delivered to an individual with autism' },
      { label: 'Prior auth', value: 'Required on 97151–97158 (PAL eff. 1/1/2026, rev. 2/16/2026)' },
      { label: 'Diagnosis codes', value: 'F84.0, F84.2, F84.3, F84.5, F84.8, F84.9, F88, F89' },
      { label: 'Decision clock', value: 'Standard PA notice within 2 business days of the request (manual); contract: 5 days after necessary information' },
      { label: 'Timely filing', value: '365 calendar days; claim appeals within 60 calendar days' },
      { label: 'Licensure', value: 'Kentucky license required (KRS 319C)' },
    ],
    sections: [
      {
        h2: 'Prior authorization and the diagnosis rule',
        body: [
          'Following DMS’s April 2025 guidance, Humana said that "Effective July 1, 2025 … Humana Healthy Horizons in Kentucky will reinstate all PA requirements for behavioral health services," and its preauthorization list names "Applied Behavioral Analysis (ABA) 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158." The current list (effective January 1, 2026, revised February 16, 2026) carries the same eight codes. Requests go through Availity Essentials, fax or phone; approvals are delivered in Availity, and denials verbally, in Availity, by fax and by mail.',
          'Humana’s June 5, 2025 reminder ties payment to diagnosis: "ABA services are considered medically necessary when delivered to an individual with autism. Claims submitted without a diagnosis code indicating autism or likely autism diagnosis will be denied." The accepted codes are F84.0, F84.2, F84.3, F84.5, F84.8, F84.9, F88 and F89. The reminder applies to provider types 01 through 95, including licensed behavior analysts (63). Denials can be appealed with medical records through Availity or in writing.',
        ],
        cites: [S.humBhPa, S.humPAL, S.humAba],
      },
      {
        h2: 'Claims, decision clocks and appeals',
        body: [
          'Humana’s 2025 provider manual (the edition still posted in October 2026) requires claims and corrected claims within 365 calendar days of the date of service and claim appeals within 60 calendar days of the reduction or denial, and says Humana pays 90 percent of clean claims within 30 days and 99 percent within 90. For standard PA decisions it notifies the provider "no later than 2 business days following the authorization request date," extendable up to 14 calendar days. After exhausting internal appeal rights a provider may request external independent review under 907 KAR 17:035; the reviewer decides within 30 calendar days, and either side may then request an administrative hearing within 30 calendar days. Taxonomy is required for all rendering providers, in box 24J of the CMS-1500.',
        ],
        cites: [S.humPM],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Humana Healthy Horizons in Kentucky on the date of service.' },
      { title: 'Diagnosis code', desc: 'One of F84.0, F84.2, F84.3, F84.5, F84.8, F84.9, F88 or F89, or the claim denies.' },
      { title: 'Clinical packet for PA', desc: 'Assessment and treatment plan for all eight ABA codes, submitted before services start.' },
      { title: 'Other insurance', desc: 'Kentucky Medicaid is the payer of last resort; bill the primary first unless the code is on the commercial bypass list.' },
    ],
    sources: [S.humPAL, S.humBhPa, S.humAba, S.humPM, S.mcoPaChart, S.dmsPaLetter, S.mcoContract, S.kar15010, S.kar3170, S.abaConcurrent, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: { value: 'Humana publishes no ABA supervision rule of its own; the state rule applies. ' + KY_MCD_SUPERVISION, status: 'verified', cites: [S.humPM, S.kar15010, S.kar15005] },
      concurrentBilling: {
        value: 'Humana publishes no ABA concurrent-billing rule. DMS allows 97155 concurrently with 97153 from December 2, 2025 when the patient is present and the professional is directing the technician; the letter is addressed to providers.',
        status: 'plan-dependent',
        cites: [S.abaConcurrent, S.humPM],
        verifyVia: 'Humana Healthy Horizons Provider Services, 800-444-9137: confirm 97153 + 97155 concurrent payment.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Humana publishes no ABA unit or hour limit; units are set by the authorization.',
        status: 'unverified',
        cites: [S.humPAL, S.humPM],
        verifyVia: 'Humana Healthy Horizons behavioral health UM, 800-444-9137.',
        blocker: 'per-case',
      },
      noteSignature: { value: 'Humana publishes no ABA-specific note rule; the state rule applies. ' + KY_MCD_NOTES, status: 'verified', cites: [S.humPM, S.kar15010] },
      placeOfService: {
        value: 'Humana publishes no ABA setting rule; the state regulation sets no ABA setting restriction.',
        status: 'unverified',
        cites: [S.humPM, S.kar15010],
        verifyVia: 'Humana Healthy Horizons Provider Services, 800-444-9137: ask which place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Electronic claims report the rendering provider NPI in loop 2310B, and taxonomy is required for "All rendering providers" (box 24J with qualifier ZZ on a CMS-1500). The state rule bills the practitioner who provided the service or under whose supervision it was rendered, or the group.',
        status: 'verified',
        cites: [S.humPM, S.kar15010],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'No age limit: the reinstated PA list applies to all Medicaid members, and the state regulation sets no ABA age limit.',
        status: 'verified',
        cites: [S.humBhPa, S.kar15010],
      },
      dxRecency: {
        value: 'Not stated by Humana.',
        status: 'unverified',
        cites: [S.humAba],
        verifyVia: 'Humana Healthy Horizons behavioral health UM, 800-444-9137.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Not stated by Humana. Kentucky law excludes diagnosis from the practice of ABA (KRS 319C.010(8)).',
        status: 'unverified',
        cites: [S.humAba, S.krs319c010],
        verifyVia: 'Humana Healthy Horizons behavioral health UM, 800-444-9137.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'Not stated by Humana; the manual says it uses "nationally recognized criteria" without naming the ABA criteria set.',
        status: 'unverified',
        cites: [S.humPM],
        verifyVia: 'Humana Healthy Horizons behavioral health UM, 800-444-9137: ask which criteria and instruments it applies to ABA.',
        blocker: 'per-case',
      },
      referral: {
        value: 'No referral for ABA appears in Humana’s ABA documents or the state regulation; prior authorization is the gate.',
        status: 'verified',
        cites: [S.humPAL, S.kar15010],
      },
      telehealth: { value: 'Humana’s manual covers telehealth only through its MDLIVE virtual urgent care and publishes no ABA telehealth rule, so the state rule applies. ' + KY_MCD_TELEHEALTH, status: 'verified', cites: [S.humPM, S.kar3170, S.kar43100] },
      authTurnaround: {
        value: 'Humana’s manual: for standard PA decisions it notifies the provider "no later than 2 business days following the authorization request date," extendable up to 14 calendar days. ' + KY_MCD_AUTH_CONTRACT,
        status: 'verified',
        cites: [S.humPM, S.mcoContract, S.cfr438],
      },
      coordinationOfBenefits: { value: 'Humana’s manual repeats that Kentucky Medicaid is the payer of last resort and lets codes on its commercial bypass list go straight to Humana without an EOB. ' + KY_MCD_COB, status: 'verified', cites: [S.humPM, S.mcoContract, S.cfr433] },
    },
    faq: [
      { q: 'Does Humana Healthy Horizons in Kentucky require prior authorization for ABA?', a: 'Yes. Since July 1, 2025 all eight ABA codes (97151–97158) are on its prior authorization list.' },
      { q: 'Which diagnosis codes does Humana accept on Kentucky ABA claims?', a: 'F84.0, F84.2, F84.3, F84.5, F84.8, F84.9, F88 and F89. ABA claims without an autism-range code are denied.' },
      { q: 'How long do I have to appeal a Humana Kentucky claim denial?', a: '60 calendar days from the reduction or denial notice, then external independent review once internal appeals are exhausted.' },
    ],
  },

  'passport-by-molina-kentucky': {
    slug: 'passport-by-molina-kentucky',
    family: 'molina',
    cardDesc: 'Kentucky Medicaid MCO: no PA on 97151/97152; treatment codes need PA only after 48 units per member per calendar year.',
    assessmentPA: {
      value: 'No. DMS’s MCO chart lists Passport as "Yes, except for 97151 and 97152," and Passport’s DMS-approved training deck lists only 97153–97158 under the 48-unit threshold',
      status: 'verified',
      cites: [S.mcoPaChart, S.molDeck],
    },
    treatmentPA: {
      value: 'Yes, after 48 units: "Prior authorization required after 48 units, for any combination of CPT Codes listed, per member per calendar year" for 97153–97158, counted from 1/1/2025',
      status: 'verified',
      cites: [S.molDeck, S.molEnews, S.mcoPaChart],
    },
    dxRequired: {
      value: 'Passport publishes no ABA diagnosis rule. The state regulation names no diagnosis for ABA; Passport applies MCG criteria, which are licensed',
      status: 'unverified',
      cites: [S.molPM, S.kar15010],
      verifyVia: 'Passport Utilization Management, (800) 578-0775: ask whether an ASD diagnosis is required for ABA authorization and on claims.',
      blocker: 'licensed',
    },
    payer: 'Passport by Molina Healthcare',
    state: 'KY', kind: 'medicaid-mco', parent: 'Kentucky Medicaid (managed care)',
    pill: 'Payer Guide · Passport by Molina · Kentucky',
    h1: 'Passport by Molina Healthcare ABA coverage: the intake guide.',
    metaTitle: 'Passport by Molina Healthcare ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Passport by Molina Healthcare covers ABA for Kentucky Medicaid members: no PA on the assessment, PA only after 48 treatment units a year, MCG criteria, filing limits, credentialing and appeals.',
    intro: [
      'Passport by Molina Healthcare is the Kentucky Medicaid MCO with the lightest ABA authorization rule in the state: the assessment codes need none, and treatment codes need prior authorization only once a member has used 48 units (12 hours) in a calendar year. Past that threshold the usual review applies.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, Kentucky Medicaid covered service' },
      { label: 'Assessment PA', value: 'Not required for 97151 or 97152' },
      { label: 'Treatment PA', value: 'After 48 units (12 hours) per member per calendar year, any combination of 97153–97158' },
      { label: 'Criteria', value: 'MCG (Cite for Guideline Transparency in Availity)' },
      { label: 'Timely filing', value: '365 calendar days; provider appeals within 60 calendar days' },
      { label: 'Credentialing', value: 'Decision letter within 30 calendar days' },
    ],
    sections: [
      {
        h2: 'The 48-unit threshold',
        body: [
          'Passport’s May 2025 notice reinstated behavioral health authorization "for all members, including children, adolescents, and adults" from July 1, 2025. For ABA it set: "Prior authorization required after 48 units, for any combination of CPT Codes listed, per member per calendar year, beginning 1/1/25," and a member who had already used 48 units before July 1, 2025 needed PA for additional units. Passport’s DMS-approved training deck lists the counted codes as 97153 through 97158, and DMS’s own chart records Passport as "Yes, except for 97151 and 97152." Requests go through Availity Essentials, by phone at (800) 578-0775 or by fax at (833) 454-0641. Non-participating providers need authorization for everything except emergencies.',
        ],
        cites: [S.molEnews, S.molDeck, S.mcoPaChart],
      },
      {
        h2: 'Claims, credentialing and appeals',
        body: [
          'Passport’s 2026 manual (last updated June 22, 2026) requires claims "within 365 calendar days after … the Date of Service for outpatient services," with the clock starting at the primary EOB for coordination-of-benefits claims. Providers "have 60 calendar days from the date of our adverse determination to file an Appeal." Credentialing decisions are issued "within 30 calendar days of receiving either a provider’s credentialing request or a completed uniform credentialing form, whichever occurs first." After an adverse determination a provider may request a peer-to-peer within five business days. Passport uses MCG and shares the clinical indications through MCG Cite for Guideline Transparency in Availity.',
        ],
        cites: [S.molPM],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Passport by Molina Healthcare Medicaid (not the Marketplace product).' },
      { title: 'Units already used this year', desc: 'PA starts after 48 units of 97153–97158 in the calendar year, including units at other providers.' },
      { title: 'Diagnosis and treatment plan', desc: 'Needed for the review once the threshold is crossed.' },
      { title: 'Other insurance', desc: 'Medicaid is always the payer of last resort; bill the primary and send its EOB.' },
    ],
    sources: [S.molPM, S.molEnews, S.molDeck, S.mcoPaChart, S.dmsPaLetter, S.mcoContract, S.kar15010, S.kar3170, S.abaConcurrent, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: { value: 'Passport publishes no ABA supervision rule of its own; the state rule applies. ' + KY_MCD_SUPERVISION, status: 'verified', cites: [S.molPM, S.kar15010, S.kar15005] },
      concurrentBilling: {
        value: 'Passport publishes no ABA concurrent-billing rule. DMS allows 97155 concurrently with 97153 from December 2, 2025 when the patient is present and the professional is directing the technician.',
        status: 'plan-dependent',
        cites: [S.abaConcurrent, S.molPM],
        verifyVia: 'Passport Provider Services, (800) 578-0775: confirm 97153 + 97155 concurrent payment and whether concurrent units count toward the 48-unit threshold.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No ABA cap is published. The 48-units-per-calendar-year figure is a prior-authorization trigger for 97153–97158, not a limit.',
        status: 'verified',
        cites: [S.molDeck, S.molEnews],
      },
      noteSignature: { value: 'Passport publishes no ABA-specific note rule; the state rule applies. ' + KY_MCD_NOTES, status: 'verified', cites: [S.molPM, S.kar15010] },
      placeOfService: {
        value: 'Passport publishes no ABA setting rule. Its telehealth terms say services "are not permitted when the Member and Participating Provider are in the same physical location."',
        status: 'unverified',
        cites: [S.molPM, S.kar15010],
        verifyVia: 'Passport Provider Services, (800) 578-0775: ask which place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Passport publishes no ABA-specific rendering rule.',
        status: 'unverified',
        cites: [S.molPM],
        verifyVia: 'Passport Provider Services, (800) 578-0775: ask whether RBT services are billed under the supervising licensed behavior analyst with modifier UC as on the DMS fee schedule.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'No age limit: the reinstated authorization rules apply to "children, adolescents, and adults," and the state regulation sets no ABA age limit.',
        status: 'verified',
        cites: [S.molEnews, S.kar15010],
      },
      dxRecency: {
        value: 'Not stated by Passport.',
        status: 'unverified',
        cites: [S.molPM],
        verifyVia: 'Passport Utilization Management, (800) 578-0775.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Not stated by Passport. Kentucky law excludes diagnosis from the practice of ABA (KRS 319C.010(8)).',
        status: 'unverified',
        cites: [S.molPM, S.krs319c010],
        verifyVia: 'Passport Utilization Management, (800) 578-0775.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'Not stated by Passport; MCG criteria are licensed.',
        status: 'unverified',
        cites: [S.molPM],
        verifyVia: 'Passport Utilization Management, (800) 578-0775, or MCG Cite in Availity.',
        blocker: 'licensed',
      },
      referral: {
        value: 'No referral is required by Passport’s ABA rules or the state regulation; the gate is the 48-unit PA threshold.',
        status: 'verified',
        cites: [S.molDeck, S.kar15010],
      },
      telehealth: { value: 'Passport’s manual allows behavioral health covered services by telehealth from participating providers, coded under its reimbursement policies, and publishes no ABA telehealth rule, so the state rule applies. ' + KY_MCD_TELEHEALTH, status: 'verified', cites: [S.molPM, S.kar3170, S.kar43100] },
      authTurnaround: { value: KY_MCD_AUTH_CONTRACT, status: 'verified', cites: [S.mcoContract, S.cfr438] },
      coordinationOfBenefits: { value: 'Passport: "Medicaid is always the payer of last resort"; bill the primary and submit its EOB, and the filing clock for COB claims starts on the primary EOB date. ' + KY_MCD_COB, status: 'verified', cites: [S.molPM, S.mcoContract, S.cfr433] },
    },
    faq: [
      { q: 'Does Passport by Molina require prior authorization for the ABA assessment?', a: 'No. 97151 and 97152 are excluded from Passport’s ABA authorization rule.' },
      { q: 'When does Passport require prior authorization for ABA treatment?', a: 'After a member has used 48 units (12 hours) of 97153–97158 in the calendar year, counted from January 1, 2025.' },
      { q: 'What is Passport’s timely filing limit?', a: '365 calendar days from the date of service; appeals within 60 calendar days of the adverse determination.' },
    ],
  },

  'unitedhealthcare-community-plan-kentucky': {
    slug: 'unitedhealthcare-community-plan-kentucky',
    family: 'unitedhealthcare',
    cardDesc: 'Kentucky Medicaid MCO: Optum manages behavioral health; all eight ABA codes need PA via Provider Express (assessment, then treatment).',
    assessmentPA: {
      value: 'Yes. Optum’s UnitedHealthcare Community Plan of Kentucky PA code list (eff. 7/15/2026) includes 97151 and 97152, with a separate "ABA assessment requests" portal',
      status: 'verified',
      cites: [S.optKyPA],
    },
    treatmentPA: {
      value: 'Yes, 97153–97158, submitted on Provider Express (separate "ABA treatment requests" path); do not deliver services until a determination is made',
      status: 'verified',
      cites: [S.optKyPA, S.uhcKyPM],
    },
    dxRequired: {
      value: 'Not published for Kentucky Medicaid. Optum’s Kentucky Medicaid supplemental criteria have no ABA section, and the plan’s manual names InterQual and its own guidelines for behavioral health determinations',
      status: 'unverified',
      cites: [S.optKySCC, S.uhcKyPM, S.kar15010],
      verifyVia: 'UnitedHealthcare Community Plan / Optum Provider Services, 1-866-633-4449: ask which ABA criteria apply and whether an ASD diagnosis is required.',
      blocker: 'licensed',
    },
    payer: 'UnitedHealthcare Community Plan of Kentucky',
    state: 'KY', kind: 'medicaid-mco', parent: 'Kentucky Medicaid (managed care)',
    pill: 'Payer Guide · UnitedHealthcare Community Plan · Kentucky',
    h1: 'UnitedHealthcare Community Plan of Kentucky ABA coverage: the intake guide.',
    metaTitle: 'UnitedHealthcare Community Plan Kentucky ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan of Kentucky covers ABA for Kentucky Medicaid members: Optum behavioral health, prior authorization on every ABA code, 2-business-day decisions, 12-month filing and the appeal path.',
    intro: [
      'UnitedHealthcare Community Plan of Kentucky is a Kentucky Medicaid MCO whose behavioral health benefit, including ABA, is managed by Optum (United Behavioral Health). ABA authorization runs on Optum’s Provider Express, with separate entry points for the assessment and for treatment.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes; ABA is listed among the plan’s outpatient behavioral health services' },
      { label: 'Prior auth', value: 'All codes 97151–97158 (Optum list eff. 7/15/2026)' },
      { label: 'Submit via', value: 'Provider Express secure portal; out-of-network providers use the ABA assessment / treatment request forms' },
      { label: 'Decision clock', value: 'Non-urgent pre-service: within 2 business days of the request' },
      { label: 'Timely filing', value: '12 months from the date of service' },
      { label: 'PCP referral', value: 'Not required for behavioral health' },
    ],
    sections: [
      {
        h2: 'Optum, Provider Express and the ABA code list',
        body: [
          'The 2026 care provider manual lists "Applied behavioral health analysis (ABA)" among covered outpatient behavioral health services and routes behavioral health eligibility, claims, benefits, authorization and appeals to Optum (providerexpress.com, 1-866-633-4449), adding that "A PCP referral is not required." Optum’s Kentucky prior authorization code list, effective July 15, 2026, puts all eight ABA codes (97151–97158) on the list and says network providers submit ABA requests "via the Provider Express secure portal," with separate links where "ABA assessment requests begin here" and "ABA treatment requests begin here." The list points to the Kentucky Medicaid Supplemental Clinical Criteria for state-specific criteria, but that document (June 2026) covers day treatment, community support, PRTF, peer support, case management and therapeutic rehabilitation only, not ABA. For medical necessity the manual names "InterQual Care Guidelines, American Society of Addictive Medicine, CMS or other nationally recognized guidelines."',
        ],
        cites: [S.uhcKyPM, S.optKyPA, S.optKySCC],
      },
      {
        h2: 'Decisions, claims and appeals',
        body: [
          'The manual’s turnaround table promises non-urgent pre-service decisions "Within 2 business days of receiving the request" and urgent ones within 24 hours. "Timely filing in Kentucky is 12 months from the date of service." Claim reconsiderations are accepted within 24 months of the provider remittance advice and answered in 45 business days; a formal claim appeal is due "60 calendar days from the provider remittance advice" and resolved within 30 calendar days. After the internal process, an external independent third-party review decides within 30 calendar days, and a final decision can go to the Cabinet’s Division of Administrative Hearings.',
        ],
        cites: [S.uhcKyPM],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm UnitedHealthcare Community Plan of Kentucky Medicaid on the date of service.' },
      { title: 'Assessment request first', desc: 'Optum takes ABA assessment and ABA treatment requests through separate entry points.' },
      { title: 'Diagnosis and treatment plan', desc: 'Criteria are not published for Kentucky Medicaid ABA; send the full diagnostic report and plan.' },
      { title: 'Other insurance', desc: 'The plan is the payer of last resort; attach the primary’s EOB.' },
    ],
    sources: [S.uhcKyPM, S.optKyPA, S.optKySCC, S.mcoPaChart, S.mcoContract, S.kar15010, S.kar3170, S.abaConcurrent, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: { value: 'The plan and Optum publish no Kentucky Medicaid ABA supervision rule; the state rule applies. ' + KY_MCD_SUPERVISION, status: 'verified', cites: [S.uhcKyPM, S.optKySCC, S.kar15010, S.kar15005] },
      concurrentBilling: {
        value: 'The plan publishes no ABA concurrent-billing rule for Kentucky Medicaid. DMS allows 97155 concurrently with 97153 from December 2, 2025 when the patient is present and the professional is directing the technician.',
        status: 'plan-dependent',
        cites: [S.abaConcurrent, S.uhcKyPM],
        verifyVia: 'UnitedHealthcare Community Plan / Optum Provider Services, 1-866-633-4449.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No ABA unit cap is published for Kentucky Medicaid; units are set by the Optum authorization.',
        status: 'unverified',
        cites: [S.optKyPA, S.uhcKyPM],
        verifyVia: 'Optum Provider Services, 1-866-633-4449.',
        blocker: 'per-case',
      },
      noteSignature: { value: 'The plan publishes no ABA-specific note rule; the state rule applies. ' + KY_MCD_NOTES, status: 'verified', cites: [S.uhcKyPM, S.kar15010] },
      placeOfService: {
        value: 'The plan publishes no ABA setting rule for Kentucky Medicaid; the state regulation sets none.',
        status: 'unverified',
        cites: [S.uhcKyPM, S.kar15010],
        verifyVia: 'Optum Provider Services, 1-866-633-4449: ask which place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Clean claims must include the provider’s NPI and federal TIN; the manual publishes no ABA-specific rendering rule.',
        status: 'unverified',
        cites: [S.uhcKyPM],
        verifyVia: 'Optum Provider Services, 1-866-633-4449: ask whether RBT services bill under the supervising licensed behavior analyst with modifier UC as on the DMS fee schedule.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'No ABA age limit is published by the plan, and the state regulation sets none.',
        status: 'verified',
        cites: [S.uhcKyPM, S.kar15010],
      },
      dxRecency: {
        value: 'Not stated for Kentucky Medicaid ABA.',
        status: 'unverified',
        cites: [S.optKyPA],
        verifyVia: 'Optum Provider Services, 1-866-633-4449.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Not stated by the plan. Kentucky law excludes diagnosis from the practice of ABA (KRS 319C.010(8)).',
        status: 'unverified',
        cites: [S.uhcKyPM, S.krs319c010],
        verifyVia: 'Optum Provider Services, 1-866-633-4449.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'Not stated for Kentucky Medicaid ABA; InterQual is licensed.',
        status: 'unverified',
        cites: [S.uhcKyPM],
        verifyVia: 'Optum Provider Services, 1-866-633-4449.',
        blocker: 'licensed',
      },
      referral: {
        value: 'No. "A PCP referral is not required" for behavioral health services; prior authorization is the gate.',
        status: 'verified',
        cites: [S.uhcKyPM, S.optKyPA],
      },
      telehealth: { value: 'The plan’s manual publishes no ABA telehealth rule for Kentucky Medicaid, so the state rule applies. ' + KY_MCD_TELEHEALTH, status: 'verified', cites: [S.uhcKyPM, S.kar3170, S.kar43100] },
      authTurnaround: {
        value: 'The manual: non-urgent pre-service decisions "Within 2 business days of receiving the request," urgent within 24 hours. ' + KY_MCD_AUTH_CONTRACT,
        status: 'verified',
        cites: [S.uhcKyPM, S.mcoContract, S.cfr438],
      },
      coordinationOfBenefits: { value: '"UnitedHealthcare Community Plan is the payer of last resort"; bill other coverage first and submit its EOB or remittance with the claim. ' + KY_MCD_COB, status: 'verified', cites: [S.uhcKyPM, S.mcoContract, S.cfr433] },
    },
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of Kentucky require prior authorization for ABA?', a: 'Yes, for all eight ABA codes, including the 97151 and 97152 assessment, through Optum’s Provider Express.' },
      { q: 'Who manages ABA for UnitedHealthcare Community Plan in Kentucky?', a: 'Optum (United Behavioral Health) handles behavioral health eligibility, authorization, claims and appeals, at 1-866-633-4449.' },
      { q: 'What is the timely filing limit for UnitedHealthcare Community Plan of Kentucky?', a: '12 months from the date of service.' },
    ],
  },

  'wellcare-kentucky': {
    slug: 'wellcare-kentucky',
    family: 'centene',
    cardDesc: 'Centene’s Kentucky Medicaid MCO: PA on 97151–97156 and 97158 (97157 released 2/1/2026); InterQual criteria.',
    assessmentPA: {
      value: 'Yes. WellCare’s Q3 2026 Kentucky Medicaid PA list carries 97151 and 97152 with a "Date Requiring Auth" of 1/1/2019 and no "No Auth Required" flag; DMS’s chart also lists WellCare ABA as PA required',
      status: 'verified',
      cites: [S.wcPAL, S.mcoPaChart],
    },
    treatmentPA: {
      value: 'Yes for 97153, 97154, 97155, 97156 and 97158; 97157 (multiple-family group guidance) shows "No Auth Required," authorization released 2/01/2026',
      status: 'verified',
      cites: [S.wcPAL],
    },
    dxRequired: {
      value: 'WellCare publishes no ABA diagnosis rule; it uses InterQual (licensed). The state regulation names no diagnosis for ABA',
      status: 'unverified',
      cites: [S.wcPM, S.kar15010],
      verifyVia: 'WellCare of Kentucky behavioral health UM, 1-877-389-9457: ask whether an ASD diagnosis is required for ABA.',
      blocker: 'licensed',
    },
    payer: 'WellCare of Kentucky',
    state: 'KY', kind: 'medicaid-mco', parent: 'Kentucky Medicaid (managed care)',
    pill: 'Payer Guide · WellCare · Kentucky',
    h1: 'WellCare of Kentucky ABA coverage: the intake guide.',
    metaTitle: 'WellCare of Kentucky ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How WellCare of Kentucky (Centene) covers ABA for Kentucky Medicaid members: which ABA codes need prior authorization in 2026, InterQual criteria, filing limits and claim appeals.',
    intro: [
      'WellCare of Kentucky is Centene’s Kentucky Medicaid MCO. Its quarterly prior authorization list is the place to check ABA codes: as of Q3 2026 every ABA code needs authorization except 97157, which WellCare released on February 1, 2026.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, Kentucky Medicaid covered service' },
      { label: 'Prior auth', value: '97151–97156 and 97158 required; 97157 no auth since 2/1/2026 (Q3 2026 list)' },
      { label: 'Submit via', value: 'Availity Essentials or the WellCare provider portal; BH outpatient fax 1-877-544-2007 (ATTN: BHO)' },
      { label: 'Criteria', value: 'InterQual (licensed)' },
      { label: 'Timely filing', value: '12 months from the date of service (or 6 months from primary payment, if later)' },
      { label: 'Claim appeals', value: 'In writing within 24 months of the denial' },
    ],
    sections: [
      {
        h2: 'Prior authorization by code',
        body: [
          'WellCare’s Kentucky Medicaid Prior Authorization List for Q3 2026 shows 97151, 97152, 97153, 97154, 97155, 97156 and 97158 with a "Date Requiring Auth" of 1/1/2019 and no release, while 97157 reads "No Auth Required," "Authorization released 2/01/2026." WellCare notes that the list is not all-inclusive and that its secure provider portal is "the most accurate method" of checking requirements. DMS’s August 2025 chart lists the ways to submit a WellCare behavioral health PA: Availity Essentials or the WellCare provider portal, phone 1-877-389-9457, or fax 1-877-544-2007 marked ATTENTION TO: BHO for outpatient behavioral health. WellCare’s manual says it "has adopted utilization review criteria developed by InterQual® products to determine medical necessity for healthcare services."',
        ],
        cites: [S.wcPAL, S.mcoPaChart, S.wcPM],
      },
      {
        h2: 'Claims and appeals',
        body: [
          'The 2025–2026 manual (state approved October 10, 2025) requires claims "within 12 months (or six months from the Medicaid or primary insurance payment date, whichever is later) from the date of service," unless the provider contract says otherwise, and accepts a clearinghouse acceptance report or a detailed electronic submission sheet as proof of timely filing. "Claim payment appeals must be submitted to WellCare in writing within 24 months of the date of denial of the EOP." Medicaid is the payor of last resort, and WellCare cost-avoids claims when it knows of other coverage.',
        ],
        cites: [S.wcPM],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm WellCare of Kentucky Medicaid on the date of service.' },
      { title: 'Codes to request', desc: 'Authorize 97151–97156 and 97158; 97157 needs none under the Q3 2026 list.' },
      { title: 'Diagnosis and treatment plan', desc: 'InterQual criteria are licensed; send the full diagnostic report and plan.' },
      { title: 'Other insurance', desc: 'WellCare cost-avoids claims when other coverage is known; bill the primary first.' },
    ],
    sources: [S.wcPAL, S.wcPM, S.mcoPaChart, S.dmsPaLetter, S.mcoContract, S.kar15010, S.kar3170, S.abaConcurrent, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: { value: 'WellCare publishes no ABA supervision rule of its own; the state rule applies. ' + KY_MCD_SUPERVISION, status: 'verified', cites: [S.wcPM, S.kar15010, S.kar15005] },
      concurrentBilling: {
        value: 'WellCare publishes no ABA concurrent-billing rule. DMS allows 97155 concurrently with 97153 from December 2, 2025 when the patient is present and the professional is directing the technician.',
        status: 'plan-dependent',
        cites: [S.abaConcurrent, S.wcPM],
        verifyVia: 'WellCare of Kentucky Provider Services, 1-877-389-9457.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'WellCare publishes no ABA unit limit; units are set by the authorization.',
        status: 'unverified',
        cites: [S.wcPAL, S.wcPM],
        verifyVia: 'WellCare of Kentucky behavioral health UM, 1-877-389-9457.',
        blocker: 'per-case',
      },
      noteSignature: { value: 'WellCare publishes no ABA-specific note rule; the state rule applies. ' + KY_MCD_NOTES, status: 'verified', cites: [S.wcPM, S.kar15010] },
      placeOfService: {
        value: 'WellCare publishes no ABA setting rule; the state regulation sets none.',
        status: 'unverified',
        cites: [S.wcPM, S.kar15010],
        verifyVia: 'WellCare of Kentucky Provider Services, 1-877-389-9457: ask which place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'WellCare publishes no ABA-specific rendering rule.',
        status: 'unverified',
        cites: [S.wcPM],
        verifyVia: 'WellCare of Kentucky Provider Services, 1-877-389-9457: ask whether RBT services bill under the supervising licensed behavior analyst with modifier UC as on the DMS fee schedule.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'No ABA age limit is published by WellCare, and the state regulation sets none.',
        status: 'verified',
        cites: [S.wcPM, S.kar15010],
      },
      dxRecency: {
        value: 'Not stated by WellCare.',
        status: 'unverified',
        cites: [S.wcPM],
        verifyVia: 'WellCare of Kentucky behavioral health UM, 1-877-389-9457.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Not stated by WellCare. Kentucky law excludes diagnosis from the practice of ABA (KRS 319C.010(8)).',
        status: 'unverified',
        cites: [S.wcPM, S.krs319c010],
        verifyVia: 'WellCare of Kentucky behavioral health UM, 1-877-389-9457.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'Not stated by WellCare; InterQual is licensed.',
        status: 'unverified',
        cites: [S.wcPM],
        verifyVia: 'WellCare of Kentucky behavioral health UM, 1-877-389-9457.',
        blocker: 'licensed',
      },
      referral: {
        value: 'No ABA referral requirement appears in WellCare’s documents or the state regulation; prior authorization is the gate.',
        status: 'verified',
        cites: [S.wcPAL, S.kar15010],
      },
      telehealth: { value: 'WellCare’s manual lists telehealth as a $0-copay covered service and publishes no ABA telehealth rule, so the state rule applies. ' + KY_MCD_TELEHEALTH, status: 'verified', cites: [S.wcPM, S.kar3170, S.kar43100] },
      authTurnaround: { value: KY_MCD_AUTH_CONTRACT, status: 'verified', cites: [S.mcoContract, S.cfr438] },
      coordinationOfBenefits: { value: 'WellCare’s manual quotes the contract: if WellCare is aware of other coverage it "shall avoid payment by ‘cost avoiding’ (denying) the claim and redirecting the provider to bill the other Third Party Resource as a primary payer." ' + KY_MCD_COB, status: 'verified', cites: [S.wcPM, S.mcoContract, S.cfr433] },
    },
    faq: [
      { q: 'Which ABA codes need prior authorization at WellCare of Kentucky?', a: 'Under the Q3 2026 list, 97151, 97152, 97153, 97154, 97155, 97156 and 97158. 97157 has needed no authorization since February 1, 2026.' },
      { q: 'What criteria does WellCare of Kentucky use for ABA?', a: 'Its manual says it uses InterQual for medical necessity. InterQual is licensed and not published.' },
      { q: 'What is WellCare of Kentucky’s timely filing limit?', a: '12 months from the date of service, or six months from the primary payment date if later; claim payment appeals within 24 months of the denial.' },
    ],
  },

  'aetna-kentucky': {
    slug: 'aetna-kentucky',
    family: 'aetna',
    cardDesc: 'Aetna national ABA guide + precert list, layered on Kentucky’s KRS 304.17A-142 mandate (no age or visit caps since 2019).',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: precertification through Availity or the number on the card; the reauthorization interval is set by the plan',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): ask whether the group carries ABA precertification and its reauthorization interval.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) by an appropriate provider',
      status: 'verified',
      cites: [S.aetnaGuide],
    },
    payer: 'Aetna in Kentucky',
    state: 'KY', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Kentucky',
    h1: 'Aetna ABA coverage in Kentucky: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Kentucky: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Kentucky families: the national medical necessity guide, precertification, Kentucky’s KRS 304.17A-142 autism mandate (no age or visit caps), licensure under KRS 319C, prompt pay, and what intake should verify.',
    intro: [
      'For an intake team in Kentucky, an Aetna commercial card means three layers: Aetna’s national ABA medical necessity guide, Kentucky’s autism mandate in KRS 304.17A-142, and the plan’s funding type, which decides whether the mandate applies. Aetna Better Health of Kentucky, the Medicaid plan, has its own guide.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s national ABA guide' },
      { label: 'State mandate', value: 'KRS 304.17A-142 (plans issued or renewed on or after Jan. 1, 2019)' },
      { label: 'Mandate age', value: 'No age limit in the current statute' },
      { label: 'Mandate caps', value: 'None: no maximum annual benefit or visit limit' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'Required: KRS 319C license (BCBA-based) from the Kentucky Applied Behavior Analysis Licensing Board' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Kentucky',
        body: [
          'Aetna’s ABA medical necessity guide requires a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) from an appropriate provider, functional impairment on a standardized scale in the past 12 months, a measurable treatment plan, and hours justified by a severity table; progress is evaluated every six months. Its only state exhibit is Maryland, so Kentucky plans get the national criteria plus the mandate. Aetna’s behavioral health precertification list includes all ten ABA codes, 97151 through 97158, 0362T and 0373T, submitted through Availity.',
        ],
        cites: [S.aetnaGuide, S.aetnaPrecert],
      },
      { h2: 'The Kentucky mandate: what it guarantees', body: [KY_MANDATE_BODY], cites: [S.krs142, S.krs144] },
      { h2: 'Licensure, out-of-state BCBAs and rates', body: [KY_LICENSURE_BODY], cites: [S.krs319c010, S.krs319c020, S.krs319c080, S.krs319c090, S.kar43100, S.krs138, S.bacbLic, S.bhFee] },
      {
        h2: 'What is Aetna’s fee schedule for ABA, and how fast must it pay?',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) says "The rates and compensation under your agreement are subject to the Aetna coding/claim edit policies," and where a provider has both an intermediary and a direct agreement, "your direct Aetna rates will apply unless we specifically notify you otherwise." Get rates from your Aetna agreement. ' + KY_PROMPT_PAY,
        ],
        cites: [S.aetnaOM, S.krs702, S.krs730],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (KRS 304.17A-142 applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification and precertification.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis by a licensed clinician (a behavior analyst cannot diagnose in Kentucky).' },
      { title: 'Standardized functional measure', desc: 'From the past 12 months (for example Vineland-3, ABAS, VB-MAPP or ABLLS).' },
      { title: 'ABA order', desc: 'The mandate covers ABA "prescribed or ordered by a licensed health or allied health professional."' },
    ],
    sources: [S.aetnaGuide, S.aetnaCPB648, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.krs142, S.krs144, S.krs138, S.krs607, S.krs702, S.krs730, S.kar18030, S.krs319c010, S.krs319c020, S.krs319c080, S.krs319c090, S.kar43100, S.bacbLic, S.bhFee, S.erisa, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s guide requires services to be provided directly or billed by licensed behavior analysts in states with licensure laws (Kentucky is one), BCBAs, or psychologists where in scope, with supervision of others "in line with practice standards." Its participation criteria (5/26) require "A minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional "for each 10 hours of applied behavior analysis," the supervisor "onsite with the child at least one hour a month," and all BCBAs, BCaBAs and paraprofessionals to "meet state requirements." Kentucky’s board rule (201 KAR 43:050) governs supervision of licensed assistants and temporary licensees.',
        status: 'verified',
        cites: [S.aetnaGuide, S.aetnaNPC, S.kar43050],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA guide or precertification list.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Aetna provider services or your participation agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap. Hours follow the guide’s severity table (typical 10–25 hours a week comprehensive, 1–20 focused; typical, not caps), and QHP protocol modification may be authorized at 1–2 hours per 10 hours of treatment by protocol. Kentucky’s mandate bars visit limits on autism treatment in fully insured plans.',
        status: 'verified',
        cites: [S.aetnaGuide, S.krs142],
      },
      noteSignature: {
        value: 'Not addressed in Aetna’s ABA guide; it sets treatment-plan content, not who signs session notes.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Your Aetna participation agreement and the Aetna Behavioral Health documentation standards.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-neutral in the guide; inpatient, residential or partial hospitalization use that level of care’s criteria. KRS 304.17A-142 does not require plans to cover services in an IEP or IFSP.',
        status: 'verified',
        cites: [S.aetnaGuide, S.krs142],
      },
      billAsProvider: {
        value: 'Services must be "provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws)," BCBAs, or psychologists in scope. In Kentucky that means a licensed behavior analyst (KRS 319C).',
        status: 'verified',
        cites: [S.aetnaGuide, S.krs319c020],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s guide sets no age cap; its age ranges are typical, not limiting.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.krs142],
        verifyVia: 'Live benefits verification: establish fully insured vs. self-funded ERISA, then the plan’s age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but functional impairment must be shown "on a standardized scale of functioning in the past 12 months."',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: '"An appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)." Kentucky excludes diagnosis from ABA practice (KRS 319C.010(8)).',
        status: 'verified',
        cites: [S.aetnaGuide, S.krs319c010],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale; the ABA guide requires a standardized functional measure (Vineland-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s national ABA documents require precertification, not a referral.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.krs142],
      },
      telehealth: {
        value: 'Aetna’s provider manual says Aetna Behavioral Health "offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out." For fully insured Kentucky plans, KRS 304.17A-138 requires telehealth coverage "equivalent to the coverage for the same service provided in person" (unless a lower rate is contracted), bars requiring the provider to be physically present unless the provider decides it is necessary, bars PA for telehealth "that would not be required if a service were provided in person," and lets the plan require a Kentucky (or compact) license. Aetna’s current ABA telehealth code list is not public.',
        status: 'plan-dependent',
        cites: [S.aetnaOM, S.krs138],
        verifyVia: 'Availity or the precertification line: ask whether the plan is fully insured in Kentucky or self-funded (and opted out), and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: KY_COMM_AUTH + ' Aetna publishes no Kentucky-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.krs607, S.krs142, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Kentucky-regulated) or self-funded (ERISA), and what reauthorization lead time Aetna expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: KY_COMM_COB,
        status: 'plan-dependent',
        cites: [S.kar18030, S.cfr433],
        verifyVia: 'Ask Aetna at benefits verification for the coordination-of-benefits order (and whether a self-funded plan uses the birthday rule).',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Kentucky?', a: 'Yes, under its national guide for ASD, with Kentucky’s KRS 304.17A-142 mandate layered on for fully insured plans. Self-funded employer plans follow their own documents.' },
      { q: 'Does Kentucky’s autism mandate have an age or dollar cap?', a: 'No. Since January 1, 2019 KRS 304.17A-142 covers diagnosis and treatment of autism, including ABA, without any maximum annual benefit or visit limit, and with no age limit in the text.' },
      { q: 'Does a BCBA need a Kentucky license to bill Aetna?', a: 'Yes. Kentucky requires a KRS 319C license to practice ABA, and Aetna’s guide requires a licensed behavior analyst in states with licensure laws.' },
      { q: 'How fast must Aetna pay a clean claim in Kentucky?', a: 'For fully insured plans, within 30 calendar days of receipt (KRS 304.17A-702), with interest of 12–21 percent a year on late clean claims.' },
    ],
  },

  'cigna-kentucky': {
    slug: 'cigna-kentucky',
    family: 'cigna',
    cardDesc: 'Evernorth EN0499 + autism resource guide + Kentucky’s KRS 304.17A-142 mandate; no PA on assessment codes.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the policy covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: treatment requests with the completed assessment and treatment plan; review follows EN0499',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD under DSM-5-TR; ABA is not medically necessary for non-ASD indications including Rett syndrome',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Kentucky',
    state: 'KY', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Kentucky',
    h1: 'Cigna / Evernorth ABA coverage in Kentucky: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Kentucky: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Kentucky families: national policy EN0499, no PA on assessments, Kentucky’s KRS 304.17A-142 autism mandate, KRS 319C licensure, Evernorth’s Kentucky addendum, and what intake should verify.',
    intro: [
      'For an intake team in Kentucky, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, Kentucky’s autism mandate in KRS 304.17A-142, and the plan’s funding type. Evernorth’s administrative guidelines add a Kentucky regulatory addendum for provider contracts.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'State mandate', value: 'KRS 304.17A-142 (plans issued or renewed on or after Jan. 1, 2019)' },
      { label: 'Mandate age', value: 'No age limit in the current statute' },
      { label: 'Mandate caps', value: 'None: no maximum annual benefit or visit limit' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (Evernorth’s Kentucky addendum also excludes them)' },
      { label: 'Licensure', value: 'Required: KRS 319C license (BCBA-based) from the Kentucky Applied Behavior Analysis Licensing Board' },
      { label: 'Fee schedule', value: 'Not public — Exhibit A of your Evernorth Provider Agreement; fee changes need 90 days’ notice under the Kentucky addendum' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Kentucky',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). The autism resource guide says prior authorization "is no longer required for assessment … codes 97151, 97152, or 0362T with a diagnosis of autism, as long as the provider is independently licensed or a Board Certified Behavior Analyst® and the patient’s policy covers ABA services"; treatment needs authorization with the completed assessment and plan. EN0499 names no Kentucky-specific criteria, so the national policy plus the mandate apply.',
        ],
        cites: [S.en0499, S.cignaARG],
      },
      { h2: 'The Kentucky mandate: what it guarantees', body: [KY_MANDATE_BODY], cites: [S.krs142, S.krs144] },
      { h2: 'Licensure, out-of-state BCBAs and rates', body: [KY_LICENSURE_BODY], cites: [S.krs319c010, S.krs319c020, S.krs319c080, S.krs319c090, S.kar43100, S.krs138, S.bacbLic, S.bhFee] },
      {
        h2: 'What is Cigna’s fee schedule for ABA, and how fast must it pay?',
        body: [
          'Evernorth puts ABA rates in the contract: "For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement," and payment is "the lesser of the billed charge or the applicable fee under Exhibit A." Its Kentucky Regulatory Addendum (which does not apply to self-funded plans) requires Evernorth to provide fee schedules on request before contracting, to give at least 90 days’ notice of fee-schedule changes and material changes, 15 days’ notice of changes to prior authorization programs, and limits retroactive denials to 24 months after payment. Fee questions go to Provider Services at 800.926.2273. Telehealth is billed with modifier 95, which "will not change the reimbursement." ' + KY_PROMPT_PAY,
        ],
        cites: [S.ebhAdmin, S.krs702, S.krs730],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (KRS 304.17A-142 applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, and the date of the most recent diagnosis; provisional or rule-out diagnoses don’t count.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'ABA order', desc: 'The mandate covers ABA "prescribed or ordered by a licensed health or allied health professional."' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.krs142, S.krs144, S.krs138, S.krs607, S.krs702, S.krs730, S.kar18030, S.krs319c010, S.krs319c020, S.krs319c080, S.krs319c090, S.kar43100, S.bacbLic, S.bhFee, S.erisa, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'Direct and indirect case supervision at "one to two hours per ten hours of direct treatment"; at 10 hours a week or less, at least one to two hours a week of direct case supervision (EN0499). Kentucky’s board rule (201 KAR 43:050) governs supervision of licensed assistants and temporary licensees.',
        status: 'verified',
        cites: [S.en0499, S.kar43050],
      },
      concurrentBilling: {
        value: '"Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)."',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap is published; ABA codes bill in 15-minute units using 97151–97158, 0362T and 0373T only. Kentucky’s mandate bars visit limits in fully insured plans.',
        status: 'verified',
        cites: [S.cignaARG, S.krs142],
      },
      noteSignature: {
        value: 'Each service record includes the "Name, credential (if applicable), and signature of ABA provider who rendered the service," with service type and details (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'Services "primarily educational or vocational in nature, or related to academic or work performance are not covered"; services in academic or vocational settings or by telehealth must still meet the direct-treatment definition (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      billAsProvider: {
        value: '"Evernorth does not credential nonlicensed/noncertified staff"; on a CMS-1500 "List only a BCBA or other licensed provider in box 33," and electronic claims use payer ID 62308. In Kentucky the BCBA must also hold a KRS 319C license.',
        status: 'verified',
        cites: [S.cignaARG, S.krs319c020],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; access to focused intervention "should not be restricted by age."' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.krs142],
        verifyVia: 'Live benefits verification: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs "the date on which the diagnosis was most recently made," the standardized instrument within 60 days before treatment, and baseline data within 60 days; provisional or rule-out diagnoses are not confirmed (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A professional licensed to practice independently "whose licensure board considers diagnostics to be within their scope of practice," with name, credentials and licensure type provided (EN0499). Kentucky excludes diagnosis from ABA practice (KRS 319C.010(8)).',
        status: 'verified',
        cites: [S.en0499, S.krs319c010],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated; it must be reliable, valid and standardized and the current edition ("must be the Vineland-3 vs. Vineland-II"), with date, respondent and form type reported (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral; assessments need no PA with an autism diagnosis, and treatment needs authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.krs142],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" (autism resource guide), and EN0499 allows in-person, telehealth or hybrid delivery chosen on clinical factors; bill modifier 95 with POS 02. Fully insured Kentucky plans must also cover telehealth equivalently to in person and may require a Kentucky-licensed provider (KRS 304.17A-138).',
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ebhAdmin, S.krs138],
      },
      authTurnaround: {
        value: KY_COMM_AUTH + ' Cigna/Evernorth publishes no Kentucky-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.krs607, S.krs142, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Kentucky-regulated) or self-funded (ERISA).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: KY_COMM_COB,
        status: 'plan-dependent',
        cites: [S.kar18030, S.cfr433],
        verifyVia: 'Ask Cigna/Evernorth at benefits verification for the coordination-of-benefits order.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Kentucky?', a: 'Yes, under EN0499 for ASD, with Kentucky’s KRS 304.17A-142 mandate layered on for fully insured plans.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in Kentucky?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'Can a BCBA in another state treat a Kentucky Cigna member by telehealth?', a: 'Only with a Kentucky license: the Kentucky ABA board requires a license for telehealth to a client located in Kentucky (201 KAR 43:100), and fully insured plans may require a Kentucky-licensed telehealth provider (KRS 304.17A-138).' },
      { q: 'What does Cigna pay for ABA in Kentucky?', a: 'Cigna publishes no ABA rates; your fee schedule is Exhibit A of your Evernorth Provider Agreement. The Kentucky Medicaid FFS rate for 97153 ($12.18 per 15 minutes) is the only public benchmark.' },
    ],
  },

  'unitedhealthcare-kentucky': {
    slug: 'unitedhealthcare-kentucky',
    family: 'unitedhealthcare',
    cardDesc: 'Optum ABA criteria + Optum’s Kentucky commercial mandate section (KRS 304.17A-142); separate from UHC Community Plan (Medicaid).',
    assessmentPA: {
      value: 'Required: the ABA Supplemental Clinical Criteria require prior authorization for ABA "unless otherwise specified or mandated by contract or law"',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required; the review interval is set per authorization',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express support: ask what review interval applies to this member’s ABA authorization (Kentucky’s mandate limits utilization review of ongoing treatment to once every 12 months for fully insured plans).',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5-TR ASD with severity level, confirmed with at least one clinically validated tool, by a state-licensed clinician qualified to diagnose',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Kentucky',
    state: 'KY', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Kentucky',
    h1: 'UnitedHealthcare / Optum ABA coverage in Kentucky: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Kentucky: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Kentucky commercial members: Optum’s ABA criteria and its Kentucky state-mandate section, KRS 304.17A-142 (no age or visit caps), KRS 319C licensure, telehealth limits and what intake should verify.',
    intro: [
      'For an intake team in Kentucky, a UnitedHealthcare commercial card means Optum Behavioral Health’s national ABA criteria, Optum’s Kentucky section of its ABA State Mandates document (which restates KRS 304.17A-142), and the plan’s funding type. UnitedHealthcare Community Plan of Kentucky, the Medicaid plan, has its own guide.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'KRS 304.17A-142 (plans issued or renewed on or after Jan. 1, 2019); in Optum’s ABA State Mandates since 11/2025' },
      { label: 'Mandate age', value: 'No age limit in the current statute' },
      { label: 'Mandate caps', value: 'None: no maximum annual benefit or visit limit' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'Required: KRS 319C license (BCBA-based) from the Kentucky Applied Behavior Analysis Licensing Board' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, with Optum’s Kentucky section',
        body: [
          'Optum’s ABA Supplemental Clinical Criteria (interim review April 2026) require prior authorization for ABA, a DSM-5-TR ASD diagnosis with severity confirmed by a validated tool, and direct case supervision of 1–2 hours per 10 hours of direct treatment; continued-service review looks hard at use below 80 percent of authorized hours. The criteria list "Kentucky Commercial" among the plans with state-mandate overlays, and Optum’s ABA State Mandates document (added for Kentucky in November 2025, revised December 2025) restates KRS 304.17A-142 "For Commercial Members in Kentucky": the definition of autism treatment including ABA "prescribed or ordered by a licensed health or allied health professional," utilization review "not more than once every twelve (12) months" unless the insurer and treating clinician agree, and the treatment-plan content an insurer may request.',
        ],
        cites: [S.optumSCC, S.optumSM],
      },
      { h2: 'The Kentucky mandate: what it guarantees', body: [KY_MANDATE_BODY], cites: [S.krs142, S.krs144, S.optumSM] },
      { h2: 'Licensure, out-of-state BCBAs and rates', body: [KY_LICENSURE_BODY], cites: [S.krs319c010, S.krs319c020, S.krs319c080, S.krs319c090, S.kar43100, S.krs138, S.bacbLic, S.bhFee] },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA, and how fast must it pay?',
        body: [
          'UnitedHealthcare publishes no ABA rate table; Optum’s National Network Manual defines the Fee Maximum as "The maximum amount a participating provider may be paid for a specific health care service provided to a member," and Optum’s commercial ABA reimbursement policy puts the credential level on each line (HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for doctoral level). ' + KY_PROMPT_PAY,
        ],
        cites: [S.optumNNM, S.optumReimb, S.krs702, S.krs730],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (KRS 304.17A-142 applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification on Provider Express.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD and severity level, confirmed with a validated tool, by a state-licensed clinician.' },
      { title: 'ABA order', desc: 'Optum’s Kentucky section and the statute cover ABA "prescribed or ordered by a licensed health or allied health professional."' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumReimb, S.optumNNM, S.krs142, S.krs144, S.krs138, S.krs607, S.krs702, S.krs730, S.kar18030, S.krs319c010, S.krs319c020, S.krs319c080, S.krs319c090, S.kar43100, S.bacbLic, S.bhFee, S.erisa, S.cfr433],
    deliveryRules: {
      supervision: {
        value: '"Consistent with CASP standards of care, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week." Technicians should be RBTs or otherwise certified as allowed by state mandate, and Optum does not recommend parents serving as their own child’s RBT. Kentucky’s board rule (201 KAR 43:050) governs supervision of licensed assistants and temporary licensees.',
        status: 'verified',
        cites: [S.optumSCC, S.kar43050],
      },
      concurrentBilling: {
        value: 'Not addressed in Optum’s SCC.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual, your agreement, or a written coding determination from Optum.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap; hours must be justified by clinical need, and use below 80 percent of authorized hours over a two-week period must be explained at review. Kentucky’s mandate bars visit limits in fully insured plans.',
        status: 'verified',
        cites: [S.optumSCC, S.krs142],
      },
      noteSignature: {
        value: 'Not addressed in Optum’s SCC.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual documentation standards and your agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Not covered: services that are not ABA "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA; school coordination (teacher training, meetings, observation) is covered (SCC).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      billAsProvider: {
        value: 'Each claim line carries the rendering credential modifier under Optum’s commercial ABA reimbursement policy (HM RBT, HN BCaBA, HO master’s-level BCBA/licensed clinician, HP doctoral). In Kentucky the BCBA must hold a KRS 319C license.',
        status: 'verified',
        cites: [S.optumReimb, S.krs319c020],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion; the benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.krs142],
        verifyVia: 'Provider Express benefits check: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with severity level using validated tools, and progress is reviewed at continued-service review.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: '"A state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis" under DSM-5-TR. Kentucky excludes diagnosis from ABA practice (KRS 319C.010(8)).',
        status: 'verified',
        cites: [S.optumSCC, S.krs319c010],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool from a non-exhaustive list: first-level screens (M-CHAT and others), second-level screens (CARS/CARS-2, RITA-T, STAT), and formal diagnostic tools.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate referral in the SCC; prior authorization is required.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.optumSM, S.krs142],
      },
      telehealth: {
        value: 'Optum’s telehealth billing guide (September 2025): "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157," so the 97151 assessment and 97153 are not on Optum’s commercial telehealth list. For fully insured Kentucky plans, KRS 304.17A-138 requires telehealth coverage equivalent to in person, bars an in-person requirement unless the provider decides it is necessary, and bars PA for telehealth that would not apply in person. Ask Optum how it applies the three-code list to a fully insured Kentucky plan.',
        status: 'plan-dependent',
        cites: [S.optumTele, S.optumSCC, S.krs138],
        verifyVia: 'Optum Provider Express support: ask whether the plan is fully insured in Kentucky and which ABA codes it pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: KY_COMM_AUTH + ' UnitedHealthcare/Optum publishes no Kentucky-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.krs607, S.krs142, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Kentucky-regulated) or self-funded (ERISA).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: KY_COMM_COB,
        status: 'plan-dependent',
        cites: [S.kar18030, S.cfr433],
        verifyVia: 'Ask UnitedHealthcare/Optum at benefits verification for the coordination-of-benefits order.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Kentucky?', a: 'Yes, under Optum’s ABA criteria for ASD, with Kentucky’s KRS 304.17A-142 mandate applied to fully insured plans through Optum’s Kentucky state-mandate section.' },
      { q: 'Does Optum have Kentucky-specific ABA criteria?', a: 'Yes. Since November 2025 Optum’s ABA State Mandates document has a Kentucky commercial section restating KRS 304.17A-142, including utilization review no more than once every 12 months.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in Kentucky?', a: 'Optum’s commercial telehealth list allows only 97155, 97156 and 97157. Fully insured Kentucky plans are also subject to KRS 304.17A-138’s telehealth parity rules, so ask Optum how it applies the list to your plan.' },
      { q: 'Is UnitedHealthcare commercial the same as UnitedHealthcare Community Plan in Kentucky?', a: 'No. UnitedHealthcare Community Plan of Kentucky is a Medicaid MCO with its own rules; this guide covers commercial plans.' },
    ],
  },

  'anthem-bcbs-kentucky': {
    slug: 'anthem-bcbs-kentucky',
    family: 'anthem',
    cardDesc: 'Kentucky’s Blue (Anthem Health Plans of Kentucky): ABA on the 2026 precert list, Anthem-managed; commercial only since Anthem left KY Medicaid in 2025.',
    assessmentPA: {
      value: 'Anthem’s January 2026 list names "Applied behavioral analysis (ABA)" as requiring precertification for KY Blues products without breaking it out by code; whether 97151 itself needs PA is not stated',
      status: 'unverified',
      cites: [S.anthemPA],
      verifyVia: 'Availity (Anthem precertification lookup) or the number on the member’s card: check 97151 and 97152 for the member’s plan.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required: ABA is on the precertification list for "OH, IN, KY Blues products" (updated January 1, 2026), with Anthem as the responsible party',
      status: 'verified',
      cites: [S.anthemPA],
    },
    dxRequired: {
      value: 'Anthem’s resource guide frames adaptive behavior treatment as treatment of autism spectrum disorder; its ABA medical necessity criteria were not available to read',
      status: 'unverified',
      cites: [S.anthemRG],
      verifyVia: 'Anthem’s clinical UM guideline for adaptive behavior treatment (anthem.com medical policies) or Anthem behavioral health UM via the number on the card.',
      blocker: 'document',
    },
    payer: 'Anthem Blue Cross and Blue Shield (Kentucky)',
    state: 'KY', kind: 'commercial',
    pill: 'Payer Guide · Anthem BCBS · Kentucky',
    h1: 'Anthem Blue Cross and Blue Shield ABA coverage in Kentucky: the intake guide.',
    metaTitle: 'Anthem BCBS Kentucky ABA Coverage: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Anthem Blue Cross and Blue Shield covers ABA for Kentucky commercial members: ABA on the 2026 precertification list, Anthem’s ABA billing and documentation rules, Kentucky’s KRS 304.17A-142 mandate, KRS 319C licensure, and the end of Anthem Medicaid in Kentucky.',
    intro: [
      'Anthem Blue Cross and Blue Shield is Kentucky’s Blue, underwritten by Anthem Health Plans of Kentucky, Inc. An Anthem card in Kentucky is commercial (or Medicare): Anthem stopped being a Kentucky Medicaid MCO on January 1, 2025. Kentucky shares one commercial precertification list with Indiana, Missouri, Ohio and Wisconsin, and Anthem’s multi-state ABA provider resource guide covers Kentucky.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, subject to the member’s plan; ABA requires precertification on KY Blues products' },
      { label: 'State mandate', value: 'KRS 304.17A-142 (plans issued or renewed on or after Jan. 1, 2019)' },
      { label: 'Mandate age', value: 'No age limit in the current statute' },
      { label: 'Mandate caps', value: 'None: no maximum annual benefit or visit limit' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'Required: KRS 319C license (BCBA-based) from the Kentucky Applied Behavior Analysis Licensing Board' },
      { label: 'Fee schedule', value: 'Not public — contracted rates; Anthem’s ABA guide lists codes by "per 15-Minutes" unit without amounts' },
    ],
    sections: [
      {
        h2: 'Precertification and Anthem’s ABA billing rules',
        body: [
          'Anthem’s precertification list for Indiana, Kentucky, Missouri, Ohio and Wisconsin (updated January 1, 2026) lists, for "OH, IN, KY Blues products," all facility-based behavioral health care, intensive outpatient, partial hospitalization, residential care, ECT, TMS, intensive in-home behavioral health and "Applied behavioral analysis (ABA)," with Anthem as the responsible party. Anthem’s commercial ABA provider resource guide (June 2025, covering Kentucky) sets the billing rules: a QHP billing 97155 "can only add code 97153 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician"; work by technicians "must show the supervising BCBA or other QHP in box 31"; HM, HN and HO modifiers mark the rendering level; and the record needs start and stop times, with signatures within 30 days of service and treatment plans reviewed at least every six months.',
        ],
        cites: [S.anthemPA, S.anthemRG],
      },
      { h2: 'The Kentucky mandate: what it guarantees', body: [KY_MANDATE_BODY], cites: [S.krs142, S.krs144] },
      { h2: 'Licensure, out-of-state BCBAs and rates', body: [KY_LICENSURE_BODY], cites: [S.krs319c010, S.krs319c020, S.krs319c080, S.krs319c090, S.kar43100, S.krs138, S.bacbLic, S.bhFee] },
      {
        h2: 'Anthem and Kentucky Medicaid; prompt pay',
        body: [
          'DMS says that "Effective Jan. 1, 2025, Anthem is no longer a Medicaid Managed Care Organization, or MCO, in Kentucky," and DMS now contracts with Aetna, Humana, Passport by Molina, UnitedHealthcare and WellCare. A child who had Anthem Medicaid is now in one of those plans. ' + KY_PROMPT_PAY,
        ],
        cites: [S.mcoContracts, S.krs702, S.krs730],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (KRS 304.17A-142 applies) vs. self-funded ERISA or a National Account (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Confirm it is commercial; Anthem no longer offers Kentucky Medicaid.' },
      { title: 'Diagnosis report', desc: 'ASD diagnosis from a licensed clinician (behavior analysts cannot diagnose in Kentucky).' },
      { title: 'ABA order + treatment plan', desc: 'The mandate covers ABA "prescribed or ordered by a licensed health or allied health professional"; Anthem expects plans reviewed at least every six months.' },
    ],
    sources: [S.anthemPA, S.anthemRG, S.mcoContracts, S.krs142, S.krs144, S.krs138, S.krs607, S.krs702, S.krs730, S.kar18030, S.krs319c010, S.krs319c020, S.krs319c080, S.krs319c090, S.kar43100, S.bacbLic, S.bhFee, S.erisa, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'Anthem’s resource guide approves BCBAs and "providers practicing under the direction and supervision of the BCBA," and requires the supervising BCBA or QHP in box 31 for technician work; it sets no numeric ratio. Kentucky’s board rule (201 KAR 43:050) governs supervision of licensed assistants and temporary licensees.',
        status: 'verified',
        cites: [S.anthemRG, S.kar43050],
      },
      concurrentBilling: {
        value: '"A physician or other QHP billing for 97155 can only add code 97153 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician."',
        status: 'verified',
        cites: [S.anthemRG],
      },
      dailyLimits: {
        value: 'Anthem administers NCCI edits, so ABA codes "may have associated MUE limits" aligned with CMS’s published MUEs. Kentucky’s mandate bars visit limits in fully insured plans.',
        status: 'verified',
        cites: [S.anthemRG, S.krs142],
      },
      noteSignature: {
        value: 'Each entry needs author identification and rendering credentials; entries should be made at or shortly after the service and "should not exceed 30 days," with a "Signature date within 30 days of the date of service." Start and stop times are required, and treatment plans must be reviewed or updated at least every six months.',
        status: 'verified',
        cites: [S.anthemRG],
      },
      placeOfService: {
        value: 'POS codes Anthem lists for ABA: 12 home, 11 office/clinic, 99 community, 03 school, 10 telehealth in the home, 02 telehealth outside the home, "Subject to the member’s coverage and reviews by the plan."',
        status: 'verified',
        cites: [S.anthemRG],
      },
      billAsProvider: {
        value: 'Technician services "must show the supervising BCBA or other QHP in box 31 of the CMS claim form," with HM/HN/HO modifiers for the rendering level. In Kentucky the BCBA must hold a KRS 319C license.',
        status: 'verified',
        cites: [S.anthemRG, S.krs319c020],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Anthem’s ABA documents read set no age limit.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.anthemRG, S.krs142],
        verifyVia: 'Availity benefits check: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not stated in the Anthem documents read.',
        status: 'unverified',
        cites: [S.anthemRG],
        verifyVia: 'Anthem’s clinical UM guideline for adaptive behavior treatment, or Anthem behavioral health UM via the number on the card.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'Not stated in the Anthem documents read. Kentucky excludes diagnosis from ABA practice (KRS 319C.010(8)).',
        status: 'unverified',
        cites: [S.anthemRG, S.krs319c010],
        verifyVia: 'Anthem’s clinical UM guideline for adaptive behavior treatment.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'Not stated in the Anthem documents read; the guide stresses standardized assessments for evaluating progress.',
        status: 'unverified',
        cites: [S.anthemRG],
        verifyVia: 'Anthem’s clinical UM guideline for adaptive behavior treatment.',
        blocker: 'document',
      },
      referral: {
        value: 'Anthem’s ABA documents require precertification, not a referral.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.anthemPA, S.krs142],
      },
      telehealth: {
        value: 'Anthem points to its Virtual Visits reimbursement policy and says "Allowed codes may vary"; ABA telehealth bills POS 10 (home) or 02. For fully insured Kentucky plans, KRS 304.17A-138 requires telehealth coverage equivalent to in person, bars an in-person requirement unless the provider decides it is necessary, and lets the plan require a Kentucky-licensed provider.',
        status: 'plan-dependent',
        cites: [S.anthemRG, S.krs138],
        verifyVia: 'Anthem’s Virtual Visits reimbursement policy (allowed virtual services list) for Kentucky, or provider services.',
        blocker: 'document',
      },
      authTurnaround: {
        value: KY_COMM_AUTH + ' Anthem publishes no Kentucky-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.krs607, S.krs142, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Kentucky-regulated), a self-funded group, or a National Account.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: KY_COMM_COB,
        status: 'plan-dependent',
        cites: [S.kar18030, S.cfr433],
        verifyVia: 'Ask Anthem at benefits verification for the coordination-of-benefits order.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Anthem BCBS require prior authorization for ABA in Kentucky?', a: 'Yes. ABA is on Anthem’s January 2026 precertification list for Kentucky Blues products, with Anthem as the responsible party.' },
      { q: 'Is Anthem still a Kentucky Medicaid plan?', a: 'No. Anthem left Kentucky Medicaid managed care on January 1, 2025. Kentucky’s Medicaid MCOs are Aetna Better Health, Humana Healthy Horizons, Passport by Molina, UnitedHealthcare Community Plan and WellCare.' },
      { q: 'Can 97153 and 97155 be billed together with Anthem?', a: 'Only when the technician and the QHP are both face-to-face with the patient at the same time and the QHP is directing the technician.' },
      { q: 'Does Kentucky’s autism mandate apply to my Anthem plan?', a: 'If the plan is fully insured and issued or renewed on or after January 1, 2019, yes: ABA coverage with no age, annual-benefit or visit cap. Self-funded employer plans follow their own documents.' },
    ],
  },
};

import type { PayerConfig, PayerSource } from './types.js';

/* Rhode Island — researched October 2026 from primary sources only.
   eohhs.ri.gov HTML pages sit behind a Cloudflare challenge (403 to curl and WebFetch);
   they were read through the https://r.jina.ai/<url> text proxy. eohhs.ri.gov PDFs under
   /sites/g/files/ download directly with curl. The Medicaid fee schedule itself sits behind
   a click-through license form on eohhs.ri.gov/providers-partners/fee-schedules and could not
   be opened, so Medicaid rates below come from the OHIC 2025 rate review report. Statutes were
   read at webserver.rilegislature.gov (https only). */

const S: Record<string, PayerSource> = {
  eohhsManuals: { title: 'RI EOHHS — Provider Manuals & Guidelines (HBTS certification standards and the HBTS/ABA addendum)', url: 'https://eohhs.ri.gov/providers-partners/provider-manuals-guidelines' },
  hbts: { title: 'RI EOHHS — Certification Standards for Providers of Home Based Therapeutic Services (inclusive of ABA), July 2016', url: 'https://eohhs.ri.gov/sites/g/files/xkgbur226/files/2021-03/HBTSJuly2016.pdf' },
  hbtsAdd: { title: 'RI EOHHS — HBTS/ABA Certification Standards Addendum: multiple provider agencies, XP modifier (06/08/2021)', url: 'https://eohhs.ri.gov/sites/g/files/xkgbur226/files/2023-06/HBTS_ABA%20multiple%20provider%20addendum%206.8.2021.pdf' },
  childSvc: { title: 'RI EOHHS Medicaid Provider Manual — Children Services Policy (EPSDT), updated April 28, 2026', url: 'https://eohhs.ri.gov/providers-partners/provider-manuals-guidelines/medicaid-provider-manual/rehabilitative-services-3' },
  abaFact: { title: 'RI EOHHS — Applied Behavior Analysis (ABA) Therapy Fact Sheet (rev. 10/6/17)', url: 'https://eohhs.ri.gov/sites/g/files/xkgbur226/files/Portals/0/Uploads/Documents/CSHCN/ABAfactsheet10.6.17.pdf' },
  mmc: { title: 'RI EOHHS — Medicaid Managed Care Contracts (Tufts Health Public Plans, UnitedHealthcare of New England, Neighborhood Health Plan of RI)', url: 'https://eohhs.ri.gov/providers-partners/medicaid-managed-care' },
  nhpK: { title: 'EOHHS–Neighborhood Health Plan of RI Medicaid Managed Care Contract, Amendment 21 (full contract, effective July 1, 2026)', url: 'https://eohhs.ri.gov/sites/g/files/xkgbur226/files/2026-08/NHPRI_Amend_21_executed_Fully%20Executed_20260624.pdf' },
  uhcK: { title: 'EOHHS–UnitedHealthcare of New England Medicaid Managed Care Contract, Amendment 21 (full contract, effective July 1, 2026)', url: 'https://eohhs.ri.gov/sites/g/files/xkgbur226/files/2026-08/UHC_Amend_21_Fully%20Executed_20260624.pdf' },
  thpK: { title: 'EOHHS–Tufts Health Public Plans Medicaid Managed Care Contract, Amendment 21 (full contract, effective July 1, 2026)', url: 'https://eohhs.ri.gov/sites/g/files/xkgbur226/files/2026-08/THPP_Amend_21__Fully%20Executed_20260626.pdf' },
  ohic25: { title: 'OHIC — 2025 Social and Human Service Programs Review, Final Report (August 29, 2025)', url: 'https://ohic.ri.gov/sites/g/files/xkgbur736/files/2025-08/2025%20Social%20and%20Human%20Service%20Programs%20Review%20Final%20Report%20August%2029%202025.pdf' },
  fy27: { title: 'RI EOHHS — Fiscal Year 2027 Medicaid Budget Initiatives (OHIC rate increases effective October 1, 2026)', url: 'https://eohhs.ri.gov/initiatives/medicaid-initiatives/fy27-budget-initiatives' },
  spaEpsdt: { title: 'RI EOHHS — Public Notice of Proposed State Plan Amendment: OHIC rate review updates for EPSDT, Early Intervention, Home Health, Hospice, TCM (9/1/2026)', url: 'https://eohhs.ri.gov/sites/g/files/xkgbur226/files/2026-09/Public%20Notice%2026-00XX%20OHIC%20EPSDT_EI_Home%20Health_Hospice_TCM-%20for%20posting.pdf' },
  feeSched: { title: 'RI EOHHS — Fee Schedules (behind a CPT/CDT end-user license form)', url: 'https://eohhs.ri.gov/providers-partners/fee-schedules' },
  paPage: { title: 'RI EOHHS — Prior Authorization (Gainwell form, fax, decision timeframes, provider appeal form)', url: 'https://eohhs.ri.gov/providers-partners/billing-and-claims/prior-authorization' },
  claimsPage: { title: 'RI EOHHS — Claims Processing (time limits for filing claims)', url: 'https://eohhs.ri.gov/providers-partners/billing-and-claims/claims-processing' },
  tele: { title: 'RI EOHHS — Telemedicine Billing Guidance (July 2025, effective September 1, 2025)', url: 'https://eohhs.ri.gov/sites/g/files/xkgbur226/files/2025-07/Telemedicine%20Billing%20Guidance.pdf' },
  evv: { title: 'RI EOHHS — Electronic Visit Verification (EVV)', url: 'https://eohhs.ri.gov/providers-partners/electronic-visit-verification-evv' },
  evvSub: { title: 'RI EOHHS Medicaid Policy 24-02 — EVV "Geo-fence" Distance (EVV applies to personal care and home health agency services), Feb. 27, 2024', url: 'https://eohhs.ri.gov/sites/g/files/xkgbur226/files/2024-02/Subregulatory%20Guidance%20EVV%202.27.24_0.pdf' },
  evvAdd: { title: 'RI EOHHS — Third Party (Alternate) EVV Addendum v1.8, service and procedure code list (July 2021)', url: 'https://eohhs.ri.gov/sites/g/files/xkgbur226/files/2021-07/Addendum_RIEOHHS_altEVV%20v1.8%20.pdf' },
  nhpCMP: { title: 'Neighborhood Health Plan of RI — Clinical Medical Policy BH-001, Behavioral Health: Home and Community Based Services (last reviewed 08/20/2025)', url: 'https://www.nhpri.org/blobnhpri08e0944faa/wp-content/uploads/2025/08/2025.09.01-CMP-BH-001-Behavioral_Health_Home_and_Community_Based_Services.pdf' },
  nhpPP: { title: 'Neighborhood Health Plan of RI — Autism and Developmental Services Payment Policy (posted 7/10/2026)', url: 'https://www.nhpri.org/blobnhpri08e0944faa/wp-content/uploads/2026/07/Autism-and-Developmental-Services-Payment-Policy-7.10.26.pdf' },
  nhpPM: { title: 'Neighborhood Health Plan of RI — Provider Manual (effective 1/1/2026)', url: 'https://www.nhpri.org/wp-content/uploads/2023/08/Provider-Manual.pdf' },
  nhpBH: { title: 'Neighborhood Health Plan of RI — Behavioral Health provider page and FAQ (in-house since September 1, 2025)', url: 'https://www.nhpri.org/providers/provider-resources/behavioralhealth/' },
  nhpSup: { title: 'Neighborhood Health Plan of RI — Behavioral Health Supervisory Billing Payment Policy (03.13.2026; excludes ABA)', url: 'https://www.nhpri.org/wp-content/uploads/2026/03/Behavioral-Health-Supervisory-Billing-Payment-Policy-03.13.2026.pdf' },
  nhpAuth: { title: 'Neighborhood Health Plan of RI — Prior Authorization Reference Guide page (RIte Care guide last updated 2/1/2021)', url: 'https://www.nhpri.org/providers/policies-and-guidelines/prior-authorization-reference/' },
  thpABA: { title: 'Point32Health MNG — Applied Behavior Analysis (ABA) Including Early Intervention for Tufts Health RITogether (effective January 1, 2026)', url: 'https://wwwassets.point32health.org/documents/aba-early-intervention-ri-together-mng' },
  thpGrid: { title: 'Point32Health — Tufts Health RITogether Behavioral Health Prior Authorization and Notification Grid (updated 7/2026)', url: 'https://www.point32health.org/documents/rit-bh-pa-notification-grid' },
  thpClaims: { title: 'Tufts Health Public Plans Provider Manual 2026 — Claim Requirements, Coordination of Benefits and Dispute Guidelines', url: 'https://www.point32health.org/documents/thpp05claimspm' },
  thpUM: { title: 'Tufts Health Public Plans Provider Manual 2026 — Utilization Management Guidelines', url: 'https://www.point32health.org/documents/thpp-06-um-pm' },
  thpBH: { title: 'Tufts Health Public Plans Provider Manual 2026 — Behavioral Health (Rhode Island-specific services incl. HBTS)', url: 'https://www.point32health.org/documents/thpp-08-bh-pm' },
  uhcPM: { title: 'UnitedHealthcare Community Plan of Rhode Island — 2026 Care Provider Manual (PMI 08102026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/RI-UHCCP-Care-Provider-Manual.pdf' },
  optRI: { title: 'Optum Provider Express — Welcome Rhode Island Behavioral Health Providers (RI Medicaid enrollment requirement)', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/our-network/welcomeNtwk/wRI.html' },
  optRItele: { title: 'Optum Provider Alert BH5027 — RI Telehealth/Telephone-Only Guidance, Optum NHPRI & UHC (08/2023)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/ourNetworkMain/welcomeNtwk/RI/2023/5027_RI%20TMH_Guide.pdf' },
  ch2011: { title: 'R.I. Gen. Laws ch. 27-20.11 — Autism Spectrum Disorders (§§ 27-20.11-1 to -8)', url: 'https://webserver.rilegislature.gov/Statutes/TITLE27/27-20.11/INDEX.htm' },
  m3: { title: 'R.I. Gen. Laws § 27-20.11-3 — Scope of coverage (benefits continue until age 15; in-state services)', url: 'https://webserver.rilegislature.gov/Statutes/TITLE27/27-20.11/27-20.11-3.htm' },
  m4: { title: 'R.I. Gen. Laws § 27-20.11-4 — Medical necessity; treatment plan signed by listed specialists, updates no more than quarterly', url: 'https://webserver.rilegislature.gov/Statutes/TITLE27/27-20.11/27-20.11-4.htm' },
  m7: { title: 'R.I. Gen. Laws § 27-20.11-7 — Credentials (licensed applied behavior analyst, supervised assistant, or psychologist)', url: 'https://webserver.rilegislature.gov/Statutes/TITLE27/27-20.11/27-20.11-7.htm' },
  lic: { title: 'R.I. Gen. Laws ch. 5-86 — Licensing of Applied Behavior Analysts (index)', url: 'https://webserver.rilegislature.gov/Statutes/TITLE5/5-86/INDEX.htm' },
  lic2: { title: 'R.I. Gen. Laws § 5-86-2 — Definitions (practice of ABA; services provided only when prescribed by listed specialists), as amended effective June 30, 2025', url: 'https://webserver.rilegislature.gov/Statutes/TITLE5/5-86/5-86-2.htm' },
  lic9: { title: 'R.I. Gen. Laws § 5-86-9 — Qualifications and examinations for licensing (BCBA exam, active BACB status)', url: 'https://webserver.rilegislature.gov/Statutes/TITLE5/5-86/5-86-9.htm' },
  lic21: { title: 'R.I. Gen. Laws § 5-86-21 — Persons and practices exempt (out-of-state analysts: 10 calendar days a year)', url: 'https://webserver.rilegislature.gov/Statutes/TITLE5/5-86/5-86-21.htm' },
  lic26: { title: 'R.I. Gen. Laws § 5-86-26 — Supervision (assistant analysts, aides)', url: 'https://webserver.rilegislature.gov/Statutes/TITLE5/5-86/5-86-26.htm' },
  pp: { title: 'R.I. Gen. Laws § 27-18-61 — Prompt processing of claims (40 days written / 30 days electronic, 12% interest)', url: 'https://webserver.rilegislature.gov/Statutes/TITLE27/27-18/27-18-61.htm' },
  ur6: { title: 'R.I. Gen. Laws § 27-18.9-6 — Non-administrative benefit determination notifications (decision timeframes)', url: 'https://webserver.rilegislature.gov/Statutes/TITLE27/27-18.9/27-18.9-6.htm' },
  ur7: { title: 'R.I. Gen. Laws § 27-18.9-7 — Internal appeal procedural requirements', url: 'https://webserver.rilegislature.gov/Statutes/TITLE27/27-18.9/27-18.9-7.htm' },
  ohic14: { title: '230-RICR-20-30-14 — Benefit Determination and Utilization Review (OHIC; effective 01/04/2022)', url: 'https://rules.sos.ri.gov/Regulations/part/230-20-30-14' },
  cob: { title: '230-RICR-20-30-2 — Coordination of Benefits (formerly Insurance Regulation 48)', url: 'https://rules.sos.ri.gov/regulations/part/230-20-30-2' },
  tm4: { title: 'R.I. Gen. Laws § 27-81-4 — Telemedicine Coverage Act: coverage of telemedicine services', url: 'https://webserver.rilegislature.gov/Statutes/TITLE27/27-81/27-81-4.htm' },
  tm3: { title: 'R.I. Gen. Laws § 27-81-3 — Telemedicine Coverage Act: definitions (originating site may include the home; Medicaid MCOs are "health insurers")', url: 'https://webserver.rilegislature.gov/Statutes/TITLE27/27-81/27-81-3.htm' },
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; Exhibit A covers Maryland only)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (PCOMM-2025-225, March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026; includes a Rhode Island regulatory addendum)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA; no Rhode Island section)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumNNM: { title: 'Optum National Network Manual (effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  bcbsriASD: { title: 'BCBSRI Payment Policy — Autism Spectrum Disorders Mandate (effective 08/01/2026, last reviewed 04/15/2026)', url: 'https://www.bcbsri.com/providers/sites/providers/files/policies/2026/07/2026%20Autism%20Spectrum%20Disorders%20Mandate.pdf' },
  bcbsriBH: { title: 'BCBSRI Payment Policy — Behavioral Health Outpatient Professional Services (effective 05/01/2026)', url: 'https://www.bcbsri.com/providers/sites/providers/files/policies/2026/08/2026%20Behavioral%20Health%20Outpatient%20Professional%20Services.pdf' },
  bcbsriTF: { title: 'BCBSRI Payment Policy — Timely Filing (last reviewed 11/05/2025)', url: 'https://www.bcbsri.com/providers/sites/providers/files/policies/2025/11/2025%20Timely%20Filing.pdf' },
  bcbsriTele: { title: 'BCBSRI Payment Policy — Telemedicine/Telephone Services for Commercial Products and Medicare Advantage Plans (last updated 06/03/2026)', url: 'https://www.bcbsri.com/providers/sites/providers/files/policies/2026/06/Telemedicine%20Services%20for%20Commercial%20and%20Medicare%20Advantage%20Plans6.2026.pdf' },
  bcbsriGrid: { title: 'BCBSRI — 2026 Telemedicine Commercial Codes Grid (ABA codes 97151–97158, 0362T, 0373T)', url: 'https://www.bcbsri.com/providers/sites/providers/files/support/2026/02/2026%20Telemedicine%20_Commercial%20Codes%20Grid%20.xlsx' },
  bcbsriPA: { title: 'BCBSRI — Preauthorization (behavioral health notification list)', url: 'https://www.bcbsri.com/providers/preauthorization' },
};

/* ---- Shared Rhode Island Medicaid layer ---- */
const RI_HBTS_RATES =
  'Rhode Island Medicaid does not pay ABA on the CPT codes 97151–97158. OHIC’s 2025 rate review says HBTS and ABA "currently use the same procedure codes," and both Neighborhood’s Medicaid payment policy and Tufts Health RITogether’s ABA guideline list only HCPCS codes. The fee-for-service rates OHIC reported as current in August 2025 are: T1024 home-based specialized treatment and treatment support $33.30 per 15 minutes; H0046 lead therapy $38.67 per 30 minutes; H0046-HO clinical supervision by a master’s-level clinician $59.07 and H0046-HP by a doctoral-level clinician $69.81, both per 30 minutes; H2014 specialized treatment consultation and H2014-HO $29.54, H2014-HP $34.91, per 15 minutes; T1016 treatment coordination $21.98 and T1013 interpretation $27.48 per 15 minutes. OHIC recommended its independent rate model figures instead (T1024 $36.14, H0046 $35.98, H0046-HO $61.49, H0046-HP $65.96, H2014 $39.44, H2014-HO $37.23, H2014-HP $39.85, T1016 $21.67, T1013 $28.34). The FY2027 budget adopts OHIC’s recommendations effective October 1, 2026, except where a rate would exceed Medicare. EOHHS says the October 1, 2026 fee schedule "is not yet posted" and the increases need federal approval, so rates will be applied retroactively once it is. EOHHS also uses these FFS rates as a minimum fee schedule the health plans must pay.';

const RI_OOS_BCBA =
  'Rhode Island licenses behavior analysts, so a BCBA licensed elsewhere cannot simply treat a Rhode Island child. Under R.I. Gen. Laws § 5-86-21(g), an analyst "licensed or certified in another state" may practice in Rhode Island without a Rhode Island license "for up to ten (10) calendar days per calendar year with no more than five (5) days of this activity occurring consecutively." Beyond that, the clinician needs a Rhode Island license (LBA) from the Department of Health board, which requires passing the BCBA exam and keeping active BACB status (§ 5-86-9). Chapter 5-86 has no telehealth exception and no reciprocity section. For Medicaid telehealth, EOHHS is explicit: an out-of-state provider may serve Medicaid members by telehealth only with "an active and unrestricted license in the state of Rhode Island" and Rhode Island Medicaid enrollment; "Out-of-state licensure alone does not confer eligibility."';

const MEDICAID_TELE =
  'Telehealth is a covered mode for any medically necessary Medicaid service. The 2026 managed care contracts apply the Telemedicine Coverage Act (R.I. Gen. Laws ch. 27-81): a plan may not exclude a service "solely because it is provided through Telemedicine," may not pay behavioral health providers less than in person, may not impose stricter prior authorization, and may not restrict originating sites; the home counts "where Medically Necessary and Clinically Appropriate." EOHHS’s Telemedicine Billing Guidance (effective September 1, 2025) adds that the patient must be present in real time, the service must meet the in-person standard of care, audio-only needs a documented reason and verbal consent, and providers "must have availability for both telehealth and in-person services." Home health and home care agencies are on its list of excluded provider types; HBTS and ABA agencies are not. No EOHHS document read lists telehealth rules for the HBTS codes specifically (which components may be remote, or a modifier).';

/* ---- Shared Rhode Island commercial layer ---- */
const RI_MANDATE_BODY =
  'Rhode Island’s autism mandate is R.I. Gen. Laws chapter 27-20.11, in force for group contracts delivered, issued or renewed on or after January 1, 2012. It requires coverage for "pharmaceuticals, applied behavior analysis, physical therapy, speech therapy, psychology, psychiatric and occupational therapy services for the treatment of autism spectrum disorders," and benefits "shall continue until the covered individual reaches age fifteen (15)." The current text carries no dollar cap on ABA. Three limits matter at intake. First, reach: the chapter applies to group health insurance but "shall not apply to contracts, plans or group policies subject to the Small Employer Health Insurance Availability Act," Medical Assistance, or the Individual Health Insurance Coverage Act, and self-funded employer plans answer to ERISA, not the state. Second, place: benefits "apply only to services delivered within the state of Rhode Island," unless preauthorization shows the services are not available in Rhode Island from an in-network provider. Third, staffing: anyone "providing or supervising" ABA must be a Department of Health licensed applied behavior analyst, a licensed assistant analyst under supervision, or a licensed psychologist (§ 27-20.11-7). An insurer may require a treatment plan with frequency and duration signed by a child psychiatrist, a behavioral developmental pediatrician, a child neurologist, or a licensed psychologist trained in child psychology, updated "no more frequently than on a quarterly basis" (§ 27-20.11-4(d)). Cost sharing may be no more restrictive than for other conditions, and the mandate does not change a school district’s IEP or IFSP duties.';

const RI_LICENSURE_BODY =
  'Rhode Island licenses behavior analysts under R.I. Gen. Laws chapter 5-86, through a board within the Department of Health. The titles are licensed applied behavior analyst (LBA) and licensed assistant applied behavior analyst (LABA). An LBA applicant needs a graduate degree, supervised fieldwork aligned with BACB requirements, a passing BCBA exam, and active BACB status (§ 5-86-9). Two provisions reach every payer. The statute’s definition of practice says ABA services "are provided by a person licensed under this chapter only when applied behavior analysis services are prescribed by a child psychiatrist, a behavioral developmental pediatrician, a child neurologist, or a licensed psychologist with training in child psychology" (§ 5-86-2(8)), so get that prescription on file before treatment starts. And the supervision section lets an LBA supervise assistant analysts and "applied behavior analyst aides," with "close supervision" of aides and no delegation of evaluation or program changes (§ 5-86-26). ' + RI_OOS_BCBA;

const RI_CLAIMS_BODY =
  'Rhode Island’s prompt-pay statute, R.I. Gen. Laws § 27-18-61, requires a health plan to pay a complete claim "within forty (40) calendar days following the date of receipt of a complete written claim or within thirty (30) calendar days following the date of receipt of a complete electronic claim," to tell the provider within 30 days why a claim is denied or pended, and to pay 12% annual interest on late complete claims. The plan is not in violation for a claim "initially submitted more than ninety (90) days after the service is rendered," so bill promptly even where the contract allows longer; the actual filing limit is set by each carrier’s contract. For prior authorization of a fully insured plan, OHIC’s utilization review rule (230-RICR-20-30-14) and § 27-18.9-6 set the clocks: pre-service decisions within 15 calendar days (extendable once by 15), urgent within 72 hours, concurrent reviews within 24 hours. Appeals: the plan must give at least 180 calendar days to appeal an adverse determination, decide a pre-service appeal within 30 calendar days, decide an expedited appeal within 72 hours, and keep paying an ongoing course of treatment while the appeal is pending (§ 27-18.9-7).';

const MANDATE_AGE_TAIL =
  ' For fully insured large-group Rhode Island plans, R.I. Gen. Laws § 27-20.11-3(b) carries the mandate only "until the covered individual reaches age fifteen (15)"; the statute has no dollar cap. Small-group and individual plans are outside chapter 27-20.11, and self-funded ERISA plans set their own terms.';

const MANDATE_REFERRAL_TAIL =
  ' Rhode Island adds a licensing-law prescription rule that applies whatever the plan says: a licensed behavior analyst provides ABA "only when applied behavior analysis services are prescribed by a child psychiatrist, a behavioral developmental pediatrician, a child neurologist, or a licensed psychologist with training in child psychology" (R.I. Gen. Laws § 5-86-2(8)). For a mandate plan, the insurer may also require a treatment plan signed by one of those specialists, updated no more than quarterly (§ 27-20.11-4(d)).';

const commercialTurnaround = (p: string) =>
  `Depends on how the plan is funded. Fully insured Rhode Island plans follow R.I. Gen. Laws § 27-18.9-6 and OHIC rule 230-RICR-20-30-14: pre-service decisions "within a reasonable period of time appropriate to the medical circumstances," before the service, and "no later than fifteen (15) calendar days after the receipt of the claim," extendable once by 15 days for special circumstances; urgent requests within 72 hours; concurrent requests within 24 hours, and before the authorized period runs out if the request comes at least 24 hours ahead. If information is missing on an urgent request, the plan must say so within 24 hours and give at least 48 hours to respond. A reviewer may not retrospectively deny an authorized service unless the approval rested on inaccurate information or the care did not follow the submitted plan. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours. ${p} publishes no Rhode Island-specific ABA turnaround or reauthorization lead time.`;

const commercialCob = (p: string) =>
  `For a child on two group plans, Rhode Island follows the birthday rule: for parents who are married or living together, "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan," and if both share a birthday, the plan that has covered a parent longest (230-RICR-20-30-2.6). For separated parents a court decree controls; without one, the custodial parent’s plan pays first, then the custodial parent’s spouse’s, then the non-custodial parent’s. That rule binds state-regulated plans; a self-funded plan sets its own order. If the child also has Rhode Island Medicaid, ${p} pays first: Medicaid is payer of last resort (42 CFR 433.139), and the Medicaid health plans require the primary carrier’s EOB with the claim. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).`;

const COMMERCIAL_TELE_STATE =
  ' For a Rhode Island plan, the Telemedicine Coverage Act (R.I. Gen. Laws § 27-81-4) bars excluding a service "solely because the healthcare service is provided through telemedicine," requires in-network behavioral health telemedicine to be reimbursed "at rates not lower than services delivered by the same provider through in-person methods," and bars stricter prior authorization for telemedicine; the originating site "can include a patient’s home" (§ 27-81-3). Self-funded employer plans are outside the state act.';

export const rhodeIslandPayers: Record<string, PayerConfig> = {
  'rhode-island-medicaid': {
    slug: 'rhode-island-medicaid',
    cardDesc: 'ABA is a subset of Home Based Therapeutic Services (HBTS) under EPSDT, carved in to three MCOs; billed on HCPCS codes, not 97151–97158.',
    assessmentPA: {
      value: 'Fee-for-service: no separate assessment PA code. The EOHHS HBTS standards list prior authorization only for direct services (T1024 TG specialized treatment, T1024 TF treatment support); consultation, clinical supervision, lead therapy and treatment coordination codes are on the "Non-PA Services" list. Health plan members follow the plan’s rules',
      status: 'verified',
      cites: [S.hbts],
    },
    treatmentPA: {
      value: 'Fee-for-service: yes. "Reimbursement for HBTS requires prior authorization (PA)," sent weekly on a batch form to EOHHS before services start; treatment plans are approved for 12 months with 6-month progress reports. Health plan members: "Providers shall follow the procedures established by third party payers"',
      status: 'verified',
      cites: [S.hbts, S.paPage],
    },
    dxRequired: {
      value: 'A diagnosis is required but autism is not the only one. HBTS (which includes ABA) requires "A formal Behavioral Health or Medical diagnosis including at a minimum, a clinical diagnostic interview, made within 3 years by a qualified licensed health care professional," with functional impairment. EOHHS’s ABA fact sheet names "a cognitive, developmental and/or an Autism Spectrum Disorder" diagnosis',
      status: 'verified',
      cites: [S.hbts, S.abaFact],
    },
    payer: 'Rhode Island Medicaid',
    state: 'RI', kind: 'state-medicaid',
    pill: 'Payer Guide · Rhode Island Medicaid',
    h1: 'Rhode Island Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Rhode Island Medicaid ABA Coverage, HBTS Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Rhode Island Medicaid covers ABA: a subset of Home Based Therapeutic Services (HBTS) for children under 21, carved in to Neighborhood Health Plan of RI, UnitedHealthcare Community Plan and Tufts Health RITogether, billed on HCPCS codes, with EOHHS certification, published rates and state licensure for behavior analysts.',
    intro: [
      'Rhode Island Medicaid does not run ABA as a stand-alone program. It is a subset of Home Based Therapeutic Services (HBTS), the EOHHS-certified home and community service for Medicaid children with chronic, moderate to severe developmental, cognitive, medical or psychiatric conditions. The 2016 EOHHS certification standards, still the ones EOHHS posts, describe ABA as "Subset of HBTS," delivered by provider agencies EOHHS has approved to run an ABA program, with extra lead therapy and clinical supervision hours that "can only be provided for ABA recognized providers."',
      'Two facts shape every Rhode Island Medicaid ABA referral. The child’s health plan pays: the 2026 managed care contracts require Neighborhood Health Plan of Rhode Island, UnitedHealthcare Community Plan and Tufts Health Public Plans to provide HBTS and ABA "to any Medicaid member under age 21, per Federal EPSDT regulation." And billing runs on HCPCS codes (T1024, H0046, H2014, T1016), not on the CPT 97151–97158 codes commercial payers use, with fee-for-service rates set through OHIC’s rate review.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as a subset of HBTS for Medicaid members under 21 (EPSDT)' },
      { label: 'Structure', value: 'Carved in to managed care: Neighborhood Health Plan of RI, UnitedHealthcare Community Plan, Tufts Health RITogether; FFS for others' },
      { label: 'Provider certification', value: 'EOHHS HBTS certification, with separate EOHHS approval to run an ABA program (center-based ABA also needs EOHHS approval)' },
      { label: 'Codes', value: 'HCPCS: T1024 (direct), H0046 (lead therapy, supervision), H2014 (consultation), T1016, T1013; not 97151–97158' },
      { label: 'FFS rates (current per OHIC 2025)', value: 'T1024 $33.30/15 min · H0046 $38.67/30 min · H0046-HO $59.07 · H0046-HP $69.81/30 min; OHIC increases enacted from 10/1/2026, pending CMS' },
      { label: 'FFS prior auth', value: 'Required for T1024 direct services; weekly batch form to EOHHS' },
      { label: 'Licensure', value: 'Yes: LBA / LABA licensed by the RI Department of Health (R.I. Gen. Laws ch. 5-86)' },
      { label: 'EVV', value: 'Not required for HBTS/ABA: EOHHS’s EVV covers personal care, homemaker and home health' },
    ],
    sections: [
      {
        h2: 'Where ABA sits: HBTS under EPSDT, then the child’s health plan',
        body: [
          'EPSDT "applies to all children and youth under 21 years old who are enrolled in Medicaid," and EOHHS says the benefit "does not allow for ‘hard limits’ on services," with prior authorization "required for all EPSDT services that are not in the normal scope of covered services." HBTS is how Rhode Island delivers intensive home and community behavioral treatment under that benefit. Its eligibility runs from birth to the 21st birthday for children eligible through SSI, Katie Beckett (through age 18), adoption subsidy, RIte Care or RIte Share, with a chronic (12 months or more) moderate to severe condition that significantly compromises functioning. ABA discrete trial intervention is one form of HBTS specialized treatment, offered "through approved ABA provider-agencies."',
          'EOHHS posts three Medicaid managed care contracts, each at Amendment 21 effective July 1, 2026: Tufts Health Public Plans, UnitedHealthcare of New England, and Neighborhood Health Plan of Rhode Island. All three contain the same children’s services attachment. It says HBTS, PASS and respite "have historically been accessible outside of the MCO’s scope of benefits through Medicaid Fee- For- Services," that EOHHS now integrates them, and that "The Contractor must provide these services to any Medicaid member under age 21." Each plan designs its own level-of-care criteria and payment method, both subject to EOHHS approval, and must contract with a named list of HBTS and ABA agencies. So the first intake question is which plan is on the card.',
        ],
        cites: [S.childSvc, S.hbts, S.mmc, S.nhpK, S.uhcK, S.thpK],
      },
      {
        h2: 'Fee-for-service: certification, prior authorization and the HBTS rates',
        body: [
          'An agency becomes an HBTS provider by EOHHS certification. EOHHS accepts applications on an ongoing basis, reviews them in writing (allow "a minimum of two months"), and approves for an initial three years; an agency that wants to deliver ABA answers the separate Appendix 6 questions on curriculum, skills assessment, teaching procedures, functional assessment and staff training, and center-based ABA needs Appendix 7 approval. For fee-for-service members, "Prior authorization from each HBTS provider using a batch form shall be sent once a week, prior to the start date of service, to EOHHS." EOHHS’s general prior authorization page says the state responds to standard requests "within 7 days" and expedited ones within 72 hours. Treatment hours must be justified by medical necessity "up to 20 hours" a week for HBTS, and up to 25 when HBTS and PASS are combined.',
          RI_HBTS_RATES,
        ],
        cites: [S.hbts, S.paPage, S.ohic25, S.fy27, S.spaEpsdt, S.feeSched, S.nhpPP, S.thpABA],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [
          'Rhode Island licenses behavior analysts (R.I. Gen. Laws ch. 5-86). The HBTS standards require clinical supervisors and treatment consultants to hold a Rhode Island license (a BCBA is on both lists), and add that "EOHHS will only allow the provision of Clinical Supervision and Treatment Consultation by individuals in possession of a BCBA" among behavior analysts. For a clinician licensed in another state, the standards ask the agency to show an active license from the issuing state, a pending Rhode Island application, and then confirm the Rhode Island license.',
          RI_OOS_BCBA,
        ],
        cites: [S.hbts, S.lic, S.lic9, S.lic21, S.tele],
      },
      {
        h2: 'Claims operations: filing limits, EVV, appeals',
        body: [
          'Fee-for-service claims go to Gainwell Technologies and must be received "within 365 days of the date of service"; claims with another insurer must be filed within 90 days of that payer’s EOB when the service is over a year old. Claims are processed about every two weeks and paid by direct deposit only. A provider can appeal a denied fee-for-service prior authorization with EOHHS’s Provider Appeal Form, but to appeal for the member the provider must be designated the member’s authorized representative. EVV does not reach ABA: EOHHS says "Electronic visit verification (EVV) is required for Personal Care and Home Health Care Agency services provided in the home," and its EVV service and procedure code list contains personal care, homemaker and home health aide codes, not HBTS codes. In managed care, the contracts define timely payment as "within thirty (30) days of receipt of a ‘clean claim’"; each plan sets its own filing limit and appeal window (see the plan guides).',
        ],
        cites: [S.claimsPage, S.paPage, S.evvSub, S.evvAdd, S.evv, S.nhpK],
      },
      {
        h2: 'Telehealth',
        body: [MEDICAID_TELE],
        cites: [S.nhpK, S.tm4, S.tm3, S.tele],
      },
    ],
    collect: [
      { title: 'Which Medicaid card', desc: 'Neighborhood Health Plan of RI, UnitedHealthcare Community Plan, Tufts Health RITogether, or fee-for-service. The plan owns authorization and payment.' },
      { title: 'Diagnosis within 3 years', desc: 'A formal behavioral health or medical diagnosis with at least a clinical diagnostic interview, made within 3 years by a licensed professional.' },
      { title: 'Physician’s prescription', desc: 'HBTS is based on medical necessity "as documented by a physician’s prescription," obtained by the agency.' },
      { title: 'Other insurance', desc: 'EOHHS requires proof of commercial coverage; commercial pays ABA first, Medicaid after.' },
      { title: 'IEP / school services', desc: 'HBTS reinforces but does not replace IEP or IFSP services; collect the current IEP.' },
    ],
    sources: [S.eohhsManuals, S.hbts, S.hbtsAdd, S.childSvc, S.abaFact, S.mmc, S.nhpK, S.uhcK, S.thpK, S.ohic25, S.fy27, S.spaEpsdt, S.feeSched, S.paPage, S.claimsPage, S.tele, S.evv, S.evvSub, S.evvAdd, S.lic, S.lic9, S.lic21, S.tm4, S.cfr440, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'Clinical supervision is "a required component of HBTS for both Specialized Treatment and Treatment Support," provided only by Rhode Island licensed clinicians (LICSW, LCSW, MFT, mental health counselor, psychologist, or BCBA). The 2016 standards changed supervision "from 2 hours per week to 8 hours total per month." The managed care contracts add that the supervisor must "Observe worker in the home with the child implementing the Treatment Plan on a monthly basis" and provide group supervision when two or more workers treat a child. ABA "can be overseen by a Board Certified Behavior Analyst (BCBA) or a licensed trained professional (e.g., Psychologist)"; the lead therapist reports to the behavior analyst or clinical supervisor.',
        status: 'verified',
        cites: [S.hbts, S.nhpK],
      },
      concurrentBilling: {
        value: 'Not addressed in any EOHHS source read. The HBTS codes separate direct service (T1024) from clinical supervision (H0046-HO/HP) and lead therapy (H0046), but no document says whether they may be billed for the same clock time. Two agencies may serve one child: the 2021 addendum has the secondary agency bill with an XP modifier.',
        status: 'unverified',
        cites: [S.hbts, S.hbtsAdd],
        verifyVia: 'EOHHS Medicaid Customer Service Help Desk, (401) 784-8100, or the EOHHS children’s services administrator named on the HBTS/ABA addendum; ask whether H0046-HO and T1024 may overlap.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No current per-day ceiling was found in a document we could open (the fee schedule is behind a license form). The 2021 HBTS/ABA addendum’s grid lists maximum units per day (T1024 20 units of 30 minutes; T1016 16 of 15 minutes; H0046, H0046-HO and H0046-HP 12 of 30 minutes; S9446 6), but T1024 has since moved to a 15-minute unit. Weekly: HBTS hours must be justified "up to 20 hours" a week, up to 25 with PASS; Neighborhood applies the 20 hours "excluding ABA programs." EPSDT allows no hard limits.',
        status: 'verified',
        cites: [S.hbtsAdd, S.hbts, S.ohic25, S.nhpCMP, S.childSvc],
      },
      noteSignature: {
        value: 'The treatment plan "is regarded as a prescription for services and must be signed by" a Licensed Practitioner of the Healing Arts, and "Parents/Caregivers/Guardians must sign all proposed Treatment Plans." Record entries must be "dated and authenticated," changes in the client’s condition are "recorded in the client record at the time of service provision and signed by the service provider," and "The client record will be the basis for billing all service hours." Plans are reviewed at least every six months.',
        status: 'verified',
        cites: [S.hbts, S.nhpK],
      },
      placeOfService: {
        value: 'HBTS is delivered "in a child’s home, community, or outpatient setting"; center-based ABA is "reserved for EOHHS approved providers." HBTS "is not intended to replace or substitute for educational services," and Neighborhood excludes "Services provided in a school setting as part of the individual education plan (IEP)."',
        status: 'verified',
        cites: [S.hbts, S.nhpPP],
      },
      billAsProvider: {
        value: 'HBTS is billed by the EOHHS-certified provider agency on HCPCS codes; when two agencies serve one child, "The primary agency will bill for services as usual" and the secondary adds modifier XP. Clinician level is shown by modifier (HO master’s, HP doctoral). No EOHHS source read says whose individual NPI goes in the rendering field on fee-for-service claims.',
        status: 'unverified',
        cites: [S.hbtsAdd, S.hbts],
        verifyVia: 'Gainwell Technologies provider representative or the Medicaid Customer Service Help Desk, (401) 784-8100: ask which NPI goes in the rendering field for T1024 and H0046.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21: HBTS covers "Children birth to their 21st birthday who are Medicaid eligible," and EPSDT applies to all Medicaid members under 21. Katie Beckett eligibility runs through age 18.',
        status: 'verified',
        cites: [S.hbts, S.childSvc],
      },
      dxRecency: {
        value: 'Within 3 years. Treatment plan approval needs a formal diagnosis "made within 3 years by a qualified licensed health care professional," and "A previous evaluation by a licensed mental health professional must have taken place within three years prior." EOHHS’s 2017 ABA fact sheet said "within the last two years"; Neighborhood’s 2026 policy says three.',
        status: 'verified',
        cites: [S.hbts, S.abaFact, S.nhpPP],
      },
      diagnosingProviders: {
        value: 'A "qualified licensed health care professional" (diagnosis) and a "licensed mental health professional" (the evaluation within 3 years). The state names no narrower list for Medicaid; separately, the licensing law has a licensed analyst provide ABA only when prescribed by a child psychiatrist, behavioral developmental pediatrician, child neurologist or child-trained licensed psychologist.',
        status: 'verified',
        cites: [S.hbts, S.lic2],
      },
      diagnosticTools: {
        value: 'The state requires "at a minimum, a clinical diagnostic interview," with neuropsychological, psychological, educational testing or a language evaluation "as necessary." It names no specific instrument; the health plans do (see their guides).',
        status: 'verified',
        cites: [S.hbts],
      },
      referral: {
        value: 'Yes: HBTS is "based upon medical necessity, as documented by a physician’s prescription," and "Prescriptions for service shall be obtained by the provider-agency." The treatment plan itself must be signed by a Licensed Practitioner of the Healing Arts. R.I. Gen. Laws § 5-86-2(8) separately has a licensed analyst provide ABA only when prescribed by a child psychiatrist, behavioral developmental pediatrician, child neurologist or child-trained licensed psychologist.',
        status: 'verified',
        cites: [S.hbts, S.lic2],
      },
      telehealth: {
        value: MEDICAID_TELE,
        status: 'verified',
        cites: [S.nhpK, S.tm4, S.tm3, S.tele],
      },
      authTurnaround: {
        value: 'Fee-for-service: EOHHS "will respond to standard prior authorization requests within 7 days of their submission. Expedited or urgent requests will be responded to within 72 hours," matching the federal floor in effect since January 1, 2026 (42 CFR 440.230(e)). A request can come back deferred for more information. Managed care: the 2026 contracts still print 14 calendar days for standard decisions, but for rating periods starting on or after January 1, 2026 federal law caps it at 7 (42 CFR 438.210(d)) (the 2026 Rhode Island contract amendments are effective July 1, 2026).',
        status: 'verified',
        cites: [S.paPage, S.cfr440, S.nhpK, S.cfr438],
      },
      coordinationOfBenefits: {
        value: 'Medicaid pays last. For ABA, "EOHHS requires proof of commercial insurance coverage," and "Medicaid will assume responsibility for payment of the ABA treatment once the commercial health care coverage benefit has been exhausted. Payment will revert back to the commercial insurance at the start of every benefit year." Deductibles and copayments may be covered by Medicaid up to its allowable amounts. The contracts make "Rhode Island Medicaid … the payor of last resort for all Covered Services." Because the commercial mandate runs only until age 15, check whether the commercial plan still covers ABA for an older child before billing Medicaid as secondary.',
        status: 'verified',
        cites: [S.hbts, S.nhpK, S.cfr433, S.m3],
      },
    },
    faq: [
      { q: 'Does Rhode Island Medicaid cover ABA therapy?', a: 'Yes, for members under 21, as a subset of Home Based Therapeutic Services (HBTS). Most children get it through their health plan: Neighborhood Health Plan of RI, UnitedHealthcare Community Plan or Tufts Health RITogether.' },
      { q: 'Does Rhode Island Medicaid pay ABA on 97153?', a: 'No. Rhode Island Medicaid bills ABA on the HBTS HCPCS codes (T1024 direct service, H0046 lead therapy and clinical supervision, H2014 consultation, T1016 coordination). OHIC notes that HBTS and ABA "currently use the same procedure codes."' },
      { q: 'What does Rhode Island Medicaid pay for ABA?', a: 'Per OHIC’s 2025 report, current FFS rates are T1024 $33.30 per 15 minutes, H0046 lead therapy $38.67 per 30 minutes, and clinical supervision $59.07 (master’s) or $69.81 (doctoral) per 30 minutes. OHIC-recommended increases (T1024 to $36.14) are budgeted from October 1, 2026, pending federal approval; the plans must pay at least the FFS rates.' },
      { q: 'Can a BCBA licensed in another state treat a Rhode Island Medicaid member, including by telehealth?', a: 'Only briefly without a Rhode Island license: 10 calendar days a year, no more than 5 in a row (R.I. Gen. Laws § 5-86-21(g)). For Medicaid telehealth EOHHS requires an active Rhode Island license and Rhode Island Medicaid enrollment; out-of-state licensure alone does not qualify.' },
      { q: 'Does EVV apply to ABA in Rhode Island?', a: 'No. EOHHS applies EVV to personal care, homemaker and home health agency services, and its EVV code list has no HBTS codes.' },
      { q: 'What is the timely filing limit for Rhode Island Medicaid?', a: 'Fee-for-service claims must reach Gainwell within 365 days of the date of service. Each health plan sets its own limit: 180 days for Neighborhood, 90 days for Tufts Health RITogether.' },
    ],
  },

  'neighborhood-health-plan-rhode-island': {
    slug: 'neighborhood-health-plan-rhode-island',
    cardDesc: 'RI Medicaid plan; ABA is a subset of HBTS (HCPCS codes), managed in-house since 9/1/2025; its exchange plans cover ABA to age 20.',
    assessmentPA: {
      value: 'Not stated. Neighborhood’s HBTS/ABA policies set admission criteria (an initial evaluation by a licensed analyst must support the request) but its published prior authorization reference guide dates from 2021 and lists no behavioral health services',
      status: 'unverified',
      cites: [S.nhpCMP, S.nhpAuth],
      verifyVia: 'Neighborhood Utilization Management, 401-459-6060, or Provider Services, 1-800-963-1001: ask whether the ABA assessment (H2014 or H0046 lines) needs authorization.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Not stated in a code list. Clinical Medical Policy BH-001 sets admission, continuation and discharge criteria for HBTS and ABA and lists the authorization line (1-800-963-1001) and fax (401-459-6023); the plan says providers must "verify eligibility, coverage and authorization criteria prior to rendering services"',
      status: 'unverified',
      cites: [S.nhpCMP, S.nhpPP, S.nhpAuth],
      verifyVia: 'Neighborhood Utilization Management, 401-459-6060 (fax 401-459-6023): confirm whether T1024 and H0046 need prior authorization for RIte Care members.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes, but not only autism: Medicaid ABA eligibility requires a member "Diagnosed with a cognitive, developmental and/or an Autism Spectrum Disorder within the last three years" with significant social, behavioral and communication challenges, and the diagnostic report must state "the diagnosis, and the evidence used to make that diagnosis"',
      status: 'verified',
      cites: [S.nhpPP, S.nhpCMP],
    },
    payer: 'Neighborhood Health Plan of Rhode Island',
    state: 'RI', kind: 'medicaid-mco', parent: 'Rhode Island Medicaid (RIte Care managed care)',
    pill: 'Payer Guide · Neighborhood Health Plan of RI',
    h1: 'Neighborhood Health Plan of Rhode Island ABA coverage: the intake guide.',
    metaTitle: 'Neighborhood Health Plan of RI ABA Coverage & HBTS Guide | Carelu',
    metaDescription:
      'How Neighborhood Health Plan of Rhode Island covers ABA for RIte Care members: ABA as a subset of HBTS, its admission criteria, HCPCS coding with XP and U1 modifiers, in-house behavioral health since September 2025, 180-day filing, and its commercial exchange ABA rule.',
    intro: [
      'Neighborhood Health Plan of Rhode Island holds one of the three EOHHS Medicaid managed care contracts. Its Autism and Developmental Services Payment Policy (posted July 2026) describes HBTS as including "Applied Behavioral Analysis, Personal Assistance Services and Supports (PASS), Respite," and its clinical policy BH-001 sets separate ABA criteria "for Medicaid Members (subset of HBTS)."',
      'Two changes matter for agencies that worked with Neighborhood before. Behavioral health moved in-house: providers should have sent Optum claims for dates of service before September 1, 2025, and behavioral health providers now contract and credential directly with Neighborhood. And the plan’s commercial exchange products cover ABA on CPT codes, but only for members under age 20.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes: Medicaid members under 21, as a subset of HBTS; exchange plans under age 20' },
      { label: 'Medicaid codes', value: 'T1024 (U1 = 15-min unit), H0046 lead therapy / -HO / -HP supervision, H2014, T1016, T1013, S9446; XP when 2 agencies' },
      { label: 'Authorization', value: 'Criteria in CMP BH-001; auth line 1-800-963-1001, fax 401-459-6023; code list not published' },
      { label: 'Decision clock', value: 'Medicaid standard 7 calendar days; expedited 3 days' },
      { label: 'Timely filing', value: '180 days from date of service; Medicaid clinical appeals within 60 days' },
      { label: 'Behavioral health', value: 'Managed in-house since 9/1/2025 (formerly Optum)' },
      { label: 'Licensure', value: 'Credentials Licensed Applied Behavioral Analysts (LBA)' },
    ],
    sections: [
      {
        h2: 'Medicaid ABA: criteria and coding',
        body: [
          'Neighborhood’s Medicaid ABA criteria require all of: a comprehensive diagnostic and/or functional assessment "(e.g., ABLLS-R, Vineland-II, ADIR, ADOS-G, CARS2, VB-MAPP, or Autism Behavior Checklist)"; atypical or disruptive behavior that "significantly interferes with daily functioning" or poses risk; an "Initial evaluation from a Licensed Applied Behavior Analyst" supporting the request; and a diagnostic report that states the diagnosis and its evidence. Continuation requires measurable progress shown by "behavioral graphs, progress notes, and daily session notes," parent involvement, care coordination and no duplication of IEP services. ABA is non-covered for Medicaid members 21 and older.',
          'The payment policy lists the Medicaid HBTS codes: H0046 lead therapy, H0046-HO and H0046-HP clinical supervision (30-minute units, or 15-minute units with U1), H2014 treatment consultation (with HO or HP), S9446 social skills group, T1013 interpretation (up to 8 hours a month), T1016 treatment coordination, and T1024 home-based therapy (30-minute unit, or 15-minute with U1). Append XP "When 2 agencies are supporting the same member"; treatment consultation "cannot be duplicated across agencies." Services must be "ordered by a practitioner," and ABA must be "overseen by a Board-Certified Behavior Analyst (BCBA) or a licensed trained professional (e.g., Psychologist)."',
        ],
        cites: [S.nhpCMP, S.nhpPP],
      },
      {
        h2: 'Network, claims and appeals',
        body: [
          'Behavioral health providers join Neighborhood directly: submit the network application, sign the contract, and pass the Credentialing Committee, which "may take up to 45 days"; Licensed Applied Behavioral Analysts are on the list of credentialed behavioral health clinicians. The rendering provider field is mandatory ("or the claim will be denied"), and fee schedules are requested from bhcontracting@nhpri.org. Neighborhood’s supervisory-billing policy (U5 modifier) "does not apply to ABA services." Complete claims must reach Neighborhood "within one hundred eighty (180) days from the date of service," clean electronic claims are paid within 30 days and paper within 40, and for Medicaid Neighborhood "is the payer of last resort," with 180 days from the primary carrier’s EOB to bill a secondary balance. Medicaid clinical claim appeals "must be filed within 60 days of receiving the initial denial."',
        ],
        cites: [S.nhpBH, S.nhpPM, S.nhpSup],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [RI_OOS_BCBA],
        cites: [S.lic21, S.lic9, S.tele],
      },
    ],
    collect: [
      { title: 'Member ID and product', desc: 'RIte Care (Medicaid) versus an exchange plan: the codes, age limit and rules differ.' },
      { title: 'Diagnostic report', desc: 'A cognitive, developmental or autism diagnosis within the last three years, stating the evidence; a named instrument (ADOS, CARS2, Vineland and others).' },
      { title: 'LBA initial evaluation', desc: 'An initial evaluation by a Licensed Applied Behavior Analyst supporting the request.' },
      { title: 'Practitioner order', desc: 'Neighborhood requires services to be ordered by a practitioner.' },
      { title: 'Current IEP', desc: 'Providers must obtain and keep a current copy of the IEP; services may not duplicate it.' },
    ],
    sources: [S.nhpCMP, S.nhpPP, S.nhpPM, S.nhpBH, S.nhpSup, S.nhpAuth, S.nhpK, S.hbts, S.tele, S.lic21, S.lic9, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'The ABA treatment plan "is developed by a Licensed, Applied Behavior Analyst"; sessions are "typically provided by behavioral technicians or paraprofessionals" and "The technician is supervised by the Licensed, Applied Behavior Analyst." Neighborhood publishes no numeric ratio. Its contract with EOHHS requires monthly in-home observation of each worker by the clinical supervisor, and ABA "overseen by a Board-Certified Behavior Analyst (BCBA) or a licensed trained professional."',
        status: 'verified',
        cites: [S.nhpCMP, S.nhpPP, S.nhpK],
      },
      concurrentBilling: {
        value: 'Not addressed in Neighborhood’s ABA policies. The payment policy lets two agencies bill for one member (XP modifier) but bars duplicating treatment consultation across agencies.',
        status: 'unverified',
        cites: [S.nhpPP],
        verifyVia: 'Neighborhood Provider Services, 1-800-963-1001, or your behavioral health contract (bhcontracting@nhpri.org).',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'HBTS hours must be justified by medical necessity "up to 20 hours per week (excluding ABA programs), or more as clinically indicated." No ABA unit cap is published; T1013 interpretation is limited to 8 hours a month.',
        status: 'verified',
        cites: [S.nhpCMP, S.nhpPP],
      },
      noteSignature: {
        value: 'Continuation requires progress "evidenced by behavioral graphs, progress notes, and daily session notes," and documentation must support the service billed; Neighborhood "follows CMS standards for proper documentation requirements." It does not say who signs session notes or by when.',
        status: 'unverified',
        cites: [S.nhpCMP, S.nhpPP],
        verifyVia: 'Neighborhood Provider Services, 1-800-963-1001: ask for the documentation standard for HBTS/ABA session notes.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'ABA covered by Neighborhood is "typically in a home or community setting." "Services provided in a school setting are distinct and separate," and services in a school setting as part of the IEP are excluded.',
        status: 'verified',
        cites: [S.nhpCMP, S.nhpPP],
      },
      billAsProvider: {
        value: 'Behavioral health providers "must fill in the rendering provider field, or the claim will be denied." The U5 supervisory-billing route "does not apply to ABA services"; the commercial ABA codes take a degree modifier (HN bachelor’s, HO master’s, HP doctorate). Billing and supervising providers must be screened and credentialed.',
        status: 'verified',
        cites: [S.nhpBH, S.nhpSup, S.nhpPP],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Medicaid: under 21 ("Noncovered for members 21 years old and older"). Commercial exchange plans: "ABA is covered up to age 20" (non-covered at 20 and older).',
        status: 'verified',
        cites: [S.nhpCMP, S.nhpPP],
      },
      dxRecency: {
        value: 'Diagnosis "within the last three years" for Medicaid ABA; the HBTS criteria likewise need a diagnosis "made within 3 years" and an evaluation by a licensed mental health professional within three years.',
        status: 'verified',
        cites: [S.nhpPP, S.nhpCMP],
      },
      diagnosingProviders: {
        value: 'A "qualified licensed health care professional" for the diagnosis, and a licensed mental health professional for the three-year evaluation (CMP BH-001, HBTS criteria). The ABA initial evaluation must come from a Licensed Applied Behavior Analyst.',
        status: 'verified',
        cites: [S.nhpCMP],
      },
      diagnosticTools: {
        value: 'A comprehensive diagnostic and/or functional assessment, "e.g., ABLLS-R, Vineland-II, ADIR, ADOS-G, CARS2, VB-MAPP, or Autism Behavior Checklist."',
        status: 'verified',
        cites: [S.nhpCMP],
      },
      referral: {
        value: 'Yes: "Services must be ordered by a practitioner." For children under 3 in early intervention, a valid PCP referral to early intervention is required. The licensing law also has a licensed analyst provide ABA only when prescribed by a child psychiatrist, behavioral developmental pediatrician, child neurologist or child-trained licensed psychologist (R.I. Gen. Laws § 5-86-2(8)).',
        status: 'verified',
        cites: [S.nhpPP, S.nhpCMP, S.lic2],
      },
      telehealth: {
        value: 'Neighborhood covers services "delivered through telemedicine/telephone, as defined by Rhode Island laws," when the patient is present, the service is medically necessary and clinically appropriate, the exchange is sufficient to meet the in-person service’s requirements, and it meets the same standard of care; "For coding related to telehealth services, please see applicable payment policies." The ABA payment policy publishes no telehealth codes or modifier. Its EOHHS contract bars stricter prior authorization or lower behavioral health rates for telemedicine.',
        status: 'plan-dependent',
        cites: [S.nhpPM, S.nhpPP, S.nhpK],
        verifyVia: 'Neighborhood Provider Services, 1-800-963-1001: ask which HBTS/ABA components may be delivered by telehealth and the POS/modifier to bill.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Prior authorization decisions: Medicaid standard requests "seven (7) calendar days after receiving the request," commercial 14 calendar days; expedited requests three calendar days for both; post-service 30 days.',
        status: 'verified',
        cites: [S.nhpPM, S.cfr438],
      },
      coordinationOfBenefits: {
        value: '"For Medicaid, Neighborhood is the payer of last resort. If a member is known to have other primary insurance coverage, all claims must be filed to the primary insurer first," and COB claims must be submitted electronically. Contracted providers have "180 days from the date on the primary carrier’s EOB to submit for any secondary balances," and Neighborhood pays as secondary only for covered benefits.',
        status: 'verified',
        cites: [S.nhpPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Neighborhood Health Plan of Rhode Island cover ABA?', a: 'Yes. For Medicaid (RIte Care) members under 21, ABA is a subset of Home Based Therapeutic Services. Its commercial exchange plans cover ABA for members under 20.' },
      { q: 'Does Neighborhood still use Optum for behavioral health?', a: 'No. Neighborhood manages behavioral health in-house as of September 1, 2025; Optum claims for earlier dates could be followed up with Neighborhood until August 31, 2026.' },
      { q: 'Which codes does Neighborhood use for Medicaid ABA?', a: 'The HBTS HCPCS codes: T1024 (direct service), H0046 (lead therapy; HO/HP for clinical supervision), H2014, T1016, T1013 and S9446, with U1 for 15-minute units and XP when two agencies serve one child. Its commercial plans use CPT 97151–97158.' },
      { q: 'What is Neighborhood’s timely filing limit?', a: '180 days from the date of service, unless your contract says otherwise; 180 days from the primary carrier’s EOB for secondary claims.' },
    ],
  },

  'unitedhealthcare-community-plan-rhode-island': {
    slug: 'unitedhealthcare-community-plan-rhode-island',
    family: 'unitedhealthcare',
    cardDesc: 'UHC’s RI Medicaid plan: behavioral health through Optum; HBTS/ABA is a contract benefit but the manual publishes no ABA rules.',
    assessmentPA: {
      value: 'Not published. UnitedHealthcare Community Plan’s 2026 Rhode Island manual says outpatient behavioral health is covered through Optum and that prior authorization "may be required for more intensive services"; it names no ABA or HBTS codes',
      status: 'unverified',
      cites: [S.uhcPM],
      verifyVia: 'UnitedHealthcare Provider Portal prior authorization tool (UHCprovider.com/RIcommunityplan) or Behavioral Health provider line 1-855-766-0344: check the HBTS assessment codes.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Not published in the manual; request any behavioral health authorization through the UnitedHealthcare Provider Portal or by calling 1-855-766-0344 ("For behavioral health and SUD authorizations, please call Optum")',
      status: 'unverified',
      cites: [S.uhcPM],
      verifyVia: 'UnitedHealthcare Provider Portal prior authorization and notification tool, or 1-855-766-0344: check T1024 and H0046.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'The plan publishes nothing of its own; the state rule applies: a formal behavioral health or medical diagnosis "made within 3 years by a qualified licensed health care professional," which need not be autism (cognitive, developmental and/or ASD)',
      status: 'verified',
      cites: [S.uhcPM, S.hbts, S.abaFact],
    },
    payer: 'UnitedHealthcare Community Plan of Rhode Island',
    state: 'RI', kind: 'medicaid-mco', parent: 'Rhode Island Medicaid (RIte Care managed care)',
    pill: 'Payer Guide · UnitedHealthcare Community Plan · Rhode Island',
    h1: 'UnitedHealthcare Community Plan of Rhode Island ABA coverage: the intake guide.',
    metaTitle: 'UnitedHealthcare Community Plan Rhode Island ABA & HBTS Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan covers ABA for Rhode Island Medicaid members: HBTS and ABA under the EOHHS contract, behavioral health through Optum, what the 2026 manual does and does not say, Medicaid enrollment, telehealth billing and appeals.',
    intro: [
      'UnitedHealthcare of New England holds one of the three EOHHS Medicaid managed care contracts (Amendment 21, effective July 1, 2026), and that contract requires it to provide HBTS, including ABA, to Medicaid members under 21. Its behavioral health benefit runs through United Behavioral Health operating as Optum: the 2026 Rhode Island Care Provider Manual says outpatient behavioral health is "Covered through Optum."',
      'What the manual does not do is describe ABA or HBTS at all, so the state rules in the EOHHS certification standards and the managed care contract are the published floor. Treat the plan’s prior authorization tool as the source for each code.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as part of HBTS for Medicaid members under 21 (EOHHS contract)' },
      { label: 'Behavioral health', value: 'Optum (United Behavioral Health); provider line 1-855-766-0344' },
      { label: 'Prior auth', value: 'Not published for ABA; check the UnitedHealthcare Provider Portal tool' },
      { label: 'Network entry', value: 'RI Medicaid screening/enrollment first, then ask Optum to add the Medicaid network' },
      { label: 'Telehealth billing', value: 'Optum 2023 alert: UHC Medicaid uses standard codes, no modifier, POS 10 home / 02 elsewhere' },
      { label: 'Member appeals', value: 'Within 60 calendar days of the adverse benefit determination' },
    ],
    sections: [
      {
        h2: 'Coverage: the contract, not the manual',
        body: [
          'The EOHHS contract says HBTS "is an intensive home or community-based service" that includes "Applied Behavioral Analysis discrete trial interventions," that "The Contractor must provide these services to any Medicaid member under age 21," and that each plan designs its level-of-care criteria and payment method for EOHHS approval while contracting with a named list of HBTS and ABA agencies. UnitedHealthcare’s 2026 manual covers behavioral health generally ("Members may access all behavioral health outpatient services... Prior authorization may be required for more intensive services, day treatment or partial, inpatient, or residential care") and points to the national Optum network manual, which "generally applies to all types of business." No ABA-specific rule appears.',
        ],
        cites: [S.uhcK, S.uhcPM],
      },
      {
        h2: 'Network entry and claims',
        body: [
          'Optum’s Rhode Island page says Medicaid managed care network providers "are required to be screened by and enrolled with the State of RI Medicaid program," otherwise "all claims/encounters may be denied"; once Gainwell approves, email Optum to add the Medicaid network to your profile. The manual says UnitedHealthcare Community Plan "is the payer of last resort" and wants the primary payer’s EOB with the claim, and that a rejected claim not corrected "within 365 days from date of service or per care provider contract" is denied as late; "If you don’t know your timely filing limit, refer to your Provider Agreement." Member appeals go in "within 60 calendar days from the date of the adverse benefit determination," and standard appeals are resolved in 30 calendar days.',
        ],
        cites: [S.optRI, S.uhcPM],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [RI_OOS_BCBA],
        cites: [S.lic21, S.lic9, S.tele],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm UnitedHealthcare Community Plan (RIte Care) Medicaid eligibility on the day of service in the Provider Portal.' },
      { title: 'Diagnosis within 3 years', desc: 'The state HBTS rule: a formal diagnosis with a clinical diagnostic interview, made within 3 years.' },
      { title: 'Physician’s prescription', desc: 'The state requires HBTS to be prescribed by a physician.' },
      { title: 'Other insurance', desc: 'The plan pays last; attach the primary payer’s EOB.' },
    ],
    sources: [S.uhcPM, S.uhcK, S.optRI, S.optRItele, S.hbts, S.abaFact, S.tele, S.lic21, S.lic9, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'UnitedHealthcare Community Plan publishes no ABA supervision ratio of its own; the state standard applies. The EOHHS managed care contract requires HBTS direct services to be delivered "under the supervision of a licensed healthcare professional"; the clinical supervisor must be a Rhode Island licensed health care provider with a master’s or doctoral degree, must "Observe worker in the home with the child implementing the Treatment Plan on a monthly basis," and ABA "can be overseen by a Board-Certified Behavior Analyst (BCBA) or a licensed trained professional (e.g., Psychologist)." The 2016 EOHHS certification standards changed clinical supervision "from 2 hours per week to 8 hours total per month." Direct-care workers must be at least 19, with a high school diploma and experience or coursework.',
        status: 'verified',
        cites: [S.uhcPM, S.uhcK, S.hbts],
      },
      concurrentBilling: {
        value: 'Not addressed in the manual, and EOHHS publishes no rule either.',
        status: 'unverified',
        cites: [S.uhcPM],
        verifyVia: 'Optum/UnitedHealthcare behavioral health provider line, 1-855-766-0344, or your provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'The manual publishes no HBTS or ABA unit limit.',
        status: 'unverified',
        cites: [S.uhcPM],
        verifyVia: 'UnitedHealthcare Community Plan behavioral health, 1-855-766-0344: ask how HBTS units are authorized.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'The plan publishes no ABA session-note rule of its own. The state HBTS standard applies: record entries "dated and authenticated," changes "signed by the service provider," and treatment plans signed by a Licensed Practitioner of the Healing Arts and by the parents.',
        status: 'verified',
        cites: [S.uhcPM, S.hbts],
      },
      placeOfService: {
        value: 'The plan publishes no setting rule; the contract describes HBTS as home or community-based and "not intended to replace or substitute for educational services."',
        status: 'verified',
        cites: [S.uhcPM, S.uhcK],
      },
      billAsProvider: {
        value: 'The manual requires an NPI to see Medicaid members, clean claims with "your NPI and federal TIN," and every Medicaid network provider enrolled with Rhode Island Medicaid. It does not say whether HBTS lines carry the agency’s or the clinician’s NPI as rendering.',
        status: 'unverified',
        cites: [S.uhcPM, S.optRI],
        verifyVia: 'Optum Provider Services Rhode Island, 1-877-614-0484: ask which NPI goes in the rendering field for T1024 and H0046.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. The plan’s EOHHS contract requires HBTS for "any Medicaid member under age 21, per Federal EPSDT regulation."',
        status: 'verified',
        cites: [S.uhcK],
      },
      dxRecency: {
        value: 'The plan publishes nothing of its own; the state rule is a diagnosis "made within 3 years."',
        status: 'verified',
        cites: [S.uhcPM, S.hbts],
      },
      diagnosingProviders: {
        value: 'The plan names no list; the state rule is a "qualified licensed health care professional," with an evaluation by a licensed mental health professional within three years.',
        status: 'verified',
        cites: [S.uhcPM, S.hbts],
      },
      diagnosticTools: {
        value: 'Not stated by the plan. The state requires at least a clinical diagnostic interview, with testing as necessary.',
        status: 'unverified',
        cites: [S.uhcPM, S.hbts],
        verifyVia: 'UnitedHealthcare Community Plan behavioral health, 1-855-766-0344: ask which instruments it expects with an HBTS/ABA request.',
        blocker: 'per-case',
      },
      referral: {
        value: 'The plan publishes nothing different from the state, where HBTS is "based upon medical necessity, as documented by a physician’s prescription," and the licensing law has a licensed analyst provide ABA only when prescribed by a child psychiatrist, behavioral developmental pediatrician, child neurologist or child-trained psychologist.',
        status: 'verified',
        cites: [S.uhcPM, S.hbts, S.lic2],
      },
      telehealth: {
        value: 'Optum’s Rhode Island telehealth alert (BH5027, August 2023) says for UHC Medicaid: "Use standard outpatient CPT/HCPCS codes listed on your fee schedule," "No telehealth modifier needed," and "POS 10 for in the home POS 02 for outside of the home." The alert predates the 2026 contracts and names no ABA codes. Under its EOHHS contract the plan may not exclude a service only because it is delivered by telemedicine, pay behavioral health providers less, or impose stricter prior authorization.',
        status: 'plan-dependent',
        cites: [S.optRItele, S.uhcK],
        verifyVia: 'Optum Provider Services Rhode Island, 1-877-614-0484: confirm the alert still applies and which HBTS components may be delivered by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'The manual’s medical-management table gives non-urgent pre-service decisions "Within 5 working days of receipt of medical record information or no longer than 7 calendar days of receipt," urgent within 72 hours, concurrent within 3 calendar days. Federal law caps standard Medicaid managed care decisions at 7 calendar days for rating periods from January 1, 2026.',
        status: 'verified',
        cites: [S.uhcPM, S.cfr438],
      },
      coordinationOfBenefits: {
        value: '"UnitedHealthcare Community Plan is the payer of last resort. Other coverage should be billed as the primary carrier. When billing UnitedHealthcare Community Plan, submit the primary payer’s EOBs or remittance advice with the claim."',
        status: 'verified',
        cites: [S.uhcPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare Community Plan cover ABA in Rhode Island?', a: 'Yes, for Medicaid members under 21, as part of Home Based Therapeutic Services required by its EOHHS contract. Behavioral health runs through Optum.' },
      { q: 'Does it require prior authorization for ABA?', a: 'The 2026 manual does not say for ABA. Check each HBTS code in the UnitedHealthcare Provider Portal prior authorization tool or call 1-855-766-0344.' },
      { q: 'Do I need Rhode Island Medicaid enrollment to join?', a: 'Yes. Optum says Medicaid managed care network providers must be screened and enrolled with Rhode Island Medicaid, or claims may be denied.' },
    ],
  },

  'tufts-health-ritogether-rhode-island': {
    slug: 'tufts-health-ritogether-rhode-island',
    family: 'point32',
    cardDesc: 'Point32Health’s RI Medicaid plan: no prior authorization or notification for HBTS or ABA ("Providers just bill"); 90-day filing.',
    assessmentPA: {
      value: 'No. Tufts Health RITogether’s behavioral health grid lists both HBTS and ABA (members under 21) as "No PA or notification required. Providers just bill for this service"',
      status: 'verified',
      cites: [S.thpGrid, S.thpABA],
    },
    treatmentPA: {
      value: 'No. The ABA medical necessity guideline (effective January 1, 2026) is marked Prior Authorization Required "No" and Notification Required "No"; PA for ABA was removed and the document "maintained as a coverage guideline effective February 1, 2024"',
      status: 'verified',
      cites: [S.thpABA, S.thpGrid],
    },
    dxRequired: {
      value: 'Not limited to an autism code: Point32Health removed the "diagnosis code of Autism requirement for ABA as directed by RI EOHHS" (December 2023). Its admission criteria still require a diagnostic report that "clearly states the diagnosis and the evidence used to make that diagnosis"',
      status: 'verified',
      cites: [S.thpABA],
    },
    payer: 'Tufts Health RITogether (Tufts Health Public Plans)',
    state: 'RI', kind: 'medicaid-mco', parent: 'Rhode Island Medicaid (RIte Care managed care)',
    pill: 'Payer Guide · Tufts Health RITogether',
    h1: 'Tufts Health RITogether ABA coverage: the intake guide.',
    metaTitle: 'Tufts Health RITogether ABA Coverage & HBTS Guide | Carelu',
    metaDescription:
      'How Tufts Health RITogether (Point32Health) covers ABA for Rhode Island Medicaid members: no prior authorization or notification for HBTS or ABA, its coverage guideline criteria, HCPCS codes, 90-day timely filing and claims requirements.',
    intro: [
      'Tufts Health RITogether is Tufts Health Public Plans’ Rhode Island Medicaid product, one of the three EOHHS managed care contracts. Its 2026 provider manual lists Home Based Therapeutic Services among the home and community based services for members under 21, and Point32Health publishes a Rhode Island ABA guideline, "Applied Behavior Analysis (ABA) Including Early Intervention for Tufts Health RITogether."',
      'The headline for intake is administrative: RITogether requires neither prior authorization nor notification for HBTS or ABA. The guideline still states the criteria the plan applies, and the plan can review records.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, HBTS and ABA for members under 21' },
      { label: 'Prior auth', value: 'None: "No PA or notification required. Providers just bill" (grid updated 7/2026)' },
      { label: 'Codes', value: 'H2014 (-HO/-HP), H0046 (-HO/-HP), S9446, T1013, T1016, T1024' },
      { label: 'Timely filing', value: '90 calendar days from date of service (in-state, in-network); 60 days from a primary EOP' },
      { label: 'Claim must show', value: 'Attending/rendering clinician’s name, NPI and Rhode Island license number' },
      { label: 'Claim appeals', value: 'Within 60 calendar days of the EOP' },
    ],
    sections: [
      {
        h2: 'Coverage guideline and codes',
        body: [
          'The RITogether ABA guideline describes treatment planned "by a Licensed, Applied Behavior Analyst" and delivered by technicians "supervised by the Licensed, Applied Behavior Analyst," typically "in a home or community setting," with school-based services left to the IEP. Admission needs a comprehensive diagnostic and/or functional assessment (examples include ABLLS-R, Vineland-II, ADI-R, ADOS-G, CARS2, VB-MAPP) with medical history, physical examination and a detailed behavioral evaluation; "Screening scales such as the MCHAT-R are not sufficient to make a diagnosis." It also needs disruptive behavior that interferes with daily functioning or poses risk, and an initial evaluation from a licensed analyst. Continuation looks for "behavioral graphs, progress notes, and daily session notes," parent training and no duplication of IEP services. The codes are H2014 (-HO, -HP), H0046 (-HO, -HP), S9446, T1013, T1016 and T1024.',
          'One line needs care: the guideline says "The Plan may authorize ABA therapy visits, for Members <15 years of age," which echoes the commercial mandate’s age limit, while the behavioral health grid lists ABA for "Members < age 21" and the EOHHS contract requires HBTS for members under 21. Expect the under-21 contract rule to govern, and get any age question answered in writing.',
        ],
        cites: [S.thpABA, S.thpGrid, S.thpK],
      },
      {
        h2: 'Claims: filing limits, required fields, appeals',
        body: [
          'For first-time claims "the filing deadline is 90 calendar days from the date of service" for professional claims; claims after a primary carrier’s payment are due within 60 calendar days of that EOP. RITogether claims must carry "the attending/rendering physician’s name, NPI and Rhode Island license number." Tufts Health Public Plans is payer of last resort and wants the primary insurer’s EOP attached. Claim appeals "must be submitted within 60 calendar days of the date of the Explanation of Payment," with at most two levels, and appeals of timely-filing denials are considered only under narrow exceptions.',
        ],
        cites: [S.thpClaims],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [RI_OOS_BCBA],
        cites: [S.lic21, S.lic9, S.tele],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Tufts Health RITogether (not Tufts Health Together, the Massachusetts plan).' },
      { title: 'Diagnostic report', desc: 'States the diagnosis and the evidence, with formal test scores; an M-CHAT-R alone is not enough.' },
      { title: 'Rendering clinician’s RI license', desc: 'The claim needs the rendering clinician’s name, NPI and Rhode Island license number.' },
      { title: 'Other insurance', desc: 'Bill the primary first; file with Tufts within 60 days of the primary EOP.' },
    ],
    sources: [S.thpABA, S.thpGrid, S.thpClaims, S.thpUM, S.thpBH, S.thpK, S.hbts, S.tele, S.lic21, S.lic9, S.lic2, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'The individual ABA treatment plan "is developed by a Licensed, Applied Behavior Analyst," sessions are "typically provided by behavioral technicians or paraprofessionals," and "The technician is supervised by the Licensed, Applied Behavior Analyst." No numeric ratio is published. The EOHHS contract adds monthly in-home observation by the clinical supervisor.',
        status: 'verified',
        cites: [S.thpABA, S.thpK],
      },
      concurrentBilling: {
        value: 'Not addressed in the RITogether ABA guideline or the claims chapter.',
        status: 'unverified',
        cites: [S.thpABA, S.thpClaims],
        verifyVia: 'Tufts Health Public Plans Provider Services (Rhode Island), 844-301-4093.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No unit or hour cap is published; T1013 interpretation is limited to "up to 8 hours per month, 4 for supervision and 4 for parent training, not to be used with direct service." Hours follow severity and the treatment plan.',
        status: 'verified',
        cites: [S.thpABA],
      },
      noteSignature: {
        value: 'Progress must be shown in "behavioral graphs, progress notes, and daily session notes," and parent training documented. The plan does not say who signs a session note or when.',
        status: 'unverified',
        cites: [S.thpABA],
        verifyVia: 'Tufts Health Public Plans Provider Services (Rhode Island), 844-301-4093.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'ABA "may be provided in a variety of settings, such as at home and in the community"; "Services provided in a school setting are distinct and separate" and covered through the IEP. Services "primarily for school or educational purposes" are not medically necessary.',
        status: 'verified',
        cites: [S.thpABA],
      },
      billAsProvider: {
        value: 'RITogether claims must list "the attending/rendering physician’s name, NPI and Rhode Island license number on the claim form," so the rendering clinician is identified and Rhode Island-licensed.',
        status: 'verified',
        cites: [S.thpClaims],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The behavioral health grid covers HBTS and ABA for "Members < age 21," as the EOHHS contract requires; the ABA guideline separately says the plan "may authorize ABA therapy visits, for Members <15 years of age." Early intervention covers children under 3.',
        status: 'plan-dependent',
        cites: [S.thpGrid, S.thpABA, S.thpK],
        verifyVia: 'Tufts Health Public Plans Provider Services (Rhode Island), 844-301-4093: confirm in writing that ABA is covered for members 15 to 20.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'The plan sets no recency rule of its own; the state HBTS rule is a diagnosis "made within 3 years" and an evaluation within three years.',
        status: 'verified',
        cites: [S.thpABA, S.hbts],
      },
      diagnosingProviders: {
        value: 'The guideline names no diagnostician list; the diagnostic evaluation must include history, physical examination, formal test scores and medical screening. The state rule is a "qualified licensed health care professional."',
        status: 'verified',
        cites: [S.thpABA, S.hbts],
      },
      diagnosticTools: {
        value: 'A comprehensive diagnostic and/or functional assessment (e.g., ABLLS-R, Vineland-II, ADI-R, ADOS-G, CARS2, VB-MAPP, Autism Behavior Checklist) with "the scores from the use of formal diagnostic tests and scales"; the MCHAT-R alone "will not be accepted."',
        status: 'verified',
        cites: [S.thpABA],
      },
      referral: {
        value: 'No plan authorization; the guideline applies "After a comprehensive evaluation and a referral (as needed)," and early intervention needs a PCP referral. The state HBTS rule requires a physician’s prescription, and R.I. Gen. Laws § 5-86-2(8) has a licensed analyst provide ABA only when prescribed by a child psychiatrist, behavioral developmental pediatrician, child neurologist or child-trained psychologist.',
        status: 'verified',
        cites: [S.thpABA, S.hbts, S.lic2],
      },
      telehealth: {
        value: 'The RITogether ABA guideline and grid say nothing about telehealth. Under its EOHHS contract the plan may not exclude a service only because it is delivered by telemedicine, pay behavioral health providers less, or restrict originating sites, and EOHHS’s Telemedicine Billing Guidance applies.',
        status: 'plan-dependent',
        cites: [S.thpABA, S.thpK, S.tele],
        verifyVia: 'Tufts Health Public Plans Provider Services (Rhode Island), 844-301-4093: ask which HBTS/ABA components may be billed by telehealth and the POS/modifier.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Not applicable to ABA, which needs no authorization. For services that do, the 2026 manual says non-urgent RITogether requests "will be completed within 14 calendar days"; federal law caps standard Medicaid managed care decisions at 7 calendar days for rating periods starting on or after January 1, 2026.',
        status: 'verified',
        cites: [S.thpGrid, S.thpUM, S.cfr438],
      },
      coordinationOfBenefits: {
        value: '"Tufts Health Public Plans is payer of last resort for... Tufts Health RITogether." Submit to all known carriers first, then send the claim with "the primary insurer’s EOP," within 60 calendar days of the primary carrier’s EOP. "Do not take a cost-sharing amount up front."',
        status: 'verified',
        cites: [S.thpClaims, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Tufts Health RITogether require prior authorization for ABA?', a: 'No. Its behavioral health grid lists HBTS and ABA as "No PA or notification required. Providers just bill for this service."' },
      { q: 'What is the timely filing limit for Tufts Health RITogether?', a: '90 calendar days from the date of service for in-state, in-network professional claims, and 60 days from a primary carrier’s EOP.' },
      { q: 'Is an autism diagnosis required for RITogether ABA?', a: 'The plan removed the autism diagnosis code requirement at EOHHS’s direction, but the diagnostic report must still state the diagnosis and the evidence for it.' },
    ],
  },

  'aetna-rhode-island': {
    slug: 'aetna-rhode-island',
    family: 'aetna',
    cardDesc: 'Aetna’s ABA medical necessity guide + precertification of all ABA codes + Rhode Island’s ch. 27-20.11 mandate (to age 15).',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: precertification through Availity or the number on the card; Aetna re-evaluates progress every six months, and the plan sets the authorization interval',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): ask what reauthorization interval it uses for ABA.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5 diagnosis of autism spectrum disorder (ICD-10 F84.0, F84.3–F84.9) from an appropriate provider',
      status: 'verified',
      cites: [S.aetnaGuide],
    },
    payer: 'Aetna in Rhode Island',
    state: 'RI', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Rhode Island',
    h1: 'Aetna ABA coverage in Rhode Island: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Rhode Island: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Rhode Island families: Aetna’s ABA medical necessity guide, precertification of all ABA codes, Rhode Island’s ch. 27-20.11 autism mandate (until age 15, large group only), state licensure, prompt pay and appeals.',
    intro: [
      'For an intake team in Rhode Island, an Aetna card means three layers: Aetna’s national ABA medical necessity guide, Rhode Island’s autism mandate in R.I. Gen. Laws chapter 27-20.11, and the plan’s funding and size, which decide whether the mandate applies at all. Aetna runs no Rhode Island Medicaid plan.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s ABA medical necessity guide' },
      { label: 'State mandate', value: 'R.I. Gen. Laws ch. 27-20.11 (group plans issued or renewed from 1/1/2012)' },
      { label: 'Mandate age', value: 'Until the covered individual reaches age 15 (§ 27-20.11-3(b))' },
      { label: 'Mandate caps', value: 'None in the current text; cost sharing no more restrictive than other conditions' },
      { label: 'Exempt from mandate', value: 'Small-employer and individual plans (ch. 27-50, ch. 27-18.5), Medicaid, self-funded ERISA plans' },
      { label: 'Licensure', value: 'Yes: LBA/LABA licensed by the RI Department of Health (ch. 5-86); the mandate requires a licensed provider' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Rhode Island',
        body: [
          'Aetna’s ABA medical necessity guide (©2026) requires a DSM-5 ASD diagnosis "obtained by an appropriate provider," services "provided directly or billed by the appropriately licensed provider," functional impairment "on a standardized scale of functioning in the past 12 months" at least one standard deviation below the mean (or significant risk of harm), and a measurable, tapering treatment plan. Its state exhibit covers Maryland only, so no Rhode Island-specific criteria modify it. All ten ABA codes, 97151 through 97158, 0362T and 0373T, are on Aetna’s behavioral health precertification list, submitted through Availity.',
        ],
        cites: [S.aetnaGuide, S.aetnaPrecert],
      },
      {
        h2: 'The Rhode Island mandate: what it guarantees',
        body: [RI_MANDATE_BODY],
        cites: [S.ch2011, S.m3, S.m4, S.m7],
      },
      {
        h2: 'Licensure, prescriptions and out-of-state BCBAs',
        body: [RI_LICENSURE_BODY],
        cites: [S.lic, S.lic2, S.lic9, S.lic21, S.lic26, S.tele],
      },
      {
        h2: 'Claims operations: prompt pay, prior authorization clocks, appeals',
        body: [RI_CLAIMS_BODY],
        cites: [S.pp, S.ohic14, S.ur6, S.ur7],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA?',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) says compensation "under your agreement" is subject to Aetna’s coding and claim edit policies, that where you have both an intermediary contract and a direct agreement "your direct Aetna rates will apply unless we specifically notify you otherwise," and that a member who has exhausted benefits cannot be charged "more than the contracted rate." Get the numbers from your Aetna agreement. For a public benchmark, Rhode Island Medicaid pays HBTS direct service (T1024) at $33.30 per 15 minutes per OHIC’s 2025 report; it uses different codes from commercial ABA.',
        ],
        cites: [S.aetnaOM, S.ohic25],
      },
    ],
    collect: [
      { title: 'Plan funding and size', desc: 'Fully insured large group (ch. 27-20.11 applies) vs. small group, individual or self-funded ERISA (plan document governs).' },
      { title: 'Child’s age', desc: 'The state mandate runs until age 15; older children depend on the plan’s own terms.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3).' },
      { title: 'Specialist prescription', desc: 'Rhode Island law has licensed analysts provide ABA only on a prescription from a child psychiatrist, behavioral developmental pediatrician, child neurologist or child-trained psychologist.' },
    ],
    sources: [S.aetnaGuide, S.aetnaCPB648, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.ch2011, S.m3, S.m4, S.m7, S.lic, S.lic2, S.lic21, S.pp, S.ohic14, S.ur6, S.ur7, S.cob, S.tm4, S.tm3, S.erisa, S.ohic25],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s participation criteria (5/26): ABA "must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board," supervised staff may be a BCaBA "or a paraprofessional," and Aetna requires "A minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional "for each 10 hours of applied behavior analysis," plus the supervisor "onsite with the child at least one hour a month." "All BCBAs, BCaBAs and paraprofessionals must meet state requirements." In Rhode Island that means an LBA (or psychologist) providing or supervising ABA under § 27-20.11-7 and § 5-86-26.',
        status: 'verified',
        cites: [S.aetnaNPC, S.m7, S.lic26],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s ABA medical necessity guide or precertification list.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap is published. Hours follow the guide’s severity assessment; typical intensities are 10–25 hours a week (comprehensive) and 1–20 (focused), with QHP protocol modification at 1 to 2 hours per 10 hours of treatment. Progress is re-evaluated every six months.',
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
        value: 'Outpatient ABA is setting-neutral in Aetna’s guide; inpatient, residential or partial hospitalization use that level of care’s criteria. Aetna expects coordination with the school district. Rhode Island’s mandate leaves IEP and IFSP obligations with the school district (§ 27-20.11-6) and covers services delivered in Rhode Island unless unavailable in-network (§ 27-20.11-3(c)).',
        status: 'verified',
        cites: [S.aetnaGuide, S.ch2011, S.m3],
      },
      billAsProvider: {
        value: 'Services must be "provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists." Rhode Island licenses behavior analysts, so the Rhode Island LBA (or a psychologist) is the billing credential.',
        status: 'verified',
        cites: [S.aetnaGuide, S.lic, S.m7],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s ABA guide sets no age cap; its age ranges are typical, not limits.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.m3],
        verifyVia: 'Live benefits verification: establish fully insured large group vs. small group, individual or self-funded, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the ASD diagnosis itself, but medical necessity needs functional impairment on a standardized scale administered in the past 12 months (at least one standard deviation below the mean) or significant risk of harm.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'An appropriate provider: "licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice." CPB 0648 lists professionals appropriate to an ASD evaluation, from developmental pediatricians to psychologists.',
        status: 'verified',
        cites: [S.aetnaGuide, S.aetnaCPB648],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale. The ABA guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s ABA policies require precertification of all ten ABA codes, not a physician referral.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.lic2, S.m4],
      },
      telehealth: {
        value: 'Aetna’s provider manual (6/26): Aetna Behavioral Health "offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out," and providers must "ensure that they have the proper licensure based on state requirements." Aetna’s current ABA telehealth code list was not available in a document we could open.' + COMMERCIAL_TELE_STATE + ' A clinician delivering telehealth to a child in Rhode Island needs a Rhode Island license beyond the 10-day out-of-state allowance (§ 5-86-21(g)).',
        status: 'plan-dependent',
        cites: [S.aetnaOM, S.tm4, S.tm3, S.lic21],
        verifyVia: 'Availity or the precertification line on the card: ask whether the plan is fully insured in Rhode Island or self-funded (and opted out of telehealth), and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: commercialTurnaround('Aetna'),
        status: 'plan-dependent',
        cites: [S.ur6, S.ohic14, S.ur7, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Rhode Island-regulated) or self-funded (ERISA), and what reauthorization lead time Aetna expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: commercialCob('Aetna'),
        status: 'plan-dependent',
        cites: [S.cob, S.cfr433, S.nhpPM, S.tricare, S.champva],
        verifyVia: 'Ask Aetna at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Rhode Island?', a: 'Yes, for ASD under its national medical necessity guide, with Rhode Island’s ch. 27-20.11 mandate layered on for fully insured large-group plans. Self-funded, small-group and individual plans follow their own documents.' },
      { q: 'What does the Rhode Island autism mandate require?', a: 'Coverage of ABA and other autism treatment for group plans until the child turns 15, delivered by Department of Health licensed providers, with cost sharing no worse than other conditions. The current text has no dollar cap.' },
      { q: 'Can a BCBA licensed in another state treat an Aetna member in Rhode Island?', a: 'Only for up to 10 calendar days a year (5 in a row) without a Rhode Island license (R.I. Gen. Laws § 5-86-21(g)); the mandate also requires a Rhode Island-licensed provider, and Aetna requires providers to hold the licensure state law demands, including for telehealth.' },
      { q: 'How fast must Aetna pay a clean claim in Rhode Island?', a: 'For a fully insured plan, within 40 days of a complete paper claim or 30 days of a complete electronic claim, with 12% annual interest after that (R.I. Gen. Laws § 27-18-61).' },
    ],
  },

  'cigna-rhode-island': {
    slug: 'cigna-rhode-island',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + Rhode Island’s ch. 27-20.11 mandate (to age 15); no PA on assessment codes; all ABA codes telehealth-eligible.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: completed assessment and treatment plan attached to the Applied Behavior Analysis Prior Authorization Form',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD (F84.0–F84.9 except F84.2 Rett) under DSM-5-TR criteria',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Rhode Island',
    state: 'RI', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Rhode Island',
    h1: 'Cigna / Evernorth ABA coverage in Rhode Island: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Rhode Island: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Rhode Island families: policy EN0499, no PA on assessments, all ABA codes covered by telehealth, Rhode Island’s ch. 27-20.11 mandate (until age 15), state licensure, prompt pay and appeals.',
    intro: [
      'For an intake team in Rhode Island, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, Rhode Island’s autism mandate in chapter 27-20.11, and the plan’s funding and size, which decide whether the mandate applies. Many Cigna members are on self-funded employer plans, so check funding first. Cigna runs no Rhode Island Medicaid plan.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'State mandate', value: 'R.I. Gen. Laws ch. 27-20.11 (group plans issued or renewed from 1/1/2012)' },
      { label: 'Mandate age', value: 'Until the covered individual reaches age 15 (§ 27-20.11-3(b))' },
      { label: 'Mandate caps', value: 'None in the current text; cost sharing no more restrictive than other conditions' },
      { label: 'Exempt from mandate', value: 'Small-employer and individual plans (ch. 27-50, ch. 27-18.5), Medicaid, self-funded ERISA plans' },
      { label: 'Licensure', value: 'Yes: LBA/LABA licensed by the RI Department of Health (ch. 5-86); the mandate requires a licensed provider' },
      { label: 'Fee schedule', value: 'Not public — Exhibit A of your Evernorth Provider Agreement; Provider Services 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Rhode Island',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). Per the autism resource guide, prior authorization is no longer required for assessment codes 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA; treatment needs the completed assessment and treatment plan on the ABA Prior Authorization Form. "All ABA CPT codes are covered telehealth services." EN0499 and the resource guide say nothing specific to Rhode Island; Evernorth’s Administrative Guidelines carry a Rhode Island regulatory addendum on contract terms, not on ABA criteria.',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin],
      },
      {
        h2: 'The Rhode Island mandate: what it guarantees',
        body: [RI_MANDATE_BODY],
        cites: [S.ch2011, S.m3, S.m4, S.m7],
      },
      {
        h2: 'Licensure, prescriptions and out-of-state BCBAs',
        body: [RI_LICENSURE_BODY],
        cites: [S.lic, S.lic2, S.lic9, S.lic21, S.lic26, S.tele],
      },
      {
        h2: 'Claims operations: prompt pay, prior authorization clocks, appeals',
        body: [RI_CLAIMS_BODY],
        cites: [S.pp, S.ohic14, S.ur6, S.ur7],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth’s Administrative Guidelines (September 2026) say the Provider Agreement terms "include the reimbursement rates applicable to covered services," and tell ABA providers: "For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement." Contract and fee questions go to Provider Services at 800.926.2273. Telehealth claims carry modifier 95 and place of service 02. For a public benchmark, Rhode Island Medicaid pays HBTS direct service (T1024) at $33.30 per 15 minutes per OHIC’s 2025 report, on different codes.',
        ],
        cites: [S.ebhAdmin, S.ohic25],
      },
    ],
    collect: [
      { title: 'Plan funding and size', desc: 'Fully insured large group (ch. 27-20.11 applies) vs. small group, individual or self-funded ERISA.' },
      { title: 'Child’s age', desc: 'The state mandate runs until age 15; older children depend on the plan.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, and the date of the most recent diagnosis. Provisional or rule-out diagnoses don’t count.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Specialist prescription', desc: 'Rhode Island law has licensed analysts provide ABA only on a prescription from a child psychiatrist, behavioral developmental pediatrician, child neurologist or child-trained psychologist.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.ch2011, S.m3, S.m4, S.m7, S.lic, S.lic2, S.lic21, S.pp, S.ohic14, S.ur6, S.ur7, S.cob, S.tm4, S.erisa, S.ohic25],
    deliveryRules: {
      supervision: {
        value: 'Case supervision is by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health professional with ABA training, at "one to two hours per ten hours of direct treatment"; at 10 hours a week or less, at least one to two hours a week. In Rhode Island the supervisor must also hold a Rhode Island license (§ 27-20.11-7).',
        status: 'verified',
        cites: [S.en0499, S.m7],
      },
      concurrentBilling: {
        value: '"Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155" during direct supervision, when the BCBA or QHP and the technician are both with the patient at the same time.',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap is published. ABA bills in 15-minute units with "CPT codes 97151–97158, 0362T, and 0373T ONLY"; intensity must reflect severity, goals and response.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499],
      },
      noteSignature: {
        value: 'Each service record must include, among other items, the "Name, credential (if applicable), and signature of ABA provider who rendered the service."',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'Goals are tracked per setting (home, clinic, school, community). Services "primarily educational or vocational in nature" are not covered. Rhode Island’s mandate covers services delivered in the state unless unavailable in-network (§ 27-20.11-3(c)).',
        status: 'verified',
        cites: [S.en0499, S.m3],
      },
      billAsProvider: {
        value: 'Evernorth credentials licensed or certified providers only; non-credentialed staff bill under the supervising provider. On a CMS-1500 "List only a BCBA or other licensed provider in box 33"; electronic claims use payer ID 62308. 97152–97154 may be delivered by a BCaBA or technician but billed by a BCBA or licensed provider.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap and says access "should not be restricted by age."' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.m3],
        verifyVia: 'Live benefits verification: establish fully insured large group vs. small group, individual or self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs the date it was most recently made, and provisional or rule-out diagnoses do not count. Assessment instrument within 60 days before treatment starts, baseline data within 60 days, and current data within 60 days of a continued-treatment request.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional "licensed to practice independently and whose licensure board considers diagnostics" within scope, applying DSM-5-TR criteria.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated, but it must be standardized, valid and the current edition (the policy’s example: Vineland-3, not Vineland-II), with dates and standardized scores reported.',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral; assessments 97151, 97152 and 0362T need no PA with an autism diagnosis, and treatment needs the assessment and plan on the ABA PA form.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.lic2, S.m4],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services," per the autism resource guide; bill modifier 95 with place of service 02 (Evernorth Administrative Guidelines).' + COMMERCIAL_TELE_STATE + ' A clinician serving a child in Rhode Island by telehealth needs a Rhode Island license beyond the 10-day out-of-state allowance (§ 5-86-21(g)).',
        status: 'verified',
        cites: [S.cignaARG, S.ebhAdmin, S.tm4, S.lic21],
      },
      authTurnaround: {
        value: commercialTurnaround('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.ur6, S.ohic14, S.ur7, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Rhode Island-regulated) or self-funded (ERISA), and what reauthorization lead time Evernorth expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: commercialCob('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.cob, S.cfr433, S.nhpPM, S.tricare, S.champva],
        verifyVia: 'Ask Cigna/Evernorth at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Rhode Island?', a: 'Yes, under national policy EN0499 for ASD, with Rhode Island’s ch. 27-20.11 mandate layered on for fully insured large-group plans until age 15.' },
      { q: 'Does the Cigna ABA assessment need prior authorization?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'Can ABA be delivered by telehealth with Cigna?', a: 'Yes: Cigna lists all ABA CPT codes as covered telehealth services, billed with modifier 95 and POS 02. The clinician still needs a Rhode Island license to treat a Rhode Island child beyond 10 days a year.' },
      { q: 'What does Cigna pay for ABA in Rhode Island?', a: 'Cigna publishes no ABA rates; your fee schedule is Exhibit A of your Evernorth Provider Agreement (Provider Services 800.926.2273).' },
    ],
  },

  'unitedhealthcare-rhode-island': {
    slug: 'unitedhealthcare-rhode-island',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + Rhode Island’s ch. 27-20.11 mandate (to age 15); no RI state supplement; telehealth limited to 97155–97157.',
    assessmentPA: {
      value: 'Required: the ABA Supplemental Clinical Criteria require prior authorization for ABA "unless otherwise specified or mandated by contract or law"',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required; the review interval is set per authorization',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express support: ask what review interval will be set on this member’s ABA treatment authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a valid ASD diagnosis under DSM-5-TR, with severity confirmed by the diagnosing clinician using at least one clinically validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Rhode Island',
    state: 'RI', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Rhode Island',
    h1: 'UnitedHealthcare / Optum ABA coverage in Rhode Island: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Rhode Island: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Rhode Island families on commercial plans: Optum’s ABA criteria and prior authorization, Rhode Island’s ch. 27-20.11 mandate (until age 15), state licensure, telehealth limits, prompt pay and appeals.',
    intro: [
      'For an intake team in Rhode Island, a UnitedHealthcare commercial card means three layers: Optum Behavioral Health’s national ABA criteria, Rhode Island’s autism mandate in chapter 27-20.11, and the plan’s funding and size. UnitedHealthcare also runs a Rhode Island Medicaid plan, UnitedHealthcare Community Plan, which follows the state’s HBTS rules instead; check which card the family has.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'R.I. Gen. Laws ch. 27-20.11 (group plans issued or renewed from 1/1/2012)' },
      { label: 'Mandate age', value: 'Until the covered individual reaches age 15 (§ 27-20.11-3(b))' },
      { label: 'Mandate caps', value: 'None in the current text; cost sharing no more restrictive than other conditions' },
      { label: 'Exempt from mandate', value: 'Small-employer and individual plans (ch. 27-50, ch. 27-18.5), Medicaid, self-funded ERISA plans' },
      { label: 'Licensure', value: 'Yes: LBA/LABA licensed by the RI Department of Health (ch. 5-86); the mandate requires a licensed provider' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential modifier (HM/HN/HO/HP)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Rhode Island',
        body: [
          'UnitedHealthcare administers commercial ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026): prior authorization for ABA, a DSM-5-TR diagnosis confirmed with a validated tool, an identified credentialed ABA provider, direct case supervision of 1–2 hours per 10 hours of treatment, and continued-service review that looks hard at use below 80% of authorized hours. Optum’s ABA State Mandates supplement has sections for Arizona, California, Connecticut, Florida, Massachusetts, New Jersey, New York, Ohio and Pennsylvania, but none for Rhode Island, so no Rhode Island-specific criteria modify the commercial policy.',
        ],
        cites: [S.optumSCC, S.optumSM],
      },
      {
        h2: 'The Rhode Island mandate: what it guarantees',
        body: [RI_MANDATE_BODY],
        cites: [S.ch2011, S.m3, S.m4, S.m7],
      },
      {
        h2: 'Licensure, prescriptions and out-of-state BCBAs',
        body: [RI_LICENSURE_BODY],
        cites: [S.lic, S.lic2, S.lic9, S.lic21, S.lic26, S.tele],
      },
      {
        h2: 'Claims operations: prompt pay, prior authorization clocks, appeals',
        body: [RI_CLAIMS_BODY],
        cites: [S.pp, S.ohic14, S.ur6, S.ur7],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA?',
        body: [
          'UnitedHealthcare publishes no ABA rate table; Optum pays from the contract. Optum’s National Network Manual (effective Sept. 1, 2026) defines the Fee Maximum as the most a participating provider "may be paid for a specific health care service provided to a member," adding that "Reimbursement to clinicians is based upon licensure rather than degree." Optum’s commercial ABA Reimbursement Policy (2022RP501A) puts the credential on every claim line (HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA, HP for a doctoral-level BCBA) and bundles indirect work into the direct codes. Ask Optum network management for your rate sheet. Rhode Island Medicaid’s HBTS direct-service rate (T1024, $33.30 per 15 minutes per OHIC’s 2025 report) is the only public benchmark, on different codes.',
        ],
        cites: [S.optumNNM, S.optumReimb, S.ohic25],
      },
    ],
    collect: [
      { title: 'Plan funding and size', desc: 'Fully insured large group (ch. 27-20.11 applies) vs. small group, individual or self-funded ERISA.' },
      { title: 'Commercial or Community Plan?', desc: 'A UnitedHealthcare Community Plan card is Rhode Island Medicaid and follows the HBTS rules.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD and severity, confirmed with a validated tool (ADI-R, ADOS-2 and others).' },
      { title: 'Specialist prescription', desc: 'Rhode Island law has licensed analysts provide ABA only on a prescription from a child psychiatrist, behavioral developmental pediatrician, child neurologist or child-trained psychologist.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumNNM, S.optumReimb, S.ch2011, S.m3, S.m4, S.m7, S.lic, S.lic2, S.lic21, S.pp, S.ohic14, S.ur6, S.ur7, S.cob, S.tm4, S.erisa, S.ohic25],
    deliveryRules: {
      supervision: {
        value: 'Direct case supervision is required at 1–2 hours for every 10 hours of direct treatment. Technicians work under a BCBA or licensed behavioral health clinician and "should be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate"; Optum does not recommend parents serving as their own child’s RBT. In Rhode Island the supervising analyst must hold a Rhode Island license (§ 27-20.11-7).',
        status: 'verified',
        cites: [S.optumSCC, S.m7],
      },
      concurrentBilling: {
        value: 'Not addressed. The criteria define direct case supervision as occurring during direct treatment but do not state the billing consequence.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual and the participating-provider agreement, or a written coding determination from Optum.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap. Hours must be justified by documented clinical need; at continued-service review, use below 80% of authorized hours over a two-week period must be explained.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      noteSignature: {
        value: 'Not addressed. The criteria set what must be documented for coverage, not who signs a session note or when.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual documentation standards and the participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Not covered: services that are not ABA, "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA; school coordination is allowed. Rhode Island’s mandate covers services delivered in the state unless unavailable in-network (§ 27-20.11-3(c)).',
        status: 'verified',
        cites: [S.optumSCC, S.m3],
      },
      billAsProvider: {
        value: 'A credentialed ABA provider is a master’s- or doctoral-level BCBA or a licensed behavioral health clinician credentialed for ABA; a BCaBA or non-licensed staff member works under that provider’s supervision. Each claim line carries the credential modifier (HM, HN, HO, HP).',
        status: 'verified',
        cites: [S.optumSCC, S.optumReimb],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Optum’s criteria carry no age criterion; the member’s benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.m3],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish fully insured large group vs. small group, individual or self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with severity level using a validated tool. Progress is reassessed over 6-month periods.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'A "state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis" under DSM-5-TR.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool from a non-exhaustive list: first-level screens (M-CHAT and others), second-level screens (CARS/CARS-2, RITA-T, STAT), and formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral in Optum’s criteria; prior authorization is required.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.lic2, S.m4],
      },
      telehealth: {
        value: 'Optum’s Telehealth Billing guide (updated September 2025) says for commercial plans: "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157." So the 97151 assessment and technician 97153 are not on Optum’s commercial list. Bill POS 10 (home) or 02 (elsewhere); Optum "will not reimburse for services billed with only telehealth modifiers." The criteria add that telehealth is "not intended to supplant in-person service."' + COMMERCIAL_TELE_STATE + ' Ask Optum how it applies the three-code list to a fully insured Rhode Island plan.',
        status: 'verified',
        cites: [S.optumTele, S.optumSCC, S.tm4, S.tm3],
      },
      authTurnaround: {
        value: commercialTurnaround('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.ur6, S.ohic14, S.ur7, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Rhode Island-regulated) or self-funded (ERISA), and what reauthorization lead time Optum expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: commercialCob('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.cob, S.cfr433, S.nhpPM, S.tricare, S.champva],
        verifyVia: 'Ask UnitedHealthcare/Optum at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Rhode Island?', a: 'Yes, under Optum’s national ABA criteria for ASD, with Rhode Island’s ch. 27-20.11 mandate layered on for fully insured large-group plans until age 15.' },
      { q: 'Does Optum have Rhode Island-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement has no Rhode Island section, so the national criteria apply.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in Rhode Island?', a: 'Optum’s commercial telehealth guide allows only 97155, 97156 and 97157 by telehealth, billed POS 10 or 02. Fully insured Rhode Island plans are also subject to the Telemedicine Coverage Act, so ask Optum how it applies the list to your plan.' },
      { q: 'Is UnitedHealthcare a Rhode Island Medicaid plan?', a: 'Yes, separately: UnitedHealthcare Community Plan is one of Rhode Island’s three Medicaid health plans and follows the state’s HBTS rules, not the commercial criteria.' },
    ],
  },

  'blue-cross-blue-shield-rhode-island': {
    slug: 'blue-cross-blue-shield-rhode-island',
    family: 'bcbs',
    cardDesc: 'BCBSRI applies the ch. 27-20.11 mandate with no age limit, lists no ABA preauthorization, and pays every ABA code by telehealth.',
    assessmentPA: {
      value: 'Not listed. BCBSRI’s preauthorization page lists behavioral health notification only for inpatient, withdrawal management, crisis stabilization, residential and partial hospitalization care, and its Autism Spectrum Disorders Mandate policy shows medical criteria "Not applicable"; benefits vary by group',
      status: 'plan-dependent',
      cites: [S.bcbsriPA, S.bcbsriASD],
      verifyVia: 'BCBSRI Behavioral Health Utilization Management, 1-800-274-2958: confirm the member’s group requires no ABA preauthorization.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Not listed (same sources); BCBSRI says preauthorization "is required or recommended (based on the plan)" for services named in its policies, and the ABA policy names none',
      status: 'plan-dependent',
      cites: [S.bcbsriPA, S.bcbsriASD],
      verifyVia: 'BCBSRI Behavioral Health Utilization Management, 1-800-274-2958, or the member’s Subscriber Agreement.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: coverage is "for the treatment of Autism Spectrum Disorders (ASD), as defined in the most recent edition of the" DSM',
      status: 'verified',
      cites: [S.bcbsriASD],
    },
    payer: 'Blue Cross & Blue Shield of Rhode Island',
    state: 'RI', kind: 'commercial',
    pill: 'Payer Guide · Blue Cross & Blue Shield of Rhode Island',
    h1: 'Blue Cross & Blue Shield of Rhode Island ABA coverage: the intake guide.',
    metaTitle: 'Blue Cross Blue Shield of Rhode Island ABA Coverage Guide | Carelu',
    metaDescription:
      'How Blue Cross & Blue Shield of Rhode Island covers ABA: its Autism Spectrum Disorders Mandate payment policy (no age limit), licensed-provider rule, no listed preauthorization, all ABA codes payable by telehealth, 180-day timely filing, and Rhode Island’s mandate, licensure and prompt-pay rules.',
    intro: [
      'Blue Cross & Blue Shield of Rhode Island’s Autism Spectrum Disorders Mandate payment policy (effective August 1, 2026) applies to commercial products only and covers ABA, pharmaceuticals, physical, speech and occupational therapy, psychology and psychiatric services for ASD.',
      'BCBSRI goes further than the statute in one place that matters at intake: the state mandate stops at age 15, but BCBSRI’s policy says it "does not have any age restrictions for Autism Services." Self-funded groups that opted out of the mandate, and plans not subject to it, may exclude ABA, so check the member’s agreement. BCBSRI runs no Rhode Island Medicaid plan.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, on commercial products (not Medicare Advantage)' },
      { label: 'State mandate', value: 'R.I. Gen. Laws ch. 27-20.11 (group plans issued or renewed from 1/1/2012)' },
      { label: 'Mandate age', value: 'Statute: until age 15 (§ 27-20.11-3(b)); BCBSRI applies no age restriction to Autism Services' },
      { label: 'Mandate caps', value: 'None in the current text; BCBSRI says the statute’s dollar limits do not apply under MHPAEA and the ACA' },
      { label: 'Exempt from mandate', value: 'Small-employer and individual plans (ch. 27-50, ch. 27-18.5), Medicaid, self-funded groups that opted out' },
      { label: 'Licensure', value: 'Yes: LBA/LABA (ch. 5-86); BCBSRI requires ABA by a state-licensed analyst, supervised assistant, or psychologist' },
      { label: 'Fee schedule', value: 'Not published for ABA — contracted rates in your BCBSRI participation agreement' },
    ],
    sections: [
      {
        h2: 'BCBSRI’s ABA policy',
        body: [
          'BCBSRI covers ABA when "provided and/or supervised by an individual licensed by the state in which the service is rendered": a Licensed Applied Behavior Analyst; a Licensed Applied Behavior Assistant Analyst "under the supervision of a Licensed Applied Behavior Analyst"; or a psychologist with equivalent experience or practicing within scope. It pays the CPT codes 97151–97158, 0362T and 0373T "when rendered by a certified ABA provider," and tells providers not to use the HCPCS codes H0031, H0032, H2019, H2012 or H2014 for ABA. Its outpatient behavioral health policy adds that LBAs "are only allowed to file claims for the codes in this code set." For groups that offer Autism Services, related physical, occupational and speech therapy is "excluded from any service limits or preauthorization requirements." Services "furnished by school personnel" are not covered, and the coverage leaves IEP and IFSP duties with the school district.',
          'For plans that do not cover Autism Services, plans not subject to the mandate, and self-funded groups that "opted NOT to adopt the Rhode Island Autism Spectrum Disorders Mandate," ABA "is a contract exclusion for some members." Questions go to BCBSRI Behavioral Health Utilization Management at 1-800-274-2958.',
        ],
        cites: [S.bcbsriASD, S.bcbsriBH],
      },
      {
        h2: 'The Rhode Island mandate: what it guarantees',
        body: [RI_MANDATE_BODY],
        cites: [S.ch2011, S.m3, S.m4, S.m7],
      },
      {
        h2: 'Licensure, prescriptions and out-of-state BCBAs',
        body: [RI_LICENSURE_BODY],
        cites: [S.lic, S.lic2, S.lic9, S.lic21, S.lic26, S.tele],
      },
      {
        h2: 'Claims operations: filing limit, prompt pay, appeals',
        body: [
          'BCBSRI’s commercial filing limit "is 180 days from the date of service," and 180 days from the primary insurer’s processing date when coordinating benefits (attach that EOB); filing-limit appeals must arrive within 60 days of the original remittance advice, and members cannot be billed for claims denied for late filing. Contracts may differ.',
          RI_CLAIMS_BODY,
        ],
        cites: [S.bcbsriTF, S.pp, S.ohic14, S.ur6, S.ur7],
      },
    ],
    collect: [
      { title: 'Group and funding', desc: 'Fully insured group vs. self-funded group that opted out of the mandate (ABA may be excluded); check the Subscriber Agreement.' },
      { title: 'Member ID', desc: 'Commercial product; ABA is not covered on BCBSRI Medicare Advantage plans.' },
      { title: 'ASD diagnosis', desc: 'A DSM diagnosis of autism spectrum disorder.' },
      { title: 'Licensed provider', desc: 'Rendering or supervising LBA (or psychologist) licensed in the state where services are delivered.' },
      { title: 'Specialist prescription', desc: 'Rhode Island law has licensed analysts provide ABA only on a prescription from a child psychiatrist, behavioral developmental pediatrician, child neurologist or child-trained psychologist.' },
    ],
    sources: [S.bcbsriASD, S.bcbsriBH, S.bcbsriTF, S.bcbsriTele, S.bcbsriGrid, S.bcbsriPA, S.ch2011, S.m3, S.m4, S.m7, S.lic, S.lic2, S.lic21, S.pp, S.ohic14, S.ur6, S.ur7, S.cob, S.tm4, S.erisa],
    deliveryRules: {
      supervision: {
        value: 'ABA must be "provided and/or supervised by an individual licensed by the state in which the service is rendered," and an assistant analyst works "under the supervision of a Licensed Applied Behavior Analyst." BCBSRI publishes no numeric ratio. Rhode Island’s licensing law requires an LBA to give aides "close supervision" and to meet assistant analysts in person for initial direction and periodic on-site supervision (§ 5-86-26).',
        status: 'verified',
        cites: [S.bcbsriASD, S.lic26],
      },
      concurrentBilling: {
        value: 'Not addressed in BCBSRI’s ABA or outpatient behavioral health policies.',
        status: 'unverified',
        cites: [S.bcbsriASD, S.bcbsriBH],
        verifyVia: 'BCBSRI Behavioral Health Utilization Management, 1-800-274-2958, or your participation agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No ABA unit or hour limit is published. BCBSRI says the statute’s dollar limits "are not applicable" under MHPAEA and the ACA, and therapy visit limits do not apply when PT, OT or speech is treatment for ASD.',
        status: 'verified',
        cites: [S.bcbsriASD],
      },
      noteSignature: {
        value: 'BCBSRI points behavioral health providers to its Behavioral Health Medical Record Documentation standards (an attachment to the outpatient policy that we did not open); the ABA policy itself sets no session-note signature rule.',
        status: 'unverified',
        cites: [S.bcbsriBH, S.bcbsriASD],
        verifyVia: 'BCBSRI Behavioral Health Medical Record Documentation standards (linked from the Behavioral Health Outpatient Professional Services policy) or Behavioral Health UM, 1-800-274-2958.',
        blocker: 'document',
      },
      placeOfService: {
        value: '"No benefits are provided for services that are furnished by school personnel," and coverage does not change school districts’ IEP/IFSP obligations. Rhode Island’s mandate covers services delivered in the state unless unavailable in-network (§ 27-20.11-3(c)).',
        status: 'verified',
        cites: [S.bcbsriASD, S.m3],
      },
      billAsProvider: {
        value: 'BCBSRI credentials Licensed Behavior Analysts (LBA) as independent behavioral health clinicians, and "LBAs are only allowed to file claims for the codes in this code set" (97151–97158, 0362T, 0373T). ABA is billed by the licensed provider who renders or supervises it.',
        status: 'verified',
        cites: [S.bcbsriBH, S.bcbsriASD],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'BCBSRI: "BCBSRI does not have any age restrictions for Autism Services," although the statute it quotes runs until age 15. Self-funded groups that opted out of the mandate set their own terms.',
        status: 'verified',
        cites: [S.bcbsriASD, S.m3],
      },
      dxRecency: {
        value: 'BCBSRI publishes no diagnosis recency rule; the mandate lets a carrier ask for records showing treatment "is at all times medically necessary and appropriate."',
        status: 'unverified',
        cites: [S.bcbsriASD, S.m4],
        verifyVia: 'BCBSRI Behavioral Health UM, 1-800-274-2958: ask whether it expects a diagnostic evaluation within a set period.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Not stated by BCBSRI. The statute lets an insurer require a treatment plan signed by a child psychiatrist, behavioral developmental pediatrician, child neurologist or licensed psychologist trained in child psychology.',
        status: 'unverified',
        cites: [S.bcbsriASD, S.m4],
        verifyVia: 'BCBSRI Behavioral Health UM, 1-800-274-2958.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'Not stated by BCBSRI.',
        status: 'unverified',
        cites: [S.bcbsriASD],
        verifyVia: 'BCBSRI Behavioral Health UM, 1-800-274-2958: ask which instruments it expects in the diagnostic report.',
        blocker: 'per-case',
      },
      referral: {
        value: 'BCBSRI’s ABA policy names no referral requirement.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.bcbsriASD, S.lic2, S.m4],
      },
      telehealth: {
        value: 'Yes, every ABA code. BCBSRI’s telemedicine policy lists "Applied Behavior Analysis (ABA)" and "Licensed Behavior Analyst" among eligible provider types, and its 2026 commercial code grid marks 97151–97158, 0362T and 0373T as covered by telemedicine (POS 02 or 10 with modifier 95) and by telephone only (POS 02 or 10; modifier 93 for audio-only). The patient must be present and the service equivalent to in person. Claims with another POS or a code not on the grid deny.' + COMMERCIAL_TELE_STATE,
        status: 'verified',
        cites: [S.bcbsriTele, S.bcbsriGrid, S.tm4, S.tm3],
      },
      authTurnaround: {
        value: 'No ABA preauthorization is listed, so decision clocks apply only if the member’s group requires one. For fully insured Rhode Island plans, OHIC’s rule sets pre-service decisions within 15 calendar days (one 15-day extension), urgent within 72 hours and concurrent within 24 hours; self-funded ERISA plans decide pre-service claims within 15 days (29 CFR 2560.503-1).',
        status: 'plan-dependent',
        cites: [S.bcbsriPA, S.ohic14, S.ur6, S.erisa],
        verifyVia: 'BCBSRI Behavioral Health UM, 1-800-274-2958: confirm whether the member’s group requires ABA preauthorization.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: commercialCob('BCBSRI') + ' BCBSRI’s filing limit when it is secondary is 180 days from the primary insurer’s processing date, with that EOB attached.',
        status: 'plan-dependent',
        cites: [S.cob, S.bcbsriTF, S.cfr433, S.nhpPM, S.tricare, S.champva],
        verifyVia: 'Ask BCBSRI at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Blue Cross & Blue Shield of Rhode Island cover ABA?', a: 'Yes, on commercial products for autism spectrum disorder, delivered or supervised by a state-licensed behavior analyst or psychologist. Self-funded groups that opted out of the mandate may exclude it.' },
      { q: 'Does BCBSRI stop ABA at age 15 like the state mandate?', a: 'No. BCBSRI’s policy says it "does not have any age restrictions for Autism Services."' },
      { q: 'Does BCBSRI require prior authorization for ABA?', a: 'BCBSRI lists no ABA preauthorization: its behavioral health notification list covers inpatient, residential, crisis and partial hospitalization care. Benefits vary by group, so confirm with Behavioral Health UM at 1-800-274-2958.' },
      { q: 'Can ABA be delivered by telehealth with BCBSRI?', a: 'Yes. BCBSRI’s 2026 commercial telemedicine grid covers all ABA codes, 97151–97158, 0362T and 0373T, by video (POS 02/10, modifier 95) and by telephone.' },
      { q: 'What is BCBSRI’s timely filing limit?', a: '180 days from the date of service for commercial claims, or 180 days from the primary insurer’s processing date when BCBSRI is secondary.' },
    ],
  },
};

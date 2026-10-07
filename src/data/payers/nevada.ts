import type { PayerConfig, PayerSource } from './types.js';

/* Nevada — researched October 2026 from primary sources only.
   The Nevada Medicaid agency is now the Nevada Health Authority (NVHA); dhcfp.nv.gov
   redirects to nevadamedicaid.nv.gov, where the Medicaid Services Manual (MSM), rate
   files and health-plan list are served to plain curl with a browser user agent. The
   ABA chapter is MSM 3700 (not 1500, which is Healthy Kids/EPSDT generally). Gainwell's
   medicaid.nv.gov serves the PT 85 billing guide, forms FA-11E/FA-11F and the billing
   manual as real PDFs. NRS chapters were read on leg.state.nv.us (Rev. 9/9/2026).
   Health Plan of Nevada’s ABA request form is an image-only PDF and was read by
   rendering its pages. */

const S: Record<string, PayerSource> = {
  msm3700: { title: 'Nevada Medicaid Services Manual Chapter 3700 — Applied Behavior Analysis (MTL 08/24, effective April 1, 2024; current)', url: 'https://www.nevadamedicaid.nv.gov/uploadedFiles/dhcfpnvgov/content/Resources/AdminSupport/Manuals/MSM/C3700/MSM_3700_24_04_01.pdf' },
  pt85: { title: 'Nevada Medicaid — Provider Type 85 Billing Guide, Applied Behavior Analysis (updated 07/27/2026)', url: 'https://www.medicaid.nv.gov/Downloads/provider/NV_BillingGuidelines_PT85.pdf' },
  fee85: { title: 'Nevada Medicaid — Provider Type 85 ABA Reimbursement Schedule (rate data as of 07/2026)', url: 'https://www.nevadamedicaid.nv.gov/siteassets/content/resources/rates/pt-85-fee-schedule-072026.xlsx' },
  feePage: { title: 'Nevada Medicaid — Fee Schedules (rates by provider type)', url: 'https://www.nevadamedicaid.nv.gov/Resources/Rates/FeeSchedules/' },
  fa11e: { title: 'Nevada Medicaid Form FA-11E — Applied Behavior Analysis (ABA) Authorization Request (updated 07/13/2026)', url: 'https://www.medicaid.nv.gov/Downloads/provider/FA-11E.pdf' },
  fa11f: { title: 'Nevada Medicaid Form FA-11F — ASD Diagnosis Certification for Requesting Initial ABA Services (updated 06/10/2025)', url: 'https://www.medicaid.nv.gov/Downloads/provider/FA-11F.pdf' },
  billMan: { title: 'Nevada Medicaid and Nevada Check Up Billing Manual (updated July 10, 2026)', url: 'https://www.medicaid.nv.gov/Downloads/provider/nv_billing_general.pdf' },
  teleBill: { title: 'Nevada Medicaid — Telehealth Billing Instructions (updated 08/03/2026)', url: 'https://www.medicaid.nv.gov/Downloads/provider/NV_Billing_Telehealth.pdf' },
  msm3400: { title: 'Nevada Medicaid Services Manual Chapter 3400 — Telehealth Services (effective November 29, 2023)', url: 'https://www.nevadamedicaid.nv.gov/uploadedFiles/dhcfpnvgov/content/Resources/AdminSupport/Manuals/MSM/C3400/MSM_3400_23_11_29_ADA.pdf' },
  msm3600: { title: 'Nevada Medicaid Services Manual Chapter 3600 — Managed Care Organization (effective January 1, 2026)', url: 'https://www.nevadamedicaid.nv.gov/siteassets/content/resources/adminsupport/manuals/msm/c3600/MSM_3600_26_01-01.pdf' },
  abaPage: { title: 'Nevada Health Authority — Applied Behavior Analysis (ABA) program page', url: 'https://www.nevadamedicaid.nv.gov/programs/applied-behavior-analysis-aba/' },
  plans: { title: 'Nevada Medicaid — Contact a Health Plan (the five Medicaid health plans, updated 04/08/2026)', url: 'https://www.nevadamedicaid.nv.gov/medicaid-members/health-plan-home/contact-a-health-plan/' },
  smc: { title: 'Nevada Medicaid — Statewide Managed Care Program (expansion to all counties from January 1, 2026)', url: 'https://www.nevadamedicaid.nv.gov/medicaid-members/health-plan-home/statewide-managed-care-program/' },
  prtf: { title: 'DHCFP letter — Applied Behavioral Analysis Coverage in a PRTF/RTC (June 20, 2024)', url: 'https://medicaid.nv.gov/Downloads/provider/web_announcement_3380_20240626.pdf' },
  wa3315: { title: 'Nevada Medicaid Web Announcement 3315 — MSM 3700 changes for SB 191 (ABA regardless of age), March 22, 2024', url: 'https://www.medicaid.nv.gov/Downloads/provider/web_announcement_3315_20240322.pdf' },
  nrs422: { title: 'NRS Chapter 422 — NRS 422.27497 (Medicaid ABA services) and 422.2721 (Medicaid telehealth)', url: 'https://www.leg.state.nv.us/NRS/NRS-422.html' },
  nrs689B: { title: 'NRS Chapter 689B — Group health insurance (689B.0335 autism, 689B.0369 telehealth, 689B.064 order of benefits, 689B.255 claims)', url: 'https://www.leg.state.nv.us/NRS/NRS-689B.html' },
  nrs689A: { title: 'NRS 689A.0435 — Individual health insurance: option of coverage for autism spectrum disorders', url: 'https://www.leg.state.nv.us/NRS/NRS-689A.html' },
  nrs689C: { title: 'NRS 689C.1655 — Small employer health benefit plans: coverage for autism spectrum disorders', url: 'https://www.leg.state.nv.us/NRS/NRS-689C.html' },
  nrs695C: { title: 'NRS 695C.1717 — Health maintenance organizations: coverage for autism spectrum disorders', url: 'https://www.leg.state.nv.us/NRS/NRS-695C.html' },
  nrs687B: { title: 'NRS 687B.900–687B.990 — Prior authorization (response deadlines; violation deems request approved)', url: 'https://www.leg.state.nv.us/NRS/NRS-687B.html' },
  nrs641D: { title: 'NRS Chapter 641D — Applied Behavior Analysis (licensure, endorsement, supervision, prohibited acts)', url: 'https://www.leg.state.nv.us/NRS/NRS-641D.html' },
  nrs629: { title: 'NRS 629.031 and 629.515 — Provider of health care defined; Nevada license required for telehealth to a patient in Nevada', url: 'https://www.leg.state.nv.us/NRS/NRS-629.html' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Nevada: NV Applied Behavior Analysis Board)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  anMcdNews: { title: 'Anthem (Nevada Medicaid) — Nevada expanded applied behavioral analysis services to all ages (provider news, Nov. 11, 2024)', url: 'https://providernews.anthem.com/nevada/articles/nevada-expanded-applied-behavioral-analysis-services-to-all-22898' },
  anMcdPM: { title: 'Anthem Blue Cross and Blue Shield Healthcare Solutions (Nevada Medicaid) — Provider Manual (July 2025 edition)', url: 'https://providers.anthem.com/docs/gpp/NV_CAID_ProviderManual.pdf' },
  anMcdPrecert: { title: 'Anthem Nevada Medicaid — Precertification requirements (Availity Essentials; behavioral health submissions)', url: 'https://providers.anthem.com/nevada-provider/resources/precertification-requirements' },
  csMM: { title: 'CareSource Nevada Medicaid — Medical Policy NV MCD-MM-1846, Applied Behavior Analysis for Autism Spectrum Disorder (eff. 01/01/2026)', url: 'https://www.caresource.com/documents/medicaid-policy-medical-mm-1846-20260101.pdf' },
  csPY: { title: 'CareSource Nevada Medicaid — Reimbursement Policy NV MCD-PY-1695, Applied Behavior Analysis for ASD (eff. 01/01/2026)', url: 'https://www.caresource.com/documents/medicaid-policy-reimburse-py-1695-20260101.pdf' },
  hpnNews: { title: 'Health Plan of Nevada — Update to prior authorization process for ABA therapy services (provider news, Oct. 22, 2025)', url: 'https://healthplanofnevada.com/content/dam/hpnv-public-sites/health-plan-of-nevada/provider/provider-news/2025/Oct%2022%202025%20ABA%20provider%20news%20email.html' },
  hpnPA: { title: 'Health Plan of Nevada Medicaid — Prior authorizations (provider forms page)', url: 'https://www.myhpnmedicaid.com/provider/prior-authorizations' },
  hpnForm: { title: 'Health Plan of Nevada Medicaid — Applied Behavioral Analysis form (ASD diagnosis certification + request, image-only PDF)', url: 'https://www.myhpnmedicaid.com/content/dam/hpnv-public-sites/documents/applied-behavioral-analysis-form.pdf' },
  molPM: { title: 'Molina Healthcare of Nevada — Medicaid and Nevada Check Up Provider Manual 2026 (Mar 2026, rev. 06/12/26)', url: 'https://www.molinahealthcare.com/-/media/Project/PWS/Healthcare/PDF/PDF/Providers/NV/Resources/2026_Medicaid_Provider_Manual_Mar_2026_Final_508-rev061226.pdf' },
  molPA: { title: 'Molina Healthcare of Nevada — Prior Authorization for Providers (Availity-only from 2/1/26; PA lookup tool)', url: 'https://www.molinahealthcare.com/providers/nv/prior-auth' },
  sshpChk: { title: 'SilverSummit Healthplan — ABA Outpatient Treatment Request Checklist (June 29, 2026)', url: 'https://www.silversummithealthplan.com/content/dam/centene/Nevada/Notifications/2026-documents/SSHP_Provider_ABA%20Treatment%20Request%20Checklist_Digital_2026-06-29_FINAL.pdf' },
  sshpPM: { title: 'SilverSummit Healthplan — 2026 Provider Manual (updated 01-01-2026)', url: 'https://www.silversummithealthplan.com/content/dam/centene/Nevada/Notifications/2026-documents/4%20SSHP%20NV%20Provider%20manual%202025-11-19.pdf' },
  sshpRev: { title: 'SilverSummit Healthplan — Notice of revision to Clinical Policy CP.BH.104, Applied Behavior Analysis (June 5, 2026; DOS from 05/30/2026)', url: 'https://www.silversummithealthplan.com/content/dam/centene/Nevada/Notifications/2026-documents/ABA%20revisions.pdf' },
  aetnaCPB: { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna — Provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  aetnaTele: { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (Commercial and Medicare columns; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines incl. Nevada Regulatory Addendum (PCOMM-2026-191, September 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; review 04/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM, effective July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumNNM: { title: 'Optum National Network Manual (effective Sept. 1, 2026; lists Nevada Regulatory Requirements)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  anthemRG: { title: 'Anthem BCBS — Applied Behavior Analysis Provider Resource Guide (multi-state incl. Nevada, June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
  anthemNVPA: { title: 'Anthem Blue Cross and Blue Shield / HMO Nevada — Nevada Commercial Precertification List (updated 07/10/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/NV_PA_List.pdf' },
};

/* ---- Shared Nevada commercial layer ---- */
const NV_MANDATE_BODY =
  'Nevada’s autism mandate is written separately into each insurance chapter. For group policies, NRS 689B.0335 says a health benefit plan “must provide coverage for screening for and diagnosis of autism spectrum disorders and for treatment of autism spectrum disorders to persons covered by the policy of group health insurance under the age of 18 years or, if enrolled in high school, until the person reaches the age of 22 years.” HMOs (NRS 695C.1717) and small-employer plans (NRS 689C.1655) carry the same text. Individual policies are different: NRS 689A.0435 only requires the plan to “provide an option of coverage,” with a maximum benefit “of not less than” the same amount. The cap is set in subsection 2: coverage is subject to “A maximum benefit of the actuarial equivalent of $72,000 per year for applied behavior analysis treatment,” plus the policy’s ordinary cost sharing. Inside that cap the insurer “shall not limit the number of visits,” may not charge higher cost sharing or impose a longer wait than for other outpatient care, and “shall accept as dispositive any diagnosis of an autism spectrum disorder that is rendered in accordance with the statewide standard” set under NRS 427A.872. Treatment “must be identified in a treatment plan” prescribed and provided by a provider acting within scope, and the insurer “may request a copy of and review a treatment plan.” The statute defines behavioral therapy as therapy “provided by a licensed psychologist, licensed behavior analyst, licensed assistant behavior analyst or registered behavior technician,” and it does not require an insurer to reimburse a school for school services. The current text was last amended in 2025 and binds policies “delivered, issued for delivery or renewed on or after January 1, 2026.” It reaches state-regulated plans only; self-funded employer plans answer to ERISA.';

const NV_LICENSURE_BODY =
  'Nevada licenses behavior analysts. Under NRS Chapter 641D a “behavior analyst” is a person with current BCBA or BCBA-D certification “and is licensed as a behavior analyst pursuant to this chapter”; an assistant behavior analyst is a licensed BCaBA; and a registered behavior technician must be BACB-certified and “registered as such pursuant to this chapter.” The Board of Applied Behavior Analysis (NRS 641D.200) issues those credentials, and the BACB’s licensure table lists Nevada with the NV Applied Behavior Analysis Board. Practicing ABA without the license or registration is prohibited (NRS 641D.900) and is a gross misdemeanor (NRS 641D.910); exemptions cover physicians, psychologists and certain other licensed professionals, family members acting at a behavior analyst’s direction, and school-district employees serving pupils (NRS 641D.110). An assistant behavior analyst or RBT may practice only under supervision by a licensed behavior analyst or a BCBA-certified licensed psychologist (an RBT may also be supervised by a qualified licensed assistant behavior analyst), and supervisors must follow BACB supervision rules (NRS 641D.610). Expect every payer to credential against the Nevada license number, not just the BACB number.';

const NV_OOS_BODY =
  'Not without a Nevada license. NRS 641D.900 bars anyone from engaging “in the practice of applied behavior analysis unless he or she is licensed or registered as required by the provisions of this chapter.” Telehealth does not get around that: NRS 629.031 counts “A behavior analyst, assistant behavior analyst or registered behavior technician” as a provider of health care, and NRS 629.515 says that before a provider at a distant site “may use telehealth to direct or manage the care or render a diagnosis of a patient who is located at an originating site in this State,” the provider “must hold a valid license or certificate to practice his or her profession in this State.” A BCBA directing a Nevada child’s program from another state is therefore treated as practicing in Nevada and is “subject to the laws and jurisdiction of the State of Nevada.” The fast path is licensure by endorsement under NRS 641D.340: a behavior analyst who holds “a corresponding valid and unrestricted license as a behavior analyst” in another state or D.C. may apply, and unless the Board denies for good cause it must issue the license within 45 days of the application or 10 days after the fingerprint background report, whichever is later. Payers add their own layer: credential the clinician with each plan before billing.';

const NV_TELE_TAIL =
  ' For a state-regulated group policy, NRS 689B.0369 requires coverage of services “provided to an insured through telehealth to the same extent as though provided in person,” bars the insurer from requiring prior authorization for a telehealth service “that is not required for that service when provided in person,” and forbids refusing coverage because of the originating site (the home counts) or the technology used; pay parity in the same amount applies to mental health treatment, including audio-only. NRS 629.515 separately requires the clinician to hold a Nevada license. Self-funded employer plans are outside the state statute.';

const NV_AUTH_COMMERCIAL = (payer: string) =>
  'Depends on how the plan is funded. State-regulated plans fall under Nevada’s prior-authorization statute: unless a shorter period applies, a health carrier must respond “within: (1) Two business days after it receives the request; or (2)” any longer period the CAQH CORE Prior Authorization and Referrals Operating Rules allow, and in any case “within 7 calendar days after receiving the request” (NRS 687B.970). If the carrier violates that section for a particular request, “the request shall be deemed approved” (NRS 687B.990). The procedure “may not discriminate among persons licensed to provide the covered care.” Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions “not later than 15 days after receipt of the claim,” one 15-day extension, urgent care within 72 hours. ' + payer + ' publishes no Nevada-specific ABA turnaround or reauthorization lead time.';

const NV_COB_COMMERCIAL = (payer: string) =>
  'For a child on two group policies, Nevada uses the birthday rule: when parents are not divorced or separated, “the primary policy is the policy of the parent whose birthday falls earlier in the year”; for divorced or separated parents the custodial parent’s policy pays first, then the custodial parent’s spouse’s, then the non-custodial parent’s, unless a court decree assigns responsibility (NRS 689B.064). A policy that does not coordinate is always primary. That rule binds state-regulated group policies; a self-funded plan sets its own order. If the child also has Nevada Medicaid, ' + payer + ' pays first: Medicaid is the payer of last resort (42 CFR 433.139), and Nevada Medicaid tells providers to “Always follow other payers’ billing requirements. If the other payer denies a claim because you did not follow their requirements, Medicaid will also deny the claim.” TRICARE pays after this plan (10 U.S.C. 1079(i)(1)).';

const NV_PROMPT_PAY =
  'Claims timing for state-regulated group policies is set by NRS 689B.255: the insurer “shall approve or deny a claim … within 21 days after the insurer receives the claim, if the claim is submitted electronically, or 30 days” on paper, and must pay an approved claim within the same period or owe interest “at a rate of 10 percent per annum.” A request for more information must come “within 20 working days” of receipt, and the clock restarts at 21 or 30 days from the additional information. A denial must state the reasons and the criteria the insurer applied. Self-funded plans follow their own documents and ERISA.';

const MANDATE_AGE_TAIL =
  ' For state-regulated Nevada group, small-employer and HMO plans, the mandate covers members “under the age of 18 years or, if enrolled in high school, until the person reaches the age of 22 years,” with ABA capped at the actuarial equivalent of $72,000 a year (NRS 689B.0335, 689C.1655, 695C.1717). Individual policies need only offer the coverage as an option (NRS 689A.0435). Self-funded ERISA plans are outside the statute.';

const MANDATE_REFERRAL_TAIL =
  ' For a state-regulated Nevada plan, autism treatment “must be identified in a treatment plan” and be prescribed by a provider of health care acting within scope, and the insurer “may request a copy of and review a treatment plan” (NRS 689B.0335(5)). Self-funded ERISA plans sit outside the statute.';

const NV_MCO_APPEALS =
  'Nevada’s managed-care rules give members (or a provider acting with the member’s written permission) 60 calendar days from the notice of adverse benefit determination to appeal to the plan, allow one level of internal appeal, and require a standard appeal decision within 30 calendar days (expedited within 72 hours); after the plan’s appeal, the member may request a State Fair Hearing (MSM 3604).';


/* ---- Nevada Medicaid state rules, reused on MCO guides only where the plan publishes nothing of its own ---- */
const ST_SUPERVISION =
  'Nevada Medicaid’s rule (MSM 3704.3A, MSM 3704.2A(1)(j)): supervision follows NRS 641D.610, “must be overseen by a Licensed Psychologist, BCBA-D or BCBA who has experience in the treatment of autism,” may be delivered by a BCaBA at their direction, and is capped at 20% of direct therapy hours unless clinical documentation supports more. MSM 3600 requires MCOs to provide services with the same amount, duration and scope as fee-for-service.';
const ST_DAILY =
  'Nevada Medicaid’s limits (MSM 3704.2A(4); PT 85 billing guide): 12 hours of ABA per provider per day, 40 hours per recipient per week; focused 15–25 and comprehensive 25–40 hours a week counting 97153, 97155 and 0373T together; 97151 one 16-unit and 97152/0362T one 4-unit session per 180 days; 97156 4 units a week. Limits may be exceeded with prior authorization and documented medical necessity.';
const ST_NOTES =
  'Nevada Medicaid’s rule (MSM 3704.4G): a progress note for each day of service with the recipient’s name, place of service, date, actual start and end times, the name and credentials of the provider who delivered the service, and “The signature of the provider who delivered the service.”';
const ST_POS =
  'Nevada Medicaid’s rule (MSM 3704.1, 3704.2A(8)): ABA may be delivered in a clinic or office, the community or the home, and in “the natural setting (i.e. home, school and community-based settings, including clinics)”; resorts, spas, camps, education services, respite and child care are not covered. Telehealth is billed POS 02 or 10.';
const ST_AGE =
  'No age limit. Nevada Medicaid covers ABA for “Medicaid eligible individuals of all ages” (MSM 3704.1, effective April 1, 2024), with members under 21 also covered through EPSDT.';
const ST_TOOLS =
  'Nevada Medicaid’s list (MSM 3704.2A(5)(f), FA-11F): ADOS-2, CARS-2, GARS-3 or an FASD diagnostic category, with the score on FA-11F; if DSM-5 criteria alone are used, the specific criteria met must be documented.';
const ST_REFERRAL =
  'Nevada Medicaid’s rule (MSM 3704.1, FA-11F): ABA “must be rendered according to the written orders of” a physician, physician assistant, psychologist or APRN/NP, who certifies the diagnosis on FA-11F with the first request.';
const ST_TELE =
  'Nevada Medicaid’s rule: MSM 3403 gives telehealth “parity with in-person health care services,” requires the originating site to be in Nevada and lists only personal care, home health and private duty nursing as in-person-only; NRS 422.2721 bars extra prior authorization for telehealth. Bill POS 02 or 10 with modifier 95 (audio-video) or 93 (audio-only). The clinician needs a Nevada license (NRS 629.515). No Nevada ABA document lists which ABA codes may be delivered remotely.';
export const nevadaPayers: Record<string, PayerConfig> = {
  'nevada-medicaid': {
    slug: 'nevada-medicaid',
    cardDesc: 'ABA for Medicaid members of any age (MSM 3700); no PA on assessments; five MCOs statewide from 2026; published PT 85 rates.',
    assessmentPA: {
      value: 'No. “Behavior initial assessment and re-assessments do not require prior authorization,” limited to one every 180 days unless prior authorized (MSM 3704.2B); the PT 85 guide lists 97151 (16 units), 97152 and 0362T (4 units each) per 180 days as “Not required”',
      status: 'verified',
      cites: [S.msm3700, S.pt85],
    },
    treatmentPA: {
      value: 'Yes. Adaptive behavior treatment (individual and group) and family training require prior authorization from the QIO-like vendor (Gainwell), requested on FA-11E (plus FA-11F for the first request) through the Provider Web Portal',
      status: 'verified',
      cites: [S.msm3700, S.pt85, S.fa11e],
    },
    dxRequired: {
      value: 'Yes: an established diagnosis of ASD, FASD, or another condition for which ABA is recognized as medically necessary, documented once on FA-11F (MSM 3704.2A(6)(b)); claims carry F84.0, Q86.0 or the other qualifying diagnosis',
      status: 'verified',
      cites: [S.msm3700, S.fa11f, S.pt85],
    },
    payer: 'Nevada Medicaid',
    state: 'NV', kind: 'state-medicaid',
    pill: 'Payer Guide · Nevada Medicaid',
    h1: 'Nevada Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Nevada Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Nevada Medicaid covers ABA: all ages under MSM Chapter 3700, no prior authorization for assessments, FA-11E/FA-11F for treatment, 12-hour and 40-hour limits, published PT 85 rates, five statewide MCOs from 2026, and Nevada behavior-analyst licensure.',
    intro: [
      'Nevada Medicaid covers applied behavior analysis under its own chapter of the Medicaid Services Manual, MSM 3700, and since April 1, 2024 the benefit has no age ceiling: Medicaid “will reimburse for ABA rendered to Medicaid eligible individuals of all ages,” with members under 21 also covered through EPSDT. The covered conditions are autism spectrum disorder, fetal alcohol spectrum disorder, or any other condition for which ABA is recognized as medically necessary. The agency running it is now the Nevada Health Authority (NVHA); its fiscal agent and prior-authorization vendor is Gainwell Technologies.',
      'Most children get Medicaid through a health plan. Managed care went statewide on January 1, 2026, and NVHA lists five Medicaid health plans: Anthem Blue Cross and Blue Shield, CareSource, Health Plan of Nevada, Molina Healthcare of Nevada and SilverSummit Healthplan. ABA is not carved out of those contracts, so the card decides who authorizes and pays. Children in foster care, people with disabilities, seniors and waiver members stay in fee-for-service, where the rules on this page apply directly.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for Medicaid members of any age (MSM 3704.1; age limits removed April 1, 2024)' },
      { label: 'Structure', value: 'Five MCOs statewide from 1/1/2026 (Anthem, CareSource, Health Plan of Nevada, Molina, SilverSummit); ABA is an MCO benefit; FFS for excluded groups' },
      { label: 'Assessment PA', value: 'None: 97151 (16 units), 97152 and 0362T (4 units) once per 180 days' },
      { label: 'Treatment PA', value: 'FA-11E + FA-11F (initial) via the Provider Web Portal; Gainwell PA line (800) 525-2395' },
      { label: 'Hour limits', value: 'Focused 15–25 hrs/wk, comprehensive 25–40 hrs/wk; 40 hrs/wk per recipient; 12 hrs/day per provider; supervision up to 20%' },
      { label: 'FFS rates (per 15 min)', value: 'BCBA: 97151 $29.14 · 97153 $30.10 · 97155 $30.10 · 97156 $21.32; RBT (UD): 97153 $13.01 (07/2026 schedule)' },
      { label: 'Licensure', value: 'Required: behavior analysts and BCaBAs licensed, RBTs registered, by the Nevada Board of Applied Behavior Analysis (NRS 641D)' },
    ],
    sections: [
      {
        h2: 'Who is covered, for what, and through whom',
        body: [
          'MSM 3704.1 says Medicaid “will reimburse for ABA rendered to Medicaid eligible individuals of all ages,” for members under 21 “in accordance with” EPSDT. The behavior intervention must be medically necessary “to develop, maintain or restore to the maximum extent practical the functions of an individual with a diagnosis of ASD, FASD or other condition for which ABA is recognized as medically necessary,” and it “must be rendered according to the written orders of the Physician, Physician’s Assistant (NRS 630.271), Nevada Board of Psychological Examiners or an Advanced Practitioner Registered Nurse (APRN)/Nurse Practitioner (NP).” The age expansion came from SB 191 (2023): Web Announcement 3315 describes the MSM changes as allowing “the use of ABA services for all eligible Medicaid recipients, regardless of age.” The statute itself, NRS 422.27497, sets a narrower floor, requiring the State Plan to pay for behavior-analyst, assistant and RBT services “to recipients of Medicaid who are less than 27 years of age”; the manual goes further, and the manual is what Gainwell applies.',
          'From January 1, 2026 managed care covers rural as well as urban counties. NVHA’s health-plan page lists Anthem Blue Cross and Blue Shield (844-396-2329), CareSource (833-230-2058), Health Plan of Nevada (800-962-8074), Molina Healthcare of Nevada (833-685-2102) and SilverSummit Healthplan (844-366-2880). ABA does not appear among MSM 3600’s excluded or carved-out services, and the chapter requires each MCO to file an ABA report covering “members’ average wait times for ABA service appointments, the number of providers rendering ABA services.” MCOs must provide services “with the same timeliness, amount, duration, and scope” as fee-for-service. About 126,000 people stay in fee-for-service, including children in foster care, juvenile justice and child welfare, people with disabilities and waiver members.',
        ],
        cites: [S.msm3700, S.wa3315, S.nrs422, S.abaPage, S.plans, S.smc, S.msm3600],
      },
      {
        h2: 'Authorization: FA-11E, FA-11F and the Gainwell timelines',
        body: [
          'Screens and assessments need no PA; treatment does. MSM 3704.2B says adaptive behavior treatment and family behavior training (individual and group) require prior authorization “from the Quality Improvement Organization (QIO)-like vendor,” and that when a school has issued an IEP, Plan of Care or 504 plan, it “must accompany a request for ABA services.” Requests go through the Provider Web Portal on FA-11E (updated 07/13/2026), with FA-11F, the ASD Diagnosis Certification, attached to the first request only. FA-11F is signed by the ordering practitioner, who “must be a Physician, Physician’s Assistant, Advanced Practice Registered Nurse (APRN) or Psychologist,” and certifies the member is “Medicaid Eligible (any age),” with the diagnostic tool and score (ADOS-2, CARS-2, GARS-3, an FASD diagnostic category, or DSM-5 criteria with documentation of the criteria met). FA-11E must be signed by the parent or guardian, who agrees to the parent responsibilities in MSM 3700.',
          'Timing comes from the PT 85 billing guide (updated 07/27/2026). Submit the initial request “no more than 15 business days before and no more than 15 calendar days after the start date of service.” A continued-service request “must be received by Nevada Medicaid by the last authorized date,” ideally 5 to 15 days before. Unscheduled revisions go in during the current period, before the extra units are delivered; a retrospective request is due within 90 days of the eligibility decision. Incomplete requests are pended, and the submitter “will have five business days to supply the missing information, or a technical denial will be issued.” A denied or reduced request can get a peer-to-peer (email within 10 business days of the decision) and a reconsideration on FA-29B; ABA reconsiderations “can be requested at any point within the date range requested on the PA,” unlike the 30-day limit for most services. Authorization “does not guarantee payment.”',
        ],
        cites: [S.msm3700, S.fa11e, S.fa11f, S.pt85, S.billMan],
      },
      {
        h2: 'What does Nevada Medicaid pay for ABA? The PT 85 fee schedule',
        body: [
          'NVHA publishes the ABA rates by specialty (310 BCBA, 311 psychologist, 312 BCaBA, 314 RBT; BCaBA and RBT lines carry modifier UD). The PT 85 Reimbursement Schedule with rate data as of 07/2026 (last rate review 2023) pays, per 15 minutes: 97151 $29.14 (BCBA) or $17.54 (psychologist); 97152 $35.09 (BCBA or psychologist), $21.05 (BCaBA) or $15.60 (RBT); 97153 $30.10 (BCBA or psychologist), $18.06 (BCaBA) or $13.01 (RBT); 97154 $7.60 (BCBA), $7.14 (psychologist), $7.50–$7.60 (BCaBA) or $7.08–$7.14 (RBT); 97155 $30.10 (BCBA or psychologist), $19.92 (BCaBA) or $20.50 (RBT); 97156 $21.32 (BCBA) or $21.17 (psychologist); 97157 $11.70; 97158 $14.28; 0362T $35.09 (psychologist) or $31.50 (BCaBA); 0373T $25.74 (BCBA), $19.07 (psychologist), $20.50 (BCaBA) or $20.21 (RBT). Most BCBA and psychologist lines date from 03/10/2025; most BCaBA and RBT lines from 2022–2023. The schedule notes that codes priced at $0.00 pay 62% of usual and customary charges. MCOs pay their own contracted rates; CareSource, for one, says its maximum allowable for a service “is the same for all ABA providers.”',
        ],
        cites: [S.fee85, S.feePage, S.pt85, S.csPY],
      },
      {
        h2: 'Claims operations: NPI, timely filing, telehealth and appeals',
        body: [
          'Bill each service “with the National Provider Identifier (NPI) of the actual provider of the service, not the supervising clinician,” and add modifier UD on claims and PA requests for BCaBA (specialty 312) and RBT (specialty 314) services. Date-span billing is not permitted, and the NPI of the Medicaid-enrolled ordering or referring practitioner must be on the claim or it will deny. Only PT 85 (ABA), PT 60 (School Health Services) and PT 47 (tribal and IHS clinics) may bill ABA codes, and a PT 85 group NPI “must be unique to the group.” Timely filing: in-state claims without other insurance “must be received within 180 days of the date of service or date of eligibility decision”; claims with other insurance and claims from out-of-state providers have 365 days. A denied claim can be appealed through Secure Correspondence “no later than 30 calendar days from the date on the remittance advice.”',
          'Telehealth is billed with POS 02 (outside the home) or 10 (in the home) plus modifier 95 for real-time audio-video or 93 for audio-only; the home cannot bill the Q3014 facility fee. MSM 3400 gives telehealth “parity with in-person health care services” and lists only personal care, home health and private duty nursing as in-person-only; neither MSM 3400 nor the PT 85 guide names an ABA code that may not be delivered remotely. Neither MSM 3700 nor the PT 85 guide mentions electronic visit verification for ABA; Nevada Medicaid’s EVV program page is labelled EVV-PCA. ABA cannot be paid on the same day as Basic Skills Training or Psychosocial Rehabilitation (MSM 3704.2C(16)).',
        ],
        cites: [S.pt85, S.msm3700, S.billMan, S.teleBill, S.msm3400],
      },
      {
        h2: 'Can an out-of-state BCBA treat a Nevada Medicaid member, including by telehealth?',
        body: [
          NV_OOS_BODY,
          'Medicaid adds its own gate: MSM 3704.3 recognizes a behavior analyst only if the BCBA is “licensed by the Nevada State Board of Applied Behavior Analysis under NRS 641D.300,” and the same applies to BCaBAs (licensed) and RBTs (registered). MSM 3400 requires the distant-site provider to be an enrolled Medicaid provider and the originating site (the member) to be in Nevada. Out-of-state providers get 365 days for timely filing.',
        ],
        cites: [S.nrs641D, S.nrs629, S.msm3700, S.msm3400, S.billMan],
      },
    ],
    collect: [
      { title: 'Which Medicaid card', desc: 'Anthem, CareSource, Health Plan of Nevada, Molina, SilverSummit, or fee-for-service. The plan owns authorization, credentialing and payment.' },
      { title: 'Diagnosis + tool score', desc: 'ASD (or FASD) with an ADOS-2, CARS-2 or GARS-3 score, or documented DSM-5 criteria. FA-11F records it once; repeat testing is not required.' },
      { title: 'Ordering practitioner', desc: 'Physician, PA, APRN or psychologist who signs FA-11F; their Medicaid-enrolled NPI goes on the claim.' },
      { title: 'IEP / 504 plan', desc: 'If the school issued one, it must accompany the ABA request.' },
      { title: 'Parent signature', desc: 'FA-11E and the treatment plan need it; a parent or designated adult must be present for home-based training and supervision visits.' },
      { title: 'Other insurance', desc: 'Medicaid pays last; follow the primary’s rules or Medicaid denies too. Claims with other insurance have 365 days.' },
    ],
    sources: [S.msm3700, S.pt85, S.fee85, S.feePage, S.fa11e, S.fa11f, S.billMan, S.teleBill, S.msm3400, S.msm3600, S.abaPage, S.plans, S.smc, S.prtf, S.wa3315, S.nrs422, S.nrs641D, S.nrs629, S.bacbLic, S.cfr440, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'Supervision follows NRS 641D.610 and “must be overseen by a Licensed Psychologist, BCBA-D or BCBA who has experience in the treatment of autism, although the actual supervision may be provided by a BCaBA at their direction” (MSM 3704.3A). “The maximum number of units that can be used for supervision is 20% of the total number of hours of direct therapy services provided, unless clinical documentation is submitted that supports a need for additional units” (MSM 3704.2A(1)(j)); the PT 85 guide repeats that supervision is allowed up to 20% of treatment hours. The treatment plan must be developed and approved by a licensed psychologist, BCBA-D or BCBA, who “is responsible for all aspects of clinical direction, supervision, and case management.”',
        status: 'verified',
        cites: [S.msm3700, S.pt85, S.nrs641D],
      },
      concurrentBilling: {
        value: 'Not stated. The PT 85 guide’s “Do Not Report” lists for 97153 and 97155 do not name each other, and Nevada Medicaid applies CMS NCCI procedure-to-procedure edits and MUEs, but no Nevada source read says whether 97153 and 97155 may be billed for the same clock time.',
        status: 'unverified',
        cites: [S.pt85],
        verifyVia: 'Gainwell Provider Services (Nevada Medicaid), or the CMS Medicaid NCCI PTP tables the PT 85 guide points to (cms.gov/medicare/coding-billing/ncci-medicaid); for MCO members, the member’s plan.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Providers are limited to 12 hours of ABA per day and recipients to 40 hours per week (MSM 3704.2A(4)); the PT 85 guide applies the 40-hour cap to 0373T and 97153–97158 “regardless of NPI” and the 12-hour cap per servicing provider to 0362T, 0373T, 97151–97153 and 97155–97156. Delivery-model limits count 97153, 97155 and 0373T together: focused 15–25 hours a week, comprehensive 25–40. Code limits: 97151 one 16-unit session and 97152/0362T one 4-unit session per 180 days; 97156 4 units a week; 97157 one 4-unit session a month. “All session limits may be exceeded with prior authorization and documented medical necessity.”',
        status: 'verified',
        cites: [S.msm3700, S.pt85],
      },
      noteSignature: {
        value: 'A progress note is required for each day services were delivered, legible, with the recipient’s name (and whether it was group), place of service, date, actual start and end times, “The name of the provider who delivered the service,” their credentials and “The signature of the provider who delivered the service” (MSM 3704.4G). No signing deadline is stated.',
        status: 'verified',
        cites: [S.msm3700],
      },
      placeOfService: {
        value: 'ABA may be delivered “in a medical professional clinic/office, within a community environment or in the recipient’s home,” in the least restrictive setting (MSM 3704.1), and in “the natural setting (i.e. home, school and community-based settings, including clinics)” (MSM 3704.2A(8)). IEP/IFSP services may be billed by enrolled providers, with School Health Services under MSM 2800. A June 2024 DHCFP letter confirms ABA can be delivered in a PRTF or RTC. Not covered: resorts, spas and camps, education services, respite and child care. Telehealth uses POS 02 or 10.',
        status: 'verified',
        cites: [S.msm3700, S.prtf, S.teleBill],
      },
      billAsProvider: {
        value: '“Each service provided must be billed with the National Provider Identifier (NPI) of the actual provider of the service, not the supervising clinician.” BCBAs (specialty 310), psychologists (311), BCaBAs (312) and RBTs (314) enroll under PT 85, and BCaBA and RBT claims and PA requests “must include modifier UD.”',
        status: 'verified',
        cites: [S.pt85, S.msm3700],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'None. Medicaid “will reimburse for ABA rendered to Medicaid eligible individuals of all ages” (MSM 3704.1, April 1, 2024), and FA-11F certifies the member is “Medicaid Eligible (any age).” Members under 21 are also covered through EPSDT. (NRS 422.27497 itself guarantees the benefit for recipients under 27; the manual covers all ages.)',
        status: 'verified',
        cites: [S.msm3700, S.fa11f, S.nrs422],
      },
      dxRecency: {
        value: 'No recency rule for the diagnosis: “The diagnosis is to be completed only one time. Repeat testing should not be performed when full criteria were previously met” (MSM 3704.2A(6)(b)). FA-11F goes with the initial request only. For continued requests, FA-11E asks for baseline and progress over the previous 90 days.',
        status: 'verified',
        cites: [S.msm3700, S.fa11f, S.fa11e],
      },
      diagnosingProviders: {
        value: 'FA-11F must be signed by the practitioner ordering ABA, who “must be a Physician, Physician’s Assistant, Advanced Practice Registered Nurse (APRN) or Psychologist acting within their scope of practice,” and records the diagnosis date and tool. MSM 3704.1 likewise requires written orders from a physician, PA, psychologist or APRN/NP. Nevada’s ABA licensure statute excludes diagnosis from the practice of ABA (NRS 641D.080).',
        status: 'verified',
        cites: [S.fa11f, S.msm3700, S.nrs641D],
      },
      diagnosticTools: {
        value: 'MSM 3704.2A(5)(f) lists ADOS-2, CARS-2, GARS-3 and the FASD diagnostic category. “If … (DSM-5) criteria alone are used as the sole basis for diagnosis the provider must submit documentation of the specific DSM-5 criteria that were met.” FA-11F asks for the tool, score and subscale scores; the PT 85 guide says the diagnosis must use “a widely accepted diagnostic test (generally those listed on the FA-11F form)” or a DSM-5 clinical evaluation.',
        status: 'verified',
        cites: [S.msm3700, S.fa11f, S.pt85],
      },
      referral: {
        value: 'Yes. ABA “must be rendered according to the written orders of the Physician, Physician’s Assistant …, Nevada Board of Psychological Examiners or an Advanced Practitioner Registered Nurse (APRN)/Nurse Practitioner (NP)” (MSM 3704.1), certified on FA-11F with the first request. The ordering or referring practitioner must be Medicaid-enrolled and their NPI must be on the claim, or it denies.',
        status: 'verified',
        cites: [S.msm3700, S.fa11f, S.pt85],
      },
      telehealth: {
        value: 'Allowed on parity. MSM 3403 says Nevada Medicaid reimburses telehealth, “Services provided via telehealth have parity with in-person health care services,” the originating site must be in Nevada, and the distant-site provider must be Medicaid-enrolled; the only services MSM 3403.6 requires in person are personal care, home health and private duty nursing. NRS 422.2721 requires the State Plan to pay for telehealth “to the same extent as though provided in person” and bars extra prior authorization for telehealth. Bill POS 10 (home) or 02 plus modifier 95 (audio-video) or 93 (audio-only). No Nevada ABA document lists which ABA codes are clinically appropriate remotely, and the clinician must hold a Nevada license (NRS 629.515).',
        status: 'verified',
        cites: [S.msm3400, S.nrs422, S.teleBill, S.nrs629],
      },
      authTurnaround: {
        value: 'Nevada publishes no ABA decision clock for fee-for-service. The federal floor applies: since January 1, 2026 the state agency must decide a standard request “in no case later than 7 calendar days after receiving the request” and an expedited one “in no case later than 72 hours.” On Nevada’s side, a pended request gives the provider five business days to send missing information before a technical denial; reconsideration results come within 30 calendar days. Continued-service requests must arrive by the last authorized date (5–15 days early is recommended). MCO members follow their plan’s clock under 42 CFR 438.210(d) (7 calendar days for rating periods starting on or after January 1, 2026).',
        status: 'verified',
        cites: [S.cfr440, S.pt85, S.billMan, S.cfr438],
      },
      coordinationOfBenefits: {
        value: '“Medicaid is the payer of last resort and must be billed after all other payment sources,” and providers must “Always follow other payers’ billing requirements. If the other payer denies a claim because you did not follow their requirements, Medicaid will also deny the claim.” Claims with other insurance have 365 days for timely filing. A provider may not bill the family for the primary plan’s copayment or for the difference between billed and paid amounts. The rule rests on 42 CFR 433.139.',
        status: 'verified',
        cites: [S.billMan, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Nevada Medicaid cover ABA for adults?', a: 'Yes. Since April 1, 2024, MSM 3700 covers ABA for Medicaid members of all ages with ASD, FASD or another condition for which ABA is medically necessary. Members under 21 are also covered through EPSDT.' },
      { q: 'Does the ABA assessment need prior authorization in Nevada Medicaid?', a: 'No. Initial assessments and reassessments need no PA, limited to one every 180 days (97151 up to 16 units; 97152 and 0362T up to 4). Treatment needs PA on FA-11E, with FA-11F on the first request.' },
      { q: 'Is ABA carved out of Nevada Medicaid managed care?', a: 'No. ABA is a benefit of the five health plans (Anthem, CareSource, Health Plan of Nevada, Molina, SilverSummit), which went statewide on January 1, 2026. Members outside managed care use fee-for-service through Gainwell.' },
      { q: 'What does Nevada Medicaid pay for ABA?', a: 'Per 15 minutes on the 07/2026 PT 85 schedule: BCBA 97151 $29.14, 97153 and 97155 $30.10, 97156 $21.32; RBT (UD) 97153 $13.01; BCaBA (UD) 97153 $18.06. The health plans pay contracted rates.' },
      { q: 'Whose NPI goes on a Nevada Medicaid ABA claim?', a: 'The person who delivered the service, not the supervisor. RBT and BCaBA lines also carry modifier UD, and the ordering practitioner’s enrolled NPI must be on the claim.' },
      { q: 'How long do I have to file a Nevada Medicaid ABA claim?', a: '180 days from the date of service (or eligibility decision) for in-state claims without other insurance; 365 days with other insurance or for out-of-state providers. Claim appeals are due within 30 days of the remittance advice.' },
      { q: 'Can a BCBA licensed in another state treat a Nevada Medicaid member by telehealth?', a: 'Only with a Nevada license. NRS 629.515 requires a Nevada license for telehealth to a patient in Nevada, and MSM 3700 recognizes only BCBAs licensed by the Nevada Board of Applied Behavior Analysis. Licensure by endorsement (NRS 641D.340) is the fast path for analysts already licensed elsewhere.' },
    ],
  },

  'anthem-nevada-medicaid': {
    slug: 'anthem-nevada-medicaid',
    family: 'anthem',
    cardDesc: 'Nevada Medicaid MCO (Community Care Health Plan of Nevada); covers ABA at any age; BH requests through Availity; manual still prints a 14-day clock.',
    assessmentPA: {
      value: 'Not stated by the plan. Anthem says its ABA prior-authorization “requirements remain unchanged” but its public precertification page does not list ABA codes; the state rule exempts assessments (one per 180 days), but MCO PA lists can differ',
      status: 'unverified',
      cites: [S.anMcdNews, S.anMcdPrecert, S.msm3700],
      verifyVia: 'Anthem Nevada Medicaid Provider Services, 844-396-2330, or the precertification lookup in Availity Essentials: check 97151, 97152 and 0362T.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes. Anthem’s notice on the 2024 age expansion tells providers to “continue to submit ABA requests following the current utilization management process,” with behavioral health authorizations handled in Availity/Interactive Care Reviewer; every behavioral health precertification request goes through Availity Essentials',
      status: 'verified',
      cites: [S.anMcdNews, S.anMcdPrecert],
    },
    dxRequired: {
      value: 'Yes. The manual covers ABA “to treat members, usually children, with autism spectrum disorder (ASD) as well as other developmental diagnoses as clinically appropriate”; the state rule (ASD, FASD or another condition for which ABA is medically necessary, certified on FA-11F) sits underneath',
      status: 'verified',
      cites: [S.anMcdPM, S.msm3700],
    },
    payer: 'Anthem Blue Cross and Blue Shield Healthcare Solutions (Nevada Medicaid)',
    state: 'NV', kind: 'medicaid-mco', parent: 'Nevada Medicaid (Statewide Managed Care)',
    pill: 'Payer Guide · Anthem · Nevada Medicaid',
    h1: 'Anthem Nevada Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Anthem Nevada Medicaid ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Anthem Blue Cross and Blue Shield Healthcare Solutions covers ABA for Nevada Medicaid members: any-age coverage, Availity authorization, Carelon behavioral health, 180-day timely filing, 30-day clean-claim payment, and the state rules underneath.',
    intro: [
      'Anthem Blue Cross and Blue Shield Healthcare Solutions is the trade name of Community Care Health Plan of Nevada, Inc., one of the five health plans NVHA lists for Nevada Medicaid and Nevada Check Up since statewide managed care began on January 1, 2026. Its provider manual lists Applied Behavioral Analysis as a covered service “rendered to Medicaid-eligible individuals of any age who meet medical necessity criteria,” and Anthem’s 2024 provider notice confirmed that all PT 85 codes were opened to every age. This is the Medicaid plan; Anthem’s commercial Nevada plans have their own guide.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, any age, with children supported under EPSDT' },
      { label: 'Prior auth', value: 'Treatment: yes, through Availity (behavioral health via ICR); assessment: not published' },
      { label: 'Behavioral health partner', value: 'Carelon Behavioral Health (provider line 800-397-1630)' },
      { label: 'Decision clock', value: 'Manual prints 14 calendar days; federal rule is 7 for rating periods from 1/1/2026' },
      { label: 'Timely filing', value: '180 days from date of service (365 for out-of-state providers)' },
      { label: 'Licensure', value: 'Nevada-licensed BCBA/BCaBA, registered RBT (NRS 641D)' },
    ],
    sections: [
      {
        h2: 'Coverage and authorization',
        body: [
          'The manual’s covered-services table describes ABA as “a behavior intervention model to treat members, usually children, with autism spectrum disorder (ASD) as well as other developmental diagnoses as clinically appropriate,” rendered at any age to members who meet medical necessity, with children “supported in accordance with” EPSDT. Its listed components include assessment, re-evaluation, a treatment plan with measurable goals, functional communication, adaptive living and social skills. Anthem’s November 2024 notice on SB 191 lists all ten PT 85 codes (97151–97158, 0362T, 0373T) and says the age change “does not change the procedure for obtaining authorization for ABA services”; providers submit through Availity Essentials (Patient Registration, then Authorizations and Referrals), and behavioral health authorizations and inquiries may still route to Interactive Care Reviewer. Anthem’s precertification page says to submit all behavioral health precertification requests through Availity. The same notice names Carelon Behavioral Health as the company providing utilization management on behalf of the plan and the route for joining the behavioral health network.',
          'Standard authorization decisions, per the July 2025 manual, come “within the State’s established timelines that will not exceed 14 calendar days,” with up to 14 more, and expedited decisions within 72 hours. Federal rules have since tightened the standard limit to 7 calendar days for rating periods starting on or after January 1, 2026, which covers Nevada’s 2026 contracts. ' + NV_MCO_APPEALS,
        ],
        cites: [S.anMcdPM, S.anMcdNews, S.anMcdPrecert, S.cfr438, S.msm3600],
      },
      {
        h2: 'Claims: timely filing, clean claims and other insurance',
        body: [
          'Network providers “must submit claims within 180 days from the date of service”; out-of-state providers have 365 days, and when other insurance exists the 180 days run from the primary carrier’s payment notice. “Clean claims are adjudicated to a paid or denied status within 30 calendar days of receipt,” with interest if payment is late. Anthem and its providers agree “the Medicaid program will be the payer of last resort,” so a claim is redirected to the other carrier when Anthem knows of it. For ABA billing rules (rendering NPI, UD modifier, ordering-provider NPI), Anthem publishes nothing of its own; the state PT 85 rules are the floor.',
        ],
        cites: [S.anMcdPM, S.pt85],
      },
      {
        h2: 'Can an out-of-state BCBA treat an Anthem Nevada Medicaid member, including by telehealth?',
        body: [NV_OOS_BODY],
        cites: [S.nrs641D, S.nrs629, S.msm3700],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Anthem (not FFS or another plan) on the date of service; eligibility is month to month.' },
      { title: 'Diagnosis + FA-11F', desc: 'ASD or FASD with the tool score; the state certification form records the ordering practitioner.' },
      { title: 'Ordering practitioner NPI', desc: 'Physician, PA, APRN or psychologist; the state requires the ordering NPI on ABA claims.' },
      { title: 'Other insurance', desc: 'Anthem pays last; bill the primary first. The 180-day clock then runs from the primary’s payment notice.' },
    ],
    sources: [S.anMcdPM, S.anMcdNews, S.anMcdPrecert, S.plans, S.msm3700, S.msm3600, S.pt85, S.fa11f, S.msm3400, S.nrs422, S.cfr438, S.cfr433, S.nrs641D, S.nrs629],
    deliveryRules: {
      supervision: {
        value: 'Anthem publishes no ABA supervision rule of its own. ' + ST_SUPERVISION,
        status: 'verified',
        cites: [S.msm3700, S.msm3600, S.anMcdPM],
      },
      concurrentBilling: {
        value: 'Not addressed by Anthem, and the state publishes no same-time rule for 97153 and 97155.',
        status: 'unverified',
        cites: [S.anMcdPM, S.pt85],
        verifyVia: 'Anthem Nevada Medicaid Provider Services, 844-396-2330, or your provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Anthem publishes no ABA unit limits of its own. ' + ST_DAILY,
        status: 'verified',
        cites: [S.msm3700, S.pt85, S.msm3600],
      },
      noteSignature: {
        value: 'Anthem publishes no ABA note rule of its own. ' + ST_NOTES,
        status: 'verified',
        cites: [S.msm3700, S.msm3600],
      },
      placeOfService: {
        value: 'Anthem publishes no ABA setting rule of its own. ' + ST_POS,
        status: 'verified',
        cites: [S.msm3700, S.teleBill],
      },
      billAsProvider: {
        value: 'Not stated by Anthem. The fee-for-service rule is to bill the NPI “of the actual provider of the service, not the supervising clinician,” with modifier UD for BCaBA and RBT lines; whether Anthem uses the same rendering rule is set in the provider agreement.',
        status: 'unverified',
        cites: [S.pt85, S.anMcdPM],
        verifyVia: 'Anthem Nevada Medicaid Provider Services, 844-396-2330: ask whether RBT lines go out under the RBT’s own NPI with UD, as in fee-for-service.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'None: the manual covers ABA for “Medicaid-eligible individuals of any age who meet medical necessity criteria,” consistent with MSM 3704.1.',
        status: 'verified',
        cites: [S.anMcdPM, S.anMcdNews, S.msm3700],
      },
      dxRecency: {
        value: 'Anthem publishes nothing of its own. The state rule: the diagnosis is “completed only one time” and repeat testing “should not be performed when full criteria were previously met” (MSM 3704.2A(6)(b)).',
        status: 'verified',
        cites: [S.msm3700, S.anMcdPM],
      },
      diagnosingProviders: {
        value: 'Anthem publishes nothing of its own. The state’s FA-11F must be signed by a physician, physician assistant, APRN or psychologist acting within scope.',
        status: 'verified',
        cites: [S.fa11f, S.msm3700],
      },
      diagnosticTools: {
        value: 'Anthem publishes nothing of its own. ' + ST_TOOLS,
        status: 'verified',
        cites: [S.msm3700, S.fa11f],
      },
      referral: {
        value: 'Anthem publishes nothing different. ' + ST_REFERRAL,
        status: 'verified',
        cites: [S.msm3700, S.fa11f],
      },
      telehealth: {
        value: 'Anthem publishes no ABA telehealth rule of its own. ' + ST_TELE,
        status: 'verified',
        cites: [S.msm3400, S.nrs422, S.teleBill, S.nrs629],
      },
      authTurnaround: {
        value: 'The July 2025 manual promises standard decisions “within the State’s established timelines that will not exceed 14 calendar days following receipt,” extendable by 14, and expedited decisions “no later than 72 hours after receipt.” For rating periods starting on or after January 1, 2026, 42 CFR 438.210(d) caps standard decisions at 7 calendar days.',
        status: 'plan-dependent',
        cites: [S.anMcdPM, S.cfr438],
        verifyVia: 'Anthem Nevada Medicaid Provider Services, 844-396-2330: confirm the standard decision timeframe now applied to ABA requests.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: '“Anthem and our providers agree the Medicaid program will be the payer of last resort when third-party resources are available”; Anthem rejects a claim and redirects you to the other carrier when it knows of the coverage, or recovers after payment. With other insurance, file within 180 days of the primary carrier’s payment notice (365 for out-of-state providers).',
        status: 'verified',
        cites: [S.anMcdPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Anthem Nevada Medicaid cover ABA for adults?', a: 'Yes. Anthem’s manual covers ABA for Medicaid members of any age who meet medical necessity, following Nevada’s 2024 removal of age limits.' },
      { q: 'How do I request ABA authorization from Anthem Nevada Medicaid?', a: 'Through Availity Essentials (Authorizations and Referrals); behavioral health requests may route to Interactive Care Reviewer. Use the state FA-11E/FA-11F content, and confirm assessment-code rules in the lookup or with Provider Services at 844-396-2330.' },
      { q: 'What is Anthem Nevada Medicaid’s timely filing limit?', a: '180 days from the date of service for network providers, 365 for out-of-state providers; clean claims are adjudicated within 30 calendar days.' },
    ],
  },

  'caresource-nevada': {
    slug: 'caresource-nevada',
    family: 'caresource',
    cardDesc: 'Nevada Medicaid MCO new in 2026; its own ABA medical and reimbursement policies mirror MSM 3700, add a 24-month diagnosis-age rule and require signed plans before claims.',
    assessmentPA: {
      value: 'No. “Initial Behavior Assessment and Reassessments: A review of medical necessity is not required but are limited to 1 every 180 days, unless prior authorized” (NV MCD-MM-1846); the reimbursement policy lists 97151 at one 16-unit session and 97152 at one 4-unit session per 180 days',
      status: 'verified',
      cites: [S.csMM, S.csPY],
    },
    treatmentPA: {
      value: 'Yes. “All services must be reviewed for medical necessity prior to service provision”; adaptive behavior treatment and family treatment require review before services, with continuation requests every 6 months',
      status: 'verified',
      cites: [S.csMM, S.csPY],
    },
    dxRequired: {
      value: 'Yes: a “definitive, primary diagnosis of ASD, FASD, or other developmental diagnosis for which ABA is medically necessary,” with standardized tool results',
      status: 'verified',
      cites: [S.csMM],
    },
    payer: 'CareSource Nevada (Medicaid)',
    state: 'NV', kind: 'medicaid-mco', parent: 'Nevada Medicaid (Statewide Managed Care)',
    pill: 'Payer Guide · CareSource · Nevada Medicaid',
    h1: 'CareSource Nevada Medicaid ABA coverage: the intake guide.',
    metaTitle: 'CareSource Nevada Medicaid ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How CareSource covers ABA for Nevada Medicaid members: its 2026 ABA medical and reimbursement policies, no review for assessments, 6-month reviews, the 24-month diagnosis rule, RBT supervision, signed treatment plans before claims, and state limits.',
    intro: [
      'CareSource joined Nevada Medicaid with the statewide managed care contracts that started January 1, 2026, and NVHA lists it among the five health plans. Unlike most Nevada plans, it publishes two Nevada-specific ABA policies, both effective January 1, 2026: a medical policy (NV MCD-MM-1846) and a reimbursement policy (NV MCD-PY-1695). Both say CareSource follows the Medicaid Services Manual and that state guidance “supersedes this policy,” so they mostly restate MSM 3700, with a few CareSource additions worth knowing at intake.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, at any age, for ASD, FASD or another developmental diagnosis (members under 21 under EPSDT)' },
      { label: 'Assessment review', value: 'None; 1 assessment per 180 days unless prior authorized' },
      { label: 'Treatment review', value: 'Before services, then every 6 months' },
      { label: 'Diagnosis age', value: 'Evaluation older than 24 months needs a provider letter on symptoms in the past year' },
      { label: 'Before claims', value: 'Signed treatment documentation must reach CareSource before the claim' },
      { label: 'Limits', value: 'State limits: 12 hrs/day per provider, 40 hrs/wk per member, supervision 20%' },
    ],
    sections: [
      {
        h2: 'What CareSource’s ABA policies add to the state rules',
        body: [
          'Medical necessity review is required “initially with a baseline and then, again, every 6 months.” The initial request must document the diagnosis and the ordering practitioner (physician, physician assistant, the Nevada Board of Psychological Examiners licensee, or APRN/NP), a treatment regimen “designed and signed by a qualified ABA provider,” and standardized tools (ADOS-2, CARS-2, GARS, or an FASD diagnostic category; DSM criteria alone need the specific criteria documented). CareSource adds one dated rule the state does not have: if the diagnostic evaluation “was completed more than 24 months from date of request,” send written documentation, such as a provider letter, describing DSM symptoms present within the past year. The treatment record must be signed by the parent or guardian “and submitted to CareSource prior to claim submission. Claims will not be accepted without accompanying, signed treatment documentation.”',
          'The reimbursement policy restates Nevada’s limits (focused 15–25, comprehensive 25–40 hours a week; 12 hours a day per provider; 40 hours a week per member; supervision up to 20% of direct hours) and adds billing rules: a BCBA doing one-to-one treatment bills it as treatment, not 97155; a supervising BCBA “must review and approve the data collection and progress notes completed by a BCaBA or RBT under supervision prior to submitting a claim”; RBTs need ongoing supervision of at least 5% of their monthly service hours; and new RBTs get 60 days from hire to finish BACB credentialing. Each claim line must cover a single date of service, CareSource applies CMS Medicaid MUEs, and a unit counts once the midpoint of 15 minutes is passed. ' + NV_MCO_APPEALS,
        ],
        cites: [S.csMM, S.csPY, S.msm3600],
      },
      {
        h2: 'Can an out-of-state BCBA treat a CareSource Nevada member, including by telehealth?',
        body: [
          NV_OOS_BODY,
          'CareSource’s own telehealth section warns providers to consider “interstate licensure challenges” and reserves the right to request supervision documentation, “particularly related to telehealth services.”',
        ],
        cites: [S.nrs641D, S.nrs629, S.csMM],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm CareSource on the date of service.' },
      { title: 'Diagnostic evaluation date', desc: 'If older than 24 months, get a provider letter describing symptoms in the past year.' },
      { title: 'Tool scores', desc: 'ADOS-2, CARS-2, GARS or FASD category, or documented DSM criteria.' },
      { title: 'Signed treatment plan', desc: 'Parent or guardian signature; it must reach CareSource before any claim.' },
      { title: 'School schedule and IEP', desc: 'The initial plan asks for school placement, weekly school hours and any IEP.' },
      { title: 'Other insurance', desc: 'Medicaid is the payer of last resort; the primary’s determination is required.' },
    ],
    sources: [S.csMM, S.csPY, S.plans, S.msm3700, S.msm3600, S.pt85, S.msm3400, S.cfr438, S.cfr433, S.nrs641D, S.nrs629],
    deliveryRules: {
      supervision: {
        value: 'RBT services “must be supervised by a qualified RBT supervisor (ie, BCBA, BCBA-D, licensed psychologist …) and obtain ongoing supervision for a minimum of 5% of the hours spent providing ABA services per month”; BCaBAs must be supervised by a BCBA, BCBA-D or qualified psychologist. Supervision units are capped at 20% of direct therapy hours unless documentation supports more, and the licensed psychologist, BCBA-D or BCBA “is responsible for all aspects of clinical direction, supervision, and case management.”',
        status: 'verified',
        cites: [S.csPY, S.csMM],
      },
      concurrentBilling: {
        value: 'Not directly addressed. CareSource says a BCBA delivering one-to-one treatment without supervising a BCaBA or RBT “is not considered an adaptive behavior treatment with protocol modification service and must be billed as an ABA therapy treatment service,” but does not say whether 97153 and 97155 may be billed for the same minutes.',
        status: 'unverified',
        cites: [S.csPY],
        verifyVia: 'CareSource Nevada Provider Services: ask whether 97155 and the RBT’s 97153 may both be billed for the same time when the BCBA is directing the RBT.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Providers are limited to 12 hours of ABA a day and members to 40 hours a week; focused 15–25 and comprehensive 25–40 hours a week for 97153, 97155 and 0373T combined, exceedable with prior authorization; 97151 one 16-unit session and 97152 one 4-unit session per 180 days; CMS Medicaid MUEs apply.',
        status: 'verified',
        cites: [S.csPY],
      },
      noteSignature: {
        value: 'A progress note is required “for each day services were delivered” with the MSM 3704.4G elements (including the rendering provider’s name, credentials and signature) “in addition to identification of all present during the session(s),” and the supervising BCBA must review and approve BCaBA and RBT data and notes before the claim is submitted.',
        status: 'verified',
        cites: [S.csPY, S.msm3700],
      },
      placeOfService: {
        value: 'Services are delivered “in the least restrictive, most normative setting possible, including a medical professional clinic/office, a community environment or in the member’s home,” and may be in individual or group (2–8) sessions in natural settings including school; education-related IDEA services, camps, resorts and other nonconventional settings are excluded.',
        status: 'verified',
        cites: [S.csMM, S.csPY],
      },
      billAsProvider: {
        value: 'Not stated beyond requiring “Appropriate modifiers indicating qualifications of staff delivering services.” The fee-for-service rule bills the NPI of the person who delivered the service with UD for BCaBA and RBT lines; confirm CareSource follows it.',
        status: 'unverified',
        cites: [S.csPY, S.pt85],
        verifyVia: 'CareSource Nevada Provider Services: ask whose NPI goes on RBT lines and which modifier is required.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'None: “ABA therapy is a medical necessary treatment for any age for conditions recognized as medically necessary”; members under 21 are evaluated under EPSDT.',
        status: 'verified',
        cites: [S.csMM],
      },
      dxRecency: {
        value: 'If the submitted diagnostic evaluation “was completed more than 24 months from date of request,” CareSource needs written documentation (for example a provider letter) describing DSM symptoms present within the past year that require treatment. Continuation requests every 6 months must show the diagnosis persists.',
        status: 'verified',
        cites: [S.csMM],
      },
      diagnosingProviders: {
        value: 'The diagnosis must be “rendered according to the written orders of” a physician, physician’s assistant, Nevada Board of Psychological Examiners licensee, or APRN/NP; the initial behavior assessment is by “a fully credentialed BCBA with state licensure.”',
        status: 'verified',
        cites: [S.csMM],
      },
      diagnosticTools: {
        value: 'ADOS-2, CARS-2, GARS-2 (as printed in the policy; the state form now lists GARS-3) or the FASD diagnostic category; if DSM criteria alone are used, document the specific criteria met.',
        status: 'verified',
        cites: [S.csMM, S.fa11f],
      },
      referral: {
        value: 'Yes: written orders from a physician, physician’s assistant, psychologist or APRN/NP, and a treatment regimen designed and signed by a qualified ABA provider, must be documented before services.',
        status: 'verified',
        cites: [S.csMM],
      },
      telehealth: {
        value: 'Allowed: “Telemedicine services are reimbursed in the same manner and subject to the same limits as in-person, face-to-face service delivery.” Providers must document clinical appropriateness and consider interstate licensure, and CareSource may request supervision documentation for telehealth. It lists no ABA codes excluded from telehealth. The clinician needs a Nevada license (NRS 629.515).',
        status: 'verified',
        cites: [S.csPY, S.csMM, S.nrs629],
      },
      authTurnaround: {
        value: 'CareSource’s ABA policies publish no decision timeframe. The federal managed-care limit applies: 7 calendar days for standard requests for rating periods starting on or after January 1, 2026 (extendable by 14), 72 hours for expedited.',
        status: 'plan-dependent',
        cites: [S.cfr438, S.csMM],
        verifyVia: 'CareSource Nevada Provider Services: ask the standard turnaround for ABA requests and the recommended lead time before an authorization ends.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: '“When a member has other insurance, Medicaid is always the payer of last resort. CareSource will not pay more than the Medicaid rate totals for service. Primary payer must provide evidence of determinations for consideration of Medicaid coverage for services.”',
        status: 'verified',
        cites: [S.csPY, S.cfr433],
      },
    },
    faq: [
      { q: 'Does CareSource Nevada need prior authorization for the ABA assessment?', a: 'No. Initial assessments and reassessments need no medical necessity review, limited to one every 180 days. Treatment is reviewed before it starts and every 6 months.' },
      { q: 'Is an old autism evaluation accepted by CareSource Nevada?', a: 'Yes, but if it is more than 24 months old, add a provider letter describing DSM symptoms present in the past year.' },
      { q: 'Why was my CareSource Nevada ABA claim rejected?', a: 'One common cause: CareSource will not accept ABA claims until it has the signed treatment documentation (parent or guardian signature). Each claim line must also be a single date of service.' },
    ],
  },

  'health-plan-of-nevada': {
    slug: 'health-plan-of-nevada',
    family: 'unitedhealthcare',
    cardDesc: 'UnitedHealth-owned Nevada Medicaid MCO; since 11/17/2025 PA for all ABA therapy, reviewed by HPN’s own BH team on InterQual.',
    assessmentPA: {
      value: 'Not stated separately. HPN says “prior authorization is required for all ABA therapy services, regardless of billed charges per service line,” but does not say whether the assessment codes count as therapy',
      status: 'unverified',
      cites: [S.hpnNews],
      verifyVia: 'HPN Provider Services, 702-242-7088 (option 2, then 5) or 1-800-745-7065: ask whether 97151/97152 need PA for Medicaid members.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes, for all ABA therapy services from November 17, 2025, reviewed by HPN’s Behavioral Health team under InterQual; contracted providers submit through the Online Provider Center (provider.healthplanofnevada.com), others by phone 702-240-8733 or fax 702-341-7681',
      status: 'verified',
      cites: [S.hpnNews],
    },
    dxRequired: {
      value: 'Yes. HPN’s ABA form opens with an ASD Diagnosis Certification (ADOS, CARS or GARS-2 score) for initial requests; the state rule covers ASD, FASD or another condition for which ABA is medically necessary',
      status: 'verified',
      cites: [S.hpnForm, S.msm3700],
    },
    payer: 'Health Plan of Nevada (Nevada Medicaid)',
    state: 'NV', kind: 'medicaid-mco', parent: 'Nevada Medicaid (Statewide Managed Care)',
    pill: 'Payer Guide · Health Plan of Nevada · Nevada Medicaid',
    h1: 'Health Plan of Nevada Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Health Plan of Nevada Medicaid ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Health Plan of Nevada (UnitedHealthcare) covers ABA for Nevada Medicaid members: prior authorization for all ABA therapy since November 2025, InterQual review by HPN’s behavioral health team, its outdated ABA form, and the state rules underneath.',
    intro: [
      'Health Plan of Nevada is the UnitedHealthcare-owned Medicaid plan NVHA lists alongside Anthem, CareSource, Molina and SilverSummit. Its Medicaid members are served at myhpnmedicaid.com, and its ABA rules changed in late 2025: from November 17, 2025, HPN’s own Behavioral Health team reviews every ABA therapy request against InterQual, and prior authorization is required for all ABA therapy. The same change hit HPN’s commercial plans (Health Plan of Nevada, Sierra Health and Life, Sierra Health-Care Options) on November 1, 2025.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes (state benefit: any age, ASD/FASD/other medically necessary condition)' },
      { label: 'Prior auth', value: 'Required for all ABA therapy from 11/17/2025, any billed amount' },
      { label: 'Criteria', value: 'InterQual (licensed; copy available on request)' },
      { label: 'Submit via', value: 'Online Provider Center (contracted); phone 702-240-8733 / fax 702-341-7681 (non-contracted)' },
      { label: 'Provider Services', value: '702-242-7088 (option 2, then 5) or 1-800-745-7065' },
      { label: 'Licensure', value: 'Nevada-licensed BCBA/BCaBA, registered RBT (NRS 641D)' },
    ],
    sections: [
      {
        h2: 'Prior authorization since November 2025',
        body: [
          'HPN’s October 22, 2025 notice says that “our Behavioral Health team will review all ABA therapy authorization requests, according to InterQual guidelines. A copy of the guidelines is available upon request. As part of this transition, prior authorization is required for all ABA therapy services, regardless of billed charges per service line.” The Medicaid change took effect November 17, 2025. Contracted providers submit requests with supporting documentation through the Online Provider Center at provider.healthplanofnevada.com; non-contracted providers may phone 702-240-8733 or fax 702-341-7681.',
          'One caution for intake: the “Applied Behavioral Analysis form” still posted on HPN’s Medicaid prior-authorization page carries an older version of the state certification, which has the practitioner certify the individual “is between 0 and 21 years of age” and lists GARS-2. Nevada’s current FA-11F (updated June 2025) certifies the member is “Medicaid Eligible (any age)” and lists ADOS-2, CARS-2 and GARS-3. For an adult member, ask HPN which form it wants rather than signing the outdated age certification. ' + NV_MCO_APPEALS,
        ],
        cites: [S.hpnNews, S.hpnPA, S.hpnForm, S.fa11f, S.msm3600],
      },
      {
        h2: 'Can an out-of-state BCBA treat an HPN Medicaid member, including by telehealth?',
        body: [NV_OOS_BODY],
        cites: [S.nrs641D, S.nrs629, S.msm3700],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Health Plan of Nevada Medicaid (not HPN commercial) on the date of service.' },
      { title: 'Diagnosis certification', desc: 'ASD with ADOS, CARS or GARS score and the ordering practitioner’s signature.' },
      { title: 'Treatment plan and assessment', desc: 'HPN reviews on InterQual; send the full assessment and plan with the request.' },
      { title: 'Other insurance', desc: 'Medicaid is the payer of last resort; bill the primary first.' },
    ],
    sources: [S.hpnNews, S.hpnPA, S.hpnForm, S.plans, S.msm3700, S.msm3600, S.pt85, S.fa11f, S.msm3400, S.nrs422, S.cfr438, S.cfr433, S.nrs641D, S.nrs629],
    deliveryRules: {
      supervision: {
        value: 'HPN publishes no ABA supervision rule. ' + ST_SUPERVISION,
        status: 'verified',
        cites: [S.msm3700, S.msm3600, S.hpnNews],
      },
      concurrentBilling: {
        value: 'Not addressed by HPN or by the state.',
        status: 'unverified',
        cites: [S.hpnNews, S.pt85],
        verifyVia: 'HPN Provider Services, 702-242-7088 (option 2, then 5).',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'HPN publishes no ABA unit limits; authorized hours are set per request under InterQual. The state limits underneath: ' + ST_DAILY,
        status: 'verified',
        cites: [S.msm3700, S.pt85, S.hpnNews],
      },
      noteSignature: {
        value: 'HPN publishes no ABA note rule. ' + ST_NOTES,
        status: 'verified',
        cites: [S.msm3700, S.msm3600],
      },
      placeOfService: {
        value: 'HPN publishes no ABA setting rule. ' + ST_POS,
        status: 'verified',
        cites: [S.msm3700, S.teleBill],
      },
      billAsProvider: {
        value: 'Not stated by HPN. The fee-for-service rule bills the NPI of the person who delivered the service, with UD for BCaBA and RBT lines.',
        status: 'unverified',
        cites: [S.pt85, S.hpnNews],
        verifyVia: 'HPN Provider Services, 702-242-7088 (option 2, then 5): ask whose NPI goes on technician lines.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The state benefit has no age limit (MSM 3704.1), but HPN’s posted ABA form still has the practitioner certify the member “is between 0 and 21 years of age.” Confirm HPN applies the any-age rule before an adult intake.',
        status: 'plan-dependent',
        cites: [S.msm3700, S.hpnForm, S.fa11f],
        verifyVia: 'HPN Provider Services, 702-242-7088 (option 2, then 5): ask whether the 0–21 certification on its ABA form is still applied.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not published by HPN; InterQual review criteria are licensed. The state rule is that the diagnosis is “completed only one time.”',
        status: 'unverified',
        cites: [S.hpnNews, S.msm3700],
        verifyVia: 'Ask HPN for its InterQual ABA criteria (“available upon request”) or call the Behavioral Health team at 702-240-8733.',
        blocker: 'licensed',
      },
      diagnosingProviders: {
        value: 'HPN’s form has the ordering practitioner certify the diagnosis and lists “a Physician, Physician’s Assistant, Advanced Practice Registered Nurse (APRN), Psychologist, Ph.D. or a Board Certified BCBA.” The current state FA-11F drops the BCBA and limits it to physician, PA, APRN or psychologist.',
        status: 'plan-dependent',
        cites: [S.hpnForm, S.fa11f],
        verifyVia: 'HPN Behavioral Health, 702-240-8733: confirm which practitioners may sign the diagnosis certification.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'HPN’s form asks for an ADOS, CARS or GARS-2 score with subscales; the state’s FA-11F asks for ADOS-2, CARS-2, GARS-3, an FASD category or documented DSM-5 criteria.',
        status: 'verified',
        cites: [S.hpnForm, S.fa11f],
      },
      referral: {
        value: 'HPN publishes nothing different. ' + ST_REFERRAL,
        status: 'verified',
        cites: [S.msm3700, S.fa11f, S.hpnForm],
      },
      telehealth: {
        value: 'HPN publishes no ABA telehealth rule. ' + ST_TELE,
        status: 'verified',
        cites: [S.msm3400, S.nrs422, S.teleBill, S.nrs629],
      },
      authTurnaround: {
        value: 'HPN publishes no ABA decision timeframe. The federal managed-care limit applies: 7 calendar days for standard requests in rating periods starting on or after January 1, 2026, 72 hours expedited.',
        status: 'plan-dependent',
        cites: [S.cfr438, S.hpnNews],
        verifyVia: 'HPN Behavioral Health, 702-240-8733: ask the standard turnaround and how early to submit continued-service requests.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'HPN publishes no ABA-specific rule. Medicaid is the payer of last resort (42 CFR 433.139), and Nevada Medicaid denies what a primary denied for not following its rules; bill the primary first.',
        status: 'verified',
        cites: [S.cfr433, S.billMan],
      },
    },
    faq: [
      { q: 'Does Health Plan of Nevada Medicaid require prior authorization for ABA?', a: 'Yes. Since November 17, 2025, prior authorization is required for all ABA therapy services, regardless of billed charges, reviewed by HPN’s Behavioral Health team on InterQual.' },
      { q: 'Is Health Plan of Nevada the same as UnitedHealthcare?', a: 'HPN is a UnitedHealthcare company, but its ABA reviews are done by HPN’s own Behavioral Health team on InterQual, not the Optum criteria UnitedHealthcare uses elsewhere.' },
      { q: 'Can an adult get ABA through Health Plan of Nevada Medicaid?', a: 'Nevada Medicaid covers ABA at any age, but HPN’s posted ABA form still certifies ages 0–21. Confirm with HPN Provider Services before starting an adult.' },
    ],
  },

  'molina-healthcare-nevada': {
    slug: 'molina-healthcare-nevada',
    family: 'molina',
    cardDesc: 'Nevada Medicaid MCO; its 2026 manual never names ABA, so PA rules sit in the Availity lookup and the state MSM 3700 rules apply underneath.',
    assessmentPA: {
      value: 'Not published. Molina’s 2026 Nevada Medicaid manual does not mention ABA, and its PA page sends providers to the online lookup tool; the state rule exempts assessments, but MCO PA lists can differ',
      status: 'unverified',
      cites: [S.molPM, S.molPA, S.msm3700],
      verifyVia: 'Molina’s prior authorization lookup tool (linked from molinahealthcare.com/providers/nv/prior-auth) or Molina Nevada Provider Services: check 97151, 97152 and 0362T.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Not published by code. Molina “requires PA for certain services” and points to its lookup tool; from February 1, 2026 medical-benefit PA requests go only through Availity (no fax). The state rule requires PA for ABA treatment',
      status: 'unverified',
      cites: [S.molPA, S.molPM, S.msm3700],
      verifyVia: 'Molina’s prior authorization lookup tool or Availity: check 97153–97158 and 0373T.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Molina publishes no ABA criteria; the state rule applies: ASD, FASD or another condition for which ABA is medically necessary, certified on FA-11F (MSM 3704.2A(6)(b))',
      status: 'verified',
      cites: [S.msm3700, S.fa11f, S.molPM],
    },
    payer: 'Molina Healthcare of Nevada (Medicaid)',
    state: 'NV', kind: 'medicaid-mco', parent: 'Nevada Medicaid (Statewide Managed Care)',
    pill: 'Payer Guide · Molina · Nevada Medicaid',
    h1: 'Molina Healthcare of Nevada ABA coverage: the intake guide.',
    metaTitle: 'Molina Healthcare of Nevada Medicaid ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Molina Healthcare of Nevada handles ABA for Nevada Medicaid members: where the prior-authorization rules live (Availity and the lookup tool), BACB credentialing, 180-day timely filing, 30-day clean-claim processing, and the state MSM 3700 rules underneath.',
    intro: [
      'Molina Healthcare of Nevada is one of the five Nevada Medicaid health plans and covers Nevada Medicaid and Nevada Check Up members statewide from January 1, 2026. Its 2026 provider manual (revised June 2026) is silent on applied behavior analysis: it does not list ABA, autism or behavior analysts anywhere except naming the Behavior Analyst Certification Board among the boards it accepts for credentialing. The practical result is that Nevada’s state ABA rules (MSM 3700, the PT 85 billing guide and FA-11E/FA-11F) are the baseline, and code-level prior-authorization rules must be checked in Molina’s lookup tool.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as a Nevada Medicaid benefit (any age, MSM 3700); Molina’s manual does not address it' },
      { label: 'Prior auth', value: 'Check codes in Molina’s PA lookup tool; requests via Availity only from 2/1/2026' },
      { label: 'Timely filing', value: '180 days in-state, 365 days out-of-state' },
      { label: 'Claims processing', value: 'Within 30 days of a clean claim' },
      { label: 'Credentialing', value: 'BACB is an accepted certifying board' },
      { label: 'Licensure', value: 'Nevada-licensed BCBA/BCaBA, registered RBT (NRS 641D)' },
    ],
    sections: [
      {
        h2: 'Where Molina’s ABA rules live',
        body: [
          'Molina’s Nevada prior-authorization page says office visits to participating providers need no PA, that “Molina requires PA for certain services,” and that providers should “See which services need PA with the prior authorization lookup tool.” From February 1, 2026, “providers must submit medical benefit PA requests through Availity provider portal, as Molina no longer accepts fax submissions.” The 2026 manual adds that Molina “does not retroactively authorize services that require PA; with the exception of extenuating circumstances,” that decisions are made “no later than contractual and regulatory requirements,” and that after a denial the provider may schedule a peer-to-peer “up to five (5) business days from the denial notification.” Because the manual says nothing about ABA, treat the state rules as the floor: assessments once per 180 days without PA in fee-for-service, treatment under PA with FA-11E content, and the 12-hour and 40-hour limits. ' + NV_MCO_APPEALS,
          'For claims, Molina lists clean-claim timely filing of “180 days (in state Providers)” and “365 days (out of state Providers),” processes clean claims “within 30 days after receipt,” and says “Medicaid is always the payer of last resort.” Telehealth claims must follow “NV Medicaid MSM Chapter 3400-Telehealth and NV Medicaid Telehealth Billing Instructions.”',
        ],
        cites: [S.molPA, S.molPM, S.msm3700, S.pt85, S.msm3600],
      },
      {
        h2: 'Can an out-of-state BCBA treat a Molina Nevada member, including by telehealth?',
        body: [NV_OOS_BODY],
        cites: [S.nrs641D, S.nrs629, S.msm3700],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Molina (Medicaid, not Molina Marketplace) on the date of service.' },
      { title: 'Diagnosis + FA-11F', desc: 'ASD or FASD with the tool score and the ordering practitioner’s signature.' },
      { title: 'PA lookup result', desc: 'Screenshot the lookup tool result for each ABA code before scheduling.' },
      { title: 'Other insurance', desc: 'Medicaid pays last; bill the primary first.' },
    ],
    sources: [S.molPM, S.molPA, S.plans, S.msm3700, S.msm3600, S.pt85, S.fa11f, S.msm3400, S.nrs422, S.teleBill, S.cfr438, S.cfr433, S.nrs641D, S.nrs629],
    deliveryRules: {
      supervision: {
        value: 'Molina publishes no ABA supervision rule. ' + ST_SUPERVISION,
        status: 'verified',
        cites: [S.msm3700, S.msm3600, S.molPM],
      },
      concurrentBilling: {
        value: 'Not addressed by Molina or by the state.',
        status: 'unverified',
        cites: [S.molPM, S.pt85],
        verifyVia: 'Molina Nevada Provider Services or your provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Molina publishes no ABA limits. ' + ST_DAILY,
        status: 'verified',
        cites: [S.msm3700, S.pt85, S.molPM],
      },
      noteSignature: {
        value: 'Molina publishes no ABA note rule. ' + ST_NOTES,
        status: 'verified',
        cites: [S.msm3700, S.msm3600],
      },
      placeOfService: {
        value: 'Molina publishes no ABA setting rule. ' + ST_POS,
        status: 'verified',
        cites: [S.msm3700, S.teleBill],
      },
      billAsProvider: {
        value: 'Not stated by Molina. The fee-for-service rule bills the NPI of the person who delivered the service, with UD for BCaBA and RBT lines.',
        status: 'unverified',
        cites: [S.pt85, S.molPM],
        verifyVia: 'Molina Nevada Provider Services: ask whose NPI goes on technician lines and whether UD is required.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Molina publishes no ABA age rule. ' + ST_AGE,
        status: 'verified',
        cites: [S.msm3700, S.molPM],
      },
      dxRecency: {
        value: 'Molina publishes nothing of its own. The state rule: the diagnosis is “completed only one time” and repeat testing “should not be performed when full criteria were previously met” (MSM 3704.2A(6)(b)).',
        status: 'verified',
        cites: [S.msm3700, S.molPM],
      },
      diagnosingProviders: {
        value: 'Molina publishes nothing of its own. The state’s FA-11F must be signed by a physician, physician assistant, APRN or psychologist acting within scope.',
        status: 'verified',
        cites: [S.fa11f, S.msm3700],
      },
      diagnosticTools: {
        value: 'Molina publishes nothing of its own. ' + ST_TOOLS,
        status: 'verified',
        cites: [S.msm3700, S.fa11f],
      },
      referral: {
        value: 'Molina publishes nothing different. ' + ST_REFERRAL,
        status: 'verified',
        cites: [S.msm3700, S.fa11f],
      },
      telehealth: {
        value: 'Molina tells providers to bill telehealth under MSM 3400 and the Nevada Medicaid Telehealth Billing Instructions and publishes no ABA-specific rule. ' + ST_TELE,
        status: 'verified',
        cites: [S.molPM, S.msm3400, S.nrs422, S.teleBill, S.nrs629],
      },
      authTurnaround: {
        value: 'Molina says it decides “no later than contractual and regulatory requirements” and publishes no number. The federal managed-care limit is 7 calendar days for standard requests in rating periods starting on or after January 1, 2026, 72 hours expedited.',
        status: 'plan-dependent',
        cites: [S.molPM, S.cfr438],
        verifyVia: 'Molina Nevada utilization management: ask the standard turnaround for ABA requests.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: '“Medicaid is always the payer of last resort and Providers shall make reasonable efforts to determine the legal liability of third parties”; secondary claims are due within 180 days of the primary payer’s final determination.',
        status: 'verified',
        cites: [S.molPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Molina Nevada Medicaid require prior authorization for ABA?', a: 'Molina does not publish an ABA rule; check each code in its prior authorization lookup tool and submit through Availity (no fax since February 1, 2026). The state requires PA for ABA treatment but not assessments.' },
      { q: 'What is Molina Nevada’s timely filing limit?', a: '180 days for in-state providers and 365 days for out-of-state providers; clean claims are processed within 30 days.' },
    ],
  },

  'silversummit-healthplan-nevada': {
    slug: 'silversummit-healthplan-nevada',
    family: 'centene',
    cardDesc: 'Centene’s Nevada Medicaid MCO; ABA on its PA list, FA-11E/FA-11F plus a full treatment plan, CP.BH.104 revised for DOS from 5/30/2026.',
    assessmentPA: {
      value: 'Not stated separately. The provider manual lists “Applied Behavioral Analysis (ABA)” among behavioral health services needing prior authorization without singling out the assessment codes; its pre-auth tool is the place to check',
      status: 'unverified',
      cites: [S.sshpPM, S.msm3700],
      verifyVia: 'SilverSummit “Pre-Auth Needed?” tool on silversummithealthplan.com or Utilization Management, 1-844-366-2880: check 97151, 97152 and 0362T.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes. ABA is on the manual’s behavioral health prior-authorization list; initial requests need FA-11E and FA-11F, and concurrent requests FA-11E with treatment-plan updates (June 2026 checklist)',
      status: 'verified',
      cites: [S.sshpPM, S.sshpChk],
    },
    dxRequired: {
      value: 'Yes: a “Comprehensive diagnostic evaluation supporting an Autism Spectrum Disorder diagnosis by a qualified provider,” with FA-11F signed by a qualified diagnosing practitioner on initial requests',
      status: 'verified',
      cites: [S.sshpChk],
    },
    payer: 'SilverSummit Healthplan (Nevada Medicaid)',
    state: 'NV', kind: 'medicaid-mco', parent: 'Nevada Medicaid (Statewide Managed Care)',
    pill: 'Payer Guide · SilverSummit · Nevada Medicaid',
    h1: 'SilverSummit Healthplan ABA coverage: the intake guide.',
    metaTitle: 'SilverSummit Healthplan ABA Coverage & Prior Auth Guide (Nevada Medicaid) | Carelu',
    metaDescription:
      'How SilverSummit Healthplan (Centene) covers ABA for Nevada Medicaid members: ABA on the prior-authorization list, the FA-11E/FA-11F treatment request checklist, CP.BH.104, 2-business-day decisions, no retro authorization, and the state rules underneath.',
    intro: [
      'SilverSummit Healthplan is Centene’s Nevada Medicaid plan and one of the five health plans NVHA lists for statewide managed care. It lists Applied Behavior Analysis among the provider types in its network and among the behavioral health services that need prior authorization, and in 2026 it published an ABA treatment request checklist built on the state’s own forms: FA-11E for every request and FA-11F with the first. Its medical necessity policy is Centene’s Clinical Policy CP.BH.104, revised for dates of service from May 30, 2026.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes (Nevada Medicaid benefit, any age)' },
      { label: 'Prior auth', value: 'Required for ABA treatment; FA-11E + FA-11F (initial), FA-11E + plan updates (concurrent)' },
      { label: 'Criteria', value: 'Clinical Policy CP.BH.104 (revised for DOS from 05/30/2026)' },
      { label: 'Decision clock', value: 'Manual: 2 business days non-urgent; OTR guidance says allow up to 14 business days' },
      { label: 'Retro auth', value: 'Not given for routine sessions; rare exceptions within 180 days' },
      { label: 'Licensure', value: 'Nevada-licensed BCBA/BCaBA, registered RBT (NRS 641D)' },
    ],
    sections: [
      {
        h2: 'What a SilverSummit ABA request must contain',
        body: [
          'SilverSummit’s ABA Outpatient Treatment Request Checklist (June 29, 2026) says requests are reviewed “in accordance with Nevada Medicaid MSM Chapter 3700 and PT 85 billing guidelines.” For initial requests, “providers must submit Form FA‑11E (ABA Authorization Request) and Form FA‑11F (Autism Spectrum Disorder Diagnosis Certification),” with FA-11F “completed and signed by a qualified diagnosing practitioner” and needed for initial requests only. But “FA‑11E alone does not replace the requirement for an ABA treatment plan”: send assessment-driven goals with mastery criteria, assessment tool data (VB-MAPP, ABLLS-R, AFLS, EFL or similar) appropriate to age and development, operational definitions and baselines for behaviors targeted for reduction (with an FBA or equivalent), caregiver training goals, a crisis plan when indicated, a generalization plan, titration criteria, the proposed weekly schedule including school, coordination with educational services and IEP status, and the parent’s signature. Concurrent requests need FA-11E plus updated progress, data trends, attendance for member and caregivers, and mastered and modified goals.',
          'The manual lists ABA among behavioral health services requiring prior authorization and says “We do not retroactively authorize treatment.” Behavioral health requests use SilverSummit’s Outpatient Treatment Request forms or the secure portal; network practitioners “should allow up to fourteen (14) business days to process non-urgent requests,” even though the manual’s decision table lists 2 business days for non-urgent pre-service requests. For behavioral health, retro authorizations “will only be granted in rare cases, such as eligibility issues” and must be requested within 180 days of service. Medical necessity is judged against CP.BH.104, which SilverSummit revised for dates of service starting May 30, 2026 (diagnostic documentation, assessment components, caregiver training, continuation and step-down criteria). ' + NV_MCO_APPEALS,
        ],
        cites: [S.sshpChk, S.sshpPM, S.sshpRev, S.msm3600],
      },
      {
        h2: 'Can an out-of-state BCBA treat a SilverSummit member, including by telehealth?',
        body: [
          NV_OOS_BODY,
          'SilverSummit credentials Nevada Medicaid providers through the state’s centralized credentialing verification organization and says it notifies providers of approvals or denials within 30 calendar days of the CVO’s result.',
        ],
        cites: [S.nrs641D, S.nrs629, S.sshpPM],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm SilverSummit Medicaid (not Ambetter) on the date of service.' },
      { title: 'FA-11F + diagnostic evaluation', desc: 'Signed by a qualified diagnosing practitioner; initial requests only.' },
      { title: 'Full treatment plan', desc: 'FA-11E is not enough on its own: goals, assessment data, baselines, caregiver goals, schedule and parent signature.' },
      { title: 'School schedule and IEP', desc: 'Coordination with school and IEP status for school-aged members.' },
      { title: 'Other insurance', desc: 'Medicaid pays last; bill the primary first.' },
    ],
    sources: [S.sshpChk, S.sshpPM, S.sshpRev, S.plans, S.msm3700, S.msm3600, S.pt85, S.fa11e, S.fa11f, S.msm3400, S.nrs422, S.cfr438, S.cfr433, S.nrs641D, S.nrs629],
    deliveryRules: {
      supervision: {
        value: 'SilverSummit’s checklist asks for the training and treatment plan but sets no supervision ratio of its own; it reviews against MSM 3700. ' + ST_SUPERVISION,
        status: 'verified',
        cites: [S.sshpChk, S.msm3700, S.msm3600],
      },
      concurrentBilling: {
        value: 'Not addressed in SilverSummit’s manual or checklist, and the state publishes no same-time rule.',
        status: 'unverified',
        cites: [S.sshpPM, S.sshpChk],
        verifyVia: 'SilverSummit Provider Services, 1-844-366-2880, or the SilverSummit Provider Billing Manual.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'SilverSummit publishes no ABA limits of its own and reviews against the PT 85 billing guide. ' + ST_DAILY,
        status: 'verified',
        cites: [S.sshpChk, S.msm3700, S.pt85],
      },
      noteSignature: {
        value: 'Not stated by SilverSummit beyond “Provider signature, per within health plan requirements” on the treatment plan. ' + ST_NOTES,
        status: 'verified',
        cites: [S.sshpChk, S.msm3700],
      },
      placeOfService: {
        value: 'SilverSummit publishes no ABA setting rule; its checklist asks for coordination with educational services for school-aged members. ' + ST_POS,
        status: 'verified',
        cites: [S.sshpChk, S.msm3700],
      },
      billAsProvider: {
        value: 'Not stated by SilverSummit. The fee-for-service rule bills the NPI of the person who delivered the service, with UD for BCaBA and RBT lines.',
        status: 'unverified',
        cites: [S.pt85, S.sshpPM],
        verifyVia: 'SilverSummit Provider Services, 1-844-366-2880, or the Provider Billing Manual on silversummithealthplan.com.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'SilverSummit publishes no ABA age rule and reviews against MSM 3700. ' + ST_AGE,
        status: 'verified',
        cites: [S.sshpChk, S.msm3700],
      },
      dxRecency: {
        value: 'No fixed age for the evaluation, but “Diagnostic documentation must support current medical necessity for ABA services,” and FA-11F is required only with the initial request.',
        status: 'verified',
        cites: [S.sshpChk],
      },
      diagnosingProviders: {
        value: 'FA-11F “must be completed and signed by a qualified diagnosing practitioner acting within their scope of practice”; the state form limits that to a physician, physician assistant, APRN or psychologist.',
        status: 'verified',
        cites: [S.sshpChk, S.fa11f],
      },
      diagnosticTools: {
        value: 'Diagnosis: FA-11F (ADOS-2, CARS-2, GARS-3, FASD category or documented DSM-5 criteria). Treatment: assessment tool data such as VB-MAPP, ABLLS-R, AFLS or EFL “appropriate for member based on chronological age and developmental level,” noting that “some portions of assessment tools may not meet the coverage criteria.”',
        status: 'verified',
        cites: [S.sshpChk, S.fa11f],
      },
      referral: {
        value: 'SilverSummit publishes nothing different. ' + ST_REFERRAL,
        status: 'verified',
        cites: [S.msm3700, S.fa11f, S.sshpChk],
      },
      telehealth: {
        value: 'SilverSummit publishes no ABA telehealth rule. ' + ST_TELE,
        status: 'verified',
        cites: [S.msm3400, S.nrs422, S.teleBill, S.nrs629],
      },
      authTurnaround: {
        value: 'The 2026 manual lists “Preservice/Non-Urgent 2 business days,” “Preservice/Urgent 72 hours or 2 business days” and concurrent review 24 hours, but tells practitioners using behavioral health Outpatient Treatment Request forms to “allow up to fourteen (14) business days to process non-urgent requests.” The federal managed-care cap is 7 calendar days for rating periods starting on or after January 1, 2026.',
        status: 'plan-dependent',
        cites: [S.sshpPM, S.cfr438],
        verifyVia: 'SilverSummit Utilization Management, 1-844-366-2880: ask which timeframe applies to ABA requests submitted through the portal.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'SilverSummit asks members to report other coverage and publishes no ABA-specific rule; Medicaid is the payer of last resort (42 CFR 433.139), and Nevada Medicaid denies what a primary denied for not following its rules.',
        status: 'verified',
        cites: [S.sshpPM, S.cfr433, S.billMan],
      },
    },
    faq: [
      { q: 'What forms does SilverSummit need for an ABA request?', a: 'The state forms: FA-11E for every request and FA-11F with the first, plus a full treatment plan, since SilverSummit says FA-11E alone does not replace it.' },
      { q: 'Does SilverSummit authorize ABA retroactively?', a: 'Not for routine sessions. Behavioral health retro authorizations are granted only in rare cases such as eligibility issues, requested within 180 days of service with a cover letter.' },
      { q: 'How long does SilverSummit take to decide an ABA request?', a: 'The manual lists 2 business days for non-urgent pre-service decisions but tells behavioral health practitioners to allow up to 14 business days; federal rules cap standard Medicaid decisions at 7 calendar days for 2026 contracts.' },
    ],
  },

  'aetna-nevada': {
    slug: 'aetna-nevada',
    family: 'aetna',
    cardDesc: 'Aetna ABA guide + precert list + Nevada’s NRS 689B.0335 mandate (under 18, or 22 in high school; $72,000/yr ABA cap) and NV licensure.',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024); CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [S.aetnaPrecert, S.aetnaCPB],
    },
    treatmentPA: {
      value: 'Required: precertification through Availity or the number on the card; the reauthorization interval is set by the plan (progress is reviewed every six months)',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): ask whether the group carries ABA precertification and what reauthorization interval it uses.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5 ASD (F84.0, F84.3–F84.9); Aetna considers ABA experimental for non-ASD indications',
      status: 'verified',
      cites: [S.aetnaGuide, S.aetnaCPB],
    },
    payer: 'Aetna in Nevada',
    state: 'NV', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Nevada',
    h1: 'Aetna ABA coverage in Nevada: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Nevada: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Nevada families: the national ABA medical necessity guide, precertification of all ABA codes, Nevada’s autism mandate (under 18, or 22 in high school; $72,000 a year ABA cap), Nevada licensure, prompt-pay and PA deadlines.',
    intro: [
      'For an intake team in Nevada, an Aetna card means three layers: Aetna’s national ABA policy, Nevada’s autism mandate, and the plan’s funding type, which decides whether the mandate applies at all. Nevada’s mandate is narrower than many states’: it covers children under 18 (under 22 while in high school) and caps ABA at the actuarial equivalent of $72,000 a year. Aetna is not one of Nevada’s five Medicaid health plans.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s national ABA medical necessity guide' },
      { label: 'State mandate', value: 'NRS 689B.0335 (group), 695C.1717 (HMO), 689C.1655 (small employer); individual plans must offer it as an option (NRS 689A.0435)' },
      { label: 'Mandate age', value: 'Under 18, or until 22 if enrolled in high school' },
      { label: 'Mandate caps', value: 'ABA up to the actuarial equivalent of $72,000 per year; no visit limits within it' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans; individual plans only need to offer an option' },
      { label: 'Licensure', value: 'Required: Nevada Board of Applied Behavior Analysis licenses behavior analysts and BCaBAs and registers RBTs (NRS 641D)' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Nevada',
        body: [
          'Aetna’s ABA medical necessity guide (©2026) requires a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) “obtained by an appropriate provider,” functional impairment “on a standardized scale of functioning in the past 12 months” at least one standard deviation below the mean (or significant risk of harm), a measurable treatment plan, and hours matched to a severity table; progress is evaluated every six months. CPB 0554 now only says ABA is experimental for non-ASD indications, and CPB 0648 covers ASD diagnosis and treatment. Aetna’s behavioral health precertification list (effective 8/1/2024) names all ten ABA codes: 97151–97158, 0362T and 0373T. The guide’s only state exhibit is Maryland’s, so the national criteria apply in Nevada unchanged, subject to the mandate below.',
        ],
        cites: [S.aetnaGuide, S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert],
      },
      {
        h2: 'The Nevada mandate: what it guarantees',
        body: [NV_MANDATE_BODY],
        cites: [S.nrs689B, S.nrs695C, S.nrs689C, S.nrs689A],
      },
      {
        h2: 'Licensure and credentialing',
        body: [NV_LICENSURE_BODY],
        cites: [S.nrs641D, S.bacbLic],
      },
      {
        h2: 'Can an out-of-state BCBA treat a Nevada member, including by telehealth?',
        body: [NV_OOS_BODY, 'Aetna’s provider manual (6/26) adds that providers delivering telehealth “must act within the scope of their license and ensure that they have the proper licensure based on state requirements.”'],
        cites: [S.nrs641D, S.nrs629, S.aetnaOM],
      },
      {
        h2: 'Claims timing and what Aetna pays',
        body: [
          NV_PROMPT_PAY,
          'Aetna publishes no ABA rate table. Its provider manual (6/26) says that where a provider also contracts through an intermediary, “your direct Aetna rates will apply unless we specifically notify you otherwise,” and a member whose benefits run out cannot be charged “more than the contracted rate.” For a public benchmark, Nevada Medicaid’s 07/2026 PT 85 schedule pays 97153 at $30.10 per 15 minutes when billed by a BCBA and $13.01 when billed by an RBT; commercial contracts are negotiated separately.',
        ],
        cites: [S.nrs689B, S.aetnaOM, S.fee85],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured Nevada plan (mandate applies) vs. self-funded ERISA (plan document governs); individual plans may not carry the optional coverage.' },
      { title: 'Child’s age and school status', desc: 'The mandate stops at 18, or 22 if the child is still enrolled in high school.' },
      { title: 'ABA dollars used this year', desc: 'The mandate allows a $72,000 actuarial-equivalent annual cap; ask what has been paid.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD, diagnosing provider and credentials, evaluation date.' },
      { title: 'Standardized functional measure', desc: 'From the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS).' },
    ],
    sources: [S.aetnaGuide, S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.aetnaTele, S.nrs689B, S.nrs695C, S.nrs689C, S.nrs689A, S.nrs687B, S.nrs641D, S.nrs629, S.bacbLic, S.erisa, S.cfr433, S.billMan, S.tricare, S.fee85],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s guide requires services “provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists,” with supervision of unlicensed staff “in line with practice standards.” Its participation criteria (5/26) require “A minimum of one hour of face-to-face supervision” of an unlicensed or noncertified paraprofessional “for each 10 hours of applied behavior analysis,” plus the supervisor “onsite with the child at least one hour a month,” and say all BCBAs, BCaBAs and paraprofessionals “must meet state requirements.” In Nevada that means NRS 641D.610: BCaBAs and RBTs practice only under a licensed behavior analyst (or qualified psychologist; RBTs also under a qualified licensed BCaBA).',
        status: 'verified',
        cites: [S.aetnaGuide, S.aetnaNPC, S.nrs641D],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA policies (the medical necessity guide, CPB 0554, CPB 0648).',
        status: 'unverified',
        cites: [S.aetnaGuide, S.aetnaCPB],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day cap. Hours follow the guide’s severity table, with typical intensities of 10–25 hours a week for comprehensive and 1–20 for focused programs, plus 1–2 hours of QHP protocol modification per 10 hours of treatment. For state-regulated Nevada plans the mandate caps ABA at the actuarial equivalent of $72,000 a year but bars visit limits within it (NRS 689B.0335).',
        status: 'verified',
        cites: [S.aetnaGuide, S.nrs689B],
      },
      noteSignature: {
        value: 'Not addressed. Aetna sets treatment-plan content but not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide, S.aetnaOM],
        verifyVia: 'The participating-provider agreement and the documentation standards in Aetna’s provider manual.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Aetna’s outpatient ABA criteria are setting-neutral and expect coordination with the school district. Nevada’s mandate says nothing in it requires “an insurer to provide reimbursement to a school for services delivered through school services” (NRS 689B.0335(7)).',
        status: 'verified',
        cites: [S.aetnaGuide, S.nrs689B],
      },
      billAsProvider: {
        value: 'Services must be “provided directly or billed by” the appropriately licensed provider, which in Nevada means a licensed behavior analyst (a BCBA licensed under NRS 641D) or a licensed psychologist where in scope, unless mandates, plan documents or contracts say otherwise.',
        status: 'verified',
        cites: [S.aetnaGuide, S.nrs641D],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s guide sets no age cap; it describes typical age ranges only.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.nrs689B, S.nrs695C, S.nrs689C, S.nrs689A],
        verifyVia: 'Live benefits verification on the member ID: establish fully insured vs. self-funded, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis itself, but functional impairment must be shown on a standardized scale “in the past 12 months.” Nevada’s mandate requires the insurer to accept as dispositive a diagnosis made under the state’s statewide standard.',
        status: 'verified',
        cites: [S.aetnaGuide, S.nrs689B],
      },
      diagnosingProviders: {
        value: 'An “appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice).” Nevada’s ABA licensure law excludes diagnosis from the practice of ABA (NRS 641D.080).',
        status: 'verified',
        cites: [S.aetnaGuide, S.nrs641D],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale; the ABA guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s ABA policies require no physician referral; they require precertification of all ten ABA codes.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.nrs689B],
      },
      telehealth: {
        value: 'Aetna’s Telemedicine and Direct Patient Contact Payment Policy checks 97151, 97153, 97155, 97156 and 97157 for Commercial plans (modifier GT, 95 or FR) and 97152, 97154 and 97158 for Medicare only; the posted policy shows a last review of June 2021, so treat the list as perishable. Aetna’s provider manual says Aetna Behavioral Health “offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out.”' + NV_TELE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaTele, S.aetnaOM, S.nrs689B, S.nrs629],
        verifyVia: 'Availity or the precertification line on the card: ask whether the plan is Nevada-insured or self-funded (and opted out of telehealth), and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: NV_AUTH_COMMERCIAL('Aetna'),
        status: 'plan-dependent',
        cites: [S.nrs687B, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is Nevada-insured or self-funded (ERISA) and what reauthorization lead time Aetna expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: NV_COB_COMMERCIAL('Aetna'),
        status: 'plan-dependent',
        cites: [S.nrs689B, S.cfr433, S.billMan, S.tricare],
        verifyVia: 'Ask Aetna at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Nevada?', a: 'Yes, for ASD under its national ABA guide, with Nevada’s mandate layered on for state-regulated plans. Self-funded employer plans follow their own documents.' },
      { q: 'Does Nevada’s autism mandate cap ABA?', a: 'Yes. For state-regulated group, small-employer and HMO plans, ABA is capped at the actuarial equivalent of $72,000 a year, and coverage runs to age 18 (22 if still in high school).' },
      { q: 'How fast must Aetna decide a Nevada ABA prior authorization?', a: 'For a state-regulated plan, NRS 687B.970 requires a response within 2 business days (or the CAQH CORE rule period) and never more than 7 calendar days; a violation deems the request approved. Self-funded plans follow ERISA’s 15 days.' },
      { q: 'Does Aetna require RBT certification for technicians in Nevada?', a: 'Aetna’s network criteria allow supervised paraprofessionals, but Nevada law requires anyone practicing as a technician to be a BACB-certified RBT registered with the Nevada Board of Applied Behavior Analysis, and Aetna requires staff to meet state requirements.' },
    ],
  },

  'cigna-nevada': {
    slug: 'cigna-nevada',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + Nevada’s NRS 689B.0335 mandate; no PA on assessment codes; Evernorth’s Nevada addendum gives 45 days’ fee-change notice.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the policy covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: after the assessment and treatment plan, complete the Applied Behavior Analysis Prior Authorization Form; Evernorth suggests requesting up to 30 days before or two weeks after the start date',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD diagnosed under DSM-5-TR by an independently licensed professional, with the diagnostician’s name, credentials, licensure type and diagnosis date',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Nevada',
    state: 'NV', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Nevada',
    h1: 'Cigna / Evernorth ABA coverage in Nevada: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Nevada: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Nevada families: national policy EN0499, no PA on assessments, Nevada’s autism mandate (under 18, or 22 in high school; $72,000 a year ABA cap), Nevada licensure, telehealth parity and PA deadlines.',
    intro: [
      'For an intake team in Nevada, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, Nevada’s autism mandate, and the plan’s funding type. Many Cigna members are on self-funded employer plans, which sit outside the mandate, so check funding first. Evernorth’s administrative guidelines carry a Nevada Regulatory Addendum for contracted providers. Cigna is not a Nevada Medicaid plan.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'State mandate', value: 'NRS 689B.0335 (group), 695C.1717 (HMO), 689C.1655 (small employer); individual plans must offer it as an option (NRS 689A.0435)' },
      { label: 'Mandate age', value: 'Under 18, or until 22 if enrolled in high school' },
      { label: 'Mandate caps', value: 'ABA up to the actuarial equivalent of $72,000 per year; no visit limits within it' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans; individual plans only need to offer an option' },
      { label: 'Licensure', value: 'Required: Nevada Board of Applied Behavior Analysis licenses behavior analysts and BCaBAs and registers RBTs (NRS 641D)' },
      { label: 'Fee schedule', value: 'Not public — Exhibit A of your Evernorth Provider Agreement; 45 days’ notice of fee changes under the Nevada addendum' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Nevada',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). Per the autism resource guide (March 2025), “Prior authorization is no longer required for assessment … codes 97151, 97152, or 0362T with a diagnosis of autism, as long as the provider is independently licensed or a Board Certified Behavior Analyst® and the patient’s policy covers ABA services.” After the assessment and treatment plan, the provider completes the ABA Prior Authorization Form; Evernorth encourages requests “up to 30 days in advance of or two weeks after the start date of service.” EN0499 and the resource guide do not mention Nevada, so the national criteria apply, subject to the mandate.',
        ],
        cites: [S.en0499, S.cignaARG],
      },
      {
        h2: 'The Nevada mandate: what it guarantees',
        body: [NV_MANDATE_BODY],
        cites: [S.nrs689B, S.nrs695C, S.nrs689C, S.nrs689A],
      },
      {
        h2: 'Licensure and credentialing',
        body: [NV_LICENSURE_BODY, 'Evernorth bills non-credentialed staff only through the supervising provider: it “does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider.”'],
        cites: [S.nrs641D, S.bacbLic, S.cignaARG],
      },
      {
        h2: 'Can an out-of-state BCBA treat a Nevada member, including by telehealth?',
        body: [NV_OOS_BODY, 'Evernorth’s guidelines say providers “must meet all state requirements to provide virtual behavioral services, including any licenses.”'],
        cites: [S.nrs641D, S.nrs629, S.ebhAdmin],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA in Nevada?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth’s Administrative Guidelines (September 2026) say the Provider Agreement and guidelines set the terms, which “include the reimbursement rates applicable to covered services,” and tell ABA providers: “For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement.” The Nevada Regulatory Addendum lets Evernorth amend the fee schedule “by providing forty-five (45) days’ prior written notice,” and a provider who does not object in writing within those 45 days is treated as accepting; the addendum does not apply to self-funded plans. Virtual services are billed with modifier 95, which Evernorth says “will not change the reimbursement.” ' + NV_PROMPT_PAY + ' For a public benchmark, Nevada Medicaid’s 07/2026 schedule pays 97153 at $30.10 per 15 minutes when billed by a BCBA.',
        ],
        cites: [S.ebhAdmin, S.nrs689B, S.fee85],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured Nevada plan (mandate applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Child’s age and school status', desc: 'The mandate stops at 18, or 22 if the child is still enrolled in high school.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, plus the date of the most recent diagnosis. Provisional or school-only identification doesn’t count.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Treatment plan', desc: 'Nevada lets the insurer request and review a treatment plan.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.nrs689B, S.nrs695C, S.nrs689C, S.nrs689A, S.nrs687B, S.nrs641D, S.nrs629, S.bacbLic, S.erisa, S.cfr433, S.billMan, S.tricare, S.fee85],
    deliveryRules: {
      supervision: {
        value: 'Case supervision is by a BCBA, Licensed Behavior Analyst, or independently licensed clinician with ABA training; direct plus indirect case supervision runs “one to two hours per ten hours of direct treatment,” and at 10 hours a week or less at least one to two hours a week of direct case supervision. In Nevada, BCaBAs and RBTs may practice only under supervision meeting NRS 641D.610.',
        status: 'verified',
        cites: [S.en0499, S.nrs641D],
      },
      concurrentBilling: {
        value: '“Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time).”',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap is published; all ABA codes bill in 15-minute units and only with 97151–97158, 0362T and 0373T. For state-regulated Nevada plans the mandate caps ABA at the actuarial equivalent of $72,000 a year and bars visit limits within it.',
        status: 'verified',
        cites: [S.cignaARG, S.nrs689B],
      },
      noteSignature: {
        value: 'Each service needs a record with start and end date and time, location, focus, a description of the intervention, who was present, the service delivered, and the “Name, credential (if applicable), and signature of ABA provider who rendered the service.”',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'EN0499 excludes services “primarily educational or vocational in nature,” and services in academic settings must meet the direct-treatment definition. Nevada’s mandate does not require reimbursing a school for school services (NRS 689B.0335(7)).',
        status: 'verified',
        cites: [S.en0499, S.nrs689B],
      },
      billAsProvider: {
        value: 'Evernorth “does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider.” On a CMS-1500, the provider’s name goes in box 31 and “only a BCBA or other licensed provider” in box 33; electronic claims use payer ID 62308.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; it says access to intervention “should not be restricted by age.”' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.nrs689B, S.nrs695C, S.nrs689C, S.nrs689A],
        verifyVia: 'Live benefits verification: establish Nevada-insured vs. self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs “The date on which the diagnosis was most recently made,” the assessment instrument must be administered within 60 days before treatment starts, and baseline data must be within 60 days.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A professional “licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice,” applying DSM-5-TR. The assessment is by a BCBA, Licensed Behavior Analyst or independently licensed clinician with ABA training.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is named; assessments must use current editions (“e.g., must be the Vineland-3 vs. Vineland-II”), be standardized, and report dates, respondent and scores.',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral; assessments 97151, 97152 and 0362T need no PA with an autism diagnosis when the provider is independently licensed or a BCBA.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.nrs689B],
      },
      telehealth: {
        value: '“All ABA CPT codes are covered telehealth services,” and EN0499 allows in-person, telehealth or hybrid delivery chosen on clinical factors; virtual services carry modifier 95 with no change in reimbursement.' + NV_TELE_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ebhAdmin, S.nrs689B, S.nrs629],
      },
      authTurnaround: {
        value: NV_AUTH_COMMERCIAL('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.nrs687B, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is Nevada-insured or self-funded (ERISA) and what reauthorization lead time Evernorth expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: NV_COB_COMMERCIAL('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.nrs689B, S.cfr433, S.billMan, S.tricare],
        verifyVia: 'Ask Cigna/Evernorth at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does the Cigna ABA assessment need prior authorization in Nevada?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the policy covers ABA. PA starts at treatment.' },
      { q: 'Can a BCBA and RBT both bill Cigna for the same time?', a: 'Yes, for 97155 with 97153 (or 97154) when the BCBA is directing the technician and both are face-to-face with the patient at the same time.' },
      { q: 'What does Cigna pay for ABA in Nevada?', a: 'Rates are in Exhibit A of your Evernorth Provider Agreement. Evernorth’s Nevada addendum requires 45 days’ written notice before it changes your fee schedule (not for self-funded plans).' },
      { q: 'Does a BCBA need a Nevada license to bill Cigna?', a: 'Yes. Nevada requires behavior analysts to be licensed by the Board of Applied Behavior Analysis, including for telehealth to a child in Nevada, and Evernorth requires providers to meet state licensure requirements.' },
    ],
  },

  'unitedhealthcare-nevada': {
    slug: 'unitedhealthcare-nevada',
    family: 'unitedhealthcare',
    cardDesc: 'Two UHC tracks in Nevada: Optum criteria for UHC-branded plans; HPN/Sierra plans reviewed by HPN on InterQual. Plus Nevada’s NRS 689B.0335 mandate.',
    assessmentPA: {
      value: 'Required on Optum-managed plans: the ABA Supplemental Clinical Criteria require prior authorization for ABA “unless otherwise specified or mandated by contract or law.” Health Plan of Nevada, Sierra Health and Life and Sierra Health-Care Options require PA “for all ABA therapy services” from 11/1/2025',
      status: 'verified',
      cites: [S.optumSCC, S.hpnNews],
    },
    treatmentPA: {
      value: 'Required. Optum plans: through Provider Express, with the review interval set per authorization. HPN/Sierra plans: through HPN’s Online Provider Center, reviewed on InterQual',
      status: 'plan-dependent',
      cites: [S.optumSCC, S.hpnNews],
      verifyVia: 'The behavioral health number on the card: confirm whether Optum or HPN manages ABA for this plan and what review interval it sets.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5 ASD with severity level “confirmed and documented by the diagnosing clinician using at least one clinically validated tool” (Optum)',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Nevada',
    state: 'NV', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Nevada',
    h1: 'UnitedHealthcare ABA coverage in Nevada: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Nevada: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare covers ABA for Nevada families: Optum’s ABA criteria for UHC-branded plans, HPN’s InterQual review for Health Plan of Nevada and Sierra plans, Nevada’s autism mandate ($72,000 ABA cap; under 18, or 22 in high school), licensure and PA deadlines.',
    intro: [
      'UnitedHealthcare has two faces in Nevada. National UnitedHealthcare-branded plans route ABA to Optum Behavioral Health and its ABA Supplemental Clinical Criteria. UnitedHealth’s local Nevada companies, Health Plan of Nevada (HMO), Sierra Health and Life and Sierra Health-Care Options, moved ABA to their own behavioral health team on November 1, 2025, reviewing every request against InterQual. The card tells you which track applies. On top of either sits Nevada’s autism mandate for state-regulated plans. Health Plan of Nevada also runs a Nevada Medicaid plan, which has its own guide.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD (Optum ABA criteria; HPN/Sierra on InterQual)' },
      { label: 'State mandate', value: 'NRS 689B.0335 (group), 695C.1717 (HMO), 689C.1655 (small employer); individual plans must offer it as an option (NRS 689A.0435)' },
      { label: 'Mandate age', value: 'Under 18, or until 22 if enrolled in high school' },
      { label: 'Mandate caps', value: 'ABA up to the actuarial equivalent of $72,000 per year; no visit limits within it' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans; individual plans only need to offer an option' },
      { label: 'Licensure', value: 'Required: Nevada Board of Applied Behavior Analysis licenses behavior analysts and BCaBAs and registers RBTs (NRS 641D)' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'Which UnitedHealthcare track applies',
        body: [
          'Optum-managed plans: the ABA Supplemental Clinical Criteria (BH803ABASCC; review 04/2026) require prior authorization for ABA “unless otherwise specified or mandated by contract or law,” a DSM-5 diagnosis and severity level confirmed with a validated tool, direct case supervision of “1–2 hours for every 10 hours of direct treatment per week,” and explanation when use falls below 80% of authorized hours. Optum’s ABA State Mandates supplement (effective July 2026) has sections for Arizona and California (commercial), Kansas, Massachusetts and New York (Medicaid) and Pennsylvania (commercial), and none for Nevada, so no Nevada-specific Optum criteria modify the commercial policy; Optum’s National Network Manual does carry Nevada Regulatory Requirements for contracts.',
          'Health Plan of Nevada, Sierra Health and Life and Sierra Health-Care Options: from November 1, 2025, “our Behavioral Health team will review all ABA therapy authorization requests, according to InterQual guidelines. A copy of the guidelines is available upon request. … prior authorization is required for all ABA therapy services, regardless of billed charges per service line.” Contracted providers submit through the Online Provider Center (provider.healthplanofnevada.com); non-contracted providers use phone 702-240-8733 or fax 702-341-7681. Provider Services: 702-242-7088 (option 2, then 5) or 1-800-745-7065.',
        ],
        cites: [S.optumSCC, S.optumSM, S.optumNNM, S.hpnNews],
      },
      {
        h2: 'The Nevada mandate: what it guarantees',
        body: [NV_MANDATE_BODY],
        cites: [S.nrs689B, S.nrs695C, S.nrs689C, S.nrs689A],
      },
      {
        h2: 'Licensure and credentialing',
        body: [NV_LICENSURE_BODY],
        cites: [S.nrs641D, S.bacbLic],
      },
      {
        h2: 'Can an out-of-state BCBA treat a Nevada member, including by telehealth?',
        body: [NV_OOS_BODY],
        cites: [S.nrs641D, S.nrs629],
      },
      {
        h2: 'What does UnitedHealthcare pay for ABA in Nevada?',
        body: [
          'UnitedHealthcare publishes no ABA rate table. Optum’s National Network Manual (effective Sept. 1, 2026) defines the Fee Maximum as the most a participating provider may be paid for a service and says “Reimbursement to clinicians is based upon licensure rather than degree.” Optum’s commercial ABA Reimbursement Policy (2022RP501A) puts the credential on every line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA, HP for a doctoral-level provider, noting that state requirements “may supplement, modify or supersede this policy.” ' + NV_PROMPT_PAY + ' For a public benchmark, Nevada Medicaid’s 07/2026 schedule pays 97153 at $30.10 per 15 minutes when billed by a BCBA and $13.01 by an RBT.',
        ],
        cites: [S.optumNNM, S.optumReimb, S.nrs689B, S.fee85],
      },
    ],
    collect: [
      { title: 'Which UHC company', desc: 'UHC-branded (Optum manages ABA) vs. Health Plan of Nevada / Sierra (HPN reviews on InterQual). It changes the portal, criteria and phone numbers.' },
      { title: 'Plan funding type', desc: 'Fully insured Nevada plan (mandate applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Child’s age and school status', desc: 'The mandate stops at 18, or 22 if the child is still enrolled in high school.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5 ASD and severity level with a validated tool (ADI-R, ADOS-2, CARS-2 and others).' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumNNM, S.optumReimb, S.hpnNews, S.nrs689B, S.nrs695C, S.nrs689C, S.nrs689A, S.nrs687B, S.nrs641D, S.nrs629, S.bacbLic, S.erisa, S.cfr433, S.billMan, S.tricare, S.fee85],
    deliveryRules: {
      supervision: {
        value: 'Optum: “Consistent with CASP standards of care, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week”; technicians work under a BCBA or licensed clinician, and Optum does not recommend parents serving as their own child’s RBT. In Nevada, BCaBAs and RBTs practice only under supervision meeting NRS 641D.610. HPN/Sierra publish no ratio of their own (InterQual is licensed).',
        status: 'verified',
        cites: [S.optumSCC, S.nrs641D],
      },
      concurrentBilling: {
        value: 'Not addressed in Optum’s criteria or HPN’s notice.',
        status: 'unverified',
        cites: [S.optumSCC, S.hpnNews],
        verifyVia: 'Optum Provider Express support or HPN Provider Services (702-242-7088), or your provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric daily cap in Optum’s criteria; hours must be justified by clinical need, and use below 80% of authorized hours must be explained. For state-regulated Nevada plans the mandate caps ABA at the actuarial equivalent of $72,000 a year and bars visit limits within it.',
        status: 'verified',
        cites: [S.optumSCC, S.nrs689B],
      },
      noteSignature: {
        value: 'Not addressed. Optum’s criteria set coverage documentation, not who signs a session note or by when; HPN publishes nothing.',
        status: 'unverified',
        cites: [S.optumSCC, S.hpnNews],
        verifyVia: 'Optum National Network Manual documentation standards, or HPN Provider Services for HPN/Sierra plans.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Optum provides ABA at the least restrictive, most clinically appropriate level and excludes services that are not ABA, “such as 1:1 aid delivered simultaneously during classroom instruction,” and services covered under IDEA. Nevada’s mandate does not require reimbursing a school for school services (NRS 689B.0335(7)).',
        status: 'verified',
        cites: [S.optumSCC, S.nrs689B],
      },
      billAsProvider: {
        value: 'Optum commercial: each line carries the rendering credential, HM (RBT), HN (BCaBA), HO (master’s-level BCBA) or HP (doctoral), per the ABA Reimbursement Policy. HPN/Sierra publish no rule.',
        status: 'plan-dependent',
        cites: [S.optumReimb],
        verifyVia: 'For HPN/Sierra plans, HPN Provider Services (702-242-7088): ask whose NPI and which modifier go on technician lines.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Optum’s criteria carry no age criterion; the benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.nrs689B, S.nrs695C, S.nrs689C, S.nrs689A],
        verifyVia: 'Benefits check on the member ID: establish Nevada-insured vs. self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Optum sets no expiry on the diagnosis but requires severity confirmed with a validated tool and reassesses progress over time. HPN/Sierra review on licensed InterQual criteria.',
        status: 'plan-dependent',
        cites: [S.optumSCC, S.hpnNews],
        verifyVia: 'HPN Behavioral Health (702-240-8733) for HPN/Sierra plans; Optum for UHC-branded plans.',
        blocker: 'licensed',
      },
      diagnosingProviders: {
        value: 'Optum: a “state licensed clinician qualified to make such diagnosis” under DSM-5-TR. Nevada’s ABA licensure law excludes diagnosis from ABA practice (NRS 641D.080).',
        status: 'verified',
        cites: [S.optumSCC, S.nrs641D],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool from Optum’s non-exhaustive list: screens (M-CHAT and others), second-level tools (CARS/CARS-2, RITA-T, STAT) and formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral in Optum’s criteria; prior authorization is the gate (HPN/Sierra: PA for all ABA therapy).' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.hpnNews, S.nrs689B],
      },
      telehealth: {
        value: 'Optum’s Telehealth Billing guide (updated September 2025), commercial plans: “For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157,” billed with POS 02 or 10. The 97151 assessment and 97153 are not on that list. Ask Optum how it applies the list to a Nevada-insured plan, since state law forbids treating telehealth differently.' + NV_TELE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumTele, S.nrs689B, S.nrs629],
        verifyVia: 'Optum Provider Express or HPN Provider Services: ask which ABA codes are payable by telehealth on this Nevada plan.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: NV_AUTH_COMMERCIAL('UnitedHealthcare/Optum (or HPN)'),
        status: 'plan-dependent',
        cites: [S.nrs687B, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is Nevada-insured or self-funded (ERISA), who manages ABA, and the reauthorization lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: NV_COB_COMMERCIAL('UnitedHealthcare'),
        status: 'plan-dependent',
        cites: [S.nrs689B, S.cfr433, S.billMan, S.tricare],
        verifyVia: 'Ask UnitedHealthcare at benefits verification for the coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Who reviews ABA for Health Plan of Nevada commercial members?', a: 'Since November 1, 2025, HPN’s own Behavioral Health team, using InterQual, for Health Plan of Nevada, Sierra Health and Life and Sierra Health-Care Options. UHC-branded plans use Optum.' },
      { q: 'Does Optum have Nevada-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement does not list Nevada, so the national criteria apply, with Nevada’s mandate layered on for state-regulated plans.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in Nevada?', a: 'Optum’s commercial guide allows only 97155, 97156 and 97157 by telehealth. Nevada-insured plans must cover telehealth on the same basis as in person under NRS 689B.0369, so ask Optum how it applies the list to your plan.' },
    ],
  },

  'anthem-bcbs-nevada': {
    slug: 'anthem-bcbs-nevada',
    family: 'anthem',
    cardDesc: 'Nevada’s Blue plan (Rocky Mountain Hospital and Medical Service / HMO Nevada): outpatient behavioral health on the NV precert list; ABA billing rules from Anthem’s resource guide.',
    assessmentPA: {
      value: 'Likely: Anthem’s Nevada commercial precertification list (updated 07/10/2026) lists “Behavioral Health Services - Inpatient and Outpatient” with Anthem as the responsible party (“Contact Behavioral Health at 800-424-4014”) but does not list ABA codes individually',
      status: 'plan-dependent',
      cites: [S.anthemNVPA],
      verifyVia: 'Anthem Behavioral Health, 800-424-4014, or the number on the member’s card: ask whether 97151 and 97152 need precertification on this plan.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Yes for outpatient behavioral health on the Nevada list, reviewed by Anthem Behavioral Health (800-424-4014); requirements depend on the member’s product',
      status: 'plan-dependent',
      cites: [S.anthemNVPA],
      verifyVia: 'Anthem Behavioral Health, 800-424-4014: confirm ABA treatment precertification and the review interval.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes under the Nevada mandate (autism spectrum disorder is the covered condition); Anthem’s own diagnostic criteria for ABA are not published in its Nevada documents',
      status: 'plan-dependent',
      cites: [S.nrs689B, S.anthemRG],
      verifyVia: 'Anthem Behavioral Health, 800-424-4014: ask which medical necessity guideline applies and what diagnostic documentation it requires.',
      blocker: 'per-case',
    },
    payer: 'Anthem Blue Cross and Blue Shield Nevada',
    state: 'NV', kind: 'commercial',
    pill: 'Payer Guide · Anthem BCBS · Nevada',
    h1: 'Anthem BCBS Nevada ABA coverage: the intake guide.',
    metaTitle: 'Anthem BCBS Nevada ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Anthem Blue Cross and Blue Shield covers ABA in Nevada: the Nevada precertification list, billing rules from Anthem’s ABA resource guide, Nevada’s autism mandate (under 18, or 22 in high school; $72,000 a year cap), licensure and PA deadlines.',
    intro: [
      'In Nevada, Anthem Blue Cross and Blue Shield is Rocky Mountain Hospital and Medical Service, Inc., with HMO products underwritten by HMO Colorado, Inc., doing business as HMO Nevada. Two Anthem documents govern ABA: the Nevada commercial precertification list, which routes inpatient and outpatient behavioral health to Anthem Behavioral Health, and the multi-state ABA Provider Resource Guide (June 2025), which names Nevada among its states and sets coding, supervision and documentation rules. Anthem’s Nevada Medicaid plan is a separate company with its own guide.',
      'Under both sits Nevada’s autism mandate for state-regulated plans. Establish funding type on every benefits check: self-funded employer plans administered by Anthem follow their plan documents and ERISA.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, on state-regulated plans under the Nevada mandate; self-funded plans per plan document' },
      { label: 'Who reviews ABA', value: 'Anthem Behavioral Health, 800-424-4014 (NV commercial precert list, 07/10/2026)' },
      { label: 'State mandate', value: 'NRS 689B.0335 (group), 695C.1717 (HMO), 689C.1655 (small employer); individual plans must offer it as an option (NRS 689A.0435)' },
      { label: 'Mandate age', value: 'Under 18, or until 22 if enrolled in high school' },
      { label: 'Mandate caps', value: 'ABA up to the actuarial equivalent of $72,000 per year; no visit limits within it' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans; individual plans only need to offer an option' },
      { label: 'Licensure', value: 'Required: Nevada Board of Applied Behavior Analysis licenses behavior analysts and BCaBAs and registers RBTs (NRS 641D)' },
      { label: 'Fee schedule', value: 'Not public — contracted rates; Nevada Medicaid’s PT 85 schedule is the public benchmark' },
    ],
    sections: [
      {
        h2: 'Precertification in Nevada',
        body: [
          'Anthem’s Nevada commercial precertification list (“Nevada | Anthem Blue Cross and Blue Shield and HMO Colorado, Inc. (Anthem) | Commercial,” updated 07/10/2026) lists “Behavioral Health Services - Inpatient and Outpatient” with Anthem as the responsible party and the instruction “Contact Behavioral Health at 800-424-4014.” Unlike Anthem’s lists in some other states, it does not itemize the ABA CPT codes, so confirm code-level requirements for the member’s product before the assessment.',
        ],
        cites: [S.anthemNVPA],
      },
      {
        h2: 'Billing and documentation rules from the ABA resource guide',
        body: [
          'Anthem’s ABA Provider Resource Guide (June 2025) covers Nevada. A QHP billing 97155 “can only add code 97153 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician.” Technician services “must show the supervising BCBA or other QHP in box 31 of the CMS claim form,” and the guide lists credential modifiers HM, HN and HO. Records need start and stop times, author identification with credentials, entries completed within 30 days with a “Signature date within 30 days of the date of service,” and a treatment plan reviewed at least every 6 months. Anthem applies NCCI MUEs to ABA codes and lists POS 12 (home), 11 (office), 99 (community), 03 (school), 10 and 02 (telehealth).',
        ],
        cites: [S.anthemRG],
      },
      {
        h2: 'The Nevada mandate: what it guarantees',
        body: [NV_MANDATE_BODY],
        cites: [S.nrs689B, S.nrs695C, S.nrs689C, S.nrs689A],
      },
      {
        h2: 'Licensure and credentialing',
        body: [NV_LICENSURE_BODY],
        cites: [S.nrs641D, S.bacbLic],
      },
      {
        h2: 'Can an out-of-state BCBA treat a Nevada member, including by telehealth?',
        body: [NV_OOS_BODY],
        cites: [S.nrs641D, S.nrs629],
      },
      {
        h2: 'Claims timing and rates',
        body: [NV_PROMPT_PAY + ' Anthem publishes no Nevada ABA rate table; rates are contractual. The public benchmark is Nevada Medicaid’s 07/2026 PT 85 schedule (97153 $30.10 per 15 minutes billed by a BCBA, $13.01 by an RBT).'],
        cites: [S.nrs689B, S.fee85],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured Nevada plan (mandate applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'HMO Nevada or PPO', desc: 'Product decides precertification details; call 800-424-4014.' },
      { title: 'Child’s age and school status', desc: 'The mandate stops at 18, or 22 if the child is still enrolled in high school.' },
      { title: 'Diagnosis report', desc: 'ASD diagnosis, diagnosing clinician and date.' },
      { title: 'Other coverage', desc: 'Second parent’s plan (birthday rule), Medicaid or TRICARE.' },
    ],
    sources: [S.anthemNVPA, S.anthemRG, S.nrs689B, S.nrs695C, S.nrs689C, S.nrs689A, S.nrs687B, S.nrs641D, S.nrs629, S.bacbLic, S.erisa, S.cfr433, S.billMan, S.tricare, S.fee85],
    deliveryRules: {
      supervision: {
        value: 'Anthem publishes no numeric supervision ratio; it allows 97153 alongside 97155 only when the QHP and technician are both face-to-face with the patient and the QHP is directing the technician. In Nevada, BCaBAs and RBTs practice only under supervision meeting NRS 641D.610, which incorporates BACB supervision requirements.',
        status: 'verified',
        cites: [S.anthemRG, S.nrs641D],
      },
      concurrentBilling: {
        value: '“A physician or other QHP billing for 97155 can only add code 97153 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician.” Supervised services billed with a QHP procedure fall under Anthem’s Incident To policy.',
        status: 'verified',
        cites: [S.anthemRG],
      },
      dailyLimits: {
        value: 'No Anthem daily cap is published; “ABA codes may have associated MUE limits” under NCCI. For state-regulated Nevada plans the mandate caps ABA at the actuarial equivalent of $72,000 a year and bars visit limits within it.',
        status: 'verified',
        cites: [S.anthemRG, S.nrs689B],
      },
      noteSignature: {
        value: 'Each entry must identify its author (signature, electronic identifier or initials, with credentials); documentation is expected at the time of service and “should not exceed 30 days,” with a “Signature date within 30 days of the date of service.” Start and stop times are required.',
        status: 'verified',
        cites: [S.anthemRG],
      },
      placeOfService: {
        value: 'POS codes Anthem lists for ABA: 12 home, 11 office/clinic, 99 community, 03 school, 10 telehealth in the home, 02 telehealth elsewhere, “Subject to the member’s coverage and reviews by the plan.” Nevada’s mandate does not require reimbursing a school for school services (NRS 689B.0335(7)).',
        status: 'verified',
        cites: [S.anthemRG, S.nrs689B],
      },
      billAsProvider: {
        value: '“ABA therapy performed by therapy assistants/behavioral technicians/paraprofessionals must show the supervising BCBA or other QHP in box 31 of the CMS claim form.”',
        status: 'verified',
        cites: [S.anthemRG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Anthem publishes no ABA age limit in its Nevada documents.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.anthemNVPA, S.nrs689B, S.nrs695C, S.nrs689C, S.nrs689A],
        verifyVia: 'Live benefits verification: establish Nevada-insured vs. self-funded, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not published in Anthem’s Nevada documents.',
        status: 'unverified',
        cites: [S.anthemNVPA, S.anthemRG],
        verifyVia: 'Anthem Behavioral Health, 800-424-4014: ask what diagnostic documentation and dates its review expects.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Not published in Anthem’s Nevada documents. Nevada’s mandate requires the insurer to accept as dispositive a diagnosis made under the state’s statewide standard (NRS 689B.0335(1)).',
        status: 'unverified',
        cites: [S.anthemRG, S.nrs689B],
        verifyVia: 'Anthem Behavioral Health, 800-424-4014.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'The resource guide stresses standardized assessments for tracking progress but names no diagnostic instrument.',
        status: 'unverified',
        cites: [S.anthemRG],
        verifyVia: 'Anthem Behavioral Health, 800-424-4014.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Anthem’s Nevada documents require precertification of outpatient behavioral health through Anthem Behavioral Health, not a physician referral.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.anthemNVPA, S.nrs689B],
      },
      telehealth: {
        value: 'Anthem lists POS 10 (telehealth in the home) and 02 (elsewhere) for ABA, subject to coverage, and refers to its Virtual Visits reimbursement policy.' + NV_TELE_TAIL,
        status: 'plan-dependent',
        cites: [S.anthemRG, S.nrs689B, S.nrs629],
        verifyVia: 'Anthem’s Virtual Visits reimbursement policy and the member’s benefits: confirm which ABA codes are allowed by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: NV_AUTH_COMMERCIAL('Anthem'),
        status: 'plan-dependent',
        cites: [S.nrs687B, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is Nevada-insured or self-funded (ERISA) and the reauthorization lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: NV_COB_COMMERCIAL('Anthem'),
        status: 'plan-dependent',
        cites: [S.nrs689B, S.cfr433, S.billMan, S.tricare],
        verifyVia: 'Ask Anthem at benefits verification for the coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Anthem require prior authorization for ABA in Nevada?', a: 'Anthem’s Nevada commercial list puts inpatient and outpatient behavioral health under Anthem Behavioral Health precertification (800-424-4014), but it does not itemize ABA codes, so confirm per product.' },
      { q: 'Does Nevada cap ABA benefits?', a: 'Yes, for state-regulated plans: ABA up to the actuarial equivalent of $72,000 a year, for children under 18 (22 if still in high school). Self-funded plans follow their own documents.' },
      { q: 'Can a BCBA and RBT both bill Anthem for the same time?', a: 'Yes, 97155 with 97153, but only when both are face-to-face with the patient at the same time and the BCBA is directing the technician.' },
    ],
  },
};

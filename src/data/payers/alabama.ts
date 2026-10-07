import type { PayerConfig, PayerSource } from './types.js';

/* Alabama — researched October 2026 from primary sources only.
   medicaid.alabama.gov serves an incomplete TLS chain (the GlobalSign Atlas R3 OV TLS CA 2026 Q1
   intermediate is missing); curl works once that intermediate, fetched from GlobalSign’s AIA URL,
   is added to the CA bundle. The provider manual chapters and fee schedules sit behind a CPT/CDT
   click-through ("I Accept") on the /content/Gated/ pages; a cookie-jar POST of that form opens them.
   Code of Alabama sections were read from the Legislature’s own ALISON service (its public GraphQL
   endpoint returns current section text with history); Ala. Admin. Code chapters from the LSA PDF API.
   Alabama runs no risk-based Medicaid MCOs: the Alabama Coordinated Health Networks are primary care
   case management/care coordination entities that do not authorize or pay ABA, so there are no MCO
   guides for this state. */

const S: Record<string, PayerSource> = {
  ch37: { title: 'Alabama Medicaid Provider Manual, Chapter 37 — Therapy (Occupational, Physical, Speech, and Applied Behavior Analysis), October 2026', url: 'https://medicaid.alabama.gov/content/Gated/7.6.1G_Provider_Manuals/7.6.1.4G_Oct_2026/Oct26_37.pdf' },
  ch04: { title: 'Alabama Medicaid Provider Manual, Chapter 4 — Obtaining Prior Authorization, October 2026', url: 'https://medicaid.alabama.gov/content/Gated/7.6.1G_Provider_Manuals/7.6.1.4G_Oct_2026/Oct26_04.pdf' },
  ch05: { title: 'Alabama Medicaid Provider Manual, Chapter 5 — Filing Claims, October 2026', url: 'https://medicaid.alabama.gov/content/Gated/7.6.1G_Provider_Manuals/7.6.1.4G_Oct_2026/Oct26_05.pdf' },
  ch02: { title: 'Alabama Medicaid Provider Manual, Chapter 2 — Becoming a Medicaid Provider, October 2026', url: 'https://medicaid.alabama.gov/content/Gated/7.6.1G_Provider_Manuals/7.6.1.4G_Oct_2026/Oct26_02.pdf' },
  ch40: { title: 'Alabama Medicaid Provider Manual, Chapter 40 — Alabama Coordinated Health Network (ACHN), October 2026', url: 'https://medicaid.alabama.gov/content/Gated/7.6.1G_Provider_Manuals/7.6.1.4G_Oct_2026/Oct26_40.pdf' },
  ch110: { title: 'Alabama Medicaid Provider Manual, Chapter 110 — Rehabilitative Services (ASD) – DMH, October 2026', url: 'https://medicaid.alabama.gov/content/Gated/7.6.1G_Provider_Manuals/7.6.1.4G_Oct_2026/Oct26_110.pdf' },
  ch112: { title: 'Alabama Medicaid Provider Manual, Chapter 112 — Telemedicine Services, October 2026', url: 'https://medicaid.alabama.gov/content/Gated/7.6.1G_Provider_Manuals/7.6.1.4G_Oct_2026/Oct26_112.pdf' },
  appA: { title: 'Alabama Medicaid Provider Manual, Appendix A — EPSDT / Well-Child (referrals, Form 362), October 2026', url: 'https://medicaid.alabama.gov/content/Gated/7.6.1G_Provider_Manuals/7.6.1.4G_Oct_2026/Oct26_A.pdf' },
  manuals: { title: 'Alabama Medicaid — Provider Manuals (gated CPT/CDT license page; October 2026 quarterly edition)', url: 'https://medicaid.alabama.gov/content/Gated/7.6.1G_Provider_Manuals.aspx' },
  fee: { title: 'Alabama Medicaid — Applied Behavior Analysis (ABA) Fee Schedule (effective 2-5-2026)', url: 'https://medicaid.alabama.gov/content/Gated/7.3G_Fee_Schedules/7.3G_ABA_Fee_Schedule_2-5-26.pdf' },
  admin11: { title: 'Ala. Admin. Code ch. 560-X-11 — EPSDT (Rule 560-X-11-.14, EPSDT referred service providers; amended eff. September 14, 2025)', url: 'https://medicaid.alabama.gov/documents/9.0_Resources/9.2_Administrative_Code/9.2._Adm_Code_Chap_11_EPSDT_9-14-25.pdf' },
  alertLoc: { title: 'Alabama Medicaid ALERT — Changes to Applied Behavior Analysis Service Location Criteria (3/4/2026; effective February 24, 2026)', url: 'https://medicaid.alabama.gov/content/12.0_Archive/alert_detail_archived.aspx?ID=16713' },
  alertProg: { title: 'Alabama Medicaid ALERT — Applied Behavior Analysis (ABA) Program Expectations and Updates (12/18/2025)', url: 'https://medicaid.alabama.gov/content/12.0_Archive/alert_detail_archived.aspx?ID=16682' },
  rileyWard: { title: 'Ala. Code § 27-54A-1, -2 — Riley Ward Act (autism spectrum disorder coverage; Act 2012-298, amended by Act 2017-337)', url: 'https://alison.legislature.state.al.us/code-of-alabama?section=27-54A-2' },
  lic: { title: 'Ala. Code §§ 34-5A-1 to -7 — Behavior analyst licensing (as amended by Act 2026-144, eff. February 26, 2026)', url: 'https://alison.legislature.state.al.us/code-of-alabama?section=34-5A-3' },
  lic580: { title: 'Ala. Admin. Code ch. 580-5-30B — Behavior Analyst Licensing (temporary license, reciprocity, renewal)', url: 'https://admincode.legislature.state.al.us/api/chapter/580-5-30B' },
  dmhCouncil: { title: 'Alabama Department of Mental Health — Alabama Behavior Analyst Advisory Council (licensure, roster, applications)', url: 'https://mh.alabama.gov/alabama-behavior-analyst-licensure-advisory-council/' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Alabama: 2014, AL Behavior Analyst Advisory Council)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  promptPay: { title: 'Ala. Code § 27-1-17 — Limitation periods for payment of claims; overdue claims; retroactive denials', url: 'https://alison.legislature.state.al.us/code-of-alabama?section=27-1-17' },
  aiUR: { title: 'Ala. Code § 27-1-17.2 — Limits on artificial intelligence in prior-authorization review (Act 2026-589)', url: 'https://alison.legislature.state.al.us/code-of-alabama?section=27-1-17.2' },
  urAgents: { title: 'Ala. Code §§ 27-3A-1 to -6 — Utilization review agents (27-3A-3 exemptions, 27-3A-5 standards)', url: 'https://alison.legislature.state.al.us/code-of-alabama?section=27-3A-5' },
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  cfr147: { title: '45 CFR 147.136 — Internal claims and appeals and external review for group and individual coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-147/section-147.136' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer in double coverage', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  aetnaCPB: { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; Exhibit A covers Maryland only)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  aetnaTele: { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (PCOMM-2025-225, March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026; incl. Alabama Regulatory Addendum)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (annual review 7/2026; Alabama not listed)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumNNM: { title: 'Optum National Network Manual (BH02330, 2026 edition; incl. Alabama Regulatory Requirements)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  bcbsalABA: { title: 'Blue Cross and Blue Shield of Alabama — Medical policy “Autism Spectrum Disorder Applied Behavioral Analysis (ABA) Therapy” (managed by Lucet)', url: 'https://mypolicies.itilitihealth.us/policy/938125692074/ABA/vv001?lob=BCBS%20AL' },
  lucetABA: { title: 'Lucet Medical Policy 20.5.005 — Applied Behavior Analysis for the Treatment of Autism Spectrum Disorder (applies 1/1/2026–12/31/2026)', url: 'https://lucethealth.com/wp-content/uploads/2025/12/2026-Lucet-ABA-for-Treatment-of-ASD.pdf' },
  lucetPM: { title: 'Lucet Managed Behavioral Health Provider & Facility Manual (July 2026; Appendix: Blue Cross Blue Shield of Alabama)', url: 'https://lucethealth.com/wp-content/uploads/2024/09/Provider-Manual-July2026.pdf' },
  lucetAL: { title: 'Lucet — Provider resources for Blue Cross and Blue Shield of Alabama', url: 'https://lucethealth.com/providers/plan/blue-cross-and-blue-shield-of-alabama/' },
  lucetFAQ: { title: 'Lucet — BCBSAL Frequently Asked Questions (written for the October 1, 2017 transition)', url: 'https://lucethealth.com/wp-content/uploads/2022/12/BCBSAL_FAQ-1.pdf' },
};

/* ---- Shared Alabama commercial layer (same facts on every commercial guide) ---- */
const AL_MANDATE_BODY =
  'Alabama’s autism mandate is the Riley Ward Act, Ala. Code § 27-54A-2 (Act 2012-298, amended by Act 2017-337). It requires a "health benefit plan" to "cover the screening, diagnosis, and treatment of Autism Spectrum Disorder for an insured 18 years of age or under in policies and contracts issued or delivered in the State of Alabama to employers with at least 51 employees." Coverage "is limited to treatment that is prescribed by the insured’s treating licensed physician or licensed psychologist in accordance with a treatment plan," and the plan must include the diagnosis, treatment by type, frequency and duration, goals, how often it will be updated, and the physician’s or psychologist’s signature. The insurer "may request an updated treatment plan only once every six months" unless both sides agree to more, and it bears the cost of the review. Behavioral health treatment, including ABA, must be "provided or supervised, either in person or by telemedicine, by a Board Certified Behavior Analyst, licensed in the State of Alabama, or a psychologist, licensed in the State of Alabama," and ABA coverage "shall include the services of the personnel who work under the supervision of" that BCBA or psychologist. ABA carries a yearly cap: $40,000 for ages 0–9, $30,000 for ages 10–13 and $20,000 for ages 14–18, which "may be exceeded, upon prior approval by the insurer," when more ABA is medically necessary. There is no visit limit, and dollar limits, deductibles and coinsurance may not be less favorable than for medical and surgical benefits. The plan may still apply coordination of benefits, participating-provider rules, utilization review and medical-necessity review. Since December 31, 2018 the definition includes the State Employees Insurance Board and PEEHIP plans. It does not include non-grandfathered individual and small-group plans that had to carry ACA essential health benefits as of January 1, 2017, and self-funded employer plans answer to ERISA, not state insurance law. The Act does not change any IFSP or IEP obligation.';

const AL_LICENSURE_BODY =
  'Alabama licenses behavior analysts. Ala. Code § 34-5A-2 says "the unlicensed practice of behavior analysis is prohibited in this state," with exemptions for licensed psychologists, physicians, other licensed professionals acting within their own scope, and the "applied behavior analysis direct contact technician" working "under the extended authority and direction of a licensed behavior analyst or a licensed assistant behavior analyst." The licensing body changed this year: Act 2026-144 renamed the Alabama Behavior Analyst Licensing Board the Alabama Behavior Analyst Advisory Council from February 26, 2026 and moved its licensing duties to the Department of Mental Health; existing licenses carried over, and statutes, contracts and payer manuals that still name the old Board now legally refer to the Council. To be licensed, a BCBA must keep active BACB certification and pass a criminal background check; a BCaBA must also show ongoing BCBA supervision. DMH says no license is required for Registered Behavior Technicians. For a BCBA based in another state there are two routes: reciprocity, for someone "actively licensed as a behavior analyst in another state" with comparable requirements that offers Alabama reciprocity, and a temporary license for a BCBA "residing and practicing in another state who temporarily provides behavior analysis services in this state or to a resident of this state," which the rules set at 90 days, extendable once. The insurance mandate makes the license matter for payment too: mandated ABA must be provided or supervised, in person or by telemedicine, by a BCBA "licensed in the State of Alabama." Commercial ABA rates are negotiated and not published. The public benchmark is the Alabama Medicaid ABA fee schedule (effective February 5, 2026), which pays 97153 at $10.00 and 97155 at $15.00 per 15-minute unit.';

const AL_CLAIMS_BODY =
  'Alabama’s prompt-pay statute, Ala. Code § 27-1-17, makes insurers, health service corporations and HMOs pay "within 45 calendar days upon receipt of a clean written claim or 30 calendar days upon receipt of a clean electronic claim." Within the same window they must tell you why a claim is denied or pending and what they need. Once you send it, they have 21 calendar days to pay, deny or otherwise decide the claim. Overdue clean claims earn interest of 1.5% a month. The insurer is not in violation for "any claim submitted more than 180 days after the service was rendered," so file well inside 180 days even when your contract allows longer. A paid claim cannot be clawed back after one year (or after your contract’s filing period, if that is shorter), except for fraud, duplicates or coordination of benefits, which have 18 months. You have 30 days to dispute a recoupment notice. The statute binds out-of-state carriers that process claims for Alabama residents. It does not reach self-funded ERISA plans, the Medicaid Agency or traditional Medicare. In 2026 Alabama also passed Act 2026-589 (Ala. Code § 27-1-17.2): when a health plan uses AI in prior-authorization review, a denial, delay or change based on medical necessity "shall always be made by a licensed physician or other health care professional."';

const MANDATE_REFERRAL_TAIL =
  ' For a fully insured Alabama large-group plan (51 or more employees), the Riley Ward Act limits mandated ABA to treatment "prescribed by the insured’s treating licensed physician or licensed psychologist in accordance with a treatment plan," and the insurer may ask for an updated plan only once every six months. Self-funded ERISA plans, and ACA individual and small-group plans, are outside the Act.';

const MANDATE_AGE_TAIL =
  ' For fully insured Alabama large-group plans, the Riley Ward Act (Ala. Code § 27-54A-2) requires autism coverage for insureds "18 years of age or under," with ABA capped at $40,000 a year for ages 0–9, $30,000 for ages 10–13 and $20,000 for ages 14–18. The insurer may approve more when medically necessary. Self-funded ERISA plans and ACA individual and small-group plans are outside the Act, so the plan’s funding and size decide whether that applies.';

const COMMERCIAL_TURNAROUND =
  'Alabama sets no prior-authorization deadline that reaches most commercial carriers. Ala. Code § 27-3A-5 says a certified utilization review agent must decide "within two business days of the receipt of the request for determination and the receipt of all information necessary," and must decide appeals within 30 days. But § 27-3A-3 exempts licensed insurers reviewing their own plans, HMOs reviewing their own members, and any URAC-accredited entity, which covers most large carriers and behavioral health vendors. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1: a pre-service decision "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours, and 180 days to appeal. 45 CFR 147.136 applies the same claims-and-appeals floor to insured group and individual coverage. Under Ala. Code § 27-1-17.2 (Act 2026-589), any medical-necessity denial of a prior authorization must be made by a licensed physician or other qualified health care professional, even when AI is used.';

const COMMERCIAL_COB =
  'Alabama does not set out its group coordination-of-benefits order in any source we could open. Ala. Code § 27-1-17 defines coordination of benefits by reference to "Alabama Insurance Department Regulation No. 56, or any successor regulation," but Ala. Admin. Code ch. 482-1-056 was repealed in 2007, and we could not retrieve its successor to confirm the birthday rule. Treat the order between two parents’ plans as a question for each plan. The federal rules are settled. If the child also has Alabama Medicaid, the commercial plan pays first: Alabama Medicaid calls itself "the payer of last resort" (42 CFR 433.139), will only process a third-party denial on its approved list or with proof of a good-faith effort to collect, and accepts claims filed within 120 days of the other payer’s decision. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)), and CHAMPVA "would be the last payer" (38 CFR 17.270). Alabama limits retroactive recoupment for coordination-of-benefits reasons to 18 months after payment (Ala. Code § 27-1-17(f)).';

export const alabamaPayers: Record<string, PayerConfig> = {
  'alabama-medicaid': {
    slug: 'alabama-medicaid',
    cardDesc: 'Fee-for-service EPSDT benefit (under 21) with no MCOs; PA on every ABA code except 97151; published rates (97153 $10.00); licensed BCBA must bill.',
    assessmentPA: {
      value: 'No for the initial 97151 assessment, according to both the Chapter 37 code table and the February 2026 fee schedule (97151 "Requires Prior Authorization: No"). 97152 and 0362T do require PA. Chapter 37’s narrative also says "All ABA services require prior authorization," so confirm before billing 97151 without one',
      status: 'verified',
      cites: [S.ch37, S.fee],
    },
    treatmentPA: {
      value: 'Yes. Every treatment code (97153, 97154, 97155, 97156, 97157, 97158, 0373T) needs prior authorization. The request needs the required assessments, a treatment plan and the ABA Therapy Behavior Assessment Form, and each new authorization period needs a new PA filed before the current one expires',
      status: 'verified',
      cites: [S.ch37, S.fee, S.ch04],
    },
    dxRequired: {
      value: 'Yes. Chapter 37 requires "a documented diagnosis of Autism Spectrum Disorder (ASD) or another qualifying developmental or behavioral disorder." It lists F84.0, F84.3, F84.5, F84.8 and F84.9 as the codes ABA may be used for, and the service must follow an EPSDT screening referral',
      status: 'verified',
      cites: [S.ch37, S.admin11],
    },
    payer: 'Alabama Medicaid',
    state: 'AL', kind: 'state-medicaid',
    pill: 'Payer Guide · Alabama Medicaid',
    h1: 'Alabama Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Alabama Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Alabama Medicaid covers ABA: an EPSDT-referred benefit for children under 21, paid fee-for-service with no managed care plans, prior authorization on every code except 97151, a published fee schedule (97153 $10.00), telehealth limited to 97155–97157, and an Alabama behavior-analyst license required.',
    intro: [
      'Alabama Medicaid covers applied behavior analysis for children under 21 as an EPSDT-referred service. The state’s rule lists licensed behavior analysts among the "EPSDT-only" providers, and Chapter 37 of the Provider Billing Manual (Therapy: Occupational, Physical, Speech, and Applied Behavior Analysis) sets the coverage rules. Alabama has no Medicaid managed care plans that authorize or pay ABA. Every authorization goes to the Medicaid Agency and every claim goes to its fiscal agent, Gainwell. Since December 1, 2025 the Agency’s Mental Health Services program area runs the ABA section, at appliedbehavioranalysis@medicaid.alabama.gov.',
      'For an agency entering the Alabama Medicaid market, four facts matter up front. Each child needs an EPSDT screening referral (Form 362) and a physician’s order. The BCBA must hold an Alabama behavior-analyst license and enroll, and the claim goes out under the BCBA. Since February 24, 2026 the enrolled service location must be a real facility with signage, not a home or virtual office. And the published rates are low (97153 $10.00 per 15 minutes), so model the economics before you staff up.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as an EPSDT-referred service for recipients under 21' },
      { label: 'Structure', value: 'Fee-for-service only: no Medicaid MCOs. ACHN regional networks coordinate care but do not authorize or pay ABA' },
      { label: 'Prior auth', value: 'Required on every ABA code except 97151; continuation needs a new PA filed before the current one expires' },
      { label: 'Rates (per 15 min)', value: '97151 $25.00 · 97152 $12.50 · 97153 $10.00 · 97154 $4.00 · 97155 $15.00 · 97156 $30.00 · 97157 $2.50 · 97158 $5.00 · 0362T $30.00 · 0373T $20.00 (eff. 2-5-2026)' },
      { label: 'Who may deliver', value: 'Licensed BCBA; licensed BCaBA under a BCBA; RBT under a BCBA or BCaBA. BCaBAs and RBTs must be employed by the BCBA' },
      { label: 'Telehealth', value: '97155, 97156 and 97157 only, audio-video, GT modifier, after enrolling in telemedicine specialty 931' },
      { label: 'Licensure', value: 'Yes: Alabama license required (Ala. Code § 34-5A; Behavior Analyst Advisory Council under DMH since Feb. 26, 2026)' },
      { label: 'Timely filing', value: 'One year from the date of service' },
    ],
    sections: [
      {
        h2: 'Where ABA sits: EPSDT, fee-for-service, no managed care plans',
        body: [
          'Alabama’s EPSDT rule (Ala. Admin. Code r. 560-X-11-.14, amended effective September 14, 2025) covers ABA from "a Licensed Behavior Analyst, a Licensed Assistant Behavior Analyst under the supervision of a Licensed Behavior Analyst, or by an unlicensed Registered Behavior Technician under the supervision of a Licensed Behavior Analyst or Licensed Assistant Behavior Analyst … for E.P.S.D.T. referred children under the age of 21." Services "must be ordered by a physician for an identified condition(s) noted during the EPSDT screening exam." Chapter 37 of the October 2026 Provider Billing Manual holds the program details: eligibility, documentation, the code list and telehealth.',
          'No managed care plan sits in between. The Alabama Coordinated Health Network (Chapter 40) splits the state into seven regions whose networks give care coordination through primary care physicians, social workers and nurses. Its referral section says a PCP or network referral is no longer needed for specialty services, "with the exception of Lock-in and EPSDT programs. EPSDT referrals will continue to be required." ABA prior authorizations go to the Medicaid Agency and claims to Gainwell. Do not confuse ABA with the Department of Mental Health’s Rehabilitative Autism Services (Chapter 110). That is a separate DMH-contracted program (behavior support H2019, in-home therapy, care coordination), and H2019 may not be billed together with the ABA codes 97151–97158, 0362T or 0373T. Chapter 110 tells ABA providers to use Chapter 37.',
        ],
        cites: [S.admin11, S.ch37, S.ch40, S.ch110, S.alertProg],
      },
      {
        h2: 'Prior authorization, continuation, and what to send',
        body: [
          'Chapter 37 says "All ABA services require prior authorization based on medical necessity determination and submission of required assessments and treatment plans," and both the recipient and the provider get written notice. Its code table and the February 2026 fee schedule both mark 97151 (the behavior identification assessment) "No" for PA, and every other ABA code "Yes." An ABA Therapy Behavior Assessment Form is "required as part of the support documentation for the prior authorization request." Requests go through the Gainwell web portal or a 278 transaction. Supporting documents are uploaded or faxed with a barcode cover sheet, and paper is returned. Chapter 37 says to "allow 14 days for all PAs to be processed." Chapter 4 says that since January 1, 2026 Medicaid has 72 hours for expedited requests and seven calendar days for others. If the Agency asks for more documentation you have 14 calendar days, or the PA is denied.',
          'Authorizations do not roll over. "Continuation of Applied Behavior Analysis (ABA) treatment services requires submission of a new Prior Authorization (PA) request for each authorization period," filed before the current one expires, with updated documentation showing measurable progress (or a clinical reason it is limited), caregiver participation and coordination of care. If the new PA is not approved in time, "services must stop at the end of the authorization period," and claims after that date are denied. Changes to an approved PA (not reconsiderations, code changes or a new rendering provider) go on Form 471, faxed to (833) 536-2134 or (833) 536-2136; allow five business days.',
        ],
        cites: [S.ch37, S.ch04, S.fee],
      },
      {
        h2: 'Staffing, licensure and enrollment',
        body: [
          'Chapter 37 says ABA "must be provided by or under the direct supervision of a qualified behavior analyst, psychologist, or psychiatrist," and that "a qualified behavior analyst must be licensed by the Alabama Behavior Analyst Licensing Board." Since February 26, 2026 that board is the Behavior Analyst Advisory Council within the Department of Mental Health (Act 2026-144); existing licenses carried over. Services are covered when provided by a licensed BCBA, a licensed BCaBA under a BCBA, or an RBT under a BCBA or BCaBA. "BCaBAs and RBTs must be employed by a BCBA and the BCBA assumes professional responsibility," supervision follows current BACB requirements, and "Claims must be submitted by the BCBA." Licensed psychologists and psychiatrists may add ABA specialty 175 to their enrollment.',
          'Enrollment runs through Gainwell. The EPSDT rule lets providers in Alabama, or in a bordering state within 30 miles of the Alabama line, enroll as EPSDT-only providers. Since February 24, 2026 an ABA enrollment location "must be a physical facility" with "visible signage bearing the name of the business." A home residence, a cubicle in an office, a shared space inside another business or a virtual office is no longer accepted, and Gainwell may make an unannounced site visit. Providers already enrolled at a location that fails the test had 30 days to fix it.',
        ],
        cites: [S.ch37, S.lic, S.admin11, S.alertLoc, S.ch02],
      },
      {
        h2: 'Can a BCBA licensed in another state treat an Alabama Medicaid child, including by telehealth?',
        body: [
          'Only with an Alabama license, and only from an approved site. Alabama Medicaid requires an Alabama behavior-analyst license (Chapter 37), and Alabama law bans unlicensed practice of behavior analysis in the state (Ala. Code § 34-5A-2). The telemedicine chapter adds that services "must be provided by a provider who is licensed, registered, or otherwise authorized to engage in his or her healthcare profession in the state where the patient is located," that Alabama law deems the service to take place "at the patient’s originating site within this state," and that providers "must indicate an in-state or qualifying bordering state site of practice address." EPSDT-only enrollment is open to providers in Alabama or within 30 miles of its border, and the ABA location must be a physical facility.',
          'A BCBA licensed elsewhere can get Alabama licensure through reciprocity, if their home state has comparable requirements and offers Alabama reciprocity, or with a temporary license for limited-period services to Alabama residents (90 days, extendable once, under the licensing rules). Even then, only 97155, 97156 and 97157 may be delivered remotely for Medicaid.',
        ],
        cites: [S.ch37, S.ch112, S.lic, S.lic580, S.admin11, S.alertLoc],
      },
      {
        h2: 'What does Alabama Medicaid pay for ABA?',
        body: [
          'The Agency publishes a separate ABA fee schedule (effective February 5, 2026), behind the CPT click-through on its Fee Schedules page. Per 15-minute unit: 97151 behavior identification assessment $25.00 (no PA); 97152 $12.50; 97153 adaptive behavior treatment $10.00; 97154 group $4.00; 97155 protocol modification $15.00; 97156 family guidance $30.00; 97157 multiple-family group $2.50; 97158 social skills group $5.00; 0362T $30.00; 0373T $20.00. Every code except 97151 requires PA. Telemedicine is paid "at parity" with face-to-face. There is no copayment on therapy services. Chapter 37 publishes no daily or annual unit caps for ABA. Units must be supported by the record, and claims go through NCCI procedure-to-procedure and medically-unlikely edits.',
        ],
        cites: [S.fee, S.ch37, S.ch112, S.ch05],
      },
      {
        h2: 'Claims operations: filing limit, NPI, telehealth coding, EVV and appeals',
        body: [
          'File ABA claims on the CMS-1500 (or electronically) "within one year of the date of service." Exceptions: 120 days after a third party’s decision, one year after a retroactive eligibility award, or 120 days after a recoupment. ABA codes "cannot be span billed and must be submitted for each date of service." The rendering provider’s NPI goes in 24J on each line. Because the BCBA must employ the BCaBAs and RBTs and must submit the claim, the claim goes out under the BCBA. Valid places of service are 11 (office) and 12 (home, for ABA only). Telemedicine claims use one of those POS codes with modifier GT. Gainwell processes approved and denied claims through the financial cycle twice a month.',
          'Chapter 37 does not mention electronic visit verification for ABA; the Agency lists EVV under its long-term-care and waiver programs. If a PA is denied, you may ask Gainwell for reconsideration within 14 days of the denial letter, and a Fair Hearing request must arrive within 60 days. For ABA, Chapter 37 says second-level appeals go by mail, with all supporting documents, to the Associate Director, Mental Health Programs, P.O. Box 5624, Montgomery, AL 36103-5624. A licensed psychologist or psychiatrist reviews them. You may not bill the family for a service whose PA was denied.',
        ],
        cites: [S.ch37, S.ch05, S.ch04, S.ch112],
      },
    ],
    collect: [
      { title: 'EPSDT referral (Form 362)', desc: 'From the screening provider, with the screening date and the reason for referral; a physician’s order (the referral can serve as the order if it meets the order rules). A new screening and referral are needed when the diagnosis, plan of care or treatment changes.' },
      { title: 'Diagnosis', desc: 'ASD (F84.0, F84.3, F84.5, F84.8 or F84.9) documented by a licensed physician, psychologist or other qualified professional.' },
      { title: 'Assessments for the PA', desc: 'The ABA Therapy Behavior Assessment Form, the BCBA’s treatment plan, and the diagnostic and functional evaluations behind it.' },
      { title: 'Other insurance', desc: 'Medicaid pays last. Bill any commercial plan first and keep its denial; Medicaid accepts the claim within 120 days of the other payer’s decision.' },
      { title: 'Age', desc: 'Under 21. No adult ABA benefit was found.' },
    ],
    sources: [S.ch37, S.ch04, S.ch05, S.ch02, S.ch40, S.ch110, S.ch112, S.appA, S.manuals, S.fee, S.admin11, S.alertLoc, S.alertProg, S.lic, S.lic580, S.bacbLic, S.cfr440, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'A licensed BCaBA works under a BCBA; an RBT works under a BCBA or BCaBA. "BCaBAs and RBTs must be employed by a BCBA and the BCBA assumes professional responsibility for the services." The BCBA and BCaBA "must document supervision and direct observation according to the current requirements of the Behavior Analyst Certification Board." Alabama Medicaid publishes no ratio of its own; the BACB’s requirements are what it enforces.',
        status: 'verified',
        cites: [S.ch37, S.admin11],
      },
      concurrentBilling: {
        value: 'Not addressed. Chapter 37 and the ABA fee schedule list 97153 and 97155 as separate PA-required codes and say nothing about billing them for the same clock time.',
        status: 'unverified',
        cites: [S.ch37, S.fee],
        verifyVia: 'Alabama Medicaid Mental Health Services program area, appliedbehavioranalysis@medicaid.alabama.gov, or the Gainwell Provider Assistance Center, 1-800-688-7989.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No daily or annual unit caps for ABA are published in Chapter 37 or on the fee schedule. Units are set per PA, the record must support every unit billed, codes are billed per date of service (no span billing), and claims pass through NCCI procedure-to-procedure and medically-unlikely edits.',
        status: 'verified',
        cites: [S.ch37, S.fee, S.ch05],
      },
      noteSignature: {
        value: 'Each session note needs the CPT code, date, start and end time, location, the "signature and credentials of staff delivering service," and the "client or guardian signature," plus progress, supervisory documentation and fidelity monitoring. Entries "must be authenticated and dated (prior to being submitted for reimbursement)" by the person responsible. Handwritten, initials (for treatment plan reviews) or electronic authentication is accepted; "a stamped signature is not acceptable."',
        status: 'verified',
        cites: [S.ch37],
      },
      placeOfService: {
        value: 'POS 11 (office) and POS 12 (home, "for ABA therapy only"); telemedicine claims use one of those with modifier GT. Since February 24, 2026 the enrolled ABA location must be a physical facility with visible signage, not a home residence, a cubicle in an office, a shared space in another business or a virtual office.',
        status: 'verified',
        cites: [S.ch37, S.alertLoc],
      },
      billAsProvider: {
        value: 'The BCBA. "Claims must be submitted by the BCBA" (Chapter 37), and the EPSDT rule says "Claims must be submitted by the Licensed Behavior Analyst." The supervising provider must employ the person delivering the service, and "the supervising therapist must assume full professional responsibility for services provided and bill for such services." The case record must name the person who delivered each service. The rendering NPI goes in block 24J.',
        status: 'verified',
        cites: [S.ch37, S.admin11, S.ch05],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. Chapter 37: "Children must be under the age of 21"; the EPSDT rule covers ABA "for E.P.S.D.T. referred children under the age of 21."',
        status: 'verified',
        cites: [S.ch37, S.admin11],
      },
      dxRecency: {
        value: 'Chapter 37 sets no age limit on the diagnosis. The dated requirement is the referral: Appendix A says "a new approval/EPSDT screening must be provided anytime the diagnosis, plan of care … or treatment changes," and a new screening and referral are needed once the referral expires. Each continuation PA needs updated clinical documentation.',
        status: 'verified',
        cites: [S.ch37, S.appA],
      },
      diagnosingProviders: {
        value: 'A diagnosis "as determined by a licensed physician, psychologist, or other qualified professional within their scope of practice" (Chapter 37).',
        status: 'verified',
        cites: [S.ch37],
      },
      diagnosticTools: {
        value: 'None is mandated. Chapter 37 gives examples: autism-specific tools (CARS-2, CAST, SCQ, SRS-2, ABC, GARS, Aberrant Behavior Checklist, ADOS-2, ADI-R, CHAT), adaptive measures (Vineland, ABAS), and cognitive tests (Leiter-R, Mullen, Bayley, K-ABC-II, WPPSI-III, WISC-IV, TONI-4). The treatment plan should name any standardized assessment used and its results.',
        status: 'verified',
        cites: [S.ch37],
      },
      referral: {
        value: 'Yes. ABA needs an EPSDT screening referral on the Alabama Medicaid Referral Form (Form 362), completed by the screening physician with the screening date and reason for referral, and a physician’s (or non-physician practitioner’s) order. The referral can serve as the order if it meets the rules. Without a completed referral in the record, "payments for these services will be recouped." No separate ACHN PCP referral is needed for specialty care, but EPSDT referrals still are.',
        status: 'verified',
        cites: [S.ch37, S.appA, S.ch40, S.admin11],
      },
      telehealth: {
        value: 'Only 97155, 97156 and 97157 (the Chapter 37 table marks every other ABA code "Telehealth Allowed: No"), delivered by live audio-video with modifier GT and a POS of 11 or 12. The provider must enroll with telemedicine specialty 931 (Telemedicine Service Agreement), get the recipient’s consent first, and have trained staff who know the treatment plan "immediately available in-person to the recipient." A parent or guardian must attend for a minor. The provider must be licensed in Alabama (where the patient is) and practice from an Alabama or qualifying bordering-state site. Telemedicine is paid at parity.',
        status: 'verified',
        cites: [S.ch37, S.ch112],
      },
      authTurnaround: {
        value: 'Chapter 4 says that since January 1, 2026 Medicaid has "72 hours to provide a response for expedited requests and seven calendar days" for others, matching the federal floor for state agencies (42 CFR 440.230(e)). Chapter 37 still tells ABA providers to "allow 14 days for all PAs to be processed." When more documentation is requested you have 14 calendar days. Reconsideration must reach Gainwell within 14 days of the denial letter; a Fair Hearing request within 60 days. Form 471 changes take about five business days. File continuation PAs before the current authorization ends, because services must stop when it lapses.',
        status: 'verified',
        cites: [S.ch04, S.ch37, S.cfr440],
      },
      coordinationOfBenefits: {
        value: 'Medicaid pays last. "Because Medicaid is the payer of last resort, the system confirms that a third party resource is not responsible." Claims after another payer go in with the TPL payment or denial. Denials on the Agency’s approved list are filed electronically; any other denial needs a paper claim showing a good-faith effort to collect from the primary payer. Claims over a year old are accepted within 120 days of the third party’s decision.',
        status: 'verified',
        cites: [S.ch05, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Alabama Medicaid cover ABA therapy?', a: 'Yes, for recipients under 21 referred through an EPSDT screening, with a diagnosis such as F84.0, F84.3, F84.5, F84.8 or F84.9. Every ABA code except 97151 needs prior authorization from the Medicaid Agency.' },
      { q: 'Is there an Alabama Medicaid managed care plan for ABA?', a: 'No. Alabama Medicaid pays ABA fee-for-service through Gainwell. The Alabama Coordinated Health Networks do care coordination; they do not authorize or pay ABA.' },
      { q: 'What does Alabama Medicaid pay for ABA?', a: 'Per 15 minutes under the February 2026 fee schedule: 97151 $25.00, 97152 $12.50, 97153 $10.00, 97154 $4.00, 97155 $15.00, 97156 $30.00, 97157 $2.50, 97158 $5.00, 0362T $30.00, 0373T $20.00.' },
      { q: 'Can ABA for Alabama Medicaid be done by telehealth?', a: 'Only 97155, 97156 and 97157, by live audio-video with modifier GT, after enrolling in telemedicine specialty 931 and with staff available in person to the child. The 97151 assessment and technician 97153 must be in person.' },
      { q: 'Can a BCBA licensed in another state bill Alabama Medicaid?', a: 'Not without an Alabama behavior-analyst license. Medicaid requires the license, telemedicine providers must be licensed where the patient is, and EPSDT-only enrollment is limited to Alabama and providers within 30 miles of the state line. Out-of-state BCBAs can apply for reciprocity or a 90-day temporary license.' },
      { q: 'What is the Alabama Medicaid timely filing limit for ABA?', a: 'One year from the date of service, or 120 days from a primary payer’s decision for claims older than a year.' },
    ],
  },

  'aetna-alabama': {
    slug: 'aetna-alabama',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA guide and BH precertification list, plus Alabama’s Riley Ward Act mandate (large group, 18 and under, age-banded caps).',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024), submitted through Availity',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: precertification for every ABA code; the reauthorization interval is set per plan, and Aetna reviews progress every six months',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (behavioral health number on the card or Availity): ask whether the group carries ABA precertification and what reauthorization interval it uses.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) from an appropriate provider; CPB 0554 treats ABA for other conditions as experimental',
      status: 'verified',
      cites: [S.aetnaGuide, S.aetnaCPB],
    },
    payer: 'Aetna in Alabama',
    state: 'AL', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Alabama',
    h1: 'Aetna ABA coverage in Alabama: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Alabama: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Alabama families: the national ABA medical necessity guide, precertification on all ten ABA codes, Alabama’s Riley Ward Act mandate (large group, 18 and under, $40,000/$30,000/$20,000 caps), the Alabama behavior-analyst license, and what intake should verify.',
    intro: [
      'For an intake team in Alabama, an Aetna card means three layers: Aetna’s national ABA criteria, Alabama’s Riley Ward Act, and the plan’s size and funding, which decide whether the Act applies. The Act only binds fully insured plans sold to employers with 51 or more employees, for children 18 and under. Alabama has no Medicaid managed care, so an Aetna card here is commercial (or Medicare).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s national ABA guide' },
      { label: 'State mandate', value: 'Riley Ward Act, Ala. Code § 27-54A-2 (Act 2012-298, amended 2017)' },
      { label: 'Mandate age', value: '18 and under' },
      { label: 'Mandate caps', value: 'ABA: $40,000/yr ages 0–9, $30,000/yr ages 10–13, $20,000/yr ages 14–18; can be exceeded with insurer prior approval when medically necessary; no visit limits' },
      { label: 'Exempt from mandate', value: 'Employers under 51 employees; non-grandfathered ACA individual/small-group plans; self-funded ERISA plans' },
      { label: 'Licensure', value: 'Required: Alabama license (Ala. Code § 34-5A); RBTs exempt when working under a licensed behavior analyst' },
      { label: 'Fee schedule', value: 'Not public. Aetna pays the contracted rate in your agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Alabama',
        body: [
          'Aetna’s ABA medical necessity guide (©2026) requires a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) from an appropriate provider, and a standardized functional measure from the past 12 months showing impairment at least one standard deviation below the mean (or a significant risk of harm). It describes comprehensive programs as typically 10–25 hours a week for ages 0–7 and focused programs as 1–20 hours, and reviews progress every six months. Its only state exhibit is Maryland, so the national criteria apply unchanged in Alabama. All ten ABA codes, 97151–97158, 0362T and 0373T, are on Aetna’s behavioral health precertification list, and most requests go through Availity. Services "must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws)," which includes Alabama.',
        ],
        cites: [S.aetnaGuide, S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert],
      },
      {
        h2: 'The Alabama mandate: the Riley Ward Act',
        body: [AL_MANDATE_BODY],
        cites: [S.rileyWard],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [AL_LICENSURE_BODY],
        cites: [S.lic, S.lic580, S.dmhCouncil, S.bacbLic, S.rileyWard, S.fee],
      },
      {
        h2: 'Claims operations in Alabama: prompt pay and recoupment',
        body: [AL_CLAIMS_BODY],
        cites: [S.promptPay, S.aiUR],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA?',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) treats payment as a contract term: "The rates and compensation under your agreement are subject to the Aetna coding/claim edit policies." If you have both a direct agreement and an intermediary contract, "your direct Aetna rates will apply unless we specifically notify you otherwise." When a member’s benefits run out, you "cannot charge them more than the contracted rate." Get your rates from your Aetna agreement. As a public benchmark, Alabama Medicaid pays 97153 at $10.00 per 15 minutes; commercial contracts are negotiated separately.',
        ],
        cites: [S.aetnaOM, S.fee],
      },
    ],
    collect: [
      { title: 'Plan size and funding', desc: 'Fully insured large group (51+ employees, Riley Ward applies) vs. small group/individual ACA plan or self-funded ERISA plan (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification and Availity precertification.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Standardized functional measure', desc: 'From the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS).' },
      { title: 'Signed treatment plan', desc: 'Riley Ward plans require treatment prescribed by a licensed physician or psychologist under a signed treatment plan.' },
    ],
    sources: [S.aetnaGuide, S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.aetnaTele, S.rileyWard, S.lic, S.lic580, S.dmhCouncil, S.bacbLic, S.promptPay, S.aiUR, S.urAgents, S.erisa, S.cfr147, S.cfr433, S.ch05, S.tricare, S.champva, S.fee],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s Network Participation Criteria (5/26): ABA "must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board," supervised staff may be a BCaBA "or a paraprofessional," and Aetna requires "a minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional "for each 10 hours of applied behavior analysis," with the supervisor "onsite with the child at least one hour a month." "All BCBAs, BCaBAs and paraprofessionals must meet state requirements." In Alabama that means a licensed behavior analyst or licensed assistant behavior analyst directs the technician (Ala. Code § 34-5A-2).',
        status: 'verified',
        cites: [S.aetnaNPC, S.lic],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA documents (CPB 0554, the medical necessity guide, the precertification list).',
        status: 'unverified',
        cites: [S.aetnaGuide, S.aetnaCPB],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Aetna publishes no per-day or per-week cap: typical intensity is 10–25 hours a week (comprehensive) and 1–20 (focused), with progress reviewed every six months. On a Riley Ward plan the annual ABA dollar caps ($40,000 / $30,000 / $20,000 by age band) apply unless the insurer approves more as medically necessary.',
        status: 'verified',
        cites: [S.aetnaGuide, S.rileyWard],
      },
      noteSignature: {
        value: 'Not addressed. Aetna sets what the treatment plan must contain, not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'The participating-provider agreement and Aetna Behavioral Health’s documentation standards.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'The guide does not tie outpatient ABA to any setting; it expects coordination with the school district where applicable. The Riley Ward Act does not change any IEP, IFSP or ISP obligation.',
        status: 'verified',
        cites: [S.aetnaGuide, S.rileyWard],
      },
      billAsProvider: {
        value: 'Services "must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists" where in scope. Alabama licenses behavior analysts, so the Alabama-licensed BCBA (or licensed psychologist) is the billing credential.',
        status: 'verified',
        cites: [S.aetnaGuide, S.lic],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national guide gives typical age ranges, not limits.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.rileyWard],
        verifyVia: 'Live benefits verification: establish employer size, fully insured vs. self-funded, then the plan’s own age and dollar terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'The diagnosis does not expire, but medical necessity requires functional impairment on a standardized scale given in the past 12 months.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'An appropriate provider: a "licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice."',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosticTools: {
        value: 'CPB 0648 discusses ASD diagnostic instruments such as the ADOS-2 and ADI-R. The ABA guide requires a standardized functional measure from the past 12 months, for example Vineland-3, ABAS, VB-MAPP or ABLLS.',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s national ABA documents require precertification of all ten ABA codes, not a physician referral.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.rileyWard],
      },
      telehealth: {
        value: 'Aetna’s telemedicine payment policy lists, for commercial plans, 97151, 97153, 97155, 97156 and 97157 with modifier GT, 95 or FR (97152, 97154 and 97158 are checked for Medicare Advantage only). The posted policy shows a last review of June 2021, so treat that list as perishable. Aetna Behavioral Health offers telehealth to fully insured members and to self-insured sponsors unless they opt out, and providers "must … ensure that they have the proper licensure based on state requirements," which in Alabama means an Alabama license. On Riley Ward plans the Act allows mandated ABA to be "provided or supervised, either in person or by telemedicine," by an Alabama-licensed BCBA.',
        status: 'plan-dependent',
        cites: [S.aetnaTele, S.aetnaOM, S.rileyWard],
        verifyVia: 'Availity or the behavioral health number on the card: ask whether the plan covers ABA by telehealth (and whether a self-insured sponsor opted out), and which codes, POS and modifier Aetna pays.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: COMMERCIAL_TURNAROUND + ' Aetna publishes no Alabama-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.urAgents, S.erisa, S.cfr147, S.aiUR],
        verifyVia: 'At benefits verification, ask whether the plan is fully insured or self-funded and what decision time and reauthorization lead time Aetna applies.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMMERCIAL_COB,
        status: 'plan-dependent',
        cites: [S.promptPay, S.ch05, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Aetna at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Alabama?', a: 'Yes, for ASD under Aetna’s national criteria, with precertification on all ten ABA codes. Fully insured large-group plans (51+ employees) also carry the Riley Ward Act mandate for children 18 and under.' },
      { q: 'What does the Alabama autism mandate require?', a: 'The Riley Ward Act requires large-group health plans to cover autism screening, diagnosis and treatment, including ABA, through age 18, under a physician’s or psychologist’s treatment plan. ABA may be capped at $40,000 (ages 0–9), $30,000 (10–13) or $20,000 (14–18) a year, with more allowed on prior approval.' },
      { q: 'Does a BCBA need an Alabama license to bill Aetna?', a: 'Yes in practice. Alabama prohibits unlicensed practice of behavior analysis, Aetna requires licensed behavior analysts in licensure states, and the mandate requires a BCBA licensed in Alabama.' },
      { q: 'What does Aetna pay for ABA in Alabama?', a: 'Aetna publishes no ABA rates; payment follows your Aetna agreement. The only public benchmark is Alabama Medicaid’s fee schedule (97153 $10.00 per 15 minutes).' },
    ],
  },

  'cigna-alabama': {
    slug: 'cigna-alabama',
    family: 'cigna',
    cardDesc: 'Evernorth EN0499 + autism resource guide (no PA on assessment codes) + Alabama’s Riley Ward Act; Evernorth’s Alabama Regulatory Addendum applies.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the plan covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: completed assessment and treatment plan submitted with the ABA prior authorization request',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: confirmed ASD (F84.0–F84.9 except F84.2 Rett) under DSM-5-TR by an independently licensed clinician whose board allows diagnosis',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Alabama',
    state: 'AL', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Alabama',
    h1: 'Cigna / Evernorth ABA coverage in Alabama: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Alabama: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Alabama families: policy EN0499, no PA on assessment codes, Alabama’s Riley Ward Act mandate (large group, 18 and under, age-banded caps), the Evernorth Alabama Regulatory Addendum, licensure, and what intake should verify.',
    intro: [
      'For an intake team in Alabama, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 and the Cigna autism resource guide, Alabama’s Riley Ward Act, and the plan’s size and funding. Many Cigna members are on self-funded employer plans, which sit outside the state mandate, so check funding first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per EN0499' },
      { label: 'State mandate', value: 'Riley Ward Act, Ala. Code § 27-54A-2 (Act 2012-298, amended 2017)' },
      { label: 'Mandate age', value: '18 and under' },
      { label: 'Mandate caps', value: 'ABA: $40,000/yr ages 0–9, $30,000/yr ages 10–13, $20,000/yr ages 14–18; can be exceeded with insurer prior approval when medically necessary; no visit limits' },
      { label: 'Exempt from mandate', value: 'Employers under 51 employees; non-grandfathered ACA individual/small-group plans; self-funded ERISA plans' },
      { label: 'Licensure', value: 'Required: Alabama license (Ala. Code § 34-5A); RBTs exempt when working under a licensed behavior analyst' },
      { label: 'Fee schedule', value: 'Not public: Exhibit A of your Evernorth Provider Agreement; Provider Services 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Alabama',
        body: [
          'Cigna runs ABA through Evernorth Behavioral Health under EN0499 (effective May 15, 2026). Under the autism resource guide, assessment codes 97151, 97152 and 0362T need no prior authorization with an autism diagnosis when the provider is independently licensed or a BCBA. Treatment needs the completed assessment and treatment plan. Neither EN0499 nor the resource guide mentions Alabama. Evernorth’s September 2026 Administrative Guidelines do carry an Alabama Regulatory Addendum, which repeats the state’s recoupment limits (12 months after payment, or 18 months for coordination of benefits, with 30 days to dispute) and the Ala. Code § 27-1-17.1 right to be paid by ACH. The addendum does not apply to self-funded plans.',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin],
      },
      {
        h2: 'The Alabama mandate: the Riley Ward Act',
        body: [AL_MANDATE_BODY],
        cites: [S.rileyWard],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [AL_LICENSURE_BODY],
        cites: [S.lic, S.lic580, S.dmhCouncil, S.bacbLic, S.rileyWard, S.fee],
      },
      {
        h2: 'Claims operations in Alabama: prompt pay and recoupment',
        body: [AL_CLAIMS_BODY],
        cites: [S.promptPay, S.aiUR, S.ebhAdmin],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth’s Administrative Guidelines (September 2026) say the Provider Agreement terms "include the reimbursement rates applicable to covered services." ABA providers are told: "For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement." Provider Services is 800.926.2273. Virtual services carry modifier 95, which Evernorth says "will not change the reimbursement." As a public benchmark, Alabama Medicaid pays 97153 at $10.00 per 15 minutes.',
        ],
        cites: [S.ebhAdmin, S.fee],
      },
    ],
    collect: [
      { title: 'Plan size and funding', desc: 'Fully insured large group (Riley Ward applies) vs. small group/individual or self-funded ERISA.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, and the date of the most recent diagnosis. Provisional or rule-out diagnoses do not count.' },
      { title: 'Standardized assessment timing', desc: 'Instrument given within 60 days before treatment starts.' },
      { title: 'Signed treatment plan', desc: 'Riley Ward plans require treatment prescribed by a licensed physician or psychologist under a signed treatment plan.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.rileyWard, S.lic, S.lic580, S.dmhCouncil, S.bacbLic, S.promptPay, S.aiUR, S.urAgents, S.erisa, S.cfr147, S.cfr433, S.ch05, S.tricare, S.champva, S.fee],
    deliveryRules: {
      supervision: {
        value: 'Case supervision by a BCBA, Licensed Behavior Analyst, or independently licensed mental health professional with ABA training, at "one to two hours per ten hours of direct treatment." When treatment is 10 hours a week or less, at least one to two hours a week of direct case supervision.',
        status: 'verified',
        cites: [S.en0499],
      },
      concurrentBilling: {
        value: 'Only one provider may bill a unit of time, except 97153, 97154 and 97155 during direct supervision, when the BCBA or QHP and the technician are both face-to-face with the patient. ABA delivered at the same time as another treatment (such as speech or occupational therapy) is not reimbursable.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499],
      },
      dailyLimits: {
        value: 'No per-day cap. All ABA codes bill in 15-minute units; intensity must reflect severity, goals and response. On a Riley Ward plan the annual ABA dollar caps by age band apply unless the insurer approves more.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.rileyWard],
      },
      noteSignature: {
        value: 'Each service record needs date and time, location, who was present, the service delivered, and the "name, credential (if applicable), and signature of ABA provider who rendered the service."',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'In academic, vocational or telehealth settings the service must still meet EN0499’s definition of direct treatment, and goals and data are reported for each setting. Primarily educational services are not covered.',
        status: 'verified',
        cites: [S.en0499],
      },
      billAsProvider: {
        value: 'Evernorth does not credential unlicensed or uncertified staff; their services are billed under the supervising provider. Only a BCBA or other licensed provider goes in box 33, and electronic claims use payer ID 62308. In Alabama that BCBA must also hold an Alabama license (Ala. Code § 34-5A-2).',
        status: 'verified',
        cites: [S.cignaARG, S.lic],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; access to focused intervention "should not be restricted by age."' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.rileyWard],
        verifyVia: 'Live benefits verification: establish employer size and fully insured vs. self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'The diagnosis does not expire, but the request needs the date it was most recently made. The clocks run on data: the standardized instrument within 60 days before treatment, baseline data within 60 days, and a new standardized assessment after any break in treatment of more than 60 days.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional "licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice," using DSM-5-TR criteria; their name, credentials and licensure type must be provided.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated. It must be reliable, valid and standardized, measure the ASD domains, be given by a trained administrator, and be the current edition (the policy’s example: Vineland-3, not Vineland-II).',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral. Assessments need no PA with an autism diagnosis; treatment needs the assessment and plan on the PA request.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.rileyWard],
      },
      telehealth: {
        value: 'All ABA CPT codes are covered telehealth services (autism resource guide), and EN0499 allows in-person, telehealth or hybrid delivery. Bill modifier 95. Evernorth says providers "must meet all state requirements to provide virtual" behavioral health, which in Alabama means an Alabama behavior-analyst license.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ebhAdmin, S.lic],
      },
      authTurnaround: {
        value: COMMERCIAL_TURNAROUND + ' Cigna/Evernorth publishes no Alabama-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.urAgents, S.erisa, S.cfr147, S.aiUR],
        verifyVia: 'Evernorth Provider Services, 800.926.2273: ask the plan’s funding type, the decision time and the reauthorization lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMMERCIAL_COB,
        status: 'plan-dependent',
        cites: [S.promptPay, S.ebhAdmin, S.ch05, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Cigna/Evernorth at benefits verification for the coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Alabama?', a: 'Yes, under EN0499 for ASD. Fully insured large-group plans also carry the Riley Ward Act mandate for children 18 and under; self-funded plans follow their own documents.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in Alabama?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'Can ABA be done by telehealth with Cigna in Alabama?', a: 'Cigna covers all ABA codes by telehealth (modifier 95), but the provider must meet Alabama’s licensing requirements.' },
      { q: 'What does Cigna pay for ABA in Alabama?', a: 'Cigna publishes no ABA rates. Your fee schedule is Exhibit A of your Evernorth Provider Agreement (Provider Services 800.926.2273). Alabama Medicaid’s 97153 rate ($10.00 per 15 minutes) is the only public benchmark.' },
    ],
  },

  'unitedhealthcare-alabama': {
    slug: 'unitedhealthcare-alabama',
    family: 'unitedhealthcare',
    cardDesc: 'Optum ABA criteria + Alabama’s Riley Ward Act; Alabama is not in Optum’s state-mandate supplement; telehealth limited to 97155–97157.',
    assessmentPA: {
      value: 'Required: Optum’s ABA Supplemental Clinical Criteria say "prior authorization is required for ABA (unless otherwise specified or mandated by contract or law)"',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required; the review interval is set per authorization, and use below 80% of authorized hours over two weeks must be explained at review',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express or the behavioral health number on the card: ask what review interval applies to this member’s ABA authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5-TR ASD with severity level, diagnosed by a state-licensed physician, psychologist or other qualified licensed clinician',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Alabama',
    state: 'AL', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Alabama',
    h1: 'UnitedHealthcare / Optum ABA coverage in Alabama: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Alabama: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Alabama families: Optum’s ABA criteria and prior authorization, telehealth limited to 97155–97157, Alabama’s Riley Ward Act mandate (large group, 18 and under, age-banded caps), the Alabama license, and what intake should verify.',
    intro: [
      'For an intake team in Alabama, a UnitedHealthcare card means three layers: Optum Behavioral Health’s national ABA criteria, Alabama’s Riley Ward Act, and the plan’s size and funding. Alabama has no Medicaid managed care, so a UHC card here is commercial (or Medicare).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'Riley Ward Act, Ala. Code § 27-54A-2 (Act 2012-298, amended 2017)' },
      { label: 'Mandate age', value: '18 and under' },
      { label: 'Mandate caps', value: 'ABA: $40,000/yr ages 0–9, $30,000/yr ages 10–13, $20,000/yr ages 14–18; can be exceeded with insurer prior approval when medically necessary; no visit limits' },
      { label: 'Exempt from mandate', value: 'Employers under 51 employees; non-grandfathered ACA individual/small-group plans; self-funded ERISA plans' },
      { label: 'Licensure', value: 'Required: Alabama license (Ala. Code § 34-5A); RBTs exempt when working under a licensed behavior analyst' },
      { label: 'Fee schedule', value: 'Not public. Optum pays up to the “Fee Maximum” in your agreement, by credential (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Alabama',
        body: [
          'UnitedHealthcare runs ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (annual review August 2025, interim review April 2026). Prior authorization is required. The criteria require a diagnosis from a state-licensed clinician confirmed with validated tools, a credentialed ABA provider (a master’s- or doctoral-level BCBA or licensed clinician), and case supervision of 1–2 hours per 10 hours of direct treatment. At review, use below 80% of authorized hours must be explained. Optum’s ABA State Mandates supplement (annual review July 2026) has entries for Arizona, California, Connecticut, Florida, Indiana, Kansas Medicaid, Kentucky, Maryland, Massachusetts, New Jersey, New York, Ohio, Pennsylvania and Virginia. Alabama is not among them, so no Alabama-specific criteria modify the national policy. Optum’s National Network Manual does carry Alabama Regulatory Requirements for contracts.',
        ],
        cites: [S.optumSCC, S.optumSM, S.optumNNM],
      },
      {
        h2: 'The Alabama mandate: the Riley Ward Act',
        body: [AL_MANDATE_BODY],
        cites: [S.rileyWard],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [AL_LICENSURE_BODY],
        cites: [S.lic, S.lic580, S.dmhCouncil, S.bacbLic, S.rileyWard, S.fee],
      },
      {
        h2: 'Claims operations in Alabama: prompt pay and recoupment',
        body: [AL_CLAIMS_BODY],
        cites: [S.promptPay, S.aiUR],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA?',
        body: [
          'UnitedHealthcare publishes no ABA rate table; Optum pays from your contract. The National Network Manual defines the "Fee Maximum" as "the maximum amount a participating provider may be paid for a specific health care service provided to a member," and says "Reimbursement to clinicians is based upon licensure rather than degree." Optum’s commercial ABA Reimbursement Policy (2022RP501A, updated June 2026) puts a credential modifier on every line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a BCBA-D or doctoral-level clinician. It notes that state requirements "may supplement, modify or supersede" the policy. As a public benchmark, Alabama Medicaid pays 97153 at $10.00 per 15 minutes.',
        ],
        cites: [S.optumNNM, S.optumReimb, S.fee],
      },
    ],
    collect: [
      { title: 'Plan size and funding', desc: 'Fully insured large group (Riley Ward applies) vs. small group/individual or self-funded ERISA.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification on Provider Express.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD and severity level, confirmed with a validated tool (ADI-R, ADOS-2 and others).' },
      { title: 'Signed treatment plan', desc: 'Riley Ward plans require treatment prescribed by a licensed physician or psychologist under a signed treatment plan.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumNNM, S.optumReimb, S.rileyWard, S.lic, S.lic580, S.dmhCouncil, S.bacbLic, S.promptPay, S.aiUR, S.urAgents, S.erisa, S.cfr147, S.cfr433, S.ch05, S.tricare, S.champva, S.fee],
    deliveryRules: {
      supervision: {
        value: '"Consistent with CASP standards of care, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week." Technicians work under a BCBA or licensed behavioral health clinician and "should be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate." Optum does not recommend parents serving as their own child’s RBT.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      concurrentBilling: {
        value: 'Not addressed. The criteria describe direct case supervision during direct treatment but do not say how to bill overlapping time.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum Provider Express, the participating-provider agreement, or a written coding determination from Optum.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap: requested hours must be justified by documented clinical need at the least restrictive level, and use below 80% of authorized hours over two weeks must be explained. On a Riley Ward plan the annual ABA dollar caps by age band apply unless the insurer approves more.',
        status: 'verified',
        cites: [S.optumSCC, S.rileyWard],
      },
      noteSignature: {
        value: 'Not addressed. The criteria set what must be documented for coverage, not who signs a session note or when.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual (documentation standards) and the participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'ABA is provided at the least restrictive, most clinically appropriate level. Not covered: services that are not ABA "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA. School coordination such as teacher training is covered.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      billAsProvider: {
        value: 'The credentialed provider is a master’s- or doctoral-level BCBA or licensed behavioral health clinician; a BCaBA or unlicensed technician works under that provider’s direct supervision. Each line carries the rendering credential modifier (HM RBT, HN BCaBA, HO BCBA, HP BCBA-D). Alabama requires the BCBA to be licensed in the state.',
        status: 'verified',
        cites: [S.optumSCC, S.optumReimb, S.lic],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The Optum criteria carry no age criterion; the member’s plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.rileyWard],
        verifyVia: 'Provider Express benefits check: establish employer size and fully insured vs. self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'The diagnosis does not expire; it must be confirmed with severity level using validated tools. Progress is reviewed each authorization period.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: '"A state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis" under DSM-5-TR.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one validated tool, from screens (M-CHAT and others; CARS/CARS-2, STAT) to formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO). Progress is measured with tools such as Vineland, SRS or VB-MAPP.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'Optum requires prior authorization, not a separate physician referral.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.rileyWard],
      },
      telehealth: {
        value: 'Three codes. Optum’s Telehealth Billing guide (updated September 2025), commercial: "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157." Bill POS 02 or 10. The criteria add that telehealth is "not intended to supplant in-person service." The 97151 assessment and technician 97153 must be in person. The Riley Ward Act lets mandated ABA be "provided or supervised … by telemedicine" by an Alabama-licensed BCBA, so ask Optum how it applies its code list to a fully insured Alabama plan.',
        status: 'verified',
        cites: [S.optumTele, S.optumSCC, S.rileyWard],
      },
      authTurnaround: {
        value: COMMERCIAL_TURNAROUND + ' UnitedHealthcare/Optum publishes no Alabama-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.urAgents, S.erisa, S.cfr147, S.aiUR],
        verifyVia: 'Optum Provider Express: ask the plan’s funding type, decision time and reauthorization lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMMERCIAL_COB,
        status: 'plan-dependent',
        cites: [S.promptPay, S.ch05, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask UnitedHealthcare/Optum at benefits verification for the coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Alabama?', a: 'Yes, under Optum’s national ABA criteria for ASD, with prior authorization. Fully insured large-group plans also carry the Riley Ward Act mandate for children 18 and under.' },
      { q: 'Does Optum have Alabama-specific ABA criteria?', a: 'No. Alabama is not in Optum’s ABA State Mandates supplement, so the national criteria apply.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in Alabama?', a: 'Optum’s commercial telehealth guide allows only 97155, 97156 and 97157 (supervision and family training), billed POS 02 or 10.' },
      { q: 'What does UnitedHealthcare pay for ABA in Alabama?', a: 'No published rates. Optum pays up to the Fee Maximum in your agreement, and each line carries a credential modifier (HM, HN, HO, HP). Alabama Medicaid’s 97153 rate ($10.00 per 15 minutes) is the only public benchmark.' },
    ],
  },

  'blue-cross-blue-shield-of-alabama': {
    slug: 'blue-cross-blue-shield-of-alabama',
    family: 'bcbs',
    cardDesc: 'Alabama’s Blue plan: ABA run by Lucet under policy 20.5.005; PA on every ABA session, assessment included; physical Alabama location required; Riley Ward Act mandate.',
    assessmentPA: {
      value: 'Required. Lucet’s Blue Cross Blue Shield of Alabama appendix says ABA "requires prior authorization for all sessions," and Lucet’s ABA policy sets criteria for the pre-treatment assessment request',
      status: 'verified',
      cites: [S.lucetPM, S.lucetABA],
    },
    treatmentPA: {
      value: 'Required, through Lucet WebPass. The authorization must be in the name of the BCBA who performs or oversees the services; send continuation requests at least two weeks before expiry (reviews can take up to 15 days); plans are reviewed twice a year',
      status: 'verified',
      cites: [S.lucetPM, S.lucetABA],
    },
    dxRequired: {
      value: 'Yes: ASD on current DSM criteria from a licensed clinician qualified to diagnose, with a clinical note detailed enough to match the core symptoms. Screening results are not a diagnosis; a full evaluation with an ASD-specific standardized assessment is required',
      status: 'verified',
      cites: [S.lucetABA],
    },
    payer: 'Blue Cross and Blue Shield of Alabama',
    state: 'AL', kind: 'commercial',
    pill: 'Payer Guide · Blue Cross and Blue Shield of Alabama',
    h1: 'Blue Cross and Blue Shield of Alabama ABA coverage: the intake guide.',
    metaTitle: 'Blue Cross Blue Shield of Alabama ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Blue Cross and Blue Shield of Alabama covers ABA: Lucet manages the benefit under medical policy 20.5.005, prior authorization for every session, testing and baseline-data rules, telehealth on POS 02/10, a physical Alabama location requirement, the Riley Ward Act mandate, and what intake should verify.',
    intro: [
      'Blue Cross and Blue Shield of Alabama does not review ABA itself. Its medical policy page for "Autism Spectrum Disorder Applied Behavioral Analysis (ABA) Therapy" says the ABA policy "is managed by Lucet," an independent behavioral health company, and sends providers to Lucet’s Alabama page. Lucet’s 2026 policy 20.5.005 sets the clinical criteria. Its July 2026 provider manual has a Blue Cross Blue Shield of Alabama appendix with the operating rules: prior authorization for every ABA session, the phone numbers, appeal deadlines, the 180-day claim limit and the requirement to have a physical Alabama location.',
      'On top of that sit Alabama’s Riley Ward Act, which binds BCBSAL’s fully insured large-group plans (and, since 2018, the State Employees Insurance Board and PEEHIP plans), and the Alabama behavior-analyst license.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, where the member’s contract includes it (“some plans do not have a benefit for ABA services”)' },
      { label: 'Who reviews', value: 'Lucet (WebPass), policy 20.5.005; precertification 855-339-9811; benefits 855-339-8558' },
      { label: 'State mandate', value: 'Riley Ward Act, Ala. Code § 27-54A-2 (Act 2012-298, amended 2017)' },
      { label: 'Mandate age', value: '18 and under' },
      { label: 'Mandate caps', value: 'ABA: $40,000/yr ages 0–9, $30,000/yr ages 10–13, $20,000/yr ages 14–18; can be exceeded with insurer prior approval when medically necessary; no visit limits' },
      { label: 'Exempt from mandate', value: 'Employers under 51 employees; non-grandfathered ACA individual/small-group plans; self-funded ERISA plans' },
      { label: 'Licensure', value: 'Required: Alabama license (Ala. Code § 34-5A); RBTs exempt when working under a licensed behavior analyst' },
      { label: 'Fee schedule', value: 'Not public: BCBSAL contracted rates; out-of-state Blue members are paid at the local Blue plan’s rate through BlueCard' },
    ],
    sections: [
      {
        h2: 'Who decides: Lucet and policy 20.5.005',
        body: [
          'BCBSAL’s policy page says the ABA policy "is managed by Lucet" and points to Lucet’s Blue Cross and Blue Shield of Alabama provider page. Lucet’s Medical Policy 20.5.005, "Applied Behavior Analysis for the Treatment of Autism Spectrum Disorder," applies January 1 to December 31, 2026. It covers ABA only where "benefits are available in the member’s contract/certificate" and medical-necessity criteria are met, and reviews treatment plans "twice annually (review frequency dependent upon the controlling state law)." It describes comprehensive ABA (mainly ages 3–8, starting in a structured 1:1 setting) at 25 to 40 hours of direct service a week and focused ABA at typically 10 to 25 hours. To authorize a pre-treatment assessment, Lucet needs a DSM diagnosis from a licensed, qualified clinician, a clinical note detailed enough to show the core symptoms, a complete evaluation with an ASD-specific standardized assessment, and differential diagnoses ruled out. Initial treatment adds autism-specific, adaptive and cognitive testing and baseline data. Continued treatment needs documented benefit and updated goals and plan. The policy’s only state addendum is Maryland.',
          'Lucet’s Alabama appendix (July 2026 manual) says: "Prior authorization is required for ABA therapy," and ABA "requires prior authorization for all sessions." Most other outpatient behavioral health is reviewed after the fact. Requests and amendments go through WebPass, in the name of the BCBA who will perform the service (97151, 97155–97158) or oversee the technician (97152–97154). Send them "at least two weeks prior to authorization expiration" because reviews "may take up to 15 days." Precertification is 855-339-9811, benefits and eligibility 855-339-8558, Lucet Provider Relations 888-611-6285, and the autism care management line 877-563-9347. Some BCBSAL products also need a PCP referral.',
        ],
        cites: [S.bcbsalABA, S.lucetAL, S.lucetABA, S.lucetPM],
      },
      {
        h2: 'The Alabama mandate: the Riley Ward Act',
        body: [AL_MANDATE_BODY],
        cites: [S.rileyWard],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [
          AL_LICENSURE_BODY,
          'BCBSAL adds a network rule on top of the license. Lucet’s Alabama appendix says "All Alabama providers MUST have a physical location in Alabama. Telehealth only providers must also have a physical address in AL for each TIN." Agencies outside Alabama that treat a BCBSAL member through their own local Blue plan are handled through BlueCard. Lucet’s FAQ says BlueCard providers are "paid at the in-network rate of the Blue Cross plan where the service is being rendered." Its manual says out-of-state ABA providers billing codes other than BCBSAL’s approved list are paid only for equivalent ABA Coding Coalition codes, to be agreed during clinical review.',
        ],
        cites: [S.lic, S.lic580, S.dmhCouncil, S.bacbLic, S.rileyWard, S.fee, S.lucetPM, S.lucetFAQ],
      },
      {
        h2: 'Claims, appeals and prompt pay',
        body: [
          'Lucet’s Alabama appendix sets "the timely filing of claims" at 180 days. Blue Choice and EPS claims go to BCBSAL (claims inquiries 205-220-6899 or Ask-EDI@bcbsal.org), and providers must submit at least one claim every 12 months to stay active. For a medical-necessity denial, the standard appeal is due within two years and Lucet decides within 30 calendar days (WebPass, 800-248-2342, fax 816-237-2382, or Lucet Health, Attn: Appeals, PO Box 6729, Leawood, KS 66206-0729). Expedited appeals are by phone and decided within 72 hours. These Lucet appeal rules exclude Medicare and FEP plans, which go to BCBSAL at 800-248-2342.',
          AL_CLAIMS_BODY,
        ],
        cites: [S.lucetPM, S.promptPay, S.aiUR],
      },
    ],
    collect: [
      { title: 'Plan, product and funding', desc: 'Whether the contract includes ABA at all, fully insured large group (Riley Ward) vs. small group/individual or self-funded, and whether the product needs a PCP referral.' },
      { title: 'Member ID + card photo', desc: 'For benefits through providers.bcbsal.org or Lucet WebPass (855-339-8558).' },
      { title: 'Diagnostic evaluation', desc: 'A full evaluation with one of ADOS-2, ADI-R or a DSM-5 checklist and a clinical note; screening results alone do not count.' },
      { title: 'Adaptive and cognitive testing', desc: 'An adaptive measure (Vineland, ABAS, BASC or PDDBI) and a cognitive measure, timed to Lucet’s baseline-data window.' },
      { title: 'Signed treatment plan', desc: 'Riley Ward plans require treatment prescribed by a licensed physician or psychologist under a signed treatment plan.' },
    ],
    sources: [S.bcbsalABA, S.lucetAL, S.lucetABA, S.lucetPM, S.lucetFAQ, S.rileyWard, S.lic, S.lic580, S.dmhCouncil, S.bacbLic, S.promptPay, S.aiUR, S.urAgents, S.erisa, S.cfr147, S.cfr433, S.ch05, S.tricare, S.champva, S.fee],
    deliveryRules: {
      supervision: {
        value: 'Lucet’s manual says line therapists are RBTs or BCaBAs and makes the supervising BCBA responsible for their compliance (including written notice to report any arrest within 72 hours). Policy 20.5.005 says that "in the absence of state law," line therapy is provided by an RBT, BCaBA, BCBA or BCBA-D, consistent with the BACB ethics code. Neither document sets a numeric supervision ratio. In Alabama the technician works under a licensed behavior analyst or licensed assistant behavior analyst.',
        status: 'verified',
        cites: [S.lucetPM, S.lucetABA, S.lic],
      },
      concurrentBilling: {
        value: 'Not addressed in Lucet’s ABA policy or its Alabama appendix.',
        status: 'unverified',
        cites: [S.lucetABA, S.lucetPM],
        verifyVia: 'Lucet autism care management, 877-563-9347, or autismadmin@lucethealth.com; or your BCBSAL participation agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day cap is published. Policy 20.5.005 describes comprehensive treatment as 25 to 40 hours of direct service a week and focused treatment as typically 10 to 25. On a Riley Ward plan the annual ABA dollar caps by age band apply unless the insurer approves more.',
        status: 'verified',
        cites: [S.lucetABA, S.rileyWard],
      },
      noteSignature: {
        value: 'Lucet lists what the ABA record must contain (assessments, treatment plan, participants, procedures and setting) but its ABA policy and Alabama appendix do not say who signs session notes or by when.',
        status: 'unverified',
        cites: [S.lucetPM, S.lucetABA],
        verifyVia: 'Lucet Provider Relations, 888-611-6285 or Providersupport@Lucethealth.com, and the BCBSAL participation agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Treatment is to be "provided in the setting and intensity that is appropriate for the member’s clinical needs, determined by where target behaviors are occurring." Comprehensive ABA should start in a structured 1:1 setting and move to the least restrictive one. Telehealth claims use POS 02 or 10. Providers must have a physical location in Alabama.',
        status: 'verified',
        cites: [S.lucetABA, S.lucetPM],
      },
      billAsProvider: {
        value: 'The authorization "must be in the name of the BCBA who will be performing the services (e.g., 97151, 97155, 97156, 97157, 97158) or overseeing the technicians performing the services (e.g., 97152, 97153, 97154)." Alabama requires that BCBA to hold an Alabama license.',
        status: 'verified',
        cites: [S.lucetPM, S.lic],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Policy 20.5.005 sets no age cap; it aims comprehensive treatment mainly at ages 3 to 8.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.lucetABA, S.rileyWard],
        verifyVia: 'BCBSAL benefits (providers.bcbsal.org) or Lucet, 855-339-8558: confirm the contract has an ABA benefit and any age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Policy 20.5.005 (2026) says baseline data must be "completed no longer than five (5) years prior to or scheduled within ninety (90) days of the pre-treatment assessment," with the adaptive assessment "completed within 6 months of start date of treatment." Lucet’s July 2026 manual says one adaptive and one cognitive assessment are "required within 90 days of pre-treatment assessment." The two documents do not match; aim for the stricter 90-day window.',
        status: 'verified',
        cites: [S.lucetABA, S.lucetPM],
      },
      diagnosingProviders: {
        value: '"A clinician who is licensed and qualified to make such a diagnosis. Such clinicians are usually neurologists, developmental pediatricians, pediatricians, psychiatrists, licensed clinical psychologists or medical doctors experienced in the diagnosis of ASD. State law may define eligible qualified clinicians."',
        status: 'verified',
        cites: [S.lucetABA],
      },
      diagnosticTools: {
        value: 'Lucet’s manual: one of the ADOS-2, the ADI-R or a DSM-5 Checklist "is required to meet the diagnostic criteria"; screeners (CARS-2, SCQ, M-CHAT-R/F, SRS-2 and others) are not enough on their own. Baseline also needs an adaptive measure (Vineland, ABAS, BASC or PDDBI) and a cognitive measure (for example Mullen, Bayley, DAS, WPPSI or WISC).',
        status: 'verified',
        cites: [S.lucetPM, S.lucetABA],
      },
      referral: {
        value: 'Lucet’s Alabama appendix says "some products require a referral from the Member’s primary care physician prior to treatment."' + MANDATE_REFERRAL_TAIL,
        status: 'plan-dependent',
        cites: [S.lucetPM, S.rileyWard],
        verifyVia: 'BCBSAL benefits check on providers.bcbsal.org: ask whether the member’s product requires a PCP referral for behavioral health.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Lucet’s Alabama appendix: telemedicine must be live audio-video, and "all available fee schedule codes are appropriate for use … if the service provided through Telemedicine can be done with the same quality as the service provided in the office setting." Bill modifier 95 or GT with POS 02 or 10. The provider signs a telemedicine attestation, must carry malpractice coverage for telemedicine, and must have a physical Alabama address for each TIN, even if telehealth-only. The member’s benefit must allow telemedicine. Lucet’s manual separately notes that 97153, 97154, 97155 and 97158 require face-to-face service with the patient under CPT, so confirm remote ABA codes during review.',
        status: 'plan-dependent',
        cites: [S.lucetPM, S.rileyWard],
        verifyVia: 'Lucet autism care management, 877-563-9347: confirm which ABA codes it will authorize by telehealth for the member’s plan.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Lucet: "Reviews of authorization requests may take up to 15 days"; submit continuation requests at least two weeks before expiry. ' + COMMERCIAL_TURNAROUND,
        status: 'plan-dependent',
        cites: [S.lucetPM, S.urAgents, S.erisa, S.cfr147, S.aiUR],
        verifyVia: 'Lucet precertification, 855-339-9811: confirm the decision time for the member’s plan and whether it is fully insured or self-funded.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: COMMERCIAL_COB,
        status: 'plan-dependent',
        cites: [S.promptPay, S.ch05, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask BCBSAL at benefits verification for the member’s coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Blue Cross Blue Shield of Alabama cover ABA therapy?', a: 'Yes, where the member’s contract includes an ABA benefit; Lucet’s manual warns that some plans do not. Lucet manages ABA under policy 20.5.005, and fully insured large-group plans also carry the Riley Ward Act mandate for children 18 and under.' },
      { q: 'Does BCBS of Alabama require prior authorization for the ABA assessment?', a: 'Yes. Lucet’s Alabama appendix requires prior authorization for every ABA session, and the policy sets criteria for the pre-treatment assessment request. Submit through Lucet WebPass in the BCBA’s name.' },
      { q: 'Who reviews ABA for Blue Cross Blue Shield of Alabama?', a: 'Lucet. Precertification 855-339-9811, benefits 855-339-8558, autism care management 877-563-9347, Provider Relations 888-611-6285.' },
      { q: 'Can an out-of-state or telehealth-only ABA provider treat BCBSAL members?', a: 'BCBSAL’s network rule through Lucet requires a physical Alabama location for each TIN, even for telehealth-only providers, and Alabama requires an Alabama behavior-analyst license. Out-of-state Blue providers serving a BCBSAL member through BlueCard are paid at their local Blue plan’s rate.' },
      { q: 'What is the timely filing limit for BCBS of Alabama ABA claims?', a: 'Lucet’s Alabama appendix says 180 days. Standard medical-necessity appeals are due within two years of the denial, and Lucet decides them within 30 calendar days.' },
    ],
  },
};

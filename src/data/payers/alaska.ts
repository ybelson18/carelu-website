import type { PayerConfig, PayerSource } from './types.js';

/* Alaska — researched October 2026 from primary sources only.
   Alaska Statutes and the Alaska Administrative Code were read section by section through
   akleg.gov's print endpoint (statutes.asp / aac.asp ?media=print&secStart=…&secEnd=…), which
   answers plain curl. health.alaska.gov /media/ PDFs answer curl; the old /dbh/Documents/ paths
   now 404 after the site migration. commerce.alaska.gov (the behavior-analyst licensing page)
   returns a JS/captcha wall to curl and r.jina.ai alike. alaska.optum.com no longer resolves
   (the ASO site was retired 1/1/2025); Optum’s own transition notice is still on Provider Express.
   The Alaska Medicaid provider billing manuals sit behind the Health Enterprise portal and could
   not be read; every Medicaid fact below rests on 7 AAC 105–160, DOH notices and fee schedules. */

const S: Record<string, PayerSource> = {
  aac135_350: { title: '7 AAC 135.350 — Autism services (current text, incl. (k)(6) repealed 5/25/2022 and (n) same-increment billing)', url: 'https://www.akleg.gov/basis/aac.asp?media=print&secStart=7.135.350&secEnd=7.135.350' },
  aac135_010: { title: '7 AAC 135.010–135.130 — Scope, recipient eligibility (135.020(e) autism), provider enrollment, service authorization (135.040), clinical record', url: 'https://www.akleg.gov/basis/aac.asp?media=print&secStart=7.135.010&secEnd=7.135.199' },
  aac135_300: { title: '7 AAC 135.300 — Autism services; provider qualifications (licensed behavior analyst, assistant, autism behavior technician)', url: 'https://www.akleg.gov/basis/aac.asp?media=print&secStart=7.135.290&secEnd=7.135.349' },
  aac105: { title: '7 AAC 105.100–105.290 — Medicaid provider enrollment (105.200), prior authorization (105.130), provider records (105.230), other payment sources (105.250), provider appeals (105.270)', url: 'https://www.akleg.gov/basis/aac.asp?media=print&secStart=7.105.100&secEnd=7.105.290' },
  aac145: { title: '7 AAC 145.005 — Conditions for payment (12-month claim deadline; payment from other sources)', url: 'https://www.akleg.gov/basis/aac.asp?media=print&secStart=7.145.001&secEnd=7.145.060' },
  aac110tele: { title: '7 AAC 110.620–110.639 — Medicaid telehealth (scope, modalities, provider requirements, exclusions)', url: 'https://www.akleg.gov/basis/aac.asp?media=print&secStart=7.110.620&secEnd=7.110.639' },
  fee27: { title: 'Alaska DOH, Division of Behavioral Health — Medicaid Procedure Codes and Rates, Autism Services (effective July 1, 2026)', url: 'https://health.alaska.gov/media/3kyjzoiw/fy2027-autism-services-fee-schedule-2026-07-01.pdf' },
  fee26: { title: 'Alaska DOH, Division of Behavioral Health — Medicaid Procedure Codes and Rates, Autism Services (effective July 1, 2025)', url: 'https://health.alaska.gov/media/v5fhgwcf/fy26-applied-behavior-analysis-fee-schedule-v4.pdf' },
  bhAssist: { title: 'Alaska DOH — Behavioral Health Medicaid Provider Assistance (rate charts, provider service manuals; doh.dbh.mpassunit@alaska.gov)', url: 'https://health.alaska.gov/en/services/behavioral-health-medicaid-provider-support/' },
  mpas: { title: 'Alaska DOH — Medicaid Provider Assistance Section (HMS Gainwell fiscal agent: enrollment, claims, service authorizations)', url: 'https://health.alaska.gov/en/division-of-behavioral-health/medicaid-provider-assistance-section/' },
  saBulletin: { title: 'Alaska DOH, Division of Behavioral Health — Service Authorization Requirements for Select Behavioral Health Services Effective July 1, 2025 (bulletin, June 6, 2025)', url: 'https://content.govdelivery.com/accounts/AKDHSS/bulletins/3e3f1ae' },
  regNotice: { title: 'Alaska Online Public Notice — Proposed changes on Medicaid behavioral health state plan service authorization (project 2024200550, published 3/28/2025)', url: 'https://aws.state.ak.us/OnlinePublicNotices/Notices/View.aspx?id=219039' },
  psam: { title: 'Alaska DBH — Standards & Administrative Procedures for Behavioral Health Provider Services (October 9, 2023)', url: 'https://health.alaska.gov/media/1tjdgrjl/psam_bh.pdf' },
  optumExit: { title: 'Optum — Transition of Alaska Medicaid Contract (BH00573-24-ALT, Sept. 5, 2024: ASO contract ends Dec. 31, 2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/ourNetworkMain/welcomeNtwk/alaska/AlaskaMedicaidTransition2024.pdf' },
  hfin: { title: 'Alaska House Finance Committee minutes, Feb. 13, 2025 (Department of Health: Alaska Medicaid is fee-for-service)', url: 'https://www.akleg.gov/pdf/34/M/HFIN2025-02-130902.pdf' },
  as47_30_915: { title: 'AS 47.30.915 — Definitions ("mental health professional")', url: 'https://www.akleg.gov/basis/statutes.asp?media=print&secStart=47.30.915&secEnd=47.30.915' },
  as21_42_397: { title: 'AS 21.42.397 — Coverage for autism spectrum disorders', url: 'https://www.akleg.gov/basis/statutes.asp?media=print&secStart=21.42.397&secEnd=21.42.397' },
  as08_15: { title: 'AS 08.15 — Behavior Analysts (license required; temporary license; exemptions)', url: 'https://www.akleg.gov/basis/statutes.asp?media=print&secStart=08.15.010&secEnd=08.15.990' },
  as08_02_130: { title: 'AS 08.02.130 — Telehealth (licensed providers; out-of-state physician exception)', url: 'https://www.akleg.gov/basis/statutes.asp?media=print&secStart=08.02.130&secEnd=08.02.130' },
  as21_42_422: { title: 'AS 21.42.422 — Coverage for telehealth (commercial)', url: 'https://www.akleg.gov/basis/statutes.asp?media=print&secStart=21.42.420&secEnd=21.42.425' },
  as21_36_495: { title: 'AS 21.36.495 — Prompt payment of health care insurance claims', url: 'https://www.akleg.gov/basis/statutes.asp?media=print&secStart=21.36.495&secEnd=21.36.495' },
  as21_07: { title: 'AS 21.07 — Patient and provider protection; required contract provisions (AS 21.07.020: no retroactive denial of preauthorization)', url: 'https://www.akleg.gov/basis/statutes.asp?media=print&secStart=21.07.001&secEnd=21.07.250' },
  aac3_28: { title: '3 AAC 28.900–28.989 — Utilization review, grievances and external review (3 AAC 28.910 standard, 28.912 expedited, 28.936 180-day grievance)', url: 'https://www.akleg.gov/basis/aac.asp?media=print&secStart=3.28.900&secEnd=3.28.999' },
  sb133: { title: 'SB 133 (2025), enrolled — prior authorization deadlines, AS 21.07.100–21.07.180 (plans issued or renewed on or after Jan. 1, 2027)', url: 'https://www.akleg.gov/PDF/34/Bills/SB0133Z.PDF' },
  as21_42_205: { title: 'AS 21.42.205 — Coordination of benefits provision required', url: 'https://www.akleg.gov/basis/statutes.asp?media=print&secStart=21.42.205&secEnd=21.42.205' },
  aac3_26_110: { title: '3 AAC 26.110(c) — Secondary insurer must accept the primary insurer’s precertification', url: 'https://www.akleg.gov/basis/aac.asp?media=print&secStart=3.26.010&secEnd=3.26.999' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Alaska, 2014: Division of Corporations, Business and Professional Licensing)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  cfr447: { title: '42 CFR 447.45(d) — Medicaid timely claims processing (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-447/subpart-A/section-447.45' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  aetnaCPB: { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; state exhibit: Maryland only)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (Network Participation Criteria, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  aetnaTele: { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026; incl. Alaska Regulatory Addendum)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumNNM: { title: 'Optum National Network Manual (BH02330, effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  premPolicy: { title: 'Premera Medical Policy 3.01.510 — Applied Behavior Analysis (ABA) (effective May 1, 2026)', url: 'https://www.premera.com/medicalpolicies/3.01.510.pdf' },
  premCodesInd: { title: 'Premera Blue Cross Blue Shield of Alaska — Code List, Individual Plans (050238, 10-01-2026)', url: 'https://www.premera.com/documents/050238.pdf' },
  premCodesGrp: { title: 'Premera Blue Cross Blue Shield of Alaska — Clinical Review by Code List, Non-Individual Plans (028861, 10-01-2026)', url: 'https://www.premera.com/documents/028861.pdf' },
  premPA: { title: 'Premera Blue Cross Blue Shield of Alaska — Submitting prior authorization (Availity; no phone requests)', url: 'https://www.premera.com/ak/provider/utilization-review/about-prior-authorization/' },
  premCodeCheck: { title: 'Premera Alaska — Code Check Tool for commercial plan members', url: 'https://www.premera.com/ak/provider/code-check/' },
  premClaims: { title: 'Premera Alaska Medical Reference Manual — Claims submission and payments (timely filing, COB, provider appeals)', url: 'https://www.premera.com/ak/provider/reference/medical-manuals/claim-submission-payments/' },
  premCred: { title: 'Premera Alaska Medical Reference Manual — Credentialing and contracting', url: 'https://www.premera.com/ak/provider/reference/medical-manuals/credentialing-contracting/' },
  premFEP: { title: 'Premera — Prior Authorization Review Request FEP for Applied Behavior Analysis, FEP-Alaska (055178, 06-01-2026)', url: 'https://www.premera.com/documents/055178.pdf' },
};

/* ---- Shared Alaska commercial layer (same facts on every commercial guide) ---- */
const AK_MANDATE_BODY =
  'Alaska’s autism mandate is AS 21.42.397. Every health care insurer that offers, issues, delivers or renews a health care insurance plan in the state (fraternal benefit societies excepted) "shall provide coverage for the costs of the diagnosis and treatment of autism spectrum disorders." The statute names ABA expressly: "habilitative or rehabilitative care" includes "applied behavior analysis or other structured behavioral therapies." Three conditions shape a claim. Treatment must be "prescribed by a licensed physician, psychologist, or advanced practice registered nurse, provided by or supervised by an autism service provider, and as identified in a treatment plan developed following a comprehensive evaluation." An "autism service provider" is someone "licensed, certified, or registered by the applicable state licensing board or by a nationally recognized certifying organization." And coverage "is required to be provided only to individuals under 21 years of age." The statute caps nothing by dollars and says coverage "may not limit the number of visits to an autism service provider for treatment," though ordinary copayments, deductibles, coinsurance and general exclusions apply. It also says coverage "must cover medically necessary treatment that is coordinated with an education program, but may not be contingent on" that coordination. Two employer-size carve-outs matter: an insurer covering a small employer with 20 or fewer employees "is not required to provide" the mandated coverage, and for a small employer with 21 to 25 employees the director may waive it if actual claims experience shows the mandate raised premiums by three percent or more over 12 months. The mandate reaches fully insured plans; self-funded employer plans answer to ERISA and federal parity instead.';

const AK_LICENSURE_BODY =
  'Alaska licenses behavior analysts. AS 08.15.010 says "A person may not practice behavior analysis in this state without a license," and practicing without one is a misdemeanor. The licensing agency is the Department of Commerce, Community, and Economic Development (the BACB’s table lists the Division of Corporations, Business and Professional Licensing, licensure since 2014); there is no separate board. A behavior analyst license requires passing the BCBA examination, current BACB certification and a fingerprint-based criminal history check; an assistant behavior analyst license requires BCaBA certification plus proof of direct supervision by a licensed behavior analyst. Technicians are not licensed: the chapter does not apply to "an individual who directly implements applied behavior analysis services, or family member implementing a behavior analysis plan within the home, who acts under the direction of a licensed behavior analyst or licensed assistant behavior analyst." For out-of-state clinicians, the only short route in statute is a temporary license "for 30 days or less in a calendar year" for someone licensed in a state whose requirements are "substantially equivalent." Telehealth does not remove the license requirement: AS 08.02.130 lets "a health care provider licensed in this state," a category that names behavior analysts licensed under AS 08.15, treat a patient in Alaska by telehealth without a prior in-person visit, and its out-of-state exception covers only physicians and members of an out-of-state physician’s multidisciplinary team for life-threatening conditions. The commercial telehealth statute, AS 21.42.422, likewise requires coverage of telehealth "by a health care provider licensed in this state." Commercial ABA rates are negotiated and unpublished; the public benchmark is the Alaska Medicaid autism-services rate chart, which from July 1, 2026 pays 97153 at $31.95 and 97151/97155/97156 at $41.97 per 15 minutes.';

const AK_PROMPT_PAY =
  ' On payment, AS 21.36.495 requires a health care insurer to pay or deny a clean claim "within 30 calendar days after the insurer or a third-party administrator under contract with the insurer receives a clean claim," to send any denial or request for information within the same 30 days, and then to pay within 15 calendar days of receiving the requested information; a late claim is presumed clean and accrues 15 percent annual interest. AS 21.07.020 bars an insurer from retroactively denying a preauthorization based on medical necessity unless it rested on "materially incomplete or inaccurate information provided by or on behalf of the provider." Self-funded ERISA plans sit outside both statutes.';

const MANDATE_REFERRAL_TAIL =
  ' For a fully insured Alaska plan, AS 21.42.397(a) requires the covered treatment to be "prescribed by a licensed physician, psychologist, or advanced practice registered nurse" and identified in a treatment plan developed after a comprehensive evaluation, so keep that prescription and the evaluation in the file. Self-funded ERISA plans sit outside the statute.';

const MANDATE_AGE_TAIL =
  ' For fully insured Alaska plans, AS 21.42.397(b)(1) requires the autism coverage "only to individuals under 21 years of age," with no visit limits and no dollar cap; small-group plans of 20 or fewer employees are exempt. Self-funded ERISA plans are outside the statute, so plan funding type decides whether that binds.';

const AK_AUTH_TURNAROUND = (carrier: string) =>
  'Depends on how the plan is funded. Fully insured Alaska plans follow 3 AAC 28.910: for a prospective (pre-service) request the insurer must decide and notify "not later than five working days after the date the health care insurer receives the request," with one extension of up to five working days for matters beyond its control; the clock starts when the request is filed under the insurer’s procedures, "without regard to whether all of the information necessary to make the determination accompanies the filing." Urgent requests are decided within 24 hours (3 AAC 28.912). A reduction or termination of an already-certified course of treatment is an adverse determination that must be noticed in time for the member to appeal first. SB 133 (2025) tightens this for plans issued or renewed on or after January 1, 2027: 72 hours for a complete standard request (72 hours excluding weekends if faxed), 24 hours for an expedited one, and a request with no timely written decision or request for information "is considered approved." Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours. ' + carrier + ' publishes no Alaska-specific ABA turnaround or reauthorization lead time.';

const AK_AUTH_VERIFY = (carrier: string) =>
  'At benefits verification ask whether the plan is fully insured (Alaska-regulated) or self-funded (ERISA), the plan’s issue or renewal date (SB 133’s 72-hour clock starts with plans issued or renewed on or after 1/1/2027), and what reauthorization lead time ' + carrier + ' expects.';

const AK_COB = (carrier: string) =>
  'Alaska requires every major medical policy to carry a coordination-of-benefits provision (AS 21.42.205), and when a child has two plans the secondary insurer, "absent evidence of fraud, … must accept the primary insurer’s precertification, utilization review, or other managed care requirement determination and may not deny, delay, or reduce benefits" for a member who met the primary’s requirements (3 AAC 26.110(c)). Neither text sets the order of benefits between two parents’ plans, so get the order from the carrier. If the child also has Alaska Medicaid, ' + carrier + ' pays first: Medicaid is payer of last resort (42 CFR 433.139), and an Alaska Medicaid provider must report any other payment and enter it "as a credit against the charge to the department" (7 AAC 145.005(i)). TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).';

const AK_COB_VERIFY = (carrier: string) =>
  'Ask ' + carrier + ' at benefits verification for the member’s coordination-of-benefits order (and whether the plan uses the birthday rule for two parents’ plans), and record every other coverage the child has.';

const AK_TELE_TAIL =
  ' For a fully insured Alaska plan, AS 21.42.422 requires coverage "for benefits provided through telehealth by a health care provider licensed in this state" and bars requiring "prior in-person contact" before payment; the statute does not list which services or codes. Self-funded employer plans are outside it. The clinician must hold an Alaska behavior-analyst license (AS 08.15.010; AS 08.02.130).';

export const alaskaPayers: Record<string, PayerConfig> = {
  'alaska-medicaid': {
    slug: 'alaska-medicaid',
    cardDesc: 'Fee-for-service only (no MCOs, ASO ended 2024); autism services under 21 per 7 AAC 135.350, no prior auth since 7/1/2025, FY2027 rates up sharply.',
    assessmentPA: {
      value: 'No. Since July 1, 2025 the department has removed prior-authorization requirements for autism services; 7 AAC 135.040(c)(19) lists "autism services provided in accordance with 7 AAC 135.350" among services that need no prior authorization, and the 97151 assessment is covered "for a new or returning patient" when a licensed behavior analyst or assistant conducts it',
      status: 'verified',
      cites: [S.regNotice, S.aac135_010, S.aac135_350, S.saBulletin],
    },
    treatmentPA: {
      value: 'No, since July 1, 2025: regulation project 2024200550 set out to "remove certain prior authorization requirements for payment for autism services" and to "remove prior authorization requirements for related additional recipient services," adopted effective July 1, 2025. One stale line remains: 7 AAC 135.350(m) still tells providers to request "additional authorized periods" 14 days before a period ends, citing a repealed subsection',
      status: 'verified',
      cites: [S.regNotice, S.aac135_010, S.aac135_350, S.saBulletin],
    },
    dxRequired: {
      value: 'Yes. The recipient must "have a qualifying diagnosis of autism spectrum disorder, as determined by either a mental health professional as defined in AS 47.30.915 or a health care professional who is qualified" to diagnose ASD in children (7 AAC 135.020(e)(2)), and the clinical record must hold verification of that diagnosis',
      status: 'verified',
      cites: [S.aac135_010, S.aac135_350, S.as47_30_915],
    },
    payer: 'Alaska Medicaid',
    state: 'AK', kind: 'state-medicaid',
    pill: 'Payer Guide · Alaska Medicaid',
    h1: 'Alaska Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Alaska Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Alaska Medicaid covers ABA: autism services for recipients under 21 under 7 AAC 135.350, paid fee-for-service with no managed care plans, no prior authorization since July 2025, published FY2027 rates, and an Alaska behavior-analyst license for every rendering BCBA.',
    intro: [
      'Alaska Medicaid pays for applied behavior analysis as "autism services" under 7 AAC 135.350, for recipients under 21 with an autism spectrum disorder diagnosis. Alaska is unusual in two ways that change the whole intake workflow. There are no Medicaid managed care plans: Alaska pays providers directly, fee-for-service. And since July 1, 2025 the state has removed the prior-authorization requirement for autism services, so a new case starts with an assessment and a treatment plan rather than a service-authorization packet.',
      'For an agency entering the Alaska Medicaid market, the gates are enrollment, not authorization. Each behavior analyst enrolls as an independent provider, and each licensed assistant behavior analyst and autism behavior technician enrolls separately as a rendering provider, with a criminal history check. Every rendering BCBA in the state needs an Alaska behavior-analyst license. The rates are published and rose sharply on July 1, 2026 (97153 now $31.95 per 15 minutes).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes: autism services for recipients under 21 with an ASD diagnosis (7 AAC 135.020(e), 135.350)' },
      { label: 'Structure', value: 'Fee-for-service only: no MCOs; HMS Gainwell is fiscal agent; the Optum ASO ended Dec. 31, 2024' },
      { label: 'Prior auth', value: 'None for autism services since July 1, 2025' },
      { label: 'Rates (per 15 min, from 7/1/2026)', value: '97151/97155/97156 $41.97 · 97153 $31.95 · 97154 $11.47 · 97157/97158 $15.19' },
      { label: 'Who may deliver', value: 'Licensed behavior analyst; licensed assistant behavior analyst or autism behavior technician (RBT/BCAT or similar) under supervision, each separately enrolled' },
      { label: 'Licensure', value: 'Alaska license required (AS 08.15); BACB certification is a prerequisite' },
      { label: 'Timely filing', value: '12 months from date of service (7 AAC 145.005(c))' },
    ],
    sections: [
      {
        h2: 'Who is covered, and why there is no health plan to call',
        body: [
          'The eligibility rule is 7 AAC 135.020(e). To be eligible for autism services a recipient must "be under 21 years of age," have "a qualifying diagnosis of autism spectrum disorder, as determined by either a mental health professional as defined in AS 47.30.915 or a health care professional who is qualified based on that individual’s scope of practice, training, education, and experience to assess and diagnose autism spectrum disorders in children," and have documentation from a licensed behavior analyst, built on the 7 AAC 135.350 assessment, showing functional impairments, delays or repetitive behaviors that keep the child from adequately participating in home, school or community activities (or that endanger the child or others), and that the services "are expected to result in measurable improvement." AS 47.30.915 lists the mental health professionals: licensed physicians and psychiatrists, clinical psychologists and psychological associates, APRNs and psychiatric RNs with a master’s degree, licensed marital and family therapists, professional counselors and clinical social workers, and supervised master’s-level clinicians.',
          'Alaska Medicaid has no managed care organizations. The Department of Health told the House Finance Committee in February 2025 that "Alaska operated under a fee-for-service model," in which the department "paid providers directly upon submission of claims," unlike states that contract with insurance companies. Behavioral health once ran through an administrative services organization, Optum Alaska, but Optum’s own notice says that contract "ends on Dec. 31, 2024," and the department now uses HMS Gainwell as fiscal agent for "provider enrollment, provider inquiry, claims processing, service authorizations, appeals." So there is no MCO or ASO guide for Alaska: the card is Alaska Medicaid, and the rules below are the state’s. Agency providers (community behavioral health services providers) also need Department of Health approval for autism services under 7 AAC 135.350.',
        ],
        cites: [S.aac135_010, S.as47_30_915, S.hfin, S.optumExit, S.mpas, S.psam],
      },
      {
        h2: 'No prior authorization since July 1, 2025',
        body: [
          'With CMS approval, Alaska had suspended service-authorization requirements for state plan behavioral health services through June 30, 2025, then made the change permanent in regulation. The regulation notice for project 2024200550 proposed to "remove certain prior authorization requirements for payment for autism services" in 7 AAC 135.300 and, in 7 AAC 135.350, to "update coverage for an initial behavior identification assessment for a new or returning recipient, remove the timing limitation for reassessments, and remove prior authorization requirements for related additional recipient services." The Division of Behavioral Health announced on June 6, 2025 that the 7 AAC 135 changes "were approved for adoption with an effective date of July 1, 2025," and its list of behavioral health services still needing a service authorization (submitted to HMS Gainwell) contains only 1115 residential and crisis services, not autism services. The current 7 AAC 135.040(c)(19) lists "autism services provided in accordance with 7 AAC 135.350" among services provided without prior authorization.',
          'Two loose ends in the text are worth knowing. 7 AAC 135.040(c) is worded for "a community behavioral health services provider," while independent behavior analysts and behavior analyst group practices enroll under 7 AAC 135.030(a)(4)–(5); the provisions that used to impose authorization on those two provider types (7 AAC 135.300(a)(2)(B) and (a)(3)(D)) were repealed effective July 1, 2025. And 7 AAC 135.350(m) still says to "submit a request for additional authorized periods of autism services 14 days before the end of the previously authorized period," with a reassessment and an updated plan "under (g) and (h)," although (g) was repealed the same day. Read together with the department’s notice, no autism-services authorization is required; if a claim denies for a missing authorization, raise it with the Medicaid Provider Assistance Unit.',
        ],
        cites: [S.regNotice, S.saBulletin, S.aac135_010, S.aac135_300, S.aac135_350],
      },
      {
        h2: 'The rates: FY2027 autism services rate chart',
        body: [
          'The Division of Behavioral Health publishes the only autism rate chart. From July 1, 2026, per 15-minute unit: 97151 behavior identification assessment $41.97; 97153 adaptive behavior treatment by protocol (technician) $31.95; 97154 group treatment by protocol $11.47; 97155 protocol modification $41.97; 97156 family treatment guidance $41.97; 97157 multiple-family group guidance $15.19; 97158 group treatment with protocol modification $15.19. The FY2026 chart (effective July 1, 2025) paid much less: 97151 and 97155 $29.78, 97153 $22.63, 97154 $9.04, 97156 $18.69, 97157 $7.47, 97158 $11.91. 97152, 0362T and 0373T do not appear on either chart. The chart is adopted by reference in 7 AAC 160.900(d)(73), with the methodology in 7 AAC 145.580, and warns that it does not fully address "payment limits, coverage limitations, mutually exclusive restrictions, or service authorization requirements."',
        ],
        cites: [S.fee27, S.fee26, S.bhAssist],
      },
      {
        h2: 'Staffing, licensure and enrollment',
        body: [
          'Autism services "may only be provided by" three provider types (7 AAC 135.300(c)): a behavior analyst enrolled as an independent provider who holds an active license "under AS 08.15.020(a), if the behavior analyst provides services in this state" (or from the jurisdiction where services are provided, if outside Alaska) and current BACB certification; a licensed assistant behavior analyst enrolled as a rendering provider; and an autism behavior technician enrolled as a rendering provider who is "currently registered by the Behavior Analyst Certification Board, currently certified by the Behavior Intervention Certification Council, or currently registered or certified by a similar organization approved by the department." Agencies can be a community behavioral health services provider employing at least one licensed behavior analyst, or a behavior analyst group practice; either must make sure each person rendering autism services is supervised and "separately enrolled." Everyone must pass the state criminal history check (7 AAC 10.900–10.990); the department "will not pay for services" by staff for whom one was not requested or who fail it.',
          'Supervision is credential-based, not ratio-based. A behavior analyst who supervises an assistant or a technician, and an assistant who supervises a technician, "must first complete the supervisory training required by the Behavior Analyst Certification Board." An assistant behavior analyst must be supervised by a licensed behavior analyst, and a technician by a licensed behavior analyst or licensed assistant; a technician "may not design intervention or assessment plans."',
        ],
        cites: [S.aac135_300, S.aac105, S.as08_15, S.bacbLic],
      },
      {
        h2: 'Claims operations: filing limit, units, payment and appeals',
        body: [
          'Claims go to the department’s contractor "no more than 12 months after the date of service" (7 AAC 145.005(c)), with a narrow extension for retroactive eligibility decisions. Federal rules require the state to pay 90 percent of clean practitioner claims within 30 days of receipt and 99 percent within 90 days (42 CFR 447.45(d)). Time-based codes follow 7 AAC 105.230(d)(5): bill a 15-minute unit only when direct time exceeds half the unit (8–22 minutes is one unit, 23–37 two, and so on), aggregated per date of service, with actual start and stop times; pre-populated notes or time sheets are not allowed, and records must be made within 14 days of the service and kept seven years. A denied or reduced claim can be appealed (first level) within 180 days of the remittance advice date (7 AAC 105.270(a)); a recoupment notice within 60 days. Questions on behavioral health billing go to the Medicaid Provider Assistance Unit (doh.dbh.mpassunit@alaska.gov) or HMS Gainwell’s behavioral health line, 855-293-3568. We found no source applying electronic visit verification to autism services.',
        ],
        cites: [S.aac145, S.cfr447, S.aac105, S.saBulletin, S.bhAssist],
      },
    ],
    collect: [
      { title: 'Alaska Medicaid ID and age', desc: 'Autism services cover recipients under 21. There is no health plan to identify: Alaska Medicaid is fee-for-service.' },
      { title: 'Diagnosis verification', desc: 'ASD diagnosed by a mental health professional (AS 47.30.915) or another professional qualified to diagnose ASD in children; the clinical record must verify it.' },
      { title: 'Referral', desc: 'The initial assessment must draw on a referral from a mental health professional or a qualified health care professional (7 AAC 135.350(b)(1)(A)).' },
      { title: 'Other services list', desc: 'The assessment report must list every current service: waiver plans of care, behavioral health plans, IEPs, IFSPs, private insurance and privately funded services.' },
      { title: 'Other insurance', desc: 'Medicaid pays last; bill the commercial plan first and credit its payment against the Medicaid claim.' },
    ],
    sources: [S.aac135_010, S.aac135_350, S.aac135_300, S.aac105, S.aac145, S.aac110tele, S.fee27, S.fee26, S.bhAssist, S.mpas, S.saBulletin, S.regNotice, S.psam, S.optumExit, S.hfin, S.as47_30_915, S.as08_15, S.as08_02_130, S.bacbLic, S.cfr433, S.cfr447],
    deliveryRules: {
      supervision: {
        value: 'No numeric ratio. A behavior analyst supervising an assistant or autism behavior technician, and an assistant supervising a technician, must first complete the BACB’s supervisory training; an assistant behavior analyst must be supervised by a licensed behavior analyst, and a technician by a licensed behavior analyst or licensed assistant; technicians "may not design intervention or assessment plans" (7 AAC 135.300(d), (g)–(i)). Agency and group providers must ensure every individual rendering autism services is supervised and separately enrolled.',
        status: 'verified',
        cites: [S.aac135_300],
      },
      concurrentBilling: {
        value: 'Allowed for 97153 with 97155. The old ban on concurrent autism billing, 7 AAC 135.350(k)(6), was repealed 5/25/2022, and 7 AAC 135.350(n) now says the department "will pay for the following autism services provided during the same 15-minute time increment": adaptive behavior treatment by protocol and adaptive behavior treatment by protocol modification. Not payable: a behavioral health rehabilitation service provided concurrently with an autism service ((k)(7)), or a clinician acting as "a different kind of paid treatment provider or caregiver at the same time" ((k)(8)). Behavioral health clinic services and required medical services may be billed the same day ((l)).',
        status: 'verified',
        cites: [S.aac135_350],
      },
      dailyLimits: {
        value: 'No unit or hour cap appears in 7 AAC 135.350 or on the FY2027 rate chart, and the reassessment timing limit was removed July 1, 2025. The rate chart warns that payment limits and mutually exclusive edits are "not fully addressed in this chart," so claims-system unit edits may still apply.',
        status: 'unverified',
        cites: [S.aac135_350, S.fee27, S.regNotice],
        verifyVia: 'Alaska Medicaid Provider Assistance Unit (doh.dbh.mpassunit@alaska.gov) or HMS Gainwell behavioral health provider line, 855-293-3568: ask whether any daily unit edits apply to 97151–97158; or the Alaska Medicaid behavioral health billing manual on the Health Enterprise portal.',
        blocker: 'document',
      },
      noteSignature: {
        value: 'Case notes "must be dated and either signed or initialed by the individual who provided each service" (an AS 09.80-compliant electronic signature counts), must carry actual start and stop times for time-based codes, and must be made contemporaneously, meaning "not later than 14 days after the service ends"; services without contemporaneous records may not be billed (7 AAC 105.230(d)). The autism clinical record must also hold the diagnosis verification, the initial assessment and any reassessment (7 AAC 135.350(i)).',
        status: 'verified',
        cites: [S.aac105, S.aac135_350],
      },
      placeOfService: {
        value: 'Autism services may be provided in "the recipient’s home, school, and community," a behavior analyst’s office, an outpatient clinic, or another appropriate community setting (7 AAC 135.350(j)). Not payable: services in an outpatient or acute hospital, inpatient psychiatric hospital, residential psychiatric treatment center, ICF, SNF or ICF/IID, except discharge-planning services the department prior-authorizes; time spent on school work "for the sole purpose of education," or on leisure or play "solely for the purpose of entertainment" ((k)(9)).',
        status: 'verified',
        cites: [S.aac135_350],
      },
      billAsProvider: {
        value: 'A licensed behavior analyst enrolls as an independent provider and bills directly; licensed assistant behavior analysts and autism behavior technicians "must enroll with the department as a rendering provider, but payment for those services will be made through the rendering provider’s supervising health care provider" (7 AAC 105.200(b)(11)–(12)). Agency and group-practice staff must each be separately enrolled (7 AAC 135.300(a)).',
        status: 'verified',
        cites: [S.aac105, S.aac135_300],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. A recipient must "be under 21 years of age" to be eligible for autism services (7 AAC 135.020(e)(1)). A narrow grandfather clause in 135.020(f) keeps eligible certain waiver recipients who were receiving ABA through intensive active treatment on June 30, 2018.',
        status: 'verified',
        cites: [S.aac135_010],
      },
      dxRecency: {
        value: 'No diagnosis recency rule appears in 7 AAC 135.020 or 135.350; the assessment report itself must be current, and reassessments must measure progress and set an updated timeline.',
        status: 'unverified',
        cites: [S.aac135_010, S.aac135_350],
        verifyVia: 'Alaska Medicaid Provider Assistance Unit (doh.dbh.mpassunit@alaska.gov), or the Alaska Medicaid behavioral health billing manual on the Health Enterprise portal.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'A mental health professional as defined in AS 47.30.915 (licensed physician or psychiatrist, clinical psychologist, psychological associate, APRN or master’s-level psychiatric RN, licensed marital and family therapist, professional or associate counselor, clinical social worker, or a supervised master’s-level clinician), or "a health care professional who is qualified based on that individual’s scope of practice, training, education, and experience to assess and diagnose autism spectrum disorders in children" (7 AAC 135.020(e)(2)).',
        status: 'verified',
        cites: [S.aac135_010, S.as47_30_915],
      },
      diagnosticTools: {
        value: 'No named diagnostic instrument appears in the regulations. The 97151 assessment must draw on in-person observation, structured caregiver interviews, "administration of standardized and nonstandardized tests," a behavioral history and test interpretation (7 AAC 135.350(b)).',
        status: 'unverified',
        cites: [S.aac135_350],
        verifyVia: 'Alaska Medicaid Provider Assistance Unit (doh.dbh.mpassunit@alaska.gov) or the behavioral health billing manual on the Health Enterprise portal.',
        blocker: 'document',
      },
      referral: {
        value: 'Yes, in effect. The initial behavior identification assessment must interpret information that includes "a referral from a mental health professional, as defined in AS 47.30.915, or a health care professional who is qualified" to assess and diagnose ASD in children (7 AAC 135.350(b)(1)(A)). No prior authorization is required.',
        status: 'verified',
        cites: [S.aac135_350, S.regNotice],
      },
      telehealth: {
        value: 'Allowed on the general Medicaid telehealth rule. The department pays for a service delivered by telehealth if it "would be covered … if delivered in person" and meets the same requirements (7 AAC 110.620), by real-time audio-video or audio-only (110.625). The provider must hold an active license under AS 08 or of the jurisdiction where the provider is located, be enrolled, register on the telemedicine business registry if required, and put "applicable telehealth modifiers and place-of-service coding" on the claim; the recipient must be present and participate, and the record must note the delivery method, the recipient’s location and consent (110.630). Not payable: a provider’s communication with a supervisor, or a supervisor’s review of a supervisee’s work (110.635), and telehealth consultation with another provider other than case management (7 AAC 135.010(d)(3)). Autism services are not on the telehealth exclusion list. No ABA-specific code list, modifier or POS was found.',
        status: 'verified',
        cites: [S.aac110tele, S.aac135_010],
      },
      authTurnaround: {
        value: 'Not applicable: autism services need no prior authorization since July 1, 2025, so there is no decision clock. (For the behavioral health services that still need one, the department told providers HMS Gainwell’s expected turnaround is "5 business days, unless outreach to the provider is necessary.")',
        status: 'verified',
        cites: [S.regNotice, S.aac135_010, S.saBulletin],
      },
      coordinationOfBenefits: {
        value: 'Medicaid pays last. Federal rules make the agency reject a claim where third-party liability is established and pay only what its rate exceeds the other payment (42 CFR 433.139). Alaska requires the provider to report any payment from "health insurance, or other source" and "enter it as a credit against the charge to the department" (7 AAC 145.005(i)), and to refund or credit the department any such payment for a service it paid (7 AAC 105.250). Bill the commercial plan first, under its own authorization rules.',
        status: 'verified',
        cites: [S.cfr433, S.aac145, S.aac105],
      },
    },
    faq: [
      { q: 'Does Alaska Medicaid cover ABA therapy?', a: 'Yes. Alaska Medicaid pays for autism services (the ABA codes 97151 and 97153–97158) for recipients under 21 with an autism spectrum disorder diagnosis, under 7 AAC 135.350.' },
      { q: 'Does Alaska Medicaid require prior authorization for ABA?', a: 'No. Since July 1, 2025 Alaska has removed prior-authorization requirements for autism services; 7 AAC 135.040(c)(19) lists them among services provided without prior authorization.' },
      { q: 'Which Alaska Medicaid health plan handles ABA?', a: 'None. Alaska Medicaid has no managed care plans; the state pays providers directly, with HMS Gainwell as fiscal agent. The Optum behavioral health ASO ended December 31, 2024.' },
      { q: 'What does Alaska Medicaid pay for ABA?', a: 'From July 1, 2026, per 15-minute unit: 97151, 97155 and 97156 $41.97; 97153 $31.95; 97154 $11.47; 97157 and 97158 $15.19. 97152, 0362T and 0373T are not on the rate chart.' },
      { q: 'Can a BCBA licensed in another state treat an Alaska Medicaid member, including by telehealth?', a: 'For services in Alaska, the Medicaid rule requires a license "under AS 08.15.020(a)," and Alaska law says no one may practice behavior analysis in the state without one; the only short route is a temporary license of up to 30 days a year for someone licensed in a substantially equivalent state. Alaska’s telehealth statute covers providers licensed in Alaska, with an out-of-state exception only for physicians’ teams treating life-threatening conditions. The Medicaid telehealth rule accepts a license from the jurisdiction where the provider is located, so ask the Medicaid Provider Assistance Unit before billing a remote out-of-state BCBA.' },
      { q: 'What is the Alaska Medicaid timely filing limit?', a: '12 months from the date of service (7 AAC 145.005(c)). Denied or reduced claims can be appealed within 180 days of the remittance advice (7 AAC 105.270).' },
    ],
  },

  'aetna-alaska': {
    slug: 'aetna-alaska',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA policies + Alaska’s AS 21.42.397 mandate (under 21, small-group exemption); BCBA needs an Alaska license.',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024); CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [S.aetnaPrecert, S.aetnaCPB],
    },
    treatmentPA: {
      value: 'Required: 97153–97158, 0362T and 0373T are on the precertification list; the reauthorization interval is set by the plan',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): ask whether the group carries ABA precertification and what reauthorization interval it uses.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5 ASD (ICD-10 F84.0, F84.3–F84.9) from an appropriate provider; CPB 0554 treats ABA for non-ASD indications as experimental',
      status: 'verified',
      cites: [S.aetnaGuide, S.aetnaCPB],
    },
    payer: 'Aetna in Alaska',
    state: 'AK', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Alaska',
    h1: 'Aetna ABA coverage in Alaska: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Alaska: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Alaska families: the national medical necessity guide, precertification on all ABA codes, Alaska’s AS 21.42.397 autism mandate (under 21, no visit limits, small-group exemption), Alaska behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Alaska, an Aetna card means three layers: Aetna’s national ABA criteria, Alaska’s autism mandate in AS 21.42.397, and the plan’s funding type and employer size, which decide whether the mandate applies at all. This guide stacks them in order. Alaska Medicaid has no managed care plans, so an Aetna card in Alaska is commercial (or Medicare).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s ABA medical necessity guide' },
      { label: 'State mandate', value: 'AS 21.42.397 (coverage for autism spectrum disorders)' },
      { label: 'Mandate age', value: 'Under 21: coverage "is required to be provided only to individuals under 21 years of age"' },
      { label: 'Mandate caps', value: 'No dollar cap and no visit limits in the statute; ordinary cost-sharing applies' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; small-group employers with 20 or fewer employees; waiver possible for 21–25 employees; fraternal benefit societies' },
      { label: 'Licensure', value: 'Required: Alaska behavior-analyst license (AS 08.15); technicians exempt when directed by a licensed behavior analyst' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Alaska',
        body: [
          'Aetna applies its ABA medical necessity guide nationally: a DSM-5 autism diagnosis (F84.0, F84.3–F84.9) from an appropriate provider, functional impairment on a standardized scale within the past 12 months, and a measurable, time-limited treatment plan, with progress evaluated every six months. CPB 0554 considers ABA experimental for non-ASD indications. Aetna’s behavioral health precertification list names all ten ABA codes, 97151 through 97158, 0362T and 0373T. The guide’s only state exhibit is Maryland, so no Alaska-specific criteria modify it. Aetna runs no Alaska Medicaid plan; Alaska Medicaid is fee-for-service.',
        ],
        cites: [S.aetnaGuide, S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert, S.hfin],
      },
      {
        h2: 'The Alaska mandate: what it guarantees',
        body: [AK_MANDATE_BODY],
        cites: [S.as21_42_397],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [AK_LICENSURE_BODY],
        cites: [S.as08_15, S.bacbLic, S.as08_02_130, S.as21_42_422, S.fee27],
      },
      {
        h2: 'Claims: filing, payment and what Aetna pays',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) makes payment a contract term: rates and compensation under the agreement are subject to Aetna’s coding and claim-edit policies, and where a provider has both an intermediary contract and a direct agreement, "your direct Aetna rates will apply unless we specifically notify you otherwise." When a member’s benefits are exhausted, the provider "cannot charge them more than the contracted rate."' + AK_PROMPT_PAY + ' For a public benchmark, Alaska Medicaid pays 97153 at $31.95 per 15 minutes from July 1, 2026.',
        ],
        cites: [S.aetnaOM, S.as21_36_495, S.as21_07, S.fee27],
      },
    ],
    collect: [
      { title: 'Plan funding type and employer size', desc: 'Fully insured (AS 21.42.397 applies) vs. self-funded ERISA, and whether the employer is a small group of 20 or fewer (exempt).' },
      { title: 'Child’s age', desc: 'The Alaska mandate requires coverage only under 21.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date. Aetna’s policy is ASD-only.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3, ABAS, VB-MAPP or ABLLS).' },
      { title: 'Prescription and treatment plan', desc: 'AS 21.42.397 ties coverage to treatment prescribed by a physician, psychologist or APRN, in a plan following a comprehensive evaluation.' },
    ],
    sources: [S.aetnaGuide, S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.aetnaTele, S.as21_42_397, S.as08_15, S.as08_02_130, S.as21_42_422, S.as21_36_495, S.as21_07, S.aac3_28, S.sb133, S.as21_42_205, S.aac3_26_110, S.bacbLic, S.erisa, S.fee27, S.hfin],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s Network Participation Criteria (5/26) require services to be "provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board"; supervised staff may be a BCaBA "or a paraprofessional," with "A minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional "for each 10 hours of applied behavior analysis" and the supervisor onsite with the child at least one hour a month; "All BCBAs, BCaBAs and paraprofessionals must meet state requirements." In Alaska that means a licensed behavior analyst (AS 08.15.010); an assistant needs a license and direct supervision by a licensed behavior analyst, and technicians are exempt only when acting "under the direction of a licensed behavior analyst or licensed assistant behavior analyst" (AS 08.15.070(3)).',
        status: 'verified',
        cites: [S.aetnaNPC, S.aetnaGuide, S.as08_15],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA policies (CPB 0554, the medical necessity guide, the precertification list).',
        status: 'unverified',
        cites: [S.aetnaCPB, S.aetnaGuide],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap is published. Hours come from the guide’s severity assessment, with typical intensities of 10–25 hours a week for comprehensive and 1–20 for focused programs (typical, not caps); progress is evaluated every six months. For fully insured Alaska plans, AS 21.42.397(b)(2) bars limiting "the number of visits to an autism service provider."',
        status: 'verified',
        cites: [S.aetnaGuide, S.as21_42_397],
      },
      noteSignature: {
        value: 'Not addressed. Aetna sets treatment-plan content requirements but not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'The participating-provider agreement and the Aetna Behavioral Health provider manual section on documentation.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-neutral in Aetna’s guide; inpatient, residential or partial hospitalization use that level of care’s criteria. AS 21.42.397(b)(4) requires fully insured plans to cover medically necessary treatment "coordinated with an education program," but coverage "may not be contingent on" that coordination.',
        status: 'verified',
        cites: [S.aetnaGuide, S.as21_42_397],
      },
      billAsProvider: {
        value: 'Services must be "provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists" where in scope, unless mandates, plan documents or contracts say otherwise. Alaska licenses behavior analysts, so the Alaska-licensed behavior analyst is the billing credential (AS 08.15.010).',
        status: 'verified',
        cites: [S.aetnaGuide, S.as08_15],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national ABA guide sets no age cap; it describes typical, not limiting, age ranges.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.as21_42_397],
        verifyVia: 'Live benefits verification on the member ID: establish fully insured vs. self-funded ERISA and employer size, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the ASD diagnosis itself, but medical necessity requires functional impairment shown on a standardized scale administered in the past 12 months (at least one standard deviation below the mean) or a significant risk of harm.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'A DSM-5 ASD diagnosis "obtained by an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)."',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosticTools: {
        value: 'The ABA guide requires a standardized functional measure from the past 12 months, naming the Vineland-3, ABAS, VB-MAPP or ABLLS as examples. CPB 0648 discusses ASD diagnostic instruments (ADOS-2, ADI-R and others) but the ABA guide does not require a specific one.',
        status: 'verified',
        cites: [S.aetnaGuide, S.aetnaCPB648],
      },
      referral: {
        value: 'Aetna’s national ABA policies require no physician referral; what they require is precertification of all ten ABA codes.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.as21_42_397],
      },
      telehealth: {
        value: 'Aetna’s Telemedicine and Direct Patient Contact Payment Policy marks 97151, 97153, 97155, 97156 and 97157 as telehealth-eligible on commercial plans (modifier GT, 95 or FR), with 97152, 97154 and 97158 checked for Medicare Advantage only; the posted policy shows a last review of June 2021, so treat the list as perishable. Aetna’s provider manual (6/26) says Aetna Behavioral Health "offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self- insured plan sponsors opt out," and that providers must "ensure that they have the proper licensure based on state requirements."' + AK_TELE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaTele, S.aetnaOM, S.as21_42_422, S.as08_15, S.as08_02_130],
        verifyVia: 'Availity or the precertification line on the card: ask whether the plan is fully insured in Alaska or self-funded (and opted out of telehealth), and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: AK_AUTH_TURNAROUND('Aetna'),
        status: 'plan-dependent',
        cites: [S.aac3_28, S.sb133, S.erisa],
        verifyVia: AK_AUTH_VERIFY('Aetna'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: AK_COB('Aetna'),
        status: 'plan-dependent',
        cites: [S.as21_42_205, S.aac3_26_110, S.cfr433, S.aac145, S.tricare, S.champva],
        verifyVia: AK_COB_VERIFY('Aetna'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Alaska?', a: 'Yes, under its national ABA medical necessity guide for ASD, with Alaska’s AS 21.42.397 mandate layered on for fully insured plans. Self-funded employer plans and small groups of 20 or fewer employees are outside the mandate.' },
      { q: 'What does the Alaska autism mandate require?', a: 'Coverage of autism diagnosis and treatment, including ABA, for individuals under 21, prescribed by a physician, psychologist or APRN and delivered or supervised by an autism service provider, with no limit on the number of visits and no dollar cap in the statute.' },
      { q: 'Does a BCBA need an Alaska license to bill Aetna?', a: 'Yes in practice. Alaska law bars practicing behavior analysis in the state without a license, and Aetna requires providers to meet state requirements. Technicians are exempt from licensure when working under a licensed behavior analyst’s direction.' },
      { q: 'How fast must Aetna pay a clean ABA claim in Alaska?', a: 'For fully insured plans, AS 21.36.495 requires payment or denial within 30 calendar days of a clean claim, with 15 percent annual interest when the insurer misses its deadlines. Self-funded plans follow their own terms.' },
    ],
  },

  'cigna-alaska': {
    slug: 'cigna-alaska',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + Alaska’s AS 21.42.397 mandate; no PA on assessment codes; Evernorth has an Alaska regulatory addendum.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA (Cigna autism resource guide); EN0499 sets no PA rule itself',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    treatmentPA: {
      value: 'Required: completed assessment and treatment plan attached to the ABA Prior Authorization Form',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD (F84.0–F84.9 except F84.2 Rett) under DSM-5-TR criteria',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Alaska',
    state: 'AK', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Alaska',
    h1: 'Cigna / Evernorth ABA coverage in Alaska: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Alaska: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Alaska families: national policy EN0499, no PA on assessments, Alaska’s AS 21.42.397 autism mandate (under 21, no visit limits, small-group exemption), Alaska behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Alaska, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, Alaska’s autism mandate in AS 21.42.397, and the plan’s funding type and employer size, which decide whether the mandate applies. Many Cigna members are on self-funded employer plans, so check funding first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'State mandate', value: 'AS 21.42.397 (coverage for autism spectrum disorders)' },
      { label: 'Mandate age', value: 'Under 21: coverage "is required to be provided only to individuals under 21 years of age"' },
      { label: 'Mandate caps', value: 'No dollar cap and no visit limits in the statute; ordinary cost-sharing applies' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; small-group employers with 20 or fewer employees; waiver possible for 21–25 employees; fraternal benefit societies' },
      { label: 'Licensure', value: 'Required: Alaska behavior-analyst license (AS 08.15); technicians exempt when directed by a licensed behavior analyst' },
      { label: 'Fee schedule', value: 'Not public — your ABA fee schedule is Exhibit A of your Evernorth Provider Agreement; fee questions to Evernorth Provider Services, 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Alaska',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). Per the autism resource guide, prior authorization is no longer required for assessment codes 97151, 97152 and 0362T with an autism diagnosis, as long as the provider is independently licensed or a BCBA. Treatment needs the completed assessment and treatment plan on the ABA Prior Authorization Form. EN0499 and the resource guide contain no Alaska-specific criteria. Evernorth’s Administrative Guidelines (September 2026) do carry an Alaska Regulatory Addendum for insured plans (not self-funded ones): a fair, prompt mutual dispute-resolution process with an initial meeting within ten working days and mediation, continuity of care for a member in active treatment when a provider’s agreement ends (up to 90 days for an ongoing course of treatment, or to the end of the plan year if longer), and claims handled under AS 21.36.495. Cigna runs no Alaska Medicaid plan; Alaska Medicaid is fee-for-service.',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin, S.hfin],
      },
      {
        h2: 'The Alaska mandate: what it guarantees',
        body: [AK_MANDATE_BODY],
        cites: [S.as21_42_397],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [AK_LICENSURE_BODY],
        cites: [S.as08_15, S.bacbLic, S.as08_02_130, S.as21_42_422, S.fee27],
      },
      {
        h2: 'Claims: filing, payment and what Cigna pays',
        body: [
          'Cigna publishes no ABA rate table. Evernorth’s Administrative Guidelines say the Provider Agreement terms "include the reimbursement rates applicable to covered services" and tell ABA providers to see "Exhibit A in your Provider Agreement" for the fee schedule and reimbursable autism services; fee questions go to Provider Services at 800.926.2273. Virtual services carry modifier 95, which Evernorth says "will not change the reimbursement." Non-credentialed technicians are paid only through the supervising provider’s claim (electronic payer ID 62308).' + AK_PROMPT_PAY + ' For a public benchmark, Alaska Medicaid pays 97153 at $31.95 per 15 minutes from July 1, 2026.',
        ],
        cites: [S.ebhAdmin, S.cignaARG, S.as21_36_495, S.as21_07, S.fee27],
      },
    ],
    collect: [
      { title: 'Plan funding type and employer size', desc: 'Fully insured (AS 21.42.397 applies) vs. self-funded ERISA, and whether the employer is a small group of 20 or fewer (exempt).' },
      { title: 'Child’s age', desc: 'The Alaska mandate requires coverage only under 21.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, plus the date of the most recent diagnosis. Provisional or rule-out diagnoses don’t count.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Prescription and treatment plan', desc: 'AS 21.42.397 ties coverage to treatment prescribed by a physician, psychologist or APRN, in a plan following a comprehensive evaluation.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.as21_42_397, S.as08_15, S.as08_02_130, S.as21_42_422, S.as21_36_495, S.as21_07, S.aac3_28, S.sb133, S.as21_42_205, S.aac3_26_110, S.bacbLic, S.erisa, S.fee27, S.hfin],
    deliveryRules: {
      supervision: {
        value: 'Case supervision is by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health professional with ABA training, at one to two hours per ten hours of direct treatment; at 10 hours a week or less, at least one to two hours a week. In Alaska the supervising behavior analyst must hold an Alaska license (AS 08.15.010), and technicians are exempt from licensure only when acting under a licensed behavior analyst’s or licensed assistant’s direction (AS 08.15.070(3)).',
        status: 'verified',
        cites: [S.en0499, S.as08_15],
      },
      concurrentBilling: {
        value: 'Only one provider may bill for a unit of time, except 97153, 97154 and 97155 during direct supervision, when the BCBA or QHP directs the technician and both are face-to-face with the patient at the same time.',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap is published. All ABA services bill in 15-minute units with 97151–97158, 0362T and 0373T only; intensity must reflect severity, goals and response to treatment. For fully insured Alaska plans, AS 21.42.397(b)(2) bars limiting "the number of visits to an autism service provider."',
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.as21_42_397],
      },
      noteSignature: {
        value: 'Each service record must include, among other things, the "Name, credential (if applicable), and signature of ABA provider who rendered the service," with dates and times, location, focus and who was present.',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'EN0499 has goals and data reported by setting (home, clinic, school, community) and excludes primarily educational or vocational services. AS 21.42.397(b)(4) requires fully insured plans to cover medically necessary treatment coordinated with an education program, without making coverage contingent on it.',
        status: 'verified',
        cites: [S.en0499, S.as21_42_397],
      },
      billAsProvider: {
        value: 'Evernorth does not credential non-licensed or non-certified staff; their services are billed under the supervising provider. On a CMS-1500 the rendering provider prints their name in box 31 and only a BCBA or other licensed provider goes in box 33; electronic claims use payer ID 62308.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; it says access to focused intervention "should not be restricted by age, cognitive level, diagnosis, or co-occurring conditions." Age terms come from the benefit plan and any controlling mandate.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.as21_42_397],
        verifyVia: 'Live benefits verification: establish fully insured vs. self-funded ERISA and employer size first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs the date it was most recently made. The clocks run on data: the standardized instrument within 60 days before treatment, baseline data within 60 days, and current data within 60 days of a continued-treatment request.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional "licensed to practice independently and whose licensure board considers diagnostics" within scope, applying DSM-5-TR criteria.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated, but the assessment must be standardized, completed by a trained administrator, and the current edition (the policy’s example: "Vineland-3 vs. Vineland-II").',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral. Assessments 97151, 97152 and 0362T need no PA with an autism diagnosis when the provider is independently licensed or a BCBA; treatment needs the assessment and plan on the ABA PA form.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.as21_42_397],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" per the autism resource guide, and EN0499 allows "traditional in-person service delivery, telehealth, or a hybrid," chosen on clinical factors; virtual services are billed with modifier 95.' + AK_TELE_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ebhAdmin, S.as21_42_422, S.as08_15, S.as08_02_130],
      },
      authTurnaround: {
        value: AK_AUTH_TURNAROUND('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.aac3_28, S.sb133, S.erisa],
        verifyVia: AK_AUTH_VERIFY('Cigna/Evernorth'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: AK_COB('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.as21_42_205, S.aac3_26_110, S.cfr433, S.aac145, S.tricare, S.champva],
        verifyVia: AK_COB_VERIFY('Cigna/Evernorth'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Alaska?', a: 'Yes, under national policy EN0499 for ASD, with Alaska’s AS 21.42.397 mandate layered on for fully insured plans. Self-funded employer plans and small groups of 20 or fewer employees are outside the mandate.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in Alaska?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'Does a BCBA need an Alaska license to bill Cigna?', a: 'Alaska law bars practicing behavior analysis in the state without a license, so plan on the Alaska license; the out-of-state route in statute is a temporary license of up to 30 days a year.' },
      { q: 'What does Cigna pay for ABA in Alaska?', a: 'Cigna publishes no ABA rates. Evernorth says your fee schedule is in Exhibit A of your Provider Agreement; call Evernorth Provider Services (800.926.2273). Alaska Medicaid’s rate for 97153 ($31.95 per 15 minutes from July 1, 2026) is the public benchmark.' },
    ],
  },

  'unitedhealthcare-alaska': {
    slug: 'unitedhealthcare-alaska',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + Alaska’s AS 21.42.397 mandate; no Alaska state supplement; three-code telehealth list.',
    assessmentPA: {
      value: 'Required: the ABA Supplemental Clinical Criteria require prior authorization for ABA "unless otherwise specified or mandated by contract or law"',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required: treatment authorization under the same criteria; the review interval is set per authorization',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express support at (866) 209-9320: ask what review interval will be set on this member’s ABA treatment authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a valid ASD diagnosis by a state-licensed physician, psychologist or other qualified state-licensed clinician, with DSM-5 diagnosis and severity level confirmed and documented by the diagnosing clinician',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Alaska',
    state: 'AK', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Alaska',
    h1: 'UnitedHealthcare / Optum ABA coverage in Alaska: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Alaska: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Alaska families: Optum’s ABA criteria and prior authorization, Alaska’s AS 21.42.397 autism mandate (under 21, no visit limits, small-group exemption), Alaska behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Alaska, a UnitedHealthcare card means three layers: Optum Behavioral Health’s national ABA criteria, Alaska’s autism mandate in AS 21.42.397, and the plan’s funding type and employer size, which decide whether the mandate applies. Alaska Medicaid has no managed care plans, so a UHC card here is commercial (or Medicare). Note that Optum’s former role as Alaska Medicaid’s behavioral health ASO ended December 31, 2024 and has nothing to do with UHC commercial plans.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'AS 21.42.397 (coverage for autism spectrum disorders)' },
      { label: 'Mandate age', value: 'Under 21: coverage "is required to be provided only to individuals under 21 years of age"' },
      { label: 'Mandate caps', value: 'No dollar cap and no visit limits in the statute; ordinary cost-sharing applies' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; small-group employers with 20 or fewer employees; waiver possible for 21–25 employees; fraternal benefit societies' },
      { label: 'Licensure', value: 'Required: Alaska behavior-analyst license (AS 08.15); technicians exempt when directed by a licensed behavior analyst' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Alaska',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026): prior authorization for ABA, a DSM-5 diagnosis with severity level confirmed by the diagnosing clinician, and continued-service review that looks hard at use below 80% of authorized hours over a two-week period. Optum’s ABA State Mandates supplement (July 2026) has sections for Arizona, California, Massachusetts, Pennsylvania and Virginia only; Alaska is not there, so no Alaska-specific criteria modify the commercial policy. Optum’s Alaska Medicaid ASO contract ended December 31, 2024, and UnitedHealthcare has no Alaska Medicaid plan (the state has none).',
        ],
        cites: [S.optumSCC, S.optumSM, S.optumExit, S.hfin],
      },
      {
        h2: 'The Alaska mandate: what it guarantees',
        body: [AK_MANDATE_BODY],
        cites: [S.as21_42_397],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [AK_LICENSURE_BODY],
        cites: [S.as08_15, S.bacbLic, S.as08_02_130, S.as21_42_422, S.fee27],
      },
      {
        h2: 'Claims: filing, payment and what UnitedHealthcare pays',
        body: [
          'UnitedHealthcare publishes no ABA rate table; Optum pays from the contract. Its National Network Manual (effective Sept. 1, 2026) defines the "Fee Maximum" as the maximum amount a participating provider may be paid for a service, adding that "Reimbursement to clinicians is based upon licensure rather than degree." Optum’s commercial ABA Reimbursement Policy (updated 06/2026) puts the credential on every line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a doctoral-level provider, and notes that state regulatory requirements "may supplement, modify or supersede" it.' + AK_PROMPT_PAY + ' For a public benchmark, Alaska Medicaid pays 97153 at $31.95 per 15 minutes from July 1, 2026.',
        ],
        cites: [S.optumNNM, S.optumReimb, S.as21_36_495, S.as21_07, S.fee27],
      },
    ],
    collect: [
      { title: 'Plan funding type and employer size', desc: 'Fully insured (AS 21.42.397 applies) vs. self-funded ERISA, and whether the employer is a small group of 20 or fewer (exempt).' },
      { title: 'Child’s age', desc: 'The Alaska mandate requires coverage only under 21.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5 ASD and severity level, confirmed by the diagnosing clinician with a validated tool (ADI-R, ADOS-2 and others).' },
      { title: 'Prescription and treatment plan', desc: 'AS 21.42.397 ties coverage to treatment prescribed by a physician, psychologist or APRN, in a plan following a comprehensive evaluation.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumReimb, S.optumNNM, S.optumExit, S.as21_42_397, S.as08_15, S.as08_02_130, S.as21_42_422, S.as21_36_495, S.as21_07, S.aac3_28, S.sb133, S.as21_42_205, S.aac3_26_110, S.bacbLic, S.erisa, S.fee27, S.hfin],
    deliveryRules: {
      supervision: {
        value: 'Consistent with CASP standards, direct case supervision runs at 1–2 hours for every 10 hours of direct treatment per week. Technicians work under a BCBA or licensed behavioral health clinician and "should be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate"; Optum does not recommend parents serving as their own child’s RBT. In Alaska the supervising behavior analyst must hold an Alaska license (AS 08.15.010).',
        status: 'verified',
        cites: [S.optumSCC, S.as08_15],
      },
      concurrentBilling: {
        value: 'Not addressed. The SCC define direct case supervision as happening during direct treatment but do not state the billing consequence.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual and the participating-provider agreement, or a written coding determination from Optum.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap. Requested hours must be justified by documented clinical need; at continued-service review, use below 80% of authorized hours over a two-week period must be explained. For fully insured Alaska plans, AS 21.42.397(b)(2) bars limiting "the number of visits to an autism service provider."',
        status: 'verified',
        cites: [S.optumSCC, S.as21_42_397],
      },
      noteSignature: {
        value: 'Not addressed. The SCC set what must be documented for coverage, not who signs a session note or when.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual (documentation standards) and the participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Not covered: services that are not ABA, "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA; school coordination is allowed. AS 21.42.397(b)(4) requires fully insured plans to cover medically necessary treatment coordinated with an education program, without making coverage contingent on it.',
        status: 'verified',
        cites: [S.optumSCC, S.as21_42_397],
      },
      billAsProvider: {
        value: 'The credentialed ABA provider is a BCBA or licensed behavioral health clinician; a BCaBA or non-licensed staff member works under that provider’s direct supervision. Each line carries the rendering credential modifier (HM RBT, HN BCaBA, HO master’s-level, HP doctoral).',
        status: 'verified',
        cites: [S.optumSCC, S.optumReimb],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion; the member’s benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.as21_42_397],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish fully insured vs. self-funded ERISA and employer size first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; the DSM-5 diagnosis and severity level must be confirmed and documented by the diagnosing clinician. Use below 80% of authorized hours over two weeks triggers review.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'A "state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis."',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool from a non-exhaustive list of first-level screens (M-CHAT and others), second-level screening tools, and formal diagnostic tools (ADI-R, ADOS-2 and others).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral; the SCC require prior authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.as21_42_397],
      },
      telehealth: {
        value: 'Three codes. Optum’s Telehealth Billing guide (September 2025) says for commercial plans: "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157." So the 97151 assessment and technician 97153 are not on Optum’s list. Bill POS 10 (home) or 02 (elsewhere); Optum will not pay a telehealth claim carrying only a modifier. The SCC add that telehealth options "are not intended to supplant in-person service."' + AK_TELE_TAIL + ' Ask Optum how it applies the three-code list to a fully insured Alaska plan.',
        status: 'verified',
        cites: [S.optumTele, S.optumSCC, S.as21_42_422, S.as08_15, S.as08_02_130],
      },
      authTurnaround: {
        value: AK_AUTH_TURNAROUND('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.aac3_28, S.sb133, S.erisa],
        verifyVia: AK_AUTH_VERIFY('UnitedHealthcare/Optum'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: AK_COB('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.as21_42_205, S.aac3_26_110, S.cfr433, S.aac145, S.tricare, S.champva],
        verifyVia: AK_COB_VERIFY('UnitedHealthcare/Optum'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Alaska?', a: 'Yes, under Optum’s national ABA criteria for ASD, with Alaska’s AS 21.42.397 mandate layered on for fully insured plans. Self-funded employer plans and small groups of 20 or fewer employees are outside the mandate.' },
      { q: 'Does Optum have Alaska-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement (July 2026) covers Arizona, California, Massachusetts, Pennsylvania and Virginia, not Alaska.' },
      { q: 'Is Optum still Alaska Medicaid’s behavioral health administrator?', a: 'No. Optum’s ASO contract with Alaska’s Division of Behavioral Health ended December 31, 2024; Alaska Medicaid claims now go to the state MMIS through HMS Gainwell.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in Alaska?', a: 'Optum’s commercial telehealth guide allows only 97155, 97156 and 97157 by telehealth, billed POS 10 or 02. Fully insured Alaska plans must also cover telehealth by Alaska-licensed providers under AS 21.42.422, so ask Optum how it applies the list to your plan.' },
    ],
  },

  'premera-blue-cross-blue-shield-alaska': {
    slug: 'premera-blue-cross-blue-shield-alaska',
    family: 'bcbs',
    cardDesc: 'Alaska’s largest insurer: Premera policy 3.01.510, ABA on the PA list (individual and group), 365-day filing, AS 21.42.397 mandate.',
    assessmentPA: {
      value: 'Required on individual plans: 97151 and 0362T are "Prior Authorization Required" on Premera Alaska’s October 2026 individual code list. Group plans list ABA among services requiring prior authorization; check the code in Availity’s Code Check tool',
      status: 'verified',
      cites: [S.premCodesInd, S.premCodesGrp, S.premCodeCheck],
    },
    treatmentPA: {
      value: 'Required: 97153, 97154, 97155, 97156, 97158 and 0373T are "Prior Authorization Required" on the individual code list, and ABA is on the group (non-individual) prior-authorization list; requests go through Availity, not by phone',
      status: 'verified',
      cites: [S.premCodesInd, S.premCodesGrp, S.premPA],
    },
    dxRequired: {
      value: 'Yes: Autism Spectrum Disorder (DSM-5/DSM-5-TR), or autistic disorder, Asperger’s or PDD-NOS (ICD-10), diagnosed by a professional whose licensure includes diagnosing psychiatric or neurodevelopmental disorders; ABA is "not medically necessary for any other diagnoses or conditions"',
      status: 'verified',
      cites: [S.premPolicy],
    },
    payer: 'Premera Blue Cross Blue Shield of Alaska',
    state: 'AK', kind: 'commercial',
    pill: 'Payer Guide · Premera Blue Cross Blue Shield · Alaska',
    h1: 'Premera Blue Cross Blue Shield of Alaska ABA coverage: the intake guide.',
    metaTitle: 'Premera Blue Cross Blue Shield of Alaska ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Premera Blue Cross Blue Shield of Alaska covers ABA: medical policy 3.01.510, prior authorization through Availity, Alaska’s AS 21.42.397 autism mandate (under 21, no visit limits), Alaska behavior-analyst licensure, 365-day claim filing, and what intake should verify.',
    intro: [
      'Premera Blue Cross Blue Shield of Alaska is the state’s Blue plan. For an intake team that means three layers: Premera’s ABA medical policy 3.01.510, Alaska’s autism mandate in AS 21.42.397, and the plan type on the card (individual, fully insured group, self-funded or shared-administration group, or the Federal Employee Program), which decides both the prior-authorization route and whether the mandate applies.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Premera medical policy 3.01.510 (effective May 1, 2026)' },
      { label: 'State mandate', value: 'AS 21.42.397 (coverage for autism spectrum disorders)' },
      { label: 'Mandate age', value: 'Under 21: coverage "is required to be provided only to individuals under 21 years of age"' },
      { label: 'Mandate caps', value: 'No dollar cap and no visit limits in the statute; ordinary cost-sharing applies' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; small-group employers with 20 or fewer employees; waiver possible for 21–25 employees; FEP follows the federal Service Benefit Plan' },
      { label: 'Licensure', value: 'Required: Alaska behavior-analyst license (AS 08.15); policy 3.01.510 requires state licensure where the state licenses behavior analysts' },
      { label: 'Fee schedule', value: 'Not public — fee schedules are available to contracted providers in Availity' },
    ],
    sections: [
      {
        h2: 'Premera’s ABA policy and prior authorization',
        body: [
          'Premera medical policy 3.01.510 (effective May 1, 2026) covers ABA when the diagnosis, service, setting and provider criteria are met. It recognizes the CPT ABA codes plus several HCPCS codes (H0031, H0032, H2014, H2019, S5108–S5111) used by some plans. Settings are "most often in the home setting or clinic setting" and may be community; services "may be provided in-person or via secure real-time video and audio telehealth/virtual modalities, or via a combination." Some direct treatment may take place at school when autism-related difficulties show up there, but it "must consist entirely of bona-fide ABA treatment activities," and acting as a classroom aide or 1:1 teacher is not covered; "Some plans may exclude coverage of ABA in school or educational settings."',
          'Prior authorization depends on plan type. Premera Alaska’s October 2026 code list for individual plans marks 97151, 97153, 97154, 97155, 97156, 97158, 0362T and 0373T "Prior Authorization Required" (97152 and 97157 do not appear). The non-individual (group) list puts "Applied behavioral analysis (ABA)" among services requiring prior authorization and sends providers to the Code Check tool in Availity. Requests go through Availity for individual and non-individual members alike, and "Prior authorizations can’t be submitted by phone." Federal Employee Program members use a separate FEP-Alaska ABA prior-approval form, faxed to 866-948-8823, and FEP excludes ABA "performed as part of an educational program; or provided in or by a school/educational setting."',
        ],
        cites: [S.premPolicy, S.premCodesInd, S.premCodesGrp, S.premPA, S.premCodeCheck, S.premFEP],
      },
      {
        h2: 'The Alaska mandate: what it guarantees',
        body: [AK_MANDATE_BODY],
        cites: [S.as21_42_397],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [
          AK_LICENSURE_BODY,
          'Premera’s own policy is consistent: behavior analysts "must be state licensed, or state certified in states that require state licensure," and BCBAs without a state license are accepted only "in states that do not require state licensure." Alaska requires it. Premera says most providers complete credentialing "within 60 days or less," and a practitioner joining a group "is required to complete credentialing prior to seeing enrollees."',
        ],
        cites: [S.as08_15, S.bacbLic, S.as08_02_130, S.as21_42_422, S.fee27, S.premPolicy, S.premCred],
      },
      {
        h2: 'Claims operations: filing, payment, appeals',
        body: [
          'Premera asks for claims within 60 days of service "but no later than 365 calendar days from the date of service," and for most plans denies claims received more than 12 months after the date of service "with no member responsibility." A Level I provider appeal "must be submitted within the same 365-days following the action that prompted the dispute," a Level II within 30 calendar days of the Level I decision, and Premera says it is processing appeals within 30 days.' + AK_PROMPT_PAY,
        ],
        cites: [S.premClaims, S.premPA, S.as21_36_495, S.as21_07],
      },
    ],
    collect: [
      { title: 'Plan type', desc: 'Individual, fully insured group, self-funded or shared-administration group, or FEP. It decides the PA route and whether AS 21.42.397 applies.' },
      { title: 'Child’s age and employer size', desc: 'The Alaska mandate covers under 21; small groups of 20 or fewer employees are exempt.' },
      { title: 'Diagnosis report', desc: 'ASD diagnosis by a professional licensed to diagnose psychiatric or neurodevelopmental disorders.' },
      { title: 'Prescription and treatment plan', desc: 'AS 21.42.397 ties coverage to treatment prescribed by a physician, psychologist or APRN, in a plan following a comprehensive evaluation.' },
      { title: 'School services', desc: 'Some plans, and FEP, exclude ABA in school settings; record any IEP services.' },
    ],
    sources: [S.premPolicy, S.premCodesInd, S.premCodesGrp, S.premPA, S.premCodeCheck, S.premClaims, S.premCred, S.premFEP, S.as21_42_397, S.as08_15, S.as08_02_130, S.as21_42_422, S.as21_36_495, S.as21_07, S.aac3_28, S.sb133, S.as21_42_205, S.aac3_26_110, S.bacbLic, S.erisa, S.fee27, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'Direct treatment by technicians, BCaBAs or supervised clinicians "is provided by the ABA program manager or lead behavioral therapist," and "Some supervisory time (no specific time amount is specified) should be utilized for direct observation"; supervision may be in person or by real-time video. Premera points to the CASP guidelines for frequency and sets no ratio. In Alaska the program manager must hold an Alaska behavior-analyst license (AS 08.15.010), and an assistant needs direct supervision by a licensed behavior analyst.',
        status: 'verified',
        cites: [S.premPolicy, S.as08_15],
      },
      concurrentBilling: {
        value: 'Supervision of a technician is a covered service for the program manager only "while the latter is providing covered direct treatment services," and for that time both the supervision and the technician’s direct treatment are covered. Not medically necessary: "More than one clinician providing direct ABA treatment services to the same identified individual at the same time," or ABA and another therapy (speech, OT) in the same session.',
        status: 'verified',
        cites: [S.premPolicy],
      },
      dailyLimits: {
        value: 'Policy 3.01.510 sets no hour or unit cap and refers to the CASP guidelines on intensity. For fully insured Alaska plans, AS 21.42.397(b)(2) bars limiting "the number of visits to an autism service provider."',
        status: 'verified',
        cites: [S.premPolicy, S.as21_42_397],
      },
      noteSignature: {
        value: 'Not addressed in policy 3.01.510 or the Alaska medical reference manual pages read.',
        status: 'unverified',
        cites: [S.premPolicy, S.premClaims],
        verifyVia: 'Premera provider services (800-722-4714) or your Premera provider agreement: ask its documentation and signature standard for ABA session notes.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Home or clinic most often, community settings when needed; school only for bona-fide ABA treatment, never as a classroom aide or 1:1 teacher, and "Some plans may exclude coverage of ABA in school or educational settings." Camps and schools for children with autism are not covered. FEP excludes school-setting ABA.',
        status: 'verified',
        cites: [S.premPolicy, S.premFEP],
      },
      billAsProvider: {
        value: 'Non-treatment services (assessments, plan development, data analysis, supervision) are covered "only for program managers/lead behavioral therapists"; group sessions and team meetings are covered for one clinician only. Technician supervision time is not billable by the technician. Policy 3.01.510 does not say whose NPI goes on a technician’s claim line.',
        status: 'plan-dependent',
        cites: [S.premPolicy],
        verifyVia: 'Premera provider services (800-722-4714) or Availity payer space: ask whether technician lines bill under the supervising behavior analyst’s NPI or the agency’s.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Policy 3.01.510 states no age limit; member contracts govern.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.premPolicy, S.as21_42_397],
        verifyVia: 'Availity eligibility and benefits on the member ID: confirm plan type (individual, fully insured group, self-funded group, FEP) and any age term.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Policy 3.01.510 sets no diagnosis recency rule.',
        status: 'unverified',
        cites: [S.premPolicy],
        verifyVia: 'Premera prior authorization in Availity: ask whether a recent diagnostic evaluation is expected with the initial request.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'A healthcare professional "whose legally permitted scope of licensure includes diagnosis of psychiatric disorders or neurodevelopmental disorders."',
        status: 'verified',
        cites: [S.premPolicy],
      },
      diagnosticTools: {
        value: 'Policy 3.01.510 names no diagnostic instrument. Prior-authorization requests on the code lists call for history and physical and documentation of medical necessity.',
        status: 'unverified',
        cites: [S.premPolicy, S.premCodesInd],
        verifyVia: 'Premera prior authorization in Availity: ask which assessment instruments it expects.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Policy 3.01.510 requires no referral; the code lists require prior authorization with "history and physical, documentation of medical necessity and procedure report."' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.premPolicy, S.premCodesInd, S.as21_42_397],
      },
      telehealth: {
        value: 'Yes. ABA services, and supervision, "may be provided in-person or via secure real-time video and audio telehealth/virtual modalities, or via a combination" (policy 3.01.510). No code list, modifier or POS is published in the policy.' + AK_TELE_TAIL,
        status: 'verified',
        cites: [S.premPolicy, S.as21_42_422, S.as08_15, S.as08_02_130],
      },
      authTurnaround: {
        value: AK_AUTH_TURNAROUND('Premera'),
        status: 'plan-dependent',
        cites: [S.aac3_28, S.sb133, S.erisa],
        verifyVia: AK_AUTH_VERIFY('Premera'),
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Premera’s Alaska manual states the order: the member is primary on the plan where they are the subscriber; for a child on married parents’ plans, "the primary plan is the coverage of the parent with his/her birthday earlier in the year" (the birthday rule); for divorced parents a court decree controls, and otherwise the custodial parent’s plan. "Some group contracts are not subject to state regulations may have unique COB rules." Submit to the primary first and send its processing information with the secondary claim. Under 3 AAC 26.110(c) a secondary insurer must accept the primary’s precertification. If the child also has Alaska Medicaid, Premera pays first (42 CFR 433.139).',
        status: 'verified',
        cites: [S.premClaims, S.aac3_26_110, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Premera Blue Cross Blue Shield of Alaska cover ABA?', a: 'Yes, under medical policy 3.01.510 for autism spectrum disorder, with Alaska’s AS 21.42.397 mandate (under 21, no visit limits) on fully insured plans.' },
      { q: 'Does Premera require prior authorization for ABA in Alaska?', a: 'Yes. ABA is on Premera Alaska’s prior-authorization list for group plans, and the individual-plan code list requires it for 97151, 97153–97156, 97158, 0362T and 0373T. Submit in Availity; phone requests are not accepted. FEP uses its own fax form.' },
      { q: 'What is Premera’s timely filing limit in Alaska?', a: 'No later than 365 calendar days from the date of service; for most plans claims received after 12 months deny with no member responsibility.' },
      { q: 'Can a BCBA licensed in another state treat a Premera member in Alaska?', a: 'Premera’s policy requires state licensure where a state licenses behavior analysts, and Alaska does: practicing in Alaska, including by telehealth to a child in Alaska, needs an Alaska license, apart from a temporary license of up to 30 days a year for someone licensed in a substantially equivalent state.' },
    ],
  },
};

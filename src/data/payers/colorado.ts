import type { PayerConfig } from './types.js';

export const coloradoPayers: Record<string, PayerConfig> = {
  'colorado-medicaid': {
    slug: 'colorado-medicaid',
    cardDesc: 'No autism-dx gate; FFS carve-out (RAEs don\'t run ABA); PAR on everything; no 97156.',
    assessmentPA: {
      value:
        'Required — ALL PBT services need a Prior Authorization Request (PAR) via Acentra\'s Atrezzo portal (ColoradoPAR.com), including the 97151 assessment. Proposed change (not yet adopted): on 10/9/2026 HCPF said it is considering shortening the 97151 authorization period from six months to 60 days, effective November 1, 2026. Comments were due to HCPF by October 15, 2026. As of October 25, 2026 HCPF had posted no adoption notice (its Provider News page lists only the 10/9/2026 proposal alert, and Provider News Issue 155 of 10/23/2026 is silent on it), and the PBT billing manual revised 10/12/2026 still says PARs “are approved for up to a six (6)-month period.”',
      status: 'verified',
      cites: [
        { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF; revised 10/12/2026: benefit definitions, member eligibility, co-treatment, InterQual for UM)', url: 'https://hcpf.colorado.gov/pbt-manual' },
        { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
        { title: 'HCPF Provider Alert — Proposed Change to Prior Authorization for CPT 97151 (10/9/2026)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Provider%20Alert_%20Proposed%20Change%20to%20Prior%20Authorization%20for%20CPT%2097151.pdf' },
        { title: 'HCPF — Provider News (Provider News & Resources issues and provider alerts by type)', url: 'https://hcpf.colorado.gov/provider-news' },
        { title: 'HCPF Provider News & Resources 10/23/2026, Issue 155', url: 'https://hcpf.colorado.gov/sites/g/files/lrnvjt4251/files/Provider%20News%20%26%20Resources%20-%2010-23-2026%20Issue%20155.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — same Acentra PAR process; approvals valid up to 6 months, reauth needs charts-and-graphs progress data (2023 Criteria). From 12/1/2026 PARs are reviewed against InterQual criteria, which replace the state-developed PBT criteria but not the documentation requirements (PBT manual rev. 10/12/2026)',
      status: 'verified',
      cites: [
        { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF; revised 10/12/2026: benefit definitions, member eligibility, co-treatment, InterQual for UM)', url: 'https://hcpf.colorado.gov/pbt-manual' },
        { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
        { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
      ],
    },
    dxRequired: {
      value: 'NO autism diagnosis required, but two HCPF documents now frame eligibility differently. The February 2023 Criteria for Behavioral Therapies need “one or more” of three things: a condition for which behavioral therapy is evidence-based, including ASD; an inability to participate in home, school or community activities, shown by a standardized assessment; or a safety risk. The PBT billing manual revised 10/12/2026 lists member-eligibility requirements that all apply. They include a documented qualifying diagnosis — “a neurodevelopmental condition … including but not limited to Autism Spectrum Disorder, developmental delay, intellectual disability, or another developmental or behavioral condition” — or, under age 3, being At Risk for Delay. They also include a Diagnostic Evaluation recommending PBT, and an impairment that keeps the child from age-appropriate activities or puts the child or others at risk. From 12/1/2026, InterQual replaces the state-developed PBT criteria for PAR review. For a child of 3 or older, plan on a documented developmental or behavioral diagnosis, though not necessarily autism.',
      status: 'verified',
      cites: [
        { title: 'Health First Colorado Criteria for Behavioral Therapies (Feb 2023)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Health%20First%20Colorado%20Criteria%20for%20Behavioral%20Therapies%20February%202023.pdf' },
        { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF; revised 10/12/2026: benefit definitions, member eligibility, co-treatment, InterQual for UM)', url: 'https://hcpf.colorado.gov/pbt-manual' },
      ],
    },
    payer: 'Health First Colorado (Colorado Medicaid)',
    state: 'CO', kind: 'state-medicaid',
    pill: 'Payer Guide · Health First Colorado',
    h1: 'Health First Colorado (Colorado Medicaid) ABA coverage: the intake guide.',
    metaTitle: 'Colorado Medicaid (Health First Colorado) ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Health First Colorado covers ABA under the Pediatric Behavioral Therapies EPSDT benefit — no autism diagnosis required, the statewide FFS carve-out (RAEs don\'t administer ABA), Acentra/Atrezzo PARs on every code, the missing 97156, and the October 2025 rate cuts.',
    intro: [
      'Health First Colorado covers ABA for members age 20 and younger through the Pediatric Behavioral Therapies (PBT) EPSDT benefit — and it breaks the usual state-Medicaid mold twice. First, no autism diagnosis is required: ASD is one of several qualifying conditions (developmental delay, intellectual disability or another developmental or behavioral condition also count, and under-3s may qualify as At Risk for Delay), so intake should never turn a family away for lacking an ASD evaluation. Second, ABA is a statewide fee-for-service carve-out: Colorado\'s four Regional Accountable Entities administer the capitated behavioral health benefit, but PBT is not in that capitation — every PAR goes to the state\'s UM vendor Acentra, and every claim goes to the state fiscal agent, regardless of the member\'s RAE. The trade-off is authorization rigor: everything, including the initial assessment, is prior-authorized, and 97156 parent-training does not exist as a billable code here.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — age 20 and younger, via EPSDT (Pediatric Behavioral Therapies benefit)' },
      { label: 'Autism dx required?', value: 'NO — ASD is one qualifying condition, not a gate; since the 10/12/2026 manual revision a documented developmental or behavioral diagnosis (or At Risk for Delay under 3) is listed among the eligibility requirements' },
      { label: 'Prior auth', value: 'Required on ALL services incl. the 97151 assessment — PAR via Acentra (Atrezzo portal)' },
      { label: 'Auth period', value: 'Up to 6 months per PAR; reauth needs charts-and-graphs progress data' },
      { label: 'Diagnosis recency', value: 'Signed comprehensive diagnostic evaluation within the previous 12 months' },
      { label: 'Rates (DOS 10/1/2025+)', value: '97153 $17.20 · 97155 $25.80 per 15-min unit; 97151 flat per assessment' },
      { label: '97156', value: 'NOT COVERED — no billable parent/caregiver guidance code in Colorado' },
      { label: 'Staff screening', value: 'RBT/ABAT certification is a billing condition (Section 8.281; deadline suspended — comply now) + annual background checks' },
    ],
    sections: [
      {
        h2: 'The carve-out: RAEs don\'t touch ABA',
        body: [
          'Under ACC Phase III (launched July 1, 2025), Colorado runs four Regional Accountable Entities — RMHP (Region 1), Northeast Health Partners (Region 2), Colorado Community Health Alliance (Region 3), and Colorado Access (Region 4) — that administer the capitated behavioral health benefit, plus the Elevate (Denver Health) physical-health MCO. PBT/ABA sits outside all of it: it is a fee-for-service EPSDT state-plan benefit, with PARs submitted to HCPF\'s statewide UM vendor Acentra (formerly Kepro) and claims paid by the state fiscal agent (Gainwell). Policy Memo PM 25-005 states it plainly — PBT is "reimbursed by Health First Colorado as fee-for-service." For intake, that means the member\'s RAE or MCO assignment is irrelevant to ABA: one PAR process, one fee schedule, one claims pipeline, statewide. Do not route ABA authorizations to a RAE, and do not expect a RAE to answer ABA UM questions.',
        ],
        cites: [
          { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
          { title: 'HCPF — Accountable Care Collaborative Phase III', url: 'https://hcpf.colorado.gov/accphaseIII' },
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
        ],
      },
      {
        h2: 'No autism diagnosis required — the three pathways',
        body: [
          'Colorado\'s Criteria for Behavioral Therapies (February 2023) require only ONE of three things: (1) a diagnosed condition for which behavioral therapy is evidence-based or evidence-informed — "including" ASD, but explicitly not limited to it; (2) an inability to adequately participate in home, school, or community activities because of a behavior or skill deficit, supported by a standardized assessment of maladaptive behaviors; or (3) a safety risk to self or others — self-injury, aggression, elopement, property destruction, stereotypy. Coverage runs on EPSDT medical necessity for members age 20 and younger. This is a genuine intake differentiator: a family waiting months for a diagnostic evaluation can still qualify through the functional-interference or safety pathway.',
          'The recency rule that does apply: the clinical documentation must include a signed comprehensive diagnostic evaluation performed within the previous twelve months by a qualified health care professional (the client\'s physician, nurse practitioner, or psychologist) — a 12-month clock on the evaluation, not an autism-diagnosis mandate. The ordering/referral can come from an MD/DO, PA, NP, or Licensed Psychologist (psychologists were added to the referrer list August 12, 2024).',
          'What changed on 10/12/2026: HCPF’s PBT billing manual added a “Member Eligibility” list whose items all apply. It requires a member under 21 enrolled in Health First Colorado who has “a documented qualifying diagnosis such as a neurodevelopmental condition … including but not limited to Autism Spectrum Disorder, developmental delay, intellectual disability, or another developmental or behavioral condition” or who is “under three (3) years of age and … At Risk for Delay.” The member also needs “a documented recommendation for PBT services resulting from a Diagnostic Evaluation” and an impairment that keeps the child from age-appropriate activities, or behavior that puts them or others at risk or interferes with learning, communication or community access. On top of that come a reasonable expectation of measurable improvement, a Treatment Plan, needs that are “not solely educational in nature,” and an approved PAR. Read together with the 2023 Criteria, autism is still not required, but the functional and safety routes now sit alongside a qualifying diagnosis rather than replacing it. From December 1, 2026, PARs “will be reviewed using the applicable InterQual® criteria,” which replace the state-developed PBT criteria but do not change benefit, rule or documentation requirements.',
        ],
        cites: [
          { title: 'Health First Colorado Criteria for Behavioral Therapies (Feb 2023)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Health%20First%20Colorado%20Criteria%20for%20Behavioral%20Therapies%20February%202023.pdf' },
          { title: 'Pediatric Behavioral Therapies Information for Providers (HCPF)', url: 'https://hcpf.colorado.gov/pediatric-behavioral-therapies-information-providers' },
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF; revised 10/12/2026)', url: 'https://hcpf.colorado.gov/pbt-manual' },
        ],
      },
      {
        h2: 'PAR mechanics: everything is prior-authorized',
        body: [
          'The PBT Billing Manual is blunt: "All PBT services must be pre-approved in a Prior Authorization Request (PAR) process" — including the 97151 assessment, which many states leave auth-free. PARs go to Acentra through the Atrezzo portal (ColoradoPAR.com) and must include the ordering practitioner\'s prescription or Plan of Care with a diagnosis (ICD-10 preferred), a standardized norm-referenced adaptive-behavior assessment (the state does not mandate a specific instrument — provider\'s choice, completed by the PBT provider), the referral, treatment history, and measurable goals; supporting assessment and progress notes must be no more than 60 days old at submission. Approved PARs run up to six months, so reauthorization is a twice-a-year event: each new PAR needs documented meaningful, measurable, functional improvement "confirmed through data, documented in charts and graphs, durable over time," plus a signed revised treatment plan showing generalization outside the treatment setting. Documentation must meet CASP minimum requirements, and denials have four paths — PAR Reconsideration (second review by a different physician), a new PAR with added information, peer-to-peer, or member appeal to the Office of Administrative Courts.',
          'PM 25-005 (effective April 15, 2025) added operational teeth worth designing intake around: Health First Colorado will no longer cover 40 hours/week of clinic-based PBT when the child has access to school hours, unless the district shows the child can\'t be served in a classroom — school IEP hour counts must be submitted with EPSDT requests, so capture the school picture at intake. Credential floors are explicit: RBT minimum for 97153, BCBA (or equivalent) minimum for 97155, and all PBT providers had to re-enroll as Provider Type 83 (clinic) or 84 (individual) by September 1, 2025. EVV (Electronic Visit Verification) is mandatory for PBT delivered in home or community settings — an operational burden many states don\'t impose on ABA — and the memo warns of recoupment on documentation failures (nap time and other-provider co-treatment time are not billable).',
          'Code set: the PBT manual’s “Allowable Procedure Coding” table lists 97153, 97154, 97155, 97158, 97151 and 97151 TJ, and nothing else. There is no 97152, 97156, 97157, 0362T or 0373T, and no HCPCS H-code (H0031, H0032, H2014, H2019) is a PBT code. Units go on the PAR per procedure code, and the modifiers on the PAR and the claim must match.',
        ],
        cites: [
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
          { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
        ],
      },
      {
        h2: 'Rates: a flat assessment, a missing code, and a mid-year cut',
        body: [
          'Colorado\'s fee schedule has three quirks intake and billing must both know. First, 97151 pays a FLAT amount per assessment — $866.88 on the July 1, 2026 schedule (v1.4; it was $882.78 before the October 2025 cut), billable once per 365 days — rather than per 15-minute unit (97151-TJ pays $39.61/unit on the same schedule, down from $40.24, set at 2 units per 365 days). Second, 97156 does not exist here: the family adaptive behavior treatment guidance code is absent from the PBT allowable-code table (97151, 97151-TJ, 97153, 97154, 97155, 97158 only) and has no rate — caregiver training is instead a required element woven into the treatment plan, not separately billable revenue. Third, rates were cut mid-year: Special Provider Bulletin B2500528 (September 2025, under Executive Order D 2025 014\'s budget shortfall) reduced PBT rates for dates of service on or after October 1, 2025 — 97153 $18.17 → $17.20 and 97155 $26.62 → $25.80 per 15-minute unit, with the group codes hit hardest: 97154 $11.51 → $8.81 (-23%) and 97158 $17.83 → $9.34 (-48%). There are no credential-tier modifiers — a single rate per code (TJ modifier only on 97151). As of this review, no restoration has landed: HCPF\'s July 1, 2026 fee schedule carries the identical post-cut PBT rates, unchanged from January and April 2026 — and HCPF’s 6/29/2026 Provider News (Issue 147) announced a new 2.0% across-the-board rate reduction under HB 26-1410 for dates of service from July 1, 2026. That reduction does not show in the PBT rows: the July 1, 2026 schedule (v1.4) lists the same PBT rates as January 2026 ($866.88 for 97151, $17.20 for 97153, $8.81 for 97154, $25.80 for 97155, $9.34 for 97158), so the 2.0% cut was not applied to PBT. HCPF’s news page no longer carries a written exemption notice, so confirm with HCPF before relying on the rates holding. Build revenue models on the post-October-2025 numbers, and treat group-based service lines with caution.',
        ],
        cites: [
          { title: 'FY2025-26 Health First Colorado Fee Schedule (July 2025 v1.4)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/01_CO_Fee%20Schedule_Health%20First%20Colorado_07012025%20v1.4.xlsx' },
          { title: 'Special Provider Bulletin B2500528 — Rate Reductions (Sep 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Special%20Provider%20Bulletin%20-%20Rate%20Reductions%20092025_B2500528_0.pdf' },
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
          { title: 'Health First Colorado Fee Schedule (July 1, 2026 v1.1) — PBT rates unchanged', url: 'https://hcpf.colorado.gov/provider-rates-fee-schedule' },
          { title: 'Health First Colorado Fee Schedule, July 1, 2026 v1.4 (xlsx) — PBT rates: 97151 $866.88 flat, 97151-TJ $39.61, 97153 $17.20, 97154 $8.81, 97155 $25.80, 97158 $9.34', url: 'https://hcpf.colorado.gov/sites/hcpf/files/01_CO_Fee%20Schedule_Health%20First%20Colorado_07012026%20v1.4.xlsx' },
          { title: 'HCPF Provider News & Resources 6/29/2026, Issue 147 — Rate Reductions (HB 26-1410 2.0% ATB from 7/1/2026)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Provider%20News%20%26%20Resources%20-%2006-29-2026%20Issue%20147%20_1.pdf' },
          { title: 'Health First Colorado Fee Schedule, January 2026 (v1.8) — PBT rows identical to July 2026', url: 'https://hcpf.colorado.gov/sites/hcpf/files/01_CO_Fee%20Schedule_Health%20First%20Colorado_01012026%20v1.8.xlsx' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'Colorado turned technician credentialing into a billing condition in late 2025. Emergency rule MSB 25-09-04-A created Section 8.281 (emergency effective October 10, 2025; finally adopted December 12, 2025) after federal audit findings that uncredentialed technicians had been reimbursed — preliminary estimates put the potential repayment to CMS as high as $59 million. The rule requires billing providers to ensure every technician they supervise holds an active credential: an RBT (high school diploma, 40-hour BACB-specification training, passed competency exam, ongoing supervision per BACB requirements) or the QABA alternative, an ABAT (age 18+, high school diploma, 40 hours of approved coursework plus 15+ supervised hours, a 5% quarterly supervision requirement, passed competency exam). One honesty note on timing: the compliance deadline is currently suspended — HCPF\'s December 22, 2025 notice withdrew the December 12 deadline (which had itself replaced August 31) and promised a new date, while urging providers to reach full compliance now. Colorado has no state registry or license for technicians, so the requirement rides directly on the national certifications — and the BACB\'s own application already requires a criminal background check plus an abuse-registry check within 180 days of applying (the BACB does not require fingerprinting). For hiring pipelines, HB26-1425 (signed June 2, 2026) adds a one-time 45-day pre-certification billing window: Medicaid must reimburse for a not-yet-certified technician for at least 45 days while certification is pursued, but only after the tech clears a name-based judicial record check, completes all certification training, and completes abuse-and-neglect reporting training — the 45-day clock starts when those are done, the agency must submit quarterly technician rosters, and reimbursement requests must stop if certification isn\'t in hand by day 45. The law also protects titles: only techs holding a current, valid credential may be called "Registered Behavior Technician."',
          'Background screening now runs on three layers. Agency layer: Section 8.281.4 requires billing providers to complete ANNUAL background checks on every service provider they supervise — an ongoing employer obligation, not a hire-once event. Enrollment layer: HCPF\'s standard 42 CFR 455.434 screening imposes fingerprint-based checks on provider types designated high categorical risk and on any person with a 5%+ ownership or control interest in such a provider (the CY2026 federal institutional application fee is $750) — HCPF’s provider-enrollment page (checked 10/18/2026) now lists the provider types it designates high categorical risk: doulas, DME suppliers, home health agencies, hospices, lactation providers, skilled nursing facilities, state-plan personal care agencies, certain opioid treatment providers, some HCBS services and NEMT. Behavioral Therapy Clinics (Type 83) and Behavioral Therapists (Type 84) are not on that list, so enrollment-level fingerprinting should not apply to a PBT agency. The page says that only high-risk providers and their owners must comply. Facility layer, center-based programs only: HB26-1425 makes ABA clinics CDHS-licensed day treatment facilities — license applications are due on or before August 1, 2026, and operating unlicensed becomes illegal August 1, 2027 — and the CDHS regime requires fingerprint-based CBI-plus-FBI checks on every applicant, owner, employee, newly hired employee, licensee, and adult 18+ residing in the clinic, screened against the C.R.S. 26-6-905(8) disqualifying offenses, plus a TRAILS check for confirmed child abuse or neglect findings; every new hire triggers a fresh investigation (with a portability exception for commonly owned clinics on a central records system). ABA delivered in homes, schools, or community settings is exempt from clinic licensure (C.R.S. 26-6-904(1)(e)), so this regime binds center-based operations only.',
          'On the supervisor side, Colorado has no behavior analyst license in force today — Medicaid qualifies billing providers through the Behavioral Therapy Provider Attestation (rev. September 2025), whose four tiers run from licensed doctoral clinicians down to BCBA/QASP certification, and Section 8.281.4 requires an approved attestation plus a clean record (no sanctions or discipline from the applicable licensing board or credentialing body), with asynchronous supervision explicitly non-covered. Under HB26-1425\'s Medicaid provisions, a reimbursable RBT must work under the supervision of a licensed psychologist, BCBA, BCBA-D, or BCaBA, and Section 8.281 imports the BACB floor — supervision on a minimum of 5% of service hours each calendar month — as a Medicaid condition. The licensure horizon: on July 1, 2028, mandatory state licensure arrives under a new Colorado Behavior Analyst Licensing Board in DORA — Licensed Behavior Analysts (BCBA, BCBA-D, or QBA certification plus a fingerprint-based CBI/FBI check at the applicant\'s cost) and Licensed Assistant Behavior Analysts (BCaBA or QASP-S, practicing only under LBA supervision) — with unlicensed practice a class 2 misdemeanor. The supervision ratio is left to board rulemaking (no numeric caseload cap in statute yet), so build the 2028 conversion into your credentialing roadmap now.',
        ],
        cites: [
          { title: 'HCPF Emergency Rule MSB 25-09-04-A — Section 8.281 (Oct 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Doc%2009%20MSB%2025-09-04-Av1%20Emergency%20-%20Oct%202025.pdf' },
          { title: 'HCPF Compliance Update — RBT Certification Requirement (Dec 22, 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Compliance%20Update%20%E2%80%93%20Registered%20Behavior%20Technician%20(RBT)%20Certification%20Requirement%20-%2012-22-2025.pdf' },
          { title: 'HB26-1425 — Applied Behavior Analysis Services (enacted bill text)', url: 'https://leg.colorado.gov/bill_files/116474/download' },
          { title: 'BACB RBT Handbook (updated 06/2026)', url: 'https://www.bacb.com/rbt-handbook' },
          { title: 'HCPF Provider Enrollment (fingerprint background check requirements & CY2026 fee)', url: 'https://hcpf.colorado.gov/provider-enrollment' },
        ],
      },
      {
        h2: 'Is Health First Colorado\'s ABA network open, and how do providers join?',
        body: [
          'There is no plan network to get into. Pediatric Behavioral Therapies are carved out to fee-for-service, so a provider enrolls once with Health First Colorado and bills the state for any eligible member, whatever their RAE. The PBT billing manual (revised July 15, 2026) sets the route: "Organizations with a Tax ID must enroll as Provider Type 83 - Behavioral Therapy Clinic," and the clinicians who may affiliate with that clinic are doctoral psychologists (Provider Type 37), licensed behavioral health clinicians (Type 38) and behavioral therapists (Type 84). Providers still enrolled as Type 25 for PBT "must disenroll and start a new application for type 83." Claims carry both a rendering and a billing NPI.',
          'Before billing, Section 8.281 requires the agency to keep its technicians certified (RBT, or ABAT with 5% quarterly supervision) and background-checked annually, and every service still needs an approved PAR from Acentra. The manual does not describe any enrollment cap or moratorium for Type 83; confirm current enrollment status with HCPF provider enrollment if you are applying now.',
        ],
        cites: [
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF; revisions through 7/15/2026)', url: 'https://hcpf.colorado.gov/pbt-manual' },
          { title: 'HCPF Emergency Rule MSB 25-09-04-A — Section 8.281 (Oct 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Doc%2009%20MSB%2025-09-04-Av1%20Emergency%20-%20Oct%202025.pdf' },
        ],
      },
      {
        h2: 'Can an out-of-state BCBA treat a Colorado member, including by telehealth?',
        body: [
          'Colorado does not license behavior analysts yet. HB26-1425 creates a Colorado Behavior Analyst Licensing Board in DORA, and “on and after July 1, 2028, an individual is prohibited from engaging in or offering the practice of applied behavior analysis unless the individual is licensed by the board”; unlicensed practice after that date is a class 2 misdemeanor. Until then there is no Colorado behavior analyst license to hold, and BACB certification is the operative credential.',
          'Health First Colorado enrolls out-of-state providers “under the same rules and regulations applied to Colorado providers,” but pays for out-of-state services only in listed situations: residents of recognized Colorado border localities, members living in other states under special circumstances such as foster care, emergencies, care needed because returning to Colorado would endanger the member’s health, and “Services that are unavailable in Colorado” (the last two prior authorized). The manual does not address an out-of-state therapist delivering PBT by telemedicine to a member located in Colorado, so ask HCPF provider enrollment before relying on it.',
        ],
        cites: [
          { title: 'Colorado General Assembly — HB26-1425 (signed act): Colorado Behavior Analyst Licensing Board; licensure required from July 1, 2028', url: 'https://leg.colorado.gov/bills/HB26-1425' },
          { title: 'Health First Colorado — General Provider Information manual (Out-of-State Providers; Out-of-State Benefits)', url: 'https://hcpf.colorado.gov/gen-info-manual' },
        ],
      },
      {
        h2: 'Claims: timely filing, resubmission and appeals',
        body: [
          'Health First Colorado’s filing limit is 365 days: “Effective June 1, 2018, timely filing for Health First Colorado claim submission is 365 days from the date of service,” and a claim past that needs a timely filing waiver. An approved PAR is not a waiver — waiting for prior authorization or for the Department “is not an acceptable reason for late filing.” Once the original period has run out, a claim stays alive only if each re-bill or adjustment is received within 60 days of the last action, with the previous ICN entered on the claim. Medicare-denied services must be filed within 365 days of the date of service or 120 days of the Medicare denial, whichever is longer.',
          'Disputes run in two steps. After exhausting the fiscal agent’s re-bill and adjustment routes, a provider files a Request for Reconsideration with the fiscal agent, within 60 days of the last action if initial timely filing has expired; if that fails, the provider may file a written appeal with the Office of Administrative Courts.',
          'Secondary claims get no extension when commercial insurance is slow. Health First Colorado pays last, but HCPF tells providers: “Providers should not delay Health First Colorado claims submission where there is potential TPL. The Health First Colorado program requires that claims be submitted within 365 days from the date of service.” Claims should not reach the fiscal agent “later than 365 days from the date of service” while a third party is still processing them. Enter the third-party payment or denial on the claim and keep the EOB on file; attach it only to a paper claim. If the other insurer pays after Health First Colorado has, refund the Health First Colorado payment.',
          'Payment cycle: “Each Friday, the weekly payment cycle prepares claims for payment, processes the payment, updates the provider’s Accounts Receivable (AR), if applicable, posts Electronic Funds Transfer (EFT) the next week and produces a RA.” Apart from holiday delays of one or two days, payment arrives at the start of the following week. When EFT is interrupted, HCPF pays by paper State warrant.',
          'Taxonomy: neither the PBT billing manual nor the General Provider Information Manual requires a taxonomy code on the PBT claim. What they require are the rendering and billing NPIs, the PAR number, and a valid OPR NPI in field 17b.',
        ],
        cites: [
          { title: 'HCPF — General Provider Information Manual (Timely Filing; Requests for Reconsideration)', url: 'https://hcpf.colorado.gov/gen-info-manual' },
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF; revised 10/12/2026)', url: 'https://hcpf.colorado.gov/pbt-manual' },
        ],
      },
    ],
    collect: [
      { title: 'Qualifying condition and functional impact', desc: 'A documented developmental or behavioral diagnosis (ASD not required; At Risk for Delay under 3), the Diagnostic Evaluation recommending PBT, and evidence of functional interference or safety risk (standardized assessment of maladaptive behaviors). The 10/12/2026 manual lists these together, so collect all of them rather than relying on one pathway.' },
      { title: 'Comprehensive evaluation within 12 months', desc: 'A signed diagnostic evaluation by the child\'s physician, NP, or psychologist — the 12-month recency clock is the real document gate.' },
      { title: 'Referral source', desc: 'MD/DO, PA, NP, or Licensed Psychologist — the prescription/Plan of Care anchors the PAR.' },
      { title: 'School enrollment and IEP hours', desc: 'PM 25-005 requires school hour counts with EPSDT requests; 40 hrs/week clinic-based PBT won\'t be approved when school is available.' },
      { title: 'Home/community service settings', desc: 'EVV is mandatory outside the clinic — capture where sessions will happen so operations can stand up visit verification.' },
    ],
    sources: [
      { title: 'Health First Colorado Fee Schedule, January 2026 (v1.8) — PBT rows identical to July 2026', url: 'https://hcpf.colorado.gov/sites/hcpf/files/01_CO_Fee%20Schedule_Health%20First%20Colorado_01012026%20v1.8.xlsx' },
      { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
      { title: 'Health First Colorado Criteria for Behavioral Therapies (Feb 2023)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Health%20First%20Colorado%20Criteria%20for%20Behavioral%20Therapies%20February%202023.pdf' },
      { title: 'Pediatric Behavioral Therapies Information for Providers (HCPF)', url: 'https://hcpf.colorado.gov/pediatric-behavioral-therapies-information-providers' },
      { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
      { title: 'FY2025-26 Health First Colorado Fee Schedule (July 2025 v1.4)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/01_CO_Fee%20Schedule_Health%20First%20Colorado_07012025%20v1.4.xlsx' },
      { title: 'Special Provider Bulletin B2500528 — Rate Reductions (Sep 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Special%20Provider%20Bulletin%20-%20Rate%20Reductions%20092025_B2500528_0.pdf' },
      { title: 'HCPF — Accountable Care Collaborative Phase III', url: 'https://hcpf.colorado.gov/accphaseIII' },
      { title: 'HCPF Emergency Rule MSB 25-09-04-A — Section 8.281 (Oct 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Doc%2009%20MSB%2025-09-04-Av1%20Emergency%20-%20Oct%202025.pdf' },
      { title: 'HCPF Compliance Update — RBT Certification Requirement (Dec 22, 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Compliance%20Update%20%E2%80%93%20Registered%20Behavior%20Technician%20(RBT)%20Certification%20Requirement%20-%2012-22-2025.pdf' },
      { title: 'HB26-1425 — Applied Behavior Analysis Services (enacted bill text)', url: 'https://leg.colorado.gov/bill_files/116474/download' },
      { title: 'BACB RBT Handbook (updated 06/2026)', url: 'https://www.bacb.com/rbt-handbook' },
      { title: 'HCPF Provider Enrollment (fingerprint background check requirements & CY2026 fee)', url: 'https://hcpf.colorado.gov/provider-enrollment' },
      { title: 'Health First Colorado Fee Schedule (July 1, 2026 v1.1) — PBT rates unchanged', url: 'https://hcpf.colorado.gov/provider-rates-fee-schedule' },
      { title: 'Health First Colorado Fee Schedule, July 1, 2026 v1.3 (xlsx) \u2014 PBT rates', url: 'https://hcpf.colorado.gov/sites/hcpf/files/01_CO_Fee%20Schedule_Health%20First%20Colorado_07012026%20v1.3.xlsx' },
      { title: 'C.R.S. \u00a7 10-16-104 (FindLaw) \u2014 autism mandate for commercial plans', url: 'https://codes.findlaw.com/co/title-10-insurance/co-rev-st-sect-10-16-104/' },
      { title: 'HCPF Provider News & Resources 6/29/2026, Issue 147 — Rate Reductions (HB 26-1410)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Provider%20News%20%26%20Resources%20-%2006-29-2026%20Issue%20147%20_1.pdf' },
      { title: 'HCPF — Telemedicine Provider Information (allowed procedure codes, POS rules)', url: 'https://hcpf.colorado.gov/telemedicine-provider-information' },
      { title: 'Colorado General Assembly — HB26-1425 (signed act): Colorado Behavior Analyst Licensing Board; licensure required from July 1, 2028', url: 'https://leg.colorado.gov/bills/HB26-1425' },
      { title: 'HCPF — Provider News & Resources (issue archive + monthly provider bulletins)', url: 'https://hcpf.colorado.gov/provider-news' },
      { title: 'HCPF — Provider Bulletins (index of Health First Colorado monthly bulletins)', url: 'https://hcpf.colorado.gov/bulletins' },
      { title: 'HCPF Provider News & Resources 10/23/2026, Issue 155', url: 'https://hcpf.colorado.gov/sites/g/files/lrnvjt4251/files/Provider%20News%20%26%20Resources%20-%2010-23-2026%20Issue%20155.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Age 20 and younger. The Pediatric Behavioral Therapies benefit is available to members who "are 20 years old and younger" and meet EPSDT medical-necessity criteria; Section 8.281.3.A sets the same line as "under the age of 21." There is no lower bound — children under three qualify on being "at risk for delay" from biological or environmental factors, without a named diagnosed condition.',
        status: 'verified',
        cites: [
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
          { title: 'HCPF Emergency Rule MSB 25-09-04-A — Section 8.281 (Oct 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Doc%2009%20MSB%2025-09-04-Av1%20Emergency%20-%20Oct%202025.pdf' },
        ],
      },
      dxRecency: {
        value:
          'Twelve months, on the evaluation rather than on a diagnosis. The clinical documentation must include "a signed comprehensive diagnostic evaluation performed within the previous twelve (12) months by a qualified health care professional... who prescribes and/or recommends behavioral therapy services," together with the name, date and significant results of the completed and signed screening questionnaire. Separately, any assessment or progress notes submitted with a PAR "must not be more than 60 days prior to submission of PAR request."',
        status: 'verified',
        cites: [
          { title: 'Health First Colorado Criteria for Behavioral Therapies (Feb 2023)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Health%20First%20Colorado%20Criteria%20for%20Behavioral%20Therapies%20February%202023.pdf' },
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
        ],
      },
      diagnosingProviders: {
        value:
          'No autism diagnosis is required at all. The 2023 Criteria open the benefit on any one of three pathways, while the PBT manual revised 10/12/2026 lists a documented developmental or behavioral diagnosis (ASD, developmental delay, intellectual disability or another condition), or At Risk for Delay under 3, among its eligibility requirements. The three 2023 pathways are (a diagnosed condition for which behavioral therapy is evidence-based or evidence-informed, "including autism spectrum disorder"; inability to adequately participate in home, school or community activities; or a safety risk to self or others). Where an evaluation is performed, the Criteria name "a qualified health care professional such as the client\'s physician, nurse practitioner, or psychologist," and Section 8.281.2.E adds that a diagnostic evaluation "may be performed by a psychologist, developmental pediatrician, neurologist, or other credentialed clinician."',
        status: 'verified',
        cites: [
          { title: 'Health First Colorado Criteria for Behavioral Therapies (Feb 2023)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Health%20First%20Colorado%20Criteria%20for%20Behavioral%20Therapies%20February%202023.pdf' },
          { title: 'HCPF Emergency Rule MSB 25-09-04-A — Section 8.281 (Oct 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Doc%2009%20MSB%2025-09-04-Av1%20Emergency%20-%20Oct%202025.pdf' },
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF; revised 10/12/2026: Member Eligibility)', url: 'https://hcpf.colorado.gov/pbt-manual' },
        ],
      },
      diagnosticTools: {
        value:
          'No single instrument is mandated, but the rule names the expected ones: standardized diagnostic tools "such as the Autism Diagnostic Observation Schedule (ADOS-2), Autism Diagnostic Interview-Revised (ADI-R)"; developmental, cognitive and adaptive functioning measures "(e.g., Vineland, cognitive/IQ testing)"; and a review of medical, educational and psychosocial history. The functional-interference pathway additionally requires "a standardized assessment of maladaptive behaviors," and the PAR requires a standardized norm-referenced adaptive-behavior assessment completed by the PBT provider — instrument choice is the provider\'s.',
        status: 'verified',
        cites: [
          { title: 'HCPF Emergency Rule MSB 25-09-04-A — Section 8.281 (Oct 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Doc%2009%20MSB%2025-09-04-Av1%20Emergency%20-%20Oct%202025.pdf' },
          { title: 'Health First Colorado Criteria for Behavioral Therapies (Feb 2023)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Health%20First%20Colorado%20Criteria%20for%20Behavioral%20Therapies%20February%202023.pdf' },
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
        ],
      },
      referral: {
        value:
          'Required, and from a short list. "All Outpatient therapy services must have a written order/prescription/referral by any of the following: Physician (M.D. or D.O.); Physician Assistant; Nurse Practitioner; Licensed Psychologist." Licensed Psychologist was added on 8/12/2024 to match the criteria and the federal ordering/prescribing/referring rules. What the order must contain: the PAR must include a "legibly written and signed ordering practitioner prescription or approved Plan of Care" with the diagnosis (preferably ICD-10), the reason for therapy, sessions per week, total duration, treatment history, measurable goals and medical-necessity documentation. How families usually get one: the Criteria expect "a signed comprehensive diagnostic evaluation performed within the previous twelve (12) months by a qualified health care professional such as the client\'s physician, nurse practitioner, or psychologist who prescribes and/or recommends behavioral therapy services." So the diagnosing evaluation, or a separate signed prescription from one of the listed practitioners, serves as the order. The ordering practitioner must be enrolled. HCPF\'s OPR notice says federal rules require "the National Provider Identifier (NPI) of the individual practitioner who ordered the service, and that practitioner must be enrolled in the state Medicaid program (42 CFR §§455.410 and 455.440)." Since the 6/4/2026 manual revision, CMS-1500 field 17 is "Required" and "Must contain a valid OPR NPI in Field 17.b." The manual sets no separate expiry on the order itself and HCPF publishes no order template. The order travels with each PAR, so it has to be in hand before the first service: "Do not render or bill for services until the PAR has been processed."',
        status: 'verified',
        cites: [
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF; revisions through 7/15/2026)', url: 'https://hcpf.colorado.gov/pbt-manual' },
          { title: 'HCPF — Ordering, Prescribing, Referring (OPR) for Pediatric Behavioral Therapy informational stakeholder meeting notice (3/19/2026)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Ordering%2C%20Prescribing%2C%20Referring%20%28OPR%29%20for%20Pediatric%20Behavioral%20Therapy%20%28PBT%29%20Informational%20Stakeholder%20Meeting%20-%2003-19-2026.pdf' },
          { title: 'Health First Colorado Criteria for Behavioral Therapies (Feb 2023)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Health%20First%20Colorado%20Criteria%20for%20Behavioral%20Therapies%20February%202023.pdf' },
        ],
      },
      telehealth: {
        value:
          'Covered, on any modality. "Pediatric Behavioral Therapists are covered under the telemedicine policy," and "Home Health Agency services and therapies, Hospice, and Pediatric Behavioral Treatment may be provided via any telemedicine modality" — unlike outpatient PT/OT/speech, which must have interactive audio-visual. Every PBT code is on the allowable-telemedicine list: 97151, 97153, 97154, 97155 and 97158. POS 02 is on the PBT allowed-place-of-service table, and the telemedicine billing page directs every rendering provider to bill “Place of Service code 02 or 10 and the appropriate modifiers FQ, FR, 93 or 95” — 95 for real-time audio-video, 93 or FQ for audio-only, FR when a supervising practitioner is present by two-way audio-video. GT is not the PBT modifier: Colorado limits GT to a listed set of provider types (physicians, clinics, psychologists, FQHCs, RHCs and similar), which does not include the Type 83/84 PBT enrollments. Two conditions travel with it: "the use of telecommunications equipment for delivery of services does not change prior authorization requirements," and before the first telemedicine treatment the provider must furnish the member (or legal representative) signed written disclosure statements, after which the initial face-to-face requirement may be waived.',
        status: 'verified',
        cites: [
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
          { title: 'HCPF — Telemedicine Provider Information (allowed procedure codes, POS rules)', url: 'https://hcpf.colorado.gov/telemedicine-provider-information' },
        ],
      },
      authTurnaround: {
        value:
          'Health First Colorado (Acentra, ColoradoPAR): since January 2026 the standard PAR turnaround is seven (7) calendar days and expedited PARs are decided within three (3) calendar days — "PARs submitted as Expedited: no pends or requests for information will be allowed," so the expedited file must be complete at submission. On standard PARs, pends for additional information were cut "from 10 business days to seven (7) calendar days," only one pend is allowed ("all information requested in the initial pend must be supplied, or the PAR will result in a technical denial"), and "All PARs, including pends, must be processed within 21 calendar days of initial submission." For renewals: PARs are approved "for up to a six (6)-month period," every PBT service (97151 assessment included) must be approved "prior to rendering the services," and assessment or progress notes must be no more than 60 days old when the PAR is submitted — so build the next PAR inside that 60-day window and before the current one ends.',
        status: 'verified',
        cites: [
          { title: 'Health First Colorado Provider Bulletin B2600534 (Feb 2026) — Interoperability changes beginning January 2026', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Bulletin%200226_B2600534_0.pdf' },
          { title: 'HCPF — Pediatric Behavioral Therapies billing manual', url: 'https://hcpf.colorado.gov/pbt-manual' },
          { title: '42 CFR 440.230(e) — Medicaid FFS prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-440.230' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Health First Colorado pays last: it "is called the payer of last resort because Federal regulations require that all available health insurance benefits be used before Health First Colorado considers payment," and "claims for members with health insurance resources are denied when the claim does not show insurance payment or denial information." Report the TPL payment or denial and the TPL EOB date on each claim (the EOB itself need not be attached every time); keep the commercial EOBs for seven years. A member with commercial managed-care coverage "must obtain MCO benefit services from the MCO" (the manual: "Health First Colorado claims for members who have commercial managed care coverage are denied"), so work inside the commercial plan\'s network and rules; and invalid primary denials ("No denial reason identified," "Duplicate claim," "Insufficient information for processing," "Claim in process") do not open the Medicaid claim. When a commercial benefit limit is exhausted, claims beyond it still go to the TPL first. The PAR is still needed: "Approval of a PAR does not guarantee Health First Colorado payment" and payment also requires "third party resources payment pursued" — the PBT manual gives no exemption from the PAR when Medicaid is secondary. Unreported coverage found later leads to retraction of paid claims. TRICARE and CHAMPVA both pay ahead of Medicaid: TRICARE rules state "Medicaid is not a double coverage plan. In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer," and CHAMPVA "assumes primary payer status" over Medicaid.',
        status: 'verified',
        cites: [
          { title: 'HCPF — General Provider Information Manual (Third-Party Liability / Coordination of Benefits)', url: 'https://hcpf.colorado.gov/gen-info-manual' },
          { title: 'HCPF — Pediatric Behavioral Therapies billing manual', url: 'https://hcpf.colorado.gov/pbt-manual' },
          { title: '42 CFR 433.139 — Medicaid third-party liability, payment of claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.272 — CHAMPVA benefit limitations; Medicaid exception (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.272' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Three layers, and one of them is a number. Code-level: "A Registered Behavior Technician (RBT) is the minimum qualification required to administer ABA services... under CPT code 97153," and "a Board-Certified Behavior Analyst (BCBA), or equivalent, is the minimum qualification required to administer services under CPT code 97155." Rule-level: Section 8.281.4.A.6 requires billing providers to ensure RBTs "receive ongoing supervision per the requirements of the BACB" and that ABATs "adhere to a 5% quarterly supervision requirement," plus annual background checks on every service provider they supervise and no sanctions from the applicable board. Exclusion-level: "asynchronous supervision or reviews" are expressly non-covered, as are "services not delivered or supervised by a qualified provider." Neither the PBT billing manual nor its co-treatment matrix caps how many technicians one BCBA may supervise.',
        status: 'verified',
        cites: [
          { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
          { title: 'HCPF Emergency Rule MSB 25-09-04-A — Section 8.281 (Oct 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Doc%2009%20MSB%2025-09-04-Av1%20Emergency%20-%20Oct%202025.pdf' },
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF; revised 10/12/2026)', url: 'https://hcpf.colorado.gov/pbt-manual' },
        ],
      },
      concurrentBilling: {
        value:
          'Colorado publishes no rule on billing 97153 and 97155 for the same clock time. What it does publish is cross-discipline co-treatment: co-treatment between two outpatient therapists is covered only where "a valid clinical rationale for providing co-treatment must be present" and "each provider must have an approved plan of care which includes co-treatment," with notes describing the additional services, identifying the co-treatment providers and justifying the arrangement. The hard edge is the billing rule: "time while members are napping is not covered or billable time. Time while the other modality is treating is also not billable," and claims for either are subject to recoupment. The billing manual\'s co-treatment matrix says the same thing from the other side — "providers will only bill for the time interacting with the member, and not the total time in the room." The 10/12/2026 manual revision adds the rule for any co-treatment: it is reimbursable only when each service is separately medically necessary, addresses distinct or coordinated goals, “requires the active participation of each rendering provider” and is documented as not duplicative. Providers must record the actual time of each service and the total billable time, and “may not separately round each activity, intervention, or portion of the session to a 15-minute unit.” The matrix cell for one Pediatric Behavioral Therapist alongside another reads “Allowable with clear reason for safety or medical necessity in PAR and with approval only.” That is the closest published rule to two PBT providers billing the same session, so justify any overlap of 97155 with 97153 in the PAR.',
        status: 'unverified',
        cites: [
          { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF; revised 10/12/2026, Co-Treatment Matrix)', url: 'https://hcpf.colorado.gov/pbt-manual' },
        ],
        verifyVia:
          'ColoradoPAR (Acentra/Atrezzo) and the HCPF PBT policy contact named on PM 25-005 — ask specifically whether 97155 is payable alongside 97153 when the analyst is directing the technician with the member present.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Colorado\'s published ceilings are per-year, not per-day. "Code 97151 is a flat rate, and one (1) unit is to be billed once every 365 days. Code 97151TJ is set at two (2) units that can be billed once every 365 days." Section 8.281.6 limits initial pediatric therapy assessments and periodic reassessments to one session per provider every 12 calendar months each, with additional sessions only where the Department authorises them as medically necessary. No per-day unit ceiling is published for 97153 or 97155 — the operative ceilings are the units approved on the PAR and PM 25-005\'s rule that 40 hours a week of clinic-based PBT is no longer covered when the child has access to school hours unless the district shows the child cannot be served in a classroom.',
        status: 'verified',
        cites: [
          { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
          { title: 'HCPF Emergency Rule MSB 25-09-04-A — Section 8.281 (Oct 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Doc%2009%20MSB%2025-09-04-Av1%20Emergency%20-%20Oct%202025.pdf' },
        ],
      },
      noteSignature: {
        value:
          'The service provider signs, personally, before the claim goes out. "Each entry in a medical record must be signed and dated by the individual providing the service or good. Stamped signatures are not acceptable. Printed or displayed electronic records must note that signatures and dates have been applied electronically (10 CCR 2505-10 § 8.130.2.G)," and "providers are required to ensure that all required signatures are obtained before any claims are submitted for payment." Session notes "are required to contain detailed descriptions of therapy sessions... basic patient information, a narrative summary of the treatment provided, and a detailed summary of behavior targets, intervention types, and other relevant data," and ABA documentation must meet CASP minimum requirements. On the claim form itself, initials, typed or computer-printed names and "signature on file" are all unacceptable in field 31.',
        status: 'verified',
        cites: [
          { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
        ],
      },
      placeOfService: {
        value:
          'Five POS codes are allowed: 02 telemedicine, 03 school, 11 office, 12 home and 99 other/community-based (the rule permits a "Community" location and 99 is the closest code). EVV is mandatory for PBT delivered in the home or the community, capturing member ID, the individual providing the service, start and end times, the service, the date and the location. School is payable — POS 03 has been allowed for all fee-for-service benefits since May 3, 2024, and PM 25-005 confirms "Health First Colorado covers medically necessary PBT services in a school setting" — but community providers must follow school-district policy, and therapies provided under a member\'s IEP and billed to the School Health Services Program "are not separately reimbursable." Section 8.281.5.B adds the clinical test: services "must be delivered in a clinically appropriate setting for the behavior being treated." One tension worth knowing before a PAR: the February 2023 Criteria\'s exclusion list still names "school-based services" among non-covered items.',
        status: 'verified',
        cites: [
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
          { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
          { title: 'HCPF Emergency Rule MSB 25-09-04-A — Section 8.281 (Oct 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Doc%2009%20MSB%2025-09-04-Av1%20Emergency%20-%20Oct%202025.pdf' },
          { title: 'Health First Colorado Criteria for Behavioral Therapies (Feb 2023)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Health%20First%20Colorado%20Criteria%20for%20Behavioral%20Therapies%20February%202023.pdf' },
        ],
      },
      billAsProvider: {
        value:
          'Both NPIs, and the enrollment has to match. "PBT services must be billed using the 837 Professional (837P) transaction or CMS 1500 form, which requires using rendering and billing National Provider IDs (NPIs)." Organisations with a Tax ID enrol as Provider Type 83 (Behavioral Therapy Clinic); the individuals who may affiliate to it are Provider Type 37 (doctoral psychologist), 38 (licensed behavioral health clinician) and 84 (behavioral therapist), and all three must be affiliated with the Type 83. Providers formerly enrolled as Type 24/25 had to convert by September 1, 2025. The ordering practitioner\'s OPR NPI goes in field 17b, and field 32 carries the service facility.',
        status: 'verified',
        cites: [
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
          { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Health First Colorado accept H0031 or other H-codes for ABA?', a: 'No. Pediatric Behavioral Therapies bills only 97151 (and 97151 TJ), 97153, 97154, 97155 and 97158, the codes in the PBT manual’s allowable procedure table. No HCPCS H-code is on it, and 97152, 97156 and 97157 are not billable either.' },
      { q: 'Does Colorado Medicaid require an autism diagnosis for ABA?', a: 'No. ASD is one qualifying condition among several. The PBT billing manual (revised 10/12/2026) accepts a documented neurodevelopmental, developmental or behavioral diagnosis, such as autism, developmental delay or intellectual disability, or At Risk for Delay for a child under 3. It also needs a Diagnostic Evaluation recommending PBT and a functional impact or safety risk. The 2023 Criteria also let functional interference or safety risk qualify a child on their own, and InterQual replaces those criteria for PARs from 12/1/2026. A signed comprehensive evaluation within the past 12 months is still required.' },
      { q: 'Do I submit Colorado ABA authorizations to the member\'s RAE?', a: 'No — PBT/ABA is a fee-for-service carve-out. Regardless of RAE region (RMHP, NHP, CCHA, or Colorado Access) or the Elevate MCO, all PARs go to the state UM vendor Acentra through the Atrezzo portal (ColoradoPAR.com), and claims go to the state fiscal agent.' },
      { q: 'Does the ABA assessment need prior authorization in Colorado?', a: 'Yes — unlike many states, ALL PBT services must be pre-approved in a PAR, including the 97151 assessment. Approved PARs run up to 6 months, so plan for reauthorization twice a year with charts-and-graphs progress data.' },
      { q: 'Can I bill 97156 parent training to Health First Colorado?', a: 'No — 97156 is not in the PBT allowable-code table and has no rate on the fee schedule. Caregiver training is a required element of the treatment plan, not a separately billable service.' },
      { q: 'What does Colorado Medicaid pay for ABA?', a: 'For dates of service on or after 10/1/2025: 97153 pays $17.20 and 97155 pays $25.80 per 15-minute unit (single rate per code, no credential tiers); 97151 pays a flat $866.88 per assessment (down from $882.78 before the October cut), once per 365 days, and 97151-TJ pays $39.61 per unit. Group codes 97154/97158 were cut 23-48% in the same bulletin. HCPF\'s July 1, 2026 v1.3 fee schedule carries exactly these PBT rates, so they are the rates in force for FY2026-27.' },
      { q: 'Does Colorado require an autism diagnosis for ABA?', a: 'It depends on the payer. Health First Colorado (Medicaid) does not: its Criteria for Behavioral Therapies open the benefit on a qualifying diagnosed condition (ASD is one, not the only one), functional interference with home, school or community participation, or a safety risk \u2014 though a signed comprehensive diagnostic evaluation from the previous 12 months is still required. Commercial plans are the opposite: the state mandate, C.R.S. \u00a7 10-16-104(1.4), is a mandate for the treatment of autism spectrum disorders, and the carriers\' ABA policies (Aetna, Cigna, UnitedHealthcare/Optum, Anthem) cover ABA for an ASD diagnosis \u2014 see each carrier guide\'s diagnosis field.' },
      { q: 'Which ABA payer contract pays best in Colorado?', a: 'Only Medicaid publishes its ABA rates, so only Medicaid can be compared on paper. Health First Colorado pays one statewide rate per code with no credential tiers: 97153 $17.20 and 97155 $25.80 per 15-minute unit, 97151 a flat $866.88 per assessment, group codes 97154 $8.81 and 97158 $9.34, and nothing at all for 97156 (July 1, 2026 v1.3 fee schedule). Commercial ABA rates in Colorado (Aetna, Cigna, UnitedHealthcare/Optum, Anthem) are not published; they are negotiated in each participating-provider agreement, so the answer for a commercial contract is whatever you negotiate, benchmarked against the Medicaid schedule. The non-rate terms differ too: Medicaid prior-authorizes every code including 97151, requires EVV in home and community settings and does not pay parent training, while fully insured commercial plans answer to a mandate with no age limit and no dollar cap and self-funded plans are exempt from it.' },
      { q: 'Can the ABA assessment (97151) or BCBA supervision (97155) be done by telehealth in Colorado Medicaid?', a: 'Yes. Every PBT code, including 97151 and 97155, is on HCPF\'s allowable telemedicine list, on any modality, billed with POS 02 or 10. Telemedicine does not change the PAR requirement, and the member must first receive signed written disclosure statements.' },
      { q: 'Is Health First Colorado accepting new ABA providers, and how do they join?', a: 'Enroll the agency with HCPF as Provider Type 83 (Behavioral Therapy Clinic) and affiliate its psychologists, licensed clinicians and behavioral therapists (Types 37, 38, 84). ABA is fee-for-service, so there are no RAE networks to join for it.' },
      { q: 'Can an out-of-state BCBA treat Health First Colorado members in Colorado, including by telehealth?', a: 'Colorado has no behavior analyst license yet; HB26-1425 makes one mandatory from July 1, 2028. Health First Colorado enrolls out-of-state providers but pays for out-of-state services only in listed cases (border localities, services unavailable in Colorado with PA, and a few others).' },
      { q: 'Can Health First Colorado ABA (PBT) be authorized retroactively?', a: 'Plan on no. The PBT billing manual says providers “must submit, and have approved, PARs for medically necessary services prior to rendering the services,” and PAR approval “does not serve as a timely filing waiver.” We have not verified a retro-PAR route for a member made retroactively eligible; ask Acentra (ColoradoPAR) first.' },
      { q: 'Does Colorado require insurance to cover autism treatment?', a: 'For commercial plans, yes: C.R.S. 10-16-104(1.4) says “All health benefit plans issued or renewed in this state must provide coverage for the assessment, diagnosis, and treatment of autism spectrum disorders for a child,” and its definition of treatment includes applied behavior analysis by autism services providers. Health First Colorado covers ABA separately, through its Pediatric Behavioral Therapies benefit.' },
      { q: 'What is Health First Colorado’s timely filing limit for ABA (PBT) claims?', a: '365 days from the date of service. After that, each re-bill or adjustment must be received within 60 days of the last action to keep the claim alive, and an approved PAR is not a timely filing waiver.' },
      { q: 'Who can write the ABA order for Health First Colorado, and does it go on the claim?', a: 'An MD/DO, PA, NP or licensed psychologist must write the order, and that practitioner must be enrolled with Health First Colorado. Since June 2026, the PBT manual makes CMS-1500 field 17 required, with the ordering practitioner’s NPI in 17b. The signed prescription or Plan of Care goes with every PAR.' },
      { q: 'Is Colorado changing the 97151 assessment authorization?', a: 'It is proposed, not final. On October 9, 2026, HCPF said it is considering cutting the 97151 authorization period from six months to 60 days, effective November 1, 2026. Comments were due by October 15, 2026. As of October 25, 2026 HCPF had posted no adoption notice and the PBT manual still approves PARs for up to six months, so treat the six-month period as current until HCPF announces otherwise.' },
    ],
  },

  'aetna-colorado': {
    slug: 'aetna-colorado',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the C.R.S. § 10-16-104(1.4) mandate layer.',
    assessmentPA: {
      value: 'Required — precertification (form GR-69017-4), per Aetna\'s behavioral health precertification list (eff. 8/1/2024) — CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [{ title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
    },
    treatmentPA: {
      value: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
      status: 'verified',
      cites: [{ title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }, { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
    },
    dxRequired: {
      value:
        'Yes — a DSM-5 autism spectrum disorder diagnosis "(ICD-10/ F84.0; F84.3 - F84.9) obtained by an appropriate provider" per the ABA Medical Necessity Guide. That list leaves out F84.2 (Rett syndrome). CPB 0648\'s broader autism code list runs F84.0–F84.9, but the ABA guide is the narrower and controlling one for ABA. CPB 0554 calls ABA "experimental, investigational, or unproven" for Down syndrome without ASD and "for all other non-ASD indications."',
      status: 'verified',
      cites: [
        { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      ],
    },
    payer: 'Aetna in Colorado',
    state: 'CO', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Colorado',
    h1: 'Aetna ABA coverage in Colorado: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Colorado: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Colorado families — the national clinical policy, prior authorization, the C.R.S. § 10-16-104(1.4) mandate (no age limits, no caps, exemptions), Colorado\'s coming behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Colorado, a Aetna card means three layers at once: the carrier\'s national clinical policy, Colorado\'s autism insurance mandate (C.R.S. § 10-16-104(1.4)), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order. Note the contrast with Colorado Medicaid: Aetna\'s commercial policy requires an ASD diagnosis, while Health First Colorado does not — so a family that qualifies for Medicaid ABA without a diagnosis will still need one here.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'C.R.S. § 10-16-104(1.4) (originally SB 09-244)' },
      { label: 'Mandate age', value: 'No age limits in the current statute' },
      { label: 'Mandate caps', value: 'None — the historical $34K/$12K annual ABA caps were removed' },
      { label: 'Exempt from mandate', value: 'Short-term limited-duration; individual grandfathered; self-funded ERISA' },
      { label: 'Licensure', value: 'None yet (BCBA governs) — state license required 7/1/2028 per HB26-1425' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Colorado',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in Colorado is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in Colorado.',
          'Reauthorization: Aetna’s ABA medical necessity guide says “A member’s progress is to be evaluated every six months.” It calls for “Repeated measurement with standardized measures to assess progress” and a standardized functional-impairment score (Vineland-3, ABAS, VB-MAPP or ABLLS) from the past 12 months. Target behaviors need objective baselines and “quantifiable criteria for progress.” Document the improvement, or, where there was none, the treatment modifications, added assessments or consultations. The guide does not require graphs.',
          'Code set: Aetna’s ABA policy table lists CPT 97151–97158 plus 0362T and 0373T. No HCPCS H-code (H0031, H0032, H2014, H2019) is listed for ABA.',
        ],
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
          { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      {
        h2: 'The Colorado mandate: what it guarantees (and doesn\'t)',
        body: [
          'Colorado\'s mandate — C.R.S. § 10-16-104(1.4), originally 2009\'s SB 09-244 — is one of the stronger ones in our directory: it applies to all health benefit plans issued or renewed in Colorado except short-term limited-duration policies and individual grandfathered plans, carries no age limits, and carries no dollar caps — the historical $34,000/year (birth-8) and $12,000/year (9-18) ABA caps no longer appear in the current statute text, and carriers may not deny or restrict coverage because of an ASD diagnosis or utilization of mandated benefits. The statute also defines "autism services provider" with six qualification pathways reaching down to BACB Registered Behavior Technician. Self-funded ERISA plans are exempt by federal preemption, and MHPAEA parity applies on top for plans covering mental-health benefits — the caps\' removal from the statute aligns the mandate with parity rather than fighting it.',
        ],
        cites: [
          { title: 'C.R.S. § 10-16-104 (FindLaw, current through 1/1/2025)', url: 'https://codes.findlaw.com/co/title-10-insurance/co-rev-st-sect-10-16-104/' },
        ],
      },
      {
        h2: 'No Colorado-specific Aetna policy exists',
        body: [
          'We checked: Aetna publishes no Colorado-specific ABA policy, form, or supplement — the national policy plus the state mandate is the whole picture. That\'s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, benefit limits) is where Colorado-specific answers come from, not a carrier document.',
        ],
        cites: [
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      {
        h2: 'Licensure & rates in Colorado',
        body: [
          'Colorado currently requires no state license to practice behavior analysis — BCBA/BACB certification is the operative credential. That is changing: HB26-1425 (signed June 2, 2026) creates a Colorado Behavior Analyst Licensing Board under DORA\'s Division of Professions and Occupations, and on and after July 1, 2028 practicing ABA without a behavior analyst or assistant behavior analyst license becomes a class 2 misdemeanor; the law also mandates state licensure of ABA clinics. Practices should put the 2028 licensure conversion on their credentialing roadmap now. On rates: Aetna does not publish commercial ABA fee schedules for Colorado (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement; the Health First Colorado fee schedule (97153 at $17.20/unit for DOS 10/1/2025+) is the published in-state benchmark.',
        ],
        cites: [
          { title: 'HB26-1425 — Applied Behavior Analysis Services (Colorado General Assembly)', url: 'https://leg.colorado.gov/bills/HB26-1425' },
        ],
      },
      {
        h2: 'Can an out-of-state BCBA treat a Colorado member, including by telehealth?',
        body: [
          'Colorado does not license behavior analysts yet. HB26-1425 creates a Colorado Behavior Analyst Licensing Board in DORA, and “on and after July 1, 2028, an individual is prohibited from engaging in or offering the practice of applied behavior analysis unless the individual is licensed by the board”; unlicensed practice after that date is a class 2 misdemeanor. Until then there is no Colorado behavior analyst license to hold, and BACB certification is the operative credential.',
          'Aetna’s own rule is written for telehealth explicitly. Its Network Participation Criteria (form 8100606-01-01, 5/26) bind every Hybrid and Virtual Only provider: “Providers must satisfy all applicable license, registration, and certification requirements noted in the participation criteria for all states in which members to whom they are providing Telehealth services are located. As required by applicable law, providers must also hold licenses, registrations, and certifications in the state(s) in which they are physically located.” The ABA criteria add that BCBAs “must meet the current Aetna® credentialing and recredentialing standards” and that “All BCBAs, BCaBAs and paraprofessionals must meet state requirements.” So a BCBA treating a child located in Colorado by video must meet Colorado’s requirements as well as those of the state the BCBA works from, and only codes on Aetna’s Telemedicine and Direct Patient Contact Payment Policy are payable by telehealth.',
        ],
        cites: [
          { title: 'Colorado General Assembly — HB26-1425 (signed act): Colorado Behavior Analyst Licensing Board; licensure required from July 1, 2028', url: 'https://leg.colorado.gov/bills/HB26-1425' },
          { title: 'Aetna — Provider and facility participation criteria (Network Participation Criteria, 8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
        ],
      },
      {
        h2: 'Claims: filing deadline and disputes',
        body: [
          'Aetna’s national provider manual (edition 6/26) publishes no numeric filing limit: it defines a clean claim as one “received in a timely manner,” so the operative deadline is the one in your Aetna agreement. Claim disputes go through Availity — the claim must be in Finalized status, then “Dispute Claim” from the Claim Status transaction — and Aetna runs one level of provider appeal for payment decisions; medical-necessity appeals go through the member appeal process.',
          'Corrected and secondary claims: Aetna’s manual and its COB billing tips give no separate deadline for a corrected or secondary claim, and no payment-cycle day or submission cutoff. The COB tips cover how to file a secondary claim electronically (claim filing indicator codes and primary-payer payment fields), not when. Ask Aetna provider services, or check your agreement, for the corrected-claim and COB windows.',
          'Aetna’s manual sets no EVV requirement (EVV is a Medicaid rule) and no taxonomy requirement for ABA claims.',
        ],
        cites: [
          { title: 'Aetna Provider Manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Aetna — Coordination of benefits billing tips (electronic COB claims)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/COB-billing-tips.pdf' },
        ],
      },
      {
        h2: 'How fast must Aetna pay a clean claim in Colorado?',
        body: [
          'Colorado’s prompt-pay statute, C.R.S. § 10-16-106.5, requires clean claims to be “paid, denied, or settled within thirty calendar days after receipt by the carrier if submitted electronically and within forty-five calendar days after receipt by the carrier if submitted by any other means.” A claim that needs more information must get a written explanation of what is missing within thirty calendar days, and absent fraud every claim must be paid, denied or settled within ninety calendar days. A carrier that misses the clean-claim deadline owes 10% annual interest on the amount ultimately allowed, and one that misses the ninety-day deadline owes a penalty of 20% of that amount. These statutes bind fully insured plans issued in the state; a self-funded employer plan (ERISA) is not subject to them and follows its plan documents and your contract.',
        ],
        cites: [
          { title: 'C.R.S. § 10-16-106.5 — Prompt payment of claims (CRS 2024 official printout, Title 10)', url: 'https://leg.colorado.gov/sites/default/files/images/olls/crs2024-title-10.pdf' },
        ],
      },
      {
        h2: 'Does Aetna need a referring provider on the ABA claim?',
        body: [
          'Aetna publishes no requirement to report a referring or ordering provider on an ABA claim. Its office manual defines a clean claim as including “A corresponding referral (whether in paper or electronic format), if required for the applicable claim” plus “All the data elements of the UB-04 or CMS-1500 (or successor standard) forms (including but not limited to member identification number, National Provider Identifier (NPI), date(s) of service, and a complete and accurate breakdown of services).”',
          'A referral matters only on plans that require PCP referrals for specialist care. Those referrals must be issued before the visit (“Referrals should not be retroactive”), and “In Aetna Open Access® plans, referrals also are not necessary.” Aetna’s behavioral health manual lists direct access as the first way into care: members may reach behavioral health “Through direct access to the behavioral health provider,” through a recommendation from their PCP or another treating provider, or through an EAP referral.',
        ],
        cites: [
          { title: 'Aetna Health Care Professional Toolkit / office manual (2026): clean claims and referral policies', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Aetna Behavioral Health Provider Manual (8/22): access to care', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
        ],
      },
      {
        h2: 'Credential modifiers on the claim',
        body: [
          'Aetna publishes no rate-tier modifiers for ABA. Its public ABA documents — the Applied Behavior Analysis Medical Necessity Guide (©2026), the provider manual (6/26) and the ABA precertification form GR-69017-4 (7-26) — name no HM, HN, HO or HP modifier and no credential crosswalk. What the guide does require is that “Services must be provided directly or billed by the appropriately licensed provider”: licensed behavior analysts where a state licenses them, board-certified behavior analysts, or licensed psychologists, with unlicensed staff supervised “unless state mandates, plan documents or contracts require otherwise.” Whether your Aetna agreement prices technician and analyst time by modifier is set in the contract and its fee schedule, so ask Aetna before you bill technician lines under the analyst.',
        ],
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Provider manual (8102800-01-01, 6/26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date — required here even though Colorado Medicaid doesn\'t require one.' },
      { title: 'Age', desc: 'The Colorado mandate has no age limits — don\'t screen out older clients on age alone.' },
    ],
    sources: [
      { title: 'Aetna — Coordination of benefits billing tips (electronic COB claims)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/COB-billing-tips.pdf' },
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'C.R.S. § 10-16-104 (FindLaw, current through 1/1/2025)', url: 'https://codes.findlaw.com/co/title-10-insurance/co-rev-st-sect-10-16-104/' },
      { title: 'HB26-1425 — Applied Behavior Analysis Services (Colorado General Assembly)', url: 'https://leg.colorado.gov/bills/HB26-1425' },
      { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna — Provider and facility participation criteria (Network Participation Criteria, 8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
      { title: 'C.R.S. § 10-16-106.5 — Prompt payment of claims (CRS 2024 official printout, Title 10)', url: 'https://leg.colorado.gov/sites/default/files/images/olls/crs2024-title-10.pdf' },
      { title: 'Aetna — Provider manual (8102800-01-01, 6/26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
      { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Colorado\'s mandate carries no age limit: C.R.S. § 10-16-104(1.4) applies to all health benefit plans issued or renewed in the state except short-term limited-duration policies and individual grandfathered plans, with no age terms and no dollar caps (the cap language was struck effective 1/1/2017). The carrier\'s national ABA policy adds no age bound of its own, so age comes from the benefit document — and self-funded ERISA plans sit outside the mandate entirely.',
        status: 'plan-dependent',
        cites: [
          { title: 'C.R.S. § 10-16-104 (FindLaw, current through 1/1/2025)', url: 'https://codes.findlaw.com/co/title-10-insurance/co-rev-st-sect-10-16-104/' },
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
        verifyVia:
          'Benefits verification on the specific plan — funding type first, then the ABA benefit terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Aetna puts the recency clock on the functional assessment, not the diagnosis: medical necessity requires "demonstration of functional impairment on a standardized scale of functioning in the past 12 months," and the impairment must be at least one standard deviation below the population mean or represent a significant risk of harm to self or others. The ABA Medical Necessity Guide sets no expiry on the ASD diagnosis itself.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      diagnosingProviders: {
        value:
          '"There is a DSM-V diagnosis of Autism Spectrum Disorder (ICD-10/ F84.0; F84.3 - F84.9) obtained by an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)." Note the code set the guide actually prints: F84.0 plus F84.3–F84.9, which leaves out F84.1 and F84.2.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      diagnosticTools: {
        value:
          'No diagnostic instrument is mandated; the named instruments sit on the functional-impairment test — "the Vineland Adaptive Behavior Scales 3 (VABS-3), the Adaptive Behavior Assessment Scale (ABAS), VB-MAPP or ABLLS" are given as examples of the standardized scale that must show impairment within the past 12 months.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      referral: {
        value:
          'No referral or physician order is required by the national guide — the gate is the diagnosis "obtained by an appropriate provider" plus precertification. The only prescription requirement Aetna publishes is its Maryland exhibit (COMAR 31.10.39), where the child\'s primary care or specialty physician must perform the evaluation and prescribe the treatment with specific goals; that exhibit does not reach plans outside Maryland.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      telehealth: {
        value:
          'Aetna\'s Telemedicine and Direct Patient Contact Payment Policy lists the ABA codes it pays by telehealth, by line of business. On commercial plans the eligible codes are 97151 (the assessment), 97153, 97155 (protocol modification, the code for BCBA direction of the technician), 97156 and 97157, billed with modifier GT, 95 or FR; 97152, 97154 and 97158 are checked for Medicare Advantage only. The posted policy shows a last review of June 2021, so treat the list as perishable.',
        status: 'verified',
        cites: [{ title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table: Commercial vs. Medicare columns; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' }],
        verifyVia: 'Aetna provider services or Availity — confirm the payment policy is still current and that the member\'s plan carries a telehealth benefit before scheduling remote hours.',
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured Colorado plans follow C.R.S. § 10-16-112.5: within five business days after receipt the carrier must say the request is "approved, denied, or incomplete" (naming the missing information), then decide within five business days after receiving it; urgent requests within "two business days but not longer than seventy-two hours." If the carrier misses those deadlines the request "is deemed granted" — but the provider must send any requested information within two business days of the notice or loses that protection. An approval "is valid for at least one hundred eighty days after the date of approval and continues for the duration of the authorized course of treatment." Self-funded (ERISA) plans follow the federal claims rule instead: pre-service decisions within 15 days of receipt (one 15-day extension), urgent within 72 hours. Aetna\'s office manual and ABA medical-necessity guide publish no ABA-specific decision clock.',
        status: 'plan-dependent',
        cites: [
          { title: 'C.R.S. § 10-16-112.5 — Prior authorization for health-care services', url: 'https://colorado.public.law/statutes/crs_10-16-112.5' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification: fully insured Colorado policy (5-business-day clock, 180-day approvals, deemed-granted rule) vs. self-funded ERISA plan (15 days / 72 hours).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two parents\' plans, Colorado\'s group coordination-of-benefits regulation (fully insured plans): parents married or living together — "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (same birthday → the plan that covered the parent longer); otherwise a court decree controls, and without one the order is custodial parent, custodial parent\'s spouse, non-custodial parent, then the non-custodial parent\'s spouse. Self-funded plans set their own order in the plan document. Aetna says it follows the NAIC order-of-benefit rules, "as allowed by state or federal law," including the birthday rule, and that many self-funded plans use maintenance of benefits. If the child also has TRICARE, this plan pays first — TRICARE is the secondary payer to other health insurance under its double-coverage rule (Medicaid is the only coverage it pays ahead of). CHAMPVA likewise pays last: "In double coverage situations, CHAMPVA would be the last payer." If the child also has Medicaid, this plan is primary and Medicaid pays last.',
        status: 'plan-dependent',
        cites: [
          { title: '3 CCR 702-4-6-2-6 — Rules for Coordination of Benefits (LII)', url: 'https://www.law.cornell.edu/regulations/colorado/3-CCR-702-4-6-2-6' },
          { title: 'Aetna — Office manual for health care professionals (coordination of benefits)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.270 — CHAMPVA definitions, double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
          { title: 'HCPF — General Provider Information Manual (Third-Party Liability / Coordination of Benefits)', url: 'https://hcpf.colorado.gov/gen-info-manual' },
        ],
        verifyVia: 'Benefits verification with both plans: funding type, which is primary for the child, and whether the secondary plan requires its own authorization.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Aetna sets a duty, not a number. Where a state mandate, plan document or contract allows services from someone neither state-licensed nor BACB-certified, "there must be supervision and direction of the unlicensed or non-certified providers in line with practice standards." The ABA Medical Necessity Guide publishes no supervision percentage, ratio or caseload cap — the operative standard is professional practice plus whatever the contract adds. It does size the supervision authorization: QHP protocol modification and direction “at 1 to 2 hours per 10 hours of treatment by protocol.”',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published. Neither the ABA Medical Necessity Guide nor Aetna\'s clinical policy bulletin on ABA addresses whether 97153 and 97155 may be billed for the same clock time; Aetna carries the concurrency question in its claim editing rather than in a public policy.',
        status: 'unverified',
        verifyVia:
          'Aetna precertification/provider services at the number on the member\'s ID card, and the plan\'s own reimbursement schedule — ask specifically whether 97155 pays alongside 97153 when analyst, technician and member are all face-to-face.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Not published. Aetna\'s ABA documents set medical-necessity criteria and precertification requirements for 97151–97158, 0362T and 0373T, but no per-day unit ceiling and no statement of which MUE table applies. The guide does publish typical intensity bands — comprehensive ABA 10–25 hours/week, focused ABA 1–20 hours/week — as clinical guidance, not claim edits.',
        status: 'unverified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
        verifyVia:
          'Aetna provider services; confirm before promising a family more than four hours a day of 97153.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Aetna has a general rule, not an ABA-specific one. Its medical-record standards apply to "all participating practitioners," who "agree to maintain medical records in a current, detailed, organized, and comprehensive manner." The core components are: "All entries are dated," "All entries are legible to someone other than the writer," and "All entries in the record must contain the provider\'s signature/initials or electronic identifier." Aetna audits records against these at least every two years, with an 85% performance goal. Aetna\'s ABA documents do not say whether the technician, the supervising BCBA or both sign a session note, or how soon after the session it must be signed. Each person who writes an entry should sign or e-sign and date it.',
        status: 'verified',
        cites: [
          { title: 'Aetna Health Care Professional Toolkit / office manual (2026): medical records — standards and criteria for documentation', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      placeOfService: {
        value:
          'Aetna publishes no ABA place-of-service list. On school settings it says two things. CPB 0648: "Many Aetna plans exclude coverage of educational services. For example, speech therapy or ABA services during class would be excluded under these plans. Please check benefit plan exclusions." And precertification form GR-69017-4 asks "Are any ABA hours being requested during class?" and, if so, how many and for which codes. The IEP/IDEA carve-out in Aetna\'s ABA medical necessity guide sits in its Maryland exhibit, not in the national criteria. Where ABA is payable in a school, the community or a group home is a benefit-document question.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/20/2026; qualified-provider list moved to an Appendix)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
        verifyVia: 'The member\'s benefit document (educational-services exclusion), and Aetna provider services for whether school-setting ABA is payable on that plan.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'The claim carries the analyst, not the technician. "Services must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope of practice definition, unless state mandates, plan documents or contracts require otherwise." The escape clause matters: a state mandate or your contract can move the line, so confirm before enrolling technicians.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
    },
    faq: [
      { q: 'Does Aetna require graphs for ABA reauthorizations in Colorado?', a: 'No. The ABA medical necessity guide requires progress evaluated every six months with repeated standardized measures, objective baselines and quantifiable progress criteria, and a standardized functional score from the past 12 months. It does not specify graphs.' },
      { q: 'Does Aetna cover ABA therapy in Colorado?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Colorado\'s mandate (C.R.S. § 10-16-104(1.4)) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Colorado autism mandate require?', a: 'It applies to all Colorado-issued or renewed health benefit plans (short-term limited-duration and individual grandfathered plans excepted), with no age limits and no dollar caps — the historical $34K/$12K annual ABA caps were removed from the statute. Self-funded ERISA plans are exempt by preemption.' },
      { q: 'Does Aetna require an autism diagnosis for ABA in Colorado?', a: 'Yes — ASD only (ICD-10 F84.0 and F84.3–F84.9 in the ABA Medical Necessity Guide) per the national policy, unlike Health First Colorado, which opens its benefit without an autism diagnosis. If a family lacks a diagnosis and holds a commercial Aetna plan, the diagnostic evaluation comes first.' },
      { q: 'What does Aetna pay for ABA in Colorado?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Health First Colorado fee schedule, and treat rate-setting as part of contracting.' },
      { q: 'Can an out-of-state BCBA treat Aetna members in Colorado, including by telehealth?', a: 'Colorado has no behavior analyst license yet; HB26-1425 makes one mandatory from July 1, 2028. Aetna requires telehealth providers to meet the license requirements “for all states in which members to whom they are providing Telehealth services are located.”' },
      { q: 'What is Aetna’s timely filing limit in Colorado?', a: 'Aetna’s national provider manual (6/26) does not publish a number — the filing limit is the one in your Aetna agreement.' },
      { q: 'How fast must Aetna pay a clean ABA claim in Colorado?', a: 'Colorado law (C.R.S. § 10-16-106.5) gives a fully insured plan 30 calendar days to pay, deny or settle a clean electronic claim (45 for paper), 90 days for any claim absent fraud, with 10% interest and a 20% penalty after 90 days. Self-funded employer plans are not bound by the statute.' },
      { q: 'Does Aetna require a referring provider (box 17) on ABA claims?', a: 'Aetna publishes no such requirement for ABA. A referral has to accompany a claim only when the member’s plan requires PCP referrals for specialist care. Behavioral health is a direct-access benefit in Aetna’s behavioral health manual.' },
      { q: 'Does Aetna require HM, HN, HO or HP modifiers on ABA claims?', a: 'Not in any public Aetna ABA document: the medical necessity guide, provider manual and ABA precertification form name no rate-tier modifiers. Services must be provided or billed by an appropriately licensed or certified provider; ask Aetna whether your contract prices technician lines by modifier.' },
    ],
  },

  'cigna-colorado': {
    slug: 'cigna-colorado',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + the C.R.S. § 10-16-104(1.4) mandate layer.',
    assessmentPA: {
      value: 'Not required for assessment codes 97151, 97152, 0362T (per Cigna\'s autism resource guide — EN0499 itself states no prior-authorization rule)',
      status: 'verified',
      cites: [
        { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — assessment + treatment plan with the ABA PA form (see Cigna\'s autism resource guide; EN0499 sets the clinical criteria, not the PA rule)',
      status: 'verified',
      cites: [
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD only; Rett syndrome (F84.2) excluded under EN0499',
      status: 'verified',
      cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    payer: 'Cigna / Evernorth in Colorado',
    state: 'CO', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Colorado',
    h1: 'Cigna / Evernorth ABA coverage in Colorado: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Colorado: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Colorado families — the national clinical policy, prior authorization, the C.R.S. § 10-16-104(1.4) mandate (no age limits, no caps, exemptions), Colorado\'s coming behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Colorado, a Cigna card means three layers at once: the carrier\'s national clinical policy, Colorado\'s autism insurance mandate (C.R.S. § 10-16-104(1.4)), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order. Note the contrast with Colorado Medicaid: Cigna\'s commercial policy requires an ASD diagnosis, while Health First Colorado does not — so a family that qualifies for Medicaid ABA without a diagnosis will still need one here.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'C.R.S. § 10-16-104(1.4) (originally SB 09-244)' },
      { label: 'Mandate age', value: 'No age limits in the current statute' },
      { label: 'Mandate caps', value: 'None — the historical $34K/$12K annual ABA caps were removed' },
      { label: 'Exempt from mandate', value: 'Short-term limited-duration; individual grandfathered; self-funded ERISA' },
      { label: 'Licensure', value: 'None yet (BCBA governs) — state license required 7/1/2028 per HB26-1425' },
      { label: 'Fee schedule', value: 'None published — contracted rates in your Evernorth agreement; ask Provider Relations' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Colorado',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. That clinical policy is national — what changes in Colorado is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in Colorado.',
          'Code set: the Cigna/Evernorth autism resource guide requires all ABA services to be billed with 97151–97158, 0362T and 0373T only, so HCPCS H-codes such as H0031 or H2019 are not accepted for ABA.',
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Colorado mandate: what it guarantees (and doesn\'t)',
        body: [
          'Colorado\'s mandate — C.R.S. § 10-16-104(1.4), originally 2009\'s SB 09-244 — is one of the stronger ones in our directory: it applies to all health benefit plans issued or renewed in Colorado except short-term limited-duration policies and individual grandfathered plans, carries no age limits, and carries no dollar caps — the historical $34,000/year (birth-8) and $12,000/year (9-18) ABA caps no longer appear in the current statute text, and carriers may not deny or restrict coverage because of an ASD diagnosis or utilization of mandated benefits. The statute also defines "autism services provider" with six qualification pathways reaching down to BACB Registered Behavior Technician. Self-funded ERISA plans are exempt by federal preemption, and MHPAEA parity applies on top for plans covering mental-health benefits — the caps\' removal from the statute aligns the mandate with parity rather than fighting it.',
        ],
        cites: [
          { title: 'C.R.S. § 10-16-104 (FindLaw, current through 1/1/2025)', url: 'https://codes.findlaw.com/co/title-10-insurance/co-rev-st-sect-10-16-104/' },
        ],
      },
      {
        h2: 'No Colorado carve-out found in EN0499',
        body: [
          'Unlike Virginia — where EN0499 explicitly does not apply to fully-insured business — we found no Colorado carve-out in the policy, so the national rules (including the no-assessment-PA fast path) should apply to Colorado members. One honesty note: the current EN0499 PDF could not be fully text-parsed to confirm the state-exceptions list with certainty, so treat "no Colorado carve-out" as high-confidence rather than absolute and confirm the assessment-PA answer on the benefits call before promising families a fast start.',
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Colorado',
        body: [
          'Colorado currently requires no state license to practice behavior analysis — BCBA/BACB certification is the operative credential. That is changing: HB26-1425 (signed June 2, 2026) creates a Colorado Behavior Analyst Licensing Board under DORA\'s Division of Professions and Occupations, and on and after July 1, 2028 practicing ABA without a behavior analyst or assistant behavior analyst license becomes a class 2 misdemeanor; the law also mandates state licensure of ABA clinics. Practices should put the 2028 licensure conversion on their credentialing roadmap now. On rates: Cigna does not publish commercial ABA fee schedules for Colorado (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement; the Health First Colorado fee schedule (97153 at $17.20/unit for DOS 10/1/2025+) is the published in-state benchmark.',
        ],
        cites: [
          { title: 'HB26-1425 — Applied Behavior Analysis Services (Colorado General Assembly)', url: 'https://leg.colorado.gov/bills/HB26-1425' },
        ],
      },
      {
        h2: 'How does Cigna pay for ABA, and is its network open?',
        body: [
          'Cigna publishes no ABA fee schedule. In-network ABA is paid at the rates in your Evernorth behavioral-health agreement; the autism resource guide sends "questions about credentialing, contracts, or rates" to your Provider Relations representative, and billing questions to Provider Services at 800.926.2273. Bill only 97151-97158, 0362T and 0373T, in 15-minute units.',
          'Network: Evernorth says it "is committed to expanding our network of autism providers." Individual analysts apply on the Evernorth Behavioral Provider Information Form and autism clinics or large groups on the Evernorth Screening Application for Autism Clinics; processing can take up to 90 days, and after a clinic contract each certified or licensed provider must be credentialed (another 60 to 90 days) before rendering in-network services. Evernorth requires the clinician to hold a national certification or state license (BCBA, BCBA-D, BCaBA, licensed behavior analyst or other behavioral-health licensure). It "does not credential nonlicensed/noncertified staff" such as technicians, whose services "must be billed under the supervising provider."',
        ],
        cites: [
          { title: 'Cigna / Evernorth autism resource guide for behavioral health providers (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'Can an out-of-state BCBA treat a Colorado member, including by telehealth?',
        body: [
          'Colorado does not license behavior analysts yet. HB26-1425 creates a Colorado Behavior Analyst Licensing Board in DORA, and “on and after July 1, 2028, an individual is prohibited from engaging in or offering the practice of applied behavior analysis unless the individual is licensed by the board”; unlicensed practice after that date is a class 2 misdemeanor. Until then there is no Colorado behavior analyst license to hold, and BACB certification is the operative credential.',
          'Evernorth, which manages Cigna’s behavioral benefits, frames it as a compliance duty rather than a member-state rule. Its Administrative Guidelines (September 2026): “Providers must meet all state requirements to provide virtual behavioral services, including any licenses and certifications,” must “comply with their state laws about the use of audio or video-based technology,” and providers who meet the telehealth specialty requirements “may deliver services virtually with no additional credentialing” after attesting on the Attested Specialty Form, when Evernorth adds “telehealth” to the provider profile. The guidelines do not say in terms which state’s license a remote BCBA needs, so read “all state requirements” against Colorado’s licensure law above and confirm with Evernorth before a remote start.',
        ],
        cites: [
          { title: 'Colorado General Assembly — HB26-1425 (signed act): Colorado Behavior Analyst Licensing Board; licensure required from July 1, 2028', url: 'https://leg.colorado.gov/bills/HB26-1425' },
          { title: 'Evernorth Behavioral Health — Administrative Guidelines (September 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
        ],
      },
      {
        h2: 'Claims: filing deadline and disputes',
        body: [
          'Cigna’s behavioral benefits, ABA included, are administered by Evernorth Behavioral Health, whose administrative guidelines (revised September 2026) “will only consider claims submitted within 90 days of the date of service or as otherwise defined in your Provider Agreement” — a longer state-law limit overrides it, the clock resets to the date Cigna asks for more information, and Medicaid-secondary claims get three years. Appeals must be started in writing within 180 calendar days of the payment or denial decision.',
          'Corrected and secondary claims: Evernorth applies its 90-day limit to a COB claim “based on the primary payer’s processing date as stated on an explanation of benefits [EOB] or explanation of payment [EOP].” A claim filed on time and returned for more information gets a new 90 days from the date of that request. Mark a replacement or void on the CMS-1500 with code 7 or 8 in field 22, and do not stamp “Corrected Claim” on the form. The guidelines publish no payment-cycle day or submission cutoff.',
          'Evernorth’s guidelines set no EVV requirement and no taxonomy requirement for ABA claims. The complete-claim definition lists names, NPIs and license type, not taxonomy codes.',
        ],
        cites: [
          { title: 'Evernorth Behavioral Health Administrative Guidelines (rev. Sept. 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
        ],
      },
      {
        h2: 'How fast must Cigna pay a clean claim in Colorado?',
        body: [
          'Colorado’s prompt-pay statute, C.R.S. § 10-16-106.5, requires clean claims to be “paid, denied, or settled within thirty calendar days after receipt by the carrier if submitted electronically and within forty-five calendar days after receipt by the carrier if submitted by any other means.” A claim that needs more information must get a written explanation of what is missing within thirty calendar days, and absent fraud every claim must be paid, denied or settled within ninety calendar days. A carrier that misses the clean-claim deadline owes 10% annual interest on the amount ultimately allowed, and one that misses the ninety-day deadline owes a penalty of 20% of that amount. These statutes bind fully insured plans issued in the state; a self-funded employer plan (ERISA) is not subject to them and follows its plan documents and your contract.',
        ],
        cites: [
          { title: 'C.R.S. § 10-16-106.5 — Prompt payment of claims (CRS 2024 official printout, Title 10)', url: 'https://leg.colorado.gov/sites/default/files/images/olls/crs2024-title-10.pdf' },
        ],
      },
      {
        h2: 'Does Cigna need a referring provider on the ABA claim?',
        body: [
          'No. Evernorth’s administrative guidelines (September 2026) define a complete CMS-1500 claim as the patient’s ID number, name, address and date of birth; the subscriber’s name and address; release of information and assignment of benefits; diagnosis codes and pointer; date and place of service; CPT/HCPCS code and modifier; billed charge, units, TIN and total charge; the “Rendering provider’s name, NPI, and license type”; and the “Billing provider’s name, address, and NPI.” No referring or ordering provider is on that list. If you do report one on an 837, “Any additional provider identification on the claim, such as the “Rendering Provider” or “Referring Provider,” must include the name and NPI when submitted.”',
          'The ABA-specific paper-claim rules sit in the autism resource guide: use Form CMS-1500, “Print your name in box 31,” and “List only a BCBA or other licensed provider in box 33.” Evernorth does not credential non-licensed or non-certified staff, so their services are billed under the supervising provider.',
        ],
        cites: [
          { title: 'Evernorth Behavioral Health Administrative Guidelines (September 2026, PCOMM-2026-191): complete-claim definition and 837 provider identifiers', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
          { title: 'Cigna / Evernorth autism resource guide (March 2025): paper-claim rules', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'Credential modifiers on the claim',
        body: [
          'Evernorth (Cigna’s behavioral health arm) uses no rate-tier modifiers in its published ABA billing rules. Its Autism Resource Guide (March 2025) instead sets, code by code, who may provide and who may bill: 97152, 97153 and 97154 may be provided by a “BCaBA, technician” but are billed by a “BCBA-D, BCBA, or licensed mental health provider,” and “Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider.” All ABA must be billed with 97151–97158, 0362T and 0373T only. The only modifier Evernorth’s administrative guidelines (September 2026) prescribe is for virtual care: “Modifier 95 in Field 24-D to specify telehealth” with place of service 02; other modifiers go on “if they are needed to describe the service performed.”',
        ],
        cites: [
          { title: 'Cigna/Evernorth Autism Resource Guide (PCOMM-2025-225, March 2025): billing codes', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth Behavioral Health Administrative Guidelines (September 2026, PCOMM-2026-191) — telehealth claim coding', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date — required here even though Colorado Medicaid doesn\'t require one.' },
      { title: 'Age', desc: 'The Colorado mandate has no age limits — don\'t screen out older clients on age alone.' },
    ],
    sources: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'C.R.S. § 10-16-104 (FindLaw, current through 1/1/2025)', url: 'https://codes.findlaw.com/co/title-10-insurance/co-rev-st-sect-10-16-104/' },
      { title: 'HB26-1425 — Applied Behavior Analysis Services (Colorado General Assembly)', url: 'https://leg.colorado.gov/bills/HB26-1425' },
      { title: 'Evernorth Behavioral Health — Administrative Guidelines (September 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
      { title: 'C.R.S. § 10-16-106.5 — Prompt payment of claims (CRS 2024 official printout, Title 10)', url: 'https://leg.colorado.gov/sites/default/files/images/olls/crs2024-title-10.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Colorado\'s mandate carries no age limit: C.R.S. § 10-16-104(1.4) applies to all health benefit plans issued or renewed in the state except short-term limited-duration policies and individual grandfathered plans, with no age terms and no dollar caps (the cap language was struck effective 1/1/2017). The carrier\'s national ABA policy adds no age bound of its own, so age comes from the benefit document — and self-funded ERISA plans sit outside the mandate entirely.',
        status: 'plan-dependent',
        cites: [
          { title: 'C.R.S. § 10-16-104 (FindLaw, current through 1/1/2025)', url: 'https://codes.findlaw.com/co/title-10-insurance/co-rev-st-sect-10-16-104/' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
        verifyVia:
          'Benefits verification on the specific plan — funding type first, then the ABA benefit terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'EN0499 puts no expiry on the ASD diagnosis — it requires only that the submission carry "the name, credentials, and type of licensure of the individual who made the diagnosis" and "the date on which the diagnosis was most recently made." The 60-day clocks run on the assessment instead: administration of the standardized assessment instrument must be completed within 60 days prior to the start of treatment, and quantitative baseline data must be collected within 60 days prior to the start of treatment.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosingProviders: {
        value:
          '"A confirmed diagnosis of autism spectrum disorder (ASD); (ICD-10-CM Diagnosis Codes F84.0 – F84.9, with the exception of F84.2, Rett syndrome) based on the criteria in the DSM-5-TR by a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice." The ABA assessment itself is then performed by a BCBA, LBA, or an independently licensed mental health clinician with documented ABA training.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosticTools: {
        value:
          'EN0499 names no instrument but sets six tests the instrument must pass: it must be reliable, valid and standardized, measure functioning in the DSM-5-TR ASD domains (social communication/interaction; restricted, repetitive behavior), be completed in its entirety and as designed, have established reliability and validity for the population tested, be administered by someone trained to administer and interpret it, and be the most current version — "must be the Vineland-3 vs. Vineland-II." Date of administration, respondent and form type must be recorded.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      referral: {
        value:
          'No referral or physician order is required. Prior authorization is not required on assessment codes 97151, 97152 or 0362T with an autism diagnosis "as long as the provider is independently licensed or a Board Certified Behavior Analyst (BCBA) and the patient\'s policy covers ABA services"; the authorization gate arrives at the treatment step, with the completed assessment and treatment plan.',
        status: 'verified',
        cites: [
          { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      telehealth: {
        value:
          '"All ABA CPT codes are covered telehealth services," subject to EN0499. The policy adds a documentation duty rather than a code restriction: where services are delivered "via telehealth modalities," the record must show the service still meets the definition of direct treatment/direct engagement "regardless of treatment location or modality" and is conducted per the treatment-plan goals. The assessment and supervision codes are included: the resource guide\'s "All ABA CPT codes" covers 97151 (initial assessment and reassessment) and 97155 (protocol modification / direct supervision) as much as 97153, and neither document caps the share of supervision that may be remote. Neither names a required telehealth POS code or modifier, so confirm claim coding with Evernorth Provider Services (800.926.2273).',
        status: 'verified',
        cites: [
          { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured Colorado plans follow C.R.S. § 10-16-112.5: within five business days after receipt the carrier must say the request is "approved, denied, or incomplete" (naming the missing information), then decide within five business days after receiving it; urgent requests within "two business days but not longer than seventy-two hours." If the carrier misses those deadlines the request "is deemed granted" — but the provider must send any requested information within two business days of the notice or loses that protection. An approval "is valid for at least one hundred eighty days after the date of approval and continues for the duration of the authorized course of treatment." Self-funded (ERISA) plans follow the federal claims rule instead: pre-service decisions within 15 days of receipt (one 15-day extension), urgent within 72 hours. Cigna\'s ABA policy (EN0499) sets no decision clock; continued-treatment requests need current data "collected within no more than 60 days prior to the start date of the continued treatment request."',
        status: 'plan-dependent',
        cites: [
          { title: 'C.R.S. § 10-16-112.5 — Prior authorization for health-care services', url: 'https://colorado.public.law/statutes/crs_10-16-112.5' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
        verifyVia: 'Benefits verification: fully insured Colorado policy (5-business-day clock, 180-day approvals, deemed-granted rule) vs. self-funded ERISA plan (15 days / 72 hours).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two parents\' plans, Colorado\'s group coordination-of-benefits regulation (fully insured plans): parents married or living together — "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (same birthday → the plan that covered the parent longer); otherwise a court decree controls, and without one the order is custodial parent, custodial parent\'s spouse, non-custodial parent, then the non-custodial parent\'s spouse. Self-funded plans set their own order in the plan document. Cigna\'s ABA documents publish no coordination-of-benefits rule of their own. If the child also has TRICARE, this plan pays first — TRICARE is the secondary payer to other health insurance under its double-coverage rule (Medicaid is the only coverage it pays ahead of). CHAMPVA likewise pays last: "In double coverage situations, CHAMPVA would be the last payer." If the child also has Medicaid, this plan is primary and Medicaid pays last.',
        status: 'plan-dependent',
        cites: [
          { title: '3 CCR 702-4-6-2-6 — Rules for Coordination of Benefits (LII)', url: 'https://www.law.cornell.edu/regulations/colorado/3-CCR-702-4-6-2-6' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.270 — CHAMPVA definitions, double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
          { title: 'HCPF — General Provider Information Manual (Third-Party Liability / Coordination of Benefits)', url: 'https://hcpf.colorado.gov/gen-info-manual' },
        ],
        verifyVia: 'Benefits verification with both plans: funding type, which is primary for the child, and whether the secondary plan requires its own authorization.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'One to two hours per ten hours of direct treatment. "Direct case supervision (occurs concurrently with the delivery of direct treatment to the individual and consists of BCBA face-to-face with the individual and either the Registered Behavior Technician or the Board Certified Assistant Behavior Analyst) and indirect case supervision is consistent with the general accepted standard of care of one to two hours per ten hours of direct treatment." When direct treatment is 10 hours per week or less, a minimum of one to two hours per week of direct case supervision is provided, and the supervisor\'s name and credentials must be documented. EN0499 (effective 5/15/2026) publishes no cap on the number of technicians per supervising BCBA.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      concurrentBilling: {
        value:
          'Yes — and Evernorth writes it as an explicit carve-out from its general rule: "Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)." Both must be with the patient; analyst time away from the patient is not inside the exception. Speech, OT and other therapies are a separate rule: EN0499 says ABA "is not covered or reimbursable when delivered to the same individual, at the same time as any other treatment modality (e.g., ABA and speech therapy, or ABA and occupational therapy)." Schedule ABA and other therapies in separate time blocks. ABA built into a speech or OT session is not billable.',
        status: 'verified',
        cites: [
          { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (effective 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      dailyLimits: {
        value:
          'Not published. The resource guide sets the code set (97151–97158, 0362T and 0373T only, all in 15-minute increments) but no per-day unit ceiling and no statement of which MUE table Evernorth applies.',
        status: 'unverified',
        cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        verifyVia:
          'Evernorth Provider Services at 800.926.2273.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'The person who delivered the service signs the note. EN0499\'s Documentation Expectations require "A separate written record ... for each individual receiving ABA intervention corresponding with each service noted through identified CPT® Code." Each record must include at least the start and end date and time, the location, the focus of service, a detailed description of the intervention, the individuals present, the specific service delivered (direct service, supervision, stakeholder training and so on), and the "Name, credential (if applicable), and signature of ABA provider who rendered the service." EN0499 sets no deadline for signing.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (effective 5/15/2026): Documentation Expectations', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      placeOfService: {
        value:
          'No POS list is published. EN0499 requires the treatment plan to identify the "settings and environments where treatment will occur (e.g., home, clinic, school, community setting)" and to collect data corresponding to each location of service; for settings with competing behavioral expectations — "academic setting, vocational placement, services delivered via telehealth modalities" — the record must show the service still meets the direct-treatment definition. Which of those settings is payable is a benefit-document question.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
        verifyVia:
          'Evernorth Provider Services at 800.926.2273 for school and community settings, plus the member\'s benefit document.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'Under the supervising provider, because the technician cannot be credentialed: "Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." Practically, the BCBA\'s credential is what the claim rides on for technician-delivered 97153.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
    },
    faq: [
      { q: 'Does Cigna require graphs for ABA reassessments?', a: 'Not by name. EN0499 requires dated quantitative baseline, interim and current data for every target, with current data collected within 60 days before the continued-treatment request, plus a standardized assessment no more than a year old. Graphs are a common way to present that data, but the policy asks for the data itself.' },
      { q: 'Does Cigna cover ABA therapy in Colorado?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Colorado\'s mandate (C.R.S. § 10-16-104(1.4)) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'Does the ABA assessment need prior authorization with Cigna in Colorado?', a: 'Per the national EN0499 policy, no — assessment codes 97151, 97152, and 0362T need no PA, and we found no Colorado carve-out from that policy. Confirm on the benefits call, since the current policy PDF could not be fully parsed for the state-exceptions list.' },
      { q: 'What does the Colorado autism mandate require?', a: 'It applies to all Colorado-issued or renewed health benefit plans (short-term limited-duration and individual grandfathered plans excepted), with no age limits and no dollar caps — the historical $34K/$12K annual ABA caps were removed from the statute. Self-funded ERISA plans are exempt by preemption.' },
      { q: 'What does Cigna pay for ABA in Colorado?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Health First Colorado fee schedule, and treat rate-setting as part of contracting.' },
      { q: 'Can the ABA assessment (97151) or BCBA supervision (97155) be done by telehealth with Cigna in Colorado?', a: 'Yes. Evernorth\'s autism resource guide says all ABA CPT codes are covered telehealth services, and EN0499 allows in-person, telehealth or hybrid delivery. No POS code or modifier is published; confirm claim coding with Provider Services (800.926.2273).' },
      { q: 'Is Cigna accepting new ABA providers in Colorado?', a: 'Evernorth says it is committed to expanding its autism network. Apply with the Behavioral Provider Information Form (individuals) or the Screening Application for Autism Clinics (groups); allow up to 90 days, plus 60 to 90 days of individual credentialing for a clinic.' },
      { q: 'Does Cigna pay for ABA delivered at school in Colorado?', a: 'EN0499 treats school as a possible treatment setting but excludes educational services. It lists school among the settings where treatment goals may be set ("home, clinic, school, community setting"), requires the record to show that ABA in an academic setting still meets the direct-treatment definition, and excludes services "primarily educational or vocational in nature, or related to academic or work performance." Whether school hours are payable on a given plan is a benefit-document question.' },
      { q: 'Can an out-of-state BCBA treat Cigna members in Colorado, including by telehealth?', a: 'Colorado has no behavior analyst license yet; HB26-1425 makes one mandatory from July 1, 2028. Evernorth (Cigna) requires providers to “meet all state requirements to provide virtual behavioral services, including any licenses”; confirm with Evernorth before a remote start.' },
      { q: 'What is Cigna’s timely filing limit in Colorado?', a: 'Evernorth Behavioral Health, which administers Cigna’s ABA benefit, considers claims submitted within 90 days of the date of service unless your provider agreement or a longer state-law limit says otherwise.' },
      { q: 'How fast must Cigna pay a clean ABA claim in Colorado?', a: 'Colorado law (C.R.S. § 10-16-106.5) gives a fully insured plan 30 calendar days to pay, deny or settle a clean electronic claim (45 for paper), 90 days for any claim absent fraud, with 10% interest and a 20% penalty after 90 days. Self-funded employer plans are not bound by the statute.' },
      { q: 'Does Cigna require a referring provider (box 17) on ABA claims?', a: 'No. Evernorth’s complete-claim definition for the CMS-1500 lists the rendering and billing providers but no referring provider. If you report a referring provider on an electronic claim, include both the name and the NPI.' },
      { q: 'Does Cigna / Evernorth require HM, HN, HO or HP modifiers on ABA claims?', a: 'No modifier tiers are published. Evernorth’s autism resource guide says technician and BCaBA services (97152–97154) are billed by the supervising BCBA, BCBA-D or licensed provider, and noncredentialed staff are billed under the supervising provider. Modifier 95 (with POS 02) marks telehealth.' },
    ],
  },

  'unitedhealthcare-colorado': {
    slug: 'unitedhealthcare-colorado',
    family: 'unitedhealthcare',
    cardDesc: 'Optum Supplemental Clinical Criteria (BH803ABASCC) + the C.R.S. § 10-16-104(1.4) mandate layer.',
    assessmentPA: {
      value: 'Required — step 1 of Optum\'s two-step authorization (assessment auth via Provider Express)',
      status: 'verified',
      cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
    },
    treatmentPA: {
      value: 'Required — a separate treatment authorization after the assessment. “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law,” and continued-care requests go in “no more than 30 days prior to the current approvals on file expiring” (Optum ABA CPT FAQ)',
      status: 'verified',
      cites: [
        { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.)',
      status: 'verified',
      cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
    },
    payer: 'UnitedHealthcare / Optum in Colorado',
    state: 'CO', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Colorado',
    h1: 'UnitedHealthcare / Optum ABA coverage in Colorado: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Colorado: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Colorado families — the national clinical policy, prior authorization, the C.R.S. § 10-16-104(1.4) mandate (no age limits, no caps, exemptions), Colorado\'s coming behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Colorado, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, Colorado\'s autism insurance mandate (C.R.S. § 10-16-104(1.4)), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order. Note the contrast with Colorado Medicaid: Optum\'s policy requires a validated ASD diagnosis, while Health First Colorado does not — so a family that qualifies for Medicaid ABA without a diagnosis will still need one here.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'C.R.S. § 10-16-104(1.4) (originally SB 09-244)' },
      { label: 'Mandate age', value: 'No age limits in the current statute' },
      { label: 'Mandate caps', value: 'None — the historical $34K/$12K annual ABA caps were removed' },
      { label: 'Exempt from mandate', value: 'Short-term limited-duration; individual grandfathered; self-funded ERISA' },
      { label: 'Licensure', value: 'None yet (BCBA governs) — state license required 7/1/2028 per HB26-1425' },
      { label: 'Fee schedule', value: 'None published — paid at the contracted rate on your Optum fee schedule' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Colorado',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months and an operational flag when utilization falls below 80% of authorized hours. That clinical policy is national — what changes in Colorado is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. Notably, Colorado has NO entry in Optum\'s ABA State Mandates supplemental criteria (effective January 2026) — there is no Colorado-specific Optum clinical overlay, so the national guideline plus the state mandate is the whole picture. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in Colorado.',
          'Code set: Optum’s commercial ABA reimbursement policy (updated 06/2026) covers CPT 97151–97158, 0362T and 0373T, each a 15-minute unit with its own daily maximum. It lists no HCPCS H-code for ABA.',
        ],
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — ABA State Mandates supplemental criteria (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
        ],
      },
      {
        h2: 'The Colorado mandate: what it guarantees (and doesn\'t)',
        body: [
          'Colorado\'s mandate — C.R.S. § 10-16-104(1.4), originally 2009\'s SB 09-244 — is one of the stronger ones in our directory: it applies to all health benefit plans issued or renewed in Colorado except short-term limited-duration policies and individual grandfathered plans, carries no age limits, and carries no dollar caps — the historical $34,000/year (birth-8) and $12,000/year (9-18) ABA caps no longer appear in the current statute text, and carriers may not deny or restrict coverage because of an ASD diagnosis or utilization of mandated benefits. The statute also defines "autism services provider" with six qualification pathways reaching down to BACB Registered Behavior Technician. Self-funded ERISA plans are exempt by federal preemption, and MHPAEA parity applies on top for plans covering mental-health benefits — the caps\' removal from the statute aligns the mandate with parity rather than fighting it.',
        ],
        cites: [
          { title: 'C.R.S. § 10-16-104 (FindLaw, current through 1/1/2025)', url: 'https://codes.findlaw.com/co/title-10-insurance/co-rev-st-sect-10-16-104/' },
        ],
      },
      {
        h2: 'UnitedHealthcare Medicaid in Colorado: RMHP — but ABA bills the state',
        body: [
          'UnitedHealthcare\'s Medicaid footprint in Colorado runs through Rocky Mountain Health Plans (a UnitedHealthcare company) — RAE Region 1, the RMHP PRIME product, and RMHP CHP+. But unlike most states, that does not create a separate UHC Medicaid ABA process: ABA is a statewide fee-for-service carve-out from the RAE capitation, so RMHP does not authorize or pay ABA claims. A family on RMHP follows the Health First Colorado process — PAR via Acentra\'s Atrezzo portal, state fee schedule — covered in our Colorado Medicaid guide. Verify which line of business the card belongs to, then route Medicaid members to the state process, not a UHC portal.',
        ],
        cites: [
          { title: 'HCPF — Accountable Care Collaborative Phase III', url: 'https://hcpf.colorado.gov/accphaseIII' },
        ],
      },
      {
        h2: 'Licensure & rates in Colorado',
        body: [
          'Colorado currently requires no state license to practice behavior analysis — BCBA/BACB certification is the operative credential. That is changing: HB26-1425 (signed June 2, 2026) creates a Colorado Behavior Analyst Licensing Board under DORA\'s Division of Professions and Occupations, and on and after July 1, 2028 practicing ABA without a behavior analyst or assistant behavior analyst license becomes a class 2 misdemeanor; the law also mandates state licensure of ABA clinics. Practices should put the 2028 licensure conversion on their credentialing roadmap now. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for Colorado (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement; the Health First Colorado fee schedule (97153 at $17.20/unit for DOS 10/1/2025+) is the published in-state benchmark.',
        ],
        cites: [
          { title: 'HB26-1425 — Applied Behavior Analysis Services (Colorado General Assembly)', url: 'https://leg.colorado.gov/bills/HB26-1425' },
        ],
      },
      {
        h2: 'How does UnitedHealthcare (Optum) pay for ABA, and how do you join the network?',
        body: [
          'UnitedHealthcare commercial ABA is managed by Optum Behavioral Health, which publishes no ABA rate table. Optum\'s ABA FAQ tells contracted providers to "bill your contracted billing codes and customary charges as outlined on your Fee Schedule after receiving appropriate authorization. You will be reimbursed based on your contracted rate." The fee schedule is the one attached to your Optum agreement; non-contracted providers get approvals through the behavioral-health number on the member\'s card.',
          'Joining the network: Optum lists credentialing and contracting criteria for ABA providers (BCBA with active certification, state licensure where the state licenses behavior analysts, six months of supervised ABA experience, and professional liability of $1 million per occurrence) and takes applications through the "Join Our Autism/ABA Network" section of its ABA page on Provider Express. Credentialing "can take from 45 to 120 days after submission of all materials," every new agency gets a site audit that can take up to 90 days to schedule, and a single case agreement while credentialing is "Not automatically" available, only in exception cases such as a network gap. Technicians working 1:1 must hold RBT, BCAT or ABAT certification (or an approved alternative).',
        ],
        cites: [
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        ],
      },
      {
        h2: 'Can an out-of-state BCBA treat a Colorado member, including by telehealth?',
        body: [
          'Colorado does not license behavior analysts yet. HB26-1425 creates a Colorado Behavior Analyst Licensing Board in DORA, and “on and after July 1, 2028, an individual is prohibited from engaging in or offering the practice of applied behavior analysis unless the individual is licensed by the board”; unlicensed practice after that date is a class 2 misdemeanor. Until then there is no Colorado behavior analyst license to hold, and BACB certification is the operative credential.',
          'Optum, which runs UnitedHealthcare’s commercial behavioral network, is explicit. Its National Network Manual (effective September 1, 2026): “Providers offering telehealth visits must be licensed in the state where the member is located at the time of service. In addition, providers must comply with all licensing laws and telehealth regulations in the jurisdiction(s) where the provider is licensed and where the member is receiving treatment.” Colorado issues no behavior analyst license until the HB26-1425 board starts licensing, so how Optum applies that member-state rule to a BCBA treating a Colorado child before then is a question for Optum provider relations, not something the manual settles.',
        ],
        cites: [
          { title: 'Colorado General Assembly — HB26-1425 (signed act): Colorado Behavior Analyst Licensing Board; licensure required from July 1, 2028', url: 'https://leg.colorado.gov/bills/HB26-1425' },
          { title: 'Optum Behavioral Health — National Network Manual (published July 1, 2026; effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
        ],
      },
      {
        h2: 'Claims: filing deadline and disputes',
        body: [
          'UnitedHealthcare’s ABA benefit is managed by Optum Behavioral Health, whose National Network Manual (effective September 1, 2026) requires everything needed to process a claim to reach Optum “no more than 90 calendar days from the date of service, or as allowed by state or federal law or the member’s specific benefit plan,” with corrections within 90 days of first receipt. Clean, authorized claims are “generally” paid within 45 calendar days of receipt or as state or federal law requires. Disputes run in two steps — reconsideration, then appeal — with 12 months in total for both unless state law or your participation agreement sets a different deadline.',
          'Secondary claims: the Optum manual sets no separate deadline for a secondary claim, so the 90-day limit applies, and when Optum is secondary it pays “up to the Optum contracted rate.” The manual publishes no payment-cycle day or submission cutoff.',
          'Neither Optum’s network manual nor UnitedHealthcare’s commercial guide imposes EVV on ABA; EVV is a Medicaid requirement.',
        ],
        cites: [
          { title: 'Optum Behavioral Health National Network Manual (published July 1, 2026; effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
        ],
      },
      {
        h2: 'How fast must UnitedHealthcare pay a clean claim in Colorado?',
        body: [
          'Colorado’s prompt-pay statute, C.R.S. § 10-16-106.5, requires clean claims to be “paid, denied, or settled within thirty calendar days after receipt by the carrier if submitted electronically and within forty-five calendar days after receipt by the carrier if submitted by any other means.” A claim that needs more information must get a written explanation of what is missing within thirty calendar days, and absent fraud every claim must be paid, denied or settled within ninety calendar days. A carrier that misses the clean-claim deadline owes 10% annual interest on the amount ultimately allowed, and one that misses the ninety-day deadline owes a penalty of 20% of that amount. These statutes bind fully insured plans issued in the state; a self-funded employer plan (ERISA) is not subject to them and follows its plan documents and your contract.',
        ],
        cites: [
          { title: 'C.R.S. § 10-16-106.5 — Prompt payment of claims (CRS 2024 official printout, Title 10)', url: 'https://leg.colorado.gov/sites/default/files/images/olls/crs2024-title-10.pdf' },
        ],
      },
      {
        h2: 'Does UnitedHealthcare need a referring provider on the ABA claim?',
        body: [
          'Not for ABA. Optum, which manages UnitedHealthcare’s behavioral benefit, says in its National Network Manual (effective September 1, 2026) that a claim must carry the coding (ICD diagnosis, CPT/HCPCS and modifiers), the member ID number, customary charges, and the provider’s TIN and NPI. Paper Form 1500 claims add the member and subscriber names and dates of birth, the length of session, the type and duration of service, and the clinician’s name, credentials, Tax ID and NPI. A referring provider is not on either list.',
          'UnitedHealthcare’s 2026 administrative guide requires the referring provider’s name and NPI only on laboratory, DME, imaging and home health claims. For every other claim, it requires “a valid billing NPI, rendering NPI and relevant taxonomy code(s)” and says “we encourage you to submit the referring health care provider’s NPI.” In short, the referring NPI is optional on an ABA claim, and leaving it off is not a denial reason under either document.',
        ],
        cites: [
          { title: 'Optum National Network Manual (BH02330, effective September 1, 2026): claims submission and Form 1500 required fields', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
          { title: '2026 UnitedHealthcare Care Provider Administrative Guide (Commercial), Chapter 10: complete claim and NPI requirements', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Line of business', desc: 'Commercial vs. RMHP (UHC\'s Colorado Medicaid footprint) — RMHP members follow the state FFS ABA process, not this policy.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5-TR ASD diagnosis confirmed with a validated tool (ADI-R, ADOS-2, etc.) — Optum\'s bar is specific.' },
      { title: 'Age', desc: 'The Colorado mandate has no age limits — don\'t screen out older clients on age alone.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum — ABA State Mandates supplemental criteria (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'C.R.S. § 10-16-104 (FindLaw, current through 1/1/2025)', url: 'https://codes.findlaw.com/co/title-10-insurance/co-rev-st-sect-10-16-104/' },
      { title: 'HB26-1425 — Applied Behavior Analysis Services (Colorado General Assembly)', url: 'https://leg.colorado.gov/bills/HB26-1425' },
      { title: 'HCPF — Accountable Care Collaborative Phase III', url: 'https://hcpf.colorado.gov/accphaseIII' },
      { title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
      { title: 'C.R.S. § 10-16-106.5 — Prompt payment of claims (CRS 2024 official printout, Title 10)', url: 'https://leg.colorado.gov/sites/default/files/images/olls/crs2024-title-10.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Colorado\'s mandate carries no age limit: C.R.S. § 10-16-104(1.4) applies to all health benefit plans issued or renewed in the state except short-term limited-duration policies and individual grandfathered plans, with no age terms and no dollar caps (the cap language was struck effective 1/1/2017). The carrier\'s national ABA policy adds no age bound of its own, so age comes from the benefit document — and self-funded ERISA plans sit outside the mandate entirely. Colorado still has no entry in Optum\'s ABA State Mandates supplemental criteria (BH803ABASTM72026, effective July 2026), so no carrier-specific state overlay narrows this.',
        status: 'plan-dependent',
        cites: [
          { title: 'C.R.S. § 10-16-104 (FindLaw, current through 1/1/2025)', url: 'https://codes.findlaw.com/co/title-10-insurance/co-rev-st-sect-10-16-104/' },
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
        verifyVia:
          'Benefits verification on the specific plan — funding type first, then the ABA benefit terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Optum\'s Supplemental Clinical Criteria set no recency clock on the ASD diagnosis. What they require instead is current assessment: the comprehensive diagnostic evaluation and functional assessment "form the basis for the treatment plan," baseline skills and norm-referenced measures must reflect the individual\'s "specific and current abilities," and continued coverage rides on documentation of movement from baseline at each 4–6 month review.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      diagnosingProviders: {
        value:
          '"A valid diagnosis of ASD (or other applicable diagnosis as required by governing laws) must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis according to the diagnostic criteria based on the DSM-5-TR." The diagnosing clinician must also confirm and document the severity level.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      diagnosticTools: {
        value:
          'The DSM-5-TR diagnosis and severity level must be "confirmed and documented by the diagnosing clinician using at least one clinically validated tool," on a three-tier list: first-level screening (ABC, CHAT/M-CHAT, CSBS-DP-IT Checklist, ASQ, AQ, CAST), second-level screening (CARS/CARS-2, RITA-T, STAT) and formal diagnostic tools used in a comprehensive evaluation (ADI-R, ADOS/ADOS-2, DISCO). Treatment intensity must then be set against at least one validated measurement tool — ATEC, VB-MAPP, ABLLS/ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, VABS or CFQL-2.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      referral: {
        value:
          'No physician referral or order is required. The front door is Optum\'s two-step authorization on Provider Express — "Prior authorization is required for ABA (unless otherwise specified or mandated by contract or law)" — with the diagnosis, the credentialed ABA provider and the assessment package standing in for a referral.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      telehealth: {
        value: 'Three codes, after an attestation. Optum’s Telehealth Billing guide (updated September 2025) is explicit for commercial plans: “For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157” — virtual supervision of technicians and family training — so technician-delivered 97153 is not payable by telehealth. The provider must first be “an approved Optum virtual visits provider who has attested” (the virtual-visits attestation on Provider Express) and must tell the ABA Care Advocate at authorization. Bill the in-person code with the member’s location as the place of service: POS 10 when the member is at home, POS 02 anywhere else (the older ABA CPT FAQ says POS 02; the 2025 guide requires one of the two on every behavioral-health telehealth claim, and POS 11 or a telehealth modifier alone is not paid). Optum’s criteria add that telehealth is “not intended to supplant in-person service.” The assessment is not on that list: 97151 (initial assessment and reassessment) and 97152 are not payable by telehealth for commercial members, so plan the assessment in person. Supervision is: 97155 is billed with the in-person code and POS 02 or 10 after the attestation (Optum\'s ABA FAQ, Q29), and Optum publishes no minimum in-person share of supervision.',
        status: 'verified',
        cites: [
          { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured Colorado plans follow C.R.S. § 10-16-112.5: within five business days after receipt the carrier must say the request is "approved, denied, or incomplete" (naming the missing information), then decide within five business days after receiving it; urgent requests within "two business days but not longer than seventy-two hours." If the carrier misses those deadlines the request "is deemed granted" — but the provider must send any requested information within two business days of the notice or loses that protection. An approval "is valid for at least one hundred eighty days after the date of approval and continues for the duration of the authorized course of treatment." Self-funded (ERISA) plans follow the federal claims rule instead: pre-service decisions within 15 days of receipt (one 15-day extension), urgent within 72 hours. UnitedHealthcare\'s commercial administrative guide states "Standard requests: up to 15 calendar days" and "Expedited requests: 72 hours," and asks for requests "at least 15 calendar days in advance, if possible," and at least 5 business days before the service — for a fully insured Colorado plan the state\'s shorter clock controls. ABA reviews run through Optum Behavioral Health.',
        status: 'plan-dependent',
        cites: [
          { title: 'C.R.S. § 10-16-112.5 — Prior authorization for health-care services', url: 'https://colorado.public.law/statutes/crs_10-16-112.5' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: '2026 UnitedHealthcare Care Provider Administrative Guide (commercial)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
        ],
        verifyVia: 'Benefits verification: fully insured Colorado policy (5-business-day clock, 180-day approvals, deemed-granted rule) vs. self-funded ERISA plan (15 days / 72 hours).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two parents\' plans, Colorado\'s group coordination-of-benefits regulation (fully insured plans): parents married or living together — "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (same birthday → the plan that covered the parent longer); otherwise a court decree controls, and without one the order is custodial parent, custodial parent\'s spouse, non-custodial parent, then the non-custodial parent\'s spouse. Self-funded plans set their own order in the plan document. UnitedHealthcare: "COB is administered according to the member\'s benefit plan and in accordance with law"; Optum: "You are responsible for determining if the member has other insurance coverage. If so, you should bill the primary insurance carrier first, then notify Optum of your findings." If the child also has TRICARE, this plan pays first — TRICARE is the secondary payer to other health insurance under its double-coverage rule (Medicaid is the only coverage it pays ahead of). CHAMPVA likewise pays last: "In double coverage situations, CHAMPVA would be the last payer." If the child also has Medicaid, this plan is primary and Medicaid pays last.',
        status: 'plan-dependent',
        cites: [
          { title: '3 CCR 702-4-6-2-6 — Rules for Coordination of Benefits (LII)', url: 'https://www.law.cornell.edu/regulations/colorado/3-CCR-702-4-6-2-6' },
          { title: '2026 UnitedHealthcare Care Provider Administrative Guide (commercial)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
          { title: 'Optum Behavioral Health — National Network Manual (effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.270 — CHAMPVA definitions, double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
          { title: 'HCPF — General Provider Information Manual (Third-Party Liability / Coordination of Benefits)', url: 'https://hcpf.colorado.gov/gen-info-manual' },
        ],
        verifyVia: 'Benefits verification with both plans: funding type, which is primary for the child, and whether the secondary plan requires its own authorization.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Two numbers, from two documents. Clinically, "consistent with CASP standards of care, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week," with technicians under the supervision of a BCBA or licensed behavioral health clinician and parents discouraged from serving as their own child\'s RBT. On the claim side, the commercial reimbursement policy polices the boundary rather than a ratio: "CPT codes 97153 and 97155 may not be billed for technician training," and 97155 "should be reported only for services where the QHP is either engaged directly with the patient or is directing a technician in implementing a modified protocol with the patient" — treatment planning is indirect and not separately reimbursable. Neither Optum document caps the number of technicians one BCBA may supervise.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'Yes, with a single-provider exclusion. "Can I report 97153 or 97154 with 97155 concurrently? A. Yes, as long as the criteria in the descriptors of both codes are met. A single QHP may not report 97153 or 97154 with 97155 concurrently." So the concurrency has to be two people — technician on 97153, analyst on 97155 directing them with the patient present. Separately, 97155 and 97156 may both pay on the same date of service only if the services are separate, distinct and clearly documented in the progress notes.',
        status: 'verified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
      dailyLimits: {
        value:
          'Optum publishes its own per-day table on top of CMS MUEs — maximum frequency per day: 97151 32 units (8 hrs), 97152 16 (4 hrs), 97153 32 (8 hrs), 97154 18 (4.5 hrs), 97155 24 (6 hrs), 97156 16 (4 hrs), 97157 16 (4 hrs), 97158 16 (4 hrs), 0362T 16 (4 hrs), 0373T 32 (8 hrs). MUEs otherwise apply per CMS guidance, and billing above 32 units/day of 97153 "may be subject to non-reimbursement or recovery."',
        status: 'verified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
      noteSignature: {
        value: '“Provider signature is required on progress notes. Parent/guardian signatures are not required on progress notes” (Optum ABA CPT FAQ). Each daily session note records place of service, start and stop time, who rendered the service, the specific service, who attended and the interventions. Optum’s ABA documentation protocol (June 1, 2026) requires the “signature of the rendering provider” and “Legible identity of the rendering provider with credentials,” and “The date of signature must reflect the date the note is finalized” — a note signed after the date of service must follow late-entry rules and show the date it was signed. Same-date services must be “separate, distinct, and clearly documented in the progress notes,” or the claim may be denied.',
        status: 'verified',
        cites: [
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
          { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
        ],
      },
      placeOfService: {
        value:
          'No POS code list is published. The clinical criteria draw the school line instead: ABA is not covered for "services that are not ABA therapy, such as 1:1 aid delivered simultaneously during classroom instruction, or services covered under the Individuals with Disabilities Education Act (IDEA)," while "school ABA services do allow for coordination of services and would cover services such as teacher training, meetings with school personnel, and observations in the school setting."',
        status: 'plan-dependent',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'UnitedHealthcare/Optum provider services and the member\'s benefit document.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'One provider-level modifier per line, matching whoever actually rendered the service: HM = Registered Behavior Technician (less than bachelor\'s level), HN = BCaBA (bachelor\'s level), HO = BCBA or master\'s-level licensed clinician, HP = BCBA-D or doctoral-level licensed clinician. A billable ABA-supervisor service is billed with the applicable CPT code plus HO. Stacking level modifiers is a denial risk: "Billing multiple provider-level modifiers (HN, HM, HO, HP) on the same service line same service and same DOS is not appropriate and may result in claim denial."',
        status: 'verified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Colorado?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Colorado\'s mandate (C.R.S. § 10-16-104(1.4)) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'Does Optum have Colorado-specific ABA criteria?', a: 'No — Colorado has no entry in Optum\'s ABA State Mandates supplemental criteria (effective January 2026), so the national two-step authorization guideline plus the state mandate is the whole picture.' },
      { q: 'What if the family is on Rocky Mountain Health Plans (RMHP)?', a: 'RMHP is UnitedHealthcare\'s Colorado Medicaid footprint, but ABA is a state fee-for-service carve-out — RMHP does not authorize or pay ABA claims. Those members follow the Health First Colorado process (Acentra PAR, state fee schedule) in our Colorado Medicaid guide.' },
      { q: 'What does UnitedHealthcare pay for ABA in Colorado?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Health First Colorado fee schedule, and treat rate-setting as part of contracting.' },
      { q: 'How often does UnitedHealthcare (Optum) reauthorize ABA?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale.' },
      { q: 'Can the ABA assessment (97151) or BCBA supervision (97155) be done by telehealth with UnitedHealthcare in Colorado?', a: 'Supervision yes, assessment no. For commercial plans Optum allows telehealth only on 97155, 97156 and 97157, after a virtual-visits attestation, billed with POS 02 or 10. The 97151 assessment is not on that list.' },
      { q: 'Is UnitedHealthcare (Optum) accepting new ABA providers in Colorado?', a: 'Optum takes ABA applications through the "Join Our Autism/ABA Network" section of Provider Express. Credentialing takes 45 to 120 days after a complete submission, plus a site audit for new agencies. Optum publishes no statement that its network is closed.' },
      { q: 'Does UnitedHealthcare pay for ABA in school in Colorado?', a: 'Mostly no. Optum\'s ABA FAQ says school-based services are reviewed for medical necessity, but "school-based ABA services or services that are otherwise covered under the Individuals with Disabilities Education Act (IDEA) are not covered (e.g., a 1:1 aid in the school setting)." Coordination is covered: teacher training, meetings with school staff and observations in school.' },
      { q: 'Can an out-of-state BCBA treat UnitedHealthcare members in Colorado, including by telehealth?', a: 'Colorado has no behavior analyst license yet; HB26-1425 makes one mandatory from July 1, 2028. Optum (UnitedHealthcare) requires telehealth providers to “be licensed in the state where the member is located at the time of service”; ask Optum how it applies that before Colorado licensing starts.' },
      { q: 'What is UnitedHealthcare’s timely filing limit in Colorado?', a: 'Optum Behavioral Health, which manages UnitedHealthcare’s ABA benefit, requires claims within 90 calendar days of the date of service unless state or federal law or the member’s plan allows longer (National Network Manual, effective September 1, 2026).' },
      { q: 'How fast must UnitedHealthcare pay a clean ABA claim in Colorado?', a: 'Colorado law (C.R.S. § 10-16-106.5) gives a fully insured plan 30 calendar days to pay, deny or settle a clean electronic claim (45 for paper), 90 days for any claim absent fraud, with 10% interest and a 20% penalty after 90 days. Self-funded employer plans are not bound by the statute.' },
      { q: 'Does UnitedHealthcare require a referring provider (box 17) on ABA claims?', a: 'No. Optum’s claim requirements do not include a referring provider. UnitedHealthcare makes the referring name and NPI mandatory only for lab, DME, imaging and home health claims. For other claims it encourages the referring NPI but does not require it.' },
      { q: 'What do HM, HN, HO and HP mean on a UnitedHealthcare / Optum ABA claim?', a: 'They identify who rendered the service: HM an RBT (less than bachelor’s level), HN a BCaBA (bachelor’s level), HO a master’s-level BCBA or licensed clinician, HP a BCBA-D or doctoral-level clinician. One per line; 97151 and 97155–97158 cannot take HM; 0362T/0373T take none (Optum ABA Reimbursement Policy 2022RP501A, June 2026).' },
    ],
  },

  'anthem-bcbs-colorado': {
    slug: 'anthem-bcbs-colorado',
    payer: 'Anthem BCBS Colorado',
    state: 'CO', kind: 'commercial',
    family: 'anthem',
    cardDesc: 'Anthem reviews ABA in-house (not Carelon); weekly approved units since 3/1/2026; no mandate caps.',
    assessmentPA: {
      value: 'Yes — 97151 sits inside the authorized ABA set; the request goes to Anthem behavioral health via Availity Essentials',
      status: 'verified',
      cites: [
        { title: 'Anthem Colorado Precertification/Prior Authorization List (updated 07/10/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/CO_PA_List.pdf' },
        { title: 'Anthem Colorado — Streamlined ABA claim process starts March 1, 2026', url: 'https://providernews.anthem.com/colorado/articles/streamlined-aba-claim-process-starts-march-1-2026-27885' },
      ],
    },
    treatmentPA: {
      value: 'Yes — and since March 1, 2026 the authorization is denominated in weekly approved units',
      status: 'verified',
      cites: [
        { title: 'Anthem Colorado — Streamlined ABA claim process starts March 1, 2026', url: 'https://providernews.anthem.com/colorado/articles/streamlined-aba-claim-process-starts-march-1-2026-27885' },
        { title: 'Anthem Colorado Precertification/Prior Authorization List (updated 07/10/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/CO_PA_List.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — and Colorado requires the treatment itself to be prescribed or ordered by a licensed physician or licensed psychologist',
      status: 'verified',
      cites: [
        { title: 'C.R.S. § 10-16-104 (Justia)', url: 'https://law.justia.com/codes/colorado/title-10/article-16/part-1/section-10-16-104/' },
        { title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' },
      ],
    },
    pill: 'Payer Guide · Anthem BCBS · Colorado',
    h1: 'Anthem BCBS Colorado ABA coverage: the intake guide.',
    metaTitle: 'Anthem BCBS Colorado ABA Coverage & Prior Auth: Intake Guide | Carelu',
    metaDescription:
      'How Anthem Blue Cross and Blue Shield covers ABA in Colorado: who actually reviews the authorization, the March 2026 weekly-unit change, Colorado\'s uncapped autism mandate under C.R.S. § 10-16-104(1.4), the 2028 behavior-analyst license, and what intake must verify.',
    intro: [
      'Anthem in Colorado is Rocky Mountain Hospital and Medical Service, Inc., with HMO products underwritten by HMO Colorado, Inc. Three things make Colorado different from the rest of Anthem\'s footprint, and all three are worth knowing before the first authorization goes out: Anthem publishes a Colorado-specific ABA provider resource guide rather than folding the state into its multi-state one; Colorado\'s autism mandate lost its dollar caps years ago and never had a small-group carve-out; and since March 1, 2026 Anthem authorizes ABA in weekly approved units, so a claim that exceeds the weekly number gets adjusted even when the total authorization still has room.',
      'As always, plan funding type is the first fact to establish. Colorado\'s mandate binds health benefit plans issued or renewed in the state; self-funded ERISA plans are outside state insurance law entirely and answer to federal parity instead. Anthem\'s own Colorado precertification list says as much in its scope note — it applies to local fully-insured members and only to those self-insured (ASO) members whose group purchased the medical-management program.',
    ],
    atGlance: [
      { label: 'Who reviews ABA', value: 'Anthem — behavioral health, 800-424-4014 (not Carelon)' },
      { label: 'Criteria applied', value: 'MCG B-806-T — replaced CG-BEH-02 for ABA on June 1, 2024' },
      { label: 'Submit via', value: 'Availity Essentials → Authorizations and Referrals' },
      { label: 'Authorization unit', value: 'Weekly approved units, effective March 1, 2026' },
      { label: 'State mandate', value: 'C.R.S. § 10-16-104(1.4) (SB 09-244)' },
      { label: 'Mandate caps', value: 'None — the dollar-cap language was struck effective 1/1/2017' },
      { label: 'Exempt from mandate', value: 'Short-term limited duration; individual grandfathered; self-funded ERISA' },
      { label: 'Who may order ABA', value: 'A licensed physician or licensed psychologist must prescribe or order it' },
      { label: 'Licensure', value: 'No Colorado license yet — board created 2026, practice license required 7/1/2028' },
    ],
    sections: [
      {
        h2: 'Who actually reviews the authorization — and the Carelon trap',
        cites: [
          { title: 'Anthem Colorado Precertification/Prior Authorization List (updated 07/10/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/CO_PA_List.pdf' },
          { title: 'Anthem Colorado — submit behavioral health authorizations through Availity Essentials', url: 'https://providernews.anthem.com/colorado/articles/streamline-your-workflow-submit-behavioral-health-authorizat-27237' },
        ],
        body: [
          'Anthem\'s Colorado precertification list carries an explicit "Responsible party" column, and it spells out how to read it: if Anthem is listed, Anthem reviews; if Carelon Medical Benefits Management is listed, Carelon reviews; if CarelonRx is listed, CarelonRx reviews. The behavioral health row reads "Behavioral Health Services — Inpatient and Outpatient," responsible party Anthem, with the criteria column pointing to a phone number: Behavioral Health at 800-424-4014. The general care-provider precertification line on the same document is 800-832-7850.',
          'That matters because the Colorado list is full of Carelon references, and they are the wrong Carelon. Carelon Medical Benefits Management runs Anthem\'s imaging, genetic testing, cardiology, musculoskeletal, sleep, oncology and rehabilitative-therapy programs — it owns 97150 (group therapeutic procedures) and the PT/OT/speech codes, but not ABA. Carelon Behavioral Health is a different Elevance company; nothing in the current Colorado commercial precertification list assigns it ABA utilization review. Route an ABA request to providerportal.com and it goes to a vendor that does not handle it.',
          'Since September 1, 2025 Anthem has asked that behavioral health authorizations be submitted through Availity Essentials — log in, select Authorizations and Referrals, then the Patient Registration tab. Treat that as the front door and the 800-424-4014 line as the escalation path.',
        ],
      },
      {
        h2: 'CG-BEH-02 is no longer the criteria set — MCG B-806-T is',
        cites: [
          { title: 'Anthem Colorado — MCG Care Guidelines 27th edition update (Feb 1, 2024)', url: 'https://files.providernews.elevancehealth.com/3731/COBCBS-CM-047275-23-MCG-Care-Gdlns-27th-Ed-6.1.24-Updte-BH_FINALv2.pdf' },
          { title: 'Anthem — ABA Provider Resource Guide, Colorado (July 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' },
        ],
        body: [
          'Plenty of ABA billing playbooks still say Anthem reviews ABA under clinical guideline CG-BEH-02, "Adaptive Behavioral Treatment." For Colorado commercial that stopped being true in 2024. A signed Anthem letter to Colorado providers, dated February 1, 2024 and flagged as a material adverse change, states that beginning with dates of service on or after June 1, 2024, Anthem and its subsidiary HMO Colorado, Inc. would transition from CG-BEH-02 and MCG W0153 to MCG B-806-T, Behavioral Health Care Applied Behavioral Analysis (Original MCG Guideline), for medical necessity and clinical appropriateness reviews.',
          'The practical consequence is that there is no public criteria document to write your treatment plan against. MCG guidelines are licensed and proprietary; Anthem does not publish them. So the leverage moves to the things Anthem does publish — the Colorado ABA provider resource guide below, the documentation standards, and a clean, data-anchored treatment plan. If a denial letter still cites CG-BEH-02, that is worth flagging on appeal.',
          'For reauthorization, the published floor is in the Colorado ABA provider resource guide: “Documentation must show that the treatment plan was reviewed and/or updated at a minimum of every 6 months,” with “standardized assessments and current clinical information” used at reviews “especially documenting improvement.” The guide names no graph or data-recency requirement. Anything more specific sits in the licensed MCG criteria, so ask Anthem Behavioral Health (800-424-4014) what it wants in the reauthorization packet.',
        ],
      },
      {
        h2: 'Weekly approved units: the March 2026 change that breaks old billing habits',
        cites: [
          { title: 'Anthem Colorado — Streamlined ABA claim process starts March 1, 2026', url: 'https://providernews.anthem.com/colorado/articles/streamlined-aba-claim-process-starts-march-1-2026-27885' },
          { title: 'Anthem — ABA Provider Resource Guide, Colorado (July 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' },
        ],
        body: [
          'Effective March 1, 2026, Anthem reimburses ABA in Colorado based on weekly approved units rather than total authorized units. Anthem\'s own framing of the consequence is blunt: claims should reflect the units rendered within each week, up to the weekly medically necessary limit as approved by prior approval, and claims submitted with units exceeding the weekly limit will be considered ineligible for reimbursement and will be adjusted accordingly.',
          'Practically, this ends the common pattern of banking unused hours and running a heavy make-up week after a vacation or a staffing gap. It also changes what intake needs to capture: a family\'s realistic, sustainable weekly availability is now a billing input, not just a scheduling nicety. The change applies across the whole ABA code set — 97151, 97152, 0362T, 97153, 97154, 97155, 97156, 97157, 97158 and 0373T.',
          'Code set: the Colorado ABA provider resource guide lists CPT 97151–97158, 0362T and 0373T and no HCPCS H-codes. ABA codes “may have associated MUE limits,” which Anthem administers as NCCI edits under its Code and Clinical Editing Guidelines policy.',
        ],
      },
      {
        h2: 'The Colorado mandate: no caps, no small-group carve-out',
        cites: [
          { title: 'C.R.S. § 10-16-104 (Justia)', url: 'https://law.justia.com/codes/colorado/title-10/article-16/part-1/section-10-16-104/' },
        ],
        body: [
          'Colorado\'s mandate — C.R.S. § 10-16-104(1.4), added by SB 09-244 — requires all health benefit plans issued or renewed in the state to cover the assessment, diagnosis and treatment of autism spectrum disorders, and it names applied behavior analysis explicitly in the definition of covered treatment. It is one of the stronger mandates in this directory for three reasons.',
          'First, the caps are gone. The pre-2017 text tied coverage to a rule from the commissioner requiring services actuarially equivalent to the old dollar limit; SB 15-015 struck that language effective January 1, 2017. What replaced it is a parity clause: coverage may not be subject to dollar limits, deductibles or coinsurance less favorable to the insured than those applying to physical illness generally. Second, there is no small-employer exemption anywhere in subsection (1.4) — the only carve-outs written into the definition of "health benefit plan" for this subsection are short-term limited-duration policies and individual grandfathered plans. Third, the statute forbids plans from excluding ASD or imposing additional authorization requirements that operate to exclude coverage.',
          'The limit on all of this is the familiar one: self-funded ERISA plans are preempted from state insurance law, so a Colorado family on a self-funded employer plan gets whatever the plan document and federal parity give them, not the mandate. Establish funding type before you quote anything from this section.',
        ],
      },
      {
        h2: 'Two Colorado requirements that gate the file',
        cites: [
          { title: 'C.R.S. § 10-16-104 (Justia)', url: 'https://law.justia.com/codes/colorado/title-10/article-16/part-1/section-10-16-104/' },
          { title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' },
        ],
        list: [
          { title: 'A physician or psychologist must order it', desc: 'The statute says treatment for autism spectrum disorders shall be prescribed or ordered by a licensed physician or licensed psychologist. A BCBA\'s recommendation alone does not satisfy it — capture the ordering clinician at intake, not at appeal.' },
          { title: 'The treatment plan is tied to the medical home', desc: 'Colorado requires the treatment plan to be developed in accordance with the patient-centered medical home as defined in C.R.S. § 25.5-1-103(5.5). Anthem\'s Colorado ABA guide reproduces this requirement and footnotes the statute, so it is a plan-document expectation, not just a statutory curiosity.' },
          { title: 'Who counts as an autism services provider', desc: 'The statute lists six qualification pathways, from a doctoral-level clinician licensed by the Colorado medical board down to a BACB Registered Behavior Technician working under the supervision of one of the higher tiers. The ladder is broader than "BCBA only," which matters when you are staffing a case.' },
        ],
      },
      {
        h2: 'Licensure: national certification now, a Colorado license in 2028',
        cites: [
          { title: 'Colorado HB26-1425 — Applied Behavior Analysis Services (Became Law)', url: 'https://leg.colorado.gov/bills/HB26-1425' },
          { title: 'Colorado DORA — Behavior Analyst program page', url: 'https://dpo.colorado.gov/BehaviorAnalyst' },
          { title: 'Colorado DORA — Behavior Analyst Applications and Forms (applications open mid-Spring 2028)', url: 'https://dpo.colorado.gov/BehaviorAnalyst/Applications' },
        ],
        body: [
          'Colorado has historically not licensed behavior analysts, leaning instead on the statutory "autism services provider" ladder and BACB certification. That changed in 2026: HB26-1425 became law and creates the Colorado Behavior Analyst Licensing Board under the Division of Professions and Occupations at DORA, with authority to license behavior analysts and assistant behavior analysts. The operative date is not now — on and after July 1, 2028, practising or offering applied behavior analysis without a board-issued license is prohibited, and doing so is a class 2 misdemeanor.',
          'As of October 11, 2026 all five board seats are still listed as vacant on the DORA program page and no license is being issued; DORA says behavior analyst and assistant behavior analyst applications "will be available in mid-Spring 2028" ahead of the July 1, 2028 date. So today\'s credentialing conversation with Anthem still runs on national certification plus the statutory ladder. The planning consequence is real, though: every analyst you expect to still be supervising Colorado cases in mid-2028 needs a licensure path, and the regulation carries a sunset review scheduled for September 1, 2031.',
        ],
      },
      {
        h2: 'Can an out-of-state BCBA treat a Colorado member, including by telehealth?',
        body: [
          'Colorado does not license behavior analysts yet. HB26-1425 creates a Colorado Behavior Analyst Licensing Board in DORA, and “on and after July 1, 2028, an individual is prohibited from engaging in or offering the practice of applied behavior analysis unless the individual is licensed by the board”; unlicensed practice after that date is a class 2 misdemeanor. Until then there is no Colorado behavior analyst license to hold, and BACB certification is the operative credential.',
          'Anthem’s ABA Provider Resource Guide (June 2025) lists BCBAs among approved providers, alongside “other mental health service providers licensed or authorized by the state in which they practice and recognized by the affiliated health plan Anthem to be eligible for reimbursement,” and sends providers to the state-specific Credentialing with Anthem pages; for telehealth it points to Anthem’s Virtual Visits reimbursement policy for the allowed codes. It does not say which state’s license a remote BCBA needs, so confirm with Anthem credentialing before treating a member remotely from another state.',
        ],
        cites: [
          { title: 'Colorado General Assembly — HB26-1425 (signed act): Colorado Behavior Analyst Licensing Board; licensure required from July 1, 2028', url: 'https://leg.colorado.gov/bills/HB26-1425' },
          { title: 'Anthem Blue Cross and Blue Shield Colorado — ABA Provider Resource Guide (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' },
        ],
      },
      {
        h2: 'Anthem Colorado timely filing: initial, corrected and secondary claims',
        body: [
          'Initial claims: 90 days from the date of service for a professional (ABA) claim, unless your agreement says otherwise. Anthem’s Colorado commercial manual (effective 1/1/2026; the 2027 edition keeps the wording) sets no number of its own: "Claims must be submitted within the timely filing timeframe specified in the Provider or Facility Agreement," and "Claims submitted after the timely filing period expires will be denied, unless proof of timely filing can be demonstrated." The number comes from Anthem’s 2019 amendment of its Colorado commercial agreements: "Effective for all claims received by Anthem on or after October 1, 2019, all impacted contracts will require the submission of all professional claims within ninety (90) days of the date of service," and Anthem "will refuse payment if submitted more than ninety (90) days after the date of service." Check your own agreement: an agreement signed later can carry a different period.',
          'Corrected and rejected claims: a correction goes in as a replacement of the whole claim (837P CLM05-3 frequency code 7, with the original payer claim number in REF F8), or as a void/cancel (frequency code 8) for a claim billed in error. The manual gives no separate, longer window for corrections. For rejections it says: "Any rejected Claims must be corrected and resubmitted within the timely filing period." Only an accepted claim on the clearinghouse report counts as proof of timely filing. A timely-filing denial is appealed in writing through Availity’s Claims Status application, with the proof attached, not by phone.',
          'Secondary (COB) claims: "If Plan is the secondary payor, the ninety (90) day period will not begin until Provider receives notification of primary payor’s responsibility." Send the primary carrier’s EOB with the claim. Anthem’s COB notice says the documentation must show the claim reached Anthem within the filing limit counted from the date of the primary’s remittance advice. If the primary denied the claim, the clock runs from the date of its denial letter, which must be dated and on letterhead. A claim sent to Anthem as primary when Anthem is secondary denies for the missing EOB.',
          'Other claim fields: the Colorado commercial manual sets no EVV, taxonomy or referring/ordering-provider requirement for ABA claims. Where it mentions the referring provider, the purpose is routing out-of-area independent lab and specialty-pharmacy claims, not ABA.',
        ],
        cites: [
          { title: 'Anthem Colorado — Commercial Provider and Facility Manual (effective 1/1/2026): Claims Submission, Proof of Timely Filing, Corrected Claim Guidance', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/manuals/PM_CO_00015.pdf' },
          { title: 'Anthem Colorado — 2027 Commercial Provider Manual (effective 1/1/2027, posted 9/30/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/manuals/PM_CO_00016.pdf' },
          { title: 'Anthem Colorado Provider News (Commercial, September 2019): Reminder — changes to timely filing requirements coming in October', url: 'https://providernews.anthem.com/colorado/articles/reminder-changes-to-timely-filing-requirements-coming-in-october-5-3083' },
          { title: 'Anthem Colorado Provider News: Coordination of benefits — how to avoid timely filing denials', url: 'https://providernews.anthem.com/colorado/articles/coordination-of-benefits-how-to-avoid-timely-filing-denials-20502' },
        ],
      },
      {
        h2: 'How fast must Anthem Blue Cross and Blue Shield pay a clean claim in Colorado?',
        body: [
          'Colorado’s prompt-pay statute, C.R.S. § 10-16-106.5, requires clean claims to be “paid, denied, or settled within thirty calendar days after receipt by the carrier if submitted electronically and within forty-five calendar days after receipt by the carrier if submitted by any other means.” A claim that needs more information must get a written explanation of what is missing within thirty calendar days, and absent fraud every claim must be paid, denied or settled within ninety calendar days. A carrier that misses the clean-claim deadline owes 10% annual interest on the amount ultimately allowed, and one that misses the ninety-day deadline owes a penalty of 20% of that amount. These statutes bind fully insured plans issued in the state; a self-funded employer plan (ERISA) is not subject to them and follows its plan documents and your contract.',
          'Anthem’s Colorado commercial manual (effective 1/1/2026) publishes no payment-cycle calendar, check-run day or weekly submission cutoff. It covers only how payment arrives: electronic funds transfer through EnrollSafe (enrollsafe.payeehub.org). For providers not enrolled in EFT, Anthem is moving some payments from paper checks to a virtual credit card, and enrolling in EFT opts you out of virtual card payments. For a particular payment date, ask Anthem provider services or check the remittance in Availity.',
        ],
        cites: [
          { title: 'C.R.S. § 10-16-106.5 — Prompt payment of claims (CRS 2024 official printout, Title 10)', url: 'https://leg.colorado.gov/sites/default/files/images/olls/crs2024-title-10.pdf' },
          { title: 'Anthem Colorado — Commercial Provider and Facility Manual (effective 1/1/2026): Claims Submission, Proof of Timely Filing, Corrected Claim Guidance', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/manuals/PM_CO_00015.pdf' },
        ],
      },
      {
        h2: 'Out-of-state Blue members in Colorado (BlueCard)',
        body: [
          'If you are in Anthem’s Colorado network and the child’s card is from another Blue plan, the BlueCard program routes the claim through Anthem. Anthem’s Colorado manual says BlueCard "allows Providers and Facilities to submit Claims for Members from other Blue Plans, domestic and international, to Anthem. Anthem is the sole contact for Claims payment, adjustments, and issue resolution." Bill Anthem, not the member’s home plan.',
          'The home plan still owns the member’s benefits. Anthem lists "Medical records requested by a Member’s Blue Cross Blue Shield (BlueCard) home plan" among the reasons it may ask for records beyond the claim. Provider disputes on BlueCard claims "are filed directly to the local Blue plan (Colorado)," but when the dispute is about the member’s benefits and you appeal on the member’s behalf, "appeals are coordinated with the Member’s benefit office for final determination."',
          'Anthem’s manual does not say whose ABA prior-authorization rules apply to a BlueCard member. The detail sits in the separate BlueCard Provider Manual, which the manual says is in the Provider Manual Library. Before the first session, ask the home plan (the number on the member’s card) about its ABA precertification requirements. Do not assume Anthem’s own list applies.',
        ],
        cites: [
          { title: 'Anthem Blue Cross and Blue Shield Colorado Provider and Facility Manual (effective January 1, 2026): BlueCard Program Overview, medical records, provider disputes', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/manuals/PM_CO_00015.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type, first', desc: 'Fully insured Colorado plan (mandate applies) vs. self-funded ERISA (preempted, federal parity only). Anthem\'s Colorado precert list applies to local fully-insured members and only to ASO members whose group purchased the medical-management program — so funding type also decides whether the precert rules on this page apply at all.' },
      { title: 'The ordering physician or psychologist', desc: 'Colorado requires ABA to be prescribed or ordered by a licensed physician or licensed psychologist. Get the name, credential and order date up front; it is the cheapest fix at intake and the most expensive one at appeal.' },
      { title: 'Diagnosis report and evaluation date', desc: 'DSM-5 ASD diagnosis, the diagnosing provider and their credentials, and the instruments used.' },
      { title: 'Realistic weekly availability', desc: 'Weekly approved units mean the schedule the family can actually keep is a billing constraint. Over-request and you bank hours you cannot bill; under-request and you cannot flex.' },
      { title: 'Supervising BCBA identity and NPI', desc: 'Technician-delivered sessions must carry the supervising BCBA or other qualified healthcare professional in box 31 of the CMS-1500 — decide who that is before the first session, not at the first claim rejection.' },
    ],
    sources: [
      { title: 'Anthem Colorado Provider News: Coordination of benefits — how to avoid timely filing denials', url: 'https://providernews.anthem.com/colorado/articles/coordination-of-benefits-how-to-avoid-timely-filing-denials-20502' },
      { title: 'Anthem Colorado Provider News (Commercial, Sept 2019): changes to timely filing requirements', url: 'https://providernews.anthem.com/colorado/articles/reminder-changes-to-timely-filing-requirements-coming-in-october-5-3083' },
      { title: 'Anthem Colorado — 2027 Commercial Provider Manual (effective 1/1/2027)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/manuals/PM_CO_00016.pdf' },
      { title: 'Anthem Colorado — Commercial Provider and Facility Manual (effective 1/1/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/manuals/PM_CO_00015.pdf' },
      { title: 'Anthem Colorado Precertification/Prior Authorization List (updated 07/10/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/CO_PA_List.pdf' },
      { title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' },
      { title: 'Anthem Colorado — Streamlined ABA claim process starts March 1, 2026', url: 'https://providernews.anthem.com/colorado/articles/streamlined-aba-claim-process-starts-march-1-2026-27885' },
      { title: 'Anthem Colorado — submit behavioral health authorizations through Availity Essentials', url: 'https://providernews.anthem.com/colorado/articles/streamline-your-workflow-submit-behavioral-health-authorizat-27237' },
      { title: 'C.R.S. § 10-16-104 (Justia)', url: 'https://law.justia.com/codes/colorado/title-10/article-16/part-1/section-10-16-104/' },
      { title: 'Colorado HB26-1425 — Applied Behavior Analysis Services (Became Law)', url: 'https://leg.colorado.gov/bills/HB26-1425' },
      { title: 'Colorado DORA — Behavior Analyst program page', url: 'https://dpo.colorado.gov/BehaviorAnalyst' },
      { title: 'Anthem Colorado — MCG Care Guidelines 27th edition update (Feb 1, 2024)', url: 'https://files.providernews.elevancehealth.com/3731/COBCBS-CM-047275-23-MCG-Care-Gdlns-27th-Ed-6.1.24-Updte-BH_FINALv2.pdf' },
      { title: 'C.R.S. § 10-16-106.5 — Prompt payment of claims (CRS 2024 official printout, Title 10)', url: 'https://leg.colorado.gov/sites/default/files/images/olls/crs2024-title-10.pdf' },
      { title: 'Anthem Blue Cross and Blue Shield Colorado — Provider News', url: 'https://providernews.anthem.com/colorado' },
    ],
    deliveryRules: {
      supervision: {
        value: 'No ratio is published — Anthem sets a supervision structure instead. Approved ABA service providers include "providers practicing under the direction and supervision of the BCBA," and the statutory autism-services-provider ladder Anthem reproduces ends with a BACB registered behavior technician who "provides direct services to a person with an autism spectrum disorder under the supervision of an autism services provider" in one of the five higher tiers. Anthem\'s own supervision paragraph is a billing rule rather than a dosage rule: supervised or directed services billed with a QHP-performed procedure are subject to its Incident To Services and Billing reimbursement policy. The Colorado ABA provider resource guide sets no caseload cap on technicians per BCBA either.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' },
          { title: 'C.R.S. § 10-16-104 (Justia)', url: 'https://law.justia.com/codes/colorado/title-10/article-16/part-1/section-10-16-104/' },
        ],
      },
      concurrentBilling: {
        value: 'Allowed only in the narrow case: a physician or other QHP billing 97155 can add 97153 only if both the technician and the QHP are face-to-face with the patient at the same time and the QHP is directing the technician.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' }],
      },
      dailyLimits: {
        value: 'No Anthem-specific daily unit ceiling is published for Colorado. ABA codes may carry CMS MUE limits, which Anthem administers as NCCI edits under its Code and Clinical Editing Guidelines reimbursement policy and refreshes when CMS publishes. The binding practical ceiling is instead the weekly approved units on the authorization (effective March 1, 2026).',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' },
          { title: 'Anthem Colorado — Streamlined ABA claim process starts March 1, 2026', url: 'https://providernews.anthem.com/colorado/articles/streamlined-aba-claim-process-starts-march-1-2026-27885' },
        ],
      },
      noteSignature: {
        value: 'Each entry must carry author identification — handwritten signature, unique electronic identifier, or initials — plus rendering provider credentials. Entries should be made at the time of service or shortly thereafter and should not exceed 30 days, with a signature date within 30 days of the date of service. Timed codes need total treatment minutes plus start and stop times in the record. Treatment plans must show review or update at least every 6 months.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' }],
      },
      placeOfService: {
        value: 'POS codes Anthem names for ABA in Colorado: 12 home, 11 office/clinic, 99 community, 03 school, 10 telehealth with the member at home, 02 telehealth with the member elsewhere — each subject to the member\'s coverage and plan review.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' }],
      },
      billAsProvider: {
        value: 'ABA performed by therapy assistants, behavior technicians or paraprofessionals must show the supervising BCBA or other qualified healthcare professional in box 31 of the CMS-1500. Degree-level modifiers HM (less than bachelor\'s), HN (bachelor\'s) and HO (master\'s) identify the rendering staff level.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' }],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'No age limit. C.R.S. § 10-16-104(1.4) requires all health benefit plans issued or renewed in Colorado to cover the assessment, diagnosis and treatment of autism spectrum disorders, naming applied behavior analysis in the definition of covered treatment, and carries no age terms — the dollar-cap language that once framed coverage was struck effective January 1, 2017 and replaced with a parity clause. The only carve-outs written into the subsection are short-term limited-duration policies and individual grandfathered plans; self-funded ERISA plans are preempted out.',
        status: 'verified',
        cites: [{ title: 'C.R.S. § 10-16-104 (Justia)', url: 'https://law.justia.com/codes/colorado/title-10/article-16/part-1/section-10-16-104/' }],
      },
      dxRecency: {
        value:
          'Not published. Anthem reviews ABA in Colorado against MCG B-806-T, which is licensed and proprietary, and the Colorado ABA provider resource guide states no recency rule for the diagnostic evaluation. The nearest published anchor is structural rather than temporal: the treatment plan must be prescribed "pursuant to a comprehensive evaluation or reevaluation," which contemplates re-evaluation without naming a clock.',
        status: 'unverified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' },
          { title: 'C.R.S. § 10-16-104 (Justia)', url: 'https://law.justia.com/codes/colorado/title-10/article-16/part-1/section-10-16-104/' },
        ],
        verifyVia:
          'Anthem Behavioral Health at 800-424-4014, or the authorization request itself through Availity Essentials — MCG B-806-T is not publicly available.',
        blocker: 'licensed',
      },
      diagnosingProviders: {
        value:
          'Who may make the ASD diagnosis is not published — the criteria set is MCG B-806-T, which Anthem does not publish. What Colorado does fix is the prescriber: the treatment plan is "developed for an individual by an autism services provider and prescribed by a licensed physician or a licensed psychologist pursuant to a comprehensive evaluation or reevaluation," and the statute requires treatment for ASD to be prescribed or ordered by a licensed physician or licensed psychologist. A BCBA\'s recommendation alone does not satisfy it.',
        status: 'unverified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' },
          { title: 'C.R.S. § 10-16-104 (Justia)', url: 'https://law.justia.com/codes/colorado/title-10/article-16/part-1/section-10-16-104/' },
        ],
        verifyVia:
          'Anthem Behavioral Health at 800-424-4014 for the diagnostic-credential standard applied under MCG B-806-T.',
        blocker: 'licensed',
      },
      diagnosticTools: {
        value:
          'Not published. Anthem\'s Colorado ABA provider resource guide covers credentialing, coding, documentation, place of service and supervision, but names no diagnostic or assessment instrument, and the operative criteria set (MCG B-806-T) is proprietary.',
        status: 'unverified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' }],
        verifyVia:
          'Anthem Behavioral Health at 800-424-4014 — ask which instruments MCG B-806-T expects behind the diagnosis and behind the requested intensity.',
        blocker: 'licensed',
      },
      referral: {
        value:
          'Required, and it is a Colorado-specific gate that catches files at appeal. The treatment plan must be "developed for an individual by an autism services provider and prescribed by a licensed physician or a licensed psychologist pursuant to a comprehensive evaluation or reevaluation," and must state the individual\'s diagnosis, the proposed treatment by type, frequency and anticipated duration, the anticipated outcomes stated as goals, and how often the plan will be updated. Capture the ordering clinician\'s name, credential and order date at intake.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' },
          { title: 'C.R.S. § 10-16-104 (Justia)', url: 'https://law.justia.com/codes/colorado/title-10/article-16/part-1/section-10-16-104/' },
        ],
      },
      telehealth: {
        value:
          'Payable, with the code list held elsewhere. Anthem names two telehealth places of service for ABA in Colorado — "10 = Telehealth (member located in home while receiving services)" and "02 = Telehealth (member located outside of home while receiving services)" — each "subject to the member\'s coverage and reviews by the plan." Which codes are eligible is governed by Anthem\'s Virtual Visits reimbursement policy: "allowed codes may vary. Refer to the Allowed virtual services in addition to CPT Appendix P to obtain codes that are eligible for reimbursement in your state."',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' }],
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured Colorado plans follow C.R.S. § 10-16-112.5: within five business days after receipt the carrier must say the request is "approved, denied, or incomplete" (naming the missing information), then decide within five business days after receiving it; urgent requests within "two business days but not longer than seventy-two hours." If the carrier misses those deadlines the request "is deemed granted" — but the provider must send any requested information within two business days of the notice or loses that protection. An approval "is valid for at least one hundred eighty days after the date of approval and continues for the duration of the authorized course of treatment." Self-funded (ERISA) plans follow the federal claims rule instead: pre-service decisions within 15 days of receipt (one 15-day extension), urgent within 72 hours. Anthem\'s Colorado precertification list and ABA resource guide publish no separate decision clock or submission lead time.',
        status: 'plan-dependent',
        cites: [
          { title: 'C.R.S. § 10-16-112.5 — Prior authorization for health-care services', url: 'https://colorado.public.law/statutes/crs_10-16-112.5' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification: fully insured Colorado policy (5-business-day clock, 180-day approvals, deemed-granted rule) vs. self-funded ERISA plan (15 days / 72 hours).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two parents\' plans, Colorado\'s group coordination-of-benefits regulation (fully insured plans): parents married or living together — "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (same birthday → the plan that covered the parent longer); otherwise a court decree controls, and without one the order is custodial parent, custodial parent\'s spouse, non-custodial parent, then the non-custodial parent\'s spouse. Self-funded plans set their own order in the plan document. Anthem\'s Colorado ABA documents publish no coordination-of-benefits rule of their own. If the child also has TRICARE, this plan pays first — TRICARE is the secondary payer to other health insurance under its double-coverage rule (Medicaid is the only coverage it pays ahead of). CHAMPVA likewise pays last: "In double coverage situations, CHAMPVA would be the last payer." If the child also has Medicaid, this plan is primary and Medicaid pays last.',
        status: 'plan-dependent',
        cites: [
          { title: '3 CCR 702-4-6-2-6 — Rules for Coordination of Benefits (LII)', url: 'https://www.law.cornell.edu/regulations/colorado/3-CCR-702-4-6-2-6' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.270 — CHAMPVA definitions, double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
          { title: 'HCPF — General Provider Information Manual (Third-Party Liability / Coordination of Benefits)', url: 'https://hcpf.colorado.gov/gen-info-manual' },
        ],
        verifyVia: 'Benefits verification with both plans: funding type, which is primary for the child, and whether the secondary plan requires its own authorization.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Anthem BCBS Colorado cover ABA therapy?', a: 'Yes. Colorado\'s mandate (C.R.S. § 10-16-104(1.4)) names applied behavior analysis as covered treatment for autism spectrum disorders in all health benefit plans issued or renewed in the state, and Anthem precertifies ABA as a behavioral health service. Self-funded ERISA plans sit outside the mandate, so confirm funding type first.' },
      { q: 'Does ABA prior authorization go to Anthem or to Carelon in Colorado?', a: 'To Anthem. Anthem\'s Colorado precertification list names Anthem as the responsible party for behavioral health services and points to its Behavioral Health line, 800-424-4014; submit through Availity Essentials. The Carelon names that appear throughout that list are Carelon Medical Benefits Management (imaging, genetics, cardiology, MSK, rehab therapy) and CarelonRx — neither handles ABA.' },
      { q: 'What changed for Anthem Colorado ABA claims in March 2026?', a: 'From March 1, 2026 reimbursement is based on weekly approved units rather than total authorized units. Units rendered above the approved weekly limit are ineligible for reimbursement and get adjusted, so banking hours across weeks no longer works.' },
      { q: 'Is there a dollar cap on ABA under Colorado\'s autism mandate?', a: 'No. The cap language was struck effective January 1, 2017, and the statute now requires that coverage not be subject to dollar limits, deductibles or coinsurance less favorable than those applied to physical illness generally. There is also no small-employer exemption in the autism subsection.' },
      { q: 'Does Colorado license behavior analysts?', a: 'Not yet, but it will. HB26-1425 became law in 2026 and creates the Colorado Behavior Analyst Licensing Board; on and after July 1, 2028 practising applied behavior analysis without a board-issued license is prohibited. Until then the statutory "autism services provider" ladder, built on BACB certification, is the operative standard.' },
      { q: 'Can an out-of-state BCBA treat Anthem members in Colorado, including by telehealth?', a: 'Colorado has no behavior analyst license yet; HB26-1425 makes one mandatory from July 1, 2028. Anthem’s ABA guide accepts BCBAs and providers “licensed or authorized by the state in which they practice”; confirm the license question with Anthem credentialing.' },
      { q: 'What is Anthem BCBS of Colorado\'s timely filing limit for claims?', a: 'For professional (ABA) claims it is 90 days from the date of service, unless your agreement says otherwise. Anthem moved its Colorado commercial agreements to 90 days for claims received from October 1, 2019, and its current manual defers to the timeframe in your Provider or Facility Agreement. Rejected claims must be corrected and resubmitted inside that same period. When Anthem is the secondary payer, the 90 days start when you receive the primary payer\'s determination, so send the primary EOB with the claim.' },
      { q: 'How fast must Anthem Blue Cross and Blue Shield pay a clean ABA claim in Colorado?', a: 'Colorado law (C.R.S. § 10-16-106.5) gives a fully insured plan 30 calendar days to pay, deny or settle a clean electronic claim (45 for paper), 90 days for any claim absent fraud, with 10% interest and a 20% penalty after 90 days. Self-funded employer plans are not bound by the statute.' },
      { q: 'I am in Anthem’s Colorado network. Can I treat a child with another state’s Blue plan?', a: 'Yes, through BlueCard. Submit the claim to Anthem, which is "the sole contact for Claims payment, adjustments, and issue resolution." The member’s home plan still sets the benefits and may ask for records. Check the home plan’s ABA prior-authorization rules before starting.' },
    ],
  },
};

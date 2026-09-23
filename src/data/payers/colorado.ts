import type { PayerConfig } from './types.js';

export const coloradoPayers: Record<string, PayerConfig> = {
  'colorado-medicaid': {
    slug: 'colorado-medicaid',
    cardDesc: 'No autism-dx gate; FFS carve-out (RAEs don\'t run ABA); PAR on everything; no 97156.',
    assessmentPA: {
      value: 'Required — ALL PBT services need a Prior Authorization Request (PAR) via Acentra\'s Atrezzo portal (ColoradoPAR.com), including the 97151 assessment',
      status: 'verified',
      cites: [
        { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
        { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — same Acentra PAR process; approvals valid up to 6 months, reauth needs charts-and-graphs progress data',
      status: 'verified',
      cites: [
        { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
        { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
      ],
    },
    dxRequired: {
      value: 'NO — no autism diagnosis required; any of three criteria (qualifying condition, functional interference, or safety risk) opens the benefit',
      status: 'verified',
      cites: [
        { title: 'Health First Colorado Criteria for Behavioral Therapies (Feb 2023)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Health%20First%20Colorado%20Criteria%20for%20Behavioral%20Therapies%20February%202023.pdf' },
        { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
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
      'Health First Colorado covers ABA for members age 20 and younger through the Pediatric Behavioral Therapies (PBT) EPSDT benefit — and it breaks the usual state-Medicaid mold twice. First, no autism diagnosis is required: the coverage criteria open the benefit on any of three pathways (a qualifying condition including but not limited to ASD, a functional interference with home/school/community life, or a safety risk), so intake should never turn a family away for lacking an ASD evaluation. Second, ABA is a statewide fee-for-service carve-out: Colorado\'s four Regional Accountable Entities administer the capitated behavioral health benefit, but PBT is not in that capitation — every PAR goes to the state\'s UM vendor Acentra, and every claim goes to the state fiscal agent, regardless of the member\'s RAE. The trade-off is authorization rigor: everything, including the initial assessment, is prior-authorized, and 97156 parent-training does not exist as a billable code here.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — age 20 and younger, via EPSDT (Pediatric Behavioral Therapies benefit)' },
      { label: 'Autism dx required?', value: 'NO — three qualifying pathways; ASD is one option, not a gate' },
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
        ],
        cites: [
          { title: 'Health First Colorado Criteria for Behavioral Therapies (Feb 2023)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Health%20First%20Colorado%20Criteria%20for%20Behavioral%20Therapies%20February%202023.pdf' },
          { title: 'Pediatric Behavioral Therapies Information for Providers (HCPF)', url: 'https://hcpf.colorado.gov/pediatric-behavioral-therapies-information-providers' },
        ],
      },
      {
        h2: 'PAR mechanics: everything is prior-authorized',
        body: [
          'The PBT Billing Manual is blunt: "All PBT services must be pre-approved in a Prior Authorization Request (PAR) process" — including the 97151 assessment, which many states leave auth-free. PARs go to Acentra through the Atrezzo portal (ColoradoPAR.com) and must include the ordering practitioner\'s prescription or Plan of Care with a diagnosis (ICD-10 preferred), a standardized norm-referenced adaptive-behavior assessment (the state does not mandate a specific instrument — provider\'s choice, completed by the PBT provider), the referral, treatment history, and measurable goals; supporting assessment and progress notes must be no more than 60 days old at submission. Approved PARs run up to six months, so reauthorization is a twice-a-year event: each new PAR needs documented meaningful, measurable, functional improvement "confirmed through data, documented in charts and graphs, durable over time," plus a signed revised treatment plan showing generalization outside the treatment setting. Documentation must meet CASP minimum requirements, and denials have four paths — PAR Reconsideration (second review by a different physician), a new PAR with added information, peer-to-peer, or member appeal to the Office of Administrative Courts.',
          'PM 25-005 (effective April 15, 2025) added operational teeth worth designing intake around: Health First Colorado will no longer cover 40 hours/week of clinic-based PBT when the child has access to school hours, unless the district shows the child can\'t be served in a classroom — school IEP hour counts must be submitted with EPSDT requests, so capture the school picture at intake. Credential floors are explicit: RBT minimum for 97153, BCBA (or equivalent) minimum for 97155, and all PBT providers had to re-enroll as Provider Type 83 (clinic) or 84 (individual) by September 1, 2025. EVV (Electronic Visit Verification) is mandatory for PBT delivered in home or community settings — an operational burden many states don\'t impose on ABA — and the memo warns of recoupment on documentation failures (nap time and other-provider co-treatment time are not billable).',
        ],
        cites: [
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
          { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
        ],
      },
      {
        h2: 'Rates: a flat assessment, a missing code, and a mid-year cut',
        body: [
          'Colorado\'s fee schedule has three quirks intake and billing must both know. First, 97151 pays a FLAT amount per assessment — $882.78 on the July 2025 schedule, billable once per 365 days — rather than per 15-minute unit (97151-TJ pays $40.24/unit, set at 2 units per 365 days). Second, 97156 does not exist here: the family adaptive behavior treatment guidance code is absent from the PBT allowable-code table (97151, 97151-TJ, 97153, 97154, 97155, 97158 only) and has no rate — caregiver training is instead a required element woven into the treatment plan, not separately billable revenue. Third, rates were cut mid-year: Special Provider Bulletin B2500528 (September 2025, under Executive Order D 2025 014\'s budget shortfall) reduced PBT rates for dates of service on or after October 1, 2025 — 97153 $18.17 → $17.20 and 97155 $26.62 → $25.80 per 15-minute unit, with the group codes hit hardest: 97154 $11.51 → $8.81 (-23%) and 97158 $17.83 → $9.34 (-48%). There are no credential-tier modifiers — a single rate per code (TJ modifier only on 97151). As of this review, no restoration has landed: HCPF\'s July 1, 2026 fee schedule carries the identical post-cut PBT rates, unchanged from January and April 2026 — and while a new 2.0% across-the-board Health First Colorado rate cut took effect July 1, 2026 under HB 26-1410\'s FY2026-27 budget, HCPF\'s own provider-news page confirms Pediatric Behavioral Therapy is explicitly exempted from that additional cut. Build revenue models on the post-October-2025 numbers, and treat group-based service lines with caution.',
        ],
        cites: [
          { title: 'FY2025-26 Health First Colorado Fee Schedule (July 2025 v1.4)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/01_CO_Fee%20Schedule_Health%20First%20Colorado_07012025%20v1.4.xlsx' },
          { title: 'Special Provider Bulletin B2500528 — Rate Reductions (Sep 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Special%20Provider%20Bulletin%20-%20Rate%20Reductions%20092025_B2500528_0.pdf' },
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
          { title: 'Health First Colorado Fee Schedule (July 1, 2026 v1.1) — PBT rates unchanged', url: 'https://hcpf.colorado.gov/provider-rates-fee-schedule' },
          { title: 'HCPF Provider News — PBT exempted from the HB 26-1410 2.0% rate cut (through 7/27/2026)', url: 'https://hcpf.colorado.gov/provider-news' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'Colorado turned technician credentialing into a billing condition in late 2025. Emergency rule MSB 25-09-04-A created Section 8.281 (emergency effective October 10, 2025; finally adopted December 12, 2025) after federal audit findings that uncredentialed technicians had been reimbursed — preliminary estimates put the potential repayment to CMS as high as $59 million. The rule requires billing providers to ensure every technician they supervise holds an active credential: an RBT (high school diploma, 40-hour BACB-specification training, passed competency exam, ongoing supervision per BACB requirements) or the QABA alternative, an ABAT (age 18+, high school diploma, 40 hours of approved coursework plus 15+ supervised hours, a 5% quarterly supervision requirement, passed competency exam). One honesty note on timing: the compliance deadline is currently suspended — HCPF\'s December 22, 2025 notice withdrew the December 12 deadline (which had itself replaced August 31) and promised a new date, while urging providers to reach full compliance now. Colorado has no state registry or license for technicians, so the requirement rides directly on the national certifications — and the BACB\'s own application already requires a criminal background check plus an abuse-registry check within 180 days of applying (the BACB does not require fingerprinting). For hiring pipelines, HB26-1425 (signed June 2, 2026) adds a one-time 45-day pre-certification billing window: Medicaid must reimburse for a not-yet-certified technician for at least 45 days while certification is pursued, but only after the tech clears a name-based judicial record check, completes all certification training, and completes abuse-and-neglect reporting training — the 45-day clock starts when those are done, the agency must submit quarterly technician rosters, and reimbursement requests must stop if certification isn\'t in hand by day 45. The law also protects titles: only techs holding a current, valid credential may be called "Registered Behavior Technician."',
          'Background screening now runs on three layers. Agency layer: Section 8.281.4 requires billing providers to complete ANNUAL background checks on every service provider they supervise — an ongoing employer obligation, not a hire-once event. Enrollment layer: HCPF\'s standard 42 CFR 455.434 screening imposes fingerprint-based checks on provider types designated high categorical risk and on any person with a 5%+ ownership or control interest in such a provider (the CY2026 federal institutional application fee is $750) — HCPF doesn\'t publish the risk category assigned to PBT Provider Types 83/84, so confirm whether enrollment-level fingerprinting applies with provider enrollment directly. Facility layer, center-based programs only: HB26-1425 makes ABA clinics CDHS-licensed day treatment facilities — license applications are due on or before August 1, 2026, and operating unlicensed becomes illegal August 1, 2027 — and the CDHS regime requires fingerprint-based CBI-plus-FBI checks on every applicant, owner, employee, newly hired employee, licensee, and adult 18+ residing in the clinic, screened against the C.R.S. 26-6-905(8) disqualifying offenses, plus a TRAILS check for confirmed child abuse or neglect findings; every new hire triggers a fresh investigation (with a portability exception for commonly owned clinics on a central records system). ABA delivered in homes, schools, or community settings is exempt from clinic licensure (C.R.S. 26-6-904(1)(e)), so this regime binds center-based operations only.',
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
    ],
    collect: [
      { title: 'Which of the three pathways applies', desc: 'ASD diagnosis, functional interference (with a standardized assessment), or safety risk — no autism dx needed, so screen for all three instead of gating on diagnosis.' },
      { title: 'Comprehensive evaluation within 12 months', desc: 'A signed diagnostic evaluation by the child\'s physician, NP, or psychologist — the 12-month recency clock is the real document gate.' },
      { title: 'Referral source', desc: 'MD/DO, PA, NP, or Licensed Psychologist — the prescription/Plan of Care anchors the PAR.' },
      { title: 'School enrollment and IEP hours', desc: 'PM 25-005 requires school hour counts with EPSDT requests; 40 hrs/week clinic-based PBT won\'t be approved when school is available.' },
      { title: 'Home/community service settings', desc: 'EVV is mandatory outside the clinic — capture where sessions will happen so operations can stand up visit verification.' },
    ],
    sources: [
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
      { title: 'HCPF Provider News — PBT exempted from the HB 26-1410 2.0% rate cut (through 7/27/2026)', url: 'https://hcpf.colorado.gov/provider-news' },
      { title: 'HCPF — Telemedicine Provider Information (allowed procedure codes, POS rules)', url: 'https://hcpf.colorado.gov/telemedicine-provider-information' },
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
          'No autism diagnosis is required at all — the benefit opens on any one of three pathways (a diagnosed condition for which behavioral therapy is evidence-based or evidence-informed, "including autism spectrum disorder"; inability to adequately participate in home, school or community activities; or a safety risk to self or others). Where an evaluation is performed, the Criteria name "a qualified health care professional such as the client\'s physician, nurse practitioner, or psychologist," and Section 8.281.2.E adds that a diagnostic evaluation "may be performed by a psychologist, developmental pediatrician, neurologist, or other credentialed clinician."',
        status: 'verified',
        cites: [
          { title: 'Health First Colorado Criteria for Behavioral Therapies (Feb 2023)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Health%20First%20Colorado%20Criteria%20for%20Behavioral%20Therapies%20February%202023.pdf' },
          { title: 'HCPF Emergency Rule MSB 25-09-04-A — Section 8.281 (Oct 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Doc%2009%20MSB%2025-09-04-Av1%20Emergency%20-%20Oct%202025.pdf' },
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
          'Required, and from a short list. "All Outpatient therapy services must have a written order/prescription/referral by any of the following: Physician (M.D. or D.O.); Physician Assistant; Nurse Practitioner; Licensed Psychologist" — Licensed Psychologist was added 8/12/2024 to align with the criteria and the federal ordering/prescribing/referring rules. The PAR must include the "legibly written and signed ordering practitioner prescription or approved Plan of Care" carrying the diagnosis (preferably ICD-10), reason for therapy, sessions per week, total duration, treatment history, measurable goals and medical-necessity documentation; and the claim must carry a valid OPR NPI in CMS-1500 field 17b, per 42 CFR § 455.440.',
        status: 'verified',
        cites: [{ title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' }],
      },
      telehealth: {
        value:
          'Covered, on any modality. "Pediatric Behavioral Therapists are covered under the telemedicine policy," and "Home Health Agency services and therapies, Hospice, and Pediatric Behavioral Treatment may be provided via any telemedicine modality" — unlike outpatient PT/OT/speech, which must have interactive audio-visual. Every PBT code is on the allowable-telemedicine list: 97151, 97153, 97154, 97155 and 97158. POS 02 is on the PBT allowed-place-of-service table and the telemedicine manual directs POS 02 or 10. Two conditions travel with it: "the use of telecommunications equipment for delivery of services does not change prior authorization requirements," and before the first telemedicine treatment the provider must furnish the member (or legal representative) signed written disclosure statements, after which the initial face-to-face requirement may be waived.',
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
          'Three layers, and one of them is a number. Code-level: "A Registered Behavior Technician (RBT) is the minimum qualification required to administer ABA services... under CPT code 97153," and "a Board-Certified Behavior Analyst (BCBA), or equivalent, is the minimum qualification required to administer services under CPT code 97155." Rule-level: Section 8.281.4.A.6 requires billing providers to ensure RBTs "receive ongoing supervision per the requirements of the BACB" and that ABATs "adhere to a 5% quarterly supervision requirement," plus annual background checks on every service provider they supervise and no sanctions from the applicable board. Exclusion-level: "asynchronous supervision or reviews" are expressly non-covered, as are "services not delivered or supervised by a qualified provider."',
        status: 'verified',
        cites: [
          { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
          { title: 'HCPF Emergency Rule MSB 25-09-04-A — Section 8.281 (Oct 2025)', url: 'https://hcpf.colorado.gov/sites/hcpf/files/Doc%2009%20MSB%2025-09-04-Av1%20Emergency%20-%20Oct%202025.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'Colorado publishes no rule on billing 97153 and 97155 for the same clock time. What it does publish is cross-discipline co-treatment: co-treatment between two outpatient therapists is covered only where "a valid clinical rationale for providing co-treatment must be present" and "each provider must have an approved plan of care which includes co-treatment," with notes describing the additional services, identifying the co-treatment providers and justifying the arrangement. The hard edge is the billing rule: "time while members are napping is not covered or billable time. Time while the other modality is treating is also not billable," and claims for either are subject to recoupment. The billing manual\'s co-treatment matrix says the same thing from the other side — "providers will only bill for the time interacting with the member, and not the total time in the room."',
        status: 'unverified',
        cites: [
          { title: 'HCPF PM 25-005 — Pediatric Behavioral Therapy Policy Clarification', url: 'https://hcpf.colorado.gov/sites/hcpf/files/HCPF%20PM%2025-005%20Pediatric%20Behavioral%20Therapy%20Policy%20Clarification.pdf' },
          { title: 'Pediatric Behavioral Therapies Billing Manual (HCPF)', url: 'https://hcpf.colorado.gov/pbt-manual' },
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
      { q: 'Does Colorado Medicaid require an autism diagnosis for ABA?', a: 'No — a genuine differentiator. The Criteria for Behavioral Therapies open the Pediatric Behavioral Therapies benefit on any of three pathways: a qualifying diagnosed condition (including but not limited to ASD), functional interference with home/school/community participation, or a safety risk to self or others. A signed comprehensive evaluation within the past 12 months is still required.' },
      { q: 'Do I submit Colorado ABA authorizations to the member\'s RAE?', a: 'No — PBT/ABA is a fee-for-service carve-out. Regardless of RAE region (RMHP, NHP, CCHA, or Colorado Access) or the Elevate MCO, all PARs go to the state UM vendor Acentra through the Atrezzo portal (ColoradoPAR.com), and claims go to the state fiscal agent.' },
      { q: 'Does the ABA assessment need prior authorization in Colorado?', a: 'Yes — unlike many states, ALL PBT services must be pre-approved in a PAR, including the 97151 assessment. Approved PARs run up to 6 months, so plan for reauthorization twice a year with charts-and-graphs progress data.' },
      { q: 'Can I bill 97156 parent training to Health First Colorado?', a: 'No — 97156 is not in the PBT allowable-code table and has no rate on the fee schedule. Caregiver training is a required element of the treatment plan, not a separately billable service.' },
      { q: 'What does Colorado Medicaid pay for ABA?', a: 'For dates of service on or after 10/1/2025: 97153 pays $17.20 and 97155 pays $25.80 per 15-minute unit (single rate per code, no credential tiers); 97151 pays a flat amount per assessment ($882.78 on the July 2025 schedule, before the October cut), once per 365 days. Group codes 97154/97158 were cut 23-48% in the same bulletin.' },
    ],
  },

  'aetna-colorado': {
    slug: 'aetna-colorado',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the C.R.S. § 10-16-104(1.4) mandate layer.',
    assessmentPA: {
      value: 'Required — precertification (form GR-69017-4), per Aetna\'s behavioral health precertification list (eff. 8/1/2024) — CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      ],
    },
    treatmentPA: {
      value: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
      status: 'verified',
      cites: [
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD only (F84.0–F84.9); ABA for other diagnoses considered experimental',
      status: 'unverified',
      cites: [
        { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      ],
      verifyVia:
        'Aetna CPB 0554 / CPB 0648 and the ABA Medical Necessity Guide. The substantive rule — ASD only, ABA for other diagnoses considered experimental — is sourced, but the code range printed here is NOT: the Medical Necessity Guide states "(ICD-10/ F84.0; F84.3 - F84.9)", which omits F84.1 and F84.2. Confirm the governing code set with Aetna before relying on "F84.0-F84.9".',
      blocker: 'document',
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
        ],
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
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
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date — required here even though Colorado Medicaid doesn\'t require one.' },
      { title: 'Age', desc: 'The Colorado mandate has no age limits — don\'t screen out older clients on age alone.' },
    ],
    sources: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'C.R.S. § 10-16-104 (FindLaw, current through 1/1/2025)', url: 'https://codes.findlaw.com/co/title-10-insurance/co-rev-st-sect-10-16-104/' },
      { title: 'HB26-1425 — Applied Behavior Analysis Services (Colorado General Assembly)', url: 'https://leg.colorado.gov/bills/HB26-1425' },
      { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
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
          'Not published. Aetna\'s ABA Medical Necessity Guide and CPB 0554 set medical-necessity criteria and precertification requirements but say nothing about which ABA codes may be delivered remotely, or with which place-of-service code.',
        status: 'unverified',
        cites: [
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        ],
        verifyVia:
          'Aetna provider services at the number on the member\'s ID card, and the plan\'s telehealth/virtual-care policy — confirm before scheduling remote 97155 or 97156.',
        blocker: 'per-case',
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
          'Aetna sets a duty, not a number. Where a state mandate, plan document or contract allows services from someone neither state-licensed nor BACB-certified, "there must be supervision and direction of the unlicensed or non-certified providers in line with practice standards." The ABA Medical Necessity Guide publishes no supervision percentage, ratio or caseload cap — the operative standard is professional practice plus whatever the contract adds.',
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
          'Not published in Aetna\'s ABA materials — no rule on who signs a session note or within what window.',
        status: 'unverified',
        verifyVia:
          'The Aetna provider manual and your participation agreement\'s documentation clause.',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'Aetna does not publish a POS code list for ABA. The one place-of-service boundary it does state is the schools carve-out: pursuant to applicable law Aetna "is not required [to] provide services to a child under an individualized education program or any obligation imposed on a public school by the Individuals with Disabilities Education Act." That is a limit on paying for what the IEP owes, not a blanket ban on the school setting — and it yields to a stronger state mandate. Where ABA is payable in a school, in the community or in a group home is a benefit-document question on Aetna plans.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
        verifyVia:
          'The member\'s benefit document, and Aetna provider services for whether school-setting ABA is payable on that plan.',
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
      { q: 'Does Aetna cover ABA therapy in Colorado?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Colorado\'s mandate (C.R.S. § 10-16-104(1.4)) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Colorado autism mandate require?', a: 'It applies to all Colorado-issued or renewed health benefit plans (short-term limited-duration and individual grandfathered plans excepted), with no age limits and no dollar caps — the historical $34K/$12K annual ABA caps were removed from the statute. Self-funded ERISA plans are exempt by preemption.' },
      { q: 'Does Aetna require an autism diagnosis for ABA in Colorado?', a: 'Yes — ASD only (F84.0-F84.9) per the national policy, unlike Health First Colorado, which opens its benefit without an autism diagnosis. If a family lacks a diagnosis and holds a commercial Aetna plan, the diagnostic evaluation comes first.' },
      { q: 'What does Aetna pay for ABA in Colorado?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Health First Colorado fee schedule, and treat rate-setting as part of contracting.' },
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
    ],
    sections: [
      {
        h2: 'The national policy, applied in Colorado',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. That clinical policy is national — what changes in Colorado is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in Colorado.',
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
          '"All ABA CPT codes are covered telehealth services," subject to EN0499. The policy adds a documentation duty rather than a code restriction: where services are delivered "via telehealth modalities," the record must show the service still meets the definition of direct treatment/direct engagement "regardless of treatment location or modality" and is conducted per the treatment-plan goals.',
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
          'One to two hours per ten hours of direct treatment. "Direct case supervision (occurs concurrently with the delivery of direct treatment to the individual and consists of BCBA face-to-face with the individual and either the Registered Behavior Technician or the Board Certified Assistant Behavior Analyst) and indirect case supervision is consistent with the general accepted standard of care of one to two hours per ten hours of direct treatment." When direct treatment is 10 hours per week or less, a minimum of one to two hours per week of direct case supervision is provided, and the supervisor\'s name and credentials must be documented.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      concurrentBilling: {
        value:
          'Yes — and Evernorth writes it as an explicit carve-out from its general rule: "Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)." Both must be with the patient; analyst time away from the patient is not inside the exception.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
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
          'Not published in the autism resource guide — no rule on who signs a session note or when. EN0499 does require the name and credentials of the supervising and stakeholder-training providers to be documented, and dates of administration on every assessment instrument.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia:
          'The Evernorth Behavioral Health provider administrative guide and your participation agreement.',
        blocker: 'document',
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
      { q: 'Does Cigna cover ABA therapy in Colorado?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Colorado\'s mandate (C.R.S. § 10-16-104(1.4)) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'Does the ABA assessment need prior authorization with Cigna in Colorado?', a: 'Per the national EN0499 policy, no — assessment codes 97151, 97152, and 0362T need no PA, and we found no Colorado carve-out from that policy. Confirm on the benefits call, since the current policy PDF could not be fully parsed for the state-exceptions list.' },
      { q: 'What does the Colorado autism mandate require?', a: 'It applies to all Colorado-issued or renewed health benefit plans (short-term limited-duration and individual grandfathered plans excepted), with no age limits and no dollar caps — the historical $34K/$12K annual ABA caps were removed from the statute. Self-funded ERISA plans are exempt by preemption.' },
      { q: 'What does Cigna pay for ABA in Colorado?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Health First Colorado fee schedule, and treat rate-setting as part of contracting.' },
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
      value: 'Required — step 2 (treatment auth); reviews every 4–6 months',
      status: 'verified',
      cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
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
    ],
    sections: [
      {
        h2: 'The national policy, applied in Colorado',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months and an operational flag when utilization falls below 80% of authorized hours. That clinical policy is national — what changes in Colorado is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. Notably, Colorado has NO entry in Optum\'s ABA State Mandates supplemental criteria (effective January 2026) — there is no Colorado-specific Optum clinical overlay, so the national guideline plus the state mandate is the whole picture. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in Colorado.',
        ],
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — ABA State Mandates supplemental criteria (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
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
        value:
          'Optum publishes no ABA telehealth code list in the Supplemental Clinical Criteria; it points providers to CASP\'s Practice Parameters for Telehealth-Implementation of Applied Behavior Analysis, Second Edition, which it describes as a resource for ABA "delivered via telehealth in a broad range of clinical settings (e.g., home, clinic, school)" and as a supplement to, not a replacement for, in-person delivery.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'Optum/UnitedHealthcare provider services and the plan\'s telehealth reimbursement policy — confirm which ABA codes are payable remotely and with which POS before scheduling.',
        blocker: 'per-case',
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
          'Two numbers, from two documents. Clinically, "consistent with CASP standards of care, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week," with technicians under the supervision of a BCBA or licensed behavioral health clinician and parents discouraged from serving as their own child\'s RBT. On the claim side, the commercial reimbursement policy polices the boundary rather than a ratio: "CPT codes 97153 and 97155 may not be billed for technician training," and 97155 "should be reported only for services where the QHP is either engaged directly with the patient or is directing a technician in implementing a modified protocol with the patient" — treatment planning is indirect and not separately reimbursable.',
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
        value:
          'No signature rule is published, but the documentation burden is explicit where money turns on it: services billed on the same date must be "separate, distinct, and clearly documented in the progress notes," and if documentation does not clearly separate them the claim may be denied. Who signs, and within what window, is not stated.',
        status: 'unverified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
        verifyVia:
          'The UnitedHealthcare/Optum provider manual and your participation agreement\'s documentation clause.',
        blocker: 'document',
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
        ],
        body: [
          'Plenty of ABA billing playbooks still say Anthem reviews ABA under clinical guideline CG-BEH-02, "Adaptive Behavioral Treatment." For Colorado commercial that stopped being true in 2024. A signed Anthem letter to Colorado providers, dated February 1, 2024 and flagged as a material adverse change, states that beginning with dates of service on or after June 1, 2024, Anthem and its subsidiary HMO Colorado, Inc. would transition from CG-BEH-02 and MCG W0153 to MCG B-806-T, Behavioral Health Care Applied Behavioral Analysis (Original MCG Guideline), for medical necessity and clinical appropriateness reviews.',
          'The practical consequence is that there is no public criteria document to write your treatment plan against. MCG guidelines are licensed and proprietary; Anthem does not publish them. So the leverage moves to the things Anthem does publish — the Colorado ABA provider resource guide below, the documentation standards, and a clean, data-anchored treatment plan. If a denial letter still cites CG-BEH-02, that is worth flagging on appeal.',
        ],
      },
      {
        h2: 'Weekly approved units: the March 2026 change that breaks old billing habits',
        cites: [
          { title: 'Anthem Colorado — Streamlined ABA claim process starts March 1, 2026', url: 'https://providernews.anthem.com/colorado/articles/streamlined-aba-claim-process-starts-march-1-2026-27885' },
        ],
        body: [
          'Effective March 1, 2026, Anthem reimburses ABA in Colorado based on weekly approved units rather than total authorized units. Anthem\'s own framing of the consequence is blunt: claims should reflect the units rendered within each week, up to the weekly medically necessary limit as approved by prior approval, and claims submitted with units exceeding the weekly limit will be considered ineligible for reimbursement and will be adjusted accordingly.',
          'Practically, this ends the common pattern of banking unused hours and running a heavy make-up week after a vacation or a staffing gap. It also changes what intake needs to capture: a family\'s realistic, sustainable weekly availability is now a billing input, not just a scheduling nicety. The change applies across the whole ABA code set — 97151, 97152, 0362T, 97153, 97154, 97155, 97156, 97157, 97158 and 0373T.',
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
        ],
        body: [
          'Colorado has historically not licensed behavior analysts, leaning instead on the statutory "autism services provider" ladder and BACB certification. That changed in 2026: HB26-1425 became law and creates the Colorado Behavior Analyst Licensing Board under the Division of Professions and Occupations at DORA, with authority to license behavior analysts and assistant behavior analysts. The operative date is not now — on and after July 1, 2028, practising or offering applied behavior analysis without a board-issued license is prohibited, and doing so is a class 2 misdemeanor.',
          'As of this writing the board seats are still listed as vacant on the DORA program page and no license is being issued, so today\'s credentialing conversation with Anthem still runs on national certification plus the statutory ladder. The planning consequence is real, though: every analyst you expect to still be supervising Colorado cases in mid-2028 needs a licensure path, and the regulation carries a sunset review scheduled for September 1, 2031.',
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
      { title: 'Anthem Colorado Precertification/Prior Authorization List (updated 07/10/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/CO_PA_List.pdf' },
      { title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' },
      { title: 'Anthem Colorado — Streamlined ABA claim process starts March 1, 2026', url: 'https://providernews.anthem.com/colorado/articles/streamlined-aba-claim-process-starts-march-1-2026-27885' },
      { title: 'Anthem Colorado — submit behavioral health authorizations through Availity Essentials', url: 'https://providernews.anthem.com/colorado/articles/streamline-your-workflow-submit-behavioral-health-authorizat-27237' },
      { title: 'C.R.S. § 10-16-104 (Justia)', url: 'https://law.justia.com/codes/colorado/title-10/article-16/part-1/section-10-16-104/' },
      { title: 'Colorado HB26-1425 — Applied Behavior Analysis Services (Became Law)', url: 'https://leg.colorado.gov/bills/HB26-1425' },
      { title: 'Colorado DORA — Behavior Analyst program page', url: 'https://dpo.colorado.gov/BehaviorAnalyst' },
      { title: 'Anthem Colorado — MCG Care Guidelines 27th edition update (Feb 1, 2024)', url: 'https://files.providernews.elevancehealth.com/3731/COBCBS-CM-047275-23-MCG-Care-Gdlns-27th-Ed-6.1.24-Updte-BH_FINALv2.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value: 'No ratio is published — Anthem sets a supervision structure instead. Approved ABA service providers include "providers practicing under the direction and supervision of the BCBA," and the statutory autism-services-provider ladder Anthem reproduces ends with a BACB registered behavior technician who "provides direct services to a person with an autism spectrum disorder under the supervision of an autism services provider" in one of the five higher tiers. Anthem\'s own supervision paragraph is a billing rule rather than a dosage rule: supervised or directed services billed with a QHP-performed procedure are subject to its Incident To Services and Billing reimbursement policy.',
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
        blocker: 'document',
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
        blocker: 'document',
      },
      diagnosticTools: {
        value:
          'Not published. Anthem\'s Colorado ABA provider resource guide covers credentialing, coding, documentation, place of service and supervision, but names no diagnostic or assessment instrument, and the operative criteria set (MCG B-806-T) is proprietary.',
        status: 'unverified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — Colorado (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-co.pdf' }],
        verifyVia:
          'Anthem Behavioral Health at 800-424-4014 — ask which instruments MCG B-806-T expects behind the diagnosis and behind the requested intensity.',
        blocker: 'document',
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
    ],
  },
};

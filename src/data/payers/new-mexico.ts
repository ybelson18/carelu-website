import type { PayerConfig } from './types.js';

export const newMexicoPayers: Record<string, PayerConfig> = {
  'new-mexico-medicaid': {
    slug: 'new-mexico-medicaid',
    cardDesc: 'ASD or at-risk, adults included; no PA on assessment; LOD #53 rate floor for MCOs.',
    assessmentPA: {
      value: 'Not required — 97151, 97152, and 0362T are marked "Prior Auth: NO" on the state fee schedule; adults can access the assessment without PA too',
      status: 'verified',
      cites: [
        { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required for 97153 only (97155/97156 are PA-free) — 6-month treatment-plan PAs inside multi-year service authorizations; quirk: comprehensive treatment under 20 hrs/week needs PA',
      status: 'verified',
      cites: [
        { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
      ],
    },
    dxRequired: {
      value: 'No strict ASD requirement — ASD diagnosis OR well-documented risk for ASD (at-risk pathway, ages 12–36 months); no upper age limit',
      status: 'verified',
      cites: [
        { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
      ],
    },
    payer: 'New Mexico Medicaid (Turquoise Care)',
    state: 'NM', kind: 'state-medicaid',
    pill: 'Payer Guide · New Mexico Medicaid',
    h1: 'New Mexico Medicaid (Turquoise Care) ABA coverage: the intake guide.',
    metaTitle: 'New Mexico Medicaid (Turquoise Care) ABA Coverage, Rates & Prior Auth | Carelu',
    metaDescription:
      'How New Mexico Medicaid covers ABA under Turquoise Care — the at-risk-for-ASD pathway, the adult ABA benefit with no age cap, no prior auth on the 97151 assessment, the inverted under-20-hours PA quirk, LOD #53 fee-schedule rates as an MCO floor, and the four-MCO landscape.',
    intro: [
      'New Mexico Medicaid runs one of the most expansive ABA benefits in the country. Under NMAC 8.321.2.13 and MAD Supplement 24-13, coverage isn\'t limited to a strict autism diagnosis — recipients with a well-documented RISK for developing ASD qualify through a dedicated at-risk pathway — and there is no upper age limit: New Mexico operates an explicit adult ABA benefit beyond EPSDT. The front door is fast, too: the 97151 assessment needs no prior authorization. Since July 1, 2024 the benefit is administered by four Turquoise Care MCOs (BCBS of New Mexico, Molina, Presbyterian, UnitedHealthcare Community Plan), with fee-for-service and a Third-Party Assessor for non-MCO recipients — and Letter of Direction #53 makes the published FFS fee schedule a rate floor every MCO must meet.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — ASD or documented ASD risk; NO upper age limit (explicit adult benefit)' },
      { label: 'Assessment auth', value: 'None — 97151, 97152, 0362T marked "Prior Auth: NO" on the fee schedule' },
      { label: 'Treatment auth', value: 'PA on 97153 only; 97155/97156 PA-free; 6-month treatment-plan PAs inside 3- or 6-year service authorizations' },
      { label: 'The inverted quirk', value: 'Comprehensive treatment averaging UNDER 20 hrs/week requires PA (3.17.1(A))' },
      { label: 'Diagnosis recency', value: 'Dx (or adult ASD confirmation) within 3 years of the service referral' },
      { label: 'Rates (per 15 min)', value: '97153: $32.31 BCBA · $23.35 BCaBA · $19.85 BT; 97151: $112.65 BCBA (eff. 1/1/2025)' },
      { label: 'Rate floor', value: 'LOD #53 — MCOs (and their sub-vendors) must pay at least the FFS fee schedule' },
      { label: 'Staff screening', value: 'NM criminal background registry check for every practitioner class — BCBA down to non-certified BT — attested on MAD-877/878 before rendering' },
    ],
    sections: [
      {
        h2: 'Coverage: ASD, at-risk, and adults',
        body: [
          'NMAC 8.321.2.13 and Supplement 24-13 cover two populations: recipients 12 months and older with a well-documented ASD diagnosis, and recipients with a well-documented risk for developing ASD — the at-risk pathway, for children roughly 12–36 months with developmental delays, some ASD characteristics, and a genetic risk factor such as an older sibling with ASD or Fragile X. Don\'t screen out a family just because the diagnosis isn\'t final. The benefit runs on a three-stage model: Stage 1 is an Autism Evaluation Provider evaluation (CDE, targeted, or risk evaluation plus an Integrated Service Plan), Stage 2 is the BCBA behavior/functional assessment (97151, done annually), Stage 3 is treatment.',
          'The other headline: no upper age limit. New Mexico runs an explicit adult ABA benefit across Stages 1–3, beyond EPSDT — rare enough that adult inquiries should be treated as viable leads, not exceptions. Recency rules to capture at intake: the diagnosis must come from an Autism Evaluation Provider/Practitioner or licensed practitioner within scope, within 3 years of the service referral; adults need ASD confirmation by a "Grace Exception Practitioner" within the last 3 years.',
        ],
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
      },
      {
        h2: 'Authorization: no PA on assessment, an inverted quirk on treatment',
        body: [
          'The state fee schedule marks 97151, 97152, and 0362T "Prior Auth: NO" — so once eligibility is verified, the Stage 2 assessment can be booked immediately, no authorization packet required. Adults can access Stage 2 without PA as well (a CDE is not required for adults unless medically warranted). PA lands essentially only on treatment: 97153 (adaptive behavior treatment by protocol) is "Prior Auth: YES," while 97155 and 97156 are PA-free.',
          'Supplement 24-13 layers a two-part authorization model: a Service Authorization approves ABA for 3 years (ages 12 months–8) or 6 years (8+), and within it Prior Authorizations of the treatment plan recur every 6 months (annually for adults inside a 6-year service authorization). Then the quirk that inverts the usual intensity logic: comprehensive treatment rendered at LESS than 20 hours/week on average requires PA from the MCO/TPA (3.17.1(A)) — scrutiny lands on under-dosed programs, not high-hour ones. Also PA-gated: more than 2 hours of case supervision or clinical management (T1026 UC/UD) per 10 hours of Stage 3 services. Comprehensive programs are contemplated at 30–40 hrs/week, focused programs at 10–25, and adult comprehensive services range 10–40 hrs/week.',
        ],
        cites: [
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (PA flags per code)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
      },
      {
        h2: 'Rates: a published fee schedule that is also a floor',
        body: [
          'New Mexico publishes credential-tiered ABA rates, flagged with modifiers: U5 (Qualifying Psychologist), U4 (BCBA-D), U3 (BCBA), U9 (BCaBA), U1 (Behavior Technician — explicitly allowed with or without a bachelor\'s degree). Per 15-minute unit, effective 1/1/2025: 97151 pays $130.94 (U5/U4) and $112.65 (U3); 97153 pays $38.02 / $37.99 / $32.31 / $23.35 / $19.85 down the tiers; 97155 pays $55.55 (U5/U4) and $39.69 (U3); 97156 pays $35.79 (U5/U4) and $25.78 (U3). T1026 with UC/UD modifiers pays $142.84/hour for BA-level practitioners ($109.27 for a supervising BCaBA) — at least 1 hour each of clinical management and case supervision is expected per 10 hours of Stage 3 service — and the ISP Update (T1026 HI HK) pays $206.33.',
          'What makes these numbers unusually load-bearing: Letter of Direction #53 (3/21/2025) directs the Turquoise Care MCOs to pay providers no less than the Medicaid FFS fee schedule — a statewide rate floor that also binds MCO sub-vendors, with adjustments and back-payments ordered retroactive to 1/1/2025. In New Mexico, the fee schedule isn\'t a benchmark; it\'s a contractual minimum you can hold every MCO to.',
        ],
        cites: [
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
          { title: 'HCA — ABA Provider Information (billing instructions, attestations)', url: 'https://www.hca.nm.gov/providers/aba-applied-behavior-analysis-provider-information/' },
        ],
      },
      {
        h2: 'The Turquoise Care landscape: four MCOs plus FFS/TPA',
        body: [
          'Turquoise Care launched July 1, 2024 with four MCOs: Blue Cross and Blue Shield of New Mexico, Molina (new to the state), Presbyterian Health Plan, and UnitedHealthcare Community Plan (also new, with ABA administered by Optum). Non-MCO recipients run fee-for-service, with MAD\'s Third-Party Assessor handling authorizations. Clinically the MCOs defer to the state\'s NMAC criteria and stage model — the shared Behavioral Health Level of Care Guidelines reference NMAC 8.321.2 throughout — so what changes per plan is submission machinery: portals, forms, and fax lines (see the per-MCO guides). Stage 3 staffing is notably broad: BCBA/BCBA-D, BCaBA, BACB RBTs, BICC BCATs, and non-certified behavior technicians under supervision with an HCA practitioner attestation. New Mexico has no behavior analyst licensure law, so BACB certification plus the attestation and background check is the credentialing gate.',
        ],
        cites: [
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
          { title: 'HCA — ABA Provider Information (attestation templates, 10/16/2024)', url: 'https://www.hca.nm.gov/providers/aba-applied-behavior-analysis-provider-information/' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'New Mexico still has no behavior analyst license as of mid-2026 — the state is absent from the BACB\'s licensure table — so Medicaid credentialing runs entirely on certification plus MAD attestations, with dedicated provider types: BCBAs/BCBA-Ds enroll individually as Provider Type 445, Specialty 099 via the MAD-877 attestation (current BACB certificate attached; any certification-status change reported immediately to the agency, the MAD ABA Manager, and each contracted MCO), and technicians as Provider Type 430, Specialty 098 via MAD-878. At the technician tier New Mexico is unusually broad: Supplement 24-13 accepts BACB RBTs, BICC Board Certified Autism Technicians (BCATs), AND a time-limited non-certified behavior technician on-ramp. A non-certified BT must be 18+ with a high school diploma or equivalent, clear the New Mexico criminal background registry check, and complete 4 hours of ASD training plus at least 20 hours of the RBT/BCAT training BEFORE rendering any Stage 2/3 services — then finish the full 40-hour training within 90 days, the remaining testing-approval requirements within 180 days, and secure the RBT or BCAT certificate within six continuous months, or stop rendering until certified. The BACB\'s own floor still applies to RBT candidates (18+, high-school education, 40-hour training, competency assessment, and a criminal background check plus abuse-registry check within 180 days before applying).',
          'Background screening is embedded in every practitioner definition — BA, Mentored BA, BA Candidate, BCaBA, RBT/BCAT, non-certified BT, and Specialty Care Practitioner must each "successfully complete a New Mexico criminal background registry check" before rendering, restated in NMAC 8.321.2.13 and attested on the MAD forms; the agency application (Part 6, Staff Documents) additionally requires a written background-check compliance policy covering ALL employees as a condition of MAD approval. That same Agency Manual Instructions document, confirmed fully readable and current as of this review, also sets Part 7\'s mock-file requirements by age band for the agency-application review — separate mock case files for 12mo–3yr (at-risk, pre-diagnosis), 12mo–5yr (diagnosed), school-age, 18–21, and adult 21+ — mirroring Supplement 24-13\'s stage model exactly. The state\'s screening machinery is the Caregivers Criminal History Screening Program under 8.370.5 NMAC (effective 7/1/2024): an Employee Abuse Registry check prior to hire, fingerprints submitted to CCHSP within 20 calendar days of the first day of employment, conditional supervised work permitted while the fingerprint check is pending, a defined disqualifying-felony list, and a statewide-only re-screen for staff cleared nationally within the prior 12 months. One honest caveat: 8.370.5\'s covered-entity list is facility- and waiver-oriented (it excludes outpatient treatment facilities), and the MAD ABA documents require the "criminal background registry check" by name without citing it — so whether an outpatient ABA agency must specifically use CCHSP versus an equivalent criminal-background-plus-registry check isn\'t explicitly resolved in any published document; treat CCHSP + EAR as the state\'s screening infrastructure and confirm the accepted mechanism with HCA/MAD at enrollment. No ABA-specific OIG/SAM exclusion-screening language appears in the state ABA documents; federal exclusion screening rides on standard Medicaid enrollment.',
          'Supervision comes as billable ratios, not just principles: Supplement 24-13 requires at least four 15-minute units (one hour) of 97155 — rendered by the BA, Mentored BA, or Supervising BCaBA with the recipient present — for every eighty units (20 hours) of combined 97153/97154/97156, a ~5% direct-observation floor required in specific amounts with no PA needed, plus one to two units of T1026 UD clinical management per eighty units of Stage 3 services (except 97155). Certification-maintenance supervision required by the BACB/BICC is explicitly NOT reimbursable by MAD (RBTs still owe the BACB 5% monthly supervision with two face-to-face contacts). Staffing plans must also absorb the Mentored BA rule — a BCBA certified less than three years is supervised by a BA with 3+ years of supervision experience through a two-year mentorship — and a BCaBA may supervise technicians only when approved by their supervising BA. At the plan level, the four Turquoise Care MCOs work off the state baseline: the attestations themselves ask which MCOs each practitioner is contracted with, and BCBSNM enrolls ABA staff via the HCA-approved Behavioral Health Roster template rather than per-practitioner applications. No MCO-added screening or training extras were found — though Molina\'s NM provider manual couldn\'t be retrieved, so verify Molina credentialing specifics directly.',
        ],
        cites: [
          { title: 'MAD Supplement 24-13 — practitioner definitions, supervision ratios (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
          { title: 'MAD-877 BCBA and BCBA-D Attestation (Provider Type 445, Specialty 099)', url: 'https://www.hca.nm.gov/wp-content/uploads/MAD-877-BCBA-and-BCBA-D-Attestation.03.2024.pdf' },
          { title: 'MAD-878 RBT or BCAT Attestation (Provider Type 430, Specialty 098)', url: 'https://www.hca.nm.gov/wp-content/uploads/MAD-878-RBT-or-BCAT-Attestation.03.2024.pdf' },
          { title: 'BACB RBT Handbook (updated 06/2026)', url: 'https://www.bacb.com/rbt-handbook' },
          { title: '8.370.5 NMAC — Caregiver Criminal History Screening Requirements (eff. 7/1/2024)', url: 'https://www.srca.nm.gov/parts/title08/08.370.0005.html' },
          { title: 'HCA — Background Checks (CCHSP + Employee Abuse Registry)', url: 'https://www.hca.nm.gov/background-checks/' },
          { title: 'MAD ABA Agency Manual Instructions (Part 6, Staff Documents)', url: 'https://www.hsd.state.nm.us/wp-content/uploads/files/Providers/New%20Mexico%20Administrative%20Code%20Program%20Rules%20and%20Billing/Billing%20Instructions/Applied-Behavior-Analysis-Agency-Manual-Instructions.pdf' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts (NM absent; checked July 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'BCBSNM Turquoise Care BH Provider Training (roster enrollment process)', url: 'https://www.bcbsnm.com/docs/provider/nm/education/training/tc-bh-provider-training.pdf' },
        ],
      },
      {
        h2: 'Switching or stopping ABA agencies under New Mexico Medicaid',
        body: [
          'MAD Supplement 24-13 sets rules for ending services, not for moving an authorization between agencies. Before stopping services for lack of progress, the agency must work the barriers with the MCO care coordinator. A short halt (about a month) can be agreed and restarted on a set date. Otherwise the agency may terminate, and "Unless medically warranted for immediate discharge, discharge date must be at least 30 calendar days from the date the recipient or Family Set is notified in writing."',
          'Restarting is a new start: "the BA will complete ABA Stage 2 services and submit a new 6-month prior authorization," and if the gap runs past the last Service Authorization period a new Service Authorization is needed too. The terminating agency "is not obligated to accept the recipient back" and "may refer the recipient to another AP agency." The supplement does not say whether an existing prior authorization moves to a new agency when a family switches; ask the MCO (or the TPA for fee-for-service) before the first session with the new agency.',
        ],
        cites: [
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
      },
      {
        h2: 'Does New Mexico Medicaid require treatment-plan goals in a set format, such as by DSM-5 criteria?',
        body: [
          'MAD Supplement 24-13 (9/17/2024) is the state\'s ABA guidance. After the 97151 assessment, the BA "must select goals for intervention and determine how these goals will be measured." Goal development covers a list of skill areas: "adaptive and self-care skills, attending and social referencing, cognitive functioning, community participation, coping and tolerance skills, emotional development, family relationships, language and communication, play and leisure skills, pre-academic skills, self-advocacy and independence, self-management, social relationships, and vocational skills." Baseline performance should be measured and "treatment goals should be developed for each critical domain and specified in terms that are observable and measurable" (3.14.3). Targets are prioritized by risk to safety, independence and health (3.14.2). The required treatment-plan elements (3.19.1) include a Family Set goal, baseline data on each target behavior/symptom, interventions with approximate units per target, goals with objective progress measures for the authorization period, and measurable discharge criteria. The domains are developmental skill areas, not DSM-5 criteria. DSM or ICD is used for eligibility, and the ASD support level (Level 2/3) informs dosage. 8.321.2.13 NMAC makes the BA responsible for "selection and measurement of goals."',
        ],
        cites: [
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
          { title: '8.321.2.13 NMAC — Applied Behavior Analysis (srca.nm.gov)', url: 'https://www.srca.nm.gov/parts/title08/08.321.0002.html' },
        ],
      },
      {
        h2: 'Does New Mexico Medicaid require parent training, and how many hours?',
        body: [
          'Yes, and the guidance gives numbers. Supplement 24-13 says "Every Treatment Plan must include ample units of ABA Stage 3 97156 and 97157" (3.17.1(C)). Every plan must "Include a goal of working with the Family Set" and be "Family Set-focused... with a focus on family engagement, training, and support" (3.19.1). If family members cannot attend in person, the BA must offer alternatives such as telemedicine. 97156 needs no prior authorization, with a "Maximum number of units per 97156 for entire Family Set: thirty-two 15-minute units per week," billed once for the whole Family Set. The CMS Medicaid MUE limits 97156 to sixteen 15-minute units per day, and 97157 (also no PA) to "up to sixteen 15-minute units or four hours per day." Adult recipients may receive up to thirty-two units of either code when medically warranted. Family Sets may start 97156/97157 once the recipient\'s assessment is scheduled. If the family cannot attend at the agreed level, "inadequate family participation" is a listed reason for poor response, and the BA must offer alternatives.',
        ],
        cites: [
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Turquoise Care MCO (or FFS)', desc: 'BCBSNM, Molina, Presbyterian, UHC Community Plan, or FFS/TPA — same clinical criteria, different submission machinery.' },
      { title: 'Diagnosis OR at-risk documentation', desc: 'ASD dx within 3 years of referral — or, for 12–36 months, the delay + ASD characteristics + genetic risk factor documentation for the at-risk pathway.' },
      { title: 'Age and adult-confirmation status', desc: 'No upper age limit — for adults, confirm ASD verification by a Grace Exception Practitioner within the last 3 years.' },
      { title: 'Stage 1 evaluation status', desc: 'Has an Autism Evaluation Provider done the CDE/targeted/risk evaluation and ISP? If yes, Stage 2 assessment can book immediately — no PA.' },
      { title: 'Planned weekly intensity', desc: 'Comprehensive programs under 20 hrs/week trigger the PA quirk — plan hours (and the family\'s real availability) before the treatment request.' },
    ],
    sources: [
      { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
      { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
      { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
      { title: 'HCA — ABA Provider Information page', url: 'https://www.hca.nm.gov/providers/aba-applied-behavior-analysis-provider-information/' },
      { title: 'HCA — Turquoise Care overview (program start 7/1/2024, four MCOs)', url: 'https://www.hca.nm.gov/turquoise-care/' },
      { title: 'MAD-877 BCBA and BCBA-D Attestation (Provider Type 445, Specialty 099)', url: 'https://www.hca.nm.gov/wp-content/uploads/MAD-877-BCBA-and-BCBA-D-Attestation.03.2024.pdf' },
      { title: 'MAD-878 RBT or BCAT Attestation (Provider Type 430, Specialty 098)', url: 'https://www.hca.nm.gov/wp-content/uploads/MAD-878-RBT-or-BCAT-Attestation.03.2024.pdf' },
      { title: 'BACB RBT Handbook (updated 06/2026)', url: 'https://www.bacb.com/rbt-handbook' },
      { title: '8.370.5 NMAC — Caregiver Criminal History Screening Requirements (eff. 7/1/2024)', url: 'https://www.srca.nm.gov/parts/title08/08.370.0005.html' },
      { title: 'HCA — Background Checks (CCHSP + Employee Abuse Registry)', url: 'https://www.hca.nm.gov/background-checks/' },
      { title: 'MAD ABA Agency Manual Instructions (Part 6, Staff Documents)', url: 'https://www.hsd.state.nm.us/wp-content/uploads/files/Providers/New%20Mexico%20Administrative%20Code%20Program%20Rules%20and%20Billing/Billing%20Instructions/Applied-Behavior-Analysis-Agency-Manual-Instructions.pdf' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts (NM absent; checked July 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'BCBSNM Turquoise Care BH Provider Training (roster enrollment process)', url: 'https://www.bcbsnm.com/docs/provider/nm/education/training/tc-bh-provider-training.pdf' },
      { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
      { title: '8.310.2.12(M) NMAC — Telehealth services (srca.nm.gov, amended 1/1/2025)', url: 'https://www.srca.nm.gov/parts/title08/08.310.0002.html' },
      { title: '8.321.2.13 NMAC — Applied Behavior Analysis (srca.nm.gov)', url: 'https://www.srca.nm.gov/parts/title08/08.321.0002.html' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'No upper age limit. NMAC 8.321.2.13 says it outright: "There is no age requirement to receive ABA services and ABA is a covered benefit for medicaid enrolled adults." Recipients under 21 receive ABA as part of EPSDT (42 CFR § 441.57), and MAD Supplement 24-13 runs an explicit adult benefit across all three stages. At the bottom end the diagnosed pathway opens at 12 months and the at-risk pathway is bounded at 12–36 months of age.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
      },
      dxRecency: {
        value: 'New Mexico is not a strict-diagnosis state, so the recency rule attaches to the referral rather than to a required diagnosis. NMAC 8.321.2.13 lets a recipient be referred for stage two and three services on a presumptive diagnosis of ASD by a licensed practitioner whose scope of practice allows them to render it, and "This diagnosis must have been received within three years of referral to stage two or three services." Where the recipient already carries an ASD diagnosis, diagnostic re-evaluation is not necessary — but an Integrated Service Plan and a medical-necessity determination for ABA are still required. Per the guide’s reading of Supplement 24-13, adults need ASD confirmation by a Grace Exception Practitioner within the last 3 years. The at-risk pathway needs no diagnosis at all.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'Confirmation of the presence of — or risk for — ASD normally comes from an approved Autism Evaluation Provider (AEP) through a comprehensive diagnostic evaluation; a targeted evaluation is used when a fully diagnosed recipient presents with behaviors changed from the last CDE, and an ASD risk evaluation when the at-risk criteria in Subsection C are met. To avoid delaying stage two and three, a recipient may instead be referred with a presumptive ASD diagnosis from any licensed practitioner whose scope of practice allows them to render an ASD diagnosis, received within three years of the referral.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
        ],
      },
      diagnosticTools: {
        value: 'NMAC 8.321.2.13 names no required diagnostic instrument. The diagnosis is made against the latest DSM or ICD by the AEP, and the at-risk criteria require developmental differences and delays "as measured by standardized assessments" without naming which. Instrument-level requirements, if MAD publishes any, sit in the Behavioral Health Policy and Billing Manual and Supplement 24-13 rather than in the rule.',
        status: 'unverified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
        ],
        verifyVia: 'MAD Behavioral Health Policy and Billing Manual / Supplement 24-13 via the HCA ABA provider information page — hca.nm.gov blocked automated retrieval this cycle (CloudFront geo-block), so pull the MAD Behavioral Health Policy and Billing Manual and Supplement 24-13 from the HCA ABA provider page by hand, or ask the MAD ABA Manager.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Yes, and it is the structural gate in New Mexico. Stage one is an evaluation by an approved Autism Evaluation Provider, who "must" develop an Integrated Service Plan (ISP) together with a referral to an approved ABA provider agency. The ISP and the CDE or targeted evaluation must accompany every stage-three prior authorization request, alongside the ABA treatment plan. The alternative front door, built into the rule to avoid delay, is a referral on a presumptive ASD diagnosis from a licensed practitioner within scope, received within three years of referral.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
        ],
      },
      telehealth: {
        value: 'Allowed. MAD Supplement 24-13 (section 3.2.1) says MAD "allows and encourages the utilization of telemedicine to deliver MAD ABA services," to bring home- and community-based ABA to rural and frontier areas, and points to 8.310.2 NMAC for the requirements: a HIPAA-compliant system with interactive audio and video in real time, with coverage "determined in a manner consistent with medicaid coverage for health care services provided through in person consultation." In-state BCBAs, BCaBAs, RBTs, BCATs and non-certified technicians need no telemedicine license; an out-of-state MD/DO diagnostician does. Supervision is expressly remote-capable: 97155 may be delivered through telemedicine when the BA directs the technician and the recipient by observing behavior or troubleshooting protocols (not when the BA joins in person), the recipient must be present, and the one-hour-per-20-hours minimum of 97155 still applies. Where an agency documents annually to the MCO or TPA that its transmission provider cannot support real-time video, store-and-forward can deliver up to 100% of direct 97155, with 30 to 60 extra minutes of 97155 added, but not for a non-certified technician. The assessment can be partly remote too: "A BA/Mentored BA bills Indirect 97151 when conducting interviews or discussing the Treatment Plan or Protocols with the Family Set delivered via telemedicine," and direct T1026 UD case supervision may happen onsite or be "delivered through telemedicine." The supplement names no POS code or modifier for ABA telemedicine, so confirm claim coding with the MCO or TPA.',
        status: 'verified',
        cites: [
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
          { title: '8.310.2.12(M) NMAC — Telehealth services (srca.nm.gov, amended 1/1/2025)', url: 'https://www.srca.nm.gov/parts/title08/08.310.0002.html' },
        ],
      },
      authTurnaround: {
        value:
          'Depends on who holds the member. MCO members (all four Turquoise Care plans): the HCA contract requires each plan to \u201cadjudicate standard prior authorization requests within seven (7) Business Days after receipt of all necessary and relevant documentation\u201d, and requests are \u201cdeemed granted for determinations not made within the seven (7) Business Day turn-around time\u201d (extension up to 14 calendar days on request or with justification); expedited decisions come \u201cno later than twenty-four (24) hours after the receipt of all necessary and relevant documentation\u201d, also deemed granted if missed. The same clause binds each MCO to \u201cthe most rigorous standards\u201d of the NM Prior Authorization Act, NCQA, HCA regulation or 42 CFR 438.210(d) \u2014 and for rating periods starting on or after January 1, 2026, 438.210(d) caps standard decisions at 7 calendar days after the request is received (72 hours expedited), so plan against 7 calendar days from receipt. Fee-for-service members (MAD\u2019s Third-Party Assessor): 42 CFR 440.230(e), beginning January 1, 2026, requires standard decisions \u201cin no case later than 7 calendar days after receiving the request\u201d and expedited within 72 hours, extendable up to 14 calendar days. Reauthorization: Supplement 24-13 sets no day count, only that the ABA Treatment Plan Update and Progress Report \u201cmust be prepared and submitted to the MCO or TPA prior to the end of the recipient\u2019s Prior Authorization period\u201d.',
        status: 'verified',
        cites: [{ title: 'Turquoise Care Medicaid Managed Care Services Agreement \u2014 BCBSNM, Amendment 5 (signed 12/2025), \u00a7\u00a7 4.5.19.8, 4.19.11', url: 'https://www.hca.nm.gov/wp-content/uploads/TCBCBS_24-630-8000-0029_CA5_Signed.pdf' }, { title: 'Turquoise Care Medicaid Managed Care Services Agreement \u2014 Presbyterian, Amendment 5 (signed 12/2025), \u00a7\u00a7 4.5.19.8, 4.19.11', url: 'https://www.hca.nm.gov/wp-content/uploads/TCPHP_24-630-8000-0031_CA5_Signed.pdf' }, { title: '42 CFR 438.210(d) \u2014 Medicaid managed care authorization timeframes', url: 'https://www.ecfr.gov/current/title-42/section-438.210' }, { title: '42 CFR 440.230(e) \u2014 Medicaid fee-for-service prior authorization timeframes (from 1/1/2026)', url: 'https://www.ecfr.gov/current/title-42/section-440.230' }, { title: 'MAD Supplement 24-13 \u2014 Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' }],
      },
      coordinationOfBenefits: {
        value:
          'Medicaid pays last. The TPL rule: \u201cWhen providers are aware of the existence of health insurance or health plan coverage for eligible recipients, the providers must seek payment from the insurance carrier before seeking payment from medicaid\u201d; Medicaid then pays at most its allowed amount less the other payer\u2019s payment, capped at the co-pay, co-insurance or deductible the primary calculated, and the family cannot be billed the rest. Policies delivered in New Mexico, \u201cincluding employee retirement income security Act (ERISA) plans\u201d, may not exclude or limit benefits because the child is Medicaid-eligible. The HCA contract makes Medicaid \u201cthe payer of last resort\u201d and adds the trap: the plan \u201cshall deny payment on a Claim that has been denied by a third-party payer when the reason for denial is the Provider\u2019s or Member\u2019s failure to follow prescribed procedures, including but not limited to failure to obtain prior authorization\u201d \u2014 so secure the commercial plan\u2019s ABA authorization first. The same contract says \u201cClaims for EPSDT shall be paid at the time presented for payment by the Provider and the CONTRACTOR shall bill the responsible third party\u201d; whether an ABA claim is handled under that EPSDT pay-and-chase exception is not spelled out, so confirm with the plan before skipping the primary. TRICARE also pays ahead of Medicaid: its own secondary-payer rule exempts \u201ca plan administered under title XIX\u201d. The rule also lists pay-and-chase (no cost avoidance) for \u201cpreventive services for children including early and periodic screening, diagnosis and treatment services\u201d. Neither the rule nor the contract says whether Medicaid\u2019s own ABA prior authorization is still needed when Medicaid is secondary \u2014 see the per-MCO guides (Presbyterian publishes an answer).',
        status: 'verified',
        cites: [{ title: '8.302.3 NMAC \u2014 Third Party Liability Provider Responsibilities', url: 'https://www.srca.nm.gov/parts/title08/08.302.0003.html' }, { title: 'Turquoise Care Medicaid Managed Care Services Agreement \u2014 BCBSNM, Amendment 5 (signed 12/2025), \u00a7\u00a7 4.5.19.8, 4.19.11', url: 'https://www.hca.nm.gov/wp-content/uploads/TCBCBS_24-630-8000-0029_CA5_Signed.pdf' }, { title: '42 U.S.C. 1396a(a)(25) \u2014 Medicaid third-party liability', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap7-subchapXIX-sec1396a.htm' }, { title: '10 U.S.C. 1079(i)(1) \u2014 TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' }],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'All stage-three services require clinical management, and where a behavior analyst assistant (BCaBA) or behavior technician implements the treatment plan, that person requires case supervision from their BA or supervising BAA. NMAC turns the ratio into an authorization trigger: the prior authorization request must state the hours of case supervision requested per week if more than two hours of supervision per 10 hours of intervention is sought, and likewise for clinical management above two hours per 10. Per the guide’s reading of Supplement 24-13 the billable floor runs the other way too — at least four 15-minute units (one hour) of 97155, rendered by the BA, Mentored BA or supervising BCaBA with the recipient present, for every eighty units (20 hours) of combined 97153/97154/97156, roughly a 5% direct-observation floor, plus one to two units of T1026 UD clinical management per eighty units of stage-three service. Supervision required only to maintain BACB or BICC certification is explicitly not reimbursable by MAD.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not resolved in the rule text. NMAC 8.321.2.13 publishes no same-clock-time billing rule for ABA, and it defers billing instructions to the MAD Behavioral Health Policy and Billing Manual. What is clear is that the model assumes concurrent delivery: the 97155 observation floor is expressed as units rendered with the recipient present against units of 97153/97154/97156, which is supervision alongside direct service. Whether both are payable for the same clock minutes still needs the billing manual.',
        status: 'unverified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
        verifyVia: 'MAD Behavioral Health Policy and Billing Manual, ABA billing instructions — hca.nm.gov blocked automated retrieval this cycle (CloudFront geo-block), so pull the MAD Behavioral Health Policy and Billing Manual and Supplement 24-13 from the HCA ABA provider page by hand, or ask the MAD ABA Manager.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'MAD publishes no per-day unit ceiling for ABA. The limits that bite are authorization-gated intensity thresholds, and one of them inverts the usual logic: per the guide’s reading of Supplement 24-13 (3.17.1(A)), comprehensive treatment rendered at LESS than 20 hours a week on average requires prior authorization from the MCO or the third-party assessor — scrutiny lands on under-dosed programmes rather than high-hour ones. Contemplated bands are 30–40 hours a week for comprehensive, 10–25 for focused, and 10–40 for adult comprehensive services. Requests above two hours of case supervision, or two hours of clinical management, per 10 hours of stage-three intervention also require PA, and the PA request must document hours allocated to other services in the ISP so the UR contractor can judge whether the requested intensity is feasible.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
      },
      noteSignature: {
        value: 'NMAC assigns responsibility but not signature mechanics: the supervising behavior analyst is responsible for the recipient’s assessment, the selection and measurement of goals, and treatment plan formulation and documentation, and the rule then defers to the MAD Behavioral Health Policy and Billing Manual for documentation detail. Who must sign a session note, and within what window, is not stated in the rule.',
        status: 'unverified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
        ],
        verifyVia: 'MAD Behavioral Health Policy and Billing Manual (ABA documentation requirements) — hca.nm.gov blocked automated retrieval this cycle (CloudFront geo-block), so pull the MAD Behavioral Health Policy and Billing Manual and Supplement 24-13 from the HCA ABA provider page by hand, or ask the MAD ABA Manager.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'NMAC sets the boundaries by exclusion and by setting. Not covered: activities that take place in school settings and have the potential to supplant educational services. Residential and institutional settings are handled explicitly — where a recipient is in a residential facility that is not itself an enrolled ABA provider, the facility must locate a MAD-enrolled stage two and three ABA provider and agree terms allowing that provider to render services on site. Treatment foster care is not treated as a residential facility, so ABA may be delivered outside the TFC agency; a recipient in a residential treatment centre, accredited residential treatment centre or group home may receive ABA to the extent the residential provider can deliver it. The shared Turquoise Care Level of Care Guidelines add that out-of-home placement is otherwise an exclusion, apart from time-limited ABA authorized for transition back to a community provider.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Reimbursement for ABA stage two and three services is made to the MAD-enrolled ABA provider, never to a residential facility hosting the service. Practitioners enrol by type: behavior analysts (BCBA or BCBA-D, or an ABPP behavior-and-cognitive-psychology psychologist tested in the ABA component) as Provider Type 445, Specialty 099 on the MAD-877 attestation, and technicians as Provider Type 430, Specialty 098 on the MAD-878 — with any change in certification status reported immediately to the agency, the MAD ABA Manager and each contracted MCO. Every provider and practitioner must successfully complete a New Mexico criminal background registry check before rendering. Under Letter of Direction #53 the Turquoise Care MCOs, and their sub-vendors, must pay no less than the Medicaid fee-for-service ABA fee schedule.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'MAD-877 BCBA and BCBA-D Attestation (Provider Type 445, Specialty 099)', url: 'https://www.hca.nm.gov/wp-content/uploads/MAD-877-BCBA-and-BCBA-D-Attestation.03.2024.pdf' },
          { title: 'MAD-878 RBT or BCAT Attestation (Provider Type 430, Specialty 098)', url: 'https://www.hca.nm.gov/wp-content/uploads/MAD-878-RBT-or-BCAT-Attestation.03.2024.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does New Mexico Medicaid cover ABA therapy?', a: 'Yes — for recipients 12 months and older with an ASD diagnosis, for young children with a documented risk for developing ASD (no final diagnosis required), and for adults with no upper age limit. Coverage runs through the four Turquoise Care MCOs or FFS with the state\'s Third-Party Assessor.' },
      { q: 'Does the ABA assessment need prior authorization in New Mexico?', a: 'No — 97151, 97152, and 0362T are marked "Prior Auth: NO" on the state fee schedule. PA applies essentially only to treatment: 97153 requires it, and comprehensive programs averaging under 20 hours/week need PA regardless.' },
      { q: 'Is an autism diagnosis required for ABA in New Mexico?', a: 'Not strictly. Alongside diagnosed ASD, NMAC 8.321.2.13 covers recipients aged roughly 12–36 months with a well-documented RISK for ASD — developmental delays, some ASD characteristics, and a genetic risk factor such as an older sibling with ASD or Fragile X.' },
      { q: 'What does New Mexico Medicaid pay for ABA?', a: 'Published, credential-tiered rates per 15-minute unit (eff. 1/1/2025): 97153 pays $32.31 for a BCBA, $23.35 BCaBA, $19.85 behavior technician; 97151 pays $112.65 (BCBA) to $130.94 (BCBA-D/psychologist). Per LOD #53, these FFS rates are the minimum every Turquoise Care MCO must pay.' },
      { q: 'Can the ABA assessment or BCBA supervision be done by telehealth in New Mexico Medicaid?', a: 'Yes. MAD Supplement 24-13 allows and encourages telemedicine for ABA services, real-time audio and video per 8.310.2 NMAC, and expressly lets 97155 supervision be delivered remotely with the recipient present (store-and-forward in documented no-broadband cases). The BA also bills indirect 97151 for family interviews and treatment-plan discussions held by telemedicine. Confirm POS and modifier with the MCO or TPA.' },
      { q: 'What happens when a family is switching ABA providers in New Mexico Medicaid?', a: 'The supplement covers termination, not transfer: a terminating agency gives at least 30 days\' written notice and may refer the family to another agency, and a restart means a new Stage 2 assessment and a new 6-month prior authorization. Ask the MCO or TPA whether an existing authorization can move.' },
      { q: 'Do ABA technicians need RBT certification for New Mexico Medicaid?', a: 'Not at the start. New Mexico Medicaid lets a non-certified behavior technician render ABA if they are 18 or older, have a high-school diploma, pass the New Mexico criminal background registry check, complete 4 hours of ASD training and at least 20 of the 40 RBT/BCAT training hours before serving, and then hold an RBT or BCAT certificate within their first six continuous months. If they miss that deadline they must stop until certified.' },
      { q: 'Does New Mexico Medicaid require ABA goals to be organized by DSM-5 criteria?', a: 'No. Supplement 24-13 asks for observable, measurable goals for each critical domain — developmental skill areas such as language and communication, adaptive and self-care, social relationships, coping and tolerance — prioritized by safety risk. DSM/ICD governs eligibility, not the goal structure.' },
      { q: 'How much parent training does New Mexico Medicaid require?', a: 'Every treatment plan "must include ample units" of 97156 and 97157 and a Family Set goal. 97156 needs no PA, up to 32 units (8 hours) per week for the whole Family Set and 16 units per day; 97157 is up to 16 units (4 hours) per day.' },
    ],
  },

  'blue-cross-blue-shield-new-mexico': {
    slug: 'blue-cross-blue-shield-new-mexico',
    family: 'bcbs',
    cardDesc: 'Shared state LOC criteria; ABA Clinical Service Request Form at least 2 weeks pre-start.',
    assessmentPA: {
      value: 'State baseline applies via the shared Turquoise Care LOC guidelines — no PA on 97151 per the state fee schedule; no separate BCBSNM Medicaid assessment rule published',
      status: 'verified',
      cites: [
        { title: 'Turquoise Care BH Level of Care Guidelines (BCBSNM-hosted)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
        { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (MCO rate floor)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — BCBSNM ABA Clinical Service Request Form (initial + concurrent), submitted up to 60 days before and at least 2 weeks before the treatment start date',
      status: 'verified',
      cites: [
        { title: 'BCBSNM ABA Clinical Service Request Form', url: 'https://www.bcbsnm.com/docs/provider/nm/education/forms/aba-clinical-service-request.pdf' },
      ],
    },
    dxRequired: {
      value: 'State rule — ASD dx within 3 years, or the documented at-risk-for-ASD pathway (NMAC 8.321.2.13)',
      status: 'verified',
      cites: [
        { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
      ],
    },
    payer: 'Blue Cross and Blue Shield of New Mexico (Turquoise Care)',
    state: 'NM', kind: 'medicaid-mco', parent: 'New Mexico Medicaid (Turquoise Care)',
    pill: 'Payer Guide · BCBS of New Mexico',
    h1: 'Blue Cross and Blue Shield of New Mexico ABA coverage (Turquoise Care MCO).',
    metaTitle: 'BCBS of New Mexico (Turquoise Care) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How BCBSNM administers New Mexico Medicaid ABA under Turquoise Care — the shared Behavioral Health Level of Care Guidelines deferring to NMAC 8.321.2, the ABA Clinical Service Request Form and its 2-week lead time, Availity submission, and line-staff requirements.',
    intro: [
      'Blue Cross and Blue Shield of New Mexico administers the Turquoise Care ABA benefit on the state\'s criteria — the Behavioral Health Level of Care Guidelines it hosts are titled for all Turquoise Care MCOs and defer throughout to NMAC 8.321.2. BCBSNM\'s own artifacts are operational: a 5-page ABA Clinical Service Request Form (initial and concurrent) with a firm lead-time rule — it can go in up to 60 days prior to, and must arrive at least 2 weeks before, the requested treatment start date — plus a clinical payment and coding policy (CPCP011) governing billing edits. Timeline management, not clinical criteria, is the plan-specific work here.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Turquoise Care MCO (BCBSNM, in-house behavioral health UM)' },
      { label: 'Clinical rules', value: 'Shared Turquoise Care BH Level of Care Guidelines — defer to NMAC 8.321.2' },
      { label: 'Treatment request', value: 'ABA Clinical Service Request Form, ≥2 weeks (up to 60 days) before start' },
      { label: 'Submission', value: 'Availity (BCBSNM standard); the ABA form also goes by fax' },
      { label: 'Exclusions', value: 'ABA for educational, vocational, respite, or custodial purposes' },
      { label: 'Rates', value: 'Must pay at least the state FFS ABA fee schedule (LOD #53)' },
    ],
    sections: [
      {
        h2: 'State criteria, BCBSNM paperwork',
        body: [
          'The clinical baseline is the state\'s: the shared Level of Care Guidelines\' ABA Stage 3 section references NMAC 8.321.2 throughout, so eligibility (ASD or at-risk), the stage model, and the no-PA assessment front door match the New Mexico Medicaid guide. The BCBSNM layer is the ABA Clinical Service Request Form for treatment — 5 pages, initial and concurrent versions — with the lead-time rule that should drive your intake calendar: the form says it "can be submitted up to 60 days prior to the treatment request start date" and to "Submit forms at least two weeks before requested start date." Miss the window and the start date slips. One caution when using the form: its printed phone/fax numbers (800-851-7498, fax 877-361-7659) and its 36-month diagnostic-recency language come from the commercial/FEP context — for Turquoise Care members the state LOC criteria (3-year recency per NMAC) govern, so confirm current Medicaid routing in Availity rather than trusting the form\'s header.',
        ],
        cites: [
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'BCBSNM ABA Clinical Service Request Form', url: 'https://www.bcbsnm.com/docs/provider/nm/education/forms/aba-clinical-service-request.pdf' },
        ],
      },
      {
        h2: 'Staffing, exclusions, and the adult-benefit citation trap',
        body: [
          'BCBSNM\'s line-staff (1:1 technician) requirements are concrete: 18 or older, HS diploma or GED, background check, 40 hours of ASD/evidence-based-practice training, and BCBA oversight of at least 5% of direct hours — worth checking against your tech roster before submitting. The member handbook excludes ABA for educational, vocational, respite, or custodial purposes, so frame goals clinically in the treatment plan. And one drafting tip for adult cases: the LOC guidelines describe ABA for members 12 months up to 21 years, while the adult expansion lives in state Supplement 24-13 — cite the supplement, not the LOC document, when requesting adult authorizations.',
        ],
        cites: [
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'MAD Supplement 24-13 — ABA Guidance (adult benefit)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
      },
      {
        h2: 'Does BCBSNM (Turquoise Care) require treatment-plan goals in a set format, such as by DSM-5 criteria?',
        body: [
          'BCBSNM\'s ABA Clinical Service Request Form has its own goal layout. The "Member Treatment Plan" section asks for counts of skill-acquisition goals ("focusing on the development of spontaneous social communications, adaptive skills and appropriate behaviors"): new goals, goals carried over, goals on hold, and goals mastered in the previous authorization period. It also asks for current maladaptive behaviors with frequencies, assessment-instrument scores, and a measurable fade/transition and discharge plan. The form does not organize goals by DSM-5 criteria.',
          'The state standard applies to every Turquoise Care MCO. MAD Supplement 24-13 (9/17/2024) is the state\'s ABA guidance. After the 97151 assessment, the BA "must select goals for intervention and determine how these goals will be measured." Goal development covers a list of skill areas: "adaptive and self-care skills, attending and social referencing, cognitive functioning, community participation, coping and tolerance skills, emotional development, family relationships, language and communication, play and leisure skills, pre-academic skills, self-advocacy and independence, self-management, social relationships, and vocational skills." Baseline performance should be measured and "treatment goals should be developed for each critical domain and specified in terms that are observable and measurable" (3.14.3). Targets are prioritized by risk to safety, independence and health (3.14.2). The required treatment-plan elements (3.19.1) include a Family Set goal, baseline data on each target behavior/symptom, interventions with approximate units per target, goals with objective progress measures for the authorization period, and measurable discharge criteria. The domains are developmental skill areas, not DSM-5 criteria. DSM or ICD is used for eligibility, and the ASD support level (Level 2/3) informs dosage. 8.321.2.13 NMAC makes the BA responsible for "selection and measurement of goals."',
        ],
        cites: [
          { title: 'BCBSNM ABA Clinical Service Request Form', url: 'https://www.bcbsnm.com/docs/provider/nm/education/forms/aba-clinical-service-request.pdf' },
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
          { title: '8.321.2.13 NMAC — Applied Behavior Analysis (srca.nm.gov)', url: 'https://www.srca.nm.gov/parts/title08/08.321.0002.html' },
        ],
      },
      {
        h2: 'Does BCBSNM (Turquoise Care) require parent training, and how many hours?',
        body: [
          'BCBSNM\'s form makes parent hours an explicit entry. Its "Parent Involvement" section reads "The parent/caregiver is expected to participate in training sessions ____ hours per week," followed by a table of "Measurable Parent Training Goals" with baseline, current progress and expected mastery date. BCBSNM\'s coding policy CPCP011 (effective 3/20/2026) adds: "parent education is authorized per week for the authorization period (typically 26 weeks) for a total of 26 hours. Requests greater than one hour per week should include supporting clinical documentation." CPCP011 applies "unless otherwise provided in the member\'s benefit." For Turquoise Care members, the state guidance below (no PA for 97156, up to 32 units per week) is the governing Medicaid rule. Confirm with BCBSNM how the two interact on a Medicaid authorization.',
          'The state standard, which applies to every Turquoise Care MCO: Supplement 24-13 says "Every Treatment Plan must include ample units of ABA Stage 3 97156 and 97157" (3.17.1(C)). Every plan must "Include a goal of working with the Family Set" and be "Family Set-focused... with a focus on family engagement, training, and support" (3.19.1). If family members cannot attend in person, the BA must offer alternatives such as telemedicine. 97156 needs no prior authorization, with a "Maximum number of units per 97156 for entire Family Set: thirty-two 15-minute units per week," billed once for the whole Family Set. The CMS Medicaid MUE limits 97156 to sixteen 15-minute units per day, and 97157 (also no PA) to "up to sixteen 15-minute units or four hours per day." Adult recipients may receive up to thirty-two units of either code when medically warranted. Family Sets may start 97156/97157 once the recipient\'s assessment is scheduled. If the family cannot attend at the agreed level, "inadequate family participation" is a listed reason for poor response, and the BA must offer alternatives.',
        ],
        cites: [
          { title: 'BCBSNM ABA Clinical Service Request Form', url: 'https://www.bcbsnm.com/docs/provider/nm/education/forms/aba-clinical-service-request.pdf' },
          { title: 'BCBSNM CPCP011 Applied Behavioral Analysis coding policy (eff. 3/20/2026)', url: 'https://www.bcbsnm.com/docs/provider/nm/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Realistic start date', desc: 'The request form must land at least 2 weeks (and no more than 60 days) before treatment starts — work backwards from the family\'s target.' },
      { title: 'Diagnosis or at-risk documentation', desc: 'State rule: ASD dx within 3 years of referral, or the at-risk pathway documentation — then the assessment books without PA.' },
      { title: 'Adult vs. child case', desc: 'Adult authorizations should cite Supplement 24-13, since the LOC guidelines only describe ages 12 months–21.' },
      { title: 'Tech roster compliance', desc: '18+, HS/GED, background check, 40 hrs training, ≥5% BCBA oversight — verify before naming line staff on the request.' },
    ],
    sources: [
      { title: 'Turquoise Care BH Level of Care Guidelines (BCBSNM-hosted)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
      { title: 'BCBSNM ABA Clinical Service Request Form', url: 'https://www.bcbsnm.com/docs/provider/nm/education/forms/aba-clinical-service-request.pdf' },
      { title: 'BCBSNM CPCP011 Applied Behavioral Analysis coding policy (2026)', url: 'https://www.bcbsnm.com/docs/provider/nm/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
      { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (MCO rate floor)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
      { title: 'MAD Supplement 24-13 — ABA Guidance (adult benefit)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
      { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
      { title: '8.310.2.12(M) NMAC — Telehealth services (srca.nm.gov, amended 1/1/2025)', url: 'https://www.srca.nm.gov/parts/title08/08.310.0002.html' },
      { title: '8.321.2.13 NMAC — Applied Behavior Analysis (srca.nm.gov)', url: 'https://www.srca.nm.gov/parts/title08/08.321.0002.html' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the New Mexico Medicaid rule: NMAC 8.321.2.13 imposes no upper age limit and covers Medicaid-enrolled adults, with under-21s served through EPSDT and the at-risk pathway bounded at 12–36 months. One drafting trap: the shared Turquoise Care Level of Care Guidelines (July 2024) describe ABA for members 12 months up to 21 years, because the adult expansion arrived later in NMAC 8.321.2.13 (12/10/2024) and Supplement 24-13 — cite those, not the LOC document, on an adult request.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      dxRecency: {
        value: 'Follows the New Mexico Medicaid rule: a presumptive ASD diagnosis from a licensed practitioner within scope must have been received within three years of the referral to stage two or three; a recipient who already carries an ASD diagnosis needs no re-evaluation but does need an ISP and a medical-necessity determination; and the at-risk pathway requires no diagnosis at all.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'Follows the New Mexico Medicaid rule: an approved Autism Evaluation Provider confirms the presence of or risk for ASD through a comprehensive diagnostic, targeted or ASD risk evaluation, or the recipient is referred on a presumptive diagnosis from any licensed practitioner whose scope of practice allows an ASD diagnosis, received within three years of referral.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'Follows the New Mexico Medicaid rule, which names none: NMAC 8.321.2.13 requires the diagnosis be made against the latest DSM or ICD and the at-risk criteria be measured by standardized assessments, without naming instruments. No plan-specific instrument list was found for this MCO either.',
        status: 'unverified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
        verifyVia: 'MAD Behavioral Health Policy and Billing Manual / Supplement 24-13 — hca.nm.gov blocked automated retrieval this cycle (CloudFront geo-block), so pull the MAD Behavioral Health Policy and Billing Manual and Supplement 24-13 from the HCA ABA provider page by hand, or ask the MAD ABA Manager.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Follows the New Mexico Medicaid rule for the clinical gate — Autism Evaluation Provider evaluation, ISP, and referral to an approved ABA provider agency. BCBSNM’s own layer is a lead-time rule on the treatment request: the ABA Clinical Service Request Form (initial and concurrent versions) "can be submitted up to 60 days prior to the treatment request start date," and the form says "Submit forms at least two weeks before requested start date." One caution when using the form: its printed phone and fax numbers and its 36-month diagnostic-recency language come from the commercial and FEP context — for Turquoise Care members the state criteria (three-year recency per NMAC) govern, so confirm current Medicaid routing in Availity.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
          { title: 'BCBSNM ABA Clinical Service Request Form', url: 'https://www.bcbsnm.com/docs/provider/nm/education/forms/aba-clinical-service-request.pdf' },
        ],
      },
      telehealth: {
        value: 'Follows the state rule — BCBSNM\'s own ABA documents checked this run (the ABA Clinical Service Request Form and the shared Turquoise Care BH Level of Care Guidelines) publish no ABA-specific telehealth policy, so the HCA rule applies. MAD Supplement 24-13 (section 3.2.1) says MAD "allows and encourages the utilization of telemedicine to deliver MAD ABA services," to bring home- and community-based ABA to rural and frontier areas, and points to 8.310.2 NMAC for the requirements: a HIPAA-compliant system with interactive audio and video in real time, with coverage "determined in a manner consistent with medicaid coverage for health care services provided through in person consultation." In-state BCBAs, BCaBAs, RBTs, BCATs and non-certified technicians need no telemedicine license; an out-of-state MD/DO diagnostician does. Supervision is expressly remote-capable: 97155 may be delivered through telemedicine when the BA directs the technician and the recipient by observing behavior or troubleshooting protocols (not when the BA joins in person), the recipient must be present, and the one-hour-per-20-hours minimum of 97155 still applies. Where an agency documents annually to the MCO or TPA that its transmission provider cannot support real-time video, store-and-forward can deliver up to 100% of direct 97155, with 30 to 60 extra minutes of 97155 added, but not for a non-certified technician. The assessment can be partly remote too: "A BA/Mentored BA bills Indirect 97151 when conducting interviews or discussing the Treatment Plan or Protocols with the Family Set delivered via telemedicine," and direct T1026 UD case supervision may happen onsite or be "delivered through telemedicine." The supplement names no POS code or modifier for ABA telemedicine, so confirm claim coding with the MCO or TPA.',
        status: 'verified',
        cites: [
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
          { title: '8.310.2.12(M) NMAC — Telehealth services (srca.nm.gov, amended 1/1/2025)', url: 'https://www.srca.nm.gov/parts/title08/08.310.0002.html' },
        ],
      },
      authTurnaround: {
        value:
          'BCBSNM\u2019s Turquoise Care Provider Reference Manual: routine preauthorization \u201cDecision \u2013 To be rendered within 7 calendar days from receipt of request for services\u201d, provider notified within one working day of the decision; urgent/expedited \u201cDecision and notification \u2013 Shall occur 24 hours after receipt of request\u201d, with an automatic appeal on an expedited denial. Time frames \u201cmay be extended by BCBSNM to the extent allowed by law\u201d. That sits inside its HCA contract (7 business days after complete documentation, 24-hour expedited, deemed granted if missed, and the most rigorous of that or 42 CFR 438.210(d)) \u2014 the manual\u2019s 7 calendar days from receipt is the clock to plan against. Lead time: the ABA Clinical Service Request Form (initial and concurrent versions) says \u201cSubmit forms at least two weeks before requested start date\u201d and that it \u201ccan be submitted up to 60 days prior to the treatment request start date\u201d, so file each continuation between 60 days and two weeks before the current authorization ends. The form prints commercial/FEP phone and fax lines, so confirm Turquoise Care routing in Availity.',
        status: 'verified',
        cites: [{ title: 'BCBSNM Medicaid (Turquoise Care) Provider Reference Manual (2026)', url: 'https://www.bcbsnm.com/docs/provider/nm/medicaid-prm.pdf' }, { title: 'BCBSNM ABA Clinical Service Request Form', url: 'https://www.bcbsnm.com/docs/provider/nm/education/forms/aba-clinical-service-request.pdf' }, { title: 'Turquoise Care Medicaid Managed Care Services Agreement \u2014 BCBSNM, Amendment 5 (signed 12/2025), \u00a7\u00a7 4.5.19.8, 4.19.11', url: 'https://www.hca.nm.gov/wp-content/uploads/TCBCBS_24-630-8000-0029_CA5_Signed.pdf' }, { title: '42 CFR 438.210(d) \u2014 Medicaid managed care authorization timeframes', url: 'https://www.ecfr.gov/current/title-42/section-438.210' }],
      },
      coordinationOfBenefits: {
        value:
          'BCBSNM\u2019s manual: \u201cBy law, the Medicaid program is the payer of last resort\u201d \u2014 if the member has coverage \u201cprimary to Medicaid, submit a claim for payment to that plan first\u201d. When BCBSNM is secondary, claims \u201cmust be submitted to BCBSNM within 180 days from the other insurance paid date\u201d with the primary payer\u2019s EOB attached, and \u201cIf the primary plan denies the claim due to the provider or member not following that plan\u2019s prescribed procedures, including but not limited to, failure to obtain a prior authorization and untimely filing, payment will not be made\u201d \u2014 get the commercial plan\u2019s ABA authorization first. Its HCA contract adds that \u201cClaims for EPSDT shall be paid at the time presented for payment by the Provider and the CONTRACTOR shall bill the responsible third party\u201d; whether ABA is treated under that exception is not stated. The manual does not say whether BCBSNM\u2019s own ABA prior authorization is required while it is secondary \u2014 confirm with BCBSNM UM before the first session. TRICARE pays ahead of Medicaid (10 U.S.C. 1079(i)(1) exempts title XIX plans).',
        status: 'verified',
        cites: [{ title: 'BCBSNM Medicaid (Turquoise Care) Provider Reference Manual (2026)', url: 'https://www.bcbsnm.com/docs/provider/nm/medicaid-prm.pdf' }, { title: 'Turquoise Care Medicaid Managed Care Services Agreement \u2014 BCBSNM, Amendment 5 (signed 12/2025), \u00a7\u00a7 4.5.19.8, 4.19.11', url: 'https://www.hca.nm.gov/wp-content/uploads/TCBCBS_24-630-8000-0029_CA5_Signed.pdf' }, { title: '8.302.3 NMAC \u2014 Third Party Liability Provider Responsibilities', url: 'https://www.srca.nm.gov/parts/title08/08.302.0003.html' }, { title: '10 U.S.C. 1079(i)(1) \u2014 TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' }],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the New Mexico Medicaid ratios (PA above two hours of case supervision or clinical management per 10 hours of intervention; the Supplement 24-13 97155 observation floor). CPCP011 adds the payment-side view, citing CASP 2024: 10–20% of direct hours in case supervision activities combining direct and indirect supervision, with direct supervision authorizable at a minimum of one hour per week when fewer than 10 hours of direct services are authorized — and indirect supervision treated as bundled practice expense, documented in the treatment plan but not separately reimbursable. BCBSNM’s line-staff requirements for 1:1 technicians are 18 or older, high-school diploma or GED, background check, 40 hours of ASD and evidence-based-practice training, and BCBA oversight of at least 5% of direct hours.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
          { title: 'BCBSNM CPCP011 Applied Behavioral Analysis coding policy (eff. 3/20/2026)', url: 'https://www.bcbsnm.com/docs/provider/nm/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'BCBSNM’s ABA coding policy CPCP011 answers this where the state rule does not: ABA services are not reimbursable for more than one BCBA or qualified healthcare professional providing the same or similar services on the same dates of service — and the policy is explicit that this "does not refer to the technician(s) or direct service provider simultaneously rendering service with the BCBA or qualified healthcare professional." Billable supervision of a patient must be face-to-face and involves only one technician; there is no CPT code for indirect (patient not present) supervision or week-to-week treatment planning, which AMA treats as bundled practice expense. Co-treatment with a distinct service such as speech or occupational therapy is allowed where clinically indicated, documented in the treatment plan and billed with the appropriate modifier.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
          { title: 'BCBSNM CPCP011 Applied Behavioral Analysis coding policy (eff. 3/20/2026)', url: 'https://www.bcbsnm.com/docs/provider/nm/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
        ],
      },
      dailyLimits: {
        value: 'CPCP011 supplies the ceilings the state rule omits. Providers are referred to the current CMS MUE table for the maximum units per member per date of service, with service units also limited by the authorization period, and any units beyond industry-standard coding guidelines must be justified in documentation. Named limits: treatment plans and evaluations inclusive of administration, scoring, interpretation and report write-up that exceed eight hours (32 units of 97151) may not be eligible for reimbursement; parent education is authorized at one hour per week for the authorization period, typically 26 weeks for a total of 26 hours, with more requiring supporting clinical documentation; group codes 97154 and 97158 require no fewer than 2 and no more than 8 members. Timed codes follow the 8-minute rule, and a direct treatment service performed for less than 8 minutes as the only modality that day is not reportable.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
          { title: 'BCBSNM CPCP011 Applied Behavioral Analysis coding policy (eff. 3/20/2026)', url: 'https://www.bcbsnm.com/docs/provider/nm/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
        ],
      },
      noteSignature: {
        value: 'CPCP011 sets a documentation bar stricter than most: substantiating documentation includes a parent or caregiver signature for each rendered service, carrying the service and code provided, the rendering provider’s name and signature, certification and credentials, the place of service, the date of service and the beginning and end times of the service; plus a written account, summary or note of the service rendered; and data points, which may be required immediately after the service and for audit. Session notes should reflect that both parties were present for the entire duration of the encounter where services are rendered under direct personal supervision. All treatment time, including beginning and ending time, must be recorded in the record with the note describing the specific procedure.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
          { title: 'BCBSNM CPCP011 Applied Behavioral Analysis coding policy (eff. 3/20/2026)', url: 'https://www.bcbsnm.com/docs/provider/nm/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
        ],
      },
      placeOfService: {
        value: 'Follows the New Mexico Medicaid rule on covered settings, with a BCBSNM claim-edit overlay: CPCP011 treats POS 10, 11 and 12 as the conventional settings, and programmes or services rendered in any other place of service — even by a licensed provider — need supporting documentation on file in the member record, including a rationale and description for the non-conventional POS code, available on request. The member handbook excludes ABA delivered for educational, vocational, respite or custodial purposes, which mirrors the state rule’s school-supplanting exclusion.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
          { title: 'BCBSNM CPCP011 Applied Behavioral Analysis coding policy (eff. 3/20/2026)', url: 'https://www.bcbsnm.com/docs/provider/nm/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Follows the New Mexico Medicaid enrolment rules, with CPCP011 governing who may appear on the claim. ABA is not reimbursable unless provided by a professional certified by the BACB as a behavior analyst, or licensed in their state as a Licensed Behavior Analyst or Licensed Psychologist. The provider who renders treatment week to week is the rendering provider and should bill; a provider who is not rendering protocol modification, parent education, assessment or report writing should not bill for services they did not personally provide. An unlicensed, non-network-credentialed or otherwise non-qualified provider cannot provide services and bill through another person’s NPI. A single modifier — HM, HN or HO — indicates the rendering provider’s level of education, training and certification when 97153 is submitted.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
          { title: 'BCBSNM CPCP011 Applied Behavioral Analysis coding policy (eff. 3/20/2026)', url: 'https://www.bcbsnm.com/docs/provider/nm/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does BCBS of New Mexico cover ABA under Medicaid?', a: 'Yes — as a Turquoise Care MCO it administers the state ABA benefit on the shared Level of Care Guidelines, which defer to NMAC 8.321.2. The state front door applies: no PA on the assessment, treatment requested via BCBSNM\'s ABA Clinical Service Request Form.' },
      { q: 'When do I submit the BCBSNM ABA request form?', a: 'Up to 60 days before, and at least two weeks before, the requested treatment start date, via Availity or fax. The form (Oct 2025) says it "can be submitted up to 60 days prior to the treatment request start date" and to "Submit forms at least two weeks before requested start date." Build that lead time into scheduling conversations with families.' },
      { q: 'What does BCBSNM pay for ABA?', a: 'At least the state FFS fee schedule — LOD #53 makes the published ABA rates (e.g., $32.31 per 15-min 97153 unit for a BCBA) a contractual minimum for every Turquoise Care MCO and its sub-vendors.' },
      { q: 'Do ABA technicians need RBT certification for BCBSNM (New Mexico Medicaid)?', a: 'Follows the state rule. Not at the start. New Mexico Medicaid lets a non-certified behavior technician render ABA if they are 18 or older, have a high-school diploma, pass the New Mexico criminal background registry check, complete 4 hours of ASD training and at least 20 of the 40 RBT/BCAT training hours before serving, and then hold an RBT or BCAT certificate within their first six continuous months. If they miss that deadline they must stop until certified.' },
      { q: 'Can BCBA supervision (97155) be done by telehealth for BCBSNM members?', a: 'Yes, under the state rule in MAD Supplement 24-13: 97155 may be delivered by real-time telemedicine with the recipient present, and by store-and-forward only where the agency documents no real-time option.' },
      { q: 'Does BCBSNM require ABA goals to be organized by DSM-5 criteria for Turquoise Care?', a: 'No. BCBSNM\'s request form counts skill-acquisition goals (social communication, adaptive skills, appropriate behaviors) by status and asks for maladaptive-behavior frequencies. The state standard (Supplement 24-13) wants measurable goals for each critical developmental domain.' },
      { q: 'How many parent training hours does BCBSNM expect?', a: 'Its request form asks how many hours per week the caregiver will train, with measurable parent goals. CPCP011 defaults to one hour per week (26 hours per 26-week authorization) and asks for documentation above that. For Turquoise Care, the state guidance allows 97156 without PA up to 32 units per week, so confirm which applies.' },
    ],
  },

  'presbyterian-health-plan-new-mexico': {
    slug: 'presbyterian-health-plan-new-mexico',
    assessmentPA: {
      value: 'Required — stricter than the state baseline. Presbyterian\'s own Provider Prior Authorization Guide (09.01.2026), which its Turquoise Care manual names as the complete list of services requiring prior authorization, lists 97151, 97152 and 0362T on its Applied Behavior Analysis row for Turquoise Care, Turquoise Care Expansion ABP and Commercial, with no carve-out for any line of business. The state fee schedule marks those codes "Prior Auth: NO", but Presbyterian\'s list is the one its UM applies — get the assessment authorized before booking, and confirm with Turquoise Care BH UM at (505) 923-5757, option 4 then 2',
      status: 'verified',
      cites: [
        { title: 'Presbyterian Provider Prior Authorization Guide (09.01.2026), p. 48 — Applied Behavior Analysis', url: 'https://onbaseext.phs.org/PEL/DisplayDocument?ContentID=PEL_00179220' },
        { title: 'Presbyterian Turquoise Care Practitioner and Provider Manual (2026)', url: 'https://onbaseext.phs.org/PEL/DisplayDocument?ContentID=OB_000000001114' },
        { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (MCO rate floor)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
      ],
    },
    cardDesc: 'State criteria with its own Stage 3 review forms; Medicaid BH fax (505) 843-3019 — not Magellan.',
    treatmentPA: {
      value: 'Required on every ABA treatment code — Presbyterian\'s PA Guide lists 97153-97158, 0373T, H2019, H0031 and H0032 for Turquoise Care, not just the state\'s 97153/0373T. Submit the Stage 3 ABA Clinical Review Form to Presbyterian Turquoise Care BH — fax (505) 843-3019 or the online Turquoise Care portal; BH UM line (505) 923-5757, option 4 then 2',
      status: 'verified',
      cites: [
        { title: 'Presbyterian Provider Prior Authorization Guide (09.01.2026), p. 48 — Applied Behavior Analysis', url: 'https://onbaseext.phs.org/PEL/DisplayDocument?ContentID=PEL_00179220' },
        { title: 'Presbyterian Health Plan — Authorizations for Providers', url: 'https://www.phs.org/providers/authorizations' },
        { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (MCO rate floor)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
      ],
    },
    dxRequired: {
      value: 'State rule — ASD dx within 3 years, or the documented at-risk-for-ASD pathway (NMAC 8.321.2.13)',
      status: 'verified',
      cites: [
        { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
      ],
    },
    payer: 'Presbyterian Health Plan (Turquoise Care)',
    state: 'NM', kind: 'medicaid-mco', parent: 'New Mexico Medicaid (Turquoise Care)',
    pill: 'Payer Guide · Presbyterian Health Plan',
    h1: 'Presbyterian Health Plan ABA coverage (Turquoise Care MCO).',
    metaTitle: 'Presbyterian Health Plan (Turquoise Care) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Presbyterian Health Plan administers New Mexico Medicaid ABA under Turquoise Care — state-criteria deference, Presbyterian\'s own Stage 3 and Specialty Care clinical review forms, the Medicaid BH fax and myPRES portal, and the Magellan routing trap.',
    intro: [
      'Presbyterian Health Plan — New Mexico\'s homegrown Turquoise Care MCO — administers ABA on the state\'s criteria, and even borrows the state\'s vocabulary: its own authorization paperwork is an "Applied Behavior Analysis (ABA) Clinical Review Form: Stage 3" and an "ABA Specialty Care Clinical Review Form," mirroring the NMAC stage model. The plan-specific layer is form-and-routing mechanics, with one trap worth memorizing: Presbyterian\'s Turquoise Care behavioral health is managed in-house — Magellan handles only Presbyterian\'s Medicare and commercial BH, never Medicaid.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Turquoise Care MCO (in-house BH UM for Medicaid)' },
      { label: 'Clinical rules', value: 'State ABA criteria and stage model (NMAC 8.321.2 / Supplement 24-13)' },
      { label: 'Assessment auth', value: 'REQUIRED — Presbyterian\'s PA Guide lists 97151/97152/0362T (stricter than the state fee schedule)' },
      { label: 'Treatment request', value: 'Presbyterian\'s own Stage 3 ABA Clinical Review Form' },
      { label: 'Submission', value: 'Fax (505) 843-3019 or the Turquoise Care online submission; myPRES portal' },
      { label: 'Routing trap', value: 'Magellan = Presbyterian Medicare/commercial BH only — NOT Medicaid' },
      { label: 'Rates', value: 'Must pay at least the state FFS ABA fee schedule (LOD #53)' },
    ],
    sections: [
      {
        h2: 'How Presbyterian runs ABA authorization',
        body: [
          'Clinically, expect the state baseline: the ASD-or-at-risk eligibility and the service-authorization-plus-6-month-PA cadence come from the state program (see the New Mexico Medicaid guide). Prior authorization is where Presbyterian is stricter: its Provider Prior Authorization Guide (09.01.2026) lists every ABA code for Turquoise Care — 97151, 97152 and 0362T assessment codes included, plus 97153-97158, 0373T, H2019, H0031 and H0032 — where the state fee schedule gates only 97153 and 0373T. Book the assessment only after it is authorized. Presbyterian\'s contribution is its paperwork: Stage 3 treatment requests go on Presbyterian\'s own ABA Clinical Review Form (with a separate Specialty Care version), submitted by fax to (505) 843-3019 or through the dedicated Turquoise Care online submission channel; day-to-day provider work runs through the myPRES portal. The plan mirroring the state\'s "Stage 3" and "Specialty Care" vocabulary on its forms is a strong signal of state-criteria deference — no distinct Presbyterian clinical policy for ABA has been published. No plan-specific hour caps have been published either; treat the state criteria as the operative limits and verify current form versions in myPRES before submitting.',
        ],
        cites: [
          { title: 'Presbyterian Health Plan — Authorizations for Providers (ABA Stage 3 + Specialty Care forms)', url: 'https://www.phs.org/providers/authorizations' },
          { title: 'Presbyterian Provider Prior Authorization Guide (09.01.2026), p. 48 — Applied Behavior Analysis', url: 'https://onbaseext.phs.org/PEL/DisplayDocument?ContentID=PEL_00179220' },
        ],
      },
      {
        h2: 'The Magellan routing trap',
        body: [
          'Presbyterian contracts Magellan for behavioral health on its Medicare and commercial lines — but Turquoise Care (Medicaid) behavioral health is handled in-house. An ABA authorization for a Medicaid member routed to Magellan goes nowhere: use the Medicaid-specific BH fax (505) 843-3019 or the Turquoise Care portal submission. Because the same family can move between Presbyterian\'s commercial and Medicaid products, confirm the line of business on every card before choosing the routing.',
        ],
        cites: [
          { title: 'Presbyterian Health Plan — Authorizations for Providers', url: 'https://www.phs.org/providers/authorizations' },
        ],
      },
      {
        h2: 'Does Presbyterian (Turquoise Care) require treatment-plan goals in a set format, such as by DSM-5 criteria?',
        body: [
          'Presbyterian publishes no ABA goal format of its own. Its Turquoise Care practitioner manual describes the ABA benefit only in general terms, and its Prior Authorization Guide (09.01.2026) lists the ABA codes without treatment-plan criteria. The state standard below governs.',
          'The state standard applies to every Turquoise Care MCO. MAD Supplement 24-13 (9/17/2024) is the state\'s ABA guidance. After the 97151 assessment, the BA "must select goals for intervention and determine how these goals will be measured." Goal development covers a list of skill areas: "adaptive and self-care skills, attending and social referencing, cognitive functioning, community participation, coping and tolerance skills, emotional development, family relationships, language and communication, play and leisure skills, pre-academic skills, self-advocacy and independence, self-management, social relationships, and vocational skills." Baseline performance should be measured and "treatment goals should be developed for each critical domain and specified in terms that are observable and measurable" (3.14.3). Targets are prioritized by risk to safety, independence and health (3.14.2). The required treatment-plan elements (3.19.1) include a Family Set goal, baseline data on each target behavior/symptom, interventions with approximate units per target, goals with objective progress measures for the authorization period, and measurable discharge criteria. The domains are developmental skill areas, not DSM-5 criteria. DSM or ICD is used for eligibility, and the ASD support level (Level 2/3) informs dosage. 8.321.2.13 NMAC makes the BA responsible for "selection and measurement of goals."',
        ],
        cites: [
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
          { title: '8.321.2.13 NMAC — Applied Behavior Analysis (srca.nm.gov)', url: 'https://www.srca.nm.gov/parts/title08/08.321.0002.html' },
        ],
      },
      {
        h2: 'Does Presbyterian (Turquoise Care) require parent training, and how many hours?',
        body: [
          'Presbyterian publishes no parent-training hours of its own. Its Prior Authorization Guide (09.01.2026, p. 48) lists 97156 and 97157 among the ABA codes in its Applied Behavior Analysis entry, for Turquoise Care, Turquoise Care Expansion and Commercial. Check the guide or the authorization line for whether a Medicaid 97156 request is needed, since the state guidance makes 97156 PA-free.',
          'The state standard, which applies to every Turquoise Care MCO: Supplement 24-13 says "Every Treatment Plan must include ample units of ABA Stage 3 97156 and 97157" (3.17.1(C)). Every plan must "Include a goal of working with the Family Set" and be "Family Set-focused... with a focus on family engagement, training, and support" (3.19.1). If family members cannot attend in person, the BA must offer alternatives such as telemedicine. 97156 needs no prior authorization, with a "Maximum number of units per 97156 for entire Family Set: thirty-two 15-minute units per week," billed once for the whole Family Set. The CMS Medicaid MUE limits 97156 to sixteen 15-minute units per day, and 97157 (also no PA) to "up to sixteen 15-minute units or four hours per day." Adult recipients may receive up to thirty-two units of either code when medically warranted. Family Sets may start 97156/97157 once the recipient\'s assessment is scheduled. If the family cannot attend at the agreed level, "inadequate family participation" is a listed reason for poor response, and the BA must offer alternatives.',
        ],
        cites: [
          { title: 'Presbyterian Provider Prior Authorization Guide (09.01.2026), p. 48 — Applied Behavior Analysis', url: 'https://onbaseext.phs.org/PEL/DisplayDocument?ContentID=PEL_00179220' },
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Line of business', desc: 'Presbyterian Medicaid (Turquoise Care, in-house BH) vs. commercial/Medicare (Magellan) — it decides where the auth goes.' },
      { title: 'Diagnosis or at-risk documentation', desc: 'State rule: ASD dx within 3 years of referral, or the at-risk pathway — then request the assessment authorization; Presbyterian\'s PA Guide gates 97151/97152 too.' },
      { title: 'Stage 3 form package', desc: 'Presbyterian\'s own ABA Clinical Review Form (Stage 3) — pull the current version from myPRES/phs.org before each request.' },
      { title: 'Planned weekly intensity', desc: 'The state\'s under-20-hrs/week comprehensive-treatment PA quirk applies here too — plan hours deliberately.' },
    ],
    sources: [
      { title: 'Presbyterian Health Plan — Authorizations for Providers', url: 'https://www.phs.org/providers/authorizations' },
      { title: 'Presbyterian Provider Prior Authorization Guide (09.01.2026)', url: 'https://onbaseext.phs.org/PEL/DisplayDocument?ContentID=PEL_00179220' },
      { title: 'MAD Supplement 24-13 — ABA Guidance (state criteria)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
      { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (MCO rate floor)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
      { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
      { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
      { title: '8.310.2.12(M) NMAC — Telehealth services (srca.nm.gov, amended 1/1/2025)', url: 'https://www.srca.nm.gov/parts/title08/08.310.0002.html' },
      { title: '8.321.2.13 NMAC — Applied Behavior Analysis (srca.nm.gov)', url: 'https://www.srca.nm.gov/parts/title08/08.321.0002.html' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the New Mexico Medicaid rule: NMAC 8.321.2.13 imposes no upper age limit and covers Medicaid-enrolled adults, with under-21s served through EPSDT and the at-risk pathway bounded at 12–36 months. One drafting trap: the shared Turquoise Care Level of Care Guidelines (July 2024) describe ABA for members 12 months up to 21 years, because the adult expansion arrived later in NMAC 8.321.2.13 (12/10/2024) and Supplement 24-13 — cite those, not the LOC document, on an adult request.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      dxRecency: {
        value: 'Follows the New Mexico Medicaid rule: a presumptive ASD diagnosis from a licensed practitioner within scope must have been received within three years of the referral to stage two or three; a recipient who already carries an ASD diagnosis needs no re-evaluation but does need an ISP and a medical-necessity determination; and the at-risk pathway requires no diagnosis at all.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'Follows the New Mexico Medicaid rule: an approved Autism Evaluation Provider confirms the presence of or risk for ASD through a comprehensive diagnostic, targeted or ASD risk evaluation, or the recipient is referred on a presumptive diagnosis from any licensed practitioner whose scope of practice allows an ASD diagnosis, received within three years of referral.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'Follows the New Mexico Medicaid rule, which names none: NMAC 8.321.2.13 requires the diagnosis be made against the latest DSM or ICD and the at-risk criteria be measured by standardized assessments, without naming instruments. No plan-specific instrument list was found for this MCO either.',
        status: 'unverified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
        verifyVia: 'MAD Behavioral Health Policy and Billing Manual / Supplement 24-13 — hca.nm.gov blocked automated retrieval this cycle (CloudFront geo-block), so pull the MAD Behavioral Health Policy and Billing Manual and Supplement 24-13 from the HCA ABA provider page by hand, or ask the MAD ABA Manager.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Follows the New Mexico Medicaid rule — Autism Evaluation Provider evaluation, ISP, and referral to an approved ABA provider agency — with Presbyterian’s own paperwork on top: stage-three treatment requests go on Presbyterian’s "Applied Behavior Analysis (ABA) Clinical Review Form: Stage 3" (with a separate ABA Specialty Care Clinical Review Form), faxed to (505) 843-3019 or filed through the Turquoise Care online submission channel. The routing trap matters more than the form: Magellan handles Presbyterian’s Medicare and commercial behavioral health only, never Turquoise Care Medicaid, which is managed in-house.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
          { title: 'Presbyterian Health Plan — Authorizations for Providers (ABA Stage 3 + Specialty Care forms)', url: 'https://www.phs.org/providers/authorizations' },
        ],
      },
      telehealth: {
        value: 'Follows the state rule — Presbyterian\'s own ABA documents checked this run (the 2026 Turquoise Care Practitioner and Provider Manual, whose telehealth section is general, and the 09.01.2026 Prior Authorization Guide) publish no ABA-specific telehealth policy, so the HCA rule applies. MAD Supplement 24-13 (section 3.2.1) says MAD "allows and encourages the utilization of telemedicine to deliver MAD ABA services," to bring home- and community-based ABA to rural and frontier areas, and points to 8.310.2 NMAC for the requirements: a HIPAA-compliant system with interactive audio and video in real time, with coverage "determined in a manner consistent with medicaid coverage for health care services provided through in person consultation." In-state BCBAs, BCaBAs, RBTs, BCATs and non-certified technicians need no telemedicine license; an out-of-state MD/DO diagnostician does. Supervision is expressly remote-capable: 97155 may be delivered through telemedicine when the BA directs the technician and the recipient by observing behavior or troubleshooting protocols (not when the BA joins in person), the recipient must be present, and the one-hour-per-20-hours minimum of 97155 still applies. Where an agency documents annually to the MCO or TPA that its transmission provider cannot support real-time video, store-and-forward can deliver up to 100% of direct 97155, with 30 to 60 extra minutes of 97155 added, but not for a non-certified technician. The assessment can be partly remote too: "A BA/Mentored BA bills Indirect 97151 when conducting interviews or discussing the Treatment Plan or Protocols with the Family Set delivered via telemedicine," and direct T1026 UD case supervision may happen onsite or be "delivered through telemedicine." The supplement names no POS code or modifier for ABA telemedicine, so confirm claim coding with the MCO or TPA.',
        status: 'verified',
        cites: [
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
          { title: '8.310.2.12(M) NMAC — Telehealth services (srca.nm.gov, amended 1/1/2025)', url: 'https://www.srca.nm.gov/parts/title08/08.310.0002.html' },
        ],
      },
      authTurnaround: {
        value:
          'Presbyterian\u2019s Prior Authorization Guide lists Medicaid standard requests at \u201c7 calendar days\u201d and expedited at \u201c24 hours\u201d, processed \u201cwhen all necessary and relevant documentation supporting the prior authorization request is submitted\u201d. The Turquoise Care manual sharpens the incomplete-file rule: \u201cWe will deny the prior authorization request if we do not receive all of the documentation needed to make a decision within 7 calendar days of the day the request was received\u201d \u2014 so send the complete packet up front. \u201cExpedited requests for Turquoise Care members are processed within 24 hours\u201d of complete documentation. Its HCA contract (7 business days, 24-hour expedited, deemed granted, most rigorous of that or 42 CFR 438.210(d)) is the backstop. Reauthorization: Supplement 24-13 sets no day count, only that the ABA Treatment Plan Update and Progress Report \u201cmust be prepared and submitted to the MCO or TPA prior to the end of the recipient\u2019s Prior Authorization period\u201d. Presbyterian publishes no separate ABA lead time.',
        status: 'verified',
        cites: [{ title: 'Presbyterian Provider Prior Authorization Guide (09.01.2026)', url: 'https://onbaseext.phs.org/PEL/DisplayDocument?ContentID=PEL_00179220' }, { title: 'Presbyterian Turquoise Care Practitioner and Provider Manual (2026)', url: 'https://onbaseext.phs.org/PEL/DisplayDocument?ContentID=OB_000000001114' }, { title: 'Turquoise Care Medicaid Managed Care Services Agreement \u2014 Presbyterian, Amendment 5 (signed 12/2025), \u00a7\u00a7 4.5.19.8, 4.19.11', url: 'https://www.hca.nm.gov/wp-content/uploads/TCPHP_24-630-8000-0031_CA5_Signed.pdf' }, { title: 'MAD Supplement 24-13 \u2014 Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' }],
      },
      coordinationOfBenefits: {
        value:
          'Presbyterian\u2019s Turquoise Care manual: \u201cPresbyterian Turquoise Care is, by law, the payor of last resort\u201d \u2014 bill the other plan first, get an itemized EOP, and submit within \u201c90 calendar days of the date the other payor paid or denied the claim\u201d, \u201cnot to exceed 210 calendar days from the date of service\u201d; \u201cClaims submitted without an EOP are denied\u201d. \u201cCoverage requirements of the other insurance plan must be satisfied\u201d, and Presbyterian \u201cdoes not make payment for services denied by another carrier when the provider or member did not follow the requirements of the primary plan\u201d. On its own authorization when secondary: \u201cPresbyterian Turquoise Care does not require a prior authorization or referral\u201d when the primary does not include the benefit or has hit its annual or benefit maximum, and its \u201cnormal prior authorization guidelines and plan requirements apply when Presbyterian is acting as the primary carrier if the other carrier denied the services\u201d. Coordination follows \u201cCMS and NMAC regulations, the National Association of Insurance Commissioners\u2019 guidelines\u201d. TRICARE pays ahead of Medicaid (10 U.S.C. 1079(i)(1)).',
        status: 'verified',
        cites: [{ title: 'Presbyterian Turquoise Care Practitioner and Provider Manual (2026)', url: 'https://onbaseext.phs.org/PEL/DisplayDocument?ContentID=OB_000000001114' }, { title: 'Turquoise Care Medicaid Managed Care Services Agreement \u2014 Presbyterian, Amendment 5 (signed 12/2025), \u00a7\u00a7 4.5.19.8, 4.19.11', url: 'https://www.hca.nm.gov/wp-content/uploads/TCPHP_24-630-8000-0031_CA5_Signed.pdf' }, { title: '8.302.3 NMAC \u2014 Third Party Liability Provider Responsibilities', url: 'https://www.srca.nm.gov/parts/title08/08.302.0003.html' }, { title: '10 U.S.C. 1079(i)(1) \u2014 TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' }],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the New Mexico Medicaid rule: every stage-three service requires clinical management, a BCaBA or technician implementing the plan requires case supervision from their BA or supervising BAA, and prior authorization is triggered where more than two hours of case supervision, or two hours of clinical management, per 10 hours of intervention is requested. Certification-maintenance supervision is not MAD-reimbursable.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not resolved. NMAC publishes no same-clock-time billing rule for ABA and defers to the MAD Behavioral Health Policy and Billing Manual; no plan-specific concurrent-billing rule was found for this MCO.',
        status: 'unverified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
        verifyVia: 'The plan’s provider portal or claims line, plus the MAD Behavioral Health Policy and Billing Manual — hca.nm.gov blocked automated retrieval this cycle (CloudFront geo-block), so pull the MAD Behavioral Health Policy and Billing Manual and Supplement 24-13 from the HCA ABA provider page by hand, or ask the MAD ABA Manager.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Follows the New Mexico Medicaid rule: no per-day unit ceiling, with authorization-gated intensity thresholds instead — including the inverted quirk that comprehensive treatment averaging under 20 hours a week requires prior authorization — and PA on supervision or clinical management above two hours per 10 hours of stage-three service. No plan-specific hour caps were found for this MCO.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      noteSignature: {
        value: 'Not resolved at the state level: NMAC makes the supervising behavior analyst responsible for treatment plan formulation and documentation but defers session-note mechanics to the MAD Behavioral Health Policy and Billing Manual, and no plan-specific documentation standard was found for this MCO.',
        status: 'unverified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
        verifyVia: 'MAD Behavioral Health Policy and Billing Manual (ABA documentation requirements) — hca.nm.gov blocked automated retrieval this cycle (CloudFront geo-block), so pull the MAD Behavioral Health Policy and Billing Manual and Supplement 24-13 from the HCA ABA provider page by hand, or ask the MAD ABA Manager.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Follows the New Mexico Medicaid rule: school-setting activities with the potential to supplant educational services are excluded; a residential facility that is not itself an ABA provider must contract a MAD-enrolled ABA provider to render on site; treatment foster care is not treated as out-of-home placement; and out-of-home placement is otherwise an exclusion under the shared Turquoise Care Level of Care Guidelines apart from time-limited transition services.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Follows the New Mexico Medicaid rule: reimbursement goes to the MAD-enrolled ABA provider, behavior analysts enrol as Provider Type 445 / Specialty 099 and technicians as Provider Type 430 / Specialty 098 on the MAD-877 and MAD-878 attestations, and every practitioner must clear a New Mexico criminal background registry check before rendering. Letter of Direction #53 makes the state fee-for-service ABA fee schedule the contractual minimum this MCO and its sub-vendors must pay.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Presbyterian Health Plan cover ABA under Turquoise Care?', a: 'Yes — on the state\'s ABA criteria and stage model. Treatment requests use Presbyterian\'s own Stage 3 ABA Clinical Review Form, faxed to (505) 843-3019 or submitted through the Turquoise Care online channel.' },
      { q: 'Do I send Presbyterian Medicaid ABA authorizations to Magellan?', a: 'No — Magellan handles Presbyterian\'s Medicare and commercial behavioral health only. Turquoise Care (Medicaid) BH is in-house: use the Medicaid fax (505) 843-3019 or the Turquoise Care portal.' },
      { q: 'Does Presbyterian require PA on the ABA assessment?', a: 'Yes. Presbyterian\'s Provider Prior Authorization Guide (09.01.2026) lists 97151, 97152 and 0362T on its Applied Behavior Analysis row for Turquoise Care, Turquoise Care Expansion ABP and Commercial — stricter than the state fee schedule, which marks those codes PA-free. Confirm with Turquoise Care BH UM at (505) 923-5757, option 4 then 2.' },
      { q: 'Do ABA technicians need RBT certification for Presbyterian (New Mexico Medicaid)?', a: 'Follows the state rule. Not at the start. New Mexico Medicaid lets a non-certified behavior technician render ABA if they are 18 or older, have a high-school diploma, pass the New Mexico criminal background registry check, complete 4 hours of ASD training and at least 20 of the 40 RBT/BCAT training hours before serving, and then hold an RBT or BCAT certificate within their first six continuous months. If they miss that deadline they must stop until certified.' },
      { q: 'Can BCBA supervision (97155) be done by telehealth for Presbyterian members?', a: 'Yes, under the state rule in MAD Supplement 24-13: 97155 may be delivered by real-time telemedicine with the recipient present, and by store-and-forward only where the agency documents no real-time option.' },
      { q: 'Does Presbyterian require ABA goals to be organized by DSM-5 criteria for Turquoise Care?', a: 'Presbyterian publishes no format of its own; the state standard (Supplement 24-13) applies — measurable goals for each critical developmental domain, prioritized by safety risk, not DSM-5 criteria.' },
      { q: 'How much parent training does Presbyterian expect for Turquoise Care?', a: 'Presbyterian publishes no figure; the state rule applies — every plan "must include ample units" of 97156/97157, with 97156 up to 32 units per week for the Family Set. Presbyterian\'s PA guide lists 97156/97157 among its ABA codes, so confirm whether a request is needed.' },
    ],
  },

  'molina-healthcare-new-mexico': {
    slug: 'molina-healthcare-new-mexico',
    assessmentPA: {
      value: 'Not published — Molina has no New Mexico ABA code-level PA list; the state baseline (97151/97152/0362T marked "Prior Auth: NO") should govern via the shared Turquoise Care Level of Care Guidelines. Run a code-level check in Availity Essentials and keep the answer in writing',
      status: 'unverified',
      cites: [
        { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (MCO rate floor)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
      ],
      verifyVia: 'Molina Healthcare of New Mexico\'s Medicaid prior-authorization code list — not published publicly and molinahealthcare.com 403s to automated retrieval. Run the ABA codes through Availity Essentials and keep the dated result, or request the PA code matrix via carelu.com/sources. The state floor (LOD #53: 97151/97152/0362T ‘Prior Auth: NO’) is the fallback.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Not published at code level — the state baseline puts PA on 97153; Molina mandates electronic PA submission through Availity Essentials as its primary channel',
      status: 'unverified',
      cites: [
        { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (MCO rate floor)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
      ],
      verifyVia: 'Molina Healthcare of New Mexico\'s Medicaid prior-authorization code list, via Availity Essentials (its mandated PA channel) or carelu.com/sources. The state floor puts PA on 97153 only; Molina publishes no New Mexico ABA code-level list of its own.',
      blocker: 'document',
    },
    family: 'molina',
    cardDesc: 'New to NM 7/2024; PA via Availity Essentials; no published ABA policy — verify in portal.',
    dxRequired: {
      value: 'State rule — ASD dx within 3 years, or the documented at-risk-for-ASD pathway (NMAC 8.321.2.13)',
      status: 'verified',
      cites: [
        { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
      ],
    },
    payer: 'Molina Healthcare of New Mexico (Turquoise Care)',
    state: 'NM', kind: 'medicaid-mco', parent: 'New Mexico Medicaid (Turquoise Care)',
    pill: 'Payer Guide · Molina Healthcare (NM)',
    h1: 'Molina Healthcare of New Mexico ABA coverage (Turquoise Care MCO).',
    metaTitle: 'Molina Healthcare of New Mexico (Turquoise Care) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Molina Healthcare administers New Mexico Medicaid ABA under Turquoise Care — the July 2024 market entry, mandatory electronic PA submission through Availity Essentials, the state-criteria baseline and LOD #53 rate floor, and the ABA policy gaps to verify in the portal.',
    intro: [
      'Molina Healthcare is new to New Mexico: it entered with the Turquoise Care launch on July 1, 2024 (alongside UnitedHealthcare, as Western Sky/Centene exited). As a Turquoise Care MCO it is bound by the shared Behavioral Health Level of Care Guidelines and the LOD #53 rate floor — but unlike the other three plans, Molina has published no New Mexico-specific ABA clinical policy or code-level PA list we could verify. The honest operating posture: assume the state baseline clinically, submit PAs electronically through Availity Essentials as Molina requires, and confirm ABA code-level requirements in the portal before the first request.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Turquoise Care MCO — entered New Mexico 7/1/2024' },
      { label: 'Clinical rules', value: 'State baseline (shared Turquoise Care LOC guidelines); no distinct ABA policy published' },
      { label: 'PA submission', value: 'Electronic, via Availity Essentials — Molina\'s mandated primary channel' },
      { label: 'ABA code-level PA list', value: 'Not published — verify 97151/97153 handling in Availity before submitting' },
      { label: 'Rates', value: 'Must pay at least the state FFS ABA fee schedule (LOD #53)' },
    ],
    sections: [
      {
        h2: 'What\'s verified — and what to check in the portal',
        body: [
          'Verified: Molina is a Turquoise Care MCO bound by the state\'s ABA criteria and the LOD #53 rate floor, its provider manual requires electronic PA submission, and Availity Essentials is the mandated primary channel (a contract-compliance item, not a preference). Not verified: any Molina-specific ABA clinical policy, PA form, or code-level PA list for New Mexico — we found none published. That gap cuts both ways: the state baseline (no PA on 97151, PA on 97153, the under-20-hrs quirk) should govern via the shared Level of Care Guidelines, but until Molina publishes its ABA mechanics, run a code-level PA check in Availity for each new case and get the answer in writing. As the newest plan alongside UHC, expect member churn from the Western Sky exit — verify plan identity on any card that predates July 2024.',
        ],
        cites: [
          { title: 'Molina Healthcare of New Mexico Provider Manual (Medicaid 2025)', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/NM_2024/Medicaid/communications/MCAIDNM-Provider-Manual-2025-EN-508.pdf' },
          { title: 'Molina NM Medicaid Authorizations page', url: 'https://www.molinahealthcare.com/providers/nm/medicaid/resource/priorauth.aspx' },
        ],
      },
      {
        h2: 'The state floor still holds',
        body: [
          'Whatever Molina\'s internal mechanics turn out to be, two things are anchored at the state level and enforceable: the clinical criteria (NMAC 8.321.2.13 and Supplement 24-13 — the ASD-or-at-risk eligibility, adult benefit, stage model, and authorization cadence) and the rates. Letter of Direction #53 directs every Turquoise Care MCO to pay providers no less than the Medicaid FFS ABA fee schedule, retroactive to 1/1/2025, and it binds sub-vendors too. If a Molina contract or remittance comes in under the published schedule, LOD #53 is the citation to raise.',
        ],
        cites: [
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (MCO rate floor)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
          { title: 'MAD Supplement 24-13 — ABA Guidance (state criteria)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
      },
      {
        h2: 'Does Molina New Mexico (Turquoise Care) require treatment-plan goals in a set format, such as by DSM-5 criteria?',
        body: [
          'Molina\'s Turquoise Care manual restates the state ABA criteria rather than adding a goal template. The most recent edition we could open is the 2024 edition (last updated May 2024), served from Molina\'s own media path; the 2025 manual URL now returns 404. Its admission criteria require "a reasonable expectation that ABA services will result in measurable improvement in the acquisition of functional, adaptive skills, and/or the reduction of non-functional, maladaptive behavior," and continued authorization rests on quantitative data from the ABA provider. It sets no DSM-5 goal structure.',
          'The state standard applies to every Turquoise Care MCO. MAD Supplement 24-13 (9/17/2024) is the state\'s ABA guidance. After the 97151 assessment, the BA "must select goals for intervention and determine how these goals will be measured." Goal development covers a list of skill areas: "adaptive and self-care skills, attending and social referencing, cognitive functioning, community participation, coping and tolerance skills, emotional development, family relationships, language and communication, play and leisure skills, pre-academic skills, self-advocacy and independence, self-management, social relationships, and vocational skills." Baseline performance should be measured and "treatment goals should be developed for each critical domain and specified in terms that are observable and measurable" (3.14.3). Targets are prioritized by risk to safety, independence and health (3.14.2). The required treatment-plan elements (3.19.1) include a Family Set goal, baseline data on each target behavior/symptom, interventions with approximate units per target, goals with objective progress measures for the authorization period, and measurable discharge criteria. The domains are developmental skill areas, not DSM-5 criteria. DSM or ICD is used for eligibility, and the ASD support level (Level 2/3) informs dosage. 8.321.2.13 NMAC makes the BA responsible for "selection and measurement of goals."',
        ],
        cites: [
          { title: 'Molina Healthcare of New Mexico Turquoise Care Provider Manual (2024 edition, last updated May 2024)', url: 'https://medicare.centralhealthplan.com/-/media/Molina/PublicWebsite/PDF/Providers/NM_2024/Medicaid/Provider-Manual.pdf' },
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
          { title: '8.321.2.13 NMAC — Applied Behavior Analysis (srca.nm.gov)', url: 'https://www.srca.nm.gov/parts/title08/08.321.0002.html' },
        ],
      },
      {
        h2: 'Does Molina New Mexico (Turquoise Care) require parent training, and how many hours?',
        body: [
          'Molina\'s 2024 Turquoise Care manual makes caregiver participation an admission criterion: "The eligible Member\'s caregivers are able to participate and commit meaningfully to ABA interventions and activities to be conducted outside the formal treatment environment." It lists "Family/caregiver is unable to participate in the treatment plan" among the exclusion criteria. It sets no hours of its own.',
          'The state standard, which applies to every Turquoise Care MCO: Supplement 24-13 says "Every Treatment Plan must include ample units of ABA Stage 3 97156 and 97157" (3.17.1(C)). Every plan must "Include a goal of working with the Family Set" and be "Family Set-focused... with a focus on family engagement, training, and support" (3.19.1). If family members cannot attend in person, the BA must offer alternatives such as telemedicine. 97156 needs no prior authorization, with a "Maximum number of units per 97156 for entire Family Set: thirty-two 15-minute units per week," billed once for the whole Family Set. The CMS Medicaid MUE limits 97156 to sixteen 15-minute units per day, and 97157 (also no PA) to "up to sixteen 15-minute units or four hours per day." Adult recipients may receive up to thirty-two units of either code when medically warranted. Family Sets may start 97156/97157 once the recipient\'s assessment is scheduled. If the family cannot attend at the agreed level, "inadequate family participation" is a listed reason for poor response, and the BA must offer alternatives.',
        ],
        cites: [
          { title: 'Molina Healthcare of New Mexico Turquoise Care Provider Manual (2024 edition, last updated May 2024)', url: 'https://medicare.centralhealthplan.com/-/media/Molina/PublicWebsite/PDF/Providers/NM_2024/Medicaid/Provider-Manual.pdf' },
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Availity Essentials access', desc: 'Molina mandates electronic PA submission — confirm your organization\'s Availity registration covers Molina NM before the first case.' },
      { title: 'Code-level PA answers, in writing', desc: 'No published ABA PA list — run 97151/97153/0373T through Availity\'s auth-check and save the response per case.' },
      { title: 'Diagnosis or at-risk documentation', desc: 'State rule: ASD dx within 3 years of referral, or the at-risk pathway documentation.' },
      { title: 'Plan identity', desc: 'Molina is new as of 7/2024 — cards or records referencing Western Sky/Centene are stale; verify current enrollment.' },
    ],
    sources: [
      { title: 'Molina Healthcare of New Mexico Provider Manual (Medicaid 2025)', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/NM_2024/Medicaid/communications/MCAIDNM-Provider-Manual-2025-EN-508.pdf' },
      { title: 'Molina NM Medicaid Authorizations page', url: 'https://www.molinahealthcare.com/providers/nm/medicaid/resource/priorauth.aspx' },
      { title: 'MAD Supplement 24-13 — ABA Guidance (state criteria)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
      { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (MCO rate floor)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
      { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
      { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
      { title: 'Molina Healthcare of New Mexico Turquoise Care Provider Manual (2024 edition, last updated May 2024)', url: 'https://medicare.centralhealthplan.com/-/media/Molina/PublicWebsite/PDF/Providers/NM_2024/Medicaid/Provider-Manual.pdf' },
      { title: '8.321.2.13 NMAC — Applied Behavior Analysis (srca.nm.gov)', url: 'https://www.srca.nm.gov/parts/title08/08.321.0002.html' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the New Mexico Medicaid rule: NMAC 8.321.2.13 imposes no upper age limit and covers Medicaid-enrolled adults, with under-21s served through EPSDT and the at-risk pathway bounded at 12–36 months. One drafting trap: the shared Turquoise Care Level of Care Guidelines (July 2024) describe ABA for members 12 months up to 21 years, because the adult expansion arrived later in NMAC 8.321.2.13 (12/10/2024) and Supplement 24-13 — cite those, not the LOC document, on an adult request.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      dxRecency: {
        value: 'Follows the New Mexico Medicaid rule: a presumptive ASD diagnosis from a licensed practitioner within scope must have been received within three years of the referral to stage two or three; a recipient who already carries an ASD diagnosis needs no re-evaluation but does need an ISP and a medical-necessity determination; and the at-risk pathway requires no diagnosis at all.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'Follows the New Mexico Medicaid rule: an approved Autism Evaluation Provider confirms the presence of or risk for ASD through a comprehensive diagnostic, targeted or ASD risk evaluation, or the recipient is referred on a presumptive diagnosis from any licensed practitioner whose scope of practice allows an ASD diagnosis, received within three years of referral.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'Follows the New Mexico Medicaid rule, which names none: NMAC 8.321.2.13 requires the diagnosis be made against the latest DSM or ICD and the at-risk criteria be measured by standardized assessments, without naming instruments. No plan-specific instrument list was found for this MCO either.',
        status: 'unverified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
        verifyVia: 'MAD Behavioral Health Policy and Billing Manual / Supplement 24-13 — hca.nm.gov blocked automated retrieval this cycle (CloudFront geo-block), so pull the MAD Behavioral Health Policy and Billing Manual and Supplement 24-13 from the HCA ABA provider page by hand, or ask the MAD ABA Manager.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Follows the New Mexico Medicaid rule — Autism Evaluation Provider evaluation, ISP and referral to an approved ABA provider agency, with the ISP and evaluation accompanying the stage-three PA request. Molina publishes no New Mexico-specific ABA clinical policy, PA form or code-level PA list, and its provider manual requires electronic prior authorization submission through Availity Essentials as the mandated primary channel — run a code-level PA check there for each new case and keep the answer in writing.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
          { title: 'Molina Healthcare of New Mexico Provider Manual (Medicaid 2025)', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/NM_2024/Medicaid/communications/MCAIDNM-Provider-Manual-2025-EN-508.pdf' },
        ],
      },
      telehealth: {
        value: 'No verified rule. NMAC 8.321.2.13 carries no telehealth provision for ABA and the shared Turquoise Care Level of Care Guidelines set none for ABA Stage 3, and no plan-specific ABA telehealth policy was found for this MCO.',
        status: 'unverified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
        verifyVia: 'The plan’s provider portal or behavioral health UM line, plus the MAD Behavioral Health Policy and Billing Manual — hca.nm.gov blocked automated retrieval this cycle (CloudFront geo-block), so pull the MAD Behavioral Health Policy and Billing Manual and Supplement 24-13 from the HCA ABA provider page by hand, or ask the MAD ABA Manager.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Molina\u2019s manual publishes no day count of its own: it decides \u201cas promptly as the Member\u2019s health requires and no later than contractual and regulatory requirements\u201d, expedited when a standard timeframe \u201ccould jeopardize a Member\u2019s life or health\u201d. So its HCA contract governs: it requires the plan to \u201cadjudicate standard prior authorization requests within seven (7) Business Days after receipt of all necessary and relevant documentation\u201d, and requests are \u201cdeemed granted for determinations not made within the seven (7) Business Day turn-around time\u201d (extension up to 14 calendar days on request or with justification); expedited decisions come \u201cno later than twenty-four (24) hours after the receipt of all necessary and relevant documentation\u201d, also deemed granted if missed. Federal floor on top: for rating periods that start on or after January 1, 2026, 42 CFR 438.210(d) caps standard decisions at \u201c7 calendar days after receiving the request for service\u201d (extendable up to 14 more calendar days), and expedited at 72 hours. The contract binds the plan to \u201cthe most rigorous standards\u201d of the NM Prior Authorization Act, NCQA, HCA regulation or 438.210(d), so plan against 7 calendar days from receipt and the 24-hour state expedited clock. Reauthorization: Supplement 24-13 sets no day count, only that the ABA Treatment Plan Update and Progress Report \u201cmust be prepared and submitted to the MCO or TPA prior to the end of the recipient\u2019s Prior Authorization period\u201d.',
        status: 'verified',
        cites: [{ title: 'Molina Healthcare of New Mexico Provider Manual (Medicaid 2025)', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/NM_2024/Medicaid/communications/MCAIDNM-Provider-Manual-2025-EN-508.pdf' }, { title: 'Turquoise Care Medicaid Managed Care Services Agreement \u2014 Molina, Amendment 5 (signed 12/2025), \u00a7\u00a7 4.5.19.8, 4.19.11', url: 'https://www.hca.nm.gov/wp-content/uploads/TCMHC_24-630-8000-0032_CA5_Signed.pdf' }, { title: '42 CFR 438.210(d) \u2014 Medicaid managed care authorization timeframes', url: 'https://www.ecfr.gov/current/title-42/section-438.210' }, { title: 'MAD Supplement 24-13 \u2014 Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' }],
      },
      coordinationOfBenefits: {
        value:
          'Molina\u2019s manual: \u201cMedicaid is always the payer of last resort\u201d; \u201cIf third-party liability can be established, Providers must bill the primary payer and submit a primary explanation of benefits (EOB) to Molina for secondary claim processing\u201d, reimbursed \u201cbased on the state regulatory COB methodology\u201d. Timely filing for a secondary claim: \u201cOther carrier\u2019s EOB when Molina is the secondary payer\u201d \u2014 one year from the date of service. Molina \u201cwill pay claims for prenatal care and preventive pediatric care and then\u201d seek reimbursement from third parties. The HCA contract makes Medicaid \u201cthe payer of last resort\u201d and adds the trap: the plan \u201cshall deny payment on a Claim that has been denied by a third-party payer when the reason for denial is the Provider\u2019s or Member\u2019s failure to follow prescribed procedures, including but not limited to failure to obtain prior authorization\u201d \u2014 so secure the commercial plan\u2019s ABA authorization first. The same contract says \u201cClaims for EPSDT shall be paid at the time presented for payment by the Provider and the CONTRACTOR shall bill the responsible third party\u201d; whether an ABA claim is handled under that EPSDT pay-and-chase exception is not spelled out, so confirm with the plan before skipping the primary. TRICARE also pays ahead of Medicaid: its own secondary-payer rule exempts \u201ca plan administered under title XIX\u201d. The manual does not say whether Molina\u2019s own ABA prior authorization is required while it is secondary \u2014 confirm with Molina UM.',
        status: 'verified',
        cites: [{ title: 'Molina Healthcare of New Mexico Provider Manual (Medicaid 2025)', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/NM_2024/Medicaid/communications/MCAIDNM-Provider-Manual-2025-EN-508.pdf' }, { title: 'Turquoise Care Medicaid Managed Care Services Agreement \u2014 Molina, Amendment 5 (signed 12/2025), \u00a7\u00a7 4.5.19.8, 4.19.11', url: 'https://www.hca.nm.gov/wp-content/uploads/TCMHC_24-630-8000-0032_CA5_Signed.pdf' }, { title: '8.302.3 NMAC \u2014 Third Party Liability Provider Responsibilities', url: 'https://www.srca.nm.gov/parts/title08/08.302.0003.html' }, { title: '10 U.S.C. 1079(i)(1) \u2014 TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' }],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the New Mexico Medicaid rule: every stage-three service requires clinical management, a BCaBA or technician implementing the plan requires case supervision from their BA or supervising BAA, and prior authorization is triggered where more than two hours of case supervision, or two hours of clinical management, per 10 hours of intervention is requested. Certification-maintenance supervision is not MAD-reimbursable.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not resolved. NMAC publishes no same-clock-time billing rule for ABA and defers to the MAD Behavioral Health Policy and Billing Manual; no plan-specific concurrent-billing rule was found for this MCO.',
        status: 'unverified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
        verifyVia: 'The plan’s provider portal or claims line, plus the MAD Behavioral Health Policy and Billing Manual — hca.nm.gov blocked automated retrieval this cycle (CloudFront geo-block), so pull the MAD Behavioral Health Policy and Billing Manual and Supplement 24-13 from the HCA ABA provider page by hand, or ask the MAD ABA Manager.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Follows the New Mexico Medicaid rule: no per-day unit ceiling, with authorization-gated intensity thresholds instead — including the inverted quirk that comprehensive treatment averaging under 20 hours a week requires prior authorization — and PA on supervision or clinical management above two hours per 10 hours of stage-three service. No plan-specific hour caps were found for this MCO.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      noteSignature: {
        value: 'Not resolved at the state level: NMAC makes the supervising behavior analyst responsible for treatment plan formulation and documentation but defers session-note mechanics to the MAD Behavioral Health Policy and Billing Manual, and no plan-specific documentation standard was found for this MCO.',
        status: 'unverified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
        verifyVia: 'MAD Behavioral Health Policy and Billing Manual (ABA documentation requirements) — hca.nm.gov blocked automated retrieval this cycle (CloudFront geo-block), so pull the MAD Behavioral Health Policy and Billing Manual and Supplement 24-13 from the HCA ABA provider page by hand, or ask the MAD ABA Manager.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Follows the New Mexico Medicaid rule: school-setting activities with the potential to supplant educational services are excluded; a residential facility that is not itself an ABA provider must contract a MAD-enrolled ABA provider to render on site; treatment foster care is not treated as out-of-home placement; and out-of-home placement is otherwise an exclusion under the shared Turquoise Care Level of Care Guidelines apart from time-limited transition services.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Follows the New Mexico Medicaid rule: reimbursement goes to the MAD-enrolled ABA provider, behavior analysts enrol as Provider Type 445 / Specialty 099 and technicians as Provider Type 430 / Specialty 098 on the MAD-877 and MAD-878 attestations, and every practitioner must clear a New Mexico criminal background registry check before rendering. Letter of Direction #53 makes the state fee-for-service ABA fee schedule the contractual minimum this MCO and its sub-vendors must pay.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Molina Healthcare of New Mexico cover ABA?', a: 'Yes — as a Turquoise Care MCO it administers the state ABA benefit under the shared Level of Care Guidelines and NMAC criteria. Molina has published no NM-specific ABA policy, so verify code-level PA requirements in Availity Essentials.' },
      { q: 'How do I submit an ABA prior authorization to Molina NM?', a: 'Electronically through Availity Essentials — Molina\'s mandated primary submission channel. Since no ABA-specific PA list is published, confirm which codes require authorization in the portal and keep the answer on file.' },
      { q: 'What does Molina pay for ABA in New Mexico?', a: 'At least the state FFS ABA fee schedule — LOD #53 makes the published rates a minimum for all Turquoise Care MCOs and their sub-vendors, retroactive to January 1, 2025.' },
      { q: 'Does Molina New Mexico require ABA goals to be organized by DSM-5 criteria?', a: 'No DSM-5 template. Molina follows the state standard — measurable goals for each critical developmental domain (Supplement 24-13) — and wants measurable skill gains or reductions in maladaptive behavior.' },
      { q: 'How much parent training does Molina New Mexico expect?', a: 'Molina requires caregivers able to "participate and commit meaningfully" to ABA; the hours follow the state rule — "ample units" of 97156/97157 in every plan, with 97156 up to 32 units per week without PA.' },
    ],
  },

  'unitedhealthcare-community-plan-new-mexico': {
    slug: 'unitedhealthcare-community-plan-new-mexico',
    family: 'unitedhealthcare',
    cardDesc: 'Optum-run ABA; PA only on 97153 & 0373T; Provider Express; 6-month claim deadline.',
    assessmentPA: {
      value: 'Not required — QRG: "All autism services do not require prior authorization with the exception of 97153 & 0373T"',
      status: 'verified',
      cites: [
        { title: 'NM Turquoise Care ABA Network Quick Reference Guide (BH0000747_12162024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/NMTurquoiseCareABAQRG.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required only for 97153 and 0373T — NM Uniform PA Form via Provider Express (One Healthcare ID) or fax 1-888-541-6691',
      status: 'verified',
      cites: [
        { title: 'NM Turquoise Care ABA Network Quick Reference Guide (BH0000747_12162024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/NMTurquoiseCareABAQRG.pdf' },
      ],
    },
    dxRequired: {
      value: 'State rule — ASD dx within 3 years, or the documented at-risk-for-ASD pathway (NMAC 8.321.2.13)',
      status: 'verified',
      cites: [
        { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
      ],
    },
    payer: 'UnitedHealthcare Community Plan of New Mexico (Turquoise Care)',
    state: 'NM', kind: 'medicaid-mco', parent: 'New Mexico Medicaid (Turquoise Care)',
    pill: 'Payer Guide · UHC Community Plan (NM)',
    h1: 'UnitedHealthcare Community Plan of New Mexico ABA coverage (Turquoise Care MCO).',
    metaTitle: 'UHC Community Plan New Mexico (Turquoise Care) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan administers New Mexico Medicaid ABA — Optum\'s dedicated Turquoise Care ABA program, PA carved down to just 97153 and 0373T, Provider Express submission, the 6-month claims deadline, and the NM Uniform Prior Authorization Form.',
    intro: [
      'UnitedHealthcare Community Plan entered New Mexico with the Turquoise Care launch on July 1, 2024, and runs ABA through United Behavioral Health d/b/a Optum — the only NM MCO with a dedicated, published state ABA program: a Provider Express program page, a New Mexico Quick Reference Guide, an NM clinical policy, and provider orientation training. Operationally it has the narrowest PA surface of any New Mexico payer: per the QRG, "All autism services do not require prior authorization with the exception of 97153 & 0373T." Clinically it defers to the state\'s stage model; the plumbing — Optum network, Provider Express, its own fax and claims routing — is distinct.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Turquoise Care MCO — ABA administered by Optum (United Behavioral Health)' },
      { label: 'Clinical rules', value: 'State stage model (NMAC 8.321.2 / Supplement 24-13); NM policy on Provider Express' },
      { label: 'Prior auth', value: 'ONLY 97153 and 0373T — everything else, assessment included, is PA-free' },
      { label: 'Submission', value: 'Provider Express Auth tab (One Healthcare ID) or fax 1-888-541-6691; NM Uniform PA Form' },
      { label: 'Claims', value: 'uhcprovider.com, Payer ID 87726 (ERA 86047); filed within 6 months of DOS, CMS-1500' },
      { label: 'Rates', value: 'Must pay at least the state FFS ABA fee schedule (LOD #53)' },
    ],
    sections: [
      {
        h2: 'The narrowest PA surface in New Mexico',
        body: [
          'The Quick Reference Guide is unambiguous: all autism services are PA-free except 97153 (adaptive behavior treatment by protocol) and 0373T. That means the 97151 assessment, 97155 protocol modification, and 97156 family training all proceed without authorization — so the only PA workflow to build for UHC members is the treatment request. It goes on the New Mexico Uniform Prior Authorization Form, submitted online through the Provider Express Auth tab (a 5-step flow behind a One Healthcare ID) or by fax to 1-888-541-6691. Clinical criteria track the state program — the ASD-or-at-risk eligibility, three-stage model, and authorization cadence in the New Mexico Medicaid guide — with the NM clinical policy posted under Provider Express > ABA Information > State Medicaid ABA Programs > New Mexico.',
        ],
        cites: [
          { title: 'NM Turquoise Care ABA Network Quick Reference Guide (BH0000747_12162024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/NMTurquoiseCareABAQRG.pdf' },
          { title: 'Optum Provider Express — New Mexico ABA Program', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2/abaNM.html' },
        ],
      },
      {
        h2: 'Claims plumbing and deadlines',
        body: [
          'ABA runs on Optum\'s dedicated network, so credentialing and case questions live on Provider Express, not the standard UHC medical channels — tech support and chat at 1-866-209-9320, claim status at 1-888-702-2202. All autism services bill on a CMS-1500 to Payer ID 87726 (ERA 86047) via uhcprovider.com, with paper claims to Optum, PO Box 31348, Salt Lake City, UT 84131-0348. The deadline with teeth: claims must be filed within 6 months of the date of service — comfortable for clean workflows, unforgiving for backlogged ones. On rates, LOD #53 applies to UHC like every Turquoise Care MCO: the state FFS ABA fee schedule is the contractual minimum.',
        ],
        cites: [
          { title: 'NM Turquoise Care ABA Network Quick Reference Guide (BH0000747_12162024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/NMTurquoiseCareABAQRG.pdf' },
        ],
      },
      {
        h2: 'Does UnitedHealthcare Community Plan (Turquoise Care) require treatment-plan goals in a set format, such as by DSM-5 criteria?',
        body: [
          'UnitedHealthcare Community Plan publishes no ABA goal format of its own for New Mexico. Its 2026 care provider manual lists ABA only among covered behavioral health services, and Optum\'s Turquoise Care ABA quick reference guide covers network and billing logistics, not treatment-plan content. The state standard below governs.',
          'The state standard applies to every Turquoise Care MCO. MAD Supplement 24-13 (9/17/2024) is the state\'s ABA guidance. After the 97151 assessment, the BA "must select goals for intervention and determine how these goals will be measured." Goal development covers a list of skill areas: "adaptive and self-care skills, attending and social referencing, cognitive functioning, community participation, coping and tolerance skills, emotional development, family relationships, language and communication, play and leisure skills, pre-academic skills, self-advocacy and independence, self-management, social relationships, and vocational skills." Baseline performance should be measured and "treatment goals should be developed for each critical domain and specified in terms that are observable and measurable" (3.14.3). Targets are prioritized by risk to safety, independence and health (3.14.2). The required treatment-plan elements (3.19.1) include a Family Set goal, baseline data on each target behavior/symptom, interventions with approximate units per target, goals with objective progress measures for the authorization period, and measurable discharge criteria. The domains are developmental skill areas, not DSM-5 criteria. DSM or ICD is used for eligibility, and the ASD support level (Level 2/3) informs dosage. 8.321.2.13 NMAC makes the BA responsible for "selection and measurement of goals."',
        ],
        cites: [
          { title: 'UnitedHealthcare Community Plan of New Mexico Care Provider Manual (2026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/NM-UHCCP-Provider-Manual.pdf' },
          { title: 'NM Turquoise Care ABA Network Quick Reference Guide (BH0000747_12162024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/NMTurquoiseCareABAQRG.pdf' },
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
          { title: '8.321.2.13 NMAC — Applied Behavior Analysis (srca.nm.gov)', url: 'https://www.srca.nm.gov/parts/title08/08.321.0002.html' },
        ],
      },
      {
        h2: 'Does UnitedHealthcare Community Plan (Turquoise Care) require parent training, and how many hours?',
        body: [
          'UnitedHealthcare Community Plan publishes no parent-training hours of its own for New Mexico (2026 care provider manual; Optum Turquoise Care ABA quick reference guide). The state rule applies.',
          'The state standard, which applies to every Turquoise Care MCO: Supplement 24-13 says "Every Treatment Plan must include ample units of ABA Stage 3 97156 and 97157" (3.17.1(C)). Every plan must "Include a goal of working with the Family Set" and be "Family Set-focused... with a focus on family engagement, training, and support" (3.19.1). If family members cannot attend in person, the BA must offer alternatives such as telemedicine. 97156 needs no prior authorization, with a "Maximum number of units per 97156 for entire Family Set: thirty-two 15-minute units per week," billed once for the whole Family Set. The CMS Medicaid MUE limits 97156 to sixteen 15-minute units per day, and 97157 (also no PA) to "up to sixteen 15-minute units or four hours per day." Adult recipients may receive up to thirty-two units of either code when medically warranted. Family Sets may start 97156/97157 once the recipient\'s assessment is scheduled. If the family cannot attend at the agreed level, "inadequate family participation" is a listed reason for poor response, and the BA must offer alternatives.',
        ],
        cites: [
          { title: 'UnitedHealthcare Community Plan of New Mexico Care Provider Manual (2026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/NM-UHCCP-Provider-Manual.pdf' },
          { title: 'NM Turquoise Care ABA Network Quick Reference Guide (BH0000747_12162024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/NMTurquoiseCareABAQRG.pdf' },
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Diagnosis or at-risk documentation', desc: 'State rule: ASD dx within 3 years of referral, or the at-risk pathway — then book the assessment; no PA on 97151.' },
      { title: 'One Healthcare ID access', desc: 'The 97153/0373T treatment auth submits through the Provider Express Auth tab — confirm portal access before the first case.' },
      { title: 'Planned weekly intensity', desc: 'The state\'s under-20-hrs/week comprehensive-treatment PA quirk applies within the state criteria — plan hours deliberately.' },
      { title: 'Clean-claims cadence', desc: 'The 6-months-from-DOS filing deadline makes billing hygiene an intake-to-revenue concern, not just a back-office one.' },
    ],
    sources: [
      { title: 'Optum Provider Express — New Mexico ABA Program', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2/abaNM.html' },
      { title: 'NM Turquoise Care ABA Network Quick Reference Guide (BH0000747_12162024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/NMTurquoiseCareABAQRG.pdf' },
      { title: 'MAD Supplement 24-13 — ABA Guidance (state criteria)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
      { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (MCO rate floor)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
      { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
      { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
      { title: '8.310.2.12(M) NMAC — Telehealth services (srca.nm.gov, amended 1/1/2025)', url: 'https://www.srca.nm.gov/parts/title08/08.310.0002.html' },
      { title: 'UnitedHealthcare Community Plan of New Mexico Care Provider Manual (2026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/NM-UHCCP-Provider-Manual.pdf' },
      { title: '8.321.2.13 NMAC — Applied Behavior Analysis (srca.nm.gov)', url: 'https://www.srca.nm.gov/parts/title08/08.321.0002.html' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the New Mexico Medicaid rule: NMAC 8.321.2.13 imposes no upper age limit and covers Medicaid-enrolled adults, with under-21s served through EPSDT and the at-risk pathway bounded at 12–36 months. One drafting trap: the shared Turquoise Care Level of Care Guidelines (July 2024) describe ABA for members 12 months up to 21 years, because the adult expansion arrived later in NMAC 8.321.2.13 (12/10/2024) and Supplement 24-13 — cite those, not the LOC document, on an adult request.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      dxRecency: {
        value: 'Follows the New Mexico Medicaid rule: a presumptive ASD diagnosis from a licensed practitioner within scope must have been received within three years of the referral to stage two or three; a recipient who already carries an ASD diagnosis needs no re-evaluation but does need an ISP and a medical-necessity determination; and the at-risk pathway requires no diagnosis at all.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'Follows the New Mexico Medicaid rule: an approved Autism Evaluation Provider confirms the presence of or risk for ASD through a comprehensive diagnostic, targeted or ASD risk evaluation, or the recipient is referred on a presumptive diagnosis from any licensed practitioner whose scope of practice allows an ASD diagnosis, received within three years of referral.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'Follows the New Mexico Medicaid rule, which names none: NMAC 8.321.2.13 requires the diagnosis be made against the latest DSM or ICD and the at-risk criteria be measured by standardized assessments, without naming instruments. No plan-specific instrument list was found for this MCO either.',
        status: 'unverified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
        verifyVia: 'MAD Behavioral Health Policy and Billing Manual / Supplement 24-13 — hca.nm.gov blocked automated retrieval this cycle (CloudFront geo-block), so pull the MAD Behavioral Health Policy and Billing Manual and Supplement 24-13 from the HCA ABA provider page by hand, or ask the MAD ABA Manager.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Follows the New Mexico Medicaid rule for the clinical gate (Autism Evaluation Provider evaluation, ISP, referral to an approved ABA provider agency). The authorization surface is the narrowest in the state: per the plan’s Turquoise Care ABA Quick Reference Guide, "All autism services do not require prior authorization with the exception of 97153 & 0373T" — so 97151, 97155 and 97156 proceed without authorization, and the only PA workflow to build is the treatment request, filed on the New Mexico Uniform Prior Authorization Form through the Provider Express Auth tab (One Healthcare ID) or by fax to 1-888-541-6691.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
          { title: 'NM Turquoise Care ABA Network Quick Reference Guide (BH0000747_12162024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/NMTurquoiseCareABAQRG.pdf' },
        ],
      },
      telehealth: {
        value: 'Follows the state rule — UnitedHealthcare Community Plan\'s own ABA documents checked this run (Optum\'s NM Turquoise Care ABA Quick Reference Guide and the shared Turquoise Care BH Level of Care Guidelines) publish no ABA-specific telehealth policy, so the HCA rule applies. One Optum billing rule does apply: since November 1, 2023 every Optum behavioral-health telehealth claim, Medicaid included, must carry POS 02 or POS 10; modifiers alone are not reimbursed. MAD Supplement 24-13 (section 3.2.1) says MAD "allows and encourages the utilization of telemedicine to deliver MAD ABA services," to bring home- and community-based ABA to rural and frontier areas, and points to 8.310.2 NMAC for the requirements: a HIPAA-compliant system with interactive audio and video in real time, with coverage "determined in a manner consistent with medicaid coverage for health care services provided through in person consultation." In-state BCBAs, BCaBAs, RBTs, BCATs and non-certified technicians need no telemedicine license; an out-of-state MD/DO diagnostician does. Supervision is expressly remote-capable: 97155 may be delivered through telemedicine when the BA directs the technician and the recipient by observing behavior or troubleshooting protocols (not when the BA joins in person), the recipient must be present, and the one-hour-per-20-hours minimum of 97155 still applies. Where an agency documents annually to the MCO or TPA that its transmission provider cannot support real-time video, store-and-forward can deliver up to 100% of direct 97155, with 30 to 60 extra minutes of 97155 added, but not for a non-certified technician. The assessment can be partly remote too: "A BA/Mentored BA bills Indirect 97151 when conducting interviews or discussing the Treatment Plan or Protocols with the Family Set delivered via telemedicine," and direct T1026 UD case supervision may happen onsite or be "delivered through telemedicine." The supplement names no POS code or modifier for ABA telemedicine, so confirm claim coding with the MCO or TPA.',
        status: 'verified',
        cites: [
          { title: 'MAD Supplement 24-13 — Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' },
          { title: '8.310.2.12(M) NMAC — Telehealth services (srca.nm.gov, amended 1/1/2025)', url: 'https://www.srca.nm.gov/parts/title08/08.310.0002.html' },
          { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'UnitedHealthcare Community Plan of New Mexico\u2019s manual: non-urgent pre-service \u201cWithin 7 business days after receipt of all necessary and relevant documentation\u201d; urgent/expedited \u201c24 hours after the receipt of all necessary and relevant documentation supporting the prior authorization request\u201d; retrospective within 30 calendar days of complete clinical information. That mirrors its HCA contract (deemed granted if missed). Federal floor on top: for rating periods that start on or after January 1, 2026, 42 CFR 438.210(d) caps standard decisions at \u201c7 calendar days after receiving the request for service\u201d (extendable up to 14 more calendar days), and expedited at 72 hours. The contract binds the plan to \u201cthe most rigorous standards\u201d of the NM Prior Authorization Act, NCQA, HCA regulation or 438.210(d), so plan against 7 calendar days from receipt and the 24-hour state expedited clock. Reauthorization: Supplement 24-13 sets no day count, only that the ABA Treatment Plan Update and Progress Report \u201cmust be prepared and submitted to the MCO or TPA prior to the end of the recipient\u2019s Prior Authorization period\u201d. The Optum NM ABA quick reference guide publishes no lead time.',
        status: 'verified',
        cites: [{ title: 'UnitedHealthcare Community Plan of New Mexico Care Provider Manual (2026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/NM-UHCCP-Provider-Manual.pdf' }, { title: 'Turquoise Care Medicaid Managed Care Services Agreement \u2014 UnitedHealthcare, Amendment 5 (signed 12/2025), \u00a7\u00a7 4.5.19.8, 4.19.11', url: 'https://www.hca.nm.gov/wp-content/uploads/TCUHC_24-630-8000-0030_CA5_Signed.pdf' }, { title: '42 CFR 438.210(d) \u2014 Medicaid managed care authorization timeframes', url: 'https://www.ecfr.gov/current/title-42/section-438.210' }, { title: 'MAD Supplement 24-13 \u2014 Applied Behavior Analysis (ABA) Guidance (9/17/2024)', url: 'https://www.hca.nm.gov/wp-content/uploads/24-13-Supplement-ABA-Guidance.pdf' }],
      },
      coordinationOfBenefits: {
        value:
          'UHC Community Plan NM\u2019s manual: \u201cUnitedHealthcare Community Plan is, by law, the payer of last resort for eligible members. Therefore, you must bill and obtain an EOB from any other insurance or health care coverage resource before billing UnitedHealthcare Community Plan\u201d, attaching a complete EOB that shows the paid amount or denial reason; third-party filing deadlines sit in your Agreement. The HCA contract makes Medicaid \u201cthe payer of last resort\u201d and adds the trap: the plan \u201cshall deny payment on a Claim that has been denied by a third-party payer when the reason for denial is the Provider\u2019s or Member\u2019s failure to follow prescribed procedures, including but not limited to failure to obtain prior authorization\u201d \u2014 so secure the commercial plan\u2019s ABA authorization first. The same contract says \u201cClaims for EPSDT shall be paid at the time presented for payment by the Provider and the CONTRACTOR shall bill the responsible third party\u201d; whether an ABA claim is handled under that EPSDT pay-and-chase exception is not spelled out, so confirm with the plan before skipping the primary. TRICARE also pays ahead of Medicaid: its own secondary-payer rule exempts \u201ca plan administered under title XIX\u201d. The manual does not say whether the plan\u2019s own ABA prior authorization (97153/0373T via Optum) is required while it is secondary \u2014 confirm with Optum.',
        status: 'verified',
        cites: [{ title: 'UnitedHealthcare Community Plan of New Mexico Care Provider Manual (2026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/NM-UHCCP-Provider-Manual.pdf' }, { title: 'Turquoise Care Medicaid Managed Care Services Agreement \u2014 UnitedHealthcare, Amendment 5 (signed 12/2025), \u00a7\u00a7 4.5.19.8, 4.19.11', url: 'https://www.hca.nm.gov/wp-content/uploads/TCUHC_24-630-8000-0030_CA5_Signed.pdf' }, { title: '8.302.3 NMAC \u2014 Third Party Liability Provider Responsibilities', url: 'https://www.srca.nm.gov/parts/title08/08.302.0003.html' }, { title: '10 U.S.C. 1079(i)(1) \u2014 TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' }],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the New Mexico Medicaid rule: every stage-three service requires clinical management, a BCaBA or technician implementing the plan requires case supervision from their BA or supervising BAA, and prior authorization is triggered where more than two hours of case supervision, or two hours of clinical management, per 10 hours of intervention is requested. Certification-maintenance supervision is not MAD-reimbursable.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not resolved. NMAC publishes no same-clock-time billing rule for ABA and defers to the MAD Behavioral Health Policy and Billing Manual; no plan-specific concurrent-billing rule was found for this MCO.',
        status: 'unverified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
        verifyVia: 'The plan’s provider portal or claims line, plus the MAD Behavioral Health Policy and Billing Manual — hca.nm.gov blocked automated retrieval this cycle (CloudFront geo-block), so pull the MAD Behavioral Health Policy and Billing Manual and Supplement 24-13 from the HCA ABA provider page by hand, or ask the MAD ABA Manager.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Follows the New Mexico Medicaid rule: no per-day unit ceiling, with authorization-gated intensity thresholds instead — including the inverted quirk that comprehensive treatment averaging under 20 hours a week requires prior authorization — and PA on supervision or clinical management above two hours per 10 hours of stage-three service. No plan-specific hour caps were found for this MCO.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      noteSignature: {
        value: 'Not resolved at the state level: NMAC makes the supervising behavior analyst responsible for treatment plan formulation and documentation but defers session-note mechanics to the MAD Behavioral Health Policy and Billing Manual, and no plan-specific documentation standard was found for this MCO.',
        status: 'unverified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
        verifyVia: 'MAD Behavioral Health Policy and Billing Manual (ABA documentation requirements) — hca.nm.gov blocked automated retrieval this cycle (CloudFront geo-block), so pull the MAD Behavioral Health Policy and Billing Manual and Supplement 24-13 from the HCA ABA provider page by hand, or ask the MAD ABA Manager.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Follows the New Mexico Medicaid rule: school-setting activities with the potential to supplant educational services are excluded; a residential facility that is not itself an ABA provider must contract a MAD-enrolled ABA provider to render on site; treatment foster care is not treated as out-of-home placement; and out-of-home placement is otherwise an exclusion under the shared Turquoise Care Level of Care Guidelines apart from time-limited transition services.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Follows the New Mexico Medicaid enrolment rules (Provider Type 445/099 for behavior analysts, 430/098 for technicians, MAD attestations and the criminal background registry check) with Optum’s claim plumbing on top: all autism provider services are billed on a Form CMS-1500, electronically to payer ID 87726 (ERA payer ID 86047) via uhcprovider.com, or on paper to Optum, PO Box 31348, Salt Lake City, UT 84131-0348. Submission must occur within 6 months of the date of service. Letter of Direction #53 still makes the state fee-for-service ABA fee schedule the contractual minimum.',
        status: 'verified',
        cites: [
          { title: 'NMAC 8.321.2.13 Applied Behavior Analysis (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/new-mexico/N-M-Admin-Code-SS-8.321.2.13' },
          { title: 'Turquoise Care BH Level of Care Guidelines (ABA Stage 3, defers to NMAC 8.321.2)', url: 'https://www.bcbsnm.com/turquoise-care/pdf/tc-bh-level-care-guidelines-nm.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
          { title: 'NM Turquoise Care ABA Network Quick Reference Guide (BH0000747_12162024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/NMTurquoiseCareABAQRG.pdf' },
          { title: 'Letter of Direction #53 — ABA Fee Schedule Rates (eff. 1/1/2025)', url: 'https://www.hca.nm.gov/wp-content/uploads/FInal-LOD-53-Applied-Behavioral-Analysis-ABA-Fee-Schedule-Rates.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of New Mexico cover ABA?', a: 'Yes — as a Turquoise Care MCO since July 1, 2024, with ABA administered by Optum through a dedicated New Mexico program on Provider Express, on the state\'s clinical criteria.' },
      { q: 'Which ABA codes need prior authorization with UHC in New Mexico?', a: 'Only 97153 and 0373T. Per the plan\'s Quick Reference Guide, all other autism services — including the 97151 assessment, 97155, and 97156 — require no prior authorization.' },
      { q: 'How do I submit the UHC NM treatment authorization?', a: 'On the New Mexico Uniform Prior Authorization Form, through the Provider Express Auth tab (One Healthcare ID, 5-step flow) or by fax to 1-888-541-6691.' },
      { q: 'What is the claims deadline for UHC NM ABA?', a: 'Six months from the date of service, on a CMS-1500 to Payer ID 87726 (ERA 86047), or on paper to Optum, PO Box 31348, Salt Lake City, UT 84131-0348.' },
      { q: 'Do ABA technicians need RBT certification for UnitedHealthcare Community Plan (New Mexico Medicaid)?', a: 'Follows the state rule. Not at the start. New Mexico Medicaid lets a non-certified behavior technician render ABA if they are 18 or older, have a high-school diploma, pass the New Mexico criminal background registry check, complete 4 hours of ASD training and at least 20 of the 40 RBT/BCAT training hours before serving, and then hold an RBT or BCAT certificate within their first six continuous months. If they miss that deadline they must stop until certified.' },
      { q: 'Can BCBA supervision (97155) be done by telehealth for UnitedHealthcare Community Plan members?', a: 'Yes, under the state rule in MAD Supplement 24-13: 97155 may be delivered by real-time telemedicine with the recipient present, and by store-and-forward only where the agency documents no real-time option.' },
      { q: 'Does UnitedHealthcare Community Plan require ABA goals to be organized by DSM-5 criteria in New Mexico?', a: 'It publishes no format of its own; the state standard (Supplement 24-13) applies — measurable goals for each critical developmental domain, prioritized by safety risk, not DSM-5 criteria.' },
      { q: 'How much parent training does UnitedHealthcare Community Plan expect in New Mexico?', a: 'No plan-specific figure; the state rule applies — every plan "must include ample units" of 97156/97157, with 97156 PA-free up to 32 units per week for the Family Set.' },
    ],
  },

  'aetna-new-mexico': {
    slug: 'aetna-new-mexico',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the NMSA § 59A-22-49 mandate layer.',
    assessmentPA: {
      value: 'Required — precertification (form GR-69017-4), per Aetna\'s behavioral health precertification list (eff. 8/1/2024) — CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      ],
    },
    treatmentPA: {
      value: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
      status: 'plan-dependent',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      ],
      verifyVia: 'The member\'s Aetna plan (benefits line on the card) — ask whether the group carries ABA precertification and what reauthorization interval it uses. The national behavioral-health precertification list carries ABA but the interval and any self-funded carve-out are set at group level.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes — ASD only (F84.0–F84.9); ABA for other diagnoses considered experimental',
      status: 'verified',
      cites: [
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      ],
    },
    payer: 'Aetna in New Mexico',
    state: 'NM', kind: 'commercial',
    pill: 'Payer Guide · Aetna · New Mexico',
    h1: 'Aetna ABA coverage in New Mexico: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in New Mexico: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for New Mexico families — the national clinical policy, prior authorization, the NMSA § 59A-22-49 mandate (no age limits, no dollar caps, exemptions), New Mexico\'s no-licensure landscape, and what intake should verify.',
    intro: [
      'For an intake team in New Mexico, an Aetna card means three layers at once: the carrier\'s national clinical policy, New Mexico\'s autism insurance mandate (NMSA 1978 § 59A-22-49), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'NMSA 1978 § 59A-22-49 (HMO parallel: § 59A-46-50)' },
      { label: 'Mandate age', value: 'No age limit — coverage can\'t be denied based on age (2019 HB 322)' },
      { label: 'Mandate caps', value: 'None — annual/lifetime dollar limits prohibited (2019 HB 322)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; limited-benefit policies' },
      { label: 'Licensure', value: 'None — no NM behavior-analyst license; BACB certification governs' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in New Mexico',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in New Mexico is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in New Mexico.',
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
        h2: 'The New Mexico mandate: what it guarantees (and doesn\'t)',
        body: [
          'New Mexico\'s mandate is one of the stronger ones in our directory. NMSA 1978 § 59A-22-49 (with parallel sections for HMOs and nonprofit health plans) requires any individual or group policy delivered, issued, or renewed in the state to cover ASD screening plus treatment — naming applied behavioral analysis alongside speech, occupational, and physical therapy, per a physician-prescribed treatment plan. Since 2019\'s HB 322, the old limits are gone: coverage "shall not be denied to an insured on the basis of the insured\'s age," and benefits "shall not be subject to annual or lifetime dollar limits" (the pre-2019 $36,000/year and $200,000 lifetime caps were repealed). The statute carries its own parity clause — cost-sharing no less favorable than for physical illness, no denial of services as "habilitative," and no refusing or terminating coverage because of an ASD diagnosis — with MHPAEA layered on top. What survives: usual medical-necessity and network provisions, an exclusion option for school-based IDEA services, exemptions for limited-benefit policies, and — the big one — self-funded ERISA plans, which sit outside the statute entirely.',
        ],
        cites: [
      { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw, current through 2024)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
      { title: 'Autism Speaks — New Mexico state-regulated coverage (2019 HB 322)', url: 'https://www.autismspeaks.org/new-mexico-state-regulated-insurance-coverage' },
        ],
      },
      {
        h2: 'No New Mexico-specific Aetna policy exists',
        body: [
          'We checked: Aetna publishes no New Mexico-specific ABA policy, form, or supplement — the national Clinical Policy Bulletins plus the state mandate is the whole picture, and Aetna runs no Medicaid plan in New Mexico. That\'s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, benefit limits) is where New Mexico-specific answers come from, not a carrier document.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        ],
      },
      {
        h2: 'Licensure & rates in New Mexico',
        body: [
          'New Mexico has no behavior analyst licensure law — BCBAs practice on BACB certification alone, with no state board at the Regulation & Licensing Department. (On the Medicaid side, the state adds an HCA practitioner attestation and background check, but that\'s a program requirement, not licensure.) On rates: Aetna does not publish commercial ABA fee schedules for New Mexico (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. New Mexico does give you an unusually good benchmark, though: the published Medicaid fee schedule under LOD #53 ($32.31 per 15-minute 97153 unit for a BCBA) is a public floor to negotiate up from.',
        ],
        cites: [
      { title: 'BACB — U.S. Licensure of Behavior Analysts (NM has no licensure law)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
        ],
      },
      {
        h2: 'Does Aetna require treatment-plan goals in a set format, such as by DSM-5 criteria?',
        body: [
          'Aetna sets the content of the plan, not a DSM-5 template. Its ABA Medical Necessity Guide (©2026) requires a DSM-5 ASD diagnosis and a treatment plan whose "specific identified target behaviors related to the condition" are "clearly defined: frequency, rate, symptom intensity or duration, or other objective measures of baseline levels are recorded, and quantifiable criteria for progress are established," with the intervention techniques, reinforcers, generalization strategies, and transition, titration and discharge criteria spelled out. Hours are sized from severity in three areas — maladaptive behavior, social communication and self-care — rather than from DSM criteria. Precertification form GR-69017-4 (7-26) asks for a "time-limited, individualized treatment plan" with "baseline, interim and current data for all goals." Neither document asks for goals to be grouped under DSM-5 criteria. New Mexico\'s mandate requires the treatment plan to include "the anticipated outcomes stated as goals," along with the diagnosis, proposed treatment by type, frequency and duration, update frequency and the treating physician\'s signature (NMSA § 59A-22-49(F)).',
        ],
        cites: [
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
          { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
        ],
      },
      {
        h2: 'Does Aetna require parent training, and how many hours?',
        body: [
          'Caregiver participation is a criterion, but Aetna publishes no hour minimum. The Medical Necessity Guide requires "engagement and commitment from parent(s) (or guardians) to participate in treatment to generalize gains," and says that, based on impairment and severity, additional authorization may be provided "for QHP protocol modification and direction at 1 to 2 hours per 10 hours of treatment by protocol, as well as authorization for caregiver training" — no caregiver-training amount is stated. Form GR-69017-4 asks you to request 97156 and 97157 in hours per week and to show that "Primary caregiver(s) have measurable goals that work to reinforce interventions and generalize gains." The approved caregiver-training hours are whatever the precertification letter grants.',
        ],
        cites: [
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date — Aetna\'s policy is ASD-only.' },
      { title: 'Physician-prescribed treatment plan', desc: 'The NM mandate keys coverage to a physician-prescribed plan — line up the prescriber early.' },
      { title: 'Age', desc: 'No mandate age limit in New Mexico — adult inquiries on fully-insured plans are viable, not edge cases.' },
    ],
    sources: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
      { title: 'NMSA § 59A-46-50 — HMO parallel section (Justia)', url: 'https://law.justia.com/codes/new-mexico/chapter-59a/article-46/section-59a-46-50/' },
      { title: 'Autism Speaks — New Mexico state-regulated coverage', url: 'https://www.autismspeaks.org/new-mexico-state-regulated-insurance-coverage' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
      { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national ABA policies set no coverage age cap. The ABA medical necessity guide describes typical rather than limiting parameters: comprehensive ABA at 10–25 hours a week is typical for ages 0–7 over 1–2 years, while focused ABA at 1–20 hours a week is listed for all ages over 1–4 years. Where the member’s benefit plan or a state mandate carries an age term, that governs. New Mexico is one of the stronger mandate states: since 2019’s HB 322 coverage "shall not be denied to an insured on the basis of the insured’s age" and benefits "shall not be subject to annual or lifetime dollar limits" on fully insured plans. Self-funded ERISA plans and limited-benefit policies are exempt, so plan funding type decides whether the no-age-limit rule binds.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw, current through 2024)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
        ],
        verifyVia: 'Live benefits verification on the member ID — establish fully insured vs. self-funded ERISA, then the plan’s own age and benefit terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Aetna puts no expiry on the ASD diagnosis itself, but it does run a 12-month clock on the functional evidence: medical necessity requires demonstration of functional impairment on a standardized scale of functioning in the past 12 months, at least one standard deviation below the population mean, or a significant risk of harm to self or others. Progress is then re-evaluated every six months.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'A DSM-5 diagnosis of Autism Spectrum Disorder (ICD-10 F84.0, F84.3–F84.9) obtained by an appropriate provider — the medical necessity guide names a licensed psychologist or psychiatrist, a physician, or another health care professional qualified to diagnose mental health conditions within their scope of practice. CPB 0648 separately lists the professionals appropriate to an ASD evaluation: board certified behavior analyst, developmental pediatrician, neurologist, occupational therapist, physical therapist, primary care provider, psychiatrist, psychologist, and speech-language pathologist and audiologist.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      diagnosticTools: {
        value: 'CPB 0648 names the diagnostic instruments behind an ASD diagnosis: ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale. The ABA medical necessity guide then requires a standardized measure of functioning administered within the past 12 months — it gives the Vineland Adaptive Behavior Scales 3, the Adaptive Behavior Assessment Scale, VB-MAPP and ABLLS as examples — with impairment at least one standard deviation below the population mean or representing a significant risk of harm.',
        status: 'verified',
        cites: [
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      referral: {
        value: 'Aetna’s national ABA policies require no physician referral, order or prescription — the only prescription requirement in the medical necessity guide sits in its Maryland exhibit under COMAR 31.10.39, which does not reach NM. What Aetna requires nationally is precertification: its participating-provider behavioral health precertification list names all ten ABA codes — 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T — and ABA precertification runs on form GR-69017-4 through Availity or the number on the member ID card. For a fully insured New Mexico plan the state mandate adds an ordering requirement the carrier policies do not: NMSA 1978 § 59A-22-49 keys coverage to a physician-prescribed treatment plan, so line up the prescriber early. Self-funded ERISA plans and limited-benefit policies sit outside the statute.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
          { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw, current through 2024)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
        ],
      },
      telehealth: {
        value:
          'Aetna\'s Telemedicine and Direct Patient Contact Payment Policy lists the ABA codes it pays by telehealth, by line of business. On commercial plans the eligible codes are 97151 (the assessment), 97153, 97155 (protocol modification, the code for BCBA direction of the technician), 97156 and 97157, billed with modifier GT, 95 or FR; 97152, 97154 and 97158 are checked for Medicare Advantage only. The posted policy shows a last review of June 2021, so treat the list as perishable. The behavioral health provider manual describes telemedicine (under a Teladoc heading) that Aetna Behavioral Health offers to all commercial fully insured members and to self-insured plan sponsors unless they opt out.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table: Commercial vs. Medicare columns; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' }, { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' }],
        verifyVia: 'Aetna provider services or Availity — confirm the payment policy is still current and that the member\'s plan carries a telehealth benefit before scheduling remote hours.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Turns on how the plan is funded. Fully insured New Mexico plans follow the Prior Authorization Act: \u201cPrior authorization shall be deemed granted for determinations not made within seven days\u201d; an expedited request, backed by the clinician\u2019s statement that delay could seriously jeopardize life, health or maximum function, is decided within 24 hours or deemed granted; and \u201cThe adjudication time line shall commence only when the health insurer receives all necessary and relevant documentation\u201d. OSI\u2019s rule (13.10.31 NMAC) requires the carrier to give the provider at least two calendar days (four hours if expedited) to fill a documentation gap. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions \u201cnot later than 15 days after receipt of the claim\u201d, one 15-day extension, urgent care within 72 hours.',
        status: 'plan-dependent',
        cites: [{ title: 'NMSA \u00a7 59A-22B-5 \u2014 Prior Authorization Act timelines (FindLaw)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22b-5/' }, { title: '13.10.31 NMAC \u2014 Prior Authorization (OSI)', url: 'https://www.srca.nm.gov/parts/title13/13.010.0031.html' }, { title: '29 CFR 2560.503-1 \u2014 ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' }],
        verifyVia:
          'At benefits verification ask whether the plan is fully insured (New Mexico-regulated) or self-funded (ERISA), then confirm the precertification turnaround and any continuation lead time with Aetna (precertification via Availity or phone).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Which plan pays first is set by the member\u2019s own contract: New Mexico lets a carrier coordinate benefits \u201conly pursuant to the provisions in its plan contracts\u201d, which must be fair and reasonable (13.10.13.11 NMAC); no New Mexico rule fixing the order for a child on both parents\u2019 plans was located, so ask each plan which is primary. If the child also has Medicaid (Turquoise Care), this plan pays first \u2014 Medicaid is payer of last resort, and New Mexico bars policies, \u201cincluding employee retirement income security Act (ERISA) plans\u201d, from excluding or limiting benefits because the person is Medicaid-eligible. Get Aetna\u2019s precertification even then: the Medicaid MCO will deny a secondary claim this plan denied for a missed authorization. If the child also has TRICARE, TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer after other health insurance (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [{ title: '13.10.13 NMAC \u2014 Managed Health Care Benefits (13.10.13.11 coordination of benefits)', url: 'https://www.srca.nm.gov/parts/title13/13.010.0013.html' }, { title: '8.302.3 NMAC \u2014 Third Party Liability Provider Responsibilities', url: 'https://www.srca.nm.gov/parts/title08/08.302.0003.html' }, { title: '42 U.S.C. 1396a(a)(25) \u2014 Medicaid third-party liability', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap7-subchapXIX-sec1396a.htm' }, { title: '10 U.S.C. 1079(i)(1) \u2014 TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' }, { title: '38 CFR 17.270 \u2014 CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' }],
        verifyVia:
          'Ask Aetna at benefits verification for the member\u2019s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Services must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope, unless state mandates, plan documents or contracts require otherwise. Where a mandate, plan document or contract does allow authorization for services not directly provided by such a person, there must be supervision and direction of the unlicensed or non-certified provider in line with practice standards. Aetna publishes no numeric supervision ratio.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA policies — CPB 0554, CPB 0648 and the ABA medical necessity guide are silent on billing 97153 and 97155 for the same clock time.',
        status: 'unverified',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
        verifyVia: 'Aetna provider services / the participating-provider agreement, or a written coding determination from Aetna Behavioral Health (BACABACases@Aetna.com).',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Aetna publishes no per-day or per-week unit ceiling for ABA. Authorized hours are set from documented symptom severity using the medical necessity guide’s severity assessment, against typical intensities of 10–25 hours a week for comprehensive and 1–20 hours a week for focused programmes — typical, not cap. Progress is evaluated every six months and coverage ends on the guide’s improvement thresholds. New Mexico is one of the stronger mandate states: since 2019’s HB 322 coverage "shall not be denied to an insured on the basis of the insured’s age" and benefits "shall not be subject to annual or lifetime dollar limits" on fully insured plans. Self-funded ERISA plans and limited-benefit policies are exempt, so plan funding type decides whether the no-age-limit rule binds.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw, current through 2024)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
        ],
      },
      noteSignature: {
        value: 'Not addressed. Aetna’s published ABA policies set treatment-plan content requirements — defined target behaviors, baseline measures, quantifiable progress criteria, generalization strategies, transition and titration planning — but do not specify who must sign a session note or by when.',
        status: 'unverified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
        ],
        verifyVia: 'The participating-provider agreement and the Aetna Behavioral Health Provider Manual section on documentation and record retention.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-agnostic in Aetna’s guide, which notes only that where ABA is delivered in an inpatient, residential or partial hospitalization setting the medical necessity criteria for that level of care apply and no separate ABA authorization is needed. The guide expects collaboration and coordination with existing providers and the school district as applicable, and a treatment plan that tapers higher intensities toward supports from other sources such as school. Aetna’s statement that it will not deny coverage solely because services are in a child’s educational setting is a Maryland provision, not national, and Aetna is not required to provide services under an IEP or an IDEA obligation of a public school.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Services must be provided directly or billed by the appropriately licensed provider: licensed behavior analysts in states with licensure laws, board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope — unless state mandates, plan documents or contracts require otherwise.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in New Mexico?', a: 'Yes — under the carrier\'s national policy for ASD, layered on New Mexico\'s mandate (NMSA § 59A-22-49) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the New Mexico autism mandate require?', a: 'Coverage of ASD screening and treatment — including ABA — per a physician-prescribed plan, with no age-based denial and no annual or lifetime dollar limits since 2019\'s HB 322 repealed the old caps. Self-funded ERISA and limited-benefit plans are exempt.' },
      { q: 'What does Aetna pay for ABA in New Mexico?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against New Mexico\'s published Medicaid fee schedule (LOD #53), which functions as a public rate floor on the Medicaid side.' },
      { q: 'Does Aetna require ABA goals to be organized by DSM-5 criteria in New Mexico?', a: 'No DSM-5 grouping is asked for. Aetna wants a DSM-5 ASD diagnosis and a plan with clearly defined target behaviors, baseline data and quantifiable progress criteria; GR-69017-4 asks for baseline, interim and current data for all goals.' },
      { q: 'Does Aetna set required parent training hours in New Mexico?', a: 'No published minimum or cap. Parent commitment to participate is a medical-necessity criterion; request 97156/97157 in hours per week on GR-69017-4 and show measurable caregiver goals — the authorization sets the hours.' },
    ],
  },

  'cigna-new-mexico': {
    slug: 'cigna-new-mexico',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + the NMSA § 59A-22-49 mandate layer.',
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
        { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD only; Rett syndrome (F84.2) excluded under EN0499',
      status: 'verified',
      cites: [
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    payer: 'Cigna / Evernorth in New Mexico',
    state: 'NM', kind: 'commercial',
    pill: 'Payer Guide · Cigna · New Mexico',
    h1: 'Cigna / Evernorth ABA coverage in New Mexico: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in New Mexico: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for New Mexico families — the national clinical policy, prior authorization, the NMSA § 59A-22-49 mandate (no age limits, no dollar caps, exemptions), New Mexico\'s no-licensure landscape, and what intake should verify.',
    intro: [
      'For an intake team in New Mexico, a Cigna card means three layers at once: the carrier\'s national clinical policy, New Mexico\'s autism insurance mandate (NMSA 1978 § 59A-22-49), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'NMSA 1978 § 59A-22-49 (HMO parallel: § 59A-46-50)' },
      { label: 'Mandate age', value: 'No age limit — coverage can\'t be denied based on age (2019 HB 322)' },
      { label: 'Mandate caps', value: 'None — annual/lifetime dollar limits prohibited (2019 HB 322)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; limited-benefit policies' },
      { label: 'Licensure', value: 'None — no NM behavior-analyst license; BACB certification governs' },
      { label: 'Fee schedule', value: 'None published — contracted rates in your Evernorth agreement; ask Provider Relations' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in New Mexico',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. That clinical policy is national — what changes in New Mexico is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in New Mexico.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The New Mexico mandate: what it guarantees (and doesn\'t)',
        body: [
          'New Mexico\'s mandate is one of the stronger ones in our directory. NMSA 1978 § 59A-22-49 (with parallel sections for HMOs and nonprofit health plans) requires any individual or group policy delivered, issued, or renewed in the state to cover ASD screening plus treatment — naming applied behavioral analysis alongside speech, occupational, and physical therapy, per a physician-prescribed treatment plan. Since 2019\'s HB 322, the old limits are gone: coverage "shall not be denied to an insured on the basis of the insured\'s age," and benefits "shall not be subject to annual or lifetime dollar limits" (the pre-2019 $36,000/year and $200,000 lifetime caps were repealed). The statute carries its own parity clause — cost-sharing no less favorable than for physical illness, no denial of services as "habilitative," and no refusing or terminating coverage because of an ASD diagnosis — with MHPAEA layered on top. What survives: usual medical-necessity and network provisions, an exclusion option for school-based IDEA services, exemptions for limited-benefit policies, and — the big one — self-funded ERISA plans, which sit outside the statute entirely.',
        ],
        cites: [
      { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw, current through 2024)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
      { title: 'Autism Speaks — New Mexico state-regulated coverage (2019 HB 322)', url: 'https://www.autismspeaks.org/new-mexico-state-regulated-insurance-coverage' },
        ],
      },
      {
        h2: 'No New Mexico carve-out in EN0499',
        body: [
          'We ran a full-text check of the current EN0499 (effective 5/15/2026): it contains no New Mexico mention or carve-out — unlike Virginia, where the policy excludes fully-insured business. New Mexico Cigna members follow the standard EN0499 criteria unless their plan documents differ, which means the no-assessment-PA fast path holds here. Cigna runs no Medicaid plan in New Mexico, so the commercial policy plus the state mandate is the whole picture.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in New Mexico',
        body: [
          'New Mexico has no behavior analyst licensure law — BCBAs practice on BACB certification alone, with no state board at the Regulation & Licensing Department. (On the Medicaid side, the state adds an HCA practitioner attestation and background check, but that\'s a program requirement, not licensure.) On rates: Cigna does not publish commercial ABA fee schedules for New Mexico (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. New Mexico does give you an unusually good benchmark, though: the published Medicaid fee schedule under LOD #53 ($32.31 per 15-minute 97153 unit for a BCBA) is a public floor to negotiate up from.',
        ],
        cites: [
      { title: 'BACB — U.S. Licensure of Behavior Analysts (NM has no licensure law)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
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
        h2: 'Does Cigna require treatment-plan goals tied to DSM-5 criteria?',
        body: [
          'Yes — this is the closest any commercial payer in the state comes to a DSM-5 structure. EN0499 (effective 5/15/2026) requires "Clearly defined and measurable goals designed to target specific behaviors and skills across all settings," each naming the target behavior, the measurement method and the mastery standard, and requires that "Treatment goals are directly related to the individual\'s diagnosis of ASD and the symptoms of ASD defined by the DSM-5-TR (e.g., social communication and social interaction; restricted, repetitive patterns of behavior, interest, or activities)." Goals must come from the full ABA assessment, be developmentally appropriate, and carry dated quantitative baseline data and mastery criteria. The policy ties each goal to the DSM-5-TR symptom domains; it does not prescribe a template that groups them under headings.',
          'New Mexico\'s mandate requires the treatment plan to include "the anticipated outcomes stated as goals," along with the diagnosis, proposed treatment by type, frequency and duration, update frequency and the treating physician\'s signature (NMSA § 59A-22-49(F)).',
        ],
        cites: [
          { title: 'Evernorth/Cigna Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
        ],
      },
      {
        h2: 'Does Cigna require parent training, and how many hours?',
        body: [
          'EN0499 requires a "Stakeholder Training" component in the treatment plan but sets no hour minimum or cap. Stakeholder (parent/caregiver, relative, teacher) training "will be conducted by a BCBA®, LBA, or a mental health professional who is licensed to practice independently" and must have "clearly defined, measurable stakeholder goals with mastery criteria," baseline data, a plan to collect progress data, separately documented data for each stakeholder group, and the trainer\'s name and credentials. Planned group stakeholder training needs its own measurable goals. For continued care, Cigna wants baseline, interim and current data showing stakeholders "continue to actively participate in the treatment" and are progressing toward their goals. The hours approved are set case by case on the authorization.',
        ],
        cites: [
          { title: 'Evernorth/Cigna Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date — EN0499 is ASD-only (Rett excluded).' },
      { title: 'Physician-prescribed treatment plan', desc: 'The NM mandate keys coverage to a physician-prescribed plan — line up the prescriber early.' },
      { title: 'Age', desc: 'No mandate age limit in New Mexico — adult inquiries on fully-insured plans are viable, not edge cases.' },
    ],
    sources: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
      { title: 'NMSA § 59A-46-50 — HMO parallel section (Justia)', url: 'https://law.justia.com/codes/new-mexico/chapter-59a/article-46/section-59a-46-50/' },
      { title: 'Autism Speaks — New Mexico state-regulated coverage', url: 'https://www.autismspeaks.org/new-mexico-state-regulated-insurance-coverage' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap on ABA — its glossary, following CASP 2024, states that access to focused intervention "should not be restricted by age, cognitive level, diagnosis, or co-occurring conditions." Age terms come from the member’s benefit plan document, which supersedes the coverage policy, and from any controlling state mandate. New Mexico is one of the stronger mandate states: since 2019’s HB 322 coverage "shall not be denied to an insured on the basis of the insured’s age" and benefits "shall not be subject to annual or lifetime dollar limits" on fully insured plans. Self-funded ERISA plans and limited-benefit policies are exempt, so plan funding type decides whether the no-age-limit rule binds.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw, current through 2024)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
        ],
        verifyVia: 'Live benefits verification, or the Evernorth Autism Care Coordinator team on 877.279.7603 — establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'EN0499 puts no expiry on the ASD diagnosis, but it requires the name, credentials and licensure type of the diagnosing clinician and the date on which the diagnosis was most recently made — and a diagnosis termed provisional, proposed, potential, at risk of or rule out is not a confirmed diagnosis, nor is IDEA educational identification. The recency clocks sit on the data instead: the standardized assessment instrument must have been administered within 60 days prior to the start of treatment, quantitative baseline data collected within 60 days prior to start, current data within 60 days of the authorization request, a standardized instrument completed no more than one year prior for continued treatment, and a fresh standardized assessment after any break in treatment greater than 60 calendar days.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'The ASD diagnosis (ICD-10 F84.0–F84.9 except F84.2, Rett syndrome) must be made under DSM-5-TR criteria by a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice. The ABA assessment itself is performed by a Board Certified Behavior Analyst, a Licensed Behavior Analyst, or a mental health clinician licensed to practice independently who has documented training in ABA.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'EN0499 mandates no single named instrument. It requires a reliable, valid and standardized assessment instrument measuring the DSM-5-TR ASD domains — social communication and social interaction, and restricted, repetitive patterns of behavior, interests or activities — completed in its entirety and as designed, by someone trained to administer and interpret it, with reliability and validity established for the population tested, in the most current edition rather than an obsolete one (the policy’s own example: Vineland-3, not Vineland-II). The report must carry the date of administration, the respondent or participant name, the form type where applicable, and standardized scores and score tables or scoring grids.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      referral: {
        value: 'No referral, order or prescription is required under EN0499. Cigna’s notable front-door change is on authorization: per the Evernorth autism resource guide, prior authorization is no longer required for assessment codes 97151, 97152 or 0362T with a diagnosis of autism, as long as the provider is independently licensed or a BCBA and the member’s policy covers ABA — submit the claims and they are evaluated for payment. Treatment authorization requires the completed assessment and treatment plan attached to the Applied Behavior Analysis Prior Authorization Form. For a fully insured New Mexico plan the state mandate adds an ordering requirement the carrier policies do not: NMSA 1978 § 59A-22-49 keys coverage to a physician-prescribed treatment plan, so line up the prescriber early. Self-funded ERISA plans and limited-benefit policies sit outside the statute.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw, current through 2024)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
        ],
      },
      telehealth: {
        value: 'All ABA CPT codes are covered telehealth services per the Evernorth autism resource guide, and EN0499 allows delivery in person, via telehealth, or as a hybrid — the modality chosen on individual characteristics, the treatment plan, caregiver participation, environment, evidence of efficacy and safety, and technological requirements. The requirement that the ABA provider remain in line of sight and close proximity to the individual expressly does not apply to telehealth services. Where treatment is delivered in settings with additional behavioral expectations, telehealth included, the plan must document that the service still meets the definition of direct treatment and direct engagement. The assessment and supervision codes are included: the resource guide\'s "All ABA CPT codes" covers 97151 (initial assessment and reassessment) and 97155 (protocol modification / direct supervision) as much as 97153, and neither document caps the share of supervision that may be remote. Neither names a required telehealth POS code or modifier, so confirm claim coding with Evernorth Provider Services (800.926.2273).',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Turns on how the plan is funded. Fully insured New Mexico plans follow the Prior Authorization Act: \u201cPrior authorization shall be deemed granted for determinations not made within seven days\u201d; an expedited request, backed by the clinician\u2019s statement that delay could seriously jeopardize life, health or maximum function, is decided within 24 hours or deemed granted; and \u201cThe adjudication time line shall commence only when the health insurer receives all necessary and relevant documentation\u201d. OSI\u2019s rule (13.10.31 NMAC) requires the carrier to give the provider at least two calendar days (four hours if expedited) to fill a documentation gap. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions \u201cnot later than 15 days after receipt of the claim\u201d, one 15-day extension, urgent care within 72 hours. Cigna\u2019s EN0499 publishes no submission lead time, but a continuation request needs current data \u201ccollected within no more than 60 days prior to the start date of the continued treatment request\u201d.',
        status: 'plan-dependent',
        cites: [{ title: 'NMSA \u00a7 59A-22B-5 \u2014 Prior Authorization Act timelines (FindLaw)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22b-5/' }, { title: '13.10.31 NMAC \u2014 Prior Authorization (OSI)', url: 'https://www.srca.nm.gov/parts/title13/13.010.0031.html' }, { title: '29 CFR 2560.503-1 \u2014 ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' }, { title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia:
          'At benefits verification ask whether the plan is fully insured (New Mexico-regulated) or self-funded (ERISA), then confirm the precertification turnaround and any continuation lead time with Cigna/Evernorth.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Which plan pays first is set by the member\u2019s own contract: New Mexico lets a carrier coordinate benefits \u201conly pursuant to the provisions in its plan contracts\u201d, which must be fair and reasonable (13.10.13.11 NMAC); no New Mexico rule fixing the order for a child on both parents\u2019 plans was located, so ask each plan which is primary. If the child also has Medicaid (Turquoise Care), this plan pays first \u2014 Medicaid is payer of last resort, and New Mexico bars policies, \u201cincluding employee retirement income security Act (ERISA) plans\u201d, from excluding or limiting benefits because the person is Medicaid-eligible. Get Cigna\u2019s precertification even then: the Medicaid MCO will deny a secondary claim this plan denied for a missed authorization. If the child also has TRICARE, TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer after other health insurance (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [{ title: '13.10.13 NMAC \u2014 Managed Health Care Benefits (13.10.13.11 coordination of benefits)', url: 'https://www.srca.nm.gov/parts/title13/13.010.0013.html' }, { title: '8.302.3 NMAC \u2014 Third Party Liability Provider Responsibilities', url: 'https://www.srca.nm.gov/parts/title08/08.302.0003.html' }, { title: '42 U.S.C. 1396a(a)(25) \u2014 Medicaid third-party liability', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap7-subchapXIX-sec1396a.htm' }, { title: '10 U.S.C. 1079(i)(1) \u2014 TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' }, { title: '38 CFR 17.270 \u2014 CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' }],
        verifyVia:
          'Ask Cigna at benefits verification for the member\u2019s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Case supervision is performed by a BCBA, a Licensed Behavior Analyst, or a mental health professional licensed to practice independently with documented training in ABA. Direct case supervision — occurring concurrently with direct treatment, with the BCBA face-to-face with the individual and with either the RBT or the BCaBA — plus indirect case supervision runs at the generally accepted standard of care of one to two hours per ten hours of direct treatment. When direct treatment is 10 hours per week or less, a minimum of one to two hours per week of direct case supervision is provided. The name and credentials of the person providing supervision must be documented, and supervisory services must coincide with the AMA CPT code descriptions.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Only one provider can bill for a unit of time, with one exception: CPT codes 97153, 97154 and 97155 during direct supervision, when the BCBA or qualified health care professional directs the technician and both are face-to-face with the patient at the same time. Separately, ABA treatment is not covered or reimbursable when delivered to the same individual at the same time as any other treatment modality — the policy’s own examples are ABA and speech therapy, or ABA and occupational therapy.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      dailyLimits: {
        value: 'Cigna publishes no per-day unit ceiling. All ABA CPT codes bill in 15-minute increments, and all ABA services must be billed with 97151–97158, 0362T and 0373T only. The published limits are structural rather than daily: planned treatment intensity must reflect the severity of the impairments, the goals of treatment and the response to treatment across all settings, and case supervision sits at one to two hours per ten hours of direct treatment. 0362T and 0373T are each reported on a single technician’s face-to-face time, not the combined time of multiple technicians.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      noteSignature: {
        value: 'A separate written record is expected for each individual receiving ABA, corresponding with each service billed under its CPT code, carrying at least: the start date and time and end date and time for each service, the location of service delivery, the focus of service, a detailed description of the intervention conducted during the time of service, the individuals present, the specific service delivered (direct service, supervision, stakeholder training), and the name, credential where applicable, and signature of the ABA provider who rendered the service.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      placeOfService: {
        value: 'Treatment goals must be defined and measured across all settings and environments where treatment will occur — home, clinic, school, community — and quantitative data must be obtained and reported separately by location for each behavior and skill. Services considered primarily educational or vocational in nature, or related to academic or work performance, are not covered or reimbursable. Where services are delivered in environments that carry additional or alternative behavioral expectations (academic setting, vocational placement, telehealth), the plan must document that the service still meets the direct-treatment definition and is not replacing activities that belong to that setting.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Evernorth does not credential non-licensed or non-certified staff — their services must be billed under the supervising provider. On a CMS-1500 the rendering provider prints their name in box 31 and only a BCBA or other licensed provider is listed in box 33; electronic claims go to Evernorth payer ID 62308. Per the autism resource guide’s code table, 97152, 97153 and 97154 may be provided by a BCaBA or technician but billed only by a BCBA-D, BCBA or licensed mental health provider, while 97151, 97155, 97156, 97157, 97158, 0362T and 0373T are both provided and billed by a BCBA-D, BCBA or licensed mental health provider.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in New Mexico?', a: 'Yes — under national policy EN0499 for ASD, layered on New Mexico\'s mandate (NMSA § 59A-22-49) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'Does the Cigna assessment need prior authorization in New Mexico?', a: 'No — EN0499 requires no PA on assessment codes 97151, 97152, and 0362T, and we confirmed the current policy contains no New Mexico carve-out (unlike Virginia). PA lands at the treatment step.' },
      { q: 'What does the New Mexico autism mandate require?', a: 'Coverage of ASD screening and treatment — including ABA — per a physician-prescribed plan, with no age-based denial and no annual or lifetime dollar limits since 2019\'s HB 322 repealed the old caps. Self-funded ERISA and limited-benefit plans are exempt.' },
      { q: 'Can the ABA assessment (97151) or BCBA supervision (97155) be done by telehealth with Cigna in New Mexico?', a: 'Yes. Evernorth\'s autism resource guide says all ABA CPT codes are covered telehealth services, and EN0499 allows in-person, telehealth or hybrid delivery. No POS code or modifier is published; confirm claim coding with Provider Services (800.926.2273).' },
      { q: 'What is Cigna\'s ABA fee schedule in New Mexico?', a: 'There is no public one. Cigna pays in-network ABA at the rates in your Evernorth agreement; Evernorth directs rate and contract questions to your Provider Relations representative.' },
      { q: 'Is Cigna accepting new ABA providers in New Mexico?', a: 'Evernorth says it is committed to expanding its autism network. Apply with the Behavioral Provider Information Form (individuals) or the Screening Application for Autism Clinics (groups); allow up to 90 days, plus 60 to 90 days of individual credentialing for a clinic.' },
      { q: 'Does Cigna pay for ABA delivered at school in New Mexico?', a: 'EN0499 treats school as a possible treatment setting but excludes educational services. It lists school among the settings where treatment goals may be set ("home, clinic, school, community setting"), requires the record to show that ABA in an academic setting still meets the direct-treatment definition, and excludes services "primarily educational or vocational in nature, or related to academic or work performance." Whether school hours are payable on a given plan is a benefit-document question.' },
      { q: 'Does Cigna require ABA goals to follow DSM-5 criteria in New Mexico?', a: 'EN0499 requires every treatment goal to be "directly related to" the ASD diagnosis and the DSM-5-TR symptoms (social communication/interaction; restricted, repetitive behavior), with measurable targets, baseline data and mastery criteria.' },
      { q: 'Does Cigna set required parent training hours in New Mexico?', a: 'No hour figure is published. EN0499 requires measurable stakeholder (parent/caregiver) training goals with mastery criteria and progress data, delivered by a BCBA or licensed clinician; the hours are set on the authorization.' },
    ],
  },

  'unitedhealthcare-new-mexico': {
    slug: 'unitedhealthcare-new-mexico',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + the NMSA § 59A-22-49 mandate + a Turquoise Care plan.',
    assessmentPA: {
      value: 'Required — step 1 of Optum\'s two-step authorization (assessment auth via Provider Express)',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      ],
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
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      ],
    },
    payer: 'UnitedHealthcare / Optum in New Mexico',
    state: 'NM', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · New Mexico',
    h1: 'UnitedHealthcare / Optum ABA coverage in New Mexico: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in New Mexico: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for New Mexico families — the national clinical policy, prior authorization, the NMSA § 59A-22-49 mandate (no age limits, no dollar caps, exemptions), the Turquoise Care Medicaid plan, and what intake should verify.',
    intro: [
      'For an intake team in New Mexico, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, New Mexico\'s autism insurance mandate (NMSA 1978 § 59A-22-49), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order — plus the New Mexico wrinkle that UnitedHealthcare is the most Medicaid-invested national carrier in the state, so "we have United" often means the Turquoise Care plan, not this commercial policy.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'NMSA 1978 § 59A-22-49 (HMO parallel: § 59A-46-50)' },
      { label: 'Mandate age', value: 'No age limit — coverage can\'t be denied based on age (2019 HB 322)' },
      { label: 'Mandate caps', value: 'None — annual/lifetime dollar limits prohibited (2019 HB 322)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; limited-benefit policies' },
      { label: 'Licensure', value: 'None — no NM behavior-analyst license; BACB certification governs' },
      { label: 'Fee schedule', value: 'None published — paid at the contracted rate on your Optum fee schedule' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in New Mexico',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months and an operational flag when utilization falls below 80% of authorized hours. That clinical policy is national — what changes in New Mexico is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in New Mexico.',
        ],
        cites: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'The New Mexico mandate: what it guarantees (and doesn\'t)',
        body: [
          'New Mexico\'s mandate is one of the stronger ones in our directory. NMSA 1978 § 59A-22-49 (with parallel sections for HMOs and nonprofit health plans) requires any individual or group policy delivered, issued, or renewed in the state to cover ASD screening plus treatment — naming applied behavioral analysis alongside speech, occupational, and physical therapy, per a physician-prescribed treatment plan. Since 2019\'s HB 322, the old limits are gone: coverage "shall not be denied to an insured on the basis of the insured\'s age," and benefits "shall not be subject to annual or lifetime dollar limits" (the pre-2019 $36,000/year and $200,000 lifetime caps were repealed). The statute carries its own parity clause — cost-sharing no less favorable than for physical illness, no denial of services as "habilitative," and no refusing or terminating coverage because of an ASD diagnosis — with MHPAEA layered on top. What survives: usual medical-necessity and network provisions, an exclusion option for school-based IDEA services, exemptions for limited-benefit policies, and — the big one — self-funded ERISA plans, which sit outside the statute entirely.',
        ],
        cites: [
      { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw, current through 2024)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
      { title: 'Autism Speaks — New Mexico state-regulated coverage (2019 HB 322)', url: 'https://www.autismspeaks.org/new-mexico-state-regulated-insurance-coverage' },
        ],
      },
      {
        h2: 'Optum in New Mexico: no commercial supplement, but a dedicated Medicaid program',
        body: [
          'We checked Optum\'s national ABA State Mandates supplemental criteria document (BH 803ABA, effective January 2026) in full: it lists Arizona, California, Connecticut, Florida, Massachusetts, New Jersey, New York, Ohio, and Pennsylvania — no New Mexico entry, so no NM-specific supplemental criteria modify the commercial policy. Where Optum IS deeply invested in New Mexico is Medicaid: it runs a dedicated New Mexico Turquoise Care ABA Program (state program page, Quick Reference Guide, NM clinical policy, NM Uniform PA Form, and provider orientation) for UnitedHealthcare Community Plan members — with a dramatically lighter PA surface (only 97153 and 0373T) than the commercial two-step. A family saying "we have UnitedHealthcare" may well be on that plan — verify the line of business on every card, and use the UHC Community Plan of New Mexico guide for Medicaid members.',
        ],
        cites: [
      { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'Optum Provider Express — New Mexico ABA Program', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2/abaNM.html' },
        ],
      },
      {
        h2: 'Licensure & rates in New Mexico',
        body: [
          'New Mexico has no behavior analyst licensure law — BCBAs practice on BACB certification alone, with no state board at the Regulation & Licensing Department. (On the Medicaid side, the state adds an HCA practitioner attestation and background check, but that\'s a program requirement, not licensure.) On rates: UnitedHealthcare does not publish commercial ABA fee schedules for New Mexico (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. New Mexico does give you an unusually good benchmark, though: the published Medicaid fee schedule under LOD #53 ($32.31 per 15-minute 97153 unit for a BCBA) is a public floor to negotiate up from.',
        ],
        cites: [
      { title: 'BACB — U.S. Licensure of Behavior Analysts (NM has no licensure law)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
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
        h2: 'Does UnitedHealthcare (Optum) require treatment-plan goals in a set format, such as by DSM-5 criteria?',
        body: [
          'Optum sets goal content and priorities, not a DSM-5 template. Its ABA Supplemental Clinical Criteria (BH803ABASCC, interim review April 2026) require "Treatment goals and objectives that are comprehensive and clearly stated," "Outcome-oriented interventions targeting specific baseline behaviors," and behaviors "tied to objective and quantifiable treatment goals that have baseline data, measurable progress, and projected timeframes for completion." Goals are to be "prioritized to address behaviors that threaten the safety of the client or others or create a barrier to quality of life," then skills fundamental to health and social inclusion; when goals are met, "new goals should be identified based on targeted symptoms and behaviors." DSM-5-TR appears in the diagnosis requirement, not as a way to organize goals.',
          'New Mexico\'s mandate requires the treatment plan to include "the anticipated outcomes stated as goals," along with the diagnosis, proposed treatment by type, frequency and duration, update frequency and the treating physician\'s signature (NMSA § 59A-22-49(F)).',
        ],
        cites: [
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review April 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
        ],
      },
      {
        h2: 'Does UnitedHealthcare (Optum) require parent training, and how many hours?',
        body: [
          'Optum says parent training is required but sets no number. Its CPT-code FAQ (BH00083-24-FAQ, 01/2024): "Is parent training covered? Parent training is required. Bill 97156 or 97157 depending on the format of parent training," and, asked "Is there a minimum or maximum of what can be billed for parent training?", answers "It is based on the treatment plan and goals provided." The Supplemental Clinical Criteria call for a "systematic, individualized curriculum on ABA fundamental concepts" — "not accomplished by simply having the caregiver or guardian present during treatment" — and for the plan to describe parent goals with progress and "the percentage of planned sessions attended." The only numeric ceiling is the commercial reimbursement policy\'s maximum frequency per day: 16 units (4 hours) each for 97156 and 97157.',
        ],
        cites: [
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review April 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A; history entry February 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Line of business', desc: 'Commercial vs. UnitedHealthcare Community Plan of New Mexico (Turquoise Care Medicaid) — different rules, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5-TR ASD diagnosis with a validated tool (ADI-R, ADOS-2, etc.) — Optum asks for the instrument, not just the label.' },
      { title: 'Age', desc: 'No mandate age limit in New Mexico — adult inquiries on fully-insured plans are viable, not edge cases.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'Optum Provider Express — New Mexico ABA Program', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2/abaNM.html' },
      { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
      { title: 'Autism Speaks — New Mexico state-regulated coverage', url: 'https://www.autismspeaks.org/new-mexico-state-regulated-insurance-coverage' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Optum’s ABA Supplemental Clinical Criteria carry no age criterion — coverage turns on the member-specific benefit plan, which supersedes the guideline, and on any federal or state regulatory requirement that supersedes the benefits. New Mexico is one of the stronger mandate states: since 2019’s HB 322 coverage "shall not be denied to an insured on the basis of the insured’s age" and benefits "shall not be subject to annual or lifetime dollar limits" on fully insured plans. Self-funded ERISA plans and limited-benefit policies are exempt, so plan funding type decides whether the no-age-limit rule binds.',
        status: 'plan-dependent',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw, current through 2024)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
        ],
        verifyVia: 'Provider Express benefits check under a One Healthcare ID, or the behavioral health number on the member ID card — establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'The SCC set no expiry on the ASD diagnosis itself; what they require is that the DSM-5-TR diagnosis and severity level be confirmed and documented by the diagnosing clinician using validated tools. The clocks run on review instead: where there has been inadequate or no demonstrable progress with targeted symptoms or behaviors within a 6-month period, or goals have not been achieved within the estimated timeframes, the reasons must be assessed and interventions modified; and continued-service review specifically addresses utilization of prior-authorization-period hours below 80% over a 2-week period, which requires documented barriers.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'A valid diagnosis of ASD (or other applicable diagnosis as required by governing laws) must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such a diagnosis according to the DSM-5-TR criteria.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'The SCC give a three-tier, explicitly non-exhaustive list and require the diagnosing clinician to confirm and document the DSM-5 diagnosis and severity level using at least one clinically validated tool. First-level screening tools: Autism Behavior Checklist, CHAT / M-CHAT, CSBS-DP-IT Checklist, Autism Screening Questionnaire, Autism Quotient, Childhood Autism Screening Test. Second-level screening tools: CARS and CARS-2, RITA-T, STAT. Formal diagnostic tools used as part of a comprehensive diagnostic evaluation: ADI-R, ADOS and ADOS-2, and DISCO. Treatment intensity must then be set from a baseline measured with at least one validated tool from a named list including ATEC, VB-MAPP, ABLLS and ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, Vineland and CFQL-2.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      referral: {
        value: 'The SCC require no separate physician referral or order; what they require is prior authorization for ABA, unless otherwise specified or mandated by contract or law. In practice UnitedHealthcare administers this as a two-step Optum flow on Provider Express — an authorization for the assessment, then a second for treatment — with continued-service reviews on the authorization cycle. For a fully insured New Mexico plan the state mandate adds an ordering requirement the carrier policies do not: NMSA 1978 § 59A-22-49 keys coverage to a physician-prescribed treatment plan, so line up the prescriber early. Self-funded ERISA plans and limited-benefit policies sit outside the statute.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'NMSA § 59A-22-49 — autism coverage (FindLaw, current through 2024)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22-49/' },
        ],
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
          'Turns on how the plan is funded. Fully insured New Mexico plans follow the Prior Authorization Act: \u201cPrior authorization shall be deemed granted for determinations not made within seven days\u201d; an expedited request, backed by the clinician\u2019s statement that delay could seriously jeopardize life, health or maximum function, is decided within 24 hours or deemed granted; and \u201cThe adjudication time line shall commence only when the health insurer receives all necessary and relevant documentation\u201d. OSI\u2019s rule (13.10.31 NMAC) requires the carrier to give the provider at least two calendar days (four hours if expedited) to fill a documentation gap. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions \u201cnot later than 15 days after receipt of the claim\u201d, one 15-day extension, urgent care within 72 hours.',
        status: 'plan-dependent',
        cites: [{ title: 'NMSA \u00a7 59A-22B-5 \u2014 Prior Authorization Act timelines (FindLaw)', url: 'https://codes.findlaw.com/nm/chapter-59a-insurance-code/nm-st-sect-59a-22b-5/' }, { title: '13.10.31 NMAC \u2014 Prior Authorization (OSI)', url: 'https://www.srca.nm.gov/parts/title13/13.010.0031.html' }, { title: '29 CFR 2560.503-1 \u2014 ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' }],
        verifyVia:
          'At benefits verification ask whether the plan is fully insured (New Mexico-regulated) or self-funded (ERISA), then confirm the precertification turnaround and any continuation lead time with Optum (UnitedHealthcare behavioral health).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Which plan pays first is set by the member\u2019s own contract: New Mexico lets a carrier coordinate benefits \u201conly pursuant to the provisions in its plan contracts\u201d, which must be fair and reasonable (13.10.13.11 NMAC); no New Mexico rule fixing the order for a child on both parents\u2019 plans was located, so ask each plan which is primary. If the child also has Medicaid (Turquoise Care), this plan pays first \u2014 Medicaid is payer of last resort, and New Mexico bars policies, \u201cincluding employee retirement income security Act (ERISA) plans\u201d, from excluding or limiting benefits because the person is Medicaid-eligible. Get UnitedHealthcare/Optum\u2019s precertification even then: the Medicaid MCO will deny a secondary claim this plan denied for a missed authorization. If the child also has TRICARE, TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer after other health insurance (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [{ title: '13.10.13 NMAC \u2014 Managed Health Care Benefits (13.10.13.11 coordination of benefits)', url: 'https://www.srca.nm.gov/parts/title13/13.010.0013.html' }, { title: '8.302.3 NMAC \u2014 Third Party Liability Provider Responsibilities', url: 'https://www.srca.nm.gov/parts/title08/08.302.0003.html' }, { title: '42 U.S.C. 1396a(a)(25) \u2014 Medicaid third-party liability', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap7-subchapXIX-sec1396a.htm' }, { title: '10 U.S.C. 1079(i)(1) \u2014 TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' }, { title: '38 CFR 17.270 \u2014 CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' }],
        verifyVia:
          'Ask UnitedHealthcare/Optum at benefits verification for the member\u2019s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Consistent with CASP standards of care, direct case supervision is required at one to two hours for every ten hours of direct treatment per week. Technicians must be under the applicable supervision of a BCBA or a licensed behavioral health clinician and should be Registered Behavior Technicians or another appropriately certified behavior technician as allowable by state mandate. Optum adds that it is not recommended that parents serve in an RBT role, and that a BCBA acting in a supervisory role for a parent serving as RBT for their own child would violate the ethics code with a duty to self-report.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Yes, with a single-provider exclusion. Optum’s commercial ABA reimbursement policy: “Can I report 97153 or 97154 with 97155 concurrently? A. Yes, as long as the criteria in the descriptors of both codes are met. A single QHP may not report 97153 or 97154 with 97155 concurrently.” So the overlap has to be two people — a technician on 97153 and an analyst on 97155 directing them with the patient present. Optum’s ABA CPT FAQ adds that 97153 and 97156 “may be billed concurrently” as separate services to different family members by different providers. 97155 and 97156 on the same date pay only if “separate, distinct, and clearly documented in the progress notes” — “A single provider can’t bill for both simultaneously.” Team meetings bill only as supervision with the member, supervisor and technician present, and “CPT codes 97153 and 97155 may not be billed for technician training.”',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        ],
      },
      dailyLimits: {
        value: 'Optum’s commercial ABA reimbursement policy (2022RP501A, updated June 2026) sets a maximum frequency per day for every code: 97151 32 units (8 hrs), 97152 16 (4 hrs), 97153 32 (8 hrs), 97154 18 (4.5 hrs), 97155 24 (6 hrs), 97156 16 (4 hrs), 97157 16 (4 hrs), 97158 16 (4 hrs), 0362T 16 (4 hrs), 0373T 32 (8 hrs) — and “If a provider bills in excess of 32 units per day, claims may be subject to non-reimbursement or recovery.” The ABA CPT FAQ confirms “For our commercial ABA program MUE’s apply.” There is no weekly hour cap: hours are authorized on documented clinical need, approved units can be shifted among codes within a cluster, and utilization below 80% of authorized hours over a two-week period is addressed at review.',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
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
        value: 'ABA must be provided at the least restrictive and most clinically appropriate level, with generalization and maintenance of skills outside the treatment environment into natural settings such as home and community forming part of the continued-service test. Not covered: services that are not ABA therapy, such as a 1:1 aide delivered simultaneously during classroom instruction, or services covered under IDEA. School-based ABA does allow coordination of services and covers teacher training, meetings with school personnel, and observations in the school setting, and the treatment plan is expected to coordinate with the school and any IFSP or IEP.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Once an ASD diagnosis is confirmed, a credentialed ABA provider is identified for the member: a master’s- or doctoral-level Board-Certified Behavior Analyst, or a licensed behavioral health clinician who has attested to sufficient expertise and been credentialed to provide ABA. A BCaBA or non-licensed individual works under the direct supervision of a BCBA or licensed behavioral health clinician who takes responsibility for the individual’s care, assisting in assessment or implementing a treatment plan developed by that BCBA or clinician.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in New Mexico?', a: 'Yes — under the carrier\'s national policy for ASD, layered on New Mexico\'s mandate (NMSA § 59A-22-49) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'Does Optum have New Mexico-specific commercial ABA criteria?', a: 'No — we checked the current ABA State Mandates supplemental criteria in full and New Mexico is not listed. The standard national two-step authorization applies to commercial members. Optum\'s NM-specific machinery lives on the Medicaid side, in the Turquoise Care ABA Program.' },
      { q: 'What does the New Mexico autism mandate require?', a: 'Coverage of ASD screening and treatment — including ABA — per a physician-prescribed plan, with no age-based denial and no annual or lifetime dollar limits since 2019\'s HB 322 repealed the old caps. Self-funded ERISA and limited-benefit plans are exempt.' },
      { q: 'What does UnitedHealthcare pay for ABA in New Mexico?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against New Mexico\'s published Medicaid fee schedule (LOD #53), which the state enforces as a rate floor on the Medicaid side.' },
      { q: 'How often does UnitedHealthcare (Optum) reauthorize ABA?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale.' },
      { q: 'Can the ABA assessment (97151) or BCBA supervision (97155) be done by telehealth with UnitedHealthcare in New Mexico?', a: 'Supervision yes, assessment no. For commercial plans Optum allows telehealth only on 97155, 97156 and 97157, after a virtual-visits attestation, billed with POS 02 or 10. The 97151 assessment is not on that list.' },
      { q: 'Is UnitedHealthcare (Optum) accepting new ABA providers in New Mexico?', a: 'Optum takes ABA applications through the "Join Our Autism/ABA Network" section of Provider Express. Credentialing takes 45 to 120 days after a complete submission, plus a site audit for new agencies. Optum publishes no statement that its network is closed.' },
      { q: 'Does UnitedHealthcare require ABA goals to be organized by DSM-5 criteria in New Mexico?', a: 'No DSM-5 grouping is asked for. Optum wants clearly stated, measurable goals with baseline data and timeframes, prioritized by safety and quality-of-life risk, with new goals based on targeted symptoms and behaviors.' },
      { q: 'Does UnitedHealthcare set required parent training hours in New Mexico?', a: 'Optum says "Parent training is required" (97156/97157) but sets no minimum or maximum — "It is based on the treatment plan and goals provided." Commercial claims are capped at 16 units (4 hours) per day for each of 97156 and 97157.' },
    ],
  },
};

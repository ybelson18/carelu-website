import type { PayerConfig } from './types.js';

export const indianaPayers: Record<string, PayerConfig> = {
  'indiana-medicaid': {
    slug: 'indiana-medicaid',
    cardDesc: 'All-PA ABA, 2026 EPSDT-only shift, 4,000-hr lifetime cap, published rate phasedown.',
    assessmentPA: {
      value: 'Required — all ABA services require prior authorization (FFS vendor: Acentra Health)',
      status: 'verified',
      cites: [
        { title: 'IHCP — Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
        { title: 'IHCP — ABA prior authorization checklist', url: 'https://www.in.gov/medicaid/providers/files/ihcp-aba-prior-auth-checklist.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — each PA capped at 6 months; caregiver coaching required in every ABA PA',
      status: 'verified',
      cites: [
        { title: 'IHCP — Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
        { title: 'IHCP Bulletin BT202562 — ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' },
        { title: 'IHCP Bulletin BT2026136 — Minimum caregiver coaching/training requirements for ABA clarified (8/18/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026136.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD with a comprehensive diagnostic evaluation (CDE) + physician referral',
      status: 'verified',
      cites: [
        { title: 'IHCP — Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
        { title: 'IHCP Bulletin BT202562 — ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' },
      ],
    },
    payer: 'Indiana Medicaid (IHCP)',
    state: 'IN', kind: 'state-medicaid',
    pill: 'Payer Guide · Indiana Medicaid',
    h1: 'Indiana Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Indiana Medicaid (IHCP) ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Indiana Medicaid (IHCP) covers ABA for autism — prior authorization on all ABA, the 2026 EPSDT-only and under-21 changes, the 4,000-hour lifetime allocation, published fee-schedule rates and the 2026–2027 phasedown, with primary sources.',
    intro: [
      'Indiana Medicaid — the Indiana Health Coverage Programs (IHCP) — covers ABA for autism when medically necessary, across traditional Medicaid and its managed-care entities. The program is in the middle of the most consequential rule changes of any state we track: an EPSDT-only shift, a hard under-21 cutoff, a lifetime hour allocation, published rate cuts, and a provider-accreditation mandate. Intake teams need both the baseline and the moving parts.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — medically necessary ABA for ASD, EPSDT-only since 4/1/2026' },
      { label: 'Prior auth', value: 'Required for all ABA services; each PA max 6 months' },
      { label: 'Age limit', value: 'No ABA reimbursement for members 21+ (DOS on/after 10/1/2026)' },
      { label: 'Lifetime cap', value: '4,000 hours for comprehensive ABA (16+ hrs/wk); targeted ABA ≤15 hrs/wk exempt' },
      { label: 'Hours', value: 'Up to 40 hrs/wk requestable; beyond that needs additional PA' },
      { label: 'Rates', value: 'Published fee schedule, cut 6% (4/1/2026) then 4% more (4/1/2027)' },
      { label: 'Diagnosis recency', value: 'CDE >1 year old needs updated statement of need + current assessment' },
      { label: 'Staff screening', value: 'All ABA specialties high-risk — Indiana State Police fingerprint check before each RBT/BCaBA/BCBA enrolls' },
      { label: 'New-agency enrollment', value: 'CMS-approved moratorium on new ABA agency enrollments/ownership changes, effective 6/6/2026 (renewable in 6-month increments) — individual RBT/BCaBA/BCBA enrollment unaffected' },
    ],
    sections: [
      {
        h2: 'Coverage & authorization',
        body: [
          'IHCP covers ABA when medically necessary for the treatment of ASD, and all ABA services require prior authorization — for fee-for-service through Acentra Health, and through each managed-care entity\'s own process for MCE members. The clinical bar is specific: an ASD diagnosis supported by a comprehensive diagnostic evaluation (CDE) performed by a doctoral-level HSPP psychologist, physician, APRN, or PA; a physician referral; and a behavior assessment that must include the Vineland (with the Maladaptive Behavior domain), the BASC parent rating questionnaire, and an age-appropriate direct skills assessment, signed by the lead analyst and a parent. A CDE older than one year needs an updated statement of need, referral, and current behavior assessment. One tool-currency note: IHCP will accept either the BASC-3 Parent Rating Questionnaire or its successor, BASC-4 (public release expected ~August 23, 2026), through October 1, 2026 — after that date only BASC-4 satisfies the requirement.',
          'Each PA runs at most 6 months, up to 40 hours/week may be requested (more than 40 hours of direct therapy needs additional PA), and — since the 2026 rules — every ABA PA must include caregiver coaching (up to 18 hours per standard 6-month authorization), with a minimum of 1 hour of BCBA supervision per 8 hours of technician services. IHCP Bulletin BT2026136 (8/18/2026) clarifies that floor rather than raising or lowering the ceiling: the required minimum can be reduced below the standard 12-hour/6-month caregiver-coaching floor from BT202662 when documented barriers exist — custody or foster-care disruptions, medical crises, homelessness, legal restrictions, and similar circumstances — provided a caregiver-coaching "improvement plan" is documented at reauthorization whenever the minimum wasn\'t met.',
        ],
        cites: [
          { title: 'IHCP — Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
          { title: 'IHCP Bulletin BT202562 — ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' },
          { title: 'IHCP — ABA prior authorization checklist', url: 'https://www.in.gov/medicaid/providers/files/ihcp-aba-prior-auth-checklist.pdf' },
          { title: 'IHCP Bulletin BT2026123 — BASC-3 PRQ to BASC-4 transition (7/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026123.pdf' },
          { title: 'IHCP Bulletin BT2026136 — Minimum caregiver coaching/training requirements for ABA clarified (8/18/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026136.pdf' },
        ],
      },
      {
        h2: 'What changed in 2026 (and 2027)',
        body: [
          'Effective April 1, 2026, IHCP covers ABA exclusively through the EPSDT benefit; members 21 and older have a transition window through September 30, 2026, and for dates of service on or after October 1, 2026, IHCP will not authorize or reimburse ABA for members 21+ — making age a first-order intake question. Also effective April 1, 2026: comprehensive ABA (16+ hours/week, billed with modifier UA) draws from a 4,000-hour (16,000-unit) lifetime allocation per member — 97155 and 97156 are excluded from the allocation, and the IHCP Portal\'s "Limit Details" panel shows usage — while targeted ABA is capped at 15 hours/week but exempt from the lifetime cap. Codes 97151, 97152, 97153, 97154, and 0373T can no longer be billed with telehealth modifier 95.',
          'Separately, an accreditation mandate now binds every ABA group enrollment — new and existing. Currently enrolled agencies must submit documentation showing accreditation has been initiated with the Autism Commission on Quality (ACQ) or the Behavioral Health Center of Excellence (BHCOE) by August 1, 2026 (to INXIXabaenrollments@gainwelltechnologies.com or via the IHCP Portal) — that deadline has now passed, and IHCP\'s bulletin list through BT2026155 (9/24/2026) carries no extension — and must hold active accreditation by October 1, 2027. Missing either milestone results in enrollment deactivation, not just a warning. IHCP reissued this deadline as a reminder in Bulletin BT2026118 (7/14/2026) with no extension and sharper enforcement language: "Failure to provide documentation will result in the enrollment being deactivated." One footnote worth reading twice: BT202646 states a previous BHCOE accreditation is accepted only "until an agency\'s reaccreditation with ACQ," so agencies choosing an accreditor should plan the reaccreditation path, not just the first credential.',
          'A second, separate restriction landed in between: effective June 6, 2026, CMS approved a provider-enrollment moratorium on new ABA agency enrollments and changes of ownership in Indiana Medicaid (initial 6 months, renewable in 6-month increments) — new individual rendering-provider (RBT/BCaBA/BCBA) enrollment is unaffected, and already-accredited agencies can request an exception via OMPPProviderRelations@fssa.in.gov. HHS-OIG\'s own audit-report page confirms the moratorium follows an OIG finding of improperly paid Indiana ABA claims, though the IHCP bulletin itself doesn\'t name the audit. New or expanding ABA agencies should treat this moratorium, not just the accreditation deadline, as the binding constraint on growth in Indiana this year.',
          'Four more bulletins landed September 29, 2026, tightening clinical documentation rather than coverage. BT2026160 simplifies the statement-of-need/referral rule: "statement of need" and "referral" are now interchangeable, required only at onset of ABA (CDE >1 year old), at reauthorization when an active member\'s CDE crosses the one-year mark, or with a new PA after a 6-month service gap — not with every reauthorization or annually — and it cannot be completed by a BCaBA, BCBA, PT, SLP, or OT. BT2026162 requires a complete functional behavior assessment (FBA) — a named indirect assessment tool plus ABC data, triggers/precursors, and a hypothesized function statement — for every behavior targeted by a behavior intervention plan (BIP), effective October 29, 2026; BIPs built without one no longer pass review. BT2026159 sets an AAP-based right to nap/sleep during ABA hours (members can\'t be kept awake, woken by physical contact, or penalized for non-billable 97153 time lost to a documented nap) that must be written into the schedule of services. BT2026161 ends fee-for-service peer-to-peer PA reviews on November 1, 2026 (scheduling stops October 31, 2026) — administrative review and appeal is the only path left for Acentra FFS denials; MCE members are unaffected, and member appeal rights don\'t change.',
        ],
        cites: [
          { title: 'IHCP Bulletin BT202627 — ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' },
          { title: 'IHCP Bulletin BT202646 — ABA agency accreditation requirement (3/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202646.pdf' },
          { title: 'IHCP Bulletin BT2026118 — ABA accreditation deadline reminder (7/14/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026118.pdf' },
          { title: 'IHCP Bulletin BT202692 — ABA agency provider enrollment moratorium (6/4/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202692.pdf' },
          { title: 'IHCP Bulletin BT2026160 — ABA statement of need and referral requirements clarified (9/29/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026160.pdf' },
          { title: 'IHCP Bulletin BT2026162 — Functional behavior assessment required for ABA behavior intervention plans (9/29/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026162.pdf' },
          { title: 'IHCP Bulletin BT2026159 — Policy for sleeping and naps during ABA therapy (9/29/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026159.pdf' },
          { title: 'IHCP Bulletin BT2026161 — Peer-to-peer reviews ending Nov. 1, 2026 (9/29/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026161.pdf' },
        ],
      },
      {
        h2: 'Rates: published, and stepping down',
        body: [
          'Indiana publishes its ABA max fees, which makes revenue modeling unusually concrete — including the pain: a 6% reduction on individual ABA codes for dates of service on/after April 1, 2026, and a further 4% on all ABA codes on/after April 1, 2027. Per 15-minute unit: 97153 (technician, U1) $17.06 → $16.04 → $15.39; 97155 (BCBA, U3) $27.63 → $25.97 → $24.93; 97156 (BCBA, U3) $28.23 → $26.54 → $25.47; 97151 assessment (U3) $27.63 → $25.97 → $24.93. From 4/1/2026, 97153 also became billable at the BCaBA/BCBA tiers, and group codes were restratified into group-size tiers with their own rates. MCE-contracted rates are negotiated but the IHCP max fee is the benchmark. The January 1, 2027 rebase of the IHCP Professional Fee Schedule to 100% of Medicare does not touch these: BT2026143 (8/27/2026) lists applied behavior analysis among the services "that will not be affected by these rate changes," so the 4/1/2027 cut is the next ABA rate event.',
        ],
        cites: [
          { title: 'IHCP Bulletin BT202627 — full ABA rate tables (eff. 4/1/2026 & 4/1/2027)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' },
          { title: 'IHCP Bulletin BT2026143 — 2027 Professional Fee Schedule changes exclude ABA (8/27/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026143.pdf' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'Indiana is one of the few states where technicians enroll in Medicaid individually. Since December 18, 2024, RBTs enroll with the IHCP as rendering providers (provider type 11, specialty 625 — ABA Therapist RBT), and all RBTs and BCaBAs had to be individually enrolled by April 1, 2025 — each with their own Type 1 NPI, enrolled once and then associated with every group they render for. Since April 1, 2025 the rendering NPI on claims must align with the credential-level modifier (U1 RBT / U2 BCaBA / U3 BCBA-HSPP), though a bulletin update note delayed enforcement of that alignment. There is no separate state RBT license: IC 25-8.5-3-6 lets "direct contact technicians" practice without a license when implementing plans under the supervision and direction of a licensed behavior analyst, so the certification floor is the BACB\'s — age 18+, high-school education, the 40-hour training, competency assessment, and the RBT exam, plus the BACB\'s own requirement that every applicant pass a criminal background check and an abuse-registry check within 180 days before applying.',
          'On top of that, IHCP classifies all three ABA specialties (615 Masters/Doctoral-HSPP, 624 Bachelors, 625 RBT) as HIGH risk at enrollment — which triggers a fingerprint-based criminal background check for every individually enrolling RBT, BCaBA, and BCBA before the application can be completed. Fingerprints go through the Indiana State Police, the provider pays the fee, and results are sent to the FSSA (not the agency) for review; the check is specific to the individual, so an enrolled RBT joining a second group doesn\'t need a new one. Enrolled school corporations are exempt, but group providers rendering ABA in school settings are not, and specialty 615 group/billing enrollments additionally get a site visit. FSSA can deny enrollment for convictions it "determines is inconsistent with the best interest of IHCP members" — violent, financial, substance, abuse, and firearm offenses are the published examples. Build the fingerprint step into your hiring timeline: it sits between offer and first billable session.',
          'Supervisor-side, Indiana now licenses behavior analysts: LBA and LABA credentials under IC 25-8.5 (applications live May 13, 2025), with LBA licensure requiring current BCBA certification plus a national criminal history background check ($100 application; LABAs pay $75 and must file a signed supervision contract with a licensed behavior analyst). For IHCP enrollment, specialty 615 is limited to HSPP-licensed or BCBA/BCBA-D-certified providers, and the assessments feeding every PA may only be performed by a psychologist, BCBA-D, or master\'s-level BCBA. The binding ratio since April 1, 2026: at least 1 hour of BCBA (or IHCP-approved qualifying clinician) supervision per 8 hours of technician-delivered therapy — and with 97153 now in-person only, that supervision capacity has to exist where the sessions happen. These screening rules ride on IHCP enrollment across fee-for-service and the MCEs; we found no evidence the plans add employee-level checks beyond the state baseline, but current MCE provider manuals weren\'t exhaustively reviewed — confirm with each plan at credentialing.',
        ],
        cites: [
          { title: 'IHCP Bulletin BT2024194 — ABA provider enrollment & high-risk screening (11/2024)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2024194.pdf' },
          { title: 'IHCP Bulletin BT202519 — ABA enrollment FAQ (fingerprinting, deadlines) (2/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202519.pdf' },
          { title: 'IHCP Bulletin BT202627 — supervision ratio & 2026 ABA changes', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' },
          { title: 'Indiana PLA — Behavior Analyst licensing information', url: 'https://www.in.gov/pla/professions/behavior-analyst/behavior-analyst-licensing-information/' },
          { title: 'IC 25-8.5-3-6 — Prohibitions; exceptions (direct contact technicians)', url: 'https://codes.findlaw.com/in/title-25-professions-and-occupations/in-code-sect-25-8-5-3-6/' },
          { title: 'BACB RBT Handbook', url: 'https://www.bacb.com/rbt-handbook' },
        ],
      },
    ],
    collect: [
      { title: 'Member ID & managed-care plan', desc: 'Anthem, MHS, CareSource, or UHC (Hoosier Care Connect/PathWays) — the plan decides the PA process and forms. MDwise ended as an HIP/Hoosier Healthwise MCE 1/1/2026; former MDwise members now carry one of the other three.' },
      { title: 'Age / date of birth', desc: 'No ABA for 21+ from October 2026 — confirm eligibility and runway up front.' },
      { title: 'CDE + physician referral', desc: 'The comprehensive diagnostic evaluation (HSPP/physician/APRN/PA), its date (1-year freshness rule), and the referral.' },
      { title: 'Prior ABA history', desc: 'The 4,000-hour lifetime allocation makes prior comprehensive-ABA hours a coverage question, not just a clinical one.' },
      { title: 'Caregiver availability', desc: 'Caregiver coaching is required in every PA — set the expectation at intake.' },
    ],
    sources: [
      { title: 'IHCP Bulletin BT202627 — ABA policy updates & rate tables', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' },
      { title: 'IHCP — Behavioral Health Services module (PROMOD00039)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
      { title: 'IHCP Bulletin BT202562 — ABA documentation requirements', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' },
      { title: 'IHCP Bulletin BT202646 — ABA agency accreditation', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202646.pdf' },
      { title: 'IHCP Bulletin BT2026118 — ABA accreditation deadline reminder (7/14/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026118.pdf' },
      { title: 'IHCP Bulletin BT202692 — ABA agency provider enrollment moratorium (6/4/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202692.pdf' },
      { title: 'IHCP Bulletin BT2026123 — BASC-3 PRQ to BASC-4 transition (7/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026123.pdf' },
      { title: 'IHCP Bulletin BT2026136 — Minimum caregiver coaching/training requirements for ABA clarified (8/18/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026136.pdf' },
      { title: 'IHCP Bulletin BT2026160 — ABA statement of need and referral requirements clarified (9/29/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026160.pdf' },
      { title: 'IHCP Bulletin BT2026162 — Functional behavior assessment required for ABA behavior intervention plans (9/29/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026162.pdf' },
      { title: 'IHCP Bulletin BT2026159 — Policy for sleeping and naps during ABA therapy (9/29/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026159.pdf' },
      { title: 'IHCP Bulletin BT2026161 — Peer-to-peer reviews ending Nov. 1, 2026 (9/29/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026161.pdf' },
      { title: 'IHCP — ABA prior authorization checklist', url: 'https://www.in.gov/medicaid/providers/files/ihcp-aba-prior-auth-checklist.pdf' },
      { title: 'IHCP Bulletin BT2024194 — ABA provider enrollment & high-risk screening', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2024194.pdf' },
      { title: 'IHCP Bulletin BT202519 — ABA enrollment FAQ', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202519.pdf' },
      { title: 'Indiana PLA — Behavior Analyst licensing information', url: 'https://www.in.gov/pla/professions/behavior-analyst/behavior-analyst-licensing-information/' },
      { title: 'IC 25-8.5-3-6 — Prohibitions; exceptions', url: 'https://codes.findlaw.com/in/title-25-professions-and-occupations/in-code-sect-25-8-5-3-6/' },
      { title: 'BACB RBT Handbook', url: 'https://www.bacb.com/rbt-handbook' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Two layers, and the second one is new money. The provider reference module requires that ABA performed by a BCaBA or credentialed RBT \u201cmust be under the direct supervision of a BCBA, BCBA-D or HSPP.\u201d On top of that, since April 1, 2026 IHCP sets a numeric floor: at least 1 hour of BCBA (or IHCP-approved qualifying clinician) supervision per 8 hours of technician-delivered therapy. Because 97153 lost telehealth modifier 95 on the same date, that supervision capacity has to exist physically where the sessions happen. Assessments feeding a PA are a separate, narrower role: only a psychologist, BCBA-D or master\'s-level BCBA may perform the behavior assessment.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published in the ABA sections of the provider reference module or in the 2026 policy bulletins. Indiana does regulate code-pair economics from a different direction \u2014 the rendering NPI on the claim must align with the credential-level modifier (U1 RBT / U2 BCaBA / U3 BCBA-HSPP), and 97155 and 97156 are excluded from the 4,000-hour lifetime allocation while 97153 counts against it \u2014 but neither states whether 97155 and 97153 may be billed for the same clock time.',
        status: 'unverified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
        verifyVia: 'For fee-for-service, Acentra Health at 866-725-9991 (PA) or Gainwell Customer Assistance at 800-457-4584 (billing), plus the Procedure Codes and Modifiers for Applied Behavior Analysis Therapy table in Behavioral Health Services Codes on the IHCP Code Sets page. For a managed-care member, the MCE \u2014 IHCP states that MCEs establish and publish their own billing and reimbursement requirements.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Indiana caps by the week and by the lifetime rather than by the day. Up to 40 hours per week may be requested; \u201cABA therapy services extending beyond 40 hours per week of direct therapy must be medically necessary and require an additional prior authorization.\u201d Each PA is limited to six months \u2014 \u201cPA requests for longer periods will not be approved.\u201d Since April 1, 2026 comprehensive ABA (16+ hours/week, billed with modifier UA) draws from a 4,000-hour (16,000-unit) lifetime allocation per member, with 97155 and 97156 excluded from the allocation and usage visible in the IHCP Portal\u2019s Limit Details panel; targeted ABA is capped at 15 hours/week and is exempt from the lifetime cap. Caregiver coaching is capped at up to 18 hours per standard six-month authorization. No per-day MUE ceiling is published. Additional hours outside the authorized PA may be requested for a limited period on a named list of triggers \u2014 a sudden increase in self-injury, aggression or elopement, regression in major self-care or language, a shift in family or home dynamic, or a non-mental-health health crisis or comorbidity.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT2026136 \u2014 Minimum caregiver coaching/training requirements for ABA clarified (8/18/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026136.pdf' }],
      },
      noteSignature: {
        value:
          'Indiana publishes signature rules for the plan documents but not for the session note. The behavior assessment \u201cmust be signed by the lead analyst and parent or guardian,\u201d and so must the treatment plan; the complete scoring report including outcome measure scores and graphs must be submitted with the PA request. Neither the provider reference module nor BT202562, the bulletin titled for ABA documentation requirements, states who signs an individual session note or by when.',
        status: 'unverified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
        verifyVia: 'Acentra Health at 866-725-9991 for fee-for-service, or the member\'s MCE, which publishes its own documentation and billing requirements. BT202562 also promises a future bulletin clarifying documentation requirements under the updated ABA State Plan Amendment \u2014 check for it before relying on this.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'School is in scope as a provider type, and out of scope as a duplicate. IHCP enrolls School Corporations (provider type 12, specialty 120) to bill ABA, and the treatment plan must be built around \u201cthe individual\u2019s needs, age, school attendance (including homeschooling) and other daily activities.\u201d But two named exclusions bound it: services \u201cthat focus solely on recreational or educational outcomes\u201d are not covered, and neither are \u201cservices that are duplicative of other covered services, such as services rendered under an individualized educational program (IEP) that address the same goals using the same techniques as the treatment plan.\u201d The plan must also document plans for parent/guardian training and school transition. Enrolled school corporations are exempt from the high-risk fingerprint screening, but group providers rendering ABA in school settings are not.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202519 \u2014 ABA enrollment FAQ (fingerprinting, deadlines) (2/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202519.pdf' }],
      },
      billAsProvider: {
        value:
          'The claim goes out under the enrolled analyst or school corporation, never the technician. \u201cABA therapy services rendered by a BCaBA or RBT must be billed under the NPI of an IHCP-enrolled ABA therapist or school corporation,\u201d and all ABA claims bill on a professional claim (CMS-1500 or its electronic equivalent). Indiana nonetheless makes technicians enroll individually: since December 18, 2024 the ABA specialties are 615 (Masters/Doctoral or HSPP), 624 (Bachelors) and 625 (RBT), and beginning July 1, 2025 reimbursement requires the rendering practitioner to be enrolled under one of them \u2014 except for school-based ABA billed by school corporations. Since April 1, 2025 the rendering NPI on the claim must align with the credential-level modifier (U1 RBT / U2 BCaBA / U3 BCBA-HSPP), though a bulletin update delayed enforcement of that alignment.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT202519 \u2014 ABA enrollment FAQ (fingerprinting, deadlines) (2/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202519.pdf' }],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Twenty and younger \u2014 and the cutoff just became real. The provider reference module covers ABA \u201cfor members 20 years of age and younger,\u201d and BT202562 restates it. Effective April 1, 2026 ABA is covered exclusively through the EPSDT benefit; members 21 and older had a transition window through September 30, 2026, and for dates of service on or after October 1, 2026 IHCP will not authorize or reimburse ABA for members 21+. Age is therefore a first-call intake question in Indiana, and for a member approaching 21 the runway is a coverage fact worth stating out loud.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      dxRecency: {
        value:
          'One year on the CDE, six months on the behavior assessment \u2014 and BT2026160 (9/29/2026) rewrote when the paperwork behind that has to be refreshed. \u201cStatement of need\u201d and \u201creferral\u201d are now defined as interchangeable: a referral from an HSPP, physician, APRN, or physician assistant, required at onset of ABA if the CDE is already more than a year old, at reauthorization if an actively-served member\u2019s CDE crosses the one-year mark, or with a new PA whenever the member has had a six-month gap in ABA services (and again with each subsequent PA if the gaps keep recurring) \u2014 it is explicitly not required with every reauthorization or annually once submitted. Members continuing current services without a gap do not need a new CDE at all, but do need an updated behavior assessment and treatment plan (reassessment every six months regardless); new behaviors or a request for services not previously authorized may require more frequent behavior assessments. Separately, \u201cif a comprehensive behavior assessment has been completed within six months, any new provider is expected to obtain the assessment from the original provider\u201d \u2014 so ask an incoming family who tested them and when before you re-test.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }, { title: 'IHCP Bulletin BT2026160 \u2014 ABA statement of need and referral requirements clarified (9/29/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026160.pdf' }, { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }],
      },
      diagnosingProviders: {
        value:
          'BT202562 names the credentials outright. The qualified healthcare provider performing the comprehensive diagnostic evaluation must have \u201cspecialized training in the application of the most recent Diagnostic and Statistical Manual of Mental Disorders (DSM) autism criteria\u201d and hold one of: a doctoral-level licensed clinical psychologist endorsed as a health service provider in psychology (HSPP); a licensed physician; a licensed advanced practice registered nurse (APRN); or a licensed physician assistant. The provider reference module carries a slightly broader formulation that adds \u201cother behavioral health specialist with training and experience in the diagnosis and treatment of ASD.\u201d The behavior assessment is a different role with a different list \u2014 psychologist, BCBA-D or master\'s-level BCBA only.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }, { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202519 \u2014 ABA enrollment FAQ (fingerprinting, deadlines) (2/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202519.pdf' }],
      },
      diagnosticTools: {
        value:
          'Indiana is one of the few states that names the instruments, and it names three. The behavior assessment conducted before ABA starts \u201cmust include three core standardized behavior instruments\u201d: the Vineland Comprehensive Parent Interview Form including the Maladaptive Behavior domain; the Behavior Assessment System for Children, Parenting Relationship Questionnaire (BASC PRQ); and an age-appropriate, objective direct skills assessment. It must be signed by the lead analyst and the parent or guardian, and \u201cthe complete scoring report, including outcome measure scores and graphs, must be submitted with prior authorization requests.\u201d One currency note: IHCP accepts either the BASC-3 Parent Rating Questionnaire or its successor BASC-4 through October 1, 2026 \u2014 after that date only BASC-4 satisfies the requirement. The CDE behind the diagnosis has its own component list rather than a named tool: caregiver interview, structured observation of social communication skills and behaviors, review of available external evaluations or screenings, documentation of a completed DSM-based screening/diagnostic evaluation, and documentation that the individual cannot adequately participate in home, school or community activities or presents a safety risk.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT2026123 \u2014 BASC-3 PRQ to BASC-4 transition (7/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026123.pdf' }, { title: 'IHCP \u2014 ABA prior authorization checklist', url: 'https://www.in.gov/medicaid/providers/files/ihcp-aba-prior-auth-checklist.pdf' }],
      },
      referral: {
        value:
          'Required, from a physician, and it appears twice. Member eligibility requires that \u201ca physician has made a treatment referral recommending ABA therapy,\u201d and the CDE\u2019s own required components include \u201ca physician\u2019s referral for autism-specific services.\u201d Where the CDE is more than a year old, the updated statement of need must itself carry a referral from an appropriate referring practitioner. As of BT2026160 (9/29/2026), the qualifying referral sources are HSPP-endorsed doctoral psychologists, licensed physicians, licensed APRNs, and licensed physician assistants \u2014 a BCaBA, BCBA, PT, SLP, or OT cannot complete the statement of need/referral. All ABA services require prior authorization on top of the referral \u2014 through Acentra Health for fee-for-service, and through the member\'s MCE otherwise \u2014 with each PA limited to six months.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }, { title: 'IHCP Bulletin BT2026160 \u2014 ABA statement of need and referral requirements clarified (9/29/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026160.pdf' }],
      },
      telehealth: {
        value:
          'Indiana moved the other way from most states. Effective April 1, 2026, codes 97151, 97152, 97153, 97154 and 0373T can no longer be billed with telehealth modifier 95 \u2014 they require in-person delivery. That reaches the assessment and all direct and group treatment, which is why the 1-hour-per-8 supervision floor has to be staffed on site. Verify the current rule per code before scheduling; Indiana has revised its ABA policy repeatedly through 2026.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
      },
      authTurnaround: {
        value:
          'For fee-for-service members, the PA contractor is Acentra Health and the clock is federal-floor fast. From January 1, 2026 (BT2025165), Acentra must decide a standard request “within seven calendar days of the initial standard PA request,” extendable “up to an additional seven calendar days” only if the member or provider asks or Acentra requests more information; an urgent/expedited request must be decided “within 72 hours,” and “No pend (extension) time frame will be allowed for urgent/expedited FFS PA requests.” That matches 42 CFR 440.230(e). When Acentra pends a request for information, the clock restarts on receipt, and the information must arrive within 30 calendar days of the original request or “the request is systematically denied.” Reauthorization lead time is written down: submit new PA requests for continuation of ongoing services “at least 30 calendar days before the current authorization period expires,” and a denial or cut to a continuing service needs “at least 10 days’ notice plus three days’ additional mailing time.” Two process changes land in late 2026, per BT2026161 (9/29/2026): Acentra has built InterQual (IQ) criteria into the FFS authorization-submission workflow (first announced in BT2026142, not independently re-verified here) to outline the documentation medical necessity generally requires — completing IQ criteria doesn’t guarantee approval — and effective November 1, 2026, FFS peer-to-peer reviews are discontinued (scheduling ends October 31, 2026); a denied FFS PA now goes straight to administrative review and appeal, which keeps its existing timelines, and member appeal rights are unchanged. Most IHCP ABA members are in managed care, where the module says to ask the MCE for its own time parameters — see the Anthem, CareSource and MHS guides (Indiana law gives MCEs a 48-business-hour clock); this peer-to-peer change is FFS-only.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT2025165 — IHCP to comply with CMS-0057-F Jan. 1, 2026 (11/25/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2025165.pdf' }, { title: 'IHCP — Prior Authorization module (PROMOD00012, v7.2, publ. Nov. 20, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/prior-authorization.pdf' }, { title: '42 CFR 440.230(e) — Medicaid FFS prior authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-440.230' }, { title: 'IHCP Bulletin BT2026161 — Peer-to-peer reviews ending Nov. 1, 2026 (9/29/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026161.pdf' }],
      },
      coordinationOfBenefits: {
        value:
          'Medicaid pays last, and Indiana enforces it by cost avoidance. The TPL module cites 42 CFR 433.139 for IHCP as “the payer of last resort” (only Victim Assistance, First Steps, CSHCS and CHOICE are billed after IHCP); if the eligibility check shows other coverage and the claim arrives without proof the other resource was billed, the claim is denied. Bill the commercial plan first, then send IHCP proof of the denial or payment — the EOB/EOP/RA or a qualifying adjustment reason code — including when the primary paid zero toward a deductible or copay; IHCP pays up to its allowable less the primary payment, and if the other insurer has not answered in 90 days the claim can go to IHCP with the billing evidence. Two ABA-critical rules: (1) get the IHCP PA anyway — “the provider must follow the primary insurer\'s requirements for obtaining PA and must also obtain PA from the appropriate IHCP PA contractor”; (2) be in the primary plan\'s network — IHCP “will not reimburse for claims that the primary carrier denied because the member received out-of-network services when the carrier required services to be delivered by in-network providers,” and the 90-day provision cannot be used to get around that. The pay-and-chase exception for preventive pediatric care, including EPSDT, only reaches claims carrying a diagnosis code from IHCP\'s “Preventive Pediatric Care Diagnosis Codes That Bypass Cost Avoidance” list; nothing in the module puts ABA on it, so bill the primary first. TRICARE is not a problem here: 32 CFR 199.8 excludes Medicaid from the “double coverage plans” TRICARE pays after, so for a child with both, TRICARE pays before Medicaid.',
        status: 'verified',
        cites: [{ title: 'IHCP — Third-Party Liability module (PROMOD00017, v7.2, publ. Oct. 9, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/third-party-liability.pdf' }, { title: 'IHCP — Prior Authorization module (PROMOD00012, v7.2, publ. Nov. 20, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/prior-authorization.pdf' }, { title: '42 CFR 433.139 — Medicaid third-party liability, payment of claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' }, { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' }],
      },
    },
    faq: [
      { q: 'Does Indiana Medicaid cover ABA therapy?', a: 'Yes — IHCP covers medically necessary ABA for autism with prior authorization on all services. Since April 1, 2026 it is covered exclusively through EPSDT, and coverage ends for members 21+ for dates of service on or after October 1, 2026.' },
      { q: 'What is Indiana\'s lifetime cap on ABA?', a: 'Comprehensive ABA (16+ hours/week) draws from a 4,000-hour (16,000-unit) lifetime allocation per member, tracked in the IHCP Portal. 97155 and 97156 don\'t count against it, and targeted ABA (≤15 hrs/week) is exempt.' },
      { q: 'What does Indiana Medicaid pay for ABA?', a: 'Published max fees, per 15-minute unit — e.g., 97153 at $16.04 (technician tier, DOS on/after 4/1/2026, dropping to $15.39 on 4/1/2027) and 97155 at $25.97 (BCBA tier). MCE rates are contractual but benchmark against the IHCP schedule. The 2027 Medicare-based rebase of the Professional Fee Schedule excludes ABA (BT2026143), so the 4/1/2027 4% cut is the next scheduled change.' },
      { q: 'Can Indiana Medicaid ABA be delivered by telehealth?', a: 'Codes 97151, 97152, 97153, 97154, and 0373T can no longer be billed with modifier 95 as of April 1, 2026 — they require in-person delivery. Verify current rules per code before scheduling.' },
      { q: 'Can a member nap or sleep during an Indiana Medicaid ABA session?', a: 'Yes — BT2026159 (9/29/2026) requires providers to follow AAP sleep recommendations by age, write necessary nap time into the schedule of services, and never keep a member awake or wake one by physically moving them. Lost 97153 billable time from a documented nap must be explained in the treatment plan, not penalized.' },
    ],
  },

  'anthem-indiana-medicaid': {
    slug: 'anthem-indiana-medicaid',
    family: 'anthem',
    cardDesc: 'IHCP criteria restated in Anthem\'s UM guideline; Availity/ICR submission, F84.0 + daily schedule.',
    assessmentPA: {
      value: 'Required — PA with autism dx (F84.0), testing results, intake assessment, treatment plan, and daily schedule',
      status: 'verified',
      cites: [
        { title: 'Anthem — Indiana Medicaid ABA UM Guideline', url: 'https://providers.anthem.com/docs/gpp/IN_CAID_ABAGuidelines.pdf' },
        { title: 'Anthem — Prior Authorization 201 (IHCP Works)', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2022-Anthem-Prior-Authorization-201.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — 6-month maximum per IHCP policy and Anthem\'s guideline (Indiana\'s 1-year authorization-validity statute is unreconciled); continuation needs updated plan, testing within 2 months of treatment start, progress per goal',
      status: 'plan-dependent',
      cites: [
        { title: 'Anthem — Indiana Medicaid ABA UM Guideline', url: 'https://providers.anthem.com/docs/gpp/IN_CAID_ABAGuidelines.pdf' },
        { title: 'Anthem — Prior Authorization 201 (IHCP Works)', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2022-Anthem-Prior-Authorization-201.pdf' },
        { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
        { title: 'IHCP Bulletin BT2026136 — minimum caregiver coaching and training for ABA clarified (8/18/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026136.pdf' },
        { title: 'Ind. Code 27-1-37.5-26 — authorization valid for at least one year', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-26/' },
      ],
      verifyVia: 'IHCP\'s ABA rule caps each PA request at six months (BH module; BT2026136, 8/18/2026, still calls it the "standard six-month authorization period"), while IC 27-1-37.5-26(b), which reaches Medicaid managed care, says an authorization "shall be valid for at least one (1) year." No IHCP bulletin or MCE notice reconciles the two. Ask the MCE\'s UM team what authorization span it is issuing for ABA.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes \u2014 ASD coded F84.0, with testing results (Anthem package)',
      status: 'verified',
      cites: [
        { title: 'Anthem — Indiana Medicaid ABA UM Guideline', url: 'https://providers.anthem.com/docs/gpp/IN_CAID_ABAGuidelines.pdf' },
      ],
    },
    payer: 'Anthem BCBS Indiana (Medicaid)',
    state: 'IN', kind: 'medicaid-mco', parent: 'Indiana Medicaid (IHCP)',
    pill: 'Payer Guide · Anthem (IN Medicaid)',
    h1: 'Anthem Indiana Medicaid ABA coverage (Hoosier Healthwise / HIP / HCC).',
    metaTitle: 'Anthem Indiana Medicaid ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Anthem administers ABA for Indiana Medicaid (Hoosier Healthwise, HIP, Hoosier Care Connect) — its UM guideline restating IHCP criteria, the Availity/ICR submission path, and the documentation package that gets requests through.',
    intro: [
      'Anthem Blue Cross and Blue Shield serves Indiana Medicaid members across Hoosier Healthwise, HIP, and Hoosier Care Connect, and administers ABA under its own UM guideline — which is an explicit restatement of the IHCP rules (405 IAC 5-22-12 and the state bulletins). Clinically you\'re dealing with state policy; operationally you\'re dealing with Anthem\'s documentation package and the Availity/Interactive Care Reviewer pipeline. One caution: Anthem\'s published guideline predates the April 2026 state changes, so where they differ, the state rules control.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'IHCP MCE (Hoosier Healthwise, HIP, Hoosier Care Connect)' },
      { label: 'Clinical rules', value: 'Anthem UM guideline restating IHCP criteria (AINPEC-3345-21)' },
      { label: 'Prior auth', value: 'Required for all ABA; max 6-month authorizations per IHCP (1-year statute unreconciled — ask Anthem)' },
      { label: 'Hours', value: 'Up to 40 hrs/wk; beyond needs additional PA (mirrors IHCP)' },
      { label: 'Submission', value: 'Availity / Interactive Care Reviewer; IHCP universal PA form by fax' },
      { label: 'Caution', value: 'Guideline last reviewed 2021 — 2026 state changes control' },
      { label: 'Diagnosis recency', value: 'State rule: CDE >1 year old needs an updated statement of need' },
    ],
    sections: [
      {
        h2: 'The initial request package',
        body: [
          'Anthem\'s stated initial-request requirements are concrete: the PA form, the autism diagnosis coded F84.0, applicable testing results, an intake assessment covering level of functioning, severity, and social/life skills, the treatment plan, and — the one teams miss — the child\'s daily schedule. Continuation requests need a new PA with an updated treatment plan, developmental testing within 2 months of treatment start, and progress-to-date per goal. Submissions run through Availity\'s Interactive Care Reviewer, with fax (using the IHCP universal PA form) and phone as alternatives.',
        ],
        cites: [
          { title: 'Anthem — Indiana Medicaid ABA UM Guideline', url: 'https://providers.anthem.com/docs/gpp/IN_CAID_ABAGuidelines.pdf' },
          { title: 'Anthem — Prior Authorization 201 (IHCP Works)', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2022-Anthem-Prior-Authorization-201.pdf' },
        ],
      },
      {
        h2: 'What intake should watch',
        body: [
          'Members whose care runs through an ACO, PMG, or IPA-contracted group must follow that group\'s authorization and claims rules rather than Anthem\'s direct process — worth checking during verification. And because Anthem\'s guideline hasn\'t been re-issued since 2021, the 2026 IHCP changes (EPSDT-only, the under-21 cutoff, the 4,000-hour lifetime allocation, mandatory caregiver coaching, and the telehealth restrictions) apply through state policy even though the plan document doesn\'t mention them.',
        ],
        cites: [
          { title: 'IHCP Bulletin BT202627 — ABA policy & rate changes', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Program + delivery system', desc: 'Hoosier Healthwise vs. HIP vs. Hoosier Care Connect, and whether an ACO/PMG/IPA controls the auth path.' },
      { title: 'F84.0 diagnosis + testing', desc: 'The diagnosis code, evaluation, and testing results Anthem\'s package requires.' },
      { title: 'Daily schedule', desc: 'Anthem explicitly asks for it — capture school hours and other therapies at intake.' },
      { title: 'Age + prior ABA hours', desc: 'State rules add the under-21 cutoff and lifetime-allocation questions.' },
    ],
    sources: [
      { title: 'Anthem — Indiana Medicaid ABA UM Guideline', url: 'https://providers.anthem.com/docs/gpp/IN_CAID_ABAGuidelines.pdf' },
      { title: 'Anthem — Prior Authorization 201 (IHCP Works 2022)', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2022-Anthem-Prior-Authorization-201.pdf' },
      { title: 'IHCP Bulletin BT202627 — ABA policy updates', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' },
      { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
      { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' },
      { title: 'IHCP Bulletin BT2026123 \u2014 BASC-3 PRQ to BASC-4 transition (7/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026123.pdf' },
      { title: 'IHCP Bulletin BT202519 \u2014 ABA enrollment FAQ', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202519.pdf' },
      { title: 'IHCP Bulletin BT2026136 \u2014 Minimum caregiver coaching/training requirements for ABA clarified (8/18/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026136.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Follows the Indiana Medicaid rule: ABA performed by a BCaBA or credentialed RBT must be under the direct supervision of a BCBA, BCBA-D or HSPP, and since April 1, 2026 at least 1 hour of BCBA (or IHCP-approved qualifying clinician) supervision is required per 8 hours of technician-delivered therapy. Behavior assessments may only be performed by a psychologist, BCBA-D or master\'s-level BCBA. IHCP states that its ABA documentation requirements apply to both fee-for-service and managed care, and this plan publishes no supervision standard of its own.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published by Indiana Medicaid or by this plan. IHCP is explicit that within managed care \u201cindividual managed care entities (MCEs) establish and publish their own billing and reimbursement requirements,\u201d so unlike the clinical criteria, code-pair rules are not inherited from the state by default.',
        status: 'unverified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
        verifyVia: 'The MCE directly \u2014 ask whether 97155 pays alongside 97153 for the same clock time, and request the plan\'s billing and reimbursement requirements in writing.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Follows the Indiana Medicaid limits: up to 40 hours per week may be requested with anything beyond that needing an additional PA; IHCP policy limits each ABA PA request to six months; and since April 1, 2026 comprehensive ABA (16+ hours/week, modifier UA) draws from a 4,000-hour (16,000-unit) lifetime allocation per member, with 97155 and 97156 excluded and targeted ABA (\u226415 hours/week) exempt. No per-day MUE ceiling is published at either level. Open question for managed care: IC 27-1-37.5-26(b), in force since July 1, 2025 and reaching Medicaid risk-based managed care through IC 27-1-37.5-5(a)(3), says an authorization "shall be valid for at least one (1) year after the date the health care provider receives the authorization," and CareSource\'s July 2025 IHCP Works deck lists "Approved Authorization — Valid for 365 calendar days." But IHCP Bulletin BT2026136 (8/18/2026), addressed to the MCOs and the FFS PA-UM contractor alike, still describes ABA as running on a "standard six-month authorization period." No IHCP bulletin or MCE notice we could find reconciles the two, so ask the MCE which span it is issuing before you plan a reauthorization calendar.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT2026136 — minimum caregiver coaching and training for ABA clarified (8/18/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026136.pdf' }, { title: 'Ind. Code 27-1-37.5-26 — authorization valid for at least one year', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-26/' }, { title: 'Ind. Code 27-1-37.5-5 — “health plan” includes Medicaid risk-based managed care', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-5/' }, { title: 'CareSource — IHCP Works 2025 Prior Authorization 101 deck', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2025-CareSource-Prior-Authorization-101.pdf' }],
      },
      placeOfService: {
        value:
          'Follows the Indiana Medicaid rule: the treatment plan must be built around the member\'s school attendance (including homeschooling) and other daily activities, while services focusing solely on recreational or educational outcomes are not covered, and neither are services duplicative of an IEP that address the same goals using the same techniques as the treatment plan.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }],
      },
      billAsProvider: {
        value:
          'Follows the Indiana Medicaid rule: ABA rendered by a BCaBA or RBT must be billed under the NPI of an IHCP-enrolled ABA therapist or school corporation, on a professional claim. Since July 1, 2025 the rendering practitioner must be enrolled under ABA specialty 615, 624 or 625, and since April 1, 2025 the rendering NPI must align with the credential-level modifier (U1 RBT / U2 BCaBA / U3 BCBA-HSPP). Plan-level claim formatting may still differ \u2014 MCEs publish their own billing requirements.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
      },
      noteSignature: {
        value:
          'Neither Indiana Medicaid nor this plan publishes a session-note signature rule. The state\'s published signature requirements attach to the plan documents \u2014 the behavior assessment and the treatment plan must each be signed by the lead analyst and the parent or guardian \u2014 and BT202562, the bulletin titled for ABA documentation requirements, does not reach the individual session note. IHCP states its documentation requirements apply to managed care as well as fee-for-service, but also that MCEs establish and publish their own billing and reimbursement requirements, so the gap is not automatically filled at the state level.',
        status: 'unverified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
        verifyVia: 'The MCE directly \u2014 ask for its ABA documentation and session-note standard in writing. BT202562 also promises a future bulletin clarifying documentation requirements under the updated ABA State Plan Amendment; check for it before relying on this.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Indiana Medicaid rule: ABA is covered for members 20 years of age and younger. Effective April 1, 2026 coverage runs exclusively through EPSDT, and for dates of service on or after October 1, 2026 IHCP will not authorize or reimburse ABA for members 21 and older \u2014 a state policy that binds every MCE.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the Indiana Medicaid rule: a CDE more than one year old requires an updated statement of need, which must include a referral from an appropriate referring practitioner and an up-to-date behavior assessment completed by the ABA provider. Members continuing current services need no new CDE but do need an updated behavior assessment and treatment plan. A behavior assessment completed within the previous six months should be obtained from the original provider rather than repeated. IHCP states these documentation requirements apply to managed care as well as fee-for-service.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }, { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Follows the Indiana Medicaid rule: the CDE must be performed by a provider with specialized training in the current DSM autism criteria who is a doctoral-level licensed clinical psychologist endorsed as an HSPP, a licensed physician, a licensed APRN, or a licensed physician assistant. Anthem\'s own UM guideline asks for the autism diagnosis coded F84.0 with applicable testing results rather than restating the credential list \u2014 and because that guideline was last reviewed in 2021, the state list controls where they differ.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }, { title: 'Anthem \u2014 Indiana Medicaid ABA UM Guideline', url: 'https://providers.anthem.com/docs/gpp/IN_CAID_ABAGuidelines.pdf' }],
      },
      diagnosticTools: {
        value:
          'Two requirements stack. The state\'s behavior assessment must include three core standardized instruments \u2014 the Vineland Comprehensive Parent Interview Form with the Maladaptive Behavior domain, the BASC Parenting Relationship Questionnaire, and an age-appropriate objective direct skills assessment \u2014 with the complete scoring report, outcome scores and graphs submitted with the PA. Anthem\'s own package then asks for \u201capplicable testing results\u201d plus an intake assessment covering level of functioning, severity and social/life skills, and for continuation, developmental testing within 2 months of treatment start. Note the currency switch: only BASC-4 satisfies the state requirement after October 1, 2026.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'Anthem \u2014 Indiana Medicaid ABA UM Guideline', url: 'https://providers.anthem.com/docs/gpp/IN_CAID_ABAGuidelines.pdf' }, { title: 'IHCP Bulletin BT2026123 \u2014 BASC-3 PRQ to BASC-4 transition (7/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026123.pdf' }],
      },
      referral: {
        value:
          'Follows the Indiana Medicaid rule: a physician must make a treatment referral recommending ABA therapy, and the CDE\u2019s own required components include a physician\u2019s referral for autism-specific services. Prior authorization is required on top of the referral for every ABA service, through this plan rather than through Acentra Health.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      telehealth: {
        value:
          'Follows the Indiana Medicaid rule: effective April 1, 2026, codes 97151, 97152, 97153, 97154 and 0373T can no longer be billed with telehealth modifier 95 and require in-person delivery. The plan publishes no ABA telehealth policy of its own.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
      },
      authTurnaround: {
        value:
          'Indiana law sets the binding clock, and it is far faster than the federal one. Since July 1, 2025, IC 27-1-37.5-23 requires a utilization review entity to answer an urgent PA request “not later than twenty-four (24) hours after receiving the request” and every other request “not later than forty-eight (48) hours,” with “weekends and state and federal legal holidays” excluded from both clocks; the chapter\'s “health plan” expressly includes “the Medicaid risk based managed care program” (IC 27-1-37.5-5), and IC 27-1-37.5-28 makes a missed deadline an automatic approval: the service “shall be automatically deemed authorized.” The federal managed-care floor, 42 CFR 438.210(d), is only a ceiling for states (7 calendar days standard for rating periods starting on or after 1/1/2026, extendable 14 days; 72 hours expedited), so the stricter Indiana clock wins. Anthem\'s own Indiana Medicaid Provider Manual (INBCBS-CD-PM-070775-24, April 2025) still prints the pre-statute timelines — non-urgent pre-service “within 5 business days (not including weekends and state-approved holidays) from receipt of the request,” urgent pre-service and concurrent reviews within 48 hours — so hold Anthem to the statute, not the manual. Neither the manual nor Anthem\'s Indiana Medicaid ABA guidelines publish a reauthorization submission lead time.',
        status: 'verified',
        cites: [{ title: 'Ind. Code 27-1-37.5-23 — prior authorization response deadlines', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-23/' }, { title: 'Ind. Code 27-1-37.5-5 — “health plan” includes Medicaid risk-based managed care', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-5/' }, { title: 'Indiana SEA 480 (P.L.144-2025) — enrolled act adding IC 27-1-37.5-23 and -28, eff. July 1, 2025', url: 'https://iga.in.gov/pdf-documents/124/2025/senate/bills/SB0480/SB0480.06.ENRH.pdf' }, { title: 'Anthem BCBS Indiana Medicaid Provider Manual (INBCBS-CD-PM-070775-24)', url: 'https://providers.anthem.com/docs/gpp/IN_CAID_ProviderManual.pdf' }, { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' }],
      },
      coordinationOfBenefits: {
        value:
          'Anthem pays last. Its Indiana Medicaid manual: “Anthem is the payer of last resort per Federal and State guidelines,” and a COB claim must carry the other payer\'s remittance advice/EOP or a letter explaining the denial — paper claims without one are mailed back, electronic ones denied — and must reach Anthem “within 90 days from the date on the other program’s RA/EOP or letter of denial of coverage.” Anthem pays “up to the IHCP allowed amount” and “adjudicates COB claims in alignment with the IHCP Third Party Liability Module” — the module that refuses claims the primary denied as out-of-network, so be in the commercial plan\'s network. If commercial coverage turns up after Anthem paid, Anthem recovers from the other carrier rather than from you. Get this plan\'s ABA PA even when it is secondary: the IHCP Prior Authorization module says that when the member has primary coverage, the provider “must follow the primary insurer\'s requirements for obtaining PA and must also obtain PA from the appropriate IHCP PA contractor (based on the program assignment of the member) to receive payment from the IHCP for the balance of charges not paid by the primary insurance.” The Anthem manual adds nothing of its own on PA-when-secondary beyond Medicare. TRICARE is not a problem here: 32 CFR 199.8 excludes Medicaid from the “double coverage plans” TRICARE pays after, so for a child with both, TRICARE pays before Medicaid.',
        status: 'verified',
        cites: [{ title: 'Anthem BCBS Indiana Medicaid Provider Manual (INBCBS-CD-PM-070775-24)', url: 'https://providers.anthem.com/docs/gpp/IN_CAID_ProviderManual.pdf' }, { title: 'IHCP — Prior Authorization module (PROMOD00012, v7.2, publ. Nov. 20, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/prior-authorization.pdf' }, { title: 'IHCP — Third-Party Liability module (PROMOD00017, v7.2, publ. Oct. 9, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/third-party-liability.pdf' }, { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' }],
      },
    },
    faq: [
      { q: 'Does Anthem Indiana Medicaid cover ABA therapy?', a: 'Yes — under Anthem\'s UM guideline, which restates IHCP criteria: all ABA prior-authorized, 6-month max authorizations (Indiana\'s IC 27-1-37.5-26 says managed-care authorizations are valid at least a year, and nothing yet reconciles the two), up to 40 hours/week requestable, members 20 and younger.' },
      { q: 'What does Anthem require for an ABA prior authorization?', a: 'The PA form, F84.0 diagnosis, testing results, an intake assessment (functioning, severity, social/life skills), the treatment plan, and the child\'s daily schedule — via Availity\'s Interactive Care Reviewer, fax, or phone.' },
      { q: 'Do the 2026 Indiana ABA changes apply to Anthem members?', a: 'Yes — EPSDT-only coverage, the under-21 cutoff, the 4,000-hour lifetime allocation, and telehealth restrictions are state policy that binds every MCE, even though Anthem\'s published guideline predates them.' },
    ],
  },

  'mhs-indiana': {
    slug: 'mhs-indiana',
    family: 'centene',
    cardDesc: 'IHCP criteria + MHS\'s own OTR form: named diagnostic instrument, outcome measure, utilization reporting.',
    assessmentPA: {
      value: 'Required — MHS ABA Outpatient Treatment Request form with a named standardized diagnostic tool, date, and score',
      status: 'verified',
      cites: [
        { title: 'MHS — ABA Outpatient Treatment Request form', url: 'https://www.mhsindiana.com/content/dam/centene/mhsindiana/medicaid/pdfs/508-BH-IN-Medicaid-ABA-OTR.pdf' },
        { title: 'MHS — Behavioral health provider forms', url: 'https://www.mhsindiana.com/providers/behavioral-health/bh-provider-forms.html' },
      ],
    },
    treatmentPA: {
      value: 'Required — Focused vs. Comprehensive, Initial vs. Concurrent; concurrent requests report actual vs. authorized utilization',
      status: 'verified',
      cites: [
        { title: 'MHS — ABA Outpatient Treatment Request form', url: 'https://www.mhsindiana.com/content/dam/centene/mhsindiana/medicaid/pdfs/508-BH-IN-Medicaid-ABA-OTR.pdf' },
        { title: 'MHS — Behavioral health provider forms', url: 'https://www.mhsindiana.com/providers/behavioral-health/bh-provider-forms.html' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD with a named standardized instrument, date, and score on the OTR',
      status: 'verified',
      cites: [
        { title: 'MHS — ABA Outpatient Treatment Request form', url: 'https://www.mhsindiana.com/content/dam/centene/mhsindiana/medicaid/pdfs/508-BH-IN-Medicaid-ABA-OTR.pdf' },
      ],
    },
    payer: 'MHS — Managed Health Services (Indiana)',
    state: 'IN', kind: 'medicaid-mco', parent: 'Indiana Medicaid (IHCP)',
    pill: 'Payer Guide · MHS (Indiana)',
    h1: 'MHS Indiana ABA coverage (Hoosier Healthwise / HIP).',
    metaTitle: 'MHS Indiana Medicaid ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How MHS (Managed Health Services, Centene) administers Indiana Medicaid ABA — the ABA Outpatient Treatment Request form, required diagnostic and outcome instruments, utilization reporting at reauthorization, and fax workflow.',
    intro: [
      'MHS — Centene\'s Indiana plan, serving Hoosier Healthwise and HIP — applies the IHCP clinical criteria for ABA, but funnels every request through its own ABA Outpatient Treatment Request (OTR) form. That form is where requests live or die: it demands a named standardized diagnostic instrument with date and score, a designated outcome measure for the whole treatment episode, and utilization reporting at reauthorization. Teams that pre-collect what the form asks for start families weeks faster.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'IHCP MCE (Hoosier Healthwise, HIP; Centene)' },
      { label: 'Clinical rules', value: 'IHCP criteria (no distinct live MHS clinical policy)' },
      { label: 'Prior auth', value: 'Required — all ABA codes on the OTR (97151–97158, 0362T, 0373T)' },
      { label: 'Diagnosis', value: 'Named instrument + date + score required (ADI-R, ADOS, CARS-2, etc.)' },
      { label: 'Outcome measure', value: 'One instrument for the whole episode (VB-MAPP, ABLLS, Vineland…)' },
      { label: 'Submission', value: 'Fax OTR to (866) 694-3649; UM (877) 647-4848; portal accepted' },
      { label: 'Diagnosis recency', value: 'State rule: CDE >1 year old needs an updated statement of need' },
    ],
    sections: [
      {
        h2: 'The OTR form is the funnel',
        body: [
          'MHS\'s OTR covers every ABA code and distinguishes Focused vs. Comprehensive treatment and Initial vs. Concurrent requests. The formal ASD diagnosis must name the standardized tool used — ADI-R, ADOS, CARS-2, M-CHAT, ASSQ, or GARS — with the administration date, score, and diagnosing provider. The treatment episode must also commit to at least one outcome instrument (VB-MAPP, ABLLS, AFLS, PEAK, or Vineland) used throughout, with units requested per authorization timeframe, the FBA/BIP, and parent-goal documentation attached. Incomplete or illegible forms are returned, which restarts the clock.',
          'At reauthorization, concurrent requests must report the "prescription fulfillment rate" — actual utilization against authorized hours. Under-delivery invites hour cuts, so requested intensity should match what the family can genuinely attend, a fact best captured at intake.',
        ],
        cites: [
          { title: 'MHS — ABA Outpatient Treatment Request form', url: 'https://www.mhsindiana.com/content/dam/centene/mhsindiana/medicaid/pdfs/508-BH-IN-Medicaid-ABA-OTR.pdf' },
          { title: 'MHS — Behavioral health provider forms', url: 'https://www.mhsindiana.com/providers/behavioral-health/bh-provider-forms.html' },
        ],
      },
    ],
    collect: [
      { title: 'Diagnostic instrument + score', desc: 'The named tool, date, score, and diagnosing provider — mandatory on the OTR and the most common intake bottleneck.' },
      { title: 'Outcome-measure plan', desc: 'Which instrument (VB-MAPP, Vineland, etc.) the episode will track — decide before the first request.' },
      { title: 'Units per code per timeframe', desc: 'The OTR requests intensity by code — align intake and clinical planning early.' },
      { title: 'Realistic availability', desc: 'Concurrent requests report fulfillment rate — request hours the family will actually use.' },
    ],
    sources: [
      { title: 'MHS — ABA Outpatient Treatment Request form', url: 'https://www.mhsindiana.com/content/dam/centene/mhsindiana/medicaid/pdfs/508-BH-IN-Medicaid-ABA-OTR.pdf' },
      { title: 'MHS — Behavioral health provider forms (incl. ABA tip sheet)', url: 'https://www.mhsindiana.com/providers/behavioral-health/bh-provider-forms.html' },
      { title: 'IHCP Bulletin BT202627 — ABA policy updates', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' },
      { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
      { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' },
      { title: 'IHCP Bulletin BT2026123 \u2014 BASC-3 PRQ to BASC-4 transition (7/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026123.pdf' },
      { title: 'IHCP Bulletin BT202519 \u2014 ABA enrollment FAQ', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202519.pdf' },
      { title: 'IHCP Bulletin BT2026136 \u2014 Minimum caregiver coaching/training requirements for ABA clarified (8/18/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026136.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Follows the Indiana Medicaid rule: ABA performed by a BCaBA or credentialed RBT must be under the direct supervision of a BCBA, BCBA-D or HSPP, and since April 1, 2026 at least 1 hour of BCBA (or IHCP-approved qualifying clinician) supervision is required per 8 hours of technician-delivered therapy. Behavior assessments may only be performed by a psychologist, BCBA-D or master\'s-level BCBA. IHCP states that its ABA documentation requirements apply to both fee-for-service and managed care, and this plan publishes no supervision standard of its own.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published by Indiana Medicaid or by this plan. IHCP is explicit that within managed care \u201cindividual managed care entities (MCEs) establish and publish their own billing and reimbursement requirements,\u201d so unlike the clinical criteria, code-pair rules are not inherited from the state by default.',
        status: 'unverified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
        verifyVia: 'The MCE directly \u2014 ask whether 97155 pays alongside 97153 for the same clock time, and request the plan\'s billing and reimbursement requirements in writing.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Follows the Indiana Medicaid limits: up to 40 hours per week may be requested with anything beyond that needing an additional PA; IHCP policy limits each ABA PA request to six months; and since April 1, 2026 comprehensive ABA (16+ hours/week, modifier UA) draws from a 4,000-hour (16,000-unit) lifetime allocation per member, with 97155 and 97156 excluded and targeted ABA (\u226415 hours/week) exempt. No per-day MUE ceiling is published at either level. Open question for managed care: IC 27-1-37.5-26(b), in force since July 1, 2025 and reaching Medicaid risk-based managed care through IC 27-1-37.5-5(a)(3), says an authorization "shall be valid for at least one (1) year after the date the health care provider receives the authorization," and CareSource\'s July 2025 IHCP Works deck lists "Approved Authorization — Valid for 365 calendar days." But IHCP Bulletin BT2026136 (8/18/2026), addressed to the MCOs and the FFS PA-UM contractor alike, still describes ABA as running on a "standard six-month authorization period." No IHCP bulletin or MCE notice we could find reconciles the two, so ask the MCE which span it is issuing before you plan a reauthorization calendar.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT2026136 — minimum caregiver coaching and training for ABA clarified (8/18/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026136.pdf' }, { title: 'Ind. Code 27-1-37.5-26 — authorization valid for at least one year', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-26/' }, { title: 'Ind. Code 27-1-37.5-5 — “health plan” includes Medicaid risk-based managed care', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-5/' }, { title: 'CareSource — IHCP Works 2025 Prior Authorization 101 deck', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2025-CareSource-Prior-Authorization-101.pdf' }],
      },
      placeOfService: {
        value:
          'Follows the Indiana Medicaid rule: the treatment plan must be built around the member\'s school attendance (including homeschooling) and other daily activities, while services focusing solely on recreational or educational outcomes are not covered, and neither are services duplicative of an IEP that address the same goals using the same techniques as the treatment plan.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }],
      },
      billAsProvider: {
        value:
          'Follows the Indiana Medicaid rule: ABA rendered by a BCaBA or RBT must be billed under the NPI of an IHCP-enrolled ABA therapist or school corporation, on a professional claim. Since July 1, 2025 the rendering practitioner must be enrolled under ABA specialty 615, 624 or 625, and since April 1, 2025 the rendering NPI must align with the credential-level modifier (U1 RBT / U2 BCaBA / U3 BCBA-HSPP). Plan-level claim formatting may still differ \u2014 MCEs publish their own billing requirements.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
      },
      noteSignature: {
        value:
          'Neither Indiana Medicaid nor this plan publishes a session-note signature rule. The state\'s published signature requirements attach to the plan documents \u2014 the behavior assessment and the treatment plan must each be signed by the lead analyst and the parent or guardian \u2014 and BT202562, the bulletin titled for ABA documentation requirements, does not reach the individual session note. IHCP states its documentation requirements apply to managed care as well as fee-for-service, but also that MCEs establish and publish their own billing and reimbursement requirements, so the gap is not automatically filled at the state level.',
        status: 'unverified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
        verifyVia: 'The MCE directly \u2014 ask for its ABA documentation and session-note standard in writing. BT202562 also promises a future bulletin clarifying documentation requirements under the updated ABA State Plan Amendment; check for it before relying on this.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Indiana Medicaid rule: ABA is covered for members 20 years of age and younger. Effective April 1, 2026 coverage runs exclusively through EPSDT, and for dates of service on or after October 1, 2026 IHCP will not authorize or reimburse ABA for members 21 and older \u2014 a state policy that binds every MCE.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the Indiana Medicaid rule: a CDE more than one year old requires an updated statement of need, which must include a referral from an appropriate referring practitioner and an up-to-date behavior assessment completed by the ABA provider. Members continuing current services need no new CDE but do need an updated behavior assessment and treatment plan. A behavior assessment completed within the previous six months should be obtained from the original provider rather than repeated. IHCP states these documentation requirements apply to managed care as well as fee-for-service.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }, { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Follows the Indiana Medicaid rule: the CDE must be performed by a doctoral-level licensed clinical psychologist endorsed as an HSPP, a licensed physician, a licensed APRN, or a licensed physician assistant, each with specialized training in the current DSM autism criteria. MHS adds a documentation requirement rather than a credential one \u2014 its ABA Outpatient Treatment Request form requires the diagnosing provider to be named alongside the instrument, date and score.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }, { title: 'MHS \u2014 ABA Outpatient Treatment Request form', url: 'https://www.mhsindiana.com/content/dam/centene/mhsindiana/medicaid/pdfs/508-BH-IN-Medicaid-ABA-OTR.pdf' }],
      },
      diagnosticTools: {
        value:
          'MHS is the strictest front door in Indiana on this field, because its form will not process without it. The formal ASD diagnosis must name the standardized tool used \u2014 the OTR lists ADI-R, ADOS, CARS-2, M-CHAT, ASSQ or GARS \u2014 with the administration date, the score and the diagnosing provider. Separately, the treatment episode must commit to at least one outcome instrument used throughout (VB-MAPP, ABLLS, AFLS, PEAK or Vineland). Underneath both sits the state\'s own behavior-assessment requirement: the Vineland Comprehensive Parent Interview Form with the Maladaptive Behavior domain, the BASC Parenting Relationship Questionnaire (BASC-4 only after October 1, 2026) and an age-appropriate direct skills assessment, with the full scoring report and graphs. Incomplete or illegible OTRs are returned, which restarts the clock.',
        status: 'verified',
        cites: [{ title: 'MHS \u2014 ABA Outpatient Treatment Request form', url: 'https://www.mhsindiana.com/content/dam/centene/mhsindiana/medicaid/pdfs/508-BH-IN-Medicaid-ABA-OTR.pdf' }, { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT2026123 \u2014 BASC-3 PRQ to BASC-4 transition (7/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026123.pdf' }],
      },
      referral: {
        value:
          'Follows the Indiana Medicaid rule: a physician must make a treatment referral recommending ABA therapy, and the CDE\u2019s own required components include a physician\u2019s referral for autism-specific services. Prior authorization is required on top of the referral for every ABA service, through this plan rather than through Acentra Health.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      telehealth: {
        value:
          'Follows the Indiana Medicaid rule: effective April 1, 2026, codes 97151, 97152, 97153, 97154 and 0373T can no longer be billed with telehealth modifier 95 and require in-person delivery. The plan publishes no ABA telehealth policy of its own.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
      },
      authTurnaround: {
        value:
          'MHS publishes the Indiana statutory clock as its own: “Urgent (expedited) PA requests will be reviewed within 24 hours of receipt of a complete request,” and “Non-urgent PA requests will be reviewed, and a determination will be issued within 48 hours of receipt of a complete request,” with “These timeframes do not include weekends or federal/state-approved holidays.” Note the clock starts on a complete request — an OTR missing a named standardized tool or the fulfillment rate is not complete. That is IC 27-1-37.5-23 (eff. 7/1/2025), which applies to Medicaid risk-based managed care and deems a service authorized if the deadline is missed; the federal floor (42 CFR 438.210(d): 7 calendar days, 72 hours expedited) is looser. Submission timing: contracted providers must request routine PAs “at least 48 hours prior to the date of service” (manual) — MHS publishes no separate ABA reauthorization lead time, only that concurrent OTRs report the prescription fulfillment rate.',
        status: 'verified',
        cites: [{ title: 'MHS Indiana — Prior Authorization page', url: 'https://www.mhsindiana.com/providers/prior-authorization.html' }, { title: 'MHS Provider Manual 2025 (0725.PR.P.JB)', url: 'https://www.mhsindiana.com/content/dam/centene/mhsindiana/medicaid/pdfs/Provider-Manual-2025-508.pdf' }, { title: 'Ind. Code 27-1-37.5-23 — prior authorization response deadlines', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-23/' }, { title: 'Ind. Code 27-1-37.5-5 — “health plan” includes Medicaid risk-based managed care', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-5/' }, { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' }],
      },
      coordinationOfBenefits: {
        value:
          'MHS pays last: “Federal and state law requires IHCP be the payer of last resort,” and MHS says its own TPL data “is more current than IHCP data and should be used when billing MHS” (check the MHS portal, not only the state EVS). Bill the other insurance first; claims with primary insurance “must be received within 365 days of the date of service with primary EOB information” (or within 60 days of a primary EOB received after that), and COB claims sent electronically or through the portal need no paper EOP. If the other carrier does not answer within 90 days of billing, the claim can go to MHS showing the billing attempt, subject to repayment once the primary pays. Get this plan\'s ABA PA even when it is secondary: the IHCP Prior Authorization module says that when the member has primary coverage, the provider “must follow the primary insurer\'s requirements for obtaining PA and must also obtain PA from the appropriate IHCP PA contractor (based on the program assignment of the member) to receive payment from the IHCP for the balance of charges not paid by the primary insurance.” The MHS manual publishes nothing different on PA-when-secondary. TRICARE is not a problem here: 32 CFR 199.8 excludes Medicaid from the “double coverage plans” TRICARE pays after, so for a child with both, TRICARE pays before Medicaid.',
        status: 'verified',
        cites: [{ title: 'MHS Provider Manual 2025 (0725.PR.P.JB)', url: 'https://www.mhsindiana.com/content/dam/centene/mhsindiana/medicaid/pdfs/Provider-Manual-2025-508.pdf' }, { title: 'IHCP — Prior Authorization module (PROMOD00012, v7.2, publ. Nov. 20, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/prior-authorization.pdf' }, { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' }],
      },
    },
    faq: [
      { q: 'Does MHS Indiana cover ABA therapy?', a: 'Yes — MHS administers the IHCP ABA benefit for Hoosier Healthwise and HIP members under state clinical criteria, with prior authorization on all ABA codes via its Outpatient Treatment Request form.' },
      { q: 'What does MHS require on an ABA authorization?', a: 'A formal ASD diagnosis with a named standardized instrument, date, and score; a committed outcome measure for the episode; units per code; the FBA/BIP; and parent goals. Fax the OTR to (866) 694-3649; incomplete forms are returned.' },
      { q: 'What happens at MHS reauthorization?', a: 'Concurrent requests must report actual utilization versus authorized hours (the "prescription fulfillment rate") — sustained under-delivery risks reduced hours, so request what the family can actually attend.' },
    ],
  },

  'caresource-indiana': {
    slug: 'caresource-indiana',
    family: 'caresource',
    cardDesc: 'Defers to IHCP criteria (own policy archived); portal-first PA, one-agency rule, ABA audit posture.',
    assessmentPA: {
      value: 'Required — all ABA prior-authorized per IHCP criteria; portal submission preferred',
      status: 'verified',
      cites: [
        { title: 'CareSource — IN Medicaid prior authorization page', url: 'https://www.caresource.com/in/providers/provider-portal/prior-authorization/medicaid/' },
        { title: 'CareSource — archived IN ABA policy MM-0900 (historical reference)', url: 'https://www.caresource.com/documents/medicaid-in-policy-medical-mm-0900-20220601' },
      ],
    },
    treatmentPA: {
      value: 'Required — 6-month max per IHCP ABA policy, although CareSource\'s July 2025 PA deck states approved authorizations are valid for 365 calendar days; continuation needs updated progress/assessment scores',
      status: 'plan-dependent',
      cites: [
        { title: 'CareSource — IN Medicaid prior authorization page', url: 'https://www.caresource.com/in/providers/provider-portal/prior-authorization/medicaid/' },
        { title: 'CareSource — archived IN ABA policy MM-0900 (historical reference)', url: 'https://www.caresource.com/documents/medicaid-in-policy-medical-mm-0900-20220601' },
        { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
        { title: 'IHCP Bulletin BT2026136 — minimum caregiver coaching and training for ABA clarified (8/18/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026136.pdf' },
        { title: 'Ind. Code 27-1-37.5-26 — authorization valid for at least one year', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-26/' },
        { title: 'CareSource — IHCP Works 2025 Prior Authorization 101 deck', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2025-CareSource-Prior-Authorization-101.pdf' },
      ],
      verifyVia: 'IHCP\'s ABA rule caps each PA request at six months (BH module; BT2026136, 8/18/2026, still calls it the "standard six-month authorization period"), while IC 27-1-37.5-26(b), which reaches Medicaid managed care, says an authorization "shall be valid for at least one (1) year." No IHCP bulletin or MCE notice reconciles the two. Ask the MCE\'s UM team what authorization span it is issuing for ABA.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes \u2014 ASD with a comprehensive diagnostic evaluation (CDE) + physician referral',
      status: 'verified',
      cites: [
        { title: 'CareSource — IN Medicaid prior authorization page', url: 'https://www.caresource.com/in/providers/provider-portal/prior-authorization/medicaid/' },
        { title: 'IHCP — Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
      ],
    },
    payer: 'CareSource Indiana',
    state: 'IN', kind: 'medicaid-mco', parent: 'Indiana Medicaid (IHCP)',
    pill: 'Payer Guide · CareSource (IN)',
    h1: 'CareSource Indiana ABA coverage (Hoosier Healthwise / HIP).',
    metaTitle: 'CareSource Indiana Medicaid ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How CareSource administers Indiana Medicaid ABA — deference to IHCP criteria after archiving its own policy, portal-first prior authorization, the one-lead-analyst/one-agency rule, and its ABA audit posture.',
    intro: [
      'CareSource serves Indiana Medicaid members on Hoosier Healthwise and HIP, and it\'s unusually explicit about its clinical stance on ABA: it archived its own medical policy (MM-0900) at the end of 2022 and reserves the right to follow CMS and state guidelines without a formal documented policy. In practice that means IHCP criteria govern, and the CareSource layer is process — a portal-first PA workflow, the IHCP universal form, and a documented audit posture on ABA claims.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'IHCP MCE (Hoosier Healthwise, HIP)' },
      { label: 'Clinical rules', value: 'IHCP criteria (own ABA policy archived 12/31/2022)' },
      { label: 'Prior auth', value: 'Required for all ABA; CareSource Provider Portal preferred' },
      { label: 'Contacts', value: 'UM (844) 607-2831 · fax (844) 432-8924' },
      { label: 'One-agency rule', value: 'One lead analyst and one ABA agency per member at a time' },
      { label: 'Audit posture', value: 'Post-payment audits / prepay review on ABA compliance' },
      { label: 'Diagnosis recency', value: 'State rule: CDE >1 year old needs an updated statement of need' },
    ],
    sections: [
      {
        h2: 'How CareSource runs ABA authorization',
        body: [
          'Submissions go through the CareSource Provider Portal (its stated preference, with "immediate approvals" possible for clean requests), by phone to utilization management at (844) 607-2831, or by fax to (844) 432-8924 — using the Indiana Medicaid universal PA request form; there is no CareSource-specific ABA form. The clinical package mirrors IHCP: ASD diagnosis from a licensed physician, HSPP, or qualified specialist; the comprehensive diagnostic evaluation; a behavior identification assessment and treatment plan before services; 6-month maximum authorizations under IHCP ABA policy (CareSource\'s own July 2025 PA deck separately says approved authorizations are "Valid for 365 calendar days," matching IC 27-1-37.5-26 — confirm the span on your approval); and continuation on updated progress and assessment scores.',
        ],
        cites: [
          { title: 'CareSource — IN Medicaid prior authorization page', url: 'https://www.caresource.com/in/providers/provider-portal/prior-authorization/medicaid/' },
          { title: 'CareSource — archived IN ABA policy MM-0900 (historical reference)', url: 'https://www.caresource.com/documents/medicaid-in-policy-medical-mm-0900-20220601' },
        ],
      },
      {
        h2: 'Rules worth knowing from the archived policy',
        body: [
          'MM-0900 is no longer the operative document, but the rules it codified track state policy and remain good intake heuristics: only one lead analyst and one ABA agency per member at a time (transitions need coordination, not overlap); no coverage for services rendered by family or household members; and no coverage for shadow/paraprofessional/companion support or primarily custodial care. CareSource also explicitly runs post-payment audits and prepayment review on ABA — clean documentation from day one is a revenue-protection issue, not just a compliance one.',
        ],
        cites: [
          { title: 'CareSource — archived IN ABA policy MM-0900', url: 'https://www.caresource.com/documents/medicaid-in-policy-medical-mm-0900-20220601' },
        ],
      },
    ],
    collect: [
      { title: 'Current/prior ABA agency', desc: 'The one-agency rule makes transitions a coordination task — get the outgoing provider\'s details and releases at intake.' },
      { title: 'CDE + diagnosis documentation', desc: 'Per IHCP: HSPP/physician-level evaluation, 1-year freshness, physician referral.' },
      { title: 'Age + prior comprehensive hours', desc: 'State under-21 cutoff and 4,000-hour lifetime allocation apply to CareSource members.' },
      { title: 'Documentation discipline', desc: 'CareSource\'s audit posture means session-note and plan quality directly protect revenue.' },
    ],
    sources: [
      { title: 'CareSource — IN Medicaid prior authorization page', url: 'https://www.caresource.com/in/providers/provider-portal/prior-authorization/medicaid/' },
      { title: 'CareSource — archived IN ABA policy MM-0900', url: 'https://www.caresource.com/documents/medicaid-in-policy-medical-mm-0900-20220601' },
      { title: 'IHCP Bulletin BT202627 — ABA policy updates', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' },
      { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
      { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' },
      { title: 'IHCP Bulletin BT2026123 \u2014 BASC-3 PRQ to BASC-4 transition (7/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026123.pdf' },
      { title: 'IHCP Bulletin BT202519 \u2014 ABA enrollment FAQ', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202519.pdf' },
      { title: 'IHCP Bulletin BT2026136 \u2014 Minimum caregiver coaching/training requirements for ABA clarified (8/18/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026136.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Follows the Indiana Medicaid rule: ABA performed by a BCaBA or credentialed RBT must be under the direct supervision of a BCBA, BCBA-D or HSPP, and since April 1, 2026 at least 1 hour of BCBA (or IHCP-approved qualifying clinician) supervision is required per 8 hours of technician-delivered therapy. Behavior assessments may only be performed by a psychologist, BCBA-D or master\'s-level BCBA. IHCP states that its ABA documentation requirements apply to both fee-for-service and managed care, and this plan publishes no supervision standard of its own.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published by Indiana Medicaid or by this plan. IHCP is explicit that within managed care \u201cindividual managed care entities (MCEs) establish and publish their own billing and reimbursement requirements,\u201d so unlike the clinical criteria, code-pair rules are not inherited from the state by default.',
        status: 'unverified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
        verifyVia: 'The MCE directly \u2014 ask whether 97155 pays alongside 97153 for the same clock time, and request the plan\'s billing and reimbursement requirements in writing.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Follows the Indiana Medicaid limits: up to 40 hours per week may be requested with anything beyond that needing an additional PA; IHCP policy limits each ABA PA request to six months; and since April 1, 2026 comprehensive ABA (16+ hours/week, modifier UA) draws from a 4,000-hour (16,000-unit) lifetime allocation per member, with 97155 and 97156 excluded and targeted ABA (\u226415 hours/week) exempt. No per-day MUE ceiling is published at either level. Open question for managed care: IC 27-1-37.5-26(b), in force since July 1, 2025 and reaching Medicaid risk-based managed care through IC 27-1-37.5-5(a)(3), says an authorization "shall be valid for at least one (1) year after the date the health care provider receives the authorization," and CareSource\'s July 2025 IHCP Works deck lists "Approved Authorization — Valid for 365 calendar days." But IHCP Bulletin BT2026136 (8/18/2026), addressed to the MCOs and the FFS PA-UM contractor alike, still describes ABA as running on a "standard six-month authorization period." No IHCP bulletin or MCE notice we could find reconciles the two, so ask the MCE which span it is issuing before you plan a reauthorization calendar.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT2026136 — minimum caregiver coaching and training for ABA clarified (8/18/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026136.pdf' }, { title: 'Ind. Code 27-1-37.5-26 — authorization valid for at least one year', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-26/' }, { title: 'Ind. Code 27-1-37.5-5 — “health plan” includes Medicaid risk-based managed care', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-5/' }, { title: 'CareSource — IHCP Works 2025 Prior Authorization 101 deck', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2025-CareSource-Prior-Authorization-101.pdf' }],
      },
      placeOfService: {
        value:
          'Follows the Indiana Medicaid rule: the treatment plan must be built around the member\'s school attendance (including homeschooling) and other daily activities, while services focusing solely on recreational or educational outcomes are not covered, and neither are services duplicative of an IEP that address the same goals using the same techniques as the treatment plan.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }],
      },
      billAsProvider: {
        value:
          'Follows the Indiana Medicaid rule: ABA rendered by a BCaBA or RBT must be billed under the NPI of an IHCP-enrolled ABA therapist or school corporation, on a professional claim. Since July 1, 2025 the rendering practitioner must be enrolled under ABA specialty 615, 624 or 625, and since April 1, 2025 the rendering NPI must align with the credential-level modifier (U1 RBT / U2 BCaBA / U3 BCBA-HSPP). Plan-level claim formatting may still differ \u2014 MCEs publish their own billing requirements.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
      },
      noteSignature: {
        value:
          'Neither Indiana Medicaid nor this plan publishes a session-note signature rule. The state\'s published signature requirements attach to the plan documents \u2014 the behavior assessment and the treatment plan must each be signed by the lead analyst and the parent or guardian \u2014 and BT202562, the bulletin titled for ABA documentation requirements, does not reach the individual session note. IHCP states its documentation requirements apply to managed care as well as fee-for-service, but also that MCEs establish and publish their own billing and reimbursement requirements, so the gap is not automatically filled at the state level.',
        status: 'unverified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
        verifyVia: 'The MCE directly \u2014 ask for its ABA documentation and session-note standard in writing. BT202562 also promises a future bulletin clarifying documentation requirements under the updated ABA State Plan Amendment; check for it before relying on this.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Indiana Medicaid rule: ABA is covered for members 20 years of age and younger. Effective April 1, 2026 coverage runs exclusively through EPSDT, and for dates of service on or after October 1, 2026 IHCP will not authorize or reimburse ABA for members 21 and older \u2014 a state policy that binds every MCE.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the Indiana Medicaid rule: a CDE more than one year old requires an updated statement of need, which must include a referral from an appropriate referring practitioner and an up-to-date behavior assessment completed by the ABA provider. Members continuing current services need no new CDE but do need an updated behavior assessment and treatment plan. A behavior assessment completed within the previous six months should be obtained from the original provider rather than repeated. IHCP states these documentation requirements apply to managed care as well as fee-for-service.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }, { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Follows the Indiana Medicaid rule \u2014 which is also CareSource\'s stated position, since it archived its own ABA policy (MM-0900) at the end of 2022 and reserves the right to follow CMS and state guidelines without a formal documented policy. The CDE must be performed by a doctoral-level licensed clinical psychologist endorsed as an HSPP, a licensed physician, a licensed APRN, or a licensed physician assistant with specialized training in the current DSM autism criteria. The archived policy\'s looser formulation \u2014 \u201clicensed physician, HSPP, or qualified specialist\u201d \u2014 is no longer the operative document.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }, { title: 'CareSource \u2014 IN Medicaid prior authorization page', url: 'https://www.caresource.com/in/providers/provider-portal/prior-authorization/medicaid/' }, { title: 'CareSource \u2014 archived IN ABA policy MM-0900', url: 'https://www.caresource.com/documents/medicaid-in-policy-medical-mm-0900-20220601' }],
      },
      diagnosticTools: {
        value:
          'Follows the Indiana Medicaid rule: the behavior assessment must include the Vineland Comprehensive Parent Interview Form with the Maladaptive Behavior domain, the BASC Parenting Relationship Questionnaire and an age-appropriate objective direct skills assessment, signed by the lead analyst and parent or guardian, with the complete scoring report including outcome scores and graphs submitted with the PA. Only BASC-4 satisfies the requirement after October 1, 2026. There is no CareSource-specific ABA form \u2014 submissions use the Indiana Medicaid universal PA request form \u2014 so the state\'s package is the package.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT2026123 \u2014 BASC-3 PRQ to BASC-4 transition (7/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026123.pdf' }, { title: 'CareSource \u2014 IN Medicaid prior authorization page', url: 'https://www.caresource.com/in/providers/provider-portal/prior-authorization/medicaid/' }],
      },
      referral: {
        value:
          'Follows the Indiana Medicaid rule: a physician must make a treatment referral recommending ABA therapy, and the CDE\u2019s own required components include a physician\u2019s referral for autism-specific services. Prior authorization is required on top of the referral for every ABA service, through this plan rather than through Acentra Health.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      telehealth: {
        value:
          'Follows the Indiana Medicaid rule: effective April 1, 2026, codes 97151, 97152, 97153, 97154 and 0373T can no longer be billed with telehealth modifier 95 and require in-person delivery. The plan publishes no ABA telehealth policy of its own.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
      },
      authTurnaround: {
        value:
          'CareSource publishes the Indiana statutory clock, marked “Updated July 1st, 2025”: standard pre-service “Forty-eight (48) business hours” and urgent pre-service “Twenty-four (24) business hours,” both excluding weekends and holidays and each extendable 14 calendar days; urgent concurrent 48 hours with no extension; post-service (retro) 30 calendar days. That is IC 27-1-37.5-23, which applies to Medicaid risk-based managed care and deems the service authorized if a deadline is missed; the federal floor (42 CFR 438.210(d): 7 calendar days, 72 hours expedited) is looser. No ABA-specific reauthorization submission lead time is published.',
        status: 'verified',
        cites: [{ title: 'CareSource — IHCP Works 2025 Prior Authorization 101 deck', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2025-CareSource-Prior-Authorization-101.pdf' }, { title: 'Ind. Code 27-1-37.5-23 — prior authorization response deadlines', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-23/' }, { title: 'Ind. Code 27-1-37.5-5 — “health plan” includes Medicaid risk-based managed care', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-5/' }, { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' }],
      },
      coordinationOfBenefits: {
        value:
          'CareSource is secondary to any other coverage (IHCP is payer of last resort), and it publishes its own PA-when-secondary rule, which is narrower than the IHCP module\'s general statement: when CareSource requires PA and another payer is primary, the “Provider must follow the primary insurers requirements and obtain prior authorization,” and must “obtain prior authorization from CareSource when primary payer’s authorization was denied partially or in full” — attaching “the primary payer\'s authorization denial and/or the primary payers EOP denial.” Practically: get the commercial plan\'s ABA authorization first; if it is cut or denied, request CareSource PA with that denial. Bill the primary first and submit its EOB/EOP with the CareSource claim. TRICARE is not a problem here: 32 CFR 199.8 excludes Medicaid from the “double coverage plans” TRICARE pays after, so for a child with both, TRICARE pays before Medicaid.',
        status: 'verified',
        cites: [{ title: 'CareSource — IHCP Works 2025 Prior Authorization 101 deck', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2025-CareSource-Prior-Authorization-101.pdf' }, { title: '42 CFR 433.139 — Medicaid third-party liability, payment of claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' }, { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' }],
      },
    },
    faq: [
      { q: 'Does CareSource Indiana cover ABA therapy?', a: 'Yes — CareSource administers the IHCP ABA benefit under state clinical criteria (it archived its own ABA policy at the end of 2022), with prior authorization on all ABA services.' },
      { q: 'How do I submit an ABA authorization to CareSource Indiana?', a: 'Through the CareSource Provider Portal (preferred), by phone at (844) 607-2831, or fax (844) 432-8924, using the Indiana Medicaid universal PA form.' },
      { q: 'Can a child see two ABA agencies under CareSource?', a: 'No — the plan\'s codified rule is one lead analyst and one ABA agency per member at a time, so provider transitions need coordinated handoffs rather than overlapping services.' },
    ],
  },

  'mdwise-indiana': {
    slug: 'mdwise-indiana',
    family: 'mdwise',
    cardDesc: 'ENDED as an HIP/Hoosier Healthwise MCE effective 1/1/2026 — members reassigned to Anthem, CareSource, or MHS.',
    assessmentPA: {
      value: 'Required — all ABA codes PA-required (97151–97158, 0362T, 0373T) per the BH Reference Guide',
      status: 'verified',
      cites: [
        { title: 'MDwise — Behavioral Health Reference Guide (historical)', url: 'https://www.mdwise.org/Uploads/Public/Documents/MDwise/BH-Reference-Guide.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — IHCP 6-month max applies (Indiana\'s 1-year authorization-validity statute is unreconciled); OTR to medical management via the member\'s delivery system',
      status: 'plan-dependent',
      cites: [
        { title: 'MDwise — Behavioral Health Reference Guide (historical)', url: 'https://www.mdwise.org/Uploads/Public/Documents/MDwise/BH-Reference-Guide.pdf' },
        { title: 'IHCP — Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
        { title: 'IHCP Bulletin BT2026136 — minimum caregiver coaching and training for ABA clarified (8/18/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026136.pdf' },
        { title: 'Ind. Code 27-1-37.5-26 — authorization valid for at least one year', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-26/' },
      ],
      verifyVia: 'IHCP\'s ABA rule caps each PA request at six months (BH module; BT2026136, 8/18/2026, still calls it the "standard six-month authorization period"), while IC 27-1-37.5-26(b), which reaches Medicaid managed care, says an authorization "shall be valid for at least one (1) year." No IHCP bulletin or MCE notice reconciles the two. Ask the MCE\'s UM team what authorization span it is issuing for ABA.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes \u2014 ASD with a comprehensive diagnostic evaluation (CDE) + physician referral',
      status: 'verified',
      cites: [
        { title: 'IHCP — Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
        { title: 'IHCP Bulletin BT202562 — ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' },
      ],
    },
    payer: 'MDwise (Indiana)',
    state: 'IN', kind: 'medicaid-mco', parent: 'Indiana Medicaid (IHCP)',
    pill: 'Payer Guide · MDwise (IN)',
    h1: 'MDwise Indiana ABA coverage (Hoosier Healthwise / HIP).',
    metaTitle: 'MDwise Indiana Medicaid ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How MDwise administers Indiana Medicaid ABA — full deference to IHCP criteria, PA on every ABA code, the delivery-system contact model, and the filing limits that matter to billing.',
    intro: [
      'FSSA ended MDwise\'s participation as a managed care entity for Indiana Medicaid\'s Healthy Indiana Plan (HIP) and Hoosier Healthwise programs effective January 1, 2026 — following a performance review that found MDwise "both the most expensive and the lowest in quality" of the four legacy plans. MDwise members were required to choose a new plan (Anthem, CareSource, or MHS) during a Nov. 1 – Dec. 15, 2025 open-enrollment window, with automatic assignment plus a 90-day plan-change grace period for anyone who didn\'t choose. MDwise — a McLaren company — publishes no ABA clinical policy of its own: its Behavioral Health Reference Guide simply lists every ABA code as prior-authorization-required and points to IHCP criteria. The rest of this guide is kept for historical/reference purposes; for current Indiana Medicaid ABA authorization, use the Anthem, CareSource, or MHS guides.',
    ],
    atGlance: [
      { label: 'Plan status', value: 'ENDED as an HIP/Hoosier Healthwise MCE effective January 1, 2026 — members reassigned to Anthem, CareSource, or MHS' },
      { label: 'Plan type (historical)', value: 'IHCP MCE (Hoosier Healthwise, HIP; McLaren)' },
      { label: 'Clinical rules (historical)', value: 'IHCP criteria — no MDwise ABA policy exists' },
      { label: 'Prior auth (historical)', value: 'Required for every ABA code, both HHW and HIP' },
      { label: 'Out-of-network (historical)', value: 'PA required for ALL services from non-contracted providers' },
      { label: 'Claim filing (historical)', value: '90 days contracted / 180 days non-contracted' },
    ],
    sections: [
      {
        h2: 'How MDwise runs ABA authorization',
        body: [
          'The Behavioral Health Reference Guide lists ABA codes 97151–97158, 0362T, and 0373T as PA-required across both Hoosier Healthwise and HIP, with treatment requests routed to the medical management department for the member\'s delivery system. There\'s no MDwise-specific ABA form — the IHCP universal PA form plus an outpatient treatment request does the work. Because the historical delivery-system structure means the right PA phone and fax vary, run eligibility first and pull the correct contacts from the Quick Contact Guide at MDwise.org/quickcontact rather than reusing last case\'s numbers. Out-of-network providers need PA for every service, and claim filing runs 90 days for contracted providers (180 non-contracted).',
        ],
        cites: [
          { title: 'MDwise — Behavioral Health Reference Guide (historical)', url: 'https://www.mdwise.org/Uploads/Public/Documents/MDwise/BH-Reference-Guide.pdf' },
          { title: 'FSSA — Announces End of MDwise Participation in Indiana Medicaid Programs (11/12/2025)', url: 'https://www.in.gov/fssa/files/MDwise-Participation_FINAL-2025.pdf' },
          { title: 'IHCP Bulletin BT2025157 — MDwise to end participation as a managed care health plan (11/12/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2025157.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Redirect to new MCE', desc: 'MDwise no longer serves HIP/Hoosier Healthwise as of 1/1/2026 — confirm which of Anthem, CareSource, or MHS the member was reassigned to, and use that guide.' },
      { title: 'IHCP clinical package', desc: 'CDE, physician referral, behavior assessment with Vineland/BASC — state criteria govern regardless of MCE.' },
      { title: 'Continuity of care', desc: 'FSSA states existing authorizations/treatments are honored through a transition period — verify current status with the new plan.' },
    ],
    sources: [
      { title: 'FSSA — Announces End of MDwise Participation in Indiana Medicaid Programs (11/12/2025)', url: 'https://www.in.gov/fssa/files/MDwise-Participation_FINAL-2025.pdf' },
      { title: 'IHCP Bulletin BT2025157 — MDwise to end participation as a managed care health plan (11/12/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2025157.pdf' },
      { title: 'MDwise — Behavioral Health Reference Guide (historical)', url: 'https://www.mdwise.org/Uploads/Public/Documents/MDwise/BH-Reference-Guide.pdf' },
      { title: 'IHCP Bulletin BT202627 — ABA policy updates', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' },
      { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
      { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Follows the Indiana Medicaid rule: ABA performed by a BCaBA or credentialed RBT must be under the direct supervision of a BCBA, BCBA-D or HSPP, and since April 1, 2026 at least 1 hour of BCBA (or IHCP-approved qualifying clinician) supervision is required per 8 hours of technician-delivered therapy. Behavior assessments may only be performed by a psychologist, BCBA-D or master\'s-level BCBA. IHCP states that its ABA documentation requirements apply to both fee-for-service and managed care, and this plan publishes no supervision standard of its own.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published by Indiana Medicaid or by this plan. IHCP is explicit that within managed care \u201cindividual managed care entities (MCEs) establish and publish their own billing and reimbursement requirements,\u201d so unlike the clinical criteria, code-pair rules are not inherited from the state by default.',
        status: 'unverified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
        verifyVia: 'The MCE directly \u2014 ask whether 97155 pays alongside 97153 for the same clock time, and request the plan\'s billing and reimbursement requirements in writing.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Follows the Indiana Medicaid limits: up to 40 hours per week may be requested with anything beyond that needing an additional PA; IHCP policy limits each ABA PA request to six months; and since April 1, 2026 comprehensive ABA (16+ hours/week, modifier UA) draws from a 4,000-hour (16,000-unit) lifetime allocation per member, with 97155 and 97156 excluded and targeted ABA (\u226415 hours/week) exempt. No per-day MUE ceiling is published at either level. Open question for managed care: IC 27-1-37.5-26(b), in force since July 1, 2025 and reaching Medicaid risk-based managed care through IC 27-1-37.5-5(a)(3), says an authorization "shall be valid for at least one (1) year after the date the health care provider receives the authorization," and CareSource\'s July 2025 IHCP Works deck lists "Approved Authorization — Valid for 365 calendar days." But IHCP Bulletin BT2026136 (8/18/2026), addressed to the MCOs and the FFS PA-UM contractor alike, still describes ABA as running on a "standard six-month authorization period." No IHCP bulletin or MCE notice we could find reconciles the two, so ask the MCE which span it is issuing before you plan a reauthorization calendar.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT2026136 — minimum caregiver coaching and training for ABA clarified (8/18/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026136.pdf' }, { title: 'Ind. Code 27-1-37.5-26 — authorization valid for at least one year', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-26/' }, { title: 'Ind. Code 27-1-37.5-5 — “health plan” includes Medicaid risk-based managed care', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-5/' }, { title: 'CareSource — IHCP Works 2025 Prior Authorization 101 deck', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2025-CareSource-Prior-Authorization-101.pdf' }],
      },
      placeOfService: {
        value:
          'Follows the Indiana Medicaid rule: the treatment plan must be built around the member\'s school attendance (including homeschooling) and other daily activities, while services focusing solely on recreational or educational outcomes are not covered, and neither are services duplicative of an IEP that address the same goals using the same techniques as the treatment plan.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }],
      },
      billAsProvider: {
        value:
          'Follows the Indiana Medicaid rule: ABA rendered by a BCaBA or RBT must be billed under the NPI of an IHCP-enrolled ABA therapist or school corporation, on a professional claim. Since July 1, 2025 the rendering practitioner must be enrolled under ABA specialty 615, 624 or 625, and since April 1, 2025 the rendering NPI must align with the credential-level modifier (U1 RBT / U2 BCaBA / U3 BCBA-HSPP). Plan-level claim formatting may still differ \u2014 MCEs publish their own billing requirements.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
      },
      noteSignature: {
        value:
          'Neither Indiana Medicaid nor this plan publishes a session-note signature rule. The state\'s published signature requirements attach to the plan documents \u2014 the behavior assessment and the treatment plan must each be signed by the lead analyst and the parent or guardian \u2014 and BT202562, the bulletin titled for ABA documentation requirements, does not reach the individual session note. IHCP states its documentation requirements apply to managed care as well as fee-for-service, but also that MCEs establish and publish their own billing and reimbursement requirements, so the gap is not automatically filled at the state level.',
        status: 'unverified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
        verifyVia: 'The MCE directly \u2014 ask for its ABA documentation and session-note standard in writing. BT202562 also promises a future bulletin clarifying documentation requirements under the updated ABA State Plan Amendment; check for it before relying on this.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Indiana Medicaid rule: ABA is covered for members 20 years of age and younger. Effective April 1, 2026 coverage runs exclusively through EPSDT, and for dates of service on or after October 1, 2026 IHCP will not authorize or reimburse ABA for members 21 and older \u2014 a state policy that binds every MCE.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the Indiana Medicaid rule: a CDE more than one year old requires an updated statement of need, which must include a referral from an appropriate referring practitioner and an up-to-date behavior assessment completed by the ABA provider. Members continuing current services need no new CDE but do need an updated behavior assessment and treatment plan. A behavior assessment completed within the previous six months should be obtained from the original provider rather than repeated. IHCP states these documentation requirements apply to managed care as well as fee-for-service.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }, { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Historical. MDwise published no ABA clinical policy of its own \u2014 its Behavioral Health Reference Guide simply listed every ABA code as prior-authorization-required and pointed to IHCP criteria \u2014 so the state rule governed: the CDE performed by a doctoral-level licensed clinical psychologist endorsed as an HSPP, a licensed physician, a licensed APRN, or a licensed physician assistant with specialized training in the current DSM autism criteria. MDwise ended as an HIP/Hoosier Healthwise MCE on January 1, 2026; for a current member, use the Anthem, CareSource or MHS guide.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }, { title: 'MDwise \u2014 Behavioral Health Reference Guide (historical)', url: 'https://www.mdwise.org/Uploads/Public/Documents/MDwise/BH-Reference-Guide.pdf' }, { title: 'IHCP Bulletin BT2025157 \u2014 MDwise to end participation as a managed care health plan (11/12/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2025157.pdf' }],
      },
      diagnosticTools: {
        value:
          'Historical, and inherited: the state\'s behavior assessment with its three core standardized instruments \u2014 the Vineland Comprehensive Parent Interview Form with the Maladaptive Behavior domain, the BASC Parenting Relationship Questionnaire and an age-appropriate objective direct skills assessment \u2014 signed by the lead analyst and parent or guardian, with the complete scoring report and graphs submitted with the PA. MDwise added no instrument requirement of its own.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'MDwise \u2014 Behavioral Health Reference Guide (historical)', url: 'https://www.mdwise.org/Uploads/Public/Documents/MDwise/BH-Reference-Guide.pdf' }],
      },
      referral: {
        value:
          'Follows the Indiana Medicaid rule: a physician must make a treatment referral recommending ABA therapy, and the CDE\u2019s own required components include a physician\u2019s referral for autism-specific services. Prior authorization is required on top of the referral for every ABA service, through this plan rather than through Acentra Health.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      telehealth: {
        value:
          'Follows the Indiana Medicaid rule: effective April 1, 2026, codes 97151, 97152, 97153, 97154 and 0373T can no longer be billed with telehealth modifier 95 and require in-person delivery. The plan publishes no ABA telehealth policy of its own.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
      },
      authTurnaround: {
        value:
          'Historical — MDwise left HIP and Hoosier Healthwise on January 1, 2026, and “new authorization requests for DOS on or after Jan. 1, 2026, must go to the member’s new managed care entity” (Anthem, CareSource or MHS — use that guide\'s clock). MDwise took requests for dates of service on or before 12/31/2025 until March 31, 2026; from April 1, 2026 its PA-UM fax lines and portal stopped accepting submissions. While active, MDwise\'s September 2025 manual published no decision clock of its own; as a Medicaid risk-based MCE it was bound by IC 27-1-37.5-23 (urgent 24 hours, all other 48 hours, weekends and holidays excluded) from July 1, 2025.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT2025183 — MDwise PA-UM transition update (12/18/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2025183.pdf' }, { title: 'MDwise — Hoosier Healthwise and HIP Provider Manual (historical)', url: 'https://www.mdwise.org/Uploads/Public/Documents/MDwise/hhw_hip_providermanual.pdf' }, { title: 'Ind. Code 27-1-37.5-23 — prior authorization response deadlines', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-23/' }, { title: 'Ind. Code 27-1-37.5-5 — “health plan” includes Medicaid risk-based managed care', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-5/' }],
      },
      coordinationOfBenefits: {
        value:
          'Historical (MDwise left HIP/Hoosier Healthwise 1/1/2026; claims for DOS on or after that date go to the new MCE). MDwise was payer of last resort: providers “must submit claims to the other insurance carrier before submitting to MDwise,” with the primary EOB “within 90 days of the date of the primary explanation of benefits,” and MDwise paid the difference up to its allowable. It paid first and chased the other carrier only for “Early and Periodic Screening, Diagnostic, and Treatment (EPSDT) program and preventive pediatric services” and IV-D child-support coverage. On PA it was explicit: with third-party coverage “the provider is still responsible for obtaining prior authorization for the service and any authorization required by the third-party payer.” A 90-day no-response rule let a claim go to MDwise with proof of the billing attempt.',
        status: 'verified',
        cites: [{ title: 'MDwise — Hoosier Healthwise and HIP Provider Manual (historical)', url: 'https://www.mdwise.org/Uploads/Public/Documents/MDwise/hhw_hip_providermanual.pdf' }, { title: 'IHCP Bulletin BT2025183 — MDwise PA-UM transition update (12/18/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2025183.pdf' }],
      },
    },
    faq: [
      { q: 'Does MDwise still cover ABA therapy in Indiana?', a: 'No — FSSA ended MDwise\'s participation as an MCE for HIP and Hoosier Healthwise effective January 1, 2026. Members were reassigned to Anthem, CareSource, or MHS; use those guides for current ABA authorization.' },
      { q: 'What happened to MDwise members?', a: 'They chose a new plan (Anthem, CareSource, or MHS) during a Nov. 1 – Dec. 15, 2025 open-enrollment window, or were auto-assigned with a 90-day window to switch after January 1, 2026. FSSA states coverage and existing authorizations continue through the transition.' },
      { q: 'Why did Indiana end MDwise\'s Medicaid contract?', a: 'FSSA\'s review found MDwise was "both the most expensive and the lowest in quality" of the four legacy plans; federal rules require at least three plans, which the state still meets with Anthem, CareSource, and MHS.' },
    ],
  },

  'unitedhealthcare-community-plan-indiana': {
    slug: 'unitedhealthcare-community-plan-indiana',
    family: 'unitedhealthcare',
    cardDesc: 'Hoosier Care Connect + PathWays for Aging ABA via the Optum carve-out — not HIP/Hoosier Healthwise.',
    assessmentPA: {
      value: 'Required — via Optum: ABA Treatment Request Form through Provider Express, phone (877) 610-9785, or fax (844) 897-6514',
      status: 'verified',
      cites: [
        { title: 'UHC Community Plan — IHCP Works 2024 Prior Authorization seminar deck', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2024-UHC-Prior-Authorization.pdf' },
        { title: 'UHC Community Plan of Indiana — prior authorization page', url: 'https://www.uhcprovider.com/en/health-plans-by-state/indiana-health-plans/in-comm-plan-home/in-cp-prior-auth.html' },
      ],
    },
    treatmentPA: {
      value: 'Required — Hoosier Care Connect decisions follow IC 27-1-37.5-23 (eff. 7/1/2025): urgent within 24 hours, all other PA requests (including continuations) within 48 hours, weekends and state/federal holidays excluded; a missed deadline means the service is deemed authorized',
      status: 'verified',
      cites: [
        { title: 'Ind. Code 27-1-37.5-23 — prior authorization response deadlines', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-23/' },
        { title: 'Ind. Code 27-1-37.5-5 — “health plan” includes Medicaid risk-based managed care', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-5/' },
        { title: 'Ind. Code 27-1-37.5-28 — missed deadline = deemed authorized', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-28/' },
        { title: 'UHC Community Plan of Indiana — prior authorization page', url: 'https://www.uhcprovider.com/en/health-plans-by-state/indiana-health-plans/in-comm-plan-home/in-cp-prior-auth.html' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD with a comprehensive diagnostic evaluation (CDE) + physician referral',
      status: 'verified',
      cites: [
        { title: 'IHCP — Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
      ],
    },
    payer: 'UnitedHealthcare Community Plan of Indiana',
    state: 'IN', kind: 'medicaid-mco', parent: 'Indiana Medicaid (IHCP)',
    pill: 'Payer Guide · UHC Community Plan (IN)',
    h1: 'UnitedHealthcare Community Plan of Indiana ABA coverage (Hoosier Care Connect + PathWays for Aging).',
    metaTitle: 'UHC Community Plan Indiana (Hoosier Care Connect) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan administers Indiana Medicaid ABA for Hoosier Care Connect — the Optum behavioral-health carve-out, separate ABA network credentialing, the ABA Treatment Request Form, and decision timelines.',
    intro: [
      'UnitedHealthcare Community Plan of Indiana is scoped to Hoosier Care Connect — Indiana\'s plan for aged, blind, and disabled members and children in foster care — and PathWays for Aging, for members 60+ and dual-eligible adults; per FSSA\'s own managed-care plan roster, UHC does NOT serve HIP or Hoosier Healthwise in Indiana, unlike Anthem, CareSource, and MHS. ABA runs through an Optum Behavioral Health carve-out. Clinical criteria default to Indiana Medicaid policy (state rules sit atop UHC\'s stated hierarchy, with InterQual as backstop); the operational reality is that ABA lives on Optum\'s rails: a separate provider network, Provider Express submission, and Optum\'s ABA Treatment Request Form. Given the population it serves, expect a higher share of complex cases at intake — though PathWays for Aging skews toward an adult/dual-eligible population less likely to need pediatric ABA.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'IHCP MCE — Hoosier Care Connect + PathWays for Aging ONLY (not HIP/Hoosier Healthwise)' },
      { label: 'Clinical rules', value: 'Indiana Medicaid policy first, then UHC policy, then InterQual' },
      { label: 'ABA network', value: 'Optum-managed — credentialed separately from UHC medical' },
      { label: 'Prior auth', value: 'Required — ABA Treatment Request Form via Provider Express' },
      { label: 'Timelines', value: 'Hoosier Care Connect: urgent 24 hrs, all other PA 48 hrs, weekends/holidays excluded (IC 27-1-37.5-23); missed deadline = deemed approved' },
      { label: 'Note', value: 'Most routine outpatient BH needs no PA at UHC — ABA is the exception' },
      { label: 'Diagnosis recency', value: 'State rule: CDE >1 year old needs an updated statement of need' },
    ],
    sections: [
      {
        h2: 'The Optum carve-out, in practice',
        body: [
          'Optum was selected by UHC Community Plan to build and manage the Indiana ABA network, which means ABA providers must be in the Optum network — credentialed separately from UHC\'s medical side — and enrolled with Indiana Medicaid before joining. Behavioral-health PA runs by phone at (877) 610-9785 (or the number on the member\'s card), through Provider Express ("Auth Request"), or by faxing the IHCP universal PA form to (844) 897-6514; ABA specifically uses Optum\'s ABA Treatment Request Form from the Provider Express Indiana Medicaid ABA Program page, which also hosts the provider orientation and quick-reference guide.',
          'Decision timelines are set by Indiana law, not by UHC\'s older published figures. Since July 1, 2025, IC 27-1-37.5-23 binds Indiana\'s Medicaid risk-based managed care (IC 27-1-37.5-5(a)(3)), which includes Hoosier Care Connect: an urgent PA request gets an answer “not later than twenty-four (24) hours after receiving the request,” every other request “not later than forty-eight (48) hours,” and “The time frames set forth in this section do not include weekends and state and federal legal holidays.” If UHC misses the deadline, “the health care service subject to prior authorization shall be automatically deemed authorized” (IC 27-1-37.5-28). UHC\'s 2024 Hoosier Care Connect manual still prints slower pre-statute timelines (non-urgent pre-service “Within 5 calendar days,” urgent “Within 48 hours”), and the statute overrides them. The statute does not apply to “health care services provided under” the PathWays for Aging waiver (IC 27-1-37.5-1(c)); for those, the federal Medicaid managed-care ceiling of 7 calendar days (72 hours expedited) applies (42 CFR 438.210(d)). Denials appeal to UHC\'s National Appeals Team (fax (855) 312-1470, phone (866) 556-8166). New PA requirement lists took effect July 1, 2026 — re-check the UHC Indiana prior-auth page each quarter.',
        ],
        cites: [
          { title: 'UHC Community Plan — IHCP Works 2024 Prior Authorization seminar deck', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2024-UHC-Prior-Authorization.pdf' },
          { title: 'UHC Community Plan of Indiana — prior authorization page', url: 'https://www.uhcprovider.com/en/health-plans-by-state/indiana-health-plans/in-comm-plan-home/in-cp-prior-auth.html' },
          { title: 'FSSA — Indiana Medicaid managed care health plans (program-by-MCE roster)', url: 'https://www.in.gov/medicaid/partners/medicaid-partners/managed-care-health-plans/' },
          { title: 'Ind. Code 27-1-37.5-23 — prior authorization response deadlines', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-23/' },
          { title: 'Ind. Code 27-1-37.5-5 — “health plan” includes Medicaid risk-based managed care', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-5/' },
          { title: 'Ind. Code 27-1-37.5-1 — chapter scope (PathWays for Aging waiver excluded)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-1/' },
          { title: 'Ind. Code 27-1-37.5-28 — missed deadline = deemed authorized', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-28/' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
    ],
    collect: [
      { title: 'Program confirmation', desc: 'Confirm the member is on Hoosier Care Connect or PathWays for Aging — UHC does not administer HIP or Hoosier Healthwise in Indiana.' },
      { title: 'Optum network status', desc: 'ABA requires Optum credentialing, separate from UHC medical — confirm before quoting start dates.' },
      { title: 'IHCP clinical package', desc: 'CDE, physician referral, behavior assessment — state criteria govern the request.' },
      { title: 'Guardianship / placement details', desc: 'Foster-care members bring consent and guardianship questions standard intake misses.' },
      { title: 'Age + lifetime-allocation status', desc: 'The 2026 state rules apply to Hoosier Care Connect members too.' },
    ],
    sources: [
      { title: 'UHC — IHCP Works 2024 Prior Authorization deck', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2024-UHC-Prior-Authorization.pdf' },
      { title: 'UHC Community Plan of Indiana — prior authorization page', url: 'https://www.uhcprovider.com/en/health-plans-by-state/indiana-health-plans/in-comm-plan-home/in-cp-prior-auth.html' },
      { title: 'IHCP Bulletin BT202627 — ABA policy updates', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' },
      { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' },
      { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' },
      { title: 'IHCP Bulletin BT2026123 \u2014 BASC-3 PRQ to BASC-4 transition (7/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026123.pdf' },
      { title: 'FSSA \u2014 Indiana Medicaid managed care health plans (program-by-MCE roster)', url: 'https://www.in.gov/medicaid/partners/medicaid-partners/managed-care-health-plans/' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Follows the Indiana Medicaid rule: ABA performed by a BCaBA or credentialed RBT must be under the direct supervision of a BCBA, BCBA-D or HSPP, and since April 1, 2026 at least 1 hour of BCBA (or IHCP-approved qualifying clinician) supervision is required per 8 hours of technician-delivered therapy. Behavior assessments may only be performed by a psychologist, BCBA-D or master\'s-level BCBA. IHCP states that its ABA documentation requirements apply to both fee-for-service and managed care, and this plan publishes no supervision standard of its own.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published by Indiana Medicaid or by this plan. IHCP is explicit that within managed care \u201cindividual managed care entities (MCEs) establish and publish their own billing and reimbursement requirements,\u201d so unlike the clinical criteria, code-pair rules are not inherited from the state by default.',
        status: 'unverified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
        verifyVia: 'The MCE directly \u2014 ask whether 97155 pays alongside 97153 for the same clock time, and request the plan\'s billing and reimbursement requirements in writing.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Follows the Indiana Medicaid limits: up to 40 hours per week may be requested with anything beyond that needing an additional PA; IHCP policy limits each ABA PA request to six months; and since April 1, 2026 comprehensive ABA (16+ hours/week, modifier UA) draws from a 4,000-hour (16,000-unit) lifetime allocation per member, with 97155 and 97156 excluded and targeted ABA (\u226415 hours/week) exempt. No per-day MUE ceiling is published at either level. Open question for managed care: IC 27-1-37.5-26(b), in force since July 1, 2025 and reaching Medicaid risk-based managed care through IC 27-1-37.5-5(a)(3), says an authorization "shall be valid for at least one (1) year after the date the health care provider receives the authorization," and CareSource\'s July 2025 IHCP Works deck lists "Approved Authorization — Valid for 365 calendar days." But IHCP Bulletin BT2026136 (8/18/2026), addressed to the MCOs and the FFS PA-UM contractor alike, still describes ABA as running on a "standard six-month authorization period." No IHCP bulletin or MCE notice we could find reconciles the two, so ask the MCE which span it is issuing before you plan a reauthorization calendar.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT2026136 — minimum caregiver coaching and training for ABA clarified (8/18/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026136.pdf' }, { title: 'Ind. Code 27-1-37.5-26 — authorization valid for at least one year', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-26/' }, { title: 'Ind. Code 27-1-37.5-5 — “health plan” includes Medicaid risk-based managed care', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-5/' }, { title: 'CareSource — IHCP Works 2025 Prior Authorization 101 deck', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2025-CareSource-Prior-Authorization-101.pdf' }],
      },
      placeOfService: {
        value:
          'Follows the Indiana Medicaid rule: the treatment plan must be built around the member\'s school attendance (including homeschooling) and other daily activities, while services focusing solely on recreational or educational outcomes are not covered, and neither are services duplicative of an IEP that address the same goals using the same techniques as the treatment plan.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }],
      },
      billAsProvider: {
        value:
          'Follows the Indiana Medicaid rule: ABA rendered by a BCaBA or RBT must be billed under the NPI of an IHCP-enrolled ABA therapist or school corporation, on a professional claim. Since July 1, 2025 the rendering practitioner must be enrolled under ABA specialty 615, 624 or 625, and since April 1, 2025 the rendering NPI must align with the credential-level modifier (U1 RBT / U2 BCaBA / U3 BCBA-HSPP). Plan-level claim formatting may still differ \u2014 MCEs publish their own billing requirements.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
      },
      noteSignature: {
        value:
          'Neither Indiana Medicaid nor this plan publishes a session-note signature rule. The state\'s published signature requirements attach to the plan documents \u2014 the behavior assessment and the treatment plan must each be signed by the lead analyst and the parent or guardian \u2014 and BT202562, the bulletin titled for ABA documentation requirements, does not reach the individual session note. IHCP states its documentation requirements apply to managed care as well as fee-for-service, but also that MCEs establish and publish their own billing and reimbursement requirements, so the gap is not automatically filled at the state level.',
        status: 'unverified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
        verifyVia: 'The MCE directly \u2014 ask for its ABA documentation and session-note standard in writing. BT202562 also promises a future bulletin clarifying documentation requirements under the updated ABA State Plan Amendment; check for it before relying on this.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Indiana Medicaid rule: ABA is covered for members 20 years of age and younger. Effective April 1, 2026 coverage runs exclusively through EPSDT, and for dates of service on or after October 1, 2026 IHCP will not authorize or reimburse ABA for members 21 and older \u2014 a state policy that binds every MCE.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the Indiana Medicaid rule: a CDE more than one year old requires an updated statement of need, which must include a referral from an appropriate referring practitioner and an up-to-date behavior assessment completed by the ABA provider. Members continuing current services need no new CDE but do need an updated behavior assessment and treatment plan. A behavior assessment completed within the previous six months should be obtained from the original provider rather than repeated. IHCP states these documentation requirements apply to managed care as well as fee-for-service.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }, { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Indiana Medicaid policy sits first in UHC\'s own stated criteria hierarchy (state policy, then UHC policy, then InterQual), so the state list governs: the CDE must be performed by a doctoral-level licensed clinical psychologist endorsed as an HSPP, a licensed physician, a licensed APRN, or a licensed physician assistant with specialized training in the current DSM autism criteria. Do not substitute Optum\'s national commercial criteria here \u2014 the carve-out supplies the rails, not the clinical standard.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }, { title: 'UHC Community Plan \u2014 IHCP Works 2024 Prior Authorization seminar deck', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2024-UHC-Prior-Authorization.pdf' }],
      },
      diagnosticTools: {
        value:
          'Follows the Indiana Medicaid rule: the behavior assessment must include the Vineland Comprehensive Parent Interview Form with the Maladaptive Behavior domain, the BASC Parenting Relationship Questionnaire and an age-appropriate objective direct skills assessment, with the complete scoring report, outcome measure scores and graphs submitted with the PA; only BASC-4 satisfies the requirement after October 1, 2026. Requests are submitted on Optum\'s ABA Treatment Request Form from the Provider Express Indiana Medicaid ABA Program page, or by faxing the IHCP universal PA form to (844) 897-6514.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT2026123 \u2014 BASC-3 PRQ to BASC-4 transition (7/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026123.pdf' }, { title: 'UHC Community Plan \u2014 IHCP Works 2024 Prior Authorization seminar deck', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2024-UHC-Prior-Authorization.pdf' }, { title: 'UHC Community Plan of Indiana \u2014 prior authorization page', url: 'https://www.uhcprovider.com/en/health-plans-by-state/indiana-health-plans/in-comm-plan-home/in-cp-prior-auth.html' }],
      },
      referral: {
        value:
          'Follows the Indiana Medicaid rule: a physician must make a treatment referral recommending ABA therapy, and the CDE\u2019s own required components include a physician\u2019s referral for autism-specific services. Prior authorization is required on top of the referral for every ABA service, through this plan rather than through Acentra Health.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      telehealth: {
        value:
          'Follows the Indiana Medicaid rule: effective April 1, 2026, codes 97151, 97152, 97153, 97154 and 0373T can no longer be billed with telehealth modifier 95 and require in-person delivery. The plan publishes no ABA telehealth policy of its own.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
      },
      authTurnaround: {
        value:
          'Indiana law sets the binding clock, and it is far faster than the federal one. Since July 1, 2025, IC 27-1-37.5-23 requires a utilization review entity to answer an urgent PA request “not later than twenty-four (24) hours after receiving the request” and every other request “not later than forty-eight (48) hours,” with “weekends and state and federal legal holidays” excluded from both clocks; the chapter\'s “health plan” expressly includes “the Medicaid risk based managed care program” (IC 27-1-37.5-5), and IC 27-1-37.5-28 makes a missed deadline an automatic approval: the service “shall be automatically deemed authorized.” The federal managed-care floor, 42 CFR 438.210(d), is only a ceiling for states (7 calendar days standard for rating periods starting on or after 1/1/2026, extendable 14 days; 72 hours expedited), so the stricter Indiana clock wins. UHC\'s own published numbers predate the statute and are slower: its 2024 IHCP Works deck lists non-urgent pre-service “Within 7 calendar days of receipt of medical record information required but no longer than 14 calendar days from receipt,” urgent within 48 hours and concurrent within 1 business day, and its Hoosier Care Connect Care Provider Manual (2024 edition) lists non-urgent within 5 calendar days, urgent 48 hours, concurrent 24 hours or next business day. Hold the plan (and Optum, which reviews its ABA) to the statute. No ABA reauthorization lead time is published for the Indiana Medicaid ABA program.',
        status: 'verified',
        cites: [{ title: 'Ind. Code 27-1-37.5-23 — prior authorization response deadlines', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-23/' }, { title: 'Ind. Code 27-1-37.5-5 — “health plan” includes Medicaid risk-based managed care', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-5/' }, { title: 'Indiana SEA 480 (P.L.144-2025) — enrolled act adding IC 27-1-37.5-23 and -28, eff. July 1, 2025', url: 'https://iga.in.gov/pdf-documents/124/2025/senate/bills/SB0480/SB0480.06.ENRH.pdf' }, { title: 'UHC Community Plan — IHCP Works 2024 Prior Authorization seminar deck', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2024-UHC-Prior-Authorization.pdf' }, { title: 'UHC Community Plan of Indiana — Hoosier Care Connect Care Provider Manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/Indiana_Provider_Manual.pdf' }, { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' }],
      },
      coordinationOfBenefits: {
        value:
          'UHC Community Plan pays last: its Hoosier Care Connect manual says it “is, by law, the payer of last resort for eligible members. Therefore, you must bill and obtain an explanation of benefits (EOB) from any other insurance or health care coverage resource before billing,” then attach a complete copy of that EOB to the claim. Get this plan\'s ABA PA even when it is secondary: the IHCP Prior Authorization module says that when the member has primary coverage, the provider “must follow the primary insurer\'s requirements for obtaining PA and must also obtain PA from the appropriate IHCP PA contractor (based on the program assignment of the member) to receive payment from the IHCP for the balance of charges not paid by the primary insurance.” The UHC manual publishes nothing different on PA-when-secondary, and the IHCP TPL module adds that IHCP will not pay for services the primary denied as out-of-network, so be in the commercial plan\'s network. TRICARE is not a problem here: 32 CFR 199.8 excludes Medicaid from the “double coverage plans” TRICARE pays after, so for a child with both, TRICARE pays before Medicaid.',
        status: 'verified',
        cites: [{ title: 'UHC Community Plan of Indiana — Hoosier Care Connect Care Provider Manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/Indiana_Provider_Manual.pdf' }, { title: 'IHCP — Prior Authorization module (PROMOD00012, v7.2, publ. Nov. 20, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/prior-authorization.pdf' }, { title: 'IHCP — Third-Party Liability module (PROMOD00017, v7.2, publ. Oct. 9, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/third-party-liability.pdf' }, { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' }],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of Indiana cover ABA?', a: 'Yes — for Hoosier Care Connect and PathWays for Aging members, administered through an Optum Behavioral Health carve-out under Indiana Medicaid clinical criteria, with PA on all ABA via Optum\'s ABA Treatment Request Form. UHC does not serve HIP or Hoosier Healthwise members in Indiana — those route to Anthem, CareSource, or MHS.' },
      { q: 'How fast does UHC/Optum decide Indiana ABA authorizations?', a: 'Indiana law sets the clock for Hoosier Care Connect: IC 27-1-37.5-23 requires an answer within 24 hours for urgent requests and 48 hours for all others, not counting weekends and state/federal holidays, and a missed deadline means the service is deemed authorized (IC 27-1-37.5-28). UHC\'s older manual figures are slower; the statute controls.' },
      { q: 'Do I need separate credentialing for UHC Indiana ABA?', a: 'Yes — the ABA network is Optum-managed and credentialed separately from UHC medical, and providers must also be enrolled with Indiana Medicaid first.' },
    ],
  },

  'aetna-indiana': {
    slug: 'aetna-indiana',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the Ind. Code 27-8-14.2 mandate layer.',
    assessmentPA: {
      value: 'Required — precertification (form GR-69017-4), per Aetna\'s behavioral health precertification list (eff. 8/1/2024) — CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26), eff. 8/1/2026 (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26), eff. 8/1/2026 (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD only (F84.0\u2013F84.9); ABA for other diagnoses considered experimental',
      status: 'unverified',
      cites: [
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        { title: 'Aetna — Applied behavior analysis medical necessity guide (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      ],
      verifyVia: 'Two Aetna documents disagree on the code range and a human must settle which governs an ABA review: CPB 0554 and CPB 0648 both list "ICD-10 codes covered if selection criteria are met: F84.0 - F84.9", while the Applied behavior analysis medical necessity guide — the guideline Aetna’s behavioral-health reviewers apply — states "a DSM-V diagnosis of Autism Spectrum Disorder (ICD-10: F84.0; F84.3 - F84.9)" in both its quality-of-care elements and its medical-necessity criteria, which leaves out F84.2 (Rett syndrome). The ASD-only half of the claim is not in doubt; the range is.',
      blocker: 'document',
    },
    payer: 'Aetna in Indiana',
    state: 'IN', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Indiana',
    h1: 'Aetna ABA coverage in Indiana: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Indiana: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Indiana families — the national clinical policy, prior authorization, the Ind. Code 27-8-14.2 mandate (ages, caps, exemptions), Indiana behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Indiana, a Aetna card means three layers at once: the carrier\'s national clinical policy, Indiana\'s autism insurance mandate (Ind. Code 27-8-14.2), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'Ind. Code 27-8-14.2' },
      { label: 'Mandate age', value: 'No age limit in the mandate' },
      { label: 'Mandate caps', value: 'No dollar, visit, or hour caps' },
      { label: 'Exempt from mandate', value: 'Individual policies are offer-only; self-funded ERISA' },
      { label: 'Licensure', value: 'IN Licensed Behavior Analyst (PLA, applications live since 5/2025)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Indiana',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in Indiana is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in Indiana.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      {
        h2: 'The Indiana mandate: what it guarantees (and doesn\'t)',
        body: [
          'Indiana’s mandate (2001) was the first autism insurance mandate in the country, and it remains one of the strongest: group accident and sickness policies must cover ASD treatment prescribed by the treating physician under a treatment plan, with no age limits and no dollar, visit, or hour caps — and cost-sharing no less favorable than for physical illness generally. Individual-policy insurers must offer (not automatically include) the coverage, and self-funded ERISA plans are exempt by preemption. There’s little parity tension here because the statute imposes no quantitative limits of its own.',
        ],
        cites: [
      { title: 'Ind. Code § 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' },
      { title: 'Ind. Code § 27-8-14.2-5 (individual offer)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-5/' },
        ],
      },
      {
        h2: 'No Indiana-specific Aetna policy exists',
        body: [
          'We checked: Aetna publishes no Indiana-specific ABA policy, form, or supplement — the national policy plus the state mandate is the whole picture. That’s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, benefit limits) is where Indiana-specific answers come from, not a carrier document.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        ],
      },
      {
        h2: 'Licensure & rates in Indiana',
        body: [
          'Indiana began licensing behavior analysts in May 2025 (IC 25-8.5, via the Professional Licensing Agency’s Behavior Analyst Committee), built on current BCBA/BCaBA certification with biennial renewal. Expect commercial payers to fold the LBA license into credentialing requirements as it phases in. On rates: Aetna does not publish commercial ABA fee schedules for Indiana (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'Indiana PLA — Behavior Analyst licensure', url: 'https://www.in.gov/pla/professions/behavior-analyst/' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Age', desc: 'Where the mandate carries age terms, flag edge cases for the parity analysis rather than turning families away.' },
    ],
    sources: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'Ind. Code § 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' },
      { title: 'Ind. Code § 27-8-14.2-5 (individual offer)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-5/' },
      { title: 'Indiana PLA — Behavior Analyst licensure', url: 'https://www.in.gov/pla/professions/behavior-analyst/' },
      { title: 'Ind. Code \u00a7 25-8.5-3-6 \u2014 practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' },
      { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26), eff. 8/1/2026 (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      { title: 'Aetna — Applied behavior analysis medical necessity guide (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Practitioners delivering ABA under CPB 0554 need BACB national certification or state behavior-analyst licensure, with unlicensed staff working under supervision per practice standards; Aetna publishes no numeric ratio. Indiana now supplies the licensure half: LBA and LABA applications went live May 13, 2025 and practising applied behavior analysis without the licence is prohibited, with direct-contact technicians exempt only while acting under the extended authority and direction of a licensed analyst.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }, { title: 'Indiana PLA \u2014 Behavior Analyst licensure', url: 'https://www.in.gov/pla/professions/behavior-analyst/' }, { title: 'Ind. Code \u00a7 25-8.5-3-6 \u2014 practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' }],
      },
      concurrentBilling: {
        value:
          'Not published. Neither CPB 0554 nor CPB 0648 states whether 97155 and 97153 may be billed for the same clock time, and Aetna publishes no Indiana-specific ABA policy, form or supplement.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'Availity Essentials for the plan\'s reimbursement and claim-editing policies, or the provider-services number on the member\'s card.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Not published. CPB 0554 lists the covered ABA codes but sets no per-day unit ceiling, and Aetna publishes no ABA-specific MUE table. The operative ceiling is the precertification itself, which requires requested hours to be listed code by code \u2014 so the authorization, not a policy, is what bounds the day. CPB 0648 references intensive-intervention research norms of 25 hours a week, 12 months a year as clinical context rather than as a limit.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'The authorization letter itself, plus Availity Essentials for the plan\'s claim-editing and reimbursement policies. Ask whether CMS MUE limits are applied to ABA codes on this plan.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Not published. CPB 0554 and CPB 0648 set coverage criteria and precertification content; neither states what a session note must contain, who signs it, or by when.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'Aetna provider services or Availity \u2014 ask for the documentation standard applied at audit, and keep to the precertification form\'s own data elements in the meantime.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Not published as a payable-settings list. What CPB 0554 does make a submission requirement is adjacent and useful: the precertification form asks for concurrent services \u2014 PT, OT, speech and school services \u2014 plus how care is coordinated across them, so the school picture is data Aetna collects even though it publishes no school-versus-home rule.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'Benefits verification on the specific plan \u2014 ask which places of service are payable for ABA and whether school-based delivery is excluded.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'Not published for ABA. CPB 0554 sets who may deliver the service \u2014 BACB-certified or state-licensed behavior analysts, with unlicensed staff supervised \u2014 but does not state whose NPI carries a technician-delivered 97153 claim, or which degree-level modifiers apply, and Aetna publishes no Indiana-specific ABA supplement. Indiana supplies the licensure half: the supervising analyst must hold the state LBA (or LABA) licence, and direct-contact technicians are exempt from licensure only while acting under the extended authority and direction of a licensed behavior analyst.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Ind. Code \u00a7 25-8.5-3-6 \u2014 practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' }],
        verifyVia: 'Aetna provider services or Availity \u2014 confirm the rendering-versus-billing NPI convention and any required degree-level modifiers before the first claim.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'None from either direction, which is unusual. The carrier\'s national ABA policy states no age limit, and Indiana\'s mandate \u2014 the first autism insurance mandate in the country \u2014 imposes none either: group accident and sickness policies must cover treatment of an autism spectrum disorder prescribed by the insured\'s treating physician under a treatment plan, with no age limit and no dollar, visit or hour cap anywhere in IC 27-8-14.2. Individual-policy insurers must only offer the coverage, and self-funded ERISA plans are outside the chapter entirely \u2014 so an individual or self-funded plan may lawfully lack the benefit.',
        status: 'plan-dependent',
        cites: [{ title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — ask three things: is this a fully-insured Indiana group policy (the mandate reaches it), an individual policy (IC 27-8-14.2-5 requires only that the coverage be offered, so ask whether this policy took it up), or a self-funded ERISA plan (outside the chapter entirely); and if the plan is outside the mandate, what age or hour limit the plan document itself imposes on ABA.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Aetna publishes no recency rule for the ASD diagnostic evaluation, and Indiana\'s mandate sets none for commercial plans \u2014 the one-year CDE rule in this state belongs to Indiana Medicaid, not to IC 27-8-14.2. Capture the evaluation date anyway: the precertification package asks for it.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
        verifyVia: 'The precertification call or Availity, when submitting form GR-69017-4 \u2014 ask whether an evaluation of this age will be accepted for this plan.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'The diagnosis must come from a provider qualified to diagnose within their scope \u2014 a licensed psychologist, psychiatrist or physician. Aetna\'s precertification form (GR-69017-4 (7-26), effective 8/1/2026) asks for the DSM-5 diagnosis code, the diagnosing provider and their credentials. Indiana\'s mandate adds no diagnosing-credential requirement of its own; its only gate is that the treatment be prescribed by the insured\'s treating physician.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }, { title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26), eff. 8/1/2026 (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
      },
      diagnosticTools: {
        value:
          'No instrument is named. CPB 0554 does not require or reference a specific diagnostic tool, and the precertification form asks for the DSM-5 diagnosis code, the diagnosing provider and their credentials rather than for an instrument and score. Indiana\'s mandate names none either, and defines autism spectrum disorder only by reference to the DSM.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
        verifyVia: 'Aetna precertification (Availity or the number on the card) \u2014 ask whether a specific instrument is expected for this plan before scheduling testing.',
        blocker: 'per-case',
      },
      referral: {
        value:
          'Yes on a fully-insured Indiana group plan, and it is the statute that requires it: coverage is \u201climited to treatment that is prescribed by the insured\'s treating physician in accordance with a treatment plan.\u201d The mandate names no credential for the person delivering the service \u2014 that comes from the carrier and from Indiana\'s separate licensure chapter \u2014 but the treating physician\'s prescription is a coverage condition. Capture the prescribing physician and the plan they signed off on. Individual policies (offer-only) and self-funded ERISA plans are outside the chapter.',
        status: 'plan-dependent',
        cites: [{ title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — confirm the funding type first, because the statutory prescription requirement only reaches fully-insured Indiana group policies. On an individual or self-funded ERISA plan, ask the carrier directly whether it requires a treating-physician prescription and a treatment plan, and get the answer with the authorization.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'Aetna covers telehealth for 97151, 97153, 97155, 97156 and 97157 \u2014 97152 is excluded \u2014 billed with GT, 95 or FR modifiers per its telemedicine payment policy. Treat the answer as perishable: Aetna announced it would end ABA telehealth coverage in late 2023 and rescinded the change within weeks. Indiana\'s April 2026 ban on modifier 95 for 97151/97152/97153/97154/0373T is a Medicaid rule and does not reach a commercial Aetna plan.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. A fully insured plan issued in Indiana (group, individual or HMO) falls under IC 27-1-37.5-23, in force since July 1, 2025: urgent PA answered “not later than twenty-four (24) hours after receiving the request,” every other PA “not later than forty-eight (48) hours,” with weekends and state and federal holidays excluded; a missed deadline means the service “shall be automatically deemed authorized” (IC 27-1-37.5-28). A self-funded private-employer plan follows the federal ERISA claims rule instead: urgent within 72 hours; pre-service within a reasonable time “but not later than 15 days after receipt of the claim,” with one 15-day extension; and a request to extend an ongoing course of treatment that involves urgent care must be decided within 24 hours if made at least 24 hours before the authorization expires. Aetna publishes no ABA-specific reauthorization lead time in the precertification materials cited in this guide.',
        status: 'plan-dependent',
        cites: [{ title: 'Ind. Code 27-1-37.5-23 — prior authorization response deadlines', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-23/' }, { title: 'Indiana SEA 480 (P.L.144-2025) — enrolled act adding IC 27-1-37.5-23 and -28, eff. July 1, 2025', url: 'https://iga.in.gov/pdf-documents/124/2025/senate/bills/SB0480/SB0480.06.ENRH.pdf' }, { title: '29 CFR 2560.503-1(f)(2) — ERISA group health plan claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' }],
        verifyVia:
          'Benefits verification call or the Aetna (Availity) provider portal: ask whether the plan is fully insured and issued in Indiana (state 24/48-business-hour clock) or self-funded ERISA (federal 72-hour / 15-day clock), and what turnaround the plan quotes for ABA.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Depends on the family and on plan funding. For a fully insured Indiana group plan, 760 IAC 1-38.1 sets the order: the plan covering the person as employee or subscriber pays before one covering them as a dependent; for a child whose parents are married or living together, “the plan of the parent whose birthday falls earlier in a calendar year” is primary (same birthday: the plan that has covered that parent longest); for parents who are divorced, separated or do not live together, with no court decree, the order is custodial parent, custodial parent\'s spouse, noncustodial parent, noncustodial parent\'s spouse — and a decree that makes one parent responsible for health coverage overrides it. A self-funded ERISA plan sets its COB rules in its plan document instead. TRICARE is always “last pay” behind other health coverage (32 CFR 199.8), so this plan pays before TRICARE. If the child also has Indiana Medicaid, this plan pays first and IHCP pays last — but IHCP still requires its own PA (“must also obtain PA from the appropriate IHCP PA contractor”) and will not pay for services this plan denied as out-of-network, so be in this plan\'s network and get both authorizations.',
        status: 'plan-dependent',
        cites: [{ title: '760 IAC 1-38.1-12 — order of benefits, nondependent before dependent', url: 'https://www.law.cornell.edu/regulations/indiana/760-IAC-1-38.1-12' }, { title: '760 IAC 1-38.1-13 — dependent child, birthday rule', url: 'https://www.law.cornell.edu/regulations/indiana/760-IAC-1-38.1-13' }, { title: '760 IAC 1-38.1-14 — dependent child, separated or divorced parents', url: 'https://www.law.cornell.edu/regulations/indiana/760-IAC-1-38.1-14' }, { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' }, { title: 'IHCP — Prior Authorization module (PROMOD00012, v7.2, publ. Nov. 20, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/prior-authorization.pdf' }, { title: 'IHCP — Third-Party Liability module (PROMOD00017, v7.2, publ. Oct. 9, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/third-party-liability.pdf' }],
        verifyVia:
          'At intake, collect every coverage the child has, both parents\' birthdays and any custody or court-decree terms; then ask Aetna (and the other carrier) on the benefits call whether each plan is fully insured or self-funded and which one they show as primary.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Indiana?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Indiana\'s mandate (Ind. Code 27-8-14.2) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Indiana autism mandate require?', a: 'Indiana’s mandate (2001) was the first autism insurance mandate in the country, and it remains one of the strongest: group accident and sickness policies must cover ASD treatment prescribed by the treating physician under a treatment plan, with no age limits and no dollar, visit, or hour caps — and cost-sharing no less favorable than for physical illness generally. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does Aetna pay for ABA in Indiana?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Indiana Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
    ],
  },

  'cigna-indiana': {
    slug: 'cigna-indiana',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + the Ind. Code 27-8-14.2 mandate layer.',
    assessmentPA: {
      value: 'Not required for assessment codes 97151, 97152, 0362T (per Cigna\'s autism resource guide — EN0499 itself states no prior-authorization rule)',
      status: 'verified',
      cites: [
        { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — assessment + treatment plan with the ABA PA form (see Cigna\'s autism resource guide; EN0499 sets the clinical criteria, not the PA rule)',
      status: 'verified',
      cites: [
        { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD only; Rett syndrome (F84.2) excluded under EN0499',
      status: 'verified',
      cites: [
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    payer: 'Cigna / Evernorth in Indiana',
    state: 'IN', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Indiana',
    h1: 'Cigna / Evernorth ABA coverage in Indiana: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Indiana: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Indiana families — the national clinical policy, prior authorization, the Ind. Code 27-8-14.2 mandate (ages, caps, exemptions), Indiana behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Indiana, a Cigna card means three layers at once: the carrier\'s national clinical policy, Indiana\'s autism insurance mandate (Ind. Code 27-8-14.2), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'Ind. Code 27-8-14.2' },
      { label: 'Mandate age', value: 'No age limit in the mandate' },
      { label: 'Mandate caps', value: 'No dollar, visit, or hour caps' },
      { label: 'Exempt from mandate', value: 'Individual policies are offer-only; self-funded ERISA' },
      { label: 'Licensure', value: 'IN Licensed Behavior Analyst (PLA, applications live since 5/2025)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Indiana',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. That clinical policy is national — what changes in Indiana is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in Indiana.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Indiana mandate: what it guarantees (and doesn\'t)',
        body: [
          'Indiana’s mandate (2001) was the first autism insurance mandate in the country, and it remains one of the strongest: group accident and sickness policies must cover ASD treatment prescribed by the treating physician under a treatment plan, with no age limits and no dollar, visit, or hour caps — and cost-sharing no less favorable than for physical illness generally. Individual-policy insurers must offer (not automatically include) the coverage, and self-funded ERISA plans are exempt by preemption. There’s little parity tension here because the statute imposes no quantitative limits of its own.',
        ],
        cites: [
      { title: 'Ind. Code § 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' },
      { title: 'Ind. Code § 27-8-14.2-5 (individual offer)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-5/' },
        ],
      },
      {
        h2: 'No Indiana-specific Cigna policy exists',
        body: [
          'We checked: Cigna / Evernorth publishes no Indiana-specific ABA policy, form, or supplement — the national policy plus the state mandate is the whole picture. That’s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, benefit limits) is where Indiana-specific answers come from, not a carrier document.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Indiana',
        body: [
          'Indiana began licensing behavior analysts in May 2025 (IC 25-8.5, via the Professional Licensing Agency’s Behavior Analyst Committee), built on current BCBA/BCaBA certification with biennial renewal. Expect commercial payers to fold the LBA license into credentialing requirements as it phases in. On rates: Cigna does not publish commercial ABA fee schedules for Indiana (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'Indiana PLA — Behavior Analyst licensure', url: 'https://www.in.gov/pla/professions/behavior-analyst/' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Age', desc: 'Where the mandate carries age terms, flag edge cases for the parity analysis rather than turning families away.' },
    ],
    sources: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'Ind. Code § 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' },
      { title: 'Ind. Code § 27-8-14.2-5 (individual offer)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-5/' },
      { title: 'Indiana PLA — Behavior Analyst licensure', url: 'https://www.in.gov/pla/professions/behavior-analyst/' },
      { title: 'Ind. Code \u00a7 25-8.5-3-6 \u2014 practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Assessment and case supervision must come from a BCBA, a licensed behavior analyst, or an independently licensed clinician with documented ABA training, with direct supervision at the standard 1\u20132 hours per 10 hours of direct treatment; Evernorth does not credential non-licensed staff. Indiana adds the licensure layer: LBA/LABA applications went live May 13, 2025 and practising ABA without the licence is prohibited, technicians excepted while directed by a licensed analyst.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Indiana PLA \u2014 Behavior Analyst licensure', url: 'https://www.in.gov/pla/professions/behavior-analyst/' }, { title: 'Ind. Code \u00a7 25-8.5-3-6 \u2014 practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' }],
      },
      concurrentBilling: {
        value:
          'Restrictive, and the restriction is about other therapies as much as about ABA codes. EN0499 does not cover ABA delivered at the same time as another therapy (speech, OT) to the same child, and only one provider may bill a unit of time, with the standard supervision exceptions. Agency-to-agency transitions with overlapping authorization periods require documented coordination.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      noteSignature: {
        value:
          'Every session note needs the date, start and end times, location, focus, a detailed description of the intervention, the persons present, the service type, and the rendering provider\'s name, credential and signature. No countersignature requirement and no signing deadline are published.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      billAsProvider: {
        value:
          'Evernorth does not credential non-licensed staff, so RBT-delivered services bill under the supervising provider, and the treatment plan must name a credentialed supervisor. In Indiana that supervisor must hold the state LBA licence.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Indiana PLA \u2014 Behavior Analyst licensure', url: 'https://www.in.gov/pla/professions/behavior-analyst/' }],
      },
      dailyLimits: {
        value:
          'Not published as a per-day unit ceiling. EN0499 bounds the day from a different direction: ABA is not covered when delivered at the same time as another therapy to the same child, and only one provider can bill a unit of time, with the standard supervision exceptions. Requested intensity is set in the treatment plan and authorized on the ABA PA form rather than against a published cap.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia: 'The treatment authorization itself, and Evernorth Behavioral Health provider services (the behavioral health number on the member\'s card) \u2014 ask whether any per-day MUE is applied to ABA codes on this plan.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Not published as a payable-settings list. Two sourced facts bear on setting nonetheless: the treatment plan must carry dated baseline data per setting, so settings are declared and measured rather than assumed; and every session note must record the location. Whether a given setting is payable is a plan-benefit question.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia: 'Benefits verification on the specific plan \u2014 ask which places of service are payable for ABA, and whether school-based delivery is excluded before you write school goals.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'None from either direction, which is unusual. The carrier\'s national ABA policy states no age limit, and Indiana\'s mandate \u2014 the first autism insurance mandate in the country \u2014 imposes none either: group accident and sickness policies must cover treatment of an autism spectrum disorder prescribed by the insured\'s treating physician under a treatment plan, with no age limit and no dollar, visit or hour cap anywhere in IC 27-8-14.2. Individual-policy insurers must only offer the coverage, and self-funded ERISA plans are outside the chapter entirely \u2014 so an individual or self-funded plan may lawfully lack the benefit.',
        status: 'plan-dependent',
        cites: [{ title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — ask three things: is this a fully-insured Indiana group policy (the mandate reaches it), an individual policy (IC 27-8-14.2-5 requires only that the coverage be offered, so ask whether this policy took it up), or a self-funded ERISA plan (outside the chapter entirely); and if the plan is outside the mandate, what age or hour limit the plan document itself imposes on ABA.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Cigna\'s recency rule attaches to the standardized assessment rather than to the diagnosis, and it is tight: initiation requires a standardized, validated instrument in its current edition administered within 60 days before treatment start. Continued treatment needs current data no more than 60 days old, a repeat standardized assessment within a year, and a re-assessment after any break longer than 60 days. Indiana\'s mandate adds no recency rule of its own.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosingProviders: {
        value:
          'EN0499 as quoted in this guide sets the credential bar for who performs the ABA assessment and supervises the case \u2014 an independently licensed provider or a BCBA \u2014 rather than naming who may make the ASD diagnosis. The diagnosis must be a DSM-5-TR autism spectrum diagnosis, with Rett syndrome (F84.2) excluded. Indiana\'s mandate requires only that the treatment be prescribed by the insured\'s treating physician.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
        verifyVia: 'Evernorth Behavioral Health provider services (the behavioral health number on the member\'s card) \u2014 ask which diagnosing credentials EN0499 accepts.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value:
          'A standardized, validated instrument in its current edition \u2014 the policy gives Vineland-3 as the example rather than a closed list \u2014 administered within 60 days before treatment start, with the deficits it measures mapped to DSM-5-TR ASD domains and into the treatment plan\'s goals. Continued treatment requires a repeat standardized assessment within a year.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      referral: {
        value:
          'Yes on a fully-insured Indiana group plan, and it is the statute that requires it: coverage is \u201climited to treatment that is prescribed by the insured\'s treating physician in accordance with a treatment plan.\u201d The mandate names no credential for the person delivering the service \u2014 that comes from the carrier and from Indiana\'s separate licensure chapter \u2014 but the treating physician\'s prescription is a coverage condition. Capture the prescribing physician and the plan they signed off on. Individual policies (offer-only) and self-funded ERISA plans are outside the chapter.',
        status: 'plan-dependent',
        cites: [{ title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — confirm the funding type first, because the statutory prescription requirement only reaches fully-insured Indiana group policies. On an individual or self-funded ERISA plan, ask the carrier directly whether it requires a treating-physician prescription and a treatment plan, and get the answer with the authorization.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'The most permissive position in this directory: Cigna\'s March 2025 autism resource guide states that all ABA CPT codes are covered telehealth services, with the delivery model chosen on the individual\'s needs. Indiana\'s April 2026 modifier-95 restriction is a Medicaid rule and does not reach a commercial Cigna plan.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. A fully insured plan issued in Indiana (group, individual or HMO) falls under IC 27-1-37.5-23, in force since July 1, 2025: urgent PA answered “not later than twenty-four (24) hours after receiving the request,” every other PA “not later than forty-eight (48) hours,” with weekends and state and federal holidays excluded; a missed deadline means the service “shall be automatically deemed authorized” (IC 27-1-37.5-28). A self-funded private-employer plan follows the federal ERISA claims rule instead: urgent within 72 hours; pre-service within a reasonable time “but not later than 15 days after receipt of the claim,” with one 15-day extension; and a request to extend an ongoing course of treatment that involves urgent care must be decided within 24 hours if made at least 24 hours before the authorization expires. Cigna adds its own submission window: “we encourage providers to request authorizations up to 30 days in advance of or two weeks after the start date of service. A delay in request may result in a retrospective review and could delay the determination for up to 30 days.” Assessment codes 97151, 97152 and 0362T need no PA when the diagnosis is autism and the provider is independently licensed or a BCBA.',
        status: 'plan-dependent',
        cites: [{ title: 'Ind. Code 27-1-37.5-23 — prior authorization response deadlines', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-23/' }, { title: 'Indiana SEA 480 (P.L.144-2025) — enrolled act adding IC 27-1-37.5-23 and -28, eff. July 1, 2025', url: 'https://iga.in.gov/pdf-documents/124/2025/senate/bills/SB0480/SB0480.06.ENRH.pdf' }, { title: '29 CFR 2560.503-1(f)(2) — ERISA group health plan claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' }, { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        verifyVia:
          'Benefits verification call or the Cigna (CignaforHCP) provider portal: ask whether the plan is fully insured and issued in Indiana (state 24/48-business-hour clock) or self-funded ERISA (federal 72-hour / 15-day clock), and what turnaround the plan quotes for ABA.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Depends on the family and on plan funding. For a fully insured Indiana group plan, 760 IAC 1-38.1 sets the order: the plan covering the person as employee or subscriber pays before one covering them as a dependent; for a child whose parents are married or living together, “the plan of the parent whose birthday falls earlier in a calendar year” is primary (same birthday: the plan that has covered that parent longest); for parents who are divorced, separated or do not live together, with no court decree, the order is custodial parent, custodial parent\'s spouse, noncustodial parent, noncustodial parent\'s spouse — and a decree that makes one parent responsible for health coverage overrides it. A self-funded ERISA plan sets its COB rules in its plan document instead. TRICARE is always “last pay” behind other health coverage (32 CFR 199.8), so this plan pays before TRICARE. If the child also has Indiana Medicaid, this plan pays first and IHCP pays last — but IHCP still requires its own PA (“must also obtain PA from the appropriate IHCP PA contractor”) and will not pay for services this plan denied as out-of-network, so be in this plan\'s network and get both authorizations.',
        status: 'plan-dependent',
        cites: [{ title: '760 IAC 1-38.1-12 — order of benefits, nondependent before dependent', url: 'https://www.law.cornell.edu/regulations/indiana/760-IAC-1-38.1-12' }, { title: '760 IAC 1-38.1-13 — dependent child, birthday rule', url: 'https://www.law.cornell.edu/regulations/indiana/760-IAC-1-38.1-13' }, { title: '760 IAC 1-38.1-14 — dependent child, separated or divorced parents', url: 'https://www.law.cornell.edu/regulations/indiana/760-IAC-1-38.1-14' }, { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' }, { title: 'IHCP — Prior Authorization module (PROMOD00012, v7.2, publ. Nov. 20, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/prior-authorization.pdf' }, { title: 'IHCP — Third-Party Liability module (PROMOD00017, v7.2, publ. Oct. 9, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/third-party-liability.pdf' }],
        verifyVia:
          'At intake, collect every coverage the child has, both parents\' birthdays and any custody or court-decree terms; then ask Cigna (and the other carrier) on the benefits call whether each plan is fully insured or self-funded and which one they show as primary.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Indiana?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Indiana\'s mandate (Ind. Code 27-8-14.2) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Indiana autism mandate require?', a: 'Indiana’s mandate (2001) was the first autism insurance mandate in the country, and it remains one of the strongest: group accident and sickness policies must cover ASD treatment prescribed by the treating physician under a treatment plan, with no age limits and no dollar, visit, or hour caps — and cost-sharing no less favorable than for physical illness generally. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does Cigna pay for ABA in Indiana?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Indiana Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
    ],
  },

  'unitedhealthcare-indiana': {
    slug: 'unitedhealthcare-indiana',
    family: 'unitedhealthcare',
    cardDesc: 'Optum Supplemental Clinical Criteria (BH803ABASCC) + the Ind. Code 27-8-14.2 mandate layer.',
    assessmentPA: {
      value: 'Required — step 1 of Optum\'s two-step authorization (assessment auth via Provider Express)',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — a separate treatment authorization after the assessment. “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law,” and continued-care requests go in “no more than 30 days prior to the current approvals on file expiring” (Optum ABA CPT FAQ)',
      status: 'verified',
      cites: [
        { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.)',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      ],
    },
    payer: 'UnitedHealthcare / Optum in Indiana',
    state: 'IN', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Indiana',
    h1: 'UnitedHealthcare / Optum ABA coverage in Indiana: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Indiana: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Indiana families — the national clinical policy, prior authorization, the Ind. Code 27-8-14.2 mandate (ages, caps, exemptions), Indiana behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Indiana, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, Indiana\'s autism insurance mandate (Ind. Code 27-8-14.2), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'Ind. Code 27-8-14.2' },
      { label: 'Mandate age', value: 'No age limit in the mandate' },
      { label: 'Mandate caps', value: 'No dollar, visit, or hour caps' },
      { label: 'Exempt from mandate', value: 'Individual policies are offer-only; self-funded ERISA' },
      { label: 'Licensure', value: 'IN Licensed Behavior Analyst (PLA, applications live since 5/2025)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Indiana',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months and an operational flag when utilization falls below 80% of authorized hours. That clinical policy is national — what changes in Indiana is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in Indiana.',
        ],
        cites: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'The Indiana mandate: what it guarantees (and doesn\'t)',
        body: [
          'Indiana’s mandate (2001) was the first autism insurance mandate in the country, and it remains one of the strongest: group accident and sickness policies must cover ASD treatment prescribed by the treating physician under a treatment plan, with no age limits and no dollar, visit, or hour caps — and cost-sharing no less favorable than for physical illness generally. Individual-policy insurers must offer (not automatically include) the coverage, and self-funded ERISA plans are exempt by preemption. There’s little parity tension here because the statute imposes no quantitative limits of its own.',
        ],
        cites: [
      { title: 'Ind. Code § 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' },
      { title: 'Ind. Code § 27-8-14.2-5 (individual offer)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-5/' },
        ],
      },
      {
        h2: 'Optum\'s Indiana-specific criteria',
        body: [
          'Indiana is one of the states with its own entry in Optum’s ABA State Mandates supplemental criteria: for Indiana members, services are recognized as intensive and may be provided daily, and the document explicitly disclaims any quantitative benefit limits implied by its guidelines — intensity keys to the individualized treatment plan. That’s useful language to cite when a requested intensity draws pushback.',
        ],
        cites: [
      { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'UnitedHealthcare Medicaid in Indiana',
        body: [
          'A family saying “we have UnitedHealthcare” in Indiana may actually be on the carrier’s Medicaid plan — UnitedHealthcare Community Plan of Indiana — which follows the state Medicaid rules, not this commercial policy. Verify which line of business the card belongs to, and use the dedicated guide for the Medicaid plan.',
        ],
      },
      {
        h2: 'Licensure & rates in Indiana',
        body: [
          'Indiana began licensing behavior analysts in May 2025 (IC 25-8.5, via the Professional Licensing Agency’s Behavior Analyst Committee), built on current BCBA/BCaBA certification with biennial renewal. Expect commercial payers to fold the LBA license into credentialing requirements as it phases in. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for Indiana (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'Indiana PLA — Behavior Analyst licensure', url: 'https://www.in.gov/pla/professions/behavior-analyst/' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Line of business', desc: 'Commercial vs. UnitedHealthcare Community Plan of Indiana (Medicaid) — different rules, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Age', desc: 'Where the mandate carries age terms, flag edge cases for the parity analysis rather than turning families away.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Ind. Code § 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' },
      { title: 'Ind. Code § 27-8-14.2-5 (individual offer)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-5/' },
      { title: 'Indiana PLA — Behavior Analyst licensure', url: 'https://www.in.gov/pla/professions/behavior-analyst/' },
      { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      { title: 'Optum \u2014 ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'Ind. Code \u00a7 25-8.5-3-6 \u2014 practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' },
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Optum\'s Supplemental Clinical Criteria set supervision at 1\u20132 hours per 10 hours of direct treatment, with a floor of at least one hour of 97155 per case per month. Indiana adds the licensure layer: LBA/LABA applications went live May 13, 2025 and practising ABA without the licence is prohibited, with direct-contact technicians exempt only while acting under a licensed analyst\'s extended authority and direction.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Indiana PLA \u2014 Behavior Analyst licensure', url: 'https://www.in.gov/pla/professions/behavior-analyst/' }, { title: 'Ind. Code \u00a7 25-8.5-3-6 \u2014 practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' }],
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
        value: 'Optum’s commercial ABA reimbursement policy (2022RP501A, updated June 2026) sets a maximum frequency per day for every code: 97151 32 units (8 hrs), 97152 16 (4 hrs), 97153 32 (8 hrs), 97154 18 (4.5 hrs), 97155 24 (6 hrs), 97156 16 (4 hrs), 97157 16 (4 hrs), 97158 16 (4 hrs), 0362T 16 (4 hrs), 0373T 32 (8 hrs) — and “If a provider bills in excess of 32 units per day, claims may be subject to non-reimbursement or recovery.” The ABA CPT FAQ confirms “For our commercial ABA program MUE’s apply.” There is no weekly hour cap: hours are authorized on documented clinical need, approved units can be shifted among codes within a cluster, and utilization below 80% of authorized hours over a two-week period is addressed at review. Optum’s Indiana State Mandates entry recognizes the services as intensive and able to be provided daily, and disclaims any quantitative benefit limits implied by its guidelines.',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum \u2014 ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      placeOfService: {
        value:
          'Optum\'s exclusions are the operative setting rule: team meetings without the member, 1:1 classroom aides, and any service owed under IDEA are not covered, which makes the school and IEP picture a coverage question rather than background.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
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
      billAsProvider: {
        value:
          'Not published in the Supplemental Clinical Criteria. Optum authorizes by code cluster and names a QHP services cluster (97155\u201397158) distinct from the direct-care cluster (97153, 97154), which implies a credential split on the rendering line but does not state whose NPI carries a technician-delivered 97153 claim or which degree-level modifiers apply.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia: 'Optum provider services or the authorization letter on Provider Express \u2014 confirm the rendering-versus-billing NPI convention and any required modifiers before the first claim.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'None from either direction, which is unusual. The carrier\'s national ABA policy states no age limit, and Indiana\'s mandate \u2014 the first autism insurance mandate in the country \u2014 imposes none either: group accident and sickness policies must cover treatment of an autism spectrum disorder prescribed by the insured\'s treating physician under a treatment plan, with no age limit and no dollar, visit or hour cap anywhere in IC 27-8-14.2. Individual-policy insurers must only offer the coverage, and self-funded ERISA plans are outside the chapter entirely \u2014 so an individual or self-funded plan may lawfully lack the benefit.',
        status: 'plan-dependent',
        cites: [{ title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — ask three things: is this a fully-insured Indiana group policy (the mandate reaches it), an individual policy (IC 27-8-14.2-5 requires only that the coverage be offered, so ask whether this policy took it up), or a self-funded ERISA plan (outside the chapter entirely); and if the plan is outside the mandate, what age or hour limit the plan document itself imposes on ABA.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Optum publishes no recency rule for the ASD diagnosis in the Supplemental Clinical Criteria cited here; the cadence it does set is downstream \u2014 continued-service reviews every 4\u20136 months requiring updated standardized adaptive measures and progress measured the same way as baseline. Indiana\'s mandate sets no recency rule for commercial plans.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
        verifyVia: 'Optum provider services or the assessment-authorization request on Provider Express \u2014 ask whether an evaluation of this age will be accepted before scheduling.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'A DSM-5-TR autism spectrum diagnosis from a state-licensed physician, psychologist, or other qualified clinician. Optum asks for the diagnosing clinician and the confirming instrument at the assessment-authorization step, so both are intake fields.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      diagnosticTools: {
        value:
          'The diagnosis must be confirmed with at least one clinically validated tool. Optum names first-level instruments \u2014 the ADI-R, the ADOS-2 and the DISCO \u2014 and accepts second-level tools including the CARS-2, the RITA-T and the STAT. Capture which instrument was used, by whom and when.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      referral: {
        value:
          'Yes on a fully-insured Indiana group plan, and it is the statute that requires it: coverage is \u201climited to treatment that is prescribed by the insured\'s treating physician in accordance with a treatment plan.\u201d The mandate names no credential for the person delivering the service \u2014 that comes from the carrier and from Indiana\'s separate licensure chapter \u2014 but the treating physician\'s prescription is a coverage condition. Capture the prescribing physician and the plan they signed off on. Individual policies (offer-only) and self-funded ERISA plans are outside the chapter.',
        status: 'plan-dependent',
        cites: [{ title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — confirm the funding type first, because the statutory prescription requirement only reaches fully-insured Indiana group policies. On an individual or self-funded ERISA plan, ask the carrier directly whether it requires a treating-physician prescription and a treatment plan, and get the answer with the authorization.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Three codes, after an attestation. Optum’s Telehealth Billing guide (updated September 2025) is explicit for commercial plans: “For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157” — virtual supervision of technicians and family training — so technician-delivered 97153 is not payable by telehealth. The provider must first be “an approved Optum virtual visits provider who has attested” (the virtual-visits attestation on Provider Express) and must tell the ABA Care Advocate at authorization. Bill the in-person code with the member’s location as the place of service: POS 10 when the member is at home, POS 02 anywhere else (the older ABA CPT FAQ says POS 02; the 2025 guide requires one of the two on every behavioral-health telehealth claim, and POS 11 or a telehealth modifier alone is not paid). Optum’s criteria add that telehealth is “not intended to supplant in-person service.”',
        status: 'verified',
        cites: [
          { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. A fully insured plan issued in Indiana (group, individual or HMO) falls under IC 27-1-37.5-23, in force since July 1, 2025: urgent PA answered “not later than twenty-four (24) hours after receiving the request,” every other PA “not later than forty-eight (48) hours,” with weekends and state and federal holidays excluded; a missed deadline means the service “shall be automatically deemed authorized” (IC 27-1-37.5-28). A self-funded private-employer plan follows the federal ERISA claims rule instead: urgent within 72 hours; pre-service within a reasonable time “but not later than 15 days after receipt of the claim,” with one 15-day extension; and a request to extend an ongoing course of treatment that involves urgent care must be decided within 24 hours if made at least 24 hours before the authorization expires. Optum, which reviews UHC\'s ABA, sets the reauthorization window: call the ABA/Autism line to request continued treatment “no more than 30 days prior to the current approvals on file expiring,” with all the clinical information in hand.',
        status: 'plan-dependent',
        cites: [{ title: 'Ind. Code 27-1-37.5-23 — prior authorization response deadlines', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-23/' }, { title: 'Indiana SEA 480 (P.L.144-2025) — enrolled act adding IC 27-1-37.5-23 and -28, eff. July 1, 2025', url: 'https://iga.in.gov/pdf-documents/124/2025/senate/bills/SB0480/SB0480.06.ENRH.pdf' }, { title: '29 CFR 2560.503-1(f)(2) — ERISA group health plan claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' }, { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' }],
        verifyVia:
          'Benefits verification call or the UnitedHealthcare / Optum Provider Express provider portal: ask whether the plan is fully insured and issued in Indiana (state 24/48-business-hour clock) or self-funded ERISA (federal 72-hour / 15-day clock), and what turnaround the plan quotes for ABA.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Depends on the family and on plan funding. For a fully insured Indiana group plan, 760 IAC 1-38.1 sets the order: the plan covering the person as employee or subscriber pays before one covering them as a dependent; for a child whose parents are married or living together, “the plan of the parent whose birthday falls earlier in a calendar year” is primary (same birthday: the plan that has covered that parent longest); for parents who are divorced, separated or do not live together, with no court decree, the order is custodial parent, custodial parent\'s spouse, noncustodial parent, noncustodial parent\'s spouse — and a decree that makes one parent responsible for health coverage overrides it. A self-funded ERISA plan sets its COB rules in its plan document instead. TRICARE is always “last pay” behind other health coverage (32 CFR 199.8), so this plan pays before TRICARE. If the child also has Indiana Medicaid, this plan pays first and IHCP pays last — but IHCP still requires its own PA (“must also obtain PA from the appropriate IHCP PA contractor”) and will not pay for services this plan denied as out-of-network, so be in this plan\'s network and get both authorizations.',
        status: 'plan-dependent',
        cites: [{ title: '760 IAC 1-38.1-12 — order of benefits, nondependent before dependent', url: 'https://www.law.cornell.edu/regulations/indiana/760-IAC-1-38.1-12' }, { title: '760 IAC 1-38.1-13 — dependent child, birthday rule', url: 'https://www.law.cornell.edu/regulations/indiana/760-IAC-1-38.1-13' }, { title: '760 IAC 1-38.1-14 — dependent child, separated or divorced parents', url: 'https://www.law.cornell.edu/regulations/indiana/760-IAC-1-38.1-14' }, { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' }, { title: 'IHCP — Prior Authorization module (PROMOD00012, v7.2, publ. Nov. 20, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/prior-authorization.pdf' }, { title: 'IHCP — Third-Party Liability module (PROMOD00017, v7.2, publ. Oct. 9, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/third-party-liability.pdf' }],
        verifyVia:
          'At intake, collect every coverage the child has, both parents\' birthdays and any custody or court-decree terms; then ask UnitedHealthcare (and the other carrier) on the benefits call whether each plan is fully insured or self-funded and which one they show as primary.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Indiana?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Indiana\'s mandate (Ind. Code 27-8-14.2) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Indiana autism mandate require?', a: 'Indiana’s mandate (2001) was the first autism insurance mandate in the country, and it remains one of the strongest: group accident and sickness policies must cover ASD treatment prescribed by the treating physician under a treatment plan, with no age limits and no dollar, visit, or hour caps — and cost-sharing no less favorable than for physical illness generally. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does UnitedHealthcare pay for ABA in Indiana?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Indiana Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
      { q: 'How often does UnitedHealthcare (Optum) reauthorize ABA?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale.' },
    ],
  },

  'anthem-bcbs-indiana': {
    slug: 'anthem-bcbs-indiana',
    payer: 'Anthem BCBS Indiana',
    state: 'IN', kind: 'commercial',
    family: 'anthem',
    cardDesc: 'No dollar, age, visit or hour cap in the mandate; Indiana now licenses LBAs; Anthem reviews in-house.',
    assessmentPA: {
      value: 'Yes — ABA is precertified as a category; Anthem\'s Indiana list names no individual CPT codes, so request assessment and treatment together',
      status: 'plan-dependent',
      cites: [
        { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
        { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' },
      ],
      verifyVia: 'Anthem publishes the requirement but also publishes its limits, so check the group before you rely on it: the Central Blues precertification list applies to local fully-insured members and to self-insured (ASO) members only where the group purchased the medical-management program — where it did not, preapproval is not required and no clinical review is performed — and on National Accounts business precertification for ABA “applies unless the group specifically opts out of clinical review for this benefit.” Confirm funding type and medical-management purchase on the benefits call, via Availity Essentials or the number on the member’s card.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Yes — responsible party Anthem; the authorization now carries weekly approved units',
      status: 'plan-dependent',
      cites: [
        { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
        { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' },
      ],
      verifyVia: 'Anthem publishes the requirement but also publishes its limits, so check the group before you rely on it: the Central Blues precertification list applies to local fully-insured members and to self-insured (ASO) members only where the group purchased the medical-management program — where it did not, preapproval is not required and no clinical review is performed — and on National Accounts business precertification for ABA “applies unless the group specifically opts out of clinical review for this benefit.” Confirm funding type and medical-management purchase on the benefits call, via Availity Essentials or the number on the member’s card.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes — and the treatment must be prescribed by the insured\'s treating physician under a treatment plan',
      status: 'verified',
      cites: [
        { title: 'Ind. Code § 27-8-14.2-3 — definition of autism spectrum disorder', url: 'https://law.justia.com/codes/indiana/title-27/article-8/chapter-14-2/section-27-8-14-2-3/' },
        { title: 'Ind. Code § 27-8-14.2-4 — group coverage', url: 'https://law.justia.com/codes/indiana/title-27/article-8/chapter-14-2/section-27-8-14-2-4/' },
      ],
    },
    pill: 'Payer Guide · Anthem BCBS · Indiana',
    h1: 'Anthem BCBS Indiana ABA coverage: the intake guide.',
    metaTitle: 'Anthem BCBS Indiana ABA Coverage & Prior Auth: Intake Guide | Carelu',
    metaDescription:
      'How Anthem Blue Cross and Blue Shield covers ABA in Indiana: the uncapped IC 27-8-14.2 mandate, the new Licensed Behavior Analyst credential, who reviews prior authorization, and the weekly-unit claim change.',
    intro: [
      'Indiana passed the first autism insurance mandate in the country in 2001, and it remains one of the least restrictive. Read all five sections of IC 27-8-14.2 and the words "age," "hours," "visits" and any dollar figure simply do not appear in connection with the autism benefit. Group accident and sickness policies must cover treatment of autism spectrum disorder prescribed by the insured\'s treating physician under a treatment plan, and the only limit language in the chapter is a parity clause: coverage "may not be subject to dollar limits, deductibles, or coinsurance provisions that are less favorable to an insured than" those applying to physical illness generally.',
      'Two things have changed recently enough that most ABA playbooks are wrong about them. Indiana now licenses behavior analysts — LBA and LABA applications went live in May 2025, and practising ABA without the licence is prohibited. And Anthem no longer reviews ABA under clinical guideline CG-BEH-02; it moved to MCG B-806-T in June 2024. Neither change is reflected in most of what is written about Indiana ABA coverage online.',
    ],
    atGlance: [
      { label: 'Who reviews ABA', value: 'Anthem — responsible party on its own Indiana precert list' },
      { label: 'Criteria applied', value: 'MCG B-806-T — replaced CG-BEH-02 for ABA on June 1, 2024' },
      { label: 'Submit via', value: 'Availity Essentials → Authorizations and Referrals' },
      { label: 'State mandate', value: 'IC 27-8-14.2 (group must cover; individual must offer) + IC 27-13-7-14.7 for HMOs' },
      { label: 'Mandate caps', value: 'None — no dollar, age, visit or hour limit anywhere in the chapter' },
      { label: 'Exempt from mandate', value: 'Individual policies (offer-only); short-term, student and limited-benefit plans; self-funded ERISA' },
      { label: 'Licensure', value: 'Indiana LBA / LABA — applications live since May 13, 2025; practice without one is prohibited' },
      { label: 'Authorization unit', value: 'Weekly approved units (Anthem\'s Indiana notice is headlined March 1, 2026)' },
    ],
    sections: [
      {
        h2: 'A mandate that caps nothing',
        cites: [
          { title: 'Ind. Code § 27-8-14.2-4 — group coverage', url: 'https://law.justia.com/codes/indiana/title-27/article-8/chapter-14-2/section-27-8-14-2-4/' },
          { title: 'Ind. Code § 27-8-14.2-5 — individual offer', url: 'https://law.justia.com/codes/indiana/title-27/article-8/chapter-14-2/section-27-8-14-2-5/' },
          { title: 'Ind. Code § 27-13-7-14.7 — HMO coverage', url: 'https://law.justia.com/codes/indiana/title-27/article-13/chapter-7/section-27-13-7-14-7/' },
        ],
        body: [
          'Section 4 is the operative one: "An accident and sickness insurance policy that is issued on a group basis must provide coverage for the treatment of an autism spectrum disorder of an insured. Coverage provided under this section is limited to treatment that is prescribed by the insured\'s treating physician in accordance with a treatment plan." Section 5 requires insurers issuing individual policies only to offer the coverage, not to include it — a real distinction when a family bought their own plan. IC 27-13-7-14.7 mirrors both rules for HMOs, and its parity clause adds copayments to the list.',
          'The chapter defines autism spectrum disorder as "a neurological condition, including Asperger\'s syndrome and autism, as defined in the Diagnostic and Statistical Manual of Mental Disorders" — and despite the chapter still being captioned "Insurance Coverage for Pervasive Developmental Disorders," the operative term throughout is autism spectrum disorder. Both the group and individual sections also forbid an insurer from denying, refusing to issue, refusing to renew or otherwise restricting coverage solely because the individual is diagnosed with an autism spectrum disorder.',
          'The statute names no credential of its own. Its only gate on who delivers the service is that the treatment be "prescribed by the insured\'s treating physician in accordance with a treatment plan" — so the credentialing requirements come from the carrier and from Indiana\'s separate licensure chapter, not from the insurance mandate. The exclusions list at IC 27-8-14.2-1(b) is the usual set: accident-only, credit, dental, vision, Medicare supplement, long-term care, disability income, specified-disease, short-term plans, indemnity and gap products, and student health plans. There is no small-group carve-out. Self-funded ERISA plans are simply outside the chapter, which binds insurers issuing policies, so those members rely on the plan document and federal parity.',
        ],
      },
      {
        h2: 'Who reviews the authorization',
        cites: [
          { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
          { title: 'Anthem Indiana — Carelon Behavioral Health assignment mailing was sent in error to non-Ohio providers (June 2023)', url: 'https://providernews.anthem.com/indiana/articles/important-information-regarding-the-recent-carelon-behaviora-1-13957' },
        ],
        body: [
          'Anthem\'s Indiana commercial entity is Anthem Insurance Companies, Inc., and Indiana shares one precertification list with Kentucky, Missouri, Ohio and Wisconsin. That list includes applied behavioral analysis in the behavioral health services requiring preapproval for OH, IN and KY Blues products, with the responsible party given as Anthem, and carries a separate "Treatment for autism spectrum disorder — Anthem" row. Submission runs through Availity Essentials.',
          'Indiana is the clearest of the six states on the Carelon question, because Anthem answered it directly. When a 2023 mailing went out about a contract assignment to Carelon Behavioral Health, Inc. in Ohio, Anthem told Indiana providers: "If you are not an Ohio contracted provider, please be aware this letter was sent to you in error and may be disregarded." Carelon Behavioral Health appears nowhere in the Indiana commercial precertification list. The Carelon names that do appear are Carelon Medical Benefits Management — advanced imaging, bariatrics, cardiovascular, genetic testing, musculoskeletal, oncology and related programmes — and CarelonRx for pharmacy. Neither touches ABA, and their published phone numbers are for those programmes, not for an ABA request.',
          'One scope caveat before you rely on any of this: the precertification list states it applies to local fully insured members and to self-insured (ASO) members only where the group purchased the medical-management program, and that if the program has not been purchased, preapproval is not required and clinical review will not be performed. On Anthem National Accounts business the rule is softer still — precertification for ABA "is recommended and applies unless the group specifically opts out of clinical review for this benefit," and retrospective review is allowed.',
        ],
      },
      {
        h2: 'Indiana licenses behavior analysts now',
        cites: [
          { title: 'Indiana PLA — Behavior Analyst', url: 'https://www.in.gov/pla/professions/behavior-analyst/' },
          { title: 'Ind. Code § 25-8.5-3-1 — licensure requirements', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-1/' },
          { title: 'Ind. Code § 25-8.5-3-6 — practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' },
        ],
        body: [
          'Any guide still saying Indiana has no behavior-analyst licensure is out of date. The Indiana Professional Licensing Agency runs a Behavior Analyst Licensing Board issuing Licensed Behavior Analyst and Licensed Assistant Behavior Analyst credentials, and its own site records the milestone: applications went live on May 13, 2025. The statute (IC 25-8.5) was enacted in 2021 and the administrative rules at 844 IAC 21 followed, so 2025 is when the credential actually became obtainable.',
          'Licensure is built on national certification. IC 25-8.5-3-1 requires an applicant to furnish evidence of certification as a board certified behavior analyst by the BACB or another committee-approved entity, plus a national criminal history background check. IC 25-8.5-3-6 then makes it unlawful to profess to be a licensed behavior analyst, to use the initials LBA or LABA, or to practise applied behavior analysis, without a licence — with carve-outs for licensed health care professionals acting within their own scope, for students and trainees, for limited out-of-state practice, and for "an applied behavior analysis direct contact technician" or a family member implementing a plan in the family home who acts "under the extended authority and direction of a behavior analyst or assistant behavior analyst licensed under this chapter."',
          'Two practical notes. Indiana does not license RBTs — PLA directs RBT applicants to the BACB — so technicians work under the exception, not a state credential. And LBA/LABA licences expire December 31 of odd-numbered years on a two-year cycle, with continuing education that includes a trauma-informed-care unit. Build the renewal date into your credentialing calendar rather than discovering it at a recredentialing cycle.',
        ],
      },
      {
        h2: 'CG-BEH-02 is retired; MCG B-806-T governs',
        cites: [
          { title: 'Anthem — MCG care guidelines 27th edition update (Indiana, Commercial, Feb 1 2024)', url: 'https://providernews.anthem.com/indiana/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
        ],
        body: [
          'Anthem told Indiana commercial providers that "effective June 1, 2024, Anthem will transition from CG-BEH-02 (Adaptive Behavioral Treatment) and MCG W0153 (Behavioral Health Care Applied Behavioral Analysis), to MCG B-806-T Behavioral Health Care Applied Behavioral Analysis (Original MCG Guideline), for medical necessity/clinical appropriateness reviews." The notice was published as a change to prior authorization requirements.',
          'So the criteria document most ABA resources still name for Anthem no longer drives the review. MCG guidelines are licensed and proprietary and Anthem does not publish them, which means the usable public artefacts are Anthem\'s ABA provider resource guide — billing, coding and documentation only, with no prior-authorization section — and the completeness of your own treatment plan. If a denial letter cites CG-BEH-02, that is a point worth raising on appeal.',
        ],
      },
      {
        h2: 'Weekly approved units — check which date applies to you',
        cites: [
          { title: 'Anthem Indiana — Streamlined ABA claim process starts March 1, 2026', url: 'https://providernews.anthem.com/indiana/articles/streamlined-aba-claim-process-starts-march-1-2026-28211' },
        ],
        body: [
          'Anthem has moved ABA reimbursement onto weekly approved units rather than total authorized units. Claims should reflect the units rendered within each week, up to the weekly medically necessary limit as approved by prior approval; claims submitted with units exceeding the weekly limit are ineligible for reimbursement and get adjusted. Existing requests and claims, including those with date ranges running past the effective date, are unaffected. The affected codes are 97151, 97152, 0362T, 97153, 97154, 97155, 97156, 97157, 97158 and 0373T, each per 15 minutes.',
          'One thing to verify rather than assume: Anthem\'s Indiana notice is headlined "Streamlined ABA claim process starts March 1, 2026" while its body text says "effective January 1, 2026." The inconsistency is in Anthem\'s own published article. Confirm with Anthem which date applies to your authorizations before you rebuild a billing calendar around either one.',
        ],
      },
    ],
    collect: [
      { title: 'Group or individual policy, and funding type', desc: 'Group plans must cover ABA; individual-policy insurers only have to offer it, so an individual plan may lawfully lack the benefit. Self-funded ERISA plans are outside the mandate entirely. This fork decides the whole conversation.' },
      { title: 'The treating physician\'s prescription', desc: 'Indiana\'s mandate limits coverage to treatment "prescribed by the insured\'s treating physician in accordance with a treatment plan." Capture the prescribing physician and the plan they signed off on.' },
      { title: 'Diagnosis report and evaluation date', desc: 'DSM-based ASD diagnosis, the diagnosing clinician and credentials, and the instruments used.' },
      { title: 'Indiana LBA/LABA licence numbers', desc: 'Licensure has been obtainable since May 2025 and practising ABA without it is prohibited. Capture licence numbers and the December-of-odd-years expiry for every analyst on the case; technicians work under the statutory exception rather than a state credential.' },
      { title: 'Realistic weekly schedule', desc: 'Weekly approved units make the family\'s sustainable weekly availability a billing constraint. Ask what they can actually keep, not what they hope for.' },
      { title: 'Whether the plan is a National Account', desc: 'On National Accounts, ABA precertification applies unless the group opted out of clinical review, and retrospective review is allowed — one call can change how the case is worked up.' },
    ],
    sources: [
      { title: 'Ind. Code § 27-8-14.2-3 — definition of autism spectrum disorder', url: 'https://law.justia.com/codes/indiana/title-27/article-8/chapter-14-2/section-27-8-14-2-3/' },
      { title: 'Ind. Code § 27-8-14.2-4 — group coverage', url: 'https://law.justia.com/codes/indiana/title-27/article-8/chapter-14-2/section-27-8-14-2-4/' },
      { title: 'Ind. Code § 27-8-14.2-5 — individual offer', url: 'https://law.justia.com/codes/indiana/title-27/article-8/chapter-14-2/section-27-8-14-2-5/' },
      { title: 'Ind. Code § 27-13-7-14.7 — HMO coverage', url: 'https://law.justia.com/codes/indiana/title-27/article-13/chapter-7/section-27-13-7-14-7/' },
      { title: 'Ind. Code § 25-8.5-3-1 — licensure requirements', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-1/' },
      { title: 'Ind. Code § 25-8.5-3-6 — practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' },
      { title: 'Indiana PLA — Behavior Analyst', url: 'https://www.in.gov/pla/professions/behavior-analyst/' },
      { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
      { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' },
      { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
      { title: 'Anthem — MCG care guidelines 27th edition update (Indiana, Commercial, Feb 1 2024)', url: 'https://providernews.anthem.com/indiana/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
      { title: 'Anthem Indiana — Streamlined ABA claim process starts March 1, 2026', url: 'https://providernews.anthem.com/indiana/articles/streamlined-aba-claim-process-starts-march-1-2026-28211' },
      { title: 'Anthem Indiana — Carelon Behavioral Health assignment mailing was sent in error to non-Ohio providers (June 2023)', url: 'https://providernews.anthem.com/indiana/articles/important-information-regarding-the-recent-carelon-behaviora-1-13957' },
      { title: 'Anthem — Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' },
    ],
    deliveryRules: {
      concurrentBilling: {
        value: 'A physician or other QHP billing 97155 can add 97153 only if both the technician and the QHP are face-to-face with the patient at the same time and the QHP is directing the technician. Supervised or directed services billed alongside a QHP-performed procedure are also subject to Anthem\'s Incident To Services and Billing reimbursement policy.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
      dailyLimits: {
        value: 'Anthem publishes no Indiana-specific per-day unit ceiling, and Indiana\'s mandate imposes no hour or visit limit of its own. ABA codes may carry CMS MUE limits, which Anthem administers as NCCI edits under its Code and Clinical Editing Guidelines reimbursement policy. The operative ceiling is the weekly approved units on the authorization.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'Anthem Indiana — Streamlined ABA claim process starts March 1, 2026', url: 'https://providernews.anthem.com/indiana/articles/streamlined-aba-claim-process-starts-march-1-2026-28211' },
        ],
      },
      noteSignature: {
        value: 'Each medical-record entry must carry author identification — handwritten signature, unique electronic identifier, or initials — plus rendering provider credentials. Entries are expected at the time of service or shortly thereafter and should not exceed 30 days, with a signature date within 30 days of the date of service. Timed codes require total treatment minutes plus start and stop times in the record. Treatment plans must show review or update at least every 6 months.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
      placeOfService: {
        value: 'POS codes Anthem names for ABA: 12 home, 11 office/clinic, 99 community, 03 school, 10 telehealth with the member at home, 02 telehealth with the member elsewhere — each subject to the member\'s coverage and plan review.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
      billAsProvider: {
        value: 'ABA delivered by therapy assistants, behavior technicians or paraprofessionals must show the supervising BCBA or other QHP in box 31 of the CMS-1500, with degree-level modifiers HM, HN and HO identifying the rendering staff level. In Indiana the supervising analyst must hold the state LBA (or LABA) licence; direct-contact technicians are exempt from licensure only while acting under the extended authority and direction of a licensed behavior analyst or assistant behavior analyst.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'Ind. Code § 25-8.5-3-6 — practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' },
        ],
      },
      supervision: {
        value:
          'Anthem names the approved rendering population rather than a ratio: psychiatrists, psychologists, LCSWs, LPCs and LMFTs with special training or experience in applied behavior analysis, BCBAs and BCBA-Ds, \u201cproviders practicing under the direction and supervision of the BCBA,\u201d and other mental health providers licensed or authorized by the state and recognized by the plan. Degree-level modifiers HM (less than bachelor\'s), HN (bachelor\'s) and HO (master\'s) identify the rendering staff level. Anthem publishes no hours-per-hours supervision floor for ABA; the only supervision rule with a number attached is the concurrent-billing condition recorded in that field. In Indiana the supervising analyst must hold the state LBA (or LABA) licence, and direct-contact technicians are exempt from licensure only while acting under the extended authority and direction of a licensed behavior analyst.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide \u2014 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }, { title: 'Ind. Code \u00a7 25-8.5-3-6 \u2014 practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' }],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'No age limit anywhere in the statute. Reading all five sections of IC 27-8-14.2, the words \u201cage,\u201d \u201chours,\u201d \u201cvisits\u201d and any dollar figure simply do not appear in connection with the autism benefit; the only limit language is a parity clause requiring that dollar limits, deductibles and coinsurance be no less favourable than those applying to physical illness generally (the HMO parallel at IC 27-13-7-14.7 adds copayments). Both the group and individual sections also forbid an insurer from denying, refusing to issue, refusing to renew or otherwise restricting coverage solely because the individual is diagnosed with an autism spectrum disorder. The fork that does matter is group versus individual versus self-funded, not age.',
        status: 'verified',
        cites: [{ title: 'Ind. Code \u00a7 27-8-14.2-4 \u2014 group coverage', url: 'https://law.justia.com/codes/indiana/title-27/article-8/chapter-14-2/section-27-8-14-2-4/' }, { title: 'Ind. Code \u00a7 27-13-7-14.7 \u2014 HMO coverage', url: 'https://law.justia.com/codes/indiana/title-27/article-13/chapter-7/section-27-13-7-14-7/' }],
      },
      dxRecency: {
        value:
          'Neither Indiana\'s mandate nor any published Anthem Indiana document states how recent the ASD diagnostic evaluation must be. Anthem reviews ABA under MCG B-806-T, which is licensed and proprietary and is not published, so the recency rule \u2014 if there is one \u2014 lives in a document you cannot read. What is published is the treatment-plan side: documentation must show the plan reviewed or updated at least every 6 months.',
        status: 'unverified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide \u2014 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
        verifyVia: 'Availity Essentials \u2192 Authorizations and Referrals, or Anthem provider services \u2014 ask what evaluation age B-806-T accepts. If a denial turns on recency, ask for the criteria in writing; a denial citing the retired CG-BEH-02 is itself an appeal point. MCG B-806-T is licensed proprietary criteria \u2014 it is never published and no document request will produce it, so the plan\u2019s own UM reviewer is the only route to the answer.',
        blocker: 'licensed',
      },
      diagnosingProviders: {
        value:
          'The statute names no credential of its own. Its only gate on who delivers or authorises the service is that the treatment be \u201cprescribed by the insured\'s treating physician in accordance with a treatment plan\u201d \u2014 so the diagnosing-credential requirement comes from the carrier, and Anthem applies the unpublished MCG B-806-T. Anthem\'s commercial ASD Treatment Plan Request Form requires for an initial assessment-only request (97151/97152/0362T) or where the member has new coverage a diagnostic evaluation by a doctorate-level clinician or an allowable qualified healthcare provider per state regulations, showing how the patient meets DSM-5-TR criteria — but the form\'s header lists ten states (GA, KY, ME, MO, NV, NH, NY, OH, VA, WI) and Indiana is not one of them, so treat it as Anthem\'s practice elsewhere, not a published Indiana rule.',
        status: 'unverified',
        verifyVia: 'Anthem Indiana provider services or Availity Essentials: ask which diagnosing credentials Anthem accepts for an Indiana commercial ABA request and whether an Indiana-specific request form applies.',
        blocker: 'per-case',
        cites: [{ title: 'Anthem \u2014 Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' }, { title: 'Ind. Code \u00a7 27-8-14.2-4 \u2014 group coverage', url: 'https://law.justia.com/codes/indiana/title-27/article-8/chapter-14-2/section-27-8-14-2-4/' }],
      },
      diagnosticTools: {
        value:
          'Anthem\'s commercial ASD Treatment Plan Request Form asks the diagnostic evaluation to name the standardized tools used, giving ADI-R, ADOS-2 and CARS-2 as examples rather than as a closed list — but Indiana is not among the ten states on that form\'s header. The statute names none \u2014 it defines autism spectrum disorder as \u201ca neurological condition, including Asperger\'s syndrome and autism, as defined in the Diagnostic and Statistical Manual of Mental Disorders.\u201d Ask the family for the full evaluation report, not the one-line diagnosis letter.',
        status: 'unverified',
        verifyVia: 'Anthem Indiana provider services or Availity Essentials; MCG B-806-T is licensed and unpublished, so the reviewer is the only source for an instrument requirement.',
        blocker: 'per-case',
        cites: [{ title: 'Anthem \u2014 Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' }, { title: 'Ind. Code \u00a7 27-8-14.2-3 \u2014 definition of autism spectrum disorder', url: 'https://law.justia.com/codes/indiana/title-27/article-8/chapter-14-2/section-27-8-14-2-3/' }],
      },
      referral: {
        value:
          'Yes, and it is statutory rather than administrative. Section 4 limits mandated coverage \u201cto treatment that is prescribed by the insured\'s treating physician in accordance with a treatment plan\u201d \u2014 so the treating physician\'s prescription and the plan it references are coverage conditions on a fully-insured Indiana group policy. Section 5 requires insurers issuing individual policies only to offer the coverage, and self-funded ERISA plans sit outside the chapter. One scope caveat on the authorization itself: Anthem\'s precertification list applies to local fully insured members and to self-insured (ASO) members only where the group purchased the medical-management program, and on National Accounts precertification for ABA \u201capplies unless the group specifically opts out of clinical review for this benefit.\u201d',
        status: 'verified',
        cites: [{ title: 'Ind. Code \u00a7 27-8-14.2-4 \u2014 group coverage', url: 'https://law.justia.com/codes/indiana/title-27/article-8/chapter-14-2/section-27-8-14-2-4/' }, { title: 'Ind. Code \u00a7 27-8-14.2-5 \u2014 individual offer', url: 'https://law.justia.com/codes/indiana/title-27/article-8/chapter-14-2/section-27-8-14-2-5/' }, { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' }],
      },
      telehealth: {
        value:
          'Anthem names two telehealth place-of-service codes for ABA \u2014 10 (member at home) and 02 (member elsewhere) \u2014 but does not publish a national list of telehealth-eligible ABA codes. Its ABA provider resource guide routes the question to the Virtual Visits reimbursement policy, notes that \u201callowed codes may vary,\u201d and tells providers to consult the allowed virtual services list in addition to CPT Appendix P \u201cto obtain codes that are eligible for reimbursement in your state.\u201d Treat the answer as per-state and per-plan and confirm before scheduling remote hours.',
        status: 'plan-dependent',
        cites: [{ title: 'Anthem ABA Provider Resource Guide \u2014 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
        verifyVia: 'Anthem\'s Virtual Visits reimbursement policy and the Indiana allowed-virtual-services list, or Anthem provider services via Availity Essentials.',
        blocker: 'document',
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. A fully insured plan issued in Indiana (group, individual or HMO) falls under IC 27-1-37.5-23, in force since July 1, 2025: urgent PA answered “not later than twenty-four (24) hours after receiving the request,” every other PA “not later than forty-eight (48) hours,” with weekends and state and federal holidays excluded; a missed deadline means the service “shall be automatically deemed authorized” (IC 27-1-37.5-28). A self-funded private-employer plan follows the federal ERISA claims rule instead: urgent within 72 hours; pre-service within a reasonable time “but not later than 15 days after receipt of the claim,” with one 15-day extension; and a request to extend an ongoing course of treatment that involves urgent care must be decided within 24 hours if made at least 24 hours before the authorization expires. On self-insured (ASO) groups that did not buy Anthem\'s medical-management program there is no preapproval and so no clock (see the precertification-scope note in this guide). Anthem\'s ABA provider resource guide publishes no reauthorization lead time.',
        status: 'plan-dependent',
        cites: [{ title: 'Ind. Code 27-1-37.5-23 — prior authorization response deadlines', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-23/' }, { title: 'Indiana SEA 480 (P.L.144-2025) — enrolled act adding IC 27-1-37.5-23 and -28, eff. July 1, 2025', url: 'https://iga.in.gov/pdf-documents/124/2025/senate/bills/SB0480/SB0480.06.ENRH.pdf' }, { title: '29 CFR 2560.503-1(f)(2) — ERISA group health plan claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' }],
        verifyVia:
          'Benefits verification call or the Anthem (Availity) provider portal: ask whether the plan is fully insured and issued in Indiana (state 24/48-business-hour clock) or self-funded ERISA (federal 72-hour / 15-day clock), and what turnaround the plan quotes for ABA.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Depends on the family and on plan funding. For a fully insured Indiana group plan, 760 IAC 1-38.1 sets the order: the plan covering the person as employee or subscriber pays before one covering them as a dependent; for a child whose parents are married or living together, “the plan of the parent whose birthday falls earlier in a calendar year” is primary (same birthday: the plan that has covered that parent longest); for parents who are divorced, separated or do not live together, with no court decree, the order is custodial parent, custodial parent\'s spouse, noncustodial parent, noncustodial parent\'s spouse — and a decree that makes one parent responsible for health coverage overrides it. A self-funded ERISA plan sets its COB rules in its plan document instead. TRICARE is always “last pay” behind other health coverage (32 CFR 199.8), so this plan pays before TRICARE. If the child also has Indiana Medicaid, this plan pays first and IHCP pays last — but IHCP still requires its own PA (“must also obtain PA from the appropriate IHCP PA contractor”) and will not pay for services this plan denied as out-of-network, so be in this plan\'s network and get both authorizations.',
        status: 'plan-dependent',
        cites: [{ title: '760 IAC 1-38.1-12 — order of benefits, nondependent before dependent', url: 'https://www.law.cornell.edu/regulations/indiana/760-IAC-1-38.1-12' }, { title: '760 IAC 1-38.1-13 — dependent child, birthday rule', url: 'https://www.law.cornell.edu/regulations/indiana/760-IAC-1-38.1-13' }, { title: '760 IAC 1-38.1-14 — dependent child, separated or divorced parents', url: 'https://www.law.cornell.edu/regulations/indiana/760-IAC-1-38.1-14' }, { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' }, { title: 'IHCP — Prior Authorization module (PROMOD00012, v7.2, publ. Nov. 20, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/prior-authorization.pdf' }, { title: 'IHCP — Third-Party Liability module (PROMOD00017, v7.2, publ. Oct. 9, 2025)', url: 'https://www.in.gov/medicaid/providers/files/modules/third-party-liability.pdf' }],
        verifyVia:
          'At intake, collect every coverage the child has, both parents\' birthdays and any custody or court-decree terms; then ask Anthem (and the other carrier) on the benefits call whether each plan is fully insured or self-funded and which one they show as primary.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Indiana\'s autism mandate cap ABA?', a: 'No. Reading the whole of IC 27-8-14.2 turns up no dollar cap, no age limit and no visit or hour limit for the autism benefit. The only limit language is a parity clause requiring that dollar limits, deductibles and coinsurance be no less favourable than those applying to physical illness generally. The HMO parallel at IC 27-13-7-14.7 adds copayments to that list.' },
      { q: 'Does the Indiana mandate apply to an individual policy?', a: 'Only as an offer. Group accident and sickness policies must provide the coverage; insurers issuing individual policies must offer to provide it, which means an individual plan may lawfully not include it. Ask whether the policy is group or individual before promising anything.' },
      { q: 'Does ABA prior authorization in Indiana go to Carelon?', a: 'No. Anthem\'s five-state precertification list names Anthem as the responsible party for ABA, and Carelon Behavioral Health does not appear in it at all — Anthem even told Indiana providers that a 2023 Carelon Behavioral Health assignment letter was an Ohio matter sent to them in error. Carelon Medical Benefits Management, which does appear, handles imaging, genetics, musculoskeletal and oncology programmes, not ABA.' },
      { q: 'Does Indiana license behavior analysts?', a: 'Yes, since 2025. The Indiana Professional Licensing Agency\'s Behavior Analyst Licensing Board issues Licensed Behavior Analyst and Licensed Assistant Behavior Analyst credentials, applications went live on May 13, 2025, and practising applied behavior analysis without a licence is prohibited. Licensure requires current BACB certification plus a national background check. Indiana does not license RBTs — technicians work under a statutory exception while directed by a licensed analyst.' },
      { q: 'Which criteria does Anthem use for ABA in Indiana?', a: 'MCG B-806-T. Anthem notified Indiana commercial providers that effective June 1, 2024 it would transition from CG-BEH-02 and MCG W0153 to MCG B-806-T for medical-necessity and clinical-appropriateness reviews. MCG guidelines are proprietary and unpublished.' },
    ],
  },

  'anthem-indiana': {
    slug: 'anthem-indiana',
    payer: 'Anthem Blue Cross and Blue Shield Indiana (commercial)',
    state: 'IN', kind: 'commercial',
    family: 'anthem',
    cardDesc: 'Anthem commercial in Indiana: ABA precert stays with Anthem, not Carelon Behavioral Health; uncapped IC 27-8-14.2 mandate.',
    assessmentPA: {
      value: 'Yes — applied behavioral analysis is on Anthem\'s Indiana commercial preapproval list with Anthem as the responsible party; the list names the category, not individual CPT codes',
      status: 'plan-dependent',
      cites: [
        { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
        { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' },
      ],
      verifyVia: 'The list applies to local fully insured members and to self-insured (ASO) members only where the group bought the medical-management program ("If the program has not been purchased, preapproval is not required, and clinical review will not be performed"); on National Accounts, ABA precertification "applies unless the group specifically opts out of clinical review for this benefit." Confirm funding type and program purchase on the benefits call or in Availity Essentials.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Yes — Anthem is the responsible party for ABA preapproval on Indiana Blues products, reviewed under MCG B-806-T since June 1, 2024',
      status: 'plan-dependent',
      cites: [
        { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
        { title: 'Anthem Indiana — MCG care guidelines 27th edition update (Commercial; CG-BEH-02 to MCG B-806-T for ABA, eff. June 1, 2024)', url: 'https://providernews.anthem.com/indiana/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
        { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' },
      ],
      verifyVia: 'Same scope limits as the assessment: fully insured members, and ASO members only where the group bought medical management; National Accounts groups may opt out of clinical review, and "Retrospective review is allowed." Confirm on the benefits call.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes — autism spectrum disorder as defined in the DSM, and the mandated coverage is limited to treatment "prescribed by the insured\'s treating physician in accordance with a treatment plan"',
      status: 'verified',
      cites: [
        { title: 'Ind. Code § 27-8-14.2-3 — definition of autism spectrum disorder', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-3/' },
        { title: 'Ind. Code § 27-8-14.2-4 — group coverage', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' },
      ],
    },
    pill: 'Payer Guide · Anthem · Indiana commercial',
    h1: 'Anthem commercial ABA in Indiana: who reviews it, and which rules apply.',
    metaTitle: 'Anthem BCBS Indiana Commercial ABA: Prior Auth, Carelon Question & Mandate | Carelu',
    metaDescription:
      'How Anthem\'s Indiana commercial plans handle ABA: Anthem (not Carelon Behavioral Health) owns the preapproval, the uncapped IC 27-8-14.2 mandate and who it misses, Indiana LBA licensure, and the claim rules in Anthem\'s ABA resource guide.',
    intro: [
      'This guide is for Anthem Blue Cross and Blue Shield commercial members in Indiana. Anthem also runs Indiana Medicaid plans, which follow IHCP rules and have their own guide (anthem-indiana-medicaid); settle the line of business before anything else.',
      'The question intake teams ask most is whether an Anthem ABA request goes to Carelon Behavioral Health. For Indiana commercial it does not. Anthem\'s Indiana preapproval list names Anthem as the responsible party for ABA. The only Carelon companies on that list are Carelon Medical Benefits Management and CarelonRx, which handle imaging, specialty programs and pharmacy. When a 2023 Carelon Behavioral Health contract letter reached Indiana providers, Anthem told them it was an Ohio matter sent "in error." What decides whether review happens at all is how the plan is funded.',
    ],
    atGlance: [
      { label: 'Line of business', value: 'Commercial (Anthem Insurance Companies, Inc.) — not the anthem-indiana-medicaid guide' },
      { label: 'Who reviews ABA', value: 'Anthem — responsible party on the IN/KY/MO/OH/WI preapproval list; Carelon Behavioral Health is not on it' },
      { label: 'Criteria', value: 'MCG B-806-T (licensed, unpublished) — replaced CG-BEH-02 on June 1, 2024' },
      { label: 'Precert scope', value: 'Fully insured members; ASO groups only if they bought medical management; National Accounts may opt out' },
      { label: 'State mandate', value: 'IC 27-8-14.2 — group policies must cover, individual policies must offer; IC 27-13-7-14.7 for HMOs' },
      { label: 'Mandate caps', value: 'None — no dollar, age, visit or hour limit; cost-share parity with physical illness' },
      { label: 'Outside the mandate', value: 'Self-funded ERISA plans; short-term, student, specified-disease and other excepted policies' },
      { label: 'Licensure', value: 'Indiana LBA / LABA (applications live since May 13, 2025); technicians work under a statutory exception' },
    ],
    sections: [
      {
        h2: 'Anthem owns the ABA review, not Carelon Behavioral Health',
        cites: [
          { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
          { title: 'Anthem Indiana — Carelon Behavioral Health assignment mailing sent in error to non-Ohio providers (Commercial)', url: 'https://providernews.anthem.com/indiana/articles/important-information-regarding-the-recent-carelon-behaviora-1-13957' },
          { title: 'Anthem Indiana — MCG care guidelines 27th edition update (Commercial; CG-BEH-02 to MCG B-806-T for ABA, eff. June 1, 2024)', url: 'https://providernews.anthem.com/indiana/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
        ],
        body: [
          'Anthem\'s commercial preapproval list, updated January 1, 2026, is shared by Indiana, Kentucky, Missouri, Ohio and Wisconsin. Under behavioral health services it lists "Applied behavioral analysis (ABA)" for "OH, IN, KY Blues products," and the responsible party is Anthem. A separate "Treatment for autism spectrum disorder" row also sits on the list. The Carelon companies named in the document are Carelon Medical Benefits Management ("an independent company providing utilization management services") and CarelonRx (pharmacy). Carelon Behavioral Health does not appear.',
          'Anthem said so directly to Indiana commercial providers when a Carelon Behavioral Health contract-assignment letter went out in 2023: "If you are not an Ohio contracted provider, please be aware this letter was sent to you in error and may be disregarded." The review criteria are Anthem\'s too: "Effective June 1, 2024, Anthem will transition from CG-BEH-02 (Adaptive Behavioral Treatment) and MCG W0153 … to MCG B-806-T Behavioral Health Care Applied Behavioral Analysis (Original MCG Guideline), for medical necessity/clinical appropriateness reviews." MCG criteria are licensed and not published. If a denial letter still cites CG-BEH-02, raise that on appeal.',
        ],
      },
      {
        h2: 'Funding decides whether there is a review at all',
        cites: [
          { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
          { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' },
          { title: 'Ind. Code § 27-8-14.2-1 — policies excluded from the chapter', url: 'https://law.justia.com/codes/indiana/title-27/article-8/chapter-14-2/section-27-8-14-2-1/' },
        ],
        body: [
          'The preapproval list says it applies "to local fully insured Anthem members and select members who are covered under self-insured (ASO) benefit plans with services medically managed as part of a purchased program," and that "If the program has not been purchased, preapproval is not required, and clinical review will not be performed." It does not apply to BlueCard, Medicare Advantage, Medicaid, Medicare Supplement or FEP. On Anthem National Accounts business the rule is softer: "Precertification for ABA is recommended and applies unless the group specifically opts out of clinical review for this benefit. Retrospective review is allowed."',
          'Funding also decides whether Indiana\'s mandate applies. IC 27-8-14.2 regulates insurers\' accident and sickness policies. It excludes accident-only, dental, vision, Medicare supplement, long-term care and disability income coverage, specified-disease and indemnity policies, qualifying short-term plans, supplemental plans and student health plans. A self-funded employer plan that Anthem only administers is not an insurance policy, so the plan document and federal parity law govern it instead. Ask the funding question before you tell a family what the law guarantees.',
        ],
      },
      {
        h2: 'Indiana\'s mandate: group must cover, individual must offer, nothing capped',
        cites: [
          { title: 'Ind. Code § 27-8-14.2-4 — group coverage', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' },
          { title: 'Ind. Code § 27-8-14.2-5 — individual offer', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-5/' },
          { title: 'Ind. Code § 27-13-7-14.7 — HMO coverage', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-13-7-14-7/' },
          { title: 'Ind. Code § 27-8-14.2-3 — definition of autism spectrum disorder', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-3/' },
        ],
        body: [
          'A group accident and sickness policy "must provide coverage for the treatment of an autism spectrum disorder of an insured," limited "to treatment that is prescribed by the insured\'s treating physician in accordance with a treatment plan." An insurer issuing individual policies "must offer to provide" the same coverage, so an individual plan may lawfully lack it. Group and individual HMO contracts follow the same pattern under IC 27-13-7-14.7.',
          'The statute sets no age, hour, visit or dollar cap. Its only limit language is parity: coverage "may not be subject to dollar limits, deductibles, or coinsurance provisions that are less favorable to an insured than" those for physical illness generally (the HMO section adds copayments). Insurers also may not refuse, terminate or restrict coverage "solely because the individual is diagnosed with an autism spectrum disorder." The chapter defines autism spectrum disorder as "a neurological condition, including Asperger\'s syndrome and autism, as defined in the Diagnostic and Statistical Manual of Mental Disorders."',
        ],
      },
      {
        h2: 'Indiana licenses behavior analysts',
        cites: [
          { title: 'Indiana PLA — Behavior Analyst', url: 'https://www.in.gov/pla/professions/behavior-analyst/' },
          { title: 'Ind. Code § 25-8.5-3-1 — licensure requirements', url: 'https://codes.findlaw.com/in/title-25-professions-and-occupations/in-code-sect-25-8-5-3-1/' },
          { title: 'Ind. Code § 25-8.5-3-6 — practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' },
        ],
        body: [
          'The Indiana Professional Licensing Agency posted on May 13, 2025 that "Licensed Behavior Analyst and Licensed Assistant Behavior Analyst applications are now live." A behavior analyst license requires BCBA certification from the BACB or another approved entity and a national criminal history background check. Since then an individual may not "practice applied behavior analysis" or use the initials LBA or LABA without a license.',
          'The exceptions matter for staffing. A licensed or certified health care professional may use ABA within their own scope. So may a student or trainee, and a non-resident who works in Indiana no more than 5 days a month and 15 days a year while authorized at home. So may "an applied behavior analysis direct contact technician" or a family member implementing a plan at home, "who acts under the extended authority and direction of a behavior analyst or assistant behavior analyst licensed under this chapter." Technicians therefore work under the supervising analyst\'s Indiana license, not a state credential of their own.',
        ],
      },
      {
        h2: 'Claim and documentation rules in Anthem\'s ABA resource guide',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — commercial, 11 states incl. Indiana (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
        ],
        body: [
          'Anthem\'s commercial ABA provider resource guide (June 2025) lists Indiana among its eleven states. It covers billing, coding and documentation, not authorization. Its approved rendering providers include psychiatrists, psychologists, LCSWs, LPCs and LMFTs with ABA training or experience, BCBAs and BCBA-Ds, "providers practicing under the direction and supervision of the BCBA," and other state-licensed providers the plan recognizes. Technician and paraprofessional claims must show the supervising BCBA or other QHP in box 31 of the CMS-1500, with modifiers HM, HN or HO for the rendering staff\'s degree level.',
          'On concurrent billing, a QHP billing 97155 "can only add code 97153 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician." Records need total treatment time plus start and stop times, author identification on every entry, and a signature date within 30 days of service. Treatment plans must show review or update at least every 6 months.',
        ],
      },
    ],
    collect: [
      { title: 'Commercial or Medicaid', desc: 'Anthem runs both lines in Indiana and they follow different rulebooks. A Hoosier Healthwise, HIP, Hoosier Care Connect or PathWays card belongs in the Medicaid guide.' },
      { title: 'Funding type and program purchase', desc: 'Fully insured, self-funded (ASO) with or without Anthem\'s medical-management program, or a National Account. This decides whether precert applies and whether IC 27-8-14.2 applies.' },
      { title: 'Group or individual policy', desc: 'Group policies must cover ABA. Individual-policy insurers only have to offer it, so check the individual plan\'s benefit.' },
      { title: 'Treating physician\'s prescription and treatment plan', desc: 'The mandate covers treatment "prescribed by the insured\'s treating physician in accordance with a treatment plan." Capture both.' },
      { title: 'Diagnostic report', desc: 'DSM-based ASD diagnosis, the diagnosing clinician and credentials, the instruments used and the evaluation date. The full report, not a one-line letter.' },
      { title: 'Indiana LBA/LABA licence numbers', desc: 'For every analyst on the case. Technicians need a named licensed supervisor on the claim (box 31).' },
    ],
    sources: [
      { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
      { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' },
      { title: 'Anthem ABA Provider Resource Guide — commercial, 11 states incl. Indiana (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
      { title: 'Anthem Indiana — MCG care guidelines 27th edition update (Commercial; CG-BEH-02 to MCG B-806-T for ABA, eff. June 1, 2024)', url: 'https://providernews.anthem.com/indiana/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
      { title: 'Anthem Indiana — Carelon Behavioral Health assignment mailing sent in error to non-Ohio providers (Commercial)', url: 'https://providernews.anthem.com/indiana/articles/important-information-regarding-the-recent-carelon-behaviora-1-13957' },
      { title: 'Ind. Code § 27-8-14.2-1 — policies excluded from the chapter', url: 'https://law.justia.com/codes/indiana/title-27/article-8/chapter-14-2/section-27-8-14-2-1/' },
      { title: 'Ind. Code § 27-8-14.2-3 — definition of autism spectrum disorder', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-3/' },
      { title: 'Ind. Code § 27-8-14.2-4 — group coverage', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' },
      { title: 'Ind. Code § 27-8-14.2-5 — individual offer', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-5/' },
      { title: 'Ind. Code § 27-13-7-14.7 — HMO coverage', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-13-7-14-7/' },
      { title: 'Ind. Code § 25-8.5-3-1 — licensure requirements', url: 'https://codes.findlaw.com/in/title-25-professions-and-occupations/in-code-sect-25-8-5-3-1/' },
      { title: 'Ind. Code § 25-8.5-3-6 — practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' },
      { title: 'Indiana PLA — Behavior Analyst', url: 'https://www.in.gov/pla/professions/behavior-analyst/' },
    ],
    deliveryRules: {
      supervision: {
        value: 'Anthem names who may render rather than a ratio: psychiatrists, psychologists, LCSWs, LPCs and LMFTs with ABA training or experience, BCBAs and BCBA-Ds, "providers practicing under the direction and supervision of the BCBA," and other state-licensed providers the plan recognizes. It publishes no supervision-hours floor. In Indiana, direct-contact technicians are exempt from licensure only while acting "under the extended authority and direction of a behavior analyst or assistant behavior analyst licensed under this chapter."',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — commercial, 11 states incl. Indiana (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'Ind. Code § 25-8.5-3-6 — practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' },
        ],
      },
      concurrentBilling: {
        value: 'A physician or other QHP billing 97155 "can only add code 97153 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician." Supervised or directed services billed with a QHP-performed procedure also fall under Anthem\'s Incident To Services and Billing reimbursement policy.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — commercial, 11 states incl. Indiana (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
      dailyLimits: {
        value: 'No Indiana-specific per-day unit ceiling is published, and IC 27-8-14.2 sets no hour or visit limit. Anthem says "ABA codes may have associated MUE limits," which it administers as NCCI edits under its Code and Clinical Editing Guidelines policy, aligned to CMS MUE updates. The working ceiling is the units on the authorization.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — commercial, 11 states incl. Indiana (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'Ind. Code § 27-8-14.2-4 — group coverage', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' },
        ],
      },
      noteSignature: {
        value: 'Every medical-record entry needs author identification (handwritten signature, unique electronic identifier or initials) and rendering-provider credentials. Entries are due at the time of service or shortly after and "should not exceed 30 days," with a "Signature date within 30 days of the date of service." Timed codes need total treatment time plus start and stop times, and treatment plans must show review or update "at a min of every 6 months."',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — commercial, 11 states incl. Indiana (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
      placeOfService: {
        value: 'POS codes Anthem lists as frequently used for ABA: 12 home, 11 office/clinic, 99 community, 03 school, 10 telehealth with the member at home, 02 telehealth with the member elsewhere — "Subject to the member\'s coverage and reviews by the plan."',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — commercial, 11 states incl. Indiana (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
      billAsProvider: {
        value: '"ABA therapy performed by therapy assistants/behavioral technicians/paraprofessionals must show the supervising BCBA or other QHP in box 31 of the CMS claim form," with degree-level modifiers HM (less than bachelor\'s), HN (bachelor\'s) or HO (master\'s) for the rendering staff. In Indiana the supervising analyst must hold an LBA or LABA license.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — commercial, 11 states incl. Indiana (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'Ind. Code § 25-8.5-3-6 — practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'None in the statute. IC 27-8-14.2 sets no age, hour, visit or dollar limit on the autism benefit; its only limit language is parity with physical illness for dollar limits, deductibles and coinsurance (copayments too, for HMOs). The fork that matters is group, individual or self-funded, not age.',
        status: 'verified',
        cites: [
          { title: 'Ind. Code § 27-8-14.2-4 — group coverage', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' },
          { title: 'Ind. Code § 27-13-7-14.7 — HMO coverage', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-13-7-14-7/' },
        ],
      },
      dxRecency: {
        value: 'Not published. Neither IC 27-8-14.2 nor any Anthem Indiana commercial document we read states how recent the diagnostic evaluation must be. Anthem reviews ABA under MCG B-806-T, which is licensed and unpublished. What is published is the treatment-plan cadence: review or update at least every 6 months.',
        status: 'unverified',
        cites: [
          { title: 'Anthem Indiana — MCG care guidelines 27th edition update (Commercial; CG-BEH-02 to MCG B-806-T for ABA, eff. June 1, 2024)', url: 'https://providernews.anthem.com/indiana/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
          { title: 'Anthem ABA Provider Resource Guide — commercial, 11 states incl. Indiana (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
        ],
        verifyVia: 'Ask Anthem UM (Availity Essentials or the number on the member card) what evaluation age MCG B-806-T accepts for this request, and ask for the criteria in writing if a denial turns on it.',
        blocker: 'licensed',
      },
      diagnosingProviders: {
        value: 'Not published for Indiana. The statute names no diagnosing credential; it requires only that treatment be prescribed by the treating physician under a treatment plan. Anthem\'s commercial Treatment Plan Request Form for ASD asks for a diagnostic report "completed by a doctorate level clinician or allowable qualified healthcare provider (QHCP) per state regulations," but that form\'s header lists ten states and Indiana is not one of them.',
        status: 'unverified',
        cites: [
          { title: 'Ind. Code § 27-8-14.2-4 — group coverage', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' },
          { title: 'Anthem — Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025; GA, KY, ME, MO, NV, NH, NY, OH, VA, WI)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' },
        ],
        verifyVia: 'Anthem Indiana provider services or Availity Essentials: ask which diagnosing credentials Anthem accepts for an Indiana commercial ABA request and whether an Indiana-specific request form applies.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'Not published for Indiana. The statute defines ASD by reference to the DSM and names no instrument. Anthem\'s ten-state commercial request form (which does not list Indiana) asks for "Standardized diagnostic tools (for example, … ADI-R; … ADOS-2; … CARS-2)." Send the full evaluation report with the instruments and scores either way.',
        status: 'unverified',
        cites: [
          { title: 'Ind. Code § 27-8-14.2-3 — definition of autism spectrum disorder', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-3/' },
          { title: 'Anthem — Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025; GA, KY, ME, MO, NV, NH, NY, OH, VA, WI)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' },
        ],
        verifyVia: 'Anthem Indiana provider services or Availity Essentials. MCG B-806-T is licensed and unpublished, so the reviewer is the only source for any instrument requirement.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Yes, by statute on insured plans: coverage "is limited to treatment that is prescribed by the insured\'s treating physician in accordance with a treatment plan" (group policies must cover; individual-policy insurers must offer). Self-funded plans follow their plan document.',
        status: 'verified',
        cites: [
          { title: 'Ind. Code § 27-8-14.2-4 — group coverage', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' },
          { title: 'Ind. Code § 27-8-14.2-5 — individual offer', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-5/' },
        ],
      },
      telehealth: {
        value: 'Anthem lists telehealth POS 10 (member at home) and 02 (member elsewhere) for ABA but no national list of telehealth-eligible ABA codes: "Allowed codes may vary. Refer to the Allowed virtual services in addition to CPT Appendix P to obtain codes that are eligible for reimbursement in your state." A non-resident analyst may practice in Indiana only within the 5-days-a-month, 15-days-a-year exception unless Indiana-licensed.',
        status: 'plan-dependent',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — commercial, 11 states incl. Indiana (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'Ind. Code § 25-8.5-3-6 — practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' },
        ],
        verifyVia: 'Anthem\'s Virtual Visits reimbursement policy and its Indiana allowed-virtual-services list, or Anthem provider services, before scheduling remote hours.',
        blocker: 'document',
      },
      authTurnaround: {
        value: 'Depends on funding. A fully insured Indiana policy or HMO is a "health plan" under IC 27-1-37.5-5, so IC 27-1-37.5-23 applies: urgent requests answered "not later than twenty-four (24) hours," all others "not later than forty-eight (48) hours," excluding weekends and state and federal holidays; a missed deadline means the service "shall be automatically deemed authorized" (IC 27-1-37.5-28). A self-funded ERISA plan follows 29 CFR 2560.503-1: urgent "not later than 72 hours after receipt of the claim," pre-service within a reasonable time "but not later than 15 days after receipt of the claim," and an urgent request to extend ongoing treatment made "at least 24 hours prior to the expiration" is decided within 24 hours. ASO groups without Anthem\'s medical-management program have no preapproval, so no clock. Anthem publishes no reauthorization lead time.',
        status: 'plan-dependent',
        cites: [
          { title: 'Ind. Code 27-1-37.5-23 — prior authorization response deadlines', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-23/' },
          { title: 'Ind. Code 27-1-37.5-5 — “health plan” definition', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-5/' },
          { title: 'Ind. Code 27-1-37.5-28 — missed deadline = deemed authorized', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-28/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
        ],
        verifyVia: 'On the benefits call, ask whether the plan is fully insured and issued in Indiana (24/48-hour state clock) or self-funded (federal 72-hour / 15-day clock), and what turnaround Anthem quotes for ABA.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'For fully insured Indiana plans, 760 IAC 1-38.1 sets the order. For a child whose parents are married or living together, "the plan of the parent whose birthday falls earlier in a calendar year" is primary (same birthday: the plan covering that parent longest). For divorced, separated or never-cohabiting parents without a court decree, the order is the custodial parent\'s plan, then the custodial parent\'s spouse\'s, then the noncustodial parent\'s. Self-funded plans follow their plan document. TRICARE is "last pay" (32 CFR 199.8). If the child also has Indiana Medicaid, this plan pays first; the provider "must also obtain PA from the appropriate IHCP PA contractor," and IHCP will not pay for services this plan denied as out-of-network.',
        status: 'plan-dependent',
        cites: [
          { title: '760 IAC 1-38.1-13 — dependent child, parents not separated or divorced', url: 'https://www.law.cornell.edu/regulations/indiana/760-IAC-1-38.1-13' },
          { title: '760 IAC 1-38.1-14 — dependent child, separated or divorced parents', url: 'https://www.law.cornell.edu/regulations/indiana/760-IAC-1-38.1-14' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: 'IHCP — Prior Authorization module (PROMOD00012)', url: 'https://www.in.gov/medicaid/providers/files/modules/prior-authorization.pdf' },
          { title: 'IHCP — Third-Party Liability module (PROMOD00017)', url: 'https://www.in.gov/medicaid/providers/files/modules/third-party-liability.pdf' },
        ],
        verifyVia: 'Collect every coverage the child has, both parents\' birthdays and any custody decree at intake, then ask each carrier whether its plan is fully insured or self-funded and which it shows as primary.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does an Anthem ABA request in Indiana go to Carelon Behavioral Health?', a: 'Not for Indiana commercial members. Anthem\'s January 2026 preapproval list for Indiana, Kentucky, Missouri, Ohio and Wisconsin names Anthem as the responsible party for ABA, and Carelon Behavioral Health is not on it. Anthem told Indiana providers that a 2023 Carelon Behavioral Health assignment letter was an Ohio matter sent to them in error. Submit through Availity Essentials.' },
      { q: 'Is this the same as Anthem Indiana Medicaid?', a: 'No. Anthem\'s Medicaid plans (Hoosier Healthwise, HIP, Hoosier Care Connect, PathWays) follow IHCP ABA rules and have their own guide. This guide covers Anthem commercial plans.' },
      { q: 'Does Indiana\'s autism mandate cap ABA?', a: 'No. IC 27-8-14.2 sets no dollar, age, visit or hour limit. Its only limit is parity: dollar limits, deductibles and coinsurance can be no less favorable than for physical illness. Group policies must cover ABA; individual-policy insurers only have to offer it; self-funded employer plans are outside the statute.' },
      { q: 'Which criteria does Anthem use?', a: 'MCG B-806-T since June 1, 2024, replacing CG-BEH-02 and MCG W0153. MCG criteria are licensed and not published, so ask the reviewer for the specific criterion when a request is denied.' },
      { q: 'Do technicians need an Indiana license?', a: 'No. Indiana licenses behavior analysts (LBA/LABA), not technicians. A direct-contact technician is exempt while acting under the direction of an Indiana-licensed analyst, and Anthem requires the supervising BCBA or QHP in box 31 of the claim.' },
    ],
  },

  'caresource-indiana-marketplace': {
    slug: 'caresource-indiana-marketplace',
    payer: 'CareSource Indiana Marketplace',
    state: 'IN', kind: 'commercial',
    family: 'caresource',
    cardDesc: 'CareSource\'s Indiana exchange plan: ABA has no benefit limit in the 2026 EOC, PA every 6 months, new ABA policy MP-MM-1329 from 10/1/2026.',
    assessmentPA: {
      value: 'Yes — applied behavioral analysis is on CareSource\'s 2026 Indiana Marketplace prior authorization list, and medical necessity review is required "for all ABA services initially with a baseline"',
      status: 'verified',
      cites: [
        { title: 'CareSource — 2026 Indiana Marketplace Prior Authorization List (PA-INMP(2026))', url: 'https://www.caresource.com/documents/2026-in-marketplace-prior-authorization-list.pdf' },
        { title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' },
      ],
    },
    treatmentPA: {
      value: 'Yes — review at baseline and "again, every 6 months"; continuation requests go in every 6 months with updated progress and assessment scores',
      status: 'verified',
      cites: [{ title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' }],
    },
    dxRequired: {
      value: 'Yes — a "definitive, primary diagnosis of ASD and the ASD level" from a child and adolescent psychiatrist, clinical psychologist, child neurologist or developmental pediatrician, independent of the ABA provider',
      status: 'verified',
      cites: [{ title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' }],
    },
    pill: 'Payer Guide · CareSource · Indiana Marketplace',
    h1: 'CareSource Indiana Marketplace ABA coverage: the intake guide.',
    metaTitle: 'CareSource Indiana Marketplace (Exchange) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How CareSource\'s Indiana Marketplace plan covers ABA: no benefit limit in the 2026 EOC, prior authorization every 6 months, the specialist-diagnosis rule in policy MP-MM-1329, cost sharing, and how it differs from CareSource Indiana Medicaid.',
    intro: [
      'CareSource sells an Indiana Marketplace (ACA exchange) plan as well as the Indiana Medicaid plan in its own guide (caresource-indiana). They share a brand, not a rulebook. The Medicaid plan follows IHCP criteria. The Marketplace plan follows its Evidence of Coverage and CareSource\'s Marketplace ABA policy, MP-MM-1329, which covers Georgia, Indiana, Ohio and West Virginia and takes effect in its current form on October 1, 2026.',
      'The 2026 Indiana Marketplace EOC lists "Adaptive Behavior Treatment, including Applied Behavioral Analysis (ABA)" under Autism Spectrum Disorder Services with the benefit limit "None." Unlike Medicaid, the family pays the deductible, copayment and coinsurance shown in their Schedule of Benefits. The diagnosis rule is stricter than most: MP-MM-1329 accepts a diagnosis only from four named specialist types, independent of the ABA provider.',
    ],
    atGlance: [
      { label: 'Product', value: 'ACA Marketplace (exchange), Indiana — not the caresource-indiana Medicaid plan' },
      { label: 'ABA benefit limit', value: 'None — 2026 EOC, Autism Spectrum Disorder Services' },
      { label: 'Cost sharing', value: 'Deductible, copayment and coinsurance per the Schedule of Benefits, no less favorable than for physical illness' },
      { label: 'Prior auth', value: 'Required — ABA is on the 2026 Indiana Marketplace PA list; review at baseline and every 6 months' },
      { label: 'Criteria', value: 'MP-MM-1329 (eff. 10/1/2026); CareSource uses MCG for ABA medical necessity' },
      { label: 'Who may diagnose', value: 'Child/adolescent psychiatrist, clinical psychologist, child neurologist or developmental pediatrician, independent of the ABA provider' },
      { label: 'State mandate', value: 'IC 27-8-14.2 — individual policies must offer ASD coverage (group policies must cover); no age, hour or dollar cap' },
      { label: 'Decision clock', value: 'Urgent 24 hours, pre-service 48 hours (EOC; IC 27-1-37.5-23)' },
    ],
    sections: [
      {
        h2: 'Same brand, different product',
        cites: [
          { title: 'CareSource — Indiana Marketplace 2026 Evidence of Coverage (POLMP-IN(2026))', url: 'https://www.caresource.com/documents/marketplace-2026-in-basic-eoc.pdf' },
          { title: 'CareSource — 2026 Indiana Marketplace Prior Authorization List (PA-INMP(2026))', url: 'https://www.caresource.com/documents/2026-in-marketplace-prior-authorization-list.pdf' },
          { title: 'CareSource — Indiana Marketplace provider prior authorization page', url: 'https://www.caresource.com/in/providers/provider-portal/prior-authorization/marketplace/' },
        ],
        body: [
          'A CareSource card in Indiana tells you little until you know the product. The Marketplace plan has its own EOC, prior authorization list, network and cost sharing. Being in network for CareSource Medicaid does not make a practice in network for the Marketplace plan, and the Medicaid ABA rules do not carry across.',
          'The Marketplace prior authorization list (PA-INMP(2026)) includes "Applied behavioral analysis (ABA)." Services from a non-network provider need prior authorization for everything, not just listed services. Requests go through the CareSource Provider Portal ("the preferred and faster method"), by phone at 1-833-230-2101, or in writing on the Medical Prior Authorization Request Form to CareSource, P.O. Box 1307, Dayton, OH 45401-1307.',
        ],
      },
      {
        h2: 'What the 2026 EOC promises',
        cites: [
          { title: 'CareSource — Indiana Marketplace 2026 Evidence of Coverage (POLMP-IN(2026))', url: 'https://www.caresource.com/documents/marketplace-2026-in-basic-eoc.pdf' },
          { title: 'Ind. Code § 27-8-14.2-5 — individual offer', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-5/' },
        ],
        body: [
          'The EOC says "The Plan provides Benefits for Covered Persons to diagnose and treat Autism Spectrum Disorders," covering "Medically Necessary evidence-based treatment" prescribed or ordered for a diagnosed individual. In its benefit table, adaptive behavior treatment including ABA carries the benefit limit "None." Physical, speech and occupational therapy for autism are "Included in Habilitative Benefits," which the same EOC caps at 20 visits each. ABA must be "provided as prescribed by or under the supervision of a professional who is licensed; certified; or registered by an appropriate agency of this state to perform the services in accordance with a treatment plan."',
          'Cost sharing applies: "Deductible, Copayment, and Coinsurance amounts are listed in the Schedule of Benefits." Under the EOC\'s behavioral health parity clause, those amounts can be no less favorable than the ones for a physical sickness. For an individual policy, Indiana\'s mandate (IC 27-8-14.2-5) only requires the insurer to offer autism coverage, so the EOC is the document that puts ABA in this plan. Quote the family\'s deductible status and coinsurance along with the benefit.',
        ],
      },
      {
        h2: 'The diagnosis and assessment rules in MP-MM-1329',
        cites: [
          { title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' },
        ],
        body: [
          'CareSource "uses MCG Health for the review of medical necessity criteria for ABA" and adds documentation rules of its own. To start ABA it needs a "definitive, primary diagnosis of ASD and the ASD level" from a child and adolescent psychiatrist, clinical psychologist, child neurologist or developmental pediatrician. That clinician must evaluate "independent of the ABA provider and with a relationship with the member." It also needs the standardized diagnostic tools used (for example ADOS, ADI-R or CARS-2). If the diagnostic evaluation is more than 24 months old, add a description of clinical symptoms present within the past year.',
          'A licensed ABA practitioner then completes a behavioral assessment (generally no more than 8 hours every 6 months) and a treatment plan before services start. The assessment must be no more than 2 months old when treatment is requested. The initial plan generally runs 26 weeks and must include biopsychosocial history, IEP/504 information, school placement and hours, SMART goals, requested weekly hours, a discharge plan and a parent/caregiver training plan signed by the caregiver.',
          'Caregiver coaching is required in every ABA request: at least 2 hours a month or 12 hours per standard 6-month authorization, and up to 18. If the minimum is not met, "other authorized ABA units may be reduced in subsequent authorization periods." Continuation requests go in every 6 months. Two successive 6-month periods without meaningful progress on standardized assessments is a discontinuation criterion.',
        ],
      },
    ],
    collect: [
      { title: 'Marketplace or Medicaid', desc: 'Decides which CareSource rulebook applies. A Hoosier Healthwise or HIP card belongs in the caresource-indiana Medicaid guide.' },
      { title: 'Deductible status and coinsurance', desc: 'ABA has no benefit limit, but deductible, copay and coinsurance apply per the Schedule of Benefits. The family needs the number, not just a yes.' },
      { title: 'Who made the diagnosis', desc: 'Child/adolescent psychiatrist, clinical psychologist, child neurologist or developmental pediatrician, independent of your practice. Get the ASD level and the tools used (ADOS, ADI-R, CARS-2).' },
      { title: 'Evaluation date', desc: 'Older than 24 months needs a clinician\'s description of symptoms within the past year.' },
      { title: 'IEP/504 and school schedule', desc: 'The policy requires IEP/504 information and weekly school hours in the treatment plan, and excludes services duplicating school services.' },
      { title: 'Caregiver availability', desc: 'At least 12 hours of caregiver coaching per 6-month authorization is expected; missed minimums can cut later authorizations.' },
    ],
    sources: [
      { title: 'CareSource — Indiana Marketplace 2026 Evidence of Coverage (POLMP-IN(2026))', url: 'https://www.caresource.com/documents/marketplace-2026-in-basic-eoc.pdf' },
      { title: 'CareSource — 2026 Indiana Marketplace Prior Authorization List (PA-INMP(2026))', url: 'https://www.caresource.com/documents/2026-in-marketplace-prior-authorization-list.pdf' },
      { title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' },
      { title: 'CareSource — Indiana Marketplace provider prior authorization page', url: 'https://www.caresource.com/in/providers/provider-portal/prior-authorization/marketplace/' },
      { title: 'Ind. Code § 27-8-14.2-4 — group coverage', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' },
      { title: 'Ind. Code § 27-8-14.2-5 — individual offer', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-5/' },
      { title: 'Ind. Code 27-1-37.5-23 — prior authorization response deadlines', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-23/' },
      { title: 'Ind. Code § 25-8.5-3-6 — practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' },
    ],
    deliveryRules: {
      supervision: {
        value: 'MP-MM-1329: "Services delivered by a BCaBA must be supervised by a BCBA, BCBA-D, or a licensed psychologist who tested in ABA and is certified by the American Board of Professional Psychology in Behavioral and Cognitive Psychology," and a BCaBA must be enrolled in the Marketplace program and affiliated with the employing organization. Paraprofessionals must be "supervised appropriately according to applicable state regulations"; in Indiana a direct-contact technician must act "under the extended authority and direction of" an Indiana-licensed behavior analyst. No supervision-hours ratio is published.',
        status: 'verified',
        cites: [
          { title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' },
          { title: 'Ind. Code § 25-8.5-3-6 — practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' },
        ],
      },
      concurrentBilling: {
        value: 'MP-MM-1329 excludes "concurrent, overlapping billing (eg, speech therapy, occupational therapy, physical therapy) occurring during the provision of ABA services" ("Services must be distinct in time, scope and provider"), and services "provided simultaneously by more than 1 ABA provider, unless determined to be medically necessary, prior authorized and indicated in the approved behavior plan." Whether 97155 may be billed alongside 97153 is not addressed; payment rules sit in a separate reimbursement policy we did not locate.',
        status: 'unverified',
        cites: [{ title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' }],
        verifyVia: 'CareSource\'s Marketplace "Applied Behavior Analysis for Autism Spectrum Disorder – Reimbursement Policy" (named in MP-MM-1329), or Provider Services at 1-833-230-2101.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No per-day unit ceiling and no annual ABA benefit limit (EOC: "None"). Hours are set per member: "requested number of ABA hours per week based on the member\'s specific needs, not on a general program structure." Behavioral assessments "are not to exceed 8 hours every 6 months unless additional justification is provided," and caregiver coaching is authorized at up to 18 hours per 6-month period.',
        status: 'verified',
        cites: [
          { title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' },
          { title: 'CareSource — Indiana Marketplace 2026 Evidence of Coverage (POLMP-IN(2026))', url: 'https://www.caresource.com/documents/marketplace-2026-in-basic-eoc.pdf' },
        ],
      },
      noteSignature: {
        value: 'Not published in the medical policy. MP-MM-1329 requires the treatment record to be "completed by the provider or practitioner and submitted to CareSource prior to claim submission," the treatment plan to be signed by the parent/guardian (or the member if 18 or older), and reserves the right to request documentation, "particularly related to telehealth services or supervision." Session-note signature timing is not stated.',
        status: 'unverified',
        cites: [{ title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' }],
        verifyVia: 'CareSource\'s Marketplace ABA reimbursement policy and its medical-record documentation standards, or Provider Services at 1-833-230-2101.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'No POS list is published. MP-MM-1329 excludes "any program or service performed in nonconventional settings, even if performed by a licensed provider," education services available under IDEA, and "services provided by a healthcare provider located in-state when an individual receiving ABA services is out of state." Treatment plans must include school transition plans and IEP/504 information to avoid duplicating school services.',
        status: 'plan-dependent',
        cites: [{ title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' }],
        verifyVia: 'Ask CareSource Provider Services (1-833-230-2101) which POS codes it pays for ABA in home, clinic, community and school.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'Not published in the medical policy. MP-MM-1329 requires "Documentation that a licensed or certified behavior analyst will be providing ABA services" and that a BCaBA be enrolled in the Marketplace program and affiliated with the organization, but does not say whose NPI renders technician time.',
        status: 'unverified',
        cites: [{ title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' }],
        verifyVia: 'CareSource\'s Marketplace ABA reimbursement policy, or Provider Services at 1-833-230-2101: ask whether RBT time bills under the supervising BCBA or the RBT\'s own NPI.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'None published. The 2026 EOC sets no age limit on autism services, MP-MM-1329 sets none (it says ABA "should begin early in life, ideally by the age of 2, typically lasting 3 to 4 years"), and IC 27-8-14.2 has no age cap.',
        status: 'verified',
        cites: [
          { title: 'CareSource — Indiana Marketplace 2026 Evidence of Coverage (POLMP-IN(2026))', url: 'https://www.caresource.com/documents/marketplace-2026-in-basic-eoc.pdf' },
          { title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' },
          { title: 'Ind. Code § 27-8-14.2-5 — individual offer', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-5/' },
        ],
      },
      dxRecency: {
        value: 'An older diagnosis is accepted with an update: if "the diagnostic evaluation was completed more than 24 months from the date of the request," add a "description of clinical symptoms (eg, provider letter) present within the past year that require treatment." Separately, the behavioral assessment "should not be older than 2 months when requesting an authorization for treatment services."',
        status: 'verified',
        cites: [{ title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' }],
      },
      diagnosingProviders: {
        value: 'One of four specialists, "upon evaluation independent of the ABA provider and with a relationship with the member": a child and adolescent psychiatrist, a clinical psychologist, a child neurologist or a developmental pediatrician. A general pediatrician or the ABA agency\'s own clinician does not qualify under the policy text.',
        status: 'verified',
        cites: [{ title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' }],
      },
      diagnosticTools: {
        value: '"Standardized diagnostic assessment tools used as part of a referral for services (eg, Autism Diagnostic Observation Schedule [ADOS], Autism Diagnostic Interview Revised [ADI-R], Childhood Autism Rating Scale, 2nd edition [CARS-2])." The treatment plan also needs a standardized skills assessment such as VB-MAPP or ABLLS-R.',
        status: 'verified',
        cites: [{ title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' }],
      },
      referral: {
        value: 'The EOC covers ASD treatment "prescribed or ordered for an individual diagnosed with an Autism Spectrum Disorder," and ABA is provided "as prescribed by or under the supervision of" a state-licensed, certified or registered professional under a treatment plan. MP-MM-1329 expects the diagnostic tools "as part of a referral for services." No separate PCP referral form is named.',
        status: 'verified',
        cites: [
          { title: 'CareSource — Indiana Marketplace 2026 Evidence of Coverage (POLMP-IN(2026))', url: 'https://www.caresource.com/documents/marketplace-2026-in-basic-eoc.pdf' },
          { title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' },
        ],
      },
      telehealth: {
        value: '"Telehealth services may be provided when appropriate in instances deemed medically necessary with supporting documentation that provides a plan for the provision of service delivery, primarily adaptive behavior treatment with protocol modification or family adaptive behavior treatment guidance" — the 97155 and 97156 services. No code list or POS is published, and services from an in-state provider while the member is out of state are excluded.',
        status: 'plan-dependent',
        cites: [{ title: 'CareSource — Applied Behavior Analysis for Autism Spectrum Disorder, MP-MM-1329 (GA, IN, OH, WV Marketplace; eff. 10/01/2026)', url: 'https://www.caresource.com/documents/marketplace-oh-policy-medical-mm-1329-20261001' }],
        verifyVia: 'Include the telehealth delivery plan in the PA request and confirm payable codes with CareSource Provider Services (1-833-230-2101).',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'The 2026 EOC lists urgent care reviews "Within twenty-four (24) hours from the receipt of request" and preservice reviews "Within forty-eight (48) hours from the receipt of the request." That matches IC 27-1-37.5-23, which excludes weekends and state and federal holidays; a missed deadline means the service "shall be automatically deemed authorized" (IC 27-1-37.5-28). Continuation requests are due every 6 months.',
        status: 'verified',
        cites: [
          { title: 'CareSource — Indiana Marketplace 2026 Evidence of Coverage (POLMP-IN(2026))', url: 'https://www.caresource.com/documents/marketplace-2026-in-basic-eoc.pdf' },
          { title: 'Ind. Code 27-1-37.5-23 — prior authorization response deadlines', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-23/' },
          { title: 'Ind. Code 27-1-37.5-28 — missed deadline = deemed authorized', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-1-37-5-28/' },
        ],
      },
      coordinationOfBenefits: {
        value: 'The EOC\'s COB section follows the birthday rule for a child whose parents are married or living together: "The Health Plan of the parent whose birthday falls earlier in the calendar year is the Primary Health Plan" (same birthday: the plan covering that parent longest), unless a court decree says otherwise. If the child also has Indiana Medicaid, this plan pays first; the provider "must also obtain PA from the appropriate IHCP PA contractor," and IHCP will not pay for services this plan denied as out-of-network. TRICARE is "last pay" (32 CFR 199.8).',
        status: 'plan-dependent',
        cites: [
          { title: 'CareSource — Indiana Marketplace 2026 Evidence of Coverage (POLMP-IN(2026))', url: 'https://www.caresource.com/documents/marketplace-2026-in-basic-eoc.pdf' },
          { title: 'IHCP — Prior Authorization module (PROMOD00012)', url: 'https://www.in.gov/medicaid/providers/files/modules/prior-authorization.pdf' },
          { title: 'IHCP — Third-Party Liability module (PROMOD00017)', url: 'https://www.in.gov/medicaid/providers/files/modules/third-party-liability.pdf' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
        ],
        verifyVia: 'Collect every coverage the child has, both parents\' birthdays and any custody decree at intake; confirm primacy with CareSource and the other carrier.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does CareSource Indiana Marketplace cover ABA?', a: 'Yes. The 2026 Indiana Marketplace EOC lists adaptive behavior treatment including ABA under Autism Spectrum Disorder Services with no benefit limit, subject to prior authorization and the deductible, copay and coinsurance in the member\'s Schedule of Benefits.' },
      { q: 'Is this the same as CareSource Indiana Medicaid?', a: 'No. The Medicaid plan follows IHCP ABA rules and has its own guide. The Marketplace plan follows its own EOC, prior authorization list and policy MP-MM-1329, with its own network and cost sharing.' },
      { q: 'Who can diagnose autism for a CareSource Marketplace ABA request?', a: 'Under MP-MM-1329, a child and adolescent psychiatrist, clinical psychologist, child neurologist or developmental pediatrician, evaluating independently of the ABA provider. The request also needs the ASD level and the standardized tools used, such as ADOS, ADI-R or CARS-2.' },
      { q: 'How long does an authorization last?', a: 'Medical necessity is reviewed at baseline and every 6 months; the initial treatment plan generally runs 26 weeks and continuation requests are due every 6 months.' },
      { q: 'Will the family owe cost sharing?', a: 'Yes, usually. The EOC applies the deductible, copayment and coinsurance from the Schedule of Benefits, no less favorable than for physical illness. Check deductible status before quoting.' },
    ],
  },
};

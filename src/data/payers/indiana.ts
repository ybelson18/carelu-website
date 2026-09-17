import type { PayerConfig } from './types.js';

export const indianaPayers: Record<string, PayerConfig> = {
  'indiana-medicaid': {
    slug: 'indiana-medicaid',
    cardDesc: 'All-PA ABA, 2026 EPSDT-only shift, 4,000-hr lifetime cap, published rate phasedown.',
    assessmentPA: 'Required — all ABA services require prior authorization (FFS vendor: Acentra Health)',
    treatmentPA: 'Required — each PA capped at 6 months; caregiver coaching required in every ABA PA',
    dxRequired: 'Yes \u2014 ASD with a comprehensive diagnostic evaluation (CDE) + physician referral',
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
          'Separately, an accreditation mandate now binds every ABA group enrollment — new and existing. Currently enrolled agencies must submit documentation showing accreditation has been initiated with the Autism Commission on Quality (ACQ) or the Behavioral Health Center of Excellence (BHCOE) by August 1, 2026 (to INXIXabaenrollments@gainwelltechnologies.com or via the IHCP Portal) — that deadline is today — and must hold active accreditation by October 1, 2027. Missing either milestone results in enrollment deactivation, not just a warning. IHCP reissued this deadline as a reminder in Bulletin BT2026118 (7/14/2026) with no extension and sharper enforcement language: "Failure to provide documentation will result in the enrollment being deactivated." One footnote worth reading twice: BT202646 states a previous BHCOE accreditation is accepted only "until an agency\'s reaccreditation with ACQ," so agencies choosing an accreditor should plan the reaccreditation path, not just the first credential.',
          'A second, separate restriction landed in between: effective June 6, 2026, CMS approved a provider-enrollment moratorium on new ABA agency enrollments and changes of ownership in Indiana Medicaid (initial 6 months, renewable in 6-month increments) — new individual rendering-provider (RBT/BCaBA/BCBA) enrollment is unaffected, and already-accredited agencies can request an exception via OMPPProviderRelations@fssa.in.gov. HHS-OIG\'s own audit-report page confirms the moratorium follows an OIG finding of improperly paid Indiana ABA claims, though the IHCP bulletin itself doesn\'t name the audit. New or expanding ABA agencies should treat this moratorium, not just the accreditation deadline, as the binding constraint on growth in Indiana this year.',
        ],
        cites: [
          { title: 'IHCP Bulletin BT202627 — ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' },
          { title: 'IHCP Bulletin BT202646 — ABA agency accreditation requirement (3/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202646.pdf' },
          { title: 'IHCP Bulletin BT2026118 — ABA accreditation deadline reminder (7/14/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT2026118.pdf' },
          { title: 'IHCP Bulletin BT202692 — ABA agency provider enrollment moratorium (6/4/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202692.pdf' },
        ],
      },
      {
        h2: 'Rates: published, and stepping down',
        body: [
          'Indiana publishes its ABA max fees, which makes revenue modeling unusually concrete — including the pain: a 6% reduction on individual ABA codes for dates of service on/after April 1, 2026, and a further 4% on all ABA codes on/after April 1, 2027. Per 15-minute unit: 97153 (technician, U1) $17.06 → $16.04 → $15.39; 97155 (BCBA, U3) $27.63 → $25.97 → $24.93; 97156 (BCBA, U3) $28.23 → $26.54 → $25.47; 97151 assessment (U3) $27.63 → $25.97 → $24.93. From 4/1/2026, 97153 also became billable at the BCaBA/BCBA tiers, and group codes were restratified into group-size tiers with their own rates. MCE-contracted rates are negotiated but the IHCP max fee is the benchmark.',
        ],
        cites: [
          { title: 'IHCP Bulletin BT202627 — full ABA rate tables (eff. 4/1/2026 & 4/1/2027)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' },
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
        verifyVia:
          'For fee-for-service, Acentra Health at 866-725-9991 (PA) or Gainwell Customer Assistance at 800-457-4584 (billing), plus the Procedure Codes and Modifiers for Applied Behavior Analysis Therapy table in Behavioral Health Services Codes on the IHCP Code Sets page. For a managed-care member, the MCE \u2014 IHCP states that MCEs establish and publish their own billing and reimbursement requirements.',
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
        verifyVia:
          'Acentra Health at 866-725-9991 for fee-for-service, or the member\'s MCE, which publishes its own documentation and billing requirements. BT202562 also promises a future bulletin clarifying documentation requirements under the updated ABA State Plan Amendment \u2014 check for it before relying on this.',
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
          'One year on the CDE, six months on the behavior assessment. BT202562: \u201cif the CDE is more than one year old, an updated statement of need must be submitted. The statement of need must include a referral from an appropriate referring practitioner and an up-to-date behavior assessment completed by the ABA therapy provider.\u201d Members continuing current services do not need a new CDE at all, but do need an updated behavior assessment and treatment plan; new behaviors or a request for services not previously authorized may require more frequent behavior assessments. Separately, \u201cif a comprehensive behavior assessment has been completed within six months, any new provider is expected to obtain the assessment from the original provider\u201d \u2014 so ask an incoming family who tested them and when before you re-test.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }, { title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }],
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
          'Required, from a physician, and it appears twice. Member eligibility requires that \u201ca physician has made a treatment referral recommending ABA therapy,\u201d and the CDE\u2019s own required components include \u201ca physician\u2019s referral for autism-specific services.\u201d Where the CDE is more than a year old, the updated statement of need must itself carry a referral from an appropriate referring practitioner. All ABA services require prior authorization on top of the referral \u2014 through Acentra Health for fee-for-service, and through the member\'s MCE otherwise \u2014 with each PA limited to six months.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202562 \u2014 ABA documentation requirements (5/2025)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202562.pdf' }],
      },
      telehealth: {
        value:
          'Indiana moved the other way from most states. Effective April 1, 2026, codes 97151, 97152, 97153, 97154 and 0373T can no longer be billed with telehealth modifier 95 \u2014 they require in-person delivery. That reaches the assessment and all direct and group treatment, which is why the 1-hour-per-8 supervision floor has to be staffed on site. Verify the current rule per code before scheduling; Indiana has revised its ABA policy repeatedly through 2026.',
        status: 'verified',
        cites: [{ title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
      },
    },
    faq: [
      { q: 'Does Indiana Medicaid cover ABA therapy?', a: 'Yes — IHCP covers medically necessary ABA for autism with prior authorization on all services. Since April 1, 2026 it is covered exclusively through EPSDT, and coverage ends for members 21+ for dates of service on or after October 1, 2026.' },
      { q: 'What is Indiana\'s lifetime cap on ABA?', a: 'Comprehensive ABA (16+ hours/week) draws from a 4,000-hour (16,000-unit) lifetime allocation per member, tracked in the IHCP Portal. 97155 and 97156 don\'t count against it, and targeted ABA (≤15 hrs/week) is exempt.' },
      { q: 'What does Indiana Medicaid pay for ABA?', a: 'Published max fees, per 15-minute unit — e.g., 97153 at $16.04 (technician tier, DOS on/after 4/1/2026, dropping to $15.39 on 4/1/2027) and 97155 at $25.97 (BCBA tier). MCE rates are contractual but benchmark against the IHCP schedule.' },
      { q: 'Can Indiana Medicaid ABA be delivered by telehealth?', a: 'Codes 97151, 97152, 97153, 97154, and 0373T can no longer be billed with modifier 95 as of April 1, 2026 — they require in-person delivery. Verify current rules per code before scheduling.' },
    ],
  },

  'anthem-indiana-medicaid': {
    slug: 'anthem-indiana-medicaid',
    family: 'anthem',
    cardDesc: 'IHCP criteria restated in Anthem\'s UM guideline; Availity/ICR submission, F84.0 + daily schedule.',
    assessmentPA: 'Required — PA with autism dx (F84.0), testing results, intake assessment, treatment plan, and daily schedule',
    treatmentPA: 'Required — max 6 months; continuation needs updated plan, testing within 2 months of treatment start, progress per goal',
    dxRequired: 'Yes \u2014 ASD coded F84.0, with testing results (Anthem package)',
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
      { label: 'Prior auth', value: 'Required for all ABA; max 6-month authorizations' },
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
        verifyVia:
          'The MCE directly \u2014 ask whether 97155 pays alongside 97153 for the same clock time, and request the plan\'s billing and reimbursement requirements in writing.',
      },
      dailyLimits: {
        value:
          'Follows the Indiana Medicaid limits: up to 40 hours per week may be requested with anything beyond that needing an additional PA; each prior authorization is capped at six months; and since April 1, 2026 comprehensive ABA (16+ hours/week, modifier UA) draws from a 4,000-hour (16,000-unit) lifetime allocation per member, with 97155 and 97156 excluded and targeted ABA (\u226415 hours/week) exempt. No per-day MUE ceiling is published at either level.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
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
        verifyVia:
          'The MCE directly \u2014 ask for its ABA documentation and session-note standard in writing. BT202562 also promises a future bulletin clarifying documentation requirements under the updated ABA State Plan Amendment; check for it before relying on this.',
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
    },
    faq: [
      { q: 'Does Anthem Indiana Medicaid cover ABA therapy?', a: 'Yes — under Anthem\'s UM guideline, which restates IHCP criteria: all ABA prior-authorized, 6-month max authorizations, up to 40 hours/week requestable, members 20 and younger.' },
      { q: 'What does Anthem require for an ABA prior authorization?', a: 'The PA form, F84.0 diagnosis, testing results, an intake assessment (functioning, severity, social/life skills), the treatment plan, and the child\'s daily schedule — via Availity\'s Interactive Care Reviewer, fax, or phone.' },
      { q: 'Do the 2026 Indiana ABA changes apply to Anthem members?', a: 'Yes — EPSDT-only coverage, the under-21 cutoff, the 4,000-hour lifetime allocation, and telehealth restrictions are state policy that binds every MCE, even though Anthem\'s published guideline predates them.' },
    ],
  },

  'mhs-indiana': {
    slug: 'mhs-indiana',
    family: 'centene',
    cardDesc: 'IHCP criteria + MHS\'s own OTR form: named diagnostic instrument, outcome measure, utilization reporting.',
    assessmentPA: 'Required — MHS ABA Outpatient Treatment Request form with a named standardized diagnostic tool, date, and score',
    treatmentPA: 'Required — Focused vs. Comprehensive, Initial vs. Concurrent; concurrent requests report actual vs. authorized utilization',
    dxRequired: 'Yes \u2014 ASD with a named standardized instrument, date, and score on the OTR',
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
        verifyVia:
          'The MCE directly \u2014 ask whether 97155 pays alongside 97153 for the same clock time, and request the plan\'s billing and reimbursement requirements in writing.',
      },
      dailyLimits: {
        value:
          'Follows the Indiana Medicaid limits: up to 40 hours per week may be requested with anything beyond that needing an additional PA; each prior authorization is capped at six months; and since April 1, 2026 comprehensive ABA (16+ hours/week, modifier UA) draws from a 4,000-hour (16,000-unit) lifetime allocation per member, with 97155 and 97156 excluded and targeted ABA (\u226415 hours/week) exempt. No per-day MUE ceiling is published at either level.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
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
        verifyVia:
          'The MCE directly \u2014 ask for its ABA documentation and session-note standard in writing. BT202562 also promises a future bulletin clarifying documentation requirements under the updated ABA State Plan Amendment; check for it before relying on this.',
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
    assessmentPA: 'Required — all ABA prior-authorized per IHCP criteria; portal submission preferred',
    treatmentPA: 'Required — 6-month max per IHCP; continuation needs updated progress/assessment scores',
    dxRequired: 'Yes \u2014 ASD with a comprehensive diagnostic evaluation (CDE) + physician referral',
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
          'Submissions go through the CareSource Provider Portal (its stated preference, with "immediate approvals" possible for clean requests), by phone to utilization management at (844) 607-2831, or by fax to (844) 432-8924 — using the Indiana Medicaid universal PA request form; there is no CareSource-specific ABA form. The clinical package mirrors IHCP: ASD diagnosis from a licensed physician, HSPP, or qualified specialist; the comprehensive diagnostic evaluation; a behavior identification assessment and treatment plan before services; 6-month maximum authorizations; and continuation on updated progress and assessment scores.',
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
        verifyVia:
          'The MCE directly \u2014 ask whether 97155 pays alongside 97153 for the same clock time, and request the plan\'s billing and reimbursement requirements in writing.',
      },
      dailyLimits: {
        value:
          'Follows the Indiana Medicaid limits: up to 40 hours per week may be requested with anything beyond that needing an additional PA; each prior authorization is capped at six months; and since April 1, 2026 comprehensive ABA (16+ hours/week, modifier UA) draws from a 4,000-hour (16,000-unit) lifetime allocation per member, with 97155 and 97156 excluded and targeted ABA (\u226415 hours/week) exempt. No per-day MUE ceiling is published at either level.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
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
        verifyVia:
          'The MCE directly \u2014 ask for its ABA documentation and session-note standard in writing. BT202562 also promises a future bulletin clarifying documentation requirements under the updated ABA State Plan Amendment; check for it before relying on this.',
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
    assessmentPA: 'Required — all ABA codes PA-required (97151–97158, 0362T, 0373T) per the BH Reference Guide',
    treatmentPA: 'Required — IHCP 6-month max applies; OTR to medical management via the member\'s delivery system',
    dxRequired: 'Yes \u2014 ASD with a comprehensive diagnostic evaluation (CDE) + physician referral',
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
        verifyVia:
          'The MCE directly \u2014 ask whether 97155 pays alongside 97153 for the same clock time, and request the plan\'s billing and reimbursement requirements in writing.',
      },
      dailyLimits: {
        value:
          'Follows the Indiana Medicaid limits: up to 40 hours per week may be requested with anything beyond that needing an additional PA; each prior authorization is capped at six months; and since April 1, 2026 comprehensive ABA (16+ hours/week, modifier UA) draws from a 4,000-hour (16,000-unit) lifetime allocation per member, with 97155 and 97156 excluded and targeted ABA (\u226415 hours/week) exempt. No per-day MUE ceiling is published at either level.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
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
        verifyVia:
          'The MCE directly \u2014 ask for its ABA documentation and session-note standard in writing. BT202562 also promises a future bulletin clarifying documentation requirements under the updated ABA State Plan Amendment; check for it before relying on this.',
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
    assessmentPA: 'Required — via Optum: ABA Treatment Request Form through Provider Express, phone (877) 610-9785, or fax (844) 897-6514',
    treatmentPA: 'Required — non-urgent decisions within 7 calendar days (max 14); urgent 48 hrs; concurrent 1 business day',
    dxRequired: 'Yes \u2014 ASD with a comprehensive diagnostic evaluation (CDE) + physician referral',
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
      { label: 'Timelines', value: 'Non-urgent ≤7 days (max 14); urgent 48 hrs; concurrent 1 business day' },
      { label: 'Note', value: 'Most routine outpatient BH needs no PA at UHC — ABA is the exception' },
      { label: 'Diagnosis recency', value: 'State rule: CDE >1 year old needs an updated statement of need' },
    ],
    sections: [
      {
        h2: 'The Optum carve-out, in practice',
        body: [
          'Optum was selected by UHC Community Plan to build and manage the Indiana ABA network, which means ABA providers must be in the Optum network — credentialed separately from UHC\'s medical side — and enrolled with Indiana Medicaid before joining. Behavioral-health PA runs by phone at (877) 610-9785 (or the number on the member\'s card), through Provider Express ("Auth Request"), or by faxing the IHCP universal PA form to (844) 897-6514; ABA specifically uses Optum\'s ABA Treatment Request Form from the Provider Express Indiana Medicaid ABA Program page, which also hosts the provider orientation and quick-reference guide.',
          'Decision timelines are published and fast by Medicaid standards: non-urgent pre-service within 7 calendar days (14 max), urgent within 48 hours, concurrent within 1 business day. Denials appeal to UHC\'s National Appeals Team (fax (855) 312-1470, phone (866) 556-8166). New PA requirement lists took effect July 1, 2026 — re-check the UHC Indiana prior-auth page each quarter.',
        ],
        cites: [
          { title: 'UHC Community Plan — IHCP Works 2024 Prior Authorization seminar deck', url: 'https://www.in.gov/medicaid/providers/files/IHCP-Works-2024-UHC-Prior-Authorization.pdf' },
          { title: 'UHC Community Plan of Indiana — prior authorization page', url: 'https://www.uhcprovider.com/en/health-plans-by-state/indiana-health-plans/in-comm-plan-home/in-cp-prior-auth.html' },
          { title: 'FSSA — Indiana Medicaid managed care health plans (program-by-MCE roster)', url: 'https://www.in.gov/medicaid/partners/medicaid-partners/managed-care-health-plans/' },
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
        verifyVia:
          'The MCE directly \u2014 ask whether 97155 pays alongside 97153 for the same clock time, and request the plan\'s billing and reimbursement requirements in writing.',
      },
      dailyLimits: {
        value:
          'Follows the Indiana Medicaid limits: up to 40 hours per week may be requested with anything beyond that needing an additional PA; each prior authorization is capped at six months; and since April 1, 2026 comprehensive ABA (16+ hours/week, modifier UA) draws from a 4,000-hour (16,000-unit) lifetime allocation per member, with 97155 and 97156 excluded and targeted ABA (\u226415 hours/week) exempt. No per-day MUE ceiling is published at either level.',
        status: 'verified',
        cites: [{ title: 'IHCP \u2014 Behavioral Health Services module (PROMOD00039, ABA section)', url: 'https://www.in.gov/medicaid/providers/files/modules/behavioral-health-services.pdf' }, { title: 'IHCP Bulletin BT202627 \u2014 ABA policy & rate changes (2/2026)', url: 'https://www.in.gov/medicaid/providers/files/bulletins/BT202627.pdf' }],
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
        verifyVia:
          'The MCE directly \u2014 ask for its ABA documentation and session-note standard in writing. BT202562 also promises a future bulletin clarifying documentation requirements under the updated ABA State Plan Amendment; check for it before relying on this.',
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
    },
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of Indiana cover ABA?', a: 'Yes — for Hoosier Care Connect and PathWays for Aging members, administered through an Optum Behavioral Health carve-out under Indiana Medicaid clinical criteria, with PA on all ABA via Optum\'s ABA Treatment Request Form. UHC does not serve HIP or Hoosier Healthwise members in Indiana — those route to Anthem, CareSource, or MHS.' },
      { q: 'How fast does UHC/Optum decide Indiana ABA authorizations?', a: 'Published timelines: non-urgent pre-service within 7 calendar days (14 max), urgent within 48 hours, concurrent reviews within 1 business day.' },
      { q: 'Do I need separate credentialing for UHC Indiana ABA?', a: 'Yes — the ABA network is Optum-managed and credentialed separately from UHC medical, and providers must also be enrolled with Indiana Medicaid first.' },
    ],
  },

  'aetna-indiana': {
    slug: 'aetna-indiana',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the Ind. Code 27-8-14.2 mandate layer.',
    assessmentPA: 'Required — precertification (form GR-69017-4), per Aetna\'s national CPB 0554 policy',
    treatmentPA: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
    dxRequired: 'Yes \u2014 ASD only (F84.0\u2013F84.9); ABA for other diagnoses considered experimental',
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
        verifyVia:
          'Availity Essentials for the plan\'s reimbursement and claim-editing policies, or the provider-services number on the member\'s card.',
      },
      dailyLimits: {
        value:
          'Not published. CPB 0554 lists the covered ABA codes but sets no per-day unit ceiling, and Aetna publishes no ABA-specific MUE table. The operative ceiling is the precertification itself, which requires requested hours to be listed code by code \u2014 so the authorization, not a policy, is what bounds the day. CPB 0648 references intensive-intervention research norms of 25 hours a week, 12 months a year as clinical context rather than as a limit.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia:
          'The authorization letter itself, plus Availity Essentials for the plan\'s claim-editing and reimbursement policies. Ask whether CMS MUE limits are applied to ABA codes on this plan.',
      },
      noteSignature: {
        value:
          'Not published. CPB 0554 and CPB 0648 set coverage criteria and precertification content; neither states what a session note must contain, who signs it, or by when.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia:
          'Aetna provider services or Availity \u2014 ask for the documentation standard applied at audit, and keep to the precertification form\'s own data elements in the meantime.',
      },
      placeOfService: {
        value:
          'Not published as a payable-settings list. What CPB 0554 does make a submission requirement is adjacent and useful: the precertification form asks for concurrent services \u2014 PT, OT, speech and school services \u2014 plus how care is coordinated across them, so the school picture is data Aetna collects even though it publishes no school-versus-home rule.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia:
          'Benefits verification on the specific plan \u2014 ask which places of service are payable for ABA and whether school-based delivery is excluded.',
      },
      billAsProvider: {
        value:
          'Not published for ABA. CPB 0554 sets who may deliver the service \u2014 BACB-certified or state-licensed behavior analysts, with unlicensed staff supervised \u2014 but does not state whose NPI carries a technician-delivered 97153 claim, or which degree-level modifiers apply, and Aetna publishes no Indiana-specific ABA supplement. Indiana supplies the licensure half: the supervising analyst must hold the state LBA (or LABA) licence, and direct-contact technicians are exempt from licensure only while acting under the extended authority and direction of a licensed behavior analyst.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Ind. Code \u00a7 25-8.5-3-6 \u2014 practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' }],
        verifyVia:
          'Aetna provider services or Availity \u2014 confirm the rendering-versus-billing NPI convention and any required degree-level modifiers before the first claim.',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'None from either direction, which is unusual. The carrier\'s national ABA policy states no age limit, and Indiana\'s mandate \u2014 the first autism insurance mandate in the country \u2014 imposes none either: group accident and sickness policies must cover treatment of an autism spectrum disorder prescribed by the insured\'s treating physician under a treatment plan, with no age limit and no dollar, visit or hour cap anywhere in IC 27-8-14.2. Individual-policy insurers must only offer the coverage, and self-funded ERISA plans are outside the chapter entirely \u2014 so an individual or self-funded plan may lawfully lack the benefit.',
        status: 'plan-dependent',
        cites: [{ title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
      },
      dxRecency: {
        value:
          'Aetna publishes no recency rule for the ASD diagnostic evaluation, and Indiana\'s mandate sets none for commercial plans \u2014 the one-year CDE rule in this state belongs to Indiana Medicaid, not to IC 27-8-14.2. Capture the evaluation date anyway: the precertification package asks for it.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
        verifyVia:
          'The precertification call or Availity, when submitting form GR-69017-4 \u2014 ask whether an evaluation of this age will be accepted for this plan.',
      },
      diagnosingProviders: {
        value:
          'The diagnosis must come from a provider qualified to diagnose within their scope \u2014 a licensed psychologist, psychiatrist or physician. Aetna\'s precertification form (GR-69017-4, effective 1/1/2026) asks for the DSM-5 diagnosis code, the diagnosing provider and their credentials. Indiana\'s mandate adds no diagnosing-credential requirement of its own; its only gate is that the treatment be prescribed by the insured\'s treating physician.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }, { title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
      },
      diagnosticTools: {
        value:
          'No instrument is named. CPB 0554 does not require or reference a specific diagnostic tool, and the precertification form asks for the DSM-5 diagnosis code, the diagnosing provider and their credentials rather than for an instrument and score. Indiana\'s mandate names none either, and defines autism spectrum disorder only by reference to the DSM.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
        verifyVia:
          'Aetna precertification (Availity or the number on the card) \u2014 ask whether a specific instrument is expected for this plan before scheduling testing.',
      },
      referral: {
        value:
          'Yes on a fully-insured Indiana group plan, and it is the statute that requires it: coverage is \u201climited to treatment that is prescribed by the insured\'s treating physician in accordance with a treatment plan.\u201d The mandate names no credential for the person delivering the service \u2014 that comes from the carrier and from Indiana\'s separate licensure chapter \u2014 but the treating physician\'s prescription is a coverage condition. Capture the prescribing physician and the plan they signed off on. Individual policies (offer-only) and self-funded ERISA plans are outside the chapter.',
        status: 'plan-dependent',
        cites: [{ title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
      },
      telehealth: {
        value:
          'Aetna covers telehealth for 97151, 97153, 97155, 97156 and 97157 \u2014 97152 is excluded \u2014 billed with GT, 95 or FR modifiers per its telemedicine payment policy. Treat the answer as perishable: Aetna announced it would end ABA telehealth coverage in late 2023 and rescinded the change within weeks. Indiana\'s April 2026 ban on modifier 95 for 97151/97152/97153/97154/0373T is a Medicaid rule and does not reach a commercial Aetna plan.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
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
    assessmentPA: 'Not required for assessment codes 97151, 97152, 0362T (per national policy EN0499)',
    treatmentPA: 'Required — assessment + treatment plan with the ABA PA form (EN0499)',
    dxRequired: 'Yes \u2014 ASD only; Rett syndrome (F84.2) excluded under EN0499',
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
        verifyVia:
          'The treatment authorization itself, and Evernorth Behavioral Health provider services (the behavioral health number on the member\'s card) \u2014 ask whether any per-day MUE is applied to ABA codes on this plan.',
      },
      placeOfService: {
        value:
          'Not published as a payable-settings list. Two sourced facts bear on setting nonetheless: the treatment plan must carry dated baseline data per setting, so settings are declared and measured rather than assumed; and every session note must record the location. Whether a given setting is payable is a plan-benefit question.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia:
          'Benefits verification on the specific plan \u2014 ask which places of service are payable for ABA, and whether school-based delivery is excluded before you write school goals.',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'None from either direction, which is unusual. The carrier\'s national ABA policy states no age limit, and Indiana\'s mandate \u2014 the first autism insurance mandate in the country \u2014 imposes none either: group accident and sickness policies must cover treatment of an autism spectrum disorder prescribed by the insured\'s treating physician under a treatment plan, with no age limit and no dollar, visit or hour cap anywhere in IC 27-8-14.2. Individual-policy insurers must only offer the coverage, and self-funded ERISA plans are outside the chapter entirely \u2014 so an individual or self-funded plan may lawfully lack the benefit.',
        status: 'plan-dependent',
        cites: [{ title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
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
        verifyVia:
          'Evernorth Behavioral Health provider services (the behavioral health number on the member\'s card) \u2014 ask which diagnosing credentials EN0499 accepts.',
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
      },
      telehealth: {
        value:
          'The most permissive position in this directory: Cigna\'s March 2025 autism resource guide states that all ABA CPT codes are covered telehealth services, with the delivery model chosen on the individual\'s needs. Indiana\'s April 2026 modifier-95 restriction is a Medicaid rule and does not reach a commercial Cigna plan.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
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
    assessmentPA: 'Required — step 1 of Optum\'s two-step authorization (assessment auth via Provider Express)',
    treatmentPA: 'Required — step 2 (treatment auth); reviews every 4–6 months',
    dxRequired: 'Yes \u2014 DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.)',
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
    ],
    deliveryRules: {
      supervision: {
        value:
          'Optum\'s Supplemental Clinical Criteria set supervision at 1\u20132 hours per 10 hours of direct treatment, with a floor of at least one hour of 97155 per case per month. Indiana adds the licensure layer: LBA/LABA applications went live May 13, 2025 and practising ABA without the licence is prohibited, with direct-contact technicians exempt only while acting under a licensed analyst\'s extended authority and direction.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Indiana PLA \u2014 Behavior Analyst licensure', url: 'https://www.in.gov/pla/professions/behavior-analyst/' }, { title: 'Ind. Code \u00a7 25-8.5-3-6 \u2014 practice restriction and exceptions', url: 'https://law.justia.com/codes/indiana/title-25/article-8-5/chapter-3/section-25-8-5-3-6/' }],
      },
      concurrentBilling: {
        value:
          'Permitted in three named pairs: supervision alongside direct care (97153 + 97155), group oversight (97154 + 97155), and parent training alongside direct care (97153 + 97156). Not covered at all: team meetings without the member present, 1:1 classroom aides, and services owed under IDEA.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      dailyLimits: {
        value:
          'Optum authorizes in four code clusters rather than against a per-day ceiling \u2014 assessment (97151, 97152), direct care (97153, 97154), multi-staff (0362T, 0373T) and QHP services (97155\u201397158) \u2014 with units flexing within a cluster without a new authorization. Optum\'s Indiana State Mandates entry pushes the same way: services are recognized as intensive and may be provided daily, and the document disclaims any quantitative benefit limits implied by its guidelines. The number that bites runs the other way: utilization below 80 percent of authorized hours over a two-week window draws scrutiny at review.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum \u2014 ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'The authorization letter on Provider Express, and Optum provider services \u2014 ask whether any per-day MUE applies on top of the cluster structure.',
      },
      placeOfService: {
        value:
          'Optum\'s exclusions are the operative setting rule: team meetings without the member, 1:1 classroom aides, and any service owed under IDEA are not covered, which makes the school and IEP picture a coverage question rather than background.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      noteSignature: {
        value:
          'Not published in the Supplemental Clinical Criteria. What Optum specifies is the review packet rather than the session note: continued-service reviews every 4\u20136 months want progress documented per targeted behavior using the same measurement methods as baseline, mastered-program rates, change scores and updated standardized adaptive measures. Who signs an individual session note, and by when, is not stated.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'Optum provider services, or your Provider Express network manager \u2014 ask for the documentation standard applied at audit.',
      },
      billAsProvider: {
        value:
          'Not published in the Supplemental Clinical Criteria. Optum authorizes by code cluster and names a QHP services cluster (97155\u201397158) distinct from the direct-care cluster (97153, 97154), which implies a credential split on the rendering line but does not state whose NPI carries a technician-delivered 97153 claim or which degree-level modifiers apply.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'Optum provider services or the authorization letter on Provider Express \u2014 confirm the rendering-versus-billing NPI convention and any required modifiers before the first claim.',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'None from either direction, which is unusual. The carrier\'s national ABA policy states no age limit, and Indiana\'s mandate \u2014 the first autism insurance mandate in the country \u2014 imposes none either: group accident and sickness policies must cover treatment of an autism spectrum disorder prescribed by the insured\'s treating physician under a treatment plan, with no age limit and no dollar, visit or hour cap anywhere in IC 27-8-14.2. Individual-policy insurers must only offer the coverage, and self-funded ERISA plans are outside the chapter entirely \u2014 so an individual or self-funded plan may lawfully lack the benefit.',
        status: 'plan-dependent',
        cites: [{ title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
      },
      dxRecency: {
        value:
          'Optum publishes no recency rule for the ASD diagnosis in the Supplemental Clinical Criteria cited here; the cadence it does set is downstream \u2014 continued-service reviews every 4\u20136 months requiring updated standardized adaptive measures and progress measured the same way as baseline. Indiana\'s mandate sets no recency rule for commercial plans.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Ind. Code \u00a7 27-8-14.2-4 (group mandate)', url: 'https://codes.findlaw.com/in/title-27-insurance/in-code-sect-27-8-14-2-4/' }],
        verifyVia:
          'Optum provider services or the assessment-authorization request on Provider Express \u2014 ask whether an evaluation of this age will be accepted before scheduling.',
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
      },
      telehealth: {
        value:
          'Gated on the provider, not just the code. Tele-supervision and virtual family training require the provider to be an approved Optum virtual-visits provider with a completed attestation on Provider Express, and the authorization itself must note virtual delivery. Optum frames telehealth as a supplement to in-person care, not a replacement.',
        status: 'verified',
        cites: [{ title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' }],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Indiana?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Indiana\'s mandate (Ind. Code 27-8-14.2) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Indiana autism mandate require?', a: 'Indiana’s mandate (2001) was the first autism insurance mandate in the country, and it remains one of the strongest: group accident and sickness policies must cover ASD treatment prescribed by the treating physician under a treatment plan, with no age limits and no dollar, visit, or hour caps — and cost-sharing no less favorable than for physical illness generally. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does UnitedHealthcare pay for ABA in Indiana?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Indiana Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
    ],
  },

  'anthem-bcbs-indiana': {
    slug: 'anthem-bcbs-indiana',
    payer: 'Anthem BCBS Indiana',
    state: 'IN', kind: 'commercial',
    family: 'anthem',
    cardDesc: 'No dollar, age, visit or hour cap in the mandate; Indiana now licenses LBAs; Anthem reviews in-house.',
    assessmentPA: 'Yes — ABA is precertified as a category; Anthem\'s Indiana list names no individual CPT codes, so request assessment and treatment together',
    treatmentPA: 'Yes — responsible party Anthem; the authorization now carries weekly approved units',
    dxRequired: 'Yes — and the treatment must be prescribed by the insured\'s treating physician under a treatment plan',
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
        verifyVia:
          'Availity Essentials \u2192 Authorizations and Referrals, or Anthem provider services \u2014 ask what evaluation age B-806-T accepts. If a denial turns on recency, ask for the criteria in writing; a denial citing the retired CG-BEH-02 is itself an appeal point.',
      },
      diagnosingProviders: {
        value:
          'The statute names no credential of its own. Its only gate on who delivers or authorises the service is that the treatment be \u201cprescribed by the insured\'s treating physician in accordance with a treatment plan\u201d \u2014 so the diagnosing-credential requirement comes from the carrier, and Anthem applies the unpublished MCG B-806-T. Anthem\'s commercial ASD Treatment Plan Request Form, which covers ten states, requires for an initial assessment-only request (97151/97152/0362T) or where the member has new coverage a diagnostic evaluation by a doctorate-level clinician or an allowable qualified healthcare provider per state regulations, showing how the patient meets DSM-5-TR criteria.',
        status: 'verified',
        cites: [{ title: 'Anthem \u2014 Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' }, { title: 'Ind. Code \u00a7 27-8-14.2-4 \u2014 group coverage', url: 'https://law.justia.com/codes/indiana/title-27/article-8/chapter-14-2/section-27-8-14-2-4/' }],
      },
      diagnosticTools: {
        value:
          'Anthem\'s commercial ASD Treatment Plan Request Form asks the diagnostic evaluation to name the standardized tools used, giving ADI-R, ADOS-2 and CARS-2 as examples rather than as a closed list. The statute names none \u2014 it defines autism spectrum disorder as \u201ca neurological condition, including Asperger\'s syndrome and autism, as defined in the Diagnostic and Statistical Manual of Mental Disorders.\u201d Ask the family for the full evaluation report, not the one-line diagnosis letter.',
        status: 'verified',
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
        verifyVia:
          'Anthem\'s Virtual Visits reimbursement policy and the Indiana allowed-virtual-services list, or Anthem provider services via Availity Essentials.',
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
};

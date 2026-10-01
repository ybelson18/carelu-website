import type { PayerConfig } from './types.js';

export const nationalPayers: Record<string, PayerConfig> = {
  'aetna': {
    slug: 'aetna',
    cardDesc: 'CPB 0554 \u2014 ASD-only coverage, precert form GR-69017-4, telehealth codes.',
    family: 'aetna',
    assessmentPA: {
      value: 'Required — precertification via Availity or the precert line; clinical detail on form GR-69017-4 (7-26, eff. 8/1/2026)',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — precertification',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
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
    payer: 'Aetna',
    state: 'US', kind: 'commercial',
    pill: 'Payer Guide · Aetna',
    h1: 'Aetna ABA coverage: verification & prior-auth guide.',
    metaTitle: 'Does Aetna Cover ABA Therapy? Prior Auth & Intake Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA therapy: CPB 0554 policy, the precertification process and required information, provider qualifications, and telehealth rules — an intake-focused guide for ABA providers.',
    intro: [
      'Aetna covers ABA for autism spectrum disorder under its clinical policy CPB 0554 — and considers it experimental for everything else. Coverage is real but gated: precertification with specific required information, an ASD-only diagnosis scope, and plan-by-plan variation that makes benefit verification non-negotiable. Here\'s what intake needs to capture to get a family from "we have Aetna" to an authorized start.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD (F84.0–F84.9) only' },
      { label: 'Policy', value: 'CPB 0554 (ABA) + CPB 0648 (ASD)' },
      { label: 'Precert', value: 'Required — via Availity or phone; form GR-69017-4 (7-26, eff. 8/1/2026) carries the clinical detail (not for MD/MA)' },
      { label: 'Provider bar', value: 'BACB certification or state BA licensure' },
      { label: 'Telehealth', value: 'Covered for 97151, 97153, 97155, 97156, 97157' },
      { label: 'Reauth cadence', value: 'Commonly ~6 months (verify per plan)' },
    ],
    sections: [
      {
        h2: 'What Aetna requires for precertification',
        cites: [{ title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
        body: [
          'The current revision of form GR-69017-4 is stamped 7-26 and states: "Effective August 1, 2026, this form replaces all other Applied Behavior Health Analysis (ABA) precertification information request documents and forms." The form does not start a request. You initiate on Availity (Authorization/Precertification Add, then a short questionnaire if asked) or by calling the Precertification Department, and attach the completed form to the case. The form says "Don\'t use this form for Maryland and Massachusetts." It also asks for results of a standardized assessment (e.g., Vineland, ABAS, VB-MAPP) completed within the past 12 months. The rest of what it asks for is what a good intake process should already have collected:',
        ],
        list: [
          { title: 'Diagnosis details', desc: 'DSM-5 diagnosis code(s), the diagnosing provider, and their credentials.' },
          { title: 'Requested hours by CPT code', desc: 'The proposed intensity, code by code — which means the assessment plan needs to exist before the request.' },
          { title: 'Supervising clinician', desc: 'Name and credential of the BCBA or licensed clinician overseeing the case.' },
          { title: 'Concurrent services', desc: 'PT/OT/speech and school services, plus how care is coordinated across them.' },
          { title: 'Rationale for changes', desc: 'Any increase or change in hours needs explicit clinical justification.' },
        ],
      },
      {
        h2: 'Provider qualifications',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
        body: [
          'Practitioners delivering ABA under Aetna policy need BACB national certification or state behavior-analyst licensure; unlicensed staff work under supervision per practice standards. The diagnosis itself must come from a provider qualified to diagnose within their scope — licensed psychologist, psychiatrist, or physician. CPB 0648 also references intensive-intervention research norms (25 hours/week, 12 months/year), useful context when justifying requested intensity.',
        ],
      },
      {
        h2: 'Telehealth',
        cites: [{ title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table: Commercial vs. Medicare columns; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' }],
        body: [
          'On commercial plans Aetna\'s telemedicine payment policy lists 97151, 97153, 97155, 97156 and 97157 as telehealth-eligible (97152, 97154 and 97158 are checked for Medicare Advantage only), billed with GT/95/FR modifiers; the posted policy shows a last review of June 2021. The lesson for intake: telehealth rules can change and the posted policy is old; verify the current position on every benefits check rather than assuming last quarter\'s answer.',
        ],
      },
      {
        h2: 'The plan-variation trap',
        cites: [{ title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        body: [
          'CPB 0554 is Aetna\'s clinical policy — but self-funded employer plans can carve benefits differently, and state mandates layer on top. Two families with Aetna cards can have materially different ABA benefits. The only safe intake behavior is a live benefits verification on every family: ABA coverage confirmation, deductible status, visit or dollar limits, and the precert path for that specific plan.',
        ],
      },
    ],
    collect: [
      { title: 'Member ID, group ID & subscriber', desc: 'Plus a card photo — enough to run verification without a callback.' },
      { title: 'Plan type', desc: 'Fully insured vs. self-funded changes which rules apply; note the state of issue for mandate purposes.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD code, diagnosing provider and credentials, evaluation date.' },
      { title: 'Concurrent services', desc: 'Speech, OT, PT, school supports — required on the precert form.' },
      { title: 'Prior ABA history', desc: 'Previous providers, hours, and progress — needed to justify requested intensity.' },
    ],
    sources: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      { title: 'Aetna — Applied behavior analysis medical necessity guide (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table: Commercial vs. Medicare columns; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Aetna\'s ABA medical necessity guide: services "must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists" unless state mandates, plan documents or contracts require otherwise, and where those allow unlicensed or non-certified staff "there must be supervision and direction of the unlicensed or non-certified providers in line with practice standards." No RBT credential is named. Aetna publishes no hours-per-hours ratio of its own. The precertification form does make supervision a submission fact rather than an internal one: it asks for the name and credential of the BCBA or licensed clinician overseeing the case. For context on intensity rather than supervision, CPB 0648 references intensive-intervention research norms of 25 hours a week, 12 months a year.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
      },
      concurrentBilling: {
        value:
          'Not published. Neither CPB 0554 nor CPB 0648 states whether 97155 and 97153 may be billed for the same clock time; Aetna handles code-pair questions through reimbursement and claim-editing policy rather than through the clinical policy bulletin. The precertification form does require requested hours to be listed code by code, so the authorization will at least be explicit about which codes are in play.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'Availity Essentials for the plan\'s reimbursement and claim-editing policies, or the provider-services number on the member\'s card. Ask specifically about 97153 billed alongside 97155.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'Not published for ABA. Aetna\'s ABA medical necessity guide sets who may deliver or bill the service \u2014 BACB-certified or state-licensed behavior analysts, with unlicensed staff supervised \u2014 but does not state whose NPI carries a technician-delivered 97153 claim, or which degree-level modifiers apply.',
        status: 'unverified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
        verifyVia: 'Aetna provider services or Availity \u2014 confirm the rendering-versus-billing NPI convention and any required modifiers before the first claim.',
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
          'Aetna publishes no ABA place-of-service list. On school settings it says two things. CPB 0648: "Many Aetna plans exclude coverage of educational services. For example, speech therapy or ABA services during class would be excluded under these plans. Please check benefit plan exclusions." And precertification form GR-69017-4 asks "Are any ABA hours being requested during class?" and, if so, how many and for which codes. The IEP/IDEA carve-out in Aetna\'s ABA medical necessity guide sits in its Maryland exhibit, not in the national criteria. Where ABA is payable in a school, the community or a group home is a benefit-document question.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
        verifyVia: 'The member\'s benefit document (educational-services exclusion), and Aetna provider services for whether school-setting ABA is payable on that plan.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'CPB 0554 states no age limit for ABA. What decides the age question on an Aetna card is therefore the plan and the state: self-funded employer plans can carve benefits differently, and state autism mandates layer their own age bands on fully-insured business. Two families with Aetna cards can have materially different ABA benefits, so age is a benefits-verification answer, not a policy lookup.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'A live benefits verification on every family \u2014 ABA coverage confirmation, any age or visit limits, deductible status, and the precert path for that specific plan.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'No recency rule is published. The ABA Medical Necessity Guide does not state how recent the ASD diagnostic evaluation must be (its 12-month test is on the functional-impairment scale), and the precertification form (GR-69017-4, 7-26 revision, eff. 8/1/2026) asks for the diagnosis code, the diagnosing provider and their credentials without a date test. The form\'s date test is on the standardized assessment instead: results "completed within the past 12 months," with a repeat validated assessment every 6\u201312 months. Capture the evaluation date at intake regardless; any plan-level rule will be applied against it.',
        status: 'unverified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
        verifyVia: 'The precertification submission itself \u2014 Availity\'s two-step precert add plus clinical questionnaire, or the precert phone line. Ask whether an evaluation of this age is acceptable before booking the assessment.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'The diagnosis must come from a provider qualified to diagnose within their scope \u2014 a licensed psychologist, psychiatrist or physician. That is a scope-of-practice test rather than a closed credential list, and it is enforced at the front door: the precertification form asks for the DSM-5 diagnosis code, the diagnosing provider and their credentials, so the diagnosing clinician\'s name and credential are submission data.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
      },
      diagnosticTools: {
        value:
          'No instrument is named. CPB 0554 does not require or reference a specific diagnostic tool, and the precertification form asks for the diagnosis code, the diagnosing provider and their credentials rather than for an instrument, date and score \u2014 a notably lighter bar than Optum\'s validated-tool requirement or MHS\'s named-instrument form. Collect the instrument anyway: a state mandate or a downstream reviewer may want it even when the policy does not.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'Aetna precertification (Availity or the number on the card) \u2014 ask whether a specific instrument is expected for this plan before scheduling testing.',
        blocker: 'per-case',
      },
      referral: {
        value:
          'Aetna\'s ABA documents impose no referral or physician-order requirement of their own (the ABA Medical Necessity Guide names none). What Aetna requires is precertification: its behavioral health precertification list covers every ABA code, assessment and treatment alike; the request is initiated on Availity or by phone, with form GR-69017-4 (7-26 revision, eff. 8/1/2026) supplying the clinical information; and reauthorization runs on a roughly six-month cadence (the guide evaluates progress every six months). Where a state autism mandate applies to a fully-insured plan, that mandate may add a prescription or physician-order requirement of its own \u2014 Maryland and Missouri both do \u2014 so check the state layer before assuming none exists.',
        status: 'verified',
        cites: [{ title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }, { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
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
          'No national number: Aetna\'s provider manual publishes no decision clock for ABA precertification, so the deadline comes from the law that governs the plan. Self-funded employer plans (ERISA): a pre-service decision "not later than 15 days after receipt of the claim," extendable once by 15 days, and 72 hours for urgent care. Fully insured plans follow the state\'s utilization-review law, which is often tighter — Aetna\'s own state supplement shows Texas at "3 calendar days from receipt of a complete request." Reauthorization lead time is likewise a state-law and plan question; capture the authorization end date and file the continued-service request well before it.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna — Provider manual (8102800-01-01, 6/26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Aetna — Provider manual State Supplement, Texas section (8705750-01-01, 7/26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/ProviderManual-StateSpplmt.pdf' },
          { title: '29 CFR § 2560.503-1(f)(2) — ERISA group health plan claim decision deadlines', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification: ask whether the plan is fully insured (state UR deadlines) or self-funded (ERISA deadlines), and ask Aetna precertification how early a reauthorization may be submitted.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Aetna coordinates "as allowed by state or federal law following the National Associations of Insurance Commissioners (NAIC) guidelines. If there is no applicable law, then we coordinate according to the member\'s plan," and lists the birthday rule among the order-of-benefit rules it applies: for a child whose parents are married or living together, the plan of the parent whose birthday falls earlier in the year is primary; separated or divorced parents follow the custodial-parent rule unless a court order assigns coverage. Secondary payment is either the standard 100%-allowable method or maintenance of benefits, "a method used by many self-funded plans" under which Aetna pays nothing when the primary\'s benefit equals or exceeds Aetna\'s. Aetna pays ahead of Medicaid (payer of last resort by federal law — the Medicaid program may still require its own PA), TRICARE (secondary to other health insurance by law) and CHAMPVA (pays after other health insurance).',
        status: 'verified',
        cites: [
          { title: 'Aetna — Provider manual (8102800-01-01, 6/26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR § 199.8 — TRICARE double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/part-199/section-199.8' },
          { title: 'VA — CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy?', a: 'Yes — for autism spectrum disorder (ICD-10 F84.0–F84.9) under clinical policy CPB 0554, with precertification. Aetna considers ABA experimental for non-ASD indications.' },
      { q: 'Does Aetna require prior authorization for ABA?', a: 'Yes. Precertification is initiated on Availity or by phone, and form GR-69017-4 (7-26 revision, eff. 8/1/2026) supplies diagnosis details, requested hours per CPT code, the supervising clinician, and concurrent services.' },
      { q: 'Does Aetna cover ABA by telehealth?', a: 'Yes, for codes 97151, 97153, 97155, 97156, and 97157 (not 97152) — but the policy has shifted before, so confirm the current rule during each benefits verification.' },
      { q: 'Does Aetna require RBT certification for ABA technicians?', a: 'Not by name. Aetna\'s ABA medical necessity guide says services must be provided directly or billed by licensed behavior analysts, BCBAs or licensed psychologists "unless state mandates, plan documents or contracts require otherwise." Where those allow services by unlicensed or non-certified staff, "there must be supervision and direction" in line with practice standards. Your contract and any state licensure law decide the technician credential.' },
    ],
  },

  'cigna': {
    slug: 'cigna',
    cardDesc: 'No PA on assessment codes; EN0499 treatment authorization; full telehealth.',
    family: 'cigna',
    assessmentPA: {
      value: 'Not required for assessment codes 97151, 97152, 0362T (with ASD dx + licensed/BCBA provider)',
      status: 'verified',
      cites: [
        { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — assessment + plan with the ABA PA form',
      status: 'verified',
      cites: [
        { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD only; Rett syndrome (F84.2) excluded under EN0499',
      status: 'verified',
      cites: [
        { title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    payer: 'Cigna / Evernorth',
    state: 'US', kind: 'commercial',
    pill: 'Payer Guide · Cigna / Evernorth',
    h1: 'Cigna ABA coverage: prior auth, plans & telehealth.',
    metaTitle: 'Cigna ABA Coverage & Prior Authorization: Intake Guide | Carelu',
    metaDescription:
      'How Cigna/Evernorth covers ABA: no PA on assessment codes, treatment authorization requirements under EN0499, treatment-plan standards, session-note rules, and full telehealth coverage.',
    intro: [
      'Cigna (through Evernorth Behavioral Health) covers ABA for autism with one of the more intake-friendly front doors in the industry: no prior authorization on assessment codes. The rigor arrives at the treatment-authorization step, where policy EN0499 sets detailed requirements for assessments, treatment plans, and progress data. Understanding both halves lets an intake team start families fast without setting up a denial later.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — ASD only (Rett syndrome excluded)' },
      { label: 'Assessment PA', value: 'None for 97151, 97152, 0362T (with ASD dx + licensed/BCBA provider)' },
      { label: 'Treatment PA', value: 'Required — assessment + plan + PA form' },
      { label: 'Submission window', value: 'Encouraged: up to 30 days before or within 2 weeks after start; retrospective only after 90+ days (EN0499)' },
      { label: 'Telehealth', value: '"All ABA CPT codes are covered telehealth services"' },
      { label: 'Policy', value: 'EN0499 (eff. 5/15/2026) + autism resource guide' },
      { label: 'Assessment recency', value: 'Standardized assessment within 60 days of treatment start' },
    ],
    sections: [
      {
        h2: 'The intake-friendly part: no assessment PA',
        cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        body: [
          'With an autism diagnosis on file, an independently licensed provider or BCBA can run assessment codes 97151, 97152, and 0362T without prior authorization (when the plan covers ABA). For intake, that means the sequence can be: verify benefits → book the assessment immediately → build the treatment request from the assessment. No authorization purgatory between first call and first appointment — if your intake process is fast enough to use it.',
        ],
      },
      {
        h2: 'Treatment authorization',
        cites: [{ title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        body: [
          'The treatment PA package is the completed assessment plus treatment plan with Cigna\'s ABA PA form, which Cigna\'s autism resource guide encourages providers to submit up to 30 days before or within two weeks after the start of service ("A delay in request may result in a retrospective review"). EN0499 (eff. 5/15/2026) sets the actual retrospective trigger: "A retrospective authorization request for ABA is any request made when more than 90 days have passed since the start date of the requested authorization, or any time after the patient has discharged." Initiation requires a standardized, validated instrument — current edition, e.g., Vineland-3 — administered within 60 days before treatment start, with deficits mapped to DSM-5-TR ASD domains and to the treatment plan\'s goals.',
        ],
        list: [
          { title: 'Treatment-plan bar', desc: 'Measurable goals with operational definitions and mastery criteria; dated baseline data per setting; caregiver-training goals with their own baselines and data plans; a named, credentialed supervisor; and defined discharge criteria with a fading plan.' },
          { title: 'Session notes', desc: 'Every note needs date, start/end times, location, focus, detailed intervention description, persons present, service type, and the rendering provider\'s name, credential, and signature.' },
          { title: 'Continued treatment', desc: 'Updated plan with current data (≤60 days old), sustained progress, a repeat standardized assessment within a year, and re-assessment after any break over 60 days.' },
        ],
      },
      {
        h2: 'Billing restrictions worth knowing at intake',
        cites: [{ title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        body: [
          'ABA isn\'t covered when delivered at the same time as another therapy (speech, OT) to the same child — so intake should map the family\'s existing therapy schedule, not just list it. Only one provider can bill a unit of time, with the standard supervision exceptions. And if a family is transitioning from another ABA agency, overlapping authorization periods require documented coordination between agencies — capture the outgoing provider\'s details up front.',
        ],
      },
      {
        h2: 'Supervision and credentialing',
        cites: [{ title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        body: [
          'Assessment and case supervision must come from a BCBA, licensed behavior analyst, or independently licensed clinician with documented ABA training, with direct supervision at the standard 1–2 hours per 10 hours of direct treatment. Evernorth doesn\'t credential non-licensed staff — RBT services bill under the supervising provider.',
        ],
      },
      {
        h2: 'Is Cigna\'s ABA network open to new providers?',
        body: [
          'Evernorth Behavioral Health, which runs Cigna\'s ABA network, says it "is committed to expanding our network of autism providers." It requires providers to be certified by a national governing body or a state licensing board (BCBA, BCBA-D, BCaBA, licensed behavior analyst or other behavioral health licensure). Individual providers complete the Evernorth Behavioral Provider Information Form; autism clinics and large group practices complete the Evernorth Screening Application for Autism Clinics. An application can take up to 90 days, and once a clinic contract is signed each certified or licensed provider must also be credentialed, which "can take an additional 60 to 90 days." Providers must be fully credentialed to render in-network services. "Evernorth does not credential nonlicensed/noncertified staff": technician services are billed under the supervising provider.',
        ],
        cites: [{ title: 'Evernorth Behavioral Health — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
    ],
    collect: [
      { title: 'Member ID + plan details', desc: 'Card photo, subscriber info, and whether the plan actually includes the ABA benefit.' },
      { title: 'Diagnosis documentation', desc: 'DSM-5-TR ASD diagnosis; note Rett syndrome (F84.2) is excluded under EN0499.' },
      { title: 'Recent standardized assessment', desc: 'E.g., Vineland-3 within 60 days of treatment start — or plan to administer one during your assessment window.' },
      { title: 'Current therapy schedule', desc: 'Days/times of speech, OT, PT — concurrent-service timing directly affects billability.' },
      { title: 'Prior/current ABA provider', desc: 'Transitions need documented coordination; get releases signed at intake.' },
    ],
    sources: [
      { title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Assessment and case supervision must come from a BCBA, a licensed behavior analyst, or an independently licensed clinician with documented ABA training, with direct supervision at the standard 1\u20132 hours per 10 hours of direct treatment. Evernorth does not credential non-licensed staff at all, so the supervising clinician is also the contractual party. The treatment plan must name a credentialed supervisor and define discharge criteria with a fading plan.',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      concurrentBilling: {
        value:
          'Two rules, and the first one catches more claims than the second. ABA is not covered when delivered at the same time as another therapy \u2014 speech, OT \u2014 to the same child, which makes the family\'s existing therapy schedule an intake fact rather than a note. And only one provider can bill a unit of time, with the standard supervision exceptions. Where a family is transitioning from another ABA agency, overlapping authorization periods require documented coordination between the agencies, so capture the outgoing provider\'s details and get releases signed up front.',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      noteSignature: {
        value:
          'EN0499 specifies the note element by element: every session note needs the date, start and end times, location, focus, a detailed description of the intervention, the persons present, the service type, and the rendering provider\'s name, credential and signature. No countersignature requirement and no signing deadline are published.',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      billAsProvider: {
        value:
          'Evernorth does not credential non-licensed staff, so RBT-delivered services bill under the supervising provider. The treatment plan must carry a named, credentialed supervisor, and assessment codes are payable only when performed by an independently licensed provider or a BCBA.',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      dailyLimits: {
        value:
          'Not published as a per-day unit ceiling. EN0499 bounds the day from a different direction: ABA is not covered when delivered at the same time as another therapy to the same child, and only one provider can bill a unit of time, with the standard supervision exceptions. Requested intensity is set in the treatment plan and authorized on the ABA PA form rather than against a published cap.',
        status: 'unverified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia: 'The treatment authorization itself, and Evernorth Behavioral Health provider services (the behavioral health number on the member\'s card) \u2014 ask whether any per-day MUE is applied to ABA codes on this plan.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Not published as a payable-settings list. Two sourced facts bear on setting nonetheless: the treatment plan must carry dated baseline data per setting, so settings are declared and measured rather than assumed; and every session note must record the location. Whether a given setting is payable is a plan-benefit question.',
        status: 'unverified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia: 'Benefits verification on the specific plan \u2014 ask which places of service are payable for ABA, and whether school-based delivery is excluded before you write school goals.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'EN0499 publishes no age limit for ABA. The bound on a Cigna card therefore comes from the plan document and, on fully-insured business, from the state autism mandate \u2014 Maryland\'s habilitative mandate runs through the month the enrollee turns 19, Missouri\'s ABA dollar cap runs through age 18, Indiana\'s mandate has no age term at all. Establish plan funding type before quoting any bound.',
        status: 'plan-dependent',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia: 'Benefits verification on the specific plan \u2014 confirm the ABA benefit exists, the funding type, and any age or visit limit.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Cigna\'s recency rule attaches to the standardized assessment rather than to the diagnosis, and it is the tightest in this directory. Initiation requires a standardized, validated instrument in its current edition administered within 60 days before treatment start. Continued treatment needs an updated plan with current data no more than 60 days old, sustained progress, a repeat standardized assessment within a year, and a re-assessment after any break in service longer than 60 days. If the family\'s most recent testing is older than 60 days, plan to administer during the assessment window \u2014 which Cigna lets you open without prior authorization.',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosingProviders: {
        value:
          'EN0499 as quoted in this guide sets the credential bar for who performs the ABA assessment and supervises the case \u2014 an independently licensed provider or a BCBA \u2014 rather than naming who may make the ASD diagnosis. What the policy does fix about the diagnosis is its content: a DSM-5-TR autism spectrum diagnosis, with Rett syndrome (F84.2) expressly excluded.',
        status: 'unverified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        verifyVia: 'Evernorth Behavioral Health provider services (the behavioral health number on the member\'s card) \u2014 ask which diagnosing credentials EN0499 accepts before relying on a diagnosis from a non-doctoral clinician.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value:
          'A standardized, validated instrument in its current edition \u2014 EN0499 gives Vineland-3 as the example rather than a closed list \u2014 administered within 60 days before treatment start, with the deficits it measures mapped to DSM-5-TR ASD domains and carried through into the treatment plan\'s goals. Continued treatment requires a repeat standardized assessment within a year. The instrument is the hinge of the treatment authorization, so pick it before the assessment rather than after.',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      referral: {
        value:
          'No referral or physician order is required by EN0499, and \u2014 the part that makes Cigna the friendliest front door in this directory \u2014 no prior authorization is required on assessment codes 97151, 97152 and 0362T when there is an autism diagnosis on file and the provider is independently licensed or a BCBA. Treatment is the gated step: the completed assessment plus a treatment plan on Cigna\'s ABA PA form, which Cigna\'s autism resource guide encourages providers to submit up to 30 days before or within two weeks after the start of service. The retrospective line is EN0499\'s, not that window: a request becomes retrospective "when more than 90 days have passed since the start date of the requested authorization, or any time after the patient has discharged."',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      telehealth: {
        value:
          'The most permissive published position in this directory: Cigna\'s March 2025 autism resource guide states that all ABA CPT codes are covered telehealth services, with the delivery model \u2014 in person, telehealth or hybrid \u2014 chosen on the individual\'s needs rather than by code. State Medicaid telehealth restrictions do not reach commercial Cigna business. That includes the 97151 assessment and 97155 protocol modification. EN0499 describes direct case supervision as occurring "concurrently with the delivery of direct treatment," with the BCBA "face-to-face with the individual and either the Registered Behavior Technician® [RBT®] or the Board Certified Assistant Behavior Analyst® [BCaBA®]," at one to two hours per ten hours of direct treatment; it publishes no separate in-person minimum for supervision delivered by telehealth.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      authTurnaround: {
        value:
          'Cigna/Evernorth publishes no clock of its own: "We (or our designees) make coverage determinations in accordance with the time frames required under applicable law." For self-funded employer plans that is the ERISA claims rule — a pre-service decision within 15 days (one 15-day extension) and 72 hours for urgent care; fully insured plans follow the state\'s utilization-review law. What Cigna does publish on timing is encouragement, not a rule: its autism resource guide says "we encourage providers to request authorizations up to 30 days in advance of or two weeks after the start date of service. A delay in request may result in a retrospective review and could delay the determination for up to 30 days." EN0499 (eff. 5/15/2026) sets the actual retrospective trigger: "A retrospective authorization request for ABA is any request made when more than 90 days have passed since the start date of the requested authorization, or any time after the patient has discharged."',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth Behavioral Health Administrative Guidelines (March 2026) (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
          { title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: '29 CFR § 2560.503-1(f)(2) — ERISA group health plan claim decision deadlines', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification: fully insured (state UR deadlines) or self-funded/ASO (ERISA)? Confirm the reauthorization window with the Cigna Autism Care Coordinator team (877-279-7603).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Evernorth follows the NAIC order-of-benefit rules "subject to applicable law and the terms of the benefit plan." Dependent child of married parents living together: the "birthday rule" — "The plan of the parent whose birthday falls earlier in the calendar year is primary" (month and day only; same birthday, the longer-running plan). Divorced or separated parents: a court decree first, otherwise custodial parent, custodial parent\'s spouse, noncustodial parent, noncustodial parent\'s spouse. When Cigna is secondary, bill the primary first and submit to Cigna with the primary\'s explanation of payment; the 90-day filing limit runs from the primary\'s processing date. Cigna pays ahead of Medicaid (payer of last resort by federal law — the Medicaid program may still require its own PA), TRICARE (secondary to other health insurance by law) and CHAMPVA (pays after other health insurance).',
        status: 'verified',
        cites: [
          { title: 'Evernorth Behavioral Health Administrative Guidelines (March 2026) (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
          { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR § 199.8 — TRICARE double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/part-199/section-199.8' },
          { title: 'VA — CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Cigna require prior authorization for ABA?', a: 'Not for assessment codes (97151, 97152, 0362T) when there\'s an autism diagnosis and the provider is independently licensed or a BCBA. Treatment services do require authorization — assessment plus treatment plan with the PA form.' },
      { q: 'Does Cigna cover ABA by telehealth?', a: 'Yes — its March 2025 provider guide states all ABA CPT codes are covered telehealth services, with delivery (in-person, telehealth, hybrid) based on the individual\'s needs.' },
      { q: 'Can a child receive ABA and speech therapy under Cigna?', a: 'Yes, but not at the same time of day — Cigna doesn\'t cover ABA delivered concurrently with another therapy session. Intake should capture the existing therapy schedule to plan around it.' },
      { q: 'Is Cigna accepting new ABA providers?', a: 'Evernorth, which runs Cigna\'s behavioral network, says it is "committed to expanding our network of autism providers." Individual providers submit the Evernorth Behavioral Provider Information Form and clinics the Screening Application for Autism Clinics; allow up to 90 days for the application plus 60 to 90 days of credentialing per provider.' },
      { q: 'Does Cigna credential RBTs?', a: 'No. "Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." EN0499 expects the direct work from an RBT or BCaBA under BCBA case supervision.' },
    ],
  },

  'unitedhealthcare-optum': {
    slug: 'unitedhealthcare-optum',
    cardDesc: 'Two-step auth via Provider Express, 4\u20136 month reviews, code clusters.',
    family: 'unitedhealthcare',
    assessmentPA: {
      value: 'Required — step 1 of the two-step authorization (assessment auth)',
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
    payer: 'UnitedHealthcare / Optum',
    state: 'US', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare / Optum',
    h1: 'UnitedHealthcare & Optum ABA: the authorization guide.',
    metaTitle: 'UnitedHealthcare / Optum ABA Prior Auth & Coverage Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare covers ABA through Optum Behavioral Health: the two-step authorization via Provider Express, 4–6 month reviews, code clusters, supervision standards, and telehealth attestation.',
    intro: [
      'UnitedHealthcare administers ABA through Optum Behavioral Health, with authorization running through the Provider Express portal as a two-step process — assessment first, then treatment. Optum\'s Supplemental Clinical Criteria are among the most operationally specific in the industry (down to utilization thresholds and code clusters), which cuts both ways: more rules to satisfy, but also more predictability for an intake team that knows them.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — via Optum Behavioral Health' },
      { label: 'Prior auth', value: 'Two-step: assessment auth, then treatment auth (Provider Express)' },
      { label: 'Review cadence', value: 'Every 4–6 months, per account/state law' },
      { label: 'Code structure', value: '4 clusters; units shift within a cluster' },
      { label: 'Supervision', value: '1–2 hrs per 10 direct hrs; min 1 hr 97155/case/month' },
      { label: 'Utilization flag', value: '<80% of authorized hours (2-week window) gets scrutiny' },
    ],
    sections: [
      {
        h2: 'The two-step authorization',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        body: [
          'Step one authorizes the assessment: functional behavior assessment, caregiver interviews, direct observation, record review, baseline skills, and norm-referenced instruments. Step two authorizes treatment based on what the assessment produced. Both run through Provider Express. For most commercial plans without a state-specific carve-out, the standard Optum Supplemental Clinical Criteria (BH803ABASCC) apply.',
          'The diagnosis bar: DSM-5-TR ASD from a state-licensed physician, psychologist, or other qualified clinician, confirmed with at least one clinically validated tool (ADI-R, ADOS-2, DISCO — or second-level tools like CARS-2, RITA-T, STAT).',
        ],
      },
      {
        h2: 'Code clusters — and why intake data shapes them',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        body: [
          'Optum authorizes in four clusters: assessment (97151, 97152), direct care (97153, 97154), multi-staff (0362T, 0373T), and QHP services (97155–97158). Units can flex within a cluster without a new authorization — a genuinely useful operational buffer. Concurrent billing is allowed for supervision (97153+97155), group oversight (97154+97155), and parent training alongside direct care (97153+97156). Not covered: team meetings without the member, 1:1 classroom aides, and services owed under IDEA — which is why intake should capture the school/IEP picture precisely.',
        ],
      },
      {
        h2: 'Continued-service reviews',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        body: [
          'Reviews land every 4–6 months and want progress documented per targeted behavior using the same measurement methods as baseline — mastered-program rates, change scores, updated standardized adaptive measures. Two operational tripwires matter for scheduling and intake: inadequate progress within 6 months requires documented reasons plus treatment modification, and utilization below 80% of authorized hours over a two-week window draws scrutiny. Families whose availability can\'t support the authorized intensity are a reauthorization risk from day one — capture real availability honestly at intake.',
        ],
      },
      {
        h2: 'Telehealth',
        cites: [{ title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' }],
        body: [
          'Tele-supervision and virtual family training require the provider to be an approved Optum virtual-visits provider with a completed attestation on Provider Express, and the authorization itself must note virtual delivery. Optum frames telehealth as a supplement to — not a replacement for — in-person care.',
        ],
      },
    ],
    collect: [
      { title: 'Member ID + card photo', desc: 'Plus subscriber details for the benefits check.' },
      { title: 'Diagnosis + validated tool', desc: 'DSM-5-TR diagnosis, diagnosing clinician, and which instrument confirmed it (ADI-R, ADOS-2, etc.).' },
      { title: 'School / IEP status', desc: 'IDEA-covered services are excluded from coverage — the school picture must be precise.' },
      { title: 'Real family availability', desc: 'Authorized hours the family can\'t attend become an 80%-utilization problem at review.' },
      { title: 'Caregiver participation capacity', desc: 'Caregiver involvement and progress are review criteria — set expectations at intake.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Optum publishes both a band and a floor: supervision at 1\u20132 hours per 10 hours of direct treatment, and a minimum of one hour of 97155 per case per month. The floor is the one that catches people \u2014 a light month still owes an hour of billed supervision.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
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
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      placeOfService: {
        value:
          'Optum\'s exclusions are the operative setting rule rather than a place-of-service table: team meetings without the member, 1:1 classroom aides, and any service owed under IDEA are not covered. That makes the school and IEP picture a coverage question rather than background \u2014 capture it precisely at intake, because a goal that belongs in the IEP is a goal Optum will not pay for.',
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
          'The Supplemental Clinical Criteria publish no age limit for ABA. Where a state has its own entry in Optum\'s ABA State Mandates supplement, that entry can import a mandate\'s age terms for fully-insured business \u2014 Maryland\'s entry adopts the COMAR hour floors that run by age band \u2014 but on the national criteria age is a benefits question, decided by the plan and the state of issue.',
        status: 'plan-dependent',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia: 'Benefits verification on the specific plan, and Optum\'s ABA State Mandates supplemental criteria for the state of issue.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'No recency rule for the ASD diagnosis is published in the Supplemental Clinical Criteria cited here. The cadence Optum does set is downstream: continued-service reviews land every 4\u20136 months (per account and state law) and require progress documented per targeted behavior using the same measurement methods as baseline, plus updated standardized adaptive measures. Inadequate progress within six months requires documented reasons and a treatment modification.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia: 'Optum provider services, or the step-one assessment-authorization request on Provider Express \u2014 ask whether an evaluation of this age will be accepted before scheduling.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'A DSM-5-TR autism spectrum diagnosis from a state-licensed physician, psychologist, or other qualified clinician. The credential is submission data, not background: Optum asks for the diagnosing clinician and the confirming instrument as part of the step-one assessment authorization on Provider Express.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      diagnosticTools: {
        value:
          'The strictest named-tool requirement among the national commercial carriers. The diagnosis must be confirmed with at least one clinically validated tool: Optum names first-level instruments \u2014 the ADI-R, the ADOS-2 and the DISCO \u2014 and accepts second-level tools including the CARS-2, the RITA-T and the STAT. Capture which instrument was used, by whom and when; \u201cdiagnosed by Dr. X\u201d with no named tool is the most common reason an Optum assessment request stalls at intake.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      referral: {
        value:
          'No physician referral or order is required by the Supplemental Clinical Criteria. What stands in its place is a two-step authorization through the Provider Express portal: step one authorizes the assessment \u2014 functional behavior assessment, caregiver interviews, direct observation, record review, baseline skills and norm-referenced instruments \u2014 and step two authorizes treatment based on what the assessment produced. Both are required before the corresponding service. Where state law specifies otherwise, the state-specific criteria in Optum\'s ABA State Mandates supplement govern instead of the standard criteria.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      telehealth: {
        value: 'Three codes, after an attestation. Optum’s Telehealth Billing guide (updated September 2025) is explicit for commercial plans: “For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157” — virtual supervision of technicians and family training — so technician-delivered 97153 is not payable by telehealth, and neither is the 97151 assessment or the technician-assisted 97152: plan the assessment in person. The provider must first be “an approved Optum virtual visits provider who has attested” (the virtual-visits attestation on Provider Express) and must tell the ABA Care Advocate at authorization. Bill the in-person code with the member’s location as the place of service: POS 10 when the member is at home, POS 02 anywhere else (the older ABA CPT FAQ says POS 02; the 2025 guide requires one of the two on every behavioral-health telehealth claim, and POS 11 or a telehealth modifier alone is not paid). Optum’s criteria add that telehealth is “not intended to supplant in-person service.”',
        status: 'verified',
        cites: [
          { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'UnitedHealthcare\'s 2026 Administrative Guide says "We notify you of our coverage decision within the time required by law" and, for commercial prior authorization, lists "Standard requests: up to 15 calendar days" and "Expedited requests: 72 hours" (may be extended for missing information), asking for notification "at least 15 calendar days in advance, if possible," and at least 5 business days before the service. Fully insured plans can be tighter under state utilization-review law; self-funded plans follow ERISA (15 days pre-service, one 15-day extension; 72 hours urgent). For ABA the operative lead time is Optum\'s: request continued services "no more than 30 days prior to the current approvals on file expiring," with all clinical information ready at the call.',
        status: 'plan-dependent',
        cites: [
          { title: '2026 UnitedHealthcare Care Provider Administrative Guide (Commercial, Exchange, MA) (PDF)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
          { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
          { title: '29 CFR § 2560.503-1(f)(2) — ERISA group health plan claim decision deadlines', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification: fully insured (state UR deadlines) or self-funded/ASO (ERISA)? Confirm the continued-service window with the Optum ABA line (behavioral health number on the member card).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'UnitedHealthcare: "COB is administered according to the member\'s benefit plan and in accordance with law." Optum puts the check on the provider — "You are responsible for determining if the member has other insurance coverage. If so, you should bill the primary insurance carrier first" — and when Optum is secondary "you will be paid up to the Optum contracted rate," with no billing the family for the difference. Neither document states the dependent-child order itself, so the birthday rule applies through state COB law on fully insured plans and through the plan document on self-funded ones. UnitedHealthcare pays ahead of Medicaid (payer of last resort by federal law — the Medicaid program may still require its own PA), TRICARE (secondary to other health insurance by law) and CHAMPVA (pays after other health insurance). To bill a secondary plan when the member has no ABA benefit, Optum\'s FAQ says to call the number on the card to request a denial.',
        status: 'plan-dependent',
        cites: [
          { title: '2026 UnitedHealthcare Care Provider Administrative Guide (Commercial, Exchange, MA) (PDF)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
          { title: 'Optum Behavioral Health Solutions National Network Manual (eff. Oct. 1, 2025) (PDF)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/netwManual/2024/NNMJune2024.pdf' },
          { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
          { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR § 199.8 — TRICARE double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/part-199/section-199.8' },
          { title: 'VA — CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
        verifyVia: 'Benefits verification: ask which COB order and secondary-payment method the plan document uses (standard vs maintenance of benefits), and whether the plan is fully insured or self-funded.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare require prior authorization for ABA?', a: 'Yes — a two-step process via Optum\'s Provider Express portal: an assessment authorization first, then a treatment authorization, generally under Optum\'s Supplemental Clinical Criteria unless state law specifies otherwise.' },
      { q: 'How often does Optum review ABA authorizations?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale.' },
      { q: 'What happens if a family uses fewer hours than authorized?', a: 'Utilization below 80% of authorized hours over a two-week period draws scrutiny at review. Intake should capture realistic availability so the requested intensity matches what the family can actually attend.' },
      { q: 'Does UnitedHealthcare (Optum) require RBT certification for ABA technicians?', a: 'Optum\'s ABA criteria say technicians "should be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate," working under BCBA or licensed-clinician supervision. They also advise against a parent serving as the RBT for their own child.' },
      { q: 'Can the ABA assessment be done by telehealth with UnitedHealthcare?', a: 'No, not on commercial plans. Optum\'s telehealth billing guide allows only 97155, 97156 and 97157 by telehealth for ABA, so 97151 and 97152 are delivered in person. Supervision (97155) and caregiver training can be remote once the provider has completed Optum\'s virtual-visits attestation.' },
    ],
  },
  'meritain-health': {
    slug: 'meritain-health',
    cardDesc: 'Aetna-owned TPA for self-funded employer plans — the employer\'s plan document, not Meritain, sets the ABA benefit.',
    family: 'aetna',
    assessmentPA: {
      value: 'Plan-dependent — Meritain tells members to "consult your benefits guide" for which services need precertification; the employer plan sets the list',
      status: 'plan-dependent',
      cites: [
        { title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' },
        { title: 'Meritain Health — About us (self-funded employee benefit plans)', url: 'https://www.meritain.com/about-us/' },
      ],
      verifyVia: 'The employer\'s plan document, readable in the Meritain provider portal (account.meritain.com), or Meritain Medical Management at 1-800-242-1199 — ask whether 97151/97152 need precertification on this group.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Plan-dependent — set by the employer\'s plan document and administered by Meritain; ask per group, never per carrier',
      status: 'plan-dependent',
      cites: [
        { title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' },
      ],
      verifyVia: 'The plan document in the Meritain provider portal, or Meritain Medical Management (1-800-242-1199) — ask whether ABA treatment codes need precertification and how requests are submitted for this group.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Plan-dependent — the diagnosis requirement is whatever the sponsor\'s plan document and adopted medical policy say; Meritain publishes no ABA policy of its own that we could find',
      status: 'plan-dependent',
      cites: [
        { title: 'Meritain Health — About us (self-funded employee benefit plans)', url: 'https://www.meritain.com/about-us/' },
      ],
      verifyVia: 'The plan document (Meritain provider portal) — ask which medical-necessity criteria the plan applies to ABA and which diagnoses qualify.',
      blocker: 'per-case',
    },
    payer: 'Meritain Health',
    state: 'US', kind: 'commercial',
    pill: 'Payer Guide · Meritain Health',
    h1: 'Meritain Health ABA coverage: the intake guide.',
    metaTitle: 'Meritain Health ABA Coverage — Self-Funded Plans & Prior Auth | Carelu',
    metaDescription:
      'Why a Meritain Health card is not a coverage answer: Meritain administers self-funded employer plans, so the employer\'s plan document decides ABA benefits and precertification, state autism mandates may not reach the plan, and verification runs per employer group.',
    intro: [
      'Meritain Health is a benefits administrator, not an insurer. It calls itself one of the nation\'s largest third-party administrators, a subsidiary of Aetna and CVS Health, serving self-funded employee benefit plans. That changes how intake should read the card: the employer funds the claims and writes the plan, including which services need precertification. The useful questions are which employer sponsors the plan and what that plan document says about ABA, not what Meritain\'s ABA policy is.',
      'Two things follow. A self-funded ERISA plan is not treated as an insurer under state insurance law, so the state autism mandate a family has read about may not reach it. And two Meritain members can have different ABA benefits because they work for different employers. Verify each employer group separately.',
    ],
    atGlance: [
      { label: 'What it is', value: 'Third-party administrator for self-funded employer plans; a subsidiary of Aetna and CVS Health' },
      { label: 'Who sets the benefit', value: 'The employer plan sponsor, in the plan document' },
      { label: 'Precert', value: 'Plan-dependent; Meritain Medical Management 1-800-242-1199' },
      { label: 'State autism mandates', value: 'May not apply; ERISA self-funded plans are not deemed insurers under state law' },
      { label: 'Network', value: 'Sponsor\'s choice; over 90% offer Aetna Choice POS II, others use regional networks' },
      { label: 'Provider line', value: 'Card number, or 1-800-566-9311 (24-hour automated benefits and claims)' },
      { label: 'Eligibility (EDI)', value: 'Optum (formerly Change Healthcare) or SSI; Availity for claim submission only' },
    ],
    sections: [
      {
        h2: 'A TPA card tells you who pays claims, not what is covered',
        cites: [
          { title: 'Meritain Health — About us (self-funded employee benefit plans)', url: 'https://www.meritain.com/about-us/' },
          { title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' },
          { title: 'Meritain Health — Provider services', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-provider-services/' },
        ],
        body: [
          'A Meritain card tells you who processes the claim. It does not tell you what is covered. Meritain administers self-funded employee benefit plans, so the benefit design comes from the employer. Meritain\'s own precertification page tells members that "to read more about what services require precertification under your health care benefits plan, consult your benefits guide." Intake should capture the employer name and group number as first-class fields.',
          'The plan document is easier to get than it is on most TPA cards. Meritain\'s provider portal (account.meritain.com) lists "Plan documents" and "Eligibility and benefits" among what a registered provider can view, along with claims history, EOBs, the patient\'s ID card and accumulators. To register you need your tax ID, provider name and address exactly as on the W-9 you submitted, plus your NPI and phone number. For a new ABA family, read the plan document there before quoting coverage.',
        ],
      },
      {
        h2: 'Settle the funding question before quoting a mandate',
        cites: [
          { title: '29 U.S.C. § 1144 — ERISA preemption, including the “deemer” clause at (b)(2)(B)', url: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title29-section1144&num=0&edition=prelim' },
          { title: '29 U.S.C. § 1003 — ERISA coverage and exceptions (governmental and church plans)', url: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title29-section1003&num=0&edition=prelim' },
        ],
        body: [
          'State autism mandates regulate insurance. Under ERISA\'s "deemer" clause, an employee benefit plan "shall [not] be deemed to be an insurance company or other insurer … for purposes of any law of any State purporting to regulate insurance companies, insurance contracts." In practice, a self-funded employer plan is generally outside the state mandate\'s direct reach, so the mandate a family cites for their state may not apply to their plan. Some sponsors still choose to cover ABA and some do not. The plan document is the only answer.',
          'There is one exception to watch for. ERISA "shall not apply" to governmental plans or to most church plans (29 U.S.C. § 1003(b)), so a city, county, school-district or church plan administered by Meritain is not an ERISA plan. Its rules come from its own plan terms and whatever state law reaches it. Ask who the employer is before relying on either framework.',
        ],
      },
      {
        h2: 'The Aetna connection: the network, not the policy',
        cites: [
          { title: 'Meritain Health — Network solutions', url: 'https://www.meritain.com/network-solutions/' },
          { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
        ],
        body: [
          'Meritain says that "over 90 percent of our plan sponsors choose to offer the Aetna Choice POS II network" and that it is "the only TPA able to offer access to this network." It also offers regional and combined networks, so the network is a sponsor choice too. Confirm which one this group uses before treating an Aetna-participating provider as in network.',
          'Network access is not clinical policy. Aetna\'s ABA precertification form GR-69017-4 (7-26) lists the plans it "applies to": Aetna plans, Innovation Health plans, Allina Health | Aetna and Banner | Aetna. Meritain is not on that list. Do not assume Aetna\'s CPB 0554 criteria or Aetna\'s precert workflow govern a Meritain member unless the plan says so.',
        ],
      },
      {
        h2: 'Running eligibility on a Meritain card',
        cites: [
          { title: 'Meritain Health — Electronic transaction vendors', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-electronic-transaction-vendors/' },
          { title: 'Meritain Health — Provider services', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-provider-services/' },
        ],
        body: [
          'Meritain\'s clearinghouse table lists which vendors handle which transactions. Optum (formerly Change Healthcare) and SSI (ClaimsNet) handle eligibility, claim status and claim submission. Availity handles claims submission only. An eligibility check routed through Availity is therefore the wrong channel for Meritain. For a person, call the toll-free number on the back of the patient\'s ID card, or 1-800-566-9311 for 24-hour automated benefits and claims information.',
        ],
      },
    ],
    collect: [
      { title: 'Employer name and group number', desc: 'The benefit lives in the employer\'s plan document. Without the group, a Meritain benefit check has nothing to look up.' },
      { title: 'Plan type', desc: 'Self-funded ERISA, governmental or church plan? This decides whether ERISA\'s timelines and the state mandate apply. Never quote a mandate before this is known.' },
      { title: 'The plan document\'s ABA terms', desc: 'Coverage, precertification, hour or dollar limits and any age limit, read from the plan document in the Meritain provider portal.' },
      { title: 'Which network the group uses', desc: 'Most sponsors use Aetna Choice POS II, but some use regional networks. Confirm before treating Aetna participation as in network.' },
      { title: 'Member ID, card photo and the card\'s phone numbers', desc: 'Meritain tells providers to call the number on the back of the ID card, and the precertification number is often printed there too.' },
      { title: 'Other coverage', desc: 'The other parent\'s plan, Medicaid, TRICARE or CHAMPVA. The plan document\'s order-of-benefits terms and federal payer-order rules decide who pays first.' },
    ],
    sources: [
      { title: 'Meritain Health — About us (self-funded employee benefit plans)', url: 'https://www.meritain.com/about-us/' },
      { title: 'Meritain Health — For providers (provider portal)', url: 'https://www.meritain.com/resources-for-providers-meritain-health-provider-portal/' },
      { title: 'Meritain Health — Provider services', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-provider-services/' },
      { title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' },
      { title: 'Meritain Health — Network solutions', url: 'https://www.meritain.com/network-solutions/' },
      { title: 'Meritain Health — Electronic transaction vendors', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-electronic-transaction-vendors/' },
      { title: '29 U.S.C. § 1144 — ERISA preemption', url: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title29-section1144&num=0&edition=prelim' },
      { title: '29 CFR § 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' },
    ],
    deliveryRules: {
      supervision: {
        value: 'Nothing Meritain publishes sets a supervision requirement for ABA. Supervision terms come from the medical policy the plan sponsor adopts and the plan document, and they can differ between Meritain groups.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — About us (self-funded employee benefit plans)', url: 'https://www.meritain.com/about-us/' }],
        verifyVia: 'Meritain Medical Management (1-800-242-1199) or the plan document in the provider portal — ask which ABA medical policy the group applies and what it requires of BCBA supervision.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value: 'Not published by Meritain. Whether 97153 and 97155 may be billed for the same clock time depends on the plan\'s adopted payment and claim-editing rules.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — Provider services', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-provider-services/' }],
        verifyVia: 'The number on the back of the member\'s ID card — ask specifically whether 97153 and 97155 may overlap and which claim-editing rules the group uses.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Not published by Meritain. Any hour, visit or dollar limit on ABA is written into the employer\'s plan document.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — Provider services', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-provider-services/' }],
        verifyVia: 'The plan document and accumulators in the Meritain provider portal — read any ABA limit and how much of it has already been used.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not published by Meritain. Documentation standards for ABA session notes are set by the plan\'s adopted medical policy and provider agreement.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — Provider services', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-provider-services/' }],
        verifyVia: 'The number on the member\'s ID card — ask which documentation standard applies at audit for this group.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Not published by Meritain. Whether home, clinic, school or telehealth ABA is payable is a plan-document question for each employer group.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — Provider services', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-provider-services/' }],
        verifyVia: 'Benefits verification on the specific group — ask which places of service are payable for ABA and whether school-based delivery is excluded.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Not published by Meritain. Whose NPI carries a technician-delivered 97153 claim, and which modifiers are required, depends on the network contract and the plan\'s billing rules.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — Electronic transaction vendors', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-electronic-transaction-vendors/' }],
        verifyVia: 'The number on the member\'s ID card, plus the network the group uses (Aetna Choice POS II or a regional network) — confirm rendering-versus-billing NPI and modifiers before the first claim.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Set by the plan document. Because a self-funded ERISA plan is generally outside state insurance mandates, a mandate\'s age band may not apply. A governmental or church plan is outside ERISA and has to be checked on its own terms.',
        status: 'plan-dependent',
        cites: [
          { title: '29 U.S.C. § 1144 — ERISA preemption', url: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title29-section1144&num=0&edition=prelim' },
          { title: '29 U.S.C. § 1003 — ERISA coverage and exceptions (governmental and church plans)', url: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title29-section1003&num=0&edition=prelim' },
        ],
        verifyVia: 'The plan document in the Meritain provider portal — read any ABA age limit directly.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not published by Meritain. Any rule on how recent the diagnostic evaluation must be comes from the medical policy the plan adopts.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' }],
        verifyVia: 'Meritain Medical Management (1-800-242-1199) — ask whether an evaluation of this age is accepted before booking the assessment.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Not published by Meritain. Which credentials may make the ASD diagnosis depends on the plan\'s adopted ABA criteria.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' }],
        verifyVia: 'Meritain Medical Management (1-800-242-1199) — ask which diagnosing credentials the group\'s ABA criteria accept.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'Not published by Meritain. Whether a named instrument (ADOS-2 or similar) is required depends on the plan\'s adopted criteria. Collect the instrument, date and score anyway.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' }],
        verifyVia: 'Meritain Medical Management (1-800-242-1199) — ask whether a specific diagnostic instrument is required for this group.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Plan-dependent. Meritain\'s precertification guidance says the provider calls to precertify, reviewers check the treatment plan "against standard quality of care guidelines," and members should "consult your benefits guide" for which services need it. Whether ABA needs a physician referral or order, precertification, or neither is set by the group\'s plan. Medical Management: 1-800-242-1199.',
        status: 'plan-dependent',
        cites: [{ title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' }],
        verifyVia: 'The plan document in the provider portal, or Meritain Medical Management (1-800-242-1199) — ask whether ABA needs a referral, an order or precertification for this group.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Not published by Meritain for ABA. Meritain\'s network page names telehealth among the care options on its Aetna networks, but whether any ABA code is payable by telehealth is a plan-document question.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — Network solutions', url: 'https://www.meritain.com/network-solutions/' }],
        verifyVia: 'Benefits verification on the specific group — ask which ABA codes, if any, are payable by telehealth and with which place-of-service code or modifier.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Meritain publishes no decision clock, so the governing law decides. For a self-funded ERISA plan, a pre-service claim is decided "not later than 15 days after receipt of the claim by the plan." That can be extended once "for up to 15 days" for matters beyond the plan\'s control. Urgent care is decided within "72 hours after receipt of the claim." Governmental and church plans are outside ERISA and follow their own plan terms.',
        status: 'plan-dependent',
        cites: [
          { title: '29 CFR § 2560.503-1 — ERISA claims procedure (decision deadlines)', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' },
          { title: '29 U.S.C. § 1003 — ERISA coverage and exceptions (governmental and church plans)', url: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title29-section1003&num=0&edition=prelim' },
        ],
        verifyVia: 'Benefits verification: confirm the plan type (ERISA, governmental or church), and ask Meritain Medical Management how early a continued-service request may be filed.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Between two commercial plans, including the birthday rule for a child covered by both parents, the order comes from the plan document\'s coordination-of-benefits terms, which Meritain administers but does not publish. Three federal rules hold regardless. Medicaid pays after other coverage: when third-party liability is established, the state "must reject the claim and return it to the provider." Congress intended "TRICARE be the secondary payer to all health benefit, insurance and third-party payer plans." CHAMPVA pays first only against Medicaid, IHS, state victims-of-crime programs and CHAMPVA supplements; otherwise "CHAMPVA will pay secondary."',
        status: 'plan-dependent',
        cites: [
          { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR § 199.8 — TRICARE double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/part-199/section-199.8' },
          { title: 'VA — CHAMPVA Guidebook (PDF)', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
        verifyVia: 'The plan document\'s coordination-of-benefits section (Meritain provider portal), or the number on the ID card — ask the order-of-benefits rule for dependent children and the secondary-payment method.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Meritain Health cover ABA therapy?', a: 'It depends on the employer. Meritain administers self-funded employer plans, so the employer\'s plan document decides whether ABA is covered and whether it needs precertification. Meritain\'s own guidance tells members to consult their benefits guide. Registered providers can read the plan document in Meritain\'s provider portal.' },
      { q: 'Is Meritain Health the same as Aetna?', a: 'No. Meritain is a subsidiary of Aetna and CVS Health, and most of its plan sponsors (over 90%, per Meritain) use the Aetna Choice POS II network. It administers employer-funded plans rather than insuring them, though, and Aetna\'s ABA precertification form does not list Meritain among the plans it applies to. Confirm the group\'s medical policy rather than assuming Aetna\'s.' },
      { q: 'Does my state\'s autism mandate apply to a Meritain plan?', a: 'Often not directly. State autism mandates regulate insurance, and ERISA says a self-funded employer plan is not deemed an insurer for purposes of state insurance law. Governmental and church plans are outside ERISA and have to be checked separately. Find out the plan type before relying on a mandate.' },
    ],
  },

  'humana': {
    slug: 'humana',
    cardDesc: 'Humana finished leaving employer group medical in 2025 — route a bare "Humana" card to Medicaid, Medicare Advantage or TRICARE East first.',
    family: 'humana',
    assessmentPA: {
      value: 'Depends on the Humana line — Healthy Horizons Medicaid plans set PA by state; ABA codes are not on Humana\'s Medicare Advantage/D-SNP PA list (eff. 7/1/2026); TRICARE East runs through Humana Military',
      status: 'plan-dependent',
      cites: [
        { title: 'Humana — Medicare Advantage and D-SNP Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/1/2026) (PDF)', url: 'https://assets.humana.com/is/content/humana/FINAL_Medicare%20and%20DSNP%20Prior%20Authorization%20and%20Notification%20List%20-%207-1-2026pdf' },
        { title: 'Humana — Prior authorization lists (provider page)', url: 'https://provider.humana.com/coverage-claims/prior-authorizations/prior-authorization-lists' },
      ],
      verifyVia: 'Identify the line of business from the card, then use the matching guide: the state Healthy Horizons guide, the TRICARE East (Humana Military) guide, or, for Medicare Advantage, Humana provider services via Availity to confirm ABA is a covered benefit at all.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Depends on the Humana line — state-specific for Healthy Horizons Medicaid; not on the Medicare Advantage/D-SNP PA list; TRICARE East under Humana Military',
      status: 'plan-dependent',
      cites: [
        { title: 'Humana — Medicare Advantage and D-SNP Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/1/2026) (PDF)', url: 'https://assets.humana.com/is/content/humana/FINAL_Medicare%20and%20DSNP%20Prior%20Authorization%20and%20Notification%20List%20-%207-1-2026pdf' },
        { title: 'Humana — Prior authorization lists (provider page)', url: 'https://provider.humana.com/coverage-claims/prior-authorizations/prior-authorization-lists' },
      ],
      verifyVia: 'Route by line of business first; the state Healthy Horizons PA list or the TRICARE East guide carries the operative rule.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Line-of-business dependent — Humana\'s medical coverage policy library carries ABA policies only for Medicaid (Oklahoma, South Carolina, Louisiana); no national or Medicare Advantage ABA policy is published',
      status: 'plan-dependent',
      cites: [
        { title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-09-27)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' },
      ],
      verifyVia: 'The state Healthy Horizons guide for a Medicaid member; for any other Humana line, ask Humana provider services which criteria govern ABA on that plan.',
      blocker: 'per-case',
    },
    payer: 'Humana',
    state: 'US', kind: 'commercial',
    pill: 'Payer Guide · Humana',
    h1: 'Humana ABA coverage: which Humana is this?',
    metaTitle: 'Humana ABA Coverage & Prior Auth — Which Humana Plan Is It? | Carelu',
    metaDescription:
      'Humana finished exiting employer group commercial medical coverage in 2025. A Humana card on a child today usually means Medicaid (Healthy Horizons), Medicare Advantage, or TRICARE East via Humana Military. How intake should route a bare Humana card.',
    intro: [
      'A card that just says "Humana" no longer means what it used to. On Feb. 23, 2023, Humana announced it was leaving the Employer Group Commercial Medical Products business, "which includes all fully insured, self-funded and Federal Employee Health Benefit medical plans," phased over 18 to 24 months. Its FY2025 10-K confirms that "during 2025, we finalized our exit." So the first intake question on a Humana card is which Humana plan this is, not what Humana covers.',
      'What remains, per the 10-K: Medicare (individual and group Medicare Advantage, stand-alone drug plans, Medicare Supplement); Medicaid through state-based contracts; the military business, chiefly the TRICARE East Region contract; and specialty dental, vision, life and disability benefits. Each line handles ABA differently. This guide is the router for them.',
    ],
    atGlance: [
      { label: 'Employer group medical', value: 'Gone — exit announced Feb. 2023, finalized during 2025 (fully insured, self-funded and FEHB)' },
      { label: 'Remaining lines', value: 'Medicare Advantage, Medicare Supplement/PDP, Medicaid (state contracts), TRICARE East, specialty' },
      { label: 'Medicaid states (10-K)', value: 'FL, KY, IL, IN, LA, OH, OK, SC, VA, WI' },
      { label: 'Medicare Advantage PA list', value: 'No ABA codes (eff. 7/1/2026, rev. 9/1/2026)' },
      { label: 'ABA medical policy', value: 'Medicaid only (OK, SC, LA); no national or MA ABA policy' },
      { label: 'TRICARE East', value: 'Humana Military, T-5 contract since 1/1/2025 — use the TRICARE East guide' },
    ],
    sections: [
      {
        h2: 'Who a "Humana commercial" card actually belongs to now',
        cites: [
          { title: 'Humana Inc. — Form 10-K for fiscal year 2025 (SEC EDGAR)', url: 'https://www.sec.gov/Archives/edgar/data/49071/000004907126000009/hum-20251231.htm' },
          { title: 'Humana — Humana to Exit Employer Group Commercial Medical Products Business (Feb. 23, 2023)', url: 'https://humana.gcs-web.com/news-releases/news-release-details/humana-exit-employer-group-commercial-medical-products-business' },
          { title: 'Humana — Commercial Summary of Medical Preauthorization and Notification List Changes (last updated Nov. 5, 2024) (PDF)', url: 'https://assets.humana.com/is/content/humana/Commercial%20SOCpdf' },
        ],
        body: [
          'In Humana\'s FY2025 10-K, the medical membership table has columns for individual and group Medicare Advantage, stand-alone PDP, Medicare Supplement, state-based contracts and military services. There is no commercial medical column. The only employer products Humana still lists are specialty ones: "dental, vision, life and disability to employer groups." A family that says their child has Humana through a parent\'s employer is therefore describing one of three things: a specialty card (dental or vision, which carries no ABA benefit), a group Medicare Advantage retiree card, or a card from a plan the employer has since moved to another carrier. Ask for the family\'s current medical card before running anything.',
          'Claims from the wind-down years can still come up. On Humana\'s last commercial list, ABA codes 97151–97158, 0362T and 0373T (with H0031, H0032, H2012, H2019 and 90889) were "removed from the preauthorization list eff. Aug. 9, 2024." Humana\'s provider site posts no commercial prior-authorization list after July 2024.',
        ],
      },
      {
        h2: 'Route by line of business',
        cites: [
          { title: 'Humana Inc. — Form 10-K for fiscal year 2025 (SEC EDGAR)', url: 'https://www.sec.gov/Archives/edgar/data/49071/000004907126000009/hum-20251231.htm' },
          { title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-09-27)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' },
          { title: 'Humana Military — Applied Behavior Analysis (ABA) provider FAQ (PDF)', url: 'https://assets.humana.com/is/content/humana/aba-provider-faqpdf-1' },
        ],
        body: [
          'Medicaid (Humana Healthy Horizons) is the most likely match for a child. The 10-K names Medicaid contracts in "Florida, Kentucky, Illinois, Indiana, Louisiana, Ohio, Oklahoma, South Carolina, Virginia and Wisconsin." Each is a state contract with its own ABA policy and PA list, so never read one state\'s rules across to another. This directory has Healthy Horizons guides for Florida, Ohio, Oklahoma and Virginia. Humana\'s medical coverage policy library carries its own ABA policies for Oklahoma, South Carolina and Louisiana Medicaid.',
          'TRICARE East is a different payer. Humana Military administers the T-5 East Region contract, which "commenced on January 1, 2025 and comprises 24 states, and Washington D.C." ABA there runs under the TRICARE Autism Care Demonstration, so use the TRICARE East (Humana Military) guide, not this one.',
          'Medicare Advantage covers people 65 and over and "some disabled persons under the age of 65," so it is rare on a child. Humana\'s coverage policy library lists no Medicare Advantage ABA policy.',
        ],
      },
      {
        h2: 'Medicare Advantage and D-SNP: what the PA list says',
        cites: [
          { title: 'Humana — Medicare Advantage and D-SNP Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/1/2026) (PDF)', url: 'https://assets.humana.com/is/content/humana/FINAL_Medicare%20and%20DSNP%20Prior%20Authorization%20and%20Notification%20List%20-%207-1-2026pdf' },
        ],
        body: [
          'Humana\'s Medicare Advantage and D-SNP prior authorization list (effective July 1, 2026, revised Sept. 1, 2026) has a behavioral health category with two entries: partial hospitalization and transcranial magnetic stimulation. No ABA code (97151–97158, 0362T, 0373T) appears on it. That tells you ABA is not on the PA list. It does not tell you ABA is a covered Medicare Advantage benefit. The list itself says "certain services may not be covered under the member\'s plan" and points to an Advance Coverage Determination for services whose coverage is uncertain. It also notes that, from Jan. 1, 2026, CMS requires prior authorization decisions within 7 days for certain medical items and services.',
        ],
      },
    ],
    collect: [
      { title: 'The product name on the card, verbatim', desc: '"Healthy Horizons" means a state Medicaid plan, a Medicare Advantage product name means Medicare, and a TRICARE marking means Humana Military. The bare word "Humana" is not enough to route.' },
      { title: 'State of residence', desc: 'Decides which Healthy Horizons contract and policy apply. Humana\'s Medicaid ABA rules are state-specific.' },
      { title: 'Whether the card is medical or specialty', desc: 'Humana still sells dental, vision, life and disability to employers. A specialty card carries no ABA benefit.' },
      { title: 'Where the coverage came from', desc: 'If the family says an employer, ask for the current medical card. Humana finished leaving employer group medical coverage in 2025.' },
      { title: 'Member ID and date of birth', desc: 'Needed for eligibility on whichever line the card turns out to be.' },
    ],
    sources: [
      { title: 'Humana Inc. — Form 10-K for fiscal year 2025 (SEC EDGAR)', url: 'https://www.sec.gov/Archives/edgar/data/49071/000004907126000009/hum-20251231.htm' },
      { title: 'Humana — Humana to Exit Employer Group Commercial Medical Products Business (Feb. 23, 2023)', url: 'https://humana.gcs-web.com/news-releases/news-release-details/humana-exit-employer-group-commercial-medical-products-business' },
      { title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-09-27)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' },
      { title: 'Humana — Prior authorization lists (provider page)', url: 'https://provider.humana.com/coverage-claims/prior-authorizations/prior-authorization-lists' },
      { title: 'Humana — Medicare Advantage and D-SNP Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/1/2026) (PDF)', url: 'https://assets.humana.com/is/content/humana/FINAL_Medicare%20and%20DSNP%20Prior%20Authorization%20and%20Notification%20List%20-%207-1-2026pdf' },
      { title: 'Humana — Commercial Summary of Medical Preauthorization and Notification List Changes (last updated Nov. 5, 2024) (PDF)', url: 'https://assets.humana.com/is/content/humana/Commercial%20SOCpdf' },
    ],
    deliveryRules: {
      supervision: {
        value: 'Humana publishes no national ABA supervision rule. Its coverage-policy library has ABA policies only for Oklahoma, South Carolina and Louisiana Medicaid, and those are state policies that must not be read across. Supervision rules come from the line of business: the state Healthy Horizons policy, or TRICARE for Humana Military.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-09-27)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'Route to the state Healthy Horizons guide or the TRICARE East guide once the line of business is known.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value: 'No national Humana rule. Whether 97153 and 97155 may overlap is set by the state Medicaid program for Healthy Horizons members, or by TRICARE for Humana Military.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-09-27)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No national Humana rule. Unit ceilings come from the state Medicaid fee schedule and PA for Healthy Horizons members, or from TRICARE for Humana Military.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-09-27)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'No national Humana rule. Documentation standards follow the state Medicaid program or TRICARE.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-09-27)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'No national Humana rule. Payable settings follow the state Medicaid program or TRICARE.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-09-27)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'No national Humana rule. Rendering-versus-billing NPI conventions follow the state Medicaid program or TRICARE.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-09-27)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Depends on the line. Healthy Horizons Medicaid follows the state\'s program. TRICARE follows the Autism Care Demonstration. Medicare Advantage covers people 65 and over and "some disabled persons under the age of 65," so it is rarely a child\'s plan. There is no national Humana age rule.',
        status: 'plan-dependent',
        cites: [
          { title: 'Humana Inc. — Form 10-K for fiscal year 2025 (SEC EDGAR)', url: 'https://www.sec.gov/Archives/edgar/data/49071/000004907126000009/hum-20251231.htm' },
          { title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-09-27)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' },
        ],
        verifyVia: 'Route by line of business, then read the age rule in the state Healthy Horizons guide or the TRICARE East guide.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No national Humana rule. Recency requirements are set by the state Medicaid ABA policy or by TRICARE.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-09-27)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'No national Humana rule. Who may diagnose is set by the state Medicaid ABA policy or by TRICARE\'s ASD-diagnosing-provider rules.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-09-27)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'No national Humana rule. Required instruments are set by the state Medicaid ABA policy or by TRICARE.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-09-27)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      referral: {
        value: 'Depends on the line. On Medicare Advantage HMO and PPO plans "the full list of prior authorization requirements applies," but no ABA code is on that list (eff. 7/1/2026). Medicaid referral and PA rules are state-specific, and TRICARE East follows TRICARE\'s rules through Humana Military.',
        status: 'plan-dependent',
        cites: [{ title: 'Humana — Medicare Advantage and D-SNP Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/1/2026) (PDF)', url: 'https://assets.humana.com/is/content/humana/FINAL_Medicare%20and%20DSNP%20Prior%20Authorization%20and%20Notification%20List%20-%207-1-2026pdf' }],
        verifyVia: 'Route by line of business; the state Healthy Horizons guide or the TRICARE East guide carries the referral rule.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'No national Humana rule. Telehealth ABA follows the state Medicaid program or TRICARE.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-09-27)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Depends on the line. For Medicare Advantage, Humana\'s PA list notes that "effective Jan. 1, 2026, CMS requires prior authorization decisions within 7 days for certain medical items/services requests." Medicaid decision clocks are set by each state contract, and TRICARE by its own rules.',
        status: 'plan-dependent',
        cites: [{ title: 'Humana — Medicare Advantage and D-SNP Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/1/2026) (PDF)', url: 'https://assets.humana.com/is/content/humana/FINAL_Medicare%20and%20DSNP%20Prior%20Authorization%20and%20Notification%20List%20-%207-1-2026pdf' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East) for the decision clock that applies.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Depends on which Humana line is involved. Two federal rules decide most cases. A Healthy Horizons Medicaid plan pays after any other coverage: where third-party liability is established, the state "must reject the claim and return it to the provider." TRICARE, including TRICARE East via Humana Military, is intended to "be the secondary payer to all health benefit, insurance and third-party payer plans." Get the other plan\'s card before billing Humana.',
        status: 'plan-dependent',
        cites: [
          { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR § 199.8 — TRICARE double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/part-199/section-199.8' },
        ],
        verifyVia: 'Benefits verification on each plan the child holds; confirm which is primary before the first claim.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Humana cover ABA therapy?', a: 'It depends on which Humana plan the child is on. Humana finished leaving employer group medical coverage in 2025. Its remaining lines are Medicaid (Healthy Horizons, state by state), Medicare Advantage, and TRICARE East via Humana Military, and each handles ABA under its own rules. Identify the line first.' },
      { q: 'Can my child still have Humana through a parent\'s employer?', a: 'Not as a medical plan. Humana announced in Feb. 2023 that it was leaving all employer group commercial medical products (fully insured, self-funded and FEHB) and finalized the exit during 2025. Humana still sells dental, vision, life and disability to employers, so an employer-issued Humana card today is most likely a specialty card with no ABA benefit. Ask for the family\'s current medical card.' },
      { q: 'Is Humana Healthy Horizons the same as Humana?', a: 'Healthy Horizons is Humana\'s Medicaid product, contracted state by state (FL, KY, IL, IN, LA, OH, OK, SC, VA and WI per Humana\'s 2025 10-K). Each state has its own ABA policy and PA list. Use the state Healthy Horizons guide, not this national one.' },
    ],
  },
};

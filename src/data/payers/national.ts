import type { PayerConfig } from './types.js';

export const nationalPayers: Record<string, PayerConfig> = {
  'aetna': {
    slug: 'aetna',
    cardDesc: 'CPB 0554 \u2014 ASD-only coverage, precert form GR-69017-4, telehealth codes.',
    family: 'aetna',
    assessmentPA: 'Required — precertification (form GR-69017-4, eff. 1/1/2026)',
    treatmentPA: 'Required — precertification',
    dxRequired: 'Yes \u2014 ASD only (F84.0\u2013F84.9); ABA for other diagnoses considered experimental',
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
      { label: 'Precert', value: 'Required — form GR-69017-4 (eff. 1/1/2026), via Availity or phone' },
      { label: 'Provider bar', value: 'BACB certification or state BA licensure' },
      { label: 'Telehealth', value: 'Covered for 97151, 97153, 97155, 97156, 97157' },
      { label: 'Reauth cadence', value: 'Commonly ~6 months (verify per plan)' },
    ],
    sections: [
      {
        h2: 'What Aetna requires for precertification',
        cites: [{ title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        body: [
          'As of January 1, 2026, a single form — GR-69017-4 — replaces Aetna\'s previous ABA precert forms, submitted through Availity\'s two-step process (precert add + clinical questionnaire) or by phone. The information it demands is exactly what a good intake process should have already collected:',
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
        cites: [{ title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
        body: [
          'Practitioners delivering ABA under Aetna policy need BACB national certification or state behavior-analyst licensure; unlicensed staff work under supervision per practice standards. The diagnosis itself must come from a provider qualified to diagnose within their scope — licensed psychologist, psychiatrist, or physician. CPB 0648 also references intensive-intervention research norms (25 hours/week, 12 months/year), useful context when justifying requested intensity.',
        ],
      },
      {
        h2: 'Telehealth',
        cites: [{ title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        body: [
          'Aetna covers telehealth for 97151, 97153, 97155, 97156, and 97157 (97152 is excluded), billed with GT/95/FR modifiers per its telemedicine payment policy. Notably, Aetna announced it would end ABA telehealth coverage in late 2023 — then rescinded the change within weeks. The lesson for intake: telehealth rules are volatile; verify the current position on every benefits check rather than assuming last quarter\'s answer.',
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
    ],
    deliveryRules: {
      supervision: {
        value:
          'Practitioners delivering ABA under CPB 0554 need BACB national certification or state behavior-analyst licensure, and unlicensed staff work under supervision per practice standards. Aetna publishes no hours-per-hours ratio of its own. The precertification form does make supervision a submission fact rather than an internal one: it asks for the name and credential of the BCBA or licensed clinician overseeing the case. For context on intensity rather than supervision, CPB 0648 references intensive-intervention research norms of 25 hours a week, 12 months a year.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
      },
      concurrentBilling: {
        value:
          'Not published. Neither CPB 0554 nor CPB 0648 states whether 97155 and 97153 may be billed for the same clock time; Aetna handles code-pair questions through reimbursement and claim-editing policy rather than through the clinical policy bulletin. The precertification form does require requested hours to be listed code by code, so the authorization will at least be explicit about which codes are in play.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia:
          'Availity Essentials for the plan\'s reimbursement and claim-editing policies, or the provider-services number on the member\'s card. Ask specifically about 97153 billed alongside 97155.',
      },
      billAsProvider: {
        value:
          'Not published for ABA. CPB 0554 sets who may deliver the service \u2014 BACB-certified or state-licensed behavior analysts, with unlicensed staff supervised \u2014 but does not state whose NPI carries a technician-delivered 97153 claim, or which degree-level modifiers apply.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia:
          'Aetna provider services or Availity \u2014 confirm the rendering-versus-billing NPI convention and any required modifiers before the first claim.',
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
    },
    intakeGates: {
      ageLimit: {
        value:
          'CPB 0554 states no age limit for ABA. What decides the age question on an Aetna card is therefore the plan and the state: self-funded employer plans can carve benefits differently, and state autism mandates layer their own age bands on fully-insured business. Two families with Aetna cards can have materially different ABA benefits, so age is a benefits-verification answer, not a policy lookup.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia:
          'A live benefits verification on every family \u2014 ABA coverage confirmation, any age or visit limits, deductible status, and the precert path for that specific plan.',
      },
      dxRecency: {
        value:
          'No recency rule is published. CPB 0554 does not state how recent the ASD diagnostic evaluation must be, and the precertification form (GR-69017-4, eff. 1/1/2026) asks for the evaluation\'s diagnosis code, the diagnosing provider and their credentials without a date test. Capture the evaluation date at intake regardless \u2014 it is on the form, and any plan-level rule will be applied against it.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia:
          'The precertification submission itself \u2014 Availity\'s two-step precert add plus clinical questionnaire, or the precert phone line. Ask whether an evaluation of this age is acceptable before booking the assessment.',
      },
      diagnosingProviders: {
        value:
          'The diagnosis must come from a provider qualified to diagnose within their scope \u2014 a licensed psychologist, psychiatrist or physician. That is a scope-of-practice test rather than a closed credential list, and it is enforced at the front door: the precertification form asks for the DSM-5 diagnosis code, the diagnosing provider and their credentials, so the diagnosing clinician\'s name and credential are submission data.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
      },
      diagnosticTools: {
        value:
          'No instrument is named. CPB 0554 does not require or reference a specific diagnostic tool, and the precertification form asks for the diagnosis code, the diagnosing provider and their credentials rather than for an instrument, date and score \u2014 a notably lighter bar than Optum\'s validated-tool requirement or MHS\'s named-instrument form. Collect the instrument anyway: a state mandate or a downstream reviewer may want it even when the policy does not.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia:
          'Aetna precertification (Availity or the number on the card) \u2014 ask whether a specific instrument is expected for this plan before scheduling testing.',
      },
      referral: {
        value:
          'CPB 0554 imposes no referral or physician-order requirement of its own; what it imposes is precertification, required for both the assessment and treatment, on form GR-69017-4 since January 1, 2026, submitted through Availity\'s two-step process or by phone, with reauthorization commonly on a roughly six-month cadence. Where a state autism mandate applies to a fully-insured plan, that mandate may add a prescription or physician-order requirement of its own \u2014 Maryland and Missouri both do \u2014 so check the state layer before assuming none exists.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
      },
      telehealth: {
        value:
          'Covered for 97151, 97153, 97155, 97156 and 97157; 97152 is excluded. Bill with GT, 95 or FR modifiers per Aetna\'s telemedicine payment policy. Treat the answer as perishable rather than settled: Aetna announced it would end ABA telehealth coverage in late 2023 and rescinded the change within weeks. Verify the current position on every benefits check rather than reusing last quarter\'s answer.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy?', a: 'Yes — for autism spectrum disorder (ICD-10 F84.0–F84.9) under clinical policy CPB 0554, with precertification. Aetna considers ABA experimental for non-ASD indications.' },
      { q: 'Does Aetna require prior authorization for ABA?', a: 'Yes. As of 1/1/2026, precertification uses form GR-69017-4, submitted via Availity or by phone, with diagnosis details, requested hours per CPT code, the supervising clinician, and concurrent services.' },
      { q: 'Does Aetna cover ABA by telehealth?', a: 'Yes, for codes 97151, 97153, 97155, 97156, and 97157 (not 97152) — but the policy has shifted before, so confirm the current rule during each benefits verification.' },
    ],
  },

  'cigna': {
    slug: 'cigna',
    cardDesc: 'No PA on assessment codes; EN0499 treatment authorization; full telehealth.',
    family: 'cigna',
    assessmentPA: 'Not required for assessment codes 97151, 97152, 0362T (with ASD dx + licensed/BCBA provider)',
    treatmentPA: 'Required — assessment + plan with the ABA PA form',
    dxRequired: 'Yes \u2014 ASD only; Rett syndrome (F84.2) excluded under EN0499',
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
      { label: 'Submission window', value: 'Up to 30 days before or within 2 weeks after start' },
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
        cites: [{ title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        body: [
          'The treatment PA package is the completed assessment plus treatment plan with Cigna\'s ABA PA form, submitted up to 30 days before or within two weeks after the start of service (later submissions trigger retrospective review). Initiation requires a standardized, validated instrument — current edition, e.g., Vineland-3 — administered within 60 days before treatment start, with deficits mapped to DSM-5-TR ASD domains and to the treatment plan\'s goals.',
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
        verifyVia:
          'The treatment authorization itself, and Evernorth Behavioral Health provider services (the behavioral health number on the member\'s card) \u2014 ask whether any per-day MUE is applied to ABA codes on this plan.',
      },
      placeOfService: {
        value:
          'Not published as a payable-settings list. Two sourced facts bear on setting nonetheless: the treatment plan must carry dated baseline data per setting, so settings are declared and measured rather than assumed; and every session note must record the location. Whether a given setting is payable is a plan-benefit question.',
        status: 'unverified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia:
          'Benefits verification on the specific plan \u2014 ask which places of service are payable for ABA, and whether school-based delivery is excluded before you write school goals.',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'EN0499 publishes no age limit for ABA. The bound on a Cigna card therefore comes from the plan document and, on fully-insured business, from the state autism mandate \u2014 Maryland\'s habilitative mandate runs through the month the enrollee turns 19, Missouri\'s ABA dollar cap runs through age 18, Indiana\'s mandate has no age term at all. Establish plan funding type before quoting any bound.',
        status: 'plan-dependent',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia:
          'Benefits verification on the specific plan \u2014 confirm the ABA benefit exists, the funding type, and any age or visit limit.',
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
        verifyVia:
          'Evernorth Behavioral Health provider services (the behavioral health number on the member\'s card) \u2014 ask which diagnosing credentials EN0499 accepts before relying on a diagnosis from a non-doctoral clinician.',
      },
      diagnosticTools: {
        value:
          'A standardized, validated instrument in its current edition \u2014 EN0499 gives Vineland-3 as the example rather than a closed list \u2014 administered within 60 days before treatment start, with the deficits it measures mapped to DSM-5-TR ASD domains and carried through into the treatment plan\'s goals. Continued treatment requires a repeat standardized assessment within a year. The instrument is the hinge of the treatment authorization, so pick it before the assessment rather than after.',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      referral: {
        value:
          'No referral or physician order is required by EN0499, and \u2014 the part that makes Cigna the friendliest front door in this directory \u2014 no prior authorization is required on assessment codes 97151, 97152 and 0362T when there is an autism diagnosis on file and the provider is independently licensed or a BCBA. Treatment is the gated step: the completed assessment plus a treatment plan on Cigna\'s ABA PA form, submitted up to 30 days before or within two weeks after the start of service, with later submissions triggering retrospective review.',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      telehealth: {
        value:
          'The most permissive published position in this directory: Cigna\'s March 2025 autism resource guide states that all ABA CPT codes are covered telehealth services, with the delivery model \u2014 in person, telehealth or hybrid \u2014 chosen on the individual\'s needs rather than by code. State Medicaid telehealth restrictions do not reach commercial Cigna business.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
    },
    faq: [
      { q: 'Does Cigna require prior authorization for ABA?', a: 'Not for assessment codes (97151, 97152, 0362T) when there\'s an autism diagnosis and the provider is independently licensed or a BCBA. Treatment services do require authorization — assessment plus treatment plan with the PA form.' },
      { q: 'Does Cigna cover ABA by telehealth?', a: 'Yes — its March 2025 provider guide states all ABA CPT codes are covered telehealth services, with delivery (in-person, telehealth, hybrid) based on the individual\'s needs.' },
      { q: 'Can a child receive ABA and speech therapy under Cigna?', a: 'Yes, but not at the same time of day — Cigna doesn\'t cover ABA delivered concurrently with another therapy session. Intake should capture the existing therapy schedule to plan around it.' },
    ],
  },

  'unitedhealthcare-optum': {
    slug: 'unitedhealthcare-optum',
    cardDesc: 'Two-step auth via Provider Express, 4\u20136 month reviews, code clusters.',
    family: 'unitedhealthcare',
    assessmentPA: 'Required — step 1 of the two-step authorization (assessment auth)',
    treatmentPA: 'Required — step 2 (treatment auth)',
    dxRequired: 'Yes \u2014 DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.)',
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
    ],
    deliveryRules: {
      supervision: {
        value:
          'Optum publishes both a band and a floor: supervision at 1\u20132 hours per 10 hours of direct treatment, and a minimum of one hour of 97155 per case per month. The floor is the one that catches people \u2014 a light month still owes an hour of billed supervision.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      concurrentBilling: {
        value:
          'Permitted in three named pairs, which is more generous than most: supervision alongside direct care (97153 + 97155), group oversight (97154 + 97155), and parent training alongside direct care (97153 + 97156). Not covered at all: team meetings without the member present, 1:1 classroom aides, and services owed under IDEA.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      dailyLimits: {
        value:
          'Optum authorizes in four code clusters rather than against a per-day unit ceiling \u2014 assessment (97151, 97152), direct care (97153, 97154), multi-staff (0362T, 0373T) and QHP services (97155\u201397158) \u2014 and units flex within a cluster without a new authorization, a genuinely useful operational buffer. The threshold that actually bites runs the other way: utilization below 80 percent of authorized hours over a two-week window draws scrutiny at review, so a family whose real availability cannot support the authorized intensity is a reauthorization risk from day one.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'The authorization letter itself on Provider Express, and Optum provider services \u2014 ask whether any per-day MUE applies on top of the cluster structure.',
      },
      placeOfService: {
        value:
          'Optum\'s exclusions are the operative setting rule rather than a place-of-service table: team meetings without the member, 1:1 classroom aides, and any service owed under IDEA are not covered. That makes the school and IEP picture a coverage question rather than background \u2014 capture it precisely at intake, because a goal that belongs in the IEP is a goal Optum will not pay for.',
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
          'The Supplemental Clinical Criteria publish no age limit for ABA. Where a state has its own entry in Optum\'s ABA State Mandates supplement, that entry can import a mandate\'s age terms for fully-insured business \u2014 Maryland\'s entry adopts the COMAR hour floors that run by age band \u2014 but on the national criteria age is a benefits question, decided by the plan and the state of issue.',
        status: 'plan-dependent',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'Benefits verification on the specific plan, and Optum\'s ABA State Mandates supplemental criteria for the state of issue.',
      },
      dxRecency: {
        value:
          'No recency rule for the ASD diagnosis is published in the Supplemental Clinical Criteria cited here. The cadence Optum does set is downstream: continued-service reviews land every 4\u20136 months (per account and state law) and require progress documented per targeted behavior using the same measurement methods as baseline, plus updated standardized adaptive measures. Inadequate progress within six months requires documented reasons and a treatment modification.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'Optum provider services, or the step-one assessment-authorization request on Provider Express \u2014 ask whether an evaluation of this age will be accepted before scheduling.',
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
        value:
          'Gated on the provider, not just the code. Tele-supervision and virtual family training require the provider to be an approved Optum virtual-visits provider with a completed attestation on Provider Express, and the authorization itself must note virtual delivery \u2014 so a plan built on remote hours has to be requested that way, not converted later. Optum frames telehealth as a supplement to in-person care rather than a replacement for it.',
        status: 'verified',
        cites: [{ title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' }],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare require prior authorization for ABA?', a: 'Yes — a two-step process via Optum\'s Provider Express portal: an assessment authorization first, then a treatment authorization, generally under Optum\'s Supplemental Clinical Criteria unless state law specifies otherwise.' },
      { q: 'How often does Optum review ABA authorizations?', a: 'Most continued-service reviews occur every 4–6 months, requiring progress data measured the same way as baseline, updated standardized measures, and documented caregiver involvement.' },
      { q: 'What happens if a family uses fewer hours than authorized?', a: 'Utilization below 80% of authorized hours over a two-week period draws scrutiny at review. Intake should capture realistic availability so the requested intensity matches what the family can actually attend.' },
    ],
  },
};

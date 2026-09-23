import type { PayerConfig } from './types.js';

/* ================================================================
   MILITARY / VETERAN PAYERS
   TRICARE does not cover ABA the way a commercial plan does. ABA is
   carved out of the TRICARE basic benefit and delivered through the
   Comprehensive Autism Care Demonstration (ACD) — a separate
   demonstration with its own eligibility chain, its own mandatory
   outcome-measure regime, and place-of-service rules that exist
   nowhere else in ABA. CHAMPVA is a VA program, not TRICARE, and
   runs on completely different rules. USFHP plans are TRICARE Prime
   "designated provider" plans that administer the ACD themselves.
   Compiled September 2026 from Health.mil / tricare.mil, the
   regional contractors\' own provider material, the VA\'s CHAMPVA
   Guidebook, and each USFHP plan\'s own published material.
   ================================================================ */

export const militaryPayers: Record<string, PayerConfig> = {
  'tricare-east-humana-military': {
    slug: 'tricare-east-humana-military',
    payer: 'TRICARE East (Humana Military)',
    state: 'US', kind: 'commercial', family: 'tricare',
    cardDesc: 'ABA runs through the Autism Care Demonstration — referral chain, four outcome measures, six-month authorizations.',
    assessmentPA: {
      value: 'Required — Humana Military authorizes the initial assessment, treatment-plan development and outcome measures off the ASD referral',
      status: 'verified',
      cites: [
        { title: 'Humana Military — ACD authorization process', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/authorizationprocess' },
        { title: 'Humana Military — ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' },
        { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
      ],
    },
    treatmentPA: {
      value: 'Required — a separate treatment authorization, re-requested every six months; claims for services rendered without prior authorization are denied',
      status: 'verified',
      cites: [
        { title: 'Humana Military — ACD authorization process', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/authorizationprocess' },
        { title: 'Humana Military — ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' },
        { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
      ],
    },
    dxRequired: {
      value: 'Yes — definitive DSM-5 ASD diagnosis (F84.0) by a TRICARE-authorized PCM or specialized ASD diagnosing provider, documented on a DHA-approved DSM-5 checklist and confirmed by a validated assessment tool',
      status: 'verified',
      cites: [
        { title: 'Humana Military — ACD authorization process', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/authorizationprocess' },
        { title: 'Humana Military — ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' },
        { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
      ],
    },
    pill: 'Payer Guide · TRICARE East (Humana Military)',
    h1: 'TRICARE East ABA coverage: the Autism Care Demonstration.',
    metaTitle: 'TRICARE East (Humana Military) ABA & Autism Care Demonstration | Carelu',
    metaDescription:
      'How TRICARE East covers ABA through the Autism Care Demonstration: the referral and authorization chain Humana Military runs, the four required outcome measures, school and community rules, billing traps and family costs.',
    intro: [
      'A TRICARE card is not a commercial card, and an intake team that treats it like one will get the case wrong. ABA is not part of the TRICARE basic medical benefit at all. It is covered under the Comprehensive Autism Care Demonstration — a separate demonstration program, currently authorized to run through Dec. 31, 2028, with its own eligibility chain, its own mandatory outcome-measure regime, and its own rules about where a session may happen.',
      'In the TRICARE East Region the demonstration is administered by Humana Military. The practical consequence for intake: nothing starts until an approved ASD diagnosing provider issues a referral with a DHA-approved DSM-5 checklist, and nothing continues unless four standardized instruments keep arriving on schedule. Missing paperwork here does not slow the case down — it stops it.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — but under the Autism Care Demonstration, not the basic medical benefit' },
      { label: 'Demonstration authority', value: 'Began July 25, 2014; authorized through Dec. 31, 2028' },
      { label: 'Prior auth', value: 'Required for the assessment AND for treatment, separately' },
      { label: 'Auth increments', value: '6-month treatment authorizations; new referral + DSM-5 checklist every 2 years' },
      { label: 'Outcome measures', value: 'PDDBI, Vineland-3, SRS-2, and PSI-4-SF or SIPA — required before a treatment authorization issues' },
      { label: 'Limits', value: 'No age limit, no time limit, no yearly or lifetime dollar cap on ABA' },
      { label: 'Active duty families', value: 'EFMP enrollment plus ECHO registration is a condition of participating' },
      { label: 'Region', value: 'Humana Military administers the East; AR, IL, LA, OK, TX and WI moved to the West Region on Jan. 1, 2025' },
    ],
    sections: [
      {
        h2: 'Why the ACD is not an ordinary benefit',
        cites: [
          { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
          { title: 'Federal Register — Extension of the Comprehensive Autism Care Demonstration (Aug. 4, 2022)', url: 'https://www.govinfo.gov/content/pkg/FR-2022-08-04/html/2022-16742.htm' },
          { title: 'Humana Military — ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' },
        ],
        body: [
          'DHA is explicit that ABA sits outside the medical benefit: occupational therapy, physical therapy, speech therapy, psychological services, psychological testing and prescription drugs are covered by the TRICARE medical benefit, while ABA "is a benefit covered under the ACD," which is "separate from the TRICARE medical benefit." The demonstration is run under 10 U.S.C. § 1092 demonstration authority, not as a standard covered service, and it has been extended more than once — the Aug. 4, 2022 Federal Register notice carried it from its Dec. 31, 2023 sunset to Dec. 31, 2028. That end date is the current one; there is no later extension notice on the Federal Register docket as of this review.',
          'Because it is a demonstration, the rules are unusually prescriptive and unusually enforced. Humana Military states plainly that "claims for services rendered without prior authorization will be denied," and that every participating ABA provider must attend annual training — a 10% penalty is applied to all claims billed under the provider Tax ID for providers who do not. Annual record audits (35 records) are conducted for Autism Corporate Service Providers and sole ABA providers. None of this has a commercial-plan analogue.',
        ],
      },
      {
        h2: 'Who qualifies, and who is allowed to diagnose',
        cites: [
          { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
          { title: 'TRICARE — Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' },
          { title: 'Humana Military — ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' },
        ],
        body: [
          'Two conditions gate the door: the child must be enrolled in a TRICARE health plan, and must be diagnosed with ASD by an approved diagnosing provider. Humana Military names the covered diagnosis as Autism Spectrum Disorder (F84.0) under DSM-5. Eligible categories include dependents of active duty members, retirees and TRICARE-eligible Reserve Components, member-plus-family coverage under TRICARE Reserve Select and TRICARE Retired Reserve, TAMP and TRICARE For Life, TRICARE Young Adult, NATO dependents, and CHCBP participants.',
          'Who may diagnose is a closed list, and it is the single most common intake failure. Approved primary care providers are limited to family practice physicians, pediatricians, and pediatric or family nurse practitioners. Approved specialists are board-certified or board-eligible physicians in developmental-behavioral pediatrics, neurodevelopmental pediatrics, pediatric neurology, or adult or child psychiatry, plus doctoral-level licensed clinical psychologists and Doctors of Nursing Practice meeting specific criteria. Two age rules ride on top: if the first ASD diagnosis comes at age 8 or later, it must come from a specialized ASD diagnosing provider; and a child diagnosed more than two years before ABA is requested must get an updated diagnostic assessment.',
          'For active duty families there is a second, non-clinical gate that intake should ask about on the first call: the service member must enroll the child in their branch’s Exceptional Family Member Program, and the child must register for the Extended Care Health Option. If the ECHO path is not completed, ABA cannot be authorized regardless of the clinical picture.',
        ],
      },
      {
        h2: 'The authorization chain Humana Military runs',
        cites: [
          { title: 'Humana Military — ACD authorization process', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/authorizationprocess' },
          { title: 'Humana Military — ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' },
          { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
        ],
        body: [
          'The referral itself is a defined document, not a note. Per Humana Military it "must include a definitive diagnosis of ASD using the DSM-5 (or current edition) criteria by a PCM or specialized ASD diagnosing provider," the DSM-5 criteria "must be documented in a DHA-approved checklist in the referral," and a validated assessment tool must accompany the referral and confirm the diagnosis.',
        ],
        list: [
          { title: 'Step 1 — assessment authorization', desc: 'On receipt of a complete referral, Humana Military authorizes an initial assessment, treatment-plan development and the outcome measures, provided a TRICARE-authorized ABA supervisor has an opening to accept the beneficiary.' },
          { title: 'Step 2 — treatment authorization', desc: 'The ABA supervisor completes the initial assessment and treatment plan and submits them with the baseline outcome measures. A treatment authorization is then issued for six months.' },
          { title: 'Step 3 — every six months', desc: 'The supervisor submits an updated treatment plan plus the PDDBI parent and teacher forms and the PSI-4 short form or SIPA, and requests reauthorization before the current period expires.' },
          { title: 'Step 4 — every twelve months', desc: 'Add the SRS-2 parent form and the Vineland-3 parent, teacher or interview form to the six-month package.' },
          { title: 'Step 5 — every two years', desc: 'An approved ASD diagnosing provider must issue a new referral and an updated DSM-5 checklist. This is a diary item intake should set on day one; it is not the ABA provider’s to sign.' },
        ],
      },
      {
        h2: 'Outcome measures: the requirement intake most often misses',
        cites: [
          { title: 'Humana Military — ACD outcome measures', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/outcomemeasures' },
          { title: 'TRICARE — Understanding Outcome Measures for ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Outcome-Measures' },
          { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
        ],
        body: [
          'This is the ACD’s signature requirement and it has no commercial equivalent. Four instruments are required and the required ones "must be received prior to issuing a treatment authorization." The cadence: the PDDBI at baseline and every six months (the ABA supervisor completes the teacher form); the Vineland-3 at baseline and annually; the SRS-2 parent form at baseline and annually; and the PSI-4 short form (ages birth through 12) or the SIPA (ages 11 to 19) at baseline and every six months. DHA states families "must complete the four outcome measures every six months or every 12 months" depending on the measure.',
          'The submission mechanics get authorizations bounced as often as the scores do. Humana Military requires outcome measures to be completed no earlier than 90 days before their due date; requires the full publisher print report or hand-scored protocols; and states that "the scores cannot be imbedded within the TP or any other clinical documents." The name of the person completing the form and their relationship to the beneficiary must match and appear on all forms. For the Vineland-3, all composite scores must be submitted — communication, daily living, socialization, motor skills, adaptive behavior composite, and both maladaptive behavior composites.',
          'What happens if they are not submitted is unambiguous. Humana Military will assist a family who cannot complete a measure through an ACD team associate, "however, if the barriers cannot be resolved, ABA services will not be able to be authorized." Outcome measures can be performed by TRICARE-authorized ASD diagnosing providers or, when Humana Military authorizes it, by the ABA provider without an additional PCM referral — and when the ABA provider administers one, bill it under CPT 97151 with a 99 modifier to distinguish it from an assessment.',
        ],
      },
      {
        h2: 'Where ABA may be delivered — and where it may not',
        cites: [
          { title: 'TRICARE — Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' },
          { title: 'Humana Military — ACD progress notes', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/progressnotes' },
          { title: 'Humana Military — ACD exclusions', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/exclusions' },
        ],
        body: [
          'School is the setting that surprises people. DHA states that "ABA services rendered by a behavior technician in the school setting aren’t covered." A Board Certified Behavior Analyst may be authorized where there is a clinically necessary and appropriate goal, subject to clinical necessity review, with pre-authorization required and the contractor approving the goals, which "must be focused and time-limited." Community settings are similar but narrower: parents are generally expected to generalize mastered skills on their own, and a BCBA "may be authorized for certain community settings" only after checking with the contractor. Humana Military lists "community locations not being authorized prior to rendering services" as a common documentation failure.',
          'The goal-level exclusions bind in every setting. Humana Military excludes goals targeting activities of daily living, vocational and/or educational goals, ABA involving aversive techniques or restraints, ABA for diagnoses other than ASD, and ABA for symptoms and behaviors that are not part of the core symptoms of ASD. Training and supervising a behavior technician, report writing outside CPT 97151, emails and phone calls, and office and therapeutic supplies are not payable either.',
        ],
      },
      {
        h2: 'Billing rules that decide whether the claim survives',
        cites: [
          { title: 'Humana Military — Autism Care Demonstration (provider)', url: 'https://www.humanamilitary.com/provider/managedcare/acoe' },
          { title: 'Humana Military — ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' },
          { title: 'TRICARE — Compare Health Plan Costs', url: 'https://tricare.mil/Costs/Compare' },
        ],
        body: [
          'The ACD adopted only the Category I codes that transferred from Category III: 97151, 97153, 97155, 97156, 97157 and 97158, plus 99366 and 99368 for medical team conferences. Other codes are not covered. Authorized ABA supervisors and ACSPs bill as outpatient specialty providers; claims must be submitted electronically, EFT enrollment is required, and timely filing is one year from the date of service. Start and stop times belong on the individual claim lines, even when the same code is billed twice in a day by the same rendering provider.',
          'Three traps recur. Concurrent billing is excluded for all ACD Category I codes except where the family and the beneficiary receive separate services and the beneficiary is not present in the family session — documentation must show two separate rendering providers and two separate locations (which may be two rooms in the same building). If 97153 and 97155 are billed concurrently, the higher rate is paid and the other is denied. And all 97151 units must be used within 14 calendar days of the first date of service for 97151, or the claim is denied; delays outside the provider’s control go through the appeals process.',
          'On what the family pays: ABA is treated as outpatient specialty care and a single copayment covers all ABA services received on one day. Under TRICARE Prime, active duty family members pay $0 for network specialty care in both Group A and Group B; retirees and all others pay $39. Under TRICARE Select, active duty family members pay $39 network (Group A) or $33 (Group B), and retirees and all others pay $52 network or 25% non-network. There are no yearly or lifetime caps on ABA, and the amounts count toward the family catastrophic cap. Verify current-year figures on the TRICARE cost page before quoting them.',
        ],
      },
    ],
    collect: [
      { title: 'Sponsor status and plan', desc: 'Active duty vs. retiree vs. Guard/Reserve, and Prime vs. Select vs. USFHP — it drives both eligibility and the copay. Group A or B (sponsor’s service entry before or on/after Jan. 1, 2018) changes the Select amounts.' },
      { title: 'Region by ZIP, not by state', desc: 'East is Humana Military and West is TriWest; six states moved on Jan. 1, 2025 and TRICARE resolves the boundary by ZIP lookup. The wrong contractor means the wrong portal and a lost week.' },
      { title: 'Diagnosing provider and their credential', desc: 'Name, specialty and board status. A PA or an unlisted specialty cannot diagnose or refer for the ACD, and a first diagnosis at age 8 or later must come from a specialized ASD diagnosing provider.' },
      { title: 'Referral packet status', desc: 'Referral, DHA-approved DSM-5 checklist, and the validated assessment tool results. Ask for the date of the initial ASD diagnosis — more than two years old with no prior ABA means an updated evaluation.' },
      { title: 'EFMP and ECHO status (active duty families)', desc: 'Whether the sponsor has enrolled in EFMP and whether the child is registered in ECHO. Nothing authorizes without it, and provisional registration runs on a 90-day clock.' },
      { title: 'Outcome measures already done', desc: 'Which of the PDDBI, Vineland-3, SRS-2 and PSI-4-SF/SIPA exist, when, and who completed them — the respondent’s name and relationship must match across forms.' },
    ],
    sources: [
      { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
      { title: 'TRICARE — Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' },
      { title: 'TRICARE — Understanding Outcome Measures for ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Outcome-Measures' },
      { title: 'TRICARE — Compare Health Plan Costs', url: 'https://tricare.mil/Costs/Compare' },
      { title: 'TRICARE — Regions', url: 'https://tricare.mil/About/Regions' },
      { title: 'Federal Register — Extension of the Comprehensive Autism Care Demonstration (Aug. 4, 2022)', url: 'https://www.govinfo.gov/content/pkg/FR-2022-08-04/html/2022-16742.htm' },
      { title: 'Humana Military — Autism Care Demonstration (provider)', url: 'https://www.humanamilitary.com/provider/managedcare/acoe' },
      { title: 'Humana Military — ACD authorization process', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/authorizationprocess' },
      { title: 'Humana Military — ACD outcome measures', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/outcomemeasures' },
      { title: 'Humana Military — ACD progress notes', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/progressnotes' },
      { title: 'Humana Military — ACD exclusions', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/exclusions' },
      { title: 'Humana Military — ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' },
      { title: 'Humana Military — Beneficiaries in the new TRICARE contract', url: 'https://www.humanamilitary.com/beneupdates' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'None. DHA states plainly that the Autism Care Demonstration carries no age limit, no time limit and no yearly or lifetime dollar cap on ABA. What ages out is the diagnosing pathway, not the benefit: if the first ASD diagnosis comes at age 8 or later it must come from a specialized ASD diagnosing provider rather than a primary care provider. Separately, whether the child is still a TRICARE-eligible dependent is its own eligibility question \u2014 the ACD gates on plan enrollment, not on age.',
        status: 'verified',
        cites: [{ title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }, { title: 'Humana Military \u2014 ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' }],
      },
      dxRecency: {
        value:
          'Two clocks, and both belong on the intake form. First, the diagnosis: a child diagnosed more than two years before ABA is requested must get an updated diagnostic assessment \u2014 so ask for the date of the initial ASD diagnosis, not just the diagnosis. Second, the referral: it runs two years, and every two years an approved ASD diagnosing provider must issue a new referral with an updated DHA-approved DSM-5 checklist. Neither is the ABA provider\u2019s to sign, which is why the two-year renewal is a diary item to set on day one rather than a task to discover at reauthorization. Outcome measures carry their own window: they must be completed no earlier than 90 days before their due date.',
        status: 'verified',
        cites: [{ title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }, { title: 'Humana Military \u2014 ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' }, { title: 'Humana Military \u2014 ACD outcome measures', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/outcomemeasures' }],
      },
      diagnosingProviders: {
        value:
          'A closed list, and the single most common intake failure on a TRICARE case. Approved primary care providers are limited to family practice physicians, pediatricians, and pediatric or family nurse practitioners. Approved specialists are board-certified or board-eligible physicians in developmental-behavioral pediatrics, neurodevelopmental pediatrics, pediatric neurology, or adult or child psychiatry, plus doctoral-level licensed clinical psychologists and Doctors of Nursing Practice meeting specific criteria. A physician assistant or an unlisted specialty cannot diagnose or refer for the ACD, whatever their scope elsewhere. And a first diagnosis at age 8 or later must come from the specialist half of the list.',
        status: 'verified',
        cites: [{ title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }, { title: 'TRICARE \u2014 Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' }, { title: 'Humana Military \u2014 ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' }],
      },
      diagnosticTools: {
        value:
          'Two instruments-and-forms requirements, on different clocks. At the door, the referral must carry \u201ca definitive diagnosis of ASD using the DSM-5 (or current edition) criteria,\u201d those criteria \u201cmust be documented in a DHA-approved checklist in the referral,\u201d and a validated assessment tool must accompany the referral and confirm the diagnosis. Then, for the life of the case, four standardized outcome measures are mandatory and \u201cmust be received prior to issuing a treatment authorization\u201d: the PDDBI at baseline and every six months (the ABA supervisor completes the teacher form), the Vineland-3 at baseline and annually, the SRS-2 parent form at baseline and annually, and the PSI-4 short form (birth through 12) or the SIPA (ages 11 to 19) at baseline and every six months. Submission mechanics bounce as many authorizations as scores do: measures completed no earlier than 90 days before their due date, the full publisher print report or hand-scored protocols, scores that \u201ccannot be imbedded within the TP or any other clinical documents,\u201d a respondent name and relationship that match across all forms, and \u2014 for the Vineland-3 \u2014 all composite scores including both maladaptive behavior composites. Where the ABA provider administers a measure, bill CPT 97151 with a 99 modifier.',
        status: 'verified',
        cites: [{ title: 'Humana Military \u2014 ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' }, { title: 'Humana Military \u2014 ACD outcome measures', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/outcomemeasures' }, { title: 'TRICARE \u2014 Understanding Outcome Measures for ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Outcome-Measures' }, { title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }],
      },
      referral: {
        value:
          'Required, defined, and renewable on a two-year clock. The referral is a document rather than a note: it must include a definitive DSM-5 ASD diagnosis by a PCM or specialized ASD diagnosing provider, the DSM-5 criteria documented in a DHA-approved checklist, and a validated assessment tool confirming the diagnosis. On a complete referral Humana Military authorizes the initial assessment, treatment-plan development and the outcome measures, provided an authorized ABA supervisor has an opening; a six-month treatment authorization follows the completed assessment and baseline measures. For active duty families a second, non-clinical gate applies and intake should ask about it on the first call: the sponsor must enrol the child in their branch\u2019s Exceptional Family Member Program, and the child must register for the Extended Care Health Option. Without the ECHO path, ABA cannot be authorized regardless of the clinical picture. \u201cClaims for services rendered without prior authorization will be denied.\u201d',
        status: 'verified',
        cites: [{ title: 'Humana Military \u2014 ACD authorization process', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/authorizationprocess' }, { title: 'Humana Military \u2014 ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' }, { title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }],
      },
      telehealth: {
        value:
          'Humana Military does not publish an ABA telehealth code list on its public ACD pages. What it does publish is the documentation consequence: the progress note must record the place of service as home, clinic/center, daycare (non-preschool), school, community or telemedicine, and GPS coordinates do not satisfy that. The West Region contractor publishes the DHA-level rule in full \u2014 telehealth limited to 97156, only after the first six-month treatment period, with a GT or 95 modifier and no audio-only \u2014 but that is TriWest\u2019s published restatement, not an East Region document, so confirm before scheduling remote hours in the East.',
        status: 'unverified',
        cites: [{ title: 'Humana Military \u2014 ACD progress notes', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/progressnotes' }, { title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }],
        verifyVia: 'Humana Military\u2019s ABA dedicated line at (866) 323-7155, or the authorization letter itself in provider self-service. TRICARE Operations Manual Ch. 18, Sec. 3 is the governing document, but manuals.health.mil blocks automated retrieval.',
        blocker: 'document',
      },
      authTurnaround: {
        value:
          'Every ABA service is pre-authorized, and there is no published expedited track. The DHA rule the contractor works under: it “shall complete 100% clinical necessity reviews for ABA services for all compliant TPs within five business days for authorization processing standards.” Humana Military authorizes the initial assessment “upon receipt of all necessary documents,” and missing clinical information “may result in delays, terminations of authorized care and denials.” The clock that matters is reauthorization: “Humana Military does not accept retrospective referrals and will not backdate late submissions. Providers can submit requests for ongoing treatment up to 60 days in advance. However, submitting requests less than 30 days before the current authorization expires may result in non-reimbursement.” Diary every six-month auth for day 60 before expiry, and never later than day 30.',
        status: 'verified',
        cites: [{ title: 'TRICARE Operations Manual 6010.62-M (2021 ed.), Ch. 18 Sec. 3 — Autism Care Demonstration (Change 11, Jul 24, 2024)', url: 'https://manuals.health.mil/pages/DisplayManualHtmlFile/2024-08-06/AsOf/tot5/c18s3.html' }, { title: 'Humana Military — ACD authorization process', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/authorizationprocess' }, { title: 'Humana Military — TRICARE Provider Handbook, East Region (2026)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/tricare-provider-handbook.pdf' }],
      },
      coordinationOfBenefits: {
        value:
          '“TRICARE is the secondary payer to all health benefits and insurance plans, except for Medicaid, TRICARE supplements, the Indian Health Service and other programs or plans as identified by Defense Health Agency (DHA).” With Medicaid, TRICARE pays first (“In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer”). Otherwise “the provider must bill the OHI first,” then file with TRICARE showing the other plan’s payment. OHI normally waives TRICARE referrals and authorizations, but ABA is on Humana’s list of services that “require prior authorization even when OHI coverage exists” — get the ACD authorization too. TRICARE will not pay amounts the other plan denied “because the beneficiary failed to meet some other requirement of coverage,” so follow the primary plan’s PA rules as well.',
        status: 'verified',
        cites: [{ title: 'Humana Military — TRICARE Provider Handbook, East Region (2026)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/tricare-provider-handbook.pdf' }, { title: 'eCFR — 32 CFR 199.8, Double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' }, { title: 'TRICARE Operations Manual 6010.62-M (2021 ed.), Ch. 18 Sec. 3 — Autism Care Demonstration (Change 11, Jul 24, 2024)', url: 'https://manuals.health.mil/pages/DisplayManualHtmlFile/2024-08-06/AsOf/tot5/c18s3.html' }],
      },
    },
    faq: [
      { q: 'Does TRICARE East cover ABA therapy?', a: 'Yes, but not through the regular medical benefit. ABA is covered under the Comprehensive Autism Care Demonstration, a separate program currently authorized through Dec. 31, 2028 and administered in the East Region by Humana Military. Every ABA service requires prior authorization.' },
      { q: 'What outcome measures does the Autism Care Demonstration require?', a: 'Four: the PDDBI (baseline and every six months, with the ABA supervisor completing the teacher form), the Vineland-3 (baseline and annually), the SRS-2 (baseline and annually), and the PSI-4 short form for ages birth through 12 or the SIPA for ages 11 to 19 (baseline and every six months). They must be received before a treatment authorization will issue.' },
      { q: 'What happens if the outcome measures are not submitted?', a: 'The authorization does not issue. Humana Military will put an ACD team associate on resolving the barrier, but states that if the barriers cannot be resolved, ABA services will not be able to be authorized.' },
      { q: 'Can a behavior technician deliver ABA in a TRICARE child’s school?', a: 'No. DHA states that ABA rendered by a behavior technician in the school setting is not covered. A BCBA may be authorized where there is a clinically necessary, focused and time-limited goal, but only with pre-authorization and contractor approval of the goals.' },
      { q: 'How often does the family need a new referral?', a: 'Every two years. An approved ASD diagnosing provider must issue a new referral and an updated DHA-approved DSM-5 checklist; the ABA provider cannot supply either. Treatment authorizations themselves run in six-month increments.' },
      { q: 'What does a TRICARE family pay for ABA?', a: 'The copayment or cost-share for their plan, with one copayment covering all ABA services on the same day. Active duty family members in TRICARE Prime pay $0 for network specialty care; retirees and others pay $39. Select amounts run $33 to $52 network depending on category and group. There is no yearly or lifetime cap on ABA.' },
    ],
    deliveryRules: {
      supervision: {
        value: 'Assistant behavior analysts and behavior technicians must receive supervision in accordance with their certifying and licensing bodies. Behavior technicians may not conduct the ABA assessment or establish the treatment plan. Only one authorized ABA supervisor is approved to provide ABA for a beneficiary at a time; a consulting supervisor does not take over the plan or the billing. Supervision itself is not a payable service — training and supervising a behavior technician is an express exclusion.',
        status: 'verified',
        cites: [
          { title: 'Humana Military — ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' },
          { title: 'Humana Military — ACD exclusions', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/exclusions' },
        ],
      },
      concurrentBilling: {
        value: 'Excluded for all ACD Category I codes except where the family and the beneficiary receive separate services and the beneficiary is not present in the family session — documentation must show two separate rendering providers and two separate locations (two rooms in the same building qualify). If 97153 and 97155 are billed concurrently, the higher rate is paid and the other is denied. Where 97151 and 97156 fall on the same date and time with different rendering providers, modifier HS (beneficiary not present) or HR (beneficiary present) must be applied or the claim denies for concurrent billing.',
        status: 'verified',
        cites: [
          { title: 'Humana Military — ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' },
          { title: 'Humana Military — Autism Care Demonstration (provider)', url: 'https://www.humanamilitary.com/provider/managedcare/acoe' },
        ],
      },
      dailyLimits: {
        value: 'Humana Military does not publish per-day unit ceilings on its public ACD pages; the ceilings live in TRICARE Operations Manual Ch. 18, Sec. 3 and in the authorization itself. One hard clock is public: all authorized 97151 units must be used within 14 calendar days of the first 97151 date of service or the claim is denied.',
        status: 'unverified',
        cites: [
          { title: 'Humana Military — ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' },
        ],
        verifyVia: 'Humana Military provider self-service authorization letter, the ABA dedicated line at (866) 323-7155, or TRICARE Operations Manual Ch. 18, Sec. 3 at manuals.health.mil',
        blocker: 'document',
      },
      noteSignature: {
        value: 'Progress notes must carry the name and credentials of the rendering ABA supervisor, assistant behavior analyst or behavior technician, with a dated signature. Notes are not submitted with claims but are pulled in ABA quality audits and compared against the claims. Required elements include beneficiary name, date and start/end times with session length, place of service, participants and their relationship to the beneficiary, clinical status as DHA defines it, a narrative session summary, techniques used, response to treatment and progress toward goals. A treatment plan alone does not satisfy the 97151 note requirement.',
        status: 'verified',
        cites: [
          { title: 'Humana Military — ACD progress notes', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/progressnotes' },
        ],
      },
      placeOfService: {
        value: 'The note must record the place of service as home, clinic/center, daycare (non-preschool), school, community or telemedicine — GPS coordinates do not satisfy this. ABA rendered by a behavior technician in a school is not covered; a BCBA may be authorized for focused, time-limited, contractor-approved goals after clinical necessity review. Community locations must be authorized before services are rendered. Educational, vocational and activities-of-daily-living goals are excluded in every setting.',
        status: 'verified',
        cites: [
          { title: 'TRICARE — Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' },
          { title: 'Humana Military — ACD progress notes', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/progressnotes' },
          { title: 'Humana Military — ACD exclusions', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/exclusions' },
        ],
      },
      billAsProvider: {
        value: 'Only authorized ABA supervisors or Autism Care Corporate Services Providers may bill. Claims must be submitted by the rendering practitioner and the rendering and billing providers must match — a mismatch is one of the documentation failures Humana Military calls out. HIPAA taxonomies: behavior analyst 103K00000X, assistant behavior analyst 106E00000X, behavior technician 106S00000X.',
        status: 'verified',
        cites: [
          { title: 'Humana Military — ABA provider FAQ (PDF)', url: 'https://www.humanamilitary.com/content/dam/sites/humana-military-com/provider/faqs/aba-provider-faq.pdf' },
          { title: 'Humana Military — ACD progress notes', url: 'https://www.humanamilitary.com/provider/managedcare/acoe/progressnotes' },
        ],
      },
    },
  },

  'tricare-west-triwest': {
    slug: 'tricare-west-triwest',
    payer: 'TRICARE West (TriWest)',
    state: 'US', kind: 'commercial', family: 'tricare',
    cardDesc: 'TriWest took the West Region on Jan. 1, 2025 — ACD rules, a published place-of-service map, and the 97155 monthly penalty.',
    assessmentPA: {
      value: 'Required — TriWest issues an authorization for the initial ABA assessment once the beneficiary is enrolled in the ACD',
      status: 'verified',
      cites: [
        { title: 'TRICARE West — Steps to Obtain ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/How-to-Obtain-ABA-Services' },
        { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
      ],
    },
    treatmentPA: {
      value: 'Required — a separate treatment authorization after clinical necessity review; reauthorization is requested 60 to 30 days before expiry',
      status: 'verified',
      cites: [
        { title: 'TRICARE West — Steps to Obtain ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/How-to-Obtain-ABA-Services' },
        { title: 'TriWest — Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' },
        { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
      ],
    },
    dxRequired: {
      value: 'Yes — definitive ASD diagnosis by a TRICARE-authorized ASD diagnosing provider, plus a completed DSM-5-TR ASD criteria checklist and a validated assessment tool',
      status: 'verified',
      cites: [
        { title: 'TriWest — Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' },
        { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
      ],
    },
    pill: 'Payer Guide · TRICARE West (TriWest)',
    h1: 'TRICARE West ABA coverage under TriWest.',
    metaTitle: 'TRICARE West (TriWest) ABA & Autism Care Demonstration | Carelu',
    metaDescription:
      'How TRICARE West covers ABA under the Autism Care Demonstration: the TriWest referral and clinical-necessity path, required outcome measures, the published place-of-service rules for school and community, daily unit ceilings and the 97155 penalty.',
    intro: [
      'The TRICARE West Region changed hands on Jan. 1, 2025: TriWest Healthcare Alliance replaced the prior contractor, and six states — Arkansas, Illinois, Louisiana, Oklahoma, Texas and Wisconsin — moved from East to West on the same date. If your intake notes still route West cases to the old contractor, or route Texas to the East, you are sending referrals into a void. TRICARE resolves the boundary by ZIP code, so confirm by ZIP rather than by state.',
      'What TriWest administers is the Comprehensive Autism Care Demonstration, not a commercial ABA benefit. The clinical rules are DHA’s and they are the same in both regions, but TriWest publishes them in unusual operational detail — including a place-of-service map, per-day unit ceilings and a concurrent-billing matrix — which makes the West the easiest region in which to get the operational layer right before the first session.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — under the Autism Care Demonstration, separate from the TRICARE basic benefit' },
      { label: 'Contractor', value: 'TriWest Healthcare Alliance, West Region, since Jan. 1, 2025' },
      { label: 'Demonstration authority', value: 'Authorized through Dec. 31, 2028' },
      { label: 'Prior auth', value: 'Assessment and treatment authorized separately; treatment follows a clinical necessity review' },
      { label: 'Auth increments', value: '6 months; reauthorization requested 60–30 days before expiry' },
      { label: 'Referral cycle', value: 'Referrals last 2 years; a new DSM-5-TR checklist is required at each renewal' },
      { label: 'Assessment clock', value: 'Assessment must start within 28 days of approval and 97151 completed within 14 days of the first service date' },
      { label: 'Parent training', value: 'Six parent/caregiver sessions every six months; first within 30 days of each treatment authorization' },
    ],
    sections: [
      {
        h2: 'The region moved — get the contractor right first',
        cites: [
          { title: 'TRICARE — Regions', url: 'https://tricare.mil/About/Regions' },
          { title: 'Humana Military — Beneficiaries in the new TRICARE contract', url: 'https://www.humanamilitary.com/beneupdates' },
          { title: 'TriWest — Autism Care Demonstration (TRICARE West provider)', url: 'https://tricare.triwest.com/en/provider/autism-care-demonstration/' },
        ],
        body: [
          'TRICARE is managed in three regions. Humana Military holds the East; TriWest Healthcare Alliance holds the West under contracts that began Jan. 1, 2025. Six states that had been in the East — Arkansas, Illinois, Louisiana, Oklahoma, Texas and Wisconsin — moved to the West on that date. DHA publishes a ZIP-code lookup on its Regions page rather than a flat state list, so treat ZIP as the authority.',
          'On the provider side, TriWest separates certification from network status: a TRICARE-certified provider with a signed Participation Agreement is a non-network participating ACD provider; adding a signed Network Agreement and TriWest credentialing makes you in-network. TriWest certifies ABA providers within 10 business days of a complete application. ACD requests and documents go through the online referral management system on the Availity provider portal, with a dedicated ACD fax line as the fallback, and TriWest staffs a separate ACD customer service line at 833-818-2525 — including up to 180 days of eligibility assistance for families who are new to the ACD or were told their documentation was incomplete.',
        ],
      },
      {
        h2: 'Eligibility, diagnosis and the two-year referral cycle',
        cites: [
          { title: 'TriWest — Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' },
          { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
        ],
        body: [
          'Four things must be true before anything is authorized: the beneficiary is enrolled in a TRICARE health plan; a TRICARE-authorized ASD diagnosing provider has made a definitive ASD diagnosis; active duty family members are registered for the Extended Care Health Option; and the active duty sponsor is enrolled in their branch’s Exceptional Family Member Program. TriWest may grant provisional 90-day ECHO eligibility while registration completes — but if proof of EFMP enrollment is not complete within 90 days, the beneficiary is disenrolled from ECHO and loses ABA eligibility. ECHO carries its own annual $36,000 cap, and ECHO cost-sharing is separate from ABA deductibles and copayments.',
          'Three diagnosis rules catch people out. If the beneficiary has never had ABA and the initial ASD diagnosis is more than two years old, an updated evaluation is required. If the first diagnosis comes at age 8 or older, the beneficiary must first be evaluated by a specialized ASD diagnosing provider. And an adult beneficiary who ages out of a diagnosing provider’s pediatric scope may only be diagnosed and referred by a clinical psychologist.',
          'Referrals last two years. TriWest accepts a new referral within six months of the current one expiring, and recommends getting it no more than six months in advance. The DSM-5-TR ASD criteria checklist must be completed at ACD enrollment and every two years after — and only approved TRICARE diagnosing providers may complete it, not ABA providers. The diagnostic evaluation and the validated assessment tool are one-time requirements and are not repeated at the two-year renewal.',
        ],
      },
      {
        h2: 'Outcome measures and the clinical necessity review',
        cites: [
          { title: 'TriWest — Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' },
          { title: 'TRICARE West — Clinical Necessity Reviews', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Clinical-Necessity-Reviews' },
          { title: 'TRICARE — Understanding Outcome Measures for ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Outcome-Measures' },
        ],
        body: [
          'TriWest states the rule flatly: all beneficiaries need complete and valid outcome measure scores for ABA service requests to be approved. The PDDBI parent form is due before treatment and every six months; the PDDBI teacher form, completed by the treating ABA supervisor, is required with the first reassessment and every six months after. The Vineland-3 and the SRS-2 are due before treatment starts and annually. The PSI-4 short form (birth through 12 years 11 months) or the SIPA (11 through 19 years 11 months) is due before treatment and every six months — for ages 11 to 12 years 11 months either is acceptable; above that, only the SIPA. TRICARE West will accept outcome measures administered up to one year before ABA starts for a beneficiary new to the ACD.',
          'Only the scores go in, not the questionnaires: submit the full publisher report or a clearly written hand-scored protocol with summary score sheets, labelled as parent or teacher form, with the respondent’s name and relationship to the beneficiary. Outcome measures other than the PDDBI may be authorized to the ABA provider without a separate diagnosing-provider referral, under CPT 97151 with modifier 99 and one unit per measure — but they must be requested through a treatment plan update, and requests made outside that update are cancelled. They are also not split between providers.',
          'The review itself is substantive. TriWest’s clinical team reviews the treatment plan against goals, requested hours, location of services and outcome measure scores, and weighs level of support needed, treatment effectiveness, dose response, duration and discharge planning. If changes are required, the provider has 10 calendar days to submit a modified plan for a second review. Reauthorization requests may be filed up to 60 days in advance but no later than 30 days before the current authorization expires.',
        ],
      },
      {
        h2: 'Place of service: the map TriWest actually publishes',
        cites: [
          { title: 'TriWest — Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' },
          { title: 'TRICARE — Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' },
        ],
        list: [
          { title: 'Home (POS 12) and clinic/center (POS 11)', desc: 'Open to all ABA provider types authorized in the treatment plan. Travel to and from a clinic or center is not reimbursable.' },
          { title: 'School (POS 03)', desc: 'Preschool, public, private or homeschool. Only the ABA supervisor may deliver, under CPT 97153. A current IEP must accompany the treatment plan for public or private school, services must be specific and short-term with a planned fade, school hours must be separated from technician hours in the plan, and providers may not duplicate what the IEP already covers. For homeschooled children, ABA must fall outside homeschooling hours.' },
          { title: 'Daycare, non-preschool (POS 99)', desc: 'Daycare centers, child development centers, after-school and adult care settings are payable only where therapy actively addresses core ASD symptoms. The provider may not act as a support aide or observer during routine activities, and the plan must explain why home or center will not work and how caregivers are involved.' },
          { title: 'Community (POS 99)', desc: 'Grocery stores, parks, restaurants and community events, with preauthorization, using 97153 (or 97155 for protocol modification). Medical offices and appointments, sporting events, participation in sports, camps, daily-living and job-skills settings, and travel in a vehicle are excluded.' },
          { title: 'Telehealth (POS 02)', desc: 'Only 97156, and only after the first six-month treatment period, with GT or 95 modifier. Audio-only is not allowed under the ACD. 97151, 97153, 97155, 97157 and 97158 may not be delivered remotely.' },
          { title: 'Goals excluded everywhere', desc: 'Educational, academic and vocational goals are excluded in every setting, school included. ABA supervisors may not replace academic support or act as a 1:1 aide.' },
        ],
      },
      {
        h2: 'Codes, ceilings and the 97155 penalty',
        cites: [
          { title: 'TriWest — Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' },
        ],
        body: [
          'TriWest publishes the per-day ceilings: 97153 may not exceed 32 units (8 hours) per day or 160 units (40 hours) per week; 97155 and 97156 may not exceed eight units per day; 97157 and 97158 may not exceed six units per day with a maximum of eight participants per group. 97151 is approved at 32 units for the initial assessment and 24 units per reassessment period, with the PDDBI administration, scoring and analysis inside that allowance, and must be completed within 14 days of the first service date.',
          'The rule with teeth is 97155. At least one 97155 session per month must be performed by the authorized ABA supervisor and cannot be delegated to an assistant behavior analyst. If it is not, a 10% penalty is applied to all ABA claims for that beneficiary for the entire six-month authorization period — waivable only if no direct-service codes were performed that calendar month. Team meetings and IEP meetings do not count, and BACB-required supervision of technicians is not billable at all; claims for supervision are denied or recouped.',
          'Medical team conferences (99366 with the beneficiary, 99368 without) require at least three qualified health professionals from different specialties who have seen the beneficiary face-to-face within the last 60 days, and the Autism Services Navigator must be present for the entire conference for the ABA provider to be paid. One unit is authorized per six-month treatment authorization.',
        ],
      },
      {
        h2: 'What the family pays, and who the navigator is',
        cites: [
          { title: 'TriWest — Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' },
          { title: 'TRICARE — Compare Health Plan Costs', url: 'https://tricare.mil/Costs/Compare' },
          { title: 'TRICARE West — Autism Services Navigator', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Autism-Services-Navigator' },
        ],
        body: [
          'Cost-shares follow the TRICARE plan type and are charged at specialty outpatient office-visit rates. One copayment covers all ABA services on the same day, there is no annual cap for ABA services, and ABA deductibles and copayments are separate from ECHO cost-sharing. Providers may not bill beneficiaries more than 100% of the posted rates, and network providers may not bill for non-covered care unless the family was told in advance and agreed in writing. As currently published, TRICARE Prime active duty family members pay $0 for network specialty care and retirees and others pay $39; Select runs $33 to $52 network depending on category and group, with 20% or 25% non-network.',
          'Every ACD participant in the West is assigned an Autism Services Navigator — a care manager who is the family’s main point of contact, builds the comprehensive care plan, and carries documentation through a permanent change of station. Navigators are health advocates: they do not review treatment plans for clinical necessity and do not decide coverage. Worth knowing for intake: USFHP members and overseas beneficiaries do not get an ASN.',
        ],
      },
    ],
    collect: [
      { title: 'ZIP code, then region', desc: 'The East/West line is drawn by ZIP and six states moved on Jan. 1, 2025. Confirm West before you route anything to TriWest or Availity.' },
      { title: 'Plan type and sponsor category', desc: 'Prime, Select, USFHP or TRICARE Young Adult, and active duty vs. retiree — it sets the copay and, for active duty families, the EFMP/ECHO requirement.' },
      { title: 'EFMP and ECHO registration dates', desc: 'Provisional ECHO runs 90 days; if EFMP proof is not in by then the family is disenrolled and loses ABA eligibility. Capture where they are in the clock.' },
      { title: 'Referral date and expiry', desc: 'Referrals run two years. Capture the issue date, the diagnosing provider, and whether the DSM-5-TR checklist is on file — only an approved diagnosing provider can complete it.' },
      { title: 'Outcome measures on hand', desc: 'Which measures exist and when. TRICARE West accepts measures administered up to a year before ABA starts for a beneficiary new to the ACD.' },
      { title: 'Requested settings, with justification', desc: 'School requires an IEP and supervisor-only delivery; community requires preauthorization; daycare requires a written reason home or clinic will not work. Ask on the first call, not at plan-writing.' },
    ],
    sources: [
      { title: 'TriWest — Autism Care Demonstration (TRICARE West provider)', url: 'https://tricare.triwest.com/en/provider/autism-care-demonstration/' },
      { title: 'TriWest — Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' },
      { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
      { title: 'TRICARE — Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' },
      { title: 'TRICARE West — Steps to Obtain ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/How-to-Obtain-ABA-Services' },
      { title: 'TRICARE West — Ongoing ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Ongoing-ABA-Services' },
      { title: 'TRICARE West — Clinical Necessity Reviews', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Clinical-Necessity-Reviews' },
      { title: 'TRICARE West — Autism Services Navigator', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Autism-Services-Navigator' },
      { title: 'TRICARE — Understanding Outcome Measures for ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Outcome-Measures' },
      { title: 'TRICARE — Regions', url: 'https://tricare.mil/About/Regions' },
      { title: 'TRICARE — Compare Health Plan Costs', url: 'https://tricare.mil/Costs/Compare' },
      { title: 'Humana Military — Beneficiaries in the new TRICARE contract', url: 'https://www.humanamilitary.com/beneupdates' },
      { title: 'Federal Register — Extension of the Comprehensive Autism Care Demonstration (Aug. 4, 2022)', url: 'https://www.govinfo.gov/content/pkg/FR-2022-08-04/html/2022-16742.htm' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'No age limit and no annual cap on ABA under the demonstration. Age instead decides which instrument and which diagnosing provider apply. If the first ASD diagnosis comes at age 8 or older, the beneficiary must first be evaluated by a specialized ASD diagnosing provider; an adult beneficiary who ages out of a diagnosing provider\u2019s pediatric scope may only be diagnosed and referred by a clinical psychologist. On outcome measures the split is the PSI-4 short form for birth through 12 years 11 months and the SIPA for 11 through 19 years 11 months, with either acceptable in the 11 to 12 years 11 months overlap and only the SIPA above it.',
        status: 'verified',
        cites: [{ title: 'TriWest \u2014 Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' }, { title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }],
      },
      dxRecency: {
        value:
          'Two clocks. If the beneficiary has never had ABA and the initial ASD diagnosis is more than two years old, an updated evaluation is required. And referrals last two years: TriWest accepts a new referral within six months of the current one expiring and recommends getting it no more than six months in advance. The DSM-5-TR ASD criteria checklist must be completed at ACD enrollment and every two years after, and only approved TRICARE diagnosing providers may complete it \u2014 not ABA providers. Usefully, the diagnostic evaluation and the validated assessment tool are one-time requirements and are not repeated at the two-year renewal. For a beneficiary new to the ACD, TRICARE West will accept outcome measures administered up to one year before ABA starts.',
        status: 'verified',
        cites: [{ title: 'TriWest \u2014 Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' }, { title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }],
      },
      diagnosingProviders: {
        value:
          'The ACD\u2019s closed list, plus two West-specific rules. Approved primary care providers are family practice physicians, pediatricians, and pediatric or family nurse practitioners; approved specialists are board-certified or board-eligible physicians in developmental-behavioral pediatrics, neurodevelopmental pediatrics, pediatric neurology, or adult or child psychiatry, plus doctoral-level licensed clinical psychologists and qualifying Doctors of Nursing Practice. A first diagnosis at age 8 or older requires the specialist half of the list. An adult beneficiary past a diagnosing provider\u2019s pediatric scope may only be diagnosed and referred by a clinical psychologist. The DSM-5-TR checklist is theirs to complete, never the ABA provider\u2019s.',
        status: 'verified',
        cites: [{ title: 'TriWest \u2014 Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' }, { title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }, { title: 'TRICARE \u2014 Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' }],
      },
      diagnosticTools: {
        value:
          'A validated tool at the door and four standardized measures for the life of the case. TriWest states the rule flatly: all beneficiaries need complete and valid outcome measure scores for ABA service requests to be approved. The PDDBI parent form is due before treatment and every six months; the PDDBI teacher form, completed by the treating ABA supervisor, is required with the first reassessment and every six months after; the Vineland-3 and SRS-2 are due before treatment and annually; the PSI-4 short form (birth through 12 years 11 months) or the SIPA (11 through 19 years 11 months) is due before treatment and every six months. Only the scores go in \u2014 the full publisher report or a clearly written hand-scored protocol with summary score sheets, labelled parent or teacher, with the respondent\u2019s name and relationship. Measures other than the PDDBI may be authorized to the ABA provider without a separate diagnosing-provider referral, under CPT 97151 with modifier 99 and one unit per measure, but they must be requested through a treatment plan update \u2014 requests made outside that update are cancelled, and measures are not split between providers.',
        status: 'verified',
        cites: [{ title: 'TriWest \u2014 Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' }, { title: 'TRICARE \u2014 Understanding Outcome Measures for ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Outcome-Measures' }],
      },
      referral: {
        value:
          'Four conditions must be true before anything is authorized: the beneficiary is enrolled in a TRICARE health plan; a TRICARE-authorized ASD diagnosing provider has made a definitive ASD diagnosis; active duty family members are registered for the Extended Care Health Option; and the active duty sponsor is enrolled in their branch\u2019s Exceptional Family Member Program. TriWest may grant provisional 90-day ECHO eligibility while registration completes, but if proof of EFMP enrollment is not complete within 90 days the beneficiary is disenrolled from ECHO and loses ABA eligibility \u2014 capture where the family sits on that clock. Referrals last two years. Treatment then follows a clinical necessity review of goals, requested hours, location of services and outcome-measure scores; if changes are required the provider has 10 calendar days to submit a modified plan for a second review, and reauthorization may be filed up to 60 days ahead but no later than 30 days before expiry.',
        status: 'verified',
        cites: [{ title: 'TriWest \u2014 Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' }, { title: 'TRICARE West \u2014 Clinical Necessity Reviews', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Clinical-Necessity-Reviews' }, { title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }],
      },
      telehealth: {
        value:
          'The narrowest telehealth rule in this directory, and TriWest publishes it explicitly. Telehealth is POS 02, one code only \u2014 97156 \u2014 and only after the first six-month treatment period, with a GT or 95 modifier. Audio-only is not allowed under the ACD at all. 97151, 97153, 97155, 97157 and 97158 may not be delivered remotely. Plan the first six months as fully in-person and treat remote parent training as an earned option rather than a starting assumption.',
        status: 'verified',
        cites: [{ title: 'TriWest \u2014 Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' }],
      },
      authTurnaround: {
        value:
          '“TriWest will complete reviews within five business days of receipt.” If TriWest asks for more documents and they are “not received within 10 calendar days, the request will be canceled until the information is received.” There is no fast lane: “There is no expedited review process, therefore, late submissions will not be reviewed and may cause a gap in authorization,” and “authorizations cannot be backdated.” Reauthorization for each six-month period is submitted through Availity as early as 60 calendar days and no later than 30 calendar days before the current authorization ends (the DHA rule: “as early as 60 calendar days in advance and no later than 30 calendar days in advance”).',
        status: 'verified',
        cites: [{ title: 'TriWest — TRICARE West Region Autism Care Demonstration Provider Guide', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' }, { title: 'TriWest — TRICARE West Region ACD Quick Reference Guide (rev. April 6, 2026)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/tricare-west-region-autism-care-demonstration-qrg.pdf' }, { title: 'TRICARE Operations Manual 6010.62-M (2021 ed.), Ch. 18 Sec. 3 — Autism Care Demonstration (Change 11, Jul 24, 2024)', url: 'https://manuals.health.mil/pages/DisplayManualHtmlFile/2024-08-06/AsOf/tot5/c18s3.html' }],
      },
      coordinationOfBenefits: {
        value:
          '“For other beneficiary categories, TRICARE pays secondary to Medicare and other primary coverage. If TRICARE is the secondary payer, the provider is required to submit claims to the primary payer before billing TRICARE” (TRICARE is always primary for active-duty service members, and it pays before Medicaid, TRICARE supplements, IHS and state victims-of-crime programs). “If TRICARE receives claim before OHI processes it, the claim will be denied,” as will one without the other payer’s EOB or COB payment data; file with TRICARE within 90 calendar days of the OHI adjudication date. ABA is on TriWest’s list of services that “require a TRICARE pre-authorization regardless of OHI” — “Prior approval is needed for ABA services for all beneficiaries, even if they have other health insurance.” TRICARE will not pay what the other plan denied for failure to meet its requirements.',
        status: 'verified',
        cites: [{ title: 'TriWest — TRICARE Provider Handbook: Claims Processing and Billing Information', url: 'https://tricare.triwest.com/en/provider/tricare-provider-handbook/claims-processing-and-billing-information/' }, { title: 'TriWest — TRICARE West Region Autism Care Demonstration Provider Guide', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' }, { title: 'eCFR — 32 CFR 199.8, Double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' }],
      },
    },
    faq: [
      { q: 'Who administers TRICARE West now?', a: 'TriWest Healthcare Alliance, under contracts that began Jan. 1, 2025. Six states — Arkansas, Illinois, Louisiana, Oklahoma, Texas and Wisconsin — moved from the East Region to the West on that date. TRICARE resolves the boundary by ZIP code lookup.' },
      { q: 'Can ABA be delivered in a school in the West Region?', a: 'Yes, but narrowly. Only the authorized ABA supervisor may deliver, under CPT 97153, with a current IEP submitted alongside the treatment plan, specific school-setting goals targeting core ASD symptoms, a short expected duration and a planned fade. Providers may not duplicate IEP services or target academic goals.' },
      { q: 'What is the 97155 monthly rule?', a: 'At least one 97155 session per month must be performed by the authorized ABA supervisor and cannot be delegated to an assistant behavior analyst. If that is not met, TriWest applies a 10% penalty to all ABA claims for that beneficiary for the entire six-month authorization period.' },
      { q: 'How far ahead can a reauthorization be filed?', a: 'Up to 60 calendar days before the current authorization ends, and no later than 30 days before it expires. Submissions inside 30 days risk a gap in care.' },
      { q: 'How long is an ACD referral good for?', a: 'Two years, regardless of a move. TriWest accepts a new referral within six months of expiry, and a new DSM-5-TR ASD criteria checklist is required at each renewal — completed by an approved TRICARE diagnosing provider, not by the ABA provider.' },
      { q: 'Do West Region families get an Autism Services Navigator?', a: 'Yes — every ACD participant in the West is assigned one. Navigators coordinate care, build the comprehensive care plan and carry documents through a PCS move, but they do not review treatment plans for clinical necessity or decide coverage. USFHP members and overseas beneficiaries do not get one.' },
    ],
    deliveryRules: {
      supervision: {
        value: 'Authorized ABA supervisors are BCBAs, BCBA-Ds, licensed behavior analysts or clinical psychologists. In the tiered model they are assisted by BCaBAs, QASP-S, licensed assistant behavior analysts and behavior technicians (RBT, ABAT, BCAT or state-certified). All must hold the licences or certifications their state requires. The hard floor: the ABA supervisor must personally perform at least one 97155 session per month per beneficiary and may not delegate it, on pain of a 10% penalty on every ABA claim for that beneficiary for the whole six-month authorization. BACB-required supervision of technicians is not billable under the ACD; claims for supervision are denied or recouped.',
        status: 'verified',
        cites: [
          { title: 'TriWest — Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' },
        ],
      },
      concurrentBilling: {
        value: '97153 with 97155 concurrently: the higher rate is paid and the other denied. 97153 with 97156 is allowed when one provider works directly with the beneficiary while a different supervisor or assistant runs parent training without the beneficiary present. 97155 with 97156 is allowed on the same pattern. 97151 with 97153 or 97156 is allowed when a supervisor or assistant performs an assessment task while another provider delivers treatment — the beneficiary may be present for only one. 97157 with 97158 is allowed when an assistant leads the parent group while the supervisor runs the beneficiary group.',
        status: 'verified',
        cites: [
          { title: 'TriWest — Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' },
        ],
      },
      dailyLimits: {
        value: '97153: no more than 32 units (8 hours) per day or 160 units (40 hours) per week. 97155: no more than 8 units per day. 97156: no more than 8 units per day. 97157 and 97158: no more than 6 units per day, maximum 8 participants per group. 97151: 32 units for the initial assessment and 24 units per reassessment period, plus one unit per outcome measure under a separate authorization with modifier 99. 99366/99368: one unit per six-month treatment authorization.',
        status: 'verified',
        cites: [
          { title: 'TriWest — Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' },
        ],
      },
      noteSignature: {
        value: 'Progress notes must carry the complete name and licence or certification of the rendering ABA supervisor, assistant behavior analyst or behavior technician, with a dated signature — and, where the supervisor is not the rendering provider, the supervisor’s full name as well. The note must name the place of service in words (GPS coordinates or an address do not satisfy it) and, where several services happen at one location, describe where each took place and who was present. Missing signatures, missing credentials, missing location and missing clinical status are TriWest’s named audit failures.',
        status: 'verified',
        cites: [
          { title: 'TriWest — Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' },
        ],
      },
      placeOfService: {
        value: 'Home POS 12 and clinic/office POS 11 for all authorized provider types (clinic travel is not reimbursable). School POS 03: supervisor-only, CPT 97153, IEP required, short-term, no duplication of IEP services, homeschool ABA outside homeschooling hours. Daycare (non-preschool) POS 99: only where therapy actively addresses core ASD symptoms and the plan justifies why home or center will not work; the provider may not act as an aide or observer. Community POS 99: preauthorization required; medical appointments, sports participation, camps, daily-living and job-skills settings and vehicle travel are excluded. Telehealth POS 02: 97156 only, after the first six-month period, GT or 95 modifier, no audio-only. Educational, academic and vocational goals are excluded in every setting.',
        status: 'verified',
        cites: [
          { title: 'TriWest — Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' },
        ],
      },
      billAsProvider: {
        value: 'The rendering provider on each line is the ABA supervisor, assistant behavior analyst or behavior technician who actually delivered the service. Assistant behavior analysts and behavior technicians are not independent providers under TRICARE policy: they cannot be listed as the billing provider and cannot bill for any ABA service, and are compensated by their authorized ABA supervisors.',
        status: 'verified',
        cites: [
          { title: 'TriWest — Autism Care Demonstration Provider Guide (PDF)', url: 'https://tricare.triwest.com/globalassets/tricare/provider/autism-care-demostration-provider-guide.pdf' },
        ],
      },
    },
  },

  'champva': {
    slug: 'champva',
    payer: 'CHAMPVA',
    state: 'US', kind: 'commercial',
    cardDesc: 'A VA program, not TRICARE. ABA is covered, treatment needs pre-authorization, and the family pays 25% after deductible.',
    assessmentPA: {
      value: 'Not required — the CHAMPVA Guidebook requires pre-authorization for ABA treatment only, "not the evaluation"',
      status: 'verified',
      cites: [
        { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — ABA treatment is on CHAMPVA’s pre-authorization list; request it through CHAMPVA before treatment starts',
      status: 'verified',
      cites: [
        { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
      ],
    },
    dxRequired: {
      value: 'Not published — the Guidebook lists ABA as a covered benefit but does not publish diagnosis criteria; confirm what documentation CHAMPVA wants when you request pre-authorization',
      status: 'unverified',
      verifyVia: 'The CHAMPVA Operational Policy Manual (behavioral health chapter) at vha.cc.va.gov — a JavaScript portal that returns an empty shell to automated retrieval; the Jan. 1, 2025 Guidebook, which is fetchable, states no diagnosis criteria for ABA. Human retrieval via carelu.com/sources; interim answer from CHAMPVA on 800-733-8387 or VHAHAC.preauthorizationFM@va.gov.',
      blocker: 'document',
    },
    pill: 'Payer Guide · CHAMPVA',
    h1: 'CHAMPVA and ABA: what is actually published.',
    metaTitle: 'CHAMPVA ABA Coverage & Pre-Authorization: Intake Guide | Carelu',
    metaDescription:
      'CHAMPVA is a VA program, not TRICARE. What the CHAMPVA Guidebook actually says about ABA: pre-authorization for treatment only, 25% cost-share after a $50/$100 deductible, the $3,000 catastrophic cap, and what intake must verify directly.',
    intro: [
      'CHAMPVA is the Civilian Health and Medical Program of the Department of Veterans Affairs. It is not TRICARE, it is not administered by a TRICARE regional contractor, and none of the Autism Care Demonstration machinery applies to it. The VA says so directly: "CHAMPVA is a VA program, while TRICARE is a regionally managed health care program for active duty and retired members of the uniformed services." The two are mutually exclusive — if you are eligible for or enrolled in TRICARE, you cannot get CHAMPVA benefits.',
      'This is a deliberately short page, because CHAMPVA publishes deliberately little. The Guidebook confirms that applied behavior analysis is a covered benefit, that treatment requires pre-authorization while the evaluation does not, and what the family pays. It does not publish an ABA clinical policy, a diagnosis standard, an authorization interval, a provider-qualification tier or a place-of-service rule. Writing those in from TRICARE would be wrong, so this guide tells you what is verified and where to call for the rest.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — listed as a covered benefit in the CHAMPVA Guidebook' },
      { label: 'Program type', value: 'VA cost-sharing program, not TRICARE and not an insurance network' },
      { label: 'Pre-authorization', value: 'Required for ABA treatment only — "not the evaluation"' },
      { label: 'Cost-share (CHAMPVA primary)', value: 'CHAMPVA pays 75% of the allowable amount; the patient pays the deductible plus a 25% cost-share' },
      { label: 'Deductible', value: '$50 per individual, $100 per family, per calendar year' },
      { label: 'Catastrophic cap', value: '$3,000 per year, then CHAMPVA pays in full' },
      { label: 'CHAMPVA secondary', value: 'Patient pays nothing in most cases; CHAMPVA pays up to 100% of the allowable amount' },
      { label: 'Network', value: 'None — "we do not have a network of health care providers, so you can visit most authorized providers"' },
    ],
    sections: [
      {
        h2: 'Who CHAMPVA covers — and who it cannot',
        cites: [
          { title: 'VA — CHAMPVA', url: 'https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        body: [
          'CHAMPVA covers the spouse or dependent child of a veteran rated permanently and totally disabled from a service-connected disability; the surviving spouse or child of a veteran who died from a service-connected disability; and the surviving spouse or child of a veteran who was rated permanently and totally disabled from a service-connected disability at the time of death. Dependent children can remain eligible from 18 to 23 while enrolled in school, and a child who is permanently unable to support themselves because of a disability that began before age 18 can remain eligible. Surviving spouses who remarry at age 55 or older keep the benefit.',
          'The exclusion matters for triage: a person eligible for or enrolled in TRICARE cannot get CHAMPVA. The VA is explicit that a military retiree, or the spouse of a veteran killed in action, is and may always be a TRICARE beneficiary and cannot choose between the programs. If a family arrives holding both stories, sort that out before you build a case around the wrong program’s rules.',
        ],
      },
      {
        h2: 'What the Guidebook says about ABA',
        cites: [
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        body: [
          'ABA appears twice in the current Guidebook, updated Jan. 1, 2025. It is listed among the services that require pre-authorization, as "Applied behavior analysis (ABA) for treatment only (not the evaluation)." And it has its own line in the Behavioral Health Services benefit table — "Autism – Applied Behavioral Analysis (ABA) requires pre-authorization for treatment only (not evaluation)" — with the cost-share shown alongside.',
          'That split is the operationally useful fact. The diagnostic evaluation does not need to be pre-authorized, so a family can be evaluated without waiting on CHAMPVA. Treatment does, and CHAMPVA takes pre-authorization requests directly: by phone on 800-733-8387, by email to VHAHAC.preauthorizationFM@va.gov, or by mail to VHA Office of Integrated Veteran Care, CHAMPVA Beneficiary Claims, P.O. Box 500, Spring City, PA 19475.',
          'Two exceptions to the pre-authorization requirement are published. Services listed as requiring pre-authorization do not require it when provided through CITI, the CHAMPVA In-house Treatment Initiative at a VA medical center — and CITI services are also exempt from beneficiary cost sharing. And where other health insurance has already authorized the service, CHAMPVA does not require its own pre-authorization; but if that other insurer denies for failure to follow its rules or for lack of medical necessity, CHAMPVA will deny as well.',
        ],
      },
      {
        h2: 'What the family pays',
        cites: [
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        body: [
          'Where CHAMPVA is the primary payer, ABA carries the standard outpatient split: the patient pays the annual deductible of $50 per individual or $100 per family, then a 25% cost-share, and CHAMPVA pays 75% of the allowable amount. Yearly catastrophic cap protection limits beneficiary cost sharing to $3,000 annually, after which CHAMPVA covers 100% of allowable costs for the rest of the year.',
          'Where CHAMPVA is secondary or tertiary — which is common, because CHAMPVA is a payer of last resort behind most other coverage — the Guidebook states the patient pays nothing in most cases and CHAMPVA pays up to 100% of the allowable amount. Intake should therefore always capture other coverage first: with a commercial plan in front, the CHAMPVA question is usually about the residual, not the whole episode. And note the Guidebook’s own caveat: services listed as a covered benefit do not guarantee payment, because there may be specific coverage guidelines behind the line item.',
        ],
      },
      {
        h2: 'What CHAMPVA does not publish — and what to ask',
        cites: [
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
          { title: 'VA — CHAMPVA', url: 'https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/' },
        ],
        body: [
          'The honest inventory of gaps: the Guidebook does not state an ASD diagnosis requirement or a recency rule; it does not name required assessment instruments or outcome measures; it does not state how long an ABA authorization runs or what a reauthorization requires; it does not define who may render or supervise ABA, or set a supervision ratio; it does not publish per-day unit limits, concurrent-billing rules or a place-of-service policy; and it does not publish an ABA-specific medical-necessity policy. Detailed operating rules live in the CHAMPVA Operational Policy Manual rather than the Guidebook.',
          'So the pre-authorization call is also your policy call. Ask, and get it in writing: what diagnosis documentation they want and how recent; what the authorization period is and what a renewal needs; which provider credentials they will recognise for the rendering and supervising roles; whether any settings are excluded; and whether the family has other health insurance that would change the pre-authorization posture entirely. Do not assume TRICARE’s answers apply — different department, different statute, different rules.',
        ],
      },
    ],
    collect: [
      { title: 'CHAMPVA vs. TRICARE, settled', desc: 'Confirm the family is not eligible for or enrolled in TRICARE. The two are mutually exclusive, and a retiree or a spouse of a veteran killed in action is a TRICARE beneficiary.' },
      { title: 'Other health insurance', desc: 'CHAMPVA behaves very differently as secondary payer — patient generally pays nothing — and an OHI authorization can remove the CHAMPVA pre-authorization requirement. Capture the primary plan first.' },
      { title: 'Beneficiary category and the child’s age', desc: 'Which eligibility route the family qualifies under, and for a dependent child whether they are under 18, 18–23 in school, or permanently incapable of self-support since before 18.' },
      { title: 'Evaluation on hand', desc: 'The evaluation does not require pre-authorization, so there is no reason to wait. Capture the diagnosing provider and the report date, and expect to send them with the treatment request.' },
      { title: 'Pre-authorization confirmation in writing', desc: 'Phone, email or mail the request, and record the reference and the stated authorization period, credential expectations and setting limits — none of that is published.' },
    ],
    sources: [
      { title: 'VA — CHAMPVA', url: 'https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/' },
      { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
    ],
    deliveryRules: {
      concurrentBilling: {
        value:
          'Not published. The CHAMPVA Guidebook lists ABA as a covered benefit with pre-authorization for treatment only, and says nothing about billing two ABA codes for the same clock time. Do not import TRICARE\u2019s ACD concurrent-billing matrix \u2014 CHAMPVA is a VA program under a different statute, and the two are mutually exclusive for any given beneficiary.',
        status: 'unverified',
        cites: [{ title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' }],
        verifyVia: 'CHAMPVA customer service and pre-authorization line, 800-733-8387, or VHAHAC.preauthorizationFM@va.gov; detailed operating rules live in the CHAMPVA Operational Policy Manual rather than the Guidebook. Ask when you request pre-authorization and get the answer in writing.',
        blocker: 'document',
      },
      dailyLimits: {
        value:
          'Not published. No per-day unit ceiling, MUE table or hour band for ABA appears in the Guidebook. What is published is the money: CHAMPVA pays 75 percent of the allowable amount as primary, the patient pays a $50 individual / $100 family annual deductible plus a 25 percent cost-share, and beneficiary cost sharing is capped at $3,000 a year, after which CHAMPVA pays 100 percent of allowable costs for the rest of the year.',
        status: 'unverified',
        cites: [{ title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' }],
        verifyVia: 'CHAMPVA customer service and pre-authorization line, 800-733-8387, or VHAHAC.preauthorizationFM@va.gov; detailed operating rules live in the CHAMPVA Operational Policy Manual rather than the Guidebook. Ask when you request pre-authorization and get the answer in writing.',
        blocker: 'document',
      },
      noteSignature: {
        value:
          'Not published. The Guidebook states no session-note content or signature standard for ABA. With nothing published, the pre-authorization decision and your own contemporaneous record of the call are the operative documentation guidance.',
        status: 'unverified',
        cites: [{ title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' }],
        verifyVia: 'CHAMPVA customer service and pre-authorization line, 800-733-8387, or VHAHAC.preauthorizationFM@va.gov; detailed operating rules live in the CHAMPVA Operational Policy Manual rather than the Guidebook. Ask when you request pre-authorization and get the answer in writing.',
        blocker: 'document',
      },
      billAsProvider: {
        value:
          'Not published. The Guidebook does not define who may render or supervise ABA, nor whose NPI a technician-delivered claim must carry. One structural fact does bear on it: CHAMPVA \u201cdoes not have a network of health care providers, so you can visit most authorized providers\u201d \u2014 so the gate is pre-authorization and provider authorization, not network status.',
        status: 'unverified',
        cites: [{ title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' }, { title: 'VA \u2014 CHAMPVA', url: 'https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/' }],
        verifyVia: 'CHAMPVA customer service and pre-authorization line, 800-733-8387, or VHAHAC.preauthorizationFM@va.gov; detailed operating rules live in the CHAMPVA Operational Policy Manual rather than the Guidebook. Ask when you request pre-authorization and get the answer in writing.',
        blocker: 'document',
      },
      supervision: {
        value: 'CHAMPVA does not publish supervision requirements, provider tiers or supervision ratios for ABA in the Guidebook. Do not assume TRICARE’s ACD tiers apply — CHAMPVA is a separate VA program.',
        status: 'unverified',
        cites: [
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        verifyVia: 'CHAMPVA customer service and pre-authorization line, 800-733-8387, or VHAHAC.preauthorizationFM@va.gov; detailed rules live in the CHAMPVA Operational Policy Manual rather than the Guidebook',
        blocker: 'document',
      },
      placeOfService: {
        value: 'No place-of-service policy for ABA is published in the Guidebook. The one setting rule that is published is CITI: services delivered in a VA medical center under the CHAMPVA In-house Treatment Initiative are exempt from pre-authorization and from beneficiary cost sharing.',
        status: 'unverified',
        cites: [
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        verifyVia: 'Confirm allowable settings in the pre-authorization decision before scheduling home, school or community sessions; CHAMPVA 800-733-8387',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'No ABA-specific age limit is published; what bounds the case is dependent eligibility. A dependent child can remain eligible from 18 to 23 while enrolled in school, and a child who is permanently unable to support themselves because of a disability that began before age 18 can remain eligible beyond that. Eligibility runs to the spouse or dependent child of a veteran rated permanently and totally disabled from a service-connected disability, and to the surviving spouse or child of a veteran who died from \u2014 or was rated permanently and totally disabled from \u2014 a service-connected disability.',
        status: 'verified',
        cites: [{ title: 'VA \u2014 CHAMPVA', url: 'https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/' }, { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' }],
      },
      dxRecency: {
        value:
          'Not published. The Guidebook states no ASD diagnosis requirement and no recency rule for the diagnostic evaluation. Capture the evaluation date and the diagnosing provider anyway and expect to send them with the treatment request \u2014 the evaluation itself does not need pre-authorization, so there is no reason to wait on CHAMPVA before getting one.',
        status: 'unverified',
        cites: [{ title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' }],
        verifyVia: 'CHAMPVA customer service and pre-authorization line, 800-733-8387, or VHAHAC.preauthorizationFM@va.gov; detailed operating rules live in the CHAMPVA Operational Policy Manual rather than the Guidebook. Ask when you request pre-authorization and get the answer in writing.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value:
          'Not published. The Guidebook does not state who may make the ASD diagnosis for ABA purposes. Do not apply TRICARE\u2019s closed ACD diagnosing-provider list here \u2014 different department, different statute, different rules \u2014 and ask CHAMPVA which credentials it will recognise for the diagnosing, rendering and supervising roles on the same call as the pre-authorization.',
        status: 'unverified',
        cites: [{ title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' }, { title: 'VA \u2014 CHAMPVA', url: 'https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/' }],
        verifyVia: 'CHAMPVA customer service and pre-authorization line, 800-733-8387, or VHAHAC.preauthorizationFM@va.gov; detailed operating rules live in the CHAMPVA Operational Policy Manual rather than the Guidebook. Ask when you request pre-authorization and get the answer in writing.',
        blocker: 'document',
      },
      diagnosticTools: {
        value:
          'Not published. The Guidebook names no required assessment instruments and no outcome measures for ABA. None of the ACD\u2019s four-measure regime applies.',
        status: 'unverified',
        cites: [{ title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' }],
        verifyVia: 'CHAMPVA customer service and pre-authorization line, 800-733-8387, or VHAHAC.preauthorizationFM@va.gov; detailed operating rules live in the CHAMPVA Operational Policy Manual rather than the Guidebook. Ask when you request pre-authorization and get the answer in writing.',
        blocker: 'document',
      },
      referral: {
        value:
          'The split is the operationally useful fact, and it is published twice. ABA appears among the services requiring pre-authorization as \u201cApplied behavior analysis (ABA) for treatment only (not the evaluation),\u201d and again in the Behavioral Health Services benefit table as \u201cAutism \u2013 Applied Behavioral Analysis (ABA) requires pre-authorization for treatment only (not evaluation).\u201d So a family can be evaluated without waiting on CHAMPVA. Treatment requests go directly to CHAMPVA by phone on 800-733-8387, by email to VHAHAC.preauthorizationFM@va.gov, or by mail to the VHA Office of Integrated Veteran Care. Two published exceptions remove the requirement entirely: services provided through CITI, the CHAMPVA In-house Treatment Initiative at a VA medical center (also exempt from beneficiary cost sharing), and services another health insurer has already authorized \u2014 though if that insurer denies for failure to follow its rules or for lack of medical necessity, CHAMPVA will deny as well.',
        status: 'verified',
        cites: [{ title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' }],
      },
      telehealth: {
        value:
          'Not published for ABA. The Guidebook states no telehealth policy, code list or modifier requirement for applied behavior analysis.',
        status: 'unverified',
        cites: [{ title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' }],
        verifyVia: 'CHAMPVA customer service and pre-authorization line, 800-733-8387, or VHAHAC.preauthorizationFM@va.gov; detailed operating rules live in the CHAMPVA Operational Policy Manual rather than the Guidebook. Ask when you request pre-authorization and get the answer in writing.',
        blocker: 'document',
      },
      authTurnaround: {
        value:
          'CHAMPVA requires pre-authorization for “Applied behavior analysis (ABA) for treatment only (not the evaluation),” requested by phone, email or mail to the pre-authorization unit. Neither the CHAMPVA Guidebook nor the CHAMPVA regulation (38 CFR 17.273) states how long VA has to decide an ABA request, and no reauthorization lead time is published. One exception removes the clock entirely: when the child’s other insurance is primary and has authorized the service, CHAMPVA does not require its own pre-authorization.',
        status: 'unverified',
        cites: [{ title: 'VA — CHAMPVA Guidebook (March 2026 posting)', url: 'https://www.va.gov/files/2026-03/CHAMPVA-Guidebook_3-2026.pdf' }, { title: 'eCFR — 38 CFR 17.273, Preauthorization', url: 'https://www.ecfr.gov/current/title-38/chapter-I/part-17/subject-group-ECFRd3f6f5d27d7b5ae/section-17.273' }],
        verifyVia: 'The CHAMPVA Operational Policy Manual, Chapter 2 (Benefits), Section 18 Mental Health — ABA article on vha.cc.va.gov, or the CHAMPVA pre-authorization line (833-930-0816) — ask the decision turnaround and how far ahead to submit each renewal.',
        blocker: 'document',
      },
      coordinationOfBenefits: {
        value:
          'CHAMPVA pays last: “CHAMPVA only pays first if you have one of four types of these other health insurance …: Medicaid; Indian Health Services; State Victims of Crime Compensation Program; CHAMPVA supplemental health insurance. If you have any other type of other health insurance, CHAMPVA will pay secondary.” File with the other plan first, then send CHAMPVA the claim with the other plan’s EOB and the provider’s itemized bill — “CHAMPVA benefits will generally not be paid until the claim has been filed with the OHI and the OHI has issued a final payment determination.” The practical upside: “When other health insurance has authorized a service listed under ‘Services that require pre-authorization’ … we do not require pre-authorization for that service.” The catch: “If other health insurance denies coverage because their rules for coverage were not followed or medical necessity was not established, we will also deny coverage.”',
        status: 'verified',
        cites: [{ title: 'VA — CHAMPVA Guidebook (March 2026 posting)', url: 'https://www.va.gov/files/2026-03/CHAMPVA-Guidebook_3-2026.pdf' }, { title: 'eCFR — 38 CFR 17.276, Claim filing deadline (§17.276(d): CHAMPVA is the last payer to OHI)', url: 'https://www.ecfr.gov/current/title-38/chapter-I/part-17/section-17.276' }],
      },
    },
    faq: [
      { q: 'Does CHAMPVA cover ABA therapy?', a: 'Yes. Applied behavior analysis appears in the CHAMPVA Guidebook as a covered behavioral health benefit, with pre-authorization required for treatment only, not for the evaluation.' },
      { q: 'Is CHAMPVA the same as TRICARE?', a: 'No. CHAMPVA is a VA program and TRICARE is the Department of Defense program. They are mutually exclusive: a person eligible for or enrolled in TRICARE cannot receive CHAMPVA benefits. None of the TRICARE Autism Care Demonstration rules apply to CHAMPVA.' },
      { q: 'What does a CHAMPVA family pay for ABA?', a: 'When CHAMPVA is the primary payer, the annual deductible of $50 per individual or $100 per family, then a 25% cost-share, with CHAMPVA paying 75% of the allowable amount. Beneficiary cost sharing is capped at $3,000 a year. When CHAMPVA is secondary or tertiary, the patient pays nothing in most cases.' },
      { q: 'Does CHAMPVA have a provider network?', a: 'No. The VA states that CHAMPVA does not have a network of health care providers and beneficiaries can visit most authorized providers. Pre-authorization, not network status, is the gate for ABA treatment.' },
      { q: 'How long does a CHAMPVA ABA authorization last?', a: 'CHAMPVA does not publish an authorization interval for ABA in the Guidebook. Ask when you request pre-authorization on 800-733-8387 and get the period, the renewal requirements and any credential or setting limits in writing.' },
    ],
  },

  'johns-hopkins-usfhp': {
    slug: 'johns-hopkins-usfhp',
    payer: 'Johns Hopkins US Family Health Plan',
    state: 'MD', kind: 'commercial', family: 'tricare',
    cardDesc: 'A TRICARE Prime designated-provider plan that administers the ACD itself — Hopkins authorizes, not Humana Military.',
    assessmentPA: {
      value: 'Required — under the ACD, authorization is required for all ABA services including the initial assessment and treatment-plan development; the request goes to Johns Hopkins USFHP, not to a TRICARE regional contractor',
      status: 'verified',
      cites: [
        { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
        { title: 'TRICARE — Uniformed Services Family Health Plan', url: 'https://tricare.mil/Plans/HealthPlans/USFHP' },
      ],
    },
    treatmentPA: {
      value: 'Required — a six-month treatment authorization issued by the USFHP designated provider, with reauthorization every six months',
      status: 'verified',
      cites: [
        { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
        { title: 'TRICARE — Uniformed Services Family Health Plan', url: 'https://tricare.mil/Plans/HealthPlans/USFHP' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD diagnosis by an approved TRICARE ASD diagnosing provider, with a DSM-5 checklist and validated assessment tool, per ACD rules',
      status: 'verified',
      cites: [
        { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
        { title: 'TRICARE — Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' },
      ],
    },
    pill: 'Payer Guide · Johns Hopkins US Family Health Plan',
    h1: 'Johns Hopkins USFHP ABA coverage under the ACD.',
    metaTitle: 'Johns Hopkins US Family Health Plan ABA Coverage (TRICARE USFHP) | Carelu',
    metaDescription:
      'Johns Hopkins US Family Health Plan is a TRICARE Prime designated-provider plan covering MD, DC and parts of PA, DE, VA and WV. How ABA works under the Autism Care Demonstration when the plan, not Humana Military, holds the authorization.',
    intro: [
      'The Uniformed Services Family Health Plan is a TRICARE Prime option administered by participating nonprofit health systems in six service areas. Johns Hopkins runs the Mid-Atlantic one. For intake this matters more than it sounds: a USFHP member holds a TRICARE Prime benefit, but the plan — not Humana Military — is the entity that receives the ABA referral, issues the authorization and pays the claim. USFHP members cannot use TRICARE network providers and cannot get care at military hospitals and clinics.',
      'The clinical rules are still the Autism Care Demonstration’s. DHA directs the ABA referral to "your regional contractor or US Family Health Plan provider," and the ACD requirements — the approved diagnosing-provider list, the DSM-5 checklist, the four outcome measures, the six-month authorization cycle and the two-year referral renewal — apply the same way. Johns Hopkins requires its ABA providers to attest that they have completed its ACD-ABA training and understand the ACD requirements, billing, authorizations, exclusions and documentation standards.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'TRICARE Prime designated-provider option (USFHP), run by Johns Hopkins Health Plans' },
      { label: 'Service area', value: 'Maryland, Washington DC, and parts of Pennsylvania, Delaware, Virginia and West Virginia' },
      { label: 'Covers ABA?', value: 'Yes — under the Autism Care Demonstration, authorized by the plan rather than by a regional contractor' },
      { label: 'Prior auth', value: 'Required for all ABA services including the initial assessment' },
      { label: 'Auth increments', value: '6 months; new referral and DSM-5 checklist every 2 years' },
      { label: 'Outcome measures', value: 'PDDBI, Vineland-3, SRS-2 and PSI-4-SF or SIPA, on the standard ACD cadence' },
      { label: 'Costs', value: 'Same out-of-pocket costs as TRICARE Prime; ABA is outpatient specialty care with one copay per day' },
      { label: 'Autism Services Navigator', value: 'Not provided — USFHP members do not get an ASN' },
      { label: 'Network', value: 'Hopkins USFHP network only; TRICARE network providers and military treatment facilities are not available' },
    ],
    sections: [
      {
        h2: 'What a USFHP card actually means',
        cites: [
          { title: 'TRICARE — Uniformed Services Family Health Plan', url: 'https://tricare.mil/Plans/HealthPlans/USFHP' },
          { title: 'Johns Hopkins US Family Health Plan', url: 'https://www.hopkinsusfhp.org/' },
        ],
        body: [
          'DHA describes USFHP as "a TRICARE Prime option administered by participating nonprofit plans in six service areas in the U.S." Members get most care through a primary care provider in the plan’s own network, and out-of-pocket costs are the same as TRICARE Prime. Two hard limits shape referrals: USFHP members cannot get care at military hospitals and clinics except for emergency care, and cannot use TRICARE network providers. Being TRICARE-certified is not enough to see a Hopkins USFHP member — the ABA provider has to be in the Hopkins USFHP network.',
          'Eligibility runs to active duty family members, retired service members and their families, families of activated Guard and Reserve members, non-activated Guard and Reserve members and families qualifying under TAMP, retired Guard and Reserve members aged 60 and older and their families, survivors, Medal of Honor recipients and their families, and qualified former spouses — all living in a USFHP service area. USFHP can also be chosen as a TRICARE Young Adult option.',
          'On the service area, there is a small discrepancy worth knowing about. Johns Hopkins’ own site describes coverage across "MD, DE, DC, and parts of PA, VA, and WV," while TRICARE’s USFHP listing gives it as Maryland, Washington DC, and parts of Pennsylvania, Delaware, Virginia and West Virginia — putting Delaware among the partial states. Either way, the plan settles it by ZIP code through its own service-area tool, and that is what intake should use.',
        ],
      },
      {
        h2: 'ABA runs on ACD rules — with the plan holding the pen',
        cites: [
          { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
          { title: 'Johns Hopkins Health Plans — USFHP Applied Behavioral Analysis Training', url: 'https://www.hopkinsmedicine.org/johns-hopkins-health-plans/providers-physicians/resources-guidelines/provider-education/aba-training' },
          { title: 'TRICARE — Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' },
        ],
        body: [
          'DHA’s own description of the path names USFHP explicitly: the child’s diagnosing provider "will submit a referral to your regional contractor or US Family Health Plan provider for authorization," and the family then receives an authorization letter for six months of ABA services. The first authorization covers the ABA assessment; the provider completes the assessment and treatment plan; a six-month treatment authorization follows; and reauthorization is requested every six months. A new referral from the ASD diagnosing provider is required every two years.',
          'The eligibility and diagnosis gates are the ACD’s. The diagnosis must come from an approved diagnosing provider — family practice physicians, pediatricians and pediatric or family nurse practitioners on the primary-care side; developmental-behavioral pediatrics, neurodevelopmental pediatrics, pediatric neurology, adult or child psychiatry, doctoral-level licensed clinical psychologists and qualifying DNPs on the specialist side. A first diagnosis at age 8 or later must come from a specialized ASD diagnosing provider, and a diagnosis more than two years old requires an updated diagnostic assessment. Active duty family members must register in ECHO.',
          'Johns Hopkins layers its own provider-side requirement on top: ABA providers must attest that they have completed the required ACD-ABA training course and that they understand the ACD provider requirements, "correct billing practices/claims filing, authorizations, exclusions, and medical records documentation for the ACD-ABA program." If your clinic is onboarding with Hopkins USFHP, that attestation is a prerequisite, not a formality.',
        ],
      },
      {
        h2: 'Outcome measures and the six-month rhythm',
        cites: [
          { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
          { title: 'TRICARE — Understanding Outcome Measures for ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Outcome-Measures' },
        ],
        body: [
          'Four baseline outcome measures must be completed by the family and the provider team before ABA services can begin: the PDDBI, the Vineland Adaptive Behavior Scales, the Social Responsiveness Scale, and either the Parent Stress Index or the Stress Index for Parents of Adolescents. After baseline, the cadence is mixed — DHA states the four measures must be completed "every six months or every 12 months," with the PDDBI and the PSI-4-SF or SIPA on the six-month cycle, and the Vineland-3 and SRS-2 annually. The ABA provider completes the PDDBI teacher form, and the SRS-2 interview or teacher form annually.',
          'This is the operational core of the ACD and it does not soften because a nonprofit health system rather than a defense contractor is holding the file. Build the measure calendar at intake: baseline before the first treatment authorization, the six-month package before each reauthorization, the annual additions on schedule, and the two-year referral renewal booked with the diagnosing provider well in advance.',
          'One USFHP-specific difference to set expectations on: DHA states that families enrolled in USFHP do not get an Autism Services Navigator. In the regional contractor model the ASN is the family’s coordinator and the person who chases a stuck outcome measure. Under USFHP that coordination falls to the plan and to the ABA provider, which in practice means your team owns the deadlines.',
        ],
      },
      {
        h2: 'Settings, costs and what to confirm with the plan',
        cites: [
          { title: 'TRICARE — Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' },
          { title: 'TRICARE — Uniformed Services Family Health Plan', url: 'https://tricare.mil/Plans/HealthPlans/USFHP' },
          { title: 'TRICARE — Compare Health Plan Costs', url: 'https://tricare.mil/Costs/Compare' },
        ],
        body: [
          'The DHA-level setting rules apply: ABA rendered by a behavior technician in a school setting is not covered, while a BCBA may be authorized for a clinically necessary, focused and time-limited goal after clinical necessity review and with the contractor approving the goals. Community settings require checking with the plan first, and families are generally expected to generalize mastered skills themselves. Because USFHP plans administer the ACD under their own designated-provider arrangement, get the plan’s answer on school and community delivery in writing before you schedule the session — not after.',
          'Costs are TRICARE Prime costs: USFHP "has the same out-of-pocket costs as TRICARE Prime," ABA is billed as outpatient specialty care, and one copayment covers all ABA services received on a single day. As currently published, active duty family members pay $0 for network specialty care under Prime, and retirees and all others pay $39. There are no annual or lifetime dollar caps on ABA, and what the family pays counts toward the TRICARE catastrophic cap.',
          'Where this guide stops: Johns Hopkins publishes an ACD-ABA provider presentation and a USFHP provider manual, but both are served behind bot protection and could not be retrieved for this review, so the plan-specific supervision, unit-limit, concurrent-billing and documentation rules are not restated here. Ask Johns Hopkins USFHP provider relations for the current ACD-ABA training deck and provider manual, and confirm anything operational against those rather than against another region’s contractor guidance.',
        ],
      },
    ],
    collect: [
      { title: 'Confirm it is USFHP, not regional TRICARE', desc: 'A Prime card that says US Family Health Plan routes to Johns Hopkins, not to Humana Military. Sending the referral to the wrong place is the most common first-week loss on these cases.' },
      { title: 'ZIP against the plan service area', desc: 'MD and DC plus parts of PA, DE, VA and WV — the boundary is set by ZIP and the plan publishes a ZIP lookup. Do not assume a whole state.' },
      { title: 'Network status of your clinic', desc: 'USFHP members cannot use TRICARE network providers. TRICARE certification is not enough; you need to be in the Hopkins USFHP network, and your ABA staff need the ACD-ABA training attestation on file.' },
      { title: 'Referral packet and diagnosing provider', desc: 'Referral, DSM-5 checklist and validated assessment tool, plus the diagnosing provider’s specialty. First diagnosis at 8 or later needs a specialist; a diagnosis over two years old needs an updated evaluation.' },
      { title: 'EFMP and ECHO status for active duty families', desc: 'ECHO registration is a condition of ACD participation for active duty family members, and EFMP enrollment is the prerequisite for ECHO.' },
      { title: 'Outcome measure calendar', desc: 'Baseline PDDBI, Vineland-3, SRS-2 and PSI-4-SF or SIPA before the treatment authorization, then the six-month and annual packages. USFHP families have no Autism Services Navigator, so your team owns these dates.' },
    ],
    sources: [
      { title: 'TRICARE — Uniformed Services Family Health Plan', url: 'https://tricare.mil/Plans/HealthPlans/USFHP' },
      { title: 'Johns Hopkins US Family Health Plan', url: 'https://www.hopkinsusfhp.org/' },
      { title: 'Johns Hopkins USFHP — Service Area', url: 'https://www.hopkinsusfhp.org/plan/coverage/service-area/' },
      { title: 'Johns Hopkins Health Plans — USFHP Applied Behavioral Analysis Training', url: 'https://www.hopkinsmedicine.org/johns-hopkins-health-plans/providers-physicians/resources-guidelines/provider-education/aba-training' },
      { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
      { title: 'TRICARE — Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' },
      { title: 'TRICARE — Understanding Outcome Measures for ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Outcome-Measures' },
      { title: 'TRICARE — Compare Health Plan Costs', url: 'https://tricare.mil/Costs/Compare' },
    ],
    deliveryRules: {
      concurrentBilling: {
        value:
          'Johns Hopkins publishes an ACD-ABA provider presentation and a USFHP provider manual, but both are served behind bot protection and could not be retrieved for this review, so the plan\u2019s concurrent-billing rules are not restated here. The DHA-level framework applies \u2014 the ACD excludes concurrent billing for its Category I codes outside narrow documented exceptions \u2014 but the plan administers the demonstration itself, so confirm against its material rather than another contractor\u2019s.',
        status: 'unverified',
        cites: [{ title: 'Johns Hopkins Health Plans \u2014 USFHP Applied Behavioral Analysis Training', url: 'https://www.hopkinsmedicine.org/johns-hopkins-health-plans/providers-physicians/resources-guidelines/provider-education/aba-training' }, { title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }],
        verifyVia: 'Johns Hopkins USFHP provider relations \u2014 request the current ACD-ABA training deck and the USFHP provider manual; plan line 800-808-7347.',
        blocker: 'document',
      },
      dailyLimits: {
        value:
          'Not retrievable for this review. The per-day unit ceilings under the ACD live in TRICARE Operations Manual Ch. 18, Sec. 3 and in the authorization itself, and Johns Hopkins\u2019 own ABA provider material is served behind bot protection. Do not assume another region\u2019s published ceilings apply.',
        status: 'unverified',
        cites: [{ title: 'Johns Hopkins Health Plans \u2014 USFHP Applied Behavioral Analysis Training', url: 'https://www.hopkinsmedicine.org/johns-hopkins-health-plans/providers-physicians/resources-guidelines/provider-education/aba-training' }],
        verifyVia: 'The authorization letter itself, and Johns Hopkins USFHP provider relations on 800-808-7347 \u2014 ask for the current ACD-ABA training deck and provider manual.',
        blocker: 'document',
      },
      billAsProvider: {
        value:
          'Not published where it could be verified for this review. What is established is the network fact that precedes it: USFHP members cannot use TRICARE network providers, so TRICARE certification is not enough \u2014 the ABA provider must be in the Hopkins USFHP network, and Johns Hopkins requires its ABA providers to attest that they have completed its ACD-ABA training and understand the ACD provider requirements, \u201ccorrect billing practices/claims filing, authorizations, exclusions, and medical records documentation for the ACD-ABA program.\u201d',
        status: 'unverified',
        cites: [{ title: 'Johns Hopkins Health Plans \u2014 USFHP Applied Behavioral Analysis Training', url: 'https://www.hopkinsmedicine.org/johns-hopkins-health-plans/providers-physicians/resources-guidelines/provider-education/aba-training' }, { title: 'TRICARE \u2014 Uniformed Services Family Health Plan', url: 'https://tricare.mil/Plans/HealthPlans/USFHP' }],
        verifyVia: 'Johns Hopkins USFHP provider relations on 800-808-7347 \u2014 request the ACD-ABA training deck and provider manual, and confirm the rendering-versus-billing NPI convention before the first claim.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'DHA’s ACD rule applies to all TRICARE plans: ABA delivered by a behavior technician in a school setting is not covered. A BCBA may be authorized where the goal is clinically necessary, focused and time-limited, with pre-authorization and the contractor approving the goals. For community settings, families are generally expected to generalize mastered skills on their own; a BCBA may be authorized for certain community settings only after checking with the plan.',
        status: 'verified',
        cites: [
          { title: 'TRICARE — Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' },
        ],
      },
      supervision: {
        value: 'Johns Hopkins USFHP administers the ACD and requires its ABA providers to attest to completing its ACD-ABA training, but its plan-specific supervision requirements are published in provider material that could not be retrieved for this review. Do not apply another region’s contractor guidance in their place.',
        status: 'unverified',
        cites: [
          { title: 'Johns Hopkins Health Plans — USFHP Applied Behavioral Analysis Training', url: 'https://www.hopkinsmedicine.org/johns-hopkins-health-plans/providers-physicians/resources-guidelines/provider-education/aba-training' },
        ],
        verifyVia: 'Johns Hopkins USFHP provider relations — request the current ACD-ABA training deck and the USFHP provider manual; plan line 800-808-7347',
        blocker: 'document',
      },
      noteSignature: {
        value: 'Johns Hopkins’ ACD-ABA attestation covers medical-records documentation for the program, but the plan’s specific session-note and signature standard is not published where it could be verified for this review.',
        status: 'unverified',
        cites: [
          { title: 'Johns Hopkins Health Plans — USFHP Applied Behavioral Analysis Training', url: 'https://www.hopkinsmedicine.org/johns-hopkins-health-plans/providers-physicians/resources-guidelines/provider-education/aba-training' },
        ],
        verifyVia: 'Johns Hopkins USFHP ACD-ABA training deck and provider manual, via provider relations',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'None under the ACD: no age limit, no time limit and no annual or lifetime dollar cap on ABA, and the demonstration applies to USFHP members the same way it applies to regional TRICARE members. Age changes the diagnosing pathway rather than the benefit \u2014 a first diagnosis at age 8 or later must come from a specialized ASD diagnosing provider. Eligibility itself runs to active duty family members, retired service members and their families, activated and non-activated Guard and Reserve families, TAMP qualifiers, retired Guard and Reserve aged 60 and older, survivors, Medal of Honor recipients and qualified former spouses \u2014 plus TRICARE Young Adult, for which USFHP can be chosen.',
        status: 'verified',
        cites: [{ title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }, { title: 'TRICARE \u2014 Uniformed Services Family Health Plan', url: 'https://tricare.mil/Plans/HealthPlans/USFHP' }],
      },
      dxRecency: {
        value:
          'The ACD clocks apply unchanged: a diagnosis more than two years old requires an updated diagnostic assessment, and a new referral from the ASD diagnosing provider is required every two years along with an updated DSM-5 checklist. Because USFHP families do not get an Autism Services Navigator \u2014 DHA states beneficiaries enrolled in USFHP and those living overseas do not have one \u2014 nobody outside your team is chasing those dates. Build the renewal calendar at intake.',
        status: 'verified',
        cites: [{ title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }, { title: 'TRICARE \u2014 Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' }, { title: 'TRICARE \u2014 Uniformed Services Family Health Plan', url: 'https://tricare.mil/Plans/HealthPlans/USFHP' }],
      },
      diagnosingProviders: {
        value:
          'The ACD\u2019s closed list, and the plan does not widen it. Approved primary care providers are family practice physicians, pediatricians, and pediatric or family nurse practitioners. Approved specialists are board-certified or board-eligible physicians in developmental-behavioral pediatrics, neurodevelopmental pediatrics, pediatric neurology, or adult or child psychiatry, plus doctoral-level licensed clinical psychologists and qualifying Doctors of Nursing Practice. A first diagnosis at age 8 or later must come from a specialized ASD diagnosing provider.',
        status: 'verified',
        cites: [{ title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }, { title: 'TRICARE \u2014 Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' }],
      },
      diagnosticTools: {
        value:
          'A DSM-5 checklist and a validated assessment tool at the door, then the ACD\u2019s four outcome measures for the life of the case: the PDDBI, the Vineland Adaptive Behavior Scales, the Social Responsiveness Scale, and either the Parent Stress Index or the Stress Index for Parents of Adolescents. All four must be completed by the family and provider team before ABA services can begin. After baseline the cadence is mixed \u2014 the PDDBI and the PSI-4-SF or SIPA every six months, the Vineland-3 and SRS-2 annually \u2014 with the ABA provider completing the PDDBI teacher form and the SRS-2 interview or teacher form annually. With no Autism Services Navigator to chase a stuck measure, these deadlines belong to your team.',
        status: 'verified',
        cites: [{ title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }, { title: 'TRICARE \u2014 Understanding Outcome Measures for ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Outcome-Measures' }, { title: 'TRICARE \u2014 Uniformed Services Family Health Plan', url: 'https://tricare.mil/Plans/HealthPlans/USFHP' }],
      },
      referral: {
        value:
          'Required, and the routing is the whole point of this guide. DHA directs the diagnosing provider to submit the ABA referral \u201cto your regional contractor or US Family Health Plan provider for authorization\u201d \u2014 for a USFHP member that is Johns Hopkins, not Humana Military. The first authorization covers the ABA assessment; the provider completes the assessment and treatment plan; a six-month treatment authorization follows; reauthorization is requested every six months; and a new referral from the ASD diagnosing provider is required every two years. Active duty family members must register in ECHO, with EFMP enrollment the prerequisite. Two network facts gate the same door: USFHP members cannot use TRICARE network providers or military hospitals and clinics except for emergencies, and Johns Hopkins requires its ABA providers to hold an ACD-ABA training attestation.',
        status: 'verified',
        cites: [{ title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }, { title: 'TRICARE \u2014 Uniformed Services Family Health Plan', url: 'https://tricare.mil/Plans/HealthPlans/USFHP' }, { title: 'Johns Hopkins Health Plans \u2014 USFHP Applied Behavioral Analysis Training', url: 'https://www.hopkinsmedicine.org/johns-hopkins-health-plans/providers-physicians/resources-guidelines/provider-education/aba-training' }],
      },
      telehealth: {
        value:
          'Johns Hopkins\u2019 plan-specific ABA telehealth rules are published in provider material that is served behind bot protection and could not be retrieved for this review. The DHA-level setting rules do apply \u2014 technician-delivered school ABA is not covered, and a BCBA may be authorized only for a clinically necessary, focused and time-limited goal after review \u2014 but the telehealth code list is not stated at the DHA level in the sources cited here. Get the plan\u2019s written answer before scheduling remote hours rather than after.',
        status: 'unverified',
        cites: [{ title: 'TRICARE \u2014 Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' }, { title: 'Johns Hopkins Health Plans \u2014 USFHP Applied Behavioral Analysis Training', url: 'https://www.hopkinsmedicine.org/johns-hopkins-health-plans/providers-physicians/resources-guidelines/provider-education/aba-training' }],
        verifyVia: 'Johns Hopkins USFHP provider relations on 800-808-7347 \u2014 request the current ACD-ABA training deck and the USFHP provider manual, and confirm which ABA codes the plan pays by telehealth.',
        blocker: 'document',
      },
      authTurnaround: {
        value:
          'Johns Hopkins USFHP states: “TRICARE requires authorization notification within two working days but not to exceed five working days following receipt of the request and all required information” — consistent with the DHA ACD rule that compliant ABA treatment plans be reviewed “within the five business days.” The required outcome measures must accompany “the initial and concurrent requests for authorization,” or authorizations may be delayed or denied. The manual sets no reauth lead time of its own; the DHA rule it cites (TRICARE Operations Manual 6010.59-M, Ch. 18) says a reauthorization “should be requested” as early as 60 calendar days and no later than 30 calendar days before the six-month authorization ends, and late submissions are not backdated.',
        status: 'verified',
        cites: [{ title: 'Johns Hopkins US Family Health Plan Provider Manual (2024)', url: 'https://www.hopkinsmedicine.org/-/media/johns-hopkins-health-plans/documents/usfhp/usfhp-provider-manual.pdf' }, { title: 'TRICARE Operations Manual 6010.59-M (2015 ed.), Ch. 18 Sec. 4 — Autism Care Demonstration (Change 139, Jun 10, 2024)', url: 'https://manuals.health.mil/pages/DisplayManualHtmlFile/2024-06-10/AsOf/TO15/C18S4.html' }],
      },
      coordinationOfBenefits: {
        value:
          '“If other health insurance coverage exists, plan coverage is available only as a secondary payor (except in cases involving Medicaid, Indian Health Services, and Veteran’s Administration) and only after a claim has been filed with the double coverage plan and a payment determination issued.” So bill the commercial plan first; COB claims are due “90 days from the date the primary insurance adjudicated the original claim.” The plan will not pay “amounts denied by the other health insurer because the claim was not filed in a timely manner or because the member failed to satisfy some other requirement,” and families may not waive the other coverage. Under the DHA ACD rule, “For Other Health Insurance (OHI), beneficiaries receiving ABA services must obtain a referral and prior authorization” — get the USFHP ABA authorization even when the other plan is primary.',
        status: 'verified',
        cites: [{ title: 'Johns Hopkins US Family Health Plan Provider Manual (2024)', url: 'https://www.hopkinsmedicine.org/-/media/johns-hopkins-health-plans/documents/usfhp/usfhp-provider-manual.pdf' }, { title: 'TRICARE Operations Manual 6010.59-M (2015 ed.), Ch. 18 Sec. 4 — Autism Care Demonstration (Change 139, Jun 10, 2024)', url: 'https://manuals.health.mil/pages/DisplayManualHtmlFile/2024-06-10/AsOf/TO15/C18S4.html' }, { title: 'eCFR — 32 CFR 199.8, Double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' }],
      },
    },
    faq: [
      { q: 'Is Johns Hopkins USFHP the same as TRICARE?', a: 'It is a TRICARE Prime option — one of six Uniformed Services Family Health Plans administered by nonprofit health systems. Members get TRICARE Prime benefits and Prime cost-sharing, but through the plan’s own network, and cannot use TRICARE network providers or military hospitals and clinics except for emergency care.' },
      { q: 'Who authorizes ABA for a Johns Hopkins USFHP member?', a: 'The plan. DHA directs the ASD diagnosing provider to submit the ABA referral to the regional contractor or the US Family Health Plan provider — for a USFHP member that is Johns Hopkins, not Humana Military.' },
      { q: 'Does the Autism Care Demonstration apply to USFHP members?', a: 'Yes. ABA for TRICARE beneficiaries is covered under the ACD regardless of plan, and the referral, six-month authorization cycle, two-year referral renewal and four outcome measures all apply. Johns Hopkins requires its ABA providers to attest to completing its ACD-ABA training.' },
      { q: 'What is the Johns Hopkins USFHP service area?', a: 'Maryland and Washington DC plus parts of Pennsylvania, Delaware, Virginia and West Virginia. The plan’s own site lists Delaware alongside Maryland and DC, while TRICARE’s listing puts it among the partial states — check the ZIP against the plan’s service-area tool.' },
      { q: 'Do USFHP families get an Autism Services Navigator?', a: 'No. DHA states that beneficiaries enrolled in USFHP, and those living overseas, do not have an ASN. The coordination the navigator normally provides falls to the plan and the ABA provider.' },
      { q: 'What does a Johns Hopkins USFHP family pay for ABA?', a: 'TRICARE Prime rates, since USFHP has the same out-of-pocket costs as Prime. ABA is outpatient specialty care and one copay covers all ABA services on a single day: currently $0 for active duty family members and $39 for retirees and others on network specialty care. There is no annual or lifetime cap on ABA.' },
    ],
  },

  'martins-point-usfhp': {
    slug: 'martins-point-usfhp',
    payer: 'Martin’s Point US Family Health Plan',
    state: 'NY', kind: 'commercial', family: 'tricare',
    cardDesc: 'TRICARE Prime designated provider across northern New England, upstate NY, northern PA and Ohio — administers the ACD directly.',
    assessmentPA: {
      value: 'Required — ABA supervisors complete the initial assessment under CPT 97151 with the required outcome measures, and the plan authorizes it',
      status: 'verified',
      cites: [
        { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
        { title: 'Martin’s Point — USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' },
      ],
    },
    treatmentPA: {
      value: 'Required — six-month treatment authorizations; reauthorization must be submitted at least 30 days before the current one expires',
      status: 'verified',
      cites: [
        { title: 'Martin’s Point — USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' },
        { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD (F84.0) diagnosis by a TRICARE-authorized PCM or specialized ASD diagnosing provider, with a completed DSM-5 checklist and an approved validated assessment tool',
      status: 'verified',
      cites: [
        { title: 'Martin’s Point — USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' },
        { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
      ],
    },
    pill: 'Payer Guide · Martin’s Point US Family Health Plan',
    h1: 'Martin’s Point USFHP ABA coverage under the ACD.',
    metaTitle: 'Martin’s Point US Family Health Plan ABA Coverage (TRICARE USFHP) | Carelu',
    metaDescription:
      'Martin’s Point US Family Health Plan is a TRICARE Prime designated provider across ME, NH, VT, upstate and western NY, northern and western PA and parts of OH. How it administers ABA under the Autism Care Demonstration.',
    intro: [
      'Martin’s Point Health Care runs one of the six Uniformed Services Family Health Plans — TRICARE Prime delivered through a civilian health system’s own network rather than through a regional contractor. Its service area is the northern tier: Maine, New Hampshire, Vermont, upstate and western New York, the northern tier and western Pennsylvania, and northeastern and central Ohio.',
      'Martin’s Point answers the question that matters most about USFHP and ABA directly, in its own provider training: "The US Family Health Plan is contracted with the Defense Health Agency to administer the Autism Care Demonstration benefits in accordance with TRICARE’s Program Manuals." So the rules are the ACD’s — the TRICARE Operations, Policy, Reimbursement and Systems Manuals — but the plan is the entity that certifies providers, authorizes services and pays claims. That combination is what an intake team has to hold in its head.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'TRICARE Prime designated-provider option (USFHP), run by Martin’s Point Health Care' },
      { label: 'Service area', value: 'ME, NH, VT, upstate and western NY, northern tier and western PA, northeastern and central OH' },
      { label: 'Covers ABA?', value: 'Yes — under the Autism Care Demonstration, administered by the plan under contract with DHA' },
      { label: 'Demonstration authority', value: 'ACD in effect since 2014; expires Dec. 31, 2028 unless extended' },
      { label: 'Prior auth', value: 'Required; reauthorization submitted at least 30 days before the current authorization expires' },
      { label: 'Outcome measures', value: 'PDDBI and PSI-4 or SIPA every six months; Vineland-3 and SRS-2 annually' },
      { label: 'Parent training', value: 'Six parent/caregiver training sessions required every six months' },
      { label: 'Discharge notice', value: 'A provider terminating services must notify the plan at least 45 calendar days in advance' },
      { label: 'Costs', value: 'Same out-of-pocket costs as TRICARE Prime; ABA bills as outpatient specialty care' },
    ],
    sections: [
      {
        h2: 'Who the plan covers, and where',
        cites: [
          { title: 'Martin’s Point — US Family Health Plan', url: 'https://www.martinspoint.org/US-Family-Health-Plan' },
          { title: 'TRICARE — Uniformed Services Family Health Plan', url: 'https://tricare.mil/Plans/HealthPlans/USFHP' },
        ],
        body: [
          'Martin’s Point describes its USFHP as "one of six Department of Defense-sponsored TRICARE Prime options nationwide," offering the full TRICARE Prime benefits package to eligible military retirees and their families, certain active-duty family members, and dependents aged 21 to 26 through TRICARE Young Adult. Care is delivered through Martin’s Point’s own civilian provider network rather than through TRICARE’s.',
          'TRICARE’s own USFHP listing gives the service area as Maine, New Hampshire, Vermont, upstate and western New York, the northern tier and western Pennsylvania, and northeastern and central Ohio — which matches the plan’s description of "Maine, New Hampshire, Vermont, upstate and western New York, northern Pennsylvania, and parts of Ohio." Three of those states are partial, so confirm by ZIP rather than by state name. The standard USFHP limits apply: members get most care from a plan-network PCP, cannot use TRICARE network providers, and cannot use military hospitals and clinics except for emergency care.',
        ],
      },
      {
        h2: 'Eligibility and the diagnosis gate',
        cites: [
          { title: 'Martin’s Point — USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' },
          { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
        ],
        body: [
          'Martin’s Point can authorize ABA under the ACD only where the beneficiary is a dependent of an active duty service member enrolled in the US Family Health Plan and registered for ECHO; a retiree or retiree family member enrolled in TRICARE Prime or TRICARE Select; covered under the Transitional Assistance Management Program; covered under TRICARE For Life; a TRICARE Young Adult participant; a NATO or Partnership for Peace participant; or a Continued Health Care Benefit Program participant. For active duty families, EFMP enrollment is the prerequisite for ECHO, and ECHO registration is the prerequisite for the ACD.',
          'Diagnostically, the beneficiary must have an ASD (F84.0) diagnosis from a TRICARE-authorized PCM or specialized ASD diagnosing provider, with the diagnosis made under the TRICARE basic benefit. The enrollment packet needs a referral or diagnostic evaluation stating the diagnosis, the date of the initial ASD diagnosis, a completed DSM-5 diagnostic checklist, and complete results of an approved validated assessment tool.',
          'The validated assessment tool list is closed: the STAT, the ADOS-2, the ADI-R, the CARS-2 or the GARS-3 — with the caveat that "completion of the GARS alone is not sufficient for diagnostic documentation" and an approved diagnosing provider must submit a diagnostic evaluation alongside it. A general observation interview alone is not a valid diagnostic tool. Two exceptions are published and worth knowing: for beneficiaries younger than 12 months the diagnosing provider may choose an appropriate age-based tool, and the plan may accept a diagnosis through source verification on a case-by-case basis where the diagnosing provider was not TRICARE-authorized but would otherwise have qualified and the diagnosis meets the requirements.',
        ],
      },
      {
        h2: 'Authorization, outcome measures and parent training',
        cites: [
          { title: 'Martin’s Point — USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' },
          { title: 'TRICARE — Understanding Outcome Measures for ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Outcome-Measures' },
        ],
        body: [
          'The initial referral must include a complete assessment, the level of support needed, and the ASD diagnosis. ABA supervisors complete the initial assessment under CPT 97151, and that assessment includes the required outcome measures — the PDDBI, Vineland-3, SRS-2 and either the PSI-4 or the SIPA. Treatment plans are then updated every six months, documenting progress on behavior targets, adjusting goals, and carrying the outcome measures required for that interval.',
          'The cadence Martin’s Point publishes matches DHA’s: the PSI-4 or SIPA and the PDDBI every six months, and the Vineland-3 and SRS-2 annually. Reauthorizations must be submitted at least 30 days before the current authorization expires, with progress reports and updated outcome measures.',
          'Two requirements here have no commercial analogue and both belong on an intake checklist. Parent/caregiver involvement is mandatory: "Six parent/caregiver training sessions are required every six months to teach treatment protocols." And discharge is regulated — discharge criteria include meeting ABA goals or a lack of measurable progress across several assessments, and if the corporate services provider or sole provider terminates services with a beneficiary for any reason, they must notify the contractor a minimum of 45 calendar days before termination.',
        ],
      },
      {
        h2: 'Provider standards the plan enforces',
        cites: [
          { title: 'Martin’s Point — USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' },
        ],
        list: [
          { title: 'Authorized ABA supervisors', desc: 'Master’s degree or higher in a relevant field, state licensed and/or BACB certified.' },
          { title: 'Assistant behavior analysts', desc: 'Bachelor’s degree with appropriate state licensure or BACB/QABA certification, working under a qualified ABA supervisor.' },
          { title: 'Behavior technicians', desc: 'RBT, ABAT or BCAT certification, operating under the direct supervision of an authorized ABA supervisor.' },
          { title: 'CPR/BLS', desc: 'Cardiopulmonary resuscitation and basic life support certification must be completed and maintained through approved courses.' },
          { title: 'Criminal history background check', desc: 'Providers with felony convictions or crimes against children are ineligible. Supervisors provide a criminal history review; assistants and technicians provide federal, state and county reports covering the last 10 years.' },
          { title: 'Liability insurance', desc: 'Corporate services providers and sole providers must maintain $1 million per claim and $3 million in aggregate.' },
        ],
      },
      {
        h2: 'Exclusions, claims and the school question',
        cites: [
          { title: 'Martin’s Point — USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' },
          { title: 'TRICARE — Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' },
          { title: 'TRICARE — Compare Health Plan Costs', url: 'https://tricare.mil/Costs/Compare' },
        ],
        body: [
          'Martin’s Point lists as non-reimbursable: behavior technician training, non-ABA services, travel time unless authorized, academic services and school-based ABA, services provided by family members, and services rendered by a non-authorized ABA provider. Note the tension worth resolving in writing before you schedule anything: the plan’s training lists school-based ABA among the exclusions, while DHA’s ACD Q&A says technician-delivered school ABA is not covered but a BCBA may be authorized for a focused, time-limited, contractor-approved goal. Treat school delivery for a Martin’s Point member as a plan-level question and get the answer from the plan, not from another contractor’s guidance.',
          'On claims: all claims must be submitted electronically with the correct HIPAA taxonomy codes and the ABA provider’s valid NPI. Contractors audit provider records annually, monitor documentation and billing compliance, and watch for high-dollar claims and inconsistent billing — providers with irregularities face recoupment or additional monitoring. ABA is coordinated care, not a silo: providers are expected to coordinate with OT, PT and speech, and to align ABA with the comprehensive care plan.',
          'Costs are TRICARE Prime costs, because USFHP carries Prime out-of-pocket amounts. ABA bills as outpatient specialty care and one copayment covers all ABA services on a single day — currently $0 for active duty family members and $39 for retirees and others for network specialty care. There are no yearly or lifetime dollar caps on ABA under the ACD.',
        ],
      },
    ],
    collect: [
      { title: 'Confirm USFHP, then the ZIP', desc: 'Martin’s Point USFHP is not regional TRICARE — the referral goes to the plan. New York, Pennsylvania and Ohio are partial states, so check the ZIP against the plan service area before promising anything.' },
      { title: 'Beneficiary category', desc: 'Retiree or retiree family member, active duty family member with ECHO registration, TAMP, TFL, TRICARE Young Adult, NATO/PfP or CHCBP. Active duty families need EFMP first, then ECHO.' },
      { title: 'Validated assessment tool used', desc: 'STAT, ADOS-2, ADI-R, CARS-2 or GARS-3 — and if it is the GARS-3, a separate diagnostic evaluation from an approved diagnosing provider must come with it. A general observation interview alone will not do.' },
      { title: 'DSM-5 checklist and referral date', desc: 'Both are part of the enrollment packet, along with the date of the initial ASD diagnosis. Diary the two-year referral renewal at the same time.' },
      { title: 'Parent/caregiver availability', desc: 'Six parent training sessions are required every six months. Establish at intake who the trainable caregiver is and when they are free — this is a reauthorization condition, not a nice-to-have.' },
      { title: 'Requested setting', desc: 'School-based ABA sits on the plan’s exclusion list while DHA allows a narrow BCBA pathway. Ask the family where they want services and get the plan’s written answer before scheduling.' },
    ],
    sources: [
      { title: 'Martin’s Point — US Family Health Plan', url: 'https://www.martinspoint.org/US-Family-Health-Plan' },
      { title: 'Martin’s Point — USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' },
      { title: 'TRICARE — Uniformed Services Family Health Plan', url: 'https://tricare.mil/Plans/HealthPlans/USFHP' },
      { title: 'TRICARE — Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' },
      { title: 'TRICARE — Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' },
      { title: 'TRICARE — Understanding Outcome Measures for ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Outcome-Measures' },
      { title: 'TRICARE — Compare Health Plan Costs', url: 'https://tricare.mil/Costs/Compare' },
    ],
    deliveryRules: {
      concurrentBilling: {
        value:
          'Not addressed in Martin\u2019s Point\u2019s published ABA provider training, which covers eligibility, outcome measures, provider standards, exclusions and claims without stating whether two ABA codes may be billed for the same clock time. The plan states it administers ACD benefits \u201cin accordance with TRICARE\u2019s Program Manuals,\u201d so the governing rule is in TRICARE Operations Manual Ch. 18, Sec. 3 \u2014 a document manuals.health.mil blocks automated retrieval of.',
        status: 'unverified',
        cites: [{ title: 'Martin\u2019s Point \u2014 USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' }],
        verifyVia: 'Martin\u2019s Point USFHP provider services, 888-241-4556 \u2014 ask whether 97155 pays alongside 97153 for the same clock time and request the manual citation.',
        blocker: 'document',
      },
      dailyLimits: {
        value:
          'Not published by the plan. Martin\u2019s Point sets cadence rather than ceilings: treatment plans updated every six months, reauthorizations submitted at least 30 days before the current authorization expires, and six parent/caregiver training sessions required every six months. Per-day unit ceilings under the ACD live in the TRICARE Operations Manual and in the authorization itself; do not carry another contractor\u2019s published ceilings over.',
        status: 'unverified',
        cites: [{ title: 'Martin\u2019s Point \u2014 USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' }],
        verifyVia: 'The authorization letter itself, or Martin\u2019s Point USFHP provider services on 888-241-4556.',
        blocker: 'document',
      },
      noteSignature: {
        value:
          'Not published. The plan\u2019s ABA provider training sets documentation expectations at the plan level \u2014 treatment plans updated every six months documenting progress on behavior targets, annual record audits, monitoring of documentation and billing compliance, with recoupment or additional monitoring for irregularities \u2014 but does not state who signs an individual session note or by when.',
        status: 'unverified',
        cites: [{ title: 'Martin\u2019s Point \u2014 USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' }],
        verifyVia: 'Martin\u2019s Point USFHP provider services, 888-241-4556 \u2014 ask for the session-note standard the annual audit is run against.',
        blocker: 'document',
      },
      supervision: {
        value: 'Authorized ABA supervisors hold a master’s degree or higher in a relevant field and are state licensed and/or BACB certified. Assistant behavior analysts hold a bachelor’s degree with appropriate state licensure or BACB/QABA certification and must work under a qualified ABA supervisor. Behavior technicians must hold RBT, ABAT or BCAT certification and must operate under the direct supervision of an authorized ABA supervisor. Supervisors, assistants and technicians must also clear criminal history background checks — a felony conviction or a crime against children is disqualifying — and maintain CPR/BLS certification. Behavior technician training is not a reimbursable service.',
        status: 'verified',
        cites: [
          { title: 'Martin’s Point — USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' },
        ],
      },
      placeOfService: {
        value: 'The plan’s ABA provider training lists academic services and school-based ABA as non-reimbursable, alongside services provided by family members, non-ABA services and travel time unless authorized. DHA’s ACD guidance is narrower rather than contradictory — technician-delivered school ABA is not covered, while a BCBA may be authorized for a focused, time-limited, pre-authorized goal after clinical necessity review. Because Martin’s Point administers the demonstration itself, treat any school or community request as a plan-level decision and obtain it in writing before scheduling.',
        status: 'plan-dependent',
        cites: [
          { title: 'Martin’s Point — USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' },
          { title: 'TRICARE — Autism Care Demonstration Q&A', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD/QandA' },
        ],
        verifyVia: 'Martin’s Point USFHP provider services, 888-241-4556, before scheduling school or community sessions',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'All claims must be submitted electronically, must use the proper HIPAA taxonomy codes for the provider type (behavior analyst, assistant behavior analyst, behavior technician), and must carry the ABA provider’s valid NPI. Services rendered by a non-authorized ABA provider are not reimbursable. Records are audited annually and irregular billing draws recoupment or added monitoring.',
        status: 'verified',
        cites: [
          { title: 'Martin’s Point — USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'No age limit and no yearly or lifetime dollar cap on ABA under the demonstration. Eligibility rather than age is the gate: Martin\u2019s Point can authorize ABA only where the beneficiary is a dependent of an active duty service member enrolled in the US Family Health Plan and registered for ECHO; a retiree or retiree family member on TRICARE Prime or Select; covered under TAMP; covered under TRICARE For Life; a TRICARE Young Adult participant; a NATO or Partnership for Peace participant; or a Continued Health Care Benefit Program participant. Age does decide the stress measure \u2014 the PSI-4 below, the SIPA for adolescents.',
        status: 'verified',
        cites: [{ title: 'Martin\u2019s Point \u2014 USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' }, { title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }],
      },
      dxRecency: {
        value:
          'The ACD clocks apply: a diagnosis more than two years old requires an updated diagnostic assessment, and the referral runs two years. The enrollment packet must carry the date of the initial ASD diagnosis alongside the referral or diagnostic evaluation, so capture that date at intake rather than at reauthorization. Reauthorizations must be submitted at least 30 days before the current authorization expires, with progress reports and updated outcome measures. USFHP families have no Autism Services Navigator, so the renewal calendar is your team\u2019s to keep.',
        status: 'verified',
        cites: [{ title: 'Martin\u2019s Point \u2014 USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' }, { title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }, { title: 'TRICARE \u2014 Uniformed Services Family Health Plan', url: 'https://tricare.mil/Plans/HealthPlans/USFHP' }],
      },
      diagnosingProviders: {
        value:
          'The diagnosis must come from a TRICARE-authorized PCM or specialized ASD diagnosing provider and must be made under the TRICARE basic benefit \u2014 the ACD\u2019s closed list of family practice physicians, pediatricians and pediatric or family nurse practitioners on the primary-care side, and developmental-behavioral pediatrics, neurodevelopmental pediatrics, pediatric neurology, adult or child psychiatry, doctoral-level licensed clinical psychologists and qualifying DNPs on the specialist side. One published mercy: the plan may accept a diagnosis through source verification on a case-by-case basis where the diagnosing provider was not TRICARE-authorized but would otherwise have qualified and the diagnosis meets the requirements. Worth asking about before you turn a family away.',
        status: 'verified',
        cites: [{ title: 'Martin\u2019s Point \u2014 USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' }, { title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }],
      },
      diagnosticTools: {
        value:
          'The closed validated-tool list in this directory, and it is worth memorising: the STAT, the ADOS-2, the ADI-R, the CARS-2 or the GARS-3 \u2014 with the caveat that \u201ccompletion of the GARS alone is not sufficient for diagnostic documentation\u201d and an approved diagnosing provider must submit a diagnostic evaluation alongside it. A general observation interview alone is not a valid diagnostic tool. For beneficiaries younger than 12 months the diagnosing provider may choose an appropriate age-based tool. On top of that sit the four ACD outcome measures, which the ABA supervisor folds into the initial 97151 assessment: the PDDBI and the PSI-4 or SIPA every six months, the Vineland-3 and the SRS-2 annually.',
        status: 'verified',
        cites: [{ title: 'Martin\u2019s Point \u2014 USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' }, { title: 'TRICARE \u2014 Understanding Outcome Measures for ABA Services', url: 'https://tricare.mil/About/Regions/West-Region/Find-Care/Autism-Care-Demonstration/Outcome-Measures' }],
      },
      referral: {
        value:
          'Required, and the enrollment packet is specific: a referral or diagnostic evaluation stating the diagnosis, the date of the initial ASD diagnosis, a completed DSM-5 diagnostic checklist, and complete results of an approved validated assessment tool. The initial referral must also include a complete assessment and the level of support needed. For active duty families, EFMP enrollment is the prerequisite for ECHO and ECHO registration is the prerequisite for the ACD. Two plan-level requirements with no commercial analogue belong on the same checklist: six parent/caregiver training sessions are required every six months to teach treatment protocols, and a provider terminating services with a beneficiary for any reason must notify the contractor at least 45 calendar days in advance.',
        status: 'verified',
        cites: [{ title: 'Martin\u2019s Point \u2014 USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' }, { title: 'TRICARE \u2014 Autism Care Demonstration', url: 'https://tricare.mil/Plans/SpecialPrograms/ACD' }],
      },
      telehealth: {
        value:
          'Not addressed in Martin\u2019s Point\u2019s published ABA provider training. Its non-reimbursable list names behavior technician training, non-ABA services, travel time unless authorized, academic services and school-based ABA, services provided by family members, and services rendered by a non-authorized ABA provider \u2014 but says nothing about remote delivery. Because the plan administers the demonstration itself under contract with DHA, treat telehealth as a plan-level question and get the answer in writing before scheduling.',
        status: 'unverified',
        cites: [{ title: 'Martin\u2019s Point \u2014 USFHP Training for ABA Providers: TRICARE Autism Care Demonstration (PDF)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' }],
        verifyVia: 'Martin\u2019s Point USFHP provider services, 888-241-4556 \u2014 ask which ABA codes the plan pays by telehealth, under which modifiers, and whether the authorization must say so.',
        blocker: 'document',
      },
      authTurnaround: {
        value:
          'Martin’s Point publishes no USFHP-specific ABA decision clock (the 72-hour/7-day decision times on its site are for its Medicare Advantage plans), so the DHA ACD rule for USFHP governs: the plan completes clinical-necessity review of a compliant treatment plan “within the five business days for authorization processing standards.” Martin’s Point’s own lead times: “Reauthorizations: Submit at least 30 days before the authorization expires, with progress reports and updated outcome measures,” and prior authorization requests generally “should be submitted at least 14 calendar days prior to date of service.” The DHA rule lets reauths go in as early as 60 calendar days before expiry, and late submissions are not backdated.',
        status: 'verified',
        cites: [{ title: 'Martin’s Point — US Family Health Plan Training for ABA Providers (TRICARE ACD)', url: 'https://martinspoint.org/-/media/Files/Documents-and-Forms/Provider-and-Internal-Forms/Provider-Documents/Provider-Education/TRICARE-ACD-Provider-Training.ashx' }, { title: 'Martin’s Point — Authorizations and Referrals', url: 'https://www.martinspoint.org/For-Providers/Tools/Authorizations-and-Referrals' }, { title: 'TRICARE Operations Manual 6010.59-M (2015 ed.), Ch. 18 Sec. 4 — Autism Care Demonstration (Change 139, Jun 10, 2024)', url: 'https://manuals.health.mil/pages/DisplayManualHtmlFile/2024-06-10/AsOf/TO15/C18S4.html' }],
      },
      coordinationOfBenefits: {
        value:
          '“The US Family Health Plan is primary to the Medicaid program and secondary to all commercial health insurance plans such as Aetna, CIGNA, or Anthem. Federally sponsored health plans (e.g., Federal Blue Cross and Mail Handlers) are employee benefits and are primary to the US Family Health Plan.” Bill the commercial plan first, then submit to Martin’s Point with the primary EOB “within 120 calendar days from the remittance date of the primary payer’s payment or denial”; a claim without it is denied (“OHI must process claim first, resubmit with primary EOB”). Under the DHA ACD rule, “For Other Health Insurance (OHI), beneficiaries receiving ABA services must obtain a referral and prior authorization” — get the USFHP ABA authorization even when the commercial plan is primary.',
        status: 'verified',
        cites: [{ title: 'Martin’s Point Provider Manual — Claims (updated January 1, 2026)', url: 'https://www.martinspoint.org/For-Providers/Provider-Manual/Claims' }, { title: 'TRICARE Operations Manual 6010.59-M (2015 ed.), Ch. 18 Sec. 4 — Autism Care Demonstration (Change 139, Jun 10, 2024)', url: 'https://manuals.health.mil/pages/DisplayManualHtmlFile/2024-06-10/AsOf/TO15/C18S4.html' }],
      },
    },
    faq: [
      { q: 'Does Martin’s Point US Family Health Plan cover ABA?', a: 'Yes. Martin’s Point states that the US Family Health Plan is contracted with the Defense Health Agency to administer Autism Care Demonstration benefits in accordance with TRICARE’s program manuals. The ACD has been in effect since 2014 and expires Dec. 31, 2028 unless extended.' },
      { q: 'Which assessment tools will Martin’s Point accept for the ASD diagnosis?', a: 'The STAT, ADOS-2, ADI-R, CARS-2 or GARS-3. The GARS-3 alone is not sufficient — an approved ASD diagnosing provider must also submit a diagnostic evaluation. A general observation interview alone is not a valid diagnostic tool. For children under 12 months the diagnosing provider may choose an appropriate age-based tool.' },
      { q: 'How much parent training does the plan require?', a: 'Six parent/caregiver training sessions every six months, to teach treatment protocols. Parent/caregiver involvement is mandatory and the treatment plan must document it.' },
      { q: 'Can ABA be delivered in school for a Martin’s Point member?', a: 'The plan’s own ABA provider training lists academic services and school-based ABA among non-reimbursable services, while DHA’s ACD guidance allows a narrow BCBA pathway for focused, time-limited, pre-authorized goals. Because the plan administers the demonstration itself, get its written answer before scheduling a school session.' },
      { q: 'What does the plan require before a provider can stop seeing a child?', a: 'At least 45 calendar days’ notice to the contractor before terminating services, for any reason. Discharge criteria are meeting the ABA goals or a lack of measurable progress across several assessments.' },
      { q: 'What does a Martin’s Point USFHP family pay for ABA?', a: 'TRICARE Prime amounts, since USFHP has the same out-of-pocket costs as Prime. ABA bills as outpatient specialty care and one copayment covers all ABA on a single day — currently $0 for active duty family members and $39 for retirees and others in network. There is no annual or lifetime cap on ABA.' },
    ],
  },
};

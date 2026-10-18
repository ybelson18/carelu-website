import type { PayerConfig } from './types.js';

export const massachusettsPayers: Record<string, PayerConfig> = {
  'masshealth-massachusetts-medicaid': {
    slug: 'masshealth-massachusetts-medicaid',
    cardDesc: 'EPSDT under 21, no caps, 100% managed-care ABA via six BH administrators; 1:10 audit live.',
    assessmentPA: {
      value: 'Required — the MA Standard ABA PA Form has a distinct "Request for initial evaluation"; PA is required for all ABA services/hours/units',
      status: 'verified',
      cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
    },
    treatmentPA: {
      value: 'Required — all treatment hours/units; continued-service authorizations in up to 6-month periods, submitted to the member\'s plan\'s BH administrator',
      status: 'verified',
      cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD via a comprehensive DSM-aligned assessment by a qualified licensed diagnostician; from 1/1/2026 also sole-diagnosis Down syndrome (genetic-testing confirmed)',
      status: 'verified',
      cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' }, { title: 'The Arc of Massachusetts — ABA for Down syndrome expansion (eff. 1/1/2026)', url: 'https://thearcofmass.org/post/expansion-of-coverage-of-applied-behavior-analysis-aba-for-individuals-with-down-syndrome/' }],
    },
    payer: 'MassHealth (Massachusetts Medicaid)',
    state: 'MA', kind: 'state-medicaid',
    intakeGates: {
      ageLimit: {
        value:
          'EPSDT sets the bound, and nothing else does. ABA is covered for MassHealth Standard and CommonHealth members under 21, and for Family Assistance members under 19 — with no lower age bound and no dollar, visit or unit-of-service cap underneath it. For the youngest referrals the binding rule is non-duplication rather than age: ABA cannot duplicate services the child already receives through Early Intervention. From 1/1/2026 the second diagnostic pathway (sole-diagnosis Down syndrome) rides the same age structure.',
        status: 'verified',
        cites: [{ title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' }, { title: 'The Arc of Massachusetts — ABA for Down syndrome expansion (eff. 1/1/2026)', url: 'https://thearcofmass.org/post/expansion-of-coverage-of-applied-behavior-analysis-aba-for-individuals-with-down-syndrome/' }],
      },
      dxRecency: {
        value:
          'Not published. Neither the Massachusetts Standard ABA PA Form nor the Carelon/MBHP performance specification sets a maximum age for the diagnostic evaluation — the form asks for the current ICD-10 diagnosis and, on a "Request for initial evaluation," a copy of the comprehensive assessment, but names no recency window. What the form does date is utilization, not diagnosis: the continued-services page makes the BCBA attest whether at least 75% of the previously authorized direct-service hours were used.',
        status: 'unverified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'MassHealth\'s own ABA Provider FAQ on mass.gov (403 to automated clients — human retrieval), and the behavioral-health administrator behind the member\'s plan.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value:
          'The standard form names them, and the list is broader than "send them to a developmental pediatrician." For autism it requires "A comprehensive assessment completed by a licensed physician (i.e. PCP, etc.), advanced practice registered nurse, physician\'s assistant, or psychologist experienced in the diagnosis and treatment of ASD with developmental or child/adolescent experience which aligns with DSM criteria across ASD core deficits." For the 1/1/2026 pathway it requires instead "A diagnosis of Down Syndrome (Trisomy 21) confirmed by genetic testing." Note the two signatures are different people: the diagnostician writes the assessment, while the form itself "should" be completed by the BCBA rendering and/or supervising the services — an analyst the performance specification requires to be a LABA licensed under 262 CMR 10.00.',
        status: 'verified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
      },
      diagnosticTools: {
        value:
          'No instrument is mandated. The standard form requires a comprehensive assessment "which aligns with DSM criteria across ASD core deficits" without naming ADOS-2, ADI-R, CARS-2 or any other tool, and the performance specification names no diagnostic battery either; the Down syndrome pathway replaces the instrument question entirely with genetic testing. Massachusetts puts its measurement requirement downstream of intake instead — in progress documentation and medical-necessity review, not in the diagnostic gate.',
        status: 'verified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
      },
      referral: {
        value:
          'No referral and no physician order is a condition of authorization. The Massachusetts Standard ABA PA Form has no referral field and is completed by the rendering or supervising BCBA/LABA, and the performance specification\'s referral language is about timeliness rather than permission: "Fourteen calendar days from referral is the Medicaid standard of timely provision for services established in accordance with 42 CFR 441.56(e)," with a waitlist duty (and an obligation to hand caregivers other regional providers\' contact information) where the provider cannot start inside it. What the state does require is PCP evidence in the chart rather than at the door: the complete medical record must hold "Referral and assessment documentation" and "Documentation confirming physical examinations by a PCP," and the continued-services pages ask for a dated primary-care care-coordination entry.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }, { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
      },
      telehealth: {
        value:
          'Every ABA code may be delivered by telehealth, including the 97151 assessment and 97155 supervision, under two layers. Clinical layer: the ABA provider "may deliver services and consultation via a Health Insurance Portability and Accessibility Act (HIPAA)-compliant telehealth platform at the parent/caregiver\'s request and if the service can be effectively delivered via telehealth as part of the intervention when appropriate," with the rationale documented and the documentation reflecting "clinical considerations for appropriateness across any service components being delivered via telehealth." Two guardrails ride along: telehealth "must not replace in-person availability," and the member or family "may rescind consent for telehealth at any time without risk of interruption of services.\" The billing layer is statewide. MassHealth All Provider Bulletin 379 (October 2023) lets a provider deliver any MassHealth-covered service by live video, audio-only or asynchronous telehealth when it is clinically appropriate and the member consents; the only exclusions are listed categories such as ambulance, surgery, laboratory, radiology, dialysis and personal care, and ABA is not among them. So the 97151 assessment and 97155 protocol modification (the BCBA/LABA supervision code) are telehealth-eligible like every other ABA code. Payment is at parity with in-person. Professional claims carry POS 02 (not in the patient\'s home) or POS 10 (in the home), plus modifier 95 for audio-video or 93 for audio-only, and FR "to indicate a supervising practitioner was present through a real-time two-way, audio and video communication technology." Managed Care Entity Bulletin 115 (April 2024) requires every ACPP, MCO and MassHealth\'s behavioral-health vendor to keep a telehealth policy "no more restrictive than" Bulletin 379. Neither bulletin nor the ABA specification sets a minimum share of supervision that must be in person.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }, { title: 'MassHealth All Provider Bulletin 379 — Access to Health Services through Telehealth Options (October 2023)', url: 'https://www.mass.gov/doc/all-provider-bulletin-379-access-to-health-services-through-telehealth-options-0/download' }, { title: 'MassHealth Managed Care Entity Bulletin 115 — Telehealth for members enrolled in managed care entities (April 2024)', url: 'https://www.mass.gov/doc/managed-care-entity-bulletin-115-access-to-health-services-through-telehealth-options-for-members-enrolled-in-managed-care-entities-0/download' }],
        verifyVia:
          'Whether the member\'s BH administrator adds its own documentation or authorization steps for telehealth hours — under MCE Bulletin 115 a plan may be more generous than Bulletin 379, not stricter.',
      },
      authTurnaround: {
        value:
          'The managed-care clock is the one that governs, because MassHealth has no fee-for-service ABA front door. Every request goes to the member\'s BH administrator, and federal law sets its deadline. For rating periods that start on or after January 1, 2026, a standard decision is due "as expeditiously as the enrollee\'s condition requires" and within state-set timeframes that "may not exceed 7 calendar days after receiving the request for service" (it was 14 before 2026). That can be extended "up to 14 additional calendar days" if the family or provider asks, or if the plan justifies needing more information. An expedited decision is due "no later than 72 hours after receipt of the request for service." Expedited applies when the provider indicates that the standard clock "could seriously jeopardize the enrollee\'s life or health or ability to attain, maintain, or regain maximum function." MassHealth\'s administrators have adopted this. WellSense moved standard decisions to "seven calendar days (previously 14 days)" on 1/1/2026 with 72 hours for expedited. Carelon\'s Massachusetts addendum lists 7 calendar days for standard MassHealth pre-service and concurrent requests and 72 hours for urgent ones, counted "from request." MassHealth\'s own fee-for-service rule, 130 CMR 450.303, still prints 21 calendar days for "all other MassHealth services." That clock starts when a request "conforms to all applicable submission requirements," and the provider gets four calendar days to fix a deficient one. From 1/1/2026, however, federal law caps state fee-for-service decisions at 7 calendar days (standard) and 72 hours (expedited) unless state law is shorter. No reauthorization lead time is set statewide. The standard form only sets request windows: up to 3 months for an initial request and 6 months for continued services. Each administrator sets its own lead time. Tufts, for example, asks for PA requests at least five business days before the service.',
        status: 'verified',
        cites: [{ title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' }, { title: '42 CFR 440.230(e) — State Medicaid agency prior authorization timeframes, from 1/1/2026 (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-440.230' }, { title: 'WellSense — Reduction of prior authorization decision timeframes (provider communication, Oct 31 2025)', url: 'https://www.wellsense.org/hubfs/Provider/News/WellSense_Mass_Provider_Communications_PA_Updates_10_31_25.pdf' }, { title: 'Carelon Behavioral Health — Massachusetts Addendum (114_0526 rev.)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/ma/massachusetts-provider-addendum.pdf' }, { title: '130 CMR 450.303 — MassHealth prior authorization (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-303' }, { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
        verifyVia:
          'The reauthorization lead time the member\'s BH administrator expects: MBHP/Carelon via ProviderConnect, WellSense, Point32Health for Tufts, or Optum for Mass General Brigham.',
      },
      coordinationOfBenefits: {
        value:
          'MassHealth pays last. Under federal law Medicaid is the payer of last resort. When other coverage is known, the agency "must reject the claim and return it to the provider" to bill the other payer first (42 CFR 433.139). MassHealth\'s rule puts the work on the provider. Under 130 CMR 450.316, "diligent efforts" mean asking the family about other insurance and checking EVS on each date of service, "submitting claims to all insurers," and "complying with the insurer\'s billing and authorization requirements." If the primary denies for "failure to obtain prior authorization" or for "providing services outside the service network," MassHealth treats that as a failure of diligent efforts. MassHealth also pays nothing if the provider "did not participate in the member\'s other health insurance plan." A claim for a service another insurer may cover is denied "unless the claim is accompanied by a final disposition from each insurer" (450.317(D)). MassHealth then pays no more than the member\'s remaining copay, coinsurance and deductible, capped at its own rate. In practice, be in the commercial plan\'s network, get its ABA authorization, bill it first, then bill MassHealth for the balance with its EOB. For ABA this situation is common. CommonHealth "may cover the co-pays for ABA, but the claims must be submitted by the primary insurer" first. A provider outside MBHP\'s network "will need to obtain a single-case or out-of-network agreement" for those copays to be paid. When the provider finds insurance that EVS does not show, it must copy both sides of the card and send the details to MassHealth (450.316(E)). TRICARE pays before MassHealth: "By law, TRICARE pays after all other health insurance, except for: Medicaid." The federal pay-and-chase exception for preventive pediatric (EPSDT) services is not applied to ABA in any MassHealth source read, so do not count on it. No MassHealth source read says whether the member\'s BH administrator also requires its own ABA PA while MassHealth is secondary. The PA rule says only that PA "does not establish or waive any other prerequisites for payment, such as ... resort to health-insurance payment."',
        status: 'verified',
        cites: [{ title: '42 CFR 433.139 — Medicaid payment of claims involving third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' }, { title: '130 CMR 450.316 — MassHealth third-party liability: requirements (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-316' }, { title: '130 CMR 450.317 — MassHealth third-party liability: payment limitations (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-317' }, { title: '130 CMR 450.303 — MassHealth prior authorization (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-303' }, { title: 'MassHealth — Coordination of Benefits for MassHealth Providers (upd. 4/12/2024)', url: 'https://www.mass.gov/info-details/coordination-of-benefits-for-masshealth-providers' }, { title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' }, { title: 'TRICARE — Using Other Health Insurance', url: 'https://tricare.mil/Plans/OHI' }],
        verifyVia:
          'Whether the member\'s BH administrator (MBHP, WellSense, Point32Health, Carelon for Fallon, Optum for MGB) requires its own ABA PA when MassHealth is secondary, which the regulations read here do not say.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Massachusetts publishes a supervision band, and it is the field with live money attached. LABA supervision must be delivered to Behavior Technician-level staff \u201cduring direct service with the Member, as clinically indicated but no less than 10 percent of direct service hours and should not exceed 25 percent of direct hours without documented clinical rationale.\u201d For members engaged in 10 hours or less of direct treatment per month, the LABA must deliver a minimum of one hour of direct supervision per month. The Behavior Technician works under the direct supervision of a LABA licensed per 262 CMR 10.00 \u2014 a BCBA certificate alone does not qualify \u2014 and the provider agency must ensure LABAs supervise all BTs and that every staff member has had a background record check. Falling below the band is not theoretical: the CY2024 encounter audit recouped against a 1:10 floor, so staff and schedule to at least one supervision hour per ten direct hours.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not resolved in the published Massachusetts documents. The performance specification does carry one concurrency prohibition, but it is about siblings, not codes: in group caregiver training, \u201cproviders may not bill concurrently for services delivered to multiple children from the same family. When a parent/caregiver has more than one child receiving services, only one child\u2019s session may be billed at a time.\u201d The spec requires LABA supervision to be delivered during the BT\u2019s direct service with the member, and MassHealth\u2019s CY2024 audit measured 97155 hours against 97153 hours \u2014 but neither document states in terms that both codes may be billed for the same clock time.',
        status: 'unverified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'The behavioral-health administrator behind the member\u2019s plan \u2014 Carelon/MBHP via ProviderConnect, WellSense\u2019s in-house BH team, Point32Health for Tufts, or Optum for Mass General Brigham. Ask whether 97155 pays alongside 97153 for the same clock time.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Massachusetts is a no-cap state that nonetheless has one published per-day number. There are no annual, lifetime or unit-of-service ceilings on the EPSDT benefit, and 101 CMR 358.03 is a rate regulation, not a limit regulation \u2014 it fixes per-15-minute rates and states they are \u201cfull compensation\u201d including \u201cnecessary administration and professional supervision associated with patient care.\u201d The only per-day cap in the performance specification is for group instruction, which \u201cmay occur up to 4.5 hours a day as clinically indicated, in groups of 2-8 Members.\u201d No per-code MUE regime is published, so what bites in practice is medical-necessity review and the supervision-ratio audit, not a unit edit.',
        status: 'verified',
        cites: [{ title: '101 CMR 358.03 Rate Provisions (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/101-CMR-358-03' }, { title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
      },
      noteSignature: {
        value:
          'Both clinicians document, and the spec says what the note must contain rather than who countersigns it. \u201cThe LABA and BT document each contact in a progress report or notes in the ABA provider\u2019s file for the Member,\u201d and session notes must include how treatment time was utilized, the treatment interventions utilized, and the member\u2019s response to treatment. The complete record must also hold referral and assessment documentation, treatment plans and progress reports, \u201cevidence of supervision and training, including policies, procedures, and implementation,\u201d the IEP and IFSP where applicable, and documentation confirming PCP physical examinations. No co-signature requirement and no signing deadline are stated.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
      },
      placeOfService: {
        value:
          'Home and community, with school carved out. ABA \u201cis delivered by a contracted and credentialed provider in a variety of settings within a Member\u2019s home and community,\u201d and \u201cservices provided in a school setting are distinct and separate from those covered by the health plan and are typically covered by the educational system\u2019s special education resources as part of the Individualized Education Program (IEP) pursuant to Public Law 94-142.\u201d Providers \u201cmust not direct, limit, or discourage access to other medically necessary or school-based services.\u201d Transition planning contemplates moving a member \u201cfrom a center based setting to home/community settings,\u201d so centers are in scope. Group homes are not addressed.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Group-home delivery is addressed by none of the published documents \u2014 confirm with the member\u2019s BH administrator.',
      },
      billAsProvider: {
        value:
          'Not published. Neither 101 CMR 358 nor the ABA performance specification names whose NPI carries the claim for technician-delivered 97153, and the rate regulation is explicitly single-tier \u2014 one rate per code, no credential-level modifiers \u2014 so there is no modifier to signal the renderer.',
        status: 'unverified',
        cites: [{ title: '101 CMR 358.03 Rate Provisions (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/101-CMR-358-03' }],
        verifyVia:
          'The member\u2019s BH administrator and your contract; the rate regulation settles price, not claim identity.',
        blocker: 'per-case',
      },
    },
    pill: 'Payer Guide · MassHealth',
    h1: 'MassHealth (Massachusetts Medicaid) ABA coverage: the intake guide.',
    metaTitle: 'MassHealth ABA Coverage, Rates & Prior Authorization Guide | Carelu',
    metaDescription:
      'How MassHealth covers ABA under EPSDT — the six behavioral-health administrators (MBHP, Carelon, Tufts, Optum), the Massachusetts Standard ABA PA Form, 101 CMR 358 rates and the 2026 rate freeze, the 1:10 supervision audit, and the new Down syndrome pathway.',
    intro: [
      'MassHealth covers ABA for members under 21 through the EPSDT benefit — with no annual or lifetime dollar or unit caps — and administers it entirely through managed care. There is no fee-for-service ABA front door: MassHealth sets the rates (101 CMR 358) and the benefit is authorized by several behavioral-health administrators across the plan landscape — MBHP (a Carelon company), Carelon itself for Fallon\'s plans, WellSense\'s own in-house BH team (since it insourced from Carelon effective January 1, 2026), Tufts Health Together\'s internal UM, and Optum for Mass General Brigham Health Plan. Which administrator a family\'s plan routes to is the first fact intake needs, because it decides the form, the portal, and — as of 2026 — how hard the state\'s 1:10 supervision-ratio audit lands on your claims.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — under 21 (Standard/CommonHealth) via EPSDT; under 19 on Family Assistance' },
      { label: 'Annual limit', value: 'None — no dollar or unit-of-service caps; EPSDT medical necessity governs' },
      { label: 'Prior auth', value: 'Required for all ABA services/hours/units — assessment and treatment alike' },
      { label: 'Auth periods', value: 'Up to 6 months (standard form); initial-evaluation requests may cover 3 months' },
      { label: 'Rates (per 15 min)', value: '97153 $16.37 · 97151/97155/97156 $30.73 · 97154 $13.91 (101 CMR 358)' },
      { label: 'Administered by', value: 'MBHP, Carelon (Fallon), WellSense in-house (since 1/1/2026, was Carelon), Tufts internal UM, Optum (MGB)' },
      { label: 'Supervision watch', value: 'CY2024 audit enforces a 1:10 97155:97153 floor — recoupment letters issued Feb–Mar 2026' },
      { label: 'Staff screening', value: 'RBT not required (3 BT pathways); plan-level BRC + 262 CMR 8.04 employer checks — no blanket state CORI mandate' },
    ],
    sections: [
      {
        h2: 'Coverage & benefit',
        body: [
          'ABA is an EPSDT service for MassHealth Standard and CommonHealth members under 21 (under 19 on Family Assistance), with coverage driven by medical necessity — no annual or lifetime dollar caps, no unit-of-service limits. Historically the diagnosis gate was autism: a comprehensive assessment aligned with DSM criteria across the core ASD deficits, completed by a licensed physician, APRN, physician assistant, or psychologist experienced in ASD diagnosis and treatment. Effective January 1, 2026, Chapter 388 of the Acts of 2024 opens a second pathway: ABA for a primary, sole diagnosis of Down syndrome (Trisomy 21) confirmed by genetic testing — the standard PA form already carries the Down syndrome checkbox. One boundary for the youngest referrals: ABA cannot duplicate services the child already receives through Early Intervention.',
        ],
        cites: [
          { title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' },
          { title: 'The Arc of Massachusetts — ABA for Down syndrome expansion (eff. 1/1/2026)', url: 'https://thearcofmass.org/post/expansion-of-coverage-of-applied-behavior-analysis-aba-for-individuals-with-down-syndrome/' },
          { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' },
        ],
      },
      {
        h2: 'Six administrators, one benefit',
        body: [
          'MassHealth managed care is a lattice of 15 Accountable Care Partnership Plans, 2 Primary Care ACOs, 2 MCOs, and the PCC Plan (roster per the April 2023 state deck; the current lineup — including Steward Health Choice\'s status after Steward\'s collapse, and the Tufts Health Together MCO\'s discontinuation effective 1/1/2026 — should be re-verified). What matters operationally is who authorizes ABA: PCC Plan, Primary Care ACO, and Health New England BeHealthy members route to MBHP; Fallon\'s ACPPs route to Carelon; WellSense\'s plans (Essential MCO + 8 ACPPs) administer ABA in-house as of January 1, 2026, having insourced from Carelon; Tufts Health Together runs its own internal UM; and Mass General Brigham Health Plan routes to Optum. Nearly all of them use the multi-payer Massachusetts Standard ABA PA Form — request types for initial evaluation, initial services, continued services, and amendments; the form says the BCBA rendering and/or supervising the services "should" complete it, while the requirement that the analyst be a LABA licensed under 262 CMR 10.00 comes from the Carelon/MBHP performance specification, not the form — with continued authorizations capped at 6 months. The one defector: as of October 2025, Tufts Health Together uses Point32Health\'s own updated ABA PA form instead of the state standard form — so "which plan?" also decides "which form?". Confirmed as of this review: Point32Health\'s own 2026 Public Plans Provider Manual (Behavioral Health chapter) describes Tufts Health Public Plans\' behavioral-health team running BH clinical review, PA, and medical-necessity determinations entirely in-house — no mention anywhere of Carelon, Optum, Beacon, or any external BH vendor for Tufts — corroborating the internal-UM claim with a second, independent Point32Health document.',
        ],
        cites: [
          { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' },
          { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' },
          { title: 'Point32Health — ABA policy and coverage updates (Oct 2025)', url: 'https://www.point32health.org/provider/applied-behavioral-analysis-policy-and-coverage-updates-102025' },
          { title: 'Point32Health — Tufts Health Public Plans Provider Manual, Behavioral Health chapter (2026)', url: 'https://www.point32health.org/documents/thpp-08-bh-pm' },
          { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' },
        ],
      },
      {
        h2: 'The 1:10 supervision audit — active enforcement risk',
        body: [
          'MassHealth audited CY2024 encounter data across all six ABA-administering plans and, via Carelon, issued recoupment letters in February–March 2026 enforcing a minimum 1:10 supervision ratio — one hour of protocol modification (97155) for every ten hours of direct treatment (97153). Ratios of 10:1 to 19:1 drew partial recoupment; 20:1 and beyond drew full recoupment of direct-service payments. A provider coalition (MPAAQ, MassABA, BABAT) is disputing the methodology and litigation has been threatened — but until that resolves, treat 1:10 as the operating floor. The intake and staffing implication is concrete: every ten hours of weekly 97153 you promise a family carries an hour of BCBA/LABA supervision your schedule must actually deliver, so capacity planning — not just authorization — is what keeps the revenue.',
        ],
        cites: [
          { title: 'MassHealth ABA supervision audit & recoupment (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-supervision-audit-recoupment-litigation-2026/' },
        ],
      },
      {
        h2: 'Rates: single-tier, and frozen',
        body: [
          '101 CMR 358.03 pays a single rate per code — no credential-tier modifiers; each rate is "full compensation" including necessary administration and professional supervision. Per 15-minute unit: 97151, 97155, and 97156 at $30.73; 97153 at $16.37 (about $65.48/hour); 97154 at $13.91; 97157 at $26.12 — effective September 27, 2024 (published as the October 1, 2024 schedule). Confirmed directly against EOHHS\'s own filing (accessed 10/1/2026): EOHHS filed a proposed re-adoption of 101 CMR 358.00 on May 22, 2026, held a remote public hearing on June 17, 2026, and both the proposed regulation text and the staff testimony state the same conclusion verbatim — "the proposed amendments maintain all rates established in 101 CMR 358.00 at their existing levels," for dates of service on or after December 1, 2026. As of this review the regulation is still in proposed/hearing-record status (no final-adoption notice for the 12/1/2026 cycle was located) — a rate freeze some providers are contesting, noting 97153 at ~$65/hour trails states like Arizona (~$88) and Maryland (~$83) per a secondary tracker; MCEs generally pay at or near this schedule, but plan contracts govern — whether a given plan pays exactly the schedule is a contracting question, not a lookup.',
        ],
        cites: [
          { title: '101 CMR 358.03 Rate Provisions (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/101-CMR-358-03' },
          { title: 'EOHHS — Proposed Regulation, 101 CMR 358.00: Rates for Applied Behavior Analysis (filed 5/22/2026, proposed eff. 12/1/2026) (accessed 10/1/2026)', url: 'https://www.mass.gov/doc/proposed-regulation-date-filed-may-22-2026/download' },
          { title: 'EOHHS — Staff testimony, Rates for Applied Behavior Analysis, remote public hearing June 17, 2026 (accessed 10/1/2026)', url: 'https://www.mass.gov/doc/staff-testimony-for-rates-for-applied-behavior-analysis-presented-at-the-remote-public-hearing-on-june-17-2026-0/download' },
          { title: 'MassHealth ABA rate freeze — 101 CMR 358 re-adoption (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-reimbursement-rate-freeze-101-cmr-358/' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'Massachusetts does not require RBT certification for technicians — and has no state registry or license for them. Under the Carelon/MBHP ABA performance specification (updated February 15, 2026), a Behavior Technician must be 18 or older, work under the direct supervision of a Licensed Applied Behavior Analyst (LABA), and meet one of three pathways: a high school diploma or GED plus 12 months\' experience with people with developmental disabilities, children, or families; an associate\'s degree in a human, social, or educational services discipline plus 6 months\' experience; or BACB RBT certification plus 3 months\' experience. That first pathway makes the MassHealth hiring pool meaningfully wider than in RBT-mandate states. Techs hired via the RBT route still carry the BACB\'s own floor: the 40-hour training, competency assessment, exam ($65 BACB + $45 Pearson VUE in 2026), and — often missed — a BACB-required criminal background check plus abuse-registry check passed no more than 180 days before the application, confirmed by an independent Attesting Certificant.',
          'On background checks, know where the obligation actually comes from: Massachusetts CORI checks are not state-mandated for MassHealth ABA providers. 101 CMR 15.03 requires CORI only for EOHHS, its agencies, and vendor programs, and expressly states that MassHealth providers are not subject to it solely by virtue of their status (an agency that also holds a DDS/DCF purchase-of-service contract does fall within the mandatory scope, and EOHHS retains discretion to consider CORI in participation decisions). The binding checks sit elsewhere: the Carelon/MBHP spec requires the ABA provider to ensure all staff have received a background record check (BRC); 262 CMR 8.04 obligates LABAs who employ unlicensed paraprofessionals to conduct criminal background checks and makes them professionally responsible for those staff\'s clinical oversight; and 42 CFR 455.436 federal exclusion screening (OIG LEIE and SAM, checked at enrollment and no less than monthly) is the floor most agencies mirror with monthly staff screening.',
          'Supervisors must hold the state license — the MBHP spec requires the supervising analyst to be licensed per 262 CMR 10.00, so a BCBA certificate alone does not satisfy the credentialed-team definition. LABA licensure (262 CMR 10.03) takes a qualifying graduate degree, supervised fieldwork (1,500 hours independent / 1,000 practicum / 750 intensive practicum), and the Board-approved exam; assistant-level LAABAs (262 CMR 10.04) must receive at least one hour per month of individual face-to-face supervision from a LABA, who must approve all treatment plans before treatment. The staffing ratio that binds capacity is the spec\'s supervision band: LABA supervision at no less than 10% of Behavior Technician direct-service hours (not above 25% without documented clinical rationale; minimum one hour per month for members with 10 or fewer direct hours) — and per the CY2024 audit, falling below 10% drew partial recoupment while falling below 5% drew full recoupment of direct-service payments. Round it out with the spec\'s hire-plus-annual staff training across 16 enumerated topics and its bar on staff having any pre-existing non-clinical relationship with the member.',
        ],
        cites: [
          { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' },
          { title: 'BACB RBT Handbook (upd. 06/2026)', url: 'https://www.bacb.com/wp-content/uploads/2025/08/RBTHandbook_260529-2-a.pdf' },
          { title: '101 CMR 15.03 — EOHHS Criminal Offender Record Checks, Scope (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/massachusetts/101-CMR-15-03' },
          { title: '262 CMR 8.04 — Standards of Conduct for LABAs/LAABAs (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/massachusetts/262-CMR-8-04' },
          { title: '262 CMR 10.03 — Applied Behavior Analyst Licensure (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/massachusetts/262-CMR-10-03' },
          { title: '42 CFR 455.436 — Federal database checks (Cornell LII)', url: 'https://www.law.cornell.edu/cfr/text/42/455.436' },
        ],
      },
      {
        h2: 'What happens when a family switches ABA providers?',
        body: [
          'MassHealth publishes no rule on whether an existing ABA authorization follows the child to a new agency, so ask the member\'s behavioral-health administrator before the switch. What the Carelon/MBHP ABA performance specification does set is the handoff. The agency the family is leaving keeps a transition plan that names the planned discharge setting, schedules a discharge planning meeting when the family "no longer wants the service," and must "include an up-to-date copy of the treatment plan, which is given to the caregiver/guardian on the last date of service and to all current providers within seven days of the last date of service." If services end unplanned, it "makes every effort to contact the parent/caregiver" and to "provide appropriate referrals." On the receiving side, a provider that cannot start within 14 days of authorization must keep a waitlist and "offer caregivers contact information for alternative providers in the region who are accepting new clients," and once an initial authorization is approved it must offer the family a face-to-face interview within two business days.',
        ],
        cites: [
          { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' },
        ],
      },
      {
        h2: 'What is MassHealth’s timely filing limit?',
        body: [
          'For claims billed to MassHealth directly, 90 days: “all claims must be received by the MassHealth agency within 90 days from the date of service or the date of the explanation of benefits from another insurer,” measured from the latest date when a service runs on consecutive dates (130 CMR 450.309, under M.G.L. c. 118E, § 38). Late claims that fit a listed exception need a 90-day waiver request, submitted electronically. Members whose ABA runs through MBHP or a managed care plan follow that administrator’s filing limit.',
        ],
        cites: [
          { title: '130 CMR 450.309 — Claims: billing deadlines (MassHealth)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-309' },
        ],
      },
      {
        h2: 'How fast does MassHealth pay a clean claim?',
        body: [
          'For claims MassHealth pays directly, the federal rule sets the clock: the agency “must pay 90 percent of all clean claims from practitioners, who are in individual or group practice or who practice in shared health facilities, within 30 days of the date of receipt,” 99 percent within 90 days, and all other claims within 12 months of receipt (42 CFR 447.45(d)). Most ABA members are enrolled with an ACO, MCO or MBHP, and each of those plans pays on its own schedule: WellSense aims for 30 calendar days and states that there is no late-payment penalty on MassHealth claims, Tufts Health Together sends a weekly explanation of payment, and Carelon’s documents for Fallon publish no day count. See each plan’s guide.',
        ],
        cites: [
          { title: '42 CFR 447.45(d) — Medicaid timely claims processing (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-447/subpart-A/section-447.45' },
        ],
      },
      {
        h2: 'Which codes does MassHealth pay for ABA? (H0031 and other H-codes)',
        body: [
          'The rate regulation is the code list. 101 CMR 358.03(3) prices seven codes: 97151, 97153, 97154, 97155, 97156, 97157, and one HCPCS code, H0031-U2 (“Mental health assessment by physician or other qualified health professional (Assessment and case planning for home services by a licensed professional. 15-minute rate.)”), at $30.73 a unit. 97152, 97158, 0362T, 0373T and H0032 carry no MassHealth rate. The proposed re-adoption filed May 22, 2026 for dates of service from December 1, 2026 keeps the same seven codes and the same rates; the mass.gov regulation page still showed the 10/01/2024 version on October 18, 2026. Each managed care plan’s own code list governs its members (Tufts Health Together, for example, lists H0031 for BCBA assessment and treatment planning).',
        ],
        cites: [
          { title: '101 CMR 358.03 Rate Provisions (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/101-CMR-358-03' },
          { title: 'EOHHS — Proposed Regulation, 101 CMR 358.00: Rates for Applied Behavior Analysis (filed 5/22/2026, proposed eff. 12/1/2026)', url: 'https://www.mass.gov/doc/proposed-regulation-date-filed-may-22-2026/download' },
        ],
      },
    ],
    collect: [
      { title: 'Plan → BH administrator', desc: 'PCC/ACO/HNE → MBHP; Fallon → Carelon; WellSense → in-house (since 1/1/2026, previously Carelon); Tufts Together → Point32 internal; MGB → Optum. It decides the form and portal.' },
      { title: 'Diagnosis + diagnostic report', desc: 'Comprehensive DSM-aligned ASD evaluation by a qualified licensed diagnostician — or, from 1/1/2026, genetic-testing confirmation of Down syndrome.' },
      { title: 'MassHealth plan type + age', desc: 'Standard/CommonHealth covers under 21; Family Assistance under 19 — the EPSDT clock differs.' },
      { title: 'LABA on the case', desc: 'The standard PA form is completed by the LABA rendering or supervising services — name one before submission.' },
      { title: 'Early Intervention status', desc: 'For under-3s: ABA can\'t duplicate EI services — map what EI already delivers.' },
    ],
    sources: [
      { title: '101 CMR 358.00 — Rates for Applied Behavior Analysis (official regulation page)', url: 'https://www.mass.gov/regulations/101-CMR-35800-rates-of-payment-for-applied-behavior-analysis-0' },
      { title: '101 CMR 358.03 Rate Provisions (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/101-CMR-358-03' },
      { title: 'MassHealth ABA Provider FAQ (mass.gov)', url: 'https://www.mass.gov/doc/applied-behavioral-analysis-provider-frequently-asked-questions/download' },
      { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' },
      { title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' },
      { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' },
      { title: 'MassHealth ABA supervision audit & recoupment (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-supervision-audit-recoupment-litigation-2026/' },
      { title: 'MassHealth ABA rate freeze — 101 CMR 358 re-adoption (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-reimbursement-rate-freeze-101-cmr-358/' },
      { title: 'EOHHS — Proposed Regulation, 101 CMR 358.00: Rates for Applied Behavior Analysis (filed 5/22/2026, proposed eff. 12/1/2026) (accessed 10/1/2026)', url: 'https://www.mass.gov/doc/proposed-regulation-date-filed-may-22-2026/download' },
      { title: 'EOHHS — Staff testimony, Rates for Applied Behavior Analysis, remote public hearing June 17, 2026 (accessed 10/1/2026)', url: 'https://www.mass.gov/doc/staff-testimony-for-rates-for-applied-behavior-analysis-presented-at-the-remote-public-hearing-on-june-17-2026-0/download' },
      { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' },
      { title: 'BACB RBT Handbook (upd. 06/2026)', url: 'https://www.bacb.com/wp-content/uploads/2025/08/RBTHandbook_260529-2-a.pdf' },
      { title: '101 CMR 15.03 — EOHHS Criminal Offender Record Checks, Scope (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/massachusetts/101-CMR-15-03' },
      { title: '262 CMR 8.04 — Standards of Conduct for LABAs/LAABAs (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/massachusetts/262-CMR-8-04' },
      { title: '262 CMR 10.03 — Applied Behavior Analyst Licensure (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/massachusetts/262-CMR-10-03' },
      { title: '42 CFR 455.436 — Federal database checks (Cornell LII)', url: 'https://www.law.cornell.edu/cfr/text/42/455.436' },
      { title: 'The Arc of Massachusetts — ABA for Down syndrome expansion (eff. 1/1/2026)', url: 'https://thearcofmass.org/post/expansion-of-coverage-of-applied-behavior-analysis-aba-for-individuals-with-down-syndrome/' },
      { title: 'Point32Health — ABA policy and coverage updates (Oct 2025)', url: 'https://www.point32health.org/provider/applied-behavioral-analysis-policy-and-coverage-updates-102025' },
      { title: 'Point32Health — Tufts Health Public Plans Provider Manual, Behavioral Health chapter (2026)', url: 'https://www.point32health.org/documents/thpp-08-bh-pm' },
      { title: 'MassHealth All Provider Bulletin 379 — Access to Health Services through Telehealth Options (October 2023)', url: 'https://www.mass.gov/doc/all-provider-bulletin-379-access-to-health-services-through-telehealth-options-0/download' },
      { title: 'MassHealth Managed Care Entity Bulletin 115 — Telehealth for members enrolled in managed care entities (April 2024)', url: 'https://www.mass.gov/doc/managed-care-entity-bulletin-115-access-to-health-services-through-telehealth-options-for-members-enrolled-in-managed-care-entities-0/download' },
      { title: '130 CMR 450.309 — Claims: billing deadlines (MassHealth)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-309' },
      { title: '42 CFR 447.45(d) — Medicaid timely claims processing (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-447/subpart-A/section-447.45' },
    ],
    faq: [
      { q: 'Does MassHealth cover ABA therapy?', a: 'Yes — for members under 21 (under 19 on Family Assistance) through EPSDT, with no annual or lifetime dollar or unit caps. Prior authorization is required for all ABA services, submitted to the behavioral-health administrator behind the member\'s plan.' },
      { q: 'Is an autism diagnosis required for MassHealth ABA?', a: 'Historically yes — a comprehensive DSM-aligned assessment by a qualified licensed diagnostician. Effective January 1, 2026, Chapter 388 of the Acts of 2024 adds a second pathway: a sole diagnosis of Down syndrome confirmed by genetic testing.' },
      { q: 'What does MassHealth pay for ABA?', a: 'Single-tier rates per 101 CMR 358.03: 97153 at $16.37 per 15-minute unit (~$65/hour), 97151/97155/97156 at $30.73, 97154 at $13.91 — effective since late September 2024, with an unchanged re-adoption proposed through December 2026. Plans generally pay at or near this schedule, but contracts govern.' },
      { q: 'What is the MassHealth 1:10 supervision rule?', a: 'MassHealth\'s CY2024 audit enforced a minimum one hour of 97155 supervision per ten hours of 97153 direct treatment; ratios above that drew partial or full recoupment (letters issued Feb–Mar 2026, currently disputed by provider groups). Staff and schedule to at least 1:10.' },
      { q: 'Can the ABA assessment or BCBA supervision be done by telehealth under MassHealth?', a: 'Yes. MassHealth\'s telehealth bulletin (All Provider Bulletin 379) excludes no ABA code, every managed-care plan must be at least as generous (MCE Bulletin 115), and the ABA performance specification allows telehealth at the family\'s request when clinically appropriate. Bill POS 02 or 10 with modifier 95 (video) or 93 (audio-only). Telehealth must not replace in-person availability.' },
      { q: 'What happens to a MassHealth ABA authorization if the family switches providers?', a: 'No MassHealth document says whether it transfers, so ask the member\'s behavioral-health administrator before the switch. The agency the family leaves must give the family an up-to-date treatment plan on the last day of service and send it to the child\'s other current providers within seven days.' },
      { q: 'What is MassHealth’s timely filing limit?', a: '90 days from the date of service, or from the other insurer’s explanation of benefits, for claims billed to MassHealth directly (130 CMR 450.309). Plan- and MBHP-administered ABA follows the administrator’s own limit.' },
      { q: 'How fast does MassHealth pay a clean ABA claim?', a: 'On claims MassHealth pays directly, federal rule 42 CFR 447.45(d) requires 90 percent of clean practitioner claims paid within 30 days of receipt and 99 percent within 90 days. ABA billed through an ACO, MCO or MBHP follows that plan’s own payment schedule.' },
      { q: 'Does MassHealth accept H0031 for ABA?', a: 'Yes, as H0031-U2: 101 CMR 358.03 pays it at $30.73 per 15 minutes for assessment and case planning by a licensed professional. 97152, 97158, 0362T, 0373T and H0032 have no MassHealth ABA rate.' },
    ],
  },

  'mbhp-massachusetts': {
    slug: 'mbhp-massachusetts',
    cardDesc: 'The biggest MA ABA gatekeeper: PCC Plan + Primary Care ACOs + HNE, Carelon-run, standard form.',
    assessmentPA: {
      value: 'Required — Massachusetts Standard ABA PA Form process; submissions via Carelon\'s ProviderConnect portal',
      status: 'verified',
      cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Carelon Behavioral Health — Massachusetts forms & guides', url: 'https://www.carelonbehavioralhealth.com/providers/forms-and-guides/ma' }],
    },
    treatmentPA: {
      value: 'Required — 6-month authorization periods, per the state standard-form process',
      status: 'verified',
      cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Carelon Behavioral Health — Massachusetts forms & guides', url: 'https://www.carelonbehavioralhealth.com/providers/forms-and-guides/ma' }],
    },
    dxRequired: {
      value: 'Yes — ASD via comprehensive DSM-aligned assessment; from 1/1/2026 also sole-diagnosis Down syndrome (state baseline)',
      status: 'verified',
      cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
    },
    family: 'carelon',
    payer: 'Massachusetts Behavioral Health Partnership (MBHP)',
    state: 'MA', kind: 'medicaid-mco', parent: 'MassHealth',
    intakeGates: {
      ageLimit: {
        value:
          'EPSDT sets the bound, and nothing else does. ABA is covered for MassHealth Standard and CommonHealth members under 21, and for Family Assistance members under 19 — with no lower age bound and no dollar, visit or unit-of-service cap underneath it. For the youngest referrals the binding rule is non-duplication rather than age: ABA cannot duplicate services the child already receives through Early Intervention. From 1/1/2026 the second diagnostic pathway (sole-diagnosis Down syndrome) rides the same age structure. MBHP applies this baseline unchanged — it is the state program\'s own vendor.',
        status: 'verified',
        cites: [{ title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' }],
      },
      dxRecency: {
        value:
          'Not published. Neither the Massachusetts Standard ABA PA Form nor the Carelon/MBHP performance specification sets a maximum age for the diagnostic evaluation — the form asks for the current ICD-10 diagnosis and, on a "Request for initial evaluation," a copy of the comprehensive assessment, but names no recency window. What the form does date is utilization, not diagnosis: the continued-services page makes the BCBA attest whether at least 75% of the previously authorized direct-service hours were used.',
        status: 'unverified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Carelon/MBHP provider relations via ProviderConnect; MassHealth\'s ABA Provider FAQ on mass.gov is 403 to automated clients and needs human retrieval.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value:
          'The standard form names them, and the list is broader than "send them to a developmental pediatrician." For autism it requires "A comprehensive assessment completed by a licensed physician (i.e. PCP, etc.), advanced practice registered nurse, physician\'s assistant, or psychologist experienced in the diagnosis and treatment of ASD with developmental or child/adolescent experience which aligns with DSM criteria across ASD core deficits." For the 1/1/2026 pathway it requires instead "A diagnosis of Down Syndrome (Trisomy 21) confirmed by genetic testing." Note the two signatures are different people: the diagnostician writes the assessment, while the form itself "should" be completed by the BCBA rendering and/or supervising the services — an analyst the performance specification requires to be a LABA licensed under 262 CMR 10.00.',
        status: 'verified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
      },
      diagnosticTools: {
        value:
          'No instrument is mandated. The standard form requires a comprehensive assessment "which aligns with DSM criteria across ASD core deficits" without naming ADOS-2, ADI-R, CARS-2 or any other tool, and the performance specification names no diagnostic battery either; the Down syndrome pathway replaces the instrument question entirely with genetic testing. Massachusetts puts its measurement requirement downstream of intake instead — in progress documentation and medical-necessity review, not in the diagnostic gate.',
        status: 'verified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
      },
      referral: {
        value:
          'No referral and no physician order is a condition of authorization. The Massachusetts Standard ABA PA Form has no referral field and is completed by the rendering or supervising BCBA/LABA, and the performance specification\'s referral language is about timeliness rather than permission: "Fourteen calendar days from referral is the Medicaid standard of timely provision for services established in accordance with 42 CFR 441.56(e)," with a waitlist duty (and an obligation to hand caregivers other regional providers\' contact information) where the provider cannot start inside it. What the state does require is PCP evidence in the chart rather than at the door: the complete medical record must hold "Referral and assessment documentation" and "Documentation confirming physical examinations by a PCP," and the continued-services pages ask for a dated primary-care care-coordination entry.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }, { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
      },
      telehealth: {
        value:
          'Permitted at the family\'s request, with no ABA-specific code list. The ABA provider "may deliver services and consultation via a Health Insurance Portability and Accessibility Act (HIPAA)-compliant telehealth platform at the parent/caregiver\'s request and if the service can be effectively delivered via telehealth as part of the intervention when appropriate," with the rationale documented and the documentation reflecting "clinical considerations for appropriateness across any service components being delivered via telehealth." Two guardrails ride along: telehealth "must not replace in-person availability," and the member or family "may rescind consent for telehealth at any time without risk of interruption of services." The specification itself publishes no per-code restriction, modifier or place-of-service code. This is MBHP\'s own specification — the document every other Massachusetts plan is measured against. State floor, which binds this plan: Managed Care Entity Bulletin 115 (April 2024) requires every MassHealth ACPP, MCO and the behavioral-health vendor to keep a telehealth policy "no more restrictive than" All Provider Bulletin 379. That bulletin allows any covered service outside a short excluded list (ABA is not on it), so the 97151 assessment and 97155 supervision included, by live video or audio-only when clinically appropriate and with member consent, paid at parity with in-person and billed with POS 02 (not in the home) or POS 10 (in the home) and modifier 95 (audio-video) or 93 (audio-only). No minimum share of in-person supervision is published.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }, { title: 'MassHealth All Provider Bulletin 379 — Access to Health Services through Telehealth Options (October 2023)', url: 'https://www.mass.gov/doc/all-provider-bulletin-379-access-to-health-services-through-telehealth-options-0/download' }, { title: 'MassHealth Managed Care Entity Bulletin 115 — Telehealth for members enrolled in managed care entities (April 2024)', url: 'https://www.mass.gov/doc/managed-care-entity-bulletin-115-access-to-health-services-through-telehealth-options-for-members-enrolled-in-managed-care-entities-0/download' }],
        verifyVia:
          'Which CPT codes and place-of-service codes the member\'s BH administrator actually pays for telehealth — the performance specification sets the clinical conditions, not the billing.',
      },
      authTurnaround: {
        value:
          'MBHP is the behavioral-health vendor behind MassHealth\'s PCC Plan / Prepaid Inpatient Health Plan (PIHP) model. The federal managed-care authorization rule covers every "MCO, PIHP, or PAHP," so it binds MBHP\'s ABA decisions. For rating periods that start on or after January 1, 2026, a standard decision is due "as expeditiously as the enrollee\'s condition requires" and within state-set timeframes that "may not exceed 7 calendar days after receiving the request for service" (it was 14 before 2026). That can be extended "up to 14 additional calendar days" if the family or provider asks, or if the plan justifies needing more information. An expedited decision is due "no later than 72 hours after receipt of the request for service." Expedited applies when the provider indicates that the standard clock "could seriously jeopardize the enrollee\'s life or health or ability to attain, maintain, or regain maximum function." The clock runs from receipt of the request. Once an initial authorization is approved, the performance specification gives the provider "two business days" to offer the family a face-to-face interview. It also counts the 14-day timely-start standard from the "point of authorization for onset of services." Neither the standard form nor the performance specification publishes a reauthorization lead time. Continued services are requested in up to 6-month windows. MBHP\'s own provider manual returned a "System Outage" page when fetched, so a shorter MBHP-specific clock cannot be ruled out. Nothing may be longer than the federal limit.',
        status: 'verified',
        cites: [{ title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' }, { title: 'CMS — Massachusetts FY2019 Focused Program Integrity Review (PCCM/PIHP model; MBHP)', url: 'https://www.cms.gov/files/document/massachusetts-fy19-focused-pi-review-final-report.pdf' }, { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }, { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
        verifyVia:
          'MBHP Provider Manual (masspartnership.com, "System Outage" when fetched 9/2026) or Carelon/MBHP provider relations: MBHP\'s own ABA decision clock and reauthorization lead time.',
      },
      coordinationOfBenefits: {
        value:
          'MBHP pays as MassHealth, so MassHealth pays last. MassHealth\'s rule puts the work on the provider. Under 130 CMR 450.316, "diligent efforts" mean asking the family about other insurance and checking EVS on each date of service, "submitting claims to all insurers," and "complying with the insurer\'s billing and authorization requirements." If the primary denies for "failure to obtain prior authorization" or for "providing services outside the service network," MassHealth treats that as a failure of diligent efforts. MassHealth also pays nothing if the provider "did not participate in the member\'s other health insurance plan." A claim for a service another insurer may cover is denied "unless the claim is accompanied by a final disposition from each insurer" (450.317(D)). MassHealth then pays no more than the member\'s remaining copay, coinsurance and deductible, capped at its own rate. In practice, be in the commercial plan\'s network, get its ABA authorization, bill it first, then bill MBHP for the balance with the EOB. MassHealth "will cover co-payments that are not being paid by the primary insurer, even if that provider is not in network with MBHP." However, "providers who are not in network with MBHP will need to obtain a single-case or out-of-network agreement in order for co-payments to be paid." TRICARE pays before MassHealth: "By law, TRICARE pays after all other health insurance, except for: Medicaid." The federal pay-and-chase exception for preventive pediatric (EPSDT) services is not applied to ABA in any source read.',
        status: 'verified',
        cites: [{ title: '130 CMR 450.316 — MassHealth third-party liability: requirements (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-316' }, { title: '130 CMR 450.317 — MassHealth third-party liability: payment limitations (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-317' }, { title: '42 CFR 433.139 — Medicaid payment of claims involving third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' }, { title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' }, { title: 'MassHealth — Coordination of Benefits for MassHealth Providers (upd. 4/12/2024)', url: 'https://www.mass.gov/info-details/coordination-of-benefits-for-masshealth-providers' }, { title: 'TRICARE — Using Other Health Insurance', url: 'https://tricare.mil/Plans/OHI' }],
        verifyVia:
          'MBHP (Carelon) provider relations: whether MBHP also requires its own ABA PA when MassHealth is secondary, and its secondary-claim filing window. The MBHP Provider Manual was offline ("System Outage") when checked.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'MBHP is the author of the rule everyone else in Massachusetts is measured against. LABA supervision must be delivered to Behavior Technician-level staff \u201cduring direct service with the Member, as clinically indicated but no less than 10 percent of direct service hours and should not exceed 25 percent of direct hours without documented clinical rationale.\u201d For members engaged in 10 hours or less of direct treatment per month, the LABA must deliver a minimum of one hour of direct supervision per month. The Behavior Technician works under the direct supervision of a LABA licensed per 262 CMR 10.00 \u2014 a BCBA certificate alone does not qualify \u2014 and the provider agency must ensure LABAs supervise all BTs and that every staff member has had a background record check.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not resolved in the published Massachusetts documents. The performance specification does carry one concurrency prohibition, but it is about siblings, not codes: in group caregiver training, \u201cproviders may not bill concurrently for services delivered to multiple children from the same family. When a parent/caregiver has more than one child receiving services, only one child\u2019s session may be billed at a time.\u201d The spec requires LABA supervision to be delivered during the BT\u2019s direct service with the member, and MassHealth\u2019s CY2024 audit measured 97155 hours against 97153 hours \u2014 but neither document states in terms that both codes may be billed for the same clock time.',
        status: 'unverified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Carelon/MBHP provider relations via ProviderConnect.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Massachusetts is a no-cap state that nonetheless has one published per-day number. There are no annual, lifetime or unit-of-service ceilings on the EPSDT benefit, and 101 CMR 358.03 is a rate regulation, not a limit regulation \u2014 it fixes per-15-minute rates and states they are \u201cfull compensation\u201d including \u201cnecessary administration and professional supervision associated with patient care.\u201d The only per-day cap in the performance specification is for group instruction, which \u201cmay occur up to 4.5 hours a day as clinically indicated, in groups of 2-8 Members.\u201d No per-code MUE regime is published, so what bites in practice is medical-necessity review and the supervision-ratio audit, not a unit edit.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }, { title: '101 CMR 358.03 Rate Provisions (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/101-CMR-358-03' }],
      },
      noteSignature: {
        value:
          'Both clinicians document, and the spec says what the note must contain rather than who countersigns it. \u201cThe LABA and BT document each contact in a progress report or notes in the ABA provider\u2019s file for the Member,\u201d and session notes must include how treatment time was utilized, the treatment interventions utilized, and the member\u2019s response to treatment. The complete record must also hold referral and assessment documentation, treatment plans and progress reports, \u201cevidence of supervision and training, including policies, procedures, and implementation,\u201d the IEP and IFSP where applicable, and documentation confirming PCP physical examinations. No co-signature requirement and no signing deadline are stated.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
      },
      placeOfService: {
        value:
          'Home and community, with school carved out. ABA \u201cis delivered by a contracted and credentialed provider in a variety of settings within a Member\u2019s home and community,\u201d and \u201cservices provided in a school setting are distinct and separate from those covered by the health plan and are typically covered by the educational system\u2019s special education resources as part of the Individualized Education Program (IEP) pursuant to Public Law 94-142.\u201d Providers \u201cmust not direct, limit, or discourage access to other medically necessary or school-based services.\u201d Transition planning contemplates moving a member \u201cfrom a center based setting to home/community settings,\u201d so centers are in scope. Group homes are not addressed.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Group homes are not addressed in the specification \u2014 confirm with MBHP before scheduling.',
      },
      billAsProvider: {
        value:
          'Not published. Neither 101 CMR 358 nor the ABA performance specification names whose NPI carries the claim for technician-delivered 97153, and the rate regulation is explicitly single-tier \u2014 one rate per code, no credential-level modifiers \u2014 so there is no modifier to signal the renderer.',
        status: 'unverified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Carelon/MBHP provider relations; the performance specification governs service delivery, not claim identity.',
        blocker: 'per-case',
      },
    },
    pill: 'Payer Guide · MBHP (Carelon)',
    h1: 'MBHP ABA coverage (MassHealth behavioral-health administrator).',
    metaTitle: 'MBHP (MassHealth) ABA Coverage & Prior Authorization | Carelu',
    metaDescription:
      'How MBHP — a Carelon Behavioral Health company — administers MassHealth ABA for the PCC Plan, Primary Care ACOs, and HNE\'s BeHealthy Partnership: the standard PA form, ProviderConnect submission, 6-month auths, and the 2026 supervision-ratio recoupments.',
    intro: [
      'The Massachusetts Behavioral Health Partnership (MBHP), a Carelon Behavioral Health company, is MassHealth\'s contracted behavioral-health vendor — and the single biggest ABA gatekeeper in the state. It authorizes ABA for everyone not in an MCO or ACPP (the PCC Plan and the Primary Care ACOs) plus Health New England\'s BeHealthy Partnership plan. Clinically it is the state baseline: Massachusetts Medical Necessity Criteria, the standard PA form, 6-month authorizations. The reason to read it closely in 2026: Carelon, MBHP\'s parent, is the entity that executed MassHealth\'s supervision-ratio recoupments.',
    ],
    atGlance: [
      { label: 'Role', value: 'BH carve-out administrator: PCC Plan, Primary Care ACOs, HNE BeHealthy' },
      { label: 'Clinical rules', value: 'Massachusetts Medical Necessity Criteria (Carelon/MBHP) — state baseline' },
      { label: 'Prior auth', value: 'Required — MA Standard ABA PA Form; 6-month periods' },
      { label: 'Submission', value: 'ProviderConnect at providers.masspartnership.com; phone 1-800-495-0086' },
      { label: 'Hour caps', value: 'None published — medical necessity based' },
      { label: 'Supervision watch', value: 'Carelon executed the 2026 1:10 recoupments — expect strict 97155:97153 scrutiny' },
    ],
    sections: [
      {
        h2: 'How MBHP runs the benefit',
        body: [
          'MBHP essentially is the state program: it applies MassHealth\'s criteria and the multi-payer Massachusetts Standard ABA PA Form — initial evaluation, initial services, continued services, and amendment request types; the form says the BCBA rendering and/or supervising the services "should" complete it, and MBHP\'s performance specification separately requires that analyst to be a LABA licensed under 262 CMR 10.00 — with authorizations in up to 6-month periods. Submissions run through Carelon\'s ProviderConnect portal (providers.masspartnership.com); the provider line is 1-800-495-0086, and Carelon\'s Massachusetts forms-and-guides library holds the current documents. No hour caps are published — requests stand on medical necessity. Note the state\'s own ABA performance-specification document sits behind the provider portal, so onboarding should pull it from ProviderConnect directly.',
        ],
        cites: [
          { title: 'Carelon Behavioral Health — Massachusetts forms & guides', url: 'https://www.carelonbehavioralhealth.com/providers/forms-and-guides/ma' },
          { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' },
          { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' },
        ],
      },
      {
        h2: 'The Carelon audit connection',
        body: [
          'When MassHealth enforced its CY2024 supervision-ratio audit — the 1:10 floor of 97155 to 97153, with recoupment letters in February–March 2026 — Carelon was the administrator that ran the analysis and issued the letters. For practices billing MBHP that means the scrutiny is not hypothetical: keep the supervision hours on the schedule and in the claims at 1:10 or better, and reconcile 97155-to-97153 ratios monthly rather than discovering them in a recoupment letter. Member routing and find-a-provider run through masspartnership.com, which also makes MBHP a referral source worth being listed with.',
        ],
        cites: [
          { title: 'MassHealth ABA supervision audit & recoupment (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-supervision-audit-recoupment-litigation-2026/' },
        ],
      },
      {
        h2: 'What happens when a family switches ABA providers?',
        body: [
          'Neither MBHP nor MassHealth publishes a rule on whether an existing ABA authorization follows the child to a new agency, so ask the member\'s behavioral-health administrator before the switch. What MBHP\'s own ABA performance specification does set is the handoff. The agency the family is leaving keeps a transition plan that names the planned discharge setting, schedules a discharge planning meeting when the family "no longer wants the service," and must "include an up-to-date copy of the treatment plan, which is given to the caregiver/guardian on the last date of service and to all current providers within seven days of the last date of service." If services end unplanned, it "makes every effort to contact the parent/caregiver" and to "provide appropriate referrals." On the receiving side, a provider that cannot start within 14 days of authorization must keep a waitlist and "offer caregivers contact information for alternative providers in the region who are accepting new clients," and once an initial authorization is approved it must offer the family a face-to-face interview within two business days.',
        ],
        cites: [
          { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Confirm MBHP routing', desc: 'PCC Plan, a Primary Care ACO, or HNE BeHealthy on the card → the auth goes to MBHP, not the plan.' },
      { title: 'Diagnostic evaluation', desc: 'Comprehensive DSM-aligned ASD assessment (or the Down syndrome genetic-testing pathway from 1/1/2026) — attaches to the standard form.' },
      { title: 'LABA of record', desc: 'The standard form is completed by the rendering or supervising LABA.' },
      { title: 'Supervision capacity', desc: 'Confirm your BCBA/LABA schedule supports ≥1:10 97155:97153 before promising weekly hours.' },
    ],
    sources: [
      { title: 'MBHP provider portal — ProviderConnect (Getting Started)', url: 'https://providers.masspartnership.com/provider/GettingStarted.html' },
      { title: 'Carelon Behavioral Health — Massachusetts forms & guides', url: 'https://www.carelonbehavioralhealth.com/providers/forms-and-guides/ma' },
      { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' },
      { title: 'MassHealth ABA supervision audit & recoupment (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-supervision-audit-recoupment-litigation-2026/' },
      { title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' },
      { title: '101 CMR 358.03 Rate Provisions (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/101-CMR-358-03' },
      { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' },
      { title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' },
      { title: 'MassHealth All Provider Bulletin 379 — Access to Health Services through Telehealth Options (October 2023)', url: 'https://www.mass.gov/doc/all-provider-bulletin-379-access-to-health-services-through-telehealth-options-0/download' },
      { title: 'MassHealth Managed Care Entity Bulletin 115 — Telehealth for members enrolled in managed care entities (April 2024)', url: 'https://www.mass.gov/doc/managed-care-entity-bulletin-115-access-to-health-services-through-telehealth-options-for-members-enrolled-in-managed-care-entities-0/download' },
    ],
    faq: [
      { q: 'Who does MBHP cover for ABA?', a: 'MassHealth members on the PCC Plan and the Primary Care ACOs, plus Health New England\'s BeHealthy Partnership — everyone whose plan doesn\'t bring its own BH administrator. It applies the state-baseline criteria and the Massachusetts Standard ABA PA Form.' },
      { q: 'How do I submit an ABA authorization to MBHP?', a: 'Through Carelon\'s ProviderConnect portal at providers.masspartnership.com, using the Massachusetts Standard ABA PA Form; authorizations run in up to 6-month periods. Provider line: 1-800-495-0086.' },
      { q: 'Does MBHP pay the 101 CMR 358 rates?', a: 'The state schedule is the reference baseline, but whether MBHP pays exactly those rates is a contract question — verify in your MBHP agreement.' },
      { q: 'Can MBHP ABA be delivered by telehealth, including the assessment and supervision?', a: 'Yes. MBHP\'s performance specification allows telehealth at the family\'s request when clinically appropriate, and MassHealth requires its behavioral-health vendor to cover telehealth no more restrictively than All Provider Bulletin 379, which excludes no ABA code. Bill POS 02 or 10 with modifier 95 or 93.' },
    ],
  },

  'wellsense-massachusetts': {
    slug: 'wellsense-massachusetts',
    cardDesc: 'Largest ACPP footprint (8 of 15) + Essential MCO; insourced BH from Carelon 1/1/2026, hosts the standard form.',
    assessmentPA: {
      value: 'Required — "Request for initial evaluation" on the standard form with the comprehensive diagnostic assessment attached; initial requests cover a 3-month timeframe',
      status: 'verified',
      cites: [{ title: 'WellSense ABA PA Form (MassHealth, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
    },
    treatmentPA: {
      value: 'Required — continued services in 6-month timeframes; submit pages 1–7 of the standard form (portal or fax 857-264-2673)',
      status: 'verified',
      cites: [{ title: 'WellSense ABA PA Form (MassHealth, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD via comprehensive DSM-aligned assessment; the plan\'s form also carries the 1/1/2026 Down syndrome pathway',
      status: 'verified',
      cites: [{ title: 'WellSense ABA PA Form (MassHealth, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
    },
    payer: 'WellSense Health Plan',
    state: 'MA', kind: 'medicaid-mco', parent: 'MassHealth',
    intakeGates: {
      ageLimit: {
        value:
          'EPSDT sets the bound, and nothing else does. ABA is covered for MassHealth Standard and CommonHealth members under 21, and for Family Assistance members under 19 — with no lower age bound and no dollar, visit or unit-of-service cap underneath it. For the youngest referrals the binding rule is non-duplication rather than age: ABA cannot duplicate services the child already receives through Early Intervention. From 1/1/2026 the second diagnostic pathway (sole-diagnosis Down syndrome) rides the same age structure.',
        status: 'verified',
        cites: [{ title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' }],
      },
      dxRecency: {
        value:
          'Not published. Neither the Massachusetts Standard ABA PA Form nor the Carelon/MBHP performance specification sets a maximum age for the diagnostic evaluation — the form asks for the current ICD-10 diagnosis and, on a "Request for initial evaluation," a copy of the comprehensive assessment, but names no recency window. What the form does date is utilization, not diagnosis: the continued-services page makes the BCBA attest whether at least 75% of the previously authorized direct-service hours were used. WellSense hosts the current version of that form and has published no recency rule of its own since insourcing behavioral health on 1/1/2026.',
        status: 'unverified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
        verifyVia:
          'WellSense provider services / its reimbursement and medical policies in PolicyTech.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value:
          'The standard form names them, and the list is broader than "send them to a developmental pediatrician." For autism it requires "A comprehensive assessment completed by a licensed physician (i.e. PCP, etc.), advanced practice registered nurse, physician\'s assistant, or psychologist experienced in the diagnosis and treatment of ASD with developmental or child/adolescent experience which aligns with DSM criteria across ASD core deficits." For the 1/1/2026 pathway it requires instead "A diagnosis of Down Syndrome (Trisomy 21) confirmed by genetic testing." Note the two signatures are different people: the diagnostician writes the assessment, while the form itself "should" be completed by the BCBA rendering and/or supervising the services — an analyst the performance specification requires to be a LABA licensed under 262 CMR 10.00. WellSense hosts this form, so these are the plan\'s own stated requirements, not an inherited reading.',
        status: 'verified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
      },
      diagnosticTools: {
        value:
          'No instrument is mandated. The standard form requires a comprehensive assessment "which aligns with DSM criteria across ASD core deficits" without naming ADOS-2, ADI-R, CARS-2 or any other tool, and the performance specification names no diagnostic battery either; the Down syndrome pathway replaces the instrument question entirely with genetic testing. Massachusetts puts its measurement requirement downstream of intake instead — in progress documentation and medical-necessity review, not in the diagnostic gate.',
        status: 'verified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
      },
      referral: {
        value:
          'No referral and no physician order is a condition of authorization. The Massachusetts Standard ABA PA Form has no referral field and is completed by the rendering or supervising BCBA/LABA, and the performance specification\'s referral language is about timeliness rather than permission: "Fourteen calendar days from referral is the Medicaid standard of timely provision for services established in accordance with 42 CFR 441.56(e)," with a waitlist duty (and an obligation to hand caregivers other regional providers\' contact information) where the provider cannot start inside it. What the state does require is PCP evidence in the chart rather than at the door: the complete medical record must hold "Referral and assessment documentation" and "Documentation confirming physical examinations by a PCP," and the continued-services pages ask for a dated primary-care care-coordination entry. WellSense\'s hosted form adds the setting grid instead of a referral: location per day is recorded as H (home), O (office) or C (community).',
        status: 'verified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
      },
      telehealth: {
        value:
          'Permitted at the family\'s request, with no ABA-specific code list. The ABA provider "may deliver services and consultation via a Health Insurance Portability and Accessibility Act (HIPAA)-compliant telehealth platform at the parent/caregiver\'s request and if the service can be effectively delivered via telehealth as part of the intervention when appropriate," with the rationale documented and the documentation reflecting "clinical considerations for appropriateness across any service components being delivered via telehealth." Two guardrails ride along: telehealth "must not replace in-person availability," and the member or family "may rescind consent for telehealth at any time without risk of interruption of services." The specification itself publishes no per-code restriction, modifier or place-of-service code. WellSense publishes no deviation from this MassHealth-wide position, and had not republished the specification under its own name as of this review. State floor, which binds this plan: Managed Care Entity Bulletin 115 (April 2024) requires every MassHealth ACPP, MCO and the behavioral-health vendor to keep a telehealth policy "no more restrictive than" All Provider Bulletin 379. That bulletin allows any covered service outside a short excluded list (ABA is not on it), so the 97151 assessment and 97155 supervision included, by live video or audio-only when clinically appropriate and with member consent, paid at parity with in-person and billed with POS 02 (not in the home) or POS 10 (in the home) and modifier 95 (audio-video) or 93 (audio-only). No minimum share of in-person supervision is published.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }, { title: 'MassHealth All Provider Bulletin 379 — Access to Health Services through Telehealth Options (October 2023)', url: 'https://www.mass.gov/doc/all-provider-bulletin-379-access-to-health-services-through-telehealth-options-0/download' }, { title: 'MassHealth Managed Care Entity Bulletin 115 — Telehealth for members enrolled in managed care entities (April 2024)', url: 'https://www.mass.gov/doc/managed-care-entity-bulletin-115-access-to-health-services-through-telehealth-options-for-members-enrolled-in-managed-care-entities-0/download' }],
        verifyVia:
          'WellSense provider services — confirm the in-house BH team applies the MBHP telehealth conditions verbatim.',
      },
      authTurnaround: {
        value:
          'Published and on the federal clock. WellSense\'s 2026 manual (MassHealth ACO and MCO) promises standard pre-service decisions "no later than 7 calendar days after receipt of the request, with a possible extension not to exceed 14 additional calendar days." That extension is allowed only if the member or practitioner asks, or if WellSense can justify to EOHHS that it is in the member\'s interest and needs more information. Expedited requests are decided "no later than 72 hours after receipt of the request." Urgent concurrent requests are also answered "within 72 hours of the request." WellSense\'s October 31, 2025 notice made the 7-day standard effective January 1, 2026 ("previously 14 days"). WellSense "accepts authorization requests 24 hours a day, seven days per week (including holidays)," and the clock runs from receipt. The manual publishes no ABA-specific reauthorization lead time. The standard form allows continued-services requests in up to 6-month windows.',
        status: 'verified',
        cites: [{ title: 'WellSense Health Plan Provider Manual — Massachusetts (eff. Jan 1 2026)', url: 'https://www.wellsense.org/hubfs/Provider/Provider%20Manual/MA_Provider_Manual.pdf' }, { title: 'WellSense — Reduction of prior authorization decision timeframes (provider communication, Oct 31 2025)', url: 'https://www.wellsense.org/hubfs/Provider/News/WellSense_Mass_Provider_Communications_PA_Updates_10_31_25.pdf' }, { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' }, { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
        verifyVia:
          'WellSense BH utilization management: the lead time it wants before an ABA authorization ends.',
      },
      coordinationOfBenefits: {
        value:
          'WellSense pays last for MassHealth members. "MassHealth is always the payer of last resort; any other insurance will always be primary over these programs." The manual makes the provider "Obtain payment from all other liable parties prior to billing us." The claim to WellSense must include "the explanation of benefits, remittance advice, or denial letter from the other payer." The provider has "150 days to bill WellSense after receipt of the primary payer\'s determination for MassHealth." Other coverage is reported by listing the other carrier on the claim, by calling COB at 617-748-6188, or with the Coordination of Benefits Indicator Form for MassHealth. WellSense "will deny any claims received subsequent to verification of COB if we are the secondary payer." MassHealth\'s own rule also requires following the primary plan\'s authorization and network rules. A primary denial for missing PA or for being out of network forfeits the secondary payment (130 CMR 450.316(B)). TRICARE pays before MassHealth: "By law, TRICARE pays after all other health insurance, except for: Medicaid."',
        status: 'verified',
        cites: [{ title: 'WellSense Health Plan Provider Manual — Massachusetts (eff. Jan 1 2026)', url: 'https://www.wellsense.org/hubfs/Provider/Provider%20Manual/MA_Provider_Manual.pdf' }, { title: '130 CMR 450.316 — MassHealth third-party liability: requirements (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-316' }, { title: 'TRICARE — Using Other Health Insurance', url: 'https://tricare.mil/Plans/OHI' }],
        verifyVia:
          'WellSense BH / TPL (617-748-6188): whether WellSense also requires its own ABA PA when it is secondary. The 2026 manual does not waive it.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'WellSense brought behavioral health in-house effective January 1, 2026, and has not republished a public ABA supervision standard for its MassHealth products. The MassHealth-wide floor \u2014 no less than 10% of direct service hours of LABA supervision, not above 25% without documented clinical rationale \u2014 is what the state audited CY2024 encounters against, including WellSense\u2019s.',
        status: 'unverified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'WellSense\u2019s own ABA medical policy and its reimbursement policies in PolicyTech \u2014 the plan\u2019s medical-policy notices direct providers to \u201creview the Plan\u2019s reimbursement policies for Plan billing guidelines.\u201d',
        blocker: 'document',
      },
      concurrentBilling: {
        value:
          'Not published for WellSense\u2019s MassHealth products.',
        status: 'unverified',
        verifyVia:
          'WellSense provider services / PolicyTech reimbursement policies. Note that WellSense\u2019s posted ABA medical policy covers the MA Clarity (ConnectorCare) product, not the MassHealth line.',
        blocker: 'document',
      },
      dailyLimits: {
        value:
          'Not published. The WellSense Massachusetts provider manual (effective January 1, 2026) requires prior authorization on the ABA Prior Auth form for both initial and continued services \u2014 for autism and, separately, for Down syndrome \u2014 with criteria drawn from internal medical policy for Medicaid and InterQual for MA Clarity, but sets no per-day unit ceiling.',
        status: 'unverified',
        cites: [{ title: 'WellSense Health Plan \u2014 Massachusetts Provider Manual (eff. Jan. 1, 2026)', url: 'https://www.wellsense.org/hubfs/Provider/Provider%20Manual/MA_Provider_Manual.pdf' }],
        verifyVia:
          'WellSense reimbursement policies in PolicyTech.',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'Home and community, with school carved out. ABA \u201cis delivered by a contracted and credentialed provider in a variety of settings within a Member\u2019s home and community,\u201d and \u201cservices provided in a school setting are distinct and separate from those covered by the health plan and are typically covered by the educational system\u2019s special education resources as part of the Individualized Education Program (IEP) pursuant to Public Law 94-142.\u201d Providers \u201cmust not direct, limit, or discourage access to other medically necessary or school-based services.\u201d Transition planning contemplates moving a member \u201cfrom a center based setting to home/community settings,\u201d so centers are in scope. Group homes are not addressed. WellSense publishes no deviation from this MassHealth-wide position.',
        status: 'unverified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'WellSense provider services.',
        blocker: 'per-case',
      },
    },
    pill: 'Payer Guide · WellSense',
    h1: 'WellSense Health Plan ABA coverage (MassHealth MCO + ACPPs).',
    metaTitle: 'WellSense Health Plan (MassHealth) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How WellSense (formerly BMC HealthNet) administers MassHealth ABA across its Essential MCO and eight ACPPs — in-house behavioral-health UM as of January 1, 2026 (insourced from Carelon), the Massachusetts Standard ABA PA Form it hosts, 3-month initial and 6-month continued authorizations.',
    intro: [
      'WellSense Health Plan (formerly BMC HealthNet) carries the largest ACPP footprint in Massachusetts — eight of the fifteen Accountable Care Partnership Plans, from Boston ACO to Southcoast — plus the WellSense Essential MCO. That makes it, alongside MBHP, one of the two highest-volume MassHealth ABA payers. Effective January 1, 2026, WellSense brought behavioral-health administration in-house for all its Massachusetts products (Medicaid, Medicare, and ACA), ending its prior arrangement with Carelon — claims for BH services rendered on or after that date go directly to WellSense, not Carelon (Carelon continues to run off inpatient admissions that began before 1/1/2026 through discharge or 3/31/2026, whichever comes first). Requests still ride the Massachusetts Standard ABA PA Form (WellSense hosts the current version), and no plan-specific caps exist. The plan-specific layer is mechanics: portal, fax, and the 3-month initial / 6-month continued cadence spelled out on its form.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'MassHealth MCO (WellSense Essential) + 8 ACPPs' },
      { label: 'Clinical rules', value: 'State baseline — standard form + InterQual criteria + BH performance specs' },
      { label: 'BH administrator', value: 'In-house (WellSense) as of 1/1/2026 — insourced from Carelon' },
      { label: 'Prior auth', value: 'Required — initial requests 3 months; continued services 6 months' },
      { label: 'Submission', value: 'HealthTrio Connect portal; ABA PA fax 857-264-2673' },
      { label: 'Hour caps', value: 'None published — medical necessity based' },
    ],
    sections: [
      {
        h2: 'How WellSense runs ABA authorization',
        body: [
          'As of January 1, 2026, ABA for WellSense\'s MassHealth plans is authorized by WellSense\'s own in-house behavioral-health team, not Carelon — WellSense assumed BH administration for all Massachusetts products on that date (claims for dates of service before 1/1/2026 still route to Carelon for run-off). Requests still use the Massachusetts Standard ABA PA Form — WellSense hosts the current version (updated March 12, 2026), which already includes the Down syndrome pathway effective January 1, 2026 and doubles for its Clarity commercial product. Initial-evaluation requests check the dedicated box and attach the comprehensive diagnostic evaluation, with initial requests covering a 3-month timeframe; continued-services requests come in 6-month timeframes, submitting pages 1–7 of the form. Channels: the HealthTrio Connect portal, or ABA PA fax 857-264-2673 — confirm current fax/portal routing reflects the in-house team post-insourcing rather than legacy Carelon contacts. One paper-trail note: WellSense\'s medical PA matrix (effective 7/1/2026) doesn\'t list ABA codes at all — that\'s not an exemption; behavioral services route through the BH performance specs instead.',
        ],
        cites: [
          { title: 'WellSense ABA PA Form (MassHealth, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' },
          { title: 'WellSense Prior Authorization Matrix (eff. 7/1/2026)', url: 'https://www.wellsense.org/hubfs/Provider/Prior%20Authorization/MA_Prior_Auth_Matrix.pdf' },
          { title: 'WellSense — Behavioral health insourcing FAQs', url: 'https://www.wellsense.org/providers/behavioral-health-insourcing/faqs' },
        ],
      },
      {
        h2: 'What the footprint means for intake',
        body: [
          'A family may name their ACO — Boston Children\'s ACO, Mercy, Signature, Tufts Medicine Care Alliance — without ever saying "WellSense," so intake should map ACPP names to the WellSense flow rather than treating each as a separate payer. All eight ACPPs plus the Essential MCO run the same ABA machinery. Since the 1/1/2026 insourcing, that machinery is WellSense\'s own UM rather than Carelon\'s — but the 2026 statewide supervision-ratio enforcement still applies here as everywhere: keep 97155 supervision at or above 1:10 against 97153 direct-treatment hours.',
        ],
        cites: [
          { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' },
          { title: 'MassHealth ABA supervision audit & recoupment (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-supervision-audit-recoupment-litigation-2026/' },
        ],
      },
      {
        h2: 'WellSense claims: filing deadlines and payment',
        body: [
          'For MassHealth members the WellSense Massachusetts provider manual (effective January 1, 2026) sets a 150-day filing limit: “Providers must submit initial claims and encounters no later than 150 calendar days from the date of service, unless you are awaiting a payment and remittance (or explanation of payment) from a primary insurer via coordination of benefits.” When another insurer pays first, the claim and that insurer’s remittance advice are due “within 150 days of receipt of the remittance advice from the other insurer.” Corrected claims (frequency code 7 with the original claim number) are due within 150 calendar days of the original process remit date for MCO and ACO members, and a resubmission of a claim WellSense processed incorrectly or denied for missing documentation must arrive “no later than 300 days from the date of service.” Behavioral-health claims for dates of service after January 1, 2026 go to WellSense, not Carelon. WellSense’s BH insourcing reference guide repeats the 150-day MassHealth claims limit (90 days for its QHP/ConnectorCare plans), sets the appeals limit at 150 calendar days from the original denial and no later than 300 calendar days from the date of service, and lists payer ID 13337.',
          'Payment: WellSense’s stated goal “is to process clean claims and reimburse providers within 30 calendar days of receipt of the claim,” by check to the treating provider who billed or by EFT for providers enrolled in its EFT program. The 45-day pay-or-notify rule with 1.5% monthly interest in the same manual covers only the MA Clarity commercial plans; for this product the manual says plainly, “There is no late payment penalty for MassHealth claims.” The manual publishes no weekly check-run day or submission cutoff.',
        ],
        cites: [
          { title: 'WellSense Health Plan — Massachusetts Provider Manual (eff. Jan. 1, 2026)', url: 'https://www.wellsense.org/hubfs/Provider/Provider%20Manual/MA_Provider_Manual.pdf' },
          { title: 'WellSense — Behavioral Health (BH) Insourcing Reference Guide (March 2026)', url: 'https://www.wellsense.org/hubfs/Provider/Behavioral_Health/Behavioral_Health_Insourcing_Reference_Guide.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'ACPP name → WellSense', desc: 'Eight ACPPs plus Essential all route to the same WellSense in-house BH / standard-form flow (Carelon only for pre-1/1/2026 run-off) — map the plan name at intake.' },
      { title: 'Comprehensive diagnostic evaluation', desc: 'Attaches to the initial-evaluation request; the form also takes the Down syndrome genetic-testing pathway from 1/1/2026.' },
      { title: 'Pages 1–7, complete', desc: 'Continued-services submissions are pages 1–7 of the standard form — incomplete packets stall the 6-month clock.' },
      { title: 'Timeline expectations', desc: 'Initial authorizations cover 3 months; continued run 6 — plan reassessment touchpoints accordingly.' },
    ],
    sources: [
      { title: 'WellSense — Behavioral health insourcing FAQs', url: 'https://www.wellsense.org/providers/behavioral-health-insourcing/faqs' },
      { title: 'WellSense ABA PA Form (MassHealth, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' },
      { title: 'WellSense Prior Authorization Matrix (eff. 7/1/2026)', url: 'https://www.wellsense.org/hubfs/Provider/Prior%20Authorization/MA_Prior_Auth_Matrix.pdf' },
      { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' },
      { title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' },
      { title: 'WellSense Health Plan \u2014 Massachusetts Provider Manual (eff. Jan. 1, 2026)', url: 'https://www.wellsense.org/hubfs/Provider/Provider%20Manual/MA_Provider_Manual.pdf' },
      { title: 'MassHealth ABA supervision audit & recoupment (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-supervision-audit-recoupment-litigation-2026/' },
      { title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' },
      { title: 'MassHealth All Provider Bulletin 379 — Access to Health Services through Telehealth Options (October 2023)', url: 'https://www.mass.gov/doc/all-provider-bulletin-379-access-to-health-services-through-telehealth-options-0/download' },
      { title: 'MassHealth Managed Care Entity Bulletin 115 — Telehealth for members enrolled in managed care entities (April 2024)', url: 'https://www.mass.gov/doc/managed-care-entity-bulletin-115-access-to-health-services-through-telehealth-options-for-members-enrolled-in-managed-care-entities-0/download' },
      { title: 'WellSense — Behavioral Health (BH) Insourcing Reference Guide (March 2026)', url: 'https://www.wellsense.org/hubfs/Provider/Behavioral_Health/Behavioral_Health_Insourcing_Reference_Guide.pdf' },
    ],
    faq: [
      { q: 'Does WellSense cover ABA therapy?', a: 'Yes — across the WellSense Essential MCO and its eight MassHealth ACPPs, on the state-baseline benefit: EPSDT under 21, no caps, PA on all services via the Massachusetts Standard ABA PA Form. Behavioral health, including ABA, has been administered in-house by WellSense since January 1, 2026 (previously Carelon).' },
      { q: 'How do I submit an ABA authorization to WellSense?', a: 'Via the HealthTrio Connect portal or ABA PA fax 857-264-2673, using the standard form — initial-evaluation requests attach the diagnostic evaluation and cover 3 months; continued services submit pages 1–7 in 6-month timeframes.' },
      { q: 'Why isn\'t ABA on WellSense\'s prior-authorization matrix?', a: 'Because the matrix covers medical services — ABA routes through the behavioral-health performance specifications and, since January 1, 2026, WellSense\'s in-house behavioral-health UM (Carelon handled it before then). PA is still required for all ABA services.' },
      { q: 'What is WellSense’s timely filing limit for ABA claims?', a: 'For MassHealth members, 150 calendar days from the date of service (150 days from the primary insurer’s remittance when WellSense is secondary). Corrected claims are due within 150 days of the original remit, resubmissions within 300 days of the date of service, and appeals within 150 days of the denial and no later than 300 days from the date of service. MA Clarity commercial plans use 90 days.' },
      { q: 'How fast does WellSense pay a clean ABA claim?', a: 'WellSense aims to pay clean claims within 30 calendar days of receipt, by check or EFT. The 45-day rule with interest applies only to its MA Clarity commercial plans; the manual states there is no late-payment penalty for MassHealth claims, and it publishes no weekly check-run schedule.' },
    ],
  },

  'tufts-health-together': {
    slug: 'tufts-health-together',
    cardDesc: 'MCO product discontinued 1/1/2026 — only its 2 ACPPs (w/ Cambridge Health Alliance, w/ UMass Memorial) remain.',
    assessmentPA: {
      value: 'Required — the initial evaluation is itself a prior-authorization request: Point32Health\'s ABA PA form (effective Jan. 1, 2026) says ABA services "require one of the following prior authorization approvals," the first being a "Request for Initial Evaluation" (pages 1-3 plus copies of the child\'s IEP and the comprehensive diagnostic evaluation), and 97151 sits on its Tufts Health Together code list',
      status: 'verified',
      cites: [
        { title: 'Point32Health — Applied Behavioral Analysis Prior Authorization Form (effective Jan. 1, 2026; Tufts Health Together)', url: 'https://www.point32health.org/documents/applied-behavioral-analysis-form' },
      ],
    },
    treatmentPA: {
      value: 'Required — Point32Health\'s own ABA PA form ("Request for Continued Services": pages 1-6), units requested per 6-month period with modifier U2 on Together codes; submit through the MHK portal on the secure Provider portal with the form uploaded, or fax 888-977-0776 (the form: "For Tufts Health Together, fax this form to 888-977-0776"; the same number is the Tufts Health Public Plans behavioral-health fax that Tufts Health Direct also uses); since February 2026 Point32Health wants every ABA PA request submitted under the practice\'s billing (type 2) NPI, not the individual therapist\'s',
      status: 'verified',
      cites: [
        { title: 'Point32Health — Applied Behavioral Analysis Prior Authorization Form (effective Jan. 1, 2026; Tufts Health Together)', url: 'https://www.point32health.org/documents/applied-behavioral-analysis-form' },
        { title: 'Tufts Health Public Plans Provider Manual — Referrals, Prior Authorizations and Notifications chapter (2026)', url: 'https://www.point32health.org/documents/thpp-04-referrals-pa-notification-pm' },
        { title: 'Point32Health — ABA policy and coverage updates (Oct 2025)', url: 'https://www.point32health.org/provider/applied-behavioral-analysis-policy-and-coverage-updates-102025' },
        { title: 'Point32Health — ABA services: authorization and accreditation updates (Feb 2026)', url: 'https://www.point32health.org/provider/aba-services-authorization-and-accreditation-updates-022026' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD; covers sole-diagnosis Down syndrome effective 1/1/2026 (incl. Tufts Health Together)',
      status: 'verified',
      cites: [{ title: 'Point32Health — ABA policy and coverage updates (Oct 2025)', url: 'https://www.point32health.org/provider/applied-behavioral-analysis-policy-and-coverage-updates-102025' }],
    },
    family: 'point32',
    payer: 'Tufts Health Together (Point32Health)',
    state: 'MA', kind: 'medicaid-mco', parent: 'MassHealth',
    intakeGates: {
      ageLimit: {
        value:
          'EPSDT sets the bound, and nothing else does. ABA is covered for MassHealth Standard and CommonHealth members under 21, and for Family Assistance members under 19 — with no lower age bound and no dollar, visit or unit-of-service cap underneath it. For the youngest referrals the binding rule is non-duplication rather than age: ABA cannot duplicate services the child already receives through Early Intervention. From 1/1/2026 the second diagnostic pathway (sole-diagnosis Down syndrome) rides the same age structure. Confirm the member is on one of the two surviving ACPPs — the Together MCO product was discontinued 1/1/2026.',
        status: 'verified',
        cites: [{ title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' }],
      },
      dxRecency: {
        value:
          'Not published. Point32Health\'s October 2025 ABA update moved review onto InterQual criteria with SmartSheets from 1/1/2026 and moved Together members onto Point32Health\'s own ABA PA form, and neither document states how recent the diagnostic evaluation must be. The MassHealth-wide position is the same — no recency window is published on the state standard form either.',
        status: 'unverified',
        cites: [{ title: 'Point32Health — ABA policy and coverage updates (Oct 2025)', url: 'https://www.point32health.org/provider/applied-behavioral-analysis-policy-and-coverage-updates-102025' }, { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
        verifyVia:
          'Point32Health provider services / the Tufts Health Public Plans provider manual — Together members use Point32Health\'s own ABA PA form and, from 1/1/2026, InterQual criteria, so the Massachusetts standard-form answers are the floor rather than the rule here.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value:
          'Point32Health\'s own ABA PA form names them, and its list is narrower than the Massachusetts standard form\'s. The initial-evaluation request must carry a "Comprehensive diagnostic evaluation completed by a neurologist, pediatrician, psychiatrist, psychologist, or other licensed physician experienced in autism or Down syndrome treatment," and the form asks the diagnostician\'s licensure from a fixed list: neurologist/pediatric neurologist, developmental pediatrician, psychiatrist, psychologist, or "other licensed physician experienced in the diagnosis and treatment of autism or Down syndrome." Nurse practitioners and physician assistants, which the MassHealth standard form accepts, are not on it — so an APRN- or PA-made diagnosis is a question to raise with Point32 before submitting. The form itself is the BCBA\'s: "The Board-Certified Behavioral Analyst (BCBA) rendering and/or supervising the autism services should complete this form. Point32Health Plans will not approve the request if completed by a non-BCBA provider."',
        status: 'verified',
        cites: [{ title: 'Point32Health — Applied Behavioral Analysis Prior Authorization Form (effective Jan. 1, 2026; Tufts Health Together)', url: 'https://www.point32health.org/documents/applied-behavioral-analysis-form' }],
      },
      diagnosticTools: {
        value:
          'No instrument is mandated. The standard form requires a comprehensive assessment "which aligns with DSM criteria across ASD core deficits" without naming ADOS-2, ADI-R, CARS-2 or any other tool, and the performance specification names no diagnostic battery either; the Down syndrome pathway replaces the instrument question entirely with genetic testing. Massachusetts puts its measurement requirement downstream of intake instead — in progress documentation and medical-necessity review, not in the diagnostic gate. Point32Health publishes no ABA diagnostic-instrument requirement of its own; from 1/1/2026 its ABA reviews run on InterQual criteria and SmartSheets.',
        status: 'unverified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Point32Health — ABA policy and coverage updates (Oct 2025)', url: 'https://www.point32health.org/provider/applied-behavioral-analysis-policy-and-coverage-updates-102025' }],
        verifyVia:
          'Point32Health provider services / the Tufts Health Public Plans provider manual — Together members use Point32Health\'s own ABA PA form and, from 1/1/2026, InterQual criteria, so the Massachusetts standard-form answers are the floor rather than the rule here.',
        blocker: 'document',
      },
      referral: {
        value:
          'Mostly no. Point32Health\'s 2026 Public Plans Provider Manual applies its PCP-referral rule only to "Tufts Health Together with Cambridge Health Alliance (CHA)": specialty services outside the CHA ACO network need a valid referral on file, normally valid for one year or the approved number of visits, and "Tufts Health Together members do not require a PCP referral for services designated by MassHealth as exceptions to referral requirements as communicated and/or referenced in All Provider Bulletin 409." For other Together members no referral applies. No physician order is a condition of ABA authorization: the Massachusetts standard ABA request has no referral field and is completed by the BCBA/LABA, and the MBHP performance specification\'s referral language is about the 14-day timeliness standard. APB 409 (October 2025), read in full, does not name ABA among its added exceptions, but it builds on the base list in 130 CMR 450.118(J)(5), which exempts “services delivered by a behavioral health provider (including inpatient and outpatient psychiatric services)” from the PCC referral requirement. Point32 has not said in writing whether it treats an ABA agency as a behavioral health provider for that exception.',
        status: 'unverified',
        cites: [ { title: 'MassHealth All Provider Bulletin 409 — Update to Certain Exceptions to Referral Requirements (October 2025)', url: 'https://www.mass.gov/doc/all-provider-bulletin-409-update-to-certain-exceptions-to-referral-requirements-for-services-through-the-primary-care-clinician-plan-and-primary-care-accountable-care-organizations-0/download' }, { title: '130 CMR 450.118(J) — PCC Plan referral requirement and exceptions (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-118' },{ title: 'Tufts Health Public Plans Provider Manual — Referrals, Prior Authorizations and Notifications (2026)', url: 'https://www.point32health.org/documents/thpp-04-referrals-pa-notification-pm' }, { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Tufts Health Public Plans Provider Services, 888-257-1985 — for a CHA-attributed member, ask whether ABA from a non-CHA provider needs a PCP referral on file, or whether Point32 applies the 130 CMR 450.118(J)(5)(p) behavioral-health-provider exception.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'Permitted at the family\'s request, with no ABA-specific code list. The ABA provider "may deliver services and consultation via a Health Insurance Portability and Accessibility Act (HIPAA)-compliant telehealth platform at the parent/caregiver\'s request and if the service can be effectively delivered via telehealth as part of the intervention when appropriate," with the rationale documented and the documentation reflecting "clinical considerations for appropriateness across any service components being delivered via telehealth." Two guardrails ride along: telehealth "must not replace in-person availability," and the member or family "may rescind consent for telehealth at any time without risk of interruption of services." The specification itself publishes no per-code restriction, modifier or place-of-service code. Point32Health publishes no telehealth position for Together ABA, and the performance specification is MBHP\'s, not Point32\'s. State floor, which binds this plan: Managed Care Entity Bulletin 115 (April 2024) requires every MassHealth ACPP, MCO and the behavioral-health vendor to keep a telehealth policy "no more restrictive than" All Provider Bulletin 379. That bulletin allows any covered service outside a short excluded list (ABA is not on it), so the 97151 assessment and 97155 supervision included, by live video or audio-only when clinically appropriate and with member consent, paid at parity with in-person and billed with POS 02 (not in the home) or POS 10 (in the home) and modifier 95 (audio-video) or 93 (audio-only). No minimum share of in-person supervision is published.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }, { title: 'MassHealth All Provider Bulletin 379 — Access to Health Services through Telehealth Options (October 2023)', url: 'https://www.mass.gov/doc/all-provider-bulletin-379-access-to-health-services-through-telehealth-options-0/download' }, { title: 'MassHealth Managed Care Entity Bulletin 115 — Telehealth for members enrolled in managed care entities (April 2024)', url: 'https://www.mass.gov/doc/managed-care-entity-bulletin-115-access-to-health-services-through-telehealth-options-for-members-enrolled-in-managed-care-entities-0/download' }],
        verifyVia:
          'Point32Health provider services / the Tufts Health Public Plans provider manual — Together members use Point32Health\'s own ABA PA form and, from 1/1/2026, InterQual criteria, so the Massachusetts standard-form answers are the floor rather than the rule here.',
      },
      authTurnaround: {
        value:
          'The legal maximum is 7 calendar days, but Point32Health\'s manual still prints 14. Its 2026 Utilization Management chapter (last revised 4/7/2026) says "Prospective non-urgent requests will be completed within 14 calendar days" for Tufts Health Together. Urgent requests are decided "not later than 72 hours of receipt of the request," with a possible 14-calendar-day extension. The federal managed-care rule, for rating periods that start on or after 1/1/2026, caps standard decisions at "7 calendar days after receiving the request for service," plus up to 14 more calendar days on request or with justification. WellSense and Carelon moved their MassHealth decisions to 7 days on January 1, 2026, and the federal limit is the one that binds. Point32Health asks providers to "Submit a prior authorization request at least five business days in advance of the scheduled procedure, service, or planned admission." For reauthorization, file at least that far before the current authorization ends. The provider "must have this authorization letter before providing any service(s) requiring an authorization."',
        status: 'verified',
        cites: [{ title: 'Tufts Health Public Plans Provider Manual — Utilization Management chapter (2026, rev. 4/7/2026)', url: 'https://www.point32health.org/documents/thpp-06-um-pm' }, { title: 'Tufts Health Public Plans Provider Manual — Referrals, Prior Authorization and Notifications chapter (2026)', url: 'https://www.point32health.org/documents/thpp-04-referrals-pa-notification-pm' }, { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' }, { title: 'WellSense — Reduction of prior authorization decision timeframes (provider communication, Oct 31 2025)', url: 'https://www.wellsense.org/hubfs/Provider/News/WellSense_Mass_Provider_Communications_PA_Updates_10_31_25.pdf' }, { title: 'Carelon Behavioral Health — Massachusetts Addendum (114_0526 rev.)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/ma/massachusetts-provider-addendum.pdf' }],
        verifyVia:
          'Point32Health utilization management: confirm it applies the 7-calendar-day standard for Tufts Health Together requests received from 1/1/2026 (the 2026 manual still says 14).',
      },
      coordinationOfBenefits: {
        value:
          'Tufts Health Together pays last. "Federal and state regulations mandate that as a Medicaid managed care organization, Tufts Health Public Plans is payer of last resort for Tufts Health Together." Providers "must submit the claim(s) to all known available carriers as the primary insurer and receive an explanation of payment or equivalent." They then submit to Tufts with that EOP. The EOP must show the processed or check date and explain any remark codes. "Do not take a cost-sharing amount up front." An administrative denial from the primary carrier (a claim-preparation error, or missing information) "is not accepted as a reason for Tufts Health Public Plans to pay as a primary carrier." A COB claim is due "60 calendar days from the date on the original primary carrier\'s EOP." MassHealth\'s own rule adds that a primary denial for missing PA or for being out of network forfeits the secondary payment (130 CMR 450.316(B)). TRICARE pays before MassHealth: "By law, TRICARE pays after all other health insurance, except for: Medicaid."',
        status: 'verified',
        cites: [{ title: 'Tufts Health Public Plans Provider Manual — Claim Requirements, Coordination of Benefits and Dispute Guidelines (2026)', url: 'https://www.point32health.org/documents/thpp05claimspm' }, { title: '130 CMR 450.316 — MassHealth third-party liability: requirements (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-316' }, { title: 'TRICARE — Using Other Health Insurance', url: 'https://tricare.mil/Plans/OHI' }],
        verifyVia:
          'Point32Health: whether Tufts Health Together also requires its own ABA PA when it is secondary. The claims chapter does not say.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Point32Health runs Tufts Health Public Plans behavioral-health review in-house and has not published an ABA supervision ratio for the Together product. Point32Health\u2019s October 2025 update moved commercial and Tufts Health Direct ABA review onto InterQual criteria from January 1, 2026, and Together members use Point32Health\u2019s own ABA prior-authorization form rather than the Massachusetts standard form \u2014 but neither document states a supervision percentage. The MassHealth-wide 10\u201325% band remains the state-level floor the CY2024 audit was run against.',
        status: 'unverified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Point32Health provider services / the Tufts Health Public Plans provider manual; note the Together MCO was slated for discontinuation effective January 1, 2026, so confirm the member\u2019s current product first.',
        blocker: 'document',
      },
      concurrentBilling: {
        value:
          'Not published for 97153 with 97155. Point32Health\u2019s ABA payment policy (rev. 05/2026), which applies to Tufts Health Together, does not reimburse \u201cServices provided concurrent with another treatment modality, such as occupational or speech therapy, where the ABA provider\u2019s role is to escort/accompany the member to the appointment.\u201d Its General Coding and Claims Editing policy applies generic incidental and mutually-exclusive edits but no ABA rule.',
        status: 'unverified',
        cites: [{ title: 'Point32Health Payment Policy \u2014 Applied Behavioral Analysis (ABA) Services (rev. 05/2026)', url: 'https://www.point32health.org/documents/applied-behavioral-analysis-aba-services-pp' }, { title: 'Point32Health Payment Policy \u2014 General Coding and Claims Editing (rev. 10/2026)', url: 'https://www.point32health.org/documents/general-coding-and-claims-editing-pp' }],
        verifyVia:
          'Tufts Health Public Plans Provider Services, 888-257-1985 — ask whether a BCBA\u2019s 97155 pays for the same minutes as the technician\u2019s 97153 on a Together claim.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Massachusetts is a no-cap state that nonetheless has one published per-day number. There are no annual, lifetime or unit-of-service ceilings on the EPSDT benefit, and 101 CMR 358.03 is a rate regulation, not a limit regulation \u2014 it fixes per-15-minute rates and states they are \u201cfull compensation\u201d including \u201cnecessary administration and professional supervision associated with patient care.\u201d The only per-day cap in the performance specification is for group instruction, which \u201cmay occur up to 4.5 hours a day as clinically indicated, in groups of 2-8 Members.\u201d No per-code MUE regime is published, so what bites in practice is medical-necessity review and the supervision-ratio audit, not a unit edit. Point32Health\u2019s Maximum Units payment policy (rev. 09/2026) does apply to Tufts Health Together: \u201cEffective for DOS beginning May 1, 2026, Tufts Health Plan products will apply and adhere to CMS and/or Medicaid MUE unit limitations where applicable,\u201d units billed beyond the maximum are not paid, and a medically necessary excess can be appealed with supporting records. The policy does not say which table (CMS practitioner or Medicaid) sets the ABA numbers for this MassHealth plan.',
        status: 'unverified',
        cites: [{ title: '101 CMR 358.03 Rate Provisions (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/101-CMR-358-03' }, { title: 'Point32Health Payment Policy \u2014 Maximum Units (rev. 09/2026)', url: 'https://www.point32health.org/documents/maximum-units-pp' }],
        verifyVia:
          'Point32Health provider services (Tufts Health Public Plans, 888-257-1985): ask whether the CMS practitioner MUE (97153 = 32 units/day) or a Medicaid MUE applies to Together ABA claims.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Home and community, with school carved out. ABA \u201cis delivered by a contracted and credentialed provider in a variety of settings within a Member\u2019s home and community,\u201d and \u201cservices provided in a school setting are distinct and separate from those covered by the health plan and are typically covered by the educational system\u2019s special education resources as part of the Individualized Education Program (IEP) pursuant to Public Law 94-142.\u201d Providers \u201cmust not direct, limit, or discourage access to other medically necessary or school-based services.\u201d Transition planning contemplates moving a member \u201cfrom a center based setting to home/community settings,\u201d so centers are in scope. Group homes are not addressed. No Together-specific deviation is published.',
        status: 'unverified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Point32Health provider services.',
        blocker: 'per-case',
      },
    },
    pill: 'Payer Guide · Tufts Health Together',
    h1: 'Tufts Health Together ABA coverage (ACPPs only, since the 1/1/2026 MCO discontinuation).',
    metaTitle: 'Tufts Health Together (MassHealth) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Tufts Health Together (Point32Health) administers MassHealth ABA — the only plan family with self-managed behavioral health: its own ABA PA form instead of the state standard form, InterQual SmartSheets, a new medical-necessity guideline effective 1/1/2026, and an ABA accreditation requirement.',
    intro: [
      'Effective January 1, 2026, MassHealth discontinued the Tufts Health Together Managed Care Organization (MCO) product (All Provider Bulletin 410); members previously enrolled in the MCO were reassigned, where possible, to the health plan participating with their existing PCP. Tufts Health Together now exists only as two Accountable Care Partnership Plans — with Cambridge Health Alliance and with UMass Memorial Health — which remain active and are the only Tufts Health Together products for intake to route to. Tufts Health Together is (and remains) the only MassHealth plan family that self-manages behavioral health: no Carelon, no Optum — Point32Health\'s internal UM reviews ABA against its own medical-necessity guideline using InterQual criteria and SmartSheets, on Point32Health\'s own ABA PA form rather than the Massachusetts standard form every other administrator takes.',
    ],
    atGlance: [
      { label: 'Plan status', value: 'MCO product discontinued 1/1/2026 — only the 2 ACPPs (Cambridge Health Alliance, UMass Memorial) are active' },
      { label: 'Plan type', value: '2 ACPPs only: with Cambridge Health Alliance, with UMass Memorial Health' },
      { label: 'BH administrator', value: 'Internal — Point32Health UM (no external BH vendor)' },
      { label: 'PA form', value: 'Point32Health\'s OWN ABA PA form — NOT the MA standard form (as of Oct 2025)' },
      { label: 'Clinical criteria', value: 'Point32Health ABA MNG; InterQual + SmartSheets; new MNG effective 1/1/2026' },
      { label: 'Submission', value: 'MHK portal with the form uploaded, or fax 888-977-0776 (Together fax per the Point32 ABA PA form)' },
      { label: 'Network gate', value: 'ABA accreditation required: MA center-based providers by 1/1/2027; all others by 1/1/2028 (Point32, Feb 2026)' },
    ],
    sections: [
      {
        h2: 'The Point32 machinery',
        body: [
          'Per the October 2025 provider update, Tufts Health Together adopted InterQual criteria with InterQual SmartSheets for ABA prior-authorization review, with a new ABA medical-necessity guideline effective January 1, 2026 — and moved members onto Point32Health\'s own updated ABA PA form. Requests submit electronically through the MHK portal on the secure Provider portal with the form uploaded, or by fax to 888-977-0776 — the fax the form itself names for Tufts Health Together ("For Tufts Health Together, fax this form to 888-977-0776"). The October 2025 notice lists that number only under Tufts Health Direct because it is the Tufts Health Public Plans behavioral-health fax both products share. Even the initial evaluation needs approval: the form\'s "Request for Initial Evaluation" (pages 1-3) goes in with copies of the child\'s IEP and the comprehensive diagnostic evaluation, and continued services use pages 1-6, with units requested per 6-month period and modifier U2 on Together codes. For a practice running one MA workflow, this is the exception to build: a Tufts Together family means the Point32 form and the Point32 portal, and a standard-form packet sent here is a bounce. The benefit itself matches the state baseline — no published hour caps, and sole-diagnosis Down syndrome coverage effective January 1, 2026 explicitly includes Tufts Health Together.',
        ],
        cites: [
          { title: 'Point32Health — ABA policy and coverage updates (Oct 2025)', url: 'https://www.point32health.org/provider/applied-behavioral-analysis-policy-and-coverage-updates-102025' },
          { title: 'MassHealth — All Provider Bulletin 410: Changes to MassHealth\'s ACOs on January 1, 2026', url: 'https://www.mass.gov/doc/all-provider-bulletin-410-changes-to-masshealths-accountable-care-organizations-on-january-1-2026/download' },
          { title: 'Point32Health — Reminder: Tufts Health Together MCO discontinuing as of Jan. 1', url: 'https://www.point32health.org/provider/reminder-tufts-health-together-mco-discontinuing-jan-1-112025' },
          { title: 'Point32Health — Applied Behavioral Analysis Prior Authorization Form (effective Jan. 1, 2026; Tufts Health Together)', url: 'https://www.point32health.org/documents/applied-behavioral-analysis-form' },
          { title: 'Tufts Health Public Plans Provider Manual — Referrals, Prior Authorizations and Notifications chapter (2026)', url: 'https://www.point32health.org/documents/thpp-04-referrals-pa-notification-pm' },
        ],
      },
      {
        h2: 'Two gates beyond the auth',
        body: [
          'Point32Health\'s February 2026 provider update states that "all contracted ABA providers must obtain accreditation from a nationally recognized accrediting body specializing in ABA" — a requirement that "supports a MassHealth initiative" and that Point32 extended to all Harvard Pilgrim and Tufts Health Plan products, Tufts Health Together included. The deadlines: center-based ABA providers in Massachusetts and Rhode Island must be accredited by January 1, 2027; all other providers by January 1, 2028, after which every ABA provider, new ones included, must be accredited. That makes accreditation a network-participation gate, not a quality nicety — budget the timeline into any Tufts network strategy. The same update changed how to request authorization: submit ABA PA requests for any Point32Health member under the practice\'s billing (type 2) NPI, not the individual therapist\'s. Worth knowing on the enforcement front: Point32Health formally disputed MassHealth\'s 2026 ABA supervision-audit methodology (February 9, 2026) — but the statewide 1:10 expectation still makes supervision staffing the safe operating assumption.',
        ],
        cites: [
          { title: 'Point32Health — ABA services: authorization and accreditation updates (Feb 2026)', url: 'https://www.point32health.org/provider/aba-services-authorization-and-accreditation-updates-022026' },
          { title: 'MassHealth ABA supervision audit & recoupment (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-supervision-audit-recoupment-litigation-2026/' },
        ],
      },
      {
        h2: 'Tufts Health Together claims: filing deadlines and payment',
        body: [
          'Point32Health’s 2026 Public Plans claims chapter sets the clock for Tufts Health Together: “For first time claims submissions, the filing deadline is 90 calendar days from the date of service (for professional or outpatient claims),” and claims received after that window “will be denied for failure to meet timely filing requirements.” When Tufts is secondary, the claim is due within 60 calendar days of the date on the primary carrier’s EOP or third-party determination letter (60 days from a retraction statement). Late charges follow the same 90-day rule, and corrected claims (frequency code 7, or “Corrected Claim” and the original claim number on paper with a Request for Claim Review Form) go in on the timeframe in your provider contract. Payment disputes must be filed within 60 calendar days of the EOP on which the claim first denied, with a maximum of two appeal levels. Appeals of timely-filing denials are reviewed only for the MassHealth exceptions in G.L. c. 118E, § 38: the member was enrolled retroactively, the member did not tell you about MassHealth eligibility in time, or MassHealth expressly authorized the exception.',
          'Payment: the chapter publishes no clean-claim day count. It uses MassHealth’s definition of a clean claim (one that “can be processed without obtaining additional information from the provider of the service or from a third party”) and says the explanation of payment “is a weekly report of all claims that have been paid or denied,” viewable with 835 remittances through Payspan Health. No submission cutoff day or time is published.',
        ],
        cites: [
          { title: 'Point32Health — Public Plans Provider Manual: Claim Requirements, Coordination of Benefits and Dispute Guidelines (2026)', url: 'https://www.point32health.org/documents/thpp05claimspm' },
        ],
      },
      {
        h2: 'Which codes does Tufts Health Together use for ABA? (H0031 and other H-codes)',
        body: [
          'Point32Health’s Tufts Health Together ABA guideline (effective January 1, 2026, revised February 18, 2026) lists the codes that require prior authorization: 97151, 97153, 97154, 97155, 97156, 97157 and H0031, described as “Mental health assessment, by non-physician - Assessment and treatment planning by a BCBA.” The guideline’s history records that H0032, H2012 and H2019 were removed in April 2023 when the CPT codes were added. 97152, 97158, 0362T and 0373T are not on the list. The eligible diagnoses are F84.0, F84.3, F84.5, F84.8 and F84.9, plus Q90.0–Q90.9 (Down syndrome) from January 1, 2026.',
        ],
        cites: [
          { title: 'Point32Health — Medical Necessity Guideline: Applied Behavior Analysis (ABA) Therapy for Autism Spectrum Disorder for Tufts Health Together (eff. 1/1/2026)', url: 'https://www.point32health.org/documents/aba-tuftsheath-together-mng' },
        ],
      },
      {
        h2: 'What must a Tufts Health Together reauthorization contain? (graphs)',
        body: [
          'Point32Health’s Together guideline lists the continuing-stay criteria. The treatment plan “is updated no less than every six months” and includes “Data demonstrating change from baseline across treatment goals,” data from updated assessment tools as applicable, and updated or added goals. Progress must be “monitored regularly and appropriately documented by: a. Behavioral graphs that visually demonstrate changes from baseline; and b. Daily session notes” covering the treatment provided, how treatment time was used and the member’s response. Where progress stalls, the request must show the barriers found and what was done about them (protocol changes, other services, reassessment); lack of progress “does not inherently warrant an increase in service hours.” Utilization below 75% of approved direct hours over a review cycle may trigger extra review, and a continued request must show the steps taken to address adherence barriers.',
        ],
        cites: [
          { title: 'Point32Health — Medical Necessity Guideline: Applied Behavior Analysis (ABA) Therapy for Autism Spectrum Disorder for Tufts Health Together (eff. 1/1/2026)', url: 'https://www.point32health.org/documents/aba-tuftsheath-together-mng' },
        ],
      },
    ],
    collect: [
      { title: 'MCO vs. ACPP', desc: 'The Tufts Health Together MCO no longer exists (discontinued 1/1/2026) — confirm the family is on one of the two active ACPPs, not a stale MCO card.' },
      { title: 'The RIGHT form', desc: 'Tufts Health Together takes Point32Health\'s own ABA PA form — not the MA standard form. Flag it in your intake workflow.' },
      { title: 'IEP copy', desc: 'Point32\'s Request for Initial Evaluation for Tufts Health Together asks for a copy of the child\'s Individualized Education Program alongside the diagnostic evaluation — ask the family for it at intake.' },
      { title: 'ACPP mapping', desc: 'Cambridge Health Alliance and UMass Memorial ACPP members are Tufts Together — route to Point32, not Carelon.' },
      { title: 'Diagnostic evaluation', desc: 'ASD assessment — or the Down syndrome pathway from 1/1/2026, which Point32 confirms includes this plan.' },
      { title: 'Accreditation status', desc: 'Point32\'s ABA accreditation requirement is a network gate (MA center-based providers by 1/1/2027, all others by 1/1/2028) — check where your organization stands before quoting start dates.' },
    ],
    sources: [
      { title: 'Point32Health — ABA services: authorization and accreditation updates (Feb 2026)', url: 'https://www.point32health.org/provider/aba-services-authorization-and-accreditation-updates-022026' },
      { title: 'MassHealth — All Provider Bulletin 410: Changes to MassHealth\'s ACOs on January 1, 2026', url: 'https://www.mass.gov/doc/all-provider-bulletin-410-changes-to-masshealths-accountable-care-organizations-on-january-1-2026/download' },
      { title: 'Point32Health — Reminder: Tufts Health Together MCO discontinuing as of Jan. 1', url: 'https://www.point32health.org/provider/reminder-tufts-health-together-mco-discontinuing-jan-1-112025' },
      { title: 'Point32Health — ABA policy and coverage updates (Oct 2025)', url: 'https://www.point32health.org/provider/applied-behavioral-analysis-policy-and-coverage-updates-102025' },
      { title: 'Point32Health — Medical Necessity Guideline: Applied Behavior Analysis (ABA) Therapy for Autism Spectrum Disorder for Tufts Health Together (eff. 1/1/2026)', url: 'https://www.point32health.org/documents/aba-tuftsheath-together-mng' },
      { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' },
      { title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' },
      { title: '101 CMR 358.03 Rate Provisions (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/101-CMR-358-03' },
      { title: 'MassHealth ABA supervision audit & recoupment (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-supervision-audit-recoupment-litigation-2026/' },
      { title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' },
      { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' },
      { title: 'MassHealth All Provider Bulletin 379 — Access to Health Services through Telehealth Options (October 2023)', url: 'https://www.mass.gov/doc/all-provider-bulletin-379-access-to-health-services-through-telehealth-options-0/download' },
      { title: 'MassHealth Managed Care Entity Bulletin 115 — Telehealth for members enrolled in managed care entities (April 2024)', url: 'https://www.mass.gov/doc/managed-care-entity-bulletin-115-access-to-health-services-through-telehealth-options-for-members-enrolled-in-managed-care-entities-0/download' },
      { title: 'Point32Health — Public Plans Provider Manual: Claim Requirements, Coordination of Benefits and Dispute Guidelines (2026)', url: 'https://www.point32health.org/documents/thpp05claimspm' },
      { title: 'MassHealth All Provider Bulletin 409 — Update to Certain Exceptions to Referral Requirements (October 2025)', url: 'https://www.mass.gov/doc/all-provider-bulletin-409-update-to-certain-exceptions-to-referral-requirements-for-services-through-the-primary-care-clinician-plan-and-primary-care-accountable-care-organizations-0/download' },
      { title: '130 CMR 450.118(J) — PCC Plan referral requirement and exceptions (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-118' },
    ],
    faq: [
      { q: 'Is the Tufts Health Together MCO still active?', a: 'No — MassHealth discontinued the Tufts Health Together MCO product effective January 1, 2026 (All Provider Bulletin 410). Only the two ACPPs, with Cambridge Health Alliance and with UMass Memorial Health, remain active.' },
      { q: 'Does Tufts Health Together cover ABA?', a: 'Yes, through its two active ACPPs — the MassHealth EPSDT benefit with no published hour caps, reviewed by Point32Health\'s internal UM against its own medical-necessity guideline (InterQual + SmartSheets; new MNG effective 1/1/2026).' },
      { q: 'Does Tufts Health Together use the Massachusetts standard ABA form?', a: 'No — as of the October 2025 update, members use Point32Health\'s own updated ABA PA form, submitted through the MHK portal with the form uploaded or faxed to 888-977-0776 (the Together fax printed on the form). Even the initial evaluation is a PA request: pages 1-3 with the child\'s IEP and the comprehensive diagnostic evaluation. It\'s the one MassHealth plan family where the standard form doesn\'t apply.' },
      { q: 'What is Point32Health\'s ABA accreditation requirement?', a: 'Per Point32Health\'s February 2026 provider update, all contracted ABA providers must be accredited by a nationally recognized accrediting body specializing in ABA, across Harvard Pilgrim and Tufts Health Plan products. Center-based providers in Massachusetts and Rhode Island must be accredited by January 1, 2027; all other providers by January 1, 2028 — treat it as a contracting prerequisite.' },
      { q: 'What is the timely filing limit for Tufts Health Together ABA claims?', a: '90 calendar days from the date of service for first-time claims. As secondary payer, 60 days from the primary carrier’s EOP. Payment disputes are due within 60 days of the EOP that denied the claim, and late-filing denials are reconsidered only for the MassHealth exceptions (retroactive enrollment, late notice of eligibility, or an exception MassHealth authorized).' },
      { q: 'How often does Tufts Health Together pay ABA claims?', a: 'Point32Health issues a weekly explanation of payment through Payspan Health. Its claims chapter publishes no clean-claim payment day count and no weekly submission cutoff.' },
      { q: 'Does Tufts Health Together accept H0031 for ABA?', a: 'Yes. Its ABA guideline lists H0031 (assessment and treatment planning by a BCBA) with 97151, 97153, 97154, 97155, 97156 and 97157, all requiring prior authorization. H0032, H2012 and H2019 were removed in 2023.' },
      { q: 'Does Tufts Health Together require graphs for ABA reauthorization?', a: 'Yes. Its guideline requires progress documented by behavioral graphs showing change from baseline, plus daily session notes, and an updated treatment plan at least every six months with data on change from baseline across goals.' },
    ],
  },

  'fallon-health-massachusetts': {
    slug: 'fallon-health-massachusetts',
    cardDesc: 'Three ACPPs (2023 roster), Carelon-run BH, state-baseline rules; first-wave audit recoupments.',
    assessmentPA: {
      value: 'Required — via the Carelon process on the MA standard form; plan-level specifics not published, verify with Carelon',
      status: 'verified',
      cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' }],
    },
    treatmentPA: {
      value: 'Required — 6-month authorization periods (per statewide practice), via Carelon',
      status: 'verified',
      cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD via comprehensive DSM-aligned assessment; from 1/1/2026 also sole-diagnosis Down syndrome (state baseline)',
      status: 'verified',
      cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' }],
    },
    payer: 'Fallon Health (MassHealth ACPPs)',
    state: 'MA', kind: 'medicaid-mco', parent: 'MassHealth',
    intakeGates: {
      ageLimit: {
        value:
          'EPSDT sets the bound, and nothing else does. ABA is covered for MassHealth Standard and CommonHealth members under 21, and for Family Assistance members under 19 — with no lower age bound and no dollar, visit or unit-of-service cap underneath it. For the youngest referrals the binding rule is non-duplication rather than age: ABA cannot duplicate services the child already receives through Early Intervention. From 1/1/2026 the second diagnostic pathway (sole-diagnosis Down syndrome) rides the same age structure.',
        status: 'verified',
        cites: [{ title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' }],
      },
      dxRecency: {
        value:
          'Not published. Neither the Massachusetts Standard ABA PA Form nor the Carelon/MBHP performance specification sets a maximum age for the diagnostic evaluation — the form asks for the current ICD-10 diagnosis and, on a "Request for initial evaluation," a copy of the comprehensive assessment, but names no recency window. What the form does date is utilization, not diagnosis: the continued-services page makes the BCBA attest whether at least 75% of the previously authorized direct-service hours were used.',
        status: 'unverified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Carelon Behavioral Health provider relations for the Fallon line of business — confirm the MBHP performance specification is applied verbatim.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'The standard form names them, and the list is broader than "send them to a developmental pediatrician." For autism it requires "A comprehensive assessment completed by a licensed physician (i.e. PCP, etc.), advanced practice registered nurse, physician\'s assistant, or psychologist experienced in the diagnosis and treatment of ASD with developmental or child/adolescent experience which aligns with DSM criteria across ASD core deficits." For the 1/1/2026 pathway it requires instead "A diagnosis of Down Syndrome (Trisomy 21) confirmed by genetic testing." Note the two signatures are different people: the diagnostician writes the assessment, while the form itself "should" be completed by the BCBA rendering and/or supervising the services — an analyst the performance specification requires to be a LABA licensed under 262 CMR 10.00. Fallon takes the Massachusetts Standard ABA PA Form through Carelon, so these are the operative requirements; no Fallon-specific diagnostic criteria are published.',
        status: 'verified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
      },
      diagnosticTools: {
        value:
          'No instrument is mandated. The standard form requires a comprehensive assessment "which aligns with DSM criteria across ASD core deficits" without naming ADOS-2, ADI-R, CARS-2 or any other tool, and the performance specification names no diagnostic battery either; the Down syndrome pathway replaces the instrument question entirely with genetic testing. Massachusetts puts its measurement requirement downstream of intake instead — in progress documentation and medical-necessity review, not in the diagnostic gate.',
        status: 'verified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
      },
      referral: {
        value:
          'No referral and no physician order is a condition of authorization. The Massachusetts Standard ABA PA Form has no referral field and is completed by the rendering or supervising BCBA/LABA, and the performance specification\'s referral language is about timeliness rather than permission: "Fourteen calendar days from referral is the Medicaid standard of timely provision for services established in accordance with 42 CFR 441.56(e)," with a waitlist duty (and an obligation to hand caregivers other regional providers\' contact information) where the provider cannot start inside it. What the state does require is PCP evidence in the chart rather than at the door: the complete medical record must hold "Referral and assessment documentation" and "Documentation confirming physical examinations by a PCP," and the continued-services pages ask for a dated primary-care care-coordination entry.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }, { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
        verifyVia:
          'Carelon Behavioral Health provider relations for the Fallon line of business — confirm the MBHP performance specification is applied verbatim.',
      },
      telehealth: {
        value:
          'Permitted at the family\'s request, with no ABA-specific code list. The ABA provider "may deliver services and consultation via a Health Insurance Portability and Accessibility Act (HIPAA)-compliant telehealth platform at the parent/caregiver\'s request and if the service can be effectively delivered via telehealth as part of the intervention when appropriate," with the rationale documented and the documentation reflecting "clinical considerations for appropriateness across any service components being delivered via telehealth." Two guardrails ride along: telehealth "must not replace in-person availability," and the member or family "may rescind consent for telehealth at any time without risk of interruption of services." The specification itself publishes no per-code restriction, modifier or place-of-service code. The specification published at providers.masspartnership.com is MBHP\'s; Carelon has published no separate Fallon ABA specification that could be located. State floor, which binds this plan: Managed Care Entity Bulletin 115 (April 2024) requires every MassHealth ACPP, MCO and the behavioral-health vendor to keep a telehealth policy "no more restrictive than" All Provider Bulletin 379. That bulletin allows any covered service outside a short excluded list (ABA is not on it), so the 97151 assessment and 97155 supervision included, by live video or audio-only when clinically appropriate and with member consent, paid at parity with in-person and billed with POS 02 (not in the home) or POS 10 (in the home) and modifier 95 (audio-video) or 93 (audio-only). No minimum share of in-person supervision is published.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }, { title: 'MassHealth All Provider Bulletin 379 — Access to Health Services through Telehealth Options (October 2023)', url: 'https://www.mass.gov/doc/all-provider-bulletin-379-access-to-health-services-through-telehealth-options-0/download' }, { title: 'MassHealth Managed Care Entity Bulletin 115 — Telehealth for members enrolled in managed care entities (April 2024)', url: 'https://www.mass.gov/doc/managed-care-entity-bulletin-115-access-to-health-services-through-telehealth-options-for-members-enrolled-in-managed-care-entities-0/download' }],
        verifyVia:
          'Carelon Behavioral Health provider relations for the Fallon line of business — confirm the MBHP performance specification is applied verbatim.',
      },
      authTurnaround: {
        value:
          'Carelon decides for Fallon, on the federal clock. Carelon\'s current Massachusetts addendum (Fallon Health section) lists MassHealth non-urgent decisions "Within 7 Calendar Days" and urgent decisions "Within 72 hours from request." Both apply to pre-service and concurrent review. Under the EOHHS contract "based on 42 CFR Part 438," the member, representative or provider may request an extension of up to 14 calendar days. "When the specified time frames for standard and expedited prior authorization requests expire before Carelon makes a decision, an adverse action notice will go out to the member on the date the time frame expires." No ABA reauthorization lead time is published for Fallon. The standard form allows continued-services requests in up to 6-month windows.',
        status: 'verified',
        cites: [{ title: 'Carelon Behavioral Health — Massachusetts Addendum (114_0526 rev.)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/ma/massachusetts-provider-addendum.pdf' }, { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' }, { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
        verifyVia:
          'Carelon (Fallon Health program): the lead time it wants before an ABA authorization ends.',
      },
      coordinationOfBenefits: {
        value:
          'Fallon pays last for MassHealth ACO members, and its authorization rules still apply when it is secondary. Fallon\'s April 2026 billing manual says "For services to be considered for payment as a secondary insurer, Fallon Health\'s policy and procedures for referrals and authorizations must be followed." So get the Fallon/Carelon ABA PA even when commercial coverage is primary. Bill the primary first and send its EOB with the claim. Dependent children follow the birthday rule: "the insurance of the parent whose birth date occurs first in the calendar year." Behavioral-health claims go to Carelon. Its Fallon BH manual (Sept 2021 revision) requires secondary claims "with a copy of the primary insurance\'s explanation of benefits report and received ... within 60 days of the date on the EOB." Fallon\'s general billing manual allows 120 days from the other carrier\'s EOB, so hold to the shorter 60-day window for ABA. Use the TPL Indicator Form to report other coverage to EOHHS. MassHealth\'s rule adds that a primary denial for missing PA or for being out of network forfeits the secondary payment (130 CMR 450.316(B)). TRICARE pays before MassHealth: "By law, TRICARE pays after all other health insurance, except for: Medicaid."',
        status: 'verified',
        cites: [{ title: 'Fallon Health Provider Manual — Billing procedures (rev. April 2026)', url: 'https://fallonhealth.org/-/media/Files/ProviderPDFs/PMbilling.ashx' }, { title: 'Carelon (Beacon) Behavioral Health Policy and Procedure Manual for Providers — Fallon Health (rev. Sept 2021)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/ma/behavioral-health-policy-and-procedure-manual-for-providers-fallon.pdf' }, { title: '130 CMR 450.316 — MassHealth third-party liability: requirements (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-316' }, { title: 'TRICARE — Using Other Health Insurance', url: 'https://tricare.mil/Plans/OHI' }],
        verifyVia:
          'Carelon (Fallon program): confirm the current BH secondary-claim filing window. The only Fallon BH manual posted is the September 2021 revision.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Fallon\u2019s MassHealth ACPPs route ABA to Carelon, and the MassHealth-wide supervision band is the floor the state audited against: no less than 10% of Behavior Technician direct service hours in LABA supervision, not above 25% without documented clinical rationale, minimum one hour per month for members at 10 or fewer direct hours per month. The specification published at providers.masspartnership.com is MBHP\u2019s; Carelon has not published a separate Fallon-specific ABA specification that could be located.',
        status: 'unverified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Carelon Behavioral Health provider relations for the Fallon line of business \u2014 confirm whether the MBHP performance specification is applied verbatim.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Massachusetts is a no-cap state that nonetheless has one published per-day number. There are no annual, lifetime or unit-of-service ceilings on the EPSDT benefit, and 101 CMR 358.03 is a rate regulation, not a limit regulation \u2014 it fixes per-15-minute rates and states they are \u201cfull compensation\u201d including \u201cnecessary administration and professional supervision associated with patient care.\u201d The only per-day cap in the performance specification is for group instruction, which \u201cmay occur up to 4.5 hours a day as clinically indicated, in groups of 2-8 Members.\u201d No per-code MUE regime is published, so what bites in practice is medical-necessity review and the supervision-ratio audit, not a unit edit.',
        status: 'unverified',
        cites: [{ title: '101 CMR 358.03 Rate Provisions (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/101-CMR-358-03' }],
        verifyVia:
          'Carelon provider relations for Fallon; the rate regulation is statewide, the claim edits are not.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Home and community, with school carved out. ABA \u201cis delivered by a contracted and credentialed provider in a variety of settings within a Member\u2019s home and community,\u201d and \u201cservices provided in a school setting are distinct and separate from those covered by the health plan and are typically covered by the educational system\u2019s special education resources as part of the Individualized Education Program (IEP) pursuant to Public Law 94-142.\u201d Providers \u201cmust not direct, limit, or discourage access to other medically necessary or school-based services.\u201d Transition planning contemplates moving a member \u201cfrom a center based setting to home/community settings,\u201d so centers are in scope. Group homes are not addressed. No Fallon-specific deviation was located.',
        status: 'unverified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Carelon provider relations for the Fallon line of business.',
        blocker: 'per-case',
      },
    },
    pill: 'Payer Guide · Fallon Health',
    h1: 'Fallon Health ABA coverage (MassHealth ACPPs).',
    metaTitle: 'Fallon Health (MassHealth) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Fallon Health\'s MassHealth ACPPs handle ABA — behavioral health through Carelon on the state-baseline criteria and standard form, 6-month authorizations, and Fallon\'s place in the 2026 supervision-ratio audit.',
    intro: [
      'Fallon Health fields Accountable Care Partnership Plans in central and western Massachusetts — three as of the April 2023 state roster (Fallon 365 Care with Reliant, Fallon-Atrius, and the Berkshire Fallon Health Collaborative), a lineup worth re-verifying given ownership shifts since. For ABA, Fallon publishes no distinct policy of its own: behavioral health runs through Carelon, on the state-baseline criteria and the Massachusetts Standard ABA PA Form. Fallon\'s plans were among the six in MassHealth\'s 2026 supervision audit and received first-wave recoupment letters.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'MassHealth ACPPs — 3 per the 2023 roster (verify current lineup)' },
      { label: 'BH administrator', value: 'Carelon Behavioral Health' },
      { label: 'Clinical rules', value: 'State baseline — no distinct Fallon ABA policy found' },
      { label: 'Prior auth', value: 'Required — standard-form process; 6-month authorization periods' },
      { label: 'Hour caps', value: 'None published — medical necessity based' },
      { label: 'Supervision watch', value: 'One of the six audited plans; first-wave recoupment letters received' },
    ],
    sections: [
      {
        h2: 'State baseline via Carelon',
        body: [
          'Fallon has no published ABA criteria of its own — its MassHealth plans defer to Carelon\'s UM on the state-baseline rules: PA required for assessment and treatment on the Massachusetts Standard ABA PA Form, authorizations in 6-month periods, no published hour caps, medical necessity per EPSDT. Plan-level submission specifics (including whether Fallon requests route through Carelon\'s ProviderConnect like MBHP\'s) aren\'t published — confirm the channel with Carelon before the first submission rather than assuming the MBHP flow.',
        ],
        cites: [
          { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' },
          { title: 'MassHealth ABA supervision audit & recoupment (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-supervision-audit-recoupment-litigation-2026/' },
        ],
      },
      {
        h2: 'Two verification flags',
        body: [
          'First, the roster: the 2023 ACPP lineup may have shifted — Atrius\'s ownership changes in particular make the Fallon-Atrius entry worth confirming before onboarding a family who names it. Second, the audit: Fallon is named among the six ABA-administering plans in MassHealth\'s CY2024 supervision-ratio audit and received recoupment letters in the first wave, so the 1:10 97155-to-97153 floor applies to Fallon claims with the same force as everywhere in the Carelon universe.',
        ],
        cites: [
          { title: 'MassHealth ABA supervision audit & recoupment (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-supervision-audit-recoupment-litigation-2026/' },
        ],
      },
      {
        h2: 'Fallon claims via Carelon: the filing deadline',
        body: [
          'Fallon’s behavioral-health claims are processed and paid by Carelon, which lists “Claims processing and claims payment” among the areas Fallon delegates to it. Carelon’s Massachusetts addendum, which supersedes its national handbook for Fallon providers, sets the limit: “Timely Filing for Fallon Health: Within 120 days of the dates of service on outpatient claims.” The national handbook’s default is 90 calendar days “Unless otherwise identified in the provider agreement,” so for Fallon the addendum’s 120 days and your agreement are what count. The addendum also allows supervisory billing: in-network groups may list the licensed supervisor as the rendering clinician (box 24J) for a clinician who has completed an independent-license-eligible degree and is accruing supervised hours toward licensure.',
          'Payment: neither the Massachusetts addendum nor the national handbook publishes a clean-claim payment day count or a check-run schedule for Fallon. Ask Carelon provider services for Fallon’s payment cycle.',
        ],
        cites: [
          { title: 'Carelon Behavioral Health — Massachusetts Addendum to the National Provider Handbook (114_0526 revised)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/ma/massachusetts-provider-addendum.pdf' },
          { title: 'Carelon Behavioral Health — National Provider Handbook (2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/carelon-behavioral-health-provider-handbook.pdf' },
        ],
      },
      {
        h2: 'What must a Fallon (Carelon) ABA reauthorization contain? (graphs)',
        body: [
          'Carelon’s Massachusetts medical necessity criteria (04/29/26) carry a separate “Applied Behavior Analysis (ABA) Therapy (Medicaid Only)” section. Its continuing-stay criteria require a treatment plan “updated no less than every six months” with “Data demonstrating change from baseline across treatment goals,” updated assessment data as applicable and updated goals. Progress must be “monitored regularly and appropriately documented by: a. Behavioral graphs that visually demonstrate changes from baseline; and b. Daily session notes.” Utilization below 75% of approved direct hours across a review cycle may draw additional review.',
        ],
        cites: [
          { title: 'Carelon Behavioral Health — Massachusetts Medical Necessity Criteria (04/29/26), Applied Behavior Analysis (Medicaid)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/massachusetts-medical-necessity-criteria.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Exact plan name', desc: 'Fallon 365 Care, Fallon-Atrius, or Berkshire Fallon — and verify the plan still exists in its 2023 form.' },
      { title: 'Diagnostic evaluation', desc: 'ASD assessment (or Down syndrome genetic-testing pathway from 1/1/2026) for the standard form.' },
      { title: 'Submission channel', desc: 'Confirm the Carelon submission route for Fallon specifically before the first request.' },
      { title: 'Supervision capacity', desc: 'First-wave audit plan — hold the 1:10 97155:97153 ratio in scheduling.' },
    ],
    sources: [
      { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' },
      { title: 'MassHealth ABA supervision audit & recoupment (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-supervision-audit-recoupment-litigation-2026/' },
      { title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' },
      { title: '101 CMR 358.03 Rate Provisions (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/101-CMR-358-03' },
      { title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' },
      { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' },
      { title: 'MassHealth All Provider Bulletin 379 — Access to Health Services through Telehealth Options (October 2023)', url: 'https://www.mass.gov/doc/all-provider-bulletin-379-access-to-health-services-through-telehealth-options-0/download' },
      { title: 'MassHealth Managed Care Entity Bulletin 115 — Telehealth for members enrolled in managed care entities (April 2024)', url: 'https://www.mass.gov/doc/managed-care-entity-bulletin-115-access-to-health-services-through-telehealth-options-for-members-enrolled-in-managed-care-entities-0/download' },
      { title: 'Carelon Behavioral Health — Massachusetts Addendum to the National Provider Handbook (114_0526 revised)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/ma/massachusetts-provider-addendum.pdf' },
      { title: 'Carelon Behavioral Health — National Provider Handbook (2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/carelon-behavioral-health-provider-handbook.pdf' },
      { title: 'Carelon Behavioral Health — Massachusetts Medical Necessity Criteria (04/29/26), Applied Behavior Analysis (Medicaid)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/massachusetts-medical-necessity-criteria.pdf' },
    ],
    faq: [
      { q: 'Does Fallon Health cover ABA?', a: 'Yes — its MassHealth ACPPs carry the state-baseline EPSDT benefit, with behavioral health (including ABA authorization) administered by Carelon on the Massachusetts Standard ABA PA Form in 6-month periods.' },
      { q: 'Does Fallon have its own ABA policy?', a: 'No distinct Fallon ABA criteria are published — it defers to Carelon UM and the state baseline. Confirm submission mechanics with Carelon directly.' },
      { q: 'What is the timely filing limit for Fallon ABA claims?', a: '120 days from the date of service on outpatient claims, per Carelon’s Massachusetts addendum for Fallon Health. Carelon processes and pays Fallon’s behavioral-health claims, and neither of its documents publishes a payment day count or check-run schedule.' },
      { q: 'Does Fallon require graphs for ABA reauthorization?', a: 'Yes. Carelon’s Massachusetts Medicaid ABA criteria require behavioral graphs showing change from baseline, daily session notes, and a treatment plan updated at least every six months.' },
    ],
  },

  'health-new-england-massachusetts': {
    slug: 'health-new-england-massachusetts',
    cardDesc: 'Western-MA ACPP (BeHealthy Partnership); ABA auth is the MBHP flow, state-baseline rules.',
    assessmentPA: {
      value: 'Required — via the MBHP process (Massachusetts Standard ABA PA Form)',
      status: 'verified',
      cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' }],
    },
    treatmentPA: {
      value: 'Required — via MBHP; 6-month authorization periods',
      status: 'verified',
      cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD via comprehensive DSM-aligned assessment; from 1/1/2026 also sole-diagnosis Down syndrome (state baseline)',
      status: 'verified',
      cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' }],
    },
    payer: 'Health New England — BeHealthy Partnership',
    state: 'MA', kind: 'medicaid-mco', parent: 'MassHealth',
    intakeGates: {
      ageLimit: {
        value:
          'EPSDT sets the bound, and nothing else does. ABA is covered for MassHealth Standard and CommonHealth members under 21, and for Family Assistance members under 19 — with no lower age bound and no dollar, visit or unit-of-service cap underneath it. For the youngest referrals the binding rule is non-duplication rather than age: ABA cannot duplicate services the child already receives through Early Intervention. From 1/1/2026 the second diagnostic pathway (sole-diagnosis Down syndrome) rides the same age structure.',
        status: 'verified',
        cites: [{ title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' }],
      },
      dxRecency: {
        value:
          'Not published. Neither the Massachusetts Standard ABA PA Form nor the Carelon/MBHP performance specification sets a maximum age for the diagnostic evaluation — the form asks for the current ICD-10 diagnosis and, on a "Request for initial evaluation," a copy of the comprehensive assessment, but names no recency window. What the form does date is utilization, not diagnosis: the continued-services page makes the BCBA attest whether at least 75% of the previously authorized direct-service hours were used.',
        status: 'unverified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Carelon/MBHP provider relations via ProviderConnect; MassHealth\'s ABA Provider FAQ on mass.gov is 403 to automated clients and needs human retrieval.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value:
          'The standard form names them, and the list is broader than "send them to a developmental pediatrician." For autism it requires "A comprehensive assessment completed by a licensed physician (i.e. PCP, etc.), advanced practice registered nurse, physician\'s assistant, or psychologist experienced in the diagnosis and treatment of ASD with developmental or child/adolescent experience which aligns with DSM criteria across ASD core deficits." For the 1/1/2026 pathway it requires instead "A diagnosis of Down Syndrome (Trisomy 21) confirmed by genetic testing." Note the two signatures are different people: the diagnostician writes the assessment, while the form itself "should" be completed by the BCBA rendering and/or supervising the services — an analyst the performance specification requires to be a LABA licensed under 262 CMR 10.00. BeHealthy Partnership members route to MBHP, so the Massachusetts standard form is the operative paperwork; no HNE-specific diagnostic criteria exist.',
        status: 'verified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Confirm the member\'s plan still routes to MBHP at intake — the MassHealth BH-administrator map has changed twice since 2025.',
      },
      diagnosticTools: {
        value:
          'No instrument is mandated. The standard form requires a comprehensive assessment "which aligns with DSM criteria across ASD core deficits" without naming ADOS-2, ADI-R, CARS-2 or any other tool, and the performance specification names no diagnostic battery either; the Down syndrome pathway replaces the instrument question entirely with genetic testing. Massachusetts puts its measurement requirement downstream of intake instead — in progress documentation and medical-necessity review, not in the diagnostic gate.',
        status: 'verified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Confirm the member\'s plan still routes to MBHP at intake — the MassHealth BH-administrator map has changed twice since 2025.',
      },
      referral: {
        value:
          'No referral and no physician order is a condition of authorization. The Massachusetts Standard ABA PA Form has no referral field and is completed by the rendering or supervising BCBA/LABA, and the performance specification\'s referral language is about timeliness rather than permission: "Fourteen calendar days from referral is the Medicaid standard of timely provision for services established in accordance with 42 CFR 441.56(e)," with a waitlist duty (and an obligation to hand caregivers other regional providers\' contact information) where the provider cannot start inside it. What the state does require is PCP evidence in the chart rather than at the door: the complete medical record must hold "Referral and assessment documentation" and "Documentation confirming physical examinations by a PCP," and the continued-services pages ask for a dated primary-care care-coordination entry.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }, { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
        verifyVia:
          'Confirm the member\'s plan still routes to MBHP at intake — the MassHealth BH-administrator map has changed twice since 2025.',
      },
      telehealth: {
        value:
          'Permitted at the family\'s request, with no ABA-specific code list. The ABA provider "may deliver services and consultation via a Health Insurance Portability and Accessibility Act (HIPAA)-compliant telehealth platform at the parent/caregiver\'s request and if the service can be effectively delivered via telehealth as part of the intervention when appropriate," with the rationale documented and the documentation reflecting "clinical considerations for appropriateness across any service components being delivered via telehealth." Two guardrails ride along: telehealth "must not replace in-person availability," and the member or family "may rescind consent for telehealth at any time without risk of interruption of services." The specification itself publishes no per-code restriction, modifier or place-of-service code. State floor, which binds this plan: Managed Care Entity Bulletin 115 (April 2024) requires every MassHealth ACPP, MCO and the behavioral-health vendor to keep a telehealth policy "no more restrictive than" All Provider Bulletin 379. That bulletin allows any covered service outside a short excluded list (ABA is not on it), so the 97151 assessment and 97155 supervision included, by live video or audio-only when clinically appropriate and with member consent, paid at parity with in-person and billed with POS 02 (not in the home) or POS 10 (in the home) and modifier 95 (audio-video) or 93 (audio-only). No minimum share of in-person supervision is published.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }, { title: 'MassHealth All Provider Bulletin 379 — Access to Health Services through Telehealth Options (October 2023)', url: 'https://www.mass.gov/doc/all-provider-bulletin-379-access-to-health-services-through-telehealth-options-0/download' }, { title: 'MassHealth Managed Care Entity Bulletin 115 — Telehealth for members enrolled in managed care entities (April 2024)', url: 'https://www.mass.gov/doc/managed-care-entity-bulletin-115-access-to-health-services-through-telehealth-options-for-members-enrolled-in-managed-care-entities-0/download' }],
        verifyVia:
          'Confirm the member\'s plan still routes to MBHP at intake — the MassHealth BH-administrator map has changed twice since 2025.',
      },
      authTurnaround: {
        value:
          'MBHP decides ABA for BeHealthy members, on the federal managed-care clock. HNE\'s manual says HNE "has partnered with Massachusetts Behavioral Health Partnership (MBHP) to manage behavioral health (BH) services for HNE Be Healthy members." ABA authorization therefore runs through MBHP, and 42 CFR 438.210(d) binds HNE and its vendor. For rating periods that start on or after January 1, 2026, a standard decision is due "as expeditiously as the enrollee\'s condition requires" and within state-set timeframes that "may not exceed 7 calendar days after receiving the request for service" (it was 14 before 2026). That can be extended "up to 14 additional calendar days" if the family or provider asks, or if the plan justifies needing more information. An expedited decision is due "no later than 72 hours after receipt of the request for service." Expedited applies when the provider indicates that the standard clock "could seriously jeopardize the enrollee\'s life or health or ability to attain, maintain, or regain maximum function." No reauthorization lead time is published on the standard form or the MBHP performance specification. Continued services are requested in up to 6-month windows. MBHP\'s own provider manual returned a "System Outage" page when fetched, so an MBHP-specific shorter clock cannot be ruled out.',
        status: 'verified',
        cites: [{ title: 'Health New England Provider Manual (full; COB chapter rev. 11/1/2023)', url: 'https://healthnewengland.org/provider-manual' }, { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' }, { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'MBHP provider manual for HNE BeHealthy (masspartnership.com/HNE) or MBHP provider relations: MBHP\'s ABA decision clock and reauthorization lead time.',
      },
      coordinationOfBenefits: {
        value:
          'HNE pays after other insurance, and its authorization rules still apply. "HNE guidelines with regard to prior approvals must be followed even when another insurer is primary." For a secondary claim, "the provider must bill the primary insurer and should not submit a claim to HNE until after the claim has been processed by the primary insurer." The claim then goes in "with an explanation of payment or denial within 90 days." For a child on two parents\' plans, "The plan of the parent whose birthday falls earlier in the year is primary." MassHealth\'s rule adds that the provider must follow the primary plan\'s authorization and network rules. A primary denial for missing PA or for being out of network forfeits the secondary payment (130 CMR 450.316). HNE\'s COB chapter is the general manual (revised 11/1/2023). BeHealthy behavioral-health claims are managed by MBHP. TRICARE pays before MassHealth: "By law, TRICARE pays after all other health insurance, except for: Medicaid."',
        status: 'verified',
        cites: [{ title: 'Health New England Provider Manual (full; COB chapter rev. 11/1/2023)', url: 'https://healthnewengland.org/provider-manual' }, { title: '130 CMR 450.316 — MassHealth third-party liability: requirements (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-316' }, { title: 'TRICARE — Using Other Health Insurance', url: 'https://tricare.mil/Plans/OHI' }],
        verifyVia:
          'MBHP (for HNE BeHealthy BH claims): its secondary-claim filing window and whether it matches HNE\'s 90 days.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'BeHealthy Partnership members route their ABA to MBHP, so the Carelon/MBHP performance specification is the operative rule. LABA supervision must be delivered to Behavior Technician-level staff \u201cduring direct service with the Member, as clinically indicated but no less than 10 percent of direct service hours and should not exceed 25 percent of direct hours without documented clinical rationale.\u201d For members engaged in 10 hours or less of direct treatment per month, the LABA must deliver a minimum of one hour of direct supervision per month. The Behavior Technician works under the direct supervision of a LABA licensed per 262 CMR 10.00 \u2014 a BCBA certificate alone does not qualify \u2014 and the provider agency must ensure LABAs supervise all BTs and that every staff member has had a background record check.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Confirm the member\u2019s plan still routes to MBHP at intake \u2014 the MassHealth BH-administrator map has changed twice since 2025.',
      },
      concurrentBilling: {
        value:
          'Not resolved in the published Massachusetts documents. The performance specification does carry one concurrency prohibition, but it is about siblings, not codes: in group caregiver training, \u201cproviders may not bill concurrently for services delivered to multiple children from the same family. When a parent/caregiver has more than one child receiving services, only one child\u2019s session may be billed at a time.\u201d The spec requires LABA supervision to be delivered during the BT\u2019s direct service with the member, and MassHealth\u2019s CY2024 audit measured 97155 hours against 97153 hours \u2014 but neither document states in terms that both codes may be billed for the same clock time.',
        status: 'unverified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Carelon/MBHP provider relations via ProviderConnect.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Both clinicians document, and the spec says what the note must contain rather than who countersigns it. \u201cThe LABA and BT document each contact in a progress report or notes in the ABA provider\u2019s file for the Member,\u201d and session notes must include how treatment time was utilized, the treatment interventions utilized, and the member\u2019s response to treatment. The complete record must also hold referral and assessment documentation, treatment plans and progress reports, \u201cevidence of supervision and training, including policies, procedures, and implementation,\u201d the IEP and IFSP where applicable, and documentation confirming PCP physical examinations. No co-signature requirement and no signing deadline are stated.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Confirm MBHP routing for the specific member.',
      },
      placeOfService: {
        value:
          'Home and community, with school carved out. ABA \u201cis delivered by a contracted and credentialed provider in a variety of settings within a Member\u2019s home and community,\u201d and \u201cservices provided in a school setting are distinct and separate from those covered by the health plan and are typically covered by the educational system\u2019s special education resources as part of the Individualized Education Program (IEP) pursuant to Public Law 94-142.\u201d Providers \u201cmust not direct, limit, or discourage access to other medically necessary or school-based services.\u201d Transition planning contemplates moving a member \u201cfrom a center based setting to home/community settings,\u201d so centers are in scope. Group homes are not addressed.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Confirm MBHP routing for the specific member.',
      },
      dailyLimits: {
        value: 'HNE sets no ABA unit limits of its own: its Be Healthy Partnership addendum says the plan covers services “except for behavioral health services, which are covered by the MassHealth behavioral health services contractor, the Massachusetts Behavioral Health Partnership (MBHP).” So MBHP’s ABA performance specification governs, and the only per-day number it publishes is for group instruction, which “may occur up to 4.5 hours a day as clinically indicated, in groups of 2-8 Members.” No per-code daily unit ceiling or MUE table is published for individual ABA codes; hours are bounded by MBHP’s authorization.',
        status: 'verified',
        cites: [
          { title: 'Health New England — Be Healthy Partnership Addendum to the Provider Manual (Medicaid)', url: 'https://healthnewengland.org/Portals/_default/Shared%20Documents/providers/HNE_Be_Healthy_ProviderManual-Medicaid_addendum.pdf' },
          { title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' },
        ],
      },
    },
    pill: 'Payer Guide · HNE BeHealthy',
    h1: 'Health New England BeHealthy Partnership ABA coverage (MassHealth ACPP).',
    metaTitle: 'HNE BeHealthy Partnership (MassHealth) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Health New England\'s BeHealthy Partnership (with Baystate Healthcare Alliance) handles MassHealth ABA — behavioral health administered by MBHP, the standard PA form, 6-month authorizations, and the Springfield/Baystate catchment.',
    intro: [
      'Health New England\'s BeHealthy Partnership — its Accountable Care Partnership Plan with Baystate Healthcare Alliance — is the western-Massachusetts entry in the MassHealth landscape, anchored to the Springfield/Baystate systems. For ABA there is one thing to know: HNE doesn\'t run its own behavioral-health UM. The benefit is administered by MBHP (Carelon), meaning a BeHealthy member\'s ABA authorization is the MBHP flow — the state-baseline criteria, the Massachusetts Standard ABA PA Form, ProviderConnect, 6-month periods.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'MassHealth ACPP (with Baystate Healthcare Alliance) — western MA' },
      { label: 'BH administrator', value: 'MBHP (Carelon)' },
      { label: 'Clinical rules', value: 'State baseline via MBHP — no HNE-specific ABA policy' },
      { label: 'Prior auth', value: 'Required — MA Standard ABA PA Form; 6-month periods' },
      { label: 'Submission', value: 'providers.masspartnership.com (the MBHP channel)' },
      { label: 'Supervision watch', value: 'One of the six audited plans; first-wave recoupment letters' },
    ],
    sections: [
      {
        h2: 'The MBHP flow, with an HNE card',
        body: [
          'BeHealthy Partnership members carry an HNE card, but ABA requests go to MBHP: the standard PA form (initial evaluation, initial services, continued services), 6-month authorization periods, submissions through providers.masspartnership.com. No HNE-specific ABA criteria, forms, or hour caps exist — the state baseline governs, including the Down syndrome pathway from January 1, 2026. For intake in the Springfield catchment, the practical takeaway is routing: build the MBHP workflow once and BeHealthy families slot into it.',
        ],
        cites: [
          { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' },
        ],
      },
      {
        h2: 'Audit exposure',
        body: [
          'HNE is named among the six ABA-administering plans in MassHealth\'s CY2024 supervision-ratio audit and received first-wave recoupment letters — so BeHealthy claims sit under the same 1:10 97155-to-97153 enforcement as the rest of the MBHP/Carelon universe. Schedule supervision hours accordingly and reconcile the ratio before continuation requests.',
        ],
        cites: [
          { title: 'MassHealth ABA supervision audit & recoupment (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-supervision-audit-recoupment-litigation-2026/' },
        ],
      },
    ],
    collect: [
      { title: 'BeHealthy → MBHP routing', desc: 'The HNE card routes ABA to MBHP — use the ProviderConnect workflow, not an HNE portal.' },
      { title: 'Diagnostic evaluation', desc: 'ASD assessment (or the 1/1/2026 Down syndrome pathway) for the standard form.' },
      { title: 'LABA of record', desc: 'The standard form is completed by the rendering or supervising LABA.' },
      { title: 'Supervision capacity', desc: 'Audited plan — hold ≥1:10 97155:97153 in the schedule.' },
    ],
    sources: [
      { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' },
      { title: 'MBHP provider portal — ProviderConnect', url: 'https://providers.masspartnership.com/provider/GettingStarted.html' },
      { title: 'MassHealth ABA supervision audit & recoupment (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-supervision-audit-recoupment-litigation-2026/' },
      { title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' },
      { title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' },
      { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' },
      { title: 'MassHealth All Provider Bulletin 379 — Access to Health Services through Telehealth Options (October 2023)', url: 'https://www.mass.gov/doc/all-provider-bulletin-379-access-to-health-services-through-telehealth-options-0/download' },
      { title: 'MassHealth Managed Care Entity Bulletin 115 — Telehealth for members enrolled in managed care entities (April 2024)', url: 'https://www.mass.gov/doc/managed-care-entity-bulletin-115-access-to-health-services-through-telehealth-options-for-members-enrolled-in-managed-care-entities-0/download' },
      { title: 'Health New England — Be Healthy Partnership Addendum to the Provider Manual (Medicaid)', url: 'https://healthnewengland.org/Portals/_default/Shared%20Documents/providers/HNE_Be_Healthy_ProviderManual-Medicaid_addendum.pdf' },
    ],
    faq: [
      { q: 'Does HNE\'s BeHealthy Partnership cover ABA?', a: 'Yes — the state-baseline MassHealth EPSDT benefit, with behavioral health administered by MBHP (Carelon): standard PA form, 6-month authorizations, no published caps.' },
      { q: 'Where do BeHealthy ABA authorizations go?', a: 'To MBHP, via providers.masspartnership.com — not to Health New England. It\'s the same flow as PCC Plan and Primary Care ACO members.' },
    ],
  },

  'mass-general-brigham-health-plan': {
    slug: 'mass-general-brigham-health-plan',
    cardDesc: 'The Optum-run MassHealth ACPP: BH803ABA state supplement, 30 hr/wk EI cap, codified 1:10 ratio.',
    assessmentPA: {
      value: 'Required — via the Optum Behavioral Health process (plan-level submission specifics not published; verify via Provider Express)',
      status: 'verified',
      cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
    },
    treatmentPA: {
      value: 'Required — Optum process; 6-month authorization periods per statewide practice',
      status: 'verified',
      cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD via comprehensive DSM-aligned assessment; from 1/1/2026 also sole-diagnosis Down syndrome (state baseline)',
      status: 'verified',
      cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
    },
    payer: 'Mass General Brigham Health Plan (MassHealth ACPP)',
    state: 'MA', kind: 'medicaid-mco', parent: 'MassHealth',
    intakeGates: {
      ageLimit: {
        value:
          'EPSDT sets the bound, and nothing else does. ABA is covered for MassHealth Standard and CommonHealth members under 21, and for Family Assistance members under 19 — with no lower age bound and no dollar, visit or unit-of-service cap underneath it. For the youngest referrals the binding rule is non-duplication rather than age: ABA cannot duplicate services the child already receives through Early Intervention. From 1/1/2026 the second diagnostic pathway (sole-diagnosis Down syndrome) rides the same age structure. One plan-specific overlay is not an age rule but reads like one at intake: Optum\'s Massachusetts Medicaid entry (effective 10/1/2021) says ABA "should not exceed 30 hours per week" for Early Intervention members, so establish EI enrollment alongside age.',
        status: 'verified',
        cites: [{ title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' }, { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      dxRecency: {
        value:
          'Not published. Neither the Massachusetts Standard ABA PA Form nor the Carelon/MBHP performance specification sets a maximum age for the diagnostic evaluation — the form asks for the current ICD-10 diagnosis and, on a "Request for initial evaluation," a copy of the comprehensive assessment, but names no recency window. What the form does date is utilization, not diagnosis: the continued-services page makes the BCBA attest whether at least 75% of the previously authorized direct-service hours were used.',
        status: 'unverified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'Optum Care Advocate / Provider Express for the Mass General Brigham Health Plan line of business — Optum\'s published ABA criteria are commercial documents, and the plan does not republish the MassHealth standard-form requirements.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'The standard form names them, and the list is broader than "send them to a developmental pediatrician." For autism it requires "A comprehensive assessment completed by a licensed physician (i.e. PCP, etc.), advanced practice registered nurse, physician\'s assistant, or psychologist experienced in the diagnosis and treatment of ASD with developmental or child/adolescent experience which aligns with DSM criteria across ASD core deficits." For the 1/1/2026 pathway it requires instead "A diagnosis of Down Syndrome (Trisomy 21) confirmed by genetic testing." Note the two signatures are different people: the diagnostician writes the assessment, while the form itself "should" be completed by the BCBA rendering and/or supervising the services — an analyst the performance specification requires to be a LABA licensed under 262 CMR 10.00. Optum\'s own criteria are broader in wording — a diagnosis "issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis according to the diagnostic criteria based on the DSM-5-TR" — but that is its commercial Supplemental Clinical Criteria, and Optum\'s Massachusetts state-mandate entries are scoped to the EI hour cap and the 1/1/2026 Down syndrome expansion, neither of which is a diagnostician list for this MassHealth product.',
        status: 'unverified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'Optum Care Advocate / Provider Express for the Mass General Brigham Health Plan line of business — Optum\'s published ABA criteria are commercial documents, and the plan does not republish the MassHealth standard-form requirements.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value:
          'No instrument is mandated. The standard form requires a comprehensive assessment "which aligns with DSM criteria across ASD core deficits" without naming ADOS-2, ADI-R, CARS-2 or any other tool, and the performance specification names no diagnostic battery either; the Down syndrome pathway replaces the instrument question entirely with genetic testing. Massachusetts puts its measurement requirement downstream of intake instead — in progress documentation and medical-necessity review, not in the diagnostic gate. Optum\'s commercial criteria do name formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO), but that list belongs to its commercial ABA criteria and should not be assumed onto this MassHealth product.',
        status: 'unverified',
        cites: [{ title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }, { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'Optum Care Advocate / Provider Express for the Mass General Brigham Health Plan line of business — Optum\'s published ABA criteria are commercial documents, and the plan does not republish the MassHealth standard-form requirements.',
        blocker: 'per-case',
      },
      referral: {
        value:
          'No referral and no physician order is a condition of authorization. The Massachusetts Standard ABA PA Form has no referral field and is completed by the rendering or supervising BCBA/LABA, and the performance specification\'s referral language is about timeliness rather than permission: "Fourteen calendar days from referral is the Medicaid standard of timely provision for services established in accordance with 42 CFR 441.56(e)," with a waitlist duty (and an obligation to hand caregivers other regional providers\' contact information) where the provider cannot start inside it. What the state does require is PCP evidence in the chart rather than at the door: the complete medical record must hold "Referral and assessment documentation" and "Documentation confirming physical examinations by a PCP," and the continued-services pages ask for a dated primary-care care-coordination entry.',
        status: 'unverified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }, { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' }],
        verifyVia:
          'Optum Care Advocate / Provider Express for the Mass General Brigham Health Plan line of business — Optum\'s published ABA criteria are commercial documents, and the plan does not republish the MassHealth standard-form requirements.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'Permitted at the family\'s request, with no ABA-specific code list. The ABA provider "may deliver services and consultation via a Health Insurance Portability and Accessibility Act (HIPAA)-compliant telehealth platform at the parent/caregiver\'s request and if the service can be effectively delivered via telehealth as part of the intervention when appropriate," with the rationale documented and the documentation reflecting "clinical considerations for appropriateness across any service components being delivered via telehealth." Two guardrails ride along: telehealth "must not replace in-person availability," and the member or family "may rescind consent for telehealth at any time without risk of interruption of services." The specification itself publishes no per-code restriction, modifier or place-of-service code. Whether Optum applies the MBHP conditions on this line is not published. State floor, which binds this plan: Managed Care Entity Bulletin 115 (April 2024) requires every MassHealth ACPP, MCO and the behavioral-health vendor to keep a telehealth policy "no more restrictive than" All Provider Bulletin 379. That bulletin allows any covered service outside a short excluded list (ABA is not on it), so the 97151 assessment and 97155 supervision included, by live video or audio-only when clinically appropriate and with member consent, paid at parity with in-person and billed with POS 02 (not in the home) or POS 10 (in the home) and modifier 95 (audio-video) or 93 (audio-only). No minimum share of in-person supervision is published.',
        status: 'verified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications — Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }, { title: 'MassHealth All Provider Bulletin 379 — Access to Health Services through Telehealth Options (October 2023)', url: 'https://www.mass.gov/doc/all-provider-bulletin-379-access-to-health-services-through-telehealth-options-0/download' }, { title: 'MassHealth Managed Care Entity Bulletin 115 — Telehealth for members enrolled in managed care entities (April 2024)', url: 'https://www.mass.gov/doc/managed-care-entity-bulletin-115-access-to-health-services-through-telehealth-options-for-members-enrolled-in-managed-care-entities-0/download' }],
        verifyVia:
          'Optum Care Advocate / Provider Express for the Mass General Brigham Health Plan line of business — Optum\'s published ABA criteria are commercial documents, and the plan does not republish the MassHealth standard-form requirements.',
      },
      authTurnaround: {
        value:
          'Optum BH decides ABA, and the federal managed-care clock caps it. MGB delegates behavioral-health "Utilization management/care management" and "Service authorization" to Optum BH for all MGB ACO members. MGB\'s own ACO manual (dated 2026-04-01) still prints its general UM table: non-urgent pre-service "Within 14 calendar days after receipt of the request" plus up to 14 more on request, urgent "Up to 72 hours," and urgent concurrent within 24 hours. For rating periods starting on or after 1/1/2026, however, 42 CFR 438.210(d) caps standard decisions at "7 calendar days after receiving the request for service," with up to 14 more calendar days on request or justification. Expedited decisions are due within 72 hours. WellSense and Carelon moved their MassHealth decisions to 7 days on January 1, 2026. No ABA reauthorization lead time is published in the MGB manual.',
        status: 'verified',
        cites: [{ title: 'Mass General Brigham Health Plan — ACO Provider Manual (2026-04-01)', url: 'https://resources.massgeneralbrighamhealthplan.org/providers/MGB%20ACO%20Provider%20Manual.pdf' }, { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' }, { title: 'WellSense — Reduction of prior authorization decision timeframes (provider communication, Oct 31 2025)', url: 'https://www.wellsense.org/hubfs/Provider/News/WellSense_Mass_Provider_Communications_PA_Updates_10_31_25.pdf' }],
        verifyVia:
          'Optum BH (Provider Express) for MGB ACO: the decision clock it applies to MassHealth ABA requests and its reauthorization lead time.',
      },
      coordinationOfBenefits: {
        value:
          'MGB pays last. "When a patient enrolls with Mass General Brigham ACO Mass General Brigham Health Plan is always the payer of last resort." When MGB is secondary, "all claims must be submitted with a copy of the primary carrier\'s EOP, remittance advice, or denial letter." Behavioral-health claims "must be submitted to Optum BH directly." Report other coverage to MGB\'s COB team (617-772-5729) or on a TPL Indicator Form. MassHealth\'s rule adds that the provider must follow the primary plan\'s authorization and network rules. A primary denial for missing PA or for being out of network forfeits the secondary payment (130 CMR 450.316). TRICARE pays before MassHealth: "By law, TRICARE pays after all other health insurance, except for: Medicaid."',
        status: 'verified',
        cites: [{ title: 'Mass General Brigham Health Plan — ACO Provider Manual (2026-04-01)', url: 'https://resources.massgeneralbrighamhealthplan.org/providers/MGB%20ACO%20Provider%20Manual.pdf' }, { title: '130 CMR 450.316 — MassHealth third-party liability: requirements (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-316' }, { title: 'TRICARE — Using Other Health Insurance', url: 'https://tricare.mil/Plans/OHI' }],
        verifyVia:
          'Optum BH for MGB ACO: whether it requires its own ABA PA when MGB is secondary, and its secondary-claim filing window.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Mass General Brigham Health Plan routes ABA to Optum, but Optum\u2019s published ABA reimbursement policy is a commercial document and its ABA State Mandates entry for Massachusetts is scoped to Medicaid Early Intervention members \u2014 for whom it requires \u201csupervision by a Board-Certified Behavior Analyst (BCBA) to a paraprofessional \u2026 at the 1:10 ratio (one hour of supervision to ten hours of direct service),\u201d with services not to exceed 30 hours per week. Neither document states the supervision standard Optum applies to the MassHealth ACPP line, where the MassHealth-wide 10\u201325% band is the state floor.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA State Mandates BH803ABASTM12026 \u2014 NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Optum Care Advocate / Provider Express for the Mass General Brigham Health Plan line of business.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Massachusetts is a no-cap state that nonetheless has one published per-day number. There are no annual, lifetime or unit-of-service ceilings on the EPSDT benefit, and 101 CMR 358.03 is a rate regulation, not a limit regulation \u2014 it fixes per-15-minute rates and states they are \u201cfull compensation\u201d including \u201cnecessary administration and professional supervision associated with patient care.\u201d The only per-day cap in the performance specification is for group instruction, which \u201cmay occur up to 4.5 hours a day as clinically indicated, in groups of 2-8 Members.\u201d No per-code MUE regime is published, so what bites in practice is medical-necessity review and the supervision-ratio audit, not a unit edit. Optum\u2019s own per-day table (97153 32 units, 97155 24 units and so on) belongs to its commercial ABA reimbursement policy and should not be assumed onto this MassHealth product.',
        status: 'unverified',
        cites: [{ title: '101 CMR 358.03 Rate Provisions (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/101-CMR-358-03' }],
        verifyVia:
          'Optum provider services for the MGB Health Plan line.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Home and community, with school carved out. ABA \u201cis delivered by a contracted and credentialed provider in a variety of settings within a Member\u2019s home and community,\u201d and \u201cservices provided in a school setting are distinct and separate from those covered by the health plan and are typically covered by the educational system\u2019s special education resources as part of the Individualized Education Program (IEP) pursuant to Public Law 94-142.\u201d Providers \u201cmust not direct, limit, or discourage access to other medically necessary or school-based services.\u201d Transition planning contemplates moving a member \u201cfrom a center based setting to home/community settings,\u201d so centers are in scope. Group homes are not addressed. No MGB-specific deviation is published.',
        status: 'unverified',
        cites: [{ title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' }],
        verifyVia:
          'Optum Care Advocate for the MGB Health Plan line.',
        blocker: 'per-case',
      },
    },
    pill: 'Payer Guide · MGB Health Plan',
    h1: 'Mass General Brigham Health Plan ABA coverage (MassHealth ACPP).',
    metaTitle: 'Mass General Brigham Health Plan (MassHealth) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Mass General Brigham Health Plan (formerly AllWays) handles MassHealth ABA — the only plan whose behavioral health runs through Optum, with the BH803ABA state-mandate supplement\'s 30-hour-per-week Early Intervention cap and codified 1:10 supervision ratio.',
    intro: [
      'Mass General Brigham Health Plan (formerly AllWays) fields one ACPP with the Mass General Brigham ACO — and it is the only MassHealth plan whose ABA runs through Optum Behavioral Health. That routes members into Optum\'s clinical machinery: the United Behavioral Health ABA criteria plus Optum\'s ABA State Mandates supplement (BH 803ABA STM12026, effective January 2026), which carries explicit Massachusetts Medicaid provisions. Notably, Optum\'s supplement hard-codes the very 1:10 supervision ratio MassHealth later enforced statewide — and adds a cap no other MA plan publishes: 30 hours per week for Early Intervention members.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'MassHealth ACPP (with the Mass General Brigham ACO)' },
      { label: 'BH administrator', value: 'Optum Behavioral Health — unique among MassHealth plans' },
      { label: 'Clinical rules', value: 'Optum ABA criteria + BH803ABA State Mandates supplement (MA entries)' },
      { label: 'EI cap', value: 'MA Medicaid EI members (eff. 10/1/2021): ABA not to exceed 30 hrs/week' },
      { label: 'Supervision', value: 'BCBA-to-paraprofessional at 1:10 per the Optum supplement — codified, not just audited' },
      { label: 'Prior auth', value: 'Required — assessment and treatment via the Optum process; ~6-month periods' },
    ],
    sections: [
      {
        h2: 'The Optum layer on the MassHealth benefit',
        body: [
          'Optum\'s ABA State Mandates supplement carries a Massachusetts Medicaid entry effective October 1, 2021: for Early Intervention members, ABA services should not exceed 30 hours per week, and BCBA-to-paraprofessional supervision must run at 1:10 — with the supervisor and technician possibly both required to be present during home visits. No cap is stated for non-EI members, where the standard no-cap MassHealth benefit applies. The supplement makes MGB the one MA plan where the 1:10 ratio is written policy rather than audit posture — and in the 2026 statewide audit, Optum had not yet issued recoupment letters as of the March 2026 reporting, though the same analysis was run. Plan your under-3 referrals against the EI cap and the EI non-duplication rule together.',
        ],
        cites: [
          { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026), Massachusetts entries', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'MassHealth ABA supervision audit & recoupment (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-supervision-audit-recoupment-litigation-2026/' },
        ],
      },
      {
        h2: 'Working the Optum channel',
        body: [
          'Because behavioral health is carved to Optum, expect the Optum toolkit — Provider Express is Optum\'s standard portal, though its use for this plan specifically isn\'t published, so confirm the submission channel with the plan before the first request. Authorization cadence follows the statewide practice of roughly 6-month periods. Clinically, requests are reviewed against Optum\'s ABA criteria layered on the MassHealth baseline: EPSDT medical necessity, the DSM-aligned ASD diagnostic gate, and the Down syndrome pathway from January 1, 2026.',
        ],
        cites: [
          { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026), Massachusetts entries', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' },
        ],
      },
      {
        h2: 'MGB claims: where ABA claims go and the filing deadline',
        body: [
          'ABA claims do not go to the health plan. MGB’s claims page says “All behavioral health providers should submit claims to Optum” (payer ID 87726; paper claims to PO Box 30757, Salt Lake City, UT 84130-0757; Optum provider service 844-451-3520), and the MGB ACO provider manual lists “Claims processing and claims payment” among the behavioral-health functions delegated to Optum BH. The plan’s Timely Filing Best Practices sheet, which “pertain[s] to Commercial and MGB ACO programs,” says the plan “requires the submission of all paper and electronic claims within 90 days of the date of service unless otherwise contractually agreed.” A request to review a claim denied as late must be filed “within 90 days of the EOP date on which the claim originally denied.” The sheet does not say whether Optum applies the same window to the behavioral-health claims it processes for MGB, and neither document publishes a payment day count, so confirm both with Optum provider service before the first claim.',
        ],
        cites: [
          { title: 'Mass General Brigham Health Plan — Claims information (provider page)', url: 'https://massgeneralbrighamhealthplan.org/providers/claims' },
          { title: 'Mass General Brigham Health Plan — Timely Filing Best Practices (Commercial and MGB ACO, Oct. 2024)', url: 'https://5977230.fs1.hubspotusercontent-na1.net/hubfs/5977230/Timely%20Filing%20Best%20Practices.pdf' },
          { title: 'Mass General Brigham ACO Provider Manual (2026)', url: 'https://resources.massgeneralbrighamhealthplan.org/providers/MGB%20ACO%20Provider%20Manual.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Early Intervention status', desc: 'EI members carry the 30 hr/week cap and possible dual-presence home-visit rule — establish EI enrollment at intake.' },
      { title: 'Diagnostic evaluation', desc: 'ASD assessment (or the 1/1/2026 Down syndrome pathway) — reviewed against Optum\'s criteria.' },
      { title: 'Supervision staffing plan', desc: '1:10 BCBA-to-paraprofessional is written into the Optum supplement — document it in the request.' },
      { title: 'Submission channel', desc: 'Confirm the Optum route (Provider Express vs. plan-specific) before the first authorization.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' },
      { title: 'MassHealth ABA supervision audit & recoupment (Acuity News)', url: 'https://acuity.news/regulation/masshealth-aba-supervision-audit-recoupment-litigation-2026/' },
      { title: 'Carelon/MBHP Performance Specifications \u2014 Applied Behavior Analysis (upd. Feb 15, 2026)', url: 'https://providers.masspartnership.com/pdf/PerfSpec-ABA.pdf' },
      { title: '101 CMR 358.03 Rate Provisions (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/101-CMR-358-03' },
      { title: 'AIRC — MassHealth ABA Coverage factsheet', url: 'https://massairc.org/factsheets/masshealth-aba-coverage/' },
      { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' },
      { title: 'MassHealth All Provider Bulletin 379 — Access to Health Services through Telehealth Options (October 2023)', url: 'https://www.mass.gov/doc/all-provider-bulletin-379-access-to-health-services-through-telehealth-options-0/download' },
      { title: 'MassHealth Managed Care Entity Bulletin 115 — Telehealth for members enrolled in managed care entities (April 2024)', url: 'https://www.mass.gov/doc/managed-care-entity-bulletin-115-access-to-health-services-through-telehealth-options-for-members-enrolled-in-managed-care-entities-0/download' },
      { title: 'Mass General Brigham Health Plan — Claims information (provider page)', url: 'https://massgeneralbrighamhealthplan.org/providers/claims' },
      { title: 'Mass General Brigham Health Plan — Timely Filing Best Practices (Commercial and MGB ACO, Oct. 2024)', url: 'https://5977230.fs1.hubspotusercontent-na1.net/hubfs/5977230/Timely%20Filing%20Best%20Practices.pdf' },
      { title: 'Mass General Brigham ACO Provider Manual (2026)', url: 'https://resources.massgeneralbrighamhealthplan.org/providers/MGB%20ACO%20Provider%20Manual.pdf' },
    ],
    faq: [
      { q: 'Does Mass General Brigham Health Plan cover ABA?', a: 'Yes — the MassHealth EPSDT benefit, administered through Optum Behavioral Health under Optum\'s ABA criteria plus its Massachusetts state-mandate supplement. PA is required for assessment and treatment.' },
      { q: 'Does MGB Health Plan cap ABA hours?', a: 'Only for Early Intervention members: Optum\'s supplement limits EI-member ABA to 30 hours/week (effective 10/1/2021) with 1:10 BCBA-to-paraprofessional supervision. No cap is stated for non-EI members.' },
      { q: 'How is MGB different from other MassHealth plans for ABA?', a: 'It\'s the only plan whose ABA runs through Optum — with the 1:10 supervision ratio codified in written policy and the EI hour cap no other MA plan publishes. Everything else follows the state baseline.' },
      { q: 'What is the timely filing limit for MGB Health Plan ABA claims?', a: 'MGB’s timely-filing guidance for Commercial and MGB ACO programs is 90 days from the date of service unless your contract says otherwise, and 90 days from the denial EOP to contest a late-filing denial. ABA claims go to Optum (payer ID 87726), which processes and pays MGB’s behavioral-health claims, so confirm with Optum at 844-451-3520 that it applies the same window.' },
    ],
  },

  'aetna-massachusetts': {
    slug: 'aetna-massachusetts',
    family: 'aetna',
    cardDesc: 'CPB 0554/0648 + ARICA (no caps, any age) + Aetna\'s own hosted MA Standard ABA form.',
    assessmentPA: {
      value: 'Required — precertification, per Aetna\'s behavioral health precertification list (eff. 8/1/2024) — CPB 0554 itself sets no precertification rule. Aetna\'s national ABA precert form GR-69017-4 (7-26) says not to use it in Massachusetts',
      status: 'verified',
      cites: [{ title: 'Aetna — Participating provider behavioral health precertification list (ABA: 97151–97158, 0362T, 0373T)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26): "Don\'t use this form for Maryland and Massachusetts" (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
    },
    treatmentPA: {
      value: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
      status: 'verified',
      cites: [{ title: 'Aetna — Participating provider behavioral health precertification list (ABA: 97151–97158, 0362T, 0373T)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' }, { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD only (F84.0–F84.9) under CPB 0554, whose October 14, 2026 review names ABA experimental for “Down Syndrome in the absence of an autism spectrum disorder (ASD) co-morbidity” and all other non-ASD indications; fully-insured MA plans must still cover sole-diagnosis Down syndrome from 1/1/2026 (Ch. 388), so on those plans the state mandate, not the CPB, decides',
      status: 'plan-dependent',
      cites: [{ title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'The Arc of Massachusetts — ABA for Down syndrome expansion (eff. 1/1/2026)', url: 'https://thearcofmass.org/post/expansion-of-coverage-of-applied-behavior-analysis-aba-for-individuals-with-down-syndrome/' }],
      verifyVia:
        'The member\u2019s benefit document and Aetna precertification \u2014 funding type decides the diagnosis gate: CPB 0554 covers ASD only (and calls ABA experimental for Down syndrome without an ASD co-morbidity), while a Massachusetts fully-insured plan must also cover sole-diagnosis Down syndrome from 1/1/2026 under Ch. 388.',
      blocker: 'per-case',
    },
    payer: 'Aetna in Massachusetts',
    state: 'MA', kind: 'commercial',
    intakeGates: {
      ageLimit: {
        value:
          'Aetna sets no upper age limit in its national medical-necessity criteria. The ABA Medical Necessity Guide gives age only as clinical shape, not as a gate: comprehensive ABA carries a "typical age range" of 0-7 years at 10-25 hours a week for 1-2 years, while focused ABA is listed for "All ages" at 1-20 hours a week. The binding age question is the legal layer underneath: ARICA bars fully-insured Massachusetts plans from imposing any age limit on ASD diagnosis and treatment, so on a fully-insured card there is no upper bound at all; a self-funded ERISA plan answers to its own plan document. Establish funding type before quoting an age answer.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'DisabilityInfo/AIRC — ARICA fact sheet', url: 'https://disabilityinfo.org/fact-sheet-library/laws-legislation/act-relative-to-insurance-coverage-for-autism-arica/' }],
        verifyVia:
          'The member\'s benefit document and Aetna precertification — funding type decides whether the state mandate or the plan document sets the age boundary.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Twelve months, and it attaches to the functional measure rather than to the diagnosis. Aetna\'s medical-necessity criteria require that "There is demonstration of functional impairment on a standardized scale of functioning in the past 12 months," with the impairment at least one standard deviation below the population mean or representing a significant risk of harm to self or others. The ASD diagnosis itself carries no stated shelf life — so a family with an older diagnostic report is not blocked, but a stale adaptive score is.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      diagnosingProviders: {
        value:
          'A scope-of-practice test rather than a specialty list. Aetna requires "a DSM-V diagnosis of Autism Spectrum Disorder (ICD-10: F84.0; F84.3 - F84.9) obtained by an appropriate provider," and defines that as a "licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice." Note the code range: F84.2 (Rett syndrome) sits outside the listed set, and ABA for diagnoses other than ASD is treated as experimental.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      diagnosticTools: {
        value:
          'Aetna names adaptive-functioning instruments, not autism diagnostic instruments. The medical-necessity criteria require demonstrated functional impairment "on a standardized scale of functioning in the past 12 months. For instance, the Vineland Adaptive Behavior Scales 3 (VABS-3), the Adaptive Behavior Assessment Scale (ABAS), VB-MAPP or ABLLS," and quality-of-care elements add "Repeated measurement with standardized measures to assess progress." No ADOS-2 or ADI-R requirement appears anywhere — the instrument Aetna asks for is the one that sizes the hours, and the level-of-impairment calculation is what justifies the number requested.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      referral: {
        value:
          'No PCP referral and no Aetna order form; precertification is the gate. Aetna\'s provider manual (6/26) says members "may access behavioral health care" three ways, the first being "Through direct access to the behavioral health provider," and its ABA Medical Necessity Guide and CPB 0554 set a diagnosis and precertification requirement for both the assessment and treatment, not a referral. For a fully insured Massachusetts plan, ARICA defines covered autism treatment as care "prescribed, provided or ordered for an individual diagnosed with 1 of the autism spectrum disorders by a licensed physician or a licensed psychologist who determines the care to be medically necessary" (M.G.L. c. 175 § 47AA; c. 176G § 4V for HMOs). In practice the diagnosing physician\'s or psychologist\'s signed evaluation, recommending ABA, is the document that goes in with the first request. The statute sets no validity period, and self-funded ERISA plans sit outside it.',
        status: 'verified',
        cites: [{ title: 'Aetna Provider Manual (8102800-01-01, 6/26) — Behavioral health: access to care', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' }, { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'M.G.L. c. 175, § 47AA — Coverage for diagnosis and treatment of autism spectrum disorder', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter175/Section47AA' }, { title: 'M.G.L. c. 176G, § 4V — HMO coverage for autism spectrum disorder', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176G/Section4V' }],
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
          'Depends on how the plan is funded. For a fully insured plan issued in Massachusetts, M.G.L. c. 176O § 12 sets the clock. An initial determination is due "within two working days of obtaining all necessary information." An approval is phoned to the provider within 24 hours and confirmed in writing within two working days after that. A concurrent review (reauthorization) is due "within one working day of obtaining all necessary information," and during that review "the service shall be continued without liability to the insured until the insured has been notified of the determination." These clocks start when the file is complete, not when the request arrives, so a request missing information is not yet on the clock. A self-funded employer plan follows the federal ERISA claims rule instead. Urgent decisions are due within 72 hours. Other pre-service decisions are due within a reasonable time "but not later than 15 days after receipt of the claim," with one 15-day extension. A request to extend an ongoing course of treatment that involves urgent care must be decided within 24 hours if made at least 24 hours before the authorization expires. Aetna publishes no ABA-specific decision clock or reauthorization lead time in the documents this guide cites.',
        status: 'plan-dependent',
        cites: [{ title: 'M.G.L. c. 176O § 12 — utilization review determinations (malegislature.gov)', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176O/Section12' }, { title: '29 CFR 2560.503-1(f)(2) — ERISA group health plan claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' }],
        verifyVia:
          'Benefits verification call or Availity: ask whether the plan is fully insured in Massachusetts (c. 176O clock) or self-funded ERISA (72-hour / 15-day clock), and how far ahead of expiry Aetna wants the ABA reauthorization.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Depends on the family and on plan funding. For plans regulated by the Massachusetts Division of Insurance, 211 CMR 38.05 sets the order. The plan covering the person "other than as a dependent" pays before the one covering them as a dependent. For a child whose parents are married or living together, "The Plan of the parent whose Birthday falls earlier in the calendar year is the Primary Plan." If both parents share a birthday, the plan that has covered that parent longer pays first. For parents who are divorced, separated or living apart, a court decree that makes one parent responsible controls. With no decree, the order is the custodial parent, then the custodial parent\'s spouse, then the non-custodial parent, then the non-custodial parent\'s spouse. A self-funded ERISA plan sets its COB rules in its own plan document. This plan pays before TRICARE ("By law, TRICARE pays after all other health insurance," except Medicaid and a few government programs). It also pays before CHAMPVA ("CHAMPVA is the last payer to OHI"). If the child also has MassHealth (for example CommonHealth to cover copays), this plan pays first. MassHealth\'s rule then requires the provider to be in this plan\'s network and to follow its authorization rules. A denial for missing PA or for being out of network forfeits the MassHealth secondary payment, and MassHealth needs this plan\'s final disposition (EOB) on the claim.',
        status: 'plan-dependent',
        cites: [{ title: '211 CMR 38.05 — Coordination of benefits: order of benefit determination (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/211-CMR-38-05' }, { title: 'TRICARE — Using Other Health Insurance', url: 'https://tricare.mil/Plans/OHI' }, { title: '38 CFR 17.276(d) — CHAMPVA is the last payer to other health insurance (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.276' }, { title: '130 CMR 450.316 — MassHealth third-party liability: requirements (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-316' }, { title: '130 CMR 450.317 — MassHealth third-party liability: payment limitations (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-317' }],
        verifyVia:
          'Benefits verification: ask whether the plan is fully insured in Massachusetts or self-funded, whether the child is on a second parent\'s plan (both parents\' birthdays, custody or court-decree terms), and whether the child also has MassHealth, TRICARE or CHAMPVA.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Aetna sets a duty, not a number. Where a state mandate, plan document or contract allows services from someone neither state-licensed nor BACB-certified, \u201cthere must be supervision and direction of the unlicensed or non-certified providers in line with practice standards.\u201d The ABA Medical Necessity Guide publishes no supervision percentage, ratio or caseload cap \u2014 the operative standard is professional practice plus whatever the contract adds.',
        status: 'verified',
        cites: [{ title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published. Neither the ABA Medical Necessity Guide nor Aetna\u2019s clinical policy bulletin on ABA addresses whether 97153 and 97155 may be billed for the same clock time; Aetna carries the concurrency question in its claim editing rather than in a public policy.',
        status: 'unverified',
        verifyVia:
          'Aetna precertification/provider services at the number on the member\u2019s ID card, and the plan\u2019s own reimbursement schedule \u2014 ask specifically whether 97155 pays alongside 97153 when analyst, technician and member are all face-to-face.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Not published. Aetna\u2019s ABA documents set medical-necessity criteria and precertification requirements for 97151\u201397158, 0362T and 0373T, but no per-day unit ceiling and no statement of which MUE table applies.',
        status: 'unverified',
        verifyVia:
          'Aetna provider services; confirm before promising a family more than four hours a day of 97153.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Not published in Aetna\u2019s ABA materials \u2014 no rule on who signs a session note or within what window.',
        status: 'unverified',
        verifyVia:
          'The Aetna provider manual and your participation agreement\u2019s documentation clause.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Aetna publishes no ABA place-of-service list. On school settings it says two things. CPB 0648: "Many Aetna plans exclude coverage of educational services. For example, speech therapy or ABA services during class would be excluded under these plans. Please check benefit plan exclusions." And precertification form GR-69017-4 asks "Are any ABA hours being requested during class?" and, if so, how many and for which codes. The IEP/IDEA carve-out in Aetna\'s ABA medical necessity guide sits in its Maryland exhibit, not in the national criteria. Where ABA is payable in a school, the community or a group home is a benefit-document question. In Massachusetts ARICA governs fully insured plans, so read the state mandate first on a fully insured member and the plan document first on a self-funded one.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
        verifyVia: 'The member\'s benefit document (educational-services exclusion), and Aetna provider services for whether school-setting ABA is payable on that plan.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'The claim carries the analyst, not the technician. \u201cServices must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope of practice definition, unless state mandates, plan documents or contracts require otherwise.\u201d The escape clause matters: a state mandate or your contract can move the line, so confirm before enrolling technicians.',
        status: 'verified',
        cites: [{ title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
    },
    pill: 'Payer Guide · Aetna · Massachusetts',
    h1: 'Aetna ABA coverage in Massachusetts: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Massachusetts: Prior Auth & ARICA Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Massachusetts families — the national clinical policy, prior authorization, the ARICA mandate (no age limits, no caps), the Down syndrome expansion effective 2026, LABA licensure, and what intake should verify.',
    intro: [
      'For an intake team in Massachusetts, an Aetna card means three layers at once: the carrier\'s national clinical policy, Massachusetts\' autism insurance mandate (ARICA, Chapter 207 of the Acts of 2010), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order — plus one genuinely Massachusetts-specific artifact: Aetna hosts and uses the state\'s Standard ABA PA form.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'ARICA — Ch. 207, Acts of 2010 (M.G.L. c. 175 § 47AA et al.)' },
      { label: 'Mandate age', value: 'No age limits — any age, medical-necessity based' },
      { label: 'Mandate caps', value: 'None — no dollar, visit, or unit limits on ABA' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans' },
      { label: 'New for 2026', value: 'Sole-diagnosis Down syndrome covered from 1/1/2026 (Ch. 388, Acts of 2024)' },
      { label: 'Licensure', value: 'MA Licensed Applied Behavior Analyst (LABA)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Massachusetts',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment, submitted via Availity or phone (Aetna\'s national ABA precert form GR-69017-4 says not to use it in Massachusetts) — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in Massachusetts is the legal floor underneath it: ARICA governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in Massachusetts.',
        ],
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      {
        h2: 'The Massachusetts mandate: ARICA',
        body: [
          'ARICA — An Act Relative to Insurance Coverage for Autism, Chapter 207 of the Acts of 2010, codified at M.G.L. c. 175 § 47AA and parallel sections for HMOs, service corporations, and GIC state-employee plans — is one of the strongest autism mandates in the country. Since January 1, 2011, fully-insured plans must cover the diagnosis and treatment of ASD with no age limits and no dollar, visit, or unit-of-service caps less than those on physical conditions; ABA is covered as habilitative/rehabilitative care when supervised by a board certified behavior analyst. Self-funded ERISA employer plans — a large share of Massachusetts employment — are exempt, answering to federal parity (MHPAEA) instead. And effective January 1, 2026, Chapter 388 of the Acts of 2024 extends the mandate: plans must also cover ABA (plus PT/OT/speech) for a sole diagnosis of Down syndrome.',
        ],
        cites: [
          { title: 'DisabilityInfo/AIRC — ARICA fact sheet', url: 'https://disabilityinfo.org/fact-sheet-library/laws-legislation/act-relative-to-insurance-coverage-for-autism-arica/' },
          { title: 'The Arc of Massachusetts — ABA for Down syndrome expansion (eff. 1/1/2026)', url: 'https://thearcofmass.org/post/expansion-of-coverage-of-applied-behavior-analysis-aba-for-individuals-with-down-syndrome/' },
        ],
      },
      {
        h2: 'Aetna\'s Massachusetts layer: the state standard form',
        body: [
          'Unusually for a national carrier, Aetna hosts and uses the Massachusetts Standard Form for Applied Behavior Analysis Services Prior Authorization Requests — the same multi-payer form the MassHealth world runs on: completed by the LABA, with request types for initial evaluation, initial services, continued services, and amendments, and an authorization period not to exceed 6 months. So a Massachusetts Aetna request is CPB 0554 clinical criteria on the state\'s paperwork, with state mandates taking precedence for fully-insured plans (Aetna maintains a CPB state-deviations page for exactly this). One thing Aetna does not have in Massachusetts: a Medicaid plan — no Aetna entity appears in the MassHealth roster, so every MA Aetna card is commercial.',
        ],
        cites: [
          { title: 'Aetna-hosted MA Standard ABA PA Form', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/ma-behavior-prior-auth-form.pdf' },
          { title: 'Aetna CPB state deviations page', url: 'https://www.aetna.com/health-care-professionals/cpb-state-deviations.html' },
        ],
      },
      {
        h2: 'Licensure & rates in Massachusetts',
        body: [
          'Massachusetts licenses behavior analysts as Licensed Applied Behavior Analysts (LABA), with an assistant tier (LAABA), through the Board of Registration of Allied Mental Health and Human Services Professions — under M.G.L. c. 112 as amended by Chapter 429 of the Acts of 2012, with requirements at 262 CMR 10.00, built on BCBA certification. The state\'s payers key the ABA benefit to the LABA: the standard PA form says the BCBA rendering and/or supervising the services "should" complete it, and the LABA license under 262 CMR 10.00 is what lets that analyst practice in Massachusetts at all. On rates: Aetna does not publish commercial ABA fee schedules for Massachusetts (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. The MassHealth schedule (97153 at $16.37/unit) is the in-state floor to benchmark against, knowing providers regard it as low.',
        ],
        cites: [
          { title: '262 CMR 10.00 — LABA/LAABA licensure requirements (mass.gov)', url: 'https://www.mass.gov/regulations/262-CMR-1000-requirements-for-licensure-as-an-applied-behavior-analyst-and-assistant-applied-behavior-analyst' },
          { title: 'MA Standard ABA PA Form (MassHealth version, upd. 3/12/2026)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_MassHealth.pdf' },
        ],
      },
      {
        h2: 'Claims: filing deadline and disputes',
        body: [
          'Aetna’s national provider manual (edition 6/26) publishes no numeric filing limit: it defines a clean claim as one “received in a timely manner,” so the operative deadline is the one in your Aetna agreement. Claim disputes go through Availity — the claim must be in Finalized status, then “Dispute Claim” from the Claim Status transaction — and Aetna runs one level of provider appeal for payment decisions; medical-necessity appeals go through the member appeal process.',
        ],
        cites: [
          { title: 'Aetna Provider Manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
        ],
      },
      {
        h2: 'How fast must Aetna pay a clean claim in Massachusetts?',
        body: [
          'Massachusetts gives the payer 45 days. An HMO’s provider contract must require it, within 45 days after receiving completed claim forms, to pay, to say in writing why it is not paying, or to say what additional information it needs; if it misses that window it owes interest “at the rate of 1.5 per cent per month, not to exceed 18 per cent per year” from day 45 (M.G.L. c. 176G, § 6). Insured accident and sickness policies carry the same 45-day notice rule and the same 1.5%-a-month interest (c. 175, § 110(G)). These statutes bind fully insured plans issued in the state; a self-funded employer plan (ERISA) is not subject to them and follows its plan documents and your contract.',
        ],
        cites: [
          { title: 'M.G.L. c. 175, § 110(G) — Accident and sickness claims', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter175/Section110' },
          { title: 'M.G.L. c. 176G, § 6 — HMO provider contracts (45-day payment)', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176G/Section6' },
        ],
      },
      {
        h2: 'Which codes does Aetna use for ABA? (H0031/H0032 and other H-codes)',
        body: [
          'Aetna’s ABA documents name CPT codes only. Its behavioral-health precertification list puts applied behavioral analysis under “97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T, 0373T.” Its ABA precertification request asks for hours by those same codes: assessment codes 97151, 97152 and 0362T per authorization period, treatment codes 97153–97158 and 0373T per week. CPB 0554 (reviewed October 14, 2026) also lists 97151–97158, with 0362T and 0373T as related codes. None of these documents lists a HCPCS H-code (H0031, H0032, H2014, H2019) for ABA. If a plan or contract seems to call for one, confirm with Aetna before billing it.',
        ],
        cites: [
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
          { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 10/14/2026)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        ],
      },
      {
        h2: 'What must an Aetna ABA reauthorization contain? Are graphs required?',
        body: [
          'Aetna’s ABA Medical Necessity Guide sets the evidence for any authorization: “demonstration of functional impairment on a standardized scale of functioning in the past 12 months” (for instance VABS-3, ABAS, VB-MAPP or ABLLS), target behaviors with “frequency, rate, symptom intensity or duration, or other objective measures of baseline levels” and “quantifiable criteria for progress,” and either documentation that the target behavior has improved or, if not, documentation of treatment modification, added assessments or consultation. The level of impairment must justify the hours requested. The guide does not require graphs.',
          'Aetna’s national precertification information request says “Don’t use this form for Maryland and Massachusetts,” so confirm the state’s submission package with Aetna precertification.',
        ],
        cites: [
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification (GR-69017-4, 7-26; eff. 8/1/2026; not for MD or MA)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (ARICA applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date — or, from 1/1/2026, Down syndrome genetic-testing confirmation on fully-insured plans.' },
      { title: 'LABA of record', desc: 'The MA standard form Aetna uses is completed by the rendering or supervising LABA.' },
    ],
    sources: [
      { title: 'Aetna — Participating provider behavioral health precertification list (ABA: 97151–97158, 0362T, 0373T)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'Aetna-hosted MA Standard ABA PA Form', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/ma-behavior-prior-auth-form.pdf' },
      { title: 'DisabilityInfo/AIRC — ARICA fact sheet', url: 'https://disabilityinfo.org/fact-sheet-library/laws-legislation/act-relative-to-insurance-coverage-for-autism-arica/' },
      { title: 'Session Law — Acts of 2010, Chapter 207 (malegislature.gov)', url: 'https://malegislature.gov/Laws/SessionLaws/Acts/2010/Chapter207' },
      { title: 'The Arc of Massachusetts — Down syndrome ABA expansion', url: 'https://thearcofmass.org/post/expansion-of-coverage-of-applied-behavior-analysis-aba-for-individuals-with-down-syndrome/' },
      { title: '262 CMR 10.00 — LABA/LAABA licensure requirements (mass.gov)', url: 'https://www.mass.gov/regulations/262-CMR-1000-requirements-for-licensure-as-an-applied-behavior-analyst-and-assistant-applied-behavior-analyst' },
      { title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna CPB state deviations page', url: 'https://www.aetna.com/health-care-professionals/cpb-state-deviations.html' },
      { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table: Commercial vs. Medicare columns; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
      { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      { title: 'M.G.L. c. 175, § 110(G) — Accident and sickness claims', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter175/Section110' },
      { title: 'M.G.L. c. 176G, § 6 — HMO provider contracts (45-day payment)', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176G/Section6' },
      { title: 'Aetna Provider Manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
    ],
    faq: [
      { q: 'Does Aetna cover ABA therapy in Massachusetts?', a: 'Yes — under the carrier\'s national policy for ASD, layered on ARICA for fully-insured plans, which bars age limits and benefit caps. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Massachusetts autism mandate require?', a: 'ARICA (Ch. 207, Acts of 2010) is one of the strongest mandates nationally: fully-insured plans must cover ASD diagnosis and treatment at any age with no dollar, visit, or unit caps, including ABA supervised by a board certified behavior analyst. From 1/1/2026, Chapter 388 adds sole-diagnosis Down syndrome.' },
      { q: 'Does Aetna use a Massachusetts-specific ABA form?', a: 'Yes — Aetna hosts and uses the Massachusetts Standard ABA PA form (LABA-completed, 6-month max authorization periods), the same multi-payer form used across the state.' },
      { q: 'What does Aetna pay for ABA in Massachusetts?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the MassHealth 101 CMR 358 schedule knowing it\'s widely considered low.' },
      { q: 'Does Aetna require RBT certification for ABA technicians?', a: 'Not by name. Aetna\'s ABA medical necessity guide says services must be provided directly or billed by licensed behavior analysts, BCBAs or licensed psychologists "unless state mandates, plan documents or contracts require otherwise." Where those allow services by unlicensed or non-certified staff, "there must be supervision and direction" in line with practice standards. Your contract and any state licensure law decide the technician credential.' },
      { q: 'Can the ABA assessment (97151) be done by telehealth with Aetna?', a: 'On commercial plans, yes: Aetna\'s telemedicine payment policy lists 97151, 97153, 97155, 97156 and 97157 with modifier GT, 95 or FR. 97152, 97154 and 97158 are listed for Medicare Advantage only. Confirm the policy is current and that the plan has a telehealth benefit.' },
      { q: 'Does Aetna cover ABA for Down syndrome in Massachusetts?', a: 'It depends on the plan. Aetna\'s national policy CPB 0554 (last reviewed 11/26/2025) still calls ABA experimental for Down syndrome without an autism co-morbidity and publishes no Massachusetts exception. Chapter 388 requires fully insured Massachusetts plans to cover sole-diagnosis Down syndrome from 1/1/2026, so on a fully insured plan a denial on CPB 0554 grounds is worth escalating on the mandate.' },
      { q: 'What is Aetna’s timely filing limit in Massachusetts?', a: 'Aetna’s national provider manual (6/26) does not publish a number — the filing limit is the one in your Aetna agreement.' },
      { q: 'How fast must Aetna pay a clean ABA claim in Massachusetts?', a: 'Massachusetts law gives a fully insured plan 45 days from receiving a completed claim to pay it, explain the non-payment or ask for what is missing, with interest of 1.5% a month (capped at 18% a year) after that (M.G.L. c. 176G, § 6; c. 175, § 110(G)). Self-funded employer plans are not bound by the statute.' },
      { q: 'Does Aetna accept H0031 or H0032 for ABA?', a: 'Aetna’s precertification list, its ABA precertification request and CPB 0554 list only CPT 97151–97158, 0362T and 0373T for ABA. No H-code appears in them, so bill the CPT codes unless Aetna tells you otherwise for a specific plan.' },
      { q: 'Does Aetna require graphs for ABA reassessments?', a: 'Aetna’s documents ask for data, not graphs: a standardized functioning assessment within the past 12 months, baseline and quantifiable progress measures for each target behavior, and documentation of improvement or of treatment changes.' },
    ],
  },

  'cigna-massachusetts': {
    slug: 'cigna-massachusetts',
    family: 'cigna',
    cardDesc: 'EN0499 (no MA carve-out) + ARICA\'s no-cap, any-age floor for fully-insured plans.',
    assessmentPA: {
      value: 'Not required for assessment codes 97151, 97152, 0362T (per Cigna\'s autism resource guide — EN0499 itself states no prior-authorization rule)',
      status: 'verified',
      cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    treatmentPA: {
      value: 'Required — assessment + treatment plan with the ABA PA form (see Cigna\'s autism resource guide; EN0499 sets the clinical criteria, not the PA rule)',
      status: 'verified',
      cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD only; Rett syndrome (F84.2) excluded under EN0499; fully-insured MA plans must also cover sole-diagnosis Down syndrome from 1/1/2026 (Ch. 388)',
      status: 'plan-dependent',
      cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'The Arc of Massachusetts — ABA for Down syndrome expansion (eff. 1/1/2026)', url: 'https://thearcofmass.org/post/expansion-of-coverage-of-applied-behavior-analysis-aba-for-individuals-with-down-syndrome/' }],
      verifyVia:
        'The member\u2019s benefit document and Evernorth Provider Services at 800.926.2273 \u2014 funding type decides the diagnosis gate: EN0499 carries no Massachusetts provision and covers ASD only (F84.0\u2013F84.9 except F84.2), while a Massachusetts fully-insured plan must also cover sole-diagnosis Down syndrome from 1/1/2026 under Ch. 388.',
      blocker: 'per-case',
    },
    payer: 'Cigna / Evernorth in Massachusetts',
    state: 'MA', kind: 'commercial',
    intakeGates: {
      ageLimit: {
        value:
          'EN0499 sets no age limit. The policy\'s medical-necessity criteria turn on diagnosis, assessment and treatment-plan content rather than on age, and its own definitions note only that assessment instruments must have established reliability and validity "for use with members of the population tested (e.g., age, language preference, etc.)." The binding age question is the legal layer underneath: ARICA bars fully-insured Massachusetts plans from imposing any age limit on ASD diagnosis and treatment, so on a fully-insured card there is no upper bound at all; a self-funded ERISA plan answers to its own plan document.',
        status: 'plan-dependent',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'DisabilityInfo/AIRC — ARICA fact sheet', url: 'https://disabilityinfo.org/fact-sheet-library/laws-legislation/act-relative-to-insurance-coverage-for-autism-arica/' }],
        verifyVia:
          'The member\'s benefit document and Evernorth Provider Services at 800.926.2273 — funding type decides whether the state mandate or the plan document sets the age boundary.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Evernorth dates the diagnosis without expiring it, and expires the assessment instead. The diagnosis package must carry "The name, credentials, and type of licensure of the individual who made the diagnosis" and "The date on which the diagnosis was most recently made" — but no maximum age for that date. Where recency does bite is the continued-treatment request: improvement must be demonstrated "with the use of a reliable, valid, and standardized assessment instrument completed no more than one year prior to the start date of the continued treatment request," against data collected within the previous six months of treatment.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosingProviders: {
        value:
          'An independent-practice test, with two explicit disqualifiers. The diagnosis must be made "based on the criteria in the Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR) by a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice." What does not count: "educational identification or meeting educational eligibility for services related to autism through the [Individuals] with Disabilities Education Act may not meet criteria as a formal diagnosis of ASD," and a diagnosis termed "provisional," "proposed," "potential," "at risk of" or "rule out" is not confirmed. F84.2 (Rett syndrome) is excluded from the covered code range.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosticTools: {
        value:
          'No named instrument, but a strict standard for whichever one is used. The comprehensive ABA assessment must include "Administration of a reliable, valid, and standardized assessment instrument that measures the individual\'s functioning in the domains included in the diagnostic criteria for ASD in the DSM-5-TR" — social communication and social interaction, and restricted, repetitive patterns of behavior. The instrument must be completed in its entirety and as designed, be reliable and valid for the population tested, be administered and interpreted by someone trained to do so, be the most current version ("must be the Vineland-3 vs. Vineland-II"), assess current abilities, and record the date of administration, the respondent and the form type. Where someone other than the requesting provider administered it, the request must show documented collaboration with that professional and that the results correspond with the requesting provider\'s own direct observation.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      referral: {
        value:
          'No PCP referral and no Evernorth order form. Evernorth\'s Behavioral Health Administrative Guidelines (September 2026) say, for Cigna HMO and POS plans and for Cigna SureFit and Cigna Connect, "Referrals are not required for behavioral health services"; the open-access, Network Open Access and LocalPlus plans need no referral to see specialists at all. ABA is gated by prior authorization through the Evernorth autism team (EN0499: confirmed DSM-5-TR diagnosis, qualifying assessment, compliant treatment plan), not by an order. For a fully insured Massachusetts plan, ARICA defines covered autism treatment as care "prescribed, provided or ordered for an individual diagnosed with 1 of the autism spectrum disorders by a licensed physician or a licensed psychologist who determines the care to be medically necessary" (M.G.L. c. 175 § 47AA; c. 176G § 4V for HMOs). In practice the diagnosing physician\'s or psychologist\'s signed evaluation, recommending ABA, is the document that goes in with the first request. The statute sets no validity period, and self-funded ERISA plans sit outside it.',
        status: 'verified',
        cites: [{ title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026) — benefit plan types', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' }, { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'M.G.L. c. 175, § 47AA — Coverage for diagnosis and treatment of autism spectrum disorder', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter175/Section47AA' }, { title: 'M.G.L. c. 176G, § 4V — HMO coverage for autism spectrum disorder', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176G/Section4V' }],
      },
      telehealth: {
        value:
          'The most permissive telehealth position of the three national carriers, stated in one line: "All ABA CPT codes are covered telehealth services." EN0499 backs it structurally — "ABA treatment may be rendered via traditional in-person service delivery, telehealth, or a hybrid of in-person and telehealth service modalities," with the modality chosen on individual characteristics, the treatment plan, caregiver participation, environment, evidence of efficacy and safety, and technological requirements. Two qualifications worth carrying into scheduling: telehealth delivery is one of the settings the policy expects treatment goals to address, and the requirement to have the treatment plan signed does not apply to telehealth services. No POS code list is published. That includes the 97151 assessment and 97155 protocol modification. EN0499 describes direct case supervision as occurring "concurrently with the delivery of direct treatment," with the BCBA "face-to-face with the individual and either the Registered Behavior Technician® [RBT®] or the Board Certified Assistant Behavior Analyst® [BCaBA®]," at one to two hours per ten hours of direct treatment; it publishes no separate in-person minimum for supervision delivered by telehealth. On the claim, Evernorth’s Behavioral Health Administrative Guidelines (September 2026) say: “If billing telehealth services, please use the following guidance: Modifier 95 in Field 24-D to specify telehealth. 02 for Place of Service in Field 24-B.” Modifier 95 “will not change the reimbursement.” To deliver virtual sessions the provider first attests to Evernorth’s telehealth specialty requirements on the Attested Specialty Form, which adds “telehealth” to the provider profile. The guidelines and EN0499 say nothing about flagging telehealth on the ABA authorization itself.',
        status: 'verified',
        cites: [ { title: 'Evernorth Behavioral Health Administrative Guidelines (rev. Sept. 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. For a fully insured plan issued in Massachusetts, M.G.L. c. 176O § 12 sets the clock. An initial determination is due "within two working days of obtaining all necessary information." An approval is phoned to the provider within 24 hours and confirmed in writing within two working days after that. A concurrent review (reauthorization) is due "within one working day of obtaining all necessary information," and during that review "the service shall be continued without liability to the insured until the insured has been notified of the determination." These clocks start when the file is complete, not when the request arrives, so a request missing information is not yet on the clock. A self-funded employer plan follows the federal ERISA claims rule instead. Urgent decisions are due within 72 hours. Other pre-service decisions are due within a reasonable time "but not later than 15 days after receipt of the claim," with one 15-day extension. A request to extend an ongoing course of treatment that involves urgent care must be decided within 24 hours if made at least 24 hours before the authorization expires. Cigna adds its own submission window: "For ABA, we encourage providers to request authorizations up to 30 days in advance of or two weeks after the start date of service. A delay in request may result in a retrospective review and could delay the determination for up to 30 days."',
        status: 'plan-dependent',
        cites: [{ title: 'M.G.L. c. 176O § 12 — utilization review determinations (malegislature.gov)', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176O/Section12' }, { title: '29 CFR 2560.503-1(f)(2) — ERISA group health plan claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' }, { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        verifyVia:
          'Benefits verification call or the CignaforHCP portal: ask whether the plan is fully insured in Massachusetts (c. 176O clock) or self-funded ERISA (72-hour / 15-day clock).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Depends on the family and on plan funding. For plans regulated by the Massachusetts Division of Insurance, 211 CMR 38.05 sets the order. The plan covering the person "other than as a dependent" pays before the one covering them as a dependent. For a child whose parents are married or living together, "The Plan of the parent whose Birthday falls earlier in the calendar year is the Primary Plan." If both parents share a birthday, the plan that has covered that parent longer pays first. For parents who are divorced, separated or living apart, a court decree that makes one parent responsible controls. With no decree, the order is the custodial parent, then the custodial parent\'s spouse, then the non-custodial parent, then the non-custodial parent\'s spouse. A self-funded ERISA plan sets its COB rules in its own plan document. This plan pays before TRICARE ("By law, TRICARE pays after all other health insurance," except Medicaid and a few government programs). It also pays before CHAMPVA ("CHAMPVA is the last payer to OHI"). If the child also has MassHealth (for example CommonHealth to cover copays), this plan pays first. MassHealth\'s rule then requires the provider to be in this plan\'s network and to follow its authorization rules. A denial for missing PA or for being out of network forfeits the MassHealth secondary payment, and MassHealth needs this plan\'s final disposition (EOB) on the claim.',
        status: 'plan-dependent',
        cites: [{ title: '211 CMR 38.05 — Coordination of benefits: order of benefit determination (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/211-CMR-38-05' }, { title: 'TRICARE — Using Other Health Insurance', url: 'https://tricare.mil/Plans/OHI' }, { title: '38 CFR 17.276(d) — CHAMPVA is the last payer to other health insurance (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.276' }, { title: '130 CMR 450.316 — MassHealth third-party liability: requirements (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-316' }, { title: '130 CMR 450.317 — MassHealth third-party liability: payment limitations (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-317' }],
        verifyVia:
          'Benefits verification: ask whether the plan is fully insured in Massachusetts or self-funded, whether the child is on a second parent\'s plan (both parents\' birthdays, custody or court-decree terms), and whether the child also has MassHealth, TRICARE or CHAMPVA.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Evernorth DOES publish a supervision standard, in EN0499 — direct case supervision (the BCBA face-to-face with the individual alongside the RBT or BCaBA) plus indirect case supervision “is consistent with the general accepted standard of care of one to two hours per ten hours of direct treatment”, and “when direct treatment is 10 hours per week or less, a minimum of one to two hours per week of direct case supervision is provided.” It is stated as a standard of care rather than a hard caseload cap, and supervisory services must match the CPT code descriptions.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions (Supervision / Direction of Treatment, p.5)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      concurrentBilling: {
        value:
          'Yes \u2014 and Evernorth writes it as an explicit carve-out from its general rule: \u201cOnly one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time).\u201d Both must be with the patient; analyst time away from the patient is not inside the exception. Other therapies are a separate rule: EN0499 (eff. 5/15/2026) says \u201cProvision of ABA treatment is not covered or reimbursable when delivered to the same individual, at the same time as any other treatment modality (e.g., ABA and speech therapy, or ABA and occupational therapy).\u201d',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Evernorth \u2014 Autism Resource Guide for behavioral health providers (March 2025, PCOMM-2025-225)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      dailyLimits: {
        value: 'No per-day or per-week unit cap is published. Evernorth’s autism resource guide says “All of the ABA CPT codes are in 15-minute increments” and “All ABA services must be billed with CPT codes 97151–97158, 0362T, and 0373T ONLY,” and adds that “Only one provider can bill for a unit of time,” except 97153, 97154 and 97155 during direct supervision. Neither the guide, EN0499 nor Evernorth’s Behavioral Health Administrative Guidelines (September 2026) sets a unit maximum or names an MUE table for ABA. The authorization, sized to the treatment plan under EN0499, is what bounds the day; ask Evernorth at authorization if a schedule needs more than eight hours of 97153 in a day.',
        status: 'verified',
        cites: [
          { title: 'Evernorth — Autism Resource Guide for behavioral health providers (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Evernorth Behavioral Health Administrative Guidelines (rev. Sept. 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
        ],
      },
      noteSignature: {
        value:
          'Not published in the autism resource guide \u2014 no rule on who signs a session note or when.',
        status: 'unverified',
        verifyVia:
          'The Evernorth Behavioral Health provider administrative guide and your participation agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Only the telehealth half is published: \u201call ABA CPT codes are covered telehealth services,\u201d subject to the Intensive Behavioral Interventions coverage policy (EN0499). The guide states no school, community or group-home rule.',
        status: 'unverified',
        cites: [{ title: 'Evernorth \u2014 Autism Resource Guide for behavioral health providers (March 2025, PCOMM-2025-225)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        verifyVia:
          'Evernorth Provider Services at 800.926.2273 for school and community settings, plus the member\u2019s benefit document.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'Under the supervising provider, because the technician cannot be credentialed: \u201cEvernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider.\u201d Practically, the BCBA\u2019s credential is what the claim rides on for technician-delivered 97153.',
        status: 'verified',
        cites: [{ title: 'Evernorth \u2014 Autism Resource Guide for behavioral health providers (March 2025, PCOMM-2025-225)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
    },
    pill: 'Payer Guide · Cigna · Massachusetts',
    h1: 'Cigna / Evernorth ABA coverage in Massachusetts: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Massachusetts: Prior Auth & ARICA Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Massachusetts families — the national EN0499 policy, no-PA assessments, the ARICA mandate (no age limits, no caps), the Down syndrome expansion effective 2026, LABA licensure, and what intake should verify.',
    intro: [
      'For an intake team in Massachusetts, a Cigna card means three layers at once: the carrier\'s national clinical policy, Massachusetts\' autism insurance mandate (ARICA, Chapter 207 of the Acts of 2010), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'ARICA — Ch. 207, Acts of 2010 (M.G.L. c. 175 § 47AA et al.)' },
      { label: 'Mandate age', value: 'No age limits — any age, medical-necessity based' },
      { label: 'Mandate caps', value: 'None — no dollar, visit, or unit limits on ABA' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans' },
      { label: 'New for 2026', value: 'Sole-diagnosis Down syndrome covered from 1/1/2026 (Ch. 388, Acts of 2024)' },
      { label: 'Licensure', value: 'MA Licensed Applied Behavior Analyst (LABA)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Massachusetts',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. That clinical policy is national — what changes in Massachusetts is the legal floor underneath it: ARICA governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in Massachusetts.',
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Massachusetts mandate: ARICA',
        body: [
          'ARICA — An Act Relative to Insurance Coverage for Autism, Chapter 207 of the Acts of 2010, codified at M.G.L. c. 175 § 47AA and parallel sections for HMOs, service corporations, and GIC state-employee plans — is one of the strongest autism mandates in the country. Since January 1, 2011, fully-insured plans must cover the diagnosis and treatment of ASD with no age limits and no dollar, visit, or unit-of-service caps less than those on physical conditions; ABA is covered as habilitative/rehabilitative care when supervised by a board certified behavior analyst. Self-funded ERISA employer plans — a large share of Massachusetts employment — are exempt, answering to federal parity (MHPAEA) instead. And effective January 1, 2026, Chapter 388 of the Acts of 2024 extends the mandate: plans must also cover ABA (plus PT/OT/speech) for a sole diagnosis of Down syndrome.',
        ],
        cites: [
          { title: 'DisabilityInfo/AIRC — ARICA fact sheet', url: 'https://disabilityinfo.org/fact-sheet-library/laws-legislation/act-relative-to-insurance-coverage-for-autism-arica/' },
          { title: 'The Arc of Massachusetts — ABA for Down syndrome expansion (eff. 1/1/2026)', url: 'https://thearcofmass.org/post/expansion-of-coverage-of-applied-behavior-analysis-aba-for-individuals-with-down-syndrome/' },
        ],
      },
      {
        h2: 'EN0499 has no Massachusetts carve-out',
        body: [
          'We checked the current EN0499 (effective 5/15/2026) end to end: it contains no Massachusetts-specific provision — its only state carve-out is Virginia fully-insured business. So Massachusetts Cigna members get the standard EN0499 machinery, including the no-PA assessment fast path, with ARICA layered on top for fully-insured plans: where the national policy and the mandate diverge, the policy itself concedes that state coverage mandates control. Cigna runs no Medicaid plan in Massachusetts, so every MA Cigna card is commercial — the open question on each is only funding type.',
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Massachusetts',
        body: [
          'Massachusetts licenses behavior analysts as Licensed Applied Behavior Analysts (LABA), with an assistant tier (LAABA), through the Board of Registration of Allied Mental Health and Human Services Professions — under M.G.L. c. 112 as amended by Chapter 429 of the Acts of 2012, with requirements at 262 CMR 10.00, built on BCBA certification. Massachusetts payers key the ABA benefit to the LABA. On rates: Cigna does not publish commercial ABA fee schedules for Massachusetts (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. The MassHealth schedule (97153 at $16.37/unit) is the in-state floor to benchmark against, knowing providers regard it as low.',
        ],
        cites: [
          { title: '262 CMR 10.00 — LABA/LAABA licensure requirements (mass.gov)', url: 'https://www.mass.gov/regulations/262-CMR-1000-requirements-for-licensure-as-an-applied-behavior-analyst-and-assistant-applied-behavior-analyst' },
        ],
      },
      {
        h2: 'Is Cigna\'s ABA network open to new providers?',
        body: [
          'Evernorth Behavioral Health, which runs Cigna\'s ABA network, says it "is committed to expanding our network of autism providers." It requires providers to be certified by a national governing body or a state licensing board (BCBA, BCBA-D, BCaBA, licensed behavior analyst or other behavioral health licensure). Individual providers complete the Evernorth Behavioral Provider Information Form; autism clinics and large group practices complete the Evernorth Screening Application for Autism Clinics. An application can take up to 90 days, and once a clinic contract is signed each certified or licensed provider must also be credentialed, which "can take an additional 60 to 90 days." Providers must be fully credentialed to render in-network services. "Evernorth does not credential nonlicensed/noncertified staff": technician services are billed under the supervising provider.',
        ],
        cites: [{ title: 'Evernorth Behavioral Health — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      {
        h2: 'Claims: filing deadline and disputes',
        body: [
          'Cigna’s behavioral benefits, ABA included, are administered by Evernorth Behavioral Health, whose administrative guidelines (revised September 2026) “will only consider claims submitted within 90 days of the date of service or as otherwise defined in your Provider Agreement” — a longer state-law limit overrides it, the clock resets to the date Cigna asks for more information, and Medicaid-secondary claims get three years. Appeals must be started in writing within 180 calendar days of the payment or denial decision. Its Massachusetts addendum writes the 45-day pay-or-explain rule and the 1.5%-a-month interest into the provider agreement.',
        ],
        cites: [
          { title: 'Evernorth Behavioral Health Administrative Guidelines (rev. Sept. 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
        ],
      },
      {
        h2: 'How fast must Cigna pay a clean claim in Massachusetts?',
        body: [
          'Massachusetts gives the payer 45 days. An HMO’s provider contract must require it, within 45 days after receiving completed claim forms, to pay, to say in writing why it is not paying, or to say what additional information it needs; if it misses that window it owes interest “at the rate of 1.5 per cent per month, not to exceed 18 per cent per year” from day 45 (M.G.L. c. 176G, § 6). Insured accident and sickness policies carry the same 45-day notice rule and the same 1.5%-a-month interest (c. 175, § 110(G)). These statutes bind fully insured plans issued in the state; a self-funded employer plan (ERISA) is not subject to them and follows its plan documents and your contract.',
        ],
        cites: [
          { title: 'M.G.L. c. 175, § 110(G) — Accident and sickness claims', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter175/Section110' },
          { title: 'M.G.L. c. 176G, § 6 — HMO provider contracts (45-day payment)', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176G/Section6' },
        ],
      },
      {
        h2: 'Which codes does Cigna pay for ABA? (H0031/H0032 and other H-codes)',
        body: [
          'CPT codes only. Evernorth’s autism resource guide states that “All ABA services must be billed with CPT codes 97151–97158, 0362T, and 0373T ONLY,” that “All of the ABA CPT codes are in 15-minute increments,” and that “Only one provider can bill for a unit of time,” except 97153, 97154 and 97155 billed during direct supervision. HCPCS H-codes such as H0031, H0032, H2014 or H2019 are not accepted for ABA on Cigna plans. EN0499’s coding section lists the same ten CPT codes as medically necessary when the policy’s criteria are met.',
        ],
        cites: [
          { title: 'Evernorth — Autism Resource Guide for behavioral health providers (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'What must a Cigna ABA reauthorization contain? Are graphs required?',
        body: [
          'EN0499’s “Criteria for Continued Treatment with ABA” require dated numbers rather than graphs. The request needs an updated treatment plan and “Quantitative baseline, interim and current data … with dates reported from when the data were collected for all behaviors and skills” across every setting where treatment occurs. Current data must be “collected within no more than 60 days prior to the start date of the continued treatment request, as well as … within no more than 60 days prior to the date the authorization request is received.” It also needs a reliable, valid, standardized assessment “completed no more than one year prior to the start date,” dated data on stakeholder (caregiver) training goals, and, where progress has stalled, the barriers and the protocol changes made. A new standardized assessment and fresh data are required after any break in treatment longer than 60 days. The policy defines interim data as covering at least the previous six months and allows it to be “reported as patient data points and/or as a relevant average.” The policy does not require graphs.',
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (ARICA applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date — or, from 1/1/2026, Down syndrome genetic-testing confirmation on fully-insured plans.' },
      { title: 'Assessment fast path', desc: 'No PA on 97151/97152/0362T under EN0499 — with the diagnosis in hand, the assessment can book immediately.' },
    ],
    sources: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'DisabilityInfo/AIRC — ARICA fact sheet', url: 'https://disabilityinfo.org/fact-sheet-library/laws-legislation/act-relative-to-insurance-coverage-for-autism-arica/' },
      { title: 'Session Law — Acts of 2010, Chapter 207 (malegislature.gov)', url: 'https://malegislature.gov/Laws/SessionLaws/Acts/2010/Chapter207' },
      { title: 'The Arc of Massachusetts — Down syndrome ABA expansion', url: 'https://thearcofmass.org/post/expansion-of-coverage-of-applied-behavior-analysis-aba-for-individuals-with-down-syndrome/' },
      { title: '262 CMR 10.00 — LABA/LAABA licensure requirements (mass.gov)', url: 'https://www.mass.gov/regulations/262-CMR-1000-requirements-for-licensure-as-an-applied-behavior-analyst-and-assistant-applied-behavior-analyst' },
      { title: 'M.G.L. c. 175, § 110(G) — Accident and sickness claims', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter175/Section110' },
      { title: 'M.G.L. c. 176G, § 6 — HMO provider contracts (45-day payment)', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176G/Section6' },
      { title: 'Evernorth Behavioral Health Administrative Guidelines (rev. Sept. 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
    ],
    faq: [
      { q: 'Does Cigna cover ABA therapy in Massachusetts?', a: 'Yes — under national policy EN0499 for ASD (no PA on assessment codes), layered on ARICA for fully-insured plans, which bars age limits and benefit caps. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Massachusetts autism mandate require?', a: 'ARICA (Ch. 207, Acts of 2010) is one of the strongest mandates nationally: fully-insured plans must cover ASD diagnosis and treatment at any age with no dollar, visit, or unit caps, including ABA supervised by a board certified behavior analyst. From 1/1/2026, Chapter 388 adds sole-diagnosis Down syndrome.' },
      { q: 'Does EN0499 apply differently in Massachusetts?', a: 'No — unlike Virginia, EN0499 carries no Massachusetts carve-out, so the standard policy (including the no-PA assessment path) applies, with ARICA controlling for fully-insured plans where they diverge.' },
      { q: 'Is Cigna accepting new ABA providers?', a: 'Evernorth, which runs Cigna\'s behavioral network, says it is "committed to expanding our network of autism providers." Individual providers submit the Evernorth Behavioral Provider Information Form and clinics the Screening Application for Autism Clinics; allow up to 90 days for the application plus 60 to 90 days of credentialing per provider.' },
      { q: 'Does Cigna credential RBTs?', a: 'No. "Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." EN0499 expects the direct work from an RBT or BCaBA under BCBA case supervision.' },
      { q: 'What is Cigna’s timely filing limit in Massachusetts?', a: 'Evernorth Behavioral Health, which administers Cigna’s ABA benefit, considers claims submitted within 90 days of the date of service unless your provider agreement or a longer state-law limit says otherwise.' },
      { q: 'How fast must Cigna pay a clean ABA claim in Massachusetts?', a: 'Massachusetts law gives a fully insured plan 45 days from receiving a completed claim to pay it, explain the non-payment or ask for what is missing, with interest of 1.5% a month (capped at 18% a year) after that (M.G.L. c. 176G, § 6; c. 175, § 110(G)). Self-funded employer plans are not bound by the statute.' },
      { q: 'Does Cigna accept H0031 or H0032 for ABA?', a: 'No. Evernorth’s autism resource guide requires all ABA services to be billed with CPT 97151–97158, 0362T and 0373T only, in 15-minute units.' },
      { q: 'Does Cigna require graphs for ABA reassessments?', a: 'No graph is required. EN0499 requires dated quantitative baseline, interim and current data for every behavior and skill (current data no older than 60 days at the request and the start date), a standardized assessment within the past year, and caregiver-goal data. Data may be reported as data points or averages.' },
    ],
  },

  'unitedhealthcare-massachusetts': {
    slug: 'unitedhealthcare-massachusetts',
    family: 'unitedhealthcare',
    cardDesc: 'Optum BH803ABASCC + ARICA + two explicit MA entries in Optum\'s state-mandate supplement.',
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
      value: 'Yes — DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.); MA commercial members also covered for sole-diagnosis Down syndrome eff. 1/1/2026 (Optum state-mandate supplement)',
      status: 'verified',
      cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
    },
    payer: 'UnitedHealthcare / Optum in Massachusetts',
    state: 'MA', kind: 'commercial',
    intakeGates: {
      ageLimit: {
        value:
          'Optum\'s Supplemental Clinical Criteria set no age limit for ABA — coverage turns on a valid ASD diagnosis, a credentialed provider and demonstrated medical necessity, with age entering only through norm-referenced instruments that compare functioning "to age-matched neurotypical peers." The binding age question is the legal layer underneath: ARICA bars fully-insured Massachusetts plans from imposing any age limit on ASD diagnosis and treatment, so on a fully-insured card there is no upper bound at all; a self-funded ERISA plan answers to its own plan document. Optum\'s own Massachusetts entries are not age rules: the Medicaid Early Intervention entry caps EI members at 30 hours per week, and the 1/1/2026 commercial entry adds Down syndrome coverage.',
        status: 'plan-dependent',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'DisabilityInfo/AIRC — ARICA fact sheet', url: 'https://disabilityinfo.org/fact-sheet-library/laws-legislation/act-relative-to-insurance-coverage-for-autism-arica/' }],
        verifyVia:
          'The member\'s benefit document and Optum via Provider Express — funding type decides whether the state mandate or the plan document sets the age boundary.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Not published. Optum\'s ABA criteria require a valid DSM-5-TR diagnosis confirmed with at least one clinically validated tool but set no maximum age for the diagnostic evaluation. The recency Optum does police is progress rather than diagnosis: continued coverage looks for demonstrable progress within a 6-month window and for updated standardized adaptive measures with change scores.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'Optum via Provider Express, or the Care Advocate handling the authorization — ask whether the plan applies a diagnostic-evaluation recency window at intake.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'A licensure test with a diagnostic-competence qualifier: "A valid diagnosis of ASD (or other applicable diagnosis as required by governing laws) must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis according to the diagnostic criteria based on the DSM-5-TR." The diagnosing clinician must also confirm and document the severity level. Once the diagnosis is confirmed, the ABA provider identified for the member must be a master\'s- or doctoral-level BCBA, a licensed behavioral health clinician who has attested to sufficient expertise and been credentialed for ABA, or a BCaBA or non-licensed individual working under direct supervision.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      diagnosticTools: {
        value:
          'Optum publishes the most explicit instrument list of any national carrier, and splits it three ways. The DSM-5 diagnosis and severity level must be confirmed "using at least one clinically validated tool (not an all-inclusive list)": first-level screeners (ABC, CHAT/M-CHAT, CSBS-DP-IT-Checklist, ASQ, AQ, CAST), second-level screeners (CARS/CARS-2, RITA-T, STAT), and formal diagnostic tools used as part of a comprehensive diagnostic evaluation — the Autism Diagnostic Interview-Revised (ADI), the Autism Diagnostic Observation Schedule (ADOS/ADOS-2), and the Diagnostic Interview for Social and Communication Disorders (DISCO). Separately, treatment intensity must be chosen against baseline measurement using at least one of ATEC, VB-MAPP, ABLLS/ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, VABS or CFQL-2, individualized to the client rather than applied uniformly.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      referral: {
        value:
          'No PCP referral and no Optum order form. UnitedHealthcare\'s 2026 Care Provider Administrative Guide lists, among commercial services that do not need a referral even on referral-required plans, "Mental health/substance use disorder services with network behavioral health clinicians." Optum gates ABA on prior authorization instead: "Prior authorization is required for ABA (unless otherwise specified or mandated by contract or law)," as a two-step assessment-then-treatment request. For a fully insured Massachusetts plan, ARICA defines covered autism treatment as care "prescribed, provided or ordered for an individual diagnosed with 1 of the autism spectrum disorders by a licensed physician or a licensed psychologist who determines the care to be medically necessary" (M.G.L. c. 175 § 47AA; c. 176G § 4V for HMOs). In practice the diagnosing physician\'s or psychologist\'s signed evaluation, recommending ABA, is the document that goes in with the first request. The statute sets no validity period, and self-funded ERISA plans sit outside it.',
        status: 'verified',
        cites: [{ title: 'UnitedHealthcare — 2026 Care Provider Administrative Guide, Ch. 6 Referrals (commercial services not requiring a referral)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' }, { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'M.G.L. c. 175, § 47AA — Coverage for diagnosis and treatment of autism spectrum disorder', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter175/Section47AA' }, { title: 'M.G.L. c. 176G, § 4V — HMO coverage for autism spectrum disorder', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176G/Section4V' }],
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
          'Depends on how the plan is funded. For a fully insured plan issued in Massachusetts, M.G.L. c. 176O § 12 sets the clock. An initial determination is due "within two working days of obtaining all necessary information." An approval is phoned to the provider within 24 hours and confirmed in writing within two working days after that. A concurrent review (reauthorization) is due "within one working day of obtaining all necessary information," and during that review "the service shall be continued without liability to the insured until the insured has been notified of the determination." These clocks start when the file is complete, not when the request arrives, so a request missing information is not yet on the clock. A self-funded employer plan follows the federal ERISA claims rule instead. Urgent decisions are due within 72 hours. Other pre-service decisions are due within a reasonable time "but not later than 15 days after receipt of the claim," with one 15-day extension. A request to extend an ongoing course of treatment that involves urgent care must be decided within 24 hours if made at least 24 hours before the authorization expires. Optum, which reviews UHC\'s ABA, sets the reauthorization window: call the ABA/Autism queue "no more than 30 days prior to the current approvals on file expiring," with "all the necessary clinical information at the time you call in."',
        status: 'plan-dependent',
        cites: [{ title: 'M.G.L. c. 176O § 12 — utilization review determinations (malegislature.gov)', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176O/Section12' }, { title: '29 CFR 2560.503-1(f)(2) — ERISA group health plan claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' }, { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' }],
        verifyVia:
          'Benefits verification call or Provider Express: ask whether the plan is fully insured in Massachusetts (c. 176O clock) or self-funded ERISA (72-hour / 15-day clock).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Depends on the family and on plan funding. For plans regulated by the Massachusetts Division of Insurance, 211 CMR 38.05 sets the order. The plan covering the person "other than as a dependent" pays before the one covering them as a dependent. For a child whose parents are married or living together, "The Plan of the parent whose Birthday falls earlier in the calendar year is the Primary Plan." If both parents share a birthday, the plan that has covered that parent longer pays first. For parents who are divorced, separated or living apart, a court decree that makes one parent responsible controls. With no decree, the order is the custodial parent, then the custodial parent\'s spouse, then the non-custodial parent, then the non-custodial parent\'s spouse. A self-funded ERISA plan sets its COB rules in its own plan document. This plan pays before TRICARE ("By law, TRICARE pays after all other health insurance," except Medicaid and a few government programs). It also pays before CHAMPVA ("CHAMPVA is the last payer to OHI"). If the child also has MassHealth (for example CommonHealth to cover copays), this plan pays first. MassHealth\'s rule then requires the provider to be in this plan\'s network and to follow its authorization rules. A denial for missing PA or for being out of network forfeits the MassHealth secondary payment, and MassHealth needs this plan\'s final disposition (EOB) on the claim. When the UHC plan has no ABA benefit and the secondary payer needs a denial, Optum\'s instruction is: "Call the number on the back of the member\'s insurance card to request a denial."',
        status: 'plan-dependent',
        cites: [{ title: '211 CMR 38.05 — Coordination of benefits: order of benefit determination (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/211-CMR-38-05' }, { title: 'TRICARE — Using Other Health Insurance', url: 'https://tricare.mil/Plans/OHI' }, { title: '38 CFR 17.276(d) — CHAMPVA is the last payer to other health insurance (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.276' }, { title: '130 CMR 450.316 — MassHealth third-party liability: requirements (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-316' }, { title: '130 CMR 450.317 — MassHealth third-party liability: payment limitations (Cornell LII mirror)', url: 'https://www.law.cornell.edu/regulations/massachusetts/130-CMR-450-317' }, { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' }],
        verifyVia:
          'Benefits verification: ask whether the plan is fully insured in Massachusetts or self-funded, whether the child is on a second parent\'s plan (both parents\' birthdays, custody or court-decree terms), and whether the child also has MassHealth, TRICARE or CHAMPVA.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Optum\u2019s commercial reimbursement policy publishes no supervision percentage or caseload cap \u2014 it refers providers to the ABA Coding Coalition for supervision requirements. What it does police is the boundary: \u201cCPT codes 97153 and 97155 may not be billed for technician training,\u201d including training a technician new to the organization on a client\u2019s programming or on reassessment-driven goal changes. And 97155 \u201cshould be reported only for services where the QHP is either engaged directly with the patient or is directing a technician in implementing a modified protocol with the patient\u201d \u2014 treatment planning is an indirect service and not separately reimbursable.',
        status: 'verified',
        cites: [{ title: 'Optum \u2014 Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
      concurrentBilling: {
        value:
          'Yes, with a single-provider exclusion. \u201cCan I report 97153 or 97154 with 97155 concurrently? A. Yes, as long as the criteria in the descriptors of both codes are met. A single QHP may not report 97153 or 97154 with 97155 concurrently.\u201d So the concurrency has to be two people \u2014 technician on 97153, analyst on 97155 directing them with the patient present. Separately, 97155 and 97156 may both pay on the same date of service only if the services are separate, distinct and clearly documented; \u201ca single provider can\u2019t bill for both simultaneously (e.g., in the same 15-minute block).\u201d',
        status: 'verified',
        cites: [{ title: 'Optum \u2014 Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
      dailyLimits: {
        value:
          'Optum publishes its own per-day table on top of CMS MUEs \u2014 maximum frequency per day: 97151 32 units (8 hrs), 97152 16 (4 hrs), 97153 32 (8 hrs), 97154 18 (4.5 hrs), 97155 24 (6 hrs), 97156 16 (4 hrs), 97157 16 (4 hrs), 97158 16 (4 hrs), 0362T 16 (4 hrs), 0373T 32 (8 hrs). MUEs otherwise apply per CMS guidance, and billing above 32 units/day of 97153 \u201cmay be subject to non-reimbursement or recovery.\u201d Time is counted on the CMS 15-minute rule (1 unit at \u2265 8 minutes, 2 at \u2265 23, and so on).',
        status: 'verified',
        cites: [{ title: 'Optum \u2014 Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
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
          'The commercial ABA reimbursement policy sets no place-of-service rule. Optum\u2019s published ABA State Mandates document does carry Massachusetts entries, but they are scoped \u2014 one to Medicaid Early Intervention members (\u2264 30 hours per week, 1:10 BCBA supervision), one to the commercial Down syndrome coverage effective January 1, 2026 \u2014 and neither is a place-of-service rule.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA State Mandates BH803ABASTM12026 \u2014 NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'UnitedHealthcare provider services and the member\u2019s benefit document.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'One provider-level modifier per line, matching whoever actually rendered the service: HM = Registered Behavior Technician (less than bachelor\u2019s level), HN = BCaBA (bachelor\u2019s level), HO = BCBA or master\u2019s-level licensed clinician, HP = BCBA-D or doctoral-level licensed clinician. A billable ABA-supervisor service is billed with the applicable CPT code plus HO. Stacking level modifiers is a denial risk: \u201cBilling multiple provider-level modifiers (HN, HM, HO, HP) on the same service line same service and same DOS is not appropriate and may result in claim denial.\u201d Indirect work has no code of its own \u2014 it is bundled into the direct-service code.',
        status: 'verified',
        cites: [{ title: 'Optum \u2014 Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
    },
    pill: 'Payer Guide · UnitedHealthcare · Massachusetts',
    h1: 'UnitedHealthcare / Optum ABA coverage in Massachusetts: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Massachusetts: Prior Auth & ARICA Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Massachusetts families — the national clinical policy, prior authorization, the ARICA mandate (no age limits, no caps), Optum\'s explicit Massachusetts state-mandate entries, LABA licensure, and what intake should verify.',
    intro: [
      'For an intake team in Massachusetts, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, Massachusetts\' autism insurance mandate (ARICA, Chapter 207 of the Acts of 2010), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order — and Massachusetts is one of the states Optum\'s written state-mandate supplement addresses by name, twice.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'ARICA — Ch. 207, Acts of 2010 (M.G.L. c. 175 § 47AA et al.)' },
      { label: 'Mandate age', value: 'No age limits — any age, medical-necessity based' },
      { label: 'Mandate caps', value: 'None — no dollar, visit, or unit limits on ABA' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans' },
      { label: 'New for 2026', value: 'Optum\'s supplement codifies Down syndrome coverage for MA commercial members eff. 1/1/2026' },
      { label: 'Licensure', value: 'MA Licensed Applied Behavior Analyst (LABA)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Massachusetts',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months. That clinical policy is national — what changes in Massachusetts is the legal floor underneath it: ARICA governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in Massachusetts.',
        ],
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'The Massachusetts mandate: ARICA',
        body: [
          'ARICA — An Act Relative to Insurance Coverage for Autism, Chapter 207 of the Acts of 2010, codified at M.G.L. c. 175 § 47AA and parallel sections for HMOs, service corporations, and GIC state-employee plans — is one of the strongest autism mandates in the country. Since January 1, 2011, fully-insured plans must cover the diagnosis and treatment of ASD with no age limits and no dollar, visit, or unit-of-service caps less than those on physical conditions; ABA is covered as habilitative/rehabilitative care when supervised by a board certified behavior analyst. Self-funded ERISA employer plans — a large share of Massachusetts employment — are exempt, answering to federal parity (MHPAEA) instead. And effective January 1, 2026, Chapter 388 of the Acts of 2024 extends the mandate: plans must also cover ABA (plus PT/OT/speech) for a sole diagnosis of Down syndrome.',
        ],
        cites: [
          { title: 'DisabilityInfo/AIRC — ARICA fact sheet', url: 'https://disabilityinfo.org/fact-sheet-library/laws-legislation/act-relative-to-insurance-coverage-for-autism-arica/' },
          { title: 'The Arc of Massachusetts — ABA for Down syndrome expansion (eff. 1/1/2026)', url: 'https://thearcofmass.org/post/expansion-of-coverage-of-applied-behavior-analysis-aba-for-individuals-with-down-syndrome/' },
        ],
      },
      {
        h2: 'Optum\'s Massachusetts-specific criteria',
        body: [
          'Massachusetts appears twice in Optum\'s ABA State Mandates supplement (BH 803ABA STM12026, effective January 2026). First, for Massachusetts Medicaid Early Intervention members (effective 10/1/2021): ABA services should not exceed 30 hours per week, and BCBA-to-paraprofessional supervision must run at 1:10 — with supervisor and technician possibly both required present during home visits. That entry codified, years early, the exact supervision ratio MassHealth enforced statewide in its 2026 audit. Second, for Massachusetts commercial members (effective 1/1/2026): coverage for the treatment of Down syndrome — defined by trisomy-21 genetic criteria — including ABA plus speech, OT, and PT, implementing Chapter 388 in Optum\'s own clinical criteria.',
        ],
        cites: [
          { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'UnitedHealthcare and MassHealth',
        body: [
          'UnitedHealthcare runs no MassHealth MCO or ACPP of its own — but Optum, its behavioral arm, administers the ABA benefit for the Mass General Brigham Health Plan MassHealth ACPP, which has its own guide. UHC\'s Massachusetts Medicaid-linked products — UnitedHealthcare Connected for One Care (ages 21–64) and Senior Care Options (65+) — serve adult populations, so they carry essentially no ABA volume. Practically: a Massachusetts family with a UnitedHealthcare card is on commercial coverage, and an "Optum" authorization for a MassHealth child usually means the MGB plan.',
        ],
        cites: [
          { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Massachusetts',
        body: [
          'Massachusetts licenses behavior analysts as Licensed Applied Behavior Analysts (LABA), with an assistant tier (LAABA), through the Board of Registration of Allied Mental Health and Human Services Professions — under M.G.L. c. 112 as amended by Chapter 429 of the Acts of 2012, with requirements at 262 CMR 10.00, built on BCBA certification. Massachusetts payers key the ABA benefit to the LABA. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for Massachusetts (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. The MassHealth schedule (97153 at $16.37/unit) is the in-state floor to benchmark against, knowing providers regard it as low.',
        ],
        cites: [
          { title: '262 CMR 10.00 — LABA/LAABA licensure requirements (mass.gov)', url: 'https://www.mass.gov/regulations/262-CMR-1000-requirements-for-licensure-as-an-applied-behavior-analyst-and-assistant-applied-behavior-analyst' },
        ],
      },
      {
        h2: 'Claims: filing deadline and disputes',
        body: [
          'UnitedHealthcare’s ABA benefit is managed by Optum Behavioral Health, whose National Network Manual (effective September 1, 2026) requires everything needed to process a claim to reach Optum “no more than 90 calendar days from the date of service, or as allowed by state or federal law or the member’s specific benefit plan,” with corrections within 90 days of first receipt. Clean, authorized claims are “generally” paid within 45 calendar days of receipt or as state or federal law requires. Disputes run in two steps — reconsideration, then appeal — with 12 months in total for both unless state law or your participation agreement sets a different deadline.',
        ],
        cites: [
          { title: 'Optum Behavioral Health National Network Manual (published July 1, 2026; effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
        ],
      },
      {
        h2: 'How fast must UnitedHealthcare pay a clean claim in Massachusetts?',
        body: [
          'Massachusetts gives the payer 45 days. An HMO’s provider contract must require it, within 45 days after receiving completed claim forms, to pay, to say in writing why it is not paying, or to say what additional information it needs; if it misses that window it owes interest “at the rate of 1.5 per cent per month, not to exceed 18 per cent per year” from day 45 (M.G.L. c. 176G, § 6). Insured accident and sickness policies carry the same 45-day notice rule and the same 1.5%-a-month interest (c. 175, § 110(G)). These statutes bind fully insured plans issued in the state; a self-funded employer plan (ERISA) is not subject to them and follows its plan documents and your contract.',
        ],
        cites: [
          { title: 'M.G.L. c. 175, § 110(G) — Accident and sickness claims', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter175/Section110' },
          { title: 'M.G.L. c. 176G, § 6 — HMO provider contracts (45-day payment)', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176G/Section6' },
        ],
      },
      {
        h2: 'Which codes does UnitedHealthcare / Optum pay for ABA? (H0031/H0032 and other H-codes)',
        body: [
          'Optum’s commercial ABA reimbursement policy (2022RP501A) “describes the correct coding methodology and reimbursement for reporting behavior assessment/intervention services (ABA) for the assessment and treatment of Autism Spectrum Disorders with CPT codes 97151-97158 along with the appropriate modifier,” and its code tables cover 97151–97158, 0362T and 0373T. It lists no HCPCS H-code (H0031, H0032, H2014, H2019) for commercial ABA. The same policy says “97151 and 97152 are the only codes eligible for reimbursement for assessment or reassessment activities,” so 97153 or 97155 cannot be billed for assessment work.',
        ],
        cites: [
          { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
        ],
      },
      {
        h2: 'What must a UnitedHealthcare / Optum ABA reauthorization contain? Are graphs required?',
        body: [
          'Optum’s Supplemental Clinical Criteria (“Continued Service Criteria”) say that “With each clinical review for continued ABA treatment, the provider must submit updated documentation.” Progress must be “assessed and documented for each targeted symptom and behavior … including the same modes of measurement that were utilized for baseline measurement.” It “should include rate and percentage of mastered programs, rates of mastered targets, change scores for any outcome measures, updated standardized adaptive measures, and change scores for skills-based assessments,” with movement from baseline shown on validated, norm-referenced assessments and caregiver progress where applicable. Inadequate progress within a six-month period calls for an assessment of the reasons and modified interventions, and utilization below 80% of authorized hours over a two-week period is reviewed. The criteria do not require graphs; they require the measures above.',
        ],
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (ARICA applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Line of business', desc: 'Commercial vs. the Optum-administered Mass General Brigham Health Plan (MassHealth) — different rules, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5-TR ASD with a validated tool (ADI-R, ADOS-2) — or, from 1/1/2026, trisomy-21 genetic confirmation for the Down syndrome pathway.' },
      { title: 'Supervision staffing plan', desc: 'Optum\'s MA entries codify 1:10 BCBA-to-paraprofessional supervision — document it in the request.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'DisabilityInfo/AIRC — ARICA fact sheet', url: 'https://disabilityinfo.org/fact-sheet-library/laws-legislation/act-relative-to-insurance-coverage-for-autism-arica/' },
      { title: 'Session Law — Acts of 2010, Chapter 207 (malegislature.gov)', url: 'https://malegislature.gov/Laws/SessionLaws/Acts/2010/Chapter207' },
      { title: 'The Arc of Massachusetts — Down syndrome ABA expansion', url: 'https://thearcofmass.org/post/expansion-of-coverage-of-applied-behavior-analysis-aba-for-individuals-with-down-syndrome/' },
      { title: '262 CMR 10.00 — LABA/LAABA licensure requirements (mass.gov)', url: 'https://www.mass.gov/regulations/262-CMR-1000-requirements-for-licensure-as-an-applied-behavior-analyst-and-assistant-applied-behavior-analyst' },
      { title: 'Optum \u2014 Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'MassHealth Managed Care Options — plan/BH-vendor map (April 2023)', url: 'https://abh.memberclicks.net/assets/docs/KeepingCoverage/2023%20MassHealth%20Accountable%20and%20Managed%20Care%20Options%20031723.pdf' },
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
      { title: 'M.G.L. c. 175, § 110(G) — Accident and sickness claims', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter175/Section110' },
      { title: 'M.G.L. c. 176G, § 6 — HMO provider contracts (45-day payment)', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176G/Section6' },
      { title: 'Optum Behavioral Health National Network Manual (published July 1, 2026; effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
    ],
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Massachusetts?', a: 'Yes — under Optum\'s national two-step authorization for ASD, layered on ARICA for fully-insured plans, which bars age limits and benefit caps. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Massachusetts autism mandate require?', a: 'ARICA (Ch. 207, Acts of 2010) is one of the strongest mandates nationally: fully-insured plans must cover ASD diagnosis and treatment at any age with no dollar, visit, or unit caps, including ABA supervised by a board certified behavior analyst. From 1/1/2026, Chapter 388 adds sole-diagnosis Down syndrome — which Optum\'s state-mandate supplement implements by name.' },
      { q: 'Does UnitedHealthcare run MassHealth plans?', a: 'Not directly — but Optum administers ABA for the Mass General Brigham Health Plan MassHealth ACPP (see its guide), and UHC\'s One Care and Senior Care Options products serve adults only.' },
      { q: 'What does UnitedHealthcare pay for ABA in Massachusetts?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the MassHealth 101 CMR 358 schedule knowing it\'s widely considered low.' },
      { q: 'How often does UnitedHealthcare (Optum) reauthorize ABA?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale.' },
      { q: 'Does UnitedHealthcare (Optum) require RBT certification for ABA technicians?', a: 'Optum\'s ABA criteria say technicians "should be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate," working under BCBA or licensed-clinician supervision. They also advise against a parent serving as the RBT for their own child.' },
      { q: 'Does UnitedHealthcare pay for ABA in a school?', a: 'Not for classroom aide work or anything owed under IDEA: Optum\'s criteria exclude "1:1 aid delivered simultaneously during classroom instruction" and "services covered under the Individuals with Disabilities Education Act." School-related coordination is covered, such as teacher training, meetings with school personnel and observations in the school setting.' },
      { q: 'Can the ABA assessment be done by telehealth with UnitedHealthcare?', a: 'No, not on commercial plans. Optum\'s telehealth billing guide allows only 97155, 97156 and 97157 by telehealth for ABA, so 97151 and 97152 are delivered in person. Supervision (97155) and caregiver training can be remote once the provider has completed Optum\'s virtual-visits attestation.' },
      { q: 'What is UnitedHealthcare’s timely filing limit in Massachusetts?', a: 'Optum Behavioral Health, which manages UnitedHealthcare’s ABA benefit, requires claims within 90 calendar days of the date of service unless state or federal law or the member’s plan allows longer (National Network Manual, effective September 1, 2026).' },
      { q: 'How fast must UnitedHealthcare pay a clean ABA claim in Massachusetts?', a: 'Massachusetts law gives a fully insured plan 45 days from receiving a completed claim to pay it, explain the non-payment or ask for what is missing, with interest of 1.5% a month (capped at 18% a year) after that (M.G.L. c. 176G, § 6; c. 175, § 110(G)). Self-funded employer plans are not bound by the statute.' },
      { q: 'Does UnitedHealthcare accept H0031 or H0032 for ABA?', a: 'Not on commercial plans. Optum’s commercial ABA reimbursement policy codes ABA on CPT 97151–97158, 0362T and 0373T and lists no H-codes; only 97151 and 97152 may be billed for assessment or reassessment.' },
      { q: 'Does UnitedHealthcare require graphs for ABA reauthorization?', a: 'Optum’s criteria do not require graphs. They require updated progress for each target measured the same way as baseline: mastery rates, change scores, updated standardized adaptive measures and caregiver progress, plus an explanation and changed plan if progress lagged over six months.' },
    ],
  },
  'blue-cross-blue-shield-massachusetts': {
    slug: 'blue-cross-blue-shield-massachusetts',
    family: 'bcbs',
    cardDesc: 'Medical Policy 091 (ASD and Down syndrome, 30–40 hr/wk comprehensive) + ARICA + prior auth for every ABA code, faxed or via Authorization Manager.',
    assessmentPA: {
      value: 'Required. Medical Policy 091 says prior authorization "is required" for outpatient ABA on Commercial Managed Care (HMO and POS) and on Commercial PPO and Indemnity, and BCBSMA\'s Outpatient Prior Authorization Code List (policy 072) lists 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0373T and 0362T as "Prior authorization is required, in effect." The assessment is requested on its own: the Applied Behavior Analysis Service Request Form (144) has a separate "initial assessment request" path (sections A and B only) asking for the 97151 hours and units and a copy of the autism diagnosis.',
      status: 'verified',
      cites: [{ title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' }, { title: 'BCBSMA Medical Policy 072 — Outpatient Prior Authorization Code List for Commercial Plans (rev. 9/2026)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/072%20Outpatient%20Prior%20Authorization%20Code%20List%20prn.pdf' }, { title: 'BCBSMA — Applied Behavior Analysis Service Request Form for Initial Assessment and Treatment (144, MPC-100915-1R rev. 8/23)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/144%20Applied%20Behavior%20Analysis%20Service%20Request%20Form%20prn.pdf' }],
    },
    treatmentPA: {
      value: 'Required for every ABA treatment code (97153–97158, 0373T) on HMO, POS, PPO and Indemnity commercial plans. A treatment request completes sections A, C and D of form 144 (or the Massachusetts Collaborative standard ABA form) and must attach an updated treatment plan with measurable goals, progress data, goal status and a plan for supervision.',
      status: 'verified',
      cites: [{ title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' }, { title: 'BCBSMA — Applied Behavior Analysis Service Request Form for Initial Assessment and Treatment (144, MPC-100915-1R rev. 8/23)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/144%20Applied%20Behavior%20Analysis%20Service%20Request%20Form%20prn.pdf' }],
    },
    dxRequired: {
      value: 'Yes — autism spectrum disorder and/or Down syndrome. Since the 10/1/2025 revision Medical Policy 091 covers ABA "for the treatment of autism spectrum disorders (ASD) and/or Down Syndrome" and lists F84.0 and Q90.0, Q90.1, Q90.2 and Q90.9; ABA "for diagnoses other than autism spectrum disorder or Down Syndrome" is not covered. Self-funded employer plans follow their own plan document.',
      status: 'verified',
      cites: [{ title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' }, { title: 'Acts of 2024, Chapter 388 — An Act relative to applied behavioral analysis therapy (Down syndrome; effective 1/1/2026)', url: 'https://malegislature.gov/Laws/SessionLaws/Acts/2024/Chapter388' }],
    },
    payer: 'Blue Cross Blue Shield of Massachusetts',
    state: 'MA', kind: 'commercial',
    intakeGates: {
      ageLimit: {
        value:
          'None in BCBSMA\'s policy. Medical Policy 091 says "ABA services may be provided across age and severity levels," and it sets no age bound in any of its code criteria. The state mandate sets none either: the ARICA sections for Blue Cross (M.G.L. c. 176A § 8DD, c. 176B § 4DD) and HMO Blue (c. 176G § 4V) define autism treatment without an age limit. A self-funded employer plan BCBSMA administers can write its own limits into the plan document.',
        status: 'verified',
        cites: [{ title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' }, { title: 'M.G.L. c. 176B, § 4DD — Coverage for diagnosis and treatment of autism spectrum disorder', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176B/Section4DD' }],
      },
      dxRecency: {
        value:
          'Not set in BCBSMA\'s public documents. Medical Policy 091 and the ABA Service Request Form (144) ask for "documentation of autism spectrum disorder signed by a licensed physician or licensed psychologist" but state no maximum age for that evaluation. Form 144 points to "Treatment Plan Guidelines for Applied Behavior Analysis" inside the Autism Payment Policy, which is posted only behind the Provider Central login, so any recency rule there could not be read.',
        status: 'unverified',
        cites: [{ title: 'BCBSMA — Applied Behavior Analysis Service Request Form for Initial Assessment and Treatment (144, MPC-100915-1R rev. 8/23)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/144%20Applied%20Behavior%20Analysis%20Service%20Request%20Form%20prn.pdf' }],
        verifyVia: 'BCBSMA Autism Payment Policy (Provider Central > Office Resources > Policies & Guidelines > Payment Policies, login required), or BCBSMA behavioral health authorizations at 1-800-524-4010 — ask whether an older diagnostic evaluation is accepted for an initial ABA request.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value:
          'Medical Policy 091 covers ABA when the ASD or Down syndrome is "diagnosed by a psychiatrist, psychologist, neurologist, developmental pediatrician, or other licensed physician experienced in the diagnosis and treatment of autism/Down Syndrome." The request form asks for the diagnosis "signed by a licensed physician or licensed psychologist." A nurse practitioner or LABA diagnosis is not on either list.',
        status: 'verified',
        cites: [{ title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' }, { title: 'BCBSMA — Applied Behavior Analysis Service Request Form for Initial Assessment and Treatment (144, MPC-100915-1R rev. 8/23)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/144%20Applied%20Behavior%20Analysis%20Service%20Request%20Form%20prn.pdf' }],
      },
      diagnosticTools: {
        value:
          'No named instrument. Medical Policy 091 describes the ABA assessment as interviews, "rating scales," standardized and non-standardized assessments and direct observation, and it says assessment is "not clinically indicated when multiple assessment tools are utilized to assess the same domain of functioning (e.g., multiple assessments of adaptive functioning)." It names no ADOS, Vineland or other required tool for the diagnosis or the assessment. The login-only Treatment Plan Guidelines could not be read.',
        status: 'unverified',
        cites: [{ title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' }],
        verifyVia: 'BCBSMA Autism Payment Policy / Treatment Plan Guidelines for ABA (Provider Central, login required).',
        blocker: 'document',
      },
      referral: {
        value:
          'No PCP referral and no separate physician order form. BCBSMA\'s referral rules say "Behavioral health services, urgent care, and Emergency Department services (for emergency conditions) don\'t require a referral," even on the HMO plans (HMO Blue, Blue Choice in-network, Network Blue) that otherwise need one; prior authorization is still needed. What stands in for an order is the diagnosis document: the request form must attach "documentation of autism spectrum disorder signed by a licensed physician or licensed psychologist," and the state mandate defines covered autism treatment as care "prescribed, provided or ordered" by a licensed physician or licensed psychologist who finds it medically necessary. In practice the diagnosing physician\'s or psychologist\'s signed report goes in with the first request. BCBSMA publishes no validity period for it and no order template of its own.',
        status: 'verified',
        cites: [{ title: 'BCBSMA Provider Central — Referrals (which services do not require a referral)', url: 'https://provider.bluecrossma.com/ProviderHome/portal/home/office-resources/policies-and-guidelines/referrals' }, { title: 'BCBSMA — Applied Behavior Analysis Service Request Form for Initial Assessment and Treatment (144, MPC-100915-1R rev. 8/23)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/144%20Applied%20Behavior%20Analysis%20Service%20Request%20Form%20prn.pdf' }, { title: 'M.G.L. c. 176B, § 4DD — Coverage for diagnosis and treatment of autism spectrum disorder', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176B/Section4DD' }],
      },
      telehealth: {
        value:
          'Telehealth is a covered site of care on BCBSMA commercial plans: "We cover medically necessary services conducted via telehealth for suitable medical and mental health services," on the provider\'s own HIPAA-compliant platform, with no special credentialing, and "The same referral and authorization requirements apply for telehealth visits as in-person visits." Which ABA codes count as suitable is listed only in the Telehealth (Telemedicine) – Mental Health payment policy, which sits behind the Provider Central login. Medical Policy 091 itself requires every ABA code to be "administered face-to-face" and does not say whether video meets that.',
        status: 'unverified',
        cites: [{ title: 'BCBSMA Provider Central — Telehealth', url: 'https://provider.bluecrossma.com/ProviderHome/portal/home/patient-resources/sites-of-care/telehealth' }, { title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' }],
        verifyVia: 'BCBSMA Telehealth (Telemedicine) – Mental Health payment policy (Provider Central login) — check whether 97151, 97155 and 97156 are on its covered-services list and which modifier and place of service it requires.',
        blocker: 'document',
      },
      authTurnaround: {
        value:
          'For a fully insured plan, M.G.L. c. 176O § 12 sets the clock: an initial determination "within two working days of obtaining all necessary information," with an approval phoned to the provider within 24 hours and confirmed in writing within two working days; a concurrent review (reauthorization) within one working day of obtaining all necessary information, and the service "shall be continued without liability to the insured until the insured has been notified of the determination." A self-funded employer plan BCBSMA administers follows its own plan document and federal rules instead.',
        status: 'plan-dependent',
        cites: [{ title: 'M.G.L. c. 176O, § 12 — Utilization review', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176O/Section12' }],
        verifyVia: 'Benefits check (ConnectCenter or the number on the card): ask whether the plan is fully insured in Massachusetts or self-funded, and how long before an authorization ends BCBSMA wants the continued-services request.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'BCBSMA\'s own COB rules: for a child whose parents are married or living together, "the plan of parent whose birthday falls first in the calendar year is primary"; if the birthdays match, the plan in effect longer is primary. If the parents are not married or living together, the custodial parent\'s plan is primary, the custodial parent\'s spouse\'s plan secondary and the non-custodial parent\'s plan tertiary, unless a court decree assigns responsibility. As secondary payer BCBSMA pays "the balance up to the amount we would have paid if we had been the primary insurer," although some accounts use maintenance of benefits and pay less.',
        status: 'verified',
        cites: [{ title: 'BCBSMA Provider Central — Coordination of Benefits', url: 'https://provider.bluecrossma.com/ProviderHome/portal/home/office-resources/billing-and-reimbursement/coordination-of-benefits-new' }],
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Medical Policy 091 sets a typical supervision dose: protocol modification (97155, "clinical direction") runs "a minimum of 1 hour and maximum of 2 hours for every 10 direct hours provided by the behavior technician," that is 10–20% of technician time. Clinical direction must come from an appropriately trained licensed psychologist or a LABA/BCBA. "Supervision/training of behavior technician, LABA/BCBA, LAABA" is not separately covered. Every treatment request must attach a treatment plan that includes a "plan for supervision." The policy sets no caseload cap and no count of technicians per BCBA.',
        status: 'verified',
        cites: [{ title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' }, { title: 'BCBSMA — Applied Behavior Analysis Service Request Form for Initial Assessment and Treatment (144, MPC-100915-1R rev. 8/23)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/144%20Applied%20Behavior%20Analysis%20Service%20Request%20Form%20prn.pdf' }],
      },
      concurrentBilling: {
        value:
          'Two overlap rules are written down. ABA "provided simultaneously with other medical services such as occupational therapy, speech and language therapy, physical therapy, and psychotherapy" is not covered, so 97153 cannot run during a speech or OT session. "More than one appropriately trained licensed psychologist or ... LABA/BCBA delivering services to a member during a specific time interval" is not covered either. 97155 may include "observation of the behavior technician implementing treatment protocols," and clinician-directed services are "provided in addition to direct treatment services." The policy does not say in so many words that 97153 and 97155 both pay for the same minutes. 97158 does not cover clinical direction of a technician.',
        status: 'verified',
        cites: [{ title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' }],
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling is published. Medical Policy 091 gives typical courses instead: 97151 assessment "completed in 12 hours," 97152 in 12 hours, 0362T in 12 hours; comprehensive treatment "between 30 to 40 hours of treatment per week," with "up to 40 hours per week" inclusive of technician and analyst face-to-face time; social-skills group (97158) typically two hours a week; and 97155 one to two hours per ten technician hours. Weekly hours and units are what gets authorized, on form 144\'s day-by-day schedule. For fully insured plans ARICA bars dollar or unit-of-service limits stricter than those on physical conditions, and visit limits.',
        status: 'verified',
        cites: [{ title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' }, { title: 'M.G.L. c. 176B, § 4DD — Coverage for diagnosis and treatment of autism spectrum disorder', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176B/Section4DD' }],
      },
      noteSignature: {
        value:
          'Medical Policy 091 requires that "The medical record must include documentation of individual services provided, session notes, treatment plans, data collection, and assessment results," available to BCBSMA on request. It sets no rule on who signs a session note or by when.',
        status: 'unverified',
        cites: [{ title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' }],
        verifyVia: 'BCBSMA Autism Payment Policy (Provider Central login) and your provider agreement\'s documentation clause.',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'Medical Policy 091: coverage "may include medically necessary ABA services in certain community settings, such as the home, center (office), daycare, preschool, or camp." Not covered: services that are part of an IEP, working as an educational aide during the school day "in a public, private, or homeschool program," training school staff, and camp or program tuition. Form 144 records location per day as H (home), O (office) or C (community).',
        status: 'verified',
        cites: [{ title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' }, { title: 'BCBSMA — Applied Behavior Analysis Service Request Form for Initial Assessment and Treatment (144, MPC-100915-1R rev. 8/23)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/144%20Applied%20Behavior%20Analysis%20Service%20Request%20Form%20prn.pdf' }],
      },
      billAsProvider: {
        value:
          'Partly published. The authorization goes in under the clinician: Medical Policy 091 says to "Enter the appropriate provider NPI or provider ID as the servicing provider, not the billing group," and form 144 names the LABA and the agency NPI. Form 144\'s code grid marks 97151, 97155, 97156, 97157 and 97158 "not reimbursed" for a behavior technician, so those are analyst lines. Whose NPI renders a technician\'s 97153 line is not stated publicly. BCBSMA\'s "Incident To Billing for Supervising Providers for Mental Health Services" payment policy covers billing for non-credentialed staff but is login-only.',
        status: 'unverified',
        cites: [{ title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' }, { title: 'BCBSMA — Applied Behavior Analysis Service Request Form for Initial Assessment and Treatment (144, MPC-100915-1R rev. 8/23)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/144%20Applied%20Behavior%20Analysis%20Service%20Request%20Form%20prn.pdf' }],
        verifyVia: 'BCBSMA Autism Payment Policy and Incident To Billing for Supervising Providers for Mental Health Services payment policy (Provider Central login).',
        blocker: 'document',
      },
    },
    pill: 'Payer Guide · Blue Cross Blue Shield · Massachusetts',
    h1: 'Blue Cross Blue Shield of Massachusetts ABA coverage: the intake guide.',
    metaTitle: 'Blue Cross Blue Shield of Massachusetts ABA Coverage: Prior Auth & ARICA | Carelu',
    metaDescription:
      'How Blue Cross Blue Shield of Massachusetts covers ABA: Medical Policy 091 (autism and Down syndrome), prior authorization for every code, the ABA request form, supervision and hour norms, the ARICA mandate, BlueCard members, and what intake should verify.',
    intro: [
      'Blue Cross Blue Shield of Massachusetts (BCBSMA) is the state\'s largest commercial carrier, and it writes its ABA rules down in one public document: Medical Policy 091. It covers ABA for autism spectrum disorder and, since its October 2025 revision, for Down syndrome. Every ABA code needs prior authorization on HMO, POS, PPO and Indemnity plans, and the policy states typical hours for each code.',
      'Underneath that policy sits ARICA, the Massachusetts autism mandate. It applies to fully insured BCBSMA plans and bars age caps and dollar or visit limits. Self-funded employer plans that BCBSMA only administers are outside it. This guide covers the policy, the request form, how BCBSMA handles out-of-state Blue members, and what intake should collect.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — ASD and/or Down syndrome (Medical Policy 091)' },
      { label: 'Prior auth', value: 'Required for 97151–97158, 0362T, 0373T (HMO, POS, PPO, Indemnity)' },
      { label: 'State mandate', value: 'ARICA — Ch. 207, Acts of 2010 (M.G.L. c. 176A § 8DD, c. 176B § 4DD, c. 176G § 4V)' },
      { label: 'Mandate age', value: 'No age limit in the statute' },
      { label: 'Mandate caps', value: 'No visit limits; no dollar or unit limits stricter than for physical conditions' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans' },
      { label: 'New for 2026', value: 'Down syndrome ABA mandated from 1/1/2026 (Ch. 388, Acts of 2024); already in Policy 091 since 10/1/2025' },
      { label: 'Licensure', value: 'MA Licensed Applied Behavior Analyst (LABA), M.G.L. c. 112 § 165' },
    ],
    sections: [
      {
        h2: 'Medical Policy 091: what BCBSMA covers',
        body: [
          'BCBSMA "covers medically necessary ABA services for the treatment of autism spectrum disorders (ASD) and/or Down Syndrome when diagnosed by a psychiatrist, psychologist, neurologist, developmental pediatrician, or other licensed physician experienced in the diagnosis and treatment of autism/Down Syndrome and when clinical direction is provided by an appropriately trained licensed psychologist or a licensed applied behavior analyst (LABA)/ board certified behavior analyst (BCBA)." ICD-10 codes listed are F84.0 and Q90.0–Q90.9. ABA for any other diagnosis is not covered.',
          'The policy gives typical amounts for each service. Assessment (97151) takes 12 hours and the analyst must do both the face-to-face and non-face-to-face parts. Supporting assessment (97152) and multi-technician assessment (0362T) are 12 hours each. Comprehensive treatment is 30 to 40 hours a week, counting technician and analyst face-to-face time together. Social-skills groups (97158) are two hours a week. Protocol modification (97155) is one to two hours for every ten technician hours. Groups may have two to eight patients.',
          'The policy also lists what is not covered: supervision or training of staff as a separate service; two analysts with the member at the same time; respite, chores, transport, or outings that are not in the treatment plan; nap or rest time; IEP services or educational-aide work during the school day; camp or program tuition; and ABA "provided simultaneously with other medical services such as occupational therapy, speech and language therapy, physical therapy, and psychotherapy."',
        ],
        cites: [
          { title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' },
        ],
      },
      {
        h2: 'Prior authorization: how to request it',
        body: [
          'Prior authorization is required for outpatient ABA on Commercial HMO/POS and on Commercial PPO and Indemnity, and BCBSMA\'s Outpatient Prior Authorization Code List shows all ten ABA codes as "Prior authorization is required, in effect." Policy 091 tells providers to submit the request in Authorization Manager and to list the clinician\'s NPI as the servicing provider, "not the billing group." The request form is BCBSMA\'s Applied Behavior Analysis Service Request Form (144). Out-of-network providers fax to 888-641-5199.',
          'Form 144 has two paths. An initial assessment request completes sections A and B: member and agency details, the LABA name and license number, the 97151 hours and units, and the signed autism diagnosis. A treatment request completes sections A, C and D: CORI/SORI background checks, technician training hours, the child\'s other services (OT, PT, speech, mental health, pediatrician, IEP hours) and whether each coordinates with the LABA, ABA hours and location for each day of the week, weekly hours and units by code, and an updated treatment plan. The form\'s fax number is 1-617-246-4281 (BCBSMA employees: 1-888-608-3693). Behavioral health authorizations by phone are at 1-800-524-4010.',
          'BCBSMA also accepts the multi-payer Massachusetts Collaborative Standard Form for ABA Services Prior Authorization Requests. Its February 2024 Mental Health Brief said it would accept that form from April 16, 2024 under Division of Insurance Bulletin 2024-01, and the prior-authorization code list names the "Massachusetts Collaborative Prior Authorization Form" as a submission option.',
        ],
        cites: [
          { title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' },
          { title: 'BCBSMA — Applied Behavior Analysis Service Request Form for Initial Assessment and Treatment (144, MPC-100915-1R rev. 8/23)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/144%20Applied%20Behavior%20Analysis%20Service%20Request%20Form%20prn.pdf' },
          { title: 'BCBSMA Medical Policy 072 — Outpatient Prior Authorization Code List for Commercial Plans (rev. 9/2026)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/072%20Outpatient%20Prior%20Authorization%20Code%20List%20prn.pdf' },
          { title: 'BCBSMA Provider Central — Prior Authorization Overview (phone and fax numbers)', url: 'https://provider.bluecrossma.com/ProviderHome/portal/home/clinical-resources/prior-authorization/prior-auth-overview' },
          { title: 'BCBSMA Mental Health Brief, February 2024 — New standard ABA authorization form', url: 'https://provider.bluecrossma.com/ProviderHome/wcm/connect/d8751aeb-3fc6-40f3-b4eb-a8d872546474/MHBrief_Feb24.pdf?MOD=AJPERES' },
        ],
      },
      {
        h2: 'The Massachusetts mandate: ARICA',
        body: [
          'ARICA (Chapter 207 of the Acts of 2010) put autism coverage into each of the statutes BCBSMA operates under: M.G.L. c. 176A § 8DD (hospital service corporations), c. 176B § 4DD (medical service corporations) and c. 176G § 4V (HMOs, so HMO Blue). Covered treatment includes "applied behavior analysis supervised by a board certified behavior analyst" when "prescribed, provided or ordered" by a licensed physician or licensed psychologist who finds it medically necessary. A plan may not limit the number of visits to an autism services provider, and any dollar or unit-of-service limit may not be stricter than for physical conditions. IEP services provided by school staff are not reimbursable under the mandate.',
          'Chapter 388 of the Acts of 2024 added Down syndrome. From January 1, 2026, fully insured plans, including a new c. 176B § 4DD½, must cover "the treatment of Down syndrome through speech therapy, occupational therapy, physical therapy and applied behavior analysis services." BCBSMA added Down syndrome to Medical Policy 091 on October 1, 2025. Self-funded ERISA plans are not bound by either statute, so check the plan document for those members.',
        ],
        cites: [
          { title: 'M.G.L. c. 176B, § 4DD — Coverage for diagnosis and treatment of autism spectrum disorder', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176B/Section4DD' },
          { title: 'M.G.L. c. 176A, § 8DD — Coverage for diagnosis and treatment of autism spectrum disorder', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176A/Section8DD' },
          { title: 'M.G.L. c. 176G, § 4V — HMO coverage for autism spectrum disorder', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176G/Section4V' },
          { title: 'Acts of 2024, Chapter 388 — An Act relative to applied behavioral analysis therapy (Down syndrome; effective 1/1/2026)', url: 'https://malegislature.gov/Laws/SessionLaws/Acts/2024/Chapter388' },
        ],
      },
      {
        h2: 'Out-of-state Blue members: BlueCard',
        body: [
          'A child with another state\'s Blue plan who gets ABA in Massachusetts is a BlueCard member. BCBSMA is the local (host) plan and the other plan is the home plan, and "The member\'s benefits are determined by their Home plan." BCBSMA tells Massachusetts providers to submit claims "the same way you do for Massachusetts members," with the member\'s three-character prefix and an ID of up to 17 characters entered exactly as on the card, and to contact BCBSMA for all claim questions.',
          'Prior authorization for these members goes to the home plan. Use BCBSMA\'s "Pre-service Review for BlueCard members" tool (the Blue plans\' Electronic Provider Access router), which takes you to the home plan\'s own pre-service page from the prefix, or call BlueCard Eligibility at 1-800-676-BLUE (2583). Behavioral health is one of the four request types that route supports. Check eligibility the same ways. If your practice is outside Massachusetts and the child has a BCBSMA card, BCBSMA says to contact "your local, in-state Blue plan" for claim questions.',
        ],
        cites: [
          { title: 'BCBSMA Provider Central — BlueCard & Out-of-Area Programs', url: 'https://provider.bluecrossma.com/ProviderHome/portal/home/patient-resources/plans-and-products/bluecard-and-out-of-area-programs' },
          { title: 'BCBSMA Provider Central — Pre-service review for BlueCard members', url: 'https://provider.bluecrossma.com/ProviderHome/portal/home/etools/etools/pre-service-review-for-bluecard-members' },
        ],
      },
      {
        h2: 'Licensure in Massachusetts',
        body: [
          'Massachusetts licenses behavior analysts through the Board of Registration of Allied Mental Health and Human Services Professions. A licensed applied behavior analyst (LABA) needs a qualifying graduate degree with behavior-analysis coursework, supervised experience and a board-approved exam. A licensed assistant applied behavior analyst works under a LABA or under a physician or psychologist qualified in ABA. BCBSMA\'s policy accepts clinical direction by a LABA/BCBA or an appropriately trained licensed psychologist, and form 144 asks for the LABA\'s license number.',
        ],
        cites: [
          { title: 'M.G.L. c. 112, § 165 — Licensing of applied behavior analysts and assistant applied behavior analysts', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXVI/Chapter112/Section165' },
          { title: 'M.G.L. c. 112, § 163 — Definitions (licensed applied behavior analyst)', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXVI/Chapter112/Section163' },
        ],
      },
      {
        h2: 'Claims, appeals and payment timing',
        body: [
          'Professional claims go on the 1500 form, preferably electronically (clearinghouse, Direct Connection, or ConnectCenter direct entry). Paper 1500s go to Blue Cross Blue Shield Data Capture, PO Box 986020, Boston, MA 02298. Enter the member\'s name exactly as on the ID card and the full ID with prefix. BCBSMA refers billers to the NUCC 1500 instruction manual for field-by-field rules. Its claim filing limit is published only to logged-in providers. BCBSMA posts its appeal queue dates, including a "Timely Filing Limit" queue.',
          'First-level provider appeals are due "within 180 days of the initial claim being denied or processed," through Appeals Manager or a Request for Claim Review Form. A second-level appeal is due within 60 days of the first-level decision. For HMO Blue, M.G.L. c. 176G § 6 requires the provider contract to commit the HMO to pay, deny with reasons, or ask for what is missing within 45 days of a completed claim, with interest of 1.5% a month (capped at 18% a year) after that.',
        ],
        cites: [
          { title: 'BCBSMA Provider Central — Claim Submission', url: 'https://provider.bluecrossma.com/ProviderHome/portal/home/office-resources/billing-and-reimbursement/Claim%20Submission' },
          { title: 'BCBSMA Provider Central — Reviews & Appeals', url: 'https://provider.bluecrossma.com/ProviderHome/portal/home/office-resources/policies-and-guidelines/reviews-appeals' },
          { title: 'M.G.L. c. 176G, § 6 — HMO provider contracts (45-day payment)', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176G/Section6' },
        ],
      },
      {
        h2: 'Which codes does BCBSMA cover for ABA? (H0031/H0032 and other H-codes)',
        body: [
          'Medical Policy 091 defines ABA by CPT code. It describes each service by its code (97151 assessment, 97152 and 0362T supporting assessment, 97153/97154 treatment by protocol, 97155 and 97158 protocol modification, 97156/97157 caregiver guidance, 0373T), and its coding table lists 97151–97158, 0373T and 0362T. No HCPCS H-code is listed for ABA.',
        ],
        cites: [
          { title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' },
        ],
      },
      {
        h2: 'What must a BCBSMA ABA treatment request contain? Are graphs required?',
        body: [
          'Form 144, BCBSMA’s ABA service request form, asks for “an individualized, updated treatment plan” that includes “measurable goals,” “data related to progress within individual treatment goals,” “goal status (met, progressing, regressing),” and a “plan for supervision.” It does not ask for graphs. The fuller Treatment Plan Guidelines for Applied Behavior Analysis sit inside the Autism Payment Policy, behind the Provider Central login, so any graph or data-recency rule there could not be read. Medical Policy 091 itself sets no reauthorization content beyond its coverage criteria.',
        ],
        cites: [
          { title: 'BCBSMA — Applied Behavior Analysis Service Request Form for Initial Assessment and Treatment (form 144, MPC-100915-1R rev. 8/23)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/144%20Applied%20Behavior%20Analysis%20Service%20Request%20Form%20prn.pdf' },
          { title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (ARICA and Ch. 388 apply) or self-funded employer plan administered by BCBSMA (plan document governs). Ask for the employer name.' },
      { title: 'Member ID + card photo', desc: 'Full ID with the three-character prefix. A non-Massachusetts prefix means a BlueCard member, whose home plan decides benefits and authorization.' },
      { title: 'Signed diagnosis', desc: 'ASD and/or Down syndrome diagnosis signed by a licensed physician or licensed psychologist (psychiatrist, psychologist, neurologist, developmental pediatrician) for the form 144 attachment.' },
      { title: 'Other services', desc: 'Weekly OT, PT, speech, mental-health and IEP/school hours. Form 144 asks for them, and ABA cannot overlap with them.' },
      { title: 'LABA of record', desc: 'LABA name and license number, plus agency NPI. Background checks (CORI/SORI) for everyone who works with the family.' },
    ],
    sources: [
      { title: 'BCBSMA Medical Policy 091 — Applied Behavior Analysis (ABA) (last annual review 10/1/2025)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/091%20Applied%20Behavioral%20Analysis%20%28ABA%29.pdf' },
      { title: 'BCBSMA — Applied Behavior Analysis Service Request Form for Initial Assessment and Treatment (144, MPC-100915-1R rev. 8/23)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/144%20Applied%20Behavior%20Analysis%20Service%20Request%20Form%20prn.pdf' },
      { title: 'BCBSMA Medical Policy 072 — Outpatient Prior Authorization Code List for Commercial Plans (rev. 9/2026)', url: 'https://www.bluecrossma.org/medical-policies/sites/g/files/csphws2091/files/acquiadam-assets/072%20Outpatient%20Prior%20Authorization%20Code%20List%20prn.pdf' },
      { title: 'BCBSMA Provider Central — Prior Authorization Overview (phone and fax numbers)', url: 'https://provider.bluecrossma.com/ProviderHome/portal/home/clinical-resources/prior-authorization/prior-auth-overview' },
      { title: 'BCBSMA Provider Central — Referrals (which services do not require a referral)', url: 'https://provider.bluecrossma.com/ProviderHome/portal/home/office-resources/policies-and-guidelines/referrals' },
      { title: 'BCBSMA Provider Central — Telehealth', url: 'https://provider.bluecrossma.com/ProviderHome/portal/home/patient-resources/sites-of-care/telehealth' },
      { title: 'BCBSMA Provider Central — BlueCard & Out-of-Area Programs', url: 'https://provider.bluecrossma.com/ProviderHome/portal/home/patient-resources/plans-and-products/bluecard-and-out-of-area-programs' },
      { title: 'BCBSMA Provider Central — Coordination of Benefits', url: 'https://provider.bluecrossma.com/ProviderHome/portal/home/office-resources/billing-and-reimbursement/coordination-of-benefits-new' },
      { title: 'BCBSMA Provider Central — Reviews & Appeals', url: 'https://provider.bluecrossma.com/ProviderHome/portal/home/office-resources/policies-and-guidelines/reviews-appeals' },
      { title: 'BCBSMA Mental Health Brief, February 2024 — New standard ABA authorization form', url: 'https://provider.bluecrossma.com/ProviderHome/wcm/connect/d8751aeb-3fc6-40f3-b4eb-a8d872546474/MHBrief_Feb24.pdf?MOD=AJPERES' },
      { title: 'M.G.L. c. 176B, § 4DD — Coverage for diagnosis and treatment of autism spectrum disorder', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176B/Section4DD' },
      { title: 'Acts of 2024, Chapter 388 — An Act relative to applied behavioral analysis therapy (Down syndrome; effective 1/1/2026)', url: 'https://malegislature.gov/Laws/SessionLaws/Acts/2024/Chapter388' },
      { title: 'M.G.L. c. 176O, § 12 — Utilization review', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176O/Section12' },
      { title: 'M.G.L. c. 176G, § 6 — HMO provider contracts (45-day payment)', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter176G/Section6' },
      { title: 'M.G.L. c. 112, § 165 — Licensing of applied behavior analysts and assistant applied behavior analysts', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXVI/Chapter112/Section165' },
    ],
    faq: [
      { q: 'Does Blue Cross Blue Shield of Massachusetts cover ABA therapy?', a: 'Yes. Medical Policy 091 covers medically necessary ABA for autism spectrum disorder and/or Down syndrome on HMO, POS, PPO and Indemnity plans, with prior authorization. Fully insured plans are also bound by ARICA, which bars visit limits and age caps. Self-funded employer plans follow their own plan document.' },
      { q: 'Does BCBSMA require prior authorization for the ABA assessment (97151)?', a: 'Yes. All ten ABA codes, 97151–97158, 0362T and 0373T, need prior authorization on commercial plans. Request the assessment alone using sections A and B of form 144: the 97151 hours and units, plus the autism diagnosis signed by a licensed physician or psychologist. A typical assessment course is 12 hours.' },
      { q: 'Does a child need a referral or doctor\'s order for ABA with BCBSMA?', a: 'No PCP referral. BCBSMA says behavioral health services do not require a referral, even on HMO Blue. You do need prior authorization and a signed diagnosis from a licensed physician or licensed psychologist. That signed diagnosis is what the request form asks for, and the state mandate defines covered autism treatment as care prescribed, provided or ordered by one of them.' },
      { q: 'Can ABA overlap with speech or occupational therapy under BCBSMA?', a: 'No. Medical Policy 091 lists as non-covered ABA "provided simultaneously with other medical services such as occupational therapy, speech and language therapy, physical therapy, and psychotherapy." Schedule ABA around those sessions. Form 144 also asks for the child\'s weekly OT, PT, speech and mental-health hours.' },
      { q: 'How many hours of ABA does BCBSMA authorize?', a: 'No daily unit cap is published. The policy calls comprehensive ABA 30 to 40 hours a week, counting technician and analyst time, and focused ABA is lower and individualized. Clinical direction (97155) typically runs 1–2 hours per 10 technician hours, and social-skills groups (97158) about 2 hours a week.' },
      { q: 'How much BCBA supervision does BCBSMA expect?', a: 'Policy 091 puts the typical dose of 97155 clinical direction at a minimum of 1 hour and a maximum of 2 hours for every 10 direct technician hours. The treatment plan must include a plan for supervision. Supervision or training of staff is not billable as a separate service, and the policy sets no technician-per-BCBA ratio.' },
      { q: 'Does BCBSMA cover ABA by telehealth?', a: 'BCBSMA covers telehealth as a site of care for suitable mental health services, with the same authorization rules as in person. Which ABA codes qualify is listed only in its login-only Telehealth (Telemedicine) – Mental Health payment policy, and Policy 091 says each ABA service is "administered face-to-face." Confirm before scheduling remote 97155 or 97156.' },
      { q: 'I am a Massachusetts provider and the child has an out-of-state Blue card. Who authorizes ABA?', a: 'The home plan. Under BlueCard, benefits come from the member\'s home Blue plan, and pre-service review goes through BCBSMA\'s Pre-service Review for BlueCard members tool or 1-800-676-BLUE. You still submit the claim to BCBSMA with the full prefixed ID, the same way as for Massachusetts members.' },
      { q: 'Does BCBSMA pay for ABA at school?', a: 'Not for school-day educational support. Policy 091 excludes services that are part of an IEP, educational-aide work during the school day, and training school staff. It does allow medically necessary ABA in community settings such as the home, center, daycare, preschool or camp.' },
      { q: 'What is the appeal deadline with BCBSMA?', a: 'First-level provider appeals are due within 180 days of the claim being denied or processed. A second-level appeal is due within 60 days of the first-level decision. Use Appeals Manager or the Request for Claim Review Form.' },
      { q: 'Does BCBSMA accept H0031 or H0032 for ABA?', a: 'Medical Policy 091 lists only CPT 97151–97158, 0362T and 0373T for ABA, with no H-codes.' },
      { q: 'Does BCBSMA require graphs for ABA reauthorization?', a: 'Form 144 asks for an updated treatment plan with measurable goals, progress data for each goal, goal status and a supervision plan, but not graphs. The detailed Treatment Plan Guidelines are in the login-only Autism Payment Policy, so confirm there.' },
    ],
  },
};

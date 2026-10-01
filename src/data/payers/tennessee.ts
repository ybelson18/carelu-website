import type { PayerConfig } from './types.js';

export const tennesseePayers: Record<string, PayerConfig> = {
  'tenncare-tennessee-medicaid': {
    slug: 'tenncare-tennessee-medicaid',
    cardDesc: 'Through age 21 via EPSDT, no annual limit, LBA licensure, one tri-MCO program.',
    assessmentPA: {
      value: 'Required — Universal ABA Request Form ("Assessment Request") with diagnostic report + doctor\'s order, to the member\'s MCO',
      status: 'verified',
      cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
    },
    treatmentPA: {
      value: 'Required — 6-month (26-week) authorization periods; continuation must report % of units used',
      status: 'verified',
      cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
    },
    dxRequired: {
      value: 'ASD or another qualifying DSM-5-TR diagnosis \u2014 not strictly autism-only',
      status: 'verified',
      cites: [{ title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
    },
    payer: 'TennCare (Tennessee Medicaid)',
    state: 'TN', kind: 'state-medicaid',
    pill: 'Payer Guide · TennCare',
    h1: 'TennCare (Tennessee Medicaid) ABA coverage: the intake guide.',
    metaTitle: 'TennCare ABA Coverage & Prior Authorization Guide | Carelu',
    metaDescription:
      'How TennCare (Tennessee Medicaid) covers ABA for autism under EPSDT — one unified tri-MCO program description and universal request form, prior authorization, LBA licensure, 6-month reviews, and why no ABA rates are published.',
    intro: [
      'TennCare, Tennessee\'s Medicaid program, covers ABA for children with autism through the EPSDT benefit — administered entirely through its three managed care organizations. Tennessee is a strong ABA-demand state, and unusually, its MCOs run one deliberately unified ABA program: since a 2024 tri-MCO workgroup (with TennCare and Vanderbilt TRIAD), BlueCare, UnitedHealthcare, and Wellpoint share a single program description and a single universal request form. The clinical rules are the same everywhere; what changes per plan is the submission mechanics — each MCO has its own guide below.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — through age 21, via EPSDT' },
      { label: 'Annual limit', value: 'No annual benefit limit; no fixed hour caps (hours justified by severity)' },
      { label: 'Prior auth', value: 'Required — one universal ABA request form across all three MCOs' },
      { label: 'Licensure', value: 'Direct ABA requires a TN Licensed Behavior Analyst (LBA)' },
      { label: 'Administered by', value: 'BlueCare, UnitedHealthcare Community Plan, Wellpoint (all MCO)' },
      { label: 'Rates', value: 'Not published — negotiated in each MCO\'s provider contracts' },
      { label: 'Staff screening', value: 'BACB checks for RBTs; LTSS/Katie Beckett staff: criminal check within 30 days pre-start + 6 registries, monthly SAM/LEIE/TTPL' },
    ],
    sections: [
      {
        h2: 'Coverage & benefit',
        body: [
          'Children on TennCare receive services through EPSDT, which requires coverage of medically necessary services — including ABA — for members under 21. There is no annual benefit limit on ABA under TennCare, and the unified MCO program sets no fixed weekly-hour cap either: requested hours are justified clinically using a severity/unit guide (levels 1–3 per domain), in 15-minute units. Covered ABA includes assessment, direct therapy, and parent/caregiver training.',
        ],
      },
      {
        h2: 'One program, three MCOs',
        body: [
          'TennCare and its three MCOs jointly issued a single "ABA Provider Requirements and Program Description" (2024) and a universal "Request for Applied Behavior Analysis" form carrying all three MCOs\' logos, fax numbers, and portals (current version January 2026). The shared baseline: an ASD or other qualifying DSM-5-TR diagnosis by a qualified professional with the diagnostic report and a doctor\'s order; direct ABA delivered by a Tennessee Licensed Behavior Analyst (LBA), with RBTs working under LBA authority; a treatment plan within 30 days of starting, reviewed every 6 months; and telehealth allowed per-code (flagged on the form) but treated cautiously.',
          'The operational tripwire intake should know from day one: continuation requests must report the percentage of authorized units actually used — utilization under 90% (on direct-treatment code 97153) requires a written explanation. Families whose real availability can\'t support the requested hours become a reauthorization problem six months later, so capture honest availability at intake.',
        ],
        cites: [
          { title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' },
          { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' },
          { title: 'Tri-MCO ABA Overview of Updates (Sept 2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABAOverviewofUpdates.pdf' },
        ],
      },
      {
        h2: 'Authorization & provider requirements',
        body: [
          'A licensed provider must prescribe the service, and coverage is always subject to medical necessity, with prior authorization required for both the assessment and treatment. Authorizations run in 6-month (26-week) periods; continuation requires documented progress against goals, current severity levels, requested hours per code, and parent-training (97156) volume. Tennessee requires that a BCBA or other qualified licensed clinician delivering direct ABA be licensed as a Licensed Behavior Analyst (LBA) through the Tennessee Applied Behavior Analyst Licensing Board. Because TennCare is entirely MCO-administered, capture which plan the family is on — it decides the portal, fax, forms, and timelines (see the per-MCO guides).',
        ],
        cites: [
          { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' },
        ],
      },
      {
        h2: 'Rates: negotiated, not published',
        body: [
          'Unlike most state Medicaid programs, TennCare publishes no ABA fee schedule — each "at-risk" MCO negotiates its own provider contracts and maintains its own rates. A February 2026 multistate comparison of Medicaid ABA reimbursement leaves every Tennessee cell blank for exactly this reason. For practices modeling TennCare revenue, the only source of truth is your own MCO contracts — and rate negotiation is a per-plan conversation, not a state lookup.',
        ],
        cites: [
          { title: 'CSG South — Comparison of Medicaid Reimbursement for ABA Individual Services (Feb 2026)', url: 'https://csgsouth.org/wp-content/uploads/HSPS-Converted-IR__Comparison-of-Medicaid-Reimbursement-for-ABA-Individual-Services.pdf' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'Tennessee does not license or register behavior technicians — the tri-MCO program description is the binding document, and it requires that RBTs and their supervising BCBAs "comply with ALL of the current BACB requirements for credentialing, ethics, competency, supervision, and maintenance of the RBT credential." Unlicensed staff deliver ABA under the extended authority and direction of a TN LBA and may not represent themselves as behavior analysts. So the BACB floor is the operative technician standard: 18+, high-school education, the 40-hour training and initial competency assessment (updated curriculum from January 2026), and — within 180 days of paying for the RBT application — a criminal background check plus an abuse-registry check "comparable to those required of home health aides, child care professionals, and teachers," attested by the RBT supervisor or employer. Tennessee sets no numeric supervision ratio of its own, so the BACB minimum governs: 5% of monthly service hours supervised, with two face-to-face contacts per month, at least one individual.',
          'State-mandated screening enters through TennCare\'s Aligned Background Check Protocol (effective July 1, 2024), and its scope matters: it formally binds LTSS providers — 1915(c) waiver, Katie Beckett, ECF CHOICES, and CHOICES. For those programs, every employee, subcontractor, or volunteer with direct member contact needs a Title 52-compliant criminal check (TBI fingerprint check, or a state-licensed private investigation company as an alternative; nationwide check if the hire has lived in TN a year or less) completed within 30 days before their first day of direct contact, plus six registry clearances: the TN Elderly/Vulnerable Abuse Registry, National Sex Offender Registry, SAM, OIG LEIE, the TennCare Terminated Provider List, and TN FOIL. A hit on the first five is automatically disqualifying; convictions and FOIL hits require a documented individualized assessment — blanket no-felony policies are prohibited. SAM, LEIE, and TTPL must then be rechecked monthly, and TennCare can recoup payments for services rendered by staff whose checks weren\'t compliant. An ABA agency serving only standard EPSDT members inherits employee screening chiefly through the BACB requirement and its MCO contract terms — but any agency serving Katie Beckett children falls squarely under the protocol, so most practices should simply run it for everyone.',
          'At the supervisor level, direct ABA requires a Tennessee Licensed Behavior Analyst (LBA) — a BCBA or BCBA-D credential is the qualification basis — through the Applied Behavior Analyst Licensing Committee. Application mechanics under the May 2025-revised Rules 1180-05: minimum age 21, a vendor-submitted criminal background check sent directly to the Committee, two good-moral-character letters, and fees of $50 (application), $40 (license), and $150 biennial renewal, which also requires proof of current BACB certification plus 3 CE hours on cultural diversity. Assistant-level LABAs (BCaBA-based) may practice only under LBA supervision, and practicing without a license draws $500–$1,000 civil penalties. One carve-out worth knowing: a licensed mental health clinician who can attest to BACB and MCO standards may provide direct ABA without an LBA license if practicing within a provider group, not independently. Each MCO also independently verifies BCBA credentials at network enrollment, requires an annual ABA quality-assurance attestation — and does not separately reimburse non-client-specific administrative supervision or technician training. The rules and program description publish no TB-test, CPR, or crisis-training mandate for ABA staff (only a crisis plan per BACB best practices); confirm any extra health-screening requirements with your MCO contract.',
        ],
        cites: [
          { title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' },
          { title: 'TennCare Aligned Background Check Protocol (eff. July 1, 2024)', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/AlignedBackgroundCheckProtocol.pdf' },
          { title: 'Rules of the TN Applied Behavior Analyst Licensing Committee, Ch. 1180-05 (rev. May 2025)', url: 'https://publications.tnsosfiles.com/rules/1180/1180-05.20250507.pdf' },
          { title: 'BACB — Meeting RBT Requirements During the 2026 Transition (updated 08/2025)', url: 'https://www.bacb.com/wp-content/uploads/2025/07/RBT-2026-Requirements_250723-a.pdf' },
          { title: 'BACB RBT Handbook', url: 'https://assets.bacb.com/wp-content/uploads/2022/01/RBTHandbook_230622-a.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'TennCare MCO', desc: 'BlueCare, UnitedHealthcare, or Wellpoint — clinically identical program, but the portal, fax, and mechanics differ per plan.' },
      { title: 'ASD diagnosis + report', desc: 'Diagnosis, diagnosing provider and credentials, date, and the diagnostic report — required with the universal request form.' },
      { title: 'Doctor\'s order', desc: 'The physician order or licensed treating provider\'s recommendation for ABA — required for the assessment PA.' },
      { title: 'LBA licensure', desc: 'Confirm the supervising/rendering analyst holds a Tennessee LBA license.' },
      { title: 'Realistic availability', desc: 'Continuations must explain utilization under 90% of authorized units — request hours the family can actually attend.' },
    ],
    sources: [
      { title: 'TennCare — official program site', url: 'https://www.tn.gov/tenncare.html' },
      { title: 'ABA Provider Requirements & Program Description — TennCare MCOs', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' },
      { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' },
      { title: 'Tri-MCO ABA Overview of Updates (Sept 2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABAOverviewofUpdates.pdf' },
      { title: 'CSG South — Medicaid ABA reimbursement comparison (Feb 2026)', url: 'https://csgsouth.org/wp-content/uploads/HSPS-Converted-IR__Comparison-of-Medicaid-Reimbursement-for-ABA-Individual-Services.pdf' },
      { title: 'TennCare Aligned Background Check Protocol (eff. July 1, 2024)', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/AlignedBackgroundCheckProtocol.pdf' },
      { title: 'Rules of the TN Applied Behavior Analyst Licensing Committee, Ch. 1180-05 (rev. May 2025)', url: 'https://publications.tnsosfiles.com/rules/1180/1180-05.20250507.pdf' },
      { title: 'BACB — Meeting RBT Requirements During the 2026 Transition (updated 08/2025)', url: 'https://www.bacb.com/wp-content/uploads/2025/07/RBT-2026-Requirements_250723-a.pdf' },
      { title: 'BACB RBT Handbook', url: 'https://assets.bacb.com/wp-content/uploads/2022/01/RBTHandbook_230622-a.pdf' },
      { title: 'TennCare Kids (EPSDT) \u2014 birth through age 20', url: 'https://www.tn.gov/tenncare/tenncare-kids.html' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Birth through age 20. ABA rides on EPSDT, and TennCare defines that benefit as \u201ca full program of checkups and health care services for children from birth through age 20 who have TennCare.\u201d The shared tri-MCO program description sets no age floor and no age ceiling of its own \u2014 so the EPSDT boundary is the operative one, there is no minimum age, and the 21st birthday is the coverage cliff to diary at intake.',
        status: 'verified',
        cites: [{ title: 'TennCare Kids (EPSDT) \u2014 birth through age 20', url: 'https://www.tn.gov/tenncare/tenncare-kids.html' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
      },
      dxRecency: {
        value:
          'No recency rule on the ASD diagnosis itself. The program description requires only that the diagnosis be \u201c(a) issued by a qualified health professional, practicing within their scope, with training in assessment of individuals with ASD and/or other neurodevelopmental concerns, (b) based on current DSM-5-TR criteria if applicable, and (c) include history, observation, and if/when clinically appropriate formal assessment of developmental skills.\u201d What does carry a clock is functional re-evaluation: the initial pre-certification review expects providers to describe outcomes \u201cincluding updated evaluation of functioning via standardized tools at least every two years.\u201d The universal form asks for the date the diagnosis was initially rendered and whether a standard assessment was used \u2014 so an older report is a documentation question, not a disqualifier.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
      diagnosingProviders: {
        value:
          '\u201cASD or other identified diagnosis necessitating ABA intervention should be\u2026 issued by a qualified health professional, practicing within their scope, with training in assessment of individuals with ASD and/or other neurodevelopmental concerns\u201d \u2014 the program names no specific license. Initial pre-certification separately requires \u201cdocumentation by a TN licensed clinician supporting medical necessity for ABA.\u201d The universal form captures the diagnosing facility/group plus the provider name and credentials. Note Tennessee is not autism-only: another qualifying DSM-5-TR diagnosis \u201cfor which ABA is proven to be an effective appropriate intervention\u201d also opens the door, and the form asks about it explicitly.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
      diagnosticTools: {
        value:
          'No single instrument is mandated. The diagnosis \u201cmust be validated by a documented comprehensive assessment demonstrating the presence of\u201d the DSM-5-TR ASD criteria, and the evaluation should include \u201cformal assessment of developmental skills (e.g. cognitive, adaptive, ASD assessment tools).\u201d The ABA assessment itself \u201cshould be comprehensive and include direct observation (ideally a minimum of one in-person contact), file review, interviews with one or more informants, and standardized assessments to evaluate cognition, communication, social skills, adaptive skills, and behavioral domains,\u201d plus a Functional Behavioral Assessment. The program points to AAP/AAN/AACAP-recommended instruments generically rather than publishing a required list; the form asks only \u201cWas Standard Assessment used: In diagnosis of ASD?\u201d and, at continuation, \u201cList Standardized Assessments used to validate progress and include scores.\u201d',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
      referral: {
        value:
          'Yes \u2014 a doctor\'s order, attached to the request. The universal ABA request form\u2019s assessment section carries a hard \u201cDoctor\u2019s Order Attached: Yes/No\u201d checkbox alongside \u201cDiagnostic Report Attached,\u201d and the review requires documentation by a TN-licensed clinician supporting medical necessity. No validity window is published for the order, so submit the most current one. The three MCOs sharpen this differently \u2014 UnitedHealthcare requires a physician order or script at initiation and Wellpoint asks for an MD order or treating-provider recommendation \u2014 see the per-MCO guides.',
        status: 'verified',
        cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
      },
      telehealth: {
        value:
          'Available per code, not blanket-approved. Every code row on the universal request form \u2014 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158 \u2014 carries an \u201cIndicate if Hours are telehealth\u201d checkbox, and \u201cTelehealth\u201d is one of the place-of-service options alongside Clinic, Home, Community and School, so telehealth hours are requested and authorized code by code. The program description adds no prohibition but frames it cautiously: providers must weigh the CDC-derived limitations, \u201cidentify protocols for clinical appropriateness of telehealth models (i.e., direct service, clinical direction, caregiver consultation),\u201d use HIPAA-compliant technology and ensure provider competence.',
        status: 'verified',
        cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
      },
      authTurnaround: {
        value:
          'Every TennCare ABA request is decided by the member\'s MCO, and the statewide MCO contract sets the clock. For a standard (non-urgent) request, the decision is due "within seven (7) calendar days of the request\'s receipt." This took effect January 1, 2026; before that it was 14 days. The MCO may add "up to fourteen (14) additional calendar days" if the family or provider asks, or if it shows TennCare it needs more information. An expedited decision is due "no later than seventy-two (72) hours after receipt of the request for service." Expedited applies when the standard clock "could seriously jeopardize the enrollee\'s life or health or ability to attain, maintain, or regain maximum function." These match the federal managed-care cap in 42 CFR 438.210(d). The shared tri-MCO ABA form sets 26-week authorization periods but publishes no lead time for filing a continuation. Put the end date in the calendar and file before it.',
        status: 'verified',
        cites: [
          { title: 'TennCare Statewide MCO Contract (Amendment 25, July 1, 2026) — A.2.19.3 and A.2.21.4', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/MCOStatewideContract.pdf' },
          { title: '42 CFR 438.210(d) — MCO authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
          { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'TennCare pays last. The MCO contract makes TennCare "the payer of last resort for all covered services." Provider agreements must require providers "to seek such third party liability payment before submitting claims" to the MCO. So a child on a parent\'s commercial plan is billed there first, and the primary EOB goes with the TennCare claim. Get the commercial plan\'s prior authorization too. The MCO "shall deny payment on a claim that has been denied by a third party payer when the reason for denial is the provider or enrollee\'s failure to follow prescribed procedures, including but not limited to, failure to obtain prior authorization." The contract does let certain claims be paid first and recovered later (the State Medicaid Manual 3904.4 services). Each MCO publishes its own list: Wellpoint pays and pursues for any child under 21 without Medicare, BlueCare/TennCareSelect list "TennCare Kids," and UnitedHealthcare\'s manual lists none. See the MCO guides. TRICARE by statute pays only after other coverage "except in the case of a plan administered under title XIX" (Medicaid), so TRICARE goes before TennCare. CHAMPVA is the reverse: "If you are eligible under Medicaid, CHAMPVA will pay first."',
        status: 'verified',
        cites: [
          { title: 'TennCare Statewide MCO Contract (Amendment 25, July 1, 2026) — A.2.19.3 and A.2.21.4', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/MCOStatewideContract.pdf' },
          { title: '42 CFR 433.139 — Medicaid third-party liability, payment of claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
          { title: '42 U.S.C. 1396a(a)(25) — Medicaid third-party liability', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap7-subchapXIX-sec1396a.htm' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Tennessee sets no numeric ratio of its own \u2014 the BACB floor governs by incorporation. The program description requires that \u201cRBT\u2019s and their supervising BCBA providers, must comply with ALL of the current Behavior Analyst Certification Board (BACB) requirements for credentialing, ethics, competency, supervision, and maintenance of the RBT credential,\u201d which puts the operative standard at 5% of monthly service hours supervised with two face-to-face contacts per month. Direct ABA \u201cmust be provided by or supervised by a Board-Certified Behavior Analyst (BCBA) licensed in TN (LBA) or a health professional permissible under TN state law\u201d; \u201cunlicensed persons may deliver applied behavior analysis (ABA) services under the extended authority and direction of a TN LBA\u201d and \u201cshall not represent themselves as professional behavior analysts.\u201d One carve-out: a licensed mental health clinician who can attest to BACB and MCO standards may deliver direct ABA without an LBA license if practicing within a provider group, not independently. The supervision overhead itself is not payable \u2014 \u201cnon-client specific administrative Supervision/training of behavior technician/paraprofessionals\u201d is an explicit non-covered service.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Rules of the TN Applied Behavior Analyst Licensing Committee, Ch. 1180-05 (rev. May 2025)', url: 'https://publications.tnsosfiles.com/rules/1180/1180-05.20250507.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not answered for 97153 with 97155. The program description\u2019s non-covered list bars \u201cmore than one appropriately trained, licensed psychologist/LABA delivering services to a member during a specific time interval\u201d and \u201cservices provided simultaneously with other medical services such as occupational therapy, speech and language therapy, physical therapy, and psychotherapy\u201d \u2014 both about two distinct services on the same clock, neither about an analyst modifying protocol while a technician runs it. The AMA descriptor for 97155 already contemplates simultaneous direction of a technician, and the universal form lets a provider request 97153 and 97155 units in the same authorization without addressing overlap.',
        status: 'unverified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
        verifyVia:
          'The member\u2019s MCO and its claim-edit policy \u2014 BlueCare behavioral (BHABA@bcbst.com, (423) 535-5717 option 2), Wellpoint provider services (833) 731-2154, or UnitedHealthcare\u2019s TN ABA line (800) 690-1606. TennCare publishes no ABA fee schedule or edit table, so the answer lives in each MCO contract.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling, no annual benefit limit and no fixed weekly-hour cap. The universal form asks for units \u201cper week\u201d and \u201cper authorization period\u201d in 15-minute increments, justified against a severity/unit guide that scores communication, social, behavior and adaptive domains at levels 1\u20133. The only published quantitative ceiling is group size: \u201cgroup size should be no larger than six to eight participants as a best practice.\u201d Utilization is policed at the back end instead of the front \u2014 continuation requests must compute units utilized divided by units approved times 100, and \u201cif under 90% utilized, please explain,\u201d with the form noting \u201cthese figures are in reference to 97153/direct care, per authorization.\u201d UnitedHealthcare separately applies extra scrutiny above 20 hours per week.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
      noteSignature: {
        value:
          'The program description sets no session-note co-signature rule. What it does require is BACB-standard documentation control \u2014 behavior analysts \u201ccomply with all applicable requirements (e.g., BACB rules, laws, regulations, contracts, funder, and organization requirements) for storing, transporting, retaining, and destroying\u201d records, and \u201cwhen a behavior analyst leaves an organization, these responsibilities remain with the organization\u201d \u2014 plus individualized treatment plans within 30 days of admission, reviewed every 6 months. The one signature rule that is published belongs to the authorization request, not the note: \u201cthis may be the signature of the person completing the form; however, it should note that is on behalf of the current treating provider. Or the actual recommending current treating provider may sign,\u201d attesting that everything submitted sits in the member\u2019s medical record.',
        status: 'unverified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
        verifyVia:
          'The member\u2019s MCO provider manual (BlueCare\u2019s Provider Administration Manual, Wellpoint\u2019s TN provider manual, UHC\u2019s TN Community Plan manual) and the record-documentation terms of your MCO participation agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Home, clinic, community and school are all payable \u2014 the universal request form\u2019s place-of-service grid lists Clinic, Home, Community, School, Telehealth and Other, and the program description states that \u201cschool based behavioral health services that are medically necessary are not required to be included in a child\u2019s Individualized educational plan (IEP) in order to be reimbursable.\u201d That makes Tennessee materially friendlier than New York, which bars school-setting ABA outright. The line is drawn around function, not building: \u201cproviding services that are part of an individualized education program (IEP) or functioning as an educational aide in the school setting\u201d is non-covered, as are provider travel time, transporting the member in lieu of a caregiver, a provider residing in the member\u2019s home as live-in help, billing while the member is sleeping, and accompanying the member to outside activities not in the documented treatment plan.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
      billAsProvider: {
        value:
          'The claim goes out under the enrolled group or servicing provider, with practitioner level riding as a modifier rather than a separate NPI. The universal form collects Group Name, Group TIN and Group NPI and \u2014 \u201cif practicing as a solo provider\u201d \u2014 the Servicing Provider NPI, plus the supervisor\u2019s name, credentials and phone, and a TN Medicaid ID for out-of-network providers. Level is expressed through modifiers on the form\u2019s code grid: HO on the analyst-delivered codes (97151, 97155, 97156, 97157, 97158) and HM on the technician-delivered ones (97152, 97154), with 97153 split \u201c97153 BA or RBT \u2014 indicate with modifier.\u201d Because TennCare publishes no fee schedule, the rate behind each modifier lives in your MCO contract, not a state lookup.',
        status: 'verified',
        cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
    },
    faq: [
      { q: 'Does TennCare cover ABA therapy?', a: 'Yes — for members up to age 21 through the EPSDT benefit, with no annual benefit limit and no fixed hour cap (hours are justified clinically). Coverage requires prior authorization and medical necessity, through the member\'s MCO.' },
      { q: 'Who can provide ABA under TennCare?', a: 'Direct ABA must be delivered by a BCBA or qualified licensed clinician who holds a Tennessee Licensed Behavior Analyst (LBA) license, with RBTs working under LBA authority.' },
      { q: 'Are TennCare\'s ABA rules different per MCO?', a: 'The clinical rules are deliberately unified — one shared program description and one universal request form across BlueCare, UnitedHealthcare, and Wellpoint. What differs is submission mechanics (portal, fax, forms, timelines) and UnitedHealthcare\'s additional Level of Care guidelines — see each MCO\'s guide.' },
      { q: 'What does TennCare pay for ABA?', a: 'TennCare publishes no ABA fee schedule — each MCO negotiates rates in its provider contracts. Your contract is the only source of truth on reimbursement.' },
      { q: 'Does TennCare require RBT certification for ABA technicians?', a: 'The shared TennCare program description sets credential expectations for "RBT paraprofessionals": RBTs and their supervising BCBAs "must comply with ALL of the current Behavior Analyst Certification Board (BACB) requirements for credentialing, ethics, competency, supervision, and maintenance of the RBT credential." Direct ABA must be delivered or supervised by a TN Licensed Behavior Analyst. Technicians do not bill under their own NPI: the universal form collects the group (or solo servicing) NPI, and technician codes carry the HM modifier.' },
    ],
  },

  'bluecare-tennessee': {
    slug: 'bluecare-tennessee',
    family: 'bcbst',
    cardDesc: 'Shared TennCare program via Availity/BCBST; 26-week auths, 7-day UM decisions.',
    assessmentPA: {
      value: 'Required — Universal ABA Request Form (diagnostic report + doctor\'s order) via Availity or fax (800) 292-5311',
      status: 'verified',
      cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'BCBST — ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }, { title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
    },
    treatmentPA: {
      value: 'Required — 26-week periods; continuation shows progress, severity levels, and hours approved vs. used',
      status: 'verified',
      cites: [{ title: 'BlueCare — Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }, { title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
    },
    dxRequired: {
      value: 'ASD or another qualifying DSM-5-TR diagnosis \u2014 not strictly autism-only',
      status: 'verified',
      cites: [{ title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'BCBST — ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }],
    },
    payer: 'BlueCare Tennessee (BCBST)',
    state: 'TN', kind: 'medicaid-mco', parent: 'TennCare',
    pill: 'Payer Guide · BlueCare Tennessee',
    h1: 'BlueCare Tennessee ABA coverage (TennCare MCO).',
    metaTitle: 'BlueCare Tennessee (TennCare MCO) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How BlueCare Tennessee (BCBST) administers TennCare\'s ABA benefit — the shared tri-MCO program description, the universal request form via Availity, BlueCare\'s supplemental initiation/continuation form, and 7-day UM timelines.',
    intro: [
      'BlueCare Tennessee (including TennCareSelect), run by BlueCross BlueShield of Tennessee, administers the TennCare ABA benefit under the shared tri-MCO program description — so the clinical rules match the TennCare baseline exactly. What\'s BlueCare-specific is the machinery: Availity submission, BlueCare\'s own supplemental initiation/continuation form, dedicated fax lines, and a 7-day standard UM clock.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'TennCare MCO (BlueCross BlueShield of TN; incl. TennCareSelect)' },
      { label: 'Clinical rules', value: 'Shared tri-MCO ABA program description (TennCare baseline)' },
      { label: 'Prior auth', value: 'Required — universal form + BlueCare initiation/continuation form' },
      { label: 'Auth periods', value: '26 weeks / 6 months; continuation shows approved vs. used hours' },
      { label: 'UM timeline', value: 'Standard decisions within 7 calendar days of receipt (since 1/1/2026); expedited within 72 hours' },
      { label: 'Rates', value: 'Negotiated per contract — no published ABA fee schedule' },
    ],
    sections: [
      {
        h2: 'How BlueCare administers the benefit',
        body: [
          'Submissions run through Availity (or via provider.bcbst.com), with fax as the fallback — (800) 292-5311 for BlueCare/TennCareSelect and (800) 851-2491 for CoverKids. The assessment PA uses the universal tri-MCO request form with the diagnostic report and doctor\'s order attached; treatment requests add BlueCare\'s supplemental "Initiation and Continuation of ABA Therapy" form (rev. 2/26), which asks for the diagnosis with severity level (1–3), measurable progress, requested hours per week per code, and — at continuation — whether progress would hold if hours were reduced. UM questions go to the in-house behavioral team (BHABA@bcbst.com or (423) 535-5717, option 2).',
        ],
        cites: [
          { title: 'BlueCare — Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' },
          { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' },
        ],
      },
      {
        h2: 'What\'s worth knowing at intake',
        body: [
          'Authorized ABA hours are not inclusive of other services — the form explicitly separates OT/PT — so map the family\'s full therapy schedule without fear of crowding out the ABA request. Standard (non-urgent) authorization decisions are due within 7 calendar days: BlueCare\'s July 2026 manual commits to "State-established timeframes that may not exceed 7 calendar days following the receipt of the request for service" (expedited: "no later than 72 hours"), matching the TennCare contract\'s 7-day rule effective January 1, 2026. That is the number to set family expectations against. The older tri-MCO overview (Sept 2024) quoted 14 days; retrospective reviews it put at 30. And like all TennCare MCOs, continuation requests must account for authorized-versus-used hours, making honest availability capture at intake a six-months-later safeguard.',
        ],
        cites: [
          { title: 'BlueCare Tennessee Provider Administration Manual (H3259, 07/01/2026) — Standard Authorization Decisions', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' },
          { title: 'TennCare Statewide MCO Contract (Amendment 25, July 1, 2026) — A.2.19.3.5', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/MCOStatewideContract.pdf' },
          { title: 'Tri-MCO ABA Overview of Updates (Sept 2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABAOverviewofUpdates.pdf' },
        ],
      },
      {
        h2: 'Telehealth and the fee schedule',
        body: [
          'Telehealth: yes, for every ABA code, subject to the authorization. Since October 1, 2024 BlueCare pays telehealth only for codes on its Telehealth Approved Code List, and the list updated March 10, 2026 carries 97151 through 97158, 0362T and 0373T as approved for both POS 02 (telehealth outside the home) and POS 10 (telehealth in the home). Bill the POS code; modifiers such as 95 and GT are informational only. The hours still have to be requested as telehealth, code by code, on the universal request form.',
          'Fee schedule: there is no public one for ABA. TennCare publishes no ABA rate table, and BlueCare pays under the fee schedule in your BlueCare provider agreement \u2014 its telehealth guide says payment for many telehealth services "will be consistent with your BlueCare Tennessee fee schedule," with a 15% reduction only on audio-only codes. For rates, go to your contract or BlueCare network management. If the family\'s card is a commercial BlueCross BlueShield of Tennessee plan rather than BlueCare, see the BlueCross BlueShield of Tennessee (commercial) guide.',
        ],
        cites: [
          { title: 'BlueCare Tennessee — Telehealth Approved Code List (updated 3-10-26)', url: 'https://content.bcbst.com/api/public/content/telehealth_approved_code_list.pdf' },
          { title: 'BlueCare Tennessee Provider Administration Manual (H3259, 07/01/2026)', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' },
          { title: 'Managing Telehealth for BlueCare Tennessee Patients — provider guide (updated Jan. 2025)', url: 'https://content.bcbst.com/api/public/content/bluecare_tennessee_telehealth_guide.pdf' },
          { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' },
        ],
      },
      {
        h2: 'Is the BlueCare ABA network open to new providers?',
        body: [
          'BlueCare Tennessee, which runs both BlueCare and TennCareSelect, does not run an any-willing-provider network. Its Provider Administration Manual says its "ability to credential Providers as well as maintain a separate network and not include any willing Provider is not considered discrimination." Network need is a recognized reason to turn an applicant down: providers "denied participation in a BCBST/BCT network for reason other than network need may not reapply for participation for a least one year." So a denial for network need does not trigger that one-year wait.',
          'To apply, practitioners and organizations submit a credentialing application, assessed against NCQA, CMS and TennCare Contractor Risk Agreement standards. ABA groups also have to attest to the shared TennCare ABA program description to join the ABA network. BlueCare publishes no statement on whether it is adding ABA providers in a given region; ask BlueCare provider network operations.',
        ],
        cites: [
          { title: 'BlueCare Tennessee Provider Administration Manual (H3259, rev. 10/01/2026) — covers BlueCare, TennCareSelect and CoverKids', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' },
          { title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/13/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'BlueCare vs. TennCareSelect vs. CoverKids', desc: 'Same BCBST machinery, different fax lines — confirm the exact program.' },
      { title: 'Diagnostic report + doctor\'s order', desc: 'Both attach to the universal form for the assessment PA.' },
      { title: 'Severity levels + requested hours by code', desc: 'BlueCare\'s supplemental form asks for severity (1–3) and hours/week per code.' },
      { title: 'Full therapy schedule', desc: 'ABA hours are counted separately from OT/PT — document everything.' },
    ],
    sources: [
      { title: 'BlueCare Tennessee Provider Administration Manual', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' },
      { title: 'BlueCare Tennessee — Telehealth Approved Code List (updated 3-10-26)', url: 'https://content.bcbst.com/api/public/content/telehealth_approved_code_list.pdf' },
      { title: 'Managing Telehealth for BlueCare Tennessee Patients — provider guide (updated Jan. 2025)', url: 'https://content.bcbst.com/api/public/content/bluecare_tennessee_telehealth_guide.pdf' },
      { title: 'BlueCare — Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' },
      { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' },
      { title: 'Tri-MCO ABA Overview of Updates (Sept 2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABAOverviewofUpdates.pdf' },
      { title: 'TennCare Kids (EPSDT) \u2014 birth through age 20', url: 'https://www.tn.gov/tenncare/tenncare-kids.html' },
      { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' },
      { title: 'BCBST \u2014 ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the TennCare rule: EPSDT covers \u201cchildren from birth through age 20 who have TennCare,\u201d and the shared tri-MCO program description adds no age floor or ceiling of its own. BlueCare publishes no deviating age rule \u2014 its own initiation/continuation form collects date of birth without an age gate.',
        status: 'verified',
        cites: [{ title: 'TennCare Kids (EPSDT) \u2014 birth through age 20', url: 'https://www.tn.gov/tenncare/tenncare-kids.html' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the TennCare rule: no recency limit on the ASD diagnosis itself, with functional re-evaluation by standardized tools expected \u201cat least every two years.\u201d BlueCare\u2019s own forms ask for \u201cInitial/First Date ASD Diagnosed\u201d and for diagnostic confirmation \u2014 \u201cdiagnostic reports, doctor\u2019s orders, etc.\u201d \u2014 plus the DSM severity level (Level 1/2/3), but set no maximum age on the report. Continuation requests are due at least once every six months.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }, { title: 'BCBST \u2014 ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Follows the TennCare rule: the diagnosis must be issued by \u201ca qualified health professional, practicing within their scope, with training in assessment of individuals with ASD and/or other neurodevelopmental concerns,\u201d with a TN-licensed clinician documenting medical necessity. BlueCare\u2019s forms ask only for diagnostic confirmation and severity level and name no additional credential of their own.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'BCBST \u2014 ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }],
      },
      diagnosticTools: {
        value:
          'Follows the TennCare rule \u2014 no named instrument is required; the diagnosis must be validated by a documented comprehensive assessment against DSM-5-TR criteria, and the ABA assessment must include direct observation, file review, informant interviews and standardized assessments across cognition, communication, social, adaptive and behavioral domains. BlueCare adds a severity checkbox (Level 1/2/3) and, at continuation, asks for measurable goals and evidence of progress rather than a named test battery.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }, { title: 'BCBST \u2014 ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }],
      },
      referral: {
        value:
          'Follows the TennCare rule: the assessment request needs the diagnostic report and a doctor\u2019s order. Both BlueCare forms ask for \u201cdiagnostic confirmation like diagnostic reports, doctor\u2019s orders, etc.\u201d BlueCare-specific mechanics: submit through Availity (Tennessee providers) or Cohere (out-of-state), with fax fallback to (800) 292-5311 for BlueCare/TennCareSelect and (800) 851-2491 for CoverKids; UM questions go to BHABA@bcbst.com or (423) 535-5717, option 2. No referral validity window is published.',
        status: 'verified',
        cites: [{ title: 'BCBST \u2014 ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }, { title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
      telehealth: {
        value:
          'Two layers, both published. Authorization: telehealth hours are requested per code on the universal tri-MCO form, which carries an \u201cIndicate if Hours are telehealth\u201d checkbox on every ABA code row and lists Telehealth among the places of service; the shared program description adds its cautions on clinical appropriateness, HIPAA-compliant technology and provider competence. Claims: since October 1, 2024 BlueCare pays telehealth only for codes on its Telehealth Approved Code List, and the current list (updated 3-10-26) marks every ABA code \u2014 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T \u2014 \u201cYes\u201d for both POS 02 and POS 10. The manual says telehealth modifiers such as GT and 95 are \u201cfor informational purposes\u201d but claims \u201cmust be billed with the correct place of services (POS) 10: Telehealth Provided in Patient\u2019s Home or POS 02: Telehealth Provider Other than in Patient\u2019s Home.\u201d Payment for many telehealth services \u201cwill be consistent with your BlueCare Tennessee fee schedule\u201d; the 15% reduction applies only to audio-only codes.',
        status: 'verified',
        cites: [{ title: 'BlueCare Tennessee — Telehealth Approved Code List (updated 3-10-26)', url: 'https://content.bcbst.com/api/public/content/telehealth_approved_code_list.pdf' }, { title: 'BlueCare Tennessee Provider Administration Manual (H3259, 07/01/2026) — covers BlueCare, TennCareSelect and CoverKids', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' }, { title: 'Managing Telehealth for BlueCare Tennessee Patients — provider guide (updated Jan. 2025)', url: 'https://content.bcbst.com/api/public/content/bluecare_tennessee_telehealth_guide.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
      },
      authTurnaround: {
        value:
          'BlueCare\'s July 2026 manual: for a standard request, BlueCare "will provide notice as expeditiously as the member\'s condition requests and within State-established timeframes that may not exceed 7 calendar days following the receipt of the request for service." It may add "up to 14 additional calendar days" if the member or provider asks, or if BlueCare justifies needing more information. Expedited requests are decided "no later than 72 hours after the receipt of the request for service." That 72 hours can also stretch by up to 14 days on the same grounds. The clock runs from receipt. BlueCare\'s ABA form says continuation requests "must be submitted at least once every six months" (26-week periods) but sets no lead time before expiry.',
        status: 'verified',
        cites: [
          { title: 'BlueCare Tennessee Provider Administration Manual (H3259, 07/01/2026) — covers BlueCare and TennCareSelect', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' },
          { title: 'TennCare Statewide MCO Contract (Amendment 25, July 1, 2026) — A.2.19.3 and A.2.21.4', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/MCOStatewideContract.pdf' },
          { title: 'BlueCare — Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'BlueCare, TennCareSelect and CoverKids "are always the payers of last resort." Bill the commercial plan first. The secondary claim must carry "the primary payer\'s explanation of benefits" and must be "received within 120 days from the date the primary insurer\'s remittance was produced." BlueCare pays only the gap up to its own allowed amount: if the other carrier paid at or above BlueCare\'s allowable, "BCT will make no additional reimbursement." Pay-and-chase exception: claims for "TennCare Kids," "Preventive pediatric care," all CoverKids members under 21, and absent-parent insurance "will not be denied for a primary carrier\'s EOB." BlueCare pays and recovers from the other plan, though the manual notes billing the other carrier first earns "the higher reimbursement rate." The manual does not say whether an ABA claim counts as "TennCare Kids." It also says to seek the primary insurer\'s prior authorization first only when BlueCare is secondary to Medicare. It is silent on a commercial primary. The TennCare contract lets the MCO deny a claim the primary denied for "failure to obtain prior authorization." Get the commercial PA, and confirm with BlueCare whether its own ABA PA is still needed. TRICARE by statute pays only after other coverage "except in the case of a plan administered under title XIX" (Medicaid), so TRICARE goes before TennCare. CHAMPVA is the reverse: "If you are eligible under Medicaid, CHAMPVA will pay first."',
        status: 'verified',
        cites: [
          { title: 'BlueCare Tennessee Provider Administration Manual (H3259, 07/01/2026) — covers BlueCare and TennCareSelect', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' },
          { title: 'TennCare Statewide MCO Contract (Amendment 25, July 1, 2026) — A.2.19.3 and A.2.21.4', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/MCOStatewideContract.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        verifyVia: 'BlueCare Provider Service / UM (Availity) — ask whether an ABA claim for a member under 21 falls under the "TennCare Kids" pay-and-chase line, and whether BlueCare wants its own ABA authorization when a commercial plan is primary.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Follows the TennCare rule: direct ABA must be delivered by or supervised by a TN Licensed Behavior Analyst (or a health professional permissible under TN law), unlicensed persons work \u201cunder the extended authority and direction of a TN LBA,\u201d and RBTs plus their supervising BCBAs must comply with all current BACB supervision requirements \u2014 which sets the operative floor at 5% of monthly service hours with two face-to-face contacts. BlueCare publishes no ratio of its own; its forms capture the provider\u2019s name, credentials and NPI/Tax ID rather than a supervision schedule.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }],
      },
      concurrentBilling: {
        value:
          'Yes, when a protocol is actually modified. BlueCare\u2019s July 2026 manual: "Providers should bill in a manner consistent with the CPT code descriptions. In addition, if the BCBA is directing an RBT, the client is present, and one or more protocols have been modified then 97155 may be billed concurrently with the RBT codes." Without a protocol change the default rule applies: "When the Board Certified/Licensed BCBA is physically present with the Member (with or without the Registered Behavior Technician (RBT) being present) then the procedure code for the claim would be the applicable service the BCBA provides." The shared program description still bars two different overlaps \u2014 more than one licensed analyst serving a member \u201cduring a specific time interval\u201d and ABA delivered simultaneously with OT, speech, PT or psychotherapy \u2014 and the BCBST initiation form notes that \u201cthe hours per week authorized aren\u2019t inclusive of other services being provided.\u201d',
        status: 'verified',
        cites: [{ title: 'BlueCare Tennessee Provider Administration Manual (H3259, 07/01/2026) — covers BlueCare, TennCareSelect and CoverKids', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }],
      },
      dailyLimits: {
        value:
          'No per-day ceiling and no annual limit. BlueCare authorizes in 26-week (six-month) certification periods and its initiation/continuation form asks for hours per week by code, a clinical justification for any increase, and \u2014 \u201cif concurrent\u201d \u2014 the hours approved versus hours used in the last authorization period. That last field is the operative constraint: like every TennCare MCO, BlueCare expects an explanation when utilization of authorized direct-care units falls below 90%.',
        status: 'verified',
        cites: [{ title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
      noteSignature: {
        value:
          'BlueCare\u2019s July 2026 manual sets the rule at the record level for every behavioral health provider. Treatment records need "Progress notes for each service contact documenting the date and time of service, duration/end time of service, the type of service provided, a summary of treatment interventions used, the treatment plan goals and objectives addressed in the session, and the name and credentials of rendering service Provider," and the manual\u2019s record-keeping standards require that "Each recorded chart entry must be dated and identified by the author. Stamped signatures aren\u2019t acceptable." Treatment plans are due within 30 days of the start of service and updated every six months, and each plan and review must be "signed by a Member, family member, or legally appointed representative." The ABA request forms add a request-level attestation that all pertinent clinical information was supplied. No signing deadline for session notes is published.',
        status: 'verified',
        cites: [{ title: 'BlueCare Tennessee Provider Administration Manual (H3259, 07/01/2026) — covers BlueCare, TennCareSelect and CoverKids', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' }, { title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }, { title: 'BCBST \u2014 ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }],
      },
      placeOfService: {
        value:
          'Follows the TennCare rule: Clinic, Home, Community, School, Telehealth and Other are all on the universal form\u2019s place-of-service grid, and medically necessary school-based behavioral health services \u201care not required to be included in a child\u2019s Individualized educational plan (IEP) in order to be reimbursable.\u201d BlueCare\u2019s assessment form asks providers to state where \u201cABA therapy will be provided between the qualified practitioner and the individual member and/or caregiver at the following proposed location(s),\u201d so the setting is authorized rather than assumed. IEP services and functioning as an educational aide remain non-covered.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'BCBST \u2014 ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }],
      },
      billAsProvider: {
        value:
          'Follows the TennCare rule \u2014 the claim rides on the group or servicing provider with the practitioner level carried as a modifier (HO for analyst-delivered codes, HM for technician-delivered, 97153 split between them). BlueCare\u2019s own forms collect \u201cProvider ID, NPI Number, or Tax ID\u201d plus the provider name and credentials; no separate rendering-versus-supervising NPI convention is published, and rates are contract-negotiated because TennCare publishes no ABA fee schedule.',
        status: 'verified',
        cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }],
      },
    },
    faq: [
      { q: 'Does BlueCare Tennessee cover ABA therapy?', a: 'Yes — BlueCare administers the TennCare ABA benefit under the shared tri-MCO program description: EPSDT members under 21, prior authorization on assessment and treatment, TN LBA licensure for direct ABA.' },
      { q: 'How do I submit an ABA prior authorization to BlueCare?', a: 'Through Availity (or provider.bcbst.com), or by fax to (800) 292-5311 for BlueCare/TennCareSelect — using the universal tri-MCO ABA request form, plus BlueCare\'s initiation/continuation form for treatment. Standard decisions come within 7 calendar days of receipt (72 hours if expedited).' },
      { q: 'Is BlueCare\'s ABA policy different from TennCare\'s?', a: 'Clinically, no — the rules are the shared TennCare baseline. The differences are mechanical: BlueCare\'s portal, fax lines, supplemental form, and UM timelines.' },
      { q: 'Does BlueCare Tennessee (BCBST) allow ABA by telehealth?', a: 'Yes. BlueCare\'s Telehealth Approved Code List (updated March 10, 2026) lists every ABA code — 97151-97158, 0362T and 0373T — as payable with POS 02 or POS 10. Telehealth hours must still be requested per code on the universal ABA request form. For a commercial BCBST plan, see the BlueCross BlueShield of Tennessee guide.' },
      { q: 'What is BlueCare Tennessee\'s fee schedule for ABA?', a: 'There is no public ABA fee schedule. TennCare publishes none, and BlueCare pays according to the fee schedule in your BlueCare provider agreement; its telehealth guide says telehealth payment for many services is consistent with that same fee schedule. Your contract, or BlueCare network management, is the source for rates.' },
      { q: 'Does BlueCare require RBT certification for ABA technicians?', a: 'Yes, in practice. The shared TennCare program description sets credential expectations for "RBT paraprofessionals" who must keep the RBT credential under BACB rules, and BlueCare\'s manual says "the RBT service codes can be utilized by Registered Behavior Technicians, Board Certified Assistant Behavior Analysts (BCaBA) or by a Provider who has completed their training in Applied Behavior Analysis and is waiting to take the exam to become a Board Certified Behavior Analyst (BCBA)." TennCare does not pay immediate family members to deliver ABA.' },
      { q: 'Is BlueCare accepting new ABA providers?', a: 'There is no published open or closed status. BlueCare Tennessee\'s manual says it may "maintain a separate network and not include any willing Provider," and that it can deny participation for network need. Apply through BCBST credentialing and attest to the TennCare ABA program description, then ask provider network operations about need in your area.' },
    ],
  },

  'unitedhealthcare-community-plan-tennessee': {
    slug: 'unitedhealthcare-community-plan-tennessee',
    family: 'unitedhealthcare',
    cardDesc: 'Shared TennCare baseline + UHC\'s own Level of Care rules: physician order, 20-hr gate.',
    assessmentPA: {
      value: 'Required — universal form + comprehensive clinical evaluation AND a physician order recommending ABA',
      status: 'verified',
      cites: [{ title: 'UHC — Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' }, { title: 'TN ABA Program Description (shared tri-MCO, UHC copy 6/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-ABA-Program-Description.pdf' }],
    },
    treatmentPA: {
      value: 'Required — initial + concurrent review; no measurable progress over 3 months can end medical necessity',
      status: 'verified',
      cites: [{ title: 'UHC — Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' }],
    },
    dxRequired: {
      value: 'ASD or another qualifying DSM-5-TR diagnosis \u2014 not strictly autism-only',
      status: 'verified',
      cites: [{ title: 'UHC — Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' }],
    },
    payer: 'UnitedHealthcare Community Plan of Tennessee',
    state: 'TN', kind: 'medicaid-mco', parent: 'TennCare',
    pill: 'Payer Guide · UHC Community Plan (TN)',
    h1: 'UnitedHealthcare Community Plan of Tennessee ABA coverage (TennCare MCO).',
    metaTitle: 'UnitedHealthcare Community Plan TN (TennCare) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan administers TennCare ABA — the shared tri-MCO program plus UHC\'s own Level of Care Guidelines: physician-order requirement, extra scrutiny above 20 hrs/week, telehealth limits, and 3-month progress rules.',
    intro: [
      'UnitedHealthcare Community Plan of Tennessee administers the TennCare ABA benefit under the shared tri-MCO program description — but unlike the other two MCOs, UHC layers its own Level of Care Guidelines (revised December 2024) on top. Those add real operational teeth: an explicit physician-order requirement, extra scrutiny for comprehensive programs above 20 hours/week, a device-attention test for telehealth ABA, and a three-month no-progress discharge rule. If a family carries UHC, plan the request against both documents.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'TennCare MCO (UnitedHealthcare / Optum platform)' },
      { label: 'Clinical rules', value: 'Shared tri-MCO program + UHC Level of Care Guidelines (12/2024)' },
      { label: 'Prior auth', value: 'Required — universal form via Provider Express, fax, or secure email' },
      { label: 'Physician order', value: 'Explicitly required for ABA initiation (strictest of the 3 MCOs)' },
      { label: 'Intensity gate', value: '>20 hrs/week comprehensive ABA gets extra scrutiny (severity 2–3, early in treatment)' },
      { label: 'Progress rule', value: 'No measurable change over 3 months of optimal treatment ends medical necessity' },
    ],
    sections: [
      {
        h2: 'The UHC overlay: what it adds to the TennCare baseline',
        body: [
          'UHC\'s Level of Care Guidelines require a comprehensive clinical evaluation by a Tennessee-licensed clinician and a physician order or script recommending ABA before initiation — the most explicit ordering requirement among the TennCare MCOs. Comprehensive programs above 20 hours/week "should generally only be considered" when the member has multiple needs, is within roughly the first two years of ABA, and presents at DSM-5 severity level 2–3; intensity must also leave room for rest, family time, and other activities. And maintenance-phase ABA must step down: lower intensity, caregiver-training-focused, not full-time.',
        ],
        cites: [
          { title: 'UHC — Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' },
        ],
      },
      {
        h2: 'Authorization mechanics',
        body: [
          'Requests use the universal tri-MCO form, submitted via Provider Express, fax (877) 217-6068, or secure email (tn_medicaid_aba@uhc.com); the ABA line is (800) 690-1606. Authorization lengths are set per individual need (the universal form models 26-week periods), with reassessment at the end of each authorized period. Two rules to design intake around: caregiver training is required with a documented caregiver plan — refusal or non-participation is a discharge criterion — and direct telehealth ABA is only medically necessary when the member can attend to a device for an extended period.',
        ],
        cites: [
          { title: 'TN ABA Program Description (shared tri-MCO, UHC copy 6/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-ABA-Program-Description.pdf' },
          { title: 'Tri-MCO ABA Overview of Updates (Sept 2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABAOverviewofUpdates.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Physician order for ABA', desc: 'UHC explicitly requires the order/script at initiation — chase it at intake, not at submission.' },
      { title: 'Comprehensive evaluation', desc: 'By a TN-licensed clinician; attach with the diagnostic report.' },
      { title: 'Severity level + time in ABA', desc: 'Requests above 20 hrs/week need severity 2–3 and early-in-treatment framing.' },
      { title: 'Caregiver participation commitment', desc: 'A documented caregiver plan is required; non-participation is a discharge criterion.' },
      { title: 'Telehealth suitability', desc: 'Direct telehealth ABA needs documented device-attention skills.' },
    ],
    sources: [
      { title: 'TN ABA Program Description (shared tri-MCO, UHC copy 6/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-ABA-Program-Description.pdf' },
      { title: 'UHC — Level of Care Guidelines: ABA (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' },
      { title: 'UHC TN Community Plan — behavioral health provider page', url: 'https://www.uhcprovider.com/en/health-plans-by-state/tennessee-health-plans/tn-comm-plan-home/tn-cp-behavioral-health.html' },
      { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' },
      { title: 'Tri-MCO ABA Overview of Updates (Sept 2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABAOverviewofUpdates.pdf' },
      { title: 'TennCare Kids (EPSDT) \u2014 birth through age 20', url: 'https://www.tn.gov/tenncare/tenncare-kids.html' },
      { title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/13/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the TennCare rule: EPSDT covers \u201cchildren from birth through age 20 who have TennCare.\u201d UHC\u2019s own Level of Care Guidelines for ABA set no age limit \u2014 they instead add adolescent and young-adult content, directing that \u201cwhen adolescents, young adults, or adults are receiving ABA services, it\u2019s important to include a focus on transition to adulthood.\u201d',
        status: 'verified',
        cites: [{ title: 'TennCare Kids (EPSDT) \u2014 birth through age 20', url: 'https://www.tn.gov/tenncare/tenncare-kids.html' }, { title: 'UHC \u2014 Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' }, { title: 'TN ABA Program Description (shared tri-MCO, UHC copy 6/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-ABA-Program-Description.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the TennCare rule \u2014 no recency limit on the diagnosis itself, with updated functional evaluation by standardized tools expected at least every two years. UHC\u2019s overlay puts its clock on progress rather than the diagnosis: \u201cthe patient must be reassessed at the end of each authorized period,\u201d and \u201cif the patient shows no meaningful measurable changes, on a norm based assessment, for period of 3 months of optimal treatment, then ABA may no longer be considered medically necessary.\u201d',
        status: 'verified',
        cites: [{ title: 'UHC \u2014 Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' }, { title: 'TN ABA Program Description (shared tri-MCO, UHC copy 6/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-ABA-Program-Description.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Stricter than the shared baseline. UHC requires \u201ca comprehensive clinical evaluation by a TN licensed clinician supporting medical necessity for ABA\u201d and that \u201cthe member has been assigned a DSM-5 TR diagnosis of Autism or another identified diagnosis for which ABA is the least restrictive and most clinically appropriate treatment.\u201d The guidelines name no single license for the diagnostician, but the evaluation must be a TN-licensed clinician\u2019s and must be separate from the physician order that follows it.',
        status: 'verified',
        cites: [{ title: 'UHC \u2014 Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' }],
      },
      diagnosticTools: {
        value:
          'No named instrument, but a named battery. UHC requires that \u201cassessments should include norm referenced assessments, skills assessments, a risk assessment, and a behavioral assessment,\u201d and gates prior authorization on \u201ca reasonable expectation on the part of a treating healthcare professional that the individual\u2019s behavior will improve significantly, as measured by norm referenced assessments.\u201d Progress and discharge decisions both turn on norm-referenced scores, so the instrument you choose at intake is the one you will be re-scored against at concurrent review.',
        status: 'verified',
        cites: [{ title: 'UHC \u2014 Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' }],
      },
      referral: {
        value:
          'The strictest of the three TennCare MCOs: \u201cthe member will need a physician order/script recommending ABA services, based on their review of the diagnostic assessment.\u201d That order is an initiation criterion in its own right, on top of the comprehensive clinical evaluation, and the universal form\u2019s \u201cDoctor\u2019s Order Attached\u201d checkbox is where it lands. Chase it at intake, not at submission. UHC also notes that while \u201cthe initial evaluation may be ordered by the primary care provider or specialist, the number of hours proposed by the ABA provider must be substantiated as medically necessary.\u201d',
        status: 'verified',
        cites: [{ title: 'UHC \u2014 Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
      telehealth: {
        value:
          'Per-code on the universal form, with a UHC-specific clinical gate on top: \u201cdirect Telehealth services may only be considered medically necessary when the provider has assessed that a member has core skills to attend to a device for an extended period of time.\u201d The guidelines add that \u201ctelehealth service delivery for ABA should include an ongoing review of ethical, efficacy, and scope of practice considerations.\u201d So document device-attention skills before requesting telehealth hours \u2014 it is a medical-necessity element, not a logistics preference. The checkbox sits on the assessment rows (97151, 97152) as well as on 97155, so assessment and BCBA-supervision hours can be requested as telehealth code by code. The form and program description set no cap on remote supervision; the BACB supervision requirements they incorporate still apply.',
        status: 'verified',
        cites: [{ title: 'UHC \u2014 Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
      authTurnaround: {
        value:
          'UnitedHealthcare\'s 2026 TennCare manual sets the standard pre-service decision "Within 5 working days of receipt of medical record information required but no longer than 7 calendar days of receipt." Urgent/expedited pre-service decisions come "Within 3 days of request receipt." The TennCare contract caps expedited decisions at 72 hours from receipt and allows a 14-day extension on either track. Retrospective review takes "Within 30 calendar days of receiving all pertinent clinical information." ABA is requested through Optum Behavioral Health on the shared tri-MCO form, with 26-week authorization periods. Neither the manual nor the form publishes a reauthorization lead time.',
        status: 'verified',
        cites: [
          { title: 'UnitedHealthcare Community Plan of Tennessee — TennCare Care Provider Manual (2026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/TN-TennCare-Care-Provider-Administrative-Manual.pdf' },
          { title: 'TennCare Statewide MCO Contract (Amendment 25, July 1, 2026) — A.2.19.3 and A.2.21.4', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/MCOStatewideContract.pdf' },
          { title: '42 CFR 438.210(d) — MCO authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'UnitedHealthcare Community Plan "is, by law, the payer of last resort." You "must bill and obtain an EOB from any other insurance or health care coverage resource before billing," then "attach a copy of the EOB to the submitted claim." The EOB "must be complete to understand the paid amount or denial reason." At authorization, providers should "Determine if the covered person has other insurance that should be billed first." Unlike Wellpoint and BlueCare, the manual publishes no pay-and-chase list. It is also silent on whether the Optum ABA authorization is still needed when UnitedHealthcare is secondary. The TennCare contract lets the MCO deny a claim the primary plan denied for "failure to obtain prior authorization." Get the commercial PA. TRICARE by statute pays only after other coverage "except in the case of a plan administered under title XIX" (Medicaid), so TRICARE goes before TennCare. CHAMPVA is the reverse: "If you are eligible under Medicaid, CHAMPVA will pay first."',
        status: 'verified',
        cites: [
          { title: 'UnitedHealthcare Community Plan of Tennessee — TennCare Care Provider Manual (2026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/TN-TennCare-Care-Provider-Administrative-Manual.pdf' },
          { title: 'TennCare Statewide MCO Contract (Amendment 25, July 1, 2026) — A.2.19.3 and A.2.21.4', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/MCOStatewideContract.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        verifyVia: 'Optum Behavioral Health for UnitedHealthcare Community Plan of Tennessee (1-800-690-1606) — ask whether an ABA authorization is required when a commercial plan is primary, and whether ABA for members under 21 is paid first and recovered later.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          '\u201cABA services must be located in TN and must be provided by or supervised by a TN board-certified Behavior Analyst (BCBA) or a health professional permissible under TN state law. Unlicensed persons may deliver applied behavior analysis (ABA) services under the extended authority and direction of an LBA or an LABA who is supervised by an LBA. Such persons shall not represent themselves as professional behavior analysts.\u201d UHC also splits the work by tier: assessment, plan development, revision, caregiver observation, effectiveness monitoring and on-site crisis assistance \u201cmay be performed by a Behavioral Analyst,\u201d while only the last four may be performed by a Behavioral Specialist. No numeric ratio is published, so the shared program description\u2019s incorporation of the BACB supervision requirements governs.',
        status: 'verified',
        cites: [{ title: 'UHC \u2014 Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' }, { title: 'TN ABA Program Description (shared tri-MCO, UHC copy 6/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-ABA-Program-Description.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not answered for 97153 with 97155. The Level of Care Guidelines address intensity and medical necessity rather than claim edits, and the shared program description bars only two overlaps \u2014 more than one licensed analyst serving a member during a specific time interval, and ABA delivered simultaneously with OT, speech, PT or psychotherapy.',
        status: 'unverified',
        cites: [{ title: 'UHC \u2014 Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' }, { title: 'TN ABA Program Description (shared tri-MCO, UHC copy 6/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-ABA-Program-Description.pdf' }],
        verifyVia:
          'UnitedHealthcare\u2019s TN ABA line (800) 690-1606 or tn_medicaid_aba@uhc.com, and the UHC Community Plan of Tennessee reimbursement policies on uhcprovider.com.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling, but the only real intensity gate among the TennCare MCOs: \u201cHigh frequency/Comprehensive ABA (greater than 20 hours per week) should generally only be considered when the member has multiple needs related to behaviors and social communication challenges, is early in receiving ABA services (i.e. within the first 2 years of ABA), and has a symptom severity of at least 2 or 3 per DSM-V criteria.\u201d Proposed intensity must also leave room for \u201cappropriate rest breaks, nutrition breaks, family time and time for play or non-learning activities,\u201d and maintenance-phase ABA \u201cshould be at a lower intensity of services\u2026 these programs should not be comprehensive or full time in nature.\u201d Authorization length is set by the MCO to the individual\u2019s needs.',
        status: 'verified',
        cites: [{ title: 'UHC \u2014 Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' }],
      },
      noteSignature: {
        value:
          'UnitedHealthcare\u2019s 2026 Tennessee manual sets it for every behavioral health record: "All entries in the treatment record include the responsible clinician\u2019s name, professional degree, license, and relevant ID number," "The record is in blue or black ink," and "Any error must be lined through so that it can still be read, then dated, and initialed by the person." Its medical-record review also scores "Entries dated and the author identified" and "Legible entries." The Level of Care Guidelines and the shared program description add no session-note rule of their own (the program description requires a treatment plan within 30 days of admission, reviewed every 6 months). No signing deadline is published.',
        status: 'verified',
        cites: [{ title: 'UnitedHealthcare Community Plan of Tennessee — TennCare Care Provider Manual (2026), Chapter 11: Medical records', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/TN-TennCare-Care-Provider-Administrative-Manual.pdf' }, { title: 'UHC \u2014 Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' }, { title: 'TN ABA Program Description (shared tri-MCO, UHC copy 6/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-ABA-Program-Description.pdf' }],
      },
      placeOfService: {
        value:
          'Follows the TennCare rule \u2014 Clinic, Home, Community, School, Telehealth and Other are all requestable on the universal form, and medically necessary school-based behavioral health services need not sit in an IEP to be reimbursable. UHC adds two conditions of its own: services \u201cmust be located in TN,\u201d and \u201cthe rationale for services and schedule of treatment with location should be a part of the treatment plan\u201d \u2014 so setting is a documented clinical choice, not a scheduling convenience. Treatment protocols are expected to be \u201cimplemented repeatedly, frequently, and consistently across environments until the client can function independently in multiple situations.\u201d',
        status: 'verified',
        cites: [{ title: 'UHC \u2014 Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' }, { title: 'TN ABA Program Description (shared tri-MCO, UHC copy 6/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-ABA-Program-Description.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
      billAsProvider: {
        value:
          'Follows the TennCare rule: the claim rides on the group or servicing provider identified on the universal form, with the practitioner level carried as a modifier \u2014 HO on analyst-delivered codes, HM on technician-delivered, and 97153 split between the two. UHC\u2019s guidelines describe who may perform which component rather than whose NPI the claim carries, and no separate UHC rendering-versus-supervising convention is published for TennCare ABA.',
        status: 'verified',
        cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'UHC \u2014 Level of Care Guidelines: Applied Behavior Analysis (rev. 12/13/2024)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/tn/behavioral-health/TN-BH-Level-of-Care-Guidelines-Applied-Behavioral-Analysis.pdf' }],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of Tennessee cover ABA?', a: 'Yes — it administers the TennCare ABA benefit (EPSDT, under 21) under the shared tri-MCO program description, plus UHC\'s own Level of Care Guidelines with additional requirements like an explicit physician order.' },
      { q: 'How is UHC different from the other TennCare MCOs for ABA?', a: 'It\'s the only one with a distinct clinical overlay: physician-order requirement, extra scrutiny above 20 hours/week of comprehensive ABA, a device-attention test for telehealth, and a 3-month no-measurable-progress discharge rule.' },
      { q: 'How do I submit a UHC TennCare ABA authorization?', a: 'The universal tri-MCO ABA request form via Provider Express, fax (877) 217-6068, or secure email tn_medicaid_aba@uhc.com; ABA line (800) 690-1606.' },
      { q: 'Can the ABA assessment or BCBA supervision be done by telehealth in TennCare?', a: 'It can be requested. The universal TennCare ABA request form has an "Indicate if Hours are telehealth" checkbox on every code row, including the 97151/97152 assessment and 97155 supervision, so telehealth hours are authorized code by code. The shared program description asks providers to judge clinical appropriateness and use HIPAA-compliant technology.' },
      { q: 'Does TennCare require RBT certification for ABA technicians?', a: 'The shared TennCare program description sets credential expectations for "RBT paraprofessionals": RBTs and their supervising BCBAs "must comply with ALL of the current Behavior Analyst Certification Board (BACB) requirements for credentialing, ethics, competency, supervision, and maintenance of the RBT credential." Direct ABA must be delivered or supervised by a TN Licensed Behavior Analyst. Technicians do not bill under their own NPI: the universal form collects the group (or solo servicing) NPI, and technician codes carry the HM modifier.' },
    ],
  },

  'wellpoint-tennessee': {
    slug: 'wellpoint-tennessee',
    family: 'anthem',
    cardDesc: 'Shared TennCare program via Availity ICR; MD-order emphasis, <90% utilization rule.',
    assessmentPA: {
      value: 'Required — universal form with MD order / treating-provider recommendation, via Availity or fax (866) 920-6006',
      status: 'verified',
      cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
    },
    treatmentPA: {
      value: 'Required — 26-week periods; continuation reports unit utilization (<90% on 97153 needs explanation)',
      status: 'verified',
      cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
    },
    dxRequired: {
      value: 'ASD or another qualifying DSM-5-TR diagnosis \u2014 not strictly autism-only',
      status: 'verified',
      cites: [{ title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
    },
    payer: 'Wellpoint Tennessee (formerly Amerigroup)',
    state: 'TN', kind: 'medicaid-mco', parent: 'TennCare',
    pill: 'Payer Guide · Wellpoint (TN)',
    h1: 'Wellpoint Tennessee ABA coverage (TennCare MCO).',
    metaTitle: 'Wellpoint Tennessee (TennCare MCO) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Wellpoint Tennessee (formerly Amerigroup) administers TennCare ABA — the shared tri-MCO program description, universal request form workflow in Availity, the MD-order requirement, and the sub-90% utilization explanation rule.',
    intro: [
      'Wellpoint Tennessee — the Elevance plan formerly branded Amerigroup — administers the TennCare ABA benefit under the shared tri-MCO program description it helped build (Wellpoint hosts the unified program documents). Clinically it\'s the TennCare baseline; the Wellpoint-specific layer is workflow: the Availity Interactive Care Reviewer submission path, its fax lines, an MD-order emphasis on assessment requests, and named regional ABA contacts.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'TennCare MCO (Wellpoint / Elevance, formerly Amerigroup)' },
      { label: 'Clinical rules', value: 'Shared tri-MCO ABA program description (TennCare baseline)' },
      { label: 'Prior auth', value: 'Required — universal form attached as "clinical" in Availity ICR' },
      { label: 'Assessment PA', value: 'MD order / licensed treating provider recommendation required' },
      { label: 'Utilization rule', value: 'Continuation must explain <90% use of authorized 97153 units' },
      { label: 'Rates', value: 'Negotiated per contract — no published ABA fee schedule' },
    ],
    sections: [
      {
        h2: 'How Wellpoint administers the benefit',
        body: [
          'Submissions go through Availity — Wellpoint\'s stated preferred workflow is to complete the universal tri-MCO ABA request form and attach it as the clinical documentation in the Interactive Care Reviewer; fax fallback is (866) 920-6006 (the form also lists (888) 881-6309). The assessment request needs an MD order or a licensed treating provider\'s recommendation. Treatment authorizations run in the standard 26-week periods, and continuation requests must report the percentage of authorized units used — under 90% on direct-treatment code 97153 requires a written explanation — plus the 97156 parent-training volume delivered.',
        ],
        cites: [
          { title: 'Universal Request for ABA form (TN-WP-CD-000947-25, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' },
          { title: 'ABA Provider Requirements & Program Description (Wellpoint copy, rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' },
        ],
      },
      {
        h2: 'Contacts worth having on file',
        body: [
          'Wellpoint publishes named regional ABA contacts (West, Middle, and East Tennessee plus a statewide UM manager and behavioral-health liaison) with direct phones and emails in its tri-MCO update materials; provider services runs at (833) 731-2154. For an intake team, a saved contact sheet per region turns authorization questions from portal tickets into phone calls.',
        ],
        cites: [
          { title: 'Tri-MCO ABA Overview of Updates (Sept 2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABAOverviewofUpdates.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'MD order / provider recommendation', desc: 'Required on the assessment request — collect it with the diagnostic report.' },
      { title: 'Diagnosis + severity levels', desc: 'DSM-5-TR diagnosis with the severity/unit guide levels the universal form requests.' },
      { title: 'Realistic availability', desc: 'The <90% utilization explanation rule makes honest scheduling a reauthorization safeguard.' },
      { title: 'Parent-training capacity', desc: '97156 volume is reported at continuation — set caregiver expectations at intake.' },
    ],
    sources: [
      { title: 'ABA Provider Requirements & Program Description (Wellpoint copy, rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' },
      { title: 'Universal Request for ABA form (Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' },
      { title: 'Tri-MCO ABA Overview of Updates (Sept 2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABAOverviewofUpdates.pdf' },
      { title: 'Wellpoint TN — ABA provider page', url: 'https://www.provider.wellpoint.com/tennessee-provider/patient-care/behavioral-health/applied-behavior-analysis' },
      { title: 'TennCare Kids (EPSDT) \u2014 birth through age 20', url: 'https://www.tn.gov/tenncare/tenncare-kids.html' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the TennCare rule: EPSDT covers \u201cchildren from birth through age 20 who have TennCare,\u201d and the shared tri-MCO program description Wellpoint hosts sets no age floor or ceiling of its own. Wellpoint publishes no deviating age rule.',
        status: 'verified',
        cites: [{ title: 'TennCare Kids (EPSDT) \u2014 birth through age 20', url: 'https://www.tn.gov/tenncare/tenncare-kids.html' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the TennCare rule: no recency limit on the ASD diagnosis, with updated evaluation of functioning via standardized tools expected \u201cat least every two years.\u201d The universal form Wellpoint hosts asks for the date the diagnosis was initially rendered and whether a standard assessment was used in it. Authorizations then run in 26-week periods.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Follows the TennCare rule \u2014 the diagnosis must be issued by \u201ca qualified health professional, practicing within their scope, with training in assessment of individuals with ASD and/or other neurodevelopmental concerns,\u201d and a TN-licensed clinician must document medical necessity. Wellpoint names no additional credential; its emphasis falls on the ordering provider instead (see referral).',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
      diagnosticTools: {
        value:
          'Follows the TennCare rule \u2014 no named instrument. The diagnosis must be validated by a documented comprehensive assessment against DSM-5-TR criteria, and the ABA assessment must include direct observation, file review, informant interviews and standardized assessments across cognition, communication, social, adaptive and behavioral domains. At continuation the universal form asks providers to \u201clist Standardized Assessments used to validate progress and include scores,\u201d with page references.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
      referral: {
        value:
          'Required, with Wellpoint\u2019s own emphasis: the assessment request needs an MD order or a licensed treating provider\u2019s recommendation, landing on the universal form\u2019s \u201cDoctor\u2019s Order Attached\u201d checkbox alongside the diagnostic report. Wellpoint\u2019s stated preferred workflow is to complete the universal tri-MCO form and attach it as the clinical documentation in Availity\u2019s Interactive Care Reviewer; fax fallback is (866) 920-6006, with (888) 881-6309 also listed on the form. No validity window is published for the order.',
        status: 'verified',
        cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
      },
      telehealth: {
        value:
          'Follows the TennCare rule: telehealth is requested and authorized per code via the \u201cIndicate if Hours are telehealth\u201d checkbox that appears on every ABA code row of the universal form Wellpoint hosts, with Telehealth also listed among the places of service. No Wellpoint-Tennessee-specific ABA telehealth policy was located, so the shared program description\u2019s cautions \u2014 clinical appropriateness protocols by model, HIPAA-compliant technology, demonstrated provider competence \u2014 are the operative standard. The checkbox sits on the assessment rows (97151, 97152) as well as on 97155, so assessment and BCBA-supervision hours can be requested as telehealth code by code. The form and program description set no cap on remote supervision; the BACB supervision requirements they incorporate still apply.',
        status: 'verified',
        cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
      },
      authTurnaround: {
        value:
          'Wellpoint\'s TennCare manual: "The decision regarding an authorization request for service must be made within 14 calendar days (seven calendar days as of 1/1/26) for standard request or 72 hours for expedited." The TennCare contract counts the 7 days from receipt of the request. It allows up to 14 more calendar days if the family or provider asks, or if the MCO justifies needing more information. ABA is requested on the shared tri-MCO form in 26-week authorization periods. Wellpoint publishes no reauthorization lead time.',
        status: 'verified',
        cites: [
          { title: 'Wellpoint Tennessee Provider Manual (TNWP-CD-PM-086546-25-B, Dec 2025)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_ProviderManual.pdf' },
          { title: 'TennCare Statewide MCO Contract (Amendment 25, July 1, 2026) — A.2.19.3 and A.2.21.4', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/MCOStatewideContract.pdf' },
          { title: '42 CFR 438.210(d) — MCO authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Wellpoint and its providers agree "the Medicaid program will be the payer of last resort." Providers "should bill the third party prior to billing Wellpoint." Wellpoint\'s secondary payment is the lesser of the primary\'s allowed amount and its own. A secondary claim "without the primary carrier\'s EOP will be denied stating the member has other insurance." Two exceptions matter for ABA. First, Wellpoint does not enter its own authorization when other insurance is primary: "If Member has Other Health Insurance (OHI) ... no authorization should be entered for a review as the member\'s OHI insurance is primary and responsible for payment." Second, Wellpoint pays and pursues "When the services are rendered to a child under the age of 21 who does not have Medicare, including preventive, EPSDT and pediatric care." For a child, Wellpoint pays and then recovers from the other plan. TRICARE by statute pays only after other coverage "except in the case of a plan administered under title XIX" (Medicaid), so TRICARE goes before TennCare. CHAMPVA is the reverse: "If you are eligible under Medicaid, CHAMPVA will pay first."',
        status: 'verified',
        cites: [
          { title: 'Wellpoint Tennessee Provider Manual (TNWP-CD-PM-086546-25-B, Dec 2025)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_ProviderManual.pdf' },
          { title: 'TennCare Statewide MCO Contract (Amendment 25, July 1, 2026) — A.2.19.3 and A.2.21.4', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/MCOStatewideContract.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Follows the TennCare rule: direct ABA must be provided by or supervised by a TN Licensed Behavior Analyst (or a health professional permissible under TN law); unlicensed persons deliver \u201cunder the extended authority and direction of a TN LBA\u201d and may not represent themselves as behavior analysts; and RBTs with their supervising BCBAs must comply with all current BACB supervision requirements, which sets the floor at 5% of monthly service hours and two face-to-face contacts. Wellpoint publishes no ratio of its own. Non-client-specific administrative supervision and technician training remain non-covered.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not answered for 97153 with 97155 \u2014 the program description Wellpoint hosts bars only two overlaps (more than one licensed analyst serving the member during a specific time interval, and ABA delivered simultaneously with OT, speech, PT or psychotherapy), and the universal form lets both codes be requested in one authorization without an overlap rule.',
        status: 'unverified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
        verifyVia:
          'Wellpoint TN provider services (833) 731-2154 or the named regional ABA contacts published in the tri-MCO update materials; Wellpoint\u2019s own reimbursement policies on provider.wellpoint.com.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No per-day ceiling, no annual limit and no fixed weekly cap \u2014 units are requested per week and per 26-week authorization period in 15-minute increments and justified against the severity/unit guide. The back-end constraint is Wellpoint\u2019s signature rule: continuation must report units utilized divided by units approved times 100, and \u201cif under 90% utilized, please explain,\u201d measured on 97153 direct care. The form also asks for the volume of parent training (97156) delivered per week or per month.',
        status: 'verified',
        cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
      },
      noteSignature: {
        value:
          'Wellpoint\u2019s Tennessee provider manual (December 2025) adopts the NCQA record standards: "All entries in the medical record contain the author\u2019s identification. Author identification may be a handwritten signature, unique electronic identifier or initials," "All entries are dated," and "The record is legible to someone other than the writer." The universal request form Wellpoint hosts adds a request-level rule \u2014 the signature \u201cmay be the signature of the person completing the form; however, it should note that is on behalf of the current treating provider\u201d \u2014 with an attestation that all the information is in the member\u2019s medical record. No session-note signing deadline is published.',
        status: 'verified',
        cites: [{ title: 'Wellpoint Tennessee Provider Manual (December 2025), Medical Records', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_ProviderManual.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
      placeOfService: {
        value:
          'Follows the TennCare rule: Clinic, Home, Community, School, Telehealth and Other are all on the universal form\u2019s place-of-service grid, and medically necessary school-based behavioral health services \u201care not required to be included in a child\u2019s Individualized educational plan (IEP) in order to be reimbursable.\u201d Non-covered regardless of setting: IEP services and functioning as an educational aide, provider travel time, transport in lieu of a caregiver, live-in help, billing while the member sleeps, and accompanying the member to outside activities not in the treatment plan.',
        status: 'verified',
        cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
      },
      billAsProvider: {
        value:
          'Follows the TennCare rule \u2014 the claim rides on the Group NPI (or the Servicing Provider NPI for a solo practitioner) captured on the universal form, with the supervisor\u2019s name and credentials recorded alongside and a TN Medicaid ID required if out of network. Practitioner level is expressed as a modifier: HO for analyst-delivered codes, HM for technician-delivered, 97153 split between them. Rates sit in the Wellpoint participating-provider agreement, since TennCare publishes no ABA fee schedule.',
        status: 'verified',
        cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }],
      },
    },
    faq: [
      { q: 'Does Wellpoint Tennessee cover ABA therapy?', a: 'Yes — Wellpoint (formerly Amerigroup) administers the TennCare ABA benefit under the shared tri-MCO program description: EPSDT members under 21, PA on assessment and treatment, TN LBA licensure.' },
      { q: 'How do I submit an ABA authorization to Wellpoint TN?', a: 'Complete the universal tri-MCO ABA request form and attach it as clinical documentation in Availity\'s Interactive Care Reviewer; fax fallback (866) 920-6006. The assessment request needs an MD order or treating-provider recommendation.' },
      { q: 'Is Wellpoint\'s ABA policy different from TennCare\'s?', a: 'Clinically, no — it\'s the shared TennCare baseline. The plan-specific layer is workflow: Availity ICR, fax lines, the MD-order emphasis, and the sub-90% unit-utilization explanation rule at continuation.' },
      { q: 'Can the ABA assessment or BCBA supervision be done by telehealth in TennCare?', a: 'It can be requested. The universal TennCare ABA request form has an "Indicate if Hours are telehealth" checkbox on every code row, including the 97151/97152 assessment and 97155 supervision, so telehealth hours are authorized code by code. The shared program description asks providers to judge clinical appropriateness and use HIPAA-compliant technology.' },
      { q: 'Does TennCare require RBT certification for ABA technicians?', a: 'The shared TennCare program description sets credential expectations for "RBT paraprofessionals": RBTs and their supervising BCBAs "must comply with ALL of the current Behavior Analyst Certification Board (BACB) requirements for credentialing, ethics, competency, supervision, and maintenance of the RBT credential." Direct ABA must be delivered or supervised by a TN Licensed Behavior Analyst. Technicians do not bill under their own NPI: the universal form collects the group (or solo servicing) NPI, and technician codes carry the HM modifier.' },
    ],
  },

  'tenncare-select': {
    slug: 'tenncare-select',
    family: 'bcbst',
    cardDesc: 'Statewide PIHP (VSHP) — separate contract from BlueCare; SSI kids, foster youth, IDD/CHOICES. 37,095 members.',
    assessmentPA: {
      value: 'Required — shared tri-MCO universal ABA request form; submit via Availity (in-state) or Cohere (out-of-state)',
      status: 'verified',
      cites: [{ title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'BCBST — ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }],
    },
    treatmentPA: {
      value: 'Required — 26-week (6-month) authorization periods; continuation reports severity level and hours used',
      status: 'verified',
      cites: [{ title: 'BlueCare — Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }, { title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
    },
    dxRequired: {
      value: 'ASD or another qualifying DSM-5-TR diagnosis — not strictly autism-only (shared TennCare baseline)',
      status: 'verified',
      cites: [{ title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'BCBST — ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }],
    },
    payer: 'TennCare Select',
    state: 'TN', kind: 'medicaid-mco', parent: 'TennCare',
    pill: 'Payer Guide · TennCare Select',
    h1: 'TennCare Select ABA coverage (TennCare\'s statewide PIHP).',
    metaTitle: 'TennCare Select ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How TennCare Select — the statewide PIHP run by Volunteer State Health Plan/BlueCare Tennessee for SSI children, foster youth, and IDD/CHOICES members — administers ABA: its own state contract, 37,095-member census, shared tri-MCO clinical rules, and Select-specific phone/fax lines.',
    intro: [
      'TennCare Select is not a fourth TennCare MCO alongside BlueCare, UnitedHealthcare Community Plan, and Wellpoint — it\'s a separate state contract. TennCare Select operates as a Prepaid Inpatient Health Plan (PIHP) under its own agreement between the Division of TennCare and Volunteer State Health Plan, Inc. (d/b/a BlueCare Tennessee) — a distinct Edison contract ID from BlueCare\'s own MCO contract, even though both are run by the same BlueCross BlueShield of Tennessee subsidiary. Members don\'t choose TennCare Select; TennCare assigns them to it because they fall into specific categories — children receiving SSI, children in DCS (foster care) custody, enrollees in intellectual-disability HCBS waivers, and a handful of statewide safety-net groups. For ABA, the clinical rules are the same shared tri-MCO program covered in our main TennCare guide — what\'s different here is the population TennCare Select serves and the phone/fax/contact structure built around it.',
    ],
    atGlance: [
      { label: 'Structure', value: 'Statewide PIHP — separate state contract from BlueCare\'s MCO contract, both run by VSHP/BCBST' },
      { label: 'Enrollment', value: '37,095 average monthly members (CY2024, TennCare\'s CMS-submitted MCPAR) — 2.5% of TennCare' },
      { label: 'Who\'s assigned here', value: 'SSI children, DCS custody/foster youth ("SelectKids"), IDD 1915(c)/CHOICES waiver members, out-of-state and safety-net enrollees' },
      { label: 'TennCare Select-only programs', value: 'SelectCommunity (IDD Target Population) and Katie Beckett Part A' },
      { label: 'ABA clinical rules', value: 'Shared tri-MCO program description — same as BlueCare, UHC, Wellpoint' },
      { label: 'Prior auth', value: 'Required — universal ABA request form via Availity or Cohere (out-of-state)' },
      { label: 'Provider Service Line', value: '1-800-276-1978 (distinct from BlueCare\'s 1-800-468-9736)' },
    ],
    sections: [
      {
        h2: 'A separate contract, the same clinical rules',
        body: [
          'The state\'s own contract text describes it plainly: "The Contractor shall operate under and market the services delivered via the prepaid Inpatient Health Plan (PIHP) as \'TennCare Select.\'" That PIHP agreement (Edison Contract ID 83332, term 1/1/2025–12/31/2027) is separate from BlueCare Tennessee\'s standard MCO contract, though both sit with Volunteer State Health Plan. BlueCare Tennessee\'s own Provider Administration Manual confirms the setup: "TennCareSelect is the State\'s self-insured TennCare Health Maintenance Organization... administered by BlueCare Tennessee... Enrollees cannot choose TennCareSelect as their TennCare MCO; TennCare members assigned to the TennCareSelect MCO must meet certain criteria and must be assigned to the TennCareSelect MCO by the Division of TennCare." For ABA specifically, the same PAM section covers both BlueCare and TennCareSelect members under one shared policy — the same CPT codes (97151–97155, 0362T, 0373T), the same RBT/BCaBA/BCBA billing structure, and the same tri-MCO baseline (26-week authorization periods, severity-level justification, no fixed annual hour cap) that governs the rest of TennCare. Practically: if a family is on TennCare Select, plan clinically exactly as you would for BlueCare — the differences that matter are contact numbers and, for a subset of members, LTSS-specific programs. This structure is independently confirmed in the generic TennCare MCO Statewide Contract template (now current through Amendment 25, effective July 1, 2026, per its own cover page), which defines TennCare Select as a statewide backup MCO whose risk the State of Tennessee backs — created for MCO failure/inadequate-capacity scenarios and as the assigned plan for children in state custody and SSI-eligible children (who may opt out).',
        ],
        cites: [
          { title: 'TennCare (Volunteer State Health Plan d.b.a. BlueCare) Contract Amendment #1 (Edison ID 83332)', url: 'https://www.capitol.tn.gov/Archives/Joint/committees/fiscal-review/contracts/2025/05-21-25/28.%20TennCare%20(Volunteer%20State%20Health%20Plan%20d.b.a%20BlueCare)%20Amend%201%20Redacted.pdf' },
          { title: 'TennCare MCO Statewide Contract (template, current through Amendment 25, eff. 7/1/2026)', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/MCOStatewideContract.pdf' },
          { title: 'BlueCare Tennessee Provider Administration Manual', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' },
        ],
      },
      {
        h2: 'Who ends up on TennCare Select',
        body: [
          'TennCare assigns — rather than lets members pick — enrollees who fall into defined categories: children under 21 who are SSI-eligible; children in DCS (foster care) custody and those transitioning out of custody (branded "SelectKids"); enrollees receiving services in an institution or an HCBS 1915(c) waiver for intellectual disabilities; enrollees living out-of-state; enrollees TennCare couldn\'t contact; and members of the "Integrated Health Services Delivery Model" target population for intellectual disabilities, branded "SelectCommunity" — largely 1915(c) waiver enrollees and former ICF/IID ("Arlington class") residents. TennCare Select is also the sole administrator of the Katie Beckett Program Part A (non-Medicaid-eligible-by-income children with significant disabilities up to 18). For an ABA intake team, the practical read is: TennCare Select skews toward higher-acuity, higher-support-need members — foster youth, IDD/CHOICES populations, and SSI kids — more than a random cross-section of TennCare.',
        ],
        cites: [
          { title: 'BlueCare Tennessee Provider Administration Manual', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' },
        ],
      },
      {
        h2: 'Census: 37,095 members',
        body: [
          'TennCare\'s own Managed Care Program Annual Report (MCPAR), submitted to CMS on 6/29/2025 for reporting period CY2024, lists average monthly enrollment across TennCare\'s four managed-care products: Wellpoint Tennessee 438,735; BlueCare Tennessee 552,517; UnitedHealthcare Community Plan 439,049; and TennCare Select 37,095 — about 2.5% of statewide TennCare enrollment. That\'s the most current figure independently confirmed against a primary source; TennCare also publishes monthly enrollment spreadsheets that may carry a more current number, but those weren\'t retrievable during this review — treat 37,095 as the latest verified figure, not necessarily the latest available one.',
        ],
        cites: [
          { title: 'TennCare Managed Care Program Annual Report (MCPAR), CY2024', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/2025ManagedCareProgramAnnualReport.pdf' },
        ],
      },
      {
        h2: 'Submission mechanics and TennCare Select-specific contacts',
        body: [
          'ABA requests use the shared tri-MCO universal request form, submitted through Availity for in-state providers or Cohere for out-of-state providers; PA questions route to (423) 535-5717, option 2. Two BCBST-hosted ABA forms — an "ABA Therapy Services Assessment Request Form" and an "Initiation and Continuation of ABA Therapy Form" (the latter confirming the 26-week/6-month certification period and a severity-level 1–3 field) — surfaced in this review, consistent with the tri-MCO baseline, but neither form\'s text explicitly labels itself TennCare Select-specific versus a general BCBST form; confirm the exact required form with BlueCare/TennCare Select provider relations before submitting. What is confirmed distinct is the contact structure: TennCare Select runs its own Member Service Line (1-800-263-5479, vs. BlueCare\'s 1-800-468-9698), Provider Service Line (1-800-276-1978, vs. 1-800-468-9736), and Prior Auth phone (1-800-711-4104, vs. BlueCare\'s 1-888-423-0131) — though the PA fax (1-800-292-5311) is shared with BlueCare. SelectKids (the foster-care population) carries its own further layer: Provider/Family Services at 1-800-451-9147 (fax 1-800-330-2842) and Member Services at 1-888-422-2963. SelectCommunity (the IDD population) has its own line, 1-800-292-8196 (fax 1-888-255-9175).',
        ],
        cites: [
          { title: 'BlueCare Tennessee Provider Administration Manual (contact tables)', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' },
          { title: 'BCBST — ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' },
          { title: 'BCBST — Initiation and Continuation of ABA Therapy Form', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' },
        ],
      },
      {
        h2: 'CHOICES, ECF CHOICES, and background-check screening',
        body: [
          'TennCare Select is the exclusive administrator of SelectCommunity and Katie Beckett Part A, and shares CHOICES/ECF CHOICES LTSS administration with BlueCare — the MLTSS Provider Manual states plainly that "all BlueCare/TennCare Select billing guidelines apply" for these populations. That matters for staffing: TennCare\'s Aligned Background Check Protocol (effective July 1, 2024) governs providers serving 1915(c) waiver, Katie Beckett, Employment and Community First CHOICES, and CHOICES members — criminal background checks plus registry screening (TN Abuse Registry, National/TN Sex Offender Registry, LEIE, SAM, TennCare Terminated Provider List) within 30 days before first contact, monthly SAM/LEIE/TTPL rechecks. The protocol document itself refers generically to "Managed Care Organizations" rather than naming TennCare Select, but because TennCare Select administers exactly these programs, any ABA agency serving a TennCare Select family through SelectCommunity, ECF CHOICES, or Katie Beckett falls under it — the same guidance our main TennCare guide gives: if you serve Katie Beckett or CHOICES children, run the full protocol for everyone rather than trying to split by plan.',
        ],
        cites: [
          { title: 'MLTSS Provider Manual (BlueCare/TennCare Select)', url: 'https://content.bcbst.com/api/public/content/prov-mltss-manual.pdf' },
          { title: 'TennCare Aligned Background Check Protocol (eff. July 1, 2024)', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/AlignedBackgroundCheckProtocol.pdf' },
        ],
      },
      {
        h2: 'Is the TennCare Select ABA network open to new providers?',
        body: [
          'BlueCare Tennessee, which runs both BlueCare and TennCareSelect, does not run an any-willing-provider network. Its Provider Administration Manual says its "ability to credential Providers as well as maintain a separate network and not include any willing Provider is not considered discrimination." Network need is a recognized reason to turn an applicant down: providers "denied participation in a BCBST/BCT network for reason other than network need may not reapply for participation for a least one year." So a denial for network need does not trigger that one-year wait.',
          'To apply, practitioners and organizations submit a credentialing application, assessed against NCQA, CMS and TennCare Contractor Risk Agreement standards. ABA groups also have to attest to the shared TennCare ABA program description to join the ABA network. BlueCare publishes no statement on whether it is adding ABA providers in a given region; ask BlueCare provider network operations.',
        ],
        cites: [
          { title: 'BlueCare Tennessee Provider Administration Manual (H3259, rev. 10/01/2026) — covers BlueCare, TennCareSelect and CoverKids', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' },
          { title: 'ABA Provider Requirements & Program Description — TennCare MCOs (rev. 06/13/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Confirm TennCare Select vs. BlueCare', desc: 'Both are run by the same BCBST/VSHP entity — check the card or portal for which contract the member is actually on; contact numbers differ.' },
      { title: 'Program sub-type if applicable', desc: 'SelectKids (foster care), SelectCommunity (IDD/1915c), or Katie Beckett Part A each carry their own dedicated contact lines.' },
      { title: 'Diagnostic report + doctor\'s order', desc: 'Same shared tri-MCO baseline as BlueCare — required for the assessment PA.' },
      { title: 'LBA licensure', desc: 'Confirm the supervising/rendering analyst holds a Tennessee LBA license, per the shared TennCare program description.' },
      { title: 'Background-check applicability', desc: 'CHOICES/ECF CHOICES/Katie Beckett members trigger TennCare\'s Aligned Background Check Protocol — confirm program sub-type at intake.' },
    ],
    sources: [
      { title: 'TennCare (Volunteer State Health Plan d.b.a. BlueCare) Contract Amendment #1 (Edison ID 83332)', url: 'https://www.capitol.tn.gov/Archives/Joint/committees/fiscal-review/contracts/2025/05-21-25/28.%20TennCare%20(Volunteer%20State%20Health%20Plan%20d.b.a%20BlueCare)%20Amend%201%20Redacted.pdf' },
      { title: 'BlueCare Tennessee Provider Administration Manual', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' },
      { title: 'TennCare Managed Care Program Annual Report (MCPAR), CY2024', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/2025ManagedCareProgramAnnualReport.pdf' },
      { title: 'MLTSS Provider Manual (BlueCare/TennCare Select)', url: 'https://content.bcbst.com/api/public/content/prov-mltss-manual.pdf' },
      { title: 'TennCare Aligned Background Check Protocol (eff. July 1, 2024)', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/AlignedBackgroundCheckProtocol.pdf' },
      { title: 'BCBST — ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' },
      { title: 'BCBST — Initiation and Continuation of ABA Therapy Form', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' },
      { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' },
      { title: 'TennCare MCO Statewide Contract (template, current through Amendment 25, eff. 7/1/2026)', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/MCOStatewideContract.pdf' },
      { title: 'TennCare Kids (EPSDT) \u2014 birth through age 20', url: 'https://www.tn.gov/tenncare/tenncare-kids.html' },
      { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the TennCare rule: EPSDT covers \u201cchildren from birth through age 20 who have TennCare,\u201d and the shared tri-MCO program description sets no age of its own. TennCare Select\u2019s population skews younger and higher-acuity \u2014 SSI children under 21, DCS custody youth, Katie Beckett Part A children up to 18 \u2014 but the ABA age boundary is the state\u2019s.',
        status: 'verified',
        cites: [{ title: 'TennCare Kids (EPSDT) \u2014 birth through age 20', url: 'https://www.tn.gov/tenncare/tenncare-kids.html' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'BlueCare Tennessee Provider Administration Manual', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the TennCare rule: no recency limit on the ASD diagnosis, with updated evaluation of functioning by standardized tools expected at least every two years, and 26-week (six-month) certification periods. The BCBST forms that serve TennCare Select members ask for \u201cInitial/First Date ASD Diagnosed\u201d and the DSM severity level (1\u20133) without capping the report\u2019s age; continuation requests \u201cmust be submitted at least once every six months.\u201d',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Follows the TennCare rule \u2014 the diagnosis must come from \u201ca qualified health professional, practicing within their scope, with training in assessment of individuals with ASD and/or other neurodevelopmental concerns,\u201d with a TN-licensed clinician documenting medical necessity. No TennCare Select-specific diagnostician rule exists; the BCBST forms ask only for diagnostic confirmation and severity level.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'BCBST \u2014 ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }],
      },
      diagnosticTools: {
        value:
          'Follows the TennCare rule: no named instrument, but the diagnosis must be validated by a documented comprehensive assessment against DSM-5-TR criteria, and the ABA assessment must include direct observation, file review, informant interviews and standardized assessments across cognition, communication, social, adaptive and behavioral domains. BCBST\u2019s forms capture severity level and measurable goals rather than a required test battery.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }],
      },
      referral: {
        value:
          'Follows the TennCare rule \u2014 the assessment request needs the diagnostic report plus a doctor\u2019s order; the BCBST forms ask for \u201cdiagnostic confirmation like diagnostic reports, doctor\u2019s orders, etc.\u201d TennCare Select-specific mechanics: Tennessee providers submit in Availity, out-of-state providers through Cohere, and PA questions route to (423) 535-5717, option 2, with TennCare Select\u2019s own prior-auth line at 1-800-711-4104 (fax 1-800-292-5311 is shared with BlueCare).',
        status: 'verified',
        cites: [{ title: 'BCBST \u2014 ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }, { title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
      },
      telehealth: {
        value:
          'TennCareSelect runs on BlueCare\u2019s rules here. Two layers, both published. Authorization: telehealth hours are requested per code on the universal tri-MCO form, which carries an \u201cIndicate if Hours are telehealth\u201d checkbox on every ABA code row and lists Telehealth among the places of service; the shared program description adds its cautions on clinical appropriateness, HIPAA-compliant technology and provider competence. Claims: since October 1, 2024 BlueCare pays telehealth only for codes on its Telehealth Approved Code List, and the current list (updated 3-10-26) marks every ABA code \u2014 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T \u2014 \u201cYes\u201d for both POS 02 and POS 10. The manual says telehealth modifiers such as GT and 95 are \u201cfor informational purposes\u201d but claims \u201cmust be billed with the correct place of services (POS) 10: Telehealth Provided in Patient\u2019s Home or POS 02: Telehealth Provider Other than in Patient\u2019s Home.\u201d Payment for many telehealth services \u201cwill be consistent with your BlueCare Tennessee fee schedule\u201d; the 15% reduction applies only to audio-only codes.',
        status: 'verified',
        cites: [{ title: 'BlueCare Tennessee — Telehealth Approved Code List (updated 3-10-26)', url: 'https://content.bcbst.com/api/public/content/telehealth_approved_code_list.pdf' }, { title: 'BlueCare Tennessee Provider Administration Manual (H3259, 07/01/2026) — covers BlueCare, TennCareSelect and CoverKids', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' }, { title: 'Managing Telehealth for BlueCare Tennessee Patients — provider guide (updated Jan. 2025)', url: 'https://content.bcbst.com/api/public/content/bluecare_tennessee_telehealth_guide.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
      },
      authTurnaround: {
        value:
          'TennCareSelect is administered by BlueCare Tennessee, and the shared July 2026 BlueCare Tennessee manual governs it: for a standard request, BlueCare "will provide notice as expeditiously as the member\'s condition requests and within State-established timeframes that may not exceed 7 calendar days following the receipt of the request for service." It may add "up to 14 additional calendar days" if the member or provider asks, or if BlueCare justifies needing more information. Expedited requests are decided "no later than 72 hours after the receipt of the request for service." That 72 hours can also stretch by up to 14 days on the same grounds. The clock runs from receipt. BlueCare\'s ABA form says continuation requests "must be submitted at least once every six months" (26-week periods) but sets no lead time before expiry.',
        status: 'verified',
        cites: [
          { title: 'BlueCare Tennessee Provider Administration Manual (H3259, 07/01/2026) — covers BlueCare and TennCareSelect', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' },
          { title: 'TennCare Statewide MCO Contract (Amendment 25, July 1, 2026) — A.2.19.3 and A.2.21.4', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/MCOStatewideContract.pdf' },
          { title: 'BlueCare — Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Other coverage is routine on TennCareSelect. Children in Katie Beckett Part A "must have a primary payer or third-party liability (TPL) that will be their first payor with Medicaid paying secondary," and TennCareSelect is their plan. BlueCare, TennCareSelect and CoverKids "are always the payers of last resort." Bill the commercial plan first. The secondary claim must carry "the primary payer\'s explanation of benefits" and must be "received within 120 days from the date the primary insurer\'s remittance was produced." BlueCare pays only the gap up to its own allowed amount: if the other carrier paid at or above BlueCare\'s allowable, "BCT will make no additional reimbursement." Pay-and-chase exception: claims for "TennCare Kids," "Preventive pediatric care," all CoverKids members under 21, and absent-parent insurance "will not be denied for a primary carrier\'s EOB." BlueCare pays and recovers from the other plan, though the manual notes billing the other carrier first earns "the higher reimbursement rate." The manual does not say whether an ABA claim counts as "TennCare Kids." It also says to seek the primary insurer\'s prior authorization first only when BlueCare is secondary to Medicare. It is silent on a commercial primary. The TennCare contract lets the MCO deny a claim the primary denied for "failure to obtain prior authorization." Get the commercial PA, and confirm with BlueCare whether its own ABA PA is still needed. TRICARE by statute pays only after other coverage "except in the case of a plan administered under title XIX" (Medicaid), so TRICARE goes before TennCare. CHAMPVA is the reverse: "If you are eligible under Medicaid, CHAMPVA will pay first."',
        status: 'verified',
        cites: [
          { title: 'BlueCare Tennessee Provider Administration Manual (H3259, 07/01/2026) — covers BlueCare and TennCareSelect', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' },
          { title: 'TennCare Statewide MCO Contract (Amendment 25, July 1, 2026) — A.2.19.3 and A.2.21.4', url: 'https://www.tn.gov/content/dam/tn/tenncare/documents/MCOStatewideContract.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        verifyVia: 'BlueCare Tennessee Provider Service / UM (Availity) — ask whether an ABA claim falls under the "TennCare Kids" pay-and-chase line, and whether TennCareSelect wants its own ABA authorization when a commercial plan is primary.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Follows the TennCare rule: direct ABA must be delivered or supervised by a TN Licensed Behavior Analyst (or a health professional permissible under TN law), unlicensed persons work under the LBA\u2019s extended authority and direction, and RBTs with their supervising BCBAs must meet all current BACB supervision requirements \u2014 the operative floor being 5% of monthly service hours with two face-to-face contacts. One TennCare Select-specific staffing overlay matters more than the ratio: members in CHOICES, ECF CHOICES, 1915(c) waivers or Katie Beckett trigger TennCare\u2019s Aligned Background Check Protocol for every employee with direct member contact.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'BlueCare Tennessee Provider Administration Manual', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' }],
      },
      concurrentBilling: {
        value:
          'Yes, when a protocol is actually modified. The BlueCare Tennessee manual, which also governs TennCareSelect (July 2026): "Providers should bill in a manner consistent with the CPT code descriptions. In addition, if the BCBA is directing an RBT, the client is present, and one or more protocols have been modified then 97155 may be billed concurrently with the RBT codes." Without a protocol change the default rule applies: "When the Board Certified/Licensed BCBA is physically present with the Member (with or without the Registered Behavior Technician (RBT) being present) then the procedure code for the claim would be the applicable service the BCBA provides." The shared program description still bars two different overlaps \u2014 more than one licensed analyst serving a member \u201cduring a specific time interval\u201d and ABA delivered simultaneously with OT, speech, PT or psychotherapy \u2014 and the BCBST initiation form notes that \u201cthe hours per week authorized aren\u2019t inclusive of other services being provided.\u201d',
        status: 'verified',
        cites: [{ title: 'BlueCare Tennessee Provider Administration Manual (H3259, 07/01/2026) — covers BlueCare, TennCareSelect and CoverKids', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }],
      },
      dailyLimits: {
        value:
          'No per-day ceiling and no annual benefit limit. Authorizations run 26 weeks and the BCBST initiation/continuation form asks for hours per week by code plus a clinical justification for any increase and, \u201cif concurrent,\u201d hours approved versus hours used in the last authorization period \u2014 the same sub-90% utilization discipline the whole program applies to 97153. Group sizes are capped as best practice at six to eight participants.',
        status: 'verified',
        cites: [{ title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }, { title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }],
      },
      noteSignature: {
        value:
          'The BlueCare Tennessee manual, which also governs TennCareSelect (July 2026), sets the rule at the record level for every behavioral health provider. Treatment records need "Progress notes for each service contact documenting the date and time of service, duration/end time of service, the type of service provided, a summary of treatment interventions used, the treatment plan goals and objectives addressed in the session, and the name and credentials of rendering service Provider," and the manual\u2019s record-keeping standards require that "Each recorded chart entry must be dated and identified by the author. Stamped signatures aren\u2019t acceptable." Treatment plans are due within 30 days of the start of service and updated every six months, and each plan and review must be "signed by a Member, family member, or legally appointed representative." No signing deadline for session notes is published.',
        status: 'verified',
        cites: [{ title: 'BlueCare Tennessee Provider Administration Manual (H3259, 07/01/2026) — covers BlueCare, TennCareSelect and CoverKids', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' }, { title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }, { title: 'BCBST \u2014 ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }],
      },
      placeOfService: {
        value:
          'Follows the TennCare rule \u2014 Clinic, Home, Community, School, Telehealth and Other are all requestable, and medically necessary school-based behavioral health services need not be in an IEP to be reimbursable; IEP services and functioning as an educational aide stay non-covered. BCBST\u2019s assessment form asks providers to state the \u201cproposed location(s)\u201d where ABA will be delivered, so setting is authorized rather than assumed.',
        status: 'verified',
        cites: [{ title: 'ABA Provider Requirements & Program Description \u2014 TennCare MCOs (rev. 06/2024)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_ABARequirements.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'BCBST \u2014 ABA Therapy Services Assessment Request Form', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }],
      },
      billAsProvider: {
        value:
          'Follows the TennCare rule \u2014 the claim rides on the group or servicing provider, with practitioner level carried as a modifier (HO analyst-delivered, HM technician-delivered, 97153 split). BlueCare\u2019s Provider Administration Manual covers BlueCare and TennCareSelect members under one shared ABA policy with the same codes (97151\u201397155, 0362T, 0373T) and the same RBT/BCaBA/BCBA billing structure, and the BCBST forms collect \u201cProvider ID, NPI Number, or Tax ID.\u201d Rates are contract-negotiated.',
        status: 'verified',
        cites: [{ title: 'BlueCare Tennessee Provider Administration Manual', url: 'https://content.bcbst.com/api/public/content/prov-bct-pam.pdf' }, { title: 'Universal Request for ABA form (all 3 MCOs, Jan 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/TN_WLP_CAID_BH_RequestABA.pdf' }, { title: 'BlueCare \u2014 Initiation and Continuation of ABA Therapy form (rev. 2/26)', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }],
      },
    },
    faq: [
      { q: 'Is TennCare Select the same as BlueCare Tennessee?', a: 'No — they\'re separate state contracts (different Edison contract IDs) even though both are administered by Volunteer State Health Plan, a BlueCross BlueShield of Tennessee subsidiary. Members are assigned to TennCare Select by the Division of TennCare, not chosen; contact numbers and some LTSS programs differ.' },
      { q: 'Who is on TennCare Select?', a: 'SSI-eligible children under 21, children in DCS foster-care custody ("SelectKids"), members in intellectual-disability HCBS waivers ("SelectCommunity"), Katie Beckett Part A children, and some out-of-state or safety-net enrollees — roughly 37,095 members statewide (CY2024 average).' },
      { q: 'Does TennCare Select cover ABA therapy?', a: 'Yes — the same shared tri-MCO ABA program that governs BlueCare, UnitedHealthcare Community Plan, and Wellpoint: EPSDT members under 21, prior authorization on assessment and treatment, TN Licensed Behavior Analyst licensure, 26-week authorization periods.' },
      { q: 'How do I submit an ABA prior authorization to TennCare Select?', a: 'The shared tri-MCO universal ABA request form, via Availity (Tennessee providers) or Cohere (out-of-state providers). TennCare Select\'s own Provider Service Line is 1-800-276-1978 and PA phone is 1-800-711-4104 — both distinct from BlueCare\'s numbers.' },
      { q: 'Does TennCare Select require RBT certification for ABA technicians?', a: 'Yes, in practice. The shared TennCare program description sets credential expectations for "RBT paraprofessionals" who must keep the RBT credential under BACB rules, and BlueCare\'s manual says "the RBT service codes can be utilized by Registered Behavior Technicians, Board Certified Assistant Behavior Analysts (BCaBA) or by a Provider who has completed their training in Applied Behavior Analysis and is waiting to take the exam to become a Board Certified Behavior Analyst (BCBA)." TennCare does not pay immediate family members to deliver ABA.' },
      { q: 'Is TennCare Select accepting new ABA providers?', a: 'There is no published open or closed status. BlueCare Tennessee\'s manual says it may "maintain a separate network and not include any willing Provider," and that it can deny participation for network need. Apply through BCBST credentialing and attest to the TennCare ABA program description, then ask provider network operations about need in your area.' },
    ],
  },

  'aetna-tennessee': {
    slug: 'aetna-tennessee',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the Tenn. Code Ann. § 56-7-2367 mandate layer.',
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
      value: 'Yes \u2014 ASD only (F84.0\u2013F84.9); ABA for other diagnoses considered experimental',
      status: 'verified',
      cites: [{ title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
    },
    payer: 'Aetna in Tennessee',
    state: 'TN', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Tennessee',
    h1: 'Aetna ABA coverage in Tennessee: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Tennessee: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Tennessee families — the national clinical policy, prior authorization, the Tenn. Code Ann. § 56-7-2367 mandate (ages, caps, exemptions), Tennessee behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Tennessee, a Aetna card means three layers at once: the carrier\'s national clinical policy, Tennessee\'s autism insurance mandate (Tenn. Code Ann. § 56-7-2367), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'Tenn. Code Ann. § 56-7-2367' },
      { label: 'Mandate age', value: 'Statute keyed to under-12 (parity-style, not an ABA mandate)' },
      { label: 'Mandate caps', value: 'No ABA-specific benefit — carrier policy governs' },
      { label: 'Exempt from mandate', value: 'Plans without neurological-disorder benefits; self-funded ERISA' },
      { label: 'Licensure', value: 'TN Licensed Behavior Analyst (Dept. of Health committee)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Tennessee',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in Tennessee is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in Tennessee.',
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
        h2: 'The Tennessee mandate: what it guarantees (and doesn\'t)',
        body: [
          'Tennessee’s statute is the weakest of the states we cover — it’s a parity rule, not an ABA mandate. For insureds under 12, plans that cover neurological disorders must provide ASD benefits at least as comprehensive, with cost-sharing no more stringent; ABA is never named, and the statute explicitly doesn’t expand the type or scope of treatment beyond other neurological disorders. In practice, commercial ABA coverage in Tennessee rides on the carrier’s national medical policy and the plan document — which makes benefits verification, not the mandate, the load-bearing step. Self-funded ERISA plans are exempt where federal law preempts, and MHPAEA supplies the stronger parity floor for group plans.',
        ],
        cites: [
      { title: 'Tenn. Code Ann. § 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' },
        ],
      },
      {
        h2: 'No Tennessee-specific Aetna policy exists',
        body: [
          'We checked: Aetna publishes no Tennessee-specific ABA policy, form, or supplement — the national policy plus the state mandate is the whole picture. That’s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, benefit limits) is where Tennessee-specific answers come from, not a carrier document.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        ],
      },
      {
        h2: 'Licensure & rates in Tennessee',
        body: [
          'Tennessee requires the Licensed Behavior Analyst (LBA) credential under Tenn. Code Ann. §§ 63-11-301 through 63-11-311, administered by the Applied Behavior Analyst Licensing Committee at the Department of Health — the same licensure gate that governs TennCare work applies on the commercial side. On rates: Aetna does not publish commercial ABA fee schedules for Tennessee (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'TN Dept. of Health — LBA application (T.C.A. §§ 63-11-301–311)', url: 'https://www.tn.gov/content/dam/tn/health/healthprofboards/behavior-analyst/LBA-Application.pdf' },
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
      { title: 'Tenn. Code Ann. § 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' },
      { title: 'TN Dept. of Health — LBA application (T.C.A. §§ 63-11-301–311)', url: 'https://www.tn.gov/content/dam/tn/health/healthprofboards/behavior-analyst/LBA-Application.pdf' },
      { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna — Provider and behavioral health manual (June 2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'No age limit in Aetna\u2019s national policy \u2014 neither CPB 0554 nor CPB 0648 states an upper or lower age bound for ABA. Tennessee\u2019s mandate does not supply one either in the way most states do: \u00a7 56-7-2367 is a parity rule keyed to insureds under 12, requiring plans that cover neurological disorders to provide at least as comprehensive ASD benefits, and it expressly does not expand the type or scope of treatment. So the operative age answer on a Tennessee Aetna card comes from the benefit document, not from either rulebook.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }, { title: 'Tenn. Code Ann. \u00a7 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' }],
        verifyVia:
          'Live benefits verification on the specific plan, and the summary plan description for a self-funded employer group.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Aetna\u2019s policies are silent on how recent the diagnostic evaluation must be, so diagnosis recency is a plan-document and utilization-review question rather than a published rule. The re-evaluation clock sits elsewhere: the ABA Medical Necessity Guide says \"A member\'s progress is to be evaluated every six months,\" and form GR-69017-4 (7-26) asks for standardized assessment results \"completed within the past 12 months.\" Reauthorization is commonly on a roughly six-month cadence, which is the practical clock intake should plan around.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }, { title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
        verifyVia:
          'Precertification intake at Aetna (form GR-69017-4 via Availity or phone) \u2014 ask what evaluation age the reviewer will accept, and get the answer in writing per case.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'CPB 0648 frames the diagnosis as made by an \u201cappropriate certified/licensed health care professional\u201d and names the professional types it contemplates in an ASD workup \u2014 board certified behavior analyst, developmental pediatrician, neurologist, occupational therapist, physical therapist, primary care provider, psychiatrist, psychologist, and speech-language pathologist and audiologist. Tennessee layers a delivery-side credential on top that is not a diagnostic one: direct ABA requires a TN Licensed Behavior Analyst under T.C.A. \u00a7\u00a7 63-11-301\u2013311.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }, { title: 'TN Dept. of Health \u2014 LBA application (T.C.A. \u00a7\u00a7 63-11-301\u2013311)', url: 'https://www.tn.gov/content/dam/tn/health/healthprofboards/behavior-analyst/LBA-Application.pdf' }],
      },
      diagnosticTools: {
        value:
          'CPB 0648 names four ASD instruments by name \u2014 the Autism Diagnostic Interview-Revised (ADI-R), Autism Diagnostic Observation Schedule-2nd edition (ADOS-2), Childhood Autism Rating Scale 2nd edition (CARS-2) and Asperger Syndrome Diagnostic Scale. The policy does not state that any one of them is mandatory for an ABA authorization, so treat the list as the instruments Aetna recognizes rather than a required battery, and confirm per case at precertification.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
        verifyVia:
          'Aetna precertification (form GR-69017-4) \u2014 confirm which instrument results the reviewer requires for the specific plan.',
        blocker: 'per-case',
      },
      referral: {
        value:
          'Aetna\u2019s ABA policies are silent on whether a referral, prescription or physician order is required; what is required is precertification for both assessment and treatment on form GR-69017-4, submitted through Availity or by phone. Tennessee\u2019s statute imposes no ordering requirement either \u2014 it names no treatment type at all. Many plans still ask for a physician order as a benefit-document term, so verify per plan rather than assuming none is needed.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }, { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' }, { title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Tenn. Code Ann. \u00a7 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' }],
        verifyVia:
          'Live benefits verification and the plan document; Aetna precertification intake for the specific member.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'Aetna\'s Telemedicine and Direct Patient Contact Payment Policy lists the ABA codes it pays by telehealth, by line of business. On commercial plans the eligible codes are 97151 (the assessment), 97153, 97155 (protocol modification, the code for BCBA direction of the technician), 97156 and 97157, billed with modifier GT, 95 or FR; 97152, 97154 and 97158 are checked for Medicare Advantage only. The posted policy shows a last review of June 2021, so treat the list as perishable. No Tennessee-specific Aetna ABA policy, form or supplement changes that list, so whether the member’s plan carries the telehealth benefit is a benefit-plan question. Aetna’s June 2026 provider manual says "Aetna Behavioral Health offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out of telehealth services," and points to Aetna.com for approved telehealth services.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table: Commercial vs. Medicare columns; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' }, { title: 'Aetna — Provider and behavioral health manual (June 2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' }],
        verifyVia: 'Aetna provider services or Availity — confirm the payment policy is still current and that the member\'s plan carries a telehealth benefit before scheduling remote hours.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'It depends on how the plan is funded. A fully insured Aetna plan sold in Tennessee follows the Prior Authorization Fairness Act. A standard request is "deemed approved within seven (7) calendar days" of submission if the carrier fails to approve, deny, or ask for the missing information. If it asks, it gets "an additional five (5) calendar days" after the provider responds, and the whole process "must not exceed seventeen (17) calendar days." An urgent request is deemed approved if not decided within "seventy-two (72) hours plus, if applicable, one (1) additional business day." A self-funded employer plan is governed by ERISA instead: pre-service decisions "not later than 15 days after receipt of the claim," with one 15-day extension, and urgent care "not later than 72 hours." No reauthorization lead time is published for Aetna ABA in Tennessee.',
        status: 'plan-dependent',
        cites: [
          { title: 'Tenn. Code Ann. 56-7-3705 — Prior Authorization Fairness Act timeframes', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-3705/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification with Aetna: ask whether the plan is fully insured (Tennessee Prior Authorization Fairness Act) or self-funded (ERISA timelines), and the plan\'s reauthorization lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Between two parents\' group plans, Tennessee\'s coordination-of-benefits rule uses the birthday rule: "the benefits of the Plan of the parent whose birthday falls earlier in a year are determined before those of the Plan of the parent whose birthday falls later in that year." Only month and day count. If the birthdays match, the plan that has covered the parent longer pays first. A court decree or the divorced/separated-parent rules can change this. That rule governs fully insured group contracts. A self-funded employer plan sets its own order in its plan document, and individual policies are outside the group rule. The Aetna plan pays before TennCare, because Medicaid is payer of last resort. It also pays before TRICARE, which pays only after other coverage. When the child also has CHAMPVA, the Aetna plan pays first: "If you have any other type of other health insurance, CHAMPVA will pay secondary." Get the Aetna prior authorization even when a secondary plan will pick up the balance.',
        status: 'plan-dependent',
        cites: [
          { title: 'Tenn. Comp. R. & Regs. 0780-01-53 — Coordination of Benefits (group contracts)', url: 'https://publications.tnsosfiles.com/rules/0780/0780-01/0780-01-53.pdf' },
          { title: '42 U.S.C. 1396a(a)(25) — Medicaid third-party liability', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap7-subchapXIX-sec1396a.htm' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        verifyVia: 'Aetna member services / benefits verification: confirm funding type and the COB order in the plan document, and collect the other parent\'s plan and each parent\'s date of birth at intake.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Not published. Aetna\u2019s ABA policies set no supervision ratio, no supervisor-to-technician cap and no observation cadence. In Tennessee the binding supervision requirement is therefore the state licensure one: direct ABA must be delivered by a Licensed Behavior Analyst under T.C.A. \u00a7\u00a7 63-11-301 through 63-11-311, administered by the Applied Behavior Analyst Licensing Committee, with assistant-level LABAs practicing only under LBA supervision \u2014 the same gate that governs TennCare work.',
        status: 'unverified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'TN Dept. of Health \u2014 LBA application (T.C.A. \u00a7\u00a7 63-11-301\u2013311)', url: 'https://www.tn.gov/content/dam/tn/health/healthprofboards/behavior-analyst/LBA-Application.pdf' }],
        verifyVia:
          'Aetna provider services and your participating-provider agreement; the TN Applied Behavior Analyst Licensing Committee for the licensure floor.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value:
          'Not published. Neither CPB 0554 nor CPB 0648 addresses whether 97153 and 97155 may be billed for the same clock time, and Aetna publishes no Tennessee-specific ABA reimbursement policy.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
        verifyVia:
          'Aetna\u2019s clinical payment, coding and policy changes pages and your participating-provider agreement; confirm with provider services per case before billing the overlap.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Not published. Aetna states no per-day MUE, unit ceiling or weekly hour maximum for ABA, and Tennessee\u2019s mandate supplies none either \u2014 \u00a7 56-7-2367 creates no ABA-specific benefit, so any numeric limit a Tennessee family meets is a plan-document term or a medical-necessity determination. Federal parity still constrains how hard a numeric limit can be applied to a group plan.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Tenn. Code Ann. \u00a7 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' }],
        verifyVia:
          'Live benefits verification for the specific plan \u2014 ask for visit, hour and dollar limits in writing, and flag any ABA-only limit for a parity review.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Aetna sets it in its national provider manual (6/26), which applies to all participating practitioners: "All entries are dated," "All entries are legible to someone other than the writer," and "All entries in the record must contain the provider\u2019s signature/initials or electronic identifier." CPB 0554 and CPB 0648 add no ABA-specific signature rule, and no signing deadline is published.',
        status: 'verified',
        cites: [{ title: 'Aetna Provider Manual (form 8102800-01-01, 6/26) — Core components for medical records', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' }, { title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
      },
      placeOfService: {
        value:
          'Not published. Neither ABA policy names payable settings, and there is no Tennessee-specific Aetna supplement. Worth knowing for contrast: TennCare does pay for school-setting ABA that is not part of an IEP, so a Tennessee family moving between Medicaid and a commercial Aetna plan may find the setting answer changes.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
        verifyVia:
          'Live benefits verification and Aetna\u2019s place-of-service reimbursement guidance for the specific plan.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'Not published in the ABA policies. Aetna sets no rendering-versus-supervising NPI convention for ABA in CPB 0554 or CPB 0648. In Tennessee the constraint that does bind is licensure \u2014 direct ABA requires an LBA, with LABAs practicing only under LBA supervision \u2014 and rates are contract-negotiated, because no national carrier publishes commercial ABA fee schedules for Tennessee.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'TN Dept. of Health \u2014 LBA application (T.C.A. \u00a7\u00a7 63-11-301\u2013311)', url: 'https://www.tn.gov/content/dam/tn/health/healthprofboards/behavior-analyst/LBA-Application.pdf' }],
        verifyVia:
          'Your Aetna participating-provider agreement and Aetna\u2019s professional claim submission guidance.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Tennessee?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Tennessee\'s mandate (Tenn. Code Ann. § 56-7-2367) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Tennessee autism mandate require?', a: 'Tennessee’s statute is the weakest of the states we cover — it’s a parity rule, not an ABA mandate. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does Aetna pay for ABA in Tennessee?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Tennessee Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
      { q: 'Does Aetna require RBT certification for ABA technicians?', a: 'Aetna\'s ABA medical necessity guide does not require a technician credential. Services must be provided directly or billed by a licensed behavior analyst (where the state licenses them), a BCBA or a licensed psychologist. Where plans or state law allow services by people who are not licensed or BACB-certified, they must be supervised and directed in line with practice standards. State law or the plan can require more.' },
    ],
  },

  'cigna-tennessee': {
    slug: 'cigna-tennessee',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + the Tenn. Code Ann. § 56-7-2367 mandate layer.',
    assessmentPA: {
      value: 'Not required for assessment codes 97151, 97152, 0362T (per Cigna\'s autism resource guide — EN0499 itself states no prior-authorization rule)',
      status: 'verified',
      cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    treatmentPA: {
      value: 'Required — assessment + treatment plan with the ABA PA form (see Cigna\'s autism resource guide; EN0499 sets the clinical criteria, not the PA rule)',
      status: 'verified',
      cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD only; Rett syndrome (F84.2) excluded under EN0499',
      status: 'verified',
      cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    payer: 'Cigna / Evernorth in Tennessee',
    state: 'TN', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Tennessee',
    h1: 'Cigna / Evernorth ABA coverage in Tennessee: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Tennessee: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Tennessee families — the national clinical policy, prior authorization, the Tenn. Code Ann. § 56-7-2367 mandate (ages, caps, exemptions), Tennessee behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Tennessee, a Cigna card means three layers at once: the carrier\'s national clinical policy, Tennessee\'s autism insurance mandate (Tenn. Code Ann. § 56-7-2367), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'Tenn. Code Ann. § 56-7-2367' },
      { label: 'Mandate age', value: 'Statute keyed to under-12 (parity-style, not an ABA mandate)' },
      { label: 'Mandate caps', value: 'No ABA-specific benefit — carrier policy governs' },
      { label: 'Exempt from mandate', value: 'Plans without neurological-disorder benefits; self-funded ERISA' },
      { label: 'Licensure', value: 'TN Licensed Behavior Analyst (Dept. of Health committee)' },
      { label: 'Fee schedule', value: 'Not public — your rates and the list of reimbursable ASD services are in Exhibit A of your Evernorth provider agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Tennessee',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. That clinical policy is national — what changes in Tennessee is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in Tennessee.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Tennessee mandate: what it guarantees (and doesn\'t)',
        body: [
          'Tennessee’s statute is the weakest of the states we cover — it’s a parity rule, not an ABA mandate. For insureds under 12, plans that cover neurological disorders must provide ASD benefits at least as comprehensive, with cost-sharing no more stringent; ABA is never named, and the statute explicitly doesn’t expand the type or scope of treatment beyond other neurological disorders. In practice, commercial ABA coverage in Tennessee rides on the carrier’s national medical policy and the plan document — which makes benefits verification, not the mandate, the load-bearing step. Self-funded ERISA plans are exempt where federal law preempts, and MHPAEA supplies the stronger parity floor for group plans.',
        ],
        cites: [
      { title: 'Tenn. Code Ann. § 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' },
        ],
      },
      {
        h2: 'No Tennessee-specific Cigna policy exists',
        body: [
          'We checked: Cigna / Evernorth publishes no Tennessee-specific ABA policy, form, or supplement — the national policy plus the state mandate is the whole picture. That’s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, benefit limits) is where Tennessee-specific answers come from, not a carrier document.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Tennessee',
        body: [
          'Tennessee requires the Licensed Behavior Analyst (LBA) credential under Tenn. Code Ann. §§ 63-11-301 through 63-11-311, administered by the Applied Behavior Analyst Licensing Committee at the Department of Health — the same licensure gate that governs TennCare work applies on the commercial side. On rates: Cigna does not publish commercial ABA fee schedules for Tennessee (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'TN Dept. of Health — LBA application (T.C.A. §§ 63-11-301–311)', url: 'https://www.tn.gov/content/dam/tn/health/healthprofboards/behavior-analyst/LBA-Application.pdf' },
        ],
      },
      {
        h2: 'What is Cigna\'s fee schedule for ABA?',
        body: [
          'Cigna\'s behavioral health arm, Evernorth, publishes no ABA rate table. Its September 2026 Administrative Guidelines tell contracted providers: "For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement." Fee schedule and contract questions go to Evernorth Provider Services at 800.926.2273.',
          'Billing follows the AMA codes only: "All ABA services must be billed with CPT codes 97151–97158, 0362T, and 0373T ONLY," in 15-minute units, under Evernorth payer ID 62308.',
        ],
        cites: [
          { title: 'Evernorth Behavioral Health — Administrative Guidelines (September 2026, PCOMM-2026-191)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
          { title: 'Evernorth — Autism resource guide for behavioral health providers (PCOMM-2025-225, March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'Is Cigna\'s ABA network open to new providers?',
        body: [
          'Evernorth says it "is committed to expanding our network of autism providers." Providers must be certified by a national governing agency or a state licensing board (BCBA, BCBA-D, BCaBA, licensed behavior analyst, licensed behavior specialist or other behavioral health licensure). Individual providers complete the Evernorth Behavioral Provider Information Form; autism clinics and large groups complete the Evernorth Screening Application for Autism Clinics.',
          'Timing: "It may take up to 90 days for an application to be processed," and after a clinic contract is signed each certified or licensed provider must be credentialed, which "can take an additional 60 to 90 days." Providers must be fully credentialed to render in-network services. Questions go to BehavioralContracting@Evernorth.com or Provider Services at 800.926.2273.',
        ],
        cites: [
          { title: 'Evernorth — Autism resource guide for behavioral health providers (PCOMM-2025-225, March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
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
      { title: 'Tenn. Code Ann. § 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' },
      { title: 'TN Dept. of Health — LBA application (T.C.A. §§ 63-11-301–311)', url: 'https://www.tn.gov/content/dam/tn/health/healthprofboards/behavior-analyst/LBA-Application.pdf' },
      { title: 'Evernorth Behavioral Health — Administrative Guidelines (September 2026, PCOMM-2026-191)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'EN0499 states no age limit \u2014 the policy gates on diagnosis, assessment and data rather than age. Tennessee\u2019s mandate does not add one usefully either: \u00a7 56-7-2367 is a parity rule keyed to insureds under 12 that never names ABA, so an age answer on a Tennessee Cigna card comes from the benefit document rather than from the policy or the statute.',
        status: 'plan-dependent',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Tenn. Code Ann. \u00a7 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' }],
        verifyVia:
          'Live benefits verification on the specific plan; the summary plan description for a self-funded employer group.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'EN0499 puts its clocks on the assessment and the data, not on the diagnosis. The diagnosis must be confirmed with \u201cthe date on which the diagnosis was most recently made\u201d documented, but carries no maximum age. What must be current is the instrument and the data: \u201cadministration of the assessment instrument has been completed within 60 days prior to the start of treatment,\u201d quantitative baseline data likewise within 60 days, current data within 60 days of both the start date and the date the request is received, and a fresh standardized instrument \u201cfollowing any break in treatment greater than 60 calendar days.\u201d Continued treatment needs an instrument \u201ccompleted no more than one year prior to the start date of the continued treatment request.\u201d',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosingProviders: {
        value:
          '\u201cThe individual has a confirmed diagnosis of autism spectrum disorder (ASD)\u2026 based on the criteria in the Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR) by a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice,\u201d with the name, credentials and type of licensure of the diagnostician and the date of the most recent diagnosis all provided. The ABA assessment is separate and must be performed by a BCBA, LBA, or an independently licensed mental health clinician with documented ABA training. Note the diagnosis must be ASD (F84.0\u2013F84.9): Rett syndrome (F84.2) is excluded.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosticTools: {
        value:
          'No instrument is named, but the specification is strict. The assessment must administer \u201ca reliable, valid, and standardized assessment instrument that measures the individual\u2019s functioning in the domains included in the diagnostic criteria for ASD in the DSM-5-TR\u2026 social communication and social interaction; and restricted, repetitive patterns of behavior, interests, or activities,\u201d and the instrument must be \u201ccompleted in its entirety and as designed,\u201d validated for the population tested, administered and interpreted by someone trained to do so, and \u201cthe most current version\u2026 (e.g., must be the Vineland-3 vs. Vineland-II).\u201d Standardized scores, score tables and scoring grids must be provided, with the date of administration, respondent name and form type.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      referral: {
        value:
          'EN0499 requires no referral or physician order \u2014 the gate is the confirmed diagnosis plus the ABA assessment. Assessment codes 97151, 97152 and 0362T carry no prior authorization at all; the rigor arrives at the treatment step, which needs the completed assessment and a treatment plan submitted on Cigna\u2019s ABA PA form. Tennessee adds nothing here: \u00a7 56-7-2367 imposes no ordering requirement and Cigna publishes no Tennessee-specific ABA supplement.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Tenn. Code Ann. \u00a7 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' }],
      },
      telehealth: {
        value:
          'Permitted. EN0499 itself publishes no code list and no place-of-service rule: \u201cABA treatment may be rendered via traditional in-person service delivery, telehealth, or a hybrid of in-person and telehealth service modalities,\u201d chosen on individual characteristics, treatment plan, caregiver participation, environment, evidence of efficacy and safety, and technological requirements. Telehealth is one of the environments where the policy requires services to be \u201cclearly identified and documented,\u201d and the line-of-sight/proximity requirement expressly \u201cdoes not apply to telehealth services, when applicable.\u201d Evernorth’s autism resource guide (March 2025) settles the code question: "All ABA CPT codes are covered telehealth services." That includes the assessment codes 97151 and 97152 and BCBA supervision (97155).',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Evernorth — Autism resource guide for behavioral health providers (PCOMM-2025-225, March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      authTurnaround: {
        value:
          'It depends on how the plan is funded. A fully insured Cigna plan sold in Tennessee follows the Prior Authorization Fairness Act. A standard request is "deemed approved within seven (7) calendar days" of submission if the carrier fails to approve, deny, or ask for the missing information. If it asks, it gets "an additional five (5) calendar days" after the provider responds, and the whole process "must not exceed seventeen (17) calendar days." An urgent request is deemed approved if not decided within "seventy-two (72) hours plus, if applicable, one (1) additional business day." A self-funded employer plan is governed by ERISA instead: pre-service decisions "not later than 15 days after receipt of the claim," with one 15-day extension, and urgent care "not later than 72 hours." No reauthorization lead time is published for Cigna ABA in Tennessee.',
        status: 'plan-dependent',
        cites: [
          { title: 'Tenn. Code Ann. 56-7-3705 — Prior Authorization Fairness Act timeframes', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-3705/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification with Cigna: ask whether the plan is fully insured (Tennessee Prior Authorization Fairness Act) or self-funded (ERISA timelines), and the plan\'s reauthorization lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Between two parents\' group plans, Tennessee\'s coordination-of-benefits rule uses the birthday rule: "the benefits of the Plan of the parent whose birthday falls earlier in a year are determined before those of the Plan of the parent whose birthday falls later in that year." Only month and day count. If the birthdays match, the plan that has covered the parent longer pays first. A court decree or the divorced/separated-parent rules can change this. That rule governs fully insured group contracts. A self-funded employer plan sets its own order in its plan document, and individual policies are outside the group rule. The Cigna plan pays before TennCare, because Medicaid is payer of last resort. It also pays before TRICARE, which pays only after other coverage. When the child also has CHAMPVA, the Cigna plan pays first: "If you have any other type of other health insurance, CHAMPVA will pay secondary." Get the Cigna prior authorization even when a secondary plan will pick up the balance.',
        status: 'plan-dependent',
        cites: [
          { title: 'Tenn. Comp. R. & Regs. 0780-01-53 — Coordination of Benefits (group contracts)', url: 'https://publications.tnsosfiles.com/rules/0780/0780-01/0780-01-53.pdf' },
          { title: '42 U.S.C. 1396a(a)(25) — Medicaid third-party liability', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap7-subchapXIX-sec1396a.htm' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        verifyVia: 'Cigna member services / benefits verification: confirm funding type and the COB order in the plan document, and collect the other parent\'s plan and each parent\'s date of birth at intake.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          '\u201cDirect case supervision (occurs concurrently with the delivery of direct treatment to the individual and consists of BCBA face-to-face with the individual and either the Registered Behavior Technician [RBT] or the Board Certified Assistant Behavior Analyst [BCaBA]) and indirect case supervision is consistent with the general accepted standard of care of one to two hours per ten hours of direct treatment,\u201d and \u201cwhen direct treatment is 10 hours per week or less, a minimum of one to two hours per week of direct case supervision is provided.\u201d The supervisor must be a BCBA, LBA, or an independently licensed mental health professional with documented ABA training, and \u201cthe name and credentials of the individual who will provide supervision must be documented.\u201d In Tennessee that person must also hold the state LBA license to deliver direct ABA.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'TN Dept. of Health \u2014 LBA application (T.C.A. \u00a7\u00a7 63-11-301\u2013311)', url: 'https://www.tn.gov/content/dam/tn/health/healthprofboards/behavior-analyst/LBA-Application.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not answered for 97153 with 97155. EN0499 defines concurrent billing only in its glossary \u2014 \u201cregardless of the funding source, multiple providers bill for services rendered to the same patient when those services occur at the same time\u201d \u2014 and the rule it actually states is about modalities: \u201cprovision of ABA treatment is not covered or reimbursable when delivered to the same individual, at the same time as any other treatment modality (e.g., ABA and speech therapy, or ABA and occupational therapy).\u201d The 97155 descriptor Cigna reproduces already contemplates \u201csimultaneous direction of technician,\u201d but whether both codes may be billed for the same clock time is not addressed.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia:
          'Cigna/Evernorth provider services and the applicable reimbursement (not coverage) policy; confirm in writing before billing the overlap.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling and no hour maximum. EN0499 is explicit that intensity is individually determined: \u201cthe recommended intensity of treatment should be based on what is medically necessary for the individual independent of the individual\u2019s schedule of activities outside of treatment or previous utilization of services,\u201d defined as direct ABA hours per week excluding case supervision and caregiver training. An increase request must carry a clinical rationale plus quantitative data showing how the added intensity would improve outcome. Any numeric ceiling a Tennessee family meets is a plan-document term, not a policy limit.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      noteSignature: {
        value:
          'The rendering provider signs, per service. \u201cA separate written record is expected for each individual receiving ABA intervention corresponding with each service noted through identified CPT Code\u201d and must include the start date and time and end date and time for each service, location of service delivery, focus of service, a detailed description of the intervention, individuals present, the specific service delivered, and \u201cname, credential (if applicable), and signature of ABA provider who rendered the service.\u201d No supervising-analyst co-signature is required.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      placeOfService: {
        value:
          'Setting follows clinical need rather than a payable-locations list: \u201ccare must be deliverable in any setting that is relevant for the individual to achieve treatment goals \u2014 whether in the home, at school, in a clinic or center, or in the community,\u201d with residential treatment facilities, childcare facilities, transportation, vocational or educational classes and recreational and social environments all named. Two guardrails apply: \u201cservices that are considered primarily educational or vocational in nature, or related to academic or work performance are not covered or reimbursable,\u201d and ABA may not \u201creplace or replicate activities that are the responsibility of the setting\u2026 (e.g., classroom aide, 1:1 teacher, tutor, vocational assistant/coach, respite services).\u201d Data must be reported separately by location when treatment spans settings.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      billAsProvider: {
        value:
          'EN0499 sets no rendering-versus-supervising NPI convention \u2014 it governs who may perform each service (BCBA/LBA/independently licensed clinician for assessment, supervision and caregiver training; technician for 97152/97153/97154 under direction) and requires the signature of whoever rendered it, but not whose number the claim carries. In Tennessee the delivery credential is the binding constraint: direct ABA requires a Licensed Behavior Analyst under T.C.A. \u00a7\u00a7 63-11-301\u2013311. Rates are contract-negotiated; Cigna publishes no Tennessee ABA fee schedule.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'TN Dept. of Health \u2014 LBA application (T.C.A. \u00a7\u00a7 63-11-301\u2013311)', url: 'https://www.tn.gov/content/dam/tn/health/healthprofboards/behavior-analyst/LBA-Application.pdf' }],
        verifyVia:
          'Cigna/Evernorth provider services and your participating-provider agreement for claim-submission conventions.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Tennessee?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Tennessee\'s mandate (Tenn. Code Ann. § 56-7-2367) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Tennessee autism mandate require?', a: 'Tennessee’s statute is the weakest of the states we cover — it’s a parity rule, not an ABA mandate. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does Cigna pay for ABA in Tennessee?', a: 'Evernorth (Cigna behavioral health) publishes no ABA rate table. Its administrative guidelines say your fee schedule and the list of reimbursable autism services are in Exhibit A of your Evernorth provider agreement; call Provider Services at 800.926.2273 with fee schedule questions.' },
      { q: 'Is Cigna (Evernorth) accepting new ABA providers?', a: 'Evernorth says it is "committed to expanding our network of autism providers." Individuals file the Behavioral Provider Information Form and clinics the Screening Application for Autism Clinics; processing can take up to 90 days, plus 60 to 90 days of credentialing per provider after a clinic contract.' },
      { q: 'Does Cigna require RBT certification for ABA technicians?', a: 'Evernorth\'s autism resource guide does not name a technician credential. It says Evernorth "does not credential nonlicensed/noncertified staff" and that their services "must be billed under the supervising provider." Case supervision must come from a BCBA, LBA or independently licensed clinician with ABA training. State licensure rules can add requirements.' },
    ],
  },

  'unitedhealthcare-tennessee': {
    slug: 'unitedhealthcare-tennessee',
    family: 'unitedhealthcare',
    cardDesc: 'Optum Supplemental Clinical Criteria (BH803ABASCC) + the Tenn. Code Ann. § 56-7-2367 mandate layer.',
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
      value: 'Yes \u2014 DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.)',
      status: 'verified',
      cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
    },
    payer: 'UnitedHealthcare / Optum in Tennessee',
    state: 'TN', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Tennessee',
    h1: 'UnitedHealthcare / Optum ABA coverage in Tennessee: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Tennessee: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Tennessee families — the national clinical policy, prior authorization, the Tenn. Code Ann. § 56-7-2367 mandate (ages, caps, exemptions), Tennessee behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Tennessee, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, Tennessee\'s autism insurance mandate (Tenn. Code Ann. § 56-7-2367), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'Tenn. Code Ann. § 56-7-2367' },
      { label: 'Mandate age', value: 'Statute keyed to under-12 (parity-style, not an ABA mandate)' },
      { label: 'Mandate caps', value: 'No ABA-specific benefit — carrier policy governs' },
      { label: 'Exempt from mandate', value: 'Plans without neurological-disorder benefits; self-funded ERISA' },
      { label: 'Licensure', value: 'TN Licensed Behavior Analyst (Dept. of Health committee)' },
      { label: 'Fee schedule', value: 'Not public — bill the codes and charges on your contracted Optum ABA fee schedule; paid at your contracted rate' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Tennessee',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months and an operational flag when utilization falls below 80% of authorized hours. That clinical policy is national — what changes in Tennessee is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in Tennessee.',
        ],
        cites: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'The Tennessee mandate: what it guarantees (and doesn\'t)',
        body: [
          'Tennessee’s statute is the weakest of the states we cover — it’s a parity rule, not an ABA mandate. For insureds under 12, plans that cover neurological disorders must provide ASD benefits at least as comprehensive, with cost-sharing no more stringent; ABA is never named, and the statute explicitly doesn’t expand the type or scope of treatment beyond other neurological disorders. In practice, commercial ABA coverage in Tennessee rides on the carrier’s national medical policy and the plan document — which makes benefits verification, not the mandate, the load-bearing step. Self-funded ERISA plans are exempt where federal law preempts, and MHPAEA supplies the stronger parity floor for group plans.',
        ],
        cites: [
      { title: 'Tenn. Code Ann. § 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' },
        ],
      },
      {
        h2: 'UnitedHealthcare Medicaid in Tennessee',
        body: [
          'A family saying “we have UnitedHealthcare” in Tennessee may actually be on the carrier’s Medicaid plan — UnitedHealthcare Community Plan of Tennessee — which follows the state Medicaid rules, not this commercial policy. Verify which line of business the card belongs to, and use the dedicated guide for the Medicaid plan.',
        ],
      },
      {
        h2: 'Licensure & rates in Tennessee',
        body: [
          'Tennessee requires the Licensed Behavior Analyst (LBA) credential under Tenn. Code Ann. §§ 63-11-301 through 63-11-311, administered by the Applied Behavior Analyst Licensing Committee at the Department of Health — the same licensure gate that governs TennCare work applies on the commercial side. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for Tennessee (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'TN Dept. of Health — LBA application (T.C.A. §§ 63-11-301–311)', url: 'https://www.tn.gov/content/dam/tn/health/healthprofboards/behavior-analyst/LBA-Application.pdf' },
        ],
      },
      {
        h2: 'What is UnitedHealthcare\'s fee schedule for ABA?',
        body: [
          'Optum, which runs UnitedHealthcare\'s commercial ABA network, publishes no ABA rate table. Its ABA CPT FAQ: "FOR COMMERCIAL MEMBERS, you should bill your contracted billing codes and customary charges as outlined on your Fee Schedule after receiving appropriate authorization. You will be reimbursed based on your contracted rate." Participating groups bill on the Form 1500 "with the billing codes indicated on your contracted fee schedule." A provider that is not yet contracted should call the behavioral health number on the member\'s card to obtain approvals before billing.',
          'MUEs apply to the commercial ABA program, except that Optum allows 32 units a day of 97151 so assessments can run in longer sessions. Your rates are in your Optum agreement; there is no public lookup.',
        ],
        cites: [
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        ],
      },
      {
        h2: 'Is UnitedHealthcare\'s ABA network open to new providers?',
        body: [
          'Optum describes how to join rather than whether the network is open. Its ABA FAQ lists the credentialing criteria: an individual behavior analyst needs BACB certification as a BCBA, state licensure or certification where the state requires it, at least six months of supervised ABA experience, and $1 million/$1 million professional liability coverage. A group needs analysts who meet those standards, an analyst or licensed clinician on staff providing program oversight, and $1 million/$3 million professional liability plus general or supplemental liability coverage. Apply through the "Join Our Autism/ABA Network" section of the Autism/ABA page on Provider Express.',
          'Timing: "Solo Behavior Analysts/Specialists and Group credentialing can take from 45 to 120 days," and "an audit is required for all new ABA Agencies and normally it can take up to 90 days to schedule." Optum publishes no statement on whether it is adding ABA providers in a given area; its Provider Service Line (1-877-614-0484) handles network questions.',
        ],
        cites: [
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Line of business', desc: 'Commercial vs. UnitedHealthcare Community Plan of Tennessee (Medicaid) — different rules, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Age', desc: 'Where the mandate carries age terms, flag edge cases for the parity analysis rather than turning families away.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Tenn. Code Ann. § 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' },
      { title: 'TN Dept. of Health — LBA application (T.C.A. §§ 63-11-301–311)', url: 'https://www.tn.gov/content/dam/tn/health/healthprofboards/behavior-analyst/LBA-Application.pdf' },
      { title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Optum\u2019s Supplemental Clinical Criteria state no age limit \u2014 they note ABA is \u201ceffective across the lifespan\u201d and carry adolescent- and adult-focused content. Age limits reach Optum through its ABA State Mandates supplement, and that document has no Tennessee entry at all (its state list runs Arizona, California, Connecticut, Florida, Indiana, Kansas, Kentucky, Maryland, Massachusetts, New Jersey, New York, Ohio, Pennsylvania and Virginia). Tennessee\u2019s own statute is a parity rule keyed to insureds under 12 that never names ABA, so the age answer sits in the benefit document.',
        status: 'plan-dependent',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Tenn. Code Ann. \u00a7 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' }],
        verifyVia:
          'Live benefits verification on the specific plan; the summary plan description for a self-funded employer group.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Optum\u2019s criteria set no maximum age on the diagnostic evaluation. The recurring clock is the review cycle instead \u2014 continued-service reviews every four to six months, with progress documented \u201cin standardized assessment of norm-referenced, adaptive functioning\u201d and coverage at risk where \u201cdeclining or no progress on standardized adaptive measures of functioning such as the Vineland\u201d persists across successive authorization periods.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      diagnosingProviders: {
        value:
          '\u201cA valid diagnosis of ASD (or other applicable diagnosis as required by governing laws) must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis according to the diagnostic criteria based on the DSM-5-TR.\u201d The ABA provider is a separate credential: a master\u2019s- or doctoral-level BCBA, a credentialed licensed behavioral health clinician attesting to sufficient ABA expertise, or a BCaBA or non-licensed individual under the direct supervision of one of those. In Tennessee the delivering analyst must additionally hold the state LBA license.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'TN Dept. of Health \u2014 LBA application (T.C.A. \u00a7\u00a7 63-11-301\u2013311)', url: 'https://www.tn.gov/content/dam/tn/health/healthprofboards/behavior-analyst/LBA-Application.pdf' }],
      },
      diagnosticTools: {
        value:
          'Optum publishes the most explicit instrument list of any national ABA policy, in two tiers. The diagnosis and severity level \u201care confirmed and documented by the diagnosing clinician using at least one clinically validated tool (not an all-inclusive list)\u201d \u2014 first-level screeners (ABC, CHAT/M-CHAT, CSBS-DP-IT-Checklist, ASQ, AQ, CAST), second-level screeners (CARS/CARS-2, RITA-T, STAT) and formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO). Treatment intensity must then be \u201cchosen according to baseline measurement with the use of at least one of the following validated measurement tools\u201d \u2014 ATEC, VB-MAPP, ABLLS/ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, Vineland (VABS) or CFQL-2 \u2014 selected individually rather than uniformly.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      referral: {
        value:
          'No referral or physician order is required by Optum\u2019s criteria \u2014 the gate is the validated diagnosis plus prior authorization: \u201cprior authorization is required for ABA (unless otherwise specified or mandated by contract or law),\u201d run as a two-step process on Provider Express with the assessment authorized first and treatment second. Tennessee adds no ordering requirement on the commercial side, and Optum\u2019s State Mandates supplement carries no Tennessee entry.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Tenn. Code Ann. \u00a7 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' }],
      },
      telehealth: {
        value: 'Three codes, after an attestation. Optum’s Telehealth Billing guide (updated September 2025) is explicit for commercial plans: “For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157” — virtual supervision of technicians and family training — so technician-delivered 97153 is not payable by telehealth. The provider must first be “an approved Optum virtual visits provider who has attested” (the virtual-visits attestation on Provider Express) and must tell the ABA Care Advocate at authorization. Bill the in-person code with the member’s location as the place of service: POS 10 when the member is at home, POS 02 anywhere else (the older ABA CPT FAQ says POS 02; the 2025 guide requires one of the two on every behavioral-health telehealth claim, and POS 11 or a telehealth modifier alone is not paid). Optum’s criteria add that telehealth is “not intended to supplant in-person service.” For assessments, that list matters: 97151 and 97152 are not among the three telehealth codes, so Optum’s guide gives no telehealth path for the initial assessment or a reassessment on commercial plans. BCBA supervision of the technician (97155) is one of the three, as is caregiver training (97156, 97157).',
        status: 'verified',
        cites: [
          { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'It depends on how the plan is funded. A fully insured UnitedHealthcare plan sold in Tennessee follows the Prior Authorization Fairness Act. A standard request is "deemed approved within seven (7) calendar days" of submission if the carrier fails to approve, deny, or ask for the missing information. If it asks, it gets "an additional five (5) calendar days" after the provider responds, and the whole process "must not exceed seventeen (17) calendar days." An urgent request is deemed approved if not decided within "seventy-two (72) hours plus, if applicable, one (1) additional business day." A self-funded employer plan is governed by ERISA instead: pre-service decisions "not later than 15 days after receipt of the claim," with one 15-day extension, and urgent care "not later than 72 hours." No reauthorization lead time is published for UnitedHealthcare ABA in Tennessee.',
        status: 'plan-dependent',
        cites: [
          { title: 'Tenn. Code Ann. 56-7-3705 — Prior Authorization Fairness Act timeframes', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-3705/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification with UnitedHealthcare: ask whether the plan is fully insured (Tennessee Prior Authorization Fairness Act) or self-funded (ERISA timelines), and the plan\'s reauthorization lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Between two parents\' group plans, Tennessee\'s coordination-of-benefits rule uses the birthday rule: "the benefits of the Plan of the parent whose birthday falls earlier in a year are determined before those of the Plan of the parent whose birthday falls later in that year." Only month and day count. If the birthdays match, the plan that has covered the parent longer pays first. A court decree or the divorced/separated-parent rules can change this. That rule governs fully insured group contracts. A self-funded employer plan sets its own order in its plan document, and individual policies are outside the group rule. The UnitedHealthcare plan pays before TennCare, because Medicaid is payer of last resort. It also pays before TRICARE, which pays only after other coverage. When the child also has CHAMPVA, the UnitedHealthcare plan pays first: "If you have any other type of other health insurance, CHAMPVA will pay secondary." Get the UnitedHealthcare prior authorization even when a secondary plan will pick up the balance.',
        status: 'plan-dependent',
        cites: [
          { title: 'Tenn. Comp. R. & Regs. 0780-01-53 — Coordination of Benefits (group contracts)', url: 'https://publications.tnsosfiles.com/rules/0780/0780-01/0780-01-53.pdf' },
          { title: '42 U.S.C. 1396a(a)(25) — Medicaid third-party liability', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap7-subchapXIX-sec1396a.htm' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        verifyVia: 'UnitedHealthcare member services / benefits verification: confirm funding type and the COB order in the plan document, and collect the other parent\'s plan and each parent\'s date of birth at intake.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          '\u201cConsistent with CASP standards of care, direct case supervision is required 1\u20132 hours for every 10 hours of direct treatment per week.\u201d Technicians \u201cmust be under the applicable supervision of a BCBA or licensed behavioral health clinician\u201d and \u201cshould be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate.\u201d Optum also bars a family workaround: \u201cit is not recommended that parents serve in an RBT role due to numerous ethical and conflicting relationships issues,\u201d and a BCBA supervising a parent acting as RBT for their own child \u201cwould also be in violation of their ethics code.\u201d Tennessee layers its LBA licensure on top for direct delivery.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'TN Dept. of Health \u2014 LBA application (T.C.A. \u00a7\u00a7 63-11-301\u2013311)', url: 'https://www.tn.gov/content/dam/tn/health/healthprofboards/behavior-analyst/LBA-Application.pdf' }],
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
          'Optum declines to restrict setting: \u201ctreatment should not be restricted to specific settings but instead should be delivered in the settings that maximize treatment outcomes for the individual patient,\u201d and \u201cABA should be rendered in multiple settings to support transition and generalization.\u201d The exclusion is functional, not geographic: ABA is not covered for \u201cservices that are not ABA therapy, such as 1:1 aid delivered simultaneously during classroom instruction, or services covered under the Individuals with Disabilities Education Act (IDEA),\u201d while \u201cschool ABA services do allow for coordination of services and would cover services such as teacher training, meetings with school personnel, and observations in the school setting.\u201d',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      billAsProvider: {
        value:
          'Not published. Optum\u2019s criteria define who may render each service \u2014 BCBA or credentialed licensed clinician for assessment, plan development and supervision; BCaBA or non-licensed technician under direct supervision for implementation \u2014 but set no rendering-versus-supervising NPI convention. In Tennessee the binding constraint is the LBA licensure gate under T.C.A. \u00a7\u00a7 63-11-301\u2013311, and rates sit in the participating-provider agreement, since no national carrier publishes Tennessee commercial ABA fee schedules.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'TN Dept. of Health \u2014 LBA application (T.C.A. \u00a7\u00a7 63-11-301\u2013311)', url: 'https://www.tn.gov/content/dam/tn/health/healthprofboards/behavior-analyst/LBA-Application.pdf' }],
        verifyVia:
          'Provider Express claim-submission guidance and your UnitedHealthcare participating-provider agreement.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Tennessee?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Tennessee\'s mandate (Tenn. Code Ann. § 56-7-2367) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Tennessee autism mandate require?', a: 'Tennessee’s statute is the weakest of the states we cover — it’s a parity rule, not an ABA mandate. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does UnitedHealthcare pay for ABA in Tennessee?', a: 'Optum publishes no ABA rate table. Contracted providers bill the codes and customary charges on their Optum fee schedule after authorization and are "reimbursed based on your contracted rate." Rates are set in your participating-provider agreement, so ask Optum network management before you contract.' },
      { q: 'How often does UnitedHealthcare (Optum) reauthorize ABA?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale.' },
      { q: 'Is UnitedHealthcare (Optum) accepting new ABA providers?', a: 'Optum publishes its ABA credentialing criteria and an application route ("Join Our Autism/ABA Network" on Provider Express), not an open or closed status. Credentialing takes 45 to 120 days, and new agencies also need an Optum audit, which can take up to 90 days to schedule. Ask the Provider Service Line (1-877-614-0484) about need in your area.' },
      { q: 'Does UnitedHealthcare require RBT certification for ABA technicians?', a: 'Yes, or an equivalent. Optum\'s ABA FAQ says technicians working directly with children 1:1 must be a Registered Behavior Technician (RBT), a Board-Certified Autism Technician (BCAT) or a certified Applied Behavior Analysis Technician (ABAT), or hold another certification approved by network management. State rules may add to or override this.' },
      { q: 'Can the ABA assessment or BCBA supervision be done by telehealth with UnitedHealthcare?', a: 'On commercial plans Optum allows ABA telehealth only for 97155, 97156 and 97157. That covers BCBA supervision of the technician (97155), but not the assessment codes 97151 and 97152. The provider must have completed Optum\'s virtual-visits attestation, and claims carry POS 02 or POS 10.' },
    ],
  },
  'bluecross-blueshield-of-tennessee': {
    slug: 'bluecross-blueshield-of-tennessee',
    family: 'bcbst',
    cardDesc: 'Tennessee\'s Blue plan (commercial): ABA covered on fully insured plans since 2018, PA required, ABA codes on the CMS telehealth list, rates by contracted fee schedule.',
    assessmentPA: {
      value: 'Expected — BCBST\'s Commercial Prior Authorization List names "Applied Behavior Analysis (ABA)" among behavioral health services, and BCBST posts a dedicated ABA Therapy Services Assessment Request Form. The list is not broken down by code, and BCBST says authorization requirements "may vary per plan"',
      status: 'plan-dependent',
      cites: [{ title: 'BlueCross BlueShield of Tennessee — Commercial Prior Authorization List (26PED4280100, 04/26)', url: 'https://content.bcbst.com/api/public/content/prov-commercial-prior-auth-list.pdf' }, { title: 'BCBST — ABA Therapy Services Assessment Request Form (3/26)', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }, { title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026)', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' }],
      verifyVia: 'Availity (benefits and authorization check for the member\'s group) or BCBST at (423) 535-5717, option 2 — confirm whether the group requires PA for 97151/97152 before booking the assessment.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Required on plans that follow BCBST\'s commercial list — ABA is on the Commercial Prior Authorization List; in-state providers request it in Availity, out-of-state providers through Cohere, with the Initiation and Continuation of ABA Therapy form. Continuations are due "at least once every six months." Self-funded groups can differ',
      status: 'plan-dependent',
      cites: [{ title: 'BlueCross BlueShield of Tennessee — Commercial Prior Authorization List (26PED4280100, 04/26)', url: 'https://content.bcbst.com/api/public/content/prov-commercial-prior-auth-list.pdf' }, { title: 'BCBST — Initiation and Continuation of ABA Therapy form', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }, { title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026)', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' }],
      verifyVia: 'Availity benefits check for the member\'s group, or BCBST Provider Service 1-800-924-7141 — especially for self-funded groups, whose ABA coverage "may vary."',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes — autism spectrum disorder. BCBST\'s manual: "ABA has been approved for the treatment of Autism Spectrum Disorder." Its ABA forms ask for diagnostic confirmation ("diagnostic reports, doctor\'s orders, etc.") and a severity level',
      status: 'verified',
      cites: [{ title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026)', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' }, { title: 'BCBST — ABA Therapy Services Assessment Request Form (3/26)', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }],
    },
    payer: 'Blue Cross Blue Shield Tennessee',
    state: 'TN', kind: 'commercial',
    deliveryRules: {
      supervision: {
        value:
          'BCBST points to the BACB rather than setting its own number: "ABA providers using Registered Behavior Therapists (RBT) are expected to demonstrate compliance with the supervision guidelines outlined by the Behavior Analyst Certification Board." That puts the operative floor at the BACB\'s RBT supervision requirement. BCBST\'s behavioral health program descriptions add that the initial assessment and the behavior support plan each carry the signature of the licensed BCBA who wrote them.',
        status: 'verified',
        cites: [{ title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026), Applied Behavior Analysis', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' }, { title: 'BCBST — Behavioral Health Levels of Care Program Descriptions (effective Jan. 1, 2018)', url: 'https://content.bcbst.com/api/public/content/prov-behavioral-health-levels-of-care-program-descriptions.pdf' }],
      },
      concurrentBilling: {
        value:
          'Yes, when a protocol is modified. BCBST\'s commercial manual: "Providers should bill in a manner consistent with the CPT code descriptions. In addition, if the BCBA is directing an RBT, the client is present, and one or more protocols have been modified then 97155 may be billed concurrently with the RBT codes." Without a protocol change, the rule is one code for the time: "When the Board Certified/Licensed BCBA is physically present with the member (with or without the Registered Behavior Technician (RBT) being present) then the procedure code for the claim would be the applicable service the BCBA provides. If the RBT was alone with the member carrying out the service plan, then the code would be for the applicable service the RBT provides."',
        status: 'verified',
        cites: [{ title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026), Applied Behavior Analysis', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' }],
      },
      dailyLimits: {
        value:
          'Not published. BCBST\'s manual and ABA forms set no per-day or per-week ABA unit ceiling; the initiation and continuation form asks for requested hours per week per code and, at continuation, hours approved versus hours used. Tennessee\'s statute adds no hour cap either — it only requires ASD benefits no more restrictive than those for other neurological disorders, for insureds under 12.',
        status: 'unverified',
        cites: [{ title: 'BCBST — Initiation and Continuation of ABA Therapy form', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }, { title: 'Tenn. Code Ann. § 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' }],
        verifyVia: 'The member\'s benefit summary in Availity, or BCBST Provider Service 1-800-924-7141 — ask for any visit, hour or dollar limit on ABA for this group.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Published, in two BCBST documents. The commercial manual requires "Progress notes for each service contact documenting the date and time of service, duration/end time of service, the type of service provided, a summary of treatment interventions used, the treatment plan goals and objectives addressed in the session, and the name and credentials of service provider," with each treatment plan and review "signed by a member, family member, or legally appointed representative." BCBST\'s ABA program description is more specific: each service-encounter note should include "Signature, Date, and Credentials of the Servicing Professional (e.g., BCBA or RBT)" and "Signature and Date of Guardian/Caregiver (if training was provided)"; the initial assessment carries the "Signature of the licensed BCBA who completed the assessment"; and the behavior support plan is signed by the BCBA who developed it and by the member or representative. No signing deadline is stated.',
        status: 'verified',
        cites: [{ title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026), Treatment Record Requirements', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' }, { title: 'BCBST — Behavioral Health Levels of Care Program Descriptions (effective Jan. 1, 2018)', url: 'https://content.bcbst.com/api/public/content/prov-behavioral-health-levels-of-care-program-descriptions.pdf' }],
      },
      placeOfService: {
        value:
          'Home, clinic, school and community all appear — BCBST\'s ABA program description asks each progress note to record the "Location of Service (e.g., Home, Clinic, School, Community)" — but school has a narrow role: "Service in the school environment should be limited to ensuring consistency in plan implementation across all settings. Service in the school should not include developing a BSP for the school or addressing behavior for academic purposes." ABA organizations are credentialed at an outpatient level: "Services will be provided at an Outpatient Mental Health Clinic level of intensity." Telehealth is covered separately below.',
        status: 'verified',
        cites: [{ title: 'BCBST — Behavioral Health Levels of Care Program Descriptions (effective Jan. 1, 2018)', url: 'https://content.bcbst.com/api/public/content/prov-behavioral-health-levels-of-care-program-descriptions.pdf' }, { title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026), Credentialing', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' }],
      },
      billAsProvider: {
        value:
          'The code follows who delivered the time. "The RBT service codes can be used by Registered Behavior Technicians, Board Certified Assistant Behavior Analysts (BCaBA) or by a provider who has completed their training in Applied Behavior Analysis and is waiting to take the exam to become a Board Certified Behavior Analyst (BCBA)," and BCBST lists 97153HO for 97153 "administered by a physician or other qualified healthcare professional" (dates of service from 9/1/2019). Credentialing sets who can hold the contract: an individual Behavior Analyst must be "Licensed in the state of Tennessee as a Behavior Analyst" and, per the manual, "board-certified Behavior Analyst-Doctoral (BCBA D)"; an ABA organization must be "Licensed as a Mental Health Outpatient Facility" and "receive oversight from a licensed behavioral health or Behavior Analyst Certification Board (BACB) - certified professional." Which NPI goes in the rendering field is not stated.',
        status: 'verified',
        cites: [{ title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026)', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' }],
        verifyVia: 'BCBST provider network / credentialing for how a group should enroll its BCBAs, and your participation agreement for the rendering-provider field.',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'BCBST publishes no age limit for ABA. The state layer is thin: Tenn. Code Ann. § 56-7-2367 requires plans that cover neurological disorders to give ASD benefits "at least as comprehensive as those provided for other neurological disorders," and "These benefits and coverage for treatment shall be provided to any person less than twelve (12) years of age" — a parity rule, not an ABA mandate, and it "shall not expand the type or scope of treatment." The age answer for a given child comes from the benefit document.',
        status: 'plan-dependent',
        cites: [{ title: 'Tenn. Code Ann. § 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' }, { title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026)', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' }],
        verifyVia: 'Availity benefits check or BCBST Provider Service 1-800-924-7141 for the member\'s group.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'No recency window is published. BCBST\'s ABA forms ask for the "Initial/First Date ASD Diagnosed" and for diagnostic confirmation, but set no maximum age on the report.',
        status: 'unverified',
        cites: [{ title: 'BCBST — Initiation and Continuation of ABA Therapy form', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }],
        verifyVia: 'BCBST behavioral health UM, (423) 535-5717 option 2, when an older diagnostic report is all the family has.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'Not published. BCBST\'s commercial manual and ABA forms ask for diagnostic confirmation but name no required diagnosing specialty or license.',
        status: 'unverified',
        cites: [{ title: 'BCBST — ABA Therapy Services Assessment Request Form (3/26)', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }],
        verifyVia: 'BCBST behavioral health UM, (423) 535-5717 option 2.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value:
          'No diagnostic instrument is named. What BCBST does specify is the ABA assessment itself: its program description lists "Graphed Baseline Data for Target Behaviors," a "Functional Assessment," hypotheses about the function of target behaviors "Based on Direct Observations and Interviews," measurable time-limited goals, and service recommendations with units, frequency and expected duration.',
        status: 'unverified',
        cites: [{ title: 'BCBST — Behavioral Health Levels of Care Program Descriptions (effective Jan. 1, 2018)', url: 'https://content.bcbst.com/api/public/content/prov-behavioral-health-levels-of-care-program-descriptions.pdf' }],
        verifyVia: 'BCBST behavioral health UM, (423) 535-5717 option 2 — ask whether a specific ASD instrument is expected in the diagnostic report.',
        blocker: 'per-case',
      },
      referral: {
        value:
          'Not stated as a requirement. BCBST\'s ABA forms ask for "diagnostic confirmation like diagnostic reports, doctor\'s orders, etc.," which treats a doctor\'s order as one acceptable piece of evidence rather than a mandatory referral.',
        status: 'unverified',
        cites: [{ title: 'BCBST — ABA Therapy Services Assessment Request Form (3/26)', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' }],
        verifyVia: 'The member\'s benefit summary in Availity — some plan designs require a referral for specialty services.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'Yes in principle, with a group-level exception. BCBST\'s commercial manual: "We reimburse for services rendered via telehealth in accordance with the Tennessee Telehealth mandate (TCA 56-7-1003)," but "This reimbursement may not apply to certain self-funded groups if telehealth is listed as a coverage exclusion in their contract." Its code rule keys off Medicare: "Any service code not on the current CMS Telehealth qualifying code list … billed by the originating or distant site provider with POS code 02 will be denied as a non-contracted service." Every ABA code — 97151 through 97158, 0362T and 0373T — is on the CMS calendar-year 2026 telehealth list. Claims "must be billed with the correct place of service (POS) 10: Telehealth provided in patient\'s home or POS 02"; modifiers such as 95 are informational. Tennessee\'s statute requires coverage of covered services delivered by provider-based telemedicine "consistent with" in-person coverage, and does not require a prior in-person visit for "a patient who is receiving an initial behavioral health evaluation or assessment." BCBST publishes no ABA-specific telehealth code list for commercial plans.',
        status: 'plan-dependent',
        cites: [{ title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026), Telehealth Originating Site Fees and Billing Guidelines', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' }, { title: 'CMS — List of Telehealth Services, Calendar Year 2026 (97151–97158, 0362T, 0373T)', url: 'https://www.cms.gov/files/zip/list-telehealth-services-calendar-year-2026.zip' }, { title: 'Tenn. Code Ann. § 56-7-1003 (provider-based telemedicine coverage)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-1003/' }],
        verifyVia: 'Availity benefits check for the member\'s group — confirm telehealth is not a contract exclusion (self-funded groups) and that the authorization includes telehealth hours.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'BCBST\'s commercial manual: "For urgent care, the decision must be completed as soon as possible based on the clinical situation, but no later than 72 hours of the receipt of the request," and "For non-urgent care, the decision must be made within 15 calendar days or seven (7) days for non-urgent care requests submitted electronically for Fully Insured and Marketplace members." Fully insured plans are also under Tennessee\'s Prior Authorization Fairness Act: a non-urgent request is "deemed approved within seven (7) calendar days" if the carrier fails to decide, ask for the missing information, or flag a medical-necessity question; it gets "an additional five (5) calendar days" after the provider responds, and "the prior authorization request process must not exceed seventeen (17) calendar days." An urgent request is deemed approved after "seventy-two (72) hours plus, if applicable, one (1) additional business day." Self-funded ERISA plans follow 29 CFR 2560.503-1: pre-service decisions "not later than 15 days after receipt of the claim," urgent care "not later than 72 hours after receipt of the claim," and an urgent request to extend care decided within 24 hours if made "at least 24 hours prior to the expiration." Continuations of ABA are due "at least once every six months."',
        status: 'plan-dependent',
        cites: [{ title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026), Utilization Management', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' }, { title: 'Tenn. Code Ann. 56-7-3705 — Prior Authorization Fairness Act timeframes', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-3705/' }, { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' }, { title: 'BCBST — Initiation and Continuation of ABA Therapy form', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' }],
        verifyVia: 'Availity: confirm whether the member is fully insured or self-funded, which decides which clock applies, and submit electronically for the 7-day track.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'BCBST: "Claims should be submitted to the primary carrier prior to submission to us. Upon claim submission to us, please provide a copy of the remittance advice from the primary carrier." When BCBST is secondary it uses maintenance of benefits: "If the primary insurance carrier\'s payment amount is the same or more than what we would\'ve paid, we won\'t make any additional payment," and the provider "can\'t bill the member for any amount over the maximum allowable charge." Between two parents\' group plans, Tennessee\'s rule is the birthday rule — "the benefits of the Plan of the parent whose birthday falls earlier in a year are determined before those of the Plan of the parent whose birthday falls later in that year," and on the same birthday the plan that covered the parent longer goes first. If the child also has TennCare, BCBST pays first; Medicaid rejects a claim back to the provider when other coverage is known. TRICARE pays after BCBST ("TRICARE shall be last pay").',
        status: 'verified',
        cites: [{ title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026), Coordination of Benefits and Maintenance of Benefits', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' }, { title: 'Tenn. Comp. R. & Regs. 0780-01-53 — Coordination of Benefits (group contracts)', url: 'https://publications.tnsosfiles.com/rules/0780/0780-01/0780-01-53.pdf' }, { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' }, { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' }],
      },
    },
    pill: 'Payer Guide · BlueCross BlueShield · Tennessee',
    h1: 'BlueCross BlueShield of Tennessee ABA coverage: the intake guide.',
    metaTitle: 'BlueCross BlueShield of Tennessee ABA Coverage, Telehealth & Fee Schedule | Carelu',
    metaDescription:
      'How BlueCross BlueShield of Tennessee (commercial) handles ABA — fully insured coverage since 2018, prior authorization through Availity, 97155 concurrent billing, telehealth for ABA codes, contracted fee schedules, and Tennessee\'s parity-only autism statute.',
    intro: [
      'BlueCross BlueShield of Tennessee (BCBST) is the state\'s Blue plan. This guide covers its commercial plans; its TennCare plans, BlueCare and TennCareSelect, have their own guides. BCBST\'s commercial manual says ABA "is covered by the Federal Employee Program (FEP) as of 1/1/2017, by Postal Service Health Benefits (PSHB) as of 1/1/2025, and BCBST fully insured plans as of 1/1/2018," while "Coverage of ABA services for self-funded plans may vary and it is the provider\'s responsibility to verify coverage." So the first intake question is the funding type.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes on fully insured plans (since 1/1/2018), FEP (since 2017) and PSHB (since 2025); self-funded groups vary' },
      { label: 'Prior auth', value: 'ABA is on BCBST\'s Commercial Prior Authorization List — Availity (in-state) or Cohere (out-of-state)' },
      { label: 'Telehealth', value: 'Reimbursed under TCA 56-7-1003; codes must be on the CMS telehealth list (all ABA codes are for 2026); POS 02/10; some self-funded groups exclude it' },
      { label: 'Fee schedule', value: 'Not public — behavioral health pays on your provider-contracted Behavioral Health Fee Schedule' },
      { label: 'State mandate', value: 'Tenn. Code Ann. § 56-7-2367' },
      { label: 'Mandate age', value: 'Statute keyed to under-12 (parity-style, not an ABA mandate)' },
      { label: 'Mandate caps', value: 'No ABA-specific benefit — carrier policy governs' },
      { label: 'Exempt from mandate', value: 'Plans without neurological-disorder benefits; self-funded ERISA to the extent preempted' },
      { label: 'Licensure', value: 'TN Licensed Behavior Analyst (Applied Behavior Analyst Licensing Committee, Rules 1180-05)' },
    ],
    sections: [
      {
        h2: 'Does BCBST allow ABA by telehealth?',
        body: [
          'Yes, with two checks. BCBST reimburses telehealth "in accordance with the Tennessee Telehealth mandate (TCA 56-7-1003)," and it denies telehealth claims only for codes that are not on Medicare\'s telehealth list — every ABA code, 97151 through 97158 plus 0362T and 0373T, is on the CMS list for calendar year 2026. Bill POS 10 for telehealth in the home or POS 02 elsewhere; the 95 and GT modifiers are informational. The two checks: some self-funded groups list telehealth as a contract exclusion, and the authorization has to include the telehealth hours. Tennessee\'s telemedicine statute requires coverage "consistent with" in-person coverage, and waives the prior in-person visit for an initial behavioral health evaluation or assessment.',
        ],
        cites: [
          { title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026)', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' },
          { title: 'CMS — List of Telehealth Services, Calendar Year 2026', url: 'https://www.cms.gov/files/zip/list-telehealth-services-calendar-year-2026.zip' },
          { title: 'Tenn. Code Ann. § 56-7-1003 (provider-based telemedicine coverage)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-1003/' },
        ],
      },
      {
        h2: 'What is BCBST\'s fee schedule for ABA?',
        body: [
          'BCBST does not publish a public ABA fee schedule. Its manual says behavioral health services are reimbursed on the "provider-contracted Behavioral Health Fee Schedule," with new codes priced by "RBRVS as defined by the Federal Register, GPCIs for Tennessee, and appropriate network conversion factor," and that the plan "will pay the Maximum Allowable Charge (MAC)" under the reimbursement schedules — "Charges higher than the reimbursement rates aren\'t eligible for reimbursement." Your rates are in your BCBST network attachment; for a quote before contracting, ask BCBST provider network management. Being on the fee schedule is not a guarantee of payment: final reimbursement depends on eligibility, code edits, cost sharing, benefit exclusions and authorization. BlueCare (TennCare) rates are a separate contract — see the BlueCare Tennessee guide.',
        ],
        cites: [
          { title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026), Reimbursement', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' },
        ],
      },
      {
        h2: 'Billing ABA with BCBST',
        body: [
          'Bill the code that matches who was delivering the time. When the BCBA is physically present, the claim carries the BCBA\'s service; when the RBT is alone with the member, it carries the RBT\'s service. The exception is 97155: "if the BCBA is directing an RBT, the client is present, and one or more protocols have been modified then 97155 may be billed concurrently with the RBT codes." RBT codes may be billed for RBTs, BCaBAs, or a provider who has finished ABA training and is waiting to sit the BCBA exam, and BCBST recognizes 97153HO when a qualified professional delivers 97153 personally. RBT supervision follows the BACB\'s guidelines.',
        ],
        cites: [
          { title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026), Applied Behavior Analysis', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' },
        ],
      },
      {
        h2: 'The Tennessee mandate: what it guarantees (and doesn\'t)',
        body: [
          'Tennessee\'s statute is a parity rule, not an ABA mandate. A plan that "provides benefits for neurological disorders" must cover ASD treatment "at least as comprehensive as those provided for other neurological disorders," for "any person less than twelve (12) years of age," with deductibles, copayments and limits "no more stringent" than for other neurological disorders; it "shall not expand the type or scope of treatment." BCBST\'s own coverage decision goes further than the statute on fully insured plans (ABA covered since 2018), which is why the funding type, not the statute, is the load-bearing intake question.',
        ],
        cites: [
          { title: 'Tenn. Code Ann. § 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' },
          { title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026)', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' },
        ],
      },
      {
        h2: 'Licensure and credentialing',
        body: [
          'Tennessee licenses behavior analysts: only a holder of a license from the Applied Behavior Analyst Licensing Committee may use the title "Licensed Behavior Analyst" and practice ABA as defined in T.C.A. § 63-11-302. BCBST\'s credentialing criteria for an individual Behavior Analyst are stricter than the license alone — "Licensed in the state of Tennessee as a Behavior Analyst" and "board-certified Behavior Analyst-Doctoral (BCBA D)" — while an ABA organization credentials as a facility "Licensed as a Mental Health Outpatient Facility" with oversight "from a licensed behavioral health or Behavior Analyst Certification Board (BACB) - certified professional." Most BCBA-level practices therefore contract as an organization.',
        ],
        cites: [
          { title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026), Credentialing', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' },
          { title: 'Rules of the TN Applied Behavior Analyst Licensing Committee, Ch. 1180-05 (rev. May 2025)', url: 'https://publications.tnsosfiles.com/rules/1180/1180-05.20250507.pdf' },
        ],
      },
      {
        h2: 'Is BCBST\'s ABA network open to new providers?',
        body: [
          'BCBST does not run an any-willing-provider network. Its commercial manual (effective October 1, 2026) says its "ability to credential providers, as well as maintain a separate network and not include any willing provider, isn\'t considered discrimination," and network need is a recognized reason for a denial: providers "denied participation in a BlueCross network for reason other than network need may not reapply for participation for a least one year."',
          'Who can be credentialed matters for ABA. The manual\'s credentialing requirements for an individual "Behavior Analyst (CBA)" are a Tennessee Behavior Analyst license and certification as a "board-certified Behavior Analyst-Doctoral (BCBA D)." A BCBA without the doctoral credential does not meet that individual listing as written, so ask BCBST provider network how your practice should enroll.',
        ],
        cites: [
          { title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective October 1, 2026)', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Commercial BCBST or BlueCare', desc: 'Same company, different rulebooks — BlueCare and TennCareSelect are TennCare plans with their own guides.' },
      { title: 'Fully insured or self-funded', desc: 'Fully insured plans have covered ABA since 1/1/2018; self-funded coverage "may vary," and some self-funded groups exclude telehealth.' },
      { title: 'Diagnosis + severity level', desc: 'BCBST\'s ABA forms ask for diagnostic confirmation (reports, doctor\'s orders) and the severity level (1–3).' },
      { title: 'Telehealth plans', desc: 'If any hours will be remote, request them as telehealth in the authorization and bill POS 10 or 02.' },
      { title: 'Other coverage', desc: 'Bill the primary first and attach its remittance advice; BCBST pays secondary only up to what it would have paid.' },
    ],
    sources: [
      { title: 'BlueCross BlueShield of Tennessee Provider Administration Manual — Commercial and Medicare Advantage (effective July 1, 2026)', url: 'https://content.bcbst.com/api/public/content/prov-bcbst-pam.pdf' },
      { title: 'BlueCross BlueShield of Tennessee — Commercial Prior Authorization List (04/26)', url: 'https://content.bcbst.com/api/public/content/prov-commercial-prior-auth-list.pdf' },
      { title: 'BCBST — ABA Therapy Services Assessment Request Form (3/26)', url: 'https://content.bcbst.com/api/public/content/aba_therapy_assessment_request_form.pdf' },
      { title: 'BCBST — Initiation and Continuation of ABA Therapy form', url: 'https://content.bcbst.com/api/public/content/aba_initiation_continuation_for_therapy.pdf' },
      { title: 'BCBST — Behavioral Health Levels of Care Program Descriptions (effective Jan. 1, 2018)', url: 'https://content.bcbst.com/api/public/content/prov-behavioral-health-levels-of-care-program-descriptions.pdf' },
      { title: 'CMS — List of Telehealth Services, Calendar Year 2026', url: 'https://www.cms.gov/files/zip/list-telehealth-services-calendar-year-2026.zip' },
      { title: 'Tenn. Code Ann. § 56-7-1003 (provider-based telemedicine coverage)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-1003/' },
      { title: 'Tenn. Code Ann. § 56-7-2367 (autism/neurological parity)', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-2367/' },
      { title: 'Tenn. Code Ann. 56-7-3705 — Prior Authorization Fairness Act timeframes', url: 'https://codes.findlaw.com/tn/title-56-insurance/tn-code-sect-56-7-3705/' },
      { title: 'Tenn. Comp. R. & Regs. 0780-01-53 — Coordination of Benefits (group contracts)', url: 'https://publications.tnsosfiles.com/rules/0780/0780-01/0780-01-53.pdf' },
      { title: 'Rules of the TN Applied Behavior Analyst Licensing Committee, Ch. 1180-05 (rev. May 2025)', url: 'https://publications.tnsosfiles.com/rules/1180/1180-05.20250507.pdf' },
    ],
    faq: [
      { q: 'Does BCBS Tennessee cover ABA therapy?', a: 'Yes on fully insured BlueCross BlueShield of Tennessee plans (since 1/1/2018), FEP and PSHB. Self-funded employer plans "may vary," so verify the member\'s group in Availity. ABA needs prior authorization and an autism spectrum disorder diagnosis.' },
      { q: 'Does BCBS Tennessee allow telehealth for ABA?', a: 'Yes, generally. BCBST reimburses telehealth under Tennessee\'s telehealth law and denies only codes that are not on Medicare\'s telehealth list; all ABA codes (97151-97158, 0362T, 0373T) are on the 2026 list. Bill POS 10 (home) or 02, and make sure the authorization covers telehealth hours. Some self-funded groups exclude telehealth in their contract. For BlueCare (TennCare), see the BlueCare guide — its approved code list also includes every ABA code.' },
      { q: 'What is the fee schedule for BCBS Tennessee?', a: 'BCBST does not publish a public ABA fee schedule. Behavioral health services pay on the provider-contracted Behavioral Health Fee Schedule in your BCBST network attachment, with new codes priced from Medicare RVUs and a network conversion factor. Ask BCBST network management for rates before contracting; BlueCare (TennCare) rates are a separate contract.' },
      { q: 'Can 97155 be billed at the same time as 97153 with BCBST?', a: 'Yes, when the BCBA is directing the RBT, the client is present and at least one protocol is modified — BCBST\'s manual says 97155 "may be billed concurrently with the RBT codes" in that case.' },
      { q: 'Is BCBS Tennessee accepting new ABA providers?', a: 'There is no published open or closed status. BCBST\'s manual says it may maintain a network that does not include any willing provider and can deny participation for network need. For an individual Behavior Analyst its credentialing list requires a Tennessee license and BCBA-D certification, so ask BCBST provider network about joining as a group.' },
      { q: 'Can BCBA supervision (97155) be done by telehealth with BCBS Tennessee?', a: 'Generally yes. BCBST pays telehealth for codes on Medicare\'s telehealth list, and 97155 is on the 2026 list along with the other ABA codes. Bill POS 10 or 02 and include the telehealth hours in the authorization. BCBST publishes no cap on the share of supervision done remotely; BACB supervision rules still apply, and some self-funded groups exclude telehealth.' },
    ],
  },
};

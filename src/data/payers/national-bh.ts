import type { PayerConfig } from './types.js';

/* ================================================================
   NATIONAL BEHAVIORAL-HEALTH CARVE-OUT ADMINISTRATORS.
   These are not insurers. They sit between the family’s card and the
   ABA authorization: the card says one name, the ABA benefit is
   administered by another. Each guide answers the four questions an
   intake team actually has — how do I recognize this administrator is
   in play, who do I call, what do they require, and how is that
   different from calling the insurer.
   ================================================================ */

export const nationalBhPayers: Record<string, PayerConfig> = {
  'carelon-behavioral-health': {
    slug: 'carelon-behavioral-health',
    cardDesc: 'The BH carve-out behind Empire Plan, EmblemHealth and several Anthem/Wellpoint books — one national ABA auth form.',
    family: 'carelon',
    payer: 'Carelon Behavioral Health',
    state: 'US', kind: 'commercial',
    assessmentPA: {
      value: 'Required — the national ABA Authorization Request form (eff. 1/1/2026) has an “Initial Assessment” box; 97151 is capped at 32 units (8 hours) for the initial and 32 more for reassessment with clinical justification',
      status: 'verified',
      cites: [
        { title: 'Carelon ABA Authorization Request form (eff. 1/1/2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-authorization-request-form.pdf' },
        { title: 'Carelon ABA Provider Treatment Report Guidelines (v1.5)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-treatment-report-guidelines.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — “Initial Treatment” and every “Concurrent Request” go on the same form, with a full treatment report attached',
      status: 'verified',
      cites: [
        { title: 'Carelon ABA Authorization Request form (eff. 1/1/2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-authorization-request-form.pdf' },
        { title: 'Carelon ABA Provider Treatment Report Guidelines (v1.5)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-treatment-report-guidelines.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — Carelon’s national ABA treatment-report guidelines are written for members with an autism spectrum diagnosis, and the report must carry the diagnosis date plus the name and title of the diagnosing professional. The clinical criteria themselves are set per client and per state, not by one national ABA policy (Massachusetts, for example, also admits a genetically confirmed Down syndrome diagnosis).',
      status: 'plan-dependent',
      cites: [
        { title: 'Carelon ABA Provider Treatment Report Guidelines (v1.5)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-treatment-report-guidelines.pdf' },
        { title: 'Carelon Behavioral Health — Medical Necessity Criteria', url: 'https://www.carelonbehavioralhealth.com/providers/resources/medical-necessity-criteria' },
        { title: 'Carelon Massachusetts Medical Necessity Criteria (upd. 4/29/2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/massachusetts-medical-necessity-criteria.pdf' },
      ],
      verifyVia: 'Ask which criteria set governs this client plan and where it is published — Carelon National Provider Service Line 800-397-1630. The national ABA Provider Treatment Report Guidelines establish that the report must carry the diagnosis, its date and the name and title of the diagnosing professional; the diagnostic criteria themselves are set per client and per state, and a client standard can be wider (Massachusetts also admits a genetically confirmed Down syndrome diagnosis) or tighter than the default.',
      blocker: 'per-case',
    },
    pill: 'Payer Guide · Carelon Behavioral Health',
    h1: 'Carelon Behavioral Health: the ABA carve-out guide.',
    metaTitle: 'Carelon Behavioral Health ABA Prior Auth & Intake Guide | Carelu',
    metaDescription:
      'Carelon Behavioral Health administers ABA for plans whose cards say something else — The Empire Plan, EmblemHealth, several Anthem and Wellpoint books. The national ABA authorization form, treatment-report standards, supervision rule, and how to spot a Carelon-administered plan at intake.',
    intro: [
      'Carelon Behavioral Health is not an insurer. It is a third-party administrator and utilization-review agent that runs the behavioral health benefit for somebody else’s plan — employer groups, commercial and exchange health plans, Medicare Advantage plans, managed Medicaid plans, and state and local government programs. That is its own description of itself in its provider handbook, and it is the whole reason this page exists: a family hands you an Empire Plan card issued by New York State, or an EmblemHealth card, and the ABA authorization does not go to the name on the front of the card. It goes to Carelon.',
      'Intake teams lose days to this. They verify medical benefits with the plan, get a clean answer, book the assessment — and only when the claim denies do they learn that behavioral health was carved out to a separate administrator with its own network, its own forms, its own portal and its own 90-day filing clock. The good news is that Carelon publishes a genuinely national ABA authorization form and a national treatment-report standard, so once you know Carelon is in play, the paperwork is knowable in advance.',
    ],
    atGlance: [
      { label: 'What it is', value: 'Behavioral health TPA / utilization-review agent — not the insurer' },
      { label: 'Who you call', value: 'National Provider Service Line 800-397-1630 (Mon–Fri, 8 a.m.–8 p.m. ET)' },
      { label: 'ABA auth form', value: 'Carelon ABA Authorization Request, effective 1/1/2026 — initial assessment, initial treatment and concurrent all on one form' },
      { label: 'Assessment cap', value: '97151 up to 32 units (8 hours) initial; 32 more for reassessment with justification' },
      { label: 'Supervision rule', value: '97153 is delivered by a technician “receiving 1 hour of supervision for every 5 to 10 hours of direct treatment”' },
      { label: 'Portals', value: 'Availity Essentials, ProviderConnect and eServices — which one depends on the client plan' },
      { label: 'Timely filing', value: '90 calendar days from date of service unless the provider agreement says otherwise' },
      { label: 'Clinical criteria', value: 'Set per client and per state — there is no single national ABA medical-necessity document' },
    ],
    sections: [
      {
        h2: 'How to tell this plan is administered by Carelon',
        cites: [
          { title: 'NYS Civil Service — Empire Plan Carriers and Programs', url: 'https://www.cs.ny.gov/employee-benefits/nyship/shared/providers/programs-contact-pa.cfm' },
          { title: 'EmblemHealth Provider Manual Ch. 26 — Behavioral Health Services (4/30/2026)', url: 'https://www.emblemhealth.com/content/dam/emblemhealth/pdfs/provider-manual/behavioral-health-services.pdf' },
          { title: 'Carelon Behavioral Health Provider Handbook', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/carelon-behavioral-health-provider-handbook.pdf' },
        ],
        body: [
          'The signal is almost never the front of the card. It is the back — and the fact that the behavioral health phone number is different from the medical one.',
          'The Empire Plan is the cleanest illustration in the country. New York State Civil Service names three different administrators for one plan: UnitedHealthcare Insurance Company of New York runs the Medical/Surgical Program, Anthem Blue Cross runs the Hospital Program, and Carelon Behavioral Health, Inc. runs the Mental Health and Substance Use Program. All three sit behind a single number, 1-877-7-NYSHIP, and you reach Carelon by pressing 3. A family says “we have UnitedHealthcare” and they are not wrong — but the ABA authorization is Carelon’s. Applied behavior analysis providers and ABA agencies are named practitioner types in the Empire Plan MHSU program, so this is not a coverage question; it is a routing question.',
          'EmblemHealth works the same way and says so in writing: behavioral health runs through two Carelon-administered programs — the EmblemHealth Behavioral Management Program (BMP) for plans underwritten by EmblemHealth Plan, Inc., and the Emblem Behavioral Health Services Program (EBHSP) for plans underwritten by HIP or EmblemHealth Insurance Company — and the manual tells providers to look at the back of the member’s ID card to find out which one applies. Carelon “manages all behavioral health covered services including utilization management and case management,” and behavioral health claims go to Carelon through ProviderConnect or a clearinghouse, not to EmblemHealth.',
        ],
        list: [
          { title: 'Back-of-card phone number', desc: 'A behavioral health line that differs from the medical member-services line is the single most reliable tell. On the Empire Plan it is option 3 of 1-877-7-NYSHIP; on an EmblemHealth card it is the BMP or EBHSP line.' },
          { title: 'A program name, not a carrier name', desc: '“Behavioral Management Program,” “Behavioral Health Services Program,” “Mental Health and Substance Use Program” — named programs on the card almost always mean a carve-out administrator.' },
          { title: 'Eligibility comes back thin on BH', desc: 'A 271 response from the medical plan that returns medical, surgical and pharmacy benefits but is silent or non-specific on mental health service types is a prompt to ask who administers behavioral health — not evidence that ABA is uncovered.' },
          { title: 'The state appendix in the handbook', desc: 'Carelon’s provider handbook lists state/plan-specific supplements for Anthem Blue Cross and Blue Shield in Colorado, Connecticut, Kentucky, Maine, Missouri, New Hampshire and Virginia, plus Wellpoint Florida and Wellpoint New Jersey and Virginia Anthem HealthKeepers Plus. If your family’s plan is on that list, assume Carelon.' },
          { title: 'Historic Beacon branding', desc: 'Carelon was Beacon Health Options. Its own documents say so: the autism provider manual it hosts for San Francisco Health Plan opens “Today we are Carelon Behavioral Health. We are working on updating all documents, but some historic references to Beacon may remain.” A Beacon reference on a plan document is a Carelon reference.' },
        ],
      },
      {
        h2: 'Who you actually call — and which portal',
        cites: [
          { title: 'Carelon Behavioral Health Provider Handbook', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/carelon-behavioral-health-provider-handbook.pdf' },
          { title: 'EmblemHealth Provider Manual Ch. 26 — Behavioral Health Services (4/30/2026)', url: 'https://www.emblemhealth.com/content/dam/emblemhealth/pdfs/provider-manual/behavioral-health-services.pdf' },
        ],
        body: [
          'Carelon runs what it calls a Provider Digital Front Door built on three surfaces, and the Availity-versus-own-portal question has a precise answer: it is both, linked. Availity Essentials is the multi-payer front end for eligibility, benefits, claim detail, prior-authorization submission and claim status. ProviderConnect and eServices are Carelon’s own portals, and which one you use depends on the client plan — the handbook is explicit that “depending on your plan, you may need to use both.” ProviderConnect handles authorization and certification requests for all levels of care, concurrent review and discharge reporting, authorization letters and provider summary vouchers; eServices handles real-time claim status, EOB printing, authorization requests and units-used checks.',
          'Set up single sign-on once and stop guessing: register a ProviderConnect and/or eServices account, register an Availity account, then link them in the Availity payer space under organization administration. After that the Carelon portals open from Availity.',
          'The phone numbers that matter at intake: the National Provider Service Line is 800-397-1630 (Mon–Fri, 8 a.m.–8 p.m. ET) for network, demographic and general provider questions; general claim inquiries are 800-888-3944; ProviderConnect direct-submission technical support is 888-247-9311. EDI claims go through Availity as Carelon’s clearinghouse partner (Availity customer service 800-282-4548).',
          'One thing Carelon deliberately does not publish nationally: the payer ID. The handbook says to find the correct payer ID in the client- and state-specific guidelines on its website, or to search Availity’s payer list. Because Carelon is administering many different sponsors’ benefits, behavioral health claims for two families both “with Carelon” can carry different payer IDs. Capture the plan name at intake, not just “Carelon.”',
        ],
      },
      {
        h2: 'What Carelon requires: one national ABA form, one national report standard',
        cites: [
          { title: 'Carelon ABA Authorization Request form (eff. 1/1/2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-authorization-request-form.pdf' },
          { title: 'Carelon ABA Provider Treatment Report Guidelines (v1.5)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-treatment-report-guidelines.pdf' },
        ],
        body: [
          'Carelon publishes two ABA documents in the global (national) section of its forms library, and between them they define the whole submission. The ABA Authorization Request form, effective 1/1/2026, covers initial assessment, initial treatment and concurrent requests on a single sheet — so the assessment itself is an authorized event, not a free first step. It asks for the patient’s employer/benefit plan by name (another reminder that Carelon is administering somebody else’s benefit), the supervising BCBA/LBA/LABA with certification number, state, NPI and Carelon provider ID, the group TIN, and the program setting: home, facility/clinic, school or other.',
          'Every code is requested in 15-minute units (four units to the hour), with the form itself carrying the limits and the conditions:',
        ],
        list: [
          { title: '97151 — behavior identification assessment', desc: 'Administered by a physician/QHP. Up to 32 units (8 hours) for the initial and up to 32 units for a reassessment with clinical justification.' },
          { title: '97152 and 0362T — supporting assessment', desc: 'Technician-administered (0362T with two or more technicians and the QHP on-site for destructive behavior). Both explicitly require clinical justification.' },
          { title: '97153 — direct 1:1 treatment', desc: 'By a technician under the direction of the physician/QHP, “receiving 1 hour of supervision for every 5 to 10 hours of direct treatment.” Requested as hours per week plus units.' },
          { title: '97155 / 0373T — protocol modification', desc: 'By the physician/QHP; 97155 may be used for direction of technician (supervision) face-to-face. Requested as hours per day and days per week.' },
          { title: '97154 / 97158 — group', desc: 'Technician-delivered and QHP-delivered group adaptive behavior treatment, two or more patients.' },
          { title: '97156 / 97157 — family guidance', desc: 'Individual family and multiple-family group training, with or without the patient present.' },
        ],
      },
      {
        h2: 'The treatment report is where authorizations are won or lost',
        cites: [
          { title: 'Carelon ABA Provider Treatment Report Guidelines (v1.5)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-treatment-report-guidelines.pdf' },
        ],
        body: [
          'The ABA Provider Treatment Report Guidelines are a fourteen-section specification for the initial packet and a nine-section specification for the concurrent report. Several requirements are the kind that get a resubmission rather than an approval if intake did not gather the inputs:',
        ],
        list: [
          { title: 'Diagnosis provenance, not just a code', desc: 'The report must carry the diagnosis with its date and the name and title of the professional who made it, the date(s) of the original assessment, and the name, title and credential of the assessor — plus the supervising BCBA, with the date of change and the prior supervisor if the case changed hands.' },
          { title: 'Two direct observations', desc: 'A minimum of two direct observations of the member is recommended, alongside named indirect sources (caregiver interview, records reviewed such as the IEP and prior ABA reports).' },
          { title: 'Goals must not duplicate the IEP', desc: 'Objectives “should neither be educational in nature nor overlap IEP objectives,” and any that do require written justification. Get the IEP at intake, and read it before you write goals.' },
          { title: 'Coordination of care, documented', desc: 'The report asks directly whether you have communicated with the psychotropic prescriber, with the PCP, and with other behavioral health providers — and whether the communication or the family’s declination was documented. Releases signed at intake are the difference between answering yes and answering no.' },
          { title: 'Concurrent reports have a window', desc: 'All progress reports are due at minimum two weeks before, and no more than 30 days before, the authorization end date. Graphed per-goal data over the authorization period is mandatory, and data may not be aggregated or averaged by month or quarter unless the goal was written that way.' },
          { title: 'Hours requested code by code', desc: 'The summary must break the request into CPT code, description, total hours, hours per week, and the location where services will be delivered.' },
        ],
      },
      {
        h2: 'Where Carelon differs from calling the insurer',
        cites: [
          { title: 'Carelon Behavioral Health — Medical Necessity Criteria', url: 'https://www.carelonbehavioralhealth.com/providers/resources/medical-necessity-criteria' },
          { title: 'Carelon Massachusetts Medical Necessity Criteria (upd. 4/29/2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/massachusetts-medical-necessity-criteria.pdf' },
          { title: 'Carelon Behavioral Health Provider Handbook', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/carelon-behavioral-health-provider-handbook.pdf' },
        ],
        body: [
          'The biggest structural difference: there is no single Carelon ABA medical-necessity policy to read the way you would read a carrier’s clinical policy bulletin. Carelon’s Corporate Quality Medical Management Committee “adopts, reviews, revises, and approves Medical Necessity Criteria per client and regulatory requirements,” and the criteria vary by state, contract and member benefit. Its own selection order is: CMS NCDs/LCDs for Medicare members first, then custom client criteria, then ASAM for substance use, then InterQual Behavioral Health, and only if none of those apply does Carelon’s national criteria set govern. In practice that means the right question on a benefits call is not “what are Carelon’s ABA criteria” but “which criteria set applies to this client, and where is it published.”',
          'Where a client criteria set does exist for ABA, it can be very specific. Carelon’s Massachusetts criteria (updated 4/29/2026) admit ABA for members under 21 with a confirmed ASD diagnosis made by a licensed physician, APRN, PA or psychologist experienced in autism, or with a Down syndrome diagnosis confirmed by genetic testing; they authorize an initial assessment first and then require up to 12 hours of direct and indirect assessment within 45 calendar days to produce the initial treatment plan; and they require at least two direct observations, one of them in the home or a naturally occurring community setting, plus formal assessment data from three categories — a validated skill-based or curriculum tool, a standardized treatment-impact measure, and a family/caregiver impact measure. That is a Massachusetts client standard, not a national one; do not carry it to another Carelon plan.',
          'Second difference: network membership does not transfer. Contracting with the health plan does not put you in the Carelon network, and Carelon maintains its own rostering machinery — including a distinct “Roster for ABA Paraprofessional Provider” form alongside its group, facility and supervised-clinician-group rosters. Third: the clock is Carelon’s. Unless the provider agreement says otherwise, claims must be filed within 90 calendar days of the date of service, and claims that do not match the authorization can be delayed on that basis alone.',
          'Carelon also runs several public-sector ABA programs that already have their own guides in this directory — Maryland’s Medicaid behavioral health ASO (see our Maryland Medicaid guide), the Massachusetts Behavioral Health Partnership (MBHP), Wellpoint New Jersey and Simply Healthcare in Florida. The commercial carve-out described here shares the portal and the handbook with those programs, but not the clinical criteria or the fee schedule.',
        ],
      },
    ],
    collect: [
      { title: 'A photo of BOTH sides of the card', desc: 'The behavioral health administrator and its phone number live on the back. Front-only card photos are the root cause of most carve-out misroutes.' },
      { title: 'The employer or benefit plan name', desc: 'Carelon’s own ABA form asks for it, the applicable medical-necessity criteria depend on it, and the behavioral health payer ID depends on it. “Carelon” alone is not enough to bill.' },
      { title: 'Diagnosis packet with provenance', desc: 'The DSM diagnosis, the date it was made, and the name, title and credential of the diagnosing professional — all three appear on the treatment report.' },
      { title: 'The IEP and school schedule', desc: 'Goals may not duplicate IEP objectives without justification, and the auth form asks whether the setting is home, clinic, school or other.' },
      { title: 'Releases for PCP, prescriber and other BH providers', desc: 'The treatment report asks whether coordination happened and whether it was documented. Sign the releases at intake, not at reauthorization.' },
      { title: 'Prior ABA history and the outgoing provider', desc: 'Concurrent reports require gaps in treatment, staff changes and prior authorization end dates — easier to capture on day one than to reconstruct.' },
    ],
    sources: [
      { title: 'Carelon Behavioral Health Provider Handbook', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/carelon-behavioral-health-provider-handbook.pdf' },
      { title: 'Carelon ABA Authorization Request form (eff. 1/1/2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-authorization-request-form.pdf' },
      { title: 'Carelon ABA Provider Treatment Report Guidelines (v1.5)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-treatment-report-guidelines.pdf' },
      { title: 'Carelon Behavioral Health — Medical Necessity Criteria', url: 'https://www.carelonbehavioralhealth.com/providers/resources/medical-necessity-criteria' },
      { title: 'Carelon Massachusetts Medical Necessity Criteria (upd. 4/29/2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/massachusetts-medical-necessity-criteria.pdf' },
      { title: 'Carelon Behavioral Health — Forms and Guides', url: 'https://www.carelonbehavioralhealth.com/providers/forms-and-guides' },
      { title: 'Carelon (Beacon) Autism Services Provider Manual — San Francisco Health Plan (rev. June 2021)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/ca/san-francisco-health-plan/autism-aba-provider-manual-sfhp.pdf' },
      { title: 'NYS Civil Service — Empire Plan Carriers and Programs', url: 'https://www.cs.ny.gov/employee-benefits/nyship/shared/providers/programs-contact-pa.cfm' },
      { title: 'The Empire Plan — Reporting on Mental Health & Substance Use Program (Jan. 2024)', url: 'https://www.cs.ny.gov/employee-benefits/pa-market/shared/publications/reporting-on/2024/reporting-on-mhsu-2024.pdf' },
      { title: 'EmblemHealth Provider Manual Ch. 26 — Behavioral Health Services (4/30/2026)', url: 'https://www.emblemhealth.com/content/dam/emblemhealth/pdfs/provider-manual/behavioral-health-services.pdf' },
    ],
    deliveryRules: {
      dailyLimits: {
        value:
          'One national cap, and the rest is the client plan. The ABA Authorization Request form itself caps 97151 at up to 32 units (8 hours) for the initial assessment, with up to 32 more for a reassessment supported by clinical justification, and flags 97152 and 0362T as requiring clinical justification. Everything is requested in 15-minute units \u2014 97153 as hours per week plus units, 97155 and 0373T as hours per day and days per week \u2014 so the form itself imposes a shape on the request even where it imposes no ceiling. Carelon publishes no national per-day MUE table; per-day and per-week ceilings beyond 97151 are set in the client plan\u2019s benefit and criteria.',
        status: 'plan-dependent',
        cites: [{ title: 'Carelon ABA Authorization Request form (eff. 1/1/2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-authorization-request-form.pdf' }, { title: 'Carelon Behavioral Health \u2014 Medical Necessity Criteria', url: 'https://www.carelonbehavioralhealth.com/providers/resources/medical-necessity-criteria' }],
        verifyVia: 'The client plan\u2019s supplement in Carelon\u2019s forms-and-guides library, or the National Provider Service Line at 800-397-1630 \u2014 ask which criteria set governs this client and whether it carries per-day unit ceilings.',
        blocker: 'per-case',
      },
      supervision: {
        value: '97153 is delivered by a technician under the direction of the physician/QHP “receiving 1 hour of supervision for every 5 to 10 hours of direct treatment.” 97155 may be used for direction of technician (supervision) face-to-face with one patient; 0362T and 0373T require the physician/QHP on-site with two or more technicians.',
        status: 'verified',
        cites: [{ title: 'Carelon ABA Authorization Request form (eff. 1/1/2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-authorization-request-form.pdf' }],
      },
      noteSignature: {
        value: 'The ABA treatment report must be signed with the title and credential of its author and of the supervising BCBA if different; a parent signature is recommended. In the treatment record itself, every entry must be dated and carry the responsible clinician’s name, professional degree and relevant identification number, the modality (office-based or telehealth, and which telehealth modality), and the session start and stop times.',
        status: 'verified',
        cites: [
          { title: 'Carelon ABA Provider Treatment Report Guidelines (v1.5)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-treatment-report-guidelines.pdf' },
          { title: 'Carelon Behavioral Health Provider Handbook', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/carelon-behavioral-health-provider-handbook.pdf' },
        ],
      },
      placeOfService: {
        value: 'The national ABA Authorization Request form asks you to declare the program setting as home, facility/clinic, school or other, and the treatment report requires the delivery location per code. Whether a declared setting is payable is a client-benefit question — and treatment-plan objectives “should neither be educational in nature nor overlap IEP objectives” without written justification.',
        status: 'plan-dependent',
        cites: [
          { title: 'Carelon ABA Authorization Request form (eff. 1/1/2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-authorization-request-form.pdf' },
          { title: 'Carelon ABA Provider Treatment Report Guidelines (v1.5)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-treatment-report-guidelines.pdf' },
        ],
        verifyVia: 'Confirm payable settings against the client plan’s benefit document and the applicable state/client criteria before scheduling school-based hours.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value: 'Same-day pairing is governed by the client plan, not by one national rule. Carelon’s San Francisco Health Plan autism manual states the standard rule that only one service code is paid per day, with named exceptions for a patient seen by two different providers on the same day (e.g., BCBA and ABA tutor) and for ABA therapy plus BCBA supervision on the same day.',
        status: 'plan-dependent',
        cites: [{ title: 'Carelon (Beacon) Autism Services Provider Manual — San Francisco Health Plan (rev. June 2021)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/ca/san-francisco-health-plan/autism-aba-provider-manual-sfhp.pdf' }],
        verifyVia: 'Ask the Carelon National Provider Service Line (800-397-1630) for the same-day billing rule under the specific client plan, and check that client’s supplement in the forms-and-guides library.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Carelon’s national ABA form is built around a named supervising BCBA/LBA/LABA with certification number, NPI and Carelon provider ID, plus the group TIN, and Carelon rosters ABA paraprofessionals separately through a dedicated “Roster for ABA Paraprofessional Provider” form. The handbook’s general claims rule is that participating providers should not submit claims in their own name for services provided by another clinician; how that applies to technician-delivered 97153 is set in the client contract.',
        status: 'plan-dependent',
        cites: [
          { title: 'Carelon ABA Authorization Request form (eff. 1/1/2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-authorization-request-form.pdf' },
          { title: 'Carelon Behavioral Health Provider Handbook', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/carelon-behavioral-health-provider-handbook.pdf' },
        ],
        verifyVia: 'Confirm the rendering-vs-billing NPI convention with your Carelon network manager or the National Provider Service Line (800-397-1630) for the specific client plan.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'No national age limit exists, because there is no national ABA medical-necessity policy to carry one. Carelon\u2019s Corporate Quality Medical Management Committee \u201cadopts, reviews, revises, and approves Medical Necessity Criteria per client and regulatory requirements,\u201d and criteria vary by state, contract and member benefit. Where a client set does exist it can be specific: Carelon\u2019s Massachusetts criteria admit ABA for members under 21. Do not carry a client\u2019s age band to another Carelon plan.',
        status: 'plan-dependent',
        cites: [{ title: 'Carelon Behavioral Health \u2014 Medical Necessity Criteria', url: 'https://www.carelonbehavioralhealth.com/providers/resources/medical-necessity-criteria' }, { title: 'Carelon Massachusetts Medical Necessity Criteria (upd. 4/29/2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/massachusetts-medical-necessity-criteria.pdf' }, { title: 'Carelon Behavioral Health Provider Handbook', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/carelon-behavioral-health-provider-handbook.pdf' }],
        verifyVia: 'Ask which criteria set applies to this client plan and where it is published \u2014 National Provider Service Line 800-397-1630, or the client-specific guidelines in Carelon\u2019s forms-and-guides library. \u201cWhat are Carelon\u2019s ABA criteria\u201d is the wrong question; \u201cwhich criteria set governs this client\u201d is the right one.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'No national recency rule. What the ABA Provider Treatment Report Guidelines require instead is provenance: the report must carry the diagnosis with its date and the name and title of the professional who made it, plus the date(s) of the original assessment and the name, title and credential of the assessor. So the diagnosis date is mandatory reporting data even though no expiry attaches to it nationally. Concurrent reports have their own window \u2014 due at minimum two weeks before, and no more than 30 days before, the authorization end date.',
        status: 'plan-dependent',
        cites: [{ title: 'Carelon ABA Provider Treatment Report Guidelines (v1.5)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-treatment-report-guidelines.pdf' }, { title: 'Carelon Behavioral Health \u2014 Medical Necessity Criteria', url: 'https://www.carelonbehavioralhealth.com/providers/resources/medical-necessity-criteria' }],
        verifyVia: 'The governing client criteria set \u2014 National Provider Service Line 800-397-1630. A client standard can be much tighter than the national default.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'Set per client, not nationally. Carelon\u2019s national ABA treatment-report guidelines are written for members with an autism spectrum diagnosis and require the report to name the professional who made it and their title, but they do not define which credentials qualify. A client set can: Carelon\u2019s Massachusetts criteria admit ABA for members under 21 with a confirmed ASD diagnosis \u201cmade by a licensed physician, APRN, PA or psychologist experienced in autism,\u201d or with a Down syndrome diagnosis confirmed by genetic testing. That is a Massachusetts client standard and must not be carried to another Carelon plan.',
        status: 'plan-dependent',
        cites: [{ title: 'Carelon ABA Provider Treatment Report Guidelines (v1.5)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-treatment-report-guidelines.pdf' }, { title: 'Carelon Massachusetts Medical Necessity Criteria (upd. 4/29/2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/massachusetts-medical-necessity-criteria.pdf' }, { title: 'Carelon Behavioral Health \u2014 Medical Necessity Criteria', url: 'https://www.carelonbehavioralhealth.com/providers/resources/medical-necessity-criteria' }],
        verifyVia: 'Ask which criteria set governs this client plan and where it is published \u2014 National Provider Service Line 800-397-1630.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value:
          'No instrument is required nationally. The treatment report requires a minimum of two direct observations of the member alongside named indirect sources \u2014 caregiver interview, and records reviewed such as the IEP and prior ABA reports \u2014 and requires graphed per-goal data over the authorization period, which may not be aggregated or averaged by month or quarter unless the goal was written that way. A client set can demand far more: Carelon\u2019s Massachusetts criteria require at least two direct observations with one in the home or a naturally occurring community setting, plus formal assessment data from three categories \u2014 a validated skill-based or curriculum tool, a standardized treatment-impact measure, and a family/caregiver impact measure.',
        status: 'plan-dependent',
        cites: [{ title: 'Carelon ABA Provider Treatment Report Guidelines (v1.5)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-treatment-report-guidelines.pdf' }, { title: 'Carelon Massachusetts Medical Necessity Criteria (upd. 4/29/2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/massachusetts-medical-necessity-criteria.pdf' }],
        verifyVia: 'The governing client criteria set \u2014 National Provider Service Line 800-397-1630, or the client supplement in the forms-and-guides library.',
        blocker: 'per-case',
      },
      referral: {
        value:
          'What Carelon requires is an authorization rather than a referral, and the assessment is inside it: the national ABA Authorization Request form (effective 1/1/2026) carries an \u201cInitial Assessment\u201d request type alongside \u201cInitial Treatment\u201d and every \u201cConcurrent Request,\u201d so the assessment is an authorized event, not a free first step. The form asks for the patient\u2019s employer/benefit plan by name, the supervising BCBA/LBA/LABA with certification number, state, NPI and Carelon provider ID, the group TIN, and the program setting. Network membership does not transfer from the health plan \u2014 contracting with the insurer does not put you in the Carelon network. Claims must be filed within 90 calendar days of the date of service unless the provider agreement says otherwise.',
        status: 'verified',
        cites: [{ title: 'Carelon ABA Authorization Request form (eff. 1/1/2026)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-authorization-request-form.pdf' }, { title: 'Carelon Behavioral Health Provider Handbook', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/carelon-behavioral-health-provider-handbook.pdf' }],
      },
      telehealth: {
        value:
          'Carelon publishes no national ABA telehealth code list. The treatment record does have to declare it: every entry must record the modality \u2014 office-based or telehealth, and which telehealth modality \u2014 alongside the responsible clinician\u2019s name, professional degree and identification number and the session start and stop times. Whether a given ABA code is payable remotely is a client-benefit and client-criteria question.',
        status: 'plan-dependent',
        cites: [{ title: 'Carelon Behavioral Health Provider Handbook', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/carelon-behavioral-health-provider-handbook.pdf' }, { title: 'Carelon Behavioral Health \u2014 Medical Necessity Criteria', url: 'https://www.carelonbehavioralhealth.com/providers/resources/medical-necessity-criteria' }],
        verifyVia: 'National Provider Service Line 800-397-1630 with the employer/benefit plan name in hand \u2014 ask which ABA codes this client pays by telehealth and whether the authorization must say so.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          "Carelon publishes a default decision clock, expressly \"Subject to any client, government-sponsored health benefit program, and/or benefit plan specific requirements.\" Its Standard Determination Time Frames chart: a prospective (pre-service) urgent request is decided \"Within 72 hours\"; prospective non-urgent \"Within 15 calendar days (7 for contracts governed by CMS)\"; a concurrent urgent request made more than 24 hours before the authorization expires \"Within 24 hours,\" inside 24 hours \"Within 72 hours\"; a concurrent non-urgent request \"Reverts to Prospective\" (72 hours / 15 calendar days, 7 under CMS contracts); retrospective within 30 calendar days. The chart does not say whether the clock starts at receipt or at a complete request. For ABA the lead time that actually binds is the treatment report's: \"All progress reports are due, at minimum, two weeks prior to, and no more than 30 days, to the authorization end date\" — calendar the concurrent request 30 days before expiry and never later than 14. Underneath the chart sit the federal floors: an employer (ERISA) group health plan must decide a pre-service claim \"not later than 15 days after receipt of the claim by the plan\" and an urgent one within 72 hours; a Medicaid managed-care client is held to 7 calendar days standard / 72 hours expedited for rating periods starting on or after 1/1/2026 (42 CFR 438.210(d)). A shorter state-law or client-contract clock wins.",
        status: 'plan-dependent',
        cites: [{ title: "Carelon Behavioral Health Provider Handbook", url: "https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/carelon-behavioral-health-provider-handbook.pdf" }, { title: "Carelon ABA Provider Treatment Report Guidelines (v1.5)", url: "https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/clinical/aba-treatment-report-guidelines.pdf" }, { title: "29 CFR 2560.503-1(f)(2) — ERISA group health plan claims procedure (eCFR)", url: "https://www.ecfr.gov/current/title-29/section-2560.503-1" }, { title: "42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)", url: "https://www.ecfr.gov/current/title-42/section-438.210" }],
        verifyVia: "National Provider Service Line 800-397-1630 with the employer/benefit plan name in hand — ask whether this client contract or the state's utilization-review law sets a shorter decision clock than the handbook chart, and whether it runs from receipt or from a complete request.",
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          "Carelon does not set the payment order itself — \"Coordination of benefits amongst different sources of coverage (payers) is governed by the terms of the member’s benefit plan and applicable state and/or federal laws, rules and/or regulations\" — but it fixes what the provider must do. Ask at intake whether the child has coverage from more than one source and pass it to Carelon; Carelon \"may administer both primary and secondary benefit plans of a given member,\" and reporting \"all pertinent employer and other insurance information\" avoids a duplicate review. Get the authorization even when Carelon is secondary: its authorization procedures apply \"in instances where the member benefit plan administered by Carelon is primary and instances where the member benefit plan administered by Carelon is secondary,\" and \"Authorization, certification or notification requirements under the member’s benefit plan still apply in coordination of benefits situations.\" Bill Carelon second with the primary payer's EOB — uploaded in ProviderConnect or Availity, mailed separately with EDI or paper claims — and the services on the claim \"should match the services included in the primary payer EOB.\" The 90-day filing clock then runs \"from date of determination by the primary payer,\" and primary plus secondary payment never exceeds the provider-agreement rate. Some plans make the member re-report other coverage (e.g. annually) and deny claims until they do.",
        status: 'verified',
        cites: [{ title: "Carelon Behavioral Health Provider Handbook", url: "https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/global/carelon-behavioral-health-provider-handbook.pdf" }],
        verifyVia: "Which plan is primary for this child (two parents' plans, Medicaid, TRICARE) is decided by the client plan's COB terms — confirm on the National Provider Service Line 800-397-1630.",
      },
    },
    faq: [
      { q: 'Is Carelon Behavioral Health an insurance company?', a: 'No. Its provider handbook describes it as licensed in numerous states as a third-party administrator and/or utilization-review agent of behavioral health services, managing benefits under contract for employer groups, commercial and exchange health plans, Medicare Advantage and managed Medicaid plans, and government programs. Some affiliates are licensed health plans in specific states, but the entity you deal with for ABA is usually the administrator, not the insurer.' },
      { q: 'How do I know whether a family’s plan uses Carelon for ABA?', a: 'Look at the back of the card for a behavioral health number different from the medical one, or for a named program. The Empire Plan routes mental health and substance use to Carelon at option 3 of 1-877-7-NYSHIP while UnitedHealthcare runs medical and Anthem runs hospital; EmblemHealth routes behavioral health to Carelon through the BMP or EBHSP program named on the card. When in doubt, call the number on the back and ask who authorizes applied behavior analysis.' },
      { q: 'Does Carelon require prior authorization for the ABA assessment?', a: 'Yes. Carelon’s national ABA Authorization Request form, effective 1/1/2026, has an “Initial Assessment” request type, and it caps 97151 at 32 units (8 hours) for the initial with up to 32 more for a reassessment supported by clinical justification. 97152 and 0362T are also listed as requiring clinical justification.' },
      { q: 'What supervision ratio does Carelon apply to 97153?', a: 'Its national ABA Authorization Request form describes 97153 as adaptive behavior treatment by protocol administered by a technician under the direction of the physician/QHP, “receiving 1 hour of supervision for every 5 to 10 hours of direct treatment.”' },
      { q: 'Where do I find Carelon’s ABA medical-necessity criteria?', a: 'There is no single national one. Carelon’s Corporate Quality Medical Management Committee approves criteria per client and regulatory requirement, and the criteria vary by state, contract and benefit — CMS criteria first for Medicare members, then custom client criteria, then ASAM, then InterQual, then Carelon’s national set. Ask which criteria set governs the specific client plan.' },
      { q: 'Which portal do I submit ABA authorizations through?', a: 'Availity Essentials, ProviderConnect or eServices, depending on the client plan — the handbook says you may need both Carelon portals. Link ProviderConnect and/or eServices to Availity once via single sign-on in the Availity payer space and you can reach everything from one login.' },
    ],
  },

  'magellan-health': {
    slug: 'magellan-health',
    cardDesc: 'Publishes dated, public ABA criteria — fax-in auth forms, 1–2 hrs supervision per 10 direct, 97152 not covered.',
    family: 'magellan',
    payer: 'Magellan Health / Magellan Healthcare',
    state: 'US', kind: 'commercial',
    assessmentPA: {
      value: 'Required — the provider faxes an ABA Request for Initial Authorization with the diagnostic report; Magellan typically authorizes 8–12 hours of 97151 to complete the functional behavior assessment',
      status: 'verified',
      cites: [
        { title: 'Magellan Provider Orientation — Autism Spectrum Disorders, commercial and employer plans (Jan. 2026)', url: 'https://www.magellanprovider.com/media/128995/aba_provider_orientation.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — pre-authorization for direct treatment on the ABA Treatment Plan / Concurrent Review Template, in 15-minute increments',
      status: 'verified',
      cites: [
        { title: 'Magellan Provider Orientation — Autism Spectrum Disorders, commercial and employer plans (Jan. 2026)', url: 'https://www.magellanprovider.com/media/128995/aba_provider_orientation.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — an established DSM-5-TR autism spectrum diagnosis current within 24 months, made with a validated tool (ADOS, ADI-R, PEDS, Brigance and others) and confirmed by a doctoral-level clinician: an MD (family practice, pediatrics, developmental pediatrics, neurodevelopmental pediatrics, pediatric neurology or psychiatry) or a PhD/PsyD psychologist',
      status: 'verified',
      cites: [
        { title: '2025–2026 Magellan Care Guidelines — Outpatient Applied Behavior Analysis (eff. 11/8/2025)', url: 'https://www.magellanprovider.com/media/553052/mcg_2025-2026.pdf' },
      ],
    },
    pill: 'Payer Guide · Magellan Healthcare',
    h1: 'Magellan Healthcare ABA: the carve-out administrator guide.',
    metaTitle: 'Magellan Healthcare ABA Criteria & Prior Auth Guide | Carelu',
    metaDescription:
      'Magellan administers the ABA benefit for employer and commercial plans whose cards say something else. The public Magellan Care Guidelines ABA criteria, the fax-in authorization forms, focused vs. comprehensive hour bands, supervision ratios, the HO/HN modifiers and why 97152 is not a covered code.',
    intro: [
      'Magellan Healthcare is a behavioral health carve-out administrator: the employer or health plan owns the benefit, Magellan runs the network, the utilization management and often the claims. For an ABA practice that difference shows up the first time a family hands over a card with a familiar carrier name on it and the ABA authorization turns out to belong to Magellan — with its own forms, its own fax number, its own credentialing rules and its own code table.',
      'Magellan is unusually good about publishing. Its ABA medical-necessity criteria are a public, dated, versioned document — the “Outpatient Applied Behavior Analysis” guideline inside the Magellan Care Guidelines, effective November 8, 2025, last reviewed June 17, 2025 — and it publishes a January 2026 provider orientation written specifically for commercial and employer plans, plus a public behavior-analyst network criteria document. If you know Magellan is administering the benefit, you can read the standard before you submit rather than after you are denied.',
    ],
    atGlance: [
      { label: 'What it is', value: 'Behavioral health carve-out administrator for employer, commercial and state books' },
      { label: 'ABA criteria', value: 'Public — “Outpatient Applied Behavior Analysis,” Magellan Care Guidelines, eff. 11/8/2025 (2026–2027 edition eff. 10/10/2026)' },
      { label: 'Initial assessment', value: 'Typically 8–12 hours of 97151 authorized for the FBA; more with clinical justification' },
      { label: 'Submission', value: 'Fax the ABA Request for Initial Authorization with the diagnostic report; concurrent on the ABA Treatment Plan / Concurrent Review Template' },
      { label: 'Hour bands', value: 'Focused 10–25 hrs/wk; comprehensive up to 40 hrs/wk — more where medically necessary' },
      { label: 'Supervision', value: '1–2 hours of direct and indirect supervision authorized per 10 hours of direct care' },
      { label: 'Code gotcha', value: '97152 is “not a covered code”; 97155 overlap with the technician IS accepted' },
      { label: 'Credentialing', value: 'Master’s/doctoral analysts credentialed and recredentialed every 3 years; only credentialed providers may bill' },
    ],
    sections: [
      {
        h2: 'How to tell this plan is administered by Magellan',
        cites: [
          { title: 'Magellan Provider Orientation — Autism Spectrum Disorders, commercial and employer plans (Jan. 2026)', url: 'https://www.magellanprovider.com/media/128995/aba_provider_orientation.pdf' },
          { title: 'Magellan Healthcare — Medical Necessity Criteria', url: 'https://www.magellanprovider.com/providing-care/clinical-guidelines/medical-necessity-criteria.aspx' },
        ],
        body: [
          'Magellan’s own orientation leads with the warning that matters: “Benefits are not the same for all Magellan members.” It instructs providers to obtain a copy of the member’s card at the first visit, check eligibility on Availity Essentials or by calling the appropriate toll-free number before treating, and re-verify routinely. That phrasing — “the appropriate toll-free number” — is the tell: there is no single Magellan member-services line, because Magellan is administering many different sponsors’ benefits, each with its own plan/program number.',
          'Practical signals an intake team can act on:',
        ],
        list: [
          { title: 'A behavioral health number on the back of the card that is not the medical one', desc: 'Magellan’s own instruction is to call “the appropriate toll-free number” on the member’s card for eligibility. If the back of the card carries a separate mental health line, ask whose it is before you assume the medical carrier authorizes ABA.' },
          { title: 'MagellanProvider.com and Availity both in play', desc: 'Magellan uses its own provider website for authorization forms and plan-specific information, and Availity Essentials for eligibility and claim status — two different logins. Being set up on the medical carrier’s portal tells you nothing about the ABA benefit.' },
          { title: 'Plan- or state-specific criteria named on the MNC page', desc: 'Magellan publicly lists which books deviate from the national guidelines — California (SB 855 review-criteria grid, with a Jan. 1, 2025 change to outpatient ABA), Hawaiʻi (HMSA), Idaho, Louisiana CSoC, Nevada, New Mexico, North Carolina, Pennsylvania HealthChoices, Texas (Dell Children’s Health Plan and Superior Health Plan, following the Texas Medicaid Autism Services Policy), and Virginia DMAS. If the family’s plan appears there, the deviating criteria — not the national ones — govern.' },
          { title: 'A 271 that returns behavioral health as a separate service-type set', desc: 'When eligibility comes back with mental health benefits carrying a different plan/program identifier than the medical benefits, that is the carve-out. Capture the program number, because Magellan’s plan-specific ABA fax numbers and email addresses are indexed by it.' },
          { title: 'Magellan asks for the employer', desc: 'Its autism support contacts and forms are organized as “State & Plan Information → Autism-Specific Information” behind a provider login — which means the employer/plan name is a required input before you can even find the right fax number.' },
        ],
      },
      {
        h2: 'What Magellan requires: the public ABA criteria',
        cites: [
          { title: '2025–2026 Magellan Care Guidelines — Outpatient Applied Behavior Analysis (eff. 11/8/2025)', url: 'https://www.magellanprovider.com/media/553052/mcg_2025-2026.pdf' },
        ],
        body: [
          'Magellan splits the ABA decision in two: criteria to initiate care for the functional behavior assessment, then criteria to initiate care for direct treatment. The FBA gate is the diagnosis gate — an established and current (within 24 months) DSM-5 autism spectrum diagnosis using a validated assessment tool (ADOS, ADI-R, PEDS, Brigance Diagnostic Inventory of Early Development II among others), with confirmation of the diagnosis by a doctoral-level clinician within the past 24 months.',
          'Direct treatment then requires all of the following, and each one has an intake consequence:',
        ],
        list: [
          { title: 'A developmental assessment within six months', desc: 'Completed with validated tools — Vineland, ABAS — unless a longer timeframe is mandated by state law or the customer contract. Magellan may ask for it more frequently where state law and contract permit.' },
          { title: 'A one-standard-deviation threshold', desc: 'Validated developmental assessment must show the member cannot participate at an age-appropriate level in home, school or community activities, and the targeted behaviors or skill deficits must be at least one standard deviation below the mean or pose a significant threat of harm.' },
          { title: 'A functional assessment by a BACB-certified analyst', desc: 'Completed with validated tools, including baseline information on adaptive functioning within the last six months (or longer if state law or the contract requires).' },
          { title: 'Caregiver commitment', desc: 'The recipient’s caregivers must commit to participate in the goals of the treatment plan — a conversation intake should have, and document, before submission.' },
          { title: 'Medical stability', desc: 'The member must be medically stable and not require 24-hour medical or nursing monitoring.' },
          { title: 'A treatment plan with specific, quantifiable goals', desc: 'Objective, observable, quantifiable metrics, plus documentation that adjunctive treatments (psychotherapy, social skills training, medication services, educational services) have been considered for inclusion.' },
        ],
      },
      {
        h2: 'Hours, supervision and the code table',
        cites: [
          { title: '2025–2026 Magellan Care Guidelines — Outpatient Applied Behavior Analysis (eff. 11/8/2025)', url: 'https://www.magellanprovider.com/media/553052/mcg_2025-2026.pdf' },
          { title: 'Magellan Provider Orientation — Autism Spectrum Disorders, commercial and employer plans (Jan. 2026)', url: 'https://www.magellanprovider.com/media/128995/aba_provider_orientation.pdf' },
        ],
        body: [
          'Magellan publishes its intensity bands rather than making you guess them. Focused interventions are generally authorized for 10–25 hours per week of direct treatment, with more than 25 hours approved where medically necessary. Comprehensive ABA of up to 40 hours per week is reserved for multiple targets across most or all developmental domains — typically younger children with substantial impairment across most areas of functioning — with more than 40 hours approved where medically necessary, and the guidelines note that literature generally supports 1–2 years of comprehensive intervention. On top of whichever band applies, Magellan says additional authorization will be provided for direct and indirect supervision at 1 to 2 hours per 10 hours of direct care, plus caregiver training.',
          'The code table in the January 2026 commercial and employer orientation is where a billing team should start, because two of its entries are surprises:',
        ],
        list: [
          { title: '97152 is not a covered code', desc: 'Stated flatly in the national code table. Build the assessment request around 97151 and, where applicable, 0362T — not 97152.' },
          { title: '97155 overlap with the technician is accepted', desc: '“We do accept overlap with technician; all services are direct.” Concurrent 97153 and 97155 for the same clock time is permitted, which is not the case with every payer.' },
          { title: 'Provider-level modifiers ride the code', desc: 'HO for the master’s-level analyst, HN for the bachelor’s/technician level — 97151 is BCBA only (HO); 97153 and 97154 are technician only (HN); 97158 is QHP only. California adds HM.' },
          { title: 'A worked example of a typical week', desc: 'Magellan’s sample authorization shows 8–12 hours of 97151 for initial assessment and plan development, then a weekly pattern of 22.5 hours of 97153 (certified technician), 1.5 hours of 97155 (supervision rendered conjointly, in person) and 1 hour of 97156 (caregiver training).' },
          { title: 'Reassessment and severe-behavior codes are market-dependent', desc: '90889 (reassessment/report writing, indirect) is capped at up to three hours per six months and is “not available in all markets”; 0362T and 0373T carry the same caveat. Confirm before you build them into a plan.' },
          { title: 'Everything is in 15-minute increments', desc: 'Both the initial-authorization form and the concurrent-review template authorize services in 15-minute units; 16 units of 97155 means four hours of supervision, 240 units of 97153 means 60 hours of direct intervention.' },
        ],
      },
      {
        h2: 'The submission path, and who may bill',
        cites: [
          { title: 'Magellan Provider Orientation — Autism Spectrum Disorders, commercial and employer plans (Jan. 2026)', url: 'https://www.magellanprovider.com/media/128995/aba_provider_orientation.pdf' },
          { title: 'Magellan Behavior Analyst Network Criteria (rev. 01/21)', url: 'https://www.magellanprovider.com/media/1819/autismcriteria.pdf' },
        ],
        body: [
          'The sequence Magellan documents is: fax the ABA Request for Initial Authorization together with the diagnostic report; conduct the initial assessment once authorized; then request pre-authorization for additional services on the ABA Treatment Plan / Concurrent Review Template. You may use your own template for the concurrent review provided it contains Magellan’s required components. Requesting pre-authorization is explicitly the provider’s responsibility, review frequency varies with federal and state requirements and clinical need, and determinations are communicated by telephone with the option to discuss an adverse decision with a physician advisor.',
          'Credentialing is where an ABA group’s staffing model meets Magellan’s rules, and the rules are clear: master’s and doctoral-level practitioners must complete credentialing before joining the network and re-credential every three years, and only credentialed providers may bill for ABA services as in-network providers. Bachelor’s-level behavior analysts and support staff/technicians are not required to credential with Magellan if they work under the supervision of the licensed, credentialed practitioner — but that supervisory relationship must be documented in writing.',
          'Magellan’s published network criteria define three tiers. The master’s/doctoral analyst must hold a state behavior-analyst credential or BCBA certification, or meet Magellan’s licensed-practitioner criteria plus at least 40 coursework hours in behavior analysis and autism and one year (1,500 hours) of supervised clinical experience including direct care to children using ABA; liability limits of $1M/$1M; no sanctions; no federal exclusion (OIG-LEIE, SAM, state Medicaid lists); and a criminal background check at hire and at least every five years. The bachelor’s tier requires a state bachelor-level behavior-analyst credential, BCaBA, or QABA’s QASP. The support-staff tier requires a state behavior-technician credential, BACB RBT certification, or QABA’s ABAT — and both lower tiers must work under documented supervision.',
          'On claims: submit CPT/HCPCS on an 837P or CMS-1500 with the appropriate billing modifier and ICD-10 diagnosis codes, include the NPI for both rendering and billing provider, and attach the primary carrier’s EOB when Magellan is secondary. Magellan’s own list of top rejection reasons is a useful pre-submit checklist: missing or invalid CPT/HCPCS, missing or invalid diagnosis code, missing or inaccurate place-of-service code, missing provider name and/or degree level where required, and missing or invalid NPI. Claim status and EOB/EOP live on Availity Essentials, which is a separate registration from your MagellanProvider.com login (they can be linked by single sign-on).',
        ],
      },
      {
        h2: 'Where Magellan differs from calling the insurer',
        cites: [
          { title: 'Magellan Healthcare — Medical Necessity Criteria', url: 'https://www.magellanprovider.com/providing-care/clinical-guidelines/medical-necessity-criteria.aspx' },
          { title: 'Magellan Healthcare — Outpatient Applied Behavior Analysis: Louisiana Healthcare Connections (eff. 1/1/2024)', url: 'https://www.ldh.la.gov/assets/medicaid/MCPP/1.11.24/982_LHCC_20231006_Magellan_LAMedicaidABA_MNC_v3_redlined_bolded_underlined.pdf' },
          { title: '2025–2026 Magellan Care Guidelines — Outpatient Applied Behavior Analysis (eff. 11/8/2025)', url: 'https://www.magellanprovider.com/media/553052/mcg_2025-2026.pdf' },
        ],
        body: [
          'First: you can read the standard in advance. Magellan combines MCG Behavioral Health Care Guidelines with its own proprietary Magellan Healthcare Guidelines; the Magellan Healthcare Guidelines half is publicly available, while the MCG half is proprietary and obtained by calling the number on the member’s card during a clinical review. The current edition is the 2025–2026 Magellan Care Guidelines; the 2026–2027 edition becomes effective October 10, 2026 for all plans unless the state/client-specific section says otherwise. Check the effective date before you quote a criterion.',
          'Second: national criteria are a default, not a guarantee. Where a state or client requires modified criteria, Magellan defers — sometimes entirely. In Louisiana, for Louisiana Healthcare Connections members, Magellan’s own guideline says it follows the guidelines published in the most current Louisiana Department of Health ABA Provider Manual, with the state’s comprehensive diagnostic evaluation and qualified-health-care-professional definitions governing, and the initial assessment authorization period capped at 180 days. That is a different rulebook from the national one, reached through the same fax number.',
          'Third: continued care is a data argument, not a narrative one. Magellan requires demonstrated improvement from baseline in the targeted skill deficits and behaviors using validated assessments of adaptive functioning, with the member still below the participation threshold. Discharge follows when goals are achieved or maximum benefit reached, when caregivers refuse treatment recommendations, when behavioral issues are exacerbated by treatment, when the member is unlikely to continue to benefit, when there is no progress toward goals for two or more successive authorization periods, or when continued care would be primarily for the convenience of the child or caregivers. “No progress for two authorization periods” is the one to watch: it makes the quality of your data collection a clinical-eligibility issue, not just a documentation issue.',
        ],
      },
    ],
    collect: [
      { title: 'Both sides of the card plus the employer name', desc: 'Magellan tells providers to obtain a card copy at the first visit and to call “the appropriate toll-free number” — the plan/program number on the card is what routes you to the right ABA team and fax number.' },
      { title: 'The diagnostic report, with the confirming doctoral clinician named', desc: 'Diagnosis must be current within 24 months, made with a validated tool, and confirmed by an MD or PhD/PsyD. A pediatrician’s letter without the confirming clinician will stall the initial request.' },
      { title: 'A developmental assessment dated within six months', desc: 'Vineland, ABAS or equivalent. If the family’s most recent one is older, plan to administer during your authorized FBA window rather than discovering the gap at review.' },
      { title: 'Caregiver availability and commitment', desc: 'Caregiver commitment to the treatment-plan goals is an explicit criterion, and caregiver training (97156/97157) is authorized alongside direct hours.' },
      { title: 'Concurrent services and school supports', desc: 'Magellan requires documentation that adjunctive treatments — psychotherapy, social skills training, medication services, educational services — were considered for inclusion.' },
      { title: 'Your staffing roster by tier', desc: 'Which analysts are credentialed (master’s/doctoral, recredentialed every three years) and which staff are bachelor’s-level or technicians under written supervision — only credentialed providers may bill in network.' },
    ],
    sources: [
      { title: '2025–2026 Magellan Care Guidelines — Outpatient Applied Behavior Analysis (eff. 11/8/2025)', url: 'https://www.magellanprovider.com/media/553052/mcg_2025-2026.pdf' },
      { title: 'Magellan Healthcare — Medical Necessity Criteria', url: 'https://www.magellanprovider.com/providing-care/clinical-guidelines/medical-necessity-criteria.aspx' },
      { title: 'Magellan Provider Orientation — Autism Spectrum Disorders, commercial and employer plans (Jan. 2026)', url: 'https://www.magellanprovider.com/media/128995/aba_provider_orientation.pdf' },
      { title: 'Magellan Behavior Analyst Network Criteria (rev. 01/21)', url: 'https://www.magellanprovider.com/media/1819/autismcriteria.pdf' },
      { title: 'Magellan Healthcare — Autism Spectrum Disorders provider resources', url: 'https://www.magellanprovider.com/news-publications/state-plan-eap-specific-information/autism.aspx' },
      { title: 'Magellan Healthcare — Outpatient Applied Behavior Analysis: Louisiana Healthcare Connections (eff. 1/1/2024)', url: 'https://www.ldh.la.gov/assets/medicaid/MCPP/1.11.24/982_LHCC_20231006_Magellan_LAMedicaidABA_MNC_v3_redlined_bolded_underlined.pdf' },
    ],
    deliveryRules: {
      dailyLimits: {
        value:
          'Magellan publishes weekly bands rather than per-day unit ceilings. Focused interventions are generally authorized at 10\u201325 hours per week of direct treatment, with more than 25 approved where medically necessary; comprehensive ABA runs up to 40 hours per week, with more approved where medically necessary, and the guidelines note the literature generally supports 1\u20132 years of comprehensive intervention. Supervision is authorized on top at 1\u20132 hours per 10 hours of direct care, plus caregiver training. Two published caps are narrower: 90889 (reassessment/report writing, indirect) is limited to up to three hours per six months and is \u201cnot available in all markets,\u201d as are 0362T and 0373T. Everything authorizes in 15-minute increments. No per-day MUE table is published.',
        status: 'unverified',
        cites: [{ title: '2025\u20132026 Magellan Care Guidelines \u2014 Outpatient Applied Behavior Analysis (eff. 11/8/2025)', url: 'https://www.magellanprovider.com/media/553052/mcg_2025-2026.pdf' }, { title: 'Magellan Provider Orientation \u2014 Autism Spectrum Disorders, commercial and employer plans (Jan. 2026)', url: 'https://www.magellanprovider.com/media/128995/aba_provider_orientation.pdf' }],
        verifyVia: 'The plan- or employer-specific ABA team \u2014 Magellan organizes its autism contacts as State & Plan Information \u2192 Autism-Specific Information behind a provider login, so you need the plan/program number from the card. Ask whether any per-day unit ceiling applies on top of the weekly band. Magellan applies the proprietary MCG half of its Care Guidelines here; that half is licensed and is only supplied on request during a clinical review, so the plan\u2019s UM line \u2014 not a document request \u2014 is the route to the answer.',
        blocker: 'licensed',
      },
      noteSignature: {
        value:
          'Magellan does not publish a session-note signature standard in the public half of its Care Guidelines or in the January 2026 commercial and employer orientation. The closest published signal is its list of top claim rejection reasons, which includes \u201cmissing provider name and/or degree level where required\u201d \u2014 a claims rule rather than a documentation one.',
        status: 'unverified',
        cites: [{ title: 'Magellan Provider Orientation \u2014 Autism Spectrum Disorders, commercial and employer plans (Jan. 2026)', url: 'https://www.magellanprovider.com/media/128995/aba_provider_orientation.pdf' }, { title: '2025\u20132026 Magellan Care Guidelines \u2014 Outpatient Applied Behavior Analysis (eff. 11/8/2025)', url: 'https://www.magellanprovider.com/media/553052/mcg_2025-2026.pdf' }],
        verifyVia: 'The plan-specific Magellan ABA team via MagellanProvider.com (State & Plan Information \u2192 Autism-Specific Information), or the toll-free number on the member\u2019s card. The proprietary MCG half of the Care Guidelines is supplied on request during a clinical review. Magellan applies the proprietary MCG half of its Care Guidelines here; that half is licensed and is only supplied on request during a clinical review, so the plan\u2019s UM line \u2014 not a document request \u2014 is the route to the answer.',
        blocker: 'licensed',
      },
      placeOfService: {
        value:
          'No place-of-service policy is published. Magellan\u2019s criteria bear on setting only indirectly \u2014 the validated developmental assessment must show the member cannot participate at an age-appropriate level in home, school or community activities, and the treatment plan must document that adjunctive treatments including educational services were considered for inclusion. On the claim side, \u201cmissing or inaccurate place-of-service code\u201d is one of Magellan\u2019s named top rejection reasons, so the POS code matters operationally even though the payable-settings list is not published.',
        status: 'unverified',
        cites: [{ title: '2025\u20132026 Magellan Care Guidelines \u2014 Outpatient Applied Behavior Analysis (eff. 11/8/2025)', url: 'https://www.magellanprovider.com/media/553052/mcg_2025-2026.pdf' }, { title: 'Magellan Provider Orientation \u2014 Autism Spectrum Disorders, commercial and employer plans (Jan. 2026)', url: 'https://www.magellanprovider.com/media/128995/aba_provider_orientation.pdf' }],
        verifyVia: 'The plan-specific ABA team via MagellanProvider.com or the number on the card \u2014 ask which settings this client pays for before scheduling school, daycare or community hours. Magellan applies the proprietary MCG half of its Care Guidelines here; that half is licensed and is only supplied on request during a clinical review, so the plan\u2019s UM line \u2014 not a document request \u2014 is the route to the answer.',
        blocker: 'licensed',
      },
      supervision: {
        value: 'Magellan authorizes direct and indirect supervision at 1 to 2 hours per 10 hours of direct care, on top of the authorized direct-treatment band, plus caregiver training. Bachelor’s-level analysts must work under a master’s/doctoral-level behavior analyst, and support staff/technicians under a master’s/doctoral- or bachelor’s-level analyst — in both cases the supervisory relationship must be documented in writing.',
        status: 'verified',
        cites: [
          { title: '2025–2026 Magellan Care Guidelines — Outpatient Applied Behavior Analysis (eff. 11/8/2025)', url: 'https://www.magellanprovider.com/media/553052/mcg_2025-2026.pdf' },
          { title: 'Magellan Behavior Analyst Network Criteria (rev. 01/21)', url: 'https://www.magellanprovider.com/media/1819/autismcriteria.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Permitted. Magellan’s national ABA code table states for 97155 (direct by QHP / supervision): “We do accept overlap with technician; all services are direct.” Separately, 97152 is listed as not a covered code.',
        status: 'verified',
        cites: [{ title: 'Magellan Provider Orientation — Autism Spectrum Disorders, commercial and employer plans (Jan. 2026)', url: 'https://www.magellanprovider.com/media/128995/aba_provider_orientation.pdf' }],
      },
      billAsProvider: {
        value: 'Only credentialed providers may bill for ABA services as in-network providers; master’s/doctoral analysts credential before joining and re-credential every three years. Bachelor’s-level analysts and technicians need not credential when supervised by the licensed, credentialed practitioner. Claims go out on an 837P or CMS-1500 with the NPI of both the rendering and the billing provider and a provider-level modifier — HO for the master’s level, HN for bachelor’s/technician (HM added in California).',
        status: 'verified',
        cites: [{ title: 'Magellan Provider Orientation — Autism Spectrum Disorders, commercial and employer plans (Jan. 2026)', url: 'https://www.magellanprovider.com/media/128995/aba_provider_orientation.pdf' }],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Magellan\u2019s public ABA guideline sets no age limit. It frames intensity by developmental stage instead \u2014 comprehensive ABA of up to 40 hours a week is reserved for multiple targets across most or all developmental domains, \u201ctypically younger children with substantial impairment across most areas of functioning.\u201d Because Magellan administers other sponsors\u2019 benefits, any age bound comes from the employer plan or from a deviating state/client criteria set (California, Hawai\u02bbi, Idaho, Louisiana, Nevada, New Mexico, North Carolina, Pennsylvania, Texas and Virginia are on Magellan\u2019s published deviation list).',
        status: 'plan-dependent',
        cites: [{ title: '2025\u20132026 Magellan Care Guidelines \u2014 Outpatient Applied Behavior Analysis (eff. 11/8/2025)', url: 'https://www.magellanprovider.com/media/553052/mcg_2025-2026.pdf' }, { title: 'Magellan Healthcare \u2014 Medical Necessity Criteria', url: 'https://www.magellanprovider.com/providing-care/clinical-guidelines/medical-necessity-criteria.aspx' }],
        verifyVia: 'Eligibility on Availity Essentials or the appropriate toll-free number on the member\u2019s card, plus Magellan\u2019s Medical Necessity Criteria page to check whether this plan\u2019s state/client criteria deviate. Magellan applies the proprietary MCG half of its Care Guidelines here; that half is licensed and is only supplied on request during a clinical review, so the plan\u2019s UM line \u2014 not a document request \u2014 is the route to the answer.',
        blocker: 'licensed',
      },
      dxRecency: {
        value:
          'Two clocks, and both are published. The autism diagnosis must be established and current within 24 months, with confirmation of the diagnosis by a doctoral-level clinician within the past 24 months. Separately, direct treatment requires a developmental assessment completed within six months using validated tools (Vineland, ABAS), and a functional assessment by a BACB-certified analyst including baseline information on adaptive functioning within the last six months \u2014 both \u201cunless a longer timeframe is mandated by state law or the customer contract,\u201d and Magellan may ask for them more frequently where state law and contract permit. A pediatrician\u2019s letter with no confirming doctoral clinician will stall the initial request.',
        status: 'verified',
        cites: [{ title: '2025\u20132026 Magellan Care Guidelines \u2014 Outpatient Applied Behavior Analysis (eff. 11/8/2025)', url: 'https://www.magellanprovider.com/media/553052/mcg_2025-2026.pdf' }],
      },
      diagnosingProviders: {
        value:
          'A closed and unusually specific list. The diagnosis must be confirmed by a doctoral-level clinician within the past 24 months: an MD in family practice, pediatrics, developmental pediatrics, neurodevelopmental pediatrics, pediatric neurology or psychiatry, or a PhD/PsyD psychologist. Note that this is confirmation of the diagnosis, not merely its origin \u2014 capture the confirming clinician\u2019s name, specialty and the date on the intake form.',
        status: 'verified',
        cites: [{ title: '2025\u20132026 Magellan Care Guidelines \u2014 Outpatient Applied Behavior Analysis (eff. 11/8/2025)', url: 'https://www.magellanprovider.com/media/553052/mcg_2025-2026.pdf' }],
      },
      diagnosticTools: {
        value:
          'Three separate tool requirements stack. The diagnosis itself must have been made using a validated assessment tool \u2014 Magellan names the ADOS, the ADI-R, the PEDS and the Brigance Diagnostic Inventory of Early Development II \u201camong others,\u201d so the list is illustrative rather than closed. Direct treatment then requires a validated developmental assessment within six months (Vineland, ABAS) showing the member cannot participate at an age-appropriate level in home, school or community activities, with the targeted behaviors or skill deficits at least one standard deviation below the mean or posing a significant threat of harm. And a functional assessment by a BACB-certified analyst, completed with validated tools, must carry baseline adaptive-functioning information within the last six months. Continued care is then a data argument: demonstrated improvement from baseline using validated assessments of adaptive functioning.',
        status: 'verified',
        cites: [{ title: '2025\u20132026 Magellan Care Guidelines \u2014 Outpatient Applied Behavior Analysis (eff. 11/8/2025)', url: 'https://www.magellanprovider.com/media/553052/mcg_2025-2026.pdf' }],
      },
      referral: {
        value:
          'No physician referral is required, but the assessment is prior-authorized and the sequence is fixed. Fax the ABA Request for Initial Authorization together with the diagnostic report; Magellan will typically authorize 8\u201312 hours of 97151 to complete the functional behavior assessment, with more on clinical justification. Then request pre-authorization for direct treatment on the ABA Treatment Plan / Concurrent Review Template \u2014 your own template is acceptable provided it contains Magellan\u2019s required components. Requesting pre-authorization is explicitly the provider\u2019s responsibility, review frequency varies with federal and state requirements and clinical need, and determinations come by telephone with the option to discuss an adverse decision with a physician advisor. Only credentialed providers may bill as in-network.',
        status: 'verified',
        cites: [{ title: 'Magellan Provider Orientation \u2014 Autism Spectrum Disorders, commercial and employer plans (Jan. 2026)', url: 'https://www.magellanprovider.com/media/128995/aba_provider_orientation.pdf' }, { title: 'Magellan Behavior Analyst Network Criteria (rev. 01/21)', url: 'https://www.magellanprovider.com/media/1819/autismcriteria.pdf' }],
      },
      telehealth: {
        value:
          'Not published for ABA. Magellan\u2019s public ABA guideline and its January 2026 commercial and employer orientation set hour bands, supervision ratios and a national code table without stating which ABA codes may be delivered remotely or under which modifiers. Because Magellan administers many sponsors\u2019 benefits and publishes a list of books whose criteria deviate \u2014 California, Hawai\u02bbi, Idaho, Louisiana, Nevada, New Mexico, North Carolina, Pennsylvania, Texas and Virginia \u2014 treat telehealth as a per-plan answer rather than a Magellan answer.',
        status: 'unverified',
        cites: [{ title: '2025\u20132026 Magellan Care Guidelines \u2014 Outpatient Applied Behavior Analysis (eff. 11/8/2025)', url: 'https://www.magellanprovider.com/media/553052/mcg_2025-2026.pdf' }, { title: 'Magellan Provider Orientation \u2014 Autism Spectrum Disorders, commercial and employer plans (Jan. 2026)', url: 'https://www.magellanprovider.com/media/128995/aba_provider_orientation.pdf' }, { title: 'Magellan Healthcare \u2014 Medical Necessity Criteria', url: 'https://www.magellanprovider.com/providing-care/clinical-guidelines/medical-necessity-criteria.aspx' }],
        verifyVia: 'The plan-specific ABA team via MagellanProvider.com (State & Plan Information \u2192 Autism-Specific Information) or the toll-free number on the card. For a deviating book such as Louisiana Healthcare Connections, read the state manual Magellan defers to \u2014 there, the Louisiana Department of Health ABA Provider Manual. Magellan applies the proprietary MCG half of its Care Guidelines here; that half is licensed and is only supplied on request during a clinical review, so the plan\u2019s UM line \u2014 not a document request \u2014 is the route to the answer.',
        blocker: 'licensed',
      },
      authTurnaround: {
        value:
          "Magellan publishes no national ABA decision clock. Its 2026 national handbook commits to process benefit certifications \"in accordance with the requirements, allowances and limitations of the member’s benefit plan,\" and the January 2026 commercial and employer ABA orientation says the \"Frequency of authorization reviews may depend on federal and state requirements, clinical rationale of services being requested, and the member’s clinical need for ABA services.\" Decisions are communicated by telephone and carry a start and end date; no reauthorization submission lead time is published for ABA. The floor under an employer plan is federal: an ERISA group health plan must decide a pre-service claim \"not later than 15 days after receipt of the claim by the plan\" (one 15-day extension allowed) and an urgent claim within 72 hours, and an urgent request to extend an approved course of treatment within 24 hours if it is made at least 24 hours before the approval runs out. A fully insured plan is also bound by its state's utilization-review law, and a Magellan-administered Medicaid book by 42 CFR 438.210(d) — 7 calendar days standard / 72 hours expedited for rating periods starting on or after 1/1/2026. The shorter rule wins.",
        status: 'plan-dependent',
        cites: [{ title: "Magellan 2026 Handbook for the National Provider Network (11/25v3)", url: "https://www.magellanprovider.com/media/11893/provider_handbook.pdf" }, { title: "Magellan Provider Orientation — Autism Spectrum Disorders, commercial and employer plans (Jan. 2026)", url: "https://www.magellanprovider.com/media/128995/aba_provider_orientation.pdf" }, { title: "29 CFR 2560.503-1(f)(2) — ERISA group health plan claims procedure (eCFR)", url: "https://www.ecfr.gov/current/title-29/section-2560.503-1" }, { title: "42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)", url: "https://www.ecfr.gov/current/title-42/section-438.210" }],
        verifyVia: "The plan-specific ABA team via MagellanProvider.com (State & Plan Information → Autism-Specific Information) or the toll-free number on the member's card — ask the decision timeframe for a non-urgent ABA request under this plan, whether it runs from receipt or from a complete request, and how many days before the authorization end date the concurrent review template must arrive.",
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          "Magellan applies the NAIC order-of-benefit rules: the plan covering the person as the employee or subscriber pays before the plan covering them as a dependent; an active-employee plan pays before a retiree or laid-off plan; and for a child on both parents' plans, \"The parent whose birthday (month and day only) falls first in a calendar year is the parent with the primary coverage for the dependent,\" with the longer-running plan primary on a shared birthday — \"unless a contract specifically requires otherwise.\" Two boundaries matter at intake: \"Unless specifically mandated by state law or a client contract, Magellan does not coordinate benefits with individual contracts (including private indemnity plans), Medicaid, TriCare, school sponsored plans,\" and \"When Medicaid is a payer, it is always the payer of last resort\" — a child with Magellan-administered employer coverage plus Medicaid bills Magellan first. When Magellan is secondary, \"Attach primary carrier’s explanation of benefits when billing as the secondary insurer\"; the 60-day participating commercial filing limit then runs from the date of the primary carrier's EOB. Magellan may hold a claim while it verifies other coverage; if no payment or denial notice arrives within 120 days of its EOB/EOP, the provider may pursue the primary carrier or the member.",
        status: 'verified',
        cites: [{ title: "Magellan National Provider Handbook appendix — Coordination of Benefits (rev. 11/16)", url: "https://www.magellanprovider.com/media/11916/f_cob.pdf" }, { title: "Magellan Provider Orientation — Autism Spectrum Disorders, commercial and employer plans (Jan. 2026)", url: "https://www.magellanprovider.com/media/128995/aba_provider_orientation.pdf" }],
      },
    },
    faq: [
      { q: 'Are Magellan’s ABA criteria public?', a: 'Yes. The “Outpatient Applied Behavior Analysis” guideline sits inside the Magellan Care Guidelines, which carry an effective date and a last-review date — the current edition is effective November 8, 2025 (last reviewed June 17, 2025), and the 2026–2027 edition takes effect October 10, 2026. The Magellan Healthcare Guidelines half is publicly downloadable; the MCG half is proprietary and supplied on request during a clinical review.' },
      { q: 'Does Magellan require prior authorization for the ABA assessment?', a: 'Yes. The provider faxes an ABA Request for Initial Authorization with the diagnostic report, and Magellan will typically authorize 8–12 hours for the functional behavior assessment, with additional hours available on clinical justification. Direct treatment is a second, separate pre-authorization.' },
      { q: 'How many ABA hours per week will Magellan authorize?', a: 'Focused interventions are generally authorized at 10–25 hours per week of direct treatment and comprehensive ABA at up to 40 hours per week, with more approved where medically necessary. Supervision is authorized on top, at 1 to 2 hours per 10 hours of direct care, along with caregiver training.' },
      { q: 'Can 97153 and 97155 be billed for the same time?', a: 'Yes. Magellan’s January 2026 commercial and employer code table says of 97155: “We do accept overlap with technician; all services are direct.” Note separately that 97152 is listed as not a covered code.' },
      { q: 'Do RBTs have to be credentialed with Magellan?', a: 'No. Master’s and doctoral-level practitioners must credential before joining the network and re-credential every three years, and only credentialed providers may bill as in-network. Bachelor’s-level behavior analysts and support staff/technicians are not required to credential if they work under the supervision of the licensed, credentialed practitioner — with the supervisory relationship documented in writing.' },
      { q: 'Do Magellan’s national criteria always apply?', a: 'No. Magellan publishes a state/client-specific list — California, Hawaiʻi, Idaho, Louisiana, Nevada, New Mexico, North Carolina, Pennsylvania, Texas and Virginia among them — where modified criteria govern. In Louisiana, for Louisiana Healthcare Connections members, Magellan follows the Louisiana Department of Health ABA Provider Manual outright.' },
    ],
  },

  'compsych': {
    slug: 'compsych',
    cardDesc: 'Usually EAP, sometimes the whole BH network — establish which before you promise a start date.',
    payer: 'ComPsych',
    state: 'US', kind: 'commercial',
    assessmentPA: {
      value: 'Plan-by-plan — ComPsych publishes no ABA authorization policy. Confirm in writing with the ComPsych number on the card before the assessment, and get the authorization number.',
      status: 'plan-dependent',
      verifyVia: 'The ComPsych behavioral health number on the back of the member\'s card, with the employer/plan sponsor name in hand — ask who authorizes applied behavior analysis, which criteria set is applied for that client, and request the answer in writing with an authorization number. ComPsych administers somebody else\'s plan and publishes no ABA policy of its own, so the employer plan document is the governing text.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Plan-by-plan — the employer plan document, not ComPsych, defines the ABA benefit. Assume authorization is required and obtain it in writing.',
      status: 'plan-dependent',
      verifyVia: 'The ComPsych behavioral health number on the back of the member\'s card, with the employer/plan sponsor name in hand — ask who authorizes applied behavior analysis, which criteria set is applied for that client, and request the answer in writing with an authorization number. ComPsych administers somebody else\'s plan and publishes no ABA policy of its own, so the employer plan document is the governing text.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Plan-by-plan — ComPsych publishes no ABA medical-necessity criteria. The employer plan document and whatever criteria set ComPsych applies for that client govern; ask which one, and ask for it in writing.',
      status: 'plan-dependent',
      verifyVia: 'The ComPsych behavioral health number on the back of the member\'s card, with the employer/plan sponsor name in hand — ask who authorizes applied behavior analysis, which criteria set is applied for that client, and request the answer in writing with an authorization number. ComPsych administers somebody else\'s plan and publishes no ABA policy of its own, so the employer plan document is the governing text.',
      blocker: 'per-case',
    },
    pill: 'Payer Guide · ComPsych',
    h1: 'ComPsych and ABA: what it actually administers.',
    metaTitle: 'ComPsych ABA Coverage: What It Administers | Carelu',
    metaDescription:
      'ComPsych is usually an EAP and sometimes the behavioral health network behind an employer plan. How to tell which one is in play before you promise a start date, what ComPsych publishes (credentialing standards) and what it does not (ABA criteria, payer ID, provider manual).',
    intro: [
      'This is a deliberately short guide, because ComPsych publishes very little that an ABA intake team can rely on — and saying so plainly is more useful than padding the page. ComPsych is best known as the largest employee assistance program vendor in the country, operating under the GuidanceResources brand. But its own product taxonomy is “Behavioral Health Programs (Employee Assistance Programs [EAP] & Managed Care Solutions),” and that second half is where the risk lives: on some employer plans, ComPsych is not just the EAP, it is the behavioral health network the member has to use to get the in-network benefit.',
      'For an ABA practice the whole value of knowing ComPsych is in the boundary. An EAP is a short-course counseling benefit with a session cap and no ABA in it; a ComPsych-administered behavioral health network means the family’s ABA hours have to come through a network your clinicians may not be in. Confusing the two costs a family weeks. Everything below is aimed at telling them apart fast.',
    ],
    atGlance: [
      { label: 'What it usually is', value: 'An EAP — a limited number of counseling sessions per issue per year, at no member cost' },
      { label: 'What it sometimes also is', value: 'The behavioral health network for an employer plan: “provider must be in the ComPsych network to receive the network provider benefit”' },
      { label: 'Published ABA criteria', value: 'None found — no public ABA medical-necessity policy, provider manual or authorization form' },
      { label: 'Published payer ID', value: 'None found — get it from the plan or the number on the card' },
      { label: 'Credentialing floor', value: 'Master’s degree in a behavioral health field, 3 years post-graduate experience, current state license at the highest level in that state, $1M/$3M malpractice' },
      { label: 'Joining the network', value: 'Prospective Provider Interest Form at providers.compsych.com; status questions to providerrecruitment@compsych.com' },
      { label: 'Provider resources', value: 'Behind a login — the public Provider ResourceCenter shows credentialing standards and the interest form, little else' },
    ],
    sections: [
      {
        h2: 'How to tell this plan is administered by ComPsych — and in which role',
        cites: [
          { title: 'Sample employer SBC — Anthem BCBS EPO with ComPsych behavioral health network (2024 plan year)', url: 'https://cache.hacontent.com/ybr/R516/09429_ybr_ybrfndt/downloads/2024AnthemBCBSEPOPlan.pdf' },
          { title: 'ComPsych Employee Assistance Program — Summary of Benefits and Coverage', url: 'https://www.guidanceresources.com/groWeb/resources/documents/SummaryOfBenefits.pdf' },
        ],
        body: [
          'The signal is a mismatch inside one plan document. Here is a real one: a 2024 employer Summary of Benefits and Coverage for an “Anthem BCBS EPO” plan lists ordinary medical benefits throughout — and then, in the mental health, behavioral health and substance use row, carries its own phone number, its own registration instructions (“login to www.guidanceresources.com, click Register and use the Org Web ID”) and the limitation “Provider must be in the ComPsych network to receive the network provider benefit.” The card says Anthem. The behavioral health network is ComPsych’s. That is the carve-out, in writing, in the plan’s own federally required summary.',
          'Distinguishing the EAP role from the network role is the second half of the job, and the EAP has a recognizable shape. ComPsych’s own EAP Summary of Benefits and Coverage describes a plan with a $0 deductible, no out-of-pocket expenses, no out-of-network coverage at all, and “a limited number of sessions per issue per year” for mental/behavioral health outpatient services — with inpatient care, specialists, physicians/psychiatrists and psychological testing all listed as services the plan does not cover. A benefit with those features is an EAP. It is not where ABA hours come from, and an EAP authorization number is not an ABA authorization.',
        ],
        list: [
          { title: 'GuidanceResources branding', desc: 'guidanceresources.com, an “Org Web ID,” or the GuidanceResources name anywhere on the card or benefits portal means ComPsych is involved. It does not by itself tell you in which role.' },
          { title: 'A separate behavioral health phone number on the card', desc: 'A dedicated mental health line that is not the medical member-services number is the carve-out tell, exactly as with any other administrator.' },
          { title: 'The word “network” in the mental health row', desc: 'Language like “provider must be in the ComPsych network to receive the network provider benefit” means ComPsych is administering the ongoing behavioral health benefit, not just triage.' },
          { title: 'A session cap per issue per year', desc: 'A stated session limit with no deductible and no out-of-network benefit is the EAP. Ask explicitly: “Is this the EAP, or the health plan’s behavioral health benefit?”' },
          { title: 'What a 271 will and will not tell you', desc: 'An EAP is usually not a medical-plan service type and may not surface in an eligibility response at all. A ComPsych-administered behavioral health benefit may surface as mental health service types under a different plan identifier than the medical benefits. Either way, treat a thin or absent behavioral health segment as a prompt to call the number on the card, not as a coverage answer.' },
        ],
      },
      {
        h2: 'What ComPsych publishes — and what it does not',
        cites: [
          { title: 'ComPsych Provider ResourceCenter — Credentialing', url: 'https://providers.compsych.com/providers/content/credentialing.xhtml' },
          { title: 'ComPsych — Behavioral Health Programs', url: 'https://www.compsych.com/services/behavioral-health-programs.html' },
          { title: 'ComPsych Provider ResourceCenter', url: 'https://providers.compsych.com/providers' },
        ],
        body: [
          'The honest inventory is short. ComPsych publishes network participation requirements, a prospective-provider interest form, and marketing descriptions of its programs. It does not publish an ABA medical-necessity policy, an ABA authorization form, a provider manual, a fee schedule or a payer ID on any page reachable without a login. Its public behavioral health page describes 24/7/365 access to clinical experts, in-person and telehealth counseling through its network, case management and care coordination — and does not mention autism or applied behavior analysis at all.',
          'The one published standard that directly affects an ABA staffing model is the credentialing bar, and it is worth reading carefully: a minimum of a master’s-level degree in a behavioral health related field, at least three years post-graduate experience, a current state license or certification at the highest level available in that state, current malpractice insurance of $1 million per occurrence / $3 million aggregate, and a doctorate for all psychologists. A behavior technician does not clear that bar, and a newly certified BCBA may not clear the three-year requirement. Whether ComPsych rosters technicians under a credentialed analyst the way Carelon and Magellan do is not published — ask before you assume your delivery model fits.',
          'The provider side of ComPsych is a login-gated Provider ResourceCenter. Network applications start with the Prospective Provider Interest Form, processed in the order received, with status questions directed to providerrecruitment@compsych.com. There is no public authorization or claims documentation behind the front door.',
        ],
      },
      {
        h2: 'How to route a ComPsych-administered family',
        cites: [
          { title: 'ComPsych Employee Assistance Program — Summary of Benefits and Coverage', url: 'https://www.guidanceresources.com/groWeb/resources/documents/SummaryOfBenefits.pdf' },
          { title: 'Sample employer SBC — Anthem BCBS EPO with ComPsych behavioral health network (2024 plan year)', url: 'https://cache.hacontent.com/ybr/R516/09429_ybr_ybrfndt/downloads/2024AnthemBCBSEPOPlan.pdf' },
        ],
        body: [
          'Because nothing is published, the routing has to come from the call. A workable script, in order:',
        ],
        list: [
          { title: '1. Ask which benefit you are being quoted', desc: '“Is this the EAP, or the behavioral health benefit under the medical plan?” Get the answer named, because the EAP has a session cap and excludes the services ABA depends on.' },
          { title: '2. Ask who authorizes applied behavior analysis', desc: 'The answer is either ComPsych or the medical carrier. If it is the medical carrier, stop — build the file against that carrier’s published ABA policy and use the relevant guide in this directory.' },
          { title: '3. If it is ComPsych, ask which criteria set applies', desc: 'ComPsych does not publish ABA criteria, so ask for the criteria by name and request a copy in writing. A denial you cannot read the standard for is a denial you cannot appeal well.' },
          { title: '4. Get the network answer before the clinical answer', desc: 'A ComPsych-network requirement in the plan document means an out-of-network ABA agency may have no benefit at all on an EPO-style plan. Confirm network status, or a single-case agreement, before you schedule.' },
          { title: '5. Get the claims address and payer ID from the plan', desc: 'ComPsych does not publish one. Ask for the payer ID, the claims address and the timely-filing window on the same call, and write the authorization number down.' },
          { title: '6. Document the call', desc: 'With no published policy to cite, the call reference number and the name of the representative are the only record you will have at appeal.' },
        ],
      },
    ],
    collect: [
      { title: 'Both sides of the card, plus the employer name', desc: 'The employer is the plan sponsor and the only reliable key to which ComPsych arrangement applies. GuidanceResources branding or an “Org Web ID” is a ComPsych signal.' },
      { title: 'The plan document or SBC, not just the card', desc: 'The mental health row of the Summary of Benefits and Coverage is where a ComPsych network requirement is stated in writing. Ask the family for their benefits packet.' },
      { title: 'Which benefit was quoted — EAP or health plan', desc: 'Record it explicitly. An EAP session allowance is not an ABA benefit, and families frequently relay one as the other.' },
      { title: 'The authorization number, criteria name and claims details', desc: 'With no published policy, the call is the record: authorization number, criteria set applied, payer ID, claims address, timely-filing window, representative name and reference number.' },
      { title: 'Your clinicians’ credentials against the published floor', desc: 'Master’s minimum, three years post-graduate, current state license at the highest level, $1M/$3M malpractice — know before the call whether your supervising analysts clear it.' },
    ],
    sources: [
      { title: 'ComPsych — Behavioral Health Programs', url: 'https://www.compsych.com/services/behavioral-health-programs.html' },
      { title: 'ComPsych — Mental Health and Well-Being Programs', url: 'https://www.compsych.com/services/mental-health-and-well-being-programs/' },
      { title: 'ComPsych Provider ResourceCenter', url: 'https://providers.compsych.com/providers' },
      { title: 'ComPsych Provider ResourceCenter — Credentialing', url: 'https://providers.compsych.com/providers/content/credentialing.xhtml' },
      { title: 'ComPsych Employee Assistance Program — Summary of Benefits and Coverage', url: 'https://www.guidanceresources.com/groWeb/resources/documents/SummaryOfBenefits.pdf' },
      { title: 'Sample employer SBC — Anthem BCBS EPO with ComPsych behavioral health network (2024 plan year)', url: 'https://cache.hacontent.com/ybr/R516/09429_ybr_ybrfndt/downloads/2024AnthemBCBSEPOPlan.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Not published. ComPsych publishes network participation requirements but no ABA supervision standard, provider tier or ratio. Its credentialing floor is a minimum master\u2019s-level degree in a behavioral health related field, at least three years post-graduate experience, and a current state license or certification at the highest level available in that state \u2014 which a behavior technician does not meet, and which a newly certified BCBA may not meet either. Whether ComPsych rosters technicians under a credentialed analyst the way Carelon and Magellan do is not published.',
        status: 'unverified',
        cites: [{ title: 'ComPsych Provider ResourceCenter \u2014 Credentialing', url: 'https://providers.compsych.com/providers/content/credentialing.xhtml' }, { title: 'ComPsych \u2014 Behavioral Health Programs', url: 'https://www.compsych.com/services/behavioral-health-programs.html' }],
        verifyVia: 'The ComPsych behavioral health number on the back of the member\u2019s card \u2014 ask who authorizes applied behavior analysis, which criteria set applies, and request it in writing; network questions to providerrecruitment@compsych.com. Record the call reference and the representative\u2019s name, because with nothing published that call is the only record you will have at appeal.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value:
          'Not published. ComPsych publishes no ABA authorization form, provider manual, fee schedule or claims documentation on any page reachable without a login, so there is no stated rule on billing two ABA codes for the same clock time.',
        status: 'unverified',
        cites: [{ title: 'ComPsych Provider ResourceCenter', url: 'https://providers.compsych.com/providers' }, { title: 'ComPsych \u2014 Behavioral Health Programs', url: 'https://www.compsych.com/services/behavioral-health-programs.html' }],
        verifyVia: 'The ComPsych behavioral health number on the back of the member\u2019s card \u2014 ask who authorizes applied behavior analysis, which criteria set applies, and request it in writing; network questions to providerrecruitment@compsych.com. Record the call reference and the representative\u2019s name, because with nothing published that call is the only record you will have at appeal.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Not published. ComPsych\u2019s public behavioral health page describes 24/7/365 access to clinical experts, in-person and telehealth counseling through its network, case management and care coordination \u2014 and does not mention autism or applied behavior analysis at all, let alone payable settings. The setting question that does bite is network rather than place: an employer plan document saying \u201cprovider must be in the ComPsych network to receive the network provider benefit\u201d can leave an out-of-network ABA agency with no benefit at all on an EPO-style plan.',
        status: 'unverified',
        cites: [{ title: 'ComPsych \u2014 Behavioral Health Programs', url: 'https://www.compsych.com/services/behavioral-health-programs.html' }, { title: 'Sample employer SBC \u2014 Anthem BCBS EPO with ComPsych behavioral health network (2024 plan year)', url: 'https://cache.hacontent.com/ybr/R516/09429_ybr_ybrfndt/downloads/2024AnthemBCBSEPOPlan.pdf' }],
        verifyVia: 'The ComPsych behavioral health number on the back of the member\u2019s card \u2014 ask who authorizes applied behavior analysis, which criteria set applies, and request it in writing; network questions to providerrecruitment@compsych.com. Record the call reference and the representative\u2019s name, because with nothing published that call is the only record you will have at appeal.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'ComPsych’s published network participation requirements set a floor of a master’s-level degree in a behavioral health related field, three years post-graduate experience and a current state license at the highest level in that state — which a behavior technician does not meet. ComPsych does not publish whether technicians may be rostered under a credentialed analyst, or whose NPI an ABA claim must carry.',
        status: 'unverified',
        cites: [{ title: 'ComPsych Provider ResourceCenter — Credentialing', url: 'https://providers.compsych.com/providers/content/credentialing.xhtml' }],
        verifyVia: 'ComPsych provider recruitment (providerrecruitment@compsych.com) or the ComPsych behavioral health number printed on the member’s card — ask specifically whether technician-delivered 97153 is payable and under whose NPI.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Not published. ComPsych publishes no ABA fee schedule, unit ceiling or hour band. The only quantitative limit it does publish belongs to the EAP, not to ABA: \u201ca limited number of sessions per issue per year\u201d with a $0 deductible and no out-of-network coverage. An EAP session allowance is not an ABA authorization, and families frequently relay one as the other.',
        status: 'unverified',
        cites: [{ title: 'ComPsych Employee Assistance Program \u2014 Summary of Benefits and Coverage', url: 'https://www.guidanceresources.com/groWeb/resources/documents/SummaryOfBenefits.pdf' }, { title: 'ComPsych \u2014 Behavioral Health Programs', url: 'https://www.compsych.com/services/behavioral-health-programs.html' }],
        verifyVia: 'The ComPsych behavioral health number on the back of the member\u2019s card \u2014 ask who authorizes applied behavior analysis, which criteria set applies, and request it in writing; network questions to providerrecruitment@compsych.com. Record the call reference and the representative\u2019s name, because with nothing published that call is the only record you will have at appeal.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Not published. There is no ComPsych provider manual, documentation standard or session-note specification reachable without a login.',
        status: 'unverified',
        cites: [{ title: 'ComPsych Provider ResourceCenter', url: 'https://providers.compsych.com/providers' }],
        verifyVia: 'The ComPsych behavioral health number on the back of the member\u2019s card \u2014 ask who authorizes applied behavior analysis, which criteria set applies, and request it in writing; network questions to providerrecruitment@compsych.com. Record the call reference and the representative\u2019s name, because with nothing published that call is the only record you will have at appeal.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Not published. ComPsych administers benefits for employer plan sponsors and publishes no ABA medical-necessity policy, so any age bound comes from the employer\u2019s plan document rather than from ComPsych. The first thing to settle is not the age but the benefit: an EAP is a short-course counseling allowance with a session cap per issue per year, no deductible and no out-of-network coverage, and it is not where ABA hours come from.',
        status: 'unverified',
        cites: [{ title: 'ComPsych Employee Assistance Program \u2014 Summary of Benefits and Coverage', url: 'https://www.guidanceresources.com/groWeb/resources/documents/SummaryOfBenefits.pdf' }, { title: 'ComPsych \u2014 Behavioral Health Programs', url: 'https://www.compsych.com/services/behavioral-health-programs.html' }],
        verifyVia: 'The ComPsych behavioral health number on the back of the member\u2019s card \u2014 ask who authorizes applied behavior analysis, which criteria set applies, and request it in writing; network questions to providerrecruitment@compsych.com. Record the call reference and the representative\u2019s name, because with nothing published that call is the only record you will have at appeal.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Not published. ComPsych publishes no ABA medical-necessity criteria, so there is no stated rule on how recent the ASD diagnostic evaluation must be. Whatever criteria set ComPsych applies for that client governs \u2014 ask for it by name and ask for a copy in writing, because a denial you cannot read the standard for is a denial you cannot appeal well.',
        status: 'unverified',
        cites: [{ title: 'ComPsych Provider ResourceCenter', url: 'https://providers.compsych.com/providers' }, { title: 'ComPsych \u2014 Behavioral Health Programs', url: 'https://www.compsych.com/services/behavioral-health-programs.html' }],
        verifyVia: 'The ComPsych behavioral health number on the back of the member\u2019s card \u2014 ask who authorizes applied behavior analysis, which criteria set applies, and request it in writing; network questions to providerrecruitment@compsych.com. Record the call reference and the representative\u2019s name, because with nothing published that call is the only record you will have at appeal.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'Not published. No ComPsych document reachable without a login names who may make the ASD diagnosis. Its only published credential standard is for network participation \u2014 master\u2019s minimum, three years post-graduate, current state license at the highest level in that state, $1M/$3M malpractice, and a doctorate for all psychologists \u2014 which governs who may join the network, not who may diagnose.',
        status: 'unverified',
        cites: [{ title: 'ComPsych Provider ResourceCenter \u2014 Credentialing', url: 'https://providers.compsych.com/providers/content/credentialing.xhtml' }],
        verifyVia: 'The ComPsych behavioral health number on the back of the member\u2019s card \u2014 ask who authorizes applied behavior analysis, which criteria set applies, and request it in writing; network questions to providerrecruitment@compsych.com. Record the call reference and the representative\u2019s name, because with nothing published that call is the only record you will have at appeal.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value:
          'Not published. ComPsych names no required or accepted diagnostic instrument for autism anywhere in its public material.',
        status: 'unverified',
        cites: [{ title: 'ComPsych Provider ResourceCenter', url: 'https://providers.compsych.com/providers' }],
        verifyVia: 'The ComPsych behavioral health number on the back of the member\u2019s card \u2014 ask who authorizes applied behavior analysis, which criteria set applies, and request it in writing; network questions to providerrecruitment@compsych.com. Record the call reference and the representative\u2019s name, because with nothing published that call is the only record you will have at appeal.',
        blocker: 'per-case',
      },
      referral: {
        value:
          'Not published, and this is the field to nail down first. ComPsych publishes no ABA authorization policy or form, so assume authorization is required and obtain it in writing before the assessment, along with the authorization number. The prior question is which entity authorizes at all: on some employer plans ComPsych is only the EAP and the medical carrier authorizes ABA, and on others the plan document requires the provider to be in the ComPsych network to receive the in-network behavioral health benefit. Ask \u201cis this the EAP, or the behavioral health benefit under the medical plan?\u201d and \u201cwho authorizes applied behavior analysis?\u201d before anything else \u2014 and get the network answer before the clinical one, because an EPO-style plan may leave an out-of-network agency with no benefit.',
        status: 'unverified',
        cites: [{ title: 'Sample employer SBC \u2014 Anthem BCBS EPO with ComPsych behavioral health network (2024 plan year)', url: 'https://cache.hacontent.com/ybr/R516/09429_ybr_ybrfndt/downloads/2024AnthemBCBSEPOPlan.pdf' }, { title: 'ComPsych Employee Assistance Program \u2014 Summary of Benefits and Coverage', url: 'https://www.guidanceresources.com/groWeb/resources/documents/SummaryOfBenefits.pdf' }, { title: 'ComPsych \u2014 Behavioral Health Programs', url: 'https://www.compsych.com/services/behavioral-health-programs.html' }],
        verifyVia: 'The ComPsych behavioral health number on the back of the member\u2019s card \u2014 ask who authorizes applied behavior analysis, which criteria set applies, and request it in writing; network questions to providerrecruitment@compsych.com. Record the call reference and the representative\u2019s name, because with nothing published that call is the only record you will have at appeal.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'Not published for ABA. ComPsych\u2019s public behavioral health page advertises in-person and telehealth counseling through its network but says nothing about applied behavior analysis or which ABA codes may be delivered remotely.',
        status: 'unverified',
        cites: [{ title: 'ComPsych \u2014 Behavioral Health Programs', url: 'https://www.compsych.com/services/behavioral-health-programs.html' }],
        verifyVia: 'The ComPsych behavioral health number on the back of the member\u2019s card \u2014 ask who authorizes applied behavior analysis, which criteria set applies, and request it in writing; network questions to providerrecruitment@compsych.com. Record the call reference and the representative\u2019s name, because with nothing published that call is the only record you will have at appeal.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          "Not published by ComPsych — it posts no provider manual, utilization-management timeframes or ABA authorization policy outside its login — so the clock comes from the employer's plan and the law behind it. For an employer group health plan governed by ERISA the federal claims rule is the floor: a pre-service request must be decided \"not later than 15 days after receipt of the claim by the plan\" (one 15-day extension if more information is needed), an urgent one within 72 hours, and an urgent request to extend an approved course of treatment within 24 hours if it is made at least 24 hours before the approval runs out. A fully insured plan is also bound by its state's utilization-review law. No reauthorization lead time is published.",
        status: 'plan-dependent',
        cites: [{ title: "29 CFR 2560.503-1(f)(2) — ERISA group health plan claims procedure (eCFR)", url: "https://www.ecfr.gov/current/title-29/section-2560.503-1" }, { title: "ComPsych Provider ResourceCenter", url: "https://providers.compsych.com/providers" }],
        verifyVia: "The ComPsych behavioral health number on the back of the member’s card, with the employer/plan sponsor name in hand — ask whether the plan is self-funded or fully insured, the decision timeframe for a non-urgent ABA request, and how far ahead of the authorization end date a continued-treatment request must be submitted; record the call reference and representative's name.",
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          "Not published. ComPsych posts no coordination-of-benefits procedure, claims manual or payer ID outside its login, so which plan pays first and what a secondary claim must carry come from the employer's plan document. One boundary is published: a ComPsych EAP is a separate, session-capped benefit (\"a limited number of sessions per issue per year\") with no out-of-network coverage — it is not a second layer of ABA coverage to coordinate.",
        status: 'unverified',
        cites: [{ title: "ComPsych Provider ResourceCenter", url: "https://providers.compsych.com/providers" }, { title: "ComPsych Employee Assistance Program — Summary of Benefits and Coverage", url: "https://www.guidanceresources.com/groWeb/resources/documents/SummaryOfBenefits.pdf" }],
        verifyVia: "The ComPsych behavioral health number on the back of the member’s card — ask whether ComPsych or the other plan is primary for ABA when the child has a second plan (the other parent's plan, Medicaid, TRICARE), whether a secondary claim needs the primary EOB, and whether authorization is still required when ComPsych is secondary; record the call reference.",
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does ComPsych cover ABA therapy?', a: 'ComPsych does not publish an ABA policy, so there is no honest general answer. ComPsych administers benefits for employer plan sponsors; whether ABA is covered, and whether ComPsych or the medical carrier authorizes it, is set by the employer’s plan. Ask on the benefits call whether you are being quoted the EAP or the health plan’s behavioral health benefit, and who authorizes applied behavior analysis.' },
      { q: 'Is ComPsych an EAP or a behavioral health administrator?', a: 'Both, depending on the client. Its own product taxonomy is “Behavioral Health Programs (Employee Assistance Programs [EAP] & Managed Care Solutions).” Some employer plan documents go further and require the provider to be in the ComPsych network to get the in-network behavioral health benefit — that is the administrator role, not the EAP role.' },
      { q: 'Can EAP sessions be used for ABA?', a: 'No. ComPsych’s own EAP Summary of Benefits and Coverage describes a limited number of sessions per issue per year with no out-of-network coverage, and lists inpatient care, specialists, physicians/psychiatrists and psychological testing among the services the EAP does not cover. Treat an EAP allowance as short-course counseling, not as an ABA authorization.' },
      { q: 'What are ComPsych’s provider credentialing requirements?', a: 'Its published network participation requirements are a minimum master’s-level degree in a behavioral health related field, at least three years post-graduate experience, a current state license or certification at the highest level in that state, malpractice insurance of $1 million per occurrence / $3 million aggregate, and a doctorate for all psychologists (DEA registration for MDs). Whether behavior technicians can be rostered under a credentialed analyst is not published.' },
      { q: 'What is ComPsych’s payer ID for behavioral health claims?', a: 'ComPsych does not publish one. Because it administers benefits for many different plan sponsors, get the payer ID, claims address and timely-filing window from the plan or from the ComPsych number on the back of the card, and record them with the authorization number.' },
    ],
  },
};

import type { PayerConfig } from './types.js';

/* Oklahoma. Ported from the LeadTrap product copy (backend/src/data/payer-guides/oklahoma.ts,
   August 2026: oklahoma-medicaid + the three SoonerSelect plans), re-verified against the cited
   primary sources in September 2026, brought up to the current schema, and completed with the
   commercial layer (Aetna, Cigna, UnitedHealthcare, BCBSOK) and the Nick's Law mandate.
   The Medicaid guide's payer string names BOTH "Oklahoma Medicaid" and "Oklahoma Health Care
   Authority" on purpose: pVerify eligibility responses use the second, which normalizes to a
   name that shares nothing with the first, so the name hook needs both. */
export const oklahomaPayers: Record<string, PayerConfig> = {
  'oklahoma-medicaid': {
    slug: 'oklahoma-medicaid',
    cardDesc: 'SoonerCare/SoonerSelect, under 21. OHCA pays four ABA codes, prior-authorizes everything, opens extensions only 7 days out and cuts hours when parent training lapses.',
    assessmentPA: {
      value: 'Required — OHCA states "ABA services require prior authorization" and pays only prior-authorized ABA; the functional behavior assessment is "reimbursed per authorized units provided by the BCBA, not to exceed thirty-two (32) units (eight (8) hours)". For SoonerSelect members the health plan runs the authorization.',
      status: 'verified',
      cites: [
        { title: 'OAC 317:30-5-310 — ABA purpose ("ABA services require prior authorization") [Issued 09-12-22]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/purpose-aba.html' },
        { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        { title: 'OAC 317:30-5-316 — ABA reimbursement methodology [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/reimbursement-methodology.html' },
        { title: 'OHCA — Learn about SoonerSelect (last modified 6/9/2026)', url: 'https://oklahoma.gov/ohca/soonerselect/about.html' },
      ],
    },
    treatmentPA: {
      value: 'Required — "Prior authorization requests shall be granted by units for one (1) to six (6) months of ABA treatment services as clinically indicated"; a change in the treatment plan needs a new PA, and extensions may only be submitted in the seven calendar days before the current end date.',
      status: 'verified',
      cites: [
        { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        { title: 'OAC 317:30-5-315 — ABA extension requests [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/aba-extension-requests.html' },
      ],
    },
    dxRequired: {
      value: 'Yes — "a definitive diagnosis of an Autism Spectrum Disorder (ASD)" from a (pediatric) neurologist, developmental pediatrician, licensed psychologist, psychiatrist or neuropsychiatrist, another licensed physician experienced in ASD, or an interdisciplinary team (psychologist, physician, PA or APRN), in Oklahoma or within 50 miles of the border; the diagnostic evaluation "should be no older than two (2) years old" at the start of ABA.',
      status: 'verified',
      cites: [
        { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
      ],
    },
    payer: 'Oklahoma Medicaid (SoonerCare / SoonerSelect) - Oklahoma Health Care Authority',
    state: 'OK',
    kind: 'state-medicaid',
    pill: 'Payer Guide · Oklahoma Medicaid',
    h1: 'Oklahoma Medicaid (SoonerCare) ABA coverage: the intake guide.',
    metaTitle: 'Oklahoma Medicaid (SoonerCare / SoonerSelect) ABA Coverage, Rates & Prior Auth | Carelu',
    metaDescription: 'How Oklahoma Medicaid covers ABA under SoonerCare and SoonerSelect: the four billable CPT codes and their 7/1/2026 rates, who may diagnose, the two-year diagnosis window, the intensity tiers, one-to-six-month authorizations, the seven-day extension window, the parent-training condition, telehealth by code, and which children stay in fee-for-service.',
    intro: [
      'Oklahoma writes its ABA policy in unusual detail, and the detail is operational. OHCA publishes a dedicated rule set at OAC 317:30-5-310 through 317:30-5-318 (the core sections revised September 1, 2025) that names who may bill, who may diagnose, what medical necessity means, what an authorization packet must contain, what is excluded outright, what an extension must prove, how services are paid, and how OHCA audits them. Four of those rules should change how a practice runs Oklahoma intake. Only four CPT codes are reimbursable. The diagnostic evaluation behind the first request should be no more than two years old. Extensions may only be filed in the seven days before the current authorization ends, and late ones draw a technical denial with lost days. And parent training is a condition of continued hours: documented involvement below two hours a month "will result in a reduction of hours and possibly denial of services."',
      'Since April 1, 2024 most children receive this benefit through a SoonerSelect health plan (Aetna Better Health of Oklahoma, Humana Healthy Horizons, or Oklahoma Complete Health), and OHCA says those plans "cover all services that SoonerCare fee-for-service covers." ABA is not carved out of managed care. But the plans are not the whole picture for autistic children: members eligible on the basis of disability (ABD) and anyone on a 1915(c) waiver are excluded from SoonerSelect and stay in traditional fee-for-service SoonerCare, where OHCA or its designated agent authorizes ABA directly.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — members under 21 with a definitive ASD diagnosis (an EPSDT benefit)' },
      { label: 'Billable codes', value: '97151, 97153, 97155 and 97156 only — OHCA names these four for reimbursement' },
      { label: 'Rates (7/1/2026)', value: '97153 $17.35 per 15-min unit · 97151, 97155, 97156 $23.55 per unit (SoonerCare maximum allowable)' },
      { label: 'Delivery', value: 'SoonerSelect health plans since 4/1/2024; ABD and 1915(c) waiver members stay in fee-for-service SoonerCare' },
      { label: 'Diagnosis', value: 'Definitive ASD dx from a named discipline, in OK or within 50 miles; evaluation no older than 2 years at start' },
      { label: 'Prior auth', value: 'Every ABA service; granted by units for 1–6 months; FBA capped at 32 units (8 hours)' },
      { label: 'Intensity tiers', value: 'High >30 hrs/wk · moderate 20–30 · targeted 10–20 · maintenance 5–10 or less (FBA or BIP required above 20)' },
      { label: 'Extensions', value: 'Only in the 7 calendar days before the current end date — late requests risk technical denial and lost days' },
      { label: 'Parent training', value: 'First RBT-increase extension: 1 hr/wk for 3 months; later ones 2 hrs/wk. Under 2 hrs/month reduces or denies hours' },
      { label: 'Telehealth', value: 'Allowed if justified in the PA; OHCA’s code list (8/10/2026) carries 97151, 97155, 97156 — not 97153' },
    ],
    sections: [
      {
        h2: 'Four codes, a fee schedule, and who gets paid',
        body: [
          'OHCA\'s ABA provider page states plainly that "the CPT codes 97151, 97153, 97155 and 97156 will be utilized for reimbursement once the provider has a contract with OHCA." There is no 97152 technician-assessment line, no 97154 or 97158 group code, and no 0362T or 0373T. The July 1, 2026 SoonerCare fee schedule prices exactly those four: 97153 at $17.35 per 15-minute unit and 97151, 97155 and 97156 at $23.55 per unit, as maximum allowable fees. OHCA pays the lower of billed charges or that maximum, for direct service time only; pre- and post-session work, treatment planning, note writing and chart updates are not separately reimbursed (other than inside the FBA code).',
          'Contracting is its own gate. Every provider type must be "fully contracted with SoonerCare," "All staff providing ABA services must be contracted with the OHCA," and contracted providers must reside in Oklahoma or within 50 miles of the border. Enrollment runs through the OHCA provider portal under the Applied Behavior Analyst provider type (BCBA or BCaBA specialty), with the national certification and the state license or certificate uploaded, and a separate contract is required even for a provider already contracted for other SoonerCare services. Payment then goes up the chain: the rule says "Payment is not made to under supervision ABA practitioners/paraprofessionals, including but not limited to, BCaBAs and RBTs," and OHCA\'s provider page adds that payment for a supervised practitioner "may only be made to his or her supervisor, or the employing agency or corporate entity." The RBT "works under the license number of a BCBA."',
        ],
        cites: [
          { title: 'OHCA — Applied Behavioral Analysis Application and Coding Information for Providers', url: 'https://oklahoma.gov/ohca/providers/applied-behavioral-analysis-application.html' },
          { title: 'OHCA — SoonerCare Title XIX fee schedule, effective 07/01/2026 (V3)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/claim-tools/fee-schedules/2026/Prov_fee_sch_TXIX_07012026_V3.txt' },
          { title: 'OAC 317:30-5-311 — Eligible providers and requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/eligible-provider-and-requirements.html' },
          { title: 'OAC 317:30-5-316 — ABA reimbursement methodology [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/reimbursement-methodology.html' },
        ],
      },
      {
        h2: 'Medical necessity: who diagnoses, how recent, and the intensity tiers',
        body: [
          'OAC 317:30-5-313 requires every condition together. The member is under twenty-one with "a definitive diagnosis of an Autism Spectrum Disorder (ASD)" from a pediatric neurologist or neurologist, a developmental pediatrician, a licensed psychologist, a psychiatrist or neuropsychiatrist, another licensed physician experienced in ASD, or an interdisciplinary team of a licensed psychologist, physician, physician assistant or APRN — practising in Oklahoma or within 50 miles of the border. The comprehensive diagnostic evaluation must carry a full medical and social history and rest on DSM criteria, "and/or may also include scores" from tools such as the ADI-R, ADOS-2 or CARS; "Screening scales are not sufficient." It is needed only at first initiation of ABA and "should be no older than two (2) years old," with no annual re-evaluation, though a member who changes agencies must supply it again during the initial authorization period. The child must also be medically stable, show functional limitations tied to ASD core deficits, and have shown atypical or disruptive behaviour "within the most recent thirty (30) calendar days."',
          'The frequency section sets guidelines, not a ceiling: more than 30 hours a week is high frequency, 20 to 30 moderate, 10 to 20 targeted or focused, and 5 to 10 or less maintenance or consultative. High frequency needs Autism Severity Level 2 or 3 with the diagnostic evaluation attached, goals tied to elopement, aggression, self-injury, property destruction or severe disruption, and an FBA or BIP; moderate needs documentation showing two or more of the listed criteria (Severity Level 2 or 3 with the evaluation attached, goals for moderate challenging behaviour that is not age-congruent) and also requires an FBA or BIP; the targeted and maintenance tiers need no FBA or BIP. Requests above these guidelines go to physician and BCBA consultant review. OHCA may ask for more support if behaviours have not improved within a year of at least 85% attendance.',
        ],
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
        ],
      },
      {
        h2: 'The authorization packet, settings, and what cannot be billed together',
        body: [
          'The initial request carries a comprehensive behavioral assessment, an FBA, a BSP if applicable, the treatment plan and OHCA\'s initial prior-authorization template, plus medical history and prior treatment response, caregiver interviews and rating scales, direct observation data, prior ABA history, a daily schedule by hour with each staff member\'s credentials, and the other therapies (OT, PT, speech) the child receives and when. The treatment plan is not valid until the supervising BCBA or licensed psychologist, the parent or guardian, and any minor aged fourteen or older have signed and dated it. The OHCA form "must be filled out completely or the request will be considered as incomplete." For fee-for-service members the typed form is faxed to OHCA at 405-530-7260; SoonerSelect members\' requests go to their plan, because OHCA directs members to the plan for "prior authorizations."',
          'Settings are drawn tightly. "ABA services are not allowed in a daycare setting or school setting, without OHCA approval. If approved, it will be time-limited to three (3) months or less," with a plan to titrate support to school staff; a move into private school gets the same three-month limit. ABA must be one-on-one and face-to-face except for family adaptive treatment guidance, and the family is expected to attend at least 85% of treatment each review period. Telehealth is allowed ("in-person service delivery, telehealth, or a hybrid") if the modality and its justification are written into the PA template and treatment plan. On billing, RBT and supervision hours may be billed concurrently only when the PA request sets out the criteria and the BCBA or psychologist actually directed the RBT; "ABA is not allowed to be billed concurrently during any other therapies (i.e., OT, PT speech, etc.)"; hours approved for one CPT code cannot be used for another; and parent training must be delivered by the BCBA or BCaBA, never the RBT.',
          'The exclusion list is worth reading before writing goals: academic goals, performative social norms, school or daycare shadowing and aide work, services owned or delivered by the child\'s parent or other family member, experimental treatment, services for caregiver or provider convenience such as respite, and ABA authorized for toilet training, OT or speech therapy.',
        ],
        cites: [
          { title: 'OAC 317:30-5-312 — Treatment plan components and documentation requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/treatment-plan-components-and-documentation-requirements.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OHCA — Applied Behavioral Analysis Application and Coding Information for Providers', url: 'https://oklahoma.gov/ohca/providers/applied-behavioral-analysis-application.html' },
          { title: 'OHCA — SoonerSelect Health Program Member Quick Reference Guide (Feb 2026)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/soonerselect/docs/health/SoonerSelect%20Health%20Member%20Guide.pdf' },
        ],
      },
      {
        h2: 'Extensions: a seven-day window and a parent-training condition',
        body: [
          'OAC 317:30-5-315 is where Oklahoma authorizations are most often lost on process. The "Extension request may only be submitted seven (7) calendar days prior to the end date of the most recent request. Late submissions may result in a technical denial and loss of days." The extension form must be complete, and the packet shows eligibility still met, reduced target-behaviour frequency (or a modified plan), the daily schedule with staff credentials, progress toward goals, an updated FBA and BIP as appropriate, and the other therapies the child receives.',
          'Parent training is a hard condition. A first extension asking for more RBT hours needs parent training by the BCBA or BCaBA "at minimum of an hour (1) per week for three (3) months", later increases need two hours a week for three months, start and stop times go on the request, and "Absence or less than two (2) hours per month of appropriate parent training/involvement documented in the record will result in a reduction of hours and possibly denial of services." Families should hear this at intake, not at the first reduction. Every extension also updates the discharge plan, and a discharge notification form is due when a child completes treatment or moves provider.',
        ],
        cites: [
          { title: 'OAC 317:30-5-315 — ABA extension requests [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/aba-extension-requests.html' },
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
        ],
      },
      {
        h2: 'SoonerSelect: which plan, and which children stay in fee-for-service',
        body: [
          'SoonerSelect health plans took over most SoonerCare members on April 1, 2024 across all 77 counties. Members choose among Aetna Better Health of Oklahoma, Humana Healthy Horizons and Oklahoma Complete Health, and OHCA says the plans "cover all services that SoonerCare fee-for-service covers" and "all medically necessary health and behavioral health services, except dental services" — no ABA or behavioral-health carve-out. Once a member picks a plan, they "correspond directly with that plan" for ID cards and prior authorizations. Children in foster care, former foster youth, children receiving adoption assistance and juvenile-justice-involved children go to the Children\'s Specialty Program instead, and OHCA states "Oklahoma Complete Health serves these members."',
          'The exclusions matter for autism. OHCA\'s SoonerSelect fact sheet lists as not eligible, among others, "Individuals determined eligible for Medicaid on the basis of age, blindness or disability (ABD)" and "Individuals enrolled in a §1915(c) waiver" — so a child on SSI-based Medicaid or a DDS waiver keeps traditional SoonerCare, and OHCA or its designated agent handles the ABA authorization. American Indian and Alaska Native members may opt in but are not required to. Check plan assignment on every intake: providers can confirm it through the OHCA Provider Helpline at 800-522-0114, option 1. Until July 1, 2027, state law requires SoonerSelect plans to pay in-network providers at least 100% of the OHCA fee schedule unless the provider agrees to a value-based arrangement.',
        ],
        cites: [
          { title: 'OHCA — Learn about SoonerSelect (last modified 6/9/2026)', url: 'https://oklahoma.gov/ohca/soonerselect/about.html' },
          { title: 'OHCA — SoonerSelect Health Program Member Quick Reference Guide (Feb 2026)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/soonerselect/docs/health/SoonerSelect%20Health%20Member%20Guide.pdf' },
          { title: 'OHCA — SoonerSelect Care Programs Fact Sheet (mandatory, voluntary and excluded populations)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/about/soonerselect/provider-resources/SoonerSelect%20Fact%20Sheet.pdf' },
          { title: 'OHCA — Summary of Managed Care Guardrails in State Statute', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/about/soonerselect/provider-resources/OHCA%20Managed%20Care%20Guardrails.pdf' },
        ],
      },
      {
        h2: 'Licensure: who issues it is changing on November 1, 2026',
        body: [
          'Oklahoma licenses behavior analysts. Under 59 O.S. § 1928 as in force through October 31, 2026, a "Licensed behavior analyst" is a BCBA "licensed by the Developmental Disabilities Services Division" of OKDHS, a certified assistant behavior analyst is a BCaBA certified by DDS, "No person shall practice applied behavior analysis without obtaining a license or certification," and supervisees practise only under a licensed behavior analyst; licensed human services professionals (psychologists, LPCs, LCSWs, OTs, SLPs and others) may practise ABA within scope. SB 1557 (Laws 2026, c. 392) moves licensure to the State Board of Examiners of Psychologists effective November 1, 2026, adds a national criminal history check for applicants, and keeps renewal on April 30 of odd-numbered years. OHCA\'s rule still reads "licensed by ... OKDHS DDS", so expect the SoonerCare enrollment documents to follow the move.',
        ],
        cites: [
          { title: '59 O.S. § 1928 — Behavior analyst licensure (version in force through 10/31/2026: OKDHS Developmental Disabilities Services) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=553182' },
          { title: '59 O.S. § 1928 — as amended by SB 1557 (Laws 2026, c. 392), eff. 11/1/2026: State Board of Examiners of Psychologists — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=456318' },
          { title: 'OAC 317:30-5-311 — Eligible providers and requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/eligible-provider-and-requirements.html' },
        ],
      },
    ],
    collect: [
      { title: 'SoonerSelect plan, or fee-for-service', desc: 'Aetna Better Health, Humana Healthy Horizons, Oklahoma Complete Health (including the Children’s Specialty Program), or traditional SoonerCare for ABD and waiver members. The plan owns the authorization.' },
      { title: 'Diagnosis report, date and diagnostician', desc: 'Must be a definitive ASD dx from a discipline OAC 317:30-5-313 names, in Oklahoma or within 50 miles, and no older than two years at the start of ABA. Screening scales alone are not accepted.' },
      { title: 'Behaviour from the last 30 days', desc: 'Medical necessity requires atypical or disruptive behaviour within the most recent 30 days. Capture dated examples at intake.' },
      { title: 'Other therapies and school schedule', desc: 'ABA cannot be billed at the same time as OT, PT or speech, and school or daycare ABA needs OHCA approval (3 months max). Map the week first.' },
      { title: 'Parent training capacity', desc: 'At least 1 hour a week to earn a first RBT-hour increase, 2 hours a week after. Under 2 hours a month reduces or denies hours.' },
      { title: 'Current authorization end date', desc: 'Extensions can only be filed in the 7 calendar days before it. Late is a technical denial with lost days.' },
      { title: 'Other insurance', desc: 'SoonerCare is payer of last resort: bill the commercial plan first and follow its PA rules too.' },
    ],
    sources: [
      { title: 'OAC 317:30-5-310 — ABA purpose ("ABA services require prior authorization") [Issued 09-12-22]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/purpose-aba.html' },
      { title: 'OAC 317:30-5-311 — Eligible providers and requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/eligible-provider-and-requirements.html' },
      { title: 'OAC 317:30-5-312 — Treatment plan components and documentation requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/treatment-plan-components-and-documentation-requirements.html' },
      { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
      { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
      { title: 'OAC 317:30-5-315 — ABA extension requests [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/aba-extension-requests.html' },
      { title: 'OAC 317:30-5-316 — ABA reimbursement methodology [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/reimbursement-methodology.html' },
      { title: 'OAC 317:30-5-318 — ABA Service Quality Review [Issued 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/service-quality-review.html' },
      { title: 'OAC 317:30-3-65.12 — ABA services under the EPSDT benefit [Revised 09-12-22]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/early-and-periodic-screening-diagnostic-and-treatment-program-child-health-services/applied-behavior-analysis-services.html' },
      { title: 'OAC 317:30-3-31 — Prior authorization for health care-related goods and services [Revised 09-01-21]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/general-scope-and-administration/prior-authorization-for-health-care-related-goods-and-services.html' },
      { title: 'OAC 317:30-3-27 — Telehealth [Revised 03-13-26]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/general-scope-and-administration/telehealth.html' },
      { title: 'OHCA — Medical codes allowed for Telehealth (updated 8-10-26)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/telehealth/Medical%20codes%20allowed%20for%20Telehealth.pdf' },
      { title: 'OAC 317:30-3-24 — Third party liability [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/general-scope-and-administration/third-party-liability.html' },
      { title: 'OHCA — Applied Behavioral Analysis Application and Coding Information for Providers', url: 'https://oklahoma.gov/ohca/providers/applied-behavioral-analysis-application.html' },
      { title: 'OHCA — SoonerCare Title XIX fee schedule, effective 07/01/2026 (V3)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/claim-tools/fee-schedules/2026/Prov_fee_sch_TXIX_07012026_V3.txt' },
      { title: 'OHCA — Learn about SoonerSelect (last modified 6/9/2026)', url: 'https://oklahoma.gov/ohca/soonerselect/about.html' },
      { title: 'OHCA — SoonerSelect Health Program Member Quick Reference Guide (Feb 2026)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/soonerselect/docs/health/SoonerSelect%20Health%20Member%20Guide.pdf' },
      { title: 'OHCA — SoonerSelect Care Programs Fact Sheet (mandatory, voluntary and excluded populations)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/about/soonerselect/provider-resources/SoonerSelect%20Fact%20Sheet.pdf' },
      { title: 'OHCA — Summary of Managed Care Guardrails in State Statute', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/about/soonerselect/provider-resources/OHCA%20Managed%20Care%20Guardrails.pdf' },
      { title: '59 O.S. § 1928 — Behavior analyst licensure (version in force through 10/31/2026: OKDHS Developmental Disabilities Services) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=553182' },
      { title: '59 O.S. § 1928 — as amended by SB 1557 (Laws 2026, c. 392), eff. 11/1/2026: State Board of Examiners of Psychologists — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=456318' },
      { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
      { title: '56 O.S. § 4002.6 — SoonerSelect contracted entity prior authorization rules (as amended by HB 1810, eff. 11/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=489236' },
      { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
      { title: '42 CFR 440.230(e) — Medicaid fee-for-service prior authorization timeframes, from 1/1/2026 (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-440.230' },
      { title: '42 CFR 433.139 — Medicaid third-party liability, payment of claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Under 21. OAC 317:30-5-313 requires that "The member is under twenty-one (21) years of age," and OHCA provides ABA "under the EPSDT benefit" (OAC 317:30-3-65.12). No lower age bound is set. (OHCA’s provider application page words it as "ages 21 and younger"; the rule text says under 21.)',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'OAC 317:30-3-65.12 — ABA services under the EPSDT benefit [Revised 09-12-22]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/early-and-periodic-screening-diagnostic-and-treatment-program-child-health-services/applied-behavior-analysis-services.html' },
          { title: 'OHCA — Applied Behavioral Analysis Application and Coding Information for Providers', url: 'https://oklahoma.gov/ohca/providers/applied-behavioral-analysis-application.html' },
        ],
      },
      dxRecency: {
        value: 'The comprehensive diagnostic evaluation or clinical assessment "will only need to be completed at the first initiation of ABA services and should be no older than two (2) years old." No annual or biannual update is required, but OHCA may ask for one if diagnosis and recommendations are unclear or there are significant medical or behavioral changes, and a member who changes agencies must supply the evaluation during the initial authorization period. Separately, disruptive behaviour must be documented within the most recent 30 calendar days.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
        ],
      },
      diagnosingProviders: {
        value: 'A definitive ASD diagnosis from one of: pediatric neurologist or neurologist; developmental pediatrician; licensed psychologist; psychiatrist or neuropsychiatrist; other licensed physician experienced in the diagnosis and treatment of ASD; or an interdisciplinary team of a licensed psychologist, physician, physician assistant or APRN. The provider must be in Oklahoma or within 50 miles of the border (OAC 317:30-3-89 through 92); out-of-state evaluations are accepted only if they meet the documentation standard and come from one of these disciplines.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
        ],
      },
      diagnosticTools: {
        value: 'No single instrument is mandatory. The evaluation must include a complete medical and social history and be "based on criteria outlined in the Diagnostic and Statistical Manual of Mental Disorders (DSM)", and "may also include scores" from formal tests such as the ADI-R, ADOS-2 or CARS "or other tools with acceptable psychometric properties." "Screening scales are not sufficient to make a diagnosis and will not be accepted as the only formal scale." For the ABA clinical assessment itself, OHCA cites validated measures such as the Vineland, and accepts supporting assessments such as the ABLLS-R, AEPS and VB-MAPP with the PA request.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'OAC 317:30-5-312 — Treatment plan components and documentation requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/treatment-plan-components-and-documentation-requirements.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        ],
      },
      referral: {
        value: 'OHCA’s ABA rules require no physician referral or order: the gate is the definitive diagnosis plus prior authorization submitted by the contracted ABA provider "to the Oklahoma Health Care Authority (OHCA) or its designated agent." SoonerSelect plans use PCPs who "refer you to specialists when needed," so whether a plan requires a PCP referral for ABA is a plan question.',
        status: 'plan-dependent',
        cites: [
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'OHCA — Learn about SoonerSelect (last modified 6/9/2026)', url: 'https://oklahoma.gov/ohca/soonerselect/about.html' },
        ],
        verifyVia: 'The member’s SoonerSelect plan (Aetna Better Health 844-365-4385, Humana 855-223-9868, Oklahoma Complete Health 833-752-1664) — ask whether ABA needs a PCP referral on file; fee-for-service needs none under the OHCA rule.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Allowed with justification. "ABA treatment may be rendered via in-person service delivery, telehealth, or a hybrid," the modality must be defined in the PA template and treatment plan, and the provider must explain how telehealth benefits the member and parents. OHCA’s list of medical codes allowed for telehealth (updated 8/10/2026) includes 97151, 97155 and 97156 but not 97153, so technician-delivered treatment is in person. Telehealth claims carry the appropriate modifier, minors need annual written parent consent, and documentation must show the service was delivered by telehealth and where.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OHCA — Medical codes allowed for Telehealth (updated 8-10-26)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/telehealth/Medical%20codes%20allowed%20for%20Telehealth.pdf' },
          { title: 'OAC 317:30-5-316 — ABA reimbursement methodology [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/reimbursement-methodology.html' },
          { title: 'OAC 317:30-3-27 — Telehealth [Revised 03-13-26]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/general-scope-and-administration/telehealth.html' },
        ],
      },
      authTurnaround: {
        value: 'Oklahoma statute sets the clock. 56 O.S. § 4002.6(E): "If a contracted entity or the Authority requires prior authorization of a health care service," the decision is due "for urgent health care services, within seventy-two (72) hours of obtaining all necessary information" and "for non-urgent health care services, within seven (7) days of obtaining all necessary information"; if the provider submitted everything through the plan’s authorized PA system and the deadline is missed, the services "are deemed authorized." The approval must state its duration or expiry date, a plan may not revoke an authorization used within 45 business days, and a new SoonerSelect plan must honor the previous plan’s authorization for at least the first 60 days. Federal ceilings sit alongside: 42 CFR 438.210(d) (plans) and 440.230(e) (fee-for-service) cap standard decisions at 7 calendar days after the request is received from January 1, 2026, and expedited ones at 72 hours. Reauthorization lead time is fixed by OHCA rule: extensions "may only be submitted seven (7) calendar days prior to the end date."',
        status: 'verified',
        cites: [
          { title: '56 O.S. § 4002.6 — SoonerSelect contracted entity prior authorization rules (as amended by HB 1810, eff. 11/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=489236' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
          { title: '42 CFR 440.230(e) — Medicaid fee-for-service prior authorization timeframes, from 1/1/2026 (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-440.230' },
          { title: 'OAC 317:30-5-315 — ABA extension requests [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/aba-extension-requests.html' },
        ],
      },
      coordinationOfBenefits: {
        value: 'SoonerCare pays last. "As the Medicaid Agency, the Oklahoma Health Care Authority (OHCA) is the payer of last resort," so a commercial or absent-parent policy must be billed first and the EOB or denial attached. The family must meet both plans’ rules, including network rules. Oklahoma adds a useful line: "The state’s authorization that an item or service is as covered under the state plan ... shall meet the prior authorization requirements of the primary insurer." A provider paid by another source after OHCA paid must refund OHCA, and cannot bill the family for the balance other than copays. Exceptions to payer-of-last-resort are IHS care, IEP/IFSP school-based services and Crime Victims Compensation. Federal rule 42 CFR 433.139 lets states pay first and chase for EPSDT preventive pediatric services, but OHCA’s rule does not describe ABA that way, so bill the primary first. TRICARE pays ahead of Medicaid (32 CFR 199.8: "In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer").',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-3-24 — Third party liability [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/general-scope-and-administration/third-party-liability.html' },
          { title: '42 CFR 433.139 — Medicaid third-party liability, payment of claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'RBTs "must obtain ongoing supervision for a minimum of five percent (5%) of the hours they spend providing behavioral-analytic services each calendar month" and practise "under the close and ongoing supervision of a BCBA"; BCaBAs work under a SoonerCare-contracted BCBA. Concurrent RBT and supervision time is billable only when the PA request lays out the criteria and the BCBA or licensed psychologist met with the member or caregiver and directed the RBT (treatment integrity, new protocols, goal selection, family collaboration, data review, discharge planning) using behavioral skills training. The treatment plan must include training and supervision for BCaBAs and RBTs, and assessments must be completed by the BCBA.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-311 — Eligible providers and requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/eligible-provider-and-requirements.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OAC 317:30-5-312 — Treatment plan components and documentation requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/treatment-plan-components-and-documentation-requirements.html' },
        ],
      },
      concurrentBilling: {
        value: 'Allowed, with conditions. "Providers may only concurrently bill RBT and supervision hours when the following criteria is outlined in the prior authorization request," and the BCBA or licensed psychologist must have directed the RBT in session. "ABA is not allowed to be billed concurrently during any other therapies (i.e., OT, PT speech, etc.)," and "ABA hours approved for one CPT code cannot be used in place of another."',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        ],
      },
      dailyLimits: {
        value: 'No per-day unit cap is published. Limits are authorization-based: units granted for 1–6 months, intensity guidelines (>30, 20–30, 10–20 and 5–10 or fewer hours a week) with anything above them sent to physician and BCBA consultant review, and the FBA capped at 32 units (8 hours), requestable once every six months. Services are one-on-one only, except family adaptive behavior treatment guidance.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OAC 317:30-5-316 — ABA reimbursement methodology [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/reimbursement-methodology.html' },
        ],
      },
      noteSignature: {
        value: 'Every assessment and treatment service must record the date, start and stop time for each session or unit billed, the physical location, the "Signature of the provider(s) rendering services" and their credentials, goals addressed, methods, progress, the member’s response and any new problems. Treatment plans and updates are "not valid until all signatures are present": the supervising BCBA or licensed psychologist, a parent or legal guardian, and any minor aged 14 or older, each dated with month, day and year.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-312 — Treatment plan components and documentation requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/treatment-plan-components-and-documentation-requirements.html' },
        ],
      },
      placeOfService: {
        value: 'Home, community or clinic ("ABA may be provided in a variety of settings, including home, community, or clinical"). "ABA services are not allowed in a daycare setting or school setting, without OHCA approval. If approved, it will be time-limited to three (3) months or less," with a plan to fade support to school staff; private-school transitions are also capped at three months. School or daycare shadowing and aide work is excluded. Telehealth is allowed if justified in the PA (97151, 97155, 97156 on OHCA’s telehealth code list).',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-310 — ABA purpose ("ABA services require prior authorization") [Issued 09-12-22]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/purpose-aba.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OHCA — Medical codes allowed for Telehealth (updated 8-10-26)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/telehealth/Medical%20codes%20allowed%20for%20Telehealth.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Payment goes to the contracted, licensed provider, not the supervisee: "Payment is not made to under supervision ABA practitioners/paraprofessionals, including but not limited to, BCaBAs and RBTs," and OHCA’s provider page says payment for a BCaBA or other supervised practitioner "may only be made to his or her supervisor, or the employing agency or corporate entity." The RBT "works under the license number of a BCBA." Every staff member must still be individually contracted with OHCA, and the rule adds that "All ABA services should be billed under the rendering provider that performed the services." Telehealth services take the appropriate modifier.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-316 — ABA reimbursement methodology [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/reimbursement-methodology.html' },
          { title: 'OHCA — Applied Behavioral Analysis Application and Coding Information for Providers', url: 'https://oklahoma.gov/ohca/providers/applied-behavioral-analysis-application.html' },
          { title: 'OAC 317:30-5-311 — Eligible providers and requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/eligible-provider-and-requirements.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        ],
      },
    },
    faq: [
      { q: 'Does Oklahoma Medicaid cover ABA therapy?', a: 'Yes. SoonerCare covers ABA for members under 21 with a definitive ASD diagnosis, as an EPSDT benefit under OAC 317:30-5-313. Most children get it through a SoonerSelect plan; children eligible through disability (ABD) or a 1915(c) waiver stay in fee-for-service SoonerCare.' },
      { q: 'Which ABA codes does Oklahoma Medicaid pay, and at what rate?', a: 'Four: 97151, 97153, 97155 and 97156. The July 1, 2026 SoonerCare fee schedule pays $17.35 per 15-minute unit for 97153 and $23.55 per unit for the other three.' },
      { q: 'How old can the autism diagnosis be?', a: 'The comprehensive diagnostic evaluation should be no older than two years when ABA first starts. After that no annual re-evaluation is required, unless OHCA asks for one or the child changes agencies.' },
      { q: 'How long does an Oklahoma ABA authorization last?', a: 'One to six months of units, as clinically indicated. Extensions can only be submitted in the seven calendar days before the current end date; late submissions risk a technical denial and lost days.' },
      { q: 'Is parent training required for Oklahoma Medicaid ABA?', a: 'Effectively yes. A first extension asking for more RBT hours needs at least one hour a week of BCBA or BCaBA parent training for three months, later ones two hours a week, and under two hours a month of documented involvement reduces hours and can end services.' },
    ],
  },

  'aetna-better-health-oklahoma': {
    slug: 'aetna-better-health-oklahoma',
    family: 'aetna',
    cardDesc: 'SoonerSelect MCO. Delivers the SoonerCare ABA benefit; its current documents are blocked to us, and the archived 2025 manual has no ABA-specific rules.',
    assessmentPA: {
      value: 'Required under the SoonerCare floor ("ABA services require prior authorization," OAC 317:30-5-310). Whether Aetna Better Health lists 97151 in its ProPAT tool could not be checked: the tool and site return 403.',
      status: 'unverified',
      cites: [
        { title: 'OAC 317:30-5-310 — ABA purpose ("ABA services require prior authorization") [Issued 09-12-22]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/purpose-aba.html' },
        { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
      ],
      verifyVia: 'ProPAT (Aetna Better Health of Oklahoma PA lookup) or provider services at 844-365-4385: enter 97151, 97153, 97155 and 97156.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required — the plan’s Behavioral Health Prior Authorization Request (OK-23-08-01) has an "APPLIED BEHAVIOR ANALYSIS (ABA)" section for initial and concurrent requests, faxed to 833-923-0829; OHCA’s 1–6 month authorizations and seven-day extension window are the state floor.',
      status: 'verified',
      cites: [
        { title: 'Aetna Better Health of Oklahoma — Behavioral Health Prior Authorization Request (OK-23-08-01, ABA section 6) — read via Wayback', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/oklahoma/pdf/OK_2023_BHForm.pdf' },
        { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        { title: 'OAC 317:30-5-315 — ABA extension requests [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/aba-extension-requests.html' },
      ],
    },
    dxRequired: {
      value: 'SoonerCare floor: a definitive ASD diagnosis from a discipline OAC 317:30-5-313 names, evaluation no older than two years. The archived 2025 Aetna Better Health manual has no ABA criteria of its own; current plan documents could not be read.',
      status: 'unverified',
      cites: [
        { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
        { title: 'Aetna Better Health of Oklahoma Provider Manual, Vol. 4 (3/1/2025) — read via Wayback capture 4/3/2025; live site returns 403', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/oklahoma/pdf/abhok_provider_manual.pdf' },
      ],
      verifyVia: 'Aetna Better Health of Oklahoma provider services (844-365-4385): ask whether the plan applies any ABA criteria beyond OAC 317:30-5-313.',
      blocker: 'document',
    },
    payer: 'Aetna Better Health of Oklahoma',
    state: 'OK',
    kind: 'medicaid-mco',
    parent: 'Oklahoma Medicaid (SoonerCare / SoonerSelect) - Oklahoma Health Care Authority',
    pill: 'Payer Guide · Aetna Better Health of Oklahoma',
    h1: 'Aetna Better Health of Oklahoma ABA coverage (SoonerSelect).',
    metaTitle: 'Aetna Better Health of Oklahoma (SoonerSelect) ABA Coverage & Prior Auth | Carelu',
    metaDescription: 'How Aetna Better Health of Oklahoma handles SoonerCare ABA as a SoonerSelect plan: the OHCA rules it delivers, its behavioral health PA form with an ABA section, the PA fax and phone lines, state decision deadlines, and what to confirm because the plan’s current documents are not publicly readable.',
    intro: [
      'Aetna Better Health of Oklahoma is one of the three SoonerSelect health plans, and OHCA says all three "cover all services that SoonerCare fee-for-service covers," so OHCA’s Part 30 rules define the ABA benefit. What the plan adds is harder to see than for the other two: aetnabetterhealth.com refused every automated request in September 2026, and the most recent copy we could read, the March 2025 provider manual, does not mention ABA or the OHCA ABA rules at all. Its behavioral health prior authorization form does carry an ABA section. Treat the state rules as the benefit and confirm Aetna Better Health’s current PA list and supervision expectations by phone before the first request.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'SoonerSelect health plan (Aetna Better Health)' },
      { label: 'Clinical rules', value: 'SoonerCare benefit — OHCA ABA rules at OAC 317:30-5-310 to -318; no plan ABA policy found' },
      { label: 'Billable codes', value: '97151, 97153, 97155, 97156 per OHCA — confirm the plan’s PA list in ProPAT' },
      { label: 'ABA request', value: 'Behavioral Health PA Request form (OK-23-08-01), ABA section 6; fax 833-923-0829, phone 844-365-4385' },
      { label: 'Decision clock', value: 'State law: 7 days standard, 72 hours urgent from complete information (56 O.S. § 4002.6)' },
      { label: 'Other insurance', value: 'Archived 2025 manual: no plan PA needed when a primary insurer covers the service' },
    ],
    sections: [
      {
        h2: 'The state benefit is the benefit',
        body: [
          'For an Aetna Better Health member, build the ABA request to OHCA’s rules: a definitive ASD diagnosis from a discipline OAC 317:30-5-313 names and no more than two years old, disruptive behaviour documented within the last 30 days, the intensity tier that decides whether an FBA or BIP is needed, one-to-six-month authorizations, the three-month limit on approved school or daycare ABA, no ABA billed concurrently with other therapies, and the extension rules with their seven-day window and parent-training thresholds. The archived March 2025 manual says only that behavioral health coverage for members under 21 "applies to children diagnosed with autism spectrum disorder" and that "There are no treatment limitations for behavioral health services for members under 21 years of age."',
        ],
        cites: [
          { title: 'OHCA — SoonerSelect Health Program Member Quick Reference Guide (Feb 2026)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/soonerselect/docs/health/SoonerSelect%20Health%20Member%20Guide.pdf' },
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OAC 317:30-5-315 — ABA extension requests [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/aba-extension-requests.html' },
          { title: 'Aetna Better Health of Oklahoma Provider Manual, Vol. 4 (3/1/2025) — read via Wayback capture 4/3/2025; live site returns 403', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/oklahoma/pdf/abhok_provider_manual.pdf' },
        ],
      },
      {
        h2: 'Submitting requests, and what the plan has not published',
        body: [
          'The plan’s Behavioral Health Prior Authorization Request (OK-23-08-01) has an "APPLIED BEHAVIOR ANALYSIS (ABA)" service type and a dedicated ABA section for initial and concurrent requests, faxed to 833-923-0829 (phone 844-365-4385). The archived manual points to the secure portal and ProPAT for the list of services needing PA. It promised standard decisions within 72 hours under the version of 56 O.S. § 4002.6 then in force; the statute now allows seven days for non-urgent requests and 72 hours for urgent ones, and the plan’s 2025 metrics report restates the CMS 7-day standard from January 2026. We could not read a current manual, the ProPAT code list, an Oklahoma ABA clinical policy, or any 2026 supervision or reassessment notice like those the other two plans issued, so ask about each on the first call.',
        ],
        cites: [
          { title: 'Aetna Better Health of Oklahoma — Behavioral Health Prior Authorization Request (OK-23-08-01, ABA section 6) — read via Wayback', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/oklahoma/pdf/OK_2023_BHForm.pdf' },
          { title: 'Aetna Better Health of Oklahoma Provider Manual, Vol. 4 (3/1/2025) — read via Wayback capture 4/3/2025; live site returns 403', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/oklahoma/pdf/abhok_provider_manual.pdf' },
          { title: 'Aetna Better Health of Oklahoma — 2025 Auth and Appeals Metrics (CMS rule timeframes from 1/1/2026) — read via Wayback', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/oklahoma/pdf/2025_ABHOK_CMS_Web_Metrics_Provider.pdf' },
          { title: '56 O.S. § 4002.6 — SoonerSelect contracted entity prior authorization rules (as amended by HB 1810, eff. 11/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=489236' },
        ],
      },
    ],
    collect: [
      { title: 'Plan assignment', desc: 'Confirm Aetna Better Health of Oklahoma on the member ID card or through the OHCA Provider Helpline (800-522-0114, option 1). ABD and waiver children stay in fee-for-service.' },
      { title: 'Diagnosis report, date and diagnostician', desc: 'A definitive ASD diagnosis from a discipline OAC 317:30-5-313 names, in Oklahoma or within 50 miles, no older than two years at the start of ABA.' },
      { title: 'Behaviour from the last 30 days', desc: 'Required by the state medical-necessity rule the plan applies.' },
      { title: 'Current authorization end date', desc: 'The OHCA seven-day extension window applies to plan members too.' },
      { title: 'Parent training capacity', desc: 'Under two hours a month of documented parent involvement reduces or denies hours under the state rule.' },
    ],
    sources: [
      { title: 'Aetna Better Health of Oklahoma Provider Manual, Vol. 4 (3/1/2025) — read via Wayback capture 4/3/2025; live site returns 403', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/oklahoma/pdf/abhok_provider_manual.pdf' },
      { title: 'Aetna Better Health of Oklahoma — Behavioral Health Prior Authorization Request (OK-23-08-01, ABA section 6) — read via Wayback', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/oklahoma/pdf/OK_2023_BHForm.pdf' },
      { title: 'Aetna Better Health of Oklahoma — 2025 Auth and Appeals Metrics (CMS rule timeframes from 1/1/2026) — read via Wayback', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/oklahoma/pdf/2025_ABHOK_CMS_Web_Metrics_Provider.pdf' },
      { title: 'OHCA — Learn about SoonerSelect (last modified 6/9/2026)', url: 'https://oklahoma.gov/ohca/soonerselect/about.html' },
      { title: 'OHCA — SoonerSelect Health Program Member Quick Reference Guide (Feb 2026)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/soonerselect/docs/health/SoonerSelect%20Health%20Member%20Guide.pdf' },
      { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
      { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
      { title: 'OAC 317:30-5-315 — ABA extension requests [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/aba-extension-requests.html' },
      { title: '56 O.S. § 4002.6 — SoonerSelect contracted entity prior authorization rules (as amended by HB 1810, eff. 11/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=489236' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'SoonerCare floor (the plan’s current documents could not be read to confirm it adds nothing): Under 21. OAC 317:30-5-313 requires that "The member is under twenty-one (21) years of age," and OHCA provides ABA "under the EPSDT benefit" (OAC 317:30-3-65.12). No lower age bound is set. (OHCA’s provider application page words it as "ages 21 and younger"; the rule text says under 21.)',
        status: 'unverified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'OAC 317:30-3-65.12 — ABA services under the EPSDT benefit [Revised 09-12-22]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/early-and-periodic-screening-diagnostic-and-treatment-program-child-health-services/applied-behavior-analysis-services.html' },
          { title: 'OHCA — Applied Behavioral Analysis Application and Coding Information for Providers', url: 'https://oklahoma.gov/ohca/providers/applied-behavioral-analysis-application.html' },
        ],
        verifyVia: 'Aetna Better Health of Oklahoma provider services (844-365-4385) or the ProPAT tool and provider manual on aetnabetterhealth.com/oklahoma — the site returned 403 to every automated route in September 2026, so a human needs to pull the current manual and ABA PA rules.',
        blocker: 'document',
      },
      dxRecency: {
        value: 'SoonerCare floor (the plan’s current documents could not be read to confirm it adds nothing): The comprehensive diagnostic evaluation or clinical assessment "will only need to be completed at the first initiation of ABA services and should be no older than two (2) years old." No annual or biannual update is required, but OHCA may ask for one if diagnosis and recommendations are unclear or there are significant medical or behavioral changes, and a member who changes agencies must supply the evaluation during the initial authorization period. Separately, disruptive behaviour must be documented within the most recent 30 calendar days.',
        status: 'unverified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
        ],
        verifyVia: 'Aetna Better Health of Oklahoma provider services (844-365-4385) or the ProPAT tool and provider manual on aetnabetterhealth.com/oklahoma — the site returned 403 to every automated route in September 2026, so a human needs to pull the current manual and ABA PA rules.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'SoonerCare floor (the plan’s current documents could not be read to confirm it adds nothing): A definitive ASD diagnosis from one of: pediatric neurologist or neurologist; developmental pediatrician; licensed psychologist; psychiatrist or neuropsychiatrist; other licensed physician experienced in the diagnosis and treatment of ASD; or an interdisciplinary team of a licensed psychologist, physician, physician assistant or APRN. The provider must be in Oklahoma or within 50 miles of the border (OAC 317:30-3-89 through 92); out-of-state evaluations are accepted only if they meet the documentation standard and come from one of these disciplines.',
        status: 'unverified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
        ],
        verifyVia: 'Aetna Better Health of Oklahoma provider services (844-365-4385) or the ProPAT tool and provider manual on aetnabetterhealth.com/oklahoma — the site returned 403 to every automated route in September 2026, so a human needs to pull the current manual and ABA PA rules.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'SoonerCare floor (the plan’s current documents could not be read to confirm it adds nothing): No single instrument is mandatory. The evaluation must include a complete medical and social history and be "based on criteria outlined in the Diagnostic and Statistical Manual of Mental Disorders (DSM)", and "may also include scores" from formal tests such as the ADI-R, ADOS-2 or CARS "or other tools with acceptable psychometric properties." "Screening scales are not sufficient to make a diagnosis and will not be accepted as the only formal scale." For the ABA clinical assessment itself, OHCA cites validated measures such as the Vineland, and accepts supporting assessments such as the ABLLS-R, AEPS and VB-MAPP with the PA request.',
        status: 'unverified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'OAC 317:30-5-312 — Treatment plan components and documentation requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/treatment-plan-components-and-documentation-requirements.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        ],
        verifyVia: 'Aetna Better Health of Oklahoma provider services (844-365-4385) or the ProPAT tool and provider manual on aetnabetterhealth.com/oklahoma — the site returned 403 to every automated route in September 2026, so a human needs to pull the current manual and ABA PA rules.',
        blocker: 'document',
      },
      referral: {
        value: 'SoonerCare floor (the plan’s current documents could not be read to confirm it adds nothing): OHCA’s ABA rules require no physician referral or order: the gate is the definitive diagnosis plus prior authorization submitted by the contracted ABA provider "to the Oklahoma Health Care Authority (OHCA) or its designated agent." SoonerSelect plans use PCPs who "refer you to specialists when needed," so whether a plan requires a PCP referral for ABA is a plan question.',
        status: 'unverified',
        cites: [
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'OHCA — Learn about SoonerSelect (last modified 6/9/2026)', url: 'https://oklahoma.gov/ohca/soonerselect/about.html' },
        ],
        verifyVia: 'Aetna Better Health of Oklahoma provider services (844-365-4385) or the ProPAT tool and provider manual on aetnabetterhealth.com/oklahoma — the site returned 403 to every automated route in September 2026, so a human needs to pull the current manual and ABA PA rules.',
        blocker: 'document',
      },
      telehealth: {
        value: 'SoonerCare floor (the plan’s current documents could not be read to confirm it adds nothing): Allowed with justification. "ABA treatment may be rendered via in-person service delivery, telehealth, or a hybrid," the modality must be defined in the PA template and treatment plan, and the provider must explain how telehealth benefits the member and parents. OHCA’s list of medical codes allowed for telehealth (updated 8/10/2026) includes 97151, 97155 and 97156 but not 97153, so technician-delivered treatment is in person. Telehealth claims carry the appropriate modifier, minors need annual written parent consent, and documentation must show the service was delivered by telehealth and where.',
        status: 'unverified',
        cites: [
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OHCA — Medical codes allowed for Telehealth (updated 8-10-26)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/telehealth/Medical%20codes%20allowed%20for%20Telehealth.pdf' },
          { title: 'OAC 317:30-5-316 — ABA reimbursement methodology [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/reimbursement-methodology.html' },
          { title: 'OAC 317:30-3-27 — Telehealth [Revised 03-13-26]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/general-scope-and-administration/telehealth.html' },
        ],
        verifyVia: 'Aetna Better Health of Oklahoma provider services (844-365-4385) or the ProPAT tool and provider manual on aetnabetterhealth.com/oklahoma — the site returned 403 to every automated route in September 2026, so a human needs to pull the current manual and ABA PA rules.',
        blocker: 'document',
      },
      authTurnaround: {
        value: 'State law governs every SoonerSelect plan: 56 O.S. § 4002.6 requires decisions "within seven (7) days of obtaining all necessary information" for non-urgent services and within 72 hours for urgent ones, deemed authorized if a complete portal request is missed; 42 CFR 438.210(d) caps standard decisions at 7 calendar days from receipt from January 2026. The plan’s archived March 2025 manual and ABA request form promised 72 hours for standard and 24 hours for urgent requests; whether it still does is not confirmed. Extensions follow OHCA’s seven-day window.',
        status: 'verified',
        cites: [
          { title: '56 O.S. § 4002.6 — SoonerSelect contracted entity prior authorization rules (as amended by HB 1810, eff. 11/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=489236' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
          { title: 'Aetna Better Health of Oklahoma Provider Manual, Vol. 4 (3/1/2025) — read via Wayback capture 4/3/2025; live site returns 403', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/oklahoma/pdf/abhok_provider_manual.pdf' },
          { title: 'Aetna Better Health of Oklahoma — Behavioral Health Prior Authorization Request (OK-23-08-01, ABA section 6) — read via Wayback', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/oklahoma/pdf/OK_2023_BHForm.pdf' },
          { title: 'OAC 317:30-5-315 — ABA extension requests [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/aba-extension-requests.html' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Medicaid pays last ("Medicaid is always the payor of last resort"), and the primary carrier’s EOB is required. The archived March 2025 manual adds: "If other insurance is the primary payer before Aetna Better Health, prior authorization of a service is not required, unless it is known that the service provided is not covered by the primary payer." OHCA’s rule adds that the state’s authorization meets the primary insurer’s PA requirement. Confirm the current manual still says this.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna Better Health of Oklahoma Provider Manual, Vol. 4 (3/1/2025) — read via Wayback capture 4/3/2025; live site returns 403', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/oklahoma/pdf/abhok_provider_manual.pdf' },
          { title: 'OAC 317:30-3-24 — Third party liability [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/general-scope-and-administration/third-party-liability.html' },
        ],
        verifyVia: 'Aetna Better Health of Oklahoma provider services (844-365-4385): confirm the current rule on secondary-payer prior authorization for ABA.',
        blocker: 'document',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'SoonerCare floor (the plan’s current documents could not be read to confirm it adds nothing): RBTs "must obtain ongoing supervision for a minimum of five percent (5%) of the hours they spend providing behavioral-analytic services each calendar month" and practise "under the close and ongoing supervision of a BCBA"; BCaBAs work under a SoonerCare-contracted BCBA. Concurrent RBT and supervision time is billable only when the PA request lays out the criteria and the BCBA or licensed psychologist met with the member or caregiver and directed the RBT (treatment integrity, new protocols, goal selection, family collaboration, data review, discharge planning) using behavioral skills training. The treatment plan must include training and supervision for BCaBAs and RBTs, and assessments must be completed by the BCBA.',
        status: 'unverified',
        cites: [
          { title: 'OAC 317:30-5-311 — Eligible providers and requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/eligible-provider-and-requirements.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OAC 317:30-5-312 — Treatment plan components and documentation requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/treatment-plan-components-and-documentation-requirements.html' },
        ],
        verifyVia: 'Aetna Better Health of Oklahoma provider services (844-365-4385) or the ProPAT tool and provider manual on aetnabetterhealth.com/oklahoma — the site returned 403 to every automated route in September 2026, so a human needs to pull the current manual and ABA PA rules.',
        blocker: 'document',
      },
      concurrentBilling: {
        value: 'SoonerCare floor (the plan’s current documents could not be read to confirm it adds nothing): Allowed, with conditions. "Providers may only concurrently bill RBT and supervision hours when the following criteria is outlined in the prior authorization request," and the BCBA or licensed psychologist must have directed the RBT in session. "ABA is not allowed to be billed concurrently during any other therapies (i.e., OT, PT speech, etc.)," and "ABA hours approved for one CPT code cannot be used in place of another."',
        status: 'unverified',
        cites: [
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        ],
        verifyVia: 'Aetna Better Health of Oklahoma provider services (844-365-4385) or the ProPAT tool and provider manual on aetnabetterhealth.com/oklahoma — the site returned 403 to every automated route in September 2026, so a human needs to pull the current manual and ABA PA rules.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'SoonerCare floor (the plan’s current documents could not be read to confirm it adds nothing): No per-day unit cap is published. Limits are authorization-based: units granted for 1–6 months, intensity guidelines (>30, 20–30, 10–20 and 5–10 or fewer hours a week) with anything above them sent to physician and BCBA consultant review, and the FBA capped at 32 units (8 hours), requestable once every six months. Services are one-on-one only, except family adaptive behavior treatment guidance.',
        status: 'unverified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OAC 317:30-5-316 — ABA reimbursement methodology [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/reimbursement-methodology.html' },
        ],
        verifyVia: 'Aetna Better Health of Oklahoma provider services (844-365-4385) or the ProPAT tool and provider manual on aetnabetterhealth.com/oklahoma — the site returned 403 to every automated route in September 2026, so a human needs to pull the current manual and ABA PA rules.',
        blocker: 'document',
      },
      noteSignature: {
        value: 'SoonerCare floor (the plan’s current documents could not be read to confirm it adds nothing): Every assessment and treatment service must record the date, start and stop time for each session or unit billed, the physical location, the "Signature of the provider(s) rendering services" and their credentials, goals addressed, methods, progress, the member’s response and any new problems. Treatment plans and updates are "not valid until all signatures are present": the supervising BCBA or licensed psychologist, a parent or legal guardian, and any minor aged 14 or older, each dated with month, day and year.',
        status: 'unverified',
        cites: [
          { title: 'OAC 317:30-5-312 — Treatment plan components and documentation requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/treatment-plan-components-and-documentation-requirements.html' },
        ],
        verifyVia: 'Aetna Better Health of Oklahoma provider services (844-365-4385) or the ProPAT tool and provider manual on aetnabetterhealth.com/oklahoma — the site returned 403 to every automated route in September 2026, so a human needs to pull the current manual and ABA PA rules.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'SoonerCare floor (the plan’s current documents could not be read to confirm it adds nothing): Home, community or clinic ("ABA may be provided in a variety of settings, including home, community, or clinical"). "ABA services are not allowed in a daycare setting or school setting, without OHCA approval. If approved, it will be time-limited to three (3) months or less," with a plan to fade support to school staff; private-school transitions are also capped at three months. School or daycare shadowing and aide work is excluded. Telehealth is allowed if justified in the PA (97151, 97155, 97156 on OHCA’s telehealth code list).',
        status: 'unverified',
        cites: [
          { title: 'OAC 317:30-5-310 — ABA purpose ("ABA services require prior authorization") [Issued 09-12-22]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/purpose-aba.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OHCA — Medical codes allowed for Telehealth (updated 8-10-26)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/telehealth/Medical%20codes%20allowed%20for%20Telehealth.pdf' },
        ],
        verifyVia: 'Aetna Better Health of Oklahoma provider services (844-365-4385) or the ProPAT tool and provider manual on aetnabetterhealth.com/oklahoma — the site returned 403 to every automated route in September 2026, so a human needs to pull the current manual and ABA PA rules.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'SoonerCare floor (the plan’s current documents could not be read to confirm it adds nothing): Payment goes to the contracted, licensed provider, not the supervisee: "Payment is not made to under supervision ABA practitioners/paraprofessionals, including but not limited to, BCaBAs and RBTs," and OHCA’s provider page says payment for a BCaBA or other supervised practitioner "may only be made to his or her supervisor, or the employing agency or corporate entity." The RBT "works under the license number of a BCBA." Every staff member must still be individually contracted with OHCA, and the rule adds that "All ABA services should be billed under the rendering provider that performed the services." Telehealth services take the appropriate modifier.',
        status: 'unverified',
        cites: [
          { title: 'OAC 317:30-5-316 — ABA reimbursement methodology [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/reimbursement-methodology.html' },
          { title: 'OHCA — Applied Behavioral Analysis Application and Coding Information for Providers', url: 'https://oklahoma.gov/ohca/providers/applied-behavioral-analysis-application.html' },
          { title: 'OAC 317:30-5-311 — Eligible providers and requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/eligible-provider-and-requirements.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        ],
        verifyVia: 'Aetna Better Health of Oklahoma provider services (844-365-4385) or the ProPAT tool and provider manual on aetnabetterhealth.com/oklahoma — the site returned 403 to every automated route in September 2026, so a human needs to pull the current manual and ABA PA rules.',
        blocker: 'document',
      },
    },
    faq: [
      { q: 'Does Aetna Better Health of Oklahoma cover ABA therapy?', a: 'Yes. As a SoonerSelect plan it covers all SoonerCare services, including ABA for members under 21 with a definitive ASD diagnosis. Confirm its current PA list before the first request.' },
      { q: 'How do I request ABA authorization from Aetna Better Health of Oklahoma?', a: 'Its Behavioral Health Prior Authorization Request form has an ABA section for initial and concurrent requests, faxed to 833-923-0829; the phone line is 844-365-4385. Check the portal or ProPAT for current codes.' },
      { q: 'Which ABA codes can I bill to Aetna Better Health of Oklahoma?', a: 'OHCA pays four for SoonerCare ABA: 97151, 97153, 97155 and 97156. Confirm the plan’s current list before billing anything else.' },
    ],
  },

  'oklahoma-complete-health': {
    slug: 'oklahoma-complete-health',
    family: 'centene',
    cardDesc: 'SoonerSelect MCO (Centene) and the only Children’s Specialty Program plan. OK.CP.BH.500 adopts OHCA’s ABA rules; 10% case supervision since 6/30/2026.',
    assessmentPA: {
      value: 'Required — the plan’s Pre-Auth Check tool returns "Pre-authorization is required for all providers" for 97151 (and for 97153, 97155, 97156); the manual lists ABA as "Covered; prior authorization required." From 9/16/2026 a reassessment is billed as 97151 with modifier TS.',
      status: 'verified',
      cites: [
        { title: 'Oklahoma Complete Health — Medicaid Pre-Auth Check tool (queried 9/24/2026 for 97151–97158, 0362T, 0373T)', url: 'https://www.oklahomacompletehealth.com/providers/preauth-check/medicaid-pre-auth.html' },
        { title: 'Oklahoma Complete Health — 2026 Provider Manual (Caid_SSP.CSP-Provider-Manual-OK-Eng_260604)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/pdfs/Provider%20Manual/English/2026/SSP/Provider%20Manual_2026.5_Approved_R.pdf' },
        { title: 'Oklahoma Complete Health — For Providers: ABA Billing Requirements (9/8/2026; 97151-TS from 9/16/2026)', url: 'https://www.oklahomacompletehealth.com/providers/provider-news/for-providers--aba-billing-requirements.html' },
      ],
    },
    treatmentPA: {
      value: 'Required for 97153, 97155 and 97156 for all providers; the plan applies OHCA’s authorization rules (1–6 months of units, seven-day extension window) under OK.CP.BH.500. Group codes 97154, 97157 and 97158 are "not a covered benefit."',
      status: 'verified',
      cites: [
        { title: 'Oklahoma Complete Health — Medicaid Pre-Auth Check tool (queried 9/24/2026 for 97151–97158, 0362T, 0373T)', url: 'https://www.oklahomacompletehealth.com/providers/preauth-check/medicaid-pre-auth.html' },
        { title: 'Oklahoma Complete Health clinical policy OK.CP.BH.500 — Applied Behavioral Analysis (last revised 07/25)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/OK.CP.BH.500.pdf' },
        { title: 'Oklahoma Complete Health — ABA Coverage Reminder (5/11/2026; group ABA not covered)', url: 'https://www.oklahomacompletehealth.com/providers/provider-news/aba-provider-.html' },
        { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        { title: 'OAC 317:30-5-315 — ABA extension requests [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/aba-extension-requests.html' },
      ],
    },
    dxRequired: {
      value: 'Yes — under 21 "with a definitive diagnosis of autism spectrum disorder (ASD)" from a pediatric neurologist or neurologist, developmental pediatrician, licensed psychologist, psychiatrist or neuropsychiatrist, or other licensed physician experienced in ASD (OK.CP.BH.500, 07/25). OHCA’s 9/1/2025 rule also accepts an interdisciplinary team and sets a two-year limit on the evaluation; the plan’s policy predates that revision.',
      status: 'verified',
      cites: [
        { title: 'Oklahoma Complete Health clinical policy OK.CP.BH.500 — Applied Behavioral Analysis (last revised 07/25)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/OK.CP.BH.500.pdf' },
        { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
      ],
    },
    payer: 'Centene - Oklahoma Complete Health',
    state: 'OK',
    kind: 'medicaid-mco',
    parent: 'Oklahoma Medicaid (SoonerCare / SoonerSelect) - Oklahoma Health Care Authority',
    pill: 'Payer Guide · Oklahoma Complete Health',
    h1: 'Oklahoma Complete Health ABA coverage (SoonerSelect).',
    metaTitle: 'Oklahoma Complete Health (SoonerSelect) ABA Coverage & Prior Auth | Carelu',
    metaDescription: 'How Oklahoma Complete Health administers the SoonerCare ABA benefit: OK.CP.BH.500 adopting OHCA’s rules, prior authorization on 97151/97153/97155/97156, no group codes, 10% case supervision since June 2026, the 97151-TS reassessment modifier, the Children’s Specialty Program, and its decision clocks.',
    intro: [
      'Oklahoma Complete Health is Centene’s SoonerSelect plan, and the one an ABA practice sees on every foster-care and child-welfare referral: OHCA states that the Children’s Specialty Program "covers SoonerSelect children and youth served by Oklahoma Human Services’ Child Welfare Services" and "Oklahoma Complete Health serves these members." Its ABA policy, OK.CP.BH.500 (Oklahoma Complete Health and Centene Advanced Behavioral Health), is written directly on OHCA’s Part 30 rules, so the state benefit is the clinical baseline. The plan’s own layer is operational and it moved in 2026: case supervision doubled to 10% of direct hours from June 30, group ABA was confirmed as not covered, and ABA reassessments carry modifier TS from September 16.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'SoonerSelect health plan (Centene) — also the Children’s Specialty Program plan' },
      { label: 'Clinical rules', value: 'OK.CP.BH.500 adopts OHCA’s ABA rules (OAC 317:30-5-310 to -316); under 21 only' },
      { label: 'Prior auth', value: '97151, 97153, 97155, 97156 — required for all providers (Pre-Auth Check, 9/2026)' },
      { label: 'Not covered', value: 'Group ABA (97154, 97157, 97158); individual codes billed for group sessions are recouped' },
      { label: 'Case supervision', value: '10% of direct treatment hours from 6/30/2026 (was 5%)' },
      { label: 'Reassessment', value: '97151 with modifier TS in position 1 from 9/16/2026' },
      { label: 'Decision clock', value: 'Standard 7 calendar days, expedited 72 hours (2026 manual)' },
    ],
    sections: [
      {
        h2: 'The state rules, adopted in the plan’s own policy',
        body: [
          'OK.CP.BH.500 covers ABA requests under "Title 317. Oklahoma Health Care Authority. Part 30" and repeats OHCA’s criteria: a member under 21 with a definitive ASD diagnosis from a named discipline, a comprehensive diagnostic evaluation with medical and social history and DSM criteria or formal test scores (ADI-R, ADOS-2, CARS; "Screening scales are not sufficient"), medical stability, and disruptive behaviour "within the last 30 days." The policy was last revised in July 2025, before OHCA’s September 1, 2025 revision added the interdisciplinary-team diagnostic path and the two-year limit on the evaluation, so build requests to the current OHCA rule and expect the plan to apply it. The 2026 manual lists ABA as "Covered; prior authorization required" for children and "Not Covered" for adults, and repeats that OHCA requires one-to-one delivery "except for approved family or caregiver guidance."',
        ],
        cites: [
          { title: 'Oklahoma Complete Health clinical policy OK.CP.BH.500 — Applied Behavioral Analysis (last revised 07/25)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/OK.CP.BH.500.pdf' },
          { title: 'Oklahoma Complete Health — 2026 Provider Manual (Caid_SSP.CSP-Provider-Manual-OK-Eng_260604)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/pdfs/Provider%20Manual/English/2026/SSP/Provider%20Manual_2026.5_Approved_R.pdf' },
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
        ],
      },
      {
        h2: '2026 changes: supervision, group codes, reassessment modifier',
        body: [
          'Three provider notices changed the claim in 2026. On May 11 the plan reminded providers that "Group ABA therapy is not a covered benefit" and that billing individual ABA codes for group sessions is not permitted, with recoupment on audit. On May 15 it announced it was "increasing required case supervision from 5% to 10% of direct treatment hours," effective June 30, 2026 — double the 5% RBT floor in OHCA’s rule. On September 8 it announced that from September 16, 2026 every ABA reassessment billed as 97151 "must include modifier TS in Position 1," while prior authorization requests continue as before. The Centene documentation policy CP.BH.105 adds session-note rules: signatures and printed names of the member or guardian, rendering clinician or technician and supervising practitioner, cameras on for telehealth sessions, and 97155 protocol-modification visits that do not exceed eight units a day.',
        ],
        cites: [
          { title: 'Oklahoma Complete Health — ABA Coverage Reminder (5/11/2026; group ABA not covered)', url: 'https://www.oklahomacompletehealth.com/providers/provider-news/aba-provider-.html' },
          { title: 'Oklahoma Complete Health — ABA Case Supervision Update (5/15/2026; 10% effective 6/30/2026)', url: 'https://www.oklahomacompletehealth.com/providers/provider-news/aba-case-supervision-update.html' },
          { title: 'Oklahoma Complete Health — For Providers: ABA Billing Requirements (9/8/2026; 97151-TS from 9/16/2026)', url: 'https://www.oklahomacompletehealth.com/providers/provider-news/for-providers--aba-billing-requirements.html' },
          { title: 'Centene clinical policy CP.BH.105 — ABA Documentation Requirements (revised 11/25), posted by Oklahoma Complete Health', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/CP.BH.105.pdf' },
          { title: 'OAC 317:30-5-311 — Eligible providers and requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/eligible-provider-and-requirements.html' },
        ],
      },
      {
        h2: 'Submitting and timing requests',
        body: [
          'The manual names the Availity portal as the preferred route for prior authorization, with a fax form (Physical/Behavioral Health fax 1-844-565-0273) for portal downtime; plan phone 833-752-1664, or 833-752-1665 for Children’s Specialty Program members. The manual’s timeframes are "Standard Preservice/Non-Urgent Within 7 calendar days" and 72 hours expedited, in line with state law (56 O.S. § 4002.6) and 42 CFR 438.210(d). The plan’s older fax form (rev. July 2024) still prints a 72-hour standard turnaround; the 2026 manual controls.',
        ],
        cites: [
          { title: 'Oklahoma Complete Health — 2026 Provider Manual (Caid_SSP.CSP-Provider-Manual-OK-Eng_260604)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/pdfs/Provider%20Manual/English/2026/SSP/Provider%20Manual_2026.5_Approved_R.pdf' },
          { title: 'Oklahoma Complete Health — Outpatient Prior Authorization Fax Form (OK-PAF-6374, rev. 7/29/2024)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/OK-OP-PAF-6374-GTU.pdf' },
          { title: '56 O.S. § 4002.6 — SoonerSelect contracted entity prior authorization rules (as amended by HB 1810, eff. 11/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=489236' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
    ],
    collect: [
      { title: 'Children’s Specialty Program or general SoonerSelect', desc: 'Foster, former foster, adoption-assistance and juvenile-justice children are on the Children’s Specialty Program (833-752-1665). Same plan, different member line.' },
      { title: 'Diagnosis report, date and diagnostician', desc: 'A definitive ASD diagnosis from a discipline OAC 317:30-5-313 names, in Oklahoma or within 50 miles, no older than two years at the start of ABA.' },
      { title: 'Behaviour from the last 30 days', desc: 'Required by the state medical-necessity rule the plan applies.' },
      { title: 'Current authorization end date', desc: 'The OHCA seven-day extension window applies to plan members too.' },
      { title: 'Parent training capacity', desc: 'Under two hours a month of documented parent involvement reduces or denies hours under the state rule.' },
      { title: 'Supervision staffing', desc: 'Plan for BCBA case supervision at 10% of direct hours, not 5%.' },
    ],
    sources: [
      { title: 'Oklahoma Complete Health — 2026 Provider Manual (Caid_SSP.CSP-Provider-Manual-OK-Eng_260604)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/pdfs/Provider%20Manual/English/2026/SSP/Provider%20Manual_2026.5_Approved_R.pdf' },
      { title: 'Oklahoma Complete Health clinical policy OK.CP.BH.500 — Applied Behavioral Analysis (last revised 07/25)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/OK.CP.BH.500.pdf' },
      { title: 'Centene clinical policy CP.BH.105 — ABA Documentation Requirements (revised 11/25), posted by Oklahoma Complete Health', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/CP.BH.105.pdf' },
      { title: 'Oklahoma Complete Health — Medicaid Pre-Auth Check tool (queried 9/24/2026 for 97151–97158, 0362T, 0373T)', url: 'https://www.oklahomacompletehealth.com/providers/preauth-check/medicaid-pre-auth.html' },
      { title: 'Oklahoma Complete Health — ABA Case Supervision Update (5/15/2026; 10% effective 6/30/2026)', url: 'https://www.oklahomacompletehealth.com/providers/provider-news/aba-case-supervision-update.html' },
      { title: 'Oklahoma Complete Health — ABA Coverage Reminder (5/11/2026; group ABA not covered)', url: 'https://www.oklahomacompletehealth.com/providers/provider-news/aba-provider-.html' },
      { title: 'Oklahoma Complete Health — For Providers: ABA Billing Requirements (9/8/2026; 97151-TS from 9/16/2026)', url: 'https://www.oklahomacompletehealth.com/providers/provider-news/for-providers--aba-billing-requirements.html' },
      { title: 'Oklahoma Complete Health — Outpatient Prior Authorization Fax Form (OK-PAF-6374, rev. 7/29/2024)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/OK-OP-PAF-6374-GTU.pdf' },
      { title: 'OHCA — Learn about SoonerSelect (last modified 6/9/2026)', url: 'https://oklahoma.gov/ohca/soonerselect/about.html' },
      { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
      { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
      { title: 'OAC 317:30-5-315 — ABA extension requests [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/aba-extension-requests.html' },
      { title: '56 O.S. § 4002.6 — SoonerSelect contracted entity prior authorization rules (as amended by HB 1810, eff. 11/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=489236' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the SoonerCare rule: Under 21. OAC 317:30-5-313 requires that "The member is under twenty-one (21) years of age," and OHCA provides ABA "under the EPSDT benefit" (OAC 317:30-3-65.12). No lower age bound is set. (OHCA’s provider application page words it as "ages 21 and younger"; the rule text says under 21.) Oklahoma Complete Health was checked for its own rule on this point and publishes nothing different, so the OHCA rule applies.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'OAC 317:30-3-65.12 — ABA services under the EPSDT benefit [Revised 09-12-22]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/early-and-periodic-screening-diagnostic-and-treatment-program-child-health-services/applied-behavior-analysis-services.html' },
          { title: 'OHCA — Applied Behavioral Analysis Application and Coding Information for Providers', url: 'https://oklahoma.gov/ohca/providers/applied-behavioral-analysis-application.html' },
          { title: 'Oklahoma Complete Health clinical policy OK.CP.BH.500 — Applied Behavioral Analysis (last revised 07/25)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/OK.CP.BH.500.pdf' },
          { title: 'Oklahoma Complete Health — 2026 Provider Manual (Caid_SSP.CSP-Provider-Manual-OK-Eng_260604)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/pdfs/Provider%20Manual/English/2026/SSP/Provider%20Manual_2026.5_Approved_R.pdf' },
        ],
      },
      dxRecency: {
        value: 'OK.CP.BH.500 requires disruptive behaviour "within the last 30 days" but, being dated 07/25, does not repeat OHCA’s 9/1/2025 rule that the diagnostic evaluation "should be no older than two (2) years old" at the start of ABA. The plan covers requests under OHCA Part 30, so plan to the two-year limit.',
        status: 'verified',
        cites: [
          { title: 'Oklahoma Complete Health clinical policy OK.CP.BH.500 — Applied Behavioral Analysis (last revised 07/25)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/OK.CP.BH.500.pdf' },
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
        ],
      },
      diagnosingProviders: {
        value: 'OK.CP.BH.500 (07/25) lists pediatric neurologist or neurologist, developmental pediatrician, licensed psychologist, psychiatrist or neuropsychiatrist, and other licensed physician experienced in ASD. OHCA’s rule as revised 9/1/2025 also accepts an interdisciplinary team (licensed psychologist, physician, PA or APRN) and requires the diagnostician to be in Oklahoma or within 50 miles; the plan’s policy has not caught up, so an interdisciplinary-team diagnosis is worth confirming with the plan before relying on it.',
        status: 'verified',
        cites: [
          { title: 'Oklahoma Complete Health clinical policy OK.CP.BH.500 — Applied Behavioral Analysis (last revised 07/25)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/OK.CP.BH.500.pdf' },
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
        ],
      },
      diagnosticTools: {
        value: 'Follows the SoonerCare rule: No single instrument is mandatory. The evaluation must include a complete medical and social history and be "based on criteria outlined in the Diagnostic and Statistical Manual of Mental Disorders (DSM)", and "may also include scores" from formal tests such as the ADI-R, ADOS-2 or CARS "or other tools with acceptable psychometric properties." "Screening scales are not sufficient to make a diagnosis and will not be accepted as the only formal scale." For the ABA clinical assessment itself, OHCA cites validated measures such as the Vineland, and accepts supporting assessments such as the ABLLS-R, AEPS and VB-MAPP with the PA request. Oklahoma Complete Health was checked for its own rule on this point and publishes nothing different, so the OHCA rule applies.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'OAC 317:30-5-312 — Treatment plan components and documentation requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/treatment-plan-components-and-documentation-requirements.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'Oklahoma Complete Health clinical policy OK.CP.BH.500 — Applied Behavioral Analysis (last revised 07/25)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/OK.CP.BH.500.pdf' },
          { title: 'Oklahoma Complete Health — 2026 Provider Manual (Caid_SSP.CSP-Provider-Manual-OK-Eng_260604)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/pdfs/Provider%20Manual/English/2026/SSP/Provider%20Manual_2026.5_Approved_R.pdf' },
        ],
      },
      referral: {
        value: 'Neither OK.CP.BH.500 nor the manual’s ABA entry requires a physician referral; the gate is prior authorization of 97151, 97153, 97155 and 97156. OHCA’s rule requires no referral either.',
        status: 'verified',
        cites: [
          { title: 'Oklahoma Complete Health clinical policy OK.CP.BH.500 — Applied Behavioral Analysis (last revised 07/25)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/OK.CP.BH.500.pdf' },
          { title: 'Oklahoma Complete Health — 2026 Provider Manual (Caid_SSP.CSP-Provider-Manual-OK-Eng_260604)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/pdfs/Provider%20Manual/English/2026/SSP/Provider%20Manual_2026.5_Approved_R.pdf' },
          { title: 'Oklahoma Complete Health — Medicaid Pre-Auth Check tool (queried 9/24/2026 for 97151–97158, 0362T, 0373T)', url: 'https://www.oklahomacompletehealth.com/providers/preauth-check/medicaid-pre-auth.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        ],
      },
      telehealth: {
        value: 'The manual allows telehealth subject to the same rules as in-person care and defers billing to the billing manual, which has no ABA content; CP.BH.105 requires cameras on and working audio for telehealth sessions and bars 97155 protocol-modification visits by telehealth "unless allowed by state guidelines." OHCA’s rule applies underneath: telehealth justified in the PA, and 97151, 97155 and 97156 (not 97153) on OHCA’s telehealth code list.',
        status: 'verified',
        cites: [
          { title: 'Oklahoma Complete Health — 2026 Provider Manual (Caid_SSP.CSP-Provider-Manual-OK-Eng_260604)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/pdfs/Provider%20Manual/English/2026/SSP/Provider%20Manual_2026.5_Approved_R.pdf' },
          { title: 'Centene clinical policy CP.BH.105 — ABA Documentation Requirements (revised 11/25), posted by Oklahoma Complete Health', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/CP.BH.105.pdf' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OHCA — Medical codes allowed for Telehealth (updated 8-10-26)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/telehealth/Medical%20codes%20allowed%20for%20Telehealth.pdf' },
        ],
      },
      authTurnaround: {
        value: 'The 2026 manual: "Standard Preservice/Non-Urgent Within 7 calendar days," expedited 72 hours, concurrent review 3 calendar days. State law (56 O.S. § 4002.6) sets the same 7 days and 72 hours from receipt of all necessary information and deems the service authorized if a complete portal request is not decided in time. Extensions follow OHCA’s seven-day window. The plan’s 2024 fax form still prints "no later than 72 hours" for standard requests; the manual is newer.',
        status: 'verified',
        cites: [
          { title: 'Oklahoma Complete Health — 2026 Provider Manual (Caid_SSP.CSP-Provider-Manual-OK-Eng_260604)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/pdfs/Provider%20Manual/English/2026/SSP/Provider%20Manual_2026.5_Approved_R.pdf' },
          { title: '56 O.S. § 4002.6 — SoonerSelect contracted entity prior authorization rules (as amended by HB 1810, eff. 11/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=489236' },
          { title: 'Oklahoma Complete Health — Outpatient Prior Authorization Fax Form (OK-PAF-6374, rev. 7/29/2024)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/OK-OP-PAF-6374-GTU.pdf' },
          { title: 'OAC 317:30-5-315 — ABA extension requests [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/aba-extension-requests.html' },
        ],
      },
      coordinationOfBenefits: {
        value: '"Oklahoma Complete Health, like all Medicaid programs, is always the payer of last resort." Bill the primary payer first and attach its EOB/EOP; a member with more than one primary insurance needs a paper claim. The manual names pay-and-chase for "Preventive Pediatric services, including Early and Periodic Screening, Diagnostic, and Treatment (EPSDT)" but does not say whether ABA is treated that way, so bill the primary first. OHCA’s rule adds that the state’s authorization meets the primary insurer’s PA requirement.',
        status: 'verified',
        cites: [
          { title: 'Oklahoma Complete Health — 2026 Provider Manual (Caid_SSP.CSP-Provider-Manual-OK-Eng_260604)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/pdfs/Provider%20Manual/English/2026/SSP/Provider%20Manual_2026.5_Approved_R.pdf' },
          { title: 'OAC 317:30-3-24 — Third party liability [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/general-scope-and-administration/third-party-liability.html' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Case supervision of at least 10% of direct treatment hours from June 30, 2026 ("increasing required case supervision from 5% to 10% of direct treatment hours"), above OHCA’s 5% monthly RBT floor. OHCA’s conditions for concurrent RBT and supervision billing still apply.',
        status: 'verified',
        cites: [
          { title: 'Oklahoma Complete Health — ABA Case Supervision Update (5/15/2026; 10% effective 6/30/2026)', url: 'https://www.oklahomacompletehealth.com/providers/provider-news/aba-case-supervision-update.html' },
          { title: 'OAC 317:30-5-311 — Eligible providers and requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/eligible-provider-and-requirements.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        ],
      },
      concurrentBilling: {
        value: 'Follows the SoonerCare rule: Allowed, with conditions. "Providers may only concurrently bill RBT and supervision hours when the following criteria is outlined in the prior authorization request," and the BCBA or licensed psychologist must have directed the RBT in session. "ABA is not allowed to be billed concurrently during any other therapies (i.e., OT, PT speech, etc.)," and "ABA hours approved for one CPT code cannot be used in place of another." Oklahoma Complete Health was checked for its own rule on this point and publishes nothing different, so the OHCA rule applies.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'Oklahoma Complete Health clinical policy OK.CP.BH.500 — Applied Behavioral Analysis (last revised 07/25)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/OK.CP.BH.500.pdf' },
          { title: 'Oklahoma Complete Health — 2026 Provider Manual (Caid_SSP.CSP-Provider-Manual-OK-Eng_260604)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/pdfs/Provider%20Manual/English/2026/SSP/Provider%20Manual_2026.5_Approved_R.pdf' },
        ],
      },
      dailyLimits: {
        value: 'No per-day cap on direct treatment beyond OHCA’s authorization limits, but CP.BH.105 limits 97155 protocol-modification visits to eight units (two hours) a day, and group codes are not covered. OHCA’s intensity tiers and 32-unit FBA cap apply.',
        status: 'verified',
        cites: [
          { title: 'Centene clinical policy CP.BH.105 — ABA Documentation Requirements (revised 11/25), posted by Oklahoma Complete Health', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/CP.BH.105.pdf' },
          { title: 'Oklahoma Complete Health — ABA Coverage Reminder (5/11/2026; group ABA not covered)', url: 'https://www.oklahomacompletehealth.com/providers/provider-news/aba-provider-.html' },
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        ],
      },
      noteSignature: {
        value: 'CP.BH.105: documentation carries the "signature and printed names of the member/enrollee, legal guardian, rendering clinician/technician and supervising practitioner (as applicable)," each note the "Signature of qualified rendering provider/technician," start and stop times, pauses and location; discharge summaries need the rendering provider’s and caregiver’s signatures. OHCA’s treatment-plan signature rule applies underneath.',
        status: 'verified',
        cites: [
          { title: 'Centene clinical policy CP.BH.105 — ABA Documentation Requirements (revised 11/25), posted by Oklahoma Complete Health', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/CP.BH.105.pdf' },
          { title: 'OAC 317:30-5-312 — Treatment plan components and documentation requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/treatment-plan-components-and-documentation-requirements.html' },
        ],
      },
      placeOfService: {
        value: 'Follows the SoonerCare rule: Home, community or clinic ("ABA may be provided in a variety of settings, including home, community, or clinical"). "ABA services are not allowed in a daycare setting or school setting, without OHCA approval. If approved, it will be time-limited to three (3) months or less," with a plan to fade support to school staff; private-school transitions are also capped at three months. School or daycare shadowing and aide work is excluded. Telehealth is allowed if justified in the PA (97151, 97155, 97156 on OHCA’s telehealth code list). Oklahoma Complete Health was checked for its own rule on this point and publishes nothing different, so the OHCA rule applies.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-310 — ABA purpose ("ABA services require prior authorization") [Issued 09-12-22]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/purpose-aba.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OHCA — Medical codes allowed for Telehealth (updated 8-10-26)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/telehealth/Medical%20codes%20allowed%20for%20Telehealth.pdf' },
          { title: 'Oklahoma Complete Health clinical policy OK.CP.BH.500 — Applied Behavioral Analysis (last revised 07/25)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/OK.CP.BH.500.pdf' },
          { title: 'Oklahoma Complete Health — 2026 Provider Manual (Caid_SSP.CSP-Provider-Manual-OK-Eng_260604)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/pdfs/Provider%20Manual/English/2026/SSP/Provider%20Manual_2026.5_Approved_R.pdf' },
        ],
      },
      billAsProvider: {
        value: 'The plan’s manuals publish only the generic CMS-1500 rule (rendering NPI in box 24J), and OK.CP.BH.500 adopts OHCA’s provider rules, under which BCaBAs and RBTs are not paid directly and payment goes to the supervising BCBA or employing agency. Whether the plan wants the RBT’s NPI as rendering is not stated.',
        status: 'unverified',
        cites: [
          { title: 'Oklahoma Complete Health — 2026 Provider Manual (Caid_SSP.CSP-Provider-Manual-OK-Eng_260604)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/pdfs/Provider%20Manual/English/2026/SSP/Provider%20Manual_2026.5_Approved_R.pdf' },
          { title: 'Oklahoma Complete Health clinical policy OK.CP.BH.500 — Applied Behavioral Analysis (last revised 07/25)', url: 'https://www.oklahomacompletehealth.com/content/dam/centene/oklahoma-complete-health/policies/clinical-policies/OK.CP.BH.500.pdf' },
          { title: 'OAC 317:30-5-316 — ABA reimbursement methodology [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/reimbursement-methodology.html' },
          { title: 'OHCA — Applied Behavioral Analysis Application and Coding Information for Providers', url: 'https://oklahoma.gov/ohca/providers/applied-behavioral-analysis-application.html' },
        ],
        verifyVia: 'Oklahoma Complete Health provider services (833-752-1664) or the Availity claim edits: ask whose NPI goes in box 24J for 97153 delivered by an RBT.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Oklahoma Complete Health cover ABA therapy?', a: 'Yes, for members under 21 with a definitive ASD diagnosis, with prior authorization on 97151, 97153, 97155 and 97156. Adults are not covered.' },
      { q: 'Does Oklahoma Complete Health cover group ABA?', a: 'No. Group codes 97154, 97157 and 97158 are not covered, and individual codes may not be billed for group sessions.' },
      { q: 'How much case supervision does Oklahoma Complete Health require?', a: 'At least 10% of direct treatment hours since June 30, 2026, up from 5%.' },
      { q: 'Which plan covers ABA for a child in foster care in Oklahoma?', a: 'Oklahoma Complete Health, through the SoonerSelect Children’s Specialty Program (member line 833-752-1665).' },
    ],
  },

  'humana-healthy-horizons-oklahoma': {
    slug: 'humana-healthy-horizons-oklahoma',
    family: 'humana',
    cardDesc: 'SoonerSelect MCO. Follows OHCA’s Part 30; PA on 97151/97153/97155/97156, 24-unit initial assessment, 10% case supervision from 10/12/2026.',
    assessmentPA: {
      value: 'Required — the Prior Authorization and Notification List (eff. 7/1/2026) lists "Applied behavioral analysis therapy — 97151, 97153, 97155, 97156." Policy HUM-OK-2663-000 allows up to 24 units (6 hours) for the initial assessment and up to 16 units (4 hours) every 6 months for a reassessment billed 97151-TS, with exceptions for complex cases.',
      status: 'verified',
      cites: [
        { title: 'Humana Healthy Horizons in Oklahoma — Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/22/2026)', url: 'https://assets.humana.com/is/content/humana/OK%20MCD%20PAL%20Apdf-1' },
        { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
        { title: 'Humana Healthy Horizons in Oklahoma — ABA assessment and reassessment parameters notice (6/18/2026; eff. 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/FINAL_ABA%20Assessment%20Notice%201pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — 97153, 97155 and 97156 are on the PA list; the plan says "We follow state manual PART 30," so OHCA’s 1–6 month authorizations and seven-day extension window apply. Request PA at least 14 days before the service date.',
      status: 'verified',
      cites: [
        { title: 'Humana Healthy Horizons in Oklahoma — Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/22/2026)', url: 'https://assets.humana.com/is/content/humana/OK%20MCD%20PAL%20Apdf-1' },
        { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
        { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
        { title: 'OAC 317:30-5-315 — ABA extension requests [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/aba-extension-requests.html' },
      ],
    },
    dxRequired: {
      value: 'Yes — the plan follows OHCA Part 30: a definitive ASD diagnosis from a discipline OAC 317:30-5-313 names, with the evaluation no older than two years at the start of ABA. ABA is covered under 21 only.',
      status: 'verified',
      cites: [
        { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
        { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
        { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
      ],
    },
    payer: 'Humana Healthy Horizons in Oklahoma',
    state: 'OK',
    kind: 'medicaid-mco',
    parent: 'Oklahoma Medicaid (SoonerCare / SoonerSelect) - Oklahoma Health Care Authority',
    pill: 'Payer Guide · Humana Healthy Horizons Oklahoma',
    h1: 'Humana Healthy Horizons in Oklahoma ABA coverage (SoonerSelect).',
    metaTitle: 'Humana Healthy Horizons in Oklahoma (SoonerSelect) ABA Coverage & Prior Auth | Carelu',
    metaDescription: 'How Humana Healthy Horizons in Oklahoma administers the SoonerCare ABA benefit: its Oklahoma ABA policy (HUM-OK-2663-000) built on OHCA Part 30, PA on 97151/97153/97155/97156, the 24-unit assessment and 97151-TS reassessment limits, 10% case supervision from October 2026, and its decision clocks.',
    intro: [
      'Humana Healthy Horizons in Oklahoma is one of the three SoonerSelect health plans and, since September 16, 2026, has its own Oklahoma ABA coverage policy (HUM-OK-2663-000). The policy opens with "We follow state manual PART 30. APPLIED BEHAVIOR ANALYSIS (ABA) SERVICES, in addition the following criteria apply," so OHCA’s rules are the baseline and Humana adds unit limits on assessment and reassessment. Two 2026 notices matter for scheduling: reassessments move to 97151 with modifier TS from September 16, and required case supervision rises from 5% to 10% of direct hours on October 12, 2026. Behavioral health is managed in-house; no separate behavioral vendor is named.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'SoonerSelect health plan (Humana Healthy Horizons); behavioral health managed in-house' },
      { label: 'Clinical rules', value: 'HUM-OK-2663-000 (eff. 9/16/2026): OHCA Part 30 plus Humana unit limits; under 21 only' },
      { label: 'Prior auth', value: '97151, 97153, 97155, 97156 (PA list eff. 7/1/2026); request 14+ days before service' },
      { label: 'Assessment units', value: 'Initial up to 24 units (6 hrs); reassessment 97151-TS up to 16 units (4 hrs) every 6 months' },
      { label: 'Case supervision', value: '10% of direct hours from 10/12/2026 (was 5%)' },
      { label: 'Decision clock', value: 'Standard 7 calendar days, expedited 72 hours; extension up to 14 days total' },
      { label: 'PA contact', value: 'Availity preferred; phone 855-223-9868, fax 833-558-9712' },
    ],
    sections: [
      {
        h2: 'Part 30 plus Humana’s unit limits',
        body: [
          'Humana’s provider manual lists "Applied behavioral analysis therapy (younger than 21)" as covered and ABA as not covered for adults. Its Oklahoma ABA policy, effective September 16, 2026, adopts OHCA’s Part 30 in full and adds assessment limits: members "may be eligible under the Plan for up to 24 units (6 hours) for an ABA initial assessment," and a reassessment (97151-TS) up to 16 units (4 hours) every six months, with exceptions for complex presentations, co-occurring conditions or major treatment changes. That is tighter than OHCA’s 32-unit ceiling on the FBA, so request to Humana’s number unless an exception applies. The codes are OHCA’s four: 97151, 97153, 97155 and 97156, all on Humana’s Prior Authorization and Notification List.',
        ],
        cites: [
          { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
          { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
          { title: 'Humana Healthy Horizons in Oklahoma — Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/22/2026)', url: 'https://assets.humana.com/is/content/humana/OK%20MCD%20PAL%20Apdf-1' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        ],
      },
      {
        h2: '2026 notices and the request mechanics',
        body: [
          'The June 18, 2026 notice moved reassessment billing to 97151 with modifier TS from September 16, 2026 ("Providers should continue submitting prior authorization requests as they do today"). The July 14, 2026 notice raises required case supervision from 5% to 10% of direct treatment hours effective October 12, 2026, and encourages providers to adopt it earlier. Requests go through Availity (preferred), phone 855-223-9868 or fax 833-558-9712, and the plan asks for PA "at least 14 days in advance of the service date." The manual gives standard decisions "no later than 7 calendar days following receipt of the request for service," expedited within 72 hours. Humana has also published a new manual effective December 23, 2026; its ABA, UM and TPL text is unchanged, and no plan exit has been announced.',
        ],
        cites: [
          { title: 'Humana Healthy Horizons in Oklahoma — ABA assessment and reassessment parameters notice (6/18/2026; eff. 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/FINAL_ABA%20Assessment%20Notice%201pdf' },
          { title: 'Humana Healthy Horizons in Oklahoma — ABA case supervision update (7/14/2026; eff. 10/12/2026)', url: 'https://assets.humana.com/is/content/humana/ABACaseSupervisionNoticepdf' },
          { title: 'Humana Healthy Horizons in Oklahoma — Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/22/2026)', url: 'https://assets.humana.com/is/content/humana/OK%20MCD%20PAL%20Apdf-1' },
          { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan assignment', desc: 'Confirm Humana Healthy Horizons on the member ID card or through the OHCA Provider Helpline (800-522-0114, option 1). ABD and waiver children stay in fee-for-service.' },
      { title: 'Diagnosis report, date and diagnostician', desc: 'A definitive ASD diagnosis from a discipline OAC 317:30-5-313 names, in Oklahoma or within 50 miles, no older than two years at the start of ABA.' },
      { title: 'Behaviour from the last 30 days', desc: 'Required by the state medical-necessity rule the plan applies.' },
      { title: 'Current authorization end date', desc: 'The OHCA seven-day extension window applies to plan members too.' },
      { title: 'Parent training capacity', desc: 'Under two hours a month of documented parent involvement reduces or denies hours under the state rule.' },
      { title: 'Assessment hours', desc: 'Plan the initial assessment within 24 units (6 hours) unless the case meets Humana’s complexity exception.' },
    ],
    sources: [
      { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
      { title: 'Humana Healthy Horizons in Oklahoma — Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/22/2026)', url: 'https://assets.humana.com/is/content/humana/OK%20MCD%20PAL%20Apdf-1' },
      { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
      { title: 'Humana Healthy Horizons in Oklahoma — ABA assessment and reassessment parameters notice (6/18/2026; eff. 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/FINAL_ABA%20Assessment%20Notice%201pdf' },
      { title: 'Humana Healthy Horizons in Oklahoma — ABA case supervision update (7/14/2026; eff. 10/12/2026)', url: 'https://assets.humana.com/is/content/humana/ABACaseSupervisionNoticepdf' },
      { title: 'OHCA — Learn about SoonerSelect (last modified 6/9/2026)', url: 'https://oklahoma.gov/ohca/soonerselect/about.html' },
      { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
      { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
      { title: 'OAC 317:30-5-315 — ABA extension requests [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/aba-extension-requests.html' },
      { title: '56 O.S. § 4002.6 — SoonerSelect contracted entity prior authorization rules (as amended by HB 1810, eff. 11/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=489236' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the SoonerCare rule: Under 21. OAC 317:30-5-313 requires that "The member is under twenty-one (21) years of age," and OHCA provides ABA "under the EPSDT benefit" (OAC 317:30-3-65.12). No lower age bound is set. (OHCA’s provider application page words it as "ages 21 and younger"; the rule text says under 21.) Humana Healthy Horizons in Oklahoma was checked for its own rule on this point and publishes nothing different, so the OHCA rule applies.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'OAC 317:30-3-65.12 — ABA services under the EPSDT benefit [Revised 09-12-22]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/early-and-periodic-screening-diagnostic-and-treatment-program-child-health-services/applied-behavior-analysis-services.html' },
          { title: 'OHCA — Applied Behavioral Analysis Application and Coding Information for Providers', url: 'https://oklahoma.gov/ohca/providers/applied-behavioral-analysis-application.html' },
          { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
          { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
        ],
      },
      dxRecency: {
        value: 'Follows the SoonerCare rule: The comprehensive diagnostic evaluation or clinical assessment "will only need to be completed at the first initiation of ABA services and should be no older than two (2) years old." No annual or biannual update is required, but OHCA may ask for one if diagnosis and recommendations are unclear or there are significant medical or behavioral changes, and a member who changes agencies must supply the evaluation during the initial authorization period. Separately, disruptive behaviour must be documented within the most recent 30 calendar days. Humana Healthy Horizons in Oklahoma was checked for its own rule on this point and publishes nothing different, so the OHCA rule applies.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
          { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'Follows the SoonerCare rule: A definitive ASD diagnosis from one of: pediatric neurologist or neurologist; developmental pediatrician; licensed psychologist; psychiatrist or neuropsychiatrist; other licensed physician experienced in the diagnosis and treatment of ASD; or an interdisciplinary team of a licensed psychologist, physician, physician assistant or APRN. The provider must be in Oklahoma or within 50 miles of the border (OAC 317:30-3-89 through 92); out-of-state evaluations are accepted only if they meet the documentation standard and come from one of these disciplines. Humana Healthy Horizons in Oklahoma was checked for its own rule on this point and publishes nothing different, so the OHCA rule applies.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
          { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
        ],
      },
      diagnosticTools: {
        value: 'Follows the SoonerCare rule: No single instrument is mandatory. The evaluation must include a complete medical and social history and be "based on criteria outlined in the Diagnostic and Statistical Manual of Mental Disorders (DSM)", and "may also include scores" from formal tests such as the ADI-R, ADOS-2 or CARS "or other tools with acceptable psychometric properties." "Screening scales are not sufficient to make a diagnosis and will not be accepted as the only formal scale." For the ABA clinical assessment itself, OHCA cites validated measures such as the Vineland, and accepts supporting assessments such as the ABLLS-R, AEPS and VB-MAPP with the PA request. Humana Healthy Horizons in Oklahoma was checked for its own rule on this point and publishes nothing different, so the OHCA rule applies.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'OAC 317:30-5-312 — Treatment plan components and documentation requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/treatment-plan-components-and-documentation-requirements.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
          { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
        ],
      },
      referral: {
        value: 'Humana’s ABA policy and PA list require prior authorization, not a referral, for ABA; the plan follows OHCA Part 30, which requires none.',
        status: 'verified',
        cites: [
          { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
          { title: 'Humana Healthy Horizons in Oklahoma — Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/22/2026)', url: 'https://assets.humana.com/is/content/humana/OK%20MCD%20PAL%20Apdf-1' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        ],
      },
      telehealth: {
        value: 'Telehealth "must comply with OHCA policy," be "completed in real time using interactive audio and video," carry written parent consent for minors naming the type, frequency and duration of services, and be "billed with the appropriate modifier." Under OHCA’s rule the modality must be justified in the PA, and OHCA’s telehealth code list carries 97151, 97155 and 97156, not 97153.',
        status: 'verified',
        cites: [
          { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OHCA — Medical codes allowed for Telehealth (updated 8-10-26)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/telehealth/Medical%20codes%20allowed%20for%20Telehealth.pdf' },
        ],
      },
      authTurnaround: {
        value: 'Standard decisions "no later than 7 calendar days following receipt of the request for service," expedited within 72 hours, with extensions of "up to 7 additional calendar days (for up to 14 calendar days total)"; retro requests within 30 days are decided within 7 calendar days. State law (56 O.S. § 4002.6) deems a complete portal request authorized if the 7-day or 72-hour deadline is missed. Request PA at least 14 days before the service date, and extensions in OHCA’s seven-day window.',
        status: 'verified',
        cites: [
          { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
          { title: '56 O.S. § 4002.6 — SoonerSelect contracted entity prior authorization rules (as amended by HB 1810, eff. 11/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=489236' },
          { title: 'OAC 317:30-5-315 — ABA extension requests [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/aba-extension-requests.html' },
        ],
      },
      coordinationOfBenefits: {
        value: '"Humana Healthy Horizons is the payer of last resort," except for IHS, IEP/IFSP school services and crime-victim compensation. The manual adds that "Medicaid’s authorization that an item or service is covered under the plan ... meets the prior authorization requirements of primary coverage," names pay-and-chase for "Preventive pediatric services, including EPSDT" (without saying ABA is handled that way, so bill the primary first), and recommends submitting the secondary claim within six months of the other insurer’s payment.',
        status: 'verified',
        cites: [
          { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
          { title: 'OAC 317:30-3-24 — Third party liability [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/general-scope-and-administration/third-party-liability.html' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Humana raises required case supervision "from 5% to 10%" of direct treatment hours effective October 12, 2026 (earlier adoption encouraged); until then OHCA’s 5% monthly RBT floor applies. The policy describes RBTs providing ABA "under the close supervision and direction of a BCBA," and OHCA’s conditions for concurrent RBT and supervision billing apply.',
        status: 'verified',
        cites: [
          { title: 'Humana Healthy Horizons in Oklahoma — ABA case supervision update (7/14/2026; eff. 10/12/2026)', url: 'https://assets.humana.com/is/content/humana/ABACaseSupervisionNoticepdf' },
          { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
          { title: 'OAC 317:30-5-311 — Eligible providers and requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/eligible-provider-and-requirements.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        ],
      },
      concurrentBilling: {
        value: 'Follows the SoonerCare rule: Allowed, with conditions. "Providers may only concurrently bill RBT and supervision hours when the following criteria is outlined in the prior authorization request," and the BCBA or licensed psychologist must have directed the RBT in session. "ABA is not allowed to be billed concurrently during any other therapies (i.e., OT, PT speech, etc.)," and "ABA hours approved for one CPT code cannot be used in place of another." Humana Healthy Horizons in Oklahoma was checked for its own rule on this point and publishes nothing different, so the OHCA rule applies.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
          { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
        ],
      },
      dailyLimits: {
        value: 'No per-day unit cap is published. Humana limits the initial assessment to 24 units (6 hours) and a reassessment (97151-TS) to 16 units (4 hours) every six months, with complexity exceptions; OHCA’s intensity tiers and 1–6 month authorizations govern treatment.',
        status: 'verified',
        cites: [
          { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
          { title: 'OAC 317:30-5-313 — Medical necessity criteria, covered services, frequency and duration [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/medical-necessity-criteria-and-covered-services-for-members-under-twenty-one-years-of-age-and-frequency-and-duration.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
        ],
      },
      noteSignature: {
        value: 'Follows the SoonerCare rule: Every assessment and treatment service must record the date, start and stop time for each session or unit billed, the physical location, the "Signature of the provider(s) rendering services" and their credentials, goals addressed, methods, progress, the member’s response and any new problems. Treatment plans and updates are "not valid until all signatures are present": the supervising BCBA or licensed psychologist, a parent or legal guardian, and any minor aged 14 or older, each dated with month, day and year. Humana Healthy Horizons in Oklahoma was checked for its own rule on this point and publishes nothing different, so the OHCA rule applies.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-312 — Treatment plan components and documentation requirements [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/treatment-plan-components-and-documentation-requirements.html' },
          { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
          { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
        ],
      },
      placeOfService: {
        value: 'Follows the SoonerCare rule: Home, community or clinic ("ABA may be provided in a variety of settings, including home, community, or clinical"). "ABA services are not allowed in a daycare setting or school setting, without OHCA approval. If approved, it will be time-limited to three (3) months or less," with a plan to fade support to school staff; private-school transitions are also capped at three months. School or daycare shadowing and aide work is excluded. Telehealth is allowed if justified in the PA (97151, 97155, 97156 on OHCA’s telehealth code list). Humana Healthy Horizons in Oklahoma was checked for its own rule on this point and publishes nothing different, so the OHCA rule applies.',
        status: 'verified',
        cites: [
          { title: 'OAC 317:30-5-310 — ABA purpose ("ABA services require prior authorization") [Issued 09-12-22]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/purpose-aba.html' },
          { title: 'OAC 317:30-5-314 — Prior authorization, service limitations, and exclusions to treatment [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/prior-authorization-service-limitations-and-exclusions-to-treatment.html' },
          { title: 'OHCA — Medical codes allowed for Telehealth (updated 8-10-26)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/telehealth/Medical%20codes%20allowed%20for%20Telehealth.pdf' },
          { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
          { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
        ],
      },
      billAsProvider: {
        value: 'Humana requires billing and rendering NPIs and taxonomy codes that match the OHCA Master Provider List, and follows Part 30, under which BCaBAs and RBTs are not paid directly and payment goes to the supervising BCBA or employing agency. Humana publishes no ABA-specific rendering-versus-supervising rule.',
        status: 'unverified',
        cites: [
          { title: 'Humana Healthy Horizons in Oklahoma — provider manual effective 12/23/2026 (NPC996103OK0526; same ABA/UM/TPL text as the May 2026 edition)', url: 'https://assets.humana.com/is/content/humana/OK_Provider%20Manual_effective_12232026pdf' },
          { title: 'Humana Medicaid coverage policy HUM-OK-2663-000 — Applied Behavior Analysis (effective 9/16/2026)', url: 'https://assets.humana.com/is/content/humana/MCD%20Applied%20Behavior%20Analysis%20HUM-OK-2663-000%20ed%209.16.26pdf' },
          { title: 'OAC 317:30-5-316 — ABA reimbursement methodology [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/individual-providers-and-specialties/applied-behavior-analysis-services/reimbursement-methodology.html' },
          { title: 'OHCA — Applied Behavioral Analysis Application and Coding Information for Providers', url: 'https://oklahoma.gov/ohca/providers/applied-behavioral-analysis-application.html' },
        ],
        verifyVia: 'Humana Healthy Horizons in Oklahoma provider services (855-223-9868): ask whose NPI and taxonomy go in the rendering field for 97153 delivered by an RBT.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Humana Healthy Horizons in Oklahoma cover ABA therapy?', a: 'Yes, for members under 21, following OHCA Part 30, with prior authorization on 97151, 97153, 97155 and 97156. Adults are not covered.' },
      { q: 'How many assessment units does Humana allow?', a: 'Up to 24 units (6 hours) for an initial ABA assessment and 16 units (4 hours) every six months for a reassessment billed 97151-TS, with exceptions for complex cases.' },
      { q: 'Is Humana changing ABA supervision requirements?', a: 'Yes. Required case supervision rises from 5% to 10% of direct treatment hours on October 12, 2026.' },
    ],
  },

  'aetna-oklahoma': {
    slug: 'aetna-oklahoma',
    family: 'aetna',
    cardDesc: 'CPB 0554 + the ABA medical necessity guide + Nick’s Law (36 O.S. § 6060.21): no age limit, no hour cap on insured plans.',
    assessmentPA: {
      value: 'Required — Aetna’s participating-provider behavioral health precertification list (eff. 8/1/2024) names all ABA codes including 97151 and 97152, and the provider manual says "Applied behavior analysis (ABA) services require prior authorization." CPB 0554 itself sets no precertification rule.',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna Provider Manual (form 8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      ],
    },
    treatmentPA: {
      value: 'Required — "To get ABA services precertified, call the number on the member’s ID card"; the medical necessity guide re-evaluates progress every six months. The authorization span itself is set per case.',
      status: 'verified',
      cites: [
        { title: 'Aetna Provider Manual (form 8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — a DSM-5 ASD diagnosis (ICD-10 F84.0, F84.3–F84.9) from an appropriate provider; Aetna considers ABA experimental for Down syndrome without ASD and for all other non-ASD indications.',
      status: 'verified',
      cites: [
        { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      ],
    },
    payer: 'Aetna in Oklahoma',
    state: 'OK',
    kind: 'commercial',
    pill: 'Payer Guide · Aetna · Oklahoma',
    h1: 'Aetna ABA coverage in Oklahoma: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Oklahoma: Prior Auth & Mandate Guide | Carelu',
    metaDescription: 'How Aetna covers ABA for Oklahoma families: the national clinical policy and medical necessity guide, precertification for assessment and treatment, Nick’s Law (36 O.S. § 6060.21) with no age limit or hour cap since 2022, Oklahoma behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Oklahoma, an Aetna card means three layers at once: the carrier’s national ABA policy, Oklahoma’s autism mandate (Nick’s Law, 36 O.S. § 6060.21), and the plan’s funding type deciding whether the mandate binds. The Oklahoma mandate is now one of the broader ones: since November 2022 it has no age window and no hour or dollar cap for insured plans. Self-funded employer plans answer to their plan document instead, so funding type is the first fact to establish.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per Aetna’s national policy (CPB 0554 and the ABA medical necessity guide)' },
      { label: 'State mandate', value: 'Nick’s Law — 36 O.S. § 6060.21 (2016; amended 2019 and by SB 1240, eff. 11/1/2022)' },
      { label: 'Mandate age', value: 'No age limit since 11/1/2022 (earlier versions: under 9, or 6 years if diagnosed after age 3)' },
      { label: 'Mandate caps', value: 'None — no visit limits, and no dollar limits, deductibles or coinsurance worse than medical/surgical; the 25 hr/wk and $25,000/yr ABA cap was repealed in 2022' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans; limited-benefit policies; a plan approved for the 1% premium-cost exemption (§ 6060.22)' },
      { label: 'Licensure', value: 'OK Licensed Behavior Analyst / certified assistant (59 O.S. § 1928) — OKDHS DDS through 10/31/2026, Board of Examiners of Psychologists from 11/1/2026' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Oklahoma',
        body: [
          'Aetna covers ABA for autism spectrum disorder and considers it experimental for Down syndrome without ASD and for every other non-ASD indication (CPB 0554). The working criteria are in the ABA medical necessity guide: a DSM-5 ASD diagnosis from an appropriate provider, services "provided directly or billed by the appropriately licensed provider," functional impairment on a standardized scale "in the past 12 months" at least one standard deviation below the mean (or a significant risk of harm), a measurable treatment plan that tapers toward other supports, and progress "evaluated every six months." Typical intensity is 10–25 hours a week for comprehensive ABA (ages 0–7, 1–2 years) and 1–20 hours for focused ABA at any age — typical, not a cap. Precertification covers every ABA code, assessment included, and runs through the number on the member’s ID card. We found no Oklahoma-specific Aetna ABA policy or exhibit; the national documents plus the state mandate are the whole picture.',
        ],
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
          { title: 'Aetna Provider Manual (form 8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
        ],
      },
      {
        h2: 'The Oklahoma mandate: what Nick’s Law guarantees now',
        body: [
          '36 O.S. § 6060.21 requires "a health benefit plan and the Oklahoma Employees Health Insurance Plan" to cover "the screening, diagnosis and treatment of autism spectrum disorder in individuals." Since SB 1240 took effect on November 1, 2022, the statute has no age window and no ABA cap: coverage "shall not be subject to any limits on the number of visits," and dollar limits, deductibles and coinsurance may be no less favorable than for substantially all medical and surgical benefits. The earlier versions (2016 and 2019) limited coverage to children under nine (or six years of coverage if diagnosed after age three), capped ABA at 25 hours a week and $25,000 a year, and excluded ACA individual and small-group plans; all three limits are gone from the current text. The "health benefit plan" definition reaches group and individual medical insurance, HMOs and PPOs; self-funded employer plans are governed by ERISA instead, and limited-benefit policies (specified disease, dental or vision only, short-term plans of six months or less) fall outside the definition.',
          'Four more terms shape intake. ABA coverage "shall include the services provided or supervised by a board-certified behavior analyst, a board-certified assistant behavior analyst or a licensed doctoral-level psychologist." Treatment must be "prescribed or ordered for an individual diagnosed with an autism spectrum disorder by a licensed physician or a licensed doctoral-level psychologist." Outside inpatient care the insurer may review the treatment plan annually, more often only by agreement for that one patient, at the insurer’s cost. And under § 6060.22 a plan whose premium costs rise more than 1% from providing ABA can ask the Insurance Commissioner for an exemption, backed by an actuary’s signed request.',
        ],
        cites: [
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
          { title: '36 O.S. § 6060.21 — superseded 2019 version (under-9 age window, 25 hr/wk and $25,000/yr ABA cap) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=491671' },
          { title: '36 O.S. § 6060.22 — Exempt health benefit plans (1% premium-cost exemption) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478387' },
          { title: '36 O.S. § 6060.4(C) — "Health benefit plan" definition — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=87362' },
        ],
      },
      {
        h2: 'Licensure & rates in Oklahoma',
        body: [
          'Oklahoma requires a state license to practise ABA. Under 59 O.S. § 1928, "No person shall practice applied behavior analysis without obtaining a license or certification," supervisees practise only under a licensed behavior analyst, and licensed human services professionals (psychologists, LPCs, LCSWs, OTs, SLPs and others) may practise ABA within their scope. Through October 31, 2026 the Licensed Behavior Analyst credential (BCBA) and the certified assistant behavior analyst (BCaBA) are issued by OKDHS Developmental Disabilities Services; SB 1557 moves both to the State Board of Examiners of Psychologists from November 1, 2026 and adds a national criminal history check. Aetna does not publish commercial ABA fee schedules for Oklahoma; rates are negotiated in the participating-provider agreement. Oklahoma Medicaid gives a public benchmark: the July 1, 2026 SoonerCare fee schedule pays $17.35 per 15-minute unit of 97153 and $23.55 for 97151, 97155 and 97156.',
        ],
        cites: [
          { title: '59 O.S. § 1928 — Behavior analyst licensure (version in force through 10/31/2026: OKDHS Developmental Disabilities Services) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=553182' },
          { title: '59 O.S. § 1928 — as amended by SB 1557 (Laws 2026, c. 392), eff. 11/1/2026: State Board of Examiners of Psychologists — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=456318' },
          { title: 'OHCA — SoonerCare Title XIX fee schedule, effective 07/01/2026 (V3)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/claim-tools/fee-schedules/2026/Prov_fee_sch_TXIX_07012026_V3.txt' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Nick’s Law applies: no age limit, no hour or dollar cap) vs. self-funded ERISA (the plan document governs). Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'For a live benefits check and the precertification line printed on the card.' },
      { title: 'Diagnosis report + diagnosing provider', desc: 'DSM-5 ASD diagnosis, who made it, credentials and date. Aetna’s policy is ASD-only.' },
      { title: 'Standardized functioning score from the last 12 months', desc: 'Vineland-3, ABAS, VB-MAPP or ABLLS showing impairment at least one standard deviation below the mean.' },
      { title: 'Physician or doctoral psychologist order', desc: 'For insured plans the mandate covers treatment prescribed or ordered by a licensed physician or licensed doctoral-level psychologist.' },
    ],
    sources: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna Provider Manual (form 8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
      { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
      { title: '36 O.S. § 6060.21 — superseded 2019 version (under-9 age window, 25 hr/wk and $25,000/yr ABA cap) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=491671' },
      { title: '36 O.S. § 6060.22 — Exempt health benefit plans (1% premium-cost exemption) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478387' },
      { title: '36 O.S. § 6060.4(C) — "Health benefit plan" definition — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=87362' },
      { title: '59 O.S. § 1928 — Behavior analyst licensure (version in force through 10/31/2026: OKDHS Developmental Disabilities Services) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=553182' },
      { title: '59 O.S. § 1928 — as amended by SB 1557 (Laws 2026, c. 392), eff. 11/1/2026: State Board of Examiners of Psychologists — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=456318' },
      { title: '36 O.S. § 6570.6 — Prior authorization time frames (eff. 1/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538475' },
      { title: 'Okla. Admin. Code § 365:10-11-3 — Coordination of benefits, order of benefit determination (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/oklahoma/OAC-365-10-11-3' },
      { title: 'OHCA — SoonerCare Title XIX fee schedule, effective 07/01/2026 (V3)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/claim-tools/fee-schedules/2026/Prov_fee_sch_TXIX_07012026_V3.txt' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national ABA policy sets no age cap; the guide lists focused ABA for "All ages." For insured Oklahoma plans Nick’s Law has no age window since November 1, 2022 (the older under-9 window is repealed). A self-funded plan can still carry its own age term in the plan document.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
          { title: '36 O.S. § 6060.21 — superseded 2019 version (under-9 age window, 25 hr/wk and $25,000/yr ABA cap) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=491671' },
        ],
        verifyVia: 'Live benefits verification on the member ID: confirm fully insured vs. self-funded, then any age term in the plan document.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the ASD diagnosis itself, but a 12-month clock on the functional evidence: medical necessity requires "demonstration of functional impairment on a standardized scale of functioning in the past 12 months," and progress is evaluated every six months. Nick’s Law sets no recency rule.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'A DSM-5 ASD diagnosis "obtained by an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)." CPB 0648 lists the professionals appropriate to an ASD evaluation, including developmental pediatricians, neurologists, psychiatrists, psychologists and BCBAs. For insured plans Nick’s Law adds that treatment is covered when prescribed or ordered by a licensed physician or licensed doctoral-level psychologist.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
        ],
      },
      diagnosticTools: {
        value: 'CPB 0648 names the tools used with clinical assessment to establish the diagnosis: ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale. The ABA guide then requires a standardized functioning measure within the past 12 months — Vineland-3, ABAS, VB-MAPP or ABLLS as examples.',
        status: 'verified',
        cites: [
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      referral: {
        value: 'Aetna requires no referral of its own; the gate is precertification for every ABA code, requested through the number on the member’s ID card. For insured Oklahoma plans the mandate defines covered treatment as care "prescribed or ordered" by a licensed physician or licensed doctoral-level psychologist, so have that order on file.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
          { title: 'Aetna Provider Manual (form 8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
        ],
      },
      telehealth: {
        value: 'Not addressed. CPB 0554, CPB 0648 and the ABA medical necessity guide set no telehealth rule, code list or place-of-service code for ABA, and Nick’s Law is silent on modality.',
        status: 'unverified',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
        verifyVia: 'The precertification line on the member ID card or Availity — ask which ABA codes Aetna pays by telehealth on this plan, with which POS code and modifier.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Aetna publishes no ABA decision clock of its own; the provider manual says only that ABA "services require prior authorization" through the number on the ID card, and sets no reauthorization lead time. The legal ceiling depends on funding. Fully insured Oklahoma plans fall under the Ensuring Transparency in Prior Authorization Act (eff. 1/1/2025): a decision "within seventy-two (72) hours of obtaining all necessary information" for urgent services and "within seven (7) days of obtaining all necessary information" for non-urgent ones, and services "are deemed authorized" if the deadline is missed and the provider used the plan’s authorized PA system; the approval must state its duration or expiry date, and a new plan must honor a prior authorization from the previous plan "for at least the initial sixty (60) days." Self-funded (ERISA) plans follow 29 CFR 2560.503-1: pre-service decisions "not later than 15 days after receipt of the claim" (one 15-day extension) and urgent care within 72 hours.',
        status: 'verified',
        cites: [
          { title: 'Aetna Provider Manual (form 8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: '36 O.S. § 6570.6 — Prior authorization time frames (eff. 1/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538475' },
          { title: '36 O.S. § 6570.1 — Ensuring Transparency in Prior Authorization Act, definitions (eff. 1/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538426' },
          { title: '36 O.S. § 6570.10 — Honoring a prior authorization for the first 60 days of new coverage — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538484' },
          { title: '29 CFR 2560.503-1(f)(2) — ERISA group health plan claim decision timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Aetna "coordinate[s] benefits as allowed by state or federal law following the National Associations of Insurance Commissioners (NAIC) guidelines," using the NAIC birthday rule for a child whose parents are not separated or divorced, and notes that many self-funded plans use "Maintenance of Benefits (MOB)," which can shrink a secondary payment. Oklahoma’s coordination-of-benefits rule for insured plans applies the birthday rule to a child on both parents’ plans: the plan of the parent "whose date of birth, excluding year of birth, occurs earlier in a calendar year" pays first; for separated or divorced parents the custodial parent’s plan goes first, then a stepparent’s, then the non-custodial parent’s, and a court decree assigning financial responsibility overrides that order (OAC 365:10-11-3). Self-funded plans follow their plan document. If the child also has SoonerCare, this plan pays first — SoonerCare is payer of last resort, and OHCA expects the family to follow this plan’s rules, including its prior authorization. TRICARE pays after this plan ("TRICARE shall be last pay," 32 CFR 199.8), and "CHAMPVA is the last payer to OHI" (38 CFR 17.276(d)).',
        status: 'verified',
        cites: [
          { title: 'Aetna Provider Manual (form 8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Okla. Admin. Code § 365:10-11-3 — Coordination of benefits, order of benefit determination (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/oklahoma/OAC-365-10-11-3' },
          { title: 'OAC 317:30-3-24 — Third party liability [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/general-scope-and-administration/third-party-liability.html' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
          { title: '38 CFR 17.276(d) — CHAMPVA last payer to other health insurance (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.276' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Services must be "provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists"; where a mandate, plan or contract allows services by others, "there must be supervision and direction of the unlicensed or non-certified providers in line with practice standards." Aetna publishes no numeric ratio. Oklahoma is a licensure state: supervisees may practise only under a licensed behavior analyst (59 O.S. § 1928), and the mandate covers ABA "provided or supervised by" a BCBA, BCaBA or licensed doctoral-level psychologist.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: '59 O.S. § 1928 — Behavior analyst licensure (version in force through 10/31/2026: OKDHS Developmental Disabilities Services) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=553182' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
        ],
      },
      concurrentBilling: {
        value: 'Not addressed in CPB 0554, CPB 0648 or the ABA medical necessity guide; same-time 97153/97155 billing is a coding-policy and contract question.',
        status: 'unverified',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
        verifyVia: 'Aetna provider services or the participating-provider agreement; ask for Aetna’s code-editing position on 97153 with 97155 in writing.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week unit ceiling is published. The guide lists typical intensities (10–25 hrs/week comprehensive, 1–20 focused) as guidance, not caps, and hours follow documented severity. For insured Oklahoma plans the mandate forbids visit limits and dollar limits worse than medical/surgical; the old 25 hr/week and $25,000/year cap was repealed in 2022.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
          { title: '36 O.S. § 6060.21 — superseded 2019 version (under-9 age window, 25 hr/wk and $25,000/yr ABA cap) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=491671' },
        ],
      },
      noteSignature: {
        value: 'Not addressed. Aetna’s ABA policies set treatment-plan content (baselines, measurable criteria, generalization, titration and discharge planning) but not who signs a session note or when.',
        status: 'unverified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
        verifyVia: 'The participating-provider agreement and Aetna’s behavioral health documentation standards, via provider services.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Setting-agnostic for outpatient ABA. The guide notes that in inpatient, residential or partial hospitalization settings the criteria for that level of care apply and "specific authorization for ABA is not needed in addition," expects coordination "with existing providers and/or the school district," and wants plans that taper toward supports from other sources such as school.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Services must be "provided directly or billed by the appropriately licensed provider" — a licensed behavior analyst in a licensure state such as Oklahoma, a BCBA, or a licensed psychologist with ABA in scope — unless a mandate, plan document or contract requires otherwise.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: '59 O.S. § 1928 — Behavior analyst licensure (version in force through 10/31/2026: OKDHS Developmental Disabilities Services) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=553182' },
        ],
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Oklahoma?', a: 'Yes, for autism spectrum disorder under Aetna’s national policy, with precertification for every ABA code. Insured Oklahoma plans also carry Nick’s Law; self-funded employer plans follow their plan document.' },
      { q: 'Does Oklahoma’s autism mandate still cap ABA hours or age?', a: 'No. Since SB 1240 took effect on November 1, 2022, 36 O.S. § 6060.21 has no age window, no visit limits, and no ABA-specific hour or dollar cap; the old 25 hours a week and $25,000 a year cap is repealed.' },
      { q: 'What does Aetna pay for ABA in Oklahoma?', a: 'Commercial rates are negotiated in the participating-provider agreement and are not published. SoonerCare’s July 2026 fee schedule ($17.35 per unit of 97153, $23.55 for 97151, 97155 and 97156) is the public benchmark.' },
    ],
  },

  'cigna-oklahoma': {
    slug: 'cigna-oklahoma',
    family: 'cigna',
    cardDesc: 'EN0499 + the Evernorth autism resource guide + Nick’s Law: no PA on assessment codes, all ABA codes payable by telehealth.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 or 0362T "with a diagnosis of autism, as long as the provider is independently licensed or a Board Certified Behavior Analyst" and the plan covers ABA — just submit the claim.',
      status: 'verified',
      cites: [
        { title: 'Evernorth autism resource guide for behavioral health providers (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — after the assessment, the Applied Behavior Analysis Prior Authorization Form goes in with the treatment plan; Evernorth asks for requests "up to 30 days in advance of or two weeks after the start date of service," and later ones risk retrospective review of up to 30 days.',
      status: 'verified',
      cites: [
        { title: 'Evernorth autism resource guide for behavioral health providers (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — a confirmed DSM-5-TR ASD diagnosis (F84.0–F84.9, except F84.2 Rett syndrome) by a professional licensed to practise independently whose board treats diagnosis as within scope; provisional or "rule out" diagnoses and educational eligibility alone do not count.',
      status: 'verified',
      cites: [
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    payer: 'Cigna / Evernorth in Oklahoma',
    state: 'OK',
    kind: 'commercial',
    pill: 'Payer Guide · Cigna · Oklahoma',
    h1: 'Cigna / Evernorth ABA coverage in Oklahoma: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Oklahoma: Prior Auth & Mandate Guide | Carelu',
    metaDescription: 'How Cigna / Evernorth covers ABA for Oklahoma families: EN0499 criteria, no prior auth on assessment codes, treatment authorization timing, telehealth for all ABA codes, Nick’s Law (36 O.S. § 6060.21) with no age limit or cap since 2022, Oklahoma licensure, and what intake should verify.',
    intro: [
      'For an intake team in Oklahoma, a Cigna card means Evernorth’s national ABA policy (EN0499, effective May 15, 2026), its autism resource guide for billing and authorization, and Oklahoma’s autism mandate (Nick’s Law) wherever the plan is fully insured. Cigna is one of the easier front doors: the assessment codes need no prior authorization when the provider is a BCBA or independently licensed. Self-funded employer plans follow their plan document rather than the mandate, so funding type comes first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for confirmed ASD under Evernorth EN0499 (Rett syndrome excluded)' },
      { label: 'State mandate', value: 'Nick’s Law — 36 O.S. § 6060.21 (2016; amended 2019 and by SB 1240, eff. 11/1/2022)' },
      { label: 'Mandate age', value: 'No age limit since 11/1/2022 (earlier versions: under 9, or 6 years if diagnosed after age 3)' },
      { label: 'Mandate caps', value: 'None — no visit limits, and no dollar limits, deductibles or coinsurance worse than medical/surgical; the 25 hr/wk and $25,000/yr ABA cap was repealed in 2022' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans; limited-benefit policies; a plan approved for the 1% premium-cost exemption (§ 6060.22)' },
      { label: 'Licensure', value: 'OK Licensed Behavior Analyst / certified assistant (59 O.S. § 1928) — OKDHS DDS through 10/31/2026, Board of Examiners of Psychologists from 11/1/2026' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Oklahoma',
        body: [
          'EN0499 covers ABA for a confirmed DSM-5-TR autism diagnosis and treats it as not medically necessary for every non-ASD indication, Rett syndrome included. The assessment must be done by a BCBA, a licensed behavior analyst or an independently licensed clinician trained in ABA, using a complete, current-edition standardized instrument. Case supervision is expected at "one to two hours per ten hours of direct treatment," with at least one to two hours a week when direct treatment is ten hours or less. Continued treatment needs data collected within 60 days of the request and a standardized reassessment completed no more than a year before the new period. Evernorth’s resource guide handles the mechanics: no prior authorization on 97151, 97152 or 0362T for a BCBA or independently licensed provider, a PA form with the treatment plan for everything else, all ABA codes covered by telehealth, and unlicensed staff billed under the supervising provider. We found no Oklahoma-specific Cigna ABA rule.',
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Evernorth autism resource guide for behavioral health providers (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Oklahoma mandate: what Nick’s Law guarantees now',
        body: [
          '36 O.S. § 6060.21 requires "a health benefit plan and the Oklahoma Employees Health Insurance Plan" to cover "the screening, diagnosis and treatment of autism spectrum disorder in individuals." Since SB 1240 took effect on November 1, 2022, the statute has no age window and no ABA cap: coverage "shall not be subject to any limits on the number of visits," and dollar limits, deductibles and coinsurance may be no less favorable than for substantially all medical and surgical benefits. The earlier versions (2016 and 2019) limited coverage to children under nine (or six years of coverage if diagnosed after age three), capped ABA at 25 hours a week and $25,000 a year, and excluded ACA individual and small-group plans; all three limits are gone from the current text. The "health benefit plan" definition reaches group and individual medical insurance, HMOs and PPOs; self-funded employer plans are governed by ERISA instead, and limited-benefit policies (specified disease, dental or vision only, short-term plans of six months or less) fall outside the definition.',
          'Four more terms shape intake. ABA coverage "shall include the services provided or supervised by a board-certified behavior analyst, a board-certified assistant behavior analyst or a licensed doctoral-level psychologist." Treatment must be "prescribed or ordered for an individual diagnosed with an autism spectrum disorder by a licensed physician or a licensed doctoral-level psychologist." Outside inpatient care the insurer may review the treatment plan annually, more often only by agreement for that one patient, at the insurer’s cost. And under § 6060.22 a plan whose premium costs rise more than 1% from providing ABA can ask the Insurance Commissioner for an exemption, backed by an actuary’s signed request.',
        ],
        cites: [
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
          { title: '36 O.S. § 6060.21 — superseded 2019 version (under-9 age window, 25 hr/wk and $25,000/yr ABA cap) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=491671' },
          { title: '36 O.S. § 6060.22 — Exempt health benefit plans (1% premium-cost exemption) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478387' },
          { title: '36 O.S. § 6060.4(C) — "Health benefit plan" definition — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=87362' },
        ],
      },
      {
        h2: 'Licensure & rates in Oklahoma',
        body: [
          'Oklahoma requires a state license to practise ABA. Under 59 O.S. § 1928, "No person shall practice applied behavior analysis without obtaining a license or certification," supervisees practise only under a licensed behavior analyst, and licensed human services professionals (psychologists, LPCs, LCSWs, OTs, SLPs and others) may practise ABA within their scope. Through October 31, 2026 the Licensed Behavior Analyst credential (BCBA) and the certified assistant behavior analyst (BCaBA) are issued by OKDHS Developmental Disabilities Services; SB 1557 moves both to the State Board of Examiners of Psychologists from November 1, 2026 and adds a national criminal history check. Cigna does not publish commercial ABA rates for Oklahoma; they are set in the Evernorth provider agreement. Oklahoma Medicaid gives a public benchmark: the July 1, 2026 SoonerCare fee schedule pays $17.35 per 15-minute unit of 97153 and $23.55 for 97151, 97155 and 97156.',
        ],
        cites: [
          { title: '59 O.S. § 1928 — Behavior analyst licensure (version in force through 10/31/2026: OKDHS Developmental Disabilities Services) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=553182' },
          { title: '59 O.S. § 1928 — as amended by SB 1557 (Laws 2026, c. 392), eff. 11/1/2026: State Board of Examiners of Psychologists — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=456318' },
          { title: 'OHCA — SoonerCare Title XIX fee schedule, effective 07/01/2026 (V3)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/claim-tools/fee-schedules/2026/Prov_fee_sch_TXIX_07012026_V3.txt' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Nick’s Law applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Diagnosis report with diagnostician details', desc: 'EN0499 wants the diagnostician’s name, credentials and licence type and the date the diagnosis was most recently made. Provisional diagnoses are not accepted.' },
      { title: 'Assessment provider credential', desc: 'The no-PA assessment path needs a BCBA or independently licensed provider.' },
      { title: 'Target start date', desc: 'File the treatment PA up to 30 days before, or within two weeks after, the start.' },
      { title: 'Other therapies schedule', desc: 'EN0499 will not pay ABA delivered at the same time as speech, OT or any other modality.' },
    ],
    sources: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Evernorth autism resource guide for behavioral health providers (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
      { title: '36 O.S. § 6060.21 — superseded 2019 version (under-9 age window, 25 hr/wk and $25,000/yr ABA cap) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=491671' },
      { title: '36 O.S. § 6060.22 — Exempt health benefit plans (1% premium-cost exemption) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478387' },
      { title: '36 O.S. § 6060.4(C) — "Health benefit plan" definition — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=87362' },
      { title: '59 O.S. § 1928 — Behavior analyst licensure (version in force through 10/31/2026: OKDHS Developmental Disabilities Services) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=553182' },
      { title: '59 O.S. § 1928 — as amended by SB 1557 (Laws 2026, c. 392), eff. 11/1/2026: State Board of Examiners of Psychologists — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=456318' },
      { title: '36 O.S. § 6570.6 — Prior authorization time frames (eff. 1/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538475' },
      { title: 'Okla. Admin. Code § 365:10-11-3 — Coordination of benefits, order of benefit determination (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/oklahoma/OAC-365-10-11-3' },
      { title: 'OHCA — SoonerCare Title XIX fee schedule, effective 07/01/2026 (V3)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/claim-tools/fee-schedules/2026/Prov_fee_sch_TXIX_07012026_V3.txt' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age limit and points to the benefit plan and state mandates for terms. For insured Oklahoma plans Nick’s Law has had no age window since November 1, 2022. A self-funded plan can still set its own terms.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
        ],
        verifyVia: 'Evernorth Autism Care Coordinator team (877-279-7603) or the benefits line on the card: confirm funding type and any plan age term.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but EN0499 requires "The date on which the diagnosis was most recently made" with the diagnostician’s name, credentials and licence type. For continued treatment, data must be collected within 60 days before the request and a standardized assessment completed "no more than one year prior to the start date of the continued treatment request."',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'A "healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice." Educational identification under IDEA does not by itself count as a diagnosis. For insured plans Nick’s Law covers treatment prescribed or ordered by a licensed physician or licensed doctoral-level psychologist.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
        ],
      },
      diagnosticTools: {
        value: 'EN0499 names no required diagnostic instrument: the diagnosis must meet DSM-5-TR criteria. The ABA assessment must use "a reliable, valid, and standardized assessment instrument" measuring the DSM-5-TR ASD domains, completed in full, by a trained administrator, in its most current edition (for example, "Vineland-3 vs. Vineland-II").',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      referral: {
        value: 'Cigna requires no referral for ABA; the assessment codes need no PA for a BCBA or independently licensed provider, and treatment needs the ABA prior authorization form. For insured Oklahoma plans the mandate covers treatment prescribed or ordered by a licensed physician or licensed doctoral-level psychologist.',
        status: 'verified',
        cites: [
          { title: 'Evernorth autism resource guide for behavioral health providers (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
        ],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" (Evernorth autism resource guide). EN0499 allows in-person, telehealth or hybrid delivery, and services in settings with other expectations (school, vocational, telehealth) must still meet the direct-treatment definition.',
        status: 'verified',
        cites: [
          { title: 'Evernorth autism resource guide for behavioral health providers (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      authTurnaround: {
        value: 'Evernorth asks for ABA treatment requests "up to 30 days in advance of or two weeks after the start date of service"; a later request "may result in a retrospective review and could delay the determination for up to 30 days." The legal ceiling depends on funding. Fully insured Oklahoma plans fall under the Ensuring Transparency in Prior Authorization Act (eff. 1/1/2025): a decision "within seventy-two (72) hours of obtaining all necessary information" for urgent services and "within seven (7) days of obtaining all necessary information" for non-urgent ones, and services "are deemed authorized" if the deadline is missed and the provider used the plan’s authorized PA system; the approval must state its duration or expiry date, and a new plan must honor a prior authorization from the previous plan "for at least the initial sixty (60) days." Self-funded (ERISA) plans follow 29 CFR 2560.503-1: pre-service decisions "not later than 15 days after receipt of the claim" (one 15-day extension) and urgent care within 72 hours.',
        status: 'verified',
        cites: [
          { title: 'Evernorth autism resource guide for behavioral health providers (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: '36 O.S. § 6570.6 — Prior authorization time frames (eff. 1/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538475' },
          { title: '36 O.S. § 6570.1 — Ensuring Transparency in Prior Authorization Act, definitions (eff. 1/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538426' },
          { title: '36 O.S. § 6570.10 — Honoring a prior authorization for the first 60 days of new coverage — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538484' },
          { title: '29 CFR 2560.503-1(f)(2) — ERISA group health plan claim decision timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Evernorth’s ABA documents do not state an order of benefits. Oklahoma’s coordination-of-benefits rule for insured plans applies the birthday rule to a child on both parents’ plans: the plan of the parent "whose date of birth, excluding year of birth, occurs earlier in a calendar year" pays first; for separated or divorced parents the custodial parent’s plan goes first, then a stepparent’s, then the non-custodial parent’s, and a court decree assigning financial responsibility overrides that order (OAC 365:10-11-3). Self-funded plans follow their plan document. If the child also has SoonerCare, this plan pays first — SoonerCare is payer of last resort, and OHCA expects the family to follow this plan’s rules, including its prior authorization. TRICARE pays after this plan ("TRICARE shall be last pay," 32 CFR 199.8), and "CHAMPVA is the last payer to OHI" (38 CFR 17.276(d)).',
        status: 'plan-dependent',
        cites: [
          { title: 'Okla. Admin. Code § 365:10-11-3 — Coordination of benefits, order of benefit determination (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/oklahoma/OAC-365-10-11-3' },
          { title: 'OAC 317:30-3-24 — Third party liability [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/general-scope-and-administration/third-party-liability.html' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
          { title: '38 CFR 17.276(d) — CHAMPVA last payer to other health insurance (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.276' },
        ],
        verifyVia: 'Cigna customer service at benefits verification: ask for the recorded COB order and, for a self-funded plan, the plan’s own COB rule.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Case supervision by a BCBA, LBA or independently licensed clinician trained in ABA, combining direct supervision (BCBA face-to-face with the child and the RBT or BCaBA) and indirect supervision at "one to two hours per ten hours of direct treatment"; at ten or fewer direct hours a week, "a minimum of one to two hours per week of direct case supervision." The supervisor’s name and credentials must be documented.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      concurrentBilling: {
        value: '"Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)." ABA "delivered to the same individual, at the same time as any other treatment modality" (speech, OT) is not covered.',
        status: 'verified',
        cites: [
          { title: 'Evernorth autism resource guide for behavioral health providers (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      dailyLimits: {
        value: 'EN0499 sets no numeric hour or unit cap; hours must be justified by the treatment plan and data. For insured Oklahoma plans Nick’s Law forbids visit limits and dollar limits worse than medical/surgical.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
        ],
      },
      noteSignature: {
        value: 'Session documentation must include the service delivered, the people present, and the "Name, credential (if applicable), and signature of ABA provider who rendered the service."',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      placeOfService: {
        value: 'Home, clinic, school or community are all possible, but services "primarily educational or vocational in nature" are not covered, ABA may not "replace or replicate activities that are the responsibility of the setting" (classroom aide, 1:1 teacher, respite), and all ABA codes may be delivered by telehealth.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Evernorth autism resource guide for behavioral health providers (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      billAsProvider: {
        value: '"Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider," and a paper claim lists "only a BCBA or other licensed provider in box 33."',
        status: 'verified',
        cites: [
          { title: 'Evernorth autism resource guide for behavioral health providers (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Oklahoma?', a: 'Yes, for a confirmed autism diagnosis under Evernorth EN0499. Insured Oklahoma plans also carry Nick’s Law (no age limit, no hour or dollar cap); self-funded plans follow their plan document.' },
      { q: 'Does the ABA assessment need prior authorization with Cigna?', a: 'No. 97151, 97152 and 0362T need no PA with an autism diagnosis when the provider is a BCBA or independently licensed and the plan covers ABA. Treatment does need the ABA prior authorization form.' },
      { q: 'Can ABA be delivered by telehealth under Cigna?', a: 'Yes. Evernorth’s autism resource guide says all ABA CPT codes are covered telehealth services.' },
    ],
  },

  'unitedhealthcare-oklahoma': {
    slug: 'unitedhealthcare-oklahoma',
    family: 'unitedhealthcare',
    cardDesc: 'Optum ABA criteria (BH803ABASCC) + Nick’s Law: assessment and treatment both authorized, concurrent 97153/97155 billable.',
    assessmentPA: {
      value: 'Required — UHC behavioral health runs through United Behavioral Health, operating under the brand Optum; its CPT FAQ says "All services require prior approval," the SCC say "Prior authorization is required for ABA," and the Provider Express portal takes separate "ABA Assessment or Treatment" authorization requests.',
      status: 'verified',
      cites: [
        { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        { title: 'Optum ABA Supplemental Clinical Criteria BH803ABASCC (interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum Provider Express — Applied Behavior Analysis providers page (state list has no Oklahoma page)', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2.html' },
      ],
    },
    treatmentPA: {
      value: 'Required — "At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law"; supervision hours and future assessments are requested with the treatment request.',
      status: 'verified',
      cites: [
        { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        { title: 'Optum ABA Supplemental Clinical Criteria BH803ABASCC (interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — a DSM-5-TR ASD diagnosis from a state-licensed physician, psychologist or other qualified licensed clinician, confirmed with at least one clinically validated tool; older Asperger’s or PDD-NOS labels need an updated DSM-5 diagnosis.',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria BH803ABASCC (interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      ],
    },
    payer: 'UnitedHealthcare in Oklahoma',
    state: 'OK',
    kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Oklahoma',
    h1: 'UnitedHealthcare ABA coverage in Oklahoma: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Oklahoma: Prior Auth & Mandate Guide | Carelu',
    metaDescription: 'How UnitedHealthcare (Optum Behavioral Health) covers ABA for Oklahoma families: the Optum ABA Supplemental Clinical Criteria, assessment and treatment authorization, supervision and concurrent billing, Nick’s Law (36 O.S. § 6060.21) with no age limit or cap since 2022, Oklahoma licensure, and what intake should verify.',
    intro: [
      'UnitedHealthcare commercial ABA runs through Optum Behavioral Health and the Provider Express portal, under Optum’s ABA Supplemental Clinical Criteria (interim review April 2026). Optum publishes ABA state pages for about eighteen states and plans; Oklahoma is not one of them, so the national criteria plus Oklahoma’s mandate (Nick’s Law) for fully insured plans are the picture. Self-funded employer plans answer to their plan document, so funding type comes first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the Optum ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'Nick’s Law — 36 O.S. § 6060.21 (2016; amended 2019 and by SB 1240, eff. 11/1/2022)' },
      { label: 'Mandate age', value: 'No age limit since 11/1/2022 (earlier versions: under 9, or 6 years if diagnosed after age 3)' },
      { label: 'Mandate caps', value: 'None — no visit limits, and no dollar limits, deductibles or coinsurance worse than medical/surgical; the 25 hr/wk and $25,000/yr ABA cap was repealed in 2022' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans; limited-benefit policies; a plan approved for the 1% premium-cost exemption (§ 6060.22)' },
      { label: 'Licensure', value: 'OK Licensed Behavior Analyst / certified assistant (59 O.S. § 1928) — OKDHS DDS through 10/31/2026, Board of Examiners of Psychologists from 11/1/2026' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Oklahoma',
        body: [
          'Optum requires a DSM-5-TR ASD diagnosis from "a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis," confirmed with at least one clinically validated tool (screeners such as the M-CHAT or CARS-2 up to formal instruments such as the ADI-R and ADOS-2). Prior authorization applies to all ABA, with assessment and treatment requested separately in the Provider Express portal and treatment reviews generally every four to six months. The SCC tie supervision to "one to two hours for every ten hours of direct treatment," expect progress within six-month windows, and flag use of under 80% of authorized hours over two weeks at review. Optum’s CPT FAQ settles the billing questions other carriers leave open: supervision and technician time may be billed concurrently (97153 with 97155), 97153 and 97156 may run concurrently, provider signatures are required on progress notes, and modifiers identify the credential (HM technician, HN BCaBA, HO BCBA, HP BCBA-D).',
        ],
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria BH803ABASCC (interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum Provider Express — Applied Behavior Analysis providers page (state list has no Oklahoma page)', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2.html' },
        ],
      },
      {
        h2: 'The Oklahoma mandate: what Nick’s Law guarantees now',
        body: [
          '36 O.S. § 6060.21 requires "a health benefit plan and the Oklahoma Employees Health Insurance Plan" to cover "the screening, diagnosis and treatment of autism spectrum disorder in individuals." Since SB 1240 took effect on November 1, 2022, the statute has no age window and no ABA cap: coverage "shall not be subject to any limits on the number of visits," and dollar limits, deductibles and coinsurance may be no less favorable than for substantially all medical and surgical benefits. The earlier versions (2016 and 2019) limited coverage to children under nine (or six years of coverage if diagnosed after age three), capped ABA at 25 hours a week and $25,000 a year, and excluded ACA individual and small-group plans; all three limits are gone from the current text. The "health benefit plan" definition reaches group and individual medical insurance, HMOs and PPOs; self-funded employer plans are governed by ERISA instead, and limited-benefit policies (specified disease, dental or vision only, short-term plans of six months or less) fall outside the definition.',
          'Four more terms shape intake. ABA coverage "shall include the services provided or supervised by a board-certified behavior analyst, a board-certified assistant behavior analyst or a licensed doctoral-level psychologist." Treatment must be "prescribed or ordered for an individual diagnosed with an autism spectrum disorder by a licensed physician or a licensed doctoral-level psychologist." Outside inpatient care the insurer may review the treatment plan annually, more often only by agreement for that one patient, at the insurer’s cost. And under § 6060.22 a plan whose premium costs rise more than 1% from providing ABA can ask the Insurance Commissioner for an exemption, backed by an actuary’s signed request.',
        ],
        cites: [
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
          { title: '36 O.S. § 6060.21 — superseded 2019 version (under-9 age window, 25 hr/wk and $25,000/yr ABA cap) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=491671' },
          { title: '36 O.S. § 6060.22 — Exempt health benefit plans (1% premium-cost exemption) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478387' },
          { title: '36 O.S. § 6060.4(C) — "Health benefit plan" definition — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=87362' },
        ],
      },
      {
        h2: 'Licensure & rates in Oklahoma',
        body: [
          'Oklahoma requires a state license to practise ABA. Under 59 O.S. § 1928, "No person shall practice applied behavior analysis without obtaining a license or certification," supervisees practise only under a licensed behavior analyst, and licensed human services professionals (psychologists, LPCs, LCSWs, OTs, SLPs and others) may practise ABA within their scope. Through October 31, 2026 the Licensed Behavior Analyst credential (BCBA) and the certified assistant behavior analyst (BCaBA) are issued by OKDHS Developmental Disabilities Services; SB 1557 moves both to the State Board of Examiners of Psychologists from November 1, 2026 and adds a national criminal history check. UnitedHealthcare does not publish commercial ABA rates for Oklahoma; they are set in the Optum network agreement. Oklahoma Medicaid gives a public benchmark: the July 1, 2026 SoonerCare fee schedule pays $17.35 per 15-minute unit of 97153 and $23.55 for 97151, 97155 and 97156.',
        ],
        cites: [
          { title: '59 O.S. § 1928 — Behavior analyst licensure (version in force through 10/31/2026: OKDHS Developmental Disabilities Services) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=553182' },
          { title: '59 O.S. § 1928 — as amended by SB 1557 (Laws 2026, c. 392), eff. 11/1/2026: State Board of Examiners of Psychologists — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=456318' },
          { title: 'OHCA — SoonerCare Title XIX fee schedule, effective 07/01/2026 (V3)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/claim-tools/fee-schedules/2026/Prov_fee_sch_TXIX_07012026_V3.txt' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Nick’s Law applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD diagnosis and severity level, confirmed by the diagnosing clinician with at least one validated tool. Update any Asperger’s or PDD-NOS label.' },
      { title: 'Provider Express access', desc: 'Assessment and treatment are requested separately through the Provider Express portal (One Healthcare ID).' },
      { title: 'Family availability', desc: 'Optum reviews utilization under 80% of authorized hours over two weeks. Set hours the family can actually keep.' },
      { title: 'School and IEP status', desc: 'Optum will not pay a 1:1 classroom aide or IDEA-covered services, but covers school coordination, teacher training and observation.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria BH803ABASCC (interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum Provider Express — Applied Behavior Analysis providers page (state list has no Oklahoma page)', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2.html' },
      { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
      { title: '36 O.S. § 6060.21 — superseded 2019 version (under-9 age window, 25 hr/wk and $25,000/yr ABA cap) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=491671' },
      { title: '36 O.S. § 6060.22 — Exempt health benefit plans (1% premium-cost exemption) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478387' },
      { title: '36 O.S. § 6060.4(C) — "Health benefit plan" definition — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=87362' },
      { title: '59 O.S. § 1928 — Behavior analyst licensure (version in force through 10/31/2026: OKDHS Developmental Disabilities Services) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=553182' },
      { title: '59 O.S. § 1928 — as amended by SB 1557 (Laws 2026, c. 392), eff. 11/1/2026: State Board of Examiners of Psychologists — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=456318' },
      { title: '36 O.S. § 6570.6 — Prior authorization time frames (eff. 1/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538475' },
      { title: 'Okla. Admin. Code § 365:10-11-3 — Coordination of benefits, order of benefit determination (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/oklahoma/OAC-365-10-11-3' },
      { title: 'OHCA — SoonerCare Title XIX fee schedule, effective 07/01/2026 (V3)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/claim-tools/fee-schedules/2026/Prov_fee_sch_TXIX_07012026_V3.txt' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'The Optum SCC carry no age criterion; the member’s benefit plan and any state law govern. For insured Oklahoma plans Nick’s Law has had no age window since November 1, 2022.',
        status: 'plan-dependent',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria BH803ABASCC (interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
        ],
        verifyVia: 'Provider Express eligibility check or the behavioral health number on the member ID card: confirm funding type and any plan age term.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No fixed expiry. Optum says "Members need to have an updated DSM-5 diagnosis of Autism Spectrum Disorder," and "There is no required frequency at which an assessment must take place," with treatment reviews every 4–6 months; the SCC require reassessment of the plan where progress is inadequate within a 6-month period.',
        status: 'verified',
        cites: [
          { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum ABA Supplemental Clinical Criteria BH803ABASCC (interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'A state-licensed physician, psychologist, or other state-licensed clinician qualified to diagnose under DSM-5-TR. For insured Oklahoma plans Nick’s Law covers treatment prescribed or ordered by a licensed physician or licensed doctoral-level psychologist.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria BH803ABASCC (interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
        ],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool, from a non-exhaustive list: first-level screeners (ABC, CHAT/M-CHAT, CSBS-DP-IT, ASQ, AQ, CAST), second-level aids (CARS/CARS-2, RITA-T, STAT) and formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO). Functional assessments such as the VB-MAPP, ABLLS and Vineland are examples for treatment planning.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria BH803ABASCC (interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        ],
      },
      referral: {
        value: 'No referral or order is required by Optum; the gate is prior authorization of the assessment and then treatment. For insured Oklahoma plans the mandate covers treatment prescribed or ordered by a licensed physician or licensed doctoral-level psychologist.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria BH803ABASCC (interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
        ],
      },
      telehealth: {
        value: 'Virtual supervision and family training are allowed for an "approved Optum virtual visits provider" who has attested and told the ABA Care Advocate: bill 97155 or 97156 as in person with place of service 02 (Optum’s POS list uses 10 for telehealth in the home and 02 elsewhere). Optum’s documents do not address remote delivery of 97153.',
        status: 'verified',
        cites: [
          { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum ABA Supplemental Clinical Criteria BH803ABASCC (interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      authTurnaround: {
        value: 'Optum publishes no ABA decision clock; requests go through the Provider Express portal and reviews recur every 4–6 months. The legal ceiling depends on funding. Fully insured Oklahoma plans fall under the Ensuring Transparency in Prior Authorization Act (eff. 1/1/2025): a decision "within seventy-two (72) hours of obtaining all necessary information" for urgent services and "within seven (7) days of obtaining all necessary information" for non-urgent ones, and services "are deemed authorized" if the deadline is missed and the provider used the plan’s authorized PA system; the approval must state its duration or expiry date, and a new plan must honor a prior authorization from the previous plan "for at least the initial sixty (60) days." Self-funded (ERISA) plans follow 29 CFR 2560.503-1: pre-service decisions "not later than 15 days after receipt of the claim" (one 15-day extension) and urgent care within 72 hours.',
        status: 'verified',
        cites: [
          { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum Provider Express — Applied Behavior Analysis providers page (state list has no Oklahoma page)', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2.html' },
          { title: '36 O.S. § 6570.6 — Prior authorization time frames (eff. 1/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538475' },
          { title: '36 O.S. § 6570.1 — Ensuring Transparency in Prior Authorization Act, definitions (eff. 1/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538426' },
          { title: '36 O.S. § 6570.10 — Honoring a prior authorization for the first 60 days of new coverage — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538484' },
          { title: '29 CFR 2560.503-1(f)(2) — ERISA group health plan claim decision timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Optum’s ABA documents do not state an order of benefits. Oklahoma’s coordination-of-benefits rule for insured plans applies the birthday rule to a child on both parents’ plans: the plan of the parent "whose date of birth, excluding year of birth, occurs earlier in a calendar year" pays first; for separated or divorced parents the custodial parent’s plan goes first, then a stepparent’s, then the non-custodial parent’s, and a court decree assigning financial responsibility overrides that order (OAC 365:10-11-3). Self-funded plans follow their plan document. If the child also has SoonerCare, this plan pays first — SoonerCare is payer of last resort, and OHCA expects the family to follow this plan’s rules, including its prior authorization. TRICARE pays after this plan ("TRICARE shall be last pay," 32 CFR 199.8), and "CHAMPVA is the last payer to OHI" (38 CFR 17.276(d)).',
        status: 'plan-dependent',
        cites: [
          { title: 'Okla. Admin. Code § 365:10-11-3 — Coordination of benefits, order of benefit determination (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/oklahoma/OAC-365-10-11-3' },
          { title: 'OAC 317:30-3-24 — Third party liability [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/general-scope-and-administration/third-party-liability.html' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
          { title: '38 CFR 17.276(d) — CHAMPVA last payer to other health insurance (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.276' },
        ],
        verifyVia: 'UnitedHealthcare customer service at benefits verification: ask for the recorded COB order and, for a self-funded plan, the plan’s own COB rule.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Direct case supervision at one to two hours for every ten hours of direct treatment a week (SCC, consistent with CASP); Optum’s FAQ says "In general, we see 2 hours for every 10 hours" and asks for a clinical rationale above that. Technicians must be RBTs or other certified technicians as state rules allow, under a BCBA or licensed clinician; parents should not serve as RBT for their own child.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria BH803ABASCC (interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Allowed: "When supervision is provided, you may bill concurrently for both Supervisors and Behavior Technicians, billing with 97153 and 97155," and 97153 with 97156 may be billed concurrently because they are separate services to different family members by different providers.',
        status: 'verified',
        cites: [
          { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        ],
      },
      dailyLimits: {
        value: 'No numeric cap: hours must match documented clinical need. Authorizations come in code clusters (assessment 97151–97152; direct care 97153–97154; multi-staff 0362T/0373T; professional 97155–97158) and units may shift within a cluster. For insured Oklahoma plans Nick’s Law forbids visit limits and dollar limits worse than medical/surgical.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria BH803ABASCC (interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
        ],
      },
      noteSignature: {
        value: '"Provider signature is required on progress notes. Parent/guardian signatures are not required." The daily note records place of service, start and stop time, who rendered the service, the service type, who attended and the interventions used.',
        status: 'verified',
        cites: [
          { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        ],
      },
      placeOfService: {
        value: 'Home (12), clinic (11), community (99), school (03) and telehealth (10 or 02) are the usual POS codes. Not covered: "1:1 aid delivered simultaneously during classroom instruction" or IDEA-covered services, though school coordination, teacher training, meetings and observation are covered.',
        status: 'verified',
        cites: [
          { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum ABA Supplemental Clinical Criteria BH803ABASCC (interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      billAsProvider: {
        value: 'A credentialed BCBA or attested licensed clinician is the ABA provider; BCaBAs and technicians work under their direct supervision. Modifiers identify who delivered the service: HM technician, HN BCaBA, HO BCBA, HP BCBA-D. Any supervisor credentialed under the group or facility contract may see the member.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria BH803ABASCC (interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum FAQ — Autism/ABA using CPT codes (BH00083-24)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Oklahoma?', a: 'Yes, for ASD under Optum’s ABA Supplemental Clinical Criteria, with prior authorization for assessment and treatment. Insured Oklahoma plans also carry Nick’s Law; self-funded plans follow their plan document.' },
      { q: 'Can I bill 97153 and 97155 at the same time with UnitedHealthcare?', a: 'Yes. Optum’s CPT FAQ allows concurrent billing of technician (97153) and supervisor (97155) time when supervision is provided.' },
      { q: 'How often does Optum review ABA treatment?', a: 'Most treatment reviews happen every four to six months, depending on the plan and state law.' },
    ],
  },

  'blue-cross-blue-shield-oklahoma': {
    slug: 'blue-cross-blue-shield-oklahoma',
    family: 'bcbs',
    cardDesc: 'HCSC Blue plan: MCG criteria since 1/1/2026, phone intake for ABA since April 2026, CPCP011 billing rules, 36-month dx window.',
    assessmentPA: {
      value: 'Not on the PA code list — BCBSOK’s 2026 commercial behavioral health PA list names 97153–97158, 0362T and 0373T but not 97151 or 97152. BCBSOK still has an Initial Assessment Request form ("Submit form at least two weeks before requested start date"); if it is not received within 30 days of the assessment start, "claims should be submitted through your normal process."',
      status: 'verified',
      cites: [
        { title: 'BCBSOK — 2026 Commercial Outpatient Behavioral Health Prior Authorization Codes (eff. 1/1/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/claims/um/2026-commercial-outpatient-behavioral-health-prior-authorization-codes.pdf' },
        { title: 'BCBSOK — ABA Initial Assessment Request (608123.1220)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/ok-assessmentrequest.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — every treatment code (97153–97158, 0362T, 0373T) is "Managed By BCBSOK"; since April 2026 the preservice request starts with a call to the customer service number on the member’s ID card, followed by telephonic clinical review. Authorizations typically run 26 weeks, with reassessment every 6 months.',
      status: 'verified',
      cites: [
        { title: 'BCBSOK — 2026 Commercial Outpatient Behavioral Health Prior Authorization Codes (eff. 1/1/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/claims/um/2026-commercial-outpatient-behavioral-health-prior-authorization-codes.pdf' },
        { title: 'BCBSOK news (1/15/2026) — Call for preservice requests for ABA, commercial members, effective April 2026', url: 'https://www.bcbsok.com/provider/education/education-reference/news-updates/2026/1-15-2026-call-for-preservice-requests-for-applied-behavior-analysis' },
        { title: 'BCBSOK CPCP011 — Applied Behavior Analysis (plan effective 3/20/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
        { title: 'BCBSOK — ABA Clinical Service Request Form, initial and concurrent (615911.1125)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/ok-aba-clinicalservicerequestform.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — a diagnosis "within the Pervasive and specific developmental disorders category of ICD-10," and the ABA request forms say "Current diagnostic required not older than 36 months."',
      status: 'verified',
      cites: [
        { title: 'BCBSOK — 2026 Commercial Outpatient Behavioral Health Prior Authorization Codes (eff. 1/1/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/claims/um/2026-commercial-outpatient-behavioral-health-prior-authorization-codes.pdf' },
        { title: 'BCBSOK — ABA Clinical Service Request Form, initial and concurrent (615911.1125)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/ok-aba-clinicalservicerequestform.pdf' },
      ],
    },
    payer: 'Blue Cross and Blue Shield of Oklahoma',
    state: 'OK',
    kind: 'commercial',
    pill: 'Payer Guide · BCBS of Oklahoma',
    h1: 'Blue Cross and Blue Shield of Oklahoma ABA coverage: the intake guide.',
    metaTitle: 'Blue Cross Blue Shield of Oklahoma ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription: 'How BCBSOK covers ABA: MCG criteria since January 2026, phone intake for treatment authorization since April 2026, no PA code on 97151/97152, the 36-month diagnosis window, CPCP011 supervision, billing and documentation rules, Nick’s Law (36 O.S. § 6060.21), and what intake should verify.',
    intro: [
      'Blue Cross and Blue Shield of Oklahoma is Oklahoma’s Blue plan (part of HCSC), and 2026 changed its ABA mechanics twice. On January 1 its ABA medical policy (PSY301.021) was retired and medical necessity moved to MCG guidelines (Applied Behavioral Analysis, B-806-T), which are licensed and visible only through Availity. In April the treatment authorization moved from fax forms to a phone call to the customer service number on the member’s card. What BCBSOK does publish in full is CPCP011, a detailed ABA payment and coding policy, and its request forms, which carry the 36-month diagnosis window and the staff requirements. Nick’s Law applies to its fully insured plans; self-funded groups administered by BCBSOK follow their plan document.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD (ICD-10 pervasive developmental disorders) under MCG criteria and CPCP011' },
      { label: 'State mandate', value: 'Nick’s Law — 36 O.S. § 6060.21 (2016; amended 2019 and by SB 1240, eff. 11/1/2022)' },
      { label: 'Mandate age', value: 'No age limit since 11/1/2022 (earlier versions: under 9, or 6 years if diagnosed after age 3)' },
      { label: 'Mandate caps', value: 'None — no visit limits, and no dollar limits, deductibles or coinsurance worse than medical/surgical; the 25 hr/wk and $25,000/yr ABA cap was repealed in 2022' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans; limited-benefit policies; a plan approved for the 1% premium-cost exemption (§ 6060.22)' },
      { label: 'Licensure', value: 'OK Licensed Behavior Analyst / certified assistant (59 O.S. § 1928) — OKDHS DDS through 10/31/2026, Board of Examiners of Psychologists from 11/1/2026' },
    ],
    sections: [
      {
        h2: 'Authorization: what changed in 2026',
        body: [
          'BCBSOK’s 2026 commercial behavioral health PA code list names 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T, each "Managed By BCBSOK", for Blue Choice PPO, Blue Choice Preferred PPO and Blue Traditional; 97151 and 97152 are not on it. Its Initial Assessment Request form still exists ("Submit form at least two weeks before requested start date") and says that if it is not received within 30 days of the assessment start, "claims should be submitted through your normal process." For treatment, BCBSOK announced that "Effective April 2026, to initiate a preservice request for behavioral health applied behavior analysis, you must call our customer service number on the member’s ID card. Forms will no longer be the primary method," and a clinician follows up by phone. The Clinical Service Request Form still sets the content: diagnostic evaluation, baseline skills assessment "within the last 30 days" (VB-MAPP, ABLLS, AFLS, ABAS or Vineland), a comprehensive treatment plan, reassessment every six months, and a request window of up to 60 days before and at least two weeks before the start date.',
          'Medical necessity is judged under MCG: BCBSOK’s ADM1001.036 moved PSY301.021 "Applied Behavior Analysis (ABA) for Autism Spectrum Disorder (ASD) Diagnosis" to MCG B-806-T on January 1, 2026. MCG is licensed and not publicly posted, so ask for the criteria through Availity when a request is at risk.',
        ],
        cites: [
          { title: 'BCBSOK — 2026 Commercial Outpatient Behavioral Health Prior Authorization Codes (eff. 1/1/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/claims/um/2026-commercial-outpatient-behavioral-health-prior-authorization-codes.pdf' },
          { title: 'BCBSOK — ABA Initial Assessment Request (608123.1220)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/ok-assessmentrequest.pdf' },
          { title: 'BCBSOK news (1/15/2026) — Call for preservice requests for ABA, commercial members, effective April 2026', url: 'https://www.bcbsok.com/provider/education/education-reference/news-updates/2026/1-15-2026-call-for-preservice-requests-for-applied-behavior-analysis' },
          { title: 'BCBSOK — ABA Clinical Service Request Form, initial and concurrent (615911.1125)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/ok-aba-clinicalservicerequestform.pdf' },
          { title: 'BCBSOK ADM1001.036 — Medical policies moving to MCG guidelines (eff. 1/1/2026)', url: 'https://medicalpolicy.bcbsok.com/content/dam/bcbs/medicalpolicy/pdf/administrative/ADM1001.036_2026-01-01.pdf' },
        ],
      },
      {
        h2: 'CPCP011: the billing rules that decide the claim',
        body: [
          'CPCP011 (plan effective March 20, 2026) is unusually specific. Direct services are "typically requested for up to 40 hours per week"; an assessment over "eight hours (32 units of 97151)" may not be paid; parent education is typically authorized at an hour a week for a 26-week period; and daily units follow the CMS MUE table and the authorization. Only one BCBA may bill the same or similar services on a date of service, which "does not refer to the technician(s)" working alongside. Billable supervision is face to face with one technician; indirect supervision is a practice expense; and direct supervision may be authorized at "a minimum of 1 hour per week when less than 10 hours of direct services are authorized." 97153 carries one credential modifier (HM, HN or HO). Services billed outside POS 10, 11 and 12 need a documented rationale, and ABA "provided for educational, vocational, respite or custodial purposes" is not reimbursable.',
          'Documentation is strict: each rendered service needs "a parent or caregiver’s signature" along with the code, the rendering provider’s name and signature, credentials, place of service, date and begin and end times. The rendering provider "should bill for the services provided," and a non-qualified provider "cannot provide services and bill through another person’s NPI." BCBSOK’s May 2026 claims reminder repeats that point and says direct personal supervision requires the QHP "in the immediate vicinity 100% of the time."',
        ],
        cites: [
          { title: 'BCBSOK CPCP011 — Applied Behavior Analysis (plan effective 3/20/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
          { title: 'BCBSOK news (5/12/2026) — Claims reminders for behavioral health services', url: 'https://www.bcbsok.com/provider/education/education-reference/news-updates/2026/5-12-2026-claims-reminders-for-behavioral-health-services' },
        ],
      },
      {
        h2: 'The Oklahoma mandate: what Nick’s Law guarantees now',
        body: [
          '36 O.S. § 6060.21 requires "a health benefit plan and the Oklahoma Employees Health Insurance Plan" to cover "the screening, diagnosis and treatment of autism spectrum disorder in individuals." Since SB 1240 took effect on November 1, 2022, the statute has no age window and no ABA cap: coverage "shall not be subject to any limits on the number of visits," and dollar limits, deductibles and coinsurance may be no less favorable than for substantially all medical and surgical benefits. The earlier versions (2016 and 2019) limited coverage to children under nine (or six years of coverage if diagnosed after age three), capped ABA at 25 hours a week and $25,000 a year, and excluded ACA individual and small-group plans; all three limits are gone from the current text. The "health benefit plan" definition reaches group and individual medical insurance, HMOs and PPOs; self-funded employer plans are governed by ERISA instead, and limited-benefit policies (specified disease, dental or vision only, short-term plans of six months or less) fall outside the definition.',
          'Four more terms shape intake. ABA coverage "shall include the services provided or supervised by a board-certified behavior analyst, a board-certified assistant behavior analyst or a licensed doctoral-level psychologist." Treatment must be "prescribed or ordered for an individual diagnosed with an autism spectrum disorder by a licensed physician or a licensed doctoral-level psychologist." Outside inpatient care the insurer may review the treatment plan annually, more often only by agreement for that one patient, at the insurer’s cost. And under § 6060.22 a plan whose premium costs rise more than 1% from providing ABA can ask the Insurance Commissioner for an exemption, backed by an actuary’s signed request.',
        ],
        cites: [
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
          { title: '36 O.S. § 6060.21 — superseded 2019 version (under-9 age window, 25 hr/wk and $25,000/yr ABA cap) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=491671' },
          { title: '36 O.S. § 6060.22 — Exempt health benefit plans (1% premium-cost exemption) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478387' },
          { title: '36 O.S. § 6060.4(C) — "Health benefit plan" definition — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=87362' },
        ],
      },
      {
        h2: 'Licensure & rates in Oklahoma',
        body: [
          'Oklahoma requires a state license to practise ABA. Under 59 O.S. § 1928, "No person shall practice applied behavior analysis without obtaining a license or certification," supervisees practise only under a licensed behavior analyst, and licensed human services professionals (psychologists, LPCs, LCSWs, OTs, SLPs and others) may practise ABA within their scope. Through October 31, 2026 the Licensed Behavior Analyst credential (BCBA) and the certified assistant behavior analyst (BCaBA) are issued by OKDHS Developmental Disabilities Services; SB 1557 moves both to the State Board of Examiners of Psychologists from November 1, 2026 and adds a national criminal history check. BCBSOK does not publish commercial ABA rates; they are set in the network agreement. Oklahoma Medicaid gives a public benchmark: the July 1, 2026 SoonerCare fee schedule pays $17.35 per 15-minute unit of 97153 and $23.55 for 97151, 97155 and 97156.',
        ],
        cites: [
          { title: '59 O.S. § 1928 — Behavior analyst licensure (version in force through 10/31/2026: OKDHS Developmental Disabilities Services) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=553182' },
          { title: '59 O.S. § 1928 — as amended by SB 1557 (Laws 2026, c. 392), eff. 11/1/2026: State Board of Examiners of Psychologists — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=456318' },
          { title: 'OHCA — SoonerCare Title XIX fee schedule, effective 07/01/2026 (V3)', url: 'https://oklahoma.gov/content/dam/ok/en/okhca/docs/providers/claim-tools/fee-schedules/2026/Prov_fee_sch_TXIX_07012026_V3.txt' },
        ],
      },
    ],
    collect: [
      { title: 'Plan type and funding', desc: 'Blue Choice PPO, Blue Choice Preferred PPO, Blue Traditional, HMO or FEP; fully insured (Nick’s Law) or self-funded (plan document).' },
      { title: 'Diagnosis report under 36 months old', desc: 'BCBSOK’s forms require a current diagnostic not older than 36 months, from a PCP (family practice, internal medicine, pediatrics) or a specialist (developmental-behavioral or neurodevelopmental pediatrics, child neurology, psychiatry, licensed clinical psychology).' },
      { title: 'Skills assessment within 30 days', desc: 'VB-MAPP, ABLLS, AFLS, ABAS or Vineland, dated within the last 30 days of the request.' },
      { title: 'Start date', desc: 'Call to start the preservice request at least two weeks (and no more than 60 days) before treatment starts.' },
      { title: 'Line staff roster', desc: '18+, high school diploma or GED, background check, 40 hours of training, and BCBA oversight of at least 5% of hours worked.' },
    ],
    sources: [
      { title: 'BCBSOK CPCP011 — Applied Behavior Analysis (plan effective 3/20/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
      { title: 'BCBSOK — 2026 Commercial Outpatient Behavioral Health Prior Authorization Codes (eff. 1/1/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/claims/um/2026-commercial-outpatient-behavioral-health-prior-authorization-codes.pdf' },
      { title: 'BCBSOK — 2026 Commercial Prior Authorization Requirements Summary (eff. 1/1/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/claims/um/2026-prior-authorization-requirements-summary-of-services.pdf' },
      { title: 'BCBSOK — ABA Clinical Service Request Form, initial and concurrent (615911.1125)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/ok-aba-clinicalservicerequestform.pdf' },
      { title: 'BCBSOK — ABA Initial Assessment Request (608123.1220)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/ok-assessmentrequest.pdf' },
      { title: 'BCBSOK ADM1001.036 — Medical policies moving to MCG guidelines (eff. 1/1/2026)', url: 'https://medicalpolicy.bcbsok.com/content/dam/bcbs/medicalpolicy/pdf/administrative/ADM1001.036_2026-01-01.pdf' },
      { title: 'BCBSOK news (1/15/2026) — Call for preservice requests for ABA, commercial members, effective April 2026', url: 'https://www.bcbsok.com/provider/education/education-reference/news-updates/2026/1-15-2026-call-for-preservice-requests-for-applied-behavior-analysis' },
      { title: 'BCBSOK Commercial Provider Reference Manual (updated April 2026)', url: 'https://www.bcbsok.com/docs/provider/ok/standards/manuals/bcbsok-commercial-provider-reference-manual.pdf' },
      { title: 'BCBSOK — ABA Supervision via Telehealth Request & Attestation (609121.0719)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/aba-supervision-telehealth.pdf' },
      { title: 'BCBSOK — Telemedicine services page (ABA among expanded services)', url: 'https://www.bcbsok.com/provider/claims/claims-eligibility/telemedicine' },
      { title: 'BCBSOK RP033 — Telemedicine and Telehealth/Virtual Services Policy (eff. 3/27/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/standards/cpcp/2026/rp033-3-27-2026.pdf' },
      { title: 'BCBSOK news (5/12/2026) — Claims reminders for behavioral health services', url: 'https://www.bcbsok.com/provider/education/education-reference/news-updates/2026/5-12-2026-claims-reminders-for-behavioral-health-services' },
      { title: 'BCBSOK — Coordination of Benefits Questionnaire (611207.1020)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/cob-questionnaire-form.pdf' },
      { title: 'BCBSOK — Behavioral Health Program page', url: 'https://www.bcbsok.com/provider/clinical/clinical-resources/bhc-mgmt' },
      { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
      { title: '36 O.S. § 6060.21 — superseded 2019 version (under-9 age window, 25 hr/wk and $25,000/yr ABA cap) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=491671' },
      { title: '36 O.S. § 6060.22 — Exempt health benefit plans (1% premium-cost exemption) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478387' },
      { title: '36 O.S. § 6060.4(C) — "Health benefit plan" definition — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=87362' },
      { title: '59 O.S. § 1928 — Behavior analyst licensure (version in force through 10/31/2026: OKDHS Developmental Disabilities Services) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=553182' },
      { title: '59 O.S. § 1928 — as amended by SB 1557 (Laws 2026, c. 392), eff. 11/1/2026: State Board of Examiners of Psychologists — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=456318' },
      { title: '36 O.S. § 6570.6 — Prior authorization time frames (eff. 1/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538475' },
      { title: 'Okla. Admin. Code § 365:10-11-3 — Coordination of benefits, order of benefit determination (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/oklahoma/OAC-365-10-11-3' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'No age limit appears in BCBSOK’s ABA code list, forms or CPCP011; medical necessity sits in licensed MCG criteria. For fully insured plans Nick’s Law has had no age window since November 1, 2022. Self-funded groups follow their plan document.',
        status: 'plan-dependent',
        cites: [
          { title: 'BCBSOK CPCP011 — Applied Behavior Analysis (plan effective 3/20/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
          { title: 'BCBSOK ADM1001.036 — Medical policies moving to MCG guidelines (eff. 1/1/2026)', url: 'https://medicalpolicy.bcbsok.com/content/dam/bcbs/medicalpolicy/pdf/administrative/ADM1001.036_2026-01-01.pdf' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
        ],
        verifyVia: 'The customer service number on the member ID card (or Availity eligibility): confirm funding type and any plan age term.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: '"Current diagnostic required not older than 36 months" (both the Clinical Service Request and Initial Assessment Request forms), and the baseline skills "Assessment must be within the last 30 days." Reassessment is authorized every 6 months.',
        status: 'verified',
        cites: [
          { title: 'BCBSOK — ABA Clinical Service Request Form, initial and concurrent (615911.1125)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/ok-aba-clinicalservicerequestform.pdf' },
          { title: 'BCBSOK — ABA Initial Assessment Request (608123.1220)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/ok-assessmentrequest.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'The request form accepts a diagnosis from a primary care provider (family practice, internal medicine, pediatrics) or a specialized ASD-diagnosing provider (developmental-behavioral pediatrics, neurodevelopmental pediatrics, child neurology, adult or child psychiatry, licensed clinical psychology, or other specified). For insured plans Nick’s Law covers treatment prescribed or ordered by a licensed physician or licensed doctoral-level psychologist.',
        status: 'verified',
        cites: [
          { title: 'BCBSOK — ABA Clinical Service Request Form, initial and concurrent (615911.1125)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/ok-aba-clinicalservicerequestform.pdf' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
        ],
      },
      diagnosticTools: {
        value: 'BCBSOK’s published forms name no required diagnostic instrument; they ask for the diagnostic evaluation report plus a baseline skills assessment on "a recognized instrument such as the VB MAPP, ABLLS, AFLS, ABAS or the Vineland." Any instrument requirement in MCG B-806-T is licensed and not public.',
        status: 'verified',
        cites: [
          { title: 'BCBSOK — ABA Clinical Service Request Form, initial and concurrent (615911.1125)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/ok-aba-clinicalservicerequestform.pdf' },
          { title: 'BCBSOK ADM1001.036 — Medical policies moving to MCG guidelines (eff. 1/1/2026)', url: 'https://medicalpolicy.bcbsok.com/content/dam/bcbs/medicalpolicy/pdf/administrative/ADM1001.036_2026-01-01.pdf' },
        ],
      },
      referral: {
        value: 'No referral is required by BCBSOK’s ABA documents; the gate is the preservice request, started since April 2026 by calling the customer service number on the member’s ID card. HMO products may carry their own referral rules. For insured plans Nick’s Law covers treatment prescribed or ordered by a licensed physician or licensed doctoral-level psychologist.',
        status: 'verified',
        cites: [
          { title: 'BCBSOK news (1/15/2026) — Call for preservice requests for ABA, commercial members, effective April 2026', url: 'https://www.bcbsok.com/provider/education/education-reference/news-updates/2026/1-15-2026-call-for-preservice-requests-for-applied-behavior-analysis' },
          { title: 'BCBSOK — 2026 Commercial Outpatient Behavioral Health Prior Authorization Codes (eff. 1/1/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/claims/um/2026-commercial-outpatient-behavioral-health-prior-authorization-codes.pdf' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
        ],
      },
      telehealth: {
        value: 'BCBSOK lists "Applied behavior analysis (ABA) services" among its telemedicine services for fully insured and self-funded plans (self-funded coverage "may vary slightly"). Telehealth claims carry modifier 95, GT or another listed modifier and POS 02 or 10 (RP033, eff. 3/27/2026). Supervision by telehealth needs the ABA Supervision via Telehealth attestation (a rural HPSA or the plan’s telehealth-supervision standards, written member consent) and a face-to-face functional assessment every six months.',
        status: 'verified',
        cites: [
          { title: 'BCBSOK — Telemedicine services page (ABA among expanded services)', url: 'https://www.bcbsok.com/provider/claims/claims-eligibility/telemedicine' },
          { title: 'BCBSOK RP033 — Telemedicine and Telehealth/Virtual Services Policy (eff. 3/27/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/standards/cpcp/2026/rp033-3-27-2026.pdf' },
          { title: 'BCBSOK — ABA Supervision via Telehealth Request & Attestation (609121.0719)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/aba-supervision-telehealth.pdf' },
        ],
      },
      authTurnaround: {
        value: 'BCBSOK’s provider manual says it gives "a determination within the timeframes provided by law or accreditation requirements if applicable after receipt of all necessary information"; its ABA forms ask for requests at least two weeks, and up to 60 days, before the start date. The legal ceiling depends on funding. Fully insured Oklahoma plans fall under the Ensuring Transparency in Prior Authorization Act (eff. 1/1/2025): a decision "within seventy-two (72) hours of obtaining all necessary information" for urgent services and "within seven (7) days of obtaining all necessary information" for non-urgent ones, and services "are deemed authorized" if the deadline is missed and the provider used the plan’s authorized PA system; the approval must state its duration or expiry date, and a new plan must honor a prior authorization from the previous plan "for at least the initial sixty (60) days." Self-funded (ERISA) plans follow 29 CFR 2560.503-1: pre-service decisions "not later than 15 days after receipt of the claim" (one 15-day extension) and urgent care within 72 hours.',
        status: 'verified',
        cites: [
          { title: 'BCBSOK Commercial Provider Reference Manual (updated April 2026)', url: 'https://www.bcbsok.com/docs/provider/ok/standards/manuals/bcbsok-commercial-provider-reference-manual.pdf' },
          { title: 'BCBSOK — ABA Clinical Service Request Form, initial and concurrent (615911.1125)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/ok-aba-clinicalservicerequestform.pdf' },
          { title: '36 O.S. § 6570.6 — Prior authorization time frames (eff. 1/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538475' },
          { title: '36 O.S. § 6570.1 — Ensuring Transparency in Prior Authorization Act, definitions (eff. 1/1/2025) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538426' },
          { title: '36 O.S. § 6570.10 — Honoring a prior authorization for the first 60 days of new coverage — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=538484' },
          { title: '29 CFR 2560.503-1(f)(2) — ERISA group health plan claim decision timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
      },
      coordinationOfBenefits: {
        value: 'BCBSOK’s commercial provider manual has no COB section; it sends members a Coordination of Benefits Questionnaire whenever other coverage is on file and needs it back to process claims. Oklahoma’s coordination-of-benefits rule for insured plans applies the birthday rule to a child on both parents’ plans: the plan of the parent "whose date of birth, excluding year of birth, occurs earlier in a calendar year" pays first; for separated or divorced parents the custodial parent’s plan goes first, then a stepparent’s, then the non-custodial parent’s, and a court decree assigning financial responsibility overrides that order (OAC 365:10-11-3). Self-funded plans follow their plan document. If the child also has SoonerCare, this plan pays first — SoonerCare is payer of last resort, and OHCA expects the family to follow this plan’s rules, including its prior authorization. TRICARE pays after this plan ("TRICARE shall be last pay," 32 CFR 199.8), and "CHAMPVA is the last payer to OHI" (38 CFR 17.276(d)).',
        status: 'plan-dependent',
        cites: [
          { title: 'BCBSOK — Coordination of Benefits Questionnaire (611207.1020)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/cob-questionnaire-form.pdf' },
          { title: 'Okla. Admin. Code § 365:10-11-3 — Coordination of benefits, order of benefit determination (Cornell LII)', url: 'https://www.law.cornell.edu/regulations/oklahoma/OAC-365-10-11-3' },
          { title: 'OAC 317:30-3-24 — Third party liability [Revised 09-01-25]', url: 'https://oklahoma.gov/ohca/policies-and-rules/xpolicy/medical-providers-fee-for-service/general-provider-policies/general-scope-and-administration/third-party-liability.html' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
          { title: '38 CFR 17.276(d) — CHAMPVA last payer to other health insurance (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.276' },
        ],
        verifyVia: 'BCBSOK customer service at benefits verification: confirm the COB order on file and that the questionnaire is complete, and for a self-funded group the plan’s own COB rule.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Billable supervision "must be face to face and involves only one technician"; indirect supervision is a practice expense, not separately paid. CASP’s 10–20% of direct hours is cited, and direct supervision "may be authorized ... at a minimum of 1 hour per week when less than 10 hours of direct services are authorized." Line staff need BCBA oversight of at least 5% of hours worked, and direct personal supervision means the QHP is "in the immediate vicinity 100% of the time."',
        status: 'verified',
        cites: [
          { title: 'BCBSOK CPCP011 — Applied Behavior Analysis (plan effective 3/20/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
          { title: 'BCBSOK — ABA Clinical Service Request Form, initial and concurrent (615911.1125)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/ok-aba-clinicalservicerequestform.pdf' },
          { title: 'BCBSOK news (5/12/2026) — Claims reminders for behavioral health services', url: 'https://www.bcbsok.com/provider/education/education-reference/news-updates/2026/5-12-2026-claims-reminders-for-behavioral-health-services' },
        ],
      },
      concurrentBilling: {
        value: 'Only one BCBA or QHP may bill the same or similar services on a date of service, but that "does not refer to the technician(s)" working simultaneously with the BCBA, so technician and supervision time can run together. 97156 is for caregiver sessions, "rather than 97155, which is reserved for supervisory activities." Co-treatment with speech or OT must carry the appropriate modifier.',
        status: 'verified',
        cites: [
          { title: 'BCBSOK CPCP011 — Applied Behavior Analysis (plan effective 3/20/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
        ],
      },
      dailyLimits: {
        value: 'Daily units follow "the most current release of the CMS MUE table" and the authorization. Direct services are "typically requested for up to 40 hours per week"; an assessment over eight hours (32 units of 97151) may not be paid; parent education is typically one hour a week over a 26-week authorization. For insured plans Nick’s Law forbids visit limits and dollar limits worse than medical/surgical.',
        status: 'verified',
        cites: [
          { title: 'BCBSOK CPCP011 — Applied Behavior Analysis (plan effective 3/20/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
          { title: '36 O.S. § 6060.21 — Health coverage for individuals with autism (Nick’s Law; as amended by SB 1240, eff. 11/1/2022) — OSCN', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=478381' },
        ],
      },
      noteSignature: {
        value: 'Each rendered service needs "a parent or caregiver’s signature" that also shows the service or code, the "rendering provider’s name/signature," credentials, place of service, date and begin and end times, plus a written note of the service; data points may be required right after the service and for audit.',
        status: 'verified',
        cites: [
          { title: 'BCBSOK CPCP011 — Applied Behavior Analysis (plan effective 3/20/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
        ],
      },
      placeOfService: {
        value: 'POS 10, 11 and 12 (telehealth in the home, office, home) are the conventional settings; any other setting, school included, "should have supporting documentation on file" with a rationale. ABA "provided for educational, vocational, respite or custodial purposes" is not reimbursable. The request form lists office/clinic, home, community/daycare and school, and asks for clinical support for any location other than office or home.',
        status: 'verified',
        cites: [
          { title: 'BCBSOK CPCP011 — Applied Behavior Analysis (plan effective 3/20/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
          { title: 'BCBSOK — ABA Clinical Service Request Form, initial and concurrent (615911.1125)', url: 'https://www.bcbsok.com/docs/provider/ok/education/forms/ok-aba-clinicalservicerequestform.pdf' },
        ],
      },
      billAsProvider: {
        value: 'The provider who renders treatment week to week "is considered the ‘rendering provider’ and should bill"; a non-qualified provider "cannot provide services and bill through another person’s NPI," and supervisee billing through a supervisor must follow state law and a formal supervisor-supervisee relationship. 97153 takes one credential modifier (HM, HN or HO). BCBSOK has announced an HL trainee modifier for the future and says not to use it until notified. A change of BCBA needs the BCBA Change Request Form before new claims.',
        status: 'verified',
        cites: [
          { title: 'BCBSOK CPCP011 — Applied Behavior Analysis (plan effective 3/20/2026)', url: 'https://www.bcbsok.com/docs/provider/ok/standards/cpcp/2026/cpcp011-3-20-2026.pdf' },
          { title: 'BCBSOK news (5/12/2026) — Claims reminders for behavioral health services', url: 'https://www.bcbsok.com/provider/education/education-reference/news-updates/2026/5-12-2026-claims-reminders-for-behavioral-health-services' },
        ],
      },
    },
    faq: [
      { q: 'Does Blue Cross Blue Shield of Oklahoma cover ABA therapy?', a: 'Yes, for autism (ICD-10 pervasive developmental disorders), with prior authorization on treatment codes. Fully insured BCBSOK plans also carry Nick’s Law; self-funded groups follow their plan document.' },
      { q: 'How do I request ABA authorization from BCBSOK in 2026?', a: 'Since April 2026, call the customer service number on the member’s ID card to start the preservice request; a clinician follows up for a telephonic review. Start at least two weeks before the planned start date.' },
      { q: 'How recent must the diagnosis be for BCBSOK?', a: 'No older than 36 months, per BCBSOK’s ABA request forms, with a baseline skills assessment from the last 30 days.' },
      { q: 'What criteria does BCBSOK use for ABA medical necessity?', a: 'Since January 1, 2026, MCG guidelines (Applied Behavioral Analysis, B-806-T) replaced BCBSOK’s own ABA medical policy. MCG is licensed and available to providers through Availity.' },
    ],
  },
};

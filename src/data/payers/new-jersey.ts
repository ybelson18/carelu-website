import type { PayerConfig } from './types.js';

export const newJerseyPayers: Record<string, PayerConfig> = {
  'new-jersey-medicaid': {
    slug: 'new-jersey-medicaid',
    cardDesc: 'EPSDT via 5 MCOs since 4/2020; no-PA FFS window pending enrollment, published rates.',
    assessmentPA: {
      value: 'Required via the MCO — the MCO authorizes a QHP assessment; NO PA while a member is FFS pending MCO enrollment',
      status: 'verified',
      cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
    },
    treatmentPA: {
      value: 'Required — MCO approval of the treatment plan is a precondition for ABA services',
      status: 'verified',
      cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD (F84.0–F84.9) by a qualified healthcare professional; a comprehensive diagnostic evaluation is not required',
      status: 'verified',
      cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
    },
    payer: 'NJ FamilyCare (New Jersey Medicaid)',
    state: 'NJ', kind: 'state-medicaid',
    intakeGates: {
      ageLimit: {
        value:
          'Two published numbers, and they differ in precision rather than in substance. The founding DMAHS newsletter sets the benefit for "any Medicaid eligible child, under the age of 21, who has been diagnosed with ASD as defined by ICD 10 diagnoses F84.0 through F84.9 by a qualified healthcare provider," delivered under EPSDT, which reaches "individuals under the age of twenty-one." Optum\'s New Jersey Medicaid entry adds the floor as well as the ceiling: "ABA services shall be made available to children 18 months to 21 years of age based on medical necessity," and its NJ FamilyCare provider orientation repeats it — "Must be 18 months – 21 years old," including in the specialized FamilyCare carve-out. No hour caps are attached to the age band.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      dxRecency: {
        value:
          'Not published. Neither the DMAHS newsletter nor Optum\'s New Jersey entry sets a maximum age for the diagnostic evaluation, and the state\'s written position runs the other way: Optum\'s NJ Medicaid entry says flatly that "A comprehensive diagnostic evaluation is not required to access ABA services," so there is no comprehensive evaluation whose recency could be gated. What is dated in New Jersey is the authorization rather than the diagnosis — Horizon issues 32 units of 97151 valid for 30 days, and treatment authorizations run in 6-month spans.',
        status: 'unverified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Horizon NJ Health — Overview of ABA Services (Dec 2020)', url: 'https://www.horizonnjhealth.com/sites/default/files/2020-12/Overview%20of%20ABA%20Services.pdf' }],
        verifyVia:
          'The member\'s MCO, or DMAHS\'s dedicated Autism Line for ABA and DIR services (609-588-8522 / MAHS.ASDinquiries@dhs.nj.gov).',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'New Jersey names them twice, and the second list is narrower than the first. The newsletter\'s general test: "The need for ABA services must be determined by a qualified healthcare professional (QHP) capable of making a diagnosis of autism. QHPs include licensed health care professionals, who are qualified by education, training, or licensure/regulation (when applicable) to perform a professional service within his/her scope of practice." The enumerated list of acceptable QHPs "for the diagnosis and treatment planning for adaptive behavior services" is then: Physicians; Psychologists, which "Requires an active board certified behavior analyst (BCBA) certification in good standing and a qualifying doctoral-level degree (BCBA-D)"; and BCBAs, who appear for treatment planning rather than diagnosis. Optum\'s NJ entry restates the split: the diagnosis comes from "a physician or psychologist," and "It is not uncommon for one QHP to make the diagnosis (such as a physician) and a separate QHP (such as a BCBA) to develop and supervise the treatment plan."',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      diagnosticTools: {
        value:
          'None required — and New Jersey is one of the few states that says so in terms. Optum\'s NJ Medicaid entry: "A comprehensive diagnostic evaluation is not required to access ABA services," with "ABA services … available to any child diagnosed with autism spectrum disorder as defined by ICD-10 diagnoses F84.0 through F84.9." The DMAHS newsletter names no instrument either. That makes this the friendliest diagnostic bar of the three states on this page — intake should not queue a New Jersey family for an ADOS-2 before starting the authorization.',
        status: 'verified',
        cites: [{ title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
      },
      referral: {
        value:
          'No PCP referral and no physician order. The sequence the state sets is QHP determination, then MCO authorization: "Once an individual is properly diagnosed with ASD, the MCO shall authorize a QHP to assess the child for the development of a proposed treatment plan," and treatment follows "Contingent upon approval of the treatment plan." The genuine intake asset sits one step earlier — members still fee-for-service pending MCO enrollment are covered through Gainwell with no prior authorization required at all, so enrollment status, not a referral, is the routing question. Plan practice adds paperwork rather than a referral: Horizon wants an ASD diagnosis "script" from a QHP attached to the assessment request, which is the diagnosis document under another name.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Horizon NJ Health — Overview of ABA Services (Dec 2020)', url: 'https://www.horizonnjhealth.com/sites/default/files/2020-12/Overview%20of%20ABA%20Services.pdf' }],
      },
      telehealth: {
        value:
          'Yes, by statute. N.J.S.A. 30:4D-6k (as amended by P.L.2021, c.310) requires the State Medicaid and NJ FamilyCare programs to "provide coverage and payment for health care services delivered to a benefits recipient through telemedicine or telehealth, on the same basis as" in person, for services otherwise covered in person, with payment to the practitioner or the employing agency. The programs may limit coverage to participating providers, but may not restrict the originating site (the child\'s home counts) or the distant site except to keep the in-person standard of care, may not restrict the platform (audio-only included) if it meets that standard and HIPAA, and may not require a member to use telehealth instead of in-person care. Coverage can still be limited to medically necessary services. No DMAHS ABA document names an ABA telehealth code list, POS or in-person supervision minimum, so the 97151 assessment and 97155 supervision are covered by telehealth on the same basis as in person when medically necessary, and billing details come from the MCO. The one plan-level New Jersey position published is Optum\'s, for its own line of business: BCBAs and licensed BH clinicians in contracted ABA practices may deliver ABA supervision and caregiver training by telehealth if the practice is an approved Optum virtual-visits provider and flags it at authorization, billing 97155 or 97156 with POS 02.',
        status: 'verified',
        cites: [
          { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
          { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'NJ FamilyCare ABA is authorized by the child\'s MCO, not the state: "Effective 4/1/2020, ABA providers shall contact the child\'s NJ FamilyCare MCO to receive authorization to provide services. For children who are pending assignment to an MCO, services shall be covered under NJ FamilyCare Fee-for-Service (FFS) and no prior authorization shall be required until a managed care plan has been assigned." So there is no state decision clock for ABA — the MCO\'s clock applies. Federal floor for every NJ FamilyCare MCO: standard decisions within 7 calendar days of the request for contract rating periods starting on or after January 1, 2026 (14 days before that), extendable by up to 14 calendar days at the member\'s or provider\'s request or when the plan justifies needing more information; expedited within 72 hours. What the five MCOs publish: Horizon NJ Health, Aetna Better Health and Fidelis Care state 7 calendar days standard and 24 hours (no later than 72) urgent; UnitedHealthcare Community Plan\'s 2025 manual and Wellpoint\'s June 2025 manual still print 14 calendar days for non-urgent requests.',
        status: 'verified',
        cites: [
          { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
          { title: 'Horizon NJ Health — UM policy: Timeframes for Authorization Determination and Notification (last reviewed 12/10/2025)', url: 'https://www.horizonnjhealth.com/for-providers/resources/policies/health-services-policies/utilization-management/timeframes-for' },
          { title: 'Aetna Better Health of New Jersey — Provider Manual', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_provider_manual.pdf' },
          { title: 'Fidelis Care — 2026 NJ Medicaid/NJ FamilyCare Provider Manual (effective April 15, 2026)', url: 'https://www.fideliscarenj.com/content/dam/centene/wellcare/nj/pdfs/Prov/NJ_Medicaid_Provider_Manual_R.pdf' },
          { title: 'UnitedHealthcare Community Plan of New Jersey — Care Provider Manual (2025)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/NJ-Care-Provider-Manual.pdf' },
          { title: 'Wellpoint New Jersey — Provider Manual (June 2025)', url: 'https://www.provider.wellpoint.com/docs/gpp/NJ_WLP_Provider_Manual.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'NJ FamilyCare pays last: "All TPL, for example, health insurance, Medicare, CHAMPUS, prepaid health plans… shall, if available, be used first and to the fullest extent." Bill the commercial plan first; supplementation claims "shall not be filed with the program unless accompanied by a statement of payment, Explanation of Benefits (EOB), or denial from the other carrier." Two traps: "No program payments shall be made when the third-party payer requires a contracting or participating provider to accept that third-party payer\'s payment as payment in full," and when NJ FamilyCare is secondary it pays the lesser of its allowed amount minus other payments, or the patient liability. Federal law allows the state to pay first and recover later only for preventive pediatric services (including EPSDT services) or where the coverage comes from an absent parent under child-support enforcement; New Jersey adopts those exceptions (plus prenatal care). Authorization when Medicaid is secondary is set by each MCO: Aetna Better Health waives its PA when the primary covers the service; Horizon NJ Health requires its normal notification/authorization policies; UnitedHealthcare will not pay a primary\'s medical-necessity denial unless it gave prior authorization; Wellpoint will not pay when the primary refused because its guidelines were not followed. TRICARE and CHAMPVA both pay ahead of Medicaid: TRICARE rules state "Medicaid is not a double coverage plan. In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer," and CHAMPVA "assumes primary payer status" over Medicaid.',
        status: 'verified',
        cites: [
          { title: 'N.J.A.C. 10:49-7.3 — Third-party liability (TPL) benefits (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-10-49-7-3' },
          { title: '42 CFR 433.139 — Medicaid third-party liability, payment of claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
          { title: 'Aetna Better Health of New Jersey — Provider Manual', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_provider_manual.pdf' },
          { title: 'Horizon NJ Health — Provider Administrative Manual', url: 'https://www.horizonnjhealth.com/provider-admin-manual' },
          { title: 'UnitedHealthcare Community Plan of New Jersey — Care Provider Manual (2025)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/NJ-Care-Provider-Manual.pdf' },
          { title: 'Wellpoint New Jersey — Provider Manual (June 2025)', url: 'https://www.provider.wellpoint.com/docs/gpp/NJ_WLP_Provider_Manual.pdf' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.272 — CHAMPVA benefit limitations; Medicaid exception (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.272' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'New Jersey names the supervisory relationship but publishes no percentage or caseload cap. An RBT \u2014 high school diploma or GED, the 40-hour training, a passed competency exam \u2014 \u201cmust practice under the close, ongoing supervision of a BCBA-D, BCBA or BCaBA\u201d; a BCaBA \u201cmay only practice under the supervision of a BCBA or BCBA-D\u201d and may in turn supervise an RBT. The economic definition of supervision is billing-side: supervisory time counts only as 97155, and only while the technician and the patient are both present. The state\u2019s Medicaid rules add no supervision ratio of their own, so the BACB floor and your MCO contract are what bind.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
        verifyVia:
          'Whether your MCO layers a ratio on top \u2014 the state newsletter does not.',
      },
      concurrentBilling: {
        value:
          'New Jersey says yes, in writing, and draws the line precisely. \u201cIf the QHP is overseeing the activities of the technician, the time of direct supervision by the QHP shall be concurrently billable using code 97155.\u201d But \u201cbilling for 97155 is limited to time where the QHP is either engaged directly with the patient or is directing a technician in implementing a modified protocol with the patient. Billing for supervision where the technician is not present is not allowed.\u201d Two other concurrency rules ride along: 97156 may be billed while the RBT delivers direct treatment to the child \u201cin a separate location\u201d; and for 0373T \u201cproviders may not bill for the QHP time concurrently\u201d and billing is limited to a single technician\u2019s face-to-face time, never the combined time of multiple technicians (three technicians for two hours bills eight units, not twenty-four).',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
      },
      dailyLimits: {
        value:
          'New Jersey publishes its own table rather than adopting a CMS MUE regime, and labels it guidance: the limits \u201care for guidance purposes only and may be overridden when medically necessary based on individual need\u201d under EPSDT. Per day, in 15-minute units: 97151 32, 97152 8, 97153 32, 97154 12, 97155 24, 97156 16, 97157 16, 97158 16, 0362T 8, 0373T 32. Treat them as soft ceilings the plans enforce as edits \u2014 a request above them needs explicit EPSDT medical-necessity framing rather than a quiet resubmission.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
      },
      noteSignature: {
        value:
          'Not addressed by the state. The founding newsletter sets codes, rates, unit guidance, provider specialties and place of service but carries no session-note signature rule and no timeframe.',
        status: 'unverified',
        verifyVia:
          'The member\u2019s MCO provider manual; DMAHS\u2019s dedicated Autism Line for ABA and DIR services (609-588-8522 / MAHS.ASDinquiries@dhs.nj.gov) is the state-side route.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'This one has moved and the two live sources disagree. The founding DMAHS newsletter is flat: \u201cABA services may be provided in the therapist\u2019s office, a community setting or the child\u2019s home. Services may not be provided within a school facility.\u201d Optum\u2019s ABA State Mandates document (annual review 7/2026), whose NJ Medicaid entry tracks the same state policy, now reads: \u201cServices may be provided in the school setting as long as services are not provided during normal school hours.\u201d Office, home and community are settled; school is plan-dependent and moving; group home is addressed by neither.',
        status: 'plan-dependent',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 \u2014 NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'Confirm school-setting delivery with the specific MCO before building a school-based program \u2014 the 2020 state prohibition and the 2026 Optum entry cannot both be operative.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'New Jersey controls this through allowable provider specialties per code rather than a modifier set. 97152 and 97153 may be rendered by an RBT or BCaBA; 97151, 97155, 97157 and 97158 by a BCBA or BCBA-D; 97156 by a BCBA-D, BCBA or BCaBA; 97154 by either tier; 0362T and 0373T by a BCBA-D or BCBA \u201cwith 2 or more RBT or BCaBAs.\u201d On the fee-for-service side the enrolled entity is the \u201cApplied Behavior Analysis Treatment Provider,\u201d which attests on an agency Experience Attestation to the qualifications of each named BCBA-D, BCBA, BCaBA, RBT and BT it employs \u2014 technicians are listed under the agency\u2019s enrollment, not enrolled as billing providers in their own right.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'NJMMIS \u2014 ABA Treatment Provider FFS enrollment packet (Gainwell)', url: 'https://www.njmmis.com/documentDownload.aspx?document=Applied_Behavior_Analysis.pdf' }],
        verifyVia:
          'Each MCO\u2019s claim-submission requirements for rendering-provider identification \u2014 the state documents specify who may render, not which NPI goes in which claim field.',
      },
    },
    pill: 'Payer Guide · NJ FamilyCare',
    h1: 'NJ FamilyCare (New Jersey Medicaid) ABA coverage: the intake guide.',
    metaTitle: 'NJ FamilyCare ABA Coverage, Rates & Prior Authorization Guide | Carelu',
    metaDescription:
      'How NJ FamilyCare covers ABA for autism under EPSDT — five-MCO administration since April 2020, the no-PA fee-for-service window pending MCO enrollment, published FFS rates and daily unit limits, QHP diagnosis rules, and NJ LBA licensure.',
    intro: [
      'NJ FamilyCare, New Jersey\'s Medicaid program, covers ABA for children with autism under the EPSDT benefit — a benefit that moved from DCF\'s Children\'s System of Care (PerformCare) to the five NJ FamilyCare MCOs on April 1, 2020. Since then the model is fully managed-care: Horizon NJ Health, Aetna Better Health, Fidelis Care, UnitedHealthcare Community Plan, and Wellpoint each prior-authorize and pay ABA through their own networks. The one big exception is a genuine intake asset: members still pending MCO enrollment are covered fee-for-service through Gainwell Technologies — and no prior authorization is required at all while a member is in that pending-enrollment window. The state also publishes real FFS rates and a daily unit guide, which the MCOs have largely adopted as claim edits.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — under EPSDT; benefit launched 4/1/2020 (ages ~18 months to 21)' },
      { label: 'Administered by', value: '5 MCOs: Horizon NJ Health, Aetna Better Health, Fidelis Care, UHC Community Plan, Wellpoint' },
      { label: 'Assessment auth', value: 'Required via the MCO — but NO PA while FFS pending MCO enrollment' },
      { label: 'Treatment auth', value: 'Required — MCO treatment-plan approval is a precondition' },
      { label: 'Rates (per 15 min, FFS)', value: '97153 $15.00 · 97155 $21.25 · 97151/97156 $25.00' },
      { label: 'Daily unit guide', value: '97151 32u · 97153 32u · 97155 24u · 97156 16u — overridable under EPSDT' },
      { label: 'Licensure', value: 'NJ Licensed Applied Behavior Analyst (LBA) / assistant LaBA' },
      { label: 'Staff screening', value: 'FBI/SBI fingerprint check at LBA/LaBA licensure; monthly exclusion screening (LEIE, NJ debarment, Treasurer lists); techs ride the BACB RBT background-check floor' },
    ],
    sections: [
      {
        h2: 'The structure: five MCOs, one FFS escape hatch',
        body: [
          'The founding DMAHS newsletter (Vol. 30 No. 06, April 2020) sets the design: ABA is delivered and prior-authorized through the member\'s NJ FamilyCare MCO, with the MCO required to "authorize a QHP to assess the child for the development of a proposed treatment plan," and treatment contingent on the MCO\'s approval of that plan. Fee-for-service — billed to Gainwell Technologies, the fiscal agent — applies only to members pending MCO enrollment, and critically, no prior authorization is required while a member sits in that FFS window. For intake, that makes enrollment status a first-order routing question: a newly eligible child who hasn\'t been assigned a plan yet can start without any authorization at all, then transitions to the MCO\'s process once assigned. FFS ABA providers enroll through a dedicated "Applied Behavior Analysis Treatment Provider" packet, including fingerprint background checks per N.J.A.C. 10:77-4.9(g). DMAHS runs a dedicated Autism Line for ABA and DIR services: 609-588-8522 / MAHS.ASDinquiries@dhs.nj.gov. The current five-MCO roster (Aetna Better Health of NJ, Fidelis Care, Horizon NJ Health, UnitedHealthcare Community Plan, and Wellpoint — formerly Amerigroup NJ) is confirmed unchanged as of this review directly from DMAHS\'s own NJ FamilyCare Health Plans roster page, each still carrying the identical statewide 21-county service area.',
        ],
        cites: [
          { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
          { title: 'NJMMIS — ABA Treatment Provider FFS enrollment packet (May 2026, Gainwell)', url: 'https://www.njmmis.com/documentDownload.aspx?document=Applied_Behavior_Analysis.pdf' },
          { title: 'NJ DMAHS — NJ FamilyCare Health Plans (current MCO roster)', url: 'https://nj.gov/humanservices/dmahs/providers-stakeholders/provider-resources/health-plans' },
        ],
      },
      {
        h2: 'Diagnosis and authorization',
        body: [
          'The benefit requires an ASD diagnosis (ICD-10 F84.0–F84.9) made by a qualified healthcare professional — physicians and psychologists (including BCBA-D psychologists) for diagnosis, with BCBAs among the QHPs for treatment planning. Notably, per Optum\'s NJ Medicaid entry (updated November 2025), a comprehensive diagnostic evaluation is not required to access ABA — a plain ASD diagnosis from a physician or psychologist opens the benefit, for members roughly 18 months to 21 years. Authorization then runs in two steps at the MCO: an assessment authorization (Horizon, for example, issues 32 units of 97151 for 30 days once eligibility, diagnosis, and an ASD script from a QHP are confirmed), followed by treatment-plan review and treatment authorizations — Horizon\'s run in 6-month spans with requests reviewed within 14 days. Non-contracted providers can request a single case provider agreement from the MCO for continuity of care.',
        ],
        cites: [
          { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
          { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'Rates and the daily unit guide',
        body: [
          'New Jersey publishes actual FFS rates per 15-minute unit: 97151 assessment at $25.00 (BCBA/BCBA-D), 97153 direct treatment at $15.00 (RBT/BCaBA) — raised from the launch rate of $11.20 effective February 1, 2022 using American Rescue Plan funds after Autism New Jersey\'s advocacy — 97155 protocol modification at $21.25, and 97156 family training at $25.00. The 97153/97155/97156 rates are confirmed current in the NJMMIS CY2026 Q2 listing; the 97151 rate hasn\'t been seen changed since launch but its current value is unverified. The full billable set also includes the Category III destructive-behavior/multi-tech codes 0362T ($25.00) and 0373T ($16.40). The founding newsletter attaches suggested daily unit limits — 97151 32u, 97152 8u, 97153 32u, 97154 12u, 97155 24u, 97156 16u, 97157 16u, 97158 16u, 0362T 8u, 0373T 32u — "for guidance purposes only," overridable when medically necessary under EPSDT; in practice the MCOs have adopted them as MUE claim edits. One caveat for revenue modeling: the FFS rates "are not required to be utilized" by the MCOs — though Aetna Better Health published an identical schedule.',
        ],
        cites: [
          { title: 'DMAHS Provider Newsletter Vol 30 No 06 — launch rates + suggested unit limits', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
          { title: 'Autism NJ — Medicaid rate increase for ABA ($11.20 → $15.00 eff 2/1/2022)', url: 'https://autismnj.org/news/autism-new-jerseys-advocacy-leads-to-medicaid-rate-increase-for-aba-services/' },
          { title: 'ProviderSpark NJ Medicaid rates (NJMMIS Procedure Master Listing CY2026 Q2)', url: 'https://www.providerspark.com/for-providers/medicaid-rates/new-jersey/' },
        ],
      },
      {
        h2: 'Operational facts worth knowing',
        body: [
          'A few rules shape scheduling and billing. Concurrent billing: 97155 is billable while the technician bills 97153 when the QHP is directing the tech face-to-face — but supervision without the tech and patient present is not billable. School settings: the 2020 newsletter said services "may not be provided within a school facility," but Optum\'s November 2025 NJ entry now permits school-setting services as long as they don\'t occur during normal school hours — state guidance has evidently loosened, so confirm per MCO before building school-based programs. Licensure: New Jersey requires the Licensed Applied Behavior Analyst (LBA) credential — master\'s or doctorate plus current BCBA plus the NJ jurisprudence exam — with the assistant-level LaBA under an identified supervisor, per N.J.S.A. 45:8B-91 et seq. and N.J.A.C. 13:42B; the board\'s position is that supervision itself constitutes practicing behavior analysis and requires a license, while RBTs remain unlicensed under a licensee. Finally, PerformCare (DCF/CSOC) still authorizes ABA for non-Medicaid children served through DCF — ID numbers starting "3560" — so not every New Jersey ABA authorization runs through an MCO.',
        ],
        cites: [
          { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
          { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'NJ Board of Applied Behavior Analyst Examiners — FAQ', url: 'https://www.njconsumeraffairs.gov/abae/Pages/FAQ.aspx' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'At the technician level, New Jersey layers a Medicaid credential on an unlicensed role. The founding DMAHS newsletter names the RBT as the technician provider — high school diploma or GED, the 40-hour training, a passed competency exam, and "close, ongoing supervision" by a BCBA-D, BCBA, or BCaBA — and its provider-specialty table lists RBT (alongside BCaBA) as the permitted renderer of 97152/97153. The state itself doesn\'t license technicians: N.J.S.A. 45:8B-103.b(2) exempts "paraprofessional technicians" delivering ABA under a licensee\'s direction, and the board\'s rules (N.J.A.C. 13:42B-1.2, effective May 6, 2024) expressly fold BACB-certified RBTs into that exempt category. MCO manuals run looser — Optum\'s 2022 NJ orientation asks only that behavior technicians be high school graduates with appropriate BCBA training and supervision, and Horizon says RBT certification is "preferred," not required — but because state FFS policy makes RBT the operative credential, hire to the RBT standard to satisfy the strictest applicable rule. That standard carries its own screening: the BACB\'s RBT 2026 requirements demand age 18+, a criminal background check plus an abuse-registry check reviewed by an attestor, the updated 40-hour training (delivered by BCBAs/BCaBAs who\'ve completed the 8-hour supervision training), and the RBT Initial Competency Assessment.',
          'Background-check obligations split by role. LBA and LaBA applicants clear a criminal history check as part of licensure — the board\'s FAQ notes application processing time depends partly on its completion — coordinated through the Division of Consumer Affairs\' Criminal History Review Unit, which runs FBI and state (SBI) fingerprint checks via New Jersey\'s contracted live-scan vendor (the CHRU\'s published board list hadn\'t yet named the ABA board when checked in mid-2026). For unlicensed technicians, no NJ statute or FamilyCare ABA policy mandating fingerprint or child-abuse-registry checks was found — the BACB\'s RBT screening is the floor, supplemented by whatever your MCO contracts add (agency-level fingerprinting at FFS enrollment, per N.J.A.C. 10:77-4.9(g), is a separate provider-enrollment matter — see above). What binds every hire regardless of role is exclusion screening: NJ guidance (updated January 2023, an obligation the state has run since 2010) requires Medicaid providers and MCOs to verify monthly that current and prospective employees, contractors, and subcontractors aren\'t excluded, unlicensed, or uncertified — searching the NJ debarment list, the federal OIG LEIE, the NJ Treasurer\'s exclusions database, and where applicable the Consumer Affairs and Department of Health licensure databases.',
          'On the supervisory side, licensure is now operational, not just on paper: P.L.2019, c.337 created the Board of Applied Behavior Analyst Examiners and bars unlicensed practice, board rules took effect May 6, 2024, applications opened September 12, 2024, and by February 2026 there were 3,506 active licensees (3,476 LBAs, 30 LaBAs). LBAs need a graduate degree plus current BCBA certification; LaBAs a bachelor\'s plus BCaBA plus an identified LBA supervisor — with supervision floors of at least 5% of practice hours weekly (or one hour every two weeks, whichever is more) in the first year, dropping to 2% or one hour monthly thereafter, face-to-face, under a supervisor who has completed the BACB 8-hour supervisor training. An LBA may delegate intervention implementation to technicians but not assessment, treatment-plan development, or intervention design — and the board holds that supervision in all its forms is itself licensed practice. Two clocks worth tracking in hiring plans: providers working under DDD contracts must hold licenses by May 6, 2027 and Early Intervention contractors by May 6, 2029, while school-district employees delivering ABA solely for their district remain exempt.',
        ],
        cites: [
          { title: 'DMAHS Provider Newsletter Vol 30 No 06 — RBT/QHP provider requirements', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
          { title: 'P.L.2019, c.337 — Applied Behavior Analyst Licensing Act (N.J.S.A. 45:8B-91 et seq.)', url: 'https://web.archive.org/web/2024id_/https://pub.njleg.state.nj.us/Bills/2018/PL19/337_.PDF' },
          { title: 'N.J.A.C. 13:42B-1.2 — Definitions (paraprofessional technician incl. RBT)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-13-42B-1-2' },
          { title: 'BACB RBT 2026 Requirements (July 2025)', url: 'https://www.bacb.com/wp-content/uploads/2025/07/RBT-2026-Requirements_250723-a.pdf' },
          { title: 'NJ Board of Applied Behavior Analyst Examiners — FAQ', url: 'https://www.njconsumeraffairs.gov/abae/Pages/FAQ.aspx' },
          { title: 'NJ Division of Consumer Affairs — Criminal History Review Unit', url: 'https://www.njconsumeraffairs.gov/ocp/pages/chru.aspx' },
          { title: 'Streamline Verify — Exclusion screening guidance for NJ Medicaid providers (Jan 2023)', url: 'https://streamlineverify.com/updated-guidance-on-exclusion-screening-for-new-jerseys-medicaid-providers-and-plans/' },
          { title: 'Autism NJ — Quick Guide to ABA Licensure Regulations (N.J.A.C. 13:42B)', url: 'https://autismnj.org/article/quick-guide-to-aba-licensure-regulations/' },
          { title: 'Autism NJ — Behavior Analyst Licensure in New Jersey: Where We Are Now', url: 'https://autismnj.org/article/behavior-analyst-licensure-in-new-jersey-where-we-are-now/' },
          { title: 'Optum/UHC Community Plan — NJ FamilyCare ABA Provider Orientation (2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/njaba/NJ.FamilyCare.Medicaid.ABA.pdf' },
          { title: 'Horizon NJ Health — Overview of ABA Services (Dec 2020)', url: 'https://www.horizonnjhealth.com/sites/default/files/2020-12/Overview%20of%20ABA%20Services.pdf' },
        ],
      },
      {
        h2: 'Does NJ FamilyCare allow retroactive authorization for ABA?',
        body: [
          'ABA is authorized by the child\'s MCO, so the rules for a late authorization request are each MCO\'s (see the plan guides). The state supplies retroactive eligibility instead. Anyone applying for Medicaid or NJ FamilyCare-Plan A "shall be asked if he or she has unpaid medical bills incurred within the three-month period immediately prior to the month of application," and must raise it with the eligibility agency within six months of the application date, or "retroactive eligibility will not be established." For children, "Retroactive eligibility is available to cover unpaid medical bills for up to three months prior to the date of application," but "There is no retroactive eligibility coverage for children eligible for NJ FamilyCare-Children\'s Program-Plan B, C or D." When the state\'s Retroactive Eligibility Unit finds that an SSI/Medicaid member was eligible, providers are notified directly and must submit the claim to the fiscal agent "within 90 days of the date the provider is notified in writing of the retroactive eligibility." Separately, a child still pending MCO assignment is covered fee-for-service with no prior authorization (see above).',
        ],
        cites: [
          { title: 'N.J.A.C. 10:49-2.9 — Medicaid or NJ FamilyCare-Plan A retroactive eligibility (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-10-49-2-9' },
          { title: 'N.J.A.C. 10:79-2.6 — Retroactive eligibility, NJ FamilyCare Plan A only (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-10-79-2-6' },
        ],
      },
    ],
    collect: [
      { title: 'MCO — or pending-enrollment status', desc: 'Horizon, Aetna, Fidelis, UHC, or Wellpoint decides the portal and process; a member still pending MCO assignment can start FFS with NO prior authorization.' },
      { title: 'ASD diagnosis + script', desc: 'F84.0–F84.9 from a physician or psychologist, plus the ASD script a QHP writes — the assessment authorization trigger. No comprehensive evaluation needed.' },
      { title: 'Requested hours vs. the unit guide', desc: 'MCOs run the state daily limits as MUE edits (97153 32u/day, 97155 24u/day) — requests beyond them need explicit EPSDT medical-necessity framing.' },
      { title: 'Supervising LBA licensure', desc: 'Confirm the NJ LBA (and LaBA where applicable) — the board treats supervision itself as licensed practice.' },
      { title: 'DCF/PerformCare check', desc: 'Member IDs starting "3560" are DCF children authorized through PerformCare, not an MCO.' },
    ],
    sources: [
      { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
      { title: 'Autism NJ — Medicaid rate increase for ABA services', url: 'https://autismnj.org/news/autism-new-jerseys-advocacy-leads-to-medicaid-rate-increase-for-aba-services/' },
      { title: 'NJMMIS — ABA Treatment Provider FFS enrollment packet (May 2026, Gainwell)', url: 'https://www.njmmis.com/documentDownload.aspx?document=Applied_Behavior_Analysis.pdf' },
      { title: 'ProviderSpark NJ Medicaid rates (NJMMIS CY2026 Q2)', url: 'https://www.providerspark.com/for-providers/medicaid-rates/new-jersey/' },
      { title: 'DMAHS BH Integration Points of Contact V3.1 (per-MCO ABA contacts)', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' },
      { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'P.L.2019, c.337 — Applied Behavior Analyst Licensing Act (N.J.S.A. 45:8B-91 et seq.)', url: 'https://web.archive.org/web/2024id_/https://pub.njleg.state.nj.us/Bills/2018/PL19/337_.PDF' },
      { title: 'N.J.A.C. 13:42B-1.2 — Definitions (paraprofessional technician incl. RBT)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-13-42B-1-2' },
      { title: 'BACB RBT 2026 Requirements (July 2025)', url: 'https://www.bacb.com/wp-content/uploads/2025/07/RBT-2026-Requirements_250723-a.pdf' },
      { title: 'NJ Board of Applied Behavior Analyst Examiners — FAQ', url: 'https://www.njconsumeraffairs.gov/abae/Pages/FAQ.aspx' },
      { title: 'NJ Division of Consumer Affairs — Criminal History Review Unit', url: 'https://www.njconsumeraffairs.gov/ocp/pages/chru.aspx' },
      { title: 'Streamline Verify — Exclusion screening guidance for NJ Medicaid providers (Jan 2023)', url: 'https://streamlineverify.com/updated-guidance-on-exclusion-screening-for-new-jerseys-medicaid-providers-and-plans/' },
      { title: 'Autism NJ — Quick Guide to ABA Licensure Regulations (N.J.A.C. 13:42B)', url: 'https://autismnj.org/article/quick-guide-to-aba-licensure-regulations/' },
      { title: 'Autism NJ — Behavior Analyst Licensure in New Jersey: Where We Are Now', url: 'https://autismnj.org/article/behavior-analyst-licensure-in-new-jersey-where-we-are-now/' },
      { title: 'Optum/UHC Community Plan — NJ FamilyCare ABA Provider Orientation (2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/njaba/NJ.FamilyCare.Medicaid.ABA.pdf' },
      { title: 'Horizon NJ Health — Overview of ABA Services (Dec 2020)', url: 'https://www.horizonnjhealth.com/sites/default/files/2020-12/Overview%20of%20ABA%20Services.pdf' },
      { title: 'NJ DMAHS — NJ FamilyCare Health Plans (current MCO roster)', url: 'https://nj.gov/humanservices/dmahs/providers-stakeholders/provider-resources/health-plans' },
      { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
      { title: 'N.J.A.C. 10:49-2.9 — Medicaid or NJ FamilyCare-Plan A retroactive eligibility (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-10-49-2-9' },
      { title: 'N.J.A.C. 10:79-2.6 — Retroactive eligibility, NJ FamilyCare Plan A only (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-10-79-2-6' },
    ],
    faq: [
      { q: 'Does NJ FamilyCare cover ABA therapy?', a: 'Yes — under EPSDT for members with autism (roughly 18 months to 21), delivered and prior-authorized through the five NJ FamilyCare MCOs since April 1, 2020.' },
      { q: 'Does the ABA assessment need prior authorization in New Jersey?', a: 'Through an MCO, yes — the MCO authorizes a QHP assessment (Horizon, for example, issues 32 units of 97151 for 30 days). But members still fee-for-service pending MCO enrollment need no prior authorization at all — a real fast-start window for newly eligible children.' },
      { q: 'What does New Jersey Medicaid pay for ABA?', a: 'FFS rates per 15-minute unit: 97153 $15.00 (raised from $11.20 in February 2022), 97155 $21.25, 97151 and 97156 $25.00, 0362T $25.00, 0373T $16.40. MCOs aren\'t required to match the FFS schedule, though Aetna Better Health published an identical one.' },
      { q: 'Is a comprehensive diagnostic evaluation required for ABA in New Jersey?', a: 'No — per Optum\'s NJ Medicaid criteria, a plain ASD diagnosis (F84.0–F84.9) from a physician or psychologist suffices; a comprehensive diagnostic evaluation is not a prerequisite.' },
      { q: 'Can NJ FamilyCare ABA be delivered by telehealth, including the 97151 assessment?', a: 'Yes. N.J.S.A. 30:4D-6k requires NJ FamilyCare to cover telehealth on the same basis as in-person care, with no originating-site restriction, so the child can be at home. That includes the 97151 assessment and 97155 supervision when medically necessary. No state ABA document sets a code list or POS, so confirm billing with the MCO.' },
      { q: 'Does NJ FamilyCare pay for ABA delivered before the child was enrolled?', a: 'Only through retroactive eligibility. Medicaid and NJ FamilyCare Plan A can cover unpaid bills for up to three months before the application month if the family asks within six months of applying; Plans B, C and D have no retroactive coverage. Retroactive authorization once enrolled is up to the child\'s MCO.' },
    ],
  },

  'horizon-nj-health': {
    slug: 'horizon-nj-health',
    family: 'bcbs',
    cardDesc: 'Largest NJ MCO; NaviNet requests, 32-unit assessment fast-track, MCG review, 6-month auths.',
    assessmentPA: {
      value: 'Required — ABA Authorization Request Form via NaviNet with an ASD script from a QHP; Horizon issues 32 units of 97151 for 30 days',
      status: 'verified',
      cites: [{ title: 'Horizon Behavioral Health — ABA Government Programs overview (Nov 2020)', url: 'https://www.horizonnjhealth.com/sites/default/files/2020-12/Overview%20of%20ABA%20Services.pdf' }],
    },
    treatmentPA: {
      value: 'Required — post-assessment ABA Request Form via NaviNet; MCG-based review within 14 days; 6-month authorizations',
      status: 'verified',
      cites: [{ title: 'Horizon Behavioral Health — ABA Government Programs overview (Nov 2020)', url: 'https://www.horizonnjhealth.com/sites/default/files/2020-12/Overview%20of%20ABA%20Services.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD (F84.0–F84.9) with a diagnosis script from a qualified healthcare professional',
      status: 'verified',
      cites: [{ title: 'Horizon Behavioral Health — ABA Government Programs overview (Nov 2020)', url: 'https://www.horizonnjhealth.com/sites/default/files/2020-12/Overview%20of%20ABA%20Services.pdf' }],
    },
    payer: 'Horizon NJ Health',
    state: 'NJ', kind: 'medicaid-mco', parent: 'NJ FamilyCare',
    intakeGates: {
      ageLimit: {
        value:
          'Two published numbers, and they differ in precision rather than in substance. The founding DMAHS newsletter sets the benefit for "any Medicaid eligible child, under the age of 21, who has been diagnosed with ASD as defined by ICD 10 diagnoses F84.0 through F84.9 by a qualified healthcare provider," delivered under EPSDT, which reaches "individuals under the age of twenty-one." Optum\'s New Jersey Medicaid entry adds the floor as well as the ceiling: "ABA services shall be made available to children 18 months to 21 years of age based on medical necessity," and its NJ FamilyCare provider orientation repeats it — "Must be 18 months – 21 years old," including in the specialized FamilyCare carve-out. No hour caps are attached to the age band. Horizon manages ABA across Core Medicaid, DDD, MLTSS and FIDE-SNP populations, so note which segment the member sits in alongside age.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      dxRecency: {
        value:
          'Not published. Neither the DMAHS newsletter nor Optum\'s New Jersey entry sets a maximum age for the diagnostic evaluation, and the state\'s written position runs the other way: Optum\'s NJ Medicaid entry says flatly that "A comprehensive diagnostic evaluation is not required to access ABA services," so there is no comprehensive evaluation whose recency could be gated. What is dated in New Jersey is the authorization rather than the diagnosis — Horizon issues 32 units of 97151 valid for 30 days, and treatment authorizations run in 6-month spans. Horizon is the plan those clocks come from: its assessment authorization is 32 units of 97151 valid for 30 days, so book the assessment before requesting it. Search excerpts of Horizon\'s 1/1/2026 medical-policy revision reference standardized-instrument testing no more often than every 6 months, but that text could not be confirmed against the live policy.',
        status: 'unverified',
        cites: [{ title: 'Horizon NJ Health — Overview of ABA Services (Dec 2020)', url: 'https://www.horizonnjhealth.com/sites/default/files/2020-12/Overview%20of%20ABA%20Services.pdf' }, { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
        verifyVia:
          'Horizon NJ Health provider services, or the ABA UM escalation contact on the DMAHS BH integration contact sheet.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'New Jersey names them twice, and the second list is narrower than the first. The newsletter\'s general test: "The need for ABA services must be determined by a qualified healthcare professional (QHP) capable of making a diagnosis of autism. QHPs include licensed health care professionals, who are qualified by education, training, or licensure/regulation (when applicable) to perform a professional service within his/her scope of practice." The enumerated list of acceptable QHPs "for the diagnosis and treatment planning for adaptive behavior services" is then: Physicians; Psychologists, which "Requires an active board certified behavior analyst (BCBA) certification in good standing and a qualifying doctoral-level degree (BCBA-D)"; and BCBAs, who appear for treatment planning rather than diagnosis. Optum\'s NJ entry restates the split: the diagnosis comes from "a physician or psychologist," and "It is not uncommon for one QHP to make the diagnosis (such as a physician) and a separate QHP (such as a BCBA) to develop and supervise the treatment plan."',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Horizon NJ Health — Overview of ABA Services (Dec 2020)', url: 'https://www.horizonnjhealth.com/sites/default/files/2020-12/Overview%20of%20ABA%20Services.pdf' }],
      },
      diagnosticTools: {
        value:
          'None required — and New Jersey is one of the few states that says so in terms. Optum\'s NJ Medicaid entry: "A comprehensive diagnostic evaluation is not required to access ABA services," with "ABA services … available to any child diagnosed with autism spectrum disorder as defined by ICD-10 diagnoses F84.0 through F84.9." The DMAHS newsletter names no instrument either. That makes this the friendliest diagnostic bar of the three states on this page — intake should not queue a New Jersey family for an ADOS-2 before starting the authorization. Horizon NJ Health publishes no deviation from this, and its own material was checked for one.',
        status: 'verified',
        cites: [{ title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
      },
      referral: {
        value:
          'The state sets no referral requirement, and Horizon turns the diagnosis itself into the trigger document: the ABA Authorization Request Form goes through NaviNet\'s UM Request Tool "with an ASD diagnosis script from a QHP attached," and once Horizon confirms eligibility, diagnosis and the script it issues the 32-unit/30-day assessment authorization without full clinical review. Treatment is the second step — the post-assessment ABA Request Form back through NaviNet, reviewed against MCG criteria within 14 days, approved in 6-month spans. So collect the script at first contact: it is not a referral, but it functions as one here.',
        status: 'verified',
        cites: [{ title: 'Horizon NJ Health — Overview of ABA Services (Dec 2020)', url: 'https://www.horizonnjhealth.com/sites/default/files/2020-12/Overview%20of%20ABA%20Services.pdf' }, { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
      },
      telehealth: {
        value:
          'The plan publishes no ABA telehealth rule of its own, so the state statute governs. N.J.S.A. 30:4D-6k (as amended by P.L.2021, c.310) requires the State Medicaid and NJ FamilyCare programs to "provide coverage and payment for health care services delivered to a benefits recipient through telemedicine or telehealth, on the same basis as" in person, for services otherwise covered in person, with payment to the practitioner or the employing agency. The programs may limit coverage to participating providers, but may not restrict the originating site (the child\'s home counts) or the distant site except to keep the in-person standard of care, may not restrict the platform (audio-only included) if it meets that standard and HIPAA, and may not require a member to use telehealth instead of in-person care. Coverage can still be limited to medically necessary services. No DMAHS ABA document names an ABA telehealth code list, POS or in-person supervision minimum, so the 97151 assessment and 97155 supervision are covered by telehealth on the same basis as in person when medically necessary, and billing details come from the MCO.',
        status: 'verified',
        cites: [
          { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
          { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Horizon NJ Health\'s UM timeframes policy (last reviewed December 10, 2025): for Medicaid behavioral health, non-urgent prior authorization decisions within seven (7) calendar days of receipt of the request, with an extension of up to 14 calendar days at the member\'s or provider\'s request or when in the member\'s best interest; urgent outpatient requests decided within 24 hours of receipt of the necessary information — if the request is incomplete Horizon asks for more information within 24 hours and decides within 24 hours of receiving it, "but no later than seventy-two (72) hours, from receipt of the original request." Continued or extended services for a member in a course of treatment: decided within 24 hours of the request. For Medicaid only, "If Horizon fails to respond to an authorization request within the specific timeframes, the hospital or physician request shall be deemed approved." Federal floor for every NJ FamilyCare MCO: standard decisions within 7 calendar days of the request for contract rating periods starting on or after January 1, 2026 (14 days before that), extendable by up to 14 calendar days at the member\'s or provider\'s request or when the plan justifies needing more information; expedited within 72 hours.',
        status: 'verified',
        cites: [
          { title: 'Horizon NJ Health — UM policy: Timeframes for Authorization Determination and Notification (last reviewed 12/10/2025)', url: 'https://www.horizonnjhealth.com/for-providers/resources/policies/health-services-policies/utilization-management/timeframes-for' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Horizon NJ Health\'s manual: "Horizon NJ Health is the payor of last resort on all claims" — verify other coverage and document that the claim was first processed by the other insurer. Do not file with Horizon "until they receive the EOB from the member\'s other insurance carrier(s)"; then submit the claim, PCP referral and the primary\'s EOB (all pages) within 60 days of the other carrier\'s correspondence or 180 days from the date of service, whichever is later. Authorization still applies when Horizon is secondary: "With the exception of Medicare, Horizon NJ Health\'s same notification policies that are routinely applied and required must be followed for any claims to be considered for payment" — get Horizon\'s ABA authorization even when the commercial plan pays first. State rule underneath: NJ FamilyCare pays last: "All TPL, for example, health insurance, Medicare, CHAMPUS, prepaid health plans… shall, if available, be used first and to the fullest extent." Bill the commercial plan first; supplementation claims "shall not be filed with the program unless accompanied by a statement of payment, Explanation of Benefits (EOB), or denial from the other carrier." Two traps: "No program payments shall be made when the third-party payer requires a contracting or participating provider to accept that third-party payer\'s payment as payment in full," and when NJ FamilyCare is secondary it pays the lesser of its allowed amount minus other payments, or the patient liability. TRICARE and CHAMPVA both pay ahead of Medicaid: TRICARE rules state "Medicaid is not a double coverage plan. In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer," and CHAMPVA "assumes primary payer status" over Medicaid.',
        status: 'verified',
        cites: [
          { title: 'Horizon NJ Health — Provider Administrative Manual', url: 'https://www.horizonnjhealth.com/provider-admin-manual' },
          { title: 'N.J.A.C. 10:49-7.3 — Third-party liability (TPL) benefits (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-10-49-7-3' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.272 — CHAMPVA benefit limitations; Medicaid exception (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.272' },
        ],
      },
    },
    deliveryRules: {
      concurrentBilling: {
        value:
          'New Jersey says yes, in writing, and draws the line precisely. \u201cIf the QHP is overseeing the activities of the technician, the time of direct supervision by the QHP shall be concurrently billable using code 97155.\u201d But \u201cbilling for 97155 is limited to time where the QHP is either engaged directly with the patient or is directing a technician in implementing a modified protocol with the patient. Billing for supervision where the technician is not present is not allowed.\u201d Two other concurrency rules ride along: 97156 may be billed while the RBT delivers direct treatment to the child \u201cin a separate location\u201d; and for 0373T \u201cproviders may not bill for the QHP time concurrently\u201d and billing is limited to a single technician\u2019s face-to-face time, never the combined time of multiple technicians (three technicians for two hours bills eight units, not twenty-four). This is NJ FamilyCare state policy and the operative floor for Horizon NJ Health; no plan-specific deviation was found in Horizon NJ Health\u2019s published material.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
        verifyVia:
          'Horizon NJ Health provider services, to confirm the plan has not layered its own concurrency edit on top.',
      },
      dailyLimits: {
        value:
          'New Jersey publishes its own table rather than adopting a CMS MUE regime, and labels it guidance: the limits \u201care for guidance purposes only and may be overridden when medically necessary based on individual need\u201d under EPSDT. Per day, in 15-minute units: 97151 32, 97152 8, 97153 32, 97154 12, 97155 24, 97156 16, 97157 16, 97158 16, 0362T 8, 0373T 32. Treat them as soft ceilings the plans enforce as edits \u2014 a request above them needs explicit EPSDT medical-necessity framing rather than a quiet resubmission. Horizon NJ Health publishes no daily table of its own, so the state guide is what to plan against.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
        verifyVia:
          'Horizon NJ Health\u2019s provider manual / claim-edit list.',
      },
      noteSignature: {
        value:
          'Neither the state nor Horizon NJ Health publishes a session-note signature rule for ABA \u2014 no named signer and no timeframe.',
        status: 'unverified',
        verifyVia:
          'Horizon NJ Health\u2019s provider manual documentation chapter, or DMAHS\u2019s Autism Line (609-588-8522).',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'This one has moved and the two live sources disagree. The founding DMAHS newsletter is flat: \u201cABA services may be provided in the therapist\u2019s office, a community setting or the child\u2019s home. Services may not be provided within a school facility.\u201d Optum\u2019s ABA State Mandates document (annual review 7/2026), whose NJ Medicaid entry tracks the same state policy, now reads: \u201cServices may be provided in the school setting as long as services are not provided during normal school hours.\u201d Office, home and community are settled; school is plan-dependent and moving; group home is addressed by neither. Neither position is republished by Horizon NJ Health, so resolve it with the plan before scheduling school-based sessions.',
        status: 'plan-dependent',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 \u2014 NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'Horizon NJ Health provider services.',
        blocker: 'per-case',
      },
    },
    pill: 'Payer Guide · Horizon NJ Health',
    h1: 'Horizon NJ Health ABA coverage (NJ FamilyCare MCO).',
    metaTitle: 'Horizon NJ Health ABA Coverage & Prior Authorization Guide | Carelu',
    metaDescription:
      'How Horizon NJ Health administers NJ FamilyCare ABA — the NaviNet authorization workflow, the 32-unit/30-day assessment fast-track, MCG criteria and 6-month treatment spans, daily MUE unit limits, and the announced 2026 policy changes.',
    intro: [
      'Horizon NJ Health — the Horizon BCBSNJ Medicaid plan — is the largest NJ FamilyCare MCO and the one with the most built-out ABA machinery: its own medical policy, MCG-based utilization review, and a documented assessment fast-track. It manages ABA across Core Medicaid, DDD, MLTSS, and FIDE-SNP populations. Horizon uses the state\'s code set and daily unit table, but layers a meaningfully stricter process on top than the state baseline — and has announced further policy revisions taking effect through 2026.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'NJ FamilyCare MCO (Horizon BCBSNJ) — the state\'s largest' },
      { label: 'Clinical rules', value: 'Own ABA medical policy + MCG criteria on the state code set' },
      { label: 'Assessment auth', value: 'Fast-tracked — 32 units of 97151 for 30 days on confirmed eligibility + dx' },
      { label: 'Treatment auth', value: '6-month spans; requests reviewed within 14 days of receipt' },
      { label: 'Daily unit limits', value: 'State MUE table enforced (97153 32u, 97155 24u, 97156 16u...)' },
      { label: 'Submission', value: 'NaviNet UM Request Tool / Availity; payor ID 22326' },
    ],
    sections: [
      {
        h2: 'How Horizon runs ABA authorization',
        body: [
          'The front door is the ABA Authorization Request Form submitted through NaviNet\'s UM Request Tool, with an ASD diagnosis script from a QHP attached. The assessment step is fast-tracked: once Horizon confirms eligibility, diagnosis, and the script, it issues an assessment authorization of 32 units of 97151 valid for 30 days — no full clinical review at that stage. Treatment is where the review lives: the post-assessment ABA Request Form goes back through NaviNet, a UM clinician reviews against MCG criteria, requests are reviewed within 14 days of receipt, and approved cases get 6-month authorizations. Two hard edges: Horizon enforces the state\'s daily MUE unit limits ("shall not consider for reimbursement units exceeding the daily maximum as clinically authorized"), and claims above authorized units are not reimbursed — so the authorization, not the treatment plan, is the billing ceiling.',
        ],
        cites: [
          { title: 'Horizon Behavioral Health — ABA Government Programs overview (Nov 2020)', url: 'https://www.horizonnjhealth.com/sites/default/files/2020-12/Overview%20of%20ABA%20Services.pdf' },
          { title: 'DMAHS Provider Newsletter Vol 30 No 06 — state unit-limit table', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
        ],
      },
      {
        h2: 'The 2026 changes: H0032 retired, and a commercial-only policy revision',
        body: [
          'Both 2026 Horizon announcements have now been read in full, and only one of them reaches this plan. H0032 is retired for ABA: "Effective July 15, 2026, HCPCS code H0032 will no longer be used to represent Applied Behavioral Analysis (ABA) services on authorizations or claims," and the notice says in terms that "This change applies to members enrolled in Horizon NJ Health NJ FamilyCare (Medicaid) and Horizon NJ TotalCare (HMO D-SNP) plans." Bill 97151–97158 and 0362T/0373T instead. The transition is soft: Horizon "will continue to honor authorizations created up through July 14, 2026 that include H0032" and keeps paying H0032 on claims for authorized services rendered between July 15, 2026 and January 14, 2027 — so any H0032 line still in flight must be re-coded before January 15, 2027. Horizon also states it is "not changing authorization requirements for ABA treatment hours." The January 1, 2026 ABA medical-policy revision (revised documentation standards for prior authorization and pre- and post-service medical-necessity reviews) is a different matter: it is scoped to "members enrolled in Horizon commercial plans and members enrolled in Administrative Services Only (ASO) group employer plans" that follow the New Jersey autism mandate, so it does not govern NJ FamilyCare members on this plan.',
        ],
        cites: [
          { title: 'Horizon: Medical Policy Changes — ABA (eff. 1/1/2026)', url: 'https://www.horizonnjhealth.com/for-providers/news/updates-and-announcements/medical-policy-changes-applied-behavior-analysis' },
          { title: 'Horizon to Stop Using H0032 for ABA Services (eff. 7/15/2026)', url: 'https://www.horizonnjhealth.com/for-providers/news/updates-and-announcements/horizon-to-stop-using-h0032-for-aba-services' },
        ],
      },
      {
        h2: 'Contacts and rates',
        body: [
          'Horizon publishes real ABA escalation contacts: ABA UM escalations go to Erin McNeill (732-256-6336, erin_mcneill@horizonblue.com), the behavioral Medicaid inbox is BHMedicaid_@horizonblue.com, and member services runs at 1-800-682-9091; claims use payor ID 22326. On rates: Horizon publishes no ABA fee schedule — it aligned behavioral-health fees to the DMAHS rate increase for claims on or after March 1, 2024, but the specific ABA amounts are unverified, so treat your participating-provider agreement as the source of truth.',
        ],
        cites: [
          { title: 'DMAHS BH Integration Points of Contact V3.1 — Horizon ABA contacts', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' },
        ],
      },
      {
        h2: 'Does Horizon NJ Health allow retroactive authorization for ABA?',
        body: [
          'Yes, within a short window. Horizon NJ Health\'s provider manual (section 11.4.2, Retrospective Review) says Horizon "will accept the clinical review … for prior authorizations including outpatient medical and behavioral health within six business days," and lists "ABA services" among the behavioral health services this covers. Submit it in the Utilization Management Request Tool on Availity Essentials, choosing "Post Service" as the Event Classification; "Horizon NJ Health has up to 30 days to review retrospective requests." Beyond that, "In extenuating circumstances related to eligibility verification/exhaustion of primary benefit, such inquiries will be reviewed on a case-by-case basis and require supporting documentation."',
        ],
        cites: [
          { title: 'Horizon NJ Health — Provider Administrative Manual', url: 'https://www.horizonnjhealth.com/provider-admin-manual' },
        ],
      },
    ],
    collect: [
      { title: 'ASD script + diagnosis', desc: 'The QHP\'s ASD script triggers the 32-unit/30-day assessment fast-track — collect it at first contact.' },
      { title: 'Population segment', desc: 'Core Medicaid vs. DDD vs. MLTSS vs. FIDE-SNP — Horizon manages ABA across all four; note which the member is in.' },
      { title: 'Requested units per code per day', desc: 'Horizon enforces the daily MUE table; claims above authorized units are not paid.' },
      { title: 'Assessment scheduling within 30 days', desc: 'The 97151 authorization expires in 30 days — book the assessment before requesting it.' },
    ],
    sources: [
      { title: 'Horizon Behavioral Health — ABA Government Programs overview (Nov 2020)', url: 'https://www.horizonnjhealth.com/sites/default/files/2020-12/Overview%20of%20ABA%20Services.pdf' },
      { title: 'Horizon: Medical Policy Changes — ABA (eff. 1/1/2026)', url: 'https://www.horizonnjhealth.com/for-providers/news/updates-and-announcements/medical-policy-changes-applied-behavior-analysis' },
      { title: 'Horizon to Stop Using H0032 for ABA Services (eff. 7/15/2026)', url: 'https://www.horizonnjhealth.com/for-providers/news/updates-and-announcements/horizon-to-stop-using-h0032-for-aba-services' },
      { title: 'Horizon BCBSNJ reimbursement policy — ABA in Treatment of ASD', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/applied-behavior-analysis-treatment-autism-spectrum-disorders' },
      { title: 'DMAHS BH Integration Points of Contact V3.1', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' },
      { title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
      { title: 'Optum ABA State Mandates BH803ABASTM12026 \u2014 NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'Optum/UHC Community Plan — NJ FamilyCare ABA Provider Orientation (2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/njaba/NJ.FamilyCare.Medicaid.ABA.pdf' },
      { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
      { title: 'Horizon NJ Health — Provider Administrative Manual', url: 'https://www.horizonnjhealth.com/provider-admin-manual' },
    ],
    faq: [
      { q: 'Does Horizon NJ Health cover ABA therapy?', a: 'Yes — it administers the NJ FamilyCare ABA benefit under EPSDT, with its own medical policy and MCG-based review layered on the state code set. Both assessment and treatment require prior authorization via NaviNet.' },
      { q: 'How fast is Horizon\'s ABA assessment authorization?', a: 'Fast — once eligibility, an ASD diagnosis, and a QHP script are confirmed, Horizon issues a 32-unit 97151 authorization valid for 30 days without a full clinical review. Treatment requests then get MCG review within 14 days, in 6-month spans.' },
      { q: 'Is Horizon changing its ABA policy in 2026?', a: 'For NJ FamilyCare members, one change: H0032 is retired for ABA effective July 15, 2026 — use 97151–97158/0362T/0373T. Authorizations created through July 14, 2026 with H0032 are honored, and H0032 is still paid on authorized services rendered through January 14, 2027. Horizon\'s January 1, 2026 ABA medical-policy revision applies to its commercial and ASO plans, not to Horizon NJ Health Medicaid members.' },
      { q: 'Can NJ FamilyCare ABA be delivered by telehealth, including the 97151 assessment?', a: 'Yes. N.J.S.A. 30:4D-6k requires NJ FamilyCare to cover telehealth on the same basis as in-person care, with no originating-site restriction, so the child can be at home. That includes the 97151 assessment and 97155 supervision when medically necessary. No state ABA document sets a code list or POS, so confirm billing with the MCO.' },
      { q: 'Does Horizon NJ Health allow retro authorization for ABA?', a: 'Yes, narrowly. Its manual accepts retrospective review of outpatient behavioral health authorizations, ABA included, within six business days; submit through Availity as "Post Service." Horizon has up to 30 days to decide. Eligibility problems or a primary plan\'s exhausted benefit are reviewed case by case with documentation.' },
    ],
  },

  'aetna-better-health-new-jersey': {
    slug: 'aetna-better-health-new-jersey',
    family: 'aetna',
    cardDesc: 'Closest to the state baseline: published rate sheet mirrors the FFS schedule, MUE limits verbatim.',
    assessmentPA: {
      value: 'Required — ABA is on the PA list; urgent requests decided in 24 hours, routine in 7 days',
      status: 'verified',
      cites: [{ title: 'Aetna Better Health of New Jersey — Provider Manual (Decision/notification requirements)', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_provider_manual.pdf' }, { title: 'DMAHS BH Integration Points of Contact V3.1 (per-MCO ABA contacts)', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' }],
    },
    treatmentPA: {
      value: 'Required — via Availity or the BH prior authorization form; progress reports via Availity or fax (844) 404-3972',
      status: 'verified',
      cites: [{ title: 'Aetna Better Health NJ — BH prior authorization request form', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_bh_prior_auth_form.pdf' }, { title: 'DMAHS BH Integration Points of Contact V3.1 (per-MCO ABA contacts)', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD (F84.0–F84.9) by a qualified healthcare professional (state baseline)',
      status: 'verified',
      cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
    },
    payer: 'Aetna Better Health of New Jersey',
    state: 'NJ', kind: 'medicaid-mco', parent: 'NJ FamilyCare',
    intakeGates: {
      ageLimit: {
        value:
          'Two published numbers, and they differ in precision rather than in substance. The founding DMAHS newsletter sets the benefit for "any Medicaid eligible child, under the age of 21, who has been diagnosed with ASD as defined by ICD 10 diagnoses F84.0 through F84.9 by a qualified healthcare provider," delivered under EPSDT, which reaches "individuals under the age of twenty-one." Optum\'s New Jersey Medicaid entry adds the floor as well as the ceiling: "ABA services shall be made available to children 18 months to 21 years of age based on medical necessity," and its NJ FamilyCare provider orientation repeats it — "Must be 18 months – 21 years old," including in the specialized FamilyCare carve-out. No hour caps are attached to the age band. Aetna Better Health of New Jersey publishes no deviation from this, and its own material was checked for one.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      dxRecency: {
        value:
          'Not published. Aetna Better Health of New Jersey\'s provider manual (August 2026) and its behavioral health prior authorization form set no maximum age for the diagnostic report: the form asks for the ICD-10/DSM-5 code, the treatment plan and current clinical data, not a dated evaluation. The state\'s written position runs the same way: Optum\'s NJ Medicaid entry says a "comprehensive diagnostic evaluation is not required to access ABA services." What the plan does date is the authorization: prior authorization numbers "are valid for the date of service authorized. If a date is not specified, service must be initiated within sixty (60) days after the service was authorized," and the member must be eligible on each date of service.',
        status: 'unverified',
        cites: [{ title: 'Aetna Better Health of New Jersey — Provider Manual', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_provider_manual.pdf' }, { title: 'Aetna Better Health NJ — BH prior authorization request form', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_bh_prior_auth_form.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'Aetna Better Health of New Jersey provider services (1-855-232-3596) or the plan\'s named ABA clinical contacts on the DMAHS BH integration contact sheet.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'New Jersey names them twice, and the second list is narrower than the first. The newsletter\'s general test: "The need for ABA services must be determined by a qualified healthcare professional (QHP) capable of making a diagnosis of autism. QHPs include licensed health care professionals, who are qualified by education, training, or licensure/regulation (when applicable) to perform a professional service within his/her scope of practice." The enumerated list of acceptable QHPs "for the diagnosis and treatment planning for adaptive behavior services" is then: Physicians; Psychologists, which "Requires an active board certified behavior analyst (BCBA) certification in good standing and a qualifying doctoral-level degree (BCBA-D)"; and BCBAs, who appear for treatment planning rather than diagnosis. Optum\'s NJ entry restates the split: the diagnosis comes from "a physician or psychologist," and "It is not uncommon for one QHP to make the diagnosis (such as a physician) and a separate QHP (such as a BCBA) to develop and supervise the treatment plan."',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      diagnosticTools: {
        value:
          'None required — and New Jersey is one of the few states that says so in terms. Optum\'s NJ Medicaid entry: "A comprehensive diagnostic evaluation is not required to access ABA services," with "ABA services … available to any child diagnosed with autism spectrum disorder as defined by ICD-10 diagnoses F84.0 through F84.9." The DMAHS newsletter names no instrument either. That makes this the friendliest diagnostic bar of the three states on this page — intake should not queue a New Jersey family for an ADOS-2 before starting the authorization. Aetna Better Health of New Jersey adds none of its own: its behavioral health prior authorization form asks only for the ICD-10/DSM-5 code, and its ABA section asks for request type, treatment setting, clinical symptoms or social barriers and a discharge plan, plus clinical data, progress, compliance and "For ABA Requests, include treatment plan" — no ADOS-2, adaptive scale or other named instrument. The August 2026 provider manual names no ABA diagnostic instrument either.',
        status: 'verified',
        cites: [{ title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Aetna Better Health NJ — BH prior authorization request form', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_bh_prior_auth_form.pdf' }, { title: 'Aetna Better Health of New Jersey — Provider Manual', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_provider_manual.pdf' }],
      },
      referral: {
        value:
          'No PCP referral and no physician order. The sequence the state sets is QHP determination, then MCO authorization: "Once an individual is properly diagnosed with ASD, the MCO shall authorize a QHP to assess the child for the development of a proposed treatment plan," and treatment follows "Contingent upon approval of the treatment plan." The genuine intake asset sits one step earlier — members still fee-for-service pending MCO enrollment are covered through Gainwell with no prior authorization required at all, so enrollment status, not a referral, is the routing question. Plan practice adds paperwork rather than a referral: Horizon wants an ASD diagnosis "script" from a QHP attached to the assessment request, which is the diagnosis document under another name. Aetna Better Health is the plan that hews closest to the state baseline — its published ABA Program sheet copies the DMAHS rates and unit limits verbatim — and adds no referral requirement of its own; what it adds is a clock, with urgent requests decided in 24 hours and routine in 7 days.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Aetna Better Health NJ — ABA Program rates (eff. 4/1/2020)', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/newjersey/pdf/Applied%20behavioral%20analysis%20program.pdf' }],
      },
      telehealth: {
        value:
          'The plan publishes no ABA telehealth rule of its own, so the state statute governs. N.J.S.A. 30:4D-6k (as amended by P.L.2021, c.310) requires the State Medicaid and NJ FamilyCare programs to "provide coverage and payment for health care services delivered to a benefits recipient through telemedicine or telehealth, on the same basis as" in person, for services otherwise covered in person, with payment to the practitioner or the employing agency. The programs may limit coverage to participating providers, but may not restrict the originating site (the child\'s home counts) or the distant site except to keep the in-person standard of care, may not restrict the platform (audio-only included) if it meets that standard and HIPAA, and may not require a member to use telehealth instead of in-person care. Coverage can still be limited to medically necessary services. No DMAHS ABA document names an ABA telehealth code list, POS or in-person supervision minimum, so the 97151 assessment and 97155 supervision are covered by telehealth on the same basis as in person when medically necessary, and billing details come from the MCO.',
        status: 'verified',
        cites: [
          { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
          { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Aetna Better Health of New Jersey\'s provider manual: urgent pre-service decisions "Within twenty-four (24) hours of receipt of necessary information, but no later than 72 hours from receipt of request"; non-urgent pre-service "Within seven (7) calendar days (or sooner as required by the needs of the member) of receipt of necessary information sufficient to make an informed decision"; continued/extended services within 24 hours of receipt of necessary information, no later than 72 hours. These apply "Unless otherwise required by the New Jersey Division of Medical Assistance and Health Services (DMAHS) or state law." Note the older BH prior authorization request form still reads "Routine services processed within 14 days" — the manual\'s 7-day standard is the current one. Federal floor for every NJ FamilyCare MCO: standard decisions within 7 calendar days of the request for contract rating periods starting on or after January 1, 2026 (14 days before that), extendable by up to 14 calendar days at the member\'s or provider\'s request or when the plan justifies needing more information; expedited within 72 hours.',
        status: 'verified',
        cites: [
          { title: 'Aetna Better Health of New Jersey — Provider Manual', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_provider_manual.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Aetna Better Health of New Jersey\'s manual: "If other insurance is the primary payer before Aetna Better Health of New Jersey, prior authorization of a service is not required, unless it is known that the service provided is not covered by the primary payer. If the service is not covered by the primary payer, the provider must follow our prior authorization rules." So a commercial plan that covers ABA → its authorization only; one that excludes ABA → Aetna\'s PA before services. Submit COB claims within 60 days of the primary insurer\'s EOB or 180 days from the date of service, whichever is later. State rule underneath: NJ FamilyCare pays last: "All TPL, for example, health insurance, Medicare, CHAMPUS, prepaid health plans… shall, if available, be used first and to the fullest extent." Bill the commercial plan first; supplementation claims "shall not be filed with the program unless accompanied by a statement of payment, Explanation of Benefits (EOB), or denial from the other carrier." Two traps: "No program payments shall be made when the third-party payer requires a contracting or participating provider to accept that third-party payer\'s payment as payment in full," and when NJ FamilyCare is secondary it pays the lesser of its allowed amount minus other payments, or the patient liability. TRICARE and CHAMPVA both pay ahead of Medicaid: TRICARE rules state "Medicaid is not a double coverage plan. In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer," and CHAMPVA "assumes primary payer status" over Medicaid.',
        status: 'verified',
        cites: [
          { title: 'Aetna Better Health of New Jersey — Provider Manual', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_provider_manual.pdf' },
          { title: 'N.J.A.C. 10:49-7.3 — Third-party liability (TPL) benefits (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-10-49-7-3' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.272 — CHAMPVA benefit limitations; Medicaid exception (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.272' },
        ],
      },
    },
    deliveryRules: {
      concurrentBilling: {
        value:
          'New Jersey says yes, in writing, and draws the line precisely. \u201cIf the QHP is overseeing the activities of the technician, the time of direct supervision by the QHP shall be concurrently billable using code 97155.\u201d But \u201cbilling for 97155 is limited to time where the QHP is either engaged directly with the patient or is directing a technician in implementing a modified protocol with the patient. Billing for supervision where the technician is not present is not allowed.\u201d Two other concurrency rules ride along: 97156 may be billed while the RBT delivers direct treatment to the child \u201cin a separate location\u201d; and for 0373T \u201cproviders may not bill for the QHP time concurrently\u201d and billing is limited to a single technician\u2019s face-to-face time, never the combined time of multiple technicians (three technicians for two hours bills eight units, not twenty-four). This is NJ FamilyCare state policy and the operative floor for Aetna Better Health of New Jersey; no plan-specific deviation was found in Aetna Better Health of New Jersey\u2019s published material.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
        verifyVia:
          'Aetna Better Health of New Jersey provider services, to confirm the plan has not layered its own concurrency edit on top.',
      },
      dailyLimits: {
        value:
          'New Jersey publishes its own table rather than adopting a CMS MUE regime, and labels it guidance: the limits \u201care for guidance purposes only and may be overridden when medically necessary based on individual need\u201d under EPSDT. Per day, in 15-minute units: 97151 32, 97152 8, 97153 32, 97154 12, 97155 24, 97156 16, 97157 16, 97158 16, 0362T 8, 0373T 32. Treat them as soft ceilings the plans enforce as edits \u2014 a request above them needs explicit EPSDT medical-necessity framing rather than a quiet resubmission. Aetna Better Health of New Jersey publishes no daily table of its own, so the state guide is what to plan against.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
        verifyVia:
          'Aetna Better Health of New Jersey\u2019s provider manual / claim-edit list.',
      },
      noteSignature: {
        value:
          'No ABA-specific rule, but the plan\'s minimum medical-record standards for all practitioners apply: "Signatures — entries are signed and dated by the responsible licensed provider; the responsible licensed provider countersigns care rendered by ancillary personnel; alterations of the record are signed and dated," and every entry must identify its author. Read for ABA, a technician\'s session note needs the supervising licensed provider\'s countersignature. No signing deadline is set, but records the plan requests "must be sent to us within 14 days of our request."',
        status: 'verified',
        cites: [{ title: 'Aetna Better Health of New Jersey — Provider Manual', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_provider_manual.pdf' }],
        verifyVia:
          'Aetna Better Health of New Jersey provider services (1-855-232-3596) — confirm who may countersign technician notes (LBA/BCBA) on audit.',
      },
      placeOfService: {
        value:
          'This one has moved and the two live sources disagree. The founding DMAHS newsletter is flat: \u201cABA services may be provided in the therapist\u2019s office, a community setting or the child\u2019s home. Services may not be provided within a school facility.\u201d Optum\u2019s ABA State Mandates document (annual review 7/2026), whose NJ Medicaid entry tracks the same state policy, now reads: \u201cServices may be provided in the school setting as long as services are not provided during normal school hours.\u201d Office, home and community are settled; school is plan-dependent and moving; group home is addressed by neither. Neither position is republished by Aetna Better Health of New Jersey, so resolve it with the plan before scheduling school-based sessions.',
        status: 'plan-dependent',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 \u2014 NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'Aetna Better Health of New Jersey provider services.',
        blocker: 'per-case',
      },
    },
    pill: 'Payer Guide · Aetna Better Health (NJ)',
    h1: 'Aetna Better Health of New Jersey ABA coverage (NJ FamilyCare MCO).',
    metaTitle: 'Aetna Better Health of New Jersey ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Aetna Better Health administers NJ FamilyCare ABA — the published rate sheet mirroring the state FFS schedule, MUE unit limits, Availity submission, PA turnaround times, and the one open rate question on 97153.',
    intro: [
      'Aetna Better Health of New Jersey is the most transparent of the five NJ FamilyCare MCOs about hewing to the state baseline: its published ABA Program sheet copies the DMAHS rates and unit limits verbatim. There\'s no distinct Aetna clinical ABA policy layered on top — authorization runs through the standard behavioral-health PA machinery on Availity, with defined turnaround clocks. The open question worth carrying into contracting: the published rate sheet still shows the launch-era $11.20 on 97153, and whether Aetna followed the state\'s 2022 increase to $15.00 is unverified.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'NJ FamilyCare MCO (Aetna Medicaid)' },
      { label: 'Clinical rules', value: 'State baseline — no distinct published ABA clinical policy' },
      { label: 'Prior auth', value: 'Required — urgent decided in 24h, routine in 7 days' },
      { label: 'Published rates', value: '97151/97156 $25.00 · 97155 $21.25 · 97153 $11.20 on the 2020 sheet (state since raised to $15.00 — verify)' },
      { label: 'Unit limits', value: 'State suggested limits adopted verbatim as MUE claim edits' },
      { label: 'Submission', value: 'Availity (provider ID 46320); ABA fax (844) 404-3972' },
    ],
    sections: [
      {
        h2: 'The state schedule, republished',
        body: [
          'Aetna\'s ABA Program sheet (effective 4/1/2020) publishes rates identical to the state FFS schedule — 97151 $25.00, 97153 $11.20, 97155 $21.25, 97156 $25.00, 0362T $25.00, 0373T $16.40 — and adopts the state\'s suggested daily unit limits verbatim, explicitly labeling them MUE (medically-unlikely-edit) limits: functionally claim edits, not soft guidance. The catch is the technician rate: the state raised 97153 from $11.20 to $15.00 effective February 1, 2022, and whether Aetna followed on its own schedule is unverified — make it an explicit contracting question rather than an assumption.',
        ],
        cites: [
          { title: 'Aetna Better Health NJ — ABA Program rates (eff. 4/1/2020)', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/newjersey/pdf/Applied%20behavioral%20analysis%20program.pdf' },
          { title: 'Autism NJ — Medicaid rate increase ($11.20 → $15.00 eff 2/1/2022)', url: 'https://autismnj.org/news/autism-new-jerseys-advocacy-leads-to-medicaid-rate-increase-for-aba-services/' },
        ],
      },
      {
        h2: 'Authorization mechanics',
        body: [
          'ABA sits on the plan\'s prior-authorization list, with urgent requests decided within 24 hours and routine requests within 7 days. Requests go through Availity or on the plan\'s behavioral-health prior authorization form; progress reports upload via Availity or fax to (844) 404-3972, and the plan phone is 1-855-232-3596. Claims run through Availity or Office Ally under provider ID 46320; appeals go to NJAppealsandGrievances@AETNA.com. Named clinical ABA contacts (per the state\'s BH integration contact sheet) are Alyx Llorens and Vincenza Stone. The plan also maintains a published ABA/DIR provider directory PDF — useful for checking how your listing appears to referring families.',
        ],
        cites: [
          { title: 'DMAHS BH Integration Points of Contact V3.1 — Aetna ABA contacts', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' },
          { title: 'Aetna Better Health of New Jersey — Provider Manual (Decision/notification requirements)', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_provider_manual.pdf' },
          { title: 'Aetna Better Health NJ — BH prior authorization request form', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_bh_prior_auth_form.pdf' },
        ],
      },
      {
        h2: 'Does Aetna Better Health of New Jersey allow retroactive authorization for ABA?',
        body: [
          'Its provider manual (August 2026) provides for post-service review but does not say when one will be accepted. The decision table includes "Post-service approval of a service for which no pre-service request was received," decided "Within 30 calendar days of the request," and a post-service denial within 30 calendar days of receiving the necessary information. ABA is on the plan\'s authorization list ("ABA/DIR Therapy — Yes authorization"), so treat post-service review as an exception, not a substitute. Two related rules: when other insurance pays first, "prior authorization of a service is not required, unless it is known that the service provided is not covered by the primary payer"; and authorizations are valid for the dates authorized (or 60 days to start if no date is given), with the member "enrolled and eligible on each date of service."',
        ],
        cites: [
          { title: 'Aetna Better Health of New Jersey — Provider Manual', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_provider_manual.pdf' },
        ],
      },
      {
        h2: 'What documents does Aetna Better Health of New Jersey require for ABA?',
        body: [
          'No ABA-specific template. Requests go through Availity or on the plan\'s behavioral health prior authorization form, whose ABA section asks for the request type (initial or concurrent, and how long the member has been in services), the treatment setting, clinical symptoms or social barriers and an anticipated discharge date. Attach clinical data (psychosocial and behavioral history, mental status, current maladaptive behaviors or skill deficits, co-occurring and medical conditions), progress or lack of it (for initial requests, the response to earlier interventions), compliance with treatment, and "For ABA Requests, include treatment plan." The form must be signed in its attestation section and "completed in its entirety in order to receive a determination." Neither the form nor the manual names a diagnostic instrument or a maximum age for the diagnosis. Session records fall under the plan\'s general medical-record standards, including signature and countersignature of ancillary staff\'s entries.',
        ],
        cites: [
          { title: 'Aetna Better Health NJ — BH prior authorization request form', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_bh_prior_auth_form.pdf' },
          { title: 'Aetna Better Health of New Jersey — Provider Manual', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_provider_manual.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'ASD diagnosis + QHP script', desc: 'The state baseline applies — diagnosis from a physician/psychologist opens the assessment authorization.' },
      { title: 'Urgency classification', desc: 'Urgent requests get 24-hour decisions vs. 7 days routine — classify honestly but deliberately.' },
      { title: 'Requested units vs. MUE limits', desc: 'Aetna runs the state daily limits as hard claim edits — plan intensity within them or document the EPSDT override.' },
      { title: 'Current 97153 contract rate', desc: 'The published sheet predates the state\'s $15.00 increase — confirm what your contract actually pays.' },
    ],
    sources: [
      { title: 'Aetna Better Health NJ — ABA Program rates (eff. 4/1/2020)', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/newjersey/pdf/Applied%20behavioral%20analysis%20program.pdf' },
      { title: 'DMAHS BH Integration Points of Contact V3.1 — Aetna ABA contacts', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' },
      { title: 'Aetna Better Health NJ — BH prior authorization request form', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_bh_prior_auth_form.pdf' },
      { title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
      { title: 'Optum ABA State Mandates BH803ABASTM12026 \u2014 NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'Autism NJ — Medicaid rate increase for ABA services', url: 'https://autismnj.org/news/autism-new-jerseys-advocacy-leads-to-medicaid-rate-increase-for-aba-services/' },
      { title: 'Optum/UHC Community Plan — NJ FamilyCare ABA Provider Orientation (2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/njaba/NJ.FamilyCare.Medicaid.ABA.pdf' },
      { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
      { title: 'Aetna Better Health of New Jersey — Provider Manual', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/new-jersey-medicaid/provider/pdf/aetna_provider_manual.pdf' },
    ],
    faq: [
      { q: 'Does Aetna Better Health of New Jersey cover ABA?', a: 'Yes — it administers the NJ FamilyCare ABA benefit closest to the state baseline of all five MCOs, with a published rate sheet and unit limits copied from the DMAHS schedule. PA is required, via Availity or the BH prior auth form.' },
      { q: 'What does Aetna Better Health NJ pay for ABA?', a: 'Its published 2020 sheet mirrors the state FFS schedule: $25.00 for 97151/97156, $21.25 for 97155, and $11.20 for 97153. The state raised 97153 to $15.00 in February 2022 — whether Aetna followed is unverified, so confirm in your contract.' },
      { q: 'How fast does Aetna Better Health NJ decide ABA authorizations?', a: 'Urgent requests within 24 hours; routine requests within 7 days. Progress reports go via Availity or fax (844) 404-3972.' },
      { q: 'Can NJ FamilyCare ABA be delivered by telehealth, including the 97151 assessment?', a: 'Yes. N.J.S.A. 30:4D-6k requires NJ FamilyCare to cover telehealth on the same basis as in-person care, with no originating-site restriction, so the child can be at home. That includes the 97151 assessment and 97155 supervision when medically necessary. No state ABA document sets a code list or POS, so confirm billing with the MCO.' },
      { q: 'Does Aetna Better Health NJ Medicaid allow retro auth for ABA?', a: 'Its manual lists a post-service review for services with no pre-service request, decided within 30 calendar days, but ABA still requires prior authorization and the manual sets no conditions for accepting a late request. If a commercial plan is primary and covers ABA, Aetna Better Health does not require its own prior authorization.' },
      { q: 'Does Aetna Better Health of New Jersey have specific document rules for ABA?', a: 'It has a required form, not a template. The BH prior authorization form\'s ABA section asks for request type, treatment setting, clinical symptoms and a discharge plan, with clinical data, progress, compliance and the treatment plan attached. It names no diagnostic instrument and no diagnosis age limit; technician notes need the licensed provider\'s countersignature under its medical-record standards.' },
    ],
  },

  'fidelis-care-new-jersey': {
    slug: 'fidelis-care-new-jersey',
    family: 'centene',
    cardDesc: 'Ex-WellCare Centene plan; state-baseline ABA with no published plan policy — verify specifics.',
    assessmentPA: {
      value: 'Required — NJ FamilyCare baseline (the MCO authorizes a QHP assessment); Fidelis-specific ABA form detail is unpublished',
      status: 'verified',
      cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Fidelis Care NJ — Authorizations', url: 'https://www.fideliscarenj.com/providers/medicaid/authorizations.html' }],
    },
    treatmentPA: {
      value: 'Required — state baseline; outpatient auth requests via provider.fideliscarenj.com or fax (888) 339-2677, and clinical documentation must now accompany every PA request',
      status: 'verified',
      cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Fidelis Care NJ — Authorizations', url: 'https://www.fideliscarenj.com/providers/medicaid/authorizations.html' }, { title: 'DMAHS BH Integration Points of Contact V3.1 (4/30/2026) — Fidelis outpatient auth fax', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD (F84.0–F84.9) by a qualified healthcare professional (state baseline)',
      status: 'verified',
      cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
    },
    payer: 'Fidelis Care New Jersey (formerly WellCare)',
    state: 'NJ', kind: 'medicaid-mco', parent: 'NJ FamilyCare',
    intakeGates: {
      ageLimit: {
        value:
          'Two published numbers, and they differ in precision rather than in substance. The founding DMAHS newsletter sets the benefit for "any Medicaid eligible child, under the age of 21, who has been diagnosed with ASD as defined by ICD 10 diagnoses F84.0 through F84.9 by a qualified healthcare provider," delivered under EPSDT, which reaches "individuals under the age of twenty-one." Optum\'s New Jersey Medicaid entry adds the floor as well as the ceiling: "ABA services shall be made available to children 18 months to 21 years of age based on medical necessity," and its NJ FamilyCare provider orientation repeats it — "Must be 18 months – 21 years old," including in the specialized FamilyCare carve-out. No hour caps are attached to the age band. Fidelis publishes no NJ-specific ABA policy at all, so the state band is the only published answer.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      dxRecency: {
        value:
          'Not published. Neither the DMAHS newsletter nor Optum\'s New Jersey entry sets a maximum age for the diagnostic evaluation, and the state\'s written position runs the other way: Optum\'s NJ Medicaid entry says flatly that "A comprehensive diagnostic evaluation is not required to access ABA services," so there is no comprehensive evaluation whose recency could be gated. What is dated in New Jersey is the authorization rather than the diagnosis — Horizon issues 32 units of 97151 valid for 30 days, and treatment authorizations run in 6-month spans.',
        status: 'unverified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'Fidelis Care New Jersey\'s ABA UM contact (per the DMAHS BH integration contact sheet) before the first submission — nothing ABA-specific is published by the plan.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'New Jersey names them twice, and the second list is narrower than the first. The newsletter\'s general test: "The need for ABA services must be determined by a qualified healthcare professional (QHP) capable of making a diagnosis of autism. QHPs include licensed health care professionals, who are qualified by education, training, or licensure/regulation (when applicable) to perform a professional service within his/her scope of practice." The enumerated list of acceptable QHPs "for the diagnosis and treatment planning for adaptive behavior services" is then: Physicians; Psychologists, which "Requires an active board certified behavior analyst (BCBA) certification in good standing and a qualifying doctoral-level degree (BCBA-D)"; and BCBAs, who appear for treatment planning rather than diagnosis. Optum\'s NJ entry restates the split: the diagnosis comes from "a physician or psychologist," and "It is not uncommon for one QHP to make the diagnosis (such as a physician) and a separate QHP (such as a BCBA) to develop and supervise the treatment plan." No Fidelis-specific diagnostician list is published.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      diagnosticTools: {
        value:
          'None required — and New Jersey is one of the few states that says so in terms. Optum\'s NJ Medicaid entry: "A comprehensive diagnostic evaluation is not required to access ABA services," with "ABA services … available to any child diagnosed with autism spectrum disorder as defined by ICD-10 diagnoses F84.0 through F84.9." The DMAHS newsletter names no instrument either. That makes this the friendliest diagnostic bar of the three states on this page — intake should not queue a New Jersey family for an ADOS-2 before starting the authorization. Fidelis Care New Jersey publishes no deviation from this, and its own material was checked for one.',
        status: 'verified',
        cites: [{ title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
      },
      referral: {
        value:
          'No PCP referral and no physician order. The sequence the state sets is QHP determination, then MCO authorization: "Once an individual is properly diagnosed with ASD, the MCO shall authorize a QHP to assess the child for the development of a proposed treatment plan," and treatment follows "Contingent upon approval of the treatment plan." The genuine intake asset sits one step earlier — members still fee-for-service pending MCO enrollment are covered through Gainwell with no prior authorization required at all, so enrollment status, not a referral, is the routing question. Plan practice adds paperwork rather than a referral: Horizon wants an ASD diagnosis "script" from a QHP attached to the assessment request, which is the diagnosis document under another name. Fidelis publishes no ABA-specific request format, so confirm what its UM expects in the packet before the first submission rather than after the first denial; outpatient authorization requests go through provider.fideliscarenj.com or fax (888) 339-2677.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Fidelis Care NJ — Authorizations', url: 'https://www.fideliscarenj.com/providers/medicaid/authorizations.html' }],
      },
      telehealth: {
        value:
          'The plan publishes no ABA telehealth rule of its own, so the state statute governs. N.J.S.A. 30:4D-6k (as amended by P.L.2021, c.310) requires the State Medicaid and NJ FamilyCare programs to "provide coverage and payment for health care services delivered to a benefits recipient through telemedicine or telehealth, on the same basis as" in person, for services otherwise covered in person, with payment to the practitioner or the employing agency. The programs may limit coverage to participating providers, but may not restrict the originating site (the child\'s home counts) or the distant site except to keep the in-person standard of care, may not restrict the platform (audio-only included) if it meets that standard and HIPAA, and may not require a member to use telehealth instead of in-person care. Coverage can still be limited to medically necessary services. No DMAHS ABA document names an ABA telehealth code list, POS or in-person supervision minimum, so the 97151 assessment and 97155 supervision are covered by telehealth on the same basis as in person when medically necessary, and billing details come from the MCO.',
        status: 'verified',
        cites: [
          { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
          { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Fidelis Care\'s 2026 NJ manual: routine (non-urgent) prior authorization determinations "within seven (7) calendar days (or sooner as required by the needs of the Member) of receipt of necessary information sufficient to make an informed decision"; urgent determinations "within twenty-four (24) hours of receipt of the necessary information, but no later than seventy-two (72) hours after receipt of the request for service" — ask for expedited decisions by telephone or the portal, not fax. Continued or extended services (a reauthorization during an ongoing course of treatment) are "determined and communicated by telephone and in writing within one (1) business day of receipt of the necessary information." Federal floor for every NJ FamilyCare MCO: standard decisions within 7 calendar days of the request for contract rating periods starting on or after January 1, 2026 (14 days before that), extendable by up to 14 calendar days at the member\'s or provider\'s request or when the plan justifies needing more information; expedited within 72 hours.',
        status: 'verified',
        cites: [
          { title: 'Fidelis Care — 2026 NJ Medicaid/NJ FamilyCare Provider Manual (effective April 15, 2026)', url: 'https://www.fideliscarenj.com/content/dam/centene/wellcare/nj/pdfs/Prov/NJ_Medicaid_Provider_Manual_R.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Fidelis Care\'s manual: "Providers shall bill primary insurers for items and services they provide to a Member before they submit claims for the same items or services to Fidelis Care," with the primary\'s EOB and payment amount on the claim; if the primary paid at least Fidelis\'s liability nothing more is paid, otherwise Fidelis pays the difference up to its allowed amount; if the primary coverage ended, submit proof of termination. The manual publishes no rule on whether Fidelis\'s own authorization is needed when it is secondary — confirm with Fidelis Provider Services (1-888-453-2534) before relying on the primary\'s authorization alone. State rule underneath: NJ FamilyCare pays last: "All TPL, for example, health insurance, Medicare, CHAMPUS, prepaid health plans… shall, if available, be used first and to the fullest extent." Bill the commercial plan first; supplementation claims "shall not be filed with the program unless accompanied by a statement of payment, Explanation of Benefits (EOB), or denial from the other carrier." Two traps: "No program payments shall be made when the third-party payer requires a contracting or participating provider to accept that third-party payer\'s payment as payment in full," and when NJ FamilyCare is secondary it pays the lesser of its allowed amount minus other payments, or the patient liability. TRICARE and CHAMPVA both pay ahead of Medicaid: TRICARE rules state "Medicaid is not a double coverage plan. In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer," and CHAMPVA "assumes primary payer status" over Medicaid.',
        status: 'verified',
        cites: [
          { title: 'Fidelis Care — 2026 NJ Medicaid/NJ FamilyCare Provider Manual (effective April 15, 2026)', url: 'https://www.fideliscarenj.com/content/dam/centene/wellcare/nj/pdfs/Prov/NJ_Medicaid_Provider_Manual_R.pdf' },
          { title: 'N.J.A.C. 10:49-7.3 — Third-party liability (TPL) benefits (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-10-49-7-3' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.272 — CHAMPVA benefit limitations; Medicaid exception (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.272' },
        ],
      },
    },
    deliveryRules: {
      concurrentBilling: {
        value:
          'New Jersey says yes, in writing, and draws the line precisely. \u201cIf the QHP is overseeing the activities of the technician, the time of direct supervision by the QHP shall be concurrently billable using code 97155.\u201d But \u201cbilling for 97155 is limited to time where the QHP is either engaged directly with the patient or is directing a technician in implementing a modified protocol with the patient. Billing for supervision where the technician is not present is not allowed.\u201d Two other concurrency rules ride along: 97156 may be billed while the RBT delivers direct treatment to the child \u201cin a separate location\u201d; and for 0373T \u201cproviders may not bill for the QHP time concurrently\u201d and billing is limited to a single technician\u2019s face-to-face time, never the combined time of multiple technicians (three technicians for two hours bills eight units, not twenty-four). This is NJ FamilyCare state policy and the operative floor for Fidelis Care New Jersey; no plan-specific deviation was found in Fidelis Care New Jersey\u2019s published material.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
        verifyVia:
          'Fidelis Care New Jersey provider services, to confirm the plan has not layered its own concurrency edit on top.',
      },
      dailyLimits: {
        value:
          'New Jersey publishes its own table rather than adopting a CMS MUE regime, and labels it guidance: the limits \u201care for guidance purposes only and may be overridden when medically necessary based on individual need\u201d under EPSDT. Per day, in 15-minute units: 97151 32, 97152 8, 97153 32, 97154 12, 97155 24, 97156 16, 97157 16, 97158 16, 0362T 8, 0373T 32. Treat them as soft ceilings the plans enforce as edits \u2014 a request above them needs explicit EPSDT medical-necessity framing rather than a quiet resubmission. Fidelis Care New Jersey publishes no daily table of its own, so the state guide is what to plan against.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
        verifyVia:
          'Fidelis Care New Jersey\u2019s provider manual / claim-edit list.',
      },
      noteSignature: {
        value:
          'Neither the state nor Fidelis Care New Jersey publishes a session-note signature rule for ABA \u2014 no named signer and no timeframe.',
        status: 'unverified',
        verifyVia:
          'Fidelis Care New Jersey\u2019s provider manual documentation chapter, or DMAHS\u2019s Autism Line (609-588-8522).',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'This one has moved and the two live sources disagree. The founding DMAHS newsletter is flat: \u201cABA services may be provided in the therapist\u2019s office, a community setting or the child\u2019s home. Services may not be provided within a school facility.\u201d Optum\u2019s ABA State Mandates document (annual review 7/2026), whose NJ Medicaid entry tracks the same state policy, now reads: \u201cServices may be provided in the school setting as long as services are not provided during normal school hours.\u201d Office, home and community are settled; school is plan-dependent and moving; group home is addressed by neither. Neither position is republished by Fidelis Care New Jersey, so resolve it with the plan before scheduling school-based sessions.',
        status: 'plan-dependent',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 \u2014 NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'Fidelis Care New Jersey provider services.',
        blocker: 'per-case',
      },
    },
    pill: 'Payer Guide · Fidelis Care (NJ)',
    h1: 'Fidelis Care New Jersey ABA coverage (NJ FamilyCare MCO).',
    metaTitle: 'Fidelis Care New Jersey (NJ FamilyCare) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Fidelis Care (formerly WellCare of NJ, a Centene plan) administers NJ FamilyCare ABA — state-baseline coverage through generic Centene BH machinery, portal and fax channels, named ABA contacts, and the gaps to verify directly.',
    intro: [
      'Fidelis Care New Jersey — the Centene plan formerly branded WellCare of NJ — administers the NJ FamilyCare ABA benefit with the least published detail of the five MCOs. Our best-evidence read: it runs the state benefit through generic Centene behavioral-health UM machinery, with no distinct ABA clinical policy, fee schedule, or unit-cap document surfaced anywhere public. That makes this a state-baseline plan with gaps — the clinical rules to plan against are NJ FamilyCare\'s, and the plan-specific specifics (forms, caps, rates) are phone calls, not lookups.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'NJ FamilyCare MCO (Centene; formerly WellCare of NJ)' },
      { label: 'Clinical rules', value: 'State baseline — no NJ-specific published ABA policy found' },
      { label: 'Prior auth', value: 'Required per the state benefit design; plan-specific ABA form unpublished' },
      { label: 'Submission', value: 'provider.fideliscarenj.com or fax (888) 339-2677' },
      { label: 'Unit caps / rates', value: 'Unverified — nothing published; confirm directly with the plan' },
      { label: 'Claims', value: 'Availity clearinghouse, payor ID 14163; provider services 1-888-453-2534' },
    ],
    sections: [
      {
        h2: 'A state-baseline plan — and what that means in practice',
        body: [
          'No Fidelis-specific ABA clinical policy, fee schedule, or hour-cap document has been published — the plan appears to defer to the state criteria (unverified). Practically, plan requests against the NJ FamilyCare baseline: an ASD diagnosis from a QHP, an MCO-authorized assessment, and treatment contingent on treatment-plan approval, with the state\'s daily unit guide as the likely claim-edit surface. Outpatient authorization requests go through the provider portal at provider.fideliscarenj.com (Fidelis calls it the fastest route) or by fax to (888) 339-2677 per the state\'s contact sheet, with progress reports uploaded via the portal or faxed. One recent tightening: "In preparation for the end of Phase 1 Flexibility for BHI, providers are now required to submit clinical documentation along with all prior authorization request[s]" — send the clinicals with the first request, not on request. Because nothing ABA-specific is published, confirm assessment-request format, authorization spans, and unit handling with the plan\'s UM contact before your first submission rather than after your first denial.',
        ],
        cites: [
          { title: 'Fidelis Care NJ — Authorizations', url: 'https://www.fideliscarenj.com/providers/medicaid/authorizations.html' },
          { title: 'DMAHS BH Integration Points of Contact V3.1 (4/30/2026) — Fidelis outpatient auth fax', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' },
          { title: 'DMAHS Provider Newsletter Vol 30 No 06 — the state baseline', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
        ],
      },
      {
        h2: 'Contacts and identity housekeeping',
        body: [
          'The state\'s BH integration contact sheet — which still titles the plan "Fidelis Care (Formerly Wellcare)" — names the ABA UM/PA contact as Amber Johnson (770-809-7313, Amber.Johnson@centene.com) and the ABA contracting contact as Michael Czajkowski (862-702-6529, Michael.Czajkowski@fideliscarenj.com). Provider services runs at 1-888-453-2534; claims route through Availity under payor ID 14163, and claims disputes mail to Tampa, FL (Centene shared services). Watch the rebrand at intake: families, cards, and stale directory listings may still say WellCare — it\'s the same plan. Fidelis\'s own July 2026 Medicaid Quick Reference Guide names a different pair "For Autism Services including prior authorization": April Hames, Sr. Director, Clinical Operations (AHAMES@centene.com), and Stephanie Ryan, Manager, Clinical BH Utilization Management (Stephanie.C.Ryan@centene.com) — the plan\'s own document is the more current of the two.',
        ],
        cites: [
          { title: 'DMAHS BH Integration Points of Contact V3.1 — Fidelis ABA contacts', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' },
          { title: 'Fidelis Care NJ — Medicaid Provider Quick Reference Guide (July 2026)', url: 'https://www.fideliscarenj.com/content/dam/centene/wellcare/nj/pdfs/ProviderQRG/NJ_Caid_Provider_Quick_Reference_Guide_2026_R.pdf' },
        ],
      },
      {
        h2: 'Does Fidelis Care New Jersey allow retroactive authorization for ABA?',
        body: [
          'Only after retroactive eligibility or an emergency. Fidelis Care\'s 2026 New Jersey Medicaid manual: Fidelis "will review post-service requests for authorization of inpatient admissions or outpatient services only if, at the time of treatment, the Member was not eligible but became eligible with Fidelis Care retroactively or in cases of emergency treatment and the payer is not known at the time of service." The review uses "the same approved medical criteria used for the pre-service decisions," and "All services performed without Prior Authorization are subject to Retrospective Review by Fidelis Care." So ABA delivered before a family\'s Fidelis enrollment was made retroactive can be reviewed; a missed authorization for a member who was already enrolled cannot.',
        ],
        cites: [
          { title: 'Fidelis Care — 2026 NJ Medicaid/NJ FamilyCare Provider Manual (effective April 15, 2026)', url: 'https://www.fideliscarenj.com/content/dam/centene/wellcare/nj/pdfs/Prov/NJ_Medicaid_Provider_Manual_R.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan identity on "WellCare" inquiries', desc: 'WellCare of NJ is now Fidelis Care — same plan, new name; verify the current card.' },
      { title: 'ASD diagnosis + QHP script', desc: 'The state baseline applies — collect the diagnosis and script that trigger the assessment authorization.' },
      { title: 'UM confirmation before first submission', desc: 'No ABA-specific forms or caps are published — call the ABA UM contact to confirm format and spans up front.' },
      { title: 'Requested units vs. the state guide', desc: 'Absent published plan caps, assume the state daily unit table is the edit surface.' },
    ],
    sources: [
      { title: 'DMAHS BH Integration Points of Contact V3.1 — Fidelis ABA contacts', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' },
      { title: 'Fidelis Care NJ — Authorizations', url: 'https://www.fideliscarenj.com/providers/medicaid/authorizations.html' },
      { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
      { title: 'Optum ABA State Mandates BH803ABASTM12026 \u2014 NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'Optum/UHC Community Plan — NJ FamilyCare ABA Provider Orientation (2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/njaba/NJ.FamilyCare.Medicaid.ABA.pdf' },
      { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
      { title: 'Fidelis Care — 2026 NJ Medicaid/NJ FamilyCare Provider Manual (effective April 15, 2026)', url: 'https://www.fideliscarenj.com/content/dam/centene/wellcare/nj/pdfs/Prov/NJ_Medicaid_Provider_Manual_R.pdf' },
    ],
    faq: [
      { q: 'Does Fidelis Care New Jersey cover ABA?', a: 'Yes — it administers the NJ FamilyCare ABA benefit (EPSDT, ASD diagnosis, MCO-authorized assessment and treatment plan). No plan-specific ABA policy is published, so the state baseline is the rulebook to plan against.' },
      { q: 'Is Fidelis Care NJ the same as WellCare?', a: 'Yes — WellCare of NJ rebranded to Fidelis Care under Centene. The state\'s own contact documents still carry both names.' },
      { q: 'What does Fidelis Care NJ pay for ABA?', a: 'Unverified — no fee schedule or ABA rate document is published. Your provider contract is the only source of truth; benchmark against the state FFS schedule ($15.00/unit 97153, $21.25 97155, $25.00 97151/97156).' },
      { q: 'Can NJ FamilyCare ABA be delivered by telehealth, including the 97151 assessment?', a: 'Yes. N.J.S.A. 30:4D-6k requires NJ FamilyCare to cover telehealth on the same basis as in-person care, with no originating-site restriction, so the child can be at home. That includes the 97151 assessment and 97155 supervision when medically necessary. No state ABA document sets a code list or POS, so confirm billing with the MCO.' },
      { q: 'Does Fidelis Care NJ accept retroactive ABA authorization requests?', a: 'Only when the member became eligible with Fidelis retroactively, or in an emergency where the payer was unknown. Fidelis then reviews the services against the same criteria it uses before services.' },
    ],
  },

  'unitedhealthcare-community-plan-new-jersey': {
    slug: 'unitedhealthcare-community-plan-new-jersey',
    family: 'unitedhealthcare',
    cardDesc: 'Optum-run; no comprehensive eval needed, school setting OK outside school hours, Provider Express intake.',
    assessmentPA: {
      value: 'Required — NJ FamilyCare baseline; ABA/DIR requests via Optum\'s dedicated NJ ABA path on Provider Express (BH intake 1-888-362-3368, option 3)',
      status: 'verified',
      cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'DMAHS BH Integration Points of Contact V3.1 (per-MCO ABA contacts)', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' }],
    },
    treatmentPA: {
      value: 'Required — via the Provider Express NJ ABA request path; authorization inquiry at providerexpress.com',
      status: 'verified',
      cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'DMAHS BH Integration Points of Contact V3.1 (per-MCO ABA contacts)', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD (F84.0–F84.9) by a physician or psychologist; a comprehensive diagnostic evaluation is NOT required (BH803ABASTM12026)',
      status: 'verified',
      cites: [{ title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
    },
    payer: 'UnitedHealthcare Community Plan (NJ FamilyCare)',
    state: 'NJ', kind: 'medicaid-mco', parent: 'NJ FamilyCare',
    intakeGates: {
      ageLimit: {
        value:
          'Two published numbers, and they differ in precision rather than in substance. The founding DMAHS newsletter sets the benefit for "any Medicaid eligible child, under the age of 21, who has been diagnosed with ASD as defined by ICD 10 diagnoses F84.0 through F84.9 by a qualified healthcare provider," delivered under EPSDT, which reaches "individuals under the age of twenty-one." Optum\'s New Jersey Medicaid entry adds the floor as well as the ceiling: "ABA services shall be made available to children 18 months to 21 years of age based on medical necessity," and its NJ FamilyCare provider orientation repeats it — "Must be 18 months – 21 years old," including in the specialized FamilyCare carve-out. No hour caps are attached to the age band. This is the plan the 18-month floor comes from: Optum\'s NJ FamilyCare provider orientation states it directly — "Must be 18 months – 21 years old," "Must have Autism Diagnosis" — and extends it to the specialized FamilyCare carve-out. Flag edge cases at either end early.',
        status: 'verified',
        cites: [{ title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Optum/UHC Community Plan — NJ FamilyCare ABA Provider Orientation (2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/njaba/NJ.FamilyCare.Medicaid.ABA.pdf' }],
      },
      dxRecency: {
        value:
          'Not published. Neither the DMAHS newsletter nor Optum\'s New Jersey entry sets a maximum age for the diagnostic evaluation, and the state\'s written position runs the other way: Optum\'s NJ Medicaid entry says flatly that "A comprehensive diagnostic evaluation is not required to access ABA services," so there is no comprehensive evaluation whose recency could be gated. What is dated in New Jersey is the authorization rather than the diagnosis — Horizon issues 32 units of 97151 valid for 30 days, and treatment authorizations run in 6-month spans. Optum\'s NJ entry was specifically revised in the November 18, 2025 interim review, so the no-comprehensive-evaluation position reflects current Optum thinking rather than a legacy line.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
        verifyVia:
          'The Optum Care Advocate, or BH intake at 1-888-362-3368 (option 3); the dedicated NJ ABA path lives on Provider Express.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'New Jersey names them twice, and the second list is narrower than the first. The newsletter\'s general test: "The need for ABA services must be determined by a qualified healthcare professional (QHP) capable of making a diagnosis of autism. QHPs include licensed health care professionals, who are qualified by education, training, or licensure/regulation (when applicable) to perform a professional service within his/her scope of practice." The enumerated list of acceptable QHPs "for the diagnosis and treatment planning for adaptive behavior services" is then: Physicians; Psychologists, which "Requires an active board certified behavior analyst (BCBA) certification in good standing and a qualifying doctoral-level degree (BCBA-D)"; and BCBAs, who appear for treatment planning rather than diagnosis. Optum\'s NJ entry restates the split: the diagnosis comes from "a physician or psychologist," and "It is not uncommon for one QHP to make the diagnosis (such as a physician) and a separate QHP (such as a BCBA) to develop and supervise the treatment plan." Optum\'s NJ entry is the document that states this most plainly: "The need for ABA services must be determined by a qualified healthcare professional (QHP) capable of making a diagnosis of autism, such as a physician or psychologist."',
        status: 'verified',
        cites: [{ title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
      },
      diagnosticTools: {
        value:
          'None required — and New Jersey is one of the few states that says so in terms. Optum\'s NJ Medicaid entry: "A comprehensive diagnostic evaluation is not required to access ABA services," with "ABA services … available to any child diagnosed with autism spectrum disorder as defined by ICD-10 diagnoses F84.0 through F84.9." The DMAHS newsletter names no instrument either. That makes this the friendliest diagnostic bar of the three states on this page — intake should not queue a New Jersey family for an ADOS-2 before starting the authorization. This is the plan that publishes the sentence — do not hold a UnitedHealthcare Community Plan family waiting on a full diagnostic workup.',
        status: 'verified',
        cites: [{ title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      referral: {
        value:
          'No PCP referral and no physician order. The sequence the state sets is QHP determination, then MCO authorization: "Once an individual is properly diagnosed with ASD, the MCO shall authorize a QHP to assess the child for the development of a proposed treatment plan," and treatment follows "Contingent upon approval of the treatment plan." The genuine intake asset sits one step earlier — members still fee-for-service pending MCO enrollment are covered through Gainwell with no prior authorization required at all, so enrollment status, not a referral, is the routing question. Plan practice adds paperwork rather than a referral: Horizon wants an ASD diagnosis "script" from a QHP attached to the assessment request, which is the diagnosis document under another name. On this plan the paperwork route is Optum\'s: ABA and DIR requests go through the dedicated NJ ABA path on Provider Express (navigate from providerexpress.com — the saved abaNJ.html URL returned a 404 in mid-2026), with general behavioral-health PA by phone at 1-888-362-3368, option 3.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      telehealth: {
        value:
          'The one New Jersey plan with a published ABA telehealth rule, and it is specific. Optum allows BCBAs and licensed BH clinicians within contracted ABA practices to deliver ABA supervision and caregiver training by telehealth, but only after the practice becomes an approved Optum virtual-visits provider by attestation on Provider Express, and only if it alerts the Care Advocate that the services will be virtual while completing the authorization. Billing is then plain: "include the same procedure code you would use for an in-person service, 97155 or 97156, on your claim with the “02” place of service code." Direct technician treatment is not inside the carve-out, and the state publishes no ABA telehealth rule of its own. State law sits underneath: N.J.S.A. 30:4D-6k (as amended by P.L.2021, c.310) requires NJ FamilyCare to cover telehealth "on the same basis as" in person, without originating-site restrictions.',
        status: 'verified',
        cites: [{ title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' }, { title: 'Optum/UHC Community Plan — NJ FamilyCare ABA Provider Orientation (2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/njaba/NJ.FamilyCare.Medicaid.ABA.pdf' }],
      },
      authTurnaround: {
        value:
          'UnitedHealthcare Community Plan of New Jersey\'s manual (2025 edition) prints: non-urgent pre-service "Within 14 calendar days from the receipt of the request"; urgent/expedited pre-service "Within 24 hours of receipt of the necessary information, but no later than 72 hours after receipt"; concurrent review within 24 hours or the next business day. Federal floor for every NJ FamilyCare MCO: standard decisions within 7 calendar days of the request for contract rating periods starting on or after January 1, 2026 (14 days before that), extendable by up to 14 calendar days at the member\'s or provider\'s request or when the plan justifies needing more information; expedited within 72 hours. Treat 7 calendar days as the ceiling for any contract year that began on or after January 1, 2026. ABA authorizations run through Optum.',
        status: 'verified',
        cites: [
          { title: 'UnitedHealthcare Community Plan of New Jersey — Care Provider Manual (2025)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/NJ-Care-Provider-Manual.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'UHC Community Plan of New Jersey: bill the commercial plan first (the manual\'s own example is a member covered as a dependent on a parent\'s plan: "the commercial plan is primary and must be billed first"), then submit COB claims "within 60 days from the date of the primary insurer\'s EOB or 180 days from the dates of service, whichever is later," with evidence of the first payer\'s payment. On authorization the manual is blunt: "Unless we have given prior authorization, we are not liable for payment if the other payer refuses payment due to a determination that the services provided were not medically necessary" — get UHC/Optum\'s authorization as well. State rule underneath: NJ FamilyCare pays last: "All TPL, for example, health insurance, Medicare, CHAMPUS, prepaid health plans… shall, if available, be used first and to the fullest extent." Bill the commercial plan first; supplementation claims "shall not be filed with the program unless accompanied by a statement of payment, Explanation of Benefits (EOB), or denial from the other carrier." Two traps: "No program payments shall be made when the third-party payer requires a contracting or participating provider to accept that third-party payer\'s payment as payment in full," and when NJ FamilyCare is secondary it pays the lesser of its allowed amount minus other payments, or the patient liability. TRICARE and CHAMPVA both pay ahead of Medicaid: TRICARE rules state "Medicaid is not a double coverage plan. In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer," and CHAMPVA "assumes primary payer status" over Medicaid.',
        status: 'verified',
        cites: [
          { title: 'UnitedHealthcare Community Plan of New Jersey — Care Provider Manual (2025)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/NJ-Care-Provider-Manual.pdf' },
          { title: 'Optum — UHC Community Plan of NJ Behavioral Health Provider Network Manual Addendum (2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/ourNetworkMain/welcomeNtwk/nj/njMedicaidManual.pdf' },
          { title: 'N.J.A.C. 10:49-7.3 — Third-party liability (TPL) benefits (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-10-49-7-3' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.272 — CHAMPVA benefit limitations; Medicaid exception (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.272' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Optum runs looser than the state on paper: its NJ FamilyCare ABA provider orientation asks only that behavior technicians be high school graduates who \u201creceive appropriate training and supervision by BCBAs,\u201d with the BCBA performing skills assessments and providing \u201cdirect supervision of BCaBAs/Behavior Technicians in joint sessions.\u201d No percentage floor or caseload cap is published. Because state FFS policy names the RBT as the technician provider for 97152/97153, hire to the RBT standard \u2014 it satisfies both.',
        status: 'verified',
        cites: [{ title: 'Optum/UHC Community Plan \u2014 NJ FamilyCare ABA Provider Orientation (2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/njaba/NJ.FamilyCare.Medicaid.ABA.pdf' }, { title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
      },
      concurrentBilling: {
        value:
          'New Jersey says yes, in writing, and draws the line precisely. \u201cIf the QHP is overseeing the activities of the technician, the time of direct supervision by the QHP shall be concurrently billable using code 97155.\u201d But \u201cbilling for 97155 is limited to time where the QHP is either engaged directly with the patient or is directing a technician in implementing a modified protocol with the patient. Billing for supervision where the technician is not present is not allowed.\u201d Two other concurrency rules ride along: 97156 may be billed while the RBT delivers direct treatment to the child \u201cin a separate location\u201d; and for 0373T \u201cproviders may not bill for the QHP time concurrently\u201d and billing is limited to a single technician\u2019s face-to-face time, never the combined time of multiple technicians (three technicians for two hours bills eight units, not twenty-four). This is NJ FamilyCare state policy and the operative floor for UnitedHealthcare Community Plan; no plan-specific deviation was found in UnitedHealthcare Community Plan\u2019s published material.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
        verifyVia:
          'UnitedHealthcare Community Plan provider services, to confirm the plan has not layered its own concurrency edit on top.',
      },
      dailyLimits: {
        value:
          'New Jersey publishes its own table rather than adopting a CMS MUE regime, and labels it guidance: the limits \u201care for guidance purposes only and may be overridden when medically necessary based on individual need\u201d under EPSDT. Per day, in 15-minute units: 97151 32, 97152 8, 97153 32, 97154 12, 97155 24, 97156 16, 97157 16, 97158 16, 0362T 8, 0373T 32. Treat them as soft ceilings the plans enforce as edits \u2014 a request above them needs explicit EPSDT medical-necessity framing rather than a quiet resubmission. UnitedHealthcare Community Plan publishes no daily table of its own, so the state guide is what to plan against.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
        verifyVia:
          'UnitedHealthcare Community Plan\u2019s provider manual / claim-edit list.',
      },
      noteSignature: {
        value:
          'Neither the state nor UnitedHealthcare Community Plan publishes a session-note signature rule for ABA \u2014 no named signer and no timeframe.',
        status: 'unverified',
        verifyVia:
          'UnitedHealthcare Community Plan\u2019s provider manual documentation chapter, or DMAHS\u2019s Autism Line (609-588-8522).',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'This one has moved and the two live sources disagree. The founding DMAHS newsletter is flat: \u201cABA services may be provided in the therapist\u2019s office, a community setting or the child\u2019s home. Services may not be provided within a school facility.\u201d Optum\u2019s ABA State Mandates document (annual review 7/2026), whose NJ Medicaid entry tracks the same state policy, now reads: \u201cServices may be provided in the school setting as long as services are not provided during normal school hours.\u201d Office, home and community are settled; school is plan-dependent and moving; group home is addressed by neither. Optum adds one concrete billing instruction for the virtual half: ABA supervision and caregiver training delivered by telehealth are billed with the same code you would use in person \u2014 97155 or 97156 \u2014 plus place-of-service 02, and the practice must first be an approved Optum virtual-visits provider (attestation on Provider Express) and must flag virtual delivery to the Care Advocate at authorization.',
        status: 'plan-dependent',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 \u2014 NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Optum/UHC Community Plan \u2014 NJ FamilyCare ABA Provider Orientation (2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/njaba/NJ.FamilyCare.Medicaid.ABA.pdf' }],
        verifyVia:
          'Optum Care Advocate, for whether school-setting delivery is authorized on a given member.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'Optum requires an NPI and taxonomy codes on every claim submitted for reimbursement. Which NPI carries technician-delivered 97153 \u2014 agency, supervising analyst, or rendering technician \u2014 is not stated in the NJ FamilyCare orientation; the state\u2019s own rule is that RBTs and BCaBAs are listed under the enrolled ABA Treatment Provider\u2019s agency enrollment rather than enrolled as billing providers.',
        status: 'unverified',
        cites: [{ title: 'Optum/UHC Community Plan \u2014 NJ FamilyCare ABA Provider Orientation (2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/njaba/NJ.FamilyCare.Medicaid.ABA.pdf' }, { title: 'NJMMIS \u2014 ABA Treatment Provider FFS enrollment packet (Gainwell)', url: 'https://www.njmmis.com/documentDownload.aspx?document=Applied_Behavior_Analysis.pdf' }],
        verifyVia:
          'Optum/UnitedHealthcare Community Plan provider services for the rendering-provider field on NJ FamilyCare ABA claims.',
        blocker: 'per-case',
      },
    },
    pill: 'Payer Guide · UHC Community Plan (NJ)',
    h1: 'UnitedHealthcare Community Plan of New Jersey ABA coverage (NJ FamilyCare MCO).',
    metaTitle: 'UHC Community Plan New Jersey (NJ FamilyCare) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan administers NJ FamilyCare ABA through Optum — the November 2025 NJ criteria (no comprehensive evaluation required, ages 18 months to 21, school setting outside school hours), Provider Express intake, and contacts.',
    intro: [
      'UnitedHealthcare Community Plan administers its NJ FamilyCare ABA benefit through Optum Behavioral Health, governed by Optum\'s ABA supplemental criteria plus a dedicated New Jersey Medicaid entry in the ABA State Mandates document (BH803ABASTM12026, revised November 18, 2025, effective January 2026). Substantively it follows the state benefit design — but wraps it in Optum\'s Provider Express intake, forms, and documentation culture, a different operational world from the state baseline. Two of its written positions are genuinely family-friendly: no comprehensive diagnostic evaluation is required, and school-setting services are permitted outside normal school hours.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'NJ FamilyCare MCO — BH administered by Optum' },
      { label: 'Clinical rules', value: 'Optum ABA criteria + a dedicated NJ Medicaid entry (rev. 11/18/2025)' },
      { label: 'Diagnosis bar', value: 'ASD dx by physician/psychologist — comprehensive evaluation NOT required' },
      { label: 'Ages', value: '18 months to 21 years, by medical necessity — no stated hour caps' },
      { label: 'School setting', value: 'Permitted outside normal school hours (newer than the state\'s 2020 rule)' },
      { label: 'Submission', value: 'Provider Express NJ ABA path; BH intake 1-888-362-3368 (opt. 3); payer ID 87726' },
    ],
    sections: [
      {
        h2: 'The Optum NJ entry: the friendliest diagnosis bar in the state',
        body: [
          'Optum\'s NJ Medicaid entry states explicitly that "a comprehensive diagnostic evaluation is not required to access ABA services" — any physician or psychologist ASD diagnosis (F84.0–F84.9) opens the benefit, for members 18 months to 21 years, with coverage keyed to medical necessity and no stated NJ hour caps. It also enumerates the QHP roles and permits services in the school setting as long as they don\'t occur during normal school hours — a newer, looser position than the state\'s 2020 "no school facility" rule. For intake this means: don\'t hold a UHC family waiting on a full diagnostic workup, and don\'t rule out after-school programming on school grounds. The NJ entry was specifically revised in the November 18, 2025 interim review, so it reflects current Optum thinking.',
        ],
        cites: [
          { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'Submission mechanics and contacts',
        body: [
          'ABA and DIR requests submit through Optum\'s dedicated NJ ABA page on Provider Express (the state\'s own contact document links abaNJ.html — the direct URL returned a 404 in mid-2026, so navigate from providerexpress.com rather than a saved bookmark); general behavioral-health PA runs by phone at 1-888-362-3368, option 3 for intake, and claims use payer ID 87726. Optum also maintains a dedicated Network Manager for Autism Services — Joelle Carrion (jcarrion@optum.com, 612-474-7148) — a named human for contracting and escalation that most plans don\'t offer. Rates are unverified: no NJ ABA fee schedule is published, so your Optum participation agreement is the source of truth.',
        ],
        cites: [
          { title: 'DMAHS BH Integration Points of Contact V3.1 — UHC/Optum ABA contacts', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' },
          { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'Does UnitedHealthcare Community Plan of New Jersey allow retroactive authorization for ABA?',
        body: [
          'Only in unusual circumstances. Behavioral health for this plan, ABA included, runs through Optum, and the NJ Medicaid addendum says providers must follow both the UHC Community Plan manual and the Optum National Network Manual; the addendum lists ABA as "Covered with prior authorization" on every NJ FamilyCare plan. The national manual: "On occasion, emergent or other unusual circumstances will interfere with the prior authorization processes. In those cases, requests for a retrospective review of services must be submitted within 180 calendar days of the date(s) of service, unless otherwise mandated by state law." A request must explain why prior authorization was not obtained and include the medical record; it is processed "at the sole discretion of Optum," decided within 30 calendar days, and requests outside the time frame "will not be processed."',
        ],
        cites: [
          { title: 'Optum — UHC Community Plan of NJ Behavioral Health Provider Network Manual Addendum (2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/ourNetworkMain/welcomeNtwk/nj/njMedicaidManual.pdf' },
          { title: 'Optum Behavioral Health — National Network Manual (effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'ASD diagnosis — any physician/psychologist', desc: 'No comprehensive evaluation needed; a plain dx opens the benefit. Don\'t queue families for a full workup first.' },
      { title: 'Age check (18 months–21 years)', desc: 'Optum\'s NJ entry states the range explicitly — flag edge cases early.' },
      { title: 'Optum credentialing status', desc: 'ABA runs on the Optum behavioral network via Provider Express — separate from UHC medical.' },
      { title: 'School-setting plans', desc: 'Billable outside normal school hours per Optum\'s NJ entry — capture the school schedule to design around it.' },
    ],
    sources: [
      { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'DMAHS BH Integration Points of Contact V3.1 — UHC/Optum ABA contacts', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' },
      { title: 'Optum/UHC Community Plan \u2014 NJ FamilyCare ABA Provider Orientation (2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/njaba/NJ.FamilyCare.Medicaid.ABA.pdf' },
      { title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
      { title: 'NJMMIS \u2014 ABA Treatment Provider FFS enrollment packet (Gainwell)', url: 'https://www.njmmis.com/documentDownload.aspx?document=Applied_Behavior_Analysis.pdf' },
      { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
      { title: 'Optum — UHC Community Plan of NJ Behavioral Health Provider Network Manual Addendum (2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/ourNetworkMain/welcomeNtwk/nj/njMedicaidManual.pdf' },
      { title: 'Optum Behavioral Health — National Network Manual (effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
    ],
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of New Jersey cover ABA?', a: 'Yes — the NJ FamilyCare ABA benefit, administered by Optum Behavioral Health under Optum\'s criteria plus a dedicated NJ Medicaid entry (revised November 2025). Requests go through Provider Express\'s NJ ABA path.' },
      { q: 'Does UHC NJ Medicaid require a comprehensive diagnostic evaluation for ABA?', a: 'No — Optum\'s NJ entry says so explicitly. An ASD diagnosis (F84.0–F84.9) from any physician or psychologist opens the benefit for members 18 months to 21 years.' },
      { q: 'Can ABA be delivered in schools for UHC NJ members?', a: 'Yes, outside normal school hours — Optum\'s NJ entry permits school-setting services as long as they don\'t occur during the school day, a looser position than the state\'s original 2020 rule.' },
      { q: 'Does UHC Community Plan NJ allow retro authorization for ABA?', a: 'Only when emergent or unusual circumstances prevented prior authorization. Optum accepts a retrospective review request within 180 days of service, with the reason and the medical record, and decides within 30 days at its discretion.' },
    ],
  },

  'wellpoint-new-jersey': {
    slug: 'wellpoint-new-jersey',
    family: 'anthem',
    cardDesc: 'Ex-Amerigroup Elevance plan; state-baseline ABA via Availity, with Carelon running the BH network.',
    assessmentPA: {
      value: 'Required — NJ FamilyCare baseline; ABA authorization via Availity or (800) 454-3730',
      status: 'verified',
      cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'DMAHS BH Integration Points of Contact V3.1 (per-MCO ABA contacts)', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' }],
    },
    treatmentPA: {
      value: 'Required — same channel; outpatient Medicaid fax (844) 442-8007',
      status: 'verified',
      cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'DMAHS BH Integration Points of Contact V3.1 (per-MCO ABA contacts)', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD (F84.0–F84.9) by a qualified healthcare professional (state baseline)',
      status: 'verified',
      cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
    },
    payer: 'Wellpoint New Jersey (formerly Amerigroup)',
    state: 'NJ', kind: 'medicaid-mco', parent: 'NJ FamilyCare',
    intakeGates: {
      ageLimit: {
        value:
          'Two published numbers, and they differ in precision rather than in substance. The founding DMAHS newsletter sets the benefit for "any Medicaid eligible child, under the age of 21, who has been diagnosed with ASD as defined by ICD 10 diagnoses F84.0 through F84.9 by a qualified healthcare provider," delivered under EPSDT, which reaches "individuals under the age of twenty-one." Optum\'s New Jersey Medicaid entry adds the floor as well as the ceiling: "ABA services shall be made available to children 18 months to 21 years of age based on medical necessity," and its NJ FamilyCare provider orientation repeats it — "Must be 18 months – 21 years old," including in the specialized FamilyCare carve-out. No hour caps are attached to the age band. Wellpoint New Jersey publishes no deviation from this, and its own material was checked for one.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      dxRecency: {
        value:
          'Not published. Neither the DMAHS newsletter nor Optum\'s New Jersey entry sets a maximum age for the diagnostic evaluation, and the state\'s written position runs the other way: Optum\'s NJ Medicaid entry says flatly that "A comprehensive diagnostic evaluation is not required to access ABA services," so there is no comprehensive evaluation whose recency could be gated. What is dated in New Jersey is the authorization rather than the diagnosis — Horizon issues 32 units of 97151 valid for 30 days, and treatment authorizations run in 6-month spans.',
        status: 'unverified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'Wellpoint New Jersey provider services ((833) 731-2149 / (800) 454-3730), and Carelon Behavioral Health (provider.relations.NJ@carelon.com), which runs the ABA network.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'New Jersey names them twice, and the second list is narrower than the first. The newsletter\'s general test: "The need for ABA services must be determined by a qualified healthcare professional (QHP) capable of making a diagnosis of autism. QHPs include licensed health care professionals, who are qualified by education, training, or licensure/regulation (when applicable) to perform a professional service within his/her scope of practice." The enumerated list of acceptable QHPs "for the diagnosis and treatment planning for adaptive behavior services" is then: Physicians; Psychologists, which "Requires an active board certified behavior analyst (BCBA) certification in good standing and a qualifying doctoral-level degree (BCBA-D)"; and BCBAs, who appear for treatment planning rather than diagnosis. Optum\'s NJ entry restates the split: the diagnosis comes from "a physician or psychologist," and "It is not uncommon for one QHP to make the diagnosis (such as a physician) and a separate QHP (such as a BCBA) to develop and supervise the treatment plan." No Wellpoint-specific diagnostician list is published.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      diagnosticTools: {
        value:
          'None required — and New Jersey is one of the few states that says so in terms. Optum\'s NJ Medicaid entry: "A comprehensive diagnostic evaluation is not required to access ABA services," with "ABA services … available to any child diagnosed with autism spectrum disorder as defined by ICD-10 diagnoses F84.0 through F84.9." The DMAHS newsletter names no instrument either. That makes this the friendliest diagnostic bar of the three states on this page — intake should not queue a New Jersey family for an ADOS-2 before starting the authorization. Wellpoint New Jersey publishes no deviation from this, and its own material was checked for one.',
        status: 'verified',
        cites: [{ title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
      },
      referral: {
        value:
          'No PCP referral and no physician order. The sequence the state sets is QHP determination, then MCO authorization: "Once an individual is properly diagnosed with ASD, the MCO shall authorize a QHP to assess the child for the development of a proposed treatment plan," and treatment follows "Contingent upon approval of the treatment plan." The genuine intake asset sits one step earlier — members still fee-for-service pending MCO enrollment are covered through Gainwell with no prior authorization required at all, so enrollment status, not a referral, is the routing question. Plan practice adds paperwork rather than a referral: Horizon wants an ASD diagnosis "script" from a QHP attached to the assessment request, which is the diagnosis document under another name. One Wellpoint-specific routing fact costs weeks when it is discovered late, and it is not a clinical gate: ABA network contracting runs through Carelon Behavioral Health, separately from the Wellpoint medical plan, so being contracted for medical services does not put a practice in the ABA network. Authorization itself submits through Availity or (800) 454-3730.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
      },
      telehealth: {
        value:
          'The plan publishes no ABA telehealth rule of its own, so the state statute governs. N.J.S.A. 30:4D-6k (as amended by P.L.2021, c.310) requires the State Medicaid and NJ FamilyCare programs to "provide coverage and payment for health care services delivered to a benefits recipient through telemedicine or telehealth, on the same basis as" in person, for services otherwise covered in person, with payment to the practitioner or the employing agency. The programs may limit coverage to participating providers, but may not restrict the originating site (the child\'s home counts) or the distant site except to keep the in-person standard of care, may not restrict the platform (audio-only included) if it meets that standard and HIPAA, and may not require a member to use telehealth instead of in-person care. Coverage can still be limited to medically necessary services. No DMAHS ABA document names an ABA telehealth code list, POS or in-person supervision minimum, so the 97151 assessment and 97155 supervision are covered by telehealth on the same basis as in person when medically necessary, and billing details come from the MCO.',
        status: 'verified',
        cites: [
          { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
          { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Wellpoint New Jersey\'s manual (June 2025): "Prior authorization decisions for non-emergency services shall be made within 14 calendar days or sooner as required by the needs of the enrollee," with denials in writing under the Health Claims Authorization, Processing and Payment Act. Federal floor for every NJ FamilyCare MCO: standard decisions within 7 calendar days of the request for contract rating periods starting on or after January 1, 2026 (14 days before that), extendable by up to 14 calendar days at the member\'s or provider\'s request or when the plan justifies needing more information; expedited within 72 hours. Treat 7 calendar days as the ceiling for any contract year that began on or after January 1, 2026. An incomplete request is not approved — Wellpoint notifies you to send the missing documentation, so the file you submit sets the clock.',
        status: 'verified',
        cites: [
          { title: 'Wellpoint New Jersey — Provider Manual (June 2025)', url: 'https://www.provider.wellpoint.com/docs/gpp/NJ_WLP_Provider_Manual.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Wellpoint\'s manual: "If you\'re aware of third-party coverage, you must submit a claim first to the appropriate third party before submitting a claim to us." COB claims are due "within 60 days from the date of the primary insurer\'s Explanation of Benefits (EOB) or 180 days from the dates of service, whichever is later," and Wellpoint pays its allowable minus the primary\'s payment. The rule that bites ABA: "If the third-party liability did not pay for a service because the member or provider did not follow the third-party payer\'s guidelines, the service will not be paid by Wellpoint" — so the commercial plan\'s authorization and network rules must be met. Wellpoint lists pay-first-and-recover exceptions including "preventive pediatric services (including EPSDT services)" and a child in DCP&P out-of-home placement. State rule underneath: NJ FamilyCare pays last: "All TPL, for example, health insurance, Medicare, CHAMPUS, prepaid health plans… shall, if available, be used first and to the fullest extent." Bill the commercial plan first; supplementation claims "shall not be filed with the program unless accompanied by a statement of payment, Explanation of Benefits (EOB), or denial from the other carrier." Two traps: "No program payments shall be made when the third-party payer requires a contracting or participating provider to accept that third-party payer\'s payment as payment in full," and when NJ FamilyCare is secondary it pays the lesser of its allowed amount minus other payments, or the patient liability. TRICARE and CHAMPVA both pay ahead of Medicaid: TRICARE rules state "Medicaid is not a double coverage plan. In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer," and CHAMPVA "assumes primary payer status" over Medicaid.',
        status: 'verified',
        cites: [
          { title: 'Wellpoint New Jersey — Provider Manual (June 2025)', url: 'https://www.provider.wellpoint.com/docs/gpp/NJ_WLP_Provider_Manual.pdf' },
          { title: 'Wellpoint New Jersey — Provider Quick Reference Guide', url: 'https://www.provider.wellpoint.com/docs/gpp/NJ_WLP_CAID_ProviderQRG.pdf' },
          { title: 'N.J.A.C. 10:49-7.3 — Third-party liability (TPL) benefits (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-10-49-7-3' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.272 — CHAMPVA benefit limitations; Medicaid exception (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.272' },
        ],
      },
    },
    deliveryRules: {
      concurrentBilling: {
        value:
          'New Jersey says yes, in writing, and draws the line precisely. \u201cIf the QHP is overseeing the activities of the technician, the time of direct supervision by the QHP shall be concurrently billable using code 97155.\u201d But \u201cbilling for 97155 is limited to time where the QHP is either engaged directly with the patient or is directing a technician in implementing a modified protocol with the patient. Billing for supervision where the technician is not present is not allowed.\u201d Two other concurrency rules ride along: 97156 may be billed while the RBT delivers direct treatment to the child \u201cin a separate location\u201d; and for 0373T \u201cproviders may not bill for the QHP time concurrently\u201d and billing is limited to a single technician\u2019s face-to-face time, never the combined time of multiple technicians (three technicians for two hours bills eight units, not twenty-four). This is NJ FamilyCare state policy and the operative floor for Wellpoint New Jersey; no plan-specific deviation was found in Wellpoint New Jersey\u2019s published material.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
        verifyVia:
          'Wellpoint New Jersey provider services, to confirm the plan has not layered its own concurrency edit on top.',
      },
      dailyLimits: {
        value:
          'New Jersey publishes its own table rather than adopting a CMS MUE regime, and labels it guidance: the limits \u201care for guidance purposes only and may be overridden when medically necessary based on individual need\u201d under EPSDT. Per day, in 15-minute units: 97151 32, 97152 8, 97153 32, 97154 12, 97155 24, 97156 16, 97157 16, 97158 16, 0362T 8, 0373T 32. Treat them as soft ceilings the plans enforce as edits \u2014 a request above them needs explicit EPSDT medical-necessity framing rather than a quiet resubmission. Wellpoint New Jersey publishes no daily table of its own, so the state guide is what to plan against.',
        status: 'verified',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }],
        verifyVia:
          'Wellpoint New Jersey\u2019s provider manual / claim-edit list.',
      },
      noteSignature: {
        value:
          'Neither the state nor Wellpoint New Jersey publishes a session-note signature rule for ABA \u2014 no named signer and no timeframe.',
        status: 'unverified',
        verifyVia:
          'Wellpoint New Jersey\u2019s provider manual documentation chapter, or DMAHS\u2019s Autism Line (609-588-8522).',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'This one has moved and the two live sources disagree. The founding DMAHS newsletter is flat: \u201cABA services may be provided in the therapist\u2019s office, a community setting or the child\u2019s home. Services may not be provided within a school facility.\u201d Optum\u2019s ABA State Mandates document (annual review 7/2026), whose NJ Medicaid entry tracks the same state policy, now reads: \u201cServices may be provided in the school setting as long as services are not provided during normal school hours.\u201d Office, home and community are settled; school is plan-dependent and moving; group home is addressed by neither. Neither position is republished by Wellpoint New Jersey, so resolve it with the plan before scheduling school-based sessions.',
        status: 'plan-dependent',
        cites: [{ title: 'DMAHS Provider Newsletter Vol 30 No 06 \u2014 Provision of ABA services (4/1/2020)', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' }, { title: 'Optum ABA State Mandates BH803ABASTM12026 \u2014 NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'Wellpoint New Jersey provider services.',
        blocker: 'per-case',
      },
    },
    pill: 'Payer Guide · Wellpoint (NJ)',
    h1: 'Wellpoint New Jersey ABA coverage (NJ FamilyCare MCO).',
    metaTitle: 'Wellpoint New Jersey (NJ FamilyCare) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Wellpoint (formerly Amerigroup New Jersey) administers NJ FamilyCare ABA — state-baseline coverage with the behavioral network run through Carelon, Availity authorization channels, the separate Carelon contracting funnel, and named ABA contacts.',
    intro: [
      'Wellpoint New Jersey — the Elevance plan formerly branded Amerigroup — administers the NJ FamilyCare ABA benefit as a state-baseline plan: no distinct ABA clinical criteria, unit caps, or fee schedule have been published. Its defining structural quirk is that the behavioral-health network runs through Carelon Behavioral Health, which means ABA contracting is a separate funnel from the medical plan — a routing fact that costs weeks when discovered late. Authorization itself flows through familiar Availity plumbing.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'NJ FamilyCare MCO (Elevance; formerly Amerigroup NJ)' },
      { label: 'Clinical rules', value: 'State baseline — no NJ-specific published ABA policy found' },
      { label: 'Prior auth', value: 'Required per the state benefit; via Availity or (800) 454-3730' },
      { label: 'BH network / UM', value: 'Carelon Behavioral Health — a separate contracting funnel' },
      { label: 'Unit caps / rates', value: 'Unverified — nothing published; confirm directly with the plan' },
      { label: 'Claims', value: 'Availity, payor ID WLPNT; provider services (833) 731-2149' },
    ],
    sections: [
      {
        h2: 'State-baseline rules, Carelon plumbing',
        body: [
          'With no published Wellpoint-specific ABA criteria, plan requests against the NJ FamilyCare baseline: ASD diagnosis from a QHP, MCO-authorized assessment, treatment contingent on plan approval, and the state daily unit guide as the likely edit surface. Mechanically, ABA authorization submits through Availity (availity.com) or by phone at (800) 454-3730, with forms at provider.wellpoint.com/new-jersey-provider/resources/forms and outpatient Medicaid fax (844) 442-8007. Because hour caps and rates are unpublished, confirm authorization spans and unit handling with the plan before the first submission — and treat your contract as the only rate source.',
        ],
        cites: [
          { title: 'DMAHS BH Integration Points of Contact V3.1 — Wellpoint ABA contacts', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' },
          { title: 'DMAHS Provider Newsletter Vol 30 No 06 — the state baseline', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
        ],
      },
      {
        h2: 'The Carelon funnel, and who to call',
        body: [
          'ABA network contracting runs through Carelon Behavioral Health (provider.relations.NJ@carelon.com) — a separate funnel from the Wellpoint medical plan, so a practice contracted for medical services isn\'t automatically in the ABA network. The named ABA clinical contact is Ann Basil, LCSW, Director of BH Services (732-713-7636, ann.basil@wellpoint.com). Provider services runs at (833) 731-2149 / (800) 454-3730. And watch the rebrand at intake: cards and directory listings may still say Amerigroup — same plan, new name.',
        ],
        cites: [
          { title: 'DMAHS BH Integration Points of Contact V3.1 — Wellpoint ABA contacts', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' },
        ],
      },
      {
        h2: 'Does Wellpoint New Jersey allow retroactive authorization for ABA?',
        body: [
          'Wellpoint\'s New Jersey provider manual publishes no retroactive-authorization process. A missing authorization leads to an "administrative denial," which it defines as one made "when a contractual requirement is not met, such as late notification of admissions, lack of prior authorization or failure by the provider to submit clinical when requested." An appeal "must address the reason for the denial such as why prior authorization was not obtained," and if Wellpoint overturns the administrative decision, "the case will be reviewed for medical necessity and if approved, the claim will be reprocessed."',
        ],
        cites: [
          { title: 'Wellpoint New Jersey — Provider Manual (June 2025)', url: 'https://www.provider.wellpoint.com/docs/gpp/NJ_WLP_Provider_Manual.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan identity on "Amerigroup" inquiries', desc: 'Amerigroup NJ is now Wellpoint — verify the current card.' },
      { title: 'ASD diagnosis + QHP script', desc: 'The state baseline applies — collect the diagnosis and script that trigger the assessment authorization.' },
      { title: 'Carelon contracting status', desc: 'ABA contracting runs through Carelon, separately from the medical plan — confirm you\'re in the right network before quoting start dates.' },
      { title: 'Requested units vs. the state guide', desc: 'Absent published plan caps, assume the state daily unit table is the edit surface.' },
    ],
    sources: [
      { title: 'DMAHS BH Integration Points of Contact V3.1 — Wellpoint ABA contacts', url: 'https://www.nj.gov/humanservices/dmhas/documents/pdf/resources/providers/DMAHS-BH-Integration-Points-of-Contact.pdf' },
      { title: 'DMAHS Provider Newsletter Vol 30 No 06 — Provision of ABA services', url: 'https://web.archive.org/web/2023/https://www.nj.gov/humanservices/dmahs/news/Provider_Newsletter_for_Applied_Behavior_Analysis_Therapy.pdf' },
      { title: 'Optum ABA State Mandates BH803ABASTM12026 \u2014 NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'Optum/UHC Community Plan — NJ FamilyCare ABA Provider Orientation (2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/njaba/NJ.FamilyCare.Medicaid.ABA.pdf' },
      { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
      { title: 'Wellpoint New Jersey — Provider Manual (June 2025)', url: 'https://www.provider.wellpoint.com/docs/gpp/NJ_WLP_Provider_Manual.pdf' },
    ],
    faq: [
      { q: 'Does Wellpoint New Jersey cover ABA?', a: 'Yes — it administers the NJ FamilyCare ABA benefit on the state baseline (EPSDT, ASD diagnosis, MCO-authorized assessment and treatment plan), with authorization via Availity or (800) 454-3730. No plan-specific ABA criteria are published.' },
      { q: 'Is Wellpoint NJ the same as Amerigroup?', a: 'Yes — Amerigroup New Jersey rebranded to Wellpoint under Elevance. Cards and directories may still carry the old name.' },
      { q: 'How do I join Wellpoint NJ\'s ABA network?', a: 'Through Carelon Behavioral Health (provider.relations.NJ@carelon.com) — a separate contracting funnel from the Wellpoint medical plan. Being contracted for medical services doesn\'t put you in the ABA network.' },
      { q: 'Can NJ FamilyCare ABA be delivered by telehealth, including the 97151 assessment?', a: 'Yes. N.J.S.A. 30:4D-6k requires NJ FamilyCare to cover telehealth on the same basis as in-person care, with no originating-site restriction, so the child can be at home. That includes the 97151 assessment and 97155 supervision when medically necessary. No state ABA document sets a code list or POS, so confirm billing with the MCO.' },
      { q: 'Does Wellpoint NJ allow retroactive ABA authorization?', a: 'Its manual has no retro-authorization process. Services without prior authorization get an administrative denial; you can appeal by explaining why authorization was not obtained, and if Wellpoint overturns the denial it reviews medical necessity and may reprocess the claim.' },
    ],
  },

  'aetna-new-jersey': {
    slug: 'aetna-new-jersey',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the P.L. 2009, c.115 mandate layer.',
    assessmentPA: {
      value: 'Required — precertification (form GR-69017-4), per Aetna\'s behavioral health precertification list (eff. 8/1/2024) — CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [{ title: 'Aetna — Participating provider behavioral health precertification list (ABA: 97151–97158, 0362T, 0373T)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' }],
    },
    treatmentPA: {
      value: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
      status: 'verified',
      cites: [{ title: 'Aetna — Participating provider behavioral health precertification list (ABA: 97151–97158, 0362T, 0373T)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' }, { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD only (F84.0–F84.9); ABA for other diagnoses considered experimental',
      status: 'verified',
      cites: [{ title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
    },
    payer: 'Aetna in New Jersey',
    state: 'NJ', kind: 'commercial',
    intakeGates: {
      ageLimit: {
        value:
          'Aetna sets no upper age limit in its national medical-necessity criteria. The ABA Medical Necessity Guide gives age only as clinical shape, not as a gate: comprehensive ABA carries a "typical age range" of 0-7 years at 10-25 hours a week for 1-2 years, while focused ABA is listed for "All ages" at 1-20 hours a week. The binding age question is the legal layer underneath: New Jersey\'s mandate (P.L. 2009, c.115) reaches individuals under 21 on state-regulated plans, with the IHC and SEH program boards extending ABA to adults 21+ in the individual and small-employer markets from January 2015; a self-funded ERISA plan answers to its own plan document. Establish funding type before quoting an age answer. So a 21-plus New Jersey inquiry is a market-analysis question, not an automatic turn-away.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'NJ DOBI Bulletin 10-02 — Implementation of P.L. 2009, c.115', url: 'https://www.nj.gov/dobi/bulletins/blt10_02.pdf' }],
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
          'A scope-of-practice test rather than a specialty list. Aetna requires "a DSM-V diagnosis of Autism Spectrum Disorder (ICD-10: F84.0; F84.3 - F84.9) obtained by an appropriate provider," and defines that as a "licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice." Note the code range: F84.2 (Rett syndrome) sits outside the listed set, and ABA for diagnoses other than ASD is treated as experimental. One New Jersey wrinkle on the code range: DOBI\'s implementing bulletin notes carriers may exclude clear Rett and childhood disintegrative disorder diagnoses from the mandate\'s autism definition, but must still consider them under the mandate\'s developmental-disability therapy prongs — so a Rett exclusion in the carrier policy is not the end of the coverage conversation on a state-regulated plan.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'NJ DOBI Bulletin 10-02 — Implementation of P.L. 2009, c.115', url: 'https://www.nj.gov/dobi/bulletins/blt10_02.pdf' }],
      },
      diagnosticTools: {
        value:
          'Aetna names adaptive-functioning instruments, not autism diagnostic instruments. The medical-necessity criteria require demonstrated functional impairment "on a standardized scale of functioning in the past 12 months. For instance, the Vineland Adaptive Behavior Scales 3 (VABS-3), the Adaptive Behavior Assessment Scale (ABAS), VB-MAPP or ABLLS," and quality-of-care elements add "Repeated measurement with standardized measures to assess progress." No ADOS-2 or ADI-R requirement appears anywhere — the instrument Aetna asks for is the one that sizes the hours, and the level-of-impairment calculation is what justifies the number requested.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      referral: {
        value:
          'Not published. Aetna\'s ABA Medical Necessity Guide and its ABA clinical policy bulletin set a diagnosis requirement, a precertification requirement and a provider-licensure requirement, but state no referral or physician order as a condition of coverage. The gate that does exist is precertification itself — required for both the assessment and treatment.',
        status: 'unverified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
        verifyVia:
          'Aetna precertification/provider services at the number on the member\'s ID card, and the member\'s benefit document — ask whether the plan layers a referral requirement on behavioral health.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'Aetna publishes no ABA telehealth code list: its ABA materials set medical-necessity criteria and precertification for 97151–97158, 0362T and 0373T but say nothing about remote delivery. Aetna\'s provider manual (6/26) says Aetna Behavioral Health "offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out of telehealth services," and providers must hold the licensure state law requires. For a New Jersey fully insured plan, N.J.S.A. 26:2S-29 (as amended by P.L.2021, c.310) requires a carrier to cover telehealth "on the same basis as" in person for otherwise covered services, bars restrictions on the originating or distant site except to keep the in-person standard of care, and lets the carrier limit coverage to in-network providers; self-funded employer plans are outside it.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
        ],
        verifyVia: 'Availity or the precertification line on the card: ask whether the plan is fully insured in New Jersey or self-funded (and opted out of telehealth), and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured New Jersey plans follow the Ensuring Transparency in Prior Authorization Act (in force January 1, 2025): for outpatient services such as ABA, a denial must be communicated "no later than 12 days if the request is submitted in paper, or nine days if submitted through an electronic portal provided by the payer," and urgent-care determinations no later than 72 hours after receipt; if the payer asks for more information and the provider does not respond within 72 hours, the request is deemed withdrawn. Useful for reauthorizations: a prior authorization for a chronic or long-term condition "shall remain in effect for 180 days" unless a shorter period is needed with notice to the provider. Self-funded (ERISA) plans follow the federal claims rule instead: pre-service decisions within 15 days of receipt (one 15-day extension), urgent within 72 hours. Aetna\'s office manual and ABA medical-necessity guide publish no ABA-specific decision clock.',
        status: 'plan-dependent',
        cites: [
          { title: 'P.L. 2023, c.296 — Ensuring Transparency in Prior Authorization Act (N.J.S.A. 17B:30-55.1 et seq.)', url: 'https://www.nj.gov/treasury/pensions/documents/laws/ch296-2023.pdf' },
          { title: 'NJ DOBI Bulletin 24-17 — Ensuring Transparency in Prior Authorization Act', url: 'https://nj.gov/dobi/bulletins/blt24_17.pdf' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification: fully insured NJ policy (ETPAA 9/12-day clock, 180-day authorizations) vs. self-funded ERISA plan (15 days / 72 hours), plus the carrier\'s behavioral health reviewer turnaround.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two parents\' plans, New Jersey\'s group coordination-of-benefits rule (fully insured group contracts) puts the plan of "the parent whose birthday falls earlier in a year" first — month and day only; same birthday → the plan that covered the parent longer. Divorced or separated parents: the custodial parent\'s plan pays first, then the custodial parent\'s spouse\'s plan, then the non-custodial parent\'s plan, unless a court decree makes one parent responsible for the child\'s health care. Self-funded plans set their own order in the plan document. Aetna says it follows the NAIC order-of-benefit rules, "as allowed by state or federal law," including the birthday rule, and that many self-funded plans use maintenance of benefits. If the child also has TRICARE, this plan pays first — TRICARE is the secondary payer to other health insurance under its double-coverage rule (Medicaid is the only coverage it pays ahead of). CHAMPVA likewise pays last: "In double coverage situations, CHAMPVA would be the last payer." If the child also has Medicaid, this plan is primary and Medicaid pays last.',
        status: 'plan-dependent',
        cites: [
          { title: 'N.J.A.C. 11:4-28.6 — Rules for coordination of benefits (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-11-4-28-6' },
          { title: 'Aetna — Office manual for health care professionals (coordination of benefits)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.270 — CHAMPVA definitions, double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
          { title: 'N.J.A.C. 10:49-7.3 — Third-party liability (TPL) benefits (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-10-49-7-3' },
        ],
        verifyVia: 'Benefits verification with both plans: funding type, which is primary for the child, and whether the secondary plan requires its own authorization.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Aetna sets a duty, not a number. Where a state mandate, plan document or contract allows services from someone neither state-licensed nor BACB-certified, \u201cthere must be supervision and direction of the unlicensed or non-certified providers in line with practice standards.\u201d The ABA Medical Necessity Guide publishes no supervision percentage, ratio or caseload cap \u2014 the operative standard is professional practice plus whatever the contract adds. Aetna\'s Network Participation Criteria (5/26) spell out the technician tier: services "must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board," supervised staff may be a BCaBA "or a paraprofessional," and Aetna requires "A minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional "for each 10 hours of applied behavior analysis," plus the supervisor "onsite with the child at least one hour a month." "All BCBAs, BCaBAs and paraprofessionals must meet state requirements. If state requirements are not defined, all BCBAs, BCaBAs and paraprofessionals must meet Aetna standards."',
        status: 'verified',
        cites: [{ title: 'Aetna — Provider and facility participation criteria (Network Participation Criteria, 8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' }, { title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
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
          'Aetna publishes no ABA place-of-service list. On school settings it says two things. CPB 0648: "Many Aetna plans exclude coverage of educational services. For example, speech therapy or ABA services during class would be excluded under these plans. Please check benefit plan exclusions." And precertification form GR-69017-4 asks "Are any ABA hours being requested during class?" and, if so, how many and for which codes. The IEP/IDEA carve-out in Aetna\'s ABA medical necessity guide sits in its Maryland exhibit, not in the national criteria. Where ABA is payable in a school, the community or a group home is a benefit-document question. New Jersey adds a wrinkle worth checking separately: state Medicaid policy on school-setting ABA has moved since 2020, and a fully insured NJ commercial plan is bound by the state mandate rather than by Aetna\u2019s national default.',
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
    pill: 'Payer Guide · Aetna · New Jersey',
    h1: 'Aetna ABA coverage in New Jersey: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in New Jersey: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for New Jersey families — the national clinical policy, prior authorization, the P.L. 2009, c.115 mandate (ages, the parity-voided $36k cap, exemptions), New Jersey behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in New Jersey, an Aetna card means three layers at once: the carrier\'s national clinical policy, New Jersey\'s autism insurance mandate (P.L. 2009, c.115), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'P.L. 2009, c.115 (N.J.S.A. 17:48-6ii and parallel sections)' },
      { label: 'Mandate age', value: 'Under 21 in statute; IHC/SEH markets extended to adults 21+ (Jan 2015)' },
      { label: 'Mandate caps', value: '$36,000/yr in statute — voided for MHPAEA group plans (DOBI Bulletin 10-02)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans (may exclude ABA entirely)' },
      { label: 'Licensure', value: 'NJ Licensed Applied Behavior Analyst (Consumer Affairs board)' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in New Jersey',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in New Jersey is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover (Aetna\'s CPBs state that applicable state mandates take precedence for fully insured plans), while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in New Jersey.',
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
        h2: 'The New Jersey mandate: strong, and stronger than it reads',
        body: [
          'P.L. 2009, c.115 (effective February 9, 2010, codified across N.J.S.A. 17:48-6ii and parallel sections for insurers, HMOs, individual and small-employer plans, plus the SHBP and SEHBP) requires state-regulated plans to cover autism screening and diagnosis, medically necessary PT/OT/ST for autism or other developmental disabilities, and medically necessary ABA-based behavioral interventions for autism in individuals under 21 — coverage owed even when services aren\'t restorative. The statute\'s headline limitation, a $36,000/year ABA cap, is largely dead: DOBI Bulletin 10-02 held the cap cannot be applied to group health plans subject to MHPAEA, because New Jersey classifies autism as a biologically-based mental illness and dollar limits conflict with federal parity — leaving it live mainly in nongroup policies. The IHC and SEH program boards went further in amendments effective January 2015, extending ABA to adults 21+ and removing therapy visit limits in the individual and small-employer markets. Practical current state: state-regulated plans cover medically necessary ABA without dollar caps. Self-funded ERISA plans remain exempt and may exclude ABA entirely.',
        ],
        cites: [
      { title: 'NJ DOBI Bulletin 10-02 — Implementation of P.L. 2009, c.115', url: 'https://www.nj.gov/dobi/bulletins/blt10_02.pdf' },
      { title: 'Autism NJ — Amendments to Insurance Mandate Expand Coverage (eff. Jan 2015)', url: 'https://autismnj.org/news/amendments-to-insurance-mandate-expand-coverage/' },
        ],
      },
      {
        h2: 'Aetna Medicaid in New Jersey',
        body: [
          'A family saying "we have Aetna" in New Jersey may actually be on the carrier\'s Medicaid plan — Aetna Better Health of New Jersey, an NJ FamilyCare MCO — which follows the state Medicaid rules (and publishes a rate sheet mirroring the state FFS schedule), not this commercial policy. Verify which line of business the card belongs to, and use the dedicated guide for the Medicaid plan.',
        ],
      },
      {
        h2: 'Licensure & rates in New Jersey',
        body: [
          'New Jersey licenses behavior analysts through the State Board of Applied Behavior Analyst Examiners at the Division of Consumer Affairs: the Licensed Applied Behavior Analyst (LBA — master\'s or doctorate, current BCBA/BCBA-D, and the NJ jurisprudence exam) and the assistant-level LaBA, under N.J.S.A. 45:8B-91 et seq. and N.J.A.C. 13:42B. The board\'s position is that supervision in all its forms constitutes practicing behavior analysis and requires a license; RBTs are unlicensed and work under a licensee. On rates: Aetna does not publish commercial ABA fee schedules for New Jersey (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. Benchmark against NJ FamilyCare\'s published FFS schedule ($15.00/unit for 97153, $21.25 for 97155, $25.00 for 97151/97156) and treat rate-setting as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'NJ Board of Applied Behavior Analyst Examiners — FAQ', url: 'https://www.njconsumeraffairs.gov/abae/Pages/FAQ.aspx' },
        ],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA?',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) treats payment as a contract term: “The rates and compensation under your agreement are subject to the Aetna coding/claim edit policies,” and where a provider has both an intermediary contract and a direct agreement, “your direct Aetna rates will apply unless we specifically notify you otherwise.” Even when a member’s benefits run out, the provider “cannot charge them more than the contracted rate.” Get the rates from your Aetna agreement or Aetna provider services. For a public benchmark, see the NJ FamilyCare fee-for-service rates in the New Jersey Medicaid guide.',
        ],
        cites: [
          { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
        ],
      },
      {
        h2: 'Does Aetna allow retroactive authorization for ABA in New Jersey?',
        body: [
          'Aetna publishes no retroactive-authorization rule for ABA. Its provider manual (6/26) says "Applied behavior analysis (ABA) services require prior authorization" and describes prior authorization as communicating a coverage decision "before the procedure, service or supply." The process does not apply to "behavioral health benefits that we administer but do not control and self-funded plans with plan sponsors that have expressly purchased specific prior authorization requirements." On a fully insured New Jersey plan, the Ensuring Transparency in Prior Authorization Act adds two protections: a payer may not deny a claim for lack of prior authorization if you asked before the service and the payer did not answer within the legal deadline, and when a covered person moves to another payer that payer "shall accept the authorization" issued by the old one, based on its own plan\'s benefits. Self-funded employer plans are outside the Act. Ask Aetna before relying on a late request.',
        ],
        cites: [
          { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'P.L. 2023, c.296 — Ensuring Transparency in Prior Authorization Act (N.J.S.A. 17B:30-55.1 et seq.)', url: 'https://www.nj.gov/treasury/pensions/documents/laws/ch296-2023.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies, no dollar cap in practice) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Line of business', desc: 'Commercial vs. Aetna Better Health of New Jersey (NJ FamilyCare Medicaid) — different rules, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Age', desc: 'Under 21 for the statutory ABA prong — but IHC/SEH-market plans extend ABA to adults, so flag 21+ cases for market analysis rather than turning them away.' },
    ],
    sources: [
      { title: 'Aetna — Participating provider behavioral health precertification list (ABA: 97151–97158, 0362T, 0373T)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'NJ DOBI Bulletin 10-02 — Implementation of P.L. 2009, c.115', url: 'https://www.nj.gov/dobi/bulletins/blt10_02.pdf' },
      { title: 'Autism NJ — Amendments to Insurance Mandate Expand Coverage', url: 'https://autismnj.org/news/amendments-to-insurance-mandate-expand-coverage/' },
      { title: 'NJ Board of Applied Behavior Analyst Examiners — FAQ', url: 'https://www.njconsumeraffairs.gov/abae/Pages/FAQ.aspx' },
      { title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
      { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
      { title: 'Aetna — Provider and facility participation criteria (Network Participation Criteria, 8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
      { title: 'P.L. 2023, c.296 — Ensuring Transparency in Prior Authorization Act (N.J.S.A. 17B:30-55.1 et seq.)', url: 'https://www.nj.gov/treasury/pensions/documents/laws/ch296-2023.pdf' },
    ],
    faq: [
      { q: 'Does Aetna cover ABA therapy in New Jersey?', a: 'Yes — under the carrier\'s national policy for ASD, layered on New Jersey\'s mandate (P.L. 2009, c.115) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'Does the $36,000 ABA cap in New Jersey\'s mandate still apply?', a: 'Mostly not — DOBI Bulletin 10-02 held the cap cannot be applied to group plans subject to federal parity (MHPAEA), since New Jersey treats autism as a biologically-based mental illness. In practice, state-regulated plans cover medically necessary ABA without dollar caps; the cap survives mainly in nongroup policies.' },
      { q: 'What does Aetna pay for ABA in New Jersey?', a: 'Aetna publishes no ABA rates. Its provider manual says payment follows “the rates and compensation under your agreement,” so the numbers are in your Aetna participation agreement. NJ FamilyCare\'s fee-for-service schedule (see the New Jersey Medicaid guide) is the public benchmark.' },
      { q: 'Does Aetna require RBT certification for ABA technicians?', a: 'Aetna\'s network criteria do not require the RBT credential by name: technicians may be paraprofessionals supervised by a BCBA or licensed provider, with at least 1 hour of face-to-face supervision per 10 hours of ABA and the supervisor onsite with the child at least 1 hour a month. Technicians must meet any state requirement, so check the state\'s licensure or Medicaid rules too.' },
      { q: 'Does Aetna allow retro authorization for ABA in New Jersey?', a: 'Aetna publishes no retro-authorization rule; ABA needs precertification before services. On a fully insured NJ plan, state law bars a no-authorization denial if Aetna missed its decision deadline, and requires a new payer to honor an existing authorization.' },
    ],
  },

  'cigna-new-jersey': {
    slug: 'cigna-new-jersey',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + the P.L. 2009, c.115 mandate layer.',
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
      value: 'Yes — ASD only; Rett syndrome (F84.2) excluded under EN0499',
      status: 'verified',
      cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    payer: 'Cigna / Evernorth in New Jersey',
    state: 'NJ', kind: 'commercial',
    intakeGates: {
      ageLimit: {
        value:
          'EN0499 sets no age limit. The policy\'s medical-necessity criteria turn on diagnosis, assessment and treatment-plan content rather than on age, and its own definitions note only that assessment instruments must have established reliability and validity "for use with members of the population tested (e.g., age, language preference, etc.)." The binding age question is the legal layer underneath: New Jersey\'s mandate (P.L. 2009, c.115) reaches individuals under 21 on state-regulated plans, with the IHC and SEH program boards extending ABA to adults 21+ in the individual and small-employer markets from January 2015; a self-funded ERISA plan answers to its own plan document. So a 21-plus New Jersey inquiry is a market-analysis question, not an automatic turn-away.',
        status: 'plan-dependent',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'NJ DOBI Bulletin 10-02 — Implementation of P.L. 2009, c.115', url: 'https://www.nj.gov/dobi/bulletins/blt10_02.pdf' }],
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
          'An independent-practice test, with two explicit disqualifiers. The diagnosis must be made "based on the criteria in the Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR) by a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice." What does not count: "educational identification or meeting educational eligibility for services related to autism through the [Individuals] with Disabilities Education Act may not meet criteria as a formal diagnosis of ASD," and a diagnosis termed "provisional," "proposed," "potential," "at risk of" or "rule out" is not confirmed. F84.2 (Rett syndrome) is excluded from the covered code range. One New Jersey wrinkle on the code range: DOBI\'s implementing bulletin notes carriers may exclude clear Rett and childhood disintegrative disorder diagnoses from the mandate\'s autism definition, but must still consider them under the mandate\'s developmental-disability therapy prongs — so a Rett exclusion in the carrier policy is not the end of the coverage conversation on a state-regulated plan.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'NJ DOBI Bulletin 10-02 — Implementation of P.L. 2009, c.115', url: 'https://www.nj.gov/dobi/bulletins/blt10_02.pdf' }],
      },
      diagnosticTools: {
        value:
          'No named instrument, but a strict standard for whichever one is used. The comprehensive ABA assessment must include "Administration of a reliable, valid, and standardized assessment instrument that measures the individual\'s functioning in the domains included in the diagnostic criteria for ASD in the DSM-5-TR" — social communication and social interaction, and restricted, repetitive patterns of behavior. The instrument must be completed in its entirety and as designed, be reliable and valid for the population tested, be administered and interpreted by someone trained to do so, be the most current version ("must be the Vineland-3 vs. Vineland-II"), assess current abilities, and record the date of administration, the respondent and the form type. Where someone other than the requesting provider administered it, the request must show documented collaboration with that professional and that the results correspond with the requesting provider\'s own direct observation.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      referral: {
        value:
          'Not published as a requirement. EN0499 gates coverage on a confirmed DSM-5-TR diagnosis, a qualifying assessment and a compliant treatment plan, and Evernorth\'s front door is famously open on the assessment side — no prior authorization on 97151, 97152 or 0362T. Neither document states a referral or physician order as a condition.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia:
          'Evernorth Provider Services at 800.926.2273 and the member\'s benefit document — referral rules, where they exist, are a plan-design feature rather than a policy feature.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'The most permissive telehealth position of the three national carriers, stated in one line: "All ABA CPT codes are covered telehealth services." EN0499 backs it structurally — "ABA treatment may be rendered via traditional in-person service delivery, telehealth, or a hybrid of in-person and telehealth service modalities," with the modality chosen on individual characteristics, the treatment plan, caregiver participation, environment, evidence of efficacy and safety, and technological requirements. Two qualifications worth carrying into scheduling: telehealth delivery is one of the settings the policy expects treatment goals to address, and the requirement to have the treatment plan signed does not apply to telehealth services. No POS code list is published. Nothing in the New Jersey mandate or DOBI Bulletin 10-02 addresses telehealth delivery of ABA, so there is no state floor to fall back on here — unlike Nebraska, whose statute names telehealth expressly. For a New Jersey fully insured plan, N.J.S.A. 26:2S-29 (as amended by P.L.2021, c.310) requires a carrier to cover telehealth "on the same basis as" in person for otherwise covered services, bars restrictions on the originating or distant site except to keep the in-person standard of care, and lets the carrier limit coverage to in-network providers; self-funded employer plans are outside it.',
        status: 'verified',
        cites: [{ title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' }, { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured New Jersey plans follow the Ensuring Transparency in Prior Authorization Act (in force January 1, 2025): for outpatient services such as ABA, a denial must be communicated "no later than 12 days if the request is submitted in paper, or nine days if submitted through an electronic portal provided by the payer," and urgent-care determinations no later than 72 hours after receipt; if the payer asks for more information and the provider does not respond within 72 hours, the request is deemed withdrawn. Useful for reauthorizations: a prior authorization for a chronic or long-term condition "shall remain in effect for 180 days" unless a shorter period is needed with notice to the provider. Self-funded (ERISA) plans follow the federal claims rule instead: pre-service decisions within 15 days of receipt (one 15-day extension), urgent within 72 hours. Cigna\'s ABA policy (EN0499) sets no decision clock; continued-treatment requests need current data "collected within no more than 60 days prior to the start date of the continued treatment request."',
        status: 'plan-dependent',
        cites: [
          { title: 'P.L. 2023, c.296 — Ensuring Transparency in Prior Authorization Act (N.J.S.A. 17B:30-55.1 et seq.)', url: 'https://www.nj.gov/treasury/pensions/documents/laws/ch296-2023.pdf' },
          { title: 'NJ DOBI Bulletin 24-17 — Ensuring Transparency in Prior Authorization Act', url: 'https://nj.gov/dobi/bulletins/blt24_17.pdf' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
        verifyVia: 'Benefits verification: fully insured NJ policy (ETPAA 9/12-day clock, 180-day authorizations) vs. self-funded ERISA plan (15 days / 72 hours), plus the carrier\'s behavioral health reviewer turnaround.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two parents\' plans, New Jersey\'s group coordination-of-benefits rule (fully insured group contracts) puts the plan of "the parent whose birthday falls earlier in a year" first — month and day only; same birthday → the plan that covered the parent longer. Divorced or separated parents: the custodial parent\'s plan pays first, then the custodial parent\'s spouse\'s plan, then the non-custodial parent\'s plan, unless a court decree makes one parent responsible for the child\'s health care. Self-funded plans set their own order in the plan document. Cigna\'s ABA documents publish no coordination-of-benefits rule of their own. If the child also has TRICARE, this plan pays first — TRICARE is the secondary payer to other health insurance under its double-coverage rule (Medicaid is the only coverage it pays ahead of). CHAMPVA likewise pays last: "In double coverage situations, CHAMPVA would be the last payer." If the child also has Medicaid, this plan is primary and Medicaid pays last.',
        status: 'plan-dependent',
        cites: [
          { title: 'N.J.A.C. 11:4-28.6 — Rules for coordination of benefits (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-11-4-28-6' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.270 — CHAMPVA definitions, double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
          { title: 'N.J.A.C. 10:49-7.3 — Third-party liability (TPL) benefits (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-10-49-7-3' },
        ],
        verifyVia: 'Benefits verification with both plans: funding type, which is primary for the child, and whether the secondary plan requires its own authorization.',
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
          'Yes \u2014 and Evernorth writes it as an explicit carve-out from its general rule: \u201cOnly one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time).\u201d Both must be with the patient; analyst time away from the patient is not inside the exception.',
        status: 'verified',
        cites: [{ title: 'Evernorth \u2014 Autism Resource Guide for behavioral health providers (March 2025, PCOMM-2025-225)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      dailyLimits: {
        value:
          'Not published. The resource guide sets the code set (97151\u201397158, 0362T, 0373T only, all in 15-minute increments) but no per-day unit ceiling and no statement of which MUE table Evernorth applies.',
        status: 'unverified',
        cites: [{ title: 'Evernorth \u2014 Autism Resource Guide for behavioral health providers (March 2025, PCOMM-2025-225)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        verifyVia:
          'Evernorth Provider Services at 800.926.2273.',
        blocker: 'per-case',
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
    pill: 'Payer Guide · Cigna · New Jersey',
    h1: 'Cigna / Evernorth ABA coverage in New Jersey: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in New Jersey: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for New Jersey families — the national EN0499 policy with no assessment PA, the P.L. 2009, c.115 mandate (ages, the parity-voided $36k cap, exemptions), New Jersey behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in New Jersey, a Cigna card means three layers at once: the carrier\'s national clinical policy, New Jersey\'s autism insurance mandate (P.L. 2009, c.115), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'P.L. 2009, c.115 (N.J.S.A. 17:48-6ii and parallel sections)' },
      { label: 'Mandate age', value: 'Under 21 in statute; IHC/SEH markets extended to adults 21+ (Jan 2015)' },
      { label: 'Mandate caps', value: '$36,000/yr in statute — voided for MHPAEA group plans (DOBI Bulletin 10-02)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans (may exclude ABA entirely)' },
      { label: 'Licensure', value: 'NJ Licensed Applied Behavior Analyst (Consumer Affairs board)' },
      { label: 'Fee schedule', value: 'Not public — your ABA fee schedule is Exhibit A of your Evernorth Provider Agreement; fee questions to Evernorth Provider Services, 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in New Jersey',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. And unlike Virginia — the one state whose fully-insured business the current EN0499 (effective 5/15/2026) carves out of the policy — New Jersey has no carve-out: EN0499 applies, with the state mandate below as the legal floor for fully-insured plans and ERISA plus federal parity governing self-funded ones. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in New Jersey.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The New Jersey mandate: strong, and stronger than it reads',
        body: [
          'P.L. 2009, c.115 (effective February 9, 2010, codified across N.J.S.A. 17:48-6ii and parallel sections for insurers, HMOs, individual and small-employer plans, plus the SHBP and SEHBP) requires state-regulated plans to cover autism screening and diagnosis, medically necessary PT/OT/ST for autism or other developmental disabilities, and medically necessary ABA-based behavioral interventions for autism in individuals under 21 — coverage owed even when services aren\'t restorative. The statute\'s headline limitation, a $36,000/year ABA cap, is largely dead: DOBI Bulletin 10-02 held the cap cannot be applied to group health plans subject to MHPAEA, because New Jersey classifies autism as a biologically-based mental illness and dollar limits conflict with federal parity — leaving it live mainly in nongroup policies. The IHC and SEH program boards went further in amendments effective January 2015, extending ABA to adults 21+ and removing therapy visit limits in the individual and small-employer markets. Practical current state: state-regulated plans cover medically necessary ABA without dollar caps. Self-funded ERISA plans remain exempt and may exclude ABA entirely.',
        ],
        cites: [
      { title: 'NJ DOBI Bulletin 10-02 — Implementation of P.L. 2009, c.115', url: 'https://www.nj.gov/dobi/bulletins/blt10_02.pdf' },
      { title: 'Autism NJ — Amendments to Insurance Mandate Expand Coverage (eff. Jan 2015)', url: 'https://autismnj.org/news/amendments-to-insurance-mandate-expand-coverage/' },
        ],
      },
      {
        h2: 'No New Jersey-specific Cigna policy exists',
        body: [
          'We checked: Cigna / Evernorth publishes no New Jersey-specific ABA policy, form, or supplement, and runs no NJ Medicaid plan — the national EN0499 policy plus the state mandate is the whole picture. That\'s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, benefit limits) is where New Jersey-specific answers come from, not a carrier document. One EN0499 detail with a New Jersey wrinkle: the policy excludes Rett syndrome from its ASD definition — and DOBI\'s implementing bulletin similarly notes carriers may exclude clear Rett and CDD diagnoses from the mandate\'s autism definition, but must still consider them under the mandate\'s developmental-disability therapy prongs.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'NJ DOBI Bulletin 10-02 — Implementation of P.L. 2009, c.115', url: 'https://www.nj.gov/dobi/bulletins/blt10_02.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in New Jersey',
        body: [
          'New Jersey licenses behavior analysts through the State Board of Applied Behavior Analyst Examiners at the Division of Consumer Affairs: the Licensed Applied Behavior Analyst (LBA — master\'s or doctorate, current BCBA/BCBA-D, and the NJ jurisprudence exam) and the assistant-level LaBA, under N.J.S.A. 45:8B-91 et seq. and N.J.A.C. 13:42B. The board\'s position is that supervision in all its forms constitutes practicing behavior analysis and requires a license; RBTs are unlicensed and work under a licensee. On rates: Cigna does not publish commercial ABA fee schedules for New Jersey (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. Benchmark against NJ FamilyCare\'s published FFS schedule ($15.00/unit for 97153, $21.25 for 97155, $25.00 for 97151/97156) and treat rate-setting as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'NJ Board of Applied Behavior Analyst Examiners — FAQ', url: 'https://www.njconsumeraffairs.gov/abae/Pages/FAQ.aspx' },
        ],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth, which runs Cigna’s behavioral health network, puts the rates in the contract: its Administrative Guidelines (September 2026) say the Provider Agreement and the guidelines set the terms, which “include the reimbursement rates applicable to covered services,” and tell ABA providers: “For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement.” Fee-schedule and contract questions go to Provider Services at 800.926.2273. Virtual services are billed with modifier 95, which Evernorth says “will not change the reimbursement.” Non-credentialed technicians are paid only through the supervising provider’s claim. For a public benchmark, see the NJ FamilyCare fee-for-service rates in the New Jersey Medicaid guide.',
        ],
        cites: [
          { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
        ],
      },
      {
        h2: 'Does Cigna allow retroactive authorization for ABA in New Jersey?',
        body: [
          'Within two weeks, yes. Cigna asks providers to request ABA authorization "up to 30 days in advance of or two weeks after the start date of service. A delay in request may result in a retrospective review and could delay the determination for up to 30 days." Assessment codes 97151, 97152 and 0362T need no prior authorization when the provider is independently licensed or a BCBA and the plan covers ABA. EN0499 applies the same criteria to late requests: "When authorization requests involve coverage of services conducted retrospectively, ALL the criteria from initiation of treatment section (and continued treatment section as applicable) are met, coinciding with the dates of service." For requests outside that, Evernorth\'s administrative guidelines require "an explanation of the extraordinary circumstances responsible for the delay or failure to obtain prior authorization" (for example, wrong insurance information) with the medical records; "The denial decision will be upheld if the provider or facility only submits a medical record and not the explanation." On a fully insured New Jersey plan, the Ensuring Transparency in Prior Authorization Act adds two protections: a payer may not deny a claim for lack of prior authorization if you asked before the service and the payer did not answer within the legal deadline, and when a covered person moves to another payer that payer "shall accept the authorization" issued by the old one, based on its own plan\'s benefits. Self-funded employer plans are outside the Act.',
        ],
        cites: [
          { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
          { title: 'P.L. 2023, c.296 — Ensuring Transparency in Prior Authorization Act (N.J.S.A. 17B:30-55.1 et seq.)', url: 'https://www.nj.gov/treasury/pensions/documents/laws/ch296-2023.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies, no dollar cap in practice) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date — noting EN0499\'s Rett exclusion.' },
      { title: 'Age', desc: 'Under 21 for the statutory ABA prong — but IHC/SEH-market plans extend ABA to adults, so flag 21+ cases for market analysis rather than turning them away.' },
    ],
    sources: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'NJ DOBI Bulletin 10-02 — Implementation of P.L. 2009, c.115', url: 'https://www.nj.gov/dobi/bulletins/blt10_02.pdf' },
      { title: 'Autism NJ — Amendments to Insurance Mandate Expand Coverage', url: 'https://autismnj.org/news/amendments-to-insurance-mandate-expand-coverage/' },
      { title: 'NJ Board of Applied Behavior Analyst Examiners — FAQ', url: 'https://www.njconsumeraffairs.gov/abae/Pages/FAQ.aspx' },
      { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
      { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
      { title: 'P.L. 2023, c.296 — Ensuring Transparency in Prior Authorization Act (N.J.S.A. 17B:30-55.1 et seq.)', url: 'https://www.nj.gov/treasury/pensions/documents/laws/ch296-2023.pdf' },
    ],
    faq: [
      { q: 'Does Cigna cover ABA therapy in New Jersey?', a: 'Yes — under the carrier\'s national EN0499 policy for ASD (no PA on assessment codes 97151/97152/0362T), layered on New Jersey\'s mandate (P.L. 2009, c.115) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'Does EN0499 apply to New Jersey fully-insured plans?', a: 'Yes — unlike Virginia, New Jersey has no carve-out in the current EN0499. NJ fully-insured plans sit under the policy\'s generic state-mandate language, with P.L. 2009, c.115 controlling as the state mandate.' },
      { q: 'Does the $36,000 ABA cap in New Jersey\'s mandate still apply?', a: 'Mostly not — DOBI Bulletin 10-02 held the cap cannot be applied to group plans subject to federal parity (MHPAEA). In practice, state-regulated plans cover medically necessary ABA without dollar caps; the cap survives mainly in nongroup policies.' },
      { q: 'What does Cigna pay for ABA in New Jersey?', a: 'Cigna publishes no ABA rates. Evernorth says your fee schedule and the list of reimbursable autism services are in Exhibit A of your Provider Agreement; call Evernorth Provider Services (800.926.2273) with fee questions. NJ FamilyCare\'s fee-for-service schedule (see the New Jersey Medicaid guide) is the public benchmark.' },
      { q: 'Does Cigna allow retro authorization for ABA?', a: 'Cigna accepts ABA authorization requests up to two weeks after services start (a later request may go to retrospective review, up to 30 days). Assessment codes need no authorization. Beyond that you need to document extenuating circumstances, such as wrong insurance information.' },
    ],
  },

  'unitedhealthcare-new-jersey': {
    slug: 'unitedhealthcare-new-jersey',
    family: 'unitedhealthcare',
    cardDesc: 'Optum Supplemental Clinical Criteria (BH803ABASCC) + the P.L. 2009, c.115 mandate layer.',
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
      value: 'Yes — DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.)',
      status: 'verified',
      cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
    },
    payer: 'UnitedHealthcare / Optum in New Jersey',
    state: 'NJ', kind: 'commercial',
    intakeGates: {
      ageLimit: {
        value:
          'Optum\'s Supplemental Clinical Criteria set no age limit for ABA — coverage turns on a valid ASD diagnosis, a credentialed provider and demonstrated medical necessity, with age entering only through norm-referenced instruments that compare functioning "to age-matched neurotypical peers." The binding age question is the legal layer underneath: New Jersey\'s mandate (P.L. 2009, c.115) reaches individuals under 21 on state-regulated plans, with the IHC and SEH program boards extending ABA to adults 21+ in the individual and small-employer markets from January 2015; a self-funded ERISA plan answers to its own plan document. Watch the line of business here: Optum\'s ABA State Mandates document does carry a dedicated New Jersey section, but it is "For New Jersey Medicaid members" only and governs UnitedHealthcare Community Plan, not commercial cards. Its looser standard — no comprehensive diagnostic evaluation required, ages 18 months to 21 — does not bleed into commercial requests.',
        status: 'plan-dependent',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'NJ DOBI Bulletin 10-02 — Implementation of P.L. 2009, c.115', url: 'https://www.nj.gov/dobi/bulletins/blt10_02.pdf' }],
        verifyVia:
          'The member\'s benefit document and Optum via Provider Express — funding type decides whether the state mandate or the plan document sets the age boundary.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Not published. Optum\'s ABA criteria require a valid DSM-5-TR diagnosis confirmed with at least one clinically validated tool but set no maximum age for the diagnostic evaluation. The recency Optum does police is progress rather than diagnosis: continued coverage looks for demonstrable progress within a 6-month window and for updated standardized adaptive measures with change scores. The NJ Medicaid entry\'s "comprehensive diagnostic evaluation is not required" line is a Medicaid provision and does not apply to a commercial card.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'Optum via Provider Express, or the Care Advocate handling the authorization — ask whether the plan applies a diagnostic-evaluation recency window at intake.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'A licensure test with a diagnostic-competence qualifier: "A valid diagnosis of ASD (or other applicable diagnosis as required by governing laws) must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis according to the diagnostic criteria based on the DSM-5-TR." The diagnosing clinician must also confirm and document the severity level. Once the diagnosis is confirmed, the ABA provider identified for the member must be a master\'s- or doctoral-level BCBA, a licensed behavioral health clinician who has attested to sufficient expertise and been credentialed for ABA, or a BCaBA or non-licensed individual working under direct supervision. One New Jersey wrinkle on the code range: DOBI\'s implementing bulletin notes carriers may exclude clear Rett and childhood disintegrative disorder diagnoses from the mandate\'s autism definition, but must still consider them under the mandate\'s developmental-disability therapy prongs — so a Rett exclusion in the carrier policy is not the end of the coverage conversation on a state-regulated plan.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'NJ DOBI Bulletin 10-02 — Implementation of P.L. 2009, c.115', url: 'https://www.nj.gov/dobi/bulletins/blt10_02.pdf' }],
      },
      diagnosticTools: {
        value:
          'Optum publishes the most explicit instrument list of any national carrier, and splits it three ways. The DSM-5 diagnosis and severity level must be confirmed "using at least one clinically validated tool (not an all-inclusive list)": first-level screeners (ABC, CHAT/M-CHAT, CSBS-DP-IT-Checklist, ASQ, AQ, CAST), second-level screeners (CARS/CARS-2, RITA-T, STAT), and formal diagnostic tools used as part of a comprehensive diagnostic evaluation — the Autism Diagnostic Interview-Revised (ADI), the Autism Diagnostic Observation Schedule (ADOS/ADOS-2), and the Diagnostic Interview for Social and Communication Disorders (DISCO). Separately, treatment intensity must be chosen against baseline measurement using at least one of ATEC, VB-MAPP, ABLLS/ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, VABS or CFQL-2, individualized to the client rather than applied uniformly. On a commercial New Jersey card this validated-tool standard is the one that applies, not the NJ Medicaid entry\'s no-evaluation-required rule.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      referral: {
        value:
          'Not published as a coverage condition. Optum gates ABA on prior authorization — "Prior authorization is required for ABA (unless otherwise specified or mandated by contract or law)" — delivered as a two-step assessment-then-treatment workflow on Provider Express, with a valid diagnosis rather than a referral as the clinical trigger. What the criteria do require is coordination: documentation of communication with day care, preschool, school, early intervention and allied health providers to avoid duplication.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'Optum via Provider Express and the member\'s benefit document — referral requirements, where they exist, are a plan-design feature.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Three codes, after an attestation. Optum’s Telehealth Billing guide (updated September 2025) is explicit for commercial plans: “For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157” — virtual supervision of technicians and family training — so technician-delivered 97153 is not payable by telehealth. The provider must first be “an approved Optum virtual visits provider who has attested” (the virtual-visits attestation on Provider Express) and must tell the ABA Care Advocate at authorization. Bill the in-person code with the member’s location as the place of service: POS 10 when the member is at home, POS 02 anywhere else (the older ABA CPT FAQ says POS 02; the 2025 guide requires one of the two on every behavioral-health telehealth claim, and POS 11 or a telehealth modifier alone is not paid). Optum’s criteria add that telehealth is “not intended to supplant in-person service.” Nothing in the New Jersey mandate or DOBI Bulletin 10-02 addresses telehealth delivery of ABA, so there is no state floor beyond Optum’s own rule. For a New Jersey fully insured plan, N.J.S.A. 26:2S-29 (as amended by P.L.2021, c.310) requires a carrier to cover telehealth "on the same basis as" in person for otherwise covered services, bars restrictions on the originating or distant site except to keep the in-person standard of care, and lets the carrier limit coverage to in-network providers; self-funded employer plans are outside it.',
        status: 'verified',
        cites: [
          { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
          { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured New Jersey plans follow the Ensuring Transparency in Prior Authorization Act (in force January 1, 2025): for outpatient services such as ABA, a denial must be communicated "no later than 12 days if the request is submitted in paper, or nine days if submitted through an electronic portal provided by the payer," and urgent-care determinations no later than 72 hours after receipt; if the payer asks for more information and the provider does not respond within 72 hours, the request is deemed withdrawn. Useful for reauthorizations: a prior authorization for a chronic or long-term condition "shall remain in effect for 180 days" unless a shorter period is needed with notice to the provider. Self-funded (ERISA) plans follow the federal claims rule instead: pre-service decisions within 15 days of receipt (one 15-day extension), urgent within 72 hours. UnitedHealthcare\'s commercial administrative guide states "Standard requests: up to 15 calendar days" and "Expedited requests: 72 hours," and asks for requests "at least 15 calendar days in advance, if possible," and at least 5 business days before the service — for a fully insured NJ plan the state\'s shorter clock controls. ABA reviews run through Optum Behavioral Health.',
        status: 'plan-dependent',
        cites: [
          { title: 'P.L. 2023, c.296 — Ensuring Transparency in Prior Authorization Act (N.J.S.A. 17B:30-55.1 et seq.)', url: 'https://www.nj.gov/treasury/pensions/documents/laws/ch296-2023.pdf' },
          { title: 'NJ DOBI Bulletin 24-17 — Ensuring Transparency in Prior Authorization Act', url: 'https://nj.gov/dobi/bulletins/blt24_17.pdf' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: '2026 UnitedHealthcare Care Provider Administrative Guide (commercial)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
        ],
        verifyVia: 'Benefits verification: fully insured NJ policy (ETPAA 9/12-day clock, 180-day authorizations) vs. self-funded ERISA plan (15 days / 72 hours), plus the carrier\'s behavioral health reviewer turnaround.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two parents\' plans, New Jersey\'s group coordination-of-benefits rule (fully insured group contracts) puts the plan of "the parent whose birthday falls earlier in a year" first — month and day only; same birthday → the plan that covered the parent longer. Divorced or separated parents: the custodial parent\'s plan pays first, then the custodial parent\'s spouse\'s plan, then the non-custodial parent\'s plan, unless a court decree makes one parent responsible for the child\'s health care. Self-funded plans set their own order in the plan document. UnitedHealthcare: "COB is administered according to the member\'s benefit plan and in accordance with law"; Optum: "You are responsible for determining if the member has other insurance coverage. If so, you should bill the primary insurance carrier first, then notify Optum of your findings." If the child also has TRICARE, this plan pays first — TRICARE is the secondary payer to other health insurance under its double-coverage rule (Medicaid is the only coverage it pays ahead of). CHAMPVA likewise pays last: "In double coverage situations, CHAMPVA would be the last payer." If the child also has Medicaid, this plan is primary and Medicaid pays last.',
        status: 'plan-dependent',
        cites: [
          { title: 'N.J.A.C. 11:4-28.6 — Rules for coordination of benefits (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-11-4-28-6' },
          { title: '2026 UnitedHealthcare Care Provider Administrative Guide (commercial)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
          { title: 'Optum Behavioral Health — National Network Manual (effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.270 — CHAMPVA definitions, double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
          { title: 'N.J.A.C. 10:49-7.3 — Third-party liability (TPL) benefits (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-10-49-7-3' },
        ],
        verifyVia: 'Benefits verification with both plans: funding type, which is primary for the child, and whether the secondary plan requires its own authorization.',
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
          'The commercial reimbursement policy sets no place-of-service rule. Optum\u2019s published ABA State Mandates document does carry a New Jersey entry, but it is scoped to NJ Medicaid \u2014 \u201cservices may be provided in the school setting as long as services are not provided during normal school hours\u201d \u2014 and should not be read onto a commercial member without confirming.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA State Mandates BH803ABASTM12026 \u2014 NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'UnitedHealthcare provider services and the member\u2019s benefit document; ask explicitly whether the NJ Medicaid school-hours rule is mirrored on the commercial product.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'One provider-level modifier per line, matching whoever actually rendered the service: HM = Registered Behavior Technician (less than bachelor\u2019s level), HN = BCaBA (bachelor\u2019s level), HO = BCBA or master\u2019s-level licensed clinician, HP = BCBA-D or doctoral-level licensed clinician. A billable ABA-supervisor service is billed with the applicable CPT code plus HO. Stacking level modifiers is a denial risk: \u201cBilling multiple provider-level modifiers (HN, HM, HO, HP) on the same service line same service and same DOS is not appropriate and may result in claim denial.\u201d Indirect work has no code of its own \u2014 it is bundled into the direct-service code.',
        status: 'verified',
        cites: [{ title: 'Optum \u2014 Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
    },
    pill: 'Payer Guide · UnitedHealthcare · New Jersey',
    h1: 'UnitedHealthcare / Optum ABA coverage in New Jersey: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in New Jersey: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for New Jersey families — the national clinical policy, prior authorization, the P.L. 2009, c.115 mandate (ages, the parity-voided $36k cap, exemptions), New Jersey behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in New Jersey, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, New Jersey\'s autism insurance mandate (P.L. 2009, c.115), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'P.L. 2009, c.115 (N.J.S.A. 17:48-6ii and parallel sections)' },
      { label: 'Mandate age', value: 'Under 21 in statute; IHC/SEH markets extended to adults 21+ (Jan 2015)' },
      { label: 'Mandate caps', value: '$36,000/yr in statute — voided for MHPAEA group plans (DOBI Bulletin 10-02)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans (may exclude ABA entirely)' },
      { label: 'Licensure', value: 'NJ Licensed Applied Behavior Analyst (Consumer Affairs board)' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in New Jersey',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months. That clinical policy is national — what changes in New Jersey is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in New Jersey.',
        ],
        cites: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'The New Jersey mandate: strong, and stronger than it reads',
        body: [
          'P.L. 2009, c.115 (effective February 9, 2010, codified across N.J.S.A. 17:48-6ii and parallel sections for insurers, HMOs, individual and small-employer plans, plus the SHBP and SEHBP) requires state-regulated plans to cover autism screening and diagnosis, medically necessary PT/OT/ST for autism or other developmental disabilities, and medically necessary ABA-based behavioral interventions for autism in individuals under 21 — coverage owed even when services aren\'t restorative. The statute\'s headline limitation, a $36,000/year ABA cap, is largely dead: DOBI Bulletin 10-02 held the cap cannot be applied to group health plans subject to MHPAEA, because New Jersey classifies autism as a biologically-based mental illness and dollar limits conflict with federal parity — leaving it live mainly in nongroup policies. The IHC and SEH program boards went further in amendments effective January 2015, extending ABA to adults 21+ and removing therapy visit limits in the individual and small-employer markets. Practical current state: state-regulated plans cover medically necessary ABA without dollar caps. Self-funded ERISA plans remain exempt and may exclude ABA entirely.',
        ],
        cites: [
      { title: 'NJ DOBI Bulletin 10-02 — Implementation of P.L. 2009, c.115', url: 'https://www.nj.gov/dobi/bulletins/blt10_02.pdf' },
      { title: 'Autism NJ — Amendments to Insurance Mandate Expand Coverage (eff. Jan 2015)', url: 'https://autismnj.org/news/amendments-to-insurance-mandate-expand-coverage/' },
        ],
      },
      {
        h2: 'Optum\'s New Jersey entry is a Medicaid entry',
        body: [
          'Optum\'s ABA State Mandates document (BH803ABASTM12026, effective January 2026) does carry a dedicated New Jersey section — but it\'s "For New Jersey Medicaid members" only, governing the carrier\'s NJ FamilyCare plan (no comprehensive diagnostic evaluation required, ages 18 months to 21, school setting outside school hours). There is no New Jersey commercial-specific entry, so commercial members ride on the national Supplemental Clinical Criteria plus the state mandate. Don\'t let the Medicaid entry\'s looser diagnosis bar bleed into commercial expectations: the national criteria\'s validated-tool diagnostic standard still applies to commercial requests.',
        ],
        cites: [
      { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'UnitedHealthcare Medicaid in New Jersey',
        body: [
          'A family saying "we have UnitedHealthcare" in New Jersey may actually be on the carrier\'s Medicaid plan — UnitedHealthcare Community Plan, an NJ FamilyCare MCO with behavioral health administered by Optum — which follows the state Medicaid rules and Optum\'s NJ Medicaid entry, not this commercial policy. Verify which line of business the card belongs to, and use the dedicated guide for the Medicaid plan.',
        ],
      },
      {
        h2: 'Licensure & rates in New Jersey',
        body: [
          'New Jersey licenses behavior analysts through the State Board of Applied Behavior Analyst Examiners at the Division of Consumer Affairs: the Licensed Applied Behavior Analyst (LBA — master\'s or doctorate, current BCBA/BCBA-D, and the NJ jurisprudence exam) and the assistant-level LaBA, under N.J.S.A. 45:8B-91 et seq. and N.J.A.C. 13:42B. The board\'s position is that supervision in all its forms constitutes practicing behavior analysis and requires a license; RBTs are unlicensed and work under a licensee. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for New Jersey (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. Benchmark against NJ FamilyCare\'s published FFS schedule ($15.00/unit for 97153, $21.25 for 97155, $25.00 for 97151/97156) and treat rate-setting as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'NJ Board of Applied Behavior Analyst Examiners — FAQ', url: 'https://www.njconsumeraffairs.gov/abae/Pages/FAQ.aspx' },
        ],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA?',
        body: [
          'UnitedHealthcare publishes no ABA rate table; its behavioral health network, Optum, pays from the contract. Optum’s National Network Manual (effective Sept. 1, 2026) defines the “Fee Maximum” as “The maximum amount a participating provider may be paid for a specific health care service provided to a member,” adding that “Reimbursement to clinicians is based upon licensure rather than degree.” Optum’s commercial ABA Reimbursement Policy (2022RP501A, updated 06/2026) makes the credential level part of every claim line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a BCBA-D or doctoral-level licensed provider. It also says indirect work has no separate code and is bundled into the direct-service codes. Ask Optum network management for your rate sheet. For a public benchmark, see the NJ FamilyCare fee-for-service rates in the New Jersey Medicaid guide.',
        ],
        cites: [
          { title: 'Optum National Network Manual (BH02330, effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
          { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
        ],
      },
      {
        h2: 'Does UnitedHealthcare allow retroactive authorization for ABA in New Jersey?',
        body: [
          'Only in unusual circumstances. Optum\'s Behavioral Health National Network Manual (effective September 1, 2026): "On occasion, emergent or other unusual circumstances will interfere with the prior authorization processes. In those cases, requests for a retrospective review of services must be submitted within 180 calendar days of the date(s) of service, unless otherwise mandated by state law." A request must give the reason prior authorization was not obtained and include the medical record; it is processed "at the sole discretion of Optum," decided within 30 calendar days, and late requests "will not be processed." On a fully insured New Jersey plan, the Ensuring Transparency in Prior Authorization Act adds two protections: a payer may not deny a claim for lack of prior authorization if you asked before the service and the payer did not answer within the legal deadline, and when a covered person moves to another payer that payer "shall accept the authorization" issued by the old one, based on its own plan\'s benefits. Self-funded employer plans are outside the Act.',
        ],
        cites: [
          { title: 'Optum Behavioral Health — National Network Manual (effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
          { title: 'P.L. 2023, c.296 — Ensuring Transparency in Prior Authorization Act (N.J.S.A. 17B:30-55.1 et seq.)', url: 'https://www.nj.gov/treasury/pensions/documents/laws/ch296-2023.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies, no dollar cap in practice) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Line of business', desc: 'Commercial vs. UnitedHealthcare Community Plan (NJ FamilyCare Medicaid) — different rules, different diagnosis bar, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5-TR ASD diagnosis with a validated tool (ADI-R, ADOS-2) for commercial — the looser Medicaid standard doesn\'t apply here.' },
      { title: 'Age', desc: 'Under 21 for the statutory ABA prong — but IHC/SEH-market plans extend ABA to adults, so flag 21+ cases for market analysis rather than turning them away.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum ABA State Mandates BH803ABASTM12026 — NJ Medicaid entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'NJ DOBI Bulletin 10-02 — Implementation of P.L. 2009, c.115', url: 'https://www.nj.gov/dobi/bulletins/blt10_02.pdf' },
      { title: 'Autism NJ — Amendments to Insurance Mandate Expand Coverage', url: 'https://autismnj.org/news/amendments-to-insurance-mandate-expand-coverage/' },
      { title: 'NJ Board of Applied Behavior Analyst Examiners — FAQ', url: 'https://www.njconsumeraffairs.gov/abae/Pages/FAQ.aspx' },
      { title: 'Optum \u2014 Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
      { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
      { title: 'Optum National Network Manual (BH02330, effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
      { title: 'P.L. 2023, c.296 — Ensuring Transparency in Prior Authorization Act (N.J.S.A. 17B:30-55.1 et seq.)', url: 'https://www.nj.gov/treasury/pensions/documents/laws/ch296-2023.pdf' },
    ],
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in New Jersey?', a: 'Yes — under the carrier\'s national policy for ASD (Optum\'s two-step Provider Express authorization), layered on New Jersey\'s mandate (P.L. 2009, c.115) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'Does Optum have New Jersey-specific ABA criteria?', a: 'Only for Medicaid — its State Mandates document carries a dedicated NJ FamilyCare entry (no comprehensive evaluation required, ages 18 months to 21). There is no NJ commercial entry, so commercial members follow the national Supplemental Clinical Criteria plus the state mandate.' },
      { q: 'Does the $36,000 ABA cap in New Jersey\'s mandate still apply?', a: 'Mostly not — DOBI Bulletin 10-02 held the cap cannot be applied to group plans subject to federal parity (MHPAEA). In practice, state-regulated plans cover medically necessary ABA without dollar caps; the cap survives mainly in nongroup policies.' },
      { q: 'How often does UnitedHealthcare (Optum) reauthorize ABA?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale.' },
      { q: 'What does UnitedHealthcare pay for ABA in New Jersey?', a: 'UnitedHealthcare/Optum publishes no ABA rates. You are paid up to the Fee Maximum in your Optum agreement, and each line carries a credential modifier (HM RBT, HN BCaBA, HO BCBA, HP BCBA-D) under Optum’s ABA reimbursement policy. Ask Optum network management for your rate sheet. NJ FamilyCare\'s fee-for-service schedule (see the New Jersey Medicaid guide) is the public benchmark.' },
      { q: 'Does UnitedHealthcare require RBT certification for ABA technicians?', a: 'For commercial plans, Optum\'s ABA reimbursement policy defines the technician line: the approved rendering provider for the HM modifier (less than a bachelor\'s degree) is "a Registered Behavior Technician (RBT)," and a BCaBA bills HN. The policy notes that state regulatory requirements "may supplement, modify or supersede" it. So plan on RBT-certified technicians for UHC commercial members.' },
      { q: 'Does UnitedHealthcare allow retro authorization for ABA?', a: 'Optum reviews services after the fact only when emergent or unusual circumstances prevented prior authorization, if asked within 180 days with the reason and records. On fully insured NJ plans, state law also bars a no-authorization denial if the payer missed its decision deadline.' },
    ],
  },

  'horizon-bcbs-new-jersey': {
    slug: 'horizon-bcbs-new-jersey',
    family: 'bcbs',
    cardDesc: 'Medical Policy 165 + ABA reimbursement policy: PA on every ABA code, a daily-unit table, and school-hours rules.',
    assessmentPA: {
      value: 'Required — "All ABA codes require prior authorization for medical necessity review" (Horizon ABA reimbursement policy, revised 3/26/2026); request through the Utilization Management Request Tool in Availity Essentials with form 40001 attached',
      status: 'verified',
      cites: [
        { title: 'Horizon BCBSNJ reimbursement policy — Applied Behavior Analysis in the Treatment of Autism Spectrum Disorders (revised 3/26/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/applied-behavior-analysis-treatment-autism-spectrum-disorders' },
        { title: 'Horizon BCBSNJ — Applied Behavior Analysis Supplemental Information, form 40001 (05152026)', url: 'https://www.horizonblue.com/sites/default/files/2026-06/40001-aba-supplemental-info.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — every ABA code; treatment plans are revised every 6 months (concurrent review), with progress reports due at least two weeks and no more than 30 days before the authorization end date',
      status: 'verified',
      cites: [
        { title: 'Horizon BCBSNJ reimbursement policy — Applied Behavior Analysis in the Treatment of Autism Spectrum Disorders (revised 3/26/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/applied-behavior-analysis-treatment-autism-spectrum-disorders' },
        { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
        { title: 'Horizon BCBSNJ — Applied Behavior Analysis Provider Report Guidelines (August 2024)', url: 'https://www.horizonblue.com/sites/default/files/ABA_Report_Guidelines%208.2024.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD (ICD-10 F84.0–F84.9) diagnosed by a QHP (pediatrician, APN, pediatric neurologist, child psychiatrist or psychologist); ABA for other diagnoses is not medically necessary except as the NJ autism mandate or MHPAEA requires',
      status: 'verified',
      cites: [
        { title: 'Horizon BCBSNJ reimbursement policy — Applied Behavior Analysis in the Treatment of Autism Spectrum Disorders (revised 3/26/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/applied-behavior-analysis-treatment-autism-spectrum-disorders' },
        { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
      ],
    },
    payer: 'Horizon Blue Cross Blue Shield of New Jersey',
    state: 'NJ', kind: 'commercial',
    intakeGates: {
      ageLimit: {
        value:
          'Horizon\'s medical policy sets no upper age for commercial members. Its criteria apply to "fully insured plans and … self-funded plans that have opted to follow the New Jersey Autism and Developmental Disabilities Mandate," and the revision effective December 1, 2026 adds guidance on care models "for adults with ASD" and age-banded intensity thresholds (requests above 33 hours a week under age 6, 27 hours for ages 7-12, and 28 hours over 12 need extra clinical justification). The age cap that does exist is the legal layer: the mandate (P.L. 2009, c.115) reaches ABA for individuals under 21, and the individual and small-employer (IHC/SEH) boards extended ABA to adults with autism in amendments adopted in November 2014. A self-funded plan that did not opt in follows its own plan document. Horizon\'s Medicaid line (Horizon NJ Health) is a separate guide with an under-21 limit.',
        status: 'plan-dependent',
        cites: [
          { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
          { title: 'Horizon BCBSNJ Medical Policy 165 — ASD Treatment Services: ABA and DIR/Floortime (effective 12/1/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/cf5ac712-dd58-45df-11d5-01816106a41e' },
          { title: 'Autism NJ — Amendments to Insurance Mandate Expand Coverage', url: 'https://autismnj.org/news/amendments-to-insurance-mandate-expand-coverage/' },
        ],
        verifyVia: 'Horizon Behavioral Health (1-800-626-2212; SHBP/SEHBP 1-800-991-5579): ask whether the plan is fully insured, a self-funded group that opted into the NJ mandate, or a self-funded group that did not, and whether the plan document has an ABA age limit.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'A soft window, not a fixed number. The current policy asks for "a signed, recent diagnosis of Autism Spectrum Disorder (ASD) (e.g., within the last few years) including level of severity" under DSM-5; the December 1, 2026 revision reads "A signed, current (e.g., within the past several years) diagnosis … including DSM‑5‑TR severity level." The adaptive measure has its own clock: a standardized instrument of behavior and adaptive functioning is required as a baseline and repeated "no more frequently than every 6 months in support of the treatment plan unless Horizon and the treating physician agree that a more frequent review is necessary." So an old diagnostic report without a severity level is the thing most likely to be sent back.',
        status: 'verified',
        cites: [
          { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
          { title: 'Horizon BCBSNJ Medical Policy 165 — ASD Treatment Services: ABA and DIR/Floortime (effective 12/1/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/cf5ac712-dd58-45df-11d5-01816106a41e' },
        ],
      },
      diagnosingProviders: {
        value:
          'A named list. The medical policy defines the Qualified Health Professional who makes the diagnosis as "a Pediatrician, Advanced Practice Nurses (APNs), Pediatric Neurologist, Child Psychiatrist or Psychologist," and the reimbursement policy repeats it for claims: the ASD code must be "diagnosed by a Qualified Health Professional (QHP) such as a Pediatrician, Pediatric Neurologist, Advanced Practice Nurses (APNs), Child Psychiatrist or Psychologist with Autism Services within their scope of practice." A BCBA writes the treatment plan but is not on the diagnosing list. For initial requests, form 40001 asks for "Proof of autism diagnosis by a Qualified Health Professional."',
        status: 'verified',
        cites: [
          { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
          { title: 'Horizon BCBSNJ reimbursement policy — Applied Behavior Analysis in the Treatment of Autism Spectrum Disorders (revised 3/26/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/applied-behavior-analysis-treatment-autism-spectrum-disorders' },
          { title: 'Horizon BCBSNJ — Applied Behavior Analysis Supplemental Information, form 40001 (05152026)', url: 'https://www.horizonblue.com/sites/default/files/2026-06/40001-aba-supplemental-info.pdf' },
        ],
      },
      diagnosticTools: {
        value:
          'Two layers. Diagnosis: the policy wants the ASD diagnosis "made through extended observation and the use of standardized criteria (e.g., DSM-5-TR) or standardized diagnostic tools (e.g., Autism Diagnostic Interview, Revised (ADI-R)\'; Autism Diagnostic Observation Schedule, Second Edition (ADOS-2)" — the ADI-R and ADOS-2 are examples, not a mandate, in the current version. The December 1, 2026 revision tightens this to "Diagnostic evaluation performed using extended observation and a standardized tool." If the diagnosis includes intellectual disability, a psychologist\'s report with standardized intelligence testing is required. Treatment: a "standardized, norm referenced baseline assessment of behavioral and adaptive functioning (e.g., PDDBI, Vineland, ABAS)" plus a functional assessment "using validated behavioral analysis tools," with test scores. Form 40001 asks for the last standardized assessment and any curriculum assessment (ABLLS, AFLS, PEAK, VB-MAPP) with dates and scores.',
        status: 'verified',
        cites: [
          { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
          { title: 'Horizon BCBSNJ Medical Policy 165 — ASD Treatment Services: ABA and DIR/Floortime (effective 12/1/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/cf5ac712-dd58-45df-11d5-01816106a41e' },
          { title: 'Horizon BCBSNJ — Applied Behavior Analysis Supplemental Information, form 40001 (05152026)', url: 'https://www.horizonblue.com/sites/default/files/2026-06/40001-aba-supplemental-info.pdf' },
        ],
      },
      referral: {
        value:
          'Not published. Horizon\'s ABA medical policy, reimbursement policy and form 40001 require a QHP diagnosis, a BCBA-signed treatment plan ("Signature of the ordering health care provider (i.e., BCBA)") and prior authorization, but state no PCP referral or physician order. Whether an HMO-type plan adds a referral is a plan-document question.',
        status: 'unverified',
        cites: [
          { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
          { title: 'Horizon BCBSNJ — Applied Behavior Analysis Supplemental Information, form 40001 (05152026)', url: 'https://www.horizonblue.com/sites/default/files/2026-06/40001-aba-supplemental-info.pdf' },
        ],
        verifyVia: 'Horizon Behavioral Health (1-800-626-2212) or the member\'s plan document: ask whether the member\'s product requires a PCP referral for behavioral health.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'Covered as telemedicine, with prior approval. Horizon\'s Telemedicine and Telehealth Services reimbursement policy (revised 12/18/2025) lists 97151–97158 among its telemedicine codes and pays real-time audio-video services billed with modifier 95 or GT, POS 10 when the member is at home and POS 02 when the member is in an office or facility; "Any service requiring a medical necessity for a face-to-face visit also requires a medical necessity approval for services provided through telemedicine channels. Request and approval of the medical necessity must be obtained prior to rendering the services." Participating providers are paid "at the same rate as that of the existing Professional Agreement Allowances." The ABA medical policy adds that telehealth services are "held to the same medical necessity criteria as in-person care" and that "Clinical justification for services rendered via telehealth must be included within the treatment plan"; the December 2026 revision makes telehealth one of the treatment locations that needs a submitted clinical rationale. So 97151 assessment and 97155 supervision by telehealth are payable when authorized for telehealth. N.J.S.A. 26:2S-29 (P.L.2021, c.310) requires a carrier to cover telehealth on the same basis as in person.',
        status: 'verified',
        cites: [
          { title: 'Horizon BCBSNJ reimbursement policy — Telemedicine and Telehealth Services (revised 12/18/2025)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/telemedicine-and-telehealth-services' },
          { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
          { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded; Horizon publishes no ABA-specific clock. Fully insured New Jersey plans follow the Ensuring Transparency in Prior Authorization Act (in force January 1, 2025): for services such as ABA the payer must answer "no later than 12 days if the request is submitted in paper, or nine days if submitted through an electronic portal provided by the payer," and urgent-care claims no later than 72 hours after receipt; if the provider does not answer a request for more information within 72 hours the request is "deemed withdrawn"; a prior authorization for a chronic or long-term condition "shall remain valid for 180 days" unless a shorter period is needed with notice to the provider. If the payer misses its deadline, the claim "shall not be denied on the basis of a failure to secure prior or concurrent authorization." Self-funded (ERISA) plans follow the federal claims rule: pre-service decisions "not later than 15 days after receipt," one 15-day extension, urgent within 72 hours.',
        status: 'plan-dependent',
        cites: [
          { title: 'P.L. 2023, c.296 — Ensuring Transparency in Prior Authorization Act (N.J.S.A. 17B:30-55.1 et seq.)', url: 'https://www.nj.gov/treasury/pensions/documents/laws/ch296-2023.pdf' },
          { title: 'NJ DOBI Bulletin 24-17 — Ensuring Transparency in Prior Authorization Act', url: 'https://nj.gov/dobi/bulletins/blt24_17.pdf' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification: fully insured NJ policy (ETPAA 9/12-day clock, 180-day authorizations) vs. self-funded ERISA plan (15 days / 72 hours).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two parents\' plans, New Jersey\'s coordination-of-benefits rule for fully insured group contracts puts first "the plan of the parent whose birthday falls earlier in a year"; "birthday" means month and day only, and if both parents share a birthday the plan that covered the parent longer pays first. Self-funded plans set their order in the plan document. Note that Horizon\'s ABA reimbursement policy and its telemedicine policy both list Coordination of Benefits as out of scope, so when Horizon is secondary, ask how ABA claims and authorizations are handled.',
        status: 'plan-dependent',
        cites: [
          { title: 'N.J.A.C. 11:4-28.6 — Rules for coordination of benefits (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-11-4-28-6' },
          { title: 'Horizon BCBSNJ reimbursement policy — Applied Behavior Analysis in the Treatment of Autism Spectrum Disorders (revised 3/26/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/applied-behavior-analysis-treatment-autism-spectrum-disorders' },
        ],
        verifyVia: 'Benefits verification with both plans: which is primary for the child, and whether Horizon requires its own ABA authorization when it is secondary.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Horizon follows the DOBI position quoted in its medical policy: ABA is eligible for benefits "if administered directly by or under the direct supervision of an individual who is credentialed by the national Behavior Analyst Certification Board as either: A Board Certified Behavior Analyst - Doctoral (BCBA-D); Or a Board Certified Behavior Analyst (BCBA)." Form 40001 describes 97153 as treatment "administered by technician under the direction of BCBA, receiving 1 hour of supervision for every 5 to 10 hours of direct treatment." Session documentation must name everyone working with the member and their designation ("BCBA, BcaBA, RBT, etc."). No published rule requires the RBT credential by name.',
        status: 'verified',
        cites: [
          { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
          { title: 'Horizon BCBSNJ — Applied Behavior Analysis Supplemental Information, form 40001 (05152026)', url: 'https://www.horizonblue.com/sites/default/files/2026-06/40001-aba-supplemental-info.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'Not stated as a rule. Form 40001 says 97155 "May be used for Direction of Technician (Supervision) face-to-face with one member," and the medical policy requires session records to show "what treatments were performed concurrent/overlapping and whether intervention was with member, caregiver(s), or both." Neither document says in terms whether 97155 and 97153 pay for the same minutes.',
        status: 'unverified',
        cites: [
          { title: 'Horizon BCBSNJ — Applied Behavior Analysis Supplemental Information, form 40001 (05152026)', url: 'https://www.horizonblue.com/sites/default/files/2026-06/40001-aba-supplemental-info.pdf' },
          { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
        ],
        verifyVia: 'Horizon Behavioral Health provider line (1-800-626-2212): ask whether 97155 pays alongside 97153 when the BCBA directs the technician face-to-face.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Published. Horizon\'s ABA reimbursement policy "shall apply the maximum daily allowable units" per 15-minute code: 97151 32, 97152 16, 97153 32, 97154 18, 97155 24, 97156 16, 97157 16, 97158 16, 0362T 16, 0373T 32. Billing above what was authorized "will not be considered for reimbursement," units billed above the daily limits trigger medical-necessity review, and moving the same service to another code to get around the limit "will be denied and/or subject to medical necessity review."',
        status: 'verified',
        cites: [{ title: 'Horizon BCBSNJ reimbursement policy — Applied Behavior Analysis in the Treatment of Autism Spectrum Disorders (revised 3/26/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/applied-behavior-analysis-treatment-autism-spectrum-disorders' }],
      },
      noteSignature: {
        value:
          'Horizon sets note content, not a session-note signer or deadline. The medical policy wants narrative session notes tied to treatment-plan goals, start/stop times (breaks and snacks not billable), who worked with the member and their credential, prompt level, and data per opportunity; session data summaries are "submitted upon request on a case-by-case basis." The treatment plan must carry the "Signature of the ordering health care provider (i.e., BCBA)," and both the assessment report and the progress report end with the "Signature, title, and credential of the author of the report as well as the supervising BCBA, if different than the author."',
        status: 'unverified',
        cites: [
          { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
          { title: 'Horizon BCBSNJ — Applied Behavior Analysis Provider Report Guidelines (August 2024)', url: 'https://www.horizonblue.com/sites/default/files/ABA_Report_Guidelines%208.2024.pdf' },
        ],
        verifyVia: 'Your Horizon participation agreement and Horizon\'s record-keeping standards: ask who must sign each session note and by when.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'School is the restriction. Until November 30, 2026 the medical policy says "ABA hours provided per this policy will be for time of treatment outside of the school setting (i.e., home or office setting). The school is responsible for ABA provided by an aide throughout the school day," and "Services supplied by the member\'s school district are excluded"; ABA delivered under an NJ Early Intervention plan or a school IEP "is not eligible for coverage by Horizon BCBSNJ." From December 1, 2026 the revised policy allows some school-based ABA: "ABA services delivered during core instructional periods are generally not medically necessary when the requested intervention primarily supports educational participation, classroom instruction, or academic performance. School-based ABA services may be considered medically necessary during non-instructional periods, including lunch, recess, transitions, and other natural social environments," when they target clinically significant deficits and are "not duplicative of supports provided under the member\'s IEP." Any requested location (center, home, school, community, telehealth) needs a clinical rationale. Form 40001 asks for hours per week by setting: member\'s home, facility/clinic, or other. Telehealth bills POS 10 (home) or 02.',
        status: 'verified',
        cites: [
          { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
          { title: 'Horizon BCBSNJ Medical Policy 165 — ASD Treatment Services: ABA and DIR/Floortime (effective 12/1/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/cf5ac712-dd58-45df-11d5-01816106a41e' },
          { title: 'Horizon BCBSNJ — Applied Behavior Analysis Supplemental Information, form 40001 (05152026)', url: 'https://www.horizonblue.com/sites/default/files/2026-06/40001-aba-supplemental-info.pdf' },
          { title: 'Horizon BCBSNJ reimbursement policy — Telemedicine and Telehealth Services (revised 12/18/2025)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/telemedicine-and-telehealth-services' },
        ],
      },
      billAsProvider: {
        value:
          'The behavior analyst. Horizon "shall only consider applied behavior analysis services for reimbursement when submitted by a Board Certified Behavior Analyst (BCBA®/BCBA-D®) or Licensed Behavioral Analyst," and will not pay ABA claims "submitted by a specialty other than" those. Form 40001 asks for the BCBA certification number, NJ LBA license number, the BCBA\'s NPI and the group TIN/NPI, and says the practitioner information "should match the information that will be submitted on claims." Technicians are not billed under their own NPI.',
        status: 'verified',
        cites: [
          { title: 'Horizon BCBSNJ reimbursement policy — Applied Behavior Analysis in the Treatment of Autism Spectrum Disorders (revised 3/26/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/applied-behavior-analysis-treatment-autism-spectrum-disorders' },
          { title: 'Horizon BCBSNJ — Applied Behavior Analysis Supplemental Information, form 40001 (05152026)', url: 'https://www.horizonblue.com/sites/default/files/2026-06/40001-aba-supplemental-info.pdf' },
        ],
      },
    },
    pill: 'Payer Guide · Horizon BCBSNJ · New Jersey',
    h1: 'Horizon Blue Cross Blue Shield of New Jersey ABA coverage: the intake guide.',
    metaTitle: 'Horizon BCBSNJ ABA Coverage: Prior Auth, School & Mandate Guide | Carelu',
    metaDescription:
      'How Horizon Blue Cross Blue Shield of New Jersey covers ABA for commercial members — Medical Policy 165, prior authorization on every ABA code, the daily unit table, school-hours rules before and after December 1, 2026, telehealth, and the P.L. 2009, c.115 mandate.',
    intro: [
      'Horizon BCBSNJ is New Jersey\'s Blue plan. For its commercial members ABA runs on two of its own documents: Medical Policy 165, which sets the clinical and documentation criteria (revised effective December 1, 2026), and an ABA reimbursement policy that requires prior authorization for every ABA code and caps daily units. New Jersey\'s autism mandate sits underneath for fully insured plans and for self-funded groups that opted in. Horizon\'s Medicaid plan, Horizon NJ Health, follows NJ FamilyCare rules and has its own guide.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, under Horizon Medical Policy 165' },
      { label: 'Prior auth', value: 'Required on every ABA code, assessment included' },
      { label: 'ABA in school', value: 'Outside the school setting only, until 11/30/2026; from 12/1/2026, non-instructional periods may qualify' },
      { label: 'State mandate', value: 'P.L. 2009, c.115 (N.J.S.A. 17:48-6ii and parallel sections)' },
      { label: 'Mandate age', value: 'Under 21 in statute; IHC/SEH markets extended ABA to adults (amendments adopted Nov 2014)' },
      { label: 'Mandate caps', value: '$36,000/yr in statute — DOBI Bulletin 10-02: conflicts with federal parity (MHPAEA) for group plans' },
      { label: 'Exempt from mandate', value: 'Self-funded groups that did not opt in (plan document governs)' },
      { label: 'Licensure', value: 'NJ Licensed Behavior Analyst (LBA) or BCBA/BCBA-D bills the claim' },
      { label: 'Fee schedule', value: 'Not public — paid at your Horizon Professional Agreement Allowances' },
    ],
    sections: [
      {
        h2: 'What does Horizon need with an ABA authorization request?',
        body: [
          'Requests go through the Utilization Management Request Tool in Availity Essentials. Form 40001 (ABA Supplemental Information) goes with it, plus proof of the autism diagnosis by a QHP (initial requests), current symptoms, the treatment plan, the functional assessment tool and, for concurrent requests, a progress summary. The form asks for hours per week by setting and units per code, and for concurrent reviews it asks you to explain any period where units requested were more than units used. Medical Policy 165 lists what the treatment plan must contain: measurable goals with baselines, frequency and duration, caregiver goals and participation, coordination with other providers and educators, the member\'s school supports and "verification of a current Individualized Education Program (IEP)," discharge and fading plans, a norm-referenced baseline (PDDBI, Vineland or ABAS), and the BCBA\'s signature. Treatment plans are revised every 6 months. Horizon\'s ABA Provider Report Guidelines give the outline for the assessment report and the progress report; progress reports are due "at minimum, two weeks prior to, and no more than 30 days, to the authorization end date," with graphed data per goal.',
        ],
        cites: [
          { title: 'Horizon BCBSNJ — Applied Behavior Analysis Supplemental Information, form 40001 (05152026)', url: 'https://www.horizonblue.com/sites/default/files/2026-06/40001-aba-supplemental-info.pdf' },
          { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
          { title: 'Horizon BCBSNJ — Applied Behavior Analysis Provider Report Guidelines (August 2024)', url: 'https://www.horizonblue.com/sites/default/files/ABA_Report_Guidelines%208.2024.pdf' },
        ],
      },
      {
        h2: 'Can Horizon pay for ABA in school?',
        body: [
          'Until November 30, 2026, no. The current Medical Policy 165 says authorized ABA hours "will be for time of treatment outside of the school setting (i.e., home or office setting). The school is responsible for ABA provided by an aide throughout the school day." Services the school district supplies are excluded, and ABA that is part of an NJ Early Intervention service plan or a school IEP "is not eligible for coverage by Horizon BCBSNJ" (form 40001 repeats this).',
          'From December 1, 2026, the revised policy opens a narrow door. ABA during "core instructional periods" is generally not medically necessary when it mainly supports classroom instruction or academics. ABA in school "may be considered medically necessary during non-instructional periods, including lunch, recess, transitions, and other natural social environments," when it targets clinically significant deficits in social communication, emotional regulation, adaptive functioning, safety or peer interaction and does not duplicate IEP supports. Every requested location, school included, needs a clinical rationale with the request. Services supplied by the school district stay excluded.',
        ],
        cites: [
          { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
          { title: 'Horizon BCBSNJ Medical Policy 165 — ASD Treatment Services: ABA and DIR/Floortime (effective 12/1/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/cf5ac712-dd58-45df-11d5-01816106a41e' },
          { title: 'Horizon BCBSNJ — Applied Behavior Analysis Supplemental Information, form 40001 (05152026)', url: 'https://www.horizonblue.com/sites/default/files/2026-06/40001-aba-supplemental-info.pdf' },
        ],
      },
      {
        h2: 'Does Horizon allow retroactive authorization for ABA?',
        body: [
          'Not as a routine path. The ABA reimbursement policy says "All ABA codes require prior authorization" and "Any request without prior authorization will prompt a denial of claims and require medical necessity review upon receipt of medical records." So services delivered without authorization are reviewed after the fact (a post-service medical-necessity review) only once the claim is denied and records are sent; payment is not assured. For telehealth, approval "must be obtained prior to rendering the services."',
          'New Jersey law protects you in two cases on fully insured plans. Under the Ensuring Transparency in Prior Authorization Act, a payer may not deny a claim for lack of prior authorization if you asked before the service and the payer did not answer within the legal deadline. And if a child changes plans, the new payer "shall accept the authorization" issued by the old one, based on the new plan\'s benefits. Self-funded plans are outside the Act.',
        ],
        cites: [
          { title: 'Horizon BCBSNJ reimbursement policy — Applied Behavior Analysis in the Treatment of Autism Spectrum Disorders (revised 3/26/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/applied-behavior-analysis-treatment-autism-spectrum-disorders' },
          { title: 'Horizon BCBSNJ reimbursement policy — Telemedicine and Telehealth Services (revised 12/18/2025)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/telemedicine-and-telehealth-services' },
          { title: 'P.L. 2023, c.296 — Ensuring Transparency in Prior Authorization Act (N.J.S.A. 17B:30-55.1 et seq.)', url: 'https://www.nj.gov/treasury/pensions/documents/laws/ch296-2023.pdf' },
        ],
      },
      {
        h2: 'The New Jersey mandate under Horizon\'s policy',
        body: [
          'Medical Policy 165 starts from the mandate: P.L. 2009, c.115 requires policies issued or renewed on or after February 9, 2010 to cover "medically necessary behavioral interventions based on the principles of applied behavior analysis and related structural behavioral programs as prescribed by a treatment plan." Horizon applies the mandate and its own criteria to fully insured plans and to self-funded plans that opted to follow the mandate; for self-funded plans that did not, the same medical-necessity criteria apply but "Contract exclusions and/or limitations related to Applied Behavior Analysis(ABA) will determine the available benefit." The statute\'s $36,000 yearly ABA cap is mostly unusable on group plans: DOBI Bulletin 10-02 says the cap on a condition "classified in New Jersey law as a mental illness conflicts with federal provisions prohibiting such limits" under the federal parity law (MHPAEA). The individual and small-employer health benefits boards extended ABA coverage to adults with autism (amendments adopted in November 2014, effective January 2015).',
        ],
        cites: [
          { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
          { title: 'NJ DOBI Bulletin 10-02 — Implementation of P.L. 2009, c.115', url: 'https://www.nj.gov/dobi/bulletins/blt10_02.pdf' },
          { title: 'Autism NJ — Amendments to Insurance Mandate Expand Coverage', url: 'https://autismnj.org/news/amendments-to-insurance-mandate-expand-coverage/' },
        ],
      },
      {
        h2: 'What is Horizon\'s fee schedule for ABA?',
        body: [
          'Horizon publishes no ABA rate table. Its reimbursement policies make payment subject to "The terms of any applicable provider participation agreement," and the telemedicine policy says participating providers are paid "at the same rate as that of the existing Professional Agreement Allowances." Participating providers may not bill the member beyond cost-sharing ("there shall be no member liability"); a non-participating provider\'s member "may be up to the provider\'s charge." Get rates from your Horizon agreement or Horizon network relations (BHNetworkRelations@HorizonBlue.com). For a public benchmark, see the NJ FamilyCare fee-for-service rates in the New Jersey Medicaid guide.',
        ],
        cites: [
          { title: 'Horizon BCBSNJ reimbursement policy — Applied Behavior Analysis in the Treatment of Autism Spectrum Disorders (revised 3/26/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/applied-behavior-analysis-treatment-autism-spectrum-disorders' },
          { title: 'Horizon BCBSNJ reimbursement policy — Telemedicine and Telehealth Services (revised 12/18/2025)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/telemedicine-and-telehealth-services' },
          { title: 'Horizon: Medical Policy Changes — ABA (eff. 1/1/2026)', url: 'https://www.horizonnjhealth.com/for-providers/news/updates-and-announcements/medical-policy-changes-applied-behavior-analysis' },
        ],
      },
      {
        h2: 'Contacts',
        body: [
          'Horizon Behavioral Health runs ABA utilization and care management for commercial members: 1-800-626-2212, or 1-800-991-5579 for the State Health Benefits Program (SHBP) and School Employees\' Health Benefits Program (SEHBP). Horizon also runs an autism care management program. Clinical questions about the policy go to the Medical Policy department (medpol_ask@horizonblue.com, linked from the policy); network questions to BHNetworkRelations@HorizonBlue.com.',
        ],
        cites: [
          { title: 'Horizon BCBSNJ — Horizon Behavioral Health provider resources', url: 'https://www.horizonblue.com/providers/products-programs/horizon-behavioral-health-sm' },
          { title: 'Horizon BCBSNJ Medical Policy 165 — ASD Treatment Services: ABA and DIR/Floortime (effective 12/1/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/cf5ac712-dd58-45df-11d5-01816106a41e' },
          { title: 'Horizon: Medical Policy Changes — ABA (eff. 1/1/2026)', url: 'https://www.horizonnjhealth.com/for-providers/news/updates-and-announcements/medical-policy-changes-applied-behavior-analysis' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured, self-funded that opted into the NJ mandate, or self-funded that did not. It decides which rules apply. SHBP/SEHBP members use a separate phone line.' },
      { title: 'Line of business', desc: 'Horizon commercial vs. Horizon NJ Health (NJ FamilyCare Medicaid). Different rules and a different guide.' },
      { title: 'Diagnosis report', desc: 'Signed, recent ASD diagnosis with DSM-5 severity level, from a pediatrician, APN, pediatric neurologist, child psychiatrist or psychologist, ideally with the standardized tool used.' },
      { title: 'IEP and school schedule', desc: 'Horizon wants to see the current IEP and school supports, and it does not pay school-hours ABA (narrowly allowed in non-instructional periods from 12/1/2026).' },
      { title: 'Baseline adaptive measure', desc: 'PDDBI, Vineland or ABAS score, repeated no more often than every 6 months.' },
    ],
    sources: [
      { title: 'Horizon BCBSNJ Medical Policy 165 — Applied Behavior Analysis in the Treatment of ASD (effective 7/15/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/01240ce2-1507-c5e4-b8aa-52f103dbf80c' },
      { title: 'Horizon BCBSNJ Medical Policy 165 — ASD Treatment Services: ABA and DIR/Floortime (effective 12/1/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/medical-policies/detail/cf5ac712-dd58-45df-11d5-01816106a41e' },
      { title: 'Horizon BCBSNJ reimbursement policy — Applied Behavior Analysis in the Treatment of Autism Spectrum Disorders (revised 3/26/2026)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/applied-behavior-analysis-treatment-autism-spectrum-disorders' },
      { title: 'Horizon BCBSNJ reimbursement policy — Telemedicine and Telehealth Services (revised 12/18/2025)', url: 'https://www.horizonblue.com/providers/policies-procedures/policies/reimbursement-policies-guidelines/telemedicine-and-telehealth-services' },
      { title: 'Horizon BCBSNJ — Applied Behavior Analysis Supplemental Information, form 40001 (05152026)', url: 'https://www.horizonblue.com/sites/default/files/2026-06/40001-aba-supplemental-info.pdf' },
      { title: 'Horizon BCBSNJ — Applied Behavior Analysis Provider Report Guidelines (August 2024)', url: 'https://www.horizonblue.com/sites/default/files/ABA_Report_Guidelines%208.2024.pdf' },
      { title: 'Horizon BCBSNJ — Horizon Behavioral Health provider resources', url: 'https://www.horizonblue.com/providers/products-programs/horizon-behavioral-health-sm' },
      { title: 'Horizon: Medical Policy Changes — ABA (eff. 1/1/2026)', url: 'https://www.horizonnjhealth.com/for-providers/news/updates-and-announcements/medical-policy-changes-applied-behavior-analysis' },
      { title: 'NJ DOBI Bulletin 10-02 — Implementation of P.L. 2009, c.115', url: 'https://www.nj.gov/dobi/bulletins/blt10_02.pdf' },
      { title: 'Autism NJ — Amendments to Insurance Mandate Expand Coverage', url: 'https://autismnj.org/news/amendments-to-insurance-mandate-expand-coverage/' },
      { title: 'P.L. 2023, c.296 — Ensuring Transparency in Prior Authorization Act (N.J.S.A. 17B:30-55.1 et seq.)', url: 'https://www.nj.gov/treasury/pensions/documents/laws/ch296-2023.pdf' },
      { title: 'NJ DOBI Bulletin 24-17 — Ensuring Transparency in Prior Authorization Act', url: 'https://nj.gov/dobi/bulletins/blt24_17.pdf' },
      { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
      { title: 'N.J.A.C. 11:4-28.6 — Rules for coordination of benefits (LII)', url: 'https://www.law.cornell.edu/regulations/new-jersey/N-J-A-C-11-4-28-6' },
      { title: 'P.L.2021, c.310 — amends N.J.S.A. 30:4D-6k (Medicaid/NJ FamilyCare telehealth coverage) and 26:2S-29 (carrier telehealth coverage)', url: 'https://nj.gov/treasury/pensions/documents/laws/ch310-2021.pdf' },
    ],
    faq: [
      { q: 'Does Horizon BCBSNJ cover ABA therapy?', a: 'Yes, for autism spectrum disorder, under Horizon Medical Policy 165 and the New Jersey autism mandate for fully insured plans and self-funded groups that opted in. Every ABA code needs prior authorization.' },
      { q: 'Does Horizon NJ commercial have any restrictions on ABA in school?', a: 'Yes. Until November 30, 2026, Horizon pays ABA only outside the school setting; the school is responsible for ABA during the school day, and IEP or Early Intervention services are not covered. From December 1, 2026, school-based ABA may be approved during non-instructional periods (lunch, recess, transitions) if it is not duplicative of the IEP and you justify the setting. ABA during core instruction is generally not medically necessary.' },
      { q: 'Does Horizon allow retroactive authorization for ABA?', a: 'Not routinely. Its ABA reimbursement policy says a service without prior authorization gets a claim denial and then a medical-necessity review once records arrive. On fully insured plans, NJ law bars a no-authorization denial if Horizon missed its decision deadline, and a new payer must honor an existing authorization when a child switches plans.' },
      { q: 'Can ABA be delivered by telehealth with Horizon?', a: 'Yes, when authorized. Horizon\'s telemedicine policy lists 97151–97158; bill modifier 95 or GT with POS 10 (home) or 02, get medical-necessity approval before the service, and explain the telehealth use in the treatment plan.' },
      { q: 'Does Horizon require RBT certification?', a: 'Not by name in its published policies. ABA must be delivered by or under the direct supervision of a BCBA or BCBA-D, and the BCBA or NJ Licensed Behavior Analyst bills the claim. Form 40001 expects 1 hour of supervision for every 5 to 10 hours of technician treatment.' },
    ],
  },
};

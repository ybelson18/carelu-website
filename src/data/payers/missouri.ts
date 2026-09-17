import type { PayerConfig } from './types.js';

export const missouriPayers: Record<string, PayerConfig> = {
  'missouri-medicaid': {
    slug: 'missouri-medicaid',
    cardDesc: 'Full FFS carve-out: one payer, one fax precert (form 2575-045), no MCO contracting.',
    assessmentPA: {
      value: 'Required — all ABA needs precertification (sole exception: school-based ABA in an IEP); form 2575-045 faxed to (573) 635-6516 with the diagnostic evaluation',
      status: 'verified',
      cites: [
        { title: 'MO HealthNet Behavioral Health Services Manual, §1.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' },
        { title: 'MO HealthNet Behavioral Health Services page (form 2575-045 + bulletins)', url: 'https://mydss.mo.gov/mhd/behavioral-health-services' },
      ],
    },
    treatmentPA: {
      value: 'Required — precertified up to 6 months; continuation needs the current plan, progress graphs, and barriers if progress isn\'t evident',
      status: 'verified',
      cites: [
        { title: 'MO HealthNet Behavioral Health Services Manual, §1.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' },
        { title: 'MO HealthNet Behavioral Health Services page (form 2575-045 + bulletins)', url: 'https://mydss.mo.gov/mhd/behavioral-health-services' },
      ],
    },
    dxRequired: {
      value: 'ASD (F84.0, F84.3, F84.5, F84.8) by a licensed physician or psychologist for the standard benefit — but under EPSDT/HCY, ABA is also covered for other diagnoses when medically necessary',
      status: 'verified',
      cites: [
        { title: 'MO HealthNet Behavioral Health Services Manual, §1.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' },
      ],
    },
    payer: 'MO HealthNet (Missouri Medicaid)',
    state: 'MO', kind: 'state-medicaid',
    pill: 'Payer Guide · MO HealthNet',
    h1: 'MO HealthNet (Missouri Medicaid) ABA coverage: the intake guide.',
    metaTitle: 'MO HealthNet (Missouri Medicaid) ABA Coverage, Rates & Precert Guide | Carelu',
    metaDescription:
      'How MO HealthNet covers ABA — the full fee-for-service carve-out from managed care, the single fax precertification (form 2575-045), EPSDT coverage beyond autism, the RBT/BCBA modifier rate split, 6-month auth periods, and the mandatory RBT credential rule.',
    intro: [
      'Missouri runs statewide Medicaid managed care — Healthy Blue, Home State Health, UnitedHealthcare, and the Show Me Healthy Kids specialty plan — but for ABA, none of that matters: the benefit is fully carved out of managed care, and every MO HealthNet member receives ABA on a fee-for-service basis directly from the state. The Behavioral Health Services Manual says it plainly, and the plans\' own manuals confirm it. For an ABA practice, MO HealthNet is effectively a single-payer state: one precertification pathway (a form faxed to the state help desk — no UM vendor, no portal), one fee schedule, and zero MCO contracting or credentialing for ABA. The whole intake playbook below is about working that one pathway well.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — under 21; ASD standard benefit, plus other diagnoses under EPSDT/HCY when medically necessary' },
      { label: 'Structure', value: 'Full FFS carve-out — MCO enrollees included; no MCO ever touches ABA' },
      { label: 'Precert', value: 'Required for everything except IEP school-based ABA — form 2575-045 by fax to (573) 635-6516' },
      { label: 'Auth periods', value: 'Up to 6 months; approved hours and dates come back by fax' },
      { label: 'Rates (per 15 min)', value: '97153: $20.13 (HO/HN) vs. $16.37 (HM technician/RBT); 97151/97155/97156: $25.26 (HO)' },
      { label: 'RBT rule', value: 'National RBT credential mandatory — 90-day grace from passing the competency assessment' },
      { label: 'Licensure', value: 'Missouri LBA (RSMo 337.315); psychologists need MHD ABA-specialty approval' },
      { label: 'Staff screening', value: 'RBTs: BACB background + abuse-registry check; LBA/LaBA: MSHP + FBI fingerprints; FCSR not automatic for ABA' },
    ],
    sections: [
      {
        h2: 'The carve-out: why there are no MCO guides for Missouri',
        body: [
          'The Behavioral Health Services Manual states that participants enrolled in a MO HealthNet Managed Care health plan receive ABA services on a FFS basis, outside the managed-care benefit package — and the plans corroborate it in their own documents. Healthy Blue\'s provider manual lists ABA among services "reimbursed by the state agency on a fee-for-service basis," and the Show Me Healthy Kids manual\'s benefit grid routes ABA to "MO HealthNet Fee For Service." So whichever card a family shows — Healthy Blue, Home State Health, UnitedHealthcare Community Plan, or Show Me Healthy Kids (the statewide specialty plan for foster-care and adoption-subsidy children, a population with elevated behavioral needs) — the ABA answer is identical: state FFS, state precert, state fee schedule. MCO case managers are a referral source, not a payer; note that OT/PT/speech remain plan-covered with the MCO, which makes multi-service kids a coordination point, not a contracting one. The state\'s own MO HealthNet Managed Care Policy Statements (revised 7/2023 — confirmed as of this review still the current edition; no newer version was found) directly corroborates the carve-out: it lists ABA among services managed-care plans are not required to provide, states ABA is covered "when provided by MO HealthNet enrolled providers" (i.e., FFS), and confirms "All ABA services require precertification."',
        ],
        cites: [
          { title: 'MO HealthNet Behavioral Health Services Manual, §1.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' },
          { title: 'MO HealthNet Managed Care Policy Statements (rev. 7/2023 — current, no newer edition found)', url: 'https://dss.mo.gov/business-processes/managed-care/vendor-docs-2022/mo-healthnet-managed-care-policy-statements-09-23.pdf' },
          { title: 'Healthy Blue MO HealthNet Managed Care Provider Manual', url: 'https://provider.healthybluemo.com/docs/gpp/MO_CAID_HealthNetManagedCareProviderManual.pdf' },
          { title: 'Show Me Healthy Kids Provider Reference Manual (benefit grid)', url: 'https://www.homestatehealth.com/content/dam/centene/home-state-health/pdfs/HSH-SMHK-Provider-Manual_508%20Compliant%20063022.pdf' },
        ],
      },
      {
        h2: 'Precertification: one form, one fax number',
        body: [
          'All ABA services require precertification — the manual\'s sole exception is school-based ABA delivered under an IEP. The mechanics are refreshingly analog: complete the "Applied Behavior Analysis Request for Precertification" form (form 2575-045) and fax it to the MHD Behavioral Health Services help desk at (573) 635-6516. The state reviews in-house and faxes back the approved hours and the precert start and end dates. The initial "ABA Assessment for Intervention Planning" precert requires the diagnostic evaluation attached; the initial intervention precert requires that assessment plus the intervention plan; and continued intervention requires the current plan, progress data and graphs, and — where progress isn\'t evident — identified barriers and strategies. Intervention may be precertified for up to six months from the start date, with a new precert required to continue beyond it.',
          'Eligibility is diagnosis-flexible in a way intake teams should not miss: the standard benefit requires a participant under 21 with a diagnostic evaluation by a licensed physician or licensed psychologist producing an ASD diagnosis (precertifiable ICD-10 codes F84.0, F84.3, F84.5, F84.8) and recommending ABA as medically necessary — with evaluations expected to follow the Missouri Autism Guidelines Initiative\'s best-practice guidelines. But under the Healthy Children and Youth (EPSDT) program, ABA is also covered for participants under 21 with other diagnoses when medically necessary. An autism diagnosis is not an absolute gate — don\'t turn a non-ASD family away before the EPSDT analysis.',
        ],
        cites: [
          { title: 'MO HealthNet Behavioral Health Services Manual, §1.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' },
          { title: 'MO HealthNet Behavioral Health Services page (form 2575-045 + bulletins)', url: 'https://mydss.mo.gov/mhd/behavioral-health-services' },
          { title: 'MHD ABA provider training (April 2022)', url: 'https://dss.mo.gov/mhd/providers/education/files/rodgers-applied-behavior-analysis.pdf' },
        ],
      },
      {
        h2: 'Rates: the modifier scheme is the revenue model',
        body: [
          'Missouri pays by rendering-practitioner tier, flagged with modifiers: HO = behavior analyst or psychologist, HN = assistant behavior analyst, HM = behavior technician/RBT (billed by the licensed supervisor), U8 = home or other place of service, TM = telemedicine. Per 15-minute unit from the official fee schedule: 97151 assessment pays $25.26 (max 32 units); 97153 direct treatment pays $20.13 at both the HO and HN tiers but $16.37 with the HM technician modifier (raised effective 7/1/2024 from $17.73; max 32 units — 8 hours/day); 97155 pays $25.26 HO ($27.46 with U8 in-home, $17.73 HN; max 24 units); 97156 family training pays $25.26 HO / $20.13 HN (max 16 units). Two quirks worth wiring into billing: the fee file marks the TM telemedicine rows as NOT requiring prior authorization, and technicians\' claims must never carry the U8 modifier. The daily unit maximums are real — an October 2022 hot tip confirmed a system fix after 97153/97155 claims wrongly denied on limit restrictions.',
        ],
        cites: [
          { title: 'MHD Applied Behavioral Analysis fee schedule (official download portal)', url: 'https://apps.dss.mo.gov/fmsfeeschedules/DLFiles.aspx' },
        ],
      },
      {
        h2: 'Staffing rules: the RBT mandate and enrollment structure',
        body: [
          'Missouri made the national RBT credential mandatory with a 90-day grace period: a behavior technician (18+, high-school diploma, 40-hour RBT training, passed initial competency assessment) may render services for up to 90 calendar days from passing the competency assessment, but must pass the national RBT exam and hold the BACB credential by day 90 to continue — effective April 1, 2024 and reiterated in MHD\'s June 2026 billing-compliance bulletin. Technicians and RBTs cannot enroll as MHD providers; their services are billed by the licensed supervisor with the HM modifier plus the supervisor\'s specialty modifier. Enrolled behavior analysts hold the Missouri (or home-state) LBA license, and psychologists may only bill ABA once MHD approves them for the ABA specialty (credential documents fax to MMAC Provider Enrollment, (573) 634-3105). One structural recommendation from the state\'s own training: group practices with two or more licensed behavior analysts should enroll as an "Autism Clinic" (Provider Type 50 – Clinic/Group, specialty AC), which parks precerts at the clinic level so any performing provider in the clinic can serve the client — a genuine continuity-of-care advantage when supervisors change.',
        ],
        cites: [
          { title: 'MO HealthNet Behavioral Health Services page (June 2026 RBT mandate bulletin)', url: 'https://mydss.mo.gov/mhd/behavioral-health-services' },
          { title: 'MHD ABA provider training (April 2022)', url: 'https://dss.mo.gov/mhd/providers/education/files/rodgers-applied-behavior-analysis.pdf' },
          { title: 'MO HealthNet Behavioral Health Services Manual, §1.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'At the technician level, Missouri layers almost nothing on the BACB — because it delegated the whole credential: 13 CSR 70-98.030 requires technicians to be "credentialed by the Behavior Analyst Certification Board (BACB) as a Registered Behavior Technician," with no state-registry alternative, and the April 1, 2024 policy adds the age/education floor (18+, high-school diploma or national equivalent, the 40-hour training and competency assessment) alongside the 90-day exam runway covered above. That makes the BACB\'s own screening rules the binding check for every technician hire: within 180 days of paying for the RBT application, the applicant must pass a criminal background check and an abuse-registry check "comparable to those required of home health aides, child care professionals, and teachers" — an employer-run check inside that window satisfies it if you keep the documentation for audit. One pipeline wrinkle: applicants on or after January 1, 2026 need the updated 2026 40-hour training (certificate carrying the 2026 approval statement, trainer an active BCBA/BCaBA with supervision training) and the updated competency assessment.',
          'Supervisors carry the state\'s only individual-level fingerprint mandate. LBA and LaBA licensure under RSMo 337.315 (Behavior Analyst Advisory Board, Division of Professional Registration — applications now run through the MOPRO portal, launched January 14, 2025) requires two classified fingerprint sets: one processed by the Missouri State Highway Patrol against the state repository, the second forwarded to the FBI. Missouri also adds a training mandate found nowhere in the ABA payment rules: at least two hours of suicide assessment, referral, treatment, and management training at initial licensure and at every renewal (HB 1719, effective August 28, 2018). Useful for hiring pre-certification talent: the statute provides provisional licenses allowing practice under licensed supervision before BCBA/BCaBA certification — terminating automatically after one year, renewable once for a two-year maximum — plus 90-day temporary licenses (one extension) for practitioners licensed elsewhere. On structure, 13 CSR 70-98.030 requires each technician to work under an LBA, an LaBA, or a licensed psychologist officially granted supervisory privileges by the BACB, with the supervisory relationship documented in writing; the rule sets no numeric ratio of its own, so the BACB\'s 5%-of-monthly-hours RBT supervision minimum (two monthly face-to-face contacts, at least one individual) is the operative floor.',
          'At the agency level, screening runs through Missouri Medicaid Audit & Compliance: under 13 CSR 65-2 and 42 CFR 455.450, MMAC screens every provider at initial enrollment and revalidation by federal risk category — limited-risk screening covers cross-state license verification, identity confirmation, and database checks (SSA Death Master File, NPPES, OIG exclusions, Medicare enrollment, National Sex Offender Public Website); moderate risk (the default for any provider type not otherwise categorized) adds pre-enrollment and unannounced post-enrollment site visits; high risk adds fingerprint-based FBI and MSHP checks of every 5%-or-greater owner, submitted via the MACHS system through the state vendor IDEMIA, with an exemption for owners fingerprinted for Medicare or another state Medicaid within the last two years. Two honest caveats close the picture. First, Missouri\'s Family Care Safety Registry is not automatic for ABA agencies: RSMo 210.900 ties the "mental health worker" registration duty to personal-care staff of DD facilities and group homes, so a standard outpatient/in-home ABA clinic isn\'t covered by definition — though agencies operating DD facilities or group homes or employing personal-care workers are (registration within 15 days of hire), and many providers use the FCSR voluntarily as an inexpensive screening tool. Second, the MO HealthNet ABA rule itself contains no employee background-check provision, so the binding individual-level checks are exactly the BACB RBT check and the licensure fingerprinting above — confirm any employer-level extras with MMAC provider enrollment rather than assuming them.',
        ],
        cites: [
          { title: '13 CSR 70-98.030 — Applied Behavior Analysis Services', url: 'https://www.law.cornell.edu/regulations/missouri/13-CSR-70-98-030' },
          { title: 'MO HealthNet Provider Bulletin Vol. 47 No. 19 — Grace Period for RBT Credential', url: 'https://mydss.mo.gov/sites/mydss/files/media/pdf/2024/09/ABA-Grace-Period-RBT-Bulletin.pdf' },
          { title: 'BACB RBT Handbook (background-check eligibility requirement)', url: 'https://assets.bacb.com/wp-content/uploads/2022/01/RBTHandbook_230407-a.pdf' },
          { title: 'BACB — Meeting RBT Requirements During the 2026 Transition', url: 'https://www.bacb.com/wp-content/uploads/2025/07/RBT-2026-Requirements_250723-a.pdf' },
          { title: 'RSMo § 337.315 — behavior analyst licensure (fingerprints, provisional licenses)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=337.315' },
          { title: 'Missouri Behavior Analyst Advisory Board (Division of Professional Registration)', url: 'https://pr.mo.gov/ba.asp' },
          { title: 'MMAC — Provider Assigned Risk Categories', url: 'https://mmac.mo.gov/providers/provider-enrollment/new-providers/provider-assigned-risk-categories/' },
          { title: 'MMAC — Fingerprint Based Criminal History Checks', url: 'https://mmac.mo.gov/providers/provider-enrollment/new-providers/fingerprint-based-criminal-history-checks/' },
          { title: 'RSMo § 210.900 — Family Care Safety Registry definitions', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=210.900' },
          { title: 'MO DHSS FAQ — Who is required to register with the Family Care Safety Registry?', url: 'https://mohealth.uservoice.com/knowledgebase/articles/1166425-who-is-required-to-register-with-the-family-care-s' },
        ],
      },
    ],
    collect: [
      { title: 'MO HealthNet eligibility — not the plan card', desc: 'Whichever MCO card the family shows, ABA is state FFS. Verify MO HealthNet eligibility; skip the MCO analysis entirely.' },
      { title: 'Diagnostic evaluation', desc: 'By a licensed physician or psychologist — required with the assessment precert. ASD codes F84.0/F84.3/F84.5/F84.8, or frame the EPSDT case for other diagnoses.' },
      { title: 'Age (under 21)', desc: 'The benefit is under-21 in both the standard and EPSDT pathways.' },
      { title: 'School services / IEP status', desc: 'IEP-based school ABA is precert-exempt — and a coordination fact for the intervention plan.' },
      { title: 'Rendering-tier plan', desc: 'HO vs. HN vs. HM decides the rate on every hour — staffing mix is a first-order revenue variable.' },
    ],
    sources: [
      { title: 'MO HealthNet Behavioral Health Services Manual, §1.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' },
      { title: 'MHD Applied Behavioral Analysis fee schedule (official download portal)', url: 'https://apps.dss.mo.gov/fmsfeeschedules/DLFiles.aspx' },
      { title: 'MO HealthNet Behavioral Health Services page (precert form 2575-045, bulletins)', url: 'https://mydss.mo.gov/mhd/behavioral-health-services' },
      { title: 'MHD ABA provider training — Applied Behavior Analysis Services (April 2022)', url: 'https://dss.mo.gov/mhd/providers/education/files/rodgers-applied-behavior-analysis.pdf' },
      { title: 'Healthy Blue MO HealthNet Managed Care Provider Manual', url: 'https://provider.healthybluemo.com/docs/gpp/MO_CAID_HealthNetManagedCareProviderManual.pdf' },
      { title: 'Show Me Healthy Kids Provider Reference Manual', url: 'https://www.homestatehealth.com/content/dam/centene/home-state-health/pdfs/HSH-SMHK-Provider-Manual_508%20Compliant%20063022.pdf' },
      { title: '13 CSR 70-98.030 — Applied Behavior Analysis Services', url: 'https://www.law.cornell.edu/regulations/missouri/13-CSR-70-98-030' },
      { title: 'MO HealthNet Provider Bulletin Vol. 47 No. 19 — Grace Period for RBT Credential', url: 'https://mydss.mo.gov/sites/mydss/files/media/pdf/2024/09/ABA-Grace-Period-RBT-Bulletin.pdf' },
      { title: 'BACB RBT Handbook', url: 'https://assets.bacb.com/wp-content/uploads/2022/01/RBTHandbook_230407-a.pdf' },
      { title: 'BACB — Meeting RBT Requirements During the 2026 Transition', url: 'https://www.bacb.com/wp-content/uploads/2025/07/RBT-2026-Requirements_250723-a.pdf' },
      { title: 'RSMo § 337.315 — behavior analyst licensure (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=337.315' },
      { title: 'Missouri Behavior Analyst Advisory Board (Division of Professional Registration)', url: 'https://pr.mo.gov/ba.asp' },
      { title: 'MMAC — Provider Assigned Risk Categories', url: 'https://mmac.mo.gov/providers/provider-enrollment/new-providers/provider-assigned-risk-categories/' },
      { title: 'MMAC — Fingerprint Based Criminal History Checks', url: 'https://mmac.mo.gov/providers/provider-enrollment/new-providers/fingerprint-based-criminal-history-checks/' },
      { title: 'RSMo § 210.900 — Family Care Safety Registry definitions', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=210.900' },
      { title: 'MO DHSS FAQ — Family Care Safety Registry registration requirements', url: 'https://mohealth.uservoice.com/knowledgebase/articles/1166425-who-is-required-to-register-with-the-family-care-s' },
      { title: 'MO HealthNet Managed Care Policy Statements (rev. 7/2023)', url: 'https://dss.mo.gov/business-processes/managed-care/vendor-docs-2022/mo-healthnet-managed-care-policy-statements-09-23.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Missouri delegates the ratio and keeps the accountability. 13 CSR 70-98.030 requires each technician to work under an LBA, an LaBA, or a licensed psychologist granted supervisory privileges by the BACB, \u201cthe supervisory relationship with a licensed ABA practitioner must be documented in writing, and the licensed supervisor is responsible for the work performed by unlicensed individuals.\u201d The rule sets no numeric ratio of its own, so the BACB\'s 5-percent-of-monthly-hours RBT supervision minimum (two monthly face-to-face contacts, at least one individual) is the operative floor. Technicians have 90 calendar days from passing the initial competency assessment to hold the national RBT credential, and the grace period attaches to the person, not to your company.',
        status: 'verified',
        cites: [{ title: 'MO HealthNet Behavioral Health Services Manual, \u00a71.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' }, { title: '13 CSR 70-98.030 \u2014 Applied Behavior Analysis Services', url: 'https://www.law.cornell.edu/regulations/missouri/13-CSR-70-98-030' }, { title: 'MO HealthNet Provider Bulletin Vol. 47 No. 19 \u2014 Grace Period for RBT Credential', url: 'https://mydss.mo.gov/sites/mydss/files/media/pdf/2024/09/ABA-Grace-Period-RBT-Bulletin.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not addressed. Neither \u00a71.16 of the Behavioral Health Services Manual nor 13 CSR 70-98.030 states whether 97155 and 97153 may be billed for the same clock time. The manual does carry a general non-covered line \u2014 \u201ctravel time is not reimbursed and must not be included as part of the scheduled appointment time\u201d \u2014 and the daily unit maximums on the fee schedule bound the day, but neither settles same-time code pairs. A 2022 hot tip confirming a system fix after 97153/97155 claims wrongly denied on limit restrictions suggests the pair does pay in practice, which is a claims-history observation rather than a published rule.',
        status: 'unverified',
        cites: [{ title: 'MO HealthNet Behavioral Health Services Manual, \u00a71.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' }, { title: 'MHD Applied Behavioral Analysis fee schedule (official download portal)', url: 'https://apps.dss.mo.gov/fmsfeeschedules/DLFiles.aspx' }],
        verifyVia: 'MHD Behavioral Health Services help desk \u2014 the same line that takes the precertification fax, (573) 635-6516 \u2014 or Provider Communications. Ask whether 97155 pays alongside 97153 for the same clock time and request the answer in writing.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Real, published and worth wiring into scheduling: per 15-minute unit, 97151 is capped at 32 units a day, 97153 at 32 units (8 hours) a day, 97155 at 24 units, and 97156 family training at 16 units. The precertification itself sets the other ceiling \u2014 ABA intervention may be precertified for up to six months from the start date, and the faxed response comes back with the number of hours allowed plus the start and end dates. The daily maximums bite: an October 2022 hot tip confirmed a system fix after 97153 and 97155 claims wrongly denied on limit restrictions.',
        status: 'verified',
        cites: [{ title: 'MHD Applied Behavioral Analysis fee schedule (official download portal)', url: 'https://apps.dss.mo.gov/fmsfeeschedules/DLFiles.aspx' }, { title: 'MO HealthNet Behavioral Health Services Manual, \u00a71.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' }],
      },
      noteSignature: {
        value:
          'Missouri puts the signature on the supervisor, explicitly. For behavior technicians and RBTs, \u201cthe licensed supervisor is responsible for the work performed by unlicensed individuals, including reviewing and signing documentation for services provided by the behavior technicians and RBTs they supervise.\u201d Beyond that, \u201call services provided must be adequately documented in the medical record\u201d under 13 CSR 70-3.030 and the Title XIX Provider Participation Agreement \u2014 see the manual\'s own definitions of adequate documentation and adequate medical records. No signing deadline is published.',
        status: 'verified',
        cites: [{ title: 'MO HealthNet Behavioral Health Services Manual, \u00a71.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' }, { title: '13 CSR 70-98.030 \u2014 Applied Behavior Analysis Services', url: 'https://www.law.cornell.edu/regulations/missouri/13-CSR-70-98-030' }],
      },
      placeOfService: {
        value:
          'Four settings, and the modifier follows the setting. \u201cServices may be provided in POS 11 (office), 12 (home), 03 (school) or 99 (other). The U8 modifier should be used for services billed with a POS 12 (home) or 99 (other)\u201d \u2014 and the U8 modifier must never be used on a behavior technician or RBT line. School-based ABA delivered under an IEP is the single precertification exemption in the whole benefit. Telemedicine uses POS 02 (not in home) or POS 10 (in home), except that distant-site services delivered on school grounds bill POS 03 with a GT modifier.',
        status: 'verified',
        cites: [{ title: 'MO HealthNet Behavioral Health Services Manual, \u00a71.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' }],
      },
      billAsProvider: {
        value:
          'The supervisor bills; the technician cannot. \u201cServices provided by a behavior technician or RBT must be billed by the licensed supervisor using the codes and modifiers specified\u2026 Behavior technicians and RBTs are not allowed to enroll as MHD providers.\u201d The HM modifier flags technician delivery and the supervisor adds their own specialty modifier (HO for behavior analyst or psychologist, HN for assistant behavior analyst). Psychologists may bill ABA only once MHD approves them for the ABA specialty, and should not use the AH modifier with these codes. MHD recommends that group practices with two or more licensed behavior analysts enroll as an Autism Clinic (Provider Type 50 \u2014 Clinic/Group, specialty AC), which parks the precertification at the clinic level so any performing provider in the clinic can serve the client.',
        status: 'verified',
        cites: [{ title: 'MO HealthNet Behavioral Health Services Manual, \u00a71.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' }, { title: 'MHD ABA provider training (April 2022)', url: 'https://dss.mo.gov/mhd/providers/education/files/rodgers-applied-behavior-analysis.pdf' }],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Under 21, on both pathways. \u201cTo be eligible for ABA services, participants must be under 21 and have a diagnostic evaluation performed by a licensed physician or licensed psychologist, resulting in a diagnosis of ASD, and recommending ABA services as medically necessary.\u201d The Healthy Children and Youth (HCY) program \u2014 Missouri\'s EPSDT \u2014 keeps the same upper bound while widening the diagnosis: ABA is also covered for participants under 21 with other diagnoses if medically necessary. No lower age bound, no hour cap and no dollar cap are published.',
        status: 'verified',
        cites: [{ title: 'MO HealthNet Behavioral Health Services Manual, \u00a71.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' }],
      },
      dxRecency: {
        value:
          'No recency rule is published. \u00a71.16 requires a diagnostic evaluation by a licensed physician or licensed psychologist but does not state how recent it must be, and the precertification table asks for the diagnostic evaluation on the initial assessment request without a date test. The only currency requirement sits on the assessment rather than the diagnosis: a periodic re-assessment precertification must carry a clinical rationale \u2014 re-administration of tools, a new behavior observed, a new environment where the participant is responding differently, or a lack of adequate progress.',
        status: 'unverified',
        cites: [{ title: 'MO HealthNet Behavioral Health Services Manual, \u00a71.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' }],
        verifyVia: 'MHD Behavioral Health Services help desk at (573) 635-6516 when faxing form 2575-045 \u2014 ask whether an evaluation of this age will be accepted before you book the assessment.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'A short list: a licensed physician or a licensed psychologist. The diagnostic evaluation must be performed by one of those two, must result in an ASD diagnosis, and must recommend ABA as medically necessary. Under the HCY/EPSDT pathway the diagnosis need not be ASD at all, but the evaluation requirement stands. Note that the person who may diagnose and the person who may bill ABA are different populations in Missouri: psychologists may only bill ABA once MHD has approved them for the ABA specialty.',
        status: 'verified',
        cites: [{ title: 'MO HealthNet Behavioral Health Services Manual, \u00a71.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' }],
      },
      diagnosticTools: {
        value:
          'Missouri names no instrument but names a standard. \u201cThe diagnostic evaluation should be performed in accordance with Autism Spectrum Disorders: Missouri Best Practice Guidelines for Screening, Diagnosis, and Assessment, published by the Missouri Autism Guidelines Initiative.\u201d The precertification table treats instruments as a reassessment trigger rather than an entry requirement \u2014 re-administration of tools is listed among the clinical rationales for a periodic ABA Assessment for Intervention Planning. So collect the full evaluation report and whatever tools it used; do not expect a closed list to check it against.',
        status: 'verified',
        cites: [{ title: 'MO HealthNet Behavioral Health Services Manual, \u00a71.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' }],
      },
      referral: {
        value:
          'There is no separate referral document \u2014 the recommendation lives inside the diagnostic evaluation, which must result in an ASD diagnosis \u201cand recommending ABA services as medically necessary.\u201d What sits in a referral\'s place is precertification, and it is universal: \u201call ABA services (except for school-based ABA services included in an IEP) require precertification.\u201d Fax form 2575-045 with the required clinicals to the Behavioral Health Services help desk at (573) 635-6516; there is no portal and no UM vendor. The initial assessment precert needs the diagnostic evaluation attached; the initial intervention precert needs that assessment plus the intervention plan; continuation needs the current plan, progress data and graphs, and \u2014 where progress is not evident \u2014 identified barriers and strategies.',
        status: 'verified',
        cites: [{ title: 'MO HealthNet Behavioral Health Services Manual, \u00a71.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' }, { title: 'MO HealthNet Behavioral Health Services page (precert form 2575-045, bulletins)', url: 'https://mydss.mo.gov/mhd/behavioral-health-services' }],
      },
      telehealth: {
        value:
          'Permissive, and unusually explicit that technicians count. \u201cAny licensed health care provider may provide telemedicine services if such services are within the scope of practice for which the health care provider is licensed\u2026 This includes applied behavior analysis services rendered by a behavior technician or RBT under the supervision of a licensed behavior analyst or licensed psychologist\u201d (13 CSR 70-3.330(2)(A)). Services must meet the same standard of care as in person, and the provider must be fully licensed in Missouri and enrolled with MO HealthNet. Bill POS 02 (telemedicine not in home) or POS 10 (telemedicine in home); distant-site services on school grounds bill POS 03 with a GT modifier, and for a participant in a residential or inpatient place of service the claim carries the GT modifier and the POS where the participant physically is, never POS 02. Telemedicine in a school needs the parent or guardian\'s authorization first, which may cover the remainder of the school year. One billing quirk: the fee file marks the TM telemedicine rows as not requiring prior authorization, but a service delivered by telemedicine is otherwise subject to exactly the same precertification and utilization review as in person.',
        status: 'verified',
        cites: [{ title: 'MO HealthNet Behavioral Health Services Manual, \u00a71.16 ABA Services (May 2026)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' }, { title: 'MHD Applied Behavioral Analysis fee schedule (official download portal)', url: 'https://apps.dss.mo.gov/fmsfeeschedules/DLFiles.aspx' }],
      },
    },
    faq: [
      { q: 'Does MO HealthNet cover ABA therapy?', a: 'Yes — for participants under 21, with precertification. The standard benefit requires an ASD diagnosis from a licensed physician or psychologist; under EPSDT/HCY, ABA is also covered for other diagnoses when medically necessary.' },
      { q: 'Do I need to contract with Missouri\'s Medicaid MCOs to provide ABA?', a: 'No. ABA is fully carved out of managed care — every member, including MCO and Show Me Healthy Kids enrollees, gets ABA through state fee-for-service. One payer, one precert form, no MCO credentialing for ABA.' },
      { q: 'How do I get an ABA authorization from MO HealthNet?', a: 'Fax form 2575-045 (the ABA Request for Precertification) with the required clinicals to the Behavioral Health Services help desk at (573) 635-6516. There\'s no portal or UM vendor — approval comes back by fax with hours and dates, for periods up to 6 months.' },
      { q: 'What does MO HealthNet pay for ABA?', a: 'Per 15-minute unit: 97151 at $25.26; 97153 at $20.13 (analyst/assistant tiers) or $16.37 with the HM technician modifier; 97155 at $25.26 ($27.46 in-home with U8); 97156 at $25.26. The HM-vs-HO split makes staffing mix the key revenue lever.' },
      { q: 'Can RBTs provide ABA under MO HealthNet?', a: 'Yes, billed by the licensed supervisor with the HM modifier — but the national RBT credential is mandatory: technicians have 90 calendar days from passing the initial competency assessment to pass the RBT exam and be BACB-credentialed.' },
    ],
  },

  'aetna-missouri': {
    slug: 'aetna-missouri',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the RSMo § 376.1224 mandate layer.',
    assessmentPA: {
      value: 'Required — precertification (form GR-69017-4), per Aetna\'s behavioral health precertification list (eff. 8/1/2024) — CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD only (F84.0–F84.9); ABA for other diagnoses considered experimental',
      status: 'unverified',
      cites: [
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        { title: 'Aetna — Applied behavior analysis medical necessity guide (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      ],
      verifyVia: 'Two Aetna documents disagree on the code range and a human must settle which governs an ABA review: CPB 0554 and CPB 0648 both list "ICD-10 codes covered if selection criteria are met: F84.0 - F84.9", while the Applied behavior analysis medical necessity guide — the guideline Aetna’s behavioral-health reviewers apply — states "a DSM-V diagnosis of Autism Spectrum Disorder (ICD-10: F84.0; F84.3 - F84.9)" in both its quality-of-care elements and its medical-necessity criteria, which leaves out F84.2 (Rett syndrome). The ASD-only half of the claim is not in doubt; the range is.',
      blocker: 'document',
    },
    payer: 'Aetna in Missouri',
    state: 'MO', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Missouri',
    h1: 'Aetna ABA coverage in Missouri: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Missouri: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Missouri families — the national clinical policy, prior authorization, the RSMo § 376.1224 mandate (the $40K ABA cap through 18, exemptions), Missouri behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Missouri, a Aetna card means three layers at once: the carrier\'s national clinical policy, Missouri\'s autism insurance mandate (RSMo § 376.1224), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'RSMo § 376.1224 (HB 1311, 2010; expanded 1/1/2020)' },
      { label: 'Mandate age', value: 'No overall age limit stated; the ABA dollar cap applies through age 18' },
      { label: 'Mandate caps', value: '$40,000/yr ABA (statutory base, CPI-indexed; exceedable with plan approval)' },
      { label: 'Exempt from mandate', value: 'Self-funded private ERISA plans; short-term and limited policies' },
      { label: 'Licensure', value: 'MO Licensed Behavior Analyst (RSMo 337.315, Div. of Professional Registration)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Missouri',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. Aetna publishes no Missouri-specific ABA policy, form, or supplement — we checked — so the national policy plus the state mandate is the whole picture, with Missouri\'s statutory constraints (the 6-month treatment-plan review cadence, the ABA cap) applying to fully-insured business by operation of law rather than via a carrier document. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in Missouri.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      {
        h2: 'The Missouri mandate: what it guarantees (and doesn\'t)',
        body: [
          'Missouri\'s mandate — enacted by 2010\'s HB 1311, with the current version applying to plans delivered, issued, continued, or renewed on or after January 1, 2020 (which added developmental and physical disability coverage) — reaches unusually far: beyond ordinary individual and group policies, it covers the state consolidated health care plan, self-insured governmental plans, MEWAs, and self-insured school district health plans established after 1/1/2020. ABA must be ordered by the treating licensed physician or psychologist in a treatment plan, supervised by a board-certified behavior analyst licensed under Chapter 337, and insurers may review the ABA treatment plan no more than once every 6 months unless the provider agrees otherwise. The headline number: ABA carries a $40,000-per-calendar-year cap for individuals through age 18 — statutory base value. Three things soften it: the cap may be exceeded with prior plan approval when additional ABA is medically necessary; it is CPI-indexed (carriers must adjust at least triennially, with the current adjusted figure published annually in the Missouri Register — don\'t quote $40K as the live number without checking); and other autism treatments (OT/PT/speech, psychiatric, pharmacy) sit outside the cap entirely. Self-funded private ERISA plans remain federally preempted.',
        ],
        cites: [
      { title: 'RSMo § 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' },
        ],
      },
      {
        h2: 'Licensure & rates in Missouri',
        body: [
          'Missouri requires behavior-analyst licensure: RSMo 337.315 prohibits practicing applied behavior analysis without an LBA (or Licensed Assistant Behavior Analyst) license or an enumerated exception — supervised trainees, licensed psychologists within scope, IDEA school personnel, and students among them. The Behavior Analyst Advisory Board within the State Committee of Psychologists (Division of Professional Registration, RSMo 337.300–337.345) reviews applications, and the mandate itself requires BCBA-supervised, Chapter 337-licensed delivery — so licensure is a coverage requirement, not just a credentialing one. On rates: Aetna does not publish commercial ABA fee schedules for Missouri (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. Benchmark against MO HealthNet\'s published fee schedule ($20.13/unit on 97153 at the analyst tier) when modeling.',
        ],
        cites: [
      { title: 'RSMo § 337.315 — behavior analyst licensure (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=337.315' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies — including MO\'s unusual reach into governmental and school self-insured plans) vs. self-funded private ERISA (exempt). Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Age vs. the cap', desc: 'The ABA dollar cap runs through age 18 and is CPI-indexed — verify the current adjusted value and year-to-date usage before projecting hours.' },
    ],
    sources: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'RSMo § 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' },
      { title: 'RSMo § 337.315 — behavior analyst licensure', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=337.315' },
      { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      { title: 'Aetna — Applied behavior analysis medical necessity guide (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Practitioners delivering ABA under CPB 0554 need BACB national certification or state behavior-analyst licensure, with unlicensed staff working under supervision per practice standards; Aetna publishes no numeric ratio. Missouri makes licensure a coverage requirement rather than just a credentialing one: \u00a7 376.1224 requires ABA to be supervised by a board-certified behavior analyst licensed under chapter 337, and RSMo 337.315 prohibits practising applied behavior analysis without an LBA or LaBA licence outside enumerated exceptions.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }, { title: 'RSMo \u00a7 337.315 \u2014 behavior analyst licensure (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=337.315' }],
      },
      concurrentBilling: {
        value:
          'Not published. Neither CPB 0554 nor CPB 0648 states whether 97155 and 97153 may be billed for the same clock time, and Aetna publishes no Missouri-specific ABA policy, form or supplement.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'Availity Essentials for the plan\'s reimbursement and claim-editing policies, or the provider-services number on the member\'s card.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'Aetna does not publish the rendering-versus-billing NPI convention for ABA. Missouri\'s mandate does supply one half of the answer for plans it reaches: reimbursement is directed to the autism service provider, or to the entity or group the supervising board-certified behavior analyst works for, and it expressly includes line-therapist services delivered under that supervision when they are in the treatment plan and medically necessary.',
        status: 'plan-dependent',
        cites: [{ title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }, { title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'Aetna provider services or Availity \u2014 confirm the rendering-versus-billing NPI convention and any required degree-level modifiers before the first claim.',
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
    },
    intakeGates: {
      ageLimit: {
        value:
          'The mandate sets no overall age limit on autism coverage \u2014 what it ages out is the dollar cap. RSMo \u00a7 376.1224 subjects ABA to \u201ca maximum benefit of forty thousand dollars per calendar year for individuals through eighteen years of age,\u201d a statutory base that is CPI-indexed (the Department of Commerce and Insurance publishes the adjusted figure annually). Coverage required under the section other than ABA \u201cshall not be subject to the age and dollar limitations described in this subsection,\u201d so OT, PT, speech, psychiatric and pharmacy care for autism carry no age cut-off and no dollar cap. Self-funded private ERISA plans are preempted from all of it; note Missouri\'s unusual reach into the state consolidated health care plan, self-insured governmental plans, MEWAs and self-insured school-district plans established on or after 1/1/2020.',
        status: 'plan-dependent',
        cites: [{ title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — ask whether RSMo § 376.1224 reaches this plan (it reaches fully-insured plans, the state consolidated health care plan, self-insured governmental plans, MEWAs and self-insured school-district plans established on or after 1/1/2020, but not private self-funded ERISA plans), and what the plan applies as this year’s dollar cap. The Missouri Department of Commerce and Insurance publishes the CPI-adjusted figure annually — quote that year’s number, never the $40,000 statutory base.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Aetna publishes no recency rule for the ASD diagnostic evaluation, and \u00a7 376.1224 sets none either \u2014 its six-month clock runs on plan review of the treatment plan, not on the age of the diagnosis. Capture the evaluation date anyway: the precertification package asks for it.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
        verifyVia: 'The precertification call or Availity, when submitting form GR-69017-4 \u2014 ask whether an evaluation of this age will be accepted for this plan.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'Two lists, and the narrower one is the statute\'s. Aetna requires the diagnosis to come from a provider qualified to diagnose within their scope \u2014 a licensed psychologist, psychiatrist or physician \u2014 and its precertification form (GR-69017-4, eff. 1/1/2026) asks for the DSM-5 diagnosis code, the diagnosing provider and their credentials. On a plan the Missouri mandate reaches, the ABA itself must additionally be ordered by the treating licensed physician or psychologist, so a diagnosis from a nurse practitioner will not by itself satisfy the ordering requirement.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
      },
      diagnosticTools: {
        value:
          'No instrument is named at either level. CPB 0554 does not require or reference a specific diagnostic tool, and the precertification form asks for the diagnosis code, the diagnosing provider and their credentials rather than for an instrument and score; \u00a7 376.1224 names none either.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
        verifyVia: 'Aetna precertification (Availity or the number on the card) \u2014 ask whether a specific instrument is expected for this plan before scheduling testing.',
        blocker: 'per-case',
      },
      referral: {
        value:
          'Yes on a plan the mandate reaches, and the statute is specific about who writes it: ABA \u201cmust be ordered by the treating licensed physician or psychologist\u201d in a treatment plan, and must be supervised by a board-certified behavior analyst licensed under chapter 337. Capture the ordering physician or psychologist and the treatment plan they signed. Two Missouri rules work in the provider\'s favour once the order exists: the carrier may review the treatment plan no more than once every six months unless the provider agrees otherwise, and the cost of obtaining any review or treatment plan is borne by the plan. Self-funded private ERISA plans are outside the statute.',
        status: 'plan-dependent',
        cites: [{ title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — confirm first whether RSMo § 376.1224 reaches this plan. Where it does, capture the ordering licensed physician or psychologist and the treatment plan they signed, and the supervising chapter 337 licensed behavior analyst. Where it does not (a private self-funded ERISA plan), ask the carrier whether it requires a physician or psychologist order and in what form.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'Aetna covers telehealth for 97151, 97153, 97155, 97156 and 97157 \u2014 97152 is excluded \u2014 billed with GT, 95 or FR modifiers per its telemedicine payment policy. Treat the answer as perishable: Aetna announced it would end ABA telehealth coverage in late 2023 and rescinded the change within weeks. Missouri\'s Medicaid telemedicine rule, which expressly allows technician-delivered ABA by telemedicine, is a different program and does not bind a commercial Aetna plan.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Missouri?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Missouri\'s mandate (RSMo § 376.1224) for fully-insured plans. Self-funded private employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Missouri autism mandate require?', a: 'Coverage of ASD diagnosis and treatment including ABA, with a $40,000-per-year ABA cap through age 18 — a CPI-indexed statutory base that can be exceeded with plan approval when medically necessary. Treatment-plan reviews are limited to once every 6 months, and ABA must be supervised by a Chapter 337-licensed behavior analyst.' },
      { q: 'What does Aetna pay for ABA in Missouri?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the MO HealthNet fee schedule, and treat rate-setting as part of contracting.' },
    ],
  },

  'cigna-missouri': {
    slug: 'cigna-missouri',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + the RSMo § 376.1224 mandate layer.',
    assessmentPA: {
      value: 'Not required for assessment codes 97151, 97152, 0362T (per Cigna\'s autism resource guide — EN0499 itself states no prior-authorization rule)',
      status: 'verified',
      cites: [
        { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — assessment + treatment plan with the ABA PA form (see Cigna\'s autism resource guide; EN0499 sets the clinical criteria, not the PA rule)',
      status: 'verified',
      cites: [
        { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD only; Rett syndrome (F84.2) excluded under EN0499',
      status: 'verified',
      cites: [
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    payer: 'Cigna / Evernorth in Missouri',
    state: 'MO', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Missouri',
    h1: 'Cigna / Evernorth ABA coverage in Missouri: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Missouri: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Missouri families — the national clinical policy, prior authorization, the RSMo § 376.1224 mandate (the $40K ABA cap through 18, exemptions), Missouri behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Missouri, a Cigna card means three layers at once: the carrier\'s national clinical policy, Missouri\'s autism insurance mandate (RSMo § 376.1224), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'RSMo § 376.1224 (HB 1311, 2010; expanded 1/1/2020)' },
      { label: 'Mandate age', value: 'No overall age limit stated; the ABA dollar cap applies through age 18' },
      { label: 'Mandate caps', value: '$40,000/yr ABA (statutory base, CPI-indexed; exceedable with plan approval)' },
      { label: 'Exempt from mandate', value: 'Self-funded private ERISA plans; short-term and limited policies' },
      { label: 'Licensure', value: 'MO Licensed Behavior Analyst (RSMo 337.315, Div. of Professional Registration)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Missouri',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. And unlike some states, Missouri gets the national policy straight: we searched the current EN0499 (effective 5/15/2026) end to end and Missouri appears nowhere — no carve-out, no state-specific criteria — so EN0499 applies to Missouri members except where state law requires otherwise. The legal floor underneath it is the mandate below, which governs fully-insured plans, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in Missouri.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Missouri mandate: what it guarantees (and doesn\'t)',
        body: [
          'Missouri\'s mandate — enacted by 2010\'s HB 1311, with the current version applying to plans delivered, issued, continued, or renewed on or after January 1, 2020 (which added developmental and physical disability coverage) — reaches unusually far: beyond ordinary individual and group policies, it covers the state consolidated health care plan, self-insured governmental plans, MEWAs, and self-insured school district health plans established after 1/1/2020. ABA must be ordered by the treating licensed physician or psychologist in a treatment plan, supervised by a board-certified behavior analyst licensed under Chapter 337, and insurers may review the ABA treatment plan no more than once every 6 months unless the provider agrees otherwise. The headline number: ABA carries a $40,000-per-calendar-year cap for individuals through age 18 — statutory base value. Three things soften it: the cap may be exceeded with prior plan approval when additional ABA is medically necessary; it is CPI-indexed (carriers must adjust at least triennially, with the current adjusted figure published annually in the Missouri Register — don\'t quote $40K as the live number without checking); and other autism treatments (OT/PT/speech, psychiatric, pharmacy) sit outside the cap entirely. Self-funded private ERISA plans remain federally preempted.',
        ],
        cites: [
      { title: 'RSMo § 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' },
        ],
      },
      {
        h2: 'Licensure & rates in Missouri',
        body: [
          'Missouri requires behavior-analyst licensure: RSMo 337.315 prohibits practicing applied behavior analysis without an LBA (or Licensed Assistant Behavior Analyst) license or an enumerated exception — supervised trainees, licensed psychologists within scope, IDEA school personnel, and students among them. The Behavior Analyst Advisory Board within the State Committee of Psychologists (Division of Professional Registration, RSMo 337.300–337.345) reviews applications, and the mandate itself requires BCBA-supervised, Chapter 337-licensed delivery — so licensure is a coverage requirement, not just a credentialing one. On rates: Cigna does not publish commercial ABA fee schedules for Missouri (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. Benchmark against MO HealthNet\'s published fee schedule ($20.13/unit on 97153 at the analyst tier) when modeling.',
        ],
        cites: [
      { title: 'RSMo § 337.315 — behavior analyst licensure (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=337.315' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies — including MO\'s unusual reach into governmental and school self-insured plans) vs. self-funded private ERISA (exempt). Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Age vs. the cap', desc: 'The ABA dollar cap runs through age 18 and is CPI-indexed — verify the current adjusted value and year-to-date usage before projecting hours.' },
    ],
    sources: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'RSMo § 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' },
      { title: 'RSMo § 337.315 — behavior analyst licensure', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=337.315' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Assessment and case supervision must come from a BCBA, a licensed behavior analyst, or an independently licensed clinician with documented ABA training, with direct supervision at the standard 1\u20132 hours per 10 hours of direct treatment; Evernorth does not credential non-licensed staff. Missouri makes the licence a coverage condition: \u00a7 376.1224 requires ABA to be supervised by a board-certified behavior analyst licensed under chapter 337.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }, { title: 'RSMo \u00a7 337.315 \u2014 behavior analyst licensure (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=337.315' }],
      },
      concurrentBilling: {
        value:
          'Restrictive, and the restriction is about other therapies as much as about ABA codes. EN0499 does not cover ABA delivered at the same time as another therapy (speech, OT) to the same child, and only one provider may bill a unit of time, with the standard supervision exceptions. Agency-to-agency transitions with overlapping authorization periods require documented coordination between agencies.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      noteSignature: {
        value:
          'Every session note needs the date, start and end times, location, focus, a detailed description of the intervention, the persons present, the service type, and the rendering provider\'s name, credential and signature. No countersignature requirement and no signing deadline are published.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      billAsProvider: {
        value:
          'Evernorth does not credential non-licensed staff, so RBT-delivered services bill under the supervising provider, and the treatment plan must name a credentialed supervisor. Missouri\'s mandate points the same way from the statutory side: reimbursement runs to the autism service provider or the entity the supervising board-certified behavior analyst works for, and expressly covers line-therapist services under that supervision.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
      },
      dailyLimits: {
        value:
          'Not published as a per-day unit ceiling. EN0499 bounds the day from a different direction: ABA is not covered when delivered at the same time as another therapy to the same child, and only one provider can bill a unit of time, with the standard supervision exceptions. Requested intensity is set in the treatment plan and authorized on the ABA PA form rather than against a published cap.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia: 'The treatment authorization itself, and Evernorth Behavioral Health provider services (the behavioral health number on the member\'s card) \u2014 ask whether any per-day MUE is applied to ABA codes on this plan.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Not published as a payable-settings list. Two sourced facts bear on setting nonetheless: the treatment plan must carry dated baseline data per setting, so settings are declared and measured rather than assumed; and every session note must record the location. Whether a given setting is payable is a plan-benefit question.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia: 'Benefits verification on the specific plan \u2014 ask which places of service are payable for ABA, and whether school-based delivery is excluded before you write school goals.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'The mandate sets no overall age limit on autism coverage \u2014 what it ages out is the dollar cap. RSMo \u00a7 376.1224 subjects ABA to \u201ca maximum benefit of forty thousand dollars per calendar year for individuals through eighteen years of age,\u201d a statutory base that is CPI-indexed (the Department of Commerce and Insurance publishes the adjusted figure annually). Coverage required under the section other than ABA \u201cshall not be subject to the age and dollar limitations described in this subsection,\u201d so OT, PT, speech, psychiatric and pharmacy care for autism carry no age cut-off and no dollar cap. Self-funded private ERISA plans are preempted from all of it; note Missouri\'s unusual reach into the state consolidated health care plan, self-insured governmental plans, MEWAs and self-insured school-district plans established on or after 1/1/2020.',
        status: 'plan-dependent',
        cites: [{ title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — ask whether RSMo § 376.1224 reaches this plan (it reaches fully-insured plans, the state consolidated health care plan, self-insured governmental plans, MEWAs and self-insured school-district plans established on or after 1/1/2020, but not private self-funded ERISA plans), and what the plan applies as this year’s dollar cap. The Missouri Department of Commerce and Insurance publishes the CPI-adjusted figure annually — quote that year’s number, never the $40,000 statutory base.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Cigna\'s recency rule attaches to the standardized assessment rather than to the diagnosis, and it is tight: initiation requires a standardized, validated instrument in its current edition administered within 60 days before treatment start. Continued treatment needs current data no more than 60 days old, a repeat standardized assessment within a year, and a re-assessment after any break longer than 60 days. Missouri\'s mandate sets no diagnosis-recency rule; its six-month clock governs plan review, not the age of the evaluation.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
      },
      diagnosingProviders: {
        value:
          'EN0499 as quoted in this guide sets the credential bar for who performs the ABA assessment and supervises the case \u2014 an independently licensed provider or a BCBA \u2014 rather than naming who may make the ASD diagnosis; the diagnosis must be DSM-5-TR autism spectrum, with Rett syndrome (F84.2) excluded. On a plan the Missouri mandate reaches, the ABA must additionally be ordered by the treating licensed physician or psychologist, which is the narrower and more operationally important list.',
        status: 'plan-dependent',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
        verifyVia: 'Evernorth Behavioral Health provider services (the behavioral health number on the member\'s card) \u2014 ask which diagnosing credentials EN0499 accepts before relying on a diagnosis from a non-doctoral clinician.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value:
          'A standardized, validated instrument in its current edition \u2014 the policy gives Vineland-3 as the example rather than a closed list \u2014 administered within 60 days before treatment start, with the deficits it measures mapped to DSM-5-TR ASD domains and into the treatment plan\'s goals. Continued treatment requires a repeat standardized assessment within a year. Missouri\'s mandate names no instrument.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      referral: {
        value:
          'Yes on a plan the mandate reaches, and the statute is specific about who writes it: ABA \u201cmust be ordered by the treating licensed physician or psychologist\u201d in a treatment plan, and must be supervised by a board-certified behavior analyst licensed under chapter 337. Capture the ordering physician or psychologist and the treatment plan they signed. Two Missouri rules work in the provider\'s favour once the order exists: the carrier may review the treatment plan no more than once every six months unless the provider agrees otherwise, and the cost of obtaining any review or treatment plan is borne by the plan. Self-funded private ERISA plans are outside the statute.',
        status: 'plan-dependent',
        cites: [{ title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — confirm first whether RSMo § 376.1224 reaches this plan. Where it does, capture the ordering licensed physician or psychologist and the treatment plan they signed, and the supervising chapter 337 licensed behavior analyst. Where it does not (a private self-funded ERISA plan), ask the carrier whether it requires a physician or psychologist order and in what form.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'The most permissive position in this directory: Cigna\'s March 2025 autism resource guide states that all ABA CPT codes are covered telehealth services, with the delivery model \u2014 in person, telehealth or hybrid \u2014 chosen on the individual\'s needs. Missouri adds nothing for a commercial plan; its telemedicine regulation governs MO HealthNet.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Missouri?', a: 'Yes — under the carrier\'s national EN0499 policy for ASD (which applies in Missouri without any state carve-out), layered on Missouri\'s mandate (RSMo § 376.1224) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Missouri autism mandate require?', a: 'Coverage of ASD diagnosis and treatment including ABA, with a $40,000-per-year ABA cap through age 18 — a CPI-indexed statutory base that can be exceeded with plan approval when medically necessary. Treatment-plan reviews are limited to once every 6 months, and ABA must be supervised by a Chapter 337-licensed behavior analyst.' },
      { q: 'What does Cigna pay for ABA in Missouri?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the MO HealthNet fee schedule, and treat rate-setting as part of contracting.' },
    ],
  },

  'unitedhealthcare-missouri': {
    slug: 'unitedhealthcare-missouri',
    family: 'unitedhealthcare',
    cardDesc: 'Optum Supplemental Clinical Criteria (BH803ABASCC) + the RSMo § 376.1224 mandate layer.',
    assessmentPA: {
      value: 'Required — step 1 of Optum\'s two-step authorization (assessment auth via Provider Express)',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — step 2 (treatment auth); reviews every 4–6 months',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.)',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      ],
    },
    payer: 'UnitedHealthcare / Optum in Missouri',
    state: 'MO', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Missouri',
    h1: 'UnitedHealthcare / Optum ABA coverage in Missouri: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Missouri: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Missouri families — the national clinical policy, prior authorization, the RSMo § 376.1224 mandate (the $40K ABA cap through 18, exemptions), Missouri behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Missouri, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, Missouri\'s autism insurance mandate (RSMo § 376.1224), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'RSMo § 376.1224 (HB 1311, 2010; expanded 1/1/2020)' },
      { label: 'Mandate age', value: 'No overall age limit stated; the ABA dollar cap applies through age 18' },
      { label: 'Mandate caps', value: '$40,000/yr ABA (statutory base, CPI-indexed; exceedable with plan approval)' },
      { label: 'Exempt from mandate', value: 'Self-funded private ERISA plans; short-term and limited policies' },
      { label: 'Licensure', value: 'MO Licensed Behavior Analyst (RSMo 337.315, Div. of Professional Registration)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Missouri',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months and an operational flag when utilization falls below 80% of authorized hours. Notably, Missouri has no entry in Optum\'s ABA State Mandates supplemental criteria document (we checked the 2026 edition — the state list runs AZ through VA and skips Missouri), so Missouri commercial members run on Optum\'s standard national criteria, with RSMo § 376.1224 applying to fully-insured plans by operation of law rather than through an Optum overlay. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in Missouri.',
        ],
        cites: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA STM1 2026 — no Missouri entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'The Missouri mandate: what it guarantees (and doesn\'t)',
        body: [
          'Missouri\'s mandate — enacted by 2010\'s HB 1311, with the current version applying to plans delivered, issued, continued, or renewed on or after January 1, 2020 (which added developmental and physical disability coverage) — reaches unusually far: beyond ordinary individual and group policies, it covers the state consolidated health care plan, self-insured governmental plans, MEWAs, and self-insured school district health plans established after 1/1/2020. ABA must be ordered by the treating licensed physician or psychologist in a treatment plan, supervised by a board-certified behavior analyst licensed under Chapter 337, and insurers may review the ABA treatment plan no more than once every 6 months unless the provider agrees otherwise. The headline number: ABA carries a $40,000-per-calendar-year cap for individuals through age 18 — statutory base value. Three things soften it: the cap may be exceeded with prior plan approval when additional ABA is medically necessary; it is CPI-indexed (carriers must adjust at least triennially, with the current adjusted figure published annually in the Missouri Register — don\'t quote $40K as the live number without checking); and other autism treatments (OT/PT/speech, psychiatric, pharmacy) sit outside the cap entirely. Self-funded private ERISA plans remain federally preempted.',
        ],
        cites: [
      { title: 'RSMo § 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' },
        ],
      },
      {
        h2: 'UnitedHealthcare Medicaid in Missouri: the carve-out twist',
        body: [
          'A family saying "we have UnitedHealthcare" in Missouri may be on UnitedHealthcare Community Plan of Missouri — one of the four MO HealthNet Managed Care plans. But here Missouri differs from most states: Medicaid ABA is fully carved out of managed care to state fee-for-service, so UHC (and Optum) plays no role in Missouri Medicaid ABA authorization or payment. For those families, skip this page entirely — the state MO HealthNet guide is the operative one, and the precert goes to the state by fax, not to Provider Express.',
        ],
        cites: [
      { title: 'MO HealthNet Behavioral Health Services Manual, §1.16 (ABA carve-out)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' },
      { title: 'MO HealthNet Managed Care Health Plans list', url: 'https://mydss.mo.gov/mhd/managed-care-health-plans' },
        ],
      },
      {
        h2: 'Licensure & rates in Missouri',
        body: [
          'Missouri requires behavior-analyst licensure: RSMo 337.315 prohibits practicing applied behavior analysis without an LBA (or Licensed Assistant Behavior Analyst) license or an enumerated exception — supervised trainees, licensed psychologists within scope, IDEA school personnel, and students among them. The Behavior Analyst Advisory Board within the State Committee of Psychologists (Division of Professional Registration, RSMo 337.300–337.345) reviews applications, and the mandate itself requires BCBA-supervised, Chapter 337-licensed delivery — so licensure is a coverage requirement, not just a credentialing one. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for Missouri (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. Benchmark against MO HealthNet\'s published fee schedule ($20.13/unit on 97153 at the analyst tier) when modeling.',
        ],
        cites: [
      { title: 'RSMo § 337.315 — behavior analyst licensure (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=337.315' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies — including MO\'s unusual reach into governmental and school self-insured plans) vs. self-funded private ERISA (exempt). Ask for the employer and check the card.' },
      { title: 'Line of business', desc: 'Commercial vs. UnitedHealthcare Community Plan of Missouri — Medicaid members route ABA to state FFS, not to Optum at all.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Age vs. the cap', desc: 'The ABA dollar cap runs through age 18 and is CPI-indexed — verify the current adjusted value and year-to-date usage before projecting hours.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA STM1 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'RSMo § 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' },
      { title: 'RSMo § 337.315 — behavior analyst licensure', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=337.315' },
      { title: 'MO HealthNet Managed Care Health Plans list', url: 'https://mydss.mo.gov/mhd/managed-care-health-plans' },
      { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      { title: 'MO HealthNet Behavioral Health Services Manual, \u00a71.16 (ABA carve-out)', url: 'https://mydss.mo.gov/sites/mydss/files/media/file/2026/05/Behavioral%20Health%20Services%20Manual.docx' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Optum\'s Supplemental Clinical Criteria set supervision at 1\u20132 hours per 10 hours of direct treatment, with a floor of at least one hour of 97155 per case per month. Missouri layers the licence on top as a coverage condition: \u00a7 376.1224 requires ABA to be supervised by a board-certified behavior analyst licensed under chapter 337, and RSMo 337.315 prohibits unlicensed practice outside enumerated exceptions. Missouri has no entry in Optum\'s ABA State Mandates supplement, so nothing modifies the national supervision criteria.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum \u2014 ABA State Mandates supplemental criteria (BH 803ABA STM1 2026 \u2014 no Missouri entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }, { title: 'RSMo \u00a7 337.315 \u2014 behavior analyst licensure (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=337.315' }],
      },
      concurrentBilling: {
        value:
          'Permitted in three named pairs: supervision alongside direct care (97153 + 97155), group oversight (97154 + 97155), and parent training alongside direct care (97153 + 97156). Not covered at all: team meetings without the member present, 1:1 classroom aides, and services owed under IDEA.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      dailyLimits: {
        value:
          'Optum authorizes in four code clusters rather than against a per-day ceiling \u2014 assessment (97151, 97152), direct care (97153, 97154), multi-staff (0362T, 0373T) and QHP services (97155\u201397158) \u2014 with units flexing within a cluster without a new authorization. The number that bites runs the other way: utilization below 80 percent of authorized hours over a two-week window draws scrutiny at review. Missouri\'s own cap is a dollar cap on the benefit rather than a unit ceiling on the day.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
        verifyVia: 'The authorization letter on Provider Express, and Optum provider services \u2014 ask whether any per-day MUE applies on top of the cluster structure.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Optum\'s exclusions are the operative setting rule: team meetings without the member, 1:1 classroom aides, and any service owed under IDEA are not covered, which makes the school and IEP picture a coverage question rather than background.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      billAsProvider: {
        value:
          'Optum does not publish the rendering-versus-billing NPI convention for ABA in the criteria cited here. Missouri\'s mandate supplies the statutory half for plans it reaches: reimbursement runs to the autism service provider or to the entity or group the supervising board-certified behavior analyst works for, and expressly covers line-therapist services delivered under that supervision.',
        status: 'plan-dependent',
        cites: [{ title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }, { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia: 'Optum provider services or the authorization letter on Provider Express \u2014 confirm the rendering-versus-billing NPI convention before the first claim.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Not published in the Supplemental Clinical Criteria. What Optum specifies is the review packet rather than the session note: continued-service reviews every 4\u20136 months want progress documented per targeted behavior using the same measurement methods as baseline, plus updated standardized adaptive measures. Note the Missouri overlay \u2014 on a fully-insured plan the carrier may not compel treatment-plan review more than once every six months.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia: 'Optum provider services, or your Provider Express network manager \u2014 ask for the documentation standard applied at audit.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'The mandate sets no overall age limit on autism coverage \u2014 what it ages out is the dollar cap. RSMo \u00a7 376.1224 subjects ABA to \u201ca maximum benefit of forty thousand dollars per calendar year for individuals through eighteen years of age,\u201d a statutory base that is CPI-indexed (the Department of Commerce and Insurance publishes the adjusted figure annually). Coverage required under the section other than ABA \u201cshall not be subject to the age and dollar limitations described in this subsection,\u201d so OT, PT, speech, psychiatric and pharmacy care for autism carry no age cut-off and no dollar cap. Self-funded private ERISA plans are preempted from all of it; note Missouri\'s unusual reach into the state consolidated health care plan, self-insured governmental plans, MEWAs and self-insured school-district plans established on or after 1/1/2020.',
        status: 'plan-dependent',
        cites: [{ title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — ask whether RSMo § 376.1224 reaches this plan (it reaches fully-insured plans, the state consolidated health care plan, self-insured governmental plans, MEWAs and self-insured school-district plans established on or after 1/1/2020, but not private self-funded ERISA plans), and what the plan applies as this year’s dollar cap. The Missouri Department of Commerce and Insurance publishes the CPI-adjusted figure annually — quote that year’s number, never the $40,000 statutory base.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Optum publishes no recency rule for the ASD diagnosis in the Supplemental Clinical Criteria cited here, and Missouri has no entry in Optum\'s State Mandates supplement to add one. What Optum does set is downstream: continued-service reviews every 4\u20136 months requiring updated standardized adaptive measures and progress measured the same way as baseline. Note the tension with \u00a7 376.1224 on a fully-insured Missouri plan \u2014 the statute limits plan review of the treatment plan to once every six months unless the provider agrees otherwise.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum \u2014 ABA State Mandates supplemental criteria (BH 803ABA STM1 2026 \u2014 no Missouri entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
        verifyVia: 'Optum provider services or the assessment-authorization request on Provider Express \u2014 ask whether an evaluation of this age will be accepted before scheduling.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'A DSM-5-TR autism spectrum diagnosis from a state-licensed physician, psychologist, or other qualified clinician; Optum asks for the diagnosing clinician and the confirming instrument at the assessment-authorization step. On a plan the Missouri mandate reaches, the ABA must additionally be ordered by the treating licensed physician or psychologist \u2014 the narrower list, and the one that decides whether the order is valid.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
      },
      diagnosticTools: {
        value:
          'The diagnosis must be confirmed with at least one clinically validated tool. Optum names first-level instruments \u2014 the ADI-R, the ADOS-2 and the DISCO \u2014 and accepts second-level tools including the CARS-2, the RITA-T and the STAT. Capture which instrument was used, by whom and when; a diagnosis letter with no named tool is the most common reason an Optum assessment request stalls. Missouri\'s mandate names no instrument.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      referral: {
        value:
          'Yes on a plan the mandate reaches, and the statute is specific about who writes it: ABA \u201cmust be ordered by the treating licensed physician or psychologist\u201d in a treatment plan, and must be supervised by a board-certified behavior analyst licensed under chapter 337. Capture the ordering physician or psychologist and the treatment plan they signed. Two Missouri rules work in the provider\'s favour once the order exists: the carrier may review the treatment plan no more than once every six months unless the provider agrees otherwise, and the cost of obtaining any review or treatment plan is borne by the plan. Self-funded private ERISA plans are outside the statute.',
        status: 'plan-dependent',
        cites: [{ title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — confirm first whether RSMo § 376.1224 reaches this plan. Where it does, capture the ordering licensed physician or psychologist and the treatment plan they signed, and the supervising chapter 337 licensed behavior analyst. Where it does not (a private self-funded ERISA plan), ask the carrier whether it requires a physician or psychologist order and in what form.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'Gated on the provider, not just the code. Tele-supervision and virtual family training require the provider to be an approved Optum virtual-visits provider with a completed attestation on Provider Express, and the authorization itself must note virtual delivery. Optum frames telehealth as a supplement to in-person care rather than a replacement. Missouri\'s Medicaid telemedicine rule does not reach a commercial UnitedHealthcare plan.',
        status: 'verified',
        cites: [{ title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' }],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Missouri?', a: 'Yes — under Optum\'s national ABA criteria (Missouri has no entry in Optum\'s State Mandates supplement), layered on Missouri\'s mandate (RSMo § 376.1224) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Missouri autism mandate require?', a: 'Coverage of ASD diagnosis and treatment including ABA, with a $40,000-per-year ABA cap through age 18 — a CPI-indexed statutory base that can be exceeded with plan approval when medically necessary. Treatment-plan reviews are limited to once every 6 months, and ABA must be supervised by a Chapter 337-licensed behavior analyst.' },
      { q: 'Does Optum handle UnitedHealthcare Medicaid ABA in Missouri?', a: 'No — Missouri carves Medicaid ABA out of managed care entirely. UHC Community Plan members get ABA through MO HealthNet fee-for-service, with precertification faxed to the state, so Optum and Provider Express never enter the picture.' },
      { q: 'What does UnitedHealthcare pay for ABA in Missouri?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the MO HealthNet fee schedule, and treat rate-setting as part of contracting.' },
    ],
  },

  'anthem-bcbs-missouri': {
    slug: 'anthem-bcbs-missouri',
    payer: 'Anthem BCBS Missouri',
    state: 'MO', kind: 'commercial',
    family: 'anthem',
    cardDesc: 'Inflation-indexed ABA cap ($57,311 for 2025); Anthem reviews in-house; 6-month statutory review ceiling.',
    assessmentPA: {
      value: 'Yes — and Anthem\'s ASD form has an assessment-only pathway for 97151/97152/0362T, authorized per authorization period',
      status: 'plan-dependent',
      cites: [
        { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
        { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' },
        { title: 'Anthem — Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' },
      ],
      verifyVia: 'Anthem publishes the requirement but also publishes its limits, so check the group before you rely on it: the Central Blues precertification list applies to local fully-insured members and to self-insured (ASO) members only where the group purchased the medical-management program — where it did not, preapproval is not required and no clinical review is performed — and on National Accounts business precertification for ABA “applies unless the group specifically opts out of clinical review for this benefit.” Confirm funding type and medical-management purchase on the benefits call, via Availity Essentials or the number on the member’s card.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Yes — responsible party Anthem; since March 1, 2026 the authorization carries weekly approved units',
      status: 'plan-dependent',
      cites: [
        { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
        { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' },
        { title: 'Anthem Missouri — Streamlined ABA claim process starts March 1, 2026', url: 'https://providernews.anthem.com/missouri/articles/streamlined-aba-claim-process-starts-march-1-2026-27885' },
      ],
      verifyVia: 'Anthem publishes the requirement but also publishes its limits, so check the group before you rely on it: the Central Blues precertification list applies to local fully-insured members and to self-insured (ASO) members only where the group purchased the medical-management program — where it did not, preapproval is not required and no clinical review is performed — and on National Accounts business precertification for ABA “applies unless the group specifically opts out of clinical review for this benefit.” Confirm funding type and medical-management purchase on the benefits call, via Availity Essentials or the number on the member’s card.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes — and the ABA must sit in a treatment plan tied to a chapter 337 licensed behavior analyst',
      status: 'verified',
      cites: [
        { title: 'Anthem — Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' },
        { title: 'RSMo § 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' },
        { title: 'RSMo § 337.300 — behavior analyst definitions', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=337.300' },
      ],
    },
    pill: 'Payer Guide · Anthem BCBS · Missouri',
    h1: 'Anthem BCBS Missouri ABA coverage: the intake guide.',
    metaTitle: 'Anthem BCBS Missouri ABA Coverage & Prior Auth: Intake Guide | Carelu',
    metaDescription:
      'How Anthem Blue Cross and Blue Shield covers ABA in Missouri: who reviews the authorization, the inflation-indexed RSMo § 376.1224 ABA cap, the six-month statutory review ceiling, the March 2026 weekly-unit change, and what intake must verify.',
    intro: [
      'Missouri is the state where the number on the statute is not the number that applies. RSMo § 376.1224 sets an ABA maximum benefit of $40,000 per calendar year for individuals through age 18 — and then requires that figure to be adjusted for inflation, with the Department of Commerce and Insurance publishing the current value annually. The most recent value DCI has published is $57,311 for 2025. Quoting $40,000 to a family, or repeating the $41,263 figure that still sits on DCI\'s own FAQ page, understates the benefit by a third.',
      'Anthem in Missouri is RightCHOICE Managed Care, Inc. (RIT), Healthy Alliance Life Insurance Company (HALIC) and HMO Missouri, Inc., and its service area excludes 30 counties in the Kansas City area. Anthem\'s own boilerplate carries the warning intake needs: RIT and certain affiliates "only provide administrative services for self-funded plans and do not underwrite benefits." An Anthem-branded Missouri card can therefore be a self-funded plan on which the state mandate — cap, indexing, review ceiling and all — simply does not apply.',
    ],
    atGlance: [
      { label: 'Who reviews ABA', value: 'Anthem — responsible party on its own Missouri precert list' },
      { label: 'Criteria applied', value: 'MCG B-806-T — replaced CG-BEH-02 for ABA on June 1, 2024' },
      { label: 'Submit via', value: 'Availity Essentials (preferred) or fax 866-582-2287, on the ASD Treatment Plan Request Form' },
      { label: 'State mandate', value: 'RSMo § 376.1224 (current version applies to plans on/after 1/1/2020)' },
      { label: 'ABA cap', value: '$40,000/yr statutory base, inflation-indexed — $57,311 published for 2025' },
      { label: 'Cap applies to', value: 'ABA only, through age 18; other autism treatment has no dollar or age limit' },
      { label: 'Review ceiling', value: 'Carrier may review the treatment plan no more than once every 6 months' },
      { label: 'Authorization unit', value: 'Weekly approved units, effective March 1, 2026' },
      { label: 'Licensure', value: 'Licensed Behavior Analyst / LaBA under chapter 337 — required by the mandate itself' },
    ],
    sections: [
      {
        h2: 'The cap that moves: what to actually quote a family',
        cites: [
          { title: 'RSMo § 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' },
          { title: 'Missouri DCI — ABA mandated coverage limits by year', url: 'https://insurance.mo.gov/autism-and-related-insurance-resources/autism-report-aba-limits' },
        ],
        body: [
          'The statute reads: "Coverage provided under this section for applied behavior analysis shall be subject to a maximum benefit of forty thousand dollars per calendar year for individuals through eighteen years of age. Such maximum benefit limit may be exceeded, upon prior approval by the health benefit plan, if the provision of applied behavior analysis services beyond the maximum limit is medically necessary for such individual."',
          'Two things soften that. First, it is exceedable — prior approval plus medical necessity, which means a well-documented request above the cap is a legitimate ask rather than a lost cause. Second, it is indexed: the carrier must adjust the limit for CPI at least triennially, while DCI calculates the current value every year and publishes it. DCI\'s published table runs $40,000 (2011) to $57,311 (2025). As of this writing DCI has not published a 2026 value, so $57,311 is the most recent authoritative figure — and because the carrier\'s own obligation is only triennial, the number a specific Anthem plan applies may lag DCI\'s. Verify the plan\'s current maximum on the benefits check rather than assuming either figure.',
          'Note what the cap does not touch. The statute says any coverage required under the section other than ABA "shall not be subject to the age and dollar limitations described in this subsection" — so psychiatric, psychological, therapeutic and pharmacy care for autism carry no dollar cap and no age cut-off. And the statute forbids visit limits outright, except that the ABA maximum benefit still applies.',
        ],
      },
      {
        h2: 'Who reviews the authorization',
        cites: [
          { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
          { title: 'Anthem Missouri — submit behavioral health authorizations through Availity Essentials', url: 'https://providernews.anthem.com/missouri/articles/streamline-your-workflow-submit-behavioral-health-authorizat-27237' },
        ],
        body: [
          'Missouri shares one commercial precertification list with Indiana, Kentucky, Ohio and Wisconsin. Under behavioral health services it lists, for MO Blues products, all facility-based care, inpatient admissions, intensive outpatient therapy, partial hospitalization, residential care, ECT, transcranial magnetic stimulation, applied behavioral analysis and intensive in-home behavioral health services — with the responsible party given as Anthem. The same list carries a separate "Treatment for autism spectrum disorder — Anthem" row, and repeats ABA under CDHP products.',
          'So ABA prior authorization in Missouri is an Anthem review, not a delegated vendor review. The Carelon names that appear elsewhere on that list are Carelon Medical Benefits Management (imaging, musculoskeletal, oncology, genetics) and CarelonRx — neither handles ABA. Carelon Behavioral Health is Anthem Missouri\'s behavioral health network and credentialing organization and is described by Anthem as an independent company providing utilization management services on the plan\'s behalf, but its own Missouri quick-reference guide sends providers back to anthem.com and the number on the member\'s ID card for precertification rather than to a separate portal.',
          'Since September 1, 2025 Anthem\'s preferred submission channel for behavioral health authorizations is Availity Essentials — log in, select Authorizations and Referrals, then the Patient Registration tab. One scope caveat worth reading before you rely on any of this: the precertification list states it applies to local fully insured members and to self-insured (ASO) members only where the group purchased the medical-management program, and that if the program has not been purchased, preapproval is not required and clinical review will not be performed.',
        ],
      },
      {
        h2: 'The criteria Anthem actually applies — and the form it wants',
        cites: [
          { title: 'Anthem — MCG care guidelines 27th edition update (Missouri, Commercial, Feb 1 2024)', url: 'https://providernews.anthem.com/missouri/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
          { title: 'Anthem — Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' },
        ],
        body: [
          'If you have an older playbook that says Anthem reviews ABA under clinical guideline CG-BEH-02, retire it. Anthem told commercial providers that "effective June 1, 2024, Anthem will transition from CG-BEH-02 (Adaptive Behavioral Treatment) and MCG W0153 (Behavioral Health Care Applied Behavioral Analysis), to MCG B-806-T Behavioral Health Care Applied Behavioral Analysis (Original MCG Guideline), for medical necessity/clinical appropriateness reviews." MCG guidelines are licensed and proprietary, so B-806-T is not published on the open web — which makes the submission form the most useful public artefact you have.',
          'That form is Anthem\'s Treatment Plan Request Form for Autism Spectrum Disorders, a commercial form covering Missouri among ten states. It asks you to mark the request as comprehensive or focused ABA, requires BCBA (or other qualified healthcare professional) information, and goes through Availity as the preferred channel with fax 866-582-2287 as the alternative. Two details shape the file: the treatment plan should be dated within 30 days of the start date, and for an initial assessment-only request covering 97151, 97152 and 0362T — or where the member has new insurance coverage — you must include a diagnostic evaluation by a doctorate-level clinician or an allowable qualified healthcare provider per state regulations, showing how the patient meets DSM-5-TR criteria and naming the standardized tools used (the form gives ADI-R, ADOS-2 and CARS-2 as examples).',
          'The form also tells you how the authorization is shaped: 97151, 97152, 0362T, 97156 and 97157 are authorized per authorization period, while 97153, 97154, 97155, 97158 and 0373T are authorized per week. That per-week structure is the same one the March 2026 claim change enforces.',
        ],
      },
      {
        h2: 'Two Missouri rules that work in your favour',
        cites: [
          { title: 'RSMo § 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' },
          { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' },
        ],
        list: [
          { title: 'A six-month ceiling on plan review', desc: 'Outside inpatient services, the statute gives the carrier the right to review the treatment plan "not more than once every six months" unless the carrier and the treating physician or psychologist agree more frequent review is necessary — and the cost of obtaining any review or treatment plan is borne by the plan, not the provider. If an Anthem Missouri authorization is being re-reviewed more often than that on a fully insured plan, that is a cite-able objection.' },
          { title: 'Line therapists are reimbursable', desc: 'The statute directs reimbursement to the autism service provider or to the entity or group the supervising board-certified behavior analyst works for, and expressly includes line-therapist services delivered under that supervision when they are in the treatment plan and medically necessary.' },
          { title: 'National Accounts can opt out of ABA precert', desc: 'On Anthem National Accounts business, "precertification for ABA is recommended and applies unless the group specifically opts out of clinical review for this benefit. Retrospective review is allowed." A national-account family may need no precert at all — worth one phone call before you build a file.' },
        ],
      },
      {
        h2: 'Weekly approved units, effective March 1, 2026',
        cites: [
          { title: 'Anthem Missouri — Streamlined ABA claim process starts March 1, 2026', url: 'https://providernews.anthem.com/missouri/articles/streamlined-aba-claim-process-starts-march-1-2026-27885' },
        ],
        body: [
          'From March 1, 2026, Anthem reimburses ABA in Missouri on weekly approved units rather than total authorized units. Claims should reflect the units rendered within each week up to the approved weekly limit; units above it are ineligible for reimbursement and get adjusted. Existing requests and claims, including those with date ranges running past the effective date, are unaffected.',
          'The affected code set is the full one — 97151, 97152, 0362T, 97153, 97154, 97155, 97156, 97157, 97158 and 0373T, all per 15 minutes. The operational consequence is that the weekly schedule you request has to be the schedule you can staff and the family can keep; a heavy catch-up week after a staffing gap no longer pays.',
        ],
      },
      {
        h2: 'Licensure is written into the mandate',
        cites: [
          { title: 'RSMo § 337.300 — behavior analyst definitions', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=337.300' },
          { title: 'Missouri Behavior Analyst Advisory Board', url: 'https://pr.mo.gov/ba.asp' },
        ],
        body: [
          'Missouri is unusual in tying the insurance mandate directly to the state license. An "autism service provider" under § 376.1224 is either a person or entity licensed or certified by the state of Missouri, or a person "licensed under chapter 337 as a board-certified behavior analyst by the behavior analyst certification board or licensed under chapter 337 as an assistant board-certified behavior analyst." National BACB certification is the gateway to the license, but it is the chapter 337 license the mandate names.',
          'Chapter 337 defines four tiers — licensed behavior analyst (LBA), licensed assistant behavior analyst (LaBA), plus provisional and temporary versions of each — administered by the Behavior Analyst Advisory Board within the State Committee of Psychologists, under the Division of Professional Registration. Credential every supervising analyst against that license before you submit a Missouri claim, not after.',
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type, first', desc: 'Fully insured Missouri plan (mandate applies), a self-insured governmental, MEWA or school-district plan (the statute reaches these too, for plans established or renewed on or after 1/1/2020), or a private self-funded ERISA plan (preempted). An Anthem Missouri card can be any of these — RIT administers self-funded plans without underwriting them.' },
      { title: 'Whether the family lives in the Kansas City carve-out', desc: 'Anthem\'s Missouri service area excludes 30 counties in the Kansas City area. Confirm the member\'s plan really is Anthem Missouri before you build the file against these rules.' },
      { title: 'The plan\'s current ABA maximum', desc: 'Statutory base $40,000; DCI published $57,311 for 2025; the carrier is only required to re-index at least triennially, so ask benefits verification for the figure the plan is actually applying this year — and note that the cap is exceedable with prior approval when medically necessary.' },
      { title: 'Child\'s age relative to 19', desc: 'The ABA dollar cap applies through age 18. Non-ABA autism treatment has no age limit at all, which matters for how you frame coverage for an older client.' },
      { title: 'Chapter 337 license numbers', desc: 'The mandate names the Missouri LBA/LaBA license, not BACB certification alone. Capture license numbers for the supervising analyst and any assistant on the case.' },
      { title: 'Realistic weekly schedule', desc: 'Weekly approved units since March 2026 turn the family\'s sustainable weekly availability into a billing constraint.' },
      { title: 'A doctorate-level diagnostic evaluation', desc: 'For an assessment-only request (97151/97152/0362T), or where the member has new coverage, Anthem\'s form requires a diagnostic evaluation by a doctorate-level clinician or allowable QHCP showing DSM-5-TR criteria and naming the standardized tools used. Ask for the full report, not the one-line diagnosis letter.' },
    ],
    sources: [
      { title: 'RSMo § 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' },
      { title: 'Missouri DCI — ABA mandated coverage limits by year', url: 'https://insurance.mo.gov/autism-and-related-insurance-resources/autism-report-aba-limits' },
      { title: 'RSMo § 337.300 — behavior analyst definitions', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=337.300' },
      { title: 'Missouri Behavior Analyst Advisory Board', url: 'https://pr.mo.gov/ba.asp' },
      { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
      { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' },
      { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
      { title: 'Anthem Missouri — Streamlined ABA claim process starts March 1, 2026', url: 'https://providernews.anthem.com/missouri/articles/streamlined-aba-claim-process-starts-march-1-2026-27885' },
      { title: 'Anthem Missouri — submit behavioral health authorizations through Availity Essentials', url: 'https://providernews.anthem.com/missouri/articles/streamline-your-workflow-submit-behavioral-health-authorizat-27237' },
      { title: 'Anthem — MCG care guidelines 27th edition update (Missouri, Commercial, Feb 1 2024)', url: 'https://providernews.anthem.com/missouri/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
      { title: 'Anthem — Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' },
    ],
    deliveryRules: {
      concurrentBilling: {
        value: 'A physician or other QHP billing 97155 can add 97153 only if both the technician and the QHP are face-to-face with the patient at the same time and the QHP is directing the technician. Supervised or directed services billed alongside a QHP-performed procedure are also subject to Anthem\'s Incident To Services and Billing reimbursement policy.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
      dailyLimits: {
        value: 'Anthem publishes no Missouri-specific per-day unit ceiling. ABA codes may carry CMS MUE limits, which Anthem administers as NCCI edits under its Code and Clinical Editing Guidelines reimbursement policy and realigns when CMS updates them. The ceiling that actually bites is the weekly approved units on the authorization (effective March 1, 2026).',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'Anthem Missouri — Streamlined ABA claim process starts March 1, 2026', url: 'https://providernews.anthem.com/missouri/articles/streamlined-aba-claim-process-starts-march-1-2026-27885' },
        ],
      },
      noteSignature: {
        value: 'Each medical-record entry must carry author identification — handwritten signature, unique electronic identifier, or initials — plus rendering provider credentials. Entries are expected at the time of service or shortly thereafter and should not exceed 30 days, with a signature date within 30 days of the date of service. Timed codes require total treatment minutes plus start and stop times in the record. Treatment plans must show review or update at least every 6 months — and on fully insured Missouri plans the carrier may not compel that review more than every 6 months.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'RSMo § 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' },
        ],
      },
      placeOfService: {
        value: 'POS codes Anthem names for ABA: 12 home, 11 office/clinic, 99 community, 03 school, 10 telehealth with the member at home, 02 telehealth with the member elsewhere — each subject to the member\'s coverage and plan review.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
      billAsProvider: {
        value: 'ABA delivered by therapy assistants, behavior technicians or paraprofessionals must show the supervising BCBA or other QHP in box 31 of the CMS-1500. Degree-level modifiers HM, HN and HO identify the rendering staff level. Missouri\'s mandate separately directs reimbursement to the autism service provider or to the entity the supervising board-certified behavior analyst works for, and expressly covers line-therapist services under that supervision.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'RSMo § 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' },
        ],
      },
      supervision: {
        value:
          'Anthem names the approved rendering population rather than a ratio: psychiatrists, psychologists, LCSWs, LPCs and LMFTs with special training or experience in applied behavior analysis, BCBAs and BCBA-Ds, \u201cproviders practicing under the direction and supervision of the BCBA,\u201d and other mental health providers licensed or authorized by the state and recognized by the plan. Degree-level modifiers HM (less than bachelor\'s), HN (bachelor\'s) and HO (master\'s) identify the rendering staff level, and Anthem publishes no hours-per-hours supervision floor for ABA. Missouri supplies the binding credential instead, and writes it into the mandate itself: ABA must be supervised by a board-certified behavior analyst licensed under chapter 337, and an \u201cautism service provider\u201d is defined by that licence rather than by BACB certification alone.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide \u2014 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }, { title: 'RSMo \u00a7 337.300 \u2014 behavior analyst definitions', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=337.300' }],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'The mandate sets no overall age limit on autism coverage \u2014 what it ages out is the dollar cap. RSMo \u00a7 376.1224 subjects ABA to \u201ca maximum benefit of forty thousand dollars per calendar year for individuals through eighteen years of age,\u201d a statutory base that is CPI-indexed (the Department of Commerce and Insurance publishes the adjusted figure annually). Coverage required under the section other than ABA \u201cshall not be subject to the age and dollar limitations described in this subsection,\u201d so OT, PT, speech, psychiatric and pharmacy care for autism carry no age cut-off and no dollar cap. Self-funded private ERISA plans are preempted from all of it; note Missouri\'s unusual reach into the state consolidated health care plan, self-insured governmental plans, MEWAs and self-insured school-district plans established on or after 1/1/2020.',
        status: 'plan-dependent',
        cites: [{ title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — ask whether RSMo § 376.1224 reaches this plan (it reaches fully-insured plans, the state consolidated health care plan, self-insured governmental plans, MEWAs and self-insured school-district plans established on or after 1/1/2020, but not private self-funded ERISA plans), and what the plan applies as this year’s dollar cap. The Missouri Department of Commerce and Insurance publishes the CPI-adjusted figure annually — quote that year’s number, never the $40,000 statutory base.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'The rule Anthem does publish attaches to the treatment plan, not the diagnosis: the ASD Treatment Plan Request Form requires the treatment plan to be dated within 30 days of the start date. On the diagnosis itself Anthem reviews under MCG B-806-T, which is licensed, proprietary and unpublished, so any recency criterion is in a document you cannot read. What triggers a fresh diagnostic evaluation is a request type rather than a date: an initial assessment-only request covering 97151, 97152 and 0362T, or a member with new insurance coverage, must include a diagnostic evaluation. On a fully-insured Missouri plan the statute caps re-review of the treatment plan at once every six months.',
        status: 'unverified',
        cites: [{ title: 'Anthem \u2014 Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
        verifyVia: 'Availity Essentials \u2192 Authorizations and Referrals, or fax 866-582-2287 with the ASD Treatment Plan Request Form \u2014 ask what evaluation age B-806-T accepts. A denial citing the retired CG-BEH-02 is itself an appeal point. MCG B-806-T is licensed proprietary criteria \u2014 it is never published and no document request will produce it, so the plan\u2019s own UM reviewer is the only route to the answer.',
        blocker: 'licensed',
      },
      diagnosingProviders: {
        value:
          'Anthem\'s form sets a doctorate-level bar with a state-law escape hatch: for an initial assessment-only request (97151/97152/0362T) or where the member has new insurance coverage, you must include \u201ca diagnostic evaluation by a doctorate-level clinician or an allowable qualified healthcare provider per state regulations,\u201d showing how the patient meets DSM-5-TR criteria. Missouri\'s mandate then adds the ordering requirement, which is narrower: ABA must be ordered by the treating licensed physician or psychologist in a treatment plan. Ask for the full evaluation report, not a one-line diagnosis letter.',
        status: 'verified',
        cites: [{ title: 'Anthem \u2014 Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
      },
      diagnosticTools: {
        value:
          'The diagnostic evaluation must name the standardized tools used \u2014 Anthem\'s commercial ASD Treatment Plan Request Form gives ADI-R, ADOS-2 and CARS-2 as examples rather than as a closed list \u2014 and must show how the patient meets DSM-5-TR criteria. Missouri\'s mandate names no instrument. Capture the tool, the administration date and the administering clinician at intake; the form asks for all three in the same breath as the diagnosis.',
        status: 'verified',
        cites: [{ title: 'Anthem \u2014 Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' }, { title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
      },
      referral: {
        value:
          'Yes on a plan the mandate reaches, and the statute is specific about who writes it: ABA \u201cmust be ordered by the treating licensed physician or psychologist\u201d in a treatment plan, and must be supervised by a board-certified behavior analyst licensed under chapter 337. Capture the ordering physician or psychologist and the treatment plan they signed. Two Missouri rules work in the provider\'s favour once the order exists: the carrier may review the treatment plan no more than once every six months unless the provider agrees otherwise, and the cost of obtaining any review or treatment plan is borne by the plan. Self-funded private ERISA plans are outside the statute.',
        status: 'plan-dependent',
        cites: [{ title: 'RSMo \u00a7 376.1224 (Missouri Revisor of Statutes)', url: 'https://revisor.mo.gov/main/OneSection.aspx?section=376.1224' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — confirm first whether RSMo § 376.1224 reaches this plan. Where it does, capture the ordering licensed physician or psychologist and the treatment plan they signed, and the supervising chapter 337 licensed behavior analyst. Where it does not (a private self-funded ERISA plan), ask the carrier whether it requires a physician or psychologist order and in what form.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'Anthem names two telehealth place-of-service codes for ABA \u2014 10 (member at home) and 02 (member elsewhere) \u2014 but publishes no national list of telehealth-eligible ABA codes. Its ABA provider resource guide routes the question to the Virtual Visits reimbursement policy, notes that \u201callowed codes may vary,\u201d and directs providers to the allowed virtual services list in addition to CPT Appendix P \u201cto obtain codes that are eligible for reimbursement in your state.\u201d Confirm per state and per plan before scheduling remote hours \u2014 and remember that weekly approved units since March 1, 2026 bound the week regardless of how the hours are delivered.',
        status: 'plan-dependent',
        cites: [{ title: 'Anthem ABA Provider Resource Guide \u2014 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
        verifyVia: 'Anthem\'s Virtual Visits reimbursement policy and the Missouri allowed-virtual-services list, or Anthem provider services via Availity Essentials.',
        blocker: 'document',
      },
    },
    faq: [
      { q: 'Does Anthem BCBS Missouri cover ABA therapy?', a: 'Yes. RSMo § 376.1224 requires health benefit plans delivered, issued, continued or renewed in Missouri on or after January 1, 2020 to cover diagnosis and treatment of autism spectrum disorders including ABA, and Anthem precertifies ABA as a behavioral health service with itself as the reviewing party. Private self-funded ERISA plans are preempted from the mandate.' },
      { q: 'What is the Missouri ABA dollar cap right now?', a: 'The statute sets $40,000 per calendar year through age 18, but requires inflation indexing. The Department of Commerce and Insurance publishes the adjusted value annually; its most recent published figure is $57,311 for 2025. The carrier is only obliged to re-index at least every three years, so confirm the number the specific plan applies — and remember the cap can be exceeded with prior approval when more ABA is medically necessary.' },
      { q: 'How often can Anthem re-review a Missouri ABA treatment plan?', a: 'Outside inpatient services, no more than once every six months, unless the carrier and the treating physician or psychologist agree that more frequent review is necessary. The statute also puts the cost of obtaining any review or treatment plan on the plan.' },
      { q: 'Does ABA prior authorization in Missouri go to Carelon?', a: 'No. Anthem\'s own five-state precertification list names Anthem as the responsible party for ABA. Carelon Medical Benefits Management handles imaging, musculoskeletal, oncology and genetics on that list, and Carelon Behavioral Health serves as the behavioral health network and credentialing organization — its Missouri quick-reference guide points providers back to anthem.com and the member ID card for precertification.' },
      { q: 'Which medical-necessity criteria does Anthem use for ABA in Missouri?', a: 'MCG B-806-T (Behavioral Health Care Applied Behavioral Analysis). Anthem told commercial providers it would transition from CG-BEH-02 and MCG W0153 to B-806-T effective June 1, 2024. MCG guidelines are proprietary and not published publicly, so build the request around Anthem\'s Treatment Plan Request Form for Autism Spectrum Disorders instead.' },
      { q: 'Does the Missouri mandate exempt small employers?', a: 'No. There is no small-group exemption in the current statute. The exclusions are supplemental and limited policy types — accident-only, specified disease, Medicare supplement, long-term care, short-term major medical of six months or less — plus MO HealthNet, and private self-funded plans to the extent federal law preempts them.' },
    ],
  },
};

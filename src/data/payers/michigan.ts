import type { PayerConfig } from './types.js';

export const michiganPayers: Record<string, PayerConfig> = {
  'michigan-medicaid': {
    slug: 'michigan-medicaid',
    cardDesc: 'ABA is carved out to 10 regional PIHPs/CMHs, not the health plans; under 21, PCP exam first, 1:10 supervision.',
    assessmentPA: {
      value:
        'Runs through the PIHP, not a separate state PA: the PIHP arranges and pays the comprehensive diagnostic evaluation and behavioral assessment after the PCP referral, and PIHP utilization management authorizes the level of services before delivery. Whether 97151 itself needs a separate authorization is set by each PIHP (Macomb, for example, requests authorization for each six-month assessment/evaluation period at least 14 days ahead, with no backdating).',
      status: 'plan-dependent',
      cites: [
        { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
      ],
      verifyVia:
        'The PIHP or CMHSP access line for the child’s county of residence (MDHHS PIHP county table) — ask whether the initial and six-month 97151 assessments need their own authorization.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value:
        'Required — "The PIHP’s Utilization Management will authorize the level of services prior to the delivery of services"; authorizations run up to 365 days and are re-authorized annually on a qualified practitioner’s recommendation, with the level of service re-determined at least every six months.',
      status: 'verified',
      cites: [
        { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      ],
    },
    dxRequired: {
      value:
        'Yes — a DSM-5 ASD diagnosis from a qualified licensed practitioner using valid evaluation tools; the comprehensive diagnostic evaluation "must be performed before the child receives BHT services," and eligibility must be confirmed through direct observation.',
      status: 'verified',
      cites: [
        { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      ],
    },
    payer: 'Michigan Medicaid',
    state: 'MI', kind: 'state-medicaid',
    pill: 'Payer Guide · Michigan Medicaid',
    h1: 'Michigan Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Michigan Medicaid ABA Coverage & Autism Benefit Guide | Carelu',
    metaDescription:
      'How Michigan Medicaid covers ABA through the Behavioral Health Treatment benefit: carved out to the regional PIHPs and Community Mental Health programs rather than the Medicaid Health Plans, under 21, PCP exam and PIHP evaluation first, 1:10 supervision, telehealth limits, and the PIHP procurement to watch.',
    intro: [
      'Michigan Medicaid covers ABA as part of its Behavioral Health Treatment (BHT) benefit for children under 21 with autism, and the single fact that organizes every Michigan Medicaid intake is where that benefit lives. It is not run by the Medicaid Health Plan printed on the family’s card. The Medicaid Provider Manual assigns the comprehensive diagnostic evaluation, the behavioral assessment and all BHT services, ABA included, to the Prepaid Inpatient Health Plan (PIHP) for the child’s county, which delivers them through its Community Mental Health Services Programs (CMHSPs) and contracted ABA agencies. So the question that routes a Michigan Medicaid family is not "which health plan?" but "which county?" This guide covers the state rules every PIHP must follow; five PIHPs (regions 4, 5, 7, 8 and 9) have their own guides.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — Behavioral Health Treatment (BHT/ABA), EPSDT, children under 21 with ASD' },
      { label: 'Structure', value: 'Carved out to 10 regional PIHPs and their CMHSPs — not the Medicaid Health Plans' },
      { label: 'Front door', value: 'PCP screening + full medical and physical exam, then referral to the county PIHP/CMH' },
      { label: 'Diagnosis', value: 'Comprehensive diagnostic evaluation by a qualified licensed practitioner (ADOS-2, ADI-R, DD-CGAS in practice)' },
      { label: 'Treatment PA', value: 'PIHP utilization management, before services; up to 365-day authorizations' },
      { label: 'Intensity', value: 'Focused 5–15 hrs/wk or comprehensive 16–25 hrs/wk (averages, not caps)' },
      { label: 'Supervision', value: 'At least 1 hour of observation and direction per 10 hours of direct treatment' },
      { label: 'Telehealth', value: '97155, 97156, 97157, 97158 only; 97151/97153/97154/0362T in person' },
      { label: 'Licensure', value: 'BCBA/BCaBA must be LARA-licensed (LBA/LaBA); technicians need RBT training, no license' },
      { label: 'Watch', value: 'MDHHS PIHP procurement targeted an Oct. 1, 2026 start — confirm the county’s PIHP before routing' },
    ],
    sections: [
      {
        h2: 'The carve-out: ABA runs through the PIHP, not the health plan',
        body: [
          'Michigan splits Medicaid behavioral health in two. Mild-to-moderate outpatient mental health belongs to the Medicaid Health Plans (MHPs) and fee-for-service; specialty behavioral health, including autism, belongs to the PIHPs. The Medicaid Provider Manual is explicit for autism: once the primary care provider screens a child and decides a referral is necessary, "the PIHP is responsible for the comprehensive diagnostic evaluation, behavioral assessment, BHT services (including ABA) for eligible Medicaid beneficiaries, and for the related EPSDT medically necessary Mental Health Specialty Services." The general eligibility section repeats it: "The PIHP is responsible for further evaluation when severe concerns are suspected (i.e., Autism Spectrum Disorder …)" while "When the assessment is driven by medical need, the MHP is responsible for coverage."',
          'Two practical consequences. First, the health plan name on the card (Priority Health’s Medicaid plan, Blue Cross Complete, HAP CareSource and the rest) does not route the ABA request; Priority Health’s own autism policy notes that for its Medicaid and Healthy Michigan Plan members these services "are paid through Michigan’s Department of Community Mental Health." Second, speech, occupational and physical therapy follow the child: children the PIHP finds eligible for BHT can get ASD-related OT, PT and ST through the PIHP, while children assessed but found ineligible get them through the MHP or fee-for-service. SWMBH describes the benefit as covering Medicaid, Healthy Michigan Plan and MIChild members alike.',
          'Each PIHP must be certified as a Community Mental Health Services Program under Section 232a of the Mental Health Code, either a single CMHSP or the lead agency of an affiliation of CMHSPs. The ten current regions: (1) NorthCare Network (Upper Peninsula), (2) Northern Michigan Regional Entity, (3) Lakeshore Regional Entity (Kent via Network180, Ottawa, Muskegon, Allegan, Lake, Mason, Oceana), (4) Southwest Michigan Behavioral Health, (5) Mid-State Health Network, (6) CMH Partnership of Southeast Michigan (Washtenaw, Livingston, Lenawee, Monroe), (7) Detroit Wayne Integrated Health Network, (8) Oakland Community Health Network, (9) Macomb County Community Mental Health, and (10) Region 10 PIHP (Genesee, Lapeer, Sanilac, St. Clair). Carelu has separate guides for regions 4, 5, 7, 8 and 9.',
        ],
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Therapy Services chapter, 4.5 Therapy for Beneficiaries with ASD', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
          { title: 'MDHHS — PIHP county designations table (FY27 PIHP contract, May 2025)', url: 'https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/PIHPs/PIHP-Region-Table.pdf' },
        ],
      },
      {
        h2: 'From screening to treatment: the Michigan sequence',
        body: [
          'The manual lays out a fixed order. Screening happens at an EPSDT well-child visit with a validated, standardized tool, and "A full medical and physical examination must be performed before the child is referred for further evaluation." The PCP then refers the child to the PIHP for the county, and the PIHP contacts the family to schedule a comprehensive diagnostic evaluation and behavioral assessment. The evaluation must be done "before the child receives BHT services" by a qualified licensed practitioner (psychiatry or neurology physician, developmental-behavioral pediatrician, pediatrician with ASD expertise, psychologist, APRN or PA with ASD training, or a fully licensed master’s clinical social worker) and should use validated tools; eligibility is then confirmed "through direct observation utilizing valid evaluation tools."',
          'To qualify, the child must meet DSM-5 criteria A (all three social-communication deficits) and B (at least two restricted/repetitive behavior patterns) at a level of substantial functional impairment, be under 21, be medically able to benefit, and have treatment outcomes expected to develop, maintain or restore function. Two eligibility conditions surprise families: services must be coordinated with the school or early intervention program, and "Families of minor children are expected to provide a minimum of eight hours of care per day on average throughout the month." A well-established DSM-IV diagnosis of autistic disorder, Asperger’s or PDD-NOS should be given the ASD diagnosis. The PIHPs then send the evaluation to MDHHS through the Waiver Support Application for approval (Oakland reports MDHHS approval within 12–48 hours), a support coordinator or case manager builds the individual plan of service through person-centered planning, and the family picks an ABA agency from the PIHP network.',
          'Re-evaluations are required "no more than once every three years" unless more are medically necessary, the level of service is re-determined at least every six months, and authorizations run up to 365 days.',
        ],
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
          { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
        ],
      },
      {
        h2: 'Staffing: licensed analysts, trained (not licensed) technicians',
        body: [
          'BHT must be delivered under the direction of a BCBA/LBA, who is responsible for the behavioral plan of care, for supervising BCaBAs and technicians, and for reporting progress on goals to parents every three to six months. Michigan licenses behavior analysts through LARA’s Board of Behavior Analysts under Part 182A of the Public Health Code (licensure law enacted 2016): the license requires current BACB certification in good standing, a criminal background check, human-trafficking and implicit-bias training, and renews every four years ($452.40 for application plus four-year license). The Medicaid manual requires supervisors to be BACB-certified and LARA-licensed, and BCaBAs to be licensed through LARA as assistant behavior analysts.',
          'Behavior technicians do not need a license or a BACB registration: they must receive BACB-approved RBT training from a BCBA/LBA, BCaBA or QBHP, be at least 18, be certified in basic first aid, be trained in the child’s plan of care, and work with "minimally one hour of clinical observation and direction for every 10 hours of direct treatment." The older pathways are closing: licensed psychologists and QBHPs had to be certified and licensed as a BCBA/LBA by September 30, 2025, and the SFY 2026 code charts list QBHP as a qualifying provider only until October 1, 2025.',
        ],
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'LARA — Michigan Board of Behavior Analysts (Public Health Code Part 182A; R 338.1801–338.1835)', url: 'https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/behavior-analysts' },
          { title: 'LARA — Michigan Behavior Analyst Licensing Guide (rev. 1/26/2026)', url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/bpl/Behavior-Analysts/Licensing-Info-and-Forms/Behavior-Analyst-Licensing-Guide-FAQ-12626.pdf' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
        ],
      },
      {
        h2: 'Billing, telehealth and rates',
        body: [
          'ABA is billed to the PIHP or CMHSP under your network contract, not to CHAMPS fee-for-service. MDHHS’s SFY 2026 Behavioral Health Code Charts set the reporting rules every PIHP uses: all ABA codes are per 15 minutes; staff-level modifiers identify the rendering provider (HO licensed behavior analyst, HN licensed assistant behavior analyst, HM behavior technician); 97151 carries the U5 autism modifier; and 97155 "Must co-occur with 97153, 97154, and 0373T in order to be reported." The same-time rules allow 97153 and 97155 together when delivered by two different people, and 97156 to the caregiver while the technician runs 97153.',
          'Telehealth is narrow. The Bureau of Specialty Behavioral Health Services Telemedicine Database allows 97155, 97156, 97157 and 97158 by simultaneous audio/video (POS 02 or 10), and removed 97151, 97153, 97154 and 0362T in April 2023. On rates, the manual says only that "All PIHPs will reimburse BHT-ABA services at a minimum to the rate outlined with the most recent executed PIHP contract" — the floor lives in the MDHHS/PIHP contract, not in a public fee screen, and each PIHP negotiates its own network rate above it.',
        ],
        cites: [
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      {
        h2: 'Watch: the PIHP procurement',
        body: [
          'MDHHS ran a competitive procurement for the PIHP contracts, with an RFP issued in August 2025 (bids due September 29, 2025) and a stated goal of a service start date of October 1, 2026. The RFP was limited to nonprofit organizations with additional consideration for public entities, and the PIHP "must contract with CMHSPs to provide a comprehensive array of mental health services as required by the Mental Health Code." MDHHS’s county designations table for the FY27 contract maps today’s ten regions onto new Northern, Central and Metro regions (Wayne, Oakland and Macomb into Metro). We could not confirm at review time which entities hold the contracts from October 1, 2026 onward; until MDHHS publishes the award, confirm the PIHP for the family’s county before routing a referral or an authorization.',
        ],
        cites: [
          { title: 'MDHHS press release — MDHHS seeking proposals for Prepaid Inpatient Health Plans (Aug. 5, 2025)', url: 'https://www.michigan.gov/mdhhs/inside-mdhhs/newsroom/2025/08/05/pihp-contracts' },
          { title: 'MDHHS — Specialty Behavioral Health Services / PIHPs page (archived April 3, 2026)', url: 'https://web.archive.org/web/20260403054639/https://www.michigan.gov/mdhhs/keep-mi-healthy/mentalhealth/specialty-behavioral-health-services' },
          { title: 'MDHHS — PIHP county designations table (FY27 PIHP contract, May 2025)', url: 'https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/PIHPs/PIHP-Region-Table.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'County of residence', desc: 'Decides the PIHP and CMHSP that owns the evaluation and the ABA authorization — the health plan name on the card does not.' },
      { title: 'PCP medical and physical exam + screening result', desc: 'Required before referral for the diagnostic evaluation; some PIHPs want it dated within the past year with hearing and vision checked.' },
      { title: 'Any prior ASD evaluation', desc: 'PIHPs may accept an outside comprehensive diagnostic evaluation (Mid-State accepts one done within three years) if it meets the manual’s content rules.' },
      { title: 'Other insurance', desc: 'Medicaid pays last: the commercial plan’s authorization and network rules must be followed first.' },
      { title: 'School / early intervention plan', desc: 'Coordination with the IEP or IFSP team is an eligibility element, and IDEA services cannot be billed as BHT.' },
    ],
    sources: [
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Therapy Services chapter, 4.5 Therapy for Beneficiaries with ASD', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
      { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
      { title: 'MDHHS — PIHP county designations table (FY27 PIHP contract, May 2025)', url: 'https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/PIHPs/PIHP-Region-Table.pdf' },
      { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
      { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
      { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
      { title: 'LARA — Michigan Board of Behavior Analysts (Public Health Code Part 182A; R 338.1801–338.1835)', url: 'https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/behavior-analysts' },
      { title: 'LARA — Michigan Behavior Analyst Licensing Guide (rev. 1/26/2026)', url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/bpl/Behavior-Analysts/Licensing-Info-and-Forms/Behavior-Analyst-Licensing-Guide-FAQ-12626.pdf' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
      { title: 'MDHHS press release — MDHHS seeking proposals for Prepaid Inpatient Health Plans (Aug. 5, 2025)', url: 'https://www.michigan.gov/mdhhs/inside-mdhhs/newsroom/2025/08/05/pihp-contracts' },
      { title: 'MDHHS — Specialty Behavioral Health Services / PIHPs page (archived April 3, 2026)', url: 'https://web.archive.org/web/20260403054639/https://www.michigan.gov/mdhhs/keep-mi-healthy/mentalhealth/specialty-behavioral-health-services' },
      { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
      { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
      { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
      { title: '42 CFR 438.210 — Coverage and authorization of services (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'The behavior technician works under the supervision of the BCBA/LBA or other professional (BCaBA or QBHP) overseeing the behavioral plan of care, "with minimally one hour of clinical observation and direction for every 10 hours of direct treatment." BHT services "must be provided under the direction of a BCBA/LBA or a Master’s prepared QBHP," and the BCBA/LBA is responsible for clinical skill development and supervision of BCaBAs, QBHPs and technicians and for communicating progress on goals to parents or guardians at least every three to six months. The manual gave licensed psychologists (LP/LLP) and QBHPs a deadline to be certified and licensed as a BCBA/LBA by September 30, 2025, and the SFY 2026 code charts now list QBHP as a qualifying provider only "until October 1, 2025."',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
        ],
      },
      concurrentBilling: {
        value:
          'Allowed for the pairs MDHHS names. The SFY 2026 code charts say 97155 "Must co-occur with 97153, 97154, and 0373T in order to be reported," and the same-time reporting rules state that 97153 and 97155 "can occur at the same time, just not by the same person" (the technician delivers 97153 while the BCBA/LBA supervising delivers 97155); 97156 may be delivered by the BCBA/LBA to the caregiver while a technician delivers 97153 to the child; a 97151 reassessment may be reported at the same time as 97153, 97154, 0373T (and potentially 97157/97158) "IF there are two separate providers"; and 0362T may be reported at the same time as 0373T. Targeted case management may also run at the same time as a direct ABA service.',
        status: 'verified',
        cites: [
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
        ],
      },
      dailyLimits: {
        value:
          'No per-day or per-week unit cap is published. The manual sets planning averages, not ceilings: focused behavioral intervention averages 5–15 hours a week and comprehensive behavioral intervention 16–25 hours a week, with actual hours set by the behavioral plan of care. A PIHP "may not deny services based solely on preset limits of the cost, amount, scope, and duration of services," and the level of service is re-determined at least every six months on measurable progress. Authorizations may run up to 365 days.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      noteSignature: {
        value:
          'Section 18 of the Medicaid Provider Manual and the SFY 2026 code charts do not state who signs an ABA session note or by when. The manual requires the individual plan of service (IPOS) to specify amount, scope and duration of each authorized service and permits electronic signatures for the beneficiary on the plan of service and consents; session-note signature standards sit in each PIHP’s provider contract and documentation standards.',
        status: 'plan-dependent',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
        ],
        verifyVia:
          'The contracting PIHP or CMHSP provider manual / documentation standards (ask the PIHP’s autism benefit or provider network office for the ABA progress-note requirements).',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'Home and community. Eligibility requires that "Services are able to be provided in the child’s home and community, including centers and clinics," and BHT is "designed to be delivered primarily in the home and in other community settings." Services "are not intended to supplant responsibilities of educational or other authorities," and the IPOS must not include special education and related services available through the local education agency under IDEA; coordination with the school or early intervention program (IEP/IFSP meetings, communication logs) is an eligibility element. For office or site-based services the primary provider must be within 30 minutes/30 miles in urban areas and 60 minutes/60 miles in rural areas of the beneficiary’s residence.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      billAsProvider: {
        value:
          'Services are reported to the PIHP/CMHSP under the provider’s network contract, with a modifier naming the rendering staff level. The SFY 2026 code charts list the qualifying provider types and modifiers for each ABA code: HO for a licensed behavior analyst (master’s level) or QBHP, HN for a licensed assistant behavior analyst (bachelor’s level), and HM for a behavior technician on the technician codes (97153, 97154, 0373T); 97151 carries the state-defined U5 "Autism" modifier and group codes carry the UN–US group-size modifiers. A technician does not need a license or BACB registration, but must complete BACB-approved RBT training and work under the BCBA/LBA’s supervision.',
        status: 'verified',
        cites: [
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Under 21. BHT/ABA is covered "for children under 21 years of age diagnosed with Autism Spectrum Disorder" as an EPSDT benefit, and the first eligibility criterion is "Child is under 21 years of age." No minimum age is set; the manual stresses early screening at EPSDT well-child visits.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      dxRecency: {
        value:
          'No expiry on the diagnosis itself. "Comprehensive diagnostic re-evaluations are required no more than once every three years, unless determined medically necessary more frequently" by a physician or other licensed practitioner, with frequency based on age, developmental level, comorbidities, severity and adaptive deficits. The level of service is re-determined at least every six months, and BHT authorizations run up to 365 days.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      diagnosingProviders: {
        value:
          'A qualified licensed practitioner "qualified and experienced in diagnosing ASD": a physician with a specialty in psychiatry or neurology; a physician with a subspecialty in developmental pediatrics, developmental-behavioral pediatrics or a related discipline; a physician with a specialty in pediatrics or other appropriate specialty with ASD training, experience or expertise; a psychologist; an advanced practice registered nurse or a physician assistant with ASD and/or behavioral health training; or a master’s-level, fully licensed clinical social worker qualified and experienced in diagnosing ASD. The PIHP is responsible for arranging the comprehensive diagnostic evaluation.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      diagnosticTools: {
        value:
          'The manual names no instrument but requires "valid evaluation tools": the comprehensive diagnostic evaluation is "a neurodevelopmental review of cognitive, behavioral, emotional, adaptive, and social functioning" that should include validated tools, integrating caregiver reports, records, collateral reports, standardized psychological tools and an observational assessment ("No one piece of data determines the ASD diagnosis"). Eligibility must be determined "through direct observation utilizing valid evaluation tools." In practice the PIHPs publish the same battery: ADOS-2, ADI-R and the DD-CGAS (Developmental Disability Children’s Global Assessment Scale), plus cognitive and adaptive testing.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
        ],
      },
      referral: {
        value:
          'Yes, through the PIHP. Screening "typically occurs during an EPSDT well child visit" with the primary care provider using a validated screening tool, and "A full medical and physical examination must be performed before the child is referred for further evaluation." The PCP "must refer the child to the PIHP in the geographic service area," and each PIHP identifies a specific point of access for ASD referrals. Medical necessity and the recommendation for BHT are determined by a physician or other licensed practitioner working within scope. PIHPs also accept family self-referral ("no wrong door") and then route the child back to the PCP for the medical exam where needed.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
        ],
      },
      telehealth: {
        value:
          'Only the analyst-level codes. The MDHHS Bureau of Specialty Behavioral Health Services Telemedicine Database lists 97155, 97156, 97157 and 97158 as allowed via simultaneous audio/visual telemedicine (reported with POS 02 or POS 10, no modifier), and its revision log records that 0362T, 97151, 97153 and 97154 were removed from the database on 4/28/23 — so technician-delivered direct treatment and the behavior identification assessment are in-person. The diagnostic-evaluation codes 96112/96113 and 96116 remain allowed via audio/visual "for reporting BHT/ABA eligibility assessments and re-evaluation assessments related to Autism." The SFY 2026 code charts note on 97155 to use POS 02 "if MDHHS has authorized tele-practice for an individual."',
        status: 'verified',
        cites: [
          { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
        ],
      },
      authTurnaround: {
        value:
          'The PIHP decides, under the federal managed-care clock. Section 18 says "The PIHP’s Utilization Management will authorize the level of services prior to the delivery of services," and the manual requires determinations "Made within federal and state standards for timeliness." Under 42 CFR 438.210(d) a PIHP must decide a standard request within state-set timeframes that "may not exceed 14 calendar days" for rating periods that start before January 1, 2026 and "may not exceed 7 calendar days" for rating periods starting on or after that date, extendable by up to 14 calendar days at the enrollee’s or provider’s request or with justification; expedited decisions are due within 72 hours. Which cap binds depends on the PIHP contract’s rating-period start date. BHT authorizations run for up to 365 days and are re-authorized annually.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: '42 CFR 438.210 — Coverage and authorization of services (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Medicaid pays last. "Medicaid is considered the payer of last resort. If a beneficiary with Medicare or Other Insurance coverage is enrolled in a Medicaid Health Plan (MHP), or is receiving services under a Prepaid Inpatient Health Plan (PIHP) or Community Mental Health Services Program (CMHSP), that entity is responsible for the Medicaid payment liability." Providers "must utilize other payment sources to their fullest extent" before billing Medicaid, and "Medicaid is not liable for payment of services denied because coverage rules of the primary health insurance were not followed" — so get the commercial plan’s prior authorization and use its network. The ABA section adds that the IPOS must not duplicate services that are the responsibility of "a private insurance or other funding authority." Nothing in Section 18 exempts a child with other coverage from the PIHP’s own eligibility determination and pre-service authorization. Federally, the agency rejects a claim when third-party liability is established and pays only the amount its schedule exceeds the third party’s payment (42 CFR 433.139).',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
        ],
      },
    },
    faq: [
      { q: 'Does Michigan Medicaid cover ABA therapy?', a: 'Yes, for children under 21 with autism, through the Behavioral Health Treatment benefit. It is delivered by the regional PIHP and its Community Mental Health programs after a PCP screening, a full medical exam and a comprehensive diagnostic evaluation.' },
      { q: 'My child has a Medicaid Health Plan. Does the plan approve ABA?', a: 'No. The manual assigns the autism evaluation and all BHT/ABA services to the PIHP for the child’s county. The health plan covers the PCP screening and, if the PIHP finds the child ineligible, related speech, occupational and physical therapy.' },
      { q: 'Is there a limit on ABA hours?', a: 'No preset cap. The manual describes focused intervention averaging 5–15 hours a week and comprehensive intervention averaging 16–25, and says a PIHP may not deny services based solely on preset limits.' },
      { q: 'Can ABA be done by telehealth under Michigan Medicaid?', a: 'Only analyst-level services: 97155, 97156, 97157 and 97158. Technician-delivered 97153/97154, the 97151 assessment and 0362T were removed from the MDHHS telemedicine database in 2023.' },
    ],
  },

  'detroit-wayne-integrated-health-network-michigan': {
    slug: 'detroit-wayne-integrated-health-network-michigan',
    family: '',
    cardDesc: 'Wayne County PIHP: Access Center 1-800-241-4949, independent evaluation centers, up to 90 days from diagnosis to 1:1 ABA.',
    assessmentPA: {
      value:
        'Runs through DWIHN: Access screens the child and schedules the evaluation at an independent evaluation center; the ABA agency then completes the initial assessment and plan of care before services are added to the IPOS. DWIHN does not publish whether 97151 needs its own authorization.',
      status: 'plan-dependent',
      cites: [
        { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
        { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      ],
      verifyVia:
        'DWIHN Utilization Management (pihpauthorizations@dwihn.org) or the Access Call Center, 1-800-241-4949.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value:
        'Required — DWIHN utilization management authorizes the ABA hours in the IPOS before services (state rule); DWIHN’s 2025 standard authorizations averaged 3.2 days.',
      status: 'verified',
      cites: [
        { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        { title: 'DWIHN — Utilization Management & Claims (2025 authorization metrics)', url: 'https://dwihn.org/provider-resources/utilization-management-claims' },
      ],
    },
    dxRequired: {
      value:
        'Yes — an ASD diagnosis from a comprehensive diagnostic evaluation (ADOS-2, ADI-R, cognitive, adaptive, DD-CGAS on DWIHN’s form) meeting the manual’s criteria A and B.',
      status: 'verified',
      cites: [
        { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
        { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      ],
    },
    payer: 'Detroit Wayne Integrated Health Network (DWIHN)',
    state: 'MI', kind: 'medicaid-mco', parent: 'Michigan Medicaid',
    pill: 'Payer Guide · DWIHN · Michigan Medicaid',
    h1: 'DWIHN ABA coverage: the Michigan Medicaid autism benefit intake guide.',
    metaTitle: 'DWIHN ABA & Autism Benefit Guide (Michigan Medicaid) | Carelu',
    metaDescription:
      'How DWIHN runs the Michigan Medicaid autism/ABA benefit for Wayne County: the Access Call Center front door, independent evaluation centers, the 90-day start window, documentation cadence, 2025 authorization speed, and the state rules underneath.',
    intro: [
      'Detroit Wayne Integrated Health Network (DWIHN) is the PIHP for Wayne County (region 7), including Detroit. For a Wayne County child on Medicaid, Healthy Michigan Plan or MIChild, DWIHN, not the family’s Medicaid Health Plan, owns the autism evaluation, the ABA authorization and the network of ABA agencies. The state rules in our Michigan Medicaid guide are the floor; this guide covers how DWIHN runs the front door and what its published documentation rules add.',
    ],
    atGlance: [
      { label: 'Region', value: 'PIHP region 7 — Wayne County (Detroit Wayne Mental Health Authority)' },
      { label: 'Front door', value: 'DWIHN Access Call Center 1-800-241-4949 (24/7) — family, PCP, therapist or school can refer' },
      { label: 'Evaluation', value: 'Autism screening at Access, then an appointment at an independent evaluation center' },
      { label: 'Tools on DWIHN’s evaluation form', value: 'ADOS-2, ADI-R, cognitive, adaptive, DD-CGAS' },
      { label: 'Time to start', value: '"up to 90 calendar days from the date of an autism diagnosis to begin one-to-one ABA"' },
      { label: 'Intensity', value: 'About 5–25 hours a week; home, clinic or community (school/daycare when appropriate)' },
      { label: 'Reassessment cadence', value: 'ABA assessment (ABLLS, VB-MAPP, AFLS) every 180 days; IPOS every 365 days' },
      { label: 'UM speed (2025)', value: 'Standard authorizations averaged 3.2 days; expedited 16.5 hours' },
    ],
    sections: [
      {
        h2: 'Getting in: the Access Call Center and the two appointments',
        body: [
          'DWIHN runs a "no wrong door" model: a parent, a physician, a therapist or a teacher can refer to the Access Call Center at 1-800-241-4949. On the call, Access checks the child’s insurance, completes a CMH screening and an autism screening tool. If the screening shows elevated signs of autism, "An evaluation appointment will be scheduled with one of our independent evaluation centers"; if not, the family can ask for another screening later or send records showing autism-related concerns. Two appointments follow and both must be completed, in either order: a support coordination or case management appointment, where person-centered planning builds the Individual Plan of Service (IPOS), and the evaluation appointment that decides eligibility.',
          'Once eligible, the family works with the support coordinator to choose an ABA provider (DWIHN posts an ABA provider contact list), the agency completes the initial ABA assessment and plan of care, and the coordinator adds the ABA goals and hours to the IPOS. DWIHN warns families that "It may take up to 90 calendar days from the date of an autism diagnosis to begin one-to-one ABA therapy services." For Medicaid, DWIHN’s FAQ restates the state age rule: autism services "are generally available for individuals under 21 years of age."',
        ],
        cites: [
          { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
        ],
      },
      {
        h2: 'What DWIHN documents, and how often',
        body: [
          'DWIHN’s ASD benefit document rules (revised 6/20/20) set the paperwork rhythm providers upload to the MH-WIN record: the ABA assessment and plan with ABLLS, VB-MAPP or AFLS grids every 180 days; the IPOS every 365 days; monthly supports-coordinator and BCBA/QBHP contact notes; quarterly IPOS service reviews; the comprehensive diagnosis evaluation and form within 7 days following the diagnosis feedback; and functional behavioral assessments as medically necessary. The same table lists ADOS-2/DD-CGAS re-evaluations on the "Annual MDHHS Approval Anniversary Date"; that line predates the current manual, which requires comprehensive re-evaluations no more than once every three years unless medically necessary, so confirm the current re-evaluation cadence with DWIHN.',
          'DWIHN’s outside diagnostic evaluation form records the tools administered (ADOS-2 with module, ADI-R, cognitive, adaptive, DD-CGAS), the ADOS-2 total and DD-CGAS scores, and a classification of autism (comprehensive), ASD (focused) or non-spectrum, followed by the manual’s criteria A and B checklist.',
        ],
        cites: [
          { title: 'DWIHN — ASD Benefit Document Label Requirements in MH-WIN (rev. 6/20/20)', url: 'https://dwihn.org/sites/default/files/2025-11/15.%20DWIHN_ASD_Benefit_Scanned_Document_Requirements_6.20.20.pdf' },
          { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      {
        h2: 'Authorizations, claims and the network',
        body: [
          'DWIHN’s Utilization Management department publishes its 2025 performance: a 99% standard prior-authorization approval rate, 0% timeframe extensions, standard authorizations averaging 3.2 days (median 0 days) and expedited authorizations averaging 16.5 hours; 32.6% of appealed standard denials were approved on appeal. Claims are processed for four lines of business including a separate "Autism" line; authorization questions go to pihpauthorizations@dwihn.org and claims to pihpclaims@dwihn.org. DWIHN procures ABA agencies competitively: its Children’s Initiative and Procurement departments ran RFQ 2026-007 (rebid, closed July 30, 2026) for ABA services for children 0–21 in Wayne County.',
          'Everything else follows the state floor: 1:10 supervision, the MDHHS code-chart same-time rules and modifiers, telehealth limited to 97155–97158, and Medicaid as payer of last resort.',
        ],
        cites: [
          { title: 'DWIHN — Utilization Management & Claims (2025 authorization metrics)', url: 'https://dwihn.org/provider-resources/utilization-management-claims' },
          { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
        ],
      },
    ],
    collect: [
      { title: 'Wayne County residence + Medicaid ID', desc: 'DWIHN serves Wayne County; Access checks insurance status on the first call.' },
      { title: 'PCP records and any prior evaluation', desc: 'DWIHN posts an Outside Diagnostic Evaluation form that records the tools and scores; bring ADOS-2 / ADI-R results if they exist.' },
      { title: 'Preferred ABA agencies', desc: 'Families choose from DWIHN’s ABA provider contact list with the support coordinator.' },
      { title: 'Other insurance', desc: 'Commercial coverage pays first; DWIHN pays only as Medicaid, last.' },
    ],
    sources: [
      { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
      { title: 'DWIHN — ASD Benefit Document Label Requirements in MH-WIN (rev. 6/20/20)', url: 'https://dwihn.org/sites/default/files/2025-11/15.%20DWIHN_ASD_Benefit_Scanned_Document_Requirements_6.20.20.pdf' },
      { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: 'DWIHN — Utilization Management & Claims (2025 authorization metrics)', url: 'https://dwihn.org/provider-resources/utilization-management-claims' },
      { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
      { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: '42 CFR 438.210 — Coverage and authorization of services (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'DWIHN applies the state rule; its published autism material sets nothing different. The behavior technician works under the supervision of the BCBA/LBA or other professional (BCaBA or QBHP) overseeing the behavioral plan of care, "with minimally one hour of clinical observation and direction for every 10 hours of direct treatment." BHT services "must be provided under the direction of a BCBA/LBA or a Master’s prepared QBHP," and the BCBA/LBA is responsible for clinical skill development and supervision of BCaBAs, QBHPs and technicians and for communicating progress on goals to parents or guardians at least every three to six months. The manual gave licensed psychologists (LP/LLP) and QBHPs a deadline to be certified and licensed as a BCBA/LBA by September 30, 2025, and the SFY 2026 code charts now list QBHP as a qualifying provider only "until October 1, 2025."',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
          { title: 'DWIHN — Utilization Management & Claims (2025 authorization metrics)', url: 'https://dwihn.org/provider-resources/utilization-management-claims' },
          { title: 'DWIHN — ASD Benefit Document Label Requirements in MH-WIN (rev. 6/20/20)', url: 'https://dwihn.org/sites/default/files/2025-11/15.%20DWIHN_ASD_Benefit_Scanned_Document_Requirements_6.20.20.pdf' },
          { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
        ],
      },
      concurrentBilling: {
        value:
          'DWIHN applies the state rule; its published autism material sets nothing different. Allowed for the pairs MDHHS names. The SFY 2026 code charts say 97155 "Must co-occur with 97153, 97154, and 0373T in order to be reported," and the same-time reporting rules state that 97153 and 97155 "can occur at the same time, just not by the same person" (the technician delivers 97153 while the BCBA/LBA supervising delivers 97155); 97156 may be delivered by the BCBA/LBA to the caregiver while a technician delivers 97153 to the child; a 97151 reassessment may be reported at the same time as 97153, 97154, 0373T (and potentially 97157/97158) "IF there are two separate providers"; and 0362T may be reported at the same time as 0373T. Targeted case management may also run at the same time as a direct ABA service.',
        status: 'verified',
        cites: [
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
          { title: 'DWIHN — Utilization Management & Claims (2025 authorization metrics)', url: 'https://dwihn.org/provider-resources/utilization-management-claims' },
          { title: 'DWIHN — ASD Benefit Document Label Requirements in MH-WIN (rev. 6/20/20)', url: 'https://dwihn.org/sites/default/files/2025-11/15.%20DWIHN_ASD_Benefit_Scanned_Document_Requirements_6.20.20.pdf' },
          { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
        ],
      },
      dailyLimits: {
        value:
          'DWIHN applies the state rule; its published autism material sets nothing different. No per-day or per-week unit cap is published. The manual sets planning averages, not ceilings: focused behavioral intervention averages 5–15 hours a week and comprehensive behavioral intervention 16–25 hours a week, with actual hours set by the behavioral plan of care. A PIHP "may not deny services based solely on preset limits of the cost, amount, scope, and duration of services," and the level of service is re-determined at least every six months on measurable progress. Authorizations may run up to 365 days.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
          { title: 'DWIHN — Utilization Management & Claims (2025 authorization metrics)', url: 'https://dwihn.org/provider-resources/utilization-management-claims' },
          { title: 'DWIHN — ASD Benefit Document Label Requirements in MH-WIN (rev. 6/20/20)', url: 'https://dwihn.org/sites/default/files/2025-11/15.%20DWIHN_ASD_Benefit_Scanned_Document_Requirements_6.20.20.pdf' },
          { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
        ],
      },
      noteSignature: {
        value:
          'DWIHN applies the state rule; its published autism material sets nothing different. Section 18 of the Medicaid Provider Manual and the SFY 2026 code charts do not state who signs an ABA session note or by when. The manual requires the individual plan of service (IPOS) to specify amount, scope and duration of each authorized service and permits electronic signatures for the beneficiary on the plan of service and consents; session-note signature standards sit in each PIHP’s provider contract and documentation standards.',
        status: 'plan-dependent',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
          { title: 'DWIHN — Utilization Management & Claims (2025 authorization metrics)', url: 'https://dwihn.org/provider-resources/utilization-management-claims' },
          { title: 'DWIHN — ASD Benefit Document Label Requirements in MH-WIN (rev. 6/20/20)', url: 'https://dwihn.org/sites/default/files/2025-11/15.%20DWIHN_ASD_Benefit_Scanned_Document_Requirements_6.20.20.pdf' },
          { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
        ],
        verifyVia:
          'DWIHN (or its CMHSP) provider manual / documentation standards (ask the PIHP’s autism benefit or provider network office for the ABA progress-note requirements).',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'DWIHN states that "ABA services may be provided at home, in a clinic, in the community, or in school and daycare settings when appropriate," based on the child’s needs and the provider’s recommendations. The state rule bounds this: BHT is designed primarily for home and community settings, must not supplant educational responsibilities, and cannot include IDEA special education and related services available through the local education agency.',
        status: 'verified',
        cites: [
          { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      billAsProvider: {
        value:
          'DWIHN applies the state rule; its published autism material sets nothing different. Services are reported to the PIHP/CMHSP under the provider’s network contract, with a modifier naming the rendering staff level. The SFY 2026 code charts list the qualifying provider types and modifiers for each ABA code: HO for a licensed behavior analyst (master’s level) or QBHP, HN for a licensed assistant behavior analyst (bachelor’s level), and HM for a behavior technician on the technician codes (97153, 97154, 0373T); 97151 carries the state-defined U5 "Autism" modifier and group codes carry the UN–US group-size modifiers. A technician does not need a license or BACB registration, but must complete BACB-approved RBT training and work under the BCBA/LBA’s supervision.',
        status: 'verified',
        cites: [
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
          { title: 'DWIHN — Utilization Management & Claims (2025 authorization metrics)', url: 'https://dwihn.org/provider-resources/utilization-management-claims' },
          { title: 'DWIHN — ASD Benefit Document Label Requirements in MH-WIN (rev. 6/20/20)', url: 'https://dwihn.org/sites/default/files/2025-11/15.%20DWIHN_ASD_Benefit_Scanned_Document_Requirements_6.20.20.pdf' },
          { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Under 21 for the Medicaid autism benefit. DWIHN’s FAQ: "Medicaid autism services are generally available for individuals under 21 years of age when services are medically necessary," matching the manual’s "Child is under 21 years of age." (DWIHN’s page header says autism services are available to members of all ages; ABA under the Medicaid BHT benefit stops at 21.)',
        status: 'verified',
        cites: [
          { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      dxRecency: {
        value:
          'The manual rule applies: comprehensive diagnostic re-evaluations are required "no more than once every three years, unless determined medically necessary more frequently." DWIHN’s own document table (revised 6/20/20) still lists ADOS-2/DD-CGAS re-evaluations on the annual MDHHS approval anniversary and ABA assessments every 180 days; the three-year manual rule is newer, so confirm the current re-evaluation cadence with DWIHN.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'DWIHN — ASD Benefit Document Label Requirements in MH-WIN (rev. 6/20/20)', url: 'https://dwihn.org/sites/default/files/2025-11/15.%20DWIHN_ASD_Benefit_Scanned_Document_Requirements_6.20.20.pdf' },
        ],
      },
      diagnosingProviders: {
        value:
          'DWIHN applies the state rule; its published autism material sets nothing different. A qualified licensed practitioner "qualified and experienced in diagnosing ASD": a physician with a specialty in psychiatry or neurology; a physician with a subspecialty in developmental pediatrics, developmental-behavioral pediatrics or a related discipline; a physician with a specialty in pediatrics or other appropriate specialty with ASD training, experience or expertise; a psychologist; an advanced practice registered nurse or a physician assistant with ASD and/or behavioral health training; or a master’s-level, fully licensed clinical social worker qualified and experienced in diagnosing ASD. The PIHP is responsible for arranging the comprehensive diagnostic evaluation.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
          { title: 'DWIHN — Utilization Management & Claims (2025 authorization metrics)', url: 'https://dwihn.org/provider-resources/utilization-management-claims' },
          { title: 'DWIHN — ASD Benefit Document Label Requirements in MH-WIN (rev. 6/20/20)', url: 'https://dwihn.org/sites/default/files/2025-11/15.%20DWIHN_ASD_Benefit_Scanned_Document_Requirements_6.20.20.pdf' },
          { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
        ],
      },
      diagnosticTools: {
        value:
          'DWIHN’s Comprehensive Diagnostic Evaluation & Re-Evaluation Form lists the tools administered as ADOS-2 (with module), ADI-R, cognitive, adaptive and DD-CGAS, records the ADOS-2 total and DD-CGAS scores, and classifies the result as autism (comprehensive), ASD (focused) or non-spectrum before the manual’s criteria A/B checklist. Access uses an autism screening tool first (DWIHN posts the M-CHAT-R with scoring guide). The manual itself requires only "valid evaluation tools."',
        status: 'verified',
        cites: [
          { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
          { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      referral: {
        value:
          'No wrong door. DWIHN takes referrals from families, medical providers, treatment providers and education providers through the Access Call Center (1-800-241-4949), which completes a CMH screening and an autism screening; DWIHN also posts a physician referral form for ASD screening. The state manual still expects the PCP screening and a full medical and physical examination before referral for the diagnostic evaluation.',
        status: 'verified',
        cites: [
          { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      telehealth: {
        value:
          'DWIHN applies the state rule; its published autism material sets nothing different. Only the analyst-level codes. The MDHHS Bureau of Specialty Behavioral Health Services Telemedicine Database lists 97155, 97156, 97157 and 97158 as allowed via simultaneous audio/visual telemedicine (reported with POS 02 or POS 10, no modifier), and its revision log records that 0362T, 97151, 97153 and 97154 were removed from the database on 4/28/23 — so technician-delivered direct treatment and the behavior identification assessment are in-person. The diagnostic-evaluation codes 96112/96113 and 96116 remain allowed via audio/visual "for reporting BHT/ABA eligibility assessments and re-evaluation assessments related to Autism." The SFY 2026 code charts note on 97155 to use POS 02 "if MDHHS has authorized tele-practice for an individual."',
        status: 'verified',
        cites: [
          { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
          { title: 'DWIHN — Utilization Management & Claims (2025 authorization metrics)', url: 'https://dwihn.org/provider-resources/utilization-management-claims' },
          { title: 'DWIHN — ASD Benefit Document Label Requirements in MH-WIN (rev. 6/20/20)', url: 'https://dwihn.org/sites/default/files/2025-11/15.%20DWIHN_ASD_Benefit_Scanned_Document_Requirements_6.20.20.pdf' },
          { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
        ],
      },
      authTurnaround: {
        value:
          'DWIHN reports its 2025 timeliness: standard prior authorizations averaged 3.2 days (median 0 days) and expedited authorizations averaged 16.5 hours (median 11 hours), with 0% of requests extended. The regulatory ceiling is the federal managed-care rule: a PIHP must decide a standard request within state-set timeframes that "may not exceed 14 calendar days" for rating periods starting before January 1, 2026 and "may not exceed 7 calendar days" for rating periods starting on or after that date, extendable by up to 14 days, and expedited requests within 72 hours. The manual requires the PIHP to authorize the level of services before they are delivered.',
        status: 'verified',
        cites: [
          { title: 'DWIHN — Utilization Management & Claims (2025 authorization metrics)', url: 'https://dwihn.org/provider-resources/utilization-management-claims' },
          { title: '42 CFR 438.210 — Coverage and authorization of services (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'DWIHN applies the state rule; its published autism material sets nothing different. Medicaid pays last. "Medicaid is considered the payer of last resort. If a beneficiary with Medicare or Other Insurance coverage is enrolled in a Medicaid Health Plan (MHP), or is receiving services under a Prepaid Inpatient Health Plan (PIHP) or Community Mental Health Services Program (CMHSP), that entity is responsible for the Medicaid payment liability." Providers "must utilize other payment sources to their fullest extent" before billing Medicaid, and "Medicaid is not liable for payment of services denied because coverage rules of the primary health insurance were not followed" — so get the commercial plan’s prior authorization and use its network. The ABA section adds that the IPOS must not duplicate services that are the responsibility of "a private insurance or other funding authority." Nothing in Section 18 exempts a child with other coverage from the PIHP’s own eligibility determination and pre-service authorization. Federally, the agency rejects a claim when third-party liability is established and pays only the amount its schedule exceeds the third party’s payment (42 CFR 433.139).',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: 'DWIHN — Autism Services', url: 'https://dwihn.org/programs-services/autism-services' },
          { title: 'DWIHN — Utilization Management & Claims (2025 authorization metrics)', url: 'https://dwihn.org/provider-resources/utilization-management-claims' },
          { title: 'DWIHN — ASD Benefit Document Label Requirements in MH-WIN (rev. 6/20/20)', url: 'https://dwihn.org/sites/default/files/2025-11/15.%20DWIHN_ASD_Benefit_Scanned_Document_Requirements_6.20.20.pdf' },
          { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
        ],
      },
    },
    faq: [
      { q: 'How do I start ABA with DWIHN?', a: 'Call the DWIHN Access Call Center at 1-800-241-4949. Access screens the child, and if autism signs are elevated schedules an evaluation at an independent evaluation center plus a support coordination appointment.' },
      { q: 'How long until therapy starts?', a: 'DWIHN says it may take up to 90 calendar days from the autism diagnosis to begin one-to-one ABA, depending on provider availability and completing the required appointments.' },
      { q: 'Does DWIHN cover ABA at school?', a: 'DWIHN lists home, clinic, community, and school or daycare settings "when appropriate"; state policy bars billing BHT for IDEA special-education services the school is responsible for.' },
    ],
  },

  'oakland-community-health-network-michigan': {
    slug: 'oakland-community-health-network-michigan',
    family: '',
    cardDesc: 'Oakland County PIHP: Access (248) 464-6363, in-house diagnostician, MDHHS approval in 12–48 hours, provider link in 7 days.',
    assessmentPA: {
      value:
        'Runs through OCHN: Access (or the core provider agency) screens, an OCHN clinical diagnostician evaluates, and MDHHS approves the documentation via the WSA within 12–48 hours. OCHN does not publish whether the ABA agency’s 97151 assessment needs its own authorization.',
      status: 'plan-dependent',
      cites: [
        { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
        { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      ],
      verifyVia:
        'OCHN Access, (248) 464-6363, or the child’s core provider agency.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value:
        'Required — PIHP utilization management authorizes the ABA level of services in the IPOS before delivery (state rule; OCHN publishes nothing different).',
      status: 'verified',
      cites: [
        { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
      ],
    },
    dxRequired: {
      value:
        'Yes — an ASD diagnosis from OCHN’s clinical diagnostician (ADOS-2, DD-CGAS, ADI-R information), approved by MDHHS through the WSA.',
      status: 'verified',
      cites: [
        { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
        { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
      ],
    },
    payer: 'Oakland Community Health Network (OCHN)',
    state: 'MI', kind: 'medicaid-mco', parent: 'Michigan Medicaid',
    pill: 'Payer Guide · OCHN · Michigan Medicaid',
    h1: 'OCHN ABA coverage: the Michigan Medicaid autism benefit intake guide.',
    metaTitle: 'OCHN ABA & Autism Benefit Guide (Michigan Medicaid) | Carelu',
    metaDescription:
      'How OCHN runs the Michigan Medicaid autism/ABA benefit for Oakland County: Access screening, the in-house diagnostic evaluation, MDHHS approval within 12–48 hours, the 7-day link to an ABA provider, and the state rules underneath.',
    intro: [
      'Oakland Community Health Network (OCHN) is the PIHP for Oakland County (region 8). For an Oakland County child on Medicaid, OCHN owns the autism evaluation and the ABA benefit, delivered through core provider agencies (CPAs) for support coordination and a network of ABA agencies. The state rules in our Michigan Medicaid guide are the floor; this guide covers OCHN’s published process.',
    ],
    atGlance: [
      { label: 'Region', value: 'PIHP region 8 — Oakland County' },
      { label: 'Front door', value: 'OCHN Access (248) 464-6363, Mon–Fri 8 a.m.–8 p.m.; crisis line (888) 238-0611' },
      { label: 'Evaluation', value: 'Performed by an OCHN clinical diagnostician: caregiver interview, records, ADOS-2, DD-CGAS, ADI-R information' },
      { label: 'MDHHS approval', value: 'OCHN uploads to MDHHS through the WSA; approval within 12–48 hours' },
      { label: 'Link to provider', value: 'Eligible children are linked to a CPA/ABA provider within 7 days' },
      { label: 'Eligibility', value: 'Medicaid eligible, younger than 21, ASD diagnosis' },
      { label: 'Intensity', value: 'Average 5–25 hours a week, home or clinic, with parent training' },
    ],
    sections: [
      {
        h2: 'OCHN’s autism benefit steps',
        body: [
          'OCHN publishes its sequence. Children not already receiving CMH services are screened through OCHN Access (248-464-6363); children already in CMH services are screened for ABA by their core provider agency. "A full medical and physical examination is required prior to a referral to OCHN." The diagnostic evaluation is "Performed by OCHN clinical diagnostician" and combines a caregiver interview, input from doctors, teachers and other providers (with consent), a record review, developmental, cognitive and language testing, adaptive functioning rated on the DD-CGAS, and observation with the ADOS-2; the clinical report includes the structured parent interview and/or ADI-R information, the DD-CGAS rating, the ADOS-2 scoring and a diagnostic summary with treatment recommendations.',
          'OCHN then uploads the documentation to MDHHS through the Waiver Support Application; "MDHHS approves the documentation within 12-48 hours," and children found eligible "will be linked to a CPA/ABA provider to begin coordination of services within 7 days." Children found not eligible are told by phone and sent a due-process notice. OCHN’s eligibility summary restates the state rule: Medicaid eligible, younger than 21, with an ASD diagnosis.',
        ],
        cites: [
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
        ],
      },
      {
        h2: 'Choosing an ABA provider in Oakland County',
        body: [
          'Families pick both an ABA provider (for therapy) and a CPA (for support coordination). OCHN’s provider info sheet asks families to name two or three preferred ABA agencies and lists each agency’s setting (center, in-home, telehealth), hours and ages served; many serve 18 months to 21 years. OCHN describes each ABA plan as averaging "five to twenty-five hours of direct interventions per week depending on medical necessity," delivered in the home or a clinic, with parent or guardian training and participation.',
          'Staffing, billing and telehealth follow the MDHHS rules: 1:10 supervision, code-chart modifiers and same-time rules, and telehealth only for 97155–97158.',
        ],
        cites: [
          { title: 'OCHN — ABA Provider Info Sheet for Families (v05.2025)', url: 'https://oaklandchn.org/wp-content/uploads/2026/02/ABA-PROVIDER-List-for-Families-FY25-v0525.pdf' },
          { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
        ],
      },
    ],
    collect: [
      { title: 'Oakland County residence + Medicaid ID', desc: 'OCHN Access verifies eligibility at screening.' },
      { title: 'PCP medical and physical exam', desc: 'OCHN requires it before the referral to OCHN.' },
      { title: 'Records and collateral input', desc: 'OCHN’s diagnostician uses doctors’, teachers’ and other providers’ input (with consent) and prior records.' },
      { title: 'Two or three preferred ABA agencies', desc: 'OCHN’s family sheet asks for ranked choices, plus a CPA for support coordination.' },
    ],
    sources: [
      { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
      { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
      { title: 'OCHN — ABA Provider Info Sheet for Families (v05.2025)', url: 'https://oaklandchn.org/wp-content/uploads/2026/02/ABA-PROVIDER-List-for-Families-FY25-v0525.pdf' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
      { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: '42 CFR 438.210 — Coverage and authorization of services (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'OCHN applies the state rule; its published autism material sets nothing different. The behavior technician works under the supervision of the BCBA/LBA or other professional (BCaBA or QBHP) overseeing the behavioral plan of care, "with minimally one hour of clinical observation and direction for every 10 hours of direct treatment." BHT services "must be provided under the direction of a BCBA/LBA or a Master’s prepared QBHP," and the BCBA/LBA is responsible for clinical skill development and supervision of BCaBAs, QBHPs and technicians and for communicating progress on goals to parents or guardians at least every three to six months. The manual gave licensed psychologists (LP/LLP) and QBHPs a deadline to be certified and licensed as a BCBA/LBA by September 30, 2025, and the SFY 2026 code charts now list QBHP as a qualifying provider only "until October 1, 2025."',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'OCHN — ABA Provider Info Sheet for Families (v05.2025)', url: 'https://oaklandchn.org/wp-content/uploads/2026/02/ABA-PROVIDER-List-for-Families-FY25-v0525.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'OCHN applies the state rule; its published autism material sets nothing different. Allowed for the pairs MDHHS names. The SFY 2026 code charts say 97155 "Must co-occur with 97153, 97154, and 0373T in order to be reported," and the same-time reporting rules state that 97153 and 97155 "can occur at the same time, just not by the same person" (the technician delivers 97153 while the BCBA/LBA supervising delivers 97155); 97156 may be delivered by the BCBA/LBA to the caregiver while a technician delivers 97153 to the child; a 97151 reassessment may be reported at the same time as 97153, 97154, 0373T (and potentially 97157/97158) "IF there are two separate providers"; and 0362T may be reported at the same time as 0373T. Targeted case management may also run at the same time as a direct ABA service.',
        status: 'verified',
        cites: [
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'OCHN — ABA Provider Info Sheet for Families (v05.2025)', url: 'https://oaklandchn.org/wp-content/uploads/2026/02/ABA-PROVIDER-List-for-Families-FY25-v0525.pdf' },
        ],
      },
      dailyLimits: {
        value:
          'OCHN applies the state rule; its published autism material sets nothing different. No per-day or per-week unit cap is published. The manual sets planning averages, not ceilings: focused behavioral intervention averages 5–15 hours a week and comprehensive behavioral intervention 16–25 hours a week, with actual hours set by the behavioral plan of care. A PIHP "may not deny services based solely on preset limits of the cost, amount, scope, and duration of services," and the level of service is re-determined at least every six months on measurable progress. Authorizations may run up to 365 days.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'OCHN — ABA Provider Info Sheet for Families (v05.2025)', url: 'https://oaklandchn.org/wp-content/uploads/2026/02/ABA-PROVIDER-List-for-Families-FY25-v0525.pdf' },
        ],
      },
      noteSignature: {
        value:
          'OCHN applies the state rule; its published autism material sets nothing different. Section 18 of the Medicaid Provider Manual and the SFY 2026 code charts do not state who signs an ABA session note or by when. The manual requires the individual plan of service (IPOS) to specify amount, scope and duration of each authorized service and permits electronic signatures for the beneficiary on the plan of service and consents; session-note signature standards sit in each PIHP’s provider contract and documentation standards.',
        status: 'plan-dependent',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'OCHN — ABA Provider Info Sheet for Families (v05.2025)', url: 'https://oaklandchn.org/wp-content/uploads/2026/02/ABA-PROVIDER-List-for-Families-FY25-v0525.pdf' },
        ],
        verifyVia:
          'OCHN (or its CMHSP) provider manual / documentation standards (ask the PIHP’s autism benefit or provider network office for the ABA progress-note requirements).',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'OCHN: ABA plans average five to twenty-five hours a week and "can be provided either in the home or in a clinic setting," with parent or guardian training; its provider sheet also lists agencies offering telehealth. The state rule adds community settings and bars billing IDEA school services as BHT.',
        status: 'verified',
        cites: [
          { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
          { title: 'OCHN — ABA Provider Info Sheet for Families (v05.2025)', url: 'https://oaklandchn.org/wp-content/uploads/2026/02/ABA-PROVIDER-List-for-Families-FY25-v0525.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      billAsProvider: {
        value:
          'OCHN applies the state rule; its published autism material sets nothing different. Services are reported to the PIHP/CMHSP under the provider’s network contract, with a modifier naming the rendering staff level. The SFY 2026 code charts list the qualifying provider types and modifiers for each ABA code: HO for a licensed behavior analyst (master’s level) or QBHP, HN for a licensed assistant behavior analyst (bachelor’s level), and HM for a behavior technician on the technician codes (97153, 97154, 0373T); 97151 carries the state-defined U5 "Autism" modifier and group codes carry the UN–US group-size modifiers. A technician does not need a license or BACB registration, but must complete BACB-approved RBT training and work under the BCBA/LBA’s supervision.',
        status: 'verified',
        cites: [
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'OCHN — ABA Provider Info Sheet for Families (v05.2025)', url: 'https://oaklandchn.org/wp-content/uploads/2026/02/ABA-PROVIDER-List-for-Families-FY25-v0525.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Under 21. OCHN: ABA is offered to individuals who "Are Medicaid eligible," "Are younger than 21 years of age" and "Have an Autism Spectrum Disorder (ASD) Diagnosis," matching the manual.',
        status: 'verified',
        cites: [
          { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      dxRecency: {
        value:
          'OCHN applies the state rule; its published autism material sets nothing different. No expiry on the diagnosis itself. "Comprehensive diagnostic re-evaluations are required no more than once every three years, unless determined medically necessary more frequently" by a physician or other licensed practitioner, with frequency based on age, developmental level, comorbidities, severity and adaptive deficits. The level of service is re-determined at least every six months, and BHT authorizations run up to 365 days.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'OCHN — ABA Provider Info Sheet for Families (v05.2025)', url: 'https://oaklandchn.org/wp-content/uploads/2026/02/ABA-PROVIDER-List-for-Families-FY25-v0525.pdf' },
        ],
      },
      diagnosingProviders: {
        value:
          'OCHN performs the evaluation with its own clinical diagnostician. The manual defines who may diagnose: a psychiatry or neurology physician; a developmental or developmental-behavioral pediatrician; a pediatrician or other physician with ASD expertise; a psychologist; an APRN or PA with ASD or behavioral-health training; or a fully licensed master’s clinical social worker experienced in diagnosing ASD.',
        status: 'verified',
        cites: [
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      diagnosticTools: {
        value:
          'OCHN’s evaluation combines a caregiver interview, collateral input and records with developmental, cognitive and language testing, adaptive functioning on the DD-CGAS, and observation on the ADOS-2; the report includes a structured parent interview and/or ADI-R information, the DD-CGAS rating, ADOS-2 scoring, and a diagnostic summary with treatment recommendations.',
        status: 'verified',
        cites: [
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      referral: {
        value:
          'Children not receiving CMH services are screened via OCHN Access at (248) 464-6363 (Mon–Fri 8 a.m.–8 p.m.); children already in CMH services are screened for ABA by their core provider agency. "A full medical and physical examination is required prior to a referral to OCHN," matching the manual’s PCP screening-and-exam requirement.',
        status: 'verified',
        cites: [
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      telehealth: {
        value:
          'OCHN applies the state rule; its published autism material sets nothing different. Only the analyst-level codes. The MDHHS Bureau of Specialty Behavioral Health Services Telemedicine Database lists 97155, 97156, 97157 and 97158 as allowed via simultaneous audio/visual telemedicine (reported with POS 02 or POS 10, no modifier), and its revision log records that 0362T, 97151, 97153 and 97154 were removed from the database on 4/28/23 — so technician-delivered direct treatment and the behavior identification assessment are in-person. The diagnostic-evaluation codes 96112/96113 and 96116 remain allowed via audio/visual "for reporting BHT/ABA eligibility assessments and re-evaluation assessments related to Autism." The SFY 2026 code charts note on 97155 to use POS 02 "if MDHHS has authorized tele-practice for an individual."',
        status: 'verified',
        cites: [
          { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'OCHN — ABA Provider Info Sheet for Families (v05.2025)', url: 'https://oaklandchn.org/wp-content/uploads/2026/02/ABA-PROVIDER-List-for-Families-FY25-v0525.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'OCHN applies the state rule; its published autism material sets nothing different. The PIHP decides, under the federal managed-care clock. Section 18 says "The PIHP’s Utilization Management will authorize the level of services prior to the delivery of services," and the manual requires determinations "Made within federal and state standards for timeliness." Under 42 CFR 438.210(d) a PIHP must decide a standard request within state-set timeframes that "may not exceed 14 calendar days" for rating periods that start before January 1, 2026 and "may not exceed 7 calendar days" for rating periods starting on or after that date, extendable by up to 14 calendar days at the enrollee’s or provider’s request or with justification; expedited decisions are due within 72 hours. Which cap binds depends on the PIHP contract’s rating-period start date. BHT authorizations run for up to 365 days and are re-authorized annually.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: '42 CFR 438.210 — Coverage and authorization of services (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
          { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'OCHN — ABA Provider Info Sheet for Families (v05.2025)', url: 'https://oaklandchn.org/wp-content/uploads/2026/02/ABA-PROVIDER-List-for-Families-FY25-v0525.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'OCHN applies the state rule; its published autism material sets nothing different. Medicaid pays last. "Medicaid is considered the payer of last resort. If a beneficiary with Medicare or Other Insurance coverage is enrolled in a Medicaid Health Plan (MHP), or is receiving services under a Prepaid Inpatient Health Plan (PIHP) or Community Mental Health Services Program (CMHSP), that entity is responsible for the Medicaid payment liability." Providers "must utilize other payment sources to their fullest extent" before billing Medicaid, and "Medicaid is not liable for payment of services denied because coverage rules of the primary health insurance were not followed" — so get the commercial plan’s prior authorization and use its network. The ABA section adds that the IPOS must not duplicate services that are the responsibility of "a private insurance or other funding authority." Nothing in Section 18 exempts a child with other coverage from the PIHP’s own eligibility determination and pre-service authorization. Federally, the agency rejects a claim when third-party liability is established and pays only the amount its schedule exceeds the third party’s payment (42 CFR 433.139).',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: 'OCHN — Autism Services & Supports', url: 'https://oaklandchn.org/service-information/autism/' },
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'OCHN — ABA Provider Info Sheet for Families (v05.2025)', url: 'https://oaklandchn.org/wp-content/uploads/2026/02/ABA-PROVIDER-List-for-Families-FY25-v0525.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Who does the autism evaluation in Oakland County?', a: 'An OCHN clinical diagnostician, using a caregiver interview, records, developmental and cognitive testing, the DD-CGAS and the ADOS-2. OCHN then sends the documentation to MDHHS for approval.' },
      { q: 'How fast does ABA start after approval?', a: 'OCHN says MDHHS approves the documentation within 12–48 hours and eligible children are linked to a CPA/ABA provider within 7 days to begin coordination.' },
      { q: 'What are the eligibility rules?', a: 'Medicaid eligible, younger than 21, with an autism spectrum disorder diagnosis, plus the state manual’s medical-necessity criteria.' },
    ],
  },

  'macomb-county-community-mental-health-michigan': {
    slug: 'macomb-county-community-mental-health-michigan',
    family: '',
    cardDesc: 'Macomb County PIHP: 855-99-MCCMH, exam within the past year, 3-year autism enrollment, auth 14+ days ahead, no backdating.',
    assessmentPA: {
      value:
        'MCCMH requests authorization for each six-month assessment/evaluation period, 14 or more days before the effective date with no backdating; the initial behavioral assessment is completed before ABA starts.',
      status: 'verified',
      cites: [
        { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
      ],
    },
    treatmentPA: {
      value:
        'Required — the case manager requests ABA authorization from the IPOS 14+ days ahead, in six-month periods aligned to the behavioral assessment; no backdating.',
      status: 'verified',
      cites: [
        { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
      ],
    },
    dxRequired: {
      value:
        'Yes — a comprehensive diagnostic evaluation stating ASD and recommending ABA (ADOS-2, ADI-R, CARS-2, DD-CGAS recommended), after a medical exam within the past year.',
      status: 'verified',
      cites: [
        { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
        { title: 'MCCMH — Autism Services', url: 'https://www.mccmh.net/autism-services/' },
      ],
    },
    payer: 'Macomb County Community Mental Health (MCCMH)',
    state: 'MI', kind: 'medicaid-mco', parent: 'Michigan Medicaid',
    pill: 'Payer Guide · MCCMH · Michigan Medicaid',
    h1: 'MCCMH ABA coverage: the Michigan Medicaid autism benefit intake guide.',
    metaTitle: 'MCCMH ABA & Autism Benefit Guide (Michigan Medicaid) | Carelu',
    metaDescription:
      'How MCCMH runs the Michigan Medicaid autism/ABA benefit for Macomb County: 855-99-MCCMH, the one-year medical exam rule, three-year autism enrollment, six-month assessment periods, the 14-day no-backdating authorization rule, and private insurance first.',
    intro: [
      'Macomb County Community Mental Health (MCCMH) is the PIHP for Macomb County (region 9). It publishes one of the most detailed operational procedures of any Michigan PIHP, and two of its rules change intake timing: the medical exam must be recent, and authorizations cannot be backdated. The state rules in our Michigan Medicaid guide are the floor.',
    ],
    atGlance: [
      { label: 'Region', value: 'PIHP region 9 — Macomb County' },
      { label: 'Front door', value: 'MCCMH Customer Service 855-99-MCCMH (855-996-2264), or walk in at an MCCMH location' },
      { label: 'Case management', value: 'Autism case management through Easterseals MORC, Specialized Children & Family Services or Hope Network' },
      { label: 'Medical exam', value: 'Full medical and physical exam within the past year, hearing and vision checked, before the evaluation is scheduled' },
      { label: 'Recommended tools', value: 'ADOS-2, ADI-R, CARS-2, DD-CGAS' },
      { label: 'Enrollment span', value: 'Autism enrollment insurance layer opened for three years from the evaluation start date' },
      { label: 'Authorizations', value: 'Request 14+ days before the effective date, no backdating; six-month assessment periods' },
      { label: 'Other insurance', value: 'Private insurance is primary; the case manager obtains the EOB' },
    ],
    sections: [
      {
        h2: 'The MCCMH flow, step by step',
        body: [
          'Families call MCCMH Customer Service at 855-99-MCCMH (855-996-2264); MCCMH registers the child, checks Medicaid, and a clinician does a phone screening, then schedules an intake with one of three autism case management programs (Easterseals MORC, Specialized Children & Family Services, Hope Network). "A child can access the ASD benefit only if they qualify for Medicaid." At intake the family must bring documentation of "a full medical and physical exam done by a doctor … within the past year" that shows more ASD testing is needed and confirms hearing and vision were checked and are not causing the symptoms; without it the evaluation is not scheduled.',
          'The case manager opens a pre-autism insurance layer for the evaluation, enters any third-party insurance, and refers for a comprehensive diagnostic evaluation and behavioral assessment. MCCMH recommends "gold standard tools such as the ADOS-2, ADI-R, CARS-2 and DD-CGAS." The report must state an ASD diagnosis and recommend ABA; the case manager uploads it and requests the autism enrollment insurance layer, which is opened "for three years based on the start date of the diagnostic evaluation." The case manager then refers to ABA providers and writes the ABA goals, amount, scope and duration into the IPOS, updated at least every six months.',
        ],
        cites: [
          { title: 'MCCMH — Autism Services', url: 'https://www.mccmh.net/autism-services/' },
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
        ],
      },
      {
        h2: 'Six-month assessment periods and the no-backdating rule',
        body: [
          'The behavioral assessment (VB-MAPP, ABLLS-R or AFLS) is completed before ABA starts and then at least every six months, and it sets the service level: focused (average 5–15 hours a week) or comprehensive (16–25). MCCMH’s worked example: an initial assessment on 2/10/26 opens a six-month window through 8/9/26; the case manager updates the IPOS and requests authorization "14 or more days before expected start date of services (no backdating)." The ABA provider completes the reassessment 4 to 6 weeks before the current authorization expires, and the next six-month authorization is again requested 14 or more days before its effective date. Comprehensive re-evaluations follow the manual’s once-in-three-years rule.',
          'MCCMH’s discharge criteria tighten one manual criterion: continued treatment is reviewed if the child has not shown measurable improvement "through a period of six months." Staffing, telehealth and billing rules follow the MDHHS floor.',
        ],
        cites: [
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
        ],
      },
    ],
    collect: [
      { title: 'Medical exam within the past year', desc: 'Must show further ASD testing is needed and that hearing and vision were checked; MCCMH will not schedule the evaluation without it.' },
      { title: 'Prior ASD evaluations and ABA history', desc: 'Bring copies; tell the clinician if the child had ABA elsewhere in Michigan.' },
      { title: 'IEP, 504 plan, school reports', desc: 'MCCMH asks for them at the case-management intake.' },
      { title: 'Private insurance card and EOB', desc: 'Private insurance is primary; the case manager helps obtain the EOB.' },
    ],
    sources: [
      { title: 'MCCMH — Autism Services', url: 'https://www.mccmh.net/autism-services/' },
      { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
      { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: '42 CFR 438.210 — Coverage and authorization of services (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'MCCMH applies the state rule; its published autism material sets nothing different. The behavior technician works under the supervision of the BCBA/LBA or other professional (BCaBA or QBHP) overseeing the behavioral plan of care, "with minimally one hour of clinical observation and direction for every 10 hours of direct treatment." BHT services "must be provided under the direction of a BCBA/LBA or a Master’s prepared QBHP," and the BCBA/LBA is responsible for clinical skill development and supervision of BCaBAs, QBHPs and technicians and for communicating progress on goals to parents or guardians at least every three to six months. The manual gave licensed psychologists (LP/LLP) and QBHPs a deadline to be certified and licensed as a BCBA/LBA by September 30, 2025, and the SFY 2026 code charts now list QBHP as a qualifying provider only "until October 1, 2025."',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'MCCMH — Autism Services', url: 'https://www.mccmh.net/autism-services/' },
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'MCCMH applies the state rule; its published autism material sets nothing different. Allowed for the pairs MDHHS names. The SFY 2026 code charts say 97155 "Must co-occur with 97153, 97154, and 0373T in order to be reported," and the same-time reporting rules state that 97153 and 97155 "can occur at the same time, just not by the same person" (the technician delivers 97153 while the BCBA/LBA supervising delivers 97155); 97156 may be delivered by the BCBA/LBA to the caregiver while a technician delivers 97153 to the child; a 97151 reassessment may be reported at the same time as 97153, 97154, 0373T (and potentially 97157/97158) "IF there are two separate providers"; and 0362T may be reported at the same time as 0373T. Targeted case management may also run at the same time as a direct ABA service.',
        status: 'verified',
        cites: [
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'MCCMH — Autism Services', url: 'https://www.mccmh.net/autism-services/' },
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
        ],
      },
      dailyLimits: {
        value:
          'MCCMH applies the state rule; its published autism material sets nothing different. No per-day or per-week unit cap is published. The manual sets planning averages, not ceilings: focused behavioral intervention averages 5–15 hours a week and comprehensive behavioral intervention 16–25 hours a week, with actual hours set by the behavioral plan of care. A PIHP "may not deny services based solely on preset limits of the cost, amount, scope, and duration of services," and the level of service is re-determined at least every six months on measurable progress. Authorizations may run up to 365 days.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MCCMH — Autism Services', url: 'https://www.mccmh.net/autism-services/' },
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
        ],
      },
      noteSignature: {
        value:
          'MCCMH applies the state rule; its published autism material sets nothing different. Section 18 of the Medicaid Provider Manual and the SFY 2026 code charts do not state who signs an ABA session note or by when. The manual requires the individual plan of service (IPOS) to specify amount, scope and duration of each authorized service and permits electronic signatures for the beneficiary on the plan of service and consents; session-note signature standards sit in each PIHP’s provider contract and documentation standards.',
        status: 'plan-dependent',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'MCCMH — Autism Services', url: 'https://www.mccmh.net/autism-services/' },
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
        ],
        verifyVia:
          'MCCMH (or its CMHSP) provider manual / documentation standards (ask the PIHP’s autism benefit or provider network office for the ABA progress-note requirements).',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'MCCMH applies the state rule; its published autism material sets nothing different. Home and community. Eligibility requires that "Services are able to be provided in the child’s home and community, including centers and clinics," and BHT is "designed to be delivered primarily in the home and in other community settings." Services "are not intended to supplant responsibilities of educational or other authorities," and the IPOS must not include special education and related services available through the local education agency under IDEA; coordination with the school or early intervention program (IEP/IFSP meetings, communication logs) is an eligibility element. For office or site-based services the primary provider must be within 30 minutes/30 miles in urban areas and 60 minutes/60 miles in rural areas of the beneficiary’s residence.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MCCMH — Autism Services', url: 'https://www.mccmh.net/autism-services/' },
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
        ],
      },
      billAsProvider: {
        value:
          'MCCMH applies the state rule; its published autism material sets nothing different. Services are reported to the PIHP/CMHSP under the provider’s network contract, with a modifier naming the rendering staff level. The SFY 2026 code charts list the qualifying provider types and modifiers for each ABA code: HO for a licensed behavior analyst (master’s level) or QBHP, HN for a licensed assistant behavior analyst (bachelor’s level), and HM for a behavior technician on the technician codes (97153, 97154, 0373T); 97151 carries the state-defined U5 "Autism" modifier and group codes carry the UN–US group-size modifiers. A technician does not need a license or BACB registration, but must complete BACB-approved RBT training and work under the BCBA/LBA’s supervision.',
        status: 'verified',
        cites: [
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MCCMH — Autism Services', url: 'https://www.mccmh.net/autism-services/' },
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'MCCMH applies the state rule; its published autism material sets nothing different. Under 21. BHT/ABA is covered "for children under 21 years of age diagnosed with Autism Spectrum Disorder" as an EPSDT benefit, and the first eligibility criterion is "Child is under 21 years of age." No minimum age is set; the manual stresses early screening at EPSDT well-child visits.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MCCMH — Autism Services', url: 'https://www.mccmh.net/autism-services/' },
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
        ],
      },
      dxRecency: {
        value:
          'Re-evaluations follow the manual: "no more than once every three years, unless determined medically necessary more frequently." MCCMH opens the autism enrollment insurance layer for three years from the start date of the diagnostic evaluation and can extend it if re-testing is scheduled outside that range. The behavioral assessment is repeated at least every six months.',
        status: 'verified',
        cites: [
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      diagnosingProviders: {
        value:
          'MCCMH applies the state rule; its published autism material sets nothing different. A qualified licensed practitioner "qualified and experienced in diagnosing ASD": a physician with a specialty in psychiatry or neurology; a physician with a subspecialty in developmental pediatrics, developmental-behavioral pediatrics or a related discipline; a physician with a specialty in pediatrics or other appropriate specialty with ASD training, experience or expertise; a psychologist; an advanced practice registered nurse or a physician assistant with ASD and/or behavioral health training; or a master’s-level, fully licensed clinical social worker qualified and experienced in diagnosing ASD. The PIHP is responsible for arranging the comprehensive diagnostic evaluation.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MCCMH — Autism Services', url: 'https://www.mccmh.net/autism-services/' },
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
        ],
      },
      diagnosticTools: {
        value:
          'MCCMH’s procedure recommends "the gold standard tools such as the ADOS-2, ADI-R, CARS-2 and DD-CGAS," with other tools if the clinician finds them necessary; behavioral assessments use VB-MAPP, ABLLS-R or AFLS at least every six months.',
        status: 'verified',
        cites: [
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
        ],
      },
      referral: {
        value:
          'MCCMH requires "a full medical and physical exam done by a doctor (such as a pediatrician or family doctor) within the past year" that shows more testing for ASD is needed and confirms hearing and vision were checked; "The exam must be provided before a child is scheduled for a diagnostic evaluation." The family then calls Managed Care Operations / Customer Service (855-996-2264), which refers for case management.',
        status: 'verified',
        cites: [
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
          { title: 'MCCMH — Autism Services', url: 'https://www.mccmh.net/autism-services/' },
        ],
      },
      telehealth: {
        value:
          'MCCMH applies the state rule; its published autism material sets nothing different. Only the analyst-level codes. The MDHHS Bureau of Specialty Behavioral Health Services Telemedicine Database lists 97155, 97156, 97157 and 97158 as allowed via simultaneous audio/visual telemedicine (reported with POS 02 or POS 10, no modifier), and its revision log records that 0362T, 97151, 97153 and 97154 were removed from the database on 4/28/23 — so technician-delivered direct treatment and the behavior identification assessment are in-person. The diagnostic-evaluation codes 96112/96113 and 96116 remain allowed via audio/visual "for reporting BHT/ABA eligibility assessments and re-evaluation assessments related to Autism." The SFY 2026 code charts note on 97155 to use POS 02 "if MDHHS has authorized tele-practice for an individual."',
        status: 'verified',
        cites: [
          { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'MCCMH — Autism Services', url: 'https://www.mccmh.net/autism-services/' },
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'MCCMH sets the provider-side clock: authorization for each six-month assessment period is requested "14 or more days before expected start date of services (no backdating)," and reassessments are done 4 to 6 weeks before the current authorization expires. The PIHP decision clock is federal: standard decisions within state-set timeframes that "may not exceed 14 calendar days" (rating periods starting before January 1, 2026) or "7 calendar days" (on or after), extendable by 14 days; expedited within 72 hours.',
        status: 'verified',
        cites: [
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
          { title: '42 CFR 438.210 — Coverage and authorization of services (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'MCCMH: "private insurance is the primary payer, and Medicaid is considered the payer of last resort." If the child has both, the case manager helps obtain an Explanation of Benefits and follow the private plan’s steps for testing and ABA, and enters the third-party insurance layer in the record. The state rule applies on top: Medicaid is not liable for services denied because the primary plan’s rules were not followed.',
        status: 'verified',
        cites: [
          { title: 'MCCMH — Autism Services', url: 'https://www.mccmh.net/autism-services/' },
          { title: 'MCCMH Clinical Practice Procedure — Flow of Autism Services Through MCCMH (updated 7/6/26)', url: 'https://www.mccmh.net/wp-content/uploads/2026/07/Flow-of-Autism-Procedure.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
    },
    faq: [
      { q: 'How do I start the autism benefit in Macomb County?', a: 'Call MCCMH Customer Service at 855-99-MCCMH (855-996-2264). MCCMH screens by phone and schedules an intake with Easterseals MORC, Specialized Children & Family Services or Hope Network.' },
      { q: 'Can an ABA authorization be backdated?', a: 'No. MCCMH’s procedure requires the authorization request 14 or more days before the expected start date, with no backdating.' },
      { q: 'We have private insurance too. Who pays?', a: 'Private insurance is the primary payer and Medicaid pays last; the MCCMH case manager helps get the EOB and follow the private plan’s steps for testing and ABA.' },
    ],
  },

  'mid-state-health-network-michigan': {
    slug: 'mid-state-health-network-michigan',
    family: '',
    cardDesc: '21-county PIHP (12 CMHSPs): no wrong door, outside evaluations accepted if under 3 years old, 14-day UM decisions.',
    assessmentPA: {
      value:
        'Runs through the CMHSP: the CMHSP arranges the comprehensive diagnostic evaluation and behavioral assessment; MSHN does not publish whether 97151 needs a separate authorization.',
      status: 'plan-dependent',
      cites: [
        { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
      ],
      verifyVia:
        'The CMHSP for the child’s county in the MSHN region (MSHN provider requirements page lists them).',
      blocker: 'per-case',
    },
    treatmentPA: {
      value:
        'Required — MSHN keeps service authorization and "Review and approval of recommended intensity and duration of ABA services" as PIHP utilization management functions.',
      status: 'verified',
      cites: [
        { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
        { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      ],
    },
    dxRequired: {
      value:
        'Yes — DSM-5 ASD from a qualified licensed practitioner using valid tools; outside evaluations accepted if within three years and pre-BHT.',
      status: 'verified',
      cites: [
        { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
      ],
    },
    payer: 'Mid-State Health Network (MSHN)',
    state: 'MI', kind: 'medicaid-mco', parent: 'Michigan Medicaid',
    pill: 'Payer Guide · Mid-State Health Network · Michigan Medicaid',
    h1: 'Mid-State Health Network ABA coverage: the Michigan Medicaid autism benefit intake guide.',
    metaTitle: 'Mid-State Health Network ABA & Autism Benefit Guide (Michigan Medicaid) | Carelu',
    metaDescription:
      'How Mid-State Health Network runs the Michigan Medicaid autism/ABA benefit across 21 counties and 12 CMHSPs: no-wrong-door referrals, the three-year rule for accepting outside evaluations, supervision, and its authorization timeliness procedure.',
    intro: [
      'Mid-State Health Network (MSHN) is the PIHP for region 5: 21 counties from Saginaw and Bay to Lansing, Jackson and Hillsdale, served through 12 Community Mental Health Services Programs. MSHN publishes its own autism benefit policy and procedure, and one provision matters most for intake: it tells its CMHSPs when to accept an evaluation done outside the CMH system.',
    ],
    atGlance: [
      { label: 'Region', value: 'PIHP region 5 — 21 counties through 12 CMHSPs' },
      { label: 'Front door', value: 'The CMHSP for the child’s county; "no wrong door" for self-referrals' },
      { label: 'Outside evaluations', value: 'Accepted if done within the last three years, before BHT began, by a qualified practitioner, and meeting content rules' },
      { label: 'Eligibility', value: 'Under 21, DSM-5 ASD, criteria A and B, 8 hours/day family care expectation' },
      { label: 'Intensity', value: 'Focused 5–15 hrs/wk or comprehensive 16–25 (averages)' },
      { label: 'Supervision', value: '1 hour per 10 hours of direct treatment ("minimum 10% supervision requirement")' },
      { label: 'UM decisions', value: 'Denials noticed within 14 days (standard) / 72 hours (expedited); 14-day extension possible' },
    ],
    sections: [
      {
        h2: 'Who MSHN covers and how referrals flow',
        body: [
          'MSHN’s CMHSP participants are Bay-Arenac, CMH for Central Michigan (Clare, Gladwin, Isabella, Mecosta, Midland, Osceola), Clinton-Eaton-Ingham, Gratiot, Huron, The Right Door for Hope (Ionia), LifeWays (Jackson, Hillsdale), Montcalm Care Network, Newaygo, Saginaw, Shiawassee Health & Wellness, and Tuscola. MSHN’s procedure (reviewed March 3, 2026) follows the manual’s sequence — PCP screening with a validated tool and a full medical and physical examination before referral — but routes the referral to the CMHSP in the child’s geographic area, and adds: "There is no “wrong door” for a referral." A self-referred family without a PCP can start the eligibility process at the CMHSP while being referred to a PCP for the exam. If a family wants only an evaluation and not ongoing BHT, the CMHSP may refer to a community provider.',
          'MSHN also restates the therapy split: children who meet CMHSP developmental-disability eligibility get ASD-related OT, PT and ST through the PIHP, and MDHHS expects Medicaid Health Plans "to deny therapy for beneficiaries with ASD only if the therapy requested does not meet the medical standards of coverage."',
        ],
        cites: [
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
          { title: 'MDHHS — PIHP county designations table (FY27 PIHP contract, May 2025)', url: 'https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/PIHPs/PIHP-Region-Table.pdf' },
        ],
      },
      {
        h2: 'Outside evaluations: MSHN’s acceptance rule',
        body: [
          'For a child evaluated outside the CMH system, MSHN tells its CMHSPs to accept the comprehensive diagnostic evaluation when it "was completed within the last three years and prior to beginning BHT services," covers cognitive, behavioral, emotional, adaptive and social functioning with validated tools, general treatment recommendations and a referral for an ABA behavioral assessment, was done by one of the manual’s qualified licensed practitioners, and meets the DSM criteria A and B. "The CMHSP may request further review by a PIHP QLP of an external comprehensive diagnostic evaluation." This is the most useful published rule in Michigan for a family arriving with a private-sector diagnosis.',
          'Everything else mirrors the manual: under 21, the eight-hours-a-day family care expectation, focused or comprehensive intensity averages, re-evaluation no more than every three years, and technician supervision of at least one hour per ten hours of treatment, which MSHN calls the "minimum 10% supervision requirement." MSHN keeps the PIHP-level utilization management functions (eligibility determinations, service authorizations, credentialing, and approval of recommended ABA intensity and duration).',
        ],
        cites: [
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
          { title: 'MSHN Policy — Autism Spectrum Disorder Benefit Eligibility (reviewed 01.07.2025)', url: 'https://midstatehealthnetwork.org/download_file/view/d9a670e3-1121-486f-b048-086f1011cf4f/863' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      {
        h2: 'Authorization timeliness',
        body: [
          'MSHN’s Utilization Management procedure (reviewed May 7, 2024) requires that a decision denying or limiting services be noticed "within 14-days following receipt of the request for service for standard authorization decisions, or within 72-hours" for expedited ones; a decision not reached in time is itself a denial requiring an adverse benefit determination notice, and the CMHSP may extend by up to 14 calendar days (for example, while awaiting assessment results or provider information). That procedure predates the federal change that caps standard decisions at 7 calendar days for rating periods starting on or after January 1, 2026, so check which timeframe MSHN’s current contract year applies.',
        ],
        cites: [
          { title: 'MSHN Procedure — Utilization Management (reviewed 05.07.2024)', url: 'https://midstatehealthnetwork.org/download_file/view/6cf2984e-ecaf-4af4-aaf8-a4f60a255924/864' },
          { title: '42 CFR 438.210 — Coverage and authorization of services (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
        ],
      },
    ],
    collect: [
      { title: 'County of residence', desc: 'Decides which of MSHN’s 12 CMHSPs handles the referral.' },
      { title: 'Outside evaluation date and author', desc: 'Accepted if under three years old, pre-BHT, and by a qualified licensed practitioner — capture both at intake.' },
      { title: 'PCP exam', desc: 'Required before referral; self-referred families are sent to a PCP in parallel.' },
      { title: 'Other insurance', desc: 'The IPOS may not duplicate services a private insurer is responsible for.' },
    ],
    sources: [
      { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
      { title: 'MDHHS — PIHP county designations table (FY27 PIHP contract, May 2025)', url: 'https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/PIHPs/PIHP-Region-Table.pdf' },
      { title: 'MSHN Policy — Autism Spectrum Disorder Benefit Eligibility (reviewed 01.07.2025)', url: 'https://midstatehealthnetwork.org/download_file/view/d9a670e3-1121-486f-b048-086f1011cf4f/863' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: 'MSHN Procedure — Utilization Management (reviewed 05.07.2024)', url: 'https://midstatehealthnetwork.org/download_file/view/6cf2984e-ecaf-4af4-aaf8-a4f60a255924/864' },
      { title: '42 CFR 438.210 — Coverage and authorization of services (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
      { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
      { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
      { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
      { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'MSHN restates the manual: technicians work under the BCBA/LBA or BCaBA "with minimally one hour of clinical observation and direction for every ten hours of direct treatment. This is often referred to as the “minimum 10% supervision requirement.”" BHT must be provided under the direction of a BCBA/LBA, who reports progress to parents at least every three to six months; MSHN’s procedure lists BCBA-D/BCBA and BCaBA as LARA-licensed supervisors.',
        status: 'verified',
        cites: [
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'Mid-State Health Network applies the state rule; its published autism material sets nothing different. Allowed for the pairs MDHHS names. The SFY 2026 code charts say 97155 "Must co-occur with 97153, 97154, and 0373T in order to be reported," and the same-time reporting rules state that 97153 and 97155 "can occur at the same time, just not by the same person" (the technician delivers 97153 while the BCBA/LBA supervising delivers 97155); 97156 may be delivered by the BCBA/LBA to the caregiver while a technician delivers 97153 to the child; a 97151 reassessment may be reported at the same time as 97153, 97154, 0373T (and potentially 97157/97158) "IF there are two separate providers"; and 0362T may be reported at the same time as 0373T. Targeted case management may also run at the same time as a direct ABA service.',
        status: 'verified',
        cites: [
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
          { title: 'MSHN Policy — Autism Spectrum Disorder Benefit Eligibility (reviewed 01.07.2025)', url: 'https://midstatehealthnetwork.org/download_file/view/d9a670e3-1121-486f-b048-086f1011cf4f/863' },
          { title: 'MSHN Procedure — Utilization Management (reviewed 05.07.2024)', url: 'https://midstatehealthnetwork.org/download_file/view/6cf2984e-ecaf-4af4-aaf8-a4f60a255924/864' },
        ],
      },
      dailyLimits: {
        value:
          'Mid-State Health Network applies the state rule; its published autism material sets nothing different. No per-day or per-week unit cap is published. The manual sets planning averages, not ceilings: focused behavioral intervention averages 5–15 hours a week and comprehensive behavioral intervention 16–25 hours a week, with actual hours set by the behavioral plan of care. A PIHP "may not deny services based solely on preset limits of the cost, amount, scope, and duration of services," and the level of service is re-determined at least every six months on measurable progress. Authorizations may run up to 365 days.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
          { title: 'MSHN Policy — Autism Spectrum Disorder Benefit Eligibility (reviewed 01.07.2025)', url: 'https://midstatehealthnetwork.org/download_file/view/d9a670e3-1121-486f-b048-086f1011cf4f/863' },
          { title: 'MSHN Procedure — Utilization Management (reviewed 05.07.2024)', url: 'https://midstatehealthnetwork.org/download_file/view/6cf2984e-ecaf-4af4-aaf8-a4f60a255924/864' },
        ],
      },
      noteSignature: {
        value:
          'Mid-State Health Network applies the state rule; its published autism material sets nothing different. Section 18 of the Medicaid Provider Manual and the SFY 2026 code charts do not state who signs an ABA session note or by when. The manual requires the individual plan of service (IPOS) to specify amount, scope and duration of each authorized service and permits electronic signatures for the beneficiary on the plan of service and consents; session-note signature standards sit in each PIHP’s provider contract and documentation standards.',
        status: 'plan-dependent',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
          { title: 'MSHN Policy — Autism Spectrum Disorder Benefit Eligibility (reviewed 01.07.2025)', url: 'https://midstatehealthnetwork.org/download_file/view/d9a670e3-1121-486f-b048-086f1011cf4f/863' },
          { title: 'MSHN Procedure — Utilization Management (reviewed 05.07.2024)', url: 'https://midstatehealthnetwork.org/download_file/view/6cf2984e-ecaf-4af4-aaf8-a4f60a255924/864' },
        ],
        verifyVia:
          'Mid-State Health Network (or its CMHSP) provider manual / documentation standards (ask the PIHP’s autism benefit or provider network office for the ABA progress-note requirements).',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'Mid-State Health Network applies the state rule; its published autism material sets nothing different. Home and community. Eligibility requires that "Services are able to be provided in the child’s home and community, including centers and clinics," and BHT is "designed to be delivered primarily in the home and in other community settings." Services "are not intended to supplant responsibilities of educational or other authorities," and the IPOS must not include special education and related services available through the local education agency under IDEA; coordination with the school or early intervention program (IEP/IFSP meetings, communication logs) is an eligibility element. For office or site-based services the primary provider must be within 30 minutes/30 miles in urban areas and 60 minutes/60 miles in rural areas of the beneficiary’s residence.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
          { title: 'MSHN Policy — Autism Spectrum Disorder Benefit Eligibility (reviewed 01.07.2025)', url: 'https://midstatehealthnetwork.org/download_file/view/d9a670e3-1121-486f-b048-086f1011cf4f/863' },
          { title: 'MSHN Procedure — Utilization Management (reviewed 05.07.2024)', url: 'https://midstatehealthnetwork.org/download_file/view/6cf2984e-ecaf-4af4-aaf8-a4f60a255924/864' },
        ],
      },
      billAsProvider: {
        value:
          'Mid-State Health Network applies the state rule; its published autism material sets nothing different. Services are reported to the PIHP/CMHSP under the provider’s network contract, with a modifier naming the rendering staff level. The SFY 2026 code charts list the qualifying provider types and modifiers for each ABA code: HO for a licensed behavior analyst (master’s level) or QBHP, HN for a licensed assistant behavior analyst (bachelor’s level), and HM for a behavior technician on the technician codes (97153, 97154, 0373T); 97151 carries the state-defined U5 "Autism" modifier and group codes carry the UN–US group-size modifiers. A technician does not need a license or BACB registration, but must complete BACB-approved RBT training and work under the BCBA/LBA’s supervision.',
        status: 'verified',
        cites: [
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
          { title: 'MSHN Policy — Autism Spectrum Disorder Benefit Eligibility (reviewed 01.07.2025)', url: 'https://midstatehealthnetwork.org/download_file/view/d9a670e3-1121-486f-b048-086f1011cf4f/863' },
          { title: 'MSHN Procedure — Utilization Management (reviewed 05.07.2024)', url: 'https://midstatehealthnetwork.org/download_file/view/6cf2984e-ecaf-4af4-aaf8-a4f60a255924/864' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Mid-State Health Network applies the state rule; its published autism material sets nothing different. Under 21. BHT/ABA is covered "for children under 21 years of age diagnosed with Autism Spectrum Disorder" as an EPSDT benefit, and the first eligibility criterion is "Child is under 21 years of age." No minimum age is set; the manual stresses early screening at EPSDT well-child visits.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
          { title: 'MSHN Policy — Autism Spectrum Disorder Benefit Eligibility (reviewed 01.07.2025)', url: 'https://midstatehealthnetwork.org/download_file/view/d9a670e3-1121-486f-b048-086f1011cf4f/863' },
          { title: 'MSHN Procedure — Utilization Management (reviewed 05.07.2024)', url: 'https://midstatehealthnetwork.org/download_file/view/6cf2984e-ecaf-4af4-aaf8-a4f60a255924/864' },
        ],
      },
      dxRecency: {
        value:
          'MSHN accepts an outside comprehensive diagnostic evaluation if it "was completed within the last three years and prior to beginning BHT services" and meets the content and practitioner requirements; the CMHSP may request review by a PIHP qualified licensed practitioner. Re-evaluations are required "no more than once every three years, unless determined medically necessary more frequently."',
        status: 'verified',
        cites: [
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
        ],
      },
      diagnosingProviders: {
        value:
          'MSHN lists the manual’s qualified licensed practitioners: psychiatry or neurology physicians, developmental or developmental-behavioral pediatricians, pediatricians or other physicians with ASD expertise, psychologists, APRNs and PAs with ASD or behavioral-health training, and fully licensed master’s clinical social workers experienced in diagnosing ASD. The same list governs whether an outside evaluation is accepted.',
        status: 'verified',
        cites: [
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      diagnosticTools: {
        value:
          'Mid-State Health Network applies the state rule; its published autism material sets nothing different. The manual names no instrument but requires "valid evaluation tools": the comprehensive diagnostic evaluation is "a neurodevelopmental review of cognitive, behavioral, emotional, adaptive, and social functioning" that should include validated tools, integrating caregiver reports, records, collateral reports, standardized psychological tools and an observational assessment ("No one piece of data determines the ASD diagnosis"). Eligibility must be determined "through direct observation utilizing valid evaluation tools." In practice the PIHPs publish the same battery: ADOS-2, ADI-R and the DD-CGAS (Developmental Disability Children’s Global Assessment Scale), plus cognitive and adaptive testing.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'DWIHN — Autism BHT Comprehensive Diagnostic Evaluation & Re-Evaluation Form (outside diagnostic request)', url: 'https://dwihn.org/sites/default/files/2025-11/DWIHN%20Outside%20Diagnostic%20Request%20Form.docx' },
          { title: 'OCHN — Autism Benefit Steps navigation guide (January 2026)', url: 'https://oaklandchn.org/wp-content/uploads/2026/01/autism-OCHN-Navigation-Guides.pdf' },
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
          { title: 'MSHN Policy — Autism Spectrum Disorder Benefit Eligibility (reviewed 01.07.2025)', url: 'https://midstatehealthnetwork.org/download_file/view/d9a670e3-1121-486f-b048-086f1011cf4f/863' },
          { title: 'MSHN Procedure — Utilization Management (reviewed 05.07.2024)', url: 'https://midstatehealthnetwork.org/download_file/view/6cf2984e-ecaf-4af4-aaf8-a4f60a255924/864' },
        ],
      },
      referral: {
        value:
          'The PCP screens and must complete a full medical and physical examination before referral, then refers to the CMHSP for the child’s area; MSHN adds that "There is no “wrong door” for a referral": a self-referred family or one without a PCP can start eligibility at the PIHP/CMHSP while being referred to a PCP for screening and the medical exam.',
        status: 'verified',
        cites: [
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
        ],
      },
      telehealth: {
        value:
          'Mid-State Health Network applies the state rule; its published autism material sets nothing different. Only the analyst-level codes. The MDHHS Bureau of Specialty Behavioral Health Services Telemedicine Database lists 97155, 97156, 97157 and 97158 as allowed via simultaneous audio/visual telemedicine (reported with POS 02 or POS 10, no modifier), and its revision log records that 0362T, 97151, 97153 and 97154 were removed from the database on 4/28/23 — so technician-delivered direct treatment and the behavior identification assessment are in-person. The diagnostic-evaluation codes 96112/96113 and 96116 remain allowed via audio/visual "for reporting BHT/ABA eligibility assessments and re-evaluation assessments related to Autism." The SFY 2026 code charts note on 97155 to use POS 02 "if MDHHS has authorized tele-practice for an individual."',
        status: 'verified',
        cites: [
          { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
          { title: 'MSHN Policy — Autism Spectrum Disorder Benefit Eligibility (reviewed 01.07.2025)', url: 'https://midstatehealthnetwork.org/download_file/view/d9a670e3-1121-486f-b048-086f1011cf4f/863' },
          { title: 'MSHN Procedure — Utilization Management (reviewed 05.07.2024)', url: 'https://midstatehealthnetwork.org/download_file/view/6cf2984e-ecaf-4af4-aaf8-a4f60a255924/864' },
        ],
      },
      authTurnaround: {
        value:
          'MSHN’s Utilization Management procedure (reviewed 05.07.2024): notice of a decision that denies or limits services is due "within 14-days following receipt of the request for service for standard authorization decisions, or within 72-hours" for expedited decisions; a decision not reached in time is a denial requiring an adverse benefit determination notice, and the CMHSP may extend by up to 14 calendar days. Federal law (42 CFR 438.210(d)) caps standard decisions at 7 calendar days for rating periods starting on or after January 1, 2026, which postdates MSHN’s procedure.',
        status: 'verified',
        cites: [
          { title: 'MSHN Procedure — Utilization Management (reviewed 05.07.2024)', url: 'https://midstatehealthnetwork.org/download_file/view/6cf2984e-ecaf-4af4-aaf8-a4f60a255924/864' },
          { title: '42 CFR 438.210 — Coverage and authorization of services (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Mid-State Health Network applies the state rule; its published autism material sets nothing different. Medicaid pays last. "Medicaid is considered the payer of last resort. If a beneficiary with Medicare or Other Insurance coverage is enrolled in a Medicaid Health Plan (MHP), or is receiving services under a Prepaid Inpatient Health Plan (PIHP) or Community Mental Health Services Program (CMHSP), that entity is responsible for the Medicaid payment liability." Providers "must utilize other payment sources to their fullest extent" before billing Medicaid, and "Medicaid is not liable for payment of services denied because coverage rules of the primary health insurance were not followed" — so get the commercial plan’s prior authorization and use its network. The ABA section adds that the IPOS must not duplicate services that are the responsibility of "a private insurance or other funding authority." Nothing in Section 18 exempts a child with other coverage from the PIHP’s own eligibility determination and pre-service authorization. Federally, the agency rejects a claim when third-party liability is established and pays only the amount its schedule exceeds the third party’s payment (42 CFR 433.139).',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: 'MSHN Procedure — Autism Spectrum Disorder Services Eligibility and Provision (reviewed 03.03.2026)', url: 'https://midstatehealthnetwork.org/download_file/view/3305887c-abbd-496f-bf81-709f7cb5fdde/864' },
          { title: 'MSHN Policy — Autism Spectrum Disorder Benefit Eligibility (reviewed 01.07.2025)', url: 'https://midstatehealthnetwork.org/download_file/view/d9a670e3-1121-486f-b048-086f1011cf4f/863' },
          { title: 'MSHN Procedure — Utilization Management (reviewed 05.07.2024)', url: 'https://midstatehealthnetwork.org/download_file/view/6cf2984e-ecaf-4af4-aaf8-a4f60a255924/864' },
        ],
      },
    },
    faq: [
      { q: 'Will Mid-State accept our private evaluation?', a: 'Often yes: MSHN tells its CMHSPs to accept an outside comprehensive diagnostic evaluation completed within the last three years, before BHT started, by a qualified licensed practitioner, meeting the content and DSM criteria. The CMHSP may ask a PIHP practitioner to review it.' },
      { q: 'Where do we call?', a: 'The Community Mental Health program for your county (for example, Clinton-Eaton-Ingham for the Lansing area or Saginaw County CMH). MSHN says there is no wrong door.' },
      { q: 'How long can an authorization decision take?', a: 'MSHN’s procedure (2024) allows 14 days for standard decisions and 72 hours for expedited ones, with a possible 14-day extension; federal rules shorten the standard cap to 7 days for contract periods starting on or after January 1, 2026.' },
    ],
  },

  'southwest-michigan-behavioral-health': {
    slug: 'southwest-michigan-behavioral-health',
    family: '',
    cardDesc: '8-county PIHP: screen with M-CHAT or SCQ, ~3-hour evaluation (ADOS-2, ADI-R, DD-CGAS) sent to MDHHS for approval.',
    assessmentPA: {
      value:
        'Runs through the county CMHSP: screening, then the ADOS-2/ADI-R/DD-CGAS evaluation, then MDHHS approval; SWMBH does not publish whether the ABA agency’s 97151 needs its own authorization.',
      status: 'plan-dependent',
      cites: [
        { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
      ],
      verifyVia:
        'The county CMHSP access line listed by SWMBH (e.g., Integrated Services of Kalamazoo, 269-373-6000).',
      blocker: 'per-case',
    },
    treatmentPA: {
      value:
        'Required — PIHP utilization management authorizes the ABA level of services in the IPOS before delivery (state rule; SWMBH publishes nothing different).',
      status: 'verified',
      cites: [
        { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
      ],
    },
    dxRequired: {
      value:
        'Yes — ASD confirmed by a diagnostic evaluation (ADOS-2, ADI-R, DD-CGAS) reviewed and approved by MDHHS.',
      status: 'verified',
      cites: [
        { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
      ],
    },
    payer: 'Southwest Michigan Behavioral Health (SWMBH)',
    state: 'MI', kind: 'medicaid-mco', parent: 'Michigan Medicaid',
    pill: 'Payer Guide · SWMBH · Michigan Medicaid',
    h1: 'SWMBH ABA coverage: the Michigan Medicaid autism benefit intake guide.',
    metaTitle: 'SWMBH ABA & Autism Benefit Guide (Michigan Medicaid) | Carelu',
    metaDescription:
      'How Southwest Michigan Behavioral Health runs the Michigan Medicaid autism/ABA benefit across eight counties: M-CHAT/SCQ screening, the three-hour ADOS-2/ADI-R/DD-CGAS evaluation sent to MDHHS, quarterly IPOS reviews, and county CMHSP access lines.',
    intro: [
      'Southwest Michigan Behavioral Health (SWMBH) is the PIHP for region 4: Kalamazoo, Calhoun, Berrien, Van Buren, St. Joseph, Branch, Cass and Barry counties, each served by its own CMHSP. SWMBH contracts ABA through those CMHSPs and publishes a four-step path into the Medicaid, Healthy Michigan Plan and MIChild autism benefit. The state rules in our Michigan Medicaid guide are the floor.',
    ],
    atGlance: [
      { label: 'Region', value: 'PIHP region 4 — 8 counties, 8 CMHSPs' },
      { label: 'Front door', value: 'The county CMHSP access line (e.g., Integrated Services of Kalamazoo 269-373-6000)' },
      { label: 'Screening', value: 'By the PCP or the CMHSP access center: M-CHAT or SCQ' },
      { label: 'Evaluation', value: 'About 3 hours over two appointments: ADOS-2, ADI-R, DD-CGAS; results sent to MDHHS for approval' },
      { label: 'Plan', value: 'IPOS with the case holder, reviewed quarterly; skills assessment (ABLLS or VB-MAPP) every six months' },
      { label: 'Delivery', value: 'Clinic or home, individual or group; 5–25 hours a week; supervision 1 hour per 10' },
    ],
    sections: [
      {
        h2: 'SWMBH’s four steps',
        body: [
          'Step 1 is screening, by the child’s primary care physician or the local CMHSP access center, with the M-CHAT or the Social Communication Questionnaire. Step 2 is the diagnostic evaluation, which "takes approximately 3 hours and is completed during two appointments" using the ADOS-2, ADI-R and DD-CGAS; "Once completed, the results are sent to the Michigan Department of Health and Human Services for review/approval." Step 3 is choosing an ABA provider and building the IPOS with the case holder (supports coordinator, case manager or independent facilitator), reviewed quarterly, with a skills assessment (ABLLS or VB-MAPP) every six months. Step 4 is starting ABA with behavior technicians, in clinic or home, individually or in groups, supervised "(1 hour per 10 hours) by Board Certified Behavior Analysts (BCBA) or other Qualified Behaviorist," with parent training.',
          'SWMBH describes ABA plans as averaging 5 to 25 hours of direct intervention a week and notes that ABA interventions "require parent/guardian training and participation." Children may also receive speech, occupational and physical therapy, respite, community living supports and medication management through their supports coordinator.',
        ],
        cites: [
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
        ],
      },
      {
        h2: 'CMHSP access lines in region 4',
        body: [
          'SWMBH lists the county access lines: Integrated Services of Kalamazoo 269-373-6000; Woodlands (Cass) 269-445-2451; Summit Pointe (Calhoun) 269-966-1460; Van Buren Community Mental Health 269-657-5574; Riverwood (Berrien) 269-925-0585; Pines Behavioral Health (Branch) 517-278-2129; St. Joseph County Community Mental Health 269-467-1000; Barry County Community Mental Health 269-948-8041. Authorizations, billing modifiers, telehealth and coordination of benefits follow the MDHHS rules.',
        ],
        cites: [
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
          { title: 'MDHHS — PIHP county designations table (FY27 PIHP contract, May 2025)', url: 'https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/PIHPs/PIHP-Region-Table.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
        ],
      },
    ],
    collect: [
      { title: 'County of residence', desc: 'Picks which of SWMBH’s eight CMHSPs runs the screening and evaluation.' },
      { title: 'Screening result (M-CHAT or SCQ)', desc: 'From the PCP if already done; otherwise the CMHSP access center screens.' },
      { title: 'Time for two evaluation appointments', desc: 'About three hours in total.' },
      { title: 'Parent availability for training', desc: 'SWMBH says ABA requires parent/guardian training and participation.' },
    ],
    sources: [
      { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
      { title: 'MDHHS — PIHP county designations table (FY27 PIHP contract, May 2025)', url: 'https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/PIHPs/PIHP-Region-Table.pdf' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
      { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: '42 CFR 438.210 — Coverage and authorization of services (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'SWMBH: services "are supervised (1 hour per 10 hours) by Board Certified Behavior Analysts (BCBA) or other Qualified Behaviorist," matching the manual’s minimum of one hour of clinical observation and direction for every 10 hours of direct treatment.',
        status: 'verified',
        cites: [
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'SWMBH applies the state rule; its published autism material sets nothing different. Allowed for the pairs MDHHS names. The SFY 2026 code charts say 97155 "Must co-occur with 97153, 97154, and 0373T in order to be reported," and the same-time reporting rules state that 97153 and 97155 "can occur at the same time, just not by the same person" (the technician delivers 97153 while the BCBA/LBA supervising delivers 97155); 97156 may be delivered by the BCBA/LBA to the caregiver while a technician delivers 97153 to the child; a 97151 reassessment may be reported at the same time as 97153, 97154, 0373T (and potentially 97157/97158) "IF there are two separate providers"; and 0362T may be reported at the same time as 0373T. Targeted case management may also run at the same time as a direct ABA service.',
        status: 'verified',
        cites: [
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
        ],
      },
      dailyLimits: {
        value:
          'SWMBH applies the state rule; its published autism material sets nothing different. No per-day or per-week unit cap is published. The manual sets planning averages, not ceilings: focused behavioral intervention averages 5–15 hours a week and comprehensive behavioral intervention 16–25 hours a week, with actual hours set by the behavioral plan of care. A PIHP "may not deny services based solely on preset limits of the cost, amount, scope, and duration of services," and the level of service is re-determined at least every six months on measurable progress. Authorizations may run up to 365 days.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
        ],
      },
      noteSignature: {
        value:
          'SWMBH applies the state rule; its published autism material sets nothing different. Section 18 of the Medicaid Provider Manual and the SFY 2026 code charts do not state who signs an ABA session note or by when. The manual requires the individual plan of service (IPOS) to specify amount, scope and duration of each authorized service and permits electronic signatures for the beneficiary on the plan of service and consents; session-note signature standards sit in each PIHP’s provider contract and documentation standards.',
        status: 'plan-dependent',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
        ],
        verifyVia:
          'SWMBH (or its CMHSP) provider manual / documentation standards (ask the PIHP’s autism benefit or provider network office for the ABA progress-note requirements).',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'SWMBH: ABA "can be provided either in the home or in a clinic setting," individually or in groups. The state rule adds community settings and excludes IDEA school services.',
        status: 'verified',
        cites: [
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      billAsProvider: {
        value:
          'SWMBH applies the state rule; its published autism material sets nothing different. Services are reported to the PIHP/CMHSP under the provider’s network contract, with a modifier naming the rendering staff level. The SFY 2026 code charts list the qualifying provider types and modifiers for each ABA code: HO for a licensed behavior analyst (master’s level) or QBHP, HN for a licensed assistant behavior analyst (bachelor’s level), and HM for a behavior technician on the technician codes (97153, 97154, 0373T); 97151 carries the state-defined U5 "Autism" modifier and group codes carry the UN–US group-size modifiers. A technician does not need a license or BACB registration, but must complete BACB-approved RBT training and work under the BCBA/LBA’s supervision.',
        status: 'verified',
        cites: [
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Under 21, for Medicaid, Healthy Michigan Plan and MIChild members: SWMBH routes eligibility for "the Medicaid/Healthy Michigan/MICHILD Autism benefit" through its CMHSPs, and the manual limits BHT to children under 21.',
        status: 'verified',
        cites: [
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      dxRecency: {
        value:
          'SWMBH applies the state rule; its published autism material sets nothing different. No expiry on the diagnosis itself. "Comprehensive diagnostic re-evaluations are required no more than once every three years, unless determined medically necessary more frequently" by a physician or other licensed practitioner, with frequency based on age, developmental level, comorbidities, severity and adaptive deficits. The level of service is re-determined at least every six months, and BHT authorizations run up to 365 days.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
        ],
      },
      diagnosingProviders: {
        value:
          'SWMBH applies the state rule; its published autism material sets nothing different. A qualified licensed practitioner "qualified and experienced in diagnosing ASD": a physician with a specialty in psychiatry or neurology; a physician with a subspecialty in developmental pediatrics, developmental-behavioral pediatrics or a related discipline; a physician with a specialty in pediatrics or other appropriate specialty with ASD training, experience or expertise; a psychologist; an advanced practice registered nurse or a physician assistant with ASD and/or behavioral health training; or a master’s-level, fully licensed clinical social worker qualified and experienced in diagnosing ASD. The PIHP is responsible for arranging the comprehensive diagnostic evaluation.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
        ],
      },
      diagnosticTools: {
        value:
          'SWMBH: screening with the M-CHAT or the Social Communication Questionnaire (SCQ), then a diagnostic evaluation of about three hours over two appointments using the ADOS-2, ADI-R and DD-CGAS; the results are sent to MDHHS "for review/approval." Skills assessments (ABLLS or VB-MAPP) follow every six months during treatment.',
        status: 'verified',
        cites: [
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      referral: {
        value:
          'Screening "is completed by the child’s primary care physician or the your local CMHSP Access Center," then the CMHSP arranges the diagnostic evaluation; SWMBH lists each county CMHSP’s access line. The manual still expects a full medical and physical exam before referral for the evaluation.',
        status: 'verified',
        cites: [
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
        ],
      },
      telehealth: {
        value:
          'SWMBH applies the state rule; its published autism material sets nothing different. Only the analyst-level codes. The MDHHS Bureau of Specialty Behavioral Health Services Telemedicine Database lists 97155, 97156, 97157 and 97158 as allowed via simultaneous audio/visual telemedicine (reported with POS 02 or POS 10, no modifier), and its revision log records that 0362T, 97151, 97153 and 97154 were removed from the database on 4/28/23 — so technician-delivered direct treatment and the behavior identification assessment are in-person. The diagnostic-evaluation codes 96112/96113 and 96116 remain allowed via audio/visual "for reporting BHT/ABA eligibility assessments and re-evaluation assessments related to Autism." The SFY 2026 code charts note on 97155 to use POS 02 "if MDHHS has authorized tele-practice for an individual."',
        status: 'verified',
        cites: [
          { title: 'MDHHS Bureau of Specialty Behavioral Health Services — Telemedicine Database (effective May 12, 2023; archived 1/6/2026)', url: 'https://web.archive.org/web/20260106050903/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/Bureau_of_Specialty_Behavioral_Health_Services-Telemedicine_Database.pdf?rev=39a4677add1f4ed0a2e952bd1c6e5c54' },
          { title: 'MDHHS SFY 2026 Behavioral Health Code Charts and Provider Qualifications (updated 9/26/2025; archived 10/31/2025)', url: 'https://web.archive.org/web/20251031103317/https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Keeping-Michigan-Healthy/BH-DD/Reporting-Requirements/SFY2026_Behavioral_Health_Code_Charts_and_Provider_Qualifications.xlsx?rev=e9481f6c7f6e4628897bbe3ad67c892b' },
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
        ],
      },
      authTurnaround: {
        value:
          'SWMBH applies the state rule; its published autism material sets nothing different. The PIHP decides, under the federal managed-care clock. Section 18 says "The PIHP’s Utilization Management will authorize the level of services prior to the delivery of services," and the manual requires determinations "Made within federal and state standards for timeliness." Under 42 CFR 438.210(d) a PIHP must decide a standard request within state-set timeframes that "may not exceed 14 calendar days" for rating periods that start before January 1, 2026 and "may not exceed 7 calendar days" for rating periods starting on or after that date, extendable by up to 14 calendar days at the enrollee’s or provider’s request or with justification; expedited decisions are due within 72 hours. Which cap binds depends on the PIHP contract’s rating-period start date. BHT authorizations run for up to 365 days and are re-authorized annually.',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Sections 1–2', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: '42 CFR 438.210 — Coverage and authorization of services (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'SWMBH applies the state rule; its published autism material sets nothing different. Medicaid pays last. "Medicaid is considered the payer of last resort. If a beneficiary with Medicare or Other Insurance coverage is enrolled in a Medicaid Health Plan (MHP), or is receiving services under a Prepaid Inpatient Health Plan (PIHP) or Community Mental Health Services Program (CMHSP), that entity is responsible for the Medicaid payment liability." Providers "must utilize other payment sources to their fullest extent" before billing Medicaid, and "Medicaid is not liable for payment of services denied because coverage rules of the primary health insurance were not followed" — so get the commercial plan’s prior authorization and use its network. The ABA section adds that the IPOS must not duplicate services that are the responsibility of "a private insurance or other funding authority." Nothing in Section 18 exempts a child with other coverage from the PIHP’s own eligibility determination and pre-service authorization. Federally, the agency rejects a claim when third-party liability is established and pays only the amount its schedule exceeds the third party’s payment (42 CFR 433.139).',
        status: 'verified',
        cites: [
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Behavioral Health and IDD Supports and Services chapter, Section 18: BHT/ABA', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: 'SWMBH — Autism Services', url: 'https://swmbh.org/autism-services/' },
        ],
      },
    },
    faq: [
      { q: 'Which autism benefit does SWMBH run?', a: 'The Medicaid, Healthy Michigan Plan and MIChild autism benefit for children under 21 in Kalamazoo, Calhoun, Berrien, Van Buren, St. Joseph, Branch, Cass and Barry counties.' },
      { q: 'What does the evaluation involve?', a: 'About three hours over two appointments using the ADOS-2, ADI-R and DD-CGAS; the results go to MDHHS for review and approval.' },
      { q: 'How much supervision does SWMBH expect?', a: 'One hour of BCBA or qualified behaviorist supervision per ten hours of technician treatment, matching the state rule.' },
    ],
  },

  'blue-cross-blue-shield-michigan': {
    slug: 'blue-cross-blue-shield-michigan',
    family: 'bcbs',
    cardDesc: 'Michigan’s Blue plan: ABA regardless of age since 2022, AAEC or independent evaluation, Blue Cross Behavioral Health PA.',
    assessmentPA: {
      value:
        'Required for BCN HMO plans and for Blue Cross PPO fully insured and select self-funded groups — 97151/97152 are on the Blue Cross Behavioral Health prior-authorization list; some PPO groups do not require it. The diagnostic evaluation’s behavioral-health components need no PA.',
      status: 'verified',
      cites: [
        { title: 'BCBSM / BCN — Procedure codes for which providers must request prior authorization (v.2026.3)', url: 'https://authorizations.bcbsm.com/static-assets/documents/procedure-codes-that-require-prior-auth.pdf' },
        { title: 'Blue Cross Blue Shield of Michigan — What do I need to know about autism coverage?', url: 'https://www.bcbsm.com/individuals/help/using-your-insurance/autism-coverage/' },
        { title: 'BCBSM / BCN — Obtaining a comprehensive diagnostic evaluation for autism and finding treatment (rev. November 2025)', url: 'https://www.bcbsm.com/amslibs/content/dam/public/common/documents/approved-autism-evaluation-centers.pdf' },
      ],
    },
    treatmentPA: {
      value:
        'Required through Blue Cross Behavioral Health for all BCN HMO plans and for Blue Cross PPO fully insured and select self-funded groups (97153–97158 on the PA list); submit the comprehensive diagnostic evaluation with the request.',
      status: 'verified',
      cites: [
        { title: 'BCBSM / BCN — Procedure codes for which providers must request prior authorization (v.2026.3)', url: 'https://authorizations.bcbsm.com/static-assets/documents/procedure-codes-that-require-prior-auth.pdf' },
        { title: 'Blue Cross Blue Shield of Michigan — What do I need to know about autism coverage?', url: 'https://www.bcbsm.com/individuals/help/using-your-insurance/autism-coverage/' },
        { title: 'BCBSM / BCN — Obtaining a comprehensive diagnostic evaluation for autism and finding treatment (rev. November 2025)', url: 'https://www.bcbsm.com/amslibs/content/dam/public/common/documents/approved-autism-evaluation-centers.pdf' },
      ],
    },
    dxRequired: {
      value:
        'Yes — current-DSM ASD confirmed by a comprehensive diagnostic evaluation from an AAEC or PCP/independent evaluators; re-evaluation not required.',
      status: 'verified',
      cites: [
        { title: 'BCBSM / BCN — Obtaining a comprehensive diagnostic evaluation for autism and finding treatment (rev. November 2025)', url: 'https://www.bcbsm.com/amslibs/content/dam/public/common/documents/approved-autism-evaluation-centers.pdf' },
        { title: 'BCBSM / BCN — Overview of autism coverage (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-coverage-overview.pdf' },
      ],
    },
    payer: 'Blue Cross Blue Shield of Michigan',
    state: 'MI', kind: 'commercial',
    pill: 'Payer Guide · Blue Cross Blue Shield of Michigan',
    h1: 'Blue Cross Blue Shield of Michigan ABA coverage: the intake guide.',
    metaTitle: 'Blue Cross Blue Shield of Michigan ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Blue Cross Blue Shield of Michigan and Blue Care Network cover ABA: no age limit since 2022, AAEC or independent diagnostic evaluations, Blue Cross Behavioral Health prior authorization, billing and documentation rules, Michigan’s mandate caps and exemptions, and what intake should verify.',
    intro: [
      'Blue Cross Blue Shield of Michigan and its HMO, Blue Care Network (BCN), are Michigan’s Blue plan. Behavioral health prior authorizations for their commercial members, autism included, run through Blue Cross Behavioral Health. Blue Cross publishes an unusually complete set of autism documents, and three of its rules go beyond the state mandate: no age limit on ABA since 2022, no required re-evaluation, and no billable-unit limits beyond the authorization. This guide stacks Blue Cross’s own rules on top of Michigan’s mandate and the plan’s funding type.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — ABA for ASD, regardless of age for dates of service since Jan. 1, 2022 (check group customizations)' },
      { label: 'State mandate', value: 'MCL 500.3406s (insurers; 2012 PA 100, amended 2016) and MCL 550.1416e (health care corporation certificates)' },
      { label: 'Mandate age', value: 'Treatment coverage may be limited to members through age 18' },
      { label: 'Mandate caps', value: 'Annual maximums allowed: $50,000 through age 6, $40,000 ages 7–12, $30,000 ages 13–18; no visit limits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; exchange QHPs beyond essential health benefits; short-term policies of 6 months or less' },
      { label: 'Licensure', value: 'Behavior analysts licensed by LARA (Public Health Code Part 182A, law since 2016; BACB certification required); technicians unlicensed' },
      { label: 'Prior auth', value: 'Blue Cross Behavioral Health: all BCN HMO plans; Blue Cross PPO fully insured and select self-funded groups' },
      { label: 'Diagnosis route', value: 'Approved autism evaluation center (AAEC) or PCP/independent evaluators' },
    ],
    sections: [
      {
        h2: 'Getting the diagnosis Blue Cross accepts',
        body: [
          'Before an ABA provider can ask Blue Cross Behavioral Health for prior authorization, the member needs a comprehensive diagnostic evaluation showing the DSM criteria for autism, completed by a licensed physician, licensed psychologist or other licensed clinician qualified to diagnose autism. Michigan members have two routes: an approved autism evaluation center (AAEC), which arranges each discipline’s evaluation and hands the family the results, or a primary care provider and/or independent autism evaluation providers. Prior authorization is not required for the behavioral health components of the evaluation, but some BCN commercial members need a PCP referral for each medical specialist involved. AAECs and independent teams must field medical, behavioral and speech-language specialists and use standardized testing with interviews and observation (ADOS, ADI-R, CARS, SCQ, ASRS, SRS are named examples).',
          'Blue Cross does not require a comprehensive re-evaluation later: "It’s optional, based on clinical need." Blue Cross accepts only current-DSM autism codes; Asperger’s and PDD now fall under the ASD diagnosis.',
        ],
        cites: [
          { title: 'BCBSM / BCN — Obtaining a comprehensive diagnostic evaluation for autism and finding treatment (rev. November 2025)', url: 'https://www.bcbsm.com/amslibs/content/dam/public/common/documents/approved-autism-evaluation-centers.pdf' },
          { title: 'BCBSM / BCN — Requirements for comprehensive diagnostic evaluations by AAECs and independent evaluation teams (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-diagnostic-evaluation-requirements.pdf' },
          { title: 'BCBSM / BCN — Overview of autism coverage (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-coverage-overview.pdf' },
          { title: 'Blue Cross Blue Shield of Michigan — What do I need to know about autism coverage?', url: 'https://www.bcbsm.com/individuals/help/using-your-insurance/autism-coverage/' },
        ],
      },
      {
        h2: 'Prior authorization and billing',
        body: [
          'Blue Cross Behavioral Health manages autism prior authorizations for Blue Cross commercial, Medicare Plus Blue, BCN commercial and BCN Advantage. The procedure-code list (v.2026.3) marks 97151 through 97158 as requiring prior authorization for BCN HMO, Medicare Plus Blue PPO, and Blue Cross commercial "fully insured groups and … select self-funded groups," and the member page confirms "All Blue Care Network HMO plans require prior authorization" while "Some Blue Cross Blue Shield of Michigan PPO plans require prior authorization, but not all." Out-of-network providers submit through online ABA assessment and treatment request forms. Blue Cross also notes that its autism benefits comply with the Michigan mandate but "The mandate doesn’t apply to some self-funded employer groups," Medicare Advantage or Medigap plans, or Blue Cross Complete (Medicaid).',
          'Billing: the supervising LBA bills all ABA, technician time included; behavior analysts must be Michigan-licensed to be paid (since Jan. 7, 2020); "There are no limits for billable ABA services" beyond the authorized units; each date of service goes on its own line with the authorization number. Blue Cross publishes no commercial ABA rates — they are contract terms.',
        ],
        cites: [
          { title: 'BCBSM / BCN — Autism Services (provider prior authorization page)', url: 'https://authorizations.bcbsm.com/prov-ref-autism' },
          { title: 'BCBSM / BCN — Procedure codes for which providers must request prior authorization (v.2026.3)', url: 'https://authorizations.bcbsm.com/static-assets/documents/procedure-codes-that-require-prior-auth.pdf' },
          { title: 'Blue Cross Blue Shield of Michigan — What do I need to know about autism coverage?', url: 'https://www.bcbsm.com/individuals/help/using-your-insurance/autism-coverage/' },
          { title: 'BCBSM / BCN — Autism services: Billing guidelines and procedure codes (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-billing-guidelines-procedure-codes.pdf' },
          { title: 'BCBSM / BCN — Behavioral health: care management and utilization management programs (December 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/cm-um-behavioral-health.pdf' },
          { title: 'Blue Cross Behavioral Health — Frequently asked questions for providers (November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/blue-cross-behavioral-health-faq.pdf' },
        ],
      },
      {
        h2: 'Documentation Blue Cross audits',
        body: [
          'Blue Cross’s July 2026 documentation standards spell out each note: patient identification, place of service and any telemedicine, technician and supervising LBA with credentials, date with start and stop times (narratives in no more than four-hour blocks), interventions, data and progress, and the signatures and credentials of the RBT and supervising LBA (97153/97154) or the LBA (97155–97158). Where the LBA supervises live, the note must separate 97153 technician care from 97155 supervision. Caregivers are expected to participate in at least two hours a month of caregiver training and attend at least 80% of scheduled sessions.',
        ],
        cites: [
          { title: 'BCBSM / BCN — Behavioral health medical record documentation requirements for autism treatment services (rev. July 2026)', url: 'https://authorizations.bcbsm.com/static-assets/documents/bh-documentation-rqumts-autism-services.pdf' },
        ],
      },
      {
        h2: 'The Michigan autism mandate: what it guarantees, and its age and dollar limits',
        body: [
          'Michigan’s autism mandate has two parallel statutes: MCL 500.3406s for insurers (added by 2012 PA 100, amended by 2016 PA 276, applying to policies delivered, issued or renewed beginning 180 days after its April 18, 2012 enactment) and MCL 550.1416e for health care corporation group and nongroup certificates. Both require coverage "for the diagnosis of autism spectrum disorders and treatment of autism spectrum disorders," including behavioral health treatment such as applied behavior analysis, and bar the carrier from limiting the number of visits, from denying coverage because treatment "is educational or habilitative in nature," and from applying dollar limits, copays, deductibles or coinsurance that do not apply to physical illness generally.',
          'Unlike newer mandates, Michigan’s still carries age and dollar ceilings the carrier may choose to apply: coverage for treatment may be limited "through 18 years of age" and to a maximum annual benefit of $50,000 through age 6, $40,000 from 7 through 12, and $30,000 from 13 through 18. Treatment must be "prescribed or ordered" by a licensed physician or licensed psychologist who finds it medically necessary, behavioral health treatment must be "provided or supervised by a board certified behavior analyst or a licensed psychologist," and the diagnosis means assessments "including the autism diagnostic observation schedule, performed by a licensed physician or a licensed psychologist." While a member is in treatment the carrier may require a treatment plan and treatment review, request the ADOS results, request that the ADOS be repeated no more than once every three years, and request an annual development evaluation. Utilization review, medical-necessity review, network requirements and coordination of benefits still apply. Exempt: self-funded ERISA employer plans (outside state insurance law), exchange qualified health plans to the extent the coverage exceeds essential health benefits, and, under 500.3406s, short-term policies of six months or less.',
        ],
        cites: [
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
        ],
      },
      {
        h2: 'Licensure',
        body: [
          'Michigan licenses behavior analysts through LARA’s Board of Behavior Analysts under Part 182A of the Public Health Code (Michigan’s licensure law dates from 2016). A license requires current BACB certification in good standing sent directly from the BACB, a criminal background check, human-trafficking and implicit-bias training, and renews every four years; assistant behavior analysts have their own LARA license and supervision verification. Technicians are not licensed by the state. Blue Cross ties payment to it: behavior analysts "must be licensed by the state of Michigan to be reimbursed by Blue Cross or BCN," and psychologists who want to provide ABA file an attestation form.',
        ],
        cites: [
          { title: 'LARA — Michigan Board of Behavior Analysts (Public Health Code Part 182A; R 338.1801–338.1835)', url: 'https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/behavior-analysts' },
          { title: 'LARA — Michigan Behavior Analyst Licensing Guide (rev. 1/26/2026)', url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/bpl/Behavior-Analysts/Licensing-Info-and-Forms/Behavior-Analyst-Licensing-Guide-FAQ-12626.pdf' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'BCBSM / BCN — Autism services: Billing guidelines and procedure codes (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-billing-guidelines-procedure-codes.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'BCN (HMO) or Blue Cross PPO, and funding type', desc: 'All BCN HMO plans require ABA prior authorization; PPO depends on the group. Self-funded groups may sit outside the mandate.' },
      { title: 'Comprehensive diagnostic evaluation', desc: 'From an AAEC or PCP/independent evaluators, showing DSM criteria and recommending ABA; attach it to the PA request.' },
      { title: 'PCP referral (BCN)', desc: 'Some BCN members need a PCP referral for each medical specialist in the evaluation.' },
      { title: 'Caregiver availability', desc: 'Blue Cross expects at least two hours a month of caregiver training and 80% session attendance.' },
      { title: 'Other coverage', desc: 'Record Medicaid, a second parent’s plan, TRICARE or CHAMPVA for coordination of benefits.' },
    ],
    sources: [
      { title: 'BCBSM / BCN — Obtaining a comprehensive diagnostic evaluation for autism and finding treatment (rev. November 2025)', url: 'https://www.bcbsm.com/amslibs/content/dam/public/common/documents/approved-autism-evaluation-centers.pdf' },
      { title: 'BCBSM / BCN — Requirements for comprehensive diagnostic evaluations by AAECs and independent evaluation teams (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-diagnostic-evaluation-requirements.pdf' },
      { title: 'BCBSM / BCN — Overview of autism coverage (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-coverage-overview.pdf' },
      { title: 'Blue Cross Blue Shield of Michigan — What do I need to know about autism coverage?', url: 'https://www.bcbsm.com/individuals/help/using-your-insurance/autism-coverage/' },
      { title: 'BCBSM / BCN — Autism Services (provider prior authorization page)', url: 'https://authorizations.bcbsm.com/prov-ref-autism' },
      { title: 'BCBSM / BCN — Procedure codes for which providers must request prior authorization (v.2026.3)', url: 'https://authorizations.bcbsm.com/static-assets/documents/procedure-codes-that-require-prior-auth.pdf' },
      { title: 'BCBSM / BCN — Autism services: Billing guidelines and procedure codes (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-billing-guidelines-procedure-codes.pdf' },
      { title: 'BCBSM / BCN — Behavioral health: care management and utilization management programs (December 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/cm-um-behavioral-health.pdf' },
      { title: 'Blue Cross Behavioral Health — Frequently asked questions for providers (November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/blue-cross-behavioral-health-faq.pdf' },
      { title: 'BCBSM / BCN — Behavioral health medical record documentation requirements for autism treatment services (rev. July 2026)', url: 'https://authorizations.bcbsm.com/static-assets/documents/bh-documentation-rqumts-autism-services.pdf' },
      { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
      { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
      { title: 'LARA — Michigan Board of Behavior Analysts (Public Health Code Part 182A; R 338.1801–338.1835)', url: 'https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/behavior-analysts' },
      { title: 'LARA — Michigan Behavior Analyst Licensing Guide (rev. 1/26/2026)', url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/bpl/Behavior-Analysts/Licensing-Info-and-Forms/Behavior-Analyst-Licensing-Guide-FAQ-12626.pdf' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'MCL 500.2212e — prior authorization process and timelines, Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-2212e' },
      { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
      { title: 'MCL 550.253 — Coordination of Benefits Act, order of benefit determination', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-253' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
      { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Blue Cross requires ABA to be delivered or supervised by a Michigan-licensed behavior analyst: "Effective Jan. 7, 2020, behavior analysts must be licensed by the state of Michigan to be reimbursed by Blue Cross or BCN." Technician line therapy is administered "under the direction of an LBA," and LBA supervision of line therapy and skills training is billed as protocol modification (97155). Blue Cross publishes no minimum supervision ratio. Its documentation standards add a caregiver requirement: parents or guardians should participate in at least two hours a month of direct caregiver training with the LBA/BCBA and bring the child to at least 80% of scheduled sessions.',
        status: 'verified',
        cites: [
          { title: 'BCBSM / BCN — Autism services: Billing guidelines and procedure codes (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-billing-guidelines-procedure-codes.pdf' },
          { title: 'BCBSM / BCN — Behavioral health medical record documentation requirements for autism treatment services (rev. July 2026)', url: 'https://authorizations.bcbsm.com/static-assets/documents/bh-documentation-rqumts-autism-services.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'Allowed for 97153 and 97155. The billing guide describes 97155 as protocol modification that "may simultaneously direct a technician in administering the modified protocol while the member is present," and the documentation standards require that "If live supervision with technician and LBA, documentation must clearly show *97153 is for direct technician care and *97155 is for the LBA’s supervision." Direction of a technician without the client present "is not reported separately," and 97155 may not be used to bill training a technician to perform line therapy.',
        status: 'verified',
        cites: [
          { title: 'BCBSM / BCN — Autism services: Billing guidelines and procedure codes (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-billing-guidelines-procedure-codes.pdf' },
          { title: 'BCBSM / BCN — Behavioral health medical record documentation requirements for autism treatment services (rev. July 2026)', url: 'https://authorizations.bcbsm.com/static-assets/documents/bh-documentation-rqumts-autism-services.pdf' },
        ],
      },
      dailyLimits: {
        value:
          '"There are no limits for billable ABA services. The services billed must be based on the units authorized." Units billed may not exceed the number on the authorization letter for each code, each date of service goes on its own claim line within the authorized dates, and progress-note narratives must be documented in no more than four-hour (16-unit) increments.',
        status: 'verified',
        cites: [
          { title: 'BCBSM / BCN — Autism services: Billing guidelines and procedure codes (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-billing-guidelines-procedure-codes.pdf' },
          { title: 'BCBSM / BCN — Behavioral health medical record documentation requirements for autism treatment services (rev. July 2026)', url: 'https://authorizations.bcbsm.com/static-assets/documents/bh-documentation-rqumts-autism-services.pdf' },
        ],
      },
      noteSignature: {
        value:
          'Each ABA progress note must carry the "Signature and credentials of the RBT and supervising LBA" for technician services (97153, 97154) and the "Signature and credentials of the LBA" for 97155, 97156, 97157 and 97158, along with the date, start and stop times, the place of service and whether telemedicine was used, and the names and credentials of the technician and supervising LBA.',
        status: 'verified',
        cites: [
          { title: 'BCBSM / BCN — Behavioral health medical record documentation requirements for autism treatment services (rev. July 2026)', url: 'https://authorizations.bcbsm.com/static-assets/documents/bh-documentation-rqumts-autism-services.pdf' },
        ],
      },
      placeOfService: {
        value:
          'Blue Cross’s published autism documents do not list covered or excluded settings; they require each progress note to record the "Location / place of service and if telemedicine delivered technology is utilized." Setting limits (including school) are in the member’s certificate and the Blue Cross Commercial Provider Manual, which sits behind the Availity portal.',
        status: 'unverified',
        cites: [
          { title: 'BCBSM / BCN — Behavioral health medical record documentation requirements for autism treatment services (rev. July 2026)', url: 'https://authorizations.bcbsm.com/static-assets/documents/bh-documentation-rqumts-autism-services.pdf' },
          { title: 'BCBSM / BCN — Autism services: Billing guidelines and procedure codes (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-billing-guidelines-procedure-codes.pdf' },
        ],
        verifyVia:
          'Blue Cross Commercial Provider Manual, Psychiatric Care Services chapter, "Autism spectrum disorder" section (Availity > Payer Spaces > BCBSM and BCN > Resources), or Blue Cross Behavioral Health.',
        blocker: 'document',
      },
      billAsProvider: {
        value:
          'The supervising LBA bills. "Line therapy is billable only by an LBA. A technician’s services are billed by the supervising LBA," and skills-training groups likewise. Behavior analysts must be licensed by the State of Michigan (since Jan. 7, 2020) to be reimbursed; H-codes and S-codes are payable only to non-Michigan providers who cannot use the AMA category I codes. Bill each date of service on its own line with the autism diagnosis from the authorization and the 10-digit authorization number.',
        status: 'verified',
        cites: [
          { title: 'BCBSM / BCN — Autism services: Billing guidelines and procedure codes (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-billing-guidelines-procedure-codes.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'No age cap on Blue Cross commercial or BCN commercial ABA since 2022: "For dates of service on or after Jan. 1, 2022, the above services are benefits for members with an ASD diagnosis regardless of age"; before that, ABA ran "only through the age of 18." This is more generous than the state mandate, which would allow an age-18 limit. Employer groups can customize autism benefits, so check the member’s coverage.',
        status: 'verified',
        cites: [
          { title: 'BCBSM / BCN — Overview of autism coverage (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-coverage-overview.pdf' },
          { title: 'Blue Cross Blue Shield of Michigan — What do I need to know about autism coverage?', url: 'https://www.bcbsm.com/individuals/help/using-your-insurance/autism-coverage/' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
      },
      dxRecency: {
        value:
          'No expiry: "A comprehensive diagnostic re-evaluation is not required by Blue Cross Behavioral Health. It’s optional, based on clinical need," separate from the reassessments the licensed behavior analyst completes during treatment (typically semi-annual). Under the mandate a fully insured plan may still request that the ADOS be repeated no more than once every three years.',
        status: 'verified',
        cites: [
          { title: 'BCBSM / BCN — Obtaining a comprehensive diagnostic evaluation for autism and finding treatment (rev. November 2025)', url: 'https://www.bcbsm.com/amslibs/content/dam/public/common/documents/approved-autism-evaluation-centers.pdf' },
          { title: 'BCBSM / BCN — Autism services: Billing guidelines and procedure codes (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-billing-guidelines-procedure-codes.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
      },
      diagnosingProviders: {
        value:
          'The comprehensive diagnostic evaluation must be "completed by a licensed physician, a licensed psychologist or another licensed clinician who is qualified to diagnose autism by state licensure and related training," either at an approved autism evaluation center (AAEC) in Michigan or through a primary care provider and/or independent evaluation providers (pediatrician, developmental pediatrician, pediatric neurologist, neurologist, child psychologist, child or adult psychiatrist, neuropsychologist, psychologist, speech-language therapist). AAECs and independent evaluation teams must have medical, behavioral and speech-language disciplines on the core team.',
        status: 'verified',
        cites: [
          { title: 'BCBSM / BCN — Obtaining a comprehensive diagnostic evaluation for autism and finding treatment (rev. November 2025)', url: 'https://www.bcbsm.com/amslibs/content/dam/public/common/documents/approved-autism-evaluation-centers.pdf' },
          { title: 'Blue Cross Blue Shield of Michigan — What do I need to know about autism coverage?', url: 'https://www.bcbsm.com/individuals/help/using-your-insurance/autism-coverage/' },
          { title: 'BCBSM / BCN — Requirements for comprehensive diagnostic evaluations by AAECs and independent evaluation teams (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-diagnostic-evaluation-requirements.pdf' },
        ],
      },
      diagnosticTools: {
        value:
          'The evaluation must contain DSM diagnostic criteria (current edition). For AAECs and independent evaluation teams Blue Cross requires standardized, age-appropriate testing that includes both interviews and observation — examples: ADOS, ADI-R, CARS, SCQ, ASRS, SRS — plus cognitive, adaptive, language and sensory assessments, an in-depth medical history and developmental and behavioral observations.',
        status: 'verified',
        cites: [
          { title: 'BCBSM / BCN — Obtaining a comprehensive diagnostic evaluation for autism and finding treatment (rev. November 2025)', url: 'https://www.bcbsm.com/amslibs/content/dam/public/common/documents/approved-autism-evaluation-centers.pdf' },
          { title: 'BCBSM / BCN — Requirements for comprehensive diagnostic evaluations by AAECs and independent evaluation teams (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-diagnostic-evaluation-requirements.pdf' },
        ],
      },
      referral: {
        value:
          'Blue Cross needs a comprehensive diagnostic evaluation before an ABA provider may request prior authorization, and the evaluation’s treatment plan should recommend ABA. For some BCN (HMO) commercial members "a referral from the primary care provider is required for each medical specialist who will see the member during the evaluation process." For a fully insured Michigan policy the mandate adds an order requirement: covered treatment is care "prescribed or ordered for an individual diagnosed with 1 of the autism spectrum disorders by a licensed physician or a licensed psychologist who determines the care to be medically necessary," and the treatment plan is developed "when the treatment of an autism spectrum disorder is first prescribed or ordered." Self-funded ERISA plans sit outside the statute.',
        status: 'verified',
        cites: [
          { title: 'BCBSM / BCN — Obtaining a comprehensive diagnostic evaluation for autism and finding treatment (rev. November 2025)', url: 'https://www.bcbsm.com/amslibs/content/dam/public/common/documents/approved-autism-evaluation-centers.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
      },
      telehealth: {
        value:
          'Blue Cross points providers to a separate "Telehealth for behavioral health providers" document on its secure Provider Resources site (via Availity) to determine which ABA services are allowed via telemedicine; progress notes must record when telemedicine was used. The telehealth document itself is portal-gated.',
        status: 'unverified',
        cites: [
          { title: 'BCBSM / BCN — Autism services: Billing guidelines and procedure codes (rev. November 2025)', url: 'https://authorizations.bcbsm.com/static-assets/documents/autism-billing-guidelines-procedure-codes.pdf' },
          { title: 'BCBSM / BCN — Behavioral health medical record documentation requirements for autism treatment services (rev. July 2026)', url: 'https://authorizations.bcbsm.com/static-assets/documents/bh-documentation-rqumts-autism-services.pdf' },
        ],
        verifyVia:
          'Telehealth for behavioral health providers (Availity > Payer Spaces > BCBSM and BCN > Resources > Secure Provider Resources), or Blue Cross Behavioral Health.',
        blocker: 'document',
      },
      authTurnaround: {
        value:
          'Turns on how the plan is funded. Fully insured Michigan insurance and HMO plans follow MCL 500.2212e: after May 31, 2024 a non-urgent prior authorization request "is considered granted" if the insurer does not grant it, deny it, or ask for more information "within 7 calendar days after the date and time of submission," and again within 7 calendar days after additional information is submitted; a request the provider certifies as urgent is considered granted if not acted on within 72 hours. An approved authorization "is valid for not less than 60 calendar days or for a duration that is clinically appropriate, whichever is later." The statute’s "health benefit plan" covers individual and group insurance, HMO contracts, and self-funded plans of the state or local governments, not private self-funded employer plans, which follow ERISA: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent claims within 72 hours.',
        status: 'plan-dependent',
        cites: [
          { title: 'MCL 500.2212e — prior authorization process and timelines, Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-2212e' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia:
          'At benefits verification ask whether the plan is fully insured (Michigan-regulated) or self-funded (ERISA), then confirm the Blue Cross Behavioral Health turnaround and reauthorization lead time (the Blue Cross Behavioral Health number on the member ID card (Blue Cross 1-800-762-2382; BCN 1-800-482-5982)).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Which plan pays first is set by Michigan’s Coordination of Benefits Act for state-regulated plans: for a dependent child whose parents are married or living together, "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (same birthday: the plan covering the parent longer); for divorced or separated parents a court order assigning health coverage controls, then the order in MCL 550.253. The autism mandate adds that a member with two policies covering autism gets benefits "subject to the limits of this section when coordinating benefits." If the child also has Michigan Medicaid, Blue Cross pays first: Medicaid is payer of last resort and "is not liable for payment of services denied because coverage rules of the primary health insurance were not followed," so get Blue Cross’s authorization even when Medicaid (the PIHP) will pay secondary. TRICARE pays after other coverage except Medicaid (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [
          { title: 'MCL 550.253 — Coordination of Benefits Act, order of benefit determination', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-253' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
        verifyVia:
          'Ask Blue Cross at benefits verification for the member’s coordination-of-benefits order (the Blue Cross Behavioral Health number on the member ID card (Blue Cross 1-800-762-2382; BCN 1-800-482-5982)); self-funded plans set their own COB terms in the plan document. Record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Blue Cross Blue Shield of Michigan cover ABA for adults?', a: 'For Blue Cross commercial and BCN commercial members, ABA and the other autism services are benefits regardless of age for dates of service on or after Jan. 1, 2022 — subject to the member’s own group benefits.' },
      { q: 'Does the diagnosis have to come from an approved autism evaluation center?', a: 'No. Michigan members can use an AAEC or a primary care provider and/or independent evaluators, as long as the comprehensive evaluation meets Blue Cross’s requirements and shows the DSM criteria.' },
      { q: 'Is prior authorization always required?', a: 'For all BCN HMO plans, yes. For Blue Cross PPO it depends on the group: fully insured groups and select self-funded groups require it. Check the member’s autism coverage.' },
      { q: 'Is there an hour or unit limit?', a: 'Blue Cross says there are no limits for billable ABA services beyond the units authorized. A fully insured plan may still apply the mandate’s annual dollar maximums for members through age 18 if its certificate does.' },
    ],
  },

  'priority-health-michigan': {
    slug: 'priority-health-michigan',
    family: 'priority-health',
    cardDesc: 'Michigan carrier: PA on every ABA code incl. 97151, InterQual criteria, BCBA supervision 1 hr per 15 hrs.',
    assessmentPA: {
      value:
        'Required — Policy 91615 lists 97151 and 97152 among "ABA treatment services – in center, office, or home – prior authorization required."',
      status: 'verified',
      cites: [
        { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
      ],
    },
    treatmentPA: {
      value:
        'Required — every ABA code; authorization determined on Behavioral Health InterQual criteria, continued stays on measurable progress.',
      status: 'verified',
      cites: [
        { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
      ],
    },
    dxRequired: {
      value:
        'Yes — ASD (F84.0, F84.5, F84.8, F84.9) from a multimodal evaluation consistent with the current DSM; a second opinion may be required.',
      status: 'verified',
      cites: [
        { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
      ],
    },
    payer: 'Priority Health (Michigan)',
    state: 'MI', kind: 'commercial',
    pill: 'Payer Guide · Priority Health · Michigan',
    h1: 'Priority Health ABA coverage in Michigan: the intake guide.',
    metaTitle: 'Priority Health ABA Coverage in Michigan: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Priority Health covers ABA in Michigan: Medical Policy 91615-R8, prior authorization on every ABA code, InterQual criteria, 1-per-15 BCBA supervision, school and household exclusions, Michigan’s mandate caps and exemptions, and what intake should verify.',
    intro: [
      'Priority Health is a Michigan-based carrier. Its ABA rules live in one medical policy, No. 91615 "Autism Spectrum Disorders" (revision R8, effective March 1, 2026), which sets the diagnostic standard, sends authorization decisions to Behavioral Health InterQual, and sets its own supervision floor. Priority Health also runs a Medicaid plan, but its policy notes that autism services for Priority Medicaid and Healthy Michigan Plan members "are paid through Michigan’s Department of Community Mental Health" — see our Michigan Medicaid guide for those members.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — ABA for ASD (F84.0, F84.5, F84.8, F84.9) under Medical Policy 91615' },
      { label: 'State mandate', value: 'MCL 500.3406s (insurers; 2012 PA 100, amended 2016) and MCL 550.1416e (health care corporation certificates)' },
      { label: 'Mandate age', value: 'Treatment coverage may be limited to members through age 18' },
      { label: 'Mandate caps', value: 'Annual maximums allowed: $50,000 through age 6, $40,000 ages 7–12, $30,000 ages 13–18; no visit limits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; exchange QHPs beyond essential health benefits; short-term policies of 6 months or less' },
      { label: 'Licensure', value: 'Behavior analysts licensed by LARA (Public Health Code Part 182A, law since 2016; BACB certification required); technicians unlicensed' },
      { label: 'Prior auth', value: 'Required for all ABA codes 97151–97158, "in center, office, or home"' },
      { label: 'Criteria', value: 'Behavioral Health InterQual (licensed; via Prism)' },
    ],
    sections: [
      {
        h2: 'Priority Health’s autism policy (91615-R8)',
        body: [
          'Initial diagnostic evaluation, including psychological testing, is medically necessary, and the diagnosis must match the DSM standard at the time of evaluation. The evaluation must show a multimodal assessment (caregiver reports, records, collateral reports, standardized psychological tools and an observational assessment), and Priority Health "may require a second diagnostic opinion from a contracted, licensed PhD psychologist with specialized training in autism spectrum disorders."',
          'ABA authorization "is determined by the clinical findings and ABA indications recommended by Behavioral Health InterQual®," continued stays require documented measurable progress against InterQual criteria, the plan must be supervised by a BCBA, and line-staff supervision should be at least "1 hour of supervision for every 15 hours of treatment." The coding section marks every ABA code, 97151 included, "prior authorization required," in center, office or home; speech, physical and occupational therapy for autism need no PA. Exclusions include services that are a school program’s legal responsibility, services by family or household members, and unproven treatments (among them secretin, chelation, facilitated communication, sensory-based treatments, RDI, Floortime/DIR, and equine therapies).',
        ],
        cites: [
          { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
          { title: 'Priority Health — Medical policies index', url: 'https://www.priorityhealth.com/provider/manual/medical-policies' },
        ],
      },
      {
        h2: 'The Michigan autism mandate: what it guarantees, and its age and dollar limits',
        body: [
          'Michigan’s autism mandate has two parallel statutes: MCL 500.3406s for insurers (added by 2012 PA 100, amended by 2016 PA 276, applying to policies delivered, issued or renewed beginning 180 days after its April 18, 2012 enactment) and MCL 550.1416e for health care corporation group and nongroup certificates. Both require coverage "for the diagnosis of autism spectrum disorders and treatment of autism spectrum disorders," including behavioral health treatment such as applied behavior analysis, and bar the carrier from limiting the number of visits, from denying coverage because treatment "is educational or habilitative in nature," and from applying dollar limits, copays, deductibles or coinsurance that do not apply to physical illness generally.',
          'Unlike newer mandates, Michigan’s still carries age and dollar ceilings the carrier may choose to apply: coverage for treatment may be limited "through 18 years of age" and to a maximum annual benefit of $50,000 through age 6, $40,000 from 7 through 12, and $30,000 from 13 through 18. Treatment must be "prescribed or ordered" by a licensed physician or licensed psychologist who finds it medically necessary, behavioral health treatment must be "provided or supervised by a board certified behavior analyst or a licensed psychologist," and the diagnosis means assessments "including the autism diagnostic observation schedule, performed by a licensed physician or a licensed psychologist." While a member is in treatment the carrier may require a treatment plan and treatment review, request the ADOS results, request that the ADOS be repeated no more than once every three years, and request an annual development evaluation. Utilization review, medical-necessity review, network requirements and coordination of benefits still apply. Exempt: self-funded ERISA employer plans (outside state insurance law), exchange qualified health plans to the extent the coverage exceeds essential health benefits, and, under 500.3406s, short-term policies of six months or less.',
        ],
        cites: [
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
        ],
      },
      {
        h2: 'Licensure and rates',
        body: [
          'Michigan licenses behavior analysts through LARA’s Board of Behavior Analysts under Part 182A of the Public Health Code (Michigan’s licensure law dates from 2016). A license requires current BACB certification in good standing sent directly from the BACB, a criminal background check, human-trafficking and implicit-bias training, and renews every four years; assistant behavior analysts have their own LARA license and supervision verification. Technicians are not licensed by the state. Priority Health does not publish commercial ABA rates; they are set in the participating-provider agreement.',
        ],
        cites: [
          { title: 'LARA — Michigan Board of Behavior Analysts (Public Health Code Part 182A; R 338.1801–338.1835)', url: 'https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/behavior-analysts' },
          { title: 'LARA — Michigan Behavior Analyst Licensing Guide (rev. 1/26/2026)', url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/bpl/Behavior-Analysts/Licensing-Info-and-Forms/Behavior-Analyst-Licensing-Guide-FAQ-12626.pdf' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
        ],
      },
    ],
    collect: [
      { title: 'Plan type and funding', desc: 'Commercial vs. Priority Medicaid (routes to the PIHP), and fully insured vs. self-funded.' },
      { title: 'Multimodal diagnostic evaluation', desc: 'Caregiver and collateral reports, records, standardized tools and observation; a second opinion may be requested.' },
      { title: 'Assessment and treatment plan for InterQual review', desc: 'PA covers every ABA code including 97151.' },
      { title: 'Physician or psychologist order', desc: 'The Michigan mandate ties covered treatment to a prescription or order on fully insured plans.' },
    ],
    sources: [
      { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
      { title: 'Priority Health — Medical policies index', url: 'https://www.priorityhealth.com/provider/manual/medical-policies' },
      { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
      { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
      { title: 'LARA — Michigan Board of Behavior Analysts (Public Health Code Part 182A; R 338.1801–338.1835)', url: 'https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/behavior-analysts' },
      { title: 'LARA — Michigan Behavior Analyst Licensing Guide (rev. 1/26/2026)', url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/bpl/Behavior-Analysts/Licensing-Info-and-Forms/Behavior-Analyst-Licensing-Guide-FAQ-12626.pdf' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'MCL 500.2212e — prior authorization process and timelines, Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-2212e' },
      { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
      { title: 'MCL 550.253 — Coordination of Benefits Act, order of benefit determination', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-253' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
      { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
    ],
    deliveryRules: {
      supervision: {
        value:
          '"An ABA treatment plan must be supervised by a BCBA who oversees the treatment and coordinates with other medical professionals," and "Supervision of line staff by the BCBA should occur at a minimum of 1 hour of supervision for every 15 hours of treatment with the member." That is a lower floor than the 1-per-10 many payers use.',
        status: 'verified',
        cites: [
          { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
        ],
      },
      concurrentBilling: {
        value:
          'Priority Health’s autism policy describes 97155 as "Administered by BCBA, which may include simultaneous direction of technician" but does not state whether 97153 and 97155 may be billed for the same clock time; the policy points to Billing Policy No. 054 Behavioral Health for billing rules, which we did not retrieve.',
        status: 'unverified',
        cites: [
          { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
        ],
        verifyVia:
          'Priority Health Billing Policy No. 054 (Behavioral Health) in the provider manual, or Priority Health provider services.',
        blocker: 'document',
      },
      dailyLimits: {
        value:
          'No hour or unit limit is published in the policy. Authorization, and continued-stay approval, is decided on Behavioral Health InterQual criteria, which are licensed and viewable only through Priority Health’s Prism portal (Authorizations > Authorization Criteria Lookup).',
        status: 'unverified',
        cites: [
          { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
        ],
        verifyVia:
          'Prism > Authorizations > Authorization Criteria Lookup (InterQual Behavioral Health), or the authorization determination.',
        blocker: 'licensed',
      },
      noteSignature: {
        value:
          'Not addressed in Policy 91615; documentation standards for behavioral health are not in the published policy.',
        status: 'unverified',
        cites: [
          { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
        ],
        verifyVia:
          'Priority Health provider manual (documentation standards) or Billing Policy No. 054.',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'ABA treatment services are covered "in center, office, or home" with prior authorization. Excluded: "Services or treatment that are the legal responsibility of a school program such as evaluations completed in an educational setting," and services provided by family or household members.',
        status: 'verified',
        cites: [
          { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
        ],
      },
      billAsProvider: {
        value:
          'The policy lists the ABA CPT codes (97151–97158) with technician codes "Administered by technician under the direction of a BCBA," but does not say whose NPI goes on the claim; that is set in Billing Policy No. 054, which we did not retrieve.',
        status: 'unverified',
        cites: [
          { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
        ],
        verifyVia:
          'Priority Health Billing Policy No. 054 (Behavioral Health) or provider services.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Priority Health’s autism policy sets no age limit. Michigan’s mandate lets a fully insured carrier limit autism treatment coverage to members "through 18 years of age" and cap it at $50,000 a year through age 6, $40,000 for ages 7–12 and $30,000 for ages 13–18; whether a given plan uses those limits is in its certificate. Self-funded ERISA plans set their own terms.',
        status: 'plan-dependent',
        cites: [
          { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
        ],
        verifyVia:
          'Live benefits verification in Prism: fully insured vs. self-funded, and whether the certificate applies the mandate’s age-18 and annual-dollar limits.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'No recency window. The policy requires the diagnosis to be "consistent with the standards of the Diagnostic and Statistical Manual of Mental Disorders at the time of evaluation" and "Priority Health may require a second diagnostic opinion from a contracted, licensed PhD psychologist with specialized training in autism spectrum disorders." Under the mandate a fully insured plan may request the ADOS be repeated no more than once every three years.',
        status: 'verified',
        cites: [
          { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
      },
      diagnosingProviders: {
        value:
          'The policy does not list specialties; it requires a multimodal diagnostic evaluation and reserves the right to a second opinion from a contracted, licensed PhD psychologist with autism training. For fully insured plans the mandate defines the diagnosis as assessments, including the ADOS, "performed by a licensed physician or a licensed psychologist."',
        status: 'verified',
        cites: [
          { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
      },
      diagnosticTools: {
        value:
          '"The diagnostic evaluation must include evidence of a multimodal assessment that contains caregiver(s) reports, records (e.g., medical, school, other evaluations), collateral reports (e.g., teachers, other treatment providers), data gathered from utilization of standardized psychological tools, and an observational assessment." No specific instrument is named; AI and app-based diagnostic devices (e.g., Canvas Dx) are excluded.',
        status: 'verified',
        cites: [
          { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
        ],
      },
      referral: {
        value:
          'Priority Health’s policy states no referral or order requirement for ABA beyond prior authorization. For a fully insured Michigan policy the mandate adds an order requirement: covered treatment is care "prescribed or ordered for an individual diagnosed with 1 of the autism spectrum disorders by a licensed physician or a licensed psychologist who determines the care to be medically necessary," and the treatment plan is developed "when the treatment of an autism spectrum disorder is first prescribed or ordered." Self-funded ERISA plans sit outside the statute.',
        status: 'verified',
        cites: [
          { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
      },
      telehealth: {
        value:
          'Not addressed in Policy 91615.',
        status: 'unverified',
        cites: [
          { title: 'Priority Health Medical Policy No. 91615-R8 — Autism Spectrum Disorders (effective 3/1/2026)', url: 'https://priorityhealth.stylelabs.cloud/api/public/content/6b5c6f61d4a74c049b1748d514555243?v=8b411839' },
        ],
        verifyVia:
          'Priority Health provider manual telehealth policy or provider services — ask which ABA codes are payable via telehealth and with which POS/modifier.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Turns on how the plan is funded. Fully insured Michigan insurance and HMO plans follow MCL 500.2212e: after May 31, 2024 a non-urgent prior authorization request "is considered granted" if the insurer does not grant it, deny it, or ask for more information "within 7 calendar days after the date and time of submission," and again within 7 calendar days after additional information is submitted; a request the provider certifies as urgent is considered granted if not acted on within 72 hours. An approved authorization "is valid for not less than 60 calendar days or for a duration that is clinically appropriate, whichever is later." The statute’s "health benefit plan" covers individual and group insurance, HMO contracts, and self-funded plans of the state or local governments, not private self-funded employer plans, which follow ERISA: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent claims within 72 hours.',
        status: 'plan-dependent',
        cites: [
          { title: 'MCL 500.2212e — prior authorization process and timelines, Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-2212e' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia:
          'At benefits verification ask whether the plan is fully insured (Michigan-regulated) or self-funded (ERISA), then confirm the Priority Health turnaround and reauthorization lead time (Priority Health provider services or the Prism provider portal).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Which plan pays first is set by Michigan’s Coordination of Benefits Act for state-regulated plans: for a dependent child whose parents are married or living together, "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (same birthday: the plan covering the parent longer); for divorced or separated parents a court order assigning health coverage controls, then the order in MCL 550.253. The autism mandate adds that a member with two policies covering autism gets benefits "subject to the limits of this section when coordinating benefits." If the child also has Michigan Medicaid, Priority Health pays first: Medicaid is payer of last resort and "is not liable for payment of services denied because coverage rules of the primary health insurance were not followed," so get Priority Health’s authorization even when Medicaid (the PIHP) will pay secondary. TRICARE pays after other coverage except Medicaid (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [
          { title: 'MCL 550.253 — Coordination of Benefits Act, order of benefit determination', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-253' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
        verifyVia:
          'Ask Priority Health at benefits verification for the member’s coordination-of-benefits order (Priority Health provider services or the Prism provider portal); self-funded plans set their own COB terms in the plan document. Record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Priority Health require prior authorization for the ABA assessment?', a: 'Yes. Policy 91615 lists 97151 through 97158 under "ABA treatment services – in center, office, or home – prior authorization required."' },
      { q: 'What supervision does Priority Health require?', a: 'A BCBA must supervise the treatment plan, with line-staff supervision of at least one hour for every 15 hours of treatment.' },
      { q: 'My child has Priority Medicaid. Does Priority Health approve ABA?', a: 'No. Priority Health’s policy notes that these services for Priority Medicaid and Healthy Michigan Plan members are paid through the state’s community mental health system (the PIHP).' },
    ],
  },

  'hap-michigan': {
    slug: 'hap-michigan',
    family: 'hap',
    cardDesc: 'Henry Ford Health’s plan: ABA treatment on HAP’s PA list; criteria behind login; SB 247 7-day/72-hour clock.',
    assessmentPA: {
      value:
        'HAP’s public list names "Applied Behavioral Analysis (ABA) Treatment"; whether the 97151 assessment needs separate authorization is in the CBHM outpatient authorization list behind provider login.',
      status: 'unverified',
      cites: [
        { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
      ],
      verifyVia:
        'HAP’s Coordinated Behavioral Health Management outpatient authorization list and InterQual criteria (provider login; InterQual access via InterQualReq@HAP.org).',
      blocker: 'document',
    },
    treatmentPA: {
      value:
        'Required — "Applied Behavioral Analysis (ABA) Treatment" is on HAP’s Prior Authorization List Summary (reviewed 07/10/2026).',
      status: 'verified',
      cites: [
        { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
      ],
    },
    dxRequired: {
      value:
        'HAP’s ABA diagnostic criteria are not public (InterQual / CBHM list behind login); the Michigan mandate covers ASD diagnosed by a licensed physician or psychologist on fully insured plans.',
      status: 'unverified',
      cites: [
        { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
        { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
      ],
      verifyVia:
        'HAP’s Coordinated Behavioral Health Management outpatient authorization list and InterQual criteria (provider login; InterQual access via InterQualReq@HAP.org).',
      blocker: 'licensed',
    },
    payer: 'Health Alliance Plan (HAP) — Michigan',
    state: 'MI', kind: 'commercial',
    pill: 'Payer Guide · HAP · Michigan',
    h1: 'HAP ABA coverage in Michigan: the intake guide.',
    metaTitle: 'HAP (Health Alliance Plan) ABA Coverage in Michigan Guide | Carelu',
    metaDescription:
      'How Health Alliance Plan (HAP) covers ABA in Michigan: ABA treatment on HAP’s prior-authorization list, InterQual criteria behind login, the SB 247 7-day/72-hour clock, Michigan’s mandate caps and exemptions, and what intake must confirm with HAP.',
    intro: [
      'Health Alliance Plan (HAP), a Michigan-based nonprofit plan of Henry Ford Health, publishes the basics of its ABA coverage. Its public materials confirm that ABA treatment requires prior authorization and that HAP follows Michigan’s prior-authorization law, but its ABA clinical rules sit behind provider login, so more of this guide is "ask HAP" than for Blue Cross or Priority Health. HAP’s Medicaid product is HAP CareSource; for Medicaid members ABA runs through the county PIHP (see our Michigan Medicaid guide).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — ABA treatment is a covered, prior-authorized service (subject to the member’s plan documents)' },
      { label: 'State mandate', value: 'MCL 500.3406s (insurers; 2012 PA 100, amended 2016) and MCL 550.1416e (health care corporation certificates)' },
      { label: 'Mandate age', value: 'Treatment coverage may be limited to members through age 18' },
      { label: 'Mandate caps', value: 'Annual maximums allowed: $50,000 through age 6, $40,000 ages 7–12, $30,000 ages 13–18; no visit limits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; exchange QHPs beyond essential health benefits; short-term policies of 6 months or less' },
      { label: 'Licensure', value: 'Behavior analysts licensed by LARA (Public Health Code Part 182A, law since 2016; BACB certification required); technicians unlicensed' },
      { label: 'Prior auth', value: 'ABA treatment on HAP’s prior-authorization list (reviewed 07/10/2026); details in the CBHM outpatient list' },
      { label: 'Criteria', value: 'InterQual (portal access by request)' },
    ],
    sections: [
      {
        h2: 'What HAP publishes about ABA',
        body: [
          'HAP’s Prior Authorization List Summary (reviewed July 10, 2026) lists "Applied Behavioral Analysis (ABA) Treatment" among services requiring prior authorization and refers providers to the "Coordinator Behavioral Health Management-Outpatient Authorization list for detailed information," which, like HAP’s InterQual criteria, requires a provider login. HAP’s Coordinated Behavioral Health Management (CBHM) team, (800) 444-5755, is the behavioral health contact for members. Coverage is "based on the member’s subscriber documents," so the schedule of benefits decides limits.',
          'On timing, HAP states its compliance with Michigan’s prior-authorization reform (Senate Bill 247): non-urgent requests are approved if no action is taken within 7 calendar days of submission, urgent requests within 72 hours, and new or changed prior-authorization requirements are posted 60 days ahead for non-drug benefits.',
        ],
        cites: [
          { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
          { title: 'HAP — Prior Authorization Reform: What You Need to Know from Senate Bill 247', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-reform.pdf' },
          { title: 'HAP — InterQual criteria access (provider login)', url: 'https://www.hap.org/providers/interqual-criteria' },
        ],
      },
      {
        h2: 'The Michigan autism mandate: what it guarantees, and its age and dollar limits',
        body: [
          'Michigan’s autism mandate has two parallel statutes: MCL 500.3406s for insurers (added by 2012 PA 100, amended by 2016 PA 276, applying to policies delivered, issued or renewed beginning 180 days after its April 18, 2012 enactment) and MCL 550.1416e for health care corporation group and nongroup certificates. Both require coverage "for the diagnosis of autism spectrum disorders and treatment of autism spectrum disorders," including behavioral health treatment such as applied behavior analysis, and bar the carrier from limiting the number of visits, from denying coverage because treatment "is educational or habilitative in nature," and from applying dollar limits, copays, deductibles or coinsurance that do not apply to physical illness generally.',
          'Unlike newer mandates, Michigan’s still carries age and dollar ceilings the carrier may choose to apply: coverage for treatment may be limited "through 18 years of age" and to a maximum annual benefit of $50,000 through age 6, $40,000 from 7 through 12, and $30,000 from 13 through 18. Treatment must be "prescribed or ordered" by a licensed physician or licensed psychologist who finds it medically necessary, behavioral health treatment must be "provided or supervised by a board certified behavior analyst or a licensed psychologist," and the diagnosis means assessments "including the autism diagnostic observation schedule, performed by a licensed physician or a licensed psychologist." While a member is in treatment the carrier may require a treatment plan and treatment review, request the ADOS results, request that the ADOS be repeated no more than once every three years, and request an annual development evaluation. Utilization review, medical-necessity review, network requirements and coordination of benefits still apply. Exempt: self-funded ERISA employer plans (outside state insurance law), exchange qualified health plans to the extent the coverage exceeds essential health benefits, and, under 500.3406s, short-term policies of six months or less.',
        ],
        cites: [
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
        ],
      },
      {
        h2: 'Licensure and rates',
        body: [
          'Michigan licenses behavior analysts through LARA’s Board of Behavior Analysts under Part 182A of the Public Health Code (Michigan’s licensure law dates from 2016). A license requires current BACB certification in good standing sent directly from the BACB, a criminal background check, human-trafficking and implicit-bias training, and renews every four years; assistant behavior analysts have their own LARA license and supervision verification. Technicians are not licensed by the state. HAP does not publish ABA rates; they are contract terms.',
        ],
        cites: [
          { title: 'LARA — Michigan Board of Behavior Analysts (Public Health Code Part 182A; R 338.1801–338.1835)', url: 'https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/behavior-analysts' },
          { title: 'LARA — Michigan Behavior Analyst Licensing Guide (rev. 1/26/2026)', url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/bpl/Behavior-Analysts/Licensing-Info-and-Forms/Behavior-Analyst-Licensing-Guide-FAQ-12626.pdf' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
        ],
      },
    ],
    collect: [
      { title: 'HAP product and funding type', desc: 'Commercial HMO/PPO vs. HAP CareSource (Medicaid, routes to the PIHP); fully insured vs. self-funded.' },
      { title: 'Diagnostic evaluation with ADOS results', desc: 'The mandate lets a fully insured plan request the ADOS used in the diagnosis.' },
      { title: 'Physician or psychologist order', desc: 'Required for covered treatment on fully insured Michigan plans.' },
      { title: 'Assessment and treatment plan', desc: 'Submitted with the ABA prior-authorization request through the HAP portal.' },
    ],
    sources: [
      { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
      { title: 'HAP — Prior Authorization Reform: What You Need to Know from Senate Bill 247', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-reform.pdf' },
      { title: 'HAP — InterQual criteria access (provider login)', url: 'https://www.hap.org/providers/interqual-criteria' },
      { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
      { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
      { title: 'LARA — Michigan Board of Behavior Analysts (Public Health Code Part 182A; R 338.1801–338.1835)', url: 'https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/behavior-analysts' },
      { title: 'LARA — Michigan Behavior Analyst Licensing Guide (rev. 1/26/2026)', url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/bpl/Behavior-Analysts/Licensing-Info-and-Forms/Behavior-Analyst-Licensing-Guide-FAQ-12626.pdf' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'MCL 500.2212e — prior authorization process and timelines, Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-2212e' },
      { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
      { title: 'MCL 550.253 — Coordination of Benefits Act, order of benefit determination', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-253' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
      { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'HAP publishes no ABA supervision standard on its public site; ABA clinical criteria sit in its behavioral health authorization list and InterQual, both behind provider login.',
        status: 'unverified',
        cites: [
          { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
          { title: 'HAP — InterQual criteria access (provider login)', url: 'https://www.hap.org/providers/interqual-criteria' },
        ],
        verifyVia:
          'HAP’s Coordinated Behavioral Health Management outpatient authorization list and InterQual criteria (provider login; InterQual access via InterQualReq@HAP.org).',
        blocker: 'document',
      },
      concurrentBilling: {
        value:
          'HAP publishes no ABA concurrent-billing rule on its public site.',
        status: 'unverified',
        cites: [
          { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
          { title: 'HAP — InterQual criteria access (provider login)', url: 'https://www.hap.org/providers/interqual-criteria' },
        ],
        verifyVia:
          'HAP’s Coordinated Behavioral Health Management outpatient authorization list and InterQual criteria (provider login; InterQual access via InterQualReq@HAP.org).',
        blocker: 'document',
      },
      dailyLimits: {
        value:
          'HAP publishes no ABA hour or unit limit on its public site; authorized hours come from the behavioral health review.',
        status: 'unverified',
        cites: [
          { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
          { title: 'HAP — InterQual criteria access (provider login)', url: 'https://www.hap.org/providers/interqual-criteria' },
        ],
        verifyVia:
          'InterQual Behavioral Health criteria via HAP’s InterQual portal (request access at InterQualReq@HAP.org), or the authorization determination.',
        blocker: 'licensed',
      },
      noteSignature: {
        value:
          'HAP publishes no ABA-specific note-signature rule on its public site (its general medical record standards apply).',
        status: 'unverified',
        cites: [
          { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
          { title: 'HAP — InterQual criteria access (provider login)', url: 'https://www.hap.org/providers/interqual-criteria' },
        ],
        verifyVia:
          'HAP’s Coordinated Behavioral Health Management outpatient authorization list and InterQual criteria (provider login; InterQual access via InterQualReq@HAP.org).',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'HAP publishes no ABA setting rule on its public site.',
        status: 'unverified',
        cites: [
          { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
          { title: 'HAP — InterQual criteria access (provider login)', url: 'https://www.hap.org/providers/interqual-criteria' },
        ],
        verifyVia:
          'HAP’s Coordinated Behavioral Health Management outpatient authorization list and InterQual criteria (provider login; InterQual access via InterQualReq@HAP.org).',
        blocker: 'document',
      },
      billAsProvider: {
        value:
          'HAP publishes no ABA rendering/billing-provider rule on its public site.',
        status: 'unverified',
        cites: [
          { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
          { title: 'HAP — InterQual criteria access (provider login)', url: 'https://www.hap.org/providers/interqual-criteria' },
        ],
        verifyVia:
          'HAP’s Coordinated Behavioral Health Management outpatient authorization list and InterQual criteria (provider login; InterQual access via InterQualReq@HAP.org).',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'HAP publishes no ABA age rule on its public site. Michigan’s mandate lets a fully insured carrier limit autism treatment coverage to members "through 18 years of age" and cap it at $50,000 a year through age 6, $40,000 for ages 7–12 and $30,000 for ages 13–18; whether a given plan uses those limits is in its certificate. Self-funded ERISA plans set their own terms.',
        status: 'plan-dependent',
        cites: [
          { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
        ],
        verifyVia:
          'HAP member benefits (certificate / schedule of benefits) at verification: fully insured vs. self-funded, and any mandate age-18 or annual-dollar limits.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'HAP publishes no diagnosis-recency rule. Under the Michigan mandate a fully insured plan may request the ADOS results and a repeat ADOS no more than once every three years, plus an annual development evaluation.',
        status: 'unverified',
        cites: [
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
        ],
        verifyVia:
          'HAP’s Coordinated Behavioral Health Management outpatient authorization list and InterQual criteria (provider login; InterQual access via InterQualReq@HAP.org).',
        blocker: 'document',
      },
      diagnosingProviders: {
        value:
          'HAP publishes no ABA-specific rule. For fully insured plans the mandate defines the diagnosis as assessments, including the ADOS, "performed by a licensed physician or a licensed psychologist."',
        status: 'unverified',
        cites: [
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
        ],
        verifyVia:
          'HAP’s Coordinated Behavioral Health Management outpatient authorization list and InterQual criteria (provider login; InterQual access via InterQualReq@HAP.org).',
        blocker: 'document',
      },
      diagnosticTools: {
        value:
          'HAP publishes no instrument list. The mandate lets a fully insured carrier request "the results of the autism diagnostic observation schedule" used in the diagnosis.',
        status: 'unverified',
        cites: [
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
        ],
        verifyVia:
          'HAP’s Coordinated Behavioral Health Management outpatient authorization list and InterQual criteria (provider login; InterQual access via InterQualReq@HAP.org).',
        blocker: 'document',
      },
      referral: {
        value:
          'HAP’s public materials state no ABA referral rule beyond prior authorization. For a fully insured Michigan policy the mandate adds an order requirement: covered treatment is care "prescribed or ordered for an individual diagnosed with 1 of the autism spectrum disorders by a licensed physician or a licensed psychologist who determines the care to be medically necessary," and the treatment plan is developed "when the treatment of an autism spectrum disorder is first prescribed or ordered." Self-funded ERISA plans sit outside the statute.',
        status: 'plan-dependent',
        cites: [
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
        ],
        verifyVia:
          'HAP member benefits (HMO referral rules) and CBHM, (800) 444-5755.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'HAP publishes no ABA telehealth rule on its public site.',
        status: 'unverified',
        cites: [
          { title: 'HAP — Prior Authorization List Summary (reviewed 07/10/2026)', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-requirements.pdf' },
        ],
        verifyVia:
          'HAP provider portal telehealth policy or CBHM, (800) 444-5755 — ask which ABA codes may be delivered by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'HAP publishes its compliance with Michigan’s prior-authorization law (Senate Bill 247, MCL 500.2212e): non-urgent requests "Will be approved in 7 calendar days if no action was taken from the date of the original submission," and urgent requests "Will be approved if no action was taken within 72 hours." Contracted providers submit through the HAP portal and non-contracted providers through the non-contracted provider link. The statute does not reach private self-funded employer plans, which follow ERISA (15 days, one 15-day extension; 72 hours urgent).',
        status: 'plan-dependent',
        cites: [
          { title: 'HAP — Prior Authorization Reform: What You Need to Know from Senate Bill 247', url: 'https://edge.sitecorecloud.io/henryfordhe8435-hap1bde-prodac6d-83ac/media/project/hap/hap/files/hap/providers/prior-authorization-reform.pdf' },
          { title: 'MCL 500.2212e — prior authorization process and timelines, Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-2212e' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia:
          'At verification confirm fully insured vs. self-funded and the HAP authorization turnaround with CBHM, (800) 444-5755.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Which plan pays first is set by Michigan’s Coordination of Benefits Act for state-regulated plans: for a dependent child whose parents are married or living together, "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (same birthday: the plan covering the parent longer); for divorced or separated parents a court order assigning health coverage controls, then the order in MCL 550.253. The autism mandate adds that a member with two policies covering autism gets benefits "subject to the limits of this section when coordinating benefits." If the child also has Michigan Medicaid, HAP pays first: Medicaid is payer of last resort and "is not liable for payment of services denied because coverage rules of the primary health insurance were not followed," so get HAP’s authorization even when Medicaid (the PIHP) will pay secondary. TRICARE pays after other coverage except Medicaid (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [
          { title: 'MCL 550.253 — Coordination of Benefits Act, order of benefit determination', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-253' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
        verifyVia:
          'Ask HAP at benefits verification for the member’s coordination-of-benefits order (HAP Coordinated Behavioral Health Management, (800) 444-5755, or the HAP provider portal); self-funded plans set their own COB terms in the plan document. Record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does HAP require prior authorization for ABA?', a: 'Yes. ABA treatment is on HAP’s prior-authorization list; the detailed behavioral health list and criteria are in the provider portal.' },
      { q: 'How fast must HAP decide?', a: 'HAP says non-urgent requests are approved if it takes no action within 7 calendar days and urgent requests within 72 hours, per Michigan’s prior-authorization law. Self-funded employer plans follow federal ERISA timelines.' },
      { q: 'My child has HAP CareSource. Who approves ABA?', a: 'HAP CareSource is a Medicaid plan; Michigan Medicaid assigns ABA to the PIHP for the child’s county, not the health plan.' },
    ],
  },

  'aetna-michigan': {
    slug: 'aetna-michigan',
    family: 'aetna',
    cardDesc: 'CPB 0554 + CPB 0648 + precert on all ABA codes, layered on Michigan’s capped mandate (MCL 500.3406s).',
    assessmentPA: {
      value:
        'Required — precertification for 97151 and 97152 (and all ABA codes) per Aetna’s behavioral health precertification list (eff. 8/1/2024); CPB 0554 itself sets no precertification rule.',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      ],
    },
    treatmentPA: {
      value:
        'Required — precertification; reauthorization interval is set at group level (progress reviewed every six months under the guide).',
      status: 'plan-dependent',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      ],
      verifyVia:
        'The member’s Aetna plan (benefits line on the card) — confirm precertification and the reauthorization interval for the group.',
      blocker: 'per-case',
    },
    dxRequired: {
      value:
        'Yes — DSM-5 ASD (F84.0, F84.3–F84.9) from an appropriate provider, plus a standardized functional measure within 12 months.',
      status: 'verified',
      cites: [
        { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      ],
    },
    payer: 'Aetna in Michigan',
    state: 'MI', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Michigan',
    h1: 'Aetna ABA coverage in Michigan: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Michigan: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Michigan families: the national clinical policy, precertification on all ABA codes, Michigan’s autism mandate with its age-18 and annual-dollar limits, prior-authorization timelines, licensure, and what intake should verify.',
    intro: [
      'For a Michigan intake team, an Aetna card means three layers: Aetna’s national ABA policy, Michigan’s autism mandate (MCL 500.3406s), and the plan’s funding type deciding which binds. Michigan’s mandate still lets a fully insured carrier stop treatment coverage after age 18 and cap annual benefits by age band. This guide stacks the layers in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per Aetna’s national policy (CPB 0554 / CPB 0648)' },
      { label: 'State mandate', value: 'MCL 500.3406s (insurers; 2012 PA 100, amended 2016) and MCL 550.1416e (health care corporation certificates)' },
      { label: 'Mandate age', value: 'Treatment coverage may be limited to members through age 18' },
      { label: 'Mandate caps', value: 'Annual maximums allowed: $50,000 through age 6, $40,000 ages 7–12, $30,000 ages 13–18; no visit limits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; exchange QHPs beyond essential health benefits; short-term policies of 6 months or less' },
      { label: 'Licensure', value: 'Behavior analysts licensed by LARA (Public Health Code Part 182A, law since 2016; BACB certification required); technicians unlicensed' },
      { label: 'Prior auth', value: 'Precertification on all ABA codes (97151–97158, 0362T, 0373T), mostly via Availity' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Michigan',
        body: [
          'Aetna covers ABA for autism spectrum disorder under CPB 0554 (with CPB 0648 for ASD) and its ABA medical necessity guide, which requires a DSM-5 ASD diagnosis from an appropriate provider, functional impairment on a standardized scale within the past 12 months, a measurable treatment plan with transition and discharge criteria, parent engagement, and services delivered or billed by licensed behavior analysts, BCBAs or licensed psychologists. Aetna’s behavioral health precertification list (effective August 1, 2024) requires precertification for every ABA code, the assessment included. Progress is reviewed every six months. What changes in Michigan is the legal floor below.',
        ],
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        ],
      },
      {
        h2: 'The Michigan autism mandate: what it guarantees, and its age and dollar limits',
        body: [
          'Michigan’s autism mandate has two parallel statutes: MCL 500.3406s for insurers (added by 2012 PA 100, amended by 2016 PA 276, applying to policies delivered, issued or renewed beginning 180 days after its April 18, 2012 enactment) and MCL 550.1416e for health care corporation group and nongroup certificates. Both require coverage "for the diagnosis of autism spectrum disorders and treatment of autism spectrum disorders," including behavioral health treatment such as applied behavior analysis, and bar the carrier from limiting the number of visits, from denying coverage because treatment "is educational or habilitative in nature," and from applying dollar limits, copays, deductibles or coinsurance that do not apply to physical illness generally.',
          'Unlike newer mandates, Michigan’s still carries age and dollar ceilings the carrier may choose to apply: coverage for treatment may be limited "through 18 years of age" and to a maximum annual benefit of $50,000 through age 6, $40,000 from 7 through 12, and $30,000 from 13 through 18. Treatment must be "prescribed or ordered" by a licensed physician or licensed psychologist who finds it medically necessary, behavioral health treatment must be "provided or supervised by a board certified behavior analyst or a licensed psychologist," and the diagnosis means assessments "including the autism diagnostic observation schedule, performed by a licensed physician or a licensed psychologist." While a member is in treatment the carrier may require a treatment plan and treatment review, request the ADOS results, request that the ADOS be repeated no more than once every three years, and request an annual development evaluation. Utilization review, medical-necessity review, network requirements and coordination of benefits still apply. Exempt: self-funded ERISA employer plans (outside state insurance law), exchange qualified health plans to the extent the coverage exceeds essential health benefits, and, under 500.3406s, short-term policies of six months or less.',
        ],
        cites: [
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
        ],
      },
      {
        h2: 'Licensure and rates',
        body: [
          'Michigan licenses behavior analysts through LARA’s Board of Behavior Analysts under Part 182A of the Public Health Code (Michigan’s licensure law dates from 2016). A license requires current BACB certification in good standing sent directly from the BACB, a criminal background check, human-trafficking and implicit-bias training, and renews every four years; assistant behavior analysts have their own LARA license and supervision verification. Technicians are not licensed by the state. Aetna does not publish commercial ABA rates for Michigan; they are negotiated in the participating-provider agreement.',
        ],
        cites: [
          { title: 'LARA — Michigan Board of Behavior Analysts (Public Health Code Part 182A; R 338.1801–338.1835)', url: 'https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/behavior-analysts' },
          { title: 'LARA — Michigan Behavior Analyst Licensing Guide (rev. 1/26/2026)', url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/bpl/Behavior-Analysts/Licensing-Info-and-Forms/Behavior-Analyst-Licensing-Guide-FAQ-12626.pdf' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Michigan mandate applies, with its age-18 and dollar-cap options) vs. self-funded ERISA (exempt).' },
      { title: 'Member ID + card photo', desc: 'For a live benefits verification on limits and cost sharing.' },
      { title: 'Diagnosis report and a recent functional measure', desc: 'DSM-5 ASD from an appropriate provider, plus a standardized functioning scale within 12 months.' },
      { title: 'Physician or psychologist order', desc: 'The Michigan mandate ties covered treatment to a prescription or order.' },
      { title: 'Age', desc: 'Members 19 and older may fall outside a fully insured plan that applies the mandate’s age limit.' },
    ],
    sources: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
      { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
      { title: 'LARA — Michigan Board of Behavior Analysts (Public Health Code Part 182A; R 338.1801–338.1835)', url: 'https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/behavior-analysts' },
      { title: 'LARA — Michigan Behavior Analyst Licensing Guide (rev. 1/26/2026)', url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/bpl/Behavior-Analysts/Licensing-Info-and-Forms/Behavior-Analyst-Licensing-Guide-FAQ-12626.pdf' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'MCL 500.2212e — prior authorization process and timelines, Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-2212e' },
      { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
      { title: 'MCL 550.253 — Coordination of Benefits Act, order of benefit determination', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-253' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
      { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Services "must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope of practice definition, unless state mandates, plan documents or contracts require otherwise." Where unlicensed or non-certified staff are authorized, "there must be supervision and direction of the unlicensed or non-certified providers in line with practice standards." Aetna publishes no numeric supervision ratio. Michigan is a licensure state, so the supervising analyst must hold a LARA license.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'LARA — Michigan Board of Behavior Analysts (Public Health Code Part 182A; R 338.1801–338.1835)', url: 'https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/behavior-analysts' },
        ],
      },
      concurrentBilling: {
        value:
          'Not addressed in Aetna’s published ABA policies — CPB 0554, CPB 0648 and the ABA medical necessity guide are silent on billing 97153 and 97155 for the same clock time.',
        status: 'unverified',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
        verifyVia:
          'Aetna provider services / the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Aetna publishes no per-day or per-week unit ceiling. Its guide lists typical intensities (comprehensive ABA 10–25 hours a week, typically ages 0–7 for 1–2 years; focused ABA 1–20 hours a week, all ages) and says "Authorized hours will be based on documented severity of impairments"; progress is evaluated every six months. For fully insured Michigan plans the mandate bars visit limits but allows annual dollar maximums of $50,000 (through age 6), $40,000 (7–12) and $30,000 (13–18).',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
      },
      noteSignature: {
        value:
          'Not addressed. Aetna’s published ABA policies set treatment-plan content (target behaviors, baselines, quantifiable progress criteria, generalization, transition and discharge planning) but do not say who signs a session note or by when.',
        status: 'unverified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
        verifyVia:
          'The participating-provider agreement and the Aetna Behavioral Health Provider Manual documentation section.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Outpatient ABA is setting-agnostic in Aetna’s guide. If treatment is in an inpatient, residential or partial hospitalization setting, that level of care’s criteria apply and "specific authorization for ABA is not needed in addition." The guide expects coordination with existing providers and the school district; its statement that Aetna will not deny ABA solely because the location is a child’s educational setting sits in a state-specific exhibit, not the national criteria.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      billAsProvider: {
        value:
          '"Services must be provided directly or billed by the appropriately licensed provider": licensed behavior analysts in licensure states (Michigan is one), board-certified behavior analysts, or licensed psychologists within scope, unless state mandates, plan documents or contracts require otherwise.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Aetna’s national ABA policies set no age cap; its guide lists typical, not limiting, age ranges (comprehensive ABA typically 0–7, focused ABA all ages). Michigan’s mandate lets a fully insured carrier limit autism treatment coverage to members "through 18 years of age" and cap it at $50,000 a year through age 6, $40,000 for ages 7–12 and $30,000 for ages 13–18; whether a given plan uses those limits is in its certificate. Self-funded ERISA plans set their own terms.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
        ],
        verifyVia:
          'Live benefits verification on the member ID: fully insured vs. self-funded, and whether the certificate applies the mandate’s age-18 and annual-dollar limits.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'No expiry on the diagnosis itself, but a 12-month clock on function: medical necessity requires "demonstration of functional impairment on a standardized scale of functioning in the past 12 months" at least one standard deviation below the mean or a significant risk of harm; progress is re-evaluated every six months. On fully insured Michigan plans the mandate also lets the carrier request a repeat ADOS no more than once every three years.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
      },
      diagnosingProviders: {
        value:
          'A DSM-5 ASD diagnosis (ICD-10 F84.0, F84.3–F84.9) "obtained by an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)." For fully insured Michigan plans the mandate defines the diagnosis as assessments, including the ADOS, performed by a licensed physician or licensed psychologist.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
      },
      diagnosticTools: {
        value:
          'CPB 0648 names the diagnostic instruments: ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale. The ABA guide then requires a standardized measure of functioning within the past 12 months (examples: Vineland-3, ABAS, VB-MAPP, ABLLS) showing impairment at least one standard deviation below the mean or a significant risk of harm.',
        status: 'verified',
        cites: [
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      referral: {
        value:
          'Aetna’s national ABA criteria require no physician referral; what they require is precertification, and the behavioral health precertification list names all ABA codes (97151–97158, 0362T, 0373T). For a fully insured Michigan policy the mandate adds an order requirement: covered treatment is care "prescribed or ordered for an individual diagnosed with 1 of the autism spectrum disorders by a licensed physician or a licensed psychologist who determines the care to be medically necessary," and the treatment plan is developed "when the treatment of an autism spectrum disorder is first prescribed or ordered." Self-funded ERISA plans sit outside the statute.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
      },
      telehealth: {
        value:
          'Not addressed. CPB 0554, CPB 0648 and the ABA medical necessity guide set no telehealth rules or place-of-service codes for ABA.',
        status: 'unverified',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
        verifyVia:
          'Availity or the precertification line on the member ID card — ask which ABA codes Aetna will pay via telehealth on this plan, with which POS and modifier.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Turns on how the plan is funded. Fully insured Michigan insurance and HMO plans follow MCL 500.2212e: after May 31, 2024 a non-urgent prior authorization request "is considered granted" if the insurer does not grant it, deny it, or ask for more information "within 7 calendar days after the date and time of submission," and again within 7 calendar days after additional information is submitted; a request the provider certifies as urgent is considered granted if not acted on within 72 hours. An approved authorization "is valid for not less than 60 calendar days or for a duration that is clinically appropriate, whichever is later." The statute’s "health benefit plan" covers individual and group insurance, HMO contracts, and self-funded plans of the state or local governments, not private self-funded employer plans, which follow ERISA: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent claims within 72 hours.',
        status: 'plan-dependent',
        cites: [
          { title: 'MCL 500.2212e — prior authorization process and timelines, Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-2212e' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia:
          'At benefits verification ask whether the plan is fully insured (Michigan-regulated) or self-funded (ERISA), then confirm the Aetna turnaround and reauthorization lead time (precertification via Availity or the number on the member ID card).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Which plan pays first is set by Michigan’s Coordination of Benefits Act for state-regulated plans: for a dependent child whose parents are married or living together, "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (same birthday: the plan covering the parent longer); for divorced or separated parents a court order assigning health coverage controls, then the order in MCL 550.253. The autism mandate adds that a member with two policies covering autism gets benefits "subject to the limits of this section when coordinating benefits." If the child also has Michigan Medicaid, Aetna pays first: Medicaid is payer of last resort and "is not liable for payment of services denied because coverage rules of the primary health insurance were not followed," so get Aetna’s authorization even when Medicaid (the PIHP) will pay secondary. TRICARE pays after other coverage except Medicaid (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [
          { title: 'MCL 550.253 — Coordination of Benefits Act, order of benefit determination', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-253' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
        verifyVia:
          'Ask Aetna at benefits verification for the member’s coordination-of-benefits order (precertification via Availity or the number on the member ID card); self-funded plans set their own COB terms in the plan document. Record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA in Michigan?', a: 'Yes, for ASD under its national policy, with precertification on all ABA codes. For fully insured plans Michigan’s mandate (MCL 500.3406s) also applies; self-funded employer plans are exempt.' },
      { q: 'Is there an age or dollar limit?', a: 'Aetna’s policy sets none, but Michigan’s mandate lets a fully insured plan limit treatment coverage to members through age 18 and cap annual benefits at $50,000 (through 6), $40,000 (7–12) and $30,000 (13–18). Check the certificate.' },
      { q: 'What does Aetna pay for ABA in Michigan?', a: 'Commercial rates are not published; they are negotiated in the participating-provider agreement.' },
    ],
  },

  'cigna-michigan': {
    slug: 'cigna-michigan',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide: no PA on assessments, all ABA codes telehealth-eligible, plus Michigan’s capped mandate.',
    assessmentPA: {
      value:
        'Not required for 97151, 97152 or 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the policy covers ABA (Cigna autism resource guide).',
      status: 'verified',
      cites: [
        { title: 'Cigna / Evernorth autism resource guide for behavioral health providers (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      ],
    },
    treatmentPA: {
      value:
        'Required — submit the assessment and treatment plan on the ABA Prior Authorization Form; EN0499 sets the medical-necessity criteria.',
      status: 'verified',
      cites: [
        { title: 'Cigna / Evernorth autism resource guide for behavioral health providers (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    dxRequired: {
      value:
        'Yes — ASD (F84.0–F84.9 except F84.2 Rett) by an independently licensed clinician, with the date of the most recent diagnosis.',
      status: 'verified',
      cites: [
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    payer: 'Cigna / Evernorth in Michigan',
    state: 'MI', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Michigan',
    h1: 'Cigna / Evernorth ABA coverage in Michigan: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Michigan: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Michigan families: EN0499, no prior authorization on assessments, 1–2 hours of supervision per 10, telehealth on all ABA codes, Michigan’s capped autism mandate, prior-authorization timelines, and what intake should verify.',
    intro: [
      'For a Michigan intake team, a Cigna card means Evernorth’s national ABA policy (EN0499), Cigna’s autism resource guide for the operational rules, Michigan’s autism mandate (MCL 500.3406s), and the plan’s funding type. Cigna is easy at the front door (no prior authorization on assessments) and exacting on treatment-plan data.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — ASD except Rett syndrome, under Evernorth EN0499 (eff. 5/15/2026)' },
      { label: 'State mandate', value: 'MCL 500.3406s (insurers; 2012 PA 100, amended 2016) and MCL 550.1416e (health care corporation certificates)' },
      { label: 'Mandate age', value: 'Treatment coverage may be limited to members through age 18' },
      { label: 'Mandate caps', value: 'Annual maximums allowed: $50,000 through age 6, $40,000 ages 7–12, $30,000 ages 13–18; no visit limits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; exchange QHPs beyond essential health benefits; short-term policies of 6 months or less' },
      { label: 'Licensure', value: 'Behavior analysts licensed by LARA (Public Health Code Part 182A, law since 2016; BACB certification required); technicians unlicensed' },
      { label: 'Prior auth', value: 'None on 97151, 97152, 0362T; treatment via the ABA Prior Authorization Form' },
      { label: 'Telehealth', value: 'All ABA CPT codes covered via telehealth' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Michigan',
        body: [
          'EN0499 (effective May 15, 2026) covers ABA for a confirmed ASD diagnosis (F84.0–F84.9, excluding F84.2 Rett syndrome) made by an independently licensed clinician, with the diagnosing clinician’s name, credentials and the date of the most recent diagnosis. The ABA assessment must use a current, standardized instrument covering the DSM-5-TR domains, and baseline data must be collected within 60 days before treatment. Case supervision runs one to two hours per ten hours of direct treatment. Cigna’s autism resource guide adds the operational rules: no prior authorization for 97151, 97152 or 0362T when the provider is independently licensed or a BCBA; only one provider bills a unit of time except the 97153/97154 plus 97155 pairing; unlicensed staff are billed under the supervising provider; and all ABA codes may be delivered by telehealth.',
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna / Evernorth autism resource guide for behavioral health providers (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Michigan autism mandate: what it guarantees, and its age and dollar limits',
        body: [
          'Michigan’s autism mandate has two parallel statutes: MCL 500.3406s for insurers (added by 2012 PA 100, amended by 2016 PA 276, applying to policies delivered, issued or renewed beginning 180 days after its April 18, 2012 enactment) and MCL 550.1416e for health care corporation group and nongroup certificates. Both require coverage "for the diagnosis of autism spectrum disorders and treatment of autism spectrum disorders," including behavioral health treatment such as applied behavior analysis, and bar the carrier from limiting the number of visits, from denying coverage because treatment "is educational or habilitative in nature," and from applying dollar limits, copays, deductibles or coinsurance that do not apply to physical illness generally.',
          'Unlike newer mandates, Michigan’s still carries age and dollar ceilings the carrier may choose to apply: coverage for treatment may be limited "through 18 years of age" and to a maximum annual benefit of $50,000 through age 6, $40,000 from 7 through 12, and $30,000 from 13 through 18. Treatment must be "prescribed or ordered" by a licensed physician or licensed psychologist who finds it medically necessary, behavioral health treatment must be "provided or supervised by a board certified behavior analyst or a licensed psychologist," and the diagnosis means assessments "including the autism diagnostic observation schedule, performed by a licensed physician or a licensed psychologist." While a member is in treatment the carrier may require a treatment plan and treatment review, request the ADOS results, request that the ADOS be repeated no more than once every three years, and request an annual development evaluation. Utilization review, medical-necessity review, network requirements and coordination of benefits still apply. Exempt: self-funded ERISA employer plans (outside state insurance law), exchange qualified health plans to the extent the coverage exceeds essential health benefits, and, under 500.3406s, short-term policies of six months or less.',
        ],
        cites: [
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
        ],
      },
      {
        h2: 'Licensure and rates',
        body: [
          'Michigan licenses behavior analysts through LARA’s Board of Behavior Analysts under Part 182A of the Public Health Code (Michigan’s licensure law dates from 2016). A license requires current BACB certification in good standing sent directly from the BACB, a criminal background check, human-trafficking and implicit-bias training, and renews every four years; assistant behavior analysts have their own LARA license and supervision verification. Technicians are not licensed by the state. Cigna does not publish commercial ABA rates for Michigan; they are contract terms.',
        ],
        cites: [
          { title: 'LARA — Michigan Board of Behavior Analysts (Public Health Code Part 182A; R 338.1801–338.1835)', url: 'https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/behavior-analysts' },
          { title: 'LARA — Michigan Behavior Analyst Licensing Guide (rev. 1/26/2026)', url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/bpl/Behavior-Analysts/Licensing-Info-and-Forms/Behavior-Analyst-Licensing-Guide-FAQ-12626.pdf' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Michigan mandate) vs. self-funded ERISA (exempt); Cigna’s Coverage Confirmation Grid returns benefits within one business day.' },
      { title: 'Diagnosis details', desc: 'Diagnosing clinician’s name, credentials, licensure and the date of the most recent diagnosis.' },
      { title: 'Standardized assessment within 60 days', desc: 'Current-version instrument and baseline data dated within 60 days of the treatment start.' },
      { title: 'Physician or psychologist order', desc: 'Required for covered treatment on fully insured Michigan plans.' },
    ],
    sources: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna / Evernorth autism resource guide for behavioral health providers (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
      { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
      { title: 'LARA — Michigan Board of Behavior Analysts (Public Health Code Part 182A; R 338.1801–338.1835)', url: 'https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/behavior-analysts' },
      { title: 'LARA — Michigan Behavior Analyst Licensing Guide (rev. 1/26/2026)', url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/bpl/Behavior-Analysts/Licensing-Info-and-Forms/Behavior-Analyst-Licensing-Guide-FAQ-12626.pdf' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'MCL 500.2212e — prior authorization process and timelines, Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-2212e' },
      { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
      { title: 'MCL 550.253 — Coordination of Benefits Act, order of benefit determination', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-253' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
      { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Case supervision by a BCBA, LBA or independently licensed mental health professional trained in ABA, with direct and indirect case supervision "consistent with the general accepted standard of care of one to two hours per ten hours of direct treatment"; when direct treatment is 10 hours a week or less, at least one to two hours a week of direct case supervision. The supervisor’s name and credentials must be documented.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'Allowed only for the named pairs: "Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)."',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide for behavioral health providers (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      dailyLimits: {
        value:
          'Cigna publishes no per-day unit ceiling. Hours are authorized on EN0499 medical-necessity criteria from the submitted treatment plan (baseline data within 60 days of the treatment start, measurable goals, stakeholder training); multiple ABA agencies in one authorization period are not medically necessary unless coordinated and non-duplicative.',
        status: 'unverified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
        verifyVia:
          'The Evernorth authorization determination, or the Autism Care Coordinator team, 877-279-7603.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Not addressed in EN0499 or the autism resource guide beyond requiring the name and credentials of the supervisor and stakeholder trainer to be documented.',
        status: 'unverified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna / Evernorth autism resource guide for behavioral health providers (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
        verifyVia:
          'The Cigna/Evernorth provider agreement and administrative guidelines, or Provider Services, 800-926-2273.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Setting-neutral with conditions: where services are delivered in environments such as an academic setting, a vocational placement or via telehealth, the documentation must show the service is direct ABA treatment in line with the treatment plan and that ABA is "not utilized to replace or replicate activities that are the responsibility of the setting" (for example a classroom aide, 1:1 teacher or tutor). Treatment plans list the settings (home, clinic, school, community).',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      billAsProvider: {
        value:
          '"Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." ABA must be billed with 97151–97158, 0362T and 0373T only; the resource guide lists who may provide and bill each code (BCBA-D, BCBA or licensed mental health provider for the analyst codes).',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide for behavioral health providers (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'EN0499 sets no age cap. Michigan’s mandate lets a fully insured carrier limit autism treatment coverage to members "through 18 years of age" and cap it at $50,000 a year through age 6, $40,000 for ages 7–12 and $30,000 for ages 13–18; whether a given plan uses those limits is in its certificate. Self-funded ERISA plans set their own terms.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
        ],
        verifyVia:
          'Cigna Coverage Confirmation Grid or the Autism Care Coordinator team (877-279-7603): fully insured vs. self-funded, and any certificate age or dollar limits.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'EN0499 requires "The date on which the diagnosis was most recently made" and the diagnosing clinician’s name, credentials and licensure, but sets no maximum age for the diagnosis. The standardized assessment and baseline data must be within 60 days before treatment starts. On fully insured Michigan plans the mandate lets the carrier request a repeat ADOS no more than once every three years.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
      },
      diagnosingProviders: {
        value:
          'A confirmed ASD diagnosis (F84.0–F84.9, except F84.2 Rett syndrome) based on DSM-5-TR "by a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice." For fully insured Michigan plans the mandate names a licensed physician or licensed psychologist.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
      },
      diagnosticTools: {
        value:
          'EN0499 names no diagnostic instrument; it requires the ABA assessment to use a reliable, valid, standardized instrument covering the DSM-5-TR ASD domains, completed in full, current version (e.g., Vineland-3, not Vineland-II), administered by a trained person, dated and naming the respondent, within 60 days before treatment starts.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      referral: {
        value:
          'Cigna’s national ABA policy requires no referral; ABA assessments (97151, 97152, 0362T) need no prior authorization when the provider is independently licensed or a BCBA and the policy covers ABA, and treatment is requested on the ABA Prior Authorization Form after the assessment. For a fully insured Michigan policy the mandate adds an order requirement: covered treatment is care "prescribed or ordered for an individual diagnosed with 1 of the autism spectrum disorders by a licensed physician or a licensed psychologist who determines the care to be medically necessary," and the treatment plan is developed "when the treatment of an autism spectrum disorder is first prescribed or ordered." Self-funded ERISA plans sit outside the statute.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide for behavioral health providers (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
      },
      telehealth: {
        value:
          '"All ABA CPT codes are covered telehealth services," per Cigna’s autism resource guide, with EN0499 governing the documentation for services delivered via telehealth.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide for behavioral health providers (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Turns on how the plan is funded. Fully insured Michigan insurance and HMO plans follow MCL 500.2212e: after May 31, 2024 a non-urgent prior authorization request "is considered granted" if the insurer does not grant it, deny it, or ask for more information "within 7 calendar days after the date and time of submission," and again within 7 calendar days after additional information is submitted; a request the provider certifies as urgent is considered granted if not acted on within 72 hours. An approved authorization "is valid for not less than 60 calendar days or for a duration that is clinically appropriate, whichever is later." The statute’s "health benefit plan" covers individual and group insurance, HMO contracts, and self-funded plans of the state or local governments, not private self-funded employer plans, which follow ERISA: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent claims within 72 hours.',
        status: 'plan-dependent',
        cites: [
          { title: 'MCL 500.2212e — prior authorization process and timelines, Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-2212e' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia:
          'At benefits verification ask whether the plan is fully insured (Michigan-regulated) or self-funded (ERISA), then confirm the Cigna/Evernorth turnaround and reauthorization lead time (the Evernorth Autism Care Coordinator team, 877-279-7603).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Which plan pays first is set by Michigan’s Coordination of Benefits Act for state-regulated plans: for a dependent child whose parents are married or living together, "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (same birthday: the plan covering the parent longer); for divorced or separated parents a court order assigning health coverage controls, then the order in MCL 550.253. The autism mandate adds that a member with two policies covering autism gets benefits "subject to the limits of this section when coordinating benefits." If the child also has Michigan Medicaid, Cigna pays first: Medicaid is payer of last resort and "is not liable for payment of services denied because coverage rules of the primary health insurance were not followed," so get Cigna’s authorization even when Medicaid (the PIHP) will pay secondary. TRICARE pays after other coverage except Medicaid (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [
          { title: 'MCL 550.253 — Coordination of Benefits Act, order of benefit determination', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-253' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
        verifyVia:
          'Ask Cigna at benefits verification for the member’s coordination-of-benefits order (the Evernorth Autism Care Coordinator team, 877-279-7603); self-funded plans set their own COB terms in the plan document. Record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna require prior authorization for the ABA assessment in Michigan?', a: 'No, for 97151, 97152 and 0362T when the provider is independently licensed or a BCBA and the member’s policy covers ABA. Treatment requires prior authorization.' },
      { q: 'Can ABA be delivered by telehealth with Cigna?', a: 'Cigna’s autism resource guide says all ABA CPT codes are covered telehealth services, with EN0499 documentation rules.' },
      { q: 'Does Michigan’s mandate apply to my Cigna plan?', a: 'Only to fully insured plans. Many Cigna employer plans are self-funded and exempt; verify funding type first.' },
    ],
  },

  'unitedhealthcare-michigan': {
    slug: 'unitedhealthcare-michigan',
    family: 'unitedhealthcare',
    cardDesc: 'Optum ABA criteria (BH803ABASCC): PA required, 1–2 hrs supervision per 10, 97153+97155 concurrent billing, Michigan’s capped mandate.',
    assessmentPA: {
      value:
        'Optum’s criteria require prior authorization for ABA "unless otherwise specified or mandated by contract or law" but do not separately address the initial 97151 assessment; Optum’s FAQ asks providers to include hours for future assessments in the treatment request.',
      status: 'plan-dependent',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum — FAQ: Autism/ABA using CPT codes (01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      ],
      verifyVia:
        'Optum Behavioral Health (number on the member ID card) — ask whether 97151/97152 need authorization before the assessment for this plan.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Required — "Prior authorization is required for ABA *(unless otherwise specified or mandated by contract or law)." Reviews: “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law” (Optum ABA CPT FAQ)',
      status: 'verified',
      cites: [
        { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      ],
    },
    dxRequired: {
      value:
        'Yes — DSM-5-TR ASD from a state-licensed physician, psychologist or qualified clinician, confirmed with at least one validated tool.',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      ],
    },
    payer: 'UnitedHealthcare (Optum Behavioral Health) in Michigan',
    state: 'MI', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Michigan',
    h1: 'UnitedHealthcare ABA coverage in Michigan: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Michigan: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare covers ABA in Michigan through Optum Behavioral Health: prior authorization, diagnosis and supervision criteria, concurrent billing and telehealth rules, Michigan’s capped autism mandate, prior-authorization timelines, and what intake should verify.',
    intro: [
      'UnitedHealthcare commercial plans manage ABA through Optum Behavioral Health. In Michigan that means Optum’s national ABA supplemental clinical criteria and its CPT-code FAQ, Michigan’s autism mandate for fully insured plans, and the plan’s funding type. Optum publishes no Michigan ABA program page, and its July 2026 state-mandates supplement carries no Michigan entry, so the national criteria plus the statute are the whole picture.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, under Optum’s ABA supplemental clinical criteria' },
      { label: 'State mandate', value: 'MCL 500.3406s (insurers; 2012 PA 100, amended 2016) and MCL 550.1416e (health care corporation certificates)' },
      { label: 'Mandate age', value: 'Treatment coverage may be limited to members through age 18' },
      { label: 'Mandate caps', value: 'Annual maximums allowed: $50,000 through age 6, $40,000 ages 7–12, $30,000 ages 13–18; no visit limits' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; exchange QHPs beyond essential health benefits; short-term policies of 6 months or less' },
      { label: 'Licensure', value: 'Behavior analysts licensed by LARA (Public Health Code Part 182A, law since 2016; BACB certification required); technicians unlicensed' },
      { label: 'Prior auth', value: 'Required for ABA unless otherwise specified by contract or law' },
      { label: 'Supervision', value: '1–2 hours per 10 hours of direct treatment' },
    ],
    sections: [
      {
        h2: 'Optum’s criteria, applied in Michigan',
        body: [
          'Optum’s ABA Supplemental Clinical Criteria (annual review August 2025, interim review April 2026) require prior authorization for ABA "unless otherwise specified or mandated by contract or law," a valid DSM-5-TR ASD diagnosis from a state-licensed physician, psychologist or other qualified clinician confirmed with at least one validated tool, a credentialed provider (BCBA or attested licensed clinician), and direct case supervision of 1–2 hours per 10 hours of treatment. Classroom 1:1 aide work and IDEA services are excluded. Optum’s FAQ allows concurrent billing of 97153 with 97155 and 97156, virtual supervision and family training for approved virtual-visit providers (POS 02), and uses HN/HM modifiers for BCaBAs and technicians.',
          'Optum’s state-mandates supplement (July 2026) lists special rules for other states but none for Michigan, and Optum’s Provider Express has no Michigan ABA program page; Michigan’s requirements come from the statute below.',
        ],
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — FAQ: Autism/ABA using CPT codes (01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'Optum Provider Express — Autism/ABA clinical resources (state program pages)', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2.html' },
        ],
      },
      {
        h2: 'The Michigan autism mandate: what it guarantees, and its age and dollar limits',
        body: [
          'Michigan’s autism mandate has two parallel statutes: MCL 500.3406s for insurers (added by 2012 PA 100, amended by 2016 PA 276, applying to policies delivered, issued or renewed beginning 180 days after its April 18, 2012 enactment) and MCL 550.1416e for health care corporation group and nongroup certificates. Both require coverage "for the diagnosis of autism spectrum disorders and treatment of autism spectrum disorders," including behavioral health treatment such as applied behavior analysis, and bar the carrier from limiting the number of visits, from denying coverage because treatment "is educational or habilitative in nature," and from applying dollar limits, copays, deductibles or coinsurance that do not apply to physical illness generally.',
          'Unlike newer mandates, Michigan’s still carries age and dollar ceilings the carrier may choose to apply: coverage for treatment may be limited "through 18 years of age" and to a maximum annual benefit of $50,000 through age 6, $40,000 from 7 through 12, and $30,000 from 13 through 18. Treatment must be "prescribed or ordered" by a licensed physician or licensed psychologist who finds it medically necessary, behavioral health treatment must be "provided or supervised by a board certified behavior analyst or a licensed psychologist," and the diagnosis means assessments "including the autism diagnostic observation schedule, performed by a licensed physician or a licensed psychologist." While a member is in treatment the carrier may require a treatment plan and treatment review, request the ADOS results, request that the ADOS be repeated no more than once every three years, and request an annual development evaluation. Utilization review, medical-necessity review, network requirements and coordination of benefits still apply. Exempt: self-funded ERISA employer plans (outside state insurance law), exchange qualified health plans to the extent the coverage exceeds essential health benefits, and, under 500.3406s, short-term policies of six months or less.',
        ],
        cites: [
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
        ],
      },
      {
        h2: 'Licensure and rates',
        body: [
          'Michigan licenses behavior analysts through LARA’s Board of Behavior Analysts under Part 182A of the Public Health Code (Michigan’s licensure law dates from 2016). A license requires current BACB certification in good standing sent directly from the BACB, a criminal background check, human-trafficking and implicit-bias training, and renews every four years; assistant behavior analysts have their own LARA license and supervision verification. Technicians are not licensed by the state. UnitedHealthcare does not publish commercial ABA rates; they are contract terms.',
        ],
        cites: [
          { title: 'LARA — Michigan Board of Behavior Analysts (Public Health Code Part 182A; R 338.1801–338.1835)', url: 'https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/behavior-analysts' },
          { title: 'LARA — Michigan Behavior Analyst Licensing Guide (rev. 1/26/2026)', url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/bpl/Behavior-Analysts/Licensing-Info-and-Forms/Behavior-Analyst-Licensing-Guide-FAQ-12626.pdf' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Michigan mandate) vs. self-funded ERISA (exempt).' },
      { title: 'Diagnostic report with a validated tool', desc: 'Optum needs the DSM-5 diagnosis and severity confirmed with at least one validated instrument.' },
      { title: 'Physician or psychologist order', desc: 'Required for covered treatment on fully insured Michigan plans.' },
      { title: 'Virtual-visit attestation', desc: 'Needed before billing telehealth supervision or family training.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum — FAQ: Autism/ABA using CPT codes (01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'Optum Provider Express — Autism/ABA clinical resources (state program pages)', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2.html' },
      { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
      { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
      { title: 'LARA — Michigan Board of Behavior Analysts (Public Health Code Part 182A; R 338.1801–338.1835)', url: 'https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/behavior-analysts' },
      { title: 'LARA — Michigan Behavior Analyst Licensing Guide (rev. 1/26/2026)', url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/bpl/Behavior-Analysts/Licensing-Info-and-Forms/Behavior-Analyst-Licensing-Guide-FAQ-12626.pdf' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'MCL 500.2212e — prior authorization process and timelines, Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-2212e' },
      { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
      { title: 'MCL 550.253 — Coordination of Benefits Act, order of benefit determination', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-253' },
      { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
      { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
      { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
      { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          '"Consistent with CASP standards of care, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week." Technicians work under a BCBA or licensed behavioral health clinician and should be RBTs or otherwise appropriately certified; parents should not serve as RBTs for their own child. Optum’s ABA FAQ adds that it generally sees 2 hours per 10 hours of technician time and asks for a clinical rationale above that.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — FAQ: Autism/ABA using CPT codes (01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        ],
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
        value: 'Optum’s commercial ABA reimbursement policy (2022RP501A, updated June 2026) sets a maximum frequency per day for every code: 97151 32 units (8 hrs), 97152 16 (4 hrs), 97153 32 (8 hrs), 97154 18 (4.5 hrs), 97155 24 (6 hrs), 97156 16 (4 hrs), 97157 16 (4 hrs), 97158 16 (4 hrs), 0362T 16 (4 hrs), 0373T 32 (8 hrs) — and “If a provider bills in excess of 32 units per day, claims may be subject to non-reimbursement or recovery.” The ABA CPT FAQ confirms “For our commercial ABA program MUE’s apply.” There is no weekly hour cap: hours are authorized on documented clinical need, approved units can be shifted among codes within a cluster, and utilization below 80% of authorized hours over a two-week period is addressed at review. For fully insured Michigan plans the mandate bars visit limits but allows annual dollar maximums by age band.',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
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
          'Home (POS 12), clinic (11), community (99) and school (03) are the common places of service, with telehealth reported as POS 10 (member at home) or 02 (member elsewhere). Not covered: services that are not ABA therapy, such as a "1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA; school-related coordination (teacher training, meetings with school personnel, observations in school) is allowed.',
        status: 'verified',
        cites: [
          { title: 'Optum — FAQ: Autism/ABA using CPT codes (01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      billAsProvider: {
        value:
          'Credentialed ABA providers are BCBAs and attested licensed behavioral health clinicians; BCaBAs and technicians work under their supervision. Claims identify the rendering level by modifier: HN for a BCaBA (bachelor’s level) and HM for a behavior technician.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — FAQ: Autism/ABA using CPT codes (01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Optum’s ABA criteria set no age cap. Michigan’s mandate lets a fully insured carrier limit autism treatment coverage to members "through 18 years of age" and cap it at $50,000 a year through age 6, $40,000 for ages 7–12 and $30,000 for ages 13–18; whether a given plan uses those limits is in its certificate. Self-funded ERISA plans set their own terms.',
        status: 'plan-dependent',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'MCL 550.1416e — autism coverage (Nonprofit Health Care Corporation Reform Act), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-1416e' },
        ],
        verifyVia:
          'Live benefits verification (UnitedHealthcare / Optum): fully insured vs. self-funded, and whether the certificate applies the mandate’s age-18 and annual-dollar limits.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Optum’s criteria set no recency window for the diagnosis; they require it be confirmed and documented with at least one clinically validated tool. On fully insured Michigan plans the mandate lets the carrier request a repeat ADOS no more than once every three years and an annual development evaluation.',
        status: 'plan-dependent',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
        verifyVia:
          'Optum Behavioral Health at the authorization request — ask whether an older diagnostic report will be accepted for this member.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          '"A valid diagnosis of ASD … must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis" under DSM-5-TR. For fully insured Michigan plans the mandate names a licensed physician or licensed psychologist.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
      },
      diagnosticTools: {
        value:
          'The DSM-5 diagnosis and severity level must be confirmed using at least one clinically validated tool; Optum lists screening tools (e.g., M-CHAT, CARS/CARS-2, STAT) and formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO), and norm-referenced functional instruments (e.g., ABLLS, VB-MAPP) for treatment planning.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      referral: {
        value:
          'Optum’s criteria require no physician referral; prior authorization is required for ABA "unless otherwise specified or mandated by contract or law." For a fully insured Michigan policy the mandate adds an order requirement: covered treatment is care "prescribed or ordered for an individual diagnosed with 1 of the autism spectrum disorders by a licensed physician or a licensed psychologist who determines the care to be medically necessary," and the treatment plan is developed "when the treatment of an autism spectrum disorder is first prescribed or ordered." Self-funded ERISA plans sit outside the statute.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
        ],
      },
      telehealth: {
        value: 'Three codes, after an attestation. Optum’s Telehealth Billing guide (updated September 2025) is explicit for commercial plans: “For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157” — virtual supervision of technicians and family training — so technician-delivered 97153 is not payable by telehealth. The provider must first be “an approved Optum virtual visits provider who has attested” (the virtual-visits attestation on Provider Express) and must tell the ABA Care Advocate at authorization. Bill the in-person code with the member’s location as the place of service: POS 10 when the member is at home, POS 02 anywhere else (the older ABA CPT FAQ says POS 02; the 2025 guide requires one of the two on every behavioral-health telehealth claim, and POS 11 or a telehealth modifier alone is not paid). Optum’s criteria add that telehealth is “not intended to supplant in-person service.”',
        status: 'verified',
        cites: [
          { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Turns on how the plan is funded. Fully insured Michigan insurance and HMO plans follow MCL 500.2212e: after May 31, 2024 a non-urgent prior authorization request "is considered granted" if the insurer does not grant it, deny it, or ask for more information "within 7 calendar days after the date and time of submission," and again within 7 calendar days after additional information is submitted; a request the provider certifies as urgent is considered granted if not acted on within 72 hours. An approved authorization "is valid for not less than 60 calendar days or for a duration that is clinically appropriate, whichever is later." The statute’s "health benefit plan" covers individual and group insurance, HMO contracts, and self-funded plans of the state or local governments, not private self-funded employer plans, which follow ERISA: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent claims within 72 hours.',
        status: 'plan-dependent',
        cites: [
          { title: 'MCL 500.2212e — prior authorization process and timelines, Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-2212e' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia:
          'At benefits verification ask whether the plan is fully insured (Michigan-regulated) or self-funded (ERISA), then confirm the UnitedHealthcare / Optum turnaround and reauthorization lead time (Optum Behavioral Health via the number on the member ID card or Provider Express).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Which plan pays first is set by Michigan’s Coordination of Benefits Act for state-regulated plans: for a dependent child whose parents are married or living together, "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (same birthday: the plan covering the parent longer); for divorced or separated parents a court order assigning health coverage controls, then the order in MCL 550.253. The autism mandate adds that a member with two policies covering autism gets benefits "subject to the limits of this section when coordinating benefits." If the child also has Michigan Medicaid, UnitedHealthcare pays first: Medicaid is payer of last resort and "is not liable for payment of services denied because coverage rules of the primary health insurance were not followed," so get UnitedHealthcare’s authorization even when Medicaid (the PIHP) will pay secondary. TRICARE pays after other coverage except Medicaid (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [
          { title: 'MCL 550.253 — Coordination of Benefits Act, order of benefit determination', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-550-253' },
          { title: 'MCL 500.3406s — autism coverage (Insurance Code), Michigan Legislature', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3406s' },
          { title: 'Michigan Medicaid Provider Manual (July 1, 2026) — Coordination of Benefits chapter', url: 'https://www.mdch.state.mi.us/dch-medicaid/manuals/MedicaidProviderManual.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
        verifyVia:
          'Ask UnitedHealthcare at benefits verification for the member’s coordination-of-benefits order (Optum Behavioral Health via the number on the member ID card or Provider Express); self-funded plans set their own COB terms in the plan document. Record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA in Michigan?', a: 'Yes, for ASD, managed by Optum Behavioral Health with prior authorization. Fully insured plans also follow Michigan’s mandate; self-funded plans are exempt.' },
      { q: 'Can the BCBA and technician bill at the same time?', a: 'Yes. Optum allows 97153 and 97155 (and 97154 with supervision) to be billed concurrently when supervision is provided.' },
      { q: 'Is there a Michigan-specific Optum ABA program?', a: 'Optum publishes no Michigan ABA program page and its state-mandates supplement has no Michigan entry; the national criteria and Michigan’s statute apply.' },
      { q: 'How often does UnitedHealthcare (Optum) reauthorize ABA?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale.' },
    ],
  },
};

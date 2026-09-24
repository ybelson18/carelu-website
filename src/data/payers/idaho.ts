import type { PayerConfig, PayerSource, PayerFact } from './types.js';

/* ================================================================
   IDAHO — built 2026-09-24 from primary sources read that day.
   Structure worth knowing before reading the guides:
   - Idaho Medicaid has NO medical MCOs for children. ABA-style
     treatment is Children's Habilitation Intervention Services (CHIS):
     a state-plan, fee-for-service benefit administered by DHW's Bureau
     of Developmental Disability Services, prior-authorized by Telligen
     (the QIO) and paid by Gainwell on HCPCS H-codes. The behavioral
     health PAHP (Magellan, the Idaho Behavioral Health Plan) stopped
     authorizing 97151–97158 on Dec. 1, 2025 — so no MCO guide exists.
   - Idaho has NO autism insurance statute. Commercial ABA coverage rests
     on Department of Insurance Bulletin No. 18-02 (2018), which reads
     MHPAEA, ACA § 1557 and the state EHB benchmark together.
   - Idaho has NO behavior-analyst licensure law.
   ================================================================ */

// ---- Idaho Medicaid sources (all read 2026-09-24) ----
const ID_RULE: PayerSource = { title: 'IDAPA 16.03.26 — Medicaid Plan Benefits (current; CHIS at §§ 180–186, conditions for payment § 025, TPL § 026)', url: 'https://proddfmmainsa.blob.core.windows.net/dfm-admin-website/rules/current/16/160326.pdf' };
const ID_HB: PayerSource = { title: 'Idaho Medicaid Provider Handbook — Children’s Habilitation Intervention Services (August 17, 2026)', url: 'https://www.idmedicaid.com/Provider%20Guidelines/Child%20Habilitation%20Intervention%20Services.pdf' };
const ID_GEN: PayerSource = { title: 'Idaho Medicaid Provider Handbook — General Information and Requirements for Providers (December 23, 2025)', url: 'https://www.idmedicaid.com/General%20Information/General%20Information%20and%20Requirements%20for%20Providers.pdf' };
const ID_FS_DDA: PayerSource = { title: 'Idaho Medicaid fee schedule — CHIS for Developmental Disability Agencies (eff. 9/1/2025, last reviewed 1/1/2026)', url: 'https://publicdocuments.dhw.idaho.gov/WebLink/ElectronicFile.aspx?docid=30359&dbid=0&repo=PUBLIC-DOCUMENTS' };
const ID_FS_IND: PayerSource = { title: 'Idaho Medicaid fee schedule — CHIS for Independent Providers (eff. 9/1/2025, last reviewed 1/1/2026)', url: 'https://publicdocuments.dhw.idaho.gov/WebLink/ElectronicFile.aspx?docid=30360&dbid=0&repo=PUBLIC-DOCUMENTS' };
const ID_MAG: PayerSource = { title: 'Magellan of Idaho — “Effective Dec. 1, 2025: Bill behavioral modification services to Idaho Medicaid FFS” (provider e-blast, 10/30/2025)', url: 'https://magellanofidaho.com/documents/d/magellan-of-idaho/id-prv-103025_bmc-e-blast_final_pdfversion' };
const ID_TEL: PayerSource = { title: 'Telligen — Idaho Medicaid QIO Provider Manual (2025)', url: 'https://idmedicaid.telligen.com/wp-content/uploads/2025/02/2025_Provider-Manual.pdf' };
const ID_TEL_EXP: PayerSource = { title: 'Telligen — CHIS Requests: Expedited (memo, February 2026)', url: 'https://idmedicaid.telligen.com/wp-content/uploads/2026/02/CHIS-Memo_Expedited-Requests.pdf' };
const ID_TEL_SIG: PayerSource = { title: 'Telligen — Signature Requirements for CHIS Prior Authorization Requests (effective May 1, 2026)', url: 'https://idmedicaid.telligen.com/signature-requirements-for-chis-prior-authorization-requests/' };
const ID_DHW_CHIS: PayerSource = { title: 'Idaho DHW — Children’s Habilitation Intervention Services (CHIS) program page (updated 1/5/2026)', url: 'https://healthandwelfare.idaho.gov/services-programs/medicaid-health/childrens-habilitation-intervention-services-chis' };
const CFR_440_230: PayerSource = { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' };
const CFR_433_139: PayerSource = { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' };

// ---- Commercial / state-law sources (all read 2026-09-24) ----
const ID_BULLETIN: PayerSource = { title: 'Idaho Department of Insurance — Bulletin No. 18-02, Clarification Regarding Coverage of Treatments for Autism Spectrum Disorder (April 2, 2018)', url: 'https://doi.idaho.gov/bulletin/18-02-clarification-regarding-coverage-of-treatments-for-autism-spectrum-disorder/' };
const BACB_LIC: PayerSource = { title: 'BACB — U.S. Licensure of Behavior Analysts (Idaho not listed; map updated June 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' };
const ID_3930: PayerSource = { title: 'Idaho Code § 41-3930 — Managed care utilization management program requirements', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title41/T41CH39/SECT41-3930/' };
const ERISA_503: PayerSource = { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' };
const ID_COB_RULE: PayerSource = { title: 'IDAPA 18.04.14 — Coordination of Benefits (Idaho Department of Insurance)', url: 'https://proddfmmainsa.blob.core.windows.net/dfm-admin-website/rules/current/18/180414.pdf' };
const TRICARE_1079: PayerSource = { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' };
const CHAMPVA_270: PayerSource = { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' };

// ---- Carrier sources (all read 2026-09-24) ----
const REG_BH18: PayerSource = { title: 'Regence Medical Policy BH18 — Applied Behavior Analysis for the Treatment of Autism Spectrum Disorder (eff. 8/1/2025; revision announced for 11/1/2026)', url: 'https://beonbrand.getbynder.com/m/e4646f415eb7f4eb/' };
const REG_BH33: PayerSource = { title: 'Regence Medical Policy BH33 — ABA Initial Assessment for the Treatment of Autism Spectrum Disorder (eff. 8/1/2025)', url: 'https://beonbrand.getbynder.com/m/8360cc45444cab46/' };
const REG_FORM: PayerSource = { title: 'Regence BlueShield of Idaho — ABA Utilization Management request form 5385ID (eff. 5/2026)', url: 'https://beonbrand.getbynder.com/m/4e9025772576d2cb/original/Applied-Behavioral-Analysis-ABA-Initial-Request-Form.pdf' };
const BCI_PAP902: PayerSource = { title: 'Blue Cross of Idaho PAP902 — Behavioral Health Prior Authorization Requirements (revised April 2026)', url: 'https://providers.bcidaho.com/policies-and-procedures/pap/pap902.page' };
const BCI_PAP241: PayerSource = { title: 'Blue Cross of Idaho PAP241 — Prior Authorization Requirements (revised April 2026)', url: 'https://providers.bcidaho.com/policies-and-procedures/pap/pap241.page' };
const BCI_FEP_FORM: PayerSource = { title: 'Blue Cross of Idaho — Federal Employee Program Only: ABA Initial Authorization form 12-302', url: 'https://providers.bcidaho.com/resources/pdfs/medical-management/behavioral-health/Applied-Behavior-Analysis.pdf' };
const BCI_MP301501: PayerSource = { title: 'Blue Cross of Idaho MP 3.01.501 — Guidelines for Coverage of Mental Health and Substance-Related and Addictive Disorders (eff. 8/28/2025)', url: 'https://providers.bcidaho.com/resources/pdfs/medical-management/Medical%20Policy%20PDF/3%20-%20MH/03.01.501_08-28-25.pdf' };
const AETNA_GUIDE: PayerSource = { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' };
const AETNA_PRECERT: PayerSource = { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' };
const AETNA_0648: PayerSource = { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' };
const CIGNA_EN0499: PayerSource = { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' };
const CIGNA_ARG: PayerSource = { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' };
const OPTUM_SCC: PayerSource = { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' };
const OPTUM_SM: PayerSource = { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, eff. July 2026; no Idaho entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' };
const OPTUM_PE: PayerSource = { title: 'Optum Provider Express — ABA services page (assessment and treatment authorizations)', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2.html' };

/* The "mandate" facts every Idaho commercial guide repeats (the chat reads
   mandate caps from atGlance). Idaho has no autism statute — say so. */
const ID_MANDATE_GLANCE: PayerFact[] = [
  { label: 'State mandate', value: 'No autism statute — Idaho DOI Bulletin No. 18-02 (2018) requires ASD treatment on state-regulated plans that cover rehabilitative or habilitative services (plan years from 1/1/2019)' },
  { label: 'Mandate age', value: 'None — the bulletin sets no age limit' },
  { label: 'Mandate caps', value: 'None separate — no separate dollar or visit limits; cost-sharing in parity with other mental health and med/surg benefits' },
  { label: 'Exempt from mandate', value: 'Self-funded employer (ERISA) plans Idaho does not regulate; plans with no rehabilitative/habilitative benefit fall outside the bulletin’s trigger' },
  { label: 'Licensure', value: 'None — Idaho has no behavior-analyst licensure law; BACB certification governs' },
];

const ID_MANDATE_SECTION_BODY =
  'Idaho is one of the few states with no autism insurance statute, and intake should say so plainly. What Idaho has instead is Department of Insurance Bulletin No. 18-02 (April 2, 2018). Reading the federal Mental Health Parity and Addiction Equity Act, ACA § 1557 and the state’s Essential Health Benefits together, the Department declared that it "will consider an exclusion of treatments for autism spectrum disorder as discriminatory and prohibited when a plan includes coverage of rehabilitative or habilitative services, such as coverage of occupational therapy or speech therapy." It applies to the individual, small-group and large-group insured markets, and to self-funded plans subject to Idaho Code title 41, chapters 40 or 41, for plan years starting on or after January 1, 2019. Covered treatment must be "consistent with other mental health services (including applicable deductibles, copayments, or coinsurance), not subject to any separate dollar limits or visit limits, and in parity with medical and surgical benefits." The bulletin defines treatment as "evidence-based care and related equipment prescribed or ordered for an individual diagnosed with an autism spectrum disorder by a licensed physician or a licensed psychologist who determines the care to be medically necessary, including but not limited to behavioral health treatment" — it does not name ABA by name, and it sets no age limit. Carriers may still review medical necessity and "periodically review the medical necessity of continuing" treatment. Two practical limits: a bulletin is weaker than a statute, and a self-funded employer plan the Department does not regulate (most ERISA plans) sits outside it entirely — plan funding type is the first fact to establish.';

export const idahoPayers: Record<string, PayerConfig> = {
  'idaho-medicaid': {
    slug: 'idaho-medicaid',
    cardDesc: 'No ABA CPT codes, no MCO: CHIS is fee-for-service, Telligen PA, H-code billing, no ASD diagnosis required — functional screening instead.',
    assessmentPA: {
      value: 'Not before the initial assessment — the initial Assessment and Clinical Treatment Plan (ACTP) and the screening are requested retroactively; the annual ACTP needs PA before it is done',
      status: 'verified',
      cites: [ID_HB, ID_RULE],
    },
    treatmentPA: {
      value: 'Required — every CHIS service on the ACTP, via Telligen (Qualitrac); up to 24 hours within 30 days may be delivered once the initial request is in; six-month reauthorizations',
      status: 'verified',
      cites: [ID_HB, ID_RULE, ID_TEL],
    },
    dxRequired: {
      value: 'No ASD diagnosis required — eligibility is functional: a Vineland-3 screening showing deficits of 1.5+ standard deviations in three or more areas, plus an order from a physician, PA or NP',
      status: 'verified',
      cites: [ID_RULE, ID_HB],
    },
    payer: 'Idaho Medicaid',
    state: 'ID', kind: 'state-medicaid',
    pill: 'Payer Guide · Idaho Medicaid',
    h1: 'Idaho Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Idaho Medicaid ABA (CHIS) Coverage, Prior Auth & Rates Guide | Carelu',
    metaDescription:
      'How Idaho Medicaid pays for ABA-based treatment through Children’s Habilitation Intervention Services (CHIS): fee-for-service with Telligen prior authorization, H-code billing since the December 2025 move off 97151–97158, functional eligibility with no autism diagnosis required, and the published CHIS rates.',
    intro: [
      'Idaho Medicaid is structurally unlike every other program in our directory, and intake has to know three things before it takes a single call. First, Idaho does not bill ABA on the 97151–97158 CPT codes. Treatment built on applied behavior analysis is delivered as Children’s Habilitation Intervention Services (CHIS), a state-plan benefit billed on HCPCS H-codes. Second, there is no managed-care plan to route through. CHIS is fee-for-service: the Department of Health and Welfare administers it, Telligen (the state’s quality improvement organization) prior-authorizes it, and Gainwell pays the claims. Until November 30, 2025, some ABA was authorized and paid under the 97-series through Magellan’s Idaho Behavioral Health Plan. Since December 1, 2025 that route is closed and those services are "Behavioral Intervention" under CHIS. Third, CHIS eligibility is functional, not diagnostic. A child from birth through the month of their 21st birthday qualifies on a standardized screening that shows real functional or behavioral deficits. An autism diagnosis is not the gate.',
      'You may read that Idaho "ended Medicaid funding for ABA." The rule text says something narrower. IDAPA 16.03.26 still defines CHIS as "evidence-informed or evidence-based therapeutic techniques based on applied behavior analysis principles." The August 2026 handbook still names the Behavior Analyst Certification Board as a Department-approved evidence-based model, and a BCBA or RBT still qualifies to deliver it. What changed is the billing codes, the authorization route and the provider categories. The benefit itself did not go away.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as CHIS (ABA-principles treatment), birth through the month of the 21st birthday; not on 97151–97158 CPT codes' },
      { label: 'Structure', value: 'Fee-for-service: DHW Bureau of Developmental Disability Services administers, Telligen authorizes, Gainwell pays; no MCO' },
      { label: 'Eligibility gate', value: 'Vineland-3 screening: deficits of 1.5+ SD in 3+ areas; no autism diagnosis required; order from physician, PA or NP' },
      { label: 'Assessment PA', value: 'Not before the initial ACTP (requested retroactively); annual ACTP needs PA first' },
      { label: 'Treatment PA', value: 'Required for every CHIS service; six-month reviews; up to 24 hours in 30 days allowed while the initial request is pending' },
      { label: 'Rates (per 15 min, agency)', value: 'Behavioral Intervention H0004: BCBA (TG) $24.68 · BCaBA (TF) $18.51 · RBT $14.34 (eff. 9/1/2025)' },
      { label: 'Watch', value: 'Parent/guardian wet or compliant e-signature required on PA requests since May 1, 2026; verbal consent no longer accepted' },
    ],
    sections: [
      {
        h2: 'CHIS, not "ABA": what Idaho actually covers',
        body: [
          'Idaho covers ABA-based treatment for children as Children’s Habilitation Intervention Services. The rule defines CHIS as "medically necessary, evidence-informed or evidence-based therapeutic techniques based on applied behavior analysis principles used to result in positive outcomes." The handbook says CHIS is "covered under the state plan and are not considered Home and Community Based Services (HCBS)," so there is no waiver slot or waitlist to clear. The EPSDT section of the general handbook adds that Idaho Medicaid "does not have an expenditure cap or wait list for services covered under EPSDT." The array is five services: Habilitative Skill Building (H2014), Behavioral Intervention (H0004 individual, H0005 group), Interdisciplinary Training (H2019 HT), Crisis Intervention (H2011), and the Assessment and Clinical Treatment Plan (H0032), plus an eligibility screening code (H2000). The handbook’s code tables list only these HCPCS codes, with modifiers that name the credential of the person delivering the service. The 97-series CPT codes do not appear.',
          'The December 2025 change matters for any provider who billed Magellan before. Magellan’s October 30, 2025 notice says: "Effective Dec. 1, 2025, all Behavior Modification and Consultation (BMC) services will transition to Behavioral Intervention (BI)." It lists 97151, 97152, 0362T, 97153, 0373T, 97154, 97155, 97156, 97157 and 97158 as "no longer billable through Magellan for dates of service on or after Dec. 1, 2025." Providers "must be contracted with GWT [Gainwell] in order to bill Idaho Medicaid directly for these services and must be registered with Telligen’s Provider Portal." The CHIS handbook confirms that BMC "has transitioned back to Behavioral Intervention" and is now paid fee-for-service and prior-authorized by Telligen. So when a family says their child is "on Magellan," that has nothing to do with ABA any more. Every Idaho Medicaid child follows the same CHIS workflow.',
        ],
        cites: [ID_RULE, ID_HB, ID_GEN, ID_MAG, ID_DHW_CHIS],
      },
      {
        h2: 'The front door: screening, order, then the ACTP',
        body: [
          'Eligibility is set by a screening, not a diagnosis. Under IDAPA 16.03.26.181, a need exists "when a deficit is identified in three (3) or more of the following areas: self-care; receptive and expressive language; learning; mobility; self-direction; capacity for independent living; economic self-sufficiency; or maladaptive behavior," with a deficit defined as "one-point-five (1.5) or more standard deviations below the mean for functional areas or above the mean for maladaptive behavior." The Department-approved tool is the Vineland Standard Deviations Tool using the Vineland Adaptive Behavior Scales, Third Edition. The family’s chosen CHIS provider can run it, and so can the Department, a school, a psychologist, Infant Toddler staff, a DDA or an independent assessment provider. The screening is done once. It is repeated only if the child has not used CHIS for more than 365 days, and a child already found eligible for Katie Beckett or DD services by the Independent Assessment Provider needs no separate screening.',
          'CHIS also needs an order "from a healthcare professional within their scope of practice such as a physician, physician assistant, or nurse practitioner." The order is needed only once and must be in hand before the initial PA request. Providers "cannot seek reimbursement for services more than 30 days before the signed and dated order," and a new order is needed after a 365-day gap. Then the provider completes the Assessment and Clinical Treatment Plan. The ACTP requires clinical interviews with the parent, "an objective and validated comprehensive skills or developmental assessment approved by the department" completed within the last 365 days, a review of prior reports, observation in at least one environment, a clinical summary, a reinforcement or preference assessment and a transition plan. It must be signed by the assessor and the parent or guardian.',
        ],
        cites: [ID_RULE, ID_HB],
      },
      {
        h2: 'Prior authorization through Telligen',
        body: [
          'The rule is blunt: "All CHIS ordered on a participant\'s ACTP must be prior authorized by the Department," and providers must "obtain PA before delivering any CHIS." The initial ACTP and the screening are the exception and can be requested retroactively. Once the initial request is submitted, "CHIS may be delivered for a maximum of twenty-four (24) hours and up to thirty (30) calendar days or until the PA is approved." That gives a new case a short runway. The initial request carries the order, the ACTP, the implementation-plan objectives and every requested hour with the qualification of the person delivering it. Reviews then run every six months on a cycle that does not reset. The handbook tells providers to submit ongoing requests "at a minimum of 30 calendar days before the expiration of the authorization." If the six-month request is missed, "the participant will experience a lapse in services until a PA is made." Where two providers serve one child, each files its own request for only its own units.',
          'Two 2026 notices change what a clean request looks like. Since May 1, 2026, "verbal consent documented in lieu of a parent or legal guardian signature will no longer be accepted." Requests need a handwritten or compliant electronic signature, dated. In February 2026 Telligen also warned that routine CHIS requests were being mislabeled as expedited. Expedited review is only for cases where the standard timeframe "could seriously jeopardize" life, health or function. "A delay in provider submission of an authorization request does not constitute grounds for expedited review."',
        ],
        cites: [ID_RULE, ID_HB, ID_TEL, ID_TEL_SIG, ID_TEL_EXP],
      },
      {
        h2: 'Rates and staffing: who may deliver CHIS',
        body: [
          'Idaho publishes CHIS rates by provider category and setting (effective September 1, 2025, last reviewed January 1, 2026). For Developmental Disability Agencies, individual Behavioral Intervention (H0004) pays $24.68 per 15 minutes for an EBM Intervention Professional (TG), $18.51 for an EBM Intervention Specialist (TF), $21.34 for an Intervention Professional (HO), $15.48 for an Intervention Specialist (HN), $14.34 for an EBM Intervention Paraprofessional and $13.54 for an Intervention Technician (HA). Habilitative Skill Building (H2014) pays $13.54, and the ACTP (H0032) pays $15.48 to $21.82 depending on credential. Independent providers are paid less: H0004 TG is $17.24, TF $12.94, HO $14.90 and HN $10.81. Rates include mileage.',
          'The credential mapping is the staffing key. The handbook states that "an individual who is a registered behavior technician (RBT) meets the requirements of an EBM intervention paraprofessional," a BCaBA "meets the requirements of an EBM intervention specialist," and a BCBA "or holds a master’s level certification in the Early Start Denver Model meets the requirements of an EBM intervention professional." Non-certified staff can qualify on the evidence-informed track. An Intervention Specialist needs a bachelor’s in a human services field, 1,040 supervised hours and a competency checklist or 40 hours of ABA training. An Intervention Professional needs a relevant master’s, 24 upper-division credits and 1,200 hours of experience. An Intervention Technician is a provisional, agency-only role limited to one 18-month period. Everyone needs an Idaho DHW background check and 12 hours of training a year, including one hour of ethics. Children from birth to three need providers with 240 hours of early-childhood experience plus a qualifying certificate or coursework, although EBM (BCBA/ESDM) providers are exempt from that extra requirement. Idaho has no behavior-analyst license, so the BACB credential does the work that a state license does elsewhere.',
        ],
        cites: [ID_FS_DDA, ID_FS_IND, ID_HB, ID_RULE, BACB_LIC],
      },
    ],
    collect: [
      { title: 'Vineland-3 screening (or proof of prior eligibility)', desc: 'The eligibility gate. It needs deficits of 1.5+ SD in three or more areas. A Katie Beckett or DD eligibility assessment by the Independent Assessment Provider counts instead.' },
      { title: 'Signed, dated order', desc: 'From a physician, PA or NP (Medicaid-enrolled). It is needed once, before the initial PA, and nothing more than 30 days before its date is billable.' },
      { title: 'Parent or guardian signature, wet or compliant e-signature', desc: 'Required on the ACTP and PA requests. Verbal consent has not been accepted since May 1, 2026.' },
      { title: 'Other insurance', desc: 'Medicaid pays last. Record any employer plan, TRICARE or CHAMPVA and bill it first.' },
      { title: 'Age and CHIS history', desc: 'Birth through the month of the 21st birthday. Ask whether the child used CHIS in the last 365 days, because a longer gap means a new order and screening.' },
    ],
    sources: [ID_RULE, ID_HB, ID_GEN, ID_FS_DDA, ID_FS_IND, ID_MAG, ID_TEL, ID_TEL_EXP, ID_TEL_SIG, ID_DHW_CHIS, CFR_440_230, CFR_433_139, BACB_LIC],
    deliveryRules: {
      supervision: {
        value:
          'Supervision "includes both face-to-face observation and direction to the staff regarding developmental and behavioral techniques, progress measurement, data collection, function of behaviors, and generalization of acquired skills," and "must be provided under the requirements of the EBM or each provider qualification." Crisis intervention technicians, intervention technicians and intervention specialists must be supervised by a specialist or professional who observes and reviews their services, and "Supervision must occur monthly." EBM paraprofessionals and specialists (RBTs, BCaBAs) are supervised under their model’s own standard, which for BACB credentials means BACB supervision requirements. Specialists serving children from birth to three must be supervised by someone who also meets the birth-to-three qualifications. Independent CHIS providers may not "receive supervision from an individual that they are directly supervising." Idaho sets no numeric hours-per-hours supervision ratio for CHIS.',
        status: 'verified',
        cites: [ID_RULE, ID_HB],
      },
      concurrentBilling: {
        value:
          'Duplication is not reimbursable, and services are duplicative "when more than one (1) service is provided at the same time, unless otherwise authorized," or when goals are not separate and unique to each service. A child receiving both Behavioral Intervention and Habilitative Skill Building needs two separate sets of implementation plans. 2:1 staffing can be authorized when the ACTP justifies it: one request is made for the additional staff, identified with the procedure code, the qualification modifier and the EPSDT modifier (EP). Interdisciplinary Training (H2019 HT) is by definition collaboration with the participant present between the CHIS provider and a behavioral health, medical, OT, PT or speech professional.',
        status: 'verified',
        cites: [ID_RULE, ID_HB],
      },
      dailyLimits: {
        value:
          'No per-day or per-week unit ceiling is published for CHIS. Hours are whatever the ACTP justifies and Telligen authorizes, and providers "may not seek reimbursement for more than the total number of units/hours of authorized services per week." Providers can ask for the weekly total to be used interchangeably across provider qualification types. Structural limits: group services run at one staff to two or three participants; crisis intervention is short-term, 30 days or less; the screening is billable once for a maximum of one hour (four units); and pending the initial PA, services are capped at 24 hours within 30 calendar days.',
        status: 'verified',
        cites: [ID_RULE, ID_HB],
      },
      noteSignature: {
        value:
          'Each visit or service must document the date, time and duration; a session summary (and for interdisciplinary training, who received it and the content); data matching the implementation plan; the location; and the "signature of the individual providing the service, date signed, and provider’s credentials." Records must be created at the time of service, and "records limited to checklists with attendance/appointments, procedure codes, and units of time are insufficient." The ACTP is signed by the assessor and the parent or legal guardian (or a person with parental power of attorney). Implementation plans are signed by a qualified provider, and the provider must document that a copy was offered to the parent. Since May 1, 2026, PA requests need a dated handwritten or compliant electronic parent or guardian signature, not documented verbal consent.',
        status: 'verified',
        cites: [ID_RULE, ID_HB, ID_TEL_SIG],
      },
      placeOfService: {
        value:
          'CHIS "may be delivered in the community, the participant\'s home, or in a DDA," and a certified residential facility counts as a home. Community means "natural, integrated environments outside the participant’s home, outside of DDA center-based settings, or at school outside of school hours." Educational services are excluded from Medicaid payment, meaning services in school buildings during the normal school day, services on the IEP, or services required by education law for ages 3 to 21. School-based CHIS runs through the separate School-Based Medicaid program. Crisis intervention is delivered in the home, school or community and can move into a DDA center only when needs cannot be met there. Recreation itself is not paid, but intervention delivered in the community while the child takes part is.',
        status: 'verified',
        cites: [ID_RULE, ID_HB],
      },
      billAsProvider: {
        value:
          'CHIS is billed by a certified Developmental Disability Agency or by an enrolled independent CHIS provider. Independent enrollment is open to Intervention Specialists, Intervention Professionals and EBM Specialists or Professionals, not technicians. Intervention Technicians and EBM Paraprofessionals (RBTs) deliver only as DDA employees. The rendering credential rides on the modifier: HA Intervention Technician, HN Intervention Specialist, HO Intervention Professional, TF EBM Intervention Specialist (BCaBA), TG EBM Intervention Professional (BCBA/ESDM), and no modifier for the EBM Paraprofessional on H0004 and H0005. An agency may reassign an authorization to a higher-qualified staff member and bill at the authorized rate, but not the reverse. Habilitative Skill Building is one code with no credential modifier, so any qualified staff can deliver it on the agency’s authorization. Ordering providers must themselves be enrolled in Idaho Medicaid.',
        status: 'verified',
        cites: [ID_HB, ID_RULE, ID_FS_DDA],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Birth through the month of the 21st birthday. There is no lower age limit, but specialists and professionals serving children from birth to three must meet added early-childhood qualifications unless they are EBM (BCBA or ESDM) providers. Participants aged 18 to 21 may be able to receive both CHIS and adult DD services, and the handbook’s crosswalk rules out adult behavioral consultation/crisis management and high or intense supported living as duplicative.',
        status: 'verified',
        cites: [ID_RULE, ID_HB, ID_DHW_CHIS],
      },
      dxRecency: {
        value: 'No diagnosis is required, so there is no diagnosis-age rule. The recency clocks are: the ACTP’s comprehensive skills or developmental assessment must be "completed within the last 365 days"; the order and the screening are needed once but must be redone after more than 365 days without CHIS; and services are not billable more than 30 days before the signed order.',
        status: 'verified',
        cites: [ID_RULE, ID_HB],
      },
      diagnosingProviders: {
        value: 'No diagnosing clinician is required. Eligibility is set by the Department-approved screening, which may be done by the family’s chosen CHIS provider, the Department, an independent assessment provider, a school, a psychologist, the DHW Crisis Prevention and Court Services team, Infant Toddler staff, a DDA or an independent CHIS provider. The ACTP is completed by an Intervention Specialist (with 10 hours of assessment training plus 5 supervised hours), an Intervention Professional, or an EBM Specialist or Professional. The EPSDT route in the general handbook requires only that the condition be "diagnosed by a physician, therapist, or other licensed practitioner operating within the scope of their licensure."',
        status: 'verified',
        cites: [ID_HB, ID_GEN],
      },
      diagnosticTools: {
        value: 'The eligibility screening is "the current version of the Vineland Standard Deviations Tool" using the Vineland Adaptive Behavior Scales, Third Edition, "administered under its protocol." It must show deficits of 1.5+ standard deviations in three or more of eight areas. The ACTP must then use "an objective and validated comprehensive skills or developmental assessment approved by the department," listed on the Department’s ACTP Tools form, in its most current version.',
        status: 'verified',
        cites: [ID_HB, ID_RULE],
      },
      referral: {
        value: 'Yes. CHIS must be ordered "by a healthcare professional within their scope of practice such as a physician, physician assistant and nurse practitioner." The order is required once, before the initial PA request, and must be renewed after a gap of more than 365 days without CHIS. Services more than 30 days before the signed order are not billable. The ordering provider must be enrolled with Idaho Medicaid: "Any service ordered, prescribed, or referred by a provider who is not an enrolled Medicaid provider will not be reimbursed." The Healthy Connections primary-care referral program was removed from the handbook in December 2025.',
        status: 'verified',
        cites: [ID_HB, ID_RULE, ID_GEN],
      },
      telehealth: {
        value: 'Only one CHIS service is named as virtual-care eligible: "Crisis intervention is an eligible virtual care service," following the general handbook’s virtual care rules. Those rules require real-time video or audio, the GT (audio-video) or FQ (audio-only) modifier, POS 02 or 10, consent, and payment at the face-to-face rate. The CHIS handbook does not say whether Behavioral Intervention, Habilitative Skill Building or the ACTP may be delivered virtually.',
        status: 'unverified',
        cites: [ID_HB, ID_GEN],
        verifyVia: 'BDDS Children’s Program (Children’sDDIntake@dhw.idaho.gov, 208-334-6500) or Telligen (866-538-9510): ask in writing whether H0004, H2014 or H0032 may be delivered via virtual care under CHIS, and get the answer in writing before scheduling remote sessions.',
        blocker: 'document',
      },
      authTurnaround: {
        value:
          'The published Idaho sources do not agree, and the federal floor is stricter than both. The CHIS handbook says "the department or its contractor reviews the documents submitted within 10 business days," and gives the provider 10 business days to answer a request for missing information. Telligen’s 2025 manual lists CHIS pre-service review at "Non-urgent: 10 business days" and "Urgent/Crisis: 3 business days." Telligen’s February 2026 memo says its "standard review times align with the CMS rule of seven business days." The federal rule, 42 CFR 440.230(e), actually says that from January 1, 2026 a state agency must decide a standard request "in no case later than 7 calendar days after receiving the request" (extendable by up to 14 days) and an expedited one within 72 hours. Plan around the handbook’s timing: submit continuations at least 30 calendar days before the authorization ends, and use the 24-hour / 30-day allowance for new cases. Crisis intervention can be requested within 72 hours after it starts.',
        status: 'verified',
        cites: [ID_HB, ID_TEL, ID_TEL_EXP, CFR_440_230],
      },
      coordinationOfBenefits: {
        value:
          'Medicaid pays last. Under the provider agreement, a provider "agrees to seek payment first from all other applicable sources of payment prior to submitting a claim" and acknowledges "MEDICAID as the payer of last resort"; IDAPA 16.03.26.026.05 says "Medicaid providers must bill all other sources of direct third-party payment." When another plan has paid, Medicaid pays the lowest of the provider’s charge, the Medicaid maximum, or "the third-party allowed amount minus the third-party payment." Two exceptions in the rule matter for this population. Preventive pediatric EPSDT care is paid and chased. The rule also lists "when PA has been approved under these rules, treatment services to control, correct, or ameliorate health problems found through diagnosis and screenings" among its exceptions. Do not rely on that for CHIS without written confirmation, because the handbook still points CHIS providers to the requirements for "billing all other third-party resources before submitting claims to Medicaid." The Medicaid CHIS prior authorization is still required when Medicaid is secondary, since the rule makes no exception for it. For commercial ABA the child’s other plan will usually bill 97-series codes, while Medicaid pays CHIS H-codes, so confirm how Gainwell crosswalks the primary payer’s payment. A provider "cannot refuse to furnish SERVICES to a participant if a third-party is potentially liable." TRICARE pays before other coverage except Medicaid, so Medicaid is still last. CHAMPVA pays last after other health insurance.',
        status: 'verified',
        cites: [ID_GEN, ID_RULE, ID_HB, CFR_433_139, TRICARE_1079, CHAMPVA_270],
      },
    },
    faq: [
      { q: 'Does Idaho Medicaid cover ABA therapy?', a: 'Yes, as Children’s Habilitation Intervention Services (CHIS), which the rule defines as therapeutic techniques "based on applied behavior analysis principles." It covers children from birth through the month of their 21st birthday. It is billed on HCPCS H-codes, not the 97151–97158 CPT codes, and it is prior-authorized by Telligen.' },
      { q: 'Does my child need an autism diagnosis for Idaho Medicaid ABA?', a: 'No. CHIS eligibility is functional: a Vineland-3 screening showing deficits of 1.5 or more standard deviations in three or more areas, plus an order from a physician, PA or NP. A child with a functional need and no autism diagnosis can qualify.' },
      { q: 'We have Magellan. Does ABA go through them?', a: 'Not since December 1, 2025. Magellan stopped authorizing and paying 97151–97158. Those services became Behavioral Intervention under CHIS, billed fee-for-service to Gainwell with Telligen prior authorization. Idaho has no Medicaid managed-care plan that handles ABA for children.' },
      { q: 'Can a BCBA or RBT bill Idaho Medicaid?', a: 'Yes, through the evidence-based model track. A BCBA qualifies as an EBM Intervention Professional (modifier TG), a BCaBA as an EBM Intervention Specialist (TF), and an RBT as an EBM Intervention Paraprofessional. RBTs may deliver only as employees of a Developmental Disability Agency.' },
      { q: 'What does Idaho Medicaid pay?', a: 'For agencies, individual Behavioral Intervention (H0004) pays $24.68 per 15 minutes for a BCBA-level EBM professional, $18.51 for an EBM specialist and $14.34 for an RBT-level paraprofessional (effective 9/1/2025). Independent providers receive lower rates, for example $17.24 for H0004 TG.' },
    ],
  },

  'blue-cross-of-idaho': {
    slug: 'blue-cross-of-idaho',
    family: 'bcbs',
    cardDesc: 'Idaho’s largest local carrier: no published commercial ABA policy, ABA PA listed for FEP only, Bulletin 18-02 as the coverage floor.',
    assessmentPA: {
      value: 'Not listed for commercial members — PAP902 names ABA as requiring PA "for Federal Employee Program (FEP)" only; group and ASC plans may adopt none, some or all of BCI’s behavioral health management program',
      status: 'plan-dependent',
      cites: [BCI_PAP902],
      verifyVia: 'Blue Cross of Idaho’s Prior Authorization Procedure Code Lookup tool on providers.bcidaho.com, or customer service on the member card — ask whether this group requires PA for 97151 and treatment codes.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'FEP: required, 6-month authorizations on form 12-302 (InterQual criteria). Commercial: not listed in PAP902; group-specific',
      status: 'plan-dependent',
      cites: [BCI_PAP902, BCI_FEP_FORM],
      verifyVia: 'Blue Cross of Idaho Prior Authorization Procedure Code Lookup tool, or the online benefit summary for the member’s group; BCI does not accept retrospective authorizations, so check before the first session.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes for the Bulletin 18-02 coverage floor — treatment for an individual "diagnosed with an autism spectrum disorder," prescribed by a licensed physician or psychologist; BCI publishes no commercial ABA criteria of its own',
      status: 'verified',
      cites: [ID_BULLETIN, BCI_PAP902],
    },
    payer: 'Blue Cross of Idaho',
    state: 'ID', kind: 'commercial',
    pill: 'Payer Guide · Blue Cross of Idaho',
    h1: 'Blue Cross of Idaho ABA coverage: the intake guide.',
    metaTitle: 'Blue Cross of Idaho ABA Coverage: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Blue Cross of Idaho handles ABA: prior authorization listed for Federal Employee Program members only, no published commercial ABA medical policy, Idaho’s Bulletin 18-02 in place of an autism statute, and what intake must verify group by group.',
    intro: [
      'Blue Cross of Idaho is the state’s home Blue plan and the card an Idaho intake team sees most often. It is also the least documented carrier in this guide for ABA. We searched BCI’s provider site and found no commercial ABA medical policy. Its behavioral health prior-authorization policy (PAP902, revised April 2026) lists ABA as requiring prior authorization only for Federal Employee Program members. For everyone else, the group’s own benefit design and Idaho’s Bulletin 18-02 decide the answer. That makes benefits verification the whole job with a BCI card.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'On state-regulated plans with rehab/habilitative benefits, yes under Bulletin 18-02; self-funded groups set their own terms' },
      ...ID_MANDATE_GLANCE,
      { label: 'Prior auth', value: 'Listed for FEP only (PAP902); commercial groups vary — check the PA lookup tool' },
    ],
    sections: [
      {
        h2: 'What Blue Cross of Idaho publishes, and what it does not',
        body: [
          'BCI’s Provider Administrative Policy PAP902 lists the behavioral health services that need prior authorization. ABA appears only as "Applied behavioral analysis (ABA) - requires PA for Federal Employee Program (FEP)," and "Requests for ABA for FEP members must meet medical necessity criteria as outlined in the InterQual criteria." The same policy warns that "Blue Cross of Idaho groups and ASC policy holders may accept all, some, or none of Blue Cross of Idaho`s Behavioral Health Management program." Its mental-health coverage policy, MP 3.01.501, does not mention ABA. Its only ABA authorization forms on the provider site are marked "Federal Employee Program Only." The FEP form approves "a 6 month period" and says "ABA Service Provided within an Educational Facility is a contract exclusion and not covered."',
          'The practical consequence is simple. For a BCI commercial member, no public BCI document tells you whether ABA needs authorization or what the clinical criteria are, so check the group every time. PAP241 adds two BCI-wide rules that bite if you guess wrong: "Blue Cross of Idaho does not accept requests for retrospective authorizations," and elective requests "must be submitted at least 14 days prior to the scheduled date of service."',
        ],
        cites: [BCI_PAP902, BCI_PAP241, BCI_FEP_FORM, BCI_MP301501],
      },
      {
        h2: 'The Idaho coverage floor: Bulletin 18-02, not a statute',
        body: [ID_MANDATE_SECTION_BODY],
        cites: [ID_BULLETIN],
      },
      {
        h2: 'Licensure & rates in Idaho',
        body: [
          'Idaho has no behavior-analyst licensure law. It does not appear on the BACB’s list of states that license or regulate behavior analysts, so BACB certification is the working credential. Blue Cross of Idaho publishes no ABA fee schedule, and commercial rates are negotiated in your provider agreement. Idaho Medicaid’s published CHIS rates are a weak benchmark, because they use H-codes rather than the 97-series.',
        ],
        cites: [BACB_LIC],
      },
    ],
    collect: [
      { title: 'Plan funding type and group', desc: 'Fully insured (Bulletin 18-02 applies) or self-funded. BCI says groups and ASC policy holders may adopt none, some or all of its behavioral health management.' },
      { title: 'FEP or not', desc: 'FEP members need PA on form 12-302 under InterQual criteria, with 6-month approvals and no ABA in educational facilities.' },
      { title: 'Member ID + card photo', desc: 'Run the PA procedure-code lookup and a benefits check before the first session. BCI accepts no retrospective authorizations.' },
      { title: 'Diagnosis and prescription', desc: 'Bulletin 18-02 keys coverage to care "prescribed or ordered" by a licensed physician or psychologist for a child diagnosed with ASD.' },
      { title: 'Other coverage', desc: 'Medicaid (CHIS), TRICARE or a second parent’s plan changes the billing order. Idaho uses the birthday rule for children on two parents’ plans.' },
    ],
    sources: [BCI_PAP902, BCI_PAP241, BCI_FEP_FORM, BCI_MP301501, ID_BULLETIN, BACB_LIC, ID_3930, ERISA_503, ID_COB_RULE],
    deliveryRules: {
      supervision: {
        value: 'No commercial ABA supervision standard is published by Blue Cross of Idaho. The FEP-only request form asks providers to attest to qualifications such as the case being supervised by a state-licensed or Board Certified Behavior Analyst, and to their planned supervision frequency, but the clinical rules behind it are InterQual criteria, which are licensed and not public.',
        status: 'unverified',
        cites: [BCI_FEP_FORM, BCI_PAP902],
        verifyVia: 'Blue Cross of Idaho behavioral health (208-331-7535 / 800-743-1871) or the provider agreement — ask what supervision ratio BCI applies to ABA for this group; for FEP, the InterQual ABA criteria apply.',
        blocker: 'licensed',
      },
      concurrentBilling: {
        value: 'Not addressed in any public Blue Cross of Idaho document we could find.',
        status: 'unverified',
        cites: [BCI_PAP902],
        verifyVia: 'Blue Cross of Idaho Provider Relations or the provider agreement — ask whether 97153 and 97155 may be billed for the same clock time.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week ABA cap is published for commercial members. Bulletin 18-02 bars "any separate dollar limits or visit limits" on autism treatment in state-regulated plans. On the FEP form BCI approves ABA in 6-month periods by requested units.',
        status: 'plan-dependent',
        cites: [ID_BULLETIN, BCI_FEP_FORM],
        verifyVia: 'Benefits verification on the member ID — ask for any hour or unit limits in this group’s behavioral health benefit.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not addressed in any public Blue Cross of Idaho ABA document.',
        status: 'unverified',
        cites: [BCI_PAP902],
        verifyVia: 'The Blue Cross of Idaho provider agreement and documentation standards in the Provider Administrative Policies.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'For FEP members, "ABA Service Provided within an Educational Facility is a contract exclusion and not covered." Commercial settings are group-specific. No public BCI commercial ABA policy restricts setting.',
        status: 'plan-dependent',
        cites: [BCI_FEP_FORM],
        verifyVia: 'Benefits verification — ask whether home, clinic, community and school settings are covered for ABA on this group.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Not published for commercial ABA. The FEP form collects a "BCBA Provider and Contact Number" and asks whether all direct treatment providers are credentialed for independent practice of ABA.',
        status: 'unverified',
        cites: [BCI_FEP_FORM],
        verifyVia: 'Blue Cross of Idaho Provider Relations — ask whether technician-delivered 97153 is billed under the supervising BCBA’s NPI and which credentials BCI enrolls.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'No age limit in any BCI document or in Bulletin 18-02, which sets none. A self-funded group may write its own age terms.',
        status: 'plan-dependent',
        cites: [ID_BULLETIN, BCI_PAP902],
        verifyVia: 'Benefits verification — establish fully insured vs. self-funded, then the plan’s age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'BCI publishes no commercial rule on how recent the diagnosis must be. FEP requests use InterQual criteria, which are not public.',
        status: 'unverified',
        cites: [BCI_PAP902],
        verifyVia: 'Blue Cross of Idaho behavioral health review — ask whether a diagnostic report of a given age is accepted.',
        blocker: 'licensed',
      },
      diagnosingProviders: {
        value: 'Bulletin 18-02 frames covered treatment as care "prescribed or ordered for an individual diagnosed with an autism spectrum disorder by a licensed physician or a licensed psychologist." BCI publishes no narrower commercial list.',
        status: 'plan-dependent',
        cites: [ID_BULLETIN],
        verifyVia: 'Blue Cross of Idaho behavioral health — confirm which diagnosing credentials the group accepts.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'No instrument requirement is published by BCI for commercial ABA. FEP reviews apply InterQual criteria.',
        status: 'unverified',
        cites: [BCI_PAP902],
        verifyVia: 'Blue Cross of Idaho behavioral health review line (208-331-7535).',
        blocker: 'licensed',
      },
      referral: {
        value: 'BCI requires no separate referral for ABA in any public document. The coverage floor, Bulletin 18-02, covers treatment "prescribed or ordered" by a licensed physician or psychologist, so get a written prescription.',
        status: 'verified',
        cites: [ID_BULLETIN, BCI_PAP902],
      },
      telehealth: {
        value: 'Not addressed for ABA in any public BCI document.',
        status: 'unverified',
        cites: [BCI_PAP902],
        verifyVia: 'Blue Cross of Idaho customer service or Provider Relations — ask which ABA codes are payable by telehealth on this group and with which POS and modifier.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Turns on how the plan is funded. Idaho’s Managed Care Reform Act requires a managed care organization to "respond to member or provider requests for prior authorization of a nonemergency service within two (2) business days after complete member medical information is provided," "unless exceptional circumstances warrant a longer period," and makes an obtained approval final once the service is provided, except for fraud, nonpayment or loss of eligibility (Idaho Code § 41-3930). Self-funded ERISA plans follow 29 CFR 2560.503-1: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, and urgent claims within 72 hours. BCI asks for elective requests "at least 14 days prior to the scheduled date of service" and accepts no retrospective authorizations.',
        status: 'plan-dependent',
        cites: [ID_3930, ERISA_503, BCI_PAP241],
        verifyVia: 'At benefits verification ask whether the plan is fully insured or self-funded, then confirm BCI’s turnaround for this group.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two parents’ plans, Idaho’s coordination-of-benefits rule (IDAPA 18.04.14.022) makes "the plan of the parent whose birthday falls earlier in the calendar year" primary, with separate court-decree and custody rules for parents who are not living together. Self-funded plans follow their own documents. If the child also has Idaho Medicaid, this plan pays first because Medicaid is the payer of last resort. Get BCI’s authorization anyway, since Medicaid needs the primary’s determination, and remember Medicaid pays CHIS on H-codes. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)), and CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [ID_COB_RULE, ID_GEN, TRICARE_1079, CHAMPVA_270],
        verifyVia: 'Ask Blue Cross of Idaho at benefits verification for the coordination-of-benefits order on file, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Blue Cross of Idaho cover ABA therapy?', a: 'On state-regulated plans that cover rehabilitative or habilitative services, Idaho’s Bulletin 18-02 bars excluding autism treatment. Self-funded groups set their own terms. BCI publishes no commercial ABA medical policy, so verify the member’s group every time.' },
      { q: 'Does Blue Cross of Idaho require prior authorization for ABA?', a: 'Its behavioral health PA policy (PAP902) lists ABA as requiring PA for Federal Employee Program members, with InterQual criteria and 6-month approvals. For commercial groups it is group-specific. Check BCI’s PA procedure-code lookup, because BCI does not accept retrospective authorizations.' },
      { q: 'Does Idaho have an autism insurance mandate?', a: 'Not by statute. Idaho relies on Department of Insurance Bulletin No. 18-02 (2018), which treats an autism-treatment exclusion as prohibited discrimination when a plan covers rehabilitative or habilitative services, and bars separate dollar or visit limits.' },
    ],
  },

  'regence-blueshield-of-idaho': {
    slug: 'regence-blueshield-of-idaho',
    family: 'bcbs',
    cardDesc: 'Regence BH18/BH33 with an Idaho-specific form: no assessment PA except FEP, 6-month treatment auths, one standardized assessment required.',
    assessmentPA: {
      value: 'Not required except for FEP — Idaho form 5385ID marks the ABA Assessment request "only required for (FEP) Federal Employee Program"; BH33 applies only to contracts subject to preauthorization of the initial assessment',
      status: 'verified',
      cites: [REG_FORM, REG_BH33],
    },
    treatmentPA: {
      value: 'Required where the group contract carries ABA preauthorization — 6-month (26-week) authorizations; continuation due within 5 business days before, and no more than 30 days before, the end date',
      status: 'plan-dependent',
      cites: [REG_BH18, REG_FORM],
      verifyVia: 'Regence’s preauthorization list for the member contract (via Availity) — BH18 "only applies to member contracts that are subject to preauthorization" for ABA.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes — ASD diagnosed by a qualified treating health care professional as defined by state law (e.g., pediatrician, pediatric neurologist, developmental pediatrician, psychologist)',
      status: 'verified',
      cites: [REG_BH18, REG_BH33],
    },
    payer: 'Regence BlueShield of Idaho',
    state: 'ID', kind: 'commercial',
    pill: 'Payer Guide · Regence BlueShield of Idaho',
    h1: 'Regence BlueShield of Idaho ABA coverage: the intake guide.',
    metaTitle: 'Regence BlueShield of Idaho ABA Coverage: Prior Auth Guide | Carelu',
    metaDescription:
      'How Regence BlueShield of Idaho covers ABA: medical policies BH18 and BH33, the Idaho request form 5385ID (no assessment PA except FEP, 6-month authorizations), the required standardized assessment, Idaho’s Bulletin 18-02 and what intake should collect.',
    intro: [
      'Regence BlueShield of Idaho is Idaho’s second Blue plan, and unlike Blue Cross of Idaho it publishes a full ABA rulebook. There are two medical policies, BH18 for treatment and BH33 for the initial assessment, and they name Idaho’s Bulletin 18-02 as their Idaho legal basis. There is also an Idaho-specific request form (5385ID, effective May 2026). The short version: no authorization for the assessment unless the member is on the Federal Employee Program, a documented prescription and at least one standardized assessment for treatment, and six-month authorizations.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD under BH18/BH33 on contracts with the benefit (Idaho basis: Bulletin 18-02)' },
      ...ID_MANDATE_GLANCE,
      { label: 'Prior auth', value: 'Assessment: FEP only. Treatment: yes where the contract requires it; 6-month authorizations' },
    ],
    sections: [
      {
        h2: 'The Regence rulebook, applied in Idaho',
        body: [
          'BH18 applies to "member contracts with applicable benefits" subject to named state laws, including "Idaho’s Clarification Regarding Coverage of Treatments for Autism Spectrum Disorder (Bulletin No. 18-02)." It says a certified treating provider "in Idaho" is "a credentialed provider with a Board-Certified Behavioral Analysis (BCBA) certification issued by the Behavioral Analyst Certification Board." Initiation requires a documented ABA assessment, an ASD diagnosis "by a qualified treating health care professional, as defined by state law," symptoms that make the member "a safety risk to self or others and/or" unable "to participate in age-appropriate home or community activities," and ABA "recommended or prescribed by a qualified treating health care professional experienced in the diagnosis and treatment of ASD." It also requires an eight-part individualized treatment plan with at least one standardized assessment per targeted behavior. Continuation requires measured progress, objective measurement at least every six months and standardized assessments annually. ABA "used for educational, vocational or custodial purposes" is not medically necessary.',
          'The Idaho form 5385ID turns this into a checklist. The assessment request box is "only required for (FEP) Federal Employee Program." "Authorizations are for 6 months (26 weeks)," units are requested per six months, and "≥1 standardized assessment (required; curriculum-based alone is insufficient)." The form also flags that "there is very little evidence to support the efficacy of ABA for people 13 years and older," so requests for a member 13 or older need extra justification. Submissions go through Availity, by email to FAXBHRepository@regence.com, or by fax to 888-496-1540. Regence has announced a revised BH18 effective November 1, 2026. We could not retrieve the revised text, so re-check the policy for requests starting on or after that date.',
        ],
        cites: [REG_BH18, REG_BH33, REG_FORM],
      },
      {
        h2: 'The Idaho coverage floor: Bulletin 18-02, not a statute',
        body: [ID_MANDATE_SECTION_BODY],
        cites: [ID_BULLETIN],
      },
      {
        h2: 'Licensure & rates in Idaho',
        body: [
          'Idaho has no behavior-analyst licensure law and is not on the BACB’s list of licensing states. That is why Regence’s policy defines the Idaho treating provider by BACB certification rather than a state license. Regence publishes no ABA fee schedule, and rates are negotiated in the provider agreement.',
        ],
        cites: [BACB_LIC, REG_BH18],
      },
    ],
    collect: [
      { title: 'ASD diagnosis + functional impairment', desc: 'From a qualified treating professional (pediatrician, pediatric neurologist, developmental pediatrician, psychologist), showing safety risk or inability to join age-appropriate activities.' },
      { title: 'Written ABA recommendation or prescription', desc: 'Required by BH18 and BH33, and listed on form 5385ID.' },
      { title: 'A standardized assessment', desc: 'For example Vineland-3 or ABAS-3. Curriculum-based tools (VB-MAPP, ABLLS-R, PEAK) alone do not satisfy the form.' },
      { title: 'Prior ABA history', desc: 'BH18 asks for the most recent date of service with any previous ABA provider and the reason for discharge.' },
      { title: 'FEP or not, and plan funding type', desc: 'FEP members need assessment PA. Self-funded groups may differ from the fully insured rules.' },
    ],
    sources: [REG_BH18, REG_BH33, REG_FORM, ID_BULLETIN, BACB_LIC, ID_3930, ERISA_503, ID_COB_RULE],
    deliveryRules: {
      supervision: {
        value: 'BCBAs and BCBA-Ds "are considered independently qualified providers and may oversee all aspects of assessment, treatment planning, and supervision of support staff in accordance with BACB guidelines." BCaBAs "must work under the supervision of a BCBA or BCBA-D." Behavior analysts in training must be supervised by a BCBA or BCBA-D. Behavior Technicians and RBTs "must be under the ongoing supervision of a BCBA, BCBA-D, or qualified supervisor." "All supervision must be conducted in accordance with the Behavior Analyst Certification Board’s Professional and Ethical Compliance Code and current supervision standards." No numeric ratio is set, but the treatment plan must justify the "hours per week of direct face-to-face supervision," and "clinical justification is required for excessive hours" of supervision.',
        status: 'verified',
        cites: [REG_BH18],
      },
      concurrentBilling: {
        value: 'Not addressed in BH18 (eff. 8/1/2025) or BH33. Regence’s revised BH18 takes effect November 1, 2026, and we could not retrieve its text to check for a concurrent-provider rule.',
        status: 'unverified',
        cites: [REG_BH18],
        verifyVia: 'The revised Regence BH18 (effective 11/1/2026) on regence.com medical policy, or Regence behavioral health UM — ask whether 97153 and 97155 may be billed for the same time and whether more than one ABA provider may hold an authorization at once.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No numeric cap. The treatment plan must give "clinical justification for the number of days per week and hours per day of direct ABA services," and requested intensity must rest on individual need. "Dosage recommendations must not be based solely on diagnosis, caregiver availability, or scheduling preferences." Excessive hours of supervision, assessment, social skills or parent training need clinical justification. Units are requested per 6-month authorization (the form’s example: 10 hours a week of 97153 is 40 units a week and 1,040 units per 26 weeks).',
        status: 'verified',
        cites: [REG_BH18, REG_FORM],
      },
      noteSignature: {
        value: 'BH18 and form 5385ID set treatment-plan content and require the requesting provider’s name, license information and signature on the request. Neither says who must sign session notes or by when.',
        status: 'unverified',
        cites: [REG_BH18, REG_FORM],
        verifyVia: 'The Regence provider manual and participating agreement (documentation standards).',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Form 5385ID lists office, home, telehealth, community setting and other as places of service, and notes "School is not an eligible place of service for Federal Employee Program (FEP) policies." BH18 treats ABA "used for educational, vocational or custodial purposes" as not medically necessary.',
        status: 'verified',
        cites: [REG_FORM, REG_BH18],
      },
      billAsProvider: {
        value: 'In Idaho the certified treating provider is "a credentialed provider with a Board-Certified Behavioral Analysis (BCBA) certification," and the individualized treatment plan must be "prepared by a treating provider who is certified to provide ABA therapy." BCaBAs "may not practice independently," and technicians "implement treatment protocols but do not design programs or perform independent assessments." Requests are submitted by the agency with a named BCBA or rendering provider (NPI and tax ID) on form 5385ID.',
        status: 'verified',
        cites: [REG_BH18, REG_FORM],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'No age cap in BH18 or BH33. Form 5385ID warns that "there is very little evidence to support the efficacy of ABA for people 13 years and older" and asks for added justification for members 13 or older, such as severe risk of injury related to ASD. Bulletin 18-02 sets no age limit.',
        status: 'verified',
        cites: [REG_FORM, REG_BH18, ID_BULLETIN],
      },
      dxRecency: {
        value: 'No recency window for the diagnosis. The clocks run on the data: objective measurement of treatment goals at least every six months, standardized assessments of treatment goals annually, and baseline and current data dated on the treatment plan.',
        status: 'verified',
        cites: [REG_BH18, REG_FORM],
      },
      diagnosingProviders: {
        value: 'A "qualified treating health care professional (e.g. pediatrician, pediatric neurologist, developmental pediatrician, psychologist), as defined by state law." The same category must recommend or prescribe ABA, and must be "experienced in the diagnosis and treatment of autism."',
        status: 'verified',
        cites: [REG_BH33, REG_BH18],
      },
      diagnosticTools: {
        value: 'No diagnostic instrument is named. For treatment, each targeted behavior needs objective measurement and "at least one standardized assessment," with examples of SRS-2, Vineland-3, ABAS-3, SSIS, BRIEF-2 and PDDBI. Curriculum or criterion-referenced tools (VB-MAPP, PEAK, ABLLS-R, AFLS, MOTAS) are encouraged for planning, but form 5385ID says they do not replace the standardized requirement.',
        status: 'verified',
        cites: [REG_BH18, REG_FORM],
      },
      referral: {
        value: 'Yes. BH18 and BH33 require a "written recommendation, clinical order, or prescription for ABA services" from a qualified treating health care professional. Bulletin 18-02 separately frames covered treatment as care "prescribed or ordered" by a licensed physician or psychologist.',
        status: 'verified',
        cites: [REG_BH18, REG_BH33, ID_BULLETIN],
      },
      telehealth: {
        value: 'Form 5385ID lists "Telehealth" as a place of service for ABA requests, but neither BH18 nor BH33 says which ABA codes may be delivered remotely.',
        status: 'plan-dependent',
        cites: [REG_FORM],
        verifyVia: 'Regence behavioral health UM (via Availity) — ask which ABA codes are payable by telehealth for this contract and with which POS/modifier.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Turns on how the plan is funded. Idaho’s Managed Care Reform Act requires a managed care organization to answer a nonemergency prior-authorization request "within two (2) business days after complete member medical information is provided," "unless exceptional circumstances warrant a longer period" (Idaho Code § 41-3930). Self-funded ERISA plans follow 29 CFR 2560.503-1: 15 days, one 15-day extension, and 72 hours for urgent claims. Regence’s own lead time for continuations: submit "within five business days prior to the end of a current authorization (and no more than 30 days prior to the end of the authorization period)." The form carries an expedited box for cases where waiting "could place the member’s life, health, or ability to regain maximum function in serious jeopardy."',
        status: 'plan-dependent',
        cites: [ID_3930, ERISA_503, REG_BH18, REG_FORM],
        verifyVia: 'At benefits verification ask whether the plan is fully insured or self-funded, then confirm Regence’s decision timeframe for this contract.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two parents’ plans, Idaho’s rule (IDAPA 18.04.14.022) makes "the plan of the parent whose birthday falls earlier in the calendar year" primary, with separate rules for divorced or separated parents. Self-funded plans follow their own documents. If the child also has Idaho Medicaid, this plan pays first because Medicaid is the payer of last resort. Keep Regence’s authorization in place, and note that Medicaid pays CHIS on H-codes. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)), and CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [ID_COB_RULE, ID_GEN, TRICARE_1079, CHAMPVA_270],
        verifyVia: 'Ask Regence at benefits verification for the coordination-of-benefits order on file, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Regence BlueShield of Idaho require prior authorization for the ABA assessment?', a: 'Not unless the member is on the Federal Employee Program. The Idaho request form marks the assessment request "only required for (FEP)." Treatment requests need authorization where the contract carries ABA preauthorization, in 6-month periods.' },
      { q: 'What assessment does Regence require for ABA treatment?', a: 'At least one standardized assessment, such as Vineland-3 or ABAS-3. Curriculum-based tools like VB-MAPP or ABLLS-R are encouraged for planning, but on their own they are "insufficient" per form 5385ID.' },
      { q: 'Does Regence cover ABA for teenagers?', a: 'There is no age cap, but the Idaho form says evidence for people 13 and older is limited and asks for added justification, such as severe risk of injury related to ASD.' },
    ],
  },

  'aetna-idaho': {
    slug: 'aetna-idaho',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA guide + precert list, on top of Idaho’s Bulletin 18-02 in place of an autism statute.',
    assessmentPA: {
      value: 'Required — Aetna’s behavioral health precertification list names ABA codes 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T',
      status: 'verified',
      cites: [AETNA_PRECERT],
    },
    treatmentPA: {
      value: 'Required — precertification per the same list; progress re-evaluated every six months (reauthorization interval set per plan)',
      status: 'plan-dependent',
      cites: [AETNA_PRECERT, AETNA_GUIDE],
      verifyVia: 'Availity or the precertification number on the member card — confirm ABA precertification and the authorization span for this plan; self-funded plans may carve behavioral health out.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes — DSM-5 ASD (ICD-10 F84.0; F84.3–F84.9) obtained by an appropriate provider',
      status: 'verified',
      cites: [AETNA_GUIDE],
    },
    payer: 'Aetna in Idaho',
    state: 'ID', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Idaho',
    h1: 'Aetna ABA coverage in Idaho: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Idaho: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Idaho families: the national medical necessity guide and precertification list, Idaho’s Bulletin 18-02 in place of an autism statute, Idaho’s lack of behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an Idaho intake team, an Aetna card means Aetna’s national ABA rules on top of Idaho’s unusual legal floor. Idaho has no autism statute, only Department of Insurance Bulletin 18-02, and the plan’s funding type decides whether even that applies. Aetna publishes no Idaho-specific ABA document, so the national guide plus the bulletin is the whole picture.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD per Aetna’s national ABA medical necessity guide' },
      ...ID_MANDATE_GLANCE,
    ],
    sections: [
      {
        h2: 'The national policy, applied in Idaho',
        body: [
          'Aetna’s precertification list for participating behavioral health providers (effective August 1, 2024) names every ABA code: 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T. Requests go through Availity. The ABA medical necessity guide requires a DSM-5 ASD diagnosis (F84.0; F84.3–F84.9) "obtained by an appropriate provider," services "provided directly or billed by the appropriately licensed provider," and "functional impairment on a standardized scale of functioning in the past 12 months," at least one standard deviation below the mean or a significant risk of harm. Progress is evaluated every six months. The guide describes comprehensive ABA as typically 10–25 hours a week for ages 0–7 and focused ABA as 1–20 hours a week at all ages. These are typical figures, not caps. Neither document carries an Idaho exhibit (the guide’s only state exhibit is for Maryland).',
        ],
        cites: [AETNA_PRECERT, AETNA_GUIDE, AETNA_0648],
      },
      {
        h2: 'The Idaho coverage floor: Bulletin 18-02, not a statute',
        body: [ID_MANDATE_SECTION_BODY],
        cites: [ID_BULLETIN],
      },
      {
        h2: 'Licensure & rates in Idaho',
        body: [
          'Aetna’s guide requires services to be provided or billed by "licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists." Idaho has no licensure law and is not on the BACB’s list, so in Idaho the BCBA credential is what qualifies. Aetna publishes no commercial ABA rates, and they are negotiated in your agreement.',
        ],
        cites: [AETNA_GUIDE, BACB_LIC],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Bulletin 18-02 applies) or self-funded ERISA (outside it). Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Run precertification and benefits through Availity before the assessment, because 97151 is on the precert list.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD from a licensed psychologist, psychiatrist, physician or other qualified professional.' },
      { title: 'Standardized functioning measure within 12 months', desc: 'For example Vineland-3, ABAS, VB-MAPP or ABLLS, showing impairment at least 1 SD below the mean.' },
      { title: 'Prescription', desc: 'Bulletin 18-02 frames coverage around care prescribed or ordered by a licensed physician or psychologist.' },
    ],
    sources: [AETNA_GUIDE, AETNA_PRECERT, AETNA_0648, ID_BULLETIN, BACB_LIC, ID_3930, ERISA_503, ID_COB_RULE],
    deliveryRules: {
      supervision: {
        value: 'Services must be provided directly or billed by licensed behavior analysts (in licensure states), board-certified behavior analysts, or licensed psychologists with behavior analysis in scope, unless state mandates, plan documents or contracts require otherwise. Where they allow services by unlicensed or non-certified staff, "there must be supervision and direction of the unlicensed or non-certified providers in line with practice standards." Aetna publishes no numeric supervision ratio.',
        status: 'verified',
        cites: [AETNA_GUIDE],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s ABA medical necessity guide, precertification list or CPB 0648.',
        status: 'unverified',
        cites: [AETNA_GUIDE],
        verifyVia: 'Aetna provider services or the participating-provider agreement — ask for a written coding determination on 97153 and 97155 billed for the same clock time.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap. The guide gives typical intensities (comprehensive 10–25 hours a week for ages 0–7 over 1–2 years; focused 1–20 hours a week at all ages over 1–4 years), evaluates progress every six months, and ends coverage on its improvement thresholds. Bulletin 18-02 bars separate dollar or visit limits on state-regulated plans.',
        status: 'verified',
        cites: [AETNA_GUIDE, ID_BULLETIN],
      },
      noteSignature: {
        value: 'Not addressed. The guide sets treatment-plan content (defined target behaviors, baselines, quantifiable progress criteria, generalization, transition and titration planning) but not who signs session notes or by when.',
        status: 'unverified',
        cites: [AETNA_GUIDE],
        verifyVia: 'The Aetna participating-provider agreement and the Aetna Behavioral Health Provider Manual documentation section.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-agnostic in the guide. In inpatient, residential or partial hospitalization settings the level-of-care criteria apply and "specific authorization for ABA is not needed in addition." The guide expects coordination with the school district and a plan that tapers toward "supports from other sources (school, as an example)." The school-setting protection in the guide is in its Maryland exhibit only. CPB 0648 notes "many Aetna plans exclude coverage of educational services."',
        status: 'verified',
        cites: [AETNA_GUIDE, AETNA_0648],
      },
      billAsProvider: {
        value: 'Services "must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope," unless state mandates, plan documents or contracts require otherwise. Idaho has no licensure law, so the BCBA is the billing credential in Idaho.',
        status: 'verified',
        cites: [AETNA_GUIDE, BACB_LIC],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s guide sets no age cap. Its intensity table describes comprehensive ABA as typical for ages 0–7 and focused ABA for all ages. Bulletin 18-02 sets no age limit for state-regulated plans, and self-funded plans may carry their own age terms.',
        status: 'plan-dependent',
        cites: [AETNA_GUIDE, ID_BULLETIN],
        verifyVia: 'Benefits verification on the member ID — establish fully insured vs. self-funded, then the plan’s age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis itself, but the functional evidence must be recent: "demonstration of functional impairment on a standardized scale of functioning in the past 12 months." Progress is re-evaluated every six months.',
        status: 'verified',
        cites: [AETNA_GUIDE],
      },
      diagnosingProviders: {
        value: 'An "appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)."',
        status: 'verified',
        cites: [AETNA_GUIDE],
      },
      diagnosticTools: {
        value: 'CPB 0648 names the diagnostic instruments used alongside clinical assessment: ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale. The ABA guide then requires a standardized functioning measure within 12 months, such as VABS-3, ABAS, VB-MAPP or ABLLS, showing impairment at least one standard deviation below the mean or significant risk of harm.',
        status: 'verified',
        cites: [AETNA_0648, AETNA_GUIDE],
      },
      referral: {
        value: 'Aetna’s national ABA documents require precertification, not a physician referral (the guide’s prescription requirement sits in its Maryland exhibit only). For Idaho state-regulated plans, Bulletin 18-02 frames covered treatment as care "prescribed or ordered" by a licensed physician or licensed psychologist, so get a written prescription.',
        status: 'verified',
        cites: [AETNA_PRECERT, AETNA_GUIDE, ID_BULLETIN],
      },
      telehealth: {
        value: 'Not addressed. Aetna’s ABA guide, precertification list and CPB 0648 set no telehealth rules or POS codes for ABA.',
        status: 'unverified',
        cites: [AETNA_GUIDE],
        verifyVia: 'Availity or the precertification line on the member card — ask which ABA codes Aetna pays via telehealth on this plan and with which POS and modifier.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Turns on how the plan is funded. Idaho’s Managed Care Reform Act requires a managed care organization to answer a nonemergency prior-authorization request "within two (2) business days after complete member medical information is provided," "unless exceptional circumstances warrant a longer period," and makes an obtained approval final after the service is delivered except for fraud, nonpayment or loss of eligibility (Idaho Code § 41-3930). Self-funded ERISA plans follow 29 CFR 2560.503-1: 15 days, one 15-day extension, and 72 hours for urgent claims.',
        status: 'plan-dependent',
        cites: [ID_3930, ERISA_503],
        verifyVia: 'At benefits verification ask whether the plan is fully insured or self-funded, then confirm Aetna’s precertification turnaround and continuation lead time via Availity.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two parents’ plans, Idaho’s rule (IDAPA 18.04.14.022) makes "the plan of the parent whose birthday falls earlier in the calendar year" primary, with separate rules for divorced or separated parents. Self-funded plans follow their own documents. If the child also has Idaho Medicaid, this plan pays first because Medicaid is the payer of last resort. Get Aetna’s precertification anyway, and note that Medicaid pays CHIS on H-codes. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)), and CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [ID_COB_RULE, ID_GEN, TRICARE_1079, CHAMPVA_270],
        verifyVia: 'Ask Aetna at benefits verification for the coordination-of-benefits order on file, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Idaho?', a: 'Yes, for ASD under Aetna’s national ABA guide. On state-regulated plans Idaho’s Bulletin 18-02 also bars excluding autism treatment when the plan covers rehabilitative or habilitative services. Self-funded employer plans set their own terms.' },
      { q: 'Does the Aetna ABA assessment need precertification?', a: 'Yes. Aetna’s behavioral health precertification list includes 97151 and 97152 along with all treatment codes.' },
      { q: 'Does Idaho have an autism insurance mandate?', a: 'No statute. Idaho relies on DOI Bulletin 18-02 (2018): no autism exclusion where rehab or habilitative services are covered, and no separate dollar or visit limits. It sets no age limit and does not reach self-funded ERISA plans.' },
    ],
  },

  'cigna-idaho': {
    slug: 'cigna-idaho',
    family: 'cigna',
    cardDesc: 'Evernorth EN0499 + the autism resource guide (no assessment PA) on top of Idaho’s Bulletin 18-02.',
    assessmentPA: {
      value: 'Not required for assessment codes 97151, 97152, 0362T with an autism diagnosis, when the provider is independently licensed or a BCBA and the policy covers ABA (autism resource guide)',
      status: 'verified',
      cites: [CIGNA_ARG],
    },
    treatmentPA: {
      value: 'Required — completed assessment and treatment plan attached to the ABA Prior Authorization Form',
      status: 'verified',
      cites: [CIGNA_ARG, CIGNA_EN0499],
    },
    dxRequired: {
      value: 'Yes — ASD (F84.0–F84.9 except F84.2 Rett syndrome) under DSM-5-TR by an independently licensed clinician with diagnostics in scope',
      status: 'verified',
      cites: [CIGNA_EN0499],
    },
    payer: 'Cigna / Evernorth in Idaho',
    state: 'ID', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Idaho',
    h1: 'Cigna / Evernorth ABA coverage in Idaho: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Idaho: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Idaho families: EN0499 criteria, no prior authorization on assessment codes, all ABA codes eligible by telehealth, Idaho’s Bulletin 18-02 in place of an autism statute, and what intake should verify.',
    intro: [
      'A Cigna card in Idaho means Evernorth’s national ABA policy, EN0499, and its autism resource guide, sitting on Idaho’s bulletin-based coverage floor. We checked the current EN0499 (effective May 15, 2026) and found no Idaho carve-out, so the national rules apply unless the member’s plan documents differ.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD per EN0499' },
      ...ID_MANDATE_GLANCE,
    ],
    sections: [
      {
        h2: 'The national policy, applied in Idaho',
        body: [
          'The Evernorth autism resource guide removes prior authorization at the front door: "Prior authorization is no longer required for assessment CPT codes 97151, 97152, or 0362T with a diagnosis of autism," as long as the provider is independently licensed or a BCBA and the member’s policy covers ABA. Treatment requires the completed assessment and treatment plan attached to the ABA Prior Authorization Form. EN0499 then sets 60-day recency clocks on the assessment instrument and baseline data. It requires case supervision at "one to two hours per ten hours of direct treatment," and it allows in-person, telehealth or hybrid delivery. The resource guide confirms that "All ABA CPT codes are covered telehealth services." The Autism Care Coordinator team is at 877.279.7603.',
        ],
        cites: [CIGNA_ARG, CIGNA_EN0499],
      },
      {
        h2: 'The Idaho coverage floor: Bulletin 18-02, not a statute',
        body: [ID_MANDATE_SECTION_BODY],
        cites: [ID_BULLETIN],
      },
      {
        h2: 'Licensure & rates in Idaho',
        body: [
          'Idaho has no behavior-analyst licensure law and is not on the BACB’s list of licensing states, so in Idaho a BCBA qualifies under EN0499’s "Board Certified Behavior Analyst" category without a state license. Cigna publishes no commercial ABA rates, and they are negotiated in your agreement.',
        ],
        cites: [BACB_LIC, CIGNA_EN0499],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Bulletin 18-02 applies) or self-funded ERISA (outside it).' },
      { title: 'Diagnosis report', desc: 'DSM-5-TR ASD with the diagnosing clinician’s name, credentials, licensure type and the date the diagnosis was most recently made. Provisional or "rule out" diagnoses do not count.' },
      { title: 'Standardized assessment within 60 days of the treatment start', desc: 'EN0499 requires the instrument and baseline data within 60 days before treatment starts.' },
      { title: 'Member ID + card photo', desc: 'Confirm the plan covers ABA, since the assessment PA waiver depends on it.' },
      { title: 'Prescription', desc: 'Bulletin 18-02 frames coverage around care prescribed or ordered by a licensed physician or psychologist.' },
    ],
    sources: [CIGNA_EN0499, CIGNA_ARG, ID_BULLETIN, BACB_LIC, ID_3930, ERISA_503, ID_COB_RULE],
    deliveryRules: {
      supervision: {
        value: 'Case supervision is performed by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health professional with documented ABA training. Direct and indirect case supervision run at "the generally accepted standard of care of one to two hours per ten hours of direct treatment," and when direct treatment is 10 hours a week or less, at least one to two hours a week of direct case supervision is provided. The supervisor’s name and credentials must be documented.',
        status: 'verified',
        cites: [CIGNA_EN0499],
      },
      concurrentBilling: {
        value: '"Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155" during direct supervision, when the BCBA or QHP and technician are both face-to-face with the patient. Separately, ABA is not reimbursable when delivered to the same individual "at the same time as any other treatment modality," such as speech or occupational therapy.',
        status: 'verified',
        cites: [CIGNA_ARG, CIGNA_EN0499],
      },
      dailyLimits: {
        value: 'No per-day unit ceiling is published. Intensity must reflect severity, goals and response across settings, supervision runs at one to two hours per ten hours of direct treatment, and all ABA is billed in 15-minute units on 97151–97158, 0362T and 0373T. Bulletin 18-02 bars separate dollar or visit limits on state-regulated plans.',
        status: 'verified',
        cites: [CIGNA_EN0499, CIGNA_ARG, ID_BULLETIN],
      },
      noteSignature: {
        value: 'Each service needs a separate written record with start and end date and time, location, focus, a detailed description of the intervention, the individuals present, the service type, and the "Name, credential (if applicable), and signature of ABA provider who rendered the service."',
        status: 'verified',
        cites: [CIGNA_EN0499],
      },
      placeOfService: {
        value: 'Goals must be measured across all settings where treatment occurs (home, clinic, school, community), with data reported by location. Services that are primarily educational or vocational are not covered. In academic, vocational or telehealth settings the plan must document that the service still meets the direct-treatment definition.',
        status: 'verified',
        cites: [CIGNA_EN0499],
      },
      billAsProvider: {
        value: '"Evernorth does not credential nonlicensed/noncertified staff." Their services must be billed under the supervising provider. On a CMS-1500 the rendering provider prints their name in box 31, and only a BCBA or other licensed provider is listed in box 33. Electronic claims use Evernorth payer ID 62308.',
        status: 'verified',
        cites: [CIGNA_ARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap. Its glossary says access to focused intervention "should not be restricted by age, cognitive level, diagnosis, or co-occurring conditions." Bulletin 18-02 sets no age limit for state-regulated plans, and self-funded plans may carry their own terms.',
        status: 'plan-dependent',
        cites: [CIGNA_EN0499, ID_BULLETIN],
        verifyVia: 'Benefits verification, or the Autism Care Coordinator team at 877.279.7603 — establish fully insured vs. self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but EN0499 requires the diagnosing clinician’s name, credentials and licensure type and the date of the most recent diagnosis. Provisional, "rule out" or "at risk of" diagnoses do not qualify. The assessment instrument must be administered within 60 days before treatment starts, baseline data collected within 60 days before the start, and current data for continued treatment within 60 days.',
        status: 'verified',
        cites: [CIGNA_EN0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional "who is licensed to practice independently and whose licensure board considers diagnostics" within scope. The ABA assessment is done by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health clinician with documented ABA training.',
        status: 'verified',
        cites: [CIGNA_EN0499],
      },
      diagnosticTools: {
        value: 'No single named instrument. EN0499 requires a reliable, valid, standardized instrument covering the DSM-5-TR ASD domains, completed in full and as designed, in its current edition, with standardized scores reported.',
        status: 'verified',
        cites: [CIGNA_EN0499],
      },
      referral: {
        value: 'EN0499 requires no referral or prescription, and assessment codes need no PA when the provider is independently licensed or a BCBA and the plan covers ABA. For Idaho state-regulated plans, Bulletin 18-02 frames covered treatment as care "prescribed or ordered" by a licensed physician or licensed psychologist, so get a written prescription.',
        status: 'verified',
        cites: [CIGNA_ARG, CIGNA_EN0499, ID_BULLETIN],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services." EN0499 allows in-person, telehealth or hybrid delivery, and the line-of-sight requirement does not apply to telehealth.',
        status: 'verified',
        cites: [CIGNA_ARG, CIGNA_EN0499],
      },
      authTurnaround: {
        value:
          'Turns on how the plan is funded. Idaho’s Managed Care Reform Act requires a managed care organization to answer a nonemergency prior-authorization request "within two (2) business days after complete member medical information is provided," "unless exceptional circumstances warrant a longer period" (Idaho Code § 41-3930). Self-funded ERISA plans follow 29 CFR 2560.503-1: 15 days, one 15-day extension, and 72 hours for urgent claims. EN0499 publishes no submission lead time, but continuation requests need current data collected within 60 days.',
        status: 'plan-dependent',
        cites: [ID_3930, ERISA_503, CIGNA_EN0499],
        verifyVia: 'At benefits verification ask whether the plan is fully insured or self-funded, then confirm Evernorth’s turnaround with the Autism Care Coordinator team (877.279.7603).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two parents’ plans, Idaho’s rule (IDAPA 18.04.14.022) makes "the plan of the parent whose birthday falls earlier in the calendar year" primary, with separate rules for divorced or separated parents. Self-funded plans follow their own documents. If the child also has Idaho Medicaid, this plan pays first because Medicaid is the payer of last resort, and Medicaid pays CHIS on H-codes. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)), and CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [ID_COB_RULE, ID_GEN, TRICARE_1079, CHAMPVA_270],
        verifyVia: 'Ask Cigna at benefits verification for the coordination-of-benefits order on file, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Idaho?', a: 'Yes, under EN0499 for ASD, with no Idaho carve-out in the current policy. On state-regulated plans Idaho’s Bulletin 18-02 also bars autism-treatment exclusions where rehab or habilitative services are covered.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in Idaho?', a: 'No. Assessment codes 97151, 97152 and 0362T need no PA with an autism diagnosis when the provider is independently licensed or a BCBA and the plan covers ABA. PA applies at the treatment step.' },
      { q: 'Can Cigna ABA be delivered by telehealth?', a: 'Yes. Evernorth’s autism resource guide says all ABA CPT codes are covered telehealth services.' },
    ],
  },

  'unitedhealthcare-idaho': {
    slug: 'unitedhealthcare-idaho',
    family: 'unitedhealthcare',
    cardDesc: 'Optum ABA criteria (no Idaho supplement) + Idaho’s Bulletin 18-02; assessment and treatment both authorized.',
    assessmentPA: {
      value: 'Required — Optum authorizes the ABA assessment separately from treatment via the Provider Express portal',
      status: 'verified',
      cites: [OPTUM_PE, OPTUM_SCC],
    },
    treatmentPA: {
      value: 'Required — "Prior authorization is required for ABA" unless otherwise specified or mandated by contract or law. Reviews: “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law” (Optum ABA CPT FAQ)',
      status: 'verified',
      cites: [
        { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        OPTUM_SCC,
        OPTUM_PE,
      ],
    },
    dxRequired: {
      value: 'Yes — DSM-5-TR ASD confirmed by the diagnosing clinician with at least one clinically validated tool',
      status: 'verified',
      cites: [OPTUM_SCC],
    },
    payer: 'UnitedHealthcare / Optum in Idaho',
    state: 'ID', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Idaho',
    h1: 'UnitedHealthcare / Optum ABA coverage in Idaho: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Idaho: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Idaho families: Optum’s Supplemental Clinical Criteria, separate assessment and treatment authorizations, no Idaho state-mandate supplement, Idaho’s Bulletin 18-02 and what intake should verify.',
    intro: [
      'UnitedHealthcare runs ABA through Optum Behavioral Health, under Optum’s ABA Supplemental Clinical Criteria. We checked Optum’s State Mandates supplement (effective July 2026). It has entries for Arizona, California, Connecticut, Florida, Indiana, Massachusetts, New Jersey, Ohio, Pennsylvania and Virginia, but none for Idaho, so the national criteria apply unchanged. Idaho has no Medicaid managed-care plan that handles ABA, so in Idaho a UnitedHealthcare card for a child is a commercial card.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD per Optum’s ABA Supplemental Clinical Criteria' },
      ...ID_MANDATE_GLANCE,
    ],
    sections: [
      {
        h2: 'The national policy, applied in Idaho',
        body: [
          'Optum’s criteria state that "Prior authorization is required for ABA (unless otherwise specified or mandated by contract or law)." The Provider Express ABA page has providers "Request ABA assessment and treatment authorizations" in the portal, choosing "ABA Assessment or Treatment" for each request. The diagnosis must come from "a state licensed physician, psychologist, or other state licensed clinician" and be confirmed "using at least one clinically validated tool." Direct case supervision "is required 1–2 hours for every 10 hours of direct" treatment. Continued-service review looks specifically at utilization below 80% of authorized hours over a two-week period. Services covered under IDEA, or a 1:1 aide during classroom instruction, are excluded.',
        ],
        cites: [OPTUM_SCC, OPTUM_PE, OPTUM_SM],
      },
      {
        h2: 'The Idaho coverage floor: Bulletin 18-02, not a statute',
        body: [ID_MANDATE_SECTION_BODY],
        cites: [ID_BULLETIN],
      },
      {
        h2: 'Licensure & rates in Idaho',
        body: [
          'Idaho has no behavior-analyst licensure law and is not on the BACB’s list of licensing states, so Optum’s "Master- or Doctoral-level provider that is a Board-Certified Behavior Analyst" is the Idaho path. UnitedHealthcare publishes no commercial ABA rates, and they are negotiated in your agreement.',
        ],
        cites: [BACB_LIC, OPTUM_SCC],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Bulletin 18-02 applies) or self-funded ERISA (outside it).' },
      { title: 'Diagnosis report with the tool named', desc: 'DSM-5-TR ASD plus severity, confirmed with a validated tool such as ADOS-2 or ADI-R.' },
      { title: 'Member ID + card photo', desc: 'Request the assessment authorization in Provider Express (One Healthcare ID required) before the first session.' },
      { title: 'Baseline measure', desc: 'Treatment intensity must be set from a validated baseline tool, such as VB-MAPP, ABLLS-R, Vineland or SRS.' },
      { title: 'Prescription', desc: 'Bulletin 18-02 frames coverage around care prescribed or ordered by a licensed physician or psychologist.' },
    ],
    sources: [OPTUM_SCC, OPTUM_SM, OPTUM_PE, ID_BULLETIN, BACB_LIC, ID_3930, ERISA_503, ID_COB_RULE, { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' }, { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }, { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' }, { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' }],
    deliveryRules: {
      supervision: {
        value: 'Consistent with CASP standards of care, "direct case supervision is required 1–2 hours for every 10 hours of direct" treatment. Technicians must be under the supervision of a BCBA or licensed behavioral health clinician and should be RBTs or another appropriately certified technician. Optum does not recommend that parents serve as RBTs for their own child.',
        status: 'verified',
        cites: [OPTUM_SCC],
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
        value: 'Optum’s commercial ABA reimbursement policy (2022RP501A, updated June 2026) sets a maximum frequency per day for every code: 97151 32 units (8 hrs), 97152 16 (4 hrs), 97153 32 (8 hrs), 97154 18 (4.5 hrs), 97155 24 (6 hrs), 97156 16 (4 hrs), 97157 16 (4 hrs), 97158 16 (4 hrs), 0362T 16 (4 hrs), 0373T 32 (8 hrs) — and “If a provider bills in excess of 32 units per day, claims may be subject to non-reimbursement or recovery.” The ABA CPT FAQ confirms “For our commercial ABA program MUE’s apply.” There is no weekly hour cap: hours are authorized on documented clinical need, approved units can be shifted among codes within a cluster, and utilization below 80% of authorized hours over a two-week period is addressed at review. Bulletin 18-02 bars separate dollar or visit limits on state-regulated plans.',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          OPTUM_SCC,
          ID_BULLETIN,
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
        value: 'ABA is provided "at the least restrictive and most clinically appropriate level." Not covered: "Services that are not ABA therapy, such as 1:1 aid delivered simultaneously during classroom instruction, or services covered under the Individuals with Disabilities Education Act (IDEA)." School ABA does cover coordination, teacher training, meetings with school staff and observation in the school setting.',
        status: 'verified',
        cites: [OPTUM_SCC],
      },
      billAsProvider: {
        value: 'Once the diagnosis is confirmed, a credentialed ABA provider is identified: a master’s- or doctoral-level BCBA, or a licensed behavioral health clinician credentialed for ABA. A BCaBA or non-licensed individual works under the direct supervision of that BCBA or clinician, who "takes responsibility for the individual’s care."',
        status: 'verified',
        cites: [OPTUM_SCC],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion, and coverage turns on the member’s benefit plan. Bulletin 18-02 sets no age limit for state-regulated plans, and self-funded plans may carry their own terms.',
        status: 'plan-dependent',
        cites: [OPTUM_SCC, ID_BULLETIN],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the member card — establish fully insured vs. self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis. The DSM-5-TR diagnosis and severity level must be confirmed and documented with a validated tool, and review clocks run on progress: lack of progress within 6 months triggers reassessment and plan changes.',
        status: 'verified',
        cites: [OPTUM_SCC],
      },
      diagnosingProviders: {
        value: '"A state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis according to the diagnostic criteria based on the DSM-5-TR."',
        status: 'verified',
        cites: [OPTUM_SCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool, from a non-exhaustive three-tier list. First-level screens: ABC, CHAT/M-CHAT, CSBS-DP-IT, ASQ, AQ, CAST. Second-level: CARS/CARS-2, RITA-T, STAT. Formal diagnostic tools: ADI-R, ADOS/ADOS-2, DISCO.',
        status: 'verified',
        cites: [OPTUM_SCC],
      },
      referral: {
        value: 'The SCC require prior authorization, not a separate referral. For Idaho state-regulated plans, Bulletin 18-02 frames covered treatment as care "prescribed or ordered" by a licensed physician or licensed psychologist, so get a written prescription.',
        status: 'verified',
        cites: [OPTUM_SCC, ID_BULLETIN],
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
          'Turns on how the plan is funded. Idaho’s Managed Care Reform Act requires a managed care organization to answer a nonemergency prior-authorization request "within two (2) business days after complete member medical information is provided," "unless exceptional circumstances warrant a longer period" (Idaho Code § 41-3930). Self-funded ERISA plans follow 29 CFR 2560.503-1: 15 days, one 15-day extension, and 72 hours for urgent claims.',
        status: 'plan-dependent',
        cites: [ID_3930, ERISA_503],
        verifyVia: 'At benefits verification ask whether the plan is fully insured or self-funded, then confirm Optum’s turnaround and continuation lead time (Provider Express support 1-866-209-9320).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two parents’ plans, Idaho’s rule (IDAPA 18.04.14.022) makes "the plan of the parent whose birthday falls earlier in the calendar year" primary, with separate rules for divorced or separated parents. Self-funded plans follow their own documents. If the child also has Idaho Medicaid, this plan pays first because Medicaid is the payer of last resort, and Medicaid pays CHIS on H-codes. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)), and CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [ID_COB_RULE, ID_GEN, TRICARE_1079, CHAMPVA_270],
        verifyVia: 'Ask UnitedHealthcare/Optum at benefits verification for the coordination-of-benefits order on file, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Idaho?', a: 'Yes, for ASD under Optum’s ABA Supplemental Clinical Criteria. Optum’s State Mandates supplement has no Idaho entry, so the national criteria apply. On state-regulated plans Idaho’s Bulletin 18-02 also bars autism-treatment exclusions.' },
      { q: 'Does the UnitedHealthcare ABA assessment need authorization?', a: 'Yes. In Provider Express, ABA assessment and ABA treatment are requested as separate authorizations.' },
      { q: 'Is there a UnitedHealthcare Medicaid plan for ABA in Idaho?', a: 'No. Idaho Medicaid has no managed-care plan for children’s ABA. It is fee-for-service CHIS through the state, so a UnitedHealthcare card on an Idaho child is a commercial or employer plan.' },
      { q: 'How often does UnitedHealthcare (Optum) reauthorize ABA?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale.' },
    ],
  },
};

import type { PayerConfig } from './types.js';

export const pennsylvaniaPayers: Record<string, PayerConfig> = {
  'pennsylvania-medicaid': {
    slug: 'pennsylvania-medicaid',
    cardDesc: 'ABA runs as IBHS through five county-assigned BH-MCOs; under 21, any BH diagnosis, written order within 12 months.',
    assessmentPA: {
      value: 'Fee-for-service: not required — OMHSAS-20-07 limits FFS prior authorization to Assistant BC-ABA and BHT-ABA (plus BHT and group services), and the IBHS code table marks 97151 "Prior Auth: No". HealthChoices members (the large majority) follow their BH-MCO\'s own authorization rules — see the BH-MCO guides',
      status: 'verified',
      cites: [
        { title: 'OMHSAS-20-07 — Prior Authorization of IBHS (FFS), 12/18/2020', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/IBHS%20FFS%20Prior%20Auth%20Bulletin%20-%20OMHSAS-20-07%20-%2012.18.20.pdf' },
        { title: 'OMHSAS-21-03 Attachment A — Updated IBHS Agency Procedure Codes (fees, PA flags, POS)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/IBHS%20Procedure%20Codes%20Bulletin%20Attachment%20A%20OMHSAS-21-03%201.22.21.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Fee-for-service: required for BHT-ABA (97153, 97152) and Assistant BC-ABA (97153 U8, 97152 U8) and group ABA (97154/97158); behavior analytic and BC-ABA codes (97151, 97155, 97156) are not prior-authorized. Decision within 21 days or deemed approved; continuation requests at least 30 days before the authorization expires. HealthChoices members: set by the BH-MCO',
      status: 'verified',
      cites: [
        { title: 'OMHSAS-20-07 Attachment A — Handbook for Prior Authorization of IBHS (FFS)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/IBHS%20FFS%20Prior%20Auth%20Handbook%20-%20OMHSAS-20-07-Attachment%20A%20-%2012.18.20.pdf' },
        { title: 'OMHSAS-21-03 Attachment A — Updated IBHS Agency Procedure Codes (fees, PA flags, POS)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/IBHS%20Procedure%20Codes%20Bulletin%20Attachment%20A%20OMHSAS-21-03%201.22.21.pdf' },
      ],
    },
    dxRequired: {
      value: 'A behavioral health diagnosis — not specifically autism. The written order must include "a behavioral health disorder diagnosis listed in the most recent edition of the DSM or ICD"; OMHSAS says IBHS (including ABA) is available "regardless of the child\'s, youth\'s or young adult\'s behavioral health diagnosis"',
      status: 'verified',
      cites: [
        { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
        { title: 'OMHSAS IBHS Frequently Asked Questions (updated February 2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/intensive-behavioral-health-services-(ibhs)/ibhs-faq-updated-02-22-22.pdf' },
      ],
    },
    payer: 'Pennsylvania Medicaid (Medical Assistance)',
    state: 'PA', kind: 'state-medicaid',
    pill: 'Payer Guide · Pennsylvania Medicaid',
    h1: 'Pennsylvania Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Pennsylvania Medicaid (IBHS) ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Pennsylvania Medical Assistance covers ABA as Intensive Behavioral Health Services (55 Pa. Code 1155/5240): under 21, any behavioral health diagnosis, the 12-month written order, five county-assigned BH-MCOs, PH-95 and Act 62 secondary coverage, FFS rates and prior auth.',
    intro: [
      'Pennsylvania does not run ABA as a stand-alone autism benefit. Medical Assistance pays for it as one branch of Intensive Behavioral Health Services (IBHS) — 55 Pa. Code Chapters 1155 (payment) and 5240 (licensing), in force since October 19, 2019 — delivered by licensed IBHS agencies to children, youth and young adults under 21 with a behavioral health diagnosis. Autism is the common case, but it is not the gate: the gate is a written order from a licensed prescriber, written within 12 months, naming the diagnosis, the hours per month and the settings.',
      'The card a family shows you is usually the wrong card for ABA. Behavioral health in HealthChoices is its own managed-care component: every member is assigned a Behavioral Health MCO by county of residence — Community Care, Community Behavioral Health (Philadelphia), Magellan, PerformCare or Carelon — and that BH-MCO, not the physical-health plan on the card, authorizes and pays for IBHS. And because Pennsylvania\'s PH-95 category ignores parental income for children with disabilities, many commercially insured children carry Medical Assistance as a secondary payer that picks up ABA after the private plan under Act 62.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — as IBHS ABA services, under 21, for any DSM/ICD behavioral health diagnosis (not autism-only)' },
      { label: 'Who manages it', value: 'The county-assigned BH-MCO (CBH, Community Care, Magellan, PerformCare, Carelon) — not the physical-health MCO; FFS via OMHSAS for the few outside HealthChoices' },
      { label: 'Front door', value: 'Written order within 12 months before initiation, from a licensed physician, psychologist, CRNP or other licensed prescriber, after a face-to-face interaction' },
      { label: 'Assessment auth (FFS)', value: 'None — 97151 is not prior-authorized; PA applies to BHT-ABA and Assistant BC-ABA' },
      { label: 'Clock after start', value: 'Assessment within 30 days; ITP within 45 days; payment allowed up to 75 days pre-ITP with order + treatment plan; ITP update every 6 months' },
      { label: 'FFS rates (per 15 min)', value: '97153 $12.73 BHT-ABA / $15.76 Asst BC-ABA; 97151, 97155, 97156 $22.09 BC-ABA / $24.73 BCBA (OMHSAS-21-03 table, Jan 2021)' },
      { label: 'Secondary MA', value: 'PH-95 covers children under 18 with disabilities regardless of parental income; MA pays after the private plan (Act 62 / 55 Pa. Code § 1101.64)' },
      { label: 'Licensure', value: 'No behavior-analyst license in PA; IBHS behavior analytic services require a PA license (e.g. Behavior Specialist) plus BCBA' },
    ],
    sections: [
      {
        h2: 'Coverage: IBHS ABA, under 21, any behavioral health diagnosis',
        body: [
          'Chapter 1155 pays for IBHS "when the services are medically necessary and provided to eligible children, youth or young adults with a behavioral health diagnosis by licensed IBHS agencies" — a child is under 14, a youth 14 to under 18, a young adult 18 to under 21. ABA services are one of four IBHS families, delivered through four service types: behavior analytic services, behavior consultation–ABA (BC-ABA), assistant behavior consultation–ABA (Asst. BC-ABA) and behavioral health technician–ABA (BHT-ABA). OMHSAS\'s FAQ is explicit that the benefit is diagnosis-agnostic: IBHS is available when medically necessary "regardless of the child\'s, youth\'s or young adult\'s behavioral health diagnosis," so a child with ADHD or anxiety can qualify for ABA, and there is no minimum age and no time cap — services continue "as long as the services are medically necessary."',
          'OMHSAS\'s medical necessity guidelines (OMHSAS-20-05, Attachment 2) ask whether ABA is reasonably expected to reduce the child\'s identified needs or to support skill development toward maximum functional capacity, whether the child can be safely served in the community rather than a more restrictive level of care, and whether the ordered hours fit those goals — with a catch-all that services may still be "otherwise medically necessary." Discharge is allowed when goals are met, when there is no progress within 180 days and other services are in place, or after 45 consecutive days of unexplained non-attendance and three contact attempts.',
        ],
        cites: [
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'OMHSAS IBHS Frequently Asked Questions (updated February 2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/intensive-behavioral-health-services-(ibhs)/ibhs-faq-updated-02-22-22.pdf' },
          { title: 'OMHSAS-20-05 Attachment 2 — IBHS Medical Necessity Guidelines: ABA Services', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/OMHSAS-20-05%20-%20IBHS%20MGN%20Bulletin%20-%20Attachment%202%20ABA%20Services.pdf' },
        ],
      },
      {
        h2: 'The front door: the written order and the start-of-care clock',
        body: [
          'Everything hangs on the written order in 55 Pa. Code § 1155.33(a)(1). It must be based on a face-to-face interaction with the child, written within 12 months before ABA starts, by "a licensed physician, licensed psychologist, certified registered nurse practitioner or other licensed professional whose scope of practice includes the diagnosis and treatment of behavioral health disorders and the prescribing of behavioral health services." It must carry a DSM or ICD behavioral health diagnosis, the clinical information supporting each ABA service ordered, "the maximum number of hours of each ABA service per month," the settings where services may be provided, and the measurable improvements that mark when services may be reduced or ended. OMHSAS\'s FAQ adds that a separate best-practice evaluation is not required — the order is the requirement.',
          'Once ABA starts, the clock runs: a face-to-face assessment by a behavior analytic or BC-ABA-qualified clinician within 30 days (and before the ITP), an individual treatment plan within 45 days, ITP review at least every 6 months, assessment update at least every 12 months, and a new order written within 12 months for continued services. The ITP must be signed by the parent (or youth/young adult), the clinician who wrote it and a clinical-director-qualified reviewer. Payment is allowed for up to 75 days after initiation before the ITP exists, as long as there is a compliant order and a treatment plan for the services delivered.',
        ],
        cites: [
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
          { title: 'OMHSAS IBHS Frequently Asked Questions (updated February 2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/intensive-behavioral-health-services-(ibhs)/ibhs-faq-updated-02-22-22.pdf' },
        ],
      },
      {
        h2: 'Who manages it: five BH-MCOs, assigned by county',
        body: [
          'In HealthChoices, "Each HealthChoices consumer is assigned a Behavioral Health Managed Care Organization (BH-MCO) based on his or her county of residence." DHS\'s current map: Community Behavioral Health (CBH) serves Philadelphia; Community Care Behavioral Health serves 41 counties including Allegheny, Berks, Chester, Delaware, Erie, Lackawanna, Luzerne and York; Magellan Behavioral Health of Pennsylvania serves Bedford, Bucks, Cambria, Lehigh, Montgomery, Northampton and Somerset; PerformCare serves Cumberland, Dauphin, Franklin, Fulton, Lancaster, Lebanon and Perry; and Carelon Health of Pennsylvania serves Armstrong, Beaver, Butler, Crawford, Fayette, Indiana, Lawrence, Mercer, Washington, Westmoreland and Venango. OMHSAS counted 2,717,158 HealthChoices behavioral health covered lives in July 2026.',
          'Two operational consequences for intake. First, ask for the county, not the plan name — the physical-health MCO card (UPMC for You, Keystone First, Highmark Wholecare and others) does not tell you who authorizes ABA. Second, the state\'s own prior-authorization handbook applies only to fee-for-service: OMHSAS-20-07 says providers in managed care "should address questions about authorization of IBHS to the appropriate managed care organization," so authorization mechanics, forms and turnaround live in each BH-MCO\'s documents (see the per-BH-MCO guides).',
        ],
        cites: [
          { title: 'PA DHS — Behavioral Health Managed Care Organizations (BH-MCOs) by county', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/bhc/bhc-mcos' },
          { title: 'OMHSAS — HealthChoices Behavioral Health Eligibles map (July 2026)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/healthchoices-behavioral-health-eligibles-map.pdf' },
          { title: 'OMHSAS-20-07 — Prior Authorization of IBHS (FFS), 12/18/2020', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/IBHS%20FFS%20Prior%20Auth%20Bulletin%20-%20OMHSAS-20-07%20-%2012.18.20.pdf' },
        ],
      },
      {
        h2: 'Act 62 and PH-95: Medical Assistance behind private insurance',
        body: [
          'Pennsylvania\'s autism insurance law (Act 62 of 2008) named the Medical Assistance program as a "government program" and pushed private insurers to pay first. DHS\'s Act 62 page states the operating rule: providers must "bill a child\'s or adolescent\'s private health insurance company before submitting a claim for the diagnostic assessment or treatment of ASD," and the IBHS rule repeats it generally — "Payment will not be made for a compensable IBHS if payment is available through a third party." Under 55 Pa. Code § 1101.64, MA then pays the difference up to its own fee, or pays in full when the private plan refuses with a written refusal attached.',
          'What makes that interplay matter at scale is PH-95, "Medicaid for Children with Special Needs." It gives full Medical Assistance to children under 18 who meet Social Security disability standards, and "Parental income must be verified but will be excluded in this category." As of this review (September 2026) DHS still publishes the category, so a child with an autism diagnosis in a family well above Medicaid income limits can hold MA as secondary coverage, and an IEP, IFSP or early intervention evaluation can support presumptive eligibility while disability is certified. For intake, that means two questions on every commercial case: does the child also have Medical Assistance, and if not, would the family benefit from applying?',
        ],
        cites: [
          { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
          { title: 'PA DHS — Medicaid for Children with Special Needs (PH95)', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/medicaid-children-special-needs-ph95' },
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
      },
      {
        h2: 'Rates, staffing and licensure',
        body: [
          'OMHSAS\'s IBHS code table (OMHSAS-21-03, Attachment A, January 2021) lists the MA fee-for-service ABA rates per 15-minute unit: 97151 behavior identification assessment $22.09 (BC-ABA) or $24.73 with the U7 modifier (behavior analytic / BC-ABA by a BCBA); 97152 $12.73 (BHT-ABA) or $15.76 (U8, Asst. BC-ABA); 97153 $12.73 (BHT-ABA) or $15.76 (U8); 97155 and 97156 $22.09 or $24.73 (U7); group 97154/97158 from $5.13 to $16.63 by group size. These are the FFS schedule as published in 2021 — the current MA fee schedule sits behind an AMA CPT licence click-through we did not accept, and HealthChoices rates are set in each BH-MCO\'s provider contracts, so confirm the live rate with the BH-MCO.',
          'Staffing is regulated, not just credentialed. Behavior analytic services require a Pennsylvania license (psychologist, professional counselor, MFT, clinical social worker, social worker, behavior specialist, CRNP or another scope that covers ABA oversight) plus a BCBA or equivalent; BHT-ABA staff need a BCaBA, RBT or BCAT certification, another accredited behavior-analysis certification, a high school diploma plus the 40-hour RBT-content training certified by a BCBA/BCaBA trainer, or two years of ABA experience plus 40 hours of training. Since the BACB\'s January 2026 change, OMHSAS expects BHT/BHT-ABA staff trained on the old RBT Task List to update to the 3rd-edition Test Content Outline within a year. Pennsylvania has no behavior-analyst licence as such (it is absent from the BACB licensure table); the State Board of Medicine\'s Behavior Specialist licence is the common route for BCBAs without another PA licence.',
        ],
        cites: [
          { title: 'OMHSAS-21-03 Attachment A — Updated IBHS Agency Procedure Codes (fees, PA flags, POS)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/IBHS%20Procedure%20Codes%20Bulletin%20Attachment%20A%20OMHSAS-21-03%201.22.21.pdf' },
          { title: 'PA DHS — Medicaid Fee Schedules (online fee schedule behind CPT licence acceptance)', url: 'https://www.pa.gov/agencies/dhs/resources/for-providers/ma-for-providers/ma-fee-schedule' },
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
          { title: 'OMHSAS — BACB Training Updates for IBHS Providers (April 2, 2026)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/2026-04-02-bacb-training-updates-for-ibhs-providers.pdf' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' },
        ],
      },
    ],
    collect: [
      { title: 'County of residence', desc: 'Decides the BH-MCO (CBH, Community Care, Magellan, PerformCare or Carelon) that authorizes and pays ABA — the physical-health plan card does not.' },
      { title: 'Written order for ABA', desc: 'From a licensed physician, psychologist, CRNP or other licensed prescriber, after a face-to-face visit, dated within 12 months, with the DSM/ICD diagnosis, monthly hours per ABA service, settings and discharge markers.' },
      { title: 'Other insurance', desc: 'Private plan details if the child has one — Act 62 and § 1101.64 make MA the secondary payer, so the commercial claim (or its written refusal) comes first.' },
      { title: 'PH-95 status', desc: 'Commercially insured child with autism and no MA? Under 18 with an SSA-level disability qualifies for PH-95 regardless of parental income — an IEP or IFSP can support presumptive eligibility.' },
      { title: 'Age', desc: 'IBHS runs to the 21st birthday; plan transitions for young adults approaching 21.' },
    ],
    sources: [
      { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
      { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
      { title: 'PA DHS — Intensive Behavioral Health Services (IBHS) publications page', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/bhc/ibhs' },
      { title: 'OMHSAS IBHS Frequently Asked Questions (updated February 2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/intensive-behavioral-health-services-(ibhs)/ibhs-faq-updated-02-22-22.pdf' },
      { title: 'OMHSAS-20-05 Attachment 2 — IBHS Medical Necessity Guidelines: ABA Services', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/OMHSAS-20-05%20-%20IBHS%20MGN%20Bulletin%20-%20Attachment%202%20ABA%20Services.pdf' },
      { title: 'OMHSAS-20-07 — Prior Authorization of IBHS (FFS), 12/18/2020', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/IBHS%20FFS%20Prior%20Auth%20Bulletin%20-%20OMHSAS-20-07%20-%2012.18.20.pdf' },
      { title: 'OMHSAS-20-07 Attachment A — Handbook for Prior Authorization of IBHS (FFS)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/IBHS%20FFS%20Prior%20Auth%20Handbook%20-%20OMHSAS-20-07-Attachment%20A%20-%2012.18.20.pdf' },
      { title: 'OMHSAS-21-03 — Updates to Procedure Codes for IBHS Agencies (1/22/2021)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/IBHS%20Updated%20Procedure%20Codes%20OMHSAS-21-03%201.22.21.pdf' },
      { title: 'OMHSAS-21-03 Attachment A — Updated IBHS Agency Procedure Codes (fees, PA flags, POS)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/IBHS%20Procedure%20Codes%20Bulletin%20Attachment%20A%20OMHSAS-21-03%201.22.21.pdf' },
      { title: 'OMHSAS-22-03 — Provision of One-to-One IBHS in a Licensed Location (updated 6/24/2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/services/mental-health-in-pa/documents/ibhs-documents/Bulletin%20OMHSAS-22-03%20-%201%20to%201%20IBHS%20in%20a%20Center%20-%20Updated.pdf' },
      { title: 'OMHSAS-22-02 — Revised Guidelines for Delivery of BH Services Through Telehealth (eff. 7/1/2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/docs/documents/omhsas/Bulletin%20OMHSAS-22-02%20-%20Revised%20Guidelines%20for%20Delivery%20of%20BH%20Services%20Through%20Telehealth%207.1.22.pdf' },
      { title: 'OMHSAS — BACB Training Updates for IBHS Providers (April 2, 2026)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/2026-04-02-bacb-training-updates-for-ibhs-providers.pdf' },
      { title: 'PA DHS — Behavioral Health Managed Care Organizations (BH-MCOs) by county', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/bhc/bhc-mcos' },
      { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
      { title: 'PA DHS — Medicaid for Children with Special Needs (PH95)', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/medicaid-children-special-needs-ph95' },
      { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
      { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Under 21. Chapter 1155 covers "children, youth or young adults with a behavioral health diagnosis," defining a young adult as "18 years of age or older but under 21 years of age"; OMHSAS bulletins scope IBHS to "children, youth and young adults under 21 years of age." There is no minimum age in the rule, and no duration cap — OMHSAS: services continue "as long as the services are medically necessary." Adults 21 and over are outside IBHS.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'OMHSAS IBHS Frequently Asked Questions (updated February 2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/intensive-behavioral-health-services-(ibhs)/ibhs-faq-updated-02-22-22.pdf' },
        ],
      },
      dxRecency: {
        value: 'The recency rule attaches to the written order, not to a diagnostic evaluation: the order must be "Written within 12 months prior to the initiation of ABA services," based on a face-to-face interaction, and must include a DSM or ICD behavioral health diagnosis; continued services need a new order written within 12 months. The rule sets no separate age limit on the underlying diagnostic evaluation, and OMHSAS says a best-practice evaluation is not required.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'OMHSAS IBHS Frequently Asked Questions (updated February 2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/intensive-behavioral-health-services-(ibhs)/ibhs-faq-updated-02-22-22.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'The diagnosis travels in the written order, which may be written by "a licensed physician, licensed psychologist, certified registered nurse practitioner or other licensed professional whose scope of practice includes the diagnosis and treatment of behavioral health disorders and the prescribing of behavioral health services, including IBHS." The rule does not require the diagnosis to come from a specialist such as a developmental pediatrician.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
        ],
      },
      diagnosticTools: {
        value: 'No diagnostic instrument is required. Chapter 1155 requires only a DSM or ICD behavioral health diagnosis in the order. Standardized tools appear later, inside the ABA assessment: § 5240.85 requires "Completion of standardized behavioral assessment tools as needed," an adaptive skills assessment and observational data across home, school and community — assessment content, not a diagnostic gate.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
        ],
      },
      referral: {
        value: 'Yes — the written order is the referral, and nothing starts without it: "An IBHS agency shall provide ABA services ... in accordance with a written order under § 1155.33(a)(1)." The order must be face-to-face based, dated within 12 months before initiation, and must state the clinical justification for each ABA service, "The maximum number of hours of each ABA service per month," the settings, and measurable discharge markers. The agency must also obtain written consent from the parent/guardian (or youth/young adult) for the ordered services before starting.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
        ],
      },
      telehealth: {
        value: 'OMHSAS-22-02 lets MA behavioral health services, including IBHS, be delivered by telehealth when clinically appropriate and with documented consent, but flags IBHS as a "high intensity" service where providers should weigh how much must stay in person; for young children it recommends a caregiver participate (ages 3–5) or observe (6–9). In fee-for-service, telehealth claims use POS 02 (not at home) or POS 10 (home) only on codes the MA fee schedule lists with those POS, plus FQ for audio-only; the 2021 IBHS code table lists ABA codes only with POS 03, 11, 12 and 99. HealthChoices providers "must follow the billing instructions of the BH-MCO." Which ABA codes currently carry telehealth POS could not be confirmed — the live fee schedule sits behind a CPT licence click-through.',
        status: 'unverified',
        cites: [
          { title: 'OMHSAS-22-02 — Revised Guidelines for Delivery of BH Services Through Telehealth (eff. 7/1/2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/docs/documents/omhsas/Bulletin%20OMHSAS-22-02%20-%20Revised%20Guidelines%20for%20Delivery%20of%20BH%20Services%20Through%20Telehealth%207.1.22.pdf' },
          { title: 'OMHSAS-21-03 Attachment A — Updated IBHS Agency Procedure Codes (fees, PA flags, POS)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/IBHS%20Procedure%20Codes%20Bulletin%20Attachment%20A%20OMHSAS-21-03%201.22.21.pdf' },
        ],
        verifyVia: 'The MA Program Outpatient Fee Schedule (humanservices.dhs.pa.gov/OUTPATIENTFEESCHEDULE — requires accepting the AMA CPT licence) for POS 02/10 on 97151–97158, or the member\'s BH-MCO telehealth billing instructions.',
        blocker: 'document',
      },
      authTurnaround: {
        value: 'Fee-for-service (OMHSAS): the FFS handbook commits to "issue a decision within 21 days of receipt of the request" and says the request "is deemed approved" if OMHSAS misses it; expedited review (child at immediate risk of a more restrictive placement, or services must start before the assessment/ITP) is decided "within three business days"; continuation requests must arrive "at least 30 days prior to the expiration of the current authorization." That 2020 handbook predates 42 CFR 440.230(e), which since January 1, 2026 requires FFS standard decisions "in no case later than 7 calendar days after receiving the request" (72 hours expedited). HealthChoices BH-MCOs (PIHPs) fall under 42 CFR 438.210(d): standard decisions within 7 calendar days for rating periods starting on or after January 1, 2026 (up to 14 more on extension), expedited within 72 hours. DHS\'s own HealthChoices standard is tighter still: Appendix AA (January 1, 2026) requires every BH-MCO to communicate a prospective or expedited decision "within two (2) Business Days of the receipt of all supporting information" (one business day for concurrent review), to request missing information within 48 hours and allow 14 days to supply it, and deems the service "automatically approved" if the member has no written decision within 21 days of the request. Act 146 of 2022 sets the same two-business-day clock for an "MA or CHIP managed care plan".',
        status: 'verified',
        cites: [
          { title: 'OMHSAS-20-07 Attachment A — Handbook for Prior Authorization of IBHS (FFS)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/IBHS%20FFS%20Prior%20Auth%20Handbook%20-%20OMHSAS-20-07-Attachment%20A%20-%2012.18.20.pdf' },
          { title: '42 CFR 440.230(e) — Medicaid fee-for-service prior authorization timeframes (from 1/1/2026)', url: 'https://www.ecfr.gov/current/title-42/section-440.230' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
          { title: 'DHS HealthChoices BH Program Standards and Requirements, Appendix AA — Prior Authorization Requirements (Jan. 1, 2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Appendix-AA-Prior-Authorization-Requirements.pdf' },
          { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Medical Assistance pays last, and Pennsylvania spells it out twice. 55 Pa. Code § 1101.64: "Other private or governmental health insurance benefits shall be utilized before billing the MA Program," naming Blue Cross, Blue Shield or other commercial insurance, CHAMPUS and VA as primary; MA then pays the difference up to its fee, or pays when the primary refuses, with the refusal advisory attached. § 1155.31(e) applies it to IBHS: "Payment will not be made for a compensable IBHS if payment is available through a third party." DHS\'s Act 62 guidance requires billing the child\'s private insurer before the MA claim for ASD assessment or treatment. TRICARE, by federal statute, pays ahead of other coverage except Medicaid (10 U.S.C. 1079(i)(1)), so TRICARE is primary to MA; CHAMPVA is the last payer after other health insurance. Whether a BH-MCO requires its own IBHS authorization when MA is secondary is a BH-MCO rule — see the BH-MCO guides.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
          { title: '42 CFR 433.139 — Payment of claims (third-party liability)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Supervision is written into the licensing rule (55 Pa. Code § 5240.82). BHT-ABA staff: 1 hour of supervision a week if working 37.5+ hours (otherwise 1 hour twice a month), including at least 1 hour of individual face-to-face supervision a month; 6 hours of onsite supervision before a new BHT-ABA works independently; and 1 hour of direct observation during ITP implementation every 4 months — every 2 months for staff qualified only through the diploma-plus-40-hour-training route. Asst. BC-ABA staff: 1 hour twice a month, one-to-one and face-to-face, 3 hours onsite before working independently, and 30 minutes of direct observation every 6 months. Behavior analytic and BC-ABA clinicians get 1 hour a month from a clinical-director-qualified supervisor (plus an extra hour if they supervise others). One supervisor may oversee at most 12 FTE ABA staff, no more than nine of them BHT-ABA; supervision may be by secure real-time audio-video.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
        ],
      },
      concurrentBilling: {
        value: 'In fee-for-service, yes for supervision of technicians: OMHSAS\'s FAQ says "In fee for service, staff who are qualified to provide behavior analytic, behavior consultation-ABA or Assistant behavior consultation-ABA (with a BCaBA) services can separately bill for direct observation and supervision of staff providing BHT-ABA services while the individual is working with a child" — i.e. 97155 alongside 97153. (For non-ABA individual services, supervision is built into the rate and not separately billable.) HealthChoices billing rules for the same clock time are set by each BH-MCO.',
        status: 'verified',
        cites: [
          { title: 'OMHSAS IBHS Frequently Asked Questions (updated February 2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/intensive-behavioral-health-services-(ibhs)/ibhs-faq-updated-02-22-22.pdf' },
        ],
      },
      dailyLimits: {
        value: 'The FFS IBHS code table sets per-day unit ranges: 97151 and 97152, 1 to 48 units a day; 97153 and 97155, 1 to 32 units a day; 97156, 1 to 16 units a day; group 97154, 2 to 32 and 97158, 1 to 32 units a day (all 15-minute units). Overall intensity is capped by the written order, which must state "The maximum number of hours of each ABA service per month." These are the January 2021 table\'s limits; HealthChoices BH-MCOs may apply their own.',
        status: 'verified',
        cites: [
          { title: 'OMHSAS-21-03 Attachment A — Updated IBHS Agency Procedure Codes (fees, PA flags, POS)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/IBHS%20Procedure%20Codes%20Bulletin%20Attachment%20A%20OMHSAS-21-03%201.22.21.pdf' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
        ],
      },
      noteSignature: {
        value: 'Each service is documented with date, time, duration and setting, the ITP goal addressed, the outcome, and the "Signature of the staff person providing the service"; every record entry must be "Signed and dated by the staff person writing in the record" (55 Pa. Code § 5240.41). Assessments are signed and dated by the clinician who completed them, and the ITP and each update must be signed by the parent/guardian (or youth/young adult), the clinician who wrote it and a clinical-director-qualified reviewer. Records are kept at least 4 years after the last service. Since January 1, 2024 OMHSAS expects consent, service verifications and treatment-plan approvals captured "in a manner that creates an auditable file."',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'OMHSAS — Interim Telehealth Guidance (March 30, 2023)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/services/mental-health-in-pa/documents/OMHSAS_Interim-Telehealth-Guidance-3.30.2023.pdf' },
        ],
      },
      placeOfService: {
        value: 'IBHS "shall be delivered in home or community-based, clinically appropriate settings as identified in the written order and ITP," and OMHSAS confirms ABA "can be provided in a school." One-to-one ABA at the agency\'s licensed location (center-based) is allowed when clinically appropriate and addressed in the service description, in a "community like" setting focused on building skills to return to home and community (OMHSAS-22-03), billed with POS 11. The FFS code table lists ABA codes with POS 03 (school), 11 (office), 12 (home) and 99 (other). Children in 24-hour residential facilities get IBHS only if the order explains why it is needed on top of, and does not duplicate, the facility\'s services.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
          { title: 'OMHSAS IBHS Frequently Asked Questions (updated February 2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/intensive-behavioral-health-services-(ibhs)/ibhs-faq-updated-02-22-22.pdf' },
          { title: 'OMHSAS-22-03 — Provision of One-to-One IBHS in a Licensed Location (updated 6/24/2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/services/mental-health-in-pa/documents/ibhs-documents/Bulletin%20OMHSAS-22-03%20-%201%20to%201%20IBHS%20in%20a%20Center%20-%20Updated.pdf' },
          { title: 'OMHSAS-21-03 — Updates to Procedure Codes for IBHS Agencies (1/22/2021)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/IBHS%20Updated%20Procedure%20Codes%20OMHSAS-21-03%201.22.21.pdf' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
        ],
      },
      billAsProvider: {
        value: 'The licensed IBHS agency bills, not the individual clinician: "payment is made to a licensed IBHS agency for medically necessary IBHS provided by qualified individuals under the supervision and direction of a clinical director," and the agency must be licensed under Chapters 20 and 5240, hold a DHS provider agreement and be MA-enrolled. Chapter 1155 "does not apply to individual licensed practitioners ... that bill only for services provided directly by the licensed practitioners." The FFS code table places ABA under provider type 11, specialty 592, with modifiers identifying the rendering tier (U7 behavior analytic/BC-ABA by a BCBA; U8 Asst. BC-ABA; no modifier for BC-ABA or BHT-ABA).',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'OMHSAS-21-03 Attachment A — Updated IBHS Agency Procedure Codes (fees, PA flags, POS)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/IBHS%20Procedure%20Codes%20Bulletin%20Attachment%20A%20OMHSAS-21-03%201.22.21.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Pennsylvania Medicaid cover ABA therapy?', a: 'Yes — as ABA services within Intensive Behavioral Health Services (55 Pa. Code Chapter 1155), for children, youth and young adults under 21 with a behavioral health diagnosis, delivered by a licensed IBHS agency on a written order from a licensed prescriber.' },
      { q: 'Does my child need an autism diagnosis for ABA under Pennsylvania Medicaid?', a: 'No. The written order needs a DSM or ICD behavioral health diagnosis, and OMHSAS says IBHS is available when medically necessary regardless of the specific diagnosis.' },
      { q: 'Who approves ABA for Pennsylvania Medicaid members?', a: 'The Behavioral Health MCO assigned by the family\'s county — CBH in Philadelphia, Community Care, Magellan, PerformCare or Carelon elsewhere — not the physical-health plan on the card. The few members outside HealthChoices go through OMHSAS fee-for-service prior authorization.' },
      { q: 'Can a child with private insurance also get Medical Assistance for ABA?', a: 'Often, yes. The PH-95 category covers children under 18 with SSA-level disabilities and excludes parental income. The private plan pays first under Act 62 and 55 Pa. Code § 1101.64, and MA can pay what remains up to its fee.' },
      { q: 'What does Pennsylvania Medicaid pay for ABA?', a: 'The FFS IBHS table (OMHSAS-21-03, January 2021) lists 97153 at $12.73 per 15 minutes for a BHT-ABA ($15.76 for an Assistant BC-ABA) and 97151/97155/97156 at $22.09 ($24.73 for a BCBA). HealthChoices rates are set in each BH-MCO\'s provider contract.' },
    ],
  },


  'community-care-behavioral-health-pennsylvania': {
    slug: 'community-care-behavioral-health-pennsylvania',
    payer: 'Community Care Behavioral Health Organization (HealthChoices BH-MCO)',
    pill: 'Payer Guide · Community Care Behavioral Health (PA)',
    h1: 'Community Care Behavioral Health ABA coverage (Pennsylvania HealthChoices BH-MCO).',
    metaTitle: 'Community Care Behavioral Health (PA HealthChoices) ABA / IBHS Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Community Care Behavioral Health, the UPMC-affiliated BH-MCO for 41 Pennsylvania counties, runs Medicaid ABA as IBHS: written order and assessment by ePortal registration, treatment by packet prior authorization, the 6-month authorization cap from September 17, 2026, center-based 1:1 criteria, telehealth billing and payer-of-last-resort rules.',
    intro: [
      'In Pennsylvania Medicaid, ABA is not a stand-alone benefit: it is delivered as Intensive Behavioral Health Services (IBHS) under 55 Pa. Code Chapters 1155 and 5240, and in HealthChoices it is paid by the county’s behavioral health managed care organization, not by the child’s physical-health plan. Community Care Behavioral Health Organization (Community Care), part of the UPMC Insurance Services Division, is that BH-MCO in 41 counties, including Allegheny, Berks, Chester, Delaware, Erie, Lackawanna, Luzerne and York.',
      'Community Care splits IBHS approval in two. The written order and the assessment are registered in its ePortal (registration, not prior authorization); ABA treatment itself needs prior authorization by packet review. From September 17, 2026 every IBHS authorization is capped at six months, the ePortal allows up to 200 units for an ABA assessment (“ASSESS-ABA”), and its own medical necessity guidelines for one-to-one center-based ABA took effect July 8, 2026. Commercial insurance, CHIP and Medicare always pay first.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'HealthChoices behavioral health MCO (PIHP) for 41 Pennsylvania counties; UPMC-affiliated' },
      { label: 'ABA benefit', value: 'IBHS-ABA under 55 Pa. Code Ch. 1155/5240: under 21, any behavioral health diagnosis (not autism-only)' },
      { label: 'Written order + assessment', value: 'Registration in the ePortal (order: 60 days from service start; assessment: 30 days) — not prior authorization' },
      { label: 'ABA treatment', value: 'Prior authorization by packet review, within 45 days of service start; continued stay before the last covered day' },
      { label: 'Authorization length', value: 'Maximum 6 months per authorization for requests submitted on or after September 17, 2026 (Provider Alert 18)' },
      { label: 'Decision time', value: 'Two business days once information is complete; missing-info notice within 48 hours, 14 days to supply it (member handbook)' },
      { label: 'Other coverage', value: 'Payer of last resort: bill commercial/CHIP/Medicare first and exhaust their appeals; out-of-network denials are not paid' },
    ],
    sections: [
      {
        h2: 'How Community Care approves ABA (IBHS-ABA)',
        body: [
          'Community Care’s provider manual sends providers to its “Guidelines for Obtaining Approval” (Appendix A) to see whether a service needs registration, notification or prior authorization. The July 2026 grid lists “IBHS — Written Order: 60 Days from Service Start, ePortal, Registration” and “IBHS — Assessment: 30 Days from Service Start, ePortal, Registration”; IBHS treatment is “45 Days from Service Start … Before Last Covered Day … Packet Review … Prior Auth”. The manual’s own list of registration services includes “IBHS ORDER and ASSESS”, and its prior-authorization list starts with “Intensive Behavioral Health Services (IBHS)”.',
          'Provider Alert 18 (August 17, 2026) changes the clock: “Effective September 17, 2026: IBHS authorizations will be approved for a maximum of 6 months per authorization period” (previously up to 12 months), and requests for longer periods “will not be processed as submitted”. The same alert sets ePortal assessment maximums of 100 units for Individual/Group/EBP “ASSESS” and “200 units for ABA Individual ‘ASSESS-ABA’ authorizations”. A full formal assessment is still required at least every 12 months, with a reassessment/update acceptable for the in-between six-month request, and written orders stay valid for up to 12 months. Authorizations issued before September 17, 2026 run to their approved end date.',
          'Community Care does not require the authorization number on the claim, but warns that an authorization “is not a guarantee of payment” and that claims should not be held while an authorization is pending.',
        ],
        cites: [
          { title: 'Community Care — Guidelines for Obtaining Approval for In-Plan Supplemental Services (July 2026)', url: 'https://providers.ccbh.com/uploads/files/Guidelines-for-Obtaining-Approval_2026-07-14-134655_jsis.pdf' },
          { title: 'Community Care Provider Manual (February 2026, 202602SH)', url: 'https://providers.ccbh.com/uploads/files/202602-providermanual_2026-02-03-153100_lbib.pdf' },
          { title: 'Community Care Provider Alert 18 — IBHS: Adjustment to Authorization Timeframes (August 17, 2026)', url: 'https://providers.ccbh.com/uploads/img/Provider%20Alerts/Intensive-Behavioral-Health-Services-IBHS-Adjustment-to-Authorization-Timeframes.pdf' },
        ],
      },
      {
        h2: 'Written order, FBA and the treatment packet',
        body: [
          'Community Care’s IBHS Performance Standards make a face-to-face evaluation by a licensed prescriber the first step, and list ways to get one: a PCP or CRNP wellness check, an outpatient intake or therapy session, a psychological or psychiatric evaluation, testing, a discharge from inpatient/RTF/partial, or a mental health assessment by a PROMISe-enrolled prescriber at an IBHS agency. It “requires the face-to-face evaluation occur within 1 year/365 days from the date a recommendation is made for IBHS”; written orders are “valid for 12 months”, and for an initial request “the Written Order must precede the Assessment”. A Community Care Written Order Letter template is available to prescribers.',
          'For new BHT or BHT-ABA services Community Care “requires a Functional Behavior Assessment (FBA) be completed by an FBA certified GLP” when behavior change is the primary goal; when skill development is the goal, a commercial skill-based assessment such as the VB-MAPP “will be accepted in lieu of an FBA”. A new FBA is not required for later BHT/BHT-ABA requests. State medical necessity guidelines (Appendix S) govern ABA; Community Care hosts them on its site.',
        ],
        cites: [
          { title: 'Community Care — Intensive Behavioral Health Services Performance Standards', url: 'https://providers.ccbh.com/uploads/files/CCBH-IBHS-Performance-Standards.pdf' },
          { title: 'HealthChoices Appendix S — IBHS Medical Necessity Guidelines (as posted by Community Care)', url: 'https://providers.ccbh.com/uploads/files/Appendix-S-2024.pdf' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
        ],
      },
      {
        h2: 'One-to-one center-based ABA',
        body: [
          'Community Care issued its own medical necessity guidelines for ABA one-to-one center-based services (effective 7/8/2026; providers had to comply by July 10, 2026 per Provider Alert 10). Children appropriate for center-based ABA “are typically under the age of 6 years old, and present with documented neurodevelopmental delays”, and the written order must recommend center-based services. The assessment must include direct observation “across all settings, including the home, school, and community, as well as in the center”, and the ITP must include “a plan to taper attendance hours”. Full-day attendance “for family/caregiver or program convenience … is not sufficient for establishing medical necessity”, children who moved on to preschool or school are not re-admitted for summer breaks without a new written order and assessment, and a child not progressing within 180 days may be discharged to other services.',
        ],
        cites: [
          { title: 'Community Care — MNG: ABA One-to-One Center-based Services (effective 7/8/2026)', url: 'https://providers.ccbh.com/uploads/files/Applied-Behavior-Analysis-One-to-One-Center-based-Services-Provision-of-One-to-One-IBHS-in-a-Licensed-Location_2026-06-10-193543_kurl.pdf' },
          { title: 'Community Care — Performance Standards: Applied Behavior Analysis', url: 'https://providers.ccbh.com/uploads/files/Performance-Standards-Applied-Behavior-Analysis_2026-02-20-201406_lery.pdf' },
        ],
      },
      {
        h2: 'Commercial insurance first — Act 62 and COB',
        body: [
          'Community Care’s Act 62 page tells providers they “are required to bill private health insurance for the costs associated with ASD for children under the age of 21”, to “verify eligibility, benefits, and cap amount each time an ASD member presents”, and to include the commercial plan’s explanation of payment “with each ASD claim” (plus an exhaustion letter once a cap is exhausted). Provider Alert 5 (March 13, 2026) adds that neither provider nor member may use HealthChoices first “or to avoid the requirements of the primary payer”, that the provider must be eligible under the primary plan, and that a primary denial must be appealed through “all appeal levels” before Community Care pays. “Denials issued due to the provider being out-of-network … are not considered for payment”. A COB claim outside the county timely-filing window must reach Community Care within 30 calendar days of the primary payer’s decision date.',
          'Community Care also manages the autism behavioral health benefit for UPMC Health Plan commercial members under 21 (a separate line of business with its own autism care-management number, 1-877-822-3167, and fax forms).',
        ],
        cites: [
          { title: 'Community Care — Act 62 HealthChoices Coverage and Billing', url: 'https://providers.ccbh.com/provider-resources/act-62-resources/coverage-and-billing' },
          { title: 'Community Care Provider Alert 5 — Coordination of Benefits, HealthChoices (March 13, 2026)', url: 'https://providers.ccbh.com/uploads/files/Provider-Alert-5-Coordination-of-Benefits-COB-HealthChoices-Program.pdf' },
          { title: 'Community Care — UPMC Health Plan autism behavioral health care management', url: 'https://providers.ccbh.com/provider-resources/act-62-resources/behavioral-health-care-management' },
        ],
      },
    ],
    collect: [
      { title: 'County of residence and MA ID', desc: 'Community Care covers 41 counties; a family in Philadelphia, a Magellan, PerformCare or Carelon county has a different BH-MCO. Confirm eligibility at every visit.' },
      { title: 'Written order (within 12 months, face-to-face)', desc: 'From a licensed physician, psychologist, CRNP or other qualified licensed prescriber; must precede the assessment and list hours per service, settings and discharge markers.' },
      { title: 'Behavioral health diagnosis (DSM/ICD)', desc: 'IBHS is not autism-only, but the claim needs a valid F01.5–F98 behavioral health diagnosis code.' },
      { title: 'Commercial / CHIP / Medicare card and EOBs', desc: 'Primary coverage is billed first; include the primary EOB (or cap-exhaustion letter) with every ASD claim, and check your network status with the primary plan before starting.' },
      { title: 'FBA or skills assessment', desc: 'Required before new BHT/BHT-ABA: FBA when behavior change is the goal, a CSBA (e.g., VB-MAPP) when skill building is the goal.' },
    ],
    sources: [
      { title: 'Community Care Provider Manual (February 2026, 202602SH)', url: 'https://providers.ccbh.com/uploads/files/202602-providermanual_2026-02-03-153100_lbib.pdf' },
      { title: 'Community Care — Guidelines for Obtaining Approval for In-Plan Supplemental Services (July 2026)', url: 'https://providers.ccbh.com/uploads/files/Guidelines-for-Obtaining-Approval_2026-07-14-134655_jsis.pdf' },
      { title: 'Community Care Provider Alert 18 — IBHS: Adjustment to Authorization Timeframes (August 17, 2026)', url: 'https://providers.ccbh.com/uploads/img/Provider%20Alerts/Intensive-Behavioral-Health-Services-IBHS-Adjustment-to-Authorization-Timeframes.pdf' },
      { title: 'Community Care — Intensive Behavioral Health Services Performance Standards', url: 'https://providers.ccbh.com/uploads/files/CCBH-IBHS-Performance-Standards.pdf' },
      { title: 'Community Care — Performance Standards: Applied Behavior Analysis', url: 'https://providers.ccbh.com/uploads/files/Performance-Standards-Applied-Behavior-Analysis_2026-02-20-201406_lery.pdf' },
      { title: 'Community Care — MNG: ABA One-to-One Center-based Services (effective 7/8/2026)', url: 'https://providers.ccbh.com/uploads/files/Applied-Behavior-Analysis-One-to-One-Center-based-Services-Provision-of-One-to-One-IBHS-in-a-Licensed-Location_2026-06-10-193543_kurl.pdf' },
      { title: 'Community Care Provider Alert 5 — Coordination of Benefits, HealthChoices (March 13, 2026)', url: 'https://providers.ccbh.com/uploads/files/Provider-Alert-5-Coordination-of-Benefits-COB-HealthChoices-Program.pdf' },
      { title: 'Community Care Provider Alert 15 — Place of Service reporting (June 24, 2026)', url: 'https://providers.ccbh.com/uploads/files/New-Place-of-Service-Code-Available-and-Accurate-Reporting-of-Place-of-Service.pdf' },
      { title: 'Community Care — Act 62 HealthChoices Coverage and Billing', url: 'https://providers.ccbh.com/provider-resources/act-62-resources/coverage-and-billing' },
      { title: 'Community Care HealthChoices Member Handbook — Allegheny County (rev. 2025)', url: 'https://members.ccbh.com/uploads/files/counties/25ISD5609250-Allegheny-Handbook-Revised-for-Print-8-5-25-102025-ju.pdf' },
      { title: 'HealthChoices Appendix S — IBHS Medical Necessity Guidelines (as posted by Community Care)', url: 'https://providers.ccbh.com/uploads/files/Appendix-S-2024.pdf' },
      { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
      { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
      { title: 'OMHSAS-22-02 — Revised Guidelines for Delivery of BH Services Through Telehealth (eff. 7/1/2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/docs/documents/omhsas/Bulletin%20OMHSAS-22-02%20-%20Revised%20Guidelines%20for%20Delivery%20of%20BH%20Services%20Through%20Telehealth%207.1.22.pdf' },
      { title: 'PA DHS — Behavioral Health Managed Care Organizations (BH-MCOs) by county', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/bhc/bhc-mcos' },
    ],
    faq: [
      { q: 'Does Community Care require prior authorization for an ABA assessment?', a: 'No — the IBHS written order and assessment are registered in the ePortal (assessment within 30 days of service start; up to 200 units for “ASSESS-ABA”). ABA treatment itself needs prior authorization by packet review.' },
      { q: 'How long does a Community Care ABA authorization last?', a: 'For requests submitted on or after September 17, 2026, at most six months per authorization period. Written orders stay valid for up to 12 months, and a full formal assessment is still needed at least every 12 months.' },
      { q: 'My client has commercial insurance too. Who pays first?', a: 'The commercial plan (or CHIP/Medicare). Community Care is always the payer of last resort: you must be eligible in the primary plan’s network, follow its authorization rules, appeal its denials to the last level, and send its EOB with each claim. Out-of-network denials are not paid.' },
      { q: 'Can ABA be delivered in a center?', a: 'Yes, one-to-one center-based ABA by an OMHSAS-approved IBHS provider, when the written order and assessment both recommend it. Community Care’s July 2026 guidelines expect mostly under-6 children with documented neurodevelopmental delays and a plan to taper center hours.' },
    ],
    state: 'PA',
    kind: 'medicaid-mco',
    parent: 'Pennsylvania Medicaid (Medical Assistance)',
    cardDesc: 'BH-MCO for 41 PA counties; order + assessment registered in ePortal, ABA treatment by packet PA; 6-month auth cap from 9/17/2026.',
    assessmentPA: {
      value: 'No prior authorization — registration. Community Care’s approval grid lists “IBHS — Written Order: 60 Days from Service Start, ePortal, Registration” and “IBHS — Assessment: 30 Days from Service Start, ePortal, Registration”, and the provider manual’s registration list includes “IBHS ORDER and ASSESS”. Provider Alert 18 sets the ePortal maximum at “200 units for ABA Individual ‘ASSESS-ABA’ authorizations”. The written order must come first.',
      status: 'verified',
      cites: [
        { title: 'Community Care — Guidelines for Obtaining Approval for In-Plan Supplemental Services (July 2026)', url: 'https://providers.ccbh.com/uploads/files/Guidelines-for-Obtaining-Approval_2026-07-14-134655_jsis.pdf' },
        { title: 'Community Care Provider Manual (February 2026, 202602SH)', url: 'https://providers.ccbh.com/uploads/files/202602-providermanual_2026-02-03-153100_lbib.pdf' },
        { title: 'Community Care Provider Alert 18 — IBHS: Adjustment to Authorization Timeframes (August 17, 2026)', url: 'https://providers.ccbh.com/uploads/img/Provider%20Alerts/Intensive-Behavioral-Health-Services-IBHS-Adjustment-to-Authorization-Timeframes.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Yes. IBHS treatment is “Prior Auth” by “Packet Review”, due within “45 Days from Service Start”, with continued-stay requests “Before Last Covered Day”. From September 17, 2026 authorizations run a maximum of six months; longer requests “will not be processed as submitted”. New BHT/BHT-ABA requests need an FBA (or a commercial skill-based assessment such as the VB-MAPP when skill building is the goal). One-to-one center-based ABA follows Community Care’s own MNG (eff. 7/8/2026); other ABA follows state Appendix S.',
      status: 'verified',
      cites: [
        { title: 'Community Care — Guidelines for Obtaining Approval for In-Plan Supplemental Services (July 2026)', url: 'https://providers.ccbh.com/uploads/files/Guidelines-for-Obtaining-Approval_2026-07-14-134655_jsis.pdf' },
        { title: 'Community Care Provider Alert 18 — IBHS: Adjustment to Authorization Timeframes (August 17, 2026)', url: 'https://providers.ccbh.com/uploads/img/Provider%20Alerts/Intensive-Behavioral-Health-Services-IBHS-Adjustment-to-Authorization-Timeframes.pdf' },
        { title: 'Community Care — Intensive Behavioral Health Services Performance Standards', url: 'https://providers.ccbh.com/uploads/files/CCBH-IBHS-Performance-Standards.pdf' },
        { title: 'Community Care — MNG: ABA One-to-One Center-based Services (effective 7/8/2026)', url: 'https://providers.ccbh.com/uploads/files/Applied-Behavior-Analysis-One-to-One-Center-based-Services-Provision-of-One-to-One-IBHS-in-a-Licensed-Location_2026-06-10-193543_kurl.pdf' },
      ],
    },
    dxRequired: {
      value: 'A behavioral health diagnosis, not specifically autism. The state IBHS rule serves “children, youth or young adults with a behavioral health diagnosis”, and the written order must carry a DSM/ICD diagnosis (55 Pa. Code § 1155.33). Community Care applies state Appendix S to ABA and publishes no autism-only rule; its ABA Performance Standards say ABA “can be applied across multiple diagnoses”, and claims need a valid ICD-10 behavioral health code (F01.5–F98). For center-based 1:1 ABA it expects “documented neurodevelopmental delays … as determined by a diagnostic evaluation by a qualified clinician”.',
      status: 'verified',
      cites: [
        { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
        { title: 'Community Care — Performance Standards: Applied Behavior Analysis', url: 'https://providers.ccbh.com/uploads/files/Performance-Standards-Applied-Behavior-Analysis_2026-02-20-201406_lery.pdf' },
        { title: 'Community Care Provider Manual (February 2026, 202602SH)', url: 'https://providers.ccbh.com/uploads/files/202602-providermanual_2026-02-03-153100_lbib.pdf' },
        { title: 'Community Care — MNG: ABA One-to-One Center-based Services (effective 7/8/2026)', url: 'https://providers.ccbh.com/uploads/files/Applied-Behavior-Analysis-One-to-One-Center-based-Services-Provision-of-One-to-One-IBHS-in-a-Licensed-Location_2026-06-10-193543_kurl.pdf' },
      ],
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the state rule. Community Care’s IBHS Performance Standards send providers to “the IBHS regulations (specifically sections … 5240.82 for ABA …) and the ‘Staff Supervision’ Section of the OMHSAS IBHS FAQ”; its ABA standards add no ratios of their own. Under § 5240.82, BHT-ABA staff get one hour of supervision a week if they work at least 37.5 hours (otherwise twice a month), including one hour of individual face-to-face supervision a month, 6 hours of onsite supervision before working alone if new to BHT-ABA, and 1 hour of direct observation every 4 months. BA and BC-ABA staff get 1 hour of face-to-face supervision a month (plus 1 more if they supervise assistants or BHTs) and 30 minutes of direct observation every 6 months.',
        status: 'verified',
        cites: [
          { title: 'Community Care — Intensive Behavioral Health Services Performance Standards', url: 'https://providers.ccbh.com/uploads/files/CCBH-IBHS-Performance-Standards.pdf' },
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
        ],
      },
      concurrentBilling: {
        value: 'Not published by Community Care. The OMHSAS IBHS FAQ says that “in fee for service”, BA, BC-ABA or BCaBA-level assistant staff “can separately bill for direct observation and supervision of staff providing BHT-ABA services while the individual is working with a child”. That supports billing 97155 at the same time as 97153 in FFS, but the FAQ limits it to FFS. Community Care’s manual and ABA/IBHS standards say nothing about same-clock-time billing, and its fee schedule (attached to each provider contract) sets the billing rules.',
        status: 'plan-dependent',
        cites: [
          { title: 'OMHSAS IBHS Frequently Asked Questions (updated February 2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/intensive-behavioral-health-services-(ibhs)/ibhs-faq-updated-02-22-22.pdf' },
          { title: 'Community Care Provider Manual (February 2026, 202602SH)', url: 'https://providers.ccbh.com/uploads/files/202602-providermanual_2026-02-03-153100_lbib.pdf' },
        ],
        verifyVia: 'The Community Care fee schedule attached to your IBHS-ABA contract (the manual says to “reference the fee schedule attached to the contract for both approval and billing rules”), or Provider Reimbursement at 1-888-251-2224, option 1. Get the answer on overlapping 97155/97153 units in writing.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No per-day unit ceiling for ABA treatment is published by Community Care. Its published unit limits are ePortal assessment maximums (200 units for “ASSESS-ABA”, 100 for other IBHS “ASSESS”). Treatment hours are set per member by the written order’s monthly maximums and the authorization, and billing units come from the contracted fee schedule.',
        status: 'plan-dependent',
        cites: [
          { title: 'Community Care Provider Alert 18 — IBHS: Adjustment to Authorization Timeframes (August 17, 2026)', url: 'https://providers.ccbh.com/uploads/img/Provider%20Alerts/Intensive-Behavioral-Health-Services-IBHS-Adjustment-to-Authorization-Timeframes.pdf' },
          { title: 'Community Care Provider Manual (February 2026, 202602SH)', url: 'https://providers.ccbh.com/uploads/files/202602-providermanual_2026-02-03-153100_lbib.pdf' },
        ],
        verifyVia: 'The billing-unit column of the Community Care fee schedule in your contract, or Provider Reimbursement at 1-888-251-2224, option 1.',
        blocker: 'document',
      },
      noteSignature: {
        value: 'Follows the state rule. 55 Pa. Code § 5240.41 requires each service note to be signed by the staff person who provided the service. Community Care’s manual, ABA and IBHS standards set no different signer or deadline (we checked). For telehealth, OMHSAS-22-02 allows physical or electronic consent/verification signatures if an audit trail validates the signer.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
          { title: 'OMHSAS-22-02 — Revised Guidelines for Delivery of BH Services Through Telehealth (eff. 7/1/2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/docs/documents/omhsas/Bulletin%20OMHSAS-22-02%20-%20Revised%20Guidelines%20for%20Delivery%20of%20BH%20Services%20Through%20Telehealth%207.1.22.pdf' },
          { title: 'Community Care — Intensive Behavioral Health Services Performance Standards', url: 'https://providers.ccbh.com/uploads/files/CCBH-IBHS-Performance-Standards.pdf' },
        ],
      },
      placeOfService: {
        value: 'Home, school and community, in the settings the written order names. School participation in the FBA is “necessary when services are recommended to occur while the member is attending school”. One-to-one center-based ABA requires an IBHS provider “licensed and approved by OMHSAS” for it, and both the written order and the assessment must recommend it. Community Care’s center-based MNG (eff. 7/8/2026) expects mostly under-6 children and requires the ITP to taper hours. Provider Alert 15 says the claim’s POS must match where the service was documented, and “allowable POSs vary by level of care and even billing code” on your fee schedule.',
        status: 'verified',
        cites: [
          { title: 'Community Care — Intensive Behavioral Health Services Performance Standards', url: 'https://providers.ccbh.com/uploads/files/CCBH-IBHS-Performance-Standards.pdf' },
          { title: 'Community Care — MNG: ABA One-to-One Center-based Services (effective 7/8/2026)', url: 'https://providers.ccbh.com/uploads/files/Applied-Behavior-Analysis-One-to-One-Center-based-Services-Provision-of-One-to-One-IBHS-in-a-Licensed-Location_2026-06-10-193543_kurl.pdf' },
          { title: 'Community Care Provider Alert 15 — Place of Service reporting (June 24, 2026)', url: 'https://providers.ccbh.com/uploads/files/New-Place-of-Service-Code-Available-and-Accurate-Reporting-of-Place-of-Service.pdf' },
        ],
      },
      billAsProvider: {
        value: 'The licensed, MA-enrolled IBHS agency contracted with Community Care bills on the CMS-1500/837P (payer ID 23282), using the procedure codes and modifiers on its Community Care fee schedule. The manual requires a rendering provider NPI (box 24j / loop 2310B) and ordering (ORP) provider data. It does not say whether a BHT-ABA’s own NPI or a supervising clinician’s NPI goes in the rendering field.',
        status: 'plan-dependent',
        cites: [
          { title: 'Community Care Provider Manual (February 2026, 202602SH)', url: 'https://providers.ccbh.com/uploads/files/202602-providermanual_2026-02-03-153100_lbib.pdf' },
        ],
        verifyVia: 'Your Community Care contract and fee schedule, or Provider Reimbursement at 1-888-251-2224, option 1. Ask which NPI goes in the rendering field for BHT-ABA and assistant BC-ABA lines.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. IBHS serves children, youth and young adults under 21 (55 Pa. Code Ch. 1155/5240). Community Care’s member handbook lists IBHS as a “(child/adolescent)” service and sets no other age limit. For center-based 1:1 ABA, children are “typically under the age of 6” under Community Care’s own MNG.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'Community Care HealthChoices Member Handbook — Allegheny County (rev. 2025)', url: 'https://members.ccbh.com/uploads/files/counties/25ISD5609250-Allegheny-Handbook-Revised-for-Print-8-5-25-102025-ju.pdf' },
          { title: 'Community Care — MNG: ABA One-to-One Center-based Services (effective 7/8/2026)', url: 'https://providers.ccbh.com/uploads/files/Applied-Behavior-Analysis-One-to-One-Center-based-Services-Provision-of-One-to-One-IBHS-in-a-Licensed-Location_2026-06-10-193543_kurl.pdf' },
        ],
      },
      dxRecency: {
        value: 'What must be recent is the written order, not a diagnosis. Community Care “requires the face-to-face evaluation occur within 1 year/365 days from the date a recommendation is made for IBHS”, and written orders are “valid for 12 months”. If the order expires during an authorization, service is not interrupted. A full formal assessment is required at least every 12 months (Provider Alert 18). Neither Community Care nor the state sets a separate age limit on the autism diagnosis itself.',
        status: 'verified',
        cites: [
          { title: 'Community Care — Intensive Behavioral Health Services Performance Standards', url: 'https://providers.ccbh.com/uploads/files/CCBH-IBHS-Performance-Standards.pdf' },
          { title: 'Community Care Provider Alert 18 — IBHS: Adjustment to Authorization Timeframes (August 17, 2026)', url: 'https://providers.ccbh.com/uploads/img/Provider%20Alerts/Intensive-Behavioral-Health-Services-IBHS-Adjustment-to-Authorization-Timeframes.pdf' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
        ],
      },
      diagnosingProviders: {
        value: 'The written order must come from a licensed physician, licensed psychologist, CRNP or another licensed professional whose scope covers diagnosing and treating behavioral health disorders and prescribing BH services (55 Pa. Code § 1155.33). Community Care lists acceptable routes: a PCP/CRNP wellness check, an outpatient intake or therapy session, a psychological or psychiatric evaluation, psychological testing, a discharge from inpatient/RTF/PHP, or a mental health assessment by a “licensed and PROMISe enrolled prescriber from an IBHS agency”.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'Community Care — Intensive Behavioral Health Services Performance Standards', url: 'https://providers.ccbh.com/uploads/files/CCBH-IBHS-Performance-Standards.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'No diagnostic instrument is required. Neither Community Care’s IBHS/ABA standards nor state Appendix S names one (such as the ADOS-2). The required tool is on the treatment side: an FBA by an FBA-certified GLP before new BHT/BHT-ABA when behavior change is the goal, or a commercial skill-based assessment (for example the VB-MAPP) “in lieu of an FBA” when skill building is the goal. A current school FBA/CSBA may be used.',
        status: 'verified',
        cites: [
          { title: 'Community Care — Intensive Behavioral Health Services Performance Standards', url: 'https://providers.ccbh.com/uploads/files/CCBH-IBHS-Performance-Standards.pdf' },
          { title: 'Community Care — Performance Standards: Applied Behavior Analysis', url: 'https://providers.ccbh.com/uploads/files/Performance-Standards-Applied-Behavior-Analysis_2026-02-20-201406_lery.pdf' },
          { title: 'HealthChoices Appendix S — IBHS Medical Necessity Guidelines (as posted by Community Care)', url: 'https://providers.ccbh.com/uploads/files/Appendix-S-2024.pdf' },
        ],
      },
      referral: {
        value: 'A written order is required. It is based on a face-to-face evaluation within the past year and must include the diagnosis, the maximum hours of each ABA service per month, the settings and measurable discharge markers (55 Pa. Code § 1155.33). A family may take a valid order to any in-network IBHS-ABA provider. Community Care has a Written Order Letter template, and its IBHS care managers call back the same or next business day to connect a family with a prescriber or provider. No PCP referral beyond the written order is required.',
        status: 'verified',
        cites: [
          { title: 'Community Care — Intensive Behavioral Health Services Performance Standards', url: 'https://providers.ccbh.com/uploads/files/CCBH-IBHS-Performance-Standards.pdf' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
        ],
      },
      telehealth: {
        value: 'Partly published. OMHSAS-22-02 says HealthChoices providers “must follow the billing instructions of the BH-MCO”. Community Care’s billing manual says only that telehealth “require[s] a specific Place of Service Code, which is 02”. It does not mention POS 10 (home) or the FQ audio-only modifier from the state bulletin. Its member handbook lists telehealth as needing no separate prior authorization. We found no ABA- or IBHS-specific telehealth policy; its only telemedicine standard (2018) covers telepsychiatry. The IBHS written-order evaluation may be face-to-face in person or by telehealth.',
        status: 'plan-dependent',
        cites: [
          { title: 'Community Care Provider Manual (February 2026, 202602SH)', url: 'https://providers.ccbh.com/uploads/files/202602-providermanual_2026-02-03-153100_lbib.pdf' },
          { title: 'OMHSAS-22-02 — Revised Guidelines for Delivery of BH Services Through Telehealth (eff. 7/1/2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/docs/documents/omhsas/Bulletin%20OMHSAS-22-02%20-%20Revised%20Guidelines%20for%20Delivery%20of%20BH%20Services%20Through%20Telehealth%207.1.22.pdf' },
          { title: 'Community Care HealthChoices Member Handbook — Allegheny County (rev. 2025)', url: 'https://members.ccbh.com/uploads/files/counties/25ISD5609250-Allegheny-Handbook-Revised-for-Print-8-5-25-102025-ju.pdf' },
          { title: 'Community Care — Performance Standards: Clinical Telemedicine Services (2018)', url: 'https://providers.ccbh.com/uploads/files/Performance-Standards/201808-perf-standards-clinical-telemedicine-services.pdf' },
          { title: 'Community Care — Intensive Behavioral Health Services Performance Standards', url: 'https://providers.ccbh.com/uploads/files/CCBH-IBHS-Performance-Standards.pdf' },
        ],
        verifyVia: 'The POS column of the Community Care fee schedule for each ABA code (Provider Alert 15: “allowable POSs vary by level of care and even billing code”), or your Community Care Provider Relations Representative. Confirm which ABA codes allow POS 02/10 and whether FQ is accepted.',
        blocker: 'document',
      },
      authTurnaround: {
        value: 'Community Care’s member handbook: it “will tell you of its decision within two business days of the date Community Care received the request if Community Care has enough information”. If information is missing, it must tell the provider “within 48 hours” and “allow 14 days” to send it, then decide within two business days of receiving it. This matches the Act 146 rule for MA plans. Federal floor: 42 CFR 438.210(d), 7 calendar days standard / 72 hours expedited for rating periods from 1/1/2026. Deadlines on the provider side: the IBHS treatment packet is due within 45 days of service start, and continued-stay requests “Before Last Covered Day”. Authorizations max out at 6 months from 9/17/2026, so reauthorize at least twice a year.',
        status: 'verified',
        cites: [
          { title: 'Community Care HealthChoices Member Handbook — Allegheny County (rev. 2025)', url: 'https://members.ccbh.com/uploads/files/counties/25ISD5609250-Allegheny-Handbook-Revised-for-Print-8-5-25-102025-ju.pdf' },
          { title: 'Community Care — Guidelines for Obtaining Approval for In-Plan Supplemental Services (July 2026)', url: 'https://providers.ccbh.com/uploads/files/Guidelines-for-Obtaining-Approval_2026-07-14-134655_jsis.pdf' },
          { title: 'Community Care Provider Alert 18 — IBHS: Adjustment to Authorization Timeframes (August 17, 2026)', url: 'https://providers.ccbh.com/uploads/img/Provider%20Alerts/Intensive-Behavioral-Health-Services-IBHS-Adjustment-to-Authorization-Timeframes.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
          { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Community Care “is always the insurance payer of last resort”. The provider must identify the primary plan, be eligible under it and meet its authorization and billing rules. Neither provider nor member may use HealthChoices first “or to avoid the requirements of the primary payer”. Primary denials must be appealed through all levels. “Denials issued due to the provider being out-of-network … are not considered for payment”. Community Care pays patient liability up to its fee schedule. For ASD, providers must bill private insurance first (Act 62) and attach the EOB, or an exhaustion letter, to every ASD claim. A COB claim outside the county timely-filing window must arrive within 30 calendar days of the primary’s decision date. The handbook: with other (non-Medicare) insurance, follow “the rules of your other insurance and Community Care, such as prior authorization”, so get Community Care’s IBHS authorization as well. State and federal backstops: 55 Pa. Code § 1101.64 and § 1155.31(e); TRICARE pays ahead of Medicaid (10 U.S.C. 1079(i)(1)).',
        status: 'verified',
        cites: [
          { title: 'Community Care Provider Alert 5 — Coordination of Benefits, HealthChoices (March 13, 2026)', url: 'https://providers.ccbh.com/uploads/files/Provider-Alert-5-Coordination-of-Benefits-COB-HealthChoices-Program.pdf' },
          { title: 'Community Care Provider Manual (February 2026, 202602SH)', url: 'https://providers.ccbh.com/uploads/files/202602-providermanual_2026-02-03-153100_lbib.pdf' },
          { title: 'Community Care — Act 62 HealthChoices Coverage and Billing', url: 'https://providers.ccbh.com/provider-resources/act-62-resources/coverage-and-billing' },
          { title: 'Community Care HealthChoices Member Handbook — Allegheny County (rev. 2025)', url: 'https://members.ccbh.com/uploads/files/counties/25ISD5609250-Allegheny-Handbook-Revised-for-Print-8-5-25-102025-ju.pdf' },
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
        ],
      },
    },
  },
  'community-behavioral-health-philadelphia': {
    slug: 'community-behavioral-health-philadelphia',
    payer: 'Community Behavioral Health (CBH) — Philadelphia HealthChoices BH-MCO',
    pill: 'Payer Guide · Community Behavioral Health (Philadelphia)',
    h1: 'Community Behavioral Health (CBH) ABA coverage — Philadelphia Medicaid.',
    metaTitle: 'Community Behavioral Health (CBH Philadelphia) ABA / IBHS Coverage & Prior Auth | Carelu',
    metaDescription:
      'How CBH, Philadelphia’s HealthChoices behavioral health MCO, authorizes Medicaid ABA (IBHS-ABA): written-order-only initial assessment and treatment, packet prior auth with ITP schedule tables, the 2025 realignment (6-month cap, two caregiver goals, 32 BHT units a day), concurrent-billing rules, telehealth and TPL.',
    intro: [
      'Community Behavioral Health (CBH) is the City of Philadelphia’s behavioral health managed care organization, run under the Department of Behavioral Health and Intellectual disAbility Services (DBHIDS), and the only HealthChoices BH-MCO for Philadelphia County. Medicaid ABA in Philadelphia is IBHS-ABA under 55 Pa. Code Chapters 1155 and 5240, delivered only by CBH “ABA-designated” providers.',
      'All IBHS-ABA needs prior authorization at CBH, including the first authorization. It is just light at the start: ABA Initial Assessment (100 units, 30 days) and ABA Initial Treatment (200 units, 45 days) need only a written order. Every later request needs a packet with the written order, a cross-setting assessment with an FBA and/or skills assessment, and a signed ITP whose schedule tables CBH treats as the request itself. The 2025 “IBHS/ABA realignment” capped authorizations at six months, required at least two parent/caregiver training goals, added psychologist review for children with an IEP and for anyone over 12, and limited BHT-ABA to 32 units a day.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'HealthChoices behavioral health MCO (PIHP) for Philadelphia County; a City of Philadelphia (DBHIDS) entity' },
      { label: 'ABA benefit', value: 'IBHS-ABA, up to the day before the 21st birthday, for a behavioral health diagnosis; ABA-designated providers only' },
      { label: 'Initial assessment + initial treatment', value: 'Prior auth on a written order alone: 100 units/30 days (425-6) and 200 units/45 days (425-7) since 2/23/2025' },
      { label: 'Ongoing ABA', value: 'Packet prior auth: WO + assessment (FBA/skills) + signed ITP with weekly schedule and monthly hours tables' },
      { label: 'Authorization length', value: 'Maximum six months (Bulletin 25-05); submit continued requests 14–30 days before the last covered date' },
      { label: 'Decision time', value: 'Two business days; 48-hour insufficient notice and 14 days to cure; packets in by 2 p.m. are reviewed the next business day' },
      { label: 'Other coverage', value: 'Payer of last resort for all IBHS; CBH matches a primary insurer’s ABA authorization without its own medical-necessity review' },
    ],
    sections: [
      {
        h2: 'CBH requires prior authorization for ABA — starting light',
        body: [
          'CBH’s member handbook lists “IBHS Applied Behavior Analysis (ABA) Services — Prior Authorization Required: Yes”, and the provider manual’s authorization grid says: “For ABA-Initial Assessment and ABA-Initial Treatment, only WO is required. All concurrent requests require WO, IBHS Assessment including FBA and/or Skills Assessment, and Individual Treatment Plan (ITP).” There is no no-auth or registration-only path for ABA at CBH; the easy part is only the first two authorizations.',
          'Since February 23, 2025 (Bulletin 25-05), CBH authorizes “IBHS Assessment - ABA: 100 units for 30-day duration” and “IBHS Initial Treatment - ABA: 200 units for 45-day duration”. For those two it will backdate up to five business days if the written order specifies a start date (Bulletin 25-19). From June 15, 2025 it will not backdate any concurrent IBHS authorization. A request made after the last covered date is treated as a new initial request, and continuation rights will not apply if the parent grieves a denial.',
          'Since January 1, 2024 (Bulletin 23-26), CBH “will consider this section of the ITP as the authorization request” and approves up to the service types and hours in the ITP, as long as the written order covers them. Every ITP must include two tables: a weekly “Schedule of Direct ABA Services” by home/school/community, and “Recommended Services per Month” by service type (BCBA, BC, ABC, BHT) with location breakdown and dates. Up to 160 BHT-ABA hours a month is “within the established medical necessity guidelines” (Bulletin 23-08); above that, CBH wants the full IBHS assessment and ITP.',
        ],
        cites: [
          { title: 'CBH Member Handbook (January 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Member-Handbook_2025-01_WEB.pdf' },
          { title: 'CBH Provider Manual (updated August 28, 2026)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Manual_2026-08-28.pdf' },
          { title: 'CBH Provider Bulletin 25-05 — Changes to IBHS-ABA Authorization Practices (January 23, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-05_2025-02-04_IBHS_ABA.pdf' },
          { title: 'CBH Provider Bulletin 25-19 — IBHS: Clarification on Back Dating Authorizations (May 15, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-19_2025-05-15_IBHS_Clarification_on_Back_Dating_Authorizations.pdf' },
          { title: 'CBH Provider Bulletin 23-26 — Changes in Prior Authorization Requirements for IBHS-ABA (November 14, 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/11/CBH_Provider-Bulletin_23-26_2023-11-14_Changes_in_Prior_Auth_Requirements_for_IBHS-ABA.pdf' },
          { title: 'CBH Provider Bulletin 23-08 — Changes in Prior Authorization Requirements for IBHS-ABA (March 29, 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/03/Provider_Bulletin_23_08_IBHS-ABA-Authorization-Updates.pdf' },
        ],
      },
      {
        h2: 'The 2025 IBHS/ABA realignment',
        body: [
          'Bulletin 25-25 (July 31, 2025) and the September 2025 FAQ changed how CBH reviews ABA. For requests reviewed from September 1, 2025, “CBH will not authorize IBHS services unless the ITP includes at least two parent/caregiver training goals and minimal monthly parent/caregiver training sessions” (weekly is best practice). CBH does a medical-necessity review for every youth with an IEP and every youth over 12, with a psychologist or physician advisor involved. New July 2025 medical necessity criteria cover ABA Early Childhood Intensive Treatment (ABA-ECIT) and ABA 1:1 in a center. From October 1, 2025, BHT-ABA is limited to 32 units a day, and 1:1 site-based BHT-ABA lines carry the UD pricing modifier.',
          'The October 14, 2025 notice says packets missing a required element (signatures, dates, NPI and PROMISe IDs on the written order, a signed cross-setting assessment, a signed ITP, recent data) will be marked “Administratively Insufficient”, with 14 days to fix them. Responses to an insufficient finding are written only, at most three pages. Peer-to-peer review is offered after any denial.',
          'The July 2025 MNC also states, under initiation, that ABA requires “a qualified, comprehensive assessment by a clinician with neurodevelopmental disorder diagnoses within their scope of practice” and that “the child must also have a neurodevelopmental disorder that is considered severe and requires ‘very substantial support.’” That is stricter than the state’s any-behavioral-health-diagnosis rule and CBH’s own manual. Expect CBH reviewers to look for severity documentation.',
        ],
        cites: [
          { title: 'CBH Provider Bulletin 25-25 — Changes to IBHS-ABA MNC, Authorization, and Service Delivery (July 31, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-25_ABA-Changes_2025-07-31.pdf' },
          { title: 'CBH — FAQ: IBHS-ABA Services Realignment (September 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_IBHS-ABA-Realignment_FAQ_2025-09-12.pdf' },
          { title: 'CBH Provider Notice — IBHS/ABA Realignment Update (October 14, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH-Provider_Notice_IBHS_ABA_Realignment_Update_2025-10-14.pdf' },
          { title: 'CBH Medical Necessity Criteria — IBHS-ABA (updated July 31, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_MNC_Child_IBHS-ABA_2025-07.pdf' },
        ],
      },
      {
        h2: 'Billing ABA at CBH',
        body: [
          'CBH bills ABA by level-of-care code on each provider’s Schedule A: 425-6 Assessment-ABA, 425-7 Initial Treatment-ABA, 425-28 BCBA, 425-29 Behavior Consultation, 425-30 Assistant Behavior Consultation and 425-31 BHT-ABA. Each maps to CPT 97151–97156, and pricing modifiers show the credential: U7 for Behavior Analytic, U8 for Assistant BC-ABA, none for BC-ABA and BHT-ABA. Two staff may bill at the same time only for distinct services with different CPT codes, each documenting the other’s presence. A BCBA’s 97155/97156 alongside a BHT’s 97153 is allowed as a “rare exception” when “all four people are present together (parent, child, BCBA and BHT)”. Supervision and direct observation are never billable.',
          'Notes must be in the record “within seven days of the date of service or prior to claim submission, whichever comes first”, and “signed and dated by the qualified clinician who provided the service”. CBH’s February 2026 notice says signatures must be original, and it may recoup for pasted, photocopied or typed-font signatures and for signatures dated before the session ended.',
        ],
        cites: [
          { title: 'CBH IBHS Billing Guide (updated May 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/08/CBH_IBHS_Billing-Guide_2023-05.pdf' },
          { title: 'CBH Provider Notice — Original Signature Requirements (February 2, 2026)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Notice_2026-02-02_Signature-Requirements.pdf' },
        ],
      },
      {
        h2: 'Early-childhood center programs (ABA-EC / ECIT)',
        body: [
          'CBH contracts ABA Early Childhood programs for children “ages 3-5 who have not yet entered kindergarten” who cannot be served in a less restrictive setting. Children need a primary ASD diagnosis “with Level 2 or 3 severity for either the social communication or restricted, repetitive behaviors and interests domains”. Programs run at least 240 days a year with at least four hours of intensive ABA a day, at about one staff to three children, with at most nine children per room. Only contracted ECIT providers decide whether a child is appropriate.',
        ],
        cites: [
          { title: 'CBH Clinical Performance Standards — ABA Early Childhood Programs (December 2024)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_CPS_ABA-EC_2024-12.pdf' },
          { title: 'CBH Provider Manual (updated August 28, 2026)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Manual_2026-08-28.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Philadelphia residence and MA ID', desc: 'CBH covers Philadelphia County only; confirm HealthChoices eligibility in EVS before each authorization.' },
      { title: 'Written order (face-to-face within 365 days)', desc: 'Signed and dated in original ink or with a verified e-signature, with the prescriber’s NPI and PROMISe ID, the DSM/ICD diagnosis, monthly maximum hours per service and settings. Only this is needed for Initial Assessment and Initial Treatment.' },
      { title: 'Diagnostic evaluation with severity', desc: 'The 2025 MNC looks for a neurodevelopmental diagnosis with documented severity and functional impairment. ADOS-2 is preferred but not required.' },
      { title: 'Parent/caregiver availability', desc: 'Since 9/1/2025 no authorization without at least two caregiver training goals and at least monthly caregiver sessions. Set this expectation at intake.' },
      { title: 'IEP/504 status and age', desc: 'A child with an IEP/504, or any child over 12, triggers enhanced psychologist/physician review.' },
      { title: 'Commercial, CHIP, Medicare or TRICARE coverage', desc: 'CBH is payer of last resort for all IBHS. Get the primary plan’s ABA authorization and EOB; an out-of-network denial by the primary is not a final determination.' },
    ],
    sources: [
      { title: 'CBH Provider Manual (updated August 28, 2026)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Manual_2026-08-28.pdf' },
      { title: 'CBH Medical Necessity Criteria — IBHS-ABA (updated July 31, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_MNC_Child_IBHS-ABA_2025-07.pdf' },
      { title: 'CBH Applied Behavior Analysis Performance Standards v3.0 (May 2021)', url: 'https://cbhphilly.org/wp-content/uploads/2021/05/2021-05-13_ABA_performance_standards_final.pdf' },
      { title: 'CBH IBHS Billing Guide (updated May 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/08/CBH_IBHS_Billing-Guide_2023-05.pdf' },
      { title: 'CBH Provider Bulletin 25-05 — Changes to IBHS-ABA Authorization Practices (January 23, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-05_2025-02-04_IBHS_ABA.pdf' },
      { title: 'CBH Provider Bulletin 25-19 — IBHS: Clarification on Back Dating Authorizations (May 15, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-19_2025-05-15_IBHS_Clarification_on_Back_Dating_Authorizations.pdf' },
      { title: 'CBH Provider Bulletin 25-25 — Changes to IBHS-ABA MNC, Authorization, and Service Delivery (July 31, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-25_ABA-Changes_2025-07-31.pdf' },
      { title: 'CBH — FAQ: IBHS-ABA Services Realignment (September 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_IBHS-ABA-Realignment_FAQ_2025-09-12.pdf' },
      { title: 'CBH Provider Notice — IBHS/ABA Realignment Update (October 14, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH-Provider_Notice_IBHS_ABA_Realignment_Update_2025-10-14.pdf' },
      { title: 'CBH Provider Bulletin 25-36 — Changes to the IBHS Submission Process (December 11, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-36_2025-12-11_IBHS-Submission.pdf' },
      { title: 'CBH Provider Bulletin 23-26 — Changes in Prior Authorization Requirements for IBHS-ABA (November 14, 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/11/CBH_Provider-Bulletin_23-26_2023-11-14_Changes_in_Prior_Auth_Requirements_for_IBHS-ABA.pdf' },
      { title: 'CBH Provider Bulletin 23-08 — Changes in Prior Authorization Requirements for IBHS-ABA (March 29, 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/03/Provider_Bulletin_23_08_IBHS-ABA-Authorization-Updates.pdf' },
      { title: 'CBH Telehealth Best Practice Guidelines (Provider Manual supplement, November 2024)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Best-Practices_Telehealth_2024-11.pdf' },
      { title: 'CBH Provider Bulletin 22-16 — POS 10 and Modifier FQ for Telehealth (July 25, 2022)', url: 'https://cbhphilly.org/wp-content/uploads/2022/07/CBH_Provider-Bulletin_22-16_2022-07-25_POS-10-and-Modifier-FQ-Telehealth-Service-Delivery.pdf' },
      { title: 'CBH Provider Notice — IBHS Payment & Third-Party Medical Resources (January 31, 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/01/CBH_Provider-Notice_IBHS-TPR_2023-1-31.pdf' },
      { title: 'CBH Provider Notice — Original Signature Requirements (February 2, 2026)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Notice_2026-02-02_Signature-Requirements.pdf' },
      { title: 'CBH Clinical Performance Standards — ABA Early Childhood Programs (December 2024)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_CPS_ABA-EC_2024-12.pdf' },
      { title: 'CBH Member Handbook (January 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Member-Handbook_2025-01_WEB.pdf' },
      { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
      { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
    ],
    faq: [
      { q: 'Does CBH require prior authorization for ABA, or is it registration only?', a: 'Prior authorization. CBH’s member handbook marks IBHS-ABA “Prior Authorization Required: Yes”. The first two authorizations, ABA Initial Assessment (100 units/30 days) and ABA Initial Treatment (200 units/45 days), need only a written order. Every later request needs the written order, the assessment (FBA and/or skills assessment) and a signed ITP.' },
      { q: 'How long is a CBH ABA authorization?', a: 'At most six months since February 23, 2025, even though a written order can be used for up to 365 days. Submit continued requests 14–30 days before the last covered date; CBH no longer backdates concurrent authorizations.' },
      { q: 'Can a BCBA and a BHT both bill for the same session at CBH?', a: 'Only as a “rare exception”: each must bill a distinct CPT code (for example 97155 or 97156 alongside 97153), all four people (parent, child, BCBA, BHT) must be present, and each must document the other’s service. Supervision and direct observation are never billable.' },
      { q: 'Is telehealth ABA covered by CBH?', a: 'Only as a supplement. CBH expects IBHS to be delivered primarily in person; telehealth may support contact with collaterals or act as a rare backup. Bill POS 10 for the member’s home, POS 02 elsewhere, and add FQ for audio-only.' },
      { q: 'The child has private insurance. Does CBH still review medical necessity?', a: 'Usually not. When the primary plan authorizes ABA, CBH matches that authorization at the same frequency and duration without a separate medical-necessity decision. It reviews as primary only if the primary denies (after its appeals), doesn’t cover the service, or the annual benefit cap is exhausted.' },
    ],
    state: 'PA',
    kind: 'medicaid-mco',
    parent: 'Pennsylvania Medicaid (Medical Assistance)',
    cardDesc: 'Philadelphia’s BH-MCO; ABA needs PA (initial on a written order only); 6-month cap, 2 caregiver goals, 32 BHT units/day since 2025.',
    assessmentPA: {
      value: 'Yes, but on a written order alone. ABA Initial Assessment (LOC 425-6) is prior-authorized for “100 units for 30-day duration” from the written order only (since 2/23/2025). If the written order names a start date, CBH will backdate up to five business days. The manual: “For ABA-Initial Assessment and ABA-Initial Treatment, only WO is required.”',
      status: 'verified',
      cites: [
        { title: 'CBH Provider Bulletin 25-05 — Changes to IBHS-ABA Authorization Practices (January 23, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-05_2025-02-04_IBHS_ABA.pdf' },
        { title: 'CBH Provider Bulletin 25-19 — IBHS: Clarification on Back Dating Authorizations (May 15, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-19_2025-05-15_IBHS_Clarification_on_Back_Dating_Authorizations.pdf' },
        { title: 'CBH Provider Manual (updated August 28, 2026)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Manual_2026-08-28.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Yes. ABA Initial Treatment (425-7) is approved on the written order alone: 200 units over 45 days. After that, each request (BCBA 425-28, BC 425-29, ABC 425-30, BHT 425-31, group, ECIT) needs the written order (face-to-face within 365 days), an IBHS assessment with FBA and/or skills assessment meeting §§ 5240.21/5240.85, and a signed ITP with the weekly schedule and monthly-hours tables. CBH treats that ITP section as the request. Maximum six months per authorization. Since 9/1/2025 there must be at least two parent/caregiver training goals, and requests for children with an IEP or over 12 get enhanced review.',
      status: 'verified',
      cites: [
        { title: 'CBH Provider Bulletin 23-26 — Changes in Prior Authorization Requirements for IBHS-ABA (November 14, 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/11/CBH_Provider-Bulletin_23-26_2023-11-14_Changes_in_Prior_Auth_Requirements_for_IBHS-ABA.pdf' },
        { title: 'CBH Provider Bulletin 25-05 — Changes to IBHS-ABA Authorization Practices (January 23, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-05_2025-02-04_IBHS_ABA.pdf' },
        { title: 'CBH Provider Bulletin 25-25 — Changes to IBHS-ABA MNC, Authorization, and Service Delivery (July 31, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-25_ABA-Changes_2025-07-31.pdf' },
        { title: 'CBH Member Handbook (January 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Member-Handbook_2025-01_WEB.pdf' },
      ],
    },
    dxRequired: {
      value: 'A behavioral health diagnosis is required. CBH’s written documents disagree on how strict it is. The provider manual allows IBHS for any member “to address the need associated with a behavioral health diagnosis”, and the ABA Performance Standards say ABA can serve other diagnoses too, such as intellectual disability, TBI, anxiety and feeding disorders. But the July 2025 ABA MNC, under initiation, requires assessment by a clinician with neurodevelopmental diagnoses in scope and says “the child must also have a neurodevelopmental disorder that is considered severe and requires ‘very substantial support.’” ABA-EC requires a primary ASD diagnosis at Level 2 or 3.',
      status: 'verified',
      cites: [
        { title: 'CBH Provider Manual (updated August 28, 2026)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Manual_2026-08-28.pdf' },
        { title: 'CBH Medical Necessity Criteria — IBHS-ABA (updated July 31, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_MNC_Child_IBHS-ABA_2025-07.pdf' },
        { title: 'CBH Applied Behavior Analysis Performance Standards v3.0 (May 2021)', url: 'https://cbhphilly.org/wp-content/uploads/2021/05/2021-05-13_ABA_performance_standards_final.pdf' },
        { title: 'CBH Clinical Performance Standards — ABA Early Childhood Programs (December 2024)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_CPS_ABA-EC_2024-12.pdf' },
      ],
    },
    deliveryRules: {
      supervision: {
        value: 'CBH goes beyond the state rule. BHT-ABA: 1 hour of individual face-to-face supervision a week if working 37.5 hours (counting all hours worked, not just billed), otherwise twice a month. That includes 6 hours of on-site supervision before working alone, and 1 hour of direct observation every 4 months (every 2 months for a BHT with only a high school diploma and RBT training). Behavior Analytic staff: 1 hour a month face-to-face (2 if they supervise assistants or BHTs) and 30 minutes of direct observation every 6 months. No supervisor may have more than 12 FTEs, and at most nine of them BHTs. Non-BCBA BC-ABA staff must be supervised by a BCBA as if they were accruing BACB fieldwork: 5% of hours, at least half in person. Supervision is not billable.',
        status: 'verified',
        cites: [
          { title: 'CBH Applied Behavior Analysis Performance Standards v3.0 (May 2021)', url: 'https://cbhphilly.org/wp-content/uploads/2021/05/2021-05-13_ABA_performance_standards_final.pdf' },
          { title: 'CBH IBHS Billing Guide (updated May 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/08/CBH_IBHS_Billing-Guide_2023-05.pdf' },
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
        ],
      },
      concurrentBilling: {
        value: 'Allowed only under conditions. Two staff may bill at the same time if “each must be providing a distinct service and may not bill for the same CPT code”, and both notes must record the other’s presence. For a BCBA and a BHT: “There may be occasions where a BCBA is conducting consultation (97155) or parent training (97156) and a BHT is simultaneously providing direct implementation … (97153). This would be allowable, so long as each is providing a unique, billable service, all four people are present together (parent, child, BCBA and BHT)”. A BCaBA (97152/97153 U8) may bill alongside a BHT’s 97153 if the services are distinct. BCBA (425-28) and LBS (425-29) services are “in general … NOT billable to the same member at the same time”. Supervision is never billable.',
        status: 'verified',
        cites: [
          { title: 'CBH IBHS Billing Guide (updated May 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/08/CBH_IBHS_Billing-Guide_2023-05.pdf' },
        ],
      },
      dailyLimits: {
        value: 'BHT-ABA: from October 1, 2025, “The maximum number of units that can be delivered per day will be 32 (e.g., 8 hours)”, which CBH says aligns with the Medical Assistance fee schedule. There are also authorization-level caps: Initial Assessment 100 units/30 days and Initial Treatment 200 units/45 days. Requests up to 160 BHT-ABA hours a month fall within CBH’s established guidelines; more than that needs the full assessment and ITP.',
        status: 'verified',
        cites: [
          { title: 'CBH Provider Bulletin 25-25 — Changes to IBHS-ABA MNC, Authorization, and Service Delivery (July 31, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-25_ABA-Changes_2025-07-31.pdf' },
          { title: 'CBH Provider Bulletin 25-05 — Changes to IBHS-ABA Authorization Practices (January 23, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-05_2025-02-04_IBHS_ABA.pdf' },
          { title: 'CBH Provider Bulletin 23-08 — Changes in Prior Authorization Requirements for IBHS-ABA (March 29, 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/03/Provider_Bulletin_23_08_IBHS-ABA-Authorization-Updates.pdf' },
        ],
      },
      noteSignature: {
        value: '“Progress notes should be signed and dated by the qualified clinician who provided the service”. They must be in the record “within seven days of the date of service or prior to claim submission, whichever comes first”, with start/end times, who was present, the intervention and the response. A BC-ABA doing two CPT services in one visit documents each with its own start and stop times. Signatures must be original (55 Pa. Code § 1101.66a). CBH may recoup for copied, photocopied or typed-font signatures, electronic signatures without a DocuSign/EHR audit trail, and signatures dated before the session ended. The assessment must be signed by the clinician who did it. The ITP must be signed by the parent or guardian (and the youth if over 14), the clinician who wrote it and the ABA clinical director.',
        status: 'verified',
        cites: [
          { title: 'CBH IBHS Billing Guide (updated May 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/08/CBH_IBHS_Billing-Guide_2023-05.pdf' },
          { title: 'CBH Provider Notice — Original Signature Requirements (February 2, 2026)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Notice_2026-02-02_Signature-Requirements.pdf' },
          { title: 'CBH Provider Bulletin 25-05 — Changes to IBHS-ABA Authorization Practices (January 23, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-05_2025-02-04_IBHS_ABA.pdf' },
        ],
      },
      placeOfService: {
        value: 'Home, school and community, in the settings named on the written order and ITP. BHT hours are “not separated out by school and non-school locations for authorization”, but claims need the correct POS. Teacher training goes on 97156 with POS 99, because POS 03 is not allowed for that code. CBH calls IBHS “a cross-setting service, delivered in least restrictive and natural environments”, so assessments must observe the child in more than one setting and in every setting where services are prescribed. Center-based options are ABA 1:1 in a clinic (UD modifier on BHT-ABA since 9/1/2025; July 2025 MNC mostly for children not yet school-age with severe behaviors or skill deficits) and ABA-EC/ECIT for ages 3–5.',
        status: 'verified',
        cites: [
          { title: 'CBH IBHS Billing Guide (updated May 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/08/CBH_IBHS_Billing-Guide_2023-05.pdf' },
          { title: 'CBH Provider Bulletin 25-25 — Changes to IBHS-ABA MNC, Authorization, and Service Delivery (July 31, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-25_ABA-Changes_2025-07-31.pdf' },
          { title: 'CBH Medical Necessity Criteria — IBHS-ABA (updated July 31, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_MNC_Child_IBHS-ABA_2025-07.pdf' },
          { title: 'CBH Provider Bulletin 25-05 — Changes to IBHS-ABA Authorization Practices (January 23, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-05_2025-02-04_IBHS_ABA.pdf' },
        ],
      },
      billAsProvider: {
        value: 'The contracted, ABA-designated IBHS agency bills the CBH level-of-care codes on its Schedule A. The credential of the person who delivered the service shows in the CPT and pricing modifier: 97151/97155/97156 with U7 for Behavior Analytic (BCBA, 425-28), with no modifier for Behavior Consultation-ABA (425-29), 97152/97153 with U8 for Assistant BC-ABA (425-30), and 97152/97153 with no modifier for BHT-ABA (425-31). Ordering and referring IBHS practitioners must be Medicaid-enrolled, and the manual says “the provider rendering the service must sign all invoices for claims”.',
        status: 'verified',
        cites: [
          { title: 'CBH IBHS Billing Guide (updated May 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/08/CBH_IBHS_Billing-Guide_2023-05.pdf' },
          { title: 'CBH Provider Manual (updated August 28, 2026)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Manual_2026-08-28.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. IBHS is available “up through the day before the individual’s 21st birthday” (CBH manual; ABA Performance Standards). ABA-EC/ECIT is for children “ages 3-5 who have not yet entered kindergarten”. There is no minimum age. Since 9/1/2025, every ABA request for a youth over 12 gets enhanced medical-necessity review focused on response to treatment and transition planning.',
        status: 'verified',
        cites: [
          { title: 'CBH Provider Manual (updated August 28, 2026)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Manual_2026-08-28.pdf' },
          { title: 'CBH Applied Behavior Analysis Performance Standards v3.0 (May 2021)', url: 'https://cbhphilly.org/wp-content/uploads/2021/05/2021-05-13_ABA_performance_standards_final.pdf' },
          { title: 'CBH Clinical Performance Standards — ABA Early Childhood Programs (December 2024)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_CPS_ABA-EC_2024-12.pdf' },
          { title: 'CBH Provider Bulletin 25-25 — Changes to IBHS-ABA MNC, Authorization, and Service Delivery (July 31, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-25_ABA-Changes_2025-07-31.pdf' },
        ],
      },
      dxRecency: {
        value: 'What must be recent is the written order: “A valid Written Order (WO) from within the last 365 days, based upon a face-to-face encounter” (Bulletin 23-26). For a continued request, an order may be reused if “the last face-to-face meeting with the child is within one year” (Bulletin 25-05). CBH sets no age limit on the diagnosis itself, but its ABA Performance Standards recommend a psychological evaluation “as close in time as possible” to the ABA written order and periodically after.',
        status: 'verified',
        cites: [
          { title: 'CBH Provider Bulletin 23-26 — Changes in Prior Authorization Requirements for IBHS-ABA (November 14, 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/11/CBH_Provider-Bulletin_23-26_2023-11-14_Changes_in_Prior_Auth_Requirements_for_IBHS-ABA.pdf' },
          { title: 'CBH Provider Bulletin 25-05 — Changes to IBHS-ABA Authorization Practices (January 23, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-05_2025-02-04_IBHS_ABA.pdf' },
          { title: 'CBH Applied Behavior Analysis Performance Standards v3.0 (May 2021)', url: 'https://cbhphilly.org/wp-content/uploads/2021/05/2021-05-13_ABA_performance_standards_final.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'The written order may come from “a licensed physician, licensed psychologist, certified registered nurse practitioner or other licensed professional whose scope of practice includes the diagnosis and treatment of behavioral health disorders, and the prescribing of behavioral health services, including IBHS”. Ordering practitioners must be Medicaid-enrolled. The July 2025 ABA MNC adds that the comprehensive assessment must be by “a clinician with neurodevelopmental disorder diagnoses within their scope of practice”. Most ABA written orders are expected to come from CBH’s ABA-designated providers, but a non-designated provider may write one for Initial Assessment and Initial Treatment.',
        status: 'verified',
        cites: [
          { title: 'CBH Provider Manual (updated August 28, 2026)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Manual_2026-08-28.pdf' },
          { title: 'CBH Medical Necessity Criteria — IBHS-ABA (updated July 31, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_MNC_Child_IBHS-ABA_2025-07.pdf' },
          { title: 'CBH Applied Behavior Analysis Performance Standards v3.0 (May 2021)', url: 'https://cbhphilly.org/wp-content/uploads/2021/05/2021-05-13_ABA_performance_standards_final.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'No diagnostic instrument is mandatory: for an ASD diagnosis, “the Autism Diagnostic Observation Schedule-2 (ADOS-2) [is] preferred, but not required”, alongside norm-referenced tools, rating scales and interviews. On the treatment side CBH does require tools: an FBA for every child prescribed BHT-ABA, and for children with skill deficits a curriculum-based or norm-referenced tool “such as the VB-MAPP, ABLLs, AFLs, or ABAS-3” (Bulletin 25-05). ABA 1:1 in a center needs severe deficits “as evidenced by scores on a structured, norm-referenced tool (e.g., Vineland, ABAS standard scores 70 or below)”.',
        status: 'verified',
        cites: [
          { title: 'CBH Applied Behavior Analysis Performance Standards v3.0 (May 2021)', url: 'https://cbhphilly.org/wp-content/uploads/2021/05/2021-05-13_ABA_performance_standards_final.pdf' },
          { title: 'CBH Provider Bulletin 25-05 — Changes to IBHS-ABA Authorization Practices (January 23, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-05_2025-02-04_IBHS_ABA.pdf' },
          { title: 'CBH Medical Necessity Criteria — IBHS-ABA (updated July 31, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_MNC_Child_IBHS-ABA_2025-07.pdf' },
        ],
      },
      referral: {
        value: 'An IBHS written order is required on CBH’s current form, which has had options for ABA Early Childhood Intensive and ABA 1:1 in a center since January 2025. It must include the DSM/ICD diagnosis, the maximum hours of each service per month, the settings and measurable discharge markers, plus signatures, dates, the prescriber’s NPI and PROMISe ID. Families may take a valid order to any in-network ABA-designated agency. The member handbook tells families that to receive IBHS they “will need an evaluation from a CBH provider”.',
        status: 'verified',
        cites: [
          { title: 'CBH Provider Manual (updated August 28, 2026)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Manual_2026-08-28.pdf' },
          { title: 'CBH Provider Notice — IBHS/ABA Realignment Update (October 14, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH-Provider_Notice_IBHS_ABA_Realignment_Update_2025-10-14.pdf' },
          { title: 'CBH Applied Behavior Analysis Performance Standards v3.0 (May 2021)', url: 'https://cbhphilly.org/wp-content/uploads/2021/05/2021-05-13_ABA_performance_standards_final.pdf' },
          { title: 'CBH Member Handbook (January 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Member-Handbook_2025-01_WEB.pdf' },
        ],
      },
      telehealth: {
        value: 'Supplement only. “CBH expects IBHS services to be delivered primarily in person … it should never serve as the primary service delivery method”. It may support contact with collaterals or serve as a rare backup when illness or safety concerns prevent in-person care. The billing guide says telehealth for BHT “does not represent best practice and should be used only in limited instances”, with the reason documented. The 2025 FAQ says telehealth “can be used in a limited way”. Billing (Bulletin 22-16, eff. 9/1/2022): POS 10 when the member is at home, POS 02 elsewhere, informational modifier FQ for audio-only. Get informed consent before any telehealth; texting is not telehealth.',
        status: 'verified',
        cites: [
          { title: 'CBH Telehealth Best Practice Guidelines (Provider Manual supplement, November 2024)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Best-Practices_Telehealth_2024-11.pdf' },
          { title: 'CBH IBHS Billing Guide (updated May 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/08/CBH_IBHS_Billing-Guide_2023-05.pdf' },
          { title: 'CBH Provider Bulletin 22-16 — POS 10 and Modifier FQ for Telehealth (July 25, 2022)', url: 'https://cbhphilly.org/wp-content/uploads/2022/07/CBH_Provider-Bulletin_22-16_2022-07-25_POS-10-and-Modifier-FQ-Telehealth-Service-Delivery.pdf' },
          { title: 'CBH — FAQ: IBHS-ABA Services Realignment (September 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_IBHS-ABA-Realignment_FAQ_2025-09-12.pdf' },
        ],
      },
      authTurnaround: {
        value: 'Member handbook: “CBH will decide about non-urgent service requests within two business days of receiving the request”. Requests arriving outside business hours count as received the next business day. If information is missing, CBH must notify the provider “within 48 hours” and allow 14 days (the manual says 14 calendar days for community-based services), then decides within two business days of receiving it. Urgent requests are decided within 24 hours. Since 1/11/2026, IBHS packets must arrive by 2 p.m. to be reviewed the next business day, using the naming format ProviderName.IBHSType.TypeOfRequest.Initials.MM.DD.YYYY. Reauthorization: submit continued requests “from 14 to 30 days prior to the last covered date”; no backdating. Peer-to-peer is available until 2 p.m. the next business day for written-review services such as IBHS. Federal floor: 42 CFR 438.210(d), 7 calendar days standard / 72 hours expedited.',
        status: 'verified',
        cites: [
          { title: 'CBH Member Handbook (January 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Member-Handbook_2025-01_WEB.pdf' },
          { title: 'CBH Provider Manual (updated August 28, 2026)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Manual_2026-08-28.pdf' },
          { title: 'CBH Provider Bulletin 25-36 — Changes to the IBHS Submission Process (December 11, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-36_2025-12-11_IBHS-Submission.pdf' },
          { title: 'CBH Provider Bulletin 25-19 — IBHS: Clarification on Back Dating Authorizations (May 15, 2025)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Bulletin_25-19_2025-05-15_IBHS_Clarification_on_Back_Dating_Authorizations.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value: '“Medicaid is always the payor of last resort and all IBHS levels of care require coordination of benefits, regardless of child diagnosis.” The only exceptions are the CBH-created care coordinator and family peer support. A primary plan’s rejection because the provider is out-of-network “is not a final determination”: the provider may continue unpaid, get a single-case agreement, or transfer the case. Every IBHS claim needs the primary EOB or final determination. Providers get 180 days from the date of service to obtain it and 90 days from it to bill CBH. When the primary authorizes ABA, “CBH will match any authorized services at the same frequency and duration” and “will not render a separate decision of medical necessity, nor is an authorization packet necessary”. CBH reviews as primary only if the primary denies (after its appeals), doesn’t cover the service, or the annual cap is exhausted. TRICARE pays ahead of Medicaid (10 U.S.C. 1079(i)(1)).',
        status: 'verified',
        cites: [
          { title: 'CBH Provider Notice — IBHS Payment & Third-Party Medical Resources (January 31, 2023)', url: 'https://cbhphilly.org/wp-content/uploads/2023/01/CBH_Provider-Notice_IBHS-TPR_2023-1-31.pdf' },
          { title: 'CBH Provider Manual (updated August 28, 2026)', url: 'https://cbhphilly.org/wp-content/uploads/2022/10/CBH_Provider-Manual_2026-08-28.pdf' },
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
        ],
      },
    },
  },

  'magellan-behavioral-health-pennsylvania': {
    slug: 'magellan-behavioral-health-pennsylvania',
    payer: 'Magellan Behavioral Health of Pennsylvania (HealthChoices BH-MCO)',
    pill: 'Payer Guide · Magellan Behavioral Health (PA)',
    h1: 'Magellan Behavioral Health of Pennsylvania ABA coverage (HealthChoices IBHS).',
    metaTitle: 'Magellan Behavioral Health of Pennsylvania ABA (IBHS) Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Magellan Behavioral Health of Pennsylvania authorizes ABA under HealthChoices IBHS in Bedford, Bucks, Cambria, Lehigh, Montgomery, Northampton and Somerset counties: the 97151 HA assessment registration, the TAR packet, 6-month authorizations, telehealth POS 02/10 + FQ, and the primary-insurance-first rules.',
    intro: [
      'Magellan Behavioral Health of Pennsylvania is the HealthChoices behavioral health managed care organization (BH-MCO) for Medicaid members in Bedford, Bucks, Cambria, Lehigh, Montgomery, Northampton and Somerset counties. In Pennsylvania Medicaid, ABA is not a stand-alone autism benefit: it is the ABA category of Intensive Behavioral Health Services (IBHS) under 55 Pa. Code Chapters 1155 and 5240, open to children, youth and young adults under 21 with any behavioral health diagnosis, and started by a written order.',
      'Magellan’s mechanics are published on magellanofpa.com: the ABA initial assessment is opened by a registration (not a medical-necessity review) that authorizes 96 units over 45 days; treatment is authorized from a full packet (TAR, written order, assessment, ITP, plus CANS and an ISPT meeting note where they apply) submitted in Availity; and authorizations run a maximum of 6 months (Somerset-Bedford ABA up to one year). Magellan has also announced a Blair County HealthChoices contract going live January 1, 2027.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'HealthChoices BH-MCO (behavioral health carve-out) — ABA is delivered as IBHS ABA services' },
      { label: 'Counties', value: 'Bedford, Bucks, Cambria, Lehigh, Montgomery, Northampton, Somerset (Blair contract announced to go live 1/1/2027)' },
      { label: 'Assessment (97151)', value: 'Registration via Availity with the IBHS Registration TAR + written order — 96 units (24 hours) over 45 calendar days for ABA; no medical-necessity review' },
      { label: 'Treatment PA', value: 'Yes — TAR + written order + assessment + ITP (+ CANS age 3+ in Bucks/Cambria/Lehigh/Montgomery/Northampton; ISPT note for BHT-ABA in school-type settings)' },
      { label: 'Authorization length', value: 'Maximum 6 months (Somerset-Bedford ABA up to one year)' },
      { label: 'Decision clock', value: '2 business days pre-service, 1 business day concurrent (after complete information); RAI within 48 hours' },
      { label: 'Telehealth', value: 'POS 10 (member’s home) or 02 (elsewhere); FQ modifier for audio-only; GT no longer allowed' },
      { label: 'Other coverage', value: 'Medicaid is last payer — bill the primary first; the IBHS packet still goes to Magellan when there is TPL' },
    ],
    sections: [
      {
        h2: 'How ABA works under Magellan: IBHS, not an autism benefit',
        body: [
          'Magellan’s handbook supplement describes IBHS as three categories — individual services, ABA, and group services — delivered in home, school and community. Everything starts with a written order (WO) based on a face-to-face interaction: it must name a behavioral health diagnosis, the IBHS service, hours and settings, the clinical information supporting medical necessity, and measurable improvements for reducing or ending services. Magellan requires the WO writer to be a licensed physician, licensed psychologist, CRNP or other licensed practitioner whose scope includes diagnosing and treating behavioral health disorders and prescribing IBHS, and to be ORP (Ordering/Referring/Prescribing) enrolled. Written orders are valid for 12 months; updates within that window need no new face-to-face visit but can only be made by the original order writer.',
          'Magellan wants ABA recommendations written as service lines and hours, not CPT codes: its 2025 training says recommendations must be made as BC-ABA and BHT-ABA and "Should not be listed as CPT codes". The authorization codes are buckets — BC-ABA is authorized as 97151 HO and billed as 97151/97155/97156 with HO (plus HA when a behavior analyst renders); BHT-ABA is authorized as 97152 HO and billed as 97152/97153 HO (HO HA for assistant behavior consultation-ABA).',
        ],
        cites: [
          { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
          { title: 'Magellan of PA — IBHS/ABA New Provider Training (Somerset-Bedford, Nov. 2025)', url: 'https://www.magellanofpa.com/documents/2025/11/s-b-new-provider-training-ibhsaba-11052025.pdf' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
        ],
      },
      {
        h2: 'Assessment registration, then the treatment packet',
        list: [
          { title: 'Initial assessment registration', desc: 'Submit the IBHS Registration TAR cover sheet and the written order through Availity. Magellan authorizes 24 hours (96 units) over 45 calendar days for an ABA assessment (97151 HA); regulation still expects it completed within 30 calendar days. Providers have 7 calendar days to schedule the first assessment appointment after receiving a verified written order.' },
          { title: 'Assessment content', desc: 'Face-to-face, across settings, with a standardized tool or process such as an FBA ("Vineland/VBMAPP/FBA as applicable/ABAS-3/AFLS" are Magellan’s examples) and recommendations in hours per month per setting.' },
          { title: 'Treatment packet', desc: 'TAR for Individual/ABA, written order (within 1 year), assessment with specific recommendations, ITP, CANS summary for members 3+ (not Somerset-Bedford), and an ISPT meeting summary when BHT-ABA is requested in school, daycare, preschool, camp or after-school settings.' },
          { title: 'Start dates and reauths', desc: 'The requested start date cannot be more than 2 business days before submission; reauthorization packets may go in no more than 30 days before the last covered day.' },
          { title: 'Mid-auth changes', desc: 'Change of prescription, 1–30 day administrative extensions, transfers and error corrections go by fax with the documents on Magellan’s 2026 checklist.' },
        ],
        cites: [
          { title: 'Magellan of PA — IBHS Authorization Request Checklist (rev. 02/12/2026)', url: 'https://www.magellanofpa.com/documents/2026/02/021626_ibhsauthrequestchecklist.pdf' },
          { title: 'Magellan of PA — IBHS TAR Registration Cover Sheet (rev. 11/01/2025)', url: 'https://www.magellanofpa.com/documents/2021/07/p-forms-ibhs-tar-registration-cover-sheet.pdf' },
          { title: 'Magellan of PA — IBHS TAR Facesheet for Individual & ABA IBHS (rev. 11/01/2025)', url: 'https://www.magellanofpa.com/documents/2025/09/ibhs-tar-facesheet-for-individual-aba-ibhs.pdf' },
          { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
        ],
      },
      {
        h2: 'Decision timelines and authorization length',
        body: [
          'The supplement’s table: pre-service urgent up to 3 hours, pre-service standard 2 business days, concurrent review 1 business day, retro review 30 calendar days. If information is missing Magellan requests it within 48 hours, the provider has up to 14 calendar days to answer, and the decision follows within 2 business days (initial) or 1 business day (concurrent) of receipt. These mirror the DHS HealthChoices Appendix AA standards, which also deem a service approved if the member has no written decision within 21 days of the request.',
          'Magellan’s July 2026 workgroup deck states "Magellan auths are all a maximum of 6 months", with a footnote that Somerset-Bedford ABA authorizations can run up to one year.',
        ],
        cites: [
          { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
          { title: 'Magellan of PA — IBHS Provider Workgroup, July 30, 2026', url: 'https://www.magellanofpa.com/documents/2026/07/073126_ibhsproviderworkgrouponjuly302026.pdf' },
          { title: 'DHS HealthChoices BH Program Standards and Requirements, Appendix AA — Prior Authorization Requirements (Jan. 1, 2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Appendix-AA-Prior-Authorization-Requirements.pdf' },
        ],
      },
      {
        h2: 'Primary insurance first — but the packet still goes to Magellan',
        body: [
          'Magellan’s supplement: "Medicaid is always the last payer"; claims go to the primary insurer first for an EOB, and "HealthChoices will not make payments if the full obligations of the primary insurer are not met." When the service is covered by the other insurance, the member must use a provider in both networks. Magellan’s training adds that it "cannot reimburse as primary payer because your agency is out of network with the primary insurance", but can pay as primary when the primary plan’s benefit is exhausted or the service is not covered — and that even with TPL, the IBHS packet "still needs to be submitted to MBH".',
          'For Act 62 (autism) children the supplement tells providers to bill the private insurer first "even if a denial was previously received" and send evidence of exhaustion or denial. When the primary denies, Magellan accepts retrospective review requests within 180 days of the primary’s final decision, with the EOB or denial letter attached.',
        ],
        cites: [
          { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
          { title: 'Magellan of PA — IBHS/ABA New Provider Training (Somerset-Bedford, Nov. 2025)', url: 'https://www.magellanofpa.com/documents/2025/11/s-b-new-provider-training-ibhsaba-11052025.pdf' },
          { title: 'Magellan of PA — IBHS Provider Workgroup, July 30, 2026', url: 'https://www.magellanofpa.com/documents/2026/07/073126_ibhsproviderworkgrouponjuly302026.pdf' },
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
        ],
      },
      {
        h2: 'Rates',
        body: [
          'Magellan pays IBHS under provider contracts and fee schedules that are not published. Its July 2026 workgroup notes recent rate increases and asks providers to bill usual-and-customary charges so claims can be swept up to new rates, and describes a 2026 access-based incentive model (at least 25 individual or ABA initial assessments a year; members with commercial insurance are not counted). Confirm your contracted rates with Magellan Network.',
        ],
        cites: [
          { title: 'Magellan of PA — IBHS Provider Workgroup, July 30, 2026', url: 'https://www.magellanofpa.com/documents/2026/07/073126_ibhsproviderworkgrouponjuly302026.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Medicaid ID and county', desc: 'Magellan covers only its seven counties; the TAR asks which county the member’s MA is tied to, and a county change needs a new authorization line.' },
      { title: 'Written order (within 12 months)', desc: 'Face-to-face order from an ORP-enrolled licensed physician, psychologist, CRNP or other licensed prescriber naming a DSM/ICD behavioral health diagnosis, ABA service lines, maximum hours per month, settings and discharge markers.' },
      { title: 'Primary insurance card and ABA benefit', desc: 'If the child has commercial coverage, bill it first; you must be in network with the primary for Magellan to pay secondary. Keep EOBs/denial letters.' },
      { title: 'School/daycare contacts', desc: 'BHT-ABA in school, daycare, preschool, camp or after-school settings needs an ISPT meeting summary in the packet.' },
      { title: 'Caregiver availability for the assessment', desc: 'Magellan’s referral form asks for caregiver days/times; the assessment must cover every setting where services will be delivered.' },
      { title: 'Consent to release information', desc: 'Magellan’s referral form requires written consent before it can send clinical information to providers.' },
    ],
    sources: [
      { title: 'Magellan of PA — Intensive Behavioral Health Services (IBHS) provider page', url: 'https://www.magellanofpa.com/for-providers/services-programs/intensive-behavioral-health-services-ibhs/' },
      { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
      { title: 'Magellan of PA — IBHS Authorization Request Checklist (rev. 02/12/2026)', url: 'https://www.magellanofpa.com/documents/2026/02/021626_ibhsauthrequestchecklist.pdf' },
      { title: 'Magellan of PA — IBHS/ABA New Provider Training (Somerset-Bedford, Nov. 2025)', url: 'https://www.magellanofpa.com/documents/2025/11/s-b-new-provider-training-ibhsaba-11052025.pdf' },
      { title: 'Magellan of PA — IBHS Provider Workgroup, July 30, 2026', url: 'https://www.magellanofpa.com/documents/2026/07/073126_ibhsproviderworkgrouponjuly302026.pdf' },
      { title: 'Magellan of PA — Telehealth FAQ for Providers (as of June 1, 2023)', url: 'https://www.magellanofpa.com/documents/2023/06/060123_updatedtelehealthfaq.pdf' },
      { title: 'Magellan of PA — Referral for IBHS Assessment (rev. 11/01/2025)', url: 'https://www.magellanofpa.com/documents/2021/07/p-forms-referral-for-ibhs-assessment.pdf' },
      { title: 'Magellan of PA — Audit Trends (June 2026)', url: 'https://www.magellanofpa.com/documents/2026/06/061226_audittrendsasofjune2026.pdf' },
      { title: 'DHS HealthChoices BH Program Standards and Requirements, Appendix AA — Prior Authorization Requirements (Jan. 1, 2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Appendix-AA-Prior-Authorization-Requirements.pdf' },
      { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
      { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
      { title: 'PA DHS — Behavioral Health Managed Care Organizations (BH-MCOs) by county', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/bhc/bhc-mcos' },
    ],
    faq: [
      { q: 'Does Magellan of Pennsylvania require prior authorization for the ABA assessment?', a: 'It requires a registration, not a medical-necessity review. Submit the IBHS Registration TAR and the written order in Availity; Magellan authorizes 96 units (24 hours) over 45 calendar days for the ABA initial assessment (97151 HA). Reassessments are done within the approved BC-ABA units before the reauthorization request.' },
      { q: 'Does my child need an autism diagnosis for ABA through Magellan?', a: 'No. IBHS ABA is available to children, youth and young adults under 21 with a behavioral health diagnosis; the written order must name a DSM/ICD behavioral health diagnosis, which need not be autism.' },
      { q: 'How long does a Magellan IBHS authorization last?', a: 'Up to 6 months per Magellan’s 2026 workgroup materials; Somerset-Bedford ABA authorizations can run up to one year. Reauthorization packets may be submitted up to 30 days before the last covered day.' },
      { q: 'My child has private insurance too. Does Magellan still need a packet?', a: 'Yes. Bill the private plan first (Medicaid is the last payer), but Magellan’s training says the IBHS packet still needs to be submitted to Magellan when there is TPL. Magellan will not pay as primary just because your agency is out of network with the primary plan.' },
      { q: 'How do we bill ABA telehealth to Magellan?', a: 'Use your normal contracted code/modifier combination with POS 10 when the member is at home or POS 02 elsewhere; add informational modifier FQ in the last position for audio-only. The GT modifier is no longer allowed.' },
    ],
    state: 'PA',
    kind: 'medicaid-mco',
    parent: 'Pennsylvania Medicaid (Medical Assistance)',
    cardDesc: 'HealthChoices BH-MCO, 7 counties; IBHS ABA — 97151 registration (96 units/45 days), 6-month treatment auths via Availity.',
    assessmentPA: {
      value: 'Registration only — the initial ABA assessment (authorization code 97151 HA) is opened with the IBHS Registration TAR plus the written order through Availity, and Magellan authorizes 24 hours (96 units) over 45 calendar days; there is no medical-necessity review at this step. Ongoing reassessments are done within the approved BC-ABA units before the reauthorization request.',
      status: 'verified',
      cites: [
        { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
        { title: 'Magellan of PA — IBHS Authorization Request Checklist (rev. 02/12/2026)', url: 'https://www.magellanofpa.com/documents/2026/02/021626_ibhsauthrequestchecklist.pdf' },
        { title: 'Magellan of PA — IBHS TAR Registration Cover Sheet (rev. 11/01/2025)', url: 'https://www.magellanofpa.com/documents/2021/07/p-forms-ibhs-tar-registration-cover-sheet.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Yes — pre-service and concurrent requests go through Availity with the TAR for Individual/ABA IBHS, the written order (completed within 1 year), the assessment with specific service recommendations, the ITP, a CANS summary for members 3 and older (Bucks, Cambria, Lehigh, Montgomery, Northampton), and an ISPT meeting summary when BHT-ABA is requested in school, daycare, preschool, camp or after-school programs. Authorizations run a maximum of 6 months (Somerset-Bedford ABA up to one year).',
      status: 'verified',
      cites: [
        { title: 'Magellan of PA — IBHS Authorization Request Checklist (rev. 02/12/2026)', url: 'https://www.magellanofpa.com/documents/2026/02/021626_ibhsauthrequestchecklist.pdf' },
        { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
        { title: 'Magellan of PA — IBHS Provider Workgroup, July 30, 2026', url: 'https://www.magellanofpa.com/documents/2026/07/073126_ibhsproviderworkgrouponjuly302026.pdf' },
      ],
    },
    dxRequired: {
      value: 'No autism diagnosis required — IBHS ABA serves children, youth and young adults with a behavioral health diagnosis. Magellan’s written order must include a behavioral health diagnosis (its TAR asks for the DSM-5 diagnosis with ICD-10 code); Magellan publishes nothing narrower than the state rule.',
      status: 'verified',
      cites: [
        { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
        { title: 'Magellan of PA — IBHS TAR Facesheet for Individual & ABA IBHS (rev. 11/01/2025)', url: 'https://www.magellanofpa.com/documents/2025/09/ibhs-tar-facesheet-for-individual-aba-ibhs.pdf' },
        { title: 'OMHSAS IBHS Frequently Asked Questions (updated February 2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/intensive-behavioral-health-services-(ibhs)/ibhs-faq-updated-02-22-22.pdf' },
      ],
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the state IBHS rule (Magellan publishes nothing different): under 55 Pa. Code § 5240.82 a clinical-director-qualified supervisor gives behavior analytic and BC-ABA staff 1 hour of individual face-to-face supervision a month (plus a second hour if they supervise assistant BC-ABA or BHT-ABA staff) and 30 minutes of direct observation every 6 months; BHT-ABA staff get 1 hour weekly if working 37.5+ hours a week, otherwise 1 hour twice a month, including 1 hour of individual face-to-face supervision each month, plus 6 hours of onsite supervision before working independently.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
          { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not published. Magellan’s training reproduces the 97155 descriptor ("may include simultaneous directions of a technician") but states no rule on billing 97153 and 97155 for the same clock time, and its audit-trends list flags "Overlapping sessions" as a retraction risk. Ask before billing overlap.',
        status: 'unverified',
        cites: [
          { title: 'Magellan of PA — IBHS/ABA New Provider Training (Somerset-Bedford, Nov. 2025)', url: 'https://www.magellanofpa.com/documents/2025/11/s-b-new-provider-training-ibhsaba-11052025.pdf' },
          { title: 'Magellan of PA — Audit Trends (June 2026)', url: 'https://www.magellanofpa.com/documents/2026/06/061226_audittrendsasofjune2026.pdf' },
        ],
        verifyVia: 'Magellan of PA IBHS team (IBHS@MagellanHealth.com) or your Magellan Network Management Specialist — ask whether 97155 HO/HO HA may be billed for the same minutes as 97153 HO when the analyst directs the technician, and get the answer in writing.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No per-day unit ceiling is published. Magellan authorizes hours per month per service line and computes units with its calculator; each contracted code carries its own unit definition and permissible POS in your provider contract. The state FFS code list’s per-day unit ranges (OMHSAS-21-03) are fee-for-service only and tell managed-care providers to ask the BH-MCO.',
        status: 'plan-dependent',
        cites: [
          { title: 'Magellan of PA — IBHS/ABA New Provider Training (Somerset-Bedford, Nov. 2025)', url: 'https://www.magellanofpa.com/documents/2025/11/s-b-new-provider-training-ibhsaba-11052025.pdf' },
        ],
        verifyVia: 'Your agency’s Magellan HealthChoices contract and fee schedule (unit definitions per code), or Magellan Provider Services (Bucks/Montgomery 877-769-9779; Lehigh/Northampton 866-780-3368; Cambria, Somerset/Bedford 800-424-3711).',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'State rule plus Magellan’s documentation standards. 55 Pa. Code § 5240.41 requires each service note to carry the signature of the staff person providing the service. Magellan’s supplement requires entries "signed and dated by the responsible licensed provider" (ancillary staff countersigned), clock start/end times, and a member (or agent) signature on the encounter form per MA Bulletin 99-89-05 — for telehealth, hand-written or audited electronic signatures, obtained "no later than 90 days after the service". Magellan’s 2026 audit list flags an electronic signature that precedes the session end time.',
        status: 'verified',
        cites: [
          { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
          { title: 'Magellan of PA — Audit Trends (June 2026)', url: 'https://www.magellanofpa.com/documents/2026/06/061226_audittrendsasofjune2026.pdf' },
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
        ],
      },
      placeOfService: {
        value: 'Home, school and community per the IBHS rules. Magellan treats preschool, daycare, after-school programs, summer camp, school and ESY as "SCHOOL" for BHT-ABA, requires an ISPT meeting summary for BHT-ABA in those settings, lists POS 03 (school), 11, 12 and 99 among its codes, and says to bill 97156 with a teacher or daycare staff using POS 99. Claims must use a contracted rendering service location — "Do not bill using a member’s home address".',
        status: 'verified',
        cites: [
          { title: 'Magellan of PA — IBHS/ABA New Provider Training (Somerset-Bedford, Nov. 2025)', url: 'https://www.magellanofpa.com/documents/2025/11/s-b-new-provider-training-ibhsaba-11052025.pdf' },
          { title: 'Magellan of PA — IBHS Provider Workgroup, July 30, 2026', url: 'https://www.magellanofpa.com/documents/2026/07/073126_ibhsproviderworkgrouponjuly302026.pdf' },
          { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
        ],
      },
      billAsProvider: {
        value: 'The IBHS agency bills. Magellan wants one Type 2 NPI per rendering service location; group providers also report the rendering practitioner’s Type 1 NPI (CMS-1500 box 24J / loop 2310B). The credential of whoever rendered is carried in the contracted modifiers — e.g., 97155 HO for BC-ABA vs 97155 HO HA for a behavior analyst; 97153 HO for BHT-ABA vs 97153 HO HA for assistant BC-ABA — listed "in the order that they show on the fee schedule". ORP-required claims must carry the enrolled order writer.',
        status: 'verified',
        cites: [
          { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
          { title: 'Magellan of PA — IBHS/ABA New Provider Training (Somerset-Bedford, Nov. 2025)', url: 'https://www.magellanofpa.com/documents/2025/11/s-b-new-provider-training-ibhsaba-11052025.pdf' },
          { title: 'Magellan of PA — IBHS Provider Workgroup, July 30, 2026', url: 'https://www.magellanofpa.com/documents/2026/07/073126_ibhsproviderworkgrouponjuly302026.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21 — IBHS serves children, youth and young adults under 21 (55 Pa. Code Chs. 1155/5240). No minimum age. Magellan publishes nothing different.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
        ],
      },
      dxRecency: {
        value: 'No separate diagnosis-age rule; what must be current is the written order. Magellan: the order must be written within 1 year/365 days of the face-to-face evaluation and is valid 12 months from the recommendation; a written order that expires mid-authorization "will not impact or interrupt service delivery", but a new one is needed for continued services.',
        status: 'verified',
        cites: [
          { title: 'Magellan of PA — IBHS/ABA New Provider Training (Somerset-Bedford, Nov. 2025)', url: 'https://www.magellanofpa.com/documents/2025/11/s-b-new-provider-training-ibhsaba-11052025.pdf' },
          { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'The written order (which carries the diagnosis) can come from a licensed physician, licensed psychologist, certified registered nurse practitioner, or other licensed practitioner whose scope includes diagnosing and treating behavioral health disorders and prescribing IBHS; Magellan requires the writer to be ORP-enrolled. A psychiatric/psychological evaluation or best-practice evaluation containing all written-order elements can substitute.',
        status: 'verified',
        cites: [
          { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
          { title: 'Magellan of PA — IBHS/ABA New Provider Training (Somerset-Bedford, Nov. 2025)', url: 'https://www.magellanofpa.com/documents/2025/11/s-b-new-provider-training-ibhsaba-11052025.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'No named instrument is required behind the diagnosis. The tool requirement sits in the IBHS assessment: Magellan requires "A standardized assessment tool or process such as an FBA" (examples: Vineland, VB-MAPP, ABAS-3, AFLS) with the analysis submitted in the packet, and a CANS for members 3+ in its non-Somerset-Bedford counties.',
        status: 'verified',
        cites: [
          { title: 'Magellan of PA — IBHS/ABA New Provider Training (Somerset-Bedford, Nov. 2025)', url: 'https://www.magellanofpa.com/documents/2025/11/s-b-new-provider-training-ibhsaba-11052025.pdf' },
          { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
        ],
      },
      referral: {
        value: 'A written order is required to start (face-to-face, within 12 months, ORP-enrolled writer, naming diagnosis, service lines, maximum hours per month using "up to" language, settings and discharge markers). Families can take the order straight to an IBHS agency; Magellan’s Referral for IBHS Assessment form (current written order and authorization to disclose attached) is for Magellan-assisted placement — and Magellan "is unable to make referrals for children with Act 62 benefits through their Primary Insurance Policy".',
        status: 'verified',
        cites: [
          { title: 'Magellan of PA — Referral for IBHS Assessment (rev. 11/01/2025)', url: 'https://www.magellanofpa.com/documents/2021/07/p-forms-referral-for-ibhs-assessment.pdf' },
          { title: 'Magellan of PA — IBHS/ABA New Provider Training (Somerset-Bedford, Nov. 2025)', url: 'https://www.magellanofpa.com/documents/2025/11/s-b-new-provider-training-ibhsaba-11052025.pdf' },
        ],
      },
      telehealth: {
        value: 'Allowed per OMHSAS-22-02, which asks providers to weigh clinical appropriateness carefully for IBHS. Magellan: bill the normal contracted code/modifiers with POS 10 when the member is at home or POS 02 elsewhere (the member’s location, not the provider’s); add informational modifier FQ in the last position for audio-only, which is allowed only without video access or for an urgent situation; GT is no longer allowable. Document consent, mechanism, platform and any audio-only rationale.',
        status: 'verified',
        cites: [
          { title: 'Magellan of PA — Telehealth FAQ for Providers (as of June 1, 2023)', url: 'https://www.magellanofpa.com/documents/2023/06/060123_updatedtelehealthfaq.pdf' },
          { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
          { title: 'OMHSAS-22-02 — Revised Guidelines for Delivery of BH Services Through Telehealth (eff. 7/1/2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/docs/documents/omhsas/Bulletin%20OMHSAS-22-02%20-%20Revised%20Guidelines%20for%20Delivery%20of%20BH%20Services%20Through%20Telehealth%207.1.22.pdf' },
        ],
      },
      authTurnaround: {
        value: 'Pre-service standard 2 business days; concurrent 1 business day; pre-service urgent up to 3 hours; retro review 30 calendar days. Missing information is requested within 48 hours, the provider gets up to 14 calendar days, then a decision within 2 business days (initial) or 1 business day (concurrent). DHS Appendix AA adds that a service is automatically approved if no written decision reaches the member within 21 days. Federal 42 CFR 438.210(d) caps standard decisions at 7 calendar days (expedited 72 hours) for rating periods from 1/1/2026 — Magellan’s published clock is faster. Reauth packets: no more than 30 days before the last covered day; start date no more than 2 business days before submission.',
        status: 'verified',
        cites: [
          { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
          { title: 'DHS HealthChoices BH Program Standards and Requirements, Appendix AA — Prior Authorization Requirements (Jan. 1, 2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Appendix-AA-Prior-Authorization-Requirements.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Magellan is always the last payer: bill the primary first for an EOB, and use a provider in both networks when the primary covers the service. Magellan will not pay as primary because the agency is out of network with the primary, but can when the primary benefit is exhausted or the service is not covered. Its own authorization is still needed when commercial is primary — "If there is TPL involved, packet still needs to be submitted to MBH". For Act 62 children, bill the private insurer "even if a denial was previously received"; retro review is available within 180 days of the primary’s final decision with the EOB. If the primary does not cover telehealth, seek pre-authorization through Magellan as secondary. When TRICARE is also present it pays ahead of Medicaid: 10 U.S.C. 1079(i)(1) makes TRICARE secondary to other coverage "except in the case of a plan administered under title XIX".',
        status: 'verified',
        cites: [
          { title: 'Magellan Behavioral Health of PA — Provider Handbook Supplement for HealthChoices (rev. 11/25)', url: 'https://www.magellanprovider.com/media/1661/pa_healthchoices_supp.pdf' },
          { title: 'Magellan of PA — IBHS/ABA New Provider Training (Somerset-Bedford, Nov. 2025)', url: 'https://www.magellanofpa.com/documents/2025/11/s-b-new-provider-training-ibhsaba-11052025.pdf' },
          { title: 'Magellan of PA — Telehealth FAQ for Providers (as of June 1, 2023)', url: 'https://www.magellanofpa.com/documents/2023/06/060123_updatedtelehealthfaq.pdf' },
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
        ],
      },
    },
  },
  'performcare-pennsylvania': {
    slug: 'performcare-pennsylvania',
    payer: 'PerformCare (HealthChoices BH-MCO, AmeriHealth Caritas family)',
    pill: 'Payer Guide · PerformCare (PA)',
    h1: 'PerformCare Pennsylvania ABA coverage (HealthChoices IBHS).',
    metaTitle: 'PerformCare Pennsylvania ABA (IBHS) Coverage & Prior Auth | Carelu',
    metaDescription:
      'How PerformCare authorizes ABA under HealthChoices IBHS in Cumberland, Dauphin, Franklin, Fulton, Lancaster, Lebanon and Perry counties: 97151 registration in Jiva, CM-CAS-042 packets, 12-month authorizations, 97153/97155 concurrent billing, telehealth POS 10/02 + FQ, and Act 62 EOB rules.',
    intro: [
      'PerformCare is the HealthChoices behavioral health managed care organization for Medicaid members in Cumberland, Dauphin, Lancaster, Lebanon and Perry counties (the Capital Area Behavioral Health Collaborative) and Franklin and Fulton counties (Tuscarora Managed Care Alliance). Pennsylvania Medicaid ABA is delivered as the ABA category of Intensive Behavioral Health Services (IBHS) — for anyone under 21 with a behavioral health diagnosis, started by a written order.',
      'PerformCare publishes its IBHS rules as numbered policies and provider notices. The core is CM-CAS-042 (revised 03/11/26): a 97151 assessment registration with no medical-necessity decision, then a treatment request with the written order, assessment (an FBA is required for ABA), ITP and provider-choice form, approved for up to 12 months. PerformCare has formally adopted the 2019 ABA CPT supplemental guidance, which settles concurrent 97153/97155 billing.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'HealthChoices BH-MCO (behavioral health carve-out) — ABA is delivered as IBHS ABA services' },
      { label: 'Counties', value: 'Cumberland, Dauphin, Lancaster, Lebanon, Perry (CABHC) and Franklin, Fulton (TMCA)' },
      { label: 'Assessment (97151)', value: 'Registration in Jiva within 4 calendar days of starting — PerformCare makes no MNC decision; 45-calendar-day assessment window for ABA' },
      { label: 'Treatment PA', value: 'Yes — written order/BPE, IBHS assessment with FBA, ITP, provider-choice form (+ CANS in CABHC counties); medical-necessity review' },
      { label: 'Authorization length', value: 'Up to 12 months; ITP updated every 6 months' },
      { label: 'Decision clock', value: '2 business days initial, 1 business day concurrent; 21-day deemed approval' },
      { label: '97153 + 97155 together', value: 'Allowed when both descriptors are met — PerformCare adopted the 2019 CPT supplemental guidance' },
      { label: 'Telehealth', value: 'POS 10 (home) / 02 (elsewhere); FQ for audio-only (dates of service from 10/1/2022)' },
    ],
    sections: [
      {
        h2: 'The PerformCare IBHS ABA pathway (CM-CAS-042)',
        list: [
          { title: '1. Written order or BPE', desc: 'From an ORP-enrolled prescriber (clinic prescribers must include the clinic or medical director MA number). A Best Practice Evaluation can stand in if it meets every written-order requirement. The order is valid 12 months minus one day from the face-to-face.' },
          { title: '2. Provider choice', desc: 'The IBHS Individual/ABA Provider Choice Acknowledgment Form is completed with the family when the order is written; if the chosen agency cannot start the assessment within 7 calendar days it must offer a transfer or open a Written Order/BPE Receipt Notification.' },
          { title: '3. Assessment registration', desc: 'The agency electronically submits an IBHS Assessment Registration Form within 4 calendar days of starting the assessment; PerformCare authorizes 45 calendar days for ABA. The assessment must observe every setting named in the order and include an FBA.' },
          { title: '4. Treatment request', desc: 'Within 10 calendar days of completing the ITP: Child/Adolescent Services Request Submission Sheet, provider-choice form, written order/BPE, assessment with FBA, ITP, CANS (Capital/CABHC counties only), and the FFS-to-PerformCare transition form if applicable.' },
          { title: '5. Approval', desc: 'Services start on the date of the medical-necessity decision and are authorized for a maximum of 12 months; the ITP is updated and submitted at least every 6 months.' },
          { title: 'Urgent start', desc: 'If the order justifies starting before the assessment/ITP, PerformCare can approve an interim 75-calendar-day ABA authorization plus a separate assessment authorization (130 units for ABA per IBHS 22-108).' },
        ],
        cites: [
          { title: 'PerformCare Policy CM-CAS-042 — Initial & Re-Authorization Requirements for Individual & ABA IBHS (rev. 03/11/26)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/policies/202605/CM-CAS-042%20%2004.03.26.pdf' },
          { title: 'PerformCare Provider Notice IBHS 22-108 — IBHS Assessment Authorization Update', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/ibhs-22-108-ibhs-assessment-auth-update.pdf' },
          { title: 'PerformCare Provider Notice IBHS 25-100 — IBHS Updates (April 11, 2025)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/policies/ibhs/2025/ibhs-25-100-ibhs-updates.pdf' },
        ],
      },
      {
        h2: 'Codes, bundling and reassessment',
        body: [
          'IBHS 22-102 lays out the bundles: a 97151 registration (no MNC decision) also lets ABA agencies bill 97152/97152 U8; an authorization for 97155 (medical-necessity review) covers 97156/97156 U7; and PerformCare requires separate authorization for 97155 U7 (behavior analyst) and 97153 U8 (assistant behavior consultation-ABA). IBHS 21-105 confirms a BCBA working as BC-ABA bills 97155 U7 at the BA-level rate.',
          'Since 3/1/2023 (IBHS 23-102) agencies may bill 97151 for the reauthorization reassessment, but PerformCare issues no separate authorization or extra units — the hours come out of the clinician’s authorized hours (e.g., a BA authorized for 20 hours can split them across 97155, 97156 and 97151). Periodic ITP updates outside the reauthorization window are billed as 97155. From May 12, 2025, PerformCare "will no longer extend IBHS assessment authorizations under any circumstances".',
        ],
        cites: [
          { title: 'PerformCare Provider Notice IBHS 22-102 — IBHS Code Authorization Bundling (Feb. 8, 2022)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/ibhs-22-102-code-auth-bundling.pdf' },
          { title: 'PerformCare Provider Notice IBHS 23-102 — ABA Providers’ Use of 97151 (reissued March 7, 2023)', url: 'https://pa.performcare.org/assets/pdf/providers/resources-information/ibhs-23-102-aba-providers-use-of-97151.pdf' },
          { title: 'PerformCare Provider Notice IBHS 21-105 — BCBA Billing (July 21, 2021)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/policies/ibhs-21-105-bcba-billing.pdf' },
          { title: 'PerformCare Provider Notice IBHS 25-100 — IBHS Updates (April 11, 2025)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/policies/ibhs/2025/ibhs-25-100-ibhs-updates.pdf' },
        ],
      },
      {
        h2: 'Act 62 and other insurance',
        body: [
          'PerformCare’s manual tells providers to follow 55 Pa. Code § 1101.64 and to "Request prior authorization the same way that they always have from both the BH-MCOs and the private insurance companies", noting that PerformCare authorization is not a guarantee of payment without a primary denial or non-coverage document. Claims for members with commercial or Medicare primary need the primary EOB attached, and providers must be enrolled with the primary plan.',
          'For ABA and Act 62, IBHS 21-103 requires one denial or non-covered letter per CPT code billed per calendar year; IBHS 23-105 adds that a non-covered letter spanning years must be paired with one EOB denial per CPT code per calendar year. Former exemptions for TRICARE, out-of-state plans and blanket self-funded status no longer apply (self-funded plans are exempt from Act 62 but "may pay for ABA services"). New referrals of privately insured children should go to an in-network provider for that private plan.',
        ],
        cites: [
          { title: 'PerformCare HealthChoices Provider Manual (updated February 2023)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/provider-manual.pdf' },
          { title: 'PerformCare Provider Notice IBHS 21-103 — IBHS TPL / EOB Clarifications (May 20, 2021)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/ibhs-21-103-ibhs-tpl-eob.pdf' },
          { title: 'PerformCare Provider Notice IBHS 23-105 — IBHS TPL / EOB Clarifications Update (June 21, 2023)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/policies/ibhs-23-105-ibhs-tpl-eob-clarifications-update.pdf' },
        ],
      },
      {
        h2: 'Rates',
        body: [
          'PerformCare pays IBHS at rates set by county-contract rate notices and provider agreements; current ABA rates were not published in the documents reviewed. Ask your PerformCare Account Executive for the current IBHS rate schedule for your county contract.',
        ],
        cites: [
          { title: 'PerformCare HealthChoices Provider Manual (updated February 2023)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/provider-manual.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Medicaid ID and county', desc: 'PerformCare covers Cumberland, Dauphin, Franklin, Fulton, Lancaster, Lebanon and Perry; CANS rules differ between the CABHC and Franklin/Fulton contracts.' },
      { title: 'Written order or BPE (current)', desc: 'Face-to-face, from an ORP-enrolled prescriber, dated so it is still valid at submission (expires 12 months minus one day).' },
      { title: 'Provider Choice Acknowledgment Form', desc: 'Completed with the family when the order is written; required in every initial packet.' },
      { title: 'School/daycare access', desc: 'The assessment must observe every setting named in the order; document any setting that refuses observation.' },
      { title: 'Primary insurance and ABA benefit', desc: 'Get the commercial plan’s authorization too; PerformCare needs one denial/non-covered letter per CPT code per calendar year before it pays as primary.' },
      { title: 'TRICARE status', desc: 'TRICARE is not exempt — providers should credential with TRICARE when it is primary.' },
    ],
    sources: [
      { title: 'PerformCare Policy CM-CAS-042 — Initial & Re-Authorization Requirements for Individual & ABA IBHS (rev. 03/11/26)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/policies/202605/CM-CAS-042%20%2004.03.26.pdf' },
      { title: 'PerformCare Policy CM-013 — Approval/Denial Process and Notifications (rev. 01/22/26)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/policies/202605/CM-013%20%2001.23.26.pdf' },
      { title: 'PerformCare HealthChoices Provider Manual (updated February 2023)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/provider-manual.pdf' },
      { title: 'PerformCare Provider Notice IBHS 22-102 — IBHS Code Authorization Bundling (Feb. 8, 2022)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/ibhs-22-102-code-auth-bundling.pdf' },
      { title: 'PerformCare Provider Notice IBHS 23-102 — ABA Providers’ Use of 97151 (reissued March 7, 2023)', url: 'https://pa.performcare.org/assets/pdf/providers/resources-information/ibhs-23-102-aba-providers-use-of-97151.pdf' },
      { title: 'PerformCare Provider Notice IBHS 21-100 — IBHS ABA Billing Guide (Feb. 4, 2021)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/policies/ibhs-21-100-aba-cpt-billing-guide.pdf' },
      { title: 'Supplemental Guidance on Interpreting and Applying the 2019 CPT Codes for Adaptive Behavior Services (attachment to PerformCare IBHS 21-100)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/policies/ibhs-21-100-attachment-aba-cpt-supplemental-guidance.pdf' },
      { title: 'PerformCare Provider Notice IBHS 21-103 — IBHS TPL / EOB Clarifications (May 20, 2021)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/ibhs-21-103-ibhs-tpl-eob.pdf' },
      { title: 'PerformCare Provider Notice IBHS 23-105 — IBHS TPL / EOB Clarifications Update (June 21, 2023)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/policies/ibhs-23-105-ibhs-tpl-eob-clarifications-update.pdf' },
      { title: 'PerformCare Provider Notice AD 22-106 — Telehealth Place of Service and Audio Only Modifier (Aug. 30, 2022)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/ad-22-106-telehealth-place-of-service.pdf' },
      { title: 'PerformCare Provider Notice IBHS 26-101 — IBHS Monitoring Reminder (May 6, 2026)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/policies/ibhs/ibhs-26-101-ibhs-monitoring-reminder.pdf' },
      { title: 'DHS HealthChoices BH Program Standards and Requirements, Appendix AA — Prior Authorization Requirements (Jan. 1, 2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Appendix-AA-Prior-Authorization-Requirements.pdf' },
      { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
      { title: 'PA DHS — Behavioral Health Managed Care Organizations (BH-MCOs) by county', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/bhc/bhc-mcos' },
    ],
    faq: [
      { q: 'Does PerformCare require prior authorization for the ABA assessment?', a: 'It requires a registration, not a medical-necessity decision. The agency submits an IBHS Assessment Registration Form in Jiva within 4 calendar days of starting the assessment, and PerformCare authorizes 45 calendar days for an ABA assessment. Registering 97151 also allows billing 97152.' },
      { q: 'Can we bill 97153 and 97155 at the same time with PerformCare?', a: 'Yes, when both code descriptors are met. PerformCare adopted the 2019 CPT supplemental guidance for adaptive behavior services, which answers "Yes, as long as the criteria in the descriptors of both codes are met" — but a single QHP may not report both concurrently.' },
      { q: 'How long is a PerformCare ABA authorization?', a: 'Up to 12 months, starting on the medical-necessity decision date (or the day after the current authorization ends for timely reauths). Reauthorization packets are due within 60 days before the current authorization ends, with a new written order and assessment/ITP updated within 30 days.' },
      { q: 'Does my child need an autism diagnosis for PerformCare ABA?', a: 'No — IBHS ABA is available for a behavioral health diagnosis on the written order. An autism diagnosis matters mainly for coordination with private insurance under Act 62.' },
      { q: 'What does PerformCare need when private insurance is primary?', a: 'Seek authorization from both plans, bill the private plan first, and attach the EOB. For ABA/Act 62, PerformCare needs one denial or non-covered letter per CPT code per calendar year (plus an EOB denial per code per year if the letter spans years) before it pays as primary for the rest of that year.' },
    ],
    state: 'PA',
    kind: 'medicaid-mco',
    parent: 'Pennsylvania Medicaid (Medical Assistance)',
    cardDesc: 'HealthChoices BH-MCO, 7 counties; IBHS ABA — 97151 registration in Jiva, 12-month auths, 97153+97155 concurrent billing allowed.',
    assessmentPA: {
      value: 'Registration only — the agency submits an IBHS Assessment Registration Form in Jiva within 4 calendar days of starting the assessment, and PerformCare authorizes a 45-calendar-day ABA assessment window. Per IBHS 22-102, "PerformCare does not make an MNC decision on 97151"; the registration also allows billing 97152/97152 U8. Assessment authorizations are not extended (IBHS 25-100).',
      status: 'verified',
      cites: [
        { title: 'PerformCare Policy CM-CAS-042 — Initial & Re-Authorization Requirements for Individual & ABA IBHS (rev. 03/11/26)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/policies/202605/CM-CAS-042%20%2004.03.26.pdf' },
        { title: 'PerformCare Provider Notice IBHS 22-102 — IBHS Code Authorization Bundling (Feb. 8, 2022)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/ibhs-22-102-code-auth-bundling.pdf' },
        { title: 'PerformCare Provider Notice IBHS 25-100 — IBHS Updates (April 11, 2025)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/policies/ibhs/2025/ibhs-25-100-ibhs-updates.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Yes — submitted within 10 calendar days of completing the ITP: Child/Adolescent Services Request Submission Sheet, provider-choice form, written order/BPE, IBHS assessment (FBA required for ABA), ITP, CANS (CABHC counties) and, if applicable, the FFS transition form and capacity acknowledgment. PerformCare decides medical necessity under CM-013 and authorizes up to 12 months; 97155 U7 and 97153 U8 need their own authorization.',
      status: 'verified',
      cites: [
        { title: 'PerformCare Policy CM-CAS-042 — Initial & Re-Authorization Requirements for Individual & ABA IBHS (rev. 03/11/26)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/policies/202605/CM-CAS-042%20%2004.03.26.pdf' },
        { title: 'PerformCare Provider Notice IBHS 22-102 — IBHS Code Authorization Bundling (Feb. 8, 2022)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/ibhs-22-102-code-auth-bundling.pdf' },
      ],
    },
    dxRequired: {
      value: 'No autism diagnosis required — IBHS ABA is available for a behavioral health diagnosis on the written order/BPE (state rule; PerformCare’s IBHS policies add nothing narrower). ABA codes are used "for Members with or without a diagnosis of autism" (IBHS 21-103).',
      status: 'verified',
      cites: [
        { title: 'PerformCare Provider Notice IBHS 21-103 — IBHS TPL / EOB Clarifications (May 20, 2021)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/ibhs-21-103-ibhs-tpl-eob.pdf' },
        { title: 'OMHSAS IBHS Frequently Asked Questions (updated February 2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/healthchoices/hc-providers/documents/intensive-behavioral-health-services-(ibhs)/ibhs-faq-updated-02-22-22.pdf' },
      ],
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the state IBHS rule (PerformCare’s IBHS policies set nothing different): under 55 Pa. Code § 5240.82 behavior analytic and BC-ABA staff get 1 hour of individual face-to-face supervision monthly (a second hour if they supervise assistant BC-ABA or BHT-ABA staff) plus 30 minutes of direct observation every 6 months; BHT-ABA staff get 1 hour weekly at 37.5+ hours a week, otherwise 1 hour twice a month, with 1 hour of individual face-to-face supervision each month and 6 hours of onsite supervision before working independently.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
          { title: 'PerformCare Policy CM-CAS-042 — Initial & Re-Authorization Requirements for Individual & ABA IBHS (rev. 03/11/26)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/policies/202605/CM-CAS-042%20%2004.03.26.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Allowed when both descriptors are met. IBHS 21-100 says PerformCare "has adopted" the 2019 Supplemental Guidance on Interpreting and Applying the 2019 CPT Codes for Adaptive Behavior Services, which answers "Can I report 97153 and 97155 concurrently?" with "Yes, as long as the criteria in the descriptors of both codes are met. A single QHP may not report 97153 and 97155 concurrently."',
        status: 'verified',
        cites: [
          { title: 'PerformCare Provider Notice IBHS 21-100 — IBHS ABA Billing Guide (Feb. 4, 2021)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/policies/ibhs-21-100-aba-cpt-billing-guide.pdf' },
          { title: 'Supplemental Guidance on Interpreting and Applying the 2019 CPT Codes for Adaptive Behavior Services (attachment to PerformCare IBHS 21-100)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/policies/ibhs-21-100-attachment-aba-cpt-supplemental-guidance.pdf' },
        ],
      },
      dailyLimits: {
        value: 'No per-day unit ceiling is published for PerformCare. Treatment is authorized in hours per service per month, and providers "cannot exceed the hours authorized for the level of clinician" (IBHS 23-102). The state FFS code list’s per-day ranges (OMHSAS-21-03) apply to fee-for-service only.',
        status: 'plan-dependent',
        cites: [
          { title: 'PerformCare Provider Notice IBHS 23-102 — ABA Providers’ Use of 97151 (reissued March 7, 2023)', url: 'https://pa.performcare.org/assets/pdf/providers/resources-information/ibhs-23-102-aba-providers-use-of-97151.pdf' },
          { title: 'PerformCare Policy CM-CAS-042 — Initial & Re-Authorization Requirements for Individual & ABA IBHS (rev. 03/11/26)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/policies/202605/CM-CAS-042%20%2004.03.26.pdf' },
        ],
        verifyVia: 'Your PerformCare provider agreement/fee schedule or your PerformCare Account Executive — ask whether any per-day unit edit applies to 97153/97155 beyond the monthly authorized hours.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'State rule plus PerformCare’s record standard: 55 Pa. Code § 5240.41 requires each service note to carry the signature of the staff person providing it; PerformCare’s manual requires every entry to be dated with the author identified by "name, title, credentials, and signature (paper) or key identifier (electronic)". ITPs are signed with the family per the IBHS regulations.',
        status: 'verified',
        cites: [
          { title: 'PerformCare HealthChoices Provider Manual (updated February 2023)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/provider-manual.pdf' },
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
        ],
      },
      placeOfService: {
        value: 'Home, school, daycare and community per the IBHS rules; CM-CAS-042 requires the assessment to observe the school/daycare/community setting whenever the written order places services there, and the ITP must list hours per setting. PerformCare’s manual says TPL obligations apply at any "location that is recognized as a place of service by the provider". Center-based 1:1 IBHS follows OMHSAS-22-03.',
        status: 'verified',
        cites: [
          { title: 'PerformCare Policy CM-CAS-042 — Initial & Re-Authorization Requirements for Individual & ABA IBHS (rev. 03/11/26)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/policies/202605/CM-CAS-042%20%2004.03.26.pdf' },
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
        ],
      },
      billAsProvider: {
        value: 'The IBHS agency bills as an ABA-approved IBHS provider (PROMISe provider type 11, specialty 592 per IBHS 21-100); the rendering NPI and taxonomy go on the claim when different from the billing NPI (manual, CMS-1500 box 24J / loop 2310B). Credential tiers are carried by modifiers — e.g., a BCBA delivering BC-ABA bills 97155 U7 (IBHS 21-105), assistant BC-ABA bills 97153 U8.',
        status: 'verified',
        cites: [
          { title: 'PerformCare Provider Notice IBHS 21-100 — IBHS ABA Billing Guide (Feb. 4, 2021)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/policies/ibhs-21-100-aba-cpt-billing-guide.pdf' },
          { title: 'PerformCare Provider Notice IBHS 21-105 — BCBA Billing (July 21, 2021)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/policies/ibhs-21-105-bcba-billing.pdf' },
          { title: 'PerformCare HealthChoices Provider Manual (updated February 2023)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/provider-manual.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21 — IBHS serves children, youth and young adults under 21 (55 Pa. Code Chs. 1155/5240). No minimum age. PerformCare publishes nothing different.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'PerformCare Policy CM-CAS-042 — Initial & Re-Authorization Requirements for Individual & ABA IBHS (rev. 03/11/26)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/policies/202605/CM-CAS-042%20%2004.03.26.pdf' },
        ],
      },
      dxRecency: {
        value: 'What must be current is the written order/BPE: completed within 12 months of the assessment start date and still valid at submission — it expires 12 months minus one calendar day after the face-to-face (an order written 1/1/2023 expires 12/31/2023). Every reauthorization needs a new written order/BPE.',
        status: 'verified',
        cites: [
          { title: 'PerformCare Policy CM-CAS-042 — Initial & Re-Authorization Requirements for Individual & ABA IBHS (rev. 03/11/26)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/policies/202605/CM-CAS-042%20%2004.03.26.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'The written order must come from an ORP-enrolled prescriber based on face-to-face interaction (state rule: licensed physician, licensed psychologist, CRNP or other licensed practitioner whose scope includes diagnosing BH disorders and prescribing BH services). PerformCare’s manual adds that IBHS prescribers must be enrolled as individual MA providers, and clinic-based prescribers must include the clinic or medical director MA number.',
        status: 'verified',
        cites: [
          { title: 'PerformCare Policy CM-CAS-042 — Initial & Re-Authorization Requirements for Individual & ABA IBHS (rev. 03/11/26)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/policies/202605/CM-CAS-042%20%2004.03.26.pdf' },
          { title: 'PerformCare HealthChoices Provider Manual (updated February 2023)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/provider-manual.pdf' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
        ],
      },
      diagnosticTools: {
        value: 'No named instrument is required behind the diagnosis. The tool requirement is in the IBHS assessment: "An FBA must be completed as part of the assessment process (IBHS ABA only)", and a CANS is required in the CABHC (Capital) counties.',
        status: 'verified',
        cites: [
          { title: 'PerformCare Policy CM-CAS-042 — Initial & Re-Authorization Requirements for Individual & ABA IBHS (rev. 03/11/26)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/policies/202605/CM-CAS-042%20%2004.03.26.pdf' },
        ],
      },
      referral: {
        value: 'A written order (or a BPE meeting all written-order requirements) from an ORP-enrolled prescriber is required to start and again for every reauthorization. The provider-choice form is completed with the family at that time; the order goes to the family’s chosen agency within 4 calendar days if they ask. Agencies that cannot start within 7 calendar days must offer a transfer or open a receipt notification — except for members "who have primary commercial insurance with an ABA benefit", whom providers help coordinate with the commercial plan (IBHS 26-101).',
        status: 'verified',
        cites: [
          { title: 'PerformCare Policy CM-CAS-042 — Initial & Re-Authorization Requirements for Individual & ABA IBHS (rev. 03/11/26)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/policies/202605/CM-CAS-042%20%2004.03.26.pdf' },
          { title: 'PerformCare Provider Notice IBHS 26-101 — IBHS Monitoring Reminder (May 6, 2026)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/policies/ibhs/ibhs-26-101-ibhs-monitoring-reminder.pdf' },
        ],
      },
      telehealth: {
        value: 'Allowed under OMHSAS-22-02. For dates of service on or after 10/1/2022 PerformCare wants POS 10 when the member is at home and POS 02 elsewhere, and modifier FQ (not 95) for audio-only. When PerformCare is secondary, adjust the secondary claim to PerformCare’s billing requirements after the primary processes it.',
        status: 'verified',
        cites: [
          { title: 'PerformCare Provider Notice AD 22-106 — Telehealth Place of Service and Audio Only Modifier (Aug. 30, 2022)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/ad-22-106-telehealth-place-of-service.pdf' },
          { title: 'OMHSAS-22-02 — Revised Guidelines for Delivery of BH Services Through Telehealth (eff. 7/1/2022)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/docs/documents/omhsas/Bulletin%20OMHSAS-22-02%20-%20Revised%20Guidelines%20for%20Delivery%20of%20BH%20Services%20Through%20Telehealth%207.1.22.pdf' },
        ],
      },
      authTurnaround: {
        value: 'CM-013 (rev. 01/22/26): initial requests decided and the member told at least verbally within 2 business days of the request; concurrent (reauthorization) decisions within 1 business day of complete information; written notice within 2 business days after the decision. Missing information is requested within 48 hours and the provider gets up to 14 days. If the member has no written decision within 21 days of the request, "the service is automatically approved". PerformCare says it follows "the most stringent time frame" of Act 146 and NCQA; the federal floor (42 CFR 438.210(d)) is 7 calendar days standard / 72 hours expedited. Reauth: submit within 60 days before the current authorization ends.',
        status: 'verified',
        cites: [
          { title: 'PerformCare Policy CM-013 — Approval/Denial Process and Notifications (rev. 01/22/26)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/policies/202605/CM-013%20%2001.23.26.pdf' },
          { title: 'PerformCare Policy CM-CAS-042 — Initial & Re-Authorization Requirements for Individual & ABA IBHS (rev. 03/11/26)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/policies/202605/CM-CAS-042%20%2004.03.26.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value: 'PerformCare pays last. Its manual tells providers to "Request prior authorization the same way that they always have from both the BH-MCOs and the private insurance companies" — so PerformCare authorization is still needed when commercial is primary — and to bill the private insurer first even if not yet contracted, unless written non-coverage is already on file. Claims need the primary EOB; providers must be enrolled with the primary and file PerformCare within 60 days of the primary’s decision. For ABA/Act 62: one denial or non-covered letter per CPT code per calendar year (IBHS 21-103), plus one EOB denial per code per year when a letter spans years (IBHS 23-105). TRICARE and out-of-state plans are not exempt; self-funded plans are exempt from Act 62 but may cover ABA. Federal law keeps Medicaid behind TRICARE (10 U.S.C. 1079(i)(1)).',
        status: 'verified',
        cites: [
          { title: 'PerformCare HealthChoices Provider Manual (updated February 2023)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/provider-manual.pdf' },
          { title: 'PerformCare Provider Notice IBHS 21-103 — IBHS TPL / EOB Clarifications (May 20, 2021)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/ibhs-21-103-ibhs-tpl-eob.pdf' },
          { title: 'PerformCare Provider Notice IBHS 23-105 — IBHS TPL / EOB Clarifications Update (June 21, 2023)', url: 'https://pa.performcare.org/content/dam/amerihealth-caritas/performcare-pa/pdf/providers/resources-information/policies/ibhs-23-105-ibhs-tpl-eob-clarifications-update.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
        ],
      },
    },
  },
  'carelon-behavioral-health-pennsylvania': {
    slug: 'carelon-behavioral-health-pennsylvania',
    payer: 'Carelon Health of Pennsylvania (HealthChoices BH-MCO; formerly Beacon / Value Behavioral Health)',
    pill: 'Payer Guide · Carelon Health of Pennsylvania',
    h1: 'Carelon Health of Pennsylvania ABA coverage (HealthChoices IBHS).',
    metaTitle: 'Carelon Health of Pennsylvania ABA (IBHS) Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Carelon Health of Pennsylvania authorizes ABA under HealthChoices IBHS in Armstrong, Beaver, Butler, Crawford, Fayette, Indiana, Lawrence, Mercer, Venango, Washington and Westmoreland counties: no auth for the assessment, CN.48 packets with the Act 62 cover sheet, 180-day authorizations, telehealth POS 10/02, and Act 62 COB.',
    intro: [
      'Carelon Health of Pennsylvania (formerly Beacon Health Options / Value Behavioral Health of PA) is the HealthChoices behavioral health managed care organization for Medicaid members in Armstrong, Beaver, Butler, Crawford, Fayette, Indiana, Lawrence, Mercer, Venango, Washington and Westmoreland counties. As everywhere in Pennsylvania Medicaid, ABA is the ABA category of Intensive Behavioral Health Services (IBHS): for anyone under 21 with a behavioral health diagnosis, started by a written order.',
      'Carelon’s IBHS policy CN.48 (DHS-approved 9/26/2024) is explicit on the funnel question: "The assessment does not require a prior authorization process however treatment does require a prior authorization process." Treatment is requested through ProviderConnect with a full IBHS packet — including Carelon’s Act 62 cover sheet whenever the child has an autism diagnosis — and approved for up to 180 days.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'HealthChoices BH-MCO (behavioral health carve-out) — ABA is delivered as IBHS ABA services' },
      { label: 'Counties', value: 'Armstrong, Beaver, Butler, Crawford, Fayette, Indiana, Lawrence, Mercer, Venango, Washington, Westmoreland' },
      { label: 'Assessment (97151)', value: 'No prior authorization — up to 92 units (23 hours); the grid bills it as 97151 AO/AP with "Auth Req? N"' },
      { label: 'Treatment PA', value: 'Yes — IBHS packet via ProviderConnect within 45 days of starting the ABA assessment; Act 62 cover sheet for any ASD diagnosis' },
      { label: 'Authorization length', value: 'Up to 180 days; continued-stay request at least 10 business days before expiry' },
      { label: 'Decision clock', value: 'State Appendix AA: 2 business days prospective, 1 business day concurrent, 21-day deemed approval' },
      { label: 'Telehealth', value: 'POS 10 (home) / 02 (elsewhere); GT discontinued (Jan. 2026); FQ variants listed for audio-only' },
      { label: 'Other coverage', value: 'Carelon pays last; with Act 62 coverage it acknowledges the case and reviews medical necessity once the primary benefit is met' },
    ],
    sections: [
      {
        h2: 'The Carelon IBHS ABA pathway (Policy CN.48)',
        list: [
          { title: '1. Written order', desc: 'From a licensed practitioner with an active PROMISe ID, face-to-face, within 12 months of initiation, naming a DSM/ICD behavioral health diagnosis, clinical support, maximum hours of each service per month, settings and measurable discharge markers. In-network order writers submit the order to Carelon and the county through ProviderConnect within 7 business days.' },
          { title: '2. Assessment (no PA)', desc: 'Up to 92 units (23 hours); ABA assessments completed within 30 calendar days of initiation, face-to-face and across settings, with a signed Service Delivery Schedule.' },
          { title: '3. ITP', desc: 'Within 45 calendar days of initiation for ABA; exact hours per setting; signed by the youth or parent and a clinical-director-qualified reviewer; updated every 180 days.' },
          { title: '4. Authorization packet', desc: 'Through ProviderConnect within 45 days of the first assessment day for ABA: written order, assessment, tool results (e.g., CANS), signed Service Delivery Schedule, ITP, Act 62 cover sheet if ASD, and the Family Choice/Confirmation Form. An abbreviated packet (order, initial treatment plan, Act 62 sheet, family choice form) is allowed when treatment must start during the assessment.' },
          { title: '5. Review', desc: 'Care managers review within 5 business days; approval is for up to 180 days. Incomplete packets are returned; if not corrected within 5 business days the authorization starts on the date a complete packet arrives.' },
          { title: '6. Continued stay', desc: 'At least 10 business days before the authorization expires: written order, updated assessment, tool results, signed schedule, ITP with progress summary, Act 62 cover sheet if ASD.' },
        ],
        cites: [
          { title: 'Carelon Health of PA Policy CN.48 — Intensive Behavioral Health Services (DHS approved 9/26/2024)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/CN-48-IBHS-Beacon-Policy-and-Procedure.pdf' },
          { title: 'Carelon Health of PA — IBHS Packet Documentation Checklist', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/IBHS-Packet-Documentation-Checklist.docx' },
          { title: 'Carelon Health of PA — Intensive Behavioral Health Services (IBHS) provider page', url: 'https://providers.pa.carelon.com/providers/intensive-behavioral-health-services-ibhs/' },
        ],
      },
      {
        h2: 'Codes and the covered-services grid',
        body: [
          'Carelon’s HealthChoices Covered Services Grid (PV 07/22/2026) is the claims source of truth: IBHS ABA codes are billed by PROMISe provider type 11, specialty 592 with "Auth Req? Y" for 97151 (BC-ABA; U7 for behavior analytic), 97152/97153 (BHT-ABA; U8 for assistant BC-ABA), 97155 and 97156 — while the assessment service class billed as 97151 AO or AP carries "Auth Req? N". Permitted places of service for 97151/97153/97155 are 02, 03, 10, 11, 12 and 99 (97156 omits 03), with FQ audio-only variants on POS 02/10.',
          'Carelon’s March 2026 IBHS summit reminded providers that BHT-ABA is not a stand-alone service — it must be overseen by BC-ABA or BA — that services requested must be on the written order, and that the requested start date for an initial cannot precede the family’s ITP signature.',
        ],
        cites: [
          { title: 'Carelon Pennsylvania HealthChoices Covered Services Grid (PV 07/22/2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Carelon-Pennsylvania-HealthChoices-Covered-Services-Grid-PV-07222026.xlsx' },
          { title: 'Carelon Health of PA — IBHS Summit, March 6, 2026', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/IBHS-Summit-March-2026.pdf' },
        ],
      },
      {
        h2: 'Act 62 and other insurance',
        body: [
          'Carelon’s Act 62 FAQ: a child is Act 62 eligible with an ASD diagnosis and primary insurance; the Act 62 cover sheet goes with every new authorization request (only the top portion if there is no primary). When the primary covers autism services, Carelon issues an acknowledgement letter that services are covered under Act 62 and "will be reviewed for Medical Necessity once the primary insurance benefit has been met"; no Carelon authorization is needed when only copays, coinsurance or deductibles are billed. If the primary has no Act 62 coverage, send proof (EOB, determination letter, or an employer letter that the group has fewer than 50 employees or excludes autism) to the Claims Liaison Team; Navinet printouts are not accepted.',
          'Carelon "is not permitted to pay for services if the provider is not participating with that member’s primary insurance". Timely filing for secondary claims runs 90 days from the primary EOB. One inconsistency to watch: the covered-services grid flags IBHS ABA codes "TPL Exempt: Y", yet the Act 62 FAQ says that for a child with ASD and primary insurance "Carelon will deny the claim and request the primary insurance EOB" — follow the Act 62 process.',
        ],
        cites: [
          { title: 'Carelon Health of PA — Act 62 Frequently Asked Questions', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/ACT-62-Frequently-Asked-Questions.pdf' },
          { title: 'Carelon Health of PA — Autism Coverage: Acceptable Benefit Verification Information', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/ACT-62-Autism-Coverage-Acceptable-Benefit-Verification-Information.pdf' },
          { title: 'Carelon Health of PA Provider Manual — 6: Third Party Liability (TPL)', url: 'https://providers.pa.carelon.com/providers/provider-manual/6-third-party-liability-tpl/' },
          { title: 'Carelon Pennsylvania HealthChoices Covered Services Grid (PV 07/22/2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Carelon-Pennsylvania-HealthChoices-Covered-Services-Grid-PV-07222026.xlsx' },
        ],
      },
      {
        h2: 'Rates',
        body: [
          'Carelon pays under provider agreements; the covered-services grid lists codes, modifiers and places of service but not rates, and no public Carelon PA IBHS fee schedule was found. Confirm rates with your Carelon Provider Field Coordinator.',
        ],
        cites: [
          { title: 'Carelon Pennsylvania HealthChoices Covered Services Grid (PV 07/22/2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Carelon-Pennsylvania-HealthChoices-Covered-Services-Grid-PV-07222026.xlsx' },
        ],
      },
    ],
    collect: [
      { title: 'Medicaid ID and county', desc: 'Carelon covers 11 western PA counties; a county change needs an authorization under the new eligibility line.' },
      { title: 'Written order (within 12 months)', desc: 'Face-to-face order from a licensed practitioner with an active PROMISe ID — MD, CRNP, PA, licensed psychologist, LPC, LCSW or LMFT per Carelon’s checklist — naming diagnosis, services, maximum hours per month and settings.' },
      { title: 'Act 62 cover sheet inputs', desc: 'Primary insurance name, effective date, renewal date, calendar vs benefit year, and whether the plan pays for autism services — needed for every new request when the child has ASD.' },
      { title: 'Primary insurance proof', desc: 'EOB or determination letter (or employer letter for groups under 50 / autism exclusions); Navinet printouts are not accepted.' },
      { title: 'Signed Service Delivery Schedule', desc: 'Parent/legal guardian (or member 14+) signature is part of every packet.' },
      { title: 'Family Choice/Confirmation Form', desc: 'Reviewed with the family before services start.' },
    ],
    sources: [
      { title: 'Carelon Health of PA Policy CN.48 — Intensive Behavioral Health Services (DHS approved 9/26/2024)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/CN-48-IBHS-Beacon-Policy-and-Procedure.pdf' },
      { title: 'Carelon Health of PA — Intensive Behavioral Health Services (IBHS) provider page', url: 'https://providers.pa.carelon.com/providers/intensive-behavioral-health-services-ibhs/' },
      { title: 'Carelon Health of PA — IBHS Packet Documentation Checklist', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/IBHS-Packet-Documentation-Checklist.docx' },
      { title: 'Carelon Health of PA — Authorization Requirements by service class', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Authorization-Requirements.docx' },
      { title: 'Carelon Pennsylvania HealthChoices Covered Services Grid (PV 07/22/2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Carelon-Pennsylvania-HealthChoices-Covered-Services-Grid-PV-07222026.xlsx' },
      { title: 'Carelon Health of PA — Act 62 Frequently Asked Questions', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/ACT-62-Frequently-Asked-Questions.pdf' },
      { title: 'Carelon Health of PA — Autism Coverage: Acceptable Benefit Verification Information', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/ACT-62-Autism-Coverage-Acceptable-Benefit-Verification-Information.pdf' },
      { title: 'Carelon Health of PA Provider Manual — 6: Third Party Liability (TPL)', url: 'https://providers.pa.carelon.com/providers/provider-manual/6-third-party-liability-tpl/' },
      { title: 'Carelon Health of PA — A Guide to Third Party Liability', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Third-Party-Liability-Guide.pdf' },
      { title: 'Carelon Health of PA Provider Manual — 3: Requests for Authorizations/Retro-authorizations', url: 'https://providers.pa.carelon.com/providers/provider-manual/3-requests-for-authorizationsretro-authorizations/' },
      { title: 'Carelon Health of PA Provider Alert 03.26.01 — Telehealth Billing Update: Discontinuation of GT Modifier (Jan. 22, 2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/PA-03.26.01-Telehealth-Billing-Update-Dis-of-GT-Modifier.pdf' },
      { title: 'Carelon Health of PA — IBHS Summit, March 6, 2026', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/IBHS-Summit-March-2026.pdf' },
      { title: 'DHS HealthChoices BH Program Standards and Requirements, Appendix AA — Prior Authorization Requirements (Jan. 1, 2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Appendix-AA-Prior-Authorization-Requirements.pdf' },
      { title: 'PA DHS — Behavioral Health Managed Care Organizations (BH-MCOs) by county', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/bhc/bhc-mcos' },
    ],
    faq: [
      { q: 'Does Carelon Health of Pennsylvania require prior authorization for the ABA assessment?', a: 'No. Policy CN.48: "The assessment does not require a prior authorization process however treatment does require a prior authorization process." Providers can use up to 92 units (23 hours) for the assessment; the covered-services grid lists the assessment as 97151 with modifier AO or AP and "Auth Req? N".' },
      { q: 'How long does a Carelon IBHS authorization last?', a: 'Up to 180 days. Submit continued-stay requests through ProviderConnect at least 10 business days before the current authorization expires.' },
      { q: 'Does my child need an autism diagnosis for ABA through Carelon?', a: 'No — IBHS ABA is available with any DSM/ICD behavioral health diagnosis on the written order. An autism diagnosis triggers Carelon’s Act 62 cover sheet and primary-insurance process.' },
      { q: 'What if my child has private insurance with autism coverage?', a: 'Use a provider in the private plan’s network and bill it first. Carelon generates an acknowledgement letter that services are covered under Act 62 and reviews medical necessity once the primary benefit is met; if the provider bills Carelon only for copays, coinsurance or deductibles, no Carelon authorization is required.' },
      { q: 'How do we bill ABA telehealth to Carelon?', a: 'Identify telehealth by place of service only — POS 10 in the member’s home, POS 02 elsewhere; Carelon discontinued the GT modifier (Alert 03.26.01, Jan. 2026). The grid lists FQ variants of the ABA codes on POS 02/10 for audio-only.' },
    ],
    state: 'PA',
    kind: 'medicaid-mco',
    parent: 'Pennsylvania Medicaid (Medical Assistance)',
    cardDesc: 'HealthChoices BH-MCO, 11 western counties; IBHS ABA — no PA on the assessment, 180-day treatment auths, Act 62 cover sheet.',
    assessmentPA: {
      value: 'No — CN.48: "The assessment does not require a prior authorization process however treatment does require a prior authorization process." Providers may use up to 92 units (23 hours) for the assessment. Carelon’s authorization-requirements list says the IBHS extended assessment for ABA "does not require an authorization", and the covered-services grid bills that assessment as 97151 AO/AP with "Auth Req? N" (other 97151 lines are "Y").',
      status: 'verified',
      cites: [
        { title: 'Carelon Health of PA Policy CN.48 — Intensive Behavioral Health Services (DHS approved 9/26/2024)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/CN-48-IBHS-Beacon-Policy-and-Procedure.pdf' },
        { title: 'Carelon Health of PA — Authorization Requirements by service class', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Authorization-Requirements.docx' },
        { title: 'Carelon Pennsylvania HealthChoices Covered Services Grid (PV 07/22/2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Carelon-Pennsylvania-HealthChoices-Covered-Services-Grid-PV-07222026.xlsx' },
      ],
    },
    treatmentPA: {
      value: 'Yes — BC-ABA, behavior analytic, assistant BC-ABA and BHT-ABA each "requires a Written Order recommending services and a complete IBHS packet". The packet goes through ProviderConnect within 45 days of the first assessment day for ABA (written order, assessment, tool results, signed Service Delivery Schedule, ITP, Act 62 cover sheet if ASD, Family Choice form); care managers review within 5 business days and approve up to 180 days.',
      status: 'verified',
      cites: [
        { title: 'Carelon Health of PA Policy CN.48 — Intensive Behavioral Health Services (DHS approved 9/26/2024)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/CN-48-IBHS-Beacon-Policy-and-Procedure.pdf' },
        { title: 'Carelon Health of PA — Authorization Requirements by service class', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Authorization-Requirements.docx' },
        { title: 'Carelon Health of PA — IBHS Packet Documentation Checklist', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/IBHS-Packet-Documentation-Checklist.docx' },
      ],
    },
    dxRequired: {
      value: 'No autism diagnosis required — CN.48 requires a written order naming a behavioral health diagnosis "listed in the most recent DSM or ICD". An ASD diagnosis changes the paperwork (Act 62 cover sheet), not eligibility.',
      status: 'verified',
      cites: [
        { title: 'Carelon Health of PA Policy CN.48 — Intensive Behavioral Health Services (DHS approved 9/26/2024)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/CN-48-IBHS-Beacon-Policy-and-Procedure.pdf' },
        { title: 'Carelon Health of PA — Act 62 Frequently Asked Questions', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/ACT-62-Frequently-Asked-Questions.pdf' },
      ],
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the state IBHS rule (CN.48 defers to the IBHS regulations and publishes no separate ratio): 55 Pa. Code § 5240.82 requires 1 hour a month of individual face-to-face supervision for BA/BC-ABA staff (plus a second hour if they supervise assistant BC-ABA or BHT-ABA) and 30 minutes of observation every 6 months; BHT-ABA staff get 1 hour weekly at 37.5+ hours a week, otherwise twice a month, with 1 hour individual face-to-face monthly. Carelon’s March 2026 summit adds that BHT-ABA must be overseen by BC-ABA or BA and "MT shouldn’t be overseeing ABA cases".',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
          { title: 'Carelon Health of PA Policy CN.48 — Intensive Behavioral Health Services (DHS approved 9/26/2024)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/CN-48-IBHS-Beacon-Policy-and-Procedure.pdf' },
          { title: 'Carelon Health of PA — IBHS Summit, March 6, 2026', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/IBHS-Summit-March-2026.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not published. CN.48, the covered-services grid and the Carelon Billing Guide state no rule on billing 97153 and 97155 for the same clock time.',
        status: 'unverified',
        cites: [
          { title: 'Carelon Pennsylvania HealthChoices Covered Services Grid (PV 07/22/2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Carelon-Pennsylvania-HealthChoices-Covered-Services-Grid-PV-07222026.xlsx' },
          { title: 'Carelon Health of PA Policy CN.48 — Intensive Behavioral Health Services (DHS approved 9/26/2024)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/CN-48-IBHS-Beacon-Policy-and-Procedure.pdf' },
        ],
        verifyVia: 'Carelon Health of PA IBHS team (PAIBHS@carelon.com) or your Provider Field Coordinator — ask whether 97155 may be billed for the same minutes as 97153 when the analyst directs the technician, and keep the written answer.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No per-day unit ceiling is published. Carelon authorizes hours per month per service for up to 180 days; the grid gives each ABA code a 15-minute unit without a daily maximum, and its Billing Guide only bars date-span billing for services valued at more than one unit per day. The state FFS per-day ranges (OMHSAS-21-03) are fee-for-service only.',
        status: 'plan-dependent',
        cites: [
          { title: 'Carelon Pennsylvania HealthChoices Covered Services Grid (PV 07/22/2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Carelon-Pennsylvania-HealthChoices-Covered-Services-Grid-PV-07222026.xlsx' },
          { title: 'Carelon Health of PA — Billing Guide', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Carelon-Billing-Guide.pdf' },
        ],
        verifyVia: 'Your Carelon Health of PA provider agreement or Provider Field Coordinator — confirm whether any per-day unit edit applies to 97153/97155 beyond the authorized monthly hours.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'State rule plus Carelon’s standards: 55 Pa. Code § 5240.41 requires each service note to carry the signature of the staff person providing it. Carelon’s treatment-record standards require every entry to include the responsible clinician’s name, professional degree and identification number, dated; CN.48 requires the ITP and every update to be signed and dated by the youth or a parent/guardian and by the staff person who wrote it, and reviewed and signed by a clinical-director-qualified individual. Carelon’s September 2026 alert stresses that documentation must show who participated, when, where and for how long.',
        status: 'verified',
        cites: [
          { title: '55 Pa. Code Chapter 5240 — Intensive Behavioral Health Services (licensing)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter5240/chap5240toc.html' },
          { title: 'Carelon Health of PA Provider Manual — 4: Treatment Record Standards', url: 'https://providers.pa.carelon.com/providers/provider-manual/4-treatment-record-standards/' },
          { title: 'Carelon Health of PA Policy CN.48 — Intensive Behavioral Health Services (DHS approved 9/26/2024)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/CN-48-IBHS-Beacon-Policy-and-Procedure.pdf' },
          { title: 'Carelon Health of PA Provider Alert 22.26.09 — Documentation and Program Integrity Reminder (Sept. 3, 2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/PA-22.26.09-Documentation-and-Program-Integrity-Reminder.pdf' },
        ],
      },
      placeOfService: {
        value: 'Home, school and community. Carelon’s grid permits 97151, 97153 and 97155 at POS 02, 03 (school), 10, 11, 12 and 99, and 97156 at POS 02, 10, 11, 12 and 99 (no 03). The ITP must state exact hours per setting (home, community, school, center), and BHT school hours "should not switch to home setting over breaks from school".',
        status: 'verified',
        cites: [
          { title: 'Carelon Pennsylvania HealthChoices Covered Services Grid (PV 07/22/2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Carelon-Pennsylvania-HealthChoices-Covered-Services-Grid-PV-07222026.xlsx' },
          { title: 'Carelon Health of PA — IBHS Summit, March 6, 2026', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/IBHS-Summit-March-2026.pdf' },
        ],
      },
      billAsProvider: {
        value: 'The IBHS agency bills — the grid ties every ABA code to PROMISe provider type 11, specialty 592 — with the rendering credential shown by modifier: 97151/97155 U7 for behavior analytic, unmodified for BC-ABA; 97152/97153 U8 for assistant BC-ABA, unmodified for BHT-ABA. All providers must register their NPI with DHS.',
        status: 'verified',
        cites: [
          { title: 'Carelon Pennsylvania HealthChoices Covered Services Grid (PV 07/22/2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Carelon-Pennsylvania-HealthChoices-Covered-Services-Grid-PV-07222026.xlsx' },
          { title: 'Carelon Health of PA Provider Manual — 4: National Provider Identifier (NPI)', url: 'https://providers.pa.carelon.com/providers/provider-manual/4-national-provider-identifier-npi/' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21 — CN.48 defines the IBHS population as children (under 14), youth (14–17) and young adults (18 to under 21). No minimum age.',
        status: 'verified',
        cites: [
          { title: 'Carelon Health of PA Policy CN.48 — Intensive Behavioral Health Services (DHS approved 9/26/2024)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/CN-48-IBHS-Beacon-Policy-and-Procedure.pdf' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
        ],
      },
      dxRecency: {
        value: 'What must be current is the written order: written within 12 months of initiation (the first day of assessment at the provider) and valid for twelve months "from the date that it was written and signed by the order writer" (CN.48).',
        status: 'verified',
        cites: [
          { title: 'Carelon Health of PA Policy CN.48 — Intensive Behavioral Health Services (DHS approved 9/26/2024)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/CN-48-IBHS-Beacon-Policy-and-Procedure.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'The written order must come from a licensed practitioner with an active PROMISe ID in Pennsylvania (CN.48); Carelon’s packet checklist lists MD, CRNP, PA, licensed psychologist, LPC, LCSW and LMFT as order writers.',
        status: 'verified',
        cites: [
          { title: 'Carelon Health of PA Policy CN.48 — Intensive Behavioral Health Services (DHS approved 9/26/2024)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/CN-48-IBHS-Beacon-Policy-and-Procedure.pdf' },
          { title: 'Carelon Health of PA — IBHS Packet Documentation Checklist', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/IBHS-Packet-Documentation-Checklist.docx' },
        ],
      },
      diagnosticTools: {
        value: 'No named instrument is required behind the diagnosis. CN.48 asks for "Any contractually required or appropriate assessment tool results" in the packet, giving CANS, Child Behavior Checklist, BASC and CAFAS as examples.',
        status: 'verified',
        cites: [
          { title: 'Carelon Health of PA Policy CN.48 — Intensive Behavioral Health Services (DHS approved 9/26/2024)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/CN-48-IBHS-Beacon-Policy-and-Procedure.pdf' },
        ],
      },
      referral: {
        value: 'A written order is required. In-network order writers submit it to Carelon and the county through ProviderConnect within 7 business days of the face-to-face; Carelon and the county contact the family within 7 business days to link them with a provider, and the order goes to the family’s chosen provider within 2 business days. A provider that cannot fulfil the order must tell the family within 2 business days.',
        status: 'verified',
        cites: [
          { title: 'Carelon Health of PA Policy CN.48 — Intensive Behavioral Health Services (DHS approved 9/26/2024)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/CN-48-IBHS-Beacon-Policy-and-Procedure.pdf' },
        ],
      },
      telehealth: {
        value: 'Allowed under OMHSAS-22-02. Carelon discontinued the GT modifier; telehealth is identified "only by Place of Service": POS 10 in the patient’s home, POS 02 elsewhere (Alert 03.26.01, Jan. 2026). The covered-services grid lists 97151, 97153, 97155 and 97156 on POS 02/10, including FQ-modified lines for audio-only.',
        status: 'verified',
        cites: [
          { title: 'Carelon Health of PA Provider Alert 03.26.01 — Telehealth Billing Update: Discontinuation of GT Modifier (Jan. 22, 2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/PA-03.26.01-Telehealth-Billing-Update-Dis-of-GT-Modifier.pdf' },
          { title: 'Carelon Pennsylvania HealthChoices Covered Services Grid (PV 07/22/2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Carelon-Pennsylvania-HealthChoices-Covered-Services-Grid-PV-07222026.xlsx' },
        ],
      },
      authTurnaround: {
        value: 'Carelon’s own documents vary: CN.48 says care managers review IBHS requests "within five (5) business days of receipt", and its provider manual says Carelon has "seven (7) calendar days to enter a provider’s authorization". The DHS HealthChoices Appendix AA that binds every BH-MCO is tighter — verbal decision within 2 business days (prospective) or 1 business day (concurrent) of complete information, additional information requested within 48 hours with 14 days to respond, and automatic approval if the member has no written decision within 21 days. Federal floor: 7 calendar days standard / 72 hours expedited (42 CFR 438.210(d)). Continued-stay requests are due at least 10 business days before expiry; retro requests within 45 calendar days of service.',
        status: 'verified',
        cites: [
          { title: 'Carelon Health of PA Policy CN.48 — Intensive Behavioral Health Services (DHS approved 9/26/2024)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/CN-48-IBHS-Beacon-Policy-and-Procedure.pdf' },
          { title: 'Carelon Health of PA Provider Manual — 3: Requests for Authorizations/Retro-authorizations', url: 'https://providers.pa.carelon.com/providers/provider-manual/3-requests-for-authorizationsretro-authorizations/' },
          { title: 'DHS HealthChoices BH Program Standards and Requirements, Appendix AA — Prior Authorization Requirements (Jan. 1, 2026)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Appendix-AA-Prior-Authorization-Requirements.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Carelon is the payer of last resort: exhaust other coverage, attach the primary’s EOB with denial reason, file within 90 days of the EOB, and obtain the primary’s own authorization when required. Carelon "is not permitted to pay" if the provider does not participate with the primary. The authorization request (with the Act 62 cover sheet) still goes to Carelon when commercial is primary: for Act 62 cases Carelon issues an acknowledgement that services are covered under Act 62 and reviews medical necessity once the primary benefit is met, and no Carelon authorization is needed when billing only copays, coinsurance or deductibles. Proof of no autism coverage goes to the Claims Liaison Team (EOB, determination letter, or employer letter). TRICARE pays ahead of Medicaid (10 U.S.C. 1079(i)(1)).',
        status: 'verified',
        cites: [
          { title: 'Carelon Health of PA — Act 62 Frequently Asked Questions', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/ACT-62-Frequently-Asked-Questions.pdf' },
          { title: 'Carelon Health of PA Provider Manual — 6: Third Party Liability (TPL)', url: 'https://providers.pa.carelon.com/providers/provider-manual/6-third-party-liability-tpl/' },
          { title: 'Carelon Health of PA — A Guide to Third Party Liability', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/Third-Party-Liability-Guide.pdf' },
          { title: 'Carelon Health of PA — Autism Coverage: Acceptable Benefit Verification Information', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/79/ACT-62-Autism-Coverage-Acceptable-Benefit-Verification-Information.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
        ],
      },
    },
  },

  'highmark-pennsylvania': {
    slug: 'highmark-pennsylvania',
    family: 'bcbs',
    cardDesc: 'Medical Policy V-37 (ASD/ABA) + all ABA codes on the prior-auth list since March 1, 2026, managed in-house by Highmark Behavioral Health.',
    assessmentPA: {
      value: 'Required. The ABA assessment codes 97151, 97152 and 0362T went onto Highmark’s prior authorization list on March 1, 2026. The current list (effective 09/01/2026) names them under UM program “Highmark Behavioral Health”. Highmark says the codes “usually require authorization (based on the member’s benefit plan/eligibility)”, so check the member’s plan in Availity.',
      status: 'verified',
      cites: [
        { title: 'Highmark — List of Procedures/DME Requiring Authorization (Commercial/MA, eff. 09/01/2026)', url: 'https://providers.highmark.com/content/dam/highmark/en/providerresourcecenter/pdfs/procedurecode/commercial/Proc-Requiring-Auth-list.pdf' },
        { title: 'Highmark — Behavioral Health: Upcoming Prior Authorization Changes (published Nov 24, 2025; eff. March 1, 2026)', url: 'https://providers.highmark.com/communications-hub/news-and-updates/behavioral-health-upcoming-prior-authorization-changes.html' },
      ],
    },
    treatmentPA: {
      value: 'Required. 97153, 97154, 97155, 97156, 97157, 97158 and 0373T (plus H0032 and H2019, listed under the same ABA category) are on the authorization list, managed by Highmark Behavioral Health. None is marked Gold Card Eligible. Requests go through Availity. Under Act 62, Highmark may review the treatment plan once every six months unless a different interval is agreed.',
      status: 'verified',
      cites: [
        { title: 'Highmark — List of Procedures/DME Requiring Authorization (Commercial/MA, eff. 09/01/2026)', url: 'https://providers.highmark.com/content/dam/highmark/en/providerresourcecenter/pdfs/procedurecode/commercial/Proc-Requiring-Auth-list.pdf' },
        { title: 'Highmark — Obtaining Authorizations (last updated Sept 1, 2026)', url: 'https://providers.highmark.com/authorization/obtaining-authorizations' },
        { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
      ],
    },
    dxRequired: {
      value: 'Yes. ABA is medically necessary only for “a confirmed diagnosis of autism spectrum disorder (ASD) as defined by” DSM-5 criteria. ABA that does not meet the V-37 criteria is considered not medically necessary.',
      status: 'verified',
      cites: [
        { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
      ],
    },
    payer: 'Highmark Blue Cross Blue Shield in Pennsylvania',
    state: 'PA', kind: 'commercial',
    pill: 'Payer Guide · Highmark · Pennsylvania',
    h1: 'Highmark ABA coverage in Pennsylvania: the intake guide.',
    metaTitle: 'Highmark ABA Coverage in Pennsylvania: Prior Auth & Act 62 Guide | Carelu',
    metaDescription:
      'How Highmark Blue Cross Blue Shield and Highmark Blue Shield cover ABA in Pennsylvania: Medical Policy V-37, the March 2026 prior-auth list, the Act 62 mandate, telehealth rules, the Oct 2026 97153 rate, and what intake should verify.',
    intro: [
      'Highmark is the Blue plan for most of Pennsylvania. It is Highmark Blue Cross Blue Shield in 29 western and 13 northeastern counties, and Highmark Blue Shield in the 21 central counties. In central PA, Capital Blue Cross is the Blue Cross plan for the same counties. In southeastern PA, Highmark Blue Shield works with a separate plan under a joint operating agreement. For ABA, three documents do most of the work: Medical Policy V-37 (autism spectrum disorders), the prior authorization list (every ABA code since March 1, 2026), and Pennsylvania’s Act 62 autism mandate for the plans it covers.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for a DSM-5 ASD diagnosis under Medical Policy V-37. Act 62 plans (fully insured large groups, CHIP) must cover it; other plans cover it per the benefit contract.' },
      { label: 'State mandate', value: 'Act 62 of 2008 — Insurance Company Law § 635.2 (40 P.S. § 764h)' },
      { label: 'Mandate age', value: 'Under 21 — diagnostic assessment and treatment of ASD, including ABA' },
      { label: 'Mandate caps', value: 'Statutory annual max $51,908 (policies issued/renewed 2026; $53,310 in 2027), no visit limits — but PID treats autism as a mental health condition under MHPAEA and expects the cap to have no impact on coverage' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; individual and small-group (50 or fewer employees) policies; accident-only, fixed-indemnity, limited-benefit and other excepted policies' },
      { label: 'Licensure', value: 'No behavior-analyst license in PA; the State Board of Medicine licenses Behavior Specialists (Act 62 § 635.2(g); 49 Pa. Code §§ 18.521ff.)' },
      { label: 'Prior auth', value: 'All ABA codes (97151–97158, 0362T, 0373T) since March 1, 2026, through Highmark Behavioral Health in Availity' },
      { label: 'BH management', value: 'In-house: the authorization list names “Highmark Behavioral Health” as the UM program for ABA. No outside vendor is listed.' },
    ],
    sections: [
      {
        h2: 'Medical Policy V-37: what Highmark requires for ABA',
        body: [
          'Highmark’s Pennsylvania commercial policy V-37-044 (effective August 4, 2025) covers ABA when every criterion is met. The child has a DSM-5 ASD diagnosis. A qualified behavior analyst used a standardized assessment to find impairment in social communication and interaction, restricted or repetitive behavior, or activities of daily living. A state-licensed physician (MD/DO) or an independently licensed psychologist wrote an individualized treatment plan with measurable goals and outcomes. The services are delivered by a BCBA, a licensed behavior analyst, a BCaBA supervised by a BCBA, an RBT supervised by a BCBA or BCaBA, or an equivalent licensed or certified professional.',
          'Covered interventions include functional behavioral analysis, one-on-one and group sessions, and team conferences. Parent or caregiver training is covered when it ties to treatment goals and a BCBA, LBA or equivalent licensed professional delivers it. ABA cannot replace what the setting is responsible for (for example, a classroom aide or respite). Services that are only respite or custodial are not covered. The policy applies to “all commercial lines of insured business and, if elected, ASO”, so a self-funded employer chooses whether it applies.',
        ],
        cites: [
          { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
        ],
      },
      {
        h2: 'Prior authorization: every ABA code since March 1, 2026',
        body: [
          'Highmark announced in November 2025 that it would add 19 behavioral health codes to its prior authorization list on March 1, 2026. These include all ten ABA codes: 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T. The list effective 09/01/2026 carries them, plus H0032 and H2019, under “Applied Behavioral Analysis”, with “Highmark Behavioral Health” as the UM program. No ABA code is marked Gold Card Eligible. Submit through Availity Essentials (fax is the backup). Highmark Healthy Kids (CHIP) requests must be submitted electronically through Availity. The list says requirements vary by member plan: check the card number, Availity eligibility, or BlueExchange for out-of-area members.',
        ],
        cites: [
          { title: 'Highmark — Behavioral Health: Upcoming Prior Authorization Changes (published Nov 24, 2025; eff. March 1, 2026)', url: 'https://providers.highmark.com/communications-hub/news-and-updates/behavioral-health-upcoming-prior-authorization-changes.html' },
          { title: 'Highmark — List of Procedures/DME Requiring Authorization (Commercial/MA, eff. 09/01/2026)', url: 'https://providers.highmark.com/content/dam/highmark/en/providerresourcecenter/pdfs/procedurecode/commercial/Proc-Requiring-Auth-list.pdf' },
          { title: 'Highmark — Obtaining Authorizations (last updated Sept 1, 2026)', url: 'https://providers.highmark.com/authorization/obtaining-authorizations' },
        ],
      },
      {
        h2: 'Act 62 inside the Highmark policy',
        body: [
          'V-37 repeats Act 62 almost word for word. The mandate applies to group contracts issued or renewed on or after July 1, 2009 for fully insured employers with 51 or more employees, and to CHIP. The treatment plan must come from a physician or psychologist after a comprehensive evaluation. Highmark may review it once every six months under its utilization review rules, or on another schedule agreed with the plan author. The provider must keep the autism assessment and treatment plan on file. Copays, deductibles and coinsurance apply. Act 62 also holds a diagnostic assessment valid for 12 months and requires insurers to accept MA-enrolled autism service providers in their service area as participating providers. The Insurance Department’s 2026 notice sets the statutory cap at $51,908 for 2026 renewals ($53,310 for 2027). It expects the cap to have no impact on coverage, because autism is treated as a mental health condition under federal parity.',
        ],
        cites: [
          { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
          { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
          { title: 'PA Insurance Department Notice 2023-16 — Autism Spectrum Disorders Coverage and Parity (53 Pa.B. 6983)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol53/53-44/1534.html' },
        ],
      },
      {
        h2: 'Who can bill, telehealth, and documentation',
        body: [
          'Highmark’s eligible-provider policy (Z-27-037, effective October 13, 2025) lists “Behavior health rehabilitation agency providers (solely for the diagnosis or treatment of autism spectrum disorders)” and “Behavior specialist” among eligible professional providers. Highmark also pays for services by state-licensed or state-certified practitioners employed and supervised by an eligible provider.',
          'Telehealth: V-37 allows ABA in person, by secure real-time video and audio, or both. Reimbursement policy RP-046 (version effective September 1, 2026) pays telehealth at parity with in-person care, subject to plan terms. It requires POS 02 (outside the home) or POS 10 (in the home).',
          'Documentation: V-37 requires a parent or caregiver signature for each rendered service, the rendering provider’s name, signature and credential, start and end times that support the units billed, and the setting.',
        ],
        cites: [
          { title: 'Highmark Medical Policy Z-27-037 — Eligible Providers (PA commercial, eff. October 13, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Miscellaneous/Z-27/Z-27-037.html' },
          { title: 'Highmark Reimbursement Policy RP-046 — Telemedicine and Telehealth Services (version eff. Sept 1, 2026)', url: 'https://providers.highmark.com/content/dam/highmark/en/providerresourcecenter/pdfs/claims/reimbursement-policies/rp-046.pdf' },
          { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
        ],
      },
      {
        h2: 'Rates: one published number, the rest negotiated',
        body: [
          'Commercial ABA rates are negotiated in the provider agreement, and Highmark’s fee schedules are behind the Availity login. The exception is CPT 97153. On August 17, 2026 Highmark announced new 97153 reimbursement for applicable commercial products, effective October 16, 2026. For PA PPO it is $16.59 in the office and $15.73 outside the office (97153 is a 15-minute code). Highmark says the change does not alter eligibility, medical necessity criteria, authorization requirements or documentation expectations. Rates for the other ABA codes, and for products other than PPO, are not published.',
        ],
        cites: [
          { title: 'Highmark — Reimbursement Update: CPT 97153 for ABA Therapy in DE, PA and WV (published Aug 17, 2026; eff. Oct 16, 2026)', url: 'https://providers.highmark.com/communications-hub/news-and-updates/reimbursement-update-cpt-code-97153-for-aba-therapy-in-de-pa-wv.html' },
        ],
      },
      {
        h2: 'Highmark Wholecare (Medicaid) does not manage ABA',
        body: [
          'A Highmark Wholecare card is a Medicaid (HealthChoices) physical-health plan, not Highmark commercial coverage. Wholecare’s member handbook says behavioral health services “are provided through behavioral health managed care organizations (BH-MCOs)”, assigned by county. In Pennsylvania Medicaid, ABA is part of Intensive Behavioral Health Services (IBHS), so a Wholecare child’s ABA goes through the county BH-MCO, not Highmark. When a child has Highmark commercial coverage plus Medicaid (often PH-95), Highmark pays first and Medicaid pays second.',
        ],
        cites: [
          { title: 'Highmark Wholecare — 2025 Pennsylvania Medicaid Member Handbook (BH via BH-MCOs)', url: 'https://www.highmark.com/content/dam/digital-marketing/en/highmark/highmarkdotcom/wholecare/wholecare-working-images/documents/pdfs/medicaid/25-medicaid-handbook.pdf' },
          { title: 'PA DHS — Behavioral Health Managed Care Organizations (BH-MCOs) by county', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/bhc/bhc-mcos' },
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
        ],
      },
      {
        h2: 'Licensure in Pennsylvania',
        body: [
          'Pennsylvania has no behavior-analyst license, and the BACB licensure table has no Pennsylvania entry. Under Act 62 § 635.2(g), the State Board of Medicine licenses Behavior Specialists (49 Pa. Code §§ 18.521–18.527), and Highmark’s Z-27 lists “Behavior specialist” as an eligible provider. Highmark’s V-37 separately accepts BCBAs, BCaBAs and RBTs under supervision. Confirm which credential your contract credentials as the rendering provider.',
        ],
        cites: [
          { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' },
          { title: '49 Pa. Code Ch. 18 Subch. N (§§ 18.521–18.527) — Behavior Specialists', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/049/chapter18/chap18toc.html' },
          { title: 'Highmark Medical Policy Z-27-037 — Eligible Providers (PA commercial, eff. October 13, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Miscellaneous/Z-27/Z-27-037.html' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type and group size', desc: 'Fully insured large group (51+) or CHIP means Act 62 applies. Self-funded (ASO), individual or small-group means the benefit contract and whether the ASO elected V-37 decide. Ask for the employer name and read the card.' },
      { title: 'Member ID and card photo', desc: 'Run eligibility and the ABA authorization check in Availity. Out-of-area Blue cards go through BlueExchange.' },
      { title: 'DSM-5 ASD diagnosis report', desc: 'V-37 requires a confirmed DSM-5 ASD diagnosis. Record the evaluator, their credentials and the evaluation date. Act 62 holds an assessment valid for 12 months.' },
      { title: 'Treatment plan author', desc: 'V-37 needs an individualized treatment plan from a state-licensed MD/DO or an independently licensed psychologist. Find that clinician before the first authorization request.' },
      { title: 'Other coverage (Medicaid / PH-95)', desc: 'Many PA children with autism also have Medicaid. Highmark pays first and the BH-MCO pays second, so get Highmark’s authorization even when Medicaid will pick up the balance.' },
      { title: 'Setting and school involvement', desc: 'ABA in school is covered only under V-37’s strict criteria (entirely ABA, not educational). Record where services will happen.' },
    ],
    sources: [
      { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
      { title: 'Highmark — List of Procedures/DME Requiring Authorization (Commercial/MA, eff. 09/01/2026)', url: 'https://providers.highmark.com/content/dam/highmark/en/providerresourcecenter/pdfs/procedurecode/commercial/Proc-Requiring-Auth-list.pdf' },
      { title: 'Highmark — Behavioral Health: Upcoming Prior Authorization Changes (published Nov 24, 2025; eff. March 1, 2026)', url: 'https://providers.highmark.com/communications-hub/news-and-updates/behavioral-health-upcoming-prior-authorization-changes.html' },
      { title: 'Highmark — Obtaining Authorizations (last updated Sept 1, 2026)', url: 'https://providers.highmark.com/authorization/obtaining-authorizations' },
      { title: 'Highmark Medical Policy Z-27-037 — Eligible Providers (PA commercial, eff. October 13, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Miscellaneous/Z-27/Z-27-037.html' },
      { title: 'Highmark Reimbursement Policy RP-046 — Telemedicine and Telehealth Services (version eff. Sept 1, 2026)', url: 'https://providers.highmark.com/content/dam/highmark/en/providerresourcecenter/pdfs/claims/reimbursement-policies/rp-046.pdf' },
      { title: 'Highmark — Reimbursement Update: CPT 97153 for ABA Therapy in DE, PA and WV (published Aug 17, 2026; eff. Oct 16, 2026)', url: 'https://providers.highmark.com/communications-hub/news-and-updates/reimbursement-update-cpt-code-97153-for-aba-therapy-in-de-pa-wv.html' },
      { title: 'Highmark Wholecare — 2025 Pennsylvania Medicaid Member Handbook (BH via BH-MCOs)', url: 'https://www.highmark.com/content/dam/digital-marketing/en/highmark/highmarkdotcom/wholecare/wholecare-working-images/documents/pdfs/medicaid/25-medicaid-handbook.pdf' },
      { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
      { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
      { title: 'PA Insurance Department Notice 2025-02 — Autism coverage CPI-U adjustment (55 Pa.B. 2406)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol55/55-12/408.html' },
      { title: 'PA Insurance Department Notice 2023-16 — Autism Spectrum Disorders Coverage and Parity (53 Pa.B. 6983)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol53/53-44/1534.html' },
      { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: '49 Pa. Code Ch. 18 Subch. N (§§ 18.521–18.527) — Behavior Specialists', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/049/chapter18/chap18toc.html' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'V-37 sets no age limit for ABA. Act 62 requires coverage for members under 21 on plans it reaches: fully insured groups of 51 or more issued or renewed on or after July 1, 2009, and CHIP. V-37 says services beyond traditional medical management are covered for groups, CHIP and Adult Basic members “whose coverage is impacted by the ASD mandate under Act 62; or in accordance with the member’s benefit contract”. So for anyone 21 or older, and for self-funded, individual and small-group plans, the benefit contract decides.',
        status: 'plan-dependent',
        cites: [
          { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
        verifyVia: 'Availity eligibility and benefits on the member ID. Establish fully insured vs. ASO and group size, then read the plan’s ABA/autism benefit and any age term.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'V-37 sets no expiry date on the diagnosis. On Act 62 plans, “the results of a diagnostic assessment of autism spectrum disorder shall be valid for a period of twelve (12) months, unless a licensed physician or licensed psychologist determines an earlier assessment is necessary.” Self-funded and other non-mandate plans have no published rule.',
        status: 'plan-dependent',
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
          { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
        ],
        verifyVia: 'Highmark Behavioral Health, when you submit the Availity request: ask whether an older evaluation is accepted on this plan, especially on self-funded groups.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'V-37 requires a confirmed DSM-5 ASD diagnosis but does not say who must make it. On Act 62 plans, the “diagnostic assessment” is one performed by a licensed physician, licensed physician assistant, licensed psychologist or certified registered nurse practitioner. The treatment plan must come from a state-licensed MD/DO or an independently licensed psychologist.',
        status: 'plan-dependent',
        cites: [
          { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
        verifyVia: 'For non-mandate (self-funded, individual, small-group) plans, ask Highmark Behavioral Health at authorization whether a diagnosis from another type of provider is accepted.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'No instrument is named for the diagnosis. V-37 requires that “a qualified behavior analyst used a standardized assessment” to find impairment in social communication and interaction, restricted or repetitive behavior, or activities of daily living. It names no specific tool.',
        status: 'verified',
        cites: [
          { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
        ],
      },
      referral: {
        value: 'Highmark’s ABA documents require no PCP referral. What they require is an individualized treatment plan developed by a state-licensed physician (MD/DO) or an independently licensed psychologist (V-37), plus prior authorization for every ABA code. Act 62 adds that treatment must be prescribed, ordered or provided by a licensed physician, PA, psychologist, LCSW or CRNP, or provided by (or under the direction of) an autism service provider.',
        status: 'verified',
        cites: [
          { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
          { title: 'Highmark — List of Procedures/DME Requiring Authorization (Commercial/MA, eff. 09/01/2026)', url: 'https://providers.highmark.com/content/dam/highmark/en/providerresourcecenter/pdfs/procedurecode/commercial/Proc-Requiring-Auth-list.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
      },
      telehealth: {
        value: 'Allowed. V-37 lets ABA be delivered in person, “via secure real-time video and audio telehealth/virtual modalities”, or a mix of both. RP-046 (version effective September 1, 2026) pays medically appropriate network telehealth at parity with in-person care, subject to plan terms. Bill POS 02 for services outside the patient’s home and POS 10 for services in the home. Outpatient facility claims also need modifier GT, 93 or 95. RP-046 limits telehealth coverage to interactions “between a licensed clinician and a member/patient” and does not list ABA codes one by one.',
        status: 'verified',
        cites: [
          { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
          { title: 'Highmark Reimbursement Policy RP-046 — Telemedicine and Telehealth Services (version eff. Sept 1, 2026)', url: 'https://providers.highmark.com/content/dam/highmark/en/providerresourcecenter/pdfs/claims/reimbursement-policies/rp-046.pdf' },
        ],
      },
      authTurnaround: {
        value: 'Depends on how the plan is funded. Fully insured plans follow Act 146 (Insurance Company Law § 2155): urgent requests for care not yet started within 72 hours, ongoing urgent care within 24 hours when requested at least 24 hours before it would be reduced or ended, and other requests “within 15 days”. The clock can extend when the insurer promptly flags missing information, and the provider gets at least 45 days to respond. Self-funded ERISA plans follow 29 CFR 2560.503-1: pre-service decisions within 15 days plus one 15-day extension, urgent within 72 hours. Highmark said in November 2025 that its average turnaround for urgent and non-urgent requests had dropped from about five days to about one day. That is an average, not a deadline.',
        status: 'plan-dependent',
        cites: [
          { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: 'Highmark — Behavioral Health: Upcoming Prior Authorization Changes (published Nov 24, 2025; eff. March 1, 2026)', url: 'https://providers.highmark.com/communications-hub/news-and-updates/behavioral-health-upcoming-prior-authorization-changes.html' },
        ],
        verifyVia: 'At benefits verification, ask whether the plan is fully insured (PA-regulated) or self-funded (ERISA). Then confirm in Availity when the reauthorization request is due before the current authorization ends.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Two parents’ plans: no Pennsylvania regulation fixing the birthday rule was found, and no Highmark coordination-of-benefits document was read, so ask Highmark which plan is primary. Medicaid: if the child also has Medical Assistance (often PH-95, which ignores parental income), Highmark pays first. Pennsylvania requires other insurance, naming Blue Cross/Blue Shield, to be used before MA is billed (55 Pa. Code § 1101.64), and providers must bill private insurance before MA for ASD assessment and treatment. MA pays IBHS only when no third party pays (§ 1155.31(e)). Get Highmark’s authorization anyway, because the secondary claim needs Highmark’s decision. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)). CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
          { title: 'PA DHS — Medicaid for Children with Special Needs (PH95)', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/medicaid-children-special-needs-ph95' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: '42 CFR 433.139 — Payment of claims (third-party liability)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
        verifyVia: 'Ask Highmark at benefits verification for the member’s coordination-of-benefits order (including whether a self-funded plan uses the birthday rule), and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'BCaBAs must be supervised by a BCBA. RBTs must be supervised by a BCBA or BCaBA. Other licensed or certified professionals trained in ABA must be independently licensed or “supervised appropriately if required”. Parent training must be delivered by a BCBA, LBA or equivalent independently licensed professional. Highmark publishes no numeric supervision ratio or minimum hours.',
        status: 'verified',
        cites: [
          { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
        ],
      },
      concurrentBilling: {
        value: 'Not addressed. Neither V-37 nor the reimbursement policies read (RP-046) say whether 97153 and 97155 may be billed for the same clock time.',
        status: 'unverified',
        cites: [
          { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
        ],
        verifyVia: 'Highmark Provider Services, or the provider agreement: get a written answer on concurrent 97153/97155 billing.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day ABA unit ceiling is published in V-37. Highmark keeps its Medically Unlikely Edit (MUE) update schedule and fee schedules behind the Availity login, so any daily unit edits could not be read. Authorized units come from the Highmark Behavioral Health authorization.',
        status: 'unverified',
        cites: [
          { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
          { title: 'Highmark — Behavioral Health: Upcoming Prior Authorization Changes (published Nov 24, 2025; eff. March 1, 2026)', url: 'https://providers.highmark.com/communications-hub/news-and-updates/behavioral-health-upcoming-prior-authorization-changes.html' },
        ],
        verifyVia: 'Highmark Provider Resource Center, “Medically Unlikely Edit (MUE) Update Schedule” (Availity login required), and the unit counts on each ABA authorization.',
        blocker: 'document',
      },
      noteSignature: {
        value: 'V-37’s documentation rules require, for each date of service: “a parent or caregiver’s signature for each rendered service”, the rendering provider’s name, signature and credential, the service or code with a written summary (behaviors with measured outcomes, redirections, goal changes, progress), start and end times that support the units billed, and the setting. The record must be available to Highmark on request. V-37 sets no deadline for signing.',
        status: 'verified',
        cites: [
          { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
        ],
      },
      placeOfService: {
        value: 'Home, clinic, or community settings, in person or by telehealth. School only when all three hold: the child has significant behavioral or other challenges that interfere with school performance; direct services in school are entirely ABA; and the activities are not primarily educational or vocational. ABA may not replace a classroom aide, 1:1 teacher, tutor, vocational coach or respite. Services outside a standard setting are subject to medical necessity review. For telehealth, bill POS 02 (outside home) or 10 (home) per RP-046.',
        status: 'verified',
        cites: [
          { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
          { title: 'Highmark Reimbursement Policy RP-046 — Telemedicine and Telehealth Services (version eff. Sept 1, 2026)', url: 'https://providers.highmark.com/content/dam/highmark/en/providerresourcecenter/pdfs/claims/reimbursement-policies/rp-046.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Z-27-037 makes “Behavior health rehabilitation agency providers (solely for the diagnosis or treatment of autism spectrum disorders)”, behavior specialists, psychologists and physicians eligible professional providers. It also pays for services by “state licensed or state certified health care practitioners, who are employed and supervised by eligible professional providers”. RBTs and BCBAs hold national certification, not a PA state license, and Highmark publishes no ABA-specific rule on whose NPI goes in the rendering field. That depends on how your contract credentialed the practice.',
        status: 'plan-dependent',
        cites: [
          { title: 'Highmark Medical Policy Z-27-037 — Eligible Providers (PA commercial, eff. October 13, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Miscellaneous/Z-27/Z-27-037.html' },
          { title: 'Highmark Medical Policy V-37-044 — Autism Spectrum Disorders (PA commercial, eff. August 4, 2025)', url: 'https://securecms.highmark.com/content/medpolicy/en/highmark/pa/commercial/policies/Visits/V-37/V-37-044.html' },
        ],
        verifyVia: 'Highmark Provider Services or your provider agreement / credentialing letter. Confirm whether the agency, the supervising BCBA or behavior specialist, or the technician goes in the rendering-provider field.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Highmark cover ABA therapy in Pennsylvania?', a: 'Yes, for a DSM-5 autism diagnosis under Medical Policy V-37. Fully insured large-group plans (51+ employees) and CHIP must cover it under Act 62 for members under 21. Self-funded, individual and small-group plans cover it per the benefit contract, and self-funded groups choose whether V-37 applies.' },
      { q: 'Does Highmark require prior authorization for ABA?', a: 'Yes. Since March 1, 2026, all ABA codes (97151–97158, 0362T, 0373T) are on Highmark’s prior authorization list, managed by Highmark Behavioral Health. That includes the assessment. Submit through Availity.' },
      { q: 'Does Highmark Wholecare cover ABA?', a: 'No. Highmark Wholecare is a Medicaid physical-health plan. Its handbook says behavioral health services come through the county BH-MCO, which manages ABA (IBHS) for Medicaid children in Pennsylvania.' },
      { q: 'What does Highmark pay for ABA in Pennsylvania?', a: 'Commercial ABA rates are negotiated. One exception is published: from October 16, 2026, CPT 97153 for PA PPO pays $16.59 in the office and $15.73 outside the office. Other codes and products are set by your contract.' },
    ],
  },

  'capital-blue-cross-pennsylvania': {
    slug: 'capital-blue-cross-pennsylvania',
    family: 'bcbs',
    cardDesc: 'Central PA and Lehigh Valley Blue Cross plan: preauthorization for 97151–97158 and 0362T/0373T; ABA was removed from its ASD medical policy in 2023.',
    assessmentPA: {
      value: 'Required for Commercial/CHIP. The Single Source Preauthorization List marks 97151 and 97152 (“Select Outpatient Behavioral Health Services — Applied Behavior Analysis (ABA)”) and 0362T (under “Investigational And Experimental Procedures”, type ABA) as requiring preauthorization for Commercial/CHIP, not for Medicare Advantage. Some self-funded groups set their own preauthorization rules, so check the service code in the provider portal.',
      status: 'verified',
      cites: [
        { title: 'Capital Blue Cross — Single Source Preauthorization List', url: 'https://www.capbluecross.com/wps/portal/cap/provider/resource/single-source-preauthorization' },
      ],
    },
    treatmentPA: {
      value: 'Required. The Provider Manual says “Applied Behavior Analysis treatment services require a preauthorization prior to beginning treatment”, through the Preauthorization application in the Provider Portal, with the plan of care and clinical notes attached. The same documentation goes with concurrent review. 97153–97158 and 0373T are on the Single Source Preauthorization List for Commercial/CHIP. Capital tells providers to use these CPT codes and to stop using H0032, H2014, H2019, H2020, H2021 and H2022 for ABA.',
      status: 'verified',
      cites: [
        { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
        { title: 'Capital Blue Cross — Single Source Preauthorization List', url: 'https://www.capbluecross.com/wps/portal/cap/provider/resource/single-source-preauthorization' },
      ],
    },
    dxRequired: {
      value: 'Yes, an autism diagnosis. The Provider Manual’s ASD claim instructions require ABA to be reported with an “autism related diagnosis”, and it describes Act 62 access as for “ASD diagnosed individuals”. Capital publishes no ABA medical policy. It uses unnamed “industry standard clinical management criteria” for behavioral health, which it gives out by phone.',
      status: 'verified',
      cites: [
        { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
      ],
    },
    payer: 'Capital Blue Cross in Pennsylvania',
    state: 'PA', kind: 'commercial',
    pill: 'Payer Guide · Capital Blue Cross · Pennsylvania',
    h1: 'Capital Blue Cross ABA coverage in Pennsylvania: the intake guide.',
    metaTitle: 'Capital Blue Cross ABA Coverage in Pennsylvania: Prior Auth & Act 62 Guide | Carelu',
    metaDescription:
      'How Capital Blue Cross covers ABA in central Pennsylvania and the Lehigh Valley: preauthorization for every ABA code, the 15-day / 72-hour decision clocks, no published ABA medical policy, the Act 62 mandate, and what intake should verify.',
    intro: [
      'Capital Blue Cross is the Blue Cross plan for the 21 counties of central Pennsylvania and the Lehigh Valley. Highmark Blue Shield covers the same central counties, so check the card carefully. For ABA, Capital is mostly a preauthorization and benefits question. Every ABA code needs preauthorization for Commercial and CHIP members. Its Provider Manual publishes the decision deadlines. The clinical criteria are not public: in 2023 Capital removed ABA from its autism medical policy.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes. The Provider Manual treats ABA as a preauthorized service and applies Act 62 to fully insured groups, CHIP and self-funded groups that opt in. Other plans follow the benefit booklet.' },
      { label: 'State mandate', value: 'Act 62 of 2008 — Insurance Company Law § 635.2 (40 P.S. § 764h)' },
      { label: 'Mandate age', value: 'Under 21 — diagnostic assessment and treatment of ASD, including ABA' },
      { label: 'Mandate caps', value: 'Statutory annual max $51,908 (policies issued/renewed 2026; $53,310 in 2027), no visit limits — but PID treats autism as a mental health condition under MHPAEA and expects the cap to have no impact on coverage' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; individual and small-group (50 or fewer employees) policies; accident-only, fixed-indemnity, limited-benefit and other excepted policies' },
      { label: 'Licensure', value: 'No behavior-analyst license in PA; the State Board of Medicine licenses Behavior Specialists (Act 62 § 635.2(g); 49 Pa. Code §§ 18.521ff.)' },
      { label: 'Prior auth', value: '97151–97158, 0362T, 0373T for Commercial/CHIP, through the Provider Portal preauthorization application' },
      { label: 'Decision clock (commercial)', value: 'Standard 15 calendar days; urgent within 72 hours; missing-information notice within 48 hours (Provider Manual)' },
    ],
    sections: [
      {
        h2: 'Preauthorization for every ABA code',
        body: [
          'The Provider Manual says “Applied Behavior Analysis treatment services require a preauthorization prior to beginning treatment.” Requests go through the Preauthorization application in the Provider Portal with the plan of care, clinical notes and other clinical documents. The same package supports concurrent (continued-stay) review. Capital also offers a standard ABA Progress Report under Provider forms.',
          'The Single Source Preauthorization List marks 97151–97158 as “Select Outpatient Behavioral Health Services — Applied Behavior Analysis (ABA)”. It lists 0362T and 0373T under “Investigational And Experimental Procedures”, also typed ABA. All require preauthorization for Commercial/CHIP and none for Medicare Advantage. Capital tells providers to bill ABA with these CPT codes and no longer with H0032, H2014, H2019, H2020, H2021 or H2022. The manual’s ASD claim-form section still mentions “Level II HCPCS” codes and modifiers. The preauthorization list is the newer instruction, but confirm the billing codes with Provider Services (866.688.2242).',
        ],
        cites: [
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
          { title: 'Capital Blue Cross — Single Source Preauthorization List', url: 'https://www.capbluecross.com/wps/portal/cap/provider/resource/single-source-preauthorization' },
        ],
      },
      {
        h2: 'No published ABA medical policy',
        body: [
          'Capital’s autism medical policy, MP 2.304 “Medical Treatments of Autism Spectrum Disorder” (effective 8/1/2026), no longer covers ABA. Its history notes that in 2023 “ABA and Behavior therapy removed from policy”, and in 2024 it removed “statements related to behavioral health services”. What remains covers diagnostic evaluation and investigational treatments. Its product variations say that for fully insured groups, CHIP, and “self-funded groups that have opted to be subject to Act 62”, the policy applies to the extent Act 62 allows.',
          'For behavioral health, the Provider Manual says Capital uses “industry standard clinical management criteria”, reviewed yearly. Specific criteria are available by calling the clinical management team at 1.800.471.2242. So supervision ratios, hour ranges and setting rules for ABA are not published. They come with the authorization.',
        ],
        cites: [
          { title: 'Capital Blue Cross MP 2.304 — Medical Treatments of Autism Spectrum Disorder (eff. 8/1/2026)', url: 'https://www.capbluecross.com/wps/wcm/connect/prod_nws.capblue.com29556/7a42c571-6d3f-4964-a172-d51c88ae154c/medical-policy-medical-treatments-autism-spectrum-disorders.pdf?MOD=AJPERES&CVID=p-W4w9T' },
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
        ],
      },
      {
        h2: 'Decision deadlines Capital publishes',
        body: [
          'The manual’s utilization-management table names ABA in its outpatient rows. Standard outpatient requests: for Commercial, FEP, Exchange and Managed Care, a missing-information notice within 48 hours and a decision within 15 calendar days. For CHIP, a decision within two business days. Expedited outpatient requests: Commercial, Exchange and Managed Care decide “ASAP but within seventy-two (72) hours”, and CHIP within two business days. Urgent requests on weekends or holidays go to the clinical management line (1.800.471.2242), with a response within 24 hours of the call.',
          'The manual also cites Act 146. If you cannot give electronic access to records, that cannot be the reason a prior-auth request is denied.',
        ],
        cites: [
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
          { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
        ],
      },
      {
        h2: 'The Act 62 layer',
        body: [
          'Act 62 requires fully insured group policies for employers with 51 or more employees, and CHIP, to cover diagnostic assessment and treatment of ASD, including ABA, for members under 21. The treatment plan must come from a licensed physician or psychologist. The insurer may review it once every six months. A diagnostic assessment is valid for 12 months. Capital’s manual states Act 62 in one line, noting that copays, deductibles and coinsurance still apply. The Insurance Department’s 2026 notice sets the statutory cap at $51,908 for 2026 renewals ($53,310 for 2027). It expects the cap to have no impact on coverage, because autism is treated as a mental health condition under federal parity. Self-funded groups are outside Act 62 unless they opt in, and MP 2.304 explicitly allows for that.',
        ],
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
          { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
          { title: 'PA Insurance Department Notice 2023-16 — Autism Spectrum Disorders Coverage and Parity (53 Pa.B. 6983)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol53/53-44/1534.html' },
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
        ],
      },
      {
        h2: 'Behavioral health carve-outs, telehealth and rates',
        body: [
          'Capital manages behavioral health preauthorization itself. The manual names no outside behavioral health vendor for ABA. However, “some employer groups have made alternative arrangements for behavioral health services”, and in that case the member’s ID card shows where behavioral health benefits sit. Read the card before you request authorization.',
          'Telehealth is governed by Network Reimbursement Policy NR-30.026. The manual says it lets any state-licensed provider with telehealth capability deliver covered services billed under Capital’s telehealth code set, and requires written member consent specific to telehealth. NR-30.026 itself was not retrieved (it was last revised effective May 1, 2026), so which ABA codes are payable remotely is unconfirmed.',
          'Rates: Capital publishes no commercial ABA fee schedule. Rates are negotiated in the Provider Agreement.',
        ],
        cites: [
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
          { title: 'Capital Blue Cross — 2026-03-001 Updates and new information (NR-30.026 Telehealth Services revised eff. May 1, 2026)', url: 'https://www.capbluecross.com/wps/portal/cap/provider/news-updates/news-announcements/2026-03-001-updates-new-information' },
        ],
      },
      {
        h2: 'Licensure in Pennsylvania',
        body: [
          'Pennsylvania has no behavior-analyst license, and the BACB licensure table has no Pennsylvania entry. Under Act 62 § 635.2(g), the State Board of Medicine licenses Behavior Specialists (49 Pa. Code §§ 18.521–18.527). Act 62 defines an “autism service provider” as one licensed or certified in Pennsylvania. Capital’s manual requires every rendering practitioner to be credentialed and active in your group before seeing Capital members.',
        ],
        cites: [
          { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' },
          { title: '49 Pa. Code Ch. 18 Subch. N (§§ 18.521–18.527) — Behavior Specialists', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/049/chapter18/chap18toc.html' },
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
        ],
      },
    ],
    collect: [
      { title: 'Which Blue card', desc: 'Capital Blue Cross and Highmark Blue Shield overlap in central PA. Confirm the plan name and prefix on the card before routing the authorization.' },
      { title: 'Funding type and group size', desc: 'Fully insured large group or CHIP means Act 62 applies. A self-funded group may have opted in, and may use its own preauthorization rules or a separate behavioral health carve-out (shown on the ID card).' },
      { title: 'DSM-5 ASD diagnosis report', desc: 'ABA claims must carry an autism-related diagnosis. Record the evaluator, their credentials and the evaluation date (Act 62: valid 12 months).' },
      { title: 'Plan of care and clinical notes', desc: 'Capital wants the plan of care and clinical notes attached to the portal request and to each concurrent review. The ABA Progress Report form is optional.' },
      { title: 'Other coverage (Medicaid / PH-95)', desc: 'Record every other plan. Capital pays before Medical Assistance, and the birthday rule sets the order between two parents’ plans.' },
    ],
    sources: [
      { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
      { title: 'Capital Blue Cross — Single Source Preauthorization List', url: 'https://www.capbluecross.com/wps/portal/cap/provider/resource/single-source-preauthorization' },
      { title: 'Capital Blue Cross MP 2.304 — Medical Treatments of Autism Spectrum Disorder (eff. 8/1/2026)', url: 'https://www.capbluecross.com/wps/wcm/connect/prod_nws.capblue.com29556/7a42c571-6d3f-4964-a172-d51c88ae154c/medical-policy-medical-treatments-autism-spectrum-disorders.pdf?MOD=AJPERES&CVID=p-W4w9T' },
      { title: 'Capital Blue Cross — Medical Policies index', url: 'https://www.capbluecross.com/wps/portal/cap/home/find/medical-policy' },
      { title: 'Capital Blue Cross — 2026-03-001 Updates and new information (NR-30.026 Telehealth Services revised eff. May 1, 2026)', url: 'https://www.capbluecross.com/wps/portal/cap/provider/news-updates/news-announcements/2026-03-001-updates-new-information' },
      { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
      { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
      { title: 'PA Insurance Department Notice 2025-02 — Autism coverage CPI-U adjustment (55 Pa.B. 2406)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol55/55-12/408.html' },
      { title: 'PA Insurance Department Notice 2023-16 — Autism Spectrum Disorders Coverage and Parity (53 Pa.B. 6983)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol53/53-44/1534.html' },
      { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: '49 Pa. Code Ch. 18 Subch. N (§§ 18.521–18.527) — Behavior Specialists', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/049/chapter18/chap18toc.html' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Capital publishes no ABA age limit. On plans Act 62 reaches (fully insured groups of 51 or more, CHIP, and self-funded groups that opted in, per MP 2.304), coverage is required for members under 21. For older members and for non-mandate plans, the benefit booklet decides.',
        status: 'plan-dependent',
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
          { title: 'Capital Blue Cross MP 2.304 — Medical Treatments of Autism Spectrum Disorder (eff. 8/1/2026)', url: 'https://www.capbluecross.com/wps/wcm/connect/prod_nws.capblue.com29556/7a42c571-6d3f-4964-a172-d51c88ae154c/medical-policy-medical-treatments-autism-spectrum-disorders.pdf?MOD=AJPERES&CVID=p-W4w9T' },
        ],
        verifyVia: 'Provider Portal eligibility, or Provider Services 866.688.2242. Ask whether the group is fully insured, CHIP, or self-funded, whether it opted into Act 62, and whether it has an ABA age term.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Capital publishes no recency rule of its own. On Act 62 plans, a diagnostic assessment of ASD is “valid for a period of twelve (12) months, unless a licensed physician or licensed psychologist determines an earlier assessment is necessary.”',
        status: 'plan-dependent',
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
        verifyVia: 'Capital clinical management (1.800.471.2242): ask what diagnostic documentation, and how recent, it expects with the initial ABA preauthorization on this plan.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'MP 2.304 describes a comprehensive diagnostic evaluation that may include “clinical assessment by a qualified professional (e.g., developmental pediatrician, child psychologist, pediatric neurologist)”. These are examples, not a closed list. On Act 62 plans, the diagnostic assessment is performed by a licensed physician, licensed physician assistant, licensed psychologist or certified registered nurse practitioner.',
        status: 'plan-dependent',
        cites: [
          { title: 'Capital Blue Cross MP 2.304 — Medical Treatments of Autism Spectrum Disorder (eff. 8/1/2026)', url: 'https://www.capbluecross.com/wps/wcm/connect/prod_nws.capblue.com29556/7a42c571-6d3f-4964-a172-d51c88ae154c/medical-policy-medical-treatments-autism-spectrum-disorders.pdf?MOD=AJPERES&CVID=p-W4w9T' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
        verifyVia: 'Capital clinical management (1.800.471.2242) for non-mandate plans: ask which diagnosing credentials it accepts for an ABA preauthorization.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'No instrument is required. MP 2.304 says a comprehensive diagnostic evaluation may include “validated diagnostic instruments (e.g., ADOS-2, ADI-R)”, plus developmental and behavioral history with direct observation, speech-language evaluation, and an audiological assessment to rule out hearing deficits. These are listed as options, not requirements.',
        status: 'verified',
        cites: [
          { title: 'Capital Blue Cross MP 2.304 — Medical Treatments of Autism Spectrum Disorder (eff. 8/1/2026)', url: 'https://www.capbluecross.com/wps/wcm/connect/prod_nws.capblue.com29556/7a42c571-6d3f-4964-a172-d51c88ae154c/medical-policy-medical-treatments-autism-spectrum-disorders.pdf?MOD=AJPERES&CVID=p-W4w9T' },
        ],
      },
      referral: {
        value: 'No PCP referral is needed. The manual states that “a referral is not needed for … Behavioral Health Care” from a network provider, even on POS, HMO and CHIP products that otherwise require PCP coordination. The Single Source Preauthorization List classes ABA as a behavioral health service. The gate is preauthorization before treatment starts. On Act 62 plans, treatment follows a plan developed by a licensed physician or psychologist.',
        status: 'verified',
        cites: [
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
          { title: 'Capital Blue Cross — Single Source Preauthorization List', url: 'https://www.capbluecross.com/wps/portal/cap/provider/resource/single-source-preauthorization' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
      },
      telehealth: {
        value: 'Unconfirmed for ABA. The manual says Capital pays eligible telehealth when “a licensed qualified health care professional is furnishing the remote service” by interactive audio and/or video. NR-30.026 lets any state-licensed provider bill the codes in Capital’s telehealth code set. The provider must get written member consent specific to telehealth and keep it on file. Whether 97151–97158 are in that code set, and which POS and modifiers apply, is in NR-30.026, which was not retrieved.',
        status: 'unverified',
        cites: [
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
          { title: 'Capital Blue Cross — 2026-03-001 Updates and new information (NR-30.026 Telehealth Services revised eff. May 1, 2026)', url: 'https://www.capbluecross.com/wps/portal/cap/provider/news-updates/news-announcements/2026-03-001-updates-new-information' },
        ],
        verifyVia: 'Capital Blue Cross Network Reimbursement Policy NR-30.026 Telehealth Services (Provider Portal / provider library): check its code list for 97151–97158, plus the POS and modifier rules.',
        blocker: 'document',
      },
      authTurnaround: {
        value: 'Capital’s manual publishes the deadlines, and ABA appears by name in the outpatient rows. Standard (non-urgent) outpatient PA for Commercial, FEP, Exchange and Managed Care: a missing-information notice “no later than forty-eight (48) hours”, and a decision and written notice within 15 calendar days. CHIP: within two business days. Expedited outpatient PA for Commercial, Exchange and Managed Care: “ASAP but within seventy-two (72) hours”. CHIP expedited: two business days. Urgent requests on weekends or holidays: call 1.800.471.2242, response within 24 hours of the call. Self-funded ERISA groups are also bound by 29 CFR 2560.503-1 (15 days + 15, urgent 72 hours).',
        status: 'verified',
        cites: [
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
          { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Two parents’ plans: Capital’s manual applies the birthday rule to children under 18 when the parents are married or living together. The plan of the parent whose birthday falls earlier in the year pays first; on the same birthday, the plan that has covered the parent longer pays first. If the other plan does not use the birthday rule, the father’s plan is primary (the “Gender Rule”). Joint custody without a court-assigned coverage duty follows the same order. Medicaid: Capital pays before Medical Assistance. PA requires other insurance to be used first (55 Pa. Code § 1101.64), providers must bill private insurance before MA for ASD services, and MA pays IBHS only when no third party pays. Get Capital’s preauthorization even when MA will be secondary. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)). CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
          { title: 'PA DHS — Medicaid for Children with Special Needs (PH95)', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/medicaid-children-special-needs-ph95' },
          { title: '42 CFR 433.139 — Payment of claims (third-party liability)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
        verifyVia: 'Capital Provider Services (866.688.2242) when unsure which plan is primary, as the manual directs. Record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Not published. Capital has no public ABA policy: MP 2.304 dropped ABA in 2023. Behavioral health reviews use unnamed “industry standard clinical management criteria”, so no supervision ratio or credential ladder for technicians is published.',
        status: 'unverified',
        cites: [
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
          { title: 'Capital Blue Cross MP 2.304 — Medical Treatments of Autism Spectrum Disorder (eff. 8/1/2026)', url: 'https://www.capbluecross.com/wps/wcm/connect/prod_nws.capblue.com29556/7a42c571-6d3f-4964-a172-d51c88ae154c/medical-policy-medical-treatments-autism-spectrum-disorders.pdf?MOD=AJPERES&CVID=p-W4w9T' },
        ],
        verifyVia: 'Capital clinical management team (1.800.471.2242), which the manual names as the source of the specific criteria, plus your Provider Agreement.',
        blocker: 'licensed',
      },
      concurrentBilling: {
        value: 'Not addressed in any Capital document read (Provider Manual, MP 2.304, Single Source Preauthorization List).',
        status: 'unverified',
        cites: [
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
        ],
        verifyVia: 'Capital Provider Services (866.688.2242): get a written answer on concurrent 97153/97155 billing.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Capital publishes no ABA unit ceiling. The manual requires claims to report “total units (time-based) for each service”. The authorized units on each preauthorization are the working limit.',
        status: 'unverified',
        cites: [
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
        ],
        verifyVia: 'The approved units on the Capital preauthorization, and Provider Services for any code-level edits.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'No ABA-specific rule. The manual’s general medical-record standard requires every entry to carry “legible author identification, date of service” and credentials, handwritten or authenticated electronic signature. Physician assistants and residents need a supervising physician’s cosignature. Capital does not say whether a caregiver signature or supervisor co-signature is required on ABA session notes.',
        status: 'plan-dependent',
        cites: [
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
        ],
        verifyVia: 'Capital Provider Services or your Provider Agreement. Ask what an ABA session note must carry to survive a records request.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Not published for ABA. The ASD claim instructions require the service location in Block 32 but no document states which settings (home, clinic, school, community) are payable.',
        status: 'unverified',
        cites: [
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
        ],
        verifyVia: 'Capital clinical management at preauthorization. Name the setting in the request and confirm it on the approval.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'The manual’s ASD claim instructions (CMS-1500): put the rendering provider’s NPI in Block 24j, and leave it blank “if the Provider is contracted as a facility”. Put the billing provider’s NPI in Block 33a, with a street address rather than a PO Box in Block 33. Every rendering practitioner must be credentialed and active in your group on the date of service.',
        status: 'verified',
        cites: [
          { title: 'Capital Blue Cross — Provider Manual 2026', url: 'https://www.capbluecross.com/wps/portal/cap/provider/provider-hub/provider-manual/provider-manual' },
        ],
      },
    },
    faq: [
      { q: 'Does Capital Blue Cross cover ABA therapy?', a: 'Yes. ABA is a preauthorized service for Commercial and CHIP members. Fully insured large groups, CHIP and self-funded groups that opted in must cover it under Act 62 for members under 21. Other plans follow the benefit booklet.' },
      { q: 'Does Capital Blue Cross require prior authorization for ABA?', a: 'Yes, before treatment starts. 97151–97158, 0362T and 0373T are on the Single Source Preauthorization List for Commercial/CHIP. Submit through the Provider Portal with the plan of care and clinical notes.' },
      { q: 'How long does Capital take to decide an ABA request?', a: 'For commercial members, the manual allows up to 15 calendar days for a standard request and 72 hours for an expedited one, with a missing-information notice within 48 hours. CHIP requests are decided within two business days.' },
      { q: 'What does Capital Blue Cross pay for ABA?', a: 'Capital publishes no ABA fee schedule. Commercial ABA rates are negotiated in the Provider Agreement.' },
    ],
  },

  'independence-blue-cross-pennsylvania': {
    slug: 'independence-blue-cross-pennsylvania',
    family: 'bcbs',
    cardDesc: 'Southeastern PA Blue plan: ABA policy 14.00.03b, in-house Autism Case Management since April 2026 (Magellan out), precert on all ABA codes.',
    assessmentPA: {
      value: 'Required — 97151, 97152 and 0362T sit on IBX’s commercial precertification list (effective 7/1/2026, "Precertification Performed by: IBX"), and the 2026 ABA Prior Authorization Form carries its own "Assessment request" box. Fax the form to 215-238-2500.',
      status: 'verified',
      cites: [
        { title: 'IBX — Billing Codes (CPT/HCPCS) Associated with Services That Require Precertification (Commercial, effective 07/01/2026)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Services-Requiring-Precertification.aspx' },
        { title: 'IBX — Applied Behavior Analysis Prior Authorization Form (General, 2026)', url: 'https://www.ibx.com/pdfs/resources/for-providers/forms/2026-applied-behavior-analysis-prior-authorization-form-general.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — every ABA code (97151–97158, 0362T, 0373T) is on the commercial precertification list, and the Behavioral Health provider manual (April 2026) lists ABA among services where "Preapproval/Precertification is required". Requests go to the IBX Autism Case Management team on the ABA Prior Authorization Form (fax 215-238-2500), ideally "at least two weeks prior to the start of services". A BCBA Care Manager reviews against InterQual ABA criteria, IBX policy 14.00.03b and the member’s benefit plan; the treatment plan is "reviewed and approved every 6 months". The list applies to all fully insured groups, individual members and "most self-funded groups" — self-funded employers may customize.',
      status: 'verified',
      cites: [
        { title: 'IBX — Billing Codes (CPT/HCPCS) Associated with Services That Require Precertification (Commercial, effective 07/01/2026)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Services-Requiring-Precertification.aspx' },
        { title: 'IBX Provider Manual — Section 8: Behavioral Health (April 2026)', url: 'https://provcomm.ibx.com/pnc-ibc/Manuals/Provider/IBX_Provider_08_Behavioral-Health.pdf' },
        { title: 'IBX Medical Policy 14.00.03b — Applied Behavior Analysis (ABA) for the Treatment of Autism Spectrum Disorder (ASD)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/d805c027-d99b-4e5b-8127-41e3ced25613.aspx' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD only. "A diagnosis of autism is required for ABA benefit eligibility" (provider manual); policy 14.00.03b requires an established DSM-5-TR ASD diagnosis made with validated autism tools and codes ABA to F84.0, F84.2, F84.3, F84.5, F84.8 and F84.9. IBX also warns that the primary diagnosis on the claim must match the ASD diagnosis on the authorization request or the claim may be denied.',
      status: 'verified',
      cites: [
        { title: 'IBX Medical Policy 14.00.03b — Applied Behavior Analysis (ABA) for the Treatment of Autism Spectrum Disorder (ASD)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/d805c027-d99b-4e5b-8127-41e3ced25613.aspx' },
        { title: 'IBX Provider Manual — Section 8: Behavioral Health (April 2026)', url: 'https://provcomm.ibx.com/pnc-ibc/Manuals/Provider/IBX_Provider_08_Behavioral-Health.pdf' },
        { title: 'IBX Provider News — IBX Autism Case Management connects members to coordinated, whole-person support (26-0088)', url: 'https://provcomm.ibx.com/pnc-ibc/news/Pages/IBX-Autism-Case-Management-connects-members-to-coordinated-whole-person-support.aspx' },
      ],
    },
    payer: 'Independence Blue Cross in Pennsylvania',
    state: 'PA', kind: 'commercial',
    pill: 'Payer Guide · Independence Blue Cross · Pennsylvania',
    h1: 'Independence Blue Cross ABA coverage in Pennsylvania: the intake guide.',
    metaTitle: 'Independence Blue Cross ABA Coverage in PA: Prior Auth & Act 62 Guide | Carelu',
    metaDescription:
      'How Independence Blue Cross (IBX) covers ABA in southeastern Pennsylvania — policy 14.00.03b, the April 2026 move from Magellan to IBX Autism Case Management, precertification, telehealth, Act 62 and what intake should collect.',
    intro: [
      'Independence Blue Cross is the Blue plan for Philadelphia and the four surrounding counties, and for an ABA intake team it changed shape in 2026: on April 1, utilization and case management for ABA moved from Magellan Healthcare to IBX’s own Autism Case Management team. Anything you learned about Magellan’s forms, fax line or criteria for IBX members is now out of date.',
      'This guide stacks the layers in order: IBX’s commercial ABA medical policy (14.00.03b), its precertification list and prior authorization form, its telemedicine claim policy, and Pennsylvania’s Act 62 autism mandate — which binds only some IBX products. Funding type (fully insured large group, individual/small group, or self-funded through Independence Administrators) is the first fact to pin down.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, under IBX medical policy 14.00.03b; extended to PA individual ACA plans from January 1, 2025' },
      { label: 'State mandate', value: 'Act 62 of 2008 — Insurance Company Law § 635.2 (40 P.S. § 764h)' },
      { label: 'Mandate age', value: 'Under 21 — diagnostic assessment and treatment of ASD, including ABA' },
      { label: 'Mandate caps', value: 'Statutory annual max $51,908 (policies issued/renewed 2026; $53,310 in 2027), no visit limits — but PID treats autism as a mental health condition under MHPAEA and expects the cap to have no impact on coverage' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; individual and small-group (50 or fewer employees) policies; accident-only, fixed-indemnity, limited-benefit and other excepted policies' },
      { label: 'Licensure', value: 'No behavior-analyst license in PA; the State Board of Medicine licenses Behavior Specialists (Act 62 § 635.2(g); 49 Pa. Code §§ 18.521ff.)' },
      { label: 'ABA management', value: 'IBX Autism Case Management (in-house since April 1, 2026; previously Magellan) — 1-800-688-1911, fax 215-238-2500' },
      { label: 'Prior auth', value: 'Required for all ABA codes, assessment included (commercial precertification list, eff. 7/1/2026)' },
    ],
    sections: [
      {
        h2: 'Who manages ABA now: IBX, not Magellan',
        body: [
          'Effective April 1, 2026, "all Applied Behavior Analysis (ABA) services for Independence Blue Cross (IBX) and Independence Administrators members will be managed by the IBX Care Management team instead of Magellan Healthcare". Authorizations Magellan issued before that date stand until they run out; any subsequent review goes to IBX on the new ABA Prior Authorization Form. Magellan shut the old ABA fax line on May 1, 2026 — nothing should go to Magellan any more.',
          'The IBX Autism Case Management team has three roles worth knowing by name: Autism Care Navigators (benefit verification, eligibility, authorizations, referrals), Autism Case Managers (complex medical and behavioral coordination) and BCBA Care Managers, who review the authorization requests. Phone 1-800-688-1911 for IBX members and 1-800-778-2119 for Independence Administrators (the self-funded TPA), Monday to Friday 8 a.m. to 6 p.m.',
        ],
        cites: [
          { title: 'IBX Provider News — Attention ABA providers: ABA services are transitioning to IBX on April 1, 2026', url: 'https://provcomm.ibx.com/pnc-ibc/news/Pages/Attention-ABA-providers-ABA-services-are-transitioning-to-IBX-on-April-1-2026.aspx' },
          { title: 'IBX Provider News — Reminder: ABA services transitioned to IBX on April 1, 2026 (26-0101)', url: 'https://provcomm.ibx.com/pnc-ibc/news/Pages/Reminder-ABA-services-transitioned-to-IBX-on-April-1-2026.aspx' },
          { title: 'IBX Provider News Center — Behavioral Health', url: 'https://provcomm.ibx.com/pnc-ibc/Pages/Behavioral-Health.aspx' },
          { title: 'IBX Provider News — IBX Autism Case Management connects members to coordinated, whole-person support (26-0088)', url: 'https://provcomm.ibx.com/pnc-ibc/news/Pages/IBX-Autism-Case-Management-connects-members-to-coordinated-whole-person-support.aspx' },
        ],
      },
      {
        h2: 'The clinical policy: 14.00.03b',
        body: [
          'IBX’s commercial ABA policy is Medical Policy Bulletin 14.00.03b, "Applied Behavior Analysis (ABA) for the Treatment of Autism Spectrum Disorder (ASD)" (version effective 12/29/2025). Initial ABA is covered when all of these are met: an established DSM-5-TR ASD diagnosis made with validated autism tools (ADOS, ADI-R, PEDS or Brigance are the examples); target behaviors or skill deficits at least 1 standard deviation below the mean or posing a significant threat of harm; a developmental assessment (e.g. Vineland, ABAS) within the last 6 months unless state law or the contract allows longer; a functional behavioral assessment by a BCBA or licensed behavior specialist (LBS) with baseline adaptive-functioning data from the last 6 months; an expectation of clinically meaningful improvement in at least two settings; an individualized treatment plan by a qualified health professional that is "reviewed and approved every 6 months"; caregiver commitment; and medical stability.',
          'Continuation turns on measured improvement from baseline, a continuing 1-SD deficit or safety risk, ongoing caregiver participation and gains that would be lost if care were reduced — and "An updated diagnosis must be submitted every 24 months". Discontinuation triggers include no progress across two or more successive authorization periods and caregiver refusal of treatment recommendations. The 12/31/2025 revision named BCBAs and licensed behavior specialists explicitly (replacing "ABA provider") and widened the treatment-plan author to any qualified health professional.',
        ],
        cites: [
          { title: 'IBX Medical Policy 14.00.03b — Applied Behavior Analysis (ABA) for the Treatment of Autism Spectrum Disorder (ASD)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/d805c027-d99b-4e5b-8127-41e3ced25613.aspx' },
        ],
      },
      {
        h2: 'Precertification and the 2026 prior authorization form',
        body: [
          'IBX’s commercial precertification list (effective July 1, 2026) names all ten ABA codes — 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T — with IBX itself performing the review. The list applies to "all fully insured groups, most self-funded groups and all members with individual coverage", with the standing caveat that self-funded employers "may customize their plans with different benefits and preauthorization requirements".',
          'The 2026 ABA Prior Authorization Form asks for the request type (assessment, initial, continued stay, added units, continuation of care), the date and type of the most recent diagnostic evaluation and the evaluator’s credentials, standardized assessment scores (current, previous and baseline), hours by place of service with school hours broken out separately, and the supervising provider (BCBA, BCBA-D, LBS or licensed psychologist). IBX asks for submission at least two weeks before services start; decisions are communicated by telephone and letter, and a request that does not meet criteria goes either back to the provider for discussion or to peer review by a board-certified physician.',
        ],
        cites: [
          { title: 'IBX — Billing Codes (CPT/HCPCS) Associated with Services That Require Precertification (Commercial, effective 07/01/2026)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Services-Requiring-Precertification.aspx' },
          { title: 'IBX — Applied Behavior Analysis Prior Authorization Form (General, 2026)', url: 'https://www.ibx.com/pdfs/resources/for-providers/forms/2026-applied-behavior-analysis-prior-authorization-form-general.pdf' },
          { title: 'IBX Provider Manual — Section 8: Behavioral Health (April 2026)', url: 'https://provcomm.ibx.com/pnc-ibc/Manuals/Provider/IBX_Provider_08_Behavioral-Health.pdf' },
        ],
      },
      {
        h2: 'Act 62: where the Pennsylvania mandate reaches IBX members',
        body: [
          'Pennsylvania’s autism mandate, Act 62 of 2008, requires insured policies issued to groups of 51 or more employees (and CHIP) to cover the diagnostic assessment and treatment of ASD, including ABA, for covered individuals under 21. The statutory annual maximum is CPI-adjusted — $51,908 for policies issued or renewed in 2026 and $53,310 in 2027 — but the Insurance Department treats autism as a mental health condition under federal parity (MHPAEA, adopted in state law by Act 14 of 2010) and expects the cap "is not expected to have any impact on the coverage of autism services". Act 62 lets the insurer review a treatment plan once every six months, and it bars conditioning coverage on an IEP.',
          'What Act 62 does not reach: individual and small-group (50 or fewer) policies and self-funded employer plans. IBX closes part of that gap on its own — from January 1, 2025 it extended ABA to Pennsylvania individual ACA consumers — and its policy says self-funded groups that elect ABA cover it "subject to group’s defined benefits and limitations". Act 62 also requires the insurer to contract with any Medical Assistance-enrolled autism service provider in its service area that accepts its terms, and gives families expedited internal and external review on a denial.',
        ],
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
          { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
          { title: 'PA Insurance Department Notice 2023-16 — Autism Spectrum Disorders Coverage and Parity (53 Pa.B. 6983)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol53/53-44/1534.html' },
          { title: 'IBX Provider News — IBX to expand coverage of applied behavior analysis for the treatment of autism (individual ACA, eff. 1/1/2025)', url: 'https://provcomm.ibx.com/pnc-ibc/news/Pages/IBX-to-expand-coverage-of-applied-behavior-analysis-for-the-treatment-of-autism.aspx' },
        ],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [
          'Pennsylvania has no behavior-analyst licensure law; the State Board of Medicine licenses Behavior Specialists under Act 62. IBX’s own rule is credentialing: master’s and doctoral BCBAs must pass IBX credentialing before contracting, "Only credentialed Providers may bill ABA services as in-network Providers", and a group is in network only if the group is contracted and every master’s- and doctoral-level BCBA in it is individually credentialed. Bachelor’s-level analysts and technicians are not credentialed; they work under the supervision of credentialed practitioners.',
          'IBX does not publish commercial ABA rates — they are negotiated in the provider agreement. The one published payment rule: behavioral health delivered by telemedicine by a participating provider is paid at 100% of the contracted fee schedule (physical health telemedicine is paid at 85%).',
        ],
        cites: [
          { title: 'IBX Provider Manual — Section 8: Behavioral Health (April 2026)', url: 'https://provcomm.ibx.com/pnc-ibc/Manuals/Provider/IBX_Provider_08_Behavioral-Health.pdf' },
          { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'IBX Claim Payment Policy 00.10.41q — Telemedicine Services (effective 1/1/2026)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/dbc419ce-5ff7-4009-8913-a65cb35c75ed.aspx' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured large group (Act 62 applies), individual/small group (IBX covers ABA by its own policy), or self-funded through Independence Administrators (group-defined benefits). The card and the employer answer this.' },
      { title: 'Member ID + card photo', desc: 'IBX and Independence Administrators use different Autism Case Management numbers and different PA forms — the card tells you which.' },
      { title: 'Diagnostic evaluation', desc: 'DSM-5-TR ASD diagnosis, evaluator name and credentials, tools used (ADOS, ADI-R, etc.) and the date — IBX wants an updated diagnosis every 24 months.' },
      { title: 'Recent standardized scores', desc: 'A developmental/adaptive assessment (Vineland, ABAS) and FBA baseline from the last 6 months; the PA form asks for current, previous and baseline scores.' },
      { title: 'Hours by setting', desc: 'Clinic, home, school and community hours listed separately — school hours must be broken out on the form.' },
      { title: 'Caregiver availability', desc: 'IBX expects caregiver-training goals (at least two recommended) and documentation when parents do not participate.' },
      { title: 'Other coverage', desc: 'Medical Assistance (including PH-95), TRICARE or CHAMPVA — IBX pays first ahead of MA, and a missed IBX authorization sinks the secondary claim.' },
    ],
    sources: [
      { title: 'IBX Medical Policy 14.00.03b — Applied Behavior Analysis (ABA) for the Treatment of Autism Spectrum Disorder (ASD)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/d805c027-d99b-4e5b-8127-41e3ced25613.aspx' },
      { title: 'IBX — Billing Codes (CPT/HCPCS) Associated with Services That Require Precertification (Commercial, effective 07/01/2026)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Services-Requiring-Precertification.aspx' },
      { title: 'IBX — Applied Behavior Analysis Prior Authorization Form (General, 2026)', url: 'https://www.ibx.com/pdfs/resources/for-providers/forms/2026-applied-behavior-analysis-prior-authorization-form-general.pdf' },
      { title: 'IBX Provider Manual — Section 8: Behavioral Health (April 2026)', url: 'https://provcomm.ibx.com/pnc-ibc/Manuals/Provider/IBX_Provider_08_Behavioral-Health.pdf' },
      { title: 'IBX Claim Payment Policy 00.10.41q — Telemedicine Services (effective 1/1/2026)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/dbc419ce-5ff7-4009-8913-a65cb35c75ed.aspx' },
      { title: 'IBX Medical Policy 14.00.04 — School-Based Outpatient Behavioral Health Services in a School Setting', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/9b0a5f08-129c-4364-86cf-3dadc612d19b.aspx' },
      { title: 'IBX Provider News — Attention ABA providers: ABA services are transitioning to IBX on April 1, 2026', url: 'https://provcomm.ibx.com/pnc-ibc/news/Pages/Attention-ABA-providers-ABA-services-are-transitioning-to-IBX-on-April-1-2026.aspx' },
      { title: 'IBX Provider News — IBX Autism Case Management connects members to coordinated, whole-person support (26-0088)', url: 'https://provcomm.ibx.com/pnc-ibc/news/Pages/IBX-Autism-Case-Management-connects-members-to-coordinated-whole-person-support.aspx' },
      { title: 'IBX Provider News — IBX to expand coverage of applied behavior analysis for the treatment of autism (individual ACA, eff. 1/1/2025)', url: 'https://provcomm.ibx.com/pnc-ibc/news/Pages/IBX-to-expand-coverage-of-applied-behavior-analysis-for-the-treatment-of-autism.aspx' },
      { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
      { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
      { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
      { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'IBX policy 14.00.03b sets no age limit on ABA. The age term comes from the plan: Act 62 guarantees ASD coverage for covered individuals under 21 on insured large-group (51+) policies and CHIP; IBX extended ABA to Pennsylvania individual ACA plans from January 1, 2025 on its own policy; self-funded groups (Independence Administrators) cover ABA only if the group elected it, "subject to group’s defined benefits and limitations".',
        status: 'plan-dependent',
        cites: [
          { title: 'IBX Medical Policy 14.00.03b — Applied Behavior Analysis (ABA) for the Treatment of Autism Spectrum Disorder (ASD)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/d805c027-d99b-4e5b-8127-41e3ced25613.aspx' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
          { title: 'IBX Provider News — IBX to expand coverage of applied behavior analysis for the treatment of autism (individual ACA, eff. 1/1/2025)', url: 'https://provcomm.ibx.com/pnc-ibc/news/Pages/IBX-to-expand-coverage-of-applied-behavior-analysis-for-the-treatment-of-autism.aspx' },
        ],
        verifyVia: 'Autism Care Navigators (IBX 1-800-688-1911; Independence Administrators 1-800-778-2119) or PEAR PM Eligibility & Benefits — ask the funding type and any age term on the ABA benefit.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'IBX requires "An updated diagnosis must be submitted every 24 months" for continued ABA. Separately, the developmental assessment and the FBA baseline must be from the last 6 months unless state law or the contract allows longer. For Act 62 plans, the statute says diagnostic-assessment results are "valid for a period of twelve (12) months" unless a physician or psychologist decides an earlier assessment is needed.',
        status: 'verified',
        cites: [
          { title: 'IBX Medical Policy 14.00.03b — Applied Behavior Analysis (ABA) for the Treatment of Autism Spectrum Disorder (ASD)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/d805c027-d99b-4e5b-8127-41e3ced25613.aspx' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
      },
      diagnosingProviders: {
        value: 'The 2026 PA form asks whether "a complete diagnostic evaluation" was done "by a Qualified Health Practitioner (QHP)" (e.g. MD, DO, PhD, PsyD, PMHNP), with these specialty boxes: Family Practice, Pediatrics, Developmental Pediatrics, Pediatric Neurology, Psychiatry, Psychologist and Psychiatric Mental Health Nurse Practitioner. For Act 62 plans the statute defines the diagnostic assessment as one performed by a licensed physician, physician assistant, psychologist or certified registered nurse practitioner.',
        status: 'verified',
        cites: [
          { title: 'IBX — Applied Behavior Analysis Prior Authorization Form (General, 2026)', url: 'https://www.ibx.com/pdfs/resources/for-providers/forms/2026-applied-behavior-analysis-prior-authorization-form-general.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
      },
      diagnosticTools: {
        value: 'Policy 14.00.03b requires the ASD diagnosis to use "validated autism assessment tools" — ADOS, ADI-R, PEDS or the Brigance Diagnostic Inventory of Early Development II are its examples. The PA form’s checklist adds ADOS-2, M-CHAT, CARS-2, ASRS, ASQ, STAT, RITA-T and SCQ. On top of the diagnosis: a developmental assessment within 6 months (e.g. Vineland, ABAS), and an FBA with validated tools by a BCBA or licensed behavior specialist; the form also asks for skills-based scores such as VB-MAPP.',
        status: 'verified',
        cites: [
          { title: 'IBX Medical Policy 14.00.03b — Applied Behavior Analysis (ABA) for the Treatment of Autism Spectrum Disorder (ASD)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/d805c027-d99b-4e5b-8127-41e3ced25613.aspx' },
          { title: 'IBX — Applied Behavior Analysis Prior Authorization Form (General, 2026)', url: 'https://www.ibx.com/pdfs/resources/for-providers/forms/2026-applied-behavior-analysis-prior-authorization-form-general.pdf' },
        ],
      },
      referral: {
        value: 'No PCP referral: HMO and in-network POS members "can select any participating IBX HMO/referred (in-network) POS network Provider (Referrals are not required)" for behavioral health — but ABA must be preapproved. The treatment plan must document "Any related professional provider’s orders" and carry the signature of the treating licensed professional (e.g. MD/DO, licensed psychologist). On Act 62 plans, treatment must be identified in a treatment plan developed by a licensed physician or licensed psychologist.',
        status: 'verified',
        cites: [
          { title: 'IBX Provider Manual — Section 8: Behavioral Health (April 2026)', url: 'https://provcomm.ibx.com/pnc-ibc/Manuals/Provider/IBX_Provider_08_Behavioral-Health.pdf' },
          { title: 'IBX Medical Policy 14.00.03b — Applied Behavior Analysis (ABA) for the Treatment of Autism Spectrum Disorder (ASD)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/d805c027-d99b-4e5b-8127-41e3ced25613.aspx' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
      },
      telehealth: {
        value: 'Covered under claim payment policy 00.10.41q (effective 1/1/2026). Earlier versions listed ABA codes as telemedicine-eligible (97153, 97154, 97158 from 7/1/2021; 97151, 97155, 97156, 97157, 0362T and 0373T from 1/1/2023); the 2026 version removed the code lists, saying the codes "will remain eligible". Real-time audio-video, audio-only and store-and-forward are all allowed on a HIPAA-compliant platform; bill modifier FQ, GT, 93, 95 or GQ with POS 02 or 10. Behavioral health delivered by telemedicine by a participating provider is paid at 100% of the contracted fee schedule. 97152 was never on the list. The provider manual says telehealth coverage "may vary among plans".',
        status: 'verified',
        cites: [
          { title: 'IBX Claim Payment Policy 00.10.41q — Telemedicine Services (effective 1/1/2026)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/dbc419ce-5ff7-4009-8913-a65cb35c75ed.aspx' },
          { title: 'IBX Provider Manual — Section 8: Behavioral Health (April 2026)', url: 'https://provcomm.ibx.com/pnc-ibc/Manuals/Provider/IBX_Provider_08_Behavioral-Health.pdf' },
        ],
      },
      authTurnaround: {
        value: 'IBX publishes no ABA-specific turnaround. It asks providers to submit "at least two weeks prior to the start of services". The legal clock depends on funding. Fully insured IBX plans follow Act 146 (Insurance Company Law § 2155): non-urgent prior authorization decided "within 15 days"; urgent requests for care not yet started "as soon as possible, but not more than 72 hours"; an ongoing urgent course requested at least 24 hours before it would be cut, within 24 hours; and peer-to-peer must be offered on denial. Self-funded plans (Independence Administrators) follow ERISA, 29 CFR 2560.503-1: 15 days for pre-service claims plus one 15-day extension, 72 hours for urgent. Policy 14.00.03b re-reviews the treatment plan every 6 months — ask for continued-stay requests before the current authorization ends.',
        status: 'plan-dependent',
        cites: [
          { title: 'IBX Provider Manual — Section 8: Behavioral Health (April 2026)', url: 'https://provcomm.ibx.com/pnc-ibc/Manuals/Provider/IBX_Provider_08_Behavioral-Health.pdf' },
          { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Autism Case Management team (IBX 1-800-688-1911; Independence Administrators 1-800-778-2119) — confirm whether the plan is fully insured or self-funded and how far before the current authorization ends a continued-stay request should be filed.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'If the child also has Pennsylvania Medical Assistance (often PH-95, which disregards parental income), IBX pays first. 55 Pa. Code § 1101.64 requires other insurance to be "utilized before billing the MA Program", and IBHS is not paid when a third party is available (§ 1155.31(e)). DHS tells providers to bill the child’s private insurance before MA for ASD assessment and treatment, so get IBX’s ABA authorization even when MA will be secondary. With TRICARE, TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA "would be the last payer" (38 CFR 17.270). No Pennsylvania rule fixing the order for a child on both parents’ plans was located, and IBX’s ABA documents do not state one — ask IBX which plan is primary.',
        status: 'plan-dependent',
        cites: [
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
          { title: 'PA DHS — Medicaid for Children with Special Needs (PH95)', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/medicaid-children-special-needs-ph95' },
          { title: '42 CFR 433.139 — Payment of claims (third-party liability)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
        verifyVia: 'Autism Care Navigators at benefit verification — ask for the member’s coordination-of-benefits order (and the birthday rule on a self-funded plan), and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'ABA must be "provided by, or supervised by, a BCBA or LBS", and the FBA must be done by a BCBA or licensed behavior specialist. Bachelor’s-level behavior analysts and technicians "function under the supervision of licensed, credentialed Practitioners". The PA form names the supervising provider (BCBA, BCBA-D, LBS or licensed psychologist) and says 0362T/0373T (2:1) require a physician or other qualified health care professional "on site and immediately accessible to the technicians". IBX publishes no numeric supervision ratio.',
        status: 'verified',
        cites: [
          { title: 'IBX Medical Policy 14.00.03b — Applied Behavior Analysis (ABA) for the Treatment of Autism Spectrum Disorder (ASD)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/d805c027-d99b-4e5b-8127-41e3ced25613.aspx' },
          { title: 'IBX Provider Manual — Section 8: Behavioral Health (April 2026)', url: 'https://provcomm.ibx.com/pnc-ibc/Manuals/Provider/IBX_Provider_08_Behavioral-Health.pdf' },
          { title: 'IBX — Applied Behavior Analysis Prior Authorization Form (General, 2026)', url: 'https://www.ibx.com/pdfs/resources/for-providers/forms/2026-applied-behavior-analysis-prior-authorization-form-general.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not addressed. Policy 14.00.03b, the provider manual and the PA form say nothing on billing 97153 and 97155 for the same clock time.',
        status: 'unverified',
        cites: [
          { title: 'IBX Medical Policy 14.00.03b — Applied Behavior Analysis (ABA) for the Treatment of Autism Spectrum Disorder (ASD)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/d805c027-d99b-4e5b-8127-41e3ced25613.aspx' },
        ],
        verifyVia: 'Provider Customer Service 1-800-ASK-BLUE (1-800-275-2583) for billing questions, or the provider agreement — ask whether 97153 and 97155 may overlap in time.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'IBX publishes no per-day or per-week unit ceiling. Hours are authorized per request, and the PA form asks for hours and units per week or month by code and setting. Policy 14.00.03b re-reviews every 6 months and expects services to taper, with discharge when there is no progress over two or more successive authorization periods. On Act 62 plans the $51,908 (2026) statutory cap is, per the Insurance Department, not expected to affect coverage under parity.',
        status: 'verified',
        cites: [
          { title: 'IBX Medical Policy 14.00.03b — Applied Behavior Analysis (ABA) for the Treatment of Autism Spectrum Disorder (ASD)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/d805c027-d99b-4e5b-8127-41e3ced25613.aspx' },
          { title: 'IBX — Applied Behavior Analysis Prior Authorization Form (General, 2026)', url: 'https://www.ibx.com/pdfs/resources/for-providers/forms/2026-applied-behavior-analysis-prior-authorization-form-general.pdf' },
          { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
        ],
      },
      noteSignature: {
        value: 'Policy 14.00.03b lists what every billed date-of-service note must contain: date, specific service, time in each modality, response, ongoing reassessment, objective progress toward goals, plan changes or reasons for no progress, and the "Name and credentials of the treating clinician". The treatment plan itself must carry the signature of the treating licensed professional (e.g. MD/DO, licensed psychologist), and the PA form is signed by the supervisor. The policy sets no deadline for signing session notes.',
        status: 'verified',
        cites: [
          { title: 'IBX Medical Policy 14.00.03b — Applied Behavior Analysis (ABA) for the Treatment of Autism Spectrum Disorder (ASD)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/d805c027-d99b-4e5b-8127-41e3ced25613.aspx' },
          { title: 'IBX — Applied Behavior Analysis Prior Authorization Form (General, 2026)', url: 'https://www.ibx.com/pdfs/resources/for-providers/forms/2026-applied-behavior-analysis-prior-authorization-form-general.pdf' },
        ],
      },
      placeOfService: {
        value: 'The PA form lists Clinic, Home, School, Community and Other, and asks for school hours separately. Policy 14.00.03b warns that ABA "provided in a school/camp setting may not eligible for coverage", and that IEP services "are typically not covered". The school-setting policy 14.00.04 bills school BH services with POS 03 (school) or 99 (school camp) and excludes Pennsylvania IBHS from the benefit contract. The provider manual says treatment settings are "subject to the terms, conditions, and limitations of the Member’s contract". Act 62 separately says coverage cannot be made contingent on coordination with an IEP.',
        status: 'plan-dependent',
        cites: [
          { title: 'IBX — Applied Behavior Analysis Prior Authorization Form (General, 2026)', url: 'https://www.ibx.com/pdfs/resources/for-providers/forms/2026-applied-behavior-analysis-prior-authorization-form-general.pdf' },
          { title: 'IBX Medical Policy 14.00.03b — Applied Behavior Analysis (ABA) for the Treatment of Autism Spectrum Disorder (ASD)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/d805c027-d99b-4e5b-8127-41e3ced25613.aspx' },
          { title: 'IBX Medical Policy 14.00.04 — School-Based Outpatient Behavioral Health Services in a School Setting', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/9b0a5f08-129c-4364-86cf-3dadc612d19b.aspx' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
        verifyVia: 'Autism Care Navigators (1-800-688-1911) — ask whether the member’s contract covers ABA hours in a school or camp setting before requesting them.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: '"Only credentialed Providers may bill ABA services as in-network Providers." A group is in network only when the group is contracted and every master’s- and doctoral-level BCBA in it is individually credentialed by IBX. Bachelor’s-level staff and technicians are not credentialed, so their services bill through the credentialed practitioner or group. Policy 14.00.03b lists the rendering-level modifiers HM, HN, HO and HP (less than bachelor’s, bachelor’s, master’s, doctoral) plus AF, AH, AJ and TD.',
        status: 'verified',
        cites: [
          { title: 'IBX Provider Manual — Section 8: Behavioral Health (April 2026)', url: 'https://provcomm.ibx.com/pnc-ibc/Manuals/Provider/IBX_Provider_08_Behavioral-Health.pdf' },
          { title: 'IBX Medical Policy 14.00.03b — Applied Behavior Analysis (ABA) for the Treatment of Autism Spectrum Disorder (ASD)', url: 'https://medpolicy.ibx.com/ibc/Commercial/Pages/Policy/d805c027-d99b-4e5b-8127-41e3ced25613.aspx' },
        ],
      },
    },
    faq: [
      { q: 'Does Independence Blue Cross cover ABA therapy?', a: 'Yes, for autism spectrum disorder, under medical policy 14.00.03b. Large-group insured plans must cover it under Act 62. IBX added individual ACA plans in 2025 by its own choice, and self-funded employer plans cover it only if the employer elected it.' },
      { q: 'Does IBX still use Magellan for ABA?', a: 'No. From April 1, 2026, IBX’s own Autism Case Management team manages ABA for IBX and Independence Administrators members. Use the 2026 ABA Prior Authorization Form, fax 215-238-2500, call 1-800-688-1911. Magellan’s old ABA fax closed May 1, 2026.' },
      { q: 'Does the ABA assessment need prior authorization with IBX?', a: 'Yes. 97151, 97152 and 0362T are on IBX’s commercial precertification list with every other ABA code, and the PA form has a separate "Assessment request" option.' },
      { q: 'What does IBX pay for ABA?', a: 'Commercial ABA rates are not published; they are negotiated in your IBX provider agreement. The one published rule is that behavioral health delivered by telemedicine is paid at 100% of your contracted fee schedule.' },
    ],
  },

  'upmc-health-plan-pennsylvania': {
    slug: 'upmc-health-plan-pennsylvania',
    family: 'upmc',
    cardDesc: 'Western/central PA provider-owned plan: BH run in-house by UPMC Health Plan BHS with Community Care; no published ABA policy — verify by phone.',
    assessmentPA: {
      value: 'Unconfirmed. UPMC Health Plan publishes no ABA medical policy or ABA code list. Its 524-policy Policies & Procedures Manual has no ABA or autism policy, and the BHS chapter (Chapter L, updated 08-20-25) never mentions ABA. Table L9 says in-network "outpatient treatment for mental health disorders" is "considered for payment without an authorization", but does not say whether ABA counts.',
      status: 'unverified',
      cites: [
        { title: 'UPMC Health Plan — Policies & Procedures Manual (index)', url: 'https://www.upmchealthplan.com/providers/medical/resources/manuals/policies-procedures' },
        { title: 'UPMC Health Plan Provider Manual — Chapter L, Behavioral Health Services (updated 08-20-25)', url: 'https://www.upmchealthplan.com/docs/providers/2025_ProviderManual_L.pdf' },
      ],
      verifyVia: 'UPMC Health Plan BHS, 1-866-441-4185 (24/7), or Provider OnLine → Auth Entry/Inquiry — ask whether 97151/97152 need prior authorization on this member’s commercial plan. Any provider alert or ABA authorization guide should be requested via carelu.com/sources.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Unconfirmed — same gap as the assessment. UPMC Health Plan BHS runs behavioral health authorizations for commercial members through Provider OnLine (network) or 1-866-441-4185 (out of network), but no document read says whether ABA treatment codes need one. An older Act 62 notice asked providers to send autism treatment plans to "Behavioral Health Services, Attn: Autism". That notice cited the retired $36,000 cap and no longer loads from the site.',
      status: 'unverified',
      cites: [
        { title: 'UPMC Health Plan Provider Manual — Chapter L, Behavioral Health Services (updated 08-20-25)', url: 'https://www.upmchealthplan.com/docs/providers/2025_ProviderManual_L.pdf' },
        { title: 'UPMC Health Plan — Autism Treatment Plan (Act 62 notice; archived copy, captured Dec. 2025)', url: 'https://web.archive.org/web/20251228221544/https://www.upmchealthplan.com/docs/providers/Autism_Treatment_Plan.pdf' },
      ],
      verifyVia: 'UPMC Health Plan BHS, 1-866-441-4185 — ask whether ABA (97153–97158) needs prior authorization on this plan, for how long an authorization runs, and where to send the treatment plan.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Depends on the plan. UPMC Health Plan publishes no ABA policy of its own. On Act 62 plans (insured, 51+ employees), the benefit covers diagnostic assessment and treatment of autism spectrum disorder for members under 21, so an ASD diagnosis is the gate. For individual, small-group and self-funded plans, UPMC publishes no ABA diagnosis rule.',
      status: 'plan-dependent',
      cites: [
        { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        { title: 'UPMC Health Plan — Policies & Procedures Manual (index)', url: 'https://www.upmchealthplan.com/providers/medical/resources/manuals/policies-procedures' },
      ],
      verifyVia: 'UPMC Health Plan BHS, 1-866-441-4185 — ask whether ABA is a covered benefit on this plan and which diagnoses qualify.',
      blocker: 'per-case',
    },
    payer: 'UPMC Health Plan in Pennsylvania',
    state: 'PA', kind: 'commercial',
    pill: 'Payer Guide · UPMC Health Plan · Pennsylvania',
    h1: 'UPMC Health Plan ABA coverage in Pennsylvania: the intake guide.',
    metaTitle: 'UPMC Health Plan ABA Coverage in PA: Prior Auth & Act 62 Guide | Carelu',
    metaDescription:
      'How UPMC Health Plan commercial plans handle ABA in Pennsylvania — UPMC Health Plan Behavioral Health Services, what the provider manual does and does not say, telemedicine policy MP.148, coordination of benefits, Act 62, and what to verify by phone.',
    intro: [
      'UPMC Health Plan is the provider-owned insurer of western and central Pennsylvania, and its commercial behavioral health benefit is run in-house by UPMC Health Plan Behavioral Health Services (BHS). Community Care Behavioral Health handles network credentialing and after-hours authorizations. For an ABA intake team the important thing is what UPMC does not publish: its policy manual has no ABA or autism medical policy, and its behavioral health provider chapter never mentions ABA.',
      'This guide is therefore mostly a script for the phone call. It sets out what UPMC’s own documents do settle (telemedicine, coordination of benefits, record-keeping, the BHS authorization channel), what Pennsylvania’s Act 62 guarantees on mandated plans, and exactly what to ask BHS for everything else.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Required on Act 62 plans; UPMC publishes no ABA policy of its own — confirm per plan with UPMC Health Plan BHS' },
      { label: 'State mandate', value: 'Act 62 of 2008 — Insurance Company Law § 635.2 (40 P.S. § 764h)' },
      { label: 'Mandate age', value: 'Under 21 — diagnostic assessment and treatment of ASD, including ABA' },
      { label: 'Mandate caps', value: 'Statutory annual max $51,908 (policies issued/renewed 2026; $53,310 in 2027), no visit limits — but PID treats autism as a mental health condition under MHPAEA and expects the cap to have no impact on coverage' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; individual and small-group (50 or fewer employees) policies; accident-only, fixed-indemnity, limited-benefit and other excepted policies' },
      { label: 'Licensure', value: 'No behavior-analyst license in PA; the State Board of Medicine licenses Behavior Specialists (Act 62 § 635.2(g); 49 Pa. Code §§ 18.521ff.)' },
      { label: 'BH management', value: 'UPMC Health Plan Behavioral Health Services (in-house), 1-866-441-4185, 24/7; Community Care handles credentialing and after-hours authorizations' },
      { label: 'Telehealth', value: 'Policy MP.148 lists 97151–97158, 0362T, 0373T for commercial; audio-video mandatory, POS 02/10' },
    ],
    sections: [
      {
        h2: 'Who manages behavioral health for UPMC commercial members',
        body: [
          'UPMC’s commercial provider manual says it plainly: "Behavioral health and substance use disorder benefits are managed through UPMC Health Plan." Urgent after-hours authorization requests go to Community Care Behavioral Health, and providers reach UPMC Health Plan Behavioral Health Services (BHS) 24/7 at 1-866-441-4185 (members: 1-888-251-0083). Members may self-refer to a behavioral health provider — "Members do not have to obtain a referral from their PCP."',
          'Network providers submit behavioral health authorizations in Provider OnLine (Auth Entry/Inquiry); out-of-network providers call 1-866-441-4185. BHS uses InterQual Behavioral Health criteria for the levels of care it reviews. Community Care runs credentialing and provider relations for the BHS network, and providers keep their practice data current in Community Care’s ePortal. None of this applies to UPMC for You or UPMC Community HealthChoices (Medical Assistance), whose behavioral health is carved out to the county BH-MCO.',
        ],
        cites: [
          { title: 'UPMC Health Plan Provider Manual — Chapter C, UPMC Health Plan Commercial', url: 'https://upmc.widen.net/s/rbn8crtscw/providermanual_c-2022_web' },
          { title: 'UPMC Health Plan Provider Manual — Chapter L, Behavioral Health Services (updated 08-20-25)', url: 'https://www.upmchealthplan.com/docs/providers/2025_ProviderManual_L.pdf' },
          { title: 'UPMC Health Plan Clinical Policy CRM.003 — Clinical Review Criteria (revised 05/26)', url: 'https://upmc.widen.net/content/emaibvbgtc/original/CRM.003.pdf' },
        ],
      },
      {
        h2: 'What UPMC does not publish about ABA',
        body: [
          'We read the full index of UPMC Health Plan’s Policies & Procedures Manual — 524 clinical, medical, prior-authorization and pharmacy policies — and it contains no ABA or autism medical policy. The behavioral health chapter of the provider manual (Chapter L, updated August 2025) has authorization tables for inpatient, residential, partial hospitalization, intensive outpatient and outpatient care, but none for ABA. Its outpatient table says in-network outpatient mental health treatment is "considered for payment without an authorization"; whether UPMC treats ABA as that kind of outpatient care is not stated. The Clinical Review Criteria policy (CRM.003) lists no ABA criteria set either.',
          'The only autism-specific document UPMC has posted is an old Act 62 notice. It told providers to send autism treatment plans to BHS ("Attn: Autism") and described Act 62 with the original $36,000 cap. The Medical Prior Authorization forms page still links it, but the file no longer loads. So for UPMC, prior authorization, hour limits, supervision and billing rules for ABA are questions for BHS, not facts we can cite.',
        ],
        cites: [
          { title: 'UPMC Health Plan — Policies & Procedures Manual (index)', url: 'https://www.upmchealthplan.com/providers/medical/resources/manuals/policies-procedures' },
          { title: 'UPMC Health Plan Provider Manual — Chapter L, Behavioral Health Services (updated 08-20-25)', url: 'https://www.upmchealthplan.com/docs/providers/2025_ProviderManual_L.pdf' },
          { title: 'UPMC Health Plan — Medical Prior Authorization and Physician Forms', url: 'https://www.upmchealthplan.com/providers/medical/resources/forms/medical-pa' },
          { title: 'UPMC Health Plan — Autism Treatment Plan (Act 62 notice; archived copy, captured Dec. 2025)', url: 'https://web.archive.org/web/20251228221544/https://www.upmchealthplan.com/docs/providers/Autism_Treatment_Plan.pdf' },
        ],
      },
      {
        h2: 'Act 62 on UPMC plans',
        body: [
          'On UPMC commercial policies issued to groups of 51 or more employees (and on UPMC for Kids, which is CHIP), Act 62 requires coverage of the diagnostic assessment and treatment of ASD — including ABA — for members under 21. It sets a CPI-adjusted statutory maximum of $51,908 for 2026 policies ($53,310 in 2027), but the Insurance Department expects that cap to have no effect because autism is treated as a mental health condition under MHPAEA. Act 62 lets the insurer review the treatment plan once every six months, keeps diagnostic results valid for 12 months, forbids making coverage depend on an IEP, and requires the insurer to accept any MA-enrolled autism service provider in its service area that agrees to its terms.',
          'Individual, small-group and self-funded employer plans sit outside Act 62. For those, whether ABA is covered at all is a benefit question for BHS.',
        ],
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
          { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
          { title: 'PA Insurance Department Notice 2023-16 — Autism Spectrum Disorders Coverage and Parity (53 Pa.B. 6983)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol53/53-44/1534.html' },
        ],
      },
      {
        h2: 'Telemedicine, records and rates',
        body: [
          'UPMC’s telemedicine policy MP.148 (effective October 2025) covers all commercial lines and lists 0362T, 0373T and 97151 through 97158 among its "Commercial, CHIP and Medicare Codes". For commercial members, audio-video is mandatory: "Audio-only (telephone) sessions will be denied as not medically necessary." Claims must carry POS 02 or 10, the platform must be HIPAA-compliant (Skype and FaceTime are named as not compliant), and the practitioner must be licensed where the patient is located.',
          'Chapter L’s record-keeping standards apply to every BHS network provider: each record carries the patient’s name and ID on every page, the responsible clinician’s name and professional degree, dated entries, progress toward treatment goals, and documentation "as soon as possible after the encounter". Records must be kept at least 10 years. UPMC publishes no commercial ABA rates; they are negotiated in the provider agreement.',
        ],
        cites: [
          { title: 'UPMC Health Plan Medical Policy MP.148 — Telemedicine (effective 10/25)', url: 'https://upmc.widen.net/content/4fbcjl0ork/original/MP.148.pdf' },
          { title: 'UPMC Health Plan Provider Manual — Chapter L, Behavioral Health Services (updated 08-20-25)', url: 'https://www.upmchealthplan.com/docs/providers/2025_ProviderManual_L.pdf' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' },
        ],
      },
    ],
    collect: [
      { title: 'Plan type and funding', desc: 'Employer group size and whether insured or self-funded (Act 62 applies only to insured 51+ groups), or individual/Marketplace. UPMC for You / Community HealthChoices members go to the county BH-MCO, not this guide.' },
      { title: 'Member ID + card photo', desc: 'Needed for the BHS benefit check at 1-866-441-4185 — the only way to learn whether ABA needs authorization on this plan.' },
      { title: 'Diagnostic evaluation', desc: 'ASD diagnosis with date and evaluator credentials — Act 62 treats results as valid for 12 months.' },
      { title: 'Treatment plan author', desc: 'On Act 62 plans the treatment plan must come from a licensed physician or licensed psychologist.' },
      { title: 'Telehealth need', desc: 'If any sessions will be remote, confirm video is possible — UPMC commercial denies audio-only.' },
      { title: 'Other coverage', desc: 'Both parents’ plans (UPMC applies the birthday rule) and any Medical Assistance, which is always secondary to UPMC commercial.' },
    ],
    sources: [
      { title: 'UPMC Health Plan Provider Manual — Chapter L, Behavioral Health Services (updated 08-20-25)', url: 'https://www.upmchealthplan.com/docs/providers/2025_ProviderManual_L.pdf' },
      { title: 'UPMC Health Plan Provider Manual — Chapter C, UPMC Health Plan Commercial', url: 'https://upmc.widen.net/s/rbn8crtscw/providermanual_c-2022_web' },
      { title: 'UPMC Health Plan Provider Manual — Chapter I, Member Administration (updated 07-03-25)', url: 'https://upmc.widen.net/s/mggshqdrrb/providermanual_i-2025_web' },
      { title: 'UPMC Health Plan Provider Manual — Chapter G, Utilization Management (updated 04-03-25)', url: 'https://upmc.widen.net/s/ll69cf5wvp/providermanual_g-2025_web' },
      { title: 'UPMC Health Plan Medical Policy MP.148 — Telemedicine (effective 10/25)', url: 'https://upmc.widen.net/content/4fbcjl0ork/original/MP.148.pdf' },
      { title: 'UPMC Health Plan Clinical Policy CRM.003 — Clinical Review Criteria (revised 05/26)', url: 'https://upmc.widen.net/content/emaibvbgtc/original/CRM.003.pdf' },
      { title: 'UPMC Health Plan — Policies & Procedures Manual (index)', url: 'https://www.upmchealthplan.com/providers/medical/resources/manuals/policies-procedures' },
      { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
      { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
      { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
      { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'UPMC publishes no ABA age rule. On Act 62 plans (insured groups of 51+, and CHIP), ASD assessment and treatment are guaranteed for covered individuals under 21. Individual, small-group and self-funded plans are outside Act 62, and any age term there is set by the plan.',
        status: 'plan-dependent',
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
        verifyVia: 'UPMC Health Plan BHS, 1-866-441-4185 — confirm the plan’s funding type and any age limit on its ABA benefit.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'UPMC publishes no ABA-specific rule on how recent the diagnosis must be. On Act 62 plans the statute makes diagnostic-assessment results "valid for a period of twelve (12) months, unless a licensed physician or licensed psychologist determines an earlier assessment is necessary."',
        status: 'plan-dependent',
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
        verifyVia: 'UPMC Health Plan BHS, 1-866-441-4185 — ask how recent the ASD evaluation must be for an ABA authorization or claim.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'UPMC publishes no ABA-specific list. On Act 62 plans the "diagnostic assessment" is one performed by a licensed physician, licensed physician assistant, licensed psychologist or certified registered nurse practitioner.',
        status: 'plan-dependent',
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
        verifyVia: 'UPMC Health Plan BHS, 1-866-441-4185 — ask which evaluator credentials UPMC accepts behind an ASD diagnosis.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'Not addressed. UPMC publishes no ABA policy naming required diagnostic instruments; BHS reviews use InterQual Behavioral Health criteria, which are proprietary.',
        status: 'unverified',
        cites: [
          { title: 'UPMC Health Plan Provider Manual — Chapter L, Behavioral Health Services (updated 08-20-25)', url: 'https://www.upmchealthplan.com/docs/providers/2025_ProviderManual_L.pdf' },
        ],
        verifyVia: 'UPMC Health Plan BHS, 1-866-441-4185 — ask whether a specific instrument (e.g. ADOS-2) must be documented in the evaluation.',
        blocker: 'per-case',
      },
      referral: {
        value: 'No PCP referral: "Members may self-direct care to a behavioral health provider … Members do not have to obtain a referral from their PCP." On Act 62 plans, treatment must be in a treatment plan developed by a licensed physician or licensed psychologist, and may be prescribed, ordered or provided by a licensed physician, physician assistant, psychologist, LCSW or CRNP.',
        status: 'verified',
        cites: [
          { title: 'UPMC Health Plan Provider Manual — Chapter C, UPMC Health Plan Commercial', url: 'https://upmc.widen.net/s/rbn8crtscw/providermanual_c-2022_web' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
      },
      telehealth: {
        value: 'Policy MP.148 (Telemedicine, effective 10/2025, all commercial lines) lists 0362T, 0373T, 97151, 97152, 97153, 97154, 97155, 97156, 97157 and 97158 among its commercial, CHIP and Medicare codes. Commercial: "Audio-visual sessions are mandatory. Audio-only (telephone) sessions will be denied as not medically necessary." Claims need POS 02 (not at home) or 10 (home) plus the telehealth modifier (95/GT for audio-video). The platform must be HIPAA-compliant, and the practitioner must be licensed where the patient is located. Being on the list does not by itself guarantee coverage.',
        status: 'verified',
        cites: [
          { title: 'UPMC Health Plan Medical Policy MP.148 — Telemedicine (effective 10/25)', url: 'https://upmc.widen.net/content/4fbcjl0ork/original/MP.148.pdf' },
        ],
      },
      authTurnaround: {
        value: 'UPMC publishes no ABA turnaround. Fully insured plans follow Act 146 (Insurance Company Law § 2155): non-urgent prior authorization "within 15 days"; urgent care not yet started "as soon as possible, but not more than 72 hours"; an ongoing urgent course requested at least 24 hours before it would be cut, within 24 hours; peer-to-peer offered on denial (UPMC’s line is 412-454-2765). Self-funded employer plans follow ERISA, 29 CFR 2560.503-1: 15 days for pre-service claims plus one 15-day extension, 72 hours for urgent.',
        status: 'plan-dependent',
        cites: [
          { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: 'UPMC Health Plan — Policies & Procedures Manual (index)', url: 'https://www.upmchealthplan.com/providers/medical/resources/manuals/policies-procedures' },
        ],
        verifyVia: 'UPMC Health Plan BHS, 1-866-441-4185 — confirm fully insured vs. self-funded, whether ABA needs authorization at all, and the lead time for renewals.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'UPMC publishes its own order for commercial members. For a child covered by both parents who are not separated, "The child’s primary insurance carrier is the parent or guardian whose birth date falls earlier in the calendar year" (the birthday rule). For divorced or separated parents: the custodial parent’s plan, then the stepparent’s, then the non-custodial parent’s — unless a court decree says otherwise. With Medical Assistance: "UPMC Health Plan’s commercial insurance is always primary over Medical Assistance", and MA is the payer of last resort. When UPMC commercial is secondary and the primary carrier authorized the service, "UPMC Health Plan authorizations/PCP referrals are not required." Federal rules: TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'verified',
        cites: [
          { title: 'UPMC Health Plan Provider Manual — Chapter I, Member Administration (updated 07-03-25)', url: 'https://upmc.widen.net/s/mggshqdrrb/providermanual_i-2025_web' },
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Not addressed. UPMC publishes no ABA policy, and Chapter L sets no supervision rule for behavior technicians.',
        status: 'unverified',
        cites: [
          { title: 'UPMC Health Plan Provider Manual — Chapter L, Behavioral Health Services (updated 08-20-25)', url: 'https://www.upmchealthplan.com/docs/providers/2025_ProviderManual_L.pdf' },
        ],
        verifyVia: 'UPMC Health Plan BHS / Community Care provider relations (1-888-251-2224) — ask for UPMC’s ABA supervision and credentialing requirements in writing.',
        blocker: 'document',
      },
      concurrentBilling: {
        value: 'Not addressed in any UPMC Health Plan document read — nothing on billing 97153 and 97155 for the same time.',
        status: 'unverified',
        cites: [
          { title: 'UPMC Health Plan — Policies & Procedures Manual (index)', url: 'https://www.upmchealthplan.com/providers/medical/resources/manuals/policies-procedures' },
        ],
        verifyVia: 'UPMC Health Plan BHS claims support or the provider agreement — ask whether overlapping 97153/97155 time is payable.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Not published. UPMC posts no ABA unit or hour ceiling. On Act 62 plans the statutory annual maximum ($51,908 for 2026 policies) is, per the Insurance Department, not expected to affect coverage under parity.',
        status: 'unverified',
        cites: [
          { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
        ],
        verifyVia: 'UPMC Health Plan BHS, 1-866-441-4185 — ask for any unit/hour limit on the ABA benefit for this plan.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Chapter L record-keeping standards apply to every BHS network provider: the patient’s name and ID on each page, "The responsible clinician’s name and professional degree are documented", "All entries are dated", progress toward treatment goals recorded, and documentation "as soon as possible after the encounter". Records are kept at least 10 years. These are general behavioral health standards, not ABA-specific signature rules.',
        status: 'verified',
        cites: [
          { title: 'UPMC Health Plan Provider Manual — Chapter L, Behavioral Health Services (updated 08-20-25)', url: 'https://www.upmchealthplan.com/docs/providers/2025_ProviderManual_L.pdf' },
        ],
      },
      placeOfService: {
        value: 'Not addressed. UPMC publishes nothing on home, school, clinic or community settings for ABA. Act 62 bars making coverage depend on coordination with an IEP, but does not require the insurer to cover a service just because it is in an IEP.',
        status: 'unverified',
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
        verifyVia: 'UPMC Health Plan BHS, 1-866-441-4185 — ask which settings (home, school, clinic, community) the plan pays ABA in.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Not addressed. UPMC Health Plan BHS network participation and credentialing run through Community Care, but no document read says whose NPI an ABA claim goes out under or how technician time is billed.',
        status: 'unverified',
        cites: [
          { title: 'UPMC Health Plan Provider Manual — Chapter L, Behavioral Health Services (updated 08-20-25)', url: 'https://www.upmchealthplan.com/docs/providers/2025_ProviderManual_L.pdf' },
        ],
        verifyVia: 'Community Care provider relations, 1-888-251-2224, or the UPMC Health Plan BHS provider agreement — ask for rendering/billing NPI rules for ABA.',
        blocker: 'document',
      },
    },
    faq: [
      { q: 'Does UPMC Health Plan cover ABA therapy?', a: 'On insured employer plans with 51 or more employees, yes — Act 62 requires coverage of ASD treatment including ABA for members under 21. UPMC publishes no ABA medical policy, so for individual, small-group and self-funded plans confirm the benefit with UPMC Health Plan BHS at 1-866-441-4185.' },
      { q: 'Who manages ABA for UPMC commercial members?', a: 'UPMC Health Plan Behavioral Health Services manages commercial behavioral health in-house. Community Care Behavioral Health handles network credentialing and after-hours authorizations. UPMC for You and Community HealthChoices members get behavioral health from their county BH-MCO instead.' },
      { q: 'Can ABA be delivered by telehealth for UPMC members?', a: 'UPMC’s telemedicine policy MP.148 lists 97151–97158, 0362T and 0373T for commercial members, but audio-video is mandatory — audio-only sessions are denied. Bill with POS 02 or 10.' },
      { q: 'What does UPMC Health Plan pay for ABA?', a: 'UPMC publishes no commercial ABA rates; they are negotiated in your provider agreement.' },
    ],
  },

  'geisinger-health-plan-pennsylvania': {
    slug: 'geisinger-health-plan-pennsylvania',
    family: 'geisinger',
    cardDesc: 'Central/NE PA plan: MP232 applies the 2017 OMHSAS ABA guideline; in-network ABA for autism no longer needs prior authorization.',
    assessmentPA: {
      value: 'Not required in network for autism. Geisinger’s provider forms page says "In-network applied behavioral analysis for autism with a valid diagnosis no longer needs prior authorization". The prior authorization list (updated 8/24/2026) puts ABA codes, 97151 included, on the list only "when billed for any diagnosis except Autism" (effective 7/15/2023). Referrals to non-participating providers still need authorization.',
      status: 'verified',
      cites: [
        { title: 'Geisinger Health Plan — Providers Forms and Resources (behavioral health forms)', url: 'https://www.geisinger.org/health-plan/providers/authorization-forms-and-resources' },
        { title: 'Geisinger Health Plan — Prior authorization list (last updated 8/24/2026)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/PDFs/Provider/PriorAuthList.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Not required in network for ASD. ABA treatment codes (97153–97158, 0362T, 0373T) need prior authorization only for non-autism diagnoses, and non-participating providers need an authorized referral. For Medicare, Commercial, CHIP and most TPA plans, questions go to 888-839-7972. The ABA request form (fax 570-214-3573, or the Cohere portal) is still used where authorization applies. The list notes that requirements are "Contract Dependent", so check self-funded/TPA groups.',
      status: 'verified',
      cites: [
        { title: 'Geisinger Health Plan — Prior authorization list (last updated 8/24/2026)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/PDFs/Provider/PriorAuthList.pdf' },
        { title: 'Geisinger Health Plan — Providers Forms and Resources (behavioral health forms)', url: 'https://www.geisinger.org/health-plan/providers/authorization-forms-and-resources' },
        { title: 'Geisinger Health Plan — Applied Behavioral Analysis (ABA) Request Form', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/PDFs/Provider/NaviNet/Forms/BH_ABA-request-form_dev-092519.pdf' },
      ],
    },
    dxRequired: {
      value: 'An ASD diagnosis is what makes ABA authorization-free: in-network ABA "for autism with a valid diagnosis" needs no prior authorization, while ABA billed for any other diagnosis does. Policy MP232 (Autism Spectrum Disorder – Evaluation and Medical Management) is the plan’s ABA coverage policy.',
      status: 'verified',
      cites: [
        { title: 'Geisinger Health Plan — Providers Forms and Resources (behavioral health forms)', url: 'https://www.geisinger.org/health-plan/providers/authorization-forms-and-resources' },
        { title: 'Geisinger Health Plan — Prior authorization list (last updated 8/24/2026)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/PDFs/Provider/PriorAuthList.pdf' },
        { title: 'Geisinger Health Plan Policy MP232 — Autism Spectrum Disorder: Evaluation and Medical Management (revised 3/26)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/Policy%20PDFs/MP/201-250/MP232%20Autism%20Spectrum%20Disorder%20-%20Evaluation%20and%20Medical%20Management.ashx' },
      ],
    },
    payer: 'Geisinger Health Plan in Pennsylvania',
    state: 'PA', kind: 'commercial',
    pill: 'Payer Guide · Geisinger Health Plan · Pennsylvania',
    h1: 'Geisinger Health Plan ABA coverage in Pennsylvania: the intake guide.',
    metaTitle: 'Geisinger Health Plan ABA Coverage in PA: Prior Auth & Act 62 Guide | Carelu',
    metaDescription:
      'How Geisinger Health Plan covers ABA in Pennsylvania — policy MP232 and the OMHSAS ABA guideline, no prior authorization for in-network autism ABA, the ABA request form, Act 62, and what intake should verify.',
    intro: [
      'Geisinger Health Plan (with Geisinger Quality Options and Geisinger Indemnity) is the integrated health system’s insurer across central and northeastern Pennsylvania. For ABA it is the easiest of the Pennsylvania commercial plans at the front door: in-network ABA for a child with a valid autism diagnosis no longer needs prior authorization.',
      'That changes what intake has to get right. Instead of assembling an authorization packet, confirm three things: the provider is directly contracted and credentialed with GHP, the diagnosis on the claim is autism, and the plan is not a self-funded or TPA group that has kept its own rules. This guide sets out GHP’s policy MP232, its prior authorization list and forms, and the Act 62 mandate underneath.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — policy MP232 (Commercial, ACA, CHIP, Medicaid, Medicare) applies the 2017 OMHSAS ABA medical-necessity guideline' },
      { label: 'State mandate', value: 'Act 62 of 2008 — Insurance Company Law § 635.2 (40 P.S. § 764h)' },
      { label: 'Mandate age', value: 'Under 21 — diagnostic assessment and treatment of ASD, including ABA' },
      { label: 'Mandate caps', value: 'Statutory annual max $51,908 (policies issued/renewed 2026; $53,310 in 2027), no visit limits — but PID treats autism as a mental health condition under MHPAEA and expects the cap to have no impact on coverage' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; individual and small-group (50 or fewer employees) policies; accident-only, fixed-indemnity, limited-benefit and other excepted policies' },
      { label: 'Licensure', value: 'No behavior-analyst license in PA; the State Board of Medicine licenses Behavior Specialists (Act 62 § 635.2(g); 49 Pa. Code §§ 18.521ff.)' },
      { label: 'Prior auth', value: 'None for in-network ABA with a valid autism diagnosis; required for other diagnoses and out of network' },
      { label: 'BH contact', value: 'GHP Behavioral Health Care Connector, 888-839-7972 (Mon–Fri 8–5)' },
    ],
    sections: [
      {
        h2: 'The coverage policy: MP232',
        body: [
          'Geisinger’s ABA coverage lives in medical policy MP232, "Autism Spectrum Disorder – Evaluation and Medical Management", which applies to Commercial, ACA, CHIP, Medicaid and Medicare lines. The policy says it "is consistent with Pennsylvania state mandated coverage for autism spectrum disorder" and that some provisions "may apply only to those contracts subject to PA Act 62." For ABA it says one thing: "Criteria for coverage will be in accordance with the OMHSAS Bulletin Medical Necessity Guideline for ABA using BSC-ASD & TSS Services for Children & Adolescents with ASD issued Jan 13th 2017."',
          'MP232 was revised in March 2026 to "revise requirements for parity". The current version no longer contains the treatment-plan documentation checklist or the physician-documentation criteria for PT/OT/speech that the plan’s May 2026 update shows being removed. The 2023 wording that limited ABA to members "eligible for state mandated services" is also not in the current text. The evaluation section lists what GHP treats as medically necessary in an ASD workup for under-21s: screening tools (M-CHAT, SCQ, PDDST-II and others), standardized diagnostic tools (CARS, ADI-R, ADOS), targeted genetic and lab testing, and speech, vision and audiology evaluations.',
        ],
        cites: [
          { title: 'Geisinger Health Plan Policy MP232 — Autism Spectrum Disorder: Evaluation and Medical Management (revised 3/26)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/Policy%20PDFs/MP/201-250/MP232%20Autism%20Spectrum%20Disorder%20-%20Evaluation%20and%20Medical%20Management.ashx' },
          { title: 'Geisinger Health Plan — "What’s New" Medical Policy Updates, May 2026 (MP232 revised for parity)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/Policy-PDFs/Whats-New-Updates/Whats-New-May-2026.pdf' },
          { title: 'Geisinger Health Plan — "What’s New" Medical Policy Updates, June 2023 (MP232 ABA criteria)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/Policy-PDFs/Whats-New-Updates/Whats-New-June-2023-MP.pdf' },
        ],
      },
      {
        h2: 'What the OMHSAS guideline asks for',
        body: [
          'The guideline MP232 points to is OMHSAS-17-01, a Medical Assistance bulletin written for the old BSC-ASD/TSS model. For a prior-authorization request it asks for: the most recent face-to-face evaluation or re-evaluation by a board-certified or board-eligible child and adolescent psychiatrist, developmental pediatrician, pediatric neurologist or licensed child psychologist (or, where none is available, a licensed physician or psychologist), "performed not more than 60 days prior to the requested begin date"; a prescription for ABA; and an individualized behavior-based treatment plan.',
          'Now that in-network ASD ABA needs no prior authorization, these documents are what GHP would look for on review or when an authorization does apply (non-ASD diagnosis, out-of-network). How strictly GHP applies the Medical Assistance paperwork parts of the bulletin to a commercial member is not stated. Treat it as a question for the Care Connector team.',
        ],
        cites: [
          { title: 'OMHSAS-17-01 — Reissue of Medical Necessity Guidelines for ABA Using BSC-ASD and TSS Services (Jan. 13, 2017)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/services/mental-health-in-pa/documents/autism/OMHSAS-17-01.pdf' },
          { title: 'Geisinger Health Plan Policy MP232 — Autism Spectrum Disorder: Evaluation and Medical Management (revised 3/26)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/Policy%20PDFs/MP/201-250/MP232%20Autism%20Spectrum%20Disorder%20-%20Evaluation%20and%20Medical%20Management.ashx' },
        ],
      },
      {
        h2: 'Prior authorization, forms and the network',
        body: [
          'GHP’s prior authorization list (updated August 24, 2026) groups ABA with other non-routine behavioral health services and lists 97151–97158, 0362T and 0373T. Its note reads: "Effective 7/15/2023, ABA service will require a Prior Authorization when billed for any diagnosis except Autism." The provider forms page says the same for network providers: "In-network applied behavioral analysis for autism with a valid diagnosis no longer needs prior authorization." Referrals to non-participating providers still need authorization, and the list marks behavioral health requirements as "Contract Dependent". For Medicare, Commercial, CHIP and most TPA plans, the behavioral health number is 888-839-7972.',
          'Where authorization does apply, GHP’s ABA Request Form covers initial assessment, initial treatment and concurrent review. It asks for hours by setting (home, school, facility/clinic, other) and computes units as hours × 4 × 26, which is a 26-week request. Submit by fax to 570-214-3573 or through the Cohere portal. GHP also requires behavioral health providers to "have a direct contract and be credentialed with GHP to see GHP patients." Commercial ABA rates are negotiated and not published.',
        ],
        cites: [
          { title: 'Geisinger Health Plan — Prior authorization list (last updated 8/24/2026)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/PDFs/Provider/PriorAuthList.pdf' },
          { title: 'Geisinger Health Plan — Providers Forms and Resources (behavioral health forms)', url: 'https://www.geisinger.org/health-plan/providers/authorization-forms-and-resources' },
          { title: 'Geisinger Health Plan — Applied Behavioral Analysis (ABA) Request Form', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/PDFs/Provider/NaviNet/Forms/BH_ABA-request-form_dev-092519.pdf' },
          { title: 'Geisinger Health Plan — Behavioral Health Services for Members', url: 'https://www.geisinger.org/health-plan/find/behavioral-health' },
        ],
      },
      {
        h2: 'Act 62 and licensure',
        body: [
          'On Geisinger policies issued to groups of 51 or more employees (and on GHP Kids, which is CHIP), Act 62 guarantees coverage of the diagnostic assessment and treatment of ASD, including ABA, for members under 21. The CPI-adjusted statutory maximum is $51,908 for 2026 ($53,310 in 2027), which the Insurance Department expects to have no effect under parity. Act 62 lets the insurer review a treatment plan every six months and bars making coverage depend on an IEP. Individual, small-group and self-funded plans are outside it.',
          'Pennsylvania has no behavior-analyst licensure law; the State Board of Medicine licenses Behavior Specialists. MP232 separately treats services by unlicensed practitioners, or services that need no license, as unproven. Whether that reaches BCBAs who hold no Pennsylvania license is something to confirm with GHP credentialing.',
        ],
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
          { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
          { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
        ],
      },
    ],
    collect: [
      { title: 'Plan type and funding', desc: 'Geisinger commercial (fully insured vs. self-funded/TPA), Marketplace, GHP Kids (CHIP) or GHP Family (Medicaid — behavioral health goes to the county BH-MCO, not GHP).' },
      { title: 'Member ID + card photo', desc: 'To confirm with the Care Connector team (888-839-7972) that the group follows the no-prior-auth rule for autism ABA.' },
      { title: 'Autism diagnosis', desc: 'A valid ASD diagnosis is what removes the prior-auth requirement — the claim must carry it. Get the report, date and evaluator credentials.' },
      { title: 'Prescription and treatment plan', desc: 'The OMHSAS guideline MP232 cites expects a prescription for ABA and an individualized treatment plan; Act 62 plans need a physician- or psychologist-developed plan.' },
      { title: 'Network status', desc: 'Your practice must be directly contracted and credentialed with GHP; out-of-network ABA still needs authorization.' },
      { title: 'Other coverage', desc: 'Medical Assistance (including PH-95), a second parent’s plan, TRICARE or CHAMPVA.' },
    ],
    sources: [
      { title: 'Geisinger Health Plan Policy MP232 — Autism Spectrum Disorder: Evaluation and Medical Management (revised 3/26)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/Policy%20PDFs/MP/201-250/MP232%20Autism%20Spectrum%20Disorder%20-%20Evaluation%20and%20Medical%20Management.ashx' },
      { title: 'Geisinger Health Plan — Prior authorization list (last updated 8/24/2026)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/PDFs/Provider/PriorAuthList.pdf' },
      { title: 'Geisinger Health Plan — Providers Forms and Resources (behavioral health forms)', url: 'https://www.geisinger.org/health-plan/providers/authorization-forms-and-resources' },
      { title: 'Geisinger Health Plan — Applied Behavioral Analysis (ABA) Request Form', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/PDFs/Provider/NaviNet/Forms/BH_ABA-request-form_dev-092519.pdf' },
      { title: 'Geisinger Health Plan — "What’s New" Medical Policy Updates, May 2026 (MP232 revised for parity)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/Policy-PDFs/Whats-New-Updates/Whats-New-May-2026.pdf' },
      { title: 'OMHSAS-17-01 — Reissue of Medical Necessity Guidelines for ABA Using BSC-ASD and TSS Services (Jan. 13, 2017)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/services/mental-health-in-pa/documents/autism/OMHSAS-17-01.pdf' },
      { title: 'Geisinger Health Plan — Behavioral Health Services for Members', url: 'https://www.geisinger.org/health-plan/find/behavioral-health' },
      { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
      { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
      { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'MP232’s evaluation services are framed for "children and adolescents under age 21", and the OMHSAS guideline it adopts covers ABA for children and adolescents under 21. On Act 62 plans the mandate covers members under 21. GHP publishes no separate age cap for commercial ABA, so an adult or individual/self-funded case depends on the plan.',
        status: 'plan-dependent',
        cites: [
          { title: 'Geisinger Health Plan Policy MP232 — Autism Spectrum Disorder: Evaluation and Medical Management (revised 3/26)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/Policy%20PDFs/MP/201-250/MP232%20Autism%20Spectrum%20Disorder%20-%20Evaluation%20and%20Medical%20Management.ashx' },
          { title: 'OMHSAS-17-01 — Reissue of Medical Necessity Guidelines for ABA Using BSC-ASD and TSS Services (Jan. 13, 2017)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/services/mental-health-in-pa/documents/autism/OMHSAS-17-01.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
        verifyVia: 'GHP Behavioral Health Care Connector, 888-839-7972 — ask whether the plan covers ABA at the member’s age.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'GHP asks only for "a valid diagnosis" for authorization-free in-network ABA and defines no expiry. Where the OMHSAS-17-01 documentation applies (authorized requests), it wants the most recent evaluation or re-evaluation "performed not more than 60 days prior to the requested begin date". On Act 62 plans, diagnostic results are "valid for a period of twelve (12) months" unless a physician or psychologist decides otherwise.',
        status: 'plan-dependent',
        cites: [
          { title: 'Geisinger Health Plan — Providers Forms and Resources (behavioral health forms)', url: 'https://www.geisinger.org/health-plan/providers/authorization-forms-and-resources' },
          { title: 'OMHSAS-17-01 — Reissue of Medical Necessity Guidelines for ABA Using BSC-ASD and TSS Services (Jan. 13, 2017)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/services/mental-health-in-pa/documents/autism/OMHSAS-17-01.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
        verifyVia: 'GHP Behavioral Health Care Connector, 888-839-7972 — ask what makes a diagnosis "valid" (evaluation age, evaluator) for authorization-free ABA.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'GHP names no diagnosing-provider list for commercial ABA. The OMHSAS-17-01 guideline MP232 adopts expects the evaluation from a board-certified or board-eligible child and adolescent psychiatrist, developmental pediatrician, pediatric neurologist or licensed child psychologist (or a licensed physician or psychologist when none is available). Act 62 defines the diagnostic assessment as one by a licensed physician, physician assistant, psychologist or CRNP.',
        status: 'plan-dependent',
        cites: [
          { title: 'OMHSAS-17-01 — Reissue of Medical Necessity Guidelines for ABA Using BSC-ASD and TSS Services (Jan. 13, 2017)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/services/mental-health-in-pa/documents/autism/OMHSAS-17-01.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
        verifyVia: 'GHP Behavioral Health Care Connector, 888-839-7972 — confirm whether a primary-care or nurse-practitioner diagnosis is accepted.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'MP232 lists the ASD workup GHP treats as medically necessary: validated screening (Autism Screening Questionnaire, PDDST-II, CHAT, M-CHAT, SCQ) and standardized diagnostic tools (CARS, ADI-R, ADOS). It does not say a particular instrument must be behind the diagnosis before ABA is paid. The ABA request form lists skills assessments such as VB-MAPP, ABLLS-R, functional behavior assessment and functional analysis under 97151.',
        status: 'plan-dependent',
        cites: [
          { title: 'Geisinger Health Plan Policy MP232 — Autism Spectrum Disorder: Evaluation and Medical Management (revised 3/26)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/Policy%20PDFs/MP/201-250/MP232%20Autism%20Spectrum%20Disorder%20-%20Evaluation%20and%20Medical%20Management.ashx' },
          { title: 'Geisinger Health Plan — Applied Behavioral Analysis (ABA) Request Form', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/PDFs/Provider/NaviNet/Forms/BH_ABA-request-form_dev-092519.pdf' },
        ],
        verifyVia: 'GHP Behavioral Health Care Connector, 888-839-7972 — ask whether a standardized diagnostic instrument must appear in the evaluation.',
        blocker: 'per-case',
      },
      referral: {
        value: 'GHP does not state a referral requirement for in-network autism ABA, which needs no prior authorization. Out-of-network care needs an authorized referral ("Any referral to a nonparticipating provider/facility for nonemergency services", contract dependent). The OMHSAS-17-01 guideline expects "A prescription for ABA" with an authorization request. On Act 62 plans, treatment must be in a treatment plan developed by a licensed physician or licensed psychologist.',
        status: 'plan-dependent',
        cites: [
          { title: 'Geisinger Health Plan — Prior authorization list (last updated 8/24/2026)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/PDFs/Provider/PriorAuthList.pdf' },
          { title: 'OMHSAS-17-01 — Reissue of Medical Necessity Guidelines for ABA Using BSC-ASD and TSS Services (Jan. 13, 2017)', url: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dhs/documents/services/mental-health-in-pa/documents/autism/OMHSAS-17-01.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
        verifyVia: 'GHP Behavioral Health Care Connector, 888-839-7972 — ask whether a physician prescription must be on file for authorization-free ABA.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Not found. GHP’s clinical-policy page loads its list by script and no telemedicine medical or reimbursement policy was retrievable, so which ABA codes GHP pays by telehealth, and with which POS/modifier, is unconfirmed.',
        status: 'unverified',
        cites: [
          { title: 'Geisinger Health Plan — Clinical Policies for Providers', url: 'https://www.geisinger.org/health-plan/providers/ghp-clinical-policies' },
        ],
        verifyVia: 'GHP Behavioral Health Care Connector, 888-839-7972, or GHP provider services — ask for the telehealth billing policy (eligible ABA codes, POS 02/10, modifier); request the policy document via carelu.com/sources.',
        blocker: 'document',
      },
      authTurnaround: {
        value: 'For in-network autism ABA there is no prior authorization, so no clock. Where authorization applies (non-ASD diagnosis, out of network, some TPA groups): fully insured plans follow Act 146 (Insurance Company Law § 2155) — non-urgent "within 15 days", urgent care not yet started within 72 hours, an ongoing urgent course within 24 hours when requested at least 24 hours before it would be cut, and peer-to-peer offered on denial (GHP Medical Management 800-544-3907). Self-funded plans follow ERISA, 29 CFR 2560.503-1: 15 days plus one 15-day extension, 72 hours urgent.',
        status: 'plan-dependent',
        cites: [
          { title: 'Geisinger Health Plan — Providers Forms and Resources (behavioral health forms)', url: 'https://www.geisinger.org/health-plan/providers/authorization-forms-and-resources' },
          { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'GHP Behavioral Health Care Connector, 888-839-7972 — confirm the group follows the no-auth rule; if not, confirm the review turnaround and concurrent-review lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'If the child also has Pennsylvania Medical Assistance (often PH-95, which disregards parental income), GHP commercial pays first. 55 Pa. Code § 1101.64 requires other insurance to be "utilized before billing the MA Program", and IBHS is not paid when a third party is available (§ 1155.31(e)). DHS tells providers to bill the child’s private insurance before MA for ASD assessment and treatment. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA "would be the last payer" (38 CFR 17.270). No Pennsylvania rule fixing the order for a child on both parents’ plans was located, and GHP’s ABA documents do not state one — ask GHP which plan is primary.',
        status: 'plan-dependent',
        cites: [
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
          { title: 'PA DHS — Medicaid for Children with Special Needs (PH95)', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/medicaid-children-special-needs-ph95' },
          { title: '42 CFR 433.139 — Payment of claims (third-party liability)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
        verifyVia: 'GHP customer/provider services at benefit verification — ask for the coordination-of-benefits order (birthday rule for two parents’ plans) and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'GHP’s ABA Request Form (rev. 6/22) describes 97153 as treatment by a technician under the direction of a physician/QHP, "receiving 1 hour of supervision for every 5 to 10 hours of direct treatment". 0362T and 0373T require the physician/QHP to be on site with two or more technicians. MP232 itself sets no supervision ratio.',
        status: 'verified',
        cites: [
          { title: 'Geisinger Health Plan — Applied Behavioral Analysis (ABA) Request Form', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/PDFs/Provider/NaviNet/Forms/BH_ABA-request-form_dev-092519.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not addressed. MP232, the prior authorization list and the ABA request form say nothing on billing 97153 and 97155 for the same time.',
        status: 'unverified',
        cites: [
          { title: 'Geisinger Health Plan Policy MP232 — Autism Spectrum Disorder: Evaluation and Medical Management (revised 3/26)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/Policy%20PDFs/MP/201-250/MP232%20Autism%20Spectrum%20Disorder%20-%20Evaluation%20and%20Medical%20Management.ashx' },
        ],
        verifyVia: 'GHP provider services or the provider agreement — ask whether 97153 and 97155 may be billed for overlapping time.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Not published. GHP posts no per-day or per-week ABA unit ceiling. Where authorization applies, the request form asks for hours and computes units as hours × 4 × 26, a 26-week request. On Act 62 plans the $51,908 (2026) statutory cap is, per the Insurance Department, not expected to affect coverage under parity.',
        status: 'unverified',
        cites: [
          { title: 'Geisinger Health Plan — Applied Behavioral Analysis (ABA) Request Form', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/PDFs/Provider/NaviNet/Forms/BH_ABA-request-form_dev-092519.pdf' },
          { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
        ],
        verifyVia: 'GHP Behavioral Health Care Connector, 888-839-7972 — ask whether the plan applies any unit/hour limit to ABA billed without authorization.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not addressed. The treatment-plan documentation list (including "Signature of the member ordering physician and therapist") was removed from MP232 in the March 2026 parity revision. No current GHP document read says who must sign an ABA session note.',
        status: 'unverified',
        cites: [
          { title: 'Geisinger Health Plan — "What’s New" Medical Policy Updates, May 2026 (MP232 revised for parity)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/Policy-PDFs/Whats-New-Updates/Whats-New-May-2026.pdf' },
          { title: 'Geisinger Health Plan Policy MP232 — Autism Spectrum Disorder: Evaluation and Medical Management (revised 3/26)', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/Policy%20PDFs/MP/201-250/MP232%20Autism%20Spectrum%20Disorder%20-%20Evaluation%20and%20Medical%20Management.ashx' },
        ],
        verifyVia: 'The GHP provider agreement / provider manual documentation section — ask GHP provider services for the behavioral health record standard.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'The ABA Request Form asks for hours by setting — Home, School, Facility/clinic and Other — so GHP will consider requests in those settings. Whether a particular plan pays school-based ABA is contract-specific. Act 62 bars making coverage depend on an IEP but does not require covering a service just because it is in one.',
        status: 'plan-dependent',
        cites: [
          { title: 'Geisinger Health Plan — Applied Behavioral Analysis (ABA) Request Form', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/PDFs/Provider/NaviNet/Forms/BH_ABA-request-form_dev-092519.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
        ],
        verifyVia: 'GHP Behavioral Health Care Connector, 888-839-7972 — ask whether the member’s contract pays ABA in school or community settings.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: '"Behavioral health providers should have a direct contract and be credentialed with GHP to see GHP patients." The ABA request form captures a requesting provider and a servicing provider (each with NPI, TIN and certification/license number). No GHP document read says whose NPI goes in the rendering field for technician-delivered 97153.',
        status: 'plan-dependent',
        cites: [
          { title: 'Geisinger Health Plan — Providers Forms and Resources (behavioral health forms)', url: 'https://www.geisinger.org/health-plan/providers/authorization-forms-and-resources' },
          { title: 'Geisinger Health Plan — Applied Behavioral Analysis (ABA) Request Form', url: 'https://www.geisinger.org/-/media/OneGeisinger/Files/PDFs/Provider/NaviNet/Forms/BH_ABA-request-form_dev-092519.pdf' },
        ],
        verifyVia: 'GHP credentialing / provider services — ask whether technician services bill under the supervising BCBA’s or the group’s NPI.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Geisinger Health Plan require prior authorization for ABA?', a: 'Not in network for autism. GHP says in-network ABA for autism with a valid diagnosis no longer needs prior authorization. ABA billed for any other diagnosis, and out-of-network care, still does. Some self-funded or TPA groups may differ, so confirm at 888-839-7972.' },
      { q: 'What criteria does Geisinger use for ABA?', a: 'Policy MP232 says ABA coverage follows the Pennsylvania OMHSAS Medical Necessity Guideline for ABA (bulletin OMHSAS-17-01, January 13, 2017). It was written for Medical Assistance and asks for a recent evaluation, a prescription and an individualized treatment plan.' },
      { q: 'Does Geisinger cover ABA under Act 62?', a: 'Yes — insured Geisinger groups with 51 or more employees, and GHP Kids (CHIP), must cover ASD assessment and treatment, including ABA, for members under 21. Individual, small-group and self-funded plans fall outside Act 62; MP232 still governs ABA criteria where the benefit exists.' },
      { q: 'What does Geisinger pay for ABA?', a: 'Commercial ABA rates are not published; they are negotiated in your GHP provider agreement.' },
    ],
  },

  'aetna-pennsylvania': {
    slug: 'aetna-pennsylvania',
    family: 'aetna',
    cardDesc: 'Aetna ABA medical necessity guide + CPB 0648/0554 + BH precertification list, layered on Pennsylvania’s Act 62 mandate.',
    assessmentPA: {
      value: 'Required. Aetna’s behavioral health precertification list (eff. 8/1/2024) names all ten ABA codes, assessment codes 97151, 97152 and 0362T included. The provider manual says to precertify ABA by calling the number on the member’s ID card; most requests can also go through Availity.',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna — Behavioral Health Provider Manual (8/22)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' }
      ]
    },
    treatmentPA: {
      value: 'Required. Precertification covers 97153–97158 and 0373T. Aetna’s medical necessity guide says “A member’s progress is to be evaluated every six months”, and on Act 62 plans the insurer may review the treatment plan once every six months unless a different interval is agreed with the plan’s author.',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
      ]
    },
    dxRequired: {
      value: 'Yes. A DSM-5 diagnosis of autism spectrum disorder (ICD-10 F84.0; F84.3–F84.9) from an appropriate provider. CPB 0554 calls ABA experimental, investigational or unproven for Down syndrome without co-occurring ASD, and for all other non-ASD indications.',
      status: 'verified',
      cites: [
        { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }
      ]
    },
    payer: 'Aetna in Pennsylvania',
    state: 'PA',
    kind: 'commercial',
    pill: 'Payer Guide · Aetna · Pennsylvania',
    h1: 'Aetna ABA coverage in Pennsylvania: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Pennsylvania: Prior Auth & Act 62 Guide | Carelu',
    metaDescription: 'How Aetna covers ABA for Pennsylvania families: the national medical necessity guide, precertification on every ABA code, the Act 62 mandate (under 21, 51+ employee groups, CPI-adjusted cap, parity), behavior specialist licensure, and what intake should verify.',
    intro: [
      'For a Pennsylvania intake team, an Aetna card brings three layers. There is Aetna’s national ABA policy set, Pennsylvania’s autism mandate (Act 62 of 2008), and the plan’s size and funding type, which decide whether the mandate binds at all. This guide takes them in that order.'
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per Aetna’s national ABA medical necessity guide; precertification required on all ABA codes' },
      { label: 'State mandate', value: 'Act 62 of 2008 — Insurance Company Law § 635.2 (40 P.S. § 764h)' },
      { label: 'Mandate age', value: 'Under 21 — diagnostic assessment and treatment of ASD, including ABA' },
      { label: 'Mandate caps', value: 'Statutory annual max $51,908 (policies issued/renewed 2026; $53,310 in 2027), no visit limits — but PID treats autism as a mental health condition under MHPAEA and expects the cap to have no impact on coverage' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; individual and small-group (50 or fewer employees) policies; accident-only, fixed-indemnity, limited-benefit and other excepted policies' },
      { label: 'Licensure', value: 'No behavior-analyst license in PA; the State Board of Medicine licenses Behavior Specialists (Act 62 § 635.2(g); 49 Pa. Code §§ 18.521ff.)' }
    ],
    sections: [
      {
        h2: 'The national policy, applied in Pennsylvania',
        body: [
          'Aetna’s ABA rules are national. Its ABA medical necessity guide sets the criteria: a DSM-5 ASD diagnosis, functional impairment on a standardized scale in the past 12 months, a measurable treatment plan, and progress reviewed every six months. CPB 0648 covers the autism evaluation and CPB 0554 calls ABA unproven for non-ASD indications. Aetna’s participating-provider behavioral health precertification list puts every ABA code under precertification, assessment included: 97151–97158, 0362T and 0373T. None of that changes at the Pennsylvania border. What changes is the legal floor underneath it, and whether that floor applies to this family’s plan.'
        ],
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' }
        ]
      },
      {
        h2: 'The Pennsylvania mandate: Act 62, and what it does not reach',
        body: [
          'Pennsylvania’s autism mandate is Act 62 of 2008 (Insurance Company Law § 635.2, 40 P.S. § 764h). For covered individuals “under twenty-one (21) years of age” it requires coverage of the diagnostic assessment of autism spectrum disorder and of its treatment, and treatment includes rehabilitative care such as applied behavior analysis identified in a treatment plan. Coverage is subject to the plan’s copays, deductibles and coinsurance like any other medical service. A plan does not have to cover a service solely because it appears in an IEP, but coverage “shall not be contingent upon a coordination of services with an individualized education program”.',
          'Reach is the part intake gets wrong. Act 62 applies to health insurance policies offered, issued or renewed on or after July 1, 2009 “to groups of fifty-one (51) or more employees”, and to CHIP contracts. It does not reach individual policies, small-group policies (50 or fewer employees), self-funded employer plans governed by ERISA, or excepted coverage such as accident-only, fixed-indemnity and limited-benefit policies. So the first two questions on every benefits check are the group size and whether the plan is fully insured or self-funded.',
          'The statute sets an annual maximum benefit, adjusted each year for inflation: $51,908 for policies issued or renewed in 2026 and $53,310 for 2027, with no limit on the number of visits. The cap matters less than it looks. The Insurance Department treats autism as a mental health condition under the federal parity law (MHPAEA, adopted into Pennsylvania law by Act 14 of 2010). It told insurers to handle autism claims in a parity-compliant way no later than January 1, 2024, and says the annual adjustment “is not expected to have any impact on the coverage of autism services in this Commonwealth.”'
        ],
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
          { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
          { title: 'PA Insurance Department Notice 2025-02 — Autism coverage CPI-U adjustment (55 Pa.B. 2406)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol55/55-12/408.html' },
          { title: 'PA Insurance Department Notice 2023-16 — Autism Spectrum Disorders Coverage and Parity (53 Pa.B. 6983)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol53/53-44/1534.html' }
        ]
      },
      {
        h2: 'What Act 62 adds at the front door (fully insured, 51+ employee groups)',
        list: [
          {
            title: 'Who may diagnose',
            desc: 'The “diagnostic assessment” is performed by a licensed physician, licensed physician assistant, licensed psychologist or certified registered nurse practitioner.'
          },
          {
            title: 'Diagnosis valid 12 months',
            desc: '“The results of a diagnostic assessment of autism spectrum disorder shall be valid for a period of twelve (12) months”, unless a licensed physician or licensed psychologist decides an earlier assessment is needed.'
          },
          {
            title: 'Treatment plan author',
            desc: 'The treatment plan is developed by a licensed physician or licensed psychologist after a comprehensive evaluation or reevaluation. Treatment is prescribed, ordered or provided by a licensed physician, physician assistant, psychologist, clinical social worker or CRNP.'
          },
          {
            title: 'Six-month review',
            desc: 'The insurer may review a treatment plan once every six months, subject to utilization review including concurrent review. A different interval can be agreed with the physician or psychologist who wrote the plan.'
          },
          {
            title: 'Network access',
            desc: 'The insurer must contract with, and accept as a participating provider, any autism service provider in its service area that is enrolled in Medical Assistance and accepts its terms.'
          },
          {
            title: 'Denials',
            desc: 'A denial gets an expedited internal review, then an expedited independent external review by the Insurance Department.'
          }
        ],
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
      },
      {
        h2: 'No Pennsylvania exhibit in Aetna’s ABA guide',
        body: [
          'We checked. Aetna’s ABA medical necessity guide carries exactly one state exhibit, Exhibit A for Maryland plans under COMAR 31.10.39, and nothing for Pennsylvania. Its cover note says only that “Other state laws and regulations may apply in other states.” The behavioral health precertification list has no Pennsylvania carve-out either; its only state note exempts fully insured members in Indiana from precertification programs. For an Act 62 plan, the statute’s rules in the section above sit on top of the national criteria. For a self-funded plan, the national criteria plus the plan document are the whole picture.',
          'Aetna Better Health of Pennsylvania is a different product: a Medical Assistance physical-health plan. In HealthChoices, behavioral health services are assigned to a behavioral health MCO by county, so ABA for a child on Medical Assistance runs through that BH-MCO as IBHS. We could not open Aetna Better Health of Pennsylvania’s own pages (aetnabetterhealth.com returned Access Denied), so confirm the line of business on the card before you apply this guide.'
        ],
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
          { title: 'PA DHS — Behavioral Health Managed Care Organizations (BH-MCOs) by county', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/bhc/bhc-mcos' }
        ]
      },
      {
        h2: 'Who can deliver and bill under Aetna in Pennsylvania',
        body: [
          'Aetna’s guide says services “must be provided directly or billed by” licensed behavior analysts (in states with licensure laws), board-certified behavior analysts, or licensed psychologists whose scope covers behavior analysis, “unless state mandates, plan documents or contracts require otherwise”. Anyone else needs supervision in line with practice standards. The provider manual adds that ABA practitioners need BACB certification or a state behavior-analyst license. Pennsylvania has no behavior-analyst license, so in practice that means a BCBA or a licensed psychologist. Pennsylvania’s own license is the Behavior Specialist, and Act 62 counts state-licensed autism service providers. Aetna publishes nothing on whether it credentials a Pennsylvania Behavior Specialist who is not a BCBA, so ask Aetna network management before building a schedule around one.'
        ],
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Behavioral Health Provider Manual (8/22)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
          { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' }
        ]
      },
      {
        h2: 'When the child also has Medical Assistance',
        body: [
          'Many Pennsylvania children with commercial coverage also carry Medical Assistance as a second payer. PH-95 (“Medicaid for Children with Special Needs”) covers children under 18 with SSA-standard disabilities, and “Parental income must be verified but will be excluded in this category”. Medical Assistance pays last. Other private or governmental health insurance must be used before billing the MA Program, and DHS tells providers to bill the child’s private insurance before submitting an MA claim for ASD diagnostic assessment or treatment. On the Medicaid side, ABA is delivered as Intensive Behavioral Health Services (IBHS) and managed by the behavioral health MCO assigned to the family’s county, with its own order and authorization rules. Get the commercial plan’s authorization first: a claim the primary plan denied for a missed authorization is a weak one to send to MA.'
        ],
        cites: [
          { title: 'PA DHS — Medicaid for Children with Special Needs (PH95)', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/medicaid-children-special-needs-ph95' },
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'PA DHS — Behavioral Health Managed Care Organizations (BH-MCOs) by county', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/bhc/bhc-mcos' }
        ]
      },
      {
        h2: 'Licensure & rates in Pennsylvania',
        body: [
          'Pennsylvania has no behavior-analyst licensure law: the BACB’s U.S. licensure table carries no Pennsylvania entry. Act 62 had the State Board of Medicine license “behavior specialists” instead. The license requires a master’s degree in a listed field (behavioral analysis included), one year of functional-behavior-assessment experience with individuals under 21, 1,000 hours of clinical experience and 90 hours of coursework. There is no exam, and the fee is $75. The Board’s rules say they are not meant to require a second license of someone whose existing license already covers autism assessment and treatment.',
          'On rates, Aetna publishes no Pennsylvania commercial ABA fee schedule. Commercial rates are negotiated and sit in your participating-provider agreement.'
        ],
        cites: [
          { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' },
          { title: '49 Pa. Code Ch. 18 Subch. N (§§ 18.521–18.527) — Behavior Specialists', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/049/chapter18/chap18toc.html' }
        ]
      }
    ],
    collect: [
      {
        title: 'Group size + funding type',
        desc: 'Act 62 binds only fully insured policies issued to groups of 51 or more employees (and CHIP). Individual, small-group and self-funded ERISA plans are outside it. Ask for the employer and check the card.'
      },
      {
        title: 'Member ID + card photo',
        desc: 'For a live benefits check and precertification (Availity or the number on the ID card). Confirm the card is commercial Aetna, not Aetna Better Health (Medical Assistance).'
      },
      {
        title: 'Diagnosis report + date',
        desc: 'DSM-5 ASD diagnosis, the diagnosing clinician’s credentials, and the date. On Act 62 plans the diagnostic assessment is valid for 12 months.'
      },
      {
        title: 'Standardized functioning score (past 12 months)',
        desc: 'Vineland-3, ABAS, VB-MAPP or ABLLS at least one standard deviation below the mean, or documented risk of harm. Aetna’s criteria require it.'
      },
      {
        title: 'Treatment plan author',
        desc: 'On Act 62 plans, the plan is developed by a licensed physician or licensed psychologist. Line them up early.'
      },
      {
        title: 'Other coverage',
        desc: 'Medical Assistance/PH-95, a second parent’s plan, TRICARE or CHAMPVA. Aetna goes first ahead of MA.'
      }
    ],
    sources: [
      { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna — Behavioral Health Provider Manual (8/22)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
      { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
      { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
      { title: 'PA Insurance Department Notice 2025-02 — Autism coverage CPI-U adjustment (55 Pa.B. 2406)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol55/55-12/408.html' },
      { title: 'PA Insurance Department Notice 2023-16 — Autism Spectrum Disorders Coverage and Parity (53 Pa.B. 6983)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol53/53-44/1534.html' },
      { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' },
      { title: '49 Pa. Code Ch. 18 Subch. N (§§ 18.521–18.527) — Behavior Specialists', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/049/chapter18/chap18toc.html' },
      { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
      { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
      { title: 'PA DHS — Medicaid for Children with Special Needs (PH95)', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/medicaid-children-special-needs-ph95' },
      { title: 'PA DHS — Behavioral Health Managed Care Organizations (BH-MCOs) by county', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/bhc/bhc-mcos' }
    ],
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national ABA policies set no age cap. The medical necessity guide lists typical, not limiting, parameters: comprehensive ABA at 10–25 hours a week is typical for ages 0–7 over 1–2 years, and focused ABA at 1–20 hours a week is listed for all ages. In Pennsylvania, Act 62 covers individuals under 21 on fully insured policies issued to groups of 51 or more employees (and CHIP). Individual, small-group and self-funded ERISA plans sit outside it, so for them the plan document alone sets any age term.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ],
        verifyVia: 'Live benefits check on the member ID. Establish group size and fully insured vs. self-funded ERISA, then the plan’s own age and benefit terms.',
        blocker: 'per-case'
      },
      dxRecency: {
        value: 'Aetna puts no expiry on the ASD diagnosis itself, but runs a 12-month clock on functional evidence. Medical necessity requires functional impairment on a standardized scale of functioning “in the past 12 months”, at least one standard deviation below the population mean, or a significant risk of harm. Progress is re-evaluated every six months. On Act 62 plans, the diagnostic assessment is “valid for a period of twelve (12) months, unless a licensed physician or licensed psychologist determines an earlier assessment is necessary.”',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
      },
      diagnosingProviders: {
        value: 'Aetna requires a DSM-5 ASD diagnosis (ICD-10 F84.0, F84.3–F84.9) from an appropriate provider: a licensed psychologist or psychiatrist, a physician, or another health care professional qualified to diagnose mental health conditions within their scope of practice. CPB 0648 lists the professionals appropriate to an autism evaluation: board certified behavior analyst, developmental pediatrician, neurologist, occupational therapist, physical therapist, primary care provider, psychiatrist, psychologist, and speech-language pathologist and audiologist. On Act 62 plans, the statutory diagnostic assessment is performed by a licensed physician, licensed physician assistant, licensed psychologist or certified registered nurse practitioner.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
      },
      diagnosticTools: {
        value: 'CPB 0648 names the diagnostic tools used with clinical assessment to establish autism: ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale. The ABA medical necessity guide then requires a standardized scale of functioning from the past 12 months, for example Vineland-3, ABAS, VB-MAPP or ABLLS.',
        status: 'verified',
        cites: [
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }
        ]
      },
      referral: {
        value: 'Aetna’s national ABA policies require no physician referral or prescription; the only prescription rule in the guide is the Maryland exhibit. What Aetna requires is precertification on all ten ABA codes (97151–97158, 0362T, 0373T). Act 62 plans add an ordering layer: treatment is identified in a treatment plan developed by a licensed physician or licensed psychologist, and prescribed, ordered or provided by a licensed physician, physician assistant, psychologist, clinical social worker or CRNP. Self-funded ERISA, individual and small-group plans are outside the statute.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
      },
      telehealth: {
        value: 'Not addressed for ABA. CPB 0554, CPB 0648 and the ABA medical necessity guide set no telehealth rules or place-of-service codes for ABA. The behavioral health provider manual says Aetna Behavioral Health offers telemedicine to all commercial fully insured members, and to self-insured plan sponsors unless they opt out. It does not say which ABA codes may be delivered remotely.',
        status: 'unverified',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Behavioral Health Provider Manual (8/22)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' }
        ],
        verifyVia: 'Availity, or the precertification line on the member’s ID card: ask which ABA codes Aetna pays via telehealth on this plan, and with which POS code and modifier.',
        blocker: 'per-case'
      },
      authTurnaround: {
        value: 'Depends on how the plan is funded. Fully insured Pennsylvania plans follow Act 146 of 2022 (Insurance Company Law § 2155, effective January 1, 2024). An urgent request for care not yet started is decided “as soon as possible, but not more than 72 hours” after receipt. An ongoing urgent course asked to continue at least 24 hours before it would be cut back or ended is decided within 24 hours. Every other prior authorization request is decided “within 15 days”; the insurer can extend that only if it promptly flagged missing information, and the provider then has at least 45 days to supply it. Act 146 also makes insurers post their prior-authorization list and offer a peer-to-peer on denial. Self-funded ERISA plans follow 29 CFR 2560.503-1 instead: pre-service decisions within 15 days, one 15-day extension, and 72 hours for urgent care. Aetna’s provider manual says only that the timing of review “incorporates state, federal, Centers for Medicare and Medicaid Services (CMS) and National Committee for Quality Assurance (NCQA) requirements.”',
        status: 'plan-dependent',
        cites: [
          { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' }
        ],
        verifyVia: 'At benefits verification, ask whether the plan is fully insured (Pennsylvania-regulated) or self-funded (ERISA), then confirm the authorization turnaround and any continuation lead time with Aetna (Availity or the number on the ID card).',
        blocker: 'per-case'
      },
      coordinationOfBenefits: {
        value: 'Which of two parents’ plans pays first is set by the plans’ own coordination terms. We found no Pennsylvania regulation fixing the order for a child on both parents’ plans, so ask each plan which one is primary. If the child also has Medical Assistance (including PH-95), Aetna pays first. MA is payer of last resort (42 CFR 433.139): other private or governmental insurance “shall be utilized before billing the MA Program” (55 Pa. Code § 1101.64), and IBHS is not paid when payment is available through a third party (55 Pa. Code § 1155.31(e)). DHS tells providers to bill private insurance before submitting an MA claim for ASD assessment or treatment. Get Aetna’s authorization even when MA is secondary. If the child also has TRICARE, TRICARE pays after this plan (10 U.S.C. 1079(i)(1)). CHAMPVA is the last payer after other health insurance (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
          { title: '42 CFR 433.139 — Payment of claims (third-party liability)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' }
        ],
        verifyVia: 'Ask Aetna at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has, including Medical Assistance/PH-95.',
        blocker: 'per-case'
      }
    },
    deliveryRules: {
      supervision: {
        value: 'Services must be provided directly or billed by licensed behavior analysts (in states with licensure laws), board-certified behavior analysts, or licensed psychologists whose scope covers behavior analysis, unless state mandates, plan documents or contracts require otherwise. Anyone else needs supervision and direction in line with practice standards. Aetna publishes no fixed supervision ratio. Its severity table allows extra authorization for QHP protocol modification and direction at 1 to 2 hours per 10 hours of treatment by protocol. Pennsylvania has no behavior-analyst license, so the licensed-behavior-analyst route does not exist here.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' }
        ]
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA policies. CPB 0554, CPB 0648 and the ABA medical necessity guide say nothing about billing 97153 and 97155 for the same clock time.',
        status: 'unverified',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }
        ],
        verifyVia: 'Aetna provider services or the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case'
      },
      dailyLimits: {
        value: 'Aetna publishes no per-day or per-week unit ceiling. Authorized hours follow documented severity of maladaptive behavior, social communication and self-care impairment on the guide’s severity table (1–4 hours/week at mild, 4–7 at moderate, 7–10 at severe impairment). Typical intensity is 10–25 hours/week for comprehensive and 1–20 for focused programs. On Act 62 plans the statute bars visit limits, and its CPI-adjusted dollar maximum ($51,908 for 2026 policies, $53,310 for 2027) is, per the Insurance Department, not expected to affect coverage under parity.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
          { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' }
        ]
      },
      noteSignature: {
        value: 'Aetna’s published ABA policies do not set a session-note rule. Its behavioral health treatment-record review criteria ask whether every entry is dated and carries “the author’s signature or electronic identifier with title (if applicable) and degree”. No deadline for signing is stated.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Behavioral Health Provider Manual (8/22)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' }
        ]
      },
      placeOfService: {
        value: 'Outpatient ABA is not tied to a setting in Aetna’s guide. In inpatient, residential or partial-hospitalization settings, that level of care’s criteria apply and no separate ABA authorization is needed. The guide expects coordination with the school district where applicable and a taper toward other supports such as school. CPB 0648 notes that many Aetna plans exclude educational services, e.g. ABA during class. On Act 62 plans, coverage cannot hinge on coordination with an IEP, but the plan need not cover a service solely because it is in an IEP.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
      },
      billAsProvider: {
        value: 'Services must be provided directly or billed by the appropriately licensed provider: a licensed behavior analyst where licensure exists (not in Pennsylvania), a board-certified behavior analyst, or a licensed psychologist whose scope covers behavior analysis, unless state mandates, plan documents or contracts require otherwise.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }
        ]
      }
    },
    faq: [
      {
        q: 'Does Aetna cover ABA therapy in Pennsylvania?',
        a: 'Yes, for autism spectrum disorder under Aetna’s national ABA medical necessity guide. On fully insured policies for groups of 51 or more employees, Pennsylvania’s Act 62 adds a legal floor for members under 21. Self-funded, individual and small-group plans follow their own plan terms, so check group size and funding type first.'
      },
      {
        q: 'Does the Aetna ABA assessment need prior authorization?',
        a: 'Yes. Aetna’s behavioral health precertification list includes 97151, 97152 and 0362T alongside the treatment codes. Precertify through Availity or the number on the member’s ID card.'
      },
      {
        q: 'Does the Act 62 dollar cap limit ABA hours?',
        a: 'The statute has a CPI-adjusted annual maximum ($51,908 for 2026 policies, $53,310 for 2027) and no visit limits. The Insurance Department treats autism as a mental health condition under federal parity and expects the cap to have no impact on coverage.'
      },
      {
        q: 'What does Aetna pay for ABA in Pennsylvania?',
        a: 'Commercial ABA rates are not published. They are negotiated in your participating-provider agreement.'
      }
    ],
  },

  'cigna-pennsylvania': {
    slug: 'cigna-pennsylvania',
    family: 'cigna',
    cardDesc: 'Evernorth EN0499 + the autism resource guide (no PA on assessment codes), layered on Pennsylvania’s Act 62 mandate.',
    assessmentPA: {
      value: 'Not required for assessment codes 97151, 97152 or 0362T with an autism diagnosis, if the provider is independently licensed or a BCBA and the policy covers ABA. Submit the claims and they are evaluated for payment. Source: Cigna/Evernorth autism resource guide; EN0499 itself states no prior-authorization rule. Evernorth still asks you to confirm ABA eligibility and benefits before the assessment.',
      status: 'verified',
      cites: [
        { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }
      ]
    },
    treatmentPA: {
      value: 'Required. Attach the completed assessment and treatment plan to the Applied Behavior Analysis Prior Authorization Form. Evernorth encourages requests up to 30 days before, or two weeks after, the start date; later requests can go to retrospective review, which may take up to 30 days. On Act 62 plans the insurer may review the treatment plan once every six months unless a different interval is agreed.',
      status: 'verified',
      cites: [
        { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
      ]
    },
    dxRequired: {
      value: 'Yes. A confirmed DSM-5-TR ASD diagnosis (F84.0–F84.9, except F84.2 Rett syndrome). EN0499 considers ABA not medically necessary for all non-ASD indications, and the resource guide says a diagnosis of autism is required for ABA benefit eligibility unless otherwise specified.',
      status: 'verified',
      cites: [
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }
      ]
    },
    payer: 'Cigna / Evernorth in Pennsylvania',
    state: 'PA',
    kind: 'commercial',
    pill: 'Payer Guide · Cigna · Pennsylvania',
    h1: 'Cigna / Evernorth ABA coverage in Pennsylvania: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Pennsylvania: Prior Auth & Act 62 Guide | Carelu',
    metaDescription: 'How Cigna / Evernorth covers ABA for Pennsylvania families: EN0499, no prior auth on assessment codes, treatment PA, the Act 62 mandate (under 21, 51+ employee groups, CPI-adjusted cap, parity), behavior specialist licensure, and what intake should verify.',
    intro: [
      'For a Pennsylvania intake team, a Cigna card brings three layers. There is Evernorth’s national ABA coverage policy (EN0499), Pennsylvania’s autism mandate (Act 62 of 2008), and the plan’s size and funding type, which decide whether the mandate binds. This guide takes them in that order.'
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per Evernorth EN0499; no prior auth on assessment codes 97151/97152/0362T, prior auth on treatment' },
      { label: 'State mandate', value: 'Act 62 of 2008 — Insurance Company Law § 635.2 (40 P.S. § 764h)' },
      { label: 'Mandate age', value: 'Under 21 — diagnostic assessment and treatment of ASD, including ABA' },
      { label: 'Mandate caps', value: 'Statutory annual max $51,908 (policies issued/renewed 2026; $53,310 in 2027), no visit limits — but PID treats autism as a mental health condition under MHPAEA and expects the cap to have no impact on coverage' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; individual and small-group (50 or fewer employees) policies; accident-only, fixed-indemnity, limited-benefit and other excepted policies' },
      { label: 'Licensure', value: 'No behavior-analyst license in PA; the State Board of Medicine licenses Behavior Specialists (Act 62 § 635.2(g); 49 Pa. Code §§ 18.521ff.)' }
    ],
    sections: [
      {
        h2: 'The national policy, applied in Pennsylvania',
        body: [
          'Cigna manages ABA through Evernorth Behavioral Health under national coverage policy EN0499 (Intensive Behavioral Interventions, effective 5/15/2026). The front door is easy: under the autism resource guide, assessment codes 97151, 97152 and 0362T need no prior authorization when the provider is independently licensed or a BCBA and the policy covers ABA. The hard part is the treatment request. It needs a standardized assessment given within 60 days before treatment starts, baseline data from the same window, and a treatment plan attached to Cigna’s ABA prior authorization form. That policy is the same everywhere. In Pennsylvania, what changes is the legal floor under it and whether that floor applies to the family’s plan.'
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }
        ]
      },
      {
        h2: 'The Pennsylvania mandate: Act 62, and what it does not reach',
        body: [
          'Pennsylvania’s autism mandate is Act 62 of 2008 (Insurance Company Law § 635.2, 40 P.S. § 764h). For covered individuals “under twenty-one (21) years of age” it requires coverage of the diagnostic assessment of autism spectrum disorder and of its treatment, and treatment includes rehabilitative care such as applied behavior analysis identified in a treatment plan. Coverage is subject to the plan’s copays, deductibles and coinsurance like any other medical service. A plan does not have to cover a service solely because it appears in an IEP, but coverage “shall not be contingent upon a coordination of services with an individualized education program”.',
          'Reach is the part intake gets wrong. Act 62 applies to health insurance policies offered, issued or renewed on or after July 1, 2009 “to groups of fifty-one (51) or more employees”, and to CHIP contracts. It does not reach individual policies, small-group policies (50 or fewer employees), self-funded employer plans governed by ERISA, or excepted coverage such as accident-only, fixed-indemnity and limited-benefit policies. So the first two questions on every benefits check are the group size and whether the plan is fully insured or self-funded.',
          'The statute sets an annual maximum benefit, adjusted each year for inflation: $51,908 for policies issued or renewed in 2026 and $53,310 for 2027, with no limit on the number of visits. The cap matters less than it looks. The Insurance Department treats autism as a mental health condition under the federal parity law (MHPAEA, adopted into Pennsylvania law by Act 14 of 2010). It told insurers to handle autism claims in a parity-compliant way no later than January 1, 2024, and says the annual adjustment “is not expected to have any impact on the coverage of autism services in this Commonwealth.”'
        ],
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
          { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
          { title: 'PA Insurance Department Notice 2025-02 — Autism coverage CPI-U adjustment (55 Pa.B. 2406)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol55/55-12/408.html' },
          { title: 'PA Insurance Department Notice 2023-16 — Autism Spectrum Disorders Coverage and Parity (53 Pa.B. 6983)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol53/53-44/1534.html' }
        ]
      },
      {
        h2: 'What Act 62 adds at the front door (fully insured, 51+ employee groups)',
        list: [
          {
            title: 'Who may diagnose',
            desc: 'The “diagnostic assessment” is performed by a licensed physician, licensed physician assistant, licensed psychologist or certified registered nurse practitioner.'
          },
          {
            title: 'Diagnosis valid 12 months',
            desc: '“The results of a diagnostic assessment of autism spectrum disorder shall be valid for a period of twelve (12) months”, unless a licensed physician or licensed psychologist decides an earlier assessment is needed.'
          },
          {
            title: 'Treatment plan author',
            desc: 'The treatment plan is developed by a licensed physician or licensed psychologist after a comprehensive evaluation or reevaluation. Treatment is prescribed, ordered or provided by a licensed physician, physician assistant, psychologist, clinical social worker or CRNP.'
          },
          {
            title: 'Six-month review',
            desc: 'The insurer may review a treatment plan once every six months, subject to utilization review including concurrent review. A different interval can be agreed with the physician or psychologist who wrote the plan.'
          },
          {
            title: 'Network access',
            desc: 'The insurer must contract with, and accept as a participating provider, any autism service provider in its service area that is enrolled in Medical Assistance and accepts its terms.'
          },
          {
            title: 'Denials',
            desc: 'A denial gets an expedited internal review, then an expedited independent external review by the Insurance Department.'
          }
        ],
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
      },
      {
        h2: 'No Pennsylvania carve-out in EN0499, and PA Behavior Specialists are credentialable',
        body: [
          'We ran a full-text check of the current EN0499. Its only state references are New York, given as an example of a state mandate, and Virginia, whose fully insured business is not subject to the policy. Pennsylvania is not mentioned, so Pennsylvania Cigna members follow standard EN0499 criteria unless their plan documents differ. The no-assessment-PA path holds. Evernorth bases ABA authorizations on EN0499 “unless contractual requirements or federal or state law requires the use of other specifically identified clinical criteria”, and on an Act 62 plan the statutory rules above apply as well.',
          'One Pennsylvania-relevant line in the resource guide: Evernorth credentials providers “certified by a national governing agency or a state licensing board”, and its list names “licensed behavior specialist”, which is Pennsylvania’s license. Note, though, that EN0499 names BCBAs, licensed behavior analysts, or independently licensed mental health professionals with documented ABA training for the assessment and case supervision. Before relying on a behavior specialist in those roles, confirm with Evernorth Provider Relations.'
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }
        ]
      },
      {
        h2: 'When the child also has Medical Assistance',
        body: [
          'Many Pennsylvania children with commercial coverage also carry Medical Assistance as a second payer. PH-95 (“Medicaid for Children with Special Needs”) covers children under 18 with SSA-standard disabilities, and “Parental income must be verified but will be excluded in this category”. Medical Assistance pays last. Other private or governmental health insurance must be used before billing the MA Program, and DHS tells providers to bill the child’s private insurance before submitting an MA claim for ASD diagnostic assessment or treatment. On the Medicaid side, ABA is delivered as Intensive Behavioral Health Services (IBHS) and managed by the behavioral health MCO assigned to the family’s county, with its own order and authorization rules. Get the commercial plan’s authorization first: a claim the primary plan denied for a missed authorization is a weak one to send to MA.'
        ],
        cites: [
          { title: 'PA DHS — Medicaid for Children with Special Needs (PH95)', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/medicaid-children-special-needs-ph95' },
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'PA DHS — Behavioral Health Managed Care Organizations (BH-MCOs) by county', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/bhc/bhc-mcos' }
        ]
      },
      {
        h2: 'Licensure & rates in Pennsylvania',
        body: [
          'Pennsylvania has no behavior-analyst licensure law: the BACB’s U.S. licensure table carries no Pennsylvania entry. Act 62 had the State Board of Medicine license “behavior specialists” instead. The license requires a master’s degree in a listed field (behavioral analysis included), one year of functional-behavior-assessment experience with individuals under 21, 1,000 hours of clinical experience and 90 hours of coursework. There is no exam, and the fee is $75. The Board’s rules say they are not meant to require a second license of someone whose existing license already covers autism assessment and treatment.',
          'On rates, Cigna publishes no Pennsylvania commercial ABA fee schedule. Commercial rates are negotiated and sit in your participating-provider agreement.'
        ],
        cites: [
          { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' },
          { title: '49 Pa. Code Ch. 18 Subch. N (§§ 18.521–18.527) — Behavior Specialists', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/049/chapter18/chap18toc.html' }
        ]
      }
    ],
    collect: [
      {
        title: 'Group size + funding type',
        desc: 'Act 62 binds only fully insured policies issued to groups of 51 or more employees (and CHIP). Individual, small-group and self-funded ERISA plans are outside it.'
      },
      {
        title: 'Member ID + card photo',
        desc: 'Confirm ABA benefits before the assessment: the Procedure Code Benefit Tool on Provider.Evernorth.com, or the Autism Care Coordinator team at 877.279.7603.'
      },
      {
        title: 'Diagnosis report + date',
        desc: 'DSM-5-TR ASD diagnosis with the diagnosing clinician’s name, credentials, licensure type and the date it was most recently made. A provisional or “rule out” diagnosis does not count, and an IDEA educational identification alone does not either.'
      },
      {
        title: 'Standardized assessment within 60 days',
        desc: 'The instrument must be given within 60 days before treatment starts, in its most current edition (e.g. Vineland-3, not Vineland-II), with the administration date and scores.'
      },
      {
        title: 'Treatment plan author',
        desc: 'On Act 62 plans, the plan is developed by a licensed physician or licensed psychologist.'
      },
      {
        title: 'Other coverage',
        desc: 'Medical Assistance/PH-95, a second parent’s plan, TRICARE or CHAMPVA. Cigna goes first ahead of MA.'
      }
    ],
    sources: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
      { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
      { title: 'PA Insurance Department Notice 2025-02 — Autism coverage CPI-U adjustment (55 Pa.B. 2406)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol55/55-12/408.html' },
      { title: 'PA Insurance Department Notice 2023-16 — Autism Spectrum Disorders Coverage and Parity (53 Pa.B. 6983)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol53/53-44/1534.html' },
      { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' },
      { title: '49 Pa. Code Ch. 18 Subch. N (§§ 18.521–18.527) — Behavior Specialists', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/049/chapter18/chap18toc.html' },
      { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
      { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
      { title: 'PA DHS — Medicaid for Children with Special Needs (PH95)', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/medicaid-children-special-needs-ph95' },
      { title: 'PA DHS — Behavioral Health Managed Care Organizations (BH-MCOs) by county', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/bhc/bhc-mcos' }
    ],
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap on ABA. Its glossary, following CASP 2024, says access to focused intervention “should not be restricted by age, cognitive level, diagnosis, or co-occurring conditions.” Age terms come from the member’s benefit plan document, which supersedes the coverage policy. In Pennsylvania, Act 62 covers individuals under 21 on fully insured policies issued to groups of 51 or more employees (and CHIP). Individual, small-group and self-funded ERISA plans sit outside it, so for them the plan document alone sets any age term.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ],
        verifyVia: 'Live benefits check or the Evernorth Autism Care Coordinator team (877.279.7603). Establish group size and fully insured vs. self-funded ERISA first.',
        blocker: 'per-case'
      },
      dxRecency: {
        value: 'EN0499 puts no expiry on the ASD diagnosis, but requires the date it was most recently made. The data carry the clocks. The standardized instrument must be given within 60 days before treatment starts, and baseline data collected in the same window. Continued treatment needs current data within 60 days of the request and a standardized instrument no more than one year old. Any break in treatment longer than 60 calendar days means a fresh standardized assessment. On Act 62 plans, the diagnostic assessment is valid for 12 months unless a licensed physician or licensed psychologist decides an earlier one is needed.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
      },
      diagnosingProviders: {
        value: 'Under DSM-5-TR criteria, by a healthcare professional licensed to practice independently whose licensure board considers diagnostics within their scope of practice. The name, credentials and licensure type of the diagnosing clinician must be provided. On Act 62 plans, the statutory diagnostic assessment is performed by a licensed physician, licensed physician assistant, licensed psychologist or certified registered nurse practitioner.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
      },
      diagnosticTools: {
        value: 'EN0499 names no single diagnostic instrument. The ABA assessment must use a reliable, valid, standardized instrument that measures the DSM-5-TR ASD domains (social communication and interaction; restricted, repetitive behaviors). It must be completed in full and as designed, by someone trained to give it, in the most current edition (Vineland-3, not Vineland-II), and it must show the administration date, respondent and scores.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }
        ]
      },
      referral: {
        value: 'No referral, order or prescription is required under EN0499. Assessment codes 97151, 97152 and 0362T need no prior authorization for an independently licensed provider or BCBA. Treatment is authorized on the ABA Prior Authorization Form with the assessment and treatment plan attached. Act 62 plans add an ordering layer: the treatment plan is developed by a licensed physician or licensed psychologist, and treatment is prescribed, ordered or provided by a licensed physician, physician assistant, psychologist, clinical social worker or CRNP.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
      },
      telehealth: {
        value: '“All ABA CPT codes are covered telehealth services” per the Evernorth autism resource guide. EN0499 allows in-person, telehealth or hybrid delivery, chosen on individual characteristics, the treatment plan, caregiver participation, environment, efficacy and safety evidence, and technology. The line-of-sight and close-proximity requirement does not apply to telehealth. A telehealth service must still meet the direct-treatment definition.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }
        ]
      },
      authTurnaround: {
        value: 'Depends on how the plan is funded. Fully insured Pennsylvania plans follow Act 146 of 2022 (Insurance Company Law § 2155, effective January 1, 2024). An urgent request for care not yet started is decided “as soon as possible, but not more than 72 hours” after receipt. An ongoing urgent course asked to continue at least 24 hours before it would be cut back or ended is decided within 24 hours. Every other prior authorization request is decided “within 15 days”; the insurer can extend that only if it promptly flagged missing information, and the provider then has at least 45 days to supply it. Act 146 also makes insurers post their prior-authorization list and offer a peer-to-peer on denial. Self-funded ERISA plans follow 29 CFR 2560.503-1 instead: pre-service decisions within 15 days, one 15-day extension, and 72 hours for urgent care. Evernorth’s own guidance: request authorization up to 30 days before, or two weeks after, the service start date. Later requests may go to retrospective review, which can take up to 30 days. A continuation request needs current data collected within 60 days.',
        status: 'plan-dependent',
        cites: [
          { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }
        ],
        verifyVia: 'At benefits verification, ask whether the plan is fully insured (Pennsylvania-regulated) or self-funded (ERISA), then confirm the authorization turnaround and any continuation lead time with Cigna/Evernorth (Autism Care Coordinator team, 877.279.7603).',
        blocker: 'per-case'
      },
      coordinationOfBenefits: {
        value: 'Which of two parents’ plans pays first is set by the plans’ own coordination terms. We found no Pennsylvania regulation fixing the order for a child on both parents’ plans, so ask each plan which one is primary. If the child also has Medical Assistance (including PH-95), Cigna pays first. MA is payer of last resort (42 CFR 433.139): other private or governmental insurance “shall be utilized before billing the MA Program” (55 Pa. Code § 1101.64), and IBHS is not paid when payment is available through a third party (55 Pa. Code § 1155.31(e)). DHS tells providers to bill private insurance before submitting an MA claim for ASD assessment or treatment. Get Cigna’s authorization even when MA is secondary. If the child also has TRICARE, TRICARE pays after this plan (10 U.S.C. 1079(i)(1)). CHAMPVA is the last payer after other health insurance (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
          { title: '42 CFR 433.139 — Payment of claims (third-party liability)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' }
        ],
        verifyVia: 'Ask Cigna at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has, including Medical Assistance/PH-95.',
        blocker: 'per-case'
      }
    },
    deliveryRules: {
      supervision: {
        value: 'Case supervision is by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health professional with documented ABA training. Direct supervision (the BCBA face-to-face with the individual and the RBT or BCaBA, at the same time as treatment) plus indirect supervision runs at the standard of one to two hours per ten hours of direct treatment. When direct treatment is 10 hours a week or less, at least one to two hours a week of direct supervision is provided. The supervisor’s name and credentials must be documented.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }
        ]
      },
      concurrentBilling: {
        value: 'Only one provider can bill for a unit of time. The exception is 97153, 97154 and 97155 during direct supervision, when the BCBA/QHP directs the technician and both are face-to-face with the patient at once. ABA is not covered when delivered at the same time as another treatment modality, such as ABA and speech therapy.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }
        ]
      },
      dailyLimits: {
        value: 'Cigna publishes no per-day unit ceiling. All ABA codes bill in 15-minute units, only 97151–97158, 0362T and 0373T. Planned intensity must reflect severity, goals and response to treatment, and supervision runs one to two hours per ten hours of direct treatment. On Act 62 plans the statute bars visit limits, and the Insurance Department expects its CPI-adjusted dollar maximum ($51,908 for 2026 policies) to have no impact under parity.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
          { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' }
        ]
      },
      noteSignature: {
        value: 'A separate written record for each service, by CPT code, showing: start and end date and time, location, focus, a detailed description of the intervention, individuals present, the specific service delivered, and the name, credential (if applicable) and signature of the ABA provider who rendered it.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }
        ]
      },
      placeOfService: {
        value: 'Goals are defined and measured across every setting where treatment happens (home, clinic, school, community), and data are reported separately by location. Services that are mainly educational or vocational are not covered. In academic, vocational or telehealth settings, the plan must document that the service meets the direct-treatment definition and does not replace the setting’s own responsibilities (e.g. a classroom aide). On Act 62 plans, coverage cannot hinge on coordination with an IEP.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
      },
      billAsProvider: {
        value: 'Evernorth does not credential non-licensed or non-certified staff; their services are billed under the supervising provider. On a CMS-1500 only a BCBA or other licensed provider goes in box 33; electronic payer ID 62308. Per the code table, 97152, 97153 and 97154 may be provided by a BCaBA or technician but billed only by a BCBA-D, BCBA or licensed mental health provider. Evernorth’s credentialing list includes “licensed behavior specialist”, Pennsylvania’s license.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }
        ]
      }
    },
    faq: [
      {
        q: 'Does Cigna cover ABA therapy in Pennsylvania?',
        a: 'Yes, for autism spectrum disorder under Evernorth policy EN0499. On fully insured policies for groups of 51 or more employees, Pennsylvania’s Act 62 adds a legal floor for members under 21. Self-funded, individual and small-group plans follow their own plan terms.'
      },
      {
        q: 'Does the Cigna assessment need prior authorization in Pennsylvania?',
        a: 'No. Assessment codes 97151, 97152 and 0362T need no prior authorization for an independently licensed provider or BCBA when the policy covers ABA, and EN0499 has no Pennsylvania carve-out. Authorization is needed at the treatment step. Confirm benefits before the assessment.'
      },
      {
        q: 'Will Cigna credential a Pennsylvania Behavior Specialist?',
        a: 'Evernorth’s credentialing list names “licensed behavior specialist” among accepted licenses. EN0499 still names BCBAs, licensed behavior analysts or independently licensed clinicians with ABA training for assessment and supervision, so confirm the role with Evernorth Provider Relations.'
      },
      {
        q: 'What does Cigna pay for ABA in Pennsylvania?',
        a: 'Commercial ABA rates are not published. They are negotiated in your participating-provider agreement.'
      }
    ],
  },

  'unitedhealthcare-pennsylvania': {
    slug: 'unitedhealthcare-pennsylvania',
    family: 'unitedhealthcare',
    cardDesc: 'Optum ABA criteria (BH803ABASCC) + Optum’s Pennsylvania Commercial state-mandate entry + Act 62; Optum also runs UHC Community Plan’s PA CHIP ABA network.',
    assessmentPA: {
      value: 'Required. Optum’s ABA criteria say “Prior authorization is required for ABA” unless contract or law says otherwise. On Provider Express, ABA assessment and ABA treatment are separate authorization requests (Auths → Auth request → ABA Assessment or Treatment).',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum Provider Express — Applied Behavior Analysis Information (portal authorizations)', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2.html' }
      ]
    },
    treatmentPA: {
      value: 'Required, as a separate treatment authorization on Provider Express. Optum does not publish a fixed review cycle. Its criteria say treatment plans are “usually reviewed/updated twice annually, as appropriate per state mandate”, and on Act 62 plans the insurer may review the treatment plan once every six months unless a different interval is agreed.',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum Provider Express — Applied Behavior Analysis Information (portal authorizations)', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2.html' },
        { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
      ]
    },
    dxRequired: {
      value: 'Yes. A valid ASD diagnosis (or another diagnosis required by governing law) under DSM-5-TR, with diagnosis and severity confirmed on at least one clinically validated tool. Optum’s Pennsylvania Commercial entry restates the mandate: coverage for the diagnosis and treatment of ASD for individuals under 21.',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, eff. July 2026; Pennsylvania Commercial entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }
      ]
    },
    payer: 'UnitedHealthcare / Optum in Pennsylvania',
    state: 'PA',
    kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Pennsylvania',
    h1: 'UnitedHealthcare / Optum ABA coverage in Pennsylvania: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Pennsylvania: Prior Auth & Act 62 Guide | Carelu',
    metaDescription: 'How UnitedHealthcare / Optum covers ABA for Pennsylvania families: Optum’s ABA criteria and its Pennsylvania Commercial mandate entry, separate assessment and treatment authorizations, Act 62 (under 21, 51+ employee groups, CPI-adjusted cap, parity), the PA CHIP ABA program, and what intake should verify.',
    intro: [
      'For a Pennsylvania intake team, a UnitedHealthcare card brings three layers. There is Optum’s national ABA criteria, Pennsylvania’s autism mandate (Act 62 of 2008), and the plan’s size and funding type, which decide whether the mandate binds. Unlike Aetna and Cigna, Optum publishes a Pennsylvania-specific entry. There is also a second UnitedHealthcare product in the state: a CHIP plan whose ABA network Optum manages.'
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per Optum’s ABA Supplemental Clinical Criteria plus its Pennsylvania Commercial state-mandate entry; separate assessment and treatment authorizations' },
      { label: 'State mandate', value: 'Act 62 of 2008 — Insurance Company Law § 635.2 (40 P.S. § 764h)' },
      { label: 'Mandate age', value: 'Under 21 — diagnostic assessment and treatment of ASD, including ABA' },
      { label: 'Mandate caps', value: 'Statutory annual max $51,908 (policies issued/renewed 2026; $53,310 in 2027), no visit limits — but PID treats autism as a mental health condition under MHPAEA and expects the cap to have no impact on coverage' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; individual and small-group (50 or fewer employees) policies; accident-only, fixed-indemnity, limited-benefit and other excepted policies' },
      { label: 'Licensure', value: 'No behavior-analyst license in PA; the State Board of Medicine licenses Behavior Specialists (Act 62 § 635.2(g); 49 Pa. Code §§ 18.521ff.)' }
    ],
    sections: [
      {
        h2: 'The national policy, applied in Pennsylvania',
        body: [
          'UnitedHealthcare manages commercial ABA through Optum under the ABA Supplemental Clinical Criteria (BH803ABASCC). ABA needs prior authorization, and on the Provider Express portal the assessment and the treatment are requested as separate authorizations. The criteria require a DSM-5-TR diagnosis confirmed with a validated tool, supervision at 1–2 hours per 10 hours of direct treatment, and continued-service reviews. Those reviews look closely at authorized hours used below 80% over a two-week period. Before applying the criteria, reviewers must check the member’s benefit plan and “any federal or state regulatory requirements that supersede the member’s benefits”.'
        ],
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum Provider Express — Applied Behavior Analysis Information (portal authorizations)', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2.html' }
        ]
      },
      {
        h2: 'The Pennsylvania mandate: Act 62, and what it does not reach',
        body: [
          'Pennsylvania’s autism mandate is Act 62 of 2008 (Insurance Company Law § 635.2, 40 P.S. § 764h). For covered individuals “under twenty-one (21) years of age” it requires coverage of the diagnostic assessment of autism spectrum disorder and of its treatment, and treatment includes rehabilitative care such as applied behavior analysis identified in a treatment plan. Coverage is subject to the plan’s copays, deductibles and coinsurance like any other medical service. A plan does not have to cover a service solely because it appears in an IEP, but coverage “shall not be contingent upon a coordination of services with an individualized education program”.',
          'Reach is the part intake gets wrong. Act 62 applies to health insurance policies offered, issued or renewed on or after July 1, 2009 “to groups of fifty-one (51) or more employees”, and to CHIP contracts. It does not reach individual policies, small-group policies (50 or fewer employees), self-funded employer plans governed by ERISA, or excepted coverage such as accident-only, fixed-indemnity and limited-benefit policies. So the first two questions on every benefits check are the group size and whether the plan is fully insured or self-funded.',
          'The statute sets an annual maximum benefit, adjusted each year for inflation: $51,908 for policies issued or renewed in 2026 and $53,310 for 2027, with no limit on the number of visits. The cap matters less than it looks. The Insurance Department treats autism as a mental health condition under the federal parity law (MHPAEA, adopted into Pennsylvania law by Act 14 of 2010). It told insurers to handle autism claims in a parity-compliant way no later than January 1, 2024, and says the annual adjustment “is not expected to have any impact on the coverage of autism services in this Commonwealth.”'
        ],
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
          { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
          { title: 'PA Insurance Department Notice 2025-02 — Autism coverage CPI-U adjustment (55 Pa.B. 2406)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol55/55-12/408.html' },
          { title: 'PA Insurance Department Notice 2023-16 — Autism Spectrum Disorders Coverage and Parity (53 Pa.B. 6983)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol53/53-44/1534.html' }
        ]
      },
      {
        h2: 'What Act 62 adds at the front door (fully insured, 51+ employee groups)',
        list: [
          {
            title: 'Who may diagnose',
            desc: 'The “diagnostic assessment” is performed by a licensed physician, licensed physician assistant, licensed psychologist or certified registered nurse practitioner.'
          },
          {
            title: 'Diagnosis valid 12 months',
            desc: '“The results of a diagnostic assessment of autism spectrum disorder shall be valid for a period of twelve (12) months”, unless a licensed physician or licensed psychologist decides an earlier assessment is needed.'
          },
          {
            title: 'Treatment plan author',
            desc: 'The treatment plan is developed by a licensed physician or licensed psychologist after a comprehensive evaluation or reevaluation. Treatment is prescribed, ordered or provided by a licensed physician, physician assistant, psychologist, clinical social worker or CRNP.'
          },
          {
            title: 'Six-month review',
            desc: 'The insurer may review a treatment plan once every six months, subject to utilization review including concurrent review. A different interval can be agreed with the physician or psychologist who wrote the plan.'
          },
          {
            title: 'Network access',
            desc: 'The insurer must contract with, and accept as a participating provider, any autism service provider in its service area that is enrolled in Medical Assistance and accepts its terms.'
          },
          {
            title: 'Denials',
            desc: 'A denial gets an expedited internal review, then an expedited independent external review by the Insurance Department.'
          }
        ],
        cites: [
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
      },
      {
        h2: 'Optum’s Pennsylvania Commercial entry',
        body: [
          'Pennsylvania Commercial is on the list of states whose ABA State Mandates entry Optum applies alongside the national criteria, and “To the extent this criteria conflicts with applicable state-mandated criteria, the state-mandated criteria controls.” The Pennsylvania entry (State Mandates document effective July 2026) says two things. First, coverage is required for the diagnosis and treatment of ASD for individuals under 21. Second, Pennsylvania professional licensing lets ABA be supervised by a BCBA “or a licensed behavior consultant, which is not required to be a traditionally licensed clinician.” Optum’s wording is “licensed behavior consultant”. The license Pennsylvania actually issues is the State Board of Medicine’s Behavior Specialist license, so read that line as Optum accepting a state-licensed, non-BCBA supervisor in Pennsylvania. Confirm credentialing with Optum before relying on it.'
        ],
        cites: [
          { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, eff. July 2026; Pennsylvania Commercial entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' }
        ]
      },
      {
        h2: 'The other UnitedHealthcare card: Pennsylvania CHIP',
        body: [
          'UnitedHealthcare Community Plan Pennsylvania is one of the managed care plans covering Pennsylvania CHIP enrollees, and Optum builds and manages its ABA network. Act 62 applies to CHIP contracts too. Optum’s Pennsylvania CHIP quick reference guide (11/2022) says “All autism services require prior authorization”, bills on a CMS-1500 to payer ID 87726, sets a 180-day filing window and allows appeals within 60 days of the remittance. Provider Relations for the CHIP network is 1-877-614-0484. When a family says “we have United”, check whether the card is commercial or CHIP. This guide covers commercial coverage.'
        ],
        cites: [
          { title: 'Optum Provider Express — Pennsylvania CHIP ABA Program', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2/paChipABA.html' },
          { title: 'Optum — Pennsylvania CHIP ABA Program Quick Reference Guide (BH4503, 11/2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/paaba/paCHIP-ABA_QRG_4503.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
      },
      {
        h2: 'When the child also has Medical Assistance',
        body: [
          'Many Pennsylvania children with commercial coverage also carry Medical Assistance as a second payer. PH-95 (“Medicaid for Children with Special Needs”) covers children under 18 with SSA-standard disabilities, and “Parental income must be verified but will be excluded in this category”. Medical Assistance pays last. Other private or governmental health insurance must be used before billing the MA Program, and DHS tells providers to bill the child’s private insurance before submitting an MA claim for ASD diagnostic assessment or treatment. On the Medicaid side, ABA is delivered as Intensive Behavioral Health Services (IBHS) and managed by the behavioral health MCO assigned to the family’s county, with its own order and authorization rules. Get the commercial plan’s authorization first: a claim the primary plan denied for a missed authorization is a weak one to send to MA.'
        ],
        cites: [
          { title: 'PA DHS — Medicaid for Children with Special Needs (PH95)', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/medicaid-children-special-needs-ph95' },
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'PA DHS — Behavioral Health Managed Care Organizations (BH-MCOs) by county', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/bhc/bhc-mcos' }
        ]
      },
      {
        h2: 'Licensure & rates in Pennsylvania',
        body: [
          'Pennsylvania has no behavior-analyst licensure law: the BACB’s U.S. licensure table carries no Pennsylvania entry. Act 62 had the State Board of Medicine license “behavior specialists” instead. The license requires a master’s degree in a listed field (behavioral analysis included), one year of functional-behavior-assessment experience with individuals under 21, 1,000 hours of clinical experience and 90 hours of coursework. There is no exam, and the fee is $75. The Board’s rules say they are not meant to require a second license of someone whose existing license already covers autism assessment and treatment.',
          'On rates, UnitedHealthcare publishes no Pennsylvania commercial ABA fee schedule. Commercial rates are negotiated and sit in your participating-provider agreement.'
        ],
        cites: [
          { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' },
          { title: '49 Pa. Code Ch. 18 Subch. N (§§ 18.521–18.527) — Behavior Specialists', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/049/chapter18/chap18toc.html' }
        ]
      }
    ],
    collect: [
      {
        title: 'Group size + funding type',
        desc: 'Act 62 binds only fully insured policies issued to groups of 51 or more employees (and CHIP). Individual, small-group and self-funded ERISA plans are outside it.'
      },
      {
        title: 'Line of business',
        desc: 'Commercial UnitedHealthcare vs. UnitedHealthcare Community Plan CHIP. Both go through Optum, with different documents and contacts.'
      },
      {
        title: 'Member ID + card photo',
        desc: 'Verify coverage and request authorizations in the Provider Express portal (One Healthcare ID required).'
      },
      {
        title: 'Diagnosis report + date',
        desc: 'DSM-5-TR ASD diagnosis confirmed with a validated tool (e.g. ADOS-2, ADI-R), the diagnosing clinician’s name and the date. Optum’s request checklist asks for both.'
      },
      {
        title: 'School and other services',
        desc: 'For school-based requests Optum asks for the school type, weekly school hours, IEP details and the other services the child receives.'
      },
      {
        title: 'Other coverage',
        desc: 'Medical Assistance/PH-95, a second parent’s plan, TRICARE or CHAMPVA. UnitedHealthcare goes first ahead of MA.'
      }
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, eff. July 2026; Pennsylvania Commercial entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'Optum Provider Express — Applied Behavior Analysis Information (portal authorizations)', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2.html' },
      { title: 'Optum — ABA Request for Services Checklist QRG (BH00853-25, 05/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/BH00853-25-QRG_ABAQRG.pdf' },
      { title: 'Optum Provider Express — Pennsylvania CHIP ABA Program', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2/paChipABA.html' },
      { title: 'Optum — Pennsylvania CHIP ABA Program Quick Reference Guide (BH4503, 11/2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/paaba/paCHIP-ABA_QRG_4503.pdf' },
      { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' },
      { title: 'PA Insurance Department Notice 2026-06 — Autism coverage CPI-U adjustment and parity reminder (56 Pa.B. 1396)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol56/56-10/352.html' },
      { title: 'PA Insurance Department Notice 2025-02 — Autism coverage CPI-U adjustment (55 Pa.B. 2406)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol55/55-12/408.html' },
      { title: 'PA Insurance Department Notice 2023-16 — Autism Spectrum Disorders Coverage and Parity (53 Pa.B. 6983)', url: 'https://www.pacodeandbulletin.gov/secure/pabulletin/data/vol53/53-44/1534.html' },
      { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts (PA absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' },
      { title: '49 Pa. Code Ch. 18 Subch. N (§§ 18.521–18.527) — Behavior Specialists', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/049/chapter18/chap18toc.html' },
      { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
      { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
      { title: 'PA DHS — Medicaid for Children with Special Needs (PH95)', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/medicaid-children-special-needs-ph95' },
      { title: 'PA DHS — Behavioral Health Managed Care Organizations (BH-MCOs) by county', url: 'https://www.pa.gov/agencies/dhs/resources/medicaid/bhc/bhc-mcos' },
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Optum’s ABA criteria have no age criterion; the member’s benefit plan and any superseding federal or state requirement govern. Optum’s Pennsylvania Commercial entry states that coverage is required for individuals under 21. In Pennsylvania, Act 62 covers individuals under 21 on fully insured policies issued to groups of 51 or more employees (and CHIP). Individual, small-group and self-funded ERISA plans sit outside it, so for them the plan document alone sets any age term.',
        status: 'plan-dependent',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, eff. July 2026; Pennsylvania Commercial entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ],
        verifyVia: 'Provider Express eligibility check or the behavioral health number on the member ID card. Establish group size and fully insured vs. self-funded ERISA first.',
        blocker: 'per-case'
      },
      dxRecency: {
        value: 'Optum sets no expiry on the ASD diagnosis itself; the diagnosing clinician must confirm the DSM-5-TR diagnosis and severity with a validated tool. The intake checklist asks for the date of diagnosis. On Act 62 plans, the diagnostic assessment is valid for 12 months unless a licensed physician or licensed psychologist decides an earlier one is needed. Continued-service reviews look at progress within 6-month periods and at hours used below 80% over two weeks.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — ABA Request for Services Checklist QRG (BH00853-25, 05/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/BH00853-25-QRG_ABAQRG.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
      },
      diagnosingProviders: {
        value: 'A state-licensed physician, psychologist, or other state-licensed clinician qualified to diagnose under DSM-5-TR. On Act 62 plans, the statutory diagnostic assessment is performed by a licensed physician, licensed physician assistant, licensed psychologist or certified registered nurse practitioner.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool (list not all-inclusive). First-level screens: ABC, CHAT/M-CHAT, CSBS-DP-IT Checklist, ASQ, AQ, CAST. Second-level: CARS/CARS-2, RITA-T, STAT. Formal diagnostic tools: ADI-R, ADOS/ADOS-2, DISCO. Treatment intensity is then set from a baseline on at least one of: ATEC, VB-MAPP, ABLLS/ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, Vineland, CFQL-2.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }
        ]
      },
      referral: {
        value: 'Optum’s criteria require no separate physician referral. What they require is prior authorization, requested on Provider Express as an ABA assessment authorization and then an ABA treatment authorization. Act 62 plans add an ordering layer: the treatment plan is developed by a licensed physician or licensed psychologist, and treatment is prescribed, ordered or provided by a licensed physician, physician assistant, psychologist, clinical social worker or CRNP.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum Provider Express — Applied Behavior Analysis Information (portal authorizations)', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2.html' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
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
        value: 'Depends on how the plan is funded. Fully insured Pennsylvania plans follow Act 146 of 2022 (Insurance Company Law § 2155, effective January 1, 2024). An urgent request for care not yet started is decided “as soon as possible, but not more than 72 hours” after receipt. An ongoing urgent course asked to continue at least 24 hours before it would be cut back or ended is decided within 24 hours. Every other prior authorization request is decided “within 15 days”; the insurer can extend that only if it promptly flagged missing information, and the provider then has at least 45 days to supply it. Act 146 also makes insurers post their prior-authorization list and offer a peer-to-peer on denial. Self-funded ERISA plans follow 29 CFR 2560.503-1 instead: pre-service decisions within 15 days, one 15-day extension, and 72 hours for urgent care.',
        status: 'plan-dependent',
        cites: [
          { title: 'Act 146 of 2022 — Insurance Company Law Art. XXI amendments incl. § 2155 prior authorization review (Justia)', url: 'https://law.justia.com/codes/pennsylvania/2022/act-146/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' }
        ],
        verifyVia: 'At benefits verification, ask whether the plan is fully insured (Pennsylvania-regulated) or self-funded (ERISA), then confirm the authorization turnaround and any continuation lead time with Optum (Provider Express, or the behavioral health number on the ID card).',
        blocker: 'per-case'
      },
      coordinationOfBenefits: {
        value: 'Which of two parents’ plans pays first is set by the plans’ own coordination terms. We found no Pennsylvania regulation fixing the order for a child on both parents’ plans, so ask each plan which one is primary. If the child also has Medical Assistance (including PH-95), UnitedHealthcare pays first. MA is payer of last resort (42 CFR 433.139): other private or governmental insurance “shall be utilized before billing the MA Program” (55 Pa. Code § 1101.64), and IBHS is not paid when payment is available through a third party (55 Pa. Code § 1155.31(e)). DHS tells providers to bill private insurance before submitting an MA claim for ASD assessment or treatment. Get UnitedHealthcare’s authorization even when MA is secondary. If the child also has TRICARE, TRICARE pays after this plan (10 U.S.C. 1079(i)(1)). CHAMPVA is the last payer after other health insurance (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [
          { title: '55 Pa. Code § 1101.64 — Third-party medical resources (TPR)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1101/s1101.64.html' },
          { title: '55 Pa. Code Chapter 1155 — Intensive Behavioral Health Services (payment)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/055/chapter1155/chap1155toc.html' },
          { title: 'PA DHS — Pennsylvania Autism Insurance Act (Act 62)', url: 'https://www.pa.gov/agencies/dhs/resources/intellectual-disabilities-autism/autism-services/pa-autism-insurance-act-62' },
          { title: '42 CFR 433.139 — Payment of claims (third-party liability)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' }
        ],
        verifyVia: 'Ask UnitedHealthcare at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has, including Medical Assistance/PH-95.',
        blocker: 'per-case'
      }
    },
    deliveryRules: {
      supervision: {
        value: 'Following CASP, direct case supervision is required at 1–2 hours for every 10 hours of direct treatment per week. Technicians work under a BCBA or licensed behavioral health clinician and should be RBTs or another certified technician as state mandate allows. Optum does not recommend parents serving as RBTs. For Pennsylvania Commercial members, Optum’s state entry allows ABA supervision by a BCBA or “a licensed behavior consultant, which is not required to be a traditionally licensed clinician” (Pennsylvania’s license is titled Behavior Specialist).',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, eff. July 2026; Pennsylvania Commercial entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'PA State Board of Medicine — Behavior Specialist Licensure Requirements Snapshot', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/medicine/behavior-specialist-licensure-snapshot' }
        ]
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
        value: 'Optum’s commercial ABA reimbursement policy (2022RP501A, updated June 2026) sets a maximum frequency per day for every code: 97151 32 units (8 hrs), 97152 16 (4 hrs), 97153 32 (8 hrs), 97154 18 (4.5 hrs), 97155 24 (6 hrs), 97156 16 (4 hrs), 97157 16 (4 hrs), 97158 16 (4 hrs), 0362T 16 (4 hrs), 0373T 32 (8 hrs) — and “If a provider bills in excess of 32 units per day, claims may be subject to non-reimbursement or recovery.” The ABA CPT FAQ confirms “For our commercial ABA program MUE’s apply.” There is no weekly hour cap: hours are authorized on documented clinical need, approved units can be shifted among codes within a cluster, and utilization below 80% of authorized hours over a two-week period is addressed at review. On Act 62 plans the statute bars visit limits, and the Insurance Department expects its CPI-adjusted dollar maximum ($51,908 for 2026 policies) to have no impact under parity.',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
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
        value: 'ABA is delivered at the least restrictive, most clinically appropriate level, and Optum expects it in multiple settings to support generalization. Not covered: services that are not ABA, such as a 1:1 aide during classroom instruction, or services covered under IDEA. School ABA does cover teacher training, meetings with school staff and school observations, and Optum’s checklist asks for school type, hours and IEP details. On Act 62 plans, coverage cannot hinge on coordination with an IEP.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — ABA Request for Services Checklist QRG (BH00853-25, 05/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/BH00853-25-QRG_ABAQRG.pdf' },
          { title: 'Act 62 of 2008 (HB 1150, PN 4115) — Insurance Company Law § 635.2 enacted text', url: 'https://www.palegis.us/legislation/bills/text/HTM/2007/0/HB1150/PN4115' }
        ]
      },
      billAsProvider: {
        value: 'A credentialed ABA provider: a master’s- or doctoral-level BCBA, or a licensed behavioral health clinician who attests to ABA expertise and is credentialed for ABA. A BCaBA or non-licensed individual works under the direct supervision of that BCBA or clinician, who takes responsibility for care. The Pennsylvania entry adds a state-licensed non-BCBA supervisor option.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, eff. July 2026; Pennsylvania Commercial entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }
        ]
      }
    },
    faq: [
      {
        q: 'Does UnitedHealthcare cover ABA therapy in Pennsylvania?',
        a: 'Yes, for autism spectrum disorder under Optum’s ABA criteria, with Optum’s Pennsylvania Commercial entry applied alongside them. On fully insured policies for groups of 51 or more employees, Act 62 adds a legal floor for members under 21.'
      },
      {
        q: 'Does Optum have Pennsylvania-specific ABA criteria?',
        a: 'Yes. Its ABA State Mandates document has a Pennsylvania Commercial entry: coverage under 21, and ABA supervision by a BCBA or a state-licensed non-BCBA (Optum says “licensed behavior consultant”; Pennsylvania’s license is Behavior Specialist). Where it conflicts with the national criteria, the state entry controls.'
      },
      {
        q: 'Does the UnitedHealthcare ABA assessment need prior authorization?',
        a: 'Yes. Optum requires prior authorization for ABA, and the Provider Express portal takes separate requests for the ABA assessment and for treatment.'
      },
      {
        q: 'What does UnitedHealthcare pay for ABA in Pennsylvania?',
        a: 'Commercial ABA rates are not published. They are negotiated in your participating-provider agreement.'
      },
      { q: 'How often does UnitedHealthcare (Optum) reauthorize ABA?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale. On Act 62 plans the insurer may review the treatment plan once every six months unless a different interval is agreed.' },
    ],
  },

};
